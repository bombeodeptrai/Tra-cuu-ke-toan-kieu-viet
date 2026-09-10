export type Verdict = 'pass'|'fail'|'insufficient'|'not_applicable'|'review';
export type Basis = 'law'|'tender'|'contract'|'manufacturer'|'internal';
export interface Citation {
  documentId: string; versionId: string; locator: string;
  sourceHash: string; verified: boolean;
}
export interface Rule {
  id: string; version: string; basis: Basis;
  eventBasis: 'purchase'|'import'|'bid'|'delivery'|'use';
  publication: 'draft'|'released'; citations: Citation[];
  validFrom: string; validUntilExclusive?: string; conditionIds: string[];
}
export interface ScopeDecision {
  status: 'applies'|'does_not_apply'|'unknown'|'conflict';
  reason: string; evidenceIds: string[];
}
export interface Fact {
  conditionId: string; entityId: string; modelId: string;
  value: boolean|null; evidenceIds: string[];
  verification: 'verified'|'unverified'|'conflict';
  validFrom: string; validUntilExclusive?: string;
  checkedAt: string; maxAgeDays?: number;
}
export interface Context { entityId: string; modelId: string; eventDate: string; assessedAt: string }
export interface Finding {
  ruleId: string; ruleVersion: string; verdict: Verdict;
  reasons: string[]; evidenceIds: string[]; citations: Citation[];
}

export function day(s: string): number|null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const n = Date.parse(s+'T00:00:00.000Z');
  return Number.isFinite(n) && new Date(n).toISOString().slice(0,10) === s ? n : null;
}
export function evaluate(r: Rule, c: Context, scope: ScopeDecision, facts: Fact[]): Finding {
  const relevant = facts.filter(f => r.conditionIds.includes(f.conditionId) &&
    f.entityId === c.entityId && f.modelId === c.modelId);
  const out = (verdict: Finding['verdict'], ...reasons: string[]): Finding => ({
    ruleId:r.id, ruleVersion:r.version, verdict, reasons, citations:r.citations,
    evidenceIds:[...new Set(relevant.flatMap(f=>f.evidenceIds))],
  });
  const e=day(c.eventDate), now=day(c.assessedAt), from=day(r.validFrom);
  const until=r.validUntilExclusive ? day(r.validUntilExclusive) : Infinity;
  if (!c.entityId || !c.modelId || e===null || now===null) return out('insufficient','Thiếu phạm vi/ngày hợp lệ');
  if (e>now) return out('review','Giao dịch dự kiến cần kiểm lại khi thực hiện');
  if (from===null || until===null || until<=from) return out('review','Khoảng áp dụng sai');
  if (r.publication!=='released' || !r.citations.length || r.citations.some(x=>
      !x.verified || !x.documentId || !x.versionId || !x.locator || !x.sourceHash))
    return out('review','Căn cứ chưa được xác minh/phát hành');
  if (e<from || e>=until) return out('not_applicable','Ngoài khoảng áp dụng');
  if (scope.status==='conflict') return out('review','Mâu thuẫn phạm vi');
  if (scope.status==='unknown' || !scope.reason || !scope.evidenceIds.length)
    return out('insufficient','Chưa xác định đủ phạm vi');
  if (scope.status==='does_not_apply') return out('not_applicable',scope.reason);
  if (!r.conditionIds.length || new Set(r.conditionIds).size!==r.conditionIds.length)
    return out('review','Tập điều kiện chưa hợp lệ');
  const missing:string[]=[], failed:string[]=[], conflicts:string[]=[];
  for (const id of r.conditionIds) {
    const rows=relevant.filter(f=>f.conditionId===id);
    if(rows.length>1){conflicts.push(id);continue;}
    const f=rows[0];
    if(!f){missing.push(id);continue;}
    if(f.verification==='conflict'){conflicts.push(id);continue;}
    const a=day(f.validFrom), b=f.validUntilExclusive?day(f.validUntilExclusive):Infinity;
    const checked=day(f.checkedAt);
    if((checked!==null && checked>now) || (f.maxAgeDays!==undefined &&
       (!Number.isFinite(f.maxAgeDays)||f.maxAgeDays<0))){conflicts.push(id);continue;}
    const stale=checked!==null && f.maxAgeDays!==undefined && now-checked>f.maxAgeDays*86400000;
    if(f.verification!=='verified'||f.value===null||!f.evidenceIds.length||a===null||b===null||
       b<=a||checked===null||e<a||e>=b||stale){missing.push(id);continue;}
    if(f.value===false)failed.push(id);
  }
  const reasons=[...conflicts.map(x=>'Mâu thuẫn: '+x),...failed.map(x=>'Không đáp ứng: '+x),
    ...missing.map(x=>'Thiếu căn cứ: '+x)];
  if(conflicts.length)return out('review',...reasons);
  if(failed.length)return out('fail',...reasons);
  if(missing.length)return out('insufficient',...reasons);
  return out('pass','Đáp ứng các điều kiện đã kiểm trong phạm vi này');
}

export function summarize(required:string[], rows:Finding[]):Verdict {
  if(!required.length||new Set(required).size!==required.length)return 'insufficient';
  const selected:Finding[]=[];
  for(const id of required){
    const match=rows.filter(x=>x.ruleId===id);
    if(match.length!==1)return match.length?'review':'insufficient';
    selected.push(match[0]);
  }
  if(selected.some(x=>x.verdict==='fail'))return 'fail';
  if(selected.some(x=>x.verdict==='review'))return 'review';
  if(selected.some(x=>x.verdict==='insufficient'))return 'insufficient';
  return selected.some(x=>x.verdict==='pass')?'pass':'insufficient';
}

export interface ClauseRef { documentId:string;versionId:string;locator:string;sourceHash:string }
export interface LegalDiff {
  id:string;oldRefs:ClauseRef[];newRefs:ClauseRef[];
  kind:'added'|'modified'|'removed'|'unchanged'|'not_comparable';
  oldExtract:string;newExtract:string;interpretation:string;
  effectiveFrom?:string;applicationNote:string;affectedRuleIds:string[];
  review:'draft'|'approved';
}
