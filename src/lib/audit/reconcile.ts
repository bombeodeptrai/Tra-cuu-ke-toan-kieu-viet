// src/lib/audit/reconcile.ts
// Các hàm tính toán thuần túy (Pure Functions) cho 6 công cụ đối chiếu tài chính Kiểu Việt
// Không dùng float tùy tiện để tránh sai số làm tròn tiền tệ

import { BalanceBridge, EbitdaInterestCalculation, BadDebtProvisionCalculation, Pillar } from '@/types/tax-audit';

/**
 * Chuẩn hóa chuỗi số tiền VND thành BigInt
 */
export function parseVndInteger(value: string | number): bigint {
  if (typeof value === 'number') {
    return BigInt(Math.round(value));
  }
  const clean = value.replace(/[^0-9-]/g, '');
  if (!clean || clean === '-') return 0n;
  try {
    return BigInt(clean);
  } catch {
    return 0n;
  }
}

/**
 * Định dạng BigInt thành chuỗi tiền tệ VND có phân cách hàng nghìn
 */
export function formatVnd(amount: bigint | number): string {
  const big = typeof amount === 'bigint' ? amount : BigInt(Math.round(amount));
  const isNegative = big < 0n;
  const abs = isNegative ? -big : big;
  const str = abs.toString();
  const formatted = str.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return (isNegative ? '-' : '') + formatted + ' đ';
}

/**
 * 1. Cầu nối số dư tổng quát: Số đầu kỳ + Tăng trong kỳ - Giảm trong kỳ = Số cuối kỳ
 */
export function reconcileBalance(x: BalanceBridge): { expected: bigint; difference: bigint; isBalanced: boolean } {
  const expected = x.opening + x.increases - x.decreases;
  const difference = x.closing - expected;
  return {
    expected,
    difference,
    isBalanced: difference === 0n
  };
}

/**
 * 2. Cầu nối Doanh thu TK 511 vs Hóa đơn GTGT (VAS 14 & Luật Quản lý thuế 38/2019)
 */
export interface RevenueReconciliationResult {
  accounting511: bigint;
  invoicesIssued: bigint;
  timingDifference: bigint;
  salesDeductions: bigint;
  unexplainedDiff: bigint;
  severity: 'normal' | 'medium' | 'high';
  riskMessage: string;
}

export function reconcileRevenue(
  accounting511: bigint,
  invoicesIssued: bigint,
  timingDifference: bigint,
  salesDeductions: bigint
): RevenueReconciliationResult {
  const expectedInvoices = accounting511 + timingDifference - salesDeductions;
  const unexplainedDiff = invoicesIssued - expectedInvoices;
  const absDiff = unexplainedDiff < 0n ? -unexplainedDiff : unexplainedDiff;

  let severity: 'normal' | 'medium' | 'high' = 'normal';
  let riskMessage = 'Số liệu doanh thu 511 và hóa đơn GTGT đã khớp đúng logic chứng từ.';

  if (absDiff > 100_000_000n) {
    severity = 'high';
    riskMessage = 'Lệch trọng yếu trên 100 triệu! Nguy cơ đoàn thuế truy thu GTGT đầu ra và phạt chậm nộp.';
  } else if (absDiff > 0n) {
    severity = 'medium';
    riskMessage = 'Có chênh lệch nhỏ cần bổ sung bảng kê chứng từ và thời điểm nghiệm thu xây dựng (VAS 14).';
  }

  return {
    accounting511,
    invoicesIssued,
    timingDifference,
    salesDeductions,
    unexplainedDiff,
    severity,
    riskMessage
  };
}

/**
 * 3. Cầu nối Chi phí Dở dang TK 154 (26 tỷ dở dang của Kiểu Việt)
 */
export interface Wip154ReconciliationResult {
  opening154: bigint;
  incurred154: bigint;
  transferredToCogs632: bigint;
  closing154: bigint;
  calculatedClosing154: bigint;
  unexplainedDiff: bigint;
  unacceptedCogsEstimated: bigint;
  severity: 'normal' | 'medium' | 'high';
  recommendation: string;
}

export function reconcileWip154(
  opening154: bigint,
  incurred154: bigint,
  transferredToCogs632: bigint,
  closing154: bigint
): Wip154ReconciliationResult {
  const calculatedClosing154 = opening154 + incurred154 - transferredToCogs632;
  const unexplainedDiff = closing154 - calculatedClosing154;
  const absDiff = unexplainedDiff < 0n ? -unexplainedDiff : unexplainedDiff;

  let severity: 'normal' | 'medium' | 'high' = 'normal';
  let recommendation = 'Số dư 154 phù hợp với tiến độ thi công công trình và tồn xưởng gỗ.';

  if (absDiff !== 0n) {
    severity = 'high';
    recommendation = 'Lệch sổ cái 154 so với bảng tập hợp chi phí công trình! Kiểm tra ngay bút toán kết chuyển 632 dở dang.';
  } else if (closing154 > 20_000_000_000n) {
    severity = 'medium';
    recommendation = 'Số dư dở dang lớn (>20 tỷ). Cần chuẩn bị đầy đủ Biên bản kiểm kê hiện trường cuối kỳ, hợp đồng dở dang và giải trình trích trước 335 theo TT 96/2015.';
  }

  return {
    opening154,
    incurred154,
    transferredToCogs632,
    closing154,
    calculatedClosing154,
    unexplainedDiff,
    unacceptedCogsEstimated: 0n,
    severity,
    recommendation
  };
}

