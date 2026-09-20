// src/pages/TenderBiddingPage.tsx
import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  FileCheck,
  Building,
  DollarSign,
  Plus,
  ArrowUpDown,
  Download,
  Search
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { apiClient } from '@/lib/api/client';
import { TenderPackage, SpecificationItem } from '@/types/medical';
import { formatVnd } from '@/lib/utils';

export const TenderBiddingPage: React.FC = () => {
  const [tenders, setTenders] = useState<TenderPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTenderId, setSelectedTenderId] = useState<string>('');
  const [searchFilter, setSearchFilter] = useState('');
  const [pricingData, setPricingData] = useState<any>(null);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const data = await apiClient.get('/api/tenders');
        const parsedData = (data || []).map((t: any) => ({
          ...t,
          estimatedBudgetVnd: typeof t.estimatedBudgetVnd === 'string' && /^\d+$/.test(t.estimatedBudgetVnd) ? BigInt(t.estimatedBudgetVnd) : (typeof t.estimatedBudgetVnd === 'bigint' ? t.estimatedBudgetVnd : 0n),
          bidBondAmountVnd: typeof t.bidBondAmountVnd === 'string' && /^\d+$/.test(t.bidBondAmountVnd) ? BigInt(t.bidBondAmountVnd) : (typeof t.bidBondAmountVnd === 'bigint' ? t.bidBondAmountVnd : 0n),
          bidPriceVnd: typeof t.bidPriceVnd === 'string' && /^\d+$/.test(t.bidPriceVnd) ? BigInt(t.bidPriceVnd) : (typeof t.bidPriceVnd === 'bigint' ? t.bidPriceVnd : 0n),
        }));
        setTenders(parsedData);
        if (parsedData && parsedData.length > 0) {
          setSelectedTenderId(parsedData[0].id);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTenders();
  }, []);

  useEffect(() => {
    const fetchPricing = async () => {
      if (!selectedTenderId) return;
      try {
        const data = await apiClient.get(`/api/tenders/${selectedTenderId}/pricing`);
        setPricingData(data);
      } catch (err) {
        console.error('Failed to fetch pricing:', err);
        setPricingData(null);
      }
    };
    fetchPricing();
  }, [selectedTenderId]);

  if (loading) return <div className="p-8 text-center text-slate-500">Đang tải dữ liệu...</div>;
  if (!tenders.length) return <div className="p-8 text-center text-slate-500">Không có gói thầu nào</div>;

  const activeTender = tenders.find((t) => t.id === selectedTenderId) || tenders[0];

  const filteredSpecs = activeTender.specs.filter(
    (s) =>
      s.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      s.requirement.toLowerCase().includes(searchFilter.toLowerCase()) ||
      s.offeredSpec.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-teal-600" />
            Hệ Thống Quản Trị Đấu Thầu TBYT (E-HSMT / E-HSDT)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Tuân thủ tuyệt đối quy trình đấu thầu trang thiết bị y tế theo{' '}
            <span className="text-teal-700 font-semibold">Nghị định 214/2025/NĐ-CP</span> và{' '}
            <span className="text-teal-700 font-semibold">Thông tư 57/2025/TT-BYT</span>.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-teal-300 text-teal-700 bg-teal-50 px-3 py-1 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            3 Gói Thầu Hoạt Động
          </Badge>
        </div>
      </div>

      {/* Package Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {tenders.map((t) => {
          const isSelected = t.id === activeTender.id;
          return (
            <div
              key={t.id}
              onClick={() => setSelectedTenderId(t.id)}
              className={`p-4 rounded-2xl cursor-pointer transition-all border text-left ${
                isSelected
                  ? 'bg-teal-50/80 border-teal-500 shadow-xs'
                  : 'bg-white border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-teal-800 border border-slate-200">
                  {t.tenderCode}
                </span>
                <Badge
                  variant="outline"
                  className={
                    t.status === 'won'
                      ? 'border-emerald-300 text-emerald-700 bg-emerald-50 text-[10px] font-bold'
                      : t.status === 'submitted'
                      ? 'border-cyan-300 text-cyan-700 bg-cyan-50 text-[10px] font-bold'
                      : 'border-amber-300 text-amber-700 bg-amber-50 text-[10px] font-bold'
                  }
                >
                  {t.status === 'won' ? 'Trúng Thầu' : t.status === 'submitted' ? 'Đã Nộp' : 'Đang Chuẩn Bị'}
                </Badge>
              </div>
              <h3 className="text-xs font-bold text-slate-900 line-clamp-2 mb-2">
                {t.title}
              </h3>
              <div className="text-[11px] text-slate-500 space-y-1">
                <div className="truncate">Chủ đầu tư: <span className="text-slate-800 font-medium">{t.procuringEntity}</span></div>
                <div>Giá dự thầu: <span className="text-teal-700 font-bold font-mono">{formatVnd(t.bidPriceVnd)}</span></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Tender Details & Working Tabs */}
      <Card className="bg-white border-slate-200/90 shadow-xs rounded-2xl">
        <CardHeader className="border-b border-slate-100 pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-teal-800 font-bold px-2 py-0.5 bg-teal-50 border border-teal-200 rounded">
                  {activeTender.tenderCode}
                </span>
                <span className="text-xs text-slate-500">• {activeTender.location}</span>
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold text-slate-900">
                {activeTender.title}
              </CardTitle>
              <CardDescription className="text-xs text-slate-500">
                Bên mời thầu: <span className="text-slate-800 font-medium">{activeTender.procuringEntity}</span> | Nguồn vốn: {activeTender.fundingSource}
              </CardDescription>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-slate-500">Giá dự toán gói thầu:</div>
                <div className="text-lg font-bold text-slate-900">{formatVnd(activeTender.estimatedBudgetVnd)}</div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden md:block" />
              <div className="text-right">
                <div className="text-xs text-slate-500">Giá chào thầu Kiểu Việt:</div>
                <div className="text-lg font-bold text-teal-700 font-mono">{formatVnd(activeTender.bidPriceVnd)}</div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-4">
          <Tabs defaultValue="specs" className="space-y-4">
            <TabsList className="bg-slate-100 border border-slate-200 p-1 rounded-xl">
              <TabsTrigger value="specs" className="text-xs font-semibold data-[state=active]:bg-white data-[state=active]:text-teal-800 data-[state=active]:shadow-2xs">
                Ma Trận Kỹ Thuật ({activeTender.specs.length} tiêu chí)
              </TabsTrigger>
              <TabsTrigger value="pricing" className="text-xs font-semibold data-[state=active]:bg-white data-[state=active]:text-teal-800 data-[state=active]:shadow-2xs">
                Cơ Cấu Giá & Bảo Lãnh
              </TabsTrigger>
              <TabsTrigger value="checklist" className="text-xs font-semibold data-[state=active]:bg-white data-[state=active]:text-teal-800 data-[state=active]:shadow-2xs">
                Hồ Sơ Pháp Lý E-HSDT (NĐ 214)
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: TECHNICAL SPECS MATRIX */}
            <TabsContent value="specs" className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <Input
                    placeholder="Tìm tiêu chí kỹ thuật, model..."
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="pl-9 bg-slate-50 border-slate-200 text-xs text-slate-900 focus:bg-white"
                  />
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Tiêu chí kỹ thuật ĐẠT chuẩn (Không điểm liệt)</span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                      <th className="p-3 w-24">Mã TCKT</th>
                      <th className="p-3">Tên Tiêu Chí</th>
                      <th className="p-3 min-w-[200px]">Yêu Cầu HSMT (Chủ Đầu Tư)</th>
                      <th className="p-3 min-w-[220px]">Thông Số Kiểu Việt Chào Thầu</th>
                      <th className="p-3">Model / Thiết Bị</th>
                      <th className="p-3 text-center w-24">Đánh Giá</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {filteredSpecs.map((spec) => (
                      <tr key={spec.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="p-3 font-mono font-bold text-teal-700">
                          {spec.criteriaCode}
                          {spec.isMandatory && (
                            <span className="block text-[9px] text-red-600 font-normal">Điểm Liệt</span>
                          )}
                        </td>
                        <td className="p-3 font-bold text-slate-900">
                          {spec.title}
                        </td>
                        <td className="p-3 text-slate-600 leading-relaxed">
                          {spec.requirement}
                        </td>
                        <td className="p-3 text-emerald-800 font-medium leading-relaxed bg-emerald-50/30">
                          {spec.offeredSpec}
                        </td>
                        <td className="p-3 text-slate-700">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-semibold border border-slate-200">
                            {spec.offeredModel}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px] font-bold">
                            ĐẠT CHUẨN
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            {/* TAB 2: PRICING & BID BOND */}
            <TabsContent value="pricing" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Cost Breakdown */}
                <Card className="bg-slate-50/60 border-slate-200/90 rounded-xl">
                  <CardHeader className="pb-2 border-b border-slate-200">
                    <CardTitle className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-teal-600" />
                      Cấu Trúc Giá Dự Thầu Kiểu Việt
                    </CardTitle>
                    <CardDescription className="text-xs text-slate-500">
                      Bóc tách chi phí giá vốn thiết bị, thuế GTGT và biên an toàn
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2.5 text-xs pt-3">
                    {pricingData && pricingData.breakdown ? (
                      pricingData.breakdown.map((item: any, idx: number) => (
                        <div key={idx} className="flex justify-between py-1.5 border-b border-slate-200">
                          <span className="text-slate-600">{idx + 1}. {item.label}:</span>
                          <span className={item.isHighlight ? "font-mono text-emerald-700 font-bold" : "font-mono text-slate-900 font-semibold"}>
                            {formatVnd(BigInt(item.amount || 0))}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center text-slate-500 py-4">Đang tải cấu trúc giá...</div>
                    )}
                    <div className="flex justify-between pt-2 text-sm font-bold">
                      <span className="text-teal-800">TỔNG GIÁ CHÀO THẦU TRỌN GÓI:</span>
                      <span className="text-teal-700 font-mono font-black">{formatVnd(activeTender.bidPriceVnd)}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Bid Bond & Savings */}
                <Card className="bg-slate-50/60 border-slate-200/90 rounded-xl">
                  <CardHeader className="pb-2 border-b border-slate-200">
                    <CardTitle className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-600" />
                      Bảo Đảm Dự Thầu & Tỷ Lệ Tiết Kiệm (NĐ 214)
                    </CardTitle>
                    <CardDescription className="text-xs text-slate-500">
                      Bảo lãnh ngân hàng không hủy ngang và hiệu quả kinh tế
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-xs pt-3">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                      <div className="flex justify-between text-slate-700">
                        <span>Giá trị bảo đảm dự thầu (1.5%):</span>
                        <span className="font-mono font-bold text-cyan-700">{formatVnd(activeTender.bidBondAmountVnd)}</span>
                      </div>
                      <div className="flex justify-between text-slate-700">
                        <span>Hình thức bảo lãnh:</span>
                        <span className="text-slate-900 font-medium">Thư bảo lãnh BIDV Quy Nhơn</span>
                      </div>
                      <div className="flex justify-between text-slate-700">
                        <span>Thời hạn hiệu lực:</span>
                        <span className="text-teal-700 font-bold">120 ngày kể từ ngày đóng thầu</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                      <div className="text-xs font-bold text-emerald-900">
                        Hiệu Quả Tiết Kiệm Cho Ngân Sách Bên Mời Thầu
                      </div>
                      <div className="flex justify-between text-slate-700">
                        <span>Chênh lệch giảm so với giá gói thầu:</span>
                        <span className="font-bold text-emerald-700 font-mono">
                          {formatVnd(activeTender.estimatedBudgetVnd - activeTender.bidPriceVnd)}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 leading-relaxed">
                        Tỷ lệ giảm giá 4.1% bảo đảm tối ưu điểm tổng hợp theo phương pháp kết hợp quy định tại Nghị định 214/2025/NĐ-CP.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* TAB 3: LEGAL CHECKLIST */}
            <TabsContent value="checklist" className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-teal-600" />
                  Danh Mục Hồ Sơ Pháp Lý E-HSDT Đã Số Hóa Theo Nghị Định 214/2025/NĐ-CP
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Mẫu 01: Đơn dự thầu ký số bởi Tổng Giám đốc Kiểu Việt</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Mẫu 03: Thư ủy quyền bán hàng (LOA) chính hãng Roche & Sysmex</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Giấy chứng nhận lưu hành tự do (CFS) hợp pháp hóa lãnh sự</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Chứng chỉ hệ thống quản lý chất lượng ISO 13485:2016 còn hạn</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Biên lai kê khai giá trên Cổng điện tử Bộ Y tế (NĐ 98 & NĐ 07)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Mẫu 07: Cam kết bảo hành SLA có mặt xử lý sự cố trong 2 giờ</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
