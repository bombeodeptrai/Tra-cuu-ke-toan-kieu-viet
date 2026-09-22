const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');

async function getRaw() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Visit hethongphapluat.com
    await page.goto('https://hethongphapluat.com/nghi-dinh-98-2021-nd-cp.html', { waitUntil: 'networkidle2' });
    
    const htmlContent = await page.evaluate(() => document.body.innerHTML);
    
    fs.writeFileSync('C:\\\\Users\\\\HUY\\\\.gemini\\\\antigravity-ide\\\\brain\\\\135d1e0f-f18f-4f2e-acae-f87ddd30a787\\\\scratch\\\\hethong_raw.html', htmlContent, 'utf8');
    
    await browser.close();
    console.log("Done extracting raw from hethongphapluat!");
}

getRaw();
