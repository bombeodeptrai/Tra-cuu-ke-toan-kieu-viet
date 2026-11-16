import fs from 'node:fs';import crypto from 'node:crypto';
const core=JSON.parse(fs.readFileSync('public/data/decrees.json','utf8'));if(core.length<55||new Set(core.map(d=>d.id)).size!==core.length)throw Error('Missing/duplicate core legal records');
for(const d of core){if(d.pdf_url){const bytes=fs.readFileSync('public'+d.pdf_url);if(bytes.subarray(0,5).toString()!=='%PDF-')throw Error('Core original not PDF '+d.id);}if(d.content_url&&fs.readFileSync('public'+d.content_url,'utf8').trim().length<100)throw Error('Core text missing '+d.id);}
// TT99 guard: render all 883 pages and retain the ten official Gazette PDFs; never imply OCR/layout certification.
{const tt99=core.find(d=>d.id==='tt-99-2025');if(!tt99||tt99.pdf_url||tt99.pdf_drive_id||tt99.text_status!=='ocr-review'||tt99.text_url!=='/data/content/tt-99-2025-full.json'||!tt99.source_url?.startsWith('https://congbao.chinhphu.vn/')||tt99.pdf_attachments?.length!==10)throw Error('TT99 must use full page dataset, official source and ten part PDFs without exposing a mismatched single PDF');
 const full=JSON.parse(fs.readFileSync('public'+tt99.text_url,'utf8'));if(full.pages?.length!==883||full.pages.some((p,i)=>p.page!==i+1||!p.sourceFile||!Number.isInteger(p.sourcePage)||p.text.trim().length<30))throw Error('TT99 must contain all 883 ordered, source-mapped, nonempty pages');
 const imagePages=full.pages.filter(p=>p.method==='pdf-image-ocr');if(imagePages.length!==65||imagePages.some(p=>typeof p.ocrConfidence!=='number'||p.layoutVerified!==false))throw Error('TT99 image-only form pages need OCR confidence and explicit unverified-layout metadata');
 if(imagePages.filter(p=>p.ocrConfidence<80).length!==47||!tt99.text_status_note?.includes('47 trang OCR dưới ngưỡng'))throw Error('TT99 OCR review warning does not match page-level confidence');
 for(const attachment of tt99.pdf_attachments){const pdf=fs.readFileSync('public'+attachment.pdf_url);if(pdf.subarray(0,5).toString()!=='%PDF-'||!attachment.source_url?.startsWith('https://congbao.chinhphu.vn/'))throw Error('TT99 official source part missing/invalid '+attachment.pdf_url);}
 const joined=full.pages.map(p=>p.text).join('\n');for(const appendix of ['PHỤ LỤC I','PHỤ LỤC II','PHỤ LỤC III','PHỤ LỤC IV'])if(!joined.toLocaleUpperCase('vi').includes(appendix))throw Error('TT99 missing '+appendix);
 const rag=fs.readFileSync('src/lib/ai/audit-public-context.ts','utf8');if(!rag.includes('if (decree.text_url)')||!rag.includes('page.sourceFile')||!rag.includes('page.ocrConfidence < 80'))throw Error('AI retrieval must index TT99 paged text, source PDF pages and filter low-confidence OCR');
 const viewer=fs.readFileSync('src/components/decree/DecreeDiffViewer.tsx','utf8');if(!viewer.includes('const VERIFIED_DIFF_IDS = new Set<string>();')||!viewer.includes('VERIFIED_DIFF_IDS.has(targetId)'))throw Error('Comparison UI legal verification allowlist has changed; verify citations before release');}
const root='public/data/accounting-laws';const m=JSON.parse(fs.readFileSync(root+'/manifest.json','utf8'));const metadata=JSON.parse(fs.readFileSync(root+'/metadata.json','utf8'));
if(m.documents.length<29)throw Error('Supplemental catalog incomplete');let count=0,pages=0,ocrReview=[];
for(const d of m.documents){if(!metadata.documents[d.id])throw Error('Missing metadata '+d.id);if(!d.files.length)throw Error('No original file '+d.id);
 for(const f of d.files){const pdf=fs.readFileSync('public'+f.localUrl);if(pdf.subarray(0,5).toString()!=='%PDF-')throw Error('Not a PDF '+f.localUrl);if(crypto.createHash('sha256').update(pdf).digest('hex')!==f.sha256)throw Error('Checksum mismatch '+f.localUrl);
 const text=JSON.parse(fs.readFileSync('public'+f.textUrl,'utf8'));if(text.pages.length!==f.pages||text.pages.some((p,i)=>p.page!==i+1||typeof p.text!=='string'))throw Error('Missing/unordered pages '+f.textUrl);
 for(const p of text.pages)if(p.text.length<30)ocrReview.push({id:d.id,file:f.localUrl,page:p.page});
 if(!f.driveUrl?.startsWith('https://drive.google.com/file/d/'))throw Error('Missing actual Drive file link '+d.id);count++;pages+=f.pages;
 }}
