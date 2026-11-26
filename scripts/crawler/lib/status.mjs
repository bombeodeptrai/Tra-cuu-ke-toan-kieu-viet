import fs from 'node:fs';

export const RESULTS = ['updated', 'no_changes', 'review_required', 'failed'];

export function readStatus(file) {
  if (!fs.existsSync(file)) return null;
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

/**
 * Lần chạy lỗi (nguồn sập, Drive lỗi) không được làm mất danh sách chờ của lần trước:
 * giữ lại mọi hồ sơ cũ mà lần này chưa xử lý tới, để lần chạy sau tự xử lý tiếp.
 */
export function keepPendingOnFailure(previous, run) {
  const current = run.documentsPendingReview || [];
  if (run.result !== 'failed') return current;
  const key = item => String(item.officialNumber || '').toUpperCase().replace(/\s+/g, '');
  const seen = new Set(current.map(key));
  const added = new Set((run.documentsAdded || []).map(item => key(item)));
  const kept = (previous?.documentsPendingReview || []).filter(item => !seen.has(key(item)) && !added.has(key(item)));
  return [...current, ...kept];
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
    documentsPendingReview: keepPendingOnFailure(previous, run),
    ignoredOutOfScope: run.ignoredOutOfScope,
    alreadyInCatalog: run.alreadyInCatalog,
    publishedCatalogCount: run.publishedCatalogCount,
    drivePending: run.drivePending || [],
    warnings: run.warnings || [],
    errors: run.errors,
  };
  fs.writeFileSync(file, `${JSON.stringify(status, null, 2)}\n`, 'utf8');
  return status;
}
