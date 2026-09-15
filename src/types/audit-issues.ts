import type { Pillar } from '@/types/tax-audit';

export type IssueStatus = 'draft' | 'investigating' | 'ready_for_review' | 'approved_plan' | 'resolved' | 'reopened';

export type SourceKind = 'invoice' | 'delivery' | 'stock' | 'payment' | 'journal' | 'contract' | 'tax_return';

export interface SourcePointer {
  batchId: string;
  row: number;
  evidenceId: string;
  page?: number;
  sourceHash: string;
}

export interface AuditIssue {
  id: string;
  caseId: string;
  scenarioId: string;
  pillar: Pillar;
  title: string;
  periodFrom: string;
  periodTo: string;
  owner: string;
  status: IssueStatus;
  answers: Record<string, string | boolean | null>;
  sourceIds: string[];
  workId?: string;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface ImportBatch {
  id: string;
  caseId: string;
  kind: SourceKind;
  evidenceId: string;
  fileHash: string;
  mapping: Record<string, string>;
  decimalFormat: 'vi' | 'en';
  rowCount: number;
  accepted: number;
  rejected: number;
  status: 'staged' | 'committed' | 'rejected';
  createdAt: string;
}

export interface MatchAllocation {
  id: string;
  caseId: string;
  issueId: string;
  leftId: string;
  rightId: string;
  measure: 'quantity' | 'net' | 'gross';
  value: string;
  unit: string;
  confirmedBy: string;
  confirmedAt: string;
}

export interface Finding {
  id: string;
  caseId: string;
  issueId: string;
  ruleId: string;
  state: 'signal' | 'explained' | 'correction_needed' | 'insufficient_data';
  sourceIds: string[];
  explanation: string;
  missing: string[];
  legalRuleIds: string[];
  reviewedBy?: string;
}

export interface InvoiceLine {
  id: string;
  caseId: string;
  sellerTaxId: string;
  series: string;
  number: string;
  date: string;
  lineNo: number;
  sku: string;
  description: string;
  unit: string;
  quantity: string;
  net: string;
  vat: string;
  gross: string;
  lifecycle: 'original' | 'replaced' | 'adjusted' | 'cancelled';
  parentId?: string;
  pointer: SourcePointer;
}

export interface DeliveryLine {
  id: string;
  caseId: string;
  date: string;
  deliveryNo: string;
  contractId: string;
  counterpartyId: string;
  sku: string;
  description: string;
  unit: string;
  quantity: string;
  direction: 'in' | 'out';
  pointer: SourcePointer;
}

export interface StockMovement {
  id: string;
  caseId: string;
  date: string;
  warehouseId: string;
  sku: string;
  batchId: string;
  unit: string;
  quantitySigned: string;
  valueSigned: string;
  pointer: SourcePointer;
}

export interface PaymentLine {
  id: string;
  caseId: string;
  date: string;
  bankRef: string;
  payerId: string;
  payeeId: string;
  gross: string;
  direction: 'in' | 'out';
  pointer: SourcePointer;
}

export interface CorrectionPlan {
  id: string;
  caseId: string;
  issueId: string;
  revision: number;
  facts: string;
  adjustments: { account: string; debit: string; credit: string; note: string }[];
  legalRefs: string[];
  evidenceIds: string[];
  reviewedBy: string;
  submittedReceiptId?: string;
  createdAt: string;
  updatedAt: string;
}
