import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useSettingsStore } from '@/stores/settings-store';
import { useDecreeStore } from '@/stores/decree-store';
import { Toaster } from '@/components/ui/toaster';

const HomePage = React.lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const LibraryPage = React.lazy(() => import('./pages/LibraryPage').then(module => ({ default: module.LibraryPage })));
const DecreeDetailPage = React.lazy(() => import('./pages/DecreeDetailPage').then(module => ({ default: module.DecreeDetailPage })));
const SearchPage = React.lazy(() => import('./pages/SearchPage').then(module => ({ default: module.SearchPage })));
const ChatAIPage = React.lazy(() => import('./pages/ChatAIPage').then(module => ({ default: module.ChatAIPage })));
const SettingsPage = React.lazy(() => import('./pages/SettingsPage').then(module => ({ default: module.SettingsPage })));
const ChartOfAccountsPage = React.lazy(() => import('./pages/ChartOfAccountsPage').then(module => ({ default: module.ChartOfAccountsPage })));
const FormsPage = React.lazy(() => import('./pages/FormsPage').then(module => ({ default: module.FormsPage })));
const ToolsPage = React.lazy(() => import('./pages/ToolsPage').then(module => ({ default: module.ToolsPage })));
const ComparisonPage = React.lazy(() => import('./pages/ComparisonPage').then(module => ({ default: module.ComparisonPage })));
const TaxAuditPage = React.lazy(() => import('./pages/TaxAuditPage').then(module => ({ default: module.TaxAuditPage })));
const GuidePage = React.lazy(() => import('./pages/GuidePage').then(module => ({ default: module.GuidePage })));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const NotesPage = React.lazy(() => import('./pages/NotesPage').then(module => ({ default: module.NotesPage })));

export default function App() {
  const { theme } = useSettingsStore();
  const { fetchDecrees, decrees } = useDecreeStore();

  React.useEffect(() => {
    fetchDecrees();
  }, [fetchDecrees]);

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <TooltipProvider>
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <React.Suspense fallback={<div role="status" className="mx-auto max-w-7xl px-4 py-12 text-center text-muted-foreground">Đang mở chức năng...</div>}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="thu-vien" element={<LibraryPage />} />
              <Route path="thu-vien/:id" element={<DecreeDetailPage />} />
              <Route path="tra-cuu" element={<SearchPage />} />
              <Route path="tai-khoan" element={<ChartOfAccountsPage />} />
              <Route path="bieu-mau" element={<FormsPage />} />
              <Route path="tien-ich" element={<ToolsPage />} />
              <Route path="so-sanh" element={<ComparisonPage />} />
              <Route path="kiem-tra-thue" element={<TaxAuditPage />} />
              <Route path="hoi-dap-ai" element={<ChatAIPage />} />
              <Route path="so-tay" element={<NotesPage />} />
              <Route path="huong-dan" element={<GuidePage />} />
              <Route path="cai-dat" element={<SettingsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </React.Suspense>
      </HashRouter>
      <Toaster />
    </TooltipProvider>
  );
}

