const fs = require('fs');
const path = require('path');

const g5Path = path.join(__dirname, '..', 'src', 'data', 'diffs', 'group5_resources_fees_general.ts');
const raw = fs.readFileSync(g5Path, 'utf8');
const jsonStr = raw.replace(/import[^;]+;/, '').replace(/export const \w+[^=]+=/, '').replace(/;\s*$/, '');
const g5 = eval('(' + jsonStr + ')');

// 1. nd-193-2025-khoangsan: 14 items
g5['nd-193-2025-khoangsan'].items = [
  {
    topic: "Quy định lắp đặt trạm cân điện tử và camera giám sát tự động truyền dữ liệu tại mỏ (Điều 42)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 158/2016] Chỉ yêu cầu lắp trạm cân và camera lưu trữ nội bộ tại mỏ.",
    newRule: "[Căn cứ: Điều 42 NĐ 193/2025] Bắt buộc 100% mỏ khoáng sản (kể cả mỏ đá, mỏ đất đắp vật liệu xây dựng thông thường) phải lắp đặt trạm cân điện tử và camera giám sát có kết nối truyền dữ liệu trực tuyến 24/7 về Sở TN&MT và Cục Thuế địa phương.",
    impactNote: "Công ty Cổ phần Kiểu Việt hoàn thiện kết nối API truyền dữ liệu trạm cân xe ben tự động từ các mỏ đá tại Gia Lai về cổng thông tin giám sát tỉnh."
  },
  {
    topic: "Cơ chế cấp phép khai thác mỏ vật liệu xây dựng thông thường phục vụ cao tốc theo cơ chế đặc thù (Điều 18)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 158/2016] Quy trình cấp phép mỏ phải qua đấu giá quyền khai thác kéo dài 12 - 24 tháng.",
    newRule: "[Căn cứ: Điều 18 NĐ 193/2025 & NQ Quốc hội] Cho phép áp dụng cơ chế đặc thù cấp mỏ đất, mỏ cát đắp trực tiếp cho Nhà thầu thi công dự án giao thông trọng điểm quốc gia mà không phải qua đấu giá quyền khai thác khoáng sản.",
    impactNote: "Kiểu Việt được giao trực tiếp quyền khai thác các mỏ đất dọc tuyến cao tốc, giảm thiểu thời gian cấp phép từ 2 năm xuống còn 30 ngày."
  },
  {
    topic: "Phương pháp tính tiền cấp quyền khai thác khoáng sản theo trữ lượng thực tế huy động (Điều 25)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 67/2019] Tính nộp tiền cấp quyền trên toàn bộ trữ lượng địa chất phê duyệt ban đầu.",
    newRule: "[Căn cứ: Điều 25 NĐ 193/2025] Tiền cấp quyền khai thác khoáng sản được tính toán và quyết toán lại theo trữ lượng khoáng sản thực tế khai thác ghi nhận qua trạm cân và đo vẽ bản đồ hiện trạng định kỳ hàng năm.",
    impactNote: "Kiểu Việt chỉ nộp tiền cấp quyền trên khối lượng đá, đất thực tế khai thác đưa vào công trình, không bị đọng vốn nộp trước cho toàn bộ mỏ."
  },
  {
    topic: "Quy định đo vẽ bản đồ hiện trạng mỏ bằng thiết bị bay không người lái UAV/Drone (Điều 45)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 158/2016] Đo đạc trắc địa truyền thống bằng máy kinh vĩ.",
    newRule: "[Căn cứ: Điều 45 NĐ 193/2025] Bắt buộc định kỳ 6 tháng một lần doanh nghiệp khai thác khoáng sản phải thực hiện bay quét địa hình 3D bằng UAV (Drone) để lập bản đồ hiện trạng và mặt cắt mỏ nộp cho cơ quan quản lý.",
    impactNote: "Kiểu Việt trang bị flycam RTK chuyên dụng bay quét mỏ định kỳ, kiểm soát chuẩn xác trữ lượng mỏ bóc dỡ và hoàn nguyên môi trường."
  },
  {
    topic: "Quy định nộp tiền ký quỹ cải tạo phục hồi môi trường mỏ khoáng sản (Điều 33)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 19/2015] Nộp ký quỹ phân kỳ dài hạn.",
    newRule: "[Căn cứ: Điều 33 NĐ 193/2025 & NĐ 08/2022] Số tiền ký quỹ phục hồi môi trường lần đầu phải nộp tối thiểu 25% tổng số tiền ký quỹ được phê duyệt; các năm tiếp theo nộp phân bổ trước ngày 31/01 hàng năm vào Quỹ Bảo vệ môi trường tỉnh.",
    impactNote: "Kế toán Kiểu Việt trích nộp đủ tiền ký quỹ cải tạo môi trường vào Quỹ Bảo vệ môi trường tỉnh Gia Lai đúng thời hạn quy định."
  },
  {
    topic: "Quy định xử lý thu hồi khoáng sản đi kèm khi thi công hạ tầng giao thông (Điều 22)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Đất đá đào hạ taluy phải đổ bỏ ở bãi thải.",
    newRule: "[Căn cứ: Điều 22 NĐ 193/2025] Đất đá dôi dư khi đào phá hạ nền đường cao tốc đáp ứng tiêu chuẩn kỹ thuật được phép tận dụng làm vật liệu đắp nền hoặc nghiền làm cấp phối đá dăm cho chính dự án; chỉ cần đăng ký khối lượng với Sở TN&MT mà không phải xin cấp phép mỏ mới.",
    impactNote: "Tiết kiệm cho Kiểu Việt hàng chục tỷ đồng tiền mua vật liệu đắp nền và cước vận chuyển, biến đá đào nền đường thành tài sản quý giá."
  },
  {
    topic: "Quy định điều kiện Giám đốc điều hành mỏ khoáng sản lộ thiên (Điều 40)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 158/2016 Điều 62] Phải là kỹ sư khai thác mỏ có thâm niên từ 3 - 5 năm.",
    newRule: "[Căn cứ: Điều 40 NĐ 193/2025] Giám đốc điều hành mỏ đá vật liệu xây dựng phải có bằng kỹ sư chuyên ngành khai thác mỏ, xây dựng công trình ngầm hoặc địa chất công trình và có ít nhất 02 năm kinh nghiệm trực tiếp chỉ đạo khai thác mỏ lộ thiên.",
    impactNote: "Kiểu Việt bổ nhiệm Kỹ sư khai thác mỏ dày dạn kinh nghiệm làm Giám đốc điều hành mỏ đá, bảo đảm đầy đủ tính pháp lý khi làm việc với Thanh tra Sở."
  },
  {
    topic: "Trách nhiệm nộp thuế tài nguyên và phí bảo vệ môi trường theo phiếu cân điện tử (Điều 43)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Tự kê khai khối lượng theo sổ sách doanh nghiệp.",
    newRule: "[Căn cứ: Điều 43 NĐ 193/2025] Số liệu kê khai tính thuế tài nguyên và phí BVMT phải khớp đúng 100% với dữ liệu tổng hợp từ hệ thống cân điện tử tích hợp chữ ký số và hóa đơn điện tử từng chuyến xe xuất bến.",
    impactNote: "Toàn bộ phiếu cân xe ben Kiểu Việt được đồng bộ trực tiếp vào phần mềm kế toán, đối chiếu tự động với tờ khai thuế tài nguyên hàng tháng."
  },
  {
    topic: "Quy định về thời hạn đóng cửa mỏ và nghiệm thu đề án đóng cửa mỏ (Điều 36)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 158/2016] Thủ tục đóng cửa mỏ kéo dài nhiều năm.",
    newRule: "[Căn cứ: Điều 36 NĐ 193/2025] Trong thời hạn 06 tháng kể từ ngày giấy phép khai thác hết hiệu lực, doanh nghiệp phải hoàn thành thi công đề án đóng cửa mỏ, trồng cây xanh phục hồi môi trường và nộp hồ sơ nghiệm thu cho Sở TN&MT.",
    impactNote: "Kiểu Việt lập kế hoạch hoàn nguyên song song với quá trình khai thác, bàn giao lại mặt bằng xanh sạch cho địa phương ngay khi công trình hoàn thành."
  },
  {
    topic: "Xử phạt tước quyền sử dụng giấy phép khai thác nếu gian lận sản lượng trên 10% (Điều 50)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 36/2020] Phạt tiền hành chính.",
    newRule: "[Căn cứ: Điều 50 NĐ 193/2025] Đình chỉ hoạt động khai thác hoặc tước quyền sử dụng Giấy phép khai thác khoáng sản từ 06 đến 12 tháng đối với hành vi khai thác vượt công suất cấp phép trên 10% hoặc gian lận số liệu sản lượng trên hệ thống trạm cân.",
    impactNote: "Ban Điều hành Mỏ Kiểu Việt kiểm soát chặt chẽ sản lượng khai thác hàng ngày, tuyệt đối không khai thác vượt công suất giấy phép phê duyệt."
  },
  {
    topic: "Quy định về khoảng cách an toàn nổ mìn và bảo vệ môi trường dân sinh (Điều 44)",
    type: "modified",
    oldRule: "[Căn cứ: QCVN 01:2019/BCT] Bán kính an toàn nổ mìn chung.",
    newRule: "[Căn cứ: Điều 44 NĐ 193/2025] Bắt buộc lập phương án nổ mìn vi sai phi điện, kiểm soát chấn động và bụi mịn trong bán kính tối thiểu 300m đối với khu dân cư; thực hiện phun nước dập bụi liên tục trên các tuyến đường vận chuyển mỏ.",
    impactNote: "Kiểu Việt đầu tư dàn xe bồn tưới nước dập bụi đường mỏ 4 lần/ngày và áp dụng kíp nổ vi sai giảm chấn động bảo vệ nhà dân xung quanh."
  },
  {
    topic: "Chính sách ưu tiên cấp phép khoáng sản cho doanh nghiệp có dự án chế biến sâu (Điều 15)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Không ưu tiên chế biến sâu.",
    newRule: "[Căn cứ: Điều 15 NĐ 193/2025] Ưu tiên cấp phép mỏ và gia hạn giấy phép cho các doanh nghiệp đầu tư dây chuyền sản xuất cát nghiền nhân tạo, bột đá siêu mịn và gạch bê tông không nung tận thu tài nguyên.",
    impactNote: "Khẳng định tầm nhìn chiến lược của Kiểu Việt khi đầu tư tổ hợp nghiền đá đồng bộ sản xuất cát nhân tạo đạt chuẩn dự án cao tốc."
  },
  {
    topic: "Quy định về chuyển nhượng quyền khai thác khoáng sản mỏ vật liệu (Điều 30)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 158/2016] Cấm chuyển nhượng mỏ cấp theo cơ chế đặc thù.",
    newRule: "[Căn cứ: Điều 30 NĐ 193/2025] Giấy phép khai thác mỏ cấp theo cơ chế đặc thù phục vụ dự án cao tốc tuyệt đối không được chuyển nhượng hoặc bán thương mại ra ngoài thị trường; vi phạm sẽ bị thu hồi giấy phép ngay lập tức.",
    impactNote: "Toàn bộ sản lượng mỏ đất, mỏ đá của Kiểu Việt được phục vụ 100% cho gói thầu dự án chỉ định, nghiêm cấm bán lẻ ra bên ngoài."
  },
  {
    topic: "Hiệu lực thi hành của Nghị định 193/2025/NĐ-CP (Điều 55)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 158/2016/NĐ-CP] Nghị định cũ hết hiệu lực.",
    newRule: "[Căn cứ: Điều 55 NĐ 193/2025] Nghị định có hiệu lực thi hành đồng bộ cùng Luật Địa chất và Khoáng sản số 54/2024/QH15 từ ngày 01 tháng 07 năm 2025.",
    impactNote: "Hệ thống quy định mới toàn diện giúp Kiểu Việt vận hành mỏ khoáng sản chuyên nghiệp, hiện đại và chuẩn mực pháp lý cao nhất."
  }
];

