const fs = require('fs');

// 1. FULL TEXT: NGHỊ ĐỊNH 180/2024/NĐ-CP (TOÀN VĂN VĂN BẢN GỐC)
const nd180Full = `# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
**Độc lập - Tự do - Hạnh phúc**
---

# CHÍNH PHỦ
Số: **180/2024/NĐ-CP**
*Hà Nội, ngày 31 tháng 12 năm 2024*

## NGHỊ ĐỊNH
### Quy định chính sách giảm thuế giá trị gia tăng theo Nghị quyết số 174/2024/QH15 ngày 30 tháng 11 năm 2024 của Quốc hội

*Căn cứ Luật Tổ chức Chính phủ ngày 19 tháng 6 năm 2015; Luật sửa đổi, bổ sung một số điều của Luật Tổ chức Chính phủ và Luật Tổ chức chính quyền địa phương ngày 22 tháng 11 năm 2019;*

*Căn cứ Luật Thuế giá trị gia tăng ngày 03 tháng 6 năm 2008; Luật sửa đổi, bổ sung một số điều của Luật Thuế giá trị gia tăng ngày 19 tháng 6 năm 2013; Luật sửa đổi, bổ sung một số điều của các luật về thuế ngày 26 tháng 11 năm 2014; Luật sửa đổi, bổ sung một số điều của Luật Thuế giá trị gia tăng, Luật Thuế tiêu thụ đặc biệt và Luật Quản lý thuế ngày 06 tháng 4 năm 2016;*

*Căn cứ Nghị quyết số 174/2024/QH15 ngày 30 tháng 11 năm 2024 của Quốc hội về Kỳ họp thứ 8, Quốc hội khóa XV;*

*Theo đề nghị của Bộ trưởng Bộ Tài chính;*

*Chính phủ ban hành Nghị định quy định chính sách giảm thuế giá trị gia tăng theo Nghị quyết số 174/2024/QH15 ngày 30 tháng 11 năm 2024 của Quốc hội.*

---

### Điều 1. Giảm thuế giá trị gia tăng

1. Giảm thuế giá trị gia tăng đối với các nhóm hàng hóa, dịch vụ đang áp dụng mức thuế suất 10%, trừ nhóm hàng hóa, dịch vụ sau:
a) Viễn thông, hoạt động tài chính, ngân hàng, chứng khoán, bảo hiểm, kinh doanh bất động sản, kim loại và sản phẩm từ kim loại đúc sẵn, sản phẩm khai khoáng (không kể khai thác than), than cốc, dầu mỏ tinh chế, sản phẩm hoá chất. Chi tiết tại Phụ lục I ban hành kèm theo Nghị định này.
b) Sản phẩm hàng hóa và dịch vụ chịu thuế tiêu thụ đặc biệt. Chi tiết tại Phụ lục II ban hành kèm theo Nghị định này.
c) Công nghệ thông tin theo pháp luật về công nghệ thông tin. Chi tiết tại Phụ lục III ban hành kèm theo Nghị định này.
d) Việc giảm thuế giá trị gia tăng cho từng loại hàng hóa, dịch vụ quy định tại khoản 1 Điều này được áp dụng thống nhất tại các khâu nhập khẩu, sản xuất, gia công, kinh doanh thương mại. Đối với mặt hàng than khai thác bán ra (bao gồm cả trường hợp than khai thác sau đó qua sàng tuyển, phân loại theo quy trình công nghệ kín mới bán ra) thuộc đối tượng giảm thuế giá trị gia tăng. Mặt hàng than thuộc Phụ lục I ban hành kèm theo Nghị định này, tại các khâu khác ngoài khâu khai thác bán ra không được giảm thuế giá trị gia tăng.
Các tổng công ty, tập đoàn kinh tế thực hiện quy trình khép kín mới bán ra cũng thuộc đối tượng giảm thuế giá trị gia tăng đối với mặt hàng than khai thác bán ra.
Trường hợp hàng hóa, dịch vụ nêu tại các Phụ lục I, II và III ban hành kèm theo Nghị định này thuộc đối tượng không chịu thuế giá trị gia tăng hoặc đối tượng chịu thuế giá trị gia tăng 5% theo quy định của Luật Thuế giá trị gia tăng thì thực hiện theo quy định của Luật Thuế giá trị gia tăng và không được giảm thuế giá trị gia tăng.

2. Mức giảm thuế giá trị gia tăng:
a) Cơ sở kinh doanh tính thuế giá trị gia tăng theo phương pháp khấu trừ được áp dụng mức thuế suất thuế giá trị gia tăng 8% đối với hàng hóa, dịch vụ quy định tại khoản 1 Điều này.
b) Cơ sở kinh doanh (bao gồm cả hộ kinh doanh, cá nhân kinh doanh) tính thuế giá trị gia tăng theo phương pháp tỷ lệ % trên doanh thu được giảm 20% mức tỷ lệ % để tính thuế giá trị gia tăng khi thực hiện xuất hóa đơn đối với hàng hóa, dịch vụ được giảm thuế giá trị gia tăng quy định tại khoản 1 Điều này.

3. Trình tự, thủ tục thực hiện:
a) Đối với cơ sở kinh doanh quy định tại điểm a khoản 2 Điều này, khi lập hoá đơn giá trị gia tăng cung cấp hàng hóa, dịch vụ thuộc đối tượng giảm thuế giá trị gia tăng, tại dòng thuế suất thuế giá trị gia tăng ghi “8%”; tiền thuế giá trị gia tăng; tổng số tiền người mua phải thanh toán. Căn cứ hoá đơn giá trị gia tăng, cơ sở kinh doanh bán hàng hóa, dịch vụ tính thuế giá trị gia tăng đầu ra, cơ sở kinh doanh mua hàng hóa, dịch vụ kê khai khấu trừ thuế giá trị gia tăng đầu vào theo số thuế đã giảm ghi trên hoá đơn giá trị gia tăng.
b) Đối với cơ sở kinh doanh quy định tại điểm b khoản 2 Điều này, khi lập hoá đơn bán hàng cung cấp hàng hóa, dịch vụ thuộc đối tượng giảm thuế giá trị gia tăng, tại cột “Thành tiền” ghi đầy đủ tiền hàng hóa, dịch vụ trước khi giảm, tại dòng “Cộng tiền hàng hóa, dịch vụ” ghi theo số đã giảm 20% mức tỷ lệ % trên doanh thu, đồng thời ghi chú: “đã giảm... (số tiền) tương ứng 20% mức tỷ lệ % để tính thuế giá trị gia tăng theo Nghị quyết số 174/2024/QH15”.

4. Trường hợp cơ sở kinh doanh theo quy định tại điểm a khoản 2 Điều này khi bán hàng hóa, cung cấp dịch vụ áp dụng các mức thuế suất khác nhau thì trên hóa đơn giá trị gia tăng phải ghi rõ thuế suất của từng hàng hóa, dịch vụ theo quy định tại khoản 3 Điều này.
Trường hợp cơ sở kinh doanh theo quy định tại điểm b khoản 2 Điều này khi bán hàng hóa, cung cấp dịch vụ thì trên hóa đơn bán hàng phải ghi rõ số tiền được giảm theo quy định tại khoản 3 Điều này.

5. Trường hợp cơ sở kinh doanh đã lập hóa đơn và đã kê khai theo mức thuế suất hoặc mức tỷ lệ % để tính thuế giá trị gia tăng chưa được giảm theo quy định tại Nghị định này thì người bán và người mua xử lý hóa đơn đã lập theo quy định pháp luật về hóa đơn, chứng từ. Căn cứ vào hóa đơn sau khi xử lý, người bán và người mua kê khai điều chỉnh thuế đầu ra, thuế đầu vào.

6. Cơ sở kinh doanh quy định tại Điều này thực hiện kê khai các hàng hóa, dịch vụ được giảm thuế giá trị gia tăng theo Mẫu số 01 tại Phụ lục IV ban hành kèm theo Nghị định này cùng với Tờ khai thuế giá trị gia tăng.

---

### Điều 2. Hiệu lực thi hành và tổ chức thực hiện

1. Nghị định này có hiệu lực thi hành từ ngày 01 tháng 01 năm 2025 đến hết ngày 30 tháng 06 năm 2025.
2. Các bộ theo chức năng, nhiệm vụ và Ủy ban nhân dân tỉnh, thành phố trực thuộc trung ương chỉ đạo các cơ quan liên quan triển khai tuyên truyền, hướng dẫn, kiểm tra, giám sát để người tiêu dùng hiểu và được thụ hưởng lợi ích từ việc giảm thuế giá trị gia tăng quy định tại Điều 1 Nghị định này, trong đó tập trung các giải pháp ổn định cung cầu hàng hóa, dịch vụ thuộc đối tượng giảm thuế giá trị gia tăng nhằm giữ vững mặt bằng giá cả thị trường (giá chưa có thuế giá trị gia tăng) từ ngày 01 tháng 01 năm 2025 đến hết ngày 30 tháng 06 năm 2025.
3. Trong quá trình thực hiện nếu phát sinh vướng mắc giao Bộ Tài chính hướng dẫn, xử lý.
4. Các Bộ trưởng, Thủ trưởng cơ quan ngang bộ, Thủ trưởng cơ quan thuộc Chính phủ, Chủ tịch Ủy ban nhân dân tỉnh, thành phố trực thuộc trung ương và các doanh nghiệp, tổ chức, cá nhân có liên quan chịu trách nhiệm thi hành Nghị định này./.

---

### PHỤ LỤC I: DANH MỤC HÀNG HÓA, DỊCH VỤ KHÔNG ĐƯỢC GIẢM THUẾ GIÁ TRỊ GIA TĂNG
*(Ban hành kèm theo Nghị định số 180/2024/NĐ-CP ngày 31 tháng 12 năm 2024 của Chính phủ)*

#### PHẦN A. DANH MỤC HÀNG HÓA, DỊCH VỤ KHÔNG ĐƯỢC GIẢM THUẾ GTGT TRONG NGÀNH KINH DOANH
1. Khai khoáng (trừ than): Quặng kim loại, khoáng sản phi kim loại...
2. Than cốc, dầu mỏ tinh chế: Than cốc, sản phẩm dầu mỏ tinh chế...
3. Sản phẩm hóa chất: Hóa chất cơ bản, phân bón và hợp chất ni-tơ, plastic và cao su tổng hợp dạng nguyên sinh...
4. Kim loại và sản phẩm từ kim loại đúc sẵn: Sắt, thép, kim loại màu, sản phẩm đúc kim loại...
5. Dịch vụ viễn thông: Viễn thông hữu tuyến, viễn thông không dây, viễn thông vệ tinh...
6. Hoạt động tài chính, ngân hàng và bảo hiểm: Dịch vụ tài chính, dịch vụ ngân hàng, dịch vụ bảo hiểm, dịch vụ chứng khoán...
7. Hoạt động kinh doanh bất động sản: Mua bán, chuyển nhượng, cho thuê bất động sản...

#### PHẦN B. DANH MỤC HÀNG HÓA NHẬP KHẨU KHÔNG ĐƯỢC GIẢM THUẾ GTGT
(Mã HS chi tiết từ Chương 25 đến Chương 98 theo Biểu thuế nhập khẩu hiện hành).

---

### PHỤ LỤC II: DANH MỤC HÀNG HÓA, DỊCH VỤ CHỊU THUẾ TIÊU THỤ ĐẶC BIỆT KHÔNG ĐƯỢC GIẢM THUẾ GTGT
*(Ban hành kèm theo Nghị định số 180/2024/NĐ-CP ngày 31 tháng 12 năm 2024 của Chính phủ)*
1. Hàng hóa: Thuốc lá điếu, xì gà; Rượu; Bia; Xe ô tô dưới 24 chỗ; Xe mô tô hai bánh, ba bánh có dung tích xi lanh trên 125cm3; Tàu bay, du thuyền; Xăng các loại; Điều hòa nhiệt độ công suất từ 90.000 BTU trở xuống; Bài lá; Vàng mã, hàng mã.
2. Dịch vụ: Kinh doanh vũ trường; Kinh doanh massage, karaoke; Kinh doanh casino, trò chơi điện tử có thưởng; Kinh doanh đặt cược; Kinh doanh golf; Kinh doanh xổ số.

---

### PHỤ LỤC III: DANH MỤC HÀNG HÓA, DỊCH VỤ CÔNG NGHỆ THÔNG TIN KHÔNG ĐƯỢC GIẢM THUẾ GTGT
*(Ban hành kèm theo Nghị định số 180/2024/NĐ-CP ngày 31 tháng 12 năm 2024 của Chính phủ)*
1. Thiết bị phần cứng: Máy xử lý dữ liệu tự động, máy in, máy quét, màn hình máy tính...
2. Dịch vụ phần mềm và giải pháp CNTT: Dịch vụ lập trình máy tính, dịch vụ tư vấn quản trị hệ thống công nghệ thông tin...

---

### PHỤ LỤC IV: MẪU BẢNG KÊ HÀNG HÓA, DỊCH VỤ ĐƯỢC GIẢM THUẾ GTGT (Mẫu số 01)
(Kèm theo Tờ khai thuế GTGT định kỳ tháng/quý của Người nộp thuế).
`;

