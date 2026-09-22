const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const TurndownService = require('turndown');
const fs = require('fs');

async function getLaw() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Visit hethongphapluat.com
    await page.goto('https://hethongphapluat.com/nghi-dinh-98-2021-nd-cp.html', { waitUntil: 'networkidle2' });
    
    const htmlContent = await page.evaluate(() => {
        let container = document.querySelector('.content-vb') || document.querySelector('.content-left') || document.querySelector('.noi-dung') || document.querySelector('#content');
        return container ? container.innerHTML : '';
    });
    
    const turndownService = new TurndownService();
    let md = turndownService.turndown(htmlContent);
    
    const finalMd = `# 98/2021/NĐ-CP - Nghị định về quản lý trang thiết bị y tế\n\nNguồn: hethongphapluat.com\n\n---\n\n${md}`;
    
    fs.writeFileSync('C:\\\\Users\\\\HUY\\\\.gemini\\\\antigravity-ide\\\\brain\\\\135d1e0f-f18f-4f2e-acae-f87ddd30a787\\\\98_2021_ND_CP_CLEAN.md', finalMd, 'utf8');
    
    await browser.close();
    console.log("Done extracting from hethongphapluat!");
}

getLaw();
