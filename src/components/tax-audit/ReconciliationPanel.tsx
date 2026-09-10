import React, { useState } from 'react';
import { 
  Scale, Calculator, AlertTriangle, CheckCircle2, FileText, 
  HelpCircle, ArrowRight, ShieldCheck, DollarSign, Building2, 
  Layers, RefreshCw, AlertCircle, Sparkles
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  formatVnd, 
  parseVndInteger, 
  calculateEbitdaInterest, 
  calculateBadDebtProvision,
  reconcileWip154,
  reconcileRevenue,
  checkBankPaymentRule
} from '@/lib/audit/reconcile';

export const ReconciliationPanel: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'ebitda' | 'wip154' | 'baddebt' | 'revenue' | 'bank331'>('ebitda');

  // Tool 1: EBITDA State
  const [ebitdaProfit, setEbitdaProfit] = useState<string>('3500000000'); // 3.5 tỷ
  const [ebitdaInterest, setEbitdaInterest] = useState<string>('4200000000'); // 4.2 tỷ lãi vay (nợ 37 tỷ)
  const [ebitdaDeprec, setEbitdaDeprec] = useState<string>('2100000000'); // 2.1 tỷ khấu hao

  // Tool 2: WIP 154 State
  const [wipOpening, setWipOpening] = useState<string>('24000000000'); // 24 tỷ đầu kỳ
  const [wipIncurred, setWipIncurred] = useState<string>('85000000000'); // 85 tỷ phát sinh trong kỳ
  const [wipCogs632, setWipCogs632] = useState<string>('83000000000'); // 83 tỷ kết chuyển 632
  const [wipClosing, setWipClosing] = useState<string>('26000000000'); // 26 tỷ thực tế cuối kỳ

  // Tool 3: Bad Debt State
  const [badDebtAmount, setBadDebtAmount] = useState<string>('3110000000'); // 3.11 tỷ
  const [badDebtMonths, setBadDebtMonths] = useState<number>(14); // 14 tháng (quá hạn 1-2 năm)
  const [hasReconDoc, setHasReconDoc] = useState<boolean>(true);
  const [hasReminderDocs, setHasReminderDocs] = useState<boolean>(true);

  // Tool 4: Revenue 511 State
  const [rev511, setRev511] = useState<string>('134000000000'); // 134 tỷ doanh thu 511
  const [revInvoices, setRevInvoices] = useState<string>('134500000000'); // 134.5 tỷ hóa đơn
  const [revTiming, setRevTiming] = useState<string>('500000000'); // 500tr chênh lệch nghiệm thu
  const [revDeductions, setRevDeductions] = useState<string>('0');

  // Tool 5: Bank Payment 331 State
  const [invAmount, setInvAmount] = useState<string>('850000000'); // Hóa đơn 850tr
  const [paidBank, setPaidBank] = useState<string>('500000000'); // Trả NH 500tr
  const [offsetAmount, setOffsetAmount] = useState<string>('350000000'); // Cấn trừ cát đá 350tr
  const [cashAmount, setCashAmount] = useState<string>('0');
  const [hasOffsetContract, setHasOffsetContract] = useState<boolean>(true);

  // Tính toán kết quả cho Tool 1: EBITDA
  const ebitdaResult = calculateEbitdaInterest(
    parseVndInteger(ebitdaProfit),
    parseVndInteger(ebitdaInterest),
    parseVndInteger(ebitdaDeprec)
  );

  // Tính toán kết quả cho Tool 2: 154
  const wipResult = reconcileWip154(
    parseVndInteger(wipOpening),
    parseVndInteger(wipIncurred),
    parseVndInteger(wipCogs632),
    parseVndInteger(wipClosing)
  );

  // Tính toán kết quả cho Tool 3: Nợ xấu
  const badDebtResult = calculateBadDebtProvision(
    'Công ty Xây dựng Đối tác (Nợ cung cấp Bê tông & VLXD)',
    'concrete_materials',
    parseVndInteger(badDebtAmount),
    badDebtMonths,
    hasReconDoc,
    hasReminderDocs
  );

  // Tính toán kết quả cho Tool 4: Doanh thu
  const revResult = reconcileRevenue(
    parseVndInteger(rev511),
    parseVndInteger(revInvoices),
    parseVndInteger(revTiming),
    parseVndInteger(revDeductions)
  );

  // Tính toán kết quả cho Tool 5: Thanh toán NH
  const bankResult = checkBankPaymentRule(
    parseVndInteger(invAmount),
    parseVndInteger(paidBank),
    parseVndInteger(offsetAmount),
    parseVndInteger(cashAmount),
    hasOffsetContract
  );

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              6 Công Cụ Đối Chiếu Số Liệu Tài Chính & Rủi Ro Thuế Kiểu Việt
            </CardTitle>
            <CardDescription className="text-sm mt-1">
              Phần mềm hóa giải 5 nút thắt số liệu thật: Nợ liên kết 37 tỷ, Dở dang 26 tỷ, Nợ xấu bê tông 3.11 tỷ, Dòng tiền & Doanh thu 134 tỷ.
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200 self-start sm:self-auto">
            Chuẩn Nghị Định 132/2020 & TT 96/2015
          </Badge>
        </div>

        {/* Sub tabs navigation */}
        <div className="flex flex-wrap gap-2 pt-4 border-t mt-4">
          <Button
            size="sm"
            variant={activeSubTab === 'ebitda' ? 'default' : 'outline'}
            onClick={() => setActiveSubTab('ebitda')}
            className="text-xs"
          >
            🔥 1. Trần Lãi Vay 30% EBITDA (Nợ 37 tỷ)
          </Button>
          <Button
            size="sm"
            variant={activeSubTab === 'wip154' ? 'default' : 'outline'}
            onClick={() => setActiveSubTab('wip154')}
            className="text-xs"
          >
            🏗️ 2. Dở Dang TK 154 (Treo 26 tỷ)
          </Button>
          <Button
            size="sm"
            variant={activeSubTab === 'baddebt' ? 'default' : 'outline'}
            onClick={() => setActiveSubTab('baddebt')}
            className="text-xs"
          >
            📉 3. Nợ Xấu TK 2293 (3.11 tỷ Bê tông)
          </Button>
          <Button
            size="sm"
            variant={activeSubTab === 'revenue' ? 'default' : 'outline'}
            onClick={() => setActiveSubTab('revenue')}
            className="text-xs"
          >
            📊 4. Doanh Thu 511 vs Hóa Đơn GTGT
          </Button>
          <Button
            size="sm"
            variant={activeSubTab === 'bank331' ? 'default' : 'outline'}
            onClick={() => setActiveSubTab('bank331')}
            className="text-xs"
          >
            💳 5. Thanh Toán NH & Cấn Trừ 3 Bên
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* ================= TAB 1: EBITDA & NỢ LIÊN KẾT 37 TỶ ================= */}
        {activeSubTab === 'ebitda' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-lg border border-amber-200 dark:border-amber-800/60 text-sm">
              <div className="font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                Vấn đề trọng điểm: Khoản vay nợ liên kết 37 tỷ đồng tại Công ty TNHH Kiểu Việt
              </div>
              <p className="text-amber-800 dark:text-amber-300 text-xs mt-1 leading-relaxed">
                Theo <strong>Điều 16 Nghị định 132/2020/NĐ-CP</strong>, tổng chi phí lãi vay thuần được trừ khi xác định thu nhập chịu thuế TNDN <strong>không vượt quá 30% tổng EBITDA</strong> (Lợi nhuận thuần + Lãi vay ròng + Khấu hao). Phần chi phí lãi vay vượt trần bị loại khỏi chi phí hợp lý nhưng <strong>được chuyển sang kỳ tính thuế tiếp theo trong thời hạn không quá 5 năm</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Lợi nhuận thuần từ HĐKD (VND)</label>
                <Input 
                  type="text" 
                  value={ebitdaProfit} 
                  onChange={(e) => setEbitdaProfit(e.target.value)} 
                  className="font-mono text-sm"
                />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(ebitdaProfit))}</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Chi phí Lãi vay thuần trong kỳ (VND)</label>
                <Input 
                  type="text" 
                  value={ebitdaInterest} 
                  onChange={(e) => setEbitdaInterest(e.target.value)} 
                  className="font-mono text-sm"
                />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(ebitdaInterest))}</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Chi phí Khấu hao TSCĐ trong kỳ (VND)</label>
                <Input 
                  type="text" 
                  value={ebitdaDeprec} 
                  onChange={(e) => setEbitdaDeprec(e.target.value)} 
                  className="font-mono text-sm"
                />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(ebitdaDeprec))}</span>
              </div>
            </div>

            {/* Bảng kết quả tính toán */}
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border space-y-4">
              <h4 className="font-bold text-sm text-foreground flex items-center justify-between">
                <span>KẾT QUẢ ĐỐI CHIẾU THEO NĐ 132/2020:</span>
                <Badge className={ebitdaResult.disallowedInterest > 0n ? 'bg-red-600' : 'bg-emerald-600'}>
                  {ebitdaResult.disallowedInterest > 0n ? 'CÓ CHI PHÍ BỊ LOẠI' : 'AN TOÀN TRONG TRẦN 30%'}
                </Badge>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border">
                  <div className="text-xs text-muted-foreground">Tổng EBITDA thuế</div>
                  <div className="text-base font-bold text-blue-600 dark:text-blue-400 mt-1">
                    {formatVnd(ebitdaResult.ebitda)}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border">
                  <div className="text-xs text-muted-foreground">Trần lãi vay 30% EBITDA</div>
                  <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                    {formatVnd(ebitdaResult.interestCap30Percent)}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border">
                  <div className="text-xs text-muted-foreground">Chi phí lãi vay được trừ</div>
                  <div className="text-base font-bold text-foreground mt-1">
                    {formatVnd(ebitdaResult.netInterestExpense - ebitdaResult.disallowedInterest)}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border">
                  <div className="text-xs text-muted-foreground">Chi phí bị loại (vượt trần)</div>
                  <div className={`text-base font-bold mt-1 ${ebitdaResult.disallowedInterest > 0n ? 'text-red-600' : 'text-slate-400'}`}>
                    {formatVnd(ebitdaResult.disallowedInterest)}
                  </div>
                </div>
              </div>

              {ebitdaResult.disallowedInterest > 0n ? (
                <div className="bg-red-50 dark:bg-red-950/40 p-4 rounded-lg border border-red-200 dark:border-red-900/60 text-xs text-red-800 dark:text-red-300 space-y-2">
                  <div className="font-bold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    HƯỚNG DẪN GIẢI TRÌNH CHO KẾ TOÁN KIỂU VIỆT:
                  </div>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    <li>Kê khai số tiền <strong>{formatVnd(ebitdaResult.disallowedInterest)}</strong> vào chỉ tiêu <strong>B4</strong> trên Tờ khai quyết toán thuế TNDN (Mẫu 03/TNDN).</li>
                    <li>Lập bảng theo dõi chuyển chi phí lãi vay không được trừ theo <strong>Phụ lục I - NĐ 132/2020</strong> để chuyển tiếp sang niên độ 2026–2030 (hạn 5 năm).</li>
                    <li>Chuẩn bị sẵn Hợp đồng vay vốn, Chứng từ giải ngân, Chứng từ thanh toán lãi và Báo cáo kiểm toán độc lập của bên liên kết.</li>
                  </ul>
                </div>
              ) : (
                <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-200 text-xs text-emerald-800 dark:text-emerald-300">
                  ✅ Toàn bộ chi phí lãi vay nằm trong giới hạn 30% EBITDA. Được tính 100% vào chi phí hợp lý được trừ khi tính thuế TNDN.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 2: DỞ DANG TK 154 (26 TỶ) ================= */}
        {activeSubTab === 'wip154' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-blue-50 dark:bg-blue-950/40 p-4 rounded-lg border border-blue-200 text-sm">
              <div className="font-semibold text-blue-900 dark:text-blue-200 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                Vấn đề trọng điểm: Số dư Chi phí SXKD dở dang TK 154 treo 26 tỷ đồng
              </div>
              <p className="text-blue-800 dark:text-blue-300 text-xs mt-1 leading-relaxed">
                Đoàn kiểm tra thuế sẽ tập trung soi: <strong>Có công trình nào đã xuất hóa đơn hoặc đã bàn giao đưa vào sử dụng nhưng chưa kết chuyển giá vốn 632 hay không?</strong> Vật tư gỗ nhập xưởng Phú Tài, ca máy công trình và trạm bê tông có bị tồn đọng ảo?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Số dư đầu kỳ TK 154 (VND)</label>
                <Input value={wipOpening} onChange={(e) => setWipOpening(e.target.value)} className="font-mono text-sm" />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(wipOpening))}</span>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Chi phí phát sinh TK 154 (VND)</label>
                <Input value={wipIncurred} onChange={(e) => setWipIncurred(e.target.value)} className="font-mono text-sm" />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(wipIncurred))}</span>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Kết chuyển giá vốn TK 632 (VND)</label>
                <Input value={wipCogs632} onChange={(e) => setWipCogs632(e.target.value)} className="font-mono text-sm" />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(wipCogs632))}</span>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Số dư thực tế sổ cái cuối kỳ (VND)</label>
                <Input value={wipClosing} onChange={(e) => setWipClosing(e.target.value)} className="font-mono text-sm" />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(wipClosing))}</span>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Đối chiếu số dư 154:</span>
                <span className="text-sm font-mono font-bold">
                  Kỳ vọng: {formatVnd(wipResult.calculatedClosing154)} | Thực tế: {formatVnd(wipResult.closing154)}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border text-xs text-foreground space-y-1">
                <div className="font-bold text-blue-600">Khuyến nghị giải trình với Đoàn Thuế:</div>
                <p>{wipResult.recommendation}</p>
                <p className="text-muted-foreground mt-2">
                  * <strong>Căn cứ:</strong> Thông tư 96/2015/TT-BTC Điều 4 cho phép trích trước chi phí theo hợp đồng (TK 335) nếu công trình đã tính vào doanh thu nhưng chưa có đủ chứng từ nghiệm thu phụ.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: NỢ XẤU TK 2293 (3.11 TỶ) ================= */}
        {activeSubTab === 'baddebt' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-lg border border-amber-200 text-sm">
              <div className="font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                Vấn đề trọng điểm: 3.11 tỷ nợ xấu cung cấp Bê tông & VLXD cần trích lập dự phòng
              </div>
              <p className="text-amber-800 dark:text-amber-300 text-xs mt-1 leading-relaxed">
                Theo <strong>Điều 6 Thông tư 48/2019/TT-BTC</strong>: Trích lập nợ quá hạn từ 6 tháng đến dưới 1 năm (30%), 1 năm đến dưới 2 năm (50%), 2 năm đến dưới 3 năm (70%), từ 3 năm trở lên (100%). <strong>Bắt buộc phải có Biên bản đối chiếu công nợ hoặc Giấy báo đòi nợ có ký nhận</strong> thì Thuế mới công nhận là chi phí được trừ!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Khoản nợ khó đòi (VND)</label>
                <Input value={badDebtAmount} onChange={(e) => setBadDebtAmount(e.target.value)} className="font-mono text-sm" />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(badDebtAmount))}</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Số tháng quá hạn theo hợp đồng</label>
                <Input 
                  type="number" 
                  value={badDebtMonths} 
                  onChange={(e) => setBadDebtMonths(parseInt(e.target.value) || 0)} 
                  className="font-mono text-sm"
                />
                <span className="text-[11px] text-muted-foreground">Tỷ lệ trích lập: <strong>{badDebtResult.rate * 100}%</strong></span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hasReconDoc} 
                  onChange={(e) => setHasReconDoc(e.target.checked)} 
                  className="w-4 h-4 rounded text-blue-600"
                />
                Có Biên bản đối chiếu công nợ xác nhận chữ ký 2 bên
              </label>

              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hasReminderDocs} 
                  onChange={(e) => setHasReminderDocs(e.target.checked)} 
                  className="w-4 h-4 rounded text-blue-600"
                />
                Có Công văn / Giấy báo đòi nợ có đóng dấu bưu điện chuyển phát
              </label>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border">
                  <div className="text-xs text-muted-foreground">Tỷ lệ trích lập TT 48</div>
                  <div className="text-lg font-bold text-blue-600">{badDebtResult.rate * 100}%</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border">
                  <div className="text-xs text-muted-foreground">Số tiền dự phòng TK 2293</div>
                  <div className="text-lg font-bold text-amber-600">{formatVnd(badDebtResult.provisionAmount)}</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border">
                  <div className="text-xs text-muted-foreground">Thuế chấp nhận được trừ?</div>
                  <div className={`text-lg font-bold ${badDebtResult.taxDeductible ? 'text-emerald-600' : 'text-red-600'}`}>
                    {badDebtResult.taxDeductible ? 'HỢP LỆ (ĐƯỢC TRỪ)' : 'BỊ LOẠI KHI THANH TRA'}
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{badDebtResult.notes}</p>
            </div>
          </div>
        )}

        {/* ================= TAB 4: DOANH THU 511 VS HÓA ĐƠN ================= */}
        {activeSubTab === 'revenue' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border text-sm">
              <div className="font-semibold flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                Cầu nối Doanh thu kế toán (TK 511) với Tổng doanh thu trên Hóa đơn GTGT
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Kiểm tra chênh lệch do đặc thù ngành xây dựng và xuất khẩu nội thất: Xuất hóa đơn theo tiến độ nghiệm thu (VAS 14), doanh thu chưa thực hiện, hàng đổi trả.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Doanh thu sổ sách TK 511 (VND)</label>
                <Input value={rev511} onChange={(e) => setRev511(e.target.value)} className="font-mono text-sm" />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(rev511))}</span>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Tổng doanh thu trên Hóa đơn GTGT</label>
                <Input value={revInvoices} onChange={(e) => setRevInvoices(e.target.value)} className="font-mono text-sm" />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(revInvoices))}</span>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Chênh lệch thời điểm nghiệm thu (VAS 14)</label>
                <Input value={revTiming} onChange={(e) => setRevTiming(e.target.value)} className="font-mono text-sm" />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(revTiming))}</span>
              </div>
            </div>

            <div className="p-4 rounded-lg border bg-slate-50 dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs text-muted-foreground">Chênh lệch chưa giải trình được:</div>
                <div className="text-lg font-bold font-mono text-foreground">{formatVnd(revResult.unexplainedDiff)}</div>
                <p className="text-xs text-muted-foreground mt-1">{revResult.riskMessage}</p>
              </div>
              <Badge className={revResult.severity === 'normal' ? 'bg-emerald-600' : 'bg-amber-600'}>
                {revResult.severity === 'normal' ? 'KHỚP ĐÚNG CHỨNG TỪ' : 'CẦN GIẢI TRÌNH BỔ SUNG'}
              </Badge>
            </div>
          </div>
        )}

        {/* ================= TAB 5: THANH TOÁN NGÂN HÀNG & CẤN TRỪ ================= */}
        {activeSubTab === 'bank331' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-lg border border-emerald-200 text-sm">
              <div className="font-semibold text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Kiểm tra điều kiện khấu trừ thuế GTGT & chi phí TNDN đối với Hóa đơn &gt; 20 triệu
              </div>
              <p className="text-emerald-800 dark:text-emerald-300 text-xs mt-1">
                Các nghiệp vụ mua xăng dầu xe máy công trình, cát đá VLXD, cừ Larsen thanh toán qua Ủy nhiệm chi (TK 112) hoặc cấn trừ công nợ 3 bên.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Giá trị Hóa đơn mua vào (VND)</label>
                <Input value={invAmount} onChange={(e) => setInvAmount(e.target.value)} className="font-mono text-sm" />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(invAmount))}</span>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Đã chuyển khoản Ngân hàng (TK 112)</label>
                <Input value={paidBank} onChange={(e) => setPaidBank(e.target.value)} className="font-mono text-sm" />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(paidBank))}</span>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Cấn trừ công nợ vật tư / hàng hóa</label>
                <Input value={offsetAmount} onChange={(e) => setOffsetAmount(e.target.value)} className="font-mono text-sm" />
                <span className="text-[11px] text-muted-foreground">{formatVnd(parseVndInteger(offsetAmount))}</span>
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hasOffsetContract} 
                  onChange={(e) => setHasOffsetContract(e.target.checked)} 
                  className="w-4 h-4 rounded text-blue-600"
                />
                Đã có Biên bản cấn trừ công nợ đối trừ 2 bên / Hợp đồng có quy định thanh toán bù trừ
              </label>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Đánh giá hồ sơ thuế:</span>
                <Badge className={bankResult.vatDeductible ? 'bg-emerald-600' : 'bg-red-600'}>
                  {bankResult.vatDeductible ? 'ĐỦ ĐIỀU KIỆN KHẤU TRỪ' : 'RỦI RO BỊ LOẠI THUẾ'}
                </Badge>
              </div>
              <p className="text-xs font-semibold text-foreground">{bankResult.riskWarning}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};