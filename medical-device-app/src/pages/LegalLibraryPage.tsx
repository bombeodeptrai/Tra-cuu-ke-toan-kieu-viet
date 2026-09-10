// src/pages/LegalLibraryPage.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Scale,
  Search,
  ExternalLink,
  BookOpen,
  Calendar,
  Building,
  ShieldCheck,
  FolderDown,
  ArrowRight,
  FileText,
  Sparkles,
  Layers
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LEGAL_MANIFEST, LegalDocItem } from '@/data/legal-manifest';
import driveManifest from '@/data/drive-manifest.json';

export const LegalLibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const navigate = useNavigate();

  const categories = [
    { key: 'ALL', label: 'Tất Cả 12 Văn Bản' },
    { key: 'medical_device', label: 'Quản Lý TBYT (VBHN 08, TT 24, NĐ 98)' },
    { key: 'bidding', label: 'Đấu Thầu TBYT (NĐ 214, TT 57, Luật 22)' },
    { key: 'clinic_insurance', label: 'Phòng Khám & BHYT (Luật KCB, NĐ 75)' },
    { key: 'tax_finance', label: 'Thuế & Liên Kết (TT 219, NĐ 132)' }
  ];

  const filteredDocs = LEGAL_MANIFEST.filter((doc) => {
    const matchSearch =
      doc.docNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.articles.some(
        (a) =>
          a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          a.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          a.articleNumber.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchCat = selectedCategory === 'ALL' || doc.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="space-y-6 pb-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
              Cơ sở dữ liệu pháp luật chuyên sâu
            </span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Scale className="w-6 h-6 text-teal-600" />
            Thư Viện Pháp Luật Toàn Văn & Phân Tích Thực Chiến
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Kho 12 văn bản quy phạm pháp luật then chốt phục vụ hồ sơ dự thầu Kiểu Việt và điều hành Phòng khám Hòa Đức.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50 px-3 py-1 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            Nguồn hethongphapluat.com
          </Badge>
          <a
            href={`https://drive.google.com/drive/folders/${driveManifest.banGocFolderId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold px-3 py-1.5 rounded-xl transition-colors shadow-2xs"
          >
            <FolderDown className="w-4 h-4 text-teal-600" />
            <span>Kho Bản Gốc Google Drive</span>
            <ExternalLink className="w-3 h-3 text-teal-500" />
          </a>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <Input
            placeholder="Tìm theo số hiệu văn bản (NĐ 214, TT 57, 08/VBHN), từ khóa điều khoản hoặc nội dung quy định..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-slate-50 border-slate-200 text-xs text-slate-900 focus:bg-white"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.key
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 12 Legal Documents Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocs.map((doc) => (
          <Card
            key={doc.id}
            className="bg-white border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 rounded-2xl flex flex-col justify-between"
          >
            <CardHeader className="p-5 pb-3 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-xl text-xs font-black bg-teal-700 text-white shadow-2xs">
                  {doc.docNumber}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Còn hiệu lực
                </span>
              </div>

              <CardTitle className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 hover:text-teal-700 transition-colors">
                <Link to={`/phap-luat/${doc.id}`}>
                  {doc.title}
                </Link>
              </CardTitle>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-0.5">
                <span className="font-medium text-slate-700">{doc.issuer}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {doc.effectiveDate}
                </span>
              </div>

              <CardDescription className="text-xs text-slate-600 line-clamp-2 pt-1">
                {doc.summary}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-5 pt-0 space-y-3">
              {/* Practical takeaway snippet */}
              <div className="p-2.5 rounded-xl bg-teal-50/60 border border-teal-100 text-[11px] text-teal-900 line-clamp-2">
                <strong>Ý nghĩa Kiểu Việt:</strong> {doc.practicalTakeaway}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
                <span className="font-semibold text-teal-700">
                  {doc.articles.length} điều khoản toàn văn
                </span>
                <div className="flex items-center gap-1.5">
                  <a
                    href={`https://drive.google.com/drive/folders/${doc.driveFolderId || driveManifest.banGocFolderId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-teal-700 hover:bg-slate-100 transition-colors"
                    title="Mở Google Drive bản gốc"
                  >
                    <FolderDown className="w-4 h-4" />
                  </a>
                  <a
                    href={doc.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-teal-700 hover:bg-slate-100 transition-colors"
                    title="Xem trên hethongphapluat.com"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <Button
                onClick={() => navigate(`/phap-luat/${doc.id}`)}
                className="w-full bg-slate-900 hover:bg-teal-700 text-white font-bold text-xs h-9 rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Đọc Toàn Văn & Phân Tích</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default LegalLibraryPage;
