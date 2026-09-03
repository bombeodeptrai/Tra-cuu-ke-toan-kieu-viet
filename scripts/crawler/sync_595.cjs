const puppeteer = require('puppeteer');
const https = require('https');
const fs = require('fs');
const path = require('path');

const FOLDER_ID = '1X9LkQPj14QtkKjBduZYoL7ICcmS83jdg';
const GAS_URL = 'https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec';

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

async function sync595() {
  const mdContent = fs.readFileSync('public/data/content/qd-595-2017-bhxh.md', 'utf8');
  console.log('Generating PDF for 595, md size:', mdContent.length);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
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
        <div class="country">BẢO HIỂM XÃ HỘI VIỆT NAM</div>
        <div class="motto">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM - Độc lập - Tự do - Hạnh phúc</div>
        <div class="number">Số: 595/QĐ-BHXH</div>
        <div class="title">QUYẾT ĐỊNH BAN HÀNH QUY TRÌNH THU BẢO HIỂM XÃ HỘI, BẢO HIỂM Y TẾ, BẢO HIỂM THẤT NGHIỆP, BẢO HIỂM TAI NẠN LAO ĐỘNG, BỆNH NGHỀ NGHIỆP; QUẢN LÝ SỔ BẢO HIỂM XÃ HỘI, THẺ BẢO HIỂM Y TẾ</div>
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
  await browser.close();

  const pdfPath = 'public/data/pdfs/qd-595-2017-bhxh.pdf';
  fs.writeFileSync(pdfPath, pdfBuffer);
  console.log(`Saved PDF (${(pdfBuffer.length / 1024).toFixed(1)} KB)`);

  const token = await getAccessToken();
  const driveId = await uploadPdfBufferToDrive(token, FOLDER_ID, pdfBuffer, 'qd-595-2017-bhxh.pdf');
  console.log('Uploaded to Google Drive! Drive ID:', driveId);

  const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
  const idx = decrees.findIndex(d => d.id === 'qd-595-2017-bhxh');
  if (idx >= 0) {
    decrees[idx].pdf_drive_id = driveId;
    decrees[idx].pdf_url = '/data/pdfs/qd-595-2017-bhxh.pdf';
    decrees[idx].content_url = '/data/content/qd-595-2017-bhxh.md';
    fs.writeFileSync('public/data/decrees.json', JSON.stringify(decrees, null, 2), 'utf8');
    console.log('Updated decrees.json with Drive ID!');
  }

  // Sync to Google Sheet
  const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));
  await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify([decrees[idx]])
  });
  console.log('Synced 595 to Google Sheet!');
}

sync595().catch(console.error);
