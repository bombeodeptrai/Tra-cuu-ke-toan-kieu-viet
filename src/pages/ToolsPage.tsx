import React, { useState } from 'react';
import { 
  Calculator, DollarSign, Calendar, AlertTriangle, ShieldCheck, 
  ArrowRightLeft, TrendingDown, Percent, FileText, CheckCircle2, ChevronRight, 
  HelpCircle, Clock, Truck, Layers, Sparkles, Building2, Download
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

export function ToolsPage() {
  const navigate = useNavigate();

  // ==========================================
  // TAB 1: THUẾ TNCN
  // ==========================================
  const [tncnIncome, setTncnIncome] = useState<number>(25000000);
  const [dependents, setDependents] = useState<number>(1);
  const [insuranceDeduction, setInsuranceDeduction] = useState<number>(2625000);
  const [tncnLawVersion, setTncnLawVersion] = useState<'current' | '2026' | 'compare'>('compare');

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

  // ==========================================
  // TAB 2: GROSS -> NET & CHI PHÍ DOANH NGHIỆP
  // ==========================================
  const [grossSalary, setGrossSalary] = useState<number>(20000000);
  const [payrollRegion, setPayrollRegion] = useState<number>(1);
  
  const BASE_SALARY = 2340000;
  const CAP_BHXH_BHYT = 20 * BASE_SALARY; // 46.800.000 đ
  const MIN_WAGES = [4960000, 4410000, 3860000, 3450000];
  const CAP_BHTN = 20 * MIN_WAGES[payrollRegion - 1];

  const salaryForBhxh = Math.min(grossSalary, CAP_BHXH_BHYT);
  const salaryForBhtn = Math.min(grossSalary, CAP_BHTN);

  const eeBhxh = salaryForBhxh * 0.08;
  const eeBhyt = salaryForBhxh * 0.015;
  const eeBhtn = salaryForBhtn * 0.01;
  const totalEeInsurance = eeBhxh + eeBhyt + eeBhtn;

  const erBhxh = salaryForBhxh * 0.175;
  const erBhyt = salaryForBhxh * 0.03;
  const erBhtn = salaryForBhtn * 0.01;
  const erKpcd = grossSalary * 0.02;
  const totalErCost = grossSalary + erBhxh + erBhyt + erBhtn + erKpcd;

  const netSalaryEstimate = grossSalary - totalEeInsurance;

  // ==========================================
  // TAB 3: TÍNH TIỀN PHẠT CHẬM NỘP THUẾ
  // ==========================================
  const [taxDebt, setTaxDebt] = useState<number>(50000000);
  const [dueDate, setDueDate] = useState<string>('2026-01-30');
  const [payDate, setPayDate] = useState<string>('2026-03-31');

  const calcDaysLate = () => {
    const d1 = new Date(dueDate);
    const d2 = new Date(payDate);
    const diffTime = d2.getTime() - d1.getTime();
    if (diffTime <= 0) return 0;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysLate = calcDaysLate();
  const latePenalty = taxDebt * 0.0003 * daysLate;

  // ==========================================
  // TAB 4: TÍNH KHẤU HAO TSCĐ (TT 45/2013 & TT 147)
  // ==========================================
  const ASSET_PRESETS = [
    { name: 'Máy móc, thiết bị thi công (xe xúc, xe lu, cẩu tháp, máy ủi)', minYears: 5, maxYears: 10, defaultYears: 6, defaultCost: 1850000000, target: 'construction' },
    { name: 'Phương tiện vận tải (xe ô tô tải, xe ben, bán tải công trường)', minYears: 6, maxYears: 10, defaultYears: 7, defaultCost: 920000000, target: 'construction' },
    { name: 'Thiết bị tin học, đo đạc trắc địa (máy toàn đạc, máy tính văn phòng)', minYears: 3, maxYears: 5, defaultYears: 3, defaultCost: 45000000, target: 'office' },
    { name: 'Nhà cửa, lán trại vật kiến trúc phục vụ ban điều hành công trường', minYears: 5, maxYears: 15, defaultYears: 5, defaultCost: 250000000, target: 'construction' },
    { name: 'Văn phòng phẩm, thiết bị quản lý trụ sở Kiểu Việt', minYears: 3, maxYears: 8, defaultYears: 4, defaultCost: 60000000, target: 'office' }
  ];

  const [selectedAssetIdx, setSelectedAssetIdx] = useState<number>(0);
  const [assetOriginalCost, setAssetOriginalCost] = useState<number>(1850000000);
  const [assetYears, setAssetYears] = useState<number>(6);
  const [assetMonthsUsed, setAssetMonthsUsed] = useState<number>(14);

  const selectedPreset = ASSET_PRESETS[selectedAssetIdx];
  const yearlyDepreciation = assetOriginalCost / (assetYears || 1);
  const monthlyDepreciation = yearlyDepreciation / 12;
  const accumulatedDepreciation = Math.min(assetOriginalCost, monthlyDepreciation * assetMonthsUsed);
  const remainingAssetValue = Math.max(0, assetOriginalCost - accumulatedDepreciation);

  // ==========================================
  // TAB 5: LỊCH THUẾ & BÁO CÁO KẾ TOÁN (TAX CALENDAR)
  // ==========================================
  const TAX_DEADLINES = [
    {
      id: "td1",
      period: "Hàng tháng (ngày 20)",
      title: "Nộp Tờ khai thuế GTGT & TNCN tháng trước",
      agency: "Chi cục Thuế quản lý trực tiếp",
      dueDateText: "Ngày 20 hàng tháng",
      formCode: "01/GTGT & 05/KK-TNCN",
      description: "Áp dụng cho doanh nghiệp có doanh thu năm trước liền kề > 50 tỷ đồng kê khai thuế theo tháng.",
      badge: "Định kỳ tháng"
    },
    {
      id: "td2",
      period: "30/01 hàng năm",
      title: "Nộp Lệ phí môn bài & Tờ khai môn bài (nếu có thay đổi)",
      agency: "Kho bạc Nhà nước / Ngân hàng nộp thuế",
      dueDateText: "30 tháng 01 hàng năm",
      formCode: "Nghị định 139 & 22",
      description: "Vốn điều lệ > 10 tỷ: 3.000.000đ/năm. Vốn điều lệ ≤ 10 tỷ: 2.000.000đ/năm. Chi nhánh/VPĐD: 1.000.000đ/năm.",
      badge: "Đầu năm"
    },
    {
      id: "td3",
      period: "30/01 hàng năm",
      title: "Hạn Tờ khai GTGT, TNCN Quý IV & Tạm nộp Thuế TNDN Quý IV",
      agency: "Cơ quan Thuế",
      dueDateText: "Ngày 30 tháng 01",
      formCode: "01/GTGT, 05/KK, TNDN",
      description: "Tổng số thuế TNDN đã tạm nộp của 04 quý phải đạt tối thiểu 80% số thuế TNDN phải nộp theo quyết toán năm.",
      badge: "Quý IV"
    },
    {
      id: "td4",
      period: "31/03 hàng năm (90 ngày)",
      title: "Quyết toán Thuế TNDN, TNCN & Báo cáo tài chính (BCTC) năm",
      agency: "Chi cục Thuế & Phòng Thống kê",
      dueDateText: "Ngày 31 tháng 03",
      formCode: "BCTC, 03/TNDN, 05/QTT",
      description: "Hạn chót nộp toàn bộ BCTC theo TT 200 / TT 99, Quyết toán thuế TNDN (Mẫu 03/TNDN) và Quyết toán thuế TNCN.",
      badge: "Trọng tâm năm"
    },
    {
      id: "td5",
      period: "30/04 hàng năm",
      title: "Tờ khai thuế GTGT, TNCN Quý I & Tạm nộp Thuế TNDN Quý I",
      agency: "Cơ quan Thuế",
      dueDateText: "Ngày cuối cùng tháng 4 (30/04)",
      formCode: "01/GTGT, 05/KK-TNCN",
      description: "Hạn nộp hồ sơ khai thuế quý I cho doanh nghiệp kê khai theo quý và nộp tiền thuế phát sinh.",
      badge: "Quý I"
    },
    {
      id: "td6",
      period: "31/07 hàng năm",
      title: "Tờ khai thuế GTGT, TNCN Quý II & Tạm nộp Thuế TNDN Quý II",
      agency: "Cơ quan Thuế",
      dueDateText: "Ngày cuối cùng tháng 7 (31/07)",
      formCode: "01/GTGT, 05/KK-TNCN",
      description: "Hoàn thành nghĩa vụ thuế bán niên (6 tháng đầu năm), rà soát hóa đơn đầu vào - đầu ra.",
      badge: "Quý II"
    },
    {
      id: "td7",
      period: "31/10 hàng năm",
      title: "Tờ khai thuế GTGT, TNCN Quý III & Tạm nộp Thuế TNDN Quý III",
      agency: "Cơ quan Thuế",
      dueDateText: "Ngày cuối cùng tháng 10 (31/10)",
      formCode: "01/GTGT, 05/KK-TNCN",
      description: "Ước tính doanh thu và lợi nhuận cả năm để điều chỉnh số tạm nộp thuế TNDN Quý III hợp lý.",
      badge: "Quý III"
    }
  ];

  const formatVnd = (num: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(num));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Banner Doanh Nghiệp */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white p-6 sm:p-8 md:p-10 shadow-lg">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-emerald-100 text-xs font-semibold border border-white/20">
            <Building2 className="h-3.5 w-3.5 text-emerald-300" />
            CÔNG TY CỔ PHẦN KIỂU VIỆT — BỘ TIỆN ÍCH KẾ TOÁN THỰC CHIẾN
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            Bộ Tiện Ích Kế Toán, Thuế & Lịch Tuân Thủ 2026
          </h1>
          <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed font-normal">
            Công cụ tính toán tự động chuẩn xác theo luật định: So sánh Thuế TNCN (Luật 109/2025), Lương Gross-Net (Trần 46.8tr), Phạt chậm nộp thuế 0.03%, Khấu hao TSCĐ theo TT 45/2013 và Lịch nhắc hạn báo cáo thuế.
          </p>
        </div>
      </div>

      {/* 5 TABS TIỆN ÍCH */}
      <Tabs defaultValue="calendar" className="space-y-6">
        <TabsList className="bg-muted p-1 rounded-2xl w-full flex flex-wrap sm:inline-flex h-auto gap-1">
          <TabsTrigger value="calendar" className="rounded-xl gap-2 font-semibold text-xs py-2 px-3">
            <Clock className="h-4 w-4 text-emerald-600" /> Lịch Thuế & Báo Cáo
          </TabsTrigger>
          <TabsTrigger value="depreciation" className="rounded-xl gap-2 font-semibold text-xs py-2 px-3">
            <Truck className="h-4 w-4 text-purple-600" /> Khấu Hao TSCĐ (TT 45)
          </TabsTrigger>
          <TabsTrigger value="tncn" className="rounded-xl gap-2 font-semibold text-xs py-2 px-3">
            <Calculator className="h-4 w-4 text-blue-600" /> Thuế TNCN (Luật 109)
          </TabsTrigger>
          <TabsTrigger value="gross-net" className="rounded-xl gap-2 font-semibold text-xs py-2 px-3">
            <DollarSign className="h-4 w-4 text-emerald-600" /> Lương Gross ➔ Net
          </TabsTrigger>
          <TabsTrigger value="penalty" className="rounded-xl gap-2 font-semibold text-xs py-2 px-3">
            <AlertTriangle className="h-4 w-4 text-red-600" /> Tiền Chậm Nộp Thuế
          </TabsTrigger>
        </TabsList>

        {/* 1. LỊCH THUẾ & BÁO CÁO TUÂN THỦ (MỚI) */}
        <TabsContent value="calendar" className="space-y-6">
          <div className="bg-card rounded-2xl border border-border/80 p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  Lịch Nộp Báo Cáo & Thuế Doanh Nghiệp (Áp dụng 2026)
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Nhắc nhở tự động các mốc nộp tờ khai, nộp tiền thuế vào Ngân sách Nhà nước để tránh bị phạt vi phạm hành chính
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => navigate('/bieu-mau')}
                className="gap-1.5 text-xs border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 w-fit shrink-0"
              >
                <Download className="h-3.5 w-3.5" /> Mở Kho Biểu Mẫu Tờ Khai
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TAX_DEADLINES.map((item) => (
                <div 
                  key={item.id} 
                  className="p-4 rounded-2xl border border-border/80 bg-background hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-300/60">
                        {item.dueDateText}
                      </span>
                      <Badge variant="outline" className="text-[11px]">
                        {item.badge}
                      </Badge>
                    </div>

                    <h4 className="font-bold text-base text-foreground">
                      {item.title}
                    </h4>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Nơi nhận: <strong>{item.agency}</strong>
                    </span>
                    <span className="font-mono font-semibold text-emerald-600">
                      Mẫu: {item.formCode}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 rounded-2xl text-xs space-y-1.5">
              <div className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                Chế tài xử phạt theo Nghị định 125/2020/NĐ-CP nếu nộp chậm:
              </div>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                • Nộp chậm từ 01 đến 05 ngày: Phạt cảnh cáo (nếu có tình tiết giảm nhẹ) hoặc phạt từ 2 - 5 triệu đồng.
                <br />• Nộp chậm từ 06 đến 30 ngày: Phạt tiền từ <strong>5.000.000đ đến 8.000.000đ</strong>.
                <br />• Nộp chậm từ 31 đến 60 ngày: Phạt tiền từ <strong>8.000.000đ đến 15.000.000đ</strong>.
                <br />• Quá hạn nộp tiền thuế còn bị phạt thêm <strong>0,03%/ngày</strong> trên số tiền thuế chậm nộp.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* 2. TÍNH KHẤU HAO TSCĐ (MỚI) */}
        <TabsContent value="depreciation" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-5 shadow-sm border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Truck className="h-5 w-5 text-purple-600" />
                  Thông số Tài sản cố định
                </CardTitle>
                <CardDescription>
                  Căn cứ Thông tư 45/2013/TT-BTC & Thông tư 147/2016/TT-BTC
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Nhóm tài sản cố định chuẩn</Label>
                  <select
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-xs"
                    value={selectedAssetIdx}
                    onChange={(e) => {
                      const idx = Number(e.target.value);
                      setSelectedAssetIdx(idx);
                      const p = ASSET_PRESETS[idx];
                      setAssetYears(p.defaultYears);
                      setAssetOriginalCost(p.defaultCost);
                    }}
                  >
                    {ASSET_PRESETS.map((p, idx) => (
                      <option key={idx} value={idx}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Nguyên giá tài sản (VNĐ - Chưa gồm VAT nếu khấu trừ)</Label>
                  <Input 
                    type="number"
                    step="10000000"
                    value={assetOriginalCost}
                    onChange={(e) => setAssetOriginalCost(Number(e.target.value) || 0)}
                    className="font-mono text-base font-semibold"
                  />
                  <div className="text-xs text-muted-foreground">{formatVnd(assetOriginalCost)}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Thời gian trích (Năm)</Label>
                    <Input 
                      type="number"
                      min="1"
                      max="30"
                      value={assetYears}
                      onChange={(e) => setAssetYears(Number(e.target.value) || 1)}
                      className="font-mono"
                    />
                    <span className="text-[11px] text-muted-foreground">
                      Khung TT45: {selectedPreset.minYears} - {selectedPreset.maxYears} năm
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Label>Số tháng đã sử dụng</Label>
                    <Input 
                      type="number"
                      min="0"
                      value={assetMonthsUsed}
                      onChange={(e) => setAssetMonthsUsed(Number(e.target.value) || 0)}
                      className="font-mono"
                    />
                    <span className="text-[11px] text-muted-foreground">
                      Tính khấu hao lũy kế
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl text-xs text-purple-900 dark:text-purple-200 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-purple-600" />
                    Điều kiện trích khấu hao hợp lý:
                  </div>
                  <p>• Phải có đầy đủ hóa đơn GTGT hợp pháp và chứng từ thanh toán không dùng tiền mặt (chuyển khoản từ TK Kiểu Việt).</p>
                  <p>• Phải có Quyết định đầu tư và Biên bản giao nhận TSCĐ đưa vào sử dụng (Mẫu 01-TSCĐ).</p>
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-7 space-y-4">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                    <span className="text-[11px] text-muted-foreground uppercase font-semibold">Khấu hao / Tháng</span>
                    <div className="text-xl font-bold text-purple-900 dark:text-purple-200 mt-1">{formatVnd(monthlyDepreciation)}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                    <span className="text-[11px] text-muted-foreground uppercase font-semibold">Khấu hao / Năm</span>
                    <div className="text-xl font-bold text-blue-900 dark:text-blue-200 mt-1">{formatVnd(yearlyDepreciation)}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 col-span-2 sm:col-span-1">
                    <span className="text-[11px] text-muted-foreground uppercase font-semibold">Giá trị còn lại</span>
                    <div className="text-xl font-bold text-emerald-900 dark:text-emerald-200 mt-1">{formatVnd(remainingAssetValue)}</div>
                  </div>
                </div>

                <div className="p-4 bg-muted/40 rounded-xl space-y-3 text-xs border border-border/60">
                  <div className="font-bold text-foreground">Bảng theo dõi hao mòn lũy kế:</div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Nguyên giá ban đầu (TK 211):</span>
                    <strong className="font-mono text-foreground">{formatVnd(assetOriginalCost)}</strong>
                  </div>
                  <div className="flex justify-between text-purple-700 dark:text-purple-300">
                    <span>Đã khấu hao lũy kế qua {assetMonthsUsed} tháng (TK 214):</span>
                    <strong className="font-mono">-{formatVnd(accumulatedDepreciation)}</strong>
                  </div>
                  <div className="pt-2 border-t border-border flex justify-between text-sm font-bold text-foreground">
                    <span>GIÁ TRỊ CÒN LẠI CỦA TÀI SẢN:</span>
                    <span className="font-mono text-emerald-600">{formatVnd(remainingAssetValue)}</span>
                  </div>
                </div>

                {/* Bút toán hạch toán theo TT 99/2025 */}
                <div className="p-4 bg-background border border-emerald-300 dark:border-emerald-800/80 rounded-2xl space-y-3">
                  <div className="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-emerald-600" />
                    Bút toán hạch toán hàng tháng (Theo Thông tư 99/2025):
                  </div>
                  <div className="space-y-2 text-xs">
                    {selectedPreset.target === 'construction' ? (
                      <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 font-mono space-y-1">
                        <div><strong className="text-emerald-800 dark:text-emerald-300">NỢ TK 154</strong> (1543 - Chi phí máy thi công công trình): {formatVnd(monthlyDepreciation)}</div>
                        <div><strong className="text-blue-800 dark:text-blue-300">CÓ TK 214</strong> (2141 - Hao mòn TSCĐ hữu hình): {formatVnd(monthlyDepreciation)}</div>
                        <p className="text-[11px] text-muted-foreground italic pt-1 font-sans">
                          * TT 99 bãi bỏ TK 6234, ghi thẳng vào chi phí dở dang TK 154 của công trình tương ứng.
                        </p>
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 font-mono space-y-1">
                        <div><strong className="text-emerald-800 dark:text-emerald-300">NỢ TK 642</strong> (Chi phí quản lý doanh nghiệp): {formatVnd(monthlyDepreciation)}</div>
                        <div><strong className="text-blue-800 dark:text-blue-300">CÓ TK 214</strong> (2141 - Hao mòn TSCĐ): {formatVnd(monthlyDepreciation)}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 3. TÍNH THUẾ TNCN (LUẬT 109/2025) */}
        <TabsContent value="tncn" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-5 shadow-sm border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-emerald-600" />
                  Thông số thu nhập & giảm trừ
                </CardTitle>
                <CardDescription>
                  Áp dụng theo Luật Thuế TNCN số 109/2025/QH15
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Thu nhập chịu thuế (Gross)</Label>
                  <Input 
                    type="number"
                    step="1000000"
                    value={tncnIncome}
                    onChange={(e) => setTncnIncome(Number(e.target.value) || 0)}
                    className="font-mono text-base font-semibold"
                  />
                  <div className="text-xs text-muted-foreground">{formatVnd(tncnIncome)}</div>
                </div>

                <div className="space-y-2">
                  <Label>Số người phụ thuộc</Label>
                  <Input 
                    type="number"
                    min="0"
                    max="10"
                    value={dependents}
                    onChange={(e) => setDependents(Number(e.target.value) || 0)}
                    className="font-mono"
                  />
                  <span className="text-xs text-muted-foreground">
                    Hiện hành: 4,4 tr/người • Mới 2026: <strong>6,2 tr/người</strong>
                  </span>
                </div>

                <div className="space-y-2">
                  <Label>Các khoản bảo hiểm bắt buộc (10.5%)</Label>
                  <Input 
                    type="number"
                    step="500000"
                    value={insuranceDeduction}
                    onChange={(e) => setInsuranceDeduction(Number(e.target.value) || 0)}
                    className="font-mono"
                  />
                  <div className="text-xs text-muted-foreground">{formatVnd(insuranceDeduction)}</div>
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-7 space-y-4">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase font-semibold">Thuế TNCN phải nộp (Luật 109/2025)</span>
                  <div className="text-3xl font-black text-emerald-600 mt-1">{formatVnd(newResult.tax)}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Thu nhập tính thuế sau giảm trừ: <strong>{formatVnd(newResult.taxable)}</strong>
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <TrendingDown className="h-4 w-4" /> Số tiền thuế tiết kiệm được mỗi tháng:
                    </span>
                    <span className="font-black text-base font-mono text-emerald-600">
                      +{formatVnd(Math.max(0, taxSaved))}
                    </span>
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Tương đương tiết kiệm khoảng <strong>{formatVnd(Math.max(0, taxSaved * 12))}</strong> tiền thuế mỗi năm cho người lao động Kiểu Việt.
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-muted/40 rounded-lg space-y-1">
                    <span className="text-muted-foreground font-semibold">Theo biểu cũ (7 bậc):</span>
                    <div className="font-mono font-bold text-foreground">{formatVnd(currentResult.tax)}</div>
                    <div className="text-[11px] text-muted-foreground">Giảm trừ: 11tr + {dependents}×4.4tr</div>
                  </div>
                  <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/40 rounded-lg space-y-1 border border-emerald-300/50">
                    <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Theo Luật 109/2025 (5 bậc):</span>
                    <div className="font-mono font-bold text-emerald-700 dark:text-emerald-400">{formatVnd(newResult.tax)}</div>
                    <div className="text-[11px] text-muted-foreground">Giảm trừ: 15.5tr + {dependents}×6.2tr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 4. GROSS -> NET */}
        <TabsContent value="gross-net" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-5 shadow-sm border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  Mức lương hợp đồng (Gross)
                </CardTitle>
                <CardDescription>
                  Áp dụng mức trần lương cơ sở 2.340.000đ (NĐ 73/2024/NĐ-CP)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Lương thỏa thuận Gross (VNĐ)</Label>
                  <Input 
                    type="number"
                    step="1000000"
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value) || 0)}
                    className="font-mono text-base font-semibold"
                  />
                  <div className="text-xs text-muted-foreground">{formatVnd(grossSalary)}</div>
                </div>

                <div className="space-y-2">
                  <Label>Vùng lương tối thiểu áp dụng</Label>
                  <select
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-xs"
                    value={payrollRegion}
                    onChange={(e) => setPayrollRegion(Number(e.target.value))}
                  >
                    <option value={1}>Vùng I (Hà Nội, TP.HCM, Quy Nhơn... - 4.960.000đ)</option>
                    <option value={2}>Vùng II (Đô thị loại 2, 3 - 4.410.000đ)</option>
                    <option value={3}>Vùng III (Thị xã, huyện - 3.860.000đ)</option>
                    <option value={4}>Vùng IV (Khu vực nông thôn - 3.450.000đ)</option>
                  </select>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-xs text-blue-800 dark:text-blue-300 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
                    Trần bảo hiểm áp dụng:
                  </div>
                  <p>• Trần BHXH, BHYT: <strong>{formatVnd(CAP_BHXH_BHYT)}</strong> (20 lần lương cơ sở 2,34tr).</p>
                  <p>• Trần BHTN: <strong>{formatVnd(CAP_BHTN)}</strong> (20 lần lương tối thiểu vùng).</p>
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-5 shadow-sm space-y-4">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase font-semibold">Thực lĩnh ước tính (Net)</span>
                    <div className="text-2xl font-black text-emerald-600 mt-0.5">{formatVnd(netSalaryEstimate)}</div>
                  </div>
                  <div className="space-y-1.5 text-xs text-muted-foreground border-t border-border pt-3">
                    <div className="flex justify-between">
                      <span>Lương Gross:</span>
                      <strong className="font-mono text-foreground">{formatVnd(grossSalary)}</strong>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>- Bảo hiểm người lao động (10.5%):</span>
                      <strong className="font-mono">-{formatVnd(totalEeInsurance)}</strong>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-5 shadow-sm space-y-4">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase font-semibold">Tổng chi phí Công ty Kiểu Việt</span>
                    <div className="text-2xl font-black text-blue-900 dark:text-blue-200 mt-0.5">{formatVnd(totalErCost)}</div>
                  </div>
                  <div className="space-y-1.5 text-xs text-muted-foreground border-t border-border pt-3">
                    <div className="flex justify-between">
                      <span>Lương hợp đồng:</span>
                      <strong className="font-mono text-foreground">{formatVnd(grossSalary)}</strong>
                    </div>
                    <div className="flex justify-between text-blue-700 dark:text-blue-300">
                      <span>+ Bảo hiểm & KPCĐ DN đóng (23.5%):</span>
                      <strong className="font-mono">+{formatVnd(totalErCost - grossSalary)}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 5. TÍNH TIỀN PHẠT CHẬM NỘP THUẾ */}
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
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
