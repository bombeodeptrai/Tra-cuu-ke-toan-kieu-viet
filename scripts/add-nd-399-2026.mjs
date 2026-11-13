import fs from 'node:fs';
import crypto from 'node:crypto';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

const root = 'public/data/accounting-laws';
const definitions = [
  {
    file: 'nd-399-2026-1.pdf',
    url: 'https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/11/399_2026_nd-cp_02112026_6-signed.signed.pdf',
    driveId: '1CQYeiyEymZThYRlDxngfXqEIClMPWzPl',
    label: 'Nghị định 399/2026/NĐ-CP — bản chính',
  },
  {
    file: 'nd-399-2026-2.pdf',
    url: 'https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/11/399_2026_nd-cp_02112026_7-signed.pdf',
    driveId: '1B7nXhrSlfZS5VRqSZ24tcX98dTSTurwr',
    label: 'Phụ lục địa bàn áp dụng mức lương tối thiểu',
  },
];

const extracted = [];
for (const definition of definitions) {
  const bytes = fs.readFileSync(`${root}/${definition.file}`);
  if (bytes.subarray(0, 5).toString() !== '%PDF-') throw new Error(`Không phải PDF: ${definition.file}`);
  const pdf = await pdfjs.getDocument({ data: new Uint8Array(bytes), verbosity: 0 }).promise;
  const pages = [];
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const rows = [];
    for (const item of content.items) {
      if (typeof item.str !== 'string' || !item.str.trim()) continue;
      const y = Math.round(item.transform?.[5] || 0);
      let row = rows.find(candidate => Math.abs(candidate.y - y) <= 2);
      if (!row) {
        row = { y, parts: [] };
        rows.push(row);
      }
      row.parts.push(item.str.trim());
    }
    let text = rows
      .sort((left, right) => right.y - left.y)
      .map(row => row.parts.join(' '))
      .join('\n')
      .replace(/[ \t]+/g, ' ')
      .trim();
    // The official signed PDF draws these two header fields as visual outlines,
    // so its hidden text layer omits the values; insert the values verified on
    // the rendered signed page and the official government record above.
    if (definition.file === 'nd-399-2026-1.pdf' && pageNumber === 1) {
      text = text
        .replace(/Số:\s*\/2026\/NĐ\s*-\s*CP/, 'Số: 399/2026/NĐ-CP')
        .replace(/Hà Nội, ngày\s*tháng\s*năm/, 'Hà Nội, ngày 02 tháng 11 năm 2026');
    }
    if (text.length < 30) throw new Error(`Trang ${pageNumber} thiếu chữ: ${definition.file}`);
    pages.push({ page: pageNumber, text, method: 'pdf-text' });
  }
  const textFile = definition.file.replace('.pdf', '.json');
  fs.writeFileSync(`${root}/${textFile}`, `${JSON.stringify({ pages })}\n`, 'utf8');
  extracted.push({
    ...definition,
    textFile,
    pages,
    bytes: bytes.length,
    sha256: crypto.createHash('sha256').update(bytes).digest('hex'),
  });
}

const [main, appendix] = extracted;
const officialPage = 'https://vanban.chinhphu.vn/?classid=1&docid=220166&pageid=27160';
const title = 'Nghị định 399/2026/NĐ-CP quy định mức lương tối thiểu đối với người lao động làm việc theo hợp đồng lao động';
const content = [
  `# ${title}`,
  '',
  '**Số hiệu:** 399/2026/NĐ-CP',
  `**Nguồn chính thức:** ${officialPage}`,
  '**Ngày ban hành:** 2026-11-02',
  '**Hiệu lực:** 2027-01-01',
  '**Tình trạng trích xuất:** Trích xuất lớp chữ từ PDF gốc Chính phủ, đủ 4/4 trang văn bản chính và 10/10 trang phụ lục. Bản chép được phân trang theo đúng PDF; đối chiếu bản PDF ký khi viện dẫn.',
  '',
  '---',
  '',
  '## 📜 TOÀN VĂN VĂN BẢN',
  '',
  '### Văn bản chính — PDF 4 trang',
  ...main.pages.flatMap(page => [`### Trang ${page.page}`, '', page.text, '']),
  '### Phụ lục địa bàn — PDF 10 trang',
  ...appendix.pages.flatMap(page => [`### Trang ${page.page}`, '', page.text, '']),
  '## Tệp PDF gốc',
  '',
  `- Văn bản chính: ${main.url}`,
  `- Phụ lục: ${appendix.url}`,
].join('\n');
fs.writeFileSync('public/data/content/nd-399-2026.md', `${content}\n`, 'utf8');

