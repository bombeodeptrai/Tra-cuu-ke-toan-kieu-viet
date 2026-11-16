#!/usr/bin/env node
/**
 * Tự quét văn bản pháp luật từ nguồn chính thức và nhập vào thư viện khi đã xác minh đủ.
 *
 * Kết quả mỗi lần chạy (ghi vào public/data/legal-crawl-status.json):
 *   updated          — có văn bản mới đã xác minh metadata, PDF gốc, toàn văn đủ trang, đã lưu website + Drive
 *   no_changes       — mọi nguồn bắt buộc quét và parse thành công, phủ đủ khoảng thời gian, không có văn bản mới phù hợp
 *   review_required  — có văn bản liên quan nhưng metadata/PDF/toàn văn/phạm vi/Drive chưa đủ điều kiện công bố
 *   failed           — nguồn bắt buộc lỗi, tải Drive lỗi hoặc lỗi hệ thống
 * Mã thoát: 0 = updated/no_changes, 2 = review_required, 1 = failed.
 *
 * Tham số: --root <thư mục repo> (mặc định: thư mục gốc dự án), --artifacts <thư mục> (mặc định: crawl-artifacts)
 * Biến môi trường: GDRIVE_SERVICE_ACCOUNT_JSON, GDRIVE_FOLDER_ID (xem lib/drive.mjs), CRAWL_TODAY (YYYY-MM-DD, chỉ để kiểm thử).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as vanban from './lib/vanban-chinhphu.mjs';
import { classifyRelevance, loadRelevance } from './lib/relevance.mjs';
import { downloadOfficialPdf, extractPdfPages, assessCompleteness } from './lib/pdf.mjs';
import { driveConfigFromEnv, mirrorPdfToDrive } from './lib/drive.mjs';
import { generateInitialDecrees, isKnown, loadCatalog, mergeVerifiedDocument, proposeId } from './lib/catalog.mjs';
import { readStatus, writeStatus } from './lib/status.mjs';
import { assertOfficialUrl } from './lib/http.mjs';
import { numberKey } from './lib/normalize.mjs';

const DAY = 86400000;
const isoDate = date => date.toISOString().slice(0, 10);

export function computeWindowStart(previousStatus, today, { overlapDays = 3, firstRunDays = 14 } = {}) {
  const todayMs = Date.parse(`${today}T00:00:00Z`);
  const last = previousStatus?.lastSuccessfulScanAt ? Date.parse(previousStatus.lastSuccessfulScanAt) : null;
  const start = last ? Math.min(last - overlapDays * DAY, todayMs - overlapDays * DAY) : todayMs - firstRunDays * DAY;
  return isoDate(new Date(start));
}

function saveArtifact(dir, name, value) {
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, name);
  if (Buffer.isBuffer(value)) fs.writeFileSync(file, value);
  else fs.writeFileSync(file, typeof value === 'string' ? value : `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

/**
 * Chạy toàn bộ pipeline. Các phụ thuộc mạng/PDF/Drive được tiêm vào để kiểm thử offline.
 */
