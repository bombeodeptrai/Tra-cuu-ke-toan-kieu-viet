// src/components/layout/AppLayout.tsx
import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileCheck2,
  Stethoscope,
  Building2,
  Scale,
  FileText,
  Briefcase,
  Menu,
  X,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Calculator,
  Search,
  ArrowRightLeft,
  Bot,
  BookOpen,
  FolderDown
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import driveManifest from '@/data/drive-manifest.json';
import { medicalRoutes } from '@/lib/routes';

const PortalSwitcher = () => (
  <a
    href="https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/"
    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-700 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 transition-colors shadow-2xs min-h-[44px] lg:min-h-0"
    aria-label="Chuyển sang web kế toán"
  >
    <span>Chuyển sang web kế toán</span>
    <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
  </a>
);

const stripSlash = (path: string) => path.replace(/^\//, '');

export const AppLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const businessNav = [
    { to: '/', label: 'Tổng Quan', icon: LayoutDashboard, desc: 'Chỉ huy đấu thầu & điều hành' },
    { to: medicalRoutes.tenders, label: 'Đấu Thầu TBYT', icon: Briefcase, desc: 'Soi HSMT & bảo lãnh số' },
    { to: '/thiet-bi', label: 'Danh Mục Thiết Bị', icon: Stethoscope, desc: 'Phân loại A/B/C/D & TT 57' },
    { to: '/tuan-thu-40', label: '40 Tiêu Chí MD', icon: FileCheck2, desc: 'Bộ tiêu chuẩn MD01 - MD40' },
    { to: '/phong-kham-hoa-duc', label: 'Phòng Khám Hòa Đức', icon: Building2, desc: 'Thuế GTGT, Khấu hao & NĐ 132' }
  ];

  const legalAndToolsNav = [
    { to: medicalRoutes.laws, label: 'Thư Viện Pháp Luật', icon: Scale, desc: '12 VBQPPL y tế toàn văn' },
    { to: '/tra-cuu', label: 'Tra Cứu Nâng Cao', icon: Search, desc: 'Tìm văn bản, điều khoản, HS' },
    { to: medicalRoutes.comparison, label: 'So Sánh Điểm Mới', icon: ArrowRightLeft, desc: 'Đối chiếu 2 cột NĐ 214 & TT 57' },
    { to: medicalRoutes.templates, label: '14 Biểu Mẫu E-HSDT', icon: FileText, desc: 'Mẫu đơn thầu, LOA, SLA, HĐ' },
    { to: '/tien-ich', label: 'Tiện Ích Tính Toán', icon: Calculator, desc: 'Phân bổ thuế & trần EBITDA' },
    { to: medicalRoutes.chat, label: 'Trợ Lý AI Y Tế', icon: Bot, desc: 'RAG hỏi đáp trích dẫn luật' },
    { to: '/huong-dan', label: 'Cẩm Nang Nghiệp Vụ', icon: BookOpen, desc: 'Sổ tay 7 bước dự thầu' }
  ];

  const allNavItems = [...businessNav, ...legalAndToolsNav];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-teal-100 selection:text-teal-900">
      {/* Top Professional Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 border-b border-slate-800 px-3 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 tracking-wide">
              CÔNG TY CỔ PHẦN KIỂU VIỆT
            </span>
            <span className="truncate text-slate-300 text-[11px] sm:text-xs">
              Hệ Thống Đấu Thầu TBYT & Phòng Khám Đa Khoa Hòa Đức (04-06-08 Đinh Công Tráng, TP. Quy Nhơn)
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 flex-shrink-0 text-[11px]">
            <span className="inline-flex items-center gap-1 text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
              <ShieldCheck className="w-3 h-3 text-teal-400" />
              NĐ 214/2025/NĐ-CP
            </span>
            <span className="inline-flex items-center gap-1 text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              TT 57/2025/TT-BYT
            </span>
            <span className="inline-flex items-center gap-1 text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
              <AlertTriangle className="w-3 h-3 text-amber-400" />
              NĐ 132 (Liên Kết)
            </span>
          </div>
        </div>
      </div>

      {/* Main Header with Kiểu Việt Brand Identity */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center">
              <img
                src="https://kieuviet.com.vn/wp-content/uploads/2024/10/logo-kieu-viet.png"
                alt="Kiểu Việt"
                className="h-8 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
                  KIỂU VIỆT HEALTHCARE
                </span>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
                  Đấu Thầu & Phòng Khám
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Hệ sinh thái TBYT Bệnh Viện & Phòng Khám Đa Khoa Hòa Đức
              </p>
            </div>
          </div>

          {/* Desktop Right Badges & Links */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://drive.google.com/drive/folders/${driveManifest.rootFolderId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-xl border border-teal-200 transition-colors shadow-2xs"
            >
              <FolderDown className="w-4 h-4 text-teal-600" />
              <span>Google Drive Kiểu Việt</span>
              <ExternalLink className="w-3.5 h-3.5 text-teal-500" />
            </a>

            <PortalSwitcher />
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50 min-h-[44px] min-w-[44px]"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-5 gap-6 relative">
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0 space-y-4">
          {/* Group 1: Business */}
          <nav className="space-y-1 bg-white border border-slate-200/90 rounded-2xl p-2.5 shadow-xs">
            <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Nghiệp Vụ Đấu Thầu & Y Tế
            </div>
            {businessNav.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'group flex items-start gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150',
                      isActive
                        ? 'bg-teal-50 text-teal-800 font-bold border-l-4 border-teal-600 shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    )
                  }
                >
                  <Icon
                    className={cn(
                      'w-4 h-4 mt-0.5 flex-shrink-0 transition-colors',
                      location.pathname === item.to || (item.to === '/' && location.pathname === '')
                        ? 'text-teal-600'
                        : 'text-slate-400 group-hover:text-slate-600'
                    )}
                  />
                  <div className="truncate">
                    <div className="truncate font-semibold">{item.label}</div>
                    <div className="text-[10px] text-slate-400 font-normal truncate">
                      {item.desc}
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </nav>

          {/* Group 2: Legal & Tools */}
          <nav className="space-y-1 bg-white border border-slate-200/90 rounded-2xl p-2.5 shadow-xs">
            <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Pháp Luật & Công Cụ Hỗ Trợ
            </div>
            {legalAndToolsNav.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'group flex items-start gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150',
                      isActive
                        ? 'bg-teal-50 text-teal-800 font-bold border-l-4 border-teal-600 shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    )
                  }
                >
                  <Icon
                    className={cn(
                      'w-4 h-4 mt-0.5 flex-shrink-0 transition-colors',
                      location.pathname === item.to
                        ? 'text-teal-600'
                        : 'text-slate-400 group-hover:text-slate-600'
                    )}
                  />
                  <div className="truncate">
                    <div className="truncate font-semibold">{item.label}</div>
                    <div className="text-[10px] text-slate-400 font-normal truncate">
                      {item.desc}
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute inset-x-0 top-0 z-50 bg-white border-b border-slate-200 px-4 py-4 shadow-xl space-y-3 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-2">
                <div className="text-xs font-bold text-slate-400 uppercase">
                  Danh Mục Phân Hệ
                </div>
            </div>
            <div className="mb-4">
              <PortalSwitcher />
            </div>
            {allNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to || (item.to === '/' && location.pathname === '');
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors min-h-[44px]',
                    isActive
                      ? 'bg-teal-50 text-teal-800 font-bold border-l-4 border-teal-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  <Icon className="w-5 h-5 text-teal-600" aria-hidden="true" />
                  <div>
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-xs text-slate-400 font-normal">{item.desc}</div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 pb-24 lg:pb-6 relative z-10">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-2 flex justify-around items-center shadow-lg pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
        {[
          { to: '/', label: 'Tổng Quan', icon: LayoutDashboard },
          { to: medicalRoutes.tenders, label: 'Đấu Thầu', icon: Briefcase },
          { to: medicalRoutes.laws, label: 'Pháp Luật', icon: Scale },
          { to: medicalRoutes.comparison, label: 'So Sánh', icon: ArrowRightLeft },
          { to: medicalRoutes.chat, label: 'AI RAG', icon: Bot }
        ].map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to || (item.to === '/' && location.pathname === '');
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                'flex flex-col items-center justify-center min-h-[48px] min-w-[48px] px-2 rounded-lg text-[10px] font-medium transition-colors',
                isActive ? 'text-teal-700 font-bold' : 'text-slate-500 hover:text-slate-900'
              )}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={cn('w-5 h-5 mb-0.5', isActive ? 'text-teal-600' : 'text-slate-400')} aria-hidden="true" />
              <span className="truncate max-w-[64px] text-center">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default AppLayout;
