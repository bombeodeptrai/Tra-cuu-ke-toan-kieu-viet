// Adapter nguồn chính thức: Hệ thống văn bản – Cổng TTĐT Chính phủ (vanban.chinhphu.vn).
//
// Đã kiểm tra trực tiếp ngày 16/11/2026:
// - Danh sách: GET https://vanban.chinhphu.vn/he-thong-van-ban?<query>, server-render 50 dòng mới nhất,
//   bảng `table.search-result`; mỗi dòng có `span.code` (số hiệu), `span.issued-date` (dd/mm/yyyy),
//   `span.substract` (trích yếu), link chi tiết `/?pageid=27160&docid=<id>...`, tệp đính kèm trong
//   `div.bl-doc-file a` trỏ tới datafiles.chinhphu.vn. Phân trang chỉ qua ASP.NET postback, nên
//   adapter chỉ đọc trang 1 và bắt buộc trang 1 phủ hết khoảng thời gian quét (xem coverage).
// - Chi tiết: GET https://vanban.chinhphu.vn/?pageid=27160&docid=<id>; bảng nhãn/giá trị với
//   `td.col1` = "Số ký hiệu", "Ngày ban hành" (dd-mm-yyyy), "Ngày có hiệu lực", "Loại văn bản",
//   "Cơ quan ban hành", "Người ký", "Trích yếu", "Tài liệu đính kèm" (a.view-file).
import { cleanOfficialNumber, decodeEntities, numberKey, parseVnDate, stripTags } from './normalize.mjs';
import { fetchWithRetry } from './http.mjs';

export const SOURCE_ID = 'vanban.chinhphu.vn';
export const BASE = 'https://vanban.chinhphu.vn';

/** Các danh sách bắt buộc. Mỗi danh sách lỗi hoặc không phủ đủ khoảng quét → nguồn failed. */
export const LISTINGS = [
  { key: 'luat', label: 'Luật - Pháp lệnh', query: 'classid=1&mode=1&typegroupid=3' },
  { key: 'nghi-dinh', label: 'Nghị định', query: 'classid=1&mode=1&typegroupid=4' },
  { key: 'quyet-dinh', label: 'Quyết định QPPL', query: 'classid=1&mode=1&typegroupid=5' },
  { key: 'thong-tu', label: 'Thông tư', query: 'classid=1&mode=1&typegroupid=6' },
  { key: 'nghi-quyet-cp', label: 'Nghị quyết của Chính phủ', query: 'classid=509&mode=1' },
];

export class ParseError extends Error {
  constructor(message) { super(message); this.name = 'ParseError'; }
}

function absolute(href) {
  return new URL(decodeEntities(href), BASE + '/').toString();
}

function docIdFrom(href) {
  return new URL(absolute(href)).searchParams.get('docid');
}

