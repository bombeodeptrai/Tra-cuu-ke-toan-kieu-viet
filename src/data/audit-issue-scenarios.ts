import type { Pillar } from '@/types/tax-audit';

export interface ScenarioQuestion {
  id: string;
  text: string;
  options: {
    value: string;
    label: string;
    branch: 'explained' | 'correction' | 'missing_data' | 'special_review';
    actionGuide: string;
  }[];
}

export interface ScenarioBranch {
  branchId: 'explained' | 'correction' | 'missing_data' | 'special_review';
  title: string;
  description: string;
  requiredDossiers: string[];
  accountingAdjustment?: string;
  invoiceAction?: string;
  taxEffect?: string;
  preventiveAction: string;
}

export interface AuditScenario {
  id: string; // 'S01' .. 'S24'
  title: string;
  category: 'unbilled' | 'below_cost' | 'stock_mismatch' | 'payment_ar' | 'wip_cost' | 'other';
  applicablePillars: (Pillar | 'all')[];
  summary: string;
  differenceComparison: string;
  dossierChecklist: string[];
  questions: ScenarioQuestion[];
  branches: ScenarioBranch[];
  exampleData: {
    description: string;
    bookQty: string;
    physicalQty: string;
    unit: string;
    price: string;
  };
}

export const AUDIT_SCENARIOS: AuditScenario[] = [
  {
    id: 'S01',
    title: 'Hóa đơn khác số lượng giao thực tế',
    category: 'unbilled',
    applicablePillars: ['all'],
    summary: 'Phát hiện số lượng ghi trên hóa đơn GTGT không khớp với biên bản giao nhận hàng hoặc phiếu xuất kho tại công trình/xưởng.',
    differenceComparison: 'Ghép từng dòng giao nhận với từng dòng hóa đơn, phân tách phần giao bù hoặc hàng trả lại để xác minh người nhận thực tế.',
    dossierChecklist: ['Phiếu xuất kho', 'Biên bản giao nhận hàng công trường', 'Hóa đơn GTGT', 'Hợp đồng mua bán / Đơn đặt hàng'],
    questions: [
      {
        id: 'q1',
        text: 'Số lượng thực giao đang lớn hơn hay nhỏ hơn số lượng trên hóa đơn?',
        options: [
          { value: 'greater', label: 'Giao thực tế lớn hơn hóa đơn (Giao 100, hóa đơn 80)', branch: 'correction', actionGuide: 'Xác định 20 đơn vị chưa xuất hóa đơn, kiểm tra xem có giao bù kỳ sau hay chưa nghiệm thu.' },
          { value: 'less', label: 'Giao thực tế nhỏ hơn hóa đơn (Giao 80, hóa đơn 100)', branch: 'correction', actionGuide: 'Lập biên bản xác nhận khối lượng thực nhận, xuất hóa đơn điều chỉnh giảm hoặc thay thế.' },
          { value: 'partial_return', label: 'Có phát sinh trả hàng hoặc giao bù đã có biên bản', branch: 'explained', actionGuide: 'Tập hợp đủ biên bản giao bù/trả hàng có chữ ký hai bên làm phụ lục giải trình.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Chênh lệch do giao bù / trả lại có biên bản hợp lệ',
        description: 'Đã có biên bản giao nhận bổ sung hoặc biên bản trả hàng hợp lệ giữa hai bên, khớp dòng lũy kế.',
        requiredDossiers: ['Biên bản giao hàng đợt 2', 'Biên bản đối chiếu khối lượng giao nhận'],
        preventiveAction: 'Lập bảng đối chiếu giao nhận - hóa đơn trước mỗi kỳ xuất hóa đơn.'
      },
      {
        branchId: 'correction',
        title: 'Sai sót thời điểm xuất hóa đơn hoặc thừa thiếu khối lượng',
        description: 'Chưa xuất hóa đơn cho phần đã giao, hoặc đã xuất hóa đơn vượt quá khối lượng bên mua xác nhận.',
        requiredDossiers: ['Biên bản xác nhận khối lượng thực tế', 'Hóa đơn điện tử điều chỉnh/bổ sung'],
        invoiceAction: 'Lập hóa đơn bổ sung cho phần giao thiếu hoặc điều chỉnh giảm số lượng thừa.',
        accountingAdjustment: 'Hạch toán bổ sung doanh thu/giá vốn tương ứng vào đúng kỳ chuyển giao rủi ro.',
        preventiveAction: 'Thực hiện nguyên tắc không giao hàng nếu chưa có phiếu xuất kho và biên bản giao nhận có ký xác nhận.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu chứng từ ký nhận của bên mua',
        description: 'Phiếu giao hàng chỉ có chữ ký của lái xe/thủ kho Kiểu Việt, thiếu xác nhận của đại diện bên mua.',
        requiredDossiers: ['Xác nhận công nợ của khách hàng', 'Biên bản đối chiếu bù đắp khối lượng'],
        preventiveAction: 'Yêu cầu nhân sự giao hàng thu thập đủ chữ ký người nhận trong vòng 24 giờ.'
      }
    ],
    exampleData: { description: 'Bê tông thương phẩm mác 250 giao công trình cầu', bookQty: '80', physicalQty: '100', unit: 'm³', price: '1.250.000' }
  },
  {
    id: 'S02',
    title: 'Giá thực tế thỏa thuận / thu tiền cao hơn hóa đơn',
    category: 'unbilled',
    applicablePillars: ['all'],
    summary: 'Số tiền thực tế thỏa thuận hoặc dòng tiền chuyển khoản/tiền mặt thu về lớn hơn tổng tiền thanh toán ghi trên hóa đơn GTGT đã xuất.',
    differenceComparison: 'Đối chiếu Hợp đồng, báo giá, sao kê ngân hàng và phiếu thu; loại trừ khoản tiền ứng trước hoặc thanh toán gộp nhiều hóa đơn trước khi kết luận.',
    dossierChecklist: ['Sao kê tài khoản ngân hàng', 'Hợp đồng kinh tế', 'Hóa đơn GTGT', 'Thư xác nhận công nợ'],
    questions: [
      {
        id: 'q1',
        text: 'Khoản tiền chênh lệch thực chất là gì?',
        options: [
          { value: 'advance', label: 'Tiền tạm ứng hợp đồng / đặt cọc cho công việc tương lai', branch: 'explained', actionGuide: 'Xuất trình điều khoản tạm ứng trong hợp đồng và phiếu báo Có ngân hàng.' },
          { value: 'multi_inv', label: 'Bên mua trả gộp cho nhiều hóa đơn khác nhau', branch: 'explained', actionGuide: 'Lập bảng phân bổ dòng tiền chi tiết cho từng số hóa đơn.' },
          { value: 'price_diff', label: 'Hóa đơn xuất thấp hơn giá thanh toán thực tế', branch: 'special_review', actionGuide: 'Báo cáo ngay Kế toán trưởng và Ban Giám đốc để rà soát, không tự ý hợp thức hóa bằng hợp đồng giảm giá giả.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Dòng tiền thu gồm tiền tạm ứng hoặc trả gộp nhiều hóa đơn',
        description: 'Khoản tiền thừa so với một hóa đơn thực chất là tiền ứng trước theo hợp đồng hoặc thanh toán cho hóa đơn khác.',
        requiredDossiers: ['Bảng phân bổ thanh toán theo hóa đơn', 'Hợp đồng có điều khoản tạm ứng'],
        preventiveAction: 'Quy định khách hàng ghi rõ nội dung chuyển khoản gồm số hóa đơn thanh toán.'
      },
      {
        branchId: 'correction',
        title: 'Sai sót đơn giá khi lập hóa đơn',
        description: 'Kế toán xuất nhầm đơn giá thấp hơn hợp đồng và đơn đặt hàng đã phê duyệt.',
        requiredDossiers: ['Hợp đồng kinh tế', 'Hóa đơn điện tử điều chỉnh tăng đơn giá'],
        invoiceAction: 'Lập hóa đơn điều chỉnh tăng giá trị theo quy định tại Nghị định 123/2020.',
        accountingAdjustment: 'Ghi tăng doanh thu và thuế GTGT đầu ra tương ứng.',
        preventiveAction: 'Thiết lập kiểm soát tự động đối chiếu đơn giá hóa đơn với hợp đồng trước khi ký số.'
      },
      {
        branchId: 'special_review',
        title: 'Nghi ngờ giao dịch ngoài sổ / Thu tiền chênh lệch trái thỏa thuận',
        description: 'Cần trình Ban Giám đốc phê duyệt phương án khắc phục, tự giác khai bổ sung theo đúng quy định pháp luật.',
        requiredDossiers: ['Báo cáo giải trình nội bộ gửi Ban Giám đốc', 'Dự thảo tờ khai bổ sung KHBS'],
        preventiveAction: 'Tuyệt đối cấm tạo hợp đồng giảm giá giả hoặc tạo quỹ tiền mặt ngoài sổ sách.'
      }
    ],
    exampleData: { description: 'Đồ gỗ nội thất văn phòng trọn gói', bookQty: '1', physicalQty: '1', unit: 'Gói', price: '120.000.000' }
  },
  {
    id: 'S03',
    title: 'Bán dưới giá vốn thực tế (Âm tỷ suất lợi nhuận)',
    category: 'below_cost',
    applicablePillars: ['interior', 'concrete_materials'],
    summary: 'Đơn giá bán ghi trên hóa đơn thấp hơn giá thành sản xuất (TK 154/632) hoặc giá vốn mua vào.',
    differenceComparison: 'Kiểm tra lô hàng, ngày nhập, giá vốn cùng phạm vi, phẩm cấp hàng hóa, phê duyệt thanh lý; xác định giao dịch độc lập hay bên liên kết.',
    dossierChecklist: ['Quyết định phê duyệt giá bán / thanh lý', 'Biên bản đánh giá chất lượng / phẩm cấp', 'Bảng tính giá thành chi tiết', 'Hóa đơn bán ra'],
    questions: [
      {
        id: 'q1',
        text: 'Nguyên nhân chính dẫn đến việc bán thấp hơn giá vốn là gì?',
        options: [
          { value: 'clearance', label: 'Thanh lý hàng tồn kho lâu ngày, lỗi mốt, giảm phẩm cấp', branch: 'explained', actionGuide: 'Tập hợp quyết định thanh lý, biên bản kiểm kê phẩm cấp và quy chế bán hàng.' },
          { value: 'cost_calc_err', label: 'Tập hợp sai giá vốn (phân bổ nhầm chi phí chung vào sản phẩm)', branch: 'correction', actionGuide: 'Kiểm tra lại tiêu thức phân bổ TK 621, 622, 627 hoặc TK 154.' },
          { value: 'transfer_pricing', label: 'Bán cho công ty thành viên / cá nhân có liên quan', branch: 'missing_data', actionGuide: 'Rà soát quy định Nghị định 132/2020 về giao dịch liên kết và khung giá thị trường.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Bán rẻ có lý do kinh tế thực tế (Thanh lý, suy giảm giá trị)',
        description: 'Hàng bán thật, giao thật, giá hóa đơn khớp thỏa thuận độc lập; có quyết định thanh lý thu hồi vốn.',
        requiredDossiers: ['Quyết định giảm giá thanh lý của Ban Giám đốc', 'Biên bản KCS xác nhận phẩm cấp'],
        preventiveAction: 'Luôn lập hội đồng đánh giá phẩm cấp trước khi xuất bán thanh lý dưới giá thành.'
      },
      {
        branchId: 'correction',
        title: 'Sai lệch phương pháp tính giá thành / Phân bổ chi phí',
        description: 'Giá vốn bị đẩy cao giả tạo do phân bổ chi phí gián đoạn hoặc phân bổ nhầm kỳ.',
        requiredDossiers: ['Bảng tính lại giá thành sản phẩm', 'Chứng từ điều chỉnh sổ kế toán'],
        accountingAdjustment: 'Điều chỉnh lại bút toán kết chuyển giá vốn TK 632 và chi phí dở dang TK 154.',
        preventiveAction: 'Rà soát bảng định mức kỹ thuật định kỳ hàng quý.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu hồ sơ chứng minh tính độc lập của giá bán',
        description: 'Chưa có báo giá cạnh tranh hoặc phê duyệt thẩm quyền đối với mức chiết khấu sâu.',
        requiredDossiers: ['Bảng báo giá thị trường thời điểm xuất bán', 'Quy chế tài chính công ty'],
        preventiveAction: 'Quy định thẩm quyền duyệt giá bán dưới giá thành phải do Tổng Giám đốc phê duyệt.'
      }
    ],
    exampleData: { description: 'Gạch không nung loại B xưởng bê tông', bookQty: '10000', physicalQty: '10000', unit: 'Viên', price: '950' }
  },
  {
    id: 'S04',
    title: 'Tồn kho trên sổ sách nhưng thực tế kho đã hết',
    category: 'stock_mismatch',
    applicablePillars: ['all'],
    summary: 'Sổ cái TK 152, 155, 156 còn số dư lớn nhưng kiểm kê thực tế tại kho mỏ, xưởng gỗ không còn hàng.',
    differenceComparison: 'Kiểm kê và truy ngược lịch sử: phân biệt xuất bán bỏ sót, xuất dùng công trình chưa hạch toán, hao hụt tự nhiên, mất mát hay sai mã hàng hóa.',
    dossierChecklist: ['Biên bản kiểm kê kho', 'Thẻ kho', 'Sổ chi tiết nguyên vật liệu/thành phẩm', 'Phiếu yêu cầu vật tư'],
    questions: [
      {
        id: 'q1',
        text: 'Nguyên nhân thực tế dẫn đến việc thiếu hụt hàng hóa trong kho là gì?',
        options: [
          { value: 'used_unbooked', label: 'Đã xuất dùng cho công trình/sản xuất nhưng chưa nộp phiếu xuất về phòng kế toán', branch: 'correction', actionGuide: 'Tập hợp các phiếu xuất vật tư tại công trường để hạch toán vào TK 154/621.' },
          { value: 'loss_spoilage', label: 'Hao hụt tự nhiên, bốc hơi cát đá, gỗ co ngót mục nát', branch: 'explained', actionGuide: 'Lập biên bản xác nhận tỷ lệ hao hụt theo định mức kỹ thuật hợp lệ.' },
          { value: 'unbilled_sales', label: 'Đã bán hàng thu tiền nhưng chưa xuất hóa đơn', branch: 'special_review', actionGuide: 'Báo cáo khẩn cấp Ban Giám đốc, lập lộ trình khắc phục tự khai bổ sung, tuyệt đối không tạo giao dịch ảo.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Hao hụt tự nhiên trong định mức kỹ thuật',
        description: 'Lượng đá cát hao hụt do thời tiết, rửa trôi hoặc gỗ xẻ co ngót nằm trong hạn mức định mức.',
        requiredDossiers: ['Biên bản xác định tỷ lệ hao hụt', 'Quy chế định mức tiêu hao nguyên vật liệu'],
        accountingAdjustment: 'Hạch toán hao hụt trong định mức vào chi phí giá vốn hợp lý.',
        preventiveAction: 'Kiểm kê định kỳ hàng tháng tại các mỏ và xưởng sản xuất.'
      },
      {
        branchId: 'correction',
        title: 'Chậm luân chuyển chứng từ xuất kho công trường',
        description: 'Vật tư đã đưa vào công trình nhưng kỹ thuật chưa bàn giao chứng từ về phòng kế toán.',
        requiredDossiers: ['Phiếu xuất kho bổ sung', 'Biên bản xác nhận sử dụng vật tư của Ban QLDA'],
        accountingAdjustment: 'Ghi Nợ TK 154 / Có TK 152 theo đúng kỳ phát sinh thực tế.',
        preventiveAction: 'Ban hành quy chế chốt số liệu vật tư công trường trước ngày 25 hàng tháng.'
      },
      {
        branchId: 'special_review',
        title: 'Nghi ngờ bán hàng không lập hóa đơn',
        description: 'Chênh lệch do hàng đã xuất khỏi kho cho khách lẻ mà không vào sổ sách.',
        requiredDossiers: ['Báo cáo kiểm kê kho độc lập', 'Phương án khai bổ sung hóa đơn và doanh thu'],
        preventiveAction: 'Kiểm soát chặt chẽ barie trạm cân mỏ đá và cổng xưởng nội thất.'
      }
    ],
    exampleData: { description: 'Đá 1x2 trạm nghiền mỏ đá Kiểu Việt', bookQty: '500', physicalQty: '120', unit: 'm³', price: '220.000' }
  },
  {
    id: 'S05',
    title: 'Âm kho theo ngày dù cuối kỳ số dư vẫn dương',
    category: 'stock_mismatch',
    applicablePillars: ['interior', 'concrete_materials'],
    summary: 'Sổ chi tiết vật tư/hàng hóa có thời điểm số lượng tồn bị âm trong kỳ do xuất trước khi hóa đơn mua hàng về.',
    differenceComparison: 'Chạy dòng kho theo ngày và thời điểm thực; phát hiện ngày âm đầu tiên, không đổi lùi ngày nhập để xóa cờ vi phạm.',
    dossierChecklist: ['Thẻ kho chi tiết theo ngày', 'Biên bản giao nhận hàng đến trước', 'Hóa đơn đầu vào đến sau'],
    questions: [
      {
        id: 'q1',
        text: 'Vì sao ngày xuất kho lại trước ngày ghi nhận nhập kho?',
        options: [
          { value: 'goods_before_inv', label: 'Hàng về trước, hóa đơn người bán gửi về sau trong cùng tháng', branch: 'explained', actionGuide: 'Tập hợp phiếu nhập kho tạm tính theo biên bản giao nhận hàng thực tế.' },
          { value: 'wrong_date', label: 'Ghi nhầm ngày trên phiếu xuất kho do lỗi đánh máy', branch: 'correction', actionGuide: 'Lập biên bản đính chính sai sót ngày tháng kèm chứng cứ giao nhận.' },
          { value: 'no_goods', label: 'Thực tế không có hàng, xuất khống cho khách hàng', branch: 'missing_data', actionGuide: 'Rà soát lại quy trình xuất kho, tuyệt đối không xuất khống.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Hàng về trước hóa đơn về sau (Nhập kho tạm tính)',
        description: 'Hàng hóa đã về xưởng và đưa vào sử dụng thực tế, hóa đơn của nhà cung cấp đến muộn.',
        requiredDossiers: ['Phiếu nhập kho tạm tính', 'Biên bản giao nhận hàng của nhà cung cấp'],
        accountingAdjustment: 'Hạch toán nhập kho hàng về chưa có hóa đơn (Nợ 152, 156 / Có 331 tạm tính).',
        preventiveAction: 'Yêu cầu nhà cung cấp gửi hóa đơn điện tử ngay trong ngày giao nhận hàng.'
      },
      {
        branchId: 'correction',
        title: 'Lỗi ghi chép thứ tự thời gian nhập xuất',
        description: 'Thủ kho nhập dữ liệu sau giờ làm việc dẫn đến sai lệch thứ tự thời điểm.',
        requiredDossiers: ['Nhật ký trạm cân / Camera giám sát kho', 'Biên bản hiệu chỉnh thẻ kho'],
        preventiveAction: 'Áp dụng phần mềm quản lý kho quét mã vạch thời gian thực.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu chứng cứ hàng về thực tế tại thời điểm xuất',
        description: 'Không có phiếu cân hoặc biên bản giao nhận tại ngày xuất kho.',
        requiredDossiers: ['Lời khai xác nhận của thủ kho và lái xe', 'Biên bản xác minh nguồn hàng'],
        preventiveAction: 'Nghiêm cấm xuất kho khi chưa hoàn tất thủ tục nhập kho vào phần mềm.'
      }
    ],
    exampleData: { description: 'Xi măng bao PCB40 xưởng bê tông', bookQty: '-25', physicalQty: '50', unit: 'Tấn', price: '1.450.000' }
  },
  {
    id: 'S06',
    title: 'Hóa đơn sai tên, mã hàng, MST hoặc đơn vị tính',
    category: 'other',
    applicablePillars: ['all'],
    summary: 'Hóa đơn điện tử đã phát hành có sai sót về tên hàng hóa, mã số thuế người mua, đơn vị tính hoặc địa chỉ.',
    differenceComparison: 'So sánh XML gốc với hợp đồng kinh tế và dữ liệu đăng ký thuế; phân biệt sai sót thông tin không làm đổi tiền thuế với sai nghiệp vụ.',
    dossierChecklist: ['Thông báo Mẫu 04/SS-HĐĐT', 'Hóa đơn điện tử gốc', 'Biên bản thỏa thuận điều chỉnh'],
    questions: [
      {
        id: 'q1',
        text: 'Sai sót có làm thay đổi số tiền hoặc tiền thuế phải nộp không?',
        options: [
          { value: 'info_only', label: 'Chỉ sai tên công ty, địa chỉ, không sai MST và tiền', branch: 'explained', actionGuide: 'Gửi Thông báo Mẫu 04/SS cho cơ quan thuế, không cần lập hóa đơn mới.' },
          { value: 'tax_code_err', label: 'Sai mã số thuế người mua hoặc sai tên hàng hóa, số tiền', branch: 'correction', actionGuide: 'Lập biên bản thỏa thuận sai sót và xuất hóa đơn điều chỉnh hoặc thay thế.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Sai sót chỉ về tên, địa chỉ người mua (Không đổi tiền/MST)',
        description: 'Căn cứ Khoản 2 Điều 19 NĐ 123/2020, chỉ cần gửi thông báo Mẫu 04/SS cho cơ quan thuế.',
        requiredDossiers: ['Thông báo Mẫu 04/SS đã có xác nhận cơ quan thuế', 'Thông báo gửi cho người mua'],
        preventiveAction: 'Tự động kiểm tra thông tin MST qua cổng Tổng cục Thuế trước khi phát hành.'
      },
      {
        branchId: 'correction',
        title: 'Sai sót MST hoặc nội dung nghiệp vụ hàng hóa',
        description: 'Cần xuất hóa đơn điều chỉnh hoặc thay thế theo thỏa thuận văn bản giữa hai bên.',
        requiredDossiers: ['Biên bản thỏa thuận xử lý hóa đơn sai sót', 'Hóa đơn điều chỉnh/thay thế mới'],
        invoiceAction: 'Lập hóa đơn điều chỉnh hoặc thay thế theo đúng quy chuẩn NĐ 123/2020.',
        preventiveAction: 'Bắt buộc đối chiếu đơn đặt hàng và đăng ký kinh doanh của khách hàng.'
      },
      {
        branchId: 'missing_data',
        title: 'Chưa có sự đồng thuận của khách hàng',
        description: 'Bên mua chưa ký biên bản xác nhận sai sót để làm căn cứ hủy hoặc thay thế.',
        requiredDossiers: ['Công văn đề nghị phối hợp gửi khách hàng'],
        preventiveAction: 'Liên hệ kế toán bên mua để thống nhất phương thức xử lý qua email chính thức.'
      }
    ],
    exampleData: { description: 'Hóa đơn xuất cho Ban QLDA huyện Đak Đoa', bookQty: '1', physicalQty: '1', unit: 'Hợp đồng', price: '450.000.000' }
  },
  {
    id: 'S07',
    title: 'Một hóa đơn nhiều lần điều chỉnh hoặc thay thế chồng chéo',
    category: 'other',
    applicablePillars: ['all'],
    summary: 'Một hóa đơn gốc phát sinh nhiều lần điều chỉnh tăng giảm hoặc thay thế liên tiếp, dẫn đến rủi ro cộng dồn sai số thuế.',
    differenceComparison: 'Thiết lập chuỗi parentId và trạng thái hiệu lực; hóa đơn thay thế chỉ lấy bản cuối, hóa đơn điều chỉnh lấy tổng đại số có dấu.',
    dossierChecklist: ['Chuỗi XML các hóa đơn', 'Biên bản thỏa thuận từng lần điều chỉnh', 'Bảng tính tổng đại số'],
    questions: [
      {
        id: 'q1',
        text: 'Chuỗi hóa đơn điều chỉnh có đầy đủ căn cứ parentId và dấu đại số không?',
        options: [
          { value: 'valid_chain', label: 'Chuỗi liên kết rõ ràng, tổng giá trị khớp thỏa thuận cuối cùng', branch: 'explained', actionGuide: 'Lập sơ đồ chuỗi hóa đơn kèm bảng giải trình đối chiếu.' },
          { value: 'broken_chain', label: 'Bị trùng lặp giữa vừa điều chỉnh vừa thay thế', branch: 'correction', actionGuide: 'Rà soát hủy bỏ các hóa đơn điều chỉnh sai quy trình.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Chuỗi điều chỉnh hợp lệ theo đúng quy định',
        description: 'Hóa đơn gốc 100 thay bằng 90, sau đó điều chỉnh -5, giá trị chuẩn xác cuối cùng là 85.',
        requiredDossiers: ['Bảng tổng hợp chuỗi hóa đơn có parentId', 'Các biên bản điều chỉnh tương ứng'],
        preventiveAction: 'Sử dụng tính năng quản lý chuỗi hóa đơn trên phần mềm Kế toán Kiểu Việt.'
      },
      {
        branchId: 'correction',
        title: 'Sai lệch do vừa xuất thay thế vừa xuất điều chỉnh',
        description: 'Vi phạm quy trình dẫn đến kê khai trùng doanh thu trên tờ khai thuế GTGT.',
        requiredDossiers: ['Hồ sơ hủy hóa đơn xuất sai', 'Tờ khai thuế GTGT bổ sung'],
        accountingAdjustment: 'Điều chỉnh lại doanh thu và thuế GTGT đầu ra trên sổ kế toán.',
        preventiveAction: 'Quy định chỉ được chọn một hình thức điều chỉnh hoặc thay thế cho một nghiệp vụ.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu hóa đơn gốc hoặc mất liên kết cha con',
        description: 'Không tìm thấy file XML hóa đơn gốc để chứng minh tính hợp pháp của hóa đơn điều chỉnh.',
        requiredDossiers: ['Tra cứu dữ liệu trên cổng hoadondientu.gdt.gov.vn'],
        preventiveAction: 'Lưu trữ toàn bộ file XML gốc vào kho lưu trữ số hóa của công ty.'
      }
    ],
    exampleData: { description: 'Hóa đơn gói cọc bê tông dự ứng lực', bookQty: '1', physicalQty: '1', unit: 'Gói', price: '85.000.000' }
  },
  {
    id: 'S08',
    title: 'Trả lại hàng, chiết khấu thương mại hoặc giảm giá sau bán',
    category: 'unbilled',
    applicablePillars: ['all'],
    summary: 'Phát sinh nghiệp vụ khách hàng trả lại hàng hóa hoặc hưởng chiết khấu thương mại đạt sản lượng cuối kỳ.',
    differenceComparison: 'Kiểm tra chứng từ trả hàng, thỏa thuận chiết khấu có thật; tách biệt sai sót ban đầu với sự kiện thay đổi kinh tế về sau.',
    dossierChecklist: ['Biên bản trả lại hàng', 'Biên bản thỏa thuận chiết khấu thương mại', 'Hóa đơn điều chỉnh chiết khấu'],
    questions: [
      {
        id: 'q1',
        text: 'Nghiệp vụ trả hàng hoặc chiết khấu có hóa đơn và hợp đồng quy định từ trước không?',
        options: [
          { value: 'contracted', label: 'Có quy định rõ trong hợp đồng về tỷ lệ chiết khấu theo doanh số', branch: 'explained', actionGuide: 'Tập hợp hợp đồng, phụ lục chiết khấu và hóa đơn điều chỉnh doanh thu.' },
          { value: 'uncontracted', label: 'Thỏa thuận miệng hoặc không có biên bản trả hàng', branch: 'correction', actionGuide: 'Bổ sung ngay biên bản làm việc và văn bản xác nhận giữa hai bên.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Chiết khấu thương mại / Giảm giá theo đúng hợp đồng',
        description: 'Căn cứ chính sách bán hàng đã công bố và hợp đồng kinh tế ký kết trước thời điểm phát sinh.',
        requiredDossiers: ['Chính sách bán hàng và chiết khấu', 'Hóa đơn điều chỉnh giảm doanh thu'],
        preventiveAction: 'Luôn đưa điều khoản chiết khấu cụ thể vào phụ lục hợp đồng thương mại.'
      },
      {
        branchId: 'correction',
        title: 'Trả lại hàng chưa làm thủ tục nhập lại kho',
        description: 'Khách trả hàng nhưng thủ kho chưa lập phiếu nhập kho hàng bán trả lại.',
        requiredDossiers: ['Phiếu nhập kho hàng trả lại', 'Biên bản kiểm tra chất lượng hàng nhận lại'],
        accountingAdjustment: 'Ghi Nợ 5212, Nợ 3331 / Có 131; đồng thời Nợ 155, 156 / Có 632.',
        preventiveAction: 'Thủ kho chỉ nhận hàng khi có biên bản trả hàng có chữ ký người phụ trách.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu chữ ký xác nhận của bên trả hàng',
        description: 'Chỉ có biên bản nội bộ của Kiểu Việt, bên mua chưa ký đóng dấu.',
        requiredDossiers: ['Văn bản gửi khách hàng đề nghị hoàn tất thủ tục chứng từ'],
        preventiveAction: 'Quy trình thu hồi chứng từ trong vòng 03 ngày làm việc.'
      }
    ],
    exampleData: { description: 'Chiết khấu sản lượng đá xây dựng quý III', bookQty: '1', physicalQty: '1', unit: 'Lần', price: '35.000.000' }
  },
  {
    id: 'S09',
    title: 'Phiếu trạm trộn / xe bồn khác với xác nhận tại công trường',
    category: 'unbilled',
    applicablePillars: ['concrete_materials'],
    summary: 'Khối lượng bê tông xuất trạm trộn ghi trên phiếu giao hàng lệch với khối lượng đo đạc nghiệm thu tại công trường thi công.',
    differenceComparison: 'Đối chiếu mẻ trộn, số chuyến xe bồn, m³ xuất trạm, m³ đổ thực tế, khối lượng hồi về trạm và hao hụt bơm bê tông.',
    dossierChecklist: ['Phiếu xuất mẻ trạm trộn tự động', 'Phiếu giao nhận xe bồn có ký nhận công trường', 'Biên bản xác nhận xe bơm'],
    questions: [
      {
        id: 'q1',
        text: 'Chênh lệch khối lượng do đâu?',
        options: [
          { value: 'slump_pumping', label: 'Hao hụt đường ống bơm và bê tông dính bồn trong giới hạn kỹ thuật', branch: 'explained', actionGuide: 'Viện dẫn định mức hao hụt bê tông thương phẩm theo TCVN và quy chế công ty.' },
          { value: 'rejected_concrete', label: 'Bê tông bị quá giờ, sụt độ sụt phải hủy hoặc hồi về trạm', branch: 'correction', actionGuide: 'Lập biên bản hủy mẻ bê tông hỏng có xác nhận của TVGS và trạm trộn.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Hao hụt thi công bơm bê tông trong giới hạn cho phép',
        description: 'Khối lượng xuất 12.5 m³, nhận 12.0 m³, hồi về 0.5 m³ có phiếu theo dõi đầy đủ.',
        requiredDossiers: ['Nhật ký xe bồn và trạm cân', 'Biên bản nghiệm thu ca bơm bê tông'],
        preventiveAction: 'Chuẩn hóa định mức hao hụt bơm bê tông theo từng cự ly vận chuyển.'
      },
      {
        branchId: 'correction',
        title: 'Mẻ bê tông bị từ chối do không đạt chất lượng',
        description: 'Cần phân loại chi phí bê tông hỏng vào tổn thất sản xuất thay vì tính giá vốn bán hàng.',
        requiredDossiers: ['Biên bản thử mẫu nén bê tông', 'Quyết định xử lý tổn thất mẻ trộn'],
        accountingAdjustment: 'Hạch toán chi phí hỏng vào chi phí khác hoặc yêu cầu bồi thường nếu do lỗi cá nhân.',
        preventiveAction: 'Kiểm soát chặt chẽ phụ gia và thời gian di chuyển của xe bồn.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu phiếu hồi trạm cho phần bê tông dư thừa',
        description: 'Không chứng minh được 0.5 m³ bê tông đã đi đâu sau khi kết thúc ca đổ.',
        requiredDossiers: ['Biên bản xác nhận của lái xe bồn và nhân viên trạm trộn'],
        preventiveAction: 'Bắt buộc cân xe bồn khi về lại trạm để xác định lượng bê tông dư.'
      }
    ],
    exampleData: { description: 'Bê tông thương phẩm M300 đổ sàn tầng 3', bookQty: '12', physicalQty: '12.5', unit: 'm³', price: '1.320.000' }
  },
  {
    id: 'S10',
    title: 'Cát đá cân tấn tại trạm cân nhưng bán theo m³',
    category: 'stock_mismatch',
    applicablePillars: ['concrete_materials'],
    summary: 'Đầu vào mua hoặc khai thác cân theo Tấn tại trạm cân điện tử nhưng xuất bán hoặc tính giá thành theo mét khối (m³).',
    differenceComparison: 'Kiểm tra phiếu cân, hệ số dung trọng rời theo vật liệu/độ ẩm đã được phòng thí nghiệm kiểm định phê duyệt.',
    dossierChecklist: ['Kết quả thí nghiệm dung trọng xốp (LAS-XD)', 'Bảng quy đổi hệ số Tấn sang m³', 'Phiếu cân trạm cân'],
    questions: [
      {
        id: 'q1',
        text: 'Doanh nghiệp đã có kết quả thí nghiệm dung trọng và phê duyệt hệ số quy đổi chưa?',
        options: [
          { value: 'has_las', label: 'Có chứng thư kiểm định LAS-XD hợp lệ theo từng loại đá (1x2, 2x4, 4x6, cát)', branch: 'explained', actionGuide: 'Xuất trình chứng thư LAS-XD và quyết định ban hành hệ số quy đổi nội bộ.' },
          { value: 'no_las', label: 'Tự áp dụng hệ số chung 1.45 hoặc 1.5 mà chưa có kiểm định', branch: 'correction', actionGuide: 'Thuê ngay đơn vị thí nghiệm LAS-XD lấy mẫu kiểm định để làm căn cứ pháp lý.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Áp dụng hệ số dung trọng đã kiểm định phòng LAS-XD',
        description: 'Hệ số quy đổi có cơ sở khoa học, phù hợp với mỏ đá và nguồn vật liệu thực tế.',
        requiredDossiers: ['Chứng chỉ kết quả thí nghiệm LAS-XD còn hiệu lực', 'Bảng tính quy đổi hàng tháng'],
        preventiveAction: 'Thực hiện thí nghiệm lại dung trọng định kỳ mỗi 6 tháng hoặc khi đổi tầng khai thác.'
      },
      {
        branchId: 'correction',
        title: 'Chưa có chứng thư thí nghiệm dung trọng chuẩn',
        description: 'Nguy cơ bị cơ quan thuế ấn định hệ số quy đổi bất lợi dẫn đến truy thu thuế tài nguyên.',
        requiredDossiers: ['Hợp đồng kiểm định chất lượng khoáng sản', 'Biên bản lấy mẫu thí nghiệm'],
        preventiveAction: 'Nghiêm cấm kế toán tự đặt hệ số quy đổi khi chưa có kết quả thí nghiệm.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu phiếu cân đầu vào đối ứng',
        description: 'Chỉ có hóa đơn mua vào m³ mà không lưu dữ liệu trạm cân điện tử.',
        requiredDossiers: ['Trích xuất dữ liệu camera và phần mềm trạm cân'],
        preventiveAction: 'Sao lưu tự động dữ liệu trạm cân vào máy chủ kế toán hàng ngày.'
      }
    ],
    exampleData: { description: 'Đá 1x2 khai thác mỏ đá Kiểu Việt', bookQty: '145', physicalQty: '100', unit: 'Tấn/m³', price: '210.000' }
  },
  {
    id: 'S11',
    title: 'Cống bê tông, gạch vỉa hè lỗi, hỏng, tái chế hoặc bán hạ cấp',
    category: 'below_cost',
    applicablePillars: ['concrete_materials'],
    summary: 'Cấu kiện đúc sẵn (cống tròn, cống hộp, bó vỉa) bị nứt vỡ trong quá trình bốc dỡ, lưu kho hoặc bán thanh lý thứ phẩm.',
    differenceComparison: 'Biên bản KCS nghiệm thu chất lượng xuất xưởng, quyết định xử lý hủy bỏ/tái chế hoặc bán hạ cấp loại B.',
    dossierChecklist: ['Biên bản kiểm tra chất lượng KCS', 'Quyết định thanh lý hạ cấp sản phẩm', 'Hóa đơn bán phế liệu'],
    questions: [
      {
        id: 'q1',
        text: 'Cấu kiện lỗi được xử lý theo hình thức nào?',
        options: [
          { value: 'downgrade', label: 'Bán hạ cấp thành sản phẩm loại 2 cho công trình phụ trợ', branch: 'explained', actionGuide: 'Tập hợp biên bản hạ cấp và hợp đồng bán hàng ghi rõ chủng loại hàng thứ phẩm.' },
          { value: 'crush_recycle', label: 'Đập bỏ lấy cốt thép và nghiền bê tông làm cấp phối', branch: 'correction', actionGuide: 'Lập biên bản hủy cấu kiện, nhập kho sắt thép phế liệu và đá nghiền tái chế.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Bán thanh lý hàng hạ phẩm có đầy đủ biên bản KCS',
        description: 'Giá bán thấp hơn sản phẩm loại 1 do khuyết tật ngoại quan nhưng vẫn thu hồi vốn hợp pháp.',
        requiredDossiers: ['Biên bản đánh giá sản phẩm loại B', 'Hóa đơn xuất bán ghi rõ hàng hạ cấp'],
        preventiveAction: 'Phân loại khu vực lưu bãi riêng cho sản phẩm thứ phẩm để tránh xuất nhầm.'
      },
      {
        branchId: 'correction',
        title: 'Phá dỡ tái chế chưa ghi nhận phế liệu thu hồi',
        description: 'Đã xuất hủy cấu kiện nhưng chưa nhập kho sắt thép phế liệu thu hồi.',
        requiredDossiers: ['Biên bản phá dỡ cấu kiện lỗi', 'Phiếu nhập kho sắt vụn phế liệu TK 152'],
        accountingAdjustment: 'Ghi giảm chi phí hoặc ghi tăng thu nhập khác từ phế liệu thu hồi.',
        preventiveAction: 'Quy định tỷ lệ thu hồi thép tối thiểu khi phá hủy cấu kiện lỗi.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu biên bản xác định nguyên nhân lỗi sản phẩm',
        description: 'Không xác định được lỗi do kỹ thuật trạm trộn hay do khâu cẩu lắp vận chuyển.',
        requiredDossiers: ['Báo cáo kỹ thuật của quản đốc xưởng đúc bê tông'],
        preventiveAction: 'Quy trách nhiệm bồi hoàn nếu do lỗi cố ý của công nhân vận hành.'
      }
    ],
    exampleData: { description: 'Cống tròn bê tông cốt thép D1000', bookQty: '10', physicalQty: '10', unit: 'Đốt', price: '850.000' }
  },
  {
    id: 'S12',
    title: 'Xe bơm, xe bồn, vận tải nhiên liệu lệch định mức sản lượng',
    category: 'wip_cost',
    applicablePillars: ['concrete_materials'],
    summary: 'Chi phí dầu diesel tiêu hao cho dàn xe máy cơ giới (xe bồn, xe bơm, máy xúc) vượt trội so với sản lượng vận chuyển.',
    differenceComparison: 'Đối chiếu lệnh điều xe, nhật trình GPS, số giờ nổ máy, khối lượng m³ vận chuyển với hóa đơn nhiên liệu.',
    dossierChecklist: ['Nhật trình xe máy cơ giới', 'Trích xuất hành trình GPS', 'Hóa đơn dầu diesel', 'Định mức nhiên liệu ban hành'],
    questions: [
      {
        id: 'q1',
        text: 'Chi phí nhiên liệu vượt định mức do nguyên nhân nào?',
        options: [
          { value: 'route_delay', label: 'Tắc đường, chờ đổ bê tông lâu tại công trường, đường đèo dốc Tây Nguyên', branch: 'explained', actionGuide: 'Giải trình yếu tố địa hình và thời gian chờ bơm có nhật ký công trường xác nhận.' },
          { value: 'over_quota', label: 'Tiêu hao thực tế vượt trần định mức công ty quy định', branch: 'correction', actionGuide: 'Bóc tách phần nhiên liệu vượt định mức không phục vụ sản xuất ra khỏi chi phí hợp lý.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Đặc thù công trình đèo dốc và thời gian chờ bơm kéo dài',
        description: 'Có nhật trình GPS và xác nhận của Ban điều hành công trường về thời gian nổ máy giữ bê tông.',
        requiredDossiers: ['Báo cáo trích xuất GPS hành trình và thời gian nổ máy', 'Biên bản xác nhận ca xe'],
        preventiveAction: 'Xây dựng định mức nhiên liệu riêng theo từng cung đường vận chuyển.'
      },
      {
        branchId: 'correction',
        title: 'Loại trừ chi phí nhiên liệu vượt định mức vô lý',
        description: 'Phần dầu vượt định mức do lái xe tự ý sử dụng hoặc thất thoát phải loại khỏi chi phí thuế.',
        requiredDossiers: ['Bảng tính định mức nhiên liệu thực tế', 'Quyết định thu hồi/loại trừ chi phí'],
        accountingAdjustment: 'Kê khai chỉ tiêu B4 trên Tờ khai quyết toán thuế TNDN (Chi phí không được trừ).',
        preventiveAction: 'Lắp đặt cảm biến đo mức dầu trong bình chứa của toàn bộ dàn xe máy cơ giới.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu lệnh điều xe hoặc nhật trình chi tiết',
        description: 'Hóa đơn dầu mua số lượng lớn nhưng không có bảng phân bổ cho từng biển số xe cụ thể.',
        requiredDossiers: ['Bảng kê chi tiết cấp phát nhiên liệu từng đầu xe'],
        preventiveAction: 'Áp dụng thẻ cấp phát nhiên liệu điện tử định danh theo từng biển số xe.'
      }
    ],
    exampleData: { description: 'Dầu Diesel 0.05S cấp cho xe bơm cần 42m', bookQty: '1200', physicalQty: '1500', unit: 'Lít', price: '19.500' }
  },
  {
    id: 'S13',
    title: 'Cừ Larsen, cốp pha xuất công trường chưa thu hồi',
    category: 'stock_mismatch',
    applicablePillars: ['concrete_materials'],
    summary: 'Cừ thép Larsen, giàn giáo, cốp pha thép luân chuyển xuất phục vụ thi công công trình nhưng chưa có chứng từ thu hồi về kho.',
    differenceComparison: 'Hợp đồng thi công, biên bản bàn giao thiết bị công trường, thời gian luân chuyển và hồ sơ bù trừ hao hụt/mất mát.',
    dossierChecklist: ['Biên bản bàn giao cừ Larsen tại công trường', 'Sổ theo dõi CCDC luân chuyển TK 242', 'Biên bản kiểm kê thiết bị tại dự án'],
    questions: [
      {
        id: 'q1',
        text: 'Tình trạng thực tế của số lượng cừ Larsen/cốp pha hiện nay?',
        options: [
          { value: 'in_use', label: 'Đang phục vụ thi công biện pháp tầng hầm/bờ kè tại dự án chưa xong', branch: 'explained', actionGuide: 'Xuất trình xác nhận của Ban chỉ huy công trường về việc thiết bị đang cắm tại công trình.' },
          { value: 'lost_damaged', label: 'Bị chôn ngầm không rút được hoặc hư hỏng mất mát', branch: 'correction', actionGuide: 'Lập biên bản xử lý tài sản mất mát, thanh toán bồi thường hoặc ghi nhận tổn thất.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Thiết bị biện pháp đang thi công tại hiện trường',
        description: 'Vẫn thuộc quyền sở hữu của công ty, đang được phân bổ chi phí khấu hao/luân chuyển theo tiến độ.',
        requiredDossiers: ['Biên bản kiểm kê hiện trường công trình', 'Bảng phân bổ chi phí luân chuyển TK 242'],
        preventiveAction: 'Kiểm kê định kỳ hiện trạng cừ thép tại công trường 3 tháng/lần.'
      },
      {
        branchId: 'correction',
        title: 'Cừ để lại trong đất theo thiết kế công trình',
        description: 'Nếu cừ Larsen để lại vĩnh viễn theo hồ sơ thiết kế được duyệt, phải kết chuyển vào giá thành công trình.',
        requiredDossiers: ['Hồ sơ thiết kế bản vẽ thi công được duyệt', 'Biên bản nghiệm thu giữ cừ'],
        accountingAdjustment: 'Kết chuyển giá trị còn lại từ TK 242 sang TK 154 của công trình.',
        preventiveAction: 'Kiểm tra dự toán thầu xem có khoản mục thanh toán cừ bỏ lại hay không.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu biên bản giao nhận giữa các đội thi công',
        description: 'Chuyển cừ từ công trình A sang công trình B mà không qua kho và không lập biên bản.',
        requiredDossiers: ['Biên bản điều động thiết bị liên công trình'],
        preventiveAction: 'Mọi di chuyển thiết bị đều phải thông qua phòng Vật tư thiết bị công ty.'
      }
    ],
    exampleData: { description: 'Cừ thép Larsen IV dài 12m', bookQty: '120', physicalQty: '120', unit: 'Cây', price: '12.000.000' }
  },
  {
    id: 'S14',
    title: 'Sản lượng khai thác mỏ khác với sản lượng xuất bán và tồn kho',
    category: 'stock_mismatch',
    applicablePillars: ['concrete_materials'],
    summary: 'Sản lượng khoáng sản đá nguyên khai nổ mìn kê khai nộp thuế tài nguyên không khớp với tổng sản lượng đá bán ra cộng tồn kho.',
    differenceComparison: 'Giấy phép khai thác mỏ, hộ chiếu nổ mìn, số liệu trạm cân điện tử, camera giám sát và báo cáo định kỳ Sở TNMT.',
    dossierChecklist: ['Giấy phép khai thác khoáng sản', 'Hộ chiếu nổ mìn và bảng nghiệm thu mìn', 'Tờ khai thuế Tài nguyên và Phí BVMT', 'Số liệu trạm cân mỏ'],
    questions: [
      {
        id: 'q1',
        text: 'Chênh lệch sản lượng có lý do từ tỷ lệ nở rời khi nghiền đá không?',
        options: [
          { value: 'bulking_factor', label: 'Do hệ số nở rời giữa đá nguyên khai (in-situ) và đá thành phẩm sau nghiền', branch: 'explained', actionGuide: 'Viện dẫn hệ số nở rời theo Thiết kế mỏ đã được UBND tỉnh phê duyệt.' },
          { value: 'unreported_scale', label: 'Có xe chở đá không qua trạm cân hoặc trạm cân hỏng', branch: 'special_review', actionGuide: 'Kiểm tra dữ liệu camera mỏ và khắc phục ngay, báo cáo Kế toán trưởng.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Chênh lệch do hệ số nở rời từ đá hộc sang đá thành phẩm',
        description: 'Đá nguyên khai nổ mìn có hệ số nở rời 1.25 - 1.35 khi nghiền sàng ra các loại đá 1x2, 2x4 và đá mi.',
        requiredDossiers: ['Dự án đầu tư và thiết kế mỏ được phê duyệt', 'Bảng cân bằng vật chất chế biến đá'],
        preventiveAction: 'Lập bảng cân đối sản lượng khai thác - chế biến - xuất bán hàng tháng.'
      },
      {
        branchId: 'correction',
        title: 'Kê khai sai sản lượng tính thuế tài nguyên',
        description: 'Kê khai thuế theo đá thành phẩm thay vì quy đổi về đá nguyên khai theo Thông tư 152/2015.',
        requiredDossiers: ['Bảng tính quy đổi sản lượng đá nguyên khai', 'Hồ sơ khai bổ sung thuế tài nguyên'],
        accountingAdjustment: 'Khai bổ sung thuế Tài nguyên và Phí bảo vệ môi trường kèm tiền chậm nộp.',
        preventiveAction: 'Áp dụng công thức quy đổi chuẩn xác theo hướng dẫn của Cục Thuế địa phương.'
      },
      {
        branchId: 'special_review',
        title: 'Nghi ngờ thất thoát sản lượng mỏ không qua cân',
        description: 'Cần kiểm tra dữ liệu camera và nhật ký nổ mìn để xác định khối lượng đá thực tế.',
        requiredDossiers: ['Báo cáo thanh tra an toàn mỏ và dữ liệu camera'],
        preventiveAction: 'Đồng bộ dữ liệu trạm cân trực tiếp với máy chủ cơ quan thuế theo Luật Khoáng sản 2024.'
      }
    ],
    exampleData: { description: 'Đá nguyên khai nổ mìn mỏ Kiểu Việt', bookQty: '10000', physicalQty: '13000', unit: 'm³', price: '85.000' }
  },
  {
    id: 'S15',
    title: 'BOM định mức gỗ nội thất khác với lượng gỗ thực tế xuất kho',
    category: 'wip_cost',
    applicablePillars: ['interior'],
    summary: 'Định mức nguyên vật liệu (BOM) sản xuất đồ gỗ nội thất thấp hơn thực tế xuất kho gỗ xẻ sấy, phế liệu đầu mẩu chưa vào sổ.',
    differenceComparison: 'Bản vẽ thiết kế, BOM kỹ thuật, phiếu xuất kho gỗ, báo cáo tỷ lệ thu hồi gỗ và sổ theo dõi phế liệu thu hồi.',
    dossierChecklist: ['Bảng định mức vật tư (BOM) được duyệt', 'Báo cáo nghiệm thu sản phẩm mộc', 'Phiếu nhập kho phế liệu gỗ / dăm bào'],
    questions: [
      {
        id: 'q1',
        text: 'Tỷ lệ hao hụt gỗ xẻ có vượt định mức cho phép của nhà máy không?',
        options: [
          { value: 'within_norm', label: 'Hao hụt nằm trong khoảng 15-22% đối với gỗ tự nhiên theo quy chuẩn nội bộ', branch: 'explained', actionGuide: 'Xuất trình bảng định mức tỷ lệ thu hồi phôi gỗ có phê duyệt của Ban Giám đốc.' },
          { value: 'excess_loss', label: 'Gỗ bị nứt tét, sâu mọt nhiều dẫn đến tỷ lệ loại thải vượt định mức', branch: 'correction', actionGuide: 'Lập biên bản kiểm tra chất lượng lô gỗ xẻ sấy và điều chỉnh định mức kỹ thuật.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Hao hụt gỗ tự nhiên theo đúng đặc thù sản xuất',
        description: 'Gỗ gõ đỏ, sồi xẻ sấy có hao hụt đầu mẩu, mùn cưa và phoi bào đã được tính toán trong định mức.',
        requiredDossiers: ['Quy chế định mức kỹ thuật sản xuất nội thất gỗ', 'Phiếu nhập kho dăm bào bán phế liệu'],
        preventiveAction: 'Rà soát và cập nhật định mức BOM theo từng loại gỗ trước khi sản xuất hàng loạt.'
      },
      {
        branchId: 'correction',
        title: 'Chưa hạch toán thu hồi phế liệu gỗ bán ra',
        description: 'Mùn cưa, dăm bào, đầu mẩu gỗ được bán cho cơ sở đốt lò nhưng chưa ghi nhận thu nhập.',
        requiredDossiers: ['Hóa đơn bán dăm bào phế liệu', 'Phiếu thu tiền bán phế liệu'],
        accountingAdjustment: 'Ghi giảm chi phí sản xuất (Có TK 154) hoặc ghi tăng thu nhập khác (Có TK 711).',
        preventiveAction: 'Cân đo và quản lý chặt chẽ khu vực bãi chứa phế liệu gỗ xưởng Phú Tài.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu lệnh sản xuất tương ứng với phiếu xuất kho gỗ',
        description: 'Thủ kho xuất gỗ nhưng không ghi rõ phục vụ cho đơn hàng hay công trình nào.',
        requiredDossiers: ['Lệnh sản xuất có mã đơn hàng cụ thể'],
        preventiveAction: 'Nghiêm cấm xuất kho nguyên liệu gỗ khi chưa có Lệnh sản xuất được duyệt.'
      }
    ],
    exampleData: { description: 'Gỗ Gõ Đỏ hộp xẻ sấy quy cách', bookQty: '15', physicalQty: '18.5', unit: 'm³', price: '28.000.000' }
  },
  {
    id: 'S16',
    title: 'Giao hàng và lắp đặt nhiều đợt nhưng chỉ xuất hóa đơn một lần',
    category: 'unbilled',
    applicablePillars: ['interior', 'construction'],
    summary: 'Công trình lắp đặt nội thất kéo dài nhiều tháng, đã bàn giao từng tầng/phòng nhưng chờ hoàn thiện toàn bộ mới xuất hóa đơn.',
    differenceComparison: 'Hợp đồng kinh tế, điều khoản thanh toán, biên bản giao nhận từng đợt và biên bản nghiệm thu tổng thể bàn giao đưa vào sử dụng.',
    dossierChecklist: ['Hợp đồng cung cấp và lắp đặt', 'Biên bản bàn giao hàng từng đợt', 'Biên bản nghiệm thu hoàn thành tổng thể'],
    questions: [
      {
        id: 'q1',
        text: 'Hợp đồng quy định nghiệm thu theo từng hạng mục hoàn thành hay trọn gói tổng thể?',
        options: [
          { value: 'milestone', label: 'Nghiệm thu theo giai đoạn/hạng mục hoàn thành (từng tầng, từng phòng)', branch: 'correction', actionGuide: 'Phải xuất hóa đơn tại thời điểm nghiệm thu từng giai đoạn theo Điều 9 NĐ 123/2020.' },
          { value: 'turnkey', label: 'Chỉ nghiệm thu tổng thể khi toàn bộ hệ thống nội thất hoàn thiện đồng bộ', branch: 'explained', actionGuide: 'Chứng minh việc giao hàng chỉ là tập kết thiết bị, chưa chuyển giao quyền sử dụng.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Hợp đồng trọn gói nghiệm thu đồng bộ đưa vào sử dụng',
        description: 'Các đợt giao hàng chỉ mang tính chất tập kết vật tư thiết bị phục vụ lắp ráp hoàn thiện.',
        requiredDossiers: ['Hợp đồng quy định nghiệm thu tổng thể', 'Biên bản bàn giao đưa vào sử dụng'],
        preventiveAction: 'Quy định rõ trong điều khoản hợp đồng thời điểm chuyển giao quyền sở hữu.'
      },
      {
        branchId: 'correction',
        title: 'Chậm xuất hóa đơn theo giai đoạn nghiệm thu khối lượng',
        description: 'Đã có biên bản bàn giao và đưa vào sử dụng từng phần nhưng không xuất hóa đơn ngay.',
        requiredDossiers: ['Biên bản nghiệm thu từng đợt', 'Hóa đơn điện tử xuất bổ sung'],
        invoiceAction: 'Xuất hóa đơn bổ sung cho từng đợt nghiệm thu đã hoàn thành.',
        accountingAdjustment: 'Kê khai bổ sung thuế GTGT và ghi nhận doanh thu đúng kỳ.',
        preventiveAction: 'Kế toán theo dõi sát sao tiến độ nghiệm thu của ban chỉ huy công trình.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu biên bản xác nhận khối lượng dở dang tại hiện trường',
        description: 'Hàng đã giao đến công trường khách hàng nhưng không có biên bản lưu kho bảo quản.',
        requiredDossiers: ['Biên bản bàn giao tài sản bảo quản tại công trình'],
        preventiveAction: 'Ký biên bản lưu kho tạm quản với chủ đầu tư ngay khi hạ hàng.'
      }
    ],
    exampleData: { description: 'Hệ thống nội thất Hội trường UBND tỉnh', bookQty: '1', physicalQty: '1', unit: 'Gói', price: '680.000.000' }
  },
  {
    id: 'S17',
    title: 'Đã nghiệm thu A-B công trình nhưng chưa thu được tiền, TK 154 còn treo',
    category: 'wip_cost',
    applicablePillars: ['construction'],
    summary: 'Công trình xây dựng đã ký biên bản nghiệm thu khối lượng A-B nhưng chủ đầu tư chưa giải ngân thanh toán, kế toán chưa kết chuyển giá vốn.',
    differenceComparison: 'Biên bản nghiệm thu A-B, hóa đơn đầu ra, sổ chi tiết TK 154, TK 632 và tài khoản công nợ TK 131.',
    dossierChecklist: ['Biên bản nghiệm thu hoàn thành giai đoạn A-B', 'Hóa đơn GTGT đầu ra', 'Sổ chi tiết chi phí công trình TK 154'],
    questions: [
      {
        id: 'q1',
        text: 'Doanh nghiệp đã xuất hóa đơn đầu ra khi ký nghiệm thu A-B chưa?',
        options: [
          { value: 'invoiced_no_cost', label: 'Đã xuất hóa đơn nhưng chưa kết chuyển giá vốn TK 154 sang TK 632', branch: 'correction', actionGuide: 'Kết chuyển ngay giá vốn tương ứng doanh thu đã ghi nhận theo nguyên tắc phù hợp VAS 01.' },
          { value: 'no_invoice_no_cost', label: 'Chưa xuất hóa đơn và chưa kết chuyển giá vốn vì chờ thanh toán', branch: 'correction', actionGuide: 'Xuất hóa đơn ngay theo quy định thời điểm nghiệm thu, không phụ thuộc việc đã thu tiền.' },
          { value: 'disputed_volume', label: 'Biên bản A-B chỉ là khối lượng nội bộ, chủ đầu tư đang khiếu nại kiểm toán', branch: 'explained', actionGuide: 'Xuất trình biên bản bảo lưu ý kiến hoặc hồ sơ kiểm toán đang xử lý tranh chấp.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Khối lượng nghiệm thu đang có tranh chấp / Kiểm toán lại',
        description: 'Chưa đủ điều kiện ghi nhận doanh thu và giá vốn chắc chắn do chủ đầu tư yêu cầu giám định lại.',
        requiredDossiers: ['Văn bản thông báo tạm dừng thanh toán của chủ đầu tư', 'Hồ sơ đối chiếu kỹ thuật'],
        preventiveAction: 'Thực hiện giải quyết dứt điểm các vướng mắc kỹ thuật trước khi ký nghiệm thu.'
      },
      {
        branchId: 'correction',
        title: 'Bắt buộc xuất hóa đơn và kết chuyển giá vốn khi đã nghiệm thu',
        description: 'Luật QLT và NĐ 123/2020 quy định thời điểm xuất hóa đơn xây dựng là thời điểm nghiệm thu A-B.',
        requiredDossiers: ['Biên bản nghiệm thu khối lượng A-B', 'Hóa đơn GTGT đầu ra', 'Bảng tính giá thành công trình'],
        invoiceAction: 'Lập hóa đơn điện tử ngay theo ngày nghiệm thu trên biên bản A-B.',
        accountingAdjustment: 'Ghi Nợ 131 / Có 511, Có 3331; đồng thời kết chuyển Nợ 632 / Có 154.',
        preventiveAction: 'Tuyệt đối không đợi thanh toán tiền mới xuất hóa đơn xây lắp.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu hồ sơ quyết toán chi phí dở dang của công trình',
        description: 'TK 154 còn nhiều khoản chi phí nhân công thuê ngoài chưa có chứng từ gốc hợp lệ.',
        requiredDossiers: ['Tập hợp đầy đủ bảng chấm công và chứng từ chi trả nhân công'],
        preventiveAction: 'Khóa sổ chi phí công trình theo từng đợt nghiệm thu giai đoạn.'
      }
    ],
    exampleData: { description: 'Gói thầu thi công đường giao thông liên huyện', bookQty: '1', physicalQty: '1', unit: 'Hạng mục', price: '2.450.000.000' }
  },
  {
    id: 'S18',
    title: 'Trích trước chi phí công trình TK 335 nhưng thiếu hóa đơn nhà thầu phụ',
    category: 'wip_cost',
    applicablePillars: ['construction'],
    summary: 'Kế toán trích trước giá vốn công trình tương ứng doanh thu đã ghi nhận nhưng sau ngày quyết toán thầu phụ vẫn chưa xuất hóa đơn.',
    differenceComparison: 'Hợp đồng thầu phụ, bảng khối lượng hoàn thành của thầu phụ, sổ chi tiết TK 335 và hạn chót nhận hóa đơn hợp lệ.',
    dossierChecklist: ['Hợp đồng giao khoán thầu phụ', 'Hồ sơ nghiệm thu khối lượng thầu phụ', 'Sổ chi tiết TK 335'],
    questions: [
      {
        id: 'q1',
        text: 'Khoản trích trước TK 335 đã quá thời hạn quyết toán năm nhưng chưa có hóa đơn không?',
        options: [
          { value: 'received_before_audit', label: 'Hóa đơn thầu phụ đã về trước thời điểm thanh tra kiểm tra thuế', branch: 'explained', actionGuide: 'Xuất trình hóa đơn thầu phụ và chứng từ thanh toán ngân hàng cho khoản nợ.' },
          { value: 'still_missing', label: 'Thầu phụ giải thể hoặc không chịu xuất hóa đơn, quá hạn trích lập', branch: 'correction', actionGuide: 'Hoàn nhập khoản trích trước TK 335 vào thu nhập chịu thuế TNDN theo quy định.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Hóa đơn thầu phụ về kịp thời trước thời điểm kiểm tra',
        description: 'Khoản trích trước phản ánh đúng giá vốn tương ứng doanh thu ghi nhận, hóa đơn hợp pháp về sau.',
        requiredDossiers: ['Hóa đơn điện tử của nhà thầu phụ', 'Ủy nhiệm chi thanh toán cho thầu phụ'],
        preventiveAction: 'Giữ lại tiền bảo hành hoặc thanh toán chỉ khi thầu phụ xuất đủ hóa đơn.'
      },
      {
        branchId: 'correction',
        title: 'Hoàn nhập chi phí trích trước không có hóa đơn chứng từ',
        description: 'Theo Thông tư 96/2015, khoản trích trước không có đủ chứng từ phải hoàn nhập giảm chi phí thuế.',
        requiredDossiers: ['Biên bản thanh lý hợp đồng thầu phụ', 'Hồ sơ điều chỉnh quyết toán thuế TNDN'],
        accountingAdjustment: 'Ghi Nợ 335 / Có 632 (hoặc Có 711) và điều chỉnh tăng thu nhập tính thuế TNDN.',
        preventiveAction: 'Quy định trong hợp đồng thầu phụ: chậm xuất hóa đơn phạt 10% giá trị hợp đồng.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu biên bản xác nhận khối lượng giao khoán',
        description: 'Trích trước theo số ước tính trên dự toán mà không có biên bản kiểm tra hiện trường.',
        requiredDossiers: ['Biên bản đo đạc khối lượng thực tế thầu phụ đã làm'],
        preventiveAction: 'Chỉ được trích trước chi phí khi có bảng đo đạc khối lượng thực tế hoàn thành.'
      }
    ],
    exampleData: { description: 'Hạng mục thảm bê tông nhựa mặt đường thầu phụ', bookQty: '1', physicalQty: '1', unit: 'Hạng mục', price: '380.000.000' }
  },
  {
    id: 'S19',
    title: 'Thu tiền trước nhưng dịch vụ, sản phẩm chưa nghiệm thu',
    category: 'payment_ar',
    applicablePillars: ['all'],
    summary: 'Doanh nghiệp đã nhận tiền tạm ứng hoặc thanh toán trước từ khách hàng qua ngân hàng nhưng dịch vụ/hàng hóa chưa hoàn thành.',
    differenceComparison: 'Hợp đồng kinh tế, giấy báo Có ngân hàng, hóa đơn GTGT (nếu dịch vụ thu tiền trước) và sổ chi tiết TK 131.',
    dossierChecklist: ['Hợp đồng dịch vụ / cung cấp', 'Sao kê ngân hàng TK 112', 'Sổ chi tiết TK 131', 'Tiến độ thực hiện dịch vụ'],
    questions: [
      {
        id: 'q1',
        text: 'Hoạt động phát sinh là bán hàng hóa hay cung cấp dịch vụ?',
        options: [
          { value: 'goods', label: 'Bán hàng hóa (Tiền tạm ứng đặt cọc chưa chuyển giao hàng)', branch: 'explained', actionGuide: 'Chứng minh tiền tạm ứng mua hàng hóa không phải thời điểm xuất hóa đơn (Điều 9 NĐ 123).' },
          { value: 'service', label: 'Cung ứng dịch vụ thu tiền trước', branch: 'correction', actionGuide: 'Kiểm tra quy định thời điểm xuất hóa đơn khi thu tiền trước đối với dịch vụ theo NĐ 123/2020.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Tiền tạm ứng đặt cọc hợp đồng mua bán hàng hóa',
        description: 'Đối với hàng hóa (gỗ, bê tông, đá), thu tiền tạm ứng trước khi giao hàng không phải xuất hóa đơn.',
        requiredDossiers: ['Hợp đồng kinh tế quy định điều khoản đặt cọc', 'Phiếu báo Có ngân hàng'],
        preventiveAction: 'Ghi rõ nội dung chuyển khoản là "Tạm ứng hợp đồng mua bán hàng hóa".'
      },
      {
        branchId: 'correction',
        title: 'Cung cấp dịch vụ thu tiền trước bắt buộc lập hóa đơn',
        description: 'Căn cứ Khoản 2 Điều 9 NĐ 123/2020, dịch vụ thu tiền trước phải xuất hóa đơn tại thời điểm thu tiền.',
        requiredDossiers: ['Hóa đơn điện tử dịch vụ đã xuất', 'Tờ khai thuế GTGT bổ sung'],
        invoiceAction: 'Lập hóa đơn điện tử cho số tiền dịch vụ đã thu trước.',
        accountingAdjustment: 'Ghi Nợ 112 / Có 3387 (Doanh thu chưa thực hiện) hoặc Có 131, Có 3331.',
        preventiveAction: 'Bộ phận tài chính thông báo ngay cho kế toán khi có tiền về từ dịch vụ.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu hợp đồng dịch vụ đính kèm',
        description: 'Khách chuyển tiền nhưng chưa hoàn thiện thủ tục ký kết hợp đồng chính thức.',
        requiredDossiers: ['Thư trao đổi thương mại và dự thảo hợp đồng'],
        preventiveAction: 'Yêu cầu hoàn tất ký hợp đồng trước khi cấp số tài khoản nhận thanh toán.'
      }
    ],
    exampleData: { description: 'Tiền tạm ứng hợp đồng tư vấn thiết kế nội thất', bookQty: '1', physicalQty: '1', unit: 'Hợp đồng', price: '75.000.000' }
  },
  {
    id: 'S20',
    title: 'Cấn trừ công nợ nhiều bên, thanh toán bằng vật liệu, xăng dầu',
    category: 'payment_ar',
    applicablePillars: ['all'],
    summary: 'Công ty bán bê tông hoặc đá cho đối tác nhưng nhận lại xăng dầu, sắt thép hoặc bù trừ qua công nợ của đơn vị thứ ba.',
    differenceComparison: 'Hợp đồng hai chiều, hóa đơn hai chiều, biên bản đối chiếu cấn trừ công nợ ba bên và điều kiện thanh toán không dùng tiền mặt.',
    dossierChecklist: ['Biên bản thỏa thuận cấn trừ công nợ đa phương', 'Hóa đơn hai chiều mua và bán', 'Sổ chi tiết TK 131 và TK 331'],
    questions: [
      {
        id: 'q1',
        text: 'Nghiệp vụ cấn trừ có văn bản thỏa thuận trước và đầy đủ hóa đơn hai chiều không?',
        options: [
          { value: 'bilateral_offset', label: 'Cấn trừ công nợ hai bên trực tiếp có quy định trong hợp đồng và biên bản đối chiếu', branch: 'explained', actionGuide: 'Tập hợp đủ hợp đồng mua/bán, hóa đơn hai chiều và biên bản bù trừ công nợ.' },
          { value: 'tripartite_offset', label: 'Cấn trừ công nợ ba bên (tay ba)', branch: 'correction', actionGuide: 'Kiểm tra biên bản chỉ định thanh toán và biên bản cấn trừ có đủ chữ ký con dấu 3 bên.' },
          { value: 'net_accounting', label: 'Tự bù trừ doanh thu với chi phí chỉ ghi nhận số tiền chênh lệch', branch: 'correction', actionGuide: 'Hạch toán lại toàn bộ doanh thu và chi phí riêng biệt, không net số liệu.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Cấn trừ công nợ hợp pháp đáp ứng điều kiện khấu trừ thuế GTGT',
        description: 'Căn cứ Khoản 10 Điều 1 Thông tư 26/2015, bù trừ công nợ có hợp đồng và biên bản đối chiếu được coi là thanh toán không dùng tiền mặt.',
        requiredDossiers: ['Biên bản bù trừ công nợ có đối soát số hóa đơn', 'Hợp đồng mua bán có điều khoản bù trừ'],
        preventiveAction: 'Lập biên bản cấn trừ công nợ ngay trong tháng phát sinh nghiệp vụ bù trừ.'
      },
      {
        branchId: 'correction',
        title: 'Vi phạm hạch toán bù trừ thuần (Netting)',
        description: 'Tự cấn trừ doanh thu 100 với mua hàng 80 để chỉ ghi sổ doanh thu 20 là vi phạm nghiêm trọng.',
        requiredDossiers: ['Chứng từ hạch toán bổ sung đầy đủ doanh thu và chi phí'],
        accountingAdjustment: 'Ghi nhận đủ Doanh thu TK 511 (100) và Chi phí mua hàng TK 152/632 (80); cấn trừ trên TK 131/331.',
        preventiveAction: 'Nghiêm cấm ghi net số tiền trên hệ thống kế toán ERP.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu xác nhận ủy quyền thanh toán ba bên',
        description: 'Bên thứ ba trả tiền thay nhưng không có văn bản ủy quyền hợp pháp của bên mua.',
        requiredDossiers: ['Văn bản ủy quyền thanh toán ba bên có chứng thực'],
        preventiveAction: 'Yêu cầu văn bản cam kết ba bên trước khi thực hiện giao hàng bù trừ.'
      }
    ],
    exampleData: { description: 'Bù trừ tiền bê tông với dầu Diesel Công ty Xăng dầu Gia Lai', bookQty: '1', physicalQty: '1', unit: 'Biên bản', price: '210.000.000' }
  },
  {
    id: 'S21',
    title: 'Thu tiền bán hàng qua tài khoản cá nhân hoặc thu hộ chưa phân bổ',
    category: 'payment_ar',
    applicablePillars: ['all'],
    summary: 'Khách hàng chuyển tiền mua đá, bê tông hoặc gỗ vào tài khoản cá nhân của Giám đốc/nhân viên bán hàng mà chưa nộp về công ty.',
    differenceComparison: 'Sao kê tài khoản cá nhân, phiếu thu tiền mặt vào quỹ công ty, bảng kê nộp tiền ngân hàng và hóa đơn bán ra.',
    dossierChecklist: ['Sao kê tài khoản ngân hàng cá nhân', 'Phiếu thu nộp tiền vào quỹ công ty', 'Văn bản ủy quyền thu hộ'],
    questions: [
      {
        id: 'q1',
        text: 'Số tiền cá nhân thu hộ đã được nộp đầy đủ vào tài khoản/quỹ công ty chưa?',
        options: [
          { value: 'refunded_to_co', label: 'Đã hoàn trả và nộp đủ vào tài khoản ngân hàng của Công ty Kiểu Việt', branch: 'explained', actionGuide: 'Xuất trình ủy quyền thu hộ và ủy nhiệm chi nộp tiền vào tài khoản công ty.' },
          { value: 'still_held', label: 'Cá nhân vẫn đang giữ tiền hoặc chưa vào sổ sách công ty', branch: 'special_review', actionGuide: 'Yêu cầu cá nhân nộp ngay vào tài khoản công ty, rà soát xuất hóa đơn kê khai doanh thu.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Thu hộ có văn bản ủy quyền và đã hoàn nộp kịp thời',
        description: 'Nhân viên thị trường thu hộ tiền khách lẻ vùng sâu và chuyển khoản nộp lại công ty trong 24h.',
        requiredDossiers: ['Giấy ủy quyền thu tiền', 'Phiếu nộp tiền vào tài khoản công ty'],
        preventiveAction: 'Cung cấp mã QR tài khoản định danh của Công ty Kiểu Việt cho toàn bộ khách hàng.'
      },
      {
        branchId: 'special_review',
        title: 'Nguy cơ bị quy kết trốn doanh thu qua tài khoản cá nhân',
        description: 'Cơ quan thuế quét dữ liệu ngân hàng cá nhân và truy thu thuế TNDN, GTGT.',
        requiredDossiers: ['Báo cáo giải trình dòng tiền cá nhân', 'Hồ sơ khai bổ sung doanh thu'],
        accountingAdjustment: 'Kê khai bổ sung doanh thu bán hàng và nộp đủ thuế kèm tiền chậm nộp.',
        preventiveAction: 'Tuyệt đối nghiêm cấm việc dùng tài khoản cá nhân để nhận tiền thanh toán của doanh nghiệp.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu danh sách đối tượng khách hàng nộp tiền',
        description: 'Khoản tiền chuyển vào ghi nội dung chung chung không rõ thanh toán cho đơn hàng nào.',
        requiredDossiers: ['Bảng đối chiếu công nợ chi tiết từng khách mua'],
        preventiveAction: 'Quy chuẩn cú pháp nộp tiền đối với các điểm bán lẻ mỏ đá.'
      }
    ],
    exampleData: { description: 'Tiền bán đá hộc cho các hộ dân xây tường rào', bookQty: '1', physicalQty: '1', unit: 'Đợt', price: '42.000.000' }
  },
  {
    id: 'S22',
    title: 'Hàng mua vào có thật nhưng thiếu hóa đơn hoặc nguồn gốc lâm sản',
    category: 'other',
    applicablePillars: ['interior', 'concrete_materials'],
    summary: 'Mua gỗ tròn, đá hộc, cát san lấp của người dân/hộ kinh doanh không có hóa đơn hoặc thiếu bảng kê lâm sản hợp pháp.',
    differenceComparison: 'Bảng kê thu mua Mẫu 01/TNDN, CCCD người bán, xác nhận nguồn gốc của kiểm lâm hoặc chính quyền địa phương.',
    dossierChecklist: ['Bảng kê thu mua hàng hóa dịch vụ Mẫu 01/TNDN', 'Bản kê lâm sản có xác nhận của Kiểm lâm', 'CCCD và chữ ký của người bán trực tiếp'],
    questions: [
      {
        id: 'q1',
        text: 'Mặt hàng thu mua có thuộc đối tượng được lập Bảng kê 01/TNDN không?',
        options: [
          { value: 'eligible_01', label: 'Gỗ rừng trồng, cát sỏi tự khai thác của người dân không kinh doanh', branch: 'explained', actionGuide: 'Kiểm tra tính hợp lệ của Bảng kê 01/TNDN kèm bản kê lâm sản và giá thị trường.' },
          { value: 'ineligible', label: 'Mua của doanh nghiệp/hộ kinh doanh nhưng không lấy hóa đơn', branch: 'correction', actionGuide: 'Yêu cầu bên bán xuất hóa đơn hợp pháp, không lập bảng kê 01 để trốn hóa đơn.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Thu mua hợp pháp theo Bảng kê 01/TNDN và Hồ sơ lâm sản',
        description: 'Đáp ứng đầy đủ quy định tại Thông tư 96/2015 và Thông tư 26/2022/TT-BNNPTNT về nguồn gốc gỗ rừng trồng.',
        requiredDossiers: ['Bảng kê Mẫu 01/TNDN có ký nhận', 'Bản kê lâm sản hợp pháp'],
        preventiveAction: 'Lập tổ thu mua kiểm tra hồ sơ đất rừng và nguồn gốc gỗ trước khi đốn hạ.'
      },
      {
        branchId: 'correction',
        title: 'Lập Bảng kê 01 khống để hợp thức hóa hàng trôi nổi',
        description: 'Hàng mua từ đơn vị kinh doanh nhưng né hóa đơn bị đoàn thanh tra loại 100% chi phí.',
        requiredDossiers: ['Hồ sơ loại trừ chi phí trên quyết toán thuế TNDN'],
        accountingAdjustment: 'Kê khai chỉ tiêu B4 giảm chi phí tính thuế TNDN.',
        preventiveAction: 'Tuyệt đối không mua hàng trôi nổi không có hóa đơn nguồn gốc hợp pháp.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu xác nhận kiểm lâm địa bàn đối với gỗ tròn',
        description: 'Chưa có dấu xác nhận của hạt kiểm lâm sở tại nơi khai thác gỗ.',
        requiredDossiers: ['Hồ sơ trình Kiểm lâm xác nhận nguồn gốc lâm sản'],
        preventiveAction: 'Hoàn tất thủ tục kiểm lâm trước khi vận chuyển gỗ về nhà máy Phú Tài.'
      }
    ],
    exampleData: { description: 'Gỗ keo lá tràm thu mua của nông dân Ia Grai', bookQty: '50', physicalQty: '50', unit: 'Ster', price: '45.000.000' }
  },
  {
    id: 'S23',
    title: 'Nợ khó đòi công trình kéo dài hoặc tranh chấp khối lượng quyết toán',
    category: 'payment_ar',
    applicablePillars: ['construction'],
    summary: 'Công nợ phải thu công trình xây lắp tồn đọng nhiều năm không thu được, trích lập dự phòng nhưng thiếu hồ sơ pháp lý.',
    differenceComparison: 'Hạn nợ gốc từng khoản, biên bản đối chiếu công nợ, công văn đòi nợ, hồ sơ kiện tụng và điều kiện trích lập theo TT 48/2019.',
    dossierChecklist: ['Biên bản đối chiếu công nợ hàng năm', 'Công văn đôn đốc thu hồi nợ gửi qua bưu điện', 'Trích lục phán quyết của Tòa án hoặc Trọng tài'],
    questions: [
      {
        id: 'q1',
        text: 'Hồ sơ trích lập dự phòng nợ phải thu khó đòi có đầy đủ chứng cứ theo Thông tư 48/2019 không?',
        options: [
          { value: 'fully_documented', label: 'Có đủ đối chiếu công nợ, văn bản đòi nợ có dấu bưu điện và quá hạn > 6 tháng', branch: 'explained', actionGuide: 'Xuất trình hồ sơ trích lập dự phòng chi tiết cho từng đối tượng khách hàng.' },
          { value: 'missing_reconciliation', label: 'Không có biên bản đối chiếu công nợ hoặc khách hàng không chịu ký', branch: 'correction', actionGuide: 'Bổ sung các thư từ đòi nợ, hóa đơn bưu điện chứng minh nợ không liên lạc được.' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Trích lập dự phòng đủ điều kiện chi phí được trừ thuế TNDN',
        description: 'Tuân thủ đúng tỷ lệ: quá hạn từ 6 tháng đến dưới 1 năm trích 30%, 1-2 năm trích 50%, 2-3 năm trích 70%, từ 3 năm trích 100%.',
        requiredDossiers: ['Bảng tính trích lập dự phòng nợ phải thu khó đòi', 'Hồ sơ chứng minh nợ quá hạn'],
        preventiveAction: 'Thực hiện đối chiếu công nợ 100% khách hàng tại thời điểm 31/12 hàng năm.'
      },
      {
        branchId: 'correction',
        title: 'Trích lập dự phòng thiếu chứng cứ pháp lý bị loại chi phí',
        description: 'Chỉ theo dõi trên sổ sách mà không có tài liệu đòi nợ sẽ bị đoàn thanh tra gạt bỏ khoản dự phòng.',
        requiredDossiers: ['Hồ sơ hoàn nhập dự phòng nợ khó đòi'],
        accountingAdjustment: 'Hoàn nhập dự phòng TK 2293 vào chi phí hoặc thu nhập khác.',
        preventiveAction: 'Lập quy trình thu hồi công nợ pháp lý chặt chẽ gửi thư khuyến cáo trước 30 ngày.'
      },
      {
        branchId: 'missing_data',
        title: 'Khách hàng đang trong quá trình phá sản giải thể',
        description: 'Chưa thu thập được thông báo của Tòa án thụ lý đơn yêu cầu mở thủ tục phá sản.',
        requiredDossiers: ['Thông báo của Tòa án hoặc quyết định tuyên bố phá sản'],
        preventiveAction: 'Theo dõi cổng thông tin quốc gia về đăng ký doanh nghiệp để cập nhật trạng thái khách hàng.'
      }
    ],
    exampleData: { description: 'Nợ khó đòi Công ty Xây dựng Cầu đường Tây Nguyên', bookQty: '1', physicalQty: '1', unit: 'Hợp đồng', price: '420.000.000' }
  },
  {
    id: 'S24',
    title: 'Chi phí quản lý, máy thi công và giao dịch với các bên liên quan',
    category: 'wip_cost',
    applicablePillars: ['all'],
    summary: 'Chi phí thuê xe máy, mượn tiền, bảo lãnh hoặc giao dịch mua bán giữa Công ty Kiểu Việt với các pháp nhân/cá nhân có quan hệ liên kết.',
    differenceComparison: 'Xác định quan hệ liên kết theo NĐ 132/2020, trần lãi vay 30% EBITDA, phương pháp định giá chuyển nhượng và tính hợp lý của chi phí.',
    dossierChecklist: ['Phụ lục thông tin giao dịch liên kết theo NĐ 132', 'Hợp đồng vay mượn / thuê tài sản', 'Bảng tính trần chi phí lãi vay EBITDA'],
    questions: [
      {
        id: 'q1',
        text: 'Doanh nghiệp có quan hệ liên kết và chi phí lãi vay trong kỳ có vượt trần 30% EBITDA không?',
        options: [
          { value: 'under_cap', label: 'Có giao dịch liên kết nhưng lãi vay dưới 30% EBITDA hoặc không có quan hệ liên kết', branch: 'explained', actionGuide: 'Xuất trình phụ lục giao dịch liên kết và bảng tính toán EBITDA chi tiết.' },
          { value: 'over_cap', label: 'Chi phí lãi vay thuần vượt 30% EBITDA', branch: 'correction', actionGuide: 'Loại phần chi phí lãi vay vượt trần khi quyết toán thuế TNDN và theo dõi chuyển kỳ sau (tối đa 5 năm).' }
        ]
      }
    ],
    branches: [
      {
        branchId: 'explained',
        title: 'Chi phí phát sinh thực tế phục vụ SXKD và tuân thủ trần EBITDA',
        description: 'Đáp ứng nguyên tắc giao dịch độc lập và đầy đủ hồ sơ kê khai theo Nghị định 132/2020/NĐ-CP.',
        requiredDossiers: ['Hồ sơ quốc gia / Báo cáo giao dịch liên kết', 'Hợp đồng và chứng từ thanh toán ngân hàng'],
        preventiveAction: 'Ước tính EBITDA hàng quý để điều chỉnh hạn mức vay mượn an toàn.'
      },
      {
        branchId: 'correction',
        title: 'Loại trừ chi phí lãi vay vượt trần 30% EBITDA',
        description: 'Phần chi phí lãi vay không được trừ được chuyển sang kỳ tính thuế tiếp theo không quá 5 năm.',
        requiredDossiers: ['Phụ lục theo dõi chi phí lãi vay chuyển kỳ sau'],
        accountingAdjustment: 'Kê khai chỉ tiêu B4 trên Tờ khai 03/TNDN đối với số lãi vay vượt mức.',
        preventiveAction: 'Tối ưu hóa cấu trúc vốn chủ sở hữu và hạn chế vay mượn từ các bên liên kết.'
      },
      {
        branchId: 'missing_data',
        title: 'Thiếu hồ sơ chứng minh giá trị giao dịch theo giá thị trường',
        description: 'Thuê xe máy cơ giới từ cá nhân người nhà Giám đốc với giá cao hơn giá thuê ngoài thị trường.',
        requiredDossiers: ['Báo giá tham chiếu của ít nhất 02 đơn vị cho thuê độc lập tại Gia Lai'],
        preventiveAction: 'Thuê tài sản từ bên liên kết phải có chứng thư thẩm định giá độc lập.'
      }
    ],
    exampleData: { description: 'Hợp đồng thuê dàn máy đào từ cổ đông sáng lập', bookQty: '1', physicalQty: '1', unit: 'Năm', price: '360.000.000' }
  }
];
