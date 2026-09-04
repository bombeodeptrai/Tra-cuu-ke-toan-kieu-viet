const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1200 });
  await page.goto('http://localhost:4175/#/so-sanh', { waitUntil: 'networkidle0' });
  await page.waitForSelector('textarea');

  // Scroll to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));

  await page.screenshot({ path: 'audit_screens/ai_chatbox_full.png', fullPage: false });
  console.log('Saved ai_chatbox_full.png!');
  await browser.close();
})();