/** Phân tích trang danh sách. Ném ParseError nếu cấu trúc đổi hoặc trang rỗng bất thường. */
export function parseListing(html) {
  const tableStart = html.search(/<table[^>]*class="[^"]*\bsearch-result\b[^"]*"/i);
  if (tableStart < 0) throw new ParseError('Không thấy bảng table.search-result — cấu trúc trang đã đổi');
  const table = html.slice(tableStart);
  const expected = (table.match(/<span class="code">/g) || []).length;
  if (expected === 0) throw new ParseError('Bảng danh sách không có dòng văn bản nào (span.code) — trang rỗng bất thường');

  const rows = table.split(/<tr\b/i).slice(1).filter(chunk => chunk.includes('<span class="code">'));
  const documents = rows.map((row, index) => {
    const code = row.match(/<span class="code">([\s\S]*?)<\/span>/);
    const date = row.match(/<span class="issued-date">([\s\S]*?)<\/span>/);
    const title = row.match(/<span class="substract">([\s\S]*?)<\/span>/);
    const href = row.match(/<a href=['"]([^'"]*docid=\d+[^'"]*)['"]/);
    if (!code || !date || !title || !href) throw new ParseError(`Dòng ${index + 1} thiếu số hiệu/ngày/trích yếu/link — cấu trúc trang đã đổi`);
    const issuedDate = parseVnDate(stripTags(date[1]));
    if (!issuedDate) throw new ParseError(`Dòng ${index + 1}: ngày ban hành không đọc được "${stripTags(date[1])}"`);
    const files = [...row.matchAll(/<div class="bl-doc-file"><a href=['"]([^'"]+)['"]/g)].map(m => absolute(m[1]));
    return {
      officialNumber: cleanOfficialNumber(stripTags(code[1])),
      issuedDate,
      title: stripTags(title[1]),
      officialDetailUrl: absolute(href[1]),
      sourceLocator: `docid=${docIdFrom(href[1])}`,
      listingFiles: files,
    };
  });
  if (documents.length !== expected) throw new ParseError(`Đọc được ${documents.length}/${expected} dòng — cấu trúc trang đã đổi`);
  return documents;
}

const DETAIL_LABELS = {
  'Số ký hiệu': 'officialNumber',
  'Ngày ban hành': 'issuedDate',
  'Ngày có hiệu lực': 'effectiveDate',
  'Loại văn bản': 'documentType',
  'Cơ quan ban hành': 'issuer',
  'Người ký': 'signer',
  'Trích yếu': 'title',
};

/** Phân tích trang chi tiết. Ném ParseError nếu thiếu trường bắt buộc. */
export function parseDetail(html) {
  const fields = {};
  for (const match of html.matchAll(/<td class="col1"[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/g)) {
    const label = stripTags(match[1]);
    const key = DETAIL_LABELS[label];
    if (key) fields[key] = stripTags(match[2]);
    if (label === 'Tài liệu đính kèm') {
      fields.files = [...match[2].matchAll(/<a href=['"]([^'"]+)['"][^>]*class=['"]view-file['"]/g)].map(m => absolute(m[1]));
    }
  }
  for (const required of ['officialNumber', 'issuedDate', 'documentType', 'issuer', 'title']) {
    if (!fields[required]) throw new ParseError(`Trang chi tiết thiếu "${required}" — cấu trúc trang đã đổi hoặc văn bản không đủ thông tin`);
  }
  const issuedDate = parseVnDate(fields.issuedDate);
  if (!issuedDate) throw new ParseError(`Ngày ban hành không hợp lệ: ${fields.issuedDate}`);
  const effectiveDate = fields.effectiveDate ? parseVnDate(fields.effectiveDate) : null;
  if (fields.effectiveDate && !effectiveDate) throw new ParseError(`Ngày có hiệu lực không hợp lệ: ${fields.effectiveDate}`);
  return {
    officialNumber: cleanOfficialNumber(fields.officialNumber),
    issuedDate,
    effectiveDate,
    documentType: fields.documentType,
    issuer: fields.issuer,
    signer: fields.signer || null,
    title: fields.title,
    files: fields.files || [],
  };
}

/** Khoảng quét được phủ đủ khi dòng cũ nhất trên trang 1 cũ hơn ngày bắt đầu khoảng quét. */
export function checkCoverage(documents, windowStart) {
  const oldest = documents.reduce((min, d) => (d.issuedDate < min ? d.issuedDate : min), '9999-12-31');
  return { oldest, complete: oldest < windowStart };
}

function decode(body) {
  return body.toString('utf8');
}

/**
 * Quét toàn bộ danh sách bắt buộc. Trả hợp đồng dữ liệu thống nhất của adapter.
 * documents chỉ chứa dòng có ngày ban hành trong khoảng quét.
 */
export async function scan({ windowStart, fetchImpl, retries, backoffMs } = {}) {
  const checkedAt = new Date().toISOString();
  const listings = [];
  const documents = [];
  const errors = [];
  for (const listing of LISTINGS) {
    const url = `${BASE}/he-thong-van-ban?${listing.query}`;
    try {
      const res = await fetchWithRetry(url, { fetchImpl, retries, backoffMs });
      const rows = parseListing(decode(res.body));
      const coverage = checkCoverage(rows, windowStart);
      const inWindow = rows.filter(row => row.issuedDate >= windowStart);
      listings.push({ key: listing.key, url, parsed: rows.length, inWindow: inWindow.length, oldest: coverage.oldest, coverageComplete: coverage.complete });
      if (!coverage.complete) {
        errors.push(`${listing.label}: trang 1 chỉ lùi tới ${coverage.oldest}, chưa phủ hết từ ${windowStart} (cần quét thêm trang, không được coi là không có văn bản mới)`);
      }
      for (const row of inWindow) documents.push({ ...row, listing: listing.key });
    } catch (error) {
      listings.push({ key: listing.key, url, parsed: 0, error: error.message });
      errors.push(`${listing.label}: ${error.message}`);
    }
  }
  // Một văn bản có thể xuất hiện ở nhiều danh sách: so trùng theo số hiệu chuẩn hóa rồi theo docid.
  const seen = new Map();
  for (const doc of documents) {
    const key = numberKey(doc.officialNumber);
    if (!seen.has(key)) seen.set(key, doc);
  }
  return {
    sourceId: SOURCE_ID,
    checkedAt,
    ok: errors.length === 0,
    windowStart,
    listings,
    documents: [...seen.values()],
    error: errors.length ? errors.join(' | ') : null,
  };
}

/** Lấy và xác minh metadata tại trang chi tiết (không dùng chuỗi trong trang tìm kiếm). */
export async function fetchVerifiedMetadata(candidate, { fetchImpl, retries, backoffMs } = {}) {
  const res = await fetchWithRetry(candidate.officialDetailUrl, { fetchImpl, retries, backoffMs });
  const detail = parseDetail(decode(res.body));
  const problems = [];
  if (numberKey(detail.officialNumber) !== numberKey(candidate.officialNumber)) {
    problems.push(`Số hiệu ở trang chi tiết (${detail.officialNumber}) khác danh sách (${candidate.officialNumber})`);
  }
  if (detail.issuedDate !== candidate.issuedDate) {
    problems.push(`Ngày ban hành ở trang chi tiết (${detail.issuedDate}) khác danh sách (${candidate.issuedDate})`);
  }
  if (!detail.files.length) problems.push('Trang chi tiết không có tệp đính kèm');
  if (!detail.effectiveDate) problems.push('Nguồn không công bố ngày có hiệu lực');
  return {
    sourceId: SOURCE_ID,
    officialNumber: detail.officialNumber,
    title: detail.title,
    issuedDate: detail.issuedDate,
    effectiveDate: detail.effectiveDate,
    officialDetailUrl: candidate.officialDetailUrl,
    officialPdfUrls: detail.files,
    issuer: detail.issuer,
    signer: detail.signer,
    documentType: detail.documentType,
    sourceLocator: candidate.sourceLocator,
    problems,
  };
}
