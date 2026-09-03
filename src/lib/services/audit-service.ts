import { Decree } from '@/types/decree';

export interface AuditResult {
  detectedNumber: string;
  docType: string;
  isExisting: boolean;
  existingDecree?: {
    id: string;
    title: string;
    number: string;
    status: string;
  };
  isRelevant: boolean;
  relevantField: string;
  recommendation: 'APPROVE' | 'REJECT' | 'REVIEW';
  summary: string;
  confidence: number;
}

export function auditUserFeedback(
  title: string,
  description: string,
  decrees: Decree[]
): AuditResult {
  const combinedText = `${title} ${description}`.trim();
  const lowerText = combinedText.toLowerCase();

  // 1. Detect document number
  const numberRegex = /(\d+[\/\-]\d{4}[\/\-][A-ZĐa-zđ0-9\-]+)/i;
  const numberMatch = combinedText.match(numberRegex);
  const detectedNumber = numberMatch ? numberMatch[1].toUpperCase() : '';

  // 2. Detect doc type
  let docType = 'Chưa xác định';
  if (/nghị\s*định|nđ[\-\s]*cp/i.test(combinedText)) {
    docType = 'Nghị định Chính phủ';
  } else if (/thông\s*tư|tt[\-\s]*btc/i.test(combinedText)) {
    docType = 'Thông tư';
  } else if (/bộ\s*luật/i.test(combinedText)) {
    docType = 'Bộ luật';
  } else if (/luật/i.test(combinedText)) {
    docType = 'Luật Quốc hội';
  } else if (/quyết\s*định|qđ/i.test(combinedText)) {
    docType = 'Quyết định';
  }

  // 3. Cross-check against current database
  let existingMatch: Decree | undefined;

  if (detectedNumber) {
    const cleanNum = detectedNumber.replace(/[\s\-\/]/g, '').toLowerCase();
    existingMatch = decrees.find((d) => {
      const dNum = ((d as any).number || d.decree_number || '').replace(/[\s\-\/]/g, '').toLowerCase();
      const dId = d.id.replace(/[\s\-\/]/g, '').toLowerCase();
      return (dNum && dNum === cleanNum) || (dId && dId.includes(cleanNum));
    });
  }

  if (!existingMatch && title.length > 5) {
    const cleanTitle = title.toLowerCase();
    existingMatch = decrees.find((d) => {
      const dt = d.title.toLowerCase();
      return dt.includes(cleanTitle) || cleanTitle.includes(dt);
    });
  }

  // 4. Relevance check for accounting/tax
  const accountingKeywords = [
    'thuế', 'kế toán', 'hóa đơn', 'chứng từ', 'doanh nghiệp', 'tiền lương',
    'bảo hiểm', 'lao động', 'bhxh', 'lệ phí', 'môn bài', 'tndn', 'gtgt',
    'tncn', 'xnk', 'chi phí', 'doanh thu', 'báo cáo tài chính', 'giao dịch điện tử',
    'tài chính', 'kiểm toán', 'khấu hao', 'tài sản'
  ];

  const matchedKeywords = accountingKeywords.filter((kw) => lowerText.includes(kw));
  const isRelevant = matchedKeywords.length > 0 || /123|132|126|125|219|78|99|200|133/i.test(combinedText);

  let relevantField = 'Kế toán - Thuế';
  if (/lao động|tiền lương|bhxh|bảo hiểm/.test(lowerText)) {
    relevantField = 'Nhân sự - Tiền lương & BHXH';
  } else if (/hóa đơn|chứng từ/.test(lowerText)) {
    relevantField = 'Hóa đơn - Chứng từ';
  } else if (/thuế|gtgt|tndn|tncn|môn bài/.test(lowerText)) {
    relevantField = 'Chính sách Thuế & Lệ phí';
  } else if (/kế toán|tài khoản|chuẩn mực/.test(lowerText)) {
    relevantField = 'Chế độ Kế toán Doanh nghiệp';
  }

  // 5. Determine recommendation
  if (existingMatch) {
    const matchedNumber = existingMatch.decree_number || (existingMatch as any).number || '';
    return {
      detectedNumber: detectedNumber || matchedNumber,
      docType: docType !== 'Chưa xác định' ? docType : 'Văn bản pháp luật',
      isExisting: true,
      existingDecree: {
        id: existingMatch.id,
        title: existingMatch.title,
        number: matchedNumber || existingMatch.id,
        status: existingMatch.status === 'active' ? 'Đang có hiệu lực' : 'Đã sửa đổi/Hết hiệu lực',
      },
      isRelevant: true,
      relevantField,
      recommendation: 'REJECT',
      summary: `Văn bản ĐÃ TỒN TẠI trong cơ sở dữ liệu Kiểu Việt (ID: ${existingMatch.id} - ${existingMatch.title}). Đề xuất TỪ CHỐI để tránh trùng lặp.`,
      confidence: 0.98,
    };
  }

  if (detectedNumber && isRelevant) {
    return {
      detectedNumber,
      docType,
      isExisting: false,
      isRelevant: true,
      relevantField,
      recommendation: 'APPROVE',
      summary: `Văn bản CHƯA CÓ trong CSDL Kiểu Việt. Số hiệu ${detectedNumber} hợp lệ và thuộc chuyên môn ${relevantField}. Đề xuất DUYỆT BỔ SUNG.`,
      confidence: 0.92,
    };
  }

  if (isRelevant) {
    return {
      detectedNumber: detectedNumber || 'Chưa rõ số hiệu',
      docType,
      isExisting: false,
      isRelevant: true,
      relevantField,
      recommendation: 'REVIEW',
      summary: `Chưa trích xuất được số hiệu chuẩn (ví dụ 123/2020/NĐ-CP). Nội dung có liên quan đến ${relevantField}. Đề xuất Admin XEM XÉT thủ công.`,
      confidence: 0.65,
    };
  }

  return {
    detectedNumber: detectedNumber || 'Không có',
    docType,
    isExisting: false,
    isRelevant: false,
    relevantField: 'Ngoài phạm vi kế toán',
    recommendation: 'REJECT',
    summary: 'Nội dung phản ánh không thuộc phạm vi tra cứu Kế toán - Thuế - Lao động hoặc định dạng không hợp lệ.',
    confidence: 0.8,
  };
}
