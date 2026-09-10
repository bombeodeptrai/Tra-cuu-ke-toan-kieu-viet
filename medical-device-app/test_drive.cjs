const fs = require('fs');
const https = require('https');

async function main() {
  const clasp = JSON.parse(fs.readFileSync('C:/Users/HUY/.clasprc.json', 'utf8'));
  const postData = new URLSearchParams({
    client_id: clasp.tokens.default.client_id,
    client_secret: clasp.tokens.default.client_secret,
    refresh_token: clasp.tokens.default.refresh_token,
    grant_type: 'refresh_token'
  }).toString();

  const token = await new Promise((res, rej) => {
    const req = https.request('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }, (r) => {
      let b = '';
      r.on('data', c => b += c);
      r.on('end', () => res(JSON.parse(b).access_token));
    });
    req.write(postData);
    req.end();
  });

  const query = encodeURIComponent("mimeType='application/vnd.google-apps.folder' and trashed=false");
  https.get('https://www.googleapis.com/drive/v3/files?q=' + query, {
    headers: { 'Authorization': 'Bearer ' + token }
  }, (r) => {
    let b = '';
    r.on('data', c => b += c);
    r.on('end', () => {
      const data = JSON.parse(b);
      console.log('Folders on Drive:', data.files ? data.files.map(f => ({ name: f.name, id: f.id })) : data);
    });
  });
}
main();
