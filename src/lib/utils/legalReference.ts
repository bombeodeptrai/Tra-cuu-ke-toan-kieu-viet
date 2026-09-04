// Utility trích xuất và điều hướng trực tiếp tới Điều văn bản chính thức

export interface ArticleCitation {
  decreeId: string;
  articleNum: string;
  label: string;
  docTitle?: string;
}

// Bảng ánh xạ số hiệu/tên văn bản sang ID trong cơ sở dữ liệu 55 văn bản
export const DOC_CODE_TO_ID: Record<string, { id: string; shortName: string }> = {
  '99/2025': { id: 'tt-99-2025', shortName: 'Thông tư 99/2025/TT-BTC' },
  'tt 99': { id: 'tt-99-2025', shortName: 'Thông tư 99/2025/TT-BTC' },
  '200/2014': { id: 'tt-200-2014', shortName: 'Thông tư 200/2014/TT-BTC' },
  'tt 200': { id: 'tt-200-2014', shortName: 'Thông tư 200/2014/TT-BTC' },
  '133/2016': { id: 'tt-133-2016', shortName: 'Thông tư 133/2016/TT-BTC' },
  'tt 133': { id: 'tt-133-2016', shortName: 'Thông tư 133/2016/TT-BTC' },
  '46/2025': { id: 'tt-46-2025', shortName: 'Thông tư 46/2025/TT-BTC' },
  '24/2024': { id: 'tt-24-2024-tt-btc', shortName: 'Thông tư 24/2024/TT-BTC' },
  '108/2025': { id: 'tt-108-2025', shortName: 'Thông tư 108/2025/TT-BTC' },
  '88/2015': { id: 'luat-ke-toan-2015', shortName: 'Luật Kế toán 88/2015/QH13' },
  '56/2024': { id: 'luat-56-2024', shortName: 'Luật sửa đổi 56/2024/QH15' },
  '174/2016': { id: 'nd-174-2016', shortName: 'Nghị định 174/2016/NĐ-CP' },
  '41/2018': { id: 'nd-41-2018', shortName: 'Nghị định 41/2018/NĐ-CP' },
  'vas 01': { id: 'vas-01', shortName: 'Chuẩn mực VAS 01' },
  'vas 02': { id: 'vas-02', shortName: 'Chuẩn mực VAS 02' },
  'vas 14': { id: 'vas-14', shortName: 'Chuẩn mực VAS 14' },
  '67/2025': { id: 'luat-67-2025-tndn', shortName: 'Luật Thuế TNDN 67/2025/QH15' },
  '14/2008': { id: 'luat-thue-tndn', shortName: 'Luật Thuế TNDN 14/2008/QH12' },
  '218/2013': { id: 'nd-218-2013', shortName: 'Nghị định 218/2013/NĐ-CP' },
  '96/2015': { id: 'tt-96-2015', shortName: 'Thông tư 96/2015/TT-BTC' },
  '132/2020': { id: 'nd-132-2020', shortName: 'Nghị định 132/2020/NĐ-CP' },
  '13/2008': { id: 'luat-thue-gtgt', shortName: 'Luật Thuế GTGT 13/2008/QH12' },
  '219/2013': { id: 'tt-219-2013', shortName: 'Thông tư 219/2013/TT-BTC' },
  '180/2024': { id: 'nd-180-2024-nd-cp', shortName: 'Nghị định 180/2024/NĐ-CP' },
  '15/2022': { id: 'nd-15-2022', shortName: 'Nghị định 15/2022/NĐ-CP' },
  '64/2024': { id: 'nd-64-2024', shortName: 'Nghị định 64/2024/NĐ-CP' },
  '123/2020': { id: 'nd-123-2020', shortName: 'Nghị định 123/2020/NĐ-CP' },
  '78/2021': { id: 'tt-78-2021', shortName: 'Thông tư 78/2021/TT-BTC' },
  '70/2025': { id: 'nd-70-2025', shortName: 'Nghị định 70/2025/NĐ-CP' },
  '125/2020': { id: 'nd-125-2020', shortName: 'Nghị định 125/2020/NĐ-CP' },
  '38/2019': { id: 'luat-quan-ly-thue-2019', shortName: 'Luật Quản lý thuế 38/2019/QH14' },
  '126/2020': { id: 'nd-126-2020', shortName: 'Nghị định 126/2020/NĐ-CP' },
  '80/2021': { id: 'tt-80-2021', shortName: 'Thông tư 80/2021/TT-BTC' },
  '109/2025': { id: 'luat-109-2025-tncn', shortName: 'Luật Thuế TNCN 109/2025/QH15' },
  '111/2013': { id: 'tt-111-2013', shortName: 'Thông tư 111/2013/TT-BTC' },
  '293/2025': { id: 'nd-293-2025', shortName: 'Nghị định 293/2025/NĐ-CP' },
  '45/2019': { id: 'blld-45-2019', shortName: 'Bộ luật Lao động 45/2019/QH14' },
  '73/2024': { id: 'nd-73-2024', shortName: 'Nghị định 73/2024/NĐ-CP' },
  '145/2020': { id: 'nd-145-2020', shortName: 'Nghị định 145/2020/NĐ-CP' },
  '12/2022': { id: 'nd-12-2022', shortName: 'Nghị định 12/2022/NĐ-CP' },
  '41/2024': { id: 'luat-41-2024', shortName: 'Luật Bảo hiểm xã hội 41/2024/QH15' },
  '595/2017': { id: 'qd-595-2017-bhxh', shortName: 'Quyết định 595/QĐ-BHXH' },
  '37/2015': { id: 'nd-37-2015', shortName: 'Nghị định 37/2015/NĐ-CP' },
  '50/2021': { id: 'nd-50-2021', shortName: 'Nghị định 50/2021/NĐ-CP' },
  '10/2021': { id: 'nd-10-2021', shortName: 'Nghị định 10/2021/NĐ-CP' },
  '54/2024': { id: 'luat-54-2024-khoangsan', shortName: 'Luật Địa chất & Khoáng sản 54/2024' },
  '193/2025': { id: 'nd-193-2025-khoangsan', shortName: 'Nghị định 193/2025/NĐ-CP' },
  '87/2025': { id: 'qd-87-2025-gialai', shortName: 'Quyết định 87/2025/QĐ-UBND Gia Lai' },
  '27/2023': { id: 'nd-27-2023', shortName: 'Nghị định 27/2023/NĐ-CP' },
  '152/2015': { id: 'tt-152-2015', shortName: 'Thông tư 152/2015/TT-BTC' },
  '67/2019': { id: 'nd-67-2019', shortName: 'Nghị định 67/2019/NĐ-CP' },
  '44/2017': { id: 'tt-44-2017', shortName: 'Thông tư 44/2017/TT-BTC' },
  '45/2013': { id: 'tt-45-2013', shortName: 'Thông tư 45/2013/TT-BTC' },
  '48/2019': { id: 'tt-48-2019', shortName: 'Thông tư 48/2019/TT-BTC' },
  '139/2016': { id: 'nd-139-2016', shortName: 'Nghị định 139/2016/NĐ-CP' },
  '22/2020': { id: 'nd-22-2020', shortName: 'Nghị định 22/2020/NĐ-CP' },
  '20/2023': { id: 'luat-gd-dien-tu-20-2023', shortName: 'Luật Giao dịch điện tử 20/2023' },
  '107/2016': { id: 'luat-thue-xnk-107-2016', shortName: 'Luật Thuế XNK 107/2016/QH13' },
};

