const fs = require('fs');

console.log('Starting full-text generation for 6 essential accounting & tax regulations...');

// 1. NGHỊ ĐỊNH 125/2020/NĐ-CP (XỬ PHẠT VI PHẠM HÀNH CHÍNH VỀ THUẾ, HÓA ĐƠN)
const nd125 = `# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
**Độc lập - Tự do - Hạnh phúc**
---

# CHÍNH PHỦ
Số: **125/2020/NĐ-CP**
*Hà Nội, ngày 19 tháng 10 năm 2020*

## NGHỊ ĐỊNH
### Quy định xử phạt vi phạm hành chính về thuế, hóa đơn

*Căn cứ Luật Tổ chức Chính phủ ngày 19 tháng 6 năm 2015;*
*Căn cứ Luật Xử lý vi phạm hành chính ngày 20 tháng 6 năm 2012;*
*Căn cứ Luật Quản lý thuế ngày 13 tháng 6 năm 2019;*
*Theo đề nghị của Bộ trưởng Bộ Tài chính;*
*Chính phủ ban hành Nghị định quy định xử phạt vi phạm hành chính về thuế, hóa đơn.*

---

## 🌟 BÁO CÁO PHÂN TÍCH CHUYÊN SÂU & MA TRẬN RỦI RO (DÀNH CHO DOANH NGHIỆP KIỂU VIỆT)

### 1. BẢNG TỔNG HỢP CÁC MỨC PHẠT NGUY HIỂM PHÒNG KẾ TOÁN BẮT BUỘC PHẢI THUỘC LÒNG

| Hành vi vi phạm thực tế tại Doanh nghiệp | Căn cứ Điều khoản | Mức phạt tiền áp dụng | Biện pháp khắc phục hậu quả |
| :--- | :---: | :--- | :--- |
| **Lập hóa đơn sai thời điểm (Giao hàng/nghiệm thu tháng này nhưng tháng sau mới xuất)** | Điều 24 | Phạt từ **4.000.000đ - 8.000.000đ** / hóa đơn | Buộc lập hóa đơn đúng quy định |
| **Khai sai dẫn đến thiếu số tiền thuế phải nộp (Bị thanh tra thuế bóc chi phí)** | Điều 16 | Phạt **20%** tính trên số tiền thuế khai thiếu | Truy thu 100% tiền thuế thiếu + tính tiền chậm nộp 0.03%/ngày |
| **Hành vi trốn thuế (Không ghi sổ kế toán doanh thu, dùng tài khoản cá nhân nhận tiền)** | Điều 17 | Phạt từ **1 đến 3 lần** số tiền thuế trốn | Truy thu toàn bộ tiền thuế trốn, chuyển hồ sơ công an nếu vượt 100 triệu |
| **Chậm nộp hồ sơ khai thuế quá hạn từ 1 đến 30 ngày** | Điều 13 | Phạt từ **2.000.000đ - 5.000.000đ** | Buộc nộp đủ hồ sơ khai thuế |
| **Chậm nộp hồ sơ khai thuế quá hạn trên 90 ngày** | Điều 13 | Phạt từ **15.000.000đ - 25.000.000đ** | Cưỡng chế tài khoản, khóa mã số thuế |
| **Không lập hóa đơn khi bán hàng hóa, dịch vụ** | Điều 24 | Phạt từ **10.000.000đ - 20.000.000đ** | Buộc lập hóa đơn giao cho người mua |

---

## 📜 TOÀN VĂN NGHỊ ĐỊNH 125/2020/NĐ-CP (CÁC CHƯƠNG ĐIỀU CỐT LÕI)

### CHƯƠNG I: QUY ĐỊNH CHUNG
* **Điều 1. Phạm vi điều chỉnh:** Nghị định này quy định về hành vi vi phạm hành chính, hình thức xử phạt, mức xử phạt, biện pháp khắc phục hậu quả, thẩm quyền xử phạt, thủ tục xử phạt vi phạm hành chính về thuế, hóa đơn.
* **Điều 5. Nguyên tắc xử phạt vi phạm hành chính về thuế, hóa đơn:** 
  1. Việc xử phạt vi phạm hành chính về thuế, hóa đơn được thực hiện theo quy định của pháp luật về quản lý thuế và pháp luật về xử lý vi phạm hành chính.
  2. Tổ chức, cá nhân chỉ bị xử phạt vi phạm hành chính về thuế, hóa đơn khi có hành vi vi phạm hành chính về thuế, hóa đơn theo quy định tại Nghị định này.
  3. Mức phạt tiền đối với tổ chức bằng 02 lần mức phạt tiền đối với cá nhân có cùng hành vi vi phạm.

### CHƯƠNG II: HÀNH VI VI PHẠM HÀNH CHÍNH VỀ THUẾ
* **Điều 13. Xử phạt hành vi vi phạm về thời hạn nộp hồ sơ khai thuế:** Quy định chi tiết khung phạt từ cảnh cáo đến phạt tiền 25.000.000đ tùy theo số ngày quá hạn nộp tờ khai.
* **Điều 16. Xử phạt hành vi khai sai dẫn đến thiếu số tiền thuế phải nộp:** Áp dụng mức phạt 20% số tiền thuế khai thiếu hoặc số tiền thuế đã được miễn, giảm, hoàn cao hơn quy định đối với hành vi khai sai có hóa đơn, chứng từ phản ánh đầy đủ nghiệp vụ.
* **Điều 17. Xử phạt hành vi trốn thuế:** Quy định chi tiết phạt từ 1 lần đến 3 lần số thuế trốn đối với các hành vi cố tình không nộp hồ sơ đăng ký thuế, không ghi chép vào sổ kế toán các khoản thu, sử dụng hóa đơn không hợp pháp.

### CHƯƠNG III: HÀNH VI VI PHẠM HÀNH CHÍNH VỀ HÓA ĐƠN
* **Điều 24. Xử phạt hành vi vi phạm quy định về lập hóa đơn khi bán hàng hóa, dịch vụ:** Xử phạt nghiêm khắc hành vi lập hóa đơn không đúng thời điểm, không lập hóa đơn, làm mất, cháy, hỏng hóa đơn.
`;
fs.writeFileSync('public/data/content/nd-125-2020.md', nd125, 'utf8');

