---
trigger: always_on
---

# QUY TẮC BẮT BUỘC CHO AI AGENT — CÔNG TY KIỂU VIỆT

> ⚠️ ĐÂY LÀ HỆ THỐNG QUY TẮC BẮT BUỘC (GLOBAL RULES) ÁP DỤNG TRÊN TOÀN BỘ PHIÊN LÀM VIỆC.
> BẤT KỲ AI AGENT NÀO KHI THỰC THI NHIỆM VỤ ĐỀU PHẢI TUÂN THỦ 100%, KHÔNG CÓ NGOẠI LỆ.

---

## ⛔ 4 ĐIỀU TUYỆT ĐỐI CẤM (VI PHẠM LÀ FAIL)

1. **CẤM LÀM NHỎ GIỌT / LÀM NỬA CHỪNG (L01):**
   - Khi hệ thống có N đối tượng (hiện tại là **55 văn bản pháp luật**), mọi nhiệm vụ (so sánh, hiển thị, tải file, kiểm tra, render) PHẢI THỰC HIỆN ĐỦ 100% CẢ 55 ĐỐI TƯỢNG.
   - Tuyệt đối CẤM làm vài ba cái đại diện, làm mẫu, hoặc cắt bớt danh sách.

2. **CẤM BÁO CÁO "XONG" KHI CHƯA CHẠY TEST THỰC TẾ (L05):**
   - Phải tự tay chạy script / trình duyệt kiểm tra (headless browser) trên toàn bộ danh sách.
   - Chỉ báo cáo hoàn thành khi và chỉ khi: `Console Errors = 0`, `Page Crashes = 0`, `Raw HTML Leaks = 0`.

3. **CẤM NÓI DÀI DÒNG & BIỆN HỘ SAU KHI LÀM (L02 & L04):**
   - Báo cáo kết quả tối đa **3 - 5 dòng**: Đã làm gì, kết quả đo kiểm thực tế, link live. Hết.
   - Tuyệt đối không tuôn văn mẫu, không ôn lại lý thuyết, không phân trần dài dòng.

4. **CẤM DÙNG LINK THƯ VIỆN PHÁP LUẬT (`thuvienphapluat.vn`) (L03):**
   - Chỉ sử dụng link tải miễn phí trực tiếp từ `hethongphapluat.com` hoặc link Google Drive nội bộ Kiểu Việt.

---

## ✅ QUY TRÌNH THỰC THI 4 BƯỚC BẮT BUỘC

- **Bước 1 — HIỂU:** Xác định rõ tổng số lượng mục cần làm (toàn bộ 55 văn bản, không được tự ý giảm).
- **Bước 2 — LÀM ĐỦ:** Code và áp dụng cho 100% các mục, không bỏ sót bất kỳ mục nào.
- **Bước 3 — TEST THẬT:** Chạy browser / code tự động quét 100% các mục, bắt hết lỗi sập trang trước khi báo cáo.
- **Bước 4 — BÁO CÁO GỌN:** Báo cáo trong 3-5 dòng, trung thực, ngắn gọn kèm link live.
