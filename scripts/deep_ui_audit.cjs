const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const PORT = 4193;
const DIST_DIR = path.resolve(__dirname, '../dist');

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl.startsWith('/Tra-cuu-ke-toan-kieu-viet/')) {
    reqUrl = reqUrl.replace('/Tra-cuu-ke-toan-kieu-viet/', '/');
  }
  if (reqUrl === '/' || reqUrl === '') reqUrl = '/index.html';
  
  let filePath = path.join(DIST_DIR, reqUrl);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(path.resolve(__dirname, '../public'), reqUrl);
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  let contentType = 'text/html; charset=utf-8';
  if (ext === '.js' || ext === '.mjs') contentType = 'application/javascript; charset=utf-8';
  else if (ext === '.css') contentType = 'text/css; charset=utf-8';
  else if (ext === '.json') contentType = 'application/json; charset=utf-8';
  else if (ext === '.png') contentType = 'image/png';
  else if (ext === '.svg') contentType = 'image/svg+xml';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

async function runDeepAudit() {
  server.listen(PORT);
  console.log('Server listening on port', PORT);

  const browser = await puppeteer.launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  const page = await browser.newPage();

  const auditReport = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      auditReport.push({ type: 'CONSOLE_ERROR', text: msg.text() });
    }
  });
  page.on('pageerror', err => {
    auditReport.push({ type: 'PAGE_ERROR', text: err.message });
  });

  const routesToTest = [
    { name: '01_Home', url: '/Tra-cuu-ke-toan-kieu-viet/#/' },
    { name: '02_Thu_Vien', url: '/Tra-cuu-ke-toan-kieu-viet/#/thu-vien' },
    { name: '03_So_Sanh_55', url: '/Tra-cuu-ke-toan-kieu-viet/#/so-sanh' },
    { name: '04_Chi_Tiet_TT99_ToanVan', url: '/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/tt-99-2025' },
    { name: '05_Chi_Tiet_LuatTNCN', url: '/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/luat-109-2025-tncn' },
    { name: '06_Chi_Tiet_ND73', url: '/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/nd-73-2024' },
    { name: '07_Tai_Khoan_TT99', url: '/Tra-cuu-ke-toan-kieu-viet/#/tai-khoan' },
    { name: '08_Tien_Ich_Thue', url: '/Tra-cuu-ke-toan-kieu-viet/#/tien-ich' },
    { name: '09_Tra_Cuu', url: '/Tra-cuu-ke-toan-kieu-viet/#/tra-cuu' },
    { name: '10_Huong_Dan', url: '/Tra-cuu-ke-toan-kieu-viet/#/huong-dan' },
    { name: '11_Hoi_Dap_AI', url: '/Tra-cuu-ke-toan-kieu-viet/#/hoi-dap-ai' },
    { name: '12_Bieu_Mau', url: '/Tra-cuu-ke-toan-kieu-viet/#/bieu-mau' },
    { name: '13_So_Tay', url: '/Tra-cuu-ke-toan-kieu-viet/#/so-tay' },
  ];

  if (!fs.existsSync('audit_screens')) {
    fs.mkdirSync('audit_screens');
  }

  // 1. MOBILE AUDIT (390x844)
  console.log('\n--- BẮT ĐẦU KIỂM TRA MÀN HÌNH MOBILE (390 x 844) ---');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

  for (const r of routesToTest) {
    console.log(`Kiểm tra Mobile: ${r.name} (${r.url})...`);
    await page.goto(`http://127.0.0.1:${PORT}${r.url}`, { waitUntil: 'networkidle0', timeout: 25000 });
    await new Promise(res => setTimeout(res, 1200));

    // Check for raw html leak in visible text
    const rawHtmlLeak = await page.evaluate(() => {
      const text = document.body.innerText;
      const patterns = [
        /<table/i, /<colgroup/i, /<span style=/i, /<p style=/i,
        /border-collapse/i, /width: [0-9]+pt/i, /margin-top: [0-9]+pt/i
      ];
      for (const p of patterns) {
        if (p.test(text)) return p.toString();
      }
      return null;
    });

    if (rawHtmlLeak) {
      auditReport.push({ type: 'RAW_HTML_LEAK', page: r.name, pattern: rawHtmlLeak });
    }

    // Check horizontal scroll overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth + 5;
    });

    if (hasHorizontalOverflow) {
      auditReport.push({ type: 'HORIZONTAL_OVERFLOW', page: r.name });
    }

    await page.screenshot({ path: `audit_screens/mobile_${r.name}.png` });
  }

  // Test specifically Tab "Điểm mới & So sánh" inside DecreeDetailPage
  console.log('Kiểm tra Tab Điểm mới trong DecreeDetailPage...');
  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/tt-99-2025`, { waitUntil: 'networkidle0' });
  await new Promise(res => setTimeout(res, 1000));

  // Click tab Điểm mới
  const tabs = await page.$$('button[role="tab"]');
  for (const tab of tabs) {
    const text = await page.evaluate(el => el.textContent, tab);
    if (text.includes('Điểm mới') || text.includes('So sánh')) {
      await tab.click();
      await new Promise(res => setTimeout(res, 1000));
      await page.screenshot({ path: 'audit_screens/mobile_tab_diem_moi_tt99.png' });
      break;
    }
  }

  // 2. DESKTOP AUDIT (1280x800)
  console.log('\n--- BẮT ĐẦU KIỂM TRA MÀN HÌNH DESKTOP (1280 x 800) ---');
  await page.setViewport({ width: 1280, height: 800, isMobile: false });

  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/so-sanh`, { waitUntil: 'networkidle0' });
  await new Promise(res => setTimeout(res, 1000));
  await page.screenshot({ path: `audit_screens/desktop_so_sanh_55.png` });

  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/tt-99-2025`, { waitUntil: 'networkidle0' });
  await new Promise(res => setTimeout(res, 1000));
  await page.screenshot({ path: `audit_screens/desktop_detail_tt99.png` });

  await browser.close();
  server.close();

  console.log('\n======================================');
  console.log('KẾT QUẢ AUDIT HIỂN THỊ THỰC TẾ:');
  console.log('Tổng số lỗi phát hiện:', auditReport.length);
  console.log(JSON.stringify(auditReport, null, 2));
  console.log('======================================');

  fs.writeFileSync('audit_report.json', JSON.stringify(auditReport, null, 2), 'utf8');
}

runDeepAudit().catch(console.error);
