#!/usr/bin/env node
// Sinh src/data/initial-decrees.ts từ public/data/decrees.json (idempotent). --check: chỉ báo lệch, không ghi.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateInitialDecrees } from './lib/catalog.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const check = process.argv.includes('--check');
const { changed } = generateInitialDecrees(root, { write: !check });
if (check && changed) { console.error('src/data/initial-decrees.ts không khớp public/data/decrees.json'); process.exitCode = 1; }
else console.log(changed ? 'Đã cập nhật src/data/initial-decrees.ts' : 'initial-decrees.ts đã khớp, không thay đổi');
