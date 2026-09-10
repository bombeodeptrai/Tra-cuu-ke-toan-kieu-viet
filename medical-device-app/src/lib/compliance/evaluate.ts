// src/lib/compliance/evaluate.ts
// Engine đối chiếu tuân thủ y tế deterministic theo kiến trúc CODEX_WALKTHROUGH Section 8.1

import { Context, Fact, Finding, Rule, ScopeDecision, Verdict } from '@/types/compliance';

export function parseDateNumber(s: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const value = Date.parse(s + 'T00:00:00.000Z');
  return Number.isFinite(value) && new Date(value).toISOString().slice(0, 10) === s ? value : null;
}

export function evaluateRule(rule: Rule, ctx: Context, scope: ScopeDecision, facts: Fact[]): Finding {
  const out = (verdict: Verdict, ...reasons: string[]): Finding => ({
    ruleId: rule.id,
    ruleVersion: rule.version,
    verdict,
    reasons,
    citations: rule.citations,
    evidenceIds: [...new Set(facts.flatMap(f => f.evidenceIds))]
  });

  const event = parseDateNumber(ctx.eventDate);
  const now = parseDateNumber(ctx.assessedAt);
  const start = parseDateNumber(rule.validFrom);
  const end = rule.validUntilExclusive ? parseDateNumber(rule.validUntilExclusive) : Infinity;

  if (!ctx.entityId || !ctx.modelId || event === null || now === null) {
    return out('insufficient', 'Thiếu thông tin chủ thể, model thiết bị hoặc ngày sự kiện hợp lệ.');
  }

  if (event > now) {
    return out('review', 'Đánh giá cho giao dịch hoặc gói thầu tương lai; cần rà soát lại trước khi nộp.');
  }

  if (start === null || end === null || end <= start) {
    return out('review', 'Khoảng thời gian hiệu lực của văn bản quy phạm chưa hợp lệ.');
  }

  if (rule.publication !== 'released' || !rule.citations.length) {
    return out('review', 'Căn cứ pháp lý chưa được xác minh hoặc đang ở trạng thái dự thảo.');
  }

  if (event < start || event >= end) {
    return out('not_applicable', `Ngoài khoảng hiệu lực áp dụng của văn bản (${rule.validFrom} đến ${rule.validUntilExclusive || 'nay'}).`);
  }

  if (scope.status === 'conflict') {
    return out('review', 'Phạm vi áp dụng của thiết bị hoặc gói thầu có mâu thuẫn cần chuyên gia xử lý.');
  }

  if (scope.status === 'unknown' || !scope.reason) {
    return out('insufficient', 'Chưa xác định đủ căn cứ phạm vi áp dụng.');
  }

  if (scope.status === 'does_not_apply') {
    return out('not_applicable', scope.reason);
  }

  if (!rule.conditionIds.length) {
    return out('review', 'Quy tắc chưa có tập điều kiện kiểm tra hợp lệ.');
  }

  const missing: string[] = [];
  const failed: string[] = [];
  const conflicts: string[] = [];

  for (const condId of rule.conditionIds) {
    const matches = facts.filter(f => 
      f.conditionId === condId && 
      f.entityId === ctx.entityId && 
      f.modelId === ctx.modelId
    );

    if (!matches.length) {
      missing.push(`Thiếu dữ kiện xác minh cho điều kiện [${condId}]`);
      continue;
    }

    if (matches.some(m => m.verification === 'conflict')) {
      conflicts.push(`Có bằng chứng mâu thuẫn tại điều kiện [${condId}]`);
      continue;
    }

    if (matches.some(m => m.verification === 'unverified' || m.value === null)) {
      missing.push(`Điều kiện [${condId}] chưa được xác minh chứng từ gốc`);
      continue;
    }

    if (matches.some(m => m.value === false)) {
      failed.push(`Không đáp ứng tiêu chí bắt buộc tại điều kiện [${condId}]`);
    }
  }

  if (conflicts.length) return out('review', ...conflicts);
  if (failed.length) return out('fail', ...failed);
  if (missing.length) return out('insufficient', ...missing);

  return out('pass', 'Đáp ứng toàn bộ điều kiện và có đầy đủ bằng chứng hợp lệ.');
}