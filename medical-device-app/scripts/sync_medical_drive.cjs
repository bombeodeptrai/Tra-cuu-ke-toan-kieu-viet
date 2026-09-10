// scripts/sync_medical_drive.cjs
const fs = require('fs');
const path = require('path');
const https = require('https');

// 1. Get Google OAuth access token from .clasprc.json
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
        else reject(new Error('Failed to refresh token: ' + body));
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// 2. Get or create folder
async function getOrCreateFolder(token, folderName, parentId = null) {
  let query = `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and trashed=false`;
  if (parentId) query += ` and '${parentId}' in parents`;
  const listUrl = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}`;

  const existing = await new Promise((resolve, reject) => {
    https.get(listUrl, { headers: { 'Authorization': 'Bearer ' + token } }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve(JSON.parse(body)));
    }).on('error', reject);
  });

  if (existing.files && existing.files.length > 0) {
    console.log(`Found folder: ${folderName} -> ID: ${existing.files[0].id}`);
    return existing.files[0].id;
  }

  // Create folder
  console.log(`Creating folder: ${folderName}...`);
  return new Promise((resolve, reject) => {
    const metadata = {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
      parents: parentId ? [parentId] : []
    };
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
        const data = JSON.parse(body);
        resolve(data.id);
      });
    });
    req.on('error', reject);
    req.write(JSON.stringify(metadata));
    req.end();
  });
}

async function run() {
  console.log('--- KHỞI TẠO KHO DRIVE TBYT KIỂU VIỆT & PHÒNG KHÁM HÒA ĐỨC ---');
  const token = await getAccessToken();
  console.log('✓ Xác thực Google Drive thành công!');

  const rootFolderId = await getOrCreateFolder(token, 'Kiểu Việt - TBYT & Phòng Khám Hòa Đức');
  const banGocId = await getOrCreateFolder(token, '01_BanGoc_PDF_DOCX', rootFolderId);
  const toanVanId = await getOrCreateFolder(token, '02_ToanVan_PhanTich', rootFolderId);
  const bieuMauId = await getOrCreateFolder(token, '03_14_BieuMau_ThucChien', rootFolderId);

  const driveManifest = {
    rootFolderId,
    banGocFolderId: banGocId,
    toanVanFolderId: toanVanId,
    bieuMauFolderId: bieuMauId,
    syncedAt: new Date().toISOString()
  };

  const manifestPath = path.join(__dirname, '../src/data/drive-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(driveManifest, null, 2), 'utf8');
  console.log('✓ Đã lưu manifest Google Drive:', manifestPath);
  console.log('Drive Root Folder ID:', rootFolderId);
}

run().catch(console.error);
