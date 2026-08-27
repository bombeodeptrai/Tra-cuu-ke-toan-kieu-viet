const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  try {
    const res = await axios.get('https://congbao.chinhphu.vn/tim-kiem?keyword=125%2F2020%2FN%C4%90-CP', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    console.log("Length:", res.data.length);
    const $ = cheerio.load(res.data);
    let html = $.html();
    console.log("Title:", $('title').text());
    let results = $('.list-document').length;
    console.log("List Document elements:", results);
    console.log(html.substring(0, 1000));
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