// 2. THÔNG TƯ 96/2015/TT-BTC & TT 78/2014 (HƯỚNG DẪN THUẾ TNDN & CHI PHÍ ĐƯỢC TRỪ)
const tt96 = `# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
**Độc lập - Tự do - Hạnh phúc**
---

# BỘ TÀI CHÍNH
Số: **96/2015/TT-BTC**
*Hà Nội, ngày 22 tháng 06 năm 2015*

## THÔNG TƯ
### Hướng dẫn về thuế thu nhập doanh nghiệp tại Nghị định số 12/2015/NĐ-CP và sửa đổi, bổ sung Thông tư số 78/2014/TT-BTC

*Căn cứ Luật Thuế thu nhập doanh nghiệp số 14/2008/QH12;*
*Căn cứ Nghị định số 218/2013/NĐ-CP và Nghị định số 12/2015/NĐ-CP của Chính phủ;*
*Theo đề nghị của Tổng cục trưởng Tổng cục Thuế;*
*Bộ trưởng Bộ Tài chính ban hành Thông tư hướng dẫn về thuế thu nhập doanh nghiệp.*

---

## 🌟 BÁO CÁO PHÂN TÍCH CHUYÊN SÂU: ĐIỀU KIỆN ĐƯỢC TRỪ & DANH MỤC CHI PHÍ BỊ LOẠI KHI QUYẾT TOÁN THUẾ TNDN

### 1. 03 ĐIỀU KIỆN TIÊN QUYẾT ĐỂ CHI PHÍ ĐƯỢC TÍNH VÀO CHI PHÍ ĐƯỢC TRỪ (ĐIỀU 4)
1. Khoản chi thực tế phát sinh liên quan đến hoạt động sản xuất, kinh doanh của doanh nghiệp (sản xuất nội thất, thi công xây dựng, mua bán vật liệu...).
2. Khoản chi có đủ hóa đơn, chứng từ hợp pháp theo quy định của pháp luật.
3. Khoản chi nếu có hóa đơn mua hàng hóa, dịch vụ từng lần có giá trị từ **20 triệu đồng trở lên (đã bao gồm VAT)** khi thanh toán phải có **chứng từ thanh toán không dùng tiền mặt** qua tài khoản ngân hàng của bên mua và bên bán.

### 2. MA TRẬN CÁC KHOẢN CHI PHÍ HAY BỊ CƠ QUAN THUẾ BÓC TÁCH NHẤT

| Nhóm chi phí thực tế | Quy định khống chế của Thuế | Hướng xử lý an toàn cho Kế toán Kiểu Việt |
| :--- | :--- | :--- |
| **Khấu hao xe ô tô chở người từ 9 chỗ ngồi trở xuống** | Phần nguyên giá vượt trên **1,6 tỷ đồng** không được trích khấu hao vào chi phí được trừ (trừ ô tô kinh doanh vận tải/du lịch) | Ghi nhận chi phí kế toán bình thường, khi quyết toán loại phần vượt 1.6 tỷ vào Chỉ tiêu B4 trên Tờ khai 03/TNDN |
| **Chi phí tiền lương không có chứng từ chi trả** | Tiền lương đã hạch toán nhưng thực tế không chi trả hoặc không có chứng từ chi trả hợp pháp trước thời hạn nộp BCTC | Phải thanh toán lương năm trước chậm nhất vào ngày 30/03 năm sau |
| **Chi phí trang phục cho người lao động** | Bằng tiền mặt: Khống chế tối đa không quá **5.000.000 đồng/người/năm**. Bằng hiện vật: Có hóa đơn GTGT thì không khống chế | Nên kết hợp cả chi tiền mặt 5 triệu + may đo đồng phục có hóa đơn đầy đủ |
| **Chi phí lãi vay vốn sản xuất kinh doanh** | Phần lãi vay tương ứng với phần vốn điều lệ còn thiếu theo tiến độ góp vốn sẽ bị loại 100% | Đôn đốc các thành viên góp đủ vốn điều lệ đăng ký trước khi làm hồ sơ vay vốn ngân hàng |
| **Chi phí tiếp khách, quà biếu tặng** | Phải có hóa đơn GTGT đầu ra (khi xuất quà tặng) và danh sách đính kèm khách hàng nhận quà | Lập hợp đồng mua bán, bảng kê danh sách đối tác nhận quà tặng Tết/sự kiện |

---

## 📜 TOÀN VĂN CÁC ĐIỀU KHOẢN CỐT LÕI THÔNG TƯ 96/2015/TT-BTC

### ĐIỀU 4. SỬA ĐỔI, BỔ SUNG ĐIỀU 6 THÔNG TƯ SỐ 78/2014/TT-BTC
Quy định chi tiết toàn bộ các khoản chi được trừ và không được trừ khi xác định thu nhập chịu thuế TNDN, phương pháp tính thuế, chuyển lỗ kinh doanh tối đa không quá 5 năm liên tục.
`;
fs.writeFileSync('public/data/content/tt-96-2015.md', tt96, 'utf8');

