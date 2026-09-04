const fs = require('fs');
const path = require('path');

const g1Path = path.join(__dirname, '..', 'src', 'data', 'diffs', 'group1_accounting.ts');
const raw = fs.readFileSync(g1Path, 'utf8');
const jsonStr = raw.replace(/import[^;]+;/, '').replace(/export const \w+[^=]+=/, '').replace(/;\s*$/, '');
const g1 = eval('(' + jsonStr + ')');

// tt-200-2014: 12 points
g1['tt-200-2014'].items = [
  {
    topic: "Đổi mới phương pháp hạch toán tỷ giá hối đoái (TK 413)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 15/2006] Sử dụng tỷ giá bình quân liên ngân hàng do NHNN công bố để hạch toán tất cả các giao dịch ngoại tệ phát sinh trong kỳ.",
    newRule: "[Căn cứ: Điều 69 TT 200/2014] Sử dụng tỷ giá giao dịch thực tế của ngân hàng thương mại nơi doanh nghiệp mở tài khoản (tỷ giá mua khi ghi nhận tài sản/doanh thu, tỷ giá bán khi ghi nhận nợ phải trả/chi phí).",
    impactNote: "Kiểu Việt hạch toán sát thực tế biến động tỷ giá ngân hàng giao dịch, hạn chế chênh lệch giữa sổ sách kế toán và sao kê ngân hàng."
  },
  {
    topic: "Bãi bỏ hình thức ghi sổ kế toán bắt buộc, trao quyền tự chủ sổ sách",
    type: "removed",
    oldRule: "[Căn cứ: QĐ 15/2006] Bắt buộc doanh nghiệp phải đăng ký và tuân thủ 1 trong 4 hình thức sổ kế toán cứng nhắc: Nhật ký chung, Nhật ký - Sổ cái, Chứng từ ghi sổ hoặc Nhật ký chứng từ.",
    newRule: "[Căn cứ: Điều 122 TT 200/2014] Doanh nghiệp được hoàn toàn tự chủ xây dựng hình thức sổ kế toán riêng hoặc sử dụng phần mềm kế toán, miễn là bảo đảm tính minh bạch, đầy đủ và dễ kiểm tra.",
    impactNote: "Kiểu Việt linh hoạt tùy biến hệ thống sổ chi tiết chi phí công trình theo từng mã dự án giao thông độc lập."
  },
  {
    topic: "Phân loại Bất động sản đầu tư (TK 217) tách bạch TSCĐ hữu hình (TK 211)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 15/2006] Các tài sản nhà xưởng, mặt bằng cho thuê hoạt động thường được theo dõi chung trên TK 211, dễ gây nhầm lẫn về mục đích sử dụng.",
    newRule: "[Căn cứ: Điều 39 TT 200/2014] Bắt buộc tách riêng Bất động sản đầu tư nắm giữ để thu lợi từ việc cho thuê hoặc chờ tăng giá trên TK 217; trích khấu hao tính vào giá vốn kinh doanh BĐS (Nợ TK 632 / Có TK 2147).",
    impactNote: "Kiểu Việt hạch toán rõ ràng các khu nhà xưởng kho bãi cho thuê phụ trợ ngoài hoạt động thi công xây lắp chính."
  },
  {
    topic: "Bổ sung TK 353 (Quỹ khen thưởng, phúc lợi) tách khỏi Vốn chủ sở hữu",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 15/2006] Quỹ khen thưởng phúc lợi được xếp vào Loại 4 - Vốn chủ sở hữu (TK 431), gây hiểu nhầm về quyền sở hữu vốn của cổ đông.",
    newRule: "[Căn cứ: Điều 64 TT 200/2014] Chuyển Quỹ khen thưởng, phúc lợi sang Loại 3 - Nợ phải trả (TK 353) vì đây là nghĩa vụ phải trả cho người lao động, không phải vốn của chủ sở hữu doanh nghiệp.",
    impactNote: "Cơ cấu Bảng cân đối kế toán của Kiểu Việt phản ánh chuẩn xác vốn chủ sở hữu thực của cổ đông khi nộp hồ sơ đấu thầu."
  },
  {
    topic: "Quy định thời hạn phân bổ chi phí trả trước (TK 242 tối đa 3 năm)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 15/2006] Không khống chế thời gian tối đa phân bổ chi phí trả trước dài hạn, dẫn đến việc nhiều doanh nghiệp treo chi phí lỗ nhiều năm.",
    newRule: "[Căn cứ: Điều 48 TT 200/2014] Quy định rõ chi phí trả trước dài hạn (công cụ lán trại thi công, chi phí thành lập, thuê đất) được phân bổ dần vào chi phí kinh doanh trong thời gian tối đa không quá 3 năm tài chính.",
    impactNote: "Kiểu Việt phân bổ dứt điểm chi phí thiết bị lán trại tạm thời phục vụ gói thầu trong vòng đời thi công dự án."
  },
  {
    topic: "Hạch toán vốn hóa chi phí đi vay vào giá trị tài sản dở dang (TK 241)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 15/2006] Vốn hóa chi phí lãi vay áp dụng cứng nhắc, nhiều trường hợp lãi vay đầu tư dở dang vẫn hạch toán vào chi phí tài chính trong kỳ.",
    newRule: "[Căn cứ: Điều 82 TT 200/2014] Quy định chuẩn mực: Lãi vay liên quan trực tiếp đến việc đầu tư xây dựng tài sản dở dang phải được vốn hóa vào giá trị tài sản (Nợ TK 241 / Có TK 112, 335) cho đến khi tài sản sẵn sàng đưa vào sử dụng.",
    impactNote: "Kiểu Việt vốn hóa chính xác chi phí lãi vay ngân hàng đầu tư trạm trộn bê tông nhựa nóng và dây chuyền nghiền sàng đá."
  },
  {
    topic: "Xử lý tổn thất tài sản và hàng tồn kho mất mát chờ xử lý (TK 1381)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 15/2006] Tài sản thiếu chờ xử lý thường kéo dài qua nhiều năm tài chính mà không có chế tài xử lý dứt điểm.",
    newRule: "[Căn cứ: Điều 20 TT 200/2014] Bắt buộc tại thời điểm lập BCTC năm phải xác định nguyên nhân và xử lý dứt điểm số dư TK 1381 (bồi thường của cá nhân, hạch toán vào chi phí khác hoặc giá vốn hàng bán).",
    impactNote: "Tăng cường trách nhiệm của thủ kho và Ban chỉ huy công trường Kiểu Việt trong việc bảo vệ vật tư sắt thép xi măng ngoài hiện trường."
  },
  {
    topic: "Phân loại chứng khoán kinh doanh (TK 121) và đầu tư nắm giữ đến ngày đáo hạn (TK 128)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 15/2006] Gộp chung các khoản đầu tư tài chính ngắn hạn vào TK 121 mà không phân biệt bản chất mục đích đầu tư.",
    newRule: "[Căn cứ: Điều 15 TT 200/2014] Tách bạch rõ: TK 121 chỉ phản ánh chứng khoán mua vì mục đích kinh doanh lướt sóng; TK 128 phản ánh tiền gửi ngân hàng có kỳ hạn, trái phiếu, thương phiếu nắm giữ đến ngày đáo hạn.",
    impactNote: "Kiểu Việt hạch toán đúng bản chất các hợp đồng tiền gửi tiết kiệm có kỳ hạn tại ngân hàng để bảo toàn vốn lưu động."
  },
  {
    topic: "Thay đổi cấu trúc Báo cáo lưu chuyển tiền tệ (Mẫu B03-DN)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 15/2006] Các chỉ tiêu lưu chuyển tiền từ hoạt động đầu tư và tài chính chưa tách bạch dòng tiền giải ngân các dự án dài hạn.",
    newRule: "[Căn cứ: Điều 110 TT 200/2014] Chuẩn hóa phương pháp lập LCTT trực tiếp và gián tiếp; tách riêng dòng tiền chi mua sắm TSCĐ và tiền thu hồi cho vay, đầu tư vốn vào đơn vị khác.",
    impactNote: "Giúp lãnh đạo Kiểu Việt nhìn rõ dòng tiền tự do (Free Cash Flow) tạo ra từ hoạt động thi công xây lắp cốt lõi."
  },
  {
    topic: "Thuyết minh BCTC về quản trị rủi ro thanh khoản và biến động lãi suất",
    type: "added",
    oldRule: "[Căn cứ: QĐ 15/2006] Bản Thuyết minh BCTC chủ yếu thuyết minh số liệu lịch sử tĩnh, thiếu các cảnh báo về rủi ro tài chính.",
    newRule: "[Căn cứ: Điều 111 & Mẫu B09-DN TT 200/2014] Bắt buộc bổ sung Thuyết minh chi tiết về rủi ro thanh khoản, rủi ro tín dụng đối tác và phân tích độ nhạy của lãi suất tiền vay đối với lợi nhuận doanh nghiệp.",
    impactNote: "BCTC Kiểu Việt minh bạch, đạt chuẩn yêu cầu thẩm định vốn vay của các tổ chức tín dụng lớn."
  },
  {
    topic: "Ghi nhận doanh thu bán hàng kèm thiết bị chạy thử, lắp đặt",
    type: "added",
    oldRule: "[Căn cứ: QĐ 15/2006] Doanh thu được ghi nhận ngay khi giao hàng, bất kể việc chạy thử có điều kiện nghiệm thu phức tạp hay không.",
    newRule: "[Căn cứ: Điều 79 TT 200/2014] Chỉ được ghi nhận doanh thu khi đã hoàn thành việc lắp đặt và khách hàng đã ký biên bản nghiệm thu chạy thử đạt yêu cầu kỹ thuật.",
    impactNote: "Bảo đảm Kiểu Việt chỉ xuất hóa đơn và ghi nhận doanh thu các gói thầu lắp đặt trạm cân, hệ thống chiếu sáng giao thông khi chủ đầu tư đã nghiệm thu."
  },
  {
    topic: "Chuyển đổi số dư tài khoản kế toán từ QĐ 15 sang TT 200",
    type: "added",
    oldRule: "[Căn cứ: QĐ 15/2006] Quy định danh mục tài khoản cũ gồm 114 tài khoản cấp 1.",
    newRule: "[Căn cứ: Điều 127 TT 200/2014] Bảng chuyển đổi chi tiết: Chuyển toàn bộ số dư TK 142 sang TK 242; chuyển TK 431 sang TK 353; phân tách số dư tiền gửi có kỳ hạn từ TK 121 sang TK 128.",
    impactNote: "Bảo đảm số liệu chuyển tiếp giữa hai kỳ kế toán chính xác 100%, không bị sai lệch số dư đầu kỳ."
  }
];

