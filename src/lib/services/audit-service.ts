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

// Từ điển ánh xạ văn phong nói / tên thông thường sang văn bản cốt lõi
const CASUAL_TOPIC_MAP: Array<{
  patterns: RegExp[];
  matchedDocId: string;
  suggestedNumber: string;
  docType: string;
  field: string;
}> = [
  {
    patterns: [/hóa\s*đơn\s*(điện\s*tử)?/i, /nghị\s*định\s*123/i, /nđ\s*123/i, /hủy\s*hóa\s*đơn/i],
    matchedDocId: 'nd-123-2020',
    suggestedNumber: '123/2020/NĐ-CP',
    docType: 'Nghị định Chính phủ',
    field: 'Hóa đơn - Chứng từ'
  },
  {
    patterns: [/thông\s*tư\s*78/i, /tt\s*78/i, /hướng\s*dẫn\s*hóa\s*đơn/i],
    matchedDocId: 'tt-78-2021',
    suggestedNumber: '78/2021/TT-BTC',
    docType: 'Thông tư',
    field: 'Hóa đơn - Chứng từ'
  },
  {
    patterns: [/giao\s*dịch\s*liên\s*kết/i, /nghị\s*định\s*132/i, /nđ\s*132/i, /chuyển\s*giá/i],
    matchedDocId: 'nd-132-2020',
    suggestedNumber: '132/2020/NĐ-CP',
    docType: 'Nghị định Chính phủ',
    field: 'Chính sách Thuế & Quản lý giá'
  },
  {
    patterns: [/lệ\s*phí\s*môn\s*bài/i, /thuế\s*môn\s*bài/i, /nghị\s*định\s*139/i, /nđ\s*139/i],
    matchedDocId: 'nd-139-2016',
    suggestedNumber: '139/2016/NĐ-CP',
    docType: 'Nghị định Chính phủ',
    field: 'Chính sách Thuế & Lệ phí'
  },
  {
    patterns: [/sửa\s*(đổi)?\s*môn\s*bài/i, /miễn\s*môn\s*bài/i, /nghị\s*định\s*22/i, /nđ\s*22/i],
    matchedDocId: 'nd-22-2020',
    suggestedNumber: '22/2020/NĐ-CP',
    docType: 'Nghị định Chính phủ',
    field: 'Chính sách Thuế & Lệ phí'
  },
  {
    patterns: [/quản\s*lý\s*thuế/i, /luật\s*quản\s*lý\s*thuế/i, /luật\s*38/i],
    matchedDocId: 'luat-quan-ly-thue-2019',
    suggestedNumber: '38/2019/QH14',
    docType: 'Luật Quốc hội',
    field: 'Quản lý thuế'
  },
  {
    patterns: [/thuế\s*(giá\s*trị\s*gia\s*tăng|gtgt)/i, /luật\s*gtgt/i],
    matchedDocId: 'luat-thue-gtgt',
    suggestedNumber: '13/2008/QH12',
    docType: 'Luật Quốc hội',
    field: 'Chính sách Thuế & Lệ phí'
  },
  {
    patterns: [/thuế\s*thu\s*nhập\s*doanh\s*nghiệp/i, /thuế\s*tndn/i, /luật\s*tndn/i, /luật\s*14/i],
    matchedDocId: 'luat-thue-tndn',
    suggestedNumber: '14/2008/QH12',
    docType: 'Luật Quốc hội',
    field: 'Chính sách Thuế & Lệ phí'
  },
  {
    patterns: [/hệ\s*thống\s*tài\s*khoản(\s*mới)?/i, /thông\s*tư\s*99/i, /tt\s*99/i, /tt99/i],
    matchedDocId: 'tt-99-2025',
    suggestedNumber: '99/2025/TT-BTC',
    docType: 'Thông tư',
    field: 'Chế độ Kế toán Doanh nghiệp'
  },
  {
    patterns: [/thông\s*tư\s*200/i, /tt\s*200/i, /tt200/i, /chế\s*độ\s*kế\s*toán\s*200/i],
    matchedDocId: 'tt-200-2014',
    suggestedNumber: '200/2014/TT-BTC',
    docType: 'Thông tư',
    field: 'Chế độ Kế toán Doanh nghiệp'
  },
  {
    patterns: [/bộ\s*luật\s*lao\s*động/i, /hợp\s*đồng\s*lao\s*động/i, /luật\s*lao\s*động\s*45/i],
    matchedDocId: 'blld-45-2019',
    suggestedNumber: '45/2019/QH14',
    docType: 'Bộ luật',
    field: 'Nhân sự - Tiền lương & BHXH'
  },
  {
    patterns: [/bảo\s*hiểm\s*xã\s*hội/i, /luật\s*bhxh(\s*2024|\s*mới)?/i, /luật\s*41/i],
    matchedDocId: 'luat-bhxh-41-2024',
    suggestedNumber: '41/2024/QH15',
    docType: 'Luật Quốc hội',
    field: 'Nhân sự - Tiền lương & BHXH'
  },
  {
    patterns: [/lương\s*cơ\s*sở/i, /nghị\s*định\s*73/i, /nđ\s*73/i, /2\.34/i],
    matchedDocId: 'nd-73-2024',
    suggestedNumber: '73/2024/NĐ-CP',
    docType: 'Nghị định Chính phủ',
    field: 'Nhân sự - Tiền lương & BHXH'
  },
  {
    patterns: [/lương\s*tối\s*thiểu\s*vùng/i, /nghị\s*định\s*74/i, /nđ\s*74/i],
    matchedDocId: 'nd-74-2024',
    suggestedNumber: '74/2024/NĐ-CP',
    docType: 'Nghị định Chính phủ',
    field: 'Nhân sự - Tiền lương & BHXH'
  },
  {
    patterns: [/thuế\s*(xuất\s*nhập\s*khẩu|xnk)/i, /luật\s*107/i],
    matchedDocId: 'luat-thue-xnk-107-2016',
    suggestedNumber: '107/2016/QH13',
    docType: 'Luật Quốc hội',
    field: 'Chính sách Thuế & Lệ phí'
  },
  {
    patterns: [/giao\s*dịch\s*điện\s*tử/i, /chữ\s*ký\s*số/i, /luật\s*20/i],
    matchedDocId: 'luat-gd-dien-tu-20-2023',
    suggestedNumber: '20/2023/QH15',
    docType: 'Luật Quốc hội',
    field: 'Doanh nghiệp & Số hóa'
  }
];

