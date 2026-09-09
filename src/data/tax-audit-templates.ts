// Bộ Mẫu Biểu & Văn Bản Giải Trình Thực Chiến Tiếp Đoàn Kiểm Tra Thuế
// Doanh nghiệp: CÔNG TY CỔ PHẦN KIỂU VIỆT (Nội Thất — Vật Liệu Xây Dựng — Thi Công Xây Lắp)
// Website: kieuviet.com.vn | Slogan: "Xây bền vững - Dựng tương lai"

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
    targetRisk: 'Chênh lệch doanh thu giữa tờ khai 01/GTGT và chỉ tiêu [01] trên tờ khai 03/TNDN qua các mảng Nội thất, VLXD Bê tông và Xây lắp',
    legalBase: 'Điều 42 Luật Quản lý thuế 38/2019/QH14 & Thông tư 219/2013/TT-BTC',
    description: 'Đoàn kiểm tra đối chiếu doanh thu kê khai GTGT với doanh thu quyết toán TNDN. Mẫu phân tách rõ các đặc thù: bàn giao đồ gỗ nội thất kèm lắp đặt, xuất bán bê tông thương phẩm theo phiếu giao hàng, và nghiệm thu công trình xây dựng A-B.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./CV-KV/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BẢN GIẢI TRÌNH
V/v Đối chiếu chênh lệch Doanh thu kê khai thuế GTGT và Doanh thu tính thuế TNDN
Kỳ tính thuế năm: 202...

Kính gửi: Đoàn kiểm tra thuế theo Quyết định số: ......./QĐ-CT của Cục Thuế.

Tên người nộp thuế: CÔNG TY CỔ PHẦN KIỂU VIỆT
Mã số thuế: 5901168128 (Đăng ký hoạt động: Nội thất, Vật liệu xây dựng & Thi công xây dựng)
Trụ sở & Chi nhánh: Lô 01 Võ Duy Dương, TP. Quy Nhơn & 04 Quang Trung, TP. Pleiku, Gia Lai.

Căn cứ hồ sơ khai thuế và sổ sách kế toán năm 202..., Công ty Cổ phần Kiểu Việt xin giải trình khoản chênh lệch giữa Doanh thu kê khai trên các tờ khai thuế GTGT và Doanh thu trên Tờ khai Quyết toán thuế TNDN như sau:

I. BẢNG TỔNG HỢP SỐ LIỆU:
1. Tổng doanh thu kê khai trên các Tờ khai thuế GTGT (Mẫu 01/GTGT) 04 quý: ......................... VNĐ
   - Mảng Sản xuất & Cung cấp Nội thất gỗ, Thiết bị giáo dục: ......................... VNĐ
   - Mảng Sản xuất & Bán Bê tông thương phẩm, Cấu kiện đúc sẵn (cống, bó vỉa, gạch): ......................... VNĐ
   - Mảng Thi công xây lắp công trình (Hải quan, HĐND, QL19 Becamex...): ......................... VNĐ
2. Tổng doanh thu phát sinh trên Báo cáo kết quả HĐKD (Mã số 01): ......................... VNĐ
3. Doanh thu tính thuế TNDN trên Tờ khai 03/TNDN (Chỉ tiêu [B1]): ......................... VNĐ
4. Số tiền chênh lệch (Mục 1 - Mục 3): ......................... VNĐ

II. CHI TIẾT NGUYÊN NHÂN CHÊNH LỆCH THEO ĐẶC THÙ NGÀNH:
1. Hợp đồng sản xuất, cung cấp và lắp đặt hoàn thiện đồ gỗ Nội thất phòng làm việc, hội trường:
   - Các hợp đồng đã bàn giao đồ gỗ tại chân công trình nhưng chưa hoàn tất biên bản nghiệm thu lắp đặt tổng thể. Theo chuẩn mực kế toán VAS 14 và TT 99/2025/TT-BTC, doanh thu được ghi nhận khi chuyển giao phần lớn rủi ro và lợi ích.
