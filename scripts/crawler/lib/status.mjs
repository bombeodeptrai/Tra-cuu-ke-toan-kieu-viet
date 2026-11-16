import fs from 'node:fs';

export const RESULTS = ['updated', 'no_changes', 'review_required', 'failed'];

export function readStatus(file) {
  if (!fs.existsSync(file)) return null;
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

/** Ghi trạng thái; giữ mốc quét thành công trước đó khi lần này lỗi. */
export function writeStatus(file, previous, run) {
  if (!RESULTS.includes(run.result)) throw new Error(`Kết quả không hợp lệ: ${run.result}`);
  const scanSucceeded = run.sources.length > 0 && run.sources.every(source => source.ok);
  const status = {
    schemaVersion: 1,
    lastAttemptAt: run.attemptAt,
    lastSuccessfulScanAt: scanSucceeded ? run.attemptAt : (previous?.lastSuccessfulScanAt ?? null),
    result: run.result,
    scanWindowStart: run.windowStart,
    sources: run.sources,
    documentsAdded: run.documentsAdded,
    documentsPendingReview: run.documentsPendingReview,
    ignoredOutOfScope: run.ignoredOutOfScope,
    alreadyInCatalog: run.alreadyInCatalog,
    publishedCatalogCount: run.publishedCatalogCount,
    errors: run.errors,
  };
  fs.writeFileSync(file, `${JSON.stringify(status, null, 2)}\n`, 'utf8');
  return status;
}