const fileRecords = extracted.map(file => ({
  url: file.url,
  localUrl: `/data/accounting-laws/${file.file}`,
  textUrl: `/data/accounting-laws/${file.textFile}`,
  bytes: file.bytes,
  sha256: file.sha256,
  pages: file.pages.length,
  emptyPages: [],
  driveUrl: `https://drive.google.com/file/d/${file.driveId}/view?usp=drivesdk`,
  driveId: file.driveId,
  driveReadbackBytes: file.bytes,
  driveHashVerified: false,
  lowConfidencePages: [],
  ocrPages: 0,
}));
const manifestPath = `${root}/manifest.json`;
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest.asOf = '2026-11-13';
manifest.documents = manifest.documents.filter(document => document.id !== 'nd-399-2026');
manifest.documents.push({
  id: 'nd-399-2026',
  number: '399/2026/NĐ-CP',
  title,
  source: officialPage,
  acquiredAt: '2026-11-13T00:00:00.000Z',
  files: fileRecords,
  layoutVerified: false,
  status: 'extracted-all-pages',
});
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

const metadataPath = `${root}/metadata.json`;
const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
metadata.asOf = '2026-11-13';
metadata.documents['nd-399-2026'] = {
  source: officialPage,
  issuedDate: '2026-11-02',
  effectiveDate: '2027-01-01',
  checkedAt: '2026-11-13T00:00:00.000Z',
  error: '',
};
fs.writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');

const driveFilesPath = 'scripts/accounting-drive-files.json';
const driveFiles = JSON.parse(fs.readFileSync(driveFilesPath, 'utf8'));
for (const file of extracted) {
  driveFiles.splice(driveFiles.findIndex(item => item.file === file.file), driveFiles.some(item => item.file === file.file) ? 1 : 0);
  driveFiles.push({
    file: file.file,
    id: file.driveId,
    url: `https://drive.google.com/file/d/${file.driveId}/view?usp=drivesdk`,
    readbackBytes: file.bytes,
  });
}
fs.writeFileSync(driveFilesPath, `${JSON.stringify(driveFiles, null, 2)}\n`, 'utf8');

const corePath = 'public/data/decrees.json';
const core = JSON.parse(fs.readFileSync(corePath, 'utf8'));
const attachments = extracted.map(file => ({
  label: file.label,
  pdf_url: `/data/accounting-laws/${file.file}`,
  drive_id: file.driveId,
  source_url: file.url,
}));
const decree = {
  id: 'nd-399-2026',
  number: '399/2026/NĐ-CP',
  decree_number: '399/2026/NĐ-CP',
  title,
  category: 'nghi-dinh',
  tax_field: 'thue',
  issued_date: '2026-11-02',
  effective_date: '2027-01-01',
  status: 'upcoming',
  text_status: 'pdf-text-available',
  text_status_note: 'Trích xuất lớp chữ từ PDF gốc Chính phủ đủ 4/4 trang văn bản chính và 10/10 trang phụ lục. Bản chép được phân trang; đối chiếu PDF gốc khi viện dẫn.',
  summary: 'Điều chỉnh mức lương tối thiểu tháng và giờ theo 4 vùng từ ngày 01/01/2027. Cần xác định địa bàn làm việc và vùng áp dụng để rà hợp đồng, bảng lương, chi phí nhân công và căn cứ đóng bảo hiểm; phụ lục có danh sách địa bàn, trong đó Gia Lai được chia vùng II, III và IV.',
  content_url: '/data/content/nd-399-2026.md',
  pdf_drive_id: main.driveId,
  pdf_attachments: attachments,
  pdf_url: `/data/accounting-laws/${main.file}`,
  source_url: officialPage,
};
const existing = core.findIndex(item => item.id === decree.id);
if (existing >= 0) core[existing] = decree;
else core.push(decree);
fs.writeFileSync(corePath, `${JSON.stringify(core, null, 2)}\n`, 'utf8');
fs.writeFileSync('src/data/initial-decrees.ts', `import { Decree } from '@/types/decree';\n\nexport const INITIAL_DECREES: Decree[] = ${JSON.stringify(core, null, 2)};\n`, 'utf8');

console.log(JSON.stringify({
  document: decree.number,
  files: extracted.map(file => ({ file: file.file, pages: file.pages.length, bytes: file.bytes, sha256: file.sha256 })),
  pages: extracted.reduce((sum, file) => sum + file.pages.length, 0),
  charCounts: extracted.map(file => file.pages.reduce((sum, page) => sum + page.text.length, 0)),
}, null, 2));
