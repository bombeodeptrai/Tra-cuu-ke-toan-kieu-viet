import test from 'node:test';
import assert from 'node:assert/strict';
import { fixture, fakeFetch, fakePdf } from './helpers.mjs';
import { parseListing, parseDetail, checkCoverage, ParseError } from '../lib/vanban-chinhphu.mjs';
import { numberKey, classifyNumber, parseVnDate } from '../lib/normalize.mjs';
import { fetchWithRetry, HttpError } from '../lib/http.mjs';
import { verifyPdfBuffer, assessCompleteness, PdfError } from '../lib/pdf.mjs';
import { classifyRelevance, loadRelevance } from '../lib/relevance.mjs';

test('danh sách: đọc đúng số hiệu, ngày, docid, tệp đính kèm từ snapshot thật', () => {
  const rows = parseListing(fixture('vanban-listing-thong-tu.html'));
  assert.deepEqual(rows.map(r => [r.officialNumber, r.issuedDate, r.sourceLocator]), [
    ['95/2026/TT-BGDĐT', '2026-11-11', 'docid=220267'],
    ['167/2026/TT-BTC', '2026-11-10', 'docid=220244'],
    ['83/2026/TT-BXD', '2026-11-09', 'docid=220239'],
    ['166/2026/TT-BTC', '2026-11-02', 'docid=220191'],
  ]);
  assert.equal(rows[2].listingFiles.length, 3);
  assert.equal(rows[3].officialDetailUrl, 'https://vanban.chinhphu.vn/?pageid=27160&docid=220191&classid=1&typegroupid=6');
  assert.match(rows[3].title, /^Bãi bỏ một số thông tư liên tịch/);
});

test('chi tiết: đọc đủ trường và nhiều tệp đính kèm', () => {
  const detail = parseDetail(fixture('vanban-detail-166-2026-tt-btc.html'));
  assert.equal(detail.officialNumber, '166/2026/TT-BTC');
  assert.equal(detail.issuedDate, '2026-11-02');
  assert.equal(detail.effectiveDate, '2026-12-20');
  assert.equal(detail.issuer, 'Bộ Tài chính');
  assert.equal(detail.documentType, 'Thông tư');
  assert.deepEqual(detail.files, ['https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/11/166-btc.signed.pdf']);
  assert.equal(parseDetail(fixture('vanban-detail-83-2026-tt-bxd.html')).files.length, 3);
});

test('HTML đổi cấu trúc hoặc rỗng bất thường thì báo lỗi, không trả danh sách rỗng', () => {
  const html = fixture('vanban-listing-thong-tu.html');
  assert.throws(() => parseListing(html.replace('table search-result', 'table results-v2')), ParseError);
  assert.throws(() => parseListing('<table class="table search-result"><tr><th>Số ký hiệu</th></tr></table>'), ParseError);
  assert.throws(() => parseListing(html.replaceAll('<span class="substract">', '<span class="summary">')), ParseError);
  assert.throws(() => parseDetail(fixture('vanban-detail-166-2026-tt-btc.html').replace('Cơ quan ban hành', 'Nơi ban hành')), ParseError);
});

test('dương tính giả: số hiệu chỉ nằm trong ô tìm kiếm/chuỗi truy vấn không được coi là văn bản', () => {
  const searchPage = '<html><input value="170/2026/TT-BTC"><p>Kết quả cho 170/2026/TT-BTC</p><table class="table search-result"><tr><th>Số ký hiệu</th></tr></table></html>';
  assert.throws(() => parseListing(searchPage), ParseError);
});

test('chuẩn hóa số hiệu để so trùng nhưng giữ cách ghi chính thức', () => {
  assert.equal(numberKey('166/2026/TT-BTC'), numberKey(' 166/2026/TTBTC '));
  assert.equal(numberKey('70/2025/NĐ-CP'), numberKey('70/2025/ND-CP'));
  assert.notEqual(numberKey('166/2026/TT-BTC'), numberKey('167/2026/TT-BTC'));
  assert.deepEqual(classifyNumber('407/2026/NĐ-CP'), { id: 'nd-407-2026', category: 'nghi-dinh', year: 2026 });
  assert.equal(classifyNumber('166/2026/TT-BTC').id, 'tt-166-2026-tt-btc');
  assert.equal(classifyNumber('24/2026/QH16').id, 'luat-24-2026-qh16');
  assert.equal(classifyNumber('361/NQ-CP'), null);
  assert.equal(parseVnDate('31-02-2026'), null);
  assert.equal(parseVnDate('02/11/2026'), '2026-11-02');
});

