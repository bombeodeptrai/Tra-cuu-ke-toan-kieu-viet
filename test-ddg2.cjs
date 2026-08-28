const axios = require('axios');
const cheerio = require('cheerio');
async function run() {
  try {
    const query = encodeURIComponent(`site:hethongphapluat.com "123/2020/NĐ-CP"`);
    const res = await axios.post('https://lite.duckduckgo.com/lite/', `q=${query}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    const $ = cheerio.load(res.data);
    const link = $('.result-snippet').closest('tr').prev('tr').find('.result-url').attr('href');
    console.log("DDG Link:", link);
  } catch(e) { console.error(e.message); }
}
run();
