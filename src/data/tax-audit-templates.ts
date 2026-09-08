// Bộ Mẫu Biểu & Văn Bản Giải Trình Thực Chiến Tiếp Đoàn Kiểm Tra Thuế
// Doanh nghiệp: Công ty Cổ phần Kiểu Việt (Xây dựng & Khai thác Mỏ đá Gia Lai)

export interface AuditTemplate {
  id: string;
  code: string;
  title: string;
  category: string;
  targetRisk: string;
  legalBase: string;
  description: string;
  templateContent: string;
}

export const AUDIT_TEMPLATES: AuditTemplate[] = [
  {
    id: 'mau-01',
    code: 'MẪU 01/GT-DT',
    title: 'Bảng Giải Trình Đối Chiếu Chênh Lệch Doanh Thu GTGT vs Quyết Toán TNDN',
    category: 'Doanh thu & Thuế TNDN',
    targetRisk: 'Chênh lệch doanh thu giữa tờ khai 01/GTGT và chỉ tiêu [01] trên tờ khai 03/TNDN',
    legalBase: 'Điều 42 Luật Quản lý thuế 38/2019/QH14 & Thông tư 219/2013/TT-BTC',
    description: 'Đoàn kiểm tra luôn đối chiếu tổng doanh thu trên 4 quý/12 tháng thuế GTGT với doanh thu quyết toán TNDN. Mẫu này phân loại rõ các nguyên nhân chênh lệch hợp pháp.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./CV-KV/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BẢN GIẢI TRÌNH
V/v Đối chiếu chênh lệch Doanh thu kê khai thuế GTGT và Doanh thu tính thuế TNDN
Kỳ tính thuế năm: 202...

Kính gửi: Đoàn kiểm tra thuế theo Quyết định số: ......./QĐ-CT ngày ...../...../202... của Cục Thuế tỉnh Gia Lai.

Tên người nộp thuế: CÔNG TY CỔ PHẦN KIỂU VIỆT
Mã số thuế: 5901168128
Địa chỉ trụ sở: Tỉnh Gia Lai

Căn cứ hồ sơ khai thuế và sổ sách kế toán năm 202..., Công ty Cổ phần Kiểu Việt xin giải trình khoản chênh lệch giữa Doanh thu kê khai trên các tờ khai thuế GTGT và Doanh thu trên Tờ khai Quyết toán thuế TNDN như sau:

I. BẢNG TỔNG HỢP SỐ LIỆU:
1. Tổng doanh thu kê khai trên các Tờ khai thuế GTGT (Mẫu 01/GTGT) 04 quý: ......................... VNĐ
   - Quý 1: ......................... VNĐ
   - Quý 2: ......................... VNĐ
   - Quý 3: ......................... VNĐ
   - Quý 4: ......................... VNĐ
2. Tổng doanh thu phát sinh trên Báo cáo kết quả HĐKD (Mã số 01): ......................... VNĐ
3. Doanh thu tính thuế TNDN trên Tờ khai 03/TNDN (Chỉ tiêu [B1]): ......................... VNĐ
4. Số tiền chênh lệch (Mục 1 - Mục 3): ......................... VNĐ

II. CHI TIẾT NGUYÊN NHÂN CHÊNH LỆCH:
1. Doanh thu hoạt động tài chính (Lãi tiền gửi ngân hàng, cổ tức):
   - Số tiền: ......................... VNĐ
   - Giải trình: Thuộc đối tượng không chịu thuế GTGT nên không kê khai trên tờ khai GTGT, nhưng được ghi nhận vào doanh thu tài chính chịu thuế TNDN (TK 515).
2. Doanh thu khối lượng xây lắp nghiệm thu giai đoạn nhưng chưa xuất hóa đơn theo tiến độ:
   - Công trình: ................................................................
   - Biên bản nghiệm thu số: ......./BBNT ngày ...../...../202...
   - Số tiền: ......................... VNĐ
   - Giải trình: Theo Điểm a Khoản 2 Điều 16 Thông tư 219/2013/TT-BTC và Thông tư 99/2025/TT-BTC, thời điểm lập hóa đơn là thời điểm bàn giao, nghiệm thu.
3. Hàng hóa, khoáng sản điều chuyển nội bộ giữa mỏ đá và các công trường thi công:
   - Số tiền: ......................... VNĐ
   - Giải trình: Dùng phiếu xuất kho kiêm vận chuyển nội bộ, không phát sinh nghĩa vụ thuế GTGT đầu ra theo Khoản 4 Điều 7 Thông tư 219/2013/TT-BTC.
4. Giảm trừ doanh thu (Hàng bán trả lại, giảm giá đá xây dựng):
   - Số tiền: ......................... VNĐ (Hóa đơn điều chỉnh số: ............. ngày ...../...../202...)

III. KẾT LUẬN & CAM KẾT:
Công ty Cổ phần Kiểu Việt khẳng định toàn bộ số liệu trên sổ sách kế toán, hóa đơn chứng từ và tờ khai thuế là hoàn toàn trung thực, phản ánh đúng thực tế hoạt động sản xuất kinh doanh và tuân thủ đúng quy định pháp luật. Kính đề nghị Đoàn kiểm tra xem xét chấp thuận.

NGƯỜI LẬP BIỂU
(Ký, ghi rõ họ tên)
KẾ TOÁN TRƯỞNG
(Ký, ghi rõ họ tên)
NGƯỜI ĐẠI DIỆN THEO PHÁP LUẬT
(Ký tên, đóng dấu)`
  },
  {
    id: 'mau-02',
    code: 'MẪU 02/ĐM-NL',
    title: 'Quyết Định & Bản Giải Trình Định Mức Tiêu Hao Nhiên Liệu Máy Móc Mỏ Đá & Công Trường',
    category: 'Chi phí thuế TNDN & Khai thác Mỏ',
    targetRisk: 'Bị cơ quan thuế loại chi phí dầu DO, xăng xe ben, máy đào, máy nghiền đá do thiếu định mức',
    legalBase: 'Điều 4 Thông tư 96/2015/TT-BTC & Thông tư 45/2013/TT-BTC',
    description: 'Doanh nghiệp khai thác đá và xây dựng tiêu thụ lượng lớn nhiên liệu. Cơ quan thuế sẽ xuất toán nếu không có Quyết định ban hành định mức và nhật trình máy thi công.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./QĐ-KV/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày 02 tháng 01 năm 2026

QUYẾT ĐỊNH
V/v Ban hành định mức tiêu hao nhiên liệu, vật tư vận hành máy móc thiết bị thi công và xe cơ giới
Năm hoạt động: 2026

TỔNG GIÁM ĐỐC CÔNG TY CỔ PHẦN KIỂU VIỆT
- Căn cứ Luật Doanh nghiệp số 59/2020/QH14;
- Căn cứ Thông tư 96/2015/TT-BTC hướng dẫn thuế Thu nhập doanh nghiệp;
- Căn cứ đặc thù hoạt động khai thác mỏ đá và thi công công trình giao thông tại tỉnh Gia Lai;
- Xét đề nghị của Phòng Kỹ thuật vật tư và Phòng Tài chính - Kế toán,

QUYẾT ĐỊNH:

Điều 1: Ban hành kèm theo Quyết định này Bảng định mức tiêu hao nhiên liệu (Dầu Diesel DO 0.05S, Xăng Ron 95, Dầu nhờn) áp dụng cho các phương tiện, máy móc thiết bị thuộc sở hữu và thuê ngoài của Công ty Cổ phần Kiểu Việt trong năm 2026:

1. Máy đào xúc đá Komatsu PC450 / CAT 336 (Gầu 1.8 - 2.2 m3):
   - Chế độ xúc đất tầng phủ: 22.0 - 24.5 lít dầu DO / giờ hoạt động
   - Chế độ cạy bẩy, xúc đá nổ mìn tại moong: 26.0 - 29.5 lít dầu DO / giờ hoạt động
2. Dây chuyền trạm nghiền sàng đá liên hợp công suất 250 tấn/giờ:
   - Vận hành máy nghiền hàm sơ cấp + thứ cấp: 38.0 - 42.0 lít dầu DO / 100 m3 đá thành phẩm (hoặc KWh tương đương nếu chạy điện lưới)
3. Xe ô tô tải tự đổ (Xe ben Howo 3 chân, 4 chân chở đá mỏ):
   - Cung đường đèo dốc mỏ đá: 42.0 - 48.0 lít dầu DO / 100 km (chở đủ tải)
   - Cung đường quốc lộ/tỉnh lộ vận chuyển đá đến công trình: 34.0 - 38.0 lít DO / 100 km
4. Máy khoan đá tự hành Furukawa:
   - 18.0 - 21.0 lít dầu DO / giờ hoạt động

Điều 2: Nguyên tắc quản lý và thanh quyết toán chi phí nhiên liệu:
- Mọi máy móc hoạt động phải mở "Sổ nhật trình máy thi công" ghi rõ: Ngày tháng, số giờ chạy máy (hoặc số km theo đồng hồ), khối lượng công việc thực hiện, chữ ký của Thợ vận hành và Đội trưởng công trường.
- Hóa đơn mua nhiên liệu đầu vào phải xuất đúng tên, MST Công ty Kiểu Việt, kèm phiếu xuất kho và biên bản giao nhận nhiên liệu tại bồn chứa mỏ đá.
- Cuối mỗi tháng, Phòng Kỹ thuật đối chiếu số giờ thực tế với định mức quy định. Phần nhiên liệu vượt định mức do lỗi chủ quan sẽ trừ trách nhiệm cá nhân; phần biến động do điều kiện địa chất đá quá cứng hoặc thời tiết mưa bão phải có Biên bản xác nhận hiện trường.

Điều 3: Phòng Kế toán căn cứ Quyết định này và Nhật trình máy thi công để hạch toán chi phí được trừ khi tính thuế TNDN hợp pháp theo Điều 4 Thông tư 96/2015/TT-BTC.

Nơi nhận:
- Như Điều 3;
- Lưu: VT, KT.
TỔNG GIÁM ĐỐC
(Ký tên, đóng dấu)`
  },
  {
    id: 'mau-03',
    code: 'MẪU 03/TT-335',
    title: 'Bảng Giải Trình Chi Phí Trích Trước Giá Vốn Công Trình Xây Dựng (Tài Khoản 335)',
    category: 'Kế toán & Thuế TNDN',
    targetRisk: 'Bị cơ quan thuế bóc tách chi phí trích trước giá vốn công trình dở dang chưa có hóa đơn',
    legalBase: 'Điều 4 Thông tư 96/2015/TT-BTC (Khoản 2.20) & VAS 14 Doanh thu',
    description: 'Khi nghiệm thu bàn giao hạng mục công trình ghi nhận doanh thu nhưng một số chi phí thầu phụ, vật tư chưa có hóa đơn, kế toán phải lập hồ sơ trích trước theo đúng dự toán.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./GT-KV/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BẢN GIẢI TRÌNH CHI PHÍ TRÍCH TRƯỚC GIÁ VỐN CÔNG TRÌNH
Phục vụ quyết toán thuế TNDN năm: 202...
(Căn cứ Khoản 2.20 Điều 4 Thông tư 96/2015/TT-BTC)

Kính gửi: Đoàn kiểm tra thuế - Cục Thuế tỉnh Gia Lai.

Công ty Cổ phần Kiểu Việt xin báo cáo và giải trình về các khoản chi phí trích trước vào giá vốn kinh doanh (Tài khoản 335) tương ứng với doanh thu đã ghi nhận trong kỳ:

I. NGUYÊN TẮC ÁP DỤNG:
Công ty hoạt động trong lĩnh vực xây lắp công trình. Trong năm, công ty đã bàn giao và ghi nhận doanh thu các hạng mục công trình theo Biên bản nghiệm thu A-B và đã xuất hóa đơn GTGT. Để đảm bảo nguyên tắc phù hợp giữa doanh thu và chi phí (Chuẩn mực Kế toán VAS 01 & Thông tư 99/2025/TT-BTC), công ty thực hiện trích trước chi phí giá vốn theo Dự toán đã được phê duyệt.

II. BẢNG KÊ CHI TIẾT TRÍCH TRƯỚC THEO TỪNG CÔNG TRÌNH:
1. Công trình: Xây dựng tuyến đường giao thông ....................................
   - Hợp đồng số: ......./HĐXD ngày ...../...../202...
   - Doanh thu đã nghiệm thu xuất HĐ trong năm: ......................... VNĐ (Hóa đơn số: ............)
   - Chi phí thực tế đã có chứng từ đầy đủ: ......................... VNĐ
   - Số chi phí trích trước (TK 335): ......................... VNĐ
   - Chi tiết nội dung trích trước:
     + Chi phí thầu phụ thi công rải thảm bê tông nhựa: ......................... VNĐ
     + Chi phí hoàn trả mặt bằng và dọn dẹp vệ sinh: ......................... VNĐ
   - Căn cứ dự toán công trình: Quyết định phê duyệt dự toán số: ......./QĐ ngày ...../...../202...

III. TÌNH HÌNH QUYẾT TOÁN VÀ HÓA ĐƠN THỰC TẾ:
Căn cứ Khoản 2.20 Điều 4 Thông tư 96/2015/TT-BTC: "Doanh nghiệp được trích trước vào chi phí được trừ tương ứng với doanh thu đã tính thuế TNDN khi nghiệm thu bàn giao... Khi kết thúc hợp đồng, nếu chi phí thực tế phát sinh lớn hơn số đã trích thì được tính bổ sung; nếu nhỏ hơn thì hạch toán giảm chi phí".
- Toàn bộ các khoản trích trước trên đã được nhà thầu phụ xuất hóa đơn chính thức vào tháng ...../202... (đính kèm bản sao hóa đơn số ............).
- Chênh lệch giữa số trích trước và chi phí thực tế đã được công ty hoàn nhập điều chỉnh vào kỳ tính thuế tiếp theo đúng quy định.

Kính trình Đoàn kiểm tra xem xét ghi nhận chi phí hợp lệ.

KẾ TOÁN TRƯỞNG
(Ký, ghi rõ họ tên)
TỔNG GIÁM ĐỐC
(Ký tên, đóng dấu)`
  },
  {
    id: 'mau-04',
    code: 'MẪU 04/NC-TV',
    title: 'Hồ Sơ & Bản Giải Trình Chi Phí Nhân Công Thời Vụ Công Trường (Cam Kết 08/CK-TNCN)',
    category: 'Thuế TNCN & Tiền lương',
    targetRisk: 'Bị truy thu 10% thuế TNCN và phạt chậm nộp với lao động công trường không đóng BHXH',
    legalBase: 'Điều 25 Thông tư 111/2013/TT-BTC & Thông tư 96/2015/TT-BTC',
    description: 'Công nhân xây dựng và khai thác đá thời vụ nếu không khấu trừ 10% bắt buộc phải có bản Cam kết 08 (thay thế Mẫu 02 cũ), CCCD gắn chip và bảng chấm công thực tế.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./GT-NC/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BẢN GIẢI TRÌNH
V/v Chi phí nhân công thuê ngoài và Khấu trừ thuế TNCN lao động thời vụ
Kỳ kiểm tra: Năm 202...

Kính gửi: Đoàn kiểm tra thuế - Cục Thuế tỉnh Gia Lai.

Công ty Cổ phần Kiểu Việt xin giải trình về các khoản chi phí nhân công thuê ngoài phục vụ thi công công trình và bốc dỡ đá tại mỏ đá như sau:

I. ĐẶC THÙ SỬ DỤNG LAO ĐỘNG:
Các công trình xây dựng đường giao thông và khai thác đá có tính chất thời vụ, địa bàn phân tán tại các huyện thuộc tỉnh Gia Lai. Đối với các công việc giản đơn (bốc xếp, đào rãnh taluy, san gạt thủ công), Công ty ký Hợp đồng giao khoán công việc / Hợp đồng lao động dưới 03 tháng với lao động địa phương.

II. HỒ SƠ CHỨNG MINH CHI PHÍ ĐƯỢC TRỪ VÀ MIỄN KHẤU TRỪ 10% TNCN:
Công ty đã lập và lưu trữ đầy đủ hồ sơ theo quy định tại Điểm i Khoản 1 Điều 25 Thông tư 111/2013/TT-BTC và Thông tư 96/2015/TT-BTC bao gồm:
1. Hợp đồng giao khoán công việc / Hợp đồng thời vụ có chữ ký trực tiếp của từng người lao động.
2. Bản sao Căn cước công dân (CCCD) gắn chip còn hiệu lực của 100% lao động trong danh sách.
3. Bảng chấm công hàng ngày có xác nhận của Chỉ huy trưởng công trình / Quản lý mỏ đá.
4. Bảng thanh toán tiền công có chữ ký nhận tiền mặt của từng người lao động (kèm chứng từ xuất quỹ tiền mặt hoặc ủy nhiệm chi trả qua tài khoản cá nhân).
5. Bản cam kết thu nhập chưa đến mức nộp thuế TNCN (Mẫu 08/CK-TNCN theo Thông tư 80/2021/TT-BTC):
   - 100% các cá nhân làm cam kết đều có Mã số thuế cá nhân đã đăng ký trước thời điểm cam kết.
   - Ước tính tổng thu nhập trong năm dương lịch của người lao động chưa đến mức phải nộp thuế (dưới 132 triệu đồng/năm đối với cá nhân không có người phụ thuộc).

III. CAM ĐOAN:
Công ty Kiểu Việt khẳng định toàn bộ nhân công kê khai là có thực tế làm việc tại hiện trường công trình của Công ty, không có hiện tượng mượn CCCD hay ký khống chứng từ. Hồ sơ gốc được lưu trữ đầy đủ và sẵn sàng xuất trình đối chiếu.

KẾ TOÁN PHỤ TRÁCH LƯƠNG
(Ký, ghi rõ họ tên)
KẾ TOÁN TRƯỞNG
(Ký, ghi rõ họ tên)
ĐẠI DIỆN DOANH NGHIỆP
(Ký tên, đóng dấu)`
  },
  {
    id: 'mau-05',
    code: 'MẪU 05/VL-TT80',
    title: 'Bảng Kê Đối Chiếu Phân Bổ Thuế GTGT & TNDN Vãng Lai 1% Ngoại Tỉnh',
    category: 'Thuế GTGT & Quản lý Thuế',
    targetRisk: 'Bị truy thu thuế GTGT/TNDN vãng lai hoặc trùng lặp số thuế đã nộp giữa trụ sở và địa phương',
    legalBase: 'Điều 12 & Điều 13 Thông tư 80/2021/TT-BTC',
    description: 'Kiểu Việt thi công công trình tại các tỉnh lân cận (Kon Tum, Đắk Lắk, Bình Định...). Mẫu này tổng hợp chứng từ nộp 1% tại Kho bạc để bù trừ nghĩa vụ thuế tại Gia Lai.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./VL-KV/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BẢNG TỔNG HỢP ĐỐI CHIẾU NGHĨA VỤ THUẾ VÃNG LAI ĐÃ NỘP TẠI CÁC TỈNH
Áp dụng theo quy định tại Điều 12, Điều 13 Thông tư 80/2021/TT-BTC
Năm tính thuế: 202...

Kính gửi: Đoàn kiểm tra thuế - Cục Thuế tỉnh Gia Lai.

Công ty Cổ phần Kiểu Việt (MST: 5901168128, trụ sở tại Gia Lai) báo cáo số liệu phân bổ và nộp thuế xây dựng vãng lai ngoại tỉnh như sau:

I. DANH SÁCH CÔNG TRÌNH XÂY LẮP NGOẠI TỈNH:
1. Công trình A (Tại tỉnh Kon Tum):
   - Chủ đầu tư: ................................................................
   - Hợp đồng xây lắp số: ......./HĐ-XD ngày ...../...../202...
   - Giá trị nghiệm thu thanh toán chưa thuế trong năm: ......................... VNĐ
   - Thuế GTGT vãng lai 1% phải nộp tại Kon Tum: ......................... VNĐ
   - Chứng từ nộp thuế vào KBNN Kon Tum: Giấy nộp tiền số ............ ngày ...../...../202...
2. Công trình B (Tại tỉnh Đắk Lắk):
   - Chủ đầu tư: ................................................................
   - Hợp đồng xây lắp số: ......./HĐ-XD ngày ...../...../202...
   - Giá trị nghiệm thu thanh toán chưa thuế trong năm: ......................... VNĐ
   - Thuế GTGT vãng lai 1% phải nộp tại Đắk Lắk: ......................... VNĐ
   - Chứng từ nộp thuế vào KBNN Đắk Lắk: Giấy nộp tiền số ............ ngày ...../...../202...

II. ĐỐI CHIẾU VỚI TỜ KHAI TẠI TRỤ SỞ CHÍNH GIA LAI:
- Tổng số thuế GTGT vãng lai 1% đã nộp tại các tỉnh: ......................... VNĐ
- Số thuế đã kê khai bù trừ vào Chỉ tiêu [39] (Thuế GTGT đã nộp tại địa phương vãng lai) trên Tờ khai 01/GTGT tại Cục Thuế tỉnh Gia Lai: ......................... VNĐ
- Đối chiếu: Khớp đúng 100% giữa Giấy nộp tiền ngân sách nhà nước và số liệu khai khấu trừ.

(Kèm theo: Bản sao công chứng toàn bộ Giấy nộp tiền vào NSNN tại các Kho bạc tỉnh bạn).

NGƯỜI LẬP BIỂU
(Ký, ghi rõ họ tên)
KẾ TOÁN TRƯỞNG
(Ký, ghi rõ họ tên)
TỔNG GIÁM ĐỐC
(Ký tên, đóng dấu)`
  },
  {
    id: 'mau-06',
    code: 'MẪU 06/KS-GL',
    title: 'Báo Cáo Sản Lượng Đá Khai Thác Thực Tế & Hao Hụt Kỹ Thuật Mỏ Đá Gia Lai',
    category: 'Thuế Tài nguyên & Phí BVMT',
    targetRisk: 'Bị cơ quan thuế ấn định sản lượng khai thác đá do nghi ngờ chênh lệch giữa khối lượng mìn nổ và đá xuất bán',
    legalBase: 'QĐ 87/2025/QĐ-UBND Gia Lai, Thông tư 152/2015/TT-BTC & NĐ 27/2023/NĐ-CP',
    description: 'Đặc thù ngành mỏ đá: Đoàn kiểm tra thuế luôn đối chiếu Hộ chiếu nổ mìn, khối lượng đất bóc tầng phủ và sản lượng đá nguyên khai kê khai nộp thuế tài nguyên.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./BC-MỎ/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BÁO CÁO GIẢI TRÌNH
V/v Đối chiếu Sản lượng khai thác khoáng sản thực tế, Tỷ lệ hao hụt kỹ thuật và Nghĩa vụ thuế Tài nguyên, Phí BVMT mỏ đá
Kỳ kiểm tra: Năm 202...

Kính gửi: Đoàn kiểm tra thuế - Cục Thuế tỉnh Gia Lai.

Công ty Cổ phần Kiểu Việt báo cáo chi tiết về quy trình khai thác, chế biến đá và kê khai thuế tài nguyên, phí BVMT tại Mỏ đá ......................... (Tỉnh Gia Lai) như sau:

I. CĂN CỨ PHÁP LÝ & GIẤY PHÉP:
- Giấy phép khai thác khoáng sản số: ......./GP-UBND ngày ...../...../202... do UBND tỉnh Gia Lai cấp.
- Quyết định số 87/2025/QĐ-UBND ngày 28/11/2025 của UBND tỉnh Gia Lai ban hành Bảng giá tính thuế tài nguyên trên địa bàn tỉnh Gia Lai.
- Thông tư 152/2015/TT-BTC của Bộ Tài chính hướng dẫn thuế Tài nguyên.
- Nghị định 27/2023/NĐ-CP của Chính phủ quy định phí bảo vệ môi trường đối với khai thác khoáng sản.

II. BẢNG CÂN ĐỐI SẢN LƯỢNG KHAI THÁC & THÀNH PHẨM (M3):
1. Khối lượng thuốc nổ sử dụng theo Hộ chiếu nổ mìn: ......................... kg
2. Hệ số nổ mìn kỹ thuật: ......................... kg thuốc nổ / m3 đá nguyên khai
3. Sản lượng đá nguyên khai nổ mìn đo đạc tại moong khai thác: ......................... m3
4. Khối lượng đá đưa vào dây chuyền trạm nghiền sàng: ......................... m3
5. Sản lượng đá thành phẩm thu hồi qua trạm nghiền:
   - Đá 1x2 (Đá bê tông): ......................... m3
   - Đá 2x4 (Đá công trình): ......................... m3
   - Đá 4x6 (Đá móng): ......................... m3
   - Đá mi sàng / mi bụi: ......................... m3
   - Đất phong hóa bóc phủ / đá thải loại: ......................... m3
6. Tỷ lệ hao hụt kỹ thuật trong quá trình nghiền sàng, vận chuyển: ........... % (Phù hợp với Thiết kế mỏ đã được Sở TN&MT / Sở Xây dựng phê duyệt).

III. ĐỐI CHIẾU NGHĨA VỤ THUẾ ĐÃ KÊ KHAI & NỘP:
1. Thuế tài nguyên (Mẫu 01/TAIN):
   - Đã áp dụng đúng mức giá theo Quyết định số 87/2025/QĐ-UBND Gia Lai cho từng chủng loại đá thành phẩm.
   - Tổng số thuế tài nguyên phát sinh trong năm: ......................... VNĐ
   - Đã nộp NSNN: ......................... VNĐ (Khớp 100% với giấy nộp tiền).
2. Phí bảo vệ môi trường (NĐ 27/2023/NĐ-CP):
   - Áp dụng mức phí: Đá xây dựng = ........... đồng/m3 đá nguyên khai.
   - Tổng số phí BVMT đã kê khai và nộp đủ: ......................... VNĐ.
3. Tiền cấp quyền khai thác khoáng sản (NĐ 67/2019/NĐ-CP):
   - Đã nộp thông báo kỳ 1 và kỳ 2 đúng hạn: ......................... VNĐ.

GIÁM ĐỐC ĐIỀU HÀNH MỎ
(Ký, ghi rõ họ tên)
KẾ TOÁN TRƯỞNG
(Ký, ghi rõ họ tên)
TỔNG GIÁM ĐỐC
(Ký tên, đóng dấu)`
  }
];
