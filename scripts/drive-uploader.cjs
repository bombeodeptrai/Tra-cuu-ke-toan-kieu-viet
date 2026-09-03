const https = require('https');
const fs = require('fs');
const path = require('path');

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

// 2. Create or get existing Google Drive folder
async function getOrCreateFolder(token, folderName) {
  const query = encodeURIComponent(`name='${folderName}' and mimeType='application/vnd.google-apps.folder' and trashed=false`);
  const listUrl = `https://www.googleapis.com/drive/v3/files?q=${query}`;

  const existing = await new Promise((resolve, reject) => {
    https.get(listUrl, { headers: { 'Authorization': 'Bearer ' + token } }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve(JSON.parse(body)));
    }).on('error', reject);
  });

  if (existing.files && existing.files.length > 0) {
    console.log(`Found existing folder: ${folderName} (ID: ${existing.files[0].id})`);
    return existing.files[0].id;
  }

  // Create new folder
  console.log(`Creating folder: ${folderName}...`);
  return new Promise((resolve, reject) => {
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
    req.write(JSON.stringify({
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder'
    }));
    req.end();
  });
}

// 3. Share folder public read
async function makePublic(token, fileOrFolderId) {
  return new Promise((resolve) => {
    const req = https.request(`https://www.googleapis.com/drive/v3/files/${fileOrFolderId}/permissions`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve(JSON.parse(body)));
    });
    req.write(JSON.stringify({
      role: 'reader',
      type: 'anyone'
    }));
    req.end();
  });
}

async function main() {
  try {
    const token = await getAccessToken();
    const folderId = await getOrCreateFolder(token, 'Kiểu Việt - Kho Văn Bản PDF');
    await makePublic(token, folderId);
    console.log('Folder ready! ID:', folderId);
    console.log(`Folder URL: https://drive.google.com/drive/folders/${folderId}`);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
