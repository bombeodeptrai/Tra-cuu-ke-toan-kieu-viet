const fs = require('fs');
const path = require('path');

const g4Path = path.join(__dirname, '..', 'src', 'data', 'diffs', 'group4_labor_salary_contracts.ts');
const raw = fs.readFileSync(g4Path, 'utf8');
const jsonStr = raw.replace(/import[^;]+;/, '').replace(/export const \w+[^=]+=/, '').replace(/;\s*$/, '');
const g4 = eval('(' + jsonStr + ')');

// 1. nd-293-2025: 10 items
g4['nd-293-2025'].items = [
  {
    topic: "Tăng mức lương tối thiểu vùng từ 6% - 7.5% trên toàn quốc (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 38/2022/NĐ-CP & NĐ 74/2024/NĐ-CP] Vùng I: 4.960.000đ; Vùng II: 4.410.000đ; Vùng III: 3.860.000đ; Vùng IV: 3.450.000đ/tháng.",
    newRule: "[Căn cứ: Điều 3 NĐ 293/2025/NĐ-CP] Điều chỉnh lương tối thiểu tháng: Vùng I: 5.310.000đ; Vùng II: 4.730.000đ; Vùng III: 4.140.000đ; Vùng IV: 3.700.000đ/tháng.",
    impactNote: "Công ty Cổ phần Kiểu Việt điều chỉnh mức lương tối thiểu làm căn cứ đóng BHXH cho công nhân tại công trường Gia Lai (Vùng III) và văn phòng (Vùng II) từ ngày 01/01/2026."
  },
  {
    topic: "Quy định mức lương tối thiểu theo giờ bắt buộc áp dụng (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 38/2022] Vùng I: 23.800đ/h; Vùng II: 21.200đ/h; Vùng III: 18.600đ/h; Vùng IV: 16.600đ/h.",
    newRule: "[Căn cứ: Điều 3 NĐ 293/2025] Lương giờ: Vùng I: 25.500đ/h; Vùng II: 22.700đ/h; Vùng III: 20.000đ/h; Vùng IV: 17.800đ/h áp dụng cho lao động khoán việc theo giờ.",
    impactNote: "Kiểu Việt áp dụng đơn giá lương tối thiểu theo giờ chuẩn xác cho lao động thời vụ bốc vác, san gạt thủ công ngắn hạn tại các mỏ đất."
  },
  {
    topic: "Bãi bỏ điều kiện cộng thêm 7% cho lao động qua đào tạo nghề (Điều 4)",
    type: "removed",
    oldRule: "[Căn cứ: NĐ 90/2019 & các NĐ trước] Doanh nghiệp bắt buộc phải trả lương cao hơn ít nhất 7% so với mức lương tối thiểu vùng đối với người lao động làm công việc đòi hỏi đã qua học nghề, đào tạo nghề.",
    newRule: "[Căn cứ: NĐ 293/2025 theo tinh thần BLLĐ 2019] Không còn bắt buộc cứng quy định cộng thêm 7%; doanh nghiệp và người lao động tự thỏa thuận mức lương theo tay nghề và hiệu quả công việc, miễn không thấp hơn lương tối thiểu vùng.",
    impactNote: "Kiểu Việt linh hoạt xây dựng thang bảng lương thợ lái máy đào, máy ủi bậc 3/7, bậc 4/7 theo năng suất thực tế mà không bị ràng buộc cứng nhắc."
  },
  {
    topic: "Quy định chuyển vùng địa bàn áp dụng lương tối thiểu tại khu vực dự án (Phụ lục)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Phân vùng cũ.",
    newRule: "[Căn cứ: Phụ lục Danh mục địa bàn ban hành kèm NĐ 293/2025] Cập nhật điều chỉnh các thị xã, huyện có khu công nghiệp, dự án hạ tầng lớn từ Vùng IV lên Vùng III hoặc từ Vùng III lên Vùng II.",
    impactNote: "Kế toán Kiểu Việt rà soát chính xác địa bàn thi công từng gói thầu để áp dụng mức lương vùng phù hợp, tránh nộp thiếu BHXH."
  },
  {
    topic: "Nguyên tắc trả lương cho công việc nặng nhọc, độc hại, nguy hiểm (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Quy định cứng phụ cấp độc hại 5% - 7%.",
    newRule: "[Căn cứ: Điều 4 NĐ 293/2025] Mức lương trả cho người lao động làm nghề, công việc nặng nhọc, độc hại, nguy hiểm phải cao hơn mức lương của công việc có độ phức tạp tương đương làm việc trong điều kiện lao động bình thường.",
    impactNote: "Kiểu Việt thiết lập phụ cấp độc hại từ 10% - 15% cho công nhân vận hành máy khoan nổ mìn và rải thảm nhựa đường nóng 160 độ C."
  },
  {
    topic: "Thời điểm có hiệu lực và rà soát hợp đồng lao động (Điều 5)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Áp dụng các năm trước.",
    newRule: "[Căn cứ: Điều 5 NĐ 293/2025] Có hiệu lực từ 01/01/2026. Người sử dụng lao động có trách nhiệm rà soát lại các thỏa thuận trong HĐLĐ, thỏa ước LĐTT để sửa đổi, bổ sung kịp thời.",
    impactNote: "Phòng Nhân sự Kiểu Việt hoàn tất ký Phụ lục HĐLĐ điều chỉnh lương cho 100% cán bộ công nhân viên trong tháng 12/2025."
  },
  {
    topic: "Chế tài xử phạt nếu trả lương thấp hơn mức lương tối thiểu vùng (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 28/2020] Phạt tiền từ 10 - 50 triệu.",
    newRule: "[Căn cứ: NĐ 12/2022 và NĐ 293/2025] Phạt tiền từ 40.000.000đ đến 150.000.000đ (đối với tổ chức) tùy theo số lượng lao động bị vi phạm và buộc truy nộp đủ tiền lương cộng lãi suất ngân hàng.",
    impactNote: "Kiểu Việt cam kết trả lương cơ bản luôn cao hơn ít nhất 15% so với lương tối thiểu vùng, phòng ngừa 100% rủi ro vi phạm pháp luật."
  },
  {
    topic: "Cơ sở xác định mức lương tối thiểu theo tháng đối với lao động hưởng lương khoán sản phẩm (Điều 4)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Chưa có hướng dẫn chi tiết quy đổi.",
    newRule: "[Căn cứ: Điều 4 Khoản 3 NĐ 293/2025] Người lao động hưởng lương theo sản phẩm, lương khoán thì mức lương quy đổi theo tháng hoặc theo giờ khi làm đủ thời gian tiêu chuẩn không được thấp hơn mức lương tối thiểu vùng.",
    impactNote: "Kiểu Việt tính toán định mức khoán khối lượng đào đắp (m3 đất/ca) bảo đảm công nhân hoàn thành ca làm việc luôn đạt thu nhập vượt lương tối thiểu vùng."
  },
  {
    topic: "Bảo lưu các chế độ phụ cấp công trường đã thỏa thuận có lợi hơn cho người lao động (Điều 4)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Doanh nghiệp có thể cắt bớt phụ cấp khi tăng lương cơ bản.",
    newRule: "[Căn cứ: Điều 4 Khoản 2 NĐ 293/2025] Người sử dụng lao động không được xóa bỏ hoặc cắt giảm các chế độ tiền lương khi người lao động làm thêm giờ, làm việc vào ban đêm, chế độ bồi dưỡng bằng hiện vật và các chế độ khác đã cam kết.",
    impactNote: "Kiểu Việt giữ nguyên tiền ăn ca 50.000đ/ngày và tiền phụ cấp xa nhà cho toàn bộ công nhân tuyến công trình."
  },
  {
    topic: "Tác động của mức lương tối thiểu vùng đến mức đóng bảo hiểm thất nghiệp tối đa (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: Luật Việc làm 2013] Trần đóng BHTN tối đa bằng 20 tháng lương tối thiểu vùng.",
    newRule: "[Căn cứ: Điều 3 NĐ 293/2025 & Luật Việc làm] Nâng mức trần đóng BHTN: Vùng I: 106.200.000đ; Vùng II: 94.600.000đ; Vùng III: 82.800.000đ; Vùng IV: 74.000.000đ/tháng.",
    impactNote: "Kế toán tiền lương Kiểu Việt cập nhật mức trần đóng BHTN mới vào phần mềm tính lương, bảo đảm trích nộp đúng tỷ lệ 1% quỹ lương."
  }
];

