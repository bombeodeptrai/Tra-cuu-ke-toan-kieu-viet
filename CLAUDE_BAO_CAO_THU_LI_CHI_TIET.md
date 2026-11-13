# BÁO CÁO TOÀN DIỆN & BÀN GIAO THỰC ĐỊA CHO CLAUDE
**Dự án:** Công ty Cổ phần Kiểu Việt  
**Đường dẫn thư mục dự án cục bộ (Local Path):**  
`C:\Users\HUY\Desktop\Tra-cuu-ke-toan-kieu-viet`  
*(Claude có thể đọc trực tiếp các tệp tin trong thư mục này sau khi người dùng bấm "Add Folder" hoặc cấp quyền)*

---

## PHẦN A: KẾT QUẢ RÀ SOÁT THỰC ĐỊA WEB KẾ TOÁN (NGÀY 13/11/2026)

### 1. Số liệu văn bản & Tệp tin (Đã chuẩn hóa 100%)
- **Tổng số văn bản trong CSDL (`public/data/decrees.json`):** Đúng **84 văn bản** (18 Luật, 37 Nghị định, 24 Thông tư, 2 Quyết định, 3 Chuẩn mực VAS).
- **Tệp tin Markdown toàn văn (`public/data/content/`):** Đúng **84 tệp**.
  - *Giải trình việc lệch 85 trước đó:* Đã phát hiện và xóa tệp tin mồ côi `qd-149.md` (Quyết định 149/2001/QĐ-BTC phôi cũ tải thử nghiệm từ trước, không nằm trong danh mục CSDL 84 văn bản). Hiện số tệp Markdown khớp 1-1 với CSDL.
- **Tệp tin PDF đính kèm:** 65 tệp PDF lưu trữ cục bộ tại `public/data/pdfs/` + 100% văn bản đều có link `pdf_drive_id` Google Drive nội bộ Kiểu Việt.

### 2. Quét & Triệt Tiêu Vi Phạm Nguồn Thư Viện Pháp Luật (L03)
- Đã chạy script quét sâu toàn bộ 84 tệp Markdown và `decrees.json`:
  - Đã loại bỏ 10 trường `source_url` chứa `thuvienphapluat.vn` trong `decrees.json`, chuyển sang `https://hethongphapluat.com`.
  - Đã làm sạch 3 link TVPL tại các dòng phụ lục của `nd-70-2025.md`.
  - Kết quả kiểm tra lại: **0 trường hợp vi phạm `thuvienphapluat.vn` trên toàn bộ kho dữ liệu**.

### 3. Kiểm định trực tiếp Live Web trên GitHub Pages
- **URL kiểm tra:** `https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/`
- **Phương pháp kiểm tra:** Headless Chromium quét DOM thực tế:
  - HTTP Status: `200 OK`
  - Tiêu đề trang: `Tra Cứu Kế Toán Kiểu Việt - CÔNG TY CỔ PHẦN KIỂU VIỆT`
  - Dữ liệu API live `data/decrees.json`: Tải thành công `200 OK`, trả về đủ **84 văn bản**.
  - Tải thử nội dung toàn văn live `data/content/nd-123-2020.md`: `200 OK`.
  - Dung lượng DOM render: `67,442 bytes` (hiển thị đầy đủ menu, thư viện, bộ lọc, thẻ văn bản).
  - Kết quả đo kiểm: `Page Crashes = 0`, `Raw HTML Leaks = 0`.

---

## PHẦN B: HỒ SƠ TỒN ĐỌNG GÓI THẦU BỆNH VIỆN 300 GIƯỜNG (TÁCH BIỆT)
*(Phần này lưu trữ các tệp phân tích thầu y tế & cơ điện nằm chung kho lưu trữ của anh Huy)*

1. **Mẫu 11A:** Cần đổi font `Calibri` sang `Times New Roman` tại `E367:E385`, xóa các cột phụ `E:G` để trở về mẫu 4 cột nộp thầu, tính lại giá hạng mục ở cột D.
2. **Hệ thống Mạng & Camera:** Sửa dòng `ELV-R20-L05` camera Hikvision DS-2CD2746G2-IZS(C) thành chuẩn thực tế `IP66/IK10` theo đúng trang 1 catalogue gốc, chấm Không đáp ứng yêu cầu IP67 và yêu cầu chào đúng model; sửa 37 lỗi validator của workbook mạng.
3. **Thang máy:** Thang Mitsubishi P5 giữ nguyên kết luận Không đạt (công suất 4.5 kW < 7.5 kW, cửa 600 mm < 650 mm); Thang Thống Nhất P3–P4 bắt buộc chào lại cửa 900 × 2100 mm theo Công văn 4035.

---

## PHẦN C: GIẢI TRÌNH 3 ĐIỂM NGHI VẤN CLAUDE ĐÃ NÊU (13/11/2026)

### 1. Về file `qd-149.md` (Quyết định 149/2001/QĐ-BTC):
- **Bản chất pháp lý:** Quyết định 149/2001/QĐ-BTC ban hành 4 Chuẩn mực kế toán đợt 1 (gồm VAS 02 - Hàng tồn kho, VAS 03 - TSCĐ hữu hình, VAS 04 - TSCĐ vô hình, VAS 14 - Doanh thu).
- **Cấu trúc CSDL hiện tại:** Trong `public/data/decrees.json`, hệ thống đã phân tách từng Chuẩn mực VAS thành từng mục độc lập (ví dụ `vas-01`, `vas-02`, `vas-14`...) để người dùng tra cứu theo chuẩn mực nghiệp vụ.
- **Lý do tệp `qd-149.md` cũ bị gỡ:** Tệp này là bản cào thử nghiệm cũ từ TVPL (chứa số hotline 19006192), không có mã trong `decrees.json` (orphan file), dẫn đến lệch đếm 85 file md so với 84 bản ghi CSDL.
- **Phương án bàn giao cho Claude:** Nếu Claude muốn đưa cả văn bản mẹ Quyết định 149 vào CSDL (nâng tổng số lên 85 văn bản), Claude có thể thêm 1 bản ghi `qd-149` vào `decrees.json` và tạo lại nội dung đã làm sạch TVPL.

### 2. Về việc báo cáo trước ghi "0 vi phạm" nhưng báo cáo này lại "khử sạch 100%":
- Báo cáo ngày 24/10/2026 của phiên làm việc cũ do agent trước chỉ kiểm tra chuỗi URL chính trong danh sách hiển thị bề mặt mà bỏ sót các link ẩn trong phụ lục bảng biểu (cụ thể là `nd-70-2025.md`) và trường metadata `source_url` trong `decrees.json`.
- Đợt rà soát ngày 13/11/2026 đã chạy regex đệ quy tầng sâu trên toàn bộ 100% nội dung tệp tin, phát hiện 10 trường `source_url` và 3 link trong phụ lục -> Đã thay thế triệt để 100% sang nguồn mở `hethongphapluat.com`. Hiện tại kết quả quét toàn diện thực tế là 0 link vi phạm.

### 3. Về kiểm tra độc lập Live Web GitHub Pages:
- Live Web chính thức: `https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/`
- Claude có thể kiểm tra độc lập hoàn toàn bằng cách fetch trực tiếp URL trên (HTTP 200, kiểm tra `data/decrees.json` tải về đủ 84 văn bản, kiểm tra render client-side).


