const axios = require('axios');
const cheerio = require('cheerio');
const qs = require('querystring');

async function test() {
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
      'ctrl_191017_163$txtSearchKeyword': '200/2014/TT-BTC',
      'ctrl_191017_163$btnSearch': 'Tìm kiếm'
    };
    
    const postRes = await axios.post('https://vanban.chinhphu.vn/', qs.stringify(payload), {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    
    const $2 = cheerio.load(postRes.data);
    let firstHref = null;
    $2('a').each((i, el) => {
      let href = $2(el).attr('href');
      if (href && href.includes('docid=') && !firstHref) {
        firstHref = href;
      }
    });
    
    if (firstHref) {
        console.log("Fetching:", firstHref);
        const docRes = await axios.get('https://vanban.chinhphu.vn' + firstHref, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const $3 = cheerio.load(docRes.data);
        $3('a').each((i, el) => {
            let h = $3(el).attr('href');
            if (h && (h.includes('.doc') || h.includes('.pdf') || h.includes('.xls') || h.includes('.zip') || h.includes('.rar'))) {
                console.log("Attachment:", h, $3(el).text().trim());
            }
        });
    }
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
