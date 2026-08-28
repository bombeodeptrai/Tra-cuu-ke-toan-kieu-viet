const axios = require('axios');
const cheerio = require('cheerio');
const qs = require('querystring');

async function test(keyword) {
  try {
    const res = await axios.get('https://vanban.chinhphu.vn/', { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const $ = cheerio.load(res.data);
    const viewState = $('#__VIEWSTATE').val();
    const viewStateGen = $('#__VIEWSTATEGENERATOR').val();
    const eventValidation = $('#__EVENTVALIDATION').val();
    
    const payload = {
      __EVENTTARGET: '',
      __EVENTARGUMENT: '',
      __VIEWSTATE: viewState,
      __VIEWSTATEGENERATOR: viewStateGen,
      __EVENTVALIDATION: eventValidation,
      'ctrl_191017_163$txtSearchKeyword': keyword,
      'ctrl_191017_163$btnSearch': 'Tìm kiếm'
    };
    
    const postRes = await axios.post('https://vanban.chinhphu.vn/', qs.stringify(payload), {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    
    const $2 = cheerio.load(postRes.data);
    $2('a').each((i, el) => {
      let href = $2(el).attr('href');
      if (href && href.includes('docid=')) {
        console.log("Found:", href, $2(el).text().trim().replace(/\s+/g, ' '));
      }
    });
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test(process.argv[2]);
