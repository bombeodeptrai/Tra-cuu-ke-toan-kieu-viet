const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  try {
    const res = await axios.get('https://luatvietnam.vn/tim-kiem-van-ban.html?Keywords=125/2020/N%C4%90-CP', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const $ = cheerio.load(res.data);
    let html = $.html();
    console.log(html.substring(0, 1000));
    let links = [];
    $('a').each((i, el) => {
      let href = $(el).attr('href');
      if (href && href.includes('125-2020-nd-cp')) {
        links.push(href);
      }
    });
    console.log("Matching links:", links);
  } catch (e) {
    console.log("FAILED:", e.message, e.response?.status);
  }
}
test();
