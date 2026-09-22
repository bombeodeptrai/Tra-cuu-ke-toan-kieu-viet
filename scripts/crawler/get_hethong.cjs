const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const TurndownService = require('turndown');
const fs = require('fs');

async function extract() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    console.log('Truy cap hethongphapluat.com...');
    await page.goto('https://hethongphapluat.com/tim-kiem?q=98%2F2021', { waitUntil: 'networkidle2' });
    
    // Find the first result link
    const firstLink = await page.evaluate(() => {
        let links = Array.from(document.querySelectorAll('a'));
        for(let a of links) {
            if(a.href && a.href.includes('nghi-dinh-98')) return a.href;
        }
        return null;
    });
    
    if(!firstLink) {
        console.log('Khong tim thay link nghi dinh 98');
        await browser.close();
        return;
    }
    
    console.log('Vao link: ' + firstLink);
    await page.goto(firstLink, { waitUntil: 'networkidle2' });
    
    const htmlContent = await page.evaluate(() => {
        // Try various known content containers for Vietnamese law websites
        let container = document.querySelector('.content-vb') || 
                        document.querySelector('.content-left') || 
                        document.querySelector('.noidung') || 
                        document.querySelector('#noidung') || 
                        document.querySelector('.doc-content') ||
                        document.querySelector('article');
        return container ? container.outerHTML : document.body.innerHTML;
    });
    
    const turndownService = new TurndownService();
    let md = turndownService.turndown(htmlContent);
    
    const finalMd = `# TEXT TỪ HETHONGPHAPLUAT\n\n${md}`;
    fs.writeFileSync('C:\\\\Users\\\\HUY\\\\.gemini\\\\antigravity-ide\\\\brain\\\\135d1e0f-f18f-4f2e-acae-f87ddd30a787\\\\98_2021_HETHONG.md', finalMd, 'utf8');
    console.log('Thanh cong!');
    await browser.close();
}
extract();
