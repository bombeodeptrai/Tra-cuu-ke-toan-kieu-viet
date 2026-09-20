export type Verification = 'pending' | 'verified' | 'rejected' | 'needs_review';
export type Verdict = 'pass' | 'fail' | 'insufficient' | 'review' | 'not_applicable';
export type LegalBlock = {
  id: string; documentVersionId: string; parentId: string | null;
  kind: 'chapter' | 'article' | 'paragraph' | 'point' | 'table' | 'appendix' | 'footnote';
  label: string; order: number; verbatimText: string;
  sourceFileId: string; pageFrom: number; pageTo: number;
  sourceLocator: string; textSha256: string; verification: Verification;
};
export type EvidenceRef = {
  fileVersionId: string; blockId: string; page: number;
  quote: string; verification: Verification;
};
export type Finding = {
  id: string; caseId: string; caseRevisionId: string; requirementId: string;
  verdict: Verdict; reason: string; ruleVersionId: string;
  legalRefs: EvidenceRef[]; requirementRefs: EvidenceRef[]; offerRefs: EvidenceRef[];
  missingEvidence: string[]; assessedAt: string; inputHash: string;
};
export type ComparisonRun = {
  id: string; leftVersionId: string; rightVersionId: string;
  scope: { leftBlockIds: string[]; rightBlockIds: string[] };
  applicableAt: string; corpusVersion: string;
  processedLeft: number; processedRight: number;
  unmatchedLeft: string[]; unmatchedRight: string[];
  sourceVerified: boolean; complete: boolean;
};
