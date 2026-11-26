// Đọc/ghi danh mục: public/data/decrees.json (chuẩn), manifest/metadata kho văn bản bổ sung,
// scripts/accounting-drive-files.json và sinh src/data/initial-decrees.ts từ JSON.
import fs from 'node:fs';
import path from 'node:path';
import { classifyNumber, numberKey } from './normalize.mjs';

export function catalogPaths(root) {
  return {
    root,
    decrees: path.join(root, 'public/data/decrees.json'),
    lawsDir: path.join(root, 'public/data/accounting-laws'),
    manifest: path.join(root, 'public/data/accounting-laws/manifest.json'),
    metadata: path.join(root, 'public/data/accounting-laws/metadata.json'),
    contentDir: path.join(root, 'public/data/content'),
    driveFiles: path.join(root, 'scripts/accounting-drive-files.json'),
    initialDecrees: path.join(root, 'src/data/initial-decrees.ts'),
    status: path.join(root, 'public/data/legal-crawl-status.json'),
  };
}

const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, 'utf8');

export function loadCatalog(root) {
  const paths = catalogPaths(root);
  const decrees = readJson(paths.decrees);
  const manifest = readJson(paths.manifest);
  const known = new Map();
  for (const d of decrees) for (const n of [d.decree_number, d.number]) if (n) known.set(numberKey(n), d.id);
  for (const d of manifest.documents) if (d.number) known.set(numberKey(d.number), d.id);
  return { paths, decrees, manifest, known, ids: new Set([...decrees.map(d => d.id), ...manifest.documents.map(d => d.id)]) };
}

export function isKnown(catalog, officialNumber) {
  return catalog.known.has(numberKey(officialNumber));
}

/** id ổn định từ số hiệu; nếu trùng id đã có (khác số hiệu) thì báo lỗi để người xử lý, không tự đổi. */
export function proposeId(catalog, officialNumber) {
  const info = classifyNumber(officialNumber);
  if (!info) return { error: `Số hiệu "${officialNumber}" không theo mẫu số/năm/ký hiệu — cần nhập thủ công` };
  if (catalog.ids.has(info.id)) return { error: `id ${info.id} đã tồn tại với văn bản khác — cần đặt id thủ công` };
  return info;
}

export function statusFromEffectiveDate(effectiveDate, today) {
  return effectiveDate > today ? 'upcoming' : 'active';
}

/**
 * Ghi một văn bản đã qua mọi cổng kiểm tra vào website (PDF + chữ theo trang + toàn văn .md),
 * manifest/metadata kho bổ sung, danh sách Drive và decrees.json.
 * file.drive = null nghĩa là chưa lưu Drive (thiếu secret): tệp được đánh dấu drivePending và
 * crawler tự bù lên Drive ở lần chạy sau khi có secret (backfillDrive). Không bao giờ ghi link Drive giả.
 */