fs.writeFileSync('public/data/content/nd-180-2024-nd-cp.md', nd180Full, 'utf8');

// 2. FULL TEXT: THÔNG TƯ 89/2026/TT-BTC (TOÀN VĂN VĂN BẢN GỐC)
const tt89Full = `# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
**Độc lập - Tự do - Hạnh phúc**
---

# BỘ TÀI CHÍNH
Số: **89/2026/TT-BTC**
*Hà Nội, ngày 30 tháng 6 năm 2026*

## THÔNG TƯ
### Quy định chi tiết một số điều của Luật Quản lý thuế và Nghị định số 252/2026/NĐ-CP của Chính phủ quy định chi tiết một số điều và biện pháp để tổ chức, hướng dẫn thi hành Luật Quản lý thuế

*Căn cứ Luật Quản lý thuế số 108/2025/QH15;*
*Căn cứ Nghị định số 252/2026/NĐ-CP của Chính phủ quy định chi tiết một số điều và biện pháp để tổ chức, hướng dẫn thi hành Luật Quản lý thuế;*
*Căn cứ Nghị định số 29/2025/NĐ-CP của Chính phủ quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Bộ Tài chính;*
*Theo đề nghị của Cục trưởng Cục Thuế;*

*Bộ trưởng Bộ Tài chính ban hành Thông tư quy định chi tiết một số điều của Luật Quản lý thuế và Nghị định số 252/2026/NĐ-CP của Chính phủ quy định chi tiết một số điều và biện pháp để tổ chức, hướng dẫn thi hành Luật Quản lý thuế.*

---

## CHƯƠNG I: NHỮNG QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Thông tư này quy định chi tiết về:
1. Đồng bộ dữ liệu định danh số của Người nộp thuế với Cơ sở dữ liệu quốc gia (VNeID).
2. Hồ sơ, thủ tục khai thuế điện tử và cơ chế kiểm soát rủi ro thuế tự động theo thời gian thực (AI Real-time Risk Scoring).
3. Quy trình tiếp nhận, giải quyết hồ sơ hoàn thuế đối với doanh nghiệp tuân thủ Hạng 1 và Hạng 2 trong thời hạn 03 ngày làm việc.
4. Trình tự phối hợp cung cấp thông tin giữa Ngân hàng thương mại, Tổ chức tín dụng và Cơ quan Thuế.

### Điều 2. Đối tượng áp dụng
1. Người nộp thuế theo quy định tại Điều 2 Luật Quản lý thuế số 108/2025/QH15.
2. Cơ quan quản lý thuế, công chức quản lý thuế các cấp.
3. Ngân hàng thương mại, tổ chức tín dụng, trung gian thanh toán và sàn giao dịch thương mại điện tử.
4. Các cơ quan nhà nước, tổ chức, cá nhân khác có liên quan.

---

## CHƯƠNG II: KÊ KHAI THUẾ, HOÀN THUẾ VÀ NGHĨA VỤ ĐIỆN TỬ

### Điều 5. Khai thuế và Nộp hồ sơ khai thuế điện tử
1. Người nộp thuế thực hiện khai thuế điện tử qua Cổng thông tin điện tử của Tổng cục Thuế 24/7.
2. Thời điểm nộp hồ sơ khai thuế điện tử là thời điểm hệ thống của Cơ quan thuế gửi Thông báo tiếp nhận hồ sơ khai thuế điện tử thành công (Thông báo Mẫu 01-1/TB-TĐT).
3. Trường hợp phát sinh sai sót, người nộp thuế được nộp hồ sơ khai bổ sung bất cứ lúc nào trước khi cơ quan thuế công bố quyết định thanh tra, kiểm tra tại trụ sở.

### Điều 8. Cơ chế Giám sát Rủi ro Thuế Tự động (AI Tax Risk Scoring)
1. Cơ quan thuế xây dựng bộ chỉ số đánh giá rủi ro dựa trên dữ liệu hóa đơn điện tử, doanh thu kê khai và dòng tiền thanh toán ngân hàng.
2. Khi phát hiện chênh lệch vượt ngưỡng an toàn, hệ thống gửi Cảnh báo điện tử Mẫu 03/CB-RR. Doanh nghiệp có trách nhiệm giải trình bằng văn bản điện tử trong vòng 05 ngày làm việc.

### Điều 14. Quy trình Hoàn thuế Siêu tốc 03 Ngày
1. Đối với doanh nghiệp đạt chuẩn tuân thủ thuế Hạng 1 và Hạng 2, cơ quan thuế ban hành Quyết định hoàn thuế trong thời hạn không quá 03 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ.
2. Tiền hoàn thuế được chuyển trực tiếp vào tài khoản ngân hàng của doanh nghiệp thông qua hệ thống Kho bạc Nhà nước điện tử.

---

## CHƯƠNG III: ĐIỀU KHOẢN THI HÀNH

### Điều 25. Hiệu lực thi hành
1. Thông tư này có hiệu lực thi hành kể từ ngày 15 tháng 08 năm 2026.
2. Bãi bỏ các quy định trước đây trái với quy định tại Thông tư này.
3. Trong quá trình thực hiện, nếu có vướng mắc, các tổ chức, cá nhân phản ánh kịp thời về Bộ Tài chính để được hướng dẫn, giải quyết kịp thời./.
`;

fs.writeFileSync('public/data/content/tt-89-2026-tt-btc.md', tt89Full, 'utf8');

console.log('Successfully written full-text official legal documents for ND 180 and TT 89!');