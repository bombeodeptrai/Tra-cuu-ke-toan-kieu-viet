import Decimal from 'decimal.js';
import type { Finding } from '@/types/audit-issues';

export function remaining(total: string, allocations: string[]): Decimal {
  return allocations.reduce((v, x) => v.minus(new Decimal(x || 0)), new Decimal(total || 0));
}

export function checkAllocation(total: string, used: string[], next: string): void {
  const n = new Decimal(next);
  if (!n.isFinite() || n.lte(0)) throw new Error('Lượng phân bổ phải dương');
  const rem = remaining(total, used);
  if (n.gt(rem)) throw new Error(`Phân bổ vượt phần còn lại (còn: ${rem.toString()}, muốn phân bổ: ${n.toString()})`);
}

export function stockDifference(book: string, physical: string): string {
  return new Decimal(physical || 0).minus(new Decimal(book || 0)).toFixed();
}

export function marginSignal(netRevenue: string, matchedCost: string | null): { state: 'signal' | 'no_negative_margin' | 'insufficient_data'; margin?: string; reason?: string } {
  if (matchedCost === null || matchedCost === undefined) {
    return { state: 'insufficient_data', reason: 'Chưa có giá vốn cùng phạm vi' };
  }
  const rev = new Decimal(netRevenue || 0);
  const cost = new Decimal(matchedCost || 0);
  const margin = rev.minus(cost);
  return {
    state: margin.lt(0) ? 'signal' : 'no_negative_margin',
    margin: margin.toFixed()
  };
}

export interface ReconcileContext {
  caseId: string;
  issueId: string;
  deliveries?: { id: string; sku: string; quantity: string; deliveryNo: string }[];
  invoices?: { id: string; sku: string; quantity: string; price?: string; series?: string; number?: string; lifecycle?: string; parentId?: string }[];
  payments?: { id: string; gross: string; allocated: string[] }[];
  stocks?: { date: string; sku: string; balance: string }[];
  physicalCounts?: { sku: string; book: string; actual: string }[];
  wipItems?: { id: string; objectCode: string; cost154: string; acceptedAmount: string }[];
  agreements?: { sku: string; contractPrice: string }[];
  offsets?: { id: string; parties: string[]; amount: string; hasSignedAgreement: boolean }[];
}

