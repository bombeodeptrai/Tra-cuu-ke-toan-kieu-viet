const axios = require('axios');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const fs = require('fs');

async function fix595() {
  const url = 'https://hethongphapluat.com/quyet-dinh-595-qd-bhxh-ban-hanh-quy-trinh-thu-bao-hiem-xa-hoi-bao-hiem-y-te-bao-hiem-that-nghiep-bao-hiem-tai-nan-lao-dong-benh-nghe-nghiep-quan-ly-so-bao-hiem-xa-hoi-the-bao-hiem-y-te.html';
  const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const $ = cheerio.load(res.data);
  
  console.log('HTML size:', res.data.length);
  
  // Find the container that actually has the text
  let bestHtml = '';
  let maxLen = 0;
  
  $('div, section, article').each((i, el) => {
    const textLen = $(el).text().trim().length;
    const id = $(el).attr('id') || '';
    const cls = $(el).attr('class') || '';
    if ((id.includes('content') || id.includes('tab') || id.includes('toan-van') || cls.includes('content') || cls.includes('article') || cls.includes('detail')) && textLen > maxLen && textLen < res.data.length * 0.9) {
      maxLen = textLen;
      bestHtml = $(el).html();
      console.log(`Candidate: id="${id}" class="${cls}" textLen=${textLen}`);
    }
  });

  console.log('Max text length found:', maxLen);
  
  if (maxLen > 1000) {
    $('.model_prompt, script, style, .ads, .comment, noscript, header, footer, nav').remove();
    const turndown = new TurndownService({ headingStyle: 'atx' });
    const md = turndown.turndown(bestHtml).trim();
    fs.writeFileSync('public/data/content/qd-595-2017-bhxh.md', md, 'utf8');
    console.log('SUCCESS! Saved qd-595-2017-bhxh.md, length:', md.length);
  }
}

fix595().catch(console.error);
