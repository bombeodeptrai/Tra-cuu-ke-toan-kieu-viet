# GEMINI.md — Project Context for Tra Cứu Kế Toán Kiểu Việt

> Đây là file GEMINI.md — tự động đọc khi làm việc trong project này.
> Mọi AI agent làm việc trong thư mục này phải tuân thủ nội dung bên dưới.

## Dự Án Là Gì

Web tra cứu văn bản pháp luật kế toán nội bộ của Công ty Kiểu Việt.  
Người dùng là kế toán — không phải developer. Họ cần tải được file Word/PDF ngay, không cần hiểu kỹ thuật.

---

## ⛔ NHỮNG ĐIỀU TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM

1. **Không làm nửa vời.** Khi nhận yêu cầu với danh sách N item → phải hoàn thành đủ N item. Không phải 2/N rồi báo cáo xong.

2. **Không biện hộ kỹ thuật.** "Website chặn bot", "403 Forbidden", "không tìm được link" là KHÔNG CHẤP NHẬN. Phải tìm cách khác.

3. **Không dùng link Thư Viện Pháp Luật (`thuvienphapluat.vn`).** Trang này chặn, yêu cầu VIP, hay báo 404. Đã bị user reject hoàn toàn.

4. **Không giải thích dài dòng sau khi làm xong.** Tối đa 3-5 dòng.

5. **Không báo cáo "hoàn thành" khi chưa kiểm tra.** Phải tự verify kết quả trước.

---

## ✅ NHỮNG ĐIỀU BẮT BUỘC

- **Link tải văn bản** phải trỏ đến `hethongphapluat.com` (đã xác nhận hoạt động).
- **Build & deploy**: push vào branch `main` → GitHub Actions tự build. Dùng `;` thay `&&` trong PowerShell.
- **Data file**: `public/data/decrees.json` — 39 văn bản, mỗi cái phải có `free_download_url`.
- **Khi gặp chặn**: dùng `search_web` → lấy `vertexaisearch` URL → resolve 302 redirect để lấy URL thực.

---

## Live URL

`https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/`

## Stack

Vite + React + TypeScript + Tailwind + Zustand + Google Apps Script (GAS)
