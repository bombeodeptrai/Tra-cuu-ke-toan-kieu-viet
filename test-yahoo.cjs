const axios = require('axios');
async function run() {
  try {
    const url = 'https://search.yahoo.com/search?p=' + encodeURIComponent('site:vbpl.vn "vbpq-toanvan.aspx" "123/2020/NĐ-CP"');
    const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    const html = res.data;
    const match = html.match(/vbpl\.vn[^"&]+/g);
    console.log("Matches:", match ? match.filter(m => m.includes('ItemID=')) : null);
  } catch(e) { console.error(e.message); }
}
run();
