const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  try {
    const res = await axios.get('https://luatvietnam.vn/thu-tuc-hanh-chinh/nghi-dinh-125-2020-nd-cp-192661-d1.html', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const $ = cheerio.load(res.data);
    let content = $('.doc-content').text().substring(0, 1000);
    if (!content.trim()) content = $('#doc-content').text().substring(0, 1000);
    if (!content.trim()) content = $('.content').text().substring(0, 1000);
    console.log("Content starts with:", content.trim().replace(/\s+/g, ' '));
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
