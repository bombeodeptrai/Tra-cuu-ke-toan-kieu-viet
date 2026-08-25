import React from 'react';
import { NavLink } from 'react-router-dom';
import { Building2, LayoutDashboard, Library, Search, MessageSquareText, Settings, BookOpen, Download, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { APP_NAME } from '@/lib/utils/constants';

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Trang chủ' },
    { to: '/thu-vien', icon: Library, label: 'Thư viện nghị định' },
    { to: '/tra-cuu', icon: Search, label: 'Tra cứu' },
    { to: '/tai-khoan', icon: BookOpen, label: 'Hệ thống Tài khoản' },
    { to: '/bieu-mau', icon: Download, label: 'Biểu mẫu' },
    { to: '/hoi-dap-ai', icon: MessageSquareText, label: 'Hỏi đáp AI' },
    { to: '/cai-dat', icon: Settings, label: 'Cài đặt' },
  ];

  return (
    <div className="flex h-full w-full flex-col bg-card border-r border-border shadow-sm">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-white px-2 py-1.5 rounded-lg shadow-sm border border-border/50">
          <img src="https://kieuviet.com.vn/wp-content/uploads/2024/10/logo-kieu-viet.png" alt="Kiều Việt" className="h-8 object-contain" />
        </div>
        <div>
          <h2 className="font-bold text-base tracking-tight text-foreground leading-tight">Tra Cứu Kế Toán</h2>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mt-0.5">Nội bộ Kiều Việt</p>
        </div>
      </div>
      
      <div className="flex-1 px-4 space-y-2 py-4 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) => cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all text-sm font-medium",
              isActive 
                ? "bg-primary/10 text-primary border-r-2 border-primary" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="px-4 mb-4">
        <div className="border-t border-border pt-4">
          <a
            href="https://kt-kv.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all text-sm font-medium text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
          >
            <LineChart className="h-5 w-5" />
            Phân tích Tài chính (New)
          </a>
        </div>
      </div>
      
      <div className="p-4 mt-auto border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Phiên bản 1.0</span>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  );
}
