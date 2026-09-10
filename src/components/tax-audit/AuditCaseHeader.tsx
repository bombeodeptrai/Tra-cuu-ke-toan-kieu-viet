import React from 'react';
import { Building2, Calendar, ShieldAlert, CheckCircle2, Clock, FileCheck2, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface AuditCaseHeaderProps {
  completedCount: number;
  totalCount: number;
}

export const AuditCaseHeader: React.FC<AuditCaseHeaderProps> = ({ completedCount, totalCount }) => {
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <Card className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border-blue-800 shadow-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none font-semibold px-3 py-1">
                ĐỢT KIỂM TRA THÁNG 10/2026
              </Badge>
              <Badge variant="outline" className="text-amber-300 border-amber-400/50 bg-amber-950/40">
                <Clock className="w-3.5 h-3.5 mr-1 inline" /> Hạn nội bộ: 30/09/2026
              </Badge>
              <Badge variant="outline" className="text-emerald-300 border-emerald-400/50 bg-emerald-950/40">
                Niên độ thanh tra: 2022 – 2025
              </Badge>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                <Building2 className="w-8 h-8 text-blue-400 shrink-0" />
                CÔNG TY CỔ PHẦN KIỂU VIỆT
              </h1>
              <p className="text-slate-300 text-sm mt-1">
                Mã số thuế: <span className="font-mono font-bold text-white">5901168128</span> | Cục Thuế Tỉnh Gia Lai quản lý trực tiếp
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-slate-300 pt-1">
              <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
                🌲 Nội thất gỗ (Phú Tài)
              </span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
                🚛 Bê tông & VLXD / Cừ Larsen
              </span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
                🏗️ Xây lắp liên tỉnh
              </span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
                📐 Tư vấn dự án & Thiết kế
              </span>
            </div>
          </div>

          {/* KPI Tóm lược */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/80 backdrop-blur-sm shrink-0">
            <div className="text-center p-2">
              <div className="text-xs text-slate-400 mb-1">Tiến độ hồ sơ</div>
              <div className="text-2xl font-bold text-blue-400">{percent}%</div>
              <div className="text-[11px] text-slate-300">{completedCount}/{totalCount} mục rà soát</div>
            </div>

            <div className="text-center p-2 border-x border-slate-700/60">
              <div className="text-xs text-slate-400 mb-1">Căn cứ pháp luật</div>
              <div className="text-2xl font-bold text-emerald-400">55</div>
              <div className="text-[11px] text-slate-300">Văn bản áp dụng</div>
            </div>

            <div className="text-center p-2 col-span-2 sm:col-span-1">
              <div className="text-xs text-slate-400 mb-1">Trọng điểm giải trình</div>
              <div className="text-2xl font-bold text-amber-400">5</div>
              <div className="text-[11px] text-slate-300">Nợ 37 tỷ, 154, 642, nợ xấu</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};