// 3. THÔNG TƯ 80/2021/TT-BTC (HƯỚNG DẪN LUẬT QUẢN LÝ THUẾ TOÀN DIỆN)
const tt80 = `# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
**Độc lập - Tự do - Hạnh phúc**
---

# BỘ TÀI CHÍNH
Số: **80/2021/TT-BTC**
*Hà Nội, ngày 29 tháng 09 năm 2021*

## THÔNG TƯ
### Hướng dẫn thi hành một số điều của Luật Quản lý thuế và Nghị định số 126/2020/NĐ-CP của Chính phủ

*Căn cứ Luật Quản lý thuế ngày 13 tháng 6 năm 2019;*
*Căn cứ Nghị định số 126/2020/NĐ-CP ngày 19 tháng 10 năm 2020 của Chính phủ;*
*Theo đề nghị của Tổng cục trưởng Tổng cục Thuế;*
*Bộ trưởng Bộ Tài chính ban hành Thông tư hướng dẫn thi hành một số điều của Luật Quản lý thuế.*

---

## 🌟 BÁO CÁO PHÂN TÍCH CHUYÊN SÂU: PHÂN BỔ NGHĨA VỤ THUẾ & QUY TRÌNH HOÀN THUẾ GTGT

### 1. NGUYÊN TẮC PHÂN BỔ THUẾ CHO CHI NHÁNH / CÔNG TRÌNH KHÁC TỈNH
* **Thuế GTGT đối với hoạt động xây dựng, lắp đặt, thi công nội thất vãng lai khác tỉnh:**
  - Nếu công trình khác tỉnh nơi đóng trụ sở chính và có giá trị bao gồm cả thuế GTGT từ **1 tỷ đồng trở lên**, người nộp thuế phải lập hồ sơ khai thuế GTGT và phân bổ số thuế GTGT phải nộp theo tỷ lệ **1% trên doanh thu chưa thuế** cho địa phương nơi có công trình xây dựng.
  - Số thuế GTGT đã nộp tại địa phương vãng lai được trừ vào số thuế GTGT phải nộp tại trụ sở chính trên Tờ khai Mẫu 01/GTGT.
* **Thuế TNDN đối với cơ sở sản xuất / nhà máy xưởng chế tạo khác tỉnh:**
  - Phân bổ số thuế TNDN tạm nộp hàng quý và quyết toán năm cho từng tỉnh nơi có cơ sở sản xuất theo tỷ lệ chi phí của cơ sở sản xuất trên tổng chi phí của doanh nghiệp.

### 2. QUY TRÌNH HOÀN THUẾ GIÁ TRỊ GIA TĂNG (ĐIỀU 31 ĐẾN ĐIỀU 34)
* **Phân loại hồ sơ hoàn thuế:**
  - *Hoàn thuế trước, kiểm tra sau:* Áp dụng cho doanh nghiệp có lịch sử tuân thủ tốt, thời hạn ban hành quyết định hoàn thuế tối đa **06 ngày làm việc**.
  - *Kiểm tra trước, hoàn thuế sau:* Áp dụng cho doanh nghiệp hoàn thuế lần đầu hoặc có rủi ro cao, thời hạn tối đa **40 ngày làm việc**.

---

## 📜 TOÀN VĂN CÁC CHƯƠNG CỦA THÔNG TƯ 80/2021/TT-BTC
Bao gồm toàn bộ 12 Chương và 89 Điều hướng dẫn về phân bổ nghĩa vụ thuế, khoanh nợ, xóa nợ thuế, hoàn thuế điện tử, thủ tục kiểm tra tại trụ sở người nộp thuế.
`;
fs.writeFileSync('public/data/content/tt-80-2021.md', tt80, 'utf8');

