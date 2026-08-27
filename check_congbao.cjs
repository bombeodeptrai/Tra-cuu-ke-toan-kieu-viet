const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  const res = await axios.get('https://congbao.chinhphu.vn/noi-dung-van-ban-so-125-2020-nd-cp-32483', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  const $ = cheerio.load(res.data);
  // congbao text is usually in some div. Let's find it.
  const title = $('title').text();
  console.log("Title:", title);
  
  // Try to find content
  let text = $('.doc-content').text().substring(0, 500);
  if (!text.trim()) text = $('#doc-content').text().substring(0, 500);
  if (!text.trim()) text = $('.content').text().substring(0, 500);
  console.log("Content start:", text.trim().replace(/\s+/g, ' '));
}
test();
