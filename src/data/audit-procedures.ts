import type { Pillar } from '@/types/tax-audit';

export interface AuditProcedure {
  id: string;
  title: string;
  pillar: Pillar;
  question: string;
  scope: string;
  records: string[];
  steps: { title: string; action: string; output: string }[];
  exceptions: string[];
  completion: string[];
  columns: string[];
  laws: string[];
}

export const AUDIT_PROCEDURES: AuditProcedure[] = [
  {
    id: 'wood',
    title: '01 · Truy nguyên nguồn gốc lô gỗ xẻ đến sản phẩm nội thất',
    pillar: 'interior',
    question: 'Làm thế nào để chứng minh chuỗi khép kín từ hóa đơn mua gỗ, hồ sơ lâm sản hợp pháp đến lệnh sản xuất xưởng mộc và bàn giao nội thất?',
    scope: 'Áp dụng cho toàn bộ gỗ xẻ, gỗ thanh và ván gỗ đưa vào sản xuất nội thất văn phòng, hội trường Kiểu Việt. Hướng dẫn kế toán viên phân loại riêng theo từng lô nhập, phân biệt gỗ rừng trồng trong nước và gỗ nhập khẩu.',
    records: [
      'Hợp đồng kinh tế, biên bản giao nhận hàng và hóa đơn điện tử GTGT từ nhà cung cấp gỗ xẻ.',
      'Bảng kê lâm sản có xác nhận của Hạt Kiểm lâm địa bàn hoặc đơn vị xuất bán theo Thông tư 26/2025/TT-BNNMT & Thông tư 26/2022/TT-BNNPTNT.',
      'Phiếu nhập kho TK 152, Thẻ kho, Lệnh sản xuất phân xưởng mộc và Bảng bóc tách khối lượng (BOM).',
      'Thẻ tính giá thành TK 154, Phiếu nhập kho thành phẩm TK 155, Biên bản nghiệm thu bàn giao lắp đặt A-B và Hóa đơn GTGT xuất bán.'
    ],
    steps: [
      {
        title: 'Bước 1: Xuất bảng tổng hợp Nhập - Xuất - Tồn TK 152',
        action: 'Xuất sổ chi tiết nguyên liệu gỗ xẻ trên phần mềm kế toán theo từng mã gỗ (gỗ gõ, sồi, thông, MDF). Rà soát và gán mã lô tương ứng với từng hóa đơn đầu vào.',
        output: 'Bảng theo dõi lô gỗ có số dư đầu kỳ, khối lượng nhập trong kỳ và đơn giá nhập kho.'
      },
      {
        title: 'Bước 2: Ghép nối hóa đơn mua với hồ sơ lâm sản hợp pháp',
        action: 'Kẹp liên 1 Hóa đơn GTGT với Bảng kê lâm sản, Biên bản cân đo/giao nhận và Ủy nhiệm chi qua ngân hàng. Đảm bảo tên loài gỗ trên hóa đơn trùng khớp hoàn toàn với bảng kê lâm sản.',
        output: 'Bộ hồ sơ chứng từ gốc hoàn chỉnh của từng lô gỗ mua vào, sẵn sàng phục vụ đoàn thanh tra.'
      },
      {
        title: 'Bước 3: Đối chiếu Lệnh sản xuất với Đơn hàng xuất bán',
        action: 'Khớp phiếu xuất kho gỗ TK 152 với Lệnh sản xuất cho từng đơn hàng (ví dụ: Đơn hàng bàn họp UBND tỉnh, bàn ghế BIDV Gia Lai). Kiểm tra lượng gỗ xuất dùng tương ứng với định mức kỹ thuật đã duyệt.',
        output: 'Cầu nối liên hoàn: Phiếu xuất kho 152 → Chi phí sản xuất 154 → Nhập thành phẩm 155 → Giá vốn 632.'
      },
      {
        title: 'Bước 4: Kiểm kê kho thực tế và lập biên bản giải trình chênh lệch',
        action: 'Đối chiếu số dư tồn kho trên sổ sách với Biên bản kiểm kê thực tế tại xưởng mộc Kiểu Việt. Nếu có chênh lệch do độ ẩm hoặc quy cách xẻ, lập ngay bản giải trình kỹ thuật có chữ ký quản đốc xưởng.',
        output: 'Bảng giải trình tồn kho thực tế kèm chữ ký của Thủ kho, Quản đốc xưởng mộc và Kế toán trưởng.'
      }
    ],
    exceptions: [
      'Trường hợp nhà cung cấp chậm gửi Bảng kê lâm sản có dấu Kiểm lâm: Kế toán liên hệ ngay bên bán yêu cầu gửi bổ sung bản có dấu đỏ, đồng thời kẹp trước hợp đồng, biên bản kiểm lâm sở tại và ủy nhiệm chi để chứng minh giao dịch có thật.',
      'Khi đoàn kiểm tra yêu cầu đối chiếu kích thước gỗ tròn quy đổi ra gỗ xẻ: Sử dụng Bảng hệ số quy đổi nội bộ ban hành kèm Quyết định định mức của Tổng Giám đốc để bảo vệ.'
    ],
    completion: [
      '100% các lô gỗ xuất kho đều truy xuất được đến Lệnh sản xuất và Hợp đồng bán nội thất cụ thể.',
      'Hồ sơ kẹp cùng có đủ: Hóa đơn, Bảng kê lâm sản, Phiếu nhập/xuất kho và Chứng từ thanh toán ngân hàng.'
    ],
    columns: ['Mã lô gỗ', 'Chủng loại gỗ', 'Nhà cung cấp', 'Đơn vị tính', 'Tồn đầu kỳ', 'Nhập trong kỳ', 'Xuất sản xuất', 'Tồn cuối kỳ', 'Đơn hàng sử dụng', 'Số hóa đơn GTGT', 'Bảng kê lâm sản', 'Ghi chú đối soát'],
    laws: ['nd-102-2020-go', 'nd-120-2024-go', 'tt-26-2022-lamsan', 'tt-26-2025-lamsan', 'tt-84-2025-lamsan']
  },
  {
    id: 'yield',
    title: '02 · Bảo vệ định mức tiêu hao gỗ, sơn PU và thu hồi phế liệu',
    pillar: 'interior',
    question: 'Làm thế nào để bảo vệ tỷ lệ hao hụt mùn cưa, dăm bào và định mức sơn PU xưởng mộc khi bị đoàn kiểm tra cho rằng cao hơn trung bình ngành?',
    scope: 'Áp dụng cho toàn bộ hoạt động gia công, cưa xẻ gỗ tự nhiên và phun sơn hoàn thiện nội thất. Hướng dẫn kế toán viên lập hồ sơ định mức tự xây dựng theo Thông tư 96/2015/TT-BTC.',
    records: [
      'Quyết định của Tổng Giám đốc Kiểu Việt phê duyệt Định mức Kinh tế - Kỹ thuật xưởng mộc từ đầu năm tài chính.',
      'Bản vẽ kỹ thuật chi tiết (Shop drawing), bảng bóc tách khối lượng vật tư (BOM) từng đơn hàng.',
      'Thẻ theo dõi phế liệu thu hồi (mùn cưa, dăm bào, đầu mẩu) và hóa đơn GTGT xuất bán phế liệu hạch toán TK 711.',
      'Biên bản kiểm tra chất lượng sản phẩm (KCS) và phiếu báo hỏng, sửa chữa bổ sung vật tư nếu có.'
    ],
    steps: [
      {
        title: 'Bước 1: Chuẩn bị Quyết định ban hành định mức nội bộ',
        action: 'In sẵn Quyết định định mức số 02/QĐ-KV ban hành từ đầu năm tài chính. Căn cứ Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC, doanh nghiệp tự xây dựng định mức và lưu tại trụ sở, không phải nộp cho cơ quan thuế.',
        output: 'Bản gốc Quyết định phê duyệt định mức có chữ ký của Tổng Giám đốc và dấu đỏ công ty.'
      },
      {
        title: 'Bước 2: Tính toán mức tiêu hao kỳ vọng theo sản lượng hoàn thành',
        action: 'Lấy số lượng bàn ghế, tủ kệ thực tế đã nghiệm thu nhân với định mức kỹ thuật đã duyệt để ra lượng vật tư lý thuyết được phép đưa vào chi phí hợp lý.',
        output: 'Bảng tổng hợp định mức vật tư kỳ vọng chi tiết theo từng đơn hàng.'
      },
      {
        title: 'Bước 3: Đối soát với khối lượng xuất dùng thực tế trên TK 621',
        action: 'So sánh lượng vật tư thực xuất trên phiếu xuất kho TK 152 với mức lý thuyết. Tách riêng hao hụt phôi gỗ tự nhiên (18% - 22%) do yêu cầu kỹ thuật bào 4 mặt và chà nhám.',
        output: 'Bảng đối chiếu định mức và thực tế, phân tích nguyên nhân các trường hợp chênh lệch.'
      },
      {
        title: 'Bước 4: Kẹp chứng từ thu hồi và xuất bán phế liệu mùn cưa',
        action: 'Tập hợp toàn bộ phiếu nhập kho phế liệu đầu mẩu, mùn cưa và hóa đơn GTGT xuất bán phế liệu cho các cơ sở sản xuất viên nén, chứng minh đã ghi nhận doanh thu khác TK 711 đầy đủ.',
        output: 'Bộ hồ sơ chứng minh thu hồi phế liệu và nộp thuế TNDN 20% trên TK 711 đúng quy định.'
      }
    ],
    exceptions: [
      'Khi đoàn kiểm tra so sánh với định mức gỗ công nghiệp phẳng: Giải trình rõ sản phẩm Kiểu Việt là nội thất tự nhiên cao cấp, hàng đặt theo thiết kế riêng (bo cong, chạm khắc) nên hao hụt cao hơn gỗ MDF cắt phẳng công nghiệp.',
      'Nếu phát sinh lô hàng lỗi phải sửa chữa tốn thêm sơn PU: Kẹp Biên bản nghiệm thu KCS lỗi kỹ thuật và Quyết định xử lý sơn dặm lại của Quản đốc.'
    ],
    completion: [
      'Có đủ Quyết định định mức từ đầu năm, bảng BOM từng sản phẩm và hóa đơn xuất bán phế liệu TK 711.',
      'Chênh lệch thực tế và định mức được giải trình rõ ràng bằng biên bản kỹ thuật xưởng.'
    ],
    columns: ['Đơn hàng', 'Mã sản phẩm', 'Loại vật tư', 'Sản lượng hoàn thành', 'Định mức duyệt', 'Thực xuất kho', 'Tỷ lệ hao hụt (%)', 'Phế liệu thu hồi', 'Chênh lệch', 'Căn cứ giải trình'],
    laws: ['tt-96-2015', 'vas-02', 'nd-320-2025']
  },
  {
    id: 'wip',
    title: '03 · Rà soát chi phí dở dang TK 154 và trích trước TK 335 công trình',
    pillar: 'construction',
    question: 'Làm thế nào để bảo vệ chi phí dở dang TK 154 treo lâu và các khoản chi phí trích trước TK 335 của công trình đã bàn giao?',
    scope: 'Áp dụng cho các công trình thi công xây lắp hạ tầng và gói thầu cung cấp nội thất kéo dài qua năm tài chính của Kiểu Việt.',
    records: [
      'Sổ chi tiết tài khoản 154 (theo từng công trình, hạng mục) và Sổ chi tiết tài khoản 335.',
      'Hợp đồng thi công xây lắp, Phụ lục hợp đồng, Hồ sơ dự toán và Nhật ký thi công công trình.',
      'Biên bản nghiệm thu khối lượng hoàn thành giai đoạn hoặc Biên bản nghiệm thu bàn giao đưa vào sử dụng A-B.',
      'Bảng tính chi phí trích trước giá vốn công trình kèm hợp đồng thầu phụ, hóa đơn thầu phụ về sau kỳ khóa sổ.'
    ],
    steps: [
      {
        title: 'Bước 1: Lập cầu nối số dư TK 154 theo từng công trình',
        action: 'Kiểm tra công thức: Dư đầu kỳ + Chi phí phát sinh trong kỳ (621, 622, 623, 627) - Kết chuyển giá vốn 632 = Dư cuối kỳ. Khớp chính xác với Sổ cái TK 154.',
        output: 'Bảng theo dõi chi phí sản xuất kinh doanh dở dang chi tiết 100% công trình.'
      },
      {
        title: 'Bước 2: Phân loại tuổi dở dang và tình trạng pháp lý dự án',
        action: 'Ghi rõ ngày khởi công, ngày nghiệm thu gần nhất, tiến độ giải ngân của chủ đầu tư. Đối với công trình dở dang trên 12 tháng, kẹp xác nhận tiến độ của Ban Quản lý dự án.',
        output: 'Danh sách công trình dở dang có giải trình tiến độ thực tế từ Chỉ huy trưởng công trình.'
      },
      {
        title: 'Bước 3: Rà soát công trình đã bàn giao nhưng chưa xuất hóa đơn',
        action: 'Đối chiếu ngày ký Biên bản nghiệm thu bàn giao A-B với ngày hạch toán doanh thu 511 và ngày xuất hóa đơn GTGT. Đảm bảo đã ghi nhận doanh thu đúng thời điểm bàn giao theo Thông tư 96/2015.',
        output: 'Bảng rà soát thời điểm nghiệm thu bàn giao và đối ứng doanh thu - giá vốn.'
      },
      {
        title: 'Bước 4: Đối chiếu chi phí trích trước TK 335 với hóa đơn về sau',
        action: 'Lập bảng đối chiếu từng khoản trích trước TK 335 với hợp đồng thầu phụ đã ký và hóa đơn GTGT thực tế nhận được trong quý 1 năm sau trước thời điểm nộp hồ sơ quyết toán TNDN.',
        output: 'Bảng đối soát trích trước TK 335 và hóa đơn thực tế hoàn thành nghĩa vụ.'
      }
    ],
    exceptions: [
      'Khi công trình đã bàn giao nhưng chủ đầu tư chưa thanh toán: Giải trình rõ việc chậm thanh toán do thủ tục kho bạc nhà nước, doanh nghiệp đã chủ động ghi nhận doanh thu và giá vốn đúng chuẩn mực kế toán VAS 14.',
      'Khoản trích trước TK 335 còn hóa đơn thầu phụ chưa về: Căn cứ Hợp đồng thầu phụ và Biên bản nghiệm thu nội bộ A-B để chứng minh chi phí đã phát sinh thực tế phục vụ doanh thu trong kỳ.'
    ],
    completion: [
      '100% số dư dở dang TK 154 có hồ sơ dự toán và hợp đồng tương ứng.',
      'Các khoản trích trước TK 335 có đủ căn cứ hợp đồng và hóa đơn bổ sung trước thời điểm quyết toán.'
    ],
    columns: ['Tên công trình/hạng mục', 'Dư đầu kỳ 154', 'Phát sinh nợ', 'Kết chuyển 632', 'Dư cuối kỳ 154', 'Ngày nghiệm thu A-B', 'Số trích trước 335', 'Hóa đơn về sau', 'Chênh lệch', 'Phương án bảo vệ'],
    laws: ['tt-200-2014', 'tt-99-2025', 'tt-96-2015', 'nd-320-2025']
  },
  {
    id: 'revenue',
    title: '04 · Đối soát chênh lệch Doanh thu 511, Tờ khai GTGT và Quyết toán TNDN',
    pillar: 'interior',
    question: 'Làm thế nào để lập bảng giải trình chi tiết khi Doanh thu trên Sổ cái TK 511 lệch so với Tờ khai thuế GTGT và Tờ khai quyết toán thuế TNDN?',
    scope: 'Áp dụng cho toàn bộ doanh thu bán đồ gỗ nội thất, bê tông thương phẩm, đá xây dựng và thi công lắp đặt của Kiểu Việt.',
    records: [
      'Sổ cái tài khoản 511 (Doanh thu bán hàng và cung cấp dịch vụ) và Sổ chi tiết TK 521 (Các khoản giảm trừ).',
      'Tờ khai thuế GTGT 01/GTGT của 4 quý (hoặc 12 tháng) và các Tờ khai bổ sung 01/KHBS nếu có.',
      'Tờ khai quyết toán thuế TNDN mẫu 03/TNDN (đặc biệt chỉ tiêu [A1] Doanh thu và [B4] Các khoản điều chỉnh tăng).',
      'Bảng tổng hợp hóa đơn điện tử xuất trong năm, biên bản giảm trừ doanh thu, chiết khấu thương mại và hàng bán trả lại.'
    ],
    steps: [
      {
        title: 'Bước 1: Tập hợp số liệu doanh thu từ 3 nguồn độc lập',
        action: 'Lấy số liệu từ: (1) Tổng doanh thu chưa thuế trên các tờ khai 01/GTGT, (2) Phát sinh Có TK 511 trên Sổ cái, (3) Doanh thu tính thuế trên Tờ khai 03/TNDN.',
        output: 'Bảng so sánh 3 cột doanh thu kèm độ lệch số học tuyệt đối.'
      },
      {
        title: 'Bước 2: Phân loại chi tiết từng nguyên nhân chênh lệch',
        action: 'Tách biệt các nhóm: (a) Chênh lệch thời điểm nghiệm thu công trình xây lắp cuối năm, (b) Giảm trừ doanh thu hàng bán bị trả lại theo Điều 19 NĐ 123/2020, (c) Chiết khấu thanh toán hạch toán TK 635 không giảm trừ 511.',
        output: 'Bảng phân nhóm nguyên nhân chênh lệch có mã chứng từ kèm theo.'
      },
      {
        title: 'Bước 3: Kẹp chứng từ chứng minh cho từng khoản chênh lệch',
        action: 'Với mỗi nguyên nhân, kẹp đầy đủ: Biên bản nghiệm thu A-B, Hóa đơn điện tử xuất đầu năm sau, Biên bản trả hàng và phiếu nhập kho hàng lỗi.',
        output: 'Hồ sơ tài liệu gốc chứng minh cho 100% số tiền chênh lệch.'
      },
      {
        title: 'Bước 4: Điền Mẫu công văn giải trình số 01/GT-DT',
        action: 'Sử dụng Mẫu 01 trong tab "Mẫu Biểu Giải Trình", điền số liệu đã đối chiếu, in trình Tổng Giám đốc ký đóng dấu gửi Đoàn kiểm tra.',
        output: 'Công văn giải trình doanh thu hoàn chỉnh đúng chuẩn thể thức hành chính NĐ 30/2020.'
      }
    ],
    exceptions: [
      'Nếu đoàn kiểm tra cho rằng phải xuất hóa đơn ngay trong năm đối với công trình nghiệm thu ngày 31/12: Căn cứ Điều 9 Nghị định 123/2020/NĐ-CP và VAS 14 giải trình doanh nghiệp đã tự giác kê khai nộp thuế TNDN đúng kỳ, không làm thất thoát ngân sách.',
      'Khoản chiết khấu thương mại cho đại lý: Xuất trình Hợp đồng phân phối và Phụ lục quy định tỷ lệ đạt doanh số để chứng minh tính hợp pháp.'
    ],
    completion: [
      'Tổng các nguyên nhân giải trình khớp 100% với số chênh lệch số học.',
      'Có đủ Biên bản nghiệm thu, Hóa đơn điều chỉnh và Công văn giải trình ký đóng dấu.'
    ],
    columns: ['Kỳ phát sinh', 'Mảng nghiệp vụ', 'Doanh thu GTGT', 'Doanh thu TK 511', 'Doanh thu 03/TNDN', 'Chênh lệch', 'Nguyên nhân cụ thể', 'Số hiệu chứng từ', 'Căn cứ pháp lý', 'Tình trạng hồ sơ'],
    laws: ['nd-123-2020', 'tt-219-2013', 'tt-96-2015', 'nd-320-2025']
  },
  {
    id: 'payment',
    title: '05 · Rà soát hóa đơn đầu vào và chứng từ thanh toán không dùng tiền mặt',
    pillar: 'interior',
    question: 'Làm thế nào để đảm bảo 100% hóa đơn mua vật tư, dịch vụ từ 20 triệu đồng trở lên có chứng từ thanh toán ngân hàng hợp lệ?',
    scope: 'Áp dụng cho toàn bộ hóa đơn mua nguyên vật liệu, phụ tùng xe bồn, xăng dầu, dịch vụ thầu phụ của Kiểu Việt.',
    records: [
      'Bảng kê hóa đơn GTGT mua vào trên tờ khai thuế và hóa đơn điện tử định dạng XML/PDF gốc.',
      'Sổ phụ ngân hàng, Ủy nhiệm chi (UNC) có xác nhận của ngân hàng thương mại.',
      'Sổ chi tiết công nợ nhà cung cấp TK 331 và Biên bản bù trừ công nợ 2 bên (nếu có thanh toán bù trừ).',
      'Thông báo của cơ quan thuế về danh sách doanh nghiệp bỏ trốn, ngừng hoạt động (nếu có cảnh báo).'
    ],
    steps: [
      {
        title: 'Bước 1: Lọc danh sách hóa đơn từ 20 triệu đồng trở lên',
        action: 'Xuất bảng kê mua vào, lọc các hóa đơn có tổng thanh toán từ 20.000.000 đồng (bao gồm thuế GTGT). Đối với hóa đơn dưới 20 triệu mua nhiều lần trong ngày của một người bán, kiểm tra để đảm bảo không bị cộng gộp vi phạm.',
        output: 'Danh mục hóa đơn thuộc diện bắt buộc phải thanh toán không dùng tiền mặt.'
      },
      {
        title: 'Bước 2: Ghép nối từng hóa đơn với Ủy nhiệm chi ngân hàng',
        action: 'Đối chiếu số tài khoản thụ hưởng trên Ủy nhiệm chi với thông tin nhà cung cấp trên hợp đồng. Kẹp UNC photo cùng hóa đơn mua vào.',
        output: 'Bảng theo dõi thanh toán ngân hàng: Hóa đơn ↔ Ngày chuyển tiền ↔ Số UNC.'
      },
      {
        title: 'Bước 3: Rà soát chứng từ thanh toán bù trừ công nợ',
        action: 'Nếu thanh toán bằng hình thức bù trừ hàng đổi hàng hoặc cấn trừ công nợ 3 bên, kiểm tra Hợp đồng có điều khoản bù trừ, Biên bản đối chiếu bù trừ có đủ chữ ký đại diện pháp luật 2 bên.',
        output: 'Hồ sơ bù trừ công nợ hợp lệ theo Khoản 10 Điều 1 Thông tư 26/2015/TT-BTC.'
      },
      {
        title: 'Bước 4: Tra cứu tình trạng hoạt động của nhà cung cấp trên cổng Thuế',
        action: 'Sử dụng công cụ tra cứu người nộp thuế để kiểm tra trạng thái hoạt động của nhà cung cấp tại thời điểm phát sinh hóa đơn, chuẩn bị sẵn tài liệu giao nhận hàng thực tế nếu nhà cung cấp sau đó đã giải thể.',
        output: 'Báo cáo rủi ro hóa đơn đầu vào kèm bộ chứng từ hàng thật việc thật.'
      }
    ],
    exceptions: [
      'Trường hợp mua hàng trả chậm chưa đến hạn thanh toán theo hợp đồng: Kẹp điều khoản thanh toán trong hợp đồng kinh tế chứng minh khoản nợ chưa đến hạn, được kê khai khấu trừ thuế GTGT theo luật định.',
      'Nếu nhà cung cấp bị cơ quan thuế thông báo ngừng hoạt động sau thời điểm mua hàng: Chuẩn bị ngay bộ hồ sơ "Hàng thật - Tiền thật" gồm: Hợp đồng, Biên bản giao nhận tại kho Kiểu Việt, Phiếu cân xe, Sao kê ngân hàng.'
    ],
    completion: [
      '100% hóa đơn trên 20 triệu đã thanh toán đều có UNC ngân hàng kẹp kèm.',
      'Các trường hợp bù trừ công nợ có đầy đủ Hợp đồng và Biên bản đối chiếu hợp lệ.'
    ],
    columns: ['Mã nhà cung cấp', 'Tên người bán', 'Số hóa đơn', 'Ngày hóa đơn', 'Tổng thanh toán', 'Số tiền chuyển khoản', 'Số UNC ngân hàng', 'Ngày chuyển', 'Tình trạng nợ', 'Ghi chú rủi ro'],
    laws: ['tt-219-2013', 'nd-181-2025', 'nd-144-2026', 'nd-320-2025']
  },
  {
    id: 'related',
    title: '06 · Bảo vệ chi phí lãi vay và quan hệ giao dịch liên kết',
    pillar: 'consulting',
    question: 'Làm thế nào để xác định chính xác quan hệ liên kết và lập hồ sơ bảo vệ chi phí lãi vay không vượt trần 30% EBITDA theo Nghị định 132 & Nghị định 20/2025?',
    scope: 'Áp dụng cho các khoản vay vốn ngân hàng, mượn tiền cổ đông, người quản lý điều hành hoặc các công ty trong hệ sinh thái Kiểu Việt.',
    records: [
      'Sổ chi tiết tài khoản 341 (Vay và nợ thuê tài chính), TK 1388, TK 3388 theo từng đối tượng.',
      'Hợp đồng tín dụng ngân hàng, Hợp đồng vay vốn cá nhân/cổ đông, Khế ước nhận nợ và Chứng từ trả lãi vay.',
      'Báo cáo tài chính năm đã kiểm toán, Tờ khai quyết toán TNDN mẫu 03/TNDN và Phụ lục giao dịch liên kết (Mẫu 01).',
      'Bảng tính EBITDA và mô phỏng khống chế trần chi phí lãi vay 30% theo Nghị định 132/2020 và Nghị định 20/2025/NĐ-CP.'
    ],
    steps: [
      {
        title: 'Bước 1: Rà soát quan hệ liên kết theo quy định mới',
        action: 'Kiểm tra tỷ lệ sở hữu vốn (từ 25% trở lên), quan hệ người quản lý điều hành và các khoản vay/bảo lãnh nợ theo Nghị định 132/2020 và Nghị định sửa đổi 20/2025/NĐ-CP.',
        output: 'Bảng xác định danh sách các bên liên kết thực tế của Kiểu Việt.'
      },
      {
        title: 'Bước 2: Phân tách rõ ràng giữa tiền vay có lãi và tiền mượn không lãi',
        action: 'Tách biệt các khoản vay ngân hàng (có trả lãi) với các khoản tạm mượn tiền phục vụ hoạt động sản xuất ngắn hạn của thành viên HĐQT, đảm bảo vốn điều lệ đã góp đủ 100%.',
        output: 'Bảng phân loại dư nợ vay và chi phí lãi vay thực tế phát sinh trong năm.'
      },
      {
        title: 'Bước 3: Tính toán chỉ số EBITDA và trần chi phí lãi vay được trừ',
        action: 'Sử dụng công thức: EBITDA = Lợi nhuận thuần từ HĐKD + Chi phí lãi vay thuần + Khấu hao tài sản. Tính mức trần 30% EBITDA để xác định số lãi vay được trừ và phần vượt trần.',
        output: 'Bảng tính chi phí lãi vay hợp lý và số chi phí lãi vay chuyển tiếp kỳ sau.'
      },
      {
        title: 'Bước 4: Lập phụ lục chuyển chi phí lãi vay chưa được trừ sang kỳ sau',
        action: 'Ghi nhận phần lãi vay vượt 30% vào chỉ tiêu [B4] trên tờ khai quyết toán TNDN và theo dõi chuyển tiếp vào chi phí được trừ của các năm tiếp theo (thời hạn tối đa 5 năm).',
        output: 'Bảng theo dõi chuyển tiếp chi phí lãi vay hợp lệ cho kỳ tính thuế sau.'
      }
    ],
    exceptions: [
      'Trường hợp doanh nghiệp vay vốn ngân hàng thương mại độc lập: Căn cứ Nghị định 20/2025/NĐ-CP chứng minh ngân hàng thương mại không tham gia điều hành, kiểm soát hoạt động của Kiểu Việt để loại trừ quan hệ liên kết thuần túy do tín dụng.',
      'Nếu EBITDA âm: Toàn bộ chi phí lãi vay phát sinh được kết chuyển để bù trừ vào các năm sau khi EBITDA dương, tối đa không quá 5 năm.'
    ],
    completion: [
      'Có đầy đủ Hợp đồng vay, Khế ước nhận nợ và Biên bản góp vốn điều lệ 100%.',
      'Bảng tính 30% EBITDA chính xác, điền đầy đủ Phụ lục giao dịch liên kết nộp kèm BCTC.'
    ],
    columns: ['Đối tượng cho vay', 'Quan hệ liên kết', 'Dư nợ đầu kỳ', 'Vay trong kỳ', 'Trả trong kỳ', 'Dư nợ cuối kỳ', 'Chi phí lãi vay', 'Mức trần 30% EBITDA', 'Phần vượt trần', 'Chuyển kỳ sau'],
    laws: ['nd-132-2020', 'nd-20-2025', 'tt-96-2015']
  },
  {
    id: 'debt',
    title: '07 · Xử lý công nợ bê tông khó đòi và trích lập dự phòng TK 2293',
    pillar: 'concrete_materials',
    question: 'Làm thế nào để hồ sơ trích lập dự phòng nợ khó đòi tiền bán bê tông thương phẩm đủ điều kiện được trừ vào chi phí tính thuế TNDN?',
    scope: 'Áp dụng cho các khoản nợ quá hạn của các nhà thầu thi công xây dựng, khách hàng mua bê tông tươi Kiểu Việt.',
    records: [
      'Sổ chi tiết công nợ phải thu khách hàng TK 131 và Sổ tài khoản 2293 (Dự phòng nợ phải thu khó đòi).',
      'Hợp đồng mua bán bê tông, Biên bản đối chiếu công nợ có chữ ký xác nhận của đại diện pháp luật 2 bên.',
      'Biên bản bàn giao bê tông tại công trường, Phiếu kiểm tra độ sụt và kết quả nén mẫu R28.',
      'Thư đòi nợ, văn bản đôn đốc thanh toán, giấy báo phát chuyển phát nhanh bưu điện hoặc đơn khởi kiện nếu có.'
    ],
    steps: [
      {
        title: 'Bước 1: Chốt số dư công nợ và hạn thanh toán theo hợp đồng',
        action: 'Kiểm tra ngày đến hạn thanh toán quy định trong Hợp đồng mua bán bê tông (thường là 30 - 45 ngày sau khi kết thúc tháng đổ bê tông). Xác định chính xác ngày bắt đầu quá hạn.',
        output: 'Danh mục các khoản nợ quá hạn có căn cứ hợp đồng và biên bản đối chiếu.'
      },
      {
        title: 'Bước 2: Phân loại tuổi nợ theo quy định Thông tư 48 & Thông tư 24',
        action: 'Phân nhóm tuổi nợ: Từ 6 tháng đến dưới 1 năm (trích 30%), từ 1 năm đến dưới 2 năm (trích 50%), từ 2 năm đến dưới 3 năm (trích 70%), từ 3 năm trở lên (trích 100%).',
        output: 'Bảng tính tuổi nợ và tỷ lệ trích lập dự phòng chi tiết theo từng khách hàng.'
      },
      {
        title: 'Bước 3: Thu thập bộ chứng từ đòi nợ bắt buộc',
        action: 'Tập hợp tối thiểu 02 lần gửi Thông báo đòi nợ có bưu tá ký nhận hoặc Giấy báo phát của bưu điện, Biên bản làm việc về phương án thu hồi nợ giữa 2 công ty.',
        output: 'Tập tài liệu chứng minh doanh nghiệp đã tích cực áp dụng các biện pháp thu hồi nợ.'
      },
      {
        title: 'Bước 4: Lập Bảng trích lập dự phòng nợ phải thu khó đòi',
        action: 'Lập Hội đồng xử lý nợ, ban hành Quyết định trích lập dự phòng TK 2293 và hạch toán vào chi phí quản lý doanh nghiệp TK 642 tại thời điểm khóa sổ năm tài chính.',
        output: 'Quyết định trích lập dự phòng có phê duyệt của Ban Giám đốc kèm bảng kê chi tiết.'
      }
    ],
    exceptions: [
      'Nếu khách hàng chưa ký Biên bản đối chiếu nợ: Căn cứ Hợp đồng, Hóa đơn GTGT và Phiếu giao bê tông có chữ ký người nhận tại công trường kẹp kèm Thông báo đòi nợ gửi qua bưu điện bảo đảm.',
      'Trường hợp khách hàng phá sản, giải thể hoặc chủ doanh nghiệp bỏ trốn: Bổ sung Thông báo của Tòa án hoặc cơ quan đăng ký kinh doanh để trích lập 100% không phụ thuộc thời gian quá hạn.'
    ],
    completion: [
      'Có đầy đủ Hợp đồng, Hóa đơn, Biên bản giao bê tông và Chứng từ đòi nợ gửi bảo đảm qua bưu điện.',
      'Mức trích lập tuân thủ đúng khung thời gian quy định tại Thông tư 48/2019 và Thông tư 24/2022/TT-BTC.'
    ],
    columns: ['Tên khách hàng nợ', 'Hợp đồng mua bán', 'Số nợ gốc còn lại', 'Ngày đến hạn thanh toán', 'Ngày tính quá hạn', 'Số tháng quá hạn', 'Tỷ lệ trích lập (%)', 'Số tiền dự phòng', 'Hồ sơ đòi nợ kẹp cùng', 'Trạng thái xử lý'],
    laws: ['tt-48-2019', 'tt-24-2022', 'tt-96-2015', 'nd-320-2025']
  },
  {
    id: 'payroll',
    title: '08 · Rà soát chi phí nhân công xưởng mộc, trạm trộn và cam kết thuế TNCN 08/CK',
    pillar: 'interior',
    question: 'Làm thế nào để bảo vệ chi phí nhân công thời vụ, khoán việc xưởng gỗ và thợ mộc không bị đoàn kiểm tra truy thu 10% thuế TNCN và loại trừ chi phí hợp lý?',
    scope: 'Áp dụng cho toàn bộ lao động ký hợp đồng chính thức, nhân công thời vụ khoán việc xưởng mộc và công nhân vận hành trạm trộn bê tông Kiểu Việt.',
    records: [
      'Bảng thanh toán tiền lương, Bảng chấm công hàng tháng có chữ ký xác nhận của người lao động.',
      'Hợp đồng lao động (chính thức) hoặc Hợp đồng giao khoán công việc chuyên môn ngắn hạn.',
      'Bản cam kết thu nhập mẫu 08/CK-TNCN (theo Thông tư 80/2021) kèm Căn cước công dân photo của lao động thời vụ.',
      'Chứng từ chi trả lương qua tài khoản ngân hàng hoặc Phiếu chi tiền mặt có chữ ký của từng cá nhân.',
      'Hồ sơ trích nộp Bảo hiểm xã hội, BHYT, BHTN và Tờ khai quyết toán thuế TNCN mẫu 05/QTT-TNCN.'
    ],
    steps: [
      {
        title: 'Bước 1: Phân loại danh sách lao động theo tính chất công việc',
        action: 'Tách riêng 2 nhóm: (1) Lao động ký hợp đồng lao động từ 3 tháng trở lên (đóng BHXH và tính thuế lũy tiến), (2) Lao động thời vụ, khoán việc dưới 3 tháng (áp dụng cam kết 08/CK-TNCN).',
        output: 'Danh sách nhân sự phân loại rõ ràng theo từng phòng ban, phân xưởng.'
      },
      {
        title: 'Bước 2: Rà soát điều kiện hợp lệ của Bản cam kết 08/CK-TNCN',
        action: 'Kiểm tra 3 điều kiện bắt buộc: (a) Người lao động đã có Mã số thuế cá nhân tại thời điểm làm cam kết, (b) Chỉ có duy nhất thu nhập tại Kiểu Việt, (c) Ước tính tổng thu nhập trong năm chưa đến mức phải nộp thuế.',
        output: 'Tập hồ sơ cam kết 08/CK-TNCN chuẩn mực kèm bản sao CCCD hợp lệ.'
      },
      {
        title: 'Bước 3: Khớp dòng tiền chi trả lương với Sổ cái TK 334',
        action: 'Đối chiếu tổng chi phí lương phát sinh trên TK 622, 627, 642 với phát sinh Có TK 334 và phát sinh Nợ TK 334 (tiền thực chi trả). Đảm bảo không nợ lương quá thời hạn quyết toán TNDN.',
        output: 'Bảng cân đối công nợ tiền lương và chứng từ thanh toán tiền mặt/ngân hàng.'
      },
      {
        title: 'Bước 4: Đối chiếu số liệu với Tờ khai quyết toán TNCN 05/QTT',
        action: 'Kiểm tra tổng thu nhập chịu thuế trên phụ lục 05-1/BK-TNCN và 05-2/BK-TNCN khớp hoàn toàn với tổng chi phí tiền lương đã tính vào chi phí được trừ trên tờ khai 03/TNDN.',
        output: 'Bảng đối chiếu khớp 100% giữa Chi phí lương TNDN và Quyết toán TNCN.'
      }
    ],
    exceptions: [
      'Khi đoàn kiểm tra cho rằng nhân công thời vụ làm việc liên tục phải đóng BHXH: Xuất trình Hợp đồng khoán việc theo từng công đoạn cụ thể (bào gỗ, phun sơn, bốc vác đá) để chứng minh tính chất khoán gọn sản phẩm theo Bộ luật Lao động.',
      'Trường hợp một số công nhân chưa kịp đăng ký MST cá nhân: Đã thực hiện khấu trừ 10% tại nguồn và kê khai nộp thuế thay vào ngân sách đúng quy định.'
    ],
    completion: [
      'Có đầy đủ Hợp đồng, Bảng chấm công, Bảng thanh toán lương có chữ ký người lao động.',
      '100% lao động thời vụ không khấu trừ 10% có đủ bản cam kết 08/CK-TNCN và CCCD.'
    ],
    columns: ['Họ và tên người lao động', 'Mã số thuế TNCN', 'Số CCCD', 'Bộ phận công tác', 'Loại hợp đồng', 'Tổng thu nhập', 'Tạm ứng', 'Thực nhận', 'Hồ sơ cam kết 08/CK', 'Tình trạng BHXH'],
    laws: ['tt-111-2013', 'tt-80-2021', 'luat-09-2026', 'luat-41-2024']
  },
  {
    id: 'concrete',
    title: '09 · Quản lý cấp phối, mẻ trộn và phiếu giao nhận bê tông thương phẩm',
    pillar: 'concrete_materials',
    question: 'Làm thế nào để bảo vệ định mức tiêu hao xi măng, cát, đá và tỷ lệ hao hụt vận chuyển xe bồn 2% khi thanh tra thuế kiểm tra trạm trộn bê tông?',
    scope: 'Áp dụng cho toàn bộ hoạt động sản xuất, vận chuyển và cung cấp bê tông thương phẩm từ trạm trộn Kiểu Việt đến chân công trình.',
    records: [
      'Bảng thiết kế cấp phối bê tông tiêu chuẩn cho từng mác (M200, M250, M300, M350) có kết quả thí nghiệm LAS-XD.',
      'Nhật ký sản xuất trạm trộn điện tử, Báo cáo mẻ trộn (Batching report) tự động xuất từ phần mềm trạm.',
      'Phiếu xuất xưởng kiêm giao nhận bê tông có chữ ký xác nhận khối lượng và độ sụt của kỹ thuật bên mua.',
      'Biên bản xử lý khối lượng bê tông dư thừa, bê tông hỏng hoặc trả về trạm để đúc cấu kiện phụ.'
    ],
    steps: [
      {
        title: 'Bước 1: Ban hành bảng cấp phối kinh tế - kỹ thuật chuẩn',
        action: 'Chuẩn bị Hồ sơ thiết kế cấp phối của Trung tâm thí nghiệm chuyên ngành xây dựng (LAS-XD) chứng minh lượng xi măng, cát, đá, nước, phụ gia cần thiết cho từng mét khối bê tông.',
        output: 'Bộ cấp phối tiêu chuẩn được Giám đốc điều hành phê duyệt áp dụng chính thức.'
      },
      {
        title: 'Bước 2: Xuất dữ liệu mẻ trộn tự động từ hệ thống trạm',
        action: 'Trích xuất dữ liệu cân tự động của từng mẻ trộn trên máy tính điều khiển trạm. Đối chiếu khối lượng xi măng, đá, cát thực tế đưa vào cối trộn với cấp phối lý thuyết.',
        output: 'Bảng dữ liệu nhật ký mẻ trộn chi tiết từng ngày, từng ca sản xuất.'
      },
      {
        title: 'Bước 3: Ghép nối Phiếu xuất trạm với Phiếu giao nhận công trường',
        action: 'Khớp khối lượng trên Phiếu xuất trạm (sau khi trừ hao hụt dính bồn 1.5% - 2%) với Phiếu giao nhận có chữ ký người nhận của khách hàng tại công trình.',
        output: 'Bộ phiếu giao nhận bê tông đầy đủ chữ ký 2 bên, khớp với khối lượng xuất hóa đơn.'
      },
      {
        title: 'Bước 4: Lập bảng tổng hợp hao hụt và xử lý bê tông trả về',
        action: 'Tập hợp các trường hợp bê tông thừa quay về trạm được thu hồi để đúc cống bi, bó vỉa hè (chuyển sang TK 154 cấu kiện đúc sẵn), chứng minh không thất thoát nguyên vật liệu.',
        output: 'Bảng cân đối vật tư trạm bê tông khép kín từ nguyên liệu đến thành phẩm.'
      }
    ],
    exceptions: [
      'Khi đoàn kiểm tra đòi bóc hao hụt xe bồn 2%: Căn cứ Định mức hao hụt vật liệu trong xây dựng theo Thông tư Bộ Xây dựng và đặc thù bê tông tươi vận chuyển đường đèo dốc Gia Lai để bảo vệ mức hao hụt kỹ thuật tất yếu.',
      'Khối lượng bê tông test mẫu độ sụt không đạt yêu cầu: Xuất trình Biên bản hủy mẻ bê tông tại chỗ có xác nhận của TVGS công trình để tính vào chi phí sản xuất hợp lý.'
    ],
    completion: [
      '100% mẻ bê tông xuất xưởng có kết quả kiểm tra chất lượng R28 và phiếu giao nhận.',
      'Định mức cấp phối có chứng nhận phòng thí nghiệm LAS-XD hợp chuẩn.'
    ],
    columns: ['Ngày đổ', 'Mác bê tông', 'Số hiệu xe bồn', 'Khách hàng / Công trình', 'Khối lượng xuất trạm', 'Hao hụt xe bồn', 'Khối lượng giao nhận', 'Số hóa đơn GTGT', 'Kết quả nén mẫu R28', 'Ghi chú kỹ thuật'],
    laws: ['vas-02', 'tt-96-2015', 'nd-320-2025']
  },
  {
    id: 'consulting',
    title: '10 · Phân bổ thuế GTGT 1% vãng lai công trình xây dựng ngoại tỉnh',
    pillar: 'consulting',
    question: 'Làm thế nào để xác định chính xác công trình nào thuộc diện nộp thuế GTGT vãng lai 1% ngoại tỉnh theo Thông tư 80/2021 và bù trừ nghĩa vụ thuế tại trụ sở chính Gia Lai?',
    scope: 'Áp dụng cho các dự án thi công xây dựng hạ tầng, lắp đặt nội thất tại các tỉnh lân cận (Kon Tum, Đắk Lắk, Bình Định) của Kiểu Việt.',
    records: [
      'Hợp đồng thi công xây dựng, Hợp đồng cung cấp và lắp đặt thiết bị nội thất ngoài tỉnh.',
      'Biên bản nghiệm thu khối lượng xây lắp hoàn thành A-B và Hóa đơn GTGT xuất cho chủ đầu tư ngoại tỉnh.',
      'Tờ khai phân bổ thuế GTGT mẫu 01-6/GTGT nộp cho cơ quan thuế nơi có công trình xây dựng.',
      'Giấy nộp tiền vào ngân sách nhà nước (tiền thuế GTGT 1% vãng lai) tại Kho bạc Nhà nước tỉnh bạn.',
      'Tờ khai thuế GTGT 01/GTGT tại Cục Thuế Gia Lai (Chỉ tiêu [39a] Thuế GTGT đã nộp ở ngoại tỉnh).'
    ],
    steps: [
      {
        title: 'Bước 1: Phân loại bản chất hợp đồng theo quy định Thông tư 80',
        action: 'Căn cứ Điều 13 Thông tư 80/2021/TT-BTC: Phân biệt rõ Hợp đồng thi công xây dựng công trình (thuộc diện nộp vãng lai 1%) với Hợp đồng bán hàng nội thất kèm dịch vụ lắp đặt bảo hành (không thuộc diện nộp vãng lai).',
        output: 'Bảng phân loại dự án ngoại tỉnh xác định nghĩa vụ thuế vãng lai.'
      },
      {
        title: 'Bước 2: Khai và nộp thuế GTGT 1% tại địa phương nơi có công trình',
        action: 'Khi chủ đầu tư nghiệm thu thanh toán, lập Tờ khai mẫu 01-6/GTGT nộp cho cơ quan thuế địa phương nơi thi công và thực hiện nộp tiền 1% doanh thu chưa thuế vào Kho bạc.',
        output: 'Tờ khai 01-6/GTGT và Giấy nộp tiền vào NSNN có xác nhận kho bạc.'
      },
      {
        title: 'Bước 3: Kê khai bù trừ nghĩa vụ thuế tại trụ sở chính Gia Lai',
        action: 'Cầm chứng từ nộp tiền ngoại tỉnh về kê khai vào Chỉ tiêu [39a] trên Tờ khai 01/GTGT nộp Cục Thuế Gia Lai để trừ vào số thuế GTGT phải nộp của toàn công ty.',
        output: 'Bảng theo dõi bù trừ thuế GTGT vãng lai khép kín 2 đầu địa phương.'
      },
      {
        title: 'Bước 4: Lưu trữ hồ sơ bàn giao phục vụ kiểm tra quyết toán',
        action: 'Kẹp liên hoàn: Hợp đồng → Nghiệm thu → Hóa đơn → Giấy nộp tiền kho bạc tỉnh bạn → Tờ khai 01/GTGT Gia Lai để đoàn thanh tra không bắt bẻ nộp chậm hoặc nộp thiếu.',
        output: 'Bộ hồ sơ đối chiếu thuế vãng lai hoàn chỉnh, không rủi ro trùng lặp nghĩa vụ.'
      }
    ],
    exceptions: [
      'Trường hợp hợp đồng cung cấp nội thất văn phòng tại Kon Tum bị cơ quan thuế Kon Tum đòi thu 1%: Xuất trình Hợp đồng chứng minh xưởng sản xuất tại Gia Lai, tại Kon Tum chỉ thực hiện giao hàng và kê đặt bàn ghế, thuộc diện bán hàng thương mại không thuộc đối tượng nộp thuế xây dựng vãng lai theo Thông tư 80.',
      'Nếu số thuế 1% nộp ngoại tỉnh lớn hơn số thuế phải nộp tại Gia Lai: Được chuyển số thuế chưa bù trừ hết sang kỳ khai thuế tiếp theo.'
    ],
    completion: [
      '100% chứng từ nộp tiền kho bạc ngoại tỉnh có giấy nộp tiền hợp lệ.',
      'Số liệu trên Chỉ tiêu [39a] tờ khai Gia Lai khớp chính xác với tổng số tiền thuế đã nộp ở các tỉnh.'
    ],
    columns: ['Tên dự án ngoại tỉnh', 'Địa bàn thi công', 'Chủ đầu tư', 'Giá trị hợp đồng', 'Doanh thu nghiệm thu', 'Tỷ lệ thuế vãng lai (1%)', 'Số thuế đã nộp kho bạc', 'Ngày nộp tiền', 'Số chứng từ nộp', 'Chỉ tiêu [39a] Gia Lai'],
    laws: ['tt-80-2021', 'tt-21-2026', 'luat-108-2025']
  },
  {
    id: 'materials',
    title: '11 · Kiểm soát cát, đá, xi măng, sắt thép và vật liệu mua ngoài',
    pillar: 'concrete_materials',
    question: 'Làm thế nào để chứng minh tính hợp pháp, khối lượng cân nhận thực tế và giá mua của cát, đá, xi măng đưa vào trạm bê tông và công trình?',
    scope: 'Áp dụng cho toàn bộ nguyên vật liệu khối lượng lớn mua ngoài của các đơn vị cung cấp cát sông, mỏ đá, nhà máy xi măng và sắt thép.',
    records: [
      'Hợp đồng mua bán vật liệu, Báo giá cạnh tranh và lịch giao nhận hàng theo đợt.',
      'Phiếu cân xe điện tử tại trạm hoặc tại mỏ có ghi biển số xe, trọng lượng tổng, trọng lượng xe không tải và khối lượng tịnh.',
      'Hóa đơn điện tử GTGT từ nhà cung cấp vật liệu và Thẻ kho theo dõi nhập - xuất - tồn TK 152.',
      'Hợp đồng thuê xe vận chuyển vật liệu hoặc cước vận chuyển nếu mua theo giá xuất kho bên bán.'
    ],
    steps: [
      {
        title: 'Bước 1: Khớp phiếu cân xe với Hóa đơn GTGT đầu vào',
        action: 'Ghép từng chuyến xe chở cát, đá, xi măng về trạm với phiếu cân điện tử. Tổng khối lượng tịnh trên các phiếu cân trong tháng phải khớp với khối lượng ghi trên hóa đơn GTGT người bán xuất.',
        output: 'Bảng kê chi tiết các chuyến xe chở vật tư khớp với số lượng trên hóa đơn.'
      },
      {
        title: 'Bước 2: Quy đổi thống nhất đơn vị đo lường (Tấn và m³)',
        action: 'Sử dụng Bảng tỷ trọng quy đổi tiêu chuẩn của Viện Vật liệu Xây dựng (Cát vàng: 1.45 tấn/m³, Đá 1x2: 1.55 tấn/m³) để đối chiếu giữa đơn vị tính trên hợp đồng và trên sổ sách kế toán.',
        output: 'Bảng quy đổi đơn vị đo lường có căn cứ kỹ thuật rõ ràng.'
      },
      {
        title: 'Bước 3: Kiểm soát cước vận chuyển và bốc dỡ',
        action: 'Nếu hợp đồng mua vật liệu theo giá CIF (giao tại trạm), kiểm tra giá đã bao gồm cước. Nếu thuê xe vận chuyển ngoài, tách riêng chi phí cước vận chuyển và kẹp phiếu điều xe tương ứng.',
        output: 'Bảng giá thành vật tư thực tế nhập kho khép kín cả chi phí vận chuyển.'
      },
      {
        title: 'Bước 4: Đối chiếu xuất kho vật tư vào sản xuất và công trình',
        action: 'Nối toàn bộ lượng cát, đá, xi măng xuất kho TK 152 với các mẻ trộn bê tông hoặc phiếu xuất thẳng cho công trường thi công, đảm bảo tồn kho bãi không bị âm số lượng.',
        output: 'Cầu nối luân chuyển vật tư: Tồn đầu + Nhập kho - Xuất sản xuất = Tồn kho thực tế.'
      }
    ],
    exceptions: [
      'Trường hợp mua cát từ các mỏ tư nhân bị tạm ngừng khai thác: Xuất trình Hóa đơn điện tử hợp pháp tại thời điểm mua hàng, Phiếu cân xe và Chứng từ chuyển khoản ngân hàng để chứng minh giao dịch phát sinh trước thời điểm nhà cung cấp bị xử lý.',
      'Chênh lệch hao hụt rơi vãi khi vận chuyển cát đá: Áp dụng định mức hao hụt vận chuyển đường bộ theo quy định nội bộ (không quá 1.5%).'
    ],
    completion: [
      '100% hóa đơn mua vật liệu lớn đều có phiếu cân xe hoặc biên bản đo đạc tại hiện trường.',
      'Bảng quy đổi tấn - m³ thống nhất, khớp với định mức sản xuất bê tông và công trình.'
    ],
    columns: ['Nhà cung cấp', 'Loại vật liệu', 'Số hóa đơn GTGT', 'Khối lượng trên HĐ', 'Khối lượng cân thực tế', 'Tỷ trọng quy đổi', 'Đơn giá mua', 'Cước vận chuyển', 'Công trình / Trạm nhận', 'Tình trạng hồ sơ'],
    laws: ['vas-02', 'tt-200-2014', 'tt-99-2025', 'nd-181-2025', 'nd-320-2025']
  },
  {
    id: 'precast',
    title: '12 · Tính giá thành cống bê tông, bó vỉa, gạch và cấu kiện đúc sẵn',
    pillar: 'concrete_materials',
    question: 'Làm thế nào để bảo vệ chi phí giá thành sản xuất cống ly tâm, bó vỉa hè, gạch block và xử lý chi phí cấu kiện hỏng trong định mức cho phép?',
    scope: 'Áp dụng cho xưởng sản xuất cấu kiện bê tông đúc sẵn phục vụ các công trình hạ tầng giao thông và đô thị của Kiểu Việt.',
    records: [
      'Lệnh sản xuất cấu kiện đúc sẵn, Bản vẽ thiết kế và Quy cách sản phẩm (kích thước cống, mác bê tông, cốt thép).',
      'Phiếu xuất kho bê tông tươi từ trạm trộn, thép làm lồng cống, phụ gia tháo khuôn và chi phí ca máy đúc.',
      'Biên bản nghiệm thu KCS chất lượng cấu kiện hoàn thành nhập kho TK 155.',
      'Biên bản hủy hoặc thanh lý cấu kiện bị nứt vỡ trong quá trình bốc xếp, cẩu lắp.'
    ],
    steps: [
      {
        title: 'Bước 1: Mở thẻ tính giá thành theo từng lô sản xuất',
        action: 'Mở Thẻ tính giá thành chi tiết cho từng loại cấu kiện (Cống D600, D800, D1000, bó vỉa hè). Tập hợp chi phí trực tiếp: Bê tông tươi (621), Thép (621), Nhân công đúc khuôn (622) và Chi phí chung (627).',
        output: 'Thẻ tính giá thành sản phẩm hoàn chỉnh theo từng mã quy cách.'
      },
      {
        title: 'Bước 2: Phân bổ chi phí khấu hao khuôn đúc và ca máy nâng',
        action: 'Chi phí khuôn đúc cống và máy quay ly tâm phân bổ đều theo số lượng cấu kiện đúc được trong kỳ, đảm bảo không hạch toán dồn toàn bộ vào một lô sản xuất duy nhất.',
        output: 'Bảng phân bổ chi phí công cụ dụng cụ và máy thi công hợp lý.'
      },
      {
        title: 'Bước 3: Nghiệm thu KCS và nhập kho thành phẩm TK 155',
        action: 'Đối chiếu số lượng cấu kiện đạt tiêu chuẩn KCS với Phiếu nhập kho TK 155. Xác định giá thành đơn vị từng mét cống hoặc từng viên bó vỉa.',
        output: 'Phiếu nhập kho thành phẩm kèm Biên bản kiểm định chất lượng xuất xưởng.'
      },
      {
        title: 'Bước 4: Xử lý chi phí cấu kiện nứt vỡ, phế phẩm',
        action: 'Với các sản phẩm bị nứt vỡ trong định mức kỹ thuật (dưới 1%), lập Biên bản giám định nguyên nhân kỹ thuật, thu hồi lõi thép bán phế liệu (ghi Có TK 711) và đưa chi phí tổn thất vào giá thành sản phẩm đạt.',
        output: 'Hồ sơ xử lý sản phẩm hỏng đúng chuẩn mực kế toán hàng tồn kho VAS 02.'
      }
    ],
    exceptions: [
      'Nếu đoàn kiểm tra đòi bóc chi phí cống bị vỡ trong lúc cẩu chuyển: Xuất trình Biên bản sự cố kỹ thuật có xác nhận của Chỉ huy trưởng công trường và Đội xe cẩu để chứng minh rủi ro trong sản xuất xây dựng.',
      'Sản phẩm đúc sẵn để lâu chưa tiêu thụ: Kiểm tra điều kiện trích lập dự phòng giảm giá hàng tồn kho theo Thông tư 24/2022/TT-BTC.'
    ],
    completion: [
      'Mỗi quy cách cống đúc sẵn đều có định mức vật tư và Thẻ tính giá thành riêng biệt.',
      'Tất cả sản phẩm nhập kho 155 đều có biên bản KCS kiểm tra cường độ nén bê tông.'
    ],
    columns: ['Lô sản xuất', 'Quy cách cấu kiện', 'Số lượng đúc', 'KCS nghiệm thu đạt', 'Hao hụt / nứt vỡ', 'Chi phí vật tư', 'Chi phí nhân công', 'Chi phí chung', 'Giá thành đơn vị', 'Nhập kho 155'],
    laws: ['vas-02', 'tt-200-2014', 'tt-99-2025', 'nd-320-2025']
  },
  {
    id: 'transport',
    title: '13 · Quản lý đội xe bồn, xe bơm bê tông và định mức tiêu hao dầu DO',
    pillar: 'concrete_materials',
    question: 'Làm thế nào để bảo vệ chi phí xăng dầu, định mức tiêu hao dầu DO xe bồn, xe bơm và cước vận chuyển không bị loại trừ khi quyết toán thuế TNDN?',
    scope: 'Áp dụng cho toàn bộ xe bồn chở bê tông, xe bơm cần, bơm tĩnh và xe tải vận chuyển phục vụ sản xuất kinh doanh của Kiểu Việt.',
    records: [
      'Quyết định của Tổng Giám đốc ban hành Định mức tiêu hao nhiên liệu (Lít/100km đối với xe bồn, Lít/giờ đối với xe bơm).',
      'Lệnh điều xe, Nhật trình chạy xe hàng ngày có ghi chỉ số đồng hồ công tơ mét và cung đường vận chuyển.',
      'Phiếu cấp phát dầu nội bộ tại trạm, Hóa đơn điện tử GTGT mua dầu DO từ các công ty xăng dầu uy tín.',
      'Bảng thanh toán tiền cước vận chuyển bê tông cho khách hàng hoặc phân bổ vào giá thành sản phẩm.'
    ],
    steps: [
      {
        title: 'Bước 1: Ban hành định mức tiêu hao nhiên liệu theo mùa và cung đường',
        action: 'Rà soát Quyết định định mức dầu DO: Tách riêng định mức chạy trên đường bằng phẳng (Pleiku) và cung đường đồi núi đèo dốc hiểm trở của Tây Nguyên; định mức dầu chạy máy nổ quay bồn khi chờ đợi đổ bê tông.',
        output: 'Quy chế quản lý nhiên liệu và bảng định mức tiêu hao có cơ sở thực tế.'
      },
      {
        title: 'Bước 2: Kiểm soát Nhật trình xe và đối chiếu đồng hồ Km',
        action: 'Kiểm tra nhật trình: Mỗi chuyến xe chở bê tông phải ghi rõ số chuyến, biển số xe, cự ly vận chuyển (km), công trình nhận hàng và chữ ký của tài xế.',
        output: 'Tập Nhật trình xe hoàn chỉnh, khớp chính xác với lịch giao hàng của trạm.'
      },
      {
        title: 'Bước 3: Đối soát lượng dầu thực tế cấp phát với định mức',
        action: 'So sánh tổng lượng dầu DO xuất từ bồn chứa nội bộ (hoặc mua ngoài theo hóa đơn) với lượng dầu định mức theo số Km lăn bánh và số giờ bơm bê tông.',
        output: 'Bảng đối chiếu nhiên liệu thực tế - định mức theo từng đầu xe hàng tháng.'
      },
      {
        title: 'Bước 4: Phân bổ chi phí vận chuyển vào đúng đối tượng chịu chi phí',
        action: 'Chi phí xe bồn phân bổ vào Giá vốn bê tông thương phẩm (TK 627/154), xe phục vụ nội bộ phân bổ vào Chi phí quản lý (TK 642), đảm bảo không hạch toán trùng lặp.',
        output: 'Bảng phân bổ chi phí xe máy thi công chuẩn xác vào giá thành.'
      }
    ],
    exceptions: [
      'Xe bồn phải nổ máy chờ lâu tại công trường do chủ đầu tư chậm tiếp nhận: Lập Biên bản xác nhận thời gian xe chờ tại hiện trường có chữ ký của bên mua để bảo vệ lượng dầu tiêu hao phụ trội.',
      'Hóa đơn mua dầu DO vào ngày Chủ nhật hoặc ban đêm: Xuất trình Lệnh điều xe đổ bê tông ca đêm cho các công trình trọng điểm để chứng minh tính thực tế.'
    ],
    completion: [
      '100% hóa đơn dầu DO có lệnh điều xe và nhật trình tương ứng.',
      'Chênh lệch nhiên liệu giữa thực tế và định mức không vượt quá dung sai kỹ thuật cho phép.'
    ],
    columns: ['Biển số xe', 'Loại xe (Bồn/Bơm)', 'Số chuyến trong tháng', 'Tổng Km lăn bánh', 'Số giờ bơm', 'Dầu tiêu thụ thực tế', 'Dầu theo định mức', 'Chênh lệch', 'Đối tượng nhận chi phí', 'Tình trạng chứng từ'],
    laws: ['tt-45-2013', 'tt-96-2015', 'tt-99-2025', 'nd-320-2025']
  },
  {
    id: 'larsen',
    title: '14 · Quản lý cừ Larsen, máy ép cừ và phân bổ chi phí luân chuyển',
    pillar: 'concrete_materials',
    question: 'Làm thế nào để theo dõi chính xác vị trí cừ Larsen đang cho thuê, thi công tại các công trường và phân bổ chi phí khấu hao luân chuyển đúng luật?',
    scope: 'Áp dụng cho hoạt động mua bán cừ, cho thuê cừ Larsen và nhận thầu thi công ép - nhổ cừ gia cố hố móng của Kiểu Việt.',
    records: [
      'Hợp đồng kinh tế (Thuê cừ, thi công ép nhổ cừ), Bảng đơn giá cho thuê theo mét/ngày và đơn giá ca máy ép cừ.',
      'Biên bản giao nhận cừ tại công trường, Biên bản kiểm kê thu hồi cừ sau khi hoàn thành thi công.',
      'Sổ theo dõi công cụ dụng cụ luân chuyển (TK 242) hoặc Tài sản cố định (TK 211) và Bảng tính phân bổ khấu hao.',
      'Biên bản xử lý cừ cong vênh, hư hỏng hoặc khách hàng làm mất cừ phải bồi thường theo hợp đồng.'
    ],
    steps: [
      {
        title: 'Bước 1: Phân loại hình thức kinh doanh và theo dõi vị trí cừ',
        action: 'Lập Bảng theo dõi hiện trạng cừ Larsen: Ghi rõ số lượng, chủng loại (Cừ IV, Cừ III), chiều dài (9m, 12m, 16m), công trình đang thi công và đơn vị thuê.',
        output: 'Bản đồ vị trí và khối lượng cừ Larsen luân chuyển toàn công ty.'
      },
      {
        title: 'Bước 2: Tính toán phân bổ chi phí cừ luân chuyển vào công trình',
        action: 'Căn cứ Thông tư 45/2013/TT-BTC: Cừ Larsen sử dụng nhiều lần được phân bổ vào chi phí công trình theo số lần luân chuyển (thường từ 24 - 36 tháng hoặc theo số công trình thi công).',
        output: 'Bảng phân bổ chi phí cừ TK 242 hợp lý vào từng dự án.'
      },
      {
        title: 'Bước 3: Đối chiếu doanh thu ca máy ép cừ với chi phí dầu và công',
        action: 'Khớp khối lượng ép - nhổ cừ hoàn thành trên biên bản nghiệm thu với doanh thu xuất hóa đơn TK 511 và chi phí ca máy (dầu DO, lương thợ ép cừ).',
        output: 'Bảng cân đối doanh thu - giá vốn dịch vụ ép cừ chuyên nghiệp.'
      },
      {
        title: 'Bước 4: Xử lý cừ hư hỏng hoặc mất mát',
        action: 'Khi cừ bị cong vênh không tái sử dụng được hoặc bị thất lạc: Lập Biên bản hiện trường, xác định trách nhiệm bồi thường của bên thuê (hạch toán TK 711) và giảm trừ giá trị còn lại trên sổ sách.',
        output: 'Hồ sơ thanh lý và bồi thường cừ Larsen đầy đủ căn cứ pháp lý.'
      }
    ],
    exceptions: [
      'Không xuất toàn bộ giá trị cừ mua về vào chi phí một công trình duy nhất: Phải phân bổ qua TK 242 hoặc trích khấu hao tài sản để tránh bị đoàn thanh tra loại trừ chi phí dồn tích.',
      'Trường hợp cừ bị ngập nước lưu lại công trình kéo dài: Kẹp phụ lục gia hạn thời gian thuê cừ và thỏa thuận chi phí lưu kho bãi với nhà thầu.'
    ],
    completion: [
      'Khối lượng cừ xuất kho, đang ở công trường và tồn kho bãi khớp 100% với biên bản kiểm kê.',
      'Phân bổ chi phí luân chuyển tuân thủ đúng quy định Thông tư 45/2013/TT-BTC.'
    ],
    columns: ['Tên công trình', 'Loại cừ Larsen', 'Số lượng xuất (Cây)', 'Chiều dài (m)', 'Ngày giao cừ', 'Ngày thu hồi dự kiến', 'Giá trị luân chuyển TK 242', 'Mức phân bổ kỳ này', 'Doanh thu dịch vụ', 'Tình trạng cừ'],
    laws: ['tt-45-2013', 'tt-200-2014', 'tt-99-2025', 'nd-320-2025']
  },
  {
    id: 'quarry',
    title: '15 · Rà soát khai thác mỏ đá xây dựng và nộp thuế tài nguyên theo QĐ 87 Gia Lai',
    pillar: 'concrete_materials',
    question: 'Làm thế nào để đối chiếu khớp sản lượng đá nổ mìn nguyên khai với đá thành phẩm qua trạm nghiền và bảo vệ số thuế tài nguyên đã nộp theo Quyết định 87/2025/QĐ-UBND Gia Lai?',
    scope: 'Áp dụng cho hoạt động khai thác mỏ đá xây dựng, nghiền sàng đá dăm 1x2, 2x4, đá mi và nộp thuế tài nguyên, phí bảo vệ môi trường của Kiểu Việt tại Gia Lai.',
    records: [
      'Giấy phép khai thác khoáng sản của UBND tỉnh Gia Lai cấp và Bản đồ hiện trạng khu vực mỏ.',
      'Hộ chiếu nổ mìn, Báo cáo sử dụng vật liệu nổ công nghiệp có xác nhận của Sở Công Thương và Công an tỉnh.',
      'Sổ theo dõi sản lượng khai thác tại mỏ, Phiếu cân trạm nghiền sàng và Bảng nhập - xuất - tồn đá các loại.',
      'Tờ khai thuế tài nguyên mẫu 01/TAIN, Tờ khai phí Bảo vệ môi trường mẫu 01/PBVMT và Giấy nộp tiền vào Kho bạc.',
      'Bảng giá tính thuế tài nguyên theo Quyết định số 87/2025/QĐ-UBND của UBND tỉnh Gia Lai.'
    ],
    steps: [
      {
        title: 'Bước 1: Rà soát Giấy phép khai thác và công suất cho phép',
        action: 'Kiểm tra công suất khai thác hàng năm (m³/năm) theo Giấy phép. Đảm bảo tổng sản lượng khai thác kê khai nộp thuế không vượt quá công suất cho phép ghi trên giấy phép.',
        output: 'Bảng theo dõi công suất khai thác mỏ so với hạn mức pháp lý.'
      },
      {
        title: 'Bước 2: Lập bảng quy đổi sản lượng đá nguyên khai ra đá thành phẩm',
        action: 'Áp dụng Hệ số nở rời nổ mìn và hệ số chế biến theo hồ sơ thiết kế mỏ đã được phê duyệt (thông thường 1m³ đá nguyên khai nổ mìn nở rời thu được khoảng 1.25m³ - 1.3m³ đá hỗn hợp các loại sau nghiền).',
        output: 'Bảng cân đối sản lượng: Đá nguyên khai nổ mìn ↔ Đá thành phẩm qua trạm nghiền.'
      },
      {
        title: 'Bước 3: Áp đúng Bảng giá tính thuế tài nguyên QĐ 87/2025 Gia Lai',
        action: 'Đối chiếu giá tính thuế tài nguyên theo đúng chủng loại: Đá hộc, Đá 1x2, Đá 2x4, Đá mi bụi theo Bảng giá quy định tại Quyết định 87/2025/QĐ-UBND của UBND tỉnh Gia Lai áp dụng cho kỳ tính thuế.',
        output: 'Bảng tính toán thuế tài nguyên và phí BVMT chuẩn xác từng loại khoáng sản.'
      },
      {
        title: 'Bước 4: Kiểm soát sản lượng đá tự dùng đưa vào trạm bê tông',
        action: 'Tách riêng khối lượng đá xuất bán cho khách ngoài với khối lượng đá tự dùng đưa sang trạm trộn Bê tông Kiểu Việt (hạch toán nội bộ TK 621), đảm bảo vẫn kê khai thuế tài nguyên đầy đủ.',
        output: 'Hồ sơ kê khai thuế tài nguyên cho 100% sản lượng xuất bán và tự dùng.'
      }
    ],
    exceptions: [
      'Khi đoàn kiểm tra so sánh sản lượng thành phẩm bán ra lớn hơn sản lượng nguyên khai trên hộ chiếu nổ mìn: Giải trình rõ hệ số nở rời đá sau nổ mìn và nghiền sàng theo đúng Thuyết minh thiết kế cơ sở mỏ đã được duyệt.',
      'Đoàn kiểm tra áp giá bán đá thành phẩm cao hơn để tính thuế tài nguyên: Căn cứ Điều 6 Thông tư 152/2015/TT-BTC chứng minh doanh nghiệp khai thác đá nguyên khai đưa vào chế biến thì giá tính thuế tài nguyên là giá theo Bảng giá của UBND tỉnh Gia Lai.'
    ],
    completion: [
      'Sản lượng đá nổ mìn, nghiền sàng, xuất bán và tự dùng khớp với báo cáo quan trắc mỏ hàng năm.',
      'Số thuế tài nguyên và phí BVMT đã nộp đầy đủ vào Kho bạc Nhà nước tỉnh Gia Lai đúng thời hạn.'
    ],
    columns: ['Loại đá thành phẩm', 'Sản lượng nguyên khai', 'Hệ số nở rời', 'Sản lượng thành phẩm', 'Khối lượng bán ngoài', 'Đưa vào trạm bê tông', 'Giá tính thuế QĐ 87', 'Thuế suất (%)', 'Số thuế TAIN đã nộp', 'Tình trạng hồ sơ'],
    laws: ['luat-54-2024-khoangsan', 'nd-193-2025-khoangsan', 'tt-152-2015', 'nd-27-2023', 'qd-87-2025-gialai']
  }
];