/**
 * 4. Kiểm soát trần chi phí Lãi vay 30% EBITDA (Nghị định 132/2020/NĐ-CP)
 * Áp dụng giải bài toán 37 tỷ nợ liên kết Kiểu Việt
 */
export function calculateEbitdaInterest(
  netOperatingProfit: bigint,
  netInterestExpense: bigint,
  depreciationExpense: bigint
): EbitdaInterestCalculation {
  const ebitda = netOperatingProfit + netInterestExpense + depreciationExpense;
  
  let interestCap30Percent = 0n;
  let disallowedInterest = 0n;
  let carriedForwardAvailable = 0n;

  if (ebitda > 0n) {
    interestCap30Percent = (ebitda * 30n) / 100n;
    if (netInterestExpense > interestCap30Percent) {
      disallowedInterest = netInterestExpense - interestCap30Percent;
      carriedForwardAvailable = disallowedInterest;
    }
  } else {
    disallowedInterest = netInterestExpense;
    carriedForwardAvailable = netInterestExpense;
  }

  return {
    netOperatingProfit,
    netInterestExpense,
    depreciationExpense,
    ebitda,
    interestCap30Percent,
    disallowedInterest,
    carriedForwardAvailable
  };
}

/**
 * 5. Trích lập dự phòng Nợ phải thu khó đòi TK 2293 (Thông tư 48/2019/TT-BTC)
 * Áp dụng cho 3.11 tỷ nợ bê tông & vật tư công trình
 */
export function calculateBadDebtProvision(
  customerName: string,
  pillar: Pillar,
  originalDebtAmount: bigint,
  overdueMonths: number,
  hasReconciliationDoc: boolean,
  hasDebtReminderDocs: boolean
): BadDebtProvisionCalculation {
  let rate = 0;
  if (overdueMonths >= 36) {
    rate = 1.0;
  } else if (overdueMonths >= 24) {
    rate = 0.7;
  } else if (overdueMonths >= 12) {
    rate = 0.5;
  } else if (overdueMonths >= 6) {
    rate = 0.3;
  }

  const provisionAmount = (originalDebtAmount * BigInt(Math.round(rate * 100))) / 100n;
  const taxDeductible = rate > 0 && (hasReconciliationDoc || hasDebtReminderDocs);

  let notes = 'Nợ chưa quá hạn hoặc dưới 6 tháng; chưa đủ điều kiện trích lập.';
  if (rate > 0) {
    if (taxDeductible) {
      notes = `Đủ điều kiện trích lập ${(rate * 100)}% theo TT 48/2019. Hồ sơ chứng từ hợp lệ để tính chi phí được trừ TNDN.`;
    } else {
      notes = `Trích lập kế toán ${(rate * 100)}% nhưng THIẾU biên bản đối chiếu/giấy đòi nợ! Thuế sẽ LOẠI khỏi chi phí hợp lý khi thanh tra!`;
    }
  }

  return {
    customerName,
    pillar,
    originalDebtAmount,
    overdueMonths,
    rate,
    provisionAmount,
    hasReconciliationDoc,
    hasDebtReminderDocs,
    taxDeductible,
    notes
  };
}

/**
 * 6. Đối chiếu thanh toán ngân hàng hóa đơn > 20 triệu (TK 331 - TK 112 & Biên bản cấn trừ)
 */
export interface BankPaymentCheckResult {
  invoiceAmount: bigint;
  paidViaBank112: bigint;
  offsetAmount: bigint;
  cashPaymentAmount: bigint;
  hasValidOffsetContract: boolean;
  vatDeductible: boolean;
  citDeductible: boolean;
  riskWarning: string;
}

export function checkBankPaymentRule(
  invoiceAmount: bigint,
  paidViaBank112: bigint,
  offsetAmount: bigint,
  cashPaymentAmount: bigint,
  hasValidOffsetContract: boolean
): BankPaymentCheckResult {
  const threshold20M = 20_000_000n;
  const isOverThreshold = invoiceAmount >= threshold20M;

  let vatDeductible = true;
  let citDeductible = true;
  let riskWarning = 'Thanh toán hợp lệ.';

  if (isOverThreshold) {
    if (cashPaymentAmount > 0n) {
      vatDeductible = false;
      citDeductible = false;
      riskWarning = `Hóa đơn từ 20 triệu có thanh toán tiền mặt (${formatVnd(cashPaymentAmount)})! Thuế sẽ loại trừ thuế GTGT đầu vào và chi phí được trừ TNDN.`;
    } else if (offsetAmount > 0n && !hasValidOffsetContract) {
      vatDeductible = false;
      citDeductible = false;
      riskWarning = 'Có cấn trừ công nợ nhưng THIẾU Biên bản đối trừ có chữ ký 2 bên hoặc điều khoản cấn trừ trong hợp đồng kinh tế!';
    }
  }

  return {
    invoiceAmount,
    paidViaBank112,
    offsetAmount,
    cashPaymentAmount,
    hasValidOffsetContract,
    vatDeductible,
    citDeductible,
    riskWarning
  };
}