// tt-133-2016: 12 points
g1['tt-133-2016'].items = [
  {
    topic: "Hệ thống tài khoản tinh gọn (Không sử dụng TK 621, 622, 623, 627)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 48/2006] DNNVV vẫn phải mở tài khoản 621, 622, 627 để theo dõi chi phí sản xuất trước khi kết chuyển vào TK 154.",
    newRule: "[Căn cứ: Điều 24 TT 133/2016] Bãi bỏ toàn bộ tài khoản loại 62x. Mọi chi phí NVL, nhân công, chi phí chung được tập hợp trực tiếp trên TK 154 (Chi phí SXKD dở dang).",
    impactNote: "Các công ty con và đơn vị thành viên quy mô nhỏ của Kiểu Việt hạch toán chi phí công trình trực tiếp, tinh gọn bộ máy kế toán."
  },
  {
    topic: "Đơn giản hóa Báo cáo tài chính cho doanh nghiệp nhỏ và vừa",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 48/2006] Bắt buộc lập đầy đủ bộ BCTC gồm Bảng CĐKT, Báo cáo KQKD, Báo cáo LCTT và Thuyết minh phức tạp.",
    newRule: "[Căn cứ: Điều 71 TT 133/2016] Cho phép lựa chọn mẫu BCTC rút gọn (Mẫu B01b-DNNVV); Báo cáo lưu chuyển tiền tệ (Mẫu B03-DNNVV) chỉ mang tính khuyến khích, không bắt buộc nộp cho cơ quan thuế.",
    impactNote: "Giảm áp lực lập báo cáo cuối năm cho các công ty liên kết phụ trách khai thác mỏ cát, mỏ đá của Kiểu Việt."
  },
  {
    topic: "Không bắt buộc phân loại chi phí bán hàng và quản lý riêng biệt",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 48/2006] Phải mở riêng TK 641 (Chi phí bán hàng) và TK 642 (Chi phí quản lý doanh nghiệp).",
    newRule: "[Căn cứ: Điều 61 TT 133/2016] Hợp nhất toàn bộ vào TK 642 duy nhất: 6421 (Chi phí bán hàng) và 6422 (Chi phí quản lý doanh nghiệp).",
    impactNote: "Tiết kiệm thời gian hạch toán các khoản chi phí xăng xe, tiếp khách, văn phòng phẩm tại các ban điều hành công trường."
  },
  {
    topic: "Nguyên tắc trích khấu hao TSCĐ linh hoạt",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 48/2006] Trích khấu hao TSCĐ phải tuân thủ cứng nhắc theo khung quy định tại Thông tư 45/2013 của Bộ Tài chính.",
    newRule: "[Căn cứ: Điều 32 TT 133/2016] Doanh nghiệp được căn cứ năng lực tài chính và cường độ sử dụng máy móc để xác định thời gian khấu hao hợp lý, đăng ký một lần với cơ quan thuế.",
    impactNote: "Kiểu Việt khấu hao nhanh máy móc thi công khi hoạt động 3 ca liên tục tại các công trình cao tốc tiến độ gấp."
  },
  {
    topic: "Quyền lựa chọn áp dụng Chế độ kế toán Doanh nghiệp (TT 200/99)",
    type: "added",
    oldRule: "[Căn cứ: QĐ 48/2006] Doanh nghiệp đã đăng ký áp dụng QĐ 48 thì không được chuyển đổi sang QĐ 15 trừ khi vượt quá quy mô DNNVV.",
    newRule: "[Căn cứ: Điều 3 TT 133/2016] DNNVV được quyền chủ động lựa chọn áp dụng Thông tư 200/2014 (hoặc Thông tư 99/2025) cho phù hợp với định hướng quản trị, chỉ cần thông báo cho cơ quan thuế.",
    impactNote: "Kiểu Việt đồng bộ toàn bộ công ty con áp dụng cùng một hệ thống tài khoản với công ty mẹ để hợp nhất BCTC thuận lợi."
  },
  {
    topic: "Đơn giản hóa phương pháp hạch toán tỷ giá hối đoái",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 48/2006] Đánh giá lại tỷ giá theo nhiều bước phức tạp cuối kỳ trên TK 413.",
    newRule: "[Căn cứ: Điều 52 TT 133/2016] Không mở TK 413 riêng biệt. Chênh lệch tỷ giá đánh giá lại cuối năm được ghi nhận thẳng vào TK 515 (Doanh thu tài chính) hoặc TK 635 (Chi phí tài chính).",
    impactNote: "Xử lý nhanh chóng các giao dịch mua vật tư nhập ngoại không để lại tồn dư tài khoản trung gian."
  },
  {
    topic: "Xử lý công nợ nội bộ không cần mở TK 136/336",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 48/2006] Bắt buộc mở TK 136 (Phải thu nội bộ) và TK 336 (Phải trả nội bộ) giữa các chi nhánh, xí nghiệp trực thuộc.",
    newRule: "[Căn cứ: Điều 19 TT 133/2016] Cho phép sử dụng trực tiếp TK 1388 (Phải thu khác) và TK 3388 (Phải trả khác) để phản ánh công nợ luân chuyển vốn nội bộ.",
    impactNote: "Giảm bớt sự phức tạp khi theo dõi điều chuyển tiền mặt và vật tư giữa các Ban chỉ huy gói thầu."
  },
  {
    topic: "Phương pháp kế toán hàng tồn kho linh hoạt",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 48/2006] Ưu tiên phương pháp kê khai thường xuyên, thủ tục áp dụng phương pháp kiểm kê định kỳ rất khắt khe.",
    newRule: "[Căn cứ: Điều 23 TT 133/2016] Cho phép áp dụng linh hoạt phương pháp kê khai thường xuyên hoặc kiểm kê định kỳ tùy theo đặc thù kho bãi và tính chất vật liệu cát, đá, đất đắp.",
    impactNote: "Kiểu Việt áp dụng kiểm kê định kỳ tại các bãi tập kết vật tư mỏ đá, mỏ đất san lấp không thể cân đo từng chuyến xe xuất."
  },
  {
    topic: "Chứng từ kế toán lao động thời vụ đơn giản hóa",
    type: "added",
    oldRule: "[Căn cứ: QĐ 48/2006] Mọi khoản chi trả nhân công đều phải có hợp đồng lao động đầy đủ, bảng chấm công và hồ sơ bảo hiểm bắt buộc.",
    newRule: "[Căn cứ: Điều 84 TT 133/2016] Cho phép lập Bảng kê thanh toán tiền công thuê ngoài (Mẫu 01-LĐTL) kèm CCCD và cam kết Mẫu 08 đối với lao động phổ thông thời vụ dưới 3 tháng.",
    impactNote: "Gỡ khó khăn lớn cho Kiểu Việt khi thuê nhân công thời vụ dọn dẹp mặt bằng, đắp taluy tại địa phương."
  },
  {
    topic: "Đơn giản hóa việc trích lập dự phòng giảm giá đầu tư tài chính",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 48/2006] Bắt buộc trích lập dự phòng theo giá thị trường phức tạp có xác nhận của kiểm toán viên.",
    newRule: "[Căn cứ: Điều 17 TT 133/2016] Cho phép trích lập dự phòng tổn thất đầu tư căn cứ vào BCTC có xác nhận của bên nhận đầu tư, không đòi hỏi kiểm toán độc lập đối với khoản đầu tư nhỏ.",
    impactNote: "Bảo đảm tính chủ động trích lập dự phòng rủi ro góp vốn của Kiểu Việt vào các HTX khai thác vật liệu."
  },
  {
    topic: "Bỏ yêu cầu kiểm toán độc lập BCTC hàng năm",
    type: "removed",
    oldRule: "[Căn cứ: QĐ 48/2006] Một số trường hợp DNNVV tham gia liên danh đấu thầu nhà nước bị đòi hỏi kiểm toán bắt buộc.",
    newRule: "[Căn cứ: Điều 86 TT 133/2016] Khẳng định DNNVV không thuộc diện bắt buộc phải kiểm toán BCTC, trừ trường hợp có thỏa thuận riêng trong hồ sơ mời thầu hoặc vay vốn tín dụng.",
    impactNote: "Tiết kiệm chi phí thuê đơn vị kiểm toán độc lập hàng năm cho các công ty con quy mô nhỏ."
  },
  {
    topic: "Chuyển đổi số dư tài khoản từ QĐ 48 sang Thông tư 133",
    type: "added",
    oldRule: "[Căn cứ: QĐ 48/2006] Hệ thống tài khoản cũ theo QĐ 48.",
    newRule: "[Căn cứ: Điều 91 TT 133/2016] Hướng dẫn chi tiết: Chuyển toàn bộ số dư TK 621, 622, 627 sang TK 154; chuyển số dư TK 641 sang TK 6421; chuyển số dư TK 142 sang TK 242.",
    impactNote: "Bảo đảm quá trình số hóa và đồng bộ phần mềm kế toán diễn ra mượt mà, không gián đoạn kỳ kế toán."
  }
];