// 2. luat-54-2024-khoangsan: 14 items
g5['luat-54-2024-khoangsan'].items = [
  {
    topic: "Phân loại khoáng sản thành 04 nhóm để phân cấp quản lý và cấp phép (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: Luật Khoáng sản 2010 Điều 2] Phân loại chung thành khoáng sản kim loại, phi kim, nước khoáng.",
    newRule: "[Căn cứ: Điều 7 Luật Địa chất và Khoáng sản số 54/2024/QH15] Phân nhóm rõ ràng: Nhóm I (khoáng sản chiến lược); Nhóm II (khoáng sản làm VLXD công nghiệp); Nhóm III (khoáng sản làm VLXD thông thường như cát, sỏi, đá dăm, đất đắp); Nhóm IV (đất đá làm vật liệu san lấp khi thi công hạ tầng).",
    impactNote: "Kiểu Việt hoạt động chủ lực ở mỏ Khoáng sản Nhóm III và Nhóm IV, được hưởng quy trình cấp phép rút gọn và thủ tục hành chính đơn giản hóa tối đa."
  },
  {
    topic: "Thủ tục đăng ký khai thác khoáng sản Nhóm IV không cần Giấy phép khai thác (Điều 68)",
    type: "added",
    oldRule: "[Căn cứ: Luật Khoáng sản 2010] Khai thác đất đắp nền đường vẫn bắt buộc phải lập hồ sơ cấp Giấy phép khai thác khoáng sản như mỏ kim loại.",
    newRule: "[Căn cứ: Điều 68 Luật 54/2024] Đối với khoáng sản Nhóm IV (đất đắp nền công trình, đất đá san lấp dự án hạ tầng giao thông), nhà thầu chỉ cần lập Bản đăng ký khai thác nộp cho UBND cấp tỉnh mà không phải thực hiện thủ tục cấp Giấy phép khai thác mỏ.",
    impactNote: "Bước đột phá thể chế vĩ đại: Giúp Kiểu Việt mở công trường đào đất đắp đường cao tốc ngay sau khi nộp bản đăng ký, không còn cảnh chờ đợi giấy phép mỏ hàng năm trời."
  },
  {
    topic: "Cắt giảm điều kiện đấu giá quyền khai thác mỏ phục vụ công trình đầu tư công (Điều 72)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2010] Mọi mỏ khoáng sản chưa thăm dò đều phải qua đấu giá quyền khai thác.",
    newRule: "[Căn cứ: Điều 72 Luật 54/2024] Các khu vực mỏ khoáng sản làm VLXD thông thường quy hoạch phục vụ trực tiếp cho các công trình hạ tầng kỹ thuật quốc gia, cao tốc, cảng hàng không thuộc danh mục KHÔNG ĐẤU GIÁ quyền khai thác khoáng sản.",
    impactNote: "Kiểu Việt được UBND tỉnh Gia Lai giao trực tiếp các mỏ đá, mỏ đất phục vụ thi công cao tốc mà không phải tham gia đấu thầu giá mỏ đẩy chi phí lên cao."
  },
  {
    topic: "Phương pháp xác định tiền cấp quyền khai thác khoáng sản theo tỷ lệ % giá trị doanh thu (Điều 80)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2010 Điều 77] Tính tiền cấp quyền cố định theo công thức phức tạp dựa trên trữ lượng địa chất phê duyệt.",
    newRule: "[Căn cứ: Điều 80 Luật 54/2024] Tiền cấp quyền khai thác khoáng sản được xác định theo tỷ lệ phần trăm (%) doanh thu tính thuế tài nguyên hoặc mức thu cố định trên một đơn vị khối lượng khoáng sản thực tế khai thác hàng năm.",
    impactNote: "Giúp Kiểu Việt giảm bớt áp lực nộp một cục tiền cấp quyền hàng chục tỷ đồng ngay từ đầu, chuyển sang nộp phân kỳ theo tiến độ bán thành phẩm."
  },
  {
    topic: "Trách nhiệm của tổ chức khai thác mỏ đối với hạ tầng giao thông và an sinh địa phương (Điều 62)",
    type: "added",
    oldRule: "[Căn cứ: Luật 2010] Hỗ trợ địa phương tự nguyện.",
    newRule: "[Căn cứ: Điều 62 Luật 54/2024] Tổ chức, cá nhân khai thác khoáng sản có nghĩa vụ: Duy tu, sửa chữa các công trình đường giao thông nông thôn bị hư hỏng do xe vận chuyển mỏ gây ra; ưu tiên tuyển dụng lao động địa phương và bồi hoàn môi trường.",
    impactNote: "Kiểu Việt chủ động thảm nhựa hoàn trả các đoạn đường giao thông dân sinh và tuyển dụng 70% công nhân địa phương làm việc tại trạm nghiền đá."
  },
  {
    topic: "Chuyển giao quyền khai thác mỏ khoáng sản kèm theo thiết bị nhà máy chế biến (Điều 60)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2010 Điều 66] Điều kiện chuyển nhượng khắt khe.",
    newRule: "[Căn cứ: Điều 60 Luật 54/2024] Cho phép chuyển nhượng toàn bộ hoặc một phần dự án khai thác mỏ kèm theo dây chuyền trạm nghiền khi nhà thầu đã hoàn thành nghĩa vụ đầu tư xây dựng cơ bản và nộp đủ các nghĩa vụ tài chính.",
    impactNote: "Tạo cơ chế linh hoạt để Kiểu Việt cơ cấu danh mục tài sản mỏ hoặc liên danh khai thác với các đối tác chiến lược."
  },
  {
    topic: "Quy định thẩm quyền cấp phép khoáng sản của UBND cấp tỉnh (Điều 74)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2010 Điều 82] Bộ TN&MT cấp phép nhiều mỏ đá lớn.",
    newRule: "[Căn cứ: Điều 74 Luật 54/2024] Phân cấp triệt để cho UBND cấp tỉnh cấp phép thăm dò, khai thác 100% khoáng sản Nhóm III và phê duyệt Bản đăng ký khoáng sản Nhóm IV trên địa bàn tỉnh.",
    impactNote: "Kiểu Việt chỉ cần làm việc trực tiếp với UBND tỉnh Gia Lai và Sở TN&MT địa phương, không cần phải ra Bộ TN&MT tại Hà Nội xin phê duyệt."
  },
  {
    topic: "Quy định về thời hạn Giấy phép khai thác khoáng sản tối đa đến 30 năm và gia hạn (Điều 51)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2010 Điều 54] Thời hạn cấp phép tối đa 30 năm.",
    newRule: "[Căn cứ: Điều 51 Luật 54/2024] Giữ thời hạn tối đa 30 năm, nhưng cho phép gia hạn nhiều lần căn cứ theo trữ lượng còn lại của mỏ và năng lực tài chính bảo đảm an toàn môi trường của doanh nghiệp.",
    impactNote: "Tạo sự an tâm tuyệt đối cho Kiểu Việt khi đầu tư hàng trăm tỷ đồng vào dây chuyền trạm nghiền đá hiện đại công suất lớn vận hành lâu dài."
  },
  {
    topic: "Nghiêm cấm xuất khẩu khoáng sản thô chưa qua chế biến (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2010] Cho phép xuất khẩu theo hạn ngạch.",
    newRule: "[Căn cứ: Điều 9 Luật 54/2024] Nghiêm cấm xuất khẩu khoáng sản thô dưới dạng cát, đá, sỏi chưa chế biến; khuyến khích tối đa công nghệ chế biến sâu tạo giá trị gia tăng cao cho nền kinh tế.",
    impactNote: "Kiểu Việt tập trung vào chế biến sâu tạo ra cát nhân tạo chất lượng cao thay thế cát tự nhiên sông suối đang ngày càng cạn kiệt."
  },
  {
    topic: "Quy định về kiểm toán trữ lượng và dữ liệu địa chất số quốc gia (Điều 12)",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Quản lý dữ liệu địa chất bản giấy.",
    newRule: "[Căn cứ: Điều 12 Luật 54/2024] Toàn bộ dữ liệu địa chất, khoáng sản, kết quả thăm dò được số hóa và tích hợp vào Cơ sở dữ liệu quốc gia về địa chất; các mỏ phải thực hiện kiểm toán trữ lượng định kỳ bởi đơn vị độc lập.",
    impactNote: "Kiểu Việt số hóa toàn bộ tài liệu địa chất các mỏ đá vào hệ thống GIS nội bộ, nâng cao năng lực quản trị nguồn tài nguyên số."
  },
  {
    topic: "Quy định về an toàn kỹ thuật và vệ sinh lao động trong khai thác mỏ (Điều 63)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2010 Điều 60] Quy định chung.",
    newRule: "[Căn cứ: Điều 63 Luật 54/2024] Doanh nghiệp mỏ bắt buộc phải tuân thủ Quy chuẩn kỹ thuật quốc gia về an toàn khai thác lộ thiên; xây dựng hệ thống thoát nước moong mỏ chống sạt lở vào mùa mưa bão.",
    impactNote: "Kiểu Việt đào hào thoát nước chống ngập moong đá và cắt tầng khai thác đạt góc dốc sườn tầng an toàn theo quy chuẩn quốc gia."
  },
  {
    topic: "Quy định về chế độ báo cáo hoạt động khai thác khoáng sản điện tử (Điều 64)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2010] Nộp báo cáo giấy trước ngày 15/01 hàng năm.",
    newRule: "[Căn cứ: Điều 64 Luật 54/2024] Báo cáo định kỳ tình hình khai thác khoáng sản được thực hiện bằng phương thức điện tử qua Cổng thông tin của Bộ TN&MT và Sở TN&MT tỉnh.",
    impactNote: "Kế toán mỏ Kiểu Việt gửi báo cáo sản lượng khai thác online chỉ trong vài phút, số liệu khớp đúng với hóa đơn bán hàng."
  },
  {
    topic: "Chính sách tài chính khoáng sản bền vững và hoàn nguyên xanh (Điều 65)",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Đóng cửa mỏ chỉ lấp đất sơ sài.",
    newRule: "[Căn cứ: Điều 65 Luật 54/2024] Doanh nghiệp phải thực hiện hoàn nguyên môi trường theo mô hình kinh tế tuần hoàn: Tái sử dụng moong mỏ làm hồ chứa nước thủy lợi hoặc khu du lịch sinh thái sau khi kết thúc khai thác.",
    impactNote: "Kiểu Việt quy hoạch các moong mỏ đá tại Gia Lai sau khi khai thác xong sẽ bàn giao lại làm hồ cấp nước tưới tiêu cà phê cho bà con địa phương."
  },
  {
    topic: "Hiệu lực thi hành của Luật Địa chất và Khoáng sản số 54/2024/QH15 (Điều 117)",
    type: "added",
    oldRule: "[Căn cứ: Luật Khoáng sản số 60/2010/QH12] Hết hiệu lực thi hành.",
    newRule: "[Căn cứ: Điều 117 Luật 54/2024] Luật có hiệu lực thi hành từ ngày 01 tháng 07 năm 2025; thay thế toàn bộ Luật Khoáng sản số 60/2010/QH12.",
    impactNote: "Cột mốc pháp lý trọng đại mở ra thời cơ vàng cho Công ty Cổ phần Kiểu Việt bứt phá trong lĩnh vực khai thác vật liệu và xây dựng hạ tầng."
  }
];

