const axios = require('axios');
const cheerio = require('cheerio');

async function testFetch() {
  const url = 'https://hethongphapluat.com/nghi-dinh-145-2020-nd-cp-huong-dan-bo-luat-lao-dong-ve-dieu-kien-lao-dong-va-quan-he-lao-dong.html';
  const res = await axios.get(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
  });
  const $ = cheerio.load(res.data);
  const text = $('#tab_noi_dung_vb, .law-content, .detail-content, .content, article').first().text();
  console.log('Status:', res.status, 'HTML length:', res.data.length, 'Text length:', text.trim().length);
  console.log('First 200 chars:', text.trim().substring(0, 200));
}
testFetch();