2. Cung cấp Bê tông thương phẩm và Cấu kiện đúc sẵn dở dang theo công trình:
   - Khối lượng bê tông thương phẩm đã đổ theo phiếu giao nhận tại công trường nhưng hai bên chốt khối lượng thanh toán vào ngày đầu tháng sau (lệch kỳ kê khai GTGT cuối tháng).
3. Doanh thu hoạt động tài chính (Lãi tiền gửi ngân hàng, cổ tức):
   - Số tiền: ......................... VNĐ (Hạch toán TK 515, không chịu thuế GTGT nhưng chịu thuế TNDN).
4. Hàng hóa, vật tư, cấu kiện điều chuyển nội bộ giữa Nhà máy VLXD và các công trường thi công:
   - Dùng phiếu xuất kho kiêm vận chuyển nội bộ theo Khoản 4 Điều 7 Thông tư 219/2013/TT-BTC.

III. KẾT LUẬN & CAM KẾT:
Công ty Cổ phần Kiểu Việt khẳng định toàn bộ số liệu trên sổ sách kế toán, hóa đơn chứng từ và tờ khai thuế là hoàn toàn trung thực, phản ánh đúng thực tế hoạt động. Kính đề nghị Đoàn kiểm tra xem xét chấp thuận.

NGƯỜI LẬP BIỂU               KẾ TOÁN TRƯỞNG               TỔNG GIÁM ĐỐC
(Ký, ghi rõ họ tên)          (Ký, ghi rõ họ tên)          (Ký tên, đóng dấu)`
  },
  {
    id: 'mau-02',
    code: 'MẪU 02/ĐM-KT',
    title: 'Quyết Định Ban Hành Định Mức Tiêu Hao Vật Tư Nội Thất, Bê Tông & Nhiên Liệu Cơ Giới',
    category: 'Chi phí thuế TNDN & Sản xuất',
    targetRisk: 'Bị cơ quan thuế xuất toán chi phí gỗ, sơn PU, xi măng bê tông và dầu DO máy móc vì thiếu định mức',
    legalBase: 'Điều 4 Thông tư 96/2015/TT-BTC & Thông tư 45/2013/TT-BTC',
    description: 'Quyết định định mức nội bộ tích hợp 3 phân xưởng cốt lõi: Phân xưởng Chế biến gỗ Nội thất Phú Tài, Phân xưởng Bê tông thương phẩm & Cấu kiện VLXD, và Đội xe máy thi công xây lắp.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./QĐ-KV/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày 02 tháng 01 năm 2026

QUYẾT ĐỊNH
V/v Ban hành định mức tiêu hao nguyên vật liệu sản xuất nội thất, cấp phối bê tông và nhiên liệu thi công
Năm hoạt động: 2026

TỔNG GIÁM ĐỐC CÔNG TY CỔ PHẦN KIỂU VIỆT
- Căn cứ Luật Doanh nghiệp số 59/2020/QH14;
- Căn cứ Thông tư 96/2015/TT-BTC hướng dẫn thuế Thu nhập doanh nghiệp;
- Căn cứ quy chuẩn kỹ thuật sản xuất đồ gỗ nội thất, tiêu chuẩn TCVN cấp phối bê tông và thiết bị thi công;
- Xét đề nghị của Giám đốc Nhà máy Nội thất, Giám đốc Nhà máy VLXD và Phòng Kế toán,

QUYẾT ĐỊNH:

Điều 1: Ban hành Bảng định mức tiêu hao kỹ thuật nội bộ năm 2026 áp dụng cho toàn hệ thống Kiểu Việt:

PHẦN I: ĐỊNH MỨC NGUYÊN VẬT LIỆU SẢN XUẤT ĐỒ GỖ NỘI THẤT (Nhà máy Phú Tài):
1. Bàn ghế hội trường, ghế chủ trì đại biểu (gỗ tự nhiên xẻ sấy):
   - Định mức phôi gỗ tinh chế: 1.25 - 1.35 m3 gỗ xẻ / 1.0 m3 sản phẩm mộc hoàn thiện (Tỷ lệ hao hụt phôi cưa xẻ: 20 - 25%).
   - Tỷ lệ thu hồi phế liệu (mùn cưa, dăm gỗ, đầu mẩu): 15 - 18% (hạch toán nhập kho phế liệu TK 152 hoặc xuất bán phế liệu ghi nhận TK 711).
2. Định mức sơn PU bóng và sơn lót hoàn thiện bề mặt gỗ:
   - Sơn lót Polyurethane (PU): 0.18 - 0.22 kg / m2 bề mặt hoàn thiện.
   - Sơn bóng PU & Dung môi pha sơn (Thinner): 0.15 - 0.18 kg / m2 bề mặt.

PHẦN II: ĐỊNH MỨC CẤP PHỐI TRẠM TRỘN BÊ TÔNG THƯƠNG PHẨM & CẤU KIỆN VLXD:
1. Cấp phối Bê tông thương phẩm M250 (đá 1x2, độ sụt 12±2):
   - Xi măng PCB40: 345 kg/m3 | Cát vàng: 0.52 m3 | Đá 1x2: 0.85 m3 | Phụ gia hóa dẻo: 2.8 lít.
2. Cấp phối Bê tông thương phẩm M300 (đá 1x2, độ sụt 14±2):
   - Xi măng PCB40: 385 kg/m3 | Cát vàng: 0.49 m3 | Đá 1x2: 0.84 m3 | Phụ gia siêu dẻo: 3.2 lít.
3. Hao hụt vận chuyển xe bồn trộn và bơm bê tông:
   - Hao hụt đổ tại công trường, bám dính bồn trộn, rửa máng: Tối đa 1.5 - 2.0% khối lượng xuất trạm.

PHẦN III: ĐỊNH MỨC NHIÊN LIỆU DẦU DIESEL (DO) MÁY THI CÔNG & VẬN TẢI:
1. Máy ép cọc cừ Larsen / Máy đóng búa rung thi công cọc kè: 14.0 - 16.5 lít DO / giờ thi công.
2. Xe bồn vận chuyển bê tông thương phẩm (dung tích 10-12 m3): 38.0 - 44.0 lít DO / 100 km (bao gồm quay bồn bảo dưỡng bê tông).
3. Xe máy đào xúc cát đá, máy nghiền sàng khoáng sản: Theo nhật trình máy được nghiệm thu ca máy.

Điều 2: Nguyên tắc quản lý và thanh quyết toán chi phí:
- Mỗi đơn hàng sản xuất nội thất phải có Lệnh sản xuất, Bảng tính giá thành sản phẩm theo đơn (TK 154).
- Mỗi mẻ trộn bê tông thương phẩm phải có Phiếu giao hàng in từ cân điện tử tự động của trạm trộn.
- Chi phí tiêu hao trong phạm vi định mức được tính vào chi phí được trừ khi tính thuế TNDN hợp pháp theo Điều 4 Thông tư 96/2015/TT-BTC.

TỔNG GIÁM ĐỐC
(Ký tên, đóng dấu)`
  },
  {
    id: 'mau-03',
    code: 'MẪU 03/TT-335',
    title: 'Bảng Giải Trình Chi Phí Trích Trước Giá Vốn Công Trình & Dự Án Nội Thất (TK 335)',
    category: 'Kế toán & Thuế TNDN',
    targetRisk: 'Bị cơ quan thuế bóc tách chi phí trích trước giá vốn công trình hoàn thành bàn giao chưa có hóa đơn',
    legalBase: 'Điều 4 Thông tư 96/2015/TT-BTC (Khoản 2.20) & VAS 14 Doanh thu',
    description: 'Áp dụng cho các công trình thi công hạ tầng (Hải quan Bình Định, HĐND Gia Lai...) và gói thầu cung cấp lắp đặt nội thất trọn gói đã nghiệm thu bàn giao đưa vào sử dụng trong năm nhưng một số nhà thầu phụ, nhà cung ứng phụ kiện chưa xuất kịp hóa đơn.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./GT-KV/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BẢN GIẢI TRÌNH CHI PHÍ TRÍCH TRƯỚC GIÁ VỐN
Phục vụ quyết toán thuế TNDN năm: 202...
(Căn cứ Khoản 2.20 Điều 4 Thông tư 96/2015/TT-BTC)

Kính gửi: Đoàn kiểm tra thuế.

Công ty Cổ phần Kiểu Việt báo cáo chi tiết về các khoản chi phí trích trước vào giá vốn kinh doanh (Tài khoản 335) tương ứng với doanh thu đã ghi nhận trong năm tài chính:

I. NGUYÊN TẮC ÁP DỤNG:
Công ty đã bàn giao và ghi nhận doanh thu các hạng mục công trình xây lắp và hợp đồng cung cấp lắp đặt nội thất theo Biên bản nghiệm thu A-B và đã xuất hóa đơn GTGT. Căn cứ nguyên tắc phù hợp giữa doanh thu và chi phí (VAS 01, VAS 14, TT 99/2025/TT-BTC), công ty trích trước chi phí giá vốn theo Dự toán đã duyệt.

II. BẢNG KÊ CHI TIẾT THEO CÔNG TRÌNH VÀ HỢP ĐỒNG:
1. Dự án: Cung cấp và lắp đặt nội thất phòng họp, hội trường cơ quan:
   - Biên bản bàn giao đưa vào sử dụng ngày: ...../...../202...
   - Doanh thu đã xuất hóa đơn: ......................... VNĐ
   - Số chi phí trích trước (TK 335): ......................... VNĐ (Chi phí thuê thợ mộc lắp đặt hoàn thiện và phụ kiện kim khí của nhà cung ứng).
2. Công trình: Thi công xây lắp hạ tầng công trình:
   - Doanh thu đã nghiệm thu A-B trong năm: ......................... VNĐ
   - Số chi phí trích trước (TK 335): ......................... VNĐ (Chi phí thảm bê tông nhựa, hoàn trả mặt bằng theo dự toán).

III. TÌNH HÌNH HÓA ĐƠN THỰC TẾ & HOÀN NHẬP:
- Đến thời điểm kiểm tra, các nhà cung ứng đã xuất đầy đủ hóa đơn GTGT chính thức vào quý 1 năm sau.
- Chênh lệch thừa/thiếu đã được hạch toán điều chỉnh vào chi phí kỳ sau theo đúng quy định.

KẾ TOÁN TRƯỞNG               TỔNG GIÁM ĐỐC
(Ký, ghi rõ họ tên)          (Ký tên, đóng dấu)`
  },
  {
    id: 'mau-04',
    code: 'MẪU 04/NC-TV',
    title: 'Hồ Sơ & Bản Giải Trình Chi Phí Nhân Công Thời Vụ Phân Xưởng & Công Trường (Cam Kết 08)',
    category: 'Thuế TNCN & Tiền lương',
    targetRisk: 'Bị truy thu 10% thuế TNCN thợ mộc gia công gỗ, nhân công trạm trộn bê tông, thợ ép cừ Larsen',
    legalBase: 'Điều 25 Thông tư 111/2013/TT-BTC & Thông tư 80/2021/TT-BTC',
    description: 'Bảo vệ chi phí tiền lương thợ mộc xưởng gỗ, nhân công đổ bê tông và thi công công trình không bị xuất toán chi phí và không bị truy thu thuế TNCN 10%.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./GT-NC/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BẢN GIẢI TRÌNH
V/v Chi phí nhân công thời vụ và Hồ sơ khấu trừ thuế TNCN
Kỳ kiểm tra: Năm 202...

Kính gửi: Đoàn kiểm tra thuế.

Công ty Cổ phần Kiểu Việt giải trình về chi phí nhân công thuê ngoài tại Nhà máy Nội thất Phú Tài, Nhà máy VLXD và các công trường thi công:

I. ĐẶC THÙ LAO ĐỘNG SẢN XUẤT KIỂU VIỆT:
- Phân xưởng Nội thất gỗ: Vào các mùa cao điểm hoàn thiện hội trường, trường học, công ty thuê thêm thợ mộc, thợ sơn đánh vẹc-ni theo sản phẩm/thời vụ dưới 3 tháng.
- Nhà máy VLXD & Bê tông: Thuê nhân công bốc xếp gạch không nung, cống bê tông, hỗ trợ xe bồn bơm bê tông.
- Công trường: Thuê nhân công địa phương đào đắp taluy, phụ ép cừ Larsen.

II. HỒ SƠ CHỨNG MINH CHI PHÍ HỢP LỆ VÀ MIỄN KHẤU TRỪ 10% TNCN:
1. Hợp đồng giao khoán công việc / Hợp đồng lao động dưới 3 tháng có chữ ký người lao động.
2. Bản sao CCCD gắn chip của từng lao động còn hạn sử dụng.
3. Bảng chấm công, bảng theo dõi sản phẩm hoàn thành có xác nhận Quản đốc xưởng/Chỉ huy trưởng.
4. Bảng thanh toán tiền lương có chữ ký nhận tiền mặt hoặc sao kê tài khoản ngân hàng.
5. Bản cam kết Mẫu 08/CK-TNCN theo Thông tư 80/2021/TT-BTC: 100% cá nhân có MST cá nhân tại thời điểm làm cam kết và ước tính tổng thu nhập trong năm chưa đến mức nộp thuế.

KẾ TOÁN PHỤ TRÁCH LƯƠNG      KẾ TOÁN TRƯỞNG               ĐẠI DIỆN DOANH NGHIỆP
(Ký, ghi rõ họ tên)          (Ký, ghi rõ họ tên)          (Ký tên, đóng dấu)`
  },
  {
    id: 'mau-05',
    code: 'MẪU 05/VL-TT80',
    title: 'Bảng Kê Đối Chiếu Phân Bổ Thuế GTGT & TNDN Vãng Lai 1% Ngoại Tỉnh (TT 80/2021)',
    category: 'Thuế GTGT & Quản lý Thuế',
    targetRisk: 'Bị truy thu thuế GTGT/TNDN vãng lai hoặc trùng lặp số thuế đã nộp giữa Bình Định, Gia Lai, Phú Yên...',
    legalBase: 'Điều 12 & Điều 13 Thông tư 80/2021/TT-BTC',
    description: 'Kiểu Việt thi công xây lắp và cung cấp lắp đặt nội thất tại các tỉnh (Bình Định, Gia Lai, Phú Yên, Kon Tum...). Mẫu tổng hợp chứng từ nộp 1% tại Kho bạc để bù trừ nghĩa vụ thuế tại trụ sở.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./VL-KV/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BẢNG TỔNG HỢP ĐỐI CHIẾU NGHĨA VỤ THUẾ VÃNG LAI ĐÃ NỘP NGOẠI TỈNH
Theo quy định tại Điều 12, Điều 13 Thông tư 80/2021/TT-BTC
Năm tính thuế: 202...

Kính gửi: Đoàn kiểm tra thuế.

Công ty Cổ phần Kiểu Việt báo cáo số liệu phân bổ và nộp thuế vãng lai ngoại tỉnh đối với các gói thầu thi công xây dựng và cung ứng nội thất:

I. DANH SÁCH CÔNG TRÌNH VÀ HỢP ĐỒNG NGOẠI TỈNH:
1. Dự án tại tỉnh Bình Định (Trụ sở Cục Hải quan Bình Định, Tuyến nối QL19 Becamex...):
   - Giá trị nghiệm thu chưa thuế: ......................... VNĐ
   - Thuế GTGT vãng lai 1% nộp KBNN Bình Định: ......................... VNĐ (Giấy nộp tiền số: ............).
2. Dự án tại tỉnh Phú Yên (Trụ sở Cục Hải quan Phú Yên...):
   - Giá trị nghiệm thu chưa thuế: ......................... VNĐ
   - Thuế GTGT vãng lai 1% nộp KBNN Phú Yên: ......................... VNĐ (Giấy nộp tiền số: ............).

II. ĐỐI CHIẾU BÙ TRỪ VỚI TỜ KHAI TẠI TRỤ SỞ:
- Tổng số thuế vãng lai 1% đã nộp tại các địa phương: ......................... VNĐ
- Đã kê khai vào Chỉ tiêu [39] trên Tờ khai 01/GTGT tại Cục Thuế quản lý: Khớp đúng 100%.

KẾ TOÁN TRƯỞNG               TỔNG GIÁM ĐỐC
(Ký, ghi rõ họ tên)          (Ký tên, đóng dấu)`
  },
  {
    id: 'mau-06',
    code: 'MẪU 06/KS-GL',
    title: 'Báo Cáo Sản Lượng Đá & Cát Cung Ứng Trạm Trộn Bê Tông & Thuế Tài Nguyên',
    category: 'Thuế Tài nguyên & Phí BVMT',
    targetRisk: 'Bị cơ quan thuế ấn định sản lượng khai thác đá, cát do chênh lệch giữa khối lượng mỏ và tiêu hao trạm trộn VLXD',
    legalBase: 'QĐ 87/2025/QĐ-UBND Gia Lai, Thông tư 152/2015/TT-BTC & NĐ 27/2023/NĐ-CP',
    description: 'Đối chiếu sản lượng khai thác mỏ khoáng sản với sản lượng xuất bán và khối lượng cấp cho trạm trộn bê tông thương phẩm Kiểu Việt.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./BC-MỎ/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BÁO CÁO GIẢI TRÌNH
V/v Sản lượng khai thác khoáng sản, Tiêu hao trạm trộn bê tông và Thuế Tài nguyên, Phí BVMT
Kỳ kiểm tra: Năm 202...

Kính gửi: Đoàn kiểm tra thuế.

Công ty Cổ phần Kiểu Việt báo cáo chi tiết sản lượng khai thác đá, cát và điều chuyển phục vụ trạm trộn bê tông VLXD:

I. CĂN CỨ PHÁP LÝ & GIẤY PHÉP:
- Giấy phép khai thác khoáng sản số: ......./GP-UBND.
- Bảng giá tính thuế tài nguyên theo Quyết định số 87/2025/QĐ-UBND tỉnh Gia Lai.

II. BẢNG CÂN ĐỐI SẢN LƯỢNG (M3):
1. Tổng sản lượng đá nguyên khai nổ mìn đo đạc tại moong: ......................... m3
2. Sản lượng đá thành phẩm thu hồi sau nghiền sàng (đá 1x2, đá 2x4, đá mi): ......................... m3
3. Khối lượng đá 1x2 và cát cấp cho Trạm trộn Bê tông thương phẩm Kiểu Việt: ......................... m3 (có phiếu xuất kho kiêm vận chuyển nội bộ).
4. Khối lượng xuất bán thương phẩm cho các nhà thầu ngoài: ......................... m3.
5. Tỷ lệ hao hụt kỹ thuật nghiền sàng: .......... % (đúng thiết kế mỏ được duyệt).

III. ĐỐI CHIẾU NGHĨA VỤ THUẾ:
- Thuế tài nguyên và Phí BVMT đã kê khai nộp đủ cho 100% sản lượng đá nguyên khai và thành phẩm xuất bán.

KẾ TOÁN TRƯỞNG               TỔNG GIÁM ĐỐC
(Ký, ghi rõ họ tên)          (Ký tên, đóng dấu)`
  },
  {
    id: 'mau-07',
    code: 'MẪU 07/LS-GO',
    title: 'Bảng Kê Lâm Sản & Hồ Sơ Nguồn Gốc Gỗ Hợp Pháp Sản Xuất Nội Thất (TT 26/2022/TT-BNNPTNT)',
    category: 'Sản xuất Nội thất & Chi phí TNDN',
    targetRisk: 'Bị cơ quan thuế xuất toán chi phí gỗ nguyên liệu và chuyển cơ quan điều tra do nghi ngờ gỗ trôi nổi',
    legalBase: 'Thông tư 26/2022/TT-BNNPTNT & Điều 4 Thông tư 96/2015/TT-BTC',
    description: 'Nhà máy Nội thất Kiểu Việt sản xuất bàn ghế hội trường, nội thất văn phòng từ gỗ tự nhiên. Mẫu biểu chứng minh nguồn gốc lâm sản hợp pháp từ đơn vị bán có xác nhận kiểm lâm, hóa đơn GTGT và hồ sơ nhập khẩu.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./GT-LS/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BẢN GIẢI TRÌNH & BẢNG KÊ NGUỒN GỐC LÂM SẢN HỢP PHÁP
Phục vụ sản xuất đồ gỗ nội thất tại Nhà máy Phú Tài năm: 202...
(Căn cứ Thông tư 26/2022/TT-BNNPTNT và Thông tư 96/2015/TT-BTC)

Kính gửi: Đoàn kiểm tra thuế.

Công ty Cổ phần Kiểu Việt giải trình về nguồn gốc nguyên liệu gỗ đưa vào sản xuất đồ gỗ nội thất (bàn họp, ghế hội trường, nội thất văn phòng lãnh đạo):

I. NGUYÊN TẮC QUẢN LÝ NGUỒN GỐC GỖ:
100% khối lượng gỗ xẻ, gỗ khối đưa vào phân xưởng mộc đều có nguồn gốc lâm sản hợp pháp:
- Đối với gỗ nhập khẩu: Có Tờ khai hải quan thông quan, Giấy chứng nhận kiểm dịch thực vật, Bảng kê lâm sản nguồn gốc nhập khẩu và Hóa đơn GTGT của doanh nghiệp nhập khẩu trực tiếp.
- Đối với gỗ rừng trồng trong nước: Có Bảng kê lâm sản có xác nhận của Hạt Kiểm lâm địa bàn sở tại hoặc xác nhận của chủ rừng theo quy định tại Thông tư 26/2022/TT-BNNPTNT.

II. BẢNG KÊ CHI TIẾT CÁC LÔ GỖ ĐẦU VÀO:
1. Lô gỗ Gõ đỏ / Lim / Xoan đào nhập khẩu phục vụ gói thầu bàn ghế hội trường:
   - Hóa đơn GTGT số: ............ ngày ...../...../202... của Công ty ....................................
   - Bảng kê lâm sản số: ......./BKLS có xác nhận kiểm lâm.
   - Khối lượng nhập kho: ........... m3 | Đã xuất sang phân xưởng chế biến mộc (TK 621): ........... m3.
2. Thanh toán qua ngân hàng: 100% có Ủy nhiệm chi chuyển khoản từ tài khoản Công ty Kiểu Việt sang tài khoản nhà cung cấp hợp pháp.

Công ty cam kết toàn bộ nguyên liệu gỗ là hợp pháp, không vi phạm pháp luật bảo vệ rừng và đủ điều kiện tính vào chi phí hợp lý theo Điều 4 Thông tư 96/2015/TT-BTC.

QUẢN ĐỐC NHÀ MÁY NỘI THẤT    KẾ TOÁN VẬT TƯ               TỔNG GIÁM ĐỐC
(Ký, ghi rõ họ tên)          (Ký, ghi rõ họ tên)          (Ký tên, đóng dấu)`
  },
  {
    id: 'mau-08',
    code: 'MẪU 08/CP-BT',
    title: 'Bản Giải Trình Kiểm Tra Định Mức Cấp Phối Bê Tông Thương Phẩm & Hao Hụt Xe Bồn (TCVN)',
    category: 'Vật liệu Xây dựng & Giá thành TNDN',
    targetRisk: 'Bị cơ quan thuế xuất toán chi phí xi măng, phụ gia do nghi ngờ hao hụt trạm trộn vượt chuẩn TCVN',
    legalBase: 'Thông tư 10/2021/TT-BXD, Tiêu chuẩn TCVN 9340 & Thông tư 96/2015/TT-BTC',
    description: 'Chứng minh định mức tiêu hao xi măng, cát, đá, phụ gia trạm trộn bê tông thương phẩm Kiểu Việt phù hợp kết quả thí nghiệm nén mẫu bê tông R28 tại phòng LAS-XD và tỷ lệ hao hụt bồn trộn.',
    templateContent: `CÔNG TY CỔ PHẦN KIỂU VIỆT
Số: ......./GT-BT/2026
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Gia Lai, ngày ..... tháng ..... năm 2026

BẢN GIẢI TRÌNH ĐỊNH MỨC CẤP PHỐI BÊ TÔNG THƯƠNG PHẨM
VÀ TỶ LỆ HAO HỤT VẬN CHUYỂN BỒN TRỘN TRẠM BÊ TÔNG KIỂU VIỆT
Kỳ kiểm tra: Năm 202...

Kính gửi: Đoàn kiểm tra thuế.

Công ty Cổ phần Kiểu Việt báo cáo chi tiết về định mức tiêu hao nguyên vật liệu sản xuất Bê tông thương phẩm tại Trạm trộn VLXD Kiểu Việt:

I. CĂN CỨ THIẾT KẾ CẤP PHỐI:
- Kết quả thí nghiệm thiết kế cấp phối bê tông các mác (M200, M250, M300, M350) do Phòng thí nghiệm chuyên ngành xây dựng (Hợp chuẩn LAS-XD) kiểm định và phát hành.
- Phiếu lưu kết quả nén mẫu bê tông tuổi 7 ngày và tuổi 28 ngày (R28) của từng mẻ đổ công trình.

II. BẢNG SO SÁNH ĐỊNH MỨC THỰC TẾ VS TIÊU CHUẨN ĐỊNH MỨC BXD:
1. Mác bê tông M250 (đá 1x2):
   - Xi măng PCB40: Định mức thiết kế 345 kg/m3 | Thực tế xuất trạm bình quân: 346.2 kg/m3 (Độ lệch: +0.35%, nằm trong sai số cho phép của cân điện tử tự động ±1%).
2. Mác bê tông M300 (đá 1x2):
   - Xi măng PCB40: Định mức thiết kế 385 kg/m3 | Thực tế xuất trạm: 386.1 kg/m3.
3. Hao hụt vận chuyển xe bồn và bơm bê tông:
   - Thực tế bình quân 1.6% (Bao gồm bê tông dính bám thành bồn trộn, phần rửa máng xả và cặn đáy bồn). Mức hao hụt này hoàn toàn phù hợp định mức hao hụt vật liệu xây dựng theo Thông tư 10/2021/TT-BXD của Bộ Xây dựng.

Toàn bộ chi phí nguyên vật liệu cát, đá, xi măng đưa vào tài khoản 621 và giá thành 154 trạm trộn là có thật, phục vụ bán thương phẩm và thi công công trình, đề nghị Đoàn kiểm tra chấp thuận 100%.

TRẠM TRƯỞNG TRẠM BÊ TÔNG     KẾ TOÁN GIÁ THÀNH            TỔNG GIÁM ĐỐC
(Ký, ghi rõ họ tên)          (Ký, ghi rõ họ tên)          (Ký tên, đóng dấu)`
  }
];