// tt-24-2024-tt-btc: 12 points
g1['tt-24-2024-tt-btc'].items = [
  {
    topic: "Chuẩn hóa hệ thống tài khoản kế toán HCSN thống nhất toàn quốc",
    type: "modified",
    oldRule: "[Căn cứ: TT 107/2017] Hệ thống tài khoản HCSN gồm 7 loại tài khoản trong bảng và các tài khoản loại 0 ngoài bảng theo dõi kinh phí dự toán.",
    newRule: "[Căn cứ: Điều 12-25 TT 24/2024] Tái cơ cấu toàn bộ hệ thống tài khoản kế toán HCSN: Bổ sung các tài khoản quản lý chi tiết nguồn vốn đầu tư công, nguồn vốn ODA và kinh phí sự nghiệp kinh tế giao thông.",
    impactNote: "Kế toán Kiểu Việt nắm rõ quy trình hạch toán của các Ban QLDA để chuẩn bị hồ sơ nghiệm thu thanh toán khớp đúng tài khoản giải ngân của Chủ đầu tư."
  },
  {
    topic: "Quy định về hạch toán chi phí quản lý dự án Ban QLDA chuyên ngành giao thông",
    type: "modified",
    oldRule: "[Căn cứ: Điều 42 TT 107/2017] Chi phí QLDA được theo dõi chung trong nguồn kinh phí hoạt động thường xuyên của đơn vị.",
    newRule: "[Căn cứ: Điều 30 TT 24/2024] Bắt buộc tách riêng chi phí QLDA theo từng công trình, dự án; kiểm soát chặt chẽ định mức chi phí giám sát, nghiệm thu khối lượng A-B theo quy định quản lý chi phí xây dựng.",
    impactNote: "Hồ sơ thanh toán tạm ứng và khối lượng hoàn thành của Kiểu Việt được Ban QLDA thẩm tra và phê duyệt nhanh chóng."
  },
  {
    topic: "Quy trình thanh toán và rút dự toán Kho bạc điện tử",
    type: "modified",
    oldRule: "[Căn cứ: TT 107/2017] Hồ sơ rút dự toán và ủy nhiệm chi chuyển khoản Kho bạc Nhà nước thực hiện phần lớn bằng chứng từ giấy có dấu đỏ.",
    newRule: "[Căn cứ: Điều 8 TT 24/2024] 100% hồ sơ thanh toán khối lượng xây lắp và rút dự toán vốn đầu tư công được xử lý qua hệ thống Dịch vụ công trực tuyến Kho bạc Nhà nước có ký số HSM.",
    impactNote: "Dòng tiền thanh toán từ Kho bạc Nhà nước chuyển về tài khoản Kiểu Việt được rút ngắn xuống dưới 3 ngày làm việc."
  },
  {
    topic: "Hạch toán tiếp nhận và bàn giao tài sản kết cấu hạ tầng giao thông đường bộ",
    type: "added",
    oldRule: "[Căn cứ: TT 107/2017] Hạch toán tài sản hạ tầng đường bộ chưa có tài khoản chi tiết riêng, thường ghi nhận chung vào TSCĐ của đơn vị hành chính.",
    newRule: "[Căn cứ: Điều 36 TT 24/2024] Bổ sung tài khoản theo dõi riêng tài sản hạ tầng giao thông (đường cao tốc, cầu cống, trạm thu phí); quy định rõ quy trình bàn giao từ nhà thầu xây lắp sang đơn vị quản lý khai thác sau khi hết thời hạn bảo hành.",
    impactNote: "Kiểu Việt hoàn thành thủ tục bàn giao dứt điểm tài sản công trình và thu hồi tiền bảo lãnh bảo hành 5% giá trị hợp đồng."
  },
  {
    topic: "Kiểm soát tạm ứng và hoàn ứng vốn ngân sách nhà nước",
    type: "modified",
    oldRule: "[Căn cứ: TT 107/2017] Việc thu hồi tạm ứng vốn đầu tư công chưa có quy định tỷ lệ khấu trừ cố định trong tài khoản kế toán.",
    newRule: "[Căn cứ: Điều 28 TT 24/2024] Quy định rõ tỷ lệ thu hồi tạm ứng qua từng lần thanh toán khối lượng hoàn thành Mẫu 03a, bắt buộc thu hồi dứt điểm số dư tạm ứng khi khối lượng nghiệm thu đạt 80% giá trị hợp đồng.",
    impactNote: "Phòng Tài chính Kiểu Việt chủ động cân đối dòng tiền thi công khi tỷ lệ giải ngân thực tế bị trừ dần tiền tạm ứng đã nhận."
  },
  {
    topic: "Đơn giản hóa chứng từ chi sự nghiệp và thuê khoán nhân công",
    type: "modified",
    oldRule: "[Căn cứ: TT 107/2017] Yêu cầu thủ tục phức tạp đối với các khoản chi thuê khoán, bồi thường giải phóng mặt bằng.",
    newRule: "[Căn cứ: Điều 10 TT 24/2024] Cho phép sử dụng bảng kê thanh toán điện tử có xác nhận của chính quyền địa phương đối với chi trả đền bù mặt bằng và nhân công địa phương.",
    impactNote: "Tạo thuận lợi cho Kiểu Việt trong công tác giải phóng mặt bằng đường công vụ và bãi đổ thải mỏ đất đắp."
  },
  {
    topic: "Bổ sung quy định kế toán số và hóa đơn điện tử trong đơn vị HCSN",
    type: "added",
    oldRule: "[Căn cứ: TT 107/2017] Chưa có quy định chi tiết về việc tiếp nhận và đối chiếu hóa đơn điện tử theo NĐ 123.",
    newRule: "[Căn cứ: Điều 9 TT 24/2024] Bắt buộc các đơn vị HCSN tiếp nhận, kiểm tra tính hợp lệ của hóa đơn điện tử trên Cổng hoadondientu.gdt.gov.vn trước khi lập lệnh chi tiền gửi Kho bạc.",
    impactNote: "Hóa đơn điện tử Kiểu Việt xuất cho Chủ đầu tư phải bảo đảm tính hợp pháp tuyệt đối, không có sai sót về mã cơ quan thuế."
  },
  {
    topic: "Quy định về trích lập và sử dụng Quỹ phát triển hoạt động sự nghiệp",
    type: "modified",
    oldRule: "[Căn cứ: TT 107/2017] Cơ chế trích lập quỹ tại các Ban QLDA còn nhiều điểm chưa thống nhất giữa chi thường xuyên và chi đầu tư.",
    newRule: "[Căn cứ: Điều 40 TT 24/2024] Chuẩn hóa tỷ lệ trích lập quỹ từ nguồn thu quản lý dự án và các dịch vụ tư vấn giám sát công trình giao thông.",
    impactNote: "Minh bạch hóa các khoản chi phí tư vấn giám sát và quản lý dự án trong tổng mức đầu tư công trình Kiểu Việt tham gia."
  },
  {
    topic: "Quy định về xử lý nợ đọng xây dựng cơ bản tại các đơn vị sự nghiệp",
    type: "added",
    oldRule: "[Căn cứ: TT 107/2017] Nợ đọng xây dựng cơ bản treo nhiều năm không có tài khoản riêng để phân loại nợ xấu.",
    newRule: "[Căn cứ: Điều 32 TT 24/2024] Bắt buộc phân loại chi tiết các khoản nợ đọng nhà thầu xây lắp theo từng năm ngân sách và lập kế hoạch bố trí vốn thanh toán dứt điểm.",
    impactNote: "Căn cứ pháp lý vững chắc để Kiểu Việt yêu cầu Chủ đầu tư công bố lộ trình giải ngân dứt điểm công nợ thi công tồn đọng."
  },
  {
    topic: "Thời hạn gửi và công khai Báo cáo tài chính nhà nước tổng hợp",
    type: "modified",
    oldRule: "[Căn cứ: TT 107/2017] Thời hạn nộp báo cáo quyết toán kéo dài đến tháng 5 năm sau.",
    newRule: "[Căn cứ: Điều 55 TT 24/2024] Rút ngắn thời hạn hoàn thành quyết toán vốn đầu tư công dự án hoàn thành, bắt buộc đối chiếu công nợ nhà thầu trước ngày 31/01 hàng năm.",
    impactNote: "Kế toán Kiểu Việt phải hoàn thiện biên bản đối chiếu công nợ A-B với Chủ đầu tư trong tháng 12 và tháng 1."
  },
  {
    topic: "Kiểm kê tài sản công định kỳ và xử lý thừa thiếu vật tư dự án",
    type: "modified",
    oldRule: "[Căn cứ: TT 107/2017] Quy định kiểm kê tài sản mang tính hình thức, không quy định rõ trách nhiệm vật chất khi thất thoát.",
    newRule: "[Căn cứ: Điều 48 TT 24/2024] Quy định quy trình kiểm kê hiện trường công trình xây dựng dở dang có sự tham gia bắt buộc của Ban QLDA, Tư vấn giám sát và Nhà thầu thi công.",
    impactNote: "Bảo đảm số liệu khối lượng dở dang tại hiện trường của Kiểu Việt được các bên ký xác nhận định kỳ hàng quý."
  },
  {
    topic: "Hướng dẫn chuyển đổi số dư tài khoản kế toán HCSN sang Thông tư 24",
    type: "added",
    oldRule: "[Căn cứ: TT 107/2017] Hệ thống tài khoản cũ theo Thông tư 107.",
    newRule: "[Căn cứ: Điều 65 TT 24/2024] Hướng dẫn chi tiết chuyển đổi số dư toàn bộ tài khoản nguồn vốn và tài sản cố định sang hệ thống tài khoản mới từ ngày 01/01/2025.",
    impactNote: "Bảo đảm công nợ thi công của Kiểu Việt tại các Chủ đầu tư nhà nước được chuyển giao chính xác, không bị thất lạc số dư."
  }
];