// 3. qd-87-2025-gialai: 12 items
g5['qd-87-2025-gialai'].items = [
  {
    topic: "Ban hành Bảng giá tính thuế tài nguyên năm 2025 trên địa bàn tỉnh Gia Lai (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 35/2023/QĐ-UBND Gia Lai] Áp dụng bảng giá tính thuế tài nguyên cũ của tỉnh.",
    newRule: "[Căn cứ: Điều 1 QĐ 87/2025/QĐ-UBND Gia Lai] Ban hành Bảng giá tính thuế tài nguyên mới nhất áp dụng từ 01/01/2025 cho toàn bộ các loại tài nguyên khoáng sản khai thác trên địa bàn tỉnh Gia Lai.",
    impactNote: "Kiểu Việt cập nhật tức thời bảng giá tính thuế tài nguyên mới nhất của UBND tỉnh Gia Lai vào hệ thống hạch toán kế toán và kê khai thuế."
  },
  {
    topic: "Giá tính thuế tài nguyên đối với Đá xây dựng thông thường (Phụ lục)",
    type: "modified",
    oldRule: "[Căn cứ: Bảng giá cũ] Đá hộc, đá dăm tính giá cũ 120.000đ - 180.000đ/m3.",
    newRule: "[Căn cứ: Phụ lục QĐ 87/2025] Quy định giá tính thuế: Đá hộc: 150.000đ/m3; Đá dăm các loại (1x2, 2x4, 4x6): 220.000đ/m3; Đá mi bụi, mi sàng: 130.000đ/m3.",
    impactNote: "Kế toán Kiểu Việt áp dụng đơn giá tính thuế tài nguyên chuẩn mực cho từng loại đá xuất bán từ trạm nghiền đá của công ty tại Gia Lai."
  },
  {
    topic: "Giá tính thuế tài nguyên đối với Cát xây dựng và Cát nghiền nhân tạo (Phụ lục)",
    type: "modified",
    oldRule: "[Căn cứ: Bảng giá cũ] Chỉ có đơn giá cát tự nhiên sông suối.",
    newRule: "[Căn cứ: Phụ lục QĐ 87/2025] Cát vàng tự nhiên: 260.000đ/m3; Cát xây tô: 180.000đ/m3; Cát nghiền nhân tạo sản xuất từ đá mỏ: 170.000đ/m3.",
    impactNote: "Giá tính thuế của cát nghiền nhân tạo ưu đãi hơn cát tự nhiên (170k so với 260k), giúp Kiểu Việt tiết kiệm đáng kể tiền thuế tài nguyên."
  },
  {
    topic: "Giá tính thuế tài nguyên đối với Đất san lấp, đất đắp nền công trình (Phụ lục)",
    type: "modified",
    oldRule: "[Căn cứ: Bảng giá cũ] Đất đắp tính giá 40.000đ/m3.",
    newRule: "[Căn cứ: Phụ lục QĐ 87/2025] Đất khai thác làm vật liệu san lấp, đắp nền đường: 55.000đ/m3 (tăng 37.5%).",
    impactNote: "Kiểu Việt điều chỉnh dự toán chi phí đắp nền cao tốc theo đơn giá tính thuế đất mới 55.000đ/m3, bảo đảm thanh quyết toán khớp đúng với Cục Thuế Gia Lai."
  },
  {
    topic: "Giá tính thuế tài nguyên đối với Đất sét sản xuất gạch ngói (Phụ lục)",
    type: "modified",
    oldRule: "[Căn cứ: Bảng giá cũ] Đất sét tính 70.000đ/m3.",
    newRule: "[Căn cứ: Phụ lục QĐ 87/2025] Đất sét làm gạch nung: 95.000đ/m3; đất sét làm gốm sứ cao cấp: 150.000đ/m3.",
    impactNote: "Cung cấp số liệu chính xác để Kiểu Việt tham chiếu khi cung cấp nguyên liệu hoặc hợp tác với các nhà máy gạch trên địa bàn."
  },
  {
    topic: "Quy định nguyên tắc xác định giá tính thuế tài nguyên trong trường hợp giá bán thực tế cao hơn (Điều 2)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ cũ] Áp dụng cứng giá trong bảng giá.",
    newRule: "[Căn cứ: Điều 2 Khoản 2 QĐ 87/2025] Trường hợp giá bán thực tế trên hóa đơn GTGT (chưa thuế GTGT) cao hơn giá quy định trong Bảng giá này thì tính thuế theo giá bán thực tế ghi trên hóa đơn.",
    impactNote: "Cảnh báo cho Kế toán Kiểu Việt: Nếu xuất bán đá dăm giá 250.000đ/m3 (cao hơn mức 220k trong bảng) thì phải tính thuế tài nguyên theo giá thực tế 250k."
  },
  {
    topic: "Quy tắc xác định giá tính thuế khi doanh nghiệp tự khai thác và đưa vào thi công xây lắp (Điều 2)",
    type: "added",
    oldRule: "[Căn cứ: QĐ cũ] Tự xác định chi phí giá thành khai thác.",
    newRule: "[Căn cứ: Điều 2 Khoản 3 QĐ 87/2025] Trường hợp doanh nghiệp tự khai thác khoáng sản để trực tiếp sử dụng vào công trình xây lắp của mình (không bán ra ngoài) thì bắt buộc áp dụng theo đúng đơn giá quy định tại Bảng giá của UBND tỉnh.",
    impactNote: "Quy định sống còn: Kiểu Việt tự lấy đá, đất đắp từ mỏ nhà đưa vào đường cao tốc thì kê khai nộp thuế tài nguyên theo đúng bảng giá QĐ 87/2025."
  },
  {
    topic: "Giá tính thuế tài nguyên nước dưới đất phục vụ sản xuất công nghiệp và trộn bê tông (Phụ lục)",
    type: "modified",
    oldRule: "[Căn cứ: Bảng giá cũ] Nước ngầm tính 10.000đ/m3.",
    newRule: "[Căn cứ: Phụ lục QĐ 87/2025] Nước dưới đất khai thác phục vụ sản xuất vật liệu xây dựng, trạm trộn bê tông xi măng, trạm nghiền: 15.000đ/m3.",
    impactNote: "Kiểu Việt lắp đồng hồ đo lưu lượng nước giếng khoan tại trạm trộn bê tông và kê khai nộp thuế tài nguyên nước đầy đủ."
  },
  {
    topic: "Quy định tỷ lệ quy đổi từ khoáng sản nguyên khai sang khoáng sản thành phẩm (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ cũ] Hệ số quy đổi cũ.",
    newRule: "[Căn cứ: Điều 3 QĐ 87/2025] Quy định rõ hệ số nở rời và quy đổi: 1m3 đá nguyên khai nổ mìn quy đổi tương đương 1.35m3 đá dăm thành phẩm; 1m3 đất đắp nguyên thổ tương đương 1.25m3 đất đắp đầm chặt.",
    impactNote: "Kiểu Việt áp dụng hệ số quy đổi 1.35 chuẩn xác để tính toán số m3 đá nổ mìn nguyên khai khi kê khai thuế tài nguyên từ số m3 đá dăm thực tế."
  },
  {
    topic: "Thời điểm nộp tờ khai và thời hạn nộp thuế tài nguyên theo định kỳ hàng tháng (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Nộp theo tháng.",
    newRule: "[Căn cứ: Điều 4 QĐ 87/2025 & Luật QLT 2019] Tờ khai thuế tài nguyên Mẫu 01/TAIN nộp chậm nhất là ngày 20 của tháng tiếp theo; quyết toán năm nộp trước ngày cuối cùng của tháng thứ 3 kể từ ngày kết thúc năm dương lịch.",
    impactNote: "Kế toán Kiểu Việt nộp tờ khai thuế tài nguyên Gia Lai định kỳ ngày 15 hàng tháng qua hệ thống eTax."
  },
  {
    topic: "Trách nhiệm phối hợp giữa Cục Thuế và Sở Tài nguyên Môi trường Gia Lai kiểm tra liên ngành (Điều 5)",
    type: "added",
    oldRule: "[Căn cứ: QĐ cũ] Kiểm tra độc lập.",
    newRule: "[Căn cứ: Điều 5 QĐ 87/2025] Định kỳ 6 tháng, Cục Thuế tỉnh Gia Lai và Sở TN&MT phối hợp đối chiếu dữ liệu camera, dữ liệu trạm cân điện tử với số liệu kê khai thuế của các doanh nghiệp mỏ trên địa bàn.",
    impactNote: "Kiểu Việt duy trì tính minh bạch tuyệt đối giữa dữ liệu cân mỏ và số liệu sổ sách kế toán, sẵn sàng tiếp đoàn kiểm tra liên ngành bất kỳ lúc nào."
  },
  {
    topic: "Hiệu lực thi hành của Quyết định số 87/2025/QĐ-UBND tỉnh Gia Lai (Điều 6)",
    type: "added",
    oldRule: "[Căn cứ: QĐ 35/2023/QĐ-UBND] Bãi bỏ toàn bộ.",
    newRule: "[Căn cứ: Điều 6 QĐ 87/2025] Quyết định có hiệu lực thi hành kể từ ngày 01 tháng 01 năm 2025; là cơ sở pháp lý cao nhất về giá tính thuế tài nguyên trên địa bàn toàn tỉnh Gia Lai.",
    impactNote: "Văn bản địa phương đặc biệt quan trọng chi phối trực tiếp chi phí hoạt động của Công ty Cổ phần Kiểu Việt tại Gia Lai."
  }
];