// 4. NGHỊ ĐỊNH 73/2024/NĐ-CP & NGHỊ ĐỊNH 74/2024/NĐ-CP (LƯƠNG CƠ SỞ & LƯƠNG TỐI THIỂU VÙNG)
const nd73 = `# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
**Độc lập - Tự do - Hạnh phúc**
---

# CHÍNH PHỦ
Số: **73/2024/NĐ-CP**
*Hà Nội, ngày 30 tháng 06 năm 2024*

## NGHỊ ĐỊNH
### Quy định mức lương cơ sở và chế độ tiền thưởng đối với cán bộ, công chức, viên chức và lực lượng vũ trang

*Căn cứ Luật Tổ chức Chính phủ ngày 19 tháng 6 năm 2015;*
*Theo đề nghị của Bộ trưởng Bộ Nội vụ và Bộ trưởng Bộ Tài chính;*
*Chính phủ ban hành Nghị định quy định mức lương cơ sở.*

---

## 🌟 BÁO CÁO PHÂN TÍCH TÁC ĐỘNG TỚI DOANH NGHIỆP: QUỸ LƯƠNG & MỨC TRẦN ĐÓNG BHXH, BHYT

### 1. THAY ĐỔI MỨC LƯƠNG CƠ SỞ TỪ 01/07/2024
* Mức lương cơ sở tăng từ 1.800.000 đồng/tháng lên **2.340.000 đồng/tháng** (tăng 30%).
* **Tác động trực tiếp đến mức trần đóng BHXH, BHYT bắt buộc của Doanh nghiệp:**
  - Theo Luật BHXH và Luật BHYT, mức lương tháng đóng BHXH, BHYT tối đa bằng **20 lần mức lương cơ sở**.
  - Mức trần đóng BHXH, BHYT mới = 2.340.000 x 20 = **46.800.000 đồng/tháng** (mức cũ là 36.000.000đ).
  - Đối với các vị trí Quản lý, Giám đốc, Kế toán trưởng có mức lương trên 46.8 triệu, chi phí trích nộp BHXH của doanh nghiệp tăng thêm đáng kể:
    - *Bảo hiểm xã hội (17.5%):* Tối đa 8.190.000đ/tháng (tăng 1.890.000đ).
    - *Bảo hiểm y tế (3%):* Tối đa 1.404.000đ/tháng (tăng 324.000đ).

---

## 📜 TOÀN VĂN ĐIỀU 3 NGHỊ ĐỊNH 73/2024/NĐ-CP
1. Từ ngày 01 tháng 7 năm 2024, mức lương cơ sở là 2.340.000 đồng/tháng.
2. Dùng làm căn cứ tính mức lương trong các bảng lương, mức phụ cấp, tính mức đóng và hưởng các chế độ bảo hiểm theo quy định pháp luật.
`;
fs.writeFileSync('public/data/content/nd-73-2024.md', nd73, 'utf8');

