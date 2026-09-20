import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Building,
  Scale,
  ShieldCheck,
  Download,
  ExternalLink,
  Bot,
  Printer,
  Copy,
  Check,
  Search,
  BookOpen,
  ZoomIn,
  ZoomOut,
  FolderDown,
  Layers,
  Sparkles,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import type { LegalDocItem, LegalArticle } from '@/data/legal-manifest';
import driveManifest from '@/data/drive-manifest.json';
import { apiClient } from '@/lib/api/client';

export const LegalDocumentDetailPage: React.FC = () => {
  const { docId } = useParams<{ docId: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const targetDieu = searchParams.get('dieu');

  const [doc, setDoc] = useState<LegalDocItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        if (!docId) return;
        const data = await apiClient.getDocumentById(docId);
        setDoc(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoc();
  }, [docId]);

  const [activeTab, setActiveTab] = useState<'fulltext' | 'analysis' | 'timeline'>('fulltext');
  const [tocFilter, setTocFilter] = useState('');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [copiedArticle, setCopiedArticle] = useState<string | null>(null);
  const [highlightedDieu, setHighlightedDieu] = useState<string | null>(targetDieu);

  // Jump to article when query param exists
  useEffect(() => {
    if (targetDieu && doc) {
      setHighlightedDieu(targetDieu);
      setActiveTab('fulltext');
      setTimeout(() => {
        const el = document.getElementById(`dieu-${targetDieu.toLowerCase().replace(/\s+/g, '-')}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('ring-2', 'ring-teal-500', 'bg-teal-50/60');
          setTimeout(() => {
            el.classList.remove('ring-2', 'ring-teal-500', 'bg-teal-50/60');
          }, 3000);
        }
      }, 300);
    }
  }, [targetDieu, doc]);

  const handleCopyCitation = (art: LegalArticle) => {
    if (!doc) return;
    const citation = `Căn cứ ${art.articleNumber} (${art.title}) - ${doc.docNumber} (${doc.title}) do ${doc.issuer} ban hành: "${art.content}" [Nguồn: hethongphapluat.com / Drive Kiểu Việt: ${driveManifest.rootFolderId}]`;
    navigator.clipboard.writeText(citation);
    setCopiedArticle(art.articleNumber);
    setTimeout(() => setCopiedArticle(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToArticle = (artNumber: string) => {
    const slug = artNumber.toLowerCase().replace(/\s+/g, '-');
    const el = document.getElementById(`dieu-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-2', 'ring-teal-500', 'bg-teal-50/60');
      setTimeout(() => {
        el.classList.remove('ring-2', 'ring-teal-500', 'bg-teal-50/60');
      }, 2500);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 p-8 text-center bg-white rounded-2xl border border-slate-200">
        <Loader2 className="w-12 h-12 text-teal-500 animate-spin mb-4" />
        <h2 className="text-xl font-bold mb-2">Đang tải chi tiết tài liệu...</h2>
      </div>
    );
  }

  if (error || !doc) {
    return (
      <div className="flex flex-col items-center justify-center h-64 p-8 text-center bg-white rounded-2xl border border-slate-200">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h2 className="text-xl font-bold mb-2">Không tải được tài liệu</h2>
        <p className="text-gray-600 mb-6">{error?.message || `Mã tài liệu "${docId}" không tồn tại hoặc có lỗi xảy ra.`}</p>
        <div className="flex gap-4">
          <Button onClick={() => window.location.reload()} className="bg-teal-600 text-white hover:bg-teal-700 font-semibold">
            Thử lại
          </Button>
          <Link to="/phap-luat" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 font-semibold border border-slate-200">
            Quay về thư viện
          </Link>
        </div>
      </div>
    );
  }

  const filteredArticles = doc.articles.filter(
    (a) =>
      a.articleNumber.toLowerCase().includes(tocFilter.toLowerCase()) ||
      a.title.toLowerCase().includes(tocFilter.toLowerCase()) ||
      a.content.toLowerCase().includes(tocFilter.toLowerCase())
  );

  const getFontSizeClass = () => {
    if (fontSize === 'sm') return 'text-xs leading-relaxed';
    if (fontSize === 'lg') return 'text-base leading-loose';
    return 'text-sm leading-normal';
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Breadcrumb & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <Link
          to="/phap-luat"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-teal-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Thư viện 12 văn bản pháp luật</span>
        </Link>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            Nguồn hethongphapluat.com
          </Badge>
          <Badge variant="outline" className="border-teal-300 text-teal-700 bg-teal-50 px-2.5 py-0.5 text-[11px] font-semibold">
            Toàn văn đã kiểm chứng
          </Badge>
        </div>
      </div>

      {/* Document Header Box */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div className="space-y-2 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-xl text-xs font-black bg-teal-700 text-white shadow-2xs">
                {doc.docNumber}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {doc.issuer}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Hiệu lực: {doc.effectiveDate}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                Còn hiệu lực
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
              {doc.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {doc.summary}
            </p>
          </div>

          {/* Action Buttons Toolbar */}
          <div className="flex flex-wrap items-center lg:flex-col lg:items-end gap-2 shrink-0">
            <a
              href={`https://drive.google.com/drive/folders/${doc.driveFolderId || driveManifest.banGocFolderId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs"
            >
              <FolderDown className="w-4 h-4" />
              <span>Tải Bản Gốc Google Drive</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>

            <a
              href={doc.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-teal-600" />
              <span>Xem trên hethongphapluat</span>
            </a>

            <Link
              to={`/hoi-dap-ai?q=${encodeURIComponent('Tóm tắt và phân tích Điều khoản quan trọng nhất của ' + doc.docNumber)}`}
              className="inline-flex items-center gap-1.5 bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1.5 rounded-xl border border-teal-200 transition-colors"
            >
              <Bot className="w-3.5 h-3.5 text-teal-600" />
              <span>Hỏi AI Về Văn Bản Này</span>
            </Link>
          </div>
        </div>

        {/* Practical Takeaway Alert */}
        <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200 text-teal-900 text-xs flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Ý nghĩa thực chiến Kiểu Việt:</strong>{' '}
            <span>{doc.practicalTakeaway}</span>
          </div>
        </div>

        {/* Reader Controls Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Cỡ chữ đọc:</span>
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                  fontSize === 'sm' ? 'bg-white text-teal-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                  fontSize === 'base' ? 'bg-white text-teal-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Chuẩn
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                  fontSize === 'lg' ? 'bg-white text-teal-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                A+
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="text-xs h-8 border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <Printer className="w-3.5 h-3.5 mr-1 text-slate-500" />
              In văn bản
            </Button>
          </div>
        </div>
      </div>

      {/* Main Reader Layout with Left Table of Contents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left TOC Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-xs sticky top-20">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-teal-600" />
                Mục Lục Điều Khoản ({doc.articles.length})
              </h3>
            </div>

            <div className="relative mb-3">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
              <Input
                placeholder="Lọc Điều khoản..."
                value={tocFilter}
                onChange={(e) => setTocFilter(e.target.value)}
                className="pl-8 h-8 text-xs bg-slate-50 border-slate-200 text-slate-900 focus:bg-white"
              />
            </div>

            <div className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
              {filteredArticles.map((art) => {
                const isSelected = highlightedDieu === art.articleNumber;
                return (
                  <button
                    key={art.articleNumber}
                    onClick={() => {
                      setHighlightedDieu(art.articleNumber);
                      scrollToArticle(art.articleNumber);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex flex-col ${
                      isSelected
                        ? 'bg-teal-50 border border-teal-200 text-teal-900 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span className="font-bold text-teal-700">{art.articleNumber}</span>
                    <span className="text-[11px] text-slate-600 line-clamp-1">{art.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Center / Right Content Area (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
            <TabsList className="bg-white border border-slate-200/90 p-1 rounded-2xl w-full justify-start shadow-2xs">
              <TabsTrigger value="fulltext" className="text-xs font-semibold data-[state=active]:bg-teal-700 data-[state=active]:text-white rounded-xl">
                Toàn Văn Điều Khoản ({doc.articles.length})
              </TabsTrigger>
              <TabsTrigger value="analysis" className="text-xs font-semibold data-[state=active]:bg-teal-700 data-[state=active]:text-white rounded-xl">
                Phân Tích Nghiệp Vụ Kiểu Việt
              </TabsTrigger>
              <TabsTrigger value="timeline" className="text-xs font-semibold data-[state=active]:bg-teal-700 data-[state=active]:text-white rounded-xl">
                Lộ Trình & Điểm Mới
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: FULL TEXT ARTICLES */}
            <TabsContent value="fulltext" className="space-y-4 mt-4">
              {filteredArticles.map((art) => {
                const slug = art.articleNumber.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div
                    key={art.articleNumber}
                    id={`dieu-${slug}`}
                    className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-3 transition-all scroll-mt-24"
                  >
                    <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2.5">
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-teal-100 text-teal-800 mb-1">
                          {art.articleNumber}
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          {art.title}
                        </h3>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopyCitation(art)}
                        className="text-xs h-8 text-slate-500 hover:text-teal-700 hover:bg-teal-50"
                        title="Sao chép trích dẫn chuẩn pháp lý"
                      >
                        {copiedArticle === art.articleNumber ? (
                          <>
                            <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                            <span className="text-emerald-600 font-bold">Đã chép</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 mr-1" />
                            <span>Trích dẫn</span>
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Full Article Content */}
                    <div className={`text-slate-800 whitespace-pre-line font-normal ${getFontSizeClass()}`}>
                      {art.content}
                    </div>

                    {/* Practical Impact Box */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 space-y-1">
                      <div className="font-bold text-teal-800 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                        Áp dụng thực tiễn cho Kiểu Việt & Phòng khám Hòa Đức:
                      </div>
                      <p className="text-slate-600 leading-relaxed pl-5">
                        {art.practicalImpact}
                      </p>
                    </div>
                  </div>
                );
              })}
            </TabsContent>

            {/* TAB 2: PRACTICAL BUSINESS ANALYSIS */}
            <TabsContent value="analysis" className="space-y-4 mt-4">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-teal-600" />
                  Báo Cáo Phân Tích Pháp Lý Trọng Yếu — {doc.docNumber}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tài liệu này được pháp chế Kiểu Việt và bộ phận kế toán - đấu thầu rà soát trực tiếp nhằm giảm thiểu rủi ro pháp lý và tối ưu hóa hồ sơ dự thầu tại các cơ sở y tế công lập:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-200 space-y-2">
                    <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wide">
                      1. Điểm cốt lõi cho Đấu thầu TBYT
                    </h4>
                    <p className="text-xs text-teal-800 leading-relaxed">
                      {doc.practicalTakeaway}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      2. Hồ sơ chứng từ bắt buộc phải lưu
                    </h4>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      <li>Bản gốc PDF/Scan có chữ ký số hoặc dấu đỏ lưu trong Google Drive.</li>
                      <li>Hợp đồng ủy quyền phân phối (LOA) và cam kết bảo hành của hãng.</li>
                      <li>Biên bản phân loại rủi ro A/B/C/D và CFS hợp pháp hóa lãnh sự.</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                  <span>Trạng thái hồ sơ: Đầy đủ 100% căn cứ</span>
                  <Link to="/so-sanh" className="text-teal-700 font-semibold hover:underline">
                    Xem so sánh 2 cột đối chiếu &rarr;
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* TAB 3: TIMELINE & TRANSITIONS */}
            <TabsContent value="timeline" className="space-y-4 mt-4">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal-600" />
                  Lộ Trình Triển Khai & Các Mốc Chuyển Tiếp Bắt Buộc
                </h3>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40 flex items-start gap-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-600 text-white shrink-0">
                      {doc.effectiveDate}
                    </span>
                    <div>
                      <div className="font-bold text-xs text-emerald-950">Mốc Ngày Hiệu Lực Thi Hành</div>
                      <p className="text-xs text-emerald-800 mt-0.5">
                        Văn bản {doc.docNumber} chính thức có hiệu lực pháp luật. Mọi giao dịch phát sinh từ thời điểm này phải tuân thủ điều khoản mới.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-700 text-white shrink-0">
                      Lưu ý
                    </span>
                    <div>
                      <div className="font-bold text-xs text-slate-900">Quy Định Chuyển Tiếp & Hạn Định Kỳ</div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Đối với hợp đồng đã ký hoặc E-HSMT đã phát hành trước ngày hiệu lực thì tiếp tục áp dụng quy định cũ theo điều khoản chuyển tiếp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default LegalDocumentDetailPage;
