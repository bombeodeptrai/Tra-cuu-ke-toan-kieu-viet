export type Pillar = 'TNDN' | 'GTGT' | 'TNCN' | 'KHA' | 'Khác';

export type IssueStatus = 'draft' | 'investigating' | 'ready_for_review' | 'approved_plan' | 'resolved' | 'reopened';
export type SourceKind = 'invoice' | 'delivery' | 'stock' | 'payment' | 'journal' | 'contract' | 'tax_return';

export interface SourcePointer {
  batchId: string;
  row: number;
  evidenceId: string;
  page?: number;
  sourceHash: string;
}

export interface MatchDetail {
  id: string;
  field: string;
  bookValue: string | number;
  actualValue: string | number;
  isMatched: boolean;
  bookSource?: SourcePointer;
  actualSource?: SourcePointer;
  note?: string;
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
  
  description: string;
  matchDetails: MatchDetail[];
  
  resolutionPlan?: {
    cause: string;
    actionRequired: string;
    assignee: string;
    deadline: string;
    impactTax: string;
    impactInvoice: string;
    status: 'draft' | 'approved';
  };
}
