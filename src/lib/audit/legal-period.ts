import { AUDIT_LEGAL_RULES, type LegalRule } from '@/data/audit-legal-rules';

export interface AuditContextParams {
  transactionDate?: string;
  declarationPeriod?: string; // e.g. "2024-Q1", "2024"
  detectionDate?: string;
  taxType: 'VAT' | 'CIT' | 'invoice' | 'accounting' | 'procedure';
  auditDecisionAnnouncedAt?: string;
  auditConclusionAt?: string;
  withinAuditScope?: boolean;
  topic?: string;
}

export interface LegalResolutionResult {
  status: 'applicable' | 'needs_review' | 'not_found' | 'superseded';
  rule?: LegalRule;
  rationale: string;
  penaltyWaiverEligible?: boolean | 'requires_dossier_review';
  interestApplicable: boolean;
}

export function resolveLegalRule(params: AuditContextParams): LegalResolutionResult {
  const matchingRules = AUDIT_LEGAL_RULES.filter(r => r.taxType === params.taxType);
  
  if (matchingRules.length === 0) {
    return {
      status: 'not_found',
      rationale: `Chưa có quy tắc pháp lý phù hợp cho sắc thuế/loại nghiệp vụ: ${params.taxType}`,
      interestApplicable: false
    };
  }

  // Find candidate by topic or return first matching
  const topicFilter = params.topic ? params.topic.toLowerCase() : null;
  const candidate = topicFilter 
    ? matchingRules.find(r => r.id === params.topic || r.topic.toLowerCase().includes(topicFilter))
    : matchingRules[0];

  if (!candidate) {
    return {
      status: 'needs_review',
      rationale: 'Dữ kiện nghiệp vụ chưa khớp với các tình huống quy tắc đã xác minh.',
      interestApplicable: false
    };
  }

  // Check period applicability
  if (params.transactionDate && candidate.eventFrom && params.transactionDate < candidate.eventFrom) {
    return {
      status: 'superseded',
      rule: candidate,
      rationale: `Nghiệp vụ ngày ${params.transactionDate} diễn ra trước thời điểm hiệu lực (${candidate.eventFrom}) của quy tắc. Cần áp dụng quy định thời kỳ trước đó.`,
      interestApplicable: true
    };
  }

  // Evaluate self-supplement declaration conditions
  let waiver: boolean | 'requires_dossier_review' = 'requires_dossier_review';
  if (params.detectionDate && params.auditDecisionAnnouncedAt) {
    if (params.detectionDate < params.auditDecisionAnnouncedAt) {
      waiver = true; // Phát hiện và khai bổ sung trước công bố quyết định
    } else if (params.withinAuditScope === false) {
      waiver = true; // Ngoài phạm vi thanh tra
    } else {
      waiver = false; // Đã công bố quyết định và thuộc phạm vi thanh tra
    }
  }

  return {
    status: 'applicable',
    rule: candidate,
    rationale: `Quy tắc [${candidate.id}] được áp dụng dựa trên căn cứ ${candidate.article} (${candidate.quote.slice(0, 80)}...)`,
    penaltyWaiverEligible: waiver,
    interestApplicable: true
  };
}
