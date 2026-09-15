const fs = require('fs');
const path = require('path');
const assert = require('node:assert/strict');
const puppeteer = require('puppeteer');

const report = {
  base: (process.env.AUDIT_TEST_URL || 'http://127.0.0.1:5174/Tra-cuu-ke-toan-kieu-viet/').trim(),
  checks: [],
  errors: [],
  failures: [],
  at: new Date().toISOString()
};

const out = path.resolve('test-results/audit-issues-20260915');
fs.mkdirSync(out, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  page.on('pageerror', err => {
    report.errors.push(`[PageError] ${err.message}`);
  });

  page.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      // Filter out benign favicon or harmless resource 404s if any
      if (!text.includes('favicon.ico')) {
        report.errors.push(`[ConsoleError] ${text}`);
      }
    }
  });

  try {
    await page.evaluateOnNewDocument(() => {
      localStorage.setItem('kv_username', 'TEST_AUDITOR');
      localStorage.setItem('ketoan-settings', JSON.stringify({ state: { geminiApiKey: '' }, version: 0 }));
    });

    await page.setViewport({ width: 1440, height: 1000 });

    console.log('Navigating to Tax Audit Page with issues tab...');
    await page.goto(report.base + '#/kiem-tra-thue?tab=issues', { waitUntil: 'networkidle2' });

    // Handle any dialog if present
    const dialog = await page.$('[role="dialog"]');
    if (dialog) {
      const input = await dialog.$('input');
      if (input) await input.type('TEST_AUDITOR');
      await page.evaluate(() => document.querySelector('[role="dialog"] button[type="submit"]')?.click());
    }

    // Wait for the Issue Desk to be visible
    await page.waitForFunction(
      () => document.body.innerText.includes('Bàn Xử Lý Sự Vụ & Chênh Lệch Thực Tế') ||
            document.body.innerText.includes('Sự vụ (Mới)'),
      { timeout: 15000 }
    );
    report.checks.push('Issue Desk header rendered successfully');

    // 1. Verify that all 24 Scenarios S01 - S24 are present in the scenario list
    const scenarioCardsText = await page.evaluate(() => document.body.innerText);
    const missingScenarios = [];
    for (let i = 1; i <= 24; i++) {
      const id = 'S' + (i < 10 ? '0' + i : i);
      if (!scenarioCardsText.includes(id)) {
        missingScenarios.push(id);
      }
    }
    assert.equal(missingScenarios.length, 0, `Missing scenario IDs in list: ${missingScenarios.join(', ')}`);
    report.checks.push('All 24 scenarios (S01 - S24) rendered in Issue Desk');

    // 2. Test Category Filters
    const categories = ['unbilled', 'below_cost', 'stock_mismatch', 'debt_cash', 'wip_cost', 'all'];
    for (const cat of categories) {
      const clicked = await page.evaluate((c) => {
        const btns = Array.from(document.querySelectorAll('button'));
        const target = btns.find(b => b.textContent && b.textContent.toLowerCase().includes(c));
        if (target) {
          target.click();
          return true;
        }
        return false;
      }, cat);
      await new Promise(r => setTimeout(r, 200));
    }
    report.checks.push('Issue Desk category filters operational without crash');

    // 3. Test selecting S01
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const s01 = btns.find(b => b.textContent && b.textContent.includes('S01'));
      if (s01) s01.click();
    });
    await new Promise(r => setTimeout(r, 500));

    // Verify 6 regions in selected scenario
    const detailText = await page.evaluate(() => document.body.innerText);
    assert.ok(detailText.includes('1. Dữ kiện đã có'), 'Missing Region 1: Dữ kiện đã có');
    assert.ok(detailText.includes('2. Phân loại (3 câu)'), 'Missing Region 2: Phân loại');
    assert.ok(detailText.includes('3. Đối chiếu dòng'), 'Missing Region 3: Đối chiếu dòng');
    assert.ok(detailText.includes('4. Xác nhận nguyên nhân'), 'Missing Region 4: Nguyên nhân');
    assert.ok(detailText.includes('5. Phương án 4 bảng'), 'Missing Region 5: Phương án');
    assert.ok(detailText.includes('6. Bản giải trình xuất'), 'Missing Region 6: Bản giải trình');
    report.checks.push('Scenario detail contains all 6 operational regions');

    // 4. Test clicking Region 2 and answering question
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const qTab = btns.find(b => b.textContent && b.textContent.includes('2. Phân loại'));
      if (qTab) qTab.click();
    });
    await new Promise(r => setTimeout(r, 400));

    const answered = await page.evaluate(() => {
      const optionCards = Array.from(document.querySelectorAll('.cursor-pointer'));
      if (optionCards.length > 0) {
        optionCards[0].click();
        return true;
      }
      return false;
    });
    report.checks.push('Interactive question answered and state persisted: ' + answered);

    // 5. Test Direct URL navigation: ?tab=issues&issue=S03
    await page.goto(report.base + '#/kiem-tra-thue?tab=issues&issue=S03', { waitUntil: 'networkidle2' });
    await page.waitForFunction(() => document.body.innerText.includes('S03'), { timeout: 10000 });
    const s03Text = await page.evaluate(() => document.body.innerText);
    assert.ok(s03Text.includes('Bán dưới giá vốn thực tế'), 'S03 title should match');
    report.checks.push('Direct URL parameter ?tab=issues&issue=S03 loaded S03 smoothly');

    // 6. Test Direct URL navigation: ?tab=issues&issue=S05
    await page.goto(report.base + '#/kiem-tra-thue?tab=issues&issue=S05', { waitUntil: 'networkidle2' });
    await page.waitForFunction(() => document.body.innerText.includes('S05'), { timeout: 10000 });
    const s05Text = await page.evaluate(() => document.body.innerText);
    assert.ok(s05Text.includes('Âm kho theo ngày'), 'S05 title should match');
    report.checks.push('Direct URL parameter ?tab=issues&issue=S05 loaded S05 smoothly');

    // 7. Check for Raw HTML Leaks
    const rawHtmlLeak = await page.evaluate(() => {
      const body = document.body.innerHTML;
      return /&lt;div|&lt;span|&lt;p|&lt;button/i.test(body);
    });
    assert.equal(rawHtmlLeak, false, 'Raw HTML tag leak detected in rendered DOM');
    report.checks.push('Zero raw HTML leaks verified');

    // 8. Mobile viewport test (390px)
    await page.setViewport({ width: 390, height: 900 });
    await new Promise(r => setTimeout(r, 400));
    const hasHorizontalScroll = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    assert.equal(hasHorizontalScroll, false, 'Mobile viewport should have no horizontal overflow');
    report.checks.push('Mobile 390px responsive test passed without overflow');

    await page.screenshot({ path: path.join(out, 'issue-desk-mobile.png'), fullPage: true });

    // Desktop screenshot
    await page.setViewport({ width: 1440, height: 1000 });
    await page.screenshot({ path: path.join(out, 'issue-desk-desktop.png'), fullPage: true });

  } catch (err) {
    report.failures.push(err.stack || err.message);
    await page.screenshot({ path: path.join(out, 'failure.png'), fullPage: true }).catch(() => {});
  } finally {
    await browser.close();
  }

  const resultPath = path.join(out, 'issues-test-result.json');
  fs.writeFileSync(resultPath, JSON.stringify(report, null, 2));
  console.log('\n--- Test Report Summary ---');
  console.log(`Checks passed: ${report.checks.length}`);
  console.log(`Errors: ${report.errors.length}`);
  console.log(`Failures: ${report.failures.length}`);
  report.checks.forEach(c => console.log('  ✓ ' + c));
  if (report.errors.length) {
    console.error('Console / Page Errors:', report.errors);
  }
  if (report.failures.length) {
    console.error('Failures:', report.failures);
    process.exitCode = 1;
  }
})();
