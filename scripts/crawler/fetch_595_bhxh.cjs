const puppeteer = require('puppeteer');
const TurndownService = require('turndown');
const fs = require('fs');

async function fetch595() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
  
  console.log('Navigating to BHXH search...');
  await page.goto('https://baohiemxahoi.gov.vn/vanban/Pages/default.aspx', { waitUntil: 'domcontentloaded', timeout: 30000 });

  // Look for search input
  const inputs = await page.$$('input[type="text"]');
  console.log('Found text inputs:', inputs.length);
  if (inputs.length > 0) {
    await inputs[0].type('595/QĐ-BHXH');
    await page.keyboard.press('Enter');
    await page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 15000 }).catch(() => {});
  }

  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a'))
      .map(a => ({ href: a.href, text: a.innerText.trim().replace(/\s+/g, ' ') }))
      .filter(a => a.text.includes('595') || a.href.includes('595'));
  });

  console.log('BHXH links found:', links);

  if (links.length > 0) {
    const detailUrl = links[0].href;
    console.log('Navigating to detail:', detailUrl);
    await page.goto(detailUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    const contentHtml = await page.evaluate(() => {
      const el = document.querySelector('.detail-content, #content, .article-content, .view-detail');
      return el ? el.innerHTML : document.body.innerHTML;
    });

    const turndown = new TurndownService({ headingStyle: 'atx' });
    const md = turndown.turndown(contentHtml).trim();
    fs.writeFileSync('public/data/content/qd-595-2017-bhxh.md', md, 'utf8');
    console.log('SUCCESS! Saved 595, length:', md.length);
  }

  await browser.close();
}

fetch595().catch(console.error);
