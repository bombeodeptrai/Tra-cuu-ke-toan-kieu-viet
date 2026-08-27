const axios = require('axios');
const cheerio = require('cheerio');
async function test() {
  try {
    const res = await axios.get('https://vanban.chinhphu.vn/', {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const $ = cheerio.load(res.data);
    let formAction = $('form').attr('action');
    console.log("Form Action:", formAction);
    let inputs = [];
    $('form input').each((i, el) => {
      inputs.push($(el).attr('name'));
    });
    console.log("Inputs:", inputs);
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
