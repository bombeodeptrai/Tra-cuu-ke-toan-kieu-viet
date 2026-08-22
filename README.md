# Kế Toán KV Tra Cứu

Ứng dụng web React + Vite để tra cứu các nghị định, thông tư kế toán tài chính Việt Nam, với sự hỗ trợ của AI (Google Gemini) để giải đáp thắc mắc và phân tích tài liệu.

## Các tính năng chính

- **Tra cứu Nghị định/Thông tư:** Tìm kiếm nhanh chóng văn bản pháp luật kế toán với bộ lọc theo danh mục, trạng thái.
- **AI Trợ lý Kế toán (Gemini):** Chat bot AI am hiểu luật kế toán Việt Nam, hỗ trợ trả lời câu hỏi dựa trên ngữ cảnh RAG.
- **Phân tích Hình ảnh/Tài liệu:** Tải lên chứng từ, hình ảnh để AI phân tích theo góc độ kế toán.
- **Cơ sở dữ liệu đám mây:** Tích hợp Google Sheets API để dễ dàng cập nhật dữ liệu văn bản mà không cần database phức tạp.
- **Lưu trữ Offline:** Dữ liệu chat và cấu hình được lưu tại LocalStorage, sẵn sàng sử dụng khi tải lại trang.

## Công nghệ sử dụng

- React 18
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand (State management)
- Fuse.js (Tìm kiếm mờ)
- Google Gemini API (Chat & Vision)
- Google Sheets API (Database)

## Hướng dẫn cài đặt

1. Clone repository:
   ```bash
   git clone https://github.com/yourusername/ke-toan-kv-tra-cuu.git
   cd ke-toan-kv-tra-cuu
   ```

2. Cài đặt dependencies:
   ```bash
   npm install
   ```

3. Chạy môi trường phát triển:
   ```bash
   npm run dev
   ```

## Cấu hình API Keys

Để ứng dụng hoạt động đầy đủ, bạn cần cung cấp API Keys trong phần **Cài đặt** của ứng dụng (hoặc cấu hình thông qua biến môi trường nếu tự host).
- **Google Gemini API Key:** Lấy từ [Google AI Studio](https://aistudio.google.com/).
- **Google Sheets API Key & Spreadsheet ID:** (Tùy chọn) Nếu muốn dùng Google Sheets làm database thay vì mock data mặc định.

## Triển khai (Deploy lên GitHub Pages)

Ứng dụng được cấu hình sẵn để tự động deploy lên GitHub Pages thông qua GitHub Actions (xem `.github/workflows/deploy.yml`).
Chỉ cần push lên nhánh `main`, action sẽ tự động build và deploy lên GitHub Pages.

Lưu ý: Thay đổi `base` trong file `vite.config.ts` để khớp với tên repository của bạn. (Ví dụ: `/ke-toan-kv-tra-cuu/`).

## Giấy phép

MIT License
