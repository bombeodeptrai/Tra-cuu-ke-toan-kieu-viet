import React, { useState, useEffect, useMemo } from 'react';
import { ListFilter, Search, BookOpen, ChevronRight, Hash } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface TocItem {
  id: string;
  title: string;
  rawText: string;
  level: 1 | 2; // 1: Chương / Mục, 2: Điều
}

interface TableOfContentsProps {
  content: string;
  onItemClick?: (id: string) => void;
  activeId?: string;
}

export function TableOfContents({ content, onItemClick, activeId }: TableOfContentsProps) {
  const [filterText, setFilterText] = useState('');

  const tocItems = useMemo(() => {
    if (!content) return [];

    const lines = content.split('\n');
    const items: TocItem[] = [];
    let count = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Match Chương
      const chuongMatch = line.match(/^(?:#+\s*|\*\*)?(Chương\s+[IVXLCDM0-9]+[\.:\s\-–—]?.*?)(?:\*\*|$)/i);
      if (chuongMatch) {
        count++;
        const title = chuongMatch[1].replace(/[\*#_]/g, '').trim();
        const id = `toc-chuong-${count}`;
        items.push({ id, title, rawText: line, level: 1 });
        continue;
      }

      // Match Điều
      const dieuMatch = line.match(/^(?:#+\s*|\*\*)?(Điều\s+\d+[\.:\s\-–—]?.*?)(?:\*\*|$)/i);
      if (dieuMatch) {
        count++;
        // Lấy tên điều gọn gàng (dưới 80 ký tự)
        let title = dieuMatch[1].replace(/[\*#_]/g, '').trim();
        if (title.length > 75) {
          title = title.substring(0, 75) + '...';
        }
        const dieuNum = (line.match(/Điều\s+(\d+)/i) || [])[1] || count;
        const id = `dieu-${dieuNum}`;
        items.push({ id, title, rawText: line, level: 2 });
      }
    }

    return items;
  }, [content]);

  const filteredItems = useMemo(() => {
    if (!filterText.trim()) return tocItems;
    const term = filterText.toLowerCase();
    return tocItems.filter(item => item.title.toLowerCase().includes(term));
  }, [tocItems, filterText]);

  const handleScrollTo = (id: string) => {
    if (onItemClick) {
      onItemClick(id);
      return;
    }

    // Try finding element by ID or by text content
    let el = document.getElementById(id);
    if (!el) {
      // Find element containing the text
      const targetItem = tocItems.find(t => t.id === id);
      if (targetItem) {
        const searchText = targetItem.title.split('.')[0].trim(); // e.g. "Điều 5"
        const contentArea = document.getElementById('decree-content');
        if (contentArea) {
          const walker = document.createTreeWalker(contentArea, NodeFilter.SHOW_TEXT);
          let node: Node | null;
          while ((node = walker.nextNode())) {
            if (node.textContent && node.textContent.includes(searchText)) {
              el = node.parentElement;
              break;
            }
          }
        }
      }
    }

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Temporary highlight
      el.classList.add('bg-amber-100', 'dark:bg-amber-900/60', 'transition-colors', 'duration-500');
      setTimeout(() => {
        el?.classList.remove('bg-amber-100', 'dark:bg-amber-900/60');
      }, 2000);
    }
  };

  if (tocItems.length === 0) {
    return (
      <div className="p-4 text-xs text-muted-foreground text-center">
        Đang phân tích các điều khoản...
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full space-y-3">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <Input
          placeholder="Tìm điều khoản (VD: Điều 15)..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="h-8 pl-8 text-xs bg-background/80"
        />
      </div>

      <div className="text-[11px] text-muted-foreground font-semibold flex items-center justify-between px-1">
        <span>Danh mục {filteredItems.length} điều khoản:</span>
      </div>

      <div className="overflow-y-auto max-h-[420px] pr-1 space-y-1 custom-scrollbar text-xs">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScrollTo(item.id)}
            className={cn(
              "w-full text-left rounded-md px-2.5 py-1.5 transition-all flex items-start gap-1.5 leading-snug",
              item.level === 1
                ? "font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50/70 dark:bg-emerald-950/30 text-[11.5px] mt-2 mb-1"
                : "hover:bg-muted/70 text-foreground/80 font-normal hover:text-foreground pl-4",
              activeId === item.id && "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-900 font-semibold border-l-2 border-emerald-600"
            )}
          >
            {item.level === 1 ? (
              <BookOpen className="h-3.5 w-3.5 shrink-0 mt-0.5 text-emerald-600" />
            ) : (
              <Hash className="h-3 w-3 shrink-0 mt-0.5 text-muted-foreground opacity-60" />
            )}
            <span className="truncate">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
