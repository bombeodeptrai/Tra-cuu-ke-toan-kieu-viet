// src/pages/DashboardPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Stethoscope,
  FileCheck2,
  Building2,
  Scale,
  FileText,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  ArrowRight,
  Calculator,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MOCK_TENDER_PACKAGES, MOCK_MEDICAL_DEVICES, MOCK_HOA_DUC_FINANCE } from '@/data/mock-medical';
import { formatVnd } from '@/lib/utils';

export const DashboardPage: React.FC = () => {
  const currentFinance = MOCK_HOA_DUC_FINANCE[0];
  const totalTenderValue = MOCK_TENDER_PACKAGES.reduce((acc, t) => acc + t.estimatedBudgetVnd, 0n);
  const totalBidBond = MOCK_TENDER_PACKAGES.reduce((acc, t) => acc + t.bidBondAmountVnd, 0n);

  return (
    <div className="space-y-6">
      {/* Top Clinical Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-teal-900 text-white p-6 sm:p-8 shadow-md">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-xl shadow-xs border border-white/20">
              <img
                src="https://kieuviet.com.vn/wp-content/uploads/2024/10/logo-kieu-viet.png"
                alt="Kiểu Việt"
                className="h-8 object-contain"
              />
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Trung Tâm Chỉ Huy Đấu Thầu TBYT & Phòng Khám Hòa Đức
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Hệ Thống Quản Trị Đấu Thầu Y Tế & Điều Hành Thuế Phòng Khám
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Tuân thủ tuyệt đối quy định pháp luật hiện hành:{' '}
            <strong className="text-teal-300">Nghị định 214/2025/NĐ-CP</strong> (quy trình lựa chọn nhà thầu mới),{' '}
            <strong className="text-teal-300">Thông tư 57/2025/TT-BYT</strong> (phân 6 nhóm kỹ thuật TBYT dự thầu),{' '}
            <strong className="text-teal-300">Thông tư 24/2026/TT-BYT</strong> (lộ trình kiểm định an toàn) và kiểm soát giao dịch liên kết theo{' '}
            <strong className="text-teal-300">Nghị định 132/2020/NĐ-CP</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link to="/dau-thau">
              <Button className="bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs shadow-md shadow-teal-900/30 h-9">
                <Briefcase className="w-4 h-4 mr-2" />
                Soi Ma Trận E-HSMT
              </Button>
            </Link>
            <Link to="/tuan-thu-40">
              <Button className="bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-600 font-semibold text-xs h-9 shadow-xs">
                <FileCheck2 className="w-4 h-4 mr-2 text-teal-400" />
                Kiểm Tra 40 Tiêu Chí MD
              </Button>
            </Link>
            <Link to="/phong-kham-hoa-duc">
              <Button className="bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-600 font-semibold text-xs h-9 shadow-xs">
                <Calculator className="w-4 h-4 mr-2 text-teal-400" />
                Phân Bổ Thuế GTGT Hòa Đức
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid (4 crisp white clinical cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Gói thầu */}
        <Card className="bg-white border-slate-200/90 shadow-xs hover:shadow-md transition-shadow rounded-2xl">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Gói Thầu Dự Thầu
              </span>
              <div className="p-2 rounded-xl bg-teal-50 text-teal-600">
                <Briefcase className="w-4 h-4" />
              </div>
            </div>
            <CardTitle className="text-2xl font-black text-slate-900">
              {formatVnd(totalTenderValue)}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Quy mô đang chạy:</span>
              <span className="font-bold text-teal-700">{MOCK_TENDER_PACKAGES.length} gói bệnh viện</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Bảo đảm dự thầu BIDV:</span>
              <span className="font-semibold text-slate-800">{formatVnd(totalBidBond)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Thiết bị y tế */}
        <Card className="bg-white border-slate-200/90 shadow-xs hover:shadow-md transition-shadow rounded-2xl">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Thiết Bị Chủ Lực
              </span>
              <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600">
                <Stethoscope className="w-4 h-4" />
              </div>
            </div>
            <CardTitle className="text-2xl font-black text-slate-900">
              {MOCK_MEDICAL_DEVICES.length} Hệ Thống
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Đạt Nhóm 1 (G7/EU):</span>
              <span className="font-bold text-cyan-700">6 / 8 thiết bị</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Kê khai giá Cổng BYT:</span>
              <span className="font-bold text-emerald-600">100% Hoàn thành</span>
            </div>
          </CardContent>
        </Card>

        {/* Card 3: 40 Tiêu chí tuân thủ */}
        <Card className="bg-white border-slate-200/90 shadow-xs hover:shadow-md transition-shadow rounded-2xl">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Tuân Thủ Đấu Thầu (MD)
              </span>
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <FileCheck2 className="w-4 h-4" />
              </div>
            </div>
            <CardTitle className="text-2xl font-black text-slate-900">
              40 / 40 Nhóm
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Chuẩn hóa MD01 - MD40:</span>
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px] font-bold">
                100% Pass
              </Badge>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Căn cứ pháp lý:</span>
              <span className="font-semibold text-slate-800">12 văn bản toàn văn</span>
            </div>
          </CardContent>
        </Card>

        {/* Card 4: Hòa Đức Clinic */}
        <Card className="bg-white border-slate-200/90 shadow-xs hover:shadow-md transition-shadow rounded-2xl">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Doanh Thu PK Hòa Đức
              </span>
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Building2 className="w-4 h-4" />
              </div>
            </div>
            <CardTitle className="text-2xl font-black text-slate-900">
              {formatVnd(currentFinance.revenueKcbNonTaxable + currentFinance.revenueMedicine5Percent + currentFinance.revenueSupplements10Percent)}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>VAT dùng chung khấu trừ:</span>
              <span className="font-bold text-emerald-700">{formatVnd(currentFinance.allocatedInputVatDeductible)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Khấu hao máy móc TK 211:</span>
              <span className="font-semibold text-slate-800">{formatVnd(currentFinance.depreciationMedicalEquipment)}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Critical Legal & Operational Callouts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-amber-50/80 border border-amber-200 p-4 space-y-2">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-xs sm:text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Trọng Điểm Đấu Thầu 2026: NĐ 214/2025 & TT 57/2025/TT-BYT</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            • <strong>Nghị định 214/2025/NĐ-CP</strong> (hiệu lực từ 04/8/2025) thay thế toàn diện Nghị định 24/2024/NĐ-CP. Mọi quy trình làm rõ E-HSMT, thẩm định kết quả lựa chọn nhà thầu và bảo đảm dự thầu phải tuân theo mẫu biểu mới.<br />
            • <strong>Thông tư 57/2025/TT-BYT</strong> (hiệu lực 15/02/2026) phân nhóm TBYT thành <strong>6 Nhóm kỹ thuật</strong> độc lập với mức độ rủi ro A/B/C/D. Dàn máy Cobas c502 và Sysmex XN-550 của Kiểu Việt đạt <strong>Nhóm 1</strong> (tiêu chuẩn cao nhất).
          </p>
        </div>

        <div className="rounded-2xl bg-teal-50/80 border border-teal-200 p-4 space-y-2">
          <div className="flex items-center gap-2 text-teal-900 font-bold text-xs sm:text-sm">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Trọng Điểm Thuế Phòng Khám Hòa Đức: TT 219 & NĐ 132/2020</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            • <strong>Phân bổ thuế GTGT đầu vào dùng chung (Điều 14 TT 219/2013):</strong> Doanh thu khám chữa bệnh không chịu thuế GTGT (Điều 5 Khoản 9), trong khi bán thuốc chịu thuế 5% và mỹ phẩm chịu 10%. Thuế GTGT đầu vào dùng chung chỉ được khấu trừ theo tỷ lệ doanh thu chịu thuế (khoảng 20.75%).<br />
            • <strong>Giao dịch liên kết Kiểu Việt - Hòa Đức:</strong> Các hợp đồng mượn máy móc xét nghiệm và cung cấp hóa chất phải lập hồ sơ giá thị trường (Arm&apos;s length) và kiểm soát trần lãi vay 30% EBITDA.
          </p>
        </div>
      </div>

      {/* Tender Packages List */}
      <Card className="bg-white border-slate-200/90 shadow-xs rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <CardTitle className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-teal-600" />
              Gói Thầu Trọng Điểm Đang Triển Khai
            </CardTitle>
            <CardDescription className="text-xs text-slate-500">
              Kiểm soát tiến độ lập E-HSDT, tính toán giá thầu và đối chiếu thông số kỹ thuật E-HSMT
            </CardDescription>
          </div>
          <Link to="/dau-thau">
            <Button variant="ghost" size="sm" className="text-teal-700 hover:text-teal-800 hover:bg-teal-50 text-xs">
              Xem tất cả <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            {MOCK_TENDER_PACKAGES.map((tender) => (
              <div
                key={tender.id}
                className="p-4 rounded-xl bg-slate-50/60 border border-slate-200/80 hover:border-teal-300 hover:bg-white transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-teal-800 font-bold px-2 py-0.5 rounded bg-teal-50 border border-teal-200">
                      {tender.tenderCode}
                    </span>
                    <Badge
                      variant="outline"
                      className={
                        tender.status === 'won'
                          ? 'border-emerald-300 text-emerald-700 bg-emerald-50 text-[10px] font-bold'
                          : tender.status === 'submitted'
                          ? 'border-cyan-300 text-cyan-700 bg-cyan-50 text-[10px] font-bold'
                          : 'border-amber-300 text-amber-700 bg-amber-50 text-[10px] font-bold'
                      }
                    >
                      {tender.status === 'won' ? 'Trúng Thầu' : tender.status === 'submitted' ? 'Đã Nộp E-HSDT' : 'Đang Chuẩn Bị'}
                    </Badge>
                    <span className="text-xs text-slate-500">• {tender.location}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 truncate max-w-2xl">
                    {tender.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Bên mời thầu: <span className="text-slate-800 font-medium">{tender.procuringEntity}</span> | Đóng thầu: <span className="text-teal-700 font-semibold">{tender.closingTime}</span>
                  </p>
                </div>
                <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200 flex-shrink-0">
                  <div className="text-xs text-slate-500">Giá chào thầu Kiểu Việt:</div>
                  <div className="text-base font-black text-teal-700 font-mono">
                    {formatVnd(tender.bidPriceVnd)}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Dự toán: {formatVnd(tender.estimatedBudgetVnd)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 4 Launchpad Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/thiet-bi" className="group">
          <div className="h-full p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-400 hover:shadow-md transition-all space-y-2">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="font-bold text-sm text-slate-900 group-hover:text-teal-700">
              Danh Mục TBYT A/B/C/D
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Quản lý số lưu hành, kê khai giá Cổng BYT, phân 6 nhóm Thông tư 57/2025 và hồ sơ CFS/LOA.
            </p>
          </div>
        </Link>

        <Link to="/tuan-thu-40" className="group">
          <div className="h-full p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-md transition-all space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div className="font-bold text-sm text-slate-900 group-hover:text-emerald-700">
              40 Tiêu Chí MD Tuân Thủ
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Bộ tiêu chuẩn kiểm tra pháp lý, kỹ thuật, giao nhận và bảo hành theo chuẩn Codex Section 8.1.
            </p>
          </div>
        </Link>

        <Link to="/phong-kham-hoa-duc" className="group">
          <div className="h-full p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-md transition-all space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="font-bold text-sm text-slate-900 group-hover:text-amber-700">
              Phòng Khám Hòa Đức
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Phân bổ thuế GTGT TT 219, khấu hao dàn máy TK 211 TT 45 và hồ sơ giao dịch liên kết NĐ 132.
            </p>
          </div>
        </Link>

        <Link to="/bieu-mau" className="group">
          <div className="h-full p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400 hover:shadow-md transition-all space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <div className="font-bold text-sm text-slate-900 group-hover:text-purple-700">
              14 Biểu Mẫu E-HSDT Thực Chiến
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Đầy đủ mẫu đơn thầu Mẫu 01, LOA Mẫu 03, Ma trận kỹ thuật Mẫu 04, Nghiệm thu 72h Mẫu 09.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
