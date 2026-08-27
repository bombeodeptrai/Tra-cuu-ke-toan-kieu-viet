const axios = require('axios');
const fs = require('fs');
async function test() {
  try {
    const res = await axios.get('https://luatvietnam.vn/thu-tuc-hanh-chinh/nghi-dinh-125-2020-nd-cp-192661-d1.html', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    fs.writeFileSync('lvn_test.html', res.data);
    console.log("Saved to lvn_test.html");
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
