const fs = require('fs');

// 1. Upgrade NGHỊ ĐỊNH 180/2024/NĐ-CP to Super Deep Analysis + Full Legal Text
const nd180Deep = `# Nghị định 180/2024/NĐ-CP quy định chính sách giảm thuế giá trị gia tăng theo Nghị quyết 174/2024/QH15

## 🌟 BÁO CÁO PHÂN TÍCH CHUYÊN SÂU DÀNH CHO BAN GIÁM ĐỐC & KẾ TOÁN TRƯỞNG
*Chuyên gia phân tích: Ban Cố vấn Thuế & Kế toán Doanh nghiệp Kiểu Việt*
*Áp dụng: Toàn bộ hệ thống kế toán, bán hàng, kho vận và mua hàng*

---

### 1. NGUYÊN TẮC CỐT LÕI & CƠ CHẾ KỸ THUẬT VỀ GIẢM THUẾ GTGT 2%

#### 1.1. Khung thời gian áp dụng & Thời điểm xác định doanh thu
* **Thời gian hiệu lực:** Áp dụng chính thức từ ngày **01/01/2025 đến hết ngày 30/06/2025**.
* **Nguyên tắc mấu chốt về thời điểm xuất hóa đơn (CỰC KỲ QUAN TRỌNG):**
  - Thời điểm xác định thuế GTGT đối với bán hàng hóa là thời điểm chuyển giao quyền sở hữu hoặc quyền sử dụng hàng hóa cho người mua, không phân biệt đã thu được tiền hay chưa.
  - Đối với dịch vụ thi công nội thất, xây dựng: Thời điểm lập hóa đơn là thời điểm nghiệm thu, bàn giao khối lượng công việc hoàn thành.
  - **BẪY THUẾ:** Nếu công trình nghiệm thu trong tháng 06/2025 nhưng kế toán để sang tháng 07/2025 mới xuất hóa đơn, cơ quan thuế sẽ phạt hành vi lập hóa đơn sai thời điểm (4 - 8 triệu đồng) VÀ ép truy thu lại mức thuế suất 10% (không được hưởng 8%).

#### 1.2. Hướng dẫn Hạch toán Kế toán Kỹ thuật theo 2 Phương pháp

##### A. Phương pháp Khấu trừ (Doanh nghiệp kê khai theo Mẫu 01/GTGT)
Khi bán hàng hóa, cung cấp dịch vụ thuộc diện giảm thuế:
* **Bút toán ghi nhận Doanh thu & Thuế đầu ra:**
  - Nợ TK 111, 112, 131: Tổng giá thanh toán (gồm thuế 8%)
  - Có TK 511: Doanh thu chưa thuế
  - Có TK 33311: Thuế GTGT đầu ra (tính theo thuế suất 8%)
* **Ví dụ thực tế:** Công ty Cổ phần Kiểu Việt xuất bán lô bàn ghế văn phòng trị giá 100.000.000 VNĐ (chưa VAT):
  - Doanh thu: 100.000.000 VNĐ
  - Thuế GTGT 8%: 8.000.000 VNĐ (Tiết kiệm 2.000.000 VNĐ so với mức 10%)
  - Tổng thanh toán: 108.000.000 VNĐ
  - Định khoản: Nợ 131: 108.000.000đ / Có 511: 100.000.000đ / Có 33311: 8.000.000đ.

##### B. Phương pháp Tỷ lệ % trên Doanh thu (Hộ kinh doanh / Doanh nghiệp trực tiếp)
* Khi lập hóa đơn bán hàng: Tại cột "Thành tiền" ghi đầy đủ tiền hàng, tại dòng "Cộng tiền hàng hóa, dịch vụ" ghi số tiền đã giảm 20% mức tỷ lệ % tính thuế GTGT.
* Dòng ghi chú bắt buộc trên hóa đơn: *"Đã giảm... (số tiền) tương ứng 20% mức tỷ lệ % để tính thuế GTGT theo Nghị quyết số 174/2024/QH15"*.

---

### 2. DANH MỤC LOẠI TRỪ & MA TRẬN RỦI RO (DANH SÁCH KHÔNG ĐƯỢC GIẢM)

Nghị định 180/2024/NĐ-CP tiếp tục loại trừ các nhóm ngành sau (vẫn giữ nguyên thuế suất 10%):
1. **Phụ lục I:** Viễn thông, Hoạt động tài chính, Ngân hàng, Chứng khoán, Bảo hiểm, Kinh doanh bất động sản, Kim loại và sản phẩm từ kim loại đúc sẵn, Sản phẩm khai khoáng (trừ khai thác than).
2. **Phụ lục II:** Sản phẩm hóa chất, Sản phẩm than cốc, Dầu mỏ tinh chế.
3. **Phụ lục III:** Hàng hóa và dịch vụ chịu thuế tiêu thụ đặc biệt (Rượu, bia, thuốc lá, ô tô dưới 24 chỗ...).

| Tình huống thực tế tại Doanh nghiệp | Thuế suất áp dụng | Lưu ý kiểm tra của Kế toán |
| :--- | :---: | :--- |
| **Bán đồ gỗ nội thất văn phòng (bàn, ghế, tủ gỗ)** | **8%** | Được giảm thuế 2% theo quy định |
| **Gia công khung sắt, phụ kiện kim loại đúc sẵn đi kèm** | **10%** | Thuộc Phụ lục I - Không được giảm |
| **Hợp đồng thi công nội thất trọn gói (cả gỗ và sắt)** | **Tách dòng** | Phải tách riêng dòng chịu thuế 8% và 10% trên hóa đơn |
| **Dịch vụ thiết kế kiến trúc, tư vấn 3D** | **8%** | Được giảm thuế 2% |

---

### 3. CHẾ TÀI XỬ PHẠT & BẪY QUYẾT TOÁN THUẾ CẦN TRÁNH

1. **Rủi ro xuất sai thuế suất (Xuất 8% cho mặt hàng 10%):**
   - Bị truy thu 2% tiền thuế thiếu + phạt khai sai 20% trên số thuế thiếu + phạt tiền chậm nộp 0.03%/ngày.
   - Bên mua bị loại trừ chi phí được trừ và không được khấu trừ phần thuế GTGT sai quy định.
2. **Rủi ro không lập Bảng kê Giảm thuế GTGT (Mẫu 01 Phụ lục IV):**
   - Bị phạt vi phạm thủ tục thuế từ 5.000.000đ đến 8.000.000đ theo Nghị định 125/2020/NĐ-CP.

---

### 4. ACTION PLAN (KẾ HOẠCH HÀNH ĐỘNG DÀNH CHO PHÒNG KẾ TOÁN)

1. **Cài đặt phần mềm Hóa đơn điện tử:** Cập nhật ngay biểu thuế suất 8% trên hệ thống MISA / VNPT / Viettel Invoice.
2. **Soát xét hợp đồng kinh tế:** Ký phụ lục điều chỉnh đơn giá thanh toán với các khách hàng và chủ đầu tư cho các khối lượng hoàn thành trong 6 tháng đầu năm 2025.
3. **Đào tạo bộ phận Bán hàng & Dự án:** Phổ biến danh mục mã ngành hàng hóa được giảm 8% và không được giảm để nhân viên báo giá chính xác cho khách hàng.

---

## 📜 TOÀN VĂN VĂN BẢN NGHỊ ĐỊNH 180/2024/NĐ-CP

### ĐIỀU 1. GIẢM THUẾ GIÁ TRỊ GIA TĂNG
1. Giảm thuế giá trị gia tăng đối với các nhóm hàng hóa, dịch vụ đang áp dụng mức thuế suất 10%, trừ nhóm hàng hóa, dịch vụ sau:
a) Viễn thông, hoạt động tài chính, ngân hàng, chứng khoán, bảo hiểm, kinh doanh bất động sản, kim loại và sản phẩm từ kim loại đúc sẵn, sản phẩm khai khoáng (không kể khai thác than), than cốc, dầu mỏ tinh chế, sản phẩm hoá chất. Chi tiết tại Phụ lục I ban hành kèm theo Nghị định này.
b) Sản phẩm hàng hóa và dịch vụ chịu thuế tiêu thụ đặc biệt. Chi tiết tại Phụ lục II ban hành kèm theo Nghị định này.
c) Công nghệ thông tin theo pháp luật về công nghệ thông tin. Chi tiết tại Phụ lục III ban hành kèm theo Nghị định này.
2. Mức giảm thuế giá trị gia tăng:
a) Cơ sở kinh doanh tính thuế giá trị gia tăng theo phương pháp khấu trừ được áp dụng mức thuế suất thuế giá trị gia tăng 8% đối với hàng hóa, dịch vụ quy định tại khoản 1 Điều này.
b) Cơ sở kinh doanh (bao gồm cả hộ kinh doanh, cá nhân kinh doanh) tính thuế giá trị gia tăng theo phương pháp tỷ lệ % trên doanh thu được giảm 20% mức tỷ lệ % để tính thuế giá trị gia tăng khi thực hiện xuất hóa đơn đối với hàng hóa, dịch vụ được giảm thuế giá trị gia tăng quy định tại khoản 1 Điều này.

### ĐIỀU 2. HIỆU LỰC THI HÀNH VÀ TỔ CHỨC THỰC HIỆN
1. Nghị định này có hiệu lực thi hành từ ngày 01 tháng 01 năm 2025 đến hết ngày 30 tháng 06 năm 2025.
2. Các Bộ trưởng, Thủ trưởng cơ quan ngang bộ, Thủ trưởng cơ quan thuộc Chính phủ, Chủ tịch Ủy ban nhân dân các tỉnh, thành phố trực thuộc trung ương và các doanh nghiệp, tổ chức, cá nhân có liên quan chịu trách nhiệm thi hành Nghị định này.
`;

fs.writeFileSync('public/data/content/nd-180-2024-nd-cp.md', nd180Deep, 'utf8');
console.log('Saved ultra-deep analysis for ND 180/2024/ND-CP!');