import React, { useState } from 'react';
import { 
  Calculator, DollarSign, Calendar, AlertTriangle, ShieldCheck, 
  ArrowRightLeft, TrendingDown, Percent, FileText, CheckCircle2, ChevronRight, HelpCircle 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ToolsPage() {
  // TAB 1: THUẾ TNCN
  const [tncnIncome, setTncnIncome] = useState<number>(25000000);
  const [dependents, setDependents] = useState<number>(1);
  const [insuranceDeduction, setInsuranceDeduction] = useState<number>(2625000); // 10.5% of 25m
  const [tncnLawVersion, setTncnLawVersion] = useState<'current' | '2026' | 'compare'>('compare');

  // Tính thuế biểu hiện hành (7 bậc, bản thân 11tr, phụ thuộc 4.4tr)
  const calcCurrentTncn = (gross: number, numDep: number, ins: number) => {
    const personalDeduction = 11000000;
    const depDeduction = numDep * 4400000;
    const taxable = Math.max(0, gross - ins - personalDeduction - depDeduction);
    
    let tax = 0;
    const brackets = [
      { limit: 5000000, rate: 0.05 },
      { limit: 10000000, rate: 0.10 },
      { limit: 18000000, rate: 0.15 },
      { limit: 32000000, rate: 0.20 },
      { limit: 52000000, rate: 0.25 },
      { limit: 80000000, rate: 0.30 },
      { limit: Infinity, rate: 0.35 }
    ];

    let prevLimit = 0;
    for (const b of brackets) {
      if (taxable > prevLimit) {
        const taxableInBracket = Math.min(taxable - prevLimit, b.limit - prevLimit);
        tax += taxableInBracket * b.rate;
        prevLimit = b.limit;
      } else {
        break;
      }
    }

    return { taxable, tax, personalDeduction, depDeduction };
  };

  // Tính thuế biểu Luật 109/2025 mới (5 bậc, bản thân 15.5tr, phụ thuộc 6.2tr)
  const calcNewTncn = (gross: number, numDep: number, ins: number) => {
    const personalDeduction = 15500000;
    const depDeduction = numDep * 6200000;
    const taxable = Math.max(0, gross - ins - personalDeduction - depDeduction);

    let tax = 0;
    const brackets = [
      { limit: 10000000, rate: 0.05 },
      { limit: 30000000, rate: 0.10 },
      { limit: 60000000, rate: 0.20 },
      { limit: 100000000, rate: 0.30 },
      { limit: Infinity, rate: 0.35 }
    ];

    let prevLimit = 0;
    for (const b of brackets) {
      if (taxable > prevLimit) {
        const taxableInBracket = Math.min(taxable - prevLimit, b.limit - prevLimit);
        tax += taxableInBracket * b.rate;
        prevLimit = b.limit;
      } else {
        break;
      }
    }

    return { taxable, tax, personalDeduction, depDeduction };
  };

  const currentResult = calcCurrentTncn(tncnIncome, dependents, insuranceDeduction);
  const newResult = calcNewTncn(tncnIncome, dependents, insuranceDeduction);
  const taxSaved = currentResult.tax - newResult.tax;

  // TAB 2: GROSS -> NET & CHI PHÍ DOANH NGHIỆP
  const [grossSalary, setGrossSalary] = useState<number>(20000000);
  const [payrollRegion, setPayrollRegion] = useState<number>(1); // Vùng 1: 4.96tr, Vùng 2: 4.41tr, Vùng 3: 3.86tr, Vùng 4: 3.45tr
  
  // Trần lương cơ sở 2.340.000đ (Nghị định 73/2024/NĐ-CP)
  const BASE_SALARY = 2340000;
  const CAP_BHXH_BHYT = 20 * BASE_SALARY; // 46.800.000 đ
  
  // Trần BHTN (20 lần lương tối thiểu vùng)
  const MIN_WAGES = [4960000, 4410000, 3860000, 3450000];
  const CAP_BHTN = 20 * MIN_WAGES[payrollRegion - 1];

  const salaryForBhxh = Math.min(grossSalary, CAP_BHXH_BHYT);
  const salaryForBhtn = Math.min(grossSalary, CAP_BHTN);

  // Người lao động đóng
  const eeBhxh = salaryForBhxh * 0.08;
  const eeBhyt = salaryForBhxh * 0.015;
  const eeBhtn = salaryForBhtn * 0.01;
  const totalEeIns = eeBhxh + eeBhyt + eeBhtn;

  // Thuế TNCN ước tính (1 người phụ thuộc)
  const eeTax = calcCurrentTncn(grossSalary, 1, totalEeIns).tax;
  const netSalary = grossSalary - totalEeIns - eeTax;

  // Công ty Kiểu Việt đóng
  const erBhxh = salaryForBhxh * 0.175; // 17% hưu trí/ốm đau/thai sản + 0.5% TNLĐ-BNN
  const erBhyt = salaryForBhxh * 0.03;
  const erBhtn = salaryForBhtn * 0.01;
  const erKpcd = grossSalary * 0.02; // Kinh phí công đoàn
  const totalErCost = grossSalary + erBhxh + erBhyt + erBhtn + erKpcd;

  // TAB 3: TÍNH TIỀN PHẠT CHẬM NỘP THUẾ
  const [taxDebt, setTaxDebt] = useState<number>(50000000);
  const [dueDate, setDueDate] = useState<string>('2026-03-31');
  const [payDate, setPayDate] = useState<string>('2026-05-15');

  const calcDaysLate = () => {
    const d1 = new Date(dueDate).getTime();
    const d2 = new Date(payDate).getTime();
    if (isNaN(d1) || isNaN(d2) || d2 <= d1) return 0;
    return Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
  };

  const daysLate = calcDaysLate();
  // 0.03% mỗi ngày theo Luật Quản lý thuế số 38/2019/QH14 Điều 59
  const latePenalty = Math.round(taxDebt * 0.0003 * daysLate);

  const formatVnd = (num: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header Kiểu Việt Brand */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-semibold mb-2">
            <Calculator className="h-3.5 w-3.5" />
            Kiểu Việt Utility Tools
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Bộ Tiện Ích Kế Toán Thực Chiến
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Công cụ tính tự động chuẩn xác theo Luật Thuế và chính sách tiền lương mới nhất
          </p>
        </div>
      </div>

      <Tabs defaultValue="tncn" className="w-full space-y-6">
        <TabsList className="flex w-full overflow-x-auto justify-start sm:grid sm:grid-cols-3 max-w-2xl bg-muted/60 p-1 rounded-xl gap-1">
          <TabsTrigger value="tncn" className="rounded-lg text-xs sm:text-sm font-semibold gap-1.5 shrink-0 whitespace-nowrap px-3">
            <Percent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Tính Thuế TNCN
          </TabsTrigger>
          <TabsTrigger value="payroll" className="rounded-lg text-xs sm:text-sm font-semibold gap-1.5 shrink-0 whitespace-nowrap px-3">
            <ArrowRightLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Gross ➔ Net & BHXH
          </TabsTrigger>
          <TabsTrigger value="penalty" className="rounded-lg text-xs sm:text-sm font-semibold gap-1.5 shrink-0 whitespace-nowrap px-3">
            <AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Phạt Chậm Nộp Thuế
          </TabsTrigger>
        </TabsList>

        {/* 1. MÁY TÍNH THUẾ TNCN */}
        <TabsContent value="tncn" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input form */}
            <Card className="lg:col-span-5 shadow-sm border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-emerald-600" />
                  Thông tin thu nhập tháng
                </CardTitle>
                <CardDescription>
                  Nhập thu nhập chịu thuế và các khoản giảm trừ
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Tổng thu nhập (Lương + Thưởng) (VNĐ)</Label>
                  <Input 
                    type="number" 
                    step="500000"
                    value={tncnIncome}
                    onChange={(e) => {
                      const val = Number(e.target.value) || 0;
                      setTncnIncome(val);
                      setInsuranceDeduction(Math.round(val * 0.105));
                    }}
                    className="font-mono text-base font-semibold"
                  />
                  <div className="text-xs text-muted-foreground">{formatVnd(tncnIncome)}</div>
                </div>

                <div className="space-y-2">
                  <Label>Số người phụ thuộc (người)</Label>
                  <Input 
                    type="number" 
                    min="0"
                    max="20"
                    value={dependents}
                    onChange={(e) => setDependents(Math.max(0, Number(e.target.value) || 0))}
                    className="font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Các khoản đóng bảo hiểm bắt buộc (10.5%)</Label>
                  <Input 
                    type="number"
                    value={insuranceDeduction}
                    onChange={(e) => setInsuranceDeduction(Number(e.target.value) || 0)}
                    className="font-mono"
                  />
                  <div className="text-xs text-muted-foreground">{formatVnd(insuranceDeduction)}</div>
                </div>

                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg text-xs text-emerald-800 dark:text-emerald-300 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Căn cứ pháp lý:
                  </div>
                  <p>• Luật số 109/2025/QH15 (Hiệu lực 01/07/2026): Bản thân 15.5tr, Phụ thuộc 6.2tr.</p>
                  <p>• Luật Thuế TNCN hiện hành: Bản thân 11tr, Phụ thuộc 4.4tr.</p>
                </div>
              </CardContent>
            </Card>

            {/* Bảng so sánh kết quả */}
            <div className="lg:col-span-7 space-y-6">
              {/* Thẻ chênh lệch tiết kiệm được */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-emerald-100 font-semibold">
                      Chênh lệch khi áp dụng Luật mới 109/2025
                    </span>
                    <div className="text-3xl font-extrabold mt-1">
                      {taxSaved > 0 ? `Tiết kiệm ${formatVnd(taxSaved)}/tháng` : 'Chưa phát sinh thuế'}
                    </div>
                  </div>
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                    <TrendingDown className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-xs text-emerald-100 mt-2">
                  {taxSaved > 0 
                    ? `Mỗi năm người lao động tiết kiệm được ${formatVnd(taxSaved * 12)} tiền thuế TNCN!`
                    : 'Thu nhập trong ngưỡng giảm trừ gia cảnh, không phải nộp thuế TNCN.'}
                </p>
              </div>

              {/* So sánh 2 biểu thuế */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Biểu hiện hành */}
                <Card className="border-border shadow-sm">
                  <CardHeader className="pb-3 border-b border-border/50">
                    <div className="text-xs text-muted-foreground font-semibold uppercase">Biểu hiện hành (7 Bậc)</div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {formatVnd(currentResult.tax)}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Giảm trừ: Bản thân 11tr • PT 4.4tr
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-3 text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thu nhập tính thuế:</span>
                      <strong className="font-mono">{formatVnd(currentResult.taxable)}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tổng giảm trừ:</span>
                      <span className="font-mono">{formatVnd(currentResult.personalDeduction + currentResult.depDeduction)}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Biểu mới 2026 */}
                <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50/20 shadow-sm">
                  <CardHeader className="pb-3 border-b border-emerald-200/50">
                    <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold uppercase">
                      Luật mới 2026 (5 Bậc)
                    </div>
                    <CardTitle className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                      {formatVnd(newResult.tax)}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Giảm trừ: Bản thân 15.5tr • PT 6.2tr
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-3 text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thu nhập tính thuế:</span>
                      <strong className="font-mono text-emerald-700 dark:text-emerald-400">{formatVnd(newResult.taxable)}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tổng giảm trừ:</span>
                      <span className="font-mono">{formatVnd(newResult.personalDeduction + newResult.depDeduction)}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 2. GROSS -> NET & CHI PHÍ DOANH NGHIỆP */}
        <TabsContent value="payroll" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-5 shadow-sm border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ArrowRightLeft className="h-5 w-5 text-emerald-600" />
                  Thông số lương nhân sự
                </CardTitle>
                <CardDescription>
                  Áp trần lương cơ sở 2.34tr (Nghị định 73/2024)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Mức lương thỏa thuận (Lương Gross) (VNĐ)</Label>
                  <Input 
                    type="number"
                    step="500000"
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value) || 0)}
                    className="font-mono text-base font-semibold"
                  />
                  <div className="text-xs text-muted-foreground">{formatVnd(grossSalary)}</div>
                </div>

                <div className="space-y-2">
                  <Label>Khu vực áp dụng lương tối thiểu vùng</Label>
                  <select
                    value={payrollRegion}
                    onChange={(e) => setPayrollRegion(Number(e.target.value))}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  >
                    <option value={1}>Vùng I (Hà Nội, TP.HCM, Quy Nhơn...) - 4.960.000đ</option>
                    <option value={2}>Vùng II (TP Pleiku, TX An Nhơn...) - 4.410.000đ</option>
                    <option value={3}>Vùng III (Huyện Tây Sơn, Phù Cát...) - 3.860.000đ</option>
                    <option value={4}>Vùng IV (Các vùng còn lại) - 3.450.000đ</option>
                  </select>
                </div>

                <div className="p-3 bg-muted/50 rounded-lg text-xs space-y-1.5 text-muted-foreground border border-border/50">
                  <div className="font-semibold text-foreground">Quy định trần đóng bảo hiểm:</div>
                  <p>• Mức lương cơ sở: <strong>2.340.000 đ/tháng</strong> (từ 01/07/2024)</p>
                  <p>• Mức trần đóng BHXH, BHYT (20 lần): <strong>46.800.000 đ</strong></p>
                  <p>• Mức trần đóng BHTN: <strong>{formatVnd(CAP_BHTN)}</strong></p>
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-7 space-y-4">
              {/* Tóm tắt Lương Thực Nhận (Net) */}
              <div className="bg-card border border-border rounded-xl p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase font-semibold">Lương thực nhận của Người Lao Động</span>
                    <div className="text-2xl font-black text-emerald-600 mt-0.5">{formatVnd(netSalary)}</div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold">
                    NET
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Lương Gross ban đầu:</span>
                    <strong className="font-mono text-foreground">{formatVnd(grossSalary)}</strong>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>- Bảo hiểm người lao động đóng (10.5%):</span>
                    <strong className="font-mono">-{formatVnd(totalEeIns)}</strong>
                  </div>
                  <div className="pl-3 text-[11px] text-muted-foreground space-y-0.5 border-l-2 border-red-200">
                    <div>• BHXH (8%): {formatVnd(eeBhxh)}</div>
                    <div>• BHYT (1.5%): {formatVnd(eeBhyt)}</div>
                    <div>• BHTN (1%): {formatVnd(eeBhtn)}</div>
                  </div>
                  <div className="flex justify-between text-amber-600">
                    <span>- Tạm tính Thuế TNCN (1 người phụ thuộc):</span>
                    <strong className="font-mono">-{formatVnd(eeTax)}</strong>
                  </div>
                </div>
              </div>

              {/* Chi phí thực tế Doanh nghiệp Kiểu Việt chịu */}
              <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-blue-200 dark:border-blue-800 pb-3">
                  <div>
                    <span className="text-xs text-blue-800 dark:text-blue-300 uppercase font-semibold">Tổng chi phí Công ty Kiểu Việt chi trả</span>
                    <div className="text-2xl font-black text-blue-900 dark:text-blue-200 mt-0.5">{formatVnd(totalErCost)}</div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-bold">
                    COMPANY COST
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Lương trả cho nhân sự:</span>
                    <strong className="font-mono text-foreground">{formatVnd(grossSalary)}</strong>
                  </div>
                  <div className="flex justify-between text-blue-700 dark:text-blue-300">
                    <span>+ Bảo hiểm & Phí Công đoàn Công ty đóng (23.5%):</span>
                    <strong className="font-mono">+{formatVnd(totalErCost - grossSalary)}</strong>
                  </div>
                  <div className="pl-3 text-[11px] text-muted-foreground space-y-0.5 border-l-2 border-blue-300">
                    <div>• BHXH (17.5% gồm TNLĐ-BNN): {formatVnd(erBhxh)}</div>
                    <div>• BHYT (3%): {formatVnd(erBhyt)}</div>
                    <div>• BHTN (1%): {formatVnd(erBhtn)}</div>
                    <div>• Kinh phí công đoàn (2%): {formatVnd(erKpcd)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 3. TÍNH TIỀN PHẠT CHẬM NỘP THUẾ */}
        <TabsContent value="penalty" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-5 shadow-sm border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                  Dữ liệu số tiền & ngày chậm nộp
                </CardTitle>
                <CardDescription>
                  Căn cứ Điều 59 Luật Quản lý thuế số 38/2019/QH14
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Số tiền thuế chậm nộp (VNĐ)</Label>
                  <Input 
                    type="number"
                    step="1000000"
                    value={taxDebt}
                    onChange={(e) => setTaxDebt(Number(e.target.value) || 0)}
                    className="font-mono text-base font-semibold"
                  />
                  <div className="text-xs text-muted-foreground">{formatVnd(taxDebt)}</div>
                </div>

                <div className="space-y-2">
                  <Label>Hạn nộp thuế cuối cùng theo luật</Label>
                  <Input 
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Ngày thực tế nộp thuế vào NSNN</Label>
                  <Input 
                    type="date"
                    value={payDate}
                    onChange={(e) => setPayDate(e.target.value)}
                  />
                </div>

                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg text-xs text-red-800 dark:text-red-300 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5">
                    <AlertTriangle className="h-4 w-4 text-red-600 shrink-0" />
                    Mức phạt chậm nộp luật định:
                  </div>
                  <p>• <strong>0,03%/ngày</strong> tính trên số tiền thuế chậm nộp.</p>
                  <p>• Quá 90 ngày kể từ ngày hết hạn nộp thuế, cơ quan thuế sẽ áp dụng biện pháp cưỡng chế trích tiền từ tài khoản ngân hàng!</p>
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-7 space-y-4">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase font-semibold">Tiền chậm nộp phải nộp thêm vào NSNN</span>
                  <div className="text-3xl font-black text-red-600 mt-1">{formatVnd(latePenalty)}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Thời gian chậm nộp: <strong>{daysLate} ngày</strong> (từ {dueDate} đến {payDate})
                  </p>
                </div>

                <div className="p-4 bg-muted/40 rounded-xl space-y-3 text-xs border border-border/50">
                  <div className="font-semibold text-foreground">Bảng tổng kết nghĩa vụ tài chính:</div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tiền thuế gốc phải nộp:</span>
                    <strong className="font-mono">{formatVnd(taxDebt)}</strong>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Tiền phạt chậm nộp (0.03% × {daysLate} ngày):</span>
                    <strong className="font-mono">+{formatVnd(latePenalty)}</strong>
                  </div>
                  <div className="pt-2 border-t border-border flex justify-between text-sm font-bold text-foreground">
                    <span>TỔNG CỘNG PHẢI NỘP:</span>
                    <span className="font-mono text-red-600">{formatVnd(taxDebt + latePenalty)}</span>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-lg text-xs text-amber-800 dark:text-amber-300">
                  💡 <strong>Lưu ý cho Kế toán Kiểu Việt:</strong> Tiền chậm nộp thuế KHÔNG được tính vào chi phí được trừ khi xác định thuế TNDN (theo Điều 4 Thông tư 96/2015/TT-BTC).
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
