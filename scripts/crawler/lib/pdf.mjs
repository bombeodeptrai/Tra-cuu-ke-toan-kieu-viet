// Tải và xác minh PDF gốc; trích chữ từng trang; đánh giá đủ trang.
import crypto from 'node:crypto';
import { fetchWithRetry } from './http.mjs';

export const MIN_PDF_BYTES = 2048;
export const MIN_PAGE_CHARS = 30;

export function sha256(buffer) { return crypto.createHash('sha256').update(buffer).digest('hex'); }
export function md5(buffer) { return crypto.createHash('md5').update(buffer).digest('hex'); }

export class PdfError extends Error { constructor(message) { super(message); this.name = 'PdfError'; } }

/** Kiểm tra tệp tải về đúng là PDF: chữ ký %PDF-, kích thước tối thiểu, có %%EOF, MIME không phải HTML. */
export function verifyPdfBuffer(buffer, { contentType = '' } = {}) {
  if (/text\/html/i.test(contentType)) throw new PdfError(`Máy chủ trả HTML thay vì PDF (Content-Type: ${contentType})`);
  if (buffer.length < MIN_PDF_BYTES) throw new PdfError(`Tệp quá nhỏ (${buffer.length} byte)`);
  if (buffer.subarray(0, 5).toString('latin1') !== '%PDF-') throw new PdfError('Không có chữ ký %PDF- ở đầu tệp');
  if (!buffer.subarray(Math.max(0, buffer.length - 2048)).toString('latin1').includes('%%EOF')) throw new PdfError('Thiếu %%EOF — tệp có thể bị cắt cụt');
  return { bytes: buffer.length, sha256: sha256(buffer), md5: md5(buffer) };
}

export async function downloadOfficialPdf(url, { fetchImpl, retries, backoffMs } = {}) {
  const res = await fetchWithRetry(url, { fetchImpl, retries, backoffMs, accept: 'application/pdf,*/*;q=0.5', timeoutMs: 120000 });
  const info = verifyPdfBuffer(res.body, { contentType: res.headers?.get?.('content-type') || '' });
  return { url: res.url, buffer: res.body, ...info };
}

/** Trích chữ từng trang bằng pdfjs-dist (có trong dependencies dự án). */
export async function extractPdfPages(buffer) {
  let pdfjs;
  try {
    pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  } catch (error) {
    throw new PdfError(`Không nạp được pdfjs-dist: ${error.message}`);
  }
  const loadingTask = pdfjs.getDocument({ data: new Uint8Array(buffer), verbosity: 0, isEvalSupported: false });
  const doc = await loadingTask.promise;
  try {
    const pages = [];
    for (let number = 1; number <= doc.numPages; number++) {
      const page = await doc.getPage(number);
      const content = await page.getTextContent();
      // Gom các mẩu chữ theo dòng (toạ độ y) rồi sắp từ trên xuống — cùng cách scripts/add-nd-399-2026.mjs.
      const rows = [];
      for (const item of content.items) {
        if (typeof item.str !== 'string' || !item.str.trim()) continue;
        const y = Math.round(item.transform?.[5] || 0);
        let row = rows.find(candidate => Math.abs(candidate.y - y) <= 2);
        if (!row) { row = { y, parts: [] }; rows.push(row); }
        row.parts.push(item.str.trim());
      }
      const text = rows.sort((a, b) => b.y - a.y).map(row => row.parts.join(' ')).join('\n').replace(/[ \t]+/g, ' ');
      pages.push({ page: number, text: text.trim() });
      page.cleanup();
    }
    return { pageCount: doc.numPages, pages };
  } finally {
    // pdfjs-dist 6 destroys the loading task, not the resolved PDFDocumentProxy.
    await loadingTask.destroy();
  }
}

/**
 * Cổng chất lượng: đủ trang, không trang rỗng/ít chữ, số hiệu xuất hiện ở trang đầu.
 * PDF scan (ít chữ) không được công bố tự động — cần OCR và rà soát thủ công.
 */
export function assessCompleteness({ pageCount, pages }, { officialNumber, isMainDocument = true } = {}) {
  const problems = [];
  if (!Number.isInteger(pageCount) || pageCount <= 0) problems.push('PDF không có trang nào');
  if (pages.length !== pageCount) problems.push(`Trích được ${pages.length}/${pageCount} trang`);
  pages.forEach((page, index) => { if (page.page !== index + 1) problems.push(`Trang ${index + 1} sai thứ tự`); });
  const emptyPages = pages.filter(page => page.text.replace(/\s/g, '').length < MIN_PAGE_CHARS).map(page => page.page);
  if (emptyPages.length) problems.push(`Trang không trích được chữ (cần OCR/rà soát): ${emptyPages.join(', ')}`);
  if (isMainDocument && officialNumber) {
    const head = pages.slice(0, 2).map(page => page.text).join('\n').replace(/\s+/g, '');
    const [num, year] = officialNumber.split('/');
    if (!head.includes(`${num}/${year}`)) problems.push(`Không thấy số hiệu ${officialNumber} trong 2 trang đầu của PDF`);
  }
  return { publishable: problems.length === 0, pageCount, extractedPageCount: pages.length, emptyPages, lowConfidencePages: [], problems };
}
