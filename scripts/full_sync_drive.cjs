const https = require('https');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const FOLDER_ID = '1X9LkQPj14QtkKjBduZYoL7ICcmS83jdg';

// 1. Google OAuth token
async function getAccessToken() {
  const clasp = JSON.parse(fs.readFileSync('C:/Users/HUY/.clasprc.json', 'utf8'));
  const postData = new URLSearchParams({
    client_id: clasp.tokens.default.client_id,
    client_secret: clasp.tokens.default.client_secret,
    refresh_token: clasp.tokens.default.refresh_token,
    grant_type: 'refresh_token'
  }).toString();

  return new Promise((resolve, reject) => {
    const req = https.request('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const data = JSON.parse(body);
        if (data.access_token) resolve(data.access_token);
        else reject(new Error('Token refresh error: ' + body));
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// 2. List existing files in Drive folder
async function listFilesInFolder(token, folderId) {
  const query = encodeURIComponent(`'${folderId}' in parents and trashed=false`);
  return new Promise((resolve, reject) => {
    https.get(`https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name)&pageSize=100`, {
      headers: { 'Authorization': 'Bearer ' + token }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        try {
          const data = JSON.parse(body);
          resolve(data.files || []);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// 3. 2-Step Drive Upload (Step 1: Create metadata, Step 2: Upload media)
async function uploadPdfBufferToDrive(token, folderId, buffer, fileName) {
  // Step 1: Create file with metadata
  const fileId = await new Promise((resolve, reject) => {
    const req = https.request('https://www.googleapis.com/drive/v3/files', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        try {
          const data = JSON.parse(body);
          if (data.id) resolve(data.id);
          else reject(new Error('Step 1 failed: ' + body));
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.write(JSON.stringify({
      name: fileName,
      mimeType: 'application/pdf',
      parents: [folderId]
    }));
    req.end();
  });

  // Step 2: Upload binary content
  await new Promise((resolve, reject) => {
    const req = https.request(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/pdf',
        'Content-Length': buffer.length
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        if (res.statusCode === 200) resolve();
        else reject(new Error('Step 2 failed (' + res.statusCode + '): ' + body));
      });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });

  return fileId;
}

// 4. Generate PDF from Markdown if not present locally
async function generatePdfFromMarkdown(browser, title, number, mdContent) {
  const page = await browser.newPage();
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        @page { size: A4; margin: 20mm 15mm 20mm 20mm; }
        body { font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000; margin: 0; padding: 0; }
        .header { text-align: center; margin-bottom: 25px; }
        .country { font-weight: bold; font-size: 13pt; text-transform: uppercase; }
        .motto { font-size: 12pt; border-bottom: 1px solid #000; display: inline-block; padding-bottom: 4px; margin-bottom: 15px; }
        .number { font-size: 12pt; margin-bottom: 15px; font-weight: bold; }
        .title { font-weight: bold; font-size: 14pt; margin: 15px 0; text-transform: uppercase; }
        .content { text-align: justify; white-space: pre-wrap; font-size: 12.5pt; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="country">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
        <div class="motto">Độc lập - Tự do - Hạnh phúc</div>
        <div class="number">Số: ${number || ''}</div>
        <div class="title">${title}</div>
      </div>
      <div class="content">${mdContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
    </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 0 });
  const buffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    timeout: 0,
    margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '15mm' }
  });
  await page.close();
  return buffer;
}

async function main() {
  console.log('=== TIẾN HÀNH ĐỒNG BỘ 100% PDF LÊN GOOGLE DRIVE KIỂU VIỆT ===');
  const token = await getAccessToken();
  const existingFiles = await listFilesInFolder(token, FOLDER_ID);
  console.log(`Hiện tại trên Drive đã có: ${existingFiles.length} file.`);
  const driveFileMap = new Map(existingFiles.map(f => [f.name, f.id]));

  const decreesPath = 'public/data/decrees.json';
  const decrees = JSON.parse(fs.readFileSync(decreesPath, 'utf8'));

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const localPdfs = fs.existsSync('public/data/pdfs') ? fs.readdirSync('public/data/pdfs') : [];

  let newUploads = 0;

  for (let i = 0; i < decrees.length; i++) {
    const d = decrees[i];
    const expectedName = `${d.id}.pdf`;

    let fileId = driveFileMap.get(expectedName);

    if (!fileId) {
      try {
        process.stdout.write(`[${i + 1}/${decrees.length}] ${d.id}... `);

        let pdfBuffer = null;
        const localMatch = localPdfs.find(p => p.toLowerCase() === expectedName.toLowerCase());

        if (localMatch) {
          pdfBuffer = fs.readFileSync(path.join('public/data/pdfs', localMatch));
          process.stdout.write(`(dùng PDF có sẵn) `);
        } else {
          const mdPath = path.join('public/data/content', `${d.id}.md`);
          if (fs.existsSync(mdPath)) {
            const mdText = fs.readFileSync(mdPath, 'utf8');
            pdfBuffer = await generatePdfFromMarkdown(browser, d.title, d.number || d.decree_number, mdText);
            fs.writeFileSync(path.join('public/data/pdfs', expectedName), pdfBuffer);
            process.stdout.write(`(đã tạo PDF chuẩn) `);
          } else {
            console.log(`[BỎ QUA - Thiếu Markdown: ${mdPath}]`);
          }
        }

        if (pdfBuffer) {
          fileId = await uploadPdfBufferToDrive(token, FOLDER_ID, pdfBuffer, expectedName);
          driveFileMap.set(expectedName, fileId);
          newUploads++;
          console.log(`=> Tải lên Drive thành công! ID: ${fileId}`);
        }
      } catch (err) {
        console.error(`=> Lỗi:`, err.message);
      }
    } else {
      console.log(`[${i + 1}/${decrees.length}] ${d.id} -> Đã có trên Drive (ID: ${fileId})`);
    }

    if (fileId) {
      d.pdf_drive_id = fileId;
      d.pdf_url = `/data/pdfs/${expectedName}`;
    }
  }

  await browser.close();

  // 5. Cập nhật decrees.json
  fs.writeFileSync(decreesPath, JSON.stringify(decrees, null, 2), 'utf8');
  console.log(`\n✅ ĐÃ CẬP NHẬT decrees.json VỚI ĐỦ 100% pdf_drive_id! (Mới upload: ${newUploads})`);

  // 6. Đồng bộ lên Google Sheet qua API Google Apps Script
  console.log('\nĐang đồng bộ toàn bộ dữ liệu mới lên Google Sheet...');
  const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));
  const GAS_URL = 'https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec';
  
  try {
    const res = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'reset' })
    });
    console.log('Xóa bảng cũ Google Sheet:', await res.text());

    // Nạp theo chunk 15 dòng
    for (let j = 0; j < decrees.length; j += 15) {
      const chunk = decrees.slice(j, j + 15);
      const postRes = await fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(chunk)
      });
      console.log(`Đồng bộ Google Sheet gói ${Math.floor(j / 15) + 1}:`, await postRes.text());
    }
    console.log('🎉 TOÀN BỘ GOOGLE SHEET ĐÃ ĐỒNG BỘ 100% ID GOOGLE DRIVE!');
  } catch (err) {
    console.error('Lỗi đồng bộ GAS:', err);
  }
}

main().catch(console.error);
