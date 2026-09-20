import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRightLeft,
  Sparkles,
  Search,
  AlertTriangle,
  CheckCircle2,
  Info,
  Loader2,
  Download
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LEGAL_MANIFEST } from '@/data/legal-manifest';
import { apiClient } from '@/lib/api/client';

export const ComparisonPage: React.FC = () => {
  const [leftDocId, setLeftDocId] = useState<string>('');
  const [rightDocId, setRightDocId] = useState<string>('');
  const [mode, setMode] = useState<string>('whole');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [comparisonResult, setComparisonResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  const handleCompare = async () => {
    if (!leftDocId || !rightDocId) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);
    setComparisonResult(null);

    try {
      const data = await apiClient.post('/api/compare', {
        leftVersionId: leftDocId,
        rightVersionId: rightDocId,
        mode
      }, { signal: controller.signal });
      
      setComparisonResult(data);
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      setError(err.message || 'Có lỗi xảy ra khi gọi API');
    } finally {
      if (abortControllerRef.current === controller) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (leftDocId && rightDocId) {
      handleCompare();
    }
  }, [leftDocId, rightDocId, mode]);

  const filteredClauses = comparisonResult?.alignments?.filter((alignment: any) => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    return (
      (alignment.leftText || '').toLowerCase().includes(q) ||
      (alignment.rightText || '').toLowerCase().includes(q) ||
      (alignment.rationale || '').toLowerCase().includes(q)
    );
  }) || [];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <ArrowRightLeft className="w-6 h-6 text-teal-600" />
            Đối Chiếu Điểm Mới Văn Bản Pháp Luật
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Hệ thống so sánh trực quan theo điều khoản và xuất báo cáo.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2" disabled={!comparisonResult}>
            <Download className="w-4 h-4" /> Xuất Báo Cáo
          </Button>
        </div>
      </div>

      {/* Selectors */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-800 uppercase block mb-1">Văn bản gốc (Trái):</label>
            <select
              value={leftDocId}
              onChange={(e) => setLeftDocId(e.target.value)}
              className="text-xs w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-teal-500"
            >
              <option value="">-- Chọn văn bản --</option>
              {LEGAL_MANIFEST.map(doc => (
                <option key={doc.id} value={doc.id}>{doc.docNumber} - {doc.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-800 uppercase block mb-1">Văn bản so sánh (Phải):</label>
            <select
              value={rightDocId}
              onChange={(e) => setRightDocId(e.target.value)}
              className="text-xs w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-teal-500"
            >
              <option value="">-- Chọn văn bản --</option>
              {LEGAL_MANIFEST.map(doc => (
                <option key={doc.id} value={doc.id}>{doc.docNumber} - {doc.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-800 uppercase block mb-1">Phạm vi đối chiếu:</label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="text-xs w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-teal-500"
            >
              <option value="whole">Toàn văn bản</option>
              <option value="chapter">Theo Chương</option>
              <option value="article">Theo Điều</option>
            </select>
          </div>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <Input
            placeholder="Tìm kiếm nội dung, căn cứ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-slate-50 border-slate-200 text-xs text-slate-900 focus:bg-white"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-48 p-8 text-center bg-white rounded-2xl border border-slate-200">
          <Loader2 className="w-10 h-10 text-teal-500 mb-3 animate-spin" />
          <h2 className="text-lg font-bold">Đang so sánh văn bản...</h2>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-48 p-8 text-center bg-white rounded-2xl border border-rose-200">
          <AlertTriangle className="w-10 h-10 text-rose-500 mb-3" />
          <h2 className="text-lg font-bold text-rose-700">Lỗi so sánh</h2>
          <p className="text-rose-600 text-sm">{error}</p>
        </div>
      ) : comparisonResult ? (
        <Card className="bg-white border-slate-200/90 shadow-xs rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-slate-900 to-teal-950 text-white p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <CardTitle className="text-lg font-black text-white">
                  Kết quả đối chiếu ({comparisonResult.coverage?.processedLeft || 0} / {comparisonResult.coverage?.processedRight || 0} khối)
                </CardTitle>
                <p className="text-xs text-teal-200 mt-1">
                  Đã tải job: {comparisonResult.id}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-teal-300 px-2.5 py-1 bg-white/10 rounded-lg">
                  {filteredClauses.length} Điều Khoản Khớp
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 space-y-6">
            {filteredClauses.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-xs">
                Không tìm thấy điều khoản nào khớp với từ khóa "{searchTerm}".
              </div>
            ) : (
              filteredClauses.map((alignment: any, idx: number) => (
                <div key={idx} className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <Badge variant="outline" className="text-[10px] font-bold">
                      {alignment.change === 'added' ? 'Thêm mới' : alignment.change === 'removed' ? 'Bỏ' : alignment.change === 'modified' ? 'Sửa' : 'Giữ nguyên'}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-rose-50/40 border-rose-200 rounded-xl">
                      <p className="text-xs">{alignment.leftText || <span className="text-slate-400 italic">Không có dữ liệu</span>}</p>
                      {alignment.leftCitations?.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-rose-100 flex gap-2">
                           <span className="text-[10px] font-bold text-rose-600">Căn cứ:</span>
                           {alignment.leftCitations.map((c: string) => <Badge key={c} variant="outline" className="text-[10px]">{c}</Badge>)}
                        </div>
                      )}
                    </div>
                    <div className="p-3 bg-emerald-50/40 border-emerald-200 rounded-xl">
                      <p className="text-xs">{alignment.rightText || <span className="text-slate-400 italic">Không có dữ liệu</span>}</p>
                      {alignment.rightCitations?.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-emerald-100 flex gap-2">
                           <span className="text-[10px] font-bold text-emerald-600">Căn cứ:</span>
                           {alignment.rightCitations.map((c: string) => <Badge key={c} variant="outline" className="text-[10px]">{c}</Badge>)}
                        </div>
                      )}
                    </div>
                  </div>
                  {alignment.rationale && (
                    <div className="p-3 bg-teal-50 border-teal-200 rounded-xl text-xs text-slate-700">
                      <strong>Nhận định:</strong> {alignment.rationale}
                    </div>
                  )}
                </div>
              ))
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center h-48 p-8 text-center bg-white rounded-2xl border border-slate-200">
          <Info className="w-10 h-10 text-teal-500 mb-3" />
          <h2 className="text-lg font-bold mb-2">Chưa có kết quả đối chiếu</h2>
          <p className="text-gray-600 text-sm">Vui lòng chọn 2 văn bản pháp luật để bắt đầu.</p>
        </div>
      )}
    </div>
  );
};

export default ComparisonPage;
