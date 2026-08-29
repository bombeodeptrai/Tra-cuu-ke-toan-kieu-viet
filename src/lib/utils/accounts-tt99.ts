export interface AccountTT99 {
  code: string;
  name: string;
  type: string;
  description: string;
}

export const CHART_OF_ACCOUNTS_TT99: AccountModel[] = [
  // =========================================================================
  // LOẠI 1: TÀI SẢN NGẮN HẠN
  // =========================================================================
  {
    code: "111",
    name: "Tiền mặt",
    type: "Tài sản",
    description: "Phản ánh số hiện có và tình hình biến động tăng, giảm của các loại tiền mặt tại quỹ của doanh nghiệp bao gồm tiền Việt Nam, ngoại tệ và vàng tiền tệ."
  },
  {
    code: "1111",
    name: "Tiền Việt Nam",
    type: "Tài sản",
    description: "Phản ánh tình hình thu, chi, tồn quỹ tiền Việt Nam tại quỹ của doanh nghiệp."
  },
  {
    code: "1112",
    name: "Ngoại tệ",
    type: "Tài sản",
    description: "Phản ánh tình hình thu, chi, tăng giảm tỷ giá và tồn quỹ ngoại tệ quy đổi ra đồng tiền ghi sổ kế toán."
  },
  {
    code: "1113",
    name: "Vàng tiền tệ",
    type: "Tài sản",
    description: "Phản ánh tình hình biến động và giá trị vàng tiền tệ lưu giữ tại quỹ của doanh nghiệp."
  },
  {
    code: "112",
    name: "Tiền gửi không kỳ hạn",
    type: "Tài sản",
    description: "Phản ánh số hiện có và tình hình biến động tăng, giảm các khoản tiền gửi không kỳ hạn của doanh nghiệp tại các ngân hàng hoặc tổ chức tín dụng."
  },
  {
    code: "1121",
    name: "Tiền Việt Nam",
    type: "Tài sản",
    description: "Phản ánh các khoản tiền gửi không kỳ hạn bằng đồng Việt Nam gửi tại ngân hàng."
  },
  {
    code: "1122",
    name: "Ngoại tệ",
    type: "Tài sản",
    description: "Phản ánh các khoản tiền gửi không kỳ hạn bằng ngoại tệ quy đổi ra đồng tiền kế toán."
  },
  {
    code: "1123",
    name: "Vàng tiền tệ",
    type: "Tài sản",
    description: "Phản ánh các khoản vàng tiền tệ gửi tại ngân hàng của doanh nghiệp."
  },
  {
    code: "113",
    name: "Tiền đang chuyển",
    type: "Tài sản",
    description: "Phản ánh các khoản tiền của doanh nghiệp đã nộp vào ngân hàng hoặc đã chuyển trả đơn vị khác nhưng chưa nhận được giấy báo Có/Nợ."
  },
  {
    code: "1131",
    name: "Tiền Việt Nam",
    type: "Tài sản",
    description: "Phản ánh số tiền đang chuyển bằng đồng Việt Nam."
  },
  {
    code: "1132",
    name: "Ngoại tệ",
    type: "Tài sản",
    description: "Phản ánh số tiền đang chuyển bằng ngoại tệ quy đổi ra đồng tiền ghi sổ."
  },
  {
    code: "121",
    name: "Chứng khoán kinh doanh",
    type: "Tài sản",
    description: "Phản ánh giá trị hiện có và tình hình biến động tăng, giảm của các loại chứng khoán nắm giữ vì mục đích kinh doanh kiếm lời."
  },
  {
    code: "1211",
    name: "Cổ phiếu",
    type: "Tài sản",
    description: "Phản ánh giá trị các loại cổ phiếu mua vào bán ra vì mục đích thương mại ngắn hạn."
  },
  {
    code: "1212",
    name: "Trái phiếu",
    type: "Tài sản",
    description: "Phản ánh giá trị các loại trái phiếu nắm giữ chờ bán kiếm lời."
  },
  {
    code: "1218",
    name: "Chứng khoán khác",
    type: "Tài sản",
    description: "Phản ánh giá trị các loại chứng quyền, chứng chỉ quỹ và công cụ tài chính phái sinh kinh doanh khác."
  },
  {
    code: "128",
    name: "Đầu tư nắm giữ đến ngày đáo hạn",
    type: "Tài sản",
    description: "Phản ánh số hiện có và tình hình biến động của các khoản đầu tư nắm giữ đến ngày đáo hạn như tiền gửi có kỳ hạn, trái phiếu, cho vay."
  },
  {
    code: "1281",
    name: "Tiền gửi có kỳ hạn",
    type: "Tài sản",
    description: "Phản ánh số tiền gửi tại ngân hàng có kỳ hạn xác định nắm giữ đến ngày đáo hạn."
  },
  {
    code: "1282",
    name: "Trái phiếu",
    type: "Tài sản",
    description: "Phản ánh giá trị các loại trái phiếu doanh nghiệp nắm giữ hưởng lãi đến ngày đáo hạn."
  },
  {
    code: "1283",
    name: "Cho vay",
    type: "Tài sản",
    description: "Phản ánh các khoản tiền cho các bên khác vay theo hợp đồng vay vốn có thu lãi."
  },
  {
    code: "1288",
    name: "Các khoản đầu tư khác nắm giữ đến ngày đáo hạn",
    type: "Tài sản",
    description: "Phản ánh các khoản đầu tư thương phiếu, chứng chỉ tiền gửi nắm giữ đến ngày đáo hạn khác."
  },
  {
    code: "131",
    name: "Phải thu của khách hàng",
    type: "Tài sản",
    description: "Phản ánh các khoản nợ phải thu và tình hình thanh toán công nợ của khách hàng về tiền bán sản phẩm, hàng hóa, cung cấp dịch vụ."
  },
  {
    code: "133",
    name: "Thuế GTGT được khấu trừ",
    type: "Tài sản",
    description: "Phản ánh số thuế GTGT đầu vào được khấu trừ, đã khấu trừ và còn được khấu trừ của doanh nghiệp."
  },
  {
    code: "1331",
    name: "Thuế GTGT được khấu trừ của hàng hóa, dịch vụ",
    type: "Tài sản",
    description: "Phản ánh thuế GTGT đầu vào được khấu trừ của hàng hóa, dịch vụ mua ngoài dùng cho hoạt động SXKD chịu thuế GTGT."
  },
  {
    code: "1332",
    name: "Thuế GTGT được khấu trừ của tài sản cố định",
    type: "Tài sản",
    description: "Phản ánh thuế GTGT đầu vào được khấu trừ của việc mua sắm, đầu tư xây dựng tài sản cố định, bất động sản đầu tư."
  },
  {
    code: "136",
    name: "Phải thu nội bộ",
    type: "Tài sản",
    description: "Phản ánh các khoản nợ phải thu và tình hình thanh toán các khoản phải thu giữa doanh nghiệp với các đơn vị trực thuộc không có tư cách pháp nhân hạch toán phụ thuộc."
  },
  {
    code: "1361",
    name: "Vốn kinh doanh ở các đơn vị trực thuộc",
    type: "Tài sản",
    description: "Phản ánh số vốn kinh doanh doanh nghiệp cấp cho các đơn vị trực thuộc hạch toán phụ thuộc."
  },
  {
    code: "1362",
    name: "Phải thu nội bộ về chênh lệch tỷ giá",
    type: "Tài sản",
    description: "Phản ánh các khoản chênh lệch tỷ giá hối đoái phát sinh được phân bổ giữa các đơn vị nội bộ."
  },
  {
    code: "1363",
    name: "Phải thu nội bộ về chi phí đi vay đủ điều kiện được vốn hóa",
    type: "Tài sản",
    description: "Phản ánh các khoản chi phí đi vay chung đủ điều kiện vốn hóa được phân bổ cho đơn vị nội bộ."
  },
  {
    code: "1368",
    name: "Phải thu nội bộ khác",
    type: "Tài sản",
    description: "Phản ánh các khoản phải thu nội bộ khác ngoài vốn kinh doanh và chênh lệch tỷ giá (thu hộ, chi hộ, mượn quỹ)."
  },
  {
    code: "138",
    name: "Phải thu khác",
    type: "Tài sản",
    description: "Phản ánh các khoản nợ phải thu ngoài các khoản phải thu khách hàng và phải thu nội bộ (tài sản thiếu chờ xử lý, cổ tức, tiền bồi thường, bảo hiểm bồi thường)."
  },
  {
    code: "1381",
    name: "Tài sản thiếu chờ xử lý",
    type: "Tài sản",
    description: "Phản ánh giá trị tài sản thiếu hụt, mất mát chưa xác định được nguyên nhân đang chờ cấp có thẩm quyền xử lý."
  },
  {
    code: "1383",
    name: "Thuế TTĐB hàng nhập khẩu được khấu trừ",
    type: "Tài sản",
    description: "Phản ánh số thuế tiêu thụ đặc biệt của hàng hóa nhập khẩu được khấu trừ khi xuất bán hoặc sản xuất mặt hàng chịu thuế TTĐB."
  },
  {
    code: "1385",
    name: "Phải thu về cổ phần hóa",
    type: "Tài sản",
    description: "Phản ánh các khoản phải thu liên quan đến tiến trình cổ phần hóa doanh nghiệp nhà nước."
  },
  {
    code: "1388",
    name: "Phải thu khác",
    type: "Tài sản",
    description: "Phản ánh các khoản phải thu về lãi cho vay, tiền phạt vi phạm hợp đồng, tiền bồi thường, mượn tạm thời."
  },
  {
    code: "141",
    name: "Tạm ứng",
    type: "Tài sản",
    description: "Phản ánh các khoản tiền hoặc vật tư tạm ứng cho người lao động trong doanh nghiệp để thực hiện nhiệm vụ công tác, mua sắm."
  },
  {
    code: "151",
    name: "Hàng mua đang đi đường",
    type: "Tài sản",
    description: "Phản ánh giá trị các loại hàng hóa, nguyên vật liệu đã thuộc quyền sở hữu của doanh nghiệp nhưng chưa về nhập kho hoặc đang trên đường vận chuyển."
  },
  {
    code: "152",
    name: "Nguyên liệu, vật liệu",
    type: "Tài sản",
    description: "Phản ánh giá trị hiện có và tình hình biến động tăng, giảm của các loại nguyên liệu, vật liệu trong kho của doanh nghiệp."
  },
  {
    code: "153",
    name: "Công cụ, dụng cụ",
    type: "Tài sản",
    description: "Phản ánh giá trị hiện có và tình hình biến động tăng, giảm của các loại công cụ, dụng cụ, bao bì luân chuyển, phụ tùng thay thế."
  },
  {
    code: "1531",
    name: "Công cụ, dụng cụ",
    type: "Tài sản",
    description: "Phản ánh giá trị các công cụ, dụng cụ sử dụng trong quá trình hoạt động sản xuất kinh doanh."
  },
  {
    code: "1532",
    name: "Bao bì luân chuyển",
    type: "Tài sản",
    description: "Phản ánh giá trị các loại bao bì dùng nhiều lần để chứa đựng, bảo quản hàng hóa."
  },
  {
    code: "1533",
    name: "Đồ dùng cho thuê",
    type: "Tài sản",
    description: "Phản ánh giá trị công cụ, đồ dùng chuyên dùng để cho khách hàng thuê ngoài."
  },
  {
    code: "1534",
    name: "Thiết bị, phụ tùng thay thế",
    type: "Tài sản",
    description: "Phản ánh các thiết bị phụ tùng dự trữ để thay thế, sửa chữa TSCĐ."
  },
  {
    code: "154",
    name: "Chi phí sản xuất, kinh doanh dở dang",
    type: "Tài sản",
    description: "Phản ánh tổng hợp các chi phí sản xuất, kinh doanh phát sinh để phục vụ tính giá thành sản phẩm, dịch vụ và phản ánh giá trị SP dở dang cuối kỳ."
  },
  {
    code: "155",
    name: "Sản phẩm",
    type: "Tài sản",
    description: "Phản ánh giá trị hiện có và tình hình biến động tăng, giảm của các loại sản phẩm do doanh nghiệp tự sản xuất hoặc thuê ngoài gia công hoàn thành nhập kho."
  },
  {
    code: "1551",
    name: "Sản phẩm nhập kho",
    type: "Tài sản",
    description: "Phản ánh giá trị sản phẩm hoàn thành nhập kho phục vụ tiêu thụ."
  },
  {
    code: "1557",
    name: "Bất động sản sản phẩm",
    type: "Tài sản",
    description: "Phản ánh giá trị các bất động sản do doanh nghiệp tự đầu tư xây dựng để bán trong chu kỳ kinh doanh bình thường."
  },
  {
    code: "156",
    name: "Hàng hóa",
    type: "Tài sản",
    description: "Phản ánh giá trị hiện có và tình hình biến động tăng, giảm các loại hàng hóa mua vào để bán (bao gồm hàng hóa tại kho, bất động sản hàng hóa)."
  },
  {
    code: "1561",
    name: "Giá mua hàng hóa",
    type: "Tài sản",
    description: "Phản ánh giá trị mua vào thực tế của hàng hóa mua nhập kho."
  },
  {
    code: "1567",
    name: "Bất động sản hàng hóa",
    type: "Tài sản",
    description: "Phản ánh giá trị các bất động sản mua về để bán lại trong kỳ kinh doanh."
  },
  {
    code: "157",
    name: "Hàng gửi đi bán",
    type: "Tài sản",
    description: "Phản ánh giá trị sản phẩm, hàng hóa đã xuất kho gửi cho khách hàng, đại lý bán nhưng chưa được xác định là tiêu thụ."
  },
  {
    code: "158",
    name: "Nguyên liệu, vật tư tại kho bảo thuế",
    type: "Tài sản",
    description: "Phản ánh giá trị nguyên liệu, vật tư nhập khẩu đưa vào lưu giữ tại kho bảo thuế chờ sản xuất hàng xuất khẩu."
  },
  {
    code: "171",
    name: "Giao dịch mua bán lại trái phiếu Chính phủ",
    type: "Tài sản",
    description: "Phản ánh các nghiệp vụ mua bán lại trái phiếu Chính phủ (Repo) theo quy định của pháp luật thị trường tài chính."
  },

  // =========================================================================
  // LOẠI 2: TÀI SẢN DÀI HẠN
  // =========================================================================
  {
    code: "211",
    name: "Tài sản cố định hữu hình",
    type: "Tài sản",
    description: "Phản ánh nguyên giá hiện có và tình hình biến động tăng, giảm của toàn bộ tài sản cố định hữu hình của doanh nghiệp."
  },
  {
    code: "2111",
    name: "Nhà cửa, vật kiến trúc",
    type: "Tài sản",
    description: "Phản ánh nguyên giá nhà xưởng, văn phòng, công trình kiến trúc gắn liền với đất."
  },
  {
    code: "2112",
    name: "Máy móc, thiết bị",
    type: "Tài sản",
    description: "Phản ánh nguyên giá toàn bộ máy móc, dây chuyền thiết bị sản xuất, động lực."
  },
  {
    code: "2113",
    name: "Phương tiện vận tải, truyền dẫn",
    type: "Tài sản",
    description: "Phản ánh nguyên giá các phương tiện vận tải đường bộ, đường thủy, đường không và hệ thống đường ống, đường dây truyền dẫn."
  },
  {
    code: "2114",
    name: "Thiết bị, dụng cụ quản lý",
    type: "Tài sản",
    description: "Phản ánh nguyên giá các trang thiết bị máy tính, máy in, bàn ghế dùng trong quản lý."
  },
  {
    code: "2115",
    name: "Cây lâu năm, súc vật làm việc và/hoặc cho sản phẩm",
    type: "Tài sản",
    description: "Phản ánh nguyên giá vườn cây lâu năm, súc vật cày kéo hoặc khai thác sữa, lông theo quy định TSCĐ."
  },
  {
    code: "2118",
    name: "Tài sản cố định khác",
    type: "Tài sản",
    description: "Phản ánh nguyên giá các TSCĐ hữu hình khác chưa xếp vào các nhóm trên."
  },
  {
    code: "212",
    name: "Tài sản cố định thuê tài chính",
    type: "Tài sản",
    description: "Phản ánh nguyên giá hiện có và tình hình biến động của tài sản cố định đi thuê tài chính từ công ty cho thuê tài chính."
  },
  {
    code: "2121",
    name: "TSCĐ hữu hình thuê tài chính",
    type: "Tài sản",
    description: "Phản ánh nguyên giá các tài sản cố định hữu hình đi thuê tài chính."
  },
  {
    code: "2122",
    name: "TSCĐ vô hình thuê tài chính",
    type: "Tài sản",
    description: "Phản ánh nguyên giá các tài sản cố định vô hình đi thuê tài chính."
  },
  {
    code: "213",
    name: "Tài sản cố định vô hình",
    type: "Tài sản",
    description: "Phản ánh nguyên giá hiện có và tình hình biến động tăng, giảm của toàn bộ TSCĐ không có hình thái vật chất của doanh nghiệp."
  },
  {
    code: "2131",
    name: "Quyền sử dụng đất",
    type: "Tài sản",
    description: "Phản ánh giá trị quyền sử dụng đất có thời hạn hoặc lâu dài đủ điều kiện ghi nhận TSCĐ vô hình."
  },
  {
    code: "2132",
    name: "Quyền phát hành",
    type: "Tài sản",
    description: "Phản ánh giá trị quyền xuất bản sách báo, tạp chí, tác phẩm nghệ thuật."
  },
  {
    code: "2133",
    name: "Bản quyền, bằng sáng chế",
    type: "Tài sản",
    description: "Phản ánh giá trị các bằng sáng chế, phát minh, giải pháp hữu ích đã đăng ký quyền sở hữu công nghiệp."
  },
  {
    code: "2134",
    name: "Nhãn hiệu, tên thương mại",
    type: "Tài sản",
    description: "Phản ánh giá trị nhãn hiệu hàng hóa, thương hiệu mua ngoài đủ tiêu chuẩn TSCĐ."
  },
  {
    code: "2135",
    name: "Chương trình phần mềm",
    type: "Tài sản",
    description: "Phản ánh chi phí bản quyền phần mềm ERP, phần mềm điều hành hoạt động của doanh nghiệp."
  },
  {
    code: "2136",
    name: "Giấy phép và giấy phép nhượng quyền",
    type: "Tài sản",
    description: "Phản ánh chi phí mua quyền kinh doanh thương mại (franchise) hoặc giấy phép khai thác."
  },
  {
    code: "2138",
    name: "TSCĐ vô hình khác",
    type: "Tài sản",
    description: "Phản ánh các loại tài sản cố định vô hình khác của doanh nghiệp."
  },
  {
    code: "214",
    name: "Hao mòn tài sản cố định",
    type: "Tài sản",
    description: "Phản ánh tình hình tăng, giảm giá trị hao mòn và khấu hao lũy kế của tất cả các loại TSCĐ và Bất động sản đầu tư."
  },
  {
    code: "2141",
    name: "Hao mòn TSCĐ hữu hình",
    type: "Tài sản",
    description: "Phản ánh giá trị hao mòn lũy kế của tài sản cố định hữu hình."
  },
  {
    code: "2142",
    name: "Hao mòn TSCĐ thuê tài chính",
    type: "Tài sản",
    description: "Phản ánh giá trị hao mòn lũy kế của tài sản cố định đi thuê tài chính."
  },
  {
    code: "2143",
    name: "Hao mòn TSCĐ vô hình",
    type: "Tài sản",
    description: "Phản ánh giá trị hao mòn lũy kế của tài sản cố định vô hình."
  },
  {
    code: "2147",
    name: "Hao mòn Bất động sản đầu tư",
    type: "Tài sản",
    description: "Phản ánh giá trị hao mòn lũy kế của bất động sản đầu tư cho thuê hoạt động."
  },
  {
    code: "215",
    name: "Tài sản sinh học",
    type: "Tài sản",
    description: "Tài khoản mới theo Thông tư 99/2025/TT-BTC: Phản ánh giá trị hiện có và tình hình biến động của súc vật nuôi, vườn cây sinh học phục vụ nông nghiệp."
  },
  {
    code: "2151",
    name: "Súc vật nuôi định kỳ / lấy sản phẩm",
    type: "Tài sản",
    description: "Phản ánh giá trị đàn gia súc, gia cầm sinh sản hoặc cho sữa/lông định kỳ."
  },
  {
    code: "2152",
    name: "Cây trồng sinh học lâu năm",
    type: "Tài sản",
    description: "Phản ánh giá trị vườn cây ăn quả, cây công nghiệp sinh học thu hoạch nhiều chu kỳ."
  },
  {
    code: "2153",
    name: "Tài sản sinh học khác",
    type: "Tài sản",
    description: "Phản ánh các tài sản sinh học nông lâm thủy sản khác của doanh nghiệp."
  },
  {
    code: "217",
    name: "Bất động sản đầu tư",
    type: "Tài sản",
    description: "Phản ánh nguyên giá hiện có và tình hình biến động tăng, giảm của các loại bất động sản nắm giữ để cho thuê hoặc chờ tăng giá để bán."
  },
  {
    code: "221",
    name: "Đầu tư vào công ty con",
    type: "Tài sản",
    description: "Phản ánh giá trị vốn đầu tư mà công ty mẹ nắm giữ trên 50% quyền biểu quyết hoặc nắm quyền kiểm soát tại công ty con."
  },
  {
    code: "222",
    name: "Đầu tư vào công ty liên doanh, liên kết",
    type: "Tài sản",
    description: "Phản ánh giá trị vốn đầu tư vào các công ty liên kết (từ 20% đến dưới 50% quyền biểu quyết) hoặc cơ sở kinh doanh đồng kiểm soát."
  },
  {
    code: "228",
    name: "Đầu tư khác",
    type: "Tài sản",
    description: "Phản ánh giá trị các khoản đầu tư vốn vào đơn vị khác dưới 20% quyền biểu quyết và các khoản đầu tư dài hạn khác."
  },
  {
    code: "2281",
    name: "Đầu tư góp vốn vào đơn vị khác",
    type: "Tài sản",
    description: "Phản ánh các khoản đầu tư vốn cổ phần, góp vốn không có quyền kiểm soát hoặc ảnh hưởng đáng kể."
  },
  {
    code: "2288",
    name: "Đầu tư khác",
    type: "Tài sản",
    description: "Phản ánh các tài sản đầu tư dài hạn khác (kim khí quý, đá quý, tranh nghệ thuật giữ chờ tăng giá)."
  },
  {
    code: "229",
    name: "Dự phòng tổn thất tài sản",
    type: "Tài sản",
    description: "Phản ánh tình hình trích lập, hoàn nhập các khoản dự phòng giảm giá chứng khoán, dự phòng tổn thất đầu tư, nợ khó đòi, giảm giá HTK và tài sản sinh học."
  },
  {
    code: "2291",
    name: "Dự phòng giảm giá chứng khoán kinh doanh",
    type: "Tài sản",
    description: "Phản ánh số dự phòng giảm giá của các loại chứng khoán kinh doanh cuối kỳ kế toán."
  },
  {
    code: "2292",
    name: "Dự phòng tổn thất đầu tư vào đơn vị khác",
    type: "Tài sản",
    description: "Phản ánh số dự phòng tổn thất các khoản đầu tư tài chính dài hạn do bên nhận đầu tư bị lỗ."
  },
  {
    code: "2293",
    name: "Dự phòng nợ phải thu khó đòi",
    type: "Tài sản",
    description: "Phản ánh số dự phòng tổn thất các khoản công nợ phải thu có khả năng không thu hồi được."
  },
  {
    code: "2294",
    name: "Dự phòng giảm giá hàng tồn kho",
    type: "Tài sản",
    description: "Phản ánh số trích lập dự phòng khi giá trị thuần có thể thực hiện được của hàng tồn kho thấp hơn giá gốc."
  },
  {
    code: "2295",
    name: "Dự phòng tổn thất tài sản sinh học",
    type: "Tài sản",
    description: "Tài khoản mới theo TT99: Phản ánh số trích lập dự phòng suy giảm giá trị đối với tài sản sinh học."
  },
  {
    code: "241",
    name: "Xây dựng cơ bản dở dang",
    type: "Tài sản",
    description: "Phản ánh chi phí đầu tư mua sắm TSCĐ, chi phí xây dựng cơ bản và sửa chữa lớn, bảo dưỡng định kỳ TSCĐ chưa hoàn thành."
  },
  {
    code: "2411",
    name: "Mua sắm TSCĐ",
    type: "Tài sản",
    description: "Phản ánh chi phí mua sắm tài sản cố định đang trong quá trình lắp đặt, chạy thử."
  },
  {
    code: "2412",
    name: "Xây dựng cơ bản",
    type: "Tài sản",
    description: "Phản ánh chi phí các công trình đầu tư xây dựng mới, nâng cấp mở rộng TSCĐ."
  },
  {
    code: "2413",
    name: "Sửa chữa, bảo dưỡng định kỳ TSCĐ",
    type: "Tài sản",
    description: "Phản ánh chi phí sửa chữa lớn, đại tu, bảo dưỡng định kỳ TSCĐ theo kế hoạch kỹ thuật."
  },
  {
    code: "242",
    name: "Chi phí chờ phân bổ",
    type: "Tài sản",
    description: "Đổi tên theo TT99 (trước đây là Chi phí trả trước): Phản ánh các chi phí thực tế đã phát sinh nhưng có liên quan đến kết quả hoạt động SXKD của nhiều kỳ kế toán."
  },
  {
    code: "243",
    name: "Tài sản thuế thu nhập hoãn lại",
    type: "Tài sản",
    description: "Phản ánh giá trị tài sản thuế TNDN hoãn lại phát sinh từ các khoản chênh lệch tạm thời được khấu trừ."
  },
  {
    code: "244",
    name: "Cầm cố, thế chấp, ký quỹ, ký cược",
    type: "Tài sản",
    description: "Phản ánh các khoản tiền hoặc hiện vật mà doanh nghiệp đem đi cầm cố, thế chấp, ký quỹ, ký cược để đảm bảo thực hiện hợp đồng."
  },

  // =========================================================================
  // LOẠI 3: NỢ PHẢI TRẢ
  // =========================================================================
  {
    code: "331",
    name: "Phải trả cho người bán",
    type: "Nợ phải trả",
    description: "Phản ánh tình hình thanh toán các khoản nợ phải trả cho nhà cung cấp hàng hóa, nguyên vật liệu, dịch vụ, nhà thầu xây dựng."
  },
  {
    code: "333",
    name: "Thuế và các khoản phải nộp Nhà nước",
    type: "Nợ phải trả",
    description: "Phản ánh tổng hợp tình hình thực hiện nghĩa vụ về thuế, phí, lệ phí và các khoản nợ phải nộp khác cho Ngân sách Nhà nước."
  },
  {
    code: "3331",
    name: "Thuế giá trị gia tăng phải nộp",
    type: "Nợ phải trả",
    description: "Phản ánh số thuế GTGT đầu ra, thuế GTGT hàng nhập khẩu phải nộp và số đã nộp vào NSNN."
  },
  {
    code: "33311",
    name: "Thuế GTGT đầu ra",
    type: "Nợ phải trả",
    description: "Phản ánh số thuế GTGT đầu ra phát sinh khi bán hàng hóa, dịch vụ."
  },
  {
    code: "33312",
    name: "Thuế GTGT hàng nhập khẩu",
    type: "Nợ phải trả",
    description: "Phản ánh số thuế GTGT phải nộp của hàng hóa nhập khẩu."
  },
  {
    code: "3332",
    name: "Thuế tiêu thụ đặc biệt",
    type: "Nợ phải trả",
    description: "Phản ánh số thuế TTĐB phải nộp và tình hình nộp thuế TTĐB của các mặt hàng chịu thuế."
  },
  {
    code: "3333",
    name: "Thuế xuất, nhập khẩu",
    type: "Nợ phải trả",
    description: "Phản ánh số thuế xuất khẩu, thuế nhập khẩu phải nộp cho cơ quan Hải quan."
  },
  {
    code: "3334",
    name: "Thuế thu nhập doanh nghiệp",
    type: "Nợ phải trả",
    description: "Phản ánh số thuế TNDN tạm nộp hàng quý và số quyết toán phải nộp cuối năm."
  },
  {
    code: "3335",
    name: "Thuế thu nhập cá nhân",
    type: "Nợ phải trả",
    description: "Phản ánh số thuế TNCN khấu trừ từ thu nhập người lao động và đối tác phải nộp NSNN."
  },
  {
    code: "3336",
    name: "Thuế tài nguyên",
    type: "Nợ phải trả",
    description: "Phản ánh số thuế tài nguyên phải nộp do khai thác khoáng sản, tài nguyên thiên nhiên."
  },
  {
    code: "3337",
    name: "Thuế nhà đất, tiền thuê đất",
    type: "Nợ phải trả",
    description: "Phản ánh nghĩa vụ tiền thuế sử dụng đất phi nông nghiệp và tiền thuê đất hàng năm."
  },
  {
    code: "3338",
    name: "Các loại thuế khác",
    type: "Nợ phải trả",
    description: "Phản ánh các loại thuế bảo vệ môi trường, thuế môn bài/lệ phí môn bài và thuế khác."
  },
  {
    code: "3339",
    name: "Phí, lệ phí và các khoản phải nộp khác",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản phí, lệ phí hành chính công phải nộp nhà nước."
  },
  {
    code: "334",
    name: "Phải trả người lao động",
    type: "Nợ phải trả",
    description: "Phản ánh tình hình thanh toán tiền lương, tiền công, tiền thưởng và các khoản phụ cấp cho người lao động của doanh nghiệp."
  },
  {
    code: "3341",
    name: "Phải trả công nhân viên",
    type: "Nợ phải trả",
    description: "Phản ánh tiền lương và thu nhập phải trả cán bộ công nhân viên có hợp đồng lao động."
  },
  {
    code: "3348",
    name: "Phải trả người lao động khác",
    type: "Nợ phải trả",
    description: "Phản ánh thù lao trả cộng tác viên, lao động thời vụ, hợp đồng khoán việc."
  },
  {
    code: "335",
    name: "Chi phí phải trả",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản chi phí thực tế chưa phát sinh nhưng đã được trích trước vào chi phí hoạt động SXKD trong kỳ để đảm bảo nguyên tắc phù hợp."
  },
  {
    code: "336",
    name: "Phải trả nội bộ",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản phải trả giữa doanh nghiệp với các đơn vị trực thuộc không có tư cách pháp nhân hạch toán phụ thuộc."
  },
  {
    code: "3361",
    name: "Phải trả nội bộ về vốn kinh doanh",
    type: "Nợ phải trả",
    description: "Phản ánh số vốn kinh doanh đơn vị cấp dưới nhận bàn giao từ cấp trên."
  },
  {
    code: "3362",
    name: "Phải trả nội bộ về chênh lệch tỷ giá",
    type: "Nợ phải trả",
    description: "Phản ánh số chênh lệch tỷ giá phân bổ nội bộ giữa các đơn vị."
  },
  {
    code: "3363",
    name: "Phải trả nội bộ về chi phí đi vay đủ điều kiện được vốn hóa",
    type: "Nợ phải trả",
    description: "Phản ánh chi phí lãi vay vốn hóa phải nộp lại hoặc phân bổ trong nội bộ."
  },
  {
    code: "3368",
    name: "Phải trả nội bộ khác",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản chi hộ, thu hộ, nộp hộ giữa các đơn vị trực thuộc."
  },
  {
    code: "337",
    name: "Thanh toán theo tiến độ kế hoạch hợp đồng xây dựng",
    type: "Nợ phải trả",
    description: "Phản ánh số tiền khách hàng phải trả theo tiến độ kế hoạch và số tiền đã thanh toán của hợp đồng xây dựng."
  },
  {
    code: "338",
    name: "Phải trả, phải nộp khác",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản phải trả, phải nộp ngoài các nghĩa vụ thương mại (kinh phí công đoàn, BHXH, BHYT, BHTN, doanh thu chưa thực hiện)."
  },
  {
    code: "3381",
    name: "Tài sản thừa chờ giải quyết",
    type: "Nợ phải trả",
    description: "Phản ánh giá trị tài sản thừa phát hiện qua kiểm kê chưa xác định được lý do."
  },
  {
    code: "3382",
    name: "Kinh phí công đoàn",
    type: "Nợ phải trả",
    description: "Phản ánh tình hình trích lập và nộp kinh phí công đoàn 2% theo luật định."
  },
  {
    code: "3383",
    name: "Bảo hiểm xã hội",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản BHXH trích theo lương của doanh nghiệp và người lao động nộp cho cơ quan BHXH."
  },
  {
    code: "3384",
    name: "Bảo hiểm y tế",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản bảo hiểm y tế nộp cho cơ quan bảo hiểm y tế."
  },
  {
    code: "3385",
    name: "Phải trả về cổ phần hóa",
    type: "Nợ phải trả",
    description: "Phản ánh các nghĩa vụ nợ nộp tiền thu từ cổ phần hóa về Quỹ hỗ trợ sắp xếp doanh nghiệp."
  },
  {
    code: "3386",
    name: "Bảo hiểm thất nghiệp",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản bảo hiểm thất nghiệp trích nộp theo quy định."
  },
  {
    code: "3387",
    name: "Doanh thu chưa thực hiện",
    type: "Nợ phải trả",
    description: "Phản ánh doanh thu nhận trước tiền của nhiều kỳ (cho thuê nhà xưởng nhiều năm, dịch vụ thuê bao dài hạn)."
  },
  {
    code: "3388",
    name: "Phải trả, phải nộp khác",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản cổ tức nợ trả cổ đông, mượn tạm, tiền thu hộ bên thứ ba."
  },
  {
    code: "341",
    name: "Vay và nợ thuê tài chính",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản tiền vay ngân hàng, phát hành khế ước vay tiền và nợ gốc thuê tài chính."
  },
  {
    code: "3411",
    name: "Các khoản đi vay",
    type: "Nợ phải trả",
    description: "Phản ánh số tiền vay ngắn hạn, dài hạn của các ngân hàng và tổ chức tài chính."
  },
  {
    code: "3412",
    name: "Nợ thuê tài chính",
    type: "Nợ phải trả",
    description: "Phản ánh nợ gốc thuê tài sản theo các hợp đồng thuê tài chính."
  },
  {
    code: "343",
    name: "Trái phiếu phát hành",
    type: "Nợ phải trả",
    description: "Phản ánh tình hình phát hành trái phiếu doanh nghiệp, bao gồm mệnh giá, chiết khấu, phụ trội và trái phiếu chuyển đổi."
  },
  {
    code: "3431",
    name: "Trái phiếu thường",
    type: "Nợ phải trả",
    description: "Phản ánh mệnh giá, chiết khấu và phụ trội của các loại trái phiếu thông thường doanh nghiệp phát hành."
  },
  {
    code: "34311",
    name: "Mệnh giá trái phiếu",
    type: "Nợ phải trả",
    description: "Phản ánh tổng giá trị danh nghĩa theo mệnh giá của số trái phiếu thường đang lưu hành."
  },
  {
    code: "34312",
    name: "Chiết khấu trái phiếu",
    type: "Nợ phải trả",
    description: "Phản ánh khoản chênh lệch âm giữa giá bán trái phiếu thấp hơn mệnh giá phân bổ dần."
  },
  {
    code: "34313",
    name: "Phụ trội trái phiếu",
    type: "Nợ phải trả",
    description: "Phản ánh khoản chênh lệch dương giữa giá bán trái phiếu cao hơn mệnh giá phân bổ dần."
  },
  {
    code: "3432",
    name: "Trái phiếu chuyển đổi",
    type: "Nợ phải trả",
    description: "Phản ánh giá trị phần nợ gốc của trái phiếu có quyền chuyển đổi thành cổ phiếu phổ thông."
  },
  {
    code: "344",
    name: "Nhận ký quỹ, ký cược",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản tiền hoặc tài sản doanh nghiệp nhận ký cược, ký quỹ của khách hàng, đại lý nhằm bảo đảm trách nhiệm nghĩa vụ."
  },
  {
    code: "347",
    name: "Thuế thu nhập hoãn lại phải trả",
    type: "Nợ phải trả",
    description: "Phản ánh số thuế thu nhập doanh nghiệp hoãn lại phải nộp phát sinh từ các khoản chênh lệch tạm thời chịu thuế."
  },
  {
    code: "352",
    name: "Dự phòng phải trả",
    type: "Nợ phải trả",
    description: "Phản ánh các khoản dự phòng tổn thất, nợ tiềm tàng có thể xảy ra trong tương lai (bảo hành sản phẩm, tái cơ cấu, hợp đồng có rủi ro lớn)."
  },
  {
    code: "3521",
    name: "Dự phòng bảo hành sản phẩm, hàng hóa",
    type: "Nợ phải trả",
    description: "Phản ánh chi phí trích trước để bảo hành chất lượng sản phẩm hàng hóa bán ra."
  },
  {
    code: "3522",
    name: "Dự phòng bảo hành công trình xây dựng",
    type: "Nợ phải trả",
    description: "Phản ánh chi phí trích trước để bảo hành các công trình xây lắp hoàn thành bàn giao."
  },
  {
    code: "3523",
    name: "Dự phòng tái cơ cấu doanh nghiệp",
    type: "Nợ phải trả",
    description: "Phản ánh chi phí trích trước liên quan đến kế hoạch đóng cửa phân xưởng, thu hẹp quy mô."
  },
  {
    code: "3524",
    name: "Dự phòng hợp đồng có rủi ro lớn",
    type: "Nợ phải trả",
    description: "Phản ánh khoản dự phòng cho các hợp đồng mà chi phí không thể tránh khỏi vượt quá lợi ích kinh tế."
  },
  {
    code: "3525",
    name: "Dự phòng phải trả khác",
    type: "Nợ phải trả",
    description: "Cập nhật mã số theo TT99 (trước đây 3524): Phản ánh các khoản dự phòng môi trường, hoàn nguyên đất và dự phòng khác."
  },
  {
    code: "353",
    name: "Quỹ khen thưởng, phúc lợi",
    type: "Nợ phải trả",
    description: "Phản ánh tình hình trích lập và sử dụng các quỹ khen thưởng, phúc lợi và quỹ hỗ trợ đổi mới sáng tạo hình thành từ lợi nhuận sau thuế."
  },
  {
    code: "3531",
    name: "Quỹ khen thưởng",
    type: "Nợ phải trả",
    description: "Phản ánh số tiền trích lập và chi thưởng cho người lao động đạt thành tích."
  },
  {
    code: "3532",
    name: "Quỹ phúc lợi",
    type: "Nợ phải trả",
    description: "Phản ánh nguồn quỹ dùng cho các hoạt động văn thể mỹ, nghỉ dưỡng, trợ cấp khó khăn."
  },
  {
    code: "3533",
    name: "Quỹ hỗ trợ đổi mới sáng tạo",
    type: "Nợ phải trả",
    description: "Tài khoản mới theo TT99: Phản ánh quỹ phục vụ các hoạt động nghiên cứu phát triển (R&D) và đổi mới sáng tạo."
  },
  {
    code: "3534",
    name: "Quỹ phúc lợi đã hình thành TSCĐ",
    type: "Nợ phải trả",
    description: "Phản ánh số kinh phí quỹ phúc lợi đã sử dụng để đầu tư xây dựng hoặc mua sắm tài sản cố định phục vụ phúc lợi."
  },
  {
    code: "356",
    name: "Quỹ phát triển khoa học và công nghệ",
    type: "Nợ phải trả",
    description: "Phản ánh tình hình trích lập từ thu nhập chịu thuế và sử dụng quỹ phát triển khoa học và công nghệ của doanh nghiệp."
  },
  {
    code: "3561",
    name: "Quỹ phát triển khoa học và công nghệ",
    type: "Nợ phải trả",
    description: "Phản ánh số tiền quỹ KH&CN trích lập để chi cho hoạt động nghiên cứu ứng dụng công nghệ."
  },
  {
    code: "3562",
    name: "Quỹ phát triển KH&CN đã hình thành TSCĐ",
    type: "Nợ phải trả",
    description: "Phản ánh nguồn kinh phí quỹ KH&CN đã đầu tư mua sắm tài sản nghiên cứu khoa học."
  },

  // =========================================================================
  // LOẠI 4: VỐN CHỦ SỞ HỮU
  // =========================================================================
  {
    code: "411",
    name: "Vốn đầu tư của chủ sở hữu",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh tổng số vốn thực tế do các thành viên, cổ đông góp vào doanh nghiệp theo điều lệ và thặng dư vốn cổ phần."
  },
  {
    code: "4111",
    name: "Vốn góp của chủ sở hữu",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh số vốn góp thực tế theo mệnh giá cổ phiếu hoặc giấy phép đầu tư."
  },
  {
    code: "41111",
    name: "Cổ phiếu phổ thông có quyền biểu quyết",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh giá trị vốn góp bằng cổ phiếu phổ thông."
  },
  {
    code: "41112",
    name: "Cổ phiếu ưu đãi",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh giá trị vốn góp bằng các loại cổ phiếu ưu đãi (cổ tức, hoàn lại nếu xếp vào vốn CSH)."
  },
  {
    code: "4112",
    name: "Thặng dư vốn cổ phần",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh số chênh lệch thặng dư giữa giá phát hành cổ phiếu thực tế so với mệnh giá cổ phiếu."
  },
  {
    code: "4113",
    name: "Quyền chọn chuyển đổi trái phiếu",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh giá trị cấu phần vốn chủ sở hữu của quyền chọn mua cổ phiếu kèm theo trái phiếu chuyển đổi."
  },
  {
    code: "4118",
    name: "Vốn khác",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh số vốn kinh doanh bổ sung từ các nguồn tài trợ, quà biếu tặng hoặc kết chuyển từ nguồn XDCB cũ."
  },
  {
    code: "412",
    name: "Chênh lệch đánh giá lại tài sản",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh số chênh lệch tăng hoặc giảm do đánh giá lại tài sản cố định, bất động sản đầu tư theo quyết định của cơ quan nhà nước."
  },
  {
    code: "413",
    name: "Chênh lệch tỷ giá hối đoái",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh chênh lệch tỷ giá phát sinh trong giai đoạn trước hoạt động và chênh lệch tỷ giá hối đoái do chuyển đổi BCTC của cơ sở ở nước ngoài."
  },
  {
    code: "4131",
    name: "Chênh lệch tỷ giá hối đoái trong giai đoạn trước hoạt động",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh chênh lệch tỷ giá phát sinh trong giai đoạn trước hoạt động của DN thực hiện dự án đầu tư đặc thù."
  },
  {
    code: "4132",
    name: "Chênh lệch tỷ giá hối đoái do chuyển đổi BCTC",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh chênh lệch tỷ giá khi chuyển đổi Báo cáo tài chính lập bằng ngoại tệ sang Đồng Việt Nam."
  },
  {
    code: "414",
    name: "Quỹ đầu tư phát triển",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh số tiền trích lập từ lợi nhuận sau thuế để phục vụ việc tái đầu tư mở rộng quy mô kinh doanh."
  },
  {
    code: "417",
    name: "Quỹ hỗ trợ sắp xếp doanh nghiệp",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh nguồn hình thành và việc sử dụng Quỹ hỗ trợ sắp xếp doanh nghiệp tại các Tổng công ty nhà nước."
  },
  {
    code: "418",
    name: "Các quỹ khác thuộc vốn chủ sở hữu",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh số tiền trích lập các quỹ điều lệ khác của doanh nghiệp theo quy định của pháp luật chuyên ngành."
  },
  {
    code: "419",
    name: "Cổ phiếu mua lại của chính mình",
    type: "Vốn chủ sở hữu",
    description: "Đổi tên theo TT99 (trước đây là Cổ phiếu quỹ): Phản ánh giá trị thực tế các cổ phiếu do công ty đại chúng mua lại từ thị trường."
  },
  {
    code: "421",
    name: "Lợi nhuận sau thuế chưa phân phối",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh kết quả kinh doanh (lãi, lỗ) sau thuế TNDN và tình hình phân chia lợi nhuận của doanh nghiệp."
  },
  {
    code: "4211",
    name: "Lợi nhuận sau thuế chưa phân phối năm trước",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh số lãi lũy kế chưa chia hoặc số lỗ lũy kế của các năm tài chính trước chuyển sang."
  },
  {
    code: "4212",
    name: "Lợi nhuận sau thuế chưa phân phối năm nay",
    type: "Vốn chủ sở hữu",
    description: "Phản ánh kết quả lãi hoặc lỗ sau thuế TNDN phát sinh trong năm tài chính hiện hành."
  },

  // =========================================================================
  // LOẠI 5: DOANH THU
  // =========================================================================
  {
    code: "511",
    name: "Doanh thu bán hàng và cung cấp dịch vụ",
    type: "Doanh thu",
    description: "Phản ánh tổng doanh thu thuần từ bán hàng hóa, sản phẩm, cung cấp dịch vụ cho khách hàng trong kỳ kế toán."
  },
  {
    code: "5111",
    name: "Doanh thu bán hàng hóa",
    type: "Doanh thu",
    description: "Phản ánh doanh thu từ việc bán các loại hàng hóa mua về."
  },
  {
    code: "5112",
    name: "Doanh thu bán các thành phẩm/sản phẩm",
    type: "Doanh thu",
    description: "Phản ánh doanh thu bán sản phẩm do doanh nghiệp tự chế tạo hoặc gia công."
  },
  {
    code: "5113",
    name: "Doanh thu cung cấp dịch vụ",
    type: "Doanh thu",
    description: "Phản ánh doanh thu từ hoạt động cung cấp dịch vụ vận tải, du lịch, tư vấn, bảo hiểm."
  },
  {
    code: "5114",
    name: "Doanh thu trợ cấp, trợ giá",
    type: "Doanh thu",
    description: "Phản ánh số tiền trợ cấp, trợ giá của Nhà nước khi thực hiện nhiệm vụ cung ứng dịch vụ công ích."
  },
  {
    code: "5117",
    name: "Doanh thu kinh doanh bất động sản đầu tư",
    type: "Doanh thu",
    description: "Phản ánh tiền cho thuê hoạt động hoặc bán bất động sản đầu tư."
  },
  {
    code: "5118",
    name: "Doanh thu khác",
    type: "Doanh thu",
    description: "Phản ánh doanh thu từ việc nhượng bán phế liệu thu hồi từ SXKD và các khoản doanh thu bán hàng phụ trợ khác."
  },
  {
    code: "515",
    name: "Doanh thu hoạt động tài chính",
    type: "Doanh thu",
    description: "Phản ánh doanh thu tiền lãi gửi ngân hàng, lãi cho vay, cổ tức lợi nhuận được chia, lãi chênh lệch tỷ giá và chiết khấu thanh toán được hưởng."
  },
  {
    code: "521",
    name: "Các khoản giảm trừ doanh thu",
    type: "Doanh thu",
    description: "Phản ánh các khoản điều chỉnh giảm trừ trực tiếp vào doanh thu gộp phát sinh trong kỳ kế toán."
  },
  {
    code: "5211",
    name: "Chiết khấu thương mại",
    type: "Doanh thu",
    description: "Phản ánh số chiết khấu thương mại cho khách hàng mua hàng với số lượng lớn ngoài hóa đơn."
  },
  {
    code: "5212",
    name: "Giảm giá hàng bán",
    type: "Doanh thu",
    description: "Phản ánh số tiền giảm trừ cho khách hàng do hàng hóa phẩm chất kém, sai quy cách hợp đồng."
  },
  {
    code: "5213",
    name: "Hàng bán bị trả lại",
    type: "Doanh thu",
    description: "Phản ánh doanh thu của số hàng hóa bị khách hàng trả lại do vi phạm cam kết chất lượng."
  },

  // =========================================================================
  // LOẠI 6: CHI PHÍ SẢN XUẤT, KINH DOANH
  // =========================================================================
  {
    code: "621",
    name: "Chi phí nguyên liệu, vật liệu trực tiếp",
    type: "Chi phí",
    description: "Phản ánh chi phí nguyên liệu, vật liệu trực tiếp tham gia cấu thành nên sản phẩm hoặc dịch vụ sản xuất."
  },
  {
    code: "622",
    name: "Chi phí nhân công trực tiếp",
    type: "Chi phí",
    description: "Phản ánh tiền lương, tiền công và các khoản trích theo lương của công nhân trực tiếp tham gia chế tạo sản phẩm, dịch vụ."
  },
  {
    code: "623",
    name: "Chi phí sử dụng máy thi công",
    type: "Chi phí",
    description: "Phản ánh chi phí sử dụng xe máy thi công trong các doanh nghiệp xây lắp (nhân công, khấu hao xe máy, nhiên liệu)."
  },
  {
    code: "6231",
    name: "Chi phí nhân công máy thi công",
    type: "Chi phí",
    description: "Phản ánh tiền lương của công nhân điều khiển máy thi công."
  },
  {
    code: "6232",
    name: "Chi phí vật liệu",
    type: "Chi phí",
    description: "Phản ánh chi phí xăng dầu, mỡ bôi trơn cho máy thi công hoạt động."
  },
  {
    code: "6233",
    name: "Chi phí dụng cụ sản xuất",
    type: "Chi phí",
    description: "Phản ánh chi phí công cụ dụng cụ phục vụ hoạt động của xe máy thi công."
  },
  {
    code: "6234",
    name: "Chi phí khấu hao máy thi công",
    type: "Chi phí",
    description: "Phản ánh chi phí trích khấu hao tài sản máy móc thiết bị thi công."
  },
  {
    code: "6237",
    name: "Chi phí dịch vụ mua ngoài",
    type: "Chi phí",
    description: "Phản ánh chi phí thuê xe máy thi công ngoài, bảo dưỡng sửa chữa dịch vụ bên ngoài."
  },
  {
    code: "6238",
    name: "Chi phí bằng tiền khác",
    type: "Chi phí",
    description: "Phản ánh các khoản chi bằng tiền phục vụ hoạt động của máy thi công."
  },
  {
    code: "627",
    name: "Chi phí sản xuất chung",
    type: "Chi phí",
    description: "Phản ánh chi phí phục vụ hoạt động quản lý, vận hành phân xưởng sản xuất (nhân viên phân xưởng, khấu hao máy xưởng, điện nước xưởng)."
  },
  {
    code: "6271",
    name: "Chi phí nhân viên phân xưởng",
    type: "Chi phí",
    description: "Phản ánh tiền lương quản đốc, nhân viên kỹ thuật kiểm tra KCS tại phân xưởng."
  },
  {
    code: "6272",
    name: "Chi phí vật liệu",
    type: "Chi phí",
    description: "Phản ánh chi phí vật liệu bảo dưỡng máy xưởng, vật liệu giẻ lau xưởng."
  },
  {
    code: "6273",
    name: "Chi phí dụng cụ sản xuất",
    type: "Chi phí",
    description: "Phản ánh chi phí công cụ, dụng cụ dùng chung tại phân xưởng."
  },
  {
    code: "6274",
    name: "Chi phí khấu hao TSCĐ",
    type: "Chi phí",
    description: "Phản ánh chi phí khấu hao nhà xưởng, máy móc sản xuất chung."
  },
  {
    code: "6277",
    name: "Chi phí dịch vụ mua ngoài",
    type: "Chi phí",
    description: "Phản ánh tiền điện, nước, điện thoại, dịch vụ sửa chữa bảo dưỡng thuê ngoài tại xưởng."
  },
  {
    code: "6278",
    name: "Chi phí bằng tiền khác",
    type: "Chi phí",
    description: "Phản ánh các chi phí phát sinh bằng tiền khác tại phân xưởng sản xuất."
  },
  {
    code: "632",
    name: "Giá vốn hàng bán",
    type: "Chi phí",
    description: "Phản ánh giá vốn thực tế của sản phẩm, hàng hóa, dịch vụ, bất động sản đầu tư đã tiêu thụ trong kỳ."
  },
  {
    code: "635",
    name: "Chi phí tài chính",
    type: "Chi phí",
    description: "Phản ánh chi phí lãi tiền vay, chiết khấu thanh toán cho khách hàng, lỗ chênh lệch tỷ giá hối đoái và dự phòng giảm giá đầu tư tài chính."
  },
  {
    code: "641",
    name: "Chi phí bán hàng",
    type: "Chi phí",
    description: "Phản ánh toàn bộ các chi phí phát sinh trong quá trình tiêu thụ sản phẩm hàng hóa, cung cấp dịch vụ (tiếp thị, quảng cáo, vận chuyển, bảo hành)."
  },
  {
    code: "6411",
    name: "Chi phí nhân viên bán hàng",
    type: "Chi phí",
    description: "Phản ánh tiền lương, hoa hồng của nhân viên kinh doanh, bán hàng, tiếp thị."
  },
  {
    code: "6412",
    name: "Chi phí vật liệu, bao bì",
    type: "Chi phí",
    description: "Phản ánh chi phí vật liệu đóng gói, bao bì bảo quản hàng hóa khi tiêu thụ."
  },
  {
    code: "6413",
    name: "Chi phí dụng cụ, đồ dùng",
    type: "Chi phí",
    description: "Phản ánh chi phí công cụ dụng cụ tại các showroom, cửa hàng bán lẻ."
  },
  {
    code: "6414",
    name: "Chi phí khấu hao TSCĐ",
    type: "Chi phí",
    description: "Phản ánh khấu hao phương tiện vận tải giao hàng, cửa hàng trưng bày."
  },
  {
    code: "6415",
    name: "Chi phí bảo hành",
    type: "Chi phí",
    description: "Phản ánh chi phí sửa chữa, bảo hành sản phẩm hàng hóa trong thời hạn cam kết."
  },
  {
    code: "6417",
    name: "Chi phí dịch vụ mua ngoài",
    type: "Chi phí",
    description: "Phản ánh chi phí thuê kho bãi bên ngoài, thuê quảng cáo truyền thông, cước vận chuyển giao hàng."
  },
  {
    code: "6418",
    name: "Chi phí bằng tiền khác",
    type: "Chi phí",
    description: "Phản ánh chi phí hoa hồng môi giới, tiếp khách bộ phận bán hàng."
  },
  {
    code: "642",
    name: "Chi phí quản lý doanh nghiệp",
    type: "Chi phí",
    description: "Phản ánh toàn bộ các khoản chi phí quản lý điều hành chung của toàn doanh nghiệp (lương ban giám đốc, văn phòng, khấu hao văn phòng, thuế môn bài, dự phòng nợ khó đòi)."
  },
  {
    code: "6421",
    name: "Chi phí nhân viên quản lý",
    type: "Chi phí",
    description: "Phản ánh tiền lương, tiền thưởng và bảo hiểm của bộ phận quản lý văn phòng, Ban Giám đốc."
  },
  {
    code: "6422",
    name: "Chi phí vật liệu quản lý",
    type: "Chi phí",
    description: "Phản ánh chi phí giấy mực, văn phòng phẩm phục vụ quản lý."
  },
  {
    code: "6423",
    name: "Chi phí đồ dùng văn phòng",
    type: "Chi phí",
    description: "Phản ánh công cụ dụng cụ bàn ghế, đồ dùng văn phòng."
  },
  {
    code: "6424",
    name: "Chi phí khấu hao TSCĐ",
    type: "Chi phí",
    description: "Phản ánh khấu hao tòa nhà văn phòng, xe ôtô công tác của Ban Giám đốc."
  },
  {
    code: "6425",
    name: "Thuế, phí và lệ phí",
    type: "Chi phí",
    description: "Phản ánh thuế môn bài, thuế nhà đất, lệ phí cầu đường bộ phận quản lý chi trả."
  },
  {
    code: "6426",
    name: "Chi phí dự phòng",
    type: "Chi phí",
    description: "Phản ánh chi phí trích lập dự phòng phải thu khó đòi, dự phòng phải trả tái cơ cấu."
  },
  {
    code: "6427",
    name: "Chi phí dịch vụ mua ngoài",
    type: "Chi phí",
    description: "Phản ánh tiền điện, nước thoại, dịch vụ kiểm toán, tư vấn luật, thuê ngoài văn phòng."
  },
  {
    code: "6428",
    name: "Chi phí bằng tiền khác",
    type: "Chi phí",
    description: "Phản ánh hội nghị khách hàng, công tác phí, tiếp khách của Ban Giám đốc."
  },

  // =========================================================================
  // LOẠI 7: THU NHẬP KHÁC
  // =========================================================================
  {
    code: "711",
    name: "Thu nhập khác",
    type: "Thu nhập khác",
    description: "Phản ánh các khoản thu nhập bất thường ngoài hoạt động SXKD thông thường (thanh lý nhượng bán TSCĐ, tiền phạt vi phạm hợp đồng thu được, quà biếu tặng, nợ không ai đòi)."
  },

  // =========================================================================
  // LOẠI 8: CHI PHÍ KHÁC
  // =========================================================================
  {
    code: "811",
    name: "Chi phí khác",
    type: "Chi phí khác",
    description: "Phản ánh các khoản chi phí bất thường ngoài hoạt động SXKD (giá trị còn lại TSCĐ thanh lý, tiền bị phạt vi phạm hợp đồng, phạt thuế, tổn thất tài sản sau bảo hiểm bồi thường)."
  },
  {
    code: "821",
    name: "Chi phí thuế thu nhập doanh nghiệp",
    type: "Chi phí khác",
    description: "Phản ánh tổng hợp chi phí thuế thu nhập doanh nghiệp bao gồm thuế TNDN hiện hành và thuế TNDN hoãn lại trong kỳ."
  },
  {
    code: "8211",
    name: "Chi phí thuế TNDN hiện hành",
    type: "Chi phí khác",
    description: "Phản ánh số thuế TNDN hiện hành phải nộp tính trên thu nhập chịu thuế trong kỳ."
  },
  {
    code: "82111",
    name: "Chi phí thuế TNDN hiện hành theo Luật thuế TNDN",
    type: "Chi phí khác",
    description: "Phản ánh số thuế TNDN hiện hành tính theo quy định của Luật Thuế TNDN Việt Nam."
  },
  {
    code: "82112",
    name: "Chi phí thuế TNDN bổ sung theo quy định Thuế tối thiểu toàn cầu",
    type: "Chi phí khác",
    description: "Tài khoản mới theo TT99: Phản ánh số chi phí thuế TNDN bổ sung phát sinh theo quy định về cơ chế chống xói mòn cơ sở thuế toàn cầu (Pillar 2 - 15%)."
  },
  {
    code: "8212",
    name: "Chi phí thuế TNDN hoãn lại",
    type: "Chi phí khác",
    description: "Phản ánh chi phí thuế thu nhập doanh nghiệp hoãn lại phát sinh do hoàn nhập tài sản thuế hoãn lại hoặc ghi nhận thuế hoãn lại phải trả."
  },

  // =========================================================================
  // LOẠI 9: XÁC ĐỊNH KẾT QUẢ KINH DOANH
  // =========================================================================
  {
    code: "911",
    name: "Xác định kết quả kinh doanh",
    type: "Xác định kết quả kinh doanh",
    description: "Tài khoản trung gian cuối kỳ dùng để kết chuyển toàn bộ doanh thu, thu nhập (loại 5, 7) và chi phí (loại 6, 8, 821) nhằm xác định lãi thuần hoặc lỗ thuần trong kỳ kế toán chuyển sang TK 421."
  }
];