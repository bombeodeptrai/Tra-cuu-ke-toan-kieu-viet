// src/App.tsx
import React from 'react';
import { HashRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { DashboardPage } from '@/pages/DashboardPage';
import { TenderBiddingPage } from '@/pages/TenderBiddingPage';
import { MedicalDevicesPage } from '@/pages/MedicalDevicesPage';
import { ComplianceEnginePage } from '@/pages/ComplianceEnginePage';
import { HoaDucClinicPage } from '@/pages/HoaDucClinicPage';
import { LegalLibraryPage } from '@/pages/LegalLibraryPage';
import { LegalDocumentDetailPage } from '@/pages/LegalDocumentDetailPage';
import { TemplatesPage } from '@/pages/TemplatesPage';
import { ComparisonPage } from '@/pages/ComparisonPage';
import { ChatAIPage } from '@/pages/ChatAIPage';
import { SearchPage } from '@/pages/SearchPage';
import { ToolsPage } from '@/pages/ToolsPage';
import { GuidePage } from '@/pages/GuidePage';
import { medicalRoutes } from '@/lib/routes';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
    <h2 className="text-2xl font-bold mb-4">Không tìm thấy trang</h2>
    <p className="text-gray-600 mb-6">Trang hoặc mã dữ liệu bạn yêu cầu không tồn tại.</p>
    <Link to={medicalRoutes.laws} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      Quay về thư viện pháp luật
    </Link>
  </div>
);

const stripSlash = (path: string) => path.replace(/^\//, '');

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path={stripSlash(medicalRoutes.tenders)} element={<TenderBiddingPage />} />
          <Route path="thiet-bi" element={<MedicalDevicesPage />} />
          <Route path="tuan-thu-40" element={<ComplianceEnginePage />} />
          <Route path="phong-kham-hoa-duc" element={<HoaDucClinicPage />} />
          <Route path={stripSlash(medicalRoutes.laws)} element={<LegalLibraryPage />} />
          <Route path={`${stripSlash(medicalRoutes.laws)}/:docId`} element={<LegalDocumentDetailPage />} />
          <Route path="tra-cuu" element={<SearchPage />} />
          <Route path={stripSlash(medicalRoutes.comparison)} element={<ComparisonPage />} />
          <Route path={stripSlash(medicalRoutes.templates)} element={<TemplatesPage />} />
          <Route path="tien-ich" element={<ToolsPage />} />
          <Route path={stripSlash(medicalRoutes.chat)} element={<ChatAIPage />} />
          <Route path="huong-dan" element={<GuidePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
