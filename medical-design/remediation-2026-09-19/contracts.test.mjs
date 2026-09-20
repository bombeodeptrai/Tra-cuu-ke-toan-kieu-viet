import test from 'node:test';
import assert from 'node:assert/strict';
import {medicalUrl,publicationErrors,numericFinding,deadlineState,citationErrors,compareCoverage} from './contracts.mjs';
const bases=['https://bombeodeptrai.github.io/thau-y-te-gia-lai/kieu-viet/','https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/med-app/'];
for(const base of bases) test(`medical routing stays in ${new URL(base).pathname}`,()=>{
 const u=new URL(medicalUrl(base,'/so-sanh',{left:'tt-57-2025',right:'version-2',q:'kiểm định & luật'}));
 assert.equal(u.pathname,new URL(base).pathname); assert.ok(u.hash.startsWith('#/so-sanh?')); assert.equal(new URLSearchParams(u.hash.split('?')[1]).get('q'),'kiểm định & luật');
});
test('accounting base and external route rejected',()=>{
 assert.throws(()=>medicalUrl('https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/','/so-sanh'));
 assert.throws(()=>medicalUrl(bases[0],'//evil.example'));
});
const hash='a'.repeat(64);
const complete=()=>({file:{driveFileId:'test-file',mimeType:'application/pdf',byteLength:900,sourceSha256:hash,readbackSha256:hash,readbackVerifiedAt:'2026-09-19',parentVerified:true,identityVerified:true},expectedPages:2,pages:[1,2].map(number=>({number,sourceRenderSha256:hash,textSha256:hash,verified:true,issues:[]})),structureReviewed:true,appendicesReviewed:true,transcriptionReviewed:true,provenanceId:'test-review',unresolved:[]});
test('complete synthetic provenance passes contract only',()=>assert.deepEqual(publicationErrors(complete()),[]));
for (const [name,mutate,expected] of [
 ['folder only',d=>d.file.mimeType='application/vnd.google-apps.folder','NO_PDF_FILE'],
 ['readback mismatch',d=>d.file.readbackSha256='b'.repeat(64),'READBACK_MISMATCH'],
 ['missing page',d=>d.pages.pop(),'PAGE_COVERAGE'],
 ['duplicate page',d=>d.pages[1].number=1,'PAGE_COVERAGE'],
 ['unknown total',d=>d.expectedPages=null,'UNKNOWN_PAGE_COUNT'],
 ['OCR issue',d=>d.pages[1].issues.push('ambiguous decimal'),'PAGE_2_UNVERIFIED'],
 ['appendix not reviewed',d=>d.appendicesReviewed=false,'CONTENT_NOT_REVIEWED'],
 ['source conflict',d=>d.sourceConflict=true,'UNRESOLVED'],
 ['no ownership check',d=>d.file.parentVerified=false,'UNVERIFIED_ORIGINAL']
])test(name,()=>{const d=complete();mutate(d);assert.ok(publicationErrors(d).includes(expected));});
const finding={required:5,offered:4,operator:'gte',requirementUnit:'L/min',offeredUnit:'L/min',sourceVerified:true,applicable:true,ruleVerified:true};
test('4 < 5 fails only backed same-unit requirement',()=>assert.equal(numericFinding(finding),'fail'));
test('same value meets inclusive threshold',()=>assert.equal(numericFinding({...finding,offered:5}),'pass'));
test('no source is insufficient',()=>assert.equal(numericFinding({...finding,sourceVerified:false}),'insufficient'));
test('missing input differs from zero',()=>assert.equal(numericFinding({...finding,offered:null}),'insufficient'));
test('unit mismatch needs review',()=>assert.equal(numericFinding({...finding,offeredUnit:'mL/min'}),'review'));
test('unverified rule needs review',()=>assert.equal(numericFinding({...finding,ruleVerified:false}),'review'));
test('proven out of scope not applicable',()=>assert.equal(numericFinding({...finding,applicable:false}),'not_applicable'));
test('BA200 deadline passed on audit day',()=>assert.equal(deadlineState('2026-09-18T14:00:00+07:00','2026-09-19T16:00:00+07:00'),'deadline_passed'));
test('new Servo opportunity open',()=>assert.equal(deadlineState('2026-09-25T10:00:00+07:00','2026-09-19T16:00:00+07:00'),'open'));
test('timezone required and exact deadline closed',()=>{assert.equal(deadlineState('2026-09-18 14:00','2026-09-19T16:00:00+07:00'),'unknown');assert.equal(deadlineState('2026-09-18T14:00:00+07:00','2026-09-18T14:00:00+07:00'),'deadline_passed');});
const block={id:'b',tenantId:'t',corpusVersion:'v',verified:true,text:'Một đoạn chứng cứ dùng cho kiểm thử.'};
test('exact quote can be resolved',()=>assert.deepEqual(citationErrors([{blockId:'b',quote:'chứng cứ'}],[block],'t','v'),[]));
test('fabricated quote rejected',()=>assert.deepEqual(citationErrors([{blockId:'b',quote:'hoàn toàn đạt'}],[block],'t','v'),['QUOTE_MISMATCH']));
test('other tenant and stale corpus rejected',()=>{assert.ok(citationErrors([{blockId:'b',quote:'chứng cứ'}],[block],'other','v').length);assert.ok(citationErrors([{blockId:'b',quote:'chứng cứ'}],[block],'t','old').length);});
test('three selected summaries do not cover full document',()=>assert.equal(compareCoverage(['1','2','3','4'],[{leftIds:['1','2','3'],reviewed:true}]).complete,false));
test('unreviewed match not counted',()=>assert.equal(compareCoverage(['1'],[{leftIds:['1'],reviewed:false}]).complete,false));
test('reviewed explicit deletion counts in coverage',()=>assert.equal(compareCoverage(['1'],[{leftIds:['1'],rightIds:[],change:'removed',reviewed:true}]).complete,true));
