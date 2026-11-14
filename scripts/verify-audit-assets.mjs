import fs from 'node:fs';import crypto from 'node:crypto';
const core=JSON.parse(fs.readFileSync('public/data/decrees.json','utf8'));if(core.length<55||new Set(core.map(d=>d.id)).size!==core.length)throw Error('Missing/duplicate core legal records');
for(const d of core){const bytes=fs.readFileSync('public'+d.pdf_url);if(bytes.subarray(0,5).toString()!=='%PDF-')throw Error('Core original not PDF '+d.id);if(fs.readFileSync('public'+d.content_url,'utf8').trim().length<100)throw Error('Core text missing '+d.id);}
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
 for(const line of text.split(/\r?\n/)){const match=line.trim().match(/^(?:#+\s*|\*\*)?(?:[.,;:|]\s*)?(?:[A-Za-z]\s+)?(Điều\s+(\d+)\s*[.:,]\s*.*?)(?:\*\*|$)/i);if(match)articles.add(Number(match[2]));}
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
 else{const file=tt91Source.files[0];if(tt91.text_status!=='ocr-review'||!tt91.text_status_note?.includes('trang 52 rỗng'))problems.push('TT91 phải cảnh báo trang OCR rỗng/chưa xác minh bố cục');
  if(!file.emptyPages?.includes(52)||!file.lowConfidencePages?.length||tt91Source.layoutVerified!==false)problems.push('Manifest OCR TT91 đã thay đổi; phải rà soát và cập nhật cảnh báo chất lượng trước khi phát hành');
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

