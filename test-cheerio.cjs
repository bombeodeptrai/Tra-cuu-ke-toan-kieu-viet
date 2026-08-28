const axios = require('axios');
const cheerio = require('cheerio');

async function run() {
  try {
    const res = await axios.get('https://luatvietnam.vn/tim-kiem-van-ban.html?Keywords=200/2014/TT-BTC', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const $ = cheerio.load(res.data);
    const link = $('.doc-title a').attr('href');
    console.log("Found link:", link);
  } catch (e) {
    console.error(e.message);
  }
}
run();
