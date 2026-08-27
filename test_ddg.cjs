const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  try {
    const query = 'site:luatvietnam.vn "125/2020/NĐ-CP"';
    const res = await axios.get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const $ = cheerio.load(res.data);
    let links = [];
    $('a.result__url').each((i, el) => {
      let href = $(el).attr('href');
      if (href) {
        // duckduckgo wraps links in /l/?uddg=...
        const urlParams = new URLSearchParams(href.split('?')[1]);
        if (urlParams.has('uddg')) {
            links.push(decodeURIComponent(urlParams.get('uddg')));
        } else {
            links.push(href);
        }
      }
    });
    console.log("DuckDuckGo results:", links);
  } catch (e) {
    console.log("FAILED:", e.message, e.response?.status);
  }
}
test();
