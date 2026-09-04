const fs = require('fs');
const path = require('path');

const g4Path = path.join(__dirname, '..', 'src', 'data', 'diffs', 'group4_labor_salary_contracts.ts');
const raw = fs.readFileSync(g4Path, 'utf8');
const jsonStr = raw.replace(/import[^;]+;/, '').replace(/export const \w+[^=]+=/, '').replace(/;\s*$/, '');
const g4 = eval('(' + jsonStr + ')');

// 7. nd-12-2022: 12 items
g4['nd-12-2022'].items = [
  {
    topic: "Tăng mức phạt chậm đóng, trốn đóng bảo hiểm xã hội lên tới 150 triệu đồng (Điều 39)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 28/2020] Phạt tiền từ 12% đến 15% tổng số tiền phải đóng BHXH bắt buộc nhưng tối đa không quá 75.000.000 đồng.",
    newRule: "[Căn cứ: Điều 39 Khoản 5 NĐ 12/2022] Phạt tiền từ 12% đến 15% tổng số tiền phải đóng BHXH bắt buộc, BHTN nhưng tối đa không quá 150.000.000 đồng đối với tổ chức; đồng thời buộc truy nộp đủ số tiền nợ cộng lãi chậm nộp 0.03%/ngày.",
    impactNote: "Nhắc nhở quyết liệt: Kế toán Kiểu Việt trích nộp đủ tiền BHXH hàng tháng, loại trừ hoàn toàn nguy cơ bị xử phạt kịch khung 150 triệu đồng."
  },
  {
    topic: "Xử phạt hành vi không giao kết hợp đồng lao động bằng văn bản (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 28/2020] Phạt từ 2 triệu đến 25 triệu tùy số lượng lao động.",
    newRule: "[Căn cứ: Điều 9 Khoản 1 NĐ 12/2022] Phạt tiền từ 4.000.000đ đến 50.000.000đ (với tổ chức) đối với hành vi không giao kết HĐLĐ bằng văn bản hoặc giao kết không đúng loại hợp đồng lao động với người lao động.",
    impactNote: "Kiểu Việt ký 100% hợp đồng lao động (bản giấy hoặc điện tử) với tất cả công nhân, lái máy trước ngày đầu tiên bước chân vào công trường."
  },
  {
    topic: "Phạt nặng hành vi giữ bản chính giấy tờ tùy thân hoặc yêu cầu đặt cọc tiền của người lao động (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 28/2020] Phạt từ 20 đến 25 triệu.",
    newRule: "[Căn cứ: Điều 9 Khoản 2 NĐ 12/2022] Phạt tiền từ 40.000.000đ đến 50.000.000đ đối với người sử dụng lao động có hành vi giữ bản chính giấy tờ tùy thân, văn bằng chứng chỉ hoặc buộc người lao động nộp tiền cọc để bảo đảm thực hiện HĐLĐ.",
    impactNote: "Phòng Nhân sự Kiểu Việt tuyệt đối không giữ bất kỳ sổ đỏ, bằng lái hay CCCD gốc nào của lái xe công trường, tuân thủ đạo đức và luật pháp."
  },
  {
    topic: "Xử phạt vi phạm quy định về an toàn, vệ sinh lao động tại công trường xây dựng (Điều 21 - 24)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 28/2020] Phạt tiền từ 5 đến 30 triệu.",
    newRule: "[Căn cứ: Điều 21 đến 24 NĐ 12/2022] Phạt tiền từ 30.000.000đ đến 100.000.000đ đối với hành vi không trang bị đầy đủ phương tiện bảo vệ cá nhân đạt chuẩn, không kiểm định xe máy thi công có yêu cầu nghiêm ngặt về ATLĐ hoặc không huấn luyện ATLĐ cho công nhân.",
    impactNote: "Kiểu Việt trang bị 100% mũ cứng, giày mũi thép bảo hộ và tổ chức lớp huấn luyện an toàn lao động có cấp thẻ trước khi khởi công mỗi gói thầu."
  },
  {
    topic: "Xử phạt hành vi huy động làm thêm giờ vượt quá số giờ quy định hoặc không xin phép (Điều 18)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 28/2020] Phạt tiền từ 10 - 50 triệu.",
    newRule: "[Căn cứ: Điều 18 Khoản 3 NĐ 12/2022] Phạt tiền từ 40.000.000đ đến 150.000.000đ đối với hành vi huy động người lao động làm thêm quá 40 giờ/tháng hoặc quá 300 giờ/năm hoặc không gửi văn bản thông báo làm thêm giờ cho cơ quan nhà nước có thẩm quyền.",
    impactNote: "Kiểu Việt theo dõi sát sao bảng chấm công giờ làm thêm từng tuần, luôn gửi thông báo bằng văn bản cho Sở LĐTBXH để hoạt động thi công hợp pháp 100%."
  },
  {
    topic: "Xử phạt hành vi không trả đủ tiền lương làm thêm giờ, làm việc ban đêm (Điều 17)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Phạt tiền từ 5 - 40 triệu.",
    newRule: "[Căn cứ: Điều 17 Khoản 2 NĐ 12/2022] Phạt tiền từ 10.000.000đ đến 100.000.000đ (đối với tổ chức) tùy theo số lượng lao động bị vi phạm; đồng thời buộc trả đủ tiền lương cộng thêm một khoản tiền lãi tính theo mức lãi suất tiền gửi không kỳ hạn cao nhất của ngân hàng thương mại nhà nước.",
    impactNote: "Kiểu Việt thanh toán đủ hệ số 150%, 200%, 300% cho từng giờ làm thêm, bảo đảm quyền lợi tài chính sòng phẳng với công nhân."
  },
  {
    topic: "Phạt hành vi không thành lập hoặc không trích nộp kinh phí công đoàn (Điều 37)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Phạt từ 10 - 20 triệu.",
    newRule: "[Căn cứ: Điều 37 NĐ 12/2022] Phạt tiền từ 18% đến 20% tổng số tiền kinh phí công đoàn phải đóng tại thời điểm lập biên bản nhưng tối đa không quá 150.000.000 đồng đối với hành vi chậm đóng hoặc trốn đóng kinh phí công đoàn 2%.",
    impactNote: "Kiểu Việt trích nộp đều đặn 2% KPCĐ, duy trì tổ chức Công đoàn cơ sở vững mạnh chăm lo quyền lợi cho công nhân viên."
  },
  {
    topic: "Xử phạt hành vi không công khai Thang bảng lương và Nội quy lao động (Điều 17 & 19)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Phạt 2 - 5 triệu.",
    newRule: "[Căn cứ: Điều 17 và Điều 19 NĐ 12/2022] Phạt tiền từ 10.000.000đ đến 20.000.000đ đối với hành vi không niêm yết công khai Thang bảng lương, Nội quy lao động tại nơi làm việc trước khi thực hiện.",
    impactNote: "Phòng Nhân sự Kiểu Việt niêm yết Thang bảng lương và Nội quy lao động tại Bảng tin văn phòng và Nhà điều hành của mọi Ban điều hành công trường."
  },
  {
    topic: "Xử phạt hành vi chậm trả trợ cấp thôi việc cho người lao động nghỉ việc (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Phạt từ 2 - 20 triệu.",
    newRule: "[Căn cứ: Điều 12 NĐ 12/2022] Phạt tiền từ 4.000.000đ đến 40.000.000đ đối với hành vi không thanh toán hoặc thanh toán không đủ các khoản trợ cấp thôi việc, trợ cấp mất việc làm trong thời hạn 14 ngày làm việc kể từ ngày chấm dứt HĐLĐ.",
    impactNote: "Kiểu Việt giải quyết chế độ tài chính và chốt sổ BHXH cho nhân sự nghỉ việc trong vòng tối đa 7 ngày làm việc."
  },
  {
    topic: "Xử phạt hành vi vi phạm thời gian nghỉ ngơi của lao động nữ nuôi con nhỏ (Điều 28)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Phạt nhẹ từ 1 - 3 triệu.",
    newRule: "[Căn cứ: Điều 28 Khoản 2 NĐ 12/2022] Phạt tiền từ 20.000.000đ đến 40.000.000đ đối với người sử dụng lao động không cho lao động nữ nuôi con dưới 12 tháng tuổi được nghỉ 60 phút mỗi ngày trong thời gian làm việc mà vẫn hưởng đủ lương.",
    impactNote: "Kiểu Việt bố trí linh hoạt giờ làm việc cho các nữ nhân viên nuôi con nhỏ, bảo đảm đầy đủ chế độ thai sản theo quy định pháp luật."
  },
  {
    topic: "Quy định thẩm quyền lập biên bản và xử phạt của Thanh tra Sở LĐTBXH và BHXH (Điều 47 - 52)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Thẩm quyền phân tán.",
    newRule: "[Căn cứ: Điều 47 đến 52 NĐ 12/2022] Cơ quan BHXH có thẩm quyền thanh tra chuyên ngành đóng BHXH và trực tiếp ra quyết định xử phạt vi phạm hành chính về trốn đóng, chậm đóng BHXH; Thanh tra Lao động xử phạt các vi phạm quan hệ lao động.",
    impactNote: "Kế toán Kiểu Việt chủ động chuẩn bị số liệu kế toán và bảng thanh toán tiền lương sẵn sàng tiếp đón các đoàn thanh tra liên ngành."
  },
  {
    topic: "Hiệu lực thi hành của Nghị định 12/2022/NĐ-CP (Điều 53)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 28/2020/NĐ-CP] Hết hiệu lực thi hành.",
    newRule: "[Căn cứ: Điều 53 NĐ 12/2022] Nghị định có hiệu lực thi hành từ ngày 17 tháng 01 năm 2022; bãi bỏ toàn bộ Nghị định số 28/2020/NĐ-CP.",
    impactNote: "Cơ sở răn đe pháp lý cao nhất buộc mọi doanh nghiệp phải chuẩn hóa 100% công tác lao động, tiền lương và bảo hiểm xã hội."
  }
];

