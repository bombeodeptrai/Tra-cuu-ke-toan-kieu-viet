---
name: ke-toan-kv-workflow
description: >-
  Skill dành riêng cho dự án Tra Cứu Kế Toán Kiểu Việt. Chứa quy trình
  làm việc, danh sách lỗi cần tránh, kỹ thuật resolve link tải văn bản,
  và bộ nhớ ngữ cảnh về toàn bộ dự án. Kích hoạt khi nhận yêu cầu liên
  quan đến dự án này (tra cứu kế toán, văn bản pháp luật, link tải, web KV).
---

# SKILL: Quy Trình & Bộ Nhớ Dự Án Tra Cứu Kế Toán Kiểu Việt

## 1. Bối Cảnh Dự Án

- **Tên:** Web tra cứu văn bản pháp luật kế toán nội bộ của Công ty Kiểu Việt
- **Live:** `https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/`
- **Repo:** `https://github.com/bombeodeptrai/Tra-cuu-ke-toan-kieu-viet`
- **Stack:** Vite + React + TypeScript + Tailwind CSS + Zustand (state) + Google Apps Script (database)
- **User:** Kế toán viên tên Liên và đồng nghiệp — không phải lập trình viên
- **Mục đích:** Tra cứu nhanh, tải file Word/PDF miễn phí, không cần tài khoản

---

## 2. Quy Trình Xử Lý Yêu Cầu (MANDATORY WORKFLOW)

```
Bước 1 — HIỂU: Người dùng muốn gì? Output cuối cùng trông như thế nào?
Bước 2 — LÀM ĐỦ: Làm 100% danh sách, không phải mẫu/ví dụ.
Bước 3 — KIỂM TRA: Tự chạy thử / đọc lại / xem log trước khi báo cáo.
Bước 4 — BÁO CÁO: Ngắn gọn 3-5 dòng. Link kết quả. Xong.
```

---

## 3. Lỗi Đã Mắc — Tuyệt Đối Không Lặp Lại

### L01: Làm Nửa Chừng
- **Đã xảy ra:** Cắm link tải cho 2/39 văn bản, 37 cái còn lại để fallback sang trang tìm kiếm
- **Phản ứng người dùng:** "xàm gì vậy, làm thì làm triệt để chứ làm 2 file là sao"
- **Luật:** Không bao giờ báo cáo hoàn thành khi còn item chưa xử lý

### L02: Biện Hộ Thay Vì Hành Động
- **Đã xảy ra:** Báo cáo "website chặn bot (403 Cloudflare) nên không lấy được link"
- **Phản ứng người dùng:** "đừng có nói chuyện không làm được, chặn cái đ gì chỉ copy link mà chặn"
- **Luật:** Khi gặp chặn → ngay lập tức tìm phương án khác (trang web khác, tool khác, cách khác). Không bao giờ báo bế tắc.

### L03: Dùng Link Chết / Trang Bị Reject
- **Đã xảy ra:** Nút "Bản Gốc (Thư Viện Pháp Luật)" dẫn đến trang 404 của `thuvienphapluat.vn`
- **Phản ứng người dùng:** Chụp ảnh 404 gửi lại: "Cần đ gì cứ vào thư viện pháp luật, các trang khác k có à?"
- **Luật:** `thuvienphapluat.vn` = BANNED. Không dùng trong bất kỳ link nào.

### L04: Giải Thích Dài Sau Khi Làm
- **Luật:** Sau khi deploy → báo cáo tối đa 3-5 dòng. Không cần ôn lại lý thuyết hay giải thích "tại sao".

### L05: Báo Cáo Xong Khi Chưa Test
- **Luật:** Tự chạy kiểm tra (npm build, node script, check file...) trước khi nói "xong".

---

## 4. Kỹ Thuật Đặc Thù Của Dự Án

### 4.1 Lấy Link Tải Văn Bản Pháp Luật

**Mục tiêu:** Lấy URL trực tiếp trên `hethongphapluat.com` cho mỗi văn bản

**Quy trình đã hoạt động:**
```
1. Dùng search_web: query = `site:hethongphapluat.com "[số văn bản]"`
2. Kết quả trả về URL dạng: vertexaisearch.cloud.google.com/grounding-api-redirect/...
3. Resolve URL thực:
   node -e "const axios = require('axios'); 
   axios.get('URL_REDIRECT', {maxRedirects:0, validateStatus:()=>true})
   .then(r => console.log(r.headers.location))"
4. Kết quả là URL thực trên hethongphapluat.com — dùng đây làm free_download_url
```

**Trang được dùng:** `hethongphapluat.com` ✅  
**Trang bị cấm:** `thuvienphapluat.vn` ❌, `luatvietnam.vn` ❌ (paywall)

### 4.2 Build & Deploy

```powershell
# Windows PowerShell — dùng ; thay vì &&
git add . ; git commit -m "mô tả ngắn" ; git push origin main
# → GitHub Actions tự build và deploy lên GitHub Pages
# → Chờ ~2-3 phút là live
```

**Không cần** chạy `npm run build` cục bộ.

### 4.3 Data File Chính

**File:** `public/data/decrees.json`  
**39 văn bản** — mỗi object phải có:
```json
{
  "id": "...",
  "decree_number": "...",
  "title": "...",
  "free_download_url": "https://hethongphapluat.com/..."
}
```

### 4.4 Loading Performance
- Fetch `decrees.json` cục bộ → `set({ decrees, isLoading: false })` **NGAY LẬP TỨC**
- Sau đó mới fetch GAS (Google Apps Script) chạy ngầm — không block UI
- GAS URL: `https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec`

### 4.5 User Identity (Đăng nhập Đơn Giản)
- Modal hỏi tên khi load lần đầu
- Lưu vào `localStorage` key `kv_username`
- Notes/history filter theo username
- GAS lưu riêng theo từng user

---

## 5. Cấu Trúc Thư Mục Quan Trọng

```
src/
  pages/
    HomePage.tsx          — Trang chủ, danh sách văn bản
    DecreeDetailPage.tsx  — Chi tiết 1 văn bản (có nút tải)
    SearchPage.tsx        — Tìm kiếm
  stores/
    decree-store.ts       — State management văn bản (Zustand)
    notes-store.ts        — Quản lý highlight/notes/search history
  types/
    decree.ts             — Type definitions

public/
  data/
    decrees.json          — Database 39 văn bản
    content/              — File .md nội dung từng văn bản

.agents/
  rules/
    quy-tac.md            — Luật làm việc (always_on)
```

---

## 6. Nguyên Tắc Giao Tiếp

- **Ngắn gọn:** Kết quả > giải thích
- **Thẳng thắn:** Nhận lỗi ngay khi sai, không biện hộ
- **Không jargon:** Người dùng là kế toán, không phải developer
- **Một câu hỏi:** Nếu cần hỏi lại → hỏi 1 câu thôi, không hỏi 5 câu cùng lúc
