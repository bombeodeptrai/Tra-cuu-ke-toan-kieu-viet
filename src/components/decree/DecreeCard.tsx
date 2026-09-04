import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Calendar, Sparkles, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Decree } from '@/types/decree';
import { CATEGORIES, DECREE_STATUS_LABELS, CATEGORY_COLORS } from '@/lib/utils/constants';
import { formatDate } from '@/lib/utils/format';

interface DecreeCardProps {
  decree: Decree;
  viewMode: 'grid' | 'list';
  onPreview?: (decree: Decree) => void;
}

export function DecreeCard({ decree, viewMode, onPreview }: DecreeCardProps) {
  const navigate = useNavigate();
  const category = CATEGORIES.find(c => c.slug === decree.category);
  const borderColorClass = category ? CATEGORY_COLORS[category.slug] || 'border-l-gray-500' : 'border-l-gray-500';
  const statusInfo = DECREE_STATUS_LABELS[decree.status] || { label: decree.status, color: '' };

  const effectiveYear = decree.effective_date ? new Date(decree.effective_date).getFullYear() : null;
  const is2026Effective = effectiveYear === 2026 || (decree.summary && decree.summary.includes('2026'));

  if (viewMode === 'list') {
    return (
      <div 
        onClick={() => navigate(`/thu-vien/${decree.id}`)}
        className={`bg-card border border-border border-l-4 ${borderColorClass} p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer flex flex-col md:flex-row md:items-start gap-4`}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <div className={`w-2 h-2 rounded-full ${decree.status === 'active' ? 'bg-green-500' : decree.status === 'expired' ? 'bg-red-500' : 'bg-yellow-500'}`} />
            <span className="font-bold text-primary">{decree.decree_number}</span>
            {category && <Badge variant="outline" className="hidden lg:inline-flex text-[11px]">{category.name}</Badge>}
            {is2026Effective && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/60">
                <Sparkles className="h-3 w-3 text-amber-600" /> Hiệu lực 2026
              </span>
            )}
          </div>
          <h4 className="text-sm font-medium line-clamp-1">{decree.title}</h4>
          <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{decree.summary}</p>
        </div>
        <div className="flex items-center justify-between md:justify-end md:w-56 text-xs text-muted-foreground shrink-0 md:pt-2 gap-3">
          <div className="text-right">
            <div>Ban hành: <strong>{formatDate(decree.issued_date)}</strong></div>
            {decree.effective_date && (
              <div className="text-[11px] text-emerald-700 dark:text-emerald-400">
                Hiệu lực: {formatDate(decree.effective_date)}
              </div>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            {onPreview && (
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-2.5 gap-1.5 text-xs text-blue-700 bg-blue-50/80 hover:bg-blue-100 dark:text-blue-300 dark:bg-blue-950/50 dark:hover:bg-blue-900/50 border-blue-200 dark:border-blue-800"
                title="Xem trước văn bản"
                onClick={(e) => {
                  e.stopPropagation();
                  onPreview(decree);
                }}
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Xem trước</span>
              </Button>
            )}
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30" onClick={(e) => { e.stopPropagation(); }}>
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => navigate(`/thu-vien/${decree.id}`)}
      className={`bg-card border border-border border-l-4 ${borderColorClass} p-5 rounded-xl hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer flex flex-col h-full`}
    >
      <div className="flex justify-between items-start mb-3 gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Badge className={`rounded-sm whitespace-nowrap ${statusInfo.color}`}>
            {statusInfo.label}
          </Badge>
          {is2026Effective && (
            <Badge className="bg-amber-500 hover:bg-amber-600 text-white gap-1 text-[11px]">
              <Sparkles className="h-3 w-3" /> Hiệu lực 2026
            </Badge>
          )}
        </div>
        {category && <Badge variant="outline" className="truncate shrink text-[11px]">{category.name}</Badge>}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-primary">{decree.decree_number}</h3>
      <h4 className="font-medium text-sm line-clamp-2 mb-3 flex-1">{decree.title}</h4>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
        {decree.summary}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border text-xs">
        <div className="space-y-0.5 text-muted-foreground">
          <div>Ban hành: <strong>{formatDate(decree.issued_date)}</strong></div>
          {decree.effective_date && (
            <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
              Hiệu lực: {formatDate(decree.effective_date)}
            </div>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          {onPreview && (
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-2.5 gap-1.5 text-xs text-blue-700 bg-blue-50/80 hover:bg-blue-100 dark:text-blue-300 dark:bg-blue-950/50 dark:hover:bg-blue-900/50 border-blue-200 dark:border-blue-800"
              title="Xem trước văn bản"
              onClick={(e) => {
                e.stopPropagation();
                onPreview(decree);
              }}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Xem trước</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-500" onClick={(e) => { e.stopPropagation(); }}>
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
