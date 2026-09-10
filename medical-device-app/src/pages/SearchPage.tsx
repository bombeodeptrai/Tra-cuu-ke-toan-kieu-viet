// src/pages/SearchPage.tsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search as SearchIcon,
  Filter,
  Scale,
  Stethoscope,
  FileCheck2,
  FileText,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LEGAL_MANIFEST, LegalDocItem } from '@/data/legal-manifest';
import { CRITERIA_40_GROUPS } from '@/data/criteria-md';
import { MOCK_MEDICAL_DEVICES } from '@/data/mock-medical';
import { TEMPLATES_14, TemplateDoc } from '@/data/templates-14';
import { CriteriaGroup, MedicalDevice } from '@/types/medical';

export const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        legalDocs: LEGAL_MANIFEST.slice(0, 4),
        criteria: CRITERIA_40_GROUPS.slice(0, 4),
        devices: MOCK_MEDICAL_DEVICES.slice(0, 4),
        templates: TEMPLATES_14.slice(0, 4),
        totalCount: LEGAL_MANIFEST.length + CRITERIA_40_GROUPS.length + MOCK_MEDICAL_DEVICES.length + TEMPLATES_14.length
      };
    }

    const legalDocs: LegalDocItem[] = LEGAL_MANIFEST.filter(
      (d: LegalDocItem) =>
        d.docNumber.toLowerCase().includes(q) ||
        d.title.toLowerCase().includes(q) ||
        d.summary.toLowerCase().includes(q) ||
        d.articles.some(
          (a) =>
            a.articleNumber.toLowerCase().includes(q) ||
            a.title.toLowerCase().includes(q) ||
            a.content.toLowerCase().includes(q)
        )
    );

    const criteria: CriteriaGroup[] = CRITERIA_40_GROUPS.filter(
      (c: CriteriaGroup) =>
        c.code.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.legalBasis.toLowerCase().includes(q)
    );

    const devices: MedicalDevice[] = MOCK_MEDICAL_DEVICES.filter(
      (dev: MedicalDevice) =>
        dev.name.toLowerCase().includes(q) ||
        dev.code.toLowerCase().includes(q) ||
        dev.manufacturer.toLowerCase().includes(q) ||
        dev.countryOrigin.toLowerCase().includes(q) ||
        dev.registrationNumber.toLowerCase().includes(q) ||
        dev.hsCode.toLowerCase().includes(q)
    );

    const templates: TemplateDoc[] = TEMPLATES_14.filter(
      (t: TemplateDoc) =>
        t.code.toLowerCase().includes(q) ||
        t.title.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.legalBasis.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
    );

    return {
      legalDocs,
      criteria,
      devices,
      templates,
      totalCount: legalDocs.length + criteria.length + devices.length + templates.length
    };
  }, [query]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <SearchIcon className="w-6 h-6 text-teal-600" />
            Tra Cứu Toàn Diện Hệ Sinh Thái TBYT & Pháp Luật
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Tra cứu đồng thời trong 12 VBQPPL, 40 tiêu chí MD01-MD40, danh mục thiết bị A/B/C/D và 14 biểu mẫu E-HSDT.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-teal-50 text-teal-800 border-teal-200 text-xs px-3 py-1 font-semibold">
            {searchResults.totalCount} Mục Khả Dụng
          </Badge>
        </div>
      </div>

      {/* Main Search Input & Type Filter */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
        <div className="relative">
          <SearchIcon className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nhập số hiệu văn bản (NĐ 214, TT 57, TT 219), mã tiêu chí (MD01), model máy (Cobas, Voluson), mã HS..."
            className="pl-11 h-12 text-sm bg-slate-50 border-slate-200 text-slate-900 focus:bg-white rounded-xl"
          />
        </div>

        <div className="flex flex-wrap gap-2 pt-1 text-xs">
          {[
            { id: 'all', label: 'Tất Cả Phân Hệ' },
            { id: 'legal', label: `12 Văn Bản Pháp Luật (${searchResults.legalDocs.length})` },
            { id: 'criteria', label: `40 Tiêu Chí MD (${searchResults.criteria.length})` },
            { id: 'devices', label: `Thiết Bị Y Tế (${searchResults.devices.length})` },
            { id: 'templates', label: `14 Biểu Mẫu E-HSDT (${searchResults.templates.length})` }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterType(item.id)}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                filterType === item.id
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Workspace */}
      <div className="space-y-6">
        {/* Section 1: Legal Documents */}
        {(filterType === 'all' || filterType === 'legal') && searchResults.legalDocs.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-black text-slate-900">
              <Scale className="w-4 h-4 text-teal-600" />
              <span>Văn Bản Quy Phạm Pháp Luật ({searchResults.legalDocs.length})</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {searchResults.legalDocs.map((doc: LegalDocItem) => (
                <div
                  key={doc.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-400 transition-all shadow-2xs space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-200">
                      {doc.docNumber}
                    </span>
                    <Badge variant="outline" className="text-[10px] text-emerald-700 bg-emerald-50 border-emerald-300">
                      {doc.status === 'active' ? 'Đang Hiệu Lực' : 'Đã Sửa Đổi'}
                    </Badge>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 line-clamp-2">
                    {doc.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {doc.summary}
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">{doc.issuer}</span>
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/phap-luat/${doc.id}`}
                        className="inline-flex items-center gap-1 font-bold text-teal-700 hover:text-teal-900"
                      >
                        <span>Đọc toàn văn</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <a
                        href={doc.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800"
                      >
                        <span>Nguồn</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Criteria MD01-MD40 */}
        {(filterType === 'all' || filterType === 'criteria') && searchResults.criteria.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-black text-slate-900">
              <FileCheck2 className="w-4 h-4 text-emerald-600" />
              <span>Tiêu Chí Tuân Thủ MD01 - MD40 ({searchResults.criteria.length})</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {searchResults.criteria.map((cr: CriteriaGroup) => (
                <div
                  key={cr.code}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 transition-all shadow-2xs space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                      {cr.code}
                    </span>
                    <Badge variant="outline" className="text-[10px] text-slate-600 border-slate-300">
                      {cr.category}
                    </Badge>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900">
                    {cr.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {cr.description}
                  </p>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 font-mono">
                    <strong>Căn cứ:</strong> {cr.legalBasis}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Medical Devices */}
        {(filterType === 'all' || filterType === 'devices') && searchResults.devices.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-black text-slate-900">
              <Stethoscope className="w-4 h-4 text-blue-600" />
              <span>Danh Mục Thiết Bị Y Tế & Phân Nhóm TT 57 ({searchResults.devices.length})</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {searchResults.devices.map((dev: MedicalDevice) => (
                <div
                  key={dev.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 transition-all shadow-2xs space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                      {dev.code}
                    </span>
                    <Badge className="bg-teal-700 text-white text-[10px] font-bold">
                      Nhóm {dev.technicalGroup} (TT 57)
                    </Badge>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900">
                    {dev.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                    <div><strong>Hãng:</strong> {dev.manufacturer} ({dev.countryOrigin})</div>
                    <div><strong>Phân loại:</strong> Loại {dev.riskClass}</div>
                    <div><strong>Số ĐK:</strong> {dev.registrationNumber}</div>
                    <div><strong>Mã HS:</strong> {dev.hsCode}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: 14 Templates */}
        {(filterType === 'all' || filterType === 'templates') && searchResults.templates.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-black text-slate-900">
              <FileText className="w-4 h-4 text-purple-600" />
              <span>14 Biểu Mẫu E-HSDT Thực Chiến ({searchResults.templates.length})</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {searchResults.templates.map((tpl: TemplateDoc) => (
                <div
                  key={tpl.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400 transition-all shadow-2xs space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-900 border border-purple-200">
                      {tpl.code}
                    </span>
                    <Badge variant="outline" className="text-[10px] text-purple-700 border-purple-200">
                      {tpl.category}
                    </Badge>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900">
                    {tpl.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {tpl.description}
                  </p>
                  <div className="text-[10px] text-purple-800 font-mono bg-purple-50/50 p-2 rounded-lg border border-purple-100">
                    Căn cứ: {tpl.legalBasis}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchPage;
