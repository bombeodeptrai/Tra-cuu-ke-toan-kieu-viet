const axios = require('axios');
const urls = [
  'https://vanban.chinhphu.vn/?pageid=27160&docid=201272', 
  'https://vbpl.vn/tw/Pages/vbpq-toanvan.aspx?ItemID=143615',
  'https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=143615', // Another case
  'https://congbao.chinhphu.vn/noi-dung-van-ban-so-125-2020-nd-cp-32483' 
];

async function test() {
  for (let url of urls) {
    try {
      console.log('Fetching', url);
      const res = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        timeout: 10000
      });
      console.log('SUCCESS:', url, 'Length:', res.data.length);
    } catch(e) {
      console.log('FAILED:', url, e.message);
    }
  }
}
test();
