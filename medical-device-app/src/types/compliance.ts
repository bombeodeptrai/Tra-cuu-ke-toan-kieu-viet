// src/types/compliance.ts
// Hợp đồng dữ liệu đối chiếu tuân thủ y tế theo kiến trúc CODEX_WALKTHROUGH

export type Verdict = 'pass' | 'fail' | 'insufficient' | 'not_applicable' | 'review';

export const VERDICT_LABELS: Record<Verdict, { label: string; color: string; badgeColor: string; description: string }> = {
  pass: {
    label: 'Đạt yêu cầu',
    color: 'text-emerald-700 dark:text-emerald-300',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300',
    description: 'Có đủ bằng chứng xác minh, đúng model, đúng thời điểm và đáp ứng toàn bộ điều kiện.'
  },
  fail: {
    label: 'Không đạt',
    color: 'text-red-700 dark:text-red-300',
    badgeColor: 'bg-red-100 text-red-800 border-red-300 dark:bg-red-950 dark:text-red-300',
    description: 'Dữ kiện thực tế trái với yêu cầu hồ sơ mời thầu hoặc điều kiện pháp lý.'
  },
  insufficient: {
    label: 'Chưa đủ căn cứ',
    color: 'text-amber-700 dark:text-amber-300',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300',
    description: 'Thiếu chứng từ gốc, chưa xác minh được số lưu hành hoặc dữ liệu quá cũ.'
  },
  not_applicable: {
    label: 'Không áp dụng',
    color: 'text-slate-600 dark:text-slate-400',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-400',
    description: 'Ngoài phạm vi áp dụng theo quy định pháp luật hoặc điều khoản gói thầu.'
  },
  review: {
    label: 'Cần chuyên gia duyệt',
    color: 'text-blue-700 dark:text-blue-300',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950 dark:text-blue-300',
    description: 'Tình huống chuyển tiếp luật (2025–2026) hoặc có quy định mâu thuẫn cần hội đồng duyệt.'
  }
};

export type Basis = 'law' | 'tender' | 'contract' | 'manufacturer' | 'internal';

export const BASIS_LABELS: Record<Basis, string> = {
  law: 'Quy định pháp luật (Luật/Nghị định/Thông tư)',
  tender: 'Yêu cầu Hồ sơ mời thầu (E-HSMT)',
  contract: 'Hợp đồng kinh tế & Phụ lục',
  manufacturer: 'Quy chuẩn kỹ thuật Nhà sản xuất',
  internal: 'Quy trình kiểm soát nội bộ Kiểu Việt'
};

export type EventBasis = 'purchase' | 'import' | 'bid' | 'delivery' | 'use';

export interface Citation {
  documentId: string;
  versionId: string;
  locator: string; // "Điều 21 K1"
  sourceHash: string;
  verified: boolean;
  docTitle?: string;
  officialUrl?: string;
}

export interface ScopeDecision {
  status: 'applies' | 'does_not_apply' | 'unknown' | 'conflict';
  reason: string;
  evidenceIds: string[];
}

export interface Rule {
  id: string;
  version: string;
  basis: Basis;
  eventBasis: EventBasis;
  publication: 'draft' | 'released';
  citations: Citation[];
  validFrom: string;
  validUntilExclusive?: string;
  conditionIds: string[];
  title: string;
  description: string;
}

export interface Fact {
  conditionId: string;
  entityId: string;
  modelId: string;
  value: boolean | null;
  evidenceIds: string[];
  verification: 'verified' | 'unverified' | 'conflict';
  validFrom: string;
  validUntilExclusive?: string;
  checkedAt: string;
}

export interface Context {
  entityId: string;
  modelId: string;
  eventDate: string;
  assessedAt: string;
}

export interface Finding {
  ruleId: string;
  ruleVersion: string;
  verdict: Verdict;
  reasons: string[];
  evidenceIds: string[];
  citations: Citation[];
}