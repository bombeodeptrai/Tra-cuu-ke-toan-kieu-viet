const axios = require('axios');

async function run() {
  try {
    const res = await axios.get('https://html.duckduckgo.com/html/?q=site:vbpl.vn "200/2014/TT-BTC"', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const matches = res.data.match(/https:\/\/vbpl.vn.*?ItemID=\d+/g);
    console.log("Matches:", matches);
  } catch (e) {
    console.error(e.message);
  }
}
run();
