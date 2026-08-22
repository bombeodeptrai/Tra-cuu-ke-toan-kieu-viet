import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="text-[8rem] font-black text-primary/10 leading-none mb-4 select-none">
        404
      </div>
      <h1 className="text-3xl font-bold mb-4">Không tìm thấy trang</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        Trang bạn đang tìm kiếm không tồn tại, đã bị xóa hoặc được di chuyển đến một địa chỉ khác.
      </p>
      <Button asChild size="lg" className="gap-2">
        <Link to="/">
          <Home className="h-4 w-4" /> Về trang chủ
        </Link>
      </Button>
    </div>
  );
}
