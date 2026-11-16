import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const crawlerDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const fixture = name => fs.readFileSync(path.join(crawlerDir, 'fixtures', name), 'utf8');

/** PDF tối thiểu hợp lệ về mặt chữ ký/EOF (nội dung trang do hàm extract giả lập cung cấp). */
export function fakePdf(label = 'x') {
  return Buffer.from(`%PDF-1.7\n% ${label}\n${'0'.repeat(4096)}\ntrailer\n<<>>\n%%EOF\n`, 'latin1');
}

/** Tạo repo tạm tối thiểu: danh mục 2 văn bản, manifest/metadata, initial-decrees, mã crawler. */
export function makeTempRepo() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'kv-crawl-'));
  const mk = rel => fs.mkdirSync(path.join(root, rel), { recursive: true });
  ['public/data/accounting-laws', 'public/data/content', 'src/data', 'scripts'].forEach(mk);
  const decrees = [
    { id: 'tt-99-2025', number: '99/2025/TT-BTC', decree_number: '99/2025/TT-BTC', title: 'Thông tư 99/2025/TT-BTC', category: 'thong-tu', issued_date: '2025-10-27', effective_date: '2026-01-01', status: 'active', summary: 'x', content_url: '/data/content/tt-99-2025.md' },
    { id: 'nd-70-2025', number: '70/2025/NĐ-CP', decree_number: '70/2025/NĐ-CP', title: 'Nghị định 70/2025/NĐ-CP', category: 'nghi-dinh', issued_date: '2025-03-20', effective_date: '2025-06-01', status: 'active', summary: 'x', content_url: '/data/content/nd-70-2025.md' },
  ];
  fs.writeFileSync(path.join(root, 'public/data/decrees.json'), `${JSON.stringify(decrees, null, 2)}\n`);
  fs.writeFileSync(path.join(root, 'public/data/accounting-laws/manifest.json'), `${JSON.stringify({ asOf: '2026-11-13', documents: [{ id: 'nq-43-2026', number: '43/2026/QH16', files: [] }] }, null, 2)}\n`);
  fs.writeFileSync(path.join(root, 'public/data/accounting-laws/metadata.json'), `${JSON.stringify({ asOf: '2026-11-13', documents: {} }, null, 2)}\n`);
  fs.writeFileSync(path.join(root, 'scripts/accounting-drive-files.json'), '[]\n');
  fs.writeFileSync(path.join(root, 'src/data/initial-decrees.ts'), `import { Decree } from "@/types/decree";\n\nexport const INITIAL_DECREES: Decree[] = ${JSON.stringify(decrees, null, 2)};\r\n`);
  fs.cpSync(crawlerDir, path.join(root, 'scripts/crawler'), { recursive: true });
  return root;
}

/**
 * fetch giả lập vanban.chinhphu.vn / datafiles.chinhphu.vn từ fixture.
 * routes: hàm (url) → { status, body, contentType } | undefined (404).
 */
export function fakeFetch(routes) {
  const calls = [];
  const impl = async url => {
    calls.push(url);
    const hit = routes(url);
    if (hit instanceof Error) throw hit;
    const { status = 200, body = '', contentType = 'text/html; charset=utf-8' } = hit || { status: 404 };
    const buffer = Buffer.isBuffer(body) ? body : Buffer.from(body, 'utf8');
    return {
      ok: status >= 200 && status < 300, status, url,
      headers: new Map([['content-type', contentType]]),
      arrayBuffer: async () => buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength),
    };
  };
  impl.calls = calls;
  return impl;
}
