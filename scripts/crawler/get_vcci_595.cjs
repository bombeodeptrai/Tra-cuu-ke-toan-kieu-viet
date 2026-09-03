const axios = require('axios');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const fs = require('fs');

async function getVcci595() {
  const url = 'https://vanban.vcci.com.vn/quyet-dinh-595qd-bhxh-cua-bao-hiem-xa-hoi-viet-nam-ve-viec-ban-hanh-quy-trinh-thu-bao-hiem-xa-hoi-bao-hiem-y-te-bao-hiem-that-nghiep-bao-hiem-tai-nan-lao-dong-benh-nghe-nghiep-quan-ly-so-bao-hiem-xa-hoi-the-bao-hiem-y-te';
  const res = await axios.get(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  console.log('Status:', res.status, 'HTML length:', res.data.length);
  const $ = cheerio.load(res.data);
  $('script, style, noscript, .ads, header, footer, nav').remove();
  
  let bestHtml = '';
  let maxLen = 0;
  
  $('div, article, section').each((i, el) => {
    const textLen = $(el).text().trim().length;
    if (textLen > maxLen && textLen < res.data.length * 0.95) {
      maxLen = textLen;
      bestHtml = $(el).html();
    }
  });

  console.log('Best container text length:', maxLen);
  if (maxLen > 5000) {
    const turndown = new TurndownService({ headingStyle: 'atx' });
    const md = turndown.turndown(bestHtml).trim();
    fs.writeFileSync('public/data/content/qd-595-2017-bhxh.md', md, 'utf8');
    console.log('Successfully saved qd-595-2017-bhxh.md! Length:', md.length);
  }
}

getVcci595().catch(console.error);
