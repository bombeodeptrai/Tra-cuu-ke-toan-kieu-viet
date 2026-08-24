import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decreesPath = path.join(__dirname, '../src/data/mock-decrees.ts');
let content = fs.readFileSync(decreesPath, 'utf8');

const tndnSummary = 'Luật này quy định về người nộp thuế, thu nhập chịu thuế, thu nhập được miễn thuế, căn cứ tính thuế, phương pháp tính thuế và ưu đãi thuế thu nhập doanh nghiệp. Các nội dung tóm tắt chính bao gồm:\n- Điều chỉnh các mức thuế suất ưu đãi nhằm thúc đẩy đầu tư vào công nghệ cao, nông nghiệp sạch và năng lượng tái tạo.\n- Quy định chặt chẽ hơn về các khoản chi phí được trừ và không được trừ, đặc biệt là chi phí quảng cáo, tiếp thị và các khoản chi không có hóa đơn chứng từ hợp lệ.\n- Bổ sung quy định về quản lý thuế đối với các giao dịch thương mại điện tử và dịch vụ kỹ thuật số xuyên biên giới.';

const tndnContent = `## CHƯƠNG I: NHỮNG QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Luật này quy định về người nộp thuế, thu nhập chịu thuế, thu nhập được miễn thuế, căn cứ tính thuế, phương pháp tính thuế và ưu đãi thuế thu nhập doanh nghiệp.

### Điều 2. Người nộp thuế
1. Người nộp thuế thu nhập doanh nghiệp là tổ chức hoạt động sản xuất, kinh doanh hàng hóa, dịch vụ có thu nhập chịu thuế theo quy định của Luật này (sau đây gọi là doanh nghiệp), bao gồm:
   - a) Doanh nghiệp được thành lập theo quy định của pháp luật Việt Nam;
   - b) Doanh nghiệp được thành lập theo quy định của pháp luật nước ngoài (sau đây gọi là doanh nghiệp nước ngoài) có cơ sở thường trú hoặc không có cơ sở thường trú tại Việt Nam;
   - c) Tổ chức được thành lập theo Luật hợp tác xã;
   - d) Đơn vị sự nghiệp được thành lập theo quy định của pháp luật Việt Nam;
   - đ) Tổ chức khác có hoạt động sản xuất, kinh doanh có thu nhập.

2. Doanh nghiệp có thu nhập chịu thuế quy định tại Điều 3 của Luật này phải nộp thuế thu nhập doanh nghiệp như sau:
   - a) Doanh nghiệp được thành lập theo quy định của pháp luật Việt Nam nộp thuế đối với thu nhập chịu thuế phát sinh tại Việt Nam và thu nhập chịu thuế phát sinh ngoài Việt Nam;
   - b) Doanh nghiệp nước ngoài có cơ sở thường trú tại Việt Nam nộp thuế đối với thu nhập chịu thuế phát sinh tại Việt Nam và thu nhập chịu thuế phát sinh ngoài Việt Nam liên quan đến hoạt động của cơ sở thường trú đó;

### Điều 3. Thu nhập chịu thuế
1. Thu nhập chịu thuế bao gồm thu nhập từ hoạt động sản xuất, kinh doanh hàng hóa, dịch vụ và thu nhập khác quy định tại khoản 2 Điều này.
2. Thu nhập khác bao gồm:
   - a) Thu nhập từ chuyển nhượng vốn, chuyển nhượng quyền góp vốn;
   - b) Thu nhập từ chuyển nhượng bất động sản, chuyển nhượng dự án đầu tư, chuyển nhượng quyền tham gia dự án đầu tư, chuyển nhượng quyền thăm dò, khai thác, chế biến khoáng sản;
   - c) Thu nhập từ quyền sử dụng tài sản, quyền sở hữu tài sản, kể cả thu nhập từ quyền sở hữu trí tuệ theo quy định của pháp luật;

### Điều 4. Thu nhập được miễn thuế
1. Thu nhập từ trồng trọt, chăn nuôi, nuôi trồng, chế biến nông sản, thủy sản, sản xuất muối của hợp tác xã; thu nhập của hợp tác xã hoạt động trong lĩnh vực nông nghiệp, lâm nghiệp, ngư nghiệp, diêm nghiệp.
2. Thu nhập từ việc thực hiện dịch vụ kỹ thuật trực tiếp phục vụ nông nghiệp.
3. Thu nhập từ việc thực hiện hợp đồng nghiên cứu khoa học và phát triển công nghệ.

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
2. Thuế suất thuế thu nhập doanh nghiệp đối với hoạt động tìm kiếm, thăm dò, khai thác dầu, khí và tài nguyên quý hiếm khác tại Việt Nam từ 32% đến 50% phù hợp với từng dự án, từng cơ sở kinh doanh.`;

const tt99Summary = 'Thông tư 99/2025/TT-BTC là bước ngoặt lớn trong ngành kế toán Việt Nam, thay thế hoàn toàn Thông tư 200/2014. Thông tư này thiết kế lại toàn bộ hệ thống tài khoản, chú trọng vào việc áp dụng các chuẩn mực IFRS quốc tế vào Việt Nam.\n\nĐiểm nhấn quan trọng:\n- Xóa bỏ sự cứng nhắc trong việc lập chứng từ, cho phép doanh nghiệp hoàn toàn tự chủ thiết kế chứng từ.\n- Thay đổi toàn diện Báo cáo tài chính, chuyển từ "Bảng cân đối kế toán" sang "Báo cáo tình hình tài chính".\n- Bắt buộc áp dụng kế toán theo giá trị hợp lý (Fair Value) thay vì chỉ dùng giá gốc như trước đây.';

const tt99Content = `## CHƯƠNG I: QUY ĐỊNH CHUNG

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
4. Thuyết minh Báo cáo tài chính - Mẫu B09-DN.`;

const qltSummary = 'Luật Quản lý thuế số 68/2025/QH15 là bộ luật nền tảng quy định về việc quản lý các loại thuế, các khoản thu khác thuộc ngân sách nhà nước. Điểm mới đột phá của luật là việc số hóa toàn diện quy trình quản lý thuế, bắt buộc giao dịch điện tử 100% đối với doanh nghiệp, và rút ngắn thời gian thanh tra, kiểm tra.\n\nTóm tắt các thay đổi nổi bật:\n- Siết chặt quản lý thuế đối với thương mại điện tử, nền tảng số.\n- Mở rộng quyền hạn của cơ quan thuế trong việc cưỡng chế nợ thuế, bao gồm cả việc phong tỏa tài khoản và cấm xuất cảnh đối với người đại diện pháp luật.\n- Khuyến khích người nộp thuế tự nguyện tuân thủ thông qua cơ chế xếp hạng rủi ro tín nhiệm thuế.';

const qltContent = `## CHƯƠNG I: NHỮNG QUY ĐỊNH CHUNG

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
2. Hóa đơn điện tử bao gồm hóa đơn điện tử có mã của cơ quan thuế và hóa đơn điện tử không có mã của cơ quan thuế.`;


content = content.replace(
  /title: 'Luật Thuế Thu nhập doanh nghiệp 2025',[\s\S]*?category: 'thue',/,
  \`title: 'Luật Thuế Thu nhập doanh nghiệp 2025',
    summary: '\${tndnSummary.replace(/\\n/g, '\\\\n')}',
    content: \\\`\${tndnContent}\\\`,
    category: 'thue',\`
);

content = content.replace(
  /title: 'Thông tư 99\/2025\/TT-BTC Chế độ kế toán doanh nghiệp \(Mới\)',[\s\S]*?category: 'thong-tu',/,
  \`title: 'Thông tư 99/2025/TT-BTC Chế độ kế toán doanh nghiệp (Mới)',
    summary: '\${tt99Summary.replace(/\\n/g, '\\\\n')}',
    content: \\\`\${tt99Content}\\\`,
    category: 'thong-tu',\`
);

content = content.replace(
  /title: 'Luật Quản lý thuế 2025',[\s\S]*?category: 'luat',/,
  \`title: 'Luật Quản lý thuế 2025',
    summary: '\${qltSummary.replace(/\\n/g, '\\\\n')}',
    content: \\\`\${qltContent}\\\`,
    category: 'luat',\`
);

fs.writeFileSync(decreesPath, content, 'utf8');
console.log('Expanded detailed data successfully!');
