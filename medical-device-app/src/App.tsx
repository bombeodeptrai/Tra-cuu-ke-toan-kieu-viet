// src/App.tsx
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
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

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dau-thau" element={<TenderBiddingPage />} />
          <Route path="thiet-bi" element={<MedicalDevicesPage />} />
          <Route path="tuan-thu-40" element={<ComplianceEnginePage />} />
          <Route path="phong-kham-hoa-duc" element={<HoaDucClinicPage />} />
          <Route path="phap-luat" element={<LegalLibraryPage />} />
          <Route path="phap-luat/:id" element={<LegalDocumentDetailPage />} />
          <Route path="tra-cuu" element={<SearchPage />} />
          <Route path="so-sanh" element={<ComparisonPage />} />
          <Route path="bieu-mau" element={<TemplatesPage />} />
          <Route path="tien-ich" element={<ToolsPage />} />
          <Route path="hoi-dap-ai" element={<ChatAIPage />} />
          <Route path="huong-dan" element={<GuidePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
