const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function runMohScraper() {
    console.log('Khởi động cào Cổng thông tin Bộ Y Tế (moh.gov.vn)...');
    
    // Khởi chạy với cờ bỏ qua lỗi SSL (vì web nhà nước hay bị lỗi chứng chỉ cũ)
    const browser = await puppeteer.launch({ 
        headless: 'new',
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox',
            '--ignore-certificate-errors', 
            '--ignore-certificate-errors-spki-list'
        ]
    });
    
    try {
        const page = await browser.newPage();
        
        // Truy cập trang văn bản chỉ đạo điều hành của Bộ Y Tế
        console.log('-> Đang kết nối tới https://moh.gov.vn/van-ban-chi-dao-dieu-hanh ...');
        await page.goto('https://moh.gov.vn/van-ban-chi-dao-dieu-hanh', { waitUntil: 'networkidle2', timeout: 30000 });
        
        console.log('-> Đã tải xong trang. Đang trích xuất dữ liệu...');
        const documents = await page.evaluate(() => {
            let results = [];
            // CSS classes của MOH có thể khác nhau tùy giao diện, lấy thử tất cả thẻ A trong bảng
            let rows = document.querySelectorAll('tr, .item-list, .document-item');
            for(let row of rows) {
                let link = row.querySelector('a');
                if (link && link.innerText.trim().length > 10) {
                    results.push({
                        title: link.innerText.trim(),
                        url: link.href
                    });
                }
                if (results.length >= 5) break; // Lấy 5 văn bản mới nhất
            }
            return results;
        });
        
        if (documents && documents.length > 0) {
            console.log('\n[KẾT QUẢ CÀO BỘ Y TẾ]');
            console.log('---------------------');
            documents.forEach((doc, idx) => {
                console.log(`${idx + 1}. Tên: ${doc.title.substring(0, 100)}...`);
                console.log(`   Link: ${doc.url}`);
            });
            console.log('---------------------');
            console.log('✅ Hướng 2 (Cào Bộ Y Tế) hoạt động trơn tru. Có thể dùng để lấy text chữ sạch thay cho PDF Công Báo.');
        } else {
            console.log('⚠️ Không tìm thấy bảng văn bản. Giao diện Bộ Y Tế có thể đã thay đổi hoặc đang chặn.');
        }
        
    } catch (e) {
        console.log('❌ Lỗi kết nối Bộ Y Tế:', e.message);
    } finally {
        await browser.close();
    }
}

runMohScraper();
