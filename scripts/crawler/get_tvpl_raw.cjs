const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');

async function extract() {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    console.log('Truy cap TVPL...');
    await page.goto('https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Nghi-dinh-98-2021-ND-CP-quan-ly-trang-thiet-bi-y-te-468087.aspx', { waitUntil: 'networkidle2' });
    
    const htmlContent = await page.evaluate(() => document.body.innerHTML);
    
    fs.writeFileSync('C:\\\\Users\\\\HUY\\\\.gemini\\\\antigravity-ide\\\\brain\\\\135d1e0f-f18f-4f2e-acae-f87ddd30a787\\\\scratch\\\\tvpl_raw.html', htmlContent, 'utf8');
    console.log('Thanh cong!');
    
    await browser.close();
}
extract();
