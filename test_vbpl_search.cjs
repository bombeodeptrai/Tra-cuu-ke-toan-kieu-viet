const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  try {
    const res = await axios.get('https://vbpl.vn/TW/Pages/timkiem.aspx?Keyword=200%2F2014%2FTT-BTC', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const $ = cheerio.load(res.data);
    let firstUrl = null;
    $('.title-list a').each((i, el) => {
      if (!firstUrl) {
          firstUrl = 'https://vbpl.vn' + $(el).attr('href');
      }
    });
    console.log("VBPL Found:", firstUrl);
    
    if (firstUrl) {
        const docRes = await axios.get(firstUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const $2 = cheerio.load(docRes.data);
        const links = [];
        $2('.title a').each((i, el) => {
          const h = $2(el).attr('href');
          if (h && (h.includes('FileDownload') || h.includes('.doc') || h.includes('.rar'))) {
              links.push({ name: $2(el).text().trim(), link: h });
          }
        });
        $2('a').each((i, el) => {
          const h = $2(el).attr('href');
          if (h && (h.includes('FileDownload') || h.includes('.doc') || h.includes('.rar'))) {
              links.push({ name: $2(el).text().trim(), link: h });
          }
        });
        console.log("Attachments:", links.slice(0,10));
    }
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
