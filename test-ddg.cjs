const axios = require('axios');
async function run() {
  try {
    const res = await axios.post('https://lite.duckduckgo.com/lite/', 'q=' + encodeURIComponent('site:hethongphapluat.com "200/2014/TT-BTC"'), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'Mozilla/5.0' }
    });
    console.log(res.data);
  } catch(e) { console.error(e.message); }
}
run();
