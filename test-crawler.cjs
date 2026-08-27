const https = require('https');
const fs = require('fs');

// Test fetching RSS / API from Cong Bao or VBPL
console.log('Testing legal crawler architecture...');

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, data: data.substring(0, 1000) }));
    });
    req.on('error', err => reject(err));
  });
}

(async () => {
  try {
    const res = await fetchUrl('https://congbao.chinhphu.vn/');
    console.log('Cong Bao Portal connectivity:', res.status);
  } catch (e) {
    console.log('Error connecting:', e.message);
  }
})();