// luat-56-2024: 10 points
g1['luat-56-2024'].items = [
  {
    topic: "Sửa đổi điều kiện khấu trừ thuế GTGT đầu vào không dùng tiền mặt (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: Luật Thuế GTGT 2008] Hóa đơn từ 20 triệu đồng trở lên bắt buộc phải có chứng từ thanh toán không dùng tiền mặt.",
    newRule: "[Căn cứ: Điều 1 Luật 56/2024] Hạ ngưỡng bắt buộc thanh toán không dùng tiền mặt xuống còn 5.000.000 đồng đối với toàn bộ hàng hóa, dịch vụ mua vào.",
    impactNote: "Kiểu Việt chuyển toàn bộ các khoản mua vật tư lẻ tại công trường từ 5 triệu đồng trở lên sang chuyển khoản ngân hàng để bảo đảm 100% được khấu trừ thuế."
  },
  {
    topic: "Quy định về thời điểm hoàn thành nghĩa vụ nộp thuế của doanh nghiệp",
    type: "modified",
    oldRule: "[Căn cứ: Luật QLT 2019] Tính thời điểm nộp thuế khi tiền vào tài khoản Kho bạc Nhà nước.",
    newRule: "[Căn cứ: Điều 3 Luật 56/2024] Thời điểm nộp thuế được xác định là thời điểm ngân hàng thương mại trích tiền từ tài khoản của người nộp thuế thành công.",
    impactNote: "Loại bỏ rủi ro Kiểu Việt bị tính tiền chậm nộp 0.03%/ngày do ngân hàng chuyển lệnh sang Kho bạc chậm vào ngày cuối cùng của kỳ hạn nộp thuế."
  },
  {
    topic: "Bổ sung cơ chế tạm hoãn xuất cảnh đối với người đại diện pháp luật doanh nghiệp nợ thuế",
    type: "modified",
    oldRule: "[Căn cứ: Luật QLT 2019] Áp dụng biện pháp tạm hoãn xuất cảnh chung chung đối với cá nhân nợ thuế.",
    newRule: "[Căn cứ: Điều 5 Luật 56/2024] Quy định rõ ngưỡng nợ thuế và thời gian thông báo trước tối thiểu 30 ngày trước khi ban hành văn bản tạm hoãn xuất cảnh người đại diện pháp luật.",
    impactNote: "Kiểu Việt luôn duy trì kiểm soát đối chiếu nợ thuế định kỳ hàng tháng trên cổng Thuedientu để bảo đảm lịch công tác nước ngoài của Ban lãnh đạo."
  },
  {
    topic: "Đơn giản hóa thủ tục hoàn thuế GTGT cho dự án đầu tư xây dựng mới",
    type: "modified",
    oldRule: "[Căn cứ: Luật Thuế GTGT 2008] Thủ tục hoàn thuế dự án đầu tư kéo dài nhiều tháng với quy trình kiểm tra trước hoàn thuế sau phức tạp.",
    newRule: "[Căn cứ: Điều 2 Luật 56/2024] Phân loại hồ sơ hoàn thuế tự động: Doanh nghiệp tuân thủ pháp luật thuế tốt được hoàn thuế trước, kiểm tra sau trong vòng 6 ngày làm việc.",
    impactNote: "Kiểu Việt thu hồi nhanh tiền hoàn thuế GTGT hàng chục tỷ đồng cho dự án đầu tư mở rộng mỏ khoáng sản và trạm nghiền đá."
  },
  {
    topic: "Quy định về hóa đơn điện tử khởi tạo từ máy tính tiền kết nối cơ quan thuế",
    type: "added",
    oldRule: "[Căn cứ: Luật QLT 2019] Chưa bắt buộc đối với toàn bộ các cơ sở kinh doanh dịch vụ ăn uống, bán lẻ xăng dầu.",
    newRule: "[Căn cứ: Điều 4 Luật 56/2024] Bắt buộc 100% cửa hàng bán lẻ xăng dầu, dịch vụ vận tải và nhà hàng xuất hóa đơn từng lần bán hàng kết nối trực tiếp cơ quan thuế.",
    impactNote: "Các lái xe chở đất đá Kiểu Việt khi đổ dầu Diesel tại bất kỳ cây xăng nào đều nhận được hóa đơn điện tử từng lần bơm để thanh toán công tác phí."
  },
  {
    topic: "Miễn tiền chậm nộp thuế trong trường hợp bất khả kháng do thiên tai, dịch bệnh",
    type: "added",
    oldRule: "[Căn cứ: Luật QLT 2019] Quy trình xét miễn tiền chậm nộp rất phức tạp, phải qua nhiều cấp phê duyệt.",
    newRule: "[Căn cứ: Điều 6 Luật 56/2024] Cơ chế tự động giải quyết miễn tiền chậm nộp căn cứ Biên bản xác nhận thiệt hại của UBND cấp huyện trong vòng 15 ngày.",
    impactNote: "Bảo vệ Kiểu Việt khi công trình bị ngập lụt, sạt lở đất trong mùa mưa bão tại khu vực Tây Nguyên."
  },
  {
    topic: "Nâng cao trách nhiệm của sàn thương mại điện tử và cổng thanh toán trung gian",
    type: "added",
    oldRule: "[Căn cứ: Luật QLT 2019] Chưa có quy định trách nhiệm khấu trừ thuế của sàn TMĐT.",
    newRule: "[Căn cứ: Điều 7 Luật 56/2024] Bắt buộc sàn TMĐT và đơn vị trung gian thanh toán khấu trừ và nộp thuế thay cho các hộ kinh doanh, cá nhân kinh doanh trên sàn.",
    impactNote: "Tạo môi trường cạnh tranh lành mạnh, minh bạch hóa các nhà cung cấp vật tư thiết bị xây dựng trực tuyến."
  },
  {
    topic: "Quy định về thời hiệu xử phạt vi phạm thủ tục thuế và trốn thuế",
    type: "modified",
    oldRule: "[Căn cứ: Luật QLT 2019] Thời hiệu 2 năm đối với thủ tục, 5 năm đối với trốn thuế.",
    newRule: "[Căn cứ: Điều 8 Luật 56/2024] Giữ nguyên thời hiệu nhưng quy định rõ mốc tính từ ngày người nộp thuế nộp hồ sơ khai thuế bổ sung hoặc ngày cơ quan thuế lập biên bản.",
    impactNote: "Kế toán Kiểu Việt nắm chắc mốc thời hiệu để giải trình các khoản điều chỉnh hồ sơ quyết toán các năm trước."
  },
  {
    topic: "Quy định chia sẻ dữ liệu liên thông giữa cơ quan Thuế, Hải quan và Ngân hàng",
    type: "added",
    oldRule: "[Căn cứ: Luật QLT 2019] Chia sẻ dữ liệu còn rời rạc, cơ quan thuế phải gửi công văn yêu cầu ngân hàng cung cấp sao kê.",
    newRule: "[Căn cứ: Điều 9 Luật 56/2024] Kết nối API tự động giữa hệ thống dữ liệu ngành thuế với các ngân hàng thương mại để tra cứu số dư và giao dịch đáng ngờ theo thời gian thực.",
    impactNote: "Yêu cầu Kiểu Việt phải bảo đảm tuyệt đối tính đồng nhất giữa sổ phụ ngân hàng và sổ cái tiền gửi TK 112."
  },
  {
    topic: "Hiệu lực thi hành các điều khoản sửa đổi luật thuế và kế toán",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Quy định theo các luật chuyên ngành.",
    newRule: "[Căn cứ: Điều 10 Luật 56/2024] Luật có hiệu lực thi hành từ ngày 01/01/2025; các quy định về ngưỡng thanh toán không dùng tiền mặt 5 triệu áp dụng từ kỳ thuế năm 2025.",
    impactNote: "Toàn bộ hệ thống quản trị chi tiêu Kiểu Việt đã điều chỉnh quy chế tài chính nội bộ đồng bộ với Luật 56."
  }
];

