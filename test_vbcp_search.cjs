const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  try {
    const res = await axios.get('https://vanban.chinhphu.vn/default.aspx?pageid=27159&Title=125/2020/N%C4%90-CP', {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const $ = cheerio.load(res.data);
    let links = [];
    $('a').each((i, el) => {
      let href = $(el).attr('href');
      let text = $(el).text();
      if (href && href.includes('docid=')) {
        links.push({ href, text: text.trim() });
      }
    });
    console.log("Found links:", links);
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
