const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 900 });
  await page.goto('http://127.0.0.1:5174/Tra-cuu-ke-toan-kieu-viet/#/kiem-tra-thue?tab=issues', { waitUntil: 'networkidle2' });
  const data = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('*'))
      .filter(el => el.scrollWidth > el.clientWidth + 2)
      .map(el => ({
        tag: el.tagName,
        id: el.id,
        className: String(el.className||'').slice(0, 60),
        clientWidth: el.clientWidth,
        scrollWidth: el.scrollWidth,
        text: (el.textContent||'').slice(0, 30)
      }))
      .slice(0, 15);
  });
  console.log('Tabs info:', JSON.stringify(data, null, 2));
  await browser.close();
})();
