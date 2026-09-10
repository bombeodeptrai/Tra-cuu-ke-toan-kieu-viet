// src/pages/ToolsPage.tsx
import React, { useState } from 'react';
import {
  Calculator,
  Building2,
  Stethoscope,
  Receipt,
  Scale,
  Percent,
  CheckCircle2,
  AlertTriangle,
  Info,
  DollarSign,
  TrendingDown,
  FileSpreadsheet,
  ArrowRightLeft
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export const ToolsPage: React.FC = () => {
  // Tool 1: VAT Allocation (TT 219)
  const [revenueExempt, setRevenueExempt] = useState<number>(1850000000); // 1.85 tỷ KCB
  const [revenueTaxable, setRevenueTaxable] = useState<number>(350000000); // 350 triệu thuốc/TBYT
  const [inputVatCommon, setInputVatCommon] = useState<number>(85000000); // 85 triệu VAT dùng chung

  const totalRevenue = revenueExempt + revenueTaxable;
  const taxableRatio = totalRevenue > 0 ? (revenueTaxable / totalRevenue) : 0;
  const deductibleVat = Math.round(inputVatCommon * taxableRatio);
  const nonDeductibleVat = inputVatCommon - deductibleVat;

  // Tool 2: Depreciation (TT 45 & TK 211)
  const [deviceCost, setDeviceCost] = useState<number>(2450000000); // 2.45 tỷ Cobas c501
  const [usefulLifeYears, setUsefulLifeYears] = useState<number>(8);
  const annualDepreciation = usefulLifeYears > 0 ? Math.round(deviceCost / usefulLifeYears) : 0;
  const monthlyDepreciation = Math.round(annualDepreciation / 12);

  // Tool 3: Loan Interest 30% EBITDA (ND 132)
  const [netOperatingProfit, setNetOperatingProfit] = useState<number>(4200000000);
  const [interestExpense, setInterestExpense] = useState<number>(1800000000);
  const [interestIncome, setInterestIncome] = useState<number>(120000000);
  const [depreciationCost, setDepreciationCost] = useState<number>(1100000000);

  const netInterest = Math.max(0, interestExpense - interestIncome);
  const ebitda = netOperatingProfit + netInterest + depreciationCost;
  const ebitdaCap30 = Math.round(ebitda * 0.3);
  const deductibleInterest = Math.min(netInterest, ebitdaCap30);
  const nondeductibleInterest = Math.max(0, netInterest - ebitdaCap30);

  // Tool 4: Tender Technical Scoring (ND 214)
  const [scoreCapacity, setScoreCapacity] = useState<number>(22); // Max 25
  const [scoreTech, setScoreTech] = useState<number>(50); // Max 55
  const [scoreService, setScoreService] = useState<number>(18); // Max 20
  const totalScore = scoreCapacity + scoreTech + scoreService;
  const isPassScore = totalScore >= 70;

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(num) + ' ₫';
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-teal-600" />
            Bộ Tiện Ích Tính Toán Y Tế & Quản Trị Thuế Kiểu Việt
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            4 công cụ chuyên sâu: Phân bổ thuế GTGT TT 219, Khấu hao TSCĐ y tế, Trần 30% EBITDA NĐ 132 & Chấm điểm E-HSMT NĐ 214.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-teal-300 text-teal-800 bg-teal-50 px-3 py-1 text-xs font-semibold">
            Chuẩn Kế Toán & Thuế 2026
          </Badge>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="vat-alloc" className="space-y-6">
        <TabsList className="bg-white border border-slate-200/90 p-1 rounded-2xl flex flex-wrap gap-1 shadow-xs h-auto">
          <TabsTrigger
            value="vat-alloc"
            className="rounded-xl text-xs font-bold py-2 px-3.5 data-[state=active]:bg-teal-700 data-[state=active]:text-white transition-all"
          >
            <Receipt className="w-4 h-4 mr-1.5" />
            1. Phân Bổ GTGT (TT 219)
          </TabsTrigger>
          <TabsTrigger
            value="deprec"
            className="rounded-xl text-xs font-bold py-2 px-3.5 data-[state=active]:bg-teal-700 data-[state=active]:text-white transition-all"
          >
            <Stethoscope className="w-4 h-4 mr-1.5" />
            2. Khấu Hao TBYT (TK 211)
          </TabsTrigger>
          <TabsTrigger
            value="ebitda-cap"
            className="rounded-xl text-xs font-bold py-2 px-3.5 data-[state=active]:bg-teal-700 data-[state=active]:text-white transition-all"
          >
            <TrendingDown className="w-4 h-4 mr-1.5" />
            3. Trần 30% EBITDA (NĐ 132)
          </TabsTrigger>
          <TabsTrigger
            value="tender-score"
            className="rounded-xl text-xs font-bold py-2 px-3.5 data-[state=active]:bg-teal-700 data-[state=active]:text-white transition-all"
          >
            <Scale className="w-4 h-4 mr-1.5" />
            4. Chấm Điểm E-HSMT (NĐ 214)
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: VAT Allocation */}
        <TabsContent value="vat-alloc" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input Form */}
            <Card className="lg:col-span-5 bg-white border-slate-200/90 shadow-xs rounded-2xl">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  Số Liệu Doanh Thu & Thuế Hòa Đức
                </CardTitle>
                <p className="text-[11px] text-slate-500">
                  Căn cứ Điều 14 Khoản 2 Thông tư 219/2013/TT-BTC
                </p>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Doanh thu Khám chữa bệnh KCT (VNĐ):
                  </label>
                  <Input
                    type="number"
                    value={revenueExempt}
                    onChange={(e) => setRevenueExempt(Number(e.target.value))}
                    className="bg-slate-50 border-slate-200 text-xs font-mono font-bold"
                  />
                  <span className="text-[10px] text-slate-400">Dịch vụ y tế không chịu thuế (Khoản 9 Điều 4 TT 219)</span>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Doanh thu Nhà thuốc/TBYT Chịu thuế (VNĐ):
                  </label>
                  <Input
                    type="number"
                    value={revenueTaxable}
                    onChange={(e) => setRevenueTaxable(Number(e.target.value))}
                    className="bg-slate-50 border-slate-200 text-xs font-mono font-bold"
                  />
                  <span className="text-[10px] text-slate-400">Bán thuốc, thực phẩm chức năng, thiết bị y tế (5% hoặc 10%)</span>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Tổng Thuế GTGT đầu vào dùng chung (VNĐ):
                  </label>
                  <Input
                    type="number"
                    value={inputVatCommon}
                    onChange={(e) => setInputVatCommon(Number(e.target.value))}
                    className="bg-slate-50 border-slate-200 text-xs font-mono font-bold"
                  />
                  <span className="text-[10px] text-slate-400">Tiền điện, nước, thuê nhà, sửa chữa máy móc chung</span>
                </div>
              </CardContent>
            </Card>

            {/* Results Panel */}
            <Card className="lg:col-span-7 bg-white border-slate-200/90 shadow-xs rounded-2xl">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Kết Quả Phân Bổ Kê Khai & Hạch Toán
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[11px] text-slate-500 font-medium">Tổng Doanh Thu Cơ Sở:</span>
                    <div className="text-sm font-black text-slate-900 font-mono">
                      {formatVND(totalRevenue)}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 space-y-1">
                    <span className="text-[11px] text-teal-800 font-medium">Tỷ Lệ Được Khấu Trừ:</span>
                    <div className="text-sm font-black text-teal-900 font-mono">
                      {(taxableRatio * 100).toFixed(2)} %
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-900 text-xs">
                      1. Thuế GTGT Được Khấu Trừ (Kê khai Chỉ tiêu 25):
                    </span>
                    <span className="text-sm font-black text-emerald-900 font-mono">
                      {formatVND(deductibleVat)}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                    Được trừ vào số thuế GTGT đầu ra phải nộp của hoạt động bán thuốc, bán TBYT.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-900 text-xs">
                      2. Thuế GTGT Không Được Khấu Trừ (Tính vào Chi Phí TNDN):
                    </span>
                    <span className="text-sm font-black text-amber-900 font-mono">
                      {formatVND(nonDeductibleVat)}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                    Hạch toán vào Nợ TK 642 / Có TK 133. Được tính vào chi phí được trừ hợp lý khi quyết toán thuế TNDN.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 2: Depreciation */}
        <TabsContent value="deprec" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-5 bg-white border-slate-200/90 shadow-xs rounded-2xl">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-slate-900">
                  Thông Số Thiết Bị & Khung Khấu Hao
                </CardTitle>
                <p className="text-[11px] text-slate-500">Thông tư 45/2013/TT-BTC & TK 211, TK 214</p>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Nguyên giá thiết bị y tế (VNĐ):
                  </label>
                  <Input
                    type="number"
                    value={deviceCost}
                    onChange={(e) => setDeviceCost(Number(e.target.value))}
                    className="bg-slate-50 border-slate-200 text-xs font-mono font-bold"
                  />
                  <span className="text-[10px] text-slate-400">Bao gồm giá mua + chi phí vận chuyển, lắp đặt, chạy thử</span>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Thời gian trích khấu hao (Số năm):
                  </label>
                  <Input
                    type="number"
                    value={usefulLifeYears}
                    onChange={(e) => setUsefulLifeYears(Number(e.target.value))}
                    className="bg-slate-50 border-slate-200 text-xs font-mono font-bold"
                  />
                  <span className="text-[10px] text-slate-400">Khung thiết bị y tế chuyên dùng: 5 - 12 năm</span>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-7 bg-white border-slate-200/90 shadow-xs rounded-2xl">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-slate-900">
                  Mức Khấu Hao & Hạch Toán Hàng Tháng
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
                    <span className="text-[11px] text-blue-800 font-bold">Khấu hao hàng năm:</span>
                    <div className="text-base font-black text-blue-900 font-mono">
                      {formatVND(annualDepreciation)}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 space-y-1">
                    <span className="text-[11px] text-teal-800 font-bold">Khấu hao hàng tháng:</span>
                    <div className="text-base font-black text-teal-900 font-mono">
                      {formatVND(monthlyDepreciation)}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                  <strong>Bút toán trích khấu hao hàng tháng:</strong>
                  <p className="font-mono text-slate-800">
                    Nợ TK 154 / 627 (Chi phí KCB chuyên môn) hoặc Nợ TK 642: {formatVND(monthlyDepreciation)}
                    <br />
                    Có TK 2141 (Hao mòn TSCĐ hữu hình): {formatVND(monthlyDepreciation)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 3: Loan Interest 30% EBITDA */}
        <TabsContent value="ebitda-cap" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-5 bg-white border-slate-200/90 shadow-xs rounded-2xl">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-slate-900">
                  Chỉ Tiêu Tài Chính Tính EBITDA
                </CardTitle>
                <p className="text-[11px] text-slate-500">Căn cứ Điều 16 Khoản 3 Nghị định 132/2020/NĐ-CP</p>
              </CardHeader>
              <CardContent className="pt-4 space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Lợi nhuận thuần từ HĐKD (VNĐ):
                  </label>
                  <Input
                    type="number"
                    value={netOperatingProfit}
                    onChange={(e) => setNetOperatingProfit(Number(e.target.value))}
                    className="bg-slate-50 border-slate-200 text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Chi phí lãi vay trong kỳ (VNĐ):
                  </label>
                  <Input
                    type="number"
                    value={interestExpense}
                    onChange={(e) => setInterestExpense(Number(e.target.value))}
                    className="bg-slate-50 border-slate-200 text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Doanh thu lãi tiền gửi/cho vay (VNĐ):
                  </label>
                  <Input
                    type="number"
                    value={interestIncome}
                    onChange={(e) => setInterestIncome(Number(e.target.value))}
                    className="bg-slate-50 border-slate-200 text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Chi phí khấu hao TSCĐ trong kỳ (VNĐ):
                  </label>
                  <Input
                    type="number"
                    value={depreciationCost}
                    onChange={(e) => setDepreciationCost(Number(e.target.value))}
                    className="bg-slate-50 border-slate-200 text-xs font-mono font-bold"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-7 bg-white border-slate-200/90 shadow-xs rounded-2xl">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-slate-900">
                  Xác Định Trần Chi Phí Lãi Vay Được Trừ
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[11px] text-slate-500 font-medium">EBITDA Kỳ Này:</span>
                    <div className="text-sm font-black text-slate-900 font-mono">
                      {formatVND(ebitda)}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 space-y-1">
                    <span className="text-[11px] text-teal-800 font-medium">Trần Lãi Vay 30%:</span>
                    <div className="text-sm font-black text-teal-900 font-mono">
                      {formatVND(ebitdaCap30)}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-900">Chi phí lãi vay ĐƯỢC TRỪ tính thuế TNDN:</span>
                    <span className="text-sm font-black text-emerald-900 font-mono">{formatVND(deductibleInterest)}</span>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border space-y-1 ${
                  nondeductibleInterest > 0
                    ? 'bg-rose-50/70 border-rose-300'
                    : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-bold ${nondeductibleInterest > 0 ? 'text-rose-900' : 'text-slate-700'}`}>
                      Lãi vay VƯỢT TRẦN (Loại trừ & chuyển sang 5 năm sau):
                    </span>
                    <span className="text-sm font-black font-mono">
                      {formatVND(nondeductibleInterest)}
                    </span>
                  </div>
                  {nondeductibleInterest > 0 && (
                    <p className="text-[11px] text-rose-700 pt-1">
                      ⚠️ Cần theo dõi chuyển lỗ/chi phí lãi vay trên Phụ lục giao dịch liên kết mẫu 01/NĐ132.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 4: Technical Scoring */}
        <TabsContent value="tender-score" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-5 bg-white border-slate-200/90 shadow-xs rounded-2xl">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-slate-900">
                  Thang Điểm Kỹ Thuật E-HSMT (Thang 100)
                </CardTitle>
                <p className="text-[11px] text-slate-500">Căn cứ NĐ 214/2025/NĐ-CP & TT 57/2025/TT-BYT</p>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>1. Năng lực & Kinh nghiệm (Tối đa 25đ):</span>
                    <span className="font-mono text-teal-700">{scoreCapacity} / 25</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="25"
                    value={scoreCapacity}
                    onChange={(e) => setScoreCapacity(Number(e.target.value))}
                    className="w-full accent-teal-700"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>2. Thông số kỹ thuật & Nhóm TT 57 (Tối đa 55đ):</span>
                    <span className="font-mono text-teal-700">{scoreTech} / 55</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="55"
                    value={scoreTech}
                    onChange={(e) => setScoreTech(Number(e.target.value))}
                    className="w-full accent-teal-700"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>3. Dịch vụ sau bán hàng & SLA (Tối đa 20đ):</span>
                    <span className="font-mono text-teal-700">{scoreService} / 20</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={scoreService}
                    onChange={(e) => setScoreService(Number(e.target.value))}
                    className="w-full accent-teal-700"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-7 bg-white border-slate-200/90 shadow-xs rounded-2xl">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-slate-900">
                  Kết Quả Đánh Giá Hồ Sơ Kỹ Thuật
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-700 text-xs">Tổng Điểm Kỹ Thuật Đạt Được:</span>
                  <span className="text-2xl font-black text-teal-800 font-mono">
                    {totalScore} / 100 Điểm
                  </span>
                </div>

                <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                  isPassScore
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900'
                    : 'bg-rose-50/70 border-rose-300 text-rose-900'
                }`}>
                  {isPassScore ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="w-6 h-6 text-rose-600 flex-shrink-0" />
                  )}
                  <div>
                    <div className="font-bold text-sm">
                      {isPassScore ? 'HỒ SƠ ĐẠT YÊU CẦU KỸ THUẬT' : 'HỒ SƠ KHÔNG ĐẠT YÊU CẦU KỸ THUẬT'}
                    </div>
                    <p className="text-[11px] leading-relaxed mt-0.5">
                      {isPassScore
                        ? 'Hồ sơ vượt ngưỡng tối thiểu (70 điểm) và đủ điều kiện để Tổ chuyên gia mở niêm phong Hồ sơ Đề xuất Tài chính.'
                        : 'Hồ sơ chưa đạt ngưỡng 70 điểm. Cần bổ sung tài liệu chứng minh xuất xứ G7/EU Nhóm 1 hoặc cam kết thời gian đáp ứng sự cố bảo hành trong vòng 24h.'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default ToolsPage;
