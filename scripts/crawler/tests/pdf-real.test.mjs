// Kiểm thử trích chữ thật bằng pdfjs-dist trên PDF gốc đã có trong repo (bỏ qua nếu chưa npm ci).
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { crawlerDir } from './helpers.mjs';
import { extractPdfPages, ocrSparsePdfPages, assessCompleteness, verifyPdfBuffer } from '../lib/pdf.mjs';

test('OCR bổ sung trang scan nhưng giữ trang confidence thấp ở trạng thái cần rà soát', async () => {
  let terminated = false;
  let destroyed = false;
  const extraction = { pageCount: 2, pages: [{ page: 1, text: 'nội dung đã trích xuất đầy đủ và có thể sử dụng ngay' }, { page: 2, text: '' }] };
  const result = await ocrSparsePdfPages(Buffer.from('pdf'), extraction, {
    getDocumentImpl: () => ({ promise: Promise.resolve({ getPage: async () => ({
      getViewport: () => ({ width: 1, height: 1 }),
      render: () => ({ promise: Promise.resolve() }),
      cleanup() {},
    }) }), destroy: async () => { destroyed = true; } }),
    createCanvasImpl: () => ({ width: 1, height: 1, getContext: () => ({}), toBuffer: () => Buffer.from('png') }),
    createWorkerImpl: async () => ({ recognize: async () => ({ data: { text: 'OCR text', confidence: 79 } }), terminate: async () => { terminated = true; } }),
  });

  assert.equal(result.pages[1].method, 'ocr');
  assert.equal(result.pages[1].ocrConfidence, 79);
  assert.equal(terminated, true);
  assert.equal(destroyed, true);
  const quality = assessCompleteness(result);
  assert.equal(quality.publishable, false);
  assert.deepEqual(quality.lowConfidencePages, [2]);
});

test('OCR đạt ngưỡng: được công bố với ocr-review, nêu trang confidence thấp', () => {
  const pages = Array.from({ length: 10 }, (_, i) => ({
    page: i + 1, method: 'ocr', ocrConfidence: i === 9 ? 62 : 91,
    text: (i === 0 ? 'CHÍNH PHỦ Số: 412/2026/NĐ-CP NGHỊ ĐỊNH ' : '') + 'nội dung điều khoản được nhận dạng bằng OCR '.repeat(2),
  }));
  const quality = assessCompleteness({ pageCount: 10, pages }, { officialNumber: '412/2026/NĐ-CP' });
  assert.equal(quality.publishable, true);
  assert.equal(quality.textStatus, 'ocr-review');
  assert.deepEqual(quality.lowConfidencePages, [10]);
  assert.match(quality.warnings.join(), /10\/10 trang lấy chữ bằng OCR/);
});

test('OCR kém trên diện rộng thì không tự công bố', () => {
  const pages = Array.from({ length: 4 }, (_, i) => ({ page: i + 1, method: 'ocr', ocrConfidence: i < 2 ? 55 : 90, text: 'Số: 412/2026/NĐ-CP chữ OCR '.repeat(3) }));
  const quality = assessCompleteness({ pageCount: 4, pages }, { officialNumber: '412/2026/NĐ-CP' });
  assert.equal(quality.publishable, false);
  assert.match(quality.problems.join(), /2\/4 trang dưới 80%/);
});

test('Số hiệu vẽ dạng hình: chấp nhận khi OCR trang 1 thấy số hiệu', () => {
  const pages = [{ page: 1, text: 'CHÍNH PHỦ Số: /2026/NĐ-CP NGHỊ ĐỊNH quy định mức lương tối thiểu' }];
  assert.equal(assessCompleteness({ pageCount: 1, pages }, { officialNumber: '399/2026/NĐ-CP' }).publishable, false);
  assert.equal(assessCompleteness({ pageCount: 1, pages }, { officialNumber: '399/2026/NĐ-CP', numberCheckText: 'Số: 399/2026/NĐ-CP' }).publishable, true);
});

const root = path.resolve(crawlerDir, '../..');
let pdfjsAvailable = true;
try { await import('pdfjs-dist/legacy/build/pdf.mjs'); } catch { pdfjsAvailable = false; }

test('NQ 43/2026/NQ-CP: trích đủ 2/2 trang và qua cổng toàn văn', { skip: !pdfjsAvailable && 'chưa cài pdfjs-dist (chạy npm ci)' }, async () => {
  const buffer = fs.readFileSync(path.join(root, 'public/data/accounting-laws/nq-43-2026-nq-cp-1.pdf'));
  verifyPdfBuffer(buffer);
  const extraction = await extractPdfPages(buffer);
  assert.equal(extraction.pageCount, 2);
  const quality = assessCompleteness(extraction, { officialNumber: '43/2026/NQ-CP' });
  assert.deepEqual(quality.problems, []);
});

test('NĐ 399/2026/NĐ-CP: số hiệu trên PDF ký số vẽ dạng hình → phải chuyển rà soát, không tự công bố', { skip: !pdfjsAvailable && 'chưa cài pdfjs-dist (chạy npm ci)' }, async () => {
  const buffer = fs.readFileSync(path.join(root, 'public/data/accounting-laws/nd-399-2026-1.pdf'));
  const extraction = await extractPdfPages(buffer);
  assert.equal(extraction.pageCount, 4);
  const quality = assessCompleteness(extraction, { officialNumber: '399/2026/NĐ-CP' });
  assert.equal(quality.publishable, false);
  assert.match(quality.problems.join(), /Không thấy số hiệu/);
});
