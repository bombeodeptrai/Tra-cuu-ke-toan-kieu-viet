const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4210;
const DIST_DIR = path.resolve(__dirname, '../dist');

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0].replace('/Tra-cuu-ke-toan-kieu-viet/', '/');
  if (reqUrl === '/' || reqUrl === '') reqUrl = '/index.html';
  let p = path.join(DIST_DIR, reqUrl);
  if (!fs.existsSync(p)) p = path.join(path.resolve(__dirname, '../public'), reqUrl);
  if (!fs.existsSync(p)) p = path.join(DIST_DIR, 'index.html');
  const ext = path.extname(p).toLowerCase();
  let ct = 'text/html; charset=utf-8';
  if (ext === '.js' || ext === '.mjs') ct = 'application/javascript; charset=utf-8';
  else if (ext === '.css') ct = 'text/css; charset=utf-8';
  else if (ext === '.json') ct = 'application/json; charset=utf-8';
  else if (ext === '.png') ct = 'image/png';
  fs.readFile(p, (err, c) => {
    res.writeHead(200, { 'Content-Type': ct });
    res.end(c);
  });
});

async function run() {
  server.listen(PORT);
  console.log(`Test server running on port ${PORT}`);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  // 1. Test ToolsPage (Lịch Thuế & Khấu hao)
  console.log('Testing /tien-ich...');
  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/tien-ich`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  const toolsText = await page.$eval('body', el => el.innerText);
  console.log('Has Tax Calendar?:', toolsText.includes('Lịch Nộp Báo Cáo & Thuế Doanh Nghiệp'));
  
  // Click Tab Khấu hao
  const depTab = await page.$('button[value="depreciation"]');
  if (depTab) {
    await depTab.click();
    await new Promise(r => setTimeout(r, 500));
  }
  await page.screenshot({ path: 'audit_screens/feature_tools_depreciation.png' });

  // 2. Test ChartOfAccountsPage (Sơ đồ định khoản & modal)
  console.log('Testing /tai-khoan...');
  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/tai-khoan`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  
  // Click first row to open modal
  const firstRow = await page.$('tbody tr');
  if (firstRow) {
    await firstRow.click();
    await new Promise(r => setTimeout(r, 500));
  }
  await page.screenshot({ path: 'audit_screens/feature_account_modal.png' });

  // Close modal
  const closeBtn = await page.$('button:has(svg.lucide-x)');
  if (closeBtn) await closeBtn.click();

  // Click Tab Sơ đồ định khoản
  const guidesTab = await page.$('button[value="guides"]');
  if (guidesTab) {
    await guidesTab.click();
    await new Promise(r => setTimeout(r, 500));
  }
  await page.screenshot({ path: 'audit_screens/feature_account_guides.png' });

  // 3. Test FormsPage Preview Modal
  console.log('Testing /bieu-mau...');
  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/bieu-mau`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  
  // Click first "Xem trước" button
  const previewBtns = await page.$$('button');
  for (const btn of previewBtns) {
    const txt = await (await btn.getProperty('innerText')).jsonValue();
    if (txt.includes('Xem trước')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'audit_screens/feature_forms_preview.png' });

  // 4. Test LibraryPage Year 2026 Filter
  console.log('Testing /thu-vien year 2026 filter...');
  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  const yearButtons = await page.$$('button');
  for (const btn of yearButtons) {
    const txt = await (await btn.getProperty('innerText')).jsonValue();
    if (txt.includes('Năm 2026')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'audit_screens/feature_library_2026.png' });
  const libText = await page.$eval('body', el => el.innerText);
  console.log('2026 Filter has TT99?:', libText.includes('99/2025'));

  console.log('Total Console Errors:', errors.length);
  if (errors.length > 0) console.log('Errors:', errors);

  await browser.close();
  server.close();
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
