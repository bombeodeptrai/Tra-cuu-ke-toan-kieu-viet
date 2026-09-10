// test_medical_app.cjs
const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const PORT = 5179;
const DIST_DIR = path.join(__dirname, 'dist');

function startServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  };

  const server = http.createServer((req, res) => {
    let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => {
      console.log(`Test server running at http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function runTests() {
  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let totalErrors = 0;
  const consoleErrors = [];
  const pageErrors = [];

  const routes = [
    { path: '#/', name: 'Tổng Quan (Dashboard)' },
    { path: '#/dau-thau', name: 'Đấu Thầu TBYT (Tender Bidding)' },
    { path: '#/thiet-bi', name: 'Danh Mục Thiết Bị (Medical Devices)' },
    { path: '#/tuan-thu-40', name: '40 Tiêu Chí Tuân Thủ (MD01-MD40)' },
    { path: '#/phong-kham-hoa-duc', name: 'Phòng Khám Hòa Đức (Clinic Finance)' },
    { path: '#/phap-luat', name: 'Thư Viện Pháp Luật (Legal Library)' },
    { path: '#/tra-cuu', name: 'Tra Cứu Nâng Cao (Search)' },
    { path: '#/so-sanh', name: 'So Sánh Điểm Mới (Comparison)' },
    { path: '#/bieu-mau', name: '14 Biểu Mẫu Thực Chiến (Templates)' },
    { path: '#/tien-ich', name: 'Tiện Ích Tính Toán (Tools)' },
    { path: '#/hoi-dap-ai', name: 'Trợ Lý AI Y Tế (Chat AI)' },
    { path: '#/huong-dan', name: 'Cẩm Nang Nghiệp Vụ (Guide)' }
  ];

  try {
    // 1. DESKTOP TESTS (1440x900)
    console.log('\n--- 1. BẮT ĐẦU TEST DESKTOP (1440x900) TRÊN TOÀN BỘ 12 ROUTES ---');
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(`[Console Error] ${msg.text()}`);
      }
    });

    page.on('pageerror', (err) => {
      pageErrors.push(`[Page Crash/Error] ${err.toString()}`);
    });

    for (const r of routes) {
      const url = `http://localhost:${PORT}/${r.path}`;
      await page.goto(url, { waitUntil: 'networkidle0' });
      await new Promise((resolve) => setTimeout(resolve, 400));

      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      console.log(`✓ [Desktop] ${r.name} (${r.path}): OK (Overflow: ${hasHorizontalOverflow ? 'FAIL' : 'CLEAN'})`);
      if (hasHorizontalOverflow) {
        totalErrors++;
        console.error(`  X Lỗi tràn màn hình ngang tại ${r.path}`);
      }
    }

    // Capture comprehensive desktop screenshot of Comparison & Tools
    await page.goto(`http://localhost:${PORT}/#/so-sanh`, { waitUntil: 'networkidle0' });
    await new Promise((resolve) => setTimeout(resolve, 500));
    const ssPath1 = path.join(__dirname, 'live_med_comparison.png');
    await page.screenshot({ path: ssPath1, fullPage: false });
    console.log(`✓ Đã lưu ảnh chụp đối chiếu: ${ssPath1}`);

    await page.goto(`http://localhost:${PORT}/#/tien-ich`, { waitUntil: 'networkidle0' });
    await new Promise((resolve) => setTimeout(resolve, 500));
    const ssPath2 = path.join(__dirname, 'live_med_tools.png');
    await page.screenshot({ path: ssPath2, fullPage: false });
    console.log(`✓ Đã lưu ảnh chụp tiện ích: ${ssPath2}`);

    // 2. MOBILE TESTS (390x844 - iPhone 12/13/14)
    console.log('\n--- 2. BẮT ĐẦU TEST MOBILE (390x844) TRÊN TOÀN BỘ 12 ROUTES ---');
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

    for (const r of routes) {
      const url = `http://localhost:${PORT}/${r.path}`;
      await page.goto(url, { waitUntil: 'networkidle0' });
      await new Promise((resolve) => setTimeout(resolve, 400));

      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      console.log(`✓ [Mobile 390px] ${r.name} (${r.path}): OK (Overflow: ${hasHorizontalOverflow ? 'FAIL' : 'CLEAN'})`);
      if (hasHorizontalOverflow) {
        totalErrors++;
        console.error(`  X Lỗi tràn ngang Mobile tại ${r.path}`);
      }
    }

    const ssMobile = path.join(__dirname, 'live_med_mobile_full.png');
    await page.screenshot({ path: ssMobile, fullPage: false });
    console.log(`✓ Đã lưu ảnh chụp Mobile: ${ssMobile}`);

    console.log('\n=== KẾT QUẢ ĐO KIỂM THỰC TẾ (RULE L05) ===');
    console.log(`- Tổng số routes kiểm tra: ${routes.length} routes x 2 viewports = ${routes.length * 2} tests`);
    console.log(`- Console Errors: ${consoleErrors.length}`);
    console.log(`- Page Crashes: ${pageErrors.length}`);
    console.log(`- Overflow Errors: ${totalErrors}`);

    if (consoleErrors.length > 0) {
      console.log('Chi tiết Console Errors:', consoleErrors);
    }
    if (pageErrors.length > 0) {
      console.log('Chi tiết Page Errors:', pageErrors);
    }

    if (consoleErrors.length === 0 && pageErrors.length === 0 && totalErrors === 0) {
      console.log('>>> HOÀN HẢO 100% ĐẠT CHUẨN RULE L05! <<<');
    } else {
      process.exitCode = 1;
    }

  } finally {
    await browser.close();
    server.close();
  }
}

runTests().catch((err) => {
  console.error('Fatal Test Error:', err);
  process.exit(1);
});
