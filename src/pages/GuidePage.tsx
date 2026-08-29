import React from 'react';
import { BookOpen, Search, MessageSquareText, Edit3, Bookmark, LayoutDashboard } from 'lucide-react';

export function GuidePage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl animate-in fade-in zoom-in-95 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Hướng dẫn sử dụng</h1>
        <p className="text-muted-foreground text-lg">Khám phá các tính năng của Tra Cứu Kế Toán Kiều Việt</p>
      </div>

      <div className="space-y-8">
        <section className="bg-card rounded-xl p-6 border shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-primary">
            <LayoutDashboard className="w-6 h-6" />
            <h2 className="text-xl font-semibold text-foreground">1. Tổng quan hệ thống</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hệ thống là kho dữ liệu nội bộ đặc thù dành cho kế toán viên Kiều Việt, được đồng bộ trực tiếp với Google Sheets và tích hợp Trợ lý AI thông minh giúp giải đáp và tra cứu luật nhanh chóng.
          </p>
        </section>

        <section className="bg-card rounded-xl p-6 border shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-blue-500">
            <Search className="w-6 h-6" />
            <h2 className="text-xl font-semibold text-foreground">2. Tra cứu thông minh</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Bạn có thể tìm kiếm theo <strong>Số hiệu văn bản</strong> (ví dụ: "99/2025") hoặc <strong>Từ khóa</strong>.</li>
            <li>Tại tab <span className="font-semibold text-foreground">Thư viện</span>, hệ thống hiển thị danh sách các văn bản đang có hiệu lực. Bạn có thể sử dụng bộ lọc bên trái để lọc nhanh theo loại văn bản (Luật, Nghị định, Thông tư...).</li>
            <li>Khi nhấn vào một văn bản, bạn sẽ thấy <strong>Tóm tắt trọng tâm</strong> và <strong>Toàn văn văn bản</strong>.</li>
          </ul>
        </section>

        <section className="bg-card rounded-xl p-6 border shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-green-500">
            <MessageSquareText className="w-6 h-6" />
            <h2 className="text-xl font-semibold text-foreground">3. Hỏi đáp cùng Trợ lý AI</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Truy cập mục <span className="font-semibold text-foreground">Hỏi đáp AI</span> để đặt câu hỏi trực tiếp bằng ngôn ngữ tự nhiên.</li>
            <li>Hệ thống AI sẽ <strong>tự động đọc toàn văn</strong> của các văn bản pháp luật nội bộ và trả lời chính xác, kèm theo trích dẫn Điều, Khoản rõ ràng.</li>
            <li><strong>Tính năng mới:</strong> Bạn có thể chụp màn hình (ấn <kbd className="bg-muted px-1 rounded">Ctrl</kbd> + <kbd className="bg-muted px-1 rounded">V</kbd>) hoặc tải lên file PDF để AI đọc và phân tích trực tiếp.</li>
          </ul>
        </section>

        <section className="bg-card rounded-xl p-6 border shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-purple-500">
            <Edit3 className="w-6 h-6" />
            <h2 className="text-xl font-semibold text-foreground">4. Highlight & Lưu Sổ Tay</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Khi đang đọc nội dung một văn bản, nếu thấy đoạn nào quan trọng, bạn chỉ cần <strong>Bôi đen đoạn văn bản đó</strong>.</li>
            <li>Một menu nhỏ sẽ hiện lên, bấm <strong>Lưu Sổ Tay</strong> để ghi chú lại.</li>
            <li>Toàn bộ ghi chú của bạn sẽ được lưu giữ tại mục <span className="font-semibold text-foreground">Sổ tay Kế toán</span>. Dữ liệu này sẽ được tự động đồng bộ ẩn lên hệ thống Google Sheets để bảo mật.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
