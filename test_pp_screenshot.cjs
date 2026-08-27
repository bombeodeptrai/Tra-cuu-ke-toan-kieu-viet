const puppeteer = require('puppeteer');

async function test() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://phapluat.gov.vn/he-thong-van-ban-phap-luat?keyword=125%2F2020%2FN%C4%90-CP', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'phapluat_search.png' });
    console.log("Screenshot saved.");
  } catch (e) {
    console.log("FAILED:", e.message);
  } finally {
    await browser.close();
  }
}
test();
