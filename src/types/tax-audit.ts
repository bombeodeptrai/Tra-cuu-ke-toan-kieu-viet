export type Pillar = 'interior' | 'concrete_materials' | 'construction' | 'consulting';

export const PILLAR_LABELS: Record<Pillar, string> = {
  interior: 'Nội thất & Gỗ xuất khẩu (Phú Tài)',
  concrete_materials: 'Trạm bê tông, Đá & Cừ Larsen',
  construction: 'Xây lắp công trình liên tỉnh',
  consulting: 'Tư vấn dự án & Thiết kế',
};

export type TaskStatus = 'pending' | 'collecting' | 'review' | 'approved' | 'not_applicable';

export const TASK_STATUS_LABELS: Record<TaskStatus, { label: string; color: string }> = {
  pending: { label: 'Chưa rà soát', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' },
  collecting: { label: 'Đang bổ sung chứng từ', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' },
  review: { label: 'Chờ duyệt nội bộ', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' },
  approved: { label: 'Đã duyệt đạt chuẩn', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' },
  not_applicable: { label: 'Không áp dụng', color: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
};

export type Answer = 'yes' | 'no' | 'unknown' | 'not_applicable';

export interface AuditCase {
  id: string;
  entityId: string;
  entityName: string;
  taxCode: string;
  periods: string[];
  auditMonth: string;
  targetPrepDate: string;
  status: 'planning' | 'preparing' | 'auditing' | 'closed';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface RuleReference {
  documentId: string;
  versionId: string;
  article: string;
  paragraph?: string;
  sourceId: string;
  title?: string;
}

export interface AuditEvidence {
  id: string;
  caseId: string;
  title: string;
  pillar: Pillar;
  kind: 'contract' | 'acceptance_slip' | 'bank_slip' | 'invoice' | 'payroll' | 'reconciliation_memo' | 'other';
  referenceNumber: string;
  issueDate: string;
  amountVnd?: string;
  storageType: 'paper' | 'local_file' | 'drive_link';
  locationNote?: string;
  fileHash?: string;
  verified: boolean;
  notes?: string;
}

export interface AuditIssue {
  id: string;
  caseId: string;
  pillar: Pillar;
  title: string;
  description: string;
  period: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  amountRelatedVnd?: string;
  estimatedTaxVnd?: string;
  status: 'unverified' | 'confirmed' | 'resolved';
  evidenceIds: string[];
  ruleRefs: RuleReference[];
  explanation?: string;
  revision?: number;
}

export interface AuditRequestLogItem {
  id: string;
  caseId: string;
  requestTime: string;
  requestContent: string;
  requestedBy: string;
  legalBasis?: string;
  deadline: string;
  assignee: string;
  status: 'received' | 'preparing' | 'submitted' | 'approved';
  deliveredVersion?: string;
  notes?: string;
}

export interface BalanceBridge {
  opening: bigint;
  increases: bigint;
  decreases: bigint;
  closing: bigint;
}

export interface EbitdaInterestCalculation {
  netOperatingProfit: bigint;
  netInterestExpense: bigint;
  depreciationExpense: bigint;
  ebitda: bigint;
  interestCap30Percent: bigint;
  disallowedInterest: bigint;
  carriedForwardAvailable: bigint;
}

export interface BadDebtProvisionCalculation {
  customerName: string;
  pillar: Pillar;
  originalDebtAmount: bigint;
  overdueMonths: number;
  rate: number;
  provisionAmount: bigint;
  hasReconciliationDoc: boolean;
  hasDebtReminderDocs: boolean;
  taxDeductible: boolean;
  notes: string;
}