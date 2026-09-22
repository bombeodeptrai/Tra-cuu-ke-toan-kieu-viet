const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function screenshot() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    console.log("Truy cap hethongphapluat.com...");
    await page.goto('https://hethongphapluat.com/', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'C:\\\\Users\\\\HUY\\\\.gemini\\\\antigravity-ide\\\\brain\\\\135d1e0f-f18f-4f2e-acae-f87ddd30a787\\\\hethong_home.png' });
    
    console.log("Truy cap search...");
    await page.goto('https://hethongphapluat.com/tim-kiem?q=98%2F2021%2FN%C4%90-CP', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'C:\\\\Users\\\\HUY\\\\.gemini\\\\antigravity-ide\\\\brain\\\\135d1e0f-f18f-4f2e-acae-f87ddd30a787\\\\hethong_search.png' });
    
    await browser.close();
}
screenshot();
