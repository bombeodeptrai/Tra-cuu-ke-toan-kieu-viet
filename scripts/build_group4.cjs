const fs = require('fs');

const group4 = {
  "blld-45-2019": {
    decreeId: "blld-45-2019",
    title: "Bộ luật Lao động số 45/2019/QH14",
    category: "Lao động & Tiền lương",
    compareWith: "Bộ luật Lao động số 10/2012/QH13",
    summary: "Cải cách lớn về quan hệ lao động: Tăng tuổi nghỉ hưu, thu hẹp còn 2 loại HĐLĐ (bãi bỏ HĐLĐ mùa vụ), công nhận HĐLĐ điện tử, quyền đơn phương chấm dứt HĐLĐ không cần lý do và nâng trần giờ làm thêm lên 40 giờ/tháng.",
    items: [
      {
        topic: "Bãi bỏ loại Hợp đồng lao động mùa vụ, chỉ còn 2 loại HĐLĐ",
        type: "modified",
        oldRule: "Quy định 3 loại HĐLĐ: Không xác định thời hạn, Xác định thời hạn (12-36 tháng) và Mùa vụ/theo công việc nhất định (dưới 12 tháng).",
        newRule: "Bãi bỏ hoàn toàn HĐLĐ mùa vụ. Chỉ còn 2 loại: Hợp đồng lao động không xác định thời hạn và Hợp đồng lao động xác định thời hạn (tối đa 36 tháng).",
        impactNote: "Kiểu Việt chuyển đổi toàn bộ nhân công thời vụ thi công công trình sang ký HĐLĐ xác định thời hạn hoặc hợp đồng khoán việc dịch vụ dân sự."
      },
      {
        topic: "Công nhận giá trị pháp lý của Hợp đồng lao động điện tử",
        type: "added",
        oldRule: "HĐLĐ bắt buộc phải được giao kết bằng văn bản giấy có chữ ký tươi của người lao động và người sử dụng lao động.",
        newRule: "Thừa nhận HĐLĐ được giao kết thông qua phương tiện điện tử dưới hình thức thông điệp dữ liệu có giá trị pháp lý như hợp đồng lao động bằng văn bản giấy.",
        impactNote: "Kiểu Việt ký hợp đồng lao động điện tử từ xa với các kỹ sư, cán bộ giám sát làm việc tại các công trường vùng sâu vùng xa."
      },
      {
        topic: "Quyền đơn phương chấm dứt HĐLĐ của người lao động không cần lý do",
        type: "modified",
        oldRule: "Người lao động muốn đơn phương chấm dứt HĐLĐ phải có một trong các lý do luật định (không được bố trí đúng việc, bị ngược đãi...).",
        newRule: "Người lao động có quyền đơn phương chấm dứt HĐLĐ mà không cần bất kỳ lý do gì, chỉ cần tuân thủ thời hạn báo trước (45 ngày với HĐ không xác định thời hạn, 30 ngày với HĐ xác định thời hạn).",
        impactNote: "Phòng Hành chính - Nhân sự Kiểu Việt chủ động xây dựng phương án nhân sự dự phòng cho các vị trí kỹ sư trọng yếu của dự án."
      },
      {
        topic: "Nâng giới hạn làm thêm giờ tối đa lên 40 giờ/tháng",
        type: "modified",
        oldRule: "Thời gian làm thêm giờ tối đa không quá 30 giờ trong 01 tháng và không quá 200 giờ trong 01 năm.",
        newRule: "Nâng số giờ làm thêm tối đa lên không quá 40 giờ trong 01 tháng; duy trì mức trần 200 giờ/năm (hoặc tối đa 300 giờ/năm đối với một số ngành nghề đặc thù xây dựng).",
        impactNote: "Kiểu Việt có cơ sở pháp lý để huy động kỹ sư, công nhân làm thêm giờ đẩy nhanh tiến độ thi công các công trình trước mùa mưa lũ."
      },
      {
        topic: "Tăng thêm 01 ngày nghỉ lễ Quốc khánh (Tổng cộng 11 ngày nghỉ lễ)",
        type: "added",
        oldRule: "Ngày Quốc khánh chỉ được nghỉ 01 ngày duy nhất là ngày 02 tháng 09 dương lịch.",
        newRule: "Người lao động được nghỉ 02 ngày nhân dịp Quốc khánh: Ngày 02 tháng 09 và 01 ngày liền kề trước hoặc sau do Thủ tướng Chính phủ quyết định hàng năm.",
        impactNote: "Kế toán Kiểu Việt lưu ý cách tính tiền lương làm thêm giờ vào ngày nghỉ lễ (tối thiểu 300% chưa kể tiền lương ngày lễ)."
      }
    ]
  },
  "nd-145-2020": {
    decreeId: "nd-145-2020",
    title: "Nghị định 145/2020/NĐ-CP",
    category: "Hướng dẫn Bộ luật Lao động",
    compareWith: "Nghị định 05/2015/NĐ-CP",
    summary: "Hướng dẫn chi tiết thi hành Bộ luật Lao động: Cách tính tiền lương làm thêm giờ ban đêm/ngày nghỉ, tính trợ cấp thôi việc, thủ tục đối thoại định kỳ và thời hạn giải quyết quyền lợi khi chấm dứt HĐLĐ trong 14 ngày làm việc.",
    items: [
      {
        topic: "Công thức chuẩn tính tiền lương làm thêm giờ và làm việc ban đêm",
        type: "modified",
        oldRule: "Cách tính lương làm thêm giờ dựa trên mức lương cấp bậc gây nhiều cách hiểu sai lệch trong thanh tra lao động.",
        newRule: "Quy định công thức tính dựa trên Tiền lương thực trả của công việc đang làm: Làm ngày thường (ít nhất 150%), ngày nghỉ hàng tuần (ít nhất 200%), ngày nghỉ lễ/tết (ít nhất 300%); làm ban đêm cộng thêm ít nhất 30% lương ngày và 20% lương giờ làm thêm ban ngày.",
        impactNote: "Kế toán tiền lương Kiểu Việt thiết lập công thức bảng lương Excel chuẩn xác theo đúng quy định tại Điều 55-57 NĐ 145."
      },
      {
        topic: "Căn cứ tính tiền trợ cấp thôi việc và trợ cấp mất việc làm",
        type: "modified",
        oldRule: "Tiền lương làm căn cứ tính trợ cấp là tiền lương ghi trên HĐLĐ bao gồm cả các khoản phụ cấp không ổn định.",
        newRule: "Tiền lương tính trợ cấp là tiền lương bình quân của 06 tháng liền kề theo hợp đồng lao động trước khi người lao động thôi việc hoặc mất việc làm.",
        impactNote: "Kiểu Việt tính toán chính xác nguồn quỹ dự phòng trợ cấp thôi việc cho những người lao động có thời gian làm việc trước năm 2009."
      },
      {
        topic: "Thời hạn thanh toán toàn bộ quyền lợi khi chấm dứt HĐLĐ (Tối đa 14 ngày làm việc)",
        type: "modified",
        oldRule: "Thời hạn thanh toán cũ là 07 ngày làm việc, có thể kéo dài không quá 30 ngày.",
        newRule: "Trong thời hạn 14 ngày làm việc kể từ ngày chấm dứt HĐLĐ, hai bên có trách nhiệm thanh toán đầy đủ các khoản tiền liên quan đến quyền lợi của mỗi bên (tiền lương, phép năm chưa nghỉ, trợ cấp).",
        impactNote: "Kiểu Việt chốt thanh toán dứt điểm tiền lương và trả sổ BHXH cho người lao động nghỉ việc trong vòng 14 ngày theo đúng luật định."
      },
      {
        topic: "Quy chế dân chủ và đối thoại định kỳ tại nơi làm việc",
        type: "added",
        oldRule: "Doanh nghiệp tổ chức đối thoại định kỳ 3 tháng một lần gây tốn kém thời gian và mang tính hình thức.",
        newRule: "Quy định tổ chức đối thoại tại nơi làm việc định kỳ ít nhất 01 năm một lần; hoặc khi có yêu cầu của một trong hai bên; hoặc khi có vụ việc bất thường.",
        impactNote: "Kiểu Việt tổ chức hội nghị người lao động và đối thoại định kỳ hàng năm hiệu quả, lắng nghe tâm tư của cán bộ kỹ thuật công trường."
      }
    ]
  },
  "nd-293-2025": {
    decreeId: "nd-293-2025",
    title: "Nghị định 293/2025/NĐ-CP",
    category: "Lương tối thiểu vùng (Hiệu lực 2026)",
    compareWith: "Nghị định 73/2024/NĐ-CP & 38/2022/NĐ-CP",
    summary: "Quy định mức lương tối thiểu vùng mới áp dụng cho toàn quốc từ năm 2026: Điều chỉnh tăng mức lương tối thiểu tháng và lương tối thiểu giờ cho cả 4 vùng, điều chỉnh mức trần đóng BHTN.",
    items: [
      {
        topic: "Cập nhật bảng mức lương tối thiểu vùng theo tháng mới áp dụng năm 2026",
        type: "modified",
        oldRule: "Áp dụng mức lương tối thiểu vùng cũ theo Nghị định 38/2022 (Vùng I: 4.68tr, Vùng II: 4.16tr, Vùng III: 3.64tr, Vùng IV: 3.25tr).",
        newRule: "Tăng mức lương tối thiểu vùng tháng áp dụng từ 2026: Vùng I (4.960.000 đ), Vùng II (4.410.000 đ), Vùng III (3.860.000 đ), Vùng IV (3.450.000 đ/tháng).",
        impactNote: "Kiểu Việt rà soát lại toàn bộ mức lương cơ bản trong HĐLĐ của công nhân tại các địa bàn dự án (Quy Nhơn, Gia Lai, Bình Định) để điều chỉnh không thấp hơn mức tối thiểu vùng mới."
      },
      {
        topic: "Quy định mức lương tối thiểu theo giờ tương ứng từng vùng",
        type: "modified",
        oldRule: "Mức lương tối thiểu giờ theo NĐ 38/2022 dao động từ 15.600 đ/h đến 22.500 đ/h.",
        newRule: "Điều chỉnh tăng mức lương tối thiểu giờ: Vùng I: 23.800 đ/giờ; Vùng II: 21.200 đ/giờ; Vùng III: 18.600 đ/giờ; Vùng IV: 16.600 đ/giờ.",
        impactNote: "Cơ sở để Kiểu Việt tính toán tiền công cho các vị trí bảo vệ công trường, nhân công bốc dỡ vật tư làm việc bán thời gian theo giờ."
      },
      {
        topic: "Tăng mức trần đóng Bảo hiểm thất nghiệp (BHTN)",
        type: "modified",
        oldRule: "Mức trần đóng BHTN tính bằng 20 lần mức lương tối thiểu vùng cũ.",
        newRule: "Mức tiền lương tối đa để đóng BHTN bằng 20 lần mức lương tối thiểu vùng mới (Vùng I tối đa lên đến 99.200.000 đồng/tháng).",
        impactNote: "Kiểu Việt điều chỉnh phần mềm nhân sự tiền lương để tính toán chính xác mức trần đóng BHTN 1% cho cán bộ quản lý cấp cao."
      },
      {
        topic: "Nguyên tắc trả lương cho lao động đã qua đào tạo nghề (+7%)",
        type: "modified",
        oldRule: "Nghị định 38/2022 bỏ quy định bắt buộc phải trả cao hơn ít nhất 7% đối với lao động đã qua đào tạo nghề.",
        newRule: "Khuyến khích và duy trì thỏa thuận trong Thỏa ước lao động tập thể: Người lao động làm công việc đòi hỏi đã qua đào tạo, học nghề phải được trả lương cao hơn ít nhất 7% so với mức lương tối thiểu vùng.",
        impactNote: "Kiểu Việt duy trì chính sách trả lương cao hơn 7-15% cho thợ hàn công nghệ cao, thợ điện và lái máy xúc có chứng chỉ nghề."
      }
    ]
  },
  "nd-73-2024": {
    decreeId: "nd-73-2024",
    title: "Nghị định 73/2024/NĐ-CP",
    category: "Lương cơ sở & Mức trần BHXH",
    compareWith: "Nghị định 24/2023/NĐ-CP",
    summary: "Tăng mức lương cơ sở lịch sử từ 1.800.000 đồng lên 2.340.000 đồng/tháng (tăng 30%), nâng trần đóng BHXH/BHYT bắt buộc lên 46.800.000 đồng/tháng và tăng toàn bộ các chế độ trợ cấp BHXH.",
    items: [
      {
        topic: "Tăng mức lương cơ sở từ 1.800.000 đ lên 2.340.000 đ/tháng (Tăng 30%)",
        type: "modified",
        oldRule: "Mức lương cơ sở áp dụng từ 01/07/2023 là 1.800.000 đồng/tháng theo Nghị định 24/2023.",
        newRule: "Nâng mức lương cơ sở lên 2.340.000 đồng/tháng áp dụng chính thức từ ngày 01/07/2024 (mức tăng cao nhất trong lịch sử cải cách tiền lương).",
        impactNote: "Tác động tức thì đến toàn bộ các khoản đóng BHXH, BHYT và chế độ trợ cấp ốm đau, thai sản của cán bộ nhân viên Kiểu Việt."
      },
      {
        topic: "Nâng mức trần đóng BHXH và BHYT bắt buộc lên 46.800.000 đ/tháng",
        type: "modified",
        oldRule: "Mức tiền lương tháng đóng BHXH, BHYT tối đa bằng 20 lần lương cơ sở cũ = 36.000.000 đồng/tháng.",
        newRule: "Mức tiền lương tháng đóng BHXH, BHYT bắt buộc tối đa bằng 20 lần lương cơ sở 2.340.000 đ = 46.800.000 đồng/tháng.",
        impactNote: "Kiểu Việt và người lao động có mức lương trên 36 triệu phải đóng tăng thêm bảo hiểm: Doanh nghiệp đóng thêm tối đa 2.214.000 đ/tháng (20.5%), người lao động đóng thêm 1.026.000 đ/tháng (9.5%)."
      },
      {
        topic: "Tăng mức trợ cấp thai sản 1 lần khi sinh con lên 4.680.000 đ",
        type: "modified",
        oldRule: "Mức trợ cấp 1 lần khi sinh con bằng 2 lần lương cơ sở cũ = 3.600.000 đồng/con.",
        newRule: "Mức trợ cấp 1 lần cho mỗi con sinh ra bằng 2 lần lương cơ sở mới = 4.680.000 đồng (tăng thêm 1.080.000 đồng).",
        impactNote: "Kế toán Kiểu Việt hoàn thiện hồ sơ thanh toán chế độ thai sản để người lao động nhận đủ quyền lợi tăng thêm từ cơ quan BHXH."
      },
      {
        topic: "Tăng mức trợ cấp mai táng phí lên 23.400.000 đ",
        type: "modified",
        oldRule: "Trợ cấp mai táng bằng 10 lần lương cơ sở cũ = 18.000.000 đồng.",
        newRule: "Trợ cấp mai táng bằng 10 lần lương cơ sở mới = 23.400.000 đồng (tăng thêm 5.400.000 đồng) khi người lao động qua đời.",
        impactNote: "Bảo đảm các chế độ an sinh xã hội cho thân nhân người lao động không may gặp rủi ro."
      }
    ]
  },
  "luat-41-2024": {
    decreeId: "luat-41-2024",
    title: "Luật Bảo hiểm xã hội số 41/2024/QH15",
    category: "Luật Bảo hiểm xã hội (Mới)",
    compareWith: "Luật Bảo hiểm xã hội số 58/2014/QH13",
    summary: "Cải cách lớn về an sinh xã hội: Giảm số năm đóng BHXH tối thiểu để hưởng lương hưu từ 20 năm xuống 15 năm, siết chặt rút BHXH 1 lần, bổ sung chế tài hình sự đối với hành vi trốn đóng BHXH và bổ sung trợ cấp hưu trí xã hội.",
    items: [
      {
        topic: "Giảm thời gian đóng BHXH tối thiểu để hưởng lương hưu xuống 15 năm",
        type: "modified",
        oldRule: "Người lao động phải có đủ ít nhất 20 năm đóng BHXH trở lên mới đủ điều kiện hưởng lương hưu hàng tháng khi đủ tuổi.",
        newRule: "Giảm điều kiện thời gian đóng BHXH tối thiểu xuống 15 năm là đã đủ điều kiện hưởng lương hưu khi đến tuổi nghỉ hưu.",
        impactNote: "Tạo động lực rất lớn cho những công nhân, lao động cao tuổi tại Kiểu Việt tiếp tục tham gia BHXH để có lương hưu dưỡng già."
      },
      {
        topic: "Chế tài xử lý nghiêm minh hành vi Chậm đóng và Trốn đóng BHXH",
        type: "added",
        oldRule: "Hành vi chậm đóng BHXH chỉ bị phạt tiền lãi chậm nộp thông thường, doanh nghiệp thường xuyên nợ đọng kéo dài.",
        newRule: "Quy định rõ ràng hành vi trốn đóng BHXH; doanh nghiệp trốn đóng sẽ bị tính tiền lãi chậm nộp 0.03%/ngày, bị phạt hành chính nặng, hoãn xuất cảnh người đại diện pháp luật và chuyển hồ sơ khởi tố hình sự theo Điều 216 Bộ luật Hình sự.",
        impactNote: "Nhắc nhở bộ phận tài chính Kiểu Việt: Luôn ưu tiên trích nộp tiền BHXH hàng tháng đúng hạn, tuyệt đối không để phát sinh nợ đọng."
      },
      {
        topic: "Quy định mới về điều kiện rút BHXH một lần",
        type: "modified",
        oldRule: "Sau 1 năm nghỉ việc không tiếp tục đóng BHXH là người lao động được rút BHXH 1 lần toàn bộ.",
        newRule: "Người lao động bắt đầu tham gia BHXH sau ngày Luật có hiệu lực không được rút BHXH 1 lần nếu không thuộc các trường hợp đặc biệt (định cư nước ngoài, mắc bệnh hiểm nghèo).",
        impactNote: "Phòng nhân sự Kiểu Việt tuyên truyền giải thích cho người lao động hiểu rõ lợi ích của việc tích lũy thời gian đóng để hưởng lương hưu."
      },
      {
        topic: "Mở rộng đối tượng tham gia BHXH bắt buộc đối với chủ hộ kinh doanh, quản lý",
        type: "added",
        oldRule: "Chủ hộ kinh doanh cá thể, người quản lý doanh nghiệp không hưởng lương không thuộc diện tham gia BHXH bắt buộc.",
        newRule: "Mở rộng diện tham gia BHXH bắt buộc đối với: Chủ hộ kinh doanh, người quản lý doanh nghiệp, kiểm soát viên, người đại diện phần vốn nhà nước.",
        impactNote: "Kiểu Việt đăng ký tham gia BHXH bắt buộc cho các thành viên HĐQT và ban kiểm soát theo đúng quy định mới."
      }
    ]
  },
  "qd-595-2017-bhxh": {
    decreeId: "qd-595-2017-bhxh",
    title: "Quyết định 595/QĐ-BHXH",
    category: "Quy trình thu BHXH, BHYT, BHTN",
    compareWith: "Quyết định 959/QĐ-BHXH",
    summary: "Quy trình thu và quản lý sổ BHXH, thẻ BHYT toàn quốc: Ban hành Mẫu D02-LT (báo tăng giảm lao động), chuẩn hóa tỷ lệ trích nộp doanh nghiệp 21.5% và người lao động 10.5%, mã số BHXH đồng bộ CCCD.",
    items: [
      {
        topic: "Tỷ lệ trích nộp các quỹ BHXH, BHYT, BHTN chuẩn",
        type: "modified",
        oldRule: "Tỷ lệ trích nộp phân bổ ở nhiều văn bản riêng lẻ của từng ngành.",
        newRule: "Chuẩn hóa tỷ lệ trích nộp tổng cộng 32%: Doanh nghiệp đóng 21.5% (Hưu trí tử tuất 14%, Ốm đau thai sản 3%, Tai nạn lao động 0.5%, BHYT 3%, BHTN 1%); Người lao động đóng 10.5% (Hưu trí 8%, BHYT 1.5%, BHTN 1%).",
        impactNote: "Kế toán tiền lương Kiểu Việt thiết lập tỷ lệ trích nộp chuẩn vào chi phí (Nợ 154/642 Có 338) và trừ lương (Nợ 334 Có 338) chính xác 100%."
      },
      {
        topic: "Mẫu biểu báo biến động lao động chuẩn Mẫu D02-LT",
        type: "added",
        oldRule: "Sử dụng Mẫu D02-TS với nhiều cột thông tin kê khai thủ công dễ sai sót.",
        newRule: "Ban hành Mẫu D02-LT (Danh sách lao động tham gia BHXH, BHYT, BHTN) kê khai điện tử tích hợp chữ ký số nộp qua phần mềm IVAN.",
        impactNote: "Kiểu Việt thực hiện báo tăng khi tiếp nhận nhân sự mới và báo giảm khi chấm dứt HĐLĐ ngay trong tháng để không bị truy thu lãi bảo hiểm."
      },
      {
        topic: "Mã số BHXH duy nhất đồng bộ với Căn cước công dân gắn chip",
        type: "modified",
        oldRule: "Mỗi người lao động có thể có nhiều sổ BHXH khác nhau do thay đổi nơi làm việc.",
        newRule: "Cấp duy nhất 01 mã số BHXH gồm 10 chữ số gắn liền với số định danh cá nhân / CCCD của người lao động suốt đời.",
        impactNote: "Kiểu Việt hỗ trợ công nhân gộp các sổ BHXH cũ về một mã số định danh duy nhất trên ứng dụng VssID."
      },
      {
        topic: "Quy trình hoàn trả tiền bảo hiểm nộp thừa hoặc thoái thu",
        type: "added",
        oldRule: "Thủ tục thoái thu tiền BHXH do báo giảm chậm rất phức tạp và phải giải trình nhiều cấp.",
        newRule: "Quy định thời hạn cơ quan BHXH phải hoàn trả tiền đóng thừa hoặc bù trừ vào kỳ thu tiếp theo trong vòng tối đa 05 ngày làm việc.",
        impactNote: "Bảo đảm số tiền bảo hiểm nộp thừa của Kiểu Việt được cơ quan BHXH đối soát hoàn trả kịp thời."
      }
    ]
  },
  "nd-12-2022": {
    decreeId: "nd-12-2022",
    title: "Nghị định 12/2022/NĐ-CP",
    category: "Xử phạt vi phạm hành chính Lao động & BHXH",
    compareWith: "Nghị định 28/2020/NĐ-CP",
    summary: "Quy định xử phạt vi phạm hành chính trong lĩnh vực lao động và bảo hiểm xã hội: Tăng mạnh tiền phạt vi phạm hợp đồng lao động, chậm đóng BHXH phạt đến 15% số tiền nợ, vi phạm an toàn lao động công trường phạt đến 50 triệu đồng.",
    items: [
      {
        topic: "Phạt hành vi không giao kết HĐLĐ bằng văn bản",
        type: "modified",
        oldRule: "Mức phạt nhẹ từ 1 đến 5 triệu đồng đối với vi phạm dưới 10 lao động.",
        newRule: "Phạt tiền từ 2.000.000 đến 25.000.000 đồng đối với người sử dụng lao động không giao kết HĐLĐ bằng văn bản; mức phạt tăng dần theo số lượng lao động vi phạm.",
        impactNote: "Kiểu Việt ký hợp đồng lao động 100% với toàn bộ nhân công trước khi bố trí vào công trường làm việc, cấm tuyệt đối việc sử dụng lao động không hợp đồng."
      },
      {
        topic: "Phạt hành vi chậm đóng, đóng không đủ số người tham gia BHXH",
        type: "modified",
        oldRule: "Chỉ xử phạt mức tiền cố định mà không căn cứ vào tỷ lệ số tiền nợ BHXH.",
        newRule: "Phạt tiền từ 12% đến 15% tổng số tiền phải đóng BHXH bắt buộc tại thời điểm lập biên bản vi phạm (tối đa không quá 75.000.000 đồng).",
        impactNote: "Kiểu Việt không bao giờ để nợ đọng bảo hiểm để tránh bị xử phạt 15% trên tổng số tiền nợ kèm theo tiền lãi chậm nộp."
      },
      {
        topic: "Phạt vi phạm quy định về an toàn vệ sinh lao động tại công trường",
        type: "added",
        oldRule: "Chưa quy định chi tiết các lỗi an toàn xây dựng (giàn giáo, lưới an toàn, đồ bảo hộ).",
        newRule: "Phạt tiền từ 20.000.000 đến 50.000.000 đồng đối với hành vi không trang bị đầy đủ phương tiện bảo hộ lao động cho công nhân làm việc trên cao; đình chỉ thi công công trình nếu có nguy cơ gây tai nạn nghiêm trọng.",
        impactNote: "Chỉ huy trưởng các công trường Kiểu Việt bắt buộc kiểm tra 100% công nhân đeo dây an toàn, đội mũ bảo hộ trước khi bước vào công trường."
      },
      {
        topic: "Phạt hành vi giữ bản chính giấy tờ tùy thân của người lao động",
        type: "added",
        oldRule: "Doanh nghiệp thường giữ CCCD gốc hoặc bằng cấp gốc của người lao động để làm tin.",
        newRule: "Phạt tiền từ 20.000.000 đến 25.000.000 đồng đối với hành vi giữ bản chính giấy tờ tùy thân, văn bằng, chứng chỉ của người lao động.",
        impactNote: "Kiểu Việt chỉ lưu giữ bản sao chứng thực CCCD và bằng cấp, hoàn trả ngay bản chính sau khi đối chiếu hồ sơ tuyển dụng."
      }
    ]
  },
  "nd-37-2015": {
    decreeId: "nd-37-2015",
    title: "Nghị định 37/2015/NĐ-CP",
    category: "Hợp đồng xây dựng",
    compareWith: "Nghị định 48/2010/NĐ-CP",
    summary: "Xương sống pháp lý cho toàn bộ các hợp đồng thi công xây dựng tại Việt Nam: Quy định 4 loại giá hợp đồng, tỷ lệ bảo lãnh thực hiện hợp đồng (2-10%), thời hạn thanh toán không quá 14 ngày làm việc và mức phạt vi phạm tối đa 12%.",
    items: [
      {
        topic: "Quy định 4 loại giá hợp đồng xây dựng",
        type: "modified",
        oldRule: "Chưa phân định rạch ròi cơ chế điều chỉnh giá khi có biến động vật liệu xây dựng.",
        newRule: "Quy định chuẩn 4 loại giá: Hợp đồng trọn gói; Hợp đồng theo đơn giá cố định; Hợp đồng theo đơn giá điều chỉnh; và Hợp đồng theo giá kết hợp.",
        impactNote: "Kiểu Việt đàm phán áp dụng loại Hợp đồng theo đơn giá điều chỉnh đối với các công trình thi công dài hạn để phòng ngừa rủi ro trượt giá sắt thép, cát đá."
      },
      {
        topic: "Bảo lãnh thực hiện hợp đồng xây dựng (Tỷ lệ 2% - 10%)",
        type: "added",
        oldRule: "Tỷ lệ bảo lãnh do các bên tự thỏa thuận, nhiều chủ đầu tư đòi hỏi mức bảo lãnh quá cao gây khó khăn vốn.",
        newRule: "Quy định bắt buộc tỷ lệ bảo lãnh thực hiện hợp đồng từ 2% đến 10% giá hợp đồng; có hiệu lực từ ngày ký hợp đồng cho đến ngày công trình được nghiệm thu bàn giao đưa vào sử dụng.",
        impactNote: "Kiểu Việt làm việc với ngân hàng phát hành thư bảo lãnh hợp đồng với chi phí bảo lãnh thấp nhất để nộp cho Chủ đầu tư."
      },
      {
        topic: "Thời hạn thanh toán khối lượng hoàn thành không quá 14 ngày làm việc",
        type: "added",
        oldRule: "Chủ đầu tư thường kéo dài thời gian thanh toán công nợ xây lắp hàng tháng, hàng năm mà không có chế tài.",
        newRule: "Trong thời hạn không quá 14 ngày làm việc kể từ ngày nhận đủ hồ sơ thanh toán hợp lệ (Mẫu 03a và hóa đơn), bên giao thầu phải thanh toán cho bên nhận thầu.",
        impactNote: "Kiểu Việt có cơ sở pháp lý vững chắc để gửi công văn yêu cầu Chủ đầu tư thanh toán đúng hạn và tính lãi chậm trả nếu quá 14 ngày."
      },
      {
        topic: "Mức phạt vi phạm hợp đồng xây dựng tối đa 12% giá trị vi phạm",
        type: "modified",
        oldRule: "Nhiều hợp đồng quy định mức phạt vi phạm chậm tiến độ không giới hạn dẫn đến tranh chấp lớn.",
        newRule: "Mức phạt vi phạm hợp đồng do các bên thỏa thuận nhưng đối với công trình vốn nhà nước, mức phạt tối đa không vượt quá 12% giá trị phần hợp đồng bị vi phạm.",
        impactNote: "Giúp Kiểu Việt giới hạn tối đa rủi ro tài chính khi gặp sự cố bất khả kháng về thời tiết làm chậm tiến độ thi công."
      }
    ]
  },
  "nd-50-2021": {
    decreeId: "nd-50-2021",
    title: "Nghị định 50/2021/NĐ-CP",
    category: "Hợp đồng xây dựng (Sửa đổi)",
    compareWith: "Nghị định 37/2015/NĐ-CP",
    summary: "Sửa đổi, bổ sung Nghị định 37/2015/NĐ-CP: Nâng mức tạm ứng hợp đồng xây dựng tối đa lên đến 50% giá trị hợp đồng, quy định giảm dần giá trị bảo lãnh tạm ứng và cơ chế điều chỉnh giá hợp đồng do bão lũ.",
    items: [
      {
        topic: "Nâng mức tạm ứng hợp đồng xây dựng tối đa lên đến 50% giá trị hợp đồng",
        type: "modified",
        oldRule: "Mức tạm ứng hợp đồng xây dựng thi công thường chỉ được khống chế ở mức 20% đến 30% giá trị hợp đồng.",
        newRule: "Cho phép mức tạm ứng tối đa lên đến 50% giá trị hợp đồng xây dựng (đối với các gói thầu xây dựng quy mô lớn, hợp đồng EPC hoặc dự án cấp bách).",
        impactNote: "Kiểu Việt tiếp cận được nguồn vốn tạm ứng dồi dào từ Chủ đầu tư lên tới 50% ngay sau khi ký hợp đồng để tập kết vật tư sắt thép khối lượng lớn với giá rẻ."
      },
      {
        topic: "Cơ chế giảm dần giá trị thư bảo lãnh tạm ứng tương ứng giá trị thu hồi",
        type: "added",
        oldRule: "Doanh nghiệp phải duy trì nguyên giá trị bảo lãnh tạm ứng suốt thời gian thực hiện hợp đồng gây phong tỏa hạn mức tín dụng.",
        newRule: "Quy định giá trị bảo lãnh tiền tạm ứng sẽ được giảm trừ tương ứng với số tiền tạm ứng mà chủ đầu tư đã thu hồi qua các đợt thanh toán khối lượng hoàn thành.",
        impactNote: "Kiểu Việt yêu cầu ngân hàng giải phóng dần hạn mức bảo lãnh sau mỗi đợt nghiệm thu A-B, giải phóng hạn mức tín dụng để tham gia đấu thầu dự án mới."
      },
      {
        topic: "Điều chỉnh đơn giá và giá hợp đồng do biến động vật liệu xây dựng",
        type: "modified",
        oldRule: "Thủ tục xin điều chỉnh giá hợp đồng do trượt giá vật liệu rất phức tạp và kéo dài nhiều cấp phê duyệt.",
        newRule: "Quy định công thức điều chỉnh giá cụ thể căn cứ vào Chỉ số giá xây dựng do Sở Xây dựng công bố và các tài liệu chứng minh biến động giá khách quan.",
        impactNote: "Kiểu Việt lập phụ lục điều chỉnh tăng giá hợp đồng thi công khi giá thép, xi măng tăng đột biến, bảo toàn lợi nhuận dự án."
      },
      {
        topic: "Đơn giản hóa hồ sơ quyết toán vốn hợp đồng xây dựng hoàn thành",
        type: "modified",
        oldRule: "Hồ sơ quyết toán vốn phải nộp hàng chục loại biểu mẫu kiểm toán độc lập tốn kém thời gian.",
        newRule: "Chuẩn hóa danh mục hồ sơ quyết toán hợp đồng xây dựng tinh gọn, xác định trách nhiệm của bên giao thầu phải phê duyệt quyết toán trong thời hạn luật định.",
        impactNote: "Rút ngắn thời gian thu hồi 5% bảo hành và công nợ tồn đọng cuối cùng của các dự án xây dựng Kiểu Việt đã bàn giao."
      }
    ]
  },
  "nd-10-2021": {
    decreeId: "nd-10-2021",
    title: "Nghị định 10/2021/NĐ-CP",
    category: "Quản lý chi phí đầu tư xây dựng",
    compareWith: "Nghị định 68/2019/NĐ-CP",
    summary: "Quy chuẩn quản lý chi phí đầu tư xây dựng: Sơ bộ tổng mức đầu tư, định mức kinh tế - kỹ thuật, phương pháp xác định giá ca máy thi công và trách nhiệm công bố chỉ số giá xây dựng hàng tháng của địa phương.",
    items: [
      {
        topic: "Phân định rõ các giai đoạn quản lý chi phí đầu tư xây dựng",
        type: "modified",
        oldRule: "Dự toán xây dựng công trình và tổng mức đầu tư thường thiếu tính cập nhật theo biến động giá thị trường.",
        newRule: "Quản lý chi phí chặt chẽ qua từng giai đoạn: Sơ bộ tổng mức đầu tư (Báo cáo nghiên cứu tiền khả thi) -> Tổng mức đầu tư (Báo cáo F/S) -> Dự toán xây dựng công trình -> Dự toán gói thầu -> Giá hợp đồng xây dựng.",
        impactNote: "Kiểu Việt kiểm soát chi phí đấu thầu bám sát dự toán gói thầu được duyệt, bảo đảm trúng thầu với biên lợi nhuận an toàn."
      },
      {
        topic: "Phương pháp xác định Định mức kinh tế - kỹ thuật và Giá xây dựng",
        type: "modified",
        oldRule: "Áp dụng cứng nhắc các bộ định mức nhà nước cũ đã lỗi thời, không phản ánh công nghệ thi công hiện đại.",
        newRule: "Cho phép chủ đầu tư và nhà thầu khảo sát, xây dựng định mức dự toán mới hoặc điều chỉnh định mức dự toán đối với các công nghệ thi công mới chưa có trong hệ thống định mức.",
        impactNote: "Kiểu Việt đề xuất áp dụng các định mức thi công cọc ép thủy lực và phụ gia bê tông đông kết nhanh để tối ưu hóa dự toán công trình."
      },
      {
        topic: "Cách tính giá ca máy và thiết bị thi công xây dựng",
        type: "modified",
        oldRule: "Giá ca máy tính theo bảng giá chuẩn cố định, không bù trừ kịp thời biến động giá dầu diesel và tiền lương thợ lái máy.",
        newRule: "Ban hành phương pháp xác định giá ca máy phản ánh đủ 5 thành phần chi phí: Khấu hao, sửa chữa, nhiên liệu năng lượng, tiền lương thợ điều khiển máy và chi phí khác theo giá thị trường thời điểm lập dự toán.",
        impactNote: "Kế toán Kiểu Việt tính toán chính xác chi phí vận hành máy xúc, xe cẩu thi công thực tế tại công trường để bù giá ca máy."
      },
      {
        topic: "Trách nhiệm công bố giá vật liệu và chỉ số giá xây dựng định kỳ",
        type: "added",
        oldRule: "Nhiều địa phương công bố giá vật liệu chậm 3 - 6 tháng khiến nhà thầu bị lỗ nặng vì bão giá vật tư.",
        newRule: "Quy định UBND cấp tỉnh có trách nhiệm chỉ đạo Sở Xây dựng công bố giá vật liệu xây dựng, đơn giá nhân công và chỉ số giá xây dựng định kỳ hàng tháng, hàng quý bám sát thị trường.",
        impactNote: "Kiểu Việt cập nhật kịp thời công bố giá vật liệu của Sở Xây dựng Bình Định, Gia Lai để làm căn cứ điều chỉnh giá hợp đồng A-B."
      }
    ]
  },
  "tt-45-2013": {
    decreeId: "tt-45-2013",
    title: "Thông tư 45/2013/TT-BTC",
    category: "Chế độ quản lý & Khấu hao TSCĐ",
    compareWith: "Thông tư 203/2009/TT-BTC",
    summary: "Cẩm nang quản trị Tài sản cố định: Nâng tiêu chuẩn nguyên giá lên 30 triệu đồng, quy định điều kiện trích khấu hao nhanh tối đa 2 lần, khống chế xe ô tô 1.6 tỷ và khung thời gian khấu hao chuẩn các loại máy móc thi công.",
    items: [
      {
        topic: "Nâng tiêu chuẩn nguyên giá ghi nhận TSCĐ lên từ 30.000.000 đồng trở lên",
        type: "modified",
        oldRule: "Tài sản có giá trị từ 10.000.000 đồng trở lên và thời gian sử dụng trên 1 năm đã phải theo dõi là TSCĐ.",
        newRule: "Nâng mức nguyên giá lên từ 30.000.000 đồng trở lên đồng thời có thời gian sử dụng trên 1 năm mới đủ điều kiện ghi nhận là TSCĐ.",
        impactNote: "Các máy móc công trường dưới 30 triệu (máy đầm cóc, máy hàn, máy cắt sắt...) Kiểu Việt đưa thẳng vào Công cụ dụng cụ (TK 242) phân bổ dần tối đa 3 năm, giảm bớt thủ tục theo dõi TSCĐ."
      },
      {
        topic: "Điều kiện trích khấu hao nhanh tối đa 2 lần cho máy móc thiết bị",
        type: "added",
        oldRule: "Chủ yếu áp dụng phương pháp khấu hao đường thẳng, điều kiện khấu hao nhanh rất khắt khe.",
        newRule: "Doanh nghiệp hoạt động có hiệu quả kinh tế cao được quyền trích khấu hao nhanh tối đa không quá 2 lần mức khấu hao đường thẳng đối với máy móc, thiết bị công nghệ cao để nhanh chóng đổi mới thiết bị.",
        impactNote: "Kiểu Việt tận dụng quyền trích khấu hao nhanh cho dàn xe lu, máy đào mới trong những năm có lợi nhuận thầu xây dựng cao để giảm thuế TNDN hợp pháp."
      },
      {
        topic: "Khống chế trần nguyên giá xe ô tô 9 chỗ ngồi trở xuống (1.6 tỷ đồng)",
        type: "modified",
        oldRule: "Cho phép tính vào chi phí được trừ toàn bộ chi phí khấu hao của xe ô tô chở người bất kể nguyên giá.",
        newRule: "Đối với xe ô tô chở người từ 9 chỗ ngồi trở xuống (không dùng kinh doanh vận tải, du lịch), phần nguyên giá vượt trên 1.6 tỷ đồng thì phần trích khấu hao tương ứng không được tính vào chi phí được trừ khi xác định thuế TNDN.",
        impactNote: "Kiểu Việt hạch toán kế toán toàn bộ khấu hao xe cơ quan vào sổ sách (TK 642) nhưng loại trừ phần khấu hao vượt 1.6 tỷ tại chỉ tiêu B4 khi quyết toán thuế TNDN."
      },
      {
        topic: "Khung thời gian trích khấu hao chuẩn cho máy móc thi công xây dựng",
        type: "modified",
        oldRule: "Khung thời gian khấu hao cũ rộng và thiếu phân loại chi tiết các dòng máy móc công trình nặng.",
        newRule: "Ban hành Phụ lục 1 quy định khung năm chuẩn: Máy móc thi công xây dựng (5 - 10 năm), Phương tiện vận tải đường bộ (6 - 10 năm), Nhà cửa vật kiến trúc (10 - 50 năm), Thiết bị đo lường thí nghiệm (3 - 8 năm).",
        impactNote: "Kế toán Kiểu Việt đăng ký khung khấu hao xe máy thi công với Chi cục Thuế theo đúng khung chuẩn để chi phí khấu hao được chấp thuận 100%."
      },
      {
        topic: "Xử lý chi phí nâng cấp và sửa chữa lớn TSCĐ",
        type: "modified",
        oldRule: "Mọi khoản chi phí sửa chữa lớn đều phải ghi tăng nguyên giá TSCĐ (vốn hóa).",
        newRule: "Chi phí sửa chữa TSCĐ nhằm duy trì hoạt động bình thường không được ghi tăng nguyên giá mà phân bổ vào chi phí SXKD tối đa 3 năm; chỉ ghi tăng nguyên giá nếu việc nâng cấp làm tăng công suất hoặc kéo dài tuổi thọ sử dụng.",
        impactNote: "Kiểu Việt phân bổ chi phí đại tu động cơ máy xúc, thay lốp xe tải qua TK 242 trong 2-3 năm, không cần làm thủ tục tăng nguyên giá phức tạp."
      }
    ]
  }
};

const code = `import { DecreeDiffData } from '../diff-types';

export const group4LaborSalaryContracts: Record<string, DecreeDiffData> = ${JSON.stringify(group4, null, 2)};
`;

fs.writeFileSync('src/data/diffs/group4_labor_salary_contracts.ts', code, 'utf8');
console.log('Group 4 generated successfully (11 decrees).');
