const axios = require('axios');
async function run() {
  try {
    const url = 'https://luatminhkhue.vn/search?q=' + encodeURIComponent('123/2020/NĐ-CP');
    const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    const match = res.data.match(/href="([^"]+)"/g).filter(m => m.includes('123-2020-nd-cp'));
    console.log("LMK:", match);
  } catch(e) { console.error(e.message); }
}
run();
