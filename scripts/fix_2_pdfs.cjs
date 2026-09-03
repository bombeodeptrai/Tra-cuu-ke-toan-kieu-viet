const puppeteer = require('puppeteer');
const https = require('https');
const fs = require('fs');

const FOLDER_ID = '1X9LkQPj14QtkKjBduZYoL7ICcmS83jdg';

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
    req.write(postData);
    req.end();
  });
}

async function uploadPdfBufferToDrive(token, folderId, buffer, fileName) {
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

async function generatePdfFromMarkdown(browser, title, docNumber, mdContent) {
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
        <div class="number">${docNumber}</div>
        <div class="title">${title}</div>
      </div>
      <div class="content">${mdContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
    </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 0 });
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    timeout: 0,
    margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '15mm' }
  });
  await page.close();
  return pdfBuffer;
}

async function fixTwoDocs() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const token = await getAccessToken();
  const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

  // 1. nd-180-2024-nd-cp
  console.log('Generating PDF for nd-180-2024-nd-cp...');
  const md180 = fs.readFileSync('public/data/content/nd-180-2024-nd-cp.md', 'utf8');
  const buf180 = await generatePdfFromMarkdown(browser, 'NGHỊ ĐỊNH VỀ CHÍNH SÁCH GIẢM THUẾ GTGT', 'Số: 180/2024/NĐ-CP', md180);
  fs.writeFileSync('public/data/pdfs/nd-180-2024-nd-cp.pdf', buf180);
  console.log('Saved local PDF for nd-180:', buf180.length, 'bytes');
  const driveId180 = await uploadPdfBufferToDrive(token, FOLDER_ID, buf180, 'nd-180-2024-nd-cp.pdf');
  console.log('Uploaded nd-180 to Drive:', driveId180);

  // 2. tt-24-2024-tt-btc
  console.log('Generating PDF for tt-24-2024-tt-btc...');
  const md24 = fs.readFileSync('public/data/content/tt-24-2024-tt-btc.md', 'utf8');
  const buf24 = await generatePdfFromMarkdown(browser, 'THÔNG TƯ HƯỚNG DẪN CHẾ ĐỘ KẾ TOÁN HÀNH CHÍNH SỰ NGHIỆP', 'Số: 24/2024/TT-BTC', md24);
  fs.writeFileSync('public/data/pdfs/tt-24-2024-tt-btc.pdf', buf24);
  console.log('Saved local PDF for tt-24:', buf24.length, 'bytes');
  const driveId24 = await uploadPdfBufferToDrive(token, FOLDER_ID, buf24, 'tt-24-2024-tt-btc.pdf');
  console.log('Uploaded tt-24 to Drive:', driveId24);

  await browser.close();

  // Update decrees.json
  const idx180 = decrees.findIndex(d => d.id === 'nd-180-2024-nd-cp');
  if (idx180 >= 0) decrees[idx180].pdf_drive_id = driveId180;

  const idx24 = decrees.findIndex(d => d.id === 'tt-24-2024-tt-btc');
  if (idx24 >= 0) decrees[idx24].pdf_drive_id = driveId24;

  fs.writeFileSync('public/data/decrees.json', JSON.stringify(decrees, null, 2), 'utf8');
  console.log('Updated decrees.json with real Drive IDs!');
}

fixTwoDocs().catch(console.error);
