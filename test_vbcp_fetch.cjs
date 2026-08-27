const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  try {
    const res = await axios.get('https://vanban.chinhphu.vn/?pageid=27160&docid=201364', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const $ = cheerio.load(res.data);
    let content = $('.Detail .Content').text().replace(/\s+/g, ' ');
    if (!content.trim()) content = $('.content').text().replace(/\s+/g, ' ');
    console.log("Length:", res.data.length);
    console.log("Extracted Content length:", content.length);
    console.log("Preview:", content.substring(0, 500));
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