export function auditUserFeedback(
  title: string,
  description: string,
  decrees: Decree[]
): AuditResult {
  const combinedText = `${title} ${description}`.trim();
  const lowerText = combinedText.toLowerCase();

  // 1. NHẬN DIỆN VĂN BẢN THEO CHUẨN FORM HOẶC VĂN PHONG NÓI THÔNG THƯỜNG
  let detectedNumber = '';
  let docType = 'Chưa xác định';
  let relevantField = 'Kế toán - Thuế';
  let existingMatch: Decree | undefined;

  // 1.1 Thử regex chuẩn: e.g. 123/2020/NĐ-CP, 78/2021/TT-BTC
  const standardNumberRegex = /(\d+[\/\-]\d{4}[\/\-][A-ZĐa-zđ0-9\-]+)/i;
  const standardMatch = combinedText.match(standardNumberRegex);
  if (standardMatch) {
    detectedNumber = standardMatch[1].toUpperCase();
  }

  // 1.2 Thử regex văn phong nói viết tắt: "NĐ 123", "TT 78", "Luật 38", "Nghị định 132"
  if (!detectedNumber) {
    const casualMatch = combinedText.match(/(?:nghị\s*định|nđ|thông\s*tư|tt|luật|quyết\s*định|qđ)\s*(\d+)/i);
    if (casualMatch) {
      const num = casualMatch[1];
      // Tìm trong CSDL các văn bản có số bắt đầu bằng num
      const foundInDb = decrees.find((d) => {
        const dNum = ((d as any).number || d.decree_number || '').toLowerCase();
        const dId = d.id.toLowerCase();
        return dNum.startsWith(`${num}/`) || dId.includes(`-${num}-`) || dId.endsWith(`-${num}`);
      });
      if (foundInDb) {
        existingMatch = foundInDb;
        detectedNumber = foundInDb.decree_number || (foundInDb as any).number || num;
      } else {
        detectedNumber = `Số ${num}`;
      }
    }
  }

  // 1.3 Thử đối soát theo Từ điển Ngữ cảnh Đời thường (Casual Topic Map)
  if (!existingMatch) {
    for (const topic of CASUAL_TOPIC_MAP) {
      const isMatch = topic.patterns.some((p) => p.test(combinedText));
      if (isMatch) {
        const found = decrees.find((d) => d.id === topic.matchedDocId);
        if (found) {
          existingMatch = found;
          detectedNumber = found.decree_number || (found as any).number || topic.suggestedNumber;
          docType = topic.docType;
          relevantField = topic.field;
          break;
        } else if (!detectedNumber) {
          detectedNumber = topic.suggestedNumber;
          docType = topic.docType;
          relevantField = topic.field;
        }
      }
    }
  }

  // 2. Nhận diện loại văn bản (nếu chưa có)
  if (docType === 'Chưa xác định') {
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
  }

  // 3. Đối soát nếu có số hiệu cụ thể
  if (!existingMatch && detectedNumber) {
    const cleanNum = detectedNumber.replace(/[\s\-\/]/g, '').toLowerCase();
    existingMatch = decrees.find((d) => {
      const dNum = ((d as any).number || d.decree_number || '').replace(/[\s\-\/]/g, '').toLowerCase();
      const dId = d.id.replace(/[\s\-\/]/g, '').toLowerCase();
      return (dNum && dNum === cleanNum) || (dId && dId.includes(cleanNum));
    });
  }

  // 4. Đối soát theo tiêu đề gần đúng
  if (!existingMatch && title.length > 4) {
    const cleanTitle = title.toLowerCase();
    existingMatch = decrees.find((d) => {
      const dt = d.title.toLowerCase();
      return dt.includes(cleanTitle) || cleanTitle.includes(dt);
    });
  }

  // 5. Kiểm tra mức độ liên quan đến nghiệp vụ Kế toán - Thuế
  const accountingKeywords = [
    'thuế', 'kế toán', 'hóa đơn', 'chứng từ', 'doanh nghiệp', 'tiền lương',
    'bảo hiểm', 'lao động', 'bhxh', 'lệ phí', 'môn bài', 'tndn', 'gtgt',
    'tncn', 'xnk', 'chi phí', 'doanh thu', 'báo cáo tài chính', 'giao dịch điện tử',
    'tài chính', 'kiểm toán', 'khấu hao', 'tài sản', 'lương cơ sở', 'quyết toán'
  ];

  const matchedKeywords = accountingKeywords.filter((kw) => lowerText.includes(kw));
  const isRelevant = matchedKeywords.length > 0 || existingMatch !== undefined || Boolean(detectedNumber);

  if (/lao động|tiền lương|bhxh|bảo hiểm|lương/.test(lowerText)) {
    relevantField = 'Nhân sự - Tiền lương & BHXH';
  } else if (/hóa đơn|chứng từ/.test(lowerText)) {
    relevantField = 'Hóa đơn - Chứng từ';
  } else if (/thuế|gtgt|tndn|tncn|môn bài|lệ phí|xnk/.test(lowerText)) {
    relevantField = 'Chính sách Thuế & Lệ phí';
  } else if (/kế toán|tài khoản|chuẩn mực|hạch toán/.test(lowerText)) {
    relevantField = 'Chế độ Kế toán Doanh nghiệp';
  }

  // 6. ĐƯA RA KẾT QUẢ THẨM ĐỊNH & KHUYẾN NGHỊ HÀNH ĐỘNG
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
      summary: `Hệ thống tự động nhận diện người dùng đang đề cập đến "${existingMatch.title}". Văn bản này ĐÃ CÓ trong CSDL Kiểu Việt (ID: ${existingMatch.id}). Khuyến nghị: TỪ CHỐI trùng lặp.`,
      confidence: 0.95,
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
      summary: `Hệ thống nhận diện yêu cầu bổ sung văn bản "${detectedNumber}" (${docType}). Văn bản CHƯA CÓ trong CSDL Kiểu Việt và thuộc chuyên ngành ${relevantField}. Khuyến nghị: DUYỆT BỔ SUNG.`,
      confidence: 0.92,
    };
  }

  if (isRelevant) {
    return {
      detectedNumber: detectedNumber || 'Chưa trích xuất được số hiệu',
      docType,
      isExisting: false,
      isRelevant: true,
      relevantField,
      recommendation: 'REVIEW',
      summary: `Người dùng dùng văn phong miêu tả nội dung (${title}). Thuộc lĩnh vực ${relevantField} nhưng chưa xác định được số hiệu chính xác. Khuyến nghị: Admin XEM XÉT.`,
      confidence: 0.7,
    };
  }

  return {
    detectedNumber: 'Không có',
    docType,
    isExisting: false,
    isRelevant: false,
    relevantField: 'Ngoài phạm vi kế toán',
    recommendation: 'REJECT',
    summary: 'Nội dung phản ánh không thuộc phạm vi tra cứu Kế toán - Thuế - Lao động hoặc câu chữ không rõ nghĩa.',
    confidence: 0.85,
  };
}
