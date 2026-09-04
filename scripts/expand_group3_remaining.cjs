const fs = require('fs');
const path = require('path');

const g3Path = path.join(__dirname, '..', 'src', 'data', 'diffs', 'group3_corporate_personal_tax.ts');
const raw = fs.readFileSync(g3Path, 'utf8');
const jsonStr = raw.replace(/import[^;]+;/, '').replace(/export const \w+[^=]+=/, '').replace(/;\s*$/, '');
const g3 = eval('(' + jsonStr + ')');

// 1. luat-67-2025-tndn (15 items)
g3['luat-67-2025-tndn'].items = [
  {
    topic: "Áp dụng cơ chế Thuế tối thiểu toàn cầu (Pillar 2) tỷ lệ 15% (Điều 7)",
    type: "added",
    oldRule: "[Căn cứ: Luật Thuế TNDN 2008] Doanh nghiệp hưởng thuế suất ưu đãi đặc biệt 5%, 10% trong thời gian 15-30 năm và miễn thuế 4 năm, giảm 50% trong 9 năm tiếp theo.",
    newRule: "[Căn cứ: Điều 7 Luật 67/2025] Bổ sung quy định Thuế thu nhập doanh nghiệp bổ sung tối thiểu nội địa đạt chuẩn (QDMTT) với thuế suất tối thiểu 15% áp dụng cho các tập đoàn đa quốc gia có doanh thu hợp nhất từ 750 triệu EUR trở lên.",
    impactNote: "Kiểu Việt đánh giá vị thế khi liên danh tổng thầu với các tập đoàn FDI lớn (như Hyundai E&C, Lotte E&C), bảo đảm cơ chế tính giá thầu không bị ảnh hưởng bởi nghĩa vụ bù thuế 15%."
  },
  {
    topic: "Siết chặt điều kiện thanh toán không dùng tiền mặt từ 5 triệu đồng (Điều 9 Khoản 1 Điểm b)",
    type: "modified",
    oldRule: "[Căn cứ: Khoản 1 Điều 9 Luật 14/2008 & TT 96/2015] Hóa đơn mua hàng hóa, dịch vụ từng lần có giá trị từ 20.000.000 đồng trở lên (đã bao gồm thuế GTGT) bắt buộc phải có chứng từ thanh toán không dùng tiền mặt.",
    newRule: "[Căn cứ: Điều 9 Khoản 1 Điểm b Luật 67/2025] Hạ ngưỡng thanh toán bắt buộc không dùng tiền mặt xuống còn 5.000.000 đồng (đã gồm VAT) đối với mọi khoản chi phí mua hàng hóa, dịch vụ; thanh toán tiền mặt từ 5 triệu trở lên bị loại 100% chi phí được trừ.",
    impactNote: "Kế toán Kiểu Việt chỉ đạo các Đội trưởng công trường: Mọi khoản mua cát, đá dăm, vật tư phụ, sửa chữa máy móc từ 5 triệu đồng trở lên bắt buộc phải chuyển khoản qua tài khoản ngân hàng của Công ty Kiểu Việt."
  },
  {
    topic: "Khống chế trần chi phí quảng cáo, tiếp khách, khánh thành công trình (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008 & Luật 71/2014] Đã bãi bỏ mức khống chế 15% chi phí quảng cáo, tiếp tân, khánh thành từ năm 2015.",
    newRule: "[Căn cứ: Điều 9 Luật 67/2025] Tiếp tục cho phép trừ 100% chi phí tiếp khách, hội nghị khách hàng, lễ khởi công, thông xe công trình thực tế phát sinh liên quan đến hoạt động SXKD có đủ hóa đơn hợp pháp và chứng từ thanh toán qua ngân hàng.",
    impactNote: "Kiểu Việt lập đầy đủ Kế hoạch tổ chức Lễ thông xe gói thầu cao tốc và hóa đơn thuê âm thanh, nhà bạt có thanh toán ủy nhiệm chi để bảo vệ 100% chi phí thuế."
  },
  {
    topic: "Ưu đãi thuế TNDN cho dự án đầu tư xây dựng hạ tầng giao thông và mỏ vật liệu xanh (Điều 13)",
    type: "added",
    oldRule: "[Căn cứ: Luật 14/2008] Ưu đãi thuế chỉ tập trung vào công nghệ cao, phần mềm và địa bàn kinh tế xã hội đặc biệt khó khăn.",
    newRule: "[Căn cứ: Điều 13 Luật 67/2025] Bổ sung ưu đãi thuế suất 10% trong 15 năm, miễn thuế 4 năm và giảm 50% trong 9 năm tiếp theo đối với dự án đầu tư công trình hạ tầng giao thông trọng điểm quốc gia và dự án chế biến khoáng sản cát nghiền nhân tạo thay thế cát tự nhiên.",
    impactNote: "Dự án đầu tư dây chuyền sản xuất cát nghiền nhân tạo từ đá mỏ của Kiểu Việt tại Gia Lai được hưởng ưu đãi thuế TNDN 10%, tiết kiệm hàng chục tỷ đồng tiền thuế."
  },
  {
    topic: "Bù trừ lỗ giữa chuyển nhượng bất động sản và hoạt động sản xuất kinh doanh xây lắp (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008 & Luật 71/2014] Lỗ từ chuyển nhượng bất động sản, chuyển nhượng dự án chỉ được bù trừ với lãi của chuyển nhượng BĐS, không được bù trừ với lãi của hoạt động sản xuất kinh doanh thông thường.",
    newRule: "[Căn cứ: Điều 7 Luật 67/2025] Cho phép bù trừ hai chiều: Doanh nghiệp được bù trừ số lỗ từ hoạt động chuyển nhượng dự án, chuyển nhượng quyền khai thác khoáng sản với số lãi từ hoạt động thi công xây lắp và ngược lại.",
    impactNote: "Kiểu Việt tận dụng khoản lỗ chi phí đầu tư ban đầu của mỏ khoáng sản mới để bù trừ giảm trực tiếp số thuế TNDN phải nộp từ doanh thu xây lắp cao tốc."
  },
  {
    topic: "Chi phí tài trợ giáo dục, y tế, xây dựng nhà tình nghĩa cho đồng bào nghèo (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Chỉ cho phép trừ chi phí tài trợ giáo dục, y tế theo danh mục hẹp.",
    newRule: "[Căn cứ: Điều 9 Luật 67/2025] Mở rộng chi phí tài trợ hợp lý: Tài trợ làm đường giao thông nông thôn, cầu dân sinh, nhà đại đoàn kết tại các địa bàn khó khăn được tính 100% vào chi phí được trừ khi có biên bản giao nhận tài trợ theo mẫu của Bộ Tài chính.",
    impactNote: "Các hoạt động từ thiện làm đường nông thôn cho bà con vùng sâu tỉnh Gia Lai của Kiểu Việt được tính hợp pháp vào chi phí giảm thuế TNDN."
  },
  {
    topic: "Quy định trích lập Quỹ Phát triển Khoa học & Công nghệ tối đa 10% thu nhập tính thuế (Điều 17)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Trích tối đa 10% thu nhập tính thuế nhưng thủ tục giải ngân quỹ rất phức tạp.",
    newRule: "[Căn cứ: Điều 17 Luật 67/2025] Cho phép Kiểu Việt trích lập tối đa 10% thu nhập chịu thuế TNDN hàng năm vào Quỹ KH&CN; quỹ được dùng để mua sắm công nghệ đầm nén thông minh, hệ thống định vị vệ tinh máy ủi và phần mềm mô phỏng BIM.",
    impactNote: "Kiểu Việt giữ lại tới 10% lợi nhuận trước thuế tái đầu tư đổi mới công nghệ thi công mà không phải nộp thuế TNDN ngay."
  },
  {
    topic: "Thời gian chuyển lỗ tối đa liên tục 05 năm (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Chuyển lỗ liên tục không quá 5 năm kể từ năm tiếp sau năm phát sinh lỗ.",
    newRule: "[Căn cứ: Điều 7 Luật 67/2025] Giữ nguyên thời hạn chuyển lỗ tối đa 05 năm liên tục; quy định rõ phương pháp chuyển lỗ toàn bộ và liên tục vào thu nhập chịu thuế của các năm sau theo từng dự án độc lập.",
    impactNote: "Kiểu Việt phân bổ số lỗ của các năm mùa mưa kéo dài sang các năm khô ráo thi công thần tốc để tối ưu hóa nghĩa vụ thuế."
  },
  {
    topic: "Chi phí lãi vay đối với vốn điều lệ còn thiếu (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: TT 96/2015] Không được trừ chi phí lãi vay tương ứng với phần vốn điều lệ đã đăng ký còn thiếu.",
    newRule: "[Căn cứ: Điều 9 Luật 67/2025] Khẳng định nghiêm cấm tính vào chi phí được trừ đối với phần chi phí trả lãi tiền vay tương ứng với phần vốn điều lệ đã đăng ký còn thiếu theo tiến độ góp vốn ghi trong Điều lệ công ty.",
    impactNote: "Các cổ đông Kiểu Việt luôn hoàn thành góp đủ 100% vốn điều lệ đã đăng ký đúng hạn, bảo đảm toàn bộ lãi vay ngân hàng phục vụ công trình được trừ thuế."
  },
  {
    topic: "Thuế suất thuế TNDN đối với hoạt động khai thác khoáng sản vật liệu xây dựng (Điều 10)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Thuế suất khai thác khoáng sản áp dụng từ 32% đến 50%.",
    newRule: "[Căn cứ: Điều 10 Luật 67/2025] Thuế suất thuế TNDN đối với khai thác dầu khí từ 25% - 50%; khai thác khoáng sản vật liệu xây dựng thông thường (đá, cát, đất đắp) của các nhà thầu hạ tầng áp dụng thuế suất phổ thông 20%.",
    impactNote: "Xác nhận rõ ràng Kiểu Việt khai thác mỏ đất phục vụ cao tốc chỉ chịu thuế suất TNDN 20%, không bị áp mức thuế suất khoáng sản quý hiếm 32-50%."
  },
  {
    topic: "Chi phí trang phục cho người lao động bằng tiền và hiện vật (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: TT 96/2015] Chi tiền trang phục khống chế không quá 5.000.000 đồng/người/năm; chi bằng hiện vật không khống chế.",
    newRule: "[Căn cứ: Điều 9 Luật 67/2025] Nâng mức chi trang phục bằng tiền mặt lên tối đa 7.000.000 đồng/người/năm; chi mua sắm bảo hộ lao động hiện trường (áo phản quang, mũ bảo hộ, giày mũi sắt) bằng hiện vật được trừ 100% theo thực tế.",
    impactNote: "Kiểu Việt trang cấp đầy đủ bảo hộ lao động đạt chuẩn cho hàng trăm công nhân trên tuyến cao tốc và hạch toán trọn vẹn vào chi phí thuế."
  },
  {
    topic: "Thuế TNDN từ chuyển nhượng quyền khai thác khoáng sản và quyền thuê đất (Điều 14)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Kê khai chung trong tờ khai quyết toán năm.",
    newRule: "[Căn cứ: Điều 14 Luật 67/2025] Bắt buộc kê khai và nộp thuế TNDN riêng theo từng lần phát sinh chuyển nhượng quyền thăm dò, khai thác mỏ khoáng sản với thuế suất 20% trên thu nhập chịu thuế.",
    impactNote: "Kiểu Việt hạch toán riêng biệt khi chuyển nhượng cổ phần hoặc hợp tác chuyển giao mỏ vật liệu, bảo đảm tính minh bạch nghĩa vụ thuế."
  },
  {
    topic: "Điều kiện xác định chi phí khấu hao TSCĐ có chứng từ thanh toán ngân hàng (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: Luật 14/2008] Khấu hao tính theo sổ sách TSCĐ.",
    newRule: "[Căn cứ: Điều 9 Luật 67/2025] Máy móc thiết bị mua sắm có giá trị từ 5 triệu đồng trở lên bắt buộc phải có chứng từ thanh toán không dùng tiền mặt mới đủ điều kiện trích khấu hao tính vào chi phí được trừ khi xác định thuế TNDN.",
    impactNote: "Kiểu Việt chuyển khoản 100% tiền mua sắm linh kiện máy đào, đầu kéo, tuyệt đối không trả tiền mặt để bảo vệ chi phí khấu hao."
  },
  {
    topic: "Quy định về thuế TNDN đối với doanh nghiệp xây dựng có cơ sở phụ thuộc ngoại tỉnh (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Nộp thuế tập trung tại trụ sở chính.",
    newRule: "[Căn cứ: Điều 12 Luật 67/2025] Doanh nghiệp có các chi nhánh, xí nghiệp thi công hoặc mỏ khoáng sản phụ thuộc tại các tỉnh khác bắt buộc phải phân bổ số thuế TNDN tạm nộp và quyết toán cho từng địa phương theo tỷ lệ luật định.",
    impactNote: "Kiểu Việt phân bổ chuẩn xác tiền thuế TNDN cho ngân sách các tỉnh Tây Nguyên nơi công ty đóng quân thi công dự án."
  },
  {
    topic: "Hiệu lực thi hành Luật Thuế thu nhập doanh nghiệp số 67/2025/QH15",
    type: "added",
    oldRule: "[Căn cứ: Luật 14/2008] Luật Thuế TNDN cũ.",
    newRule: "[Căn cứ: Điều 20 Luật 67/2025] Luật có hiệu lực thi hành từ ngày 01/01/2026; các quy định về chuẩn hóa chi phí không dùng tiền mặt 5 triệu áp dụng từ kỳ tính thuế năm 2026.",
    impactNote: "Kiểu Việt chuẩn bị toàn diện quy chế tài chính đón đầu Luật Thuế TNDN mới, bảo đảm an toàn tối đa cho ngân sách doanh nghiệp."
  }
];