// 8. qd-595-2017-bhxh: 12 items
g4['qd-595-2017-bhxh'].items = [
  {
    topic: "Quy trình cấp và quản lý mã số BHXH duy nhất gắn liền với số định danh cá nhân CCCD (Điều 2)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 959/2015] Mỗi người lao động có thể có nhiều sổ BHXH nếu làm việc ở nhiều địa phương khác nhau.",
    newRule: "[Căn cứ: Điều 2 QĐ 595/QĐ-BHXH & QĐ 505/QĐ-BHXH] Mã số BHXH là số định danh cá nhân duy nhất gồm 10 chữ số gắn liền suốt đời với người tham gia; liên thông trực tiếp với Cơ sở dữ liệu quốc gia về dân cư trên ứng dụng VssID.",
    impactNote: "Kiểu Việt thu thập số CCCD của 100% công nhân mới vào để tra cứu mã số BHXH đồng bộ, không phát sinh sổ bảo hiểm trùng lặp."
  },
  {
    topic: "Quy định phương thức và thời hạn đóng BHXH, BHYT, BHTN hàng tháng (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ cũ] Đóng trước ngày 20 hoặc cuối tháng.",
    newRule: "[Căn cứ: Điều 7 QĐ 595] Doanh nghiệp đóng chậm nhất vào ngày cuối cùng của tháng; đối với doanh nghiệp xây dựng có phương thức đóng theo quý hoặc 6 tháng một lần phải có văn bản thỏa thuận với cơ quan BHXH.",
    impactNote: "Kế toán Kiểu Việt thực hiện chuyển tiền đóng BHXH trước ngày 25 hàng tháng để tránh lỗi lệnh ngân hàng cuối tháng gây tính lãi chậm nộp."
  },
  {
    topic: "Quy định tiền lương làm căn cứ đóng BHXH bắt buộc đối với người lao động (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ 959] Chỉ đóng trên mức lương cơ bản.",
    newRule: "[Căn cứ: Điều 6 QĐ 595] Tiền lương tháng đóng BHXH là mức lương, phụ cấp lương và các khoản bổ sung khác xác định được mức tiền cụ thể và trả thường xuyên trong mỗi kỳ trả lương; không bao gồm tiền ăn ca, tiền xăng xe, điện thoại, tiền thưởng sáng kiến.",
    impactNote: "Kiểu Việt cơ cấu thu nhập: Tách tiền ăn ca 50.000đ/ngày, phụ cấp điện thoại công trường ra khỏi quỹ lương đóng BHXH hợp pháp."
  },
  {
    topic: "Hồ sơ và quy trình báo tăng, báo giảm lao động điện tử theo Mẫu D02-LT (Điều 23)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ cũ] Nộp biểu mẫu D02-TS bằng giấy.",
    newRule: "[Căn cứ: Điều 23 QĐ 595 sửa đổi bởi QĐ 505] Doanh nghiệp nộp Danh sách lao động tham gia BHXH (Mẫu D02-LT) và Tờ khai TK1-TS bằng phương thức điện tử có ký chữ ký số qua Cổng dịch vụ công BHXH Việt Nam hoặc phần mềm khai BHXH (như EFY, VNPT, Viettel).",
    impactNote: "Phòng Nhân sự Kiểu Việt báo tăng lao động công trường ngay trong ngày ký hợp đồng, báo giảm chốt sổ trong 48h khi công nhân hết thời vụ."
  },
  {
    topic: "Quy trình cấp lại sổ BHXH do mất, hỏng hoặc gộp sổ BHXH nhiều mã (Điều 27)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ cũ] Thủ tục xác minh kéo dài 45 ngày.",
    newRule: "[Căn cứ: Điều 27 QĐ 595] Hồ sơ cấp lại sổ BHXH do mất hỏng chỉ cần Tờ khai TK1-TS; cơ quan BHXH xử lý cấp lại sổ trong thời hạn không quá 10 ngày làm việc (hoặc thực hiện hoàn toàn trên app VssID mà không cần cấp sổ giấy).",
    impactNote: "Kiểu Việt hỗ trợ công nhân bị mất sổ cũ làm thủ tục gộp sổ trên VssID nhanh chóng, bảo đảm đầy đủ quá trình đóng liên tục."
  },
  {
    topic: "Quy trình giải quyết chế độ ốm đau, thai sản, dưỡng sức theo Mẫu 01B-LSB (Điều 10)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ cũ] Nộp Mẫu C70a-HD bằng giấy.",
    newRule: "[Căn cứ: Điều 10 QĐ 595 & QĐ 166] Doanh nghiệp lập Danh sách đề nghị giải quyết hưởng chế độ ốm đau, thai sản, dưỡng sức phục hồi sức khỏe (Mẫu 01B-LSB) gửi cơ quan BHXH qua cổng điện tử; cơ quan BHXH duyệt chi tiền trong vòng 06 ngày làm việc.",
    impactNote: "Kế toán Kiểu Việt nộp hồ sơ 01B-LSB định kỳ vào ngày 10 hàng tháng, giúp công nhân sớm nhận được tiền bảo hiểm ốm đau thai sản."
  },
  {
    topic: "Quy định mức lãi suất tính tiền chậm đóng BHXH, BHYT, BHTN (Điều 37)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ cũ] Tính theo lãi suất cơ bản của NHNN.",
    newRule: "[Căn cứ: Điều 37 QĐ 595] Tiền lãi chậm đóng BHXH, BHTN tính bằng 2 lần mức lãi suất đầu tư quỹ BHXH bình quân năm trước liền kề; chậm đóng BHYT tính bằng 2 lần mức lãi suất thị trường liên ngân hàng kỳ hạn 9 tháng (khoảng 0.03%/ngày).",
    impactNote: "Lãi phạt chậm đóng có thể lên tới 10-12%/năm; Kiểu Việt kiểm soát dòng tiền nộp đúng hạn, tránh lãng phí chi phí tài chính không đáng có."
  },
  {
    topic: "Quy định hoàn trả tiền đóng BHXH, BHYT do thoái thu hoặc đóng trùng (Điều 43)",
    type: "added",
    oldRule: "[Căn cứ: QĐ cũ] Quy trình thoái thu mất nhiều tháng.",
    newRule: "[Căn cứ: Điều 43 QĐ 595] Trường hợp doanh nghiệp đóng trùng hoặc người lao động làm việc nhiều nơi đóng thừa thì cơ quan BHXH thực hiện bù trừ vào số tiền phải đóng của kỳ sau hoặc làm thủ tục hoàn trả tiền mặt/chuyển khoản trong thời hạn 05 ngày làm việc.",
    impactNote: "Kiểu Việt làm thủ tục đối trừ số tiền đóng thừa của các nhân sự nghỉ việc trước hạn, tối ưu hóa tiền mặt lưu chuyển."
  },
  {
    topic: "Tra cứu quá trình đóng BHXH trực tuyến và biên lai đóng bảo hiểm điện tử (Điều 32)",
    type: "added",
    oldRule: "[Căn cứ: QĐ cũ] Người lao động phải chờ cấp tờ rời sổ BHXH hàng năm.",
    newRule: "[Căn cứ: Điều 32 QĐ 595] Người lao động chủ động tra cứu 100% quá trình đóng, mức tiền lương đóng BHXH qua ứng dụng VssID hoặc Cổng thông tin điện tử BHXH Việt Nam; biên lai đóng tiền điện tử thay thế hoàn toàn chứng từ giấy.",
    impactNote: "100% cán bộ công nhân Kiểu Việt cài đặt VssID, giám sát minh bạch quá trình trích đóng bảo hiểm của công ty."
  },
  {
    topic: "Quy định trích đóng bảo hiểm đối với lao động làm việc theo ca kíp tại công trường (Điều 8)",
    type: "added",
    oldRule: "[Căn cứ: QĐ cũ] Chưa hướng dẫn lao động luân phiên.",
    newRule: "[Căn cứ: Điều 8 QĐ 595] Người lao động làm việc không trọn tháng (nghỉ việc không hưởng lương từ 14 ngày làm việc trở lên trong tháng) thì tháng đó không phải đóng BHXH, BHTN nhưng vẫn phải đóng BHYT nếu có thỏa thuận tiếp tục duy trì thẻ BHYT.",
    impactNote: "Kế toán tiền lương Kiểu Việt rà soát ngày công công nhân thời vụ: Ai nghỉ trên 14 ngày làm thủ tục tạm báo giảm BHXH đúng luật."
  },
  {
    topic: "Trách nhiệm lưu trữ hồ sơ nghiệp vụ bảo hiểm xã hội (Điều 48)",
    type: "modified",
    oldRule: "[Căn cứ: QĐ cũ] Lưu hồ sơ giấy theo thời hạn chung.",
    newRule: "[Căn cứ: Điều 48 QĐ 595] Hồ sơ thu nộp BHXH, danh sách Mẫu D02-LT, chứng từ thanh toán ngân hàng phải được lưu trữ tối thiểu 05 năm (hoặc lưu trữ điện tử vĩnh viễn trên hệ thống phần mềm kế toán doanh nghiệp).",
    impactNote: "Kiểu Việt số hóa lưu trữ toàn bộ hồ sơ kê khai BHXH trên hạ tầng đám mây nội bộ, phục vụ kiểm toán bất cứ lúc nào."
  },
  {
    topic: "Hiệu lực thi hành của Quyết định 595/QĐ-BHXH (Điều 50)",
    type: "added",
    oldRule: "[Căn cứ: QĐ 959/QĐ-BHXH] Hết hiệu lực thi hành.",
    newRule: "[Căn cứ: Điều 50 QĐ 595/QĐ-BHXH] Quyết định có hiệu lực thi hành từ ngày 01 tháng 05 năm 2017; là văn bản quy chuẩn nền tảng hướng dẫn toàn diện quy trình nghiệp vụ thu và cấp sổ BHXH tại Việt Nam.",
    impactNote: "Tài liệu đào tạo chuẩn mực cho toàn thể nhân sự kế toán tiền lương và phụ trách nhân sự Công ty Cổ phần Kiểu Việt."
  }
];

