// src/data/templates-14.ts
// Đủ 14 bộ mẫu biểu thực chiến dự thầu thiết bị y tế & vận hành phòng khám Hòa Đức
// Tuyệt đối tuân thủ RULE L01: Triển khai đủ 100% cả 14 mẫu biểu

export interface TemplateDoc {
  id: string;
  code: string;
  title: string;
  category: 'bidding' | 'technical' | 'delivery' | 'clinic_finance';
  description: string;
  legalBasis: string;
  content: string;
}

export const TEMPLATES_14: TemplateDoc[] = [
  {
    id: 'tpl-01',
    code: 'MẪU 01/E-HSDT',
    title: 'Đơn dự thầu cung cấp trang thiết bị y tế',
    category: 'bidding',
    description: 'Mẫu đơn dự thầu chính thức theo Nghị định 214/2025/NĐ-CP, cam kết hiệu lực hồ sơ và bảo đảm dự thầu.',
    legalBasis: 'Nghị định 214/2025/NĐ-CP & Luật Đấu thầu 22/2023/QH15',
    content: `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
---
ĐƠN DỰ THẦU
(Gói thầu Mua sắm trang thiết bị y tế)

Kính gửi: [TÊN BÊN MỜI THẦU / BỆNH VIỆN]

1. Tên nhà thầu: CÔNG TY CỔ PHẦN KIỂU VIỆT
- Mã số thuế: 5901168128
- Địa chỉ: Tỉnh Gia Lai / Chi nhánh Quy Nhơn, Tỉnh Bình Định

2. Sau khi nghiên cứu Hồ sơ mời thầu (E-HSMT) số: [MÃ E-TBMT] cho gói thầu: [TÊN GÓI THẦU], chúng tôi xin cam kết:
a) Cung cấp trang thiết bị y tế mới 100%, sản xuất năm [2025/2026], đúng chủng loại, model, cấu hình và tiêu chuẩn kỹ thuật.
b) Giá dự thầu trọn gói (đã bao gồm thuế, chi phí vận chuyển, lắp đặt, bảo hành): [SỐ TIỀN BẰNG CHỮ] đồng ([SỐ TIỀN BẰNG SỐ] VND).
c) Hiệu lực của Hồ sơ dự thầu: [Số ngày] ngày kể từ ngày đóng thầu.
d) Bảo đảm dự thầu: Đính kèm Thư bảo lãnh của Ngân hàng trị giá: [Số tiền] VND.

ĐẠI DIỆN HỢP PHÁP CỦA NHÀ THẦU
(Ký tên, đóng dấu, ghi rõ chức danh)`
  },
  {
    id: 'tpl-02',
    code: 'MẪU 02/E-HSDT',
    title: 'Thỏa thuận liên danh tham gia đấu thầu thiết bị y tế',
    category: 'bidding',
    description: 'Thỏa thuận liên danh giữa Kiểu Việt và đối tác công nghệ y sinh phân định trách nhiệm cung cấp hàng hóa.',
    legalBasis: 'Điều 5 Luật Đấu thầu 22/2023/QH15',
    content: `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
---
VĂN BẢN THỎA THUẬN LIÊN DANH

Căn cứ E-HSMT gói thầu: [TÊN GÓI THẦU]
Chúng tôi gồm có:
1. Thành viên đứng đầu liên danh: CÔNG TY CỔ PHẦN KIỂU VIỆT (Tỷ lệ đảm nhận: 60% giá trị gói thầu)
2. Thành viên liên danh: [TÊN ĐƠN VỊ ĐỐI TÁC CÔNG NGHỆ Y TẾ] (Tỷ lệ đảm nhận: 40% giá trị gói thầu)

Hai bên thống nhất:
- Phân công công việc: Kiểu Việt chịu trách nhiệm nhập khẩu, giao lắp, bảo hành và xuất hóa đơn; Đối tác chịu trách nhiệm đào tạo chuyển giao công nghệ lâm sàng.
- Trách nhiệm chung: Chịu trách nhiệm liên đới trước Chủ đầu tư về toàn bộ chất lượng thiết bị y tế cung cấp.

ĐẠI DIỆN HỢP PHÁP CÁC THÀNH VIÊN LIÊN DANH
(Ký tên và đóng dấu)`
  },
  {
    id: 'tpl-03',
    code: 'MẪU 03/LOA',
    title: 'Giấy ủy quyền bán hàng của Nhà sản xuất thiết bị y tế (LOA)',
    category: 'technical',
    description: 'Thư ủy quyền phân phối chính hãng từ chủ sở hữu số lưu hành / nhà sản xuất G7, EU cho Kiểu Việt.',
    legalBasis: 'Điều 14 & 28 Nghị định 214/2025/NĐ-CP',
    content: `MANUFACTURER AUTHORIZATION FORM
(THƯ ỦY QUYỀN CỦA NHÀ SẢN XUẤT)

Kính gửi: [TÊN BÊN MỜI THẦU]

Chúng tôi, [TÊN HÃNG SẢN XUẤT THIẾT BỊ Y TẾ], có trụ sở chính tại: [QUỐC GIA/ĐỊA CHỈ HÃNG], là nhà sản xuất hợp pháp của các thiết bị y tế sau:
- Tên thiết bị: [Máy xét nghiệm / Siêu âm / X-quang]
- Model: [Tên Model] - Xuất xứ: [G7 / EU / Nhật / Hàn]

Bằng văn bản này, chúng tôi ủy quyền cho:
CÔNG TY CỔ PHẦN KIỂU VIỆT (MST: 5901168128)
Được đại diện chúng tôi tham gia dự thầu, cung cấp, lắp đặt và thực hiện các nghĩa vụ bảo hành chính hãng đối với các thiết bị nêu trên cho Gói thầu: [TÊN GÓI THẦU].
Chúng tôi cam kết cung cấp phụ tùng thay thế chính hãng trong thời gian tối thiểu 05 năm.

ĐẠI DIỆN NHÀ SẢN XUẤT
(Chữ ký, con dấu và Hợp pháp hóa lãnh sự)`
  },
  {
    id: 'tpl-04',
    code: 'MẪU 04/MATRIX',
    title: 'Bảng đối chiếu thông số kỹ thuật thiết bị y tế (Soi E-HSMT)',
    category: 'technical',
    description: 'Ma trận đối chiếu chi tiết từng thông số kỹ thuật E-HSMT với Catalogue và Tài liệu kỹ thuật của máy chào thầu.',
    legalBasis: 'Nghị định 214/2025/NĐ-CP & Thông tư 57/2025/TT-BYT',
    content: `BẢNG ĐỐI CHIẾU THÔNG SỐ KỸ THUẬT VÀ ĐÁNH GIÁ ĐÁP ỨNG

Tên gói thầu: [TÊN GÓI THẦU MUA SẮM TBYT]
Tên thiết bị chào thầu: [TÊN THIẾT BỊ - MODEL - HÃNG - NƯỚC SẢN XUẤT]

| STT | Tiêu chí kỹ thuật theo E-HSMT | Thông số kỹ thuật chào thầu (Kiểu Việt) | Tài liệu chứng minh | Đánh giá (Đạt / Không đạt) |
|---|---|---|---|---|
| 1 | Năm sản xuất: Từ năm 2025 trở lại đây | Mới 100%, sản xuất năm 2026 | Tờ khai hải quan & CO | ĐẠT |
| 2 | Phân loại rủi ro: Loại B hoặc C | Đã phân loại rủi ro Loại B hợp chuẩn | Bản kết quả phân loại | ĐẠT |
| 3 | Tốc độ xét nghiệm: >= 400 test/giờ | Đạt 450 test/giờ | Catalogue trang 04 | ĐẠT |
| 4 | Hệ thống quang học: Kỹ thuật số 12 bước sóng | 12 bước sóng (340 - 800 nm) | Hướng dẫn sử dụng (IFU) | ĐẠT |
| 5 | Kết nối mạng LIS bệnh viện: Cổng LAN 2 chiều | Tương thích giao thức HL7/ASTM | Báo cáo kiểm thử kết nối | ĐẠT |`
  },
  {
    id: 'tpl-05',
    code: 'MẪU 05/CLARIFY',
    title: 'Văn bản yêu cầu làm rõ E-HSMT (Chống tiêu chí cài cắm)',
    category: 'bidding',
    description: 'Công văn đối chất với Bên mời thầu khi phát hiện E-HSMT cài cắm thông số độc quyền vi phạm Điều 44 Luật Đấu thầu.',
    legalBasis: 'Điều 44 Khoản 3 Luật Đấu thầu 22/2023/QH15',
    content: `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
---
VĂN BẢN YÊU CẦU LÀM RÕ HỒ SƠ MỜI THẦU
(V/v Tiêu chuẩn kỹ thuật gây hạn chế cạnh tranh)

Kính gửi: [BÊN MỜI THẦU / CHỦ ĐẦU TƯ BỆNH VIỆN]

1. Tên nhà thầu: CÔNG TY CỔ PHẦN KIỂU VIỆT
2. Về gói thầu: [TÊN GÓI THẦU THIẾT BỊ Y TẾ] - Số E-TBMT: [MÃ E-TBMT]

Qua nghiên cứu E-HSMT, tại Chương V (Yêu cầu kỹ thuật), mục [X] có quy định tiêu chí: "[Ghi rõ thông số kỹ thuật mang tính độc quyền của 1 hãng]".
Nhà thầu nhận thấy:
- Tiêu chí này là đặc tính thiết kế riêng biệt của hãng [Tên hãng], không ảnh hưởng đến mục đích chẩn đoán lâm sàng và các hãng G7 khác đều có giải pháp kỹ thuật tương đương.
- Việc quy định tiêu chí này vi phạm Khoản 3 Điều 44 Luật Đấu thầu số 22/2023/QH15 ("Hồ sơ mời thầu không được nêu bất kỳ điều kiện nào nhằm hạn chế sự tham gia của nhà thầu...").

Kiến nghị:
Kính đề nghị Bên mời thầu xem xét điều chỉnh yêu cầu kỹ thuật thành: "[Thông số mở rộng hoặc tương đương]" nhằm tạo sự cạnh tranh lành mạnh, tiết kiệm ngân sách nhà nước.

ĐẠI DIỆN HỢP PHÁP NHÀ THẦU
(Ký tên và đóng dấu)`
  },
  {
    id: 'tpl-06',
    code: 'MẪU 06/SCHEDULE',
    title: 'Bảng tiến độ cung cấp hàng hóa, lắp đặt và đào tạo',
    category: 'delivery',
    description: 'Kế hoạch triển khai giao nhận, thông quan và vận hành máy y tế trong vòng 30 - 60 ngày.',
    legalBasis: 'Điều 28 Nghị định 214/2025/NĐ-CP',
    content: `BẢNG KẾ HOẠCH TIẾN ĐỘ CUNG CẤP & BÀN GIAO THIẾT BỊ Y TẾ

Tổng thời gian thực hiện: [45 ngày] kể từ ngày hợp đồng có hiệu lực.

| Tuần | Công việc triển khai | Đơn vị phụ trách | Sản phẩm bàn giao |
|---|---|---|---|
| Tuần 1 | Ký kết hợp đồng, mở bảo lãnh thực hiện hợp đồng | Phòng Dự án Kiểu Việt | Thư bảo lãnh 5% giá trị hợp đồng |
| Tuần 2 | Vận chuyển hàng hóa từ kho cảng về cơ sở y tế | Đội logistics Kiểu Việt | Biên bản kiểm tra niêm phong thùng máy |
| Tuần 3 | Lắp đặt cơ điện, đấu nối nguồn, cài đặt phần mềm LIS | Kỹ sư y sinh Kiểu Việt | Biên bản hoàn thành lắp đặt vật lý |
| Tuần 4 | Chạy thử tải 72h, hiệu chuẩn đối chứng mẫu bệnh phẩm | Chuyên viên hãng & BV | Báo cáo kiểm định an toàn kỹ thuật (TT 24) |
| Tuần 5 | Đào tạo bác sĩ/KTV, nghiệm thu chính thức đưa vào sử dụng | Đại diện 2 bên | Biên bản nghiệm thu bàn giao đưa vào sử dụng |`
  },
  {
    id: 'tpl-07',
    code: 'MẪU 07/WARRANTY',
    title: 'Cam kết bảo hành chính hãng và SLA xử lý sự cố',
    category: 'technical',
    description: 'Văn bản cam kết thời gian bảo hành 24-36 tháng và thời gian có mặt xử lý sự cố trong vòng 4 giờ.',
    legalBasis: 'Điều kiện E-HSMT & Thỏa thuận cung ứng',
    content: `GIẤY CAM KẾT BẢO HÀNH & DỊCH VỤ HẬU MÃI THIẾT BỊ Y TẾ

Nhà thầu: CÔNG TY CỔ PHẦN KIỂU VIỆT
Cam kết các điều khoản bảo hành cho Gói thầu [TÊN GÓI THẦU]:
1. Thời hạn bảo hành toàn diện: 24 tháng kể từ ngày ký Biên bản nghiệm thu bàn giao.
2. Cam kết thời gian đáp ứng (SLA):
- Tiếp nhận cuộc gọi hỗ trợ kỹ thuật: 24/7.
- Kỹ sư có mặt tại Bệnh viện xử lý sự cố: Không quá 04 giờ (khu vực Quy Nhơn / Pleiku) và 08 giờ (tuyến huyện).
- Thời gian khắc phục xong sự cố: Không quá 24 giờ. Nếu quá 24h, cung cấp máy thay thế tương đương.
3. Bảo dưỡng định kỳ: 03 tháng/lần miễn phí (vệ sinh hệ thống quang học, bôi trơn cơ khí, kiểm tra dòng rò).
4. Cam kết cung ứng linh kiện thay thế chính hãng tối thiểu trong 05 năm.

ĐẠI DIỆN NHÀ THẦU
(Ký tên và đóng dấu)`
  },
  {
    id: 'tpl-08',
    code: 'MẪU 08/PRICE-BYT',
    title: 'Bảng kê khai giá thiết bị y tế theo Thông tư 29/2024/TT-BYT',
    category: 'bidding',
    description: 'Mẫu kê khai cấu thành giá thiết bị y tế trên Cổng thông tin điện tử Bộ Y tế phục vụ thanh kiểm tra.',
    legalBasis: 'Thông tư 29/2024/TT-BYT & Điều 44 VBHN 08/2026',
    content: `BẢNG KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ
(Công khai trên Cổng thông tin điện tử Bộ Y tế)

Đơn vị kê khai: CÔNG TY CỔ PHẦN KIỂU VIỆT
1. Tên thiết bị: [Tên thương mại] - Model: [Model]
2. Nước sản xuất: [Nước] - Hãng: [Tên hãng]
3. Số lưu hành / Số công bố: [Số hiệu lưu hành]
4. Cơ cấu cấu thành giá kê khai:
- Giá vốn nhập khẩu (CIF): [Số tiền] VND
- Thuế nhập khẩu & Thuế GTGT khâu nhập khẩu: [Số tiền] VND
- Chi phí vận chuyển, kho bãi, bảo quản: [Số tiền] VND
- Chi phí bảo hành, kiểm định, đào tạo: [Số tiền] VND
- Lợi nhuận định mức dự kiến: [Số tiền] VND
5. GIÁ KÊ KHAI CÔNG BỐ (Chưa VAT): [SỐ TIỀN] VND
6. GIÁ KÊ KHAI CÔNG BỐ (Đã VAT): [SỐ TIỀN] VND

Cam kết chịu trách nhiệm trước pháp luật về tính chính xác của số liệu kê khai.
ĐẠI DIỆN DOANH NGHIỆP`
  },
  {
    id: 'tpl-09',
    code: 'MẪU 09/ACCEPTANCE',
    title: 'Biên bản nghiệm thu kỹ thuật & Chạy thử lâm sàng 72 giờ',
    category: 'delivery',
    description: 'Biên bản xác nhận thiết bị hoạt động ổn định, đạt các chỉ số an toàn điện, an toàn bức xạ và độ lặp lại xét nghiệm.',
    legalBasis: 'Quy chuẩn kỹ thuật quốc gia & Hợp đồng cung ứng',
    content: `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
---
BIÊN BẢN NGHIỆM THU CHẠY THỬ LÂM SÀNG

Hôm nay, ngày [Ngày/Tháng/Năm], tại [BỆNH VIỆN / PHÒNG KHÁM ĐA KHOA HÒA ĐỨC]
Thành phần tham gia:
1. Đại diện Bên nhận (Cơ sở y tế): Giám đốc, Trưởng khoa Xét nghiệm, Kỹ sư phụ trách TBYT
2. Đại diện Bên giao (Kiểu Việt): Trưởng phòng Kỹ thuật y sinh

Nội dung nghiệm thu:
1. Thiết bị: [Tên máy] - Số Serial: [Serial Number]
2. Tình trạng chạy thử 72 giờ liên tục:
- Điện áp, dòng rò tiếp đất: Đạt tiêu chuẩn an toàn IEC 60601-1.
- Độ sai số kết quả xét nghiệm (CV%): < 2.5% (Nằm trong giới hạn cho phép).
- Không phát sinh lỗi phần mềm hoặc cảnh báo cảm biến.
Kết luận: Thiết bị đủ điều kiện bàn giao đưa vào phục vụ khám chữa bệnh.

ĐẠI DIỆN CƠ SỞ Y TẾ                ĐẠI DIỆN CÔNG TY KIỂU VIỆT
(Ký, ghi rõ họ tên)                  (Ký, ghi rõ họ tên)`
  },
  {
    id: 'tpl-10',
    code: 'MẪU 10/TRAINING',
    title: 'Biên bản bàn giao sản phẩm đào tạo & Chứng nhận sử dụng',
    category: 'delivery',
    description: 'Biên bản xác nhận các bác sĩ, cử nhân xét nghiệm đã hoàn thành khóa huấn luyện vận hành thiết bị an toàn.',
    legalBasis: 'Điều kiện chuyển giao công nghệ TBYT',
    content: `BIÊN BẢN HOÀN THÀNH ĐÀO TẠO VẬN HÀNH THIẾT BỊ Y TẾ

1. Tên thiết bị đào tạo: [Tên thiết bị y tế]
2. Giảng viên hướng dẫn: Kỹ sư ứng dụng lâm sàng - Công ty CP Kiểu Việt
3. Danh sách học viên tham dự (Bác sĩ, Kỹ thuật viên Phòng khám Hòa Đức / Bệnh viện):
- [Họ và tên 1] - Chức danh: Bác sĩ Trưởng khoa
- [Họ và tên 2] - Chức danh: Cử nhân Kỹ thuật Xét nghiệm
4. Nội dung đã hoàn thành:
- Quy trình khởi động, chuẩn máy (Calibration), chạy mẫu nội kiểm (QC hàng ngày).
- Thao tác nạp mẫu bệnh phẩm và đọc kết quả chẩn đoán.
- Xử lý các sự cố kẹt cơ khí, nghẹt kim hút mẫu và quy trình vệ sinh cuối ngày.
Kết luận: 100% học viên đạt yêu cầu kiểm tra thực hành độc lập.

XÁC NHẬN CỦA HỌC VIÊN                 XÁC NHẬN CỦA ĐƠN VỊ ĐÀO TẠO`
  },
  {
    id: 'tpl-11',
    code: 'MẪU 11/VAT-ALLOC',
    title: 'Bảng phân bổ thuế GTGT đầu vào dùng chung Phòng khám Hòa Đức',
    category: 'clinic_finance',
    description: 'Bảng tính tự động phân bổ thuế GTGT đầu vào giữa doanh thu khám chữa bệnh (không chịu thuế) và doanh thu thuốc (thuế 5%).',
    legalBasis: 'Điều 14 Khoản 2 Thông tư 219/2013/TT-BTC',
    content: `BẢNG PHÂN BỔ THUẾ GTGT ĐẦU VÀO ĐƯỢC KHẤU TRỪ
(Phòng khám Đa khoa Hòa Đức - Công ty Kiểu Việt)
Kỳ tính thuế: [Quý / Năm]

1. Cơ cấu Doanh thu trong kỳ:
- Doanh thu Khám chữa bệnh BHYT & Dịch vụ (Không chịu thuế GTGT): [Doanh thu KCB] VND (Tỷ lệ: [% KCB])
- Doanh thu Bán thuốc điều trị (Thuế GTGT 5%): [Doanh thu Thuốc] VND (Tỷ lệ: [% Thuốc])
- Doanh thu TPCN / Khác (Thuế GTGT 10%): [Doanh thu Khác] VND (Tỷ lệ: [% Khác])
=> Tổng Doanh thu: [Tổng Doanh Thu] VND
=> Tỷ lệ doanh thu chịu thuế GTGT / Tổng doanh thu: [% Chịu Thuế] %

2. Phân bổ Thuế GTGT đầu vào dùng chung (Điện, nước, thuê nhà, khấu hao):
- Tổng số thuế GTGT đầu vào dùng chung phát sinh: [Tổng Thuế Đầu Vào] VND
- Thuế GTGT đầu vào ĐƯỢC KHẤU TRỪ (= Tổng thuế x % Chịu thuế): [Số tiền khấu trừ] VND (Kê khai Chỉ tiêu 25 trên tờ khai 01/GTGT)
- Thuế GTGT đầu vào KHÔNG ĐƯỢC KHẤU TRỪ (Tính vào chi phí hợp lý TNDN): [Số tiền không được trừ] VND

NGƯỜI LẬP BIỂU                     KẾ TOÁN TRƯỞNG`
  },
  {
    id: 'tpl-12',
    code: 'MẪU 12/DEPRECIATION',
    title: 'Bảng theo dõi trích khấu hao dàn máy xét nghiệm/siêu âm TK 211',
    category: 'clinic_finance',
    description: 'Bảng tính khấu hao tài sản cố định máy móc y tế theo đúng khung thời gian quy định tại Thông tư 45/2013/TT-BTC.',
    legalBasis: 'Thông tư 45/2013/TT-BTC Điều 4 & Khung thời gian khấu hao',
    content: `BẢNG TRÍCH KHẤU HAO TÀI SẢN CỐ ĐỊNH THIẾT BỊ Y TẾ
(Trung tâm Xét nghiệm - Phòng khám Hòa Đức)

| Mã TSCĐ | Tên thiết bị y tế | Ngày đưa vào SD | Nguyên giá (VND) | Thời gian KH (Năm) | Mức KH tháng (VND) | Lũy kế KH (VND) | Giá trị còn lại (VND) |
|---|---|---|---|---|---|---|---|
| TS-XN01 | Máy xét nghiệm sinh hóa tự động | 15/01/2024 | 1.850.000.000 | 7 năm (84 th) | 22.023.810 | [Lũy kế] | [Còn lại] |
| TS-SA02 | Máy siêu âm màu 4D chuyên tim | 20/03/2024 | 2.100.000.000 | 8 năm (96 th) | 21.875.000 | [Lũy kế] | [Còn lại] |
| TS-XQ03 | Máy X-quang kỹ thuật số DR | 10/05/2024 | 1.450.000.000 | 6 năm (72 th) | 20.138.889 | [Lũy kế] | [Còn lại] |

Hồ sơ đi kèm lưu trữ: Hóa đơn GTGT mua máy, Tờ khai hải quan nhập khẩu, Giấy phép lưu hành Bộ Y tế, Biên bản nghiệm thu bàn giao đưa vào sử dụng.`
  },
  {
    id: 'tpl-13',
    code: 'MẪU 13/RELATED-PARTY',
    title: 'Hồ sơ giải trình giao dịch liên kết TBYT Kiểu Việt - Hòa Đức',
    category: 'clinic_finance',
    description: 'Bản chứng minh nguyên tắc giá thị trường (Arm’s length) cho các hợp đồng cung cấp máy, hóa chất giữa Kiểu Việt và Hòa Đức.',
    legalBasis: 'Nghị định 132/2020/NĐ-CP Điều 18',
    content: `BÁO CÁO XÁC ĐỊNH GIÁ GIAO DỊCH LIÊN KẾT
(V/v Cung cấp thiết bị y tế & Dịch vụ kỹ thuật giữa Kiểu Việt và PK Hòa Đức)

1. Mối quan hệ liên kết:
Công ty Cổ phần Kiểu Việt và Công ty Cổ phần Dịch vụ Y tế Hòa Đức là các bên có quan hệ liên kết theo quy định tại Điểm g, h Khoản 2 Điều 5 Nghị định 132/2020/NĐ-CP.

2. Giao dịch phát sinh trong niên độ:
- Cung cấp hóa chất xét nghiệm và vật tư y tế: [Số tiền] VND
- Dịch vụ bảo trì, hiệu chuẩn định kỳ hệ thống máy: [Số tiền] VND
- Hợp đồng cho mượn/đặt máy xét nghiệm huyết học: Theo cơ chế đặt máy mua hóa chất

3. Phương pháp xác định giá:
- Áp dụng phương pháp so sánh tỷ suất lợi nhuận gộp trên giá vốn (Phương pháp giá vốn cộng lãi - Resale Price Method).
- Tỷ suất lợi nhuận gộp của giao dịch nội bộ đạt: 12% - 15%, tương đương với tỷ suất lợi nhuận cung cấp cho các Bệnh viện và Trung tâm y tế độc lập bên ngoài.
Kết luận: Giao dịch tuân thủ nguyên tắc độc lập (Arm’s length), không làm giảm nghĩa vụ thuế TNDN đối với ngân sách nhà nước.`
  },
  {
    id: 'tpl-14',
    code: 'MẪU 14/INCIDENT-RECALL',
    title: 'Biên bản xử lý sự cố y khoa & Niêm phong thiết bị y tế',
    category: 'technical',
    description: 'Mẫu biên bản niêm phong máy, dừng sử dụng khi có sự cố kỹ thuật hoặc nhận được thông báo thu hồi (Recall) của Bộ Y tế.',
    legalBasis: 'Điều 59 & 60 Nghị định 98/2021/NĐ-CP',
    content: `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
---
BIÊN BẢN PHONG TỎA & NIÊM PHONG THIẾT BỊ Y TẾ

Vào lúc [Giờ/Ngày], tại: [PHÒNG KHÁM ĐA KHOA HÒA ĐỨC]
Hội đồng gồm có:
1. Giám đốc chuyên môn Phòng khám: [Họ và tên]
2. Kỹ sư đại diện Công ty Kiểu Việt: [Họ và tên]
3. Cán bộ quản lý trang thiết bị: [Họ và tên]

Lý do niêm phong:
[ ] Nhận được Thông báo thu hồi số [Số CV] của Cục Cơ sở hạ tầng và Thiết bị y tế - Bộ Y tế đối với lô số [Số Lot].
[ ] Thiết bị phát sinh sự cố kỹ thuật bất thường, độ lệch kết quả chẩn đoán vượt ngưỡng an toàn.

Biện pháp xử lý ngay:
1. Dừng ngay lập tức việc sử dụng thiết bị đối với bệnh nhân.
2. Dán tem niêm phong niêm phong máy chính tại số Serial: [Serial].
3. Lập báo cáo gửi Sở Y tế trong vòng 24 giờ và thông báo cho hãng sản xuất để cử chuyên gia kiểm định lại.

CÁC BÊN ĐỒNG KÝ TÊN VÀ NIÊM PHONG`
  }
];