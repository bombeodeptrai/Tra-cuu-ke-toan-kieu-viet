const axios = require('axios');
const cheerio = require('cheerio');

async function testVanbanChinhphu(keyword) {
  try {
    const url = 'https://vanban.chinhphu.vn/?pageid=27160&keyword=' + encodeURIComponent(keyword);
    const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const $ = cheerio.load(res.data);
    const results = [];
    $('a').each((i, el) => {
      const href = $(el).attr('href') || '';
      const text = $(el).text().trim();
      if (text.includes(keyword) || (href.includes('docid=') || href.includes('vbpq'))) {
        results.push({ href, text });
      }
    });
    console.log(keyword, 'vanban.chinhphu results:', results.slice(0, 3));
  } catch (e) {
    console.error(keyword, 'error:', e.message);
  }
}

testVanbanChinhphu('145/2020/NĐ-CP');
