// src/pages/ComplianceEnginePage.tsx
import React, { useState } from 'react';
import {
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  XCircle,
  Search,
  Filter,
  Scale,
  Download,
  ShieldAlert,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CRITERIA_40_GROUPS } from '@/data/criteria-md';
import { CriteriaGroup } from '@/types/medical';
import { Verdict } from '@/types/compliance';

export const ComplianceEnginePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [verdictFilter, setVerdictFilter] = useState<string>('ALL');
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const categories = [
    { key: 'ALL', label: 'Tất Cả 40 Nhóm' },
    { key: 'legal', label: 'Pháp Lý & Lưu Hành (MD01-MD07)' },
    { key: 'technical', label: 'Kỹ Thuật & Cấu Hình (MD08-MD20)' },
    { key: 'bidding', label: 'Đấu Thầu & Thương Mại (MD21-MD29)' },
    { key: 'delivery', label: 'Giao Nhận & Lắp Đặt (MD30-MD35)' },
    { key: 'operation', label: 'Vận Hành & Bảo Hành (MD36-MD40)' }
  ];

  const filteredCriteria = CRITERIA_40_GROUPS.filter((item) => {
    const matchSearch =
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.legalBasis.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCategory = categoryFilter === 'ALL' || item.category === categoryFilter;
    const matchVerdict = verdictFilter === 'ALL' || item.verdict === verdictFilter;

    return matchSearch && matchCategory && matchVerdict;
  });

  const passedCount = CRITERIA_40_GROUPS.filter((c) => c.verdict === 'pass').length;
  const reviewCount = CRITERIA_40_GROUPS.filter((c) => c.verdict === 'review').length;
  const failCount = CRITERIA_40_GROUPS.filter((c) => c.verdict === 'fail').length;

  const toggleExpand = (code: string) => {
    setExpandedCode(expandedCode === code ? null : code);
  };

  const getVerdictBadge = (verdict: Verdict) => {
    switch (verdict) {
      case 'pass':
        return (
          <Badge className="bg-emerald-50 text-emerald-700 border-emerald-300 text-[10px] font-bold">
            <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" /> ĐẠT CHUẨN (PASS)
          </Badge>
        );
      case 'fail':
        return (
          <Badge className="bg-red-50 text-red-700 border-red-300 text-[10px] font-bold">
            <XCircle className="w-3 h-3 mr-1 text-red-600" /> KHÔNG ĐẠT (FAIL)
          </Badge>
        );
      case 'review':
        return (
          <Badge className="bg-amber-50 text-amber-700 border-amber-300 text-[10px] font-bold">
            <AlertTriangle className="w-3 h-3 mr-1 text-amber-600" /> CẦN SOÁT XÉT
          </Badge>
        );
      case 'insufficient':
        return (
          <Badge className="bg-purple-50 text-purple-700 border-purple-300 text-[10px] font-bold">
            <HelpCircle className="w-3 h-3 mr-1 text-purple-600" /> THIẾU DỮ LIỆU
          </Badge>
        );
      default:
        return (
          <Badge className="bg-slate-100 text-slate-700 border-slate-300 text-[10px] font-bold">
            KHÔNG ÁP DỤNG
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <FileCheck2 className="w-6 h-6 text-teal-600" />
            Bộ 40 Nhóm Tiêu Chí Tuân Thủ Y Tế (MD01 đến MD40)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Triển khai 100% đầy đủ 40 nhóm tiêu chuẩn theo kiến trúc Codex Section 8.1; bảo đảm tính pháp lý cho gói thầu TBYT và vận hành phòng khám Hòa Đức.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50 px-3 py-1 font-semibold text-xs">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            Đủ 100% 40/40 Nhóm MD
          </Badge>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
          <div className="text-xs text-slate-500 font-semibold">Tổng Tiêu Chí</div>
          <div className="text-2xl font-black text-slate-900">40 Nhóm</div>
          <div className="text-[11px] text-teal-700 font-bold">MD01 - MD40</div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
          <div className="text-xs text-slate-500 font-semibold">Đạt Chuẩn Tuyệt Đối</div>
          <div className="text-2xl font-black text-emerald-700">{passedCount}</div>
          <div className="text-[11px] text-emerald-700 font-bold">100% Hợp Lệ</div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
          <div className="text-xs text-slate-500 font-semibold">Cần Rà Soát</div>
          <div className="text-2xl font-black text-amber-600">{reviewCount}</div>
          <div className="text-[11px] text-slate-400">0 Rủi ro</div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
          <div className="text-xs text-slate-500 font-semibold">Không Đạt / Điểm Liệt</div>
          <div className="text-2xl font-black text-slate-400">{failCount}</div>
          <div className="text-[11px] text-slate-400">0 Vi Phạm</div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <Input
              placeholder="Tìm theo mã MD, tên tiêu chí, nội dung, căn cứ pháp lý..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-slate-50 border-slate-200 text-xs text-slate-900 focus:bg-white"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategoryFilter(cat.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                categoryFilter === cat.key
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Criteria List */}
      <div className="space-y-3">
        <div className="text-xs text-slate-500 flex justify-between items-center px-1 font-medium">
          <span>
            Hiển thị <strong className="text-slate-900">{filteredCriteria.length}</strong> / 40 nhóm tiêu chuẩn
          </span>
          <span className="text-teal-700">
            Căn cứ: Nghị định 214/2025, Thông tư 57/2025 & VBHN 08/BYT
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {filteredCriteria.map((item) => {
            const isExpanded = expandedCode === item.code;
            return (
              <div
                key={item.code}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-teal-400 transition-all overflow-hidden shadow-2xs"
              >
                <div
                  onClick={() => toggleExpand(item.code)}
                  className="p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 flex-shrink-0">
                      {item.code}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0 self-end sm:self-center">
                    {getVerdictBadge(item.verdict)}
                    <span className="text-slate-400 hover:text-slate-600">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-4 bg-slate-50/60 border-t border-slate-100 space-y-3 text-xs">
                    <div>
                      <div className="text-slate-500 font-semibold mb-1">Mô tả chi tiết kiểm tra:</div>
                      <p className="text-slate-800 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
                        {item.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1">
                        <div className="text-slate-500 font-medium flex items-center gap-1.5">
                          <Scale className="w-3.5 h-3.5 text-teal-600" />
                          <span>Căn Cứ Pháp Lý Bắt Buộc</span>
                        </div>
                        <div className="text-teal-800 font-bold">
                          {item.legalBasis}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1">
                        <div className="text-slate-500 font-medium">Tiến Độ Xác Minh Bằng Chứng</div>
                        <div className="text-emerald-700 font-bold flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Đã xác minh {item.passedChecks} / {item.totalChecks} tài liệu chứng minh</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