// 2. blld-45-2019: 12 items
g4['blld-45-2019'].items = [
  {
    topic: "Chỉ còn 02 loại hợp đồng lao động: Không xác định thời hạn và Xác định thời hạn (Điều 20)",
    type: "removed",
    oldRule: "[Căn cứ: BLLĐ 2012 Điều 22] Gồm 03 loại hợp đồng: KXDTH, XĐTH (12-36 tháng) và Hợp đồng mùa vụ/theo công việc nhất định dưới 12 tháng.",
    newRule: "[Căn cứ: Điều 20 BLLĐ 2019] Bãi bỏ hoàn toàn 'Hợp đồng mùa vụ/công việc nhất định'; chỉ còn 02 loại: HĐLĐ không xác định thời hạn và HĐLĐ xác định thời hạn (tối đa 36 tháng, chỉ được ký tối đa 2 lần).",
    impactNote: "Kiểu Việt chuyển toàn bộ công nhân thời vụ sang ký HĐLĐ xác định thời hạn 6 tháng - 12 tháng theo từng gói thầu dự án và đóng BHXH bắt buộc đầy đủ."
  },
  {
    topic: "Người lao động có quyền đơn phương chấm dứt HĐLĐ không cần lý do (Điều 35)",
    type: "modified",
    oldRule: "[Căn cứ: BLLĐ 2012 Điều 37] Người lao động ký HĐLĐ xác định thời hạn muốn nghỉ việc phải có lý do luật định (không được bố trí đúng việc, bị ngược đãi, ốm đau...).",
    newRule: "[Căn cứ: Điều 35 BLLĐ 2019] Người lao động có quyền đơn phương chấm dứt HĐLĐ không cần bất kỳ lý do gì, chỉ cần báo trước bằng văn bản: 30 ngày (với HĐ 12-36 tháng) hoặc 45 ngày (với HĐ không xác định thời hạn).",
    impactNote: "Kiểu Việt chủ động xây dựng chế độ đãi ngộ tốt, môi trường làm việc chuyên nghiệp để giữ chân các kỹ sư nòng cốt thay vì dựa vào ràng buộc pháp lý."
  },
  {
    topic: "Công nhận Hợp đồng lao động ký kết bằng phương tiện điện tử (Điều 14)",
    type: "added",
    oldRule: "[Căn cứ: BLLĐ 2012 Điều 16] HĐLĐ phải được giao kết bằng văn bản giấy có chữ ký trực tiếp.",
    newRule: "[Căn cứ: Điều 14 Khoản 1 BLLĐ 2019] HĐLĐ được giao kết thông qua phương tiện điện tử dưới hình thức thông điệp dữ liệu theo quy định của pháp luật về giao dịch điện tử có giá trị như hợp đồng lao động bằng văn bản.",
    impactNote: "Kiểu Việt triển khai ký HĐLĐ điện tử qua chữ ký số/OTP cho kỹ sư và công nhân tại hiện trường công trường xa xôi mà không cần gửi hồ sơ giấy."
  },
  {
    topic: "Giới hạn thời giờ làm thêm giờ tối đa 40 giờ/tháng và 300 giờ/năm (Điều 107)",
    type: "modified",
    oldRule: "[Căn cứ: BLLĐ 2012 Điều 106] Làm thêm tối đa không quá 30 giờ/tháng và 200 giờ/năm.",
    newRule: "[Căn cứ: Điều 107 BLLĐ 2019 & NĐ 145/2020] Nâng giờ làm thêm tối đa lên 40 giờ/tháng; trong các trường hợp đặc biệt (như thi công công trình hạ tầng trọng điểm quốc gia theo tiến độ cấp bách) được làm thêm đến 300 giờ/năm nhưng phải thông báo bằng văn bản cho Sở LĐTBXH.",
    impactNote: "Kiểu Việt làm thủ tục gửi văn bản thông báo cho Sở LĐTBXH tỉnh Gia Lai để huy động kỹ sư làm thêm giờ tăng tốc về đích gói thầu cao tốc đúng pháp luật."
  },
  {
    topic: "Tăng tuổi nghỉ hưu theo lộ trình lên 62 tuổi với nam và 60 tuổi với nữ (Điều 169)",
    type: "modified",
    oldRule: "[Căn cứ: BLLĐ 2012 Điều 187] Tuổi nghỉ hưu là đủ 60 tuổi đối với nam và đủ 55 tuổi đối với nữ.",
    newRule: "[Căn cứ: Điều 169 BLLĐ 2019] Tăng dần tuổi nghỉ hưu: Mỗi năm tăng thêm 3 tháng đối với nam cho đến khi đủ 62 tuổi vào năm 2028; mỗi năm tăng thêm 4 tháng đối với nữ cho đến khi đủ 60 tuổi vào năm 2035.",
    impactNote: "Phòng Nhân sự Kiểu Việt theo dõi chính xác lộ trình tuổi nghỉ hưu để làm hồ sơ bảo hiểm và chuyển giao thế hệ cán bộ kỹ thuật."
  },
  {
    topic: "Nghỉ làm việc hưởng nguyên lương vào ngày Quốc khánh 02 ngày (Điều 112)",
    type: "added",
    oldRule: "[Căn cứ: BLLĐ 2012] Nghỉ lễ Quốc khánh 01 ngày (ngày 02 tháng 9).",
    newRule: "[Căn cứ: Điều 112 Khoản 1 Điểm đ BLLĐ 2019] Nghỉ lễ Quốc khánh 02 ngày (ngày 02/09 và 01 ngày liền kề trước hoặc sau do Thủ tướng Chính phủ quyết định hàng năm) hưởng nguyên lương.",
    impactNote: "Kế toán Kiểu Việt tính toán đủ 2 ngày công hưởng nguyên lương cho anh em công nhân dịp Quốc khánh 2/9."
  },
  {
    topic: "Tiền lương làm thêm giờ vào ban đêm tính lũy tiến (Điều 98)",
    type: "modified",
    oldRule: "[Căn cứ: BLLĐ 2012] Quy định công thức tính lương đêm.",
    newRule: "[Căn cứ: Điều 98 BLLĐ 2019] Làm đêm hưởng thêm ít nhất 30% lương; làm thêm giờ vào ban đêm ngày thường hưởng ít nhất 210%, ngày nghỉ hàng tuần ít nhất 270%, ngày lễ tết ít nhất 390% tiền lương.",
    impactNote: "Kiểu Việt xây dựng phần mềm tự động chấm công ca đêm và tính hệ số làm thêm giờ chuẩn xác cho tổ rải thảm bê tông nhựa ban đêm."
  },
  {
    topic: "Bãi bỏ quy định nộp Thang bảng lương cho Phòng Lao động cấp huyện (Điều 93)",
    type: "removed",
    oldRule: "[Căn cứ: BLLĐ 2012 Điều 93] Doanh nghiệp bắt buộc phải xây dựng Thang lương, Bảng lương và nộp cho cơ quan quản lý nhà nước về lao động cấp huyện.",
    newRule: "[Căn cứ: Điều 93 BLLĐ 2019] Doanh nghiệp tự xây dựng Thang bảng lương, định mức lao động và công khai tại nơi làm việc trước khi thực hiện mà KHÔNG phải nộp hay đăng ký với cơ quan quản lý nhà nước.",
    impactNote: "Kiểu Việt tự chủ hoàn toàn trong việc thiết lập hệ thống thang bảng lương nội bộ, cắt giảm thủ tục hành chính phiền hà."
  },
  {
    topic: "Ủy quyền nhận lương cho người thân hợp pháp (Điều 94)",
    type: "added",
    oldRule: "[Căn cứ: BLLĐ 2012] Người lao động phải trực tiếp nhận lương.",
    newRule: "[Căn cứ: Điều 94 Khoản 1 BLLĐ 2019] Trường hợp người lao động không thể nhận lương trực tiếp thì người sử dụng lao động có thể trả lương cho người được người lao động ủy quyền hợp pháp.",
    impactNote: "Tạo thuận lợi cho công nhân Kiểu Việt làm việc tại công trường hẻo lánh ủy quyền nhận tiền lương chuyển về cho vợ con ở quê."
  },
  {
    topic: "Doanh nghiệp phải trả phí mở tài khoản ngân hàng trả lương cho người lao động (Điều 96)",
    type: "added",
    oldRule: "[Căn cứ: BLLĐ 2012] Chi phí mở tài khoản do hai bên thỏa thuận.",
    newRule: "[Căn cứ: Điều 96 Khoản 2 BLLĐ 2019] Trường hợp trả lương qua tài khoản cá nhân của người lao động được mở tại ngân hàng thì người sử dụng lao động phải trả các loại phí liên quan đến việc mở tài khoản và chuyển tiền lương.",
    impactNote: "Kiểu Việt ký hợp đồng hợp tác với Ngân hàng BIDV/VietinBank miễn phí 100% phí phát hành thẻ ATM và phí chuyển tiền trả lương cho cán bộ công nhân."
  },
  {
    topic: "Quy định thử việc không quá 180 ngày đối với vị trí quản lý doanh nghiệp (Điều 25)",
    type: "modified",
    oldRule: "[Căn cứ: BLLĐ 2012] Thử việc tối đa 60 ngày đối với trình độ cao đẳng trở lên.",
    newRule: "[Căn cứ: Điều 25 Khoản 1 BLLĐ 2019] Thời gian thử việc không quá 180 ngày đối với công việc của người quản lý doanh nghiệp theo quy định của Luật Doanh nghiệp.",
    impactNote: "Kiểu Việt áp dụng thời gian thử việc 6 tháng khi tuyển dụng các vị trí Giám đốc Ban điều hành dự án cao tốc để thẩm định năng lực quản trị thực tế."
  },
  {
    topic: "Nghiêm cấm người sử dụng lao động giữ bản chính giấy tờ tùy thân của người lao động (Điều 17)",
    type: "modified",
    oldRule: "[Căn cứ: BLLĐ 2012 Điều 20] Cấm giữ bản chính giấy tờ tùy thân.",
    newRule: "[Căn cứ: Điều 17 BLLĐ 2019] Nghiêm cấm giữ bản chính giấy tờ tùy thân, văn bằng, chứng chỉ; nghiêm cấm yêu cầu người lao động phải thực hiện biện pháp bảo đảm bằng tiền hoặc tài sản khác cho việc thực hiện HĐLĐ.",
    impactNote: "Phòng Hành chính Kiểu Việt tuyệt đối chỉ lưu bản sao công chứng hoặc bản chụp CCCD gắn chip của người lao động, bảo đảm tuân thủ luật 100%."
  }
];