// 2. luat-109-2025-tncn (12 items)
g3['luat-109-2025-tncn'].items = [
  {
    topic: "Nâng mức giảm trừ gia cảnh bản thân lên 15.5 triệu đồng và người phụ thuộc 6.2 triệu đồng (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NQ 954/2020] Giảm trừ gia cảnh cho bản thân người nộp thuế là 11.000.000 đồng/tháng (132 triệu/năm); mức giảm trừ cho mỗi người phụ thuộc là 4.400.000 đồng/tháng.",
    newRule: "[Căn cứ: Điều 1 Luật 109/2025] Nâng mức giảm trừ gia cảnh cho bản thân lên 15.500.000 đồng/tháng (186 triệu/năm); mức giảm trừ cho mỗi người phụ thuộc lên 6.200.000 đồng/tháng (74.4 triệu/năm).",
    impactNote: "Hơn 90% kỹ sư, công nhân lái máy thi công Kiểu Việt có mức lương 15-20 triệu đồng sẽ không phải nộp thuế TNCN hoặc giảm số thuế phải nộp tới 60%, nâng cao thu nhập thực nhận."
  },
  {
    topic: "Rút gọn biểu thuế lũy tiến từng phần từ 7 bậc xuống còn 5 bậc (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 04/2007] Biểu thuế lũy tiến gồm 7 bậc quá dày: 5%, 10%, 15%, 20%, 25%, 30%, 35% (bậc 1 chỉ đến 5 triệu, bậc 2 từ 5-10 triệu).",
    newRule: "[Căn cứ: Điều 3 Luật 109/2025] Tinh giản biểu thuế còn 5 bậc: Bậc 1 (đến 10 triệu: 5%), Bậc 2 (10 - 30 triệu: 10%), Bậc 3 (30 - 60 triệu: 20%), Bậc 4 (60 - 100 triệu: 28%), Bậc 5 (trên 100 triệu: 35%).",
    impactNote: "Kế toán tiền lương Kiểu Việt giảm bớt tính toán phức tạp, bậc thuế giãn cách rộng giúp các Chỉ huy trưởng công trường giữ được thu nhập cao sau thuế."
  },
  {
    topic: "Miễn thuế TNCN đối với phụ cấp làm việc tại công trường vùng sâu, vùng xa (Điều 2)",
    type: "added",
    oldRule: "[Căn cứ: TT 111/2013] Phụ cấp thu hút, phụ cấp khu vực chỉ được miễn thuế theo định mức hạn chế của Nhà nước.",
    newRule: "[Căn cứ: Điều 2 Luật 109/2025] Miễn thuế TNCN toàn bộ đối với các khoản phụ cấp lưu động, phụ cấp ăn ở dã ngoại tại hiện trường công trình giao thông vùng đặc biệt khó khăn, hải đảo.",
    impactNote: "Kiểu Việt mạnh dạn chi trả phụ cấp công trường cao (3-5 triệu/tháng) cho cán bộ bám trụ tuyến cao tốc mà người lao động không bị trừ thuế TNCN."
  },
  {
    topic: "Quy định về thuế TNCN đối với nhân công thuê khoán thời vụ dưới 3 tháng (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: TT 111/2013] Chi trả thu nhập từ 2.000.000 đồng/lần trở lên bắt buộc phải khấu trừ 10% thuế TNCN trừ khi có cam kết Mẫu 08/CK-TNCN.",
    newRule: "[Căn cứ: Điều 4 Luật 109/2025] Nâng ngưỡng bắt buộc khấu trừ thuế lên 3.000.000 đồng/lần chi trả; cho phép người lao động có duy nhất một nguồn thu nhập ký cam kết điện tử tích hợp trên cổng VNeID.",
    impactNote: "Kiểu Việt giải quyết chế độ chi trả tiền công thuê khoán hàng ngày cho nhân công đào đất, đổ bê tông địa phương nhanh gọn, hợp lệ."
  },
  {
    topic: "Miễn thuế TNCN cho tiền làm thêm giờ, làm ca đêm công trình (Điều 2)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 04/2007] Phần tiền lương trả cao hơn do làm thêm giờ được miễn thuế.",
    newRule: "[Căn cứ: Điều 2 Luật 109/2025] Khẳng định: Toàn bộ phần chênh lệch tiền lương trả cao hơn do làm thêm giờ, làm ca đêm (hệ số 150%, 200%, 300%) được miễn thuế TNCN 100%; tiền ăn ca đêm không tính vào thu nhập chịu thuế.",
    impactNote: "Khuyến khích công nhân Kiểu Việt hăng hái thi công xuyên đêm '3 ca 4 kíp' đẩy nhanh tiến độ dự án mà vẫn tối ưu hóa quyền lợi tài chính."
  },
  {
    topic: "Tự động xác thực người phụ thuộc qua Cơ sở dữ liệu quốc gia về dân cư (Điều 5)",
    type: "added",
    oldRule: "[Căn cứ: TT 111/2013] Nộp hồ sơ giấy chứng minh người phụ thuộc (giấy khai sinh, xác nhận của UBND xã).",
    newRule: "[Căn cứ: Điều 5 Luật 109/2025] Bãi bỏ toàn bộ hồ sơ giấy chứng minh người phụ thuộc; hệ thống thuế tự động xác thực mối quan hệ nhân thân (con cái, bố mẹ già) qua số định danh cá nhân CCCD gắn chip trên VNeID.",
    impactNote: "Phòng Nhân sự Kiểu Việt đăng ký người phụ thuộc cho cán bộ nhân viên chỉ mất 30 giây qua cổng dịch vụ công trực tuyến."
  },
  {
    topic: "Khấu trừ chi phí đóng bảo hiểm hưu trí tự nguyện và bảo hiểm y tế bổ sung (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: TT 111/2013] Mức đóng bảo hiểm hưu trí tự nguyện được trừ tối đa 1.000.000 đồng/tháng.",
    newRule: "[Căn cứ: Điều 6 Luật 109/2025] Nâng mức khấu trừ vào thu nhập chịu thuế tối đa lên 3.000.000 đồng/tháng (36 triệu/năm) cho các khoản bảo hiểm hưu trí tự nguyện doanh nghiệp mua cho người lao động.",
    impactNote: "Kiểu Việt mua các gói bảo hiểm hưu trí tích lũy cho đội ngũ quản lý cấp cao vừa giữ chân nhân tài vừa tối ưu thuế cho người lao động."
  },
  {
    topic: "Quy định về ủy quyền quyết toán thuế TNCN điện tử (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: TT 111/2013] Người lao động phải ký bản cam kết ủy quyền quyết toán Mẫu 08 bằng giấy.",
    newRule: "[Căn cứ: Điều 7 Luật 109/2025] Cho phép người lao động thực hiện ủy quyền quyết toán thuế TNCN cho doanh nghiệp trực tiếp qua ứng dụng eTax Mobile hoặc xác thực trên phần mềm HRM nội bộ.",
    impactNote: "100% cán bộ nhân viên Kiểu Việt ủy quyền quyết toán thuế online, không còn phải thu thập hàng trăm tờ giấy ký tay cuối năm."
  },
  {
    topic: "Kéo dài thời hạn nộp hồ sơ quyết toán thuế TNCN cho cá nhân đến 30/04 (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Hạn cuối nộp hồ sơ là 31/03.",
    newRule: "[Căn cứ: Điều 8 Luật 109/2025] Khẳng định thời hạn nộp hồ sơ quyết toán thuế TNCN trực tiếp của cá nhân là ngày 30/04 hàng năm; không bị xử phạt chậm nộp nếu có số thuế nộp thừa đề nghị hoàn.",
    impactNote: "Bảo đảm người lao động Kiểu Việt có đủ thời gian chuẩn bị chứng từ khấu trừ thuế nếu có thu nhập vãng lai ở nhiều nơi."
  },
  {
    topic: "Chi phí tiền nhà ở tại công trường do doanh nghiệp chi trả (Điều 2)",
    type: "modified",
    oldRule: "[Căn cứ: TT 111/2013] Tiền nhà ở tính vào thu nhập chịu thuế tối đa không quá 15% tổng thu nhập chịu thuế.",
    newRule: "[Căn cứ: Điều 2 Luật 109/2025] Khoản tiền thuê nhà, xây dựng lán trại tại hiện trường công trình xây dựng cho người lao động di chuyển theo công trình được miễn tính vào thu nhập chịu thuế TNCN.",
    impactNote: "Kiểu Việt đầu tư xây dựng khu nhà container điều hòa khang trang cho cán bộ kỹ sư tại công trường mà không làm tăng tiền thuế TNCN của anh em."
  },
  {
    topic: "Quy định về hoàn thuế TNCN tự động vào tài khoản ngân hàng (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Thủ tục hoàn thuế TNCN kéo dài hàng tháng.",
    newRule: "[Căn cứ: Điều 9 Luật 109/2025] Cơ quan thuế thực hiện hoàn thuế TNCN nộp thừa tự động vào tài khoản ngân hàng chính chủ của người nộp thuế trong vòng 03 ngày làm việc kể từ ngày nhận được hồ sơ quyết toán hợp lệ.",
    impactNote: "Cán bộ công nhân viên Kiểu Việt nhận tiền hoàn thuế nhanh chóng vào tài khoản ATM cá nhân."
  },
  {
    topic: "Hiệu lực thi hành Luật Thuế thu nhập cá nhân số 109/2025/QH15",
    type: "added",
    oldRule: "[Căn cứ: Luật 04/2007, NQ 954/2020] Các quy định cũ.",
    newRule: "[Căn cứ: Điều 10 Luật 109/2025] Luật có hiệu lực thi hành từ ngày 01/01/2026; mức giảm trừ gia cảnh mới 15.5 triệu/tháng áp dụng ngay từ kỳ tính thuế tháng 01/2026.",
    impactNote: "Phòng Nhân sự và Kế toán Kiểu Việt đã sẵn sàng biểu tính thuế mới, nâng cao đời sống và tinh thần làm việc của toàn thể người lao động."
  }
];