export function mergeVerifiedDocument(catalog, { metadata, idInfo, files, acquiredAt, today }) {
  const { paths } = catalog;
  const id = idInfo.id;
  for (const file of files) {
    if (file.drive && !file.drive.driveHashVerified) throw new Error(`Không ghi ${id}: tệp ${file.fileName} có Drive nhưng chưa xác nhận MD5`);
    if (!file.quality?.publishable) throw new Error(`Không ghi ${id}: tệp ${file.fileName} chưa qua cổng chất lượng`);
  }
  const fileRecords = files.map((file, index) => {
    const base = `${id}-${index + 1}`;
    fs.writeFileSync(path.join(paths.lawsDir, `${base}.pdf`), file.buffer);
    writeJson(path.join(paths.lawsDir, `${base}.json`), { pages: file.pages.map(page => ({ ...page, method: page.method || 'pdf-text' })) });
    const drive = file.drive;
    return {
      url: file.url,
      localUrl: `/data/accounting-laws/${base}.pdf`,
      textUrl: `/data/accounting-laws/${base}.json`,
      bytes: file.bytes,
      sha256: file.sha256,
      pages: file.quality.pageCount,
      emptyPages: [],
      driveUrl: drive ? drive.driveUrl : null,
      driveId: drive ? drive.driveId : null,
      driveReadbackBytes: drive ? drive.driveReadbackBytes : null,
      driveHashVerified: Boolean(drive?.driveHashVerified),
      ...(drive ? {} : { drivePending: true }),
      lowConfidencePages: file.quality.lowConfidencePages || [],
      ocrPages: (file.quality.ocrPages || []).length,
      ...(file.quality.meanOcrConfidence != null ? { meanOcrConfidence: file.quality.meanOcrConfidence } : {}),
    };
  });

  const pageSummary = files.map((file, index) => `${index === 0 ? 'văn bản chính' : `tệp đính kèm ${index + 1}`} ${file.quality.pageCount}/${file.quality.pageCount} trang`).join('; ');
  const usesOcr = files.some(file => file.quality.textStatus === 'ocr-review');
  const ocrSummary = files.map((file, index) => file.quality.ocrPages?.length
    ? `${index === 0 ? 'văn bản chính' : `tệp ${index + 1}`}: ${file.quality.ocrPages.length} trang OCR, trung bình ${file.quality.meanOcrConfidence}%${file.quality.lowConfidencePages.length ? `, dưới 80% ở trang ${file.quality.lowConfidencePages.join(', ')}` : ''}`
    : null).filter(Boolean).join('; ');
  const extractionNote = usesOcr
    ? `Toàn văn tạo tự động bằng OCR tiếng Việt từ PDF gốc (${pageSummary}; ${ocrSummary}). Chưa có người đối chiếu — số liệu, điều khoản và dấu có thể sai; luôn đối chiếu PDF gốc trước khi viện dẫn.`
    : `Trích lớp chữ từ PDF gốc (${pageSummary}); bố cục bảng/biểu chưa được người rà soát — đối chiếu PDF ký số trước khi viện dẫn.`;
  const contentLines = [
    `# ${metadata.title}`, '',
    `**Số hiệu:** ${metadata.officialNumber}`,
    `**Cơ quan ban hành:** ${metadata.issuer}`,
    `**Nguồn chính thức:** ${metadata.officialDetailUrl}`,
    `**Ngày ban hành:** ${metadata.issuedDate}`,
    `**Hiệu lực:** ${metadata.effectiveDate}`,
    `**Tình trạng trích xuất:** ${extractionNote}`,
    '', '---', '', '## 📜 TOÀN VĂN VĂN BẢN', '',
  ];
  files.forEach((file, index) => {
    contentLines.push(`### ${index === 0 ? 'Văn bản chính' : `Tệp đính kèm ${index + 1}`} — PDF ${file.quality.pageCount} trang`, '');
    for (const page of file.pages) {
      const low = page.method === 'ocr' && !(page.ocrConfidence >= 80);
      contentLines.push(`### Trang ${page.page}`, '');
      if (low) contentLines.push(`> ⚠️ OCR độ tin cậy thấp (${Number.isFinite(page.ocrConfidence) ? Math.round(page.ocrConfidence) : '?'}%) — đối chiếu trang ${page.page} của PDF gốc.`, '');
      contentLines.push(page.text, '');
    }
  });
  contentLines.push('## Tệp PDF gốc', '', ...files.map((file, index) => `- ${index === 0 ? 'Văn bản chính' : `Tệp ${index + 1}`}: ${file.url}`));
  fs.writeFileSync(path.join(paths.contentDir, `${id}.md`), `${contentLines.join('\n')}\n`, 'utf8');

  catalog.manifest.asOf = today;
  catalog.manifest.documents.push({
    id, number: metadata.officialNumber, title: metadata.title, source: metadata.officialDetailUrl,
    acquiredAt, files: fileRecords, layoutVerified: false, status: 'extracted-all-pages',
    ingest: { by: 'legal-crawler', sourceId: metadata.sourceId, sourceLocator: metadata.sourceLocator, issuer: metadata.issuer, documentType: metadata.documentType },
  });
  writeJson(paths.manifest, catalog.manifest);

  const meta = readJson(paths.metadata);
  meta.asOf = today;
  meta.documents[id] = { source: metadata.officialDetailUrl, issuedDate: metadata.issuedDate, effectiveDate: metadata.effectiveDate, checkedAt: acquiredAt, error: '' };
  writeJson(paths.metadata, meta);

  const driveFiles = readJson(paths.driveFiles);
  fileRecords.forEach(record => {
    if (record.driveId) driveFiles.push({ file: path.basename(record.localUrl), id: record.driveId, url: record.driveUrl, readbackBytes: record.driveReadbackBytes });
  });
  writeJson(paths.driveFiles, driveFiles);

  const record = {
    id,
    number: metadata.officialNumber,
    decree_number: metadata.officialNumber,
    title: metadata.title,
    category: idInfo.category,
    issued_date: metadata.issuedDate,
    effective_date: metadata.effectiveDate,
    status: statusFromEffectiveDate(metadata.effectiveDate, today),
    text_status: usesOcr ? 'ocr-review' : 'pdf-text-available',
    text_status_note: `Tự động nhập từ ${metadata.sourceId}. ${extractionNote} Trạng thái hiệu lực lấy theo ngày có hiệu lực tại nguồn chính thức; chưa rà soát văn bản sửa đổi/thay thế.${fileRecords.some(f => f.drivePending) ? ' Bản lưu Google Drive: đang chờ (chưa cấu hình secret Drive).' : ''}`,
    summary: `Trích yếu theo nguồn chính thức: ${metadata.title}`,
    content_url: `/data/content/${id}.md`,
    pdf_url: fileRecords[0].localUrl,
    ...(fileRecords[0].driveId ? { pdf_drive_id: fileRecords[0].driveId } : {}),
    source_url: metadata.officialDetailUrl,
    free_download_url: metadata.officialDetailUrl,
    pdf_attachments: fileRecords.map((recordFile, index) => ({
      label: index === 0 ? `${metadata.officialNumber} — PDF gốc` : `${metadata.officialNumber} — tệp đính kèm ${index + 1}`,
      pdf_url: recordFile.localUrl,
      ...(recordFile.driveId ? { drive_id: recordFile.driveId } : {}),
      source_url: recordFile.url,
    })),
  };
  catalog.decrees.push(record);
  writeJson(paths.decrees, catalog.decrees);
  catalog.ids.add(id);
  catalog.known.set(numberKey(metadata.officialNumber), id);
  return record;
}

