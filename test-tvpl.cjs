const axios = require('axios');
async function run() {
  const url = 'https://thuvienphapluat.vn/page/tim-kiem-van-ban.aspx?keyword=89/2026/TT-BTC';
  const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  
  const match = res.data.match(/href="([^"]+\.aspx)"/g);
  console.log("TVPL Links:", match ? match.slice(0, 5) : null);
}
run();
