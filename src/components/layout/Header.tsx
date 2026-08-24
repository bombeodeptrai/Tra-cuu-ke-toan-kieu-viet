import React, { useState } from 'react';
import { Building2, Search, Sun, Moon, Bell, Menu } from 'lucide-react';
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
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl text-foreground shadow-sm transition-colors duration-300">
      <div className="flex h-16 items-center px-4 md:px-6 gap-4 justify-between w-full max-w-7xl mx-auto">
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
          <div className="flex items-center gap-2 font-bold text-lg text-primary">
            <div className="bg-white p-1 rounded shadow-sm flex items-center">
              <img src="https://kieuviet.com.vn/wp-content/uploads/2024/10/logo-kieu-viet.png" alt="Kiểu Việt" className="h-7 object-contain" />
            </div>
            <span className="hidden sm:inline-block ml-1">Kế Toán</span>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-md ml-4">
          <form onSubmit={handleSearch} className="w-full relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm nghị định..."
              className="w-full bg-muted/50 pl-9 rounded-full border-muted-foreground/20 focus-visible:ring-primary/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
