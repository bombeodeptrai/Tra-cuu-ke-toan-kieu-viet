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
    id: 'luat-ketoan-2015',
    decree_number: '88/2015/QH13',
    title: 'Luật Kế toán 2015',
    summary: 'Luật quy định về nội dung công tác kế toán, tổ chức bộ máy kế toán, người làm kế toán, hoạt động kinh doanh dịch vụ kế toán, quản lý nhà nước về kế toán và tổ chức nghề nghiệp về kế toán.',
    content: `## Chương I: NHỮNG QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Luật này quy định về nội dung công tác kế toán, tổ chức bộ máy kế toán, người làm kế toán, hoạt động kinh doanh dịch vụ kế toán, quản lý nhà nước về kế toán và tổ chức nghề nghiệp về kế toán.

### Điều 2. Đối tượng áp dụng
1. Cơ quan có nhiệm vụ thu, chi ngân sách nhà nước các cấp.
2. Cơ quan nhà nước, tổ chức, đơn vị sự nghiệp sử dụng ngân sách nhà nước.
3. Tổ chức, đơn vị sự nghiệp không sử dụng ngân sách nhà nước.
4. Doanh nghiệp được thành lập và hoạt động theo pháp luật Việt Nam; chi nhánh, văn phòng đại diện của doanh nghiệp nước ngoài hoạt động tại Việt Nam.

### Điều 3. Giải thích từ ngữ
Trong Luật này, các từ ngữ dưới đây được hiểu như sau:
- *Báo cáo tài chính* là hệ thống thông tin kinh tế, tài chính của đơn vị kế toán được trình bày theo biểu mẫu quy định tại chuẩn mực kế toán và chế độ kế toán.
- *Chế độ kế toán* là những quy định và hướng dẫn về kế toán trong một lĩnh vực hoặc một số lĩnh vực nhất định do cơ quan quản lý nhà nước về kế toán ban hành.

### Điều 4. Nhiệm vụ kế toán
1. Thu thập, xử lý thông tin, số liệu kế toán theo đối tượng và nội dung công việc kế toán, theo chuẩn mực kế toán và chế độ kế toán.
2. Kiểm tra, giám sát các khoản thu, chi tài chính, nghĩa vụ thu, nộp, thanh toán nợ...`,
    category: 'luat',
    issued_date: '2015-11-20',
    effective_date: '2017-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Luat-ke-toan-2015-298369.aspx'
  },
  {
    id: 'nd-174-2016',
    decree_number: '174/2016/NĐ-CP',
    title: 'Nghị định 174/2016/NĐ-CP Hướng dẫn Luật Kế toán',
    summary: 'Quy định chi tiết một số điều của Luật kế toán về nội dung công tác kế toán, tổ chức bộ máy kế toán và người làm kế toán, kinh doanh dịch vụ kế toán.',
    content: `## Chương I: QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Nghị định này quy định chi tiết một số điều của Luật kế toán về nội dung công tác kế toán, tổ chức bộ máy kế toán và người làm kế toán, kinh doanh dịch vụ kế toán, cung cấp dịch vụ kế toán qua biên giới của doanh nghiệp kinh doanh dịch vụ kế toán nước ngoài.

### Điều 2. Đối tượng áp dụng
Đối tượng áp dụng của Nghị định này thực hiện theo quy định tại Điều 2 Luật kế toán.

### Điều 3. Giải thích từ ngữ
Các thuật ngữ trong Nghị định này được hiểu như trong Luật kế toán. Cụ thể quy định thêm về các loại hình báo cáo và tổ chức thực hiện.

## Chương II: NỘI DUNG CÔNG TÁC KẾ TOÁN

### Điều 4. Chữ ký kế toán
1. Chữ ký trên chứng từ kế toán phải được ký bằng loại mực không phai.
2. Không được ký chứng từ kế toán bằng mực màu đỏ hoặc đóng dấu chữ ký khắc sẵn.
3. Chữ ký của một người phải thống nhất...`,
    category: 'nghi-dinh',
    issued_date: '2016-12-30',
    effective_date: '2017-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Nghi-dinh-174-2016-ND-CP-Quy-dinh-chi-tiet-mot-so-dieu-cua-Luat-ke-toan-337583.aspx'
  },
  {
    id: 'tt-200-2014',
    decree_number: '200/2014/TT-BTC',
    title: 'Thông tư 200/2014/TT-BTC Chế độ kế toán doanh nghiệp',
    summary: 'Hướng dẫn kế toán áp dụng đối với các doanh nghiệp thuộc mọi lĩnh vực, mọi thành phần kinh tế.',
    content: `## CHƯƠNG I: QUY ĐỊNH CHUNG

### Điều 1. Đối tượng áp dụng
Thông tư này hướng dẫn kế toán áp dụng đối với các doanh nghiệp thuộc mọi lĩnh vực, mọi thành phần kinh tế. Các doanh nghiệp vừa và nhỏ đang thực hiện kế toán theo Chế độ kế toán áp dụng cho doanh nghiệp vừa và nhỏ được vận dụng quy định của Thông tư này để kế toán phù hợp với đặc điểm kinh doanh và yêu cầu quản lý của mình.

### Điều 2. Phạm vi điều chỉnh
Thông tư này hướng dẫn việc ghi sổ kế toán, lập và trình bày Báo cáo tài chính, không áp dụng cho việc xác định nghĩa vụ thuế của doanh nghiệp đối với Ngân sách Nhà nước.

## CHƯƠNG II: TÀI KHOẢN KẾ TOÁN

### Điều 9. Nguyên tắc kế toán tiền và các khoản tương đương tiền
1. Kế toán phải mở sổ kế toán ghi chép hàng ngày liên tục theo trình tự phát sinh các khoản thu, chi, xuất, nhập tiền, ngoại tệ.
2. Các khoản tiền do doanh nghiệp khác và cá nhân ký cược, ký quỹ tại doanh nghiệp được quản lý như tiền của doanh nghiệp.

### Điều 11. Kế toán Hàng tồn kho
Hàng tồn kho là những tài sản được mua vào để bán hoặc sản xuất. Kế toán phải tuân thủ chuẩn mực kế toán về hàng tồn kho trong việc xác định giá gốc.`,
    category: 'thong-tu',
    issued_date: '2014-12-22',
    effective_date: '2015-01-01',
    status: 'amended',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Thong-tu-200-2014-TT-BTC-Huong-dan-Che-do-ke-toan-doanh-nghiep-262452.aspx'
  },
  {
    id: 'tt-133-2016',
    decree_number: '133/2016/TT-BTC',
    title: 'Thông tư 133/2016/TT-BTC Chế độ kế toán doanh nghiệp nhỏ và vừa',
    summary: 'Hướng dẫn nguyên tắc ghi sổ kế toán, lập và trình bày Báo cáo tài chính của doanh nghiệp nhỏ và vừa, không áp dụng cho việc xác định nghĩa vụ thuế.',
    content: `## QUY ĐỊNH CHUNG

### Điều 1. Đối tượng áp dụng
Thông tư này áp dụng đối với các doanh nghiệp nhỏ và vừa (bao gồm cả doanh nghiệp siêu nhỏ) thuộc mọi lĩnh vực, mọi thành phần kinh tế theo quy định của pháp luật về hỗ trợ doanh nghiệp nhỏ và vừa.

### Điều 2. Phạm vi điều chỉnh
1. Thông tư này hướng dẫn nguyên tắc ghi sổ kế toán, lập và trình bày Báo cáo tài chính của doanh nghiệp nhỏ và vừa.
2. Việc xác định nghĩa vụ thuế đối với ngân sách nhà nước được thực hiện theo quy định của pháp luật về thuế.

## TỔ CHỨC BỘ MÁY KẾ TOÁN

### Điều 7. Tổ chức công tác kế toán
1. Doanh nghiệp nhỏ và vừa phải tổ chức bộ máy kế toán phù hợp với quy mô và đặc điểm hoạt động kinh doanh.
2. Có thể bố trí người làm kế toán bán thời gian hoặc thuê dịch vụ làm kế toán.

### Điều 8. Hệ thống tài khoản
Hệ thống tài khoản kế toán áp dụng cho doanh nghiệp nhỏ và vừa được thiết kế đơn giản hóa, phù hợp với yêu cầu quản lý và trình độ của nhân sự kế toán tại các đơn vị này.`,
    category: 'thong-tu',
    issued_date: '2016-08-26',
    effective_date: '2017-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Thong-tu-133-2016-TT-BTC-che-do-ke-toan-doanh-nghiep-nho-va-vua-322040.aspx'
  },
  {
    id: 'nd-123-2020',
    decree_number: '123/2020/NĐ-CP',
    title: 'Nghị định 123/2020/NĐ-CP Quy định về hóa đơn, chứng từ',
    summary: 'Quy định về việc quản lý, sử dụng hóa đơn khi bán hàng hóa, cung cấp dịch vụ; việc quản lý, sử dụng chứng từ khi thực hiện các thủ tục về thuế, thu phí, lệ phí.',
    content: `## CHƯƠNG I: QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Nghị định này quy định về việc quản lý, sử dụng hóa đơn khi bán hàng hóa, cung cấp dịch vụ; việc quản lý, sử dụng chứng từ khi thực hiện các thủ tục về thuế, thu phí, lệ phí và nhiệm vụ, quyền hạn của cơ quan quản lý thuế các cấp và các cơ quan, tổ chức có liên quan.

### Điều 2. Đối tượng áp dụng
1. Tổ chức, cá nhân bán hàng hóa, cung cấp dịch vụ.
2. Tổ chức, cá nhân mua hàng hóa, dịch vụ.
3. Tổ chức cung cấp dịch vụ hóa đơn điện tử.

### Điều 4. Nguyên tắc lập, quản lý, sử dụng hóa đơn, chứng từ
1. Khi bán hàng hóa, cung cấp dịch vụ, người bán phải lập hóa đơn để giao cho người mua theo định dạng chuẩn dữ liệu và phải ghi đầy đủ nội dung theo quy định.
2. Việc sử dụng hóa đơn, chứng từ phải bảo đảm tính toàn vẹn, bảo mật.

### Điều 9. Thời điểm lập hóa đơn
Thời điểm lập hóa đơn đối với bán hàng hóa là thời điểm chuyển giao quyền sở hữu hoặc quyền sử dụng hàng hóa cho người mua. Đối với cung cấp dịch vụ là thời điểm hoàn thành việc cung cấp dịch vụ.`,
    category: 'hoa-don',
    issued_date: '2020-10-19',
    effective_date: '2020-10-19',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-123-2020-ND-CP-Quy-dinh-ve-hoa-don-chung-tu-454942.aspx'
  },
  {
    id: 'tt-78-2021',
    decree_number: '78/2021/TT-BTC',
    title: 'Thông tư 78/2021/TT-BTC Hướng dẫn hóa đơn điện tử',
    summary: 'Hướng dẫn thực hiện một số điều của Luật Quản lý thuế, Nghị định 123/2020/NĐ-CP về hóa đơn, chứng từ.',
    content: `## QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Thông tư này hướng dẫn một số nội dung về hóa đơn, chứng từ theo quy định tại Luật Quản lý thuế số 38/2019/QH14 và Nghị định số 123/2020/NĐ-CP của Chính phủ.

### Điều 2. Đối tượng áp dụng
Đối tượng áp dụng theo quy định tại Điều 2 Nghị định số 123/2020/NĐ-CP ngày 19/10/2020 của Chính phủ quy định về hóa đơn, chứng từ.

### Điều 4. Ký hiệu mẫu số hóa đơn điện tử, ký hiệu hóa đơn điện tử
Ký hiệu mẫu số hóa đơn điện tử là ký tự có một chữ số tự nhiên là các số tự nhiên 1, 2, 3, 4, 5, 6 để phản ánh loại hóa đơn điện tử như: Hóa đơn giá trị gia tăng, hóa đơn bán hàng...

### Điều 5. Xử lý hóa đơn điện tử có sai sót
Trường hợp hóa đơn điện tử đã lập có sai sót phải cấp lại mã của cơ quan thuế hoặc hóa đơn điện tử có sai sót cần xử lý theo hình thức điều chỉnh hoặc thay thế thì người bán được lựa chọn sử dụng Mẫu số 04/SS-HĐĐT.`,
    category: 'hoa-don',
    issued_date: '2021-09-17',
    effective_date: '2022-07-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-78-2021-TT-BTC-huong-dan-thuc-hien-Luat-Quan-ly-thue-Nghi-dinh-123-2020-ND-CP-476717.aspx'
  },
  {
    id: 'nd-41-2018',
    decree_number: '41/2018/NĐ-CP',
    title: 'Nghị định 41/2018/NĐ-CP Xử phạt vi phạm hành chính kế toán',
    summary: 'Quy định về hành vi vi phạm hành chính, hình thức xử phạt, mức xử phạt, biện pháp khắc phục hậu quả trong lĩnh vực kế toán, kiểm toán độc lập.',
    content: `## CHƯƠNG I: NHỮNG QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Nghị định này quy định về hành vi vi phạm hành chính, thời hiệu xử phạt, hình thức xử phạt, mức xử phạt, các biện pháp khắc phục hậu quả, thẩm quyền lập biên bản và thẩm quyền xử phạt vi phạm hành chính trong lĩnh vực kế toán, kiểm toán độc lập.

### Điều 5. Mức phạt tiền
1. Mức phạt tiền tối đa đối với một hành vi vi phạm hành chính trong lĩnh vực kế toán, kiểm toán độc lập là 50.000.000 đồng đối với cá nhân và 100.000.000 đồng đối với tổ chức.
2. Phạt tiền từ 10.000.000 đến 20.000.000 đồng đối với hành vi giả mạo chứng từ kế toán, khai man tài liệu kế toán.

### Điều 8. Xử phạt hành vi vi phạm về chứng từ kế toán
1. Phạt tiền từ 3.000.000 đồng đến 5.000.000 đồng đối với một trong các hành vi:
a) Lập chứng từ kế toán không đủ số liên quy định.
b) Ký chứng từ kế toán khi chưa ghi đủ nội dung chứng từ.`,
    category: 'nghi-dinh',
    issued_date: '2018-03-12',
    effective_date: '2018-05-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Nghi-dinh-41-2018-ND-CP-xu-phat-vi-pham-hanh-chinh-trong-linh-vuc-ke-toan-kiem-toan-doc-lap-375932.aspx'
  },
  {
    id: 'nd-25-2017',
    decree_number: '25/2017/NĐ-CP',
    title: 'Nghị định 25/2017/NĐ-CP Báo cáo tài chính nhà nước',
    summary: 'Quy định về nội dung, việc lập, công khai báo cáo tài chính nhà nước; trách nhiệm của các cơ quan, đơn vị, địa phương trong việc cung cấp thông tin phục vụ việc lập báo cáo tài chính nhà nước.',
    content: `## CHƯƠNG I: NHỮNG QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Nghị định này quy định về nội dung, việc lập, công khai Báo cáo tài chính nhà nước; trách nhiệm của các cơ quan, đơn vị, địa phương trong việc cung cấp thông tin phục vụ việc lập Báo cáo tài chính nhà nước.

### Điều 2. Đối tượng áp dụng
1. Bộ Tài chính, Kho bạc Nhà nước các cấp.
2. Ủy ban nhân dân các cấp.
3. Cơ quan quản lý thu, chi ngân sách nhà nước.
4. Cơ quan, tổ chức quản lý quỹ tài chính nhà nước ngoài ngân sách.
5. Đơn vị dự toán cấp 1.

### Điều 3. Mục đích của Báo cáo tài chính nhà nước
Báo cáo tài chính nhà nước cung cấp thông tin về tình hình tài chính nhà nước, kết quả hoạt động tài chính nhà nước và lưu chuyển tiền tệ từ hoạt động tài chính nhà nước, phục vụ cho việc quản lý, điều hành và giám sát.`,
    category: 'nghi-dinh',
    issued_date: '2017-03-14',
    effective_date: '2017-03-14',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Nghi-dinh-25-2017-ND-CP-bao-cao-tai-chinh-nha-nuoc-342898.aspx'
  },
  {
    id: 'tt-53-2016',
    decree_number: '53/2016/TT-BTC',
    title: 'Thông tư 53/2016/TT-BTC Sửa đổi bổ sung TT 200',
    summary: 'Sửa đổi, bổ sung một số điều của Thông tư số 200/2014/TT-BTC ngày 22/12/2014 của Bộ Tài chính hướng dẫn Chế độ kế toán doanh nghiệp.',
    content: `## CÁC QUY ĐỊNH SỬA ĐỔI, BỔ SUNG

### Điều 1. Sửa đổi, bổ sung một số điều của Thông tư số 200/2014/TT-BTC
1. Sửa đổi, bổ sung tài khoản 128 - Đầu tư nắm giữ đến ngày đáo hạn, cụ thể về việc ghi nhận chứng chỉ tiền gửi và các khoản đầu tư tương tự.
2. Hướng dẫn chi tiết việc chuyển đổi số dư tài khoản khi doanh nghiệp có thay đổi đồng tiền hạch toán hoặc chuyển đổi hình thức sở hữu.

### Điều 2. Sửa đổi báo cáo lưu chuyển tiền tệ
Bổ sung hướng dẫn cách phân loại một số dòng tiền liên quan đến các khoản đầu tư ngắn hạn và giao dịch nội bộ.

### Điều 3. Tổ chức thực hiện
Thông tư này có hiệu lực thi hành kể từ ngày ký. Các doanh nghiệp áp dụng ngay cho năm tài chính hiện hành.`,
    category: 'thong-tu',
    issued_date: '2016-03-21',
    effective_date: '2016-03-21',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Thong-tu-53-2016-TT-BTC-sua-doi-Thong-tu-200-2014-TT-BTC-huong-dan-Che-do-ke-toan-doanh-nghiep-306915.aspx'
  },
  {
    id: 'tt-75-2015',
    decree_number: '75/2015/TT-BTC',
    title: 'Thông tư 75/2015/TT-BTC Sửa đổi Điều 128 TT 200',
    summary: 'Sửa đổi, bổ sung Điều 128 Thông tư 200/2014/TT-BTC ngày 22/12/2014 của Bộ Tài chính hướng dẫn Chế độ kế toán doanh nghiệp.',
    content: `## NỘI DUNG SỬA ĐỔI

### Điều 1. Sửa đổi khoản 3 Điều 128
Việc hạch toán các giao dịch liên quan đến tỷ giá hối đoái đối với các khoản mục tiền tệ có gốc ngoại tệ được điều chỉnh để phản ánh sát thực tế biến động thị trường. Cụ thể, các khoản lỗ tỷ giá hối đoái chưa thực hiện tại thời điểm lập báo cáo tài chính sẽ được xử lý linh hoạt hơn cho các doanh nghiệp xây lắp.

### Điều 2. Hướng dẫn áp dụng tỷ giá giao dịch thực tế
Bổ sung các quy định về việc sử dụng tỷ giá mua, tỷ giá bán của ngân hàng thương mại nơi doanh nghiệp mở tài khoản để hạch toán các khoản doanh thu, chi phí.

### Điều 3. Hiệu lực thi hành
Thông tư này có hiệu lực kể từ ngày ký và áp dụng cho báo cáo tài chính của năm tài chính kết thúc gần nhất.`,
    category: 'thong-tu',
    issued_date: '2015-05-18',
    effective_date: '2015-05-18',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Thong-tu-75-2015-TT-BTC-sua-doi-Thong-tu-200-2014-TT-BTC-huong-dan-che-do-ke-toan-doanh-nghiep-275151.aspx'
  },
  {
    id: 'tt-107-2017',
    decree_number: '107/2017/TT-BTC',
    title: 'Thông tư 107/2017/TT-BTC Chế độ kế toán hành chính sự nghiệp',
    summary: 'Hướng dẫn chế độ kế toán hành chính, sự nghiệp áp dụng cho cơ quan nhà nước, đơn vị sự nghiệp công lập, tổ chức chính trị, tổ chức chính trị - xã hội.',
    content: `## QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Thông tư này hướng dẫn danh mục biểu mẫu và phương pháp lập chứng từ kế toán; hệ thống tài khoản kế toán; danh mục sổ và phương pháp lập sổ kế toán; biểu mẫu và phương pháp lập Báo cáo tài chính, Báo cáo quyết toán áp dụng cho các đơn vị hành chính, sự nghiệp.

### Điều 2. Đối tượng áp dụng
Cơ quan nhà nước, đơn vị sự nghiệp công lập (trừ các đơn vị sự nghiệp công lập tự đảm bảo chi thường xuyên và chi đầu tư), tổ chức chính trị, tổ chức chính trị - xã hội, tổ chức chính trị xã hội - nghề nghiệp, tổ chức xã hội, tổ chức xã hội - nghề nghiệp.

### Điều 3. Nguyên tắc hạch toán
Kế toán hành chính sự nghiệp phải thực hiện hạch toán theo nguyên tắc kế toán dồn tích (tuy nhiên một số khoản mục thu, chi ngân sách vẫn được theo dõi theo cơ sở tiền mặt để lập báo cáo quyết toán).`,
    category: 'thong-tu',
    issued_date: '2017-10-10',
    effective_date: '2018-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Thong-tu-107-2017-TT-BTC-huong-dan-Che-do-ke-toan-hanh-chinh-su-nghiep-364713.aspx'
  },
  {
    id: 'tt-45-2013',
    decree_number: '45/2013/TT-BTC',
    title: 'Thông tư 45/2013/TT-BTC Quản lý, sử dụng và trích khấu hao TSCĐ',
    summary: 'Hướng dẫn chế độ quản lý, sử dụng và trích khấu hao tài sản cố định đối với cơ quan nhà nước, đơn vị sự nghiệp công lập và các tổ chức có sử dụng ngân sách nhà nước.',
    content: `## QUY ĐỊNH CHUNG VỀ TÀI SẢN CỐ ĐỊNH

### Điều 1. Phạm vi điều chỉnh
Thông tư này hướng dẫn chế độ quản lý, sử dụng và trích khấu hao tài sản cố định (TSCĐ) áp dụng cho các doanh nghiệp được thành lập và hoạt động tại Việt Nam.

### Điều 3. Tiêu chuẩn nhận biết TSCĐ
1. Tư liệu lao động là những tài sản hữu hình có kết cấu độc lập, hoặc là một hệ thống gồm nhiều bộ phận tài sản riêng lẻ liên kết với nhau để cùng thực hiện một hay một số chức năng nhất định, thoả mãn đồng thời cả ba tiêu chuẩn:
- Chắc chắn thu được lợi ích kinh tế trong tương lai;
- Có thời gian sử dụng trên 1 năm trở lên;
- Nguyên giá tài sản phải được xác định một cách tin cậy và có giá trị từ 30.000.000 đồng (Ba mươi triệu đồng) trở lên.

### Điều 9. Nguyên tắc trích khấu hao TSCĐ
Tất cả TSCĐ hiện có của doanh nghiệp đều phải trích khấu hao, trừ những tài sản đã khấu hao hết giá trị nhưng vẫn còn sử dụng, tài sản không tham gia vào hoạt động sản xuất kinh doanh.`,
    category: 'thong-tu',
    issued_date: '2013-04-25',
    effective_date: '2013-05-10',
    status: 'amended',
    source_url: 'https://thuvienphapluat.vn/van-ban/Doanh-nghiep/Thong-tu-45-2013-TT-BTC-che-do-quan-ly-su-dung-va-trich-khau-hao-tai-san-co-dinh-183424.aspx'
  },
  {
    id: 'nd-132-2020',
    decree_number: '132/2020/NĐ-CP',
    title: 'Nghị định 132/2020/NĐ-CP Quản lý thuế giao dịch liên kết',
    summary: 'Quy định nguyên tắc, phương pháp, trình tự xác định yếu tố hình thành giá giao dịch liên kết; quyền và nghĩa vụ của người nộp thuế trong kê khai, xác định giá giao dịch liên kết.',
    content: `## QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Nghị định này quy định nguyên tắc, phương pháp, trình tự xác định yếu tố hình thành giá giao dịch liên kết; quyền và nghĩa vụ của người nộp thuế trong kê khai, xác định giá giao dịch liên kết; trách nhiệm của các cơ quan nhà nước trong quản lý thuế đối với người nộp thuế có phát sinh giao dịch liên kết.

### Điều 2. Đối tượng áp dụng
Tổ chức sản xuất, kinh doanh hàng hóa, dịch vụ là người nộp thuế thu nhập doanh nghiệp có phát sinh giao dịch với các bên có quan hệ liên kết theo quy định tại Điều 5 Nghị định này.

### Điều 5. Các bên có quan hệ liên kết
Các bên có quan hệ liên kết là các bên tham gia trực tiếp hoặc gián tiếp vào việc điều hành, kiểm soát, góp vốn hoặc đầu tư vào bên kia; hoặc các bên cùng chịu sự điều hành, kiểm soát, góp vốn trực tiếp hoặc gián tiếp của một bên khác.

### Điều 16. Khấu trừ chi phí lãi vay
Tổng chi phí lãi vay phát sinh trong kỳ của người nộp thuế được trừ khi xác định thu nhập chịu thuế thu nhập doanh nghiệp không vượt quá 30% của tổng lợi nhuận thuần từ hoạt động kinh doanh cộng chi phí lãi vay, chi phí khấu hao trong kỳ (EBITDA).`,
    category: 'thue',
    issued_date: '2020-11-05',
    effective_date: '2020-12-20',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-132-2020-ND-CP-quan-ly-thue-doi-voi-doanh-nghiep-co-giao-dich-lien-ket-457317.aspx'
  },
  {
    id: 'tt-39-2014',
    decree_number: '39/2014/TT-BTC',
    title: 'Thông tư 39/2014/TT-BTC Hướng dẫn hóa đơn bán hàng',
    summary: 'Hướng dẫn thi hành Nghị định số 51/2010/NĐ-CP và Nghị định số 04/2014/NĐ-CP quy định về hóa đơn bán hàng hóa, cung ứng dịch vụ.',
    content: `## QUY ĐỊNH CHUNG

### Điều 1. Phạm vi điều chỉnh
Thông tư này hướng dẫn về việc in, phát hành, sử dụng hóa đơn bán hàng hóa, cung ứng dịch vụ; xử phạt vi phạm hành chính về hóa đơn; nhiệm vụ, quyền hạn của cơ quan quản lý thuế và cơ quan liên quan.

### Điều 3. Loại và hình thức hóa đơn
1. Hóa đơn giá trị gia tăng (mẫu số 01GTKT).
2. Hóa đơn bán hàng (mẫu số 02GTTT).
3. Hóa đơn khác gồm: tem; vé; thẻ; phiếu thu tiền bảo hiểm...
Hóa đơn được thể hiện dưới các hình thức: Hóa đơn tự in, hóa đơn đặt in, hóa đơn điện tử.

### Điều 16. Lập hóa đơn
1. Nguyên tắc lập hóa đơn: Tổ chức, cá nhân khi bán hàng hóa, cung ứng dịch vụ phải lập hóa đơn cho người mua; hóa đơn phải ghi đầy đủ nội dung theo quy định.
2. Tiêu thức ngày tháng năm lập hóa đơn: Ghi ngày, tháng, năm bán hàng hóa, cung ứng dịch vụ.`,
    category: 'hoa-don',
    issued_date: '2014-03-31',
    effective_date: '2014-06-01',
    status: 'expired',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-39-2014-TT-BTC-huong-dan-Nghi-dinh-51-2010-ND-CP-04-2014-ND-CP-hoa-don-ban-hang-224419.aspx'
  },
  {
    id: 'vas-01',
    decree_number: 'VAS 01',
    title: 'Chuẩn mực kế toán số 01 - Chuẩn mực chung',
    summary: 'Quy định và hướng dẫn các nguyên tắc, yêu cầu kế toán cơ bản làm cơ sở để xây dựng và áp dụng các chuẩn mực kế toán và chế độ kế toán cụ thể.',
    content: `## QUY ĐỊNH CHUNG

### 1. Mục đích của chuẩn mực
Chuẩn mực này quy định và hướng dẫn các nguyên tắc và yêu cầu kế toán cơ bản làm cơ sở để xây dựng và áp dụng các chuẩn mực kế toán và chế độ kế toán.

### 2. Các nguyên tắc kế toán cơ bản
**Cơ sở dồn tích**
Mọi nghiệp vụ kinh tế, tài chính của doanh nghiệp liên quan đến tài sản, nợ phải trả, nguồn vốn chủ sở hữu, doanh thu, chi phí phải được ghi sổ kế toán vào thời điểm phát sinh, không căn cứ vào thời điểm thực tế thu hoặc thực tế chi tiền.

**Hoạt động liên tục**
Báo cáo tài chính phải được lập trên cơ sở giả định là doanh nghiệp đang hoạt động liên tục và sẽ tiếp tục hoạt động kinh doanh bình thường trong tương lai gần.

**Giá gốc**
Tài sản phải được ghi nhận theo giá gốc. Giá gốc của tài sản được tính theo số tiền hoặc khoản tương đương tiền đã trả, phải trả hoặc tính theo giá trị hợp lý của tài sản đó vào thời điểm tài sản được ghi nhận.

**Phù hợp**
Việc ghi nhận doanh thu và chi phí phải phù hợp với nhau. Khi ghi nhận một khoản doanh thu thì phải ghi nhận một khoản chi phí tương ứng có liên quan đến việc tạo ra doanh thu đó.

### 3. Yêu cầu cơ bản đối với kế toán
- Trung thực
- Khách quan
- Đầy đủ
- Kịp thời
- Dễ hiểu
- Có thể so sánh được`,
    category: 'chuan-muc',
    issued_date: '2002-12-31',
    effective_date: '2003-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Quyet-dinh-165-2002-QD-BTC-chuan-muc-ke-toan-Viet-Nam-Dot-2-51000.aspx'
  }
];
