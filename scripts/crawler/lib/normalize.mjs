// Chuẩn hóa số hiệu, ngày, id — dùng chung cho adapter, so trùng và ghi catalog.

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

export function decodeEntities(text) {
  return String(text ?? '')
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z]+);/gi, (match, name) => ENTITIES[name.toLowerCase()] ?? match);
}

export function stripTags(html) {
  return decodeEntities(String(html ?? '').replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
}

/** Giữ nguyên cách ghi chính thức, chỉ bỏ khoảng trắng thừa. */
export function cleanOfficialNumber(raw) {
  return String(raw ?? '').normalize('NFC').replace(/\s+/g, '').trim();
}

/**
 * Khóa so trùng: bỏ dấu, bỏ khoảng trắng và gạch nối, viết hoa, Đ→D.
 * "166/2026/TT-BTC", "166/2026/TTBTC", "166/2026/tt-btc " cho cùng một khóa.
 */
export function numberKey(raw) {
  return cleanOfficialNumber(raw)
    .replace(/[Đđ]/g, 'D')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toUpperCase()
    .replace(/[\s\-–_.]/g, '');
}

/** "02-11-2026" hoặc "02/11/2026" → "2026-11-02"; trả null nếu không hợp lệ. */
export function parseVnDate(raw) {
  const match = String(raw ?? '').trim().match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
  if (!match) return null;
  const [, d, m, y] = match.map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  if (date.getUTCFullYear() !== y || date.getUTCMonth() !== m - 1 || date.getUTCDate() !== d) return null;
  return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

const TYPE_BY_SUFFIX = [
  [/^QH\d+$/, { prefix: 'luat', category: 'luat' }],
  [/^NĐ-CP$/, { prefix: 'nd', category: 'nghi-dinh' }],
  [/^NQ-CP$/, { prefix: 'nq', category: 'nghi-quyet', keepSuffix: true }],
  [/^NQ-UBTVQH\d+$/, { prefix: 'nq', category: 'nghi-quyet', keepSuffix: true }],
  [/^QĐ-TTG$/i, { prefix: 'qd', category: 'quyet-dinh', keepSuffix: true }],
  [/^TT-/, { prefix: 'tt', category: 'thong-tu', keepSuffix: true }],
  [/^TTLT-/, { prefix: 'ttlt', category: 'thong-tu', keepSuffix: true }],
];

function asciiSlug(text) {
  return String(text).replace(/[Đđ]/g, 'd').normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/**
 * Suy ra loại văn bản và id ổn định từ số hiệu chính thức.
 * Ví dụ: 407/2026/NĐ-CP → nd-407-2026; 166/2026/TT-BTC → tt-166-2026-tt-btc;
 * 24/2026/QH16 → luat-24-2026-qh16. Trả null nếu số hiệu không theo mẫu có năm.
 */
export function classifyNumber(officialNumber) {
  const clean = cleanOfficialNumber(officialNumber);
  const match = clean.match(/^(\d+[a-zA-Z]?)\/(\d{4})\/(.+)$/);
  if (!match) return null;
  const [, num, year, suffix] = match;
  const upper = suffix.toUpperCase();
  for (const [pattern, info] of TYPE_BY_SUFFIX) {
    if (pattern.test(upper)) {
      let id = `${info.prefix}-${asciiSlug(num)}-${year}`;
      if (info.prefix === 'luat') id += `-${asciiSlug(suffix)}`;
      else if (info.keepSuffix) id += `-${asciiSlug(suffix)}`;
      return { id, category: info.category, year: Number(year) };
    }
  }
  return null;
}
