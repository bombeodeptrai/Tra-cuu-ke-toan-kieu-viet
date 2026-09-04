const fs = require('fs');

const file = 'src/components/decree/DecreeDiffViewer.tsx';
const content = fs.readFileSync(file, 'utf8');

const startMarker = 'export interface DiffItem {';
const endMarker = 'interface DecreeDiffViewerProps {';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found!');
  process.exit(1);
}

const replacement = `import { DIFF_DATABASE, DecreeDiffData, DiffItem } from '@/data/diff-database';
export type { DecreeDiffData, DiffItem };
export { DIFF_DATABASE };

`;

const newContent = content.substring(0, startIndex) + replacement + content.substring(endIndex);

fs.writeFileSync(file, newContent, 'utf8');
console.log('Successfully updated DecreeDiffViewer.tsx!');
