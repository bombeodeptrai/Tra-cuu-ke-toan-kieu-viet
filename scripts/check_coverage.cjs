const fs = require('fs');
const path = require('path');

const core = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
const coreIds = new Set(core.map((decree) => decree.id));
if (fs.existsSync('public/data/pdfs/tt-99-2025.pdf')) {
  throw new Error('Mismatched 2-page QĐ 71/2024 PDF must not remain publicly deployable under the TT99 filename');
}
const diffDirectory = 'src/data/diffs';
const diffFiles = fs.readdirSync(diffDirectory).filter((file) => file.endsWith('.ts'));
const diffIds = diffFiles.flatMap((file) => {
  const source = fs.readFileSync(path.join(diffDirectory, file), 'utf8');
  return [...source.matchAll(/"decreeId"\s*:\s*"([^"]+)"/g)].map((match) => match[1]);
});
const duplicateIds = diffIds.filter((id, index) => diffIds.indexOf(id) !== index);
const unknownIds = diffIds.filter((id) => !coreIds.has(id));
const viewer = fs.readFileSync('src/components/decree/DecreeDiffViewer.tsx', 'utf8');
const brandFiles = ['src/index.css', 'src/components/layout/Header.tsx', 'src/components/layout/Sidebar.tsx'];
const remoteBrandAssets = brandFiles.filter((file) =>
  /fonts\.googleapis\.com|kieuviet\.com\.vn\/wp-content\/uploads\/2024\/10\/logo-kieu-viet\.png/i.test(fs.readFileSync(file, 'utf8'))
);
const allowlistIsEmpty = viewer.includes('const VERIFIED_DIFF_IDS = new Set<string>();');
const hasReviewGate = viewer.includes('!VERIFIED_DIFF_IDS.has(targetId)')
  && viewer.includes('reviewRequired &&');

console.log(`Core legal catalog: ${core.length} records`);
console.log(`Legacy comparison drafts: ${diffIds.length} records (${new Set(diffIds).size} unique)`);
console.log(`Verified comparison records: ${allowlistIsEmpty ? 0 : 'allowlist changed; manual review required'}`);

if (core.length < 55) throw new Error('Core catalog is below the required 55-document baseline');
if (diffIds.length !== 55 || new Set(diffIds).size !== 55) {
  throw new Error(`Expected 55 legacy comparison drafts, found ${diffIds.length} (${new Set(diffIds).size} unique)`);
}
if (duplicateIds.length) throw new Error(`Duplicate comparison records: ${duplicateIds.join(', ')}`);
if (unknownIds.length) throw new Error(`Comparison records absent from the legal catalog: ${unknownIds.join(', ')}`);
if (remoteBrandAssets.length) throw new Error(`Brand assets must be local to avoid third-party network errors: ${remoteBrandAssets.join(', ')}`);
if (!allowlistIsEmpty || !hasReviewGate) {
  throw new Error('Comparison drafts must remain hidden until their old/new legal citations are verified');
}

console.log('PASS: all 55 legacy comparison drafts map to catalog records and remain quarantined from legal guidance.');

