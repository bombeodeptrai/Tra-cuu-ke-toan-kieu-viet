import React, { useState } from 'react';
import { ArrowRightLeft, Sparkles, BookOpen, Layers, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { DecreeDiffViewer } from '@/components/decree/DecreeDiffViewer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ComparisonPage() {
  const [selectedDecreeId, setSelectedDecreeId] = useState('tt-99-2025');

  const popularPicks = [
    { id: 'tt-99-2025', label: 'Thông tư 99/2025', desc: 'Chế độ kế toán mới' },
    { id: 'tt-200-2014', label: 'Thông tư 200/2014', desc: 'Chế độ KT Doanh nghiệp' },
    { id: 'tt-133-2016', label: 'Thông tư 133/2016', desc: 'Kế toán DNNVV' },
    { id: 'tt-45-2013', label: 'Thông tư 45/2013', desc: 'Khấu hao TSCĐ' },
    { id: 'tt-48-2019', label: 'Thông tư 48/2019', desc: 'Trích lập Dự phòng nợ' },
    { id: 'tt-96-2015', label: 'Thông tư 96/2015', desc: 'Chi phí thuế TNDN' },
    { id: 'tt-219-2013', label: 'Thông tư 219/2013', desc: 'Thuế GTGT Xây lắp' },
    { id: 'tt-78-2021', label: 'Thông tư 78/2021', desc: 'Hóa đơn điện tử' },
    { id: 'luat-109-2025-tncn', label: 'Luật TNCN 109/2025', desc: 'Giảm trừ 15.5tr' },
    { id: 'nd-73-2024', label: 'Nghị định 73/2024', desc: 'Lương cơ sở 2.34tr' },
    { id: 'nd-50-2021', label: 'Nghị định 50/2021', desc: 'Tạm ứng hợp đồng XD 50%' },
    { id: 'nd-37-2015', label: 'Nghị định 37/2015', desc: 'Hợp đồng xây dựng' },
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Header Kiểu Việt Brand */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-semibold mb-2">
            <ArrowRightLeft className="h-3.5 w-3.5 text-emerald-600" />
            Kiểu Việt Legal Comparison Hub
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            Trung Tâm Đối Chiếu Điểm Mới Pháp Lý
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Tổng hợp bảng so sánh đối chiếu quy định Cũ vs Mới, phân tích tác động rủi ro và nghiệp vụ thực tế cho Công ty Kiểu Việt.
          </p>
        </div>
      </div>

      {/* Quick Jump Badges */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
          Xem nhanh các văn bản đối chiếu trọng điểm:
        </div>
        <div className="flex flex-wrap gap-2">
          {popularPicks.map((pick) => (
            <Button
              key={pick.id}
              variant={selectedDecreeId === pick.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDecreeId(pick.id)}
              className={`h-auto py-1.5 px-3 flex flex-col items-start gap-0.5 rounded-lg text-xs ${
                selectedDecreeId === pick.id
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold'
                  : 'hover:border-emerald-400 bg-card'
              }`}
            >
              <span>{pick.label}</span>
              <span className={`text-[10px] font-normal ${selectedDecreeId === pick.id ? 'text-emerald-100' : 'text-muted-foreground'}`}>
                {pick.desc}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Main Diff Viewer Component */}
      <div className="pt-2">
        <DecreeDiffViewer decreeId={selectedDecreeId} key={selectedDecreeId} />
      </div>
    </div>
  );
}