// 3. tt-45-2013: 14 items
g4['tt-45-2013'].items = [
  {
    topic: "Tiêu chuẩn nhận biết Tài sản cố định hữu hình: Nguyên giá từ 30 triệu đồng trở lên (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: TT 203/2009] Tiêu chuẩn nguyên giá tài sản cố định từ 10.000.000 đồng trở lên.",
    newRule: "[Căn cứ: Điều 3 Khoản 1 TT 45/2013] Nâng tiêu chuẩn nhận biết TSCĐ: Chắc chắn thu được lợi ích kinh tế trong tương lai; có thời gian sử dụng trên 1 năm; và có nguyên giá từ 30.000.000 đồng trở lên.",
    impactNote: "Kiểu Việt chuyển toàn bộ các công cụ dụng cụ thi công (máy đầm cóc, máy hàn điện, máy phát điện nhỏ) có giá dưới 30 triệu sang theo dõi CCDC trên TK 242 và phân bổ tối đa 3 năm."
  },
  {
    topic: "Khung thời gian trích khấu hao tài sản cố định máy móc thi công xây dựng (Phụ lục 1)",
    type: "modified",
    oldRule: "[Căn cứ: TT 203/2009] Khung khấu hao cũ.",
    newRule: "[Căn cứ: Phụ lục 1 TT 45/2013] Quy định chi tiết khung khấu hao máy móc xây dựng: Máy đào, máy xúc, máy ủi từ 6 - 10 năm; Xe ô tô vận tải chở đất đá từ 6 - 10 năm; Trạm nghiền sàng đá mỏ từ 8 - 15 năm.",
    impactNote: "Kiểu Việt đăng ký trích khấu hao dàn xe ben Howo và máy xúc Komatsu 6 năm (mức tối thiểu cho phép) để tối đa hóa chi phí được trừ thuế trong những năm đầu dự án."
  },
  {
    topic: "Thời gian phân bổ chi phí công cụ, dụng cụ tối đa không quá 3 năm (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: TT 203/2009] Cho phép phân bổ CCDC theo thời gian ước tính của doanh nghiệp.",
    newRule: "[Căn cứ: Điều 3 Khoản 2 TT 45/2013] Đối với những tài sản không đủ tiêu chuẩn nhận biết TSCĐ (nguyên giá dưới 30 triệu) thì chi phí mua sắm được phân bổ dần vào chi phí hoạt động SXKD với thời gian tối đa không quá 3 năm.",
    impactNote: "Kiểu Việt phân bổ chi phí giàn giáo, cốp pha thép mua sắm theo từng gói thầu trong vòng 24 - 36 tháng theo đúng quy định."
  },
  {
    topic: "Phương pháp trích khấu hao TSCĐ theo khối lượng công suất hoàn thành (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Khấu hao theo đường thẳng là chủ đạo.",
    newRule: "[Căn cứ: Điều 13 Khoản 3 TT 45/2013] Cho phép doanh nghiệp áp dụng phương pháp trích khấu hao theo khối lượng, số lượng sản phẩm đối với máy móc thiết bị thỏa mãn điều kiện công suất thiết kế rõ ràng (như trạm nghiền đá tính theo m3 đá thành phẩm).",
    impactNote: "Kiểu Việt áp dụng khấu hao trạm nghiền theo số m3 đá nghiền thực tế: Tháng nào nghiền nhiều trích nhiều, tháng mưa nghỉ trích ít, phản ánh chuẩn xác giá thành sản phẩm."
  },
  {
    topic: "Trích khấu hao đối với TSCĐ tạm ngừng hoạt động do thời vụ hoặc sửa chữa (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Máy dừng hoạt động không được trích khấu hao.",
    newRule: "[Căn cứ: Điều 9 Khoản 1 Điểm d TT 45/2013 sửa đổi bởi TT 147/2016] TSCĐ tạm ngừng do theo mùa vụ dưới 9 tháng hoặc tạm ngừng để sửa chữa, bảo dưỡng dưới 12 tháng sau đó tiếp tục phục vụ SXKD thì trong thời gian tạm ngừng vẫn phải trích khấu hao và được tính vào chi phí được trừ.",
    impactNote: "Kiểu Việt trích khấu hao liên tục dàn máy thi công trong mùa mưa Tây Nguyên (tháng 6 đến tháng 9) mà không bị cơ quan thuế bóc tách chi phí."
  },
  {
    topic: "Quy định trích khấu hao nhanh tối đa không quá 2 lần mức khấu hao đường thẳng (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Doanh nghiệp có lãi mới được trích khấu hao nhanh.",
    newRule: "[Căn cứ: Điều 13 Khoản 2 TT 45/2013] Doanh nghiệp hoạt động có hiệu quả kinh tế cao được trích khấu hao nhanh nhưng tối đa không quá 2 lần mức khấu hao xác định theo phương pháp đường thẳng để nhanh chóng đổi mới công nghệ máy móc.",
    impactNote: "Kiểu Việt áp dụng khấu hao nhanh cho máy định vị vệ tinh và máy rải nhựa công nghệ Đức để hoàn vốn sớm và giảm số thuế TNDN phải nộp."
  },
  {
    topic: "Đăng ký phương pháp trích khấu hao TSCĐ với cơ quan thuế trực tiếp (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Nộp đăng ký hàng năm.",
    newRule: "[Căn cứ: Điều 13 Khoản 3 TT 45/2013] Doanh nghiệp phải thông báo phương pháp trích khấu hao TSCĐ mà doanh nghiệp lựa chọn áp dụng cho cơ quan thuế quản lý trực tiếp trước khi bắt đầu thực hiện trích khấu hao.",
    impactNote: "Kiểu Việt nộp thông báo đăng ký trích khấu hao đường thẳng nhất quán cho toàn bộ máy móc ngay từ khi đưa tài sản vào vận hành."
  },
  {
    topic: "Xác định nguyên giá TSCĐ tự chế tạo, tự xây dựng hoặc lắp đặt (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Nguyên giá bao gồm cả lãi nội bộ.",
    newRule: "[Căn cứ: Điều 4 Khoản 1 Điểm c TT 45/2013] Nguyên giá TSCĐ tự xây dựng là giá trị quyết toán công trình đầu tư xây dựng theo quy định hiện hành; không bao gồm các khoản lãi nội bộ hoặc chi phí không hợp lý.",
    impactNote: "Kiểu Việt tự gia công lắp dựng trạm trộn bê tông nhựa: Tập hợp toàn bộ chi phí vật tư sắt thép, nhân công và chi phí chạy thử vào TK 241 để kết chuyển sang TK 211 chuẩn xác."
  },
  {
    topic: "Xử lý chi phí nâng cấp và chi phí sửa chữa lớn tài sản cố định (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Mọi khoản sửa chữa đều được vốn hóa.",
    newRule: "[Căn cứ: Điều 7 TT 45/2013] Chi phí nâng cấp làm tăng công suất, kéo dài thời gian sử dụng được ghi tăng nguyên giá TSCĐ; chi phí sửa chữa, bảo dưỡng định kỳ chỉ được hạch toán vào chi phí SXKD hoặc phân bổ dần tối đa 3 năm.",
    impactNote: "Kiểu Việt hạch toán chi phí thay động cơ mới cho máy xúc vào tăng nguyên giá TSCĐ (TK 211), còn chi phí thay dầu mỡ xích lăn hạch toán vào chi phí thi công trong kỳ (TK 154/TK 623)."
  },
  {
    topic: "Quy định khấu hao xe ô tô từ 9 chỗ ngồi trở xuống có nguyên giá trên 1.6 tỷ đồng (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Khấu hao toàn bộ.",
    newRule: "[Căn cứ: Điều 9 TT 45/2013 & TT 151/2014] Ô tô chở người từ 9 chỗ trở xuống có nguyên giá vượt trên 1.6 tỷ đồng (trừ xe kinh doanh du lịch) thì phần khấu hao tương ứng với nguyên giá vượt trên 1.6 tỷ không được tính vào chi phí được trừ khi xác định thuế TNDN.",
    impactNote: "Kiểu Việt lựa chọn xe công vụ lãnh đạo giá trị dưới 1.6 tỷ đồng để đảm bảo 100% khấu hao được chấp nhận là chi phí hợp lý hợp lệ."
  },
  {
    topic: "Trích lập và theo dõi hồ sơ nguồn gốc tài sản cố định (Điều 10)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Quản lý sổ sách đơn giản.",
    newRule: "[Căn cứ: Điều 10 TT 45/2013] Mỗi TSCĐ phải có một bộ hồ sơ riêng gồm: Hợp đồng mua bán, hóa đơn GTGT, biên bản giao nhận bàn giao TSCĐ, phiếu bảo hành, thẻ TSCĐ và hồ sơ theo dõi trích khấu hao lũy kế qua các năm.",
    impactNote: "Phòng Vật tư & Kế toán Kiểu Việt thiết lập mã QR định danh dán trực tiếp lên thân từng máy xúc, máy ủi để quản lý hồ sơ tài sản đồng bộ."
  },
  {
    topic: "Xử lý nhượng bán, thanh lý tài sản cố định đã hết hạn sử dụng (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Xóa sổ tài sản.",
    newRule: "[Căn cứ: Điều 8 TT 45/2013] Khi nhượng bán, thanh lý TSCĐ, doanh nghiệp phải thành lập Hội đồng đánh giá thanh lý TSCĐ, lập Biên bản thanh lý, xuất hóa đơn bán TSCĐ và hạch toán vào thu nhập/chi phí khác (TK 711/811).",
    impactNote: "Kiểu Việt thực hiện đấu giá thanh lý xe máy thi công cũ công khai, có đầy đủ Biên bản họp hội đồng và hóa đơn tài chính hợp pháp."
  },
  {
    topic: "Thời điểm bắt đầu và chấm dứt trích khấu hao tài sản cố định (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Tính tròn tháng.",
    newRule: "[Căn cứ: Điều 9 Khoản 9 TT 45/2013] Việc trích hoặc thôi trích khấu hao TSCĐ được thực hiện bắt đầu từ ngày (theo số ngày của tháng) mà TSCĐ tăng hoặc giảm, phản ánh chính xác đến từng ngày phát sinh.",
    impactNote: "Kế toán Kiểu Việt trích khấu hao máy đào mới mua từ ngày ký Biên bản nghiệm thu đưa vào sử dụng, tính chính xác số ngày trong tháng."
  },
  {
    topic: "Đánh giá lại tài sản cố định khi góp vốn liên danh, chia tách doanh nghiệp (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Tính theo giá trị sổ sách.",
    newRule: "[Căn cứ: Điều 5 Khoản 1 TT 45/2013] TSCĐ khi đem góp vốn liên danh hoặc chia tách, hợp nhất phải được Hội đồng giao nhận hoặc Tổ chức thẩm định giá độc lập đánh giá lại theo giá thị trường tại thời điểm giao dịch.",
    impactNote: "Kiểu Việt thuê đơn vị thẩm định giá độc lập định giá dàn xe máy thiết bị khi thành lập liên danh nhà thầu thi công hạ tầng giao thông lớn."
  }
];