// 3. luat-thue-tndn (12 items)
g3['luat-thue-tndn'].items = [
  {
    topic: "Hạ mức thuế suất thuế Thu nhập doanh nghiệp phổ thông từ 28% xuống 20% (Điều 10)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 09/2003] Thuế suất thuế TNDN phổ thông ở mức rất cao là 28%.",
    newRule: "[Căn cứ: Điều 10 Luật 14/2008 & Luật 32/2013] Hạ thuế suất thuế TNDN phổ thông từ 28% xuống 25% (từ 2009) và tiếp tục hạ xuống 20% (từ 01/01/2016 đến nay).",
    impactNote: "Kiểu Việt tiết kiệm 8% lợi nhuận trước thuế mỗi năm so với thời kỳ áp dụng thuế 28%, giữ lại hàng chục tỷ đồng để tái đầu tư trang thiết bị xe máy."
  },
  {
    topic: "Bãi bỏ hoàn toàn quy định khống chế trần chi phí quảng cáo, tiếp thị 15% (Điều 9)",
    type: "removed",
    oldRule: "[Căn cứ: Luật 09/2003 & Luật 14/2008] Khống chế chi phí quảng cáo, tiếp thị, khuyến mại, tiếp khách tối đa không quá 10% (sau đó là 15%) tổng số chi phí được trừ.",
    newRule: "[Căn cứ: Luật số 71/2014/QH13 sửa đổi Điều 9 Luật 14/2008] Bãi bỏ hoàn toàn mức khống chế trần 15% chi phí quảng cáo, tiếp tân, khánh tiết. Mọi chi phí tiếp khách, hội nghị khách hàng có hóa đơn, chứng từ hợp pháp đều được tính vào chi phí được trừ.",
    impactNote: "Kế toán Kiểu Việt được tính trọn vẹn chi phí tiếp khách, tổ chức lễ khởi công, khánh thành công trình vào chi phí hợp lý mà không lo bị vượt trần."
  },
  {
    topic: "Quy định điều kiện thanh toán không dùng tiền mặt đối với hóa đơn từ 20 triệu đồng (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: Luật 09/2003] Cho phép thanh toán tiền mặt đối với mọi giá trị hóa đơn nếu có Phiếu chi có đầy đủ chữ ký.",
    newRule: "[Căn cứ: Khoản 1 Điều 9 Luật 14/2008 & Luật 32/2013] Đối với hóa đơn mua hàng hóa, dịch vụ từng lần có giá trị từ 20 triệu đồng trở lên (đã bao gồm thuế GTGT) bắt buộc phải có chứng từ thanh toán không dùng tiền mặt (Ủy nhiệm chi qua ngân hàng).",
    impactNote: "Cảnh báo sống còn: 100% hóa đơn mua xi măng, sắt thép, xăng dầu trên 20 triệu của Kiểu Việt phải chuyển khoản từ tài khoản công ty, tuyệt đối cấm chi tiền mặt."
  },
  {
    topic: "Quy định trích lập Quỹ phát triển khoa học và công nghệ tối đa 10% thu nhập tính thuế (Điều 17)",
    type: "added",
    oldRule: "[Căn cứ: Luật 09/2003] Chưa có cơ chế cho phép doanh nghiệp trích trước lợi nhuận trước thuế để lập quỹ nghiên cứu khoa học.",
    newRule: "[Căn cứ: Điều 17 Luật 14/2008] Doanh nghiệp được trích tối đa 10% thu nhập tính thuế hàng năm để lập Quỹ phát triển khoa học và công nghệ của doanh nghiệp, khoản trích này được tính vào chi phí được trừ khi tính thuế TNDN.",
    impactNote: "Kiểu Việt trích lập quỹ để nghiên cứu công nghệ bê tông đầm lăn và xử lý phụ gia đá mỏ nâng cao chất lượng nền đường cao tốc."
  },
  {
    topic: "Nguyên tắc xác định chi phí khấu hao tài sản cố định hợp lý (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 09/2003] Khấu hao theo quy định nội bộ của doanh nghiệp.",
    newRule: "[Căn cứ: Điều 9 Luật 14/2008] Tài sản cố định phải sử dụng phục vụ cho hoạt động SXKD, có hóa đơn chứng từ hợp pháp và trích khấu hao theo đúng khung quy định của Bộ Tài chính mới được tính vào chi phí được trừ.",
    impactNote: "Kiểu Việt kiểm soát chặt chẽ hồ sơ trích khấu hao dàn xe ben Howo và trạm nghiền đá theo Thông tư 45/2013 của Bộ Tài chính."
  },
  {
    topic: "Thời hạn chuyển lỗ liên tục tối đa không quá 05 năm (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 09/2003] Thời gian chuyển lỗ tối đa 3-5 năm tùy từng ngành nghề.",
    newRule: "[Căn cứ: Điều 7 Luật 14/2008] Quy định thống nhất: Doanh nghiệp bị lỗ được chuyển lỗ sang các năm sau; số lỗ này được trừ vào thu nhập tính thuế; thời gian chuyển lỗ không quá 05 năm kể từ năm tiếp sau năm phát sinh lỗ.",
    impactNote: "Kiểu Việt chủ động lập kế hoạch chuyển số lỗ năm đầu tư mua sắm máy móc sang các năm doanh thu nghiệm thu công trình đạt đỉnh."
  },
  {
    topic: "Chi phí tiền lương, tiền công và các khoản phụ cấp trả cho người lao động (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Quy định khống chế mức lương tối đa theo đơn giá tiền lương nhà nước.",
    newRule: "[Căn cứ: Điều 9 Luật 14/2008 & Luật 71/2014] Doanh nghiệp được tự quyết toán chi phí tiền lương, tiền thưởng theo Hợp đồng lao động, Thỏa ước LĐTT và Quy chế tài chính của công ty, miễn là có chi trả thực tế trước thời hạn nộp hồ sơ quyết toán thuế năm.",
    impactNote: "Kiểu Việt ban hành Quy chế thưởng tiến độ vượt kế hoạch cho các Đội thi công công trình và hạch toán 100% vào chi phí thuế TNDN hợp lệ."
  },
  {
    topic: "Thuế suất ưu đãi 10% trong 15 năm cho dự án hạ tầng giao thông và địa bàn khó khăn (Điều 13)",
    type: "added",
    oldRule: "[Căn cứ: Luật 09/2003] Danh mục ưu đãi hẹp và thời gian ưu đãi ngắn.",
    newRule: "[Căn cứ: Điều 13 Luật 14/2008] Áp dụng thuế suất 10% trong 15 năm, miễn thuế 4 năm và giảm 50% trong 9 năm tiếp theo đối với thu nhập của doanh nghiệp từ thực hiện dự án đầu tư mới trong lĩnh vực phát triển hạ tầng kinh tế kỹ thuật tại địa bàn có điều kiện kinh tế - xã hội đặc biệt khó khăn.",
    impactNote: "Kiểu Việt tận dụng chính sách ưu đãi khi thành lập Ban điều hành dự án và chi nhánh thi công hạ tầng tại các huyện miền núi Tây Nguyên."
  },
  {
    topic: "Tách riêng thu nhập từ chuyển nhượng bất động sản và chuyển nhượng dự án (Điều 14)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Kê khai gộp chung vào thu nhập kinh doanh thông thường.",
    newRule: "[Căn cứ: Điều 14 Luật 14/2008] Doanh nghiệp có thu nhập từ chuyển nhượng bất động sản, chuyển nhượng dự án đầu tư phải hạch toán riêng để kê khai nộp thuế TNDN theo mức thuế suất 20%, không được hưởng ưu đãi thuế TNDN của ngành nghề chính.",
    impactNote: "Kế toán Kiểu Việt mở sổ theo dõi riêng thu nhập và chi phí của hoạt động chuyển nhượng quyền thuê mặt bằng kho bãi để tránh bị phạt phân bổ sai."
  },
  {
    topic: "Khống chế trần chi phí lãi vay tương ứng với phần vốn góp còn thiếu (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Cho phép tính lãi vay vào chi phí kể cả khi chưa góp đủ vốn.",
    newRule: "[Căn cứ: Điều 9 Luật 14/2008] Không được tính vào chi phí được trừ phần chi phí trả lãi tiền vay tương ứng với phần vốn điều lệ đã đăng ký còn thiếu theo tiến độ ghi trong điều lệ doanh nghiệp.",
    impactNote: "HĐQT Kiểu Việt luôn đôn đốc cổ đông hoàn tất vốn góp trước khi ký các hợp đồng vay vốn ngân hàng thương mại tài trợ mua xe máy chuyên dùng."
  },
  {
    topic: "Các khoản tài trợ từ thiện được tính vào chi phí hợp lý (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Mọi khoản tài trợ từ thiện đều bị loại khỏi chi phí tính thuế.",
    newRule: "[Căn cứ: Điều 9 Luật 14/2008] Cho phép tính vào chi phí được trừ các khoản tài trợ cho giáo dục, y tế, khắc phục hậu quả thiên tai và xây nhà tình nghĩa cho người nghèo theo đúng quy định của pháp luật.",
    impactNote: "Kiểu Việt tài trợ sửa chữa trường học và làm cầu dân sinh tại địa phương nơi thi công, có xác nhận của chính quyền xã để được giảm trừ thuế."
  },
  {
    topic: "Nghĩa vụ tạm nộp thuế TNDN hàng quý và quyết toán năm (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Kê khai tờ khai tạm tính hàng quý theo Mẫu 01A/TNDN.",
    newRule: "[Căn cứ: Điều 12 Luật 14/2008 & Luật 71/2014] Bãi bỏ tờ khai thuế TNDN tạm tính hàng quý; doanh nghiệp tự tạm nộp số tiền thuế TNDN của quý chậm nhất vào ngày 30 của tháng đầu quý sau và quyết toán năm trước ngày 31/03 năm sau.",
    impactNote: "Giảm áp lực kê khai hàng quý cho Kế toán Kiểu Việt, chỉ cần tính toán dòng tiền tạm nộp đủ tỷ lệ luật định."
  }
];

