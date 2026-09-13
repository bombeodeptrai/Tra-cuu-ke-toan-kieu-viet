// Cơ sở dữ liệu Checklist Chuẩn Bị Kiểm Tra Thuế — Công ty Cổ phần Kiểu Việt
// ĐẢM BẢO 100% ĐỦ CẢ 55 VĂN BẢN PHÁP LUẬT TRONG HỆ THỐNG

export type CheckPriority = 'critical' | 'important' | 'recommended';
export type CheckStatus = 'pending' | 'in-progress' | 'done';

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  priority: CheckPriority;
  decreeId: string;        // ID văn bản trong hệ thống 55 VB (Chính xác 1-1)
  articleNum?: string;     // Số Điều để deep-link
  decreeLabel: string;     // Tên rút gọn văn bản
  phase: 1 | 2 | 3;       // Giai đoạn 30/15/7 ngày
  
  // 4 TRỤ CỘT HƯỚNG DẪN THỰC CHIẾN CHUYÊN SÂU (TỐI THIỂU 15-20 DÒNG/MỤC)
  documentsRequired: string[];   // 1. Danh mục hồ sơ & chứng từ gốc kẹp cùng
  accountingSteps: string[];     // 2. Quy trình rà soát tài khoản kế toán & sổ sách
  auditRisks: string[];          // 3. Rủi ro bóc tách, truy thu & mức phạt cụ thể
  defenseStrategy: string[];     // 4. Luận điểm & chiến lược giải trình bảo vệ chi phí
}

export interface ChecklistGroup {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  items: ChecklistItem[];
}

export interface RiskQuestion {
  id: string;
  question: string;
  weight: number;          // 1-5 điểm rủi ro
  decreeId: string;        // ID văn bản trong hệ thống 55 VB (Chính xác 1-1)
  decreeTitle: string;     // Tên chính thức đầy đủ của văn bản pháp luật
  articleNum: string;      // Số Điều để deep-link (ví dụ: "42", "15", "8"...)
  articleRef: string;      // Nhãn Điều Khoản cụ thể
  legalQuote: string;      // Dẫn chứng pháp lý nguyên văn trích dẫn từ văn bản
  riskAnalysis: string;    // Bản chất rủi ro và kỹ thuật đối chiếu của đoàn thanh tra
  penaltyFramework: string;// Khung xử phạt cụ thể (Nghị định 125/2020, phạt 20%, tiền chậm nộp 0.03%/ngày...)
  defenseDocuments: string[]; // Danh mục hồ sơ & chứng từ gốc kẹp cùng giải trình
  tip: string;             // Biện pháp xử lý khẩn cấp
}


// ===== 8 NHÓM CHUYÊN ĐỀ BAO PHỦ 100% CẢ 55 VĂN BẢN =====

export const TAX_AUDIT_GROUPS: ChecklistGroup[] = [
  // NHÓM 1: THUẾ THU NHẬP DOANH NGHIỆP (TNDN)
  {
    id: 'tndn',
    name: 'Thuế Thu nhập Doanh nghiệp (TNDN)',
    icon: '🏢',
    color: 'emerald',
    description: 'Quyết toán, chi phí được trừ, giao dịch liên kết, tạm nộp 80%, khấu hao TSCĐ, dự phòng',
    items: [
      {
        id: 'chk-luat-67-2025-tndn',
        title: 'Quyết toán thuế TNDN & Ưu đãi đầu tư (Luật 67/2025)',
        description: 'Kiểm tra tờ khai Mẫu 03/TNDN, rà soát điều kiện hưởng thuế suất ưu đãi, miễn giảm thuế TNDN theo dự án thực tế; không mặc định khai khoáng được ưu đãi chỉ vì địa bàn.',
        priority: 'critical',
        decreeId: 'luat-67-2025-tndn',
        articleNum: '13',
        decreeLabel: 'Luật Thuế TNDN 67/2025',
        phase: 1,
        documentsRequired: [
        "Giấy chứng nhận đăng ký đầu tư, Giấy phép Nhà máy Nội thất gỗ Phú Tài, Nhà máy VLXD Bê tông và Dự án thi công công trình",
        "Hồ sơ quyết toán thuế TNDN hàng năm kèm phụ lục ưu đãi đầu tư (mẫu theo quy định)",
        "Báo cáo tài chính đã kiểm toán và Tờ khai quyết toán thuế TNDN các năm tài chính",
        "Sổ chi tiết các tài khoản doanh thu (TK 511), giá vốn (TK 632) và chi phí quản lý (TK 642)",
        "Bảng phân bổ hạch toán riêng doanh thu, chi phí của dự án được hưởng ưu đãi và dự án thông thường",
        "Danh sách công nhân xưởng mộc, thợ sơn Nhà máy Nội thất Phú Tài, công nhân trạm trộn bê tông VLXD và đội thợ thi công công trường",
        "Biên bản làm việc với cơ quan thuế địa phương về việc xác nhận ưu đãi miễn, giảm thuế TNDN"
],
        accountingSteps: [
        "Bước 1: Đối chiếu tổng doanh thu trên Sổ cái TK 511 với Tờ khai quyết toán thuế TNDN (chỉ tiêu B1) và Báo cáo tài chính, đảm bảo khớp đúng tuyệt đối từng đồng.",
        "Bước 2: Rà soát tài khoản chi phí quản lý (TK 642) và chi phí bán hàng (TK 641), kiểm tra các khoản chi phí không được trừ theo quy định mới của Luật 67/2025/QH15.",
        "Bước 3: Kiểm tra việc hạch toán riêng thu nhập được hưởng ưu đãi thuế TNDN (địa bàn KTXH khó khăn/đặc biệt khó khăn tại Gia Lai) trên TK 421 và các tiểu khoản doanh thu.",
        "Bước 4: Đối chiếu số thuế TNDN phải nộp trên TK 3334 với Tờ khai quyết toán thuế TNDN năm và các Giấy nộp tiền vào ngân sách nhà nước qua tài khoản TK 112.",
        "Bước 5: Kiểm tra việc chuyển lỗ của các năm trước chuyển sang năm hiện hành, đảm bảo thời gian chuyển lỗ không quá 5 năm liên tục theo đúng quy định pháp luật."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra bóc tách ưu đãi thuế TNDN do không hạch toán riêng được doanh thu và chi phí của dự án đầu tư mở rộng hoặc dự án mới tại Gia Lai.",
        "Bẫy thuế về việc áp dụng sai mức thuế suất ưu đãi do nhầm lẫn giữa địa bàn huyện thường và huyện có điều kiện KTXH đặc biệt khó khăn tại tỉnh Gia Lai.",
        "Phạt khai sai 20% trên số thuế thiếu và tính tiền chậm nộp 0.03%/ngày do kê khai sai doanh thu chịu thuế hoặc bỏ sót doanh thu vãng lai từ công trình giao thông.",
        "Truy thu thuế TNDN đối với các khoản thu nhập khác (thanh lý tài sản, phế liệu mỏ đá) không được hưởng ưu đãi nhưng doanh nghiệp gộp chung vào ưu đãi."
],
        defenseStrategy: [
        "Lập luận sắc bén viện dẫn Điều 13 Luật Thuế TNDN số 67/2025/QH15, chứng minh các dự án sản xuất đồ gỗ nội thất, trạm bê tông thương phẩm VLXD và thi công xây lắp công trình của Công ty Cổ phần Kiểu Việt nằm trên địa bàn ưu đãi đầu tư tại Gia Lai được cấp phép hợp pháp.",
        "Trình bày chi tiết hệ thống sổ sách kế toán mở riêng biệt các tiểu khoản doanh thu, chi phí cho từng công trình và mỏ đá, đáp ứng nguyên tắc hạch toán riêng thu nhập ưu đãi theo đúng hướng dẫn của Bộ Tài chính.",
        "Giải trình trước đoàn thanh tra về đặc thù thi công công trình giao thông thủy lợi chịu ảnh hưởng bởi thời tiết Tây Nguyên, dẫn đến tiến độ và doanh thu ghi nhận theo từng giai đoạn hoàn thành nghiệm thu A-B là hoàn toàn tuân thủ chuẩn mực kế toán.",
        "Khẳng định mọi số liệu kê khai ưu đãi đầu tư đều có căn cứ từ Giấy chứng nhận đầu tư và được kiểm toán độc lập xác nhận, đề nghị đoàn thanh tra xem xét khách quan trước khi đưa ra quyết định truy thu."
]
      },
      {
        id: 'chk-luat-thue-tndn',
        title: 'Xác định doanh thu tính thuế TNDN và kỳ tính thuế (Luật 14/2008)',
        description: 'Rà soát doanh thu tính thuế TNDN phổ thông 20%, đối chiếu kỳ tính thuế theo năm tài chính và các khoản thu nhập khác phát sinh ngoài hợp đồng xây dựng.',
        priority: 'important',
        decreeId: 'luat-thue-tndn',
        articleNum: '9',
        decreeLabel: 'Luật Thuế TNDN 14/2008',
        phase: 1,
        documentsRequired: [
        "Hợp đồng cung cấp lắp đặt đồ gỗ nội thất (hội trường, văn phòng), Hợp đồng cung cấp Bê tông thương phẩm & Cấu kiện VLXD, Hợp đồng thi công xây lắp",
        "Biên bản nghiệm thu bàn giao lắp đặt nội thất hoàn thiện, Phiếu giao nhận Bê tông thương phẩm tại công trường và Biên bản nghiệm thu A-B công trình",
        "Hóa đơn điện tử (XML/PDF) xuất doanh thu theo từng lần nghiệm thu hoặc bàn giao",
        "Nhật ký thi công công trình, biên bản bàn giao mặt bằng và biên bản xác nhận khối lượng",
        "Sổ chi tiết tài khoản doanh thu (TK 511), tài khoản phải thu khách hàng (TK 131)",
        "Ủy nhiệm chi, giấy báo có ngân hàng đối với các khoản khách hàng thanh toán qua TK 112",
        "Giấy phép khai thác kho mỏ đá, bảng kê sản lượng khai thác thực tế hàng tháng"
],
        accountingSteps: [
        "Bước 1: Kiểm tra đối chiếu số liệu trên Sổ cái TK 511 (Doanh thu bán hàng và cung cấp dịch vụ) với Tờ khai thuế GTGT và Tờ khai quyết toán thuế TNDN hàng năm.",
        "Bước 2: Rà soát tài khoản phải thu khách hàng (TK 131) chi tiết từng chủ đầu tư công trình giao thông, thủy lợi để phát hiện doanh thu đã thực hiện nhưng chậm xuất hóa đơn.",
        "Bước 3: Kiểm tra tài khoản 3331 (Thuế GTGT phải nộp) và 3334 (Thuế TNDN) để đảm bảo thời điểm ghi nhận doanh thu tính thuế trùng khớp với thời điểm lập hóa đơn.",
        "Bước 4: Đối chiếu thành phẩm đồ gỗ nội thất (TK 155), sản lượng bê tông thương phẩm xuất trạm và cấu kiện đúc sẵn (cống hộp, bó vỉa, gạch không nung) với doanh thu TK 511, đảm bảo khớp đúng hóa đơn.",
        "Bước 5: Kiểm tra các khoản doanh thu tài chính (TK 515) và thu nhập khác (TK 711) từ thanh lý xe máy thi công, thiết bị mỏ đá để tính đủ vào thu nhập chịu thuế."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra quy kết doanh thu chậm ghi nhận theo thời điểm nghiệm thu khối lượng A-B (vi phạm Điều 9 Luật 14/2008), dẫn đến ấn định doanh thu và phạt chậm nộp.",
        "Bẫy thuế về việc xử phạt vi phạm hành chính do xuất hóa đơn sai thời điểm đối với khối lượng xây lắp hoàn thành theo Nghị định 125/2020/NĐ-CP (mức phạt từ 4 đến 8 triệu đồng mỗi hóa đơn).",
        "Bóc tách doanh thu khai thác đá xây dựng do sản lượng cân tại trạm cân mỏ đá chênh lệch lớn so với số lượng xuất hóa đơn GTGT ghi nhận trong kỳ.",
        "Truy thu thuế TNDN đối với các khoản tiền phạt vi phạm hợp đồng, bồi thường thiệt hại từ chủ đầu tư mà công ty hạch toán nhầm vào tài khoản treo không đưa vào thu nhập khác."
],
        defenseStrategy: [
        "Viện dẫn trực tiếp Điều 9 Luật Thuế TNDN số 14/2008/QH12 (sửa đổi, bổ sung) quy định thời điểm xác định doanh thu đối với hoạt động xây lắp là thời điểm nghiệm thu khối lượng công trình hoàn thành bàn giao.",
        "Giải trình trước đoàn thanh tra về đặc thù thi công giao thông thủy lợi tại Gia Lai phụ thuộc vào mùa vụ (mùa mưa bão Tây Nguyên), các biên bản nghiệm thu A-B và hóa đơn được xuất đúng thời điểm chủ đầu tư ký xác nhận khối lượng thực tế.",
        "Cung cấp đầy đủ nhật ký thi công và biên bản xác nhận khối lượng dở dang chưa đủ điều kiện nghiệm thu bàn giao để chứng minh công ty chưa phải ghi nhận doanh thu tính thuế TNDN đối với các hạng mục chưa hoàn thành.",
        "Lập luận bảo vệ tính hợp pháp của việc ghi nhận doanh thu mỏ đá dựa trên phiếu cân trạm cân hợp lệ, khẳng định không có hành vi trốn thuế hay giấu doanh thu."
]
      },
      {
        id: 'chk-nd-218-2013',
        title: 'Chuyển lỗ liên tục không quá 5 năm & Tài trợ hạ tầng (NĐ 218/2013)',
        description: 'Lập phụ lục chuyển lỗ theo quy định (liên tục, tối đa 5 năm). Rà soát hồ sơ tài trợ xây nhà tình nghĩa, đường giao thông nông thôn tại Gia Lai để được trừ chi phí.',
        priority: 'important',
        decreeId: 'nd-218-2013',
        articleNum: '7',
        decreeLabel: 'NĐ 218/2013 (Hướng dẫn Thuế TNDN)',
        phase: 1,
        documentsRequired: [
        "Tờ khai quyết toán thuế TNDN các năm phát sinh lỗ và các năm chuyển lỗ liên tục",
        "Báo cáo tài chính các năm có số lỗ được chuyển trừ vào thu nhập chịu thuế",
        "Hồ sơ, biên bản giao nhận tài trợ xây dựng cơ sở hạ tầng, công trình phúc lợi tại địa phương Gia Lai",
        "Quyết định của cấp có thẩm quyền phê duyệt chương trình tài trợ, xây dựng hạ tầng",
        "Sổ chi tiết tài khoản 421 (Lợi nhuận chưa phân phối) qua các kỳ kế toán",
        "Chứng từ thanh toán qua ngân hàng (Ủy nhiệm chi TK 112) đối với các khoản tiền tài trợ bằng tiền",
        "Biên bản bàn giao công trình hạ tầng hoàn thành đưa vào sử dụng có xác nhận của chính quyền địa phương"
],
        accountingSteps: [
        "Bước 1: Rà soát toàn bộ số dư và phát sinh trên tài khoản 421 (Lợi nhuận chưa phân phối) qua các năm tài chính để xác định chính xác số lỗ lũy kế của từng năm.",
        "Bước 2: Kiểm tra bảng tổng hợp chuyển lỗ trên phụ lục tờ khai quyết toán thuế TNDN, đảm bảo tuân thủ nguyên tắc chuyển lỗ liên tục không quá 5 năm.",
        "Bước 3: Kiểm tra tài khoản chi phí khác (TK 811) và chi phí quản lý (TK 642) đối với các khoản chi tài trợ hạ tầng, phúc lợi xã hội tại Gia Lai.",
        "Bước 4: Đối chiếu số lỗ được kết chuyển giảm trừ thu nhập chịu thuế giữa Sổ cái TK 421 với chỉ tiêu chuyển lỗ trên Tờ khai quyết toán thuế TNDN năm hiện hành.",
        "Bước 5: Kiểm tra các bút toán điều chỉnh hồi tố (nếu có) do kết luận thanh tra thuế các kỳ trước, đảm bảo số lỗ chuyển sang năm nay là số liệu đã được cơ quan thuế chấp thuận."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra loại trừ số chuyển lỗ do doanh nghiệp đã chuyển quá thời hạn 5 năm liên tục theo quy định tại Điều 7 Nghị định 218/2013/NĐ-CP.",
        "Bẫy thuế về việc không được trừ các khoản chi tài trợ xây dựng cơ sở hạ tầng do thiếu hồ sơ pháp lý, không đúng đối tượng hoặc không có quyết định phê duyệt của cơ quan nhà nước có thẩm quyền.",
        "Phạt khai sai 20% và tính tiền chậm nộp thuế TNDN do năm trước có lãi nhưng do kê khai sai sót dẫn đến chuyển lỗ vượt mức hoặc chuyển lỗ sai năm.",
        "Bóc tách chi phí tài trợ không đúng quy định làm giảm chi phí được trừ khi tính thuế TNDN, dẫn đến truy thu thuế và phạt hành chính."
],
        defenseStrategy: [
        "Dẫn chiếu Điều 7 Nghị định 218/2013/NĐ-CP, chứng minh Công ty Cổ phần Kiểu Việt thực hiện chuyển lỗ liên tục từ năm phát sinh lỗ đến năm hiện hành hoàn toàn trong hạn mức 5 năm quy định.",
        "Giải trình tường tận về các khoản chi tài trợ hạ tầng giao thông, thủy lợi tại địa bàn tỉnh Gia Lai, xuất trình đầy đủ quyết định phê duyệt của UBND tỉnh và biên bản bàn giao đưa vào sử dụng.",
        "Lập bảng kê chi tiết lịch sử phát sinh lỗ và kết chuyển lỗ từng năm, đối chiếu khớp đúng với các Tờ khai quyết toán thuế TNDN đã nộp cơ quan thuế qua các năm để bảo vệ quyền lợi hợp pháp của doanh nghiệp.",
        "Khẳng định mọi khoản chi tài trợ đều phục vụ an sinh xã hội địa phương nơi doanh nghiệp đặt trụ sở mỏ đá và thi công công trình, đáp ứng đầy đủ điều kiện là chi phí hợp lý theo luật định."
]
      },
      {
        id: 'chk-tt-96-2015',
        title: 'Chi phí được trừ, Định mức Gỗ/Bê tông & Trích trước TK 335 (TT 96/2015)',
        description: 'Kiểm soát định mức tiêu hao gỗ xẻ sấy, sơn PU xưởng Nội thất, cấp phối bê tông thương phẩm VLXD, và hồ sơ trích trước giá vốn TK 335 công trình bàn giao.',
        priority: 'critical',
        decreeId: 'tt-96-2015',
        articleNum: '4',
        decreeLabel: 'Thông tư 96/2015/TT-BTC',
        phase: 1,
        documentsRequired: [
          "Quyết định ban hành Định mức tiêu hao nguyên vật liệu gỗ, sơn PU xưởng Nội thất và Cấp phối trạm Bê tông Kiểu Việt",
          "Lệnh sản xuất, Bảng tính giá thành sản phẩm đồ gỗ mộc (bàn ghế hội trường, nội thất văn phòng lãnh đạo) theo TK 154",
          "Phiếu giao nhận Bê tông thương phẩm in từ cân điện tử trạm trộn và Phiếu thí nghiệm nén mẫu bê tông R28 của phòng LAS-XD",
          "Hồ sơ trích trước chi phí giá vốn (TK 335) kèm dự toán công trình và biên bản bàn giao nghiệm thu đưa vào sử dụng",
          "Hóa đơn điện tử đầu vào hợp pháp cho gỗ xẻ sấy, xi măng PCB40, cát vàng, đá dăm, phụ gia bê tông và sao kê UNC ngân hàng",
          "Biên bản thanh lý, thu hồi phế liệu mùn cưa, dăm gỗ và hạch toán thu nhập khác TK 711 hoặc giảm chi phí TK 152",
          "Bảng kê lâm sản có xác nhận kiểm lâm theo Thông tư 26/2022/TT-BNNPTNT cho các lô gỗ nguyên liệu tự nhiên"
        ],
        accountingSteps: [
          "Bước 1: Đối chiếu chi phí nguyên vật liệu trực tiếp (TK 621) xưởng Nội thất với Định mức gỗ và sơn PU, kiểm tra hạch toán thu hồi phế liệu mùn cưa.",
          "Bước 2: Rà soát chi phí cấp phối trạm trộn Bê tông thương phẩm (TK 621, 622, 627) với khối lượng bê tông xuất trạm và kết quả nén mẫu R28.",
          "Bước 3: Kiểm tra số dư Tài khoản 335 (Chi phí phải trả), đối chiếu hồ sơ trích trước giá vốn công trình hoàn thành và đơn hàng nội thất đã xuất hóa đơn.",
          "Bước 4: Rà soát tài khoản chi phí máy thi công (TK 623), kiểm tra định mức dầu DO máy ép cọc cừ Larsen, xe bồn trộn và máy cơ giới.",
          "Bước 5: Xác định các khoản chi phí không có hóa đơn chứng từ hợp pháp để loại trừ khi lập Tờ khai quyết toán thuế TNDN (chỉ tiêu B4)."
        ],
        auditRisks: [
          "Rủi ro đoàn thanh tra bóc tách chi phí gỗ xẻ sấy và sơn PU do tỷ lệ hao hụt mùn cưa vượt định mức hoặc không có hồ sơ thu hồi phế liệu.",
          "Bẫy thuế về việc kiểm tra viên đối chiếu cấp phối xi măng trạm trộn Bê tông thương phẩm lệch với tiêu chuẩn TCVN, dẫn đến loại chi phí nguyên liệu.",
          "Xuất toán toàn bộ chi phí trích trước TK 335 do thiếu biên bản nghiệm thu bàn giao hoặc sang năm sau không nhận đủ hóa đơn thầu phụ.",
          "Truy thu thuế TNDN 20% và phạt chậm nộp do hạch toán chi phí máy ép cừ Larsen, xe bồn bê tông thiếu nhật trình máy hoặc vượt định mức."
        ],
        defenseStrategy: [
          "Viện dẫn Điều 4 Thông tư 96/2015/TT-BTC, khẳng định chi phí gỗ, sơn PU và xi măng cát đá phát sinh thực tế phục vụ trực tiếp hoạt động sản xuất kinh doanh có đủ hóa đơn hợp pháp.",
          "Xuất trình Quyết định ban hành Định mức kỹ thuật nội bộ của Tổng Giám đốc Kiểu Việt và kết quả kiểm định phòng thí nghiệm LAS-XD chứng minh cấp phối bê tông đạt chuẩn.",
          "Cung cấp Biên bản bàn giao đưa vào sử dụng và Dự toán gói thầu đã duyệt để bảo vệ tính hợp pháp của khoản trích trước giá vốn TK 335 theo Khoản 2.20 Điều 4 TT 96/2015.",
          "Khẳng định tỷ lệ hao hụt mùn cưa gỗ xẻ (18-22%) và hao hụt vận chuyển bồn bê tông (1.5-2.0%) hoàn toàn phù hợp với thực tế sản xuất và định mức của Bộ Xây dựng."
        ]
      },
      {
        id: 'chk-nd-132-2020',
        title: 'Hồ sơ Giao dịch liên kết & Trần lãi vay 30% EBITDA (NĐ 132/2020)',
        description: 'Kê khai Mẫu 01 các bên liên kết. Tính lại trần chi phí lãi vay không quá 30% EBITDA; lập bảng theo dõi phần lãi vay vượt trần được chuyển sang tối đa 5 năm.',
        priority: 'critical',
        decreeId: 'nd-132-2020',
        articleNum: '16',
        decreeLabel: 'NĐ 132/2020 (Giao dịch liên kết)',
        phase: 1,
        documentsRequired: [
        "Tờ khai quyết toán thuế TNDN (Phụ lục I - Danh mục các bên có quan hệ liên kết và giao dịch liên kết).",
        "Hồ sơ xác định giá giao dịch liên kết (Hồ sơ quốc gia, Hồ sơ toàn cầu, Báo cáo lợi nhuận liên quốc gia theo Điều 11, 12, 13 Nghị định 132/2020/NĐ-CP).",
        "Hợp đồng vay vốn, phụ lục gia hạn và các khế ước nhận nợ ký kết giữa Công ty Cổ phần Kiểu Việt với các bên liên kết (cổ đông lớn nắm giữ trên 25% vốn góp, Ban Giám đốc, công ty thành viên).",
        "Hợp đồng mua bán đá xây dựng, hợp đồng thi công giao thông thủy lợi ký kết với các pháp nhân có quan hệ liên kết trong tập đoàn hoặc cá nhân có liên quan.",
        "Sổ cái tài khoản 331, 131, 341, 635, 511 chi tiết theo từng đối tượng giao dịch liên kết trong năm tài chính.",
        "Báo cáo tài chính năm đã được kiểm toán độc lập và Biên bản họp Đại hội đồng cổ đông / Hội đồng quản trị phê duyệt các giao dịch vay vốn, mượn tiền.",
        "Chứng từ thanh toán qua ngân hàng (Ủy nhiệm chi, giấy báo Nợ, báo Có) đối với toàn bộ khoản tiền gốc và lãi vay phát sinh giữa các bên liên kết."
],
        accountingSteps: [
        "Bước 1: Rà soát toàn bộ danh sách khách hàng, nhà cung cấp, chủ nợ, người cho vay để xác định các bên có quan hệ liên kết theo đúng quy định tại Khoản 2 Điều 5 Nghị định 132/2020/NĐ-CP (như sở hữu vốn từ 25% trở lên, cùng một cá nhân điều hành hoặc kiểm soát).",
        "Bước 2: Đối chiếu tổng phát sinh trên Sổ cái TK 341 (Vay và nợ thuê tài chính) và TK 635 (Chi phí tài chính) đối với các khoản vay từ bên liên kết và bên độc lập để tách bạch rõ ràng nguồn gốc chi phí lãi vay.",
        "Bước 3: Lập bảng tính toán chỉ tiêu EBITDA (Lợi nhuận thuần từ hoạt động kinh doanh cộng chi phí lãi vay, cộng chi phí khấu hao) theo đúng hướng dẫn tại Khoản 3 Điều 16 Nghị định 132/2020/NĐ-CP.",
        "Bước 4: Kiểm tra việc áp dụng mức trần chi phí lãi vay được trừ (tối đa 30% tổng lợi nhuận thuần từ hoạt động kinh doanh trước khi trừ lãi vay và trước khi khấu hao - EBITDA) đối với chi phí lãi vay thuần thuộc phạm vi áp dụng, kể cả vay bên độc lập; rà NĐ20/2025 và điều kiện miễn trừ.",
        "Bước 5: Thực hiện bút toán kết chuyển và điều chỉnh tăng thu nhập chịu thuế TNDN trên tờ khai quyết toán thuế năm đối với phần chi phí lãi vay vượt mức trần 30% EBITDA không được trừ theo quy định.",
        "Bước 6: Đối chiếu số liệu kê khai tại Phụ lục I (Giao dịch liên kết) đính kèm Tờ khai quyết toán thuế TNDN với Báo cáo tài chính, Sổ cái các tài khoản công nợ và chi phí tài chính đảm bảo khớp đúng 100%."
],
        auditRisks: [
        "Bẫy thuế 1: Đoàn thanh tra bóc tách toàn bộ chi phí lãi vay vượt mức trần 30% EBITDA do doanh nghiệp tính thiếu hoặc nhầm lẫn các khoản mục trong công thức tính EBITDA (quên cộng lại chi phí khấu hao hoặc chi phí lãi vay thuần).",
        "Bẫy thuế 2: Ấn định thuế TNDN và phạt khai sai 20% cộng tiền chậm nộp 0.03%/ngày do không kê khai hoặc kê khai thiếu các giao dịch liên kết ẩn giấu (như vay tiền cá nhân là cổ đông lớn, giám đốc không tính lãi suất hoặc lãi suất thấp hơn thị trường).",
        "Bẫy thuế 3: Loại trừ chi phí và ấn định doanh thu/chi phí đối với các hợp đồng thi công công trình giao thông thủy lợi hoặc cung cấp đá xây dựng giữa Kiểu Việt và các công ty liên kết có giá trị giao dịch không theo nguyên tắc giao dịch độc lập (Arm's length principle).",
        "Bẫy thuế 4: Phạt vi phạm hành chính theo Nghị định 125/2020/NĐ-CP từ 8.000.000 đồng đến 25.000.000 đồng do không lập, không lưu giữ Hồ sơ xác định giá giao dịch liên kết theo đúng thời hạn quy định tại Nghị định 132/2020/NĐ-CP."
],
        defenseStrategy: [
        "Luận điểm 1: Viện dẫn chính xác Khoản 3 Điều 16 Nghị định 132/2020/NĐ-CP, khẳng định tổng chi phí lãi vay phát sinh được trừ khi xác định thu nhập chịu thuế TNDN của Công ty Cổ phần Kiểu Việt đã được tính toán tuân thủ tuyệt đối giới hạn trần 30% của tổng lợi nhuận thuần từ hoạt động kinh doanh trước khi trừ lãi vay và trước khi khấu hao (EBITDA).",
        "Lập luận đặc thù ngành xây lắp - khai khoáng tại Gia Lai: Giải trình trước đoàn thanh tra rằng đặc thù ngành thi công công trình giao thông thủy lợi và khai thác mỏ đá đòi hỏi nguồn vốn đầu tư máy móc thiết bị (xe xúc, máy nghiền đá, trạm trộn) rất lớn, việc Công ty huy động vốn ngắn/trung hạn từ các cổ đông hoặc công ty liên kết là hoàn toàn thiết yếu để duy trì thi công các dự án trọng điểm, lãi suất vay hoàn toàn phù hợp với biên độ thị trường tại thời điểm ký kết.",
        "Trình bày chi tiết hồ sơ chứng minh tính độc lập của giá giao dịch: Xuất trình đầy đủ các Hợp đồng kinh tế, biên bản xác định đơn giá vật tư đá xây dựng, chứng thư thẩm định giá (nếu có) để chứng minh các giao dịch mua bán đá và thi công với các bên liên kết được thực hiện theo đúng nguyên tắc thị trường độc lập, không có hành vi chuyển giá hoặc trốn thuế.",
        "Giải trình về việc lập Hồ sơ giao dịch liên kết: Cung cấp đầy đủ các biểu mẫu Phụ lục I, II, III kê khai trung thực, chính xác các bên có quan hệ liên kết và giá trị giao dịch, đồng thời chứng minh doanh nghiệp thuộc các trường hợp được miễn lập hồ sơ xác định giá giao dịch liên kết (nếu đạt điều kiện doanh thu và tổng giá trị giao dịch theo Khoản 2 Điều 19 Nghị định 132), bảo vệ tối đa quyền lợi tài chính hợp pháp cho doanh nghiệp."
]
      },
      {
        id: 'chk-tt-45-2013',
        title: 'Khấu hao TSCĐ Xưởng Nội Thất, Trạm Bê Tông & Xe Máy Cơ Giới (TT 45/2013)',
        description: 'Rà soát trích khấu hao máy CNC chế biến gỗ, buồng sơn xưởng Nội thất, trạm trộn bê tông, xe bồn trộn, máy ép cọc cừ Larsen theo khung thời gian Thông tư 45/2013.',
        priority: 'important',
        decreeId: 'tt-45-2013',
        articleNum: '4',
        decreeLabel: 'Thông tư 45/2013/TT-BTC',
        phase: 1,
        documentsRequired: [
          "Hồ sơ tài sản cố định: Hóa đơn mua máy CNC đục gỗ, máy bào cuốn, buồng sơn màng nước xưởng Nội thất Phú Tài",
          "Hóa đơn, hợp đồng mua sắm và lắp đặt Dây chuyền Trạm trộn Bê tông thương phẩm và đoàn xe bồn trộn bê tông",
          "Hồ sơ kỹ thuật và hóa đơn máy ép cọc cừ Larsen, búa rung và máy cơ giới thi công công trình",
          "Quyết định đưa tài sản cố định vào sử dụng và Bảng đăng ký phương pháp trích khấu hao TSCĐ với cơ quan thuế",
          "Bảng tính và phân bổ khấu hao TSCĐ hàng tháng (TK 214) chi tiết cho TK 627 (Nội thất, Bê tông) và TK 623 (Xây lắp)",
          "Biên bản kiểm kê TSCĐ cuối năm tài chính có chữ ký của Hội đồng kiểm kê Kiểu Việt"
        ],
        accountingSteps: [
          "Bước 1: Rà soát nguyên giá toàn bộ TSCĐ mới mua sắm, đảm bảo đủ điều kiện ghi nhận TSCĐ (nguyên giá >= 30 triệu đồng và thời gian sử dụng > 1 năm).",
          "Bước 2: Đối chiếu khung thời gian trích khấu hao của máy móc xưởng gỗ, trạm bê tông với Phụ lục 1 Thông tư 45/2013/TT-BTC.",
          "Bước 3: Kiểm tra việc phân bổ chi phí khấu hao đúng đối tượng chịu chi phí: Máy chế biến gỗ vào TK 627 xưởng Nội thất, trạm trộn bê tông vào TK 627 VLXD, máy ép cừ Larsen vào TK 623.",
          "Bước 4: Rà soát các tài sản đã khấu hao hết nhưng vẫn đang phục vụ sản xuất kinh doanh, ngừng trích khấu hao nhưng vẫn theo dõi trên sổ sách.",
          "Bước 5: Kiểm tra việc trích khấu hao trong thời gian máy móc tạm dừng sản xuất để bảo dưỡng định kỳ."
        ],
        auditRisks: [
          "Rủi ro đoàn thanh tra loại chi phí khấu hao do áp dụng thời gian trích khấu hao nhanh hơn khung quy định tại Thông tư 45/2013/TT-BTC.",
          "Bóc tách khấu hao đối với máy móc xưởng mộc hoặc trạm trộn bê tông mua về nhưng thiếu biên bản nghiệm thu chạy thử hoặc chưa đưa vào sử dụng thực tế.",
          "Phạt vi phạm về việc hạch toán lẫn lộn chi phí khấu hao máy thi công giữa các công trình xây lắp và phân xưởng sản xuất VLXD.",
          "Truy thu thuế TNDN do trích khấu hao vượt mức cho phép đối với các phương tiện vận tải không có đủ giấy tờ đăng kiểm hợp lệ."
        ],
        defenseStrategy: [
          "Viện dẫn Thông tư 45/2013/TT-BTC, chứng minh toàn bộ máy móc dây chuyền sản xuất đồ gỗ và trạm bê tông thương phẩm đều có đầy đủ hóa đơn chứng từ, biên bản nghiệm thu chạy thử và thuộc sở hữu hợp pháp của Kiểu Việt.",
          "Khẳng định khung thời gian khấu hao được công ty lựa chọn nằm trong giới hạn tối thiểu và tối đa của Khung trích khấu hao do Bộ Tài chính ban hành.",
          "Xuất trình hồ sơ nhật trình hoạt động của xe bồn bê tông và máy ép cọc cừ Larsen, chứng minh tài sản phục vụ 100% cho hoạt động sản xuất kinh doanh tạo doanh thu chịu thuế.",
          "Giải trình rõ ràng về việc trích khấu hao trong thời gian sửa chữa bảo dưỡng định kỳ máy móc hoàn toàn tuân thủ quy định tại Khoản 1 Điều 9 Thông tư 45/2013."
        ]
      },
      {
        id: 'chk-tt-48-2019',
        title: 'Trích lập dự phòng nợ phải thu khó đòi công trình (TT 48/2019)',
        description: 'Kiểm tra hồ sơ chứng minh nợ quá hạn của các chủ đầu tư xây dựng (quá hạn 6 tháng - 30%, 1 năm - 50%), biên bản đối chiếu công nợ có đóng dấu hai bên.',
        priority: 'important',
        decreeId: 'tt-48-2019',
        articleNum: '5',
        decreeLabel: 'TT 48/2019 (Dự phòng nợ khó đòi)',
        phase: 2,
        documentsRequired: [
        "Hợp đồng thi công xây lắp công trình giao thông, thủy lợi ký kết với các chủ đầu tư (Ban quản lý dự án, UBND các huyện, doanh nghiệp tư nhân)",
        "Bảng đối chiếu công nợ chi tiết có chữ ký xác nhận của đại diện hợp pháp bên nợ (Chủ đầu tư A) tại thời điểm lập báo cáo tài chính",
        "Hồ sơ pháp lý chứng minh nợ quá hạn: Công văn đôn đốc nợ, thư đòi nợ gửi qua đường bưu điện có hồi đáp, biên bản làm việc trực tiếp",
        "Hồ sơ pháp lý đối với khách hàng là pháp nhân đã phá sản, giải thể, mất tích: Quyết định tuyên bố phá sản của Tòa án, thông báo giải thể",
        "Bảng kê chi tiết trích lập dự phòng nợ phải thu khó đòi theo từng đối tượng khách hàng kèm theo tỷ lệ trích lập đúng quy định",
        "Quyết định phê duyệt của Hội đồng quản trị hoặc Tổng giám đốc về việc trích lập dự phòng nợ phải thu khó đòi trong kỳ tính thuế"
],
        accountingSteps: [
        "Bước 1: Rà soát toàn bộ số dư chi tiết trên TK 131 (Phải thu của khách hàng) đặc biệt là các khoản nợ đọng lâu năm từ các công trình xây lắp giao thông và thủy lợi.",
        "Bước 2: Kiểm tra bút toán trích lập dự phòng nợ phải thu khó đòi định kỳ: Nợ TK 642 (Chi phí quản lý doanh nghiệp) / Có TK 2293 (Dự phòng phải thu khó đòi).",
        "Bước 3: Đối chiếu số dư cuối kỳ của TK 2293 trên Sổ cái với Bảng cân đối kế toán, Báo cáo tài chính năm và Báo cáo kiểm toán độc lập.",
        "Bước 4: Kiểm tra việc hoàn nhập dự phòng đối với các khoản nợ đã thu hồi được trong năm: Nợ TK 2293 / Có TK 515 hoặc TK 642.",
        "Bước 5: Rà soát việc xử lý xóa sổ nợ khó đòi khi đủ điều kiện pháp lý, chuyển sang theo dõi ngoài bảng cân đối kế toán."
],
        auditRisks: [
        "Đoàn thanh tra loại trừ toàn bộ chi phí trích lập dự phòng do thiếu biên bản đối chiếu công nợ có chữ ký và con dấu hợp pháp của chủ đầu tư bên nợ.",
        "Bóc tách khoản trích lập dự phòng đối với các khoản nợ chưa quá thời hạn thanh toán theo hợp đồng hoặc chưa đủ điều kiện quá hạn từ 6 tháng trở lên.",
        "Phạt truy thu thuế TNDN do trích lập dự phòng vượt quá tỷ lệ phần trăm cho phép trên số dư nợ gốc quá hạn theo quy định tại Thông tư 48/2019/TT-BTC.",
        "Không xuất trình được hồ sơ pháp lý chứng minh khách hàng đang làm thủ tục phá sản hoặc mất khả năng thanh toán khi thực hiện trích lập 100%.",
        "Phạt hành vi khai sai dẫn đến thiếu số thuế phải nộp và tính tiền chậm nộp theo quy định pháp luật quản lý thuế hiện hành."
],
        defenseStrategy: [
        "Khẳng định việc trích lập dự phòng nợ phải thu khó đòi tuân thủ tuyệt đối Điều 5 Thông tư 48/2019/TT-BTC, dựa trên thực tế các công trình giao thông thủy lợi tại Gia Lai bị chậm thanh toán vốn đầu tư công.",
        "Trình bày đầy đủ các công văn đôn đốc nợ gửi Ban quản lý dự án, biên bản làm việc ba bên và chứng cứ pháp lý chứng minh nợ đã quá hạn thanh toán từ 6 tháng trở lên.",
        "Lập luận rằng các khoản nợ này ảnh hưởng trực tiếp đến dòng tiền lưu động của doanh nghiệp xây lắp, việc trích lập dự phòng là nghĩa vụ ghi nhận thận trọng theo chuẩn mực kế toán.",
        "Giải trình rõ ràng các căn cứ pháp lý và số liệu đối chiếu công nợ chi tiết cho từng công trình trước đoàn kiểm tra thuế, bảo vệ quyền lợi hợp pháp của doanh nghiệp."
]
      },
      {
        id: 'chk-nd-126-2020',
        title: 'Tạm nộp thuế TNDN 4 quý đạt tối thiểu 80% (NĐ 126/2020)',
        description: 'Tổng số thuế TNDN đã tạm nộp 4 quý phải đạt >= 80% số quyết toán cả năm. Nếu thiếu sẽ bị tính tiền chậm nộp 0.03%/ngày theo Điều 8 Khoản 6.',
        priority: 'critical',
        decreeId: 'nd-126-2020',
        articleNum: '8',
        decreeLabel: 'NĐ 126/2020 (Tạm nộp 80%)',
        phase: 1,
        documentsRequired: [
        "Tờ khai quyết toán thuế TNDN hàng năm đã nộp cho cơ quan thuế quản lý trực tiếp tại tỉnh Gia Lai",
        "Các tờ khai quyết toán thuế TNDN tạm tính hàng quý (Quý 1, Quý 2, Quý 3, Quý 4) đã gửi qua hệ thống thuế điện tử",
        "Báo cáo tài chính năm gồm: Bảng cân đối kế toán, Báo cáo kết quả hoạt động kinh doanh, Báo cáo lưu chuyển tiền tệ và Thuyết minh BCTC",
        "Các chứng từ nộp thuế điện tử (Ủy nhiệm chi, giấy nộp tiền vào ngân sách nhà nước) qua các quý trong năm tài chính",
        "Sổ cái tài khoản 3334 (Thuế thu nhập doanh nghiệp) phản ánh toàn bộ số phát sinh nộp và kết chuyển trong kỳ",
        "Bảng tính tỷ lệ tổng số thuế TNDN đã tạm nộp 4 quý so với số thuế TNDN phải nộp theo quyết toán năm"
],
        accountingSteps: [
        "Bước 1: Kiểm tra số dư và phát sinh trên TK 3334 (Thuế thu nhập doanh nghiệp) để xác định tổng số thuế TNDN đã tạm nộp trong 4 quý.",
        "Bước 2: Đối chiếu số thuế TNDN phải nộp theo quyết toán năm trên tờ khai quyết toán với số liệu trên Sổ cái TK 421 (Lợi nhuận chưa phân phối).",
        "Bước 3: Tính tỷ lệ phần trăm giữa tổng số thuế TNDN đã tạm nộp 4 quý với số thuế TNDN phải nộp theo quyết toán năm (phải đạt từ 80% trở lên).",
        "Bước 4: Kiểm tra các bút toán hạch toán chi phí thuế TNDN hàng quý và cuối năm: Nợ TK 8211 / Có TK 3334.",
        "Bước 5: Rà soát thời hạn nộp tiền thuế tạm tính của từng quý theo đúng quy định tại Nghị định 126/2020/NĐ-CP để phát hiện các khoản chậm nộp."
],
        auditRisks: [
        "Đoàn thanh tra phát hiện tổng số thuế TNDN tạm nộp 4 quý thấp hơn 80% so với số thuế TNDN phải nộp theo quyết toán năm chính thức.",
        "Áp dụng tiền chậm nộp tính trên số tiền thuế nộp thiếu (phần chênh lệch giữa 80% số quyết toán và số đã tạm nộp) kể từ ngày sau ngày cuối cùng của thời hạn nộp thuế quý 4.",
        "Phạt vi phạm hành chính đối với hành vi khai sai hoặc chậm nộp tiền thuế theo quy định tại Nghị định 125/2020/NĐ-CP.",
        "Truy thu thuế và tính lãi chậm nộp phát sinh trong trường hợp doanh nghiệp điều chỉnh tăng doanh thu hoặc giảm chi phí làm tăng số thuế TNDN quyết toán năm.",
        "Rủi ro bị ấn định thuế hoặc rà soát sâu các khoản chi phí không hợp hợp lý làm tăng đột biến số thuế TNDN phải nộp."
],
        defenseStrategy: [
        "Trình bày chi tiết bảng tính tỷ lệ tạm nộp thuế TNDN 4 quý, chứng minh doanh nghiệp đã tuân thủ nghiêm ngặt mức 80% theo đúng quy định tại Điều 8 Nghị định 126/2020/NĐ-CP.",
        "Giải trình về đặc thù ngành xây lắp và khai thác mỏ tại Gia Lai, nơi doanh thu thường được nghiệm thu tập trung vào những tháng cuối năm dựa trên tiến độ hoàn thành công trình.",
        "Lập luận trường hợp có biến động bất ngờ về doanh thu vào cuối năm dẫn đến số quyết toán cao hơn tạm tính, doanh nghiệp đã hoàn thành nghĩa vụ nộp phần thiếu ngay khi lập quyết toán.",
        "Viện dẫn các văn bản hướng dẫn và công văn giải đáp của Tổng cục Thuế về cách tính tiền chậm nộp 80% để bảo vệ quyền lợi chính đáng của công ty."
]
      },
    ]
  },

  // NHÓM 2: THUẾ GIÁ TRỊ GIA TĂNG (GTGT) & HÓA ĐƠN ĐIỆN TỬ
  {
    id: 'gtgt-hoadon',
    name: 'Thuế GTGT & Hóa Đơn Điện Tử',
    icon: '🧾',
    color: 'blue',
    description: 'Tờ khai GTGT, điều kiện khấu trừ, hóa đơn điện tử, sai sót Mẫu 04/SS, giảm thuế 2%',
    items: [
      {
        id: 'chk-luat-thue-gtgt',
        title: 'Thời điểm xác định thuế GTGT xây lắp & Khấu trừ đầu vào (Luật 13/2008)',
        description: 'Thời điểm kê khai thuế GTGT xây lắp là ngày nghiệm thu bàn giao hạng mục. Kiểm tra điều kiện khấu trừ thuế GTGT đầu vào hợp lệ theo Điều 12.',
        priority: 'critical',
        decreeId: 'luat-thue-gtgt',
        articleNum: '8',
        decreeLabel: 'Luật Thuế GTGT 13/2008',
        phase: 1,
        documentsRequired: [
        "Hợp đồng thi công xây lắp công trình giao thông, thủy lợi ký với chủ đầu tư ghi rõ điều khoản thanh toán theo hạng mục, khối lượng hoàn thành",
        "Biên bản nghiệm thu bàn giao hạng mục công trình, khối lượng xây lắp hoàn thành ký kết giữa đại diện chủ đầu tư (A) và đơn vị thi công (B)",
        "Hóa đơn điện tử giá trị gia tăng (XML và PDF) xuất bán cho chủ đầu tư đúng thời điểm nghiệm thu bàn giao khối lượng",
        "Chứng từ thanh toán qua ngân hàng (Ủy nhiệm chi, giấy báo có) tương ứng với giá trị các hóa đơn GTGT đầu ra và đầu vào",
        "Sổ chi tiết tài khoản 131 (Phải thu khách hàng) và tài khoản 3331 (Thuế GTGT phải nộp) phản ánh đúng kỳ phát sinh doanh thu và thuế",
        "Hồ sơ đấu thầu, dự toán công trình, nhật ký thi công xây dựng công trình khớp đúng với khối lượng ghi trên biên bản nghiệm thu"
],
        accountingSteps: [
        "Bước 1: Đối chiếu ngày trên Biên bản nghiệm thu khối lượng xây lắp hoàn thành với ngày lập Hóa đơn GTGT đầu ra trên Sổ cái TK 3331 và TK 511.",
        "Bước 2: Kiểm tra việc hạch toán doanh thu và thuế GTGT đầu ra đúng kỳ: Nợ TK 131, 112 / Có TK 511, Có TK 3331.",
        "Bước 3: Rà soát các hóa đơn GTGT đầu vào mua vật liệu xây dựng (xi măng, sắt thép, đá xây dựng), nhiên liệu để khấu trừ: Nợ TK 152, 621, 623, 1331 / Có TK 111, 112, 331.",
        "Bước 4: Đối chiếu tổng số thuế GTGT đầu vào được khấu trừ và thuế GTGT đầu ra trên Tờ khai thuế GTGT hàng quý với số liệu tổng hợp trên Sổ cái.",
        "Bước 5: Kiểm tra việc phân bổ và kết chuyển thuế GTGT đầu vào, đầu ra để xác định số thuế GTGT còn phải nộp hoặc được khấu trừ chuyển kỳ sau trên TK 3331 và TK 1331."
],
        auditRisks: [
        "Đoàn thanh tra phát hiện doanh nghiệp xuất hóa đơn GTGT chậm hơn so với thời điểm nghiệm thu bàn giao công trình xây lắp, bị phạt vi phạm hành chính từ 4 đến 8 triệu đồng theo Nghị định 125/2020/NĐ-CP.",
        "Bóc tách và từ chối khấu trừ thuế GTGT đầu vào đối với các hóa đơn mua vật tư, dịch vụ không có biên bản giao nhận hoặc không phục vụ cho hoạt động xây lắp chịu thuế.",
        "Truy thu thuế GTGT và phạt chậm nộp do kê khai sót doanh thu xây lắp chưa xuất hóa đơn tại thời điểm bàn giao hạng mục công trình.",
        "Rủi ro ấn định thuế GTGT đầu ra đối với các công trình đã hoàn thành đưa vào sử dụng nhưng doanh nghiệp kéo dài thời gian chưa lập hóa đơn.",
        "Phạt hành vi khai sai thuế GTGT dẫn đến thiếu số thuế phải nộp với mức phạt 20% trên số thuế thiếu."
],
        defenseStrategy: [
        "Chứng minh thời điểm lập hóa đơn GTGT cho hoạt động xây lắp giao thông thủy lợi hoàn toàn tuân thủ Điều 8 Luật Thuế GTGT và các nghị định hướng dẫn, dựa trên thời điểm nghiệm thu bàn giao từng phần hạng mục công trình.",
        "Lập luận rằng đặc thù thi công công trình giao thông thủy lợi tại vùng sâu vùng xa Gia Lai đòi hỏi thời gian nghiệm thu kỹ thuật kéo dài, việc lập hóa đơn được thực hiện ngay khi hoàn tất thủ tục ký biên bản với chủ đầu tư.",
        "Cung cấp đầy đủ nhật ký thi công và biên bản nghiệm thu A-B để chứng minh tính xác thực về thời điểm phát sinh nghĩa vụ thuế GTGT.",
        "Trường hợp có vướng mắc về thời điểm xác định doanh thu, viện dẫn các hướng dẫn của cơ quan thuế địa phương để bảo vệ tính hợp lệ của việc kê khai khấu trừ."
]
      },
      {
        id: 'chk-tt-219-2013',
        title: 'Điều kiện khấu trừ thuế GTGT Gỗ Lâm Sản, VLXD & TT Ngân Hàng (TT 219/2013)',
        description: 'Kiểm tra điều kiện khấu trừ thuế GTGT đối với gỗ nguyên liệu xẻ sấy (hồ sơ lâm sản theo kỳ: TT26/2022 lịch sử, TT26/2025 và TT84/2025), xi măng cát đá trạm bê tông và điều kiện thanh toán theo ngày giao dịch; không áp ngưỡng 20 triệu cho mọi kỳ.',
        priority: 'critical',
        decreeId: 'tt-219-2013',
        articleNum: '15',
        decreeLabel: 'Thông tư 219/2013/TT-BTC',
        phase: 1,
        documentsRequired: [
          "Hóa đơn GTGT điện tử đầu vào hợp pháp của các nhà cung cấp gỗ tự nhiên, xi măng PCB40, cát, đá, sắt thép, phụ gia",
          "Ủy nhiệm chi (UNC) và Giấy báo Nợ ngân hàng khớp đúng tên, số tài khoản của bên bán trên hóa đơn GTGT đối với các hóa đơn từ 20 triệu đồng trở lên",
          "Bảng kê lâm sản hợp pháp có xác nhận của Kiểm lâm sở tại theo Thông tư 26/2022/TT-BNNPTNT đối với gỗ mua vào xưởng Nội thất",
          "Hợp đồng kinh tế và Biên bản giao nhận hàng hóa tại kho Nhà máy Nội thất Phú Tài hoặc Trạm trộn Bê tông VLXD",
          "Sổ chi tiết tài khoản 1331 (Thuế GTGT đầu vào được khấu trừ) đối chiếu với Tờ khai thuế GTGT Mẫu 01/GTGT từng kỳ",
          "Biên bản bù trừ công nợ 3 bên hợp lệ (nếu có phát sinh cấn trừ công nợ vật liệu xây dựng và nội thất)"
        ],
        accountingSteps: [
          "Bước 1: Rà soát 100% hóa đơn mua hàng có tổng giá trị thanh toán từ 20 triệu đồng trở lên trên Sổ cái TK 133 và TK 331, đảm bảo đều có chứng từ thanh toán không dùng tiền mặt.",
          "Bước 2: Kiểm tra tài khoản ngân hàng thụ hưởng của bên bán, đảm bảo tài khoản này đã được thông báo với cơ quan thuế theo quy định.",
          "Bước 3: Đối chiếu số thuế GTGT đầu vào trên Tờ khai 01/GTGT các kỳ với Bảng kê mua vào và Sổ cái TK 133, rà soát các hóa đơn kê khai sót hoặc trùng.",
          "Bước 4: Kiểm tra việc phân bổ thuế GTGT đầu vào dùng chung cho hoạt động chịu thuế và không chịu thuế (nếu có cung cấp thiết bị y tế hoặc giáo dục thuộc diện miễn/giảm thuế).",
          "Bước 5: Rà soát tình trạng hoạt động của nhà cung cấp gỗ và vật liệu tại thời điểm xuất hóa đơn, tránh rủi ro doanh nghiệp bỏ trốn."
        ],
        auditRisks: [
          "Rủi ro đoàn thanh tra loại khấu trừ thuế GTGT đầu vào do hóa đơn trên 20 triệu đồng thanh toán bằng tiền mặt hoặc nộp tiền mặt vào tài khoản bên bán.",
          "Bị loại thuế GTGT các lô gỗ xẻ sấy do thiếu Bảng kê lâm sản hợp pháp hoặc Bảng kê lâm sản không có xác nhận kiểm lâm hợp lệ.",
          "Bẫy thuế về việc ủy nhiệm chi thanh toán sang tài khoản cá nhân của giám đốc bên bán mà không phải tài khoản công ty bên bán đăng ký với cơ quan thuế.",
          "Phạt kê khai sai 20% và tính tiền chậm nộp đối với số thuế GTGT đầu vào bị loại trừ của các doanh nghiệp bán vật tư có dấu hiệu ngừng kinh doanh."
        ],
        defenseStrategy: [
          "Cung cấp trọn bộ hồ sơ gồm Hóa đơn điện tử gốc, Hợp đồng kinh tế, Biên bản giao nhận hàng thực tế và Ủy nhiệm chi chuyển khoản qua ngân hàng chứng minh thanh toán đúng quy định Điều 15 Thông tư 219/2013.",
          "Xuất trình Bảng kê lâm sản hợp pháp có đầy đủ nguồn gốc xuất xứ theo quy định của Bộ Nông nghiệp & PTNT chứng minh gỗ nguyên liệu đưa vào sản xuất là hợp pháp.",
          "Giải trình rõ ràng về bản chất kinh tế thực tế của các giao dịch mua vật tư trạm bê tông và gỗ mộc, vật tư đã thực sự cấu thành nên sản phẩm và công trình đã nghiệm thu.",
          "Đối với các trường hợp thanh toán qua bên thứ ba hoặc bù trừ công nợ, xuất trình đầy đủ Biên bản đối chiếu công nợ và điều khoản hợp đồng cho phép thanh toán bù trừ theo đúng Điểm c Khoản 3 Điều 15 Thông tư 219/2013."
        ]
      },
      {
        id: 'chk-nd-180-2024-nd-cp',
        title: 'Rà soát áp dụng thuế suất GTGT giảm 2% (NĐ 180/2024)',
        description: 'Kiểm tra các hóa đơn xuất bán đá, vật tư, dịch vụ thi công áp dụng thuế 8% có đúng danh mục được giảm theo NĐ 180 hay không, tránh bị truy thu 2%.',
        priority: 'important',
        decreeId: 'nd-180-2024-nd-cp',
        articleNum: '1',
        decreeLabel: 'NĐ 180/2024 (Giảm 2% GTGT)',
        phase: 1,
        documentsRequired: [
        "Hợp đồng thi công xây lắp công trình giao thông, thủy lợi và các phụ lục điều chỉnh giá, tiến độ thực hiện tại tỉnh Gia Lai.",
        "Biên bản nghiệm thu khối lượng hoàn thành bàn giao đưa vào sử dụng A-B chi tiết theo từng hạng mục công trình.",
        "Hóa đơn điện tử (XML và PDF) xuất bán đá xây dựng các loại (đá 1x2, 2x4, đá mi, đá hộc) và dịch vụ xây lắp.",
        "Tờ khai thuế GTGT hàng tháng/quý (Mẫu 01/GTGT) có kê khai các dòng hàng hóa, dịch vụ được giảm thuế 2%.",
        "Bảng kê chi tiết hàng hóa, dịch vụ chịu thuế suất GTGT 8% và 10% đính kèm hồ sơ khai thuế.",
        "Giấy phép khai thác khoáng sản mỏ đá và các quyết định phê duyệt trữ lượng, thiết kế mỏ tại địa bàn tỉnh Gia Lai.",
        "Hợp đồng nguyên tắc mua bán đá, phiếu xuất kho kiêm vận chuyển nội bộ hoặc lệnh điều xe vận chuyển đá xây dựng."
],
        accountingSteps: [
        "Bước 1: Lọc toàn bộ Sổ chi tiết TK 3331 (Thuế GTGT phải nộp) trên phần mềm kế toán, đối chiếu số liệu phát sinh doanh thu chịu thuế 8% và 10% với Tờ khai thuế GTGT Mẫu 01/GTGT kỳ tính thuế theo NĐ 180/2024.",
        "Bước 2: Kiểm tra tài khoản doanh thu (TK 5111, 5113) đối với hoạt động bán đá xây dựng và thi công công trình, đảm bảo phân loại đúng mã ngành hàng không thuộc danh mục ngoại lệ không được giảm thuế (như viễn thông, tài chính, hóa chất...).",
        "Bước 3: Đối chiếu chứng từ hạch toán doanh thu Nợ TK 131, 111, 112 / Có TK 511, Có TK 3331 (với thuế suất 8%) khớp đúng với tiền mặt/tiền gửi ngân hàng thực thu và hóa đơn điện tử đã phát hành.",
        "Bước 4: Kiểm tra sự khớp đúng giữa Sổ cái TK 3331 với Báo cáo tài chính năm và Báo cáo kiểm toán độc lập (nếu có), rà soát các bút toán điều chỉnh giảm thuế GTGT đầu ra (nếu xuất hóa đơn điều chỉnh sai sót).",
        "Bước 5: Rà soát các hóa đơn xuất điều chỉnh giảm hoặc thay thế liên quan đến việc áp dụng nhầm thuế suất 10% thành 8% hoặc ngược lại để phản hồi chính xác trên tờ khai bổ sung."
],
        auditRisks: [
        "Rủi ro áp dụng nhầm thuế suất 8% cho các mặt hàng đá chế biến hoặc dịch vụ không thuộc danh mục được giảm thuế theo Phụ lục NĐ 180/2024, dẫn đến truy thu thuế GTGT.",
        "Bẫy thuế đoàn thanh tra bóc tách doanh thu xây lắp dài hạn do thời điểm nghiệm thu bàn giao không khớp với thời điểm lập hóa đơn theo NĐ 123/2020.",
        "Phạt khai sai 20% trên số tiền thuế kê khai thiếu và tiền chậm nộp tính theo mức 0.03%/ngày do áp dụng sai thuế suất GTGT giảm 2%.",
        "Phạt vi phạm hành chính về hóa đơn theo Nghị định 125/2020/NĐ-CP đối với các hóa đơn lập sai thời điểm hoặc sai thuế suất bắt buộc phải xuất hóa đơn điều chỉnh."
],
        defenseStrategy: [
        "Căn cứ Điều 1 Nghị định 180/2024/NĐ-CP, Công ty Cổ phần Kiểu Việt thực hiện giảm 2% thuế suất GTGT đối với nhóm hàng hóa, dịch vụ đang áp dụng mức thuế suất 10%, bao gồm sản phẩm đá xây dựng khai thác từ mỏ đá của công ty tại Gia Lai thuộc mã ngành kinh tế theo đúng quy định.",
        "Đối với hoạt động thi công xây lắp công trình giao thông và thủy lợi, chúng tôi xuất hóa đơn theo đúng tiến độ nghiệm thu khối lượng hoàn thành từng giai đoạn được chủ đầu tư xác nhận, áp dụng thuế suất 8% đối với phần xây lắp không thuộc danh mục loại trừ.",
        "Giải trình trước đoàn thanh tra thuế rằng các sản phẩm đá xây dựng (đá 1x2, đá hộc, đá mi bụi) bán ra đều nằm trong danh mục vật liệu xây dựng thông thường đủ điều kiện giảm thuế GTGT, có căn cứ từ bảng mô tả mã ngành cấp 4 Hệ thống ngành kinh tế Việt Nam.",
        "Trường hợp có sự khác biệt nhỏ về thời điểm xác định doanh thu và thuế GTGT do đặc thù công trình giao thông thủy lợi ở vùng sâu vùng xa tỉnh Gia Lai, công ty viện dẫn các biên bản nghiệm thu hiện trường thực tế để bảo vệ tính hợp pháp, hợp lệ của số liệu kê khai."
]
      },
      {
        id: 'chk-nd-15-2022',
        title: 'Đối chiếu hóa đơn giảm thuế GTGT các kỳ cũ (NĐ 15/2022)',
        description: 'Đối chiếu việc xuất hóa đơn và kê khai giảm thuế GTGT 8% trong giai đoạn 2022-2023 nếu thuộc phạm vi thanh tra thời kỳ cũ của cơ quan thuế.',
        priority: 'important',
        decreeId: 'nd-15-2022',
        articleNum: '1',
        decreeLabel: 'NĐ 15/2022 (Chính sách giảm thuế)',
        phase: 2,
        documentsRequired: [
        "Hóa đơn điện tử phát hành trong năm 2022 và 2023 có áp dụng mức thuế suất GTGT 8% cho dịch vụ thi công và sản phẩm đá.",
        "Hợp đồng kinh tế, phụ lục hợp đồng ký kết với khách hàng trong giai đoạn 2022-2023.",
        "Tờ khai thuế GTGT các kỳ tính thuế năm 2022, 2023 (Mẫu 01/GTGT) kèm theo Phụ lục giảm thuế GTGT (nếu có theo quy định từng thời kỳ).",
        "Bảng kê hóa đơn bán ra, mua vào đã kê khai quyết toán thuế GTGT các năm tài chính 2022 và 2023.",
        "Biên bản đối chiếu công nợ, ủy nhiệm chi qua ngân hàng thanh toán cho các hóa đơn trong năm 2022-2023.",
        "Hồ sơ quyết toán thuế TNDN năm 2022 và 2023 của Công ty Cổ phần Kiểu Việt."
],
        accountingSteps: [
        "Bước 1: Rà soát toàn bộ Sổ chi tiết TK 511 (Doanh thu) và TK 3331 (Thuế GTGT phải nộp) trong niên độ kế toán 2022 và 2023 để lọc ra các giao dịch áp dụng chính sách giảm thuế theo NĐ 15/2022.",
        "Bước 2: Đối chiếu chéo doanh thu trên Sổ cái TK 511 với số liệu kê khai trên Tờ khai thuế GTGT hàng tháng/quý của năm 2022 và 2023, đảm bảo không có sự lệch số liệu.",
        "Bước 3: Kiểm tra tài khoản 131 (Phải thu khách hàng) để xác định các khoản doanh thu ghi nhận trong năm 2022-2023 có kèm theo dòng thuế GTGT 8% đúng với quy định tại NĐ 15/2022.",
        "Bước 4: Đối chiếu Sổ cái với Báo cáo tài chính năm 2022, 2023 và Báo cáo kiểm toán độc lập để kiểm tra tính nhất quán của doanh thu sau khi trừ thuế GTGT.",
        "Bước 5: Kiểm tra các bút toán điều chỉnh giảm thuế GTGT đầu ra/đầu vào (nếu có) do cơ quan thuế hoặc kiểm toán yêu cầu điều chỉnh tại các kỳ thanh tra trước."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra truy thu thuế GTGT và phạt chậm nộp do doanh nghiệp áp dụng sai thuế suất 8% cho các mặt hàng không đủ điều kiện giảm thuế theo Phụ lục I, II, III ban hành kèm theo NĐ 15/2022.",
        "Bẫy bóc tách chi phí hoặc doanh thu do thiếu Phụ lục giảm thuế GTGT kèm theo tờ khai trong giai đoạn đầu năm 2022 khi chính sách vừa ban hành.",
        "Phạt khai sai 20% và tiền chậm nộp 0.03%/ngày trên số thuế GTGT kê khai thiếu đối với các hóa đơn xuất sai thời điểm hoặc áp dụng sai đối tượng giảm thuế.",
        "Rủi ro bị ấn định thuế do hóa đơn lập sai sót trong năm 2022 nhưng đến năm sau mới lập biên bản điều chỉnh mà không thực hiện đúng trình tự NĐ 123/2020."
],
        defenseStrategy: [
        "Viện dẫn Điều 1 Nghị định 15/2022/NĐ-CP, Công ty Cổ phần Kiểu Việt khẳng định việc áp dụng mức thuế suất 8% cho các sản phẩm đá xây dựng và hạng mục xây lắp giao thông, thủy lợi hoàn toàn phù hợp với mã ngành kinh tế và danh mục hàng hóa được giảm thuế.",
        "Lập luận rằng công ty đã lập đầy đủ Bảng kê hàng hóa, dịch vụ được giảm thuế GTGT và lưu trữ cùng hồ sơ khai thuế tại doanh nghiệp theo đúng quy định tại khoản 4 Điều 1 NĐ 15/2022.",
        "Giải trình với đoàn thanh tra về các chênh lệch nhỏ (nếu có) do sai sót kỹ thuật khi chuyển đổi phần mềm hóa đơn điện tử trong giai đoạn đầu năm 2022, đồng thời cung cấp đầy đủ biên bản đối chiếu công nợ và chứng từ thanh toán không dùng tiền mặt.",
        "Yêu cầu đoàn thanh tra xem xét thực tế thi công tại công trường Gia Lai, đối chiếu khối lượng vật tư đá mỏ xuất bán với hồ sơ dự thầu và quyết toán A-B để chứng minh tính hợp pháp của doanh thu và thuế suất áp dụng."
]
      },
      {
        id: 'chk-nd-123-2020',
        title: 'Thời điểm lập HĐĐT công trình & Tra cứu NCC rủi ro (NĐ 123/2020)',
        description: 'Lập hóa đơn đúng thời điểm nghiệm thu A-B. Rà soát danh sách hóa đơn đầu vào trên hoadondientu.gdt.gov.vn, loại bỏ hóa đơn của doanh nghiệp bỏ trốn.',
        priority: 'critical',
        decreeId: 'nd-123-2020',
        articleNum: '9',
        decreeLabel: 'NĐ 123/2020 (Hóa đơn, Chứng từ)',
        phase: 1,
        documentsRequired: [
        "Hợp đồng thi công xây dựng công trình giao thông, thủy lợi và các phụ lục thay đổi giá trị hợp đồng.",
        "Biên bản nghiệm thu bàn giao hạng mục công trình, khối lượng thi công hoàn thành từng giai đoạn (A-B).",
        "Hóa đơn điện tử đầu ra (bản XML và PDF) xuất cho chủ đầu tư và hóa đơn đầu vào mua vật liệu đá, xi măng, sắt thép.",
        "Nhật ký thi công công trình, bảng xác nhận khối lượng hoàn thành có chữ ký của đại diện Chủ đầu tư và Tư vấn giám sát.",
        "Lệnh điều xe, phiếu cân trạm cân mỏ đá, phiếu xuất kho vật liệu xây dựng phục vụ thi công.",
        "Biên bản đối chiếu công nợ và Ủy nhiệm chi, Giấy báo Nợ ngân hàng thanh toán qua tài khoản doanh nghiệp.",
        "Kết quả tra cứu thông tin nhà cung cấp trên hệ thống hóa đơn điện tử của Tổng cục Thuế (trạng thái hoạt động, mã số thuế)."
],
        accountingSteps: [
        "Bước 1: Kiểm tra thời điểm phát hành hóa đơn đầu ra trên Sổ chi tiết TK 511 so với ngày ký Biên bản nghiệm thu khối lượng hoàn thành trên công trình để đảm bảo tuân thủ Điều 9 Nghị định 123/2020/NĐ-CP (lập hóa đơn ngay khi nghiệm thu bàn giao).",
        "Bước 2: Đối chiếu số dư và phát sinh bên Có TK 331 (Phải trả nhà cung cấp) với các hóa đơn đầu vào mua vật liệu, đá mỏ, nhiên liệu, kiểm tra tính hợp lệ của XML hóa đơn trên cổng Tổng cục Thuế.",
        "Bước 3: Rà soát tài khoản chi phí sản xuất kinh doanh dở dang (TK 154) và tài khoản giá vốn hàng bán (TK 632) đối với các khoản chi phí mua ngoài không có hóa đơn hoặc hóa đơn của doanh nghiệp có rủi ro cao về thuế.",
        "Bước 4: Kiểm tra đối chiếu Sổ cái TK 112, 331 với các chứng từ thanh toán qua ngân hàng đối với hóa đơn có giá trị từ 20 triệu đồng trở lên theo quy định pháp luật.",
        "Bước 5: Thực hiện tra cứu hàng loạt mã số thuế nhà cung cấp trên hệ thống kiểm tra hóa đơn rủi ro, kết xuất báo cáo lưu vào hồ sơ kiểm toán năm."
],
        auditRisks: [
        "Bẫy phạt vi phạm quy định về thời điểm lập hóa đơn theo Nghị định 125/2020/NĐ-CP (phạt tiền từ 4.000.000đ đến 8.000.000đ) đối với các hóa đơn xây lắp chậm lập so với ngày nghiệm thu.",
        "Rủi ro cơ quan thuế loại trừ chi phí và từ chối khấu trừ thuế GTGT đầu vào khi mua vật liệu từ các nhà cung cấp rủi ro cao, bỏ địa điểm kinh doanh, hoặc hóa đơn không hợp pháp.",
        "Phạt khai sai 20% và tính tiền chậm nộp 0.03%/ngày do kê khai khấu trừ thuế GTGT đầu vào từ hóa đơn bất hợp pháp hoặc hóa đơn lập sai thời điểm.",
        "Ấn định thuế TNDN và GTGT do không chứng minh được tính xác thực của chi phí thi công công trình giao thông thủy lợi tại vùng sâu vùng xa Gia Lai do thiếu nhật ký thi công."
],
        defenseStrategy: [
        "Căn cứ khoản 2 Điều 9 Nghị định 123/2020/NĐ-CP, thời điểm lập hóa đơn đối với hoạt động thi công xây dựng, lắp đặt là thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình, khối lượng thi công hoàn thành, không phân biệt đã thu tiền hay chưa thu tiền. Công ty Kiểu Việt luôn tuân thủ nghiêm ngặt mốc thời gian này.",
        "Trường hợp công trình giao thông thủy lợi có khối lượng nghiệm thu theo giai đoạn, công ty lập hóa đơn đúng theo giá trị nghiệm thu thực tế từng giai đoạn có xác nhận của Chủ đầu tư tại Gia Lai.",
        "Giải trình về việc tra cứu nhà cung cấp: Công ty đã thực hiện tra cứu tình trạng hoạt động của người bán trên Cổng thông tin điện tử Tổng cục Thuế tại thời điểm giao dịch, lưu trữ đầy đủ biên bản in kiểm tra, do đó hóa đơn đầu vào hoàn toàn hợp pháp.",
        "Lập luận rằng các sai sót nhỏ về hình thức hóa đơn (nếu có) đã được xử lý kịp thời theo đúng quy định tại Điều 19 NĐ 123/2020, không làm thay đổi bản chất giao dịch kinh tế và nghĩa vụ thuế của doanh nghiệp."
]
      },
      {
        id: 'chk-tt-78-2021',
        title: 'Xử lý hóa đơn sai sót Mẫu 04/SS & Hóa đơn điều chỉnh (TT 78/2021)',
        description: 'Kiểm tra toàn bộ hóa đơn điều chỉnh/thay thế đã nộp Thông báo sai sót Mẫu 04/SS đến CQT chưa. Lưu biên bản thỏa thuận điều chỉnh với khách hàng.',
        priority: 'critical',
        decreeId: 'tt-78-2021',
        articleNum: '7',
        decreeLabel: 'TT 78/2021 (Hóa đơn Điện tử)',
        phase: 1,
        documentsRequired: [
        "Hóa đơn điện tử gốc bị sai sót (bản XML và PDF) đã phát hành cho khách hàng mua đá hoặc chủ đầu tư xây lắp.",
        "Hóa đơn điện tử điều chỉnh hoặc hóa đơn điện tử thay thế được lập theo đúng quy định tại Thông tư 78/2021/TT-BTC.",
        "Biên bản thỏa thuận (nếu có) hoặc thông báo bằng văn bản giữa Công ty Cổ phần Kiểu Việt và người mua về sai sót trên hóa đơn.",
        "Tờ khai thông báo hóa đơn điện tử có sai sót theo Mẫu số 04/SS-HĐĐT gửi cơ quan thuế quản lý tại Gia Lai.",
        "Sổ chi tiết tài khoản doanh thu (TK 511) và tài khoản thuế GTGT (TK 3331) ghi nhận các bút toán điều chỉnh giảm/tăng doanh thu.",
        "Tờ khai thuế GTGT bổ sung (Mẫu 01/KHBS) và các tài liệu giải trình đính kèm cho kỳ tính thuế có phát sinh hóa đơn sai sót.",
        "Biên bản nghiệm thu A-B và hồ sơ kỹ thuật liên quan đến nội dung điều chỉnh đơn giá, khối lượng trên hóa đơn."
],
        accountingSteps: [
        "Bước 1: Rà soát Sổ cái TK 511, TK 632 và TK 3331 để kiểm tra toàn bộ các bút toán hạch toán đảo ngược, điều chỉnh doanh thu và thuế GTGT đối với các hóa đơn đã lập Mẫu 04/SS-HĐĐT.",
        "Bước 2: Đối chiếu ngày gửi Thông báo sai sót Mẫu 04/SS-HĐĐT trên phần mềm hóa đơn điện tử với thời gian phát hiện sai sót để đảm bảo tuân thủ thời hạn theo Thông tư 78/2021/TT-BTC.",
        "Bước 3: Kiểm tra tài khoản phải thu khách hàng (TK 131) và tài khoản phải trả (TK 331), đối chiếu số dư công nợ trước và sau khi xuất hóa đơn điều chỉnh/thay thế.",
        "Bước 4: Kiểm tra sự khớp đúng giữa số liệu trên Tờ khai thuế GTGT bổ sung Mẫu 01/KHBS với số liệu điều chỉnh trên sổ sách kế toán và Báo cáo tài chính năm.",
        "Bước 5: Rà soát các khoản tiền phạt chậm nộp hoặc tiền thuế phát sinh thêm sau khi khai bổ sung (nếu có) trên Sổ chi tiết TK 3339 (Phí, lệ phí và các khoản phải nộp khác)."
],
        auditRisks: [
        "Bẫy phạt vi phạm hành chính do nộp Mẫu 04/SS-HĐĐT quá thời hạn quy định hoặc không thực hiện thông báo sai sót với cơ quan thuế khi xuất hóa đơn thay thế/điều chỉnh.",
        "Rủi ro đoàn thanh tra không chấp nhận hóa đơn điều chỉnh/thay thế do doanh nghiệp không lập biên bản thỏa thuận sai sót trước khi xuất hóa đơn điều chỉnh theo đúng hướng dẫn.",
        "Phạt khai sai 20% trên số thuế tăng thêm và tiền chậm nộp 0.03%/ngày nếu việc điều chỉnh hóa đơn làm tăng số thuế GTGT phải nộp nhưng doanh nghiệp chậm nộp hồ sơ khai bổ sung.",
        "Bị bóc tách doanh thu và chi phí do hạch toán sai lệch giữa hóa đơn gốc và hóa đơn điều chỉnh, dẫn đến sai lệch số liệu quyết toán thuế TNDN."
],
        defenseStrategy: [
        "Căn cứ Điều 7 Thông tư 78/2021/TT-BTC, Công ty Cổ phần Kiểu Việt đã thực hiện lập Mẫu số 04/SS-HĐĐT gửi cơ quan thuế quản lý trực tiếp tại Gia Lai ngay sau khi phát hiện hóa đơn điện tử có sai sót về tên, địa chỉ hoặc mã số thuế, số tiền.",
        "Lập luận rằng việc xuất hóa đơn điều chỉnh hoặc hóa đơn thay thế được thực hiện hoàn toàn chính xác theo đúng sự thỏa thuận bằng văn bản với khách hàng, đảm bảo không làm thất thu ngân sách nhà nước.",
        "Giải trình trước đoàn kiểm tra thuế rằng các bút toán điều chỉnh doanh thu và thuế GTGT đã được phản ánh đầy đủ trên Tờ khai thuế GTGT bổ sung (Mẫu 01/KHBS) và hạch toán đúng kỳ kế toán phát sinh.",
        "Trường hợp có sai sót về nội dung khối lượng xây lắp hoặc đơn giá đá mỏ, công ty đã đính kèm đầy đủ biên bản xác nhận điều chỉnh giữa hai bên, chứng minh tính minh bạch và tuân thủ pháp luật thuế của doanh nghiệp."
]
      },
      {
        id: 'chk-nd-70-2025',
        title: 'Chứng từ khấu trừ TNCN điện tử & Chữ ký số HĐ (NĐ 70/2025)',
        description: 'Cấp chứng từ khấu trừ thuế TNCN điện tử cho lao động nghỉ việc. Rà soát chữ ký số trên hóa đơn điện tử bảo đảm tính toàn vẹn dữ liệu.',
        priority: 'important',
        decreeId: 'nd-70-2025',
        articleNum: '4',
        decreeLabel: 'NĐ 70/2025 (Sửa đổi HĐĐT)',
        phase: 2,
        documentsRequired: [
        "Chứng từ điện tử khấu trừ thuế thu nhập cá nhân (TNCN) cấp cho người lao động hoặc cá nhân ký hợp đồng dịch vụ thuê ngoài tại mỏ đá và công trường.",
        "Danh sách chi trả thu nhập, bảng lương, bảng chấm công, hợp đồng lao động và hợp đồng giao khoán nhân công xây lắp.",
        "Bản sao CCCD/CMND của các cá nhân nhận thu nhập vãng lai, kèm theo cam kết theo mẫu 08/CK-TNCN (nếu có).",
        "Hóa đơn điện tử được ký bằng chữ ký số hợp lệ của Công ty Cổ phần Kiểu Việt theo đúng chuẩn kỹ thuật mới.",
        "Ủy nhiệm chi ngân hàng, phiếu chi tiền mặt thanh toán tiền lương, tiền công cho người lao động và cá nhân thuê ngoài.",
        "Tờ khai quyết toán thuế TNCN (Mẫu 05/QTT-TNCN) và tờ khai khấu trừ thuế TNCN hàng tháng/quý.",
        "Hồ sơ phân quyền sử dụng chữ ký số, quyết định ủy quyền ký hóa đơn, chứng từ của người đại diện theo pháp luật."
],
        accountingSteps: [
        "Bước 1: Kiểm tra Sổ chi tiết TK 3335 (Thuế TNCN) đối với số thuế đã khấu trừ của nhân viên và lao động thuê ngoài, đối chiếu với tổng số chứng từ khấu trừ thuế TNCN điện tử đã phát hành.",
        "Bước 2: Rà soát tài khoản chi phí nhân công (TK 622, TK 627, TK 642) và tài khoản phải trả người lao động (TK 334), đảm bảo các khoản chi trả có đầy đủ chứng từ khấu trừ TNCN điện tử theo quy định tại Nghị định 70/2025/NĐ-CP.",
        "Bước 3: Kiểm tra tính hợp lệ của chữ ký số trên toàn bộ hóa đơn đầu ra và chứng từ khấu trừ TNCN, đảm bảo chữ ký số còn hiệu lực và đăng ký đúng với cơ quan thuế.",
        "Bước 4: Đối chiếu số liệu trên Tờ khai quyết toán thuế TNCN Mẫu 05/QTT-TNCN với Sổ cái tài khoản chi phí lương và TK 3335, đảm bảo khớp đúng giữa BCTC và quyết toán thuế.",
        "Bước 5: Kiểm tra các chứng từ thanh toán tiền lương qua tài khoản ngân hàng (TK 112) khớp đúng với danh sách chi lương đã khấu trừ thuế TNCN."
],
        auditRisks: [
        "Bẫy truy thu thuế TNCN và phạt chậm nộp do không sử dụng hoặc sử dụng không đúng quy định chứng từ điện tử khấu trừ thuế TNCN theo Nghị định 70/2025/NĐ-CP.",
        "Rủi ro đoàn thanh tra bóc tách toàn bộ chi phí nhân công thuê ngoài khai thác mỏ đá và thi công xây lắp do thiếu chứng từ khấu trừ thuế hoặc thiếu bản cam kết 08/CK-TNCN.",
        "Phạt vi phạm hành chính trong lĩnh vực hóa đơn, chứng từ do sử dụng chữ ký số không đúng quy định hoặc chưa thông báo thay đổi thông tin sử dụng chứng từ điện tử với cơ quan thuế.",
        "Phạt khai sai 20% và tiền chậm nộp 0.03%/ngày do kê khai thiếu số thuế TNCN phải khấu trừ đối với các khoản thu nhập chịu thuế của chuyên gia hoặc lao động thời vụ."
],
        defenseStrategy: [
        "Căn cứ Nghị định 70/2025/NĐ-CP, Công ty Cổ phần Kiểu Việt đã triển khai áp dụng hệ thống chứng từ điện tử khấu trừ thuế TNCN và sử dụng chữ ký số hợp lệ cho toàn bộ hóa đơn, chứng từ phát hành, đảm bảo tuân thủ tuyệt đối quy định công nghệ mới.",
        "Đối với hoạt động khai thác mỏ đá và thi công công trình tại Gia Lai có sử dụng nhiều lao động thời vụ, công ty đã lập đầy đủ danh sách chi trả thu nhập, ký hợp đồng giao khoán, thu thập đầy đủ CCCD và bản cam kết 08/CK-TNCN hoặc thực hiện khấu trừ thuế TNCN điện tử theo đúng biểu thuế lũy tiến từng phần.",
        "Giải trình với đoàn thanh tra rằng hệ thống chữ ký số của công ty được cấp phép bởi tổ chức cung cấp dịch vụ chứng thực chữ ký số công cộng hợp pháp, đã đăng ký tích hợp trên phần mềm hóa đơn điện tử và phần mềm kế toán.",
        "Khẳng định các khoản chi phí nhân công hạch toán vào TK 622 và TK 627 đều có đầy đủ chứng từ thanh toán, chứng từ khấu trừ TNCN điện tử, hoàn toàn hợp lệ để tính vào chi phí được trừ khi quyết toán thuế TNDN."
]
      },
      {
        id: 'chk-luat-gd-dien-tu-20-2023',
        title: 'Giá trị pháp lý hợp đồng & chứng từ điện tử (Luật 20/2023)',
        description: 'Bảo quản lưu trữ thông điệp dữ liệu hóa đơn, hợp đồng điện tử ký số với đối tác đảm bảo tính nguyên vẹn và xác thực phục vụ kiểm tra điện tử.',
        priority: 'important',
        decreeId: 'luat-gd-dien-tu-20-2023',
        articleNum: '10',
        decreeLabel: 'Luật GD Điện tử 20/2023',
        phase: 2,
        documentsRequired: [
        "Hợp đồng thi công xây lắp, phụ lục hợp đồng kinh tế và hồ sơ thầu ký bằng chữ ký số hợp lệ",
        "Hóa đơn điện tử XML (định dạng chuẩn Tổng cục Thuế) và hóa đơn PDF chuyển đổi",
        "Biên bản nghiệm thu khối lượng hoàn thành A-B có chữ ký số xác thực của chủ đầu tư và nhà thầu",
        "Biên bản giao nhận hàng hóa, phiếu cân trạm cân mỏ đá và lệnh điều xe vận chuyển khoáng sản ký số",
        "Ủy nhiệm chi ngân hàng, giấy báo nợ/báo có đối ứng với các hóa đơn giá trị gia tăng đầu vào/đầu ra",
        "Nhật ký thi công điện tử hoặc nhật ký công trình có xác nhận bằng chữ ký số của tư vấn giám sát"
],
        accountingSteps: [
        "Bước 1: Kiểm tra tính toàn vẹn và nguyên vẹn của tập tin hóa đơn điện tử XML đầu vào, tra cứu mã tra cứu trên hệ thống hóa đơn điện tử của cơ quan thuế đối chiếu với Sổ cái TK 111, 112, 331, 131.",
        "Bước 2: Đối chiếu tổng số phát sinh trên bảng kê hóa đơn mua vào/bán ra với Sổ chi tiết TK 331 và TK 131, đảm bảo không có hóa đơn định dạng PDF thông thường thiếu file XML gốc.",
        "Bước 3: Kiểm tra bút toán hạch toán chi phí thi công giao thông thủy lợi và giá vốn đá xây dựng Nợ TK 154, 621, 622, 623, 627, 632 / Có TK 331, 111, 112 với các chứng từ điện tử tương ứng.",
        "Bước 4: Đối chiếu số liệu doanh thu và thuế GTGT đầu ra phản ánh trên TK 511 và TK 3331 với tờ khai thuế GTGT hàng tháng/quý và Báo cáo tài chính năm đã nộp.",
        "Bước 5: Rà soát các chứng từ thanh toán không dùng tiền mặt (Ủy nhiệm chi) qua TK 112 khớp đúng 100% với giá trị thanh toán trên hợp đồng kinh tế và hóa đơn điện tử vượt ngưỡng 20 triệu đồng."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra bóc tách toàn bộ chi phí và thuế GTGT đầu vào do sử dụng hóa đơn điện tử không có file XML hoặc file XML bị lỗi chữ ký số, sai thông tin mã số thuế.",
        "Rủi ro ấn định thuế do thiếu biên bản nghiệm thu A-B điện tử hoặc biên bản không có chữ ký số hợp lệ của chủ đầu tư dự án giao thông, thủy lợi tại Gia Lai.",
        "Bẫy phạt xuất hóa đơn sai thời điểm quy định tại Nghị định 125/2020/NĐ-CP đối với các hạng mục công trình hoàn thành nhưng chậm xuất hóa đơn điện tử (phạt từ 4 đến 8 triệu đồng).",
        "Rủi ro truy thu thuế và phạt vi phạm hành chính do hạch toán sai lệch giữa giá trị trên hóa đơn điện tử và số liệu ghi nhận trên Sổ cái TK 131, 331, 511.",
        "Rủi ro cơ quan thuế không công nhận các chứng từ giao dịch điện tử nội bộ thiếu nhật ký truy cập (log) hệ thống hoặc không đảm bảo tính bảo mật theo Luật Giao dịch điện tử 20/2023."
],
        defenseStrategy: [
        "Căn cứ Điều 10 Luật Giao dịch điện tử số 20/2023/QH15, thông điệp dữ liệu đáp ứng các điều kiện kỹ thuật được pháp luật công nhận có giá trị pháp lý tương đương văn bản giấy. Chúng tôi xuất trình đầy đủ file XML gốc kèm theo mã tra cứu trực tuyến trên Cổng thông tin của Tổng cục Thuế để chứng minh tính hợp pháp.",
        "Giải trình trước đoàn thanh tra rằng đối với đặc thù thi công công trình giao thông thủy lợi và khai thác mỏ đá ở vùng sâu vùng xa tại Gia Lai, việc sử dụng chữ ký số và hóa đơn điện tử được thực hiện nghiêm ngặt theo đúng Nghị định 123/2020/NĐ-CP và Thông tư 78/2021/TT-BTC, đảm bảo tính liên tục của chuỗi dữ liệu tài chính.",
        "Lập luận rằng các biên bản nghiệm thu khối lượng A-B và phiếu cân trạm cân mỏ đá được ký số bởi người có thẩm quyền của Công ty Cổ phần Kiểu Việt và chủ đầu tư có giá trị ràng buộc pháp lý tuyệt đối theo đúng Luật Giao dịch điện tử, không thể bị phủ nhận chỉ vì không in ấn bản giấy có dấu mộc đỏ trực tiếp.",
        "Cung cấp biên bản xác nhận của nhà cung cấp dịch vụ hóa đơn điện tử (T-Van) chứng minh tính toàn vẹn của dữ liệu hóa đơn, khẳng định không có sự can thiệp chỉnh sửa số liệu, từ đó bảo vệ toàn bộ chi phí sản xuất kinh doanh và thuế GTGT đầu vào không bị bóc tách vô lý."
]
      },
    ]
  },

  // NHÓM 3: THUẾ TNCN, TIỀN LƯƠNG & LAO ĐỘNG
  {
    id: 'tncn-laodong',
    name: 'Thuế TNCN, Tiền Lương & Lao Động',
    icon: '👥',
    color: 'purple',
    description: 'Quyết toán TNCN, giảm trừ gia cảnh, nhân công thời vụ, lương tối thiểu vùng, tăng ca',
    items: [
      {
        id: 'chk-luat-109-2025-tncn',
        title: 'Quyết toán thuế TNCN & Biểu thuế lũy tiến mới (Luật 109/2025)',
        description: 'Kiểm tra quyết toán thuế TNCN Mẫu 05/QTT-TNCN; cập nhật mức giảm trừ gia cảnh 15.5tr/6.2tr và biểu lũy tiến từng phần mới theo quy định.',
        priority: 'critical',
        decreeId: 'luat-109-2025-tncn',
        articleNum: '19',
        decreeLabel: 'Luật Thuế TNCN 109/2025',
        phase: 1,
        documentsRequired: [
        "Bảng chấm công chi tiết, bảng lương công trình giao thông thủy lợi và mỏ đá hàng tháng",
        "Hợp đồng lao động xác định thời hạn và không thời hạn ký với kỹ sư, công nhân khai thác mỏ",
        "Tờ khai quyết toán thuế TNCN năm, bảng kê chi tiết khấu trừ thuế TNCN từng nhân viên",
        "Chứng từ nộp thuế TNCN qua ngân hàng, ủy nhiệm chi nộp thuế vào Ngân sách Nhà nước",
        "Hồ sơ đăng ký mã số thuế cá nhân, hồ sơ đăng ký người phụ thuộc giảm trừ gia cảnh hợp lệ",
        "Danh sách lao động thời vụ, hợp đồng dịch vụ nhân công ngoài kèm bản sao CCCD và cam kết"
],
        accountingSteps: [
        "Bước 1: Rà soát tổng quỹ lương thực tế hạch toán vào TK 622, 627, 642 đối chiếu với Sổ chi tiết TK 334 (Phải trả người lao động).",
        "Bước 2: Kiểm tra các bút toán trích khấu trừ thuế TNCN hàng tháng qua tài khoản đối ứng Nợ TK 334 / Có TK 3335.",
        "Bước 3: Đối chiếu số thuế TNCN đã khấu trừ, đã nộp trên Sổ cái TK 3335 với Tờ khai quyết toán thuế TNCN năm và Báo cáo tài chính.",
        "Bước 4: Kiểm tra việc áp dụng biểu thuế lũy tiến từng phần mới theo Luật 109/2025 cho thu nhập từ tiền lương, tiền công từ thời điểm 01/07/2026.",
        "Bước 5: Kiểm tra các khoản chi phí phúc lợi, hỗ trợ tiền ăn ca, độc hại cho công nhân mỏ đá và công trường xây lắp có đầy đủ chứng từ hợp pháp."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra phát hiện công ty tính thiếu hoặc không khấu trừ thuế TNCN đối với thu nhập chịu thuế của lao động kỹ thuật cao, dẫn đến bị phạt khai sai 20% và tiền chậm nộp 0.03%/ngày.",
        "Bẫy ấn định thuế khi có sự chênh lệch lớn giữa tổng quỹ lương hạch toán trên chi phí sản xuất (TK 154, 622) và tổng thu nhập chịu thuế trên quyết toán thuế TNCN.",
        "Rủi ro bóc tách chi phí lương của các nhân sự khống hoặc nhân sự không có hồ sơ lao động đầy đủ nhưng vẫn được đưa vào bảng lương công trường.",
        "Rủi ro áp dụng sai biểu thuế lũy tiến mới theo Luật 109/2025 đối với các khoản thu nhập trả chậm hoặc chi trả gộp nhiều tháng."
],
        defenseStrategy: [
        "Căn cứ Điều 19 Luật Thuế TNCN số 109/2025/QH15 và các văn bản hướng dẫn thi hành, Công ty Cổ phần Kiểu Việt thực hiện việc khấu trừ, kê khai và quyết toán thuế TNCN minh bạch, chính xác theo đúng biểu thuế lũy tiến từng phần mới từ thời điểm có hiệu lực.",
        "Giải trình trước đoàn thanh tra về đặc thù ngành nghề thi công xây lắp và khai thác mỏ tại Gia Lai: Biến động nhân sự lớn, lao động phổ thông thời vụ nhiều, công ty luôn tuân thủ việc thu thập đầy đủ CCCD và thực hiện khấu trừ 10% hoặc cam kết theo đúng quy định pháp luật hiện hành.",
        "Xuất trình đầy đủ bảng chấm công công trường, nhật ký thi công, bảng lương có chữ ký nhận của người lao động nhằm chứng minh tính xác thực của quỹ lương, bác bỏ hoàn toàn cáo buộc của đoàn thanh tra về chi phí lương khống.",
        "Lập luận dựa trên số liệu đối chiếu giữa Sổ cái TK 334, TK 3335 và tờ khai quyết toán thuế TNCN năm đã nộp, khẳng định công ty đã hoàn thành đầy đủ nghĩa vụ khấu trừ và nộp thuế TNCN vào Ngân sách Nhà nước đúng hạn."
]
      },
      {
        id: 'chk-tt-111-2013',
        title: 'Thuế TNCN Thợ Mộc Xưởng Gỗ, Trạm Bê Tông & Cam Kết 08 (TT 111/2013)',
        description: 'Rà soát hồ sơ nhân công thời vụ thợ mộc, thợ sơn xưởng Nội thất Phú Tài, công nhân trạm trộn bê tông và thợ ép cừ Larsen; kiểm tra cam kết 08/CK-TNCN miễn khấu trừ 10%.',
        priority: 'critical',
        decreeId: 'tt-111-2013',
        articleNum: '25',
        decreeLabel: 'Thông tư 111/2013/TT-BTC',
        phase: 2,
        documentsRequired: [
          "Hợp đồng giao khoán công việc / Hợp đồng lao động mùa vụ dưới 03 tháng ký với thợ mộc, thợ sơn xưởng gỗ và công nhân trạm bê tông",
          "Bản cam kết thu nhập cá nhân Mẫu 08/CK-TNCN (theo Thông tư 80/2021/TT-BTC) kèm bản sao CCCD gắn chip còn hạn của từng lao động",
          "Danh sách đăng ký Mã số thuế cá nhân cho 100% người lao động làm cam kết tại thời điểm ký cam kết",
          "Bảng chấm công, Bảng theo dõi sản phẩm mộc hoàn thiện (ghế hội trường, bàn họp) có chữ ký Quản đốc xưởng",
          "Bảng thanh toán tiền lương, tiền công có chữ ký nhận tiền mặt hoặc chứng từ chi trả qua tài khoản ngân hàng (TK 112)",
          "Sổ chi tiết tài khoản 334 (Phải trả người lao động) và TK 3335 (Thuế TNCN) đối chiếu khớp đúng từng tháng"
        ],
        accountingSteps: [
          "Bước 1: Rà soát danh sách lao động thời vụ có mức chi trả từ 2.000.000 đồng/lần trở lên, kiểm tra điều kiện áp dụng Bản cam kết 08/CK-TNCN để tạm thời không khấu trừ 10%.",
          "Bước 2: Kiểm tra MST cá nhân của từng thợ mộc, công nhân trạm bê tông trên hệ thống của Tổng cục Thuế, đảm bảo MST có hiệu lực trước ngày ký cam kết.",
          "Bước 3: Đối chiếu tổng chi phí nhân công thời vụ trên TK 622 (Nhà máy Nội thất, Trạm Bê tông) và TK 623 (Công trường) với Bảng thanh toán tiền lương.",
          "Bước 4: Kiểm tra việc kê khai số lao động này trên Tờ khai quyết toán thuế TNCN Mẫu 05/QTT-TNCN và Phụ lục 05-2/BK-QTT-TNCN.",
          "Bước 5: Rà soát đảm bảo không ký liên tiếp nhiều hợp đồng thời vụ dưới 3 tháng với cùng một người lao động trong năm tài chính."
        ],
        auditRisks: [
          "Rủi ro đoàn thanh tra truy thu 10% thuế TNCN đối với toàn bộ lao động thời vụ xưởng mộc và công trường do bản cam kết 08 lập không đúng mẫu hoặc ký sau thời điểm chi trả.",
          "Bị loại chi phí tiền lương do cá nhân làm cam kết chưa có MST cá nhân tại thời điểm cam kết theo quy định của Thông tư 111/2013.",
          "Nghi ngờ gian lận mượn CCCD để khống chi phí nhân công nếu đoàn thanh tra xác minh thực tế người lao động không thừa nhận có làm việc tại Kiểu Việt.",
          "Tính tiền chậm nộp thuế TNCN 0.03%/ngày và phạt khai sai 20% trên tổng số thuế TNCN bị truy thu."
        ],
        defenseStrategy: [
          "Viện dẫn Điểm i Khoản 1 Điều 25 Thông tư 111/2013/TT-BTC, khẳng định người lao động chỉ có duy nhất thu nhập tại Kiểu Việt và ước tính tổng mức thu nhập trong năm chưa đến mức phải nộp thuế nên công ty không khấu trừ 10% là đúng luật.",
          "Cung cấp đầy đủ hồ sơ gốc gồm Hợp đồng khoán việc, Bản cam kết 08 có chữ ký sống, Bản sao CCCD và Bảng chấm công xác nhận khối lượng sản phẩm mộc, bê tông thực tế.",
          "Chứng minh tính thực tế của việc thuê thợ mộc, thợ sơn thời vụ để đáp ứng tiến độ hoàn thiện bàn ghế hội trường cho các gói thầu khẩn trương của cơ quan nhà nước.",
          "Khẳng định 100% lao động làm cam kết đều có MST cá nhân hợp lệ tra cứu trên cổng thông tin ngành thuế, hồ sơ lưu trữ chặt chẽ sẵn sàng cho đoàn kiểm tra phỏng vấn đối chiếu."
        ]
      },
      {
        id: 'chk-blld-45-2019',
        title: 'Hồ sơ HĐLĐ & Giới hạn làm thêm giờ 300h/năm (BLLĐ 45/2019)',
        description: 'Chuyển đổi toàn bộ HĐLĐ mùa vụ cũ sang HĐ có thời hạn. Kiểm tra tổng giờ làm thêm công nhân xây dựng không vượt trần 300h/năm, đơn giá 150-200-300%.',
        priority: 'critical',
        decreeId: 'blld-45-2019',
        articleNum: '107',
        decreeLabel: 'Bộ luật Lao động 45/2019',
        phase: 1,
        documentsRequired: [
        "Hợp đồng lao động ký kết với kỹ sư, công nhân vận hành máy mỏ và công nhân thi công",
        "Bảng chấm công làm thêm giờ hàng tháng tại các công trường và mỏ đá",
        "Sổ quản lý lao động, nội quy lao động đã đăng ký với cơ quan quản lý nhà nước",
        "Thỏa thuận bằng văn bản giữa người sử dụng lao động và người lao động về việc làm thêm giờ",
        "Báo cáo tình hình sử dụng lao động định kỳ gửi cơ quan quản lý lao động địa phương",
        "Hồ sơ an toàn vệ sinh lao động, trang cấp thiết bị bảo hộ lao động cho công nhân khai khoáng"
],
        accountingSteps: [
        "Bước 1: Kiểm tra đơn giá tiền lương, phụ cấp làm thêm giờ ban ngày, ban đêm, ngày nghỉ hạch toán vào TK 622, 627, 154 đối chiếu với Sổ chi tiết TK 334.",
        "Bước 2: Kiểm tra sự khớp đúng giữa số giờ làm thêm trên bảng chấm công công trường và số tiền lương làm thêm giờ đã chi trả qua TK 111, 112.",
        "Bước 3: Rà soát tổng số giờ làm thêm của từng người lao động trong năm, đối chiếu đảm bảo không vượt quá mức trần 300 giờ/năm theo quy định tại Điều 107 Bộ luật Lao động 2019.",
        "Bước 4: Kiểm tra việc trích nộp các khoản bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp (BHXH, BHYT, BHTN) trên quỹ tiền lương làm thêm giờ (nếu có thỏa thuận) vào TK 3383, 3384, 3386.",
        "Bước 5: Đối chiếu chi phí tiền lương, tiền công làm thêm giờ với quyết toán thuế TNDN năm, đảm bảo không có chi phí vượt mức khống chế hoặc thiếu hồ sơ pháp lý."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra hoặc cơ quan lao động phát hiện công nhân mỏ đá và công trường làm thêm giờ vượt quá giới hạn 300 giờ/năm, dẫn đến bị xử phạt vi phạm hành chính trong lĩnh vực lao động.",
        "Bẫy bóc tách chi phí tiền lương làm thêm giờ ra khỏi chi phí được trừ khi tính thuế TNDN do cơ quan thuế cho rằng không tuân thủ quy định pháp luật lao động về giới hạn thời gian làm thêm.",
        "Rủi ro thiếu thỏa thuận bằng văn bản về việc làm thêm giờ giữa công ty và người lao động, dẫn đến tranh chấp lao động và bị loại chi phí lương.",
        "Rủi ro hạch toán chi phí lương làm thêm giờ cao bất hợp lý so với năng suất lao động thực tế tại mỏ đá và công trường giao thông."
],
        defenseStrategy: [
        "Căn cứ Điều 107 Bộ luật Lao động số 45/2019/QH14, Công ty Cổ phần Kiểu Việt thực hiện lập thỏa thuận bằng văn bản với người lao động về việc làm thêm giờ và tuân thủ chặt chẽ giới hạn tổng số giờ làm thêm không vượt quá 300 giờ/năm đối với từng vị trí công việc đặc thù.",
        "Giải trình trước đoàn thanh tra rằng hoạt động thi công xây lắp giao thông thủy lợi và khai thác mỏ đá tại Gia Lai phụ thuộc rất lớn vào điều kiện thời tiết (mùa khô, mùa mưa lũ) và tiến độ cam kết với chủ đầu tư, đòi hỏi phải huy động nhân lực làm thêm giờ để đảm bảo tiến độ công trình.",
        "Xuất trình đầy đủ bảng chấm công công trường, sổ quản lý lao động, quyết định phân ca trực và thỏa thuận làm thêm giờ có chữ ký xác thực của người lao động, chứng minh tính hợp pháp của toàn bộ chi phí tiền lương đã hạch toán.",
        "Lập luận rằng chi phí tiền lương làm thêm giờ phục vụ trực tiếp cho hoạt động sản xuất kinh doanh, tạo ra doanh thu chịu thuế và được hạch toán đúng đắn theo các chuẩn mực kế toán, do đó việc đoàn thanh tra cố tình loại trừ chi phí này là trái với nguyên tắc thực tế và bản chất kinh tế của Luật Thuế TNDN."
]
      },
      {
        id: 'chk-nd-293-2025',
        title: 'Rà soát lương HĐLĐ theo mức lương tối thiểu vùng 2026 (NĐ 293/2025)',
        description: 'Kiểm tra mức lương ghi trên HĐLĐ của công nhân tại TP. Pleiku (Vùng III: 3.860.000đ) và các huyện Chư Sê, Đak Đoa (Vùng IV: 3.450.000đ) >= mức tối thiểu.',
        priority: 'critical',
        decreeId: 'nd-293-2025',
        articleNum: '3',
        decreeLabel: 'NĐ 293/2025 (Lương tối thiểu vùng)',
        phase: 1,
        documentsRequired: [
        "Hợp đồng lao động hoặc phụ lục hợp đồng lao động điều chỉnh mức lương của từng nhân sự",
        "Hệ thống thang lương, bảng lương của Công ty Cổ phần Kiểu Việt đã nộp phòng Lao động",
        "Bảng thanh toán tiền lương hàng tháng tại trụ sở, công trường và mỏ đá năm 2026",
        "Quyết định của Hội đồng quản trị/Giám đốc về việc áp dụng mức lương tối thiểu vùng mới",
        "Chứng từ nộp bảo hiểm xã hội hàng tháng qua ngân hàng khớp đúng với mức lương mới",
        "Quy chế tài chính, quy chế trả lương nội bộ của công ty"
],
        accountingSteps: [
        "Bước 1: Kiểm tra mức lương cơ bản ghi trên hợp đồng lao động của từng cán bộ, công nhân viên so sánh trực tiếp với mức lương tối thiểu vùng quy định tại Nghị định 293/2025/NĐ-CP.",
        "Bước 2: Kiểm tra hạch toán quỹ lương tối thiểu và các khoản trích theo lương (BHXH, BHYT, BHTN, KPCĐ) vào TK 334, 3381, 3382, 3383, 3384, 3386 đối ứng với TK 154, 622, 627, 642.",
        "Bước 3: Đối chiếu tổng số tiền đóng BHXH thực tế trên thông báo của cơ quan bảo hiểm xã hội với Sổ chi tiết TK 3383, đảm bảo không có trường hợp đóng thấp hơn mức lương tối thiểu vùng quy định năm 2026.",
        "Bước 4: Kiểm tra sự biến động tăng chi phí tiền lương trên Sổ cái TK 622 và TK 154 do việc điều chỉnh tăng lương tối thiểu vùng theo Nghị định 293/2025/NĐ-CP.",
        "Bước 5: Kiểm tra việc xây dựng và nộp thang lương, bảng lương mới cho cơ quan quản lý nhà nước về lao động tại địa phương theo đúng tiến độ."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra phát hiện công ty ký hợp đồng lao động trả lương thấp hơn mức lương tối thiểu vùng quy định tại Nghị định 293/2025/NĐ-CP, dẫn đến bị phạt vi phạm hành chính.",
        "Bẫy truy thu tiền đóng BHXH, BHYT, BHTN bắt buộc do cơ quan bảo hiểm đối chiếu dữ liệu lương trên hợp đồng lao động thấp hơn thực tế hoặc chưa cập nhật mức lương tối thiểu vùng mới.",
        "Rủi ro cơ quan thuế nghi ngờ tính hợp lý của chi phí tiền lương tăng đột biến do điều chỉnh lương tối thiểu vùng nếu công ty không xuất trình đủ phụ lục hợp đồng lao động và quyết định điều chỉnh lương.",
        "Rủi ro sai lệch số liệu hạch toán quỹ lương giữa Sổ chi tiết TK 334 và Báo cáo tài chính năm."
],
        defenseStrategy: [
        "Căn cứ Điều 3 Nghị định số 293/2025/NĐ-CP, Công ty Cổ phần Kiểu Việt tại địa bàn tỉnh Gia Lai đã rà soát toàn bộ hệ thống hợp đồng lao động và thực hiện điều chỉnh kịp thời mức lương tối thiểu trả cho người lao động không thấp hơn mức quy định vùng áp dụng từ năm 2026.",
        "Giải trình trước đoàn thanh tra rằng công ty luôn tuân thủ nghiêm ngặt pháp luật lao động và bảo hiểm xã hội; mọi thay đổi về mức lương đều có Phụ lục hợp đồng lao động ký kết hợp pháp giữa công ty và người lao động, đồng thời đã cập nhật trên hệ thống thang bảng lương nội bộ.",
        "Xuất trình thông báo nộp bảo hiểm xã hội hàng tháng, ủy nhiệm chi qua ngân hàng và bảng lương chi tiết có chữ ký nhận của người lao động để chứng minh công ty thực hiện đầy đủ nghĩa vụ tài chính đối với người lao động và Ngân sách Nhà nước.",
        "Lập luận sắc bén: Chi phí tiền lương tăng lên hoàn toàn phù hợp với lộ trình tăng lương tối thiểu vùng của Chính phủ theo Nghị định 293/2025/NĐ-CP, phục vụ cho hoạt động sản xuất kinh doanh đặc thù ngành khai thác mỏ và xây lắp, do đó toàn bộ chi phí này là chi phí hợp lý được trừ khi tính thuế TNDN, không chấp nhận bất kỳ quyết định bóc tách hay ấn định thuế nào từ phía đoàn thanh tra."
]
      },
      {
        id: 'chk-nd-145-2020',
        title: 'Quy chế tiền lương, phụ cấp công trường & Thỏa ước (NĐ 145/2020)',
        description: 'Ban hành quy chế tiền lương, thang bảng lương và thỏa ước lao động tập thể gửi Phòng LĐTBXH. Đây là điều kiện tiên quyết để CQT chấp nhận chi phí lương.',
        priority: 'important',
        decreeId: 'nd-145-2020',
        articleNum: '60',
        decreeLabel: 'NĐ 145/2020 (Quan hệ lao động)',
        phase: 2,
        documentsRequired: [
        "Hợp đồng lao động dài hạn và ngắn hạn ký với kỹ sư công trường, công nhân lái máy mỏ đá và thợ thi công giao thông thủy lợi.",
        "Quy chế tiền lương, Quy chế thưởng, Thỏa ước lao động tập thể đã đăng ký với phòng Lao động - Thương binh và Xã hội địa phương.",
        "Bảng chấm công thi công thực tế tại các công trình vãng lai tại Gia Lai và các tỉnh lân cận.",
        "Bảng thanh toán tiền lương, phụ cấp công trường, phụ cấp lưu trú, độc hại có chữ ký người lao động.",
        "Chứng từ thanh toán lương qua ngân hàng (Ủy nhiệm chi TK 112 đối ứng TK 334).",
        "Hồ sơ cam kết thu nhập cá nhân mẫu 08/CK-TNCN đối với lao động thời vụ dưới 3 tháng không khấu trừ thuế TNCN."
],
        accountingSteps: [
        "Bước 1: Kiểm tra tính logic giữa Bảng chấm công công trường và Nhật ký thi công công trình giao thông, thủy lợi. Đối chiếu số giờ làm thêm với giới hạn tại Bộ luật Lao động.",
        "Bước 2: Rà soát hạch toán chi phí tiền lương và phụ cấp vào tài khoản chi phí sản xuất kinh doanh dở dang TK 154 (chi tiết theo từng công trình/mỏ đá) và TK 622, TK 627 đối ứng với TK 334.",
        "Bước 3: Kiểm tra chứng từ chi trả lương qua ngân hàng (TK 112 đối ứng TK 334), đảm bảo khớp đúng tổng quỹ lương giữa Sổ cái TK 334, Tờ khai quyết toán thuế TNCN và Báo cáo tài chính.",
        "Bước 4: Rà soát các khoản phụ cấp công trường, độc hại khai thác mỏ đá xem có được quy định rõ trong Quy chế tiền lương và Thỏa ước lao động tập thể hay không để đảm bảo tính hợp lệ của chi phí được trừ khi tính thuế TNDN.",
        "Bước 5: Đối chiếu danh sách lao động thuê ngoài mỏ đá với tờ khai khấu trừ thuế TNCN và các mẫu 08/CK-TNCN đối với trường hợp chi trả thu nhập dưới 2 triệu đồng/lần."
],
        auditRisks: [
        "Bóc tách chi phí nhân công thuê ngoài không có chứng từ thanh toán qua ngân hàng đối với số tiền từ 20 triệu đồng trở lên theo quy định pháp luật thuế.",
        "Suất vốn đầu tư nhân công vượt quá định mức dự toán công trình giao thông, thủy lợi do cơ quan nhà nước ban hành bị đoàn thanh tra ấn định giảm trừ chi phí.",
        "Chi phí phụ cấp công trường, lưu trú không quy định cụ thể trong Quy chế tài chính, Quy chế lương thưởng bị coi là chi phí không tương ứng với doanh thu.",
        "Thiếu hồ sơ cam kết mẫu 08/CK-TNCN đối với lao động thời vụ, dẫn đến việc ấn định truy thu thuế TNCN 10% trên tổng chi trả."
],
        defenseStrategy: [
        "Luận điểm 1: Căn cứ Điều 60 Nghị định 145/2020/NĐ-CP và Điều 4 Thông tư 96/2015/TT-BTC, công ty đã xây dựng đầy đủ Quy chế tiền lương, Quy chế thưởng và Thỏa ước lao động tập thể, trong đó quy định rõ các khoản phụ cấp công trường cho kỹ sư và công nhân trực tiếp thi công tại các vùng khó khăn của tỉnh Gia Lai.",
        "Luận điểm 2: Đặc thù ngành thi công xây lắp công trình giao thông thủy lợi và khai thác mỏ đá đòi hỏi lực lượng lao động phải làm việc lưu động ngoài trời, vì vậy các khoản phụ cấp lưu trú, độc hại là chi phí thực tế phát sinh phục vụ hoạt động sản xuất kinh doanh.",
        "Luận điểm 3: Đối với lao động thời vụ mỏ đá, công ty đã thu thập đầy đủ bản cam kết mẫu 08/CK-TNCN cho các cá nhân có tổng mức thu nhập chịu thuế chưa đến mức phải nộp thuế theo quy định pháp luật.",
        "Luận điểm 4: Nhật ký thi công, bảng chấm công và biên bản nghiệm thu khối lượng hoàn thành đã thể hiện rõ sự hiện diện và tham gia trực tiếp của đội ngũ nhân công này tại công trường, bác bỏ mọi cáo buộc chi phí khống từ đoàn thanh tra."
]
      },
    ]
  },

  // NHÓM 4: QUẢN LÝ THUẾ, XỬ PHẠT & LỆ PHÍ MÔN BÀI
  {
    id: 'qlthue-xuphat',
    name: 'Quản Lý Thuế, Xử Phạt & Lệ Phí',
    icon: '🛡️',
    color: 'orange',
    description: 'Phạm vi kiểm tra, nghĩa vụ khai bổ sung, xử phạt và phân bổ thuế theo trường hợp/kỳ áp dụng',
    items: [
      {
        id: 'chk-luat-quan-ly-thue-2019',
        title: 'Quyền doanh nghiệp khi kiểm tra thuế & Tiền chậm nộp 0.03% (Luật 38/2019)',
        description: 'Nắm vững quyền từ chối cung cấp hồ sơ ngoài phạm vi quyết định kiểm tra (Điều 110-111). Tính tiền chậm nộp 0.03%/ngày nếu tự kê khai bổ sung (Điều 59).',
        priority: 'critical',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '110',
        decreeLabel: 'Luật Quản lý thuế 38/2019',
        phase: 1,
        documentsRequired: [
        "Quyết định kiểm tra thuế tại trụ sở người nộp thuế do cơ quan thuế ban hành.",
        "Biên bản kiểm tra thuế các năm trước và các kết luận thanh tra, kiểm tra trước đây.",
        "Hệ thống sổ sách kế toán: Sổ cái, Sổ chi tiết các tài khoản (TK 111, 112, 131, 331, 333,...), Bảng cân đối phát sinh tài khoản.",
        "Báo cáo tài chính các năm được kiểm tra đã nộp cơ quan thuế và Báo cáo kiểm toán độc lập (nếu có).",
        "Các tờ khai thuế GTGT (mẫu 01/GTGT), TNDN, TNCN, thuế tài nguyên, phí bảo vệ môi trường đã nộp qua mạng.",
        "Công văn giải trình, các tài liệu bổ sung cung cấp cho đoàn thanh tra trong quá trình làm việc."
],
        accountingSteps: [
        "Bước 1: Tiếp nhận Quyết định kiểm tra, kiểm tra tư cách pháp lý của Đoàn kiểm tra và lập Biên bản giao nhận hồ sơ, tài liệu kế toán.",
        "Bước 2: Rà soát toàn bộ số dư đầu kỳ, phát sinh trong kỳ và số dư cuối kỳ của các tài khoản công nợ (TK 131, TK 331), tài khoản thuế (TK 3331, 3336, 3339) đảm bảo khớp đúng với số liệu trên tờ khai.",
        "Bước 3: Kiểm tra việc hạch toán tiền chậm nộp (nếu có) vào tài khoản chi phí khác (TK 811) - lưu ý chi phí tiền chậm nộp thuế không được trừ khi tính thuế TNDN theo quy định.",
        "Bước 4: Đối chiếu số liệu chênh lệch giữa Biên bản kiểm tra thuế và sổ sách kế toán để hạch toán điều chỉnh giảm chi phí hoặc tăng thuế truy thu vào các tài khoản liên quan (TK 421, TK 333).",
        "Bước 5: Lập hồ sơ giải trình chi tiết bằng văn bản đối với từng nội dung đoàn kiểm tra chưa đồng thuận, bảo lưu ý kiến theo đúng quy định tại Luật Quản lý thuế số 38/2019/QH14."
],
        auditRisks: [
        "Bị áp dụng mức phạt tiền chậm nộp 0.03%/ngày tính trên số tiền thuế chậm nộp đối với các khoản truy thu thuế qua thanh tra kiểm tra.",
        "Bị ấn định thuế do không giải trình kịp thời hoặc không cung cấp đầy đủ hồ sơ chứng từ chứng minh tính hợp pháp của chi phí trong thời hạn luật định.",
        "Nhầm lẫn hạch toán tiền chậm nộp thuế vào chi phí được trừ khi tính thuế TNDN, dẫn đến bị truy thu thêm thuế TNDN và phạt vi phạm hành chính.",
        "Ký biên bản kiểm tra thuế mà không bảo lưu ý kiến đối với các điểm bất hợp lý, mất quyền khiếu nại theo thủ tục hành chính."
],
        defenseStrategy: [
        "Luận điểm 1: Căn cứ Điều 110 Luật Quản lý thuế số 38/2019/QH14, doanh nghiệp có đầy đủ quyền được giải trình, cung cấp bổ sung tài liệu và bảo lưu ý kiến đối với các kết luận kiểm tra thuế chưa thỏa đáng.",
        "Luận điểm 2: Đối với các khoản chênh lệch do phương pháp hạch toán kế toán xây lắp (chuyển tiếp giữa các kỳ kế toán), công ty xuất trình đầy đủ Sổ chi tiết TK 154 và Biên bản nghiệm thu để chứng minh thời điểm ghi nhận doanh thu và chi phí hoàn toàn tuân thủ chuẩn mực kế toán.",
        "Luận điểm 3: Đề nghị đoàn kiểm tra áp dụng chính xác mức tính tiền chậm nộp 0.03%/ngày theo đúng quy định tại Điều 59 Luật Quản lý thuế 38/2019 tính trên số ngày chậm nộp thực tế.",
        "Luận điểm 4: Doanh nghiệp kiên quyết giữ vững quan điểm bảo vệ các chi phí hợp lý, hợp lệ phục vụ trực tiếp cho hoạt động khai thác mỏ đá và thi công công trình giao thông thủy lợi tại địa bàn tỉnh Gia Lai."
]
      },
      {
  "id": "chk-tt-80-2021",
  "title": "Nơi kê khai và phân bổ thuế khi có hoạt động ngoài tỉnh",
  "description": "Phân loại bán nội thất, gia công, xây lắp, cơ sở sản xuất và tư vấn theo hợp đồng thực tế; xác định nghĩa vụ riêng cho GTGT và TNDN theo kỳ, không tự áp TNDN vãng lai 1%.",
  "priority": "critical",
  "decreeId": "tt-80-2021",
  "articleNum": "13",
  "decreeLabel": "Thông tư 80/2021/TT-BTC",
  "phase": 1,
  "documentsRequired": [
    "Hợp đồng, phụ lục xác định bán hàng hay xây lắp; địa chỉ công trình và đơn vị thực hiện",
    "Biên bản giao hàng/nghiệm thu, hóa đơn và bảng doanh thu theo từng công trình",
    "Tờ khai tại trụ sở và địa phương, chứng từ nộp ngân sách có tiểu mục, mã cơ quan thu",
    "Hồ sơ chi nhánh/cơ sở sản xuất và bảng phân bổ nếu có nghĩa vụ tương ứng",
    "Danh mục kỳ thuế và phiên bản TT80 cùng văn bản sửa đổi áp dụng"
  ],
  "accountingSteps": [
    "Tách bán hàng nội thất đơn thuần khỏi hợp đồng xây dựng, lắp đặt theo bản chất và hồ sơ.",
    "Đối chiếu 511/131/3331 theo công trình với doanh thu kê khai; ghi riêng khoản chênh lệch thời điểm.",
    "Xác định phạm vi và căn cứ phân bổ GTGT theo Điều 13 TT80 và sửa đổi, không lấy tiền chủ đầu tư trả làm căn cứ mặc định.",
    "Đối chiếu chứng từ đã nộp tại địa phương với kỳ kê khai, không bù trừ hai lần.",
    "Xét TNDN theo trường hợp phân bổ thực tế tại Điều 17 và quy định đúng kỳ; không suy ra mức 1% từ nghĩa vụ GTGT."
  ],
  "auditRisks": [
    "Áp nghĩa vụ xây lắp cho hợp đồng chỉ bán hàng.",
    "Áp TNDN 1% không có căn cứ cho mọi công trình ngoài tỉnh.",
    "Nộp nhầm tiểu mục, kê khai trùng hoặc bỏ sót nghĩa vụ tại nơi có công trình.",
    "Áp văn bản hiện tại hồi tố cho giao dịch thuộc kỳ trước."
  ],
  "defenseStrategy": [
    "Lập bảng từng công trình: bản chất hợp đồng, địa phương, kỳ, doanh thu, nghĩa vụ, số đã nộp và tài liệu chứng minh.",
    "Dẫn đúng điều khoản theo kỳ sau khi mở bản gốc; chỉ kết luận hoàn thành nghĩa vụ khi tờ khai và chứng từ khớp.",
    "Nếu phát hiện thiếu nghĩa vụ, ghi rõ hướng khai bổ sung và trách nhiệm xử lý; không viết sẵn kết luận công ty đã nộp đủ."
  ]
},
      {
        id: 'chk-nd-125-2020',
        title: 'Khung xử phạt vi phạm hành chính thuế & hóa đơn (NĐ 125/2020)',
        description: 'Nghiên cứu trước khung phạt: phạt khai sai 20% số thuế truy thu, phạt hóa đơn sai thời điểm (4-8 triệu/HĐ). Tự nộp bổ sung trước kiểm tra để thoát phạt 20%.',
        priority: 'important',
        decreeId: 'nd-125-2020',
        articleNum: '16',
        decreeLabel: 'NĐ 125/2020 (Xử phạt thuế, HĐ)',
        phase: 3,
        documentsRequired: [
        "Hệ thống hóa đơn điện tử (XML, PDF) đầu ra và đầu vào trong kỳ thanh tra (đặc biệt là hóa đơn xuất bán đá xây dựng tại các mỏ đá ở Gia Lai và hóa đơn nghiệm thu khối lượng công trình).",
        "Biên bản nghiệm thu khối lượng hoàn thành A-B theo từng giai đoạn hoặc hoàn thành công trình.",
        "Phiếu xuất kho, phiếu cân trạm cân mỏ đá đối với từng chuyến xe chở đá bán cho khách hàng.",
        "Biên bản hủy, điều chỉnh hóa đơn điện tử (nếu có) kèm theo thỏa thuận giữa các bên.",
        "Tờ khai thuế GTGT hàng tháng/quý và các tờ khai bổ sung điều chỉnh (mẫu 01/KHBS).",
        "Sổ chi tiết các tài khoản doanh thu (TK 511), tài khoản phải thu (TK 131) và tài khoản thuế GTGT (TK 3331)."
],
        accountingSteps: [
        "Bước 1: Kiểm tra đối chiếu ngày trên Biên bản nghiệm thu khối lượng công trình giao thông, thủy lợi với ngày xuất hóa đơn điện tử đầu ra (TK 511 đối ứng TK 131).",
        "Bước 2: Đối chiếu ngày trên phiếu cân trạm cân mỏ đá, phiếu xuất kho với thời điểm lập hóa đơn bán đá xây dựng, đảm bảo tuân thủ đúng quy định về thời điểm lập hóa đơn xuất bán hàng hóa.",
        "Bước 3: Rà soát các hóa đơn viết sai sót, hóa đơn điều chỉnh/thay thế xem đã lập đúng biên bản thỏa thuận và thực hiện kê khai điều chỉnh bổ sung theo đúng quy định hay chưa.",
        "Bước 4: Kiểm tra việc hạch toán các khoản phạt vi phạm hành chính về hóa đơn, thuế vào tài khoản chi phí không được trừ (TK 811 đối ứng TK 111/112).",
        "Bước 5: Kiểm tra các trường hợp khai sai dẫn đến thiếu số thuế phải nộp hoặc tăng số thuế được khấu trừ để chủ động tính toán số tiền phạt 20% theo quy định."
],
        auditRisks: [
        "Bị phạt tiền từ 4.000.000 đồng đến 8.000.000 đồng theo Điều 24 Nghị định 125/2020/NĐ-CP do lập hóa đơn không đúng thời điểm (ví dụ: xuất hóa đơn bán đá mỏ chậm so với ngày xuất kho/cân xe, hoặc xuất hóa đơn công trình giao thông chậm so với biên bản nghiệm thu).",
        "Bị xử phạt hành vi khai sai dẫn đến thiếu số thuế phải nộp với mức phạt 20% trên số thuế thiếu theo Điều 16 Nghị định 125/2020/NĐ-CP.",
        "Bị từ khấu trừ thuế GTGT đầu vào và loại trừ chi phí đối với các hóa đơn mua vào có thời điểm lập không hợp pháp hoặc hóa đơn của doanh nghiệp bỏ địa điểm kinh doanh.",
        "Rủi ro bị truy thu thuế GTGT và thuế TNDN do xuất hóa đơn không đúng kỳ kê khai thuế."
],
        defenseStrategy: [
        "Luận điểm 1: Đối với hoạt động thi công xây lắp công trình giao thông thủy lợi, thời điểm lập hóa đơn được thực hiện ngay khi nghiệm thu khối lượng hoàn thành từng hạng mục theo đúng quy định tại Nghị định 125/2020/NĐ-CP và Thông tư 78/2021/TT-BTC, không có hành vi chậm trễ kéo dài.",
        "Luận điểm 2: Đối với hoạt động khai thác và chế biến đá xây dựng tại mỏ đá Gia Lai, phiếu cân trạm cân và lệnh điều xe được tổng hợp theo đúng chu kỳ giao hàng thỏa thuận trong hợp đồng kinh tế, thời điểm xuất hóa đơn hoàn toàn nằm trong giới hạn pháp luật cho phép.",
        "Luận điểm 3: Giải trình rõ ràng đối với các sai sót nhỏ về hình thức hóa đơn (nếu có) là lỗi kỹ thuật đánh máy, không làm thay đổi bản chất doanh thu, số thuế phải nộp và không có mục đích trốn thuế.",
        "Luận điểm 4: Viện dẫn các công văn hướng dẫn của Tổng cục Thuế về việc linh động xác định thời điểm lập hóa đơn trong ngành xây dựng và khai khoáng đặc thù để bảo vệ quyền lợi hợp pháp cho doanh nghiệp."
]
      },
      {
        id: 'chk-nd-139-2016',
        title: 'Lệ phí môn bài doanh nghiệp & chi nhánh mỏ đá (NĐ 139/2016)',
        description: 'Kiểm tra biên lai nộp lệ phí môn bài 3tr/năm (vốn > 10 tỷ) hoặc 2tr/năm, các chi nhánh/địa điểm kinh doanh mỏ đá 1tr/năm trước hạn 30/01.',
        priority: 'important',
        decreeId: 'nd-139-2016',
        articleNum: '4',
        decreeLabel: 'NĐ 139/2016 (Lệ phí môn bài)',
        phase: 2,
        documentsRequired: [
        "Giấy chứng nhận đăng ký doanh nghiệp của Công ty Cổ phần Kiểu Việt.",
        "Giấy chứng nhận đăng ký hoạt động chi nhánh, địa điểm kinh doanh, văn phòng đại diện (đặc biệt là các mỏ đá và xưởng chế biến đá tại các huyện/thị xã ở Gia Lai).",
        "Tờ khai lệ phí môn bài hàng năm hoặc tờ khai khi có thay đổi vốn điều lệ/thành lập địa điểm kinh doanh mới.",
        "Các chứng từ nộp lệ phí môn bài qua ngân hàng (Ủy nhiệm chi TK 112 đối ứng TK 3338 / TK 3339).",
        "Sổ chi tiết tài khoản phải nộp thuế và các khoản phí (TK 3338, TK 3339) và tài khoản chi phí quản lý doanh nghiệp (TK 642).",
        "Hồ sơ quyết định tăng/giảm vốn điều lệ (nếu có) ảnh hưởng đến bậc môn bài."
],
        accountingSteps: [
        "Bước 1: Rà soát toàn bộ hệ thống các chi nhánh, xưởng sản xuất, mỏ đá trực thuộc công ty đang hoạt động tại các địa bàn tỉnh Gia Lai để xác định chính xác số lượng cơ sở phải nộp lệ phí môn bài.",
        "Bước 2: Kiểm tra việc kê khai bậc lệ phí môn bài dựa trên mức vốn điều lệ của trụ sở chính (3.000.000 đồng hoặc 2.000.000 đồng) và mức cố định cho các chi nhánh/địa điểm kinh doanh mỏ đá (1.000.000 đồng/năm) theo Nghị định 139/2016/NĐ-CP.",
        "Bước 3: Kiểm tra hạch toán chi phí lệ phí môn bài vào tài khoản chi phí quản lý doanh nghiệp (TK 6425) đối ứng tài khoản phải trả, phải nộp khác (TK 3339).",
        "Bước 4: Kiểm tra chứng từ nộp tiền vào ngân sách nhà nước qua ngân hàng (TK 112 đối ứng TK 3339), đảm bảo nộp đủ và đúng thời hạn trước ngày 30 tháng 1 hàng năm.",
        "Bước 5: Rà soát các địa điểm mỏ đá mới khai thác trong năm để đảm bảo đã nộp tờ khai lệ phí môn bài trong thời hạn 30 ngày kể từ ngày thành lập/hoạt động."
],
        auditRisks: [
        "Bị truy thu lệ phí môn bài và phạt chậm nộp, phạt hành vi không nộp tờ khai lệ phí môn bài đối với các xưởng chế biến đá hoặc trạm cân mỏ đá mới thành lập nhưng chưa làm thủ tục đăng ký địa điểm kinh doanh thuế.",
        "Bậc lệ phí môn bài tại trụ sở chính áp dụng không đúng mức quy định tương ứng với vốn điều lệ thực tế trên Giấy chứng nhận đăng ký doanh nghiệp.",
        "Bỏ sót không nộp lệ phí môn bài cho các chi nhánh hạch toán phụ thuộc nằm ngoài trụ sở chính.",
        "Hạch toán nhầm lẫn lệ phí môn bài vào chi phí không được trừ khi tính thuế TNDN (mặc dù phí môn bài được trừ, nhưng cần lưu ý các khoản phạt chậm nộp môn bài thì không được trừ)."
],
        defenseStrategy: [
        "Luận điểm 1: Căn cứ Nghị định 139/2016/NĐ-CP và Thông tư 302/2016/TT-BTC, Công ty Cổ phần Kiểu Việt đã thực hiện đầy đủ nghĩa vụ kê khai và nộp lệ phí môn bài cho trụ sở chính và toàn bộ các chi nhánh mỏ đá, xưởng chế biến đá tại tỉnh Gia Lai.",
        "Luận điểm 2: Xuất trình đầy đủ các giấy nộp tiền lệ phí môn bài qua ngân hàng hàng năm, chứng minh công ty luôn chấp hành nghiêm chỉnh pháp luật thuế, không có hành vi trốn tránh lệ phí môn bài.",
        "Luận điểm 3: Đối với các khu vực khai thác mỏ đá nằm trong ranh giới giấy phép khai thác khoáng sản được cấp, công ty đã tích hợp kê khai nộp thuế đúng quy định, không phát sinh thêm các điểm kinh doanh độc lập phải nộp môn bài ngoài danh sách đã đăng ký.",
        "Luận điểm 4: Khẳng định mọi khoản chi phí lệ phí môn bài đã hạch toán hoàn toàn tuân thủ chuẩn mực kế toán và pháp luật thuế TNDN hiện hành."
]
      },
      {
        id: 'chk-nd-22-2020',
        title: 'Miễn lệ phí môn bài chi nhánh mới thành lập (NĐ 22/2020)',
        description: 'Rà soát chính sách miễn lệ phí môn bài năm đầu cho chi nhánh, địa điểm kinh doanh mỏ đá mới thành lập trong năm theo quy định.',
        priority: 'important',
        decreeId: 'nd-22-2020',
        articleNum: '1',
        decreeLabel: 'NĐ 22/2020 (Sửa đổi lệ phí môn bài)',
        phase: 2,
        documentsRequired: [
        "Giấy chứng nhận đăng ký hoạt động chi nhánh / địa điểm kinh doanh tại Gia Lai",
        "Quyết định thành lập chi nhánh hoặc mỏ đá trực thuộc do Hội đồng quản trị hoặc Tổng Giám đốc ký ban hành",
        "Tờ khai lệ phí môn bài nộp lần đầu qua mạng điện tử kèm Giấy nộp tiền (nếu có phát sinh)",
        "Công văn thông báo mã số thuế đơn vị phụ thuộc gửi Cục Thuế tỉnh Gia Lai",
        "Hợp đồng thuê mặt bằng đặt văn phòng chi nhánh / trạm nghiền đá / bãi tập kết",
        "Báo cáo tài chính năm trước (đối với trường hợp chuyển đổi từ hộ kinh doanh thành công ty nếu có áp dụng miễn)"
],
        accountingSteps: [
        "Kiểm tra Sổ cái tài khoản 33382 (Lệ phí môn bài) đối chiếu với Tờ khai thuế môn bài và số dư đầu kỳ năm tài chính.",
        "Đối chiếu chứng từ hạch toán Nợ TK 6425 / Có TK 33382 để kiểm tra xem đơn vị có hạch toán chi phí môn bài đối với chi nhánh thuộc diện được miễn theo Nghị định 22/2020/NĐ-CP hay không.",
        "Kiểm tra tài khoản 111, 112 để xác định thực tế không có dòng tiền chi nộp lệ phí môn bài cho chi nhánh trong năm đầu thành lập.",
        "Rà soát Báo cáo tài chính, thuyết minh BCTC phần thuế và các khoản phải nộp ngân sách nhà nước đối với nghĩa vụ môn bài của các chi nhánh mới thành lập.",
        "Kiểm tra Biên bản làm việc của cơ quan thuế quản lý trực tiếp tại Gia Lai về việc tiếp nhận hồ sơ khai lệ phí môn bài miễn nộp."
],
        auditRisks: [
        "Đoàn thanh tra truy thu lệ phí môn bài do chi nhánh thành lập trong năm nhưng không nộp hồ sơ khai lệ phí môn bài kèm phụ lục miễn giảm đúng hạn.",
        "Phạt vi phạm hành chính do chậm nộp hồ sơ khai thuế theo Nghị định 125/2020/NĐ-CP nếu quên không tích chọn hoặc nộp tờ khai khai báo miễn.",
        "Rủi ro chi nhánh thành lập lại trên nền chi nhánh cũ (giải thể rồi thành lập mới) không đủ điều kiện miễn theo quy định tại Khoản 1 Điều 1 Nghị định 22/2020/NĐ-CP.",
        "Cán bộ thuế bóc tách chi phí quản lý doanh nghiệp nếu nhầm lẫn hạch toán tiền lệ phí môn bài vào chi phí hợp lý của công ty mẹ."
],
        defenseStrategy: [
        "Căn cứ điểm c khoản 1 Điều 1 Nghị định 22/2020/NĐ-CP, các chi nhánh, văn phòng đại diện, địa điểm kinh doanh mới thành lập được miễn lệ phí môn bài trong năm đầu thành lập hoặc ra hoạt động sản xuất kinh doanh.",
        "Lập luận sắc bén: Chi nhánh mỏ đá khai thác mới tại Gia Lai hoàn toàn là đơn vị độc lập về địa điểm, lần đầu tiên cấp mã số thuế phụ thuộc, chưa từng hoạt động dưới bất kỳ hình thức pháp nhân nào trước đó tại vị trí này.",
        "Trình bày biên bản tiếp nhận hồ sơ thuế điện tử qua hệ thống Thuế điện tử (eTax) thể hiện rõ thời hạn nộp tờ khai khai báo miễn lệ phí môn bài đúng hạn pháp luật định sẵn.",
        "Yêu cầu đoàn thanh tra xem xét kỹ bản chất hoạt động kinh tế thực tế, tránh việc áp dụng cứng nhắc quy định dẫn đến truy thu oan sai cho doanh nghiệp xây lắp và khai khoáng tại vùng khó khăn."
]
      },
      {
        id: 'chk-nd-64-2024',
        title: 'Hồ sơ gia hạn nộp thuế GTGT, TNDN & Tiền thuê đất (NĐ 64/2024)',
        description: 'Kiểm tra Giấy đề nghị gia hạn đã gửi CQT, đối chiếu ngày nộp thực tế trong thời hạn gia hạn để không bị cơ quan thuế phạt chậm nộp oan.',
        priority: 'important',
        decreeId: 'nd-64-2024',
        articleNum: '3',
        decreeLabel: 'NĐ 64/2024 (Gia hạn nộp thuế)',
        phase: 2,
        documentsRequired: [
        "Giấy đề nghị gia hạn nộp thuế và tiền thuê đất gửi cơ quan thuế qua hệ thống eTax (theo mẫu ban hành kèm Nghị định 64/2024/NĐ-CP)",
        "Tờ khai quyết toán thuế TNDN, Tờ khai thuế GTGT các tháng/quý thuộc diện được gia hạn nộp thuế",
        "Hợp đồng cho thuê đất, Quyết định giao đất, cho thuê đất của UBND tỉnh Gia Lai đối với mỏ đá và bãi tập kết vật liệu",
        "Chứng từ nộp tiền vào ngân sách nhà nước (Ủy nhiệm chi, Giấy nộp tiền) cho các kỳ thuế đã đến hạn sau khi hết thời gian gia hạn",
        "Báo cáo tài chính năm của Công ty Cổ phần Kiểu Việt xác định đúng mã ngành nghề kinh tế chính (Thi công xây dựng công trình, khai thác đá)",
        "Bảng kê khai chi tiết doanh thu các ngành nghề phụ trợ để chứng minh tỷ trọng ngành nghề thuộc diện được gia hạn"
],
        accountingSteps: [
        "Kiểm tra Sổ cái tài khoản 33311 (Thuế GTGT đầu ra phải nộp) và TK 3334 (Thuế TNDN) để theo dõi chính xác số tiền thuế được gia hạn theo từng kỳ kê khai.",
        "Kiểm tra tài khoản 3333 (Thuế xuất nhập khẩu - nếu có) và tài khoản 3339 (Phí, lệ phí và các khoản phải nộp khác / Tiền thuê đất) đối chiếu với tờ khai tiền thuê đất.",
        "Đối chiếu số dư cuối kỳ trên tài khoản 33311, 3334, 3339 giữa Sổ cái kế toán, Bảng cân đối phát sinh và Tờ khai thuế GTGT, TNDN hàng tháng/quý.",
        "Kiểm tra hạch toán bút toán chuyển số thuế được gia hạn sang theo dõi chi tiết trên tài khoản công nợ thuế nhà nước theo đúng thời hạn mới quy định.",
        "Kiểm tra bút toán trích lập chi phí thuế TNDN hoãn lại hoặc chi phí thuế TNDN hiện hành trên TK 8211, 8212 đảm bảo tuân thủ chuẩn mực kế toán."
],
        auditRisks: [
        "Rủi ro bị tính tiền chậm nộp 0.03%/ngày do nộp chậm hồ sơ đề nghị gia hạn quá thời hạn quy định của Nghị định 64/2024/NĐ-CP (thường là hạn chót ngày 30/9 hàng năm).",
        "Truy thu thuế GTGT, TNDN và tiền thuê đất kèm phạt chậm nộp do ngành nghề kinh doanh thực tế của công ty có tỷ trọng doanh thu khai thác đá không đạt tỷ lệ quy định để được gia hạn.",
        "Bẫy kê khai sai số tiền thuế được gia hạn dẫn đến việc hệ thống thuế tự động tính tiền chậm nộp tự động gây tranh chấp với cơ quan thuế địa phương.",
        "Doanh nghiệp tự ý nộp tiền thuế chậm hơn thời hạn gia hạn mới mà không tính toán đủ số ngày chậm nộp phát sinh thực tế."
],
        defenseStrategy: [
        "Viện dẫn trực tiếp Điều 3 Nghị định 64/2024/NĐ-CP quy định rõ ngành nghề xây dựng công trình công ích, giao thông thủy lợi và khai thác đá xây dựng nằm trong danh mục đối tượng được gia hạn nộp thuế.",
        "Trình bày Giấy đề nghị gia hạn đã được gửi thành công qua hệ thống mạng thông tin điện tử của Tổng cục Thuế kèm mã giao dịch điện tử hợp lệ trước thời hạn chót quy định.",
        "Lập bảng tính chi tiết tỷ trọng doanh thu ngành nghề thi công xây lắp và khai thác mỏ đá chiếm trên 50% tổng doanh thu thuần của Công ty Cổ phần Kiểu Việt theo đúng tiêu chí của Chính phủ.",
        "Khẳng định việc thực hiện nghĩa vụ tài chính sau khi hết thời gian gia hạn đã được công ty tuân thủ nghiêm ngặt, có ủy nhiệm chi chuyển tiền qua ngân hàng đầy đủ, không để nợ đọng kéo dài."
]
      },
      {
        id: 'chk-luat-56-2024',
        title: 'Trách nhiệm pháp lý người đại diện & Kế toán trưởng (Luật 56/2024)',
        description: 'Cập nhật quy định mới về phân cấp thanh tra thuế, xử lý trách nhiệm kế toán trưởng và đại diện pháp luật khi phát sinh chênh lệch số liệu.',
        priority: 'recommended',
        decreeId: 'luat-56-2024',
        articleNum: '1',
        decreeLabel: 'Luật sửa đổi 56/2024',
        phase: 3,
        documentsRequired: [
        "Quyết định bổ nhiệm Kế toán trưởng, Giấy chứng nhận bồi dưỡng kế toán trưởng, hợp đồng lao động của Kế toán trưởng",
        "Quyết định phân công nhiệm vụ, ủy quyền giữa Hội đồng quản trị, Tổng Giám đốc (Người đại diện theo pháp luật) và các phòng ban chuyên môn",
        "Hệ thống quy chế tài chính, quy chế chi tiêu nội bộ, quy chế quản lý vật tư, trạm cân đá, kho bãi có chữ ký phê duyệt đầy đủ",
        "Biên bản bàn giao số liệu kế toán, tài sản giữa các đời kế toán trưởng hoặc người đại diện (nếu có thay đổi trong kỳ kiểm tra)",
        "Hóa đơn điện tử, chứng từ thanh toán không dùng tiền mặt có chữ ký số hợp lệ của người đại diện theo pháp luật hoặc người được ủy quyền",
        "Sổ kế toán chi tiết, nhật ký chung, sổ cái các tài khoản có đầy đủ chữ ký của người lập biểu, kế toán trưởng và người đại diện theo pháp luật"
],
        accountingSteps: [
        "Kiểm tra toàn bộ hệ thống chứng từ gốc thu, chi, nhập, xuất kho vật liệu đá, vật tư thi công xem có đầy đủ chữ ký theo đúng quy định mới của Luật Kế toán sửa đổi.",
        "Đối chiếu tài khoản 111, 112 với các chứng từ ủy nhiệm chi, séc, giấy rút dự toán có chữ ký phê duyệt hợp pháp của người đại diện và kế toán trưởng.",
        "Kiểm tra tài khoản 331, 131, 334 về việc hạch toán lương, thưởng, công nợ có bảng kê chi tiết và được kiểm soát chặt chẽ bởi bộ phận kiểm soát nội bộ.",
        "Đối chiếu số liệu trên Báo cáo tài chính năm với các Biên bản kiểm toán độc lập (nếu có) để đảm bảo tính trung thực, khách quan dưới sự chịu trách nhiệm của người đại diện.",
        "Kiểm tra việc lưu trữ hồ sơ tài liệu kế toán điện tử, chứng từ XML hóa đơn đảm bảo không bị chỉnh sửa trái phép, đáp ứng tiêu chuẩn lưu trữ theo luật định."
],
        auditRisks: [
        "Rủi ro pháp lý hình sự hoặc hành chính đối với Người đại diện theo pháp luật và Kế toán trưởng khi cơ quan thuế phát hiện hóa đơn khống, sai phạm trốn thuế tại mỏ đá.",
        "Phạt tiền vi phạm quy định về sổ kế toán, thiếu chữ ký của người có thẩm quyền trên chứng từ kế toán theo quy định xử phạt vi phạm hành chính mới.",
        "Bị loại trừ toàn bộ chi phí hợp lý khi xác định thuế TNDN nếu chứng từ chi phí không có đầy đủ chữ ký phê duyệt của người đại diện hoặc người được ủy quyền hợp pháp.",
        "Rủi ro tranh chấp nội bộ công ty dẫn đến việc chối bỏ trách nhiệm pháp lý đối với các số liệu tài chính đã nộp cơ quan thuế Gia Lai."
],
        defenseStrategy: [
        "Căn cứ Luật sửa đổi 56/2024/QH15 sửa đổi, bổ sung một số điều của Luật Kế toán, Công ty Cổ phần Kiểu Việt đã thiết lập quy trình kiểm soát nội bộ chặt chẽ đối với mọi giao dịch kinh tế phát sinh.",
        "Chứng minh mọi hóa đơn, chứng từ chi phí thi công công trình và khai thác mỏ đá đều có đầy đủ chữ ký, chữ ký số của người đại diện theo pháp luật hoặc người được ủy quyền ủy nhiệm hợp pháp bằng văn bản.",
        "Lập luận bảo vệ: Kế toán trưởng và Tổng giám đốc đã thực hiện đầy đủ nghĩa vụ trung thực, cẩn trọng, kiểm tra kỹ lưỡng nguồn gốc hợp pháp của vật tư, nhân công trước khi ký duyệt hạch toán.",
        "Trình bày rõ ràng hệ thống phân quyền điện tử trên phần mềm kế toán, chứng minh không có tài khoản kế toán nào được phép can thiệp sâu vào số liệu gốc mà không để lại vết kiểm toán (audit trail)."
]
      },
    ]
  },

  // NHÓM 5: KHAI THÁC MỎ ĐÁ, THUẾ TÀI NGUYÊN & PHÍ BVMT (ĐẶC THÙ KIỂU VIỆT)
  {
    id: 'khoangsan-tainguyen',
    name: 'Khai Thác Mỏ Đá, Thuế Tài Nguyên & BVMT',
    icon: '⛏️',
    color: 'amber',
    description: 'Bảng giá Gia Lai QĐ 87, hộ chiếu nổ mìn, sản lượng mỏ, phí BVMT, tiền cấp quyền',
    items: [
      {
        id: 'chk-qd-87-2025-gialai',
        title: 'Áp đúng Bảng giá tính thuế tài nguyên Gia Lai 2026 (QĐ 87/2025)',
        description: 'Đối chiếu giá tính thuế trên tờ khai Mẫu 01/TAIN với Bảng giá đá xây dựng (đá 1x2, đá 2x4, đá 4x6, cát nghiền) do UBND tỉnh Gia Lai ban hành.',
        priority: 'critical',
        decreeId: 'qd-87-2025-gialai',
        decreeLabel: 'QĐ 87/2025/QĐ-UBND Gia Lai',
        phase: 1,
        documentsRequired: [
        "Quyết định 87/2025/QĐ-UBND của UBND tỉnh Gia Lai ban hành Bảng giá tính thuế tài nguyên năm 2026",
        "Giấy phép khai thác khoáng sản (mỏ đá) do UBND tỉnh Gia Lai cấp cho Công ty Cổ phần Kiểu Việt còn hiệu lực",
        "Bảng kê sản lượng đá nguyên khai khai thác thực tế tại mỏ hàng tháng, hàng quý",
        "Tờ khai thuế tài nguyên mẫu 01/TAIN gửi cơ quan thuế tỉnh Gia Lai kèm phụ lục chi tiết",
        "Hóa đơn bán hàng xuất ra đối với đá nguyên khai, đá thành phẩm các loại (đá 1x2, 2x4, đá mi, đá học)",
        "Biên bản kiểm tra khoáng sản định kỳ, biên bản đo đạc trữ lượng khai thác thực tế của Sở Tài nguyên và Môi trường Gia Lai"
],
        accountingSteps: [
        "Kiểm tra Sổ cái tài khoản 3336 (Thuế tài nguyên) đối chiếu với tổng số thuế tài nguyên phải nộp trên các Tờ khai 01/TAIN hàng tháng/quý.",
        "Kiểm tra tài khoản 154 (Chi phí sản xuất kinh doanh dở dang) và tài khoản 621, 627 liên quan đến chi phí khai thác mỏ đá, chi phí nộp thuế tài nguyên.",
        "Đối chiếu đơn giá tính thuế tài nguyên được khai báo trên tờ khai với đúng mức giá quy định tại Quyết định 87/2025/QĐ-UBND cho từng loại đá tương ứng tại khu vực mỏ khai thác.",
        "Kiểm tra hạch toán chi phí thuế tài nguyên vào giá vốn hàng bán (TK 632) khi tiêu thụ đá hoặc phân bổ vào chi phí sản xuất (TK 154) theo sản lượng thực tế.",
        "Rà soát số dư cuối kỳ trên tài khoản 3336, đảm bảo không có tình trạng nợ đọng thuế tài nguyên hoặc kê khai sai lệch đơn giá quy định của tỉnh."
],
        auditRisks: [
        "Đoàn thanh tra ấn định lại số thuế tài nguyên phải nộp do doanh nghiệp áp dụng sai đơn giá tính thuế thấp hơn mức quy định tại Quyết định 87/2025/QĐ-UBND của tỉnh Gia Lai.",
        "Truy thu thuế tài nguyên chênh lệch kèm tiền chậm nộp 0.03%/ngày và xử phạt hành vi khai sai dẫn đến thiếu số thuế phải nộp theo Nghị định 125/2020/NĐ-CP.",
        "Bẫy phân loại sai chủng loại đá (ví dụ: đá nguyên khai nổ mìn nhưng khai báo như đá xô bồ hoặc đất đá thải) để áp mức đơn giá tính thuế tài nguyên thấp hơn thực tế.",
        "Sai lệch giữa sản lượng ghi nhận trên trạm cân mỏ đá với sản lượng kê khai nộp thuế tài nguyên với cơ quan thuế."
],
        defenseStrategy: [
        "Căn cứ Quyết định 87/2025/QĐ-UBND của UBND tỉnh Gia Lai, Công ty Cổ phần Kiểu Việt đã tra cứu và áp dụng chính xác 100% mức đơn giá tính thuế tài nguyên tương ứng với từng chủng loại đá và vị trí mỏ cụ thể.",
        "Lập luận giải trình: Đơn vị luôn tuân thủ nguyên tắc áp dụng đúng biểu giá do tỉnh ban hành, không tự ý áp dụng mức giá thấp hơn hoặc nhầm lẫn giữa các vùng địa lý kinh tế trên địa bàn tỉnh Gia Lai.",
        "Xuất trình toàn bộ phiếu cân trạm cân điện tử tại mỏ đá, chứng minh sản lượng đá nguyên khai đưa vào chế biến và tiêu thụ khớp hoàn toàn với số liệu kê khai thuế tài nguyên hàng kỳ.",
        "Khẳng định mọi thay đổi về phân loại sản phẩm đá (đá học, đá xây dựng các loại) đều có biên bản nghiệm thu chất lượng nội bộ và phù hợp với tiêu chuẩn kỹ thuật mỏ đã được cơ quan nhà nước phê duyệt."
]
      },
      {
        id: 'chk-tt-152-2015',
        title: 'Quy đổi sản lượng đá nguyên khai nổ mìn & Tỷ lệ hao hụt (TT 152/2015)',
        description: 'Lập bảng cân đối từ khối lượng thuốc nổ nổ mìn sang sản lượng đá nguyên khai và đá thành phẩm qua trạm nghiền, giải trình tỷ lệ hao hụt kỹ thuật.',
        priority: 'critical',
        decreeId: 'tt-152-2015',
        articleNum: '6',
        decreeLabel: 'TT 152/2015 (Thuế Tài nguyên)',
        phase: 1,
        documentsRequired: [
        "Hồ sơ thiết kế mỏ, hộ chiếu nổ mìn được cơ quan có thẩm quyền phê duyệt",
        "Bảng tính hệ số quy đổi sản lượng đá nguyên khai ra đá thành phẩm (đá 1x2, 2x4, 4x6, đá mi, đá bột) xây dựng theo quy định tại Điều 6 Thông tư 152/2015/TT-BTC",
        "Nhật ký khai thác mỏ, sổ ghi chép khối lượng đá nguyên khai nổ mìn đưa vào máy nghiền sàng hàng ngày",
        "Phiếu cân trạm cân điện tử tại cửa mỏ xác định khối lượng đá nguyên khai và sản lượng đá thành phẩm xuất bán",
        "Hóa đơn bán hàng đá xây dựng các loại, bảng kê nhập xuất tồn kho thành phẩm đá tại bãi mỏ",
        "Báo cáo kết quả đo đạc địa hình mỏ, nghiệm thu khối lượng khoáng sản khai thác thực tế hàng năm"
],
        accountingSteps: [
        "Kiểm tra Sổ cái tài khoản 152 (Nguyên liệu, vật liệu) và tài khoản 155 (Thành phẩm) đối với khâu nhập kho đá nguyên khai sau nổ mìn và xuất kho ra đá thành phẩm.",
        "Kiểm tra tài khoản 154 (Chi phí sản xuất kinh doanh dở dang) phần tập hợp chi phí khai thác mỏ đá và chế biến đá xây dựng.",
        "Kiểm tra việc áp dụng hệ số quy đổi sản lượng tài nguyên từ đá thành phẩm ngược lại đá nguyên khai để tính thuế tài nguyên theo đúng công thức tại Thông tư 152/2015/TT-BTC.",
        "Đối chiếu số liệu sản lượng trên Sổ chi tiết kho thành phẩm với sản lượng kê khai trên tờ khai thuế tài nguyên hàng quý.",
        "Kiểm tra hạch toán chi phí giá vốn (TK 632) phản ánh đúng sản lượng đá thực tế tiêu thụ nhân với giá thành sản xuất hợp lý đã bao gồm hao hụt định mức."
],
        auditRisks: [
        "Đoàn thanh tra bóc tách, ấn định lại sản lượng đá nguyên khai chịu thuế tài nguyên do doanh nghiệp áp dụng hệ số quy đổi không đúng quy định hoặc tự ý nâng tỷ lệ hao hụt chế biến quá cao.",
        "Truy thu thuế tài nguyên và thuế GTGT đối với phần sản lượng đá chênh lệch giữa thực tế khai thác và số liệu kê khai nộp thuế.",
        "Phạt khai sai 20% và tiền chậm nộp đối với hành vi kê khai thiếu sản lượng tính thuế tài nguyên do áp dụng sai phương pháp quy đổi theo Điều 6 Thông tư 152/2015/TT-BTC.",
        "Rủi ro đoàn thuế không chấp nhận tỷ lệ hao hụt nghiền sàng đá do doanh nghiệp tự xây dựng mà thiếu căn cứ khoa học và định mức kỹ thuật mỏ được cấp có thẩm quyền công nhận."
],
        defenseStrategy: [
        "Viện dẫn cụ thể Điều 6 Thông tư 152/2015/TT-BTC hướng dẫn về phương pháp tính thuế tài nguyên trong trường hợp tài nguyên khai thác phải qua sàng tuyển, chế biến mới tiêu thụ.",
        "Trình bày chi tiết công thức quy đổi sản lượng đá thành phẩm ra đá nguyên khai dựa trên hệ số kỹ thuật thực tế và định mức hao hụt đã được xây dựng khoa học dựa trên đặc tính đá bazan tại mỏ Gia Lai.",
        "Xuất trình toàn bộ nhật ký nổ mìn, số liệu từ trạm cân điện tử tự động và biên bản nghiệm thu sản lượng khai thác hàng tháng có sự chứng kiến của kỹ sư mỏ.",
        "Khẳng định hệ số quy đổi và tỷ lệ hao hụt nghiền sàng của Công ty Cổ phần Kiểu Việt hoàn toàn nằm trong biên độ kỹ thuật cho phép của ngành khai thác khoáng sản, đảm bảo tính trung thực, chính xác và tuân thủ pháp luật thuế tài nguyên."
]
      },
      {
        id: 'chk-nd-27-2023',
        title: 'Kê khai và nộp Phí bảo vệ môi trường khai thác đá (NĐ 27/2023)',
        description: 'Kê khai phí BVMT đối với đá khai thác (6.000 - 10.000 đ/m3 đá nguyên khai); đối chiếu sản lượng khớp với tờ khai thuế tài nguyên.',
        priority: 'critical',
        decreeId: 'nd-27-2023',
        articleNum: '5',
        decreeLabel: 'NĐ 27/2023 (Phí BVMT khoáng sản)',
        phase: 1,
        documentsRequired: [
        "Giấy phép khai thác khoáng sản (mỏ đá tại Gia Lai) còn hiệu lực pháp lý do cơ quan nhà nước có thẩm quyền cấp.",
        "Báo cáo sản lượng khoáng sản khai thác thực tế hàng tháng, quý có xác nhận của bộ phận kỹ thuật mỏ và Ban Giám đốc.",
        "Phiếu cân điện tử tại trạm cân mỏ đá, lưu trữ đầy đủ dữ liệu cân xe xuất bán, xe chở nội bộ.",
        "Hóa đơn điện tử (XML và PDF) xuất bán đá xây dựng các loại (đá 1x2, 2x4, đá mi, đá hộc) tương ứng với sản lượng khai thác.",
        "Chứng từ nộp ngân sách nhà nước (Ủy nhiệm chi qua ngân hàng, Giấy nộp tiền vào NSNN) đối với khoản phí bảo vệ môi trường hằng quý.",
        "Sổ chi tiết tài khoản 3336 (Phí bảo vệ môi trường) và sổ chi tiết kho hàng (TK 152, 155)."
],
        accountingSteps: [
        "Bước 1: Kiểm tra việc hạch toán phí bảo vệ môi trường phải nộp căn cứ sản lượng khai thác thực tế định kỳ, ghi Nợ TK 154 / 627 / 632 và Có TK 3336.",
        "Bước 2: Đối chiếu tổng sản lượng đá nguyên khai khai thác trên sổ kho tài khoản 152/155 với tờ khai quyết toán phí bảo vệ môi trường nộp Cục Thuế tỉnh Gia Lai.",
        "Bước 3: Kiểm tra chứng từ thanh toán tiền phí BVMT qua tài khoản ngân hàng (Nợ TK 3336 / Có TK 112) đảm bảo nộp đúng hạn theo quy định pháp luật thuế.",
        "Bước 4: Đối chiếu số liệu doanh thu xuất hóa đơn trên TK 511 với sản lượng khai thác thực tế, kiểm tra tỷ lệ thu hồi đá nguyên khai và đá thành phẩm.",
        "Bước 5: So sánh số liệu trên Sổ cái TK 3336, Tờ khai phí bảo vệ môi trường quý, Báo cáo tài chính năm và Báo cáo kiểm toán độc lập để phát hiện chênh lệch."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra áp dụng hệ số quy đổi đá nguyên khai sang đá thành phẩm không đúng thực tế mỏ đá tại Gia Lai để truy thu phí BVMT.",
        "Phạt khai sai 20% trên số thuế, phí kê khai thiếu theo Luật Quản lý thuế và Nghị định 125/2020/NĐ-CP do chênh lệch sản lượng khai thác.",
        "Tiền chậm nộp tính trên số tiền phí BVMT nộp chậm so với thời hạn quy định (0.03%/ngày theo quy định hiện hành).",
        "Rủi ro bị bóc tách chi phí tính thuế TNDN đối với các khoản phí BVMT nộp quá hạn hoặc không có chứng từ nộp tiền hợp pháp.",
        "Bẫy đoàn thanh tra kiểm tra dữ liệu trạm cân điện tử mỏ đá không trùng khớp với sản lượng ghi nhận trên sổ sách kế toán."
],
        defenseStrategy: [
        "Lập luận rằng công ty Cổ phần Kiểu Việt thực hiện kê khai phí bảo vệ môi trường căn cứ trên khối lượng đá nguyên khai thực tế khai thác qua trạm cân hợp chuẩn đã được kiểm định tại mỏ đá theo đúng Điều 5 Nghị định 27/2023/NĐ-CP.",
        "Trình bày chi tiết phương pháp xác định sản lượng đá khai thác dựa trên nhật ký mỏ, biên bản nghiệm thu khối lượng kỳ khai thác và dữ liệu trạm cân có niêm phong kẹp chì kiểm định định kỳ.",
        "Cung cấp đầy đủ các Giấy nộp tiền và Ủy nhiệm chi đã hoàn thành nghĩa vụ ngân sách trước thời hạn cơ quan thuế ban hành quyết định thanh tra trực tiếp tại trụ sở công ty.",
        "Giải trình rõ đặc thù địa hình mỏ đá tại Gia Lai, tỷ lệ đá dăm, đá hộc thu hồi thực tế, bác bỏ các ấn định mang tính chủ quan của đoàn thanh tra chưa bám sát thực trạng kỹ thuật khai thác mỏ."
]
      },
      {
        id: 'chk-nd-67-2019',
        title: 'Chứng từ nộp Tiền cấp quyền khai thác khoáng sản (NĐ 67/2019)',
        description: 'Chuẩn bị chứng từ nộp tiền cấp quyền KTKS kỳ 1 (trước 31/05) và kỳ 2 (trước 31/10) hàng năm theo Quyết định của UBND tỉnh Gia Lai.',
        priority: 'critical',
        decreeId: 'nd-67-2019',
        articleNum: '4',
        decreeLabel: 'NĐ 67/2019 (Tiền cấp quyền KTKS)',
        phase: 1,
        documentsRequired: [
        "Quyết định phê duyệt tiền cấp quyền khai thác khoáng sản do cơ quan nhà nước có thẩm quyền cấp cho mỏ đá tại Gia Lai.",
        "Thông báo nộp tiền cấp quyền khai thác khoáng sản hàng năm hoặc theo kỳ của cơ quan thuế / Sở Tài nguyên và Môi trường.",
        "Chứng từ nộp ngân sách nhà nước (Ủy nhiệm chi ngân hàng, Giấy nộp tiền vào NSNN) kèm mã định danh khoản nộp ngân sách.",
        "Hồ sơ tài chính, Báo cáo tài chính các năm đã kiểm toán thể hiện việc trích lập và phân bổ chi phí tiền cấp quyền khai thác.",
        "Sổ chi tiết tài khoản 242 (Chi phí trả trước dài hạn) hoặc tài khoản 3339 (Phí, lệ phí và các khoản phải nộp khác)."
],
        accountingSteps: [
        "Bước 1: Kiểm tra việc ghi nhận số tiền cấp quyền khai thác khoáng sản phải nộp theo quyết định phê duyệt vào tài khoản phải trả hoặc chi phí trả trước (Nợ TK 242 / Có TK 3339).",
        "Bước 2: Rà soát việc phân bổ tiền cấp quyền khai thác khoáng sản vào giá vốn hàng bán hoặc chi phí sản xuất kinh doanh dở dang theo sản lượng khai thác thực tế hàng kỳ (Nợ TK 154, 632 / Có TK 242).",
        "Bước 3: Đối chiếu chứng từ nộp tiền qua ngân hàng (Nợ TK 3339 / Có TK 112) với thông báo thu tiền của cơ quan nhà nước tỉnh Gia Lai.",
        "Bước 4: Kiểm tra việc kết chuyển số dư các tài khoản liên quan trên Sổ cái với Bảng cân đối phát sinh tài khoản và Báo cáo tài chính năm.",
        "Bước 5: Xác minh tính hợp lý của việc phân bổ chi phí tiền cấp quyền khai thác khoáng sản đưa vào chi phí được trừ khi tính thuế TNDN theo đúng sản lượng khai thác thực tế."
],
        auditRisks: [
        "Rủi ro cơ quan thuế loại trừ chi phí phân bổ tiền cấp quyền khai thác khoáng sản do không khớp với sản lượng khai thác thực tế trên giấy phép.",
        "Phạt chậm nộp đối với các kỳ nộp tiền cấp quyền khai thác khoáng sản chậm so với thời hạn ghi trên thông báo của cơ quan nhà nước.",
        "Bẫy hạch toán trực tiếp toàn bộ tiền cấp quyền khai thác vào chi phí kỳ thay vì phân bổ theo sản lượng khai thác thực tế gây sai lệch nghĩa vụ thuế TNDN.",
        "Truy thu thuế TNDN và phạt vi phạm hành chính do phân bổ chi phí vượt quá mức quy định trên trữ lượng khoáng sản được phép khai thác.",
        "Thiếu chứng từ nộp tiền qua ngân hàng theo đúng quy định tại Điều 4 Nghị định 67/2019/NĐ-CP dẫn đến nghi vấn chi phí không có thật."
],
        defenseStrategy: [
        "Dẫn chiếu Điều 4 Nghị định 67/2019/NĐ-CP, khẳng định Công ty Cổ phần Kiểu Việt đã hạch toán và phân bổ tiền cấp quyền khai thác khoáng sản hoàn toàn tuân thủ đúng tỷ lệ sản lượng khai thác thực tế trong kỳ so với tổng trữ lượng thương phẩm được phép khai thác.",
        "Xuất trình đầy đủ các Ủy nhiệm chi ngân hàng thanh toán tiền cấp quyền khai thác khoáng sản đúng hạn theo thông báo của cơ quan thuế tỉnh Gia Lai.",
        "Lập luận chặt chẽ rằng chi phí phân bổ tiền cấp quyền khai thác là chi phí sản xuất kinh doanh mang tính đặc thù của doanh nghiệp khai khoáng, đáp ứng đầy đủ điều kiện là chi phí được trừ khi xác định thu nhập chịu thuế TNDN.",
        "Cung cấp bảng tính phân bổ chi phí chi tiết có chữ ký xác nhận của kế toán trưởng và giám đốc, giải trình rõ ràng mọi thắc mắc của đoàn thanh tra thuế."
]
      },
      {
        id: 'chk-luat-54-2024-khoangsan',
        title: 'Số liệu trạm cân, camera giám sát sản lượng mỏ (Luật 54/2024)',
        description: 'Sao lưu dữ liệu trạm cân xe tải và nhật ký khai thác tại mỏ đá theo Luật Địa chất & Khoáng sản mới để chứng minh tính trung thực của sản lượng kê khai.',
        priority: 'important',
        decreeId: 'luat-54-2024-khoangsan',
        articleNum: '57',
        decreeLabel: 'Luật Khoáng sản 54/2024',
        phase: 1,
        documentsRequired: [
        "Hồ sơ lắp đặt, kiểm định trạm cân điện tử tại mỏ đá theo quy định của cơ quan đo lường chất lượng.",
        "Nhật ký vận hành trạm cân điện tử, dữ liệu phần mềm quản lý trạm cân lưu trữ file điện tử chi tiết từng xe ra vào mỏ.",
        "Hồ sơ hệ thống camera giám sát khu vực mỏ đá, vị trí kho chứa, trạm cân theo tiêu chuẩn pháp luật khoáng sản.",
        "Biên bản giao nhận đá, phiếu cân hàng xuất kho cho từng xe vận chuyển đá xây dựng.",
        "Sổ kho tài khoản 152, 155, sổ chi tiết doanh thu và tờ khai thuế tài nguyên, phí bảo vệ môi trường.",
        "Hợp đồng kinh tế và hóa đơn xuất bán đá cho các công trình giao thông thủy lợi tại Gia Lai."
],
        accountingSteps: [
        "Bước 1: Đối chiếu tổng sản lượng đá xuất qua trạm cân điện tử trong kỳ với sản lượng ghi nhận trên sổ kho (Nợ TK 155 / Có TK 154) và doanh thu (Nợ TK 131, 111, 112 / Có TK 511, 3331).",
        "Bước 2: Kiểm tra tính liên tục, không bị ngắt quãng của dữ liệu camera giám sát và dữ liệu trạm cân điện tử theo yêu cầu quản lý khoáng sản.",
        "Bước 3: Rà soát độ chênh lệch giữa số liệu khai thác thực tế từ trạm cân với sản lượng kê khai nộp thuế tài nguyên và phí bảo vệ môi trường hàng quý.",
        "Bước 4: Kiểm tra các bút toán hạch toán giá vốn hàng bán (Nợ TK 632 / Có TK 155) tương ứng chính xác với khối lượng đá xuất bán qua trạm cân.",
        "Bước 5: Đối chiếu số liệu sản lượng trên sổ sách kế toán với Báo cáo tài chính và Báo cáo kiểm toán độc lập năm tài chính."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra phát hiện dữ liệu trạm cân và camera giám sát có sự chênh lệch so với sản lượng khai thác kê khai thuế dẫn đến cáo buộc giấu doanh thu.",
        "Bẫy ấn định thuế tài nguyên và thuế TNDN dựa trên công suất thiết kế tối đa của mỏ đá thay vì số liệu thực tế ghi nhận qua trạm cân.",
        "Phạt hành chính và truy thu thuế do hệ thống camera giám sát hoặc trạm cân không đáp ứng tiêu chuẩn kỹ thuật theo quy định tại Luật Địa chất và Khoáng sản số 54/2024/QH15.",
        "Rủi ro bóc tách chi phí giá vốn do không chứng minh được tính xác thực của khối lượng nguyên vật liệu đầu vào xuất xưởng.",
        "Phạt vi phạm quy định về lắp đặt thiết bị giám sát khai thác khoáng sản theo nghị định xử phạt vi phạm hành chính chuyên ngành."
],
        defenseStrategy: [
        "Viện dẫn Điều 57 Luật Địa chất và Khoáng sản số 54/2024/QH15, chứng minh Công ty Cổ phần Kiểu Việt đã trang bị đầy đủ trạm cân điện tử và hệ thống camera giám sát hoạt động 24/7 tại khu vực mỏ đá tại Gia Lai.",
        "Cung cấp toàn bộ nhật ký trạm cân điện tử, file dữ liệu gốc và biên bản kiểm định thiết bị đo lường còn hiệu lực để chứng minh tính trung thực, khách quan của số liệu sản lượng.",
        "Giải trình rõ ràng rằng mọi xe chở đá xuất mỏ đều được cân tải trọng chính xác, không có hiện tượng khai thác trái phép hay ngoài luồng như nghi vấn của đoàn thanh tra.",
        "Lập luận sắc bén bảo vệ uy tín doanh nghiệp thi công xây lắp công trình giao thông và khai khoáng, sẵn sàng kết nối trực tiếp dữ liệu trạm cân cho đoàn kiểm tra đối chiếu thực tế."
]
      },
      {
        id: 'chk-nd-193-2025-khoangsan',
        title: 'Giấy phép khai thác mỏ đá & Hoàn phục môi trường (NĐ 193/2025)',
        description: 'Kiểm tra tính hợp lệ của Giấy phép KTKS, mốc giới tọa độ khai thác và chứng từ ký quỹ phục hồi môi trường mỏ đá tại Quỹ BVMT tỉnh Gia Lai.',
        priority: 'important',
        decreeId: 'nd-193-2025-khoangsan',
        articleNum: '28',
        decreeLabel: 'NĐ 193/2025 (Hướng dẫn Luật KS)',
        phase: 2,
        documentsRequired: [
        "Giấy phép khai thác khoáng sản (mỏ đá) do cấp có thẩm quyền cấp, văn bản gia hạn giấy phép (nếu có).",
        "Đề án đóng cửa mỏ, phương án cải tạo, phục hồi môi trường đã được phê duyệt.",
        "Hồ sơ ký quỹ cải tạo, phục hồi môi trường tại Quỹ bảo vệ môi trường tỉnh Gia Lai (Sổ tiết kiệm ký quỹ hoặc chứng từ chuyển tiền ký quỹ).",
        "Hóa đơn, chứng từ chi phí thực hiện cải tạo, phục hồi môi trường trong quá trình khai thác và sau khi kết thúc khai thác.",
        "Sổ chi tiết tài khoản 242 (Chi phí trả trước), tài khoản 335 (Chi phí phải trả) liên quan đến quỹ hoàn phục môi trường.",
        "Báo cáo quan tâm môi trường định kỳ, biên bản kiểm tra công tác bảo vệ môi trường của cơ quan quản lý nhà nước."
],
        accountingSteps: [
        "Bước 1: Kiểm tra việc trích lập chi phí cải tạo, phục hồi môi trường hàng năm và hạch toán vào chi phí sản xuất kinh doanh (Nợ TK 154, 627 / Có TK 335 hoặc TK 242).",
        "Bước 2: Đối chiếu chứng từ nộp tiền ký quỹ cải tạo, phục hồi môi trường qua ngân hàng (Nợ tài khoản ký quỹ chuyên dùng / Có TK 112).",
        "Bước 3: Rà soát việc phân bổ chi phí hoàn phục môi trường vào giá thành sản phẩm đá khai thác theo đúng tỷ lệ sản lượng khai thác thực tế.",
        "Bước 4: Kiểm tra số dư tài khoản trích trước chi phí hoàn phục môi trường (TK 335) trên Sổ cái và đối chiếu với phương án kỹ thuật đã được phê duyệt.",
        "Bước 5: Đối chiếu số liệu chi phí bảo vệ môi trường, cải tạo mỏ trên Báo cáo tài chính với Tờ khai quyết toán thuế TNDN hàng năm."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra bóc tách toàn bộ chi phí trích trước hoàn phục môi trường (TK 335) do chưa có quyết toán chi phí thực tế hoặc thiếu phương án cải tạo môi trường được phê duyệt.",
        "Phạt truy thu thuế TNDN do doanh nghiệp hạch toán chi phí cải tạo môi trường vượt mức quy định trong đề án được cấp có thẩm quyền phê duyệt.",
        "Rủi ro liên quan đến việc không hoàn trả tiền ký quỹ hoặc hạch toán sai lệch các khoản chi phí hoàn phục môi trường sau khi đóng cửa mỏ.",
        "Bẫy pháp lý khi giấy phép khai thác mỏ đá hết hạn mà doanh nghiệp chưa hoàn tất thủ tục gia hạn hoặc cải tạo phục hồi môi trường theo NĐ 193/2025/NĐ-CP.",
        "Phạt hành chính trong lĩnh vực bảo vệ môi trường đối với hoạt động khai thác khoáng sản không tuân thủ đúng cam kết."
],
        defenseStrategy: [
        "Dẫn chiếu Điều 28 Nghị định 193/2025/NĐ-CP, khẳng định Công ty Cổ phần Kiểu Việt thực hiện nghiêm ngặt việc trích lập quỹ cải tạo, phục hồi môi trường và thực hiện ký quỹ đầy đủ tại Quỹ bảo vệ môi trường tỉnh Gia Lai.",
        "Xuất trình phương án cải tạo, phục hồi môi trường đã được cơ quan nhà nước phê duyệt cùng toàn bộ chứng từ nộp tiền ký quỹ qua ngân hàng để chứng minh tính hợp pháp của chi phí.",
        "Lập luận rằng việc trích trước chi phí hoàn phục môi trường vào tài khoản 335 là hoàn toàn phù hợp với nguyên tắc thận trọng trong kế toán và bản chất hoạt động khai thác khoáng sản, đảm bảo tính liên tục và tuân thủ pháp luật.",
        "Trình bày rõ các biện pháp kỹ thuật công ty đã và đang thực hiện tại mỏ đá Gia Lai, sẵn sàng giải trình trước đoàn thanh tra về các hạng mục bảo vệ môi trường đã hoàn thành."
]
      },
      {
        id: 'chk-tt-44-2017',
        title: 'Khung giá tính thuế tài nguyên tối thiểu Bộ Tài chính (TT 44/2017)',
        description: 'Đối chiếu giá tính thuế tài nguyên của tỉnh Gia Lai không được thấp hơn khung giá sàn do Bộ Tài chính quy định.',
        priority: 'recommended',
        decreeId: 'tt-44-2017',
        decreeLabel: 'TT 44/2017 (Khung giá thuế TN)',
        phase: 2,
        documentsRequired: [
        "Bảng giá tính thuế tài nguyên do Ủy ban nhân dân tỉnh Gia Lai ban hành (cập nhật theo các quyết định mới nhất).",
        "Tờ khai quyết toán thuế tài nguyên hàng tháng, quý, năm của doanh nghiệp.",
        "Hóa đơn điện tử (XML) xuất bán đá xây dựng các loại (đá 1x2, 2x4, đá mi, đá hộc) trong kỳ thanh tra.",
        "Sổ chi tiết tài khoản 3335 (Thuế tài nguyên) và Sổ cái tài khoản 511 (Doanh thu bán hàng và cung cấp dịch vụ).",
        "Bảng kê khối lượng đá khai thác, bảng giá bán thực tế tại mỏ đá của công ty Cổ phần Kiểu Việt.",
        "Báo cáo tài chính năm và Báo cáo kiểm toán độc lập."
],
        accountingSteps: [
        "Bước 1: Kiểm tra việc áp dụng mức giá tính thuế tài nguyên trên tờ khai thuế phải khớp đúng với Bảng giá tính thuế tài nguyên do UBND tỉnh Gia Lai ban hành hoặc giá bán thực tế của doanh nghiệp (nếu giá bán cao hơn khung giá).",
        "Bước 2: Hạch toán nghĩa vụ thuế tài nguyên phải nộp định kỳ vào chi phí (Nợ TK 154, 627, 632 / Có TK 3335).",
        "Bước 3: Đối chiếu chứng từ nộp thuế tài nguyên qua ngân hàng (Nợ TK 3335 / Có TK 112) đảm bảo nộp đủ và đúng hạn vào Ngân sách nhà nước.",
        "Bước 4: Kiểm tra đối chiếu tổng doanh thu tính thuế tài nguyên trên tờ khai với doanh thu ghi nhận trên tài khoản 511 và sản lượng khoáng sản khai thác thực tế.",
        "Bước 5: So sánh số liệu trên Sổ cái TK 3335, Tờ khai thuế tài nguyên quý, Bảng cân đối phát sinh tài khoản và Báo cáo tài chính năm."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra ấn định giá tính thuế tài nguyên theo mức tối đa trong khung giá của Thông tư 44/2017/TT-BTC hoặc bảng giá tỉnh khi doanh nghiệp kê khai thấp hơn giá thị trường.",
        "Phạt khai sai 20% trên số thuế tài nguyên kê khai thiếu theo quy định tại Nghị định 125/2020/NĐ-CP.",
        "Tính tiền chậm nộp 0.03%/ngày trên số tiền thuế tài nguyên nộp thiếu hoặc nộp chậm.",
        "Bẫy áp dụng sai chủng loại đá (ví dụ: áp giá đá nguyên khai vào đá thành phẩm hoặc ngược lại) gây chênh lệch số thuế phải nộp lớn.",
        "Rủi ro bị truy thu thuế tài nguyên đối với phần sản lượng đá sử dụng nội bộ cho công trình thi công xây lắp giao thông thủy lợi nhưng chưa kê khai."
],
        defenseStrategy: [
        "Viện dẫn Thông tư 44/2017/TT-BTC và Bảng giá tính thuế tài nguyên do UBND tỉnh Gia Lai ban hành, khẳng định Công ty Cổ phần Kiểu Việt áp dụng chính xác mức giá tính thuế tài nguyên theo đúng quy định pháp luật cho từng chủng loại đá khai thác.",
        "Chứng minh rằng giá bán thực tế đá xây dựng tại mỏ của công ty phù hợp với mặt bằng giá thị trường tại địa phương tỉnh Gia Lai, không có hành động gian lận hay chuyển giá làm giảm số thuế phải nộp.",
        "Xuất trình toàn bộ hóa đơn điện tử xuất bán, bảng kê giá bán thực tế và các giấy nộp tiền vào ngân sách nhà nước qua ngân hàng để bảo vệ lập luận của doanh nghiệp.",
        "Lập luận sắc bén phản bác các quyết định ấn định thuế chưa có cơ sở thực tế từ đoàn thanh tra, yêu cầu đối chiếu trực tiếp dữ liệu giao dịch thị trường tại khu vực mỏ đá khai thác."
]
      },
      {
        id: 'chk-luat-thue-xnk-107-2016',
        title: 'Thuế xuất khẩu khoáng sản đá block, đá mỹ nghệ (Luật 107/2016)',
        description: 'Kiểm tra mã HS và nghĩa vụ thuế xuất khẩu nếu Kiểu Việt có hoạt động xuất bán đá xẻ, đá khối nguyên khai ra thị trường nước ngoài.',
        priority: 'recommended',
        decreeId: 'luat-thue-xnk-107-2016',
        articleNum: '5',
        decreeLabel: 'Luật Thuế XNK 107/2016',
        phase: 2,
        documentsRequired: [
        "Giấy phép khai thác khoáng sản mỏ đá tại Gia Lai do UBND tỉnh Gia Lai cấp còn hiệu lực.",
        "Hợp đồng xuất khẩu đá block/đá mỹ nghệ ký kết với đối tác nước ngoài kèm hóa đơn thương mại (Commercial Invoice) và phiếu đóng gói (Packing List).",
        "Tờ khai hải quan hàng hóa xuất khẩu đã hoàn thành thủ tục thông quan.",
        "Phiếu cân trọng lượng đá tại mỏ và tại cảng xuất khẩu, biên bản giao nhận hàng hóa.",
        "Chứng từ thanh toán qua ngân hàng (Ủy nhiệm chi, giấy báo có ngoại tệ) đối với từng lô hàng xuất khẩu.",
        "Hóa đơn giá trị gia tăng (XML) xuất bán khoáng sản xuất khẩu hoặc hóa đơn nội bộ khâu vận chuyển."
],
        accountingSteps: [
        "Bước 1: Rà soát toàn bộ doanh thu xuất khẩu trên TK 5113 (Doanh thu bán sản phẩm) đối chiếu khớp đúng với Tờ khai hải quan xuất khẩu và Sổ cái TK 131 (Phải thu khách hàng) hoặc TK 1122 (Tiền gửi ngân hàng ngoại tệ).",
        "Bước 2: Kiểm tra giá vốn hàng xuất bán trên TK 632 đối ứng với TK 155 (Thành phẩm đá các loại) và TK 154 (Chi phí sản xuất kinh doanh dở dang tại mỏ đá).",
        "Bước 3: Đối chiếu nghĩa vụ thuế xuất khẩu phải nộp trên TK 3333 (Thuế xuất, nhập khẩu) với số liệu kê khai thực tế hàng tháng và chứng từ nộp ngân sách nhà nước.",
        "Bước 4: Rà soát tỷ giá ngoại tệ khi ghi nhận doanh thu xuất khẩu và khi thu tiền về theo đúng quy định tại Thông tư 200/2014/TT-BTC, chuyển đánh giá chênh lệch tỷ giá vào TK 515 hoặc TK 635.",
        "Bước 5: Đối chiếu tổng doanh thu và số thuế xuất khẩu trên Tờ khai quyết toán thuế với Báo cáo tài chính năm và Báo cáo kiểm toán độc lập."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra áp dụng mức thuế suất thuế xuất khẩu cao hơn đối với mặt hàng đá block chưa qua gia công mỹ nghệ tinh theo Biểu thuế xuất khẩu.",
        "Bẫy ấn định thuế do chênh lệch trọng lượng khai báo trên tờ khai hải quan so với phiếu cân thực tế xuất kho tại mỏ đá ở Gia Lai.",
        "Phạt khai sai 20% và tiền chậm nộp 0.03%/ngày theo Luật Quản lý thuế nếu kê khai thiếu thuế xuất khẩu hoặc phân loại mã HS sai bản chất hàng hóa.",
        "Rủi ro bóc tách chi phí chung của mỏ đá liên quan đến phần sản lượng xuất khẩu chưa phân bổ chính xác theo định mức kỹ thuật."
],
        defenseStrategy: [
        "Căn cứ Điều 5 Luật Thuế xuất khẩu, thuế nhập khẩu số 107/2016/QH13, sản phẩm đá block và đá mỹ nghệ của Công ty Cổ phần Kiểu Việt xuất khẩu đều đã trải qua công đoạn cưa cắt, mài nhẵn định hình theo đúng tiêu chuẩn kỹ thuật thương mại quốc tế, không phải là đá nguyên khai chưa qua gia công.",
        "Lập luận chặt chẽ rằng trọng lượng khai báo trên tờ khai hải quan được quy đổi chính xác từ thể tích (m3) sang trọng lượng (tấn) theo hệ số chuẩn quy định tại giấy phép khai thác mỏ và kiểm định độc lập, có phiếu cân trạm cân hợp pháp xác nhận tại cửa khẩu xuất.",
        "Trình bày rõ các chứng từ thanh toán quốc tế qua ngân hàng minh bạch, không có dấu hiệu chuyển giá hay gian lận thương mại, toàn bộ hạch toán kế toán tuân thủ đúng chuẩn mực kế toán Việt Nam.",
        "Yêu cầu đoàn thanh tra đối chiếu trực tiếp với biên bản kiểm tra của Chi cục Hải quan cửa khẩu nơi thông quan hàng hóa, khẳng định việc áp mã HS và nộp thuế xuất khẩu là hoàn toàn chính xác theo biểu thuế hiện hành."
]
      },
    ]
  },

  // NHÓM 6: HỢP ĐỒNG XÂY DỰNG & DỰ TOÁN CHI PHÍ CÔNG TRÌNH
  {
    id: 'hopdong-xaydung',
    name: 'Hợp Đồng Xây Dựng & Dự Toán',
    icon: '🏗️',
    color: 'teal',
    description: 'Hồ sơ 3 bên đồng bộ: Hợp đồng, biên bản nghiệm thu A-B, dự toán định mức NĐ 10, tạm ứng NĐ 37',
    items: [
      {
        id: 'chk-nd-37-2015',
        title: 'Hồ sơ tạm ứng & Nghiệm thu khối lượng A-B công trình (NĐ 37/2015)',
        description: 'Đối chiếu tỷ lệ tạm ứng hợp đồng xây dựng; tập hợp đủ Biên bản nghiệm thu công việc, nghiệm thu giai đoạn bàn giao làm căn cứ xuất hóa đơn và tính doanh thu.',
        priority: 'critical',
        decreeId: 'nd-37-2015',
        articleNum: '18',
        decreeLabel: 'NĐ 37/2015 (Hợp đồng xây dựng)',
        phase: 1,
        documentsRequired: [
        "Hợp đồng thi công xây dựng công trình giao thông, thủy lợi ký giữa Công ty Kiểu Việt và Chủ đầu tư (Bên A) kèm các phụ lục hợp đồng.",
        "Hồ sơ dự thầu, hồ sơ năng lực và bảo lãnh tạm ứng hợp đồng, bảo lãnh thực hiện hợp đồng.",
        "Biên bản nghiệm thu khối lượng hoàn thành giai đoạn / hạng mục công trình có chữ ký xác nhận của đại diện Ban QLDA (Bên A) và Công ty Kiểu Việt (Bên B).",
        "Bảng tính giá trị khối lượng hoàn thành, bảng xác định giá trị khối lượng đề nghị thanh toán (Hồ sơ thanh toán A-B).",
        "Hóa đơn giá trị gia tăng (XML) lập theo từng đợt nghiệm thu khối lượng hoàn thành.",
        "Ủy nhiệm chi thanh toán qua ngân hàng, giấy biên nhận tiền hoặc chứng từ cấn trừ tạm ứng hợp đồng.",
        "Nhật ký thi công công trình và bảng xác nhận khối lượng phát sinh ngoài hợp đồng (nếu có)."
],
        accountingSteps: [
        "Bước 1: Kiểm tra việc ghi nhận khoản tiền tạm ứng từ Chủ đầu tư trên Sổ chi tiết TK 131 (Phải thu khách hàng - chi tiết tạm ứng) hoặc TK 331 đối ứng với TK 112 (Tiền gửi ngân hàng).",
        "Bước 2: Rà soát việc hạch toán doanh thu xây lắp trên TK 5111 đối ứng với TK 131 dựa trên các biên bản nghiệm thu A-B và hóa đơn GTGT đã xuất.",
        "Bước 3: Kiểm tra việc kết chuyển chi phí thi công dở dang từ TK 154 sang giá vốn hàng bán trên TK 632 tương ứng với tỷ lệ khối lượng nghiệm thu hoàn thành.",
        "Bước 4: Đối chiếu số dư cuối kỳ của TK 131 (tổng hợp công nợ phải thu theo từng công trình, dự án tại Gia Lai) với Báo cáo tài chính và Báo cáo kiểm toán độc lập.",
        "Bước 5: Kiểm tra việc hoàn ứng và khấu trừ tiền tạm ứng trên từng kỳ thanh toán A-B, đảm bảo không có tình trạng treo nợ tạm ứng quá hạn."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra bóc tách doanh thu và chi phí do biên bản nghiệm thu A-B ký trước thời điểm hoàn thành thực tế hoặc thiếu chữ ký của các thành viên Ban QLDA.",
        "Phạt xuất hóa đơn sai thời điểm theo Nghị định 125/2020/NĐ-CP (mức phạt từ 4 đến 8 triệu đồng) khi thời điểm lập hóa đơn không trùng khớp với thời điểm nghiệm thu khối lượng trên biên bản A-B.",
        "Ấn định thuế TNDN và phạt khai sai 20%, chậm nộp 0.03%/ngày do hạch toán doanh thu chậm trễ so với thời điểm chuyển giao quyền sở hữu công trình xây lắp.",
        "Rủi ro loại trừ chi phí giá vốn TK 632 do không có đầy đủ hồ sơ thanh toán A-B hợp lệ theo đúng quy định tại Điều 18 Nghị định 37/2015/NĐ-CP."
],
        defenseStrategy: [
        "Căn cứ Điều 18 Nghị định 37/2015/NĐ-CP, toàn bộ các khối lượng thi công xây lắp công trình giao thông, thủy lợi của Công ty Kiểu Việt tại Gia Lai đều được nghiệm thu thực tế theo đúng tiến độ thỏa thuận trong hợp đồng kinh tế.",
        "Giải trình rằng các biên bản nghiệm thu A-B được lập đúng quy chuẩn pháp luật xây dựng, có sự tham gia đầy đủ của tư vấn giám sát, đại diện chủ đầu tư và nhà thầu thi công.",
        "Lập luận việc xuất hóa đơn GTGT dựa trên mốc thời điểm xác định doanh thu hoàn thành nghiệm thu bàn giao theo đúng Khoản 2 Điều 9 Thông tư 78/2021/TT-BTC, không có hành vi chậm trễ trốn tránh nghĩa vụ thuế.",
        "Cung cấp đầy đủ nhật ký thi công và bảng xác nhận khối lượng có chữ ký số xác thực, chứng minh tính chân thực và hợp pháp của số liệu hạch toán trên sổ sách kế toán."
]
      },
      {
        id: 'chk-nd-50-2021',
        title: 'Phụ lục điều chỉnh giá hợp đồng xây lắp & Trượt giá (NĐ 50/2021)',
        description: 'Các công trình có bù giá vật tư (nhựa đường, sắt thép, đá): phải có phụ lục hợp đồng, bảng tính bù giá được Chủ đầu tư duyệt để bảo vệ doanh thu bổ sung.',
        priority: 'important',
        decreeId: 'nd-50-2021',
        articleNum: '1',
        decreeLabel: 'NĐ 50/2021 (Sửa đổi HĐ XD)',
        phase: 2,
        documentsRequired: [
        "Hợp đồng xây dựng gốc và các Phụ lục điều chỉnh giá hợp đồng ký kết giữa Chủ đầu tư và Công ty Kiểu Việt.",
        "Quyết định phê duyệt điều chỉnh dự toán, tổng mức đầu tư hoặc phương án điều chỉnh giá hợp đồng của cơ quan nhà nước có thẩm quyền tại Gia Lai.",
        "Bảng tính toán trượt giá, đơn giá vật liệu (đá xây dựng khai thác tại mỏ của công ty, xi măng, sắt thép) có căn cứ theo thông báo giá vật liệu xây dựng do Sở Xây dựng tỉnh Gia Lai công bố.",
        "Biên bản thỏa thuận đơn giá bổ sung, phụ lục điều chỉnh khối lượng và đơn giá phát sinh trong quá trình thi công.",
        "Hóa đơn GTGT (XML) điều chỉnh doanh thu và thuế GTGT phát sinh tăng/giảm do trượt giá.",
        "Chứng từ thanh toán phần chênh lệch giá qua ngân hàng (Ủy nhiệm chi).",
        "Công văn chấp thuận điều chỉnh hợp đồng của Chủ đầu tư / Ban QLDA."
],
        accountingSteps: [
        "Bước 1: Rà soát việc hạch toán các khoản điều chỉnh tăng/giảm doanh thu trên TK 5111 đối ứng với TK 131 căn cứ vào Phụ lục bổ sung hợp đồng về trượt giá.",
        "Bước 2: Kiểm tra việc điều chỉnh giá vốn trên TK 632 tương ứng với biến động chi phí nguyên vật liệu (đặc biệt là giá đá xây dựng khai thác nội bộ và vật liệu mua ngoài) trên TK 154.",
        "Bước 3: Đối chiếu các bút toán điều chỉnh hồi tố chi phí và doanh thu trên Sổ cái TK 3331 (Thuế GTGT phải nộp) và TK 3334 (Thuế TNDN) đảm bảo kê khai bổ sung đúng kỳ.",
        "Bước 4: Kiểm tra sự khớp đúng giữa số liệu điều chỉnh giá trên Phụ lục hợp đồng với Báo cáo tài chính và Báo cáo kiểm toán năm.",
        "Bước 5: Rà soát hạch toán chênh lệch giá vật liệu vào tài khoản chi phí sản xuất kinh doanh dở dang TK 154 trước khi phân bổ vào giá thành công trình."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra loại bỏ các khoản chi phí và doanh thu điều chỉnh do phụ lục hợp đồng trượt giá không được Chủ đầu tư phê duyệt đúng thẩm quyền theo NĐ 50/2021.",
        "Bẫy ấn định thuế do áp dụng đơn giá vật liệu điều chỉnh cao hơn mức giá công bố của Sở Xây dựng tỉnh Gia Lai mà không có giải trình định mức hợp lý.",
        "Phạt khai sai 20% và tiền chậm nộp 0.03%/ngày do hạch toán điều chỉnh doanh thu/chi phí trượt giá sai kỳ tính thuế.",
        "Rủi ro bóc tách chi phí do sử dụng giá nội bộ mỏ đá không đúng với giá thị trường hoặc giá kê khai tài nguyên khi tính trượt giá xây lắp."
],
        defenseStrategy: [
        "Viện dẫn trực tiếp Điều 1 Nghị định số 50/2021/NĐ-CP sửa đổi bổ sung Nghị định 37/2015/NĐ-CP, chứng minh việc điều chỉnh giá hợp đồng do trượt giá vật liệu thi công tại Gia Lai là hoàn toàn phù hợp với biến động thực tế thị trường.",
        "Cung cấp đầy đủ các thông báo giá vật liệu xây dựng chính thống do Sở Xây dựng tỉnh Gia Lai ban hành từng thời kỳ làm căn cứ pháp lý không thể chối cãi cho việc tính toán đơn giá phát sinh.",
        "Lập luận rằng mọi phụ lục điều chỉnh giá đều đã được Chủ đầu tư thẩm định, phê duyệt và ký kết chính thức trước khi công ty tiến hành hạch toán kế toán và xuất hóa đơn bổ sung.",
        "Khẳng định tính minh bạch trong việc kết nối chuỗi giá trị từ khai thác mỏ đá tại chỗ đến thi công công trình giao thông thủy lợi, giúp tối ưu hóa chi phí nhưng hoàn toàn tuân thủ chặt chẽ pháp luật thuế hiện hành."
]
      },
      {
        id: 'chk-nd-10-2021',
        title: 'Định mức dự toán chi phí máy thi công & Nhân công (NĐ 10/2021)',
        description: 'Kiểm tra hồ sơ dự toán được phê duyệt làm cơ sở giải trình chi phí vật tư, định mức ca máy thi công và nhân công công trường hợp lệ khi CQT kiểm tra.',
        priority: 'critical',
        decreeId: 'nd-10-2021',
        articleNum: '24',
        decreeLabel: 'NĐ 10/2021 (Quản lý chi phí XD)',
        phase: 1,
        documentsRequired: [
        "Hồ sơ dự toán xây dựng công trình được duyệt, bao gồm bảng định mức ca máy, định mức nhân công cho từng hạng mục thi công giao thông và thủy lợi.",
        "Nhật ký thi công ghi chép chi tiết ca máy hoạt động, số giờ làm việc, loại thiết bị (máy xúc, máy ủi, xe ben chở đá) và danh sách nhân công trực tiếp trên công trường.",
        "Bảng chấm công, bảng thanh toán tiền lương, hợp đồng lao động của công nhân vận hành máy và lao động thủ công.",
        "Hóa đơn nhiên liệu (dầu diesel), chi phí sửa chữa bảo dưỡng xe máy thiết bị, biên bản giao nhận nhiên liệu hàng ngày.",
        "Chứng từ thanh toán lương, bảo hiểm xã hội và các khoản phụ cấp qua ngân hàng (Ủy nhiệm chi).",
        "Bảng phân bổ chi phí nhân công (TK 622) và chi phí máy thi công (TK 623) vào tài khoản giá thành sản xuất dở dang TK 154."
],
        accountingSteps: [
        "Bước 1: Kiểm tra việc hạch toán chi phí nhân công trực tiếp trên TK 622 đối ứng với TK 334 (Phải trả người lao động) và chi phí máy thi công trên TK 623 đối ứng với TK 152, 214, 331.",
        "Bước 2: Rà soát việc phân bổ chi phí từ TK 622 và TK 623 vào TK 154 (Chi phí sản xuất kinh doanh dở dang) theo đúng định mức kinh tế kỹ thuật đã được phê duyệt tại dự toán công trình.",
        "Bước 3: Đối chiếu tổng quỹ lương thực tế hạch toán chi phí với tờ khai quyết toán thuế TNDN và báo cáo quyết toán thuế TNCN của công ty.",
        "Bước 4: Kiểm tra khấu hao máy móc thiết bị thi công (xe tải chở đá, máy nghiền đá, máy xúc) trên TK 211 đối ứng với TK 214 theo đúng khung thời gian quy định tại Thông tư 45/2013/TT-BTC.",
        "Bước 5: Kiểm tra việc đối chiếu giữa định mức tiêu hao nhiên liệu thực tế của xe máy thi công với định mức kỹ thuật quy định tại dự toán được duyệt."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra bóc tách chi phí nhân công và máy thi công do vượt quá định mức dự toán được duyệt theo quy định tại Điều 24 Nghị định 10/2021/NĐ-CP.",
        "Bẫy loại trừ chi phí khấu hao máy thi công và chi phí nhiên liệu do thiếu nhật ký điều xe, nhật ký vận hành máy hoặc xe máy không chính chủ / không đăng ký kinh doanh vận tải.",
        "Phạt truy thu thuế TNCN và TNDN kèm theo phạt khai sai 20% do sử dụng danh sách nhân công ảo, không có CCCD hợp lệ hoặc không có cam kết mẫu 08/CK-TNCN.",
        "Rủi ro ấn định chi phí giá vốn do hạch toán chi phí máy thi công gộp chung với hoạt động khai thác mỏ đá mà không tách bạch rõ ràng theo từng công trình xây lắp."
],
        defenseStrategy: [
        "Căn cứ Điều 24 Nghị định 10/2021/NĐ-CP, định mức dự toán xây dựng do công ty áp dụng được xây dựng trên cơ sở hệ thống định mức do Bộ Xây dựng ban hành kết hợp với điều kiện thi công thực tế tại địa hình đặc thù miền núi tỉnh Gia Lai.",
        "Cung cấp đầy đủ hệ thống nhật ký thi công ca máy, bảng xác nhận khối lượng hoàn thành có chữ ký của tư vấn giám sát, chứng minh toàn bộ số giờ máy hoạt động và nhân công huy động là hoàn toàn xác thực phục vụ trực tiếp cho công trình.",
        "Lập luận rằng chi phí nhiên liệu và khấu hao máy móc hoàn toàn khớp đúng với khối lượng đất đá vận chuyển từ mỏ đá đến công trình, được hỗ trợ bởi hệ thống trạm cân và lệnh điều xe điện tử minh bạch.",
        "Khẳng định hồ sơ lao động nhân công thuê ngoài đều có đầy đủ hợp đồng, chứng minh thư nhân dân/CCCD, bảng lương chuyển khoản hoặc phiếu chi ký nhận hợp lệ, tuân thủ đúng quy định về thuế TNCN và chi phí hợp lý."
]
      },
      {
        id: 'chk-tt-24-2024-tt-btc',
        title: 'Đối chiếu hồ sơ thanh toán vốn ngân sách / Ban QLDA (TT 24/2024)',
        description: 'Đối chiếu hồ sơ giải ngân Kho bạc Nhà nước, bảng xác định giá trị khối lượng hoàn thành Mẫu 03a với sổ kế toán TK 131 và hóa đơn GTGT.',
        priority: 'important',
        decreeId: 'tt-24-2024-tt-btc',
        articleNum: '5',
        decreeLabel: 'TT 24/2024 (Chế độ KT HCSN)',
        phase: 2,
        documentsRequired: [
        "Hợp đồng thi công các công trình sử dụng vốn đầu tư công, vốn ngân sách nhà nước ký với các Ban Quản lý dự án tại Gia Lai.",
        "Giấy đề nghị thanh toán vốn đầu tư, bảng xác định giá trị khối lượng công việc hoàn thành theo mẫu quy định.",
        "Chứng từ chuyển tiền, lệnh chi tiền, ủy nhiệm chi từ Kho bạc Nhà nước hoặc Ban QLDA chuyển vào tài khoản tiền gửi của Công ty Kiểu Việt mở tại ngân hàng thương mại.",
        "Biên bản đối chiếu công nợ xác nhận số dư tài khoản phải thu (TK 131) và tài khoản tiền tạm ứng vốn ngân sách định kỳ hàng quý/năm.",
        "Hóa đơn GTGT (XML) đã phát hành tương ứng với từng lần giải ngân vốn ngân sách.",
        "Báo cáo quyết toán vốn đầu tư dự án hoàn thành được cấp có thẩm quyền phê duyệt.",
        "Sổ chi tiết tài khoản 131 và sổ tiền gửi ngân hàng TK 112 phản ánh luồng tiền ngân sách nhà nước."
],
        accountingSteps: [
        "Bước 1: Rà soát toàn bộ số liệu đối chiếu công nợ trên Sổ chi tiết TK 131 (Phải thu khách hàng - Ban QLDA các công trình giao thông, thủy lợi) đảm bảo khớp đúng 100% với biên bản đối chiếu xác nhận số dư.",
        "Bước 2: Kiểm tra việc hạch toán tiền giải ngân vốn đầu tư công từ Kho bạc Nhà nước vào TK 112 (Tiền gửi ngân hàng) đối ứng với TK 131.",
        "Bước 3: Đối chiếu doanh thu xây lắp từ nguồn vốn ngân sách trên TK 5111 với số liệu giải ngân thực tế trên Báo cáo quyết toán vốn đầu tư dự án hoàn thành.",
        "Bước 4: Kiểm tra việc trích lập dự phòng phải thu khó đòi đối với các khoản nợ đọng xây dựng cơ bản từ nguồn ngân sách quá hạn theo đúng quy định tại Thông tư 48/2019/TT-BTC.",
        "Bước 5: Kiểm tra tính khớp đúng giữa số liệu trên Báo cáo tài chính doanh nghiệp với hồ sơ quyết toán tài chính dự án nộp cho Ban QLDA và cơ quan tài chính theo chuẩn mực kế toán."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra phát hiện chênh lệch số liệu công nợ giữa sổ sách kế toán của công ty với số liệu giải ngân thực tế trên hệ thống Kho bạc Nhà nước.",
        "Bẫy truy thu thuế và xử phạt hành chính do hạch toán thiếu doanh thu hoặc ghi nhận doanh thu chậm so với thời điểm Kho bạc Nhà nước thực hiện thanh toán khối lượng hoàn thành.",
        "Rủi ro bị loại trừ các chi phí liên quan đến công trình do hồ sơ quyết toán vốn đầu tư hoàn thành chưa được cơ quan nhà nước có thẩm quyền phê duyệt quyết toán.",
        "Phạt vi phạm chế độ kế toán, lập báo cáo tài chính không khớp đúng với số liệu đối chiếu công nợ với các chủ đầu tư hành chính sự nghiệp theo Thông tư 24/2024/TT-BTC."
],
        defenseStrategy: [
        "Viện chuẩn quy định tại Điều 5 Thông tư 24/2024/TT-BTC và các quy định về kế toán doanh nghiệp, khẳng định toàn bộ hệ thống sổ sách kế toán của Công ty Kiểu Việt luôn tuân thủ nguyên tắc độc lập và khớp đúng chặt chẽ với hệ thống chứng từ xác nhận của Kho bạc Nhà nước và Ban QLDA tại Gia Lai.",
        "Cung cấp đầy đủ các biên bản đối chiếu công nợ có dấu xác nhận đỏ của Ban QLDA và Kho bạc Nhà nước theo định kỳ hàng quý, chứng minh không có hiện tượng bỏ sót doanh thu hoặc gian lận số liệu tài chính.",
        "Lập luận sắc bén rằng mọi khoản vốn ngân sách giải ngân đều đi kèm ủy nhiệm chi và hóa đơn GTGT hợp lệ, việc hạch toán doanh thu và giá vốn được thực hiện đúng kỳ kế toán dựa trên nguyên tắc dồn tích.",
        "Yêu cầu đoàn thanh tra xem xét toàn diện bộ hồ sơ quyết toán vốn đầu tư dự án hoàn thành đã được cấp thẩm quyền phê duyệt, khẳng định tình hình tài chính của công ty hoàn toàn minh bạch, tuân thủ tuyệt đối pháp luật thuế và kế toán hiện hành."
]
      },
      {
        id: 'chk-tt-108-2025',
        title: 'Báo cáo quyết toán dự án hoàn thành vốn nhà nước (TT 108/2025)',
        description: 'Đối chiếu số liệu kiểm toán độc lập dự án công trình giao thông hoàn thành với số dư công nợ và doanh thu đã kê khai quyết toán thuế.',
        priority: 'recommended',
        decreeId: 'tt-108-2025',
        articleNum: '4',
        decreeLabel: 'TT 108/2025 (BCTC Hợp nhất NN)',
        phase: 2,
        documentsRequired: [
        "Hợp đồng thi công xây lắp công trình giao thông, thủy lợi ký kết với Chủ đầu tư (Ban quản lý dự án nhà nước tại Gia Lai) và các phụ lục điều chỉnh hợp đồng.",
        "Hồ sơ dự thầu, hồ sơ năng lực, quyết định phê duyệt kết quả lựa chọn nhà thầu và bản vẽ thi công thiết kế bản vẽ thi công được phê duyệt.",
        "Biên bản nghiệm thu khối lượng hoàn thành A-B theo từng giai đoạn và Biên bản nghiệm thu bàn giao đưa công trình vào sử dụng.",
        "Bảng xác định giá trị khối lượng công việc hoàn thành theo hợp đồng xây dựng và các hóa đơn giá trị gia tăng (XML) đầu ra xuất cho Chủ đầu tư.",
        "Hồ sơ quyết toán vốn đầu tư dự án hoàn thành được kiểm toán độc lập xác nhận và phê duyệt bởi cơ quan có thẩm quyền.",
        "Nhật ký thi công công trình, bảng xác định ca máy, thiết bị thi công và các biên bản xác nhận phát sinh khối lượng (nếu có)."
],
        accountingSteps: [
        "Bước 1: Đối chiếu số liệu chi tiết trên Tài khoản 154 (Chi phí sản xuất kinh doanh dở dang) của từng công trình giao thông, thủy lợi với bảng giá trị khối lượng hoàn thành nghiệm thu A-B và hồ sơ quyết toán dự án hoàn thành theo Điều 4 TT 108/2025/TT-BTC.",
        "Bước 2: Kiểm tra đối ứng Nợ TK 621, 622, 623, 627 / Có TK 152, 153, 331, 334, 214 để đảm bảo toàn bộ chi phí nguyên vật liệu (đá xây dựng khai thác từ mỏ của công ty hoặc mua ngoài), nhân công thi công trực tiếp được tập hợp chính xác theo từng công trình.",
        "Bước 3: Rà soát số dư cuối kỳ trên Tài khoản 131 (Phải thu khách hàng) - chi tiết Chủ đầu tư các công trình vốn nhà nước, đối chiếu Biên bản xác nhận công nợ và các khoản giữ lại bảo hành công trình theo đúng quy định hợp đồng.",
        "Bước 4: Kiểm tra việc kết chuyển chi phí từ TK 154 sang TK 632 (Giá vốn hàng bán) khi công trình được nghiệm thu bàn giao đưa vào sử dụng, đảm bảo tuân thủ nguyên tắc phù hợp giữa doanh thu và chi phí.",
        "Bước 5: Đối chiếu chênh lệch giữa số liệu trên Báo cáo quyết toán dự án hoàn thành với Sổ cái tài khoản kế toán, Báo cáo tài chính năm và Tờ khai quyết toán thuế TNDN."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra bóc tách chi phí giá vốn xây lắp do thời điểm nghiệm thu khối lượng A-B không khớp với thời điểm kết chuyển trên sổ kế toán TK 154 và TK 632.",
        "Rủi ro ấn định thuế do chênh lệch số liệu giữa Báo cáo quyết toán dự án hoàn thành vốn nhà nước nộp cho cơ quan quản lý đầu tư và Báo cáo tài chính nộp cho cơ quan thuế.",
        "Bẫy thuế liên quan đến việc hạch toán chi phí bảo hành công trình giao thông, thủy lợi vượt mức quy định hoặc trích trước chi phí bảo hành vào TK 335 không có cơ sở pháp lý vững chắc.",
        "Rủi ro truy thu thuế GTNX/TNDN đối với các khoản chi phí phát sinh ngoài hợp đồng nhưng chưa được Chủ đầu tư phê duyệt phụ lục điều chỉnh giá hoặc khối lượng phát sinh.",
        "Phạt vi phạm hành chính khai sai theo Nghị định 125/2020/NĐ-CP (20% số tiền thuế thiếu) và tiền chậm nộp 0.03%/ngày do hạch toán sai kỳ kế toán của doanh thu và chi phí xây lắp."
],
        defenseStrategy: [
        "Viện dẫn Luật Xây dựng và các điều khoản tại Thông tư 108/2025/TT-BTC để khẳng định công ty Cổ phần Kiểu Việt thực hiện hạch toán chi phí và doanh thu căn cứ trên Biên bản nghiệm thu A-B thực tế đã được Chủ đầu tư xác nhận, không phụ thuộc hoàn toàn vào thời điểm phê duyệt quyết toán cuối cùng vốn nhà nước vốn thường kéo dài.",
        "Giải trình trước đoàn thanh tra rằng các công trình giao thông, thủy lợi tại địa bàn miền núi Gia Lai chịu ảnh hưởng lớn bởi điều kiện thời tiết (mùa mưa lũ), việc tập hợp chi phí trên TK 154 được thực hiện cuốn chiếu theo đúng tiến độ thực tế thi công ghi nhận tại Nhật ký công trình có chữ ký xác nhận của tư vấn giám sát.",
        "Lập bảng đối chiếu chi tiết (Reconciliation Table) giữa số liệu trên Báo cáo quyết toán dự án hoàn thành, Sổ cái TK 154/632 và Tờ khai thuế GTGT/TNDN để chứng minh tính nhất quán, minh bạch, không có hành vi trốn thuế hay che giấu doanh thu.",
        "Khẳng định các khoản chi phí trích trước bảo hành công trình giao thông (đường giao thông, kênh mút thủy lợi) được thực hiện dựa trên tỷ lệ cam kết tại hợp đồng thầu, có đầy đủ căn cứ pháp lý theo chuẩn mực kế toán hiện hành và sẽ hoàn nhập/quyết toán thực tế khi hết thời hạn bảo hành.",
        "Yêu cầu đoàn thanh tra căn cứ vào hồ sơ thầu trọn gói hoặc theo đơn giá điều chỉnh hợp pháp, đồng thời bảo vệ quan điểm tính hợp lý của chi phí vận chuyển vật liệu đá từ mỏ đá của công ty đến chân công trình xây lắp tại các huyện vùng sâu vùng xa của tỉnh Gia Lai."
]
      },
    ]
  },

  // NHÓM 7: CHẾ ĐỘ KẾ TOÁN, CHUẨN MỰC VAS & BCTC
  {
    id: 'ketoan-bctc',
    name: 'Chế Độ Kế Toán, Chuẩn Mực VAS & BCTC',
    icon: '📊',
    color: 'indigo',
    description: 'Sổ cái TK trọng yếu, BCTC TT 200/99, chuẩn mực VAS 01, 02, 14, phạt kế toán NĐ 41',
    items: [
      {
        id: 'chk-luat-ke-toan-2015',
        title: 'In sổ cái, sổ chi tiết & Lưu trữ chứng từ 10 năm (Luật 88/2015)',
        description: 'In toàn bộ sổ cái, sổ chi tiết TK 511, 131, 331, 154, 632. Đảm bảo chứng từ gốc có đủ chữ ký, lưu trữ tối thiểu 10 năm theo Điều 16-24.',
        priority: 'critical',
        decreeId: 'luat-ke-toan-2015',
        articleNum: '24',
        decreeLabel: 'Luật Kế toán 88/2015',
        phase: 1,
        documentsRequired: [
        "Hệ thống Sổ cái và Sổ chi tiết các tài khoản (TK 111, 112, 131, 152, 154, 331, 334, 333, 421, 621, 622, 623, 627, 632...) đã được in ấn, đóng thành quyển hàng năm và có chữ ký đầy đủ của Kế toán trưởng, Người đại diện theo pháp luật.",
        "Biên bản bàn giao chứng từ kế toán giữa các đời kế toán hoặc giữa bộ phận kế toán và kho lưu trữ của công ty.",
        "Danh mục tài liệu, chứng từ kế toán lưu trữ hàng năm (Hóa đơn điện tử XML/PDF, phiếu thu, phiếu chi, ủy nhiệm chi, hợp đồng kinh tế, biên bản giao nhận mỏ đá, lệnh điều xe).",
        "Quy chế lưu trữ tài liệu, phân quyền truy cập hệ thống phần mềm kế toán và quy trình sao lưu (backup) dữ liệu điện tử hàng ngày/tháng.",
        "Biên bản kiểm kê kho đá xây dựng, kho nguyên vật liệu, biên bản kiểm kê quỹ tiền mặt và tài sản cố định định kỳ cuối năm tài chính.",
        "Quyết định bổ nhiệm Kế toán trưởng và phân công nhiệm vụ cụ thể cho từng thủ quỹ, thủ kho, kế toán phần hành tại công ty."
],
        accountingSteps: [
        "Bước 1: Kiểm tra tính toàn vẹn và liên tục của số liệu trên Sổ cái và Sổ chi tiết, đối chiếu số dư đầu kỳ, tổng phát sinh Nợ, tổng phát sinh Có và số dư cuối kỳ của tất cả các tài khoản từ loại 1 đến loại 9 theo quy định tại Điều 24 Luật Kế toán 2015.",
        "Bước 2: Rà soát tính pháp lý và đầy đủ của chứng từ gốc kèm theo từng định khoản trên Sổ chi tiết các tài khoản đối ứng (Ví dụ: Nợ TK 621 / Có TK 152 đối với xuất đá mỏ cho thi công; Nợ TK 112 / Có TK 131 đối với thu tiền từ chủ đầu tư xây lắp).",
        "Bước 3: Kiểm tra việc lưu trữ hóa đơn điện tử định dạng XML theo đúng quy định tại Thông tư 78/2021/TT-BTC và Nghị định 123/2020/NĐ-CP, đảm bảo mã tra cứu của cơ quan thuế hoạt động bình thường và không bị lỗi file.",
        "Bước 4: Đối chiếu số liệu tổng hợp trên Sổ cái với Bảng cân đối phát sinh tài khoản, Báo cáo kết quả hoạt động kinh doanh và Bảng cân đối kế toán trong bộ BCTC đã nộp cơ quan thuế.",
        "Bước 5: Kiểm tra kho lưu trữ vật lý tại trụ sở công ty ở Gia Lai để đảm bảo các chứng từ giấy (hợp đồng gốc, biên bản nghiệm thu, lệnh điều xe trạm cân) được sắp xếp theo đúng thứ tự thời gian, năm tài chính và bảo quản chống ẩm mốc, cháy nổ."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra phát hiện thiếu sót sổ sách kế toán bắt buộc (không in Sổ cái, Sổ chi tiết hoặc không có chữ ký sống của người có thẩm quyền), dẫn đến xử phạt vi phạm hành chính lĩnh vực kế toán.",
        "Rủi ro cơ quan thuế từ chối khấu trừ thuế GTGT và loại chi phí tính thuế TNDN do không cung cấp được chứng từ gốc hợp pháp hoặc chứng từ bị hư hỏng, thất lạc trong thời hạn lưu trữ bắt buộc 10 năm.",
        "Bẫy dữ liệu điện tử: File hóa đơn XML không khớp với số liệu kê khai trên tờ khai thuế GTGT hàng tháng/quý hoặc file XML bị lỗi chữ ký số, không đọc được nội dung pháp lý.",
        "Rủi ro tiêu hủy chứng từ trước thời hạn 10 năm đối với các chi phí khai thác mỏ đá và thi công công trình cũ, gây bất lợi khi đoàn thanh tra thanh kiểm tra hồi tố nhiều năm.",
        "Phạt tiền theo Nghị định về xử phạt vi phạm hành chính trong lĩnh vực kế toán đối với hành vi không lập đầy đủ sổ kế toán hoặc lưu trữ chứng từ không đúng quy định."
],
        defenseStrategy: [
        "Lập luận sắc bén dựa trên Luật Kế toán 88/2015 Điều 24: Công ty Cổ phần Kiểu Việt thực hiện nghiêm túc việc lập, in và lưu trữ sổ kế toán dưới cả hình thức điện tử và bản cứng đóng thành quyển có đầy đủ chữ ký pháp lý, sẵn sàng cung cấp khi cơ quan thuế yêu cầu.",
        "Giải trình về đặc thù hoạt động khai thác mỏ đá và xây lắp tại Gia Lai: Toàn bộ dữ liệu chứng từ gốc, lệnh điều xe, phiếu cân trạm cân điện tử mỏ đá đều được trích xuất từ hệ thống phần mềm quản lý chuyên dụng và lưu trữ đồng thời trên đám mây (cloud backup) chống rủi ro thiên tai, mất mát.",
        "Đối với các hóa đơn điện tử XML bị nghi ngờ, xuất trình ngay lập tức biên bản đối chiếu hóa đơn, cổng tra cứu trực tuyến của Tổng cục Thuế và chứng từ thanh toán qua ngân hàng (Ủy nhiệm chi có dấu của ngân hàng thương mại tại Gia Lai) để chứng minh tính xác thực.",
        "Trường hợp chứng từ lưu trữ năm cũ có dấu hiệu phai mờ giấy in nhiệt, cung cấp bản sao chụp có công chứng/chứng thực nội bộ kèm theo dữ liệu file mềm gốc được ký số đầy đủ để bảo vệ tính hợp pháp của chi phí đầu vào.",
        "Khẳng định hệ thống kiểm soát nội bộ của công ty tuân thủ chặt chẽ thời hạn lưu trữ 10 năm đối với tài liệu kế toán có giá trị tài chính và pháp lý, bác bỏ mọi cáo buộc cho rằng công ty thiếu hụt chứng từ hay cố ý tiêu hủy tài liệu."
]
      },
      {
        id: 'chk-tt-200-2014',
        title: 'Báo cáo tài chính đầy đủ (B01, B02, B03, B09) theo TT 200/2014',
        description: 'Kiểm tra BCTC đã nộp CQT khớp với số liệu quyết toán TNDN. In bản chính thức có chữ ký Giám đốc và Kế toán trưởng sẵn sàng cho đoàn kiểm tra.',
        priority: 'critical',
        decreeId: 'tt-200-2014',
        decreeLabel: 'TT 200/2014 (Chế độ KT DN)',
        phase: 1,
        documentsRequired: [
        "Bộ Báo cáo tài chính năm hoàn chỉnh đã nộp cơ quan thuế và cơ quan đăng ký kinh doanh kèm theo biên bản nhận tờ khai điện tử.",
        "Báo cáo kiểm toán độc lập năm tài chính (nếu thuộc diện bắt buộc kiểm toán đối với doanh nghiệp đại chúng hoặc dự án sử dụng vốn nhà nước).",
        "Bảng cân đối phát sinh tài khoản các tài khoản từ cấp 1 đến cấp 2 chi tiết số dư đầu năm, phát sinh trong kỳ và số dư cuối năm.",
        "Hệ thống biên bản đối chiếu công nợ phải thu (TK 131) và phải trả (TK 331) có chữ ký xác nhận của các đối tác, chủ đầu tư, nhà cung cấp vật liệu mỏ đá.",
        "Bảng kê tính khấu hao tài sản cố định (xe máy thi công, máy nghiền đá, trạm trộn, thiết bị mỏ trên TK 211, 214).",
        "Các quyết định hạch toán, biên bản đánh giá lại tài sản, bảng phân bổ chi phí trả trước dài hạn (TK 242) như chi phí thăm dò mỏ đá, chi phí đền bù giải phóng mặt bằng mỏ."
],
        accountingSteps: [
        "Bước 1: Kiểm tra sự khớp đúng số học giữa các chỉ tiêu trên Bảng cân đối kế toán (B01-DN) với số dư cuối kỳ của các tài khoản loại 1 đến loại 4 trên Sổ cái và Bảng cân đối phát sinh tài khoản.",
        "Bước 2: Soát xét Báo cáo kết quả hoạt động kinh doanh (B02-DN), đối chiếu doanh thu xây lắp (TK 5111), doanh thu bán đá xây dựng (TK 5112) với tổng doanh thu trên các tờ khai thuế GTGT hàng quý/tháng và doanh thu tính thuế TNDN.",
        "Bước 3: Kiểm tra Báo cáo lưu chuyển tiền tệ (B03-DN) theo phương pháp trực tiếp hoặc gián tiếp, đối chiếu dòng tiền thuần từ hoạt động kinh doanh, đầu tư, tài chính với số phát sinh trên TK 111, 112.",
        "Bước 4: Kiểm tra chi tiết Thuyết minh Báo cáo tài chính (B09-DN) đối với các khoản mục trọng yếu: Hàng tồn kho (TK 152, 154, 155), Xây dựng cơ bản dở dang, Chi phí sản xuất kinh doanh dở dang, Phải thu/phải trả ngắn hạn dài hạn, Vợ chủ sở hữu.",
        "Bước 5: Rà soát việc trích lập các khoản dự phòng giảm giá hàng tồn kho, dự phòng nợ phải thu khó đòi trên TK 229, đảm bảo tuân thủ đúng các tiêu chí hướng dẫn tại Thông tư 200/2014/TT-BTC và Thông tư 48/2019/TT-BTC."
],
        auditRisks: [
        "Rủi ro lệch số liệu giữa doanh thu trên Báo cáo tài chính (B02) và doanh thu trên Tờ khai quyết toán thuế TNDN do các bút toán điều chỉnh năm trước hoặc ghi nhận doanh thu không đúng kỳ.",
        "Bẫy thuế về phân loại sai giữa chi phí sản xuất kinh doanh dở dang (TK 154) và chi phí xây dựng cơ bản dở dang (TK 241), làm ảnh hưởng đến thời gian trích khấu hao và xác định chi phí được trừ khi tính thuế TNDN.",
        "Rủi ro đoàn thanh tra bóc tách chi phí khấu hao tài sản cố định (máy móc thiết bị khai thác đá, xe cuốc, xe ủi, xe ben chở đá) do thiếu hồ sơ kỹ thuật, đăng kiểm hoặc không phục vụ trực tiếp hoạt động sản xuất kinh doanh.",
        "Rủi ro liên quan đến việc ghi nhận sai lệch dòng tiền trên Báo cáo lưu chuyển tiền tệ (B03), bị cơ quan thuế đánh giá hệ thống kiểm soát nội bộ yếu kém.",
        "Phạt khai sai thuế TNDN, thuế GTGT và tiền chậm nộp phát sinh do điều chỉnh hồi tố các khoản chi phí không đủ điều kiện ghi nhận vào kết quả kinh doanh năm tài chính."
],
        defenseStrategy: [
        "Giải trình rõ ràng cấu trúc doanh thu đặc thù của Công ty Cổ phần Kiểu Việt gồm hai mảng chính: Thi công xây lắp công trình giao thông thủy lợi và Khai thác, chế biến đá xây dựng tại Gia Lai, chứng minh mọi khoản thu đều được xuất hóa đơn điện tử đầy đủ và hạch toán đúng tài khoản TK 511.",
        "Viện dẫn các quy định tại Thông tư 200/2014/TT-BTC về nguyên tắc thận trọng và phù hợp trong kế toán, giải thích căn cứ lập Thuyết minh B09-DN đối với các khoản chi phí trả trước dài hạn (chi phí bồi thường mỏ đá, chi phí chuẩn bị mặt bằng thi công) được phân bổ hợp lý theo sản lượng khai thác thực tế hoặc thời gian thực hiện hợp đồng.",
        "Cung cấp đầy đủ Báo cáo kiểm toán độc lập (nếu có) để chứng minh tính trung thực, hợp lý của bộ BCTC trước khi trình nộp cơ quan quản lý nhà nước.",
        "Đối với các chênh lệch tạm thời giữa kế toán và thuế, xuất trình bảng tính toán Chênh lệch tạm thời và Chênh lệch vĩnh viễn trên Tờ khai quyết toán thuế TNDN (Mẫu 03/TNDN) để khẳng định công ty tuân thủ nghiêm ngặt pháp luật thuế hiện hành.",
        "Bảo vệ quan điểm về việc trích khấu hao tài sản cố định chuyên dùng ngành mỏ và xây lắp dựa trên công suất thiết kế, định mức kinh tế kỹ thuật và thực tế hoạt động khai thác tại các mỏ đá trên địa bàn Gia Lai."
]
      },
      {
        id: 'chk-tt-99-2025',
        title: 'Chuyển đổi hệ thống tài khoản kế toán mới theo TT 99/2025',
        description: 'Rà soát phương án chuyển đổi danh mục tài khoản từ 01/01/2026, quy định ghi nhận doanh thu xây dựng theo hóa đơn và chứng từ thực tế.',
        priority: 'important',
        decreeId: 'tt-99-2025',
        articleNum: '5',
        decreeLabel: 'TT 99/2025 (Chế độ KT mới 2026)',
        phase: 2,
        documentsRequired: [
        "Quyết định của Hội đồng quản trị/Giám đốc Công ty Cổ phần Kiểu Việt về việc áp dụng chuyển đổi hệ thống tài khoản kế toán theo Thông tư 99/2025/TT-BTC.",
        "Bảng ánh xạ chuyển đổi tài khoản (Chart of Accounts Mapping) từ hệ thống cũ (TT 200/2014) sang hệ thống tài khoản mới theo TT 99/2025/TT-BTC.",
        "Bảng cân đối phát sinh tài khoản tại thời điểm khóa sổ chuyển đổi (31/12 năm trước năm áp dụng) và bảng số dư đầu kỳ theo tài khoản mới.",
        "Tài liệu hướng dẫn cập nhật phần mềm kế toán (SAP, MISA, Fast, Bravo...) được nhà cung cấp phần mềm xác nhận đã cấu hình đúng theo Thông tư 99/2025/TT-BTC.",
        "Quy chế tài chính, quy trình luân chuyển chứng từ và định khoản nội bộ đã được sửa đổi, bổ sung phù hợp với hệ thống tài khoản mới.",
        "Biên bản họp hội đồng thành viên/ban điều hành về việc xử lý các chênh lệch phát sinh do đánh giá lại hoặc gom nhóm tài khoản khi chuyển đổi."
],
        accountingSteps: [
        "Bước 1: Thực hiện khóa sổ kế toán chi tiết theo hệ thống tài khoản cũ (TT 200/2014) tại thời điểm chuyển đổi, lập Bảng cân đối phát sinh chốt số liệu chính xác.",
        "Bước 2: Áp dụng bảng ánh xạ (Mapping) để kết chuyển số dư chi tiết từ các tài khoản cũ sang tài khoản mới theo đúng quy định tại Điều 5 Thông tư 99/2025/TT-BTC, đảm bảo nguyên tắc tổng tài sản bằng tổng nguồn vốn.",
        "Bước 3: Kiểm tra việc mở mới, gộp nhóm hoặc tách tài khoản cấp 2, cấp 3 đặc thù cho ngành xây lắp (TK 154, TK 621-627) và ngành khai thác mỏ đá (chi phí khai thác, chi phí bóc đất tầng phủ) theo đúng danh mục tài khoản mới của TT 99/2025/TT-BTC.",
        "Bước 4: Kiểm tra sự đối ứng giữa các tài khoản mới trên phần mềm kế toán, chạy thử nghiệm các bút toán tập hợp chi phí thi công công trình và xuất kho đá xây dựng để đảm bảo không bị lỗi lệch định khoản.",
        "Bước 5: Đối chiếu số dư chuyển đổi trên các tài khoản công nợ (131, 331), tài khoản tiền (111, 112), tài khoản vật tư hàng hóa (152, 156) với các biên bản đối chiếu thực tế."
],
        auditRisks: [
        "Rủi ro sai lệch số dư đầu kỳ khi chuyển đổi hệ thống tài khoản, dẫn đến mất cân đối giữa Bảng cân đối kế toán và Sổ cái các tài khoản mới.",
        "Bẫy thuế do hạch toán nhầm lẫn giữa các tài khoản chi phí mới, khiến cơ quan thuế hiểu nhầm doanh nghiệp che giấu chi phí hoặc đưa chi phí không hợp lệ vào giá vốn xây lắp và giá thành sản xuất đá.",
        "Rủi ro phần mềm kế toán chưa cập nhật kịp thời tính năng của TT 99/2025/TT-BTC, gây ra lỗi tự động kết chuyển sai định khoản sang tài khoản xác định kết quả kinh doanh (TK 911).",
        "Rủi ro pháp lý khi cơ quan thanh tra kiểm tra năm tài chính giao thời giữa hai chế độ kế toán, phát hiện sự thiếu đồng bộ trong việc giải trình các chỉ tiêu tài chính.",
        "Phạt vi phạm chế độ kế toán theo các quy định hiện hành nếu việc chuyển đổi tài khoản làm sai lệch bản chất số liệu báo cáo thuế."
],
        defenseStrategy: [
        "Xuất trình đầy đủ Quyết định áp dụng Thông tư 99/2025/TT-BTC của Ban Tổng giám đốc Công ty Cổ phần Kiểu Việt, khẳng định công ty chủ động cập nhật và tuân thủ đúng lộ trình pháp luật kế toán mới.",
        "Cung cấp Bảng ánh xạ tài khoản chi tiết (Mapping Table) được kiểm tra, ký duyệt bởi Kế toán trưởng, chứng minh mọi tài khoản cũ đều được chuyển đổi minh bạch, đúng bản chất kinh tế sang hệ thống tài khoản mới.",
        "Giải trình trước đoàn thanh tra về việc duy trì các tài khoản chi tiết phục vụ riêng cho đặc thù ngành nghề thi công giao thông thủy lợi và khai thác mỏ đá tại Gia Lai trong hệ thống tài khoản mới, đảm bảo tính liên tục của dữ liệu tài chính qua các năm.",
        "Cung cấp biên bản nghiệm thu kỹ thuật phần mềm kế toán và văn bản xác nhận của nhà cung cấp phần mềm về việc hệ thống đã vận hành chuẩn xác theo Thông tư 99/2025/TT-BTC.",
        "Khẳng định mọi bút toán kết chuyển và điều chỉnh số dư đầu kỳ đều tuân thủ chặt chẽ nguyên tắc thận trọng và nhất quán, hoàn toàn không làm thay đổi nghĩa vụ thuế nộp ngân sách nhà nước của doanh nghiệp."
]
      },
      {
        id: 'chk-tt-133-2016',
        title: 'Phương pháp tập hợp chi phí xây lắp TK 154 (TT 133/2016)',
        description: 'Đối chiếu cách phân bổ chi phí chung và giá thành xây lắp công trình nếu đơn vị phụ thuộc của Kiểu Việt áp dụng chế độ KT doanh nghiệp vừa và nhỏ.',
        priority: 'important',
        decreeId: 'tt-133-2016',
        articleNum: '27',
        decreeLabel: 'TT 133/2016 (Chế độ KT DNNVV)',
        phase: 2,
        documentsRequired: [
        "Hợp đồng thi công xây lắp các công trình giao thông, thủy lợi ký với các chủ đầu tư tại Gia Lai và các bảng dự toán chi tiết từng hạng mục công trình.",
        "Bảng tổng hợp chi phí sản xuất kinh doanh dở dang cuối kỳ trên Tài khoản 154 chi tiết theo từng công trình, hạng mục công trình.",
        "Phiếu xuất kho nguyên vật liệu, xi măng, sắt thép, nhiên liệu (dầu DO cho xe máy thi công) và bảng kê xuất đá xây dựng từ mỏ đá của công ty đưa vào công trình (kèm lệnh điều xe, phiếu cân trạm cân).",
        "Bảng chấm công, bảng lương, hợp đồng lao động của đội ngũ kỹ sư, công nhân trực tiếp thi công tại công trường và nhân công thuê ngoài kèm chứng minh nhân dân/căn cước công dân và Bản cam kết mẫu 08/CK-TNCN.",
        "Bảng phân bổ chi phí khấu hao máy móc, thiết bị thi công (xe cuốc, xe ủi, máy san gạt, máy trộn bê tông) hạch toán qua TK 623 và TK 627.",
        "Biên bản nghiệm thu khối lượng hoàn thành giai đoạn A-B làm căn cứ để kết chuyển chi phí từ TK 154 sang TK 632."
],
        accountingSteps: [
        "Bước 1: Kiểm tra việc hạch toán tập hợp chi phí phát sinh thực tế vào các tài khoản chi phí sản xuất ban đầu: Nợ TK 621, 622, 623, 627 / Có TK 152, 153, 331, 334, 214 theo đúng Điều 27 Thông tư 133/2016/TT-BTC.",
        "Bước 2: Soát xét bút toán kết chuyển chi phí cuối kỳ từ các tài khoản chi phí sản xuất vào Tài khoản 154 (Nợ TK 154 / Có TK 621, 622, 623, 627) đối với từng công trình xây lắp chưa hoàn thành.",
        "Bước 3: Đối chiếu tổng số dư cuối kỳ trên Tài khoản 154 với giá trị dở dang trên Bảng dự toán và Nhật ký thi công thực tế tại công trường, đảm bảo không có tình trạng gộp chung chi phí của các công trình khác nhau.",
        "Bước 4: Kiểm tra bút toán kết chuyển từ TK 154 sang TK 632 (Giá vốn hàng bán) khi công trình hoàn thành nghiệm thu bàn giao: Nợ TK 632 / Có TK 154, kiểm tra tỷ lệ giá vốn so với doanh thu xây lắp (TK 5111).",
        "Bước 5: Rà soát các khoản chi phí vượt định mức, chi phí không hợp lý, không có hóa đơn chứng từ hợp pháp bị loại trừ trước khi kết chuyển vào giá vốn tính thuế TNDN."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra bóc tách toàn bộ giá vốn xây lắp do doanh nghiệp không lập bảng tập hợp chi phí chi tiết theo từng công trình mà hạch toán dồn chung, không tách bạch được công trình chịu thuế và không chịu thuế.",
        "Bẫy thuế phạt truy thu thuế TNND và TNCN đối với chi phí nhân công thuê ngoài thi công tại công trường nhưng thiếu hợp đồng lao động, thiếu CCCD hoặc thiếu Bản cam kết mẫu 08/CK-TNCN (đối với lao động dưới mức phải khấu trừ thuế).",
        "Rủi ro ấn định thuế do chi phí nguyên vật liệu (đặc biệt là đá xây dựng tự khai thác từ mỏ đá của công ty đưa vào công trình xây lắp) không có lệnh điều xe, phiếu cân trạm cân hoặc định mức tiêu hao vượt mức hợp lý.",
        "Rủi ro kết chuyển nhầm chi phí sửa chữa lớn tài sản cố định hoặc chi phí quản lý doanh nghiệp vào TK 154 để làm tăng giá vốn hàng bán, giảm thu nhập chịu thuế TNDN.",
        "Phạt khai sai 20% và tiền chậm nộp theo Nghị định 125/2020/NĐ-CP do hành vi phân bổ sai kỳ chi phí xây lắp."
],
        defenseStrategy: [
        "Lập luận chặt chẽ dựa trên Điều 27 Thông tư 133/2016/TT-BTC: Công ty Cổ phần Kiểu Việt thực hiện hạch toán chi phí sản xuất kinh doanh dở dang trên TK 154 tuân thủ tuyệt đối nguyên tắc hạch toán chi tiết theo từng công trình giao thông, thủy lợi, có sự đối chiếu khớp đúng với dự toán thầu và hồ sơ nghiệm thu A-B.",
        "Giải trình về nguồn gốc đá xây dựng sử dụng cho công trình: Xuất trình toàn bộ giấy phép khai thác mỏ đá tại Gia Lai, lệnh điều xe vận chuyển, phiếu cân điện tử tại trạm cân mỏ để chứng minh lượng đá xuất kho hạch toán vào TK 621/154 là hoàn toàn chính xác, thực tế và phục vụ trực tiếp cho công trình.",
        "Đối với chi phí nhân công thuê ngoài thi công tại các vùng sâu vùng xa ở Gia Lai, xuất trình đầy đủ Danh sách chi trả tiền lương, hợp đồng kho việc, bản sao CCCD và Bản cam kết mẫu 08/CK-TNCN của người lao động có thu nhập chưa đến mức phải khấu trừ thuế TNCN, bảo vệ tính hợp lệ của chi phí.",
        "Cung cấp Nhật ký thi công, bảng xác định ca máy thiết bị thi công (TK 623) có xác nhận của đơn vị tư vấn giám sát để chứng minh sự cần thiết và định mức hợp lý của chi phí máy thi công tại các công trình giao thông thủy lợi địa hình khó khăn.",
        "Khẳng định các bút toán kết chuyển từ TK 154 sang TK 632 được thực hiện đúng thời điểm nghiệm thu bàn giao đưa công trình vào sử dụng, tuân thủ nguyên tắc phù hợp giữa doanh thu và chi phí theo chuẩn mực kế toán hiện hành."
]
      },
      {
        id: 'chk-tt-46-2025',
        title: 'Cập nhật tài khoản kế toán theo Thông tư 46/2025',
        description: 'Kiểm tra các sửa đổi bổ sung về chế độ kế toán áp dụng cho các nhà thầu phụ là doanh nghiệp nhỏ và vừa liên kết với Kiểu Việt.',
        priority: 'recommended',
        decreeId: 'tt-46-2025',
        articleNum: '2',
        decreeLabel: 'TT 46/2025 (Sửa đổi TT 133)',
        phase: 2,
        documentsRequired: [
        "Quyết định áp dụng chế độ kế toán và hệ thống tài khoản chi tiết theo Thông tư 46/2025/TT-BTC tại Công ty Cổ phần Kiểu Việt.",
        "Hệ thống danh mục tài khoản cấp 1, cấp 2 chi tiết cho ngành xây lắp giao thông thủy lợi (TK 154, 621, 622, 623, 627, 335) và khai thác mỏ đá (TK 152, 155, 632).",
        "Sổ cái, Sổ chi tiết các tài khoản đối ứng Nợ/Có liên quan đến việc chuyển đổi số dư đầu kỳ theo quy định mới tại Điều 2 Thông tư 46/2025.",
        "Biên bản kiểm kê quỹ tiền mặt, số dư tiền gửi ngân hàng (TK 112), công nợ phải thu (TK 131) và phải trả (TK 331) tại thời điểm chuyển đổi.",
        "Báo cáo tài chính năm trước và bảng đối chiếu số dư chuyển đổi tài khoản theo Thông tư mới, có chữ ký của Kế toán trưởng và Tổng Giám đốc.",
        "Quyết định phân công nhiệm vụ kế toán tổng hợp, kế toán kho mỏ đá và kế toán giá thành công trình giao thông thủy lợi."
],
        accountingSteps: [
        "Bước 1: Rà soát toàn bộ hệ thống danh mục tài khoản hiện hành của công ty để cập nhật, bổ sung và điều chỉnh mã hiệu tài khoản theo đúng hướng dẫn tại Điều 2 Thông tư 46/2025/TT-BTC.",
        "Bước 2: Kiểm tra bút toán kết chuyển số dư cuối kỳ của các tài khoản cũ sang danh mục tài khoản mới, đảm bảo nguyên tắc cân đối Tổng Nợ = Tổng Có trên Sổ cái và Bảng cân đối phát sinh.",
        "Bước 3: Đối chiếu số dư cuối kỳ của TK 112 (Tiền gửi ngân hàng), TK 131 (Phải thu khách hàng công trình), TK 154 (Chi phí sản xuất kinh doanh dở dang công trình giao thông thủy lợi) với Sổ chi tiết và Xác nhận số dư.",
        "Bước 4: Kiểm tra sự phù hợp của việc hạch toán chi phí sản xuất chung (TK 627) phân bổ cho các mỏ đá và công trình xây lắp theo tiêu chí mới cập nhật, đối chiếu với Báo cáo tài chính và Tờ khai quyết toán thuế TNDN.",
        "Bước 5: Rà soát việc khóa sổ kế toán, lập Báo cáo tài chính và các phụ lục thuyết minh BCTC theo đúng phom chuẩn và biểu mẫu quy định sửa đổi mới nhất tại Thông tư 46/2025."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra bóc tách chi phí do hạch toán sai lệch tài khoản, nhầm lẫn giữa chi phí sản xuất dở dang (TK 154) và chi phí quản lý doanh nghiệp (TK 642).",
        "Bẫy thuế liên quan đến việc chuyển đổi số dư tài khoản không có biên bản xác nhận hoặc lệch số liệu giữa sổ cái tài khoản cũ và mới, dẫn đến nghi ngờ gian lận số liệu tài chính.",
        "Phạt vi phạm hành chính theo Nghị định xử phạt kế toán do áp dụng sai hoặc chậm cập nhật hệ thống tài khoản kế toán mới theo Thông tư 46/2025 cho kỳ tính thuế hiện hành.",
        "Truy thu thuế TNDN và phạt chậm nộp do các bút toán kết chuyển tài khoản làm sai lệch kết quả kinh doanh, kết chuyển nhầm chi phí không được trừ vào chi phí hợp lý.",
        "Rủi ro cơ quan thuế yêu cầu giải trình lại toàn bộ cấu trúc giá thành mỏ đá và công trình thủy lợi do sự thay đổi mã tài khoản và phương pháp kết chuyển tập hợp chi phí."
],
        defenseStrategy: [
        "Lập luận rằng Công ty Cổ phần Kiểu Việt đã thực hiện nghiêm túc việc cập nhật Thông tư 46/2025/TT-BTC ngay khi có hiệu lực, ban hành Quyết định nội bộ về việc chuyển đổi danh mục tài khoản và hoàn tất việc ánh xạ (mapping) tài khoản cũ sang tài khoản mới một cách minh bạch.",
        "Trình bày chi tiết bảng đối chiếu số dư đầu kỳ và cuối kỳ trước và sau khi chuyển đổi, chứng minh mọi biến động đều tuân thủ nguyên tắc bảo toàn vốn, không làm thay đổi bản chất kinh tế của giao dịch và không ảnh hưởng đến nghĩa vụ thuế thu nhập doanh nghiệp.",
        "Viện dẫn các quy định chuyển tiếp tại Thông tư 46/2025 để giải trình với đoàn thanh tra rằng việc điều chỉnh tài khoản là tuân thủ pháp luật kế toán nhằm nâng cao tính minh bạch trong báo cáo tài chính của doanh nghiệp xây lắp và khai khoáng tại Gia Lai.",
        "Cung cấp đầy đủ Sổ cái, Sổ chi tiết và các chứng từ gốc đi kèm để chứng minh tính liên tục của dữ liệu kế toán, khẳng định không có sự cố tình xào nấu số liệu hay lợi dụng việc đổi thông tư để trốn thuế."
]
      },
      {
        id: 'chk-nd-174-2016',
        title: 'Quy chế quản lý tài liệu kế toán điện tử (NĐ 174/2016)',
        description: 'Quy định về việc bảo quản, sao lưu dữ liệu kế toán trên máy chủ, trách nhiệm lưu trữ và phục hồi dữ liệu khi cơ quan thuế yêu cầu trích xuất.',
        priority: 'important',
        decreeId: 'nd-174-2016',
        articleNum: '9',
        decreeLabel: 'NĐ 174/2016 (Hướng dẫn Luật KT)',
        phase: 2,
        documentsRequired: [
        "Quy chế quản lý, sử dụng và lưu trữ chứng từ, hóa đơn điện tử, chữ ký số của Công ty Cổ phần Kiểu Việt theo quy định tại Điều 9 Nghị định 174/2016/NĐ-CP.",
        "Hóa đơn điện tử XML và bản thể hiện PDF cho toàn bộ các giao dịch mua bán đá xây dựng, hợp đồng thi công giao thông thủy lợi xuất cho chủ đầu tư.",
        "Ủy nhiệm chi qua ngân hàng (TK 112) kèm theo các chứng từ thanh toán không dùng tiền mặt đối với các hóa đơn giá trị gia tăng trên 20 triệu đồng.",
        "Nhật ký thi công công trình, biên bản nghiệm thu khối lượng hoàn thành A-B ký số hợp lệ, lệnh điều xe vận chuyển đá từ mỏ đá tại Gia Lai.",
        "Hồ sơ thầu, hợp đồng thi công xây lắp, phụ lục hợp đồng phát sinh khối lượng, bảng kê khai trạm cân mỏ đá lưu trữ trên hệ thống máy chủ điện toán đám mây hoặc thiết bị lưu trữ an toàn.",
        "Biên bản bàn giao, kiểm tra tính toàn vẹn của dữ liệu kế toán điện tử định kỳ hàng năm theo đúng yêu cầu của Luật Kế toán và Nghị định 174."
],
        accountingSteps: [
        "Bước 1: Kiểm tra tính toàn vẹn và hợp pháp của hóa đơn điện tử (định dạng XML) trên hệ thống phần mềm kế toán và Cổng thông tin hóa đơn điện tử của Tổng cục Thuế, đối chiếu với TK 3331 và TK 133.",
        "Bước 2: Rà soát việc lưu trữ các chứng từ điện tử bao gồm ủy nhiệm chi, giấy báo Nợ, giấy báo Có (TK 112) đảm bảo khớp đúng với Sổ chi tiết tiền gửi ngân hàng.",
        "Bước 3: Kiểm tra tính xác thực của chữ ký số, thời gian ký số (timestamp) trên các biên bản nghiệm thu A-B, hóa đơn điện tử xuất bán đá và dịch vụ xây lắp để chống tình trạng hóa đơn lùi ngày hoặc sai thời điểm.",
        "Bước 4: Đối chiếu chéo dữ liệu đầu vào trên Sổ cái các tài khoản chi phí (TK 621, 622, 623, 627, 152) với kho lưu trữ chứng từ điện tử gốc trên phần mềm ERP hoặc MISA/Fast.",
        "Bước 5: Kiểm tra việc phân quyền truy cập, sao lưu dữ liệu dự phòng (backup) hàng ngày đối với hệ thống sổ sách kế toán điện tử theo đúng quy định bảo mật tại Điều 9 Nghị định 174/2016/NĐ-CP."
],
        auditRisks: [
        "Bẫy thuế đoàn thanh tra phạt nặng hoặc từ chối khấu trừ thuế GTGT do doanh nghiệp lưu trữ hóa đơn điện tử dạng PDF thuần túy mà thiếu file gốc định dạng XML có chữ ký số.",
        "Rủi ro bóc tách chi phí vì chứng từ điện tử không thể đọc được, bị lỗi chữ ký số, hoặc ngày ký hóa đơn không trùng khớp với thời điểm giao nhận đá mỏ và nghiệm thu công trình.",
        "Phạt vi phạm hành chính trong lĩnh vực kế toán theo Nghị định 174/2016/NĐ-CP do không lập quy chế lưu trữ tài liệu kế toán điện tử hoặc không thực hiện việc sao lưu dữ liệu định kỳ.",
        "Phát sinh khoản truy thu thuế TNDN và GTGT do cơ quan thuế nghi ngờ tính có thật của giao dịch khi chứng từ thanh toán qua ngân hàng (TK 112) không khớp đúng với số tiền trên hóa đơn điện tử XML.",
        "Rủi ro mất mát dữ liệu kế toán do không có cơ chế lưu trữ đám mây hoặc thiết bị lưu trữ ngoại vi an toàn, dẫn đến vi phạm quy định thời hạn lưu trữ tài liệu kế toán tối thiểu 5 năm hoặc 10 năm."
],
        defenseStrategy: [
        "Lập luận rằng toàn bộ hệ thống hóa đơn, chứng từ, sổ sách kế toán của Công ty Cổ phần Kiểu Việt đều được lưu trữ đầy đủ dưới cả hai định dạng pháp lý là file XML gốc có chữ ký số hợp lệ và bản thể hiện PDF tuân thủ tuyệt đối Điều 9 Nghị định 174/2016/NĐ-CP.",
        "Cung cấp ngay lập tức cho đoàn thanh tra đường dẫn truy xuất cơ sở dữ liệu lưu trữ đám mây và biên bản bàn giao, kiểm tra tính toàn vẹn dữ liệu kế toán hàng quý, chứng minh không có hiện tượng sửa đổi hoặc làm giả chứng từ điện tử.",
        "Giải trình rõ đặc thù ngành xây lắp và khai khoáng tại Gia Lai đòi hỏi khối lượng chứng từ vận chuyển, phiếu cân trạm cân và lệnh điều xe rất lớn, công ty đã số hóa 100% tài liệu để tra cứu nhanh chóng và chính xác.",
        "Viện dẫn Luật Kế toán và Nghị định 174/2016/NĐ-CP để khẳng định các chứng từ điện tử của công ty có giá trị pháp lý tương đương chứng từ giấy, đáp ứng đầy đủ tiêu chuẩn kiểm toán và thuế."
]
      },
      {
        id: 'chk-nd-41-2018',
        title: 'Khung xử phạt vi phạm kế toán & kiểm toán (NĐ 41/2018)',
        description: 'Nắm vững khung phạt: không kiểm kê tài sản (5-10 triệu), BCTC sai lệch (10-20 triệu), thiếu chữ ký chứng từ (3-5 triệu) để rà soát chứng từ trước.',
        priority: 'important',
        decreeId: 'nd-41-2018',
        articleNum: '7',
        decreeLabel: 'NĐ 41/2018 (Xử phạt Kế toán)',
        phase: 3,
        documentsRequired: [
        "Biên bản kiểm tra nội bộ, báo cáo kiểm toán độc lập hàng năm của Công ty Cổ phần Kiểu Việt để chứng minh tính minh bạch của sổ sách kế toán.",
        "Hệ thống chứng từ gốc: Phiếu thu, phiếu chi, phiếu xuất kho, phiếu nhập kho, ủy nhiệm chi (TK 111, 112, 152, 156) được lập đầy đủ chữ ký các bộ phận.",
        "Sổ chi tiết các tài khoản công nợ (TK 131, TK 331), sổ chi phí sản xuất dở dang (TK 154) và bảng phân bổ chi phí trả trước dài hạn (TK 242).",
        "Báo cáo tài chính, Bảng cân đối phát sinh tài khoản, Thuyết minh Báo cáo tài chính đã nộp cơ quan thuế các năm tài chính.",
        "Hồ sơ phân công công việc kế toán trưởng, nhân viên kế toán, chứng chỉ hành nghề kế toán (nếu có) và hợp đồng lao động.",
        "Các quyết định xử lý chênh lệch kiểm kê tài sản, biên bản điều chỉnh sai sót kế toán (nếu có) được phê duyệt đúng thẩm quyền."
],
        accountingSteps: [
        "Bước 1: Rà soát toàn bộ các bút toán hạch toán trên Sổ cái TK 621, 622, 623, 627, 154, 632 để phát hiện kịp thời các sai sót về định khoản Nợ/Có, tránh vi phạm điều kiện lập chứng từ kế toán theo NĐ 41/2018.",
        "Bước 2: Kiểm tra đối chiếu số liệu giữa Tờ khai quyết toán thuế TNDN, Tờ khai thuế GTGT hàng tháng/quý với Bảng cân đối phát sinh và Sổ cái các tài khoản doanh thu, chi phí.",
        "Bước 3: Kiểm tra tính đầy đủ của các yếu tố bắt buộc trên chứng từ kế toán (số hiệu, ngày tháng, tên các bên, nội dung kinh tế, số lượng, đơn giá, chữ ký người lập, kế toán trưởng và đại diện pháp luật).",
        "Bước 4: Rà soát việc tuân thủ nguyên tắc mở sổ, ghi sổ, khóa sổ kế toán, lập Báo cáo tài chính đúng thời hạn, không để xảy ra tình trạng bỏ sót số liệu hoặc hạch toán sai kỳ kế toán.",
        "Bước 5: Kiểm tra việc lưu trữ hồ sơ giải trình kiểm toán, các bút toán điều chỉnh theo kiến nghị của kiểm toán độc lập (nếu có) để đảm bảo không bị phạt vi phạm hành chính về chế độ kế toán."
],
        auditRisks: [
        "Bẫy thuế đoàn thanh tra áp dụng khung phạt tiền từ 20 đến 50 triệu đồng theo Điều 7 Nghị định 41/2018/NĐ-CP đối với hành vi lập chứng từ kế toán không đủ các yếu tố bắt buộc hoặc hạch toán sai tài khoản.",
        "Rủi ro bị xử phạt hành chính do phát hiện chứng từ hạch toán chi phí không có chữ ký của người chịu trách nhiệm hoặc thiếu biên bản giao nhận hàng hóa mỏ đá.",
        "Phạt vi phạm do chậm nộp Báo cáo tài chính hoặc Báo cáo tài chính nộp cơ quan thuế lệch số liệu so với sổ sách kế toán nội bộ.",
        "Truy thu thuế nặng kết hợp tiền chậm nộp 0.03%/ngày và phạt khai sai 20% do cơ quan thuế phát hiện sai sót mang tính hệ thống trong việc lập sổ kế toán dẫn đến thiếu số thuế phải nộp.",
        "Rủi ro bị thanh tra kiểm tra toàn diện các năm trước do hệ thống kiểm soát nội bộ và sổ sách kế toán bị đánh giá là yếu kém, không tuân thủ chuẩn mực."
],
        defenseStrategy: [
        "Khẳng định Công ty Cổ phần Kiểu Việt luôn duy trì hệ thống kiểm soát nội bộ chặt chẽ, mọi nghiệp vụ kinh tế phát sinh đều được lập chứng từ hợp lệ, có đầy đủ chữ ký của các bên liên quan theo đúng quy định tại Điều 7 Nghị định 41/2018/NĐ-CP.",
        "Trình bày biên bản kiểm toán độc lập hàng năm xác nhận Báo cáo tài chính của công ty trung thực, hợp lý, không có ngoại trừ trọng yếu về chế độ kế toán.",
        "Giải trình trước đoàn thanh tra rằng nếu có sai sót nhỏ về hình thức chứng từ, đó chỉ là lỗi đánh máy hoặc sai sót khách quan trong quá trình luân chuyển chứng từ tại công trường xây lắp ở vùng sâu vùng xa, không có động cơ trốn thuế hay gian lận.",
        "Viện dẫn các quy định giảm nhẹ và thời hiệu xử phạt vi phạm hành chính trong lĩnh vực kế toán để bảo vệ quyền lợi hợp pháp của doanh nghiệp, kiên quyết bác bỏ các quyết định xử phạt vượt quá thẩm quyền hoặc áp dụng sai điều khoản."
]
      },
      {
        id: 'chk-vas-01',
        title: 'Tuân thủ nguyên tắc kế toán dồn tích & Phù hợp (VAS 01)',
        description: 'Doanh thu và chi phí xây lắp phải ghi nhận phù hợp với nhau trong cùng kỳ tính thuế, không trích trước chi phí không tương ứng doanh thu.',
        priority: 'important',
        decreeId: 'vas-01',
        decreeLabel: 'Chuẩn mực VAS 01 (Chung)',
        phase: 2,
        documentsRequired: [
        "Hợp đồng thi công xây lắp công trình giao thông thủy lợi ký kết với các chủ đầu tư kèm theo bảng tiến độ thi công chi tiết.",
        "Hồ sơ nghiệm thu khối lượng hoàn thành từng giai đoạn, biên bản bàn giao đưa công trình vào sử dụng.",
        "Bảng tính trích trước chi phí giá vốn công trình (TK 335) đối với các hạng mục đã hoàn thành nhưng chưa xuất hóa đơn hoặc chưa nhận được hóa đơn đầu vào.",
        "Hóa đơn doanh thu (TK 511) và hóa đơn chi phí giá vốn (TK 632) được hạch toán trong cùng kỳ kế toán để đảm bảo nguyên tắc phù hợp.",
        "Bảng phân bổ chi phí trả trước dài hạn (TK 242) đối với chi phí thăm dò mỏ đá, chi phí chuẩn bị mặt bằng mỏ tại Gia Lai.",
        "Sổ cái tài khoản 335 (Chi phí phải trả), Sổ cái tài khoản 154 (Dở dang) và Sổ cái tài khoản 632 (Giá vốn hàng bán)."
],
        accountingSteps: [
        "Bước 1: Kiểm tra việc ghi nhận doanh thu (TK 511) và giá vốn (TK 632) theo đúng nguyên tắc dồn tích: Doanh thu phát sinh khi nào thì ghi nhận lúc đó, không phụ thuộc vào thời điểm thực thu tiền.",
        "Bước 2: Rà soát các bút toán trích trước chi phí giá vốn công trình xây lắp vào TK 335 đối ứng TK 154 hoặc TK 632, đối chiếu với khối lượng thực tế đã nghiệm thu A-B nhưng chưa có hóa đơn.",
        "Bước 3: Kiểm tra sự phù hợp tuyệt đối giữa doanh thu khai thác mỏ đá kê khai thuế GTGT hàng tháng với doanh thu hạch toán trên Sổ cái TK 511 và Báo cáo tài chính.",
        "Bước 4: Kiểm tra việc phân bổ chi phí trả trước (TK 242) chi phí bóc đất tầng phủ mỏ đá theo sản lượng khai thác thực tế hàng tháng, đảm bảo chi phí phù hợp với doanh thu bán đá.",
        "Bước 5: Đối chiếu số liệu giữa Bảng cân đối phát sinh, Báo cáo kết quả hoạt động kinh doanh và Tờ khai quyết toán thuế TNDN để kiểm tra các khoản chi phí không có doanh thu tương ứng."
],
        auditRisks: [
        "Bẫy thuế đoàn thanh tra bóc tách toàn bộ chi phí trích trước (TK 335) với lý do doanh nghiệp trích trước không có hồ sơ chứng minh khối lượng thực tế hoặc trích vượt mức hợp lý.",
        "Rủi ro truy thu thuế TNDN do lệch kỳ ghi nhận doanh thu và chi phí, vi phạm nguyên tắc phù hợp của VAS 01 (doanh thu ghi nhận năm nay nhưng chi phí lại hạch toán sang năm sau hoặc ngược lại).",
        "Ấn định doanh thu và thuế TNDN đối với hoạt động thi công xây lắp công trình giao thông thủy lợi do cơ quan thuế phát hiện công trình đã hoàn thành bàn giao nhưng doanh nghiệp chưa chịu xuất hóa đơn và ghi nhận doanh thu.",
        "Phạt khai sai 20% và tiền chậm nộp 0.03%/ngày do cơ quan thuế điều chỉnh giảm chi phí giá vốn mỏ đá vì cho rằng chi phí bóc tầng phủ phân bổ không đúng theo sản lượng thực tế.",
        "Rủi ro cơ quan thuế loại trừ các khoản chi phí dự phòng hoặc chi phí ước tính không đủ điều kiện ghi nhận theo nguyên tắc thận trọng."
],
        defenseStrategy: [
        "Lập luận vững chắc dựa trên Chuẩn mực VAS 01 (Nguyên tắc dồn tích và Phù hợp): Công ty Cổ phần Kiểu Việt thực hiện ghi nhận doanh thu và chi phí xây lắp công trình giao thông thủy lợi căn cứ trên khối lượng thực tế thi công đã được chủ đầu tư nghiệm thu (A-B), không chờ đến khi thu tiền.",
        "Chứng minh các khoản trích trước vào TK 335 là hoàn toàn có cơ sở kinh tế, dựa trên dự toán thi công đã duyệt, khối lượng dở dang thực tế tại công trường và được đối trừ chính xác khi nhận được hóa đơn hợp pháp.",
        "Đối với hoạt động khai thác mỏ đá tại Gia Lai, giải trình chi tiết phương pháp phân bổ chi phí bóc đất tầng phủ theo sản lượng đá khai thác thực tế (unit-of-production method), tuân thủ tuyệt đối nguyên tắc phù hợp giữa doanh thu bán đá và giá vốn.",
        "Trình bày đầy đủ nhật ký thi công, biên bản nghiệm thu giai đoạn và bảng tính giá thành chi tiết để vô hiệu hóa lập luận bóc tách chi phí của đoàn thanh tra, bảo vệ quyền lợi chính đáng cho doanh nghiệp."
]
      },
      {
        id: 'chk-vas-02',
        title: 'Xác định giá gốc hàng tồn kho & Kiểm kê mỏ đá (VAS 02)',
        description: 'Tính đúng giá gốc đá thành phẩm tại mỏ đá, phương pháp tính giá xuất kho; lập biên bản kiểm kê kho vật tư, bồn dầu diesel cuối năm tài chính.',
        priority: 'critical',
        decreeId: 'vas-02',
        decreeLabel: 'Chuẩn mực VAS 02 (Hàng tồn kho)',
        phase: 1,
        documentsRequired: [
        "Biên bản kiểm kê kho hàng tồn kho (đá nguyên khai, đá thành phẩm các loại: đá 1x2, đá 2x4, đá mi bụi, cấp phối đá dăm) tại mỏ đá tại Gia Lai vào thời điểm cuối năm tài chính.",
        "Phiếu cân trạm cân điện tử ghi nhận trọng lượng xe chở đá ra vào mỏ, lệnh điều xe, phiếu xuất kho kiêm vận chuyển nội bộ.",
        "Hồ sơ tính giá thành sản xuất đá xây dựng: Bảng tập hợp chi phí nguyên vật liệu trực tiếp (TK 621), nhân công trực tiếp (TK 622), máy thi công (TK 623), sản xuất chung (TK 627) và định mức tiêu hao.",
        "Giấy phép khai thác khoáng sản mỏ đá, trữ lượng mỏ được cấp phép, báo cáo trữ lượng định kỳ và bản đồ hiện trạng mỏ.",
        "Sổ chi tiết kho hàng (TK 152, 155, 156), Thẻ kho, Sổ cái tài khoản 154 (Dở dang mỏ đá) và tài khoản 632 (Giá vốn hàng bán).",
        "Bảng tính hệ số quy đổi thể tích tự nhiên sang thể tích đá nở rời (hệ số xốp) được cơ quan chuyên môn hoặc bộ phận kỹ thuật mỏ phê duyệt."
],
        accountingSteps: [
        "Bước 1: Kiểm tra biên bản kiểm kê thực tế kho đá tại mỏ, đối chiếu số lượng tồn kho thực tế với số liệu trên Sổ chi tiết kho (TK 155, 152) và Sổ cái, xử lý chênh lệch thừa/thiếu (TK 1381, 3381).",
        "Bước 2: Rà soát phương pháp tính giá trị hàng tồn kho cuối kỳ (phương pháp bình quân gia quyền hoặc nhập trước xuất trước FIFO) trên phần mềm kế toán, đảm bảo tính nhất quán.",
        "Bước 3: Kiểm tra chi tiết bảng tính giá thành sản xuất đá xây dựng: Đối chiếu tổng chi phí tập hợp trên TK 154 với các tài khoản chi phí sản xuất (TK 621, 622, 623, 627) để đảm bảo không bỏ sót hoặc phân bổ sai.",
        "Bước 4: Kiểm tra việc áp dụng hệ số nở rời của đá nguyên khai và đá thành phẩm, đối chiếu sản lượng khai thác thực tế trên phiếu trạm cân với sản lượng ghi nhận trên sổ sách kế toán.",
        "Bước 5: Rà soát việc lập dự phòng giảm giá hàng tồn kho (TK 129/229) đối với các loại đá tồn kho lâu năm, chất lượng kém hoặc khó tiêu thụ theo đúng quy định tài chính."
],
        auditRisks: [
        "Bẫy thuế đoàn thanh tra ấn định lại thuế tài nguyên, phí bảo vệ môi trường và thuế TNDN bằng cách áp dụng hệ số nở rời đá nguyên khai cao hơn thực tế, dẫn đến cáo buộc doanh nghiệp khai thác mỏ đá chui, giấu sản lượng.",
        "Rủi ro cơ quan thuế bóc tách giá vốn hàng bán (TK 632) do phát hiện chi phí nhân công, máy múc, máy nghiền đá phân bổ vào giá thành không có định mức tiêu hao hợp lý hoặc không có phiếu trạm cân chứng minh.",
        "Phạt khai sai 20% và truy thu thuế do doanh nghiệp hạch toán sai lệch tồn kho đá thành phẩm, không khớp giữa số liệu kiểm kê thực tế và số liệu trên sổ sách kế toán.",
        "Loại trừ chi phí nguyên vật liệu, nhiên liệu (dầu die-sel chạy máy nghiền đá, xe múc) vì không có hóa đơn hợp pháp hoặc định mức tiêu hao vượt mức hợp lý theo quy định kỹ thuật mỏ.",
        "Rủi ro bị ấn định doanh thu bán đá dựa trên công suất tối đa của thiết bị khai thác mỏ đá nếu sổ sách ghi chép sản lượng tồn kho và xuất bán không minh bạch."
],
        defenseStrategy: [
        "Lập luận sắc bén dựa trên Chuẩn mực VAS 02: Công ty Cổ phần Kiểu Việt xác định giá gốc hàng tồn kho (đá xây dựng các loại) bao gồm chi phí mua, chi phí chế biến và các chi phí liên quan trực tiếp khác được tính toán chính xác theo định mức kỹ thuật mỏ đã đăng ký.",
        "Cung cấp toàn bộ phiếu cân trạm cân điện tử tự động, nhật ký khai thác mỏ, hệ số quy đổi thể tích nở rời do cơ quan có thẩm quyền hoặc tổ chức tư vấn độc lập giám định, chứng minh số liệu sản lượng khai thác và tồn kho là hoàn toàn xác thực.",
        "Giải trình trước đoàn thanh tra về quy trình tập hợp chi phí sản xuất đá xây dựng tại mỏ Gia Lai, khẳng định mọi chi phí nhiên liệu (dầu mỏ), khấu hao máy móc thiết bị khai thác (máy nghiền, máy đào) đều được phân bổ khoa học vào TK 154 và kết chuyển vào giá vốn (TK 632) theo đúng sản lượng thực tế.",
        "Trình bày biên bản kiểm kê kho cuối năm có sự tham gia chứng kiến của các bên, khẳng định không có việc giấu sản lượng hay trốn thuế tài nguyên, bảo vệ tuyệt đối tính đúng đắn của Báo cáo tài chính và Tờ khai quyết toán thuế."
]
      },
      {
        id: 'chk-vas-14',
        title: 'Ghi nhận doanh thu hợp đồng xây dựng (VAS 14)',
        description: 'Đảm bảo doanh thu ghi nhận khớp với biên bản nghiệm thu tỷ lệ hoàn thành công trình hoặc biên bản bàn giao từng hạng mục đưa vào sử dụng.',
        priority: 'critical',
        decreeId: 'vas-14',
        decreeLabel: 'Chuẩn mực VAS 14 (Doanh thu)',
        phase: 1,
        documentsRequired: [
        "Hợp đồng thi công xây dựng công trình giao thông, thủy lợi và các phụ lục điều chỉnh giá, khối lượng phát sinh.",
        "Hồ sơ dự thầu, bảng dự thầu chi tiết và tiến độ thi công tổng thể được Chủ đầu tư phê duyệt.",
        "Biên bản nghiệm thu khối lượng hoàn thành giai đoạn hoặc Biên bản nghiệm thu bàn giao đưa vào sử dụng có chữ ký xác nhận của đại diện Chủ đầu tư, Tư vấn giám sát và đơn vị thi công.",
        "Hóa đơn điện tử (XML và PDF) đã xuất ghi nhận doanh thu khớp đúng với giá trị trên biên bản nghiệm thu.",
        "Nhật ký thi công công trình ghi nhận nhân lực, máy thi công và điều kiện thời tiết thực tế tại hiện trường công trường ở Gia Lai.",
        "Bảng tính tỷ lệ phần trăm hoàn thành công việc dựa trên khối lượng thực tế hoàn thành so với tổng khối lượng hợp đồng."
],
        accountingSteps: [
        "Bước 1: Kiểm tra việc hạch toán doanh thu chưa thực hiện hoặc doanh thu theo tiến độ kế hoạch trên TK 511 đối chiếu với số liệu xuất hóa đơn trên tờ khai thuế GTGT hàng kỳ.",
        "Bước 2: Đối chiếu số dư lũy kế Tài khoản 131 (Phải thu khách hàng) của từng công trình giao thông, thủy lợi với các biên bản đối chiếu công nợ xác nhận thực tế với Chủ đầu tư.",
        "Bước 3: Kiểm tra việc kết chuyển chi phí sản xuất kinh doanh dở dang từ Tài khoản 154 (Chi phí sản xuất kinh doanh dở dang) sang Tài khoản 632 (Giá vốn hàng bán) tương ứng với doanh thu đã ghi nhận theo VAS 14.",
        "Bước 4: Rà soát sổ cái TK 3331 (Thuế GTGT phải nộp) để đảm bảo thời điểm phát sinh nghĩa vụ thuế GTGT trùng khớp với thời điểm lập hóa đơn theo quy định tại Thông tư 219/2013/TT-BTC.",
        "Bước 5: Đối chiếu tổng doanh thu và giá vốn trên Báo cáo kết quả hoạt động kinh doanh với số liệu trên Báo cáo tài chính năm đã kiểm toán và Tờ khai quyết toán thuế TNDN."
],
        auditRisks: [
        "Rủi ro cơ quan thuế ấn định doanh thu do doanh nghiệp ghi nhận doanh thu chậm hơn thời điểm nghiệm thu thực tế trên biên bản A-B.",
        "Bẫy thuế bóc tách giá vốn (TK 632) do chi phí tập hợp trên TK 154 không tương xứng với doanh thu đã ghi nhận theo tỷ lệ hoàn thành.",
        "Phạt vi phạm quy định về xuất hóa đơn sai thời điểm theo Nghị định 125/2020/NĐ-CP với mức phạt tiền từ 4 đến 8 triệu đồng khi cơ quan thanh tra phát hiện biên bản nghiệm thu ký trước ngày xuất hóa đơn.",
        "Truy thu thuế TNDN và tính tiền chậm nộp 0.03%/ngày do kê khai thiếu doanh thu tạm tính đối với các hạng mục công trình thủy lợi đã hoàn thành nhưng kéo dài chưa xuất hóa đơn.",
        "Rủi ro đoàn thanh tra loại trừ chi phí trích trước giá vốn (TK 335) đối với các công trình giao thông chưa hoàn thành thủ tục quyết toán nhưng không có bảng kê chi tiết và biên bản xác nhận khối lượng."
],
        defenseStrategy: [
        "Lập luận rằng công ty Cổ phần Kiểu Việt tuân thủ nghiêm ngặt Chuẩn mực VAS 14, việc ghi nhận doanh thu đối với công trình xây dựng giao thông thủy lợi tại Gia Lai dựa trên cơ sở khối lượng công việc hoàn thành đã được Chủ đầu tư nghiệm thu chính thức, có sự xác nhận của tư vấn giám sát độc lập.",
        "Viện dẫn Thông tư 200/2014/TT-BTC và chuẩn mực kế toán, giải trình rõ đặc thù thi công giao thông vùng miền núi Gia Lai chịu ảnh hưởng lớn bởi thời tiết mùa mưa lũ, dẫn đến việc nghiệm thu và xuất hóa đơn phải tuân thủ đúng tiến độ thực tế được các bên thống nhất trong phụ lục hợp đồng.",
        "Đối với các khoản trích trước chi phí bảo hành công trình hoặc chi phí dở dang, doanh nghiệp cung cấp đầy đủ bảng tính định mức chi phí thực tế, biên bản hiện trạng và cam kết hoàn ứng, bảo đảm không có hiện tượng gian lận chuyển giá vốn giữa các kỳ tính thuế.",
        "Trường hợp có sự chênh lệch nhỏ về thời điểm nghiệm thu và xuất hóa đơn do thủ tục hành chính phê duyệt vốn của Chủ đầu tư nhà nước tại địa phương, doanh nghiệp lập biên bản giải trình cụ thể từng công trình kèm công văn xác nhận của Chủ đầu tư để bảo vệ quan điểm không xử phạt vi phạm hành chính về hóa đơn."
]
      },
    ]
  },

  // NHÓM 8: BẢO HIỂM XÃ HỘI & AN TOÀN LAO ĐỘNG
  {
    id: 'bhxh-phaply',
    name: 'Bảo Hiểm Xã Hội & An Toàn Lao Động',
    icon: '💼',
    color: 'cyan',
    description: 'Trần đóng BHXH 46.8tr NĐ 73, Mẫu D02-LT QĐ 595, Luật BHXH mới 41/2024, phạt BHXH NĐ 12',
    items: [
      {
        id: 'chk-nd-73-2024',
        title: 'Trần tiền lương đóng BHXH 46.8 triệu theo Lương cơ sở 2.34tr (NĐ 73/2024)',
        description: 'Kiểm tra mức đóng BHXH, BHYT của Ban giám đốc và cán bộ quản lý Kiểu Việt được áp đúng mức trần 20 lần lương cơ sở (20 x 2.340.000 = 46.800.000đ).',
        priority: 'critical',
        decreeId: 'nd-73-2024',
        articleNum: '3',
        decreeLabel: 'NĐ 73/2024 (Lương cơ sở 2.34tr)',
        phase: 1,
        documentsRequired: [
        "Quyết định của Hội đồng quản trị hoặc Giám đốc Công ty Cổ phần Kiểu Việt về việc áp dụng mức lương cơ sở mới và thang bảng lương nội bộ từ ngày 01/07/2024.",
        "Hệ thống thang bảng lương đã đăng ký và nộp cho cơ quan quản lý nhà nước về lao động tại Gia Lai.",
        "Hợp đồng lao động, phụ lục hợp đồng lao động điều chỉnh mức lương của từng cán bộ nhân viên, kỹ sư thi công và công nhân khai thác mỏ đá.",
        "Bảng thanh toán tiền lương hàng tháng có chữ ký người lao động và bảng chấm công chi tiết tại công trường, mỏ đá.",
        "Chứng từ nộp tiền bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp qua ngân hàng hàng tháng (Ủy nhiệm chi).",
        "Tờ khai tham gia, điều chỉnh thông tin BHXH, BHYT (Mẫu TK1-TS, D02-LT) gửi cơ quan BHXH."
],
        accountingSteps: [
        "Bước 1: Rà soát sổ chi tiết các tài khoản chi phí nhân công (TK 622, TK 627, TK 642) để kiểm tra việc hạch toán phần tăng thêm của tiền lương và quỹ bảo hiểm xã hội do nâng mức lương cơ sở lên 2,34 triệu đồng.",
        "Bước 2: Đối chiếu tổng quỹ tiền lương đóng bảo hiểm trên Bảng lương kế toán với số liệu trên Tờ khai quyết toán thuế thu nhập cá nhân và Báo cáo tài chính năm.",
        "Bước 3: Kiểm tra Tài khoản 3383 (Phải trả BHXH), Tài khoản 3384 (Phải trả BHYT), Tài khoản 3386 (Phải trả BHTN) để xác định số tiền bảo hiểm trích theo lương và phần trích vào chi phí doanh nghiệp.",
        "Bước 4: Đối chiếu số tiền thực tế trích đóng bảo hiểm trên sổ kế toán với thông báo kết quả đóng bảo hiểm hàng tháng (Mẫu C12-TS) do cơ quan BHXH Gia Lai phát hành.",
        "Bước 5: Kiểm tra việc áp dụng mức trần tiền lương đóng BHXH, BHYT (tối đa 20 lần mức lương cơ sở tương đương 46.800.000 đồng/tháng đối với người lao động thực hiện chế độ tiền lương do doanh nghiệp quyết định)."
],
        auditRisks: [
        "Rủi ro đoàn thanh tra lao động và bảo hiểm phát hiện doanh nghiệp chưa cập nhật mức trần tiền lương đóng BHXH mới (46.800.000 đồng) đối với các chuyên gia, kỹ sư trưởng hoặc quản lý mỏ đá có thu nhập cao.",
        "Bẫy thuế truy thu tiền đóng BHXH bắt buộc và phạt tiền chậm nộp do doanh nghiệp bóc tách thu nhập của công nhân mỏ đá thành các khoản phụ cấp không chịu thuế BHXH nhưng thực chất có tính chất tiền lương.",
        "Phạt hành chính theo Nghị định 12/2022/NĐ-CP do vi phạm quy định đóng bảo hiểm xã hội không đúng thời hạn hoặc đóng thiếu quỹ tiền lương bắt buộc.",
        "Chi phí tiền lương và phần đóng BHXH vượt trần không được trừ khi tính thuế TNDN nếu không có quyết định điều chỉnh lương hợp lệ theo quy định pháp luật."
],
        defenseStrategy: [
        "Lập luận rằng Công ty Cổ phần Kiểu Việt đã thực hiện nghiêm túc Nghị định 73/2024/NĐ-CP, áp dụng mức lương cơ sở 2,34 triệu đồng từ ngày 01/07/2024 để làm căn cứ tính toán mức trần đóng BHXH (20 x 2,34 triệu = 46,8 triệu đồng/tháng) cho đội ngũ cán bộ quản lý và kỹ sư.",
        "Giải trình trước đoàn thanh tra về cấu trúc thu nhập của công nhân thi công công trình và khai thác mỏ đá tại Gia Lai, chứng minh các khoản phụ cấp độc hại, nặng nhọc (đặc thù nghề khai thác mỏ) được chi trả minh bạch, có đầy đủ quy chế tài chính và thỏa ước lao động tập thể.",
        "Cung cấp biên bản đối chiếu số liệu đóng BHXH hàng tháng với cơ quan BHXH tỉnh Gia Lai, chứng minh không có sự chênh lệch trốn đóng hoặc chậm đóng bảo hiểm.",
        "Trường hợp có nhân sự có mức lương cao vượt trần 46,8 triệu đồng, doanh nghiệp đã tách bạch rõ ràng phần đóng BHXH kịch trần và phần thu nhập không tính đóng BHXH, tuân thủ tuyệt đối quy định tại Luật Bảo hiểm xã hội và các văn bản hướng dẫn thi hành."
]
      },
      {
        id: 'chk-qd-595-2017-bhxh',
        title: 'Đối chiếu Mẫu D02-LT cơ quan BHXH với Bảng lương kế toán (QĐ 595/BHXH)',
        description: 'Tổng tiền lương đóng BHXH trên Mẫu D02-LT phải khớp đúng với chi phí lương đóng BHXH trên sổ kế toán TK 3383, 3384, không để chênh lệch.',
        priority: 'critical',
        decreeId: 'qd-595-2017-bhxh',
        articleNum: '2',
        decreeLabel: 'QĐ 595/QĐ-BHXH (Thu BHXH)',
        phase: 1,
        documentsRequired: [
        "Bảng kê khai thông tin tăng giảm lao động và quỹ tiền lương đóng BHXH, BHYT, BHTN hàng tháng (Mẫu D02-LT).",
        "Bảng lương chi tiết từng bộ phận: văn phòng, đội ngũ thi công công trình giao thông thủy lợi, và công nhân vận hành trạm nghiền, khai thác mỏ đá tại Gia Lai.",
        "Sổ chi tiết các tài khoản chi phí nhân công (TK 621, 622, 627, 642) và tài khoản công nợ phải trả người lao động (TK 334).",
        "Ủy nhiệm chi chuyển khoản nộp tiền bảo hiểm hàng tháng cho cơ quan BHXH và giấy nộp tiền vào ngân sách nhà nước (nếu có).",
        "Danh sách cấp phát thẻ bảo hiểm y tế và sổ bảo hiểm xã hội của người lao động tại công ty.",
        "Hồ sơ tuyển dụng, quyết định thôi việc, chấm dứt hợp đồng lao động của các nhân sự biến động trong kỳ kiểm tra."
],
        accountingSteps: [
        "Bước 1: Lập bảng đối chiếu chéo (Cross-check) tổng quỹ lương chịu thuế thu nhập cá nhân, quỹ lương đóng bảo hiểm trên Mẫu D02-LT với tổng chi phí tiền lương hạch toán trên sổ kế toán (TK 334, TK 622, TK 627, TK 642).",
        "Bước 2: Kiểm tra số dư cuối kỳ của Tài khoản 3383, 3384, 3386 để đảm bảo số tiền trích nộp bảo hiểm phản ánh đúng nghĩa vụ phải trả cơ quan BHXH.",
        "Bước 3: Rà soát kỹ các trường hợp lao động thời vụ, lao động ngắn hạn tại công trường xây dựng thủy lợi xem có thuộc đối tượng phải tham gia BHXH bắt buộc theo quy định tại QĐ 595 hay không.",
        "Bước 4: Kiểm tra chứng từ chi trả tiền lương qua tài khoản ngân hàng (Ủy nhiệm chi) cho người lao động, đối chiếu khớp đúng với bảng lương và danh sách đóng bảo hiểm.",
        "Bước 5: Rà soát các bút toán điều chỉnh hồi tố tiền lương, tiền bảo hiểm (nếu có) và kiểm tra việc phân bổ chi phí nhân công vào giá thành công trình hoặc chi phí quản lý doanh nghiệp."
],
        auditRisks: [
        "Rủi ro lớn nhất là sự lệch số liệu giữa quỹ lương khai báo đóng BHXH trên Mẫu D02-LT và quỹ lương hạch toán trên sổ kế toán, dẫn đến nghi vấn trốn đóng bảo hiểm hoặc khai gian chi phí để giảm thuế TNDN.",
        "Bẫy đoàn thanh tra bóc tách chi phí lương của công nhân khai thác mỏ đá không có hợp đồng lao động dài hạn hoặc thiếu chứng minh nhân dân/căn cước công dân.",
        "Phạt vi phạm hành chính do chậm nộp tiền bảo hiểm xã hội theo quy định tại Quyết định 595 và các văn bản liên quan, phát sinh tiền lãi chậm đóng.",
        "Cơ quan thuế loại trừ chi phí tiền lương khỏi chi phí được trừ khi quyết toán thuế TNDN nếu phát hiện chi phí lương không đi kèm chứng từ thanh toán qua ngân hàng theo quy định."
],
        defenseStrategy: [
        "Giải trình tường tận với đoàn thanh tra liên ngành rằng mọi chênh lệch nhỏ giữa Mẫu D02-LT và sổ kế toán (nếu có) là do thời điểm chốt số liệu điều chỉnh tăng giảm lao động vào cuối tháng của bộ phận nhân sự và kế toán.",
        "Cung cấp đầy đủ hồ sơ lao động, hợp đồng mùa vụ ngắn hạn đối với lao động phụ phục vụ thi công công trình giao thông tại vùng sâu vùng xa ở Gia Lai, chứng minh công ty tuân thủ đúng quy định về đối tượng tham gia BHXH bắt buộc.",
        "Xuất trình toàn bộ ủy nhiệm chi thanh toán lương qua ngân hàng cho 100% cán bộ công nhân viên, kèm theo bảng đối chiếu quỹ lương có xác nhận của ngân hàng thương mại.",
        "Viện dẫn các văn bản hướng dẫn thực hiện QĐ 595 để bảo vệ quan điểm hạch toán chi phí hợp lý, hợp lệ đối với khoản đóng bảo hiểm thuộc trách nhiệm của người sử dụng lao động, khẳng định Công ty Cổ phần Kiểu Việt không có hành vi gian lận trốn đóng bảo hiểm xã hội."
]
      },
      {
        id: 'chk-luat-41-2024',
        title: 'Cập nhật quy định đóng BHXH bắt buộc theo Luật BHXH mới (Luật 41/2024)',
        description: 'Chuẩn bị hồ sơ lao động theo quy định mở rộng đối tượng tham gia BHXH bắt buộc của Luật BHXH 41/2024 có hiệu lực từ 01/07/2025.',
        priority: 'recommended',
        decreeId: 'luat-41-2024',
        articleNum: '2',
        decreeLabel: 'Luật BHXH 41/2024 (Mới)',
        phase: 2,
        documentsRequired: [
        "Quy chế nội bộ, quy chế tài chính và thỏa ước lao động tập thể của Công ty Cổ phần Kiểu Việt đã được sửa đổi, bổ sung cập nhật Luật BHXH 41/2024/QH15.",
        "Hợp đồng lao động ký kết với người lao động nước ngoài, lao động làm việc không trọn thời gian tại các mỏ đá và công trường xây lắp.",
        "Bảng rà soát danh sách toàn bộ lao động đang làm việc tại doanh nghiệp để phân loại đối tượng thuộc diện đóng BHXH bắt buộc theo quy định mới.",
        "Tờ khai đăng ký tham gia BHXH bắt buộc điều chỉnh theo quy định mới gửi cơ quan BHXH.",
        "Chứng từ nộp bảo hiểm xã hội hàng tháng qua ngân hàng.",
        "Biên bản họp hội đồng quản trị hoặc ban giám đốc về lộ trình triển khai các quy định mới của Luật BHXH 41/2024."
],
        accountingSteps: [
        "Bước 1: Kiểm tra việc thiết lập hệ thống tài khoản kế toán và mã chi phí để sẵn sàng tách bạch các khoản thu nhập làm căn cứ đóng BHXH bắt buộc theo quy định mở rộng của Luật BHXH 41/2024.",
        "Bước 2: Rà soát sổ chi tiết TK 334 và TK 338 để đảm bảo các khoản phụ cấp mới phải tính đóng bảo hiểm được cập nhật chính xác vào phần mềm kế toán.",
        "Bước 3: Đối chiếu số liệu trích lập chi phí bảo hiểm (vào TK 622, TK 627, TK 642) với tỷ lệ đóng mới theo quy định của Luật BHXH số 41/2024/QH15.",
        "Bước 4: Kiểm tra việc trích lập dự phòng phải trả đối với các nghĩa vụ bảo hiểm phát sinh trong kỳ kế toán.",
        "Bước 5: Đối chiếu báo cáo tình hình sử dụng lao động và trích nộp bảo hiểm với các chỉ tiêu trên Báo cáo tài chính giữa niên độ và báo cáo năm."
],
        auditRisks: [
        "Rủi ro doanh nghiệp bị phạt vi phạm hành chính do chậm trễ trong việc cập nhật danh sách đối tượng phải tham gia BHXH bắt buộc theo diện mở rộng của Luật BHXH 41/2024.",
        "Bẫy thuế và bảo hiểm khi đoàn thanh tra phát hiện doanh nghiệp lách luật bằng cách ký hợp đồng dịch vụ hoặc hợp đồng khoán việc với công nhân khai thác mỏ đá để né tránh nghĩa vụ đóng BHXH bắt buộc.",
        "Truy thu số tiền bảo hiểm chưa đóng đối với nhóm lao động làm việc không trọn thời gian hoặc lao động nước ngoài làm việc tại công trường giao thông.",
        "Rủi ro suất chi phí nhân công tăng cao đột biến làm ảnh hưởng đến giá vốn công trình, gây bất lợi khi quyết toán thuế TNDN nếu không có giải trình định mức hợp lý."
],
        defenseStrategy: [
        "Khẳng định Công ty Cổ phần Kiểu Việt luôn chủ động nghiên cứu và cập nhật kịp thời các quy định mới của Luật Bảo hiểm xã hội số 41/2024/QH15, tiến hành rà soát toàn bộ hợp đồng lao động của công nhân mỏ đá và kỹ sư xây dựng.",
        "Giải trình rõ ràng về đặc thù công việc thi công xây lắp và khai khoáng tại Gia Lai có sử dụng một phần lao động thời vụ, thời gian làm việc linh hoạt; công ty đã thực hiện ký kết hợp đồng và tham gia bảo hiểm đúng theo ngưỡng thời gian và mức lương quy định tại Luật mới.",
        "Cung cấp hệ thống quy chế lương thưởng minh bạch, chứng minh các khoản thu nhập của người lao động được phân định rạch ròi giữa tiền lương chính và các khoản trợ cấp không thuộc diện phải đóng BHXH.",
        "Lập luận sắc bén viện dẫn các điều khoản chuyển tiếp của Luật BHXH 41/2024, chứng minh doanh nghiệp đã có lộ trình tuân thủ đầy đủ, không có hành vi né tránh, trốn đóng bảo hiểm xã hội bắt buộc."
]
      },
      {
        id: 'chk-nd-12-2022',
        title: 'Khung xử phạt trốn đóng, chậm nộp BHXH & ATLĐ mỏ đá (NĐ 12/2022)',
        description: 'Nắm vững khung phạt chậm nộp BHXH (phạt 12-15% tổng số tiền chậm đóng); đảm bảo an toàn nổ mìn và bảo hộ lao động công nhân mỏ đá.',
        priority: 'important',
        decreeId: 'nd-12-2022',
        articleNum: '38',
        decreeLabel: 'NĐ 12/2022 (Xử phạt BHXH, Lao động)',
        phase: 3,
        documentsRequired: [
        "Hồ sơ huấn luyện an toàn, vệ sinh lao động cho 100% cán bộ công nhân viên, thợ mỏ khai thác đá và công nhân thi công công trình giao thông thủy lợi tại Gia Lai.",
        "Biên bản kiểm định kỹ thuật an toàn đối với các loại máy móc, thiết bị có yêu cầu nghiêm ngặt về an toàn lao động (cần cẩu, máy xúc, xe lu, trạm nghiền đá, hệ thống bơm nước thủy lợi).",
        "Sổ theo dõi cấp phát phương tiện bảo vệ cá nhân (quần áo bảo hộ, giày, mũ, kính, dây an toàn) cho người lao động.",
        "Hồ sơ khám sức khỏe định kỳ cho người lao động và hồ sơ đo đạc môi trường lao động tại mỏ đá.",
        "Báo cáo đánh giá rủi ro an toàn vệ sinh lao động tại nơi làm việc và phương án xử lý sự cố khẩn cấp.",
        "Biên bản xử lý vi phạm nội quy an toàn lao động (nếu có) và chứng từ nộp tiền phạt vi phạm hành chính (nếu cơ quan nhà nước từng lập biên bản)."
],
        accountingSteps: [
        "Bước 1: Kiểm tra chi phí mua sắm trang thiết bị an toàn lao động, chi phí kiểm định máy móc thiết bị trên sổ chi tiết Tài khoản 627, Tài khoản 642 và Tài khoản 241 (XDCB dở dang đối với máy móc lắp đặt tại mỏ đá).",
        "Bước 2: Kiểm tra việc trích khấu hao tài sản cố định (TK 214 đối ứng TK 211) đối với hệ thống máy móc khai thác mỏ đá và thiết bị thi công, đảm bảo máy móc hoạt động có đầy đủ kiểm định an toàn làm căn cứ tính chi phí hợp lý.",
        "Bước 3: Rà soát các khoản chi phạt vi phạm hành chính về lao động, an toàn lao động hoặc chậm nộp bảo hiểm (nếu có) để hạch toán vào Tài khoản 811 (Chi phí khác) và loại trừ ngay khi quyết toán thuế TNDN.",
        "Bước 4: Đối chiếu số dư Tài khoản 3388 (Phải trả khác) về các khoản phạt hoặc quỹ bảo hiểm xã hội chậm nộp.",
        "Bước 5: Kiểm tra chứng từ chi tiền mặt hoặc chuyển khoản liên quan đến việc bồi thường tai nạn lao động hoặc chi phí chăm sóc sức khỏe cho người lao động."
],
        auditRisks: [
        "Rủi ro lớn nhất là đoàn thanh tra lao động áp dụng mức xử phạt tiền rất cao theo Nghị định 12/2022/NĐ-CP khi phát hiện mỏ đá hoặc công trường xây dựng không có đầy đủ hồ sơ huấn luyện an toàn lao động hoặc thiết bị chưa kiểm định.",
        "Bẫy thuế bóc tách toàn bộ chi phí khấu hao máy móc thiết bị khai thác mỏ và chi phí nhân công nếu để xảy ra sự cố tai nạn lao động do không tuân thủ nghiêm ngặt quy định an toàn.",
        "Phạt hành chính nặng đối với hành vi chậm nộp, trốn đóng bảo hiểm xã hội bắt buộc theo đúng khung hình phạt tại Điều 38 Nghị định 12/2022/NĐ-CP.",
        "Cơ quan thuế loại trừ các khoản chi phí liên quan đến an toàn lao động nhưng không có hóa đơn chứng từ hợp pháp hoặc không có danh sách ký nhận của người lao động."
],
        defenseStrategy: [
        "Trình bày rõ ràng rằng Công ty Cổ phần Kiểu Việt đặt tiêu chí an toàn lao động lên hàng đầu trong hoạt động khai thác mỏ đá và thi công giao thông thủy lợi nguy hiểm tại địa bàn Gia Lai; xuất trình đầy đủ giấy chứng nhận huấn luyện an toàn lao động cho 100% nhân sự.",
        "Cung cấp toàn bộ hồ sơ kiểm định kỹ thuật an toàn định kỳ còn hiệu lực đối với các thiết bị khai thác mỏ, trạm nghiền đá và xe máy thi công, chứng minh không có vi phạm về thiết bị không đạt chuẩn.",
        "Xuất trình sổ sách kho và ký nhận thực tế về việc phát cấp đầy đủ phương tiện bảo vệ cá nhân, trang thiết bị phòng hộ cho công nhân mỏ đá, vô hiệu hóa mọi cáo buộc vi phạm điều kiện lao động.",
        "Viện dẫn các biên bản kiểm tra nội bộ về an toàn vệ sinh lao động, khẳng định doanh nghiệp tuân thủ nghiêm ngặt Nghị định 12/2022/NĐ-CP, duy trì môi trường làm việc an toàn, loại trừ mọi rủi ro bị phạt hành chính hoặc bị bóc tách chi phí khi thanh tra thuế và lao động."
]
      },
    ]
  }
];

// ===== 15 CÂU HỎI TỰ ĐÁNH GIÁ RỦI RO =====

export const RISK_QUESTIONS: RiskQuestion[] = [
  {
    id: 'rq-01',
    question: 'Doanh thu kê khai GTGT và doanh thu quyết toán TNDN có chênh lệch > 5% không?',
    weight: 5,
    decreeId: 'luat-quan-ly-thue-2019',
    decreeTitle: 'Luật Quản lý thuế số 38/2019/QH14',
    articleNum: '42',
    articleRef: 'Điều 42 & Điều 47 (Nguyên tắc khai thuế, tính thuế)',
    legalQuote: 'Điều 42 Khoản 1 Luật Quản lý thuế 38/2019/QH14: "Người nộp thuế phải khai chính xác, trung thực, đầy đủ các nội dung trong tờ khai thuế theo mẫu do Bộ trưởng Bộ Tài chính quy định và nộp đủ các chứng từ, tài liệu quy định trong hồ sơ khai thuế với cơ quan quản lý thuế." Đối chiếu thời điểm xác định doanh thu GTGT (Điều 8 Thông tư 219/2013/TT-BTC) và doanh thu TNDN (Điều 5 Thông tư 78/2014/TT-BTC & Thông tư 96/2015/TT-BTC).',
    riskAnalysis: 'Cơ quan thuế dùng phần mềm rà soát tự động đối chiếu tổng doanh thu trên 4 Tờ khai 01/GTGT (Chỉ tiêu [34]) với Chỉ tiêu [01] trên Phụ lục kết quả HĐKD 03-1A/TNDN và Doanh thu trên Báo cáo kết quả hoạt động kinh doanh (Mẫu B02-DN). Khi độ lệch vượt quá 5%, hệ thống tự động gắn cờ rủi ro cao loại 1, đưa doanh nghiệp vào danh sách kiểm tra trọng điểm. Các nguyên nhân phổ biến: Doanh thu công trình xây dựng chưa nghiệm thu nhưng đã xuất hóa đơn; doanh thu tài chính (TK 515) không chịu GTGT; bán phế liệu, thanh lý tài sản chưa vào chỉ tiêu GTGT; hoặc các khoản giảm trừ doanh thu (TK 521).',
    penaltyFramework: 'Nếu chênh lệch dẫn đến thiếu thuế TNDN hoặc GTGT: Phạt 20% trên số tiền thuế khai thiếu (Điều 16 Nghị định 125/2020/NĐ-CP) cộng tiền chậm nộp 0,03%/ngày tính trên số tiền thuế chậm nộp (Điều 59 Luật Quản lý thuế 2019). Trường hợp trốn thuế: Phạt từ 1 đến 3 lần số thuế trốn (Điều 17 NĐ 125/2020).',
    defenseDocuments: [
      'Bảng điều hòa đối chiếu doanh thu GTGT và doanh thu TNDN cả năm (Mẫu nội bộ giải trình chi tiết từng nguyên nhân chênh lệch)',
      'Hợp đồng xây dựng, Biên bản nghiệm thu A-B theo giai đoạn và hóa đơn GTGT tương ứng cho các công trình thi công dở dang',
      'Sổ cái TK 511, TK 515, TK 711, TK 521 và Bảng kê hóa đơn GTGT đầu ra (Mẫu 01-1/GTGT)',
      'Tờ khai quyết toán thuế TNDN (Mẫu 03/TNDN) kèm Báo cáo tài chính năm đã nộp cho CQT'
    ],
    tip: 'Lập ngay Bảng điều hòa giải trình chi tiết nguyên nhân chênh lệch; nếu phát hiện sót doanh thu phải nộp tờ khai bổ sung Mẫu 01/KHBS trước khi có quyết định thanh tra.'
  },
  {
    id: 'rq-02',
    question: 'Có hóa đơn đầu vào > 20 triệu thanh toán bằng tiền mặt không?',
    weight: 5,
    decreeId: 'tt-219-2013',
    decreeTitle: 'Thông tư 219/2013/TT-BTC hướng dẫn Luật Thuế GTGT',
    articleNum: '15',
    articleRef: 'Điều 15 Khoản 2 (sửa đổi bởi TT 173/2016/TT-BTC & TT 96/2015/TT-BTC)',
    legalQuote: 'Điều 15 Khoản 2 Thông tư 219/2013/TT-BTC: "Có chứng từ thanh toán không dùng tiền mặt đối với hàng hóa, dịch vụ mua vào (bao gồm cả hàng hóa nhập khẩu) từ hai mươi triệu đồng trở lên, trừ... trường hợp hàng hóa, dịch vụ mua từng lần có giá trị dưới hai mươi triệu đồng theo giá đã có thuế GTGT." Trường hợp mua của một người bán nhiều lần trong cùng một ngày có tổng trị giá từ 20 triệu đồng trở lên thì chỉ được khấu trừ khi có chứng từ không dùng tiền mặt.',
    riskAnalysis: 'Đoàn thanh tra lọc toàn bộ sổ chi tiết TK 111 (Tiền mặt) đối ứng với TK 331, TK 152, TK 156, TK 642, TK 627 và TK 1331. Mọi hóa đơn từ 20 triệu đồng (đã gồm thuế GTGT) hoặc mua cùng một nhà cung cấp trong 1 ngày cộng dồn >= 20 triệu thanh toán tiền mặt sẽ bị bóc tách toàn bộ: Vừa bị loại khấu trừ thuế GTGT đầu vào, vừa bị loại khỏi chi phí được trừ khi tính thuế TNDN.',
    penaltyFramework: 'Truy thu 10% thuế GTGT đã khấu trừ sai + Truy thu 20% thuế TNDN tương ứng với chi phí bị bóc tách + Phạt 20% trên tổng số thuế truy thu (Điều 16 NĐ 125/2020) + Tiền chậm nộp 0,03%/ngày (Điều 59 Luật QLT 2019).',
    defenseDocuments: [
      'Giấy báo Nợ, Ủy nhiệm chi (UNC) và Sổ phụ ngân hàng xác nhận giao dịch qua tài khoản ngân hàng của DN (TK 112)',
      'Biên bản bù trừ công nợ 3 bên hợp pháp (nếu có thanh toán bù trừ, phải có điều khoản quy định rõ trong hợp đồng)',
      'Hợp đồng mua bán, biên bản giao nhận hàng hóa và hóa đơn điện tử tra cứu hợp lệ',
      'Nếu lỡ thanh toán tiền mặt: Lập tờ khai bổ sung mẫu 01/KHBS điều chỉnh giảm thuế GTGT đầu vào và điều chỉnh tăng chỉ tiêu B4 trên quyết toán TNDN trước khi CQT công bố quyết định kiểm tra.'
    ],
    tip: 'Chuyển đổi sang thanh toán qua ngân hàng trước ngày kiểm tra. Nếu đã trả tiền mặt, khẩn trương lập hồ sơ điều chỉnh giảm khấu trừ GTGT và loại chi phí TNDN để tránh phạt 20%.'
  },
  {
    id: 'rq-03',
    question: 'Tổng tạm nộp thuế TNDN 4 quý có < 80% số quyết toán cả năm không?',
    weight: 5,
    decreeId: 'nd-126-2020',
    decreeTitle: 'Nghị định 126/2020/NĐ-CP hướng dẫn chi tiết Luật Quản lý thuế',
    articleNum: '8',
    articleRef: 'Điều 8 Khoản 6 Điểm b (sửa đổi bởi Nghị định 91/2022/NĐ-CP)',
    legalQuote: 'Điều 8 Khoản 6 Điểm b Nghị định 126/2020/NĐ-CP (sửa đổi bởi NĐ 91/2022/NĐ-CP): "Tổng số thuế thu nhập doanh nghiệp đã tạm nộp của 04 quý không được thấp hơn 80% số thuế thu nhập doanh nghiệp phải nộp theo quyết toán năm... Trường hợp người nộp thuế nộp thiếu so với số thuế phải tạm nộp 04 quý thì phải nộp tiền chậm nộp tính trên số thuế nộp thiếu kể từ ngày tiếp sau ngày cuối cùng của thời hạn tạm nộp thuế thu nhập doanh nghiệp quý 04 đến ngày nộp số thuế còn thiếu vào ngân sách nhà nước."',
    riskAnalysis: 'Thời hạn nộp tạm tính thuế TNDN quý 4 là ngày 31/01 năm dương lịch tiếp theo. Cơ quan thuế tự động tính chênh lệch giữa: (Thuế TNDN tạm nộp Q1 + Q2 + Q3 + Q4) so với 80% của [Chỉ tiêu G trên Tờ khai 03/TNDN]. Nếu số đã nộp < 80%, hệ thống tự động sinh thông báo tiền chậm nộp tiền thuế từ ngày 01/02 đến ngày người nộp thuế thực nộp tiền vào NSNN.',
    penaltyFramework: 'Tính tiền chậm nộp 0,03%/ngày trên số tiền thuế nộp thiếu so với mốc 80% (Điều 59 Luật Quản lý thuế số 38/2019/QH14). Không bị phạt 20% nếu đã tự giác nộp đủ trước khi có kết luận thanh tra, nhưng tiền chậm nộp là bắt buộc không thể miễn trừ.',
    defenseDocuments: [
      'Giấy nộp tiền vào Ngân sách Nhà nước (các món tạm nộp Q1, Q2, Q3, Q4) trên Cổng Dịch vụ công hoặc qua eTax',
      'Bảng tính tỷ lệ 80% tạm nộp so với quyết toán năm và lịch sử nộp tiền thực tế',
      'Sổ cái TK 3334 (Thuế TNDN) và TK 112 (Tiền gửi ngân hàng)',
      'Biên bản đối chiếu nghĩa vụ thuế điện tử trên Cổng eTax tại thời điểm 31/01 và 31/03'
    ],
    tip: 'Nộp bổ sung ngay số thuế TNDN còn thiếu so với ngưỡng 80% để cắt tiền chậm nộp 0.03%/ngày phát sinh từng ngày.'
  },
  {
    id: 'rq-04',
    question: 'Có giao dịch liên kết nhưng chưa lập/nộp hồ sơ xác định giá (NĐ 132) không?',
    weight: 4,
    decreeId: 'nd-132-2020',
    decreeTitle: 'Nghị định 132/2020/NĐ-CP quản lý thuế giao dịch liên kết',
    articleNum: '18',
    articleRef: 'Điều 18 & Điều 19 (Quy định lập và nộp hồ sơ GDLK)',
    legalQuote: 'Điều 18 Nghị định 132/2020/NĐ-CP: "Người nộp thuế có giao dịch liên kết thuộc phạm vi điều chỉnh tại Nghị định này có trách nhiệm kê khai thông tin về quan hệ liên kết và giao dịch liên kết theo Mẫu số 01, Mẫu số 02, Mẫu số 03, Mẫu số 04 tại Phụ lục ban hành kèm theo Nghị định này và nộp cùng Tờ khai quyết toán thuế thu nhập doanh nghiệp." Thời hạn nộp hồ sơ xác định giá giao dịch liên kết là thời hạn nộp hồ sơ quyết toán thuế TNDN.',
    riskAnalysis: 'DN có vay vốn cá nhân điều hành (Giám đốc, thành viên HĐQT) hoặc vay ngân hàng vượt 25% vốn góp chủ sở hữu và chiếm trên 50% tổng dư nợ (Điều 5 Điểm d NĐ 132/2020) mặc nhiên là bên liên kết. Rất nhiều DN vừa và nhỏ bỏ qua việc tích chọn và nộp Phụ lục Mẫu 01 kèm quyết toán TNDN. Khi bị thanh tra, CQT sẽ ấn định thuế và bác bỏ toàn bộ chi phí lãi vay vượt trần 30% EBITDA.',
    penaltyFramework: 'Phạt từ 8.000.000đ đến 15.000.000đ về hành vi không lập/không nộp hồ sơ giao dịch liên kết (Điều 13 NĐ 125/2020). Bị CQT ấn định thuế theo Điều 50 Luật QLT 2019 và bóc tách toàn bộ phần lãi vay vượt mức 30% EBITDA (Điều 16 NĐ 132/2020).',
    defenseDocuments: [
      'Phụ lục thông tin về quan hệ liên kết và giao dịch liên kết (Mẫu 01/NĐ-132) đã nộp qua mạng',
      'Hồ sơ quốc gia (Local file), Báo cáo nghiên cứu so sánh Benchmark xác định biên độ giá thị trường',
      'Hợp đồng vay vốn, phụ lục khế ước nhận nợ, bảng tính lãi vay và phân tích EBITDA thực tế',
      'Rà soát điều kiện miễn trừ lập Hồ sơ xác định giá giao dịch liên kết theo Điều 19 NĐ 132/2020 (Doanh thu < 50 tỷ và tổng giá trị GDLK < 30 tỷ)'
    ],
    tip: 'Lập và nộp bổ sung Phụ lục Mẫu 01/NĐ-132 ngay cùng hồ sơ quyết toán TNDN; kiểm tra trần lãi vay 30% EBITDA để chuẩn bị phương án giải trình.'
  },
  {
    id: 'rq-05',
    question: 'Có chi phí không có hóa đơn hoặc hóa đơn bất hợp pháp không?',
    weight: 5,
    decreeId: 'nd-125-2020',
    decreeTitle: 'Nghị định 125/2020/NĐ-CP xử phạt vi phạm hành chính về thuế, hóa đơn',
    articleNum: '24',
    articleRef: 'Điều 24, 25, 28, 29 & Điều 16, 17',
    legalQuote: 'Điều 4 Nghị định 125/2020/NĐ-CP: "Sử dụng hóa đơn bất hợp pháp, sử dụng không hợp pháp hóa đơn gồm: Hóa đơn giả; hóa đơn chưa có giá trị sử dụng, hết giá trị sử dụng; hóa đơn bị ngừng sử dụng trong thời gian bị cưỡng chế... hóa đơn có nội dung được ghi không có thực một phần hoặc toàn bộ hàng hóa, dịch vụ." Kết hợp Điều 6 Thông tư 78/2014/TT-BTC và Điều 4 Thông tư 96/2015/TT-BTC về các khoản chi phí không được trừ.',
    riskAnalysis: 'CQT sử dụng Trí tuệ nhân tạo (AI) và cơ sở dữ liệu Big Data hóa đơn điện tử toàn quốc để quét tự động chuỗi F1, F2, F3 của các DN có dấu hiệu rủi ro hóa đơn cao hoặc DN đã bỏ trốn khỏi địa chỉ kinh doanh. Nếu DN mua hàng của các DN này, CQT sẽ gửi công văn Mẫu 01/TB-HĐ yêu cầu giải trình tính có thực của giao dịch (hàng hóa đi đường nào, ai vận chuyển, cân xe, kho bãi ở đâu).',
    penaltyFramework: 'Hành vi sử dụng hóa đơn không hợp pháp để hạch toán chi phí: Phạt từ 1 đến 3 lần số thuế trốn (Điều 17 NĐ 125/2020) hoặc phạt từ 20.000.000đ đến 50.000.000đ (Điều 28 NĐ 125/2020). Nếu số thuế trốn từ 100 triệu đồng trở lên có thể bị chuyển hồ sơ sang Cơ quan Cảnh sát Điều tra hình sự theo Điều 200 Bộ luật Hình sự 2015.',
    defenseDocuments: [
      'Hồ sơ chứng minh tính có thực của giao dịch: Hợp đồng mua bán, Biên bản nghiệm thu/giao nhận hàng tại kho, Phiếu cân xe',
      'Chứng từ vận chuyển, thông tin tài xế, biển số xe chở vật tư (đá, cát, xi măng, gỗ)',
      'Chứng từ thanh toán qua ngân hàng đúng tài khoản đăng ký của nhà cung cấp',
      'Ảnh chụp hiện trường sử dụng vật tư vào công trình xây lắp hoặc quy trình gia công xưởng mộc',
      'Biên bản tra cứu tình trạng người bán trên trang hoadondientu.gdt.gov.vn tại thời điểm lập hóa đơn'
    ],
    tip: 'Loại bỏ ngay các khoản chi phí không có hóa đơn hợp lệ ra khỏi chi phí được trừ khi quyết toán TNDN (chỉ tiêu B4); rà soát kỹ nguồn gốc vật tư trên trang hóa đơn điện tử.'
  },
  {
    id: 'rq-06',
    question: 'Có khấu hao TSCĐ vượt khung hoặc sai phương pháp đăng ký không?',
    weight: 4,
    decreeId: 'tt-45-2013',
    decreeTitle: 'Thông tư 45/2013/TT-BTC hướng dẫn chế độ trích khấu hao TSCĐ',
    articleNum: '10',
    articleRef: 'Điều 10 & Khung khấu hao Phụ lục 1',
    legalQuote: 'Điều 10 Khoản 3 Thông tư 45/2013/TT-BTC: "Doanh nghiệp tự quyết định phương pháp trích khấu hao, thời gian trích khấu hao TSCĐ theo quy định tại Thông tư này và thông báo với cơ quan thuế trực tiếp quản lý trước khi bắt đầu thực hiện." Khung thời gian trích khấu hao các loại tài sản cố định quy định cụ thể tại Phụ lục 1 ban hành kèm theo Thông tư 45/2013/TT-BTC.',
    riskAnalysis: 'Thanh tra viên soi kỹ các TSCĐ lớn: Trạm trộn bê tông, xe bồn bê tông, máy xúc mỏ đá, dây chuyền xưởng mộc Phú Tài, nhà xưởng kho bãi. Lỗi thường gặp: Khấu hao nhanh không đủ điều kiện theo luật; trích thời gian khấu hao ngắn hơn mức tối thiểu quy định tại Phụ lục 1 TT 45 (nhằm tăng chi phí năm có lãi); hoặc thay đổi phương pháp trích khấu hao mà không đăng ký/thông báo với cơ quan thuế.',
    penaltyFramework: 'Loại toàn bộ phần chi phí khấu hao vượt khung ra khỏi chi phí được trừ khi xác định thu nhập chịu thuế TNDN (Điều 4 Thông tư 96/2015/TT-BTC). Truy thu 20% thuế TNDN tương ứng + Phạt 20% trên số thuế khai thiếu + Tiền chậm nộp 0,03%/ngày.',
    defenseDocuments: [
      'Bảng đăng ký phương pháp trích khấu hao TSCĐ đã gửi Cơ quan thuế trực tiếp quản lý',
      'Thẻ tài sản cố định, Bảng tính và phân bổ khấu hao TSCĐ chi tiết 12 tháng của từng năm',
      'Hóa đơn mua, Hợp đồng, Biên bản bàn giao đưa tài sản vào sử dụng, Hồ sơ đăng kiểm phương tiện (xe bồn, máy ủi)',
      'Biên bản đánh giá lại TSCĐ hoặc dự toán chi phí sửa chữa nâng cấp lớn làm tăng nguyên giá TSCĐ'
    ],
    tip: 'Rà soát bảng tính khấu hao 12 tháng, đối chiếu từng máy móc với khung Phụ lục 1 TT 45; điều chỉnh phần khấu hao vượt khung vào chỉ tiêu B4 trên tờ khai quyết toán TNDN.'
  },
  {
    id: 'rq-07',
    question: 'Lương NLĐ trên HĐLĐ có thấp hơn mức tối thiểu vùng không?',
    weight: 3,
    decreeId: 'nd-293-2025',
    decreeTitle: 'Nghị định 293/2025/NĐ-CP quy định mức lương tối thiểu vùng năm 2026',
    articleNum: '3',
    articleRef: 'Điều 3 & Điều 4 (Hiệu lực thi hành)',
    legalQuote: 'Điều 3 Nghị định 293/2025/NĐ-CP: Quy định mức lương tối thiểu tháng và mức lương tối thiểu giờ áp dụng đối với người lao động làm việc theo hợp đồng lao động tại các vùng I, II, III, IV. Nghiêm cấm trả lương cho người lao động làm công việc giản đơn nhất trong điều kiện lao động bình thường thấp hơn mức lương tối thiểu vùng.',
    riskAnalysis: 'Tại địa bàn tỉnh Gia Lai (thành phố Pleiku vùng III; các huyện còn lại vùng IV), đoàn kiểm tra liên ngành Thuế - BHXH - Lao động sẽ rà soát Hợp đồng lao động, Bảng lương và Tờ khai quyết toán thuế TNCN (Mẫu 05/QTT-TNCN). Nếu mức lương cơ bản trên HĐLĐ thấp hơn mức tối thiểu vùng, DN vi phạm pháp luật lao động, dẫn đến nguy cơ bị bóc tách chi phí tiền lương do không đúng quy định pháp luật.',
    penaltyFramework: 'Phạt tiền từ 20.000.000đ đến 75.000.000đ đối với người sử dụng lao động trả lương thấp hơn mức lương tối thiểu vùng (Điều 17 Nghị định 12/2022/NĐ-CP). Buộc trả đủ tiền lương cộng thêm khoản tiền lãi của số tiền trả thiếu cho người lao động.',
    defenseDocuments: [
      'Hệ thống Thang lương, Bảng lương và Quy chế trả lương, thưởng nội bộ của Công ty Kiểu Việt',
      'Hợp đồng lao động chính thức và các Phụ lục điều chỉnh mức lương theo đúng lộ trình tăng lương tối thiểu vùng',
      'Bảng chấm công, Bảng thanh toán tiền lương có chữ ký NLĐ hoặc chứng từ chuyển khoản ngân hàng',
      'Thỏa ước lao động tập thể đã đăng ký với Sở LĐTBXH địa phương'
    ],
    tip: 'Lập ngay phụ lục HĐLĐ điều chỉnh mức lương cơ bản cho các lao động thấp hơn ngưỡng tối thiểu vùng; truy nộp bổ sung BHXH nếu có chênh lệch.'
  },
  {
    id: 'rq-08',
    question: 'Có nợ BHXH quá 30 ngày không?',
    weight: 3,
    decreeId: 'nd-12-2022',
    decreeTitle: 'Nghị định 12/2022/NĐ-CP xử phạt vi phạm hành chính lĩnh vực lao động, BHXH',
    articleNum: '39',
    articleRef: 'Điều 39 Khoản 4 & Điều 40',
    legalQuote: 'Điều 39 Khoản 4 Nghị định 12/2022/NĐ-CP: Phạt tiền từ 12% đến 15% tổng số tiền phải đóng bảo hiểm xã hội bắt buộc, bảo hiểm thất nghiệp tại thời điểm lập biên bản vi phạm hành chính nhưng tối đa không quá 75.000.000 đồng đối với người sử dụng lao động có hành vi: Chậm đóng bảo hiểm xã hội bắt buộc, bảo hiểm thất nghiệp; Đóng không đủ số người thuộc diện tham gia.',
    riskAnalysis: 'Cơ chế trao đổi thông tin điện tử tự động giữa Cơ quan Thuế và Cơ quan BHXH (theo Quy chế phối hợp liên ngành) cho phép cơ quan thuế nắm rõ danh sách lao động quyết toán thuế TNCN nhưng không tham gia BHXH bắt buộc hoặc tình trạng nợ đọng BHXH của DN. Khi thanh tra, cơ quan thuế sẽ đặt dấu hỏi lớn về tính hợp lý của chi phí trích theo lương (TK 3383, 3384, 3386).',
    penaltyFramework: 'Phạt hành chính từ 12% đến 15% số tiền chậm đóng (tối đa 75 triệu đồng) + Buộc nộp đủ số tiền chậm đóng + Nộp số tiền lãi chậm đóng bằng 02 lần mức lãi suất đầu tư quỹ BHXH bình quân của năm trước liền kề (Điều 39 NĐ 12/2022). Nếu trốn đóng từ 50 triệu trở lên có thể bị xử lý hình sự theo Điều 216 Bộ luật Hình sự.',
    defenseDocuments: [
      'Thông báo kết quả đóng BHXH, BHYT, BHTN (Mẫu C12-TS) do Cơ quan BHXH gửi hàng tháng',
      'Ủy nhiệm chi nộp tiền BHXH vào tài khoản chuyên thu của Cơ quan BHXH quản lý',
      'Danh sách lao động tham gia BHXH (Mẫu D02-LT) đối chiếu khớp đúng với Danh sách quyết toán thuế TNCN',
      'Hồ sơ của các trường hợp không thuộc diện tham gia BHXH bắt buộc (Lao động đã nghỉ hưu hưởng chế độ, HĐ khoán việc dưới 1 tháng...)'
    ],
    tip: 'Nộp dứt điểm nợ BHXH và tiền chậm đóng trước khi đoàn kiểm tra có mặt; lưu trữ đầy đủ biên lai Mẫu C12-TS chứng minh đã tất toán.'
  },
  {
    id: 'rq-09',
    question: 'Sản lượng khai thác thực tế và kê khai thuế tài nguyên có chênh > 5% không?',
    weight: 5,
    decreeId: 'tt-152-2015',
    decreeTitle: 'Thông tư 152/2015/TT-BTC hướng dẫn về Thuế Tài Nguyên',
    articleNum: '6',
    articleRef: 'Điều 6 & Điều 7 (Sản lượng và giá tính thuế tài nguyên)',
    legalQuote: 'Điều 6 Khoản 1 Thông tư 152/2015/TT-BTC: "Sản lượng tài nguyên tính thuế là sản lượng tài nguyên thực tế khai thác trong kỳ tính thuế... Đối với tài nguyên khai thác không tiêu thụ ngay mà đưa vào chế biến thì sản lượng tài nguyên tính thuế được xác định căn cứ vào sản lượng sản phẩm chế biến hoàn thành và định mức tiêu hao tài nguyên tính cho một đơn vị sản phẩm chế biến." Kết hợp Quyết định số 87/2025/QĐ-UBND tỉnh Gia Lai.',
    riskAnalysis: 'Đặc thù Kiểu Việt khai thác mỏ đá và sản xuất bê tông: Đoàn kiểm tra sẽ đối chiếu Sản lượng khai thác trên Sổ theo dõi mỏ, Bản đồ hiện trạng mỏ đá, Báo cáo thống kê nộp Sở TN&MT, lượng thuốc nổ công nghiệp sử dụng (đối ứng định mức bốc nổ đá hộc) với Số mét khối đá hộc, đá dăm kê khai trên Tờ khai thuế tài nguyên (Mẫu 01/TAIN). Bất kỳ chênh lệch > 5% nào cũng bị coi là khai thiếu sản lượng khai thác.',
    penaltyFramework: 'Truy thu thuế tài nguyên theo giá quy định tại QĐ 87/2025/QĐ-UBND tỉnh Gia Lai + Truy thu tiền cấp quyền khai thác khoáng sản (NĐ 67/2019) + Phạt 20% thuế khai thiếu + Phạt vi phạm khai thác vượt công suất cấp phép (theo Nghị định 36/2020/NĐ-CP có thể lên tới 500 triệu đồng).',
    defenseDocuments: [
      'Báo cáo thống kê, kiểm kê trữ lượng khoáng sản và Bản đồ hiện trạng mỏ đá đã nộp Sở TN&MT',
      'Sổ giao nhận, phiếu cân trạm cân tại cửa mỏ và nhật ký nổ mìn khai thác đá',
      'Bảng tính định mức hao hụt, sàng tuyển từ đá hộc ra các phân đoạn đá 1x2, đá 2x4, đá mi bụi và cấp phối bê tông',
      'Tờ khai thuế tài nguyên hàng tháng và quyết toán năm (Mẫu 02/TAIN) kèm chứng từ nộp thuế'
    ],
    tip: 'Lập bảng đối chiếu 3 bên giữa sản lượng nổ mìn, khối lượng trạm cân và sản lượng khai thuế; lập báo cáo giải trình hao hụt sàng tuyển trước ngày kiểm tra.'
  },
  {
    id: 'rq-10',
    question: 'Có chưa nộp phí BVMT khoáng sản đúng hạn không?',
    weight: 3,
    decreeId: 'nd-27-2023',
    decreeTitle: 'Nghị định 27/2023/NĐ-CP phí bảo vệ môi trường khai thác khoáng sản',
    articleNum: '8',
    articleRef: 'Điều 8 (Kê khai và nộp phí BVMT)',
    legalQuote: 'Điều 8 Nghị định 27/2023/NĐ-CP: "Người nộp phí bảo vệ môi trường đối với khai thác khoáng sản thực hiện nộp hồ sơ khai phí theo quy định của pháp luật về quản lý thuế. Hàng tháng, người nộp phí thực hiện nộp hồ sơ khai phí bảo vệ môi trường cho cơ quan thuế quản lý trực tiếp chậm nhất là ngày 20 của tháng tiếp theo... Quyết toán năm chậm nhất là ngày cuối cùng của tháng thứ 3 kể từ ngày kết thúc năm dương lịch."',
    riskAnalysis: 'Phí BVMT khoáng sản đi liền với sản lượng đất đá thải và sản lượng đá nguyên khai khai thác. Khi thanh tra, cơ quan thuế kiểm tra việc nộp phí BVMT theo tháng và quyết toán năm. Nếu DN nộp chậm hoặc quên kê khai khối lượng đất đá bóc thải, sẽ bị xử lý vi phạm cả về thủ tục thuế lẫn số phí còn nợ.',
    penaltyFramework: 'Phạt chậm nộp phí BVMT theo mức 0,03%/ngày. Phạt hành vi vi phạm thời hạn nộp tờ khai phí từ 2.000.000đ đến 25.000.000đ (Điều 13 NĐ 125/2020).',
    defenseDocuments: [
      'Tờ khai phí BVMT đối với khai thác khoáng sản (Mẫu 01/PBVMT) hàng tháng và Tờ khai quyết toán năm',
      'Giấy nộp tiền vào NSNN về phí BVMT (Mục lục ngân sách tiểu mục phí BVMT)',
      'Biên bản xác định khối lượng đất đá bóc và đất đá thải trong quá trình khai thác mỏ đá',
      'Đề án đóng cửa mỏ và quỹ ký cược phục hồi môi trường tại Quỹ BVMT tỉnh Gia Lai'
    ],
    tip: 'Nộp bổ sung toàn bộ phí BVMT còn thiếu và số tiền chậm nộp tương ứng trước khi đoàn thanh tra công bố quyết định.'
  },
  {
    id: 'rq-11',
    question: 'Có hóa đơn bị CQT thông báo rủi ro (cảnh báo Mẫu 01/TB-HĐ) không?',
    weight: 5,
    decreeId: 'nd-123-2020',
    decreeTitle: 'Nghị định 123/2020/NĐ-CP quy định về Hóa đơn, Chứng từ',
    articleNum: '34',
    articleRef: 'Điều 34 & Điều 19 (Xử lý hóa đơn sai sót và rủi ro)',
    legalQuote: 'Điều 34 Nghị định 123/2020/NĐ-CP: "Trường hợp cơ quan thuế phát hiện hóa đơn điện tử đã lập có sai sót hoặc thuộc đối tượng rủi ro thì cơ quan thuế thông báo cho người bán theo Mẫu số 01/TB-HĐSS để người bán kiểm tra sai sót." Kết hợp Thông báo của Tổng cục Thuế về ranh giới pháp lý: Người mua chỉ phải điều chỉnh nếu xác định giao dịch không có thật; thông báo cảnh báo nhà cung cấp không tự động làm vô hiệu hóa đơn nếu hàng hóa, thanh toán có thật.',
    riskAnalysis: 'Thanh tra viên sẽ rà soát danh sách đối tác cung cấp đầu vào của DN đối chiếu với Danh sách DN rủi ro cao về thuế của Tổng cục Thuế (danh sách 524 DN, danh sách DN ngừng hoạt động nhưng chưa đóng MST). Nếu có hóa đơn của nhà cung cấp này, thuế sẽ yêu cầu DN làm việc giải trình chi tiết từng hóa đơn, cam kết tính có thực của giao dịch.',
    penaltyFramework: 'Nếu không chứng minh được tính có thật: Bị loại toàn bộ thuế GTGT đầu vào và chi phí được trừ TNDN; truy thu 10% GTGT + 20% TNDN; phạt 1 - 3 lần thuế trốn (Điều 17 NĐ 125/2020). Nếu chứng minh được giao dịch có thực: Không bị phạt trốn thuế, nhưng phải hoàn thiện đầy đủ hồ sơ nguồn gốc hàng hóa.',
    defenseDocuments: [
      'Hồ sơ trọn gói chứng minh giao dịch có thực: Hợp đồng kinh tế ký trước thời điểm người bán bỏ trốn',
      'Biên bản giao nhận hàng hóa ký tá thực tế giữa thủ kho Kiểu Việt và người giao hàng',
      'Chứng từ thanh toán 100% qua tài khoản ngân hàng chính thức của bên bán',
      'Biên bản làm việc nội bộ giải trình nguồn gốc và quá trình sử dụng thực tế số vật tư/hàng hóa đó',
      'Văn bản giải trình gửi CQT khẳng định giao dịch có thật kèm toàn bộ chứng từ bản gốc'
    ],
    tip: 'Lọc danh sách các hóa đơn thuộc nhà cung cấp bị cảnh báo; kẹp trọn bộ hồ sơ 5 chứng từ (Hợp đồng, Biên bản giao nhận, Cân xe, UNC ngân hàng, Báo cáo sử dụng) để bảo vệ tính có thật.'
  },
  {
    id: 'rq-12',
    question: 'Chi phí lãi vay giao dịch liên kết có > 30% EBITDA không?',
    weight: 4,
    decreeId: 'nd-132-2020',
    decreeTitle: 'Nghị định 132/2020/NĐ-CP quản lý thuế giao dịch liên kết',
    articleNum: '16',
    articleRef: 'Điều 16 Khoản 3 (Khống chế trần chi phí lãi vay)',
    legalQuote: 'Điều 16 Khoản 3 Điểm a Nghị định 132/2020/NĐ-CP: "Tổng chi phí lãi vay sau khi trừ lãi tiền gửi và lãi cho vay phát sinh trong kỳ của người nộp thuế được trừ khi xác định thu nhập chịu thuế thu nhập doanh nghiệp không vượt quá 30% của tổng lợi nhuận thuần từ hoạt động kinh doanh trong kỳ cộng chi phí lãi vay sau khi trừ lãi tiền gửi và lãi cho vay phát sinh trong kỳ cộng chi phí khấu hao phát sinh trong kỳ (EBITDA)."',
    riskAnalysis: 'Đây là điểm nóng kiểm toán hàng đầu tại các DN có vốn đầu tư lớn vào nhà xưởng, máy móc thiết bị như Kiểu Việt. Điểm b Khoản 3 Điều 16 cho phép: "Phần chi phí lãi vay không được trừ được chuyển sang kỳ tính thuế tiếp theo khi xác định tổng chi phí lãi vay được trừ... Thời gian chuyển chi phí lãi vay tính liên tục không quá 05 năm." Nhiều kế toán không nắm được quyền chuyển chi phí này dẫn đến mất hẳn quyền lợi.',
    penaltyFramework: 'Bóc tách toàn bộ phần lãi vay thuần vượt 30% EBITDA ra khỏi chi phí được trừ năm hiện hành, tăng thu nhập chịu thuế TNDN tương ứng. Nếu không kê khai đúng, bị truy thu 20% thuế TNDN + Phạt 20% khai sai (Điều 16 NĐ 125/2020).',
    defenseDocuments: [
      'Bảng tính chi tiết EBITDA và tỷ lệ chi phí lãi vay thuần (Mẫu biểu theo NĐ 132/2020)',
      'Hợp đồng tín dụng ngân hàng, khế ước nhận nợ, sao kê lãi vay trả ngân hàng (TK 635)',
      'Sổ theo dõi chi phí lãi vay không được trừ chuyển tiếp sang các năm sau (tối đa 5 năm)',
      'Phụ lục xác định giao dịch liên kết nộp kèm Tờ khai quyết toán thuế TNDN Mẫu 01'
    ],
    tip: 'Lập bảng tính mô phỏng EBITDA theo đúng công thức Điều 16 NĐ 132; mở sổ theo dõi riêng phần lãi vay vượt trần để chuyển tiếp chi phí trong vòng 5 năm theo quy định.'
  },
  {
    id: 'rq-13',
    question: 'Có NLĐ nghỉ việc chưa được cấp chứng từ khấu trừ TNCN ĐT không?',
    weight: 2,
    decreeId: 'nd-70-2025',
    decreeTitle: 'Nghị định 70/2025/NĐ-CP sửa đổi quy định hóa đơn, chứng từ',
    articleNum: '4',
    articleRef: 'Điều 4 (Quy định về chứng từ khấu trừ thuế TNCN điện tử)',
    legalQuote: 'Nghị định 70/2025/NĐ-CP & Nghị định 123/2020/NĐ-CP Điều 32: "Tổ chức khấu trừ thuế thu nhập cá nhân có trách nhiệm cấp chứng từ khấu trừ thuế điện tử cho cá nhân bị khấu trừ thuế theo định dạng chuẩn dữ liệu do Tổng cục Thuế ban hành, trừ trường hợp cá nhân ủy quyền quyết toán thuế."',
    riskAnalysis: 'Người lao động nghỉ việc giữa năm (thợ mộc, công nhân bê tông, kỹ sư công trường) tự đi quyết toán thuế TNCN trực tiếp tại Cơ quan Thuế. Nếu Kiểu Việt chưa cấp chứng từ khấu trừ thuế TNCN điện tử, CQT nơi NLĐ nộp hồ sơ sẽ gửi công văn tra cứu hoặc xử phạt Kiểu Việt về hành vi chậm cấp chứng từ thuế.',
    penaltyFramework: 'Phạt tiền từ 2.000.000đ đến 5.000.000đ về hành vi không cấp hoặc chậm cấp chứng từ khấu trừ thuế TNCN theo quy định tại Nghị định 125/2020/NĐ-CP.',
    defenseDocuments: [
      'Danh sách lao động chấm dứt hợp đồng lao động trong năm tài chính',
      'File XML và bản thể hiện PDF chứng từ khấu trừ thuế TNCN điện tử đã ký số gửi cho NLĐ',
      'Biên bản bàn giao chứng từ khấu trừ TNCN điện tử hoặc email/tin nhắn xác nhận gửi mã tra cứu cho NLĐ',
      'Tờ khai quyết toán thuế TNCN (Mẫu 05/QTT-TNCN) và Phụ lục 05-1/BK-TNCN, 05-2/BK-TNCN'
    ],
    tip: 'Cấp chứng từ khấu trừ TNCN điện tử ngay cho tất cả người lao động đã nghỉ việc trong năm tài chính có phát sinh khấu trừ thuế.'
  },
  {
    id: 'rq-14',
    question: 'Có HĐ xây dựng chưa có biên bản nghiệm thu khối lượng đúng mẫu không?',
    weight: 3,
    decreeId: 'nd-37-2015',
    decreeTitle: 'Nghị định 37/2015/NĐ-CP quy định chi tiết về hợp đồng xây dựng',
    articleNum: '15',
    articleRef: 'Điều 15 & Điều 19 (Nghiệm thu và thanh quyết toán hợp đồng xây dựng)',
    legalQuote: 'Điều 19 Nghị định 37/2015/NĐ-CP: "Hồ sơ thanh toán hợp đồng xây dựng phải bao gồm: Biên bản nghiệm thu khối lượng hoàn thành trong giai đoạn thanh toán có xác nhận của đại diện bên giao thầu và bên nhận thầu; Bảng tính giá trị thanh toán; Hóa đơn theo quy định của pháp luật." Kết hợp Điều 9 Nghị định 123/2020/NĐ-CP về thời điểm lập hóa đơn đối với xây dựng, lắp đặt.',
    riskAnalysis: 'Thanh tra thuế cực kỳ chặt chẽ đối với các công trình xây lắp: Thời điểm lập hóa đơn là thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình, khối lượng xây dựng, lắp đặt hoàn thành, không phân biệt đã thu được tiền hay chưa. Nếu có nghiệm thu mà chưa xuất HĐ -> Phạt trốn doanh thu. Nếu xuất HĐ mà không có biên bản nghiệm thu khối lượng tương ứng -> Hóa đơn khống, bóc chi phí giá vốn.',
    penaltyFramework: 'Hành vi lập hóa đơn không đúng thời điểm: Phạt từ 4.000.000đ đến 8.000.000đ (Điều 24 NĐ 125/2020). Nếu bị coi là xuất hóa đơn khống: Phạt từ 20.000.000đ đến 50.000.000đ và loại toàn bộ chi phí giá vốn (TK 632) công trình.',
    defenseDocuments: [
      'Hợp đồng giao nhận thầu thi công xây dựng và các phụ lục hợp đồng bổ sung khối lượng',
      'Biên bản nghiệm thu công việc xây dựng, Biên bản nghiệm thu giai đoạn (Mẫu A-B)',
      'Bảng xác nhận khối lượng hoàn thành và Bảng tính giá trị thanh toán theo đợt',
      'Nhật ký thi công công trình có xác nhận của Tư vấn giám sát và Chủ đầu tư',
      'Biên bản bàn giao đưa công trình/hạng mục vào sử dụng và thanh lý hợp đồng'
    ],
    tip: 'Rà soát và ký đầy đủ biên bản nghiệm thu A-B cho toàn bộ các hóa đơn xây lắp đã xuất trong kỳ; đảm bảo ngày nghiệm thu phù hợp với ngày lập hóa đơn.'
  },
  {
    id: 'rq-15',
    question: 'Sổ cái, sổ chi tiết kế toán chưa in/lưu cho kỳ kiểm tra không?',
    weight: 3,
    decreeId: 'luat-ke-toan-2015',
    decreeTitle: 'Luật Kế toán số 88/2015/QH13',
    articleNum: '24',
    articleRef: 'Điều 24, 25 & Điều 41 (Sổ kế toán và lưu trữ tài liệu kế toán)',
    legalQuote: 'Điều 24 Luật Kế toán 88/2015/QH13: "Đơn vị kế toán phải mở sổ kế toán để ghi chép, hệ thống và lưu giữ toàn bộ các nghiệp vụ kinh tế, tài chính đã phát sinh có liên quan đến đơn vị kế toán... Trường hợp ghi sổ kế toán bằng phương tiện điện tử thì phải thực hiện các quy định về sổ kế toán tại Luật này, sau khi khóa sổ kế toán phải in sổ kế toán ra giấy và đóng thành quyển riêng cho từng kỳ kế toán năm hoặc lưu trữ trên phương tiện điện tử."',
    riskAnalysis: 'Khi công bố Quyết định thanh tra/kiểm tra thuế, ngày đầu tiên đoàn làm việc sẽ yêu cầu cung cấp ngay lập tức: Sổ cái tất cả các tài khoản (TK loại 1 đến loại 9), Sổ chi tiết công nợ 131, 331, Sổ chi tiết hàng tồn kho 152, 154, 156, Sổ chi tiết chi phí xây lắp từng công trình. Nếu DN không xuất trình được hoặc mất nhiều ngày để in, đoàn sẽ lập biên bản cản trở thanh tra và áp dụng ấn định thuế.',
    penaltyFramework: 'Phạt từ 5.000.000đ đến 10.000.000đ đối với hành vi mở sổ kế toán chậm hoặc không in sổ kế toán ra giấy sau khi khóa sổ kế toán trên phương tiện điện tử (Điều 9 Nghị định 41/2018/NĐ-CP). Bị coi là không chấp hành chế độ kế toán và bị ấn định thuế theo Điều 50 Luật QLT 2019.',
    defenseDocuments: [
      'Trọn bộ Sổ cái (TK 111 đến TK 911) đã khóa sổ, in đóng quyển có chữ ký của Người lập, Kế toán trưởng và Tổng Giám đốc',
      'Sổ chi tiết tài khoản (đặc biệt: 131, 331, 141, 152, 154, 211, 214, 242, 335, 632, 642)',
      'File dữ liệu kế toán dự phòng (File sao lưu phần mềm kế toán MISA/Fast/Excel) lưu trên ổ cứng ngoài và Google Drive Kiểu Việt',
      'Báo cáo tài chính, Bảng cân đối tài khoản (F01-DNSN) khớp đúng 100% với Sổ cái kế toán'
    ],
    tip: 'In trọn bộ sổ cái và sổ chi tiết của các năm kiểm tra, đóng quyển có chữ ký đầy đủ; xuất file PDF backup lưu trên ổ cứng dự phòng sẵn sàng nộp cho đoàn.'
  }
];

// ===== TIMELINE 3 GIAI ĐOẠN (NÂNG CẤP CHUYÊN SÂU THỰC CHIẾN) =====

export interface TimelineTask {
  id: string;
  title: string;
  legalBase: string;
  decreeId: string;
  articleNum: string;
  decreeLabel: string;
  actionGuide: string;
  requiredDossier: string[];
  riskIfDelayed: string;
}

export interface TimelinePhase {
  phase: number;
  label: string;
  daysBefore: string;
  color: string;
  objective: string;
  legalRule: string;
  tasks: TimelineTask[];
}

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    phase: 1,
    label: 'Rà soát tổng thể & Khắc phục sai sót',
    daysBefore: 'Trước 30 ngày (Giai đoạn VÀNG)',
    color: 'emerald',
    objective: 'Chủ động phát hiện chênh lệch, nộp hồ sơ khai bổ sung Mẫu 01/KHBS trước khi CQT ban hành Quyết định kiểm tra để được miễn 100% tiền phạt 20% khai sai.',
    legalRule: 'Điều 142 Khoản 1 & Điều 47 Luật Quản lý thuế số 38/2019/QH14: NNT tự phát hiện hồ sơ khai thuế đã nộp có sai sót thì được khai bổ sung trước khi CQT công bố quyết định kiểm tra thuế.',
    tasks: [
      {
        id: 't1-01',
        title: 'Đối chiếu Doanh thu kê khai GTGT (Tờ khai 01) và Quyết toán TNDN (Mẫu 03)',
        legalBase: 'Điều 42 Luật QLT 38/2019/QH14, Điều 8 TT 219/2013/TT-BTC & Điều 5 TT 78/2014/TT-BTC',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '42',
        decreeLabel: 'Luật QLT 38/2019 — Điều 42',
        actionGuide: 'Rà soát chênh lệch giữa Chỉ tiêu [34] trên 4 Tờ khai 01/GTGT với Chỉ tiêu [01] trên Phụ lục 03-1A/TNDN và Doanh thu trên Báo cáo kết quả HĐKD. Lập Bảng điều hòa giải trình: bóc tách doanh thu xây lắp chưa nghiệm thu, doanh thu tài chính TK 515, thanh lý TSCĐ, phế liệu mỏ đá.',
        requiredDossier: [
          '4 Tờ khai thuế GTGT quý (Mẫu 01/GTGT) có xác nhận eTax',
          'Tờ khai quyết toán TNDN (Mẫu 03/TNDN) kèm Phụ lục 03-1A',
          'Sổ cái TK 511, 515, 711, 521',
          'Bảng điều hòa giải trình nguyên nhân chênh lệch doanh thu (Mẫu nội bộ Kiểu Việt)'
        ],
        riskIfDelayed: 'CQT đưa vào danh sách rủi ro loại 1; ấn định thuế và phạt 20% trên số thuế khai thiếu (Điều 16 NĐ 125/2020) + chậm nộp 0,03%/ngày.'
      },
      {
        id: 't1-02',
        title: 'Rà soát ngưỡng thanh toán không dùng tiền mặt hóa đơn >= 20 triệu VNĐ',
        legalBase: 'Điều 15 Khoản 2 TT 219/2013/TT-BTC (sửa đổi bởi TT 173/2016) & Điều 4 TT 96/2015/TT-BTC',
        decreeId: 'tt-219-2013',
        articleNum: '15',
        decreeLabel: 'Thông tư 219/2013/TT-BTC — Điều 15',
        actionGuide: 'Lọc toàn bộ Sổ chi tiết TK 111 đối ứng TK 331, 152, 156, 642, 627. Phát hiện mọi hóa đơn >= 20 triệu (đã gồm VAT) hoặc mua cùng một NCC trong ngày cộng dồn >= 20 triệu trả tiền mặt. Lập tờ khai bổ sung 01/KHBS giảm thuế GTGT khấu trừ và loại chi phí TNDN (chỉ tiêu B4).',
        requiredDossier: [
          'Sổ chi tiết TK 111 (Tiền mặt) và TK 112 (Tiền gửi ngân hàng)',
          'Ủy nhiệm chi (UNC) và Giấy báo Nợ ngân hàng',
          'Biên bản đối chiếu công nợ và bù trừ 3 bên hợp pháp (nếu có)'
        ],
        riskIfDelayed: 'Bị bóc tách toàn bộ: Vừa mất quyền khấu trừ thuế GTGT đầu vào 10%, vừa bị loại khỏi chi phí hợp lý tính thuế TNDN 20%, cộng phạt 20% khai sai.'
      },
      {
        id: 't1-03',
        title: 'Kiểm tra tỷ lệ tạm nộp thuế TNDN 4 quý so với quyết toán năm (ngưỡng 80%)',
        legalBase: 'Điều 8 Khoản 6 Điểm b Nghị định 126/2020/NĐ-CP (sửa đổi bởi Nghị định 91/2022/NĐ-CP)',
        decreeId: 'nd-126-2020',
        articleNum: '8',
        decreeLabel: 'Nghị định 126/2020/NĐ-CP — Điều 8',
        actionGuide: 'Tính tổng số thuế TNDN đã tạm nộp 4 quý so với 80% số thuế TNDN phải nộp theo quyết toán năm (Chỉ tiêu G trên Mẫu 03/TNDN). Nếu số nộp < 80%, lập Giấy nộp tiền vào NSNN ngay lập tức để ngắt chu kỳ tính tiền chậm nộp 0,03%/ngày.',
        requiredDossier: [
          'Giấy nộp tiền vào NSNN 4 quý và quyết toán năm',
          'Sổ cái TK 3334 (Thuế TNDN)',
          'Bảng kê tính tỷ lệ tạm nộp thuế TNDN theo quy định NĐ 91/2022'
        ],
        riskIfDelayed: 'CQT tự động áp tiền chậm nộp 0,03%/ngày từ ngày 01/02 đến ngày thực nộp (Điều 59 Luật Quản lý thuế 38/2019).'
      },
      {
        id: 't1-04',
        title: 'Khóa sổ, in trọn bộ Sổ cái và Sổ chi tiết TK 111 đến TK 911 đóng quyển',
        legalBase: 'Điều 24, Điều 25 & Điều 41 Luật Kế toán số 88/2015/QH13, Điều 9 Nghị định 41/2018/NĐ-CP',
        decreeId: 'luat-ke-toan-2015',
        articleNum: '24',
        decreeLabel: 'Luật Kế toán 88/2015 — Điều 24',
        actionGuide: 'Thực hiện khóa sổ kế toán, in toàn bộ Sổ cái các tài khoản từ loại 1 đến loại 9, Sổ chi tiết công nợ 131, 331, Sổ chi tiết tồn kho 152, 154, 156. Đóng thành quyển riêng theo từng năm tài chính, có chữ ký đầy đủ của Người lập, Kế toán trưởng và Tổng Giám đốc.',
        requiredDossier: [
          'Sổ cái (General Ledger) TK 111 đến TK 911 đã in và đóng quyển',
          'Sổ chi tiết các tài khoản trọng yếu (131, 331, 141, 152, 154, 211, 242, 335, 632, 642)',
          'Bảng cân đối số phát sinh các tài khoản năm kiểm tra'
        ],
        riskIfDelayed: 'Phạt tiền từ 5 - 10 triệu đồng về hành vi không in sổ kế toán ra giấy sau khi khóa sổ điện tử (NĐ 41/2018) và bị coi là không chấp hành chế độ kế toán dẫn đến ấn định thuế.'
      },
      {
        id: 't1-05',
        title: 'Rà soát trần lãi vay 30% EBITDA & kê khai Giao dịch liên kết Mẫu 01/NĐ-132',
        legalBase: 'Điều 16 Khoản 3 & Điều 18, 19 Nghị định 132/2020/NĐ-CP',
        decreeId: 'nd-132-2020',
        articleNum: '16',
        decreeLabel: 'Nghị định 132/2020/NĐ-CP — Điều 16',
        actionGuide: 'Rà soát quan hệ liên kết (vay vốn cá nhân lãnh đạo, vay ngân hàng vượt 25% vốn chủ sở hữu và chiếm > 50% tổng nợ vay). Tính toán chỉ tiêu EBITDA và trần lãi vay 30%. Kê khai nộp bổ sung Phụ lục Mẫu 01/NĐ-132. Mở sổ theo dõi lãi vay vượt trần để chuyển chi phí sang 5 năm sau.',
        requiredDossier: [
          'Phụ lục I, II, III thông tin giao dịch liên kết theo NĐ 132/2020',
          'Bảng tính EBITDA và trần chi phí lãi vay được trừ',
          'Hợp đồng tín dụng ngân hàng, hợp đồng vay mượn cá nhân và khế ước nhận nợ',
          'Sổ theo dõi phần lãi vay không được trừ chuyển kỳ sau (tối đa 5 năm)'
        ],
        riskIfDelayed: 'Phạt từ 8 - 15 triệu đồng do không nộp hồ sơ GDLK; CQT ấn định thuế TNDN và bóc tách toàn bộ lãi vay vượt mức 30% EBITDA không cho chuyển tiếp.'
      },
      {
        id: 't1-06',
        title: 'Đối chiếu sản lượng khai thác mỏ đá với kê khai thuế tài nguyên & phí BVMT',
        legalBase: 'Điều 6 TT 152/2015/TT-BTC, Nghị định 27/2023/NĐ-CP & Quyết định 87/2025/QĐ-UBND Gia Lai',
        decreeId: 'tt-152-2015',
        articleNum: '6',
        decreeLabel: 'Thông tư 152/2015/TT-BTC — Điều 6',
        actionGuide: 'Lập bảng cân đối 3 bên: Khối lượng đất đá bóc nổ mìn, khối lượng xe qua trạm cân điện tử mỏ đá và khối lượng khai trên Tờ khai 01/TAIN. Rà soát tỷ lệ hao hụt sàng tuyển ra đá 1x2, đá 2x4, đá mi và cấp phối bê tông. Kê khai đúng đơn giá tính thuế tài nguyên theo QĐ 87 Gia Lai.',
        requiredDossier: [
          'Tờ khai thuế tài nguyên (01/TAIN) và Tờ khai phí BVMT (01/PBVMT)',
          'Bản đồ hiện trạng mỏ đá và Báo cáo kiểm kê trữ lượng nộp Sở TN&MT',
          'Sổ theo dõi trạm cân điện tử và nhật ký nổ mìn',
          'Bảng định mức hao hụt sàng tuyển khoáng sản nội bộ đã duyệt'
        ],
        riskIfDelayed: 'Bị truy thu thuế tài nguyên theo giá ấn định của UBND tỉnh, truy thu tiền cấp quyền mỏ đá (NĐ 67/2019), phạt khai thiếu 20% và phạt khai thác vượt công suất cấp phép.'
      },
      {
        id: 't1-07',
        title: 'Kiểm tra trích khấu hao TSCĐ (xe bồn bê tông, máy xúc mỏ đá, xưởng mộc Phú Tài)',
        legalBase: 'Điều 10 & Phụ lục 1 Thông tư 45/2013/TT-BTC, Điều 4 Thông tư 96/2015/TT-BTC',
        decreeId: 'tt-45-2013',
        articleNum: '10',
        decreeLabel: 'Thông tư 45/2013/TT-BTC — Điều 10',
        actionGuide: 'Đối chiếu thời gian trích khấu hao của toàn bộ xe bồn, máy xúc, trạm trộn bê tông, dây chuyền xưởng mộc với khung khấu hao Phụ lục 1 TT 45. Kiểm tra Văn bản thông báo phương pháp trích khấu hao đã nộp CQT. Điều chỉnh phần khấu hao vượt khung vào chỉ tiêu B4 tờ khai quyết toán TNDN.',
        requiredDossier: [
          'Văn bản thông báo phương pháp trích khấu hao TSCĐ gửi CQT',
          'Bảng phân bổ trích khấu hao TSCĐ 12 tháng từng năm',
          'Thẻ TSCĐ, Hóa đơn mua xe, Hợp đồng, Biên bản bàn giao đưa vào sử dụng',
          'Hồ sơ kiểm định, đăng kiểm kỹ thuật phương tiện cơ giới'
        ],
        riskIfDelayed: 'Xuất toán toàn bộ phần khấu hao trích vượt khung tối thiểu, truy thu 20% thuế TNDN tương ứng và phạt chậm nộp.'
      },
      {
        id: 't1-08',
        title: 'Lập Bảng điều hòa số liệu và nộp Tờ khai bổ sung Mẫu 01/KHBS trước ngày thanh tra',
        legalBase: 'Điều 47 Luật Quản lý thuế số 38/2019/QH14 & Điều 142 Khoản 1',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '47',
        decreeLabel: 'Luật QLT 38/2019 — Điều 47',
        actionGuide: 'Tổng hợp toàn bộ các sai lệch phát hiện ở các bước trên. Lập Tờ khai bổ sung Mẫu 01/KHBS gửi qua mạng eTax kèm bản giải trình lý do sai sót. Nộp tiền thuế phát sinh tăng và tiền chậm nộp tự tính vào NSNN trước ngày CQT ký Quyết định thanh tra.',
        requiredDossier: [
          'Hồ sơ khai bổ sung Mẫu 01/KHBS và Bản giải trình 01-1/KHBS qua mạng eTax',
          'Giấy nộp tiền vào NSNN nộp số thuế tăng thêm và tiền chậm nộp',
          'Biên bản đối chiếu nghĩa vụ thuế trên trang eTax'
        ],
        riskIfDelayed: 'Nếu để đoàn thanh tra công bố quyết định mới phát hiện: Mất hoàn toàn quyền tự khắc phục, bị phạt cứng 20% trên toàn bộ số thuế truy thu (Điều 16 NĐ 125/2020).'
      }
    ]
  },
  {
    phase: 2,
    label: 'Ghép hồ sơ chứng từ gốc & Kẹp chứng cứ 3 bên',
    daysBefore: 'Trước 15 ngày (Giai đoạn BỔ SUNG)',
    color: 'blue',
    objective: 'Hoàn thiện 100% chứng từ gốc, đảm bảo tính khép kín hợp pháp của dòng tiền và dòng hàng, phân loại tệp hồ sơ sẵn sàng xuất trình.',
    legalRule: 'Điều 110 Khoản 2 Luật QLT 38/2019/QH14: Quyết định kiểm tra thuế phải được gửi cho người nộp thuế chậm nhất 03 ngày làm việc kể từ ngày ban hành; thời hạn kiểm tra tại trụ sở tối đa 10 ngày làm việc.',
    tasks: [
      {
        id: 't2-01',
        title: 'Kẹp bộ chứng từ 3 bên đồng bộ cho 100% công trình xây dựng & cung cấp nội thất',
        legalBase: 'Điều 19 Nghị định 37/2015/NĐ-CP & Điều 9 Nghị định 123/2020/NĐ-CP',
        decreeId: 'nd-37-2015',
        articleNum: '19',
        decreeLabel: 'Nghị định 37/2015/NĐ-CP — Điều 19',
        actionGuide: 'Kiểm tra tính xâu chuỗi: Hợp đồng kinh tế ➔ Nhật ký thi công/Lệnh sản xuất ➔ Biên bản nghiệm thu A-B theo giai đoạn ➔ Bảng xác nhận khối lượng ➔ Hóa đơn điện tử hợp lệ ➔ Ủy nhiệm chi ngân hàng. Đảm bảo ngày lập hóa đơn trùng khớp hoặc sau ngày ký biên bản nghiệm thu bàn giao.',
        requiredDossier: [
          'Hợp đồng thi công xây lắp/cung cấp nội thất gỗ và các phụ lục bổ sung',
          'Biên bản nghiệm thu bàn giao khối lượng A-B giai đoạn và tổng thể',
          'Hóa đơn điện tử tra cứu hợp lệ (file XML gốc)',
          'Chứng từ thanh toán qua ngân hàng (UNC, Giấy báo Nợ/Có)'
        ],
        riskIfDelayed: 'Bị xử phạt xuất hóa đơn sai thời điểm (4 - 8 triệu đồng/hóa đơn) hoặc bị quy kết hóa đơn khống, bóc tách toàn bộ chi phí giá vốn TK 632.'
      },
      {
        id: 't2-02',
        title: 'Lập hồ sơ bảo vệ chi phí trích trước giá vốn TK 335 công trình bàn giao',
        legalBase: 'Khoản 2.20 Điều 4 Thông tư 96/2015/TT-BTC',
        decreeId: 'tt-96-2015',
        articleNum: '4',
        decreeLabel: 'Thông tư 96/2015/TT-BTC — Điều 4',
        actionGuide: 'Rà soát toàn bộ số dư Có TK 335. Với công trình đã bàn giao ghi nhận doanh thu nhưng chưa đủ hóa đơn chi phí thầu phụ: Lập bảng kê chi tiết chi phí trích trước kèm Dự toán thiết kế thi công đã duyệt, Biên bản bàn giao đưa vào sử dụng và cam kết nhận hóa đơn.',
        requiredDossier: [
          'Dự toán công trình đã được cấp có thẩm quyền phê duyệt',
          'Biên bản nghiệm thu bàn giao đưa công trình vào sử dụng trong kỳ',
          'Bảng tính chi tiết giá vốn trích trước theo tỷ lệ khối lượng hoàn thành',
          'Hợp đồng giao khoán với thầu phụ và hóa đơn đầu vào nhận sau'
        ],
        riskIfDelayed: 'Đoàn kiểm tra sẽ bóc tách toàn bộ số chi phí trích trước TK 335, tăng thu nhập chịu thuế TNDN 20% và phạt chậm nộp do không đủ hóa đơn chứng từ tại thời điểm quyết toán.'
      },
      {
        id: 't2-03',
        title: 'Kẹp trọn bộ 5 chứng từ chứng minh giao dịch có thật cho hóa đơn rủi ro cao',
        legalBase: 'Điều 34 Nghị định 123/2020/NĐ-CP & Công văn chỉ đạo chống gian lận hóa đơn của TCT',
        decreeId: 'nd-123-2020',
        articleNum: '34',
        decreeLabel: 'Nghị định 123/2020/NĐ-CP — Điều 34',
        actionGuide: 'Lọc toàn bộ nhà cung cấp bị CQT cảnh báo rủi ro (Mẫu 01/TB-HĐ) hoặc DN ngừng hoạt động bỏ trốn khỏi địa chỉ kinh doanh. Kẹp bộ 5 tài liệu cốt tử: Hợp đồng, Biên bản giao nhận tại kho/công trường, Phiếu cân xe trạm cân, Chứng từ chuyển khoản ngân hàng đúng tài khoản đăng ký, Ảnh chụp vật tư đưa vào sản xuất.',
        requiredDossier: [
          'Hợp đồng kinh tế ký trước thời điểm người bán bỏ trốn',
          'Biên bản giao nhận hàng hóa có chữ ký người giao, thủ kho nhận',
          'Phiếu cân xe, lệnh điều xe, thông tin biển số xe vận chuyển cát, xi măng, đá',
          'Ủy nhiệm chi ngân hàng chuyển tiền vào tài khoản bên bán',
          'Báo cáo chứng minh vật tư đã đưa vào định mức công trình'
        ],
        riskIfDelayed: 'Bị quy kết sử dụng hóa đơn bất hợp pháp, loại toàn bộ thuế GTGT và chi phí TNDN, phạt từ 1 - 3 lần thuế trốn và nguy cơ chuyển hồ sơ cơ quan điều tra.'
      },
      {
        id: 't2-04',
        title: 'Chuẩn bị hồ sơ lao động tiền lương và đối chiếu khớp đúng hồ sơ BHXH',
        legalBase: 'Nghị định 293/2025/NĐ-CP, Nghị định 12/2022/NĐ-CP & Quyết định 595/QĐ-BHXH',
        decreeId: 'nd-293-2025',
        articleNum: '3',
        decreeLabel: 'Nghị định 293/2025/NĐ-CP — Điều 3',
        actionGuide: 'Đối chiếu 3 bảng: Danh sách quyết toán thuế TNCN (Mẫu 05/QTT-TNCN), Danh sách tham gia BHXH (Mẫu D02-LT) và Bảng thanh toán tiền lương qua ngân hàng. Đảm bảo mức lương cơ bản >= lương tối thiểu vùng Gia Lai. Kẹp hồ sơ miễn trừ BHXH (lao động thời vụ dưới 1 tháng, người đã nghỉ hưu hưởng chế độ).',
        requiredDossier: [
          'Hợp đồng lao động và các phụ lục điều chỉnh lương',
          'Bảng thanh toán tiền lương có xác nhận chi trả qua ngân hàng hoặc chữ ký NLĐ',
          'Thông báo kết quả đóng BHXH Mẫu C12-TS hàng tháng của cơ quan BHXH',
          'Bảng chấm công và Quy chế lương thưởng nội bộ công ty'
        ],
        riskIfDelayed: 'Phạt tiền từ 20 - 75 triệu đồng do trả lương dưới mức tối thiểu vùng; truy thu tiền đóng BHXH và bóc tách chi phí lương nhân công xây dựng không hợp lý.'
      },
      {
        id: 't2-05',
        title: 'Kiểm tra cấp Chứng từ khấu trừ thuế TNCN điện tử cho lao động nghỉ việc',
        legalBase: 'Nghị định 70/2025/NĐ-CP & Điều 32 Nghị định 123/2020/NĐ-CP',
        decreeId: 'nd-70-2025',
        articleNum: '4',
        decreeLabel: 'Nghị định 70/2025/NĐ-CP — Điều 4',
        actionGuide: 'Rà soát danh sách nhân công công trình, thợ mộc thời vụ đã nghỉ việc trong năm tài chính có khấu trừ 10% thuế TNCN. Xuất và gửi ngay Chứng từ khấu trừ thuế TNCN điện tử theo chuẩn dữ liệu Tổng cục Thuế để NLĐ tự đi quyết toán.',
        requiredDossier: [
          'File XML và PDF chứng từ khấu trừ thuế TNCN điện tử đã cấp',
          'Danh sách ký nhận hoặc biên lai email gửi mã tra cứu chứng từ thuế cho NLĐ',
          'Bảng kê khấu trừ thuế TNCN Mẫu 05-2/BK-TNCN'
        ],
        riskIfDelayed: 'Phạt từ 2 - 5 triệu đồng về hành vi chậm cấp hoặc không cấp chứng từ khấu trừ thuế TNCN điện tử cho người lao động.'
      },
      {
        id: 't2-06',
        title: 'Hồ sơ định mức tiêu hao gỗ xẻ, sơn PU và cấp phối bê tông thương phẩm',
        legalBase: 'Điều 4 Thông tư 96/2015/TT-BTC & Tiêu chuẩn Quốc gia TCVN về Bê tông',
        decreeId: 'tt-96-2015',
        articleNum: '4',
        decreeLabel: 'Thông tư 96/2015/TT-BTC — Điều 4',
        actionGuide: 'Tập hợp Quyết định ban hành định mức kỹ thuật gỗ xẻ sấy, sơn PU của xưởng mộc Phú Tài và Định mức cấp phối xi măng cát đá của trạm trộn bê tông. Kẹp Phiếu thí nghiệm nén mẫu bê tông R28 của phòng kiểm định LAS-XD chứng minh chất lượng cấp phối.',
        requiredDossier: [
          'Quyết định ban hành Định mức tiêu hao nguyên vật liệu nội bộ của TGĐ',
          'Lệnh sản xuất và Thẻ tính giá thành sản phẩm TK 154',
          'Phiếu giao nhận bê tông in từ cân điện tử trạm trộn và Phiếu thí nghiệm nén mẫu R28',
          'Biên bản thu hồi phế liệu dăm gỗ mùn cưa và hạch toán giảm chi phí'
        ],
        riskIfDelayed: 'Đoàn kiểm tra quy kết chi phí nguyên vật liệu vượt định mức, xuất toán chi phí xi măng, đá, gỗ xẻ và truy thu thuế TNDN 20%.'
      },
      {
        id: 't2-07',
        title: 'Phân loại tài liệu thành 3 tệp hồ sơ chuyên biệt trước khi xuất trình',
        legalBase: 'Điều 110, Điều 111 Luật Quản lý thuế số 38/2019/QH14',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '110',
        decreeLabel: 'Luật QLT 38/2019 — Điều 110',
        actionGuide: 'Phân chia tài liệu thành 3 nhóm rõ ràng: Tệp 1 (Hồ sơ pháp định nộp ngay: BCTC, Tờ khai thuế, Sổ cái in đóng quyển); Tệp 2 (Hồ sơ giải trình chi tiết: Hợp đồng, Nghiệm thu, Định mức kỹ thuật, chỉ xuất khi đoàn có yêu cầu cụ thể); Tệp 3 (Tài liệu nội bộ, tuyệt đối không xuất trình).',
        requiredDossier: [
          'Tệp 1: Hồ sơ đại cương và sổ sách kế toán chính thức đã duyệt',
          'Tệp 2: Hồ sơ nghiệp vụ chi tiết theo từng chuyên đề sắc thuế',
          'Mục lục hồ sơ (Index) chi tiết từng tập tài liệu có đánh số thứ tự'
        ],
        riskIfDelayed: 'Xuất trình lộn xộn khiến đoàn thanh tra nghi ngờ độ tin cậy của sổ sách, tự ý lục tìm tài liệu nội bộ dẫn đến mở rộng phạm vi kiểm tra bất lợi cho DN.'
      },
      {
        id: 't2-08',
        title: 'Thiết lập Sổ theo dõi giao nhận hồ sơ có ký nhận 2 bên với kiểm tra viên',
        legalBase: 'Điều 111 Luật Quản lý thuế số 38/2019/QH14',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '111',
        decreeLabel: 'Luật QLT 38/2019 — Điều 111',
        actionGuide: 'In sẵn mẫu Biên bản giao nhận tài liệu có 2 cột chữ ký: Đại diện Kiểu Việt bàn giao và Kiểm tra viên tiếp nhận. Ghi rõ: Tên hồ sơ, số trang, bản gốc hay bản sao y, ngày giờ bàn giao và thời hạn hoàn trả.',
        requiredDossier: [
          'Sổ/Biên bản bàn giao tài liệu phục vụ kiểm tra thuế',
          'Phiếu yêu cầu cung cấp tài liệu của Trưởng đoàn kiểm tra'
        ],
        riskIfDelayed: 'Thất lạc chứng từ gốc quan trọng (Hợp đồng, hóa đơn gốc, nghiệm thu) không có bằng chứng chứng minh đã nộp cho đoàn, dẫn đến bị kết luận thiếu chứng từ.'
      }
    ]
  },
  {
    phase: 3,
    label: 'Diễn tập phản biện & Thiết lập phòng tiếp đoàn',
    daysBefore: 'Trước 7 ngày (Giai đoạn SẴN SÀNG)',
    color: 'amber',
    objective: 'Bố trí không gian làm việc an toàn, diễn tập kịch bản phản biện 5 điểm nóng, thống nhất đầu mối phát ngôn và bảo vệ tối đa lợi ích doanh nghiệp.',
    legalRule: 'Điều 111 & Điều 112 Luật Quản lý thuế số 38/2019/QH14: Quyền giải trình, bảo lưu ý kiến trong biên bản kiểm tra và quyền khiếu nại của người nộp thuế.',
    tasks: [
      {
        id: 't3-01',
        title: 'Bố trí phòng làm việc cách biệt cho đoàn kiểm tra & bảo mật mạng nội bộ',
        legalBase: 'Điều 110 Luật Quản lý thuế số 38/2019/QH14',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '110',
        decreeLabel: 'Luật QLT 38/2019 — Điều 110',
        actionGuide: 'Bố trí phòng họp riêng biệt có khóa cửa, trang bị máy in, máy photo, đường truyền mạng internet riêng (Wifi khách) tách biệt hoàn toàn với hệ thống máy chủ mạng nội bộ công ty. Khóa toàn bộ các phòng kế toán và phòng lưu trữ hồ sơ các năm khác.',
        requiredDossier: [
          'Văn phòng phẩm, máy in, máy scan, đường truyền internet riêng',
          'Nội quy tiếp đoàn thanh tra kiểm tra nội bộ Kiểu Việt'
        ],
        riskIfDelayed: 'Đoàn kiểm tra tự do tiếp cận các tài liệu nhạy cảm hoặc các file nháp nội bộ trên mạng máy tính công ty, gây lộ thông tin bất lợi.'
      },
      {
        id: 't3-02',
        title: 'Ban hành Quyết định phân công đầu mối duy nhất làm việc với Đoàn',
        legalBase: 'Điều 111 Luật Quản lý thuế số 38/2019/QH14 & Luật Doanh nghiệp 2020',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '111',
        decreeLabel: 'Luật QLT 38/2019 — Điều 111',
        actionGuide: 'Tổng Giám đốc ký Quyết định phân công Kế toán trưởng làm đầu mối duy nhất phát ngôn và làm việc trực tiếp với Trưởng đoàn. Chuẩn bị Giấy ủy quyền theo mẫu pháp luật nếu Tổng Giám đốc vắng mặt trong những ngày làm việc tại trụ sở.',
        requiredDossier: [
          'Quyết định phân công nhân sự tiếp đoàn kiểm tra thuế',
          'Văn bản ủy quyền đại diện doanh nghiệp có công chứng/chữ ký TGĐ',
          'Danh sách số điện thoại khẩn cấp của Ban Giám đốc và Luật sư tư vấn'
        ],
        riskIfDelayed: 'Nhân viên kế toán hoặc thủ kho tự ý trả lời phỏng vấn đoàn kiểm tra sai lệch thực tế, tạo mâu thuẫn số liệu khiến đoàn lập biên bản bắt lỗi.'
      },
      {
        id: 't3-03',
        title: 'Diễn tập kịch bản phản biện và bảo vệ 5 điểm nóng dễ bị xuất toán nhất',
        legalBase: 'Điều 111 Luật QLT 38/2019, TT 96/2015/TT-BTC & NĐ 132/2020/NĐ-CP',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '111',
        decreeLabel: 'Luật QLT 38/2019 — Điều 111',
        actionGuide: 'Ban Giám đốc và Kế toán trưởng diễn tập bảo vệ 5 tình huống: (1) Doanh thu công trình dở dang chưa nghiệm thu; (2) Trích trước TK 335; (3) Hao hụt sàng tuyển mỏ đá; (4) Khấu hao xe bồn bê tông; (5) Chi phí lãi vay vượt 30% EBITDA. Chuẩn bị sẵn luận điểm và căn cứ điều luật.',
        requiredDossier: [
          'Bản nháp hồ sơ giải trình chi tiết cho 5 điểm nóng trọng điểm',
          'Hồ sơ kỹ thuật và văn bản hướng dẫn chuyên ngành có liên quan',
          'Các công văn hướng dẫn của Tổng cục Thuế trong các trường hợp tương tự'
        ],
        riskIfDelayed: 'Bị động khi đoàn kiểm tra chất vấn dồn dập, lúng túng không đưa ra được căn cứ pháp lý bảo vệ chi phí dẫn đến phải ký nhận biên bản bất lợi.'
      },
      {
        id: 't3-04',
        title: 'Photo sẵn bộ Báo cáo tài chính, Tờ khai thuế các năm có mã vạch xác nhận',
        legalBase: 'Điều 110 Luật Quản lý thuế số 38/2019/QH14',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '110',
        decreeLabel: 'Luật QLT 38/2019 — Điều 110',
        actionGuide: 'Photo đóng quyển sẵn 02 bộ tài liệu nộp thuế: BCTC các năm kiểm tra, Tờ khai quyết toán TNDN, Tờ khai quyết toán TNCN, Tờ khai thuế GTGT, Tờ khai thuế tài nguyên. Tất cả phải in trực tiếp từ hệ thống eTax có mã vạch và thông báo chấp nhận của CQT.',
        requiredDossier: [
          '02 bộ BCTC và Tờ khai thuế có dấu xác nhận nộp điện tử qua Cổng eTax',
          'Thông báo chấp nhận hồ sơ khai thuế điện tử của Cục Thuế tỉnh Gia Lai'
        ],
        riskIfDelayed: 'Cán bộ thuế sử dụng số liệu tờ khai cũ chưa cập nhật tờ khai bổ sung, gây mất thời gian tranh cãi và áp đặt sai số liệu.'
      },
      {
        id: 't3-05',
        title: 'Điền số liệu vào 8 Mẫu biểu giải trình thực chiến sẵn sàng bảo vệ chi phí',
        legalBase: 'Điều 111 Luật Quản lý thuế số 38/2019/QH14',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '111',
        decreeLabel: 'Luật QLT 38/2019 — Điều 111',
        actionGuide: 'Sử dụng hệ thống 8 Mẫu biểu giải trình chuẩn của Kiểu Việt (Mẫu 01 điều hòa doanh thu, Mẫu 02 trích trước 335, Mẫu 03 định mức xưởng mộc, Mẫu 04 hao hụt mỏ đá...). Điền sẵn số liệu thực tế, sẵn sàng ký duyệt và xuất trình ngay khi đoàn yêu cầu.',
        requiredDossier: [
          'Trọn bộ 8 Mẫu biểu giải trình có sẵn số liệu đối chiếu của Kiểu Việt',
          'Các bảng tính Excel phụ lục đi kèm chứng minh chi tiết từng phép tính'
        ],
        riskIfDelayed: 'Mất nhiều ngày mới soạn thảo xong văn bản giải trình, quá thời hạn 10 ngày làm việc của đoàn dẫn đến việc đoàn chốt số liệu truy thu vào biên bản.'
      },
      {
        id: 't3-06',
        title: 'Sao lưu toàn bộ dữ liệu kế toán ra ổ cứng ngoài và cloud bảo mật',
        legalBase: 'Điều 41 Luật Kế toán số 88/2015/QH13',
        decreeId: 'luat-ke-toan-2015',
        articleNum: '41',
        decreeLabel: 'Luật Kế toán 88/2015 — Điều 41',
        actionGuide: 'Thực hiện xuất file backup cơ sở dữ liệu phần mềm kế toán (MISA/Fast), sao chép ra 02 ổ cứng di động cất giữ nơi an toàn và đồng bộ lên tài khoản Google Drive bảo mật của Kiểu Việt. Đảm bảo khôi phục được số liệu ngay lập tức nếu máy tính gặp sự cố.',
        requiredDossier: [
          'File backup dữ liệu kế toán (.mbk / .bak / file Excel nén có mật khẩu)',
          'Biên bản kiểm tra an toàn dữ liệu và phân quyền truy cập'
        ],
        riskIfDelayed: 'Rủi ro máy tính hỏng hoặc dữ liệu bị can thiệp trong quá trình kiểm tra, không có bằng chứng khôi phục đối chiếu với đoàn.'
      },
      {
        id: 't3-07',
        title: 'Quán triệt nguyên tắc phát ngôn: Hỏi gì đáp nấy, không giao file nháp',
        legalBase: 'Điều 111 Luật Quản lý thuế số 38/2019/QH14',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '111',
        decreeLabel: 'Luật QLT 38/2019 — Điều 111',
        actionGuide: 'Họp toàn bộ nhân viên kế toán, thủ kho, nhân sự: Tuyệt đối tuân thủ nguyên tắc chỉ cung cấp tài liệu chính thức có ký đóng dấu; không giải thích ngoài thẩm quyền; không giao file Excel nháp chưa được Kế toán trưởng phê duyệt.',
        requiredDossier: [
          'Biên bản họp quán triệt nguyên tắc làm việc với đoàn kiểm tra thuế',
          'Bảng quy tắc phát ngôn 10 KHÔNG dành cho nhân viên Kiểu Việt'
        ],
        riskIfDelayed: 'Cán bộ thuế thu thập được file Excel nội bộ có các ghi chú chưa chuẩn xác của nhân viên, lấy đó làm chứng cứ để truy thu và phạt trốn thuế.'
      },
      {
        id: 't3-08',
        title: 'Rà soát lần cuối 55 mục danh mục hồ sơ và 15 câu hỏi rủi ro trên hệ thống',
        legalBase: 'Toàn văn 55 văn bản pháp luật kế toán, thuế và khoáng sản Kiểu Việt',
        decreeId: 'luat-quan-ly-thue-2019',
        articleNum: '110',
        decreeLabel: 'Hệ thống 55 VBPL Kiểu Việt',
        actionGuide: 'Truy cập tab Checklist Hồ Sơ (55 mục) và Bộ Câu Hỏi Rủi Ro (15 điểm nóng), kiểm tra trạng thái từng mục. Đảm bảo 100% hồ sơ bắt buộc (critical) đã có chứng từ kẹp cùng; các rủi ro đã có phương án giải trình dự phòng.',
        requiredDossier: [
          'Báo cáo tự đánh giá rủi ro thanh tra thuế Kiểu Việt (in từ hệ thống)',
          'Checklist 55 mục hồ sơ đã tích chọn và kiểm tra thực tế trong kho chứng từ'
        ],
        riskIfDelayed: 'Bỏ sót các điểm nóng nghiêm trọng khiến doanh nghiệp bị bất ngờ khi đoàn kiểm tra công bố dự thảo biên bản với số thuế truy thu lớn.'
      }
    ]
  }
];
