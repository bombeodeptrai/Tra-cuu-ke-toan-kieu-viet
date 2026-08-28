const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  try {
    const res = await axios.get('https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=146459', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    console.log("Length:", res.data.length);
    const $ = cheerio.load(res.data);
    const links = [];
    $('a').each((i, el) => {
      const h = $(el).attr('href');
      if (h && (h.includes('.doc') || h.includes('.pdf') || h.includes('.xls') || h.includes('.zip') || h.includes('.rar') || h.includes('FileDownload'))) {
        links.push($(el).text().trim() + " -> " + h);
      }
    });
    console.log("Attachments:", links);
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
