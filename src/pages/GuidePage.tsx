import React from 'react';
import { BookOpen, Search, MessageSquareText, Edit3, Bookmark, LayoutDashboard } from 'lucide-react';

export function GuidePage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl animate-in fade-in zoom-in-95 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Hu?ng d?n s? d?ng</h1>
        <p className="text-muted-foreground text-lg">Khám phá các tính nang c?a Tra C?u K? Toán Ki?u Vi?t</p>
      </div>

      <div className="space-y-8">
        <section className="bg-card rounded-xl p-6 border shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-primary">
            <LayoutDashboard className="w-6 h-6" />
            <h2 className="text-xl font-semibold text-foreground">1. T?ng quan h? th?ng</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            H? th?ng là kho d? li?u n?i b? d?c thù dành cho k? toán viên Ki?u Vi?t, du?c d?ng b? tr?c ti?p v?i Google Sheets và tích h?p Tr? lý AI thông minh giúp gi?i dáp và tra c?u lu?t nhanh chóng.
          </p>
        </section>

        <section className="bg-card rounded-xl p-6 border shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-blue-500">
            <Search className="w-6 h-6" />
            <h2 className="text-xl font-semibold text-foreground">2. Tra c?u thông minh</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>B?n có th? tìm ki?m theo <strong>S? hi?u van b?n</strong> (ví d?: "99/2025") ho?c <strong>T? khóa</strong>.</li>
            <li>T?i tab <span className="font-semibold text-foreground">Thu vi?n</span>, h? th?ng hi?n th? danh sách các van b?n dang có hi?u l?c. B?n có th? s? d?ng b? l?c bên trái d? l?c nhanh theo lo?i van b?n (Lu?t, Ngh? d?nh, Thông tu...).</li>
            <li>Khi nh?n vào m?t van b?n, b?n s? th?y <strong>Tóm t?t tr?ng tâm</strong> và <strong>Toàn van van b?n</strong>.</li>
          </ul>
        </section>

        <section className="bg-card rounded-xl p-6 border shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-green-500">
            <MessageSquareText className="w-6 h-6" />
            <h2 className="text-xl font-semibold text-foreground">3. H?i dáp cùng Tr? lý AI</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Truy c?p m?c <span className="font-semibold text-foreground">H?i dáp AI</span> d? d?t câu h?i tr?c ti?p b?ng ngôn ng? t? nhiên.</li>
            <li>H? th?ng AI s? <strong>t? d?ng d?c toàn van</strong> c?a các van b?n pháp lu?t n?i b? và tr? l?i chính xác, kèm theo trích d?n Ði?u, Kho?n rõ ràng.</li>
            <li><strong>Tính nang m?i:</strong> B?n có th? ch?p màn hình (?n <kbd className="bg-muted px-1 rounded">Ctrl</kbd> + <kbd className="bg-muted px-1 rounded">V</kbd>) ho?c t?i lên file PDF d? AI d?c và phân tích tr?c ti?p.</li>
          </ul>
        </section>

        <section className="bg-card rounded-xl p-6 border shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-purple-500">
            <Edit3 className="w-6 h-6" />
            <h2 className="text-xl font-semibold text-foreground">4. Highlight & Luu S? Tay</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Khi dang d?c n?i dung m?t van b?n, n?u th?y do?n nào quan tr?ng, b?n ch? c?n <strong>Bôi den do?n van b?n dó</strong>.</li>
            <li>M?t menu nh? s? hi?n lên, b?m <strong>Luu S? Tay</strong> d? ghi chú l?i.</li>
            <li>Toàn b? ghi chú c?a b?n s? du?c luu gi? t?i m?c <span className="font-semibold text-foreground">S? tay K? toán</span>. D? li?u này s? du?c t? d?ng d?ng b? ?n lên h? th?ng Google Sheets d? b?o m?t.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