// 4. nd-73-2024: 10 items
g4['nd-73-2024'].items = [
  {
    topic: "Tăng mức lương cơ sở từ 1.800.000 đồng lên 2.340.000 đồng/tháng (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 24/2023] Mức lương cơ sở áp dụng là 1.800.000 đồng/tháng.",
    newRule: "[Căn cứ: Điều 3 Khoản 2 NĐ 73/2024] Từ ngày 01/07/2024, áp dụng mức lương cơ sở là 2.340.000 đồng/tháng (tăng 30%, mức tăng cao nhất từ trước đến nay).",
    impactNote: "Tác động trực tiếp làm tăng trần đóng BHXH, BHYT và tăng mức trợ cấp tai nạn lao động, thai sản cho toàn thể người lao động Kiểu Việt."
  },
  {
    topic: "Nâng mức tiền lương tối đa làm căn cứ đóng BHXH, BHYT lên 46.800.000 đồng/tháng (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 24/2023 & Luật BHXH 2014] Mức lương đóng BHXH tối đa bằng 20 lần lương cơ sở cũ = 36.000.000 đồng/tháng.",
    newRule: "[Căn cứ: Điều 3 NĐ 73/2024] Mức trần tiền lương tháng đóng BHXH, BHYT bằng 20 lần mức lương cơ sở mới = 46.800.000 đồng/tháng.",
    impactNote: "Kiểu Việt điều chỉnh mức trích đóng BHXH, BHYT của Ban Tổng Giám đốc và các chuyên gia có mức lương trên 36 triệu lên mức trần 46.8 triệu/tháng."
  },
  {
    topic: "Tăng mức đóng bảo hiểm y tế tối đa lên 2.106.000 đồng/tháng (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 24/2023] Trần đóng BHYT (4.5% x 36 triệu) = 1.620.000 đồng/tháng.",
    newRule: "[Căn cứ: Điều 3 NĐ 73/2024] Mức đóng BHYT tối đa (4.5% x 46.8 triệu) = 2.106.000 đồng/tháng (trong đó doanh nghiệp đóng 3% = 1.404.000đ, người lao động đóng 1.5% = 702.000đ).",
    impactNote: "Kế toán Kiểu Việt cập nhật tỷ lệ đóng BHYT chính xác, trích nộp đầy đủ cho cơ quan BHXH tỉnh."
  },
  {
    topic: "Tăng mức trợ cấp một lần khi sinh con lên 4.680.000 đồng cho mỗi con (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: Luật BHXH 2014] Trợ cấp sinh con bằng 2 lần mức lương cơ sở cũ = 3.600.000 đồng.",
    newRule: "[Căn cứ: NĐ 73/2024] Lao động nữ sinh con được trợ cấp một lần bằng 2 lần mức lương cơ sở mới = 4.680.000 đồng cho mỗi con.",
    impactNote: "Nữ cán bộ nhân viên Kiểu Việt sinh con được hưởng chế độ thai sản và trợ cấp cao hơn, cải thiện đời sống gia đình."
  },
  {
    topic: "Tăng mức trợ cấp mai táng phí lên 23.400.000 đồng (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: Luật BHXH 2014] Trợ cấp mai táng bằng 10 tháng lương cơ sở cũ = 18.000.000 đồng.",
    newRule: "[Căn cứ: NĐ 73/2024] Trợ cấp mai táng khi người lao động đang đóng BHXH qua đời bằng 10 tháng lương cơ sở mới = 23.400.000 đồng.",
    impactNote: "Chính sách an sinh xã hội hỗ trợ kịp thời cho thân nhân gia đình người lao động khi gặp rủi ro bất trắc."
  },
  {
    topic: "Tăng mức trợ cấp tai nạn lao động, bệnh nghề nghiệp hàng tháng (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: Luật ATVSLĐ 2015] Tính theo lương cơ sở 1.8 triệu.",
    newRule: "[Căn cứ: Điều 3 NĐ 73/2024] Trợ cấp suy giảm khả năng lao động một lần và hàng tháng tăng tương ứng 30% theo mức lương cơ sở 2.340.000 đồng.",
    impactNote: "Bảo đảm quyền lợi đền bù y tế đầy đủ cho công nhân lao động đặc thù tại các công trường thi công đào đắp đất đá."
  },
  {
    topic: "Tăng mức trợ cấp dưỡng sức, phục hồi sức khỏe sau ốm đau, thai sản (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: Luật BHXH 2014] 30% mức lương cơ sở cũ = 540.000 đồng/ngày.",
    newRule: "[Căn cứ: Điều 3 NĐ 73/2024] Mức trợ cấp dưỡng sức, phục hồi sức khỏe sau ốm đau, thai sản mỗi ngày bằng 30% lương cơ sở mới = 702.000 đồng/ngày.",
    impactNote: "Cán bộ công nhân Kiểu Việt nghỉ dưỡng sức sau ốm đau nằm viện được nhận 702.000đ/ngày từ quỹ BHXH."
  },
  {
    topic: "Thời điểm áp dụng hiệu lực của Nghị định 73/2024/NĐ-CP (Điều 4)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 24/2023] Hết hiệu lực từ ngày 01/07/2024.",
    newRule: "[Căn cứ: Điều 4 NĐ 73/2024] Nghị định có hiệu lực thi hành từ ngày 01 tháng 07 năm 2024; thay thế toàn bộ Nghị định số 24/2023/NĐ-CP.",
    impactNote: "Kiểu Việt điều chỉnh kịp thời phần mềm tính lương và dữ liệu kê khai BHXH ngay từ kỳ lương tháng 7/2024."
  },
  {
    topic: "Tác động đến mức đóng kinh phí công đoàn 2% quỹ tiền lương (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 191/2013] Đóng 2% quỹ lương làm căn cứ đóng BHXH cũ.",
    newRule: "[Căn cứ: NĐ 73/2024 & NĐ 191/2013] Quỹ lương làm căn cứ đóng BHXH tăng lên dẫn đến số tiền trích nộp Kinh phí Công đoàn 2% của doanh nghiệp tăng tương ứng.",
    impactNote: "Kiểu Việt dự trù ngân sách nộp đủ 2% KPCĐ vào tài khoản Liên đoàn Lao động và giữ lại nguồn quỹ công đoàn chăm lo đời sống công nhân."
  },
  {
    topic: "Quy định mức phụ cấp trách nhiệm công việc và phụ cấp khu vực (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Tính theo hệ số x 1.8 triệu.",
    newRule: "[Căn cứ: NĐ 73/2024] Các chế độ phụ cấp tính theo hệ số gắn với mức lương cơ sở được nhân với 2.340.000 đồng, nâng cao giá trị thực tế các khoản trợ cấp hiện trường.",
    impactNote: "Tăng thêm thu nhập hỗ trợ thực tế cho các cán bộ kỹ thuật Kiểu Việt kiêm nhiệm công tác an toàn lao động công trường."
  }
];