export async function runCrawler({
  root,
  artifactsDir,
  today = process.env.CRAWL_TODAY || isoDate(new Date()),
  now = () => new Date().toISOString(),
  source = vanban,
  fetchImpl = globalThis.fetch,
  retries = 3,
  backoffMs = 2000,
  extract = extractPdfPages,
  driveConfig = driveConfigFromEnv(),
  mirror = mirrorPdfToDrive,
  log = console.log,
} = {}) {
  const catalog = loadCatalog(root);
  const statusFile = catalog.paths.status;
  const previous = readStatus(statusFile);
  const relevance = loadRelevance(path.join(root, 'scripts/crawler/relevance.json'));
  const attemptAt = now();
  const windowStart = computeWindowStart(previous, today);
  const run = {
    attemptAt, windowStart, sources: [], documentsAdded: [], documentsPendingReview: [], ignoredOutOfScope: [],
    alreadyInCatalog: [], errors: [], publishedCatalogCount: catalog.decrees.length, result: 'failed',
  };
  const finish = result => {
    run.result = result;
    run.publishedCatalogCount = catalog.decrees.length;
    const status = writeStatus(statusFile, previous, run);
    saveArtifact(artifactsDir, 'run-summary.json', status);
    log(`\nKẾT QUẢ: ${result} | nguồn ok: ${run.sources.filter(s => s.ok).length}/${run.sources.length} | đã nhập: ${run.documentsAdded.length} | chờ rà soát: ${run.documentsPendingReview.length} | ngoài phạm vi: ${run.ignoredOutOfScope.length} | đã có: ${run.alreadyInCatalog.length}`);
    return { status, exitCode: result === 'failed' ? 1 : result === 'review_required' ? 2 : 0 };
  };

  log(`Quét ${source.SOURCE_ID} từ ${windowStart} đến ${today}. Danh mục hiện có ${catalog.decrees.length} văn bản.`);
  let scan;
  try {
    scan = await source.scan({ windowStart, fetchImpl, retries, backoffMs });
  } catch (error) {
    scan = { sourceId: source.SOURCE_ID, checkedAt: now(), ok: false, listings: [], documents: [], error: error.message };
  }
  run.sources.push({ sourceId: scan.sourceId, checkedAt: scan.checkedAt, ok: scan.ok, listings: scan.listings, documentsInWindow: scan.documents.length, error: scan.error });
  saveArtifact(artifactsDir, 'source-scan.json', scan);
  for (const listing of scan.listings) log(`  - ${listing.key}: parse ${listing.parsed} dòng, ${listing.inWindow ?? 0} trong khoảng quét, cũ nhất ${listing.oldest ?? '—'}${listing.error ? `, LỖI: ${listing.error}` : ''}`);
  if (!scan.ok) {
    run.errors.push(`Nguồn bắt buộc ${scan.sourceId} lỗi: ${scan.error}`);
    return finish('failed');
  }

  const pending = (candidate, reason, extra = {}) => {
    run.documentsPendingReview.push({
      officialNumber: candidate.officialNumber, title: candidate.title, issuedDate: candidate.issuedDate,
      officialDetailUrl: candidate.officialDetailUrl, sourceLocator: candidate.sourceLocator,
      firstSeenAt: candidate.firstSeenAt || attemptAt, reason, ...extra,
    });
    log(`  ⚠ Chờ rà soát ${candidate.officialNumber}: ${reason}`);
  };

  // Hồ sơ chờ rà soát từ lần trước được xử lý lại mỗi lần chạy cho đến khi nhập xong hoặc chủ dự án
  // đưa số hiệu vào relevance.json → dismissedNumbers. Không để văn bản "rơi" khỏi khoảng quét.
  const dismissed = new Set((relevance.dismissedNumbers || []).map(numberKey));
  const queue = new Map(scan.documents.map(doc => [numberKey(doc.officialNumber), doc]));
  for (const carried of previous?.documentsPendingReview || []) {
    const key = numberKey(carried.officialNumber || '');
    if (key && !queue.has(key) && carried.officialDetailUrl) queue.set(key, { ...carried, carriedOver: true });
  }

  let failedHard = false;
  for (const candidate of queue.values()) {
    if (isKnown(catalog, candidate.officialNumber)) { run.alreadyInCatalog.push(candidate.officialNumber); continue; }
    if (dismissed.has(numberKey(candidate.officialNumber))) { run.ignoredOutOfScope.push(candidate.officialNumber); continue; }
    const firstPass = classifyRelevance({ title: candidate.title }, relevance);
    // Văn bản sửa đổi/bãi bỏ một văn bản đang có trong thư viện luôn phải được người rà soát,
    // kể cả khi trích yếu chỉ nêu số hiệu mà không có từ khóa thuế/kế toán.
    const touchedKnown = [...String(candidate.title).matchAll(/\d+[a-zA-Z]?\/\d{4}\/[A-ZĐa-zđ0-9-]+/g)].map(m => m[0]).filter(n => isKnown(catalog, n));
    if (firstPass.decision === 'ignore' && !touchedKnown.length) { run.ignoredOutOfScope.push(candidate.officialNumber); continue; }
    if (firstPass.decision === 'ignore' && touchedKnown.length) {
      pending(candidate, `Trích yếu sửa đổi/liên quan văn bản đang có trong thư viện (${touchedKnown.join(', ')}) — cần rà soát phạm vi và cập nhật trạng thái hiệu lực`);
      continue;
    }
    const caseDir = path.join(artifactsDir, 'candidates', candidate.officialNumber.replace(/[^\p{L}\p{N}]+/gu, '_'));
    saveArtifact(caseDir, 'listing.json', candidate);

    let metadata;
    try {
      metadata = await source.fetchVerifiedMetadata(candidate, { fetchImpl, retries, backoffMs });
    } catch (error) {
      pending(candidate, `Không xác minh được trang chi tiết: ${error.message}`);
      continue;
    }
    saveArtifact(caseDir, 'metadata.json', metadata);
    if (metadata.problems.length) { pending(candidate, metadata.problems.join('; ')); continue; }
    const relevanceCheck = classifyRelevance({ title: metadata.title, issuer: metadata.issuer }, relevance);
    if (relevanceCheck.decision !== 'include') { pending(candidate, relevanceCheck.reason || 'Phạm vi áp dụng chưa xác định'); continue; }
    const idInfo = proposeId(catalog, metadata.officialNumber);
    if (idInfo.error) { pending(candidate, idInfo.error); continue; }

    const files = [];
    let problem = null;
    for (const [index, url] of metadata.officialPdfUrls.entries()) {
      try {
        assertOfficialUrl(url);
        const original = await downloadOfficialPdf(url, { fetchImpl, retries, backoffMs });
        saveArtifact(caseDir, `file-${index + 1}.pdf`, original.buffer);
        const extraction = await extract(original.buffer);
        saveArtifact(caseDir, `file-${index + 1}.pages.json`, extraction);
        const quality = assessCompleteness(extraction, { officialNumber: metadata.officialNumber, isMainDocument: index === 0 });
        saveArtifact(caseDir, `file-${index + 1}.quality.json`, quality);
        if (!quality.publishable) { problem = `Tệp ${index + 1} (${url}): ${quality.problems.join('; ')}`; break; }
        files.push({ ...original, url, pages: extraction.pages, quality, fileName: `${idInfo.id}-${index + 1}.pdf` });
      } catch (error) {
        problem = `Tệp ${index + 1} (${url}): ${error.message}`;
        break;
      }
    }
    if (problem) { pending(candidate, problem); continue; }

    if (!driveConfig?.configured) {
      pending(candidate, `Đã đạt kiểm tra PDF/toàn văn nhưng chưa thể lưu Drive — thiếu secret ${(driveConfig?.missing || []).join(', ')}`);
      continue;
    }
    try {
      for (const file of files) file.drive = await mirror(file, driveConfig, { fetchImpl });
    } catch (error) {
      run.errors.push(`Lưu Drive thất bại cho ${metadata.officialNumber}: ${error.message}`);
      pending(candidate, `Lưu Drive thất bại: ${error.message}`);
      failedHard = true;
      continue;
    }

    const record = mergeVerifiedDocument(catalog, { metadata, idInfo, files, acquiredAt: attemptAt, today });
    run.documentsAdded.push({ id: record.id, officialNumber: record.decree_number, title: record.title, pages: files.map(f => f.quality.pageCount), driveIds: files.map(f => f.drive.driveId) });
    log(`  ✅ Đã nhập ${record.decree_number} (${record.id}) — ${files.length} tệp PDF, Drive đã xác nhận`);
  }

  generateInitialDecrees(root);
  if (failedHard) return finish('failed');
  if (run.documentsPendingReview.length) return finish('review_required');
  return finish(run.documentsAdded.length ? 'updated' : 'no_changes');
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isMain) {
  const arg = name => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : undefined; };
  const root = path.resolve(arg('--root') || path.join(path.dirname(fileURLToPath(import.meta.url)), '../..'));
  const artifactsDir = path.resolve(arg('--artifacts') || path.join(root, 'crawl-artifacts'));
  runCrawler({ root, artifactsDir })
    .then(({ exitCode }) => { process.exitCode = exitCode; })
    .catch(error => { console.error('LỖI HỆ THỐNG:', error); process.exitCode = 1; });
}
