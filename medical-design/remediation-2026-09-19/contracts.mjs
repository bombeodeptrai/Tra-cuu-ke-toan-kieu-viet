// Executable design contracts. Not a deployed backend or legal rule engine.
export function medicalUrl(base, route, params = {}) {
  const b = new URL(base);
  if (!['/thau-y-te-gia-lai/kieu-viet/', '/Tra-cuu-ke-toan-kieu-viet/med-app/'].includes(b.pathname)) throw Error('INVALID_MEDICAL_BASE');
  if (b.protocol !== 'https:' || b.hostname !== 'bombeodeptrai.github.io') throw Error('INVALID_ORIGIN');
  if (!/^\/(?:so-sanh|phap-luat|dau-thau|hoi-dap-ai|bieu-mau)(?:\/[a-z0-9-]+)?$/.test(route)) throw Error('INVALID_ROUTE');
  b.search = '';
  const q = new URLSearchParams(Object.entries(params).filter(([, v]) => v != null).map(([k,v]) => [k, String(v)]));
  b.hash = route + (q.size ? '?' + q.toString() : '');
  return b.href;
}

export function publicationErrors(doc) {
  const errors = [];
  const f = doc.file;
  const hashOK = value => typeof value === 'string' && /^[a-f0-9]{64}$/.test(value);
  if (!f?.driveFileId || f.mimeType !== 'application/pdf' || !(f.byteLength > 0)) errors.push('NO_PDF_FILE');
  if (!hashOK(f?.sourceSha256) || f.sourceSha256 !== f.readbackSha256) errors.push('READBACK_MISMATCH');
  if (!f?.readbackVerifiedAt || !f?.parentVerified || !f?.identityVerified) errors.push('UNVERIFIED_ORIGINAL');
  if (!Number.isInteger(doc.expectedPages) || doc.expectedPages < 1) errors.push('UNKNOWN_PAGE_COUNT');
  const pages = doc.pages ?? [];
  if (pages.length !== doc.expectedPages || new Set(pages.map(p => p.number)).size !== pages.length) errors.push('PAGE_COVERAGE');
  for (let n = 1; Number.isInteger(doc.expectedPages) && n <= doc.expectedPages; n++) {
    const p = pages.find(p => p.number === n);
    if (!p || !hashOK(p.sourceRenderSha256) || !hashOK(p.textSha256) || !p.verified || (p.issues?.length ?? 0) > 0) errors.push(`PAGE_${n}_UNVERIFIED`);
  }
  if (!doc.structureReviewed || !doc.appendicesReviewed || !doc.transcriptionReviewed || !doc.provenanceId) errors.push('CONTENT_NOT_REVIEWED');
  if (doc.unresolved?.length || doc.sourceConflict) errors.push('UNRESOLVED');
  return [...new Set(errors)];
}

export function numericFinding({required, offered, operator, requirementUnit, offeredUnit, sourceVerified, applicable, ruleVerified}) {
  if (!ruleVerified || applicable == null) return 'review';
  if (!applicable) return 'not_applicable';
  if (!sourceVerified || !Number.isFinite(required) || !Number.isFinite(offered)) return 'insufficient';
  if (!requirementUnit || requirementUnit !== offeredUnit) return 'review';
  const ops = {gte:(a,b)=>a>=b, lte:(a,b)=>a<=b, eq:(a,b)=>a===b};
  if (!ops[operator]) return 'review';
  return ops[operator](offered, required) ? 'pass' : 'fail';
}

// Operational deadline, deliberately separate from official procurement outcome.
export function deadlineState(closeAt, now) {
  const explicitZone = /(?:Z|[+-]\d{2}:\d{2})$/;
  if (!explicitZone.test(closeAt ?? '') || !explicitZone.test(now ?? '')) return 'unknown';
  const close = Date.parse(closeAt), at = Date.parse(now);
  if (!Number.isFinite(close) || !Number.isFinite(at)) return 'unknown';
  if (at >= close) return 'deadline_passed';
  return close - at <= 72 * 3600000 ? 'closing_soon' : 'open';
}

export function citationErrors(citations, blocks, tenantId, corpusVersion) {
  return citations.flatMap(c => {
    const b = blocks.find(x => x.id === c.blockId);
    if (!b || b.tenantId !== tenantId || b.corpusVersion !== corpusVersion || !b.verified) return ['CITATION_UNAVAILABLE'];
    if (!c.quote || !b.text.includes(c.quote)) return ['QUOTE_MISMATCH'];
    return [];
  });
}

// One side only: caller MUST run this for both left and right scopes, swapping
// rightIds into leftIds on the second call. Neither call certifies legal meaning.
export function compareCoverage(expectedBlockIds, alignments) {
  const expected = new Set(expectedBlockIds);
  if (!expected.size) return {complete:false,missing:[],invalid:['EMPTY_SCOPE']};
  const covered = new Set(alignments.filter(a => a.reviewed).flatMap(a => a.leftIds));
  return {complete:[...expected].every(id=>covered.has(id)) && [...covered].every(id=>expected.has(id)), missing:[...expected].filter(id=>!covered.has(id)), invalid:[...covered].filter(id=>!expected.has(id))};
}
