#!/usr/bin/env node
// Cổng kiểm tra dữ liệu do crawler ghi và tệp trạng thái quét. Gọi độc lập hoặc từ scripts/verify-audit-assets.mjs.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { numberKey } from './lib/normalize.mjs';
import { RESULTS } from './lib/status.mjs';

const PLACEHOLDERS = [/Tự động phát hiện/i, /chờ đồng bộ/i, /Nội dung đang chờ/i];
const BANNED = new RegExp(['thuvienphapluat', 'vn'].join('\\.'), 'i'); // ghép chuỗi để chính tệp này không tự khớp

export function verifyCrawlOutput(root) {
  const problems = [];
  const read = rel => JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
  const decrees = read('public/data/decrees.json');
  const manifest = read('public/data/accounting-laws/manifest.json');
  const metadata = read('public/data/accounting-laws/metadata.json');

  const ids = new Set();
  const numbers = new Map();
  for (const d of decrees) {
    if (ids.has(d.id)) problems.push(`Trùng id ${d.id}`);
    ids.add(d.id);
    const key = numberKey(d.decree_number || d.number || '');
    if (key && numbers.has(key)) problems.push(`Trùng số hiệu ${d.decree_number} (${numbers.get(key)} và ${d.id})`);
    if (key) numbers.set(key, d.id);
    const text = JSON.stringify(d);
    for (const pattern of PLACEHOLDERS) if (pattern.test(text)) problems.push(`Bản ghi ${d.id} chứa nội dung giữ chỗ (${pattern})`);
  }

  for (const doc of manifest.documents.filter(d => d.ingest?.by === 'legal-crawler')) {
    const record = decrees.find(d => d.id === doc.id);
    const meta = metadata.documents[doc.id];
    if (!record) { problems.push(`Crawler ghi ${doc.id} vào manifest nhưng không có trong decrees.json`); continue; }
    if (!meta) problems.push(`Thiếu metadata nguồn cho ${doc.id}`);
    if (numberKey(record.decree_number) !== numberKey(doc.number)) problems.push(`${doc.id}: số hiệu decrees.json khác manifest`);
    if (meta && (record.issued_date !== meta.issuedDate || record.effective_date !== meta.effectiveDate)) problems.push(`${doc.id}: ngày ban hành/hiệu lực khác dữ liệu nguồn đã lưu`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(record.issued_date || '') || !/^\d{4}-\d{2}-\d{2}$/.test(record.effective_date || '')) problems.push(`${doc.id}: ngày không hợp lệ`);
    if (!record.source_url?.startsWith('https://vanban.chinhphu.vn/')) problems.push(`${doc.id}: source_url không phải nguồn chính thức`);
    if (!record.content_url || !fs.existsSync(path.join(root, 'public', record.content_url))) problems.push(`${doc.id}: thiếu tệp toàn văn`);
    if (!doc.files?.length) problems.push(`${doc.id}: không có tệp PDF`);
    for (const file of doc.files || []) {
      const pdfPath = path.join(root, 'public', file.localUrl);
      if (!fs.existsSync(pdfPath)) { problems.push(`${doc.id}: thiếu ${file.localUrl}`); continue; }
      const bytes = fs.readFileSync(pdfPath);
      if (bytes.subarray(0, 5).toString('latin1') !== '%PDF-') problems.push(`${doc.id}: ${file.localUrl} không phải PDF`);
      if (crypto.createHash('sha256').update(bytes).digest('hex') !== file.sha256) problems.push(`${doc.id}: checksum ${file.localUrl} sai`);
      if (!file.url?.startsWith('https://datafiles.chinhphu.vn/')) problems.push(`${doc.id}: URL PDF gốc ngoài nguồn chính thức`);
      if (file.drivePending === true) {
        if (file.driveId || file.driveUrl || file.driveHashVerified) problems.push(`${doc.id}: ${file.localUrl} vừa chờ Drive vừa có link Drive`);
        if (!record.text_status_note?.includes('Google Drive: đang chờ')) problems.push(`${doc.id}: chưa ghi rõ bản Drive đang chờ`);
      } else if (!file.driveId || file.driveHashVerified !== true || !file.driveUrl?.startsWith('https://drive.google.com/file/d/')) {
        problems.push(`${doc.id}: ${file.localUrl} chưa xác nhận trên Drive`);
      }
      const textPath = path.join(root, 'public', file.textUrl || '');
      if (!file.textUrl || !fs.existsSync(textPath)) { problems.push(`${doc.id}: thiếu chữ theo trang của ${file.localUrl}`); continue; }
      const pages = JSON.parse(fs.readFileSync(textPath, 'utf8')).pages || [];
      if (pages.length !== file.pages || pages.some((p, i) => p.page !== i + 1 || p.text.replace(/\s/g, '').length < 30)) problems.push(`${doc.id}: ${file.textUrl} không đủ ${file.pages} trang có chữ`);
      const ocrPages = pages.filter(p => p.method === 'ocr');
      if (ocrPages.length) {
        if (record.text_status !== 'ocr-review' || !/OCR/.test(record.text_status_note || '')) problems.push(`${doc.id}: có trang OCR nhưng text_status không phải ocr-review hoặc thiếu cảnh báo OCR`);
        if (ocrPages.some(p => typeof p.ocrConfidence !== 'number')) problems.push(`${doc.id}: trang OCR thiếu ocrConfidence`);
        const low = ocrPages.filter(p => p.ocrConfidence < 80).map(p => p.page);
        if (JSON.stringify(low) !== JSON.stringify(file.lowConfidencePages || [])) problems.push(`${doc.id}: lowConfidencePages trong manifest không khớp confidence từng trang`);
      }
    }
  }

  const statusPath = path.join(root, 'public/data/legal-crawl-status.json');
  if (fs.existsSync(statusPath)) {
    const status = JSON.parse(fs.readFileSync(statusPath, 'utf8'));
    if (status.schemaVersion !== 1) problems.push('legal-crawl-status.json: schemaVersion phải là 1');
    if (!RESULTS.includes(status.result)) problems.push(`legal-crawl-status.json: result không hợp lệ (${status.result})`);
    if (!Array.isArray(status.sources) || !status.sources.length) problems.push('legal-crawl-status.json: thiếu danh sách nguồn');
    if (status.result === 'no_changes' || status.result === 'updated') {
      const incomplete = (status.sources || []).filter(s => !s.ok || (s.listings || []).some(l => l.error || l.coverageComplete !== true));
      if (incomplete.length) problems.push(`legal-crawl-status.json: kết quả ${status.result} nhưng có nguồn lỗi/chưa phủ đủ khoảng quét`);
    }
    if (status.result === 'updated' && !status.documentsAdded?.length) problems.push('legal-crawl-status.json: updated nhưng không có văn bản đã nhập');
    for (const added of status.documentsAdded || []) if (!ids.has(added.id)) problems.push(`legal-crawl-status.json: ${added.id} báo đã nhập nhưng không có trong decrees.json`);
    for (const pending of status.documentsPendingReview || []) if (numbers.has(numberKey(pending.officialNumber))) problems.push(`legal-crawl-status.json: ${pending.officialNumber} vừa chờ rà soát vừa có trong danh mục`);
    if (status.lastSuccessfulScanAt && status.lastAttemptAt && status.lastSuccessfulScanAt > status.lastAttemptAt) problems.push('legal-crawl-status.json: lần quét thành công sau lần thử gần nhất');
    if (status.publishedCatalogCount !== undefined && status.result !== 'failed' && status.publishedCatalogCount !== decrees.length) problems.push(`legal-crawl-status.json: publishedCatalogCount ${status.publishedCatalogCount} ≠ ${decrees.length} văn bản`);
  }

  const crawlerDir = path.join(root, 'scripts/crawler');
  for (const file of [...fs.readdirSync(crawlerDir).filter(f => /^legal-crawler|^verify-crawl/.test(f)), ...fs.readdirSync(path.join(crawlerDir, 'lib')).map(f => `lib/${f}`)]) {
    if (BANNED.test(fs.readFileSync(path.join(crawlerDir, file), 'utf8'))) problems.push(`scripts/crawler/${file} còn tham chiếu trang nguồn bị cấm (${BANNED.source})`);
  }
  return problems;
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isMain) {
  const problems = verifyCrawlOutput(process.cwd());
  if (problems.length) { console.error(problems.join('\n')); process.exitCode = 1; }
  else console.log('verify-crawl-output: OK');
}