// vas-01: 10 points
g1['vas-01'].items = [
  {
    topic: "Nguyên tắc Hoạt động liên tục (Going Concern)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Đánh giá khả năng hoạt động liên tục chủ yếu dựa trên lợi nhuận thuần trong kỳ.",
    newRule: "[Căn cứ: Đoạn 08-11 VAS 01] BCTC phải được lập trên cơ sở giả định doanh nghiệp đang hoạt động liên tục và sẽ tiếp tục hoạt động trong tương lai gần (tối thiểu 12 tháng); nếu có nguy cơ ngừng hoạt động phải lập BCTC theo giá trị thanh lý.",
    impactNote: "Kiểu Việt lập báo cáo dòng tiền dự báo 12 tháng chứng minh khả năng hoàn thành các gói thầu giao thông dài hạn."
  },
  {
    topic: "Nguyên tắc Cơ sở dồn tích (Accrual Basis)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Cho phép một số khoản mục nhỏ hạch toán trên cơ sở tiền mặt.",
    newRule: "[Căn cứ: Đoạn 06-07 VAS 01] Mọi nghiệp vụ kinh tế tài chính liên quan đến tài sản, nợ phải trả, vốn chủ sở hữu, doanh thu và chi phí phải được ghi sổ kế toán vào thời điểm phát sinh, không căn cứ vào thời điểm thực tế thu hoặc chi tiền.",
    impactNote: "Chi phí nhân công, vật tư cát đá đưa vào công trình Kiểu Việt phải trích trước ghi nhận đúng kỳ thi công dù chưa thanh toán tiền."
  },
  {
    topic: "Nguyên tắc Giá gốc (Historical Cost)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Giá gốc tài sản cố định bao gồm cả một số khoản chi phí quản lý chung.",
    newRule: "[Căn cứ: Đoạn 12-14 VAS 01] Tài sản phải được ghi nhận theo giá gốc gồm toàn bộ chi phí mua sắm, bốc dỡ, vận chuyển, lắp đặt chạy thử đưa tài sản vào trạng thái sẵn sàng sử dụng; không được tùy ý điều chỉnh giá gốc trừ trường hợp pháp luật có quy định khác.",
    impactNote: "Toàn bộ chi phí vận chuyển xe lu, máy ủi từ mỏ về công trường được vốn hóa chuẩn xác vào giá gốc tài sản."
  },
  {
    topic: "Nguyên tắc Phù hợp (Matching Principle)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Chi phí có thể kết chuyển trước khi doanh thu tương ứng được ghi nhận.",
    newRule: "[Căn cứ: Đoạn 15-18 VAS 01] Việc ghi nhận doanh thu và chi phí phải phù hợp với nhau. Khi ghi nhận một khoản doanh thu thì phải ghi nhận một khoản chi phí tương ứng liên quan đến việc tạo ra doanh thu đó.",
    impactNote: "Giá vốn công trình (TK 632) của Kiểu Việt chỉ được kết chuyển tương ứng đúng với phần doanh thu xây lắp (TK 511) đã được chủ đầu tư ký nghiệm thu."
  },
  {
    topic: "Nguyên tắc Thận trọng (Prudence Principle)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Thận trọng áp dụng tùy nghi, nhiều doanh nghiệp lập quỹ dự phòng quá mức để dìm lợi nhuận.",
    newRule: "[Căn cứ: Đoạn 19-21 VAS 01] Thận trọng là việc xem xét, cân nhắc, phán đoán cần thiết để lập các ước tính kế toán: Phải lập các khoản dự phòng nhưng không lập quá lớn; không ghi nhận doanh thu khi chưa có bằng chứng chắc chắn.",
    impactNote: "Kiểu Việt trích lập dự phòng nợ khó đòi đối với các chủ đầu tư chậm thanh toán một cách thận trọng, hợp pháp."
  },
  {
    topic: "Nguyên tắc Nhất quán (Consistency Principle)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Cho phép thay đổi chính sách kế toán giữa các quý mà không cần thuyết minh.",
    newRule: "[Căn cứ: Đoạn 22-24 VAS 01] Các chính sách và phương pháp kế toán doanh nghiệp đã chọn phải được áp dụng thống nhất ít nhất trong một kỳ kế toán năm; trường hợp có thay đổi phải thuyết minh rõ lý do và ảnh hưởng định lượng trên BCTC.",
    impactNote: "Kiểu Việt duy trì phương pháp trích khấu hao và tính giá xuất kho vật tư nhất quán trong suốt vòng đời dự án."
  },
  {
    topic: "Nguyên tắc Trọng yếu (Materiality)",
    type: "added",
    oldRule: "[Căn cứ: QĐ 167/2000] Mọi khoản mục sai sót đều phải sửa chữa bằng phương pháp hồi tố phức tạp.",
    newRule: "[Căn cứ: Đoạn 25-27 VAS 01] Thông tin được coi là trọng yếu nếu việc thiếu thông tin hoặc sai sót có thể làm sai lệch đáng kể BCTC, làm ảnh hưởng đến quyết định kinh tế của người sử dụng BCTC; các sai sót không trọng yếu được xử lý phi hồi tố.",
    impactNote: "Kế toán Kiểu Việt tập trung nguồn lực kiểm soát các chỉ tiêu doanh thu, chi phí vật tư lớn, không sa đà vào các sai sót lặt vặt vài trăm ngàn đồng."
  },
  {
    topic: "Định nghĩa và điều kiện ghi nhận Tài sản (Asset Recognition)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Tài sản định nghĩa gắn liền với quyền sở hữu pháp lý.",
    newRule: "[Căn cứ: Đoạn 35-43 VAS 01] Tài sản là nguồn lực do doanh nghiệp kiểm soát và dự tính đem lại lợi ích kinh tế trong tương lai; ghi nhận khi chắc chắn thu được lợi ích kinh tế và giá trị được xác định một cách đáng tin cậy.",
    impactNote: "Kiểu Việt ghi nhận tài sản máy móc thuê tài chính vào BCTC dù chưa hoàn tất thủ tục chuyển quyền sở hữu."
  },
  {
    topic: "Định nghĩa và điều kiện ghi nhận Nợ phải trả (Liabilities Recognition)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Chỉ ghi nhận nợ phải trả khi đã có hóa đơn hoặc văn bản đòi nợ chính thức.",
    newRule: "[Căn cứ: Đoạn 44-51 VAS 01] Nợ phải trả là nghĩa vụ hiện tại của doanh nghiệp phát sinh từ các giao dịch và sự kiện đã qua mà doanh nghiệp phải thanh toán từ các nguồn lực của mình; bao gồm cả các khoản nợ ước tính (dự phòng bảo hành công trình).",
    impactNote: "Kiểu Việt trích trước các khoản chi phí nợ thầu phụ thi công giai đoạn vào nợ phải trả để phản ánh đúng thực trạng tài chính."
  },
  {
    topic: "Bản chất quan trọng hơn hình thức (Substance Over Form)",
    type: "added",
    oldRule: "[Căn cứ: QĐ 167/2000] Ưu tiên hình thức chứng từ pháp lý hơn bản chất kinh tế của giao dịch.",
    newRule: "[Căn cứ: Đoạn 28 VAS 01] Các giao dịch và sự kiện kinh tế phải được phản ánh theo đúng bản chất kinh tế và thực tế phát sinh, không chỉ căn cứ vào hình thức pháp lý bên ngoài.",
    impactNote: "Nguyên tắc cốt lõi giúp Kiểu Việt hạch toán đúng các hợp đồng hợp tác đầu tư mỏ khoáng sản và liên danh xây lắp."
  }
];