/** Danh sách tệp do crawler nhập còn chờ lưu Drive. */
export function listDrivePending(catalog) {
  const out = [];
  for (const doc of catalog.manifest.documents) {
    if (doc.ingest?.by !== 'legal-crawler') continue;
    doc.files.forEach((file, index) => { if (file.drivePending) out.push({ id: doc.id, number: doc.number, index, file }); });
  }
  return out;
}

/** Ghi biên nhận Drive (đã đọc lại MD5) cho một tệp chờ: manifest, decrees.json, accounting-drive-files.json. */
export function applyDriveReceipt(catalog, { id, index }, receipt) {
  if (!receipt?.driveHashVerified) throw new Error(`Biên nhận Drive cho ${id} chưa xác nhận MD5`);
  const { paths } = catalog;
  const doc = catalog.manifest.documents.find(d => d.id === id);
  const file = doc.files[index];
  Object.assign(file, { driveUrl: receipt.driveUrl, driveId: receipt.driveId, driveReadbackBytes: receipt.driveReadbackBytes, driveHashVerified: true });
  delete file.drivePending;
  writeJson(paths.manifest, catalog.manifest);
  const record = catalog.decrees.find(d => d.id === id);
  if (record) {
    if (index === 0) record.pdf_drive_id = receipt.driveId;
    const attachment = record.pdf_attachments?.find(a => a.pdf_url === file.localUrl);
    if (attachment) attachment.drive_id = receipt.driveId;
    if (!doc.files.some(f => f.drivePending) && record.text_status_note) record.text_status_note = record.text_status_note.replace(' Bản lưu Google Drive: đang chờ (chưa cấu hình secret Drive).', '');
    writeJson(paths.decrees, catalog.decrees);
  }
  const driveFiles = readJson(paths.driveFiles);
  driveFiles.push({ file: path.basename(file.localUrl), id: receipt.driveId, url: receipt.driveUrl, readbackBytes: receipt.driveReadbackBytes });
  writeJson(paths.driveFiles, driveFiles);
}

/**
 * Sinh src/data/initial-decrees.ts từ decrees.json: giữ nguyên phần đầu/cuối của tệp hiện có,
 * chỉ thay mảng JSON. Chạy lại khi dữ liệu không đổi không tạo diff.
 */
export function generateInitialDecrees(root, { write = true } = {}) {
  const paths = catalogPaths(root);
  const decrees = readJson(paths.decrees);
  const current = fs.existsSync(paths.initialDecrees) ? fs.readFileSync(paths.initialDecrees, 'utf8') : '';
  const start = current.indexOf('= [');
  const end = current.lastIndexOf(']');
  const prefix = start >= 0 ? current.slice(0, start + 2) : 'import { Decree } from "@/types/decree";\n\nexport const INITIAL_DECREES: Decree[] = ';
  const suffix = start >= 0 && end > start ? current.slice(end + 1) : ';\n';
  const next = `${prefix}${JSON.stringify(decrees, null, 2)}${suffix}`;
  const changed = next !== current;
  if (changed && write) fs.writeFileSync(paths.initialDecrees, next, 'utf8');
  return { changed };
}
