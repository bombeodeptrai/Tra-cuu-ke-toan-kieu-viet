import React from 'react';
import { NavLink } from 'react-router-dom';
import { Building2, LayoutDashboard, Library, Search, MessageSquareText, Settings } from 'lucide-react';
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
    { to: '/hoi-dap-ai', icon: MessageSquareText, label: 'Hỏi đáp AI' },
    { to: '/cai-dat', icon: Settings, label: 'Cài đặt' },
  ];

  return (
    <div className="flex h-full w-full flex-col bg-card border-r border-border">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-lg text-primary">
          <Building2 className="h-6 w-6" />
        </div>
        <div>
          <h2 className="font-bold text-lg tracking-tight text-foreground">{APP_NAME}</h2>
          <p className="text-xs text-muted-foreground">Tra Cứu Thông Minh</p>
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
      
      <div className="p-4 mt-auto border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Phiên bản 1.0</span>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  );
}