test('độ phủ: trang 1 phải lùi quá ngày bắt đầu khoảng quét', () => {
  const rows = parseListing(fixture('vanban-listing-thong-tu.html'));
  assert.equal(checkCoverage(rows, '2026-11-05').complete, true);
  assert.equal(checkCoverage(rows, '2026-11-02').complete, false);
});

test('HTTP: thử lại 503/429, dừng ngay với 403, chặn tên miền ngoài danh sách', async () => {
  let n = 0;
  const flaky = fakeFetch(() => (++n < 3 ? { status: 503 } : { body: 'ok' }));
  const res = await fetchWithRetry('https://vanban.chinhphu.vn/x', { fetchImpl: flaky, backoffMs: 1 });
  assert.equal(res.body.toString(), 'ok');
  assert.equal(flaky.calls.length, 3);
  const forbidden = fakeFetch(() => ({ status: 403 }));
  await assert.rejects(fetchWithRetry('https://vanban.chinhphu.vn/x', { fetchImpl: forbidden, backoffMs: 1 }), e => e instanceof HttpError && e.status === 403);
  assert.equal(forbidden.calls.length, 1);
  await assert.rejects(fetchWithRetry('https://vanban.chinhphu.vn/x', { fetchImpl: fakeFetch(() => ({ status: 429 })), retries: 2, backoffMs: 1 }), /429/);
  await assert.rejects(fetchWithRetry('https://example.com/x', { fetchImpl: fakeFetch(() => ({ body: 'x' })) }), /ngoài danh sách/);
  await assert.rejects(fetchWithRetry('https://vanban.chinhphu.vn/x', { fetchImpl: fakeFetch(() => new Error('ECONNRESET')), retries: 1, backoffMs: 1 }), /ECONNRESET/);
});

test('PDF: chặn HTML giả dạng, tệp cụt, tệp quá nhỏ; nhận PDF hợp lệ', () => {
  assert.throws(() => verifyPdfBuffer(Buffer.from('<html>' + 'x'.repeat(5000)), { contentType: 'text/html' }), PdfError);
  assert.throws(() => verifyPdfBuffer(Buffer.from('<html>' + 'x'.repeat(5000))), /%PDF-/);
  assert.throws(() => verifyPdfBuffer(fakePdf().subarray(0, 3000)), /%%EOF/);
  assert.throws(() => verifyPdfBuffer(Buffer.from('%PDF-1.4 %%EOF')), /quá nhỏ/);
  const ok = verifyPdfBuffer(fakePdf(), { contentType: 'application/pdf' });
  assert.match(ok.sha256, /^[0-9a-f]{64}$/);
});

test('cổng toàn văn: thiếu trang, trang rỗng (scan), thiếu số hiệu đều không được công bố', () => {
  const page = (n, text) => ({ page: n, text });
  const good = 'BỘ TÀI CHÍNH Số: 170/2026/TT-BTC THÔNG TƯ hướng dẫn về hóa đơn điện tử ' + 'nội dung '.repeat(10);
  assert.equal(assessCompleteness({ pageCount: 2, pages: [page(1, good), page(2, 'Điều 2. Hiệu lực thi hành '.repeat(3))] }, { officialNumber: '170/2026/TT-BTC' }).publishable, true);
  assert.match(assessCompleteness({ pageCount: 3, pages: [page(1, good), page(2, good)] }, { officialNumber: '170/2026/TT-BTC' }).problems.join(), /2\/3 trang/);
  assert.deepEqual(assessCompleteness({ pageCount: 2, pages: [page(1, good), page(2, '  ')] }, { officialNumber: '170/2026/TT-BTC' }).emptyPages, [2]);
  assert.match(assessCompleteness({ pageCount: 1, pages: [page(1, 'Số: /2026/TT-BTC ' + 'chữ '.repeat(20))] }, { officialNumber: '170/2026/TT-BTC' }).problems.join(), /Không thấy số hiệu/);
});

test('phạm vi: chỉ đưa vào pipeline văn bản thuế/kế toán; trích yếu mơ hồ phải rà soát', () => {
  const config = loadRelevance();
  assert.equal(classifyRelevance({ title: 'Quy định tiêu chí chất lượng bảo trì kết cấu hạ tầng đường sắt' }, config).decision, 'ignore');
  assert.equal(classifyRelevance({ title: 'Hướng dẫn về hóa đơn điện tử', issuer: 'Bộ Tài chính' }, config).decision, 'include');
  assert.equal(classifyRelevance({ title: 'Bãi bỏ thông tư về lệ phí trước bạ', issuer: 'Bộ Tài chính' }, config).decision, 'review');
  assert.equal(classifyRelevance({ title: 'Hướng dẫn thuế tài nguyên', issuer: 'UBND tỉnh Gia Lai' }, config).decision, 'review');
});
