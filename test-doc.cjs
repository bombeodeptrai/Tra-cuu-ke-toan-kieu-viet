const https = require('https');

async function checkDoc(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`URL: ${url} | Status: ${res.statusCode} | Length: ${data.length}`);
        const hasPdf = data.includes('.pdf') || data.includes('.doc') || data.includes('.docx');
        console.log(`Attachments found: ${hasPdf}`);
        resolve();
      });
    }).on('error', e => resolve(console.log('Error:', e.message)));
  });
}

(async () => {
  await checkDoc('https://congbao.chinhphu.vn/van-ban/thong-tu-so-99-2025-tt-btc-46529.htm');
})();