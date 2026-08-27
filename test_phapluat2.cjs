const axios = require('axios');
const cheerio = require('cheerio');

async function testPhapLuat() {
  try {
    const res = await axios.get('https://phapluat.gov.vn/he-thong-van-ban-phap-luat?keyword=125%2F2020%2FN%C4%90-CP', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const $ = cheerio.load(res.data);
    let links = [];
    $('a').each((i, el) => {
      let href = $(el).attr('href');
      if (href && href.includes('van-ban')) {
        links.push(href);
      }
    });
    console.log("Links found:", links.slice(0, 10));
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
testPhapLuat();
