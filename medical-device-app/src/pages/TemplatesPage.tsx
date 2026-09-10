// src/pages/TemplatesPage.tsx
import React, { useState } from 'react';
import {
  FileText,
  Copy,
  Check,
  Download,
  Search,
  Scale,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TEMPLATES_14, TemplateDoc } from '@/data/templates-14';

export const TemplatesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateDoc>(TEMPLATES_14[0]);
  const [copied, setCopied] = useState(false);

  const filteredTemplates = TEMPLATES_14.filter(
    (tpl) =>
      tpl.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tpl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tpl.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tpl.legalBasis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedTemplate.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([selectedTemplate.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedTemplate.code.replace(/[\/\\?%*:|"<>]/g, '_')}_${selectedTemplate.title}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <FileText className="w-6 h-6 text-teal-600" />
            14 Bộ Biểu Mẫu E-HSDT & Vận Hành Phòng Khám Thực Chiến
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Triển khai đủ 100% cả 14 mẫu biểu chuẩn pháp lý phục vụ dự thầu thiết bị y tế Kiểu Việt và quản trị Phòng khám Hòa Đức.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-teal-300 text-teal-700 bg-teal-50 px-3 py-1 font-semibold text-xs">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            Đủ 14/14 Biểu Mẫu Chuẩn
          </Badge>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Template List (5 Cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <Input
              placeholder="Tìm theo mã biểu mẫu, tên tài liệu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-white border-slate-200 text-xs text-slate-900 focus:bg-white shadow-2xs"
            />
          </div>

          <div className="text-xs text-slate-500 px-1 font-medium">
            Danh sách <strong className="text-slate-900">{filteredTemplates.length}</strong> / 14 biểu mẫu:
          </div>

          <div className="space-y-2.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
            {filteredTemplates.map((tpl) => {
              const isSelected = selectedTemplate.id === tpl.id;
              return (
                <div
                  key={tpl.id}
                  onClick={() => setSelectedTemplate(tpl)}
                  className={`p-3.5 rounded-2xl cursor-pointer border transition-all text-left ${
                    isSelected
                      ? 'bg-teal-50/80 border-teal-500 shadow-xs'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-teal-800 border border-slate-200">
                      {tpl.code}
                    </span>
                    <Badge
                      variant="outline"
                      className="border-slate-200 text-slate-500 text-[10px] font-medium"
                    >
                      {tpl.category === 'bidding'
                        ? 'Đấu Thầu'
                        : tpl.category === 'technical'
                        ? 'Kỹ Thuật'
                        : tpl.category === 'delivery'
                        ? 'Nghiệm Thu'
                        : 'Thuế & Khấu Hao'}
                    </Badge>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 line-clamp-1 mb-1">
                    {tpl.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {tpl.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Template Viewer (7 Cols) */}
        <div className="lg:col-span-7">
          <Card className="bg-white border-slate-200/90 shadow-sm sticky top-20 flex flex-col h-full max-h-[calc(100vh-140px)] rounded-2xl">
            <CardHeader className="pb-3 border-b border-slate-100 flex-shrink-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-teal-800 font-bold px-2 py-0.5 rounded bg-teal-50 border border-teal-200">
                      {selectedTemplate.code}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">• {selectedTemplate.legalBasis}</span>
                  </div>
                  <CardTitle className="text-base font-bold text-slate-900">
                    {selectedTemplate.title}
                  </CardTitle>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-center">
                  <Button
                    size="sm"
                    onClick={handleCopy}
                    className="bg-teal-700 hover:bg-teal-800 text-white text-xs h-8 shadow-2xs font-semibold"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 mr-1" />
                        Đã chép
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 mr-1" />
                        Sao chép
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleDownload}
                    className="border-slate-200 text-slate-700 hover:bg-slate-50 text-xs h-8 font-semibold"
                  >
                    <Download className="w-3.5 h-3.5 mr-1" />
                    Tải File
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-4 flex-1 overflow-y-auto space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                <strong className="text-slate-900">Mục đích sử dụng:</strong> {selectedTemplate.description}
              </div>

              {/* Document Text Box */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 font-mono text-xs text-slate-800 whitespace-pre-wrap leading-relaxed select-text shadow-inner">
                {selectedTemplate.content}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
