const axios = require('axios');
const cheerio = require('cheerio');
async function run() {
  try {
    const query = encodeURIComponent(`site:vbpl.vn "vbpq-toanvan.aspx" "123/2020/NĐ-CP"`);
    const res = await axios.post('https://lite.duckduckgo.com/lite/', `q=${query}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:109.0) Gecko/20100101 Firefox/111.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Origin': 'https://lite.duckduckgo.com',
        'Referer': 'https://lite.duckduckgo.com/',
        'Upgrade-Insecure-Requests': '1'
      }
    });
    const html = res.data;
    const match = html.match(/vbpl\.vn[^"&]+/g);
    console.log("Matches:", match ? match.filter(m => m.includes('ItemID=')) : null);
  } catch(e) { console.error(e.message); }
}
run();
