const puppeteer = require('puppeteer');

async function test() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  try {
    await page.goto('https://phapluat.gov.vn/he-thong-van-ban-phap-luat?keyword=125%2F2020%2FN%C4%90-CP', { waitUntil: 'networkidle2' });
    const links = await page.evaluate(() => {
      let results = [];
      document.querySelectorAll('a').forEach(a => {
        if (a.href && a.href.includes('/van-ban/')) {
          results.push(a.href);
        }
      });
      return results;
    });
    console.log("Found links:", links);
  } catch (e) {
    console.log("FAILED:", e.message);
  } finally {
    await browser.close();
  }
}
test();