// 4. nd-27-2023: 12 items
g5['nd-27-2023'].items = [
  {
    topic: "Tăng mức thu phí bảo vệ môi trường đối với khai thác khoáng sản đá, cát, sỏi (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 164/2016] Mức phí cũ: Đá xẻ, đá khối: 40k-60k; Đá khác: 2k-5k/m3; Cát: 3k-7k/m3.",
    newRule: "[Căn cứ: Điều 4 NĐ 27/2023] Khung mức thu phí BVMT mới: Đá xẻ, đá khối: 60.000đ - 90.000đ/m3; Đá làm VLXD thông thường: 5.000đ - 10.000đ/m3; Cát sỏi: 6.000đ - 10.000đ/m3; Đất đắp san lấp: 2.000đ - 3.000đ/m3.",
    impactNote: "Kiểu Việt cập nhật mức thu phí BVMT mới vào dự toán khai thác mỏ đá và mỏ đất, nộp đủ phí cho ngân sách tỉnh."
  },
  {
    topic: "Quy định phương pháp tính phí bảo vệ môi trường đối với khoáng sản khai thác lộ thiên (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 164/2016] Tính chung chung.",
    newRule: "[Căn cứ: Điều 5 NĐ 27/2023] Phí BVMT phải nộp trong kỳ = Số lượng khoáng sản nguyên khai khai thác trong kỳ (m3 hoặc tấn) x Mức thu phí quy định (đồng/đơn vị).",
    impactNote: "Kế toán Kiểu Việt tính toán chính xác số tiền phí BVMT hàng tháng dựa trên sản lượng đất đá nguyên khai thực tế qua trạm cân."
  },
  {
    topic: "Trường hợp đất đá bóc dỡ trong quá trình khai thác khoáng sản làm VLXD (Điều 5)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Chưa quy định miễn phí đất đá bóc tầng phủ.",
    newRule: "[Căn cứ: Điều 5 Khoản 2 NĐ 27/2023] Đất đá bóc, đất đá thải trong quá trình khai thác khoáng sản nếu không sử dụng vào mục đích khác thì không phải nộp phí BVMT; nếu tận dụng làm vật liệu san lấp công trình thì phải nộp phí theo mức đất san lấp.",
    impactNote: "Kiểu Việt tận dụng tầng đất phong hóa bóc phủ mỏ đá để đắp nền đường cao tốc, kê khai nộp phí BVMT mức đất san lấp (2.000đ/m3) tiết kiệm chi phí mua mới."
  },
  {
    topic: "Quy định cơ quan quản lý thu nộp và quyết toán phí BVMT hàng tháng (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Nộp theo quý.",
    newRule: "[Căn cứ: Điều 6 NĐ 27/2023 & Luật QLT] Người nộp phí kê khai phí BVMT theo tháng (Mẫu 01/PBVMT) chậm nhất là ngày 20 của tháng tiếp theo và quyết toán năm trước ngày 31/03 năm sau tại cơ quan thuế quản lý trực tiếp địa bàn mỏ.",
    impactNote: "Kiểu Việt nộp tờ khai phí BVMT cho Chi cục Thuế khu vực nơi đặt mỏ khoáng sản đúng thời hạn 20 hàng tháng."
  },
  {
    topic: "Quy định thẩm quyền HĐND cấp tỉnh ban hành mức thu phí BVMT cụ thể (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Áp dụng cào bằng.",
    newRule: "[Căn cứ: Điều 4 Khoản 2 NĐ 27/2023] Căn cứ khung mức phí tại Nghị định, HĐND cấp tỉnh quyết định mức thu phí BVMT cụ thể đối với từng loại khoáng sản phù hợp với tình hình thực tế và bảo vệ môi trường địa phương.",
    impactNote: "Kiểu Việt tham chiếu Nghị quyết của HĐND tỉnh Gia Lai để áp mức phí chính xác cho từng gói thầu mỏ vật liệu."
  },
  {
    topic: "Quy định khấu trừ phí BVMT đối với khoáng sản tận thu khi nạo vét luồng lạch, lòng hồ (Điều 7)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Chưa có hướng dẫn tận thu hồ thủy điện.",
    newRule: "[Căn cứ: Điều 7 NĐ 27/2023] Khai thác tận thu cát sỏi khi nạo vét lòng hồ thủy điện, thủy lợi phải nộp phí BVMT theo mức thu bằng 60% mức thu phí khai thác cát sỏi thông thường.",
    impactNote: "Cơ hội cho Kiểu Việt mở rộng khai thác nạo vét cát bồi lắng lòng hồ thủy điện tại Gia Lai với chi phí bảo vệ môi trường ưu đãi."
  },
  {
    topic: "Trách nhiệm đối chiếu số liệu sản lượng khai thác giữa cơ quan Thuế và Sở TN&MT (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Kiểm tra lỏng lẻo.",
    newRule: "[Căn cứ: Điều 8 NĐ 27/2023] Cơ quan thuế định kỳ hàng quý gửi văn bản thông báo số lượng khoáng sản đã kê khai nộp phí BVMT cho Sở TN&MT để đối chiếu với bản đồ hiện trạng và báo cáo kiểm toán trữ lượng.",
    impactNote: "Kiểu Việt kiểm soát tuyệt đối tính nhất quán giữa số liệu kê khai thuế và số liệu đo vẽ hiện trạng mỏ hàng quý."
  },
  {
    topic: "Quy định sử dụng nguồn thu phí bảo vệ môi trường đối với khai thác khoáng sản (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 164/2016] Nộp vào NSNN chung.",
    newRule: "[Căn cứ: Điều 9 NĐ 27/2023] 100% nguồn thu phí BVMT được để lại cho ngân sách địa phương (nơi có mỏ) để đầu tư nâng cấp đường giao thông bị hư hại do xe chở mỏ và xử lý ô nhiễm môi trường khu dân cư.",
    impactNote: "Tiền nộp phí của Kiểu Việt được quay trở lại đầu tư nâng cấp hạ tầng đường sá cho chính bà con địa phương nơi công ty hoạt động."
  },
  {
    topic: "Chế tài phạt tiền chậm nộp phí BVMT theo Luật Quản lý thuế (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Phạt hành chính.",
    newRule: "[Căn cứ: Điều 6 NĐ 27/2023 & Luật QLT 2019] Chậm nộp phí BVMT bị tính tiền chậm nộp bằng 0.03%/ngày trên số tiền phí chậm nộp; quá 90 ngày bị cưỡng chế trích tài khoản ngân hàng và tạm dừng khai thác.",
    impactNote: "Kiểu Việt lập lệnh chuyển khoản nộp phí BVMT ngay khi ký duyệt bảng tính, tránh bị tính lãi chậm nộp."
  },
  {
    topic: "Quy định quy đổi đơn vị tính khối lượng khoáng sản chịu phí (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Tự quy đổi.",
    newRule: "[Căn cứ: Điều 5 Khoản 3 NĐ 27/2023] Trường hợp khoáng sản khai thác tính bằng tấn nhưng mức thu quy định bằng m3 (hoặc ngược lại) thì quy đổi theo tỷ trọng do UBND cấp tỉnh ban hành.",
    impactNote: "Kiểu Việt sử dụng tỷ trọng đá dăm 1.55 tấn/m3 theo quyết định của tỉnh Gia Lai để quy đổi từ khối lượng cân xe (tấn) sang số m3 kê khai phí chuẩn mực."
  },
  {
    topic: "Trường hợp doanh nghiệp được miễn phí bảo vệ môi trường (Điều 3)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Không có miễn phí.",
    newRule: "[Căn cứ: Điều 3 NĐ 27/2023] Miễn phí BVMT đối với: Khai thác đất đá để đắp đê điều cứu hộ thiên tai bão lũ; khai thác khoáng sản làm VLXD trong diện tích đất được giao để tự xây dựng nhà ở của hộ gia đình.",
    impactNote: "Kiểu Việt huy động xe máy đắp đê ứng cứu bão lũ tại địa phương được miễn hoàn toàn nghĩa vụ phí môi trường."
  },
  {
    topic: "Hiệu lực thi hành của Nghị định 27/2023/NĐ-CP (Điều 11)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 164/2016/NĐ-CP] Hết hiệu lực thi hành.",
    newRule: "[Căn cứ: Điều 11 NĐ 27/2023] Nghị định có hiệu lực thi hành từ ngày 15 tháng 07 năm 2023; thay thế toàn bộ Nghị định số 164/2016/NĐ-CP.",
    impactNote: "Cơ sở pháp lý then chốt điều chỉnh toàn bộ chi phí bảo vệ môi trường trong hoạt động mỏ của Công ty Cổ phần Kiểu Việt."
  }
];