// 4. luat-thue-gtgt (12 items)
g3['luat-thue-gtgt'].items = [
  {
    topic: "Quy định 3 mức thuế suất thuế Giá trị gia tăng: 0%, 5% và 10% (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 02/1997] Biểu thuế GTGT gồm 4 mức: 0%, 5%, 10% và 20%.",
    newRule: "[Căn cứ: Điều 8 Luật 13/2008/QH12] Bãi bỏ mức thuế suất 20%, thống nhất 3 mức thuế suất: 0% (hàng xuất khẩu), 5% (hàng hóa thiết yếu, nước sạch) và 10% (thuế suất phổ thông cho xây dựng, vận tải, thương mại).",
    impactNote: "Hoạt động thi công xây lắp và sản xuất đá mỏ của Kiểu Việt áp dụng thuế suất thuế GTGT 10% chuẩn mực."
  },
  {
    topic: "Điều kiện khấu trừ thuế GTGT đầu vào đối với hóa đơn từ 20 triệu đồng (Điều 12)",
    type: "added",
    oldRule: "[Căn cứ: Luật 02/1997] Chỉ cần có hóa đơn GTGT hợp pháp là được khấu trừ thuế đầu vào, thanh toán tiền mặt vẫn được khấu trừ.",
    newRule: "[Căn cứ: Điều 12 Khoản 2 Điểm b Luật 13/2008/QH12] Bắt buộc phải có chứng từ thanh toán không dùng tiền mặt đối với hàng hóa, dịch vụ mua vào (bao gồm cả hàng nhập khẩu) từ 20 triệu đồng trở lên.",
    impactNote: "100% chứng từ thanh toán tiền vật tư xi măng sắt thép của Kiểu Việt phải chuyển khoản qua ngân hàng, nếu thanh toán tiền mặt sẽ mất toàn bộ quyền khấu trừ thuế GTGT đầu vào."
  },
  {
    topic: "Bỏ thời hạn 6 tháng khống chế kê khai khấu trừ hóa đơn GTGT đầu vào (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 13/2008 ban đầu] Hóa đơn GTGT đầu vào phát sinh trong tháng nào thì kê khai khấu trừ trong tháng đó; trường hợp sót chỉ được kê khai bổ sung trong vòng tối đa 06 tháng.",
    newRule: "[Căn cứ: Luật số 31/2013/QH13 sửa đổi Điều 12 Luật 13/2008] Bãi bỏ thời hạn khống chế 06 tháng; doanh nghiệp phát hiện hóa đơn GTGT đầu vào bị bỏ sót được kê khai khấu trừ bổ sung bất kỳ lúc nào trước khi cơ quan thuế công bố quyết định thanh tra, kiểm tra thuế tại trụ sở.",
    impactNote: "Cứu cánh tuyệt vời cho Kiểu Việt: Hóa đơn cung cấp vật tư công trường gửi muộn nhiều tháng vẫn được kê khai khấu trừ bình thường, không bị mất tiền thuế."
  },
  {
    topic: "Thời điểm xác định thuế GTGT đối với hoạt động xây dựng, lắp đặt (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Quy định chung theo thời điểm xuất hóa đơn.",
    newRule: "[Căn cứ: Điều 8 Luật 13/2008] Thời điểm xác định thuế GTGT đối với xây dựng, lắp đặt là thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình, khối lượng xây dựng, lắp đặt hoàn thành, không phân biệt đã thu được tiền hay chưa thu được tiền.",
    impactNote: "Chỉ đạo quan trọng: Ngay khi Chủ đầu tư ký Biên bản nghiệm thu khối lượng A-B giai đoạn, Kế toán Kiểu Việt phải xuất hóa đơn GTGT ngay trong ngày, không được chờ đến khi nhận được tiền giải ngân."
  },
  {
    topic: "Quy định điều kiện áp dụng thuế suất thuế GTGT 0% cho công trình xuất khẩu ra nước ngoài (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Hàng xuất khẩu áp thuế 0%.",
    newRule: "[Căn cứ: Điều 8 Luật 13/2008 & Luật 31/2013] Hoạt động xây dựng, lắp đặt công trình ở nước ngoài hoặc tại khu phi thuế quan được áp dụng thuế suất thuế GTGT 0% nếu có Hợp đồng, Biên bản nghiệm thu và chứng từ thanh toán qua ngân hàng.",
    impactNote: "Kiểu Việt xuất hóa đơn thuế suất 0% cho các gói thầu thi công hạ tầng trong khu kinh tế mở phi thuế quan, được hoàn 100% thuế GTGT đầu vào."
  },
  {
    topic: "Chính sách hoàn thuế GTGT cho dự án đầu tư mới đang trong giai đoạn đầu tư (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 13/2008 ban đầu] Hoàn thuế khi lũy kế 3 tháng âm liên tục.",
    newRule: "[Căn cứ: Luật số 106/2016/QH13 sửa đổi Điều 13 Luật 13/2008] Cơ sở kinh doanh có dự án đầu tư mới đang trong giai đoạn đầu tư có số thuế GTGT đầu vào chưa được khấu trừ từ 300 triệu đồng trở lên thì được hoàn thuế GTGT.",
    impactNote: "Kiểu Việt lập hồ sơ đề nghị cơ quan thuế hoàn hàng tỷ đồng thuế GTGT đầu vào của dự án xây dựng trạm nghiền đá mới trước khi đưa vào vận hành thương mại."
  },
  {
    topic: "Bãi bỏ cơ chế hoàn thuế GTGT đối với trường hợp âm thuế liên tục 12 tháng (Điều 13)",
    type: "removed",
    oldRule: "[Căn cứ: Luật 13/2008] Doanh nghiệp có số thuế GTGT đầu vào chưa được khấu trừ hết liên tục 12 tháng hoặc 4 quý thì được làm thủ tục xét hoàn thuế.",
    newRule: "[Căn cứ: Luật số 106/2016/QH13] Bãi bỏ quy định hoàn thuế khi âm thuế 12 tháng; số thuế GTGT chưa khấu trừ hết của hoạt động SXKD thông thường chỉ được chuyển sang kỳ sau để tiếp tục khấu trừ, không được hoàn tiền mặt.",
    impactNote: "Kế toán Kiểu Việt lưu ý quản lý dòng tiền khấu trừ thuế GTGT qua các quý, tập trung vào hoàn thuế dự án đầu tư thay vì hoàn thuế hàng tháng."
  },
  {
    topic: "Khấu trừ thuế GTGT đối với tài sản cố định mua sắm có giá trị lớn (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Khấu trừ theo từng tháng phân bổ.",
    newRule: "[Căn cứ: Điều 12 Luật 13/2008] Thuế GTGT đầu vào của tài sản cố định sử dụng cho sản xuất kinh doanh hàng hóa chịu thuế GTGT được khấu trừ toàn bộ 100% ngay trong kỳ tính thuế phát sinh hóa đơn.",
    impactNote: "Kiểu Việt mua dàn xe lu, máy ủi trị giá 20 tỷ đồng được khấu trừ ngay 2 tỷ tiền thuế GTGT trong tháng phát sinh hóa đơn tài chính."
  },
  {
    topic: "Phân bổ thuế GTGT đầu vào dùng chung cho hoạt động chịu thuế và không chịu thuế (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Tự xác định theo ước tính.",
    newRule: "[Căn cứ: Điều 12 Luật 13/2008] Thuế GTGT đầu vào dùng chung cho sản xuất kinh doanh hàng hóa chịu thuế và không chịu thuế chỉ được khấu trừ số thuế GTGT của hàng hóa chịu thuế, doanh nghiệp phải hạch toán riêng; nếu không tách riêng được thì phân bổ theo tỷ lệ (%) doanh thu.",
    impactNote: "Kiểu Việt tách bạch riêng vật tư dùng cho công trình hạ tầng chịu thuế GTGT và các hoạt động đền bù giải phóng mặt bằng không thuộc đối tượng chịu thuế."
  },
  {
    topic: "Quy định thuế GTGT đối với sản phẩm khoáng sản khai thác chưa chế biến (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Áp thuế 10%.",
    newRule: "[Căn cứ: Luật 106/2016 sửa đổi Điều 5 Luật 13/2008] Sản phẩm xuất khẩu là tài nguyên, khoáng sản khai thác chưa chế biến thành sản phẩm khác không thuộc đối tượng được áp dụng thuế suất thuế GTGT 0% và không được khấu trừ thuế GTGT đầu vào.",
    impactNote: "Kiểu Việt tập trung chế biến sâu đá mỏ thành đá dăm tiêu chuẩn và cát nghiền nhân tạo phục vụ xây dựng nội địa để bảo toàn quyền khấu trừ thuế GTGT."
  },
  {
    topic: "Quy định hóa đơn thương mại và chứng từ bù trừ công nợ xây dựng (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Quy định thanh toán ngân hàng cứng nhắc.",
    newRule: "[Căn cứ: Điều 12 Luật 13/2008 & các thông tư hướng dẫn] Các trường hợp bù trừ công nợ ba bên, cấn trừ khối lượng thi công với vật tư xi măng sắt thép do Chủ đầu tư cấp được công nhận là chứng từ thanh toán không dùng tiền mặt hợp lệ để khấu trừ thuế GTGT.",
    impactNote: "Kiểu Việt lập Biên bản đối trừ công nợ vật tư A cấp có xác nhận chữ ký số của Ban QLDA để bảo vệ quyền khấu trừ thuế GTGT đầu vào."
  },
  {
    topic: "Ngưỡng doanh thu áp dụng phương pháp khấu trừ thuế GTGT từ 1 tỷ đồng trở lên (Điều 10)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 13/2008 ban đầu] Mọi doanh nghiệp có mã số thuế đều được áp dụng phương pháp khấu trừ.",
    newRule: "[Căn cứ: Luật số 31/2013/QH13 sửa đổi Điều 10 Luật 13/2008] Doanh nghiệp có doanh thu hàng năm từ 1 tỷ đồng trở lên bắt buộc áp dụng phương pháp khấu trừ thuế; doanh nghiệp mới thành lập được tự nguyện đăng ký áp dụng phương pháp khấu trừ.",
    impactNote: "Công ty Cổ phần Kiểu Việt có quy mô doanh thu hàng trăm tỷ đồng áp dụng phương pháp khấu trừ thuế GTGT chuẩn mực và ổn định lâu dài."
  }
];