// 9. nd-37-2015: 14 items
g4['nd-37-2015'].items = [
  {
    topic: "Quy định 04 loại giá hợp đồng xây dựng phổ biến: Trọn gói, Đơn giá cố định, Đơn giá điều chỉnh và Thời gian (Điều 15)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 48/2010] Quy định các loại giá hợp đồng chưa chặt chẽ.",
    newRule: "[Căn cứ: Điều 15 NĐ 37/2015] Quy định rõ 4 loại giá hợp đồng xây dựng; trong đó Hợp đồng theo đơn giá điều chỉnh bắt buộc phải quy định công thức điều chỉnh giá, nguồn dữ liệu chỉ số giá (CPI) của cơ quan có thẩm quyền.",
    impactNote: "Kiểu Việt đàm phán hợp đồng thi công gói thầu đường cao tốc áp dụng loại Giá hợp đồng theo đơn giá điều chỉnh có công thức trượt giá vật tư (nhựa đường, xăng dầu, sắt thép) để bảo toàn biên lợi nhuận."
  },
  {
    topic: "Mức tạm ứng hợp đồng xây dựng tối thiểu bắt buộc từ 10% đến 50% giá trị hợp đồng (Điều 18)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 48/2010] Mức tạm ứng tối thiểu chung chung.",
    newRule: "[Căn cứ: Điều 18 NĐ 37/2015] Mức tạm ứng tối thiểu: Hợp đồng thi công xây dựng công trình từ 10% đến 20% giá trị hợp đồng (tùy giá trị gói thầu); mức tạm ứng tối đa không vượt quá 50% giá trị hợp đồng.",
    impactNote: "Kiểu Việt thu xếp Bảo lãnh tạm ứng của Ngân hàng để nhận ngay 15% - 20% vốn tạm ứng từ Chủ đầu tư (hàng chục tỷ đồng) mua sắm sắt thép tập kết công trường."
  },
  {
    topic: "Quy định về thời hạn thanh toán giai đoạn hợp đồng xây dựng tối đa 14 ngày làm việc (Điều 19)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Thời hạn thanh toán do hai bên tự thỏa thuận, thường bị kéo dài hàng tháng.",
    newRule: "[Căn cứ: Điều 19 Khoản 10 NĐ 37/2015] Trong thời hạn không quá 14 ngày làm việc kể từ ngày nhận đủ hồ sơ thanh toán hợp lệ của nhà thầu, bên giao thầu (Chủ đầu tư) bắt buộc phải làm thủ tục thanh toán cho nhà thầu; nếu chậm thanh toán phải trả lãi phạt chậm trả.",
    impactNote: "Vũ khí pháp lý sắc bén của Kiểu Việt khi đôn đốc Ban Quản lý dự án giải ngân thanh toán khối lượng nghiệm thu giai đoạn đúng hạn."
  },
  {
    topic: "Quy định bảo đảm thực hiện hợp đồng từ 2% đến 10% giá trị hợp đồng (Điều 16)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Tỷ lệ từ 3% đến 10%.",
    newRule: "[Căn cứ: Điều 16 NĐ 37/2015] Giá trị bảo đảm thực hiện hợp đồng được quy định trong hồ sơ mời thầu từ 2% đến 10% giá trị hợp đồng xây dựng (trường hợp đề phòng rủi ro có thể lên đến 30%); thực hiện bằng Thư bảo lãnh của ngân hàng thương mại.",
    impactNote: "Kiểu Việt duy trì hạn mức bảo lãnh ngân hàng uy tín tại BIDV để phát hành Thư bảo đảm thực hiện hợp đồng 5% giá thầu trúng thầu thần tốc."
  },
  {
    topic: "Quy định mức bảo hành công trình xây dựng từ 3% đến 5% giá trị hợp đồng (Điều 35)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 48/2010] Tỷ lệ bảo hành theo cấp công trình.",
    newRule: "[Căn cứ: Điều 35 NĐ 37/2015] Mức bảo hành công trình: Tối thiểu 5% giá trị hợp đồng đối với công trình cấp đặc biệt và cấp I; tối thiểu 3% đối với công trình cấp còn lại; thời gian bảo hành từ 12 đến 24 tháng.",
    impactNote: "Kiểu Việt phát hành Bảo lãnh bảo hành 3% - 5% để thu hồi toàn bộ số tiền giữ lại (retention money) của gói thầu ngay khi bàn giao công trình đưa vào sử dụng."
  },
  {
    topic: "Điều chỉnh đơn giá hợp đồng khi khối lượng thực tế phát sinh tăng giảm trên 20% (Điều 38)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Điều chỉnh khi khối lượng tăng giảm trên 10%.",
    newRule: "[Căn cứ: Điều 38 Khoản 2 NĐ 37/2015] Khi khối lượng công việc thực tế hoàn thành tăng hoặc giảm lớn hơn 20% so với khối lượng trong hợp đồng ban đầu thì hai bên phải xác định đơn giá mới cho phần khối lượng vượt trên 20% đó.",
    impactNote: "Kỹ sư kinh tế xây dựng Kiểu Việt theo dõi sát sao khối lượng đào đắp phát sinh: Khi vượt trên 20% lập dự toán đơn giá mới bù đắp trượt giá nhiên liệu thực tế."
  },
  {
    topic: "Điều chỉnh tiến độ thực hiện hợp đồng do lỗi của Chủ đầu tư hoặc bất khả kháng (Điều 39)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Thủ tục xin gia hạn kéo dài.",
    newRule: "[Căn cứ: Điều 39 NĐ 37/2015] Nhà thầu được gia hạn tiến độ thực hiện hợp đồng mà không bị phạt khi: Chậm bàn giao mặt bằng; Chủ đầu tư chậm nghiệm thu thanh toán; hoặc do sự kiện bất khả kháng (mưa bão kéo dài trên địa bàn thi công).",
    impactNote: "Kiểu Việt ghi chép nhật ký công trường và gửi văn bản xác nhận chậm bàn giao mặt bằng của địa phương để gia hạn tiến độ hợp đồng chính thức."
  },
  {
    topic: "Phạt vi phạm hợp đồng tối đa không quá 12% giá trị phần hợp đồng bị vi phạm (Điều 42)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Phạt vi phạm tối đa 8% theo Luật Thương mại.",
    newRule: "[Căn cứ: Điều 42 Khoản 2 NĐ 37/2015] Mức phạt vi phạm hợp đồng do các bên thỏa thuận trong hợp đồng nhưng đối với công trình sử dụng vốn nhà nước thì mức phạt tối đa không quá 12% giá trị phần hợp đồng bị vi phạm.",
    impactNote: "Kiểu Việt kiểm soát chặt chẽ các mốc tiến độ chính (milestone) của hợp đồng, quản trị rủi ro không để bị áp mức phạt vi phạm hợp đồng."
  },
  {
    topic: "Quy định về hợp đồng thầu phụ và thanh toán trực tiếp cho nhà thầu phụ (Điều 47)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 48/2010] Chưa quy định rõ thanh toán trực tiếp cho thầu phụ.",
    newRule: "[Căn cứ: Điều 47 NĐ 37/2015] Tổng thầu được ký hợp đồng với nhà thầu phụ trong danh sách chấp thuận; trường hợp các bên thỏa thuận thì Chủ đầu tư được thanh toán trực tiếp cho nhà thầu phụ trên cơ sở chứng từ xác nhận khối lượng của Tổng thầu.",
    impactNote: "Kiểu Việt quản lý các nhà thầu phụ vận chuyển đất đá, ép cọc bằng hợp đồng thầu phụ chuẩn mực, bảo đảm tiến độ đồng bộ toàn gói thầu."
  },
  {
    topic: "Hồ sơ quyết toán hợp đồng xây dựng và thời hạn lập hồ sơ quyết toán (Điều 22)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Thời hạn quyết toán hợp đồng chưa chi tiết.",
    newRule: "[Căn cứ: Điều 22 NĐ 37/2015] Thời hạn hoàn thành quyết toán hợp đồng xây dựng: Không quá 60 ngày đối với hợp đồng quy mô nhỏ; không quá 120 ngày đối với hợp đồng quy mô lớn kể từ ngày nghiệm thu hoàn thành toàn bộ công trình.",
    impactNote: "Phòng Kế toán & Ban Kỹ thuật Kiểu Việt phối hợp lập trọn bộ hồ sơ quyết toán A-B bàn giao cho Chủ đầu tư trong vòng 90 ngày sau khi thông xe."
  },
  {
    topic: "Xác định chi phí kiểm toán độc lập và chi phí thẩm tra quyết toán vốn đầu tư (Điều 22)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Thẩm tra quyết toán kéo dài.",
    newRule: "[Căn cứ: Điều 22 Khoản 3 NĐ 37/2015] Chủ đầu tư có trách nhiệm thuê đơn vị kiểm toán độc lập kiểm toán báo cáo quyết toán và trình cấp có thẩm quyền phê duyệt quyết toán vốn đầu tư theo đúng thời hạn quy định.",
    impactNote: "Kiểu Việt hợp tác cung cấp chứng từ minh bạch cho đơn vị kiểm toán độc lập của dự án, bảo vệ số liệu quyết toán hợp đồng trọn vẹn."
  },
  {
    topic: "Quy định nguyên tắc thưởng hợp đồng khi rút ngắn tiến độ và tiết kiệm chi phí (Điều 42)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Chỉ có phạt, không có thưởng.",
    newRule: "[Căn cứ: Điều 42 Khoản 1 NĐ 37/2015] Bên giao thầu được quyền thưởng cho bên nhận thầu khi rút ngắn thời gian thi công mang lại hiệu quả kinh tế cho dự án; mức thưởng được thỏa thuận trong hợp đồng nhưng không vượt quá nguồn kinh phí tiết kiệm được.",
    impactNote: "Động lực to lớn giúp Kiểu Việt thi công vượt tiến độ các công trình cao tốc để nhận khoản tiền thưởng tiến độ hợp pháp từ Chủ đầu tư."
  },
  {
    topic: "Quy định ngôn ngữ và đồng tiền thanh toán trong hợp đồng xây dựng (Điều 11 & 14)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Quy định chung.",
    newRule: "[Căn cứ: Điều 11 và Điều 14 NĐ 37/2015] Hợp đồng xây dựng tại Việt Nam bắt buộc sử dụng ngôn ngữ tiếng Việt; đồng tiền thanh toán là Đồng Việt Nam (VND); trường hợp có vốn vay ODA được thanh toán bằng ngoại tệ theo hiệp định.",
    impactNote: "100% hợp đồng thi công của Kiểu Việt được xác lập bằng Tiếng Việt và thanh toán bằng Việt Nam Đồng chuẩn xác."
  },
  {
    topic: "Quy định chấm dứt hợp đồng xây dựng do vi phạm nghiêm trọng hoặc bất khả kháng (Điều 41)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Thủ tục chấm dứt chưa rõ ràng.",
    newRule: "[Căn cứ: Điều 41 NĐ 37/2015] Một bên có quyền chấm dứt hợp đồng nếu bên kia vi phạm nghiêm trọng nghĩa vụ hợp đồng (như chậm thanh toán quá 56 ngày, hoặc nhà thầu chậm tiến độ quá 56 ngày không khắc phục); phải thông báo bằng văn bản trước ít nhất 30 ngày.",
    impactNote: "Kiểu Việt nắm vững căn cứ pháp lý để tự bảo vệ trước các trường hợp Chủ đầu tư vi phạm nghĩa vụ thanh toán kéo dài."
  }
];