// 5. tt-152-2015: 12 items
g5['tt-152-2015'].items = [
  {
    topic: "Xác định sản lượng khoáng sản tính thuế tài nguyên theo thực tế khai thác nguyên khai (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: TT 105/2010] Sản lượng tính thuế dựa trên ước tính.",
    newRule: "[Căn cứ: Điều 5 Khoản 1 TT 152/2015] Sản lượng tài nguyên tính thuế là số lượng, trọng lượng hoặc thể tích của tài nguyên thực tế khai thác trong kỳ tính thuế; đo lường tại vị trí sau khai thác trước khi đưa vào chế biến, sử dụng.",
    impactNote: "Kiểu Việt chốt sản lượng đá nổ mìn tại đáy moong mỏ để ghi nhận sản lượng tài nguyên nguyên khai tính thuế chuẩn mực."
  },
  {
    topic: "Xác định giá tính thuế tài nguyên đối với tài nguyên qua chế biến phức tạp (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: TT 105/2010] Giá tính thuế chưa rõ chi phí chế biến.",
    newRule: "[Căn cứ: Điều 6 Khoản 3 TT 152/2015] Trường hợp tài nguyên khai thác phải qua sàng tuyển, nghiền, đập mới bán được thì giá tính thuế là giá bán sản phẩm trừ (-) chi phí chế biến thực tế phát sinh nhưng không được thấp hơn giá tính thuế do UBND cấp tỉnh quy định.",
    impactNote: "Kiểu Việt tính toán bóc tách chi phí điện năng, dầu chạy máy nghiền và khấu hao dàn nghiền đá để xác định giá tính thuế tài nguyên tối ưu nhất."
  },
  {
    topic: "Biểu khung thuế suất thuế tài nguyên áp dụng đối với khoáng sản phi kim loại (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: Luật Thuế TN 2009] Thuế suất cũ.",
    newRule: "[Căn cứ: Điều 7 TT 152/2015 & NQ 1084/2015/UBTVQH13] Thuế suất thuế tài nguyên: Đá xây dựng thông thường: 10%; Cát vàng, cát xây dựng: 15%; Đất khai thác san lấp: 7%; Nước dưới đất dùng cho SX vật liệu: 5% - 8%.",
    impactNote: "Kế toán Kiểu Việt áp đúng thuế suất 10% cho đá xây dựng và 7% cho đất đắp san lấp trên tờ khai thuế tài nguyên Mẫu 01/TAIN."
  },
  {
    topic: "Quy định trường hợp khoáng sản khai thác lẫn lộn nhiều loại tài nguyên (Điều 5)",
    type: "added",
    oldRule: "[Căn cứ: TT cũ] Tính theo loại tài nguyên có thuế suất cao nhất.",
    newRule: "[Căn cứ: Điều 5 Khoản 3 TT 152/2015] Tài nguyên khai thác chứa nhiều chất khác nhau thì sản lượng tính thuế được xác định theo từng loại chất có trong tài nguyên; nếu không tách riêng được thì tính thuế theo loại tài nguyên có thuế suất cao nhất.",
    impactNote: "Kiểu Việt tổ chức sàng tuyển tách riêng đá dăm và cát nghiền nhân tạo để áp đúng mức thuế suất cho từng sản phẩm thành phẩm."
  },
  {
    topic: "Quy định khấu trừ thuế tài nguyên đối với tài nguyên mua lại đã nộp thuế (Điều 6)",
    type: "added",
    oldRule: "[Căn cứ: TT cũ] Dễ bị đánh thuế trùng 2 lần.",
    newRule: "[Căn cứ: Điều 6 Khoản 6 TT 152/2015] Doanh nghiệp mua tài nguyên từ đơn vị khai thác đã nộp thuế tài nguyên về để tiếp tục chế biến thành sản phẩm xuất khẩu thì không phải nộp thêm thuế tài nguyên; nếu có phát sinh thì được khấu trừ số thuế đã nộp ở khâu trước.",
    impactNote: "Bảo đảm Kiểu Việt mua đá nguyên liệu từ các nhà thầu liên danh không bị cơ quan thuế truy thu thuế tài nguyên lần hai."
  },
  {
    topic: "Hồ sơ khai quyết toán thuế tài nguyên năm (Điều 10)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Nộp biểu mẫu cũ.",
    newRule: "[Căn cứ: Điều 10 TT 152/2015 & TT 80/2021] Hồ sơ quyết toán thuế tài nguyên gồm: Tờ khai quyết toán thuế tài nguyên (Mẫu 02/TAIN ban hành kèm Thông tư 80) kèm theo Bảng phân bổ số thuế tài nguyên phải nộp cho các địa phương nơi có mỏ.",
    impactNote: "Kiểu Việt hoàn thành quyết toán thuế tài nguyên năm trước ngày 31/03, khớp số liệu với Báo cáo tài chính năm đã kiểm toán."
  },
  {
    topic: "Quy định miễn, giảm thuế tài nguyên đối với đất khai thác san lấp công trình an ninh quốc phòng (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Thủ tục xin miễn thuế phức tạp.",
    newRule: "[Căn cứ: Điều 9 TT 152/2015] Miễn thuế tài nguyên đối với đất khai thác để san lấp, xây dựng công trình quốc phòng, an ninh, công trình đê điều và công trình giao thông cấp bách vùng đồng bào dân tộc thiểu số.",
    impactNote: "Kiểu Việt lập hồ sơ xin miễn thuế tài nguyên đối với khối lượng đất đào đắp các tuyến đường tuần tra biên giới tại Tây Nguyên."
  },
  {
    topic: "Phương pháp xác định tỷ lệ hao hụt tài nguyên trong quá trình khai thác và vận chuyển (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Không có định mức hao hụt.",
    newRule: "[Căn cứ: Điều 5 Khoản 2 TT 152/2015] Định mức hao hụt tài nguyên do doanh nghiệp xây dựng phù hợp với công nghệ khai thác nhưng không được vượt quá định mức hao hụt kỹ thuật do Bộ quản lý chuyên ngành ban hành.",
    impactNote: "Kiểu Việt đăng ký định mức hao hụt nổ mìn và vận chuyển đá mỏ 3% với cơ quan thuế để loại trừ khỏi sản lượng tính thuế."
  },
  {
    topic: "Quy định về hạch toán kế toán thuế tài nguyên vào chi phí sản xuất kinh doanh (Điều 8)",
    type: "added",
    oldRule: "[Căn cứ: TT cũ] Hạch toán chung.",
    newRule: "[Căn cứ: Điều 8 TT 152/2015 & TT 200/2014] Thuế tài nguyên phát sinh trong kỳ được hạch toán trực tiếp vào chi phí sản xuất kinh doanh (TK 627 hoặc TK 154) và được tính vào chi phí được trừ khi xác định thu nhập chịu thuế TNDN.",
    impactNote: "Bút toán chuẩn mực: Nợ TK 154 / Có TK 3336 (Thuế tài nguyên) phản ánh trung thực giá thành sản xuất đá mỏ Kiểu Việt."
  },
  {
    topic: "Trách nhiệm nộp thuế tài nguyên tại địa phương nơi phát sinh hoạt động khai thác (Điều 11)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Nộp tại trụ sở chính.",
    newRule: "[Căn cứ: Điều 11 TT 152/2015] Thuế tài nguyên là khoản thu nộp 100% cho ngân sách địa phương cấp tỉnh nơi có mỏ khoáng sản; doanh nghiệp có trụ sở chính ở tỉnh khác vẫn phải kê khai và nộp thuế tài nguyên tại tỉnh nơi có mỏ.",
    impactNote: "Kiểu Việt kê khai và nộp trực tiếp tiền thuế tài nguyên vào Kho bạc Nhà nước tỉnh Gia Lai, đóng góp thiết thực cho ngân sách tỉnh."
  },
  {
    topic: "Xử phạt vi phạm trốn thuế, khai man sản lượng tài nguyên khai thác (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Phạt theo luật cũ.",
    newRule: "[Căn cứ: Điều 12 TT 152/2015 & NĐ 125/2020] Hành vi khai man sản lượng tài nguyên hoặc gian lận giá tính thuế bị xử phạt từ 1 đến 3 lần số tiền thuế trốn và truy thu đủ số thuế tài nguyên cộng tiền chậm nộp 0.03%/ngày.",
    impactNote: "Kiểu Việt thực hiện kê khai trung thực 100% sản lượng đá qua trạm cân, triệt tiêu mọi rủi ro thanh tra thuế."
  },
  {
    topic: "Hiệu lực thi hành của Thông tư 152/2015/TT-BTC (Điều 13)",
    type: "added",
    oldRule: "[Căn cứ: TT 105/2010/TT-BTC] Hết hiệu lực thi hành.",
    newRule: "[Căn cứ: Điều 13 TT 152/2015] Thông tư có hiệu lực thi hành từ ngày 20 tháng 11 năm 2015; là văn bản quy chuẩn hướng dẫn toàn diện nhất về thực thi pháp luật thuế tài nguyên tại Việt Nam.",
    impactNote: "Cẩm nang tra cứu và hành nghề kế toán thuế tài nguyên vững chắc của Công ty Cổ phần Kiểu Việt."
  }
];

