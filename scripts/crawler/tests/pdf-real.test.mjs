// Kiểm thử trích chữ thật bằng pdfjs-dist trên PDF gốc đã có trong repo (bỏ qua nếu chưa npm ci).
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { crawlerDir } from './helpers.mjs';
import { extractPdfPages, assessCompleteness, verifyPdfBuffer } from '../lib/pdf.mjs';

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
