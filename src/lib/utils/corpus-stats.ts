import { INITIAL_DECREES } from '@/data/initial-decrees';
import { DIFF_DATABASE } from '@/data/diff-database';

/**
 * Số liệu thư viện tính trực tiếp từ dữ liệu, không ghi cứng.
 * INITIAL_DECREES được kiểm tra khớp 1-1 với public/data/decrees.json
 * trong scripts/verify-audit-assets.mjs trước mỗi lần build.
 */
export const LIBRARY_DOC_COUNT = INITIAL_DECREES.length;
export const DIFF_DOC_COUNT = Object.keys(DIFF_DATABASE).length;
export const DIFF_ITEM_COUNT = Object.values(DIFF_DATABASE).reduce((sum, d) => sum + d.items.length, 0);
