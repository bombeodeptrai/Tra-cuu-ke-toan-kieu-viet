// src/pages/HoaDucClinicPage.tsx
import React, { useState } from 'react';
import {
  Building2,
  Calculator,
  Percent,
  TrendingDown,
  ShieldCheck,
  AlertTriangle,
  FileSpreadsheet,
  Layers,
  ArrowRight,
  Info,
  CheckCircle2
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { MOCK_HOA_DUC_FINANCE, HOA_DUC_RELATED_TRANSACTIONS } from '@/data/mock-medical';
import { formatVnd } from '@/lib/utils';

export const HoaDucClinicPage: React.FC = () => {
  // State for interactive VAT allocation calculator
  const [revenueKcb, setRevenueKcb] = useState<number>(4200000000); // 4.2 tỷ
  const [revenueMedicine, setRevenueMedicine] = useState<number>(850000000); // 850 triệu
  const [revenueSupplements, setRevenueSupplements] = useState<number>(250000000); // 250 triệu
  const [inputVatTotal, setInputVatTotal] = useState<number>(480000000); // 480 triệu

  // Calculations
  const taxableRevenue = revenueMedicine + revenueSupplements;
  const totalRevenue = revenueKcb + taxableRevenue;
  const deductibleRatio = totalRevenue > 0 ? (taxableRevenue / totalRevenue) : 0;
  const deductibleVat = Math.round(inputVatTotal * deductibleRatio);
  const nonDeductibleVat = inputVatTotal - deductibleVat;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-teal-600" />
            Tài Chính & Thuế Phòng Khám Đa Khoa Hòa Đức
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Trụ sở: 04-06-08 Đinh Công Tráng, TP. Quy Nhơn, Bình Định | Chi nhánh: Tỉnh Gia Lai.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-amber-300 text-amber-700 bg-amber-50 px-3 py-1 font-semibold text-xs">
            <AlertTriangle className="w-3.5 h-3.5 mr-1" />
            Kiểm Soát NĐ 132 (GD Liên Kết)
          </Badge>
        </div>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="vat-allocation" className="space-y-4">
        <TabsList className="bg-slate-100 border border-slate-200 p-1 rounded-xl">
          <TabsTrigger value="vat-allocation" className="text-xs font-semibold data-[state=active]:bg-white data-[state=active]:text-teal-800 data-[state=active]:shadow-2xs">
            Phân Bổ Thuế GTGT (TT 219)
          </TabsTrigger>
          <TabsTrigger value="depreciation" className="text-xs font-semibold data-[state=active]:bg-white data-[state=active]:text-teal-800 data-[state=active]:shadow-2xs">
            Khấu Hao Dàn Máy TK 211 (TT 45)
          </TabsTrigger>
          <TabsTrigger value="related-party" className="text-xs font-semibold data-[state=active]:bg-white data-[state=active]:text-teal-800 data-[state=active]:shadow-2xs">
            Giao Dịch Liên Kết Kiểu Việt - Hòa Đức (NĐ 132)
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: PHÂN BỔ THUẾ GTGT ĐẦU VÀO DÙNG CHUNG */}
        <TabsContent value="vat-allocation" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Input & Calculator (2 cols) */}
            <Card className="lg:col-span-2 bg-white border-slate-200/90 shadow-xs rounded-2xl">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-teal-600" />
                  Mô Hình Tính Phân Bổ Thuế GTGT Đầu Vào Dùng Chung
                </CardTitle>
                <CardDescription className="text-xs text-slate-500">
                  Căn cứ Điều 14 Khoản 2 Thông tư 219/2013/TT-BTC: Thuế GTGT đầu vào của hàng hóa, dịch vụ dùng chung cho sản xuất, kinh doanh chịu thuế và không chịu thuế chỉ được khấu trừ theo tỷ lệ doanh thu chịu thuế.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold">
                      1. Doanh thu KCB (Không chịu thuế - Đ5 TT 219):
                    </label>
                    <Input
                      type="number"
                      value={revenueKcb}
                      onChange={(e) => setRevenueKcb(Number(e.target.value))}
                      className="bg-slate-50 border-slate-200 text-teal-800 font-mono font-bold text-sm focus:bg-white"
                    />
                    <div className="text-[11px] text-slate-500">Khám bệnh, nội soi, xét nghiệm, chẩn đoán hình ảnh</div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold">
                      2. Doanh thu Nhà thuốc (Thuế suất 5%):
                    </label>
                    <Input
                      type="number"
                      value={revenueMedicine}
                      onChange={(e) => setRevenueMedicine(Number(e.target.value))}
                      className="bg-slate-50 border-slate-200 text-teal-800 font-mono font-bold text-sm focus:bg-white"
                    />
                    <div className="text-[11px] text-slate-500">Bán thuốc tân dược điều trị theo đơn bác sĩ</div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold">
                      3. Doanh thu TPCN / Mỹ phẩm (Thuế suất 10%):
                    </label>
                    <Input
                      type="number"
                      value={revenueSupplements}
                      onChange={(e) => setRevenueSupplements(Number(e.target.value))}
                      className="bg-slate-50 border-slate-200 text-teal-800 font-mono font-bold text-sm focus:bg-white"
                    />
                    <div className="text-[11px] text-slate-500">Thực phẩm chức năng, vật dụng y tế gia đình</div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold">
                      4. Tổng thuế GTGT đầu vào dùng chung phát sinh:
                    </label>
                    <Input
                      type="number"
                      value={inputVatTotal}
                      onChange={(e) => setInputVatTotal(Number(e.target.value))}
                      className="bg-slate-50 border-slate-200 text-amber-800 font-mono font-bold text-sm focus:bg-white"
                    />
                    <div className="text-[11px] text-slate-500">Thuê mặt bằng Đinh Công Tráng, điện nước, vật tư tiêu hao</div>
                  </div>
                </div>

                {/* Formula Breakdown Callout */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="text-teal-800 font-bold flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-teal-600" />
                    <span>Công thức xác định tỷ lệ phân bổ khấu trừ:</span>
                  </div>
                  <div className="font-mono text-slate-800 bg-white p-3 rounded-lg border border-slate-200 text-[11px] leading-relaxed">
                    Tỷ lệ khấu trừ = (Doanh thu chịu thuế 5% & 10%) / (Tổng doanh thu toàn bộ hoạt động)
                    <br />
                    = ({formatVnd(taxableRevenue)}) / ({formatVnd(totalRevenue)}) = <strong className="text-teal-700">{(deductibleRatio * 100).toFixed(2)}%</strong>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Card (1 col) */}
            <Card className="bg-white border-slate-200/90 shadow-sm flex flex-col justify-between rounded-2xl">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Kết Quả Phân Bổ Kê Khai Thuế
                </CardTitle>
                <CardDescription className="text-xs text-slate-500">
                  Áp dụng vào Tờ khai thuế GTGT Mẫu 01/GTGT
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <div className="text-slate-600 font-medium">Thuế GTGT ĐƯỢC KHẤU TRỪ:</div>
                  <div className="text-2xl font-black text-emerald-700 font-mono">
                    {formatVnd(deductibleVat)}
                  </div>
                  <div className="text-[11px] text-emerald-800 font-semibold">
                    Kê khai vào Chỉ tiêu [25] trên Tờ khai 01/GTGT
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
                  <div className="text-slate-600 font-medium">Thuế GTGT KHÔNG ĐƯỢC KHẤU TRỪ:</div>
                  <div className="text-xl font-black text-amber-800 font-mono">
                    {formatVnd(nonDeductibleVat)}
                  </div>
                  <div className="text-[11px] text-amber-800 font-semibold">
                    Hạch toán vào chi phí quản lý (TK 642 / TK 154) tính thuế TNDN
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                  <strong className="text-slate-900">Lưu ý quyết toán cuối năm:</strong> Cuối năm dương lịch, Hòa Đức phải tính toán phân bổ lại theo số liệu doanh thu thực tế cả năm để điều chỉnh tăng/giảm thuế GTGT khấu trừ trên Tờ khai tháng 12 hoặc Quý 4.
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* TAB 2: KHẤU HAO MÁY MÓC THIẾT BỊ TK 211 (TT 45) */}
        <TabsContent value="depreciation" className="space-y-4">
          <Card className="bg-white border-slate-200/90 shadow-xs rounded-2xl">
            <CardHeader className="pb-3 border-b border-slate-100">
              <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-600" />
                Danh Mục Tài Sản Cố Định & Khấu Hao Thiết Bị Xét Nghiệm (TK 211/214)
              </CardTitle>
              <CardDescription className="text-xs text-slate-500">
                Thực hiện trích khấu hao đường thẳng theo Thông tư 45/2013/TT-BTC; khung khấu hao máy y tế 5 - 10 năm
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                      <th className="p-3">Tên Thiết Bị / Máy Móc</th>
                      <th className="p-3">Mã TSCĐ</th>
                      <th className="p-3">Nguyên Giá (VND)</th>
                      <th className="p-3">Thời Gian KH</th>
                      <th className="p-3">KH Quý 3/2026</th>
                      <th className="p-3">Trạng Thái Hồ Sơ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-bold text-slate-900">Hệ thống xét nghiệm Cobas c502</td>
                      <td className="p-3 font-mono text-teal-700 font-bold">TSCĐ-BIO-01</td>
                      <td className="p-3 font-mono text-slate-800 font-semibold">{formatVnd(2850000000n)}</td>
                      <td className="p-3 text-slate-600">5 năm (60 tháng)</td>
                      <td className="p-3 font-mono text-emerald-700 font-bold">{formatVnd(142500000n)}</td>
                      <td className="p-3">
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px] font-bold">
                          Đủ HĐ, BB Nghiệm Thu
                        </Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-bold text-slate-900">Máy huyết học tự động Sysmex XN-550</td>
                      <td className="p-3 font-mono text-teal-700 font-bold">TSCĐ-HEM-02</td>
                      <td className="p-3 font-mono text-slate-800 font-semibold">{formatVnd(1250000000n)}</td>
                      <td className="p-3 text-slate-600">5 năm (60 tháng)</td>
                      <td className="p-3 font-mono text-emerald-700 font-bold">{formatVnd(62500000n)}</td>
                      <td className="p-3">
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px] font-bold">
                          Hợp Lệ
                        </Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-bold text-slate-900">Máy siêu âm Voluson S8 Touch</td>
                      <td className="p-3 font-mono text-teal-700 font-bold">TSCĐ-US-03</td>
                      <td className="p-3 font-mono text-slate-800 font-semibold">{formatVnd(1950000000n)}</td>
                      <td className="p-3 text-slate-600">5 năm (60 tháng)</td>
                      <td className="p-3 font-mono text-emerald-700 font-bold">{formatVnd(40000000n)}</td>
                      <td className="p-3">
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px] font-bold">
                          Hợp Lệ
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB 3: GIAO DỊCH LIÊN KẾT KIỂU VIỆT - HÒA ĐỨC (NGHỊ ĐỊNH 132/2020) */}
        <TabsContent value="related-party" className="space-y-4">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 text-xs">
            <div className="font-bold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Căn Cứ Pháp Lý Quản Lý Thuế Đối Với Giao Dịch Liên Kết
            </div>
            <p className="text-slate-700 leading-relaxed">
              Theo Khoản 2 Điều 5 Nghị định 132/2020/NĐ-CP, Công ty Cổ phần Kiểu Việt và Phòng khám Đa khoa Hòa Đức là hai bên có quan hệ liên kết (cùng chịu sự điều hành, sở hữu vốn trực tiếp/gián tiếp). Mọi giao dịch mượn máy móc, cung cấp hóa chất và cho vay vốn phải tuân thủ nguyên tắc giá thị trường (Arm&apos;s length) và lập Phụ lục kê khai Mẫu 01/NĐ 132 đính kèm hồ sơ quyết toán thuế TNDN.
            </p>
          </div>

          <div className="space-y-3">
            {HOA_DUC_RELATED_TRANSACTIONS.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-teal-800 border border-slate-200">
                      {item.contractNumber}
                    </span>
                    <span className="text-xs text-slate-900 font-bold">{item.title}</span>
                  </div>
                  <div className="text-xs font-bold text-amber-700 font-mono">
                    Giá trị: {formatVnd(item.annualValueVnd)} / năm
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="text-slate-500 font-semibold">Bản Chất Giao Dịch:</div>
                    <div className="text-slate-800">{item.nature}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="text-slate-500 font-semibold">Phương Pháp Xác Định Giá (NĐ 132):</div>
                    <div className="text-teal-800 font-bold">{item.armsLengthMethod}</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                  <span>{item.complianceStatus}</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
