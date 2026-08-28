const axios = require('axios');
async function run() {
  const url = 'https://vanban.chinhphu.vn/?pageid=27160&keyword=89/2026/TT-BTC';
  const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  
  const html = res.data;
  const scriptMatches = html.match(/url\s*:\s*['"]([^'"]+)['"]/g);
  console.log("AJAX Endpoints:", scriptMatches);
}
run();
