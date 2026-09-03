import React, { useState } from 'react';
import { Building2, Search, Sun, Moon, Bell, Menu, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Sidebar } from './Sidebar';
import { useSettingsStore } from '@/stores/settings-store';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { theme, setTheme } = useSettingsStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tra-cuu?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/20 bg-background/70 backdrop-blur-xl text-foreground transition-colors duration-300">
      <div className="flex h-16 items-center px-4 md:px-8 gap-4 justify-between w-full max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <Sidebar />
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2 font-bold text-lg cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-white p-1 rounded-lg shadow-sm flex items-center border border-border/50">
              <img src="https://kieuviet.com.vn/wp-content/uploads/2024/10/logo-kieu-viet.png" alt="Kiểu Việt" className="h-6 object-contain" />
            </div>
            <span className="hidden sm:inline-block tracking-tight">Kế Toán</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 font-bold text-xl cursor-pointer mr-6" onClick={() => navigate('/')}>
            <div className="bg-white p-1.5 rounded-lg shadow-soft flex items-center border border-border/50">
              <img src="https://kieuviet.com.vn/wp-content/uploads/2024/10/logo-kieu-viet.png" alt="Kiểu Việt" className="h-6 object-contain" />
            </div>
            <span className="tracking-tight font-semibold">Tra Cứu</span>
        </div>

        <div className="hidden md:flex flex-1 max-w-xl mx-auto">
          <form onSubmit={handleSearch} className="w-full relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              type="search"
              placeholder="Tìm kiếm thông tư, nghị định..."
              className="w-full bg-muted/40 hover:bg-muted/60 pl-10 h-10 rounded-full border-border/50 focus-visible:ring-1 focus-visible:ring-primary/30 transition-all shadow-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        <div className="flex items-center gap-1.5">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/tien-ich')}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded-lg h-9 px-3 border border-emerald-200 dark:border-emerald-800/60"
          >
            <Calculator className="h-4 w-4 text-emerald-600" />
            <span>Tiện ích kế toán</span>
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full w-9 h-9 text-muted-foreground hover:text-foreground">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 text-muted-foreground hover:text-foreground">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
