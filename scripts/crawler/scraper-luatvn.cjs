const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const TurndownService = require('turndown');
const fs = require('fs');
const path = require('path');

async function runLuatVnScraper() {
    console.log('Khởi động cào Cổng Pháp luật (luatvietnam.vn)...');
    
    const browser = await puppeteer.launch({ 
        headless: 'new',
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox'
        ]
    });
    
    try {
        const page = await browser.newPage();
        
        console.log('-> Đang kết nối tới 98/2021/NĐ-CP trên luatvietnam.vn...');
        await page.goto('https://luatvietnam.vn/y-te/nghi-dinh-98-2021-nd-cp-ve-quan-ly-trang-thiet-bi-y-te-211756-d1.html', { waitUntil: 'networkidle2', timeout: 30000 });
        
        console.log('-> Đã tải xong trang. Đang trích xuất toàn văn...');
        const htmlContent = await page.evaluate(() => {
            let el = document.querySelector('.doc-content') || document.querySelector('.content-doc') || document.querySelector('#doc-content');
            return el ? el.innerHTML : null;
        });
        
        if (htmlContent) {
            const turndownService = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
            let markdown = turndownService.turndown(htmlContent);
            
            const cleanText = `# 98/2021/NĐ-CP - Nghị định về quản lý trang thiết bị y tế\n\n**Nguồn:** Đã làm sạch tự động\n\n---\n\n${markdown}`;
            
            const outPath = 'C:\\\\Users\\\\HUY\\\\.gemini\\\\antigravity-ide\\\\brain\\\\135d1e0f-f18f-4f2e-acae-f87ddd30a787\\\\98_2021_ND_CP_CLEAN_AUTO.md';
            fs.writeFileSync(outPath, cleanText, 'utf8');
            
            console.log('\n✅ [KẾT QUẢ CÀO TEXT TỰ ĐỘNG]');
            console.log('---------------------');
            console.log(markdown.substring(0, 800) + '... [CÒN TIẾP]');
            console.log('---------------------');
            console.log(`✅ Hướng 2 hoạt động xuất sắc!`);
        } else {
            console.log('⚠️ Không tìm thấy khung chứa text trên LuatVietnam.');
        }
        
    } catch (e) {
        console.log('❌ Lỗi kết nối:', e.message);
    } finally {
        await browser.close();
    }
}

runLuatVnScraper();
