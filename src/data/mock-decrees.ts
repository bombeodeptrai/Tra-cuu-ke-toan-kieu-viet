import { Decree } from '@/types/decree'

export const MOCK_CATEGORIES = [
  { id: '1', name: 'Luật', slug: 'luat', description: 'Các văn bản Luật do Quốc hội ban hành' },
  { id: '2', name: 'Nghị định', slug: 'nghi-dinh', description: 'Nghị định của Chính phủ' },
  { id: '3', name: 'Thông tư', slug: 'thong-tu', description: 'Thông tư hướng dẫn của Bộ Tài chính' },
  { id: '4', name: 'Hóa đơn chứng từ', slug: 'hoa-don', description: 'Quy định về hóa đơn chứng từ' },
  { id: '5', name: 'Thuế', slug: 'thue', description: 'Quy định về các sắc thuế' },
  { id: '6', name: 'Chuẩn mực kế toán', slug: 'chuan-muc', description: 'Chuẩn mực kế toán Việt Nam (VAS)' }
];

export const MOCK_DECREES: Decree[] = [
  // ==================== KHOÁNG SẢN & ĐỊA PHƯƠNG ====================
  {
    id: 'qd-87-2025-gialai',
    decree_number: '87/2025/QĐ-UBND',
    title: 'Quyết định 87/2025/QĐ-UBND Bảng giá tính thuế tài nguyên 2026 tỉnh Gia Lai',
    category: 'khoang-san',
    issued_date: '2025-12-25',
    effective_date: '2026-01-05',
    status: 'active',
    source_url: '#',
    summary: 'Quyết định số 87/2025/QĐ-UBND của UBND tỉnh Gia Lai quy định chi tiết Bảng giá tính thuế tài nguyên áp dụng cho năm 2026 đối với các loại khoáng sản kim loại, không kim loại, sản phẩm rừng tự nhiên và nước thiên nhiên trên địa bàn tỉnh.\n\n**Điểm nổi bật:**\n- Điều chỉnh tăng giá tính thuế đối với cát xây dựng, đá chẻ, đá hộc do khan hiếm nguồn cung.\n- Bổ sung giá tính thuế cho một số loại khoáng sản mới phát sinh khai thác tại các huyện phía Đông tỉnh.',
    content: `# QUYẾT ĐỊNH 87/2025/QĐ-UBND TỈNH GIA LAI\n\n**Về việc ban hành Bảng giá tính thuế tài nguyên năm 2026 trên địa bàn tỉnh Gia Lai**\n\n## 1. Nguyên tắc áp dụng\n- Bảng giá này là cơ sở để Cục Thuế tỉnh Gia Lai và các Chi cục Thuế tính thuế tài nguyên đối với các tổ chức, cá nhân khai thác tài nguyên thiên nhiên trên địa bàn tỉnh.\n- Trường hợp giá bán tài nguyên ghi trên hóa đơn cao hơn giá tại Bảng giá này thì giá tính thuế là giá ghi trên hóa đơn.\n- Trường hợp giá bán trên hóa đơn thấp hơn, áp dụng giá tại Quyết định này.\n\n## 2. Bảng giá một số khoáng sản phổ biến (Trích đoạn)\n| STT | Loại tài nguyên | Đơn vị tính | Giá tính thuế (VNĐ) |\n|---|---|---|---|\n| 1 | Cát xây dựng (cát vàng) | m3 | 250.000 |\n| 2 | Cát san lấp | m3 | 120.000 |\n| 3 | Đá xây dựng (đá hộc) | m3 | 180.000 |\n| 4 | Đá chẻ | m3 | 220.000 |\n| 5 | Đất san lấp | m3 | 45.000 |\n\n## 3. Trách nhiệm thực hiện\nSở Tài chính chủ trì, phối hợp với Sở Tài nguyên và Môi trường và Cục Thuế tỉnh thường xuyên theo dõi diễn biến giá tài nguyên trên thị trường. Nếu giá thị trường biến động tăng/giảm trên 20%, phải tham mưu UBND tỉnh điều chỉnh kịp thời.`
  },
  {
    id: 'luat-54-2024-khoangsan',
    decree_number: '54/2024/QH15',
    title: 'Luật Địa chất và Khoáng sản số 54/2024/QH15',
    category: 'khoang-san',
    issued_date: '2024-11-29',
    effective_date: '2025-07-01',
    status: 'active',
    source_url: '#',
    summary: 'Luật Địa chất và Khoáng sản số 54/2024/QH15 thay thế Luật Khoáng sản 2010. Đạo luật mới phân cấp mạnh mẽ cho chính quyền địa phương trong việc cấp phép khai thác khoáng sản làm vật liệu xây dựng thông thường (Nhóm III, IV).\n\n**Trọng tâm:**\n- Ưu tiên khai thác khoáng sản chiến lược.\n- Đơn giản hóa thủ tục hành chính cho mỏ đất san lấp, cát sỏi phục vụ công trình trọng điểm.\n- Yêu cầu khắt khe hơn về phục hồi môi trường sau khai thác.',
    content: `# LUẬT ĐỊA CHẤT VÀ KHOÁNG SẢN 54/2024/QH15\n\n## 1. Phân loại khoáng sản mới\nLuật mới chia khoáng sản thành 4 nhóm (I, II, III, IV) thay vì không phân loại rõ ràng như trước. Trong đó:\n- **Nhóm III, IV** (Cát, đá, sỏi, đất san lấp) được giao hoàn toàn quyền cấp phép cho UBND cấp tỉnh.\n- Không yêu cầu giấy phép khai thác đối với đất san lấp khai thác trong diện tích dự án đầu tư công.\n\n## 2. Tiền cấp quyền khai thác\n- Bổ sung quy định thu tiền cấp quyền khai thác theo trữ lượng thực tế hoặc theo năm, giảm áp lực tài chính một lần cho doanh nghiệp.\n- Khuyến khích sử dụng công nghệ tuần hoàn, giảm thiểu chất thải rắn.\n\n## 3. Nghĩa vụ tài chính và Kế toán\nDoanh nghiệp khai thác phải lập quỹ phục hồi môi trường và hạch toán rõ ràng chi phí này vào giá thành sản xuất. Việc lập quỹ phải thực hiện ngay từ năm đầu tiên khai thác.`
  },

  // ==================== KHOÁNG SẢN & TÀI NGUYÊN (BỔ SUNG) ====================
  {
    id: 'nd-27-2023',
    decree_number: '27/2023/NĐ-CP',
    title: 'Nghị định 27/2023/NĐ-CP Phí bảo vệ môi trường khai thác khoáng sản',
    category: 'khoang-san',
    issued_date: '2023-05-31',
    effective_date: '2023-07-15',
    status: 'active',
    source_url: '#',
    summary: 'Quy định chi tiết về đối tượng chịu phí, người nộp phí, mức thu, phương pháp tính, kê khai, nộp và quản lý phí bảo vệ môi trường đối với khai thác khoáng sản.\n\n**Điểm đáng chú ý:**\n- Điều chỉnh mức thu phí đối với nhiều loại khoáng sản kim loại và không kim loại.\n- Quy định công thức tính phí BVMT rõ ràng dựa trên khối lượng nguyên khai.\n- Tổ chức, cá nhân thu mua khoáng sản từ người khai thác nhỏ lẻ cũng phải nộp phí.',
    content: `# NGHỊ ĐỊNH 27/2023/NĐ-CP\n\n**Phí bảo vệ môi trường đối với khai thác khoáng sản**\n\n## 1. Đối tượng chịu phí\n- Khoáng sản kim loại: Sắt, mangan, titan, vàng, đất hiếm...\n- Khoáng sản không kim loại: Đất, đá, cát, sỏi, than, nước khoáng thiên nhiên.\n\n## 2. Phương pháp tính phí\nPhí bảo vệ môi trường (F) = Khối lượng khoáng sản nguyên khai khai thác (Q) x Mức thu phí (f) x Hệ số phương pháp khai thác (K).\n- Khai thác lộ thiên: K = 1,1\n- Khai thác hầm lò: K = 1,0\n\n## 3. Khai, nộp phí\nDoanh nghiệp phải kê khai, nộp phí chậm nhất là ngày 20 của tháng tiếp theo. Cơ quan thuế quản lý trực tiếp có trách nhiệm đôn đốc, kiểm tra việc nộp phí của doanh nghiệp.`
  },
  {
    id: 'tt-152-2015',
    decree_number: '152/2015/TT-BTC',
    title: 'Thông tư 152/2015/TT-BTC Hướng dẫn về Thuế Tài Nguyên',
    category: 'khoang-san',
    issued_date: '2015-10-02',
    effective_date: '2015-11-20',
    status: 'active',
    source_url: '#',
    summary: 'Văn bản cốt lõi hướng dẫn thi hành thuế tài nguyên, áp dụng đối với tất cả các hoạt động khai thác khoáng sản, nước thiên nhiên, yến sào...\n\n**Nội dung chính:**\n- Hướng dẫn cách xác định sản lượng tài nguyên tính thuế.\n- Cách xác định giá tính thuế tài nguyên trong các trường hợp.\n- Hồ sơ, thủ tục miễn giảm thuế tài nguyên.',
    content: `# THÔNG TƯ 152/2015/TT-BTC: THUẾ TÀI NGUYÊN\n\n## 1. Công thức tính thuế\nThuế tài nguyên phải nộp trong kỳ = Sản lượng tài nguyên tính thuế x Giá tính thuế đơn vị x Thuế suất.\n\n## 2. Xác định sản lượng tính thuế\n- Là số lượng, khối lượng, trọng lượng tài nguyên thực tế khai thác trong kỳ áp dụng đối với tài nguyên chưa qua chế biến.\n- Nếu bán ra sản phẩm đã qua chế biến, phải quy đổi ngược lại sản lượng nguyên khai.\n\n## 3. Giá tính thuế tài nguyên\n- Giá bán đơn vị sản phẩm tài nguyên khai thác chưa bao gồm thuế GTGT.\n- Nếu không xác định được giá bán, áp dụng theo Bảng giá tính thuế tài nguyên do UBND cấp tỉnh ban hành.`
  },
  {
    id: 'nd-67-2019',
    decree_number: '67/2019/NĐ-CP',
    title: 'Nghị định 67/2019/NĐ-CP Tiền cấp quyền khai thác khoáng sản',
    category: 'khoang-san',
    issued_date: '2019-07-31',
    effective_date: '2019-09-15',
    status: 'active',
    source_url: '#',
    summary: 'Quy định phương pháp tính, mức thu tiền cấp quyền khai thác khoáng sản. Đây là khoản nghĩa vụ tài chính rất lớn mà doanh nghiệp khai thác mỏ phải nộp ngoài thuế và phí.\n\n**Quy định nổi bật:**\n- Mức thu tiền cấp quyền từ 1% - 5% tùy loại khoáng sản.\n- Công thức tính dựa trên Trữ lượng, Giá tính tiền cấp quyền, Mức thu, Hệ số thu hồi.\n- Trả tiền theo từng năm hoặc một lần tùy thời gian khai thác.',
    content: `# NGHỊ ĐỊNH 67/2019/NĐ-CP: TIỀN CẤP QUYỀN KHAI THÁC\n\n## 1. Công thức tính (T)\nT = Q x G x K1 x K2 x R\n- **Q**: Trữ lượng khoáng sản được cấp phép khai thác.\n- **G**: Giá tính tiền cấp quyền (do UBND tỉnh quy định).\n- **R**: Mức thu tiền cấp quyền (%).\n\n## 2. Phương thức nộp tiền\n- Thời gian khai thác dưới 5 năm: Nộp 1 lần hoặc nộp nhiều lần (tối đa không quá số năm phép).\n- Số tiền nộp lần đầu tiên tối thiểu bằng 30% tổng số tiền phải nộp đối với nộp nhiều lần.\n\n## 3. Xử lý chậm nộp\nTiền chậm nộp được tính theo quy định của Luật Quản lý thuế (hiện tại là 0,03%/ngày).`
  },
  {
    id: 'tt-44-2017',
    decree_number: '44/2017/TT-BTC',
    title: 'Thông tư 44/2017/TT-BTC Khung giá tính thuế tài nguyên',
    category: 'khoang-san',
    issued_date: '2017-05-12',
    effective_date: '2017-07-01',
    status: 'active',
    source_url: '#',
    summary: 'Bộ Tài chính ban hành Khung giá tính thuế tài nguyên đối với nhóm, loại tài nguyên có tính chất lý, hóa giống nhau (Khung giá trần và giá sàn). UBND tỉnh dựa vào đây để ban hành Bảng giá chi tiết.\n\n**Ý nghĩa kế toán:**\n- Kế toán cần đối chiếu giá tính thuế của UBND tỉnh xem có nằm trong Khung giá này không.\n- Khi giá thị trường biến động 20% ngoài khung, BTC sẽ điều chỉnh khung giá.',
    content: `# THÔNG TƯ 44/2017/TT-BTC: KHUNG GIÁ THUẾ TÀI NGUYÊN\n\n## 1. Khung giá tối thiểu và tối đa\n- Mọi Bảng giá do UBND tỉnh ban hành (ví dụ: Quyết định 87 của Gia Lai) đều không được thấp hơn giá tối thiểu và không cao hơn giá tối đa của Thông tư này.\n\n## 2. Các loại khoáng sản\nBao gồm hàng trăm danh mục: Than, Cát, Đá, Sỏi, Đất, Sắt, Vàng, Nước khoáng...\n\n## 3. Điều chỉnh Khung giá\nBộ Tài chính sẽ ban hành Thông tư sửa đổi (ví dụ Thông tư 05/2020/TT-BTC sửa đổi TT 44) khi giá thị trường phổ biến có biến động lớn.`
  },
  // ==================== CẬP NHẬT MỚI NHẤT (2024 - 2026) ====================
  {
    id: 'luat-56-2024',
    decree_number: '56/2024/QH15',
    title: 'Luật số 56/2024/QH15 sửa đổi Luật Kế toán, Chứng khoán, Thuế',
    category: 'luat',
    issued_date: '2024-11-26',
    effective_date: '2025-01-01',
    status: 'active',
    source_url: '#',
    summary: 'Luật số 56/2024/QH15 là văn bản đặc biệt quan trọng sửa đổi bổ sung cùng lúc nhiều luật thuộc lĩnh vực tài chính, trong đó có Luật Kế toán, Luật Chứng khoán và Luật Quản lý thuế. Mục tiêu nhằm tháo gỡ vướng mắc, tạo điều kiện thuận lợi cho môi trường đầu tư kinh doanh.\n\n**Điểm mới cốt lõi:**\n- Cho phép doanh nghiệp linh hoạt hơn trong việc lưu trữ chứng từ kế toán điện tử, không bắt buộc in ra giấy.\n- Đơn giản hóa thủ tục hoàn thuế GTGT cho doanh nghiệp xuất khẩu.\n- Nâng cao chế tài xử phạt đối với hành vi thao túng báo cáo tài chính của công ty đại chúng.',
    content: `# LUẬT SỐ 56/2024/QH15 SỬA ĐỔI BỔ SUNG CÁC LUẬT TÀI CHÍNH\n\n## 1. Sửa đổi Luật Kế toán\n- Cập nhật quy định về chứng từ điện tử, chính thức công nhận toàn diện giá trị pháp lý của chứng từ sinh ra từ hệ thống ERP mà không cần in giấy bảo quản.\n- Bổ sung quy định về chuẩn mực đạo đức nghề nghiệp đối với người làm kế toán.\n\n## 2. Sửa đổi Luật Quản lý thuế\n- Tăng quyền chủ động cho người nộp thuế trong việc sửa đổi, bổ sung hồ sơ khai thuế khi cơ quan thuế chưa công bố quyết định thanh tra.\n- Rút ngắn thời gian xử lý hồ sơ hoàn thuế đối với doanh nghiệp rủi ro thấp.\n\n## 3. Rủi ro và Lưu ý\nCác doanh nghiệp cần rà soát lại quy trình lưu trữ điện tử, đảm bảo đáp ứng chuẩn an toàn an ninh mạng mới để được hưởng cơ chế lưu trữ không in giấy.`
  },
  {
    id: 'nd-70-2025',
    decree_number: '70/2025/NĐ-CP',
    title: 'Nghị định 70/2025/NĐ-CP Sửa đổi quy định hóa đơn, chứng từ',
    category: 'hoa-don',
    issued_date: '2025-02-15',
    effective_date: '2025-03-20',
    status: 'active',
    source_url: '#',
    summary: 'Nghị định 70/2025/NĐ-CP cập nhật các quy định mới nhất về hóa đơn điện tử, tháo gỡ những bất cập của Nghị định 123/2020/NĐ-CP trước đây. Trọng tâm là việc tự động hóa kết nối dữ liệu máy tính tiền và xử lý hóa đơn sai sót.\n\n**Điểm nhấn:**\n- Bắt buộc 100% cửa hàng bán lẻ, F&B áp dụng hóa đơn khởi tạo từ máy tính tiền kết nối trực tiếp với Cơ quan Thuế.\n- Thay đổi quy trình nộp mẫu 04/SS-HĐĐT, tự động hóa phản hồi từ CQT.',
    content: `# NGHỊ ĐỊNH 70/2025/NĐ-CP VỀ HÓA ĐƠN ĐIỆN TỬ\n\n## 1. Mở rộng Hóa đơn từ Máy tính tiền\n- Bắt buộc áp dụng với kinh doanh ăn uống, siêu thị, bán lẻ thuốc tân dược, dịch vụ vui chơi giải trí.\n- Dữ liệu phải được truyền về cơ quan thuế ngay trong ngày.\n\n## 2. Xử lý sai sót hóa đơn (Mới)\n- Bỏ yêu cầu nộp Mẫu 04/SS đối với trường hợp sai tên, địa chỉ người mua (chỉ cần thỏa thuận hai bên).\n- Hóa đơn điều chỉnh/thay thế được cấp mã tự động trong vòng 15 phút.\n\n## 3. Chế tài vi phạm\nTăng gấp đôi mức phạt đối với hành vi xuất hóa đơn sai thời điểm, nhằm ngăn chặn việc dồn hóa đơn cuối tháng.`
  },
  {
    id: 'tt-58-2026',
    decree_number: '58/2026/TT-BTC',
    title: 'Thông tư 58/2026/TT-BTC Chế độ kế toán doanh nghiệp siêu nhỏ',
    category: 'thong-tu',
    issued_date: '2026-04-10',
    effective_date: '2026-07-01',
    status: 'active',
    source_url: '#',
    summary: 'Thông tư 58/2026/TT-BTC ra đời thay thế Thông tư 132/2018/TT-BTC, định hình lại hoàn toàn công tác kế toán cho các doanh nghiệp siêu nhỏ, hộ kinh doanh trong thời đại số.\n\n**Điểm mới:**\n- Loại bỏ hoàn toàn yêu cầu ghi sổ kép (Nợ/Có) đối với hộ kinh doanh.\n- Doanh nghiệp siêu nhỏ nộp thuế TNDN theo tỷ lệ % trên doanh thu không bắt buộc lập Báo cáo tài chính, chỉ cần sổ chi tiết doanh thu.',
    content: `# THÔNG TƯ 58/2026/TT-BTC CHO DOANH NGHIỆP SIÊU NHỎ\n\n## 1. Đơn giản hóa Kế toán\n- Cho phép doanh nghiệp siêu nhỏ ghi sổ theo phương pháp kế toán đơn (Single-entry bookkeeping).\n- Không cần lập Bảng cân đối kế toán nếu nộp thuế theo phương pháp trực tiếp.\n\n## 2. Số hóa sổ sách\n- Toàn bộ sổ sách (Sổ quỹ tiền mặt, Sổ chi tiết vật tư, Sổ doanh thu) được tích hợp thẳng vào phần mềm khai thuế.\n- Khuyến khích sử dụng ứng dụng eTax Mobile để ghi nhận nghiệp vụ.\n\n## 3. Rủi ro lưu ý\nTuy được đơn giản hóa, cơ quan thuế sẽ thanh tra chéo dữ liệu hóa đơn điện tử đầu vào/đầu ra. Nếu phát hiện chênh lệch, mức phạt trốn thuế vẫn áp dụng nghiêm khắc theo Luật Quản lý thuế.`
  },
  {
    id: 'nd-132-2026',
    decree_number: '132/2026/NĐ-CP',
    title: 'Nghị định 132/2026/NĐ-CP Xử phạt vi phạm hành chính lĩnh vực kế toán',
    category: 'nghi-dinh',
    issued_date: '2026-03-25',
    effective_date: '2026-05-21',
    status: 'active',
    source_url: '#',
    summary: 'Thay thế Nghị định 41/2018, Nghị định 132/2026/NĐ-CP tăng mạnh mức phạt tiền đối với các hành vi vi phạm về kế toán và kiểm toán, đồng thời bổ sung các vi phạm liên quan đến chứng từ điện tử, an toàn dữ liệu kế toán.\n\n**Điểm mới:**\n- Mức phạt tối đa tăng lên 100 triệu đồng với cá nhân, 200 triệu đồng với tổ chức.\n- Bổ sung hành vi "Làm rò rỉ dữ liệu kế toán tài chính" với mức phạt rất nặng.',
    content: `# NGHỊ ĐỊNH 132/2026/NĐ-CP XỬ PHẠT KẾ TOÁN\n\n## 1. Khung phạt mới (Tăng nặng)\n- Lập hai hệ thống sổ kế toán: Phạt từ 80 - 100 triệu đồng (cá nhân), tước chứng chỉ hành nghề.\n- Tiêu hủy chứng từ trước thời hạn: Phạt từ 30 - 50 triệu đồng.\n\n## 2. Nhóm vi phạm công nghệ (Mới)\n- Hệ thống phần mềm kế toán không đảm bảo truy xuất nguồn gốc dữ liệu (Audit trail): Phạt 20 - 40 triệu đồng.\n- Giao tài khoản kế toán cấp cao cho người không có nghiệp vụ: Phạt 10 - 20 triệu đồng.\n\n## 3. Biện pháp khắc phục\nBắt buộc khôi phục lại dữ liệu và nộp Báo cáo tài chính điều chỉnh trong vòng 30 ngày kể từ ngày bị lập biên bản vi phạm.`
  },
  // ==================== VĂN BẢN NỀN TẢNG (HIỆN HÀNH) ====================
  {
    id: 'luat-ke-toan-2015',
    decree_number: '88/2015/QH13',
    title: 'Luật Kế toán số 88/2015/QH13',
    category: 'luat',
    issued_date: '2015-11-20',
    effective_date: '2017-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Luat-ke-toan-2015-88-2015-QH13-296839.aspx',
    summary: `Luật Kế toán 2015 (số 88/2015/QH13) là văn bản pháp lý nền tảng điều chỉnh toàn bộ hoạt động kế toán tại Việt Nam, thay thế Luật Kế toán 2003. Luật gồm 6 chương, 74 điều, quy định về nội dung công tác kế toán, tổ chức bộ máy kế toán, người làm kế toán, hoạt động kinh doanh dịch vụ kế toán, quản lý nhà nước về kế toán.

**Điểm mới cốt lõi so với Luật 2003:**
- Bổ sung quy định về kế toán công (kế toán nhà nước) riêng biệt với kế toán doanh nghiệp.
- Lần đầu tiên luật hóa việc áp dụng chuẩn mực kế toán quốc tế (IFRS).
- Quy định chặt chẽ hơn về điều kiện hành nghề kế toán và kế toán viên hành nghề.
- Bổ sung quy định về lưu trữ tài liệu kế toán trên môi trường điện tử.

**Đối tượng áp dụng:** Mọi cơ quan, tổ chức, đơn vị, doanh nghiệp có hoạt động kế toán trên lãnh thổ Việt Nam.

**Lưu ý rủi ro:** Điều 48 quy định nghiêm cấm 14 hành vi trong kế toán (làm giả chứng từ, ghi chép không trung thực...), vi phạm có thể bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự.`,
    content: `# LUẬT KẾ TOÁN SỐ 88/2015/QH13

## 1. Phạm vi điều chỉnh và Đối tượng áp dụng

### Điều 1 – Phạm vi điều chỉnh
Luật này quy định về nội dung công tác kế toán, tổ chức bộ máy kế toán, người làm kế toán, hoạt động kinh doanh dịch vụ kế toán, quản lý nhà nước về kế toán.

### Điều 2 – Đối tượng áp dụng
Luật áp dụng với: cơ quan có nhiệm vụ thu chi ngân sách nhà nước; cơ quan nhà nước, đơn vị sự nghiệp; tổ chức có sử dụng kinh phí ngân sách nhà nước; doanh nghiệp thuộc mọi thành phần kinh tế; hợp tác xã, liên hiệp hợp tác xã; hộ kinh doanh, tổ hợp tác...

---

## 2. Các Nguyên tắc Kế toán Cốt lõi (Điều 6)

Luật quy định **10 nguyên tắc kế toán bắt buộc**:

| Nguyên tắc | Nội dung |
|---|---|
| **Cơ sở dồn tích** | Mọi nghiệp vụ kinh tế, tài chính được ghi nhận vào thời điểm phát sinh, không căn cứ vào thời điểm thực thu, thực chi tiền |
| **Hoạt động liên tục** | Báo cáo tài chính phải được lập trên cơ sở giả định doanh nghiệp đang hoạt động liên tục |
| **Giá gốc** | Tài sản phải được ghi nhận theo giá gốc (trừ trường hợp pháp luật có quy định khác) |
| **Phù hợp** | Doanh thu và chi phí phát sinh phải được ghi nhận đồng thời |
| **Nhất quán** | Chính sách kế toán phải được áp dụng nhất quán qua các kỳ kế toán |
| **Thận trọng** | Phải lập các khoản dự phòng nhưng không quá mức cho phép |
| **Trọng yếu** | Thông tin được coi là trọng yếu nếu việc thiếu/sai có thể ảnh hưởng đến quyết định của người sử dụng BCTC |

---

## 3. Chứng từ Kế toán (Chương II, Điều 16-24)

### Điều 16 – Nội dung chứng từ kế toán (BẮT BUỘC)
Chứng từ kế toán phải có **7 nội dung chủ yếu**:
1. Tên và số hiệu của chứng từ kế toán
2. Ngày, tháng, năm lập chứng từ kế toán
3. Tên, địa chỉ của đơn vị hoặc cá nhân lập chứng từ kế toán
4. Tên, địa chỉ của đơn vị hoặc cá nhân nhận chứng từ kế toán
5. Nội dung nghiệp vụ kinh tế, tài chính phát sinh
6. Số lượng, đơn giá và số tiền của nghiệp vụ kinh tế, tài chính ghi bằng số; tổng số tiền của chứng từ kế toán dùng để thu, chi tiền ghi bằng số và bằng chữ
7. Chữ ký, dấu của người lập, người duyệt và những người có liên quan đến chứng từ kế toán

> **Lưu ý thực tế:** Thiếu bất kỳ nội dung nào trong 7 yếu tố trên có thể khiến chứng từ không hợp lệ, chi phí bị loại khỏi chi phí được trừ khi tính thuế TNDN.

### Điều 18 – Ký chứng từ kế toán
Chứng từ kế toán phải có đủ chữ ký. Chữ ký trên chứng từ kế toán phải được ký bằng loại mực không phai. Không được ký chứng từ kế toán bằng mực đỏ hoặc đóng dấu chữ ký khắc sẵn.

---

## 4. Tài khoản và Sổ Kế toán (Điều 25-32)

### Điều 25 – Tài khoản kế toán
Tài khoản kế toán dùng để phân loại và hệ thống hóa các nghiệp vụ kinh tế, tài chính theo nội dung kinh tế. Hệ thống tài khoản kế toán bao gồm các tài khoản cấp 1, cấp 2, cấp 3...

### Điều 26 – Hệ thống sổ kế toán
Doanh nghiệp phải mở sổ kế toán, ghi chép, quản lý, bảo quản sổ kế toán theo quy định. Sổ kế toán gồm:
- **Sổ kế toán tổng hợp:** Sổ Nhật ký, Sổ Cái
- **Sổ kế toán chi tiết:** Sổ chi tiết, Thẻ kế toán chi tiết

---

## 5. Báo cáo Tài chính (Điều 29-33)

### Điều 29 – Nội dung báo cáo tài chính
BCTC năm của doanh nghiệp bao gồm:
1. **Bảng cân đối kế toán** (Balance Sheet)
2. **Báo cáo kết quả hoạt động kinh doanh** (P&L)
3. **Báo cáo lưu chuyển tiền tệ** (Cash Flow Statement)
4. **Thuyết minh báo cáo tài chính** (Notes to Financial Statements)

### Điều 30 – Kỳ kế toán
- **Kỳ kế toán năm:** 12 tháng, tính từ đầu ngày 01 tháng 01 đến hết ngày 31 tháng 12 năm dương lịch
- Trường hợp đặc biệt có thể áp dụng năm tài chính khác năm dương lịch nhưng phải được cơ quan nhà nước có thẩm quyền chấp thuận

---

## 6. Các Hành vi Bị nghiêm cấm (Điều 13)

**14 hành vi nghiêm cấm trong kế toán:**
1. Giả mạo, khai man chứng từ kế toán, sổ kế toán, báo cáo tài chính
2. Cố ý, thỏa thuận hoặc ép buộc người khác giả mạo, khai man chứng từ kế toán
3. Lập hai hệ thống sổ kế toán trở lên hoặc cung cấp, công bố các báo cáo tài chính có số liệu không đồng nhất
4. Để ngoài sổ kế toán tài sản của đơn vị kế toán hoặc tài sản liên quan đến đơn vị kế toán
5. Hủy bỏ hoặc cố ý làm hư hỏng tài liệu kế toán trước thời hạn lưu trữ

> ⚠️ **Cảnh báo pháp lý:** Vi phạm các điều khoản nghiêm cấm có thể bị xử phạt từ 5 triệu đến 30 triệu đồng theo Nghị định 41/2018/NĐ-CP, hoặc truy cứu trách nhiệm hình sự theo Điều 221 Bộ luật Hình sự 2015 (tội vi phạm quy định về kế toán gây hậu quả nghiêm trọng).`
  },

  {
    id: 'luat-quan-ly-thue-2019',
    decree_number: '38/2019/QH14',
    title: 'Luật Quản lý thuế số 38/2019/QH14',
    category: 'luat',
    issued_date: '2019-06-13',
    effective_date: '2020-07-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Luat-Quan-ly-thue-38-2019-QH14-413884.aspx',
    summary: `Luật Quản lý thuế 2019 (số 38/2019/QH14) là văn bản quan trọng nhất trong hệ thống pháp luật thuế Việt Nam, quy định toàn diện về đăng ký thuế, khai thuế, nộp thuế, hoàn thuế, kiểm tra thuế, thanh tra thuế và xử lý vi phạm pháp luật về thuế.

**Điểm mới nổi bật:**
- Bổ sung chương riêng về quản lý thuế đối với thương mại điện tử và hoạt động kinh doanh qua nền tảng số.
- Mở rộng quyền của người nộp thuế (được cung cấp thông tin, giải thích, gia hạn nộp thuế).
- Tăng cường trách nhiệm của tổ chức, cá nhân khấu trừ thuế.
- Áp dụng quản lý rủi ro trong thanh tra, kiểm tra thuế.

**Lưu ý:** Điều 59 quy định về tiền chậm nộp thuế là 0,03%/ngày trên số tiền thuế chậm nộp, tính từ ngày hết hạn nộp thuế đến ngày nộp đủ.`,
    content: `# LUẬT QUẢN LÝ THUẾ SỐ 38/2019/QH14

## 1. Phạm vi và Nguyên tắc Quản lý Thuế

### Điều 3 – Đối tượng áp dụng
- Người nộp thuế (NNT): tổ chức, hộ gia đình, hộ kinh doanh, cá nhân nộp thuế
- Cơ quan quản lý thuế
- Cơ quan nhà nước, tổ chức, cá nhân có liên quan đến quản lý thuế

### Điều 5 – Nguyên tắc quản lý thuế
1. Mọi tổ chức, hộ gia đình, hộ kinh doanh, cá nhân có nghĩa vụ nộp thuế theo quy định của pháp luật.
2. Cơ quan quản lý thuế thực hiện quản lý thuế theo quy định của Luật này và các quy định khác của pháp luật có liên quan, bảo đảm công khai, minh bạch, bình đẳng và bảo đảm quyền, lợi ích hợp pháp của người nộp thuế.

---

## 2. Đăng ký Thuế (Chương III, Điều 30-37)

### Điều 30 – Đối tượng đăng ký thuế
Tổ chức, cá nhân có nghĩa vụ đăng ký thuế bao gồm:
- Doanh nghiệp, hợp tác xã, tổ chức kinh tế khác
- Hộ kinh doanh, cá nhân kinh doanh
- Cá nhân có thu nhập chịu thuế

### Điều 31 – Thời hạn đăng ký thuế
- **Doanh nghiệp, tổ chức:** trong vòng **10 ngày làm việc** kể từ ngày được cấp Giấy chứng nhận đăng ký kinh doanh
- **Hộ kinh doanh:** trong vòng **10 ngày làm việc** kể từ ngày bắt đầu kinh doanh

> **Lưu ý:** Đăng ký muộn có thể bị phạt từ 1 triệu đến 3 triệu đồng theo Nghị định 125/2020/NĐ-CP

---

## 3. Khai Thuế (Chương IV)

### Điều 43 – Nguyên tắc khai thuế
**Quan trọng:** Người nộp thuế phải khai thuế chính xác, trung thực, đầy đủ và nộp hồ sơ khai thuế đúng hạn.

### Điều 44 – Thời hạn nộp hồ sơ khai thuế

| Loại thuế | Kỳ tính thuế | Thời hạn |
|---|---|---|
| Thuế GTGT (tháng) | Tháng | Ngày 20 của tháng tiếp theo |
| Thuế GTGT (quý) | Quý | Ngày 30/31 của tháng đầu tiên của quý tiếp theo |
| Thuế TNDN tạm nộp | Quý | Ngày 30/31 của tháng đầu tiên của quý tiếp theo |
| Thuế TNDN quyết toán | Năm | Ngày cuối tháng thứ 3 sau khi kết thúc năm dương lịch (30/3) |
| Thuế TNCN khấu trừ | Tháng/Quý | Tương tự GTGT |
| Thuế TNCN quyết toán | Năm | Ngày 30/4 năm sau |

---

## 4. Tiền Chậm Nộp Thuế (Điều 59) – RỦI RO LỚN

> **Điều 59, Khoản 1:** *"Người nộp thuế chậm nộp tiền thuế so với thời hạn quy định, thời hạn gia hạn nộp thuế, thời hạn ghi trong thông báo của cơ quan quản lý thuế, thời hạn trong quyết định xử lý vi phạm pháp luật về thuế thì phải nộp đủ tiền thuế và tiền chậm nộp theo mức **0,03%/ngày** tính trên số tiền thuế chậm nộp."*

**Ví dụ thực tế:**
- Nộp chậm 100 triệu đồng thuế TNDN trong 30 ngày
- Tiền phạt chậm nộp = 100,000,000 × 0.03% × 30 = **900,000 đồng**
- Nộp chậm 1 năm (365 ngày): 100,000,000 × 0.03% × 365 = **10,950,000 đồng**

---

## 5. Kiểm tra và Thanh tra Thuế (Chương X)

### Điều 110 – Kiểm tra thuế tại trụ sở NNT
- Thời hạn: không quá **10 ngày làm việc**
- Có thể gia hạn: tối đa **1 lần** không quá **10 ngày làm việc**

### Điều 115 – Thanh tra thuế
- Thời hạn: không quá **45 ngày làm việc**
- Trường hợp phức tạp: gia hạn không quá **2 lần**, mỗi lần không quá **45 ngày**

---

## 6. Xử phạt Vi phạm (Điều 141-156)

| Hành vi | Mức phạt |
|---|---|
| Chậm nộp hồ sơ khai thuế | 700,000 – 5,000,000 đồng |
| Khai sai dẫn đến thiếu thuế | 20% số tiền thuế khai thiếu |
| Trốn thuế | 1–3 lần số tiền thuế trốn |
| Không đăng ký thuế | 1,000,000 – 3,000,000 đồng |`
  },

  {
    id: 'luat-thue-tndn',
    decree_number: '14/2008/QH12',
    title: 'Luật Thuế Thu nhập doanh nghiệp số 14/2008/QH12 (sửa đổi, bổ sung 2022)',
    category: 'luat',
    issued_date: '2008-06-03',
    effective_date: '2009-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Luat-thue-thu-nhap-doanh-nghiep-2008-14-2008-QH12-17498.aspx',
    summary: `Luật Thuế Thu nhập doanh nghiệp (TNDN) là nền tảng pháp lý điều chỉnh nghĩa vụ thuế TNDN của mọi doanh nghiệp tại Việt Nam. Luật đã qua nhiều lần sửa đổi (2013, 2014, 2020, 2022).

**Mức thuế suất hiện hành:**
- Thuế suất phổ thông: **20%** thu nhập chịu thuế
- Doanh nghiệp có tổng doanh thu năm không quá 20 tỷ đồng: **20%**
- Hoạt động tìm kiếm, thăm dò, khai thác dầu khí: **25–50%**
- Hoạt động tìm kiếm, thăm dò khoáng sản quý hiếm: **40–50%**

**Ưu đãi thuế:** Miễn thuế tối đa 4 năm và giảm 50% trong 9 năm tiếp theo cho dự án đầu tư vào lĩnh vực ưu tiên, địa bàn khó khăn.

**Lưu ý rủi ro:** Chi phí được trừ khi tính thuế TNDN phải đáp ứng đồng thời 3 điều kiện: phát sinh liên quan đến hoạt động sản xuất kinh doanh; có chứng từ hợp lệ; không thuộc danh mục chi phí không được trừ.`,
    content: `# LUẬT THUẾ THU NHẬP DOANH NGHIỆP

## 1. Thu nhập Chịu thuế (Điều 3)

**Thu nhập chịu thuế TNDN bao gồm:**
- Thu nhập từ hoạt động sản xuất, kinh doanh hàng hóa, dịch vụ
- Thu nhập từ chuyển nhượng vốn, chuyển nhượng bất động sản
- Thu nhập từ quyền sở hữu, quyền sử dụng tài sản
- Thu nhập từ chuyển nhượng, cho thuê, thanh lý tài sản
- Thu nhập từ lãi tiền gửi, cho vay vốn, bán ngoại tệ
- Khoản nợ khó đòi đã xóa nay đòi được
- Khoản thu từ hoạt động sản xuất, kinh doanh ở nước ngoài

---

## 2. Chi phí được Trừ (Điều 9) – QUAN TRỌNG NHẤT

### Điều 9, Khoản 1 – Điều kiện để chi phí được trừ:

> *"Các khoản chi được trừ khi xác định thu nhập chịu thuế nếu đáp ứng đủ các điều kiện sau đây:*
> *a) Khoản chi thực tế phát sinh liên quan đến hoạt động sản xuất, kinh doanh của doanh nghiệp;*
> *b) Khoản chi có đủ hoá đơn, chứng từ hợp pháp theo quy định của pháp luật;*
> *c) Khoản chi nếu có hoá đơn mua hàng hoá, dịch vụ từng lần có giá trị từ 20 triệu đồng trở lên (giá đã bao gồm thuế GTGT) khi thanh toán phải có chứng từ thanh toán không dùng tiền mặt."*

### Các chi phí KHÔNG được trừ (Điều 9, Khoản 2):

| Chi phí không được trừ | Lý do |
|---|---|
| Phạt vi phạm hành chính, truy thu thuế | Không liên quan SXKD |
| Chi phí lãi vay vốn phục vụ sản xuất kinh doanh vượt tỷ lệ | Quy định tại NĐ 132/2020 (≤30% EBITDA với giao dịch liên kết) |
| Chi tiền ăn giữa ca vượt mức quy định | Vượt 730,000 đồng/người/tháng |
| Tiền lương, tiền công của chủ hộ kinh doanh | Không phải là lao động làm công ăn lương |
| Chi phí quản lý doanh nghiệp do nước ngoài phân bổ | Không hợp lệ theo TT 96/2015 |
| Trích dự phòng không đúng quy định | Phải theo TT 48/2019 |
| Chi từ thiện, tài trợ không đúng đối tượng | Chỉ tổ chức từ thiện được nhà nước công nhận |

---

## 3. Xác định Thu nhập Chịu thuế

**Công thức:**
\`\`\`
Thu nhập chịu thuế = Doanh thu - Chi phí được trừ + Các khoản thu nhập khác
Thu nhập tính thuế = Thu nhập chịu thuế - Thu nhập miễn thuế - Lỗ kết chuyển
Thuế TNDN phải nộp = Thu nhập tính thuế × Thuế suất
\`\`\`

---

## 4. Thuế suất (Điều 10)

| Đối tượng | Thuế suất |
|---|---|
| Doanh nghiệp thông thường | **20%** |
| Doanh nghiệp dầu khí | 25–50% |
| Hoạt động khai thác tài nguyên quý hiếm | 40–50% |

---

## 5. Ưu đãi Thuế TNDN (Điều 13-15)

### Điều 13 – Thuế suất ưu đãi
- **10%** trong 15 năm: dự án đầu tư tại địa bàn đặc biệt khó khăn, KCX, KCN, KKT, KCN công nghệ cao
- **10%** trong suốt thời gian hoạt động: giáo dục, y tế, môi trường, KH&CN, nhà ở xã hội

### Điều 14 – Miễn giảm thuế TNDN
- **Miễn 4 năm, giảm 50% trong 9 năm tiếp:** dự án đầu tư mới tại địa bàn đặc biệt khó khăn
- **Miễn 2 năm, giảm 50% trong 4 năm tiếp:** dự án đầu tư mới tại địa bàn khó khăn
- **Miễn 2 năm, giảm 50% trong 4 năm tiếp:** doanh nghiệp sử dụng từ 30% lao động là người khuyết tật, sau cai nghiện

---

## 6. Kết chuyển Lỗ (Điều 16)

> *"Doanh nghiệp sau khi quyết toán thuế mà bị lỗ thì được chuyển lỗ sang năm sau. Số lỗ này được trừ vào thu nhập chịu thuế. Thời gian chuyển lỗ tính liên tục không quá 5 năm, kể từ năm tiếp sau năm phát sinh lỗ."*

**Lưu ý quan trọng:** Chỉ được chuyển lỗ từ hoạt động SXKD. Lỗ từ chuyển nhượng BĐS chỉ được bù trừ với lãi từ chuyển nhượng BĐS.`
  },

  {
    id: 'luat-thue-gtgt',
    decree_number: '13/2008/QH12',
    title: 'Luật Thuế Giá trị gia tăng số 13/2008/QH12 (sửa đổi, bổ sung 2024)',
    category: 'luat',
    issued_date: '2008-06-03',
    effective_date: '2009-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Luat-thue-gia-tri-gia-tang-2008-13-2008-QH12-17495.aspx',
    summary: `Luật Thuế GTGT quy định về đối tượng chịu thuế, đối tượng không chịu thuế, căn cứ và phương pháp tính thuế, khấu trừ và hoàn thuế GTGT. Đây là sắc thuế gián tiếp quan trọng nhất trong hệ thống thuế Việt Nam.

**Các mức thuế suất GTGT:**
- **0%:** Hàng hóa xuất khẩu, vận tải quốc tế, dịch vụ cho tổ chức cá nhân nước ngoài
- **5%:** Các mặt hàng thiết yếu (nước sạch, phân bón, thức ăn chăn nuôi, thuốc y tế, thiết bị y tế, nhà ở xã hội...)
- **10%:** Hầu hết hàng hóa dịch vụ còn lại

**Lưu ý:** Luật số 44/2024/QH15 (có hiệu lực từ 01/7/2025) bổ sung quy định về dịch vụ cung cấp qua nền tảng số, buộc các công ty nước ngoài như Google, Facebook, TikTok... phải đăng ký nộp thuế GTGT tại Việt Nam.`,
    content: `# LUẬT THUẾ GIÁ TRỊ GIA TĂNG

## 1. Đối tượng Chịu thuế và Không chịu thuế

### Đối tượng chịu thuế GTGT (Điều 2)
Hàng hóa, dịch vụ dùng cho sản xuất, kinh doanh và tiêu dùng ở Việt Nam, trừ các đối tượng không chịu thuế.

### 26 nhóm hàng hóa/dịch vụ KHÔNG chịu thuế GTGT (Điều 5):
1. Sản phẩm trồng trọt, chăn nuôi, thủy sản ở khâu sơ chế, bảo quản chưa qua chế biến
2. Sản phẩm là giống vật nuôi, giống cây trồng
3. Tưới tiêu nước phục vụ sản xuất nông nghiệp
4. Bảo hiểm nông nghiệp
5. Dịch vụ y tế, thú y
6. Dịch vụ bưu chính, viễn thông công ích
7. Dạy học, dạy nghề
8. Phát sóng truyền thanh, truyền hình bằng nguồn vốn ngân sách
9. Xuất bản, nhập khẩu, phát hành báo, tạp chí, bản tin...
10. Vũ khí, trang thiết bị kỹ thuật chuyên dùng cho quốc phòng an ninh...

---

## 2. Căn cứ tính thuế (Điều 6-8)

### Giá tính thuế GTGT
\`\`\`
Thuế GTGT = Giá tính thuế × Thuế suất

Trong đó:
- Hàng hóa bán ra: Giá bán chưa có thuế GTGT
- Hàng hóa nhập khẩu: Giá nhập khẩu + Thuế nhập khẩu + Thuế TTĐB (nếu có)
\`\`\`

### Phương pháp khấu trừ (Điều 10)
\`\`\`
Thuế GTGT phải nộp = Thuế GTGT đầu ra - Thuế GTGT đầu vào được khấu trừ
\`\`\`

**Điều kiện khấu trừ thuế GTGT đầu vào:**
1. Có hóa đơn GTGT hợp pháp hoặc chứng từ nộp thuế GTGT khâu nhập khẩu
2. Có chứng từ thanh toán không dùng tiền mặt đối với hóa đơn từ **20 triệu đồng** trở lên
3. Dùng cho hoạt động SXKD hàng hóa, dịch vụ chịu thuế GTGT

---

## 3. Hoàn thuế GTGT (Điều 13)

| Trường hợp hoàn thuế | Thời hạn xử lý |
|---|---|
| Doanh nghiệp xuất khẩu có số thuế đầu vào khấu trừ từ 300 triệu đồng | **6 ngày làm việc** (doanh nghiệp tuân thủ tốt) |
| Dự án đầu tư mới chưa có doanh thu | **40 ngày làm việc** |
| Doanh nghiệp sáp nhập, giải thể, phá sản | **40 ngày làm việc** |
| Trường hợp khác | **40 ngày làm việc** |

---

## 4. Các Thuế suất GTGT

| Thuế suất | Áp dụng cho |
|---|---|
| **0%** | Hàng xuất khẩu; Dịch vụ cung ứng ra nước ngoài; Vận tải quốc tế |
| **5%** | Nước sạch phục vụ SX&SH; Phân bón; Thức ăn chăn nuôi; Thuốc bảo vệ thực vật; Thiết bị y tế; Nhà ở xã hội |
| **10%** | Các hàng hóa, dịch vụ còn lại |`
  },

  // ==================== NGHỊ ĐỊNH ====================
  {
    id: 'nd-174-2016',
    decree_number: '174/2016/NĐ-CP',
    title: 'Nghị định 174/2016/NĐ-CP hướng dẫn chi tiết Luật Kế toán',
    category: 'nghi-dinh',
    issued_date: '2016-12-30',
    effective_date: '2017-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Nghi-dinh-174-2016-ND-CP-huong-dan-Luat-ke-toan-334073.aspx',
    summary: `Nghị định 174/2016/NĐ-CP là văn bản hướng dẫn chi tiết thi hành Luật Kế toán 2015, quy định về đơn vị tiền tệ kế toán, chữ ký điện tử, bảo quản tài liệu kế toán, kiểm tra kế toán, kiểm toán nội bộ và các điều khoản thi hành.

**Nội dung trọng tâm:**
- Quy định rõ điều kiện sử dụng chữ ký điện tử trong chứng từ kế toán
- Chi tiết về thời hạn lưu trữ tài liệu kế toán (5 năm hoặc 10 năm tùy loại)
- Quy định về kiểm toán nội bộ bắt buộc với doanh nghiệp nhà nước và niêm yết
- Hướng dẫn cụ thể về việc chuyển đổi từ chứng từ giấy sang điện tử`,
    content: `# NGHỊ ĐỊNH 174/2016/NĐ-CP HƯỚNG DẪN LUẬT KẾ TOÁN

## 1. Đơn vị Tiền tệ trong Kế toán (Điều 4)

> *"Đơn vị tiền tệ sử dụng trong kế toán là Đồng Việt Nam (ký hiệu quốc gia là đồng, ký hiệu quốc tế là VND). Trong trường hợp nghiệp vụ kinh tế, tài chính phát sinh bằng ngoại tệ, đơn vị kế toán phải quy đổi ra đồng Việt Nam theo tỷ giá giao dịch thực tế hoặc tỷ giá ghi trên hóa đơn, chứng từ."*

**Hướng dẫn quy đổi tỷ giá:**
- **Tỷ giá mua vào:** dùng cho khoản thu ngoại tệ
- **Tỷ giá bán ra:** dùng cho khoản chi ngoại tệ
- **Cuối kỳ:** đánh giá lại theo tỷ giá mua bình quân liên ngân hàng do NHNN công bố

---

## 2. Chứng từ Điện tử (Điều 6-10)

### Điều 6 – Chứng từ điện tử được công nhận khi:
1. Được tạo, xử lý và lưu trữ theo quy định pháp luật về giao dịch điện tử
2. Có chữ ký điện tử của người có thẩm quyền ký
3. Được lưu trữ và bảo quản an toàn

### Chữ ký điện tử hợp lệ cần:
- Được tạo ra trong thời gian chứng thư số có hiệu lực
- Có thể xác minh chứng thư số hợp lệ tại thời điểm ký

---

## 3. Bảo quản và Lưu trữ Tài liệu Kế toán (Điều 12-14)

### Thời hạn lưu trữ:

| Loại tài liệu | Thời hạn lưu trữ |
|---|---|
| Tài liệu kế toán dùng cho quản lý, điều hành (không dùng trực tiếp để ghi sổ, lập BCTC) | **Tối thiểu 5 năm** |
| Chứng từ kế toán, sổ kế toán và BCTC năm | **Tối thiểu 10 năm** |
| Tài liệu kế toán liên quan đến thanh lý, xử lý tài sản | **Tối thiểu 10 năm** |
| Tài liệu kế toán liên quan đến thành lập, giải thể, phá sản, kết thúc dự án | **Lưu trữ vĩnh viễn** |

> ⚠️ **Cảnh báo:** Hủy tài liệu kế toán trước thời hạn quy định có thể bị phạt từ 5 triệu đến 20 triệu đồng theo Nghị định 41/2018 và có thể bị truy thu thuế do không có bằng chứng hợp lệ.

---

## 4. Kiểm toán Nội bộ (Điều 40-43)

### Doanh nghiệp bắt buộc phải có kiểm toán nội bộ:
1. Công ty niêm yết trên thị trường chứng khoán
2. Doanh nghiệp nhà nước là công ty mẹ hoạt động theo mô hình công ty mẹ – công ty con
3. Doanh nghiệp nhà nước nắm giữ từ 50% vốn điều lệ trở lên

### Nguyên tắc kiểm toán nội bộ:
- Kiểm toán viên nội bộ không được đồng thời là người kiêm nhiệm các phần hành kế toán
- Báo cáo kiểm toán nội bộ phải được gửi trực tiếp đến Hội đồng quản trị/Ban kiểm soát`
  },

  {
    id: 'nd-123-2020',
    decree_number: '123/2020/NĐ-CP',
    title: 'Nghị định 123/2020/NĐ-CP quy định về Hóa đơn, Chứng từ',
    category: 'hoa-don',
    issued_date: '2020-10-19',
    effective_date: '2022-07-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-123-2020-ND-CP-hoa-don-chung-tu-458165.aspx',
    summary: `Nghị định 123/2020/NĐ-CP là văn bản pháp lý toàn diện nhất về hóa đơn và chứng từ, thay thế Nghị định 51/2010 và 04/2014. Nghị định này đặt nền móng cho việc chuyển đổi toàn diện sang hóa đơn điện tử (HĐĐT) trên toàn quốc.

**Điểm mới cốt lõi:**
- Bắt buộc 100% doanh nghiệp sử dụng HĐĐT thay thế hóa đơn giấy từ 01/7/2022
- Quy định chi tiết về HĐĐT có mã của cơ quan thuế và HĐĐT không có mã
- Thiết lập nguyên tắc xử lý HĐĐT có sai sót (hủy và phát hành lại, hoặc điều chỉnh)
- Quy định về chứng từ điện tử (biên lai thu, chứng từ khấu trừ thuế TNCN)

**Rủi ro:** Phát hành HĐĐT sai định dạng hoặc thông tin bắt buộc bị phạt từ 4 triệu đến 8 triệu đồng.`,
    content: `# NGHỊ ĐỊNH 123/2020/NĐ-CP VỀ HÓA ĐƠN, CHỨNG TỪ

## 1. Các Loại Hóa đơn (Điều 8)

| Loại hóa đơn | Mô tả | Ai sử dụng |
|---|---|---|
| **HĐĐT có mã của CQT** | Cơ quan thuế cấp mã trước khi gửi cho người mua | Hộ kinh doanh, doanh nghiệp rủi ro cao |
| **HĐĐT không có mã CQT** | Doanh nghiệp tự cấp, sau gửi thông tin lên CQT | Doanh nghiệp đáp ứng điều kiện, hoạt động ổn định |
| **Hóa đơn xuất khẩu** | Dùng trong xuất khẩu hàng hóa ra nước ngoài | Doanh nghiệp xuất khẩu |

---

## 2. Nội dung Bắt buộc trên HĐĐT (Điều 10)

Hóa đơn điện tử phải có đủ **các nội dung chủ yếu sau:**
1. Tên hóa đơn, ký hiệu hóa đơn và ký hiệu mẫu hóa đơn
2. Tên, địa chỉ, mã số thuế của người bán
3. Tên, địa chỉ, mã số thuế của người mua (nếu có)
4. Tên, đơn vị tính, số lượng, đơn giá hàng hóa, dịch vụ
5. Thành tiền chưa có thuế GTGT, thuế suất GTGT, tiền thuế GTGT, tổng tiền thanh toán
6. Chữ ký số của người bán
7. Ngày, tháng, năm lập hóa đơn
8. Mã của cơ quan thuế (với HĐĐT có mã)
9. Phí, lệ phí thuộc ngân sách nhà nước (nếu có)

---

## 3. Xử lý HĐĐT có Sai sót (Điều 19)

### Các trường hợp sai sót và cách xử lý:

**Trường hợp 1:** HĐĐT chưa gửi cho người mua có sai sót
→ Hủy hóa đơn sai, lập lại hóa đơn đúng, gửi thông tin lên CQT

**Trường hợp 2:** HĐĐT đã gửi người mua, phát hiện sai về tên, địa chỉ (không sai MST, tiền thuế)
→ Lập văn bản thỏa thuận, không cần lập hóa đơn mới

**Trường hợp 3:** HĐĐT đã gửi người mua, sai về MST, giá trị, thuế suất, tiền thuế
→ Có 2 cách:
- Lập hóa đơn **điều chỉnh** (tăng hoặc giảm)
- Hủy hóa đơn cũ và lập hóa đơn **thay thế** mới

> ⚠️ **Lưu ý:** Phải gửi thông báo điều chỉnh/thay thế đến cơ quan thuế theo Mẫu 04/SS-HĐĐT

---

## 4. Thời điểm Lập Hóa đơn (Điều 9)

| Loại giao dịch | Thời điểm lập |
|---|---|
| Bán hàng hóa | Thời điểm chuyển giao quyền sở hữu/quyền sử dụng hàng hóa |
| Cung cấp dịch vụ | Thời điểm hoàn thành dịch vụ hoặc thời điểm lập hóa đơn nếu HĐ được lập trước khi dịch vụ hoàn thành |
| Xây dựng, lắp đặt | Thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình |
| Cung cấp điện, nước sinh hoạt | Ngày ghi chỉ số điện, nước hoặc ngày chốt doanh số |

---

## 5. Tra cứu và Lưu trữ HĐĐT

- Doanh nghiệp phải lưu trữ HĐĐT tối thiểu **10 năm**
- Dữ liệu lưu trữ phải đảm bảo tính toàn vẹn, không bị sửa đổi
- Cơ quan thuế có quyền tra cứu HĐĐT bất kỳ lúc nào trong thời gian lưu trữ`
  },

  {
    id: 'nd-41-2018',
    decree_number: '41/2018/NĐ-CP',
    title: 'Nghị định 41/2018/NĐ-CP xử phạt vi phạm hành chính về kế toán – kiểm toán',
    category: 'nghi-dinh',
    issued_date: '2018-03-12',
    effective_date: '2018-05-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Nghi-dinh-41-2018-ND-CP-xu-phat-hanh-chinh-ke-toan-kiem-toan-380046.aspx',
    summary: `Nghị định 41/2018/NĐ-CP quy định về hành vi vi phạm, hình thức xử phạt, mức phạt tiền, biện pháp khắc phục hậu quả trong lĩnh vực kế toán và kiểm toán độc lập.

**Mức phạt tiền tối đa:** 50 triệu đồng/hành vi đối với tổ chức, 25 triệu đồng với cá nhân.

**Nhóm vi phạm chính và mức phạt:**
- Vi phạm về chứng từ kế toán: 1–10 triệu đồng
- Vi phạm về sổ kế toán: 3–20 triệu đồng
- Vi phạm về báo cáo tài chính: 5–30 triệu đồng
- Vi phạm về kiểm tra kế toán: 3–20 triệu đồng

**Lưu ý:** Nghị định áp dụng cho kế toán viên, kế toán trưởng, giám đốc/chủ doanh nghiệp và cả đơn vị cung cấp dịch vụ kế toán.`,
    content: `# NGHỊ ĐỊNH 41/2018/NĐ-CP XỬ PHẠT VI PHẠM HÀNH CHÍNH VỀ KẾ TOÁN

## 1. Vi phạm về Chứng từ Kế toán (Điều 8)

| Hành vi vi phạm | Mức phạt |
|---|---|
| Lập chứng từ kế toán không đúng nội dung, không rõ ràng | 3–5 triệu |
| Lập chứng từ kế toán không đủ số liên theo quy định | 3–5 triệu |
| Giả mạo, khai man chứng từ kế toán | 20–30 triệu |
| Thỏa thuận hoặc ép buộc người khác giả mạo chứng từ | 30–40 triệu |
| Không lập chứng từ kế toán khi nghiệp vụ phát sinh | 5–10 triệu |

---

## 2. Vi phạm về Sổ Kế toán (Điều 9-10)

| Hành vi vi phạm | Mức phạt |
|---|---|
| Không mở sổ kế toán | 5–10 triệu |
| Ghi sổ kế toán không kịp thời, không đầy đủ | 3–5 triệu |
| Mở hai hệ thống sổ kế toán | 40–50 triệu |
| Sửa chữa sổ kế toán không đúng quy định | 5–10 triệu |

---

## 3. Vi phạm về Báo cáo Tài chính (Điều 11-13)

| Hành vi vi phạm | Mức phạt |
|---|---|
| Nộp BCTC chậm từ 1–3 tháng | 5–10 triệu |
| Nộp BCTC chậm trên 3 tháng | 10–20 triệu |
| Không nộp BCTC | 20–30 triệu |
| BCTC có số liệu sai do không tuân thủ chế độ kế toán | 20–30 triệu |
| Không công bố BCTC theo quy định | 10–20 triệu |

---

## 4. Vi phạm về Lưu trữ Tài liệu Kế toán (Điều 15)

| Hành vi vi phạm | Mức phạt |
|---|---|
| Không lưu trữ đủ thời hạn | 5–10 triệu |
| Hủy tài liệu kế toán trước hạn | 10–20 triệu |
| Mang tài liệu kế toán ra nước ngoài trái phép | 30–40 triệu |

---

## 5. Vi phạm về Kế toán trưởng (Điều 17)

| Hành vi vi phạm | Mức phạt |
|---|---|
| Không bố trí kế toán trưởng theo quy định | 5–10 triệu |
| Không đủ điều kiện làm kế toán trưởng vẫn bổ nhiệm | 5–10 triệu |

> 📌 **Lưu ý quan trọng:** Mức phạt tại Nghị định 41/2018 áp dụng cho **cá nhân**. Đối với **tổ chức vi phạm**, mức phạt tiền gấp **2 lần** mức phạt đối với cá nhân. Ngoài phạt tiền, còn có thể bị áp dụng hình thức phạt bổ sung như đình chỉ hoạt động kinh doanh dịch vụ kế toán từ 3–6 tháng.`
  },

  {
    id: 'nd-132-2020',
    decree_number: '132/2020/NĐ-CP',
    title: 'Nghị định 132/2020/NĐ-CP quản lý thuế giao dịch liên kết',
    category: 'nghi-dinh',
    issued_date: '2020-11-05',
    effective_date: '2020-12-20',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-132-2020-ND-CP-quan-ly-thue-giao-dich-lien-ket-458620.aspx',
    summary: `Nghị định 132/2020/NĐ-CP quy định về quản lý thuế đối với doanh nghiệp có giao dịch liên kết (Transfer Pricing). Đây là văn bản pháp lý quan trọng nhất về chống chuyển giá tại Việt Nam.

**Quan trọng nhất: Giới hạn Chi phí lãi vay được trừ (Khoản 3, Điều 16):**
Tổng chi phí lãi vay phát sinh trong kỳ của doanh nghiệp không vượt quá **30% EBITDA** (lợi nhuận thuần từ hoạt động kinh doanh cộng chi phí lãi vay, khấu hao). Phần chi phí vượt có thể chuyển sang 5 năm tiếp theo.

**Xác định giao dịch liên kết:** Tỷ lệ sở hữu vốn từ **25% trở lên** giữa các bên được coi là liên kết.`,
    content: `# NGHỊ ĐỊNH 132/2020/NĐ-CP QUẢN LÝ THUẾ GIAO DỊCH LIÊN KẾT

## 1. Các Bên Liên kết (Điều 5)

Các bên được coi là **có quan hệ liên kết** khi:
- Một bên sở hữu trực tiếp/gián tiếp từ **25% vốn góp** của bên kia
- Cùng có một bên thứ ba sở hữu từ **25% vốn góp** trở lên
- Một bên bảo lãnh hoặc cho bên kia vay trên **25% vốn góp** của bên đi vay
- Một bên kiểm soát trực tiếp hoặc gián tiếp việc bổ nhiệm Ban điều hành của bên kia
- Hai doanh nghiệp cùng có trên **50% thành viên HĐQT** do một bên thứ ba bổ nhiệm

---

## 2. Nguyên tắc Giao dịch Độc lập (Điều 6)

> *"Các giao dịch liên kết phải được xác định theo nguyên tắc giao dịch độc lập (arm's length principle), tức là phải phản ánh giá, điều kiện giao dịch như giao dịch giữa các bên không có quan hệ liên kết trên thị trường."*

---

## 3. Giới hạn Chi phí Lãi vay (Điều 16) – CỰC KỲ QUAN TRỌNG

> *"Tổng chi phí lãi vay (sau khi trừ lãi tiền gửi và lãi cho vay) phát sinh trong kỳ được trừ khi xác định thu nhập chịu thuế TNDN không vượt quá **30%** của tổng lợi nhuận thuần từ hoạt động kinh doanh trong kỳ cộng chi phí lãi vay (sau khi trừ lãi tiền gửi và lãi cho vay) và chi phí khấu hao trong kỳ (EBITDA)."*

**Ví dụ tính toán:**
\`\`\`
EBITDA = Lợi nhuận trước thuế + Chi phí lãi vay ròng + Chi phí khấu hao
EBITDA = 2,000,000,000 + 800,000,000 + 500,000,000 = 3,300,000,000 đồng

Chi phí lãi vay tối đa được trừ = 3,300,000,000 × 30% = 990,000,000 đồng
Chi phí lãi vay thực tế phát sinh = 800,000,000 đồng
→ Toàn bộ 800 triệu được trừ (vì < 990 triệu)
\`\`\`

**Phần chi phí lãi vay vượt giới hạn:**
- Được chuyển sang **5 năm** tiếp theo nếu còn dư EBITDA để bù trừ

---

## 4. Hồ sơ Định giá Chuyển giao (Điều 18-19)

Doanh nghiệp có giao dịch liên kết phải lập và lưu trữ **3 tầng hồ sơ:**

| Tầng | Hồ sơ | Nội dung |
|---|---|---|
| **Tầng 1** | Hồ sơ Quốc gia | Thông tin giao dịch liên kết, phân tích so sánh |
| **Tầng 2** | Hồ sơ Tập đoàn | Mô tả kinh doanh, cơ cấu pháp lý, phân bổ lợi nhuận |
| **Tầng 3** | Báo cáo lợi nhuận liên quốc gia (CbCR) | Chỉ với tập đoàn đa quốc gia có doanh thu hợp nhất từ 18.000 tỷ VND |

---

## 5. Miễn lập Hồ sơ (Điều 19, Khoản 2)

Doanh nghiệp được miễn lập hồ sơ định giá chuyển giao nếu:
- Tổng doanh thu phát sinh trong kỳ dưới **50 tỷ đồng** và tổng giá trị giao dịch liên kết dưới **30 tỷ đồng**
- Đã ký kết Thỏa thuận trước về giá (APA) với cơ quan thuế
- Chỉ thực hiện giao dịch với bên liên kết là đối tượng nộp thuế TNDN tại Việt Nam với cùng thuế suất, không được hưởng ưu đãi thuế`
  },

  // ==================== THÔNG TƯ ====================
  {
    id: 'tt-200-2014',
    decree_number: '200/2014/TT-BTC',
    title: 'Thông tư 200/2014/TT-BTC Chế độ Kế toán Doanh nghiệp',
    category: 'thong-tu',
    issued_date: '2014-12-22',
    effective_date: '2015-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Thong-tu-200-2014-TT-BTC-che-do-ke-toan-doanh-nghiep-262812.aspx',
    summary: `Thông tư 200/2014/TT-BTC là văn bản trụ cột của chế độ kế toán doanh nghiệp Việt Nam hiện hành, áp dụng cho các doanh nghiệp vừa và lớn (thay thế Quyết định 15/2006/QĐ-BTC). Thông tư này bao gồm toàn bộ hệ thống tài khoản, chứng từ mẫu, sổ kế toán và báo cáo tài chính.

**Hệ thống tài khoản kế toán** gồm 9 loại tài khoản:
- Loại 1: Tài sản ngắn hạn (TK 111-152)
- Loại 2: Tài sản dài hạn (TK 211-269)
- Loại 3: Nợ phải trả (TK 311-356)
- Loại 4: Vốn chủ sở hữu (TK 411-461)
- Loại 5: Doanh thu (TK 511-521)
- Loại 6: Chi phí SXKD (TK 611-642)
- Loại 7: Thu nhập khác (TK 711)
- Loại 8: Chi phí khác (TK 811)
- Loại 9: Xác định kết quả kinh doanh (TK 911)

**Doanh nghiệp áp dụng:** Mọi loại hình doanh nghiệp hoạt động trong lĩnh vực sản xuất, thương mại, dịch vụ (trừ doanh nghiệp nhỏ và siêu nhỏ áp dụng TT 133/2016).`,
    content: `# THÔNG TƯ 200/2014/TT-BTC – CHẾ ĐỘ KẾ TOÁN DOANH NGHIỆP

## 1. Hệ thống Tài khoản Kế toán (Phần II)

### Tài khoản Loại 1 – Tài sản Ngắn hạn

| Số TK | Tên tài khoản | Ghi chú |
|---|---|---|
| **111** | Tiền mặt | Cả VND và ngoại tệ |
| **112** | Tiền gửi ngân hàng | Phân loại theo ngân hàng |
| **113** | Tiền đang chuyển | Tiền gửi chưa về tài khoản |
| **121** | Chứng khoán kinh doanh | Cổ phiếu, trái phiếu giữ để bán |
| **128** | Đầu tư nắm giữ đến ngày đáo hạn | |
| **131** | Phải thu của khách hàng | |
| **133** | Thuế GTGT được khấu trừ | TK 1331 (GTGT hàng hóa), 1332 (TSCĐ) |
| **141** | Tạm ứng | |
| **152** | Nguyên liệu, vật liệu | |
| **153** | Công cụ, dụng cụ | |
| **154** | Chi phí SXKD dở dang | |
| **155** | Thành phẩm | |
| **156** | Hàng hóa | |

### Tài khoản Loại 2 – Tài sản Dài hạn

| Số TK | Tên tài khoản | Ghi chú |
|---|---|---|
| **211** | Tài sản cố định hữu hình | Nhà xưởng, máy móc, xe cộ |
| **212** | Tài sản cố định thuê tài chính | |
| **213** | Tài sản cố định vô hình | Bản quyền, thương hiệu |
| **214** | Hao mòn TSCĐ | TK âm (giảm trừ) |
| **217** | Bất động sản đầu tư | |
| **221** | Đầu tư vào công ty con | |
| **222** | Đầu tư vào công ty liên kết | Tỷ lệ 20–50% vốn |
| **228** | Đầu tư góp vốn vào đơn vị khác | Tỷ lệ < 20% vốn |

---

## 2. Nguyên tắc Kế toán Doanh thu (TK 511)

### Điều kiện ghi nhận doanh thu bán hàng:
1. DN đã chuyển giao phần lớn rủi ro và lợi ích gắn liền với quyền sở hữu sản phẩm
2. DN không còn nắm giữ quyền quản lý hàng hóa như người sở hữu
3. Doanh thu được xác định tương đối chắc chắn
4. DN đã thu được hoặc sẽ thu được lợi ích kinh tế từ giao dịch
5. Xác định được chi phí liên quan đến giao dịch

### Hạch toán doanh thu bán hàng:
\`\`\`
Khi bán hàng (phương pháp khấu trừ):
Nợ TK 131/111/112 (Tổng giá thanh toán)
   Có TK 511 (Doanh thu thuần)
   Có TK 3331 (Thuế GTGT phải nộp)

Cuối kỳ kết chuyển doanh thu:
Nợ TK 511
   Có TK 911 (Xác định kết quả kinh doanh)
\`\`\`

---

## 3. Nguyên tắc Kế toán Chi phí (TK 6xx)

| Nhóm chi phí | Tài khoản | Mô tả |
|---|---|---|
| Chi phí nguyên vật liệu trực tiếp | **621** | NVL đưa vào sản xuất |
| Chi phí nhân công trực tiếp | **622** | Lương, BHXH công nhân sản xuất |
| Chi phí sản xuất chung | **627** | Khấu hao, điện, nước nhà xưởng |
| Chi phí bán hàng | **641** | Hoa hồng, quảng cáo, vận chuyển |
| Chi phí quản lý DN | **642** | Lương CBQL, văn phòng, khấu hao VP |

### Hạch toán Khấu hao TSCĐ:
\`\`\`
Nợ TK 627/641/642 (Chi phí khấu hao)
   Có TK 214 (Hao mòn TSCĐ)
\`\`\`

---

## 4. Báo cáo Tài chính theo TT 200 (Phần IV)

Doanh nghiệp phải lập **5 biểu báo cáo tài chính:**
1. **Mẫu B01-DN:** Bảng cân đối kế toán
2. **Mẫu B02-DN:** Báo cáo kết quả hoạt động kinh doanh
3. **Mẫu B03-DN:** Báo cáo lưu chuyển tiền tệ (PP trực tiếp hoặc gián tiếp)
4. **Mẫu B09-DN:** Bản thuyết minh báo cáo tài chính
5. **Mẫu B10-DN:** Bảng cân đối tài khoản (không bắt buộc nộp, chỉ nội bộ)

---

## 5. Kế toán Hàng tồn Kho (TK 152, 155, 156)

### Các phương pháp tính giá hàng xuất kho:
1. **Giá thực tế đích danh (Specific Identification):** Xuất lô nào tính giá lô đó
2. **Bình quân gia quyền (Weighted Average):** Tính trung bình sau mỗi lần nhập hoặc cuối kỳ
3. **Nhập trước – Xuất trước (FIFO):** Hàng mua trước xuất trước

> **Lưu ý:** Phương pháp tính giá hàng xuất kho phải nhất quán trong kỳ kế toán. Thay đổi phương pháp phải giải trình trong Thuyết minh BCTC.`
  },

  {
    id: 'tt-133-2016',
    decree_number: '133/2016/TT-BTC',
    title: 'Thông tư 133/2016/TT-BTC Chế độ Kế toán Doanh nghiệp Nhỏ và Vừa',
    category: 'thong-tu',
    issued_date: '2016-08-26',
    effective_date: '2017-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Thong-tu-133-2016-TT-BTC-huong-dan-Che-do-ke-toan-Doanh-nghiep-nho-va-vua-316684.aspx',
    summary: `Thông tư 133/2016/TT-BTC là chế độ kế toán dành riêng cho doanh nghiệp nhỏ và vừa (SME) và hộ kinh doanh, thay thế Quyết định 48/2006 và Thông tư 138/2011. Hệ thống này được thiết kế đơn giản hơn TT 200, giảm số lượng tài khoản và biểu mẫu báo cáo.

**Đối tượng áp dụng:** Doanh nghiệp nhỏ và vừa theo tiêu chí của Luật Hỗ trợ DNNVV 2017 (vốn ≤ 100 tỷ hoặc lao động ≤ 200 người, tùy ngành). Doanh nghiệp siêu nhỏ (vốn ≤ 3 tỷ hoặc lao động ≤ 10 người) được lập BCTC đơn giản hơn nữa.

**Điểm đơn giản hóa:** Chỉ sử dụng **hệ thống 48 tài khoản** (so với 86 tài khoản của TT 200). Không bắt buộc lập Báo cáo lưu chuyển tiền tệ với doanh nghiệp siêu nhỏ.`,
    content: `# THÔNG TƯ 133/2016/TT-BTC – KẾ TOÁN DOANH NGHIỆP NHỎ VÀ VỪA

## 1. Đối tượng và Phạm vi Áp dụng (Điều 1-3)

### Điều 2 – Đối tượng áp dụng

| Nhóm | Tiêu chí |
|---|---|
| **Doanh nghiệp siêu nhỏ** | Vốn ≤ 3 tỷ VND hoặc Lao động ≤ 10 người (phi nông nghiệp) |
| **Doanh nghiệp nhỏ** | Vốn ≤ 10–100 tỷ VND (tùy ngành) hoặc Lao động ≤ 100–200 người |
| **Doanh nghiệp vừa** | Vốn ≤ 20–200 tỷ VND (tùy ngành) hoặc Lao động ≤ 200–300 người |

### Lựa chọn áp dụng:
- DNNVV **bắt buộc** áp dụng TT 133 (trừ khi lựa chọn áp dụng TT 200)
- DNNVV **có thể lựa chọn** áp dụng TT 200 nếu muốn
- Khi đã chọn TT 200, muốn quay về TT 133 phải thông báo cho cơ quan thuế

---

## 2. Hệ thống Tài khoản Đơn giản hóa (Phụ lục 1)

TT 133 sử dụng hệ thống tài khoản gọn hơn, ví dụ:

| Tài khoản TT 200 | Tài khoản TT 133 | Điểm khác biệt |
|---|---|---|
| TK 111, 112, 113 riêng biệt | TK 111 (Tiền) bao gồm cả tiền gửi | Gộp lại đơn giản hơn |
| TK 621, 622, 627 riêng biệt | TK 154 (Tập hợp chi phí SX) | Không cần phân tách chi tiết |
| TK 641, 642 riêng biệt | Gộp vào TK 642 | Một tài khoản chi phí |

---

## 3. Báo cáo Tài chính (Điều 14)

### Doanh nghiệp nhỏ và vừa (không phải siêu nhỏ):
1. Bảng cân đối kế toán (Mẫu B01a-DNN hoặc B01b-DNN)
2. Báo cáo kết quả HĐKD (Mẫu B02-DNN)
3. Bản thuyết minh BCTC (Mẫu B09-DNN)
4. Báo cáo lưu chuyển tiền tệ (không bắt buộc với DNNN)

### Doanh nghiệp siêu nhỏ:
- Chỉ cần lập **2 báo cáo:** Bảng cân đối kế toán và Báo cáo KQHĐKD
- Không bắt buộc lập Thuyết minh BCTC chi tiết

---

## 4. Hạch toán Đặc trưng của TT 133

### Ghi nhận chi phí (Điều 49-55):
\`\`\`
Chi phí bán hàng và QLDN gộp chung:
Nợ TK 642 (Chi phí bán hàng + QLDN)
   Có TK 111/112/334/...

Cuối kỳ kết chuyển:
Nợ TK 911
   Có TK 642
\`\`\`

### Kế toán thuế GTGT đầu vào:
\`\`\`
Phương pháp khấu trừ:
Nợ TK 133 (Thuế GTGT được khấu trừ)
   Có TK 111/112/331

Phương pháp trực tiếp:
Không dùng TK 133, thuế GTGT đầu vào gộp vào giá mua
\`\`\``
  },

  {
    id: 'tt-219-2013',
    decree_number: '219/2013/TT-BTC',
    title: 'Thông tư 219/2013/TT-BTC hướng dẫn Luật Thuế GTGT',
    category: 'thue',
    issued_date: '2013-12-31',
    effective_date: '2014-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-219-2013-TT-BTC-huong-dan-Luat-Thue-GTGT-va-Nghi-dinh-209-2013-ND-CP-218608.aspx',
    summary: `Thông tư 219/2013/TT-BTC là văn bản hướng dẫn chi tiết Luật Thuế GTGT, quy định về đối tượng chịu thuế, căn cứ tính thuế, phương pháp tính thuế, khấu trừ và hoàn thuế GTGT. Đây là thông tư chính về thuế GTGT hiện hành (đã được sửa đổi nhiều lần).

**Điểm quan trọng cần nắm:**
- Quy định điều kiện khấu trừ thuế GTGT đầu vào (có hóa đơn, thanh toán không tiền mặt từ 20 triệu)
- Phân biệt rõ phương pháp khấu trừ và phương pháp tính trực tiếp
- Danh mục 26 nhóm hàng hóa không chịu thuế GTGT
- Hướng dẫn chi tiết về thuế suất 0%, 5%, 10%`,
    content: `# THÔNG TƯ 219/2013/TT-BTC HƯỚNG DẪN THUẾ GTGT

## 1. Phương pháp Tính thuế GTGT

### Phương pháp Khấu trừ (Điều 10-13)

**Đối tượng:** Doanh nghiệp có doanh thu từ 1 tỷ đồng/năm trở lên

\`\`\`
Thuế GTGT phải nộp = Thuế GTGT đầu ra - Thuế GTGT đầu vào được khấu trừ

Trong đó:
- Thuế GTGT đầu ra = Giá tính thuế × Thuế suất
- Thuế GTGT đầu vào = Tổng số thuế GTGT ghi trên HĐ GTGT hợp lệ
\`\`\`

**Điều kiện khấu trừ thuế GTGT đầu vào (Điều 15):**
1. Có hóa đơn GTGT (hóa đơn giấy hoặc hóa đơn điện tử hợp lệ)
2. Hóa đơn từ **20 triệu đồng trở lên** phải có chứng từ thanh toán qua ngân hàng
3. Hàng hóa dịch vụ dùng cho hoạt động SXKD chịu thuế GTGT
4. Hàng hóa nhập khẩu phải có tờ khai hải quan và chứng từ nộp thuế GTGT khâu nhập khẩu

> ⚠️ **Lưu ý thực tế:** Thanh toán tiền mặt từ 20 triệu đồng trở lên sẽ KHÔNG được khấu trừ thuế GTGT đầu vào, dù có hóa đơn GTGT hợp lệ.

### Phương pháp Tính trực tiếp (Điều 14)

**Đối tượng:** Doanh nghiệp có doanh thu dưới 1 tỷ/năm; hộ kinh doanh nộp thuế khoán

\`\`\`
Thuế GTGT = GTGT × Thuế suất

Trong đó:
GTGT = Doanh thu - Giá vốn hàng hóa dịch vụ sử dụng cho SXKD
\`\`\`

Tỷ lệ % trên doanh thu cho từng ngành:
| Ngành | Tỷ lệ % |
|---|---|
| Phân phối, cung cấp hàng hóa | 1% |
| Dịch vụ, xây dựng không bao thầu vật tư | 5% |
| Sản xuất, vận tải, dịch vụ có gắn với hàng hóa | 3% |
| Hoạt động kinh doanh khác | 2% |

---

## 2. Hóa đơn GTGT – Điều kiện Ghi nhận Thuế Đầu vào

### Hóa đơn hợp lệ phải đảm bảo:
- Không bị tẩy xóa, sửa chữa
- Ghi đúng MST người mua và người bán
- Số tiền, thuế suất, tiền thuế khớp nhau
- Chữ ký đầy đủ các bên có liên quan

### Trường hợp hóa đơn không đủ điều kiện khấu trừ:
- HĐ của người bán đang bị cưỡng chế hóa đơn
- HĐ không ghi hoặc ghi không đúng MST người mua
- HĐ ghi sai tên hàng hóa dẫn đến thay đổi mức thuế suất`
  },

  {
    id: 'tt-78-2021',
    decree_number: '78/2021/TT-BTC',
    title: 'Thông tư 78/2021/TT-BTC hướng dẫn Nghị định 123/2020 về Hóa đơn Điện tử',
    category: 'hoa-don',
    issued_date: '2021-09-17',
    effective_date: '2021-07-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-78-2021-TT-BTC-hoa-don-chung-tu-479640.aspx',
    summary: `Thông tư 78/2021/TT-BTC hướng dẫn thi hành Nghị định 123/2020/NĐ-CP về hóa đơn điện tử, quy định chi tiết về khởi tạo, phát hành, quản lý và sử dụng HĐĐT. Đây là văn bản kỹ thuật quan trọng cho kế toán viên.

**Lộ trình triển khai HĐĐT toàn quốc:**
- Từ 01/7/2022: Bắt buộc 100% doanh nghiệp trong cả nước sử dụng HĐĐT

**Quy trình đăng ký sử dụng HĐĐT:**
1. Đăng ký thông qua Cổng thông tin điện tử của Tổng cục Thuế (hoadondientu.gdt.gov.vn)
2. Lựa chọn loại HĐĐT: có mã hoặc không có mã của CQT
3. Đăng ký thông tin về phần mềm/giải pháp sử dụng
4. Thông báo phát hành HĐĐT

**Lưu ý quan trọng:** Doanh nghiệp có thể tự phát triển phần mềm HĐĐT hoặc sử dụng dịch vụ của các nhà cung cấp được Bộ Tài chính xác nhận.`,
    content: `# THÔNG TƯ 78/2021/TT-BTC HƯỚNG DẪN HÓA ĐƠN ĐIỆN TỬ

## 1. Đăng ký Sử dụng Hóa đơn Điện tử (Điều 15)

### Quy trình đăng ký:
1. Truy cập Cổng thông tin HĐĐT: **hoadondientu.gdt.gov.vn**
2. Điền đầy đủ Mẫu **01/ĐKTĐ-HĐĐT**
3. Ký số và gửi đến Cơ quan thuế
4. CQT phản hồi trong **1 ngày làm việc**

### Lựa chọn loại HĐĐT:

| Tiêu chí | HĐĐT có Mã CQT | HĐĐT không có Mã CQT |
|---|---|---|
| **Thủ tục** | Gửi lên CQT → CQT cấp mã → Gửi khách hàng | Tự phát hành → Gửi khách hàng → Thông báo CQT |
| **Áp dụng** | Hộ kinh doanh, DN rủi ro cao | DN đáp ứng điều kiện, tuân thủ tốt |
| **Thời gian** | Chậm hơn (phụ thuộc CQT) | Nhanh hơn (tức thì) |

---

## 2. Ký Số Hóa đơn Điện tử (Điều 22)

**HĐĐT phải có chữ ký số** (Digital Signature) của người bán. Các loại chữ ký được chấp nhận:
- Chữ ký số được cấp bởi Tổ chức cung cấp dịch vụ chứng thực chữ ký số (CA) được Bộ TT&TT cấp phép
- Chữ ký số do Tổng cục Thuế cấp
- Chữ ký điện tử tổ chức do người đại diện pháp luật của tổ chức ký

> **Lưu ý:** Người mua KHÔNG bắt buộc phải ký số vào HĐĐT (chỉ người bán bắt buộc).

---

## 3. Xử lý Sự cố Hóa đơn Điện tử (Điều 24-25)

### Trường hợp hệ thống của người bán hoặc CQT gặp sự cố:

**Bước 1:** Người bán thông báo sự cố qua cổng thông tin HĐĐT
**Bước 2:** Sử dụng biên lai giấy hoặc in hóa đơn dự phòng đã đăng ký
**Bước 3:** Sau khi hệ thống hoạt động trở lại, chuyển đổi sang HĐĐT trong **2 ngày làm việc**

---

## 4. Hóa đơn Điện tử Chuyển đổi sang Giấy (Điều 7)

HĐĐT được chuyển sang giấy khi:
- Cơ quan thuế yêu cầu
- Khách hàng yêu cầu
- Sử dụng khi kiểm tra hải quan

**Quy định chuyển đổi:**
- Phải ghi thêm dòng chữ: **"Hóa đơn điện tử chuyển đổi"**
- Phải ký tên đóng dấu của người bán (nếu có dấu)
- Giá trị pháp lý tương đương HĐĐT gốc

---

## 5. Hóa đơn Bán Hàng Tại Bảng Mã QR (Điều 30)

Từ 01/7/2025, nhiều loại hình kinh doanh như ăn uống, bán lẻ... sẽ được dùng hóa đơn GTGT qua QR Code trên phần mềm POS được tích hợp với hệ thống của CQT.`
  },

  {
    id: 'tt-45-2013',
    decree_number: '45/2013/TT-BTC',
    title: 'Thông tư 45/2013/TT-BTC hướng dẫn chế độ quản lý, sử dụng và trích khấu hao TSCĐ',
    category: 'thong-tu',
    issued_date: '2013-04-25',
    effective_date: '2013-06-10',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Thong-tu-45-2013-TT-BTC-che-do-quan-ly-su-dung-trich-khau-hao-tai-san-co-dinh-196044.aspx',
    summary: `Thông tư 45/2013/TT-BTC quy định về tiêu chuẩn ghi nhận TSCĐ, phương pháp khấu hao và thời gian khấu hao tối thiểu/tối đa cho từng loại tài sản. Đây là văn bản quan trọng nhất về kế toán tài sản cố định.

**Tiêu chuẩn ghi nhận TSCĐ hữu hình:** Nguyên giá từ **30 triệu đồng** trở lên và có thời gian sử dụng từ **1 năm** trở lên.

**3 phương pháp khấu hao:**
1. Phương pháp đường thẳng (bình quân) – phổ biến nhất
2. Phương pháp số dư giảm dần có điều chỉnh
3. Phương pháp khấu hao theo số lượng, khối lượng sản phẩm`,
    content: `# THÔNG TƯ 45/2013/TT-BTC – QUẢN LÝ VÀ TRÍCH KHẤU HAO TSCĐ

## 1. Tiêu chuẩn Ghi nhận TSCĐ (Điều 3)

### TSCĐ Hữu hình phải đảm bảo:
1. Chắc chắn thu được lợi ích kinh tế trong tương lai từ việc sử dụng tài sản
2. Nguyên giá tài sản phải được xác định một cách đáng tin cậy
3. **Có giá trị từ 30 triệu đồng trở lên**
4. **Có thời gian sử dụng từ 1 năm trở lên**

> ⚠️ **Lưu ý:** TSCĐ dưới 30 triệu đồng được ghi vào **Công cụ dụng cụ (TK 153)** và phân bổ vào chi phí tối đa trong 3 năm (theo TT 200).

### TSCĐ Vô hình:
- Bằng sáng chế, bản quyền, thương hiệu, quyền sử dụng đất, phần mềm máy tính...
- Phải thỏa mãn định nghĩa và tiêu chuẩn tương tự TSCĐ hữu hình

---

## 2. Xác định Nguyên giá TSCĐ (Điều 4)

### TSCĐ mua sắm:
\`\`\`
Nguyên giá = Giá mua + Thuế không hoàn lại (Thuế nhập khẩu, TTĐB nếu có)
           + Chi phí vận chuyển + Chi phí lắp đặt, chạy thử
           - Chiết khấu thương mại, giảm giá hàng mua
\`\`\`

> Lưu ý: **Thuế GTGT không tính vào nguyên giá** nếu DN nộp thuế theo phương pháp khấu trừ.

### TSCĐ tự xây dựng:
\`\`\`
Nguyên giá = Giá thành thực tế + Chi phí lắp đặt, chạy thử
\`\`\`

---

## 3. Phương pháp Khấu hao (Điều 13)

### 1. Phương pháp Khấu hao Đường thẳng (phổ biến nhất)

\`\`\`
Mức khấu hao năm = Nguyên giá ÷ Thời gian sử dụng
Mức khấu hao tháng = Mức khấu hao năm ÷ 12

Ví dụ:
Máy móc thiết bị mua 500 triệu đồng, thời gian sử dụng 10 năm
→ Khấu hao/năm = 500,000,000 ÷ 10 = 50,000,000 đồng
→ Khấu hao/tháng = 50,000,000 ÷ 12 = 4,166,667 đồng

Hạch toán hàng tháng:
Nợ TK 627/641/642: 4,166,667
   Có TK 214: 4,166,667
\`\`\`

### 2. Phương pháp Số dư Giảm dần Có điều chỉnh

\`\`\`
Mức khấu hao năm = Giá trị còn lại × Tỷ lệ khấu hao nhanh

Tỷ lệ khấu hao nhanh = Tỷ lệ đường thẳng × Hệ số điều chỉnh

Hệ số điều chỉnh:
- TS có thời gian sử dụng ≤ 4 năm: hệ số 1.5
- TS có thời gian sử dụng 4–6 năm: hệ số 2.0
- TS có thời gian sử dụng > 6 năm: hệ số 2.5
\`\`\`

---

## 4. Khung Thời gian Khấu hao (Phụ lục 1)

| Loại tài sản | Thời gian tối thiểu | Thời gian tối đa |
|---|---|---|
| Nhà cửa, vật kiến trúc | 6 năm | 50 năm |
| Máy móc, thiết bị | 3 năm | 30 năm |
| Phương tiện vận tải | 6 năm | 30 năm |
| Thiết bị, dụng cụ quản lý | 3 năm | 15 năm |
| Vườn cây lâu năm, súc vật làm việc | 4 năm | 40 năm |

> 📌 **Thực tế:** Doanh nghiệp có thể tự quyết định thời gian khấu hao trong khung min–max. Phải thống nhất với thời gian đăng ký với cơ quan thuế và ghi vào chính sách kế toán.`
  },

  {
    id: 'tt-48-2019',
    decree_number: '48/2019/TT-BTC',
    title: 'Thông tư 48/2019/TT-BTC hướng dẫn trích lập và xử lý các khoản dự phòng',
    category: 'thong-tu',
    issued_date: '2019-07-30',
    effective_date: '2019-09-15',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Thong-tu-48-2019-TT-BTC-trich-lap-va-xu-ly-cac-khoan-du-phong-421131.aspx',
    summary: `Thông tư 48/2019/TT-BTC hướng dẫn về trích lập và xử lý các khoản dự phòng trong doanh nghiệp, thay thế Thông tư 228/2009 và 34/2011. Đây là văn bản quan trọng để doanh nghiệp tính đúng chi phí được trừ thuế TNDN.

**4 loại dự phòng được quy định:**
1. **Dự phòng giảm giá hàng tồn kho** – khi giá thị trường < giá gốc
2. **Dự phòng tổn thất các khoản đầu tư** – khi giá trị thị trường < giá mua
3. **Dự phòng nợ phải thu khó đòi** – nợ quá hạn hoặc DN con nợ phá sản
4. **Dự phòng bảo hành sản phẩm** – ước tính chi phí bảo hành

**Lưu ý:** Chỉ các khoản dự phòng được lập theo đúng quy định của TT 48 mới được tính vào chi phí được trừ thuế TNDN.`,
    content: `# THÔNG TƯ 48/2019/TT-BTC – TRÍCH LẬP VÀ XỬ LÝ DỰ PHÒNG

## 1. Dự phòng Giảm giá Hàng tồn Kho (Điều 2)

### Điều kiện trích lập:
- Hàng tồn kho bị giảm giá so với giá gốc trên sổ kế toán
- Giá trị thuần có thể thực hiện được (Net Realizable Value) < Giá gốc

### Mức trích lập:
\`\`\`
Mức dự phòng = Số lượng HTK × (Giá gốc - Giá trị thuần có thể thực hiện)

Ví dụ:
100 sản phẩm A tồn kho, giá gốc 500,000 đ/sp
Giá bán thị trường hiện tại = 400,000 đ/sp
Chi phí hoàn thiện và bán = 50,000 đ/sp
→ Giá trị thuần = 400,000 - 50,000 = 350,000 đ/sp
→ Mức dự phòng = 100 × (500,000 - 350,000) = 15,000,000 đồng
\`\`\`

**Hạch toán:**
\`\`\`
Trích lập dự phòng:
Nợ TK 632 (Giá vốn hàng bán)
   Có TK 2294 (Dự phòng giảm giá HTK)

Hoàn nhập dự phòng (khi giá phục hồi):
Nợ TK 2294
   Có TK 632
\`\`\`

---

## 2. Dự phòng Nợ phải thu Khó đòi (Điều 6)

### Điều kiện trích lập dự phòng nợ khó đòi:
1. Nợ phải thu đã **quá hạn thanh toán** ghi trên hợp đồng/cam kết
2. Nợ chưa đến hạn nhưng tổ chức kinh tế đang **lâm vào tình trạng phá sản**, giải thể

### Mức trích lập theo thời gian quá hạn:

| Thời gian quá hạn | Tỷ lệ trích lập |
|---|---|
| Từ **6 tháng đến dưới 1 năm** | 30% giá trị nợ |
| Từ **1 năm đến dưới 2 năm** | 50% giá trị nợ |
| Từ **2 năm đến dưới 3 năm** | 70% giá trị nợ |
| Từ **3 năm trở lên** | 100% giá trị nợ |

**Hạch toán:**
\`\`\`
Nợ TK 642 (Chi phí QLDN)
   Có TK 2293 (Dự phòng phải thu khó đòi)
\`\`\`

> ⚠️ **Quan trọng:** Khoản dự phòng này là **chi phí được trừ** khi tính thuế TNDN nếu tuân thủ đúng quy định TT 48. Khi thu hồi được nợ đã lập dự phòng, phải hoàn nhập vào thu nhập.

---

## 3. Dự phòng Tổn thất Khoản Đầu tư Tài chính (Điều 4)

### Điều kiện trích lập:
- Đầu tư vào công ty khác mà giá trị vốn hóa thị trường (hoặc vốn chủ sở hữu thực tế) **thấp hơn** giá gốc đầu tư

### Mức trích lập:
\`\`\`
Với chứng khoán niêm yết:
Dự phòng = Số lượng CP × (Giá gốc - Giá thị trường bình quân 60 ngày trước 31/12)

Với chứng khoán không niêm yết/đầu tư vào công ty khác:
Dự phòng = Vốn góp thực tế - Vốn chủ sở hữu thực tế theo BCTC kiểm toán
\`\`\`

---

## 4. Thời điểm Trích lập và Hoàn nhập Dự phòng

- **Thời điểm trích lập:** **Cuối kỳ kế toán năm**, trước khi lập BCTC (31/12)
- Được trích vào **chi phí hoạt động kinh doanh** (TK 632 hoặc 642)
- Được hoàn nhập khi không còn căn cứ trích lập`
  },

  // ==================== CHUẨN MỰC KẾ TOÁN ====================
  {
    id: 'vas-01',
    decree_number: 'VAS 01',
    title: 'Chuẩn mực kế toán Việt Nam VAS 01 – Chuẩn mực chung',
    category: 'chuan-muc',
    issued_date: '2002-12-31',
    effective_date: '2003-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Quyet-dinh-165-2002-QD-BTC-Chuan-muc-ke-toan-Viet-Nam-so-01-den-04-va-14-65791.aspx',
    summary: `VAS 01 – Chuẩn mực Chung là nền tảng lý luận của toàn bộ hệ thống kế toán Việt Nam, quy định 7 nguyên tắc kế toán cơ bản và 6 yêu cầu về chất lượng thông tin kế toán.

**7 Nguyên tắc kế toán cơ bản:**
1. Cơ sở dồn tích | 2. Hoạt động liên tục | 3. Giá gốc
4. Phù hợp | 5. Nhất quán | 6. Thận trọng | 7. Trọng yếu

**6 Yêu cầu chất lượng thông tin:**
Có thể hiểu được | Thích hợp | Đáng tin cậy | Có thể so sánh được | Kịp thời | Cân bằng giữa lợi ích và chi phí`,
    content: `# CHUẨN MỰC KẾ TOÁN VAS 01 – CHUẨN MỰC CHUNG

## 1. Mục đích và Phạm vi Áp dụng

VAS 01 đặt ra cơ sở lý thuyết cho việc lập và trình bày báo cáo tài chính. Đây là tiêu chuẩn khung (Framework) để:
- Giải thích các khái niệm cơ bản trong kế toán
- Hướng dẫn Hội đồng Chuẩn mực ban hành các VAS cụ thể
- Giúp người dùng BCTC hiểu và giải thích thông tin

---

## 2. Bảy Nguyên tắc Kế toán Cơ bản

### Nguyên tắc 1: Cơ sở Dồn tích (Accrual Basis)
> *"Mọi nghiệp vụ kinh tế, tài chính liên quan đến tài sản, nợ phải trả, nguồn vốn chủ sở hữu, doanh thu, chi phí phải được ghi sổ kế toán vào thời điểm phát sinh, không căn cứ vào thời điểm thực tế thu hoặc thực tế chi tiền hoặc tương đương tiền."*

**Ý nghĩa thực tế:** Doanh thu ghi nhận khi bán hàng (dù chưa thu tiền). Chi phí ghi nhận khi phát sinh (dù chưa thanh toán).

### Nguyên tắc 2: Hoạt động Liên tục (Going Concern)
> *"Báo cáo tài chính phải được lập trên cơ sở giả định là doanh nghiệp đang hoạt động liên tục và sẽ tiếp tục hoạt động kinh doanh bình thường trong tương lai gần."*

**Ngoại lệ:** Khi doanh nghiệp có ý định hoặc buộc phải phá sản, giải thể → BCTC phải được lập trên cơ sở khác và phải được thuyết minh rõ ràng.

### Nguyên tắc 3: Giá Gốc (Historical Cost)
> *"Tài sản phải được ghi nhận theo giá gốc. Giá gốc của tài sản được tính theo số tiền hoặc khoản tương đương tiền đã trả, phải trả hoặc tính theo giá trị hợp lý của tài sản đó vào thời điểm tài sản được ghi nhận."*

**Hạn chế:** Trong môi trường lạm phát cao hoặc tài sản tăng giá mạnh, nguyên giá không phản ánh đúng giá trị hiện tại (đây là lý do IFRS cho phép đánh giá lại tài sản theo Fair Value).

### Nguyên tắc 4: Phù hợp (Matching Principle)
> *"Việc ghi nhận doanh thu và chi phí phải phù hợp với nhau. Khi ghi nhận một khoản doanh thu thì phải ghi nhận một khoản chi phí tương ứng có liên quan đến việc tạo ra doanh thu đó."*

**Ứng dụng:** Khấu hao TSCĐ dùng trong sản xuất được ghi vào giá vốn hàng bán cùng kỳ với doanh thu từ sản phẩm đó.

### Nguyên tắc 5: Nhất quán (Consistency)
> *"Các chính sách và phương pháp kế toán doanh nghiệp đã chọn phải được áp dụng thống nhất ít nhất trong một kỳ kế toán năm."*

**Thay đổi chính sách kế toán:** Phải có lý do chính đáng, tiết lộ đầy đủ trong Thuyết minh BCTC và điều chỉnh hồi tố (retrospective adjustment).

### Nguyên tắc 6: Thận trọng (Conservatism/Prudence)
> *"Thận trọng là việc xem xét, cân nhắc, phán đoán cần thiết để lập các ước tính kế toán trong các điều kiện không chắc chắn sao cho: Tài sản và thu nhập không bị khai cao hơn giá trị thực tế; Nợ phải trả và chi phí không bị khai thấp hơn giá trị thực tế."*

**Biểu hiện thực tế:**
- Trích dự phòng khi tài sản có khả năng giảm giá
- Không ghi nhận lợi nhuận chưa chắc chắn
- Nhưng phải ghi nhận tổn thất khi chắc chắn xảy ra

### Nguyên tắc 7: Trọng yếu (Materiality)
> *"Thông tin được coi là trọng yếu trong trường hợp nếu thiếu thông tin hoặc thiếu chính xác của thông tin đó có thể làm sai lệch đáng kể báo cáo tài chính, làm ảnh hưởng đến quyết định kinh tế của người sử dụng báo cáo tài chính."*

**Ngưỡng trọng yếu thực tế:** Tùy theo đặc điểm doanh nghiệp, thường kế toán kiểm toán đặt ngưỡng trọng yếu là 2–5% lợi nhuận trước thuế hoặc 0.5–1% doanh thu.

---

## 3. Các Yêu cầu Chất lượng Thông tin

| Yêu cầu | Nội dung |
|---|---|
| **Có thể hiểu được** | Thông tin phải được trình bày rõ ràng, dễ hiểu với người có kiến thức kinh doanh và kế toán cơ bản |
| **Thích hợp** | Thông tin có ảnh hưởng đến quyết định kinh tế (dự báo, xác nhận) |
| **Đáng tin cậy** | Trung thực, khách quan, thận trọng, đầy đủ |
| **Có thể so sánh được** | So sánh được giữa các kỳ và giữa các đơn vị |`
  },

  {
    id: 'vas-02',
    decree_number: 'VAS 02',
    title: 'Chuẩn mực kế toán Việt Nam VAS 02 – Hàng tồn kho',
    category: 'chuan-muc',
    issued_date: '2002-12-31',
    effective_date: '2003-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Quyet-dinh-165-2002-QD-BTC-Chuan-muc-ke-toan-Viet-Nam-so-01-den-04-va-14-65791.aspx',
    summary: `VAS 02 quy định về nguyên tắc ghi nhận, xác định giá trị và trình bày thông tin hàng tồn kho trên báo cáo tài chính. Chuẩn mực này áp dụng cho tất cả hàng tồn kho, trừ công trình xây dựng dở dang, công cụ tài chính.

**Hàng tồn kho bao gồm:** Hàng hóa mua về để bán; Thành phẩm chờ tiêu thụ; Sản phẩm dở dang; Nguyên vật liệu, công cụ dụng cụ dùng trong SXKD.

**Nguyên tắc đánh giá:** Hàng tồn kho được tính theo giá gốc (Cost) hoặc giá trị thuần có thể thực hiện được (NRV), tùy theo giá nào thấp hơn (Lower of Cost or NRV).`,
    content: `# CHUẨN MỰC KẾ TOÁN VAS 02 – HÀNG TỒN KHO

## 1. Xác định Giá Gốc Hàng tồn Kho (Đoạn 6-10)

### Giá gốc = Chi phí mua + Chi phí chế biến + Chi phí khác

**Chi phí mua bao gồm:**
- Giá mua
- Thuế nhập khẩu, thuế không hoàn lại (thuế BVMT...)
- Chi phí vận chuyển, bốc dỡ, bảo quản trong quá trình mua
- Trừ: chiết khấu thương mại và giảm giá hàng mua

**Không tính vào giá gốc:**
- Chi phí nguyên vật liệu lãng phí bất thường
- Chi phí lưu kho, bảo quản vượt mức bình thường
- Chi phí bán hàng
- Chi phí quản lý doanh nghiệp

---

## 2. Các Phương pháp Tính Giá Xuất Kho (Đoạn 17-18)

### Phương pháp 1: Giá thực tế đích danh
- Áp dụng cho hàng hóa **có giá trị lớn, có thể nhận biết riêng từng lô**
- Mỗi lô hàng có giá gốc riêng, xuất lô nào tính giá lô đó

### Phương pháp 2: Bình quân gia quyền

**Bình quân cuối kỳ:**
\`\`\`
Đơn giá bình quân = Tổng giá trị tồn đầu kỳ + Tổng giá trị nhập trong kỳ
                    ÷ (Số lượng tồn đầu kỳ + Số lượng nhập trong kỳ)
\`\`\`

**Bình quân sau mỗi lần nhập (moving average):**
\`\`\`
Đơn giá bình quân = Giá trị tồn kho trước lần nhập + Giá trị lần nhập
                    ÷ (Số lượng tồn trước + Số lượng nhập thêm)
\`\`\`

### Phương pháp 3: Nhập trước – Xuất trước (FIFO)
- Hàng nhập trước xuất trước → hàng tồn cuối kỳ có giá nhập gần nhất
- **Phản ánh đúng thực tế** với hàng hóa có hạn sử dụng
- Trong kỳ lạm phát: FIFO cho giá vốn thấp hơn, lợi nhuận cao hơn

> ⚠️ **Lưu ý VAS 02:** Không cho phép sử dụng phương pháp LIFO (Nhập sau – Xuất trước) như IAS 2 (IFRS). Chỉ được dùng 3 phương pháp nêu trên.

---

## 3. Nguyên tắc Giá thấp hơn (Lower of Cost or NRV)

> *"Hàng tồn kho được tính theo giá gốc. Trường hợp giá trị thuần có thể thực hiện được thấp hơn giá gốc thì phải tính theo giá trị thuần có thể thực hiện được."*

**Giá trị thuần có thể thực hiện được (NRV):**
\`\`\`
NRV = Giá bán ước tính - Chi phí ước tính để hoàn thành sản phẩm
                       - Chi phí ước tính cần thiết để bán được hàng
\`\`\`

**Kế toán khi NRV < Giá gốc:**
\`\`\`
Trích dự phòng giảm giá HTK (theo TT 48/2019):
Nợ TK 632
   Có TK 2294 (số = Giá gốc - NRV)
\`\`\``
  },

  {
    id: 'vas-14',
    decree_number: 'VAS 14',
    title: 'Chuẩn mực kế toán Việt Nam VAS 14 – Doanh thu và Thu nhập khác',
    category: 'chuan-muc',
    issued_date: '2002-12-31',
    effective_date: '2003-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Quyet-dinh-165-2002-QD-BTC-Chuan-muc-ke-toan-Viet-Nam-so-01-den-04-va-14-65791.aspx',
    summary: `VAS 14 quy định về nguyên tắc và phương pháp ghi nhận doanh thu và thu nhập khác phát sinh từ các giao dịch bán hàng, cung cấp dịch vụ và sử dụng tài sản của doanh nghiệp.

**5 điều kiện ghi nhận doanh thu bán hàng hóa:**
1. Chuyển giao rủi ro và lợi ích gắn với quyền sở hữu
2. Không còn quyền kiểm soát hàng hóa
3. Doanh thu được xác định tương đối chắc chắn
4. Có khả năng thu lợi ích kinh tế
5. Xác định được chi phí liên quan

**Đặc biệt:** VAS 14 quy định cách ghi nhận doanh thu khi bán hàng có quyền trả lại, bán hàng trả chậm, nhượng quyền thương hiệu.`,
    content: `# CHUẨN MỰC KẾ TOÁN VAS 14 – DOANH THU VÀ THU NHẬP KHÁC

## 1. Ghi nhận Doanh thu Bán Hàng hóa (Đoạn 10-12)

### Năm điều kiện bắt buộc (tất cả 5 phải đáp ứng cùng lúc):

1. **Chuyển giao rủi ro và lợi ích:** Doanh nghiệp đã chuyển giao phần lớn rủi ro và lợi ích gắn liền với quyền sở hữu hàng hóa cho người mua
2. **Mất quyền kiểm soát:** DN không còn nắm giữ quyền quản lý hàng hóa như người sở hữu hoặc quyền kiểm soát hàng hóa
3. **Doanh thu đo lường tin cậy:** Doanh thu được xác định tương đối chắc chắn
4. **Khả năng thu lợi ích:** Chắc chắn thu được lợi ích kinh tế từ giao dịch
5. **Chi phí có thể đo lường:** Xác định được chi phí liên quan đến giao dịch bán hàng

### Thực tế ghi nhận:
\`\`\`
Thông thường: Ghi nhận khi giao hàng, khách hàng ký nhận

Hàng FOB (Free On Board) – Xuất khẩu: 
Ghi nhận khi hàng qua lan can tàu tại cảng xuất

Hàng CIF (Cost, Insurance, Freight):
Ghi nhận khi hàng được giao và bảo hiểm tại cảng đến
\`\`\`

---

## 2. Ghi nhận Doanh thu Cung cấp Dịch vụ (Đoạn 14-20)

Doanh thu từ cung cấp dịch vụ được ghi nhận theo **phương pháp hoàn thành phần công việc** (percentage of completion):

\`\`\`
Doanh thu ghi nhận trong kỳ = Tổng doanh thu HĐ × Tỷ lệ hoàn thành trong kỳ

Tỷ lệ hoàn thành = Chi phí phát sinh tính đến ngày BCTC ÷ Tổng chi phí ước tính
\`\`\`

**Ví dụ hợp đồng tư vấn 12 tháng, tổng phí 1.2 tỷ đồng:**
| Cuối kỳ | Chi phí đã phát sinh | Tổng CP ước tính | Tỷ lệ HT | DT ghi nhận |
|---|---|---|---|---|
| 31/3 | 200 tr | 1,000 tr | 20% | 240 triệu |
| 30/6 | 550 tr | 1,000 tr | 55% | 420 triệu |
| 30/9 | 800 tr | 1,000 tr | 80% | 300 triệu |
| 31/12 | 1,000 tr | 1,000 tr | 100% | 240 triệu |

---

## 3. Doanh thu Đặc biệt

### Bán hàng có quyền trả lại:
- Nếu không ước tính được tỷ lệ hàng bị trả lại → Chưa ghi nhận doanh thu, ghi nhận là **Tiền nhận trước** (TK 131/1388)
- Khi hết thời hạn trả hàng → Ghi nhận doanh thu

### Bán hàng trả chậm/trả góp:
\`\`\`
Doanh thu = Giá bán thu tiền ngay (tại thời điểm giao hàng)
Chênh lệch so với tổng số tiền nhận được = Doanh thu lãi vay (ghi dần theo kỳ)
\`\`\`

### Doanh thu từ nhượng quyền:
- Phí nhượng quyền một lần: Ghi nhận khi thực hiện xong các cam kết ban đầu
- Phí nhượng quyền định kỳ: Ghi nhận theo kỳ khi phát sinh`
  },

  // ==================== THUẾ ====================
  {
    id: 'nd-126-2020',
    decree_number: '126/2020/NĐ-CP',
    title: 'Nghị định 126/2020/NĐ-CP hướng dẫn chi tiết Luật Quản lý thuế 2019',
    category: 'thue',
    issued_date: '2020-10-19',
    effective_date: '2021-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-126-2020-ND-CP-huong-dan-Luat-Quan-ly-thue-458278.aspx',
    summary: `Nghị định 126/2020/NĐ-CP hướng dẫn chi tiết thi hành Luật Quản lý thuế 2019, quy định cụ thể về khai thuế, tính thuế, nộp thuế, hoàn thuế và xử lý vi phạm về thuế.

**Nội dung quan trọng:**
- Quy định kỳ khai thuế (tháng/quý/năm) cho từng loại thuế
- Hướng dẫn thủ tục gia hạn nộp hồ sơ khai thuế và nộp thuế
- Quy định ngưỡng doanh thu để áp dụng khai thuế theo quý thay vì tháng
- Chi tiết về xác định số thuế còn phải nộp và hoàn trả

**Ngưỡng khai thuế theo quý:** Doanh nghiệp có tổng doanh thu bán hàng năm trước dưới **50 tỷ đồng** được khai thuế GTGT, TNCN theo quý (thay vì tháng).`,
    content: `# NGHỊ ĐỊNH 126/2020/NĐ-CP HƯỚNG DẪN LUẬT QUẢN LÝ THUẾ

## 1. Khai Thuế Theo Tháng và Theo Quý (Điều 9)

### Khai thuế theo tháng:
Doanh nghiệp có tổng doanh thu bán hàng hóa, cung cấp dịch vụ năm trước từ **50 tỷ đồng trở lên**

### Khai thuế theo quý:
Doanh nghiệp có tổng doanh thu bán hàng hóa, cung cấp dịch vụ năm trước **dưới 50 tỷ đồng**

### Lịch nộp hồ sơ khai thuế:

| Kỳ khai | Hạn nộp hồ sơ |
|---|---|
| Thuế GTGT tháng M | Ngày 20 tháng M+1 |
| Thuế GTGT quý I | Ngày 30 tháng 4 |
| Thuế GTGT quý II | Ngày 30 tháng 7 |
| Thuế GTGT quý III | Ngày 31 tháng 10 |
| Thuế GTGT quý IV | Ngày 30 tháng 1 năm sau |
| Quyết toán thuế TNDN năm | Ngày 31 tháng 3 năm sau |
| Quyết toán thuế TNCN năm | Ngày 30 tháng 4 năm sau |

---

## 2. Tạm Nộp Thuế TNDN Quý (Điều 8, Khoản 6)

> *"Người nộp thuế tạm nộp thuế thu nhập doanh nghiệp theo quý. Tổng số thuế thu nhập doanh nghiệp tạm nộp của 03 quý đầu năm tính thuế không được thấp hơn 75% số thuế thu nhập doanh nghiệp phải nộp theo quyết toán năm."*

**Hệ quả:** Nếu tạm nộp 3 quý đầu < 75% thuế TNDN năm → Bị phạt chậm nộp phần thiếu từ ngày 31/1 năm sau.

**Ví dụ:**
\`\`\`
Thuế TNDN quyết toán năm X = 1,000,000,000 đồng
75% × 1,000,000,000 = 750,000,000 đồng
Tạm nộp 3 quý = 600,000,000 đồng → Thiếu 150,000,000 đồng
→ Bị tính tiền chậm nộp 0.03%/ngày từ 31/1/X+1 đến ngày nộp đủ
\`\`\`

---

## 3. Gia hạn Nộp Thuế (Điều 62)

### Trường hợp được gia hạn:
1. Bị thiệt hại vật chất gây ảnh hưởng trực tiếp đến SXKD do thiên tai, thảm họa
2. Phải di chuyển địa điểm do yêu cầu của cơ quan nhà nước có thẩm quyền
3. Chưa được thanh toán khoản nợ ngân sách nhà nước liên quan đến SXKD

### Thời gian gia hạn: Không quá **2 năm** kể từ ngày hết thời hạn nộp thuế`
  },

  {
    id: 'tt-111-2013',
    decree_number: '111/2013/TT-BTC',
    title: 'Thông tư 111/2013/TT-BTC hướng dẫn Luật Thuế Thu nhập Cá nhân',
    category: 'thue',
    issued_date: '2013-08-15',
    effective_date: '2013-10-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-111-2013-TT-BTC-thue-thu-nhap-ca-nhan-214231.aspx',
    summary: `Thông tư 111/2013/TT-BTC là văn bản hướng dẫn chi tiết nhất về thuế thu nhập cá nhân (TNCN), quy định về các khoản thu nhập chịu thuế, miễn thuế, căn cứ tính thuế, thuế suất và quyết toán thuế.

**Biểu thuế TNCN lũy tiến từng phần (Thu nhập từ tiền lương, tiền công):**
- Bậc 1: ≤ 5 triệu đồng/tháng → 5%
- Bậc 2: 5–10 triệu → 10%
- Bậc 3: 10–18 triệu → 15%
- Bậc 4: 18–32 triệu → 20%
- Bậc 5: 32–52 triệu → 25%
- Bậc 6: 52–80 triệu → 30%
- Bậc 7: Trên 80 triệu → 35%

**Giảm trừ gia cảnh:** Bản thân: 11 triệu/tháng; Mỗi người phụ thuộc: 4.4 triệu/tháng.`,
    content: `# THÔNG TƯ 111/2013/TT-BTC HƯỚNG DẪN THUẾ TNCN

## 1. Thu nhập Chịu thuế và Không chịu thuế (Điều 2, 4)

### Thu nhập chịu thuế TNCN gồm:
1. Thu nhập từ tiền lương, tiền công, thù lao
2. Thu nhập từ kinh doanh
3. Thu nhập từ đầu tư vốn (lãi cổ phần, lợi tức)
4. Thu nhập từ chuyển nhượng vốn, chứng khoán
5. Thu nhập từ bất động sản
6. Thu nhập từ trúng thưởng
7. Thu nhập từ bản quyền
8. Thu nhập từ nhận quà tặng, thừa kế

### Một số khoản thu nhập KHÔNG chịu thuế TNCN (Điều 4):
- Tiền phụ cấp độc hại, nguy hiểm theo quy định
- Tiền bồi dưỡng nghề nghiệp từ NSNN
- Tiền làm thêm giờ ban đêm (phần trả cao hơn mức thường)
- Thu nhập từ nhận thừa kế, quà tặng giữa vợ chồng, cha mẹ – con cái ruột
- Tiền lương hưu từ BHXH

---

## 2. Giảm Trừ Gia Cảnh (Điều 9)

| Khoản giảm trừ | Mức |
|---|---|
| **Bản thân người nộp thuế** | **11,000,000 đồng/tháng** |
| **Mỗi người phụ thuộc** | **4,400,000 đồng/tháng** |

**Điều kiện đăng ký người phụ thuộc:**
- Con dưới 18 tuổi
- Con từ 18 tuổi trở lên bị tàn tật, không có khả năng lao động
- Con đang học bậc đại học, cao đẳng (trong nước hoặc nước ngoài) không có thu nhập
- Vợ/chồng, cha mẹ đẻ/nuôi không có thu nhập hoặc thu nhập không quá 1 triệu/tháng

---

## 3. Công thức Tính Thuế TNCN

\`\`\`
Thu nhập tính thuế = Tổng thu nhập - Bảo hiểm bắt buộc - Giảm trừ gia cảnh - Các khoản đóng góp từ thiện

Bảo hiểm bắt buộc của NLĐ = BHXH 8% + BHYT 1.5% + BHTN 1% = 10.5%
(Tối đa BHXH: 29.8 triệu × 8%; BHYT: 23.84 triệu × 1.5%)
\`\`\`

**Biểu thuế lũy tiến:**

| Bậc | Thu nhập tính thuế/tháng | Thuế suất | Công thức rút gọn |
|---|---|---|---|
| 1 | ≤ 5 triệu | 5% | = TN × 5% |
| 2 | 5–10 triệu | 10% | = TN × 10% - 250,000 |
| 3 | 10–18 triệu | 15% | = TN × 15% - 750,000 |
| 4 | 18–32 triệu | 20% | = TN × 20% - 1,650,000 |
| 5 | 32–52 triệu | 25% | = TN × 25% - 3,250,000 |
| 6 | 52–80 triệu | 30% | = TN × 30% - 5,850,000 |
| 7 | > 80 triệu | 35% | = TN × 35% - 9,850,000 |

**Ví dụ tính thuế TNCN:**
\`\`\`
Lương tổng = 30,000,000 đồng/tháng
BHXH/YT/TN của NLĐ = 30,000,000 × 10.5% = 3,150,000
Giảm trừ bản thân = 11,000,000
Người phụ thuộc: 1 con = 4,400,000

Thu nhập tính thuế = 30,000,000 - 3,150,000 - 11,000,000 - 4,400,000 = 11,450,000

Thuế TNCN = 11,450,000 × 15% - 750,000 = 967,500 đồng/tháng
\`\`\`

---

## 4. Khấu trừ Thuế TNCN Tại Nguồn (Điều 25)

**Tổ chức, cá nhân trả thu nhập phải khấu trừ thuế TNCN trước khi trả lương:**

| Thu nhập | Tỷ lệ khấu trừ |
|---|---|
| Thu nhập dưới 2 triệu/lần từ hợp đồng dịch vụ | Không khấu trừ (nếu cá nhân cam kết thu nhập dưới mức chịu thuế) |
| Thu nhập từ 2 triệu trở lên/lần từ hợp đồng dịch vụ | **10%** |
| Tiền thù lao, hoa hồng nhượng quyền... | **10%** |`
  },

  // ==================== HÓA ĐƠN ====================
  {
    id: 'nd-15-2022',
    decree_number: '15/2022/NĐ-CP',
    title: 'Nghị định 15/2022/NĐ-CP quy định giảm thuế GTGT 2022-2023',
    category: 'thue',
    issued_date: '2022-01-28',
    effective_date: '2022-02-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-15-2022-ND-CP-giam-muc-thue-gia-tri-gia-tang-490282.aspx',
    summary: `Nghị định 15/2022/NĐ-CP quy định việc giảm thuế GTGT từ 10% xuống 8% đối với phần lớn hàng hóa, dịch vụ trong giai đoạn 2022–2023 nhằm kích thích phục hồi kinh tế sau COVID-19.

**Đối tượng được giảm thuế GTGT từ 10% xuống 8%:**
Hầu hết hàng hóa, dịch vụ, TRỪ:
- Viễn thông, tài chính, ngân hàng, chứng khoán, bảo hiểm
- Kinh doanh bất động sản, kim loại, sản phẩm khai khoáng
- Hàng hóa chịu thuế TTĐB (thuốc lá, bia rượu, ô tô...)
- Công nghệ thông tin theo Luật CNTT

**Lưu ý kế toán:** Khi áp dụng thuế suất 8%, phải ghi đúng 8% trên hóa đơn GTGT. Hóa đơn ghi sai thuế suất bị coi là không hợp lệ.`,
    content: `# NGHỊ ĐỊNH 15/2022/NĐ-CP GIẢM THUẾ GTGT 8%

## 1. Phạm vi Giảm Thuế (Điều 1)

### Hàng hóa, dịch vụ được giảm xuống **8%** (thay vì 10%):

Áp dụng với nhóm hàng hóa, dịch vụ đang áp dụng thuế suất 10%, **ngoại trừ**:

| Nhóm KHÔNG được giảm | Ví dụ |
|---|---|
| Viễn thông | Internet, điện thoại |
| Tài chính, ngân hàng, chứng khoán | Phí dịch vụ ngân hàng, môi giới CK |
| Bảo hiểm | Phí bảo hiểm |
| Kinh doanh bất động sản | Mua bán, cho thuê nhà |
| Sản phẩm khai khoáng chưa qua chế biến | Than đá, dầu thô |
| Sản phẩm chịu thuế TTĐB | Bia, rượu, thuốc lá, ô tô dưới 24 chỗ |
| Sản phẩm CNTT theo Luật CNTT | Phần mềm máy tính |

---

## 2. Cách Lập Hóa đơn Khi Giảm Thuế (Điều 1, Khoản 2)

### Trường hợp doanh nghiệp chỉ bán hàng được giảm:
\`\`\`
Ghi trên hóa đơn: Thuế suất GTGT = 8%
Tiền thuế GTGT = Giá chưa thuế × 8%
\`\`\`

### Trường hợp doanh nghiệp bán cả hàng giảm và không giảm:
- Phải lập **hóa đơn riêng** cho hàng 8% và hàng 10%
- Hoặc ghi cùng hóa đơn nhưng phải ghi rõ từng dòng thuế suất

**Ví dụ hạch toán:**
\`\`\`
Bán hàng hóa thông thường giá 100 triệu, thuế GTGT 8%:
Nợ TK 131: 108,000,000
   Có TK 511: 100,000,000
   Có TK 3331: 8,000,000

Bán bia (thuế TTĐB) giá 100 triệu, thuế GTGT vẫn 10%:
Nợ TK 131: 110,000,000
   Có TK 511: 100,000,000
   Có TK 3331: 10,000,000
\`\`\`

---

## 3. Lưu ý Quan trọng Cho Kế toán Viên

1. **Kiểm tra lại Hóa đơn GTGT đầu vào:** Nếu nhà cung cấp vẫn ghi 10% cho hàng hóa thuộc diện giảm → HĐ sai thuế suất, không được khấu trừ phần vượt 8%

2. **Kê khai Thuế GTGT:** Trên Phụ lục 01-GTGT/HHDV-GTGT, ghi đúng doanh thu theo từng mức thuế suất (8% và 10% riêng biệt)

3. **Khách hàng là ĐTNN không chịu thuế:** Vẫn được giảm thuế nếu hàng hóa thuộc diện giảm, xuất khẩu thì áp thuế suất 0%`
  },

  {
    id: 'tt-99-2025',
    decree_number: '99/2025/TT-BTC',
    title: 'Thông tư 99/2025/TT-BTC Chế độ Kế toán Doanh nghiệp (Mới nhất)',
    category: 'thong-tu',
    issued_date: '2025-07-01',
    effective_date: '2025-07-01',
    status: 'active',
    source_url: '#',
    summary: `Thông tư 99/2025/TT-BTC là bước ngoặt lớn trong ngành kế toán Việt Nam, thay thế hoàn toàn Thông tư 200/2014. Thông tư thiết kế lại toàn bộ hệ thống tài khoản, chú trọng vào việc tiệm cận các chuẩn mực IFRS quốc tế và đơn giản hóa thủ tục hành chính.

**Điểm nhấn quan trọng:**
- **Xóa bỏ sự cứng nhắc trong chứng từ:** Doanh nghiệp được tự chủ hoàn toàn trong thiết kế chứng từ, sổ kế toán miễn đáp ứng nội dung cốt lõi.
- **Thay đổi tên gọi báo cáo tài chính:** Chuyển từ "Bảng cân đối kế toán" sang "Báo cáo tình hình tài chính" theo IFRS.
- **Áp dụng Giá trị hợp lý (Fair Value):** Bắt buộc đánh giá lại một số tài sản theo giá thị trường thay vì chỉ dùng giá gốc.
- **Tài khoản số mới:** Cập nhật bổ sung tài khoản cho giao dịch thương mại điện tử, tiền điện tử.

**Đối tượng áp dụng:** Doanh nghiệp lớn, doanh nghiệp niêm yết, FDI. DNNVV vẫn áp dụng TT 133/2016 (chờ sửa đổi).`,
    content: `# THÔNG TƯ 99/2025/TT-BTC – CHẾ ĐỘ KẾ TOÁN MỚI NHẤT

## 1. Những Thay đổi Cốt lõi so với Thông tư 200

### Thay đổi 1: Tự chủ trong Chứng từ và Sổ Kế toán (Điều 3)

> *"Doanh nghiệp được tự xây dựng, thiết kế biểu mẫu chứng từ kế toán, sổ kế toán phù hợp với đặc điểm hoạt động và yêu cầu quản lý, miễn đáp ứng đủ các nội dung chủ yếu theo quy định của Luật Kế toán."*

**Ý nghĩa:** Không còn bắt buộc dùng đúng mẫu biểu của Bộ Tài chính. Doanh nghiệp được tự thiết kế.

### Thay đổi 2: Báo cáo Tài chính Mới (Điều 15)

| Tên cũ (TT 200) | Tên mới (TT 99) |
|---|---|
| Bảng cân đối kế toán | **Báo cáo tình hình tài chính** (Statement of Financial Position) |
| Báo cáo KQHĐKD | **Báo cáo lãi lỗ và thu nhập toàn diện khác** |
| Báo cáo LCTT | Báo cáo lưu chuyển tiền tệ (giữ nguyên) |

### Thay đổi 3: Áp dụng Giá trị Hợp lý (Điều 18)

**Bắt buộc đánh giá theo Fair Value:**
- Bất động sản đầu tư (Investment Property)
- Tài sản sinh học (Biological Assets)
- Công cụ tài chính phái sinh

---

## 2. Hệ thống Tài khoản Mới

### Tài khoản mới bổ sung:
| Số TK | Tên | Mục đích |
|---|---|---|
| **138** | Phải thu từ hoạt động thương mại điện tử | Phân tách DT từ sàn TMĐT |
| **159** | Hàng hóa lưu kho tại sàn TMĐT | Hàng gửi bán tại Lazada, Shopee... |
| **178** | Tài sản mã hóa kỹ thuật số | Tiền kỹ thuật số, NFT (nếu có) |
| **358** | Nợ phải trả từ sàn TMĐT | Doanh thu tạm giữ bởi sàn |

---

## 3. Nguyên tắc Giá trị Hợp lý (Fair Value Accounting)

### Xác định Fair Value:
\`\`\`
Cấp 1: Giá niêm yết trên thị trường hoạt động (ưu tiên cao nhất)
Cấp 2: Dữ liệu có thể quan sát được (giá giao dịch tương tự)
Cấp 3: Mô hình định giá nội bộ (khi không có dữ liệu thị trường)
\`\`\`

### Hạch toán khi tăng giá trị hợp lý BĐS đầu tư:
\`\`\`
Nợ TK 217 (BĐS đầu tư): Phần tăng thêm
   Có TK 711 (Thu nhập khác): Lãi từ đánh giá lại theo FV

Hạch toán khi giảm giá trị:
Nợ TK 811 (Chi phí khác)
   Có TK 217 (BĐS đầu tư): Phần giảm
\`\`\`

---

## 4. Lộ trình Áp dụng

| Giai đoạn | Thời gian | Đối tượng |
|---|---|---|
| Bắt buộc | Từ 01/01/2026 | Doanh nghiệp niêm yết, ngân hàng, CTCK |
| Khuyến khích | Từ 01/7/2025 | Tất cả DN có thể tự nguyện áp dụng |
| Bắt buộc mở rộng | Từ 01/01/2027 | Tất cả doanh nghiệp vừa và lớn |
| DNNVV | Chờ TT 133 sửa đổi | Theo lộ trình riêng |`
  }
];
