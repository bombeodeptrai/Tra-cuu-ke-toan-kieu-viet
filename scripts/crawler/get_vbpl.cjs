const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const TurndownService = require('turndown');
const fs = require('fs');

async function extract() {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    
    console.log('Truy cap vbpl.vn (Co so du lieu Quoc gia)...');
    await page.goto('https://vbpl.vn/pages/timkiem.aspx?Keyword=98/2021/N%C4%90-CP', { waitUntil: 'networkidle2' });
    
    // Find the link
    const firstLink = await page.evaluate(() => {
        let links = Array.from(document.querySelectorAll('.title a'));
        for(let a of links) {
            if(a.innerText.includes('98/2021/NĐ-CP')) return a.href;
        }
        return null;
    });
    
    if(!firstLink) {
        console.log('Khong tim thay tren vbpl.vn!');
        await browser.close();
        return;
    }
    
    console.log('Vao link: ' + firstLink);
    await page.goto(firstLink, { waitUntil: 'networkidle2' });
    
    // Switch to Toan van tab if needed
    const htmlContent = await page.evaluate(() => {
        let container = document.querySelector('.toanvancontent') || document.querySelector('#toanvancontent') || document.querySelector('.content1');
        return container ? container.innerHTML : null;
    });
    
    if (htmlContent) {
        const turndownService = new TurndownService();
        let md = turndownService.turndown(htmlContent);
        
        const finalMd = `# TEXT TỪ VBPL.VN\n\nNguồn: Cơ sở dữ liệu Quốc gia về Văn bản Pháp luật (vbpl.vn)\n\n---\n\n${md}`;
        fs.writeFileSync('C:\\\\Users\\\\HUY\\\\.gemini\\\\antigravity-ide\\\\brain\\\\135d1e0f-f18f-4f2e-acae-f87ddd30a787\\\\98_2021_VBPL.md', finalMd, 'utf8');
        console.log('Thanh cong! Da lay duoc Text Sach Tu VBPL!');
    } else {
        console.log('Lay HTML that bai.');
    }
    await browser.close();
}
extract();