export function procedureDraft(p: AuditProcedure, period: string) {
  return `CÔNG TY CỔ PHẦN KIỂU VIỆT
BỘ PHẬN KẾ TOÁN & TÀI CHÍNH
Số: .../GT-KV/2026

BẢN GIẢI TRÌNH & HỒ SƠ CHUẨN BỊ KIỂM TRA THUẾ
Chuyên đề: ${p.title}
Kỳ: ${period || 'Năm tài chính theo Quyết định kiểm tra'} (Kỳ tính thuế rà soát)
Mảng hoạt động: ${p.pillar === 'interior' ? 'Xưởng Gỗ & Nội Thất' : p.pillar === 'concrete_materials' ? 'Bê Tông Thương Phẩm & VLXD' : p.pillar === 'construction' ? 'Thi Công Xây Lắp Hạ Tầng' : 'Tư Vấn & Quản Lý'}

I. MỤC TIÊU RÀ SOÁT & NỘI DUNG ĐOÀN KIỂM TRA QUAN TÂM:
${p.question}
Phạm vi áp dụng: ${p.scope}

II. BỘ DANH MỤC CHỨNG TỪ GỐC BẮT BUỘC ĐÃ TẬP HỢP:
${p.records.map((x, i) => `${i + 1}. ${x}`).join('\n')}

III. KẾT QUẢ ĐỐI SOÁT THEO 4 BƯỚC NGHIỆP VỤ:
${p.steps.map((x, i) => `Bước ${i + 1}: ${x.title}\n- Thao tác: ${x.action}\n- Sản phẩm đầu ra: ${x.output}\n- Kết quả kiểm tra nội bộ: [Đạt yêu cầu / Đã khớp sổ sách]`).join('\n\n')}

IV. PHƯƠNG ÁN XỬ LÝ & ĐỐI ĐÁP CÁC TÌNH HUỐNG NGOẠI LỆ:
${p.exceptions.map((x, i) => `- Tình huống ${i + 1}: ${x}`).join('\n')}

V. CĂN CỨ PHÁP LÝ BẢO VỆ CHI PHÍ:
- Văn bản áp dụng: ${p.laws.join(', ')}
- Trích dẫn quy định: Đã đối chiếu đúng hiệu lực văn bản tại thời điểm phát sinh giao dịch.

VI. KẾT LUẬN & ĐỀ XUẤT CỦA BỘ PHẬN KẾ TOÁN:
1. Hồ sơ chứng từ đã được tập hợp đầy đủ, tính toán trung thực, hợp pháp theo đúng chế độ kế toán và pháp luật thuế hiện hành.
2. Đề nghị Kế toán trưởng duyệt kẹp cùng bộ hồ sơ kiểm tra thuế chính thức của Công ty Cổ phần Kiểu Việt.

                                            Gia Lai, ngày ... tháng ... năm 2026
           NGƯỜI LẬP HỒ SƠ                             KẾ TOÁN TRƯỞNG
         (Ký, ghi rõ họ tên)                         (Ký, ghi rõ họ tên)`;
}
