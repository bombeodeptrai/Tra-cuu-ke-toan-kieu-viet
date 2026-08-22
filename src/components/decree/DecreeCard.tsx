import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Decree } from '@/types/decree';
import { CATEGORIES, DECREE_STATUS_LABELS, CATEGORY_COLORS } from '@/lib/utils/constants';
import { formatDate } from '@/lib/utils/format';

interface DecreeCardProps {
  decree: Decree;
  viewMode: 'grid' | 'list';
}

export function DecreeCard({ decree, viewMode }: DecreeCardProps) {
  const navigate = useNavigate();
  const category = CATEGORIES.find(c => c.id === decree.category_id);
  const colorObj = category ? CATEGORY_COLORS[category.id as keyof typeof CATEGORY_COLORS] || { border: 'border-gray-500', bg: 'bg-gray-100', text: 'text-gray-700' } : { border: 'border-gray-500', bg: 'bg-gray-100', text: 'text-gray-700' };

  if (viewMode === 'list') {
    return (
      <div 
        onClick={() => navigate(`/thu-vien/${decree.id}`)}
        className="bg-card border border-border p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer flex flex-col md:flex-row md:items-center gap-4"
      >
        <div className="flex items-center gap-3 md:w-1/3">
          <div className={`w-2 h-2 rounded-full ${decree.status === 'active' ? 'bg-green-500' : decree.status === 'expired' ? 'bg-red-500' : 'bg-yellow-500'}`} />
          <span className={`font-bold whitespace-nowrap text-primary ${colorObj.text}`}>{decree.decree_number}</span>
          {category && <Badge variant="outline" className="hidden lg:inline-flex">{category.name}</Badge>}
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium line-clamp-1">{decree.title}</h4>
          <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{decree.summary}</p>
        </div>
        <div className="flex items-center gap-4 justify-between md:justify-end md:w-48 text-xs text-muted-foreground">
          <span>{formatDate(decree.issued_date)}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30" onClick={(e) => { e.stopPropagation(); /* toggle bookmark */ }}>
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => navigate(`/thu-vien/${decree.id}`)}
      className={`bg-card border border-border border-l-4 ${colorObj.border} p-5 rounded-xl hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer flex flex-col h-full`}
    >
      <div className="flex justify-between items-start mb-3 gap-2">
        <Badge variant={decree.status === 'active' ? 'default' : 'secondary'} className="rounded-sm whitespace-nowrap">
          {DECREE_STATUS_LABELS[decree.status]}
        </Badge>
        {category && <Badge variant="outline" className="truncate shrink">{category.name}</Badge>}
      </div>
      
      <h3 className={`text-xl font-bold mb-2 ${colorObj.text}`}>{decree.decree_number}</h3>
      <h4 className="font-medium text-sm line-clamp-2 mb-3 flex-1">{decree.title}</h4>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
        {decree.summary}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
        <span className="text-xs font-medium text-muted-foreground">{formatDate(decree.issued_date)}</span>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-500" onClick={(e) => { e.stopPropagation(); /* toggle bookmark */ }}>
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
