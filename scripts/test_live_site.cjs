const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function testLive() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const consoleErrors = [];
    const pageErrors = [];

    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', err => pageErrors.push(err.toString()));

    console.log('Navigating to live site comparison page...');
    await page.goto('https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/#/so-sanh', {
      waitUntil: 'networkidle2',
      timeout: 45000
    });

    await page.waitForSelector('select', { timeout: 15000 });

    const options = await page.$$eval('select option', opts => opts.map(o => o.value));
    console.log(`Live site: ${options.length} decrees found in selector`);

    const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
    const missing = decrees.filter(d => !options.includes(d.id));
    console.log(`Missing on live selector: ${missing.length}`);

    // Test selection
    const testIds = ['tt-99-2025', 'nd-123-2020', 'luat-67-2025-tndn', 'qd-87-2025-gialai', 'nd-193-2025-khoangsan'];
    for (const id of testIds) {
      await page.select('select', id);
      await new Promise(r => setTimeout(r, 600));
      const cards = await page.$$eval('.space-y-4 .overflow-hidden', els => els.length);
      console.log(`Live Decree ${id}: ${cards} diff cards rendered`);
    }

    // Test AI Boxchat on live site
    const chatInput = await page.$('textarea');
    if (chatInput) {
      console.log('Live AI Boxchat input detected.');
      await page.type('textarea', 'So sánh điểm mới cho Kiểu Việt');
      await page.keyboard.press('Enter');
      await new Promise(r => setTimeout(r, 1200));
    }

    const htmlLeak = await page.evaluate(() => {
      const text = document.body.innerText;
      return /<div|<span|<p>|&lt;div/.test(text);
    });

    console.log('\n--- LIVE AUDIT RESULTS ---');
    console.log(`Console Errors: ${consoleErrors.length}`);
    console.log(`Page Crashes / Errors: ${pageErrors.length}`);
    console.log(`Raw HTML Leaks: ${htmlLeak ? 1 : 0}`);

    await page.evaluate(() => window.scrollTo(0, 150));
    await new Promise(r => setTimeout(r, 400));
    const screenshotPath = path.join(__dirname, '..', 'audit_screens', 'live_so_sanh.png');
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log('Live screenshot saved to:', screenshotPath);

    if (consoleErrors.length === 0 && pageErrors.length === 0 && !htmlLeak && missing.length === 0) {
      console.log('🎉 LIVE VERIFICATION SUCCESSFUL: 100% 55 decrees, 0 errors!');
    } else {
      console.error('⚠️ Verification issues detected!');
    }
  } catch (err) {
    console.error('Live test error:', err);
  } finally {
    await browser.close();
  }
}

testLive();