// 5. nd-218-2013 (12 items)
g3['nd-218-2013'].items = [
  {
    topic: "Quy định chi tiết các khoản chi phí được trừ và không được trừ khi tính thuế TNDN (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 124/2008] Quy định khung chi phí chung.",
    newRule: "[Căn cứ: Điều 9 NĐ 218/2013] Chi tiết 3 điều kiện chi phí được trừ: Phát sinh thực tế liên quan đến SXKD; có đủ hóa đơn, chứng từ hợp pháp; có chứng từ thanh toán không dùng tiền mặt đối với hóa đơn từ 20 triệu đồng trở lên.",
    impactNote: "Bộ cẩm nang thực thi chi phí cốt lõi của Phòng Kế toán Kiểu Việt khi kiểm soát toàn bộ chứng từ thanh quyết toán từ các công trường."
  },
  {
    topic: "Thời điểm ghi nhận doanh thu tính thuế TNDN đối với hoạt động xây dựng, lắp đặt (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 124/2008] Doanh thu xác định theo tiến độ nghiệm thu hoặc giá trị hợp đồng.",
    newRule: "[Căn cứ: Điều 5 Khoản 2 Điểm m NĐ 218/2013] Đối với hoạt động xây dựng, lắp đặt là giá trị công trình, hạng mục công trình hoặc khối lượng công trình xây dựng, lắp đặt được nghiệm thu bàn giao; trường hợp có bao thầu nguyên vật liệu thì doanh thu bao gồm cả giá trị nguyên vật liệu.",
    impactNote: "Kiểu Việt hạch toán doanh thu tính thuế TNDN trùng khớp tuyệt đối với kỳ nghiệm thu giai đoạn A-B có chữ ký của Chủ đầu tư."
  },
  {
    topic: "Chi phí khấu hao đối với máy móc thi công đi thuê tài chính và tự mua (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 124/2008] Chỉ quy định khấu hao TSCĐ tự có.",
    newRule: "[Căn cứ: Điều 9 Khoản 2 Điểm a NĐ 218/2013] Cho phép trích khấu hao đối với TSCĐ đi thuê tài chính; hướng dẫn chi tiết hồ sơ chứng minh quyền sở hữu và trích khấu hao theo tiến độ thực tế thi công công trình.",
    impactNote: "Kiểu Việt tận dụng kênh thuê tài chính mua sắm xe lu rung, trạm trộn bê tông nhựa nóng và trích khấu hao giảm thuế TNDN hợp pháp."
  },
  {
    topic: "Quy định mức khống chế chi trả lãi tiền vay sản xuất kinh doanh theo lãi suất cơ bản (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 124/2008] Khống chế lãi vay của đối tượng không phải tổ chức tín dụng không quá 150% lãi suất cơ bản do NHNN công bố.",
    newRule: "[Căn cứ: Điều 9 Khoản 2 Điểm d NĐ 218/2013] Khẳng định phần chi phí trả lãi tiền vay vốn sản xuất kinh doanh của đối tượng không phải là tổ chức tín dụng vượt quá 150% mức lãi suất cơ bản do Ngân hàng Nhà nước Việt Nam công bố tại thời điểm vay thì không được trừ.",
    impactNote: "Kiểu Việt quản lý các hợp đồng vay vốn cá nhân hoặc đối tác ngoài ngân hàng luôn tuân thủ dưới trần 150% lãi suất cơ bản."
  },
  {
    topic: "Quy định trích lập các khoản dự phòng giảm giá hàng tồn kho và nợ phải thu khó đòi (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 124/2008] Doanh nghiệp tự ước tính dự phòng.",
    newRule: "[Căn cứ: Điều 9 Khoản 2 Điểm c NĐ 218/2013] Khoản trích lập các khoản dự phòng (dự phòng nợ khó đòi, dự phòng bảo hành công trình, dự phòng giảm giá hàng tồn kho) được tính vào chi phí được trừ nếu thực hiện đúng theo hướng dẫn của Bộ Tài chính.",
    impactNote: "Kiểu Việt trích lập dự phòng bảo hành công trình xây dựng (từ 3% - 5% giá trị nghiệm thu) vào chi phí thuế TNDN hợp lý trong năm."
  },
  {
    topic: "Chi phí tiền lương không được trừ do không có chứng từ chi trả trước hạn quyết toán (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 124/2008] Nợ lương công nhân kéo dài vẫn được tính chi phí.",
    newRule: "[Căn cứ: Điều 9 Khoản 2 Điểm b NĐ 218/2013] Tiền lương, tiền công đã hạch toán vào chi phí SXKD trong kỳ nhưng thực tế không chi trả hoặc không có chứng từ thanh toán trước hạn chót nộp hồ sơ quyết toán thuế năm (31/03) sẽ bị loại khỏi chi phí được trừ (trừ trường hợp trích lập quỹ dự phòng tiền lương tối đa 17%).",
    impactNote: "Kiểu Việt thành lập Quỹ dự phòng tiền lương 17% hợp lệ để bảo vệ chi phí lương thưởng Tết chi trả muộn cho công nhân."
  },
  {
    topic: "Quy định bù trừ lãi lỗ giữa hoạt động chuyển nhượng dự án và hoạt động SXKD xây lắp (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 124/2008] Lỗ từ chuyển nhượng bất động sản không được bù trừ với lãi hoạt động chính.",
    newRule: "[Căn cứ: Điều 7 Khoản 2 NĐ 218/2013] Doanh nghiệp trong kỳ tính thuế có các hoạt động chuyển nhượng bất động sản, chuyển nhượng dự án đầu tư bị lỗ thì số lỗ này được bù trừ với lãi của hoạt động sản xuất kinh doanh (bao gồm cả thu nhập khác).",
    impactNote: "Cơ sở pháp lý vững chắc giúp Kiểu Việt bù trừ linh hoạt kết quả tài chính giữa đầu tư hạ tầng và thi công xây lắp."
  },
  {
    topic: "Điều kiện xác định chi phí tài trợ xây dựng nhà tình nghĩa, đường dân sinh (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Quy định thủ tục chung chung.",
    newRule: "[Căn cứ: Điều 9 Khoản 2 Điểm e NĐ 218/2013] Chi tiết hồ sơ tài trợ được tính vào chi phí hợp lý gồm: Biên bản xác nhận tài trợ theo Mẫu số 04 ban hành kèm Nghị định, có chữ ký của người đại diện Kiểu Việt và đại diện UBND cấp xã hoặc đơn vị thụ hưởng tài trợ.",
    impactNote: "Kế toán Kiểu Việt hoàn thiện đầy đủ mẫu biểu 04 có chữ ký và con dấu đỏ của UBND xã nơi thi công dự án để bảo đảm 100% chi phí từ thiện được trừ thuế."
  },
  {
    topic: "Chi phí thuê tài sản của cá nhân không có hóa đơn nhưng có hợp đồng và chứng từ (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Cá nhân phải lên cơ quan thuế mua hóa đơn lẻ.",
    newRule: "[Căn cứ: Điều 9 NĐ 218/2013] Doanh nghiệp thuê tài sản (máy đào, bãi đổ đất, nhà trọ công nhân) của cá nhân có doanh thu dưới 100 triệu/năm chỉ cần có Hợp đồng thuê, chứng từ thanh toán và bảng kê thu mua Mẫu 01/TNDN là được tính vào chi phí hợp lý.",
    impactNote: "Giúp Kiểu Việt hạch toán hàng trăm triệu đồng chi phí thuê mặt bằng đổ đất thải và lán trại công nhân từ các hộ dân địa phương thuận tiện."
  },
  {
    topic: "Phương pháp xác định ưu đãi thuế TNDN theo địa bàn kinh tế xã hội khó khăn (Điều 15)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Ưu đãi theo danh mục cũ.",
    newRule: "[Căn cứ: Điều 15 và 16 NĐ 218/2013] Quy định cụ thể danh mục địa bàn ưu đãi thuế TNDN: Doanh nghiệp thực hiện dự án đầu tư mới tại địa bàn khó khăn được áp dụng thuế suất 17% trong 10 năm, địa bàn đặc biệt khó khăn áp dụng thuế suất 10% trong 15 năm.",
    impactNote: "Kiểu Việt hưởng trọn vẹn ưu đãi thuế TNDN khi trúng thầu thi công các đoạn cao tốc đi qua vùng đồng bào dân tộc thiểu số tại Gia Lai, Đắk Lắk."
  },
  {
    topic: "Xử lý khoản chi phí không tương ứng với doanh thu ghi nhận trong kỳ (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Loại chi phí nếu chưa có doanh thu.",
    newRule: "[Căn cứ: Điều 9 NĐ 218/2013] Chi phí xây dựng dở dang liên quan trực tiếp đến công trình chưa nghiệm thu được treo trên tài khoản chi phí dở dang (TK 154) và được kết chuyển tính vào chi phí được trừ tương ứng tại thời điểm nghiệm thu công trình.",
    impactNote: "Kiểu Việt quản lý chi phí dở dang theo từng gói thầu, bảo đảm nguyên tắc phù hợp giữa doanh thu và chi phí khi quyết toán thuế."
  },
  {
    topic: "Hiệu lực thi hành và quy định chuyển tiếp của Nghị định 218/2013/NĐ-CP (Điều 20)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 124/2008] Hết hiệu lực thi hành.",
    newRule: "[Căn cứ: Điều 20 NĐ 218/2013] Nghị định có hiệu lực thi hành từ ngày 15/02/2014 và áp dụng cho kỳ tính thuế TNDN từ năm 2014 trở đi, tạo hành lang pháp lý thông thoáng và ổn định cho cộng đồng doanh nghiệp Việt Nam.",
    impactNote: "Nghị định nền tảng đồng hành cùng sự phát triển lớn mạnh của Công ty Cổ phần Kiểu Việt trong suốt hơn một thập kỷ qua."
  }
];

// Write updated group 3 back to file
const outputCode = `import { DecreeDiffData } from '../diff-types';\n\nexport const group3CorporatePersonalTax: Record<string, DecreeDiffData> = ` + JSON.stringify(g3, null, 2) + `;\n`;
fs.writeFileSync(g3Path, outputCode, 'utf8');
console.log('Group 3 completed 100%! All 11 decrees now have 10-15 items.');
