const axios = require('axios');
async function run() {
  try {
    const res = await axios.post('https://lite.duckduckgo.com/lite/', 'q=' + encodeURIComponent('site:hethongphapluat.com 123/2020/NĐ-CP'), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'Mozilla/5.0' }
    });
    const m = res.data.match(/hethongphapluat\.com[^<"'\s]+/g);
    console.log(m);
  } catch(e) { console.error(e.message); }
}
run();
