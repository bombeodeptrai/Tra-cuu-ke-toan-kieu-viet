// src/data/diff-medical-database.ts
// Cơ sở dữ liệu đối chiếu điểm mới 2 cột giữa các văn bản pháp luật Y tế, Đấu thầu, Thuế & Phòng khám Hòa Đức
// Tuyệt đối tuân thủ RULE L03: Chỉ dùng hethongphapluat.com hoặc drive nội bộ Kiểu Việt

export interface DiffClauseItem {
  clauseNumber: string;
  topic: string;
  oldVersionText: string;
  oldReference: string;
  newVersionText: string;
  newReference: string;
  practicalImpact: string;
  actionRequired: string;
  riskLevel: 'high' | 'medium' | 'low';
}

export interface DiffDocumentGroup {
  id: string;
  title: string;
  subtitle: string;
  category: 'bidding' | 'medical_device' | 'clinic' | 'tax_finance';
  oldDocName: string;
  newDocName: string;
  effectiveDate: string;
  statusBadge: string;
  summary: string;
  clauses: DiffClauseItem[];
}

export const DIFF_MEDICAL_DATABASE: Record<string, DiffDocumentGroup> = {
  'nd-214-vs-nd-24': {
    id: 'nd-214-vs-nd-24',
    title: 'Nghị định 214/2025/NĐ-CP vs Nghị định 24/2024/NĐ-CP',
    subtitle: 'Quy định mới về Lựa chọn nhà thầu cung cấp Thiết bị y tế & Dược phẩm',
    category: 'bidding',
    oldDocName: 'Nghị định 24/2024/NĐ-CP (Cũ)',
    newDocName: 'Nghị định 214/2025/NĐ-CP (Mới nhất)',
    effectiveDate: '01/08/2025',
    statusBadge: 'Đang Có Hiệu Lực',
    summary: 'NĐ 214/2025/NĐ-CP hoàn thiện cơ chế đấu thầu qua mạng 100%, siết chặt bảo lãnh dự thầu điện tử, minh bạch bảng đối chiếu kỹ thuật TBYT và quy định cụ thể về mua sắm tập trung, đàm phán giá.',
    clauses: [
      {
        clauseNumber: 'Điều 20',
        topic: 'Bảo lãnh dự thầu và cam kết tài chính điện tử',
        oldVersionText: 'Nhà thầu nộp thư bảo lãnh ngân hàng dạng bản quét (scan) hoặc bảo lãnh điện tử nếu Hệ thống mạng đấu thầu quốc gia hỗ trợ.',
        oldReference: 'Nghị định 24/2024/NĐ-CP Điều 18',
        newVersionText: 'Bắt buộc 100% nộp Thư bảo lãnh dự thầu điện tử có kết nối trực tiếp API giữa Tổ chức tín dụng/Chi nhánh ngân hàng nước ngoài với Hệ thống mạng đấu thầu quốc gia.',
        newReference: 'Nghị định 214/2025/NĐ-CP Điều 20',
        practicalImpact: 'Kiểu Việt không thể dùng bản scan giấy bảo lãnh thông thường; phải đăng ký hạn mức phát hành bảo lãnh điện tử trực tuyến với ngân hàng trước thời điểm đóng thầu ít nhất 48 giờ.',
        actionRequired: 'Rà soát hạn mức bảo lãnh đấu thầu tại Vietcombank/BIDV; đảm bảo chữ ký số hợp lệ.',
        riskLevel: 'high'
      },
      {
        clauseNumber: 'Điều 33',
        topic: 'Quy định phân nhóm kỹ thuật thiết bị y tế trong HSMT',
        oldVersionText: 'Chủ đầu tư tự xây dựng tiêu chuẩn kỹ thuật thiết bị theo cấu hình, tính năng hoặc tham khảo phân loại A/B/C/D.',
        oldReference: 'Nghị định 24/2024/NĐ-CP Điều 30',
        newVersionText: 'HSMT bắt buộc phải tuân thủ phân nhóm kỹ thuật theo Thông tư 57/2025/TT-BYT (6 nhóm tiêu chuẩn kỹ thuật). Nghiêm cấm đưa tiêu chí chỉ định nhãn hiệu, xuất xứ duy nhất.',
        newReference: 'Nghị định 214/2025/NĐ-CP Điều 33',
        practicalImpact: 'Kiểu Việt dễ dàng khiếu nại làm rõ HSMT nếu Bệnh viện cài cắm thông số độc quyền cho hãng khác; đồng thời Kiểu Việt phải chuẩn bị chứng chỉ FDA/CE/ISO 13485 đúng nhóm chào thầu.',
        actionRequired: 'Đối chiếu catalogue thiết bị (Cobas, Voluson...) vào đúng nhóm 1, nhóm 2 theo TT 57/2025.',
        riskLevel: 'high'
      },
      {
        clauseNumber: 'Điều 48',
        topic: 'Cơ chế mua sắm tập trung và đàm phán giá TBYT',
        oldVersionText: 'Đàm phán giá áp dụng đối với thuốc biệt dược gốc, sinh phẩm và một số vật tư đặc thù do Bộ Y tế ban hành danh mục.',
        oldReference: 'Nghị định 24/2024/NĐ-CP Điều 44',
        newVersionText: 'Mở rộng cơ chế đàm phán giá cho trang thiết bị y tế chuyên sâu (máy xét nghiệm tự động, máy siêu âm cao cấp, hệ thống chẩn đoán hình ảnh) mua sắm số lượng lớn theo cụm bệnh viện.',
        newReference: 'Nghị định 214/2025/NĐ-CP Điều 48',
        practicalImpact: 'Doanh nghiệp tham gia cung cấp chuỗi máy móc cho cụm y tế công lập cần chuẩn bị phương án giá gộp và dịch vụ hậu mãi dài hạn.',
        actionRequired: 'Lập bảng phân tích giá thành và chi phí bảo trì trọn gói 3-5 năm.',
        riskLevel: 'medium'
      }
    ]
  },
  'tt-57-phan-6-nhom': {
    id: 'tt-57-phan-6-nhom',
    title: 'Thông tư 57/2025/TT-BYT vs Quy định cũ về Tiêu chuẩn kỹ thuật TBYT',
    subtitle: 'Quy định phân chia 6 nhóm tiêu chuẩn kỹ thuật TBYT tham gia đấu thầu',
    category: 'medical_device',
    oldDocName: 'Quy định kỹ thuật tản mạn (TT 14/2020 & TT 08/2019)',
    newDocName: 'Thông tư 57/2025/TT-BYT (Áp dụng từ 15/02/2026)',
    effectiveDate: '15/02/2026',
    statusBadge: 'Chuẩn Mực Mới',
    summary: 'Thông tư 57/2025/TT-BYT thiết lập khung 6 nhóm TBYT kỹ thuật chuẩn mực trong đấu thầu bệnh viện công, phân định rõ ràng giữa nhóm sản xuất tại các nước tham chiếu (Mỹ, EU, Nhật) và sản xuất trong nước.',
    clauses: [
      {
        clauseNumber: 'Điều 4 Khoản 1',
        topic: 'Nhóm 1: Thiết bị y tế có xuất xứ và lưu hành tại nước tham chiếu',
        oldVersionText: 'Quy định theo tiêu chuẩn G7/EU chung chung, dễ gây tranh cãi về xuất xứ linh kiện lắp ráp.',
        oldReference: 'Thông tư 14/2020/TT-BYT Điều 3',
        newVersionText: 'Được sản xuất tại nước tham chiếu (Mỹ, EU, Nhật Bản, Anh, Canada, Úc) VÀ được cấp Giấy chứng nhận lưu hành tự do (CFS/CE mark/FDA 510k) tại chính nước tham chiếu đó.',
        newReference: 'Thông tư 57/2025/TT-BYT Điều 4 Khoản 1',
        practicalImpact: 'Hệ thống máy xét nghiệm Roche Cobas và Máy siêu âm GE Voluson mà Kiểu Việt phân phối đáp ứng 100% tiêu chuẩn Nhóm 1, được dự thầu các gói thầu yêu cầu kỹ thuật cao nhất.',
        actionRequired: 'Thu thập sẵn CFS và FDA 510(k) công chứng hợp pháp hóa lãnh sự trong vòng 12 tháng.',
        riskLevel: 'high'
      },
      {
        clauseNumber: 'Điều 5',
        topic: 'Nhóm 2: TBYT sản xuất tại nước tham chiếu hoặc chủ sở hữu tại nước tham chiếu',
        oldVersionText: 'Chưa có phân nhóm rõ ràng cho trường hợp hãng G7 đặt nhà máy tại nước thứ ba (như Singapore, Malaysia, Trung Quốc).',
        oldReference: 'Thông tư 14/2020/TT-BYT',
        newVersionText: 'Thiết bị do chủ sở hữu thuộc nước tham chiếu sở hữu công nghệ và đứng tên lưu hành, sản xuất tại nhà máy đạt ISO 13485 ở các quốc gia khác.',
        newReference: 'Thông tư 57/2025/TT-BYT Điều 5',
        practicalImpact: 'Mở rộng cơ hội cho các dòng máy phụ trợ hoặc vật tư tiêu hao của các hãng lớn sản xuất tại cơ sở thứ 3 dự thầu vào Nhóm 2 với giá cạnh tranh.',
        actionRequired: 'Kiểm tra chuỗi sở hữu nhãn hiệu và chứng nhận ISO 13485 của nhà máy sản xuất thực tế.',
        riskLevel: 'medium'
      },
      {
        clauseNumber: 'Điều 9',
        topic: 'Chuyển tiếp và áp dụng cho các gói thầu năm 2026 - 2027',
        oldVersionText: 'Không có mốc chuyển tiếp cụ thể.',
        oldReference: 'Quy định cũ',
        newVersionText: 'Các HSMT phát hành trước 15/02/2026 tiếp tục thực hiện theo HSMT đã duyệt. Từ 15/02/2026 bắt buộc áp dụng tiêu chuẩn 6 nhóm; đến 01/01/2027 siết chặt toàn diện dữ liệu truy xuất.',
        newReference: 'Thông tư 57/2025/TT-BYT Điều 9',
        practicalImpact: 'Kiểu Việt cần cập nhật toàn bộ hồ sơ năng lực theo danh mục 6 nhóm ngay trong Quý 1/2026 để chuẩn bị cho mùa thầu cao điểm.',
        actionRequired: 'Gắn thẻ Nhóm 1-6 vào bảng Master Data thiết bị trong hệ thống nội bộ.',
        riskLevel: 'medium'
      }
    ]
  },
  'tt-24-kiem-dinh-tbyt': {
    id: 'tt-24-kiem-dinh-tbyt',
    title: 'Thông tư 24/2026/TT-BYT vs Quy định kiểm định cũ (TT 05/2022)',
    subtitle: 'Lộ trình kiểm định an toàn và tính năng kỹ thuật bắt buộc đối với Trang thiết bị y tế',
    category: 'medical_device',
    oldDocName: 'Thông tư 05/2022/TT-BYT (Cũ)',
    newDocName: 'Thông tư 24/2026/TT-BYT (Hiệu lực 01/07/2026)',
    effectiveDate: '01/07/2026',
    statusBadge: 'Lộ Trình Bắt Buộc',
    summary: 'Thông tư 24/2026/TT-BYT quy định danh mục TBYT phải kiểm định an toàn, phân định lộ trình chuyển tiếp giữa thiết bị mua sắm trước 01/07/2027 và sau 30/06/2027, mốc hoàn thành trước 01/01/2028.',
    clauses: [
      {
        clauseNumber: 'Điều 3 & 5',
        topic: 'Lộ trình kiểm định an toàn kỹ thuật đối với máy móc hiện có',
        oldVersionText: 'Quy định kiểm định chung nhưng chưa có chế tài ngắt kết nối thanh toán BHYT nếu chưa kiểm định.',
        oldReference: 'Thông tư 05/2022/TT-BYT',
        newVersionText: 'Thiết bị thuộc danh mục (máy thở, máy gây mê, máy theo dõi bệnh nhân, máy sốc tim, X-quang) mua sắm trước 01/07/2027 phải hoàn thành kiểm định lần đầu trước 01/01/2028. Sau 30/06/2027 mua mới phải kiểm định trước khi đưa vào sử dụng.',
        newReference: 'Thông tư 24/2026/TT-BYT Điều 3 & Điều 5',
        practicalImpact: 'Phòng khám Hòa Đức có thời gian đến hết năm 2027 để lên lịch kiểm định định kỳ cho các máy chẩn đoán hình ảnh hiện có; không bị đình chỉ ngay trong năm 2026.',
        actionRequired: 'Lập sổ theo dõi hạn kiểm định thiết bị; ký hợp đồng nguyên tắc với Trung tâm Kỹ thuật Tiêu chuẩn Đo lường Chất lượng.',
        riskLevel: 'high'
      },
      {
        clauseNumber: 'Điều 7',
        topic: 'Dán tem kiểm định và cập nhật cơ sở dữ liệu quốc gia',
        oldVersionText: 'Chỉ cấp biên bản giấy lưu tại đơn vị sử dụng.',
        oldReference: 'Thông tư 05/2022/TT-BYT',
        newVersionText: 'Bắt buộc dán tem kiểm định có mã QR truy xuất và đơn vị kiểm định phải cập nhật kết quả lên Cổng cơ sở dữ liệu quốc gia về quản lý TBYT trong vòng 03 ngày làm việc.',
        newReference: 'Thông tư 24/2026/TT-BYT Điều 7',
        practicalImpact: 'Bảo hiểm xã hội và Thanh tra Y tế sẽ quét QR tem kiểm định khi giám sát thanh quyết toán chi phí khám chữa bệnh BHYT tại Phòng khám Hòa Đức.',
        actionRequired: 'Kiểm tra tính nguyên vẹn của tem kiểm định trên thân vỏ máy trước mỗi đợt giám định BHYT.',
        riskLevel: 'medium'
      }
    ]
  },
  'vbhn-08-vs-nd-98': {
    id: 'vbhn-08-vs-nd-98',
    title: 'VBHN 08/VBHN-BYT (2026) vs Nghị định 98/2021/NĐ-CP & NĐ 07/2023',
    subtitle: 'Toàn bộ quy chế phân loại A/B/C/D, số lưu hành, kê khai giá và thu hồi TBYT',
    category: 'medical_device',
    oldDocName: 'Nghị định 98/2021 & NĐ 07/2023 (Chưa hợp nhất)',
    newDocName: 'Văn bản hợp nhất 08/VBHN-BYT (06/03/2026)',
    effectiveDate: '06/03/2026',
    statusBadge: 'Văn Bản Hợp Nhất',
    summary: 'VBHN 08/VBHN-BYT chuẩn hóa toàn bộ các sửa đổi bổ sung của NĐ 07/2023 và NĐ 04/2025, chốt lại hồ sơ công bố A/B, số đăng ký lưu hành C/D không thời hạn (trừ trường hợp khẩn cấp) và cơ chế hậu kiểm.',
    clauses: [
      {
        clauseNumber: 'Điều 21 & 25',
        topic: 'Hồ sơ công bố tiêu chuẩn loại A, B so với Giấy phép lưu hành loại C, D',
        oldVersionText: 'Các văn bản phân tán ở NĐ 98, NĐ 07 dẫn đến áp dụng nhầm thủ tục tiếp nhận Sở Y tế cho thiết bị rủi ro cao.',
        oldReference: 'NĐ 98/2021 & NĐ 07/2023',
        newVersionText: 'VBHN 08 tách biệt rõ ràng: Loại A, B nộp công bố tiêu chuẩn áp dụng tại Sở Y tế địa phương; Loại C, D bắt buộc thẩm định và cấp phép lưu hành bởi Cục CSBYT - Bộ Y tế.',
        newReference: 'VBHN 08/VBHN-BYT Điều 21 & Điều 25',
        practicalImpact: 'Tránh hoàn toàn lỗi phân loại sai cấp thẩm quyền phê duyệt khi Kiểu Việt nộp hồ sơ E-HSDT.',
        actionRequired: 'Kiểm tra cơ quan cấp số lưu hành trên chứng thư: Sở Y tế cho A/B, Bộ Y tế cho C/D.',
        riskLevel: 'high'
      },
      {
        clauseNumber: 'Điều 44',
        topic: 'Kê khai giá và công khai giá bán buôn / bán lẻ TBYT',
        oldVersionText: 'Kê khai giá phức tạp nhưng thiếu đồng bộ cơ sở dữ liệu tra cứu liên thông.',
        oldReference: 'Nghị định 98/2021/NĐ-CP Điều 44',
        newVersionText: 'Bắt buộc kê khai giá niêm yết trên Cổng thông tin Bộ Y tế trước khi đưa hàng vào lưu thông hoặc dự thầu; giá dự thầu không được vượt quá giá kê khai có hiệu lực tại thời điểm mở thầu.',
        newReference: 'VBHN 08/VBHN-BYT Điều 44',
        practicalImpact: 'Nếu giá dự thầu cao hơn giá niêm yết công khai trên Cổng BYT, Tổ chuyên gia chấm thầu sẽ loại bỏ hồ sơ vì vi phạm quy chế quản lý giá.',
        actionRequired: 'Trước ngày nộp E-HSDT, đối soát giá dự thầu với bảng kê khai công khai của hãng trên cổng dịch vụ công.',
        riskLevel: 'high'
      }
    ]
  },
  'nd-132-giao-dich-lien-ket': {
    id: 'nd-132-giao-dich-lien-ket',
    title: 'Nghị định 132/2020/NĐ-CP & Quản lý Thuế Phòng Khám Hòa Đức - Kiểu Việt',
    subtitle: 'Kiểm soát Giao dịch liên kết, Hợp đồng thuê TBYT & Trần chi phí lãi vay 30% EBITDA',
    category: 'tax_finance',
    oldDocName: 'Nghị định 20/2017 & NĐ 68/2020 (Cũ)',
    newDocName: 'Nghị định 132/2020/NĐ-CP (Hiện hành)',
    effectiveDate: '20/12/2020',
    statusBadge: 'Siết Chặt Thanh Tra',
    summary: 'Phòng khám Đa khoa Hòa Đức thuộc Công ty Kiểu Việt hoặc có cùng đại diện pháp luật / sở hữu vốn trên 25% là đối tượng có quan hệ liên kết. Mọi hợp đồng thuê máy, phân chia doanh thu kỹ thuật phải theo nguyên tắc giao dịch độc lập.',
    clauses: [
      {
        clauseNumber: 'Điều 5 Khoản 2',
        topic: 'Xác định quan hệ liên kết giữa Kiểu Việt và Hòa Đức',
        oldVersionText: 'Tiêu chí góp vốn 20% và người điều hành chung.',
        oldReference: 'Nghị định 20/2017/NĐ-CP',
        newVersionText: 'Một doanh nghiệp nắm giữ trực tiếp hoặc gián tiếp ít nhất 25% vốn góp của doanh nghiệp kia; hoặc cả hai doanh nghiệp đều có ít nhất 25% vốn góp do một bên thứ ba nắm giữ; hoặc người điều hành chung.',
        newReference: 'Nghị định 132/2020/NĐ-CP Điều 5 Khoản 2 Điểm a',
        practicalImpact: 'Giao dịch cho thuê TBYT (máy Cobas, máy siêu âm), bán vật tư xét nghiệm giữa Kiểu Việt và Phòng khám Hòa Đức là Giao Dịch Liên Kết 100%. Bắt buộc kê khai Phụ lục I khi quyết toán thuế TNDN.',
        actionRequired: 'Lập Hồ sơ xác định giá giao dịch liên kết (Local File) và hợp đồng thuê TBYT có chứng thư thẩm định giá độc lập.',
        riskLevel: 'high'
      },
      {
        clauseNumber: 'Điều 16 Khoản 3',
        topic: 'Trần chi phí lãi vay được trừ không quá 30% EBITDA',
        oldVersionText: 'Trần lãi vay 20% EBITDA theo NĐ 20/2017, sau đó nới lên 30% theo NĐ 68/2020.',
        oldReference: 'Nghị định 68/2020/NĐ-CP',
        newVersionText: 'Tổng chi phí lãi vay phát sinh trong kỳ (sau khi trừ lãi tiền gửi và lãi cho vay) được trừ khi xác định thu nhập chịu thuế TNDN không vượt quá 30% của tổng lợi nhuận thuần từ HĐKD cộng chi phí lãi vay cộng chi phí khấu hao (EBITDA).',
        newReference: 'Nghị định 132/2020/NĐ-CP Điều 16 Khoản 3',
        practicalImpact: 'Khi Kiểu Việt hoặc Hòa Đức vay ngân hàng để tài trợ mua sắm hệ thống TBYT đắt tiền, nếu EBITDA thấp thì chi phí lãi vay vượt trần 30% sẽ bị loại khỏi chi phí hợp lý và phải chuyển sang 5 năm kế tiếp.',
        actionRequired: 'Dùng công cụ tính toán EBITDA tại phân hệ Tiện ích để dự báo chính xác số thuế TNDN trước khi vay vốn.',
        riskLevel: 'high'
      }
    ]
  },
  'tt-219-phan-bo-vat-hoa-duc': {
    id: 'tt-219-phan-bo-vat-hoa-duc',
    title: 'Thông tư 219/2013/TT-BTC Điều 14 & Phân bổ Thuế GTGT Phòng Khám Hòa Đức',
    subtitle: 'Công thức phân bổ thuế GTGT đầu vào dùng chung giữa Dịch vụ Y tế (KCT) & Bán hàng chịu thuế',
    category: 'tax_finance',
    oldDocName: 'Thông tư 06/2012/TT-BTC (Cũ)',
    newDocName: 'Thông tư 219/2013/TT-BTC Điều 14 (Chuẩn mực thuế)',
    effectiveDate: '01/01/2014',
    statusBadge: 'Bắt Buộc Kê Khai',
    summary: 'Phòng khám Đa khoa Hòa Đức có 2 dòng doanh thu: (1) Dịch vụ khám chữa bệnh không chịu thuế GTGT (Khoản 9 Điều 4); (2) Bán lẻ thuốc, TBYT chịu thuế GTGT 5% hoặc 10%. Thuế GTGT đầu vào dùng chung phải phân bổ theo tỷ lệ doanh thu.',
    clauses: [
      {
        clauseNumber: 'Điều 14 Khoản 2',
        topic: 'Nguyên tắc phân bổ thuế GTGT đầu vào dùng chung',
        oldVersionText: 'Phân bổ theo tỷ lệ doanh thu tháng nhưng chưa rõ cách xử lý quyết toán năm.',
        oldReference: 'Thông tư 06/2012/TT-BTC',
        newVersionText: 'Thuế GTGT đầu vào của hàng hóa, dịch vụ sử dụng đồng thời cho sản xuất, kinh doanh hàng hóa, dịch vụ chịu thuế và không chịu thuế GTGT thì chỉ được khấu trừ số thuế GTGT đầu vào của hàng hóa, dịch vụ dùng cho sản xuất, kinh doanh hàng hóa, dịch vụ chịu thuế GTGT. Doanh nghiệp phải hạch toán riêng; nếu không hạch toán riêng được thì phân bổ theo tỷ lệ (%) giữa doanh thu chịu thuế GTGT so với tổng doanh thu của kỳ.',
        newReference: 'Thông tư 219/2013/TT-BTC Điều 14 Khoản 2',
        practicalImpact: 'Phòng khám Hòa Đức mua điện, nước, dịch vụ quản lý, máy vi tính dùng chung cho cả phòng khám và nhà thuốc thì thuế GTGT đầu vào phải phân bổ. Số thuế không được khấu trừ được tính vào chi phí được trừ khi xác định thuế TNDN.',
        actionRequired: 'Áp dụng công thức phân bổ định kỳ hàng tháng/quý và điều chỉnh quyết toán vào tháng 12 năm tài chính.',
        riskLevel: 'high'
      }
    ]
  }
};