// 5. luat-41-2024: 12 items
g4['luat-41-2024'].items = [
  {
    topic: "Giảm điều kiện số năm đóng BHXH tối thiểu để hưởng lương hưu xuống 15 năm (Điều 64)",
    type: "modified",
    oldRule: "[Căn cứ: Luật BHXH 2014 Điều 54] Người lao động phải tích lũy đủ ít nhất 20 năm đóng BHXH mới đủ điều kiện hưởng lương hưu hàng tháng.",
    newRule: "[Căn cứ: Điều 64 Luật BHXH số 41/2024/QH15] Giảm số năm đóng BHXH tối thiểu từ 20 năm xuống còn 15 năm; tạo cơ hội cho người tham gia BHXH muộn được hưởng lương hưu hàng tháng kèm thẻ BHYT miễn phí trọn đời.",
    impactNote: "Nhiều công nhân lái máy, thợ bậc cao lớn tuổi của Kiểu Việt (45-50 tuổi mới đóng BHXH) chắc chắn có cơ hội nhận lương hưu khi về già."
  },
  {
    topic: "Mở rộng đối tượng tham gia BHXH bắt buộc đối với chủ hộ kinh doanh và quản lý doanh nghiệp không hưởng lương (Điều 3)",
    type: "added",
    oldRule: "[Căn cứ: Luật BHXH 2014] Chủ hộ kinh doanh, người quản lý doanh nghiệp không hưởng lương không thuộc diện tham gia BHXH bắt buộc.",
    newRule: "[Căn cứ: Điều 3 Khoản 1 Điểm m Luật 41/2024] Bổ sung đối tượng tham gia BHXH bắt buộc: Chủ hộ kinh doanh cá thể; người quản lý doanh nghiệp, kiểm soát viên, người đại diện phần vốn nhà nước không hưởng tiền lương.",
    impactNote: "HĐQT và Ban kiểm soát Kiểu Việt rà soát để đăng ký tham gia BHXH bắt buộc đầy đủ cho các thành viên theo luật mới."
  },
  {
    topic: "Bổ sung chế độ thai sản vào gói bảo hiểm xã hội tự nguyện (Điều 4)",
    type: "added",
    oldRule: "[Căn cứ: Luật BHXH 2014] BHXH tự nguyện chỉ gồm 2 chế độ: Hưu trí và Tử tuất, không có thai sản hay ốm đau.",
    newRule: "[Căn cứ: Điều 4 và Điều 94 Luật 41/2024] Bổ sung chế độ trợ cấp thai sản đối với người tham gia BHXH tự nguyện do Ngân sách nhà nước chi trả (2.000.000 đồng/con khi sinh).",
    impactNote: "Kiểu Việt hỗ trợ định hướng cho người nhà cán bộ công nhân tham gia BHXH tự nguyện để được hưởng thêm chính sách thai sản ưu việt."
  },
  {
    topic: "Quy định biện pháp cưỡng chế trốn đóng và nợ bảo hiểm xã hội bắt buộc cực kỳ nghiêm ngặt (Điều 39 - 41)",
    type: "added",
    oldRule: "[Căn cứ: Luật BHXH 2014] Chỉ tính lãi chậm nộp 0.03%/ngày và khởi kiện dân sự đòi nợ.",
    newRule: "[Căn cứ: Điều 39, 40, 41 Luật 41/2024] Doanh nghiệp trốn đóng BHXH từ 60 ngày trở lên sẽ bị: Bắt buộc nộp số tiền trốn đóng + nộp số tiền bằng 0.03%/ngày; ngừng sử dụng hóa đơn điện tử; hoãn xuất cảnh đối với người đại diện theo pháp luật và chuyển hồ sơ khởi tố hình sự theo Điều 216 BLHS.",
    impactNote: "Cảnh báo sống còn: Kiểu Việt trích nộp BHXH hàng tháng đúng ngày, tuyệt đối không để phát sinh nợ quá hạn dẫn tới rủi ro phong tỏa hóa đơn và cấm xuất cảnh lãnh đạo."
  },
  {
    topic: "Bổ sung trợ cấp hưu trí xã hội do Ngân sách Nhà nước bảo đảm (Điều 21)",
    type: "added",
    oldRule: "[Căn cứ: Luật Căn cước cũ & Luật BHXH 2014] Người từ 80 tuổi không có lương hưu mới được hưởng trợ cấp xã hội.",
    newRule: "[Căn cứ: Điều 21 Luật 41/2024] Công dân Việt Nam từ đủ 75 tuổi trở lên không có lương hưu hoặc trợ cấp BHXH hàng tháng được hưởng trợ cấp hưu trí xã hội do NSNN bảo đảm và được cấp thẻ BHYT miễn phí.",
    impactNote: "Chính sách nhân văn của Nhà nước giảm gánh nặng chu cấp phụng dưỡng cha mẹ già cho đội ngũ công nhân Kiểu Việt."
  },
  {
    topic: "Quy định cơ chế rút BHXH một lần nhằm hạn chế rút non (Điều 70)",
    type: "modified",
    oldRule: "[Căn cứ: Nghị quyết 93/2015] Sau 1 năm nghỉ việc không tiếp tục đóng BHXH được rút toàn bộ tiền BHXH một lần.",
    newRule: "[Căn cứ: Điều 70 Luật 41/2024] Người lao động bắt đầu tham gia BHXH từ ngày 01/07/2025 trở đi chỉ được rút BHXH một lần trong một số trường hợp đặc biệt (đủ tuổi hưu mà chưa đủ 15 năm đóng, ra nước ngoài định cư, mắc bệnh hiểm nghèo); người tham gia trước 01/07/2025 vẫn được rút theo quy định cũ.",
    impactNote: "Công đoàn Kiểu Việt tích cực tuyên truyền cho công nhân bảo lưu thời gian đóng BHXH để nhận lương hưu an nhàn thay vì rút non một lần."
  },
  {
    topic: "Căn cứ đóng BHXH là tiền lương tháng bao gồm cả các khoản phụ cấp lương cố định (Điều 31)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Doanh nghiệp lách luật chia nhỏ tiền lương thành nhiều khoản phụ cấp không cố định.",
    newRule: "[Căn cứ: Điều 31 Luật 41/2024] Tiền lương làm căn cứ đóng BHXH bắt buộc là mức lương, phụ cấp lương và các khoản bổ sung khác được trả thường xuyên, ổn định trong mỗi kỳ trả lương ghi trong HĐLĐ.",
    impactNote: "Kiểu Việt chuẩn hóa kết cấu tiền lương hợp đồng, minh bạch các khoản phụ cấp công trường để vừa tuân thủ luật vừa tối ưu chi phí bảo hiểm."
  },
  {
    topic: "Giải quyết quyền lợi BHXH khi doanh nghiệp phá sản hoặc chậm đóng BHXH (Điều 42)",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Doanh nghiệp nợ bảo hiểm thì người lao động bị treo toàn bộ quá trình đóng.",
    newRule: "[Căn cứ: Điều 42 Luật 41/2024] Cơ quan BHXH thực hiện chốt và giải quyết chế độ hưu trí, ốm đau cho thời gian người lao động đã thực tế đóng BHXH; khi doanh nghiệp nộp bù sẽ xác nhận bổ sung quá trình.",
    impactNote: "Bảo vệ triệt để quyền lợi hợp pháp của người lao động trong mọi tình huống biến động kinh tế."
  },
  {
    topic: "Đơn giản hóa thủ tục hưởng chế độ ốm đau, thai sản qua môi trường điện tử (Điều 75)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2014] Nộp hồ sơ giấy giấy ra viện, giấy chứng sinh bản gốc.",
    newRule: "[Căn cứ: Điều 75 Luật 41/2024] Toàn bộ hồ sơ ốm đau, thai sản, khám chữa bệnh được liên thông tự động từ Cơ sở khám chữa bệnh sang Cổng dịch vụ công BHXH thông qua thẻ Căn cước công dân và VssID.",
    impactNote: "Kế toán tiền lương Kiểu Việt chỉ cần xác nhận danh sách trên cổng BHXH điện tử, tiền trợ cấp được chuyển thẳng vào tài khoản công nhân trong 3 ngày."
  },
  {
    topic: "Quy định mức đóng bảo hiểm hưu trí tự nguyện linh hoạt (Điều 36)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2014] Đóng bằng 22% mức thu nhập do người lao động lựa chọn.",
    newRule: "[Căn cứ: Điều 36 Luật 41/2024] Nhà nước tăng tỷ lệ hỗ trợ tiền đóng BHXH tự nguyện từ NSNN (30% cho hộ nghèo, 25% cho cận nghèo và 10% cho các đối tượng khác) nhằm mở rộng diện bao phủ.",
    impactNote: "Chính sách khuyến khích nhân công phụ, nhân công lao động giản đơn tham gia vào lưới an sinh xã hội."
  },
  {
    topic: "Hiệu lực thi hành của Luật Bảo hiểm xã hội số 41/2024/QH15 (Điều 135)",
    type: "added",
    oldRule: "[Căn cứ: Luật BHXH 58/2014/QH13] Luật cũ có hiệu lực từ 2016.",
    newRule: "[Căn cứ: Điều 135 Luật 41/2024] Luật có hiệu lực thi hành từ ngày 01 tháng 07 năm 2025; thay thế toàn bộ Luật BHXH số 58/2014/QH13.",
    impactNote: "Kiểu Việt chủ động cập nhật toàn bộ quy chế nhân sự và hệ thống quản trị tiền lương đón đầu hiệu lực từ giữa năm 2025."
  },
  {
    topic: "Quy định tỷ lệ hưởng lương hưu tối đa 75% cho cả nam và nữ (Điều 66)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Cách tính số năm đóng để đạt 75% khắt khe.",
    newRule: "[Căn cứ: Điều 66 Luật 41/2024] Lao động nữ đóng 30 năm, lao động nam đóng 35 năm đạt mức hưởng lương hưu tối đa 75%; mỗi năm đóng thêm được hưởng trợ cấp một lần khi nghỉ hưu bằng 0.5 tháng lương bình quân.",
    impactNote: "Khuyến khích cán bộ kỹ sư cống hiến gắn bó lâu dài cùng sự nghiệp phát triển của Công ty Cổ phần Kiểu Việt."
  }
];

