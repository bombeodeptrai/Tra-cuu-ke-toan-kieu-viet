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
console.log(JSON.stringify({core:core.length,supplemental:m.documents.length,originalFiles:count,pages,ocrReviewCount:ocrReview.length,ocrReviewSample:ocrReview.slice(0,5),legalCertification:false},null,2));