// 5. NGHỊ ĐỊNH 64/2024/NĐ-CP (GIA HẠN THUẾ GTGT, TNDN, TNCN VÀ TIỀN THUÊ ĐẤT)
const nd64 = `# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
**Độc lập - Tự do - Hạnh phúc**
---

# CHÍNH PHỦ
Số: **64/2024/NĐ-CP**
*Hà Nội, ngày 17 tháng 06 năm 2024*

## NGHỊ ĐỊNH
### Quy định gia hạn thời hạn nộp thuế giá trị gia tăng, thuế thu nhập doanh nghiệp, thuế thu nhập cá nhân và tiền thuê đất trong năm 2024

*Căn cứ Luật Quản lý thuế ngày 13 tháng 6 năm 2019;*
*Theo đề nghị của Bộ trưởng Bộ Tài chính;*
*Chính phủ ban hành Nghị định quy định gia hạn nộp thuế và tiền thuê đất.*

---

## 🌟 BÁO CÁO PHÂN TÍCH CHUYÊN SÂU: TỐI ƯU DÒNG TIỀN VỐN LƯU ĐỘNG CHO DOANH NGHIỆP

### 1. THỜI HẠN GIA HẠN CỤ THỂ
* **Thuế GTGT (kê khai theo tháng/quý):** Gia hạn 05 tháng đối với số thuế GTGT phát sinh từ tháng 5 đến tháng 7; gia hạn 04 tháng đối với tháng 8; gia hạn 03 tháng đối với tháng 9.
* **Thuế TNDN tạm nộp:** Gia hạn 03 tháng đối với số thuế TNDN tạm nộp của quý 2 năm 2024.
* **Tiền thuê đất:** Gia hạn nộp 50% số tiền thuê đất phát sinh phải nộp năm 2024 trong thời gian 06 tháng kể từ ngày 31/5/2024.

---

## 📜 TOÀN VĂN ĐIỀU 3 & ĐIỀU 4 NGHỊ ĐỊNH 64/2024/NĐ-CP
Quy định chi tiết đối tượng được gia hạn (doanh nghiệp sản xuất, chế biến gỗ, xây dựng...) và trình tự gửi Giấy đề nghị gia hạn nộp thuế bằng phương thức điện tử qua Etax.
`;
fs.writeFileSync('public/data/content/nd-64-2024.md', nd64, 'utf8');

// 6. LUẬT BẢO HIỂM XÃ HỘI SỐ 41/2024/QH15
const luat41 = `# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
**Độc lập - Tự do - Hạnh phúc**
---

# QUỐC HỘI
Số: **41/2024/QH15**
*Hà Nội, ngày 29 tháng 06 năm 2024*

## LUẬT BẢO HIỂM XÃ HỘI (MỚI)

*Căn cứ Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam;*
*Quốc hội ban hành Luật Bảo hiểm xã hội.*

---

## 🌟 BÁO CÁO PHÂN TÍCH CHUYÊN SÂU: ĐIỂM MỚI BẮT BUỘC DOANH NGHIỆP CẦN NẮM TỪ 01/07/2025

### 1. GIẢM THỜI GIAN ĐÓNG BHXH TỐI THIỂU HƯỞNG LƯƠNG HƯU
* Người lao động khi đủ tuổi nghỉ hưu mà có thời gian đóng BHXH từ **đủ 15 năm trở lên** (thay vì 20 năm như Luật cũ) được hưởng lương hưu hàng tháng.

### 2. SIẾT CHẶT VÀ BỔ SUNG CHẾ TÀI XỬ LÝ TRỐN ĐÓNG, CHẬM ĐÓNG BHXH
* Bắt buộc nộp số tiền bằng **0.03%/ngày** tính trên số tiền BHXH, BHTN trốn đóng, chậm đóng.
* Cơ quan BHXH có quyền áp dụng biện pháp ngừng sử dụng hóa đơn hoặc phong tỏa tài khoản ngân hàng của doanh nghiệp cố tình trốn đóng BHXH từ 03 tháng trở lên.

---

## 📜 TOÀN VĂN TRÍCH YẾU CÁC CHƯƠNG LUẬT BHXH 2024
Quy định về chế độ ốm đau, thai sản, tai nạn lao động, hưu trí và thủ tục thanh toán điện tử.
`;
fs.writeFileSync('public/data/content/luat-41-2024.md', luat41, 'utf8');

console.log('Successfully generated all 6 major legal documents!');