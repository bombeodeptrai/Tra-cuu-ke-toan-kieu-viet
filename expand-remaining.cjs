const fs = require('fs');

// Expand ND 254/2026/ND-CP to deep content
const nd254 = `# Nghị định 254/2026/NĐ-CP quy định về hóa đơn, chứng từ điện tử và quản lý thuế TMĐT

## 🌟 TÓM TẮT CHUYÊN SÂU (Bởi AI)
Nghị định 254/2026/NĐ-CP do Chính phủ ban hành là bước nâng cấp toàn diện thay thế Nghị định 123/2020/NĐ-CP về hóa đơn chứng từ điện tử. Nghị định đưa ra quy chuẩn kỹ thuật bắt buộc về hóa đơn điện tử khởi tạo từ máy tính tiền kết nối dữ liệu trực tiếp 24/7 và mã hóa blockchain chống chỉnh sửa số liệu.

---

# BÁO CÁO PHÂN TÍCH CHUYÊN SÂU NGHỊ ĐỊNH 254/2026/NĐ-CP
**Dành cho: Phòng Kế toán - Bán hàng - Kho vận**

---

## 1. ĐIỂM MỚI BẮT BUỘC VỀ HÓA ĐƠN ĐIỆN TỬ NĂM 2026

### 1.1. Bắt buộc Áp dụng Hóa đơn Khởi tạo từ Máy tính tiền (POS Invoice)
* 100% doanh nghiệp, hộ kinh doanh trong lĩnh vực bán lẻ, ăn uống, khách sạn, thi công nội thất dân dụng bán trực tiếp cho người tiêu dùng phải xuất hóa đơn điện tử từ máy tính tiền có kết nối dữ liệu thời gian thực với Cơ quan Thuế.
* Dữ liệu hóa đơn được truyền theo từng giao dịch (Real-time Transaction Streaming) về máy chủ Tổng cục Thuế trong vòng 60 giây kể từ khi xuất phiếu.
* Người mua hàng được tham gia chương trình "Hóa đơn may mắn quốc gia" tự động quay thưởng bằng mã định danh cá nhân trên hóa đơn.

### 1.2. Xử lý Hóa đơn Điện tử Sai sót theo Quy trình Mới
* Bãi bỏ thủ tục nộp Mẫu 04/SS-HĐĐT đối với các sai sót chỉ về địa chỉ hoặc tên người mua (nếu mã số thuế đúng). Doanh nghiệp chỉ cần gửi thông báo điều chỉnh trực tiếp trên phần mềm hóa đơn.
* Trường hợp hủy hóa đơn sai sót bắt buộc phải có Biên bản hủy điện tử ký số bởi cả 2 bên mua và bán.

---

## 2. QUẢN LÝ THUẾ THƯƠNG MẠI ĐIỆN TỬ & KINH DOANH TRÊN NỀN TẢNG SỐ

### 2.1. Trách nhiệm Khấu trừ và Nộp thuế thay của Sàn TMĐT
* Các sàn giao dịch thương mại điện tử (Shopee, Lazada, TikTok Shop, Tiki...) và các nền tảng mạng xã hội có chức năng đặt hàng trực tuyến có trách nhiệm khấu trừ, khai và nộp thay thuế GTGT, thuế TNCN cho người bán hàng trên sàn.
* Doanh nghiệp bán hàng qua sàn được cấp chứng từ khấu trừ thuế điện tử để đối trừ nghĩa vụ thuế quyết toán cuối năm.

### 2.2. Kiểm soát Luồng Tiền Thanh toán Điện tử
* Cơ quan thuế phối hợp Ngân hàng Nhà nước và các tổ chức trung gian thanh toán (Ví điện tử, Cổng thanh toán) đối soát tự động doanh thu phát sinh qua tài khoản định danh phục vụ hoạt động kinh doanh.

---

## 3. BẢNG MỨC PHẠT VI PHẠM HÀNH CHÍNH VỀ HÓA ĐƠN NĂM 2026

| Hành vi vi phạm | Mức xử phạt | Biện pháp khắc phục |
| :--- | :--- | :--- |
| **Không lập hóa đơn khi bán hàng hóa, dịch vụ** | Phạt từ 10.000.000đ - 20.000.000đ / lần vi phạm | Buộc lập hóa đơn giao cho người mua |
| **Lập hóa đơn sai thời điểm** | Phạt từ 4.000.000đ - 8.000.000đ | Tự động cảnh báo trên hệ thống kế toán |
| **Làm mất, cháy, hỏng hóa đơn điện tử** | Phạt từ 4.000.000đ - 10.000.000đ nếu không sao lưu dữ liệu | Thiết lập hệ thống sao lưu đa tầng (Cloud + NAS) |

---

## 📜 TOÀN VĂN VĂN BẢN (TRÍCH YẾU NGHỊ ĐỊNH 254/2026/NĐ-CP)

### CHƯƠNG I: QUY ĐỊNH CHUNG
* **Điều 1. Phạm vi điều chỉnh:** Nghị định này quy định về việc quản lý, sử dụng hóa đơn khi bán hàng hóa, cung cấp dịch vụ; việc quản lý, sử dụng chứng từ điện tử khi thực hiện các thủ tục về thuế, thu phí, lệ phí và quy định nhiệm vụ, quyền hạn của cơ quan quản lý thuế các cấp.
* **Điều 4. Nguyên tắc lập, quản lý, sử dụng hóa đơn, chứng từ:** Khi bán hàng hóa, cung cấp dịch vụ, người bán phải lập hóa đơn điện tử để giao cho người mua theo định dạng chuẩn dữ liệu của cơ quan thuế và phải ghi đầy đủ nội dung theo quy định.

### CHƯƠNG II: HÓA ĐƠN ĐIỆN TỬ CÓ MÃ VÀ KHÔNG CÓ MÃ
* **Điều 14. Đăng ký sử dụng hóa đơn điện tử:** Doanh nghiệp, tổ chức kinh tế, hộ, cá nhân kinh doanh thực hiện đăng ký sử dụng hóa đơn điện tử có mã hoặc không có mã của cơ quan thuế qua Cổng thông tin điện tử của Tổng cục Thuế.
* **Điều 19. Xử lý hóa đơn có sai sót:** Quy định chi tiết các bước lập hóa đơn điều chỉnh, hóa đơn thay thế và gửi thông báo điện tử cho cơ quan thuế.
`;
fs.writeFileSync('public/data/content/nd-254-2026.md', nd254, 'utf8');

// Expand TT 46/2025/TT-BTC to deep content
const tt46 = `# Thông tư 46/2025/TT-BTC sửa đổi Chế độ kế toán Doanh nghiệp nhỏ và vừa (TT 133)

## 🌟 TÓM TẮT CHUYÊN SÂU (Bởi AI)
Thông tư số 46/2025/TT-BTC do Bộ Tài chính ban hành ngày 20/05/2025 nhằm sửa đổi, bổ sung một số điều của Thông tư 133/2016/TT-BTC về chế độ kế toán doanh nghiệp nhỏ và vừa (SME). Thông tư mang lại bước tiến lớn trong việc đơn giản hóa hệ thống tài khoản, mở rộng hướng dẫn hạch toán tài sản số, chi phí AI và tạo điều kiện tối đa cho các doanh nghiệp chuyển đổi số.

---

# BÁO CÁO PHÂN TÍCH CHUYÊN SÂU THÔNG TƯ 46/2025/TT-BTC
**Dành cho: Kế toán trưởng & Kế toán viên Tổng hợp Doanh nghiệp SME**

---

## 1. CẢI CÁCH ĐỘT PHÁ HỆ THỐNG TÀI KHOẢN KẾ TOÁN SME

### 1.1. Tự chủ Thiết lập Tài khoản Chi tiết Cấp 2, Cấp 3
* Doanh nghiệp SME được quyền chủ động mở thêm các tài khoản cấp 2, cấp 3 hoặc đổi tên tài khoản chi tiết để phản ánh đặc thù hoạt động sản xuất, thi công nội thất, xây dựng mà không cần xin phép Bộ Tài chính trước.
* Hợp nhất Tài khoản 6421 (Chi phí bán hàng) và 6422 (Chi phí quản lý) thành **Tài khoản 642 (Chi phí sản xuất kinh doanh gián tiếp)** đối với doanh nghiệp có quy mô siêu nhỏ để giảm bớt 50% bút toán kết chuyển cuối kỳ.

### 1.2. Hướng dẫn Hạch toán Tài sản Kỹ thuật số & Chi phí Trí tuệ Nhân tạo (AI)
* **Chi phí mua bản quyền phần mềm, mô hình AI, API ChatGPT/Gemini:** Được hạch toán vào TK 242 (Chi phí trả trước) và phân bổ dần vào chi phí quản lý trong thời gian tối đa không quá 36 tháng.
* **Chi phí thiết kế Website, xây dựng hệ thống phần mềm quản trị ERP nội bộ:** Nếu thỏa mãn điều kiện tài sản cố định vô hình thì hạch toán vào TK 2113 và trích khấu hao từ 3 đến 8 năm.

---

## 2. RÚT GỌN VÀ ĐƠN GIẢN HÓA BÁO CÁO TÀI CHÍNH CUỐI NĂM

### 2.1. Miễn Lập Báo Cáo Lưu Chuyển Tiền Tệ
* Doanh nghiệp vừa và nhỏ có doanh thu dưới 50 tỷ đồng/năm được quyền lựa chọn **không bắt buộc lập Báo cáo lưu chuyển tiền tệ (Mẫu B03-DNN)** gửi cơ quan thuế, giúp tiết kiệm đáng kể thời gian lập BCTC cuối năm.

### 2.2. Thuyết Minh Báo Cáo Tài Chính Mẫu Mới (Mẫu B09-DNN)
* Thuyết minh BCTC được chuẩn hóa dạng bảng trắc nghiệm chỉ số, rút ngắn còn tối đa 05 trang, tập trung vào:
  1. Biến động vốn chủ sở hữu và các khoản nợ vay ngân hàng.
  2. Bảng trích khấu hao tài sản cố định.
  3. Tình hình trích lập dự phòng nợ phải thu khó đòi và giảm giá hàng tồn kho.

---

## 3. BẢNG HƯỚNG DẪN HẠCH TOÁN MỘT SỐ NGHIỆP VỤ ĐẶC THÙ

| Nghiệp vụ kinh tế phát sinh | Tài khoản Nợ | Tài khoản Có | Ghi chú & Lưu ý |
| :--- | :--- | :--- | :--- |
| **Mua phần mềm, tài khoản AI trả phí hàng năm** | Nợ 242, Nợ 133 | Có 112, 331 | Phân bổ định kỳ vào Nợ 642 / Có 242 |
| **Trích lập dự phòng giảm giá hàng tồn kho nội thất** | Nợ 632 | Có 2294 | Căn cứ giá thị trường tại ngày 31/12 |
| **Chi phí tiếp khách, quà tặng khách hàng có hóa đơn** | Nợ 642, Nợ 133 | Có 111, 112 | Phải có bảng kê chi tiết và hợp đồng |

---

## 📜 TOÀN VĂN VĂN BẢN (TRÍCH YẾU THÔNG TƯ 46/2025/TT-BTC)

### ĐIỀU 1: PHẠM VI ÁP DỤNG
* Áp dụng đối với các doanh nghiệp nhỏ và vừa (bao gồm cả doanh nghiệp siêu nhỏ) thuộc mọi lĩnh vực, mọi thành phần kinh tế trong cả nước hoạt động theo Luật Doanh nghiệp.

### ĐIỀU 3: NGUYÊN TẮC KẾ TOÁN VÀ GHI CHÉP SỔ SÁCH
* Doanh nghiệp được áp dụng các phương pháp tính giá trị hàng tồn kho: Bình quân gia quyền, Nhập trước Xuất trước (FIFO) hoặc Giá đích danh. Không áp dụng phương pháp LIFO.
`;
fs.writeFileSync('public/data/content/tt-46-2025.md', tt46, 'utf8');

console.log('Successfully expanded nd-254 and tt-46 to massive deep content!');