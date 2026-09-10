// src/data/legal-manifest.ts
// Danh mục toàn bộ 12 văn bản quy phạm pháp luật Y Tế, Đấu Thầu & Quản lý Phòng Khám
// Tuân thủ 100% RULE L03: Chỉ dùng hethongphapluat.com hoặc drive nội bộ Kiểu Việt

export interface LegalArticle {
  articleNumber: string;
  title: string;
  content: string;
  practicalImpact: string;
}

export interface LegalDocItem {
  id: string;
  docNumber: string;
  title: string;
  category: 'medical_device' | 'bidding' | 'clinic_insurance' | 'tax_finance';
  issuer: string;
  issueDate: string;
  effectiveDate: string;
  status: 'active' | 'amended' | 'transition';
  summary: string;
  officialUrl: string;
  driveFolderId: string;
  practicalTakeaway: string;
  articles: LegalArticle[];
}

export const LEGAL_MANIFEST: LegalDocItem[] = [
  {
    id: 'vbhn-08-2026',
    docNumber: '08/VBHN-BYT',
    title: 'Văn bản hợp nhất Nghị định về quản lý trang thiết bị y tế (06/03/2026)',
    category: 'medical_device',
    issuer: 'Bộ Y tế',
    issueDate: '2026-03-06',
    effectiveDate: '2026-03-06',
    status: 'active',
    summary: 'Văn bản hợp nhất 119 trang quy định toàn diện về phân loại A/B/C/D, số lưu hành, cấp phép nhập khẩu, kê khai giá và thu hồi TBYT.',
    officialUrl: 'https://hethongphapluat.com/van-ban-hop-nhat-08-vbhn-byt-nam-2026-hop-nhat-nghi-dinh-ve-quan-ly-thiet-bi-y-te-do-bo-y-te-ban-hanh.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Nền tảng kiểm tra số lưu hành Loại A/B do Sở Y tế tiếp nhận và Loại C/D do Bộ Y tế cấp phép. Bắt buộc kiểm tra thời hạn hiệu lực trước ngày nộp E-HSDT.',
    articles: [
      {
        articleNumber: 'Điều 1',
        title: 'Phạm vi điều chỉnh',
        content: 'Nghị định này quy định việc quản lý trang thiết bị y tế bao gồm: phân loại trang thiết bị y tế; sản xuất, nghiên cứu thử nghiệm lâm sàng, lưu hành, mua bán, xuất khẩu, nhập khẩu, cung cấp dịch vụ trang thiết bị y tế; thông tin, quảng cáo trang thiết bị y tế; quản lý giá trang thiết bị y tế và quản lý, sử dụng trang thiết bị y tế tại các cơ sở y tế.',
        practicalImpact: 'Phạm vi bao quát toàn bộ hoạt động kinh doanh, cung cấp thiết bị của Kiểu Việt và vận hành chẩn đoán tại Phòng khám Hòa Đức.'
      },
      {
        articleNumber: 'Điều 2',
        title: 'Giải thích từ ngữ',
        content: 'Trang thiết bị y tế là các loại thiết bị, dụng cụ, vật liệu, chất cấy ghép, thuốc thử và chất hiệu chuẩn in vitro, phần mềm (software) đáp ứng các điều kiện: sử dụng riêng lẻ hoặc kết hợp theo chỉ định của chủ sở hữu nhằm chẩn đoán, ngăn ngừa, theo dõi, điều trị hoặc giảm nhẹ bệnh tật, bù đắp tổn thương.',
        practicalImpact: 'Phần mềm quản lý chẩn đoán hình ảnh và hóa chất xét nghiệm in vitro tại Hòa Đức đều là TBYT theo luật định, bắt buộc kiểm soát số lưu hành.'
      },
      {
        articleNumber: 'Điều 4',
        title: 'Nguyên tắc phân loại trang thiết bị y tế',
        content: 'Trang thiết bị y tế gồm 2 nhóm được phân làm 4 loại dựa trên mức độ rủi ro tiềm ẩn liên quan đến thiết kế kỹ thuật và sản xuất: Nhóm 1 gồm Trang thiết bị y tế thuộc loại A (mức độ rủi ro thấp); Nhóm 2 gồm Trang thiết bị y tế thuộc loại B (mức độ rủi ro trung bình thấp), loại C (mức độ rủi ro trung bình cao), loại D (mức độ rủi ro cao).',
        practicalImpact: 'Kiểu Việt và Phòng khám Hòa Đức phải lưu giữ Bản kết quả phân loại rủi ro do cơ sở đủ điều kiện công bố cấp trước khi đưa máy vào vận hành hoặc dự thầu.'
      },
      {
        articleNumber: 'Điều 21',
        title: 'Hồ sơ công bố tiêu chuẩn áp dụng đối với TBYT thuộc loại A, B',
        content: 'Hồ sơ gồm: 1. Văn bản công bố tiêu chuẩn áp dụng; 2. Giấy chứng nhận đạt tiêu chuẩn quản lý chất lượng ISO 13485 còn hiệu lực; 3. Giấy ủy quyền của chủ sở hữu TBYT cho cơ sở thực hiện công bố; 4. Giấy xác nhận đủ điều kiện bảo hành do chủ sở hữu cấp; 5. Tài liệu mô tả tóm tắt kỹ thuật bằng tiếng Việt; 6. Giấy chứng nhận lưu hành tự do (CFS) hợp pháp hóa lãnh sự.',
        practicalImpact: 'Kiểm tra đủ bộ 6 chứng từ bắt buộc cho các thiết bị chẩn đoán loại A, B tại Hòa Đức và khi lập E-HSDT.'
      },
      {
        articleNumber: 'Điều 26',
        title: 'Hồ sơ đề nghị cấp số lưu hành đối với TBYT thuộc loại C, D',
        content: 'Hồ sơ gồm: Văn bản đề nghị cấp mới; Giấy chứng nhận ISO 13485; Giấy ủy quyền của chủ sở hữu; Giấy chứng nhận lưu hành tự do (CFS) của nước sản xuất hoặc nước xuất khẩu; Hồ sơ kỹ thuật chung ASEAN (CSDT) hoặc hồ sơ tóm tắt kỹ thuật; Tài liệu hướng dẫn sử dụng; Mẫu nhãn sẽ lưu hành tại Việt Nam.',
        practicalImpact: 'Đối với các dòng máy xét nghiệm tự động Cobas c502, Sysmex XN-550 loại C/D, bắt buộc phải có Giấy phép lưu hành Bộ Y tế còn hiệu lực tối thiểu 6 tháng tại thời điểm mở thầu.'
      },
      {
        articleNumber: 'Điều 44',
        title: 'Kê khai giá trang thiết bị y tế',
        content: 'Chủ sở hữu số lưu hành hoặc cơ sở phân phối được ủy quyền có trách nhiệm kê khai giá TBYT trên Cổng thông tin điện tử của Bộ Y tế trước khi lưu thông tại Việt Nam và cập nhật khi có thay đổi giá. Giá kê khai bao gồm giá vốn, các chi phí hợp lý và lợi nhuận dự kiến.',
        practicalImpact: 'Kiểu Việt tuyệt đối không dự thầu giá cao hơn giá đã kê khai công khai trên Cổng BYT để tránh bị loại thầu hoặc xử phạt.'
      },
      {
        articleNumber: 'Điều 48',
        title: 'Điều kiện của cơ sở mua bán trang thiết bị y tế',
        content: 'Cơ sở mua bán TBYT thuộc loại B, C, D phải có ít nhất 01 nhân viên kỹ thuật có trình độ cao đẳng chuyên ngành kỹ thuật, y, dược trở lên; có kho bảo quản và phương tiện vận chuyển đáp ứng yêu cầu theo hướng dẫn của chủ sở hữu.',
        practicalImpact: 'Công ty Kiểu Việt đã thực hiện thủ tục công bố đủ điều kiện mua bán TBYT B, C, D tại Sở Y tế Bình Định.'
      },
      {
        articleNumber: 'Điều 53',
        title: 'Quản lý, sử dụng trang thiết bị y tế tại cơ sở y tế',
        content: 'Cơ sở y tế có trách nhiệm: Lập hồ sơ theo dõi, quản lý trang thiết bị y tế; Sử dụng, vận hành TBYT theo đúng hướng dẫn của chủ sở hữu; Định kỳ bảo dưỡng, bảo trì, kiểm định, hiệu chuẩn theo quy định của pháp luật và của nhà sản xuất.',
        practicalImpact: 'Phòng khám Hòa Đức bắt buộc lập Sổ nhật ký vận hành, bảo dưỡng định kỳ và lưu trữ hồ sơ kiểm định an toàn bức xạ cho dàn máy X-quang.'
      }
    ]
  },
  {
    id: 'tt-24-2026',
    docNumber: '24/2026/TT-BYT',
    title: 'Quy định xác định mức độ rủi ro, biện pháp quản lý và sửa đổi TT 05/2022/TT-BYT',
    category: 'medical_device',
    issuer: 'Bộ Y tế',
    issueDate: '2026-06-30',
    effectiveDate: '2026-07-01',
    status: 'active',
    summary: 'Quy định lộ trình kiểm định an toàn kỹ thuật thiết bị y tế; phân biệt rõ mốc mua trước 01/07/2027 và mua sau 30/06/2027.',
    officialUrl: 'https://hethongphapluat.com/thong-tu-24-2026-tt-byt-quy-dinh-ve-xac-dinh-muc-do-rui-ro-bien-phap-quan-ly-doi-voi-san-pham-hang-hoa-la-thiet-bi-y-te-va-sua-doi-thong-tu-05-2022-tt-byt-huong-dan-nghi-dinh-98-2021-nd-cp-ve-quan-ly-thiet-bi-y-te-do-bo-truong-bo-y-te-ban-hanh.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Tách bạch giữa ngày hiệu lực thông tư (01/07/2026) và mốc kiểm định an toàn bắt buộc (hoàn thành trước 01/01/2028 cho thiết bị mua trước 01/07/2027).',
    articles: [
      {
        articleNumber: 'Điều 1',
        title: 'Phạm vi điều chỉnh',
        content: 'Thông tư này quy định chi tiết về việc xác định mức độ rủi ro và các biện pháp quản lý tương ứng đối với sản phẩm, hàng hóa là trang thiết bị y tế; danh mục và lộ trình kiểm định an toàn, tính năng kỹ thuật của trang thiết bị y tế.',
        practicalImpact: 'Là căn cứ pháp lý để xây dựng ma trận tuân thủ kỹ thuật cho các gói thầu bệnh viện tỉnh Gia Lai và Bình Định.'
      },
      {
        articleNumber: 'Điều 3',
        title: 'Lộ trình thực hiện kiểm định an toàn và tính năng kỹ thuật',
        content: '1. Đối với trang thiết bị y tế thuộc danh mục quy định tại Điều 5 mua sắm trước ngày 01 tháng 7 năm 2027 phải hoàn thành việc kiểm định trước ngày 01 tháng 01 năm 2028.\n2. Đối với trang thiết bị y tế mua sắm từ ngày 01 tháng 7 năm 2027 phải được kiểm định trước khi đưa vào sử dụng lần đầu.',
        practicalImpact: 'Dàn máy xét nghiệm Cobas và X-quang tại Hòa Đức mua trước mốc 01/07/2027 có hạn hoàn thành kiểm định trước 01/01/2028; không bị coi là vi phạm ngay trong năm 2026.'
      },
      {
        articleNumber: 'Điều 4',
        title: 'Hiệu lực thi hành',
        content: 'Thông tư này có hiệu lực thi hành kể từ ngày 01 tháng 7 năm 2026. Bãi bỏ các quy định trước đây trái với Thông tư này.',
        practicalImpact: 'Từ 01/07/2026, mọi E-HSMT phát hành phải áp dụng tiêu chuẩn theo Thông tư 24/2026/TT-BYT.'
      },
      {
        articleNumber: 'Điều 5',
        title: 'Danh mục trang thiết bị y tế phải kiểm định an toàn kỹ thuật',
        content: 'Bao gồm 8 nhóm: 1. Máy thở; 2. Máy gây mê kèm thở; 3. Máy phá rung tim; 4. Máy theo dõi bệnh nhân (Patient monitor); 5. Dao mổ điện; 6. Lồng ấp trẻ sơ sinh; 7. Máy thận nhân tạo; 8. Máy chụp X-quang chẩn đoán y tế.',
        practicalImpact: 'Máy X-quang Carestream DR của Kiểu Việt và Hòa Đức thuộc danh mục bắt buộc kiểm định an toàn bức xạ và an toàn kỹ thuật định kỳ 12 tháng/lần.'
      },
      {
        articleNumber: 'Điều 6',
        title: 'Trách nhiệm của cơ sở kiểm định và chủ sở hữu thiết bị',
        content: 'Tổ chức kiểm định phải được chỉ định bởi cơ quan có thẩm quyền. Khi hoàn thành kiểm định đạt yêu cầu, phải cấp Giấy chứng nhận kiểm định và dán Tem kiểm định lên trang thiết bị y tế.',
        practicalImpact: 'Hồ sơ nghiệm thu A-B với bệnh viện bắt buộc có Giấy chứng nhận và Tem kiểm định còn hiệu lực.'
      }
    ]
  },
  {
    id: 'tt-57-2025',
    docNumber: '57/2025/TT-BYT',
    title: 'Hướng dẫn phân nhóm thiết bị y tế theo tiêu chuẩn kỹ thuật, chất lượng trong đấu thầu',
    category: 'bidding',
    issuer: 'Bộ Y tế',
    issueDate: '2025-12-31',
    effectiveDate: '2026-02-15',
    status: 'active',
    summary: 'Quy định phân 6 nhóm kỹ thuật/chất lượng thiết bị y tế dự thầu (Nhóm 1 đến Nhóm 6), tách biệt với phân loại rủi ro A/B/C/D.',
    officialUrl: 'https://hethongphapluat.com/thong-tu-57-2025-tt-byt-huong-dan-ve-phan-nhom-thiet-bi-y-te-theo-tieu-chuan-ky-thuat-chat-luong-do-bo-truong-bo-y-te-ban-hanh.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Phân nhóm kỹ thuật quyết định khả năng dự thầu vào từng phần của gói thầu bệnh viện. Hàng xuất xứ G7/EU có CFS uy tín được xếp Nhóm 1.',
    articles: [
      {
        articleNumber: 'Điều 1',
        title: 'Phạm vi điều chỉnh',
        content: 'Thông tư này hướng dẫn về việc phân nhóm trang thiết bị y tế theo tiêu chuẩn kỹ thuật, chất lượng để phục vụ việc lập hồ sơ mời thầu, hồ sơ yêu cầu và đánh giá hồ sơ dự thầu, hồ sơ đề xuất.',
        practicalImpact: 'Áp dụng bắt buộc cho tất cả các gói thầu mua sắm TBYT tại các bệnh viện công lập Kiểu Việt đang tham gia dự thầu.'
      },
      {
        articleNumber: 'Điều 3',
        title: 'Nguyên tắc phân nhóm trang thiết bị y tế',
        content: '1. Việc phân nhóm dựa trên xuất xứ sản xuất, tiêu chuẩn quản lý chất lượng (ISO 13485, GMP), giấy chứng nhận lưu hành tự do (CFS) của cơ quan quản lý nghiêm ngặt (US FDA, CE Mark, TGA, Health Canada, MHLW Nhật Bản).\n2. Trang thiết bị y tế thuộc nhóm có yêu cầu tiêu chuẩn kỹ thuật cao hơn được phép tham dự thầu vào nhóm có yêu cầu thấp hơn.',
        practicalImpact: 'Thiết bị Nhóm 1 của Kiểu Việt được phép dự thầu vào tất cả các gói thầu mời Nhóm 1, 2, 3, 4, 5, 6 mà không bị loại.'
      },
      {
        articleNumber: 'Điều 4',
        title: 'Tiêu chuẩn phân nhóm 1',
        content: 'Trang thiết bị y tế đáp ứng đồng thời: Được sản xuất tại nước thuộc G7 hoặc EU; Có Giấy chứng nhận lưu hành tự do (CFS) do cơ quan quản lý có thẩm quyền của nước thuộc G7 hoặc EU cấp; Cơ sở sản xuất đạt tiêu chuẩn ISO 13485.',
        practicalImpact: 'Hệ thống Hóa sinh Cobas c502 (Roche - Đức/Thụy Sĩ) và Huyết học Sysmex XN-550 (Nhật Bản) đạt chuẩn Nhóm 1 cao nhất.'
      },
      {
        articleNumber: 'Điều 5',
        title: 'Tiêu chuẩn phân nhóm 2',
        content: 'Trang thiết bị y tế được sản xuất tại các nước thành viên PIC/S hoặc ICH; Có CFS hợp lệ; Đạt tiêu chuẩn chất lượng ISO 13485.',
        practicalImpact: 'Dành cho các thiết bị xuất xứ Hàn Quốc, Đài Loan hoặc các nước phát triển ngoài khối G7.'
      },
      {
        articleNumber: 'Điều 6',
        title: 'Tiêu chuẩn phân nhóm 3 (Sản xuất tại Việt Nam)',
        content: 'Trang thiết bị y tế được sản xuất tại Việt Nam tại cơ sở đạt tiêu chuẩn ISO 13485 và có số lưu hành còn hiệu lực.',
        practicalImpact: 'Kiểu Việt ưu tiên kết nối với các nhà sản xuất nội địa vật tư tiêu hao để tham gia gói thầu ưu đãi hàng Việt Nam.'
      },
      {
        articleNumber: 'Điều 8',
        title: 'Hiệu lực và điều khoản chuyển tiếp',
        content: 'Thông tư có hiệu lực từ ngày 15/02/2026. Đối với các gói thầu đã phát hành E-HSMT trước ngày có hiệu lực thì tiếp tục thực hiện theo quy định cũ.',
        practicalImpact: 'Các gói thầu mở sau 15/02/2026 bắt buộc phân nhóm theo TT 57/2025/TT-BYT.'
      }
    ]
  },
  {
    id: 'nd-214-2025',
    docNumber: '214/2025/NĐ-CP',
    title: 'Nghị định quy định chi tiết thi hành Luật Đấu thầu về lựa chọn nhà thầu (Thay thế NĐ 24/2024)',
    category: 'bidding',
    issuer: 'Chính phủ',
    issueDate: '2025-08-04',
    effectiveDate: '2025-08-04',
    status: 'active',
    summary: 'Nghị định quy định quy trình đấu thầu qua mạng mới, bãi bỏ hoàn toàn NĐ 24/2024/NĐ-CP; quy chuẩn làm rõ E-HSMT và bảo lãnh điện tử.',
    officialUrl: 'https://hethongphapluat.com/nghi-dinh-214-2025-nd-cp-huong-dan-luat-dau-thau-ve-lua-chon-nha-thau.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Nắm vững quy trình làm rõ E-HSMT tối thiểu 03 ngày làm việc trước đóng thầu và yêu cầu bảo lãnh dự thầu điện tử tích hợp ngân hàng.',
    articles: [
      {
        articleNumber: 'Điều 24',
        title: 'Quy trình đấu thầu rộng rãi qua mạng một giai đoạn một túi hồ sơ',
        content: 'Quy trình gồm: 1. Chuẩn bị lựa chọn nhà thầu; 2. Tổ chức lựa chọn nhà thầu (phát hành, sửa đổi, làm rõ E-HSMT, nộp E-HSDT); 3. Mở thầu và đánh giá E-HSDT trên Hệ thống; 4. Thương thảo hợp đồng (nếu có); 5. Thẩm định, phê duyệt và công khai kết quả lựa chọn nhà thầu; 6. Hoàn thiện, ký kết hợp đồng.',
        practicalImpact: 'Toàn bộ bước nộp hồ sơ của Kiểu Việt thực hiện 100% online trên Hệ thống mạng đấu thầu quốc gia (muasamcong.mpi.gov.vn).'
      },
      {
        articleNumber: 'Điều 30',
        title: 'Làm rõ và sửa đổi E-HSMT',
        content: 'Trường hợp E-HSMT có các nội dung không rõ ràng hoặc có dấu hiệu hạn chế sự tham gia của nhà thầu, nhà thầu gửi văn bản yêu cầu làm rõ trên Hệ thống tối thiểu 03 ngày làm việc trước ngày có thời điểm đóng thầu.',
        practicalImpact: 'Kiểu Việt chủ động soi thông số cài cắm để gửi Mẫu T05 (Văn bản làm rõ E-HSMT) đúng thời hạn luật định.'
      },
      {
        articleNumber: 'Điều 31',
        title: 'Bảo lãnh dự thầu điện tử',
        content: 'Nhà thầu thực hiện biện pháp bảo đảm dự thầu dưới hình thức thư bảo lãnh điện tử do tổ chức tín dụng trong nước hoặc chi nhánh ngân hàng nước ngoài phát hành, kết nối dữ liệu số trực tiếp với Hệ thống.',
        practicalImpact: 'Kiểu Việt sử dụng hạn mức bảo lãnh tại BIDV/VietinBank để phát hành thư bảo lãnh điện tử tự động khớp mã số định danh gói thầu.'
      },
      {
        articleNumber: 'Điều 32',
        title: 'Đánh giá tính hợp lệ và năng lực kinh nghiệm của E-HSDT',
        content: 'E-HSDT hợp lệ khi: Có bảo đảm dự thầu hợp lệ; Không có tên trong danh sách cấm tham gia; Tư cách pháp nhân hợp lệ; Báo cáo tài chính 03 năm gần nhất minh bạch và doanh thu bình quân đạt yêu cầu gói thầu.',
        practicalImpact: 'Kiểu Việt dùng BCTC kiểm toán 2023-2025 đáp ứng tiêu chí doanh thu và tỷ suất thanh toán hiện hành > 1.0.'
      }
    ]
  },
  {
    id: 'luat-22-2023',
    docNumber: '22/2023/QH15',
    title: 'Luật Đấu thầu năm 2023',
    category: 'bidding',
    issuer: 'Quốc hội',
    issueDate: '2023-06-23',
    effectiveDate: '2024-01-01',
    status: 'active',
    summary: 'Đạo luật nền tảng điều chỉnh toàn bộ hoạt động đấu thầu mua sắm công, chỉ định thầu, bảo đảm cạnh tranh và xử lý vi phạm.',
    officialUrl: 'https://hethongphapluat.com/luat-dau-thau-2023.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Nắm chắc Điều 16 về các hành vi bị cấm trong đấu thầu (thông thầu, chuyển nhượng thầu trái phép) để giữ uy tín tuyệt đối cho Kiểu Việt.',
    articles: [
      {
        articleNumber: 'Điều 5',
        title: 'Tư cách hợp lệ của nhà thầu, nhà đầu tư',
        content: 'Nhà thầu là tổ chức có tư cách hợp lệ khi đáp ứng: Có quyết định thành lập hoặc giấy chứng nhận đăng ký doanh nghiệp; Hạch toán tài chính độc lập; Không đang trong quá trình giải thể, phá sản; Không bị cấm tham gia hoạt động đấu thầu; Đã đăng ký trên Hệ thống mạng đấu thầu quốc gia.',
        practicalImpact: 'Kiểu Việt đảm bảo trạng thái tài khoản đấu thầu nộp phí duy trì đầy đủ hàng năm.'
      },
      {
        articleNumber: 'Điều 16',
        title: 'Các hành vi bị cấm trong hoạt động đấu thầu',
        content: 'Nghiêm cấm: 1. Đưa, nhận, môi giới hối lộ; 2. Lợi dụng chức vụ quyền hạn can thiệp bất hợp pháp; 3. Thông thầu; 4. Gian lận (làm giả hồ sơ, bằng cấp, chứng chỉ); 5. Cản trở; 6. Không bảo đảm công bằng, minh bạch; 7. Tiết lộ thông tin tài liệu gói thầu; 8. Chuyển nhượng thầu trái phép.',
        practicalImpact: 'Kiểu Việt tuyệt đối tuân thủ minh bạch hồ sơ, chỉ dự thầu bằng năng lực thực chất và hồ sơ pháp lý chính xác 100%.'
      },
      {
        articleNumber: 'Điều 43',
        title: 'Phương pháp đánh giá hồ sơ dự thầu mua sắm hàng hóa',
        content: 'Áp dụng phương pháp giá thấp nhất, phương pháp giá đánh giá hoặc phương pháp kết hợp giữa kỹ thuật và giá. Đối với thiết bị y tế công nghệ cao, khuyến khích áp dụng phương pháp kết hợp kỹ thuật - giá hoặc chi phí vòng đời thiết bị.',
        practicalImpact: 'Hồ sơ kỹ thuật của Kiểu Việt phải đạt điểm tối ưu để chiếm ưu thế trong phương pháp chấm điểm kết hợp.'
      }
    ]
  },
  {
    id: 'luat-15-2023',
    docNumber: '15/2023/QH15',
    title: 'Luật Khám bệnh, chữa bệnh năm 2023',
    category: 'clinic_insurance',
    issuer: 'Quốc hội',
    issueDate: '2023-01-09',
    effectiveDate: '2024-01-01',
    status: 'active',
    summary: 'Đạo luật điều chỉnh điều kiện hoạt động của Phòng khám đa khoa, giấy phép hành nghề của bác sĩ, quản lý hồ sơ bệnh án và an toàn người bệnh.',
    officialUrl: 'https://hethongphapluat.com/luat-kham-benh-chua-benh-nam-2023.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Phòng khám Đa khoa Hòa Đức tuân thủ đầy đủ điều kiện về nhân sự chuyên môn, giấy phép hoạt động và quy chế quản lý trang thiết bị phục vụ khám chữa bệnh.',
    articles: [
      {
        articleNumber: 'Điều 48',
        title: 'Điều kiện cấp giấy phép hoạt động đối với cơ sở khám bệnh, chữa bệnh',
        content: 'Cơ sở phải đáp ứng các điều kiện: 1. Quy mô, cơ sở vật chất, trang thiết bị y tế phù hợp với phạm vi hoạt động chuyên môn; 2. Cơ cấu tổ chức và nhân lực có giấy phép hành nghề phù hợp; 3. Người chịu trách nhiệm chuyên môn kỹ thuật phải có thời gian hành nghề khám bệnh, chữa bệnh tối thiểu theo quy định.',
        practicalImpact: 'Phòng khám Hòa Đức duy trì đầy đủ bác sĩ phụ trách các chuyên khoa Nội, Ngoại, Sản, Nhi, Chẩn đoán hình ảnh và Xét nghiệm.'
      },
      {
        articleNumber: 'Điều 60',
        title: 'Quản lý và sử dụng thiết bị y tế trong cơ sở khám bệnh, chữa bệnh',
        content: 'Thiết bị y tế sử dụng trong cơ sở khám bệnh, chữa bệnh phải có số lưu hành hợp lệ; được bảo dưỡng, kiểm định, hiệu chuẩn định kỳ; người vận hành phải được đào tạo và cấp chứng nhận sử dụng.',
        practicalImpact: 'Các kỹ thuật viên xét nghiệm và chẩn đoán hình ảnh tại Hòa Đức bắt buộc có chứng chỉ vận hành hệ thống Cobas và máy X-quang.'
      },
      {
        articleNumber: 'Điều 84',
        title: 'Tự chủ và hạch toán tài chính trong cơ sở y tế',
        content: 'Cơ sở khám bệnh, chữa bệnh tư nhân được quyền tự quyết định giá dịch vụ khám bệnh, chữa bệnh nhưng phải niêm yết công khai giá dịch vụ theo quy định của pháp luật về giá.',
        practicalImpact: 'Hòa Đức thực hiện niêm yết bảng giá công khai tại sảnh lễ tân và trên hệ thống phần mềm quản lý phòng khám (HIS).'
      }
    ]
  },
  {
    id: 'nd-132-2020',
    docNumber: '132/2020/NĐ-CP',
    title: 'Nghị định quy định về quản lý thuế đối với doanh nghiệp có giao dịch liên kết',
    category: 'tax_finance',
    issuer: 'Chính phủ',
    issueDate: '2020-11-05',
    effectiveDate: '2020-12-20',
    status: 'active',
    summary: 'Quy định quản lý thuế giao dịch liên kết, quan hệ sở hữu/điều hành giữa Kiểu Việt và Hòa Đức; khống chế trần chi phí lãi vay 30% EBITDA.',
    officialUrl: 'https://hethongphapluat.com/nghi-dinh-132-2020-nd-cp-quy-dinh-ve-quan-ly-thue-doi-voi-doanh-nghiep-co-giao-dich-lien-ket.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Hợp đồng mượn/thuê thiết bị y tế giữa Kiểu Việt và Hòa Đức phải lập Hồ sơ giao dịch liên kết theo nguyên tắc giá thị trường (Arm\'s length) và tính trần 30% EBITDA.',
    articles: [
      {
        articleNumber: 'Điều 5',
        title: 'Các bên có quan hệ liên kết',
        content: 'Các bên liên kết là các bên có mối quan hệ thuộc một trong các trường hợp: Một bên tham gia trực tiếp hoặc gián tiếp vào điều hành, kiểm soát, góp vốn vào bên kia; Hai bên cùng chịu sự điều hành, kiểm soát, góp vốn của một bên khác; Một doanh nghiệp bảo lãnh hoặc cho một doanh nghiệp khác vay vốn dưới bất kỳ hình thức nào với điều kiện khoản vốn vay ít nhất bằng 25% vốn góp của chủ sở hữu.',
        practicalImpact: 'Công ty Cổ phần Kiểu Việt và Phòng khám Hòa Đức là hai bên có quan hệ liên kết trực tiếp theo quy định tại Điểm a, l Khoản 2 Điều 5.'
      },
      {
        articleNumber: 'Điều 16',
        title: 'Xác định chi phí để tính thuế đối với doanh nghiệp có giao dịch liên kết (Trần 30% EBITDA)',
        content: 'Tổng chi phí lãi vay sau khi trừ lãi tiền gửi và lãi cho vay phát sinh trong kỳ của người nộp thuế được trừ khi xác định thu nhập chịu thuế TNDN không vượt quá 30% của tổng lợi nhuận thuần từ hoạt động kinh doanh trong kỳ cộng chi phí lãi vay sau khi trừ lãi tiền gửi và lãi cho vay phát sinh trong kỳ cộng chi phí khấu hao phát sinh trong kỳ (EBITDA).',
        practicalImpact: 'Phòng khám Hòa Đức và Kiểu Việt phải chạy công cụ tính trần 30% EBITDA hàng quý để kiểm soát chi phí lãi vay bị loại khi quyết toán TNDN.'
      },
      {
        articleNumber: 'Điều 18',
        title: 'Hồ sơ xác định giá giao dịch liên kết',
        content: 'Hồ sơ gồm: 1. Bản kê khai thông tin quan hệ liên kết và giao dịch liên kết (Mẫu 01); 2. Hồ sơ quốc gia (Local file); 3. Hồ sơ toàn cầu (Master file); 4. Báo cáo lợi nhuận liên quốc gia (CbCR) nếu thuộc đối tượng.',
        practicalImpact: 'Kế toán Kiểu Việt bắt buộc nộp Phụ lục I (Mẫu 01) kèm theo tờ khai quyết toán thuế TNDN hàng năm.'
      }
    ]
  },
  {
    id: 'tt-219-2013',
    docNumber: '219/2013/TT-BTC',
    title: 'Thông tư hướng dẫn thi hành Luật Thuế giá trị gia tăng',
    category: 'tax_finance',
    issuer: 'Bộ Tài chính',
    issueDate: '2013-12-31',
    effectiveDate: '2014-01-01',
    status: 'active',
    summary: 'Quy định thuế GTGT, đối tượng không chịu thuế dịch vụ KCB, thuế suất 5% thuốc/TBYT và nguyên tắc phân bổ thuế GTGT đầu vào dùng chung tại Phòng khám Hòa Đức.',
    officialUrl: 'https://hethongphapluat.com/thong-tu-219-2013-tt-btc-huong-dan-thi-hanh-luat-thue-gia-tri-gia-tang-va-nghi-dinh-209-2013-nd-cp.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Phân bổ thuế GTGT đầu vào dùng chung theo Điều 14 Khoản 2: Thuế GTGT đầu vào của điện nước, quản lý chung chỉ được khấu trừ theo tỷ lệ doanh thu chịu thuế (bán thuốc 5%, mỹ phẩm 10%).',
    articles: [
      {
        articleNumber: 'Điều 4',
        title: 'Đối tượng không chịu thuế GTGT (Khoản 9)',
        content: 'Dịch vụ y tế, dịch vụ khám bệnh, chữa bệnh, phòng bệnh cho người; dịch vụ chăm sóc người cao tuổi, người khuyết tật; dịch vụ vận chuyển bệnh nhân bằng xe cứu thương.',
        practicalImpact: 'Doanh thu tiền khám, xét nghiệm, siêu âm, chụp X-quang tại Phòng khám Hòa Đức thuộc đối tượng không chịu thuế GTGT, xuất hóa đơn dòng thuế suất gạch chéo.'
      },
      {
        articleNumber: 'Điều 10',
        title: 'Thuế suất 5% (Khoản 11)',
        content: 'Áp dụng thuế suất 5% đối với: Thiết bị, dụng cụ y tế gồm máy móc, dụng cụ chuyên dùng cho y tế; Thuốc chữa bệnh, phòng bệnh bao gồm thuốc thành phẩm, nguyên liệu làm thuốc.',
        practicalImpact: 'Doanh thu bán thuốc tại Nhà thuốc Phòng khám Hòa Đức áp dụng thuế suất GTGT 5%.'
      },
      {
        articleNumber: 'Điều 14',
        title: 'Nguyên tắc khấu trừ thuế giá trị gia tăng đầu vào (Khoản 2)',
        content: 'Thuế GTGT đầu vào của hàng hóa, dịch vụ (kể cả tài sản cố định) sử dụng đồng thời cho sản xuất, kinh doanh hàng hóa, dịch vụ chịu thuế và không chịu thuế GTGT thì chỉ được khấu trừ số thuế GTGT đầu vào của hàng hóa, dịch vụ dùng cho sản xuất, kinh doanh hàng hóa, dịch vụ chịu thuế GTGT. Cơ sở kinh doanh phải hạch toán riêng; trường hợp không hạch toán riêng được thì thuế đầu vào được khấu trừ tính theo tỷ lệ (%) giữa doanh thu chịu thuế GTGT so với tổng doanh thu của hàng hóa, dịch vụ bán ra.',
        practicalImpact: 'Phòng khám Hòa Đức bắt buộc lập Bảng phân bổ thuế GTGT dùng chung hàng tháng/quý và điều chỉnh quyết toán cuối năm.'
      }
    ]
  },
  {
    id: 'tt-01-2026',
    docNumber: '01/2026/TT-BYT',
    title: 'Quy định danh mục thuốc, thiết bị y tế, vật tư xét nghiệm mua sắm tập trung',
    category: 'bidding',
    issuer: 'Bộ Y tế',
    issueDate: '2026-01-09',
    effectiveDate: '2026-03-01',
    status: 'active',
    summary: 'Quy định danh mục mua sắm tập trung cấp quốc gia và cấp địa phương đối với hóa chất xét nghiệm và trang thiết bị y tế chuyên dụng.',
    officialUrl: 'https://hethongphapluat.com/thong-tu-01-2026-tt-byt-danh-muc-mua-sam-tap-trung-y-te.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Nắm chắc danh mục mua sắm tập trung của Sở Y tế Gia Lai và Bình Định để chuẩn bị năng lực dự thầu quy mô lớn.',
    articles: [
      {
        articleNumber: 'Điều 1',
        title: 'Phạm vi điều chỉnh',
        content: 'Thông tư này ban hành danh mục thuốc, thiết bị y tế, vật tư xét nghiệm áp dụng mua sắm tập trung cấp quốc gia và danh mục mua sắm tập trung cấp địa phương.',
        practicalImpact: 'Các gói thầu hóa chất xét nghiệm sinh hóa, huyết học phục vụ các bệnh viện tuyến huyện thường được gộp thành gói tập trung cấp tỉnh.'
      },
      {
        articleNumber: 'Điều 3',
        title: 'Nguyên tắc lựa chọn và phân bổ số lượng',
        content: 'Đơn vị mua sắm tập trung ký thỏa thuận khung với nhà thầu trúng thầu; các cơ sở khám bệnh, chữa bệnh trực tiếp ký hợp đồng mua sắm theo số lượng nhu cầu đã đăng ký.',
        practicalImpact: 'Kiểu Việt theo dõi tiến độ phân bổ đơn hàng từ thỏa thuận khung để chủ động nhập hàng và giao lắp kịp thời.'
      }
    ]
  },
  {
    id: 'tt-19-2024',
    docNumber: '19/2024/TT-BYT',
    title: 'Ban hành Danh mục trang thiết bị y tế kèm theo mã số HS',
    category: 'medical_device',
    issuer: 'Bộ Y tế',
    issueDate: '2024-11-01',
    effectiveDate: '2024-12-15',
    status: 'active',
    summary: 'Quy định mã số HS đối với trang thiết bị y tế nhập khẩu phục vụ khai báo hải quan, áp thuế nhập khẩu và kiểm tra chuyên ngành.',
    officialUrl: 'https://hethongphapluat.com/thong-tu-19-2024-tt-byt-danh-muc-thiet-bi-y-te-ma-hs.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Mã HS chuẩn xác (9018, 9022, 9027, 3822) để hưởng thuế suất thuế nhập khẩu ưu đãi và làm thủ tục thông quan nhanh chóng.',
    articles: [
      {
        articleNumber: 'Điều 1',
        title: 'Phạm vi điều chỉnh danh mục mã HS',
        content: 'Ban hành kèm theo Thông tư này Danh mục trang thiết bị y tế đã xác định mã số hàng hóa theo Danh mục hàng hóa xuất khẩu, nhập khẩu Việt Nam.',
        practicalImpact: 'Áp dụng đối chiếu mã HS cho từng model máy nhập khẩu của Kiểu Việt (Roche Cobas: HS 9027.89; Sysmex XN-550: HS 9027.89; X-quang Carestream: HS 9022.14).'
      },
      {
        articleNumber: 'Điều 3',
        title: 'Nguyên tắc sử dụng mã số HS',
        content: 'Trường hợp có sự khác biệt giữa mô tả hàng hóa tại Danh mục và mã số HS thì thực hiện theo bản chất kỹ thuật của trang thiết bị y tế và quy tắc phân loại hải quan.',
        practicalImpact: 'Hồ sơ hải quan phải kèm Giấy phân loại TBYT và Giấy phép lưu hành trùng khớp tên thương mại và chủng loại model.'
      }
    ]
  },
  {
    id: 'tt-29-2024',
    docNumber: '29/2024/TT-BYT',
    title: 'Quy định đặc điểm kinh tế - kỹ thuật của trang thiết bị y tế kê khai giá',
    category: 'medical_device',
    issuer: 'Bộ Y tế',
    issueDate: '2024-11-15',
    effectiveDate: '2025-01-01',
    status: 'active',
    summary: 'Hướng dẫn cụ thể các chỉ tiêu kinh tế - kỹ thuật phải kê khai giá trên Cổng thông tin điện tử của Bộ Y tế theo Luật Giá 2023.',
    officialUrl: 'https://hethongphapluat.com/thong-tu-29-2024-tt-byt-ke-khai-gia-thiet-bi-y-te.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Hồ sơ kê khai giá phải minh bạch cấu hình tiêu chuẩn, phụ kiện kèm theo và điều kiện bảo hành để tránh bị hậu kiểm giá thầu.',
    articles: [
      {
        articleNumber: 'Điều 2',
        title: 'Nội dung kê khai đặc điểm kinh tế - kỹ thuật',
        content: 'Bao gồm: Tên thương mại, chủng loại, model, hãng sản xuất, nước sản xuất; Mục đích sử dụng; Các thông số kỹ thuật chủ yếu; Cấu hình tiêu chuẩn; Phụ kiện kèm theo; Điều kiện bảo hành, bảo trì.',
        practicalImpact: 'Cấu hình chào thầu của Kiểu Việt phải khớp 100% với cấu hình đã kê khai công khai trên Cổng BYT.'
      },
      {
        articleNumber: 'Điều 4',
        title: 'Trách nhiệm kê khai và cập nhật giá',
        content: 'Doanh nghiệp chịu trách nhiệm hoàn toàn trước pháp luật về tính chính xác, trung thực của mức giá kê khai và các yếu tố hình thành giá.',
        practicalImpact: 'Kiểu Việt duy trì quy trình kiểm soát giá nội bộ trước khi đăng tải kê khai lên cổng công khai.'
      }
    ]
  },
  {
    id: 'nd-04-2025',
    docNumber: '04/2025/NĐ-CP',
    title: 'Nghị định sửa đổi, bổ sung một số điều về quản lý trang thiết bị y tế',
    category: 'medical_device',
    issuer: 'Chính phủ',
    issueDate: '2025-01-01',
    effectiveDate: '2025-01-01',
    status: 'active',
    summary: 'Quy định sửa đổi thủ tục lưu hành, gia hạn giấy phép nhập khẩu và điều khoản chuyển tiếp cho các hồ sơ đăng ký lưu hành.',
    officialUrl: 'https://hethongphapluat.com/nghi-dinh-04-2025-nd-cp-sua-doi-nghi-dinh-98-quan-ly-trang-thiet-bi-y-te.html',
    driveFolderId: '19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls',
    practicalTakeaway: 'Kiểm tra kỹ các nhánh chuyển tiếp hồ sơ cấp số lưu hành để không bị nhầm lẫn giữa giấy phép cũ được gia hạn và yêu cầu mới.',
    articles: [
      {
        articleNumber: 'Điều 1',
        title: 'Sửa đổi thời hạn hiệu lực của giấy phép nhập khẩu và số lưu hành',
        content: 'Quy định các trường hợp giấy phép nhập khẩu TBYT đã cấp tiếp tục được sử dụng đến hết ngày 31/12/2025 và lộ trình chuyển tiếp sang số đăng ký lưu hành mới không thời hạn.',
        practicalImpact: 'Hàng hóa nhập khẩu của Kiểu Việt trong năm 2025-2026 được đối soát theo đúng loại giấy phép còn hiệu lực.'
      },
      {
        articleNumber: 'Điều 2',
        title: 'Điều khoản chuyển tiếp',
        content: 'Các hồ sơ đề nghị cấp số lưu hành đã nộp trước ngày Nghị định này có hiệu lực tiếp tục được thẩm định theo quy định tại thời điểm nộp.',
        practicalImpact: 'Hỗ trợ khách hàng bệnh viện và đối tác kiểm tra tính pháp lý của hồ sơ chuyển tiếp.'
      }
    ]
  }
];
