const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  try {
    const res = await axios.get('https://congbao.chinhphu.vn/tim-kiem?keyword=125%2F2020%2FN%C4%90-CP', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const $ = cheerio.load(res.data);
    let links = [];
    $('a').each((i, el) => {
      let href = $(el).attr('href');
      let text = $(el).text().trim();
      if (href && href.includes('noi-dung-van-ban')) {
        links.push({ href, text });
      }
    });
    console.log("Found links:", links.slice(0, 5));
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