/**
 * Trích xuất Điều và số hiệu văn bản từ đoạn văn bản quy định
 */
export function extractCitation(text: string, defaultDecreeId: string): ArticleCitation | null {
  if (!text) return null;

  // 1. Tìm số Điều: "Điều 28", "Điều 86-90", "Điều 4", "Điều 12, Điều 13"
  const dieuMatch = text.match(/Điều\s+(\d+)/i);
  if (!dieuMatch) return null;

  const articleNum = dieuMatch[1];
  let targetId = defaultDecreeId;
  let docTitle = '';

  // 2. Tìm xem có nhắc đến số hiệu văn bản nào khác trong câu căn cứ không
  const lower = text.toLowerCase();
  for (const [code, info] of Object.entries(DOC_CODE_TO_ID)) {
    if (lower.includes(code)) {
      targetId = info.id;
      docTitle = info.shortName;
      break;
    }
  }

  return {
    decreeId: targetId,
    articleNum,
    label: `Điều ${articleNum}`,
    docTitle: docTitle || undefined
  };
}

/**
 * Tự động tạo ví dụ minh họa số liệu thực tế chuyên sâu (bút toán Nợ/Có, bài toán tính thuế hoặc tình huống thực tế)
 * phù hợp đặc thù xây dựng, mỏ, kế toán tại Kiểu Việt
 */
