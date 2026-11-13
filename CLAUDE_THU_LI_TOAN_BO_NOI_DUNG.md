# BÀN GIAO THỰC ĐỊA & HỒ SƠ RÀ SOÁT CHO CLAUDE THỤ LÝ
**Thời điểm bàn giao:** 13/11/2026  
**Dự án:** Công ty Cổ phần Kiểu Việt — Nhánh Kế Toán Thuế & Nhánh Thẩm Định Thầu Bệnh Viện 300 Giường  
**Người phụ trách chỉ đạo:** Anh Huy

---

## I. TỔNG QUAN TÌNH TRẠNG WEB TRA CỨU KẾ TOÁN KIỂU VIỆT
- **Địa chỉ Live:** `https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/`
- **Kho mã nguồn:** `C:\Users\HUY\.gemini\antigravity\scratch\ke-toan-kv-tra-cuu\Tra cứu Kế Toán Kiểu Việt` (Repo GitHub: `bombeodeptrai/Tra-cuu-ke-toan-kieu-viet`)
- **Tình trạng CSDL (`public/data/decrees.json`):**
  - Tổng số văn bản: **84 văn bản** (18 Luật, 37 Nghị định, 24 Thông tư, 2 Quyết định, 3 Chuẩn mực).
  - Tệp toàn văn Markdown (`public/data/content/`): **Đủ 85/85 file** (`.md`), không thiếu tệp nào.
  - Tệp PDF đính kèm: **66 file PDF** nội bộ đã đồng bộ tại `public/data/pdfs/` kèm 100% mã `pdf_drive_id` Google Drive Kiểu Việt.
  - Kiểm tra vi phạm: **0 link `thuvienphapluat.vn`** (đã loại bỏ hoàn toàn theo quy tắc công ty).
  - Bản xuất tĩnh (`dist/`): Đã build hoàn tất, sẵn sàng phục vụ tra cứu kế toán nội bộ và giải trình thuế.

---

## II. KẾT QUẢ ĐỢT CHẠY RÀ SOÁT KIỂM ĐỊNH (GÓI BỆNH VIỆN 300 GIƯỜNG)
*Căn cứ biên bản kiểm định đối chiếu ngày 24/10/2026 giữa Antigravity, Codex và Claude:*

### 1. Các hạng mục ĐẠT chuẩn (Đã nghiệm thu):
- **11/11 file cốt lõi** có mã băm SHA-256 trùng khớp 100% giữa máy trạm, thư mục Google Drive nội bộ và bảng mã bàn giao.
- **16/16 workbook đối chiếu kỹ thuật** đạt chuẩn validator kỹ thuật khi quét độc lập.
- **5/5 file PDF** xuất mới đạt chuẩn hiển thị (khí y tế, 3 file thang máy, 1 file tổng hợp).
- **Catalogue Mitsubishi LEHY-III-S:** Đã xác minh có bằng chứng máy kéo PM không hộp số (`PM synchronous gearless traction machine`, trang 3 & trang 10).
- **Phân loại Chương V (Thang máy P1–P4):** Đã phân định đúng yêu cầu `Gearless VVVF ≥ 7.5 kW` chỉ thuộc thang rác P5; chuyển các dòng P1–P4 sang tính năng bổ sung của hãng.

### 2. Các điểm TỒN ĐỌNG BẮT BUỘC CLAUDE THỤ LÝ & XỬ LÝ TIẾP:

#### A. Mẫu 11A (Bản nộp thầu) — Chưa đạt điều kiện nộp thầu:
1. **Lỗi định dạng:** Validator phát hiện 19 lỗi font chữ `Calibri` tại dải ô `E367:E385` -> Chuyển toàn bộ sang `Times New Roman`.
2. **Cấu trúc cột:** Cột G hiện vẫn chứa ghi chú kiểm tra nội bộ -> Phải xóa toàn bộ các cột nháp E:G để trả về đúng cấu trúc 4 cột chuẩn (A:D) của Mẫu 11A.
3. **Dữ liệu giá trị:**
   - D365 hiện bằng `0`; D366 còn để trống (tổng 3.1 đang đặt nhầm ở F366).
   - D368:D385 đang là đơn giá thay vì thành tiền hạng mục (thành tiền đang nằm ở cột F).
   - **Xử lý:** Tính giá hạng mục = Đơn giá × Khối lượng vào D367:D385; D366 = SUM(D367:D385); D365 = Tổng mục 3.1. Đưa nội dung kiểm tra kỹ thuật sang bảng nội bộ riêng.

#### B. Hệ thống Mạng & Camera:
1. **Lệch Catalogue Hikvision DS-2CD2746G2-IZS(C):**
   - Catalogue gốc ghi rõ chuẩn bảo vệ là `IP66, IK10` (trang 1).
   - Sheet `02. Doi_Chieu_Tung_Tieu_Chi` dòng 109 lại ghi nhầm là `catalogue IZS(C) IP67`.
   - **Xử lý:** Sửa dòng `ELV-R20-L05`: HSMT yêu cầu IP67/IK10, Catalogue thực tế IP66/IK10, kết luận **KHÔNG ĐÁP ỨNG + CẦN CATALOGUE ĐÚNG MODEL**.
2. **Lỗi Validator:** Tệp Mạng hiện còn 37 lỗi (thiếu bôi đỏ cảnh báo và chiều cao hàng) -> Cần sửa triệt để về 0 lỗi.

#### C. Hệ thống Thang máy:
1. **Chức năng cứu hộ (FER/FE):** Chương V gốc không quy định FER/FE cho thang khách -> Ghi rõ là `Tính năng bổ sung do hãng chào`, cấm tự dựng thành tiêu chuẩn HSMT.
2. **Mitsubishi P5 (Thang rác):** Giữ nguyên kết luận **KHÔNG ĐẠT** (Công suất chào 4.5 kW < Yêu cầu ≥ 7.5 kW; Kích thước cửa 600 mm < Yêu cầu ≥ 650 mm). Chưa có datasheet chính hãng Primo chứng minh động cơ.
3. **Thống Nhất P3–P4:** Cửa chào 1100 × 2100 mm lệch cấu hình hiệu lực 900 × 2100 mm theo Công văn 4035 -> Bắt buộc chào lại 900 × 2100 mm do phụ thuộc kích thước hố thang hiện hữu.
4. **Phòng máy Thống Nhất & Sicher P3–P4:** Kích thước phòng máy chào không phù hợp hiện hữu (lệch chiều rộng 50 mm đến 500 mm) -> Giữ trạng thái `Chờ bản vẽ BMT làm rõ`, cấm tự ý chấm đạt.

---

## III. CHỈ THỊ HÀNH ĐỘNG DÀNH CHO CLAUDE
1. Đọc kỹ file này cùng [KIEM_DINH_CODEX_BAO_CAO_CLAUDE_24_10_2026.md](file:///C:/Users/HUY/.gemini/antigravity/scratch/ke-toan-kv-tra-cuu/Tra%20c%E1%BB%A9u%20K%E1%BA%BF%20ToÃ¡n%20Kiá»ƒu%20Viá»‡t/KIEM_DINH_CODEX_BAO_CAO_CLAUDE_24_10_2026.md).
2. Tập trung xử lý dứt điểm 3 tồn đọng: Chuẩn hóa Mẫu 11A thành bản nộp sạch, sửa sai lệch camera Hikvision trong bảng đối chiếu Mạng, và đồng bộ lại các cảnh báo đỏ trong bảng Thang máy.
3. Tuyệt đối tuân thủ quy tắc công ty Kiểu Việt: Đối chiếu định lượng con số thực tế, không suy diễn số liệu, không dùng văn phong AI sáo rỗng.

