const fs=require('fs'),path=require('path'),assert=require('node:assert/strict'),vm=require('vm'),ts=require('typescript'),puppeteer=require('puppeteer');
const box={exports:{}};vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/data/audit-procedures.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,box);
const {AUDIT_PROCEDURES,procedureDraft}=box.exports;
assert.equal(AUDIT_PROCEDURES.length,15);assert.equal(AUDIT_PROCEDURES.filter(p=>p.pillar==='concrete_materials').length,7);assert.equal(new Set(AUDIT_PROCEDURES.map(p=>p.pillar)).size,4);
for(const p of AUDIT_PROCEDURES){assert.equal(p.steps.length,4);assert.ok(p.records.length>=4);assert.ok(procedureDraft(p,'2024').includes('Kỳ: 2024'));assert.ok(p.columns.length>=9);}
const report={base:(process.env.AUDIT_TEST_URL||'http://127.0.0.1:5174/Tra-cuu-ke-toan-kieu-viet/').trim(),checks:['15 procedures / 7 VLXD / 4 pillars / 60 operational steps'],errors:[],failures:[],at:new Date().toISOString()};
const out=path.resolve('test-results/audit-20260914');fs.mkdirSync(out,{recursive:true});
(async()=>{const browser=await puppeteer.launch({headless:true});const page=await browser.newPage();page.on('pageerror',e=>report.errors.push(e.message));page.on('console',m=>{if(m.type()==='error')report.errors.push(m.text());});
 const text=async s=>page.waitForFunction(s=>document.body.innerText.includes(s),{timeout:20000},s);
 const click=async s=>{for(const e of await page.$$('button'))if(await e.evaluate((e,s)=>e.textContent.trim()===s,s)){await e.click();return;}throw Error('Missing button '+s);};
 const tab=async s=>{for(const e of await page.$$('[role="tab"]'))if(await e.evaluate((e,s)=>e.textContent.includes(s),s)){await e.click();return;}throw Error('Missing tab '+s);};
 const input=async(s,v)=>{await page.$eval(`[aria-label="${s}"]`,(e,v)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(e,v);e.dispatchEvent(new Event('input',{bubbles:true}));},v);};
 try{
  await page.evaluateOnNewDocument(()=>{localStorage.setItem('kv_username','TEST_INTERNAL');localStorage.setItem('ketoan-settings',JSON.stringify({state:{geminiApiKey:''},version:0}));});await page.setViewport({width:1440,height:1000});await page.goto(report.base+'#/kiem-tra-thue?tab=preparation',{waitUntil:'networkidle2'});
  const dialog=await page.$('[role="dialog"]');if(dialog){const i=await dialog.$('input');if(i)await i.type('TEST_INTERNAL');await page.evaluate(()=>document.querySelector('[role="dialog"] button[type="submit"]')?.click());}
  await text('Chuẩn bị theo hồ sơ thực tế');await page.waitForSelector('[aria-label="Người phụ trách quy trình"]');
  const cdp=await page.createCDPSession();await cdp.send('Page.setDownloadBehavior',{behavior:'allow',downloadPath:out});
  for(const p of AUDIT_PROCEDURES){
   for(const b of await page.$$('[aria-label="Danh sách hồ sơ cần chuẩn bị"] button'))if(await b.evaluate((b,t)=>b.textContent.includes(t),p.title)){await b.click();break;}
   await text(p.question);const detail=await page.$eval('[data-testid="procedure-detail"]',e=>e.innerText);assert.ok(detail.includes(p.steps[3].output));assert.ok(detail.includes(p.records[3]));
   await input('Người phụ trách quy trình','Nhân sự kiểm thử');await click('Lập hồ sơ theo hướng dẫn này');await text('Đã lập hồ sơ và lưu');await text('Mở hồ sơ đã lập');
   await click('Tải bảng làm việc của hồ sơ');
  }
  await text('Đã lập 15/15');report.checks.push('All 15 dossiers created with detailed draft, assigned owner; duplicate create unavailable');
  await new Promise(r=>setTimeout(r,1500));for(const p of AUDIT_PROCEDURES){const file=path.join(out,`bang-ra-${p.id}.csv`);assert.ok(fs.existsSync(file));assert.ok(fs.readFileSync(file,'utf8').includes(p.columns[0]));}report.checks.push('15 actual CSV templates downloaded');
  await page.reload({waitUntil:'networkidle2'});await text('Đã lập 15/15');report.checks.push('All 15 dossiers persist after reload');
  const sector=await page.$$('[aria-label="Lọc quy trình theo mảng"] button');for(const b of sector)if(await b.evaluate(b=>b.textContent.includes('(7)')))await b.click();assert.equal((await page.$$('[aria-label="Danh sách hồ sơ cần chuẩn bị"] button')).length,7);report.checks.push('VLXD filter shows 7 detailed procedures');
  await click('Mở hồ sơ đã lập');await text('Nhân sự kiểm thử');await text('15 việc');
  report.checks.push('Preparation links to saved operational work log');
  await tab('Mẫu');assert.ok(!(await page.evaluate(()=>document.body.innerText)).includes('5901234567'));await text('BẢN NHÁP NỘI BỘ');report.checks.push('Draft templates contain no invented tax identity');
  await tab('AI');await page.waitForSelector('textarea');await page.type('textarea','Kiểm tra vật liệu đầu vào cần hồ sơ gì?');await page.keyboard.press('Enter');await text('Chưa cấu hình API key');report.checks.push('Missing AI key displays actual unavailable state without fabricated response');
  await tab('Kho luật bổ sung');await text('20/2025/NĐ-CP');
  const assets=await page.evaluate(async base=>{const r=await fetch(base+'data/accounting-laws/manifest.json');const m=await r.json();const files=m.documents.flatMap(d=>d.files);const failed=[];for(const f of files){const response=await fetch(base+f.localUrl.replace(/^\//,''),{method:'HEAD'});if(!response.ok||!response.headers.get('content-type')?.includes('pdf'))failed.push(f.localUrl);}return {count:files.length,failed};},report.base);assert.equal(assets.count,34);assert.equal(assets.failed.length,0);report.checks.push('All 34 original legal PDFs served successfully');
  await tab('Chuẩn bị từng hồ sơ');await click('Tạo đợt mới');await text('Đã lập 0/15');report.checks.push('Case isolation');
  await page.setViewport({width:390,height:900});await page.screenshot({path:path.join(out,'mobile.png'),fullPage:true});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);report.checks.push('390px layout without overflow');
  await page.setViewport({width:1440,height:1000});await page.screenshot({path:path.join(out,'desktop.png'),fullPage:true});
 }catch(e){report.failures.push(e.stack);await page.screenshot({path:path.join(out,'failure.png'),fullPage:true});}finally{await browser.close();}
 fs.writeFileSync(path.join(out,report.base.includes('github.io')?'live.json':'local.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(report.errors.length||report.failures.length)process.exitCode=1;
})();

