// Kiểm thử luồng end-to-end offline: adapter thật + fetch giả phục vụ snapshot, PDF/OCR/Drive giả lập.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fixture, fakeFetch, fakePdf, makeTempRepo } from './helpers.mjs';
import { runCrawler, computeWindowStart } from '../legal-crawler.mjs';
import { verifyCrawlOutput } from '../verify-crawl-output.mjs';
import { md5 } from '../lib/pdf.mjs';

const TODAY = '2026-11-16';
const SYNTH_NUMBER = '170/2026/TT-BTC'; // văn bản giả lập cho kiểm thử, KHÔNG phải văn bản thật
const SYNTH_TITLE = 'Hướng dẫn về hóa đơn điện tử và chứng từ điện tử (dữ liệu kiểm thử)';

/** Danh sách thật, thay dòng 167/2026/TT-BTC bằng một văn bản giả lập thuộc phạm vi thuế. */
function listingWithSynthetic() {
  return fixture('vanban-listing-thong-tu.html')
    .replaceAll('167/2026/TT-BTC', SYNTH_NUMBER)
    .replace('Quy định miễn phí thăm quan vào Ngày Văn hóa Việt Nam', SYNTH_TITLE)
    .replaceAll('167-btc.signed.pdf', '170-btc.signed.pdf');
}
function detailSynthetic({ number = SYNTH_NUMBER, issued = '10-11-2026' } = {}) {
  return fixture('vanban-detail-166-2026-tt-btc.html')
    .replace('166/2026/TT-BTC', number)
    .replace('02-11-2026', issued)
    .replace('Bãi bỏ một số thông tư liên tịch do Bộ trưởng Bộ Tài chính liên tịch ban hành liên quan đến lĩnh vực tài chính', SYNTH_TITLE)
    .replaceAll('166-btc.signed.pdf', '170-btc.signed.pdf');
}
const PDF = fakePdf('170');
const goodPages = { pageCount: 2, pages: [
  { page: 1, text: `BỘ TÀI CHÍNH\nSố: ${SYNTH_NUMBER}\nTHÔNG TƯ\n${SYNTH_TITLE}\n` + 'Căn cứ Luật Quản lý thuế '.repeat(3) },
  { page: 2, text: 'Điều 2. Hiệu lực thi hành. Thông tư này có hiệu lực từ ngày 20 tháng 12 năm 2026.' },
] };

function routes({ listing = listingWithSynthetic(), detail = detailSynthetic(), failListing = false } = {}) {
  return url => {
    if (url.includes('/he-thong-van-ban?')) return failListing ? { status: 503 } : { body: listing };
    if (url.includes('docid=220244')) return { body: detail };
    if (url.startsWith('https://vanban.chinhphu.vn/?')) return { body: fixture('vanban-detail-166-2026-tt-btc.html') };
    if (url.endsWith('170-btc.signed.pdf')) return { body: PDF, contentType: 'application/pdf' };
    return undefined;
  };
}

const driveOk = { configured: true, folderId: 'folder-test' };
const missingPage = async () => ({ pageCount: 3, pages: goodPages.pages }); // thiếu 1 trang → chờ rà soát
const fakeMirror = async file => ({ driveId: `drive-${file.fileName}`, driveUrl: `https://drive.google.com/file/d/drive-${file.fileName}/view?usp=drivesdk`, driveReadbackBytes: file.buffer.length, driveHashVerified: md5(file.buffer) === file.md5 });

function setup({ lastSuccess = '2026-11-10T00:00:00.000Z' } = {}) {
  const root = makeTempRepo();
  if (lastSuccess) {
    fs.writeFileSync(path.join(root, 'public/data/legal-crawl-status.json'), JSON.stringify({ schemaVersion: 1, lastAttemptAt: lastSuccess, lastSuccessfulScanAt: lastSuccess, result: 'no_changes', sources: [{ ok: true }] }));
  }
  return { root, artifactsDir: path.join(root, 'crawl-artifacts') };
}
const run = (env, opts) => runCrawler({ ...env, today: TODAY, now: () => '2026-11-10T00:00:00.000Z', retries: 1, backoffMs: 1, log: () => {}, extract: async () => goodPages, ocr: async (buffer, extraction) => extraction, driveConfig: driveOk, mirror: fakeMirror, ...opts });
const readJson = (root, rel) => JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));