// 6. nd-145-2020: 12 items
g4['nd-145-2020'].items = [
  {
    topic: "Quy định cụ thể cách tính tiền lương làm thêm giờ ban ngày và ban đêm (Điều 55)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 05/2015] Công thức tính phức tạp, chưa rõ cách quy đổi lương giờ thực trả.",
    newRule: "[Căn cứ: Điều 55 NĐ 145/2020] Hướng dẫn chi tiết công thức xác định tiền lương giờ thực trả làm căn cứ tính lương làm thêm giờ: Bằng tiền lương thực trả của công việc đang làm chia cho tổng số giờ làm việc thực tế trong tháng; ngày thường ít nhất 150%, ngày nghỉ tuần ít nhất 200%, ngày lễ tết ít nhất 300%.",
    impactNote: "Kiểu Việt áp dụng công thức chuẩn xác vào phần mềm tính lương, loại bỏ triệt để tranh chấp tiền lương làm thêm giờ với thợ lái máy."
  },
  {
    topic: "Thủ tục và hồ sơ thông báo làm thêm giờ từ trên 200 đến 300 giờ trong một năm (Điều 62)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Chưa có mẫu thông báo chuẩn.",
    newRule: "[Căn cứ: Điều 62 NĐ 145/2020] Doanh nghiệp phải gửi văn bản thông báo theo Mẫu số 02/PLIV ban hành kèm Nghị định cho Sở LĐTBXH nơi làm việc trước khi tổ chức làm thêm từ trên 200 giờ đến 300 giờ/năm chậm nhất là 15 ngày.",
    impactNote: "Kiểu Việt gửi thông báo bằng văn bản theo đúng Mẫu 02/PLIV đến Sở LĐTBXH tỉnh Gia Lai để bảo vệ tính hợp pháp khi công trường thi công xuyên ngày đêm."
  },
  {
    topic: "Quy định các trường hợp doanh nghiệp được tổ chức làm thêm đến 300 giờ/năm (Điều 61)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Danh mục giới hạn hẹp.",
    newRule: "[Căn cứ: Điều 61 NĐ 145/2020] Cho phép các doanh nghiệp sản xuất vật liệu xây dựng, thi công xây dựng công trình giao thông cấp bách, công trình hạ tầng phục vụ lợi ích quốc gia được tổ chức làm thêm đến 300 giờ/năm.",
    impactNote: "Cơ sở pháp lý giúp Kiểu Việt đẩy nhanh tiến độ thi công các gói thầu đường cao tốc đúng tiến độ Chính phủ giao phó."
  },
  {
    topic: "Quy định về thời giờ làm việc đối với lao động làm công việc nặng nhọc, độc hại (Điều 58)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Giảm 1-2 giờ làm việc/ngày chung chung.",
    newRule: "[Căn cứ: Điều 58 NĐ 145/2020] Người lao động làm công việc đặc biệt nặng nhọc, độc hại, nguy hiểm được rút ngắn thời gian làm việc bình thường từ 1 đến 2 giờ mỗi ngày theo danh mục của Bộ LĐTBXH.",
    impactNote: "Kiểu Việt bố trí ca làm việc 6 - 7 giờ/ngày cho công nhân khoan lỗ mìn đá mỏ và rải thảm bê tông nhựa nóng, bảo đảm an toàn sức khỏe tối đa."
  },
  {
    topic: "Thời giờ nghỉ giữa ca được tính vào giờ làm việc đối với làm việc theo ca (Điều 64)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 05/2015] Nghỉ giữa ca 30 phút tự túc.",
    newRule: "[Căn cứ: Điều 64 NĐ 145/2020] Trường hợp làm việc theo ca liên tục từ 6 giờ trở lên thì thời gian nghỉ giữa ca ít nhất 30 phút (ban ngày) hoặc 45 phút (ban đêm) được tính vào giờ làm việc và hưởng nguyên lương.",
    impactNote: "Kiểu Việt chấm công đủ ca 8 tiếng cho công nhân trực trạm nghiền đá có thời gian nghỉ chuyển ca 30 phút."
  },
  {
    topic: "Quy định về đối thoại định kỳ tại nơi làm việc và thương lượng tập thể (Điều 37 - 41)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 149/2018] Đối thoại định kỳ 3 tháng/lần cứng nhắc.",
    newRule: "[Căn cứ: Điều 37 NĐ 145/2020] Quy định tổ chức đối thoại tại nơi làm việc ít nhất 01 năm một lần; hoặc tổ chức đối thoại đột xuất khi một trong hai bên có yêu cầu.",
    impactNote: "Ban Giám đốc Kiểu Việt tổ chức Hội nghị người lao động định kỳ hàng năm và lắng nghe tâm tư công nhân công trường qua các buổi giao ban quý."
  },
  {
    topic: "Quy định chi tiết các hành vi quấy rối tình dục tại nơi làm việc và quy trình xử lý (Điều 84 - 86)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Chưa có quy định chi tiết về hành vi quấy rối tình dục.",
    newRule: "[Căn cứ: Điều 84, 85, 86 NĐ 145/2020] Quy định cụ thể quấy rối tình dục gồm: Hành vi thể chất, bằng lời nói hoặc phi lời nói; người sử dụng lao động bắt buộc phải đưa quy định phòng chống quấy rối vào Nội quy lao động.",
    impactNote: "Kiểu Việt cập nhật điều khoản văn hóa ứng xử và phòng chống quấy rối vào Nội quy lao động công ty, xây dựng môi trường làm việc văn minh, bình đẳng."
  },
  {
    topic: "Trình tự, thủ tục đăng ký Nội quy lao động với cơ quan quản lý lao động (Điều 69)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Hồ sơ giấy rườm rà.",
    newRule: "[Căn cứ: Điều 69 NĐ 145/2020] Trong thời hạn 10 ngày kể từ ngày ban hành Nội quy lao động, doanh nghiệp có từ 10 người lao động trở lên phải nộp hồ sơ đăng ký Nội quy lao động cho Sở LĐTBXH hoặc nộp trực tuyến qua Cổng dịch vụ công.",
    impactNote: "Phòng Nhân sự Kiểu Việt hoàn tất đăng ký Nội quy lao động chuẩn hóa trên cổng dịch vụ công tỉnh Gia Lai, lưu trữ mã xác nhận trực tuyến hợp lệ."
  },
  {
    topic: "Quy định chế độ trợ cấp thôi việc và trợ cấp mất việc làm (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 05/2015] Tính theo thâm niên cũ.",
    newRule: "[Căn cứ: Điều 8 NĐ 145/2020] Thời gian làm việc để tính trợ cấp thôi việc là tổng thời gian đã làm việc thực tế trừ đi thời gian đã tham gia bảo hiểm thất nghiệp và thời gian đã được chi trả trợ cấp thôi việc trước đó; mỗi năm làm việc được trợ cấp 1/2 tháng tiền lương bình quân.",
    impactNote: "Kế toán Kiểu Việt trích lập quỹ dự phòng chi trả trợ cấp mất việc và tính toán chính xác quyền lợi thôi việc cho người lao động có thâm niên trước năm 2009."
  },
  {
    topic: "Quy định về thời hạn báo trước khi chấm dứt HĐLĐ đối với một số ngành nghề đặc thù (Điều 7)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Chưa quy định ngành nghề đặc thù.",
    newRule: "[Căn cứ: Điều 7 NĐ 145/2020] Người lao động làm công việc đặc thù (như Chỉ huy trưởng công trình giao thông trọng điểm, Giám đốc kỹ thuật dự án) khi đơn phương chấm dứt HĐLĐ phải báo trước ít nhất 120 ngày đối với HĐLĐ không xác định thời hạn.",
    impactNote: "Giúp Kiểu Việt bảo đảm tính liên tục và ổn định trong công tác chỉ đạo thi công các công trình cao tốc, tránh bị gián đoạn nhân sự chủ chốt bất ngờ."
  },
  {
    topic: "Quy định trách nhiệm báo cáo tình hình sử dụng lao động định kỳ 6 tháng và hàng năm (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: TT 23/2014] Nộp báo cáo giấy trực tiếp.",
    newRule: "[Căn cứ: Điều 4 NĐ 145/2020] Doanh nghiệp khai trình sử dụng lao động định kỳ 6 tháng (trước ngày 05/06) và hàng năm (trước ngày 05/12) qua Cổng Dịch vụ công Quốc gia liên thông với cơ quan BHXH.",
    impactNote: "Kiểu Việt tự động đồng bộ báo cáo tăng giảm lao động trực tiếp trên cổng dịch vụ công quốc gia, tiết kiệm 100% thời gian đi lại."
  },
  {
    topic: "Hiệu lực thi hành của Nghị định 145/2020/NĐ-CP (Điều 114)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 05/2015, NĐ 149/2018] Các nghị định cũ hết hiệu lực.",
    newRule: "[Căn cứ: Điều 114 NĐ 145/2020] Nghị định có hiệu lực thi hành từ ngày 01 tháng 02 năm 2021; là văn bản quy định chi tiết toàn diện nhất về điều kiện lao động và quan hệ lao động tại Việt Nam.",
    impactNote: "Kim chỉ nam pháp lý hướng dẫn toàn bộ quan hệ lao động và chính sách nhân sự của Công ty Cổ phần Kiểu Việt."
  }
];

// Write updated group 4 back to file
const outputCode = `import { DecreeDiffData } from '../diff-types';\n\nexport const group4LaborSalaryContracts: Record<string, DecreeDiffData> = ` + JSON.stringify(g4, null, 2) + `;\n`;
fs.writeFileSync(g4Path, outputCode, 'utf8');
console.log('Group 4 Part 1 expanded! 6 decrees done.');
