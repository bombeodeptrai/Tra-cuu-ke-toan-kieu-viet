import fs from 'node:fs';

function normalize(text) {
  return String(text ?? '').normalize('NFC').toLocaleLowerCase('vi');
}

export function loadRelevance(file = new URL('../relevance.json', import.meta.url)) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/**
 * Phân loại theo trích yếu (và cơ quan ban hành khi đã có từ trang chi tiết).
 * → 'include' | 'review' | 'ignore'. Không suy diễn ngoài danh sách cấu hình.
 */
export function classifyRelevance({ title, issuer }, config) {
  const text = normalize(title);
  const hits = config.include.filter(keyword => text.includes(normalize(keyword)));
  if (!hits.length) return { decision: 'ignore', hits: [] };
  const reviewHits = config.reviewOnly.filter(keyword => text.includes(normalize(keyword)));
  if (reviewHits.length) return { decision: 'review', hits, reason: `Trích yếu có "${reviewHits.join('", "')}" — cần người xác định phạm vi áp dụng` };
  if (issuer && !config.issuers.some(name => normalize(name) === normalize(issuer))) {
    return { decision: 'review', hits, reason: `Cơ quan ban hành "${issuer}" ngoài danh sách theo dõi` };
  }
  return { decision: 'include', hits };
}
