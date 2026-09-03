const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const PORT = 4197;
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
  else if (ext === '.md') contentType = 'text/markdown; charset=utf-8';

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

async function auditAll55Decrees() {
  server.listen(PORT);
  console.log('Server started on port', PORT);

  const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
  console.log(`BẮT ĐẦU QUÉT THỰC TẾ TOÀN BỘ ${decrees.length} VĂN BẢN (100% KHÔNG CẮT LẠI)...\n`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push({ type: 'CONSOLE_ERROR', url: page.url(), text: msg.text() });
    }
  });
  page.on('pageerror', err => {
    errors.push({ type: 'PAGE_ERROR', url: page.url(), text: err.message });
  });

  const results = [];

  for (let i = 0; i < decrees.length; i++) {
    const d = decrees[i];
    const targetUrl = `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/${d.id}`;
    process.stdout.write(`[${i + 1}/${decrees.length}] Quét: ${d.id} (${d.decree_number})... `);

    try {
      await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 20000 });

      // Wait until loading finishes (up to 5s)
      let textLen = 0;
      let htmlLeak = false;
      let isNotFound = false;

      for (let attempt = 0; attempt < 10; attempt++) {
        const check = await page.evaluate(() => {
          const bodyText = document.body.innerText;
          const notFound = bodyText.includes('Không tìm thấy nghị định');
          const loading = bodyText.includes('Đang tải nội dung...');
          const el = document.getElementById('decree-content');
          const contentText = el ? el.innerText : '';
          
          const rawHtmlRegex = /<table|<colgroup|<span style=|<p style=|border-collapse|width:\s*[0-9]+pt|margin-top:\s*[0-9]+pt/i;
          const leak = rawHtmlRegex.test(bodyText);

          return { notFound, loading, len: contentText.length, leak };
        });

        isNotFound = check.notFound;
        htmlLeak = check.leak;
        textLen = check.len;

        if (!check.loading && textLen > 50) break;
        await new Promise(r => setTimeout(r, 400));
      }

      if (isNotFound) {
        console.log('❌ LỖI: 404 KHÔNG TÌM THẤY!');
        results.push({ id: d.id, status: 'NOT_FOUND' });
      } else if (htmlLeak) {
        console.log('⚠️ CẢNH BÁO: PHÁT HIỆN MÃ HTML THÔ!');
        results.push({ id: d.id, status: 'RAW_HTML_LEAK' });
      } else if (textLen < 200) {
        console.log(`⚠️ CẢNH BÁO: NỘI DUNG QUÁ NGẮN (${textLen} ký tự)!`);
        results.push({ id: d.id, status: 'TOO_SHORT', length: textLen });
      } else {
        console.log(`✅ OK (${textLen} ký tự, HTML sạch)`);
        results.push({ id: d.id, status: 'SUCCESS', length: textLen });
      }

    } catch (err) {
      console.log(`❌ LỖI LOAD TRANG: ${err.message}`);
      results.push({ id: d.id, status: 'LOAD_ERROR', error: err.message });
    }
  }

  await browser.close();
  server.close();

  console.log('\n=============================================');
  console.log(`KẾT QUẢ QUÉT THỰC TẾ 100% CẢ 55 VĂN BẢN:`);
  const successCount = results.filter(r => r.status === 'SUCCESS').length;
  const issues = results.filter(r => r.status !== 'SUCCESS');
  console.log(`Thành công chuẩn 100%: ${successCount}/${decrees.length}`);
  console.log(`Có vấn đề cần xử lý: ${issues.length}`);
  if (issues.length > 0) {
    console.log('Danh sách các văn bản có vấn đề:');
    console.log(JSON.stringify(issues, null, 2));
  }
  console.log(`Lỗi Console / Crash: ${errors.length}`);
  if (errors.length > 0) {
    console.log(JSON.stringify(errors, null, 2));
  }
  console.log('=============================================');

  fs.writeFileSync('audit_all_55_results.json', JSON.stringify({ results, issues, errors }, null, 2), 'utf8');
}

auditAll55Decrees().catch(console.error);