export function getDetailedPracticalExample(topic: string, newRule: string, oldRule: string): string {
  const t = topic.toLowerCase();
  const n = newRule.toLowerCase();

  if (t.includes('154') || t.includes('621') || t.includes('chi phí thi công')) {
    return '📌 Ví dụ thực tế: Kiểu Việt xuất kho 250 triệu đá 1x2 và 120 triệu tiền dầu diesel thi công rải đường gói thầu Quốc lộ 14. ' +
      'Kế toán định khoản thẳng: Nợ TK 1541 (Chi phí NVL trực tiếp): 370 triệu / Có TK 152: 370 triệu. ' +
      'Không còn phải ghi Nợ 621 rồi cuối tháng lập bảng kết chuyển 621 sang 154 như trước đây.';
  }

  if (t.includes('142') || t.includes('242') || t.includes('chi phí trả trước')) {
    return '📌 Ví dụ thực tế: Kiểu Việt thanh toán 60 triệu tiền thuê mặt bằng kho bãi lán trại cho 6 tháng (từ 01/01 đến 30/06). ' +
      'Kế toán hạch toán thẳng vào TK 242 (Nợ TK 242: 60 triệu / Có TK 112: 60 triệu). ' +
      'Mỗi tháng phân bổ: Nợ TK 1547 (hoặc 642): 10 triệu / Có TK 242: 10 triệu. Xóa bỏ hoàn toàn thao tác mở TK 142.';
  }

  if (t.includes('521') || t.includes('giảm trừ doanh thu') || t.includes('chiết khấu')) {
    return '📌 Ví dụ thực tế: Xuất hóa đơn công trình 1,1 tỷ (thuế 10%). Sau nghiệm thu kiểm định lại giảm trừ 50 triệu giá trị xây lắp. ' +
      'Kế toán hạch toán giảm trừ doanh thu trực tiếp: Nợ TK 511: 50 triệu, Nợ TK 3331: 5 triệu / Có TK 131: 55 triệu. ' +
      'Doanh thu thuần hiển thị ngay 1,05 tỷ, không phải mở tài khoản trung gian 521.';
  }

  if (t.includes('mẫu 04/ss') || t.includes('hóa đơn sai sót') || t.includes('123/2020') || t.includes('78/2021')) {
    return '📌 Ví dụ thực tế: Hóa đơn điện tử số 000125 ngày 15/03 xuất cho Ban QLDA sai đơn giá từ 250.000đ thành 270.000đ (chênh lệch 20.000đ/m3 trên 5.000m3 = 100 triệu). ' +
      'Kế toán lập Hóa đơn điện tử điều chỉnh giảm: ghi rõ "Điều chỉnh giảm đơn giá tại HĐ số 000125 ngày 15/03", nộp Mẫu 04/SS lên Cục Thuế. ' +
      'Hạch toán: Nợ TK 511: -100 triệu, Nợ TK 3331: -10 triệu / Có TK 131: -110 triệu.';
  }

  if (t.includes('giảm trừ gia cảnh') || t.includes('109/2025') || t.includes('thuế tncn')) {
    return '📌 Ví dụ thực tế: Kỹ sư chỉ huy trưởng công trường Kiểu Việt có lương 28 triệu/tháng và nuôi 2 con nhỏ. ' +
      'Theo mức mới: Giảm trừ bản thân 15,5 triệu + 2 người phụ thuộc (6,2 x 2 = 12,4 triệu) = 27,9 triệu. ' +
      'Thu nhập tính thuế chỉ còn 100.000đ/tháng (thuế TNCN nộp chỉ 5.000đ/tháng so với trước đây phải nộp hơn 750.000đ/tháng).';
  }

  if (t.includes('lương tối thiểu') || t.includes('293/2025') || t.includes('vùng')) {
    return '📌 Ví dụ thực tế: Công nhân lái máy xúc tại Gia Lai (Vùng III) có lương cơ bản hợp đồng cũ là 3.860.000đ/tháng. ' +
      'Theo quy định mới, mức sàn Vùng III tăng lên 4.140.000đ/tháng. Doanh nghiệp phải lập phụ lục hợp đồng lao động điều chỉnh tăng lương cơ bản thêm tối thiểu 280.000đ/người để bảo đảm đúng trần pháp luật.';
  }

  if (t.includes('khấu hao') || t.includes('45/2013') || t.includes('tscđ') || t.includes('máy')) {
    return '📌 Ví dụ thực tế: Kiểu Việt đầu tư máy đào Komatsu PC350 mới nguyên chiếc trị giá 3,6 tỷ đồng. ' +
      'Căn cứ khung Thông tư 45/2013 (Khung máy thi công 6 - 10 năm), doanh nghiệp đăng ký trích khấu hao 6 năm (72 tháng). ' +
      'Mức trích hàng tháng: 3,6 tỷ / 72 = 50 triệu/tháng. ' +
      'Hạch toán: Nợ TK 1543 (Chi phí máy thi công): 50 triệu / Có TK 2141: 50 triệu.';
  }

  if (t.includes('tài nguyên') || t.includes('gia lai') || t.includes('87/2025') || t.includes('đá') || t.includes('cát')) {
    return '📌 Ví dụ thực tế: Mỏ đá Chư Sê của Kiểu Việt khai thác và tiêu thụ 10.000m3 đá nguyên khai trong tháng. ' +
      'Giá tính thuế tài nguyên theo QĐ 87 Gia Lai là 140.000đ/m3, thuế suất đá xây dựng là 10%. ' +
      'Thuế tài nguyên phải nộp = 10.000 x 140.000 x 10% = 140 triệu đồng. ' +
      'Hạch toán: Nợ TK 154 (hoặc 632): 140 triệu / Có TK 3336: 140 triệu.';
  }

  if (t.includes('lãi vay') || t.includes('132/2020') || t.includes('liên kết') || t.includes('30%')) {
    return '📌 Ví dụ thực tế: Kiểu Việt vay vốn từ công ty liên kết, tổng chi phí lãi vay trong năm là 15 tỷ đồng. Lợi nhuận thuần trước thuế là 20 tỷ, khấu hao 15 tỷ -> EBITDA = 50 tỷ. ' +
      'Trần lãi vay 30% EBITDA = 15 tỷ. Như vậy toàn bộ 15 tỷ lãi vay được tính vào chi phí hợp lý được trừ khi quyết toán thuế TNDN.';
  }

  if (t.includes('tạm nộp') || t.includes('126/2020') || t.includes('80%')) {
    return '📌 Ví dụ thực tế: Ước tính cả năm tài chính tổng thuế TNDN phải nộp là 2 tỷ đồng. ' +
      'Hạn chót ngày 30/01 năm sau (hạn nộp quý 4), Kiểu Việt phải tạm nộp lũy kế tối thiểu 80% = 1,6 tỷ đồng. ' +
      'Nếu mới nộp 1,4 tỷ (thiếu 200 triệu), số tiền 200 triệu thiếu sẽ bị tính tiền chậm nộp 0,03%/ngày từ ngày 31/01 đến ngày nộp đủ.';
  }

  if (t.includes('hợp đồng') || t.includes('tạm ứng') || t.includes('37/2015') || t.includes('50/2021')) {
    return '📌 Ví dụ thực tế: Hợp đồng thi công đường bê tông giá trị 20 tỷ đồng. ' +
      'Mức tạm ứng tối đa được giải ngân là 50% = 10 tỷ đồng kèm bảo lãnh ngân hàng. Chủ đầu tư có nghĩa vụ giải ngân thanh toán trong vòng 14 ngày làm việc kể từ ngày nhận đủ hồ sơ nghiệm thu giai đoạn.';
  }

  // Mẫu ví dụ chuẩn chuyên sâu tự động hóa theo ngữ cảnh
  return '📌 Tình huống thực tế & Hướng dẫn hạch toán: Doanh nghiệp áp dụng trực tiếp quy định mới vào chứng từ phát sinh thực tế. ' +
    'Kế toán rà soát hợp đồng kinh tế, đối chiếu điều khoản thỏa thuận và lập bút toán hạch toán đúng tài khoản quy định, ' +
    'lưu giữ đầy đủ hồ sơ biên bản nghiệm thu hoặc chứng từ thanh toán ngân hàng để bảo vệ chi phí khi quyết toán thuế.';
}