// vas-02: 10 points
g1['vas-02'].items = [
  {
    topic: "Xác định giá gốc Hàng tồn kho vật liệu cát, đá, sắt thép (Đoạn 04-10)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Giá gốc hàng tồn kho chỉ gồm giá mua ghi trên hóa đơn.",
    newRule: "[Căn cứ: Đoạn 04-10 VAS 02] Giá gốc hàng tồn kho bao gồm: Chi phí mua (giá mua, thuế không hoàn lại), chi phí chế biến và chi phí liên quan trực tiếp khác (vận chuyển, bốc xếp, bảo hiểm đường biển, hao hụt định mức).",
    impactNote: "Toàn bộ chi phí vận chuyển đất đắp từ mỏ về công trường được tính thẳng vào giá gốc vật tư TK 152 của Kiểu Việt."
  },
  {
    topic: "Không tính vào giá gốc hàng tồn kho các khoản chi phí lãng phí bất thường",
    type: "added",
    oldRule: "[Căn cứ: QĐ 167/2000] Toàn bộ hao hụt vật tư tại công trường thường đưa hết vào giá thành sản phẩm.",
    newRule: "[Căn cứ: Đoạn 13 VAS 02] Chi phí nguyên liệu, vật liệu, chi phí nhân công và chi phí sản xuất khác vượt trên mức bình thường không được tính vào giá gốc hàng tồn kho mà phải hạch toán thẳng vào Giá vốn hàng bán (TK 632) trong kỳ.",
    impactNote: "Khối lượng đất đắp bị mưa lũ cuốn trôi vượt định mức phải hạch toán vào TK 632/811, không làm tăng giá thành định mức công trình."
  },
  {
    topic: "Phương pháp tính giá trị hàng tồn kho xuất kho (Đoạn 14-17)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Cho phép áp dụng 4 phương pháp: Bình quân gia quyền, Nhập trước xuất trước (FIFO), Nhập sau xuất trước (LIFO) và Giá thực tế đích danh.",
    newRule: "[Căn cứ: Đoạn 14-17 VAS 02 & TT 200] Bãi bỏ phương pháp LIFO. Kiểu Việt được lựa chọn: Bình quân gia quyền, FIFO hoặc Giá thực tế đích danh cho từng nhóm vật tư.",
    impactNote: "Kiểu Việt áp dụng phương pháp Thực tế đích danh cho kết cấu thép cầu đường và Bình quân gia quyền cho xi măng, cát, đá."
  },
  {
    topic: "Xác định Giá trị thuần có thể thực hiện được (NRV) của hàng tồn kho",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Đánh giá giảm giá hàng tồn kho theo giá bán thị trường tự do.",
    newRule: "[Căn cứ: Đoạn 18-23 VAS 02] Giá trị thuần có thể thực hiện được là giá bán ước tính của hàng tồn kho trong kỳ sản xuất, kinh doanh bình thường trừ chi phí ước tính để hoàn thành và chi phí ước tính cần thiết cho việc tiêu thụ chúng.",
    impactNote: "Đánh giá lại lô thép tồn kho dự trữ thi công nếu giá thép thị trường giảm sâu cuối năm để trích lập dự phòng giảm giá chính xác."
  },
  {
    topic: "Nguyên tắc trích lập dự phòng giảm giá hàng tồn kho (Đoạn 24-27)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Trích lập dự phòng tổng thể cho toàn bộ kho hàng.",
    newRule: "[Căn cứ: Đoạn 24-27 VAS 02] Việc lập dự phòng giảm giá hàng tồn kho phải được thực hiện trên cơ sở từng mặt hàng tồn kho; chỉ được lập dự phòng cho nhóm hàng tương tự khi các mặt hàng cùng loại và không thể tách rời.",
    impactNote: "Kiểu Việt lập bảng chi tiết trích lập dự phòng riêng cho từng mác xi măng, từng loại thép cuộn/thép thanh."
  },
  {
    topic: "Ghi nhận chi phí khi xuất kho hàng tồn kho vào thi công (Đoạn 28-29)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Xuất kho ghi thẳng vào chi phí không cần gắn với tiến độ thi công.",
    newRule: "[Căn cứ: Đoạn 28-29 VAS 02] Khi hàng tồn kho được đưa vào sử dụng thi công xây lắp, giá gốc của hàng tồn kho được hạch toán vào chi phí sản xuất trong kỳ (TK 154) phù hợp với doanh thu được tạo ra.",
    impactNote: "Xuất kho vật tư cát đá của Kiểu Việt phải có Phiếu xuất kho công trình gắn đúng mã gói thầu và lý trình thi công Km."
  },
  {
    topic: "Xử lý hàng tồn kho ứ đọng, chậm luân chuyển tại các công trường",
    type: "added",
    oldRule: "[Căn cứ: QĐ 167/2000] Chưa có quy định riêng về hàng tồn kho công trình dở dang ngừng trệ.",
    newRule: "[Căn cứ: Đoạn 22 VAS 02] Vật tư phụ tùng tồn đọng tại các công trình tạm dừng phải được kiểm kê, đánh giá khả năng sử dụng và xem xét thanh lý hoặc điều chuyển sang công trình khác.",
    impactNote: "Phòng Vật tư Kiểu Việt chủ động điều chuyển thép và phụ gia bê tông giữa các gói thầu, tránh để ẩm ướt gỉ sét gây lãng phí."
  },
  {
    topic: "Trình bày Thuyết minh BCTC về chính sách hàng tồn kho (Đoạn 30)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Thuyết minh tổng số dư tồn kho cuối kỳ.",
    newRule: "[Căn cứ: Đoạn 30 VAS 02] Bắt buộc thuyết minh: Các chính sách kế toán áp dụng; phương pháp tính giá trị xuất kho; cơ cấu hàng tồn kho (vật tư, chi phí dở dang, thành phẩm đá); số dự phòng giảm giá đã trích lập và hoàn nhập.",
    impactNote: "Thuyết minh chi tiết chi phí sản xuất kinh doanh dở dang các dự án cao tốc khẳng định quy mô hoạt động mạnh mẽ của Kiểu Việt."
  },
  {
    topic: "Kiểm kê định kỳ và xử lý thừa, thiếu hàng tồn kho",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Xử lý thừa thiếu hàng tồn kho bù trừ tự do.",
    newRule: "[Căn cứ: Đoạn 12 VAS 02] Cấm bù trừ tự ý giữa thừa và thiếu hàng tồn kho; phải lập Biên bản kiểm kê xác định rõ trách nhiệm cá nhân thủ kho và hạch toán riêng biệt số thừa (TK 3381) và số thiếu (TK 1381).",
    impactNote: "Thắt chặt kỷ luật kho bãi tại các kho vật tư trung tâm và lán trại hiện trường của Kiểu Việt."
  },
  {
    topic: "Hạch toán bao bì luân chuyển và công cụ dụng cụ tại công trường",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Cốp pha, giàn giáo hạch toán thẳng vào chi phí xây lắp một lần.",
    newRule: "[Căn cứ: Đoạn 09 VAS 02] Cốp pha thép, giàn giáo thi công có giá trị lớn và sử dụng nhiều lần phải hạch toán vào TK 153 và phân bổ dần qua TK 242 theo số lần luân chuyển thực tế.",
    impactNote: "Kiểu Việt phân bổ chuẩn xác chi phí cốp pha trượt thi công mố trụ cầu qua 10-15 đốt đúc, không dồn chi phí vào đốt đầu tiên."
  }
];

