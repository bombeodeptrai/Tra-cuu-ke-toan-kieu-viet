const axios = require('axios');
const cheerio = require('cheerio');
const qs = require('querystring');

async function test() {
  try {
    const res = await axios.get('https://vanban.chinhphu.vn/', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const $ = cheerio.load(res.data);
    const viewState = $('#__VIEWSTATE').val();
    const viewStateGen = $('#__VIEWSTATEGENERATOR').val();
    const eventValidation = $('#__EVENTVALIDATION').val();
    
    // Attempt POST
    const payload = {
      __EVENTTARGET: '',
      __EVENTARGUMENT: '',
      __VIEWSTATE: viewState,
      __VIEWSTATEGENERATOR: viewStateGen,
      __EVENTVALIDATION: eventValidation,
      'ctrl_191017_163$txtSearchKeyword': '125/2020/NĐ-CP',
      'ctrl_191017_163$btnSearch': 'Tìm kiếm'
    };
    
    const postRes = await axios.post('https://vanban.chinhphu.vn/', qs.stringify(payload), {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    
    const $2 = cheerio.load(postRes.data);
    let links = [];
    $2('a').each((i, el) => {
      let href = $2(el).attr('href');
      if (href && href.includes('docid=')) {
        links.push({ href, text: $2(el).text().trim() });
      }
    });
    console.log("Found links after POST:", links.slice(0, 5));
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
