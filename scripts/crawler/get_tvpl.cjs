const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const TurndownService = require('turndown');
const fs = require('fs');

async function extract() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    console.log('Truy cap TVPL...');
    await page.goto('https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Nghi-dinh-98-2021-ND-CP-quan-ly-trang-thiet-bi-y-te-468087.aspx', { waitUntil: 'networkidle2' });
    
    const htmlContent = await page.evaluate(() => {
        let container = document.querySelector('.content1') || document.querySelector('#divContentDoc');
        return container ? container.innerHTML : '';
    });
    
    if (htmlContent) {
        const turndownService = new TurndownService();
        let md = turndownService.turndown(htmlContent);
        const finalMd = `# 98/2021/NĐ-CP - Nghị định về quản lý trang thiết bị y tế\n\nNguồn: Đã làm sạch\n\n---\n\n${md}`;
        fs.writeFileSync('C:\\\\Users\\\\HUY\\\\.gemini\\\\antigravity-ide\\\\brain\\\\135d1e0f-f18f-4f2e-acae-f87ddd30a787\\\\98_2021_CLEAN_TEXT.md', finalMd, 'utf8');
        console.log('Thanh cong!');
    } else {
        console.log('Khong tim thay noi dung.');
    }
    await browser.close();
}
extract();