// 10. nd-50-2021: 12 items
g4['nd-50-2021'].items = [
  {
    topic: "Sửa đổi điều kiện và thẩm quyền điều chỉnh hợp đồng xây dựng sử dụng vốn nhà nước (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 37/2015 Điều 36] Mọi trường hợp điều chỉnh giá hợp đồng làm vượt giá gói thầu phải trình Người có thẩm quyền quyết định đầu tư phê duyệt.",
    newRule: "[Căn cứ: Điều 1 Khoản 11 NĐ 50/2021 sửa đổi Điều 36 NĐ 37/2015] Chủ đầu tư được quyền tự quyết định điều chỉnh hợp đồng trong phạm vi dự toán gói thầu được duyệt; chỉ khi vượt tổng mức đầu tư hoặc vượt dự toán gói thầu mới phải trình Người có thẩm quyền phê duyệt.",
    impactNote: "Tăng tính chủ động cho Chủ đầu tư, giúp Kiểu Việt ký kết các Phụ lục điều chỉnh bổ sung khối lượng công trình nhanh chóng hơn nhiều tháng."
  },
  {
    topic: "Quy định chi tiết phương pháp điều chỉnh giá hợp đồng xây dựng theo chỉ số giá (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 37/2015 Điều 38] Quy định công thức điều chỉnh giá chung chung.",
    newRule: "[Căn cứ: Điều 1 Khoản 12 NĐ 50/2021 sửa đổi Điều 38 NĐ 37/2015] Bổ sung chi tiết phương pháp điều chỉnh theo chỉ số giá xây dựng do Bộ Xây dựng hoặc UBND cấp tỉnh công bố; chỉ số giá vật liệu nào chưa có thì được xác định theo báo giá thị trường tại thời điểm thi công.",
    impactNote: "Cơ sở vàng giúp Kiểu Việt điều chỉnh tăng giá thanh toán cho các hạng mục đá dăm, cát đắp khi chỉ số giá tỉnh Gia Lai công bố tăng vọt."
  },
  {
    topic: "Quy định về thời hạn tạm ứng và thu hồi tiền tạm ứng hợp đồng xây dựng (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 37/2015 Điều 18] Thu hồi tạm ứng khi thanh toán đạt 80%.",
    newRule: "[Căn cứ: Điều 1 Khoản 5 NĐ 50/2021 sửa đổi Điều 18 NĐ 37/2015] Tiền tạm ứng được thu hồi dần qua các lần thanh toán giai đoạn; bắt đầu thu hồi khi khối lượng thanh toán hoàn thành đạt từ 20% đến 30% giá trị hợp đồng và thu hồi hết khi thanh toán đạt 80% giá trị hợp đồng.",
    impactNote: "Kế toán Kiểu Việt quản lý tiến độ giảm trừ tiền tạm ứng trên từng hóa đơn thanh toán A-B, bảo đảm dòng tiền thi công luôn dồi dào."
  },
  {
    topic: "Quy định về bảo lãnh tạm ứng hợp đồng xây dựng (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 37/2015] Nộp bảo lãnh bằng đúng số tiền tạm ứng.",
    newRule: "[Căn cứ: Điều 1 Khoản 5 NĐ 50/2021] Giá trị của bảo lãnh tạm ứng hợp đồng được giảm dần tương ứng với số tiền tạm ứng đã được thu hồi qua từng đợt thanh toán giai đoạn giữa hai bên.",
    impactNote: "Kiểu Việt làm thủ tục với Ngân hàng BIDV giảm dần hạn mức bảo lãnh tạm ứng theo từng đợt giải ngân, tiết kiệm hàng chục triệu đồng phí bảo lãnh ngân hàng."
  },
  {
    topic: "Quy định về xử lý hợp đồng khi có sự thay đổi chính sách pháp luật của Nhà nước (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 37/2015] Điều chỉnh khi pháp luật thay đổi làm tăng chi phí.",
    newRule: "[Căn cứ: Điều 1 Khoản 11 NĐ 50/2021] Khi Nhà nước thay đổi chính sách về thuế, tiền lương tối thiểu, phí bảo vệ môi trường khoáng sản làm thay đổi trực tiếp đến chi phí thực hiện hợp đồng thì được điều chỉnh giá hợp đồng xây dựng tương ứng.",
    impactNote: "Kiểu Việt được bù trừ bổ sung chi phí ngay khi Nhà nước tăng mức lương tối thiểu vùng hoặc tăng tiền cấp quyền khai thác khoáng sản."
  },
  {
    topic: "Thời gian nghiệm thu khối lượng công việc xây dựng hoàn thành không quá 10 ngày (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 37/2015] Không quy định số ngày cụ thể.",
    newRule: "[Căn cứ: Điều 1 Khoản 6 NĐ 50/2021 sửa đổi Điều 19 NĐ 37/2015] Trong thời hạn không quá 10 ngày làm việc kể từ ngày nhận được đề nghị nghiệm thu của nhà thầu, bên giao thầu phải tổ chức nghiệm thu khối lượng công việc hoàn thành; nếu không nghiệm thu phải trả lời bằng văn bản nêu rõ lý do.",
    impactNote: "Chấm dứt tình trạng ngâm hồ sơ nghiệm thu: Ban QLDA phải ký Biên bản nghiệm thu cho Kiểu Việt trong 10 ngày làm việc."
  },
  {
    topic: "Quy định về quản lý hợp đồng thầu phụ và trách nhiệm của Tổng thầu (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 37/2015] Tổng thầu tự chịu trách nhiệm.",
    newRule: "[Căn cứ: Điều 1 Khoản 14 NĐ 50/2021 sửa đổi Điều 47 NĐ 37/2015] Tổng thầu phải thông báo cho Chủ đầu tư danh sách các nhà thầu phụ kèm hợp đồng thầu phụ; nghiêm cấm hành vi chuyển nhượng thầu trái phép (bán thầu vượt quá tỷ lệ quy định).",
    impactNote: "Kiểu Việt trực tiếp tự thực hiện trên 80% khối lượng các gói thầu lớn, bảo đảm tuân thủ nghiêm ngặt quy định chống bán thầu."
  },
  {
    topic: "Quy định chi tiết hồ sơ điều chỉnh tiến độ hợp đồng xây dựng (Điều 1)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 37/2015] Hồ sơ tự lập.",
    newRule: "[Căn cứ: Điều 1 Khoản 13 NĐ 50/2021 sửa đổi Điều 39 NĐ 37/2015] Hồ sơ điều chỉnh tiến độ gồm: Văn bản đề nghị điều chỉnh của nhà thầu; nhật ký công trường chứng minh sự kiện chậm trễ; biên bản làm việc với tư vấn giám sát và phương án tiến độ điều chỉnh bù phụ.",
    impactNote: "Kỹ sư Kiểu Việt lập hồ sơ điều chỉnh tiến độ công trường chuẩn pháp lý, bảo đảm hợp đồng luôn có hiệu lực pháp lý thông suốt."
  },
  {
    topic: "Quy định về thời hạn hiệu lực của bảo đảm thực hiện hợp đồng (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 37/2015] Hiệu lực đến khi nghiệm thu công trình.",
    newRule: "[Căn cứ: Điều 1 Khoản 4 NĐ 50/2021 sửa đổi Điều 16 NĐ 37/2015] Bảo đảm thực hiện hợp đồng phải có hiệu lực cho đến khi công trình hoàn thành được nghiệm thu bàn giao và nhà thầu đã nộp bảo đảm bảo hành công trình.",
    impactNote: "Kiểu Việt theo dõi ngày hết hạn của Thư bảo lãnh thực hiện hợp đồng, chủ động gia hạn kịp thời tránh bị phạt vi phạm điều khoản tín dụng."
  },
  {
    topic: "Xử lý chi phí phát sinh ngoài phạm vi hợp đồng xây dựng ban đầu (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Lập dự toán mới.",
    newRule: "[Căn cứ: Điều 1 Khoản 11 NĐ 50/2021] Khối lượng phát sinh ngoài hợp đồng mà đã có đơn giá trong hợp đồng thì áp dụng đơn giá hợp đồng; công việc mới chưa có đơn giá thì Chủ đầu tư và nhà thầu thỏa thuận xác định đơn giá mới theo định mức của Bộ Xây dựng.",
    impactNote: "Kiểu Việt vận dụng định mức xây dựng hiện hành để lập đơn giá mới cho các hạng mục xử lý nền đất yếu phát sinh ngoài thiết kế ban đầu."
  },
  {
    topic: "Quy định về thanh toán khối lượng xây dựng hoàn thành khi chưa có quyết định phê duyệt điều chỉnh giá (Điều 1)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 37/2015] Phải chờ phê duyệt điều chỉnh giá mới được thanh toán.",
    newRule: "[Căn cứ: Điều 1 Khoản 6 NĐ 50/2021] Cho phép thanh toán tạm tính theo đơn giá hợp đồng ban đầu cho khối lượng đã nghiệm thu trong khi chờ cấp có thẩm quyền phê duyệt quyết định điều chỉnh giá mới.",
    impactNote: "Cực kỳ quan trọng: Giúp Kiểu Việt giải ngân dòng tiền liên tục mà không bị gián đoạn nguồn vốn thi công trong thời gian chờ duyệt bù giá."
  },
  {
    topic: "Hiệu lực thi hành của Nghị định 50/2021/NĐ-CP (Điều 2)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 37/2015/NĐ-CP] Quy định trước ngày 01/04/2021.",
    newRule: "[Căn cứ: Điều 2 NĐ 50/2021] Nghị định có hiệu lực thi hành từ ngày 01 tháng 04 năm 2021; tháo gỡ hàng loạt điểm nghẽn trong quản lý hợp đồng xây dựng tại Việt Nam.",
    impactNote: "Bảo bối pháp lý đồng hành giúp Công ty Cổ phần Kiểu Việt quản trị rủi ro hợp đồng và nâng cao hiệu quả thanh quyết toán dự án đầu tư công."
  }
];