test('khoảng quét: lùi 3 ngày từ lần quét thành công gần nhất; lần đầu 14 ngày', () => {
  assert.equal(computeWindowStart({ lastSuccessfulScanAt: '2026-11-10T00:00:00Z' }, TODAY), '2026-11-07');
  assert.equal(computeWindowStart(null, TODAY), '2026-11-02');
});

test('updated: văn bản đạt mọi cổng được lưu website + Drive, đồng bộ initial-decrees, qua gate', async () => {
  const env = setup();
  const { status, exitCode } = await run(env, { fetchImpl: fakeFetch(routes()) });
  assert.equal(status.result, 'updated');
  assert.equal(exitCode, 0);
  const decrees = readJson(env.root, 'public/data/decrees.json');
  const added = decrees.find(d => d.decree_number === SYNTH_NUMBER);
  assert.equal(added.id, 'tt-170-2026-tt-btc');
  assert.equal(added.issued_date, '2026-11-10');
  assert.equal(added.effective_date, '2026-12-20');
  assert.equal(added.status, 'upcoming');
  assert.equal(added.source_url, 'https://vanban.chinhphu.vn/?pageid=27160&docid=220244&classid=1&typegroupid=6');
  assert.ok(fs.readFileSync(path.join(env.root, 'public', added.pdf_url)).equals(PDF));
  const pages = readJson(env.root, 'public/data/accounting-laws/tt-170-2026-tt-btc-1.json').pages;
  assert.equal(pages.length, 2);
  assert.match(fs.readFileSync(path.join(env.root, 'public', added.content_url), 'utf8'), /### Trang 2/);
  const manifest = readJson(env.root, 'public/data/accounting-laws/manifest.json');
  assert.equal(manifest.documents.at(-1).files[0].driveHashVerified, true);
  const ts = fs.readFileSync(path.join(env.root, 'src/data/initial-decrees.ts'), 'utf8');
  assert.deepEqual(JSON.parse(ts.slice(ts.indexOf('= [') + 2, ts.lastIndexOf(']') + 1)), decrees);
  assert.ok(ts.endsWith('];\r\n'), 'giữ nguyên phần cuối tệp initial-decrees.ts');
  assert.deepEqual(verifyCrawlOutput(env.root), []);
  assert.deepEqual(status.documentsAdded.map(d => d.officialNumber), [SYNTH_NUMBER]);
  assert.ok(status.ignoredOutOfScope.includes('95/2026/TT-BGDĐT'));

  // Idempotence: chạy lại không thêm bản ghi, không đổi dữ liệu danh mục.
  const before = ['public/data/decrees.json', 'src/data/initial-decrees.ts', 'public/data/accounting-laws/manifest.json'].map(rel => fs.readFileSync(path.join(env.root, rel), 'utf8'));
  const second = await run(env, { fetchImpl: fakeFetch(routes()) });
  assert.equal(second.status.result, 'no_changes');
  assert.ok(second.status.alreadyInCatalog.includes(SYNTH_NUMBER));
  const after = ['public/data/decrees.json', 'src/data/initial-decrees.ts', 'public/data/accounting-laws/manifest.json'].map(rel => fs.readFileSync(path.join(env.root, rel), 'utf8'));
  assert.deepEqual(after, before);
  assert.deepEqual(verifyCrawlOutput(env.root), []);
});

test('no_changes: chỉ khi mọi danh sách parse được và phủ đủ khoảng quét', async () => {
  const env = setup();
  const { status, exitCode } = await run(env, { fetchImpl: fakeFetch(routes({ listing: fixture('vanban-listing-thong-tu.html') })) });
  assert.equal(status.result, 'no_changes');
  assert.equal(exitCode, 0);
  assert.equal(status.sources[0].listings.length, 5);
  assert.ok(status.sources[0].listings.every(l => l.coverageComplete && l.parsed === 4));
});

test('failed: nguồn lỗi (503) → không ghi danh mục, giữ mốc quét thành công cũ, mã thoát 1', async () => {
  const env = setup();
  const before = fs.readFileSync(path.join(env.root, 'public/data/decrees.json'), 'utf8');
  const { status, exitCode } = await run(env, { fetchImpl: fakeFetch(routes({ failListing: true })) });
  assert.equal(status.result, 'failed');
  assert.equal(exitCode, 1);
  assert.equal(status.lastSuccessfulScanAt, '2026-11-10T00:00:00.000Z');
  assert.equal(fs.readFileSync(path.join(env.root, 'public/data/decrees.json'), 'utf8'), before);
  assert.ok(fs.existsSync(path.join(env.artifactsDir, 'source-scan.json')));
});

test('failed: HTML đổi cấu trúc không bị coi là "không có văn bản mới"', async () => {
  const env = setup();
  const broken = fixture('vanban-listing-thong-tu.html').replace('table search-result', 'table new-layout');
  const { status } = await run(env, { fetchImpl: fakeFetch(routes({ listing: broken })) });
  assert.equal(status.result, 'failed');
  assert.match(status.errors.join(), /cấu trúc trang đã đổi/);
});

test('failed: trang 1 không phủ hết khoảng quét (quá lâu chưa quét thành công)', async () => {
  const env = setup({ lastSuccess: '2026-10-01T00:00:00.000Z' });
  const { status } = await run(env, { fetchImpl: fakeFetch(routes()) });
  assert.equal(status.result, 'failed');
  assert.match(status.errors.join(), /chưa phủ hết/);
});

test('thiếu secret Drive: vẫn đăng website (drivePending, cảnh báo), lần sau có secret thì tự bù Drive', async () => {
  const env = setup();
  const noDrive = { configured: false, missing: ['GDRIVE_SERVICE_ACCOUNT_JSON', 'GDRIVE_FOLDER_ID'] };
  const first = await run(env, { fetchImpl: fakeFetch(routes()), driveConfig: noDrive });
  assert.equal(first.status.result, 'updated');
  assert.equal(first.exitCode, 0);
  assert.equal(first.status.drivePending.length, 1);
  assert.match(first.status.warnings.join(), /GDRIVE_SERVICE_ACCOUNT_JSON, GDRIVE_FOLDER_ID/);
  let decree = readJson(env.root, 'public/data/decrees.json').find(d => d.decree_number === SYNTH_NUMBER);
  assert.equal(decree.pdf_drive_id, undefined);
  assert.match(decree.text_status_note, /Google Drive: đang chờ/);
  let file = readJson(env.root, 'public/data/accounting-laws/manifest.json').documents.at(-1).files[0];
  assert.equal(file.drivePending, true);
  assert.equal(file.driveUrl, null);
  assert.deepEqual(readJson(env.root, 'scripts/accounting-drive-files.json'), []);
  assert.deepEqual(verifyCrawlOutput(env.root), []);

  const second = await run(env, { now: () => '2026-11-11T00:00:00.000Z', fetchImpl: fakeFetch(routes()) });
  assert.equal(second.status.result, 'no_changes');
  assert.deepEqual(second.status.drivePending, []);
  assert.deepEqual(second.status.warnings, []);
  decree = readJson(env.root, 'public/data/decrees.json').find(d => d.decree_number === SYNTH_NUMBER);
  assert.equal(decree.pdf_drive_id, 'drive-tt-170-2026-tt-btc-1.pdf');
  assert.doesNotMatch(decree.text_status_note, /đang chờ/);
  file = readJson(env.root, 'public/data/accounting-laws/manifest.json').documents.at(-1).files[0];
  assert.equal(file.drivePending, undefined);
  assert.equal(file.driveHashVerified, true);
  assert.equal(readJson(env.root, 'scripts/accounting-drive-files.json').length, 1);
  assert.deepEqual(verifyCrawlOutput(env.root), []);
});

test('PDF scan: OCR đạt ngưỡng → tự nhập với ocr-review, đánh dấu trang confidence thấp', async () => {
  const env = setup();
  // 5 trang scan; trang 5 OCR 71% (dưới 80% nhưng chỉ 1/5 trang → vẫn đạt ngưỡng tự công bố)
  const scanned = { pageCount: 5, pages: [1, 2, 3, 4, 5].map(page => ({ page, text: '' })) };
  const fakeOcr = async () => ({ pageCount: 5, pages: [1, 2, 3, 4, 5].map(page => ({
    page, method: 'ocr', ocrConfidence: page === 5 ? 71 : 93,
    text: page === 1 ? goodPages.pages[0].text : `Điều ${page}. Nội dung điều khoản nhận dạng bằng OCR tiếng Việt.`,
  })) });
  const { status, exitCode } = await run(env, { fetchImpl: fakeFetch(routes()), extract: async () => scanned, ocr: fakeOcr });
  assert.equal(status.result, 'updated');
  assert.equal(exitCode, 0);
  const decree = readJson(env.root, 'public/data/decrees.json').find(d => d.decree_number === SYNTH_NUMBER);
  assert.equal(decree.text_status, 'ocr-review');
  assert.match(decree.text_status_note, /OCR tiếng Việt/);
  const md = fs.readFileSync(path.join(env.root, 'public', decree.content_url), 'utf8');
  assert.match(md, /OCR độ tin cậy thấp \(71%\)/);
  const pages = readJson(env.root, 'public/data/accounting-laws/tt-170-2026-tt-btc-1.json').pages;
  assert.deepEqual(pages.map(p => p.ocrConfidence), [93, 93, 93, 93, 71]);
  assert.ok(pages.every(p => p.method === 'ocr'));
  assert.deepEqual(readJson(env.root, 'public/data/accounting-laws/manifest.json').documents.at(-1).files[0].lowConfidencePages, [5]);
  assert.deepEqual(verifyCrawlOutput(env.root), []);
});

test('Số hiệu vẽ dạng hình trên PDF ký số: tự OCR trang 1 để xác nhận rồi nhập', async () => {
  const env = setup();
  const noNumber = { pageCount: 2, pages: [{ page: 1, text: goodPages.pages[0].text.replace(SYNTH_NUMBER, '/2026/TT-BTC') }, goodPages.pages[1]] };
  const fakeOcr = async (buffer, extraction, opts = {}) => (opts.minChars === Number.POSITIVE_INFINITY
    ? { pageCount: 1, pages: [{ page: 1, text: `Số: ${SYNTH_NUMBER}`, method: 'ocr', ocrConfidence: 90 }] }
    : extraction);
  const { status } = await run(env, { fetchImpl: fakeFetch(routes()), extract: async () => noNumber, ocr: fakeOcr });
  assert.equal(status.result, 'updated');
  assert.match(status.documentsAdded[0].warnings.join(), /xác nhận bằng OCR trang 1/);
  const decree = readJson(env.root, 'public/data/decrees.json').find(d => d.decree_number === SYNTH_NUMBER);
  assert.equal(decree.text_status, 'pdf-text-available');
});

test('failed: tải Drive lỗi → không ghi danh mục', async () => {
  const env = setup();
  const { status } = await run(env, { fetchImpl: fakeFetch(routes()), mirror: async () => { throw new Error('HTTP 403'); } });
  assert.equal(status.result, 'failed');
  assert.equal(readJson(env.root, 'public/data/decrees.json').length, 2);
});

test('review_required: PDF thiếu trang / trang scan rỗng / HTML giả PDF / số hiệu lệch', async () => {
  const cases = [
    { opts: { extract: async () => ({ pageCount: 3, pages: goodPages.pages }) }, reason: /2\/3 trang/ },
    { opts: { extract: async () => ({ pageCount: 2, pages: [goodPages.pages[0], { page: 2, text: '' }] }) }, reason: /OCR/ },
    { opts: { fetchImpl: fakeFetch(url => url.endsWith('.pdf') ? { body: '<html>' + 'x'.repeat(5000), contentType: 'text/html' } : routes()(url)) }, reason: /HTML thay vì PDF/ },
    { opts: { fetchImpl: fakeFetch(routes({ detail: detailSynthetic({ number: '171/2026/TT-BTC' }) })) }, reason: /khác danh sách/ },
    { opts: { fetchImpl: fakeFetch(routes({ detail: detailSynthetic({ issued: '11-11-2026' }) })) }, reason: /Ngày ban hành/ },
  ];
  for (const { opts, reason } of cases) {
    const env = setup();
    const { status, exitCode } = await run(env, { fetchImpl: fakeFetch(routes()), ...opts });
    assert.equal(status.result, 'review_required', String(reason));
    assert.equal(exitCode, 2);
    assert.match(status.documentsPendingReview[0].reason, reason);
    assert.equal(readJson(env.root, 'public/data/decrees.json').length, 2);
  }
});

test('gate: phát hiện bản ghi giữ chỗ, ngày tự gán, trùng số hiệu và trạng thái sai', () => {
  const root = makeTempRepo();
  const decrees = readJson(root, 'public/data/decrees.json');
  decrees.push({ ...decrees[0], id: 'new-123', title: 'Văn bản 99/2025/TT-BTC (Tự động phát hiện)' });
  fs.writeFileSync(path.join(root, 'public/data/decrees.json'), JSON.stringify(decrees));
  fs.writeFileSync(path.join(root, 'public/data/legal-crawl-status.json'), JSON.stringify({ schemaVersion: 1, result: 'no_changes', lastAttemptAt: '2026-11-16T00:00:00Z', sources: [{ ok: false, listings: [] }] }));
  const problems = verifyCrawlOutput(root).join('\n');
  assert.match(problems, /Trùng số hiệu/);
  assert.match(problems, /giữ chỗ/);
  assert.match(problems, /no_changes nhưng có nguồn lỗi/);
});

test('hồ sơ chờ rà soát không bị rơi khi ra khỏi khoảng quét; được xử lý lại khi đã đủ điều kiện', async () => {
  const env = setup();
  const first = await run(env, { fetchImpl: fakeFetch(routes()), extract: missingPage });
  assert.equal(first.status.result, 'review_required');
  // Lần sau: danh sách chỉ còn văn bản ngoài phạm vi (văn bản giả lập đã trôi khỏi trang 1).
  const laterListing = fixture('vanban-listing-thong-tu.html');
  const later = await run(env, { now: () => '2026-11-12T00:00:00.000Z', fetchImpl: fakeFetch(routes({ listing: laterListing })), extract: missingPage });
  assert.equal(later.status.result, 'review_required');
  assert.equal(later.status.documentsPendingReview[0].officialNumber, SYNTH_NUMBER);
  assert.equal(later.status.documentsPendingReview[0].firstSeenAt, '2026-11-10T00:00:00.000Z');
  const fixed = await run(env, { now: () => '2026-11-13T00:00:00.000Z', fetchImpl: fakeFetch(routes({ listing: laterListing })) });
  assert.equal(fixed.status.result, 'updated');
  assert.deepEqual(fixed.status.documentsAdded.map(d => d.officialNumber), [SYNTH_NUMBER]);
  assert.deepEqual(verifyCrawlOutput(env.root), []);
});

test('chủ dự án loại một số hiệu (dismissedNumbers) thì không giữ ở danh sách chờ', async () => {
  const env = setup();
  await run(env, { fetchImpl: fakeFetch(routes()), extract: missingPage });
  const relevancePath = path.join(env.root, 'scripts/crawler/relevance.json');
  const config = JSON.parse(fs.readFileSync(relevancePath, 'utf8'));
  config.dismissedNumbers = [SYNTH_NUMBER];
  fs.writeFileSync(relevancePath, JSON.stringify(config));
  const { status } = await run(env, { fetchImpl: fakeFetch(routes()), extract: missingPage });
  assert.equal(status.result, 'no_changes');
  assert.ok(status.ignoredOutOfScope.includes(SYNTH_NUMBER));
  assert.equal(status.documentsPendingReview.length, 0);
});

test('văn bản sửa đổi một văn bản đang có trong thư viện → luôn chờ rà soát dù trích yếu không có từ khóa', async () => {
  const env = setup();
  const listing = fixture('vanban-listing-thong-tu.html')
    .replace(/Sửa đổi, bổ sung một số điều của các thông tư của Bộ Giáo dục[^<]*/, 'Sửa đổi, bổ sung một số điều của Nghị định số 70/2025/NĐ-CP ngày 20 tháng 3 năm 2025');
  const { status } = await run(env, { fetchImpl: fakeFetch(routes({ listing })) });
  assert.equal(status.result, 'review_required');
  const pending = status.documentsPendingReview.find(d => d.officialNumber === '95/2026/TT-BGDĐT');
  assert.match(pending.reason, /70\/2025\/NĐ-CP/);
});