// The public NĐ 254 page used to claim 841 OCR pages (copied from TT 89's 839-page PDF plus its 2-page correction),
// and its OCR formatting hid six article headings from the table of contents. Keep this specific high-use record guarded.
{const decree=core.find(d=>d.id==='nd-254-2026');const source=m.documents.find(d=>d.id==='nd-254-2026');
 if(!decree||!source)throw Error('NĐ 254 missing from the public catalog or source manifest');
 const expectedPages=source.files.reduce((sum,file)=>sum+file.pages,0);
 if(!new RegExp(`\\b${expectedPages}\\s*\\/\\s*${expectedPages}\\s*trang\\b`,'i').test(decree.text_status_note||''))throw Error('NĐ 254 OCR page count note does not match its PDF source');
 const text=fs.readFileSync('public'+decree.content_url,'utf8');const articles=new Set();
 for(const line of text.split(/\r?\n/)){const match=line.trim().match(/^(?:#+\s*|\*\*)?(?:[.,;:|]\s*)?(?:[A-Za-z]\s+)?(Điều\s+(\d+)\s*[.:,]\s*.*?)(?:\*\*|$)/i);if(match&&(line.match(/Điều\s+\d+/gi)||[]).length===1)articles.add(Number(match[2]));}
 const missing=Array.from({length:45},(_,index)=>index+1).filter(number=>!articles.has(number));
 if(missing.length)throw Error('NĐ 254 table-of-contents headings missing: '+missing.join(', '));}
// --- Kiểm tra bổ sung (13/11/2026): nguồn cấm, đồng bộ bản sao, lỗi chuyển đổi, phiên bản ---
{const problems=[];const BANNED=/thuvienphapluat\.vn/i;const SITE_JUNK=/(Đang theo dõi|Bạn chưa Đăng nhập|data-href=|Chính sách bảo mật\s*\n)/;const INWORD=/[\p{L}\p{N}]__[\p{L}\p{N}]/u;
 if(BANNED.test(JSON.stringify(core)))problems.push('decrees.json còn link thuvienphapluat.vn');
 for(const d of core)if(/^https?:\/\/[^/]+\/?$/.test(d.source_url||''))problems.push('source_url chỉ là trang chủ: '+d.id);
 const ts=fs.readFileSync('src/data/initial-decrees.ts','utf8');const init=JSON.parse(ts.slice(ts.indexOf('= [')+2,ts.lastIndexOf(']')+1));
 if(JSON.stringify(init)!==JSON.stringify(core))problems.push('src/data/initial-decrees.ts không khớp public/data/decrees.json');
 const files=fs.readdirSync('public/data/content').filter(f=>f.endsWith('.md'));const used=new Set(core.map(d=>d.content_url.split('/').pop()));
 for(const f of files){if(!used.has(f))problems.push('File .md thừa (không có trong CSDL): '+f);const txt=fs.readFileSync('public/data/content/'+f,'utf8');
  if(BANNED.test(txt))problems.push('Còn link thuvienphapluat.vn: '+f);if(SITE_JUNK.test(txt))problems.push('Còn rác website: '+f);
  // Raw OCR uncertainty is surfaced next to the source page. Don't turn an explicitly flagged page into a false release-blocker.
  const pageChunks=txt.split(/(?=^### Trang \d+[ \t]*$)/m);
  if(pageChunks.some(page=>!page.includes('Cần rà OCR')&&INWORD.test(page)))problems.push('Còn ký tự "__" chen giữa chữ ở trang không cảnh báo OCR: '+f);}
 const tt91=core.find(d=>d.id==='tt-91-2026');const tt91Source=m.documents.find(d=>d.id==='tt-91-2026');
 if(!tt91||!tt91Source?.files?.length)problems.push('Thiếu TT91/2026 trong catalog hoặc manifest nguồn');
 else{const file=tt91Source.files[0];if(tt91.text_status!=='ocr-review'||!tt91.text_status_note?.includes('trang 52 không trích xuất được chữ'))problems.push('TT91 phải cảnh báo trang OCR rỗng/chưa xác minh bố cục');
  if(!file.emptyPages?.includes(52)||file.lowConfidencePages?.length!==34||tt91Source.layoutVerified!==false)problems.push('Manifest OCR TT91 đã thay đổi; phải rà soát và cập nhật cảnh báo chất lượng trước khi phát hành');
  if(tt91.text_url!=='/data/accounting-laws/tt-91-2026-1.json')problems.push('TT91 phải trỏ tới dữ liệu OCR theo trang từ PDF gốc');
  const tt91Text=JSON.parse(fs.readFileSync('public'+tt91.text_url,'utf8'));
  if(tt91Text.pages?.length!==97||tt91Text.pages[51]?.page!==52||tt91Text.pages[51].text.trim().length>=30)problems.push('TT91 phải giữ đủ 97 trang và xác định đúng trang 52 không trích xuất được chữ');
  if(!fs.readFileSync('src/pages/DecreeDetailPage.tsx','utf8').includes('phần tiếp theo của Mẫu số 01/BK-ĐCTT'))problems.push('Trang 52 TT91 phải cảnh báo đúng đây là phần tiếp của bảng mẫu 01/BK-ĐCTT, không gọi là trang trắng');
  if(tt91Text.pages[2].text.split(/\r?\n/).filter(line=>line.trim()==='Chương II').length!==1||!tt91Text.pages[27].text.includes('Chương III\nQUY ĐỊNH VỀ CHỨNG TỪ ĐIỆN TỬ')||tt91Text.manualCorrections?.length!==2)problems.push('TT91 cần giữ hai tiêu đề chương đã đối chiếu trực quan với PDF gốc trang 3 và 28');
  const tt91DisplayText=tt91Text.pages.map(page=>page.text).join('\n');
  const tt91Articles=new Set();for(const line of tt91DisplayText.split(/\r?\n/)){const match=line.trim().match(/^Điều\s+(\d+)\s*[.:,]\s*\S/i);if(match&&(line.match(/Điều\s+\d+/gi)||[]).length===1)tt91Articles.add(Number(match[1]));}
  if(tt91Articles.size!==25)problems.push(`TT91 phải có 25 tiêu đề Điều, tìm thấy ${tt91Articles.size}`);
  if((tt91DisplayText.match(/^Chương\s+/gmi)||[]).length!==5)problems.push('TT91 phải có đủ 5 tiêu đề Chương sau hiệu chỉnh OCR đã đối chiếu PDF');
  if(tt91.summary?.includes('ban hành hệ thống biểu mẫu kê khai thuế mới'))problems.push('Tóm tắt TT91 còn gán sai phạm vi văn bản');}
 const nd291=core.find(d=>d.id==='nd-291-2026');
 if(!nd291||!nd291.summary?.includes('Điều 19a')||nd291.summary.includes('quy định chi tiết mức phạt hành vi không giải trình'))problems.push('Tóm tắt NĐ291 chưa phản ánh đúng phạm vi Điều 19a');
 const qlt=core.find(d=>d.id==='luat-108-2025');
 if(!qlt||qlt.summary?.includes('áp dụng trí tuệ nhân tạo đối soát rủi ro'))problems.push('Tóm tắt Luật Quản lý thuế 108 còn khẳng định ứng dụng AI không có căn cứ');
 if(/Kiểu Việt có doanh thu\s+\d{4}|134\s*tỷ đồng/i.test(JSON.stringify(core)))problems.push('Catalog public còn chứa dữ liệu doanh thu nội bộ của Kiểu Việt');
 const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));const cst=fs.readFileSync('src/lib/utils/constants.ts','utf8').match(/APP_VERSION = '([^']+)'/);
 if(!cst||cst[1]!==pkg.version)problems.push('APP_VERSION trong constants.ts khác version package.json');
 if(problems.length){console.error(problems.join('\n'));throw Error(problems.length+' lỗi dữ liệu');}}
console.log(JSON.stringify({core:core.length,supplemental:m.documents.length,originalFiles:count,pages,ocrReviewCount:ocrReview.length,ocrReviewSample:ocrReview.slice(0,5),legalCertification:false},null,2));

