import React from 'react';
import { NavLink } from 'react-router-dom';
import { Building2, LayoutDashboard, Library, Search, MessageSquareText, Settings, BookOpen, Download, LineChart, ScanText, Sparkles, LogOut, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { APP_NAME } from '@/lib/utils/constants';
import { useUserStore } from '@/stores/user-store';

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const { username, logout } = useUserStore();
  
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Trang chủ' },
    { to: '/thu-vien', icon: Library, label: 'Thư viện nghị định' },
    { to: '/tra-cuu', icon: Search, label: 'Tra cứu' },
    { to: '/tai-khoan', icon: BookOpen, label: 'Hệ thống Tài khoản' },
    { to: '/bieu-mau', icon: Download, label: 'Biểu mẫu' },
    { to: '/hoi-dap-ai', icon: MessageSquareText, label: 'Hỏi đáp AI' },
    { to: '/so-tay', icon: BookOpen, label: 'Sổ tay Kế toán' },
    { to: '/huong-dan', icon: HelpCircle, label: 'Hướng dẫn sử dụng' },
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
      
      <div className="flex-1 px-4 space-y-2 py-4 overflow-y-auto custom-scrollbar">
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
        <div className="pt-2 flex flex-col gap-3">
          <a
            href="https://abs-variation-nathan-clan.trycloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group relative flex items-center justify-center gap-2 rounded-xl p-0.5 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg active:scale-95"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-80 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
            <div className="relative flex w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 py-3 text-white">
              <LineChart className="h-5 w-5" />
              <span className="font-bold text-sm tracking-wide">PHÂN TÍCH TÀI CHÍNH</span>
              <Sparkles className="h-4 w-4 text-emerald-100 absolute top-2 right-2 animate-pulse" />
            </div>
          </a>
          
          <a
            href="https://bombeodeptrai.github.io/Doc-chu-viet-tay-cham-cong/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group relative flex items-center justify-center gap-2 rounded-xl p-0.5 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg active:scale-95"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
            <div className="relative flex w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 text-white">
              <ScanText className="h-5 w-5" />
              <span className="font-bold text-sm tracking-wide">ĐỌC CHỮ VIẾT TAY</span>
            </div>
          </a>
        </div>
      </div>
      
      <div className="p-4 mt-auto border-t border-border space-y-4">
        {username && (
          <div className="flex items-center justify-between p-2 rounded-md bg-muted/50 border border-border/50">
            <span className="text-sm font-medium text-primary line-clamp-1 flex-1 px-1">👤 {username}</span>
            <button 
              onClick={logout}
              className="p-1.5 text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-md transition-colors"
              title="Đổi người dùng"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        )}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Phiên bản 1.0.1</span>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  );
}
