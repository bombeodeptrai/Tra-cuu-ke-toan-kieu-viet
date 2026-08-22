import { Decree } from '@/types/decree'

export const MOCK_CATEGORIES = [
  { id: '1', name: 'Luật', slug: 'luat', description: 'Các văn bản Luật' },
  { id: '2', name: 'Nghị định', slug: 'nghi-dinh', description: 'Nghị định của Chính phủ' },
  { id: '3', name: 'Thông tư', slug: 'thong-tu', description: 'Thông tư hướng dẫn' },
  { id: '4', name: 'Hóa đơn', slug: 'hoa-don', description: 'Quy định về hóa đơn chứng từ' },
  { id: '5', name: 'Thuế', slug: 'thue', description: 'Quy định về thuế' },
  { id: '6', name: 'Chuẩn mực', slug: 'chuan-muc', description: 'Chuẩn mực kế toán' }
];

export const MOCK_DECREES: Decree[] = [
  {
    id: 'tt-99-2025',
    decree_number: '99/2025/TT-BTC',
    title: 'Thông tư 99/2025/TT-BTC Chế độ kế toán doanh nghiệp (Mới)',
    summary: 'Thông tư 99/2025/TT-BTC là bước ngoặt lớn trong ngành kế toán Việt Nam, thay thế hoàn toàn Thông tư 200/2014. Thông tư này thiết kế lại toàn bộ hệ thống tài khoản, chú trọng vào việc áp dụng các chuẩn mực IFRS quốc tế vào Việt Nam.\n\nĐiểm nhấn quan trọng:\n- Xóa bỏ sự cứng nhắc trong việc lập chứng từ, cho phép doanh nghiệp hoàn toàn tự chủ thiết kế chứng từ.\n- Thay đổi toàn diện Báo cáo tài chính, chuyển từ "Bảng cân đối kế toán" sang "Báo cáo tình hình tài chính".\n- Bắt buộc áp dụng kế toán theo giá trị hợp lý (Fair Value) thay vì chỉ dùng giá gốc như trước đây.',
    content: `## CHƯƠNG I: QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Thông tư này hướng dẫn việc ghi chép kế toán, lập và trình bày Báo cáo tài chính áp dụng đối với các doanh nghiệp thuộc mọi lĩnh vực, mọi thành phần kinh tế hoạt động dưới hình thức công ty trách nhiệm hữu hạn, công ty cổ phần, công ty hợp danh, doanh nghiệp tư nhân theo quy định của pháp luật.

### Điều 2. Đối tượng áp dụng
1. Doanh nghiệp vừa và lớn, doanh nghiệp niêm yết trên thị trường chứng khoán.
2. Doanh nghiệp có vốn đầu tư nước ngoài (FDI).
3. Các doanh nghiệp khác có nhu cầu áp dụng tự nguyện Thông tư này.

### Điều 3. Tự chủ trong công tác kế toán
1. Doanh nghiệp được tự xây dựng, thiết kế biểu mẫu chứng từ kế toán, sổ kế toán phù hợp với đặc điểm hoạt động và yêu cầu quản lý của mình, miễn là đáp ứng đủ các nội dung chủ yếu theo quy định của Luật Kế toán.
2. Doanh nghiệp có quyền tự quyết định hình thức ghi sổ kế toán, quy trình luân chuyển chứng từ.

## CHƯƠNG II: HỆ THỐNG TÀI KHOẢN KẾ TOÁN

### Điều 11. Nguyên tắc kế toán tiền và các khoản tương đương tiền
1. Kế toán phải mở sổ chi tiết theo dõi từng loại tiền, từng loại ngoại tệ.
2. Khi phát sinh các giao dịch bằng ngoại tệ, kế toán phải quy đổi ra Đồng Việt Nam theo tỷ giá giao dịch thực tế.
3. Việc đánh giá lại các khoản mục tiền tệ có gốc ngoại tệ cuối kỳ phải tuân thủ nghiêm ngặt nguyên tắc thận trọng.

### Điều 15. Kế toán Tài sản sinh học (Tài khoản 142)
1. Tài sản sinh học bao gồm cây trồng, vật nuôi gắn liền với hoạt động nông nghiệp.
2. Tài sản sinh học được ghi nhận ban đầu và đánh giá lại cuối kỳ theo giá trị hợp lý trừ đi chi phí bán ước tính.
3. Chênh lệch do đánh giá lại tài sản sinh học được ghi nhận ngay vào Báo cáo kết quả hoạt động kinh doanh trong kỳ.

## CHƯƠNG III: BÁO CÁO TÀI CHÍNH

### Điều 100. Mục đích của Báo cáo tài chính
Báo cáo tài chính cung cấp thông tin về tình hình tài chính, tình hình kinh doanh và các luồng tiền của một doanh nghiệp, đáp ứng nhu cầu hữu ích cho số đông những người sử dụng trong việc đưa ra các quyết định kinh tế.

### Điều 101. Hệ thống Báo cáo tài chính
Hệ thống báo cáo tài chính năm của doanh nghiệp bao gồm:
1. Báo cáo tình hình tài chính (Thay thế Bảng cân đối kế toán) - Mẫu B01-DN.
2. Báo cáo kết quả hoạt động kinh doanh - Mẫu B02-DN.
3. Báo cáo lưu chuyển tiền tệ - Mẫu B03-DN.
4. Thuyết minh Báo cáo tài chính - Mẫu B09-DN.`,
    category: 'thong-tu',
    issued_date: '2025-10-15',
    effective_date: '2026-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'luat-thue-tndn-2025',
    decree_number: '70/2025/QH15',
    title: 'Luật Thuế Thu nhập doanh nghiệp 2025',
    summary: 'Luật này quy định về người nộp thuế, thu nhập chịu thuế, thu nhập được miễn thuế, căn cứ tính thuế, phương pháp tính thuế và ưu đãi thuế thu nhập doanh nghiệp. Các nội dung tóm tắt chính bao gồm:\n- Điều chỉnh các mức thuế suất ưu đãi nhằm thúc đẩy đầu tư vào công nghệ cao, nông nghiệp sạch và năng lượng tái tạo.\n- Quy định chặt chẽ hơn về các khoản chi phí được trừ và không được trừ, đặc biệt là chi phí quảng cáo, tiếp thị và các khoản chi không có hóa đơn chứng từ hợp lệ.\n- Bổ sung quy định về quản lý thuế đối với các giao dịch thương mại điện tử và dịch vụ kỹ thuật số xuyên biên giới.',
    content: `## CHƯƠNG I: NHỮNG QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Luật này quy định về người nộp thuế, thu nhập chịu thuế, thu nhập được miễn thuế, căn cứ tính thuế, phương pháp tính thuế và ưu đãi thuế thu nhập doanh nghiệp.

### Điều 2. Người nộp thuế
1. Người nộp thuế thu nhập doanh nghiệp là tổ chức hoạt động sản xuất, kinh doanh hàng hóa, dịch vụ có thu nhập chịu thuế theo quy định của Luật này (sau đây gọi là doanh nghiệp), bao gồm:
   - a) Doanh nghiệp được thành lập theo quy định của pháp luật Việt Nam;
   - b) Doanh nghiệp được thành lập theo quy định của pháp luật nước ngoài (sau đây gọi là doanh nghiệp nước ngoài) có cơ sở thường trú hoặc không có cơ sở thường trú tại Việt Nam;
   - c) Tổ chức được thành lập theo Luật hợp tác xã;
   - d) Đơn vị sự nghiệp được thành lập theo quy định của pháp luật Việt Nam.

### Điều 3. Thu nhập chịu thuế
1. Thu nhập chịu thuế bao gồm thu nhập từ hoạt động sản xuất, kinh doanh hàng hóa, dịch vụ và thu nhập khác quy định tại khoản 2 Điều này.
2. Thu nhập khác bao gồm:
   - a) Thu nhập từ chuyển nhượng vốn, chuyển nhượng quyền góp vốn;
   - b) Thu nhập từ chuyển nhượng bất động sản, chuyển nhượng dự án đầu tư.

## CHƯƠNG II: CĂN CỨ TÍNH THUẾ

### Điều 6. Căn cứ tính thuế
Căn cứ tính thuế là thu nhập tính thuế và thuế suất.

### Điều 7. Xác định thu nhập tính thuế
1. Thu nhập tính thuế trong kỳ tính thuế được xác định bằng thu nhập chịu thuế trừ thu nhập được miễn thuế và các khoản lỗ được kết chuyển từ các năm trước.
2. Thu nhập chịu thuế bằng doanh thu trừ các khoản chi được trừ của hoạt động sản xuất, kinh doanh cộng thu nhập khác.

### Điều 9. Các khoản chi được trừ và không được trừ khi xác định thu nhập chịu thuế
1. Trừ các khoản chi quy định tại khoản 2 Điều này, doanh nghiệp được trừ mọi khoản chi nếu đáp ứng đủ các điều kiện sau đây:
   - a) Khoản chi thực tế phát sinh liên quan đến hoạt động sản xuất, kinh doanh của doanh nghiệp;
   - b) Khoản chi có đủ hoá đơn, chứng từ hợp pháp theo quy định của pháp luật;
   - c) Khoản chi nếu có hoá đơn mua hàng hoá, dịch vụ từng lần có giá trị từ 20 triệu đồng trở lên (giá đã bao gồm thuế GTGT) khi thanh toán phải có chứng từ thanh toán không dùng tiền mặt.

2. Các khoản chi không được trừ khi xác định thu nhập chịu thuế bao gồm:
   - a) Khoản chi không đáp ứng đủ các điều kiện quy định tại khoản 1 Điều này;
   - b) Khoản chi khấu hao tài sản cố định không đúng quy định của pháp luật;
   - c) Khoản chi vượt mức quy định của pháp luật về trích lập quỹ dự phòng;
   - d) Phần chi phí quản lý kinh doanh do doanh nghiệp nước ngoài phân bổ cho cơ sở thường trú tại Việt Nam vượt mức tính theo phương pháp phân bổ do pháp luật Việt Nam quy định.

## CHƯƠNG III: THUẾ SUẤT VÀ PHƯƠNG PHÁP TÍNH THUẾ

### Điều 10. Thuế suất
1. Thuế suất thuế thu nhập doanh nghiệp là 20%, trừ trường hợp quy định tại khoản 2, khoản 3 Điều này và đối tượng được ưu đãi về thuế suất quy định tại Điều 13 của Luật này.
2. Thuế suất thuế thu nhập doanh nghiệp đối với hoạt động tìm kiếm, thăm dò, khai thác dầu, khí và tài nguyên quý hiếm khác tại Việt Nam từ 32% đến 50% phù hợp với từng dự án, từng cơ sở kinh doanh.`,
    category: 'thue',
    issued_date: '2025-12-10',
    effective_date: '2026-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'luat-thue-gtgt-2025',
    decree_number: '71/2025/QH15',
    title: 'Luật Thuế Giá trị gia tăng 2025',
    summary: 'Cập nhật đối tượng không chịu thuế GTGT và thuế suất 0%, 5%, 10% áp dụng cho năm 2026.',
    content: `## CHƯƠNG II: CĂN CỨ VÀ PHƯƠNG PHÁP TÍNH THUẾ

### Điều 8. Thuế suất

1. Mức thuế suất 0% áp dụng đối với hàng hoá, dịch vụ xuất khẩu, vận tải quốc tế và hàng hoá, dịch vụ không chịu thuế giá trị gia tăng khi xuất khẩu.
2. Mức thuế suất 5% áp dụng đối với hàng hoá, dịch vụ sau đây: Nước sạch phục vụ sản xuất và sinh hoạt; Quặng để sản xuất phân bón; Sản phẩm trồng trọt, chăn nuôi, thủy sản chưa qua chế biến.
3. Mức thuế suất 10% áp dụng đối với hàng hoá, dịch vụ không quy định tại Khoản 1 và Khoản 2 Điều này.

### Điều 15. Điều kiện khấu trừ thuế giá trị gia tăng đầu vào

1. Có hoá đơn giá trị gia tăng hợp pháp của hàng hoá, dịch vụ mua vào.
2. Có chứng từ thanh toán không dùng tiền mặt đối với hàng hoá, dịch vụ mua vào từ 20 triệu đồng trở lên.`,
    category: 'thue',
    issued_date: '2025-12-10',
    effective_date: '2026-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'tt-58-2026',
    decree_number: '58/2026/TT-BTC',
    title: 'Thông tư 58/2026/TT-BTC Kế toán doanh nghiệp siêu nhỏ',
    summary: 'Hướng dẫn chế độ kế toán cho doanh nghiệp siêu nhỏ, thay thế Thông tư 132/2018/TT-BTC.',
    content: `## QUY ĐỊNH CHUNG

### Điều 1. Đối tượng áp dụng
Thông tư áp dụng cho các doanh nghiệp siêu nhỏ theo quy định pháp luật về hỗ trợ doanh nghiệp nhỏ và vừa.

### Điều 2. Nguyên tắc kế toán
Doanh nghiệp siêu nhỏ nộp thuế TNDN theo phương pháp tỷ lệ % trên doanh thu không bắt buộc lập báo cáo tài chính, chỉ cần ghi chép sổ kế toán đơn giản để theo dõi doanh thu và nghĩa vụ thuế.`,
    category: 'thong-tu',
    issued_date: '2026-03-20',
    effective_date: '2026-07-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'luat-quan-ly-thue-2025',
    decree_number: '68/2025/QH15',
    title: 'Luật Quản lý thuế 2025',
    summary: 'Luật Quản lý thuế số 68/2025/QH15 là bộ luật nền tảng quy định về việc quản lý các loại thuế, các khoản thu khác thuộc ngân sách nhà nước. Điểm mới đột phá của luật là việc số hóa toàn diện quy trình quản lý thuế, bắt buộc giao dịch điện tử 100% đối với doanh nghiệp, và rút ngắn thời gian thanh tra, kiểm tra.\n\nTóm tắt các thay đổi nổi bật:\n- Siết chặt quản lý thuế đối với thương mại điện tử, nền tảng số.\n- Mở rộng quyền hạn của cơ quan thuế trong việc cưỡng chế nợ thuế, bao gồm cả việc phong tỏa tài khoản và cấm xuất cảnh đối với người đại diện pháp luật.\n- Khuyến khích người nộp thuế tự nguyện tuân thủ thông qua cơ chế xếp hạng rủi ro tín nhiệm thuế.',
    content: `## CHƯƠNG I: NHỮNG QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Luật này quy định việc quản lý các loại thuế, các khoản thu khác thuộc ngân sách nhà nước do cơ quan quản lý thuế thu theo quy định của pháp luật.

### Điều 4. Nguyên tắc quản lý thuế
1. Thuế là nguồn thu chủ yếu của ngân sách nhà nước. Việc nộp thuế là nghĩa vụ và quyền lợi của mọi tổ chức, cá nhân.
2. Cơ quan quản lý thuế, công chức quản lý thuế phải thực hiện quản lý thuế theo quy định của pháp luật, bảo đảm công bằng, công khai, minh bạch, bình đẳng.
3. Hiện đại hóa công tác quản lý thuế, áp dụng công nghệ thông tin, bảo đảm hiệu quả, hiệu lực.

### Điều 17. Quyền của người nộp thuế
1. Được hướng dẫn, cung cấp thông tin, tài liệu liên quan đến nghĩa vụ thuế.
2. Được giữ bí mật thông tin theo quy định của pháp luật.
3. Được hưởng các ưu đãi về thuế, hoàn thuế theo quy định của pháp luật về thuế.
4. Được quyền khiếu nại, khởi kiện các quyết định hành chính, hành vi hành chính của cơ quan quản lý thuế, công chức quản lý thuế.

## CHƯƠNG II: KHAI THUẾ, TÍNH THUẾ

### Điều 42. Nguyên tắc khai thuế, tính thuế
1. Người nộp thuế phải khai chính xác, trung thực, đầy đủ các nội dung trong tờ khai thuế theo mẫu do Bộ trưởng Bộ Tài chính quy định và nộp đủ các chứng từ, tài liệu quy định trong hồ sơ khai thuế với cơ quan quản lý thuế.
2. Người nộp thuế tự tính số tiền thuế phải nộp, trừ trường hợp việc tính thuế do cơ quan quản lý thuế thực hiện theo quy định của pháp luật.

### Điều 47. Khai bổ sung hồ sơ khai thuế
1. Người nộp thuế phát hiện hồ sơ khai thuế đã nộp cho cơ quan thuế có sai, sót thì được khai bổ sung hồ sơ khai thuế trong thời hạn 05 năm kể từ ngày hết thời hạn nộp hồ sơ khai thuế của kỳ tính thuế có sai, sót.
2. Khi cơ quan thuế, cơ quan có thẩm quyền đã công bố quyết định thanh tra, kiểm tra thuế tại trụ sở của người nộp thuế thì người nộp thuế vẫn được khai bổ sung hồ sơ khai thuế nhưng bị xử phạt vi phạm hành chính.

## CHƯƠNG X: ÁP DỤNG HÓA ĐƠN ĐIỆN TỬ

### Điều 90. Nguyên tắc lập, quản lý, sử dụng hóa đơn điện tử
1. Khi bán hàng hóa, cung cấp dịch vụ, người bán phải lập hóa đơn điện tử để giao cho người mua theo định dạng chuẩn dữ liệu và phải ghi đầy đủ nội dung theo quy định của pháp luật về thuế, pháp luật về kế toán.
2. Hóa đơn điện tử bao gồm hóa đơn điện tử có mã của cơ quan thuế và hóa đơn điện tử không có mã của cơ quan thuế.`,
    category: 'luat',
    issued_date: '2025-11-20',
    effective_date: '2026-07-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'nd-254-2026',
    decree_number: '254/2026/NĐ-CP',
    title: 'Nghị định 254/2026/NĐ-CP Hóa đơn điện tử',
    summary: 'Quy định mới nhất về hóa đơn điện tử và chứng từ điện tử, bắt buộc nâng cấp hệ thống dữ liệu đồng bộ với cơ quan thuế.',
    content: `## QUY ĐỊNH HÓA ĐƠN ĐIỆN TỬ MỚI\n\n### Điều 12. Áp dụng hóa đơn điện tử\nNghị định yêu cầu tất cả các hộ kinh doanh và doanh nghiệp áp dụng chuẩn định dạng dữ liệu hóa đơn XML mới nhất. \nKhoản 3: Bỏ hoàn toàn thuế khoán với hộ kinh doanh chậm nhất vào 31/12/2026. Mọi đơn vị phải xuất hóa đơn điện tử từ máy tính tiền.`,
    category: 'hoa-don',
    issued_date: '2026-05-15',
    effective_date: '2026-07-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'vas-01',
    decree_number: 'QĐ 149/2001/QĐ-BTC',
    title: 'Chuẩn mực kế toán số 01 - Chuẩn mực chung (VAS 01)',
    summary: 'Các nguyên tắc kế toán cơ bản và yêu cầu cơ bản đối với kế toán.',
    content: `## CÁC NGUYÊN TẮC KẾ TOÁN CƠ BẢN\n\n### Cơ sở dồn tích\nMọi nghiệp vụ kinh tế, tài chính của doanh nghiệp liên quan đến tài sản, nợ phải trả, nguồn vốn chủ sở hữu, doanh thu, chi phí phải được ghi sổ kế toán vào thời điểm phát sinh, không căn cứ vào thời điểm thực tế thu hoặc thực tế chi tiền.\n\n### Hoạt động liên tục\nBáo cáo tài chính phải được lập trên cơ sở giả định là doanh nghiệp đang hoạt động liên tục và sẽ tiếp tục hoạt động kinh doanh bình thường trong tương lai gần.\n\n### Giá gốc\nTài sản phải được ghi nhận theo giá gốc. Giá gốc của tài sản được tính theo số tiền hoặc khoản tương đương tiền đã trả, phải trả hoặc tính theo giá trị hợp lý của tài sản đó vào thời điểm tài sản được ghi nhận.`,
    category: 'chuan-muc',
    issued_date: '2001-12-31',
    effective_date: '2002-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'luat-ketoan-2015',
    decree_number: '88/2015/QH13',
    title: 'Luật Kế toán 2015 (Hợp nhất 41/VBHN-VPQH)',
    summary: 'Luật quy định về nội dung công tác kế toán, tổ chức bộ máy kế toán, người làm kế toán.',
    content: `## Chương I: NHỮNG QUY ĐỊNH CHUNG\n\n### Điều 5. Nguyên tắc kế toán\n1. Giá trị tài sản và nợ phải trả được ghi nhận ban đầu theo giá gốc. Sau ghi nhận ban đầu, đối với một số loại tài sản hoặc nợ phải trả mà giá trị biến động thường xuyên theo giá thị trường và giá trị của chúng có thể xác định lại một cách đáng tin cậy thì được ghi nhận theo giá trị hợp lý tại thời điểm cuối kỳ lập báo cáo tài chính.\n2. Các quy định và phương pháp kế toán đã chọn phải được áp dụng nhất quán trong kỳ kế toán năm.`,
    category: 'luat',
    issued_date: '2015-11-20',
    effective_date: '2017-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Luat-ke-toan-2015-298369.aspx'
  },
  {
    id: 'tt-200-2014',
    decree_number: '200/2014/TT-BTC',
    title: 'Thông tư 200/2014/TT-BTC Chế độ kế toán doanh nghiệp',
    summary: 'Chế độ kế toán doanh nghiệp cơ bản áp dụng trước khi có Thông tư 99.',
    content: `## CHƯƠNG I: QUY ĐỊNH CHUNG\nThông tư này hướng dẫn kế toán áp dụng đối với các doanh nghiệp thuộc mọi lĩnh vực, mọi thành phần kinh tế.\nLưu ý: Hết hiệu lực và được thay thế bởi Thông tư 99/2025/TT-BTC.`,
    category: 'thong-tu',
    issued_date: '2014-12-22',
    effective_date: '2015-01-01',
    status: 'expired',
    source_url: '#'
  },
  {
    id: 'tt-133-2016',
    decree_number: '133/2016/TT-BTC',
    title: 'Thông tư 133/2016/TT-BTC Chế độ kế toán DNNVV',
    summary: 'Hướng dẫn chế độ kế toán cho doanh nghiệp nhỏ và vừa.',
    content: `## QUY ĐỊNH CHUNG\nÁp dụng cho doanh nghiệp nhỏ và vừa.`,
    category: 'thong-tu',
    issued_date: '2016-08-26',
    effective_date: '2017-01-01',
    status: 'expired',
    source_url: '#'
  },
  {
    id: 'nd-123-2020',
    decree_number: '123/2020/NĐ-CP',
    title: 'Nghị định 123/2020/NĐ-CP Quy định về hóa đơn',
    summary: 'Quy định cơ bản về hóa đơn, chứng từ (Bị sửa đổi bởi NĐ 254).',
    content: `## CHƯƠNG I: QUY ĐỊNH CHUNG\nQuy định về hóa đơn chứng từ.`,
    category: 'hoa-don',
    issued_date: '2020-10-19',
    effective_date: '2022-07-01',
    status: 'amended',
    source_url: '#'
  },
  {
    id: 'tt-78-2021',
    decree_number: '78/2021/TT-BTC',
    title: 'Thông tư 78/2021/TT-BTC Hướng dẫn HĐĐT',
    summary: 'Hướng dẫn thực hiện hóa đơn điện tử.',
    content: `## QUY ĐỊNH CHUNG\nHướng dẫn hóa đơn điện tử.`,
    category: 'hoa-don',
    issued_date: '2021-09-17',
    effective_date: '2022-07-01',
    status: 'amended',
    source_url: '#'
  },
  {
    id: 'luat-thue-tncn-2007',
    decree_number: '04/2007/QH12',
    title: 'Luật Thuế thu nhập cá nhân 2007 (sửa đổi bổ sung)',
    summary: 'Quy định về các khoản thu nhập chịu thuế, giảm trừ gia cảnh.',
    content: `## THU NHẬP CHỊU THUẾ\n### Điều 3. Thu nhập chịu thuế\n1. Thu nhập từ kinh doanh.\n2. Thu nhập từ tiền lương, tiền công.`,
    category: 'thue',
    issued_date: '2007-11-21',
    effective_date: '2009-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'nd-15-2022',
    decree_number: '15/2022/NĐ-CP',
    title: 'Nghị định 15/2022/NĐ-CP Giảm thuế GTGT',
    summary: 'Chính sách miễn, giảm thuế theo Nghị quyết 43/2022/QH15.',
    content: `## GIẢM THUẾ GTGT\nGiảm 2% thuế suất thuế GTGT trong năm 2022.`,
    category: 'thue',
    issued_date: '2022-01-28',
    effective_date: '2022-02-01',
    status: 'expired',
    source_url: '#'
  },
  {
    id: 'tt-119-2014',
    decree_number: '119/2014/TT-BTC',
    title: 'Thông tư 119/2014/TT-BTC Cải cách thủ tục hành chính thuế',
    summary: 'Sửa đổi các thông tư để cải cách, đơn giản hóa thủ tục hành chính thuế.',
    content: `## CẢI CÁCH THỦ TỤC\nSửa đổi, bổ sung một số điều của Thông tư số 156/2013/TT-BTC, Thông tư số 111/2013/TT-BTC.`,
    category: 'thong-tu',
    issued_date: '2014-08-25',
    effective_date: '2014-09-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'tt-156-2013',
    decree_number: '156/2013/TT-BTC',
    title: 'Thông tư 156/2013/TT-BTC Hướng dẫn Luật Quản lý thuế',
    summary: 'Hướng dẫn thi hành một số điều của Luật Quản lý thuế.',
    content: `## HƯỚNG DẪN QUẢN LÝ THUẾ\nQuy định chi tiết khai thuế, nộp thuế, hoàn thuế.`,
    category: 'thong-tu',
    issued_date: '2013-11-06',
    effective_date: '2013-12-20',
    status: 'amended',
    source_url: '#'
  },
  {
    id: 'vas-02',
    decree_number: 'QĐ 149/2001/QĐ-BTC',
    title: 'Chuẩn mực kế toán số 02 - Hàng tồn kho (VAS 02)',
    summary: 'Phương pháp kế toán hàng tồn kho, xác định giá gốc và giá trị thuần có thể thực hiện được.',
    content: `## HÀNG TỒN KHO\nHàng tồn kho phải được tính theo giá gốc. Trường hợp giá trị thuần có thể thực hiện được thấp hơn giá gốc thì phải tính theo giá trị thuần có thể thực hiện được.`,
    category: 'chuan-muc',
    issued_date: '2001-12-31',
    effective_date: '2002-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'vas-03',
    decree_number: 'QĐ 149/2001/QĐ-BTC',
    title: 'Chuẩn mực kế toán số 03 - Tài sản cố định hữu hình (VAS 03)',
    summary: 'Ghi nhận và đánh giá tài sản cố định hữu hình.',
    content: `## TÀI SẢN CỐ ĐỊNH HỮU HÌNH\nTài sản cố định hữu hình phải được ghi nhận ban đầu theo nguyên giá.`,
    category: 'chuan-muc',
    issued_date: '2001-12-31',
    effective_date: '2002-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'vas-04',
    decree_number: 'QĐ 149/2001/QĐ-BTC',
    title: 'Chuẩn mực kế toán số 04 - Tài sản cố định vô hình (VAS 04)',
    summary: 'Ghi nhận và đánh giá tài sản cố định vô hình.',
    content: `## TÀI SẢN CỐ ĐỊNH VÔ HÌNH\nTài sản cố định vô hình được ghi nhận khi thỏa mãn định nghĩa và tiêu chuẩn ghi nhận.`,
    category: 'chuan-muc',
    issued_date: '2001-12-31',
    effective_date: '2002-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'vas-14',
    decree_number: 'QĐ 149/2001/QĐ-BTC',
    title: 'Chuẩn mực kế toán số 14 - Doanh thu và thu nhập khác (VAS 14)',
    summary: 'Nguyên tắc và phương pháp ghi nhận doanh thu.',
    content: `## DOANH THU\nDoanh thu bán hàng được ghi nhận khi phần lớn rủi ro và lợi ích gắn liền với quyền sở hữu sản phẩm đã được chuyển giao cho người mua.`,
    category: 'chuan-muc',
    issued_date: '2001-12-31',
    effective_date: '2002-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'tt-45-2013',
    decree_number: '45/2013/TT-BTC',
    title: 'Thông tư 45/2013/TT-BTC Hướng dẫn chế độ quản lý, trích khấu hao TSCĐ',
    summary: 'Quy định chi tiết về quản lý, sử dụng và trích khấu hao tài sản cố định.',
    content: `## QUẢN LÝ KHẤU HAO TÀI SẢN CỐ ĐỊNH\nMọi TSCĐ của doanh nghiệp có liên quan đến hoạt động sản xuất kinh doanh đều phải trích khấu hao.`,
    category: 'thong-tu',
    issued_date: '2013-04-25',
    effective_date: '2013-06-10',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'tt-48-2019',
    decree_number: '48/2019/TT-BTC',
    title: 'Thông tư 48/2019/TT-BTC Hướng dẫn trích lập dự phòng',
    summary: 'Hướng dẫn việc trích lập và xử lý các khoản dự phòng giảm giá hàng tồn kho, tổn thất các khoản đầu tư, nợ phải thu khó đòi.',
    content: `## TRÍCH LẬP DỰ PHÒNG\nCác khoản dự phòng được tính vào chi phí được trừ khi xác định thu nhập chịu thuế TNDN trong kỳ báo cáo năm.`,
    category: 'thong-tu',
    issued_date: '2019-08-08',
    effective_date: '2019-10-10',
    status: 'active',
    source_url: '#'
  }
];