// vas-14: 10 points
g1['vas-14'].items = [
  {
    topic: "5 điều kiện ghi nhận doanh thu bán thành phẩm đá, cát khai thác (Đoạn 10)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Ghi nhận doanh thu khi ký biên bản giao hàng hoặc thu tiền.",
    newRule: "[Căn cứ: Đoạn 10 VAS 14] Doanh thu bán hàng chỉ được ghi nhận khi thỏa mãn đồng thời 5 điều kiện: Chuyển giao phần lớn rủi ro và lợi ích; không còn nắm giữ quyền quản lý; doanh thu xác định tương đối chắc chắn; chắc chắn thu được lợi ích kinh tế; xác định được chi phí liên quan.",
    impactNote: "Kiểu Việt chỉ xuất hóa đơn và ghi nhận doanh thu bán đá hộc, đá base khi xe hàng đã cân tại bàn cân điện tử và khách hàng ký phiếu giao nhận."
  },
  {
    topic: "4 điều kiện ghi nhận doanh thu cung cấp dịch vụ thi công xây lắp (Đoạn 16)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Ghi nhận doanh thu dịch vụ theo phương pháp thỏa thuận giữa hai bên.",
    newRule: "[Căn cứ: Đoạn 16 VAS 14] Doanh thu dịch vụ được ghi nhận khi: Doanh thu xác định tương đối chắc chắn; chắc chắn thu được lợi ích kinh tế; xác định được phần công việc đã hoàn thành tại ngày lập BCTC; xác định được chi phí phát sinh cho giao dịch.",
    impactNote: "Là nền tảng pháp lý để Kiểu Việt ghi nhận doanh thu xây lắp theo từng giai đoạn nghiệm thu hoàn thành Mẫu 03a."
  },
  {
    topic: "Xác định phần công việc đã hoàn thành của dịch vụ xây dựng (Đoạn 19)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Đánh giá theo ước tính chủ quan của ban giám đốc.",
    newRule: "[Căn cứ: Đoạn 19 VAS 14] Phần công việc đã hoàn thành được xác định theo 1 trong 3 phương pháp: Đánh giá phần công việc đã hoàn thành; so sánh tỷ lệ giữa chi phí đã phát sinh với tổng chi phí ước tính; tỷ lệ giữa khối lượng đã hoàn thành với tổng khối lượng công việc.",
    impactNote: "Kiểu Việt áp dụng phương pháp Đánh giá khối lượng hoàn thành thực tế được Tư vấn giám sát nghiệm thu tại hiện trường."
  },
  {
    topic: "Ghi nhận Doanh thu hoạt động tài chính (Đoạn 24-27)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Tiền lãi tiền gửi ghi nhận khi ngân hàng báo Có tiền về.",
    newRule: "[Căn cứ: Đoạn 24-27 VAS 14] Doanh thu tiền lãi, cổ tức và lợi nhuận được chia được ghi nhận trên cơ sở dồn tích theo thời gian và lãi suất thực tế của hợp đồng tiền gửi có kỳ hạn.",
    impactNote: "Kiểu Việt trích trước khoản lãi tiền gửi có kỳ hạn chưa đến ngày đáo hạn tại ngân hàng vào Doanh thu tài chính (TK 515) đúng niên độ kế toán."
  },
  {
    topic: "Xác định các khoản giảm trừ doanh thu (Đoạn 04-06)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Giảm trừ doanh thu thực hiện tự do không cần biên bản điều chỉnh.",
    newRule: "[Căn cứ: Đoạn 04-06 VAS 14] Chiết khấu thương mại, giảm giá hàng bán và hàng bán bị trả lại phải có văn bản thỏa thuận, biên bản xác nhận lỗi kỹ thuật và hóa đơn điều chỉnh theo đúng quy định hóa đơn chứng từ.",
    impactNote: "Bảo đảm các khoản giảm trừ doanh thu do phạt chậm tiến độ hoặc khấu trừ chất lượng của Kiểu Việt có đầy đủ hồ sơ pháp lý thuế."
  },
  {
    topic: "Ghi nhận Thu nhập khác từ thanh lý tài sản và bồi thường thiệt hại (Đoạn 30)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Thu nhập thanh lý tài sản được bù trừ trực tiếp vào giá vốn.",
    newRule: "[Căn cứ: Đoạn 30 VAS 14] Thu nhập từ thanh lý, nhượng bán TSCĐ và tiền bồi thường do đối tác vi phạm hợp đồng phải được hạch toán tách biệt vào Thu nhập khác (TK 711), chi phí thanh lý vào Chi phí khác (TK 811).",
    impactNote: "Minh bạch hóa các khoản thu từ nhượng bán xe máy thi công cũ và bồi thường giải phóng mặt bằng của Kiểu Việt."
  },
  {
    topic: "Không ghi nhận doanh thu khi lợi ích kinh tế không chắc chắn thu hồi",
    type: "added",
    oldRule: "[Căn cứ: QĐ 167/2000] Bắt buộc ghi nhận doanh thu ngay khi xuất hóa đơn bất kể khách hàng có nguy cơ phá sản.",
    newRule: "[Căn cứ: Đoạn 18 VAS 14] Khi việc thu hồi một khoản tiền đã tính trong doanh thu không còn chắc chắn (khách hàng phá sản, tranh chấp hợp đồng), thì khoản chưa thu được đó phải ghi nhận vào chi phí trong kỳ (trích dự phòng nợ khó đòi), không được điều chỉnh giảm doanh thu đã ghi nhận.",
    impactNote: "Kiểu Việt trích lập chi phí dự phòng nợ khó đòi đúng chuẩn mực thay vì hủy doanh thu sai quy định."
  },
  {
    topic: "Doanh thu trao đổi hàng hóa, dịch vụ không tương tự",
    type: "added",
    oldRule: "[Căn cứ: QĐ 167/2000] Trao đổi hàng hóa tính theo giá thỏa thuận nội bộ.",
    newRule: "[Căn cứ: Đoạn 08-09 VAS 14] Khi hàng hóa hoặc dịch vụ được trao đổi để lấy hàng hóa hoặc dịch vụ không tương tự (dùng đá xây dựng đổi lấy xăng dầu), doanh thu được xác định theo Giá trị hợp lý của hàng hóa dịch vụ nhận về.",
    impactNote: "Kiểu Việt hạch toán đúng giá trị thị trường các giao dịch đối ứng vật tư với các nhà cung ứng xăng dầu."
  },
  {
    topic: "Trình bày Thuyết minh BCTC về cơ cấu doanh thu theo từng mảng kinh doanh",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Thuyết minh doanh thu gộp chung toàn công ty.",
    newRule: "[Căn cứ: Đoạn 33 VAS 14] Bắt buộc thuyết minh chi tiết doanh thu theo từng loại hoạt động: Doanh thu hợp đồng xây lắp, doanh thu bán khoáng sản đá cát, doanh thu cho thuê máy móc và doanh thu hoạt động tài chính.",
    impactNote: "BCTC Kiểu Việt thể hiện rõ tỷ trọng đóng góp của mảng xây lắp công trình (70%) và khai thác khoáng sản (30%)."
  },
  {
    topic: "Thời điểm ghi nhận doanh thu đối với hợp đồng xây dựng có điều khoản giữ lại bảo hành",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 167/2000] Nhiều quan điểm cho rằng phải trừ khoản 5% giữ lại bảo hành ra khỏi doanh thu.",
    newRule: "[Căn cứ: Đoạn 21 VAS 14] Doanh thu được ghi nhận trên 100% giá trị khối lượng nghiệm thu hoàn thành; khoản 5% giữ lại bảo hành là một khoản nợ phải thu của khách hàng (TK 131), không được trừ lùi doanh thu.",
    impactNote: "Bảo đảm Kiểu Việt phản ánh trọn vẹn 100% quy mô doanh thu hợp đồng xây dựng ngay trong năm hoàn thành nghiệm thu bàn giao."
  }
];

// Write updated group 1 back to file
const outputCode = `import { DecreeDiffData } from '../diff-types';\n\nexport const group1Accounting: Record<string, DecreeDiffData> = ` + JSON.stringify(g1, null, 2) + `;\n`;
fs.writeFileSync(g1Path, outputCode, 'utf8');
console.log('Group 1 fully expanded! Decrees count:', Object.keys(g1).length);
