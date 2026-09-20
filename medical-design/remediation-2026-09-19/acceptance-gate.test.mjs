import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {baseline,sha256,validateAcceptance} from './acceptance-gate.mjs';

const root=fs.mkdtempSync(path.join(os.tmpdir(),'kv-med-gate-'));
const evidencePath=path.join(root,'synthetic-evidence.txt');
fs.writeFileSync(evidencePath,'SYNTHETIC TEST ONLY — not live acceptance');
const hash=sha256(fs.readFileSync(evidencePath));
const commit='a'.repeat(40);
function report() {
 const r={schemaVersion:1,sourceCommit:commit,corpusVersion:'synthetic-v1',scopeSha256:sha256(JSON.stringify(baseline))};
 for(const group of ['documents','rules','templates','checks','deployments']) r[group]=baseline[group].map(id=>({id,status:'passed',sourceCommit:commit,corpusVersion:'synthetic-v1',evidence:[{path:'synthetic-evidence.txt',sha256:hash}]}));
 return r;
}
test('consistent synthetic fixture is accepted as report structure only',()=>assert.equal(validateAcceptance(report(),baseline,root).accepted,true));
for(const [name,mutate] of [
 ['empty report',r=>{r.documents=[];r.rules=[];r.checks=[];}],
 ['claim 100 percent without evidence',r=>r.documents[0].evidence=[]],
 ['missing one law',r=>r.documents.pop()],
 ['missing one MD rule',r=>r.rules.pop()],
 ['missing one template',r=>r.templates.pop()],
 ['missing second deployment',r=>r.deployments.pop()],
 ['blocked test',r=>r.checks[0].status='blocked'],
 ['not tested',r=>r.checks[0].status='not_tested'],
 ['fake commit label',r=>r.sourceCommit='all-tests-passed-v3'],
 ['different deployed corpus',r=>r.deployments[0].corpusVersion='old'],
 ['duplicate record',r=>r.documents.push(r.documents[0])],
 ['wrong bytes hash',r=>r.documents[0].evidence[0].sha256='b'.repeat(64)],
 ['missing file',r=>r.documents[0].evidence[0].path='does-not-exist.pdf'],
 ['outside evidence directory',r=>r.documents[0].evidence[0].path='../outside.txt']
])test(name,()=>{const r=report();mutate(r);assert.equal(validateAcceptance(r,baseline,root).accepted,false);});
test('cannot lower baseline denominator',()=>{const s=structuredClone(baseline);s.documents.pop();const r=report();r.documents.pop();r.scopeSha256=sha256(JSON.stringify(s));assert.ok(validateAcceptance(r,s,root).errors.some(e=>e.includes('BASELINE_REMOVED')));});
test('new law increases required coverage',()=>{const s=structuredClone(baseline);s.documents.push('additional-reviewed-law');const r=report();r.scopeSha256=sha256(JSON.stringify(s));assert.ok(validateAcceptance(r,s,root).errors.some(e=>e.includes('additional-reviewed-law:MISSING')));});
// Only files this test created are removed, without recursive deletion.
test.after(()=>{fs.unlinkSync(evidencePath);fs.rmdirSync(root);});
