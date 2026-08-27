const axios = require('axios');
const cheerio = require('cheerio');

async function testPhapLuat() {
  try {
    // Search for 125/2020/NĐ-CP
    const url = 'https://phapluat.gov.vn/api/document/search'; // Guessing
    const res = await axios.get('https://phapluat.gov.vn/he-thong-van-ban-phap-luat?keyword=125%2F2020%2FN%C4%90-CP', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const $ = cheerio.load(res.data);
    // Find next.js data
    const nextData = $('#__NEXT_DATA__').html();
    if (nextData) {
      const data = JSON.parse(nextData);
      console.log(JSON.stringify(data.props.pageProps, null, 2).substring(0, 500));
    } else {
      console.log('No NEXT_DATA');
      console.log(res.data.substring(0, 1000));
    }
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
testPhapLuat();