// 6. nd-67-2019: 12 items
g5['nd-67-2019'].items = [
  {
    topic: "Phương pháp tính tiền cấp quyền khai thác khoáng sản (T) theo công thức mới (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 203/2013] Công thức tính cũ gây tranh cãi về hệ số K.",
    newRule: "[Căn cứ: Điều 4 NĐ 67/2019/NĐ-CP] Công thức: T = Q x G x K x R; trong đó Q là trữ lượng tính tiền; G là giá tính thuế tài nguyên; K là hệ số thu hồi khoáng sản; R là mức thu tiền cấp quyền (%).",
    impactNote: "Kiểu Việt kiểm tra và rà soát chính xác công thức tính tiền cấp quyền khai thác mỏ đá của tỉnh, bảo đảm không bị áp sai hệ số K và R."
  },
  {
    topic: "Quy định mức thu tiền cấp quyền khai thác (R) đối với khoáng sản vật liệu xây dựng (Phụ lục I)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 203/2013] Mức thu R cũ.",
    newRule: "[Căn cứ: Phụ lục I NĐ 67/2019] Mức thu R: Đá làm VLXD thông thường: 3%; Cát, sỏi: 5%; Đất sét làm gạch: 3%; Đất san lấp, đắp nền: 2%.",
    impactNote: "Kiểu Việt áp dụng mức thu R = 3% đối với mỏ đá xây dựng và R = 2% đối với mỏ đất đắp nền cao tốc theo đúng quy định."
  },
  {
    topic: "Quy định về thời hạn nộp tiền cấp quyền khai thác khoáng sản phân kỳ hàng năm (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Nộp 1 lần hoặc phân bổ chưa rõ.",
    newRule: "[Căn cứ: Điều 9 NĐ 67/2019] Tiền cấp quyền nộp phân kỳ hàng năm: Nộp 2 lần/năm (lần 1 chậm nhất ngày 31/05 và lần 2 chậm nhất ngày 31/10); nộp theo Thông báo nộp tiền của Cục Thuế.",
    impactNote: "Kế toán Kiểu Việt chủ động dự trù dòng tiền nộp đủ tiền cấp quyền khai thác mỏ trước ngày 31/5 và 31/10 hàng năm."
  },
  {
    topic: "Điều chỉnh tiền cấp quyền khai thác khoáng sản khi có biến động về giá tính thuế tài nguyên trên 20% (Điều 10)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 203/2013] Điều chỉnh khi giá biến động trên 10%.",
    newRule: "[Căn cứ: Điều 10 NĐ 67/2019] Cơ quan có thẩm quyền chỉ điều chỉnh tiền cấp quyền khai thác khoáng sản khi giá tính thuế tài nguyên do UBND cấp tỉnh ban hành biến động tăng hoặc giảm từ 20% trở lên so với giá tại thời điểm tính tiền cấp quyền trước đó.",
    impactNote: "Bảo đảm tính ổn định tài chính cho Kiểu Việt: Giá tính thuế tài nguyên biến động nhẹ dưới 20% thì không bị điều chỉnh tăng tiền cấp quyền."
  },
  {
    topic: "Quy định hoàn trả tiền cấp quyền khai thác khoáng sản khi trả lại một phần mỏ (Điều 12)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Trả mỏ không được hoàn tiền đã nộp.",
    newRule: "[Căn cứ: Điều 12 NĐ 67/2019] Trường hợp doanh nghiệp trả lại một phần hoặc toàn bộ mỏ khoáng sản do không còn nhu cầu khai thác thì được hoàn trả hoặc bù trừ số tiền cấp quyền đã nộp thừa tương ứng với trữ lượng chưa khai thác.",
    impactNote: "Kiểu Việt làm thủ tục trả lại phần diện tích mỏ không có trữ lượng và nhận lại tiền cấp quyền đã tạm nộp thừa từ ngân sách nhà nước."
  },
  {
    topic: "Xử lý tiền cấp quyền khai thác khoáng sản khi doanh nghiệp bị thu hồi giấy phép (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Mất toàn bộ số tiền đã nộp.",
    newRule: "[Căn cứ: Điều 13 NĐ 67/2019] Trường hợp bị thu hồi giấy phép do lỗi của cơ quan nhà nước (thay đổi quy hoạch) thì doanh nghiệp được hoàn trả 100% số tiền cấp quyền đã nộp cho trữ lượng chưa khai thác cộng lãi suất ngân hàng.",
    impactNote: "Bảo vệ triệt để quyền lợi vốn đầu tư của Kiểu Việt trước các biến động về quy hoạch hạ tầng của địa phương."
  },
  {
    topic: "Thẩm quyền phê duyệt tiền cấp quyền khai thác khoáng sản của UBND cấp tỉnh (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Phân cấp chưa rõ.",
    newRule: "[Căn cứ: Điều 7 NĐ 67/2019] UBND cấp tỉnh phê duyệt tiền cấp quyền khai thác khoáng sản đối với các giấy phép khai thác thuộc thẩm quyền cấp phép của UBND tỉnh (khoáng sản làm VLXD thông thường, mỏ đất, mỏ đá).",
    impactNote: "Sở TN&MT Gia Lai tính toán, trình UBND tỉnh Gia Lai ban hành Quyết định phê duyệt tiền cấp quyền cho Kiểu Việt."
  },
  {
    topic: "Trách nhiệm ra Thông báo nộp tiền cấp quyền khai thác khoáng sản của Cục Thuế (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Sở TNMT thông báo nộp tiền.",
    newRule: "[Căn cứ: Điều 8 NĐ 67/2019] Căn cứ Quyết định phê duyệt của UBND tỉnh, Cục Thuế tỉnh Gia Lai ban hành Thông báo nộp tiền cấp quyền gửi cho doanh nghiệp trong thời hạn 10 ngày làm việc.",
    impactNote: "Kiểu Việt đối chiếu số tiền trong Thông báo của Cục Thuế với Quyết định của UBND tỉnh trước khi làm thủ tục chuyển tiền."
  },
  {
    topic: "Xử lý trường hợp khai thác vượt trữ lượng cấp phép hàng năm (Điều 11)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Chỉ xử phạt vi phạm hành chính.",
    newRule: "[Căn cứ: Điều 11 NĐ 67/2019] Doanh nghiệp khai thác vượt công suất cấp phép hàng năm ngoài việc bị xử phạt vi phạm hành chính còn phải nộp bổ sung tiền cấp quyền khai thác khoáng sản cho phần trữ lượng vượt đó theo giá tính tại thời điểm phát hiện.",
    impactNote: "Ban Quản lý Mỏ Kiểu Việt kiểm soát sản lượng nổ mìn hàng quý, bảo đảm luôn nằm trong hạn mức cấp phép được duyệt."
  },
  {
    topic: "Hạch toán kế toán tiền cấp quyền khai thác khoáng sản (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Chưa hướng dẫn tài khoản hạch toán.",
    newRule: "[Căn cứ: Điều 9 NĐ 67/2019 & TT 200/2014] Tiền cấp quyền khai thác khoáng sản nộp cho nhiều năm được hạch toán vào chi phí trả trước dài hạn (TK 242) hoặc tài sản vô hình (TK 213) và phân bổ dần vào chi phí sản xuất kinh doanh (TK 154/TK 627) theo tiến độ khai thác.",
    impactNote: "Kế toán Kiểu Việt ghi nhận Nợ TK 242 / Có TK 3339 khi nhận thông báo và phân bổ Nợ TK 154 / Có TK 242 hàng tháng theo sản lượng đá thực tế."
  },
  {
    topic: "Quy định tiền chậm nộp tiền cấp quyền khai thác khoáng sản (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Tính theo lãi phạt hợp đồng.",
    newRule: "[Căn cứ: Điều 9 Khoản 4 NĐ 67/2019] Chậm nộp tiền cấp quyền khai thác khoáng sản quá thời hạn ghi trên thông báo bị tính tiền chậm nộp bằng 0.03%/ngày theo quy định của Luật Quản lý thuế.",
    impactNote: "Kiểu Việt thanh toán tiền cấp quyền đúng ngày, tránh bị phát sinh tiền phạt chậm nộp 0.03%/ngày."
  },
  {
    topic: "Hiệu lực thi hành của Nghị định 67/2019/NĐ-CP (Điều 16)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 203/2013/NĐ-CP & NĐ 158/2016] Hết hiệu lực.",
    newRule: "[Căn cứ: Điều 16 NĐ 67/2019] Nghị định có hiệu lực thi hành từ ngày 15 tháng 09 năm 2019; bãi bỏ toàn bộ Nghị định số 203/2013/NĐ-CP.",
    impactNote: "Cơ sở pháp lý nền tảng xác lập nghĩa vụ tài chính tiền cấp quyền khai thác khoáng sản của Công ty Cổ phần Kiểu Việt."
  }
];

// Write updated group 5 back to file
const outputCode = `import { DecreeDiffData } from '../diff-types';\n\nexport const group5ResourcesFeesGeneral: Record<string, DecreeDiffData> = ` + JSON.stringify(g5, null, 2) + `;\n`;
fs.writeFileSync(g5Path, outputCode, 'utf8');
console.log('Group 5 Part 1 expanded! 6 decrees completed with 12-14 items.');
