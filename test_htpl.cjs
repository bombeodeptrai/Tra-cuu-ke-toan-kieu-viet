const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  try {
    const res = await axios.get('https://hethongphapluat.com/nghi-dinh-125-2020-nd-cp-xu-phat-vi-pham-hanh-chinh-ve-thue-hoa-don.html', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    console.log("Length:", res.data.length);
    const $ = cheerio.load(res.data);
    console.log("Title:", $('title').text());
    console.log("Body length:", $('body').text().length);
    console.log("Content:", $('#toanvan').text().substring(0, 500).replace(/\s+/g, ' '));
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
