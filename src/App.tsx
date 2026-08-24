import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { LibraryPage } from './pages/LibraryPage';
import { DecreeDetailPage } from './pages/DecreeDetailPage';
import { SearchPage } from './pages/SearchPage';
import { ChatAIPage } from './pages/ChatAIPage';
import { SettingsPage } from './pages/SettingsPage';
import { ChartOfAccountsPage } from './pages/ChartOfAccountsPage';
import { FormsPage } from './pages/FormsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useSettingsStore } from '@/stores/settings-store';
import { useDecreeStore } from '@/stores/decree-store';
import { Toaster } from '@/components/ui/toaster';

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
      <HashRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="thu-vien" element={<LibraryPage />} />
            <Route path="thu-vien/:id" element={<DecreeDetailPage />} />
            <Route path="tra-cuu" element={<SearchPage />} />
            <Route path="tai-khoan" element={<ChartOfAccountsPage />} />
            <Route path="bieu-mau" element={<FormsPage />} />
            <Route path="hoi-dap-ai" element={<ChatAIPage />} />
            <Route path="cai-dat" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
      <Toaster />
    </TooltipProvider>
  );
}