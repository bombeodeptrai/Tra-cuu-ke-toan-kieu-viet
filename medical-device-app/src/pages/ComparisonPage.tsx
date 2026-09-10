// src/pages/ComparisonPage.tsx
import React, { useState } from 'react';
import {
  ArrowRightLeft,
  Sparkles,
  BookOpen,
  Layers,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Stethoscope,
  Receipt,
  Scale,
  Search,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DIFF_MEDICAL_DATABASE, DiffDocumentGroup, DiffClauseItem } from '@/data/diff-medical-database';

export const ComparisonPage: React.FC = () => {
  const [selectedDiffId, setSelectedDiffId] = useState<string>('nd-214-vs-nd-24');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const diffKeys = Object.keys(DIFF_MEDICAL_DATABASE);
  const currentDiff: DiffDocumentGroup = DIFF_MEDICAL_DATABASE[selectedDiffId] || DIFF_MEDICAL_DATABASE['nd-214-vs-nd-24'];

  const categories = [
    { id: 'all', label: 'Tất Cả 6 Chuyên Đề Đối Chiếu', icon: Layers },
    { id: 'bidding', label: 'Đấu Thầu (NĐ 214 vs NĐ 24)', icon: Scale },
    { id: 'medical_device', label: 'Quy Chuẩn TBYT (TT 57, TT 24, VBHN 08)', icon: Stethoscope },
    { id: 'tax_finance', label: 'Thuế & Liên Kết (TT 219, NĐ 132)', icon: Receipt }
  ];

  const filteredClauses = currentDiff.clauses.filter((clause) => {
    const q = searchTerm.toLowerCase();
    return (
      clause.clauseNumber.toLowerCase().includes(q) ||
      clause.topic.toLowerCase().includes(q) ||
      clause.newVersionText.toLowerCase().includes(q) ||
      clause.oldVersionText.toLowerCase().includes(q) ||
      clause.practicalImpact.toLowerCase().includes(q) ||
      clause.actionRequired.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <ArrowRightLeft className="w-6 h-6 text-teal-600" />
            Đối Chiếu Điểm Mới Văn Bản Pháp Luật (2 Cột Song Song)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Hệ thống so sánh trực quan từng điều khoản cũ - mới giữa các văn bản then chốt về Đấu thầu TBYT và Quản trị Phòng khám Hòa Đức.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-teal-300 text-teal-800 bg-teal-50 px-3 py-1 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-teal-600" />
            Cập nhật Chuẩn NĐ 214 & TT 57
          </Badge>
        </div>
      </div>

      {/* Category Tabs & Selector */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-teal-600 shrink-0" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Chọn Cặp Văn Bản Đối Chiếu:
            </span>
          </div>

          <select
            value={selectedDiffId}
            onChange={(e) => setSelectedDiffId(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 font-bold focus:ring-2 focus:ring-teal-500 max-w-full sm:max-w-md cursor-pointer"
          >
            <optgroup label="1. Đấu thầu Thiết bị y tế">
              <option value="nd-214-vs-nd-24">NĐ 214/2025 vs NĐ 24/2024 (Đấu thầu qua mạng 100%, bảo lãnh số)</option>
            </optgroup>
            <optgroup label="2. Quản lý & Quy chuẩn TBYT">
              <option value="tt-57-phan-6-nhom">TT 57/2025/TT-BYT (Phân chia 6 nhóm tiêu chuẩn kỹ thuật TBYT)</option>
              <option value="tt-24-kiem-dinh-tbyt">TT 24/2026/TT-BYT (Lộ trình kiểm định an toàn kỹ thuật bắt buộc)</option>
              <option value="vbhn-08-vs-nd-98">VBHN 08/VBHN-BYT (Hợp nhất NĐ 98, NĐ 07, NĐ 04 về TBYT)</option>
            </optgroup>
            <optgroup label="3. Thuế & Quản trị Phòng khám Hòa Đức">
              <option value="nd-132-giao-dich-lien-ket">NĐ 132/2020 (Giao dịch liên kết Kiểu Việt - Hòa Đức, trần 30% EBITDA)</option>
              <option value="tt-219-phan-bo-vat-hoa-duc">TT 219/2013 Điều 14 (Phân bổ thuế GTGT đầu vào dùng chung Hòa Đức)</option>
            </optgroup>
          </select>
        </div>

        {/* Search within clauses */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <Input
            placeholder="Tìm kiếm nhanh trong bảng đối chiếu (từ khóa: bảo lãnh, nhóm 1, kiểm định, liên kết, EBITDA, phân bổ...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-slate-50 border-slate-200 text-xs text-slate-900 focus:bg-white"
          />
        </div>
      </div>

      {/* Selected Comparison Overview Card */}
      <Card className="bg-white border-slate-200/90 shadow-xs rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-slate-900 to-teal-950 text-white p-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 text-[10px] font-bold">
                  {currentDiff.statusBadge}
                </Badge>
                <span className="text-xs text-slate-300 font-mono">
                  Hiệu lực từ: {currentDiff.effectiveDate}
                </span>
              </div>
              <CardTitle className="text-lg sm:text-xl font-black text-white">
                {currentDiff.title}
              </CardTitle>
              <p className="text-xs text-teal-200 font-normal mt-1">
                {currentDiff.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2 self-start md:self-center">
              <span className="text-xs text-slate-300">Tổng số đối chiếu:</span>
              <span className="text-sm font-bold text-teal-300 px-2.5 py-1 bg-white/10 rounded-lg">
                {currentDiff.clauses.length} Điều Khoản
              </span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-200 leading-relaxed font-normal">
            {currentDiff.summary}
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 space-y-6">
          {filteredClauses.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs">
              Không tìm thấy điều khoản nào khớp với từ khóa "{searchTerm}".
            </div>
          ) : (
            filteredClauses.map((clause, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-slate-50/50 hover:bg-white hover:border-teal-200 transition-all shadow-2xs space-y-4"
              >
                {/* Clause Title & Badges */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-teal-100 text-teal-900 font-mono text-xs font-black">
                      {clause.clauseNumber}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      {clause.topic}
                    </h3>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-[10px] font-bold px-2 py-0.5 self-start sm:self-center ${
                      clause.riskLevel === 'high'
                        ? 'bg-rose-50 text-rose-700 border-rose-300'
                        : clause.riskLevel === 'medium'
                        ? 'bg-amber-50 text-amber-700 border-amber-300'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-300'
                    }`}
                  >
                    {clause.riskLevel === 'high' ? '⚠️ Rủi Ro Cao' : clause.riskLevel === 'medium' ? '⚡ Cần Lưu Ý' : '✓ Thuận Lợi'}
                  </Badge>
                </div>

                {/* 2-Column Side-by-Side Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column: Quy Định Cũ */}
                  <div className="p-4 rounded-xl bg-rose-50/40 border border-rose-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        {currentDiff.oldDocName}
                      </span>
                      <span className="text-[10px] font-mono text-rose-700">
                        {clause.oldReference}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans bg-white/80 p-3 rounded-lg border border-rose-100">
                      {clause.oldVersionText}
                    </p>
                  </div>

                  {/* Right Column: Quy Định Mới */}
                  <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-300 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {currentDiff.newDocName}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-800 font-bold">
                        {clause.newReference}
                      </span>
                    </div>
                    <p className="text-xs text-slate-900 leading-relaxed font-sans font-medium bg-white p-3 rounded-lg border border-emerald-200">
                      {clause.newVersionText}
                    </p>
                  </div>
                </div>

                {/* Practical Impact & Action Plan for Kieu Viet */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200 space-y-1">
                    <div className="text-[11px] font-bold text-teal-900 flex items-center gap-1">
                      <Info className="w-3.5 h-3.5 text-teal-700" />
                      <span>Tác Động Thực Tế (Kiểu Việt & Hòa Đức):</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {clause.practicalImpact}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
                    <div className="text-[11px] font-bold text-blue-900 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                      <span>Hành Động Nghiệp Vụ Cần Làm Ngay:</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {clause.actionRequired}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
};
export default ComparisonPage;
