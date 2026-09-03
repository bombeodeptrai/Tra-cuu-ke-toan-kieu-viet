const axios = require('axios');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

const turndown = new TurndownService({ headingStyle: 'atx' });

async function testClean() {
  const url = 'https://hethongphapluat.com/nghi-dinh-145-2020-nd-cp-huong-dan-bo-luat-lao-dong-ve-dieu-kien-lao-dong-va-quan-he-lao-dong.html';
  const res = await axios.get(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
  });
  const $ = cheerio.load(res.data);
  $('.model_prompt, script, style, .ads, .comment, noscript').remove();
  const rawHtml = $('#tab_noi_dung_vb').html() || $('article').html() || '';
  const markdown = turndown.turndown(rawHtml);
  console.log('Clean markdown length:', markdown.length);
  console.log('--- FIRST 500 CHARS ---');
  console.log(markdown.substring(0, 500));
  console.log('--- LAST 500 CHARS ---');
  console.log(markdown.substring(markdown.length - 500));
}
testClean();
