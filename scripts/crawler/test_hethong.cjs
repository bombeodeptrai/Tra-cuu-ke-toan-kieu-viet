const axios = require('axios');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

const turndownService = new TurndownService();

async function testDownload() {
    const docNum = '98/2021/NĐ-CP';
    console.log('🔍 Tìm kiếm ' + docNum + ' trên hethongphapluat.com...');
    
    const slug = 'nghi-dinh-98-2021-nd-cp'; 
    const url = 'https://hethongphapluat.com/' + slug + '.html';
    
    try {
        console.log('🌐 Truy cập: ' + url);
        const res = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        
        const $ = cheerio.load(res.data);
        const title = $('h1').text().trim();
        const contentHtml = $('.content-vb').html() || $('.content-left').html() || $('body').html();
        
        if (contentHtml) {
            console.log('✅ Đã tải HTML thành công. Tiêu đề: ' + title);
            console.log('⚙️ Đang chuyển đổi sang Markdown...');
            let markdown = turndownService.turndown(contentHtml);
            
            markdown = markdown.substring(0, 1500) + '\n\n...[NỘI DUNG ĐÃ LƯỢC BỎ BỚT CHO DEMO]...';
            
            console.log('\n--- TRÍCH ĐOẠN NỘI DUNG TẢI VỀ THÀNH CÔNG ---\n');
            console.log(markdown);
        } else {
            console.log('❌ Không tìm thấy phần nội dung văn bản.');
        }
    } catch (e) {
        console.error('Lỗi khi tải:', e.message);
    }
}

testDownload();
