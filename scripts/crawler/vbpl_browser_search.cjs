const puppeteer = require('puppeteer');

async function searchVbpl(keyword) {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36');
  
  console.log(`Navigating to vbpl.vn for: ${keyword}...`);
  await page.goto('https://vbpl.vn', { waitUntil: 'networkidle2', timeout: 30000 });

  // Find search input and type keyword
  await page.waitForSelector('input[type="text"], input[type="search"], .search-input', { timeout: 10000 });
  const inputSelector = await page.evaluate(() => {
    const inputs = Array.from(document.querySelectorAll('input'));
    const searchInput = inputs.find(i => i.placeholder?.includes('Tìm') || i.name?.includes('keyword') || i.id?.includes('search'));
    return searchInput ? (searchInput.id ? '#' + searchInput.id : 'input[name="' + searchInput.name + '"]') : 'input[type="text"]';
  });

  console.log('Search input found:', inputSelector);
  await page.type(inputSelector, keyword);
  await page.keyboard.press('Enter');

  await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});

  const currentUrl = page.url();
  console.log('Search result URL:', currentUrl);

  const results = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('a'));
    return items
      .map(a => ({ href: a.href, text: a.innerText.trim().replace(/\s+/g, ' ') }))
      .filter(a => a.href.includes('/van-ban/chi-tiet/') || a.href.includes('ItemID='));
  });

  console.log(`Found ${results.length} results:`);
  results.slice(0, 5).forEach((r, idx) => console.log(`  ${idx + 1}. [${r.text}] -> ${r.href}`));

  await browser.close();
}

searchVbpl('145/2020/NĐ-CP').catch(console.error);