// 11. nd-10-2021: 14 items
g4['nd-10-2021'].items = [
  {
    topic: "Phân định 04 phương pháp xác định Tổng mức đầu tư xây dựng (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 68/2019] Quy định 4 phương pháp chưa linh hoạt.",
    newRule: "[Căn cứ: Điều 6 NĐ 10/2021/NĐ-CP] Bốn phương pháp: Từ khối lượng xây dựng tính theo thiết kế cơ sở; từ số liệu dự án tương tự; theo suất vốn đầu tư xây dựng; và kết hợp các phương pháp.",
    impactNote: "Kiểu Việt tham chiếu Suất vốn đầu tư đường cao tốc của Bộ Xây dựng để lập phương án kinh doanh và thẩm định tính khả thi của các dự án hạ tầng lớn."
  },
  {
    topic: "Cơ cấu chi phí trong Dự toán xây dựng công trình gồm 06 thành phần chi phí (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 68/2019] Cơ cấu chi phí phức tạp.",
    newRule: "[Căn cứ: Điều 12 NĐ 10/2021] Dự toán gồm 6 khoản: Chi phí xây dựng (Gxd), Chi phí thiết bị (Gtb), Chi phí quản lý dự án (Gqlda), Chi phí tư vấn (Gtv), Chi phí khác (Gk) và Chi phí dự phòng (Gdp).",
    impactNote: "Phòng Đấu thầu & Kinh tế Kiểu Việt bóc tách chuẩn xác Chi phí xây dựng trực tiếp (VL, NC, M) và Chi phí gián tiếp trong giá thầu dự thi."
  },
  {
    topic: "Chi phí gián tiếp trong dự toán xây dựng: Chi phí chung, lán trại và công việc không xác định từ thiết kế (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Chi phí chung gộp chung.",
    newRule: "[Căn cứ: Điều 12 Khoản 2 Điểm b NĐ 10/2021] Chi phí gián tiếp gồm: Chi phí chung (quản lý doanh nghiệp); Chi phí nhà tạm để ở và điều hành thi công; Chi phí một số công việc không xác định được khối lượng từ thiết kế (an toàn lao động, thí nghiệm hiện trường).",
    impactNote: "Kiểu Việt lập dự toán thanh toán trọn vẹn chi phí xây dựng lán trại container và chi phí thí nghiệm nén mẫu bê tông hiện trường từ nguồn vốn dự án."
  },
  {
    topic: "Quy định về Định mức dự toán xây dựng mới và điều chỉnh định mức dự toán (Điều 21)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 68/2019 Điều 15] Quy định thỏa thuận định mức mới với Bộ Xây dựng rất phức tạp kéo dài.",
    newRule: "[Căn cứ: Điều 21 NĐ 10/2021] Chủ đầu tư tổ chức xác định định mức dự toán mới hoặc điều chỉnh định mức dự toán khi công nghệ thi công mới chưa có trong hệ thống định mức; lấy ý kiến cơ quan chuyên môn về xây dựng và quyết định áp dụng cho công trình.",
    impactNote: "Kiểu Việt chủ động đề xuất xây dựng định mức mới cho công nghệ cào bóc tái sinh nguội mặt đường bê tông nhựa và trạm nghiền đá di động."
  },
  {
    topic: "Quy định về Giá vật liệu xây dựng đến hiện trường công trình (Điều 26)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 68/2019] Tính theo thông báo giá của Liên sở.",
    newRule: "[Căn cứ: Điều 26 NĐ 10/2021] Giá vật liệu đến chân công trình = Giá tại nơi cung cấp/mỏ vật liệu + Chi phí vận chuyển đến công trình + Chi phí bốc xếp, trung chuyển (nếu có) + Chi phí hao hụt bảo quản.",
    impactNote: "Kiểu Việt tự chủ các mỏ đá, mỏ đất tại chỗ giúp giảm thiểu tối đa cự ly vận chuyển, tối ưu hóa giá thành thi công so với các nhà thầu phụ thuộc nguồn mua ngoài."
  },
  {
    topic: "Xác định Đơn giá nhân công xây dựng theo thị trường địa phương (Điều 26)",
    type: "modified",
    oldRule: "[Căn cứ: TT 15/2019] Đơn giá nhân công phân nhóm cứng nhắc.",
    newRule: "[Căn cứ: Điều 26 Khoản 4 NĐ 10/2021] Đơn giá nhân công xây dựng do UBND cấp tỉnh công bố phù hợp với giá thị trường lao động tại từng khu vực, tính đủ các chế độ phụ cấp lưu động, phụ cấp độc hại.",
    impactNote: "Kiểu Việt áp dụng bảng đơn giá nhân công mới nhất do Sở Xây dựng tỉnh Gia Lai ban hành để lập giá dự thầu sát với thực tế chi trả cho công nhân."
  },
  {
    topic: "Xác định Giá ca máy và thiết bị thi công xây dựng (Điều 26)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Giá ca máy theo bảng định mức cũ.",
    newRule: "[Căn cứ: Điều 26 Khoản 5 NĐ 10/2021] Giá ca máy gồm: Chi phí khấu hao, chi phí sửa chữa, chi phí nhiên liệu năng lượng, tiền lương thợ điều khiển máy và chi phí khác của máy.",
    impactNote: "Kiểu Việt cập nhật biến động giá dầu Diesel vào giá ca máy đào, máy ủi, bảo đảm tính toán bù giá nhiên liệu chính xác tuyệt đối."
  },
  {
    topic: "Thẩm quyền thẩm định, phê duyệt Dự toán xây dựng công trình (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 68/2019] Thẩm quyền phân cấp chồng chéo.",
    newRule: "[Căn cứ: Điều 13 NĐ 10/2021] Phân định rõ thẩm quyền thẩm định: Cơ quan chuyên môn về xây dựng thẩm định dự toán công trình sử dụng vốn đầu tư công; Chủ đầu tư phê duyệt dự toán sau khi có kết quả thẩm định.",
    impactNote: "Kiểu Việt phối hợp với Chủ đầu tư giải trình kỹ thuật và dự toán với Sở Xây dựng để nhanh chóng có Quyết định phê duyệt dự toán thi công."
  },
  {
    topic: "Quản lý Chi phí dự phòng: Dự phòng khối lượng phát sinh và Dự phòng trượt giá (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Tỷ lệ dự phòng tính cào bằng 10%.",
    newRule: "[Căn cứ: Điều 12 Khoản 2 Điểm e NĐ 10/2021] Chi phí dự phòng gồm: Dự phòng cho yếu tố khối lượng công việc phát sinh (5%) và Dự phòng cho yếu tố trượt giá (tính theo độ dài thời gian xây dựng và chỉ số giá xây dựng liên hoàn).",
    impactNote: "Khoản dự phòng trượt giá là nguồn ngân sách hợp pháp để Kiểu Việt đề nghị thanh toán bù giá vật liệu khi thị trường biến động mạnh."
  },
  {
    topic: "Quy định về suất vốn đầu tư và chỉ số giá xây dựng quốc gia, địa phương (Điều 27)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Chỉ số giá công bố rất chậm.",
    newRule: "[Căn cứ: Điều 27 NĐ 10/2021] Bộ Xây dựng công bố suất vốn đầu tư và chỉ số giá xây dựng quốc gia; UBND cấp tỉnh có trách nhiệm công bố chỉ số giá xây dựng địa phương định kỳ hàng quý hoặc hàng tháng.",
    impactNote: "Kiểu Việt tra cứu chỉ số giá xây dựng tỉnh Gia Lai hàng tháng để lập hồ sơ thanh toán trượt giá kịp thời."
  },
  {
    topic: "Chi phí thẩm tra, phê duyệt quyết toán vốn đầu tư dự án hoàn thành (Điều 35)",
    type: "modified",
    oldRule: "[Căn cứ: TT 09/2016] Định mức chi phí cũ.",
    newRule: "[Căn cứ: Điều 35 NĐ 10/2021 & NĐ 99/2021] Chi phí kiểm toán độc lập và chi phí thẩm tra phê duyệt quyết toán được tính theo tỷ lệ định mức trên tổng mức đầu tư được duyệt, trích từ tổng mức đầu tư của dự án.",
    impactNote: "Bảo đảm nguồn kinh phí chi trả cho công tác kiểm toán công trình mà không làm phát sinh thêm gánh nặng cho nhà thầu."
  },
  {
    topic: "Quy định về quản lý chi phí đầu tư xây dựng theo hình thức EPC, Chìa khóa trao tay (Điều 24)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 68/2019] Chưa có quy định chi tiết dự toán gói thầu EPC.",
    newRule: "[Căn cứ: Điều 24 NĐ 10/2021] Dự toán gói thầu EPC được xác định trên cơ sở thiết kế FEED hoặc thiết kế cơ sở; tổng thầu EPC tự chủ trong việc thiết kế chi tiết và mua sắm thiết bị trong phạm vi giá gói thầu.",
    impactNote: "Mở đường cho Kiểu Việt tiến lên nhận thầu các gói thầu tổng thầu thiết kế và thi công xây lắp (EC/EPC) quy mô lớn trong tương lai."
  },
  {
    topic: "Quy định cơ sở dữ liệu về định mức và giá xây dựng quốc gia (Điều 28)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Chưa có hệ thống CSDL tập trung.",
    newRule: "[Căn cứ: Điều 28 NĐ 10/2021] Xây dựng Hệ thống cơ sở dữ liệu quốc gia về định mức, giá xây dựng và chỉ số giá xây dựng công khai trên Cổng thông tin của Bộ Xây dựng để mọi chủ thể tra cứu minh bạch.",
    impactNote: "Kiểu Việt tích hợp trực tiếp dữ liệu định mức Bộ Xây dựng vào phần mềm dự toán nội bộ, nâng cao tốc độ lập hồ sơ dự thầu."
  },
  {
    topic: "Hiệu lực thi hành của Nghị định 10/2021/NĐ-CP (Điều 44)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 68/2019/NĐ-CP] Bãi bỏ toàn bộ.",
    newRule: "[Căn cứ: Điều 44 NĐ 10/2021] Nghị định có hiệu lực thi hành từ ngày 09 tháng 02 năm 2021; thay thế hoàn toàn Nghị định số 68/2019/NĐ-CP, mở ra kỷ nguyên mới quản lý chi phí xây dựng linh hoạt theo thị trường.",
    impactNote: "Văn bản cốt lõi định hình toàn bộ cơ cấu tài chính dự án, dự toán và giá thầu thi công xây dựng của Công ty Cổ phần Kiểu Việt."
  }
];

// Write updated group 4 back to file
const outputCode = `import { DecreeDiffData } from '../diff-types';\n\nexport const group4LaborSalaryContracts: Record<string, DecreeDiffData> = ` + JSON.stringify(g4, null, 2) + `;\n`;
fs.writeFileSync(g4Path, outputCode, 'utf8');
console.log('Group 4 Part 2 expanded! All 11 decrees in Group 4 are now fully completed with 10-14 items.');