export function runReconciliationRules(ctx: ReconcileContext): Finding[] {
  const findings: Finding[] = [];
  let counter = 1;
  const fid = () => `${ctx.caseId}:finding:${counter++}`;

  // 1. RULE: UNBILLED_DELIVERY (Giao hàng chưa xuất hóa đơn)
  if (ctx.deliveries && ctx.invoices) {
    for (const d of ctx.deliveries) {
      const matched = ctx.invoices.find(inv => inv.sku.toLowerCase() === d.sku.toLowerCase());
      if (!matched) {
        findings.push({
          id: fid(),
          caseId: ctx.caseId,
          issueId: ctx.issueId,
          ruleId: 'UNBILLED_DELIVERY',
          state: 'signal',
          sourceIds: [d.id],
          explanation: `Phiếu giao hàng ${d.deliveryNo} (SKU: ${d.sku}, số lượng: ${d.quantity}) chưa tìm thấy hóa đơn GTGT đối ứng.`,
          missing: ['Hóa đơn GTGT đầu ra'],
          legalRuleIds: ['RULE_INV_DELIVERY_TIMING']
        });
      }
    }
  }

  // 2. RULE: INVOICE_WITHOUT_DELIVERY (Hóa đơn không có phiếu giao nhận)
  if (ctx.invoices && ctx.deliveries) {
    for (const inv of ctx.invoices) {
      const matched = ctx.deliveries.find(d => d.sku.toLowerCase() === inv.sku.toLowerCase());
      if (!matched) {
        findings.push({
          id: fid(),
          caseId: ctx.caseId,
          issueId: ctx.issueId,
          ruleId: 'INVOICE_WITHOUT_DELIVERY',
          state: 'signal',
          sourceIds: [inv.id],
          explanation: `Hóa đơn số ${inv.number || inv.id} (SKU: ${inv.sku}) chưa có phiếu xuất kho / biên bản giao nhận tương ứng.`,
          missing: ['Biên bản bàn giao hàng / Phiếu xuất kho'],
          legalRuleIds: ['RULE_INV_DELIVERY_TIMING']
        });
      }
    }
  }

  // 3. RULE: QUANTITY_MISMATCH (Lệch số lượng giao nhận so với hóa đơn)
  if (ctx.deliveries && ctx.invoices) {
    for (const d of ctx.deliveries) {
      const inv = ctx.invoices.find(i => i.sku.toLowerCase() === d.sku.toLowerCase());
      if (inv) {
        const dQty = new Decimal(d.quantity || 0);
        const iQty = new Decimal(inv.quantity || 0);
        if (!dQty.equals(iQty)) {
          findings.push({
            id: fid(),
            caseId: ctx.caseId,
            issueId: ctx.issueId,
            ruleId: 'QUANTITY_MISMATCH',
            state: 'signal',
            sourceIds: [d.id, inv.id],
            explanation: `Lệch số lượng SKU ${d.sku}: Thực giao ${d.quantity} khác số lượng trên hóa đơn ${inv.quantity} (chênh lệch: ${dQty.minus(iQty).abs().toString()}).`,
            missing: ['Biên bản nghiệm thu khối lượng chính thức'],
            legalRuleIds: ['RULE_INV_DELIVERY_TIMING']
          });
        }
      }
    }
  }

  // 4. RULE: PRICE_AGREEMENT_MISMATCH (Giá hóa đơn lệch hợp đồng)
  if (ctx.invoices && ctx.agreements) {
    for (const inv of ctx.invoices) {
      if (inv.price) {
        const agr = ctx.agreements.find(a => a.sku.toLowerCase() === inv.sku.toLowerCase());
        if (agr && !new Decimal(inv.price).equals(new Decimal(agr.contractPrice))) {
          findings.push({
            id: fid(),
            caseId: ctx.caseId,
            issueId: ctx.issueId,
            ruleId: 'PRICE_AGREEMENT_MISMATCH',
            state: 'signal',
            sourceIds: [inv.id],
            explanation: `Đơn giá hóa đơn (${inv.price}) lệch so với giá thỏa thuận trong hợp đồng (${agr.contractPrice}).`,
            missing: ['Phụ lục hợp đồng điều chỉnh giá'],
            legalRuleIds: ['RULE_CIT_BELOW_COST']
          });
        }
      }
    }
  }

  // 5. RULE: PAYMENT_UNALLOCATED (Dòng tiền chưa phân bổ)
  if (ctx.payments) {
    for (const p of ctx.payments) {
      const rem = remaining(p.gross, p.allocated);
      if (rem.gt(0)) {
        findings.push({
          id: fid(),
          caseId: ctx.caseId,
          issueId: ctx.issueId,
          ruleId: 'PAYMENT_UNALLOCATED',
          state: 'signal',
          sourceIds: [p.id],
          explanation: `Khoản thanh toán ${p.id} còn tồn dư ${rem.toString()} chưa được phân bổ cho hóa đơn nào.`,
          missing: ['Chứng từ đối chiếu công nợ / Hợp đồng tạm ứng'],
          legalRuleIds: ['RULE_CIT_BELOW_COST']
        });
      }
    }
  }

  // 6. RULE: NEGATIVE_STOCK (Âm kho theo ngày)
  if (ctx.stocks) {
    for (const s of ctx.stocks) {
      if (new Decimal(s.balance).lt(0)) {
        findings.push({
          id: fid(),
          caseId: ctx.caseId,
          issueId: ctx.issueId,
          ruleId: 'NEGATIVE_STOCK',
          state: 'signal',
          sourceIds: [`stock:${s.sku}:${s.date}`],
          explanation: `Phát hiện âm kho thời điểm tại ngày ${s.date} đối với SKU ${s.sku} (Số dư tồn: ${s.balance}).`,
          missing: ['Phiếu nhập kho trước thời điểm xuất'],
          legalRuleIds: ['RULE_CIT_BELOW_COST']
        });
      }
    }
  }

  // 7. RULE: STOCK_COUNT_DIFFERENCE (Lệch kiểm kê thực tế)
  if (ctx.physicalCounts) {
    for (const pc of ctx.physicalCounts) {
      const diff = stockDifference(pc.book, pc.actual);
      if (!new Decimal(diff).isZero()) {
        findings.push({
          id: fid(),
          caseId: ctx.caseId,
          issueId: ctx.issueId,
          ruleId: 'STOCK_COUNT_DIFFERENCE',
          state: 'signal',
          sourceIds: [`inventory:${pc.sku}`],
          explanation: `Chênh lệch kiểm kê kho SKU ${pc.sku}: Sổ sách ${pc.book} vs Thực tế ${pc.actual} (Chênh lệch: ${diff}).`,
          missing: ['Biên bản kiểm kê kho', 'Quyết định xử lý thừa thiếu hàng tồn kho'],
          legalRuleIds: ['RULE_CIT_BELOW_COST']
        });
      }
    }
  }

  // 8. RULE: INVOICE_CHAIN_INVALID (Chuỗi hóa đơn có vòng lặp hoặc thiếu cha)
  if (ctx.invoices) {
    for (const inv of ctx.invoices) {
      if ((inv.lifecycle === 'adjusted' || inv.lifecycle === 'replaced') && !inv.parentId) {
        findings.push({
          id: fid(),
          caseId: ctx.caseId,
          issueId: ctx.issueId,
          ruleId: 'INVOICE_CHAIN_INVALID',
          state: 'signal',
          sourceIds: [inv.id],
          explanation: `Hóa đơn ${inv.number} mang trạng thái ${inv.lifecycle} nhưng không có thông tin hóa đơn cha (parentId).`,
          missing: ['Hóa đơn gốc cần điều chỉnh/thay thế'],
          legalRuleIds: ['RULE_INV_ADJUST_REPLACE']
        });
      }
    }
  }

  // 9. RULE: COST_OBJECT_MISSING (Chi phí thiếu đối tượng tính giá thành)
  if (ctx.wipItems) {
    for (const w of ctx.wipItems) {
      if (!w.objectCode || w.objectCode === 'unassigned') {
        findings.push({
          id: fid(),
          caseId: ctx.caseId,
          issueId: ctx.issueId,
          ruleId: 'COST_OBJECT_MISSING',
          state: 'signal',
          sourceIds: [w.id],
          explanation: `Chi phí dở dang TK 154 (${w.cost154} đ) chưa được gán đối tượng công trình / sản phẩm cụ thể.`,
          missing: ['Mã công trình / Sản phẩm đích'],
          legalRuleIds: ['RULE_CIT_BELOW_COST']
        });
      }
    }
  }

  // 10. RULE: ACCEPTED_WORK_STILL_WIP (Nghiệm thu nhưng TK 154 còn treo)
  if (ctx.wipItems) {
    for (const w of ctx.wipItems) {
      if (new Decimal(w.acceptedAmount || 0).gt(0) && new Decimal(w.cost154 || 0).gt(0)) {
        findings.push({
          id: fid(),
          caseId: ctx.caseId,
          issueId: ctx.issueId,
          ruleId: 'ACCEPTED_WORK_STILL_WIP',
          state: 'signal',
          sourceIds: [w.id],
          explanation: `Công trình ${w.objectCode} đã ký nghiệm thu ${w.acceptedAmount} nhưng chi phí dở dang TK 154 vẫn treo ${w.cost154} chưa kết chuyển giá vốn TK 632.`,
          missing: ['Bút toán kết chuyển giá vốn tương ứng'],
          legalRuleIds: ['RULE_CIT_BELOW_COST']
        });
      }
    }
  }

  // 11. RULE: BELOW_COST (Bán dưới giá vốn)
  if (ctx.invoices && ctx.wipItems) {
    for (const inv of ctx.invoices) {
      const wip = ctx.wipItems.find(w => w.objectCode === inv.sku);
      if (wip && inv.price) {
        const sig = marginSignal(inv.price, wip.cost154);
        if (sig.state === 'signal') {
          findings.push({
            id: fid(),
            caseId: ctx.caseId,
            issueId: ctx.issueId,
            ruleId: 'BELOW_COST',
            state: 'signal',
            sourceIds: [inv.id, wip.id],
            explanation: `Doanh thu đơn vị (${inv.price}) thấp hơn giá thành sản xuất (${wip.cost154}) chênh lệch âm: ${sig.margin}.`,
            missing: ['Quyết định phê duyệt bán thanh lý / Định mức phẩm cấp'],
            legalRuleIds: ['RULE_CIT_BELOW_COST']
          });
        }
      }
    }
  }

  // 12. RULE: OFFSET_EVIDENCE_MISSING (Cấn trừ công nợ thiếu chứng cứ đối chiếu)
  if (ctx.offsets) {
    for (const off of ctx.offsets) {
      if (!off.hasSignedAgreement) {
        findings.push({
          id: fid(),
          caseId: ctx.caseId,
          issueId: ctx.issueId,
          ruleId: 'OFFSET_EVIDENCE_MISSING',
          state: 'signal',
          sourceIds: [off.id],
          explanation: `Giao dịch cấn trừ công nợ (${off.amount} đ) giữa các bên [${off.parties.join(', ')}] thiếu biên bản thỏa thuận bù trừ có chữ ký xác nhận của các bên.`,
          missing: ['Biên bản đối chiếu và thỏa thuận bù trừ công nợ đa bên'],
          legalRuleIds: ['RULE_VAT_BANK_TRANSFER']
        });
      }
    }
  }

  return findings;
}