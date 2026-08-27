const axios = require('axios');
const fs = require('fs');
async function test() {
  try {
    const res = await axios.get('https://congbao.chinhphu.vn/tim-kiem?keyword=125%2F2020%2FN%C4%90-CP', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    fs.writeFileSync('congbao_search.html', res.data);
    console.log("Saved congbao_search.html");
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
