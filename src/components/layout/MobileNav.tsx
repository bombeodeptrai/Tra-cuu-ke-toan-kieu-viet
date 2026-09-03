import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Library, Search, MessageSquareText, Settings, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Trang chủ' },
    { to: '/thu-vien', icon: Library, label: 'Thư viện' },
    { to: '/tien-ich', icon: Calculator, label: 'Tiện ích' },
    { to: '/tra-cuu', icon: Search, label: 'Tra cứu' },
    { to: '/hoi-dap-ai', icon: MessageSquareText, label: 'Hỏi AI' },
    { to: '/cai-dat', icon: Settings, label: 'Cài đặt' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-t border-border/80 pb-safe shadow-lg">
      <div className="flex items-center justify-around h-16 px-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center w-full h-full py-1 text-muted-foreground transition-all duration-200",
              isActive 
                ? "text-emerald-600 dark:text-emerald-400 font-bold scale-105" 
                : "hover:text-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
