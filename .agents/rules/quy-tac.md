---
trigger: always_on
---

# LUẬT LÀM VIỆC DÀNH RIÊNG CHO DỰ ÁN NÀY
**Đọc bắt buộc trước MỌI yêu cầu. Không có ngoại lệ.**

---

## 🚨 NHỮNG LỖI NGHIÊM TRỌNG ĐÃ MẮC PHẢI (CẤM LẶP LẠI)

Đây là danh sách các sai lầm thực tế trong dự án này, đã khiến người dùng nổi giận. Đọc kỹ từng dòng:

### Lỗi 1: Làm Nửa Vời ("xàm gì vậy, làm thì làm triệt để")
- Khi người dùng nói "làm hết" hoặc giao một danh sách → phải làm **100%**, không phải làm 2 rồi dừng.
- Ví dụ sai: Chỉ cắm link tải cho 2 văn bản (TT200, TT133), còn 37 cái để fallback sang trang tìm kiếm → người dùng phát hiện ra và tức giận ngay.
- **Luật:** Không báo cáo "hoàn thành" khi chưa làm đủ 100%.

### Lỗi 2: Biện Hộ Kỹ Thuật Thay Vì Làm Việc
- Khi bị block (403, Cloudflare, CAPTCHA), tuyệt đối **không** đưa ra câu: *"trang web này chặn bot nên không làm được"*.
- Người dùng đã nói thẳng: *"đừng có nói chuyện không làm được, chặn cái đ gì chỉ copy link mà chặn"*.
- **Luật:** Khi gặp chặn → tìm ngay phương án khác (trang web khác, tool khác, approach khác). Không bao giờ báo cáo bế tắc.

### Lỗi 3: Trỏ Sai Trang (Link rác, 404)
- Đã từng để nút "Bản Gốc (Thư Viện Pháp Luật)" dẫn đến trang 404 → người dùng chụp ảnh gửi lại và hỏi "Cần đ gì cứ vào thư viện pháp luật".
- **Luật:** Link phải kiểm tra hoạt động thực tế trước khi deploy. Không dùng link trang nào mà người dùng đã reject.
- **Trang được dùng:** `hethongphapluat.com` (đã xác nhận hoạt động tốt).
- **Trang BỊ CẤM:** `thuvienphapluat.vn` (chặn, hay 404, yêu cầu đăng nhập VIP).

### Lỗi 4: Giải Thích Dài Dòng Sau Khi Làm Xong
- Người dùng không cần đọc 5 đoạn giải thích. Chỉ cần biết: làm được chưa, đã deploy chưa.
- **Luật:** Báo cáo tối đa 3-5 dòng. Thẳng vào kết quả.

---

## ✅ QUY TRÌNH BẮT BUỘC (WORKFLOW)

**Mỗi yêu cầu mới, chạy qua 4 bước này trong đầu trước khi làm:**

```
1. PHÂN TÍCH: Output cần là gì? Cạm bẫy nào có thể xảy ra?
2. LÀM TRIỆT ĐỂ: Làm 100%, không làm nửa chừng.
3. KIỂM TRA THỰC TẾ: Tự chạy/test trước khi nói "xong".
4. BÁO CÁO NGẮN: Xong rồi → nói xong, link/kết quả ở đâu.
```

---

## 📌 THÔNG TIN DỰ ÁN (ĐỌC 1 LẦN, GHI NHỚ MÃI)

| Thông tin | Giá trị |
|---|---|
| Tên dự án | Tra Cứu Kế Toán Kiểu Việt |
| Live URL | `https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/` |
| Repo | `https://github.com/bombeodeptrai/Tra-cuu-ke-toan-kieu-viet` |
| Stack | Vite + React + TypeScript + Tailwind |
| Data source chính | `public/data/decrees.json` (39 văn bản, đều có `free_download_url`) |
| GAS Webhook | Google Apps Script (lưu notes + search history theo user) |
| Deploy | GitHub Actions tự động khi push vào `main` |
| User emails | `nguyenthanhtrongnhan14@gmail.com`, `ketoan@kieuviet.vn` |

---

## 🔑 CÁC NGUYÊN TẮC KỸ THUẬT ĐÃ HỌC ĐƯỢC

### Về Download Link
- **Phương pháp lấy link đúng:** Dùng `search_web` với `site:hethongphapluat.com "[số văn bản]"` → lấy URL từ `vertexaisearch.cloud.google.com/grounding-api-redirect/...` → resolve 302 redirect bằng `axios.get(url, {maxRedirects:0})` để lấy URL thực.
- Các URL trên `hethongphapluat.com` dạng slug dài sẽ return 200 OK với body thực tế (khi dùng browser). Đây là trang tải được.
- **Trang CẤM dùng:** `thuvienphapluat.vn` — chặn, 404, VIP wall.

### Về Build & Deploy
- Windows PowerShell: dùng `;` thay vì `&&` để nối lệnh.
- Lệnh deploy: `git add . ; git commit -m "..." ; git push origin main` → GitHub Actions tự build.
- Không cần chạy `npm run build` cục bộ — CI/CD trên GitHub xử lý.

### Về Loading Performance
- Dữ liệu local (`decrees.json`) phải `set()` state ngay sau khi fetch xong, không chờ GAS.
- GAS fetch chạy sau và ngầm cập nhật — không block UI.

### Về User Identity (Đăng nhập)
- App hỏi tên người dùng lúc load lần đầu (modal).
- Tên lưu vào `localStorage` key `kv_username`.
- Notes và search history được filter theo `username`.

---

## 💬 PHONG CÁCH GIAO TIẾP VỚI NGƯỜI DÙNG

- **Người dùng là kế toán KV**, không phải developer. Giải thích bằng ngôn ngữ thực tế, không dùng jargon kỹ thuật.
- Khi bị chỉ trích → nhận lỗi thẳng, sửa ngay, không biện hộ.
- Khi hỏi "cái này cần không?" → đừng trả lời lý thuyết. Làm thử rồi cho xem kết quả.
- Nếu cần hỏi lại để rõ yêu cầu → hỏi 1 câu, không hỏi 5 câu cùng lúc.
