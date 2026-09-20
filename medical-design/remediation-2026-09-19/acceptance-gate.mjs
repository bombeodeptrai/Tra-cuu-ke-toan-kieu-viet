import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

export const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
export const baseline = JSON.parse(fs.readFileSync(new URL('./acceptance-scope.json', import.meta.url), 'utf8'));
const groups = ['documents','rules','templates','checks','deployments'];
const commitPattern = /^[a-f0-9]{40}$/;
const hashPattern = /^[a-f0-9]{64}$/;

// This checks report consistency and evidence integrity, not the truth of a law
// or whether a video actually demonstrates the promised business outcome.
export function validateAcceptance(report, scope, evidenceRoot) {
  const errors = [];
  if (report.schemaVersion !== 1) errors.push('SCHEMA_VERSION');
  if (!commitPattern.test(report.sourceCommit ?? '')) errors.push('INVALID_SOURCE_COMMIT');
  if (!report.corpusVersion || typeof report.corpusVersion !== 'string') errors.push('MISSING_CORPUS_VERSION');
  if (report.scopeSha256 !== sha256(JSON.stringify(scope))) errors.push('SCOPE_HASH_MISMATCH');
  const root = fs.realpathSync(evidenceRoot);
  const within = target => {
    const rel = path.relative(root, target);
    return rel && !path.isAbsolute(rel) && rel !== '..' && !rel.startsWith('..' + path.sep);
  };
  const counts = {};
  for (const group of groups) {
    const expected = scope[group];
    if (!Array.isArray(expected) || expected.length === 0 || new Set(expected).size !== expected.length) {
      errors.push(`${group}:INVALID_SCOPE`); continue;
    }
    for (const id of baseline[group]) if (!expected.includes(id)) errors.push(`${group}:BASELINE_REMOVED:${id}`);
    const records = Array.isArray(report[group]) ? report[group] : [];
    const seen = new Set();
    for (const record of records) {
      const key = `${group}:${record.id}`;
      if (seen.has(record.id)) errors.push(`${key}:DUPLICATE`);
      seen.add(record.id);
      if (!expected.includes(record.id)) errors.push(`${key}:UNREGISTERED`);
      if (record.status !== 'passed') errors.push(`${key}:NOT_PASSED`);
      if (record.sourceCommit !== report.sourceCommit || record.corpusVersion !== report.corpusVersion) errors.push(`${key}:VERSION_MISMATCH`);
      if (!Array.isArray(record.evidence) || record.evidence.length === 0) {
        errors.push(`${key}:NO_EVIDENCE`); continue;
      }
      for (const item of record.evidence) {
        try {
          if (typeof item.path !== 'string' || path.isAbsolute(item.path)) throw Error('PATH');
          const resolved = fs.realpathSync(path.resolve(root, item.path));
          if (!within(resolved) || !fs.statSync(resolved).isFile()) throw Error('PATH');
          const bytes = fs.readFileSync(resolved);
          if (!bytes.length || !hashPattern.test(item.sha256 ?? '') || sha256(bytes) !== item.sha256) throw Error('HASH');
        } catch (e) { errors.push(`${key}:EVIDENCE_${e.message === 'HASH' ? 'HASH' : 'FILE'}_INVALID`); }
      }
    }
    for (const id of expected) if (!seen.has(id)) errors.push(`${group}:${id}:MISSING`);
    counts[group] = {expected:expected.length, reported:records.length, passed:records.filter(r=>r.status==='passed').length};
  }
  return {accepted:errors.length===0, counts, errors};
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const [, , reportPath, scopePath, evidenceRoot] = process.argv;
    if (!reportPath || !scopePath || !evidenceRoot) throw Error('Usage: node acceptance-gate.mjs <report.json> <scope.json> <evidence-directory>');
    const result = validateAcceptance(JSON.parse(fs.readFileSync(reportPath,'utf8')), JSON.parse(fs.readFileSync(scopePath,'utf8')), evidenceRoot);
    console.log(JSON.stringify(result,null,2));
    process.exitCode = result.accepted ? 0 : 1;
  } catch(e) { console.error(JSON.stringify({accepted:false,error:e.message})); process.exitCode=2; }
}
