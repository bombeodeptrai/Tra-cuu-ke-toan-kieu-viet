import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Library, Search, MessageSquareText, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Trang chủ' },
    { to: '/thu-vien', icon: Library, label: 'Thư viện' },
    { to: '/tra-cuu', icon: Search, label: 'Tra cứu' },
    { to: '/hoi-dap-ai', icon: MessageSquareText, label: 'Hỏi AI' },
    { to: '/cai-dat', icon: Settings, label: 'Cài đặt' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center w-full h-full space-y-1 text-muted-foreground transition-colors",
              isActive && "text-primary"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
