const axios = require('axios');
async function run() {
  try {
    const url = 'https://luatvietnam.vn/v1/search/document?Keyword=123/2020/NĐ-CP';
    const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    console.log("LV:", res.data);
  } catch(e) { console.error(e.message); }
}
run();
