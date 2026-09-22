const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const TurndownService = require('turndown');
const fs = require('fs');

async function getLaw() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Visit congbao document directly
    await page.goto('https://congbao.chinhphu.vn/van-ban/chinh-phu/98-2021-nd-cp-36528', { waitUntil: 'networkidle2' });
    
    const htmlContent = await page.evaluate(() => {
        let container = document.querySelector('.table-chitiet-vb') || document.querySelector('.chitiet-vanban');
        if (!container) return document.body.innerHTML;
        return container.outerHTML;
    });
    
    const pdfUrl = await page.evaluate(() => {
        let link = document.querySelector('a[href$=".pdf"]');
        return link ? link.href : 'Không tìm thấy file PDF';
    });
    
    const turndownService = new TurndownService();
    let md = turndownService.turndown(htmlContent);
    
    const finalMd = `# 98/2021/NĐ-CP - Nghị định về quản lý trang thiết bị y tế\n\nNguồn: Cổng Công Báo Chính Phủ\nLink PDF: ${pdfUrl}\n\n---\n\n${md}`;
    
    // Save to brain folder
    fs.writeFileSync('C:\\\\Users\\\\HUY\\\\.gemini\\\\antigravity-ide\\\\brain\\\\135d1e0f-f18f-4f2e-acae-f87ddd30a787\\\\98_2021_ND_CP.md', finalMd, 'utf8');
    
    await browser.close();
    console.log("Done extracting!");
}

getLaw();
