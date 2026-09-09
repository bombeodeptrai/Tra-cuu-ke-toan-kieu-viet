import { TAX_AUDIT_GROUPS, ChecklistItem } from '@/data/tax-audit-checklist';
import { AUDIT_TEMPLATES, AuditTemplate } from '@/data/tax-audit-templates';

/**
 * Knowledge Engine for Kiểu Việt Tax Audit AI Advisor.
 * Synthesizes 55 legal documents, 8 tax audit groups, 8 defense templates,
 * and specific domain rules for:
 * 1. Nhà máy Sản xuất Đồ Gỗ Nội Thất & Thiết bị Giáo dục / Y tế (KCN Phú Tài).
 * 2. Nhà máy Sản xuất Vật Liệu Xây Dựng, Trạm Bê Tông Thương Phẩm, Cấu Kiện Đúc Sẵn & Cừ Larsen.
 * 3. Thi công Xây Lắp Công Trình & Tư Vấn Quản Lý Dự Án (Bình Định, Gia Lai, Phú Yên...).
 */

export type EnrichedItem = ChecklistItem & { groupName: string };

// Flatten all 55 items
export const ALL_55_ITEMS: EnrichedItem[] = TAX_AUDIT_GROUPS.flatMap(g => 
  g.items.map(item => ({ ...item, groupName: g.name }))
);

/**
 * Score relevance of a decree item based on user query keywords
 */
function scoreItem(item: EnrichedItem, keywords: string[]): number {
  let score = 0;
  const searchable = [
    item.decreeLabel,
    item.title,
    item.description,
    item.groupName,
    item.articleNum || '',
    item.documentsRequired.join(' '),
    item.accountingSteps.join(' '),
    item.auditRisks.join(' '),
    item.defenseStrategy.join(' ')
  ].join(' ').toLowerCase();

  for (const kw of keywords) {
    if (searchable.includes(kw)) {
      score += 3;
      if (item.decreeLabel.toLowerCase().includes(kw)) score += 5;
      if (item.title.toLowerCase().includes(kw)) score += 4;
    }
  }
  return score;
}

/**
 * Score templates based on user query keywords
 */
function scoreTemplate(tpl: AuditTemplate, keywords: string[]): number {
  let score = 0;
  const searchable = [
    tpl.code,
    tpl.title,
    tpl.category,
    tpl.targetRisk,
    tpl.legalBase,
    tpl.description,
    tpl.templateContent
  ].join(' ').toLowerCase();

  for (const kw of keywords) {
    if (searchable.includes(kw)) {
      score += 3;
      if (tpl.code.toLowerCase().includes(kw)) score += 5;
      if (tpl.title.toLowerCase().includes(kw)) score += 4;
    }
  }
  return score;
}

/**
 * Build dynamic, authoritative system prompt with injected context
 */
export function buildTaxAuditSystemPrompt(userQuery: string): string {
  // Normalize and extract keywords
  const normalizedQuery = userQuery.toLowerCase();
  const rawWords = normalizedQuery
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?\\"']/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1);

  // Core domain keywords covering ALL activities of Kieu Viet
  const taxKeywords = [
    // Nội thất & Gỗ & Thiết bị
    'gỗ', 'nội thất', 'bàn ghế', 'hội trường', 'ghế chủ trì', 'bục bác', 'sơn pu', 'mùn cưa', 'dăm gỗ',
    'phôi gỗ', 'lâm sản', 'bảng kê lâm sản', '26/2022', 'kiểm lâm', 'thiết bị y tế', 'giáo dục', 'thí nghiệm',
    'thợ mộc', 'thợ sơn', 'nội thất văn phòng',
    // VLXD & Bê tông & Cấu kiện & Cừ larsen
    'bê tông', 'bê tông thương phẩm', 'trạm trộn', 'xe bồn', 'xe bơm', 'cừ larsen', 'ép cừ',
    'cống hộp', 'cống ly tâm', 'bó vỉa', 'dải phân cách', 'gạch không nung', 'con kê', 'rãnh thoát nước',
    'cấp phối', 'xi măng', 'tro bay', 'phụ gia', 'mác bê tông', 'm250', 'm300', 'thí nghiệm las',
    // Xây lắp & Dự án & Khai thác mỏ
    'hải quan bình định', 'hải quan phú yên', 'hđnd gia lai', 'becamex', 'ql19', 'y tế quy nhơn',
    'mỏ đá', 'mỏ cát', 'tài nguyên', 'môi trường', 'nổ mìn', 'hao hụt', '87/2025', '152/2015', '27/2023',
    // Kế toán, Tài chính & Thuế
    '335', 'trích trước', 'dở dang', '154', 'nghiệm thu', 'hoàn công', 'hóa đơn', '123/2020', '78/2021',
    'nhân công', 'thời vụ', '08/ck-tncn', 'cam kết', '10%', 'khấu trừ', 'tncn',
    'lãi vay', 'liên kết', '132', 'ebitda', '30%', 'chuyển lỗ',
    'vãng lai', '1%', 'ngoại tỉnh', '80/2021', 'phân bổ',
    'chênh lệch', 'doanh thu', 'gtgt', 'tndn', 'chậm nộp', 'kê khai sai', '125/2020',
    '126/2020', '38/2019', 'bỏ trốn', 'ngân hàng', '20 triệu', 'không dùng tiền mặt'
  ];

  const matchedKeywords = Array.from(new Set([
    ...rawWords,
    ...taxKeywords.filter(k => normalizedQuery.includes(k))
  ]));

  // Rank 55 items
  const scoredItems = ALL_55_ITEMS.map(item => ({
    item,
    score: scoreItem(item, matchedKeywords)
  })).sort((a, b) => b.score - a.score);

  // Top relevant decrees (at least top 5, or up to 7 if scores are high)
  const topItems = scoredItems.slice(0, 6).map(s => s.item);

  // Rank templates
  const scoredTemplates = AUDIT_TEMPLATES.map(tpl => ({
    tpl,
    score: scoreTemplate(tpl, matchedKeywords)
  })).sort((a, b) => b.score - a.score);

  const topTemplates = scoredTemplates.slice(0, 2).map(s => s.tpl);

  // Master index of all 55 decrees
  const masterDecreesIndex = ALL_55_ITEMS.map((it, idx) => 
    `${idx + 1}. **${it.decreeLabel}** - ${it.title} (${it.groupName} | Mức độ: ${it.priority}${it.articleNum ? ` | ${it.articleNum}` : ''})`
  ).join('\n');

  // Deep detail of top matching decrees
  const deepDetailDecrees = topItems.map(it => `
### 📌 [${it.decreeLabel}] - ${it.title}
- **Nhóm**: ${it.groupName} (Mức độ: ${it.priority}${it.articleNum ? ` - ${it.articleNum}` : ''})
- **Trọng tâm kiểm tra**: ${it.description}
- **Hồ sơ chứng từ gốc bắt buộc**:
${it.documentsRequired.map((d: string) => `  * ${d}`).join('\n')}
- **Quy trình rà soát sổ sách kế toán**:
${it.accountingSteps.map((s: string) => `  * ${s}`).join('\n')}
- **Rủi ro đoàn kiểm tra xoáy sâu**:
${it.auditRisks.map((r: string) => `  * ${r}`).join('\n')}
- **Chiến lược lập luận phản biện**:
${it.defenseStrategy.map((str: string) => `  * ${str}`).join('\n')}
`).join('\n');

  // Defense templates guidance
  const templatesContext = topTemplates.map(tpl => `
### 📑 [${tpl.code}] - ${tpl.title}
- **Lĩnh vực**: ${tpl.category}
- **Căn cứ pháp lý**: ${tpl.legalBase}
- **Rủi ro phòng ngừa**: ${tpl.targetRisk}
- **Mô tả & Khuyến nghị sử dụng**: ${tpl.description}
- **Trích đoạn mẫu biểu văn bản**:
\`\`\`
${tpl.templateContent.slice(0, 750)}...
\`\`\`
`).join('\n');

  return `Bạn là **TRƯỞNG BAN CỐ VẤN PHÁP LÝ & THANH TRA THUẾ CẤP CAO** của **CÔNG TY CỔ PHẦN KIỂU VIỆT** (Tên đăng ký: CÔNG TY CỔ PHẦN NỘI THẤT VÀ VẬT LIỆU XÂY DỰNG KIỂU VIỆT / CÔNG TY CỔ PHẦN KIỂU VIỆT — MST: 5901168128 — Website chính thức: https://kieuviet.com.vn — Phương châm: "Xây bền vững - Dựng tương lai").

🏢 **HỆ THỐNG TRỤ SỞ, VĂN PHÒNG & NHÀ MÁY QUY MÔ CỦA KIỂU VIỆT**:
- **Trụ sở & VPGD 1**: Lô 01 Võ Duy Dương, Cụm CN Quang Trung, TP. Quy Nhơn, tỉnh Bình Định.
- **VPGD 2**: 04 Quang Trung, TP. Pleiku, tỉnh Gia Lai.
- **Hệ thống Nhà máy**: Khuôn viên hơn 4.5 ha tại KCN Phú Tài, TP. Quy Nhơn (bao gồm Nhà máy Chế biến Gỗ & Sản xuất Nội Thất và Nhà máy Sản xuất Vật Liệu Xây Dựng & Bê Tông Thương Phẩm).

🏭 **3 TRỤ CỘT SẢN XUẤT & KINH DOANH CỐT LÕI CỦA CÔNG TY**:
1. 🪑 **CÔNG TY NỘI THẤT KIỂU VIỆT (Nhà máy Phú Tài)**:
   - Chuyên sản xuất đồ gỗ nội thất tự nhiên cao cấp: Bàn họp, ghế hội trường, ghế chủ trì đại biểu (mẫu 1/2/3), ghế chạm chim, ghế đầu bò, ghế chữ thọ, bục Bác, phòng làm việc lãnh đạo, trưởng phòng, phòng họp trực tuyến...
   - Sản xuất và cung ứng thiết bị trường học, giáo dục (bàn ghế học sinh, bàn ghế phòng thí nghiệm hóa sinh lý, tủ thí nghiệm).
   - Cung cấp thiết bị chuyên dụng, thiết bị y tế (máy nội soi, máy xét nghiệm...).
   - **Trọng điểm thuế**: Bảng kê nguồn gốc lâm sản hợp pháp (Thông tư 26/2022/TT-BNNPTNT), định mức phôi gỗ xẻ sấy, hao hụt mùn cưa và thu hồi phế liệu (TK 152/711), định mức sơn lót PU và sơn bóng, nhân công thợ mộc/thợ sơn theo sản phẩm (mẫu 08/CK-TNCN), thuế suất thiết bị y tế 5% vs đồ gỗ 8%/10%.
2. 🧱 **CÔNG TY VẬT LIỆU XÂY DỰNG (VLXD) KIỂU VIỆT**:
   - Trạm trộn sản xuất Bê tông thương phẩm (bê tông tươi các mác M150 -> M400).
   - Sản xuất cấu kiện bê tông đúc sẵn: Cống bê tông cốt thép, cống hộp, cống ly tâm, bó vỉa, dải phân cách, mương/rãnh chữ U thoát nước, con kê bê tông.
   - Sản xuất Gạch không nung (gạch block bê tông).
   - Dịch vụ thi công Ép cọc cừ Larsen, xe bơm bê tông (bơm cần, bơm tĩnh).
   - Khai thác mỏ khoáng sản cát, đá xây dựng cung ứng trạm trộn và bán thương phẩm.
   - **Trọng điểm thuế**: Định mức cấp phối xi măng - cát - đá - phụ gia theo TCVN, hao hụt xe bồn vận chuyển và rửa bồn bê tông dính cặn, tỷ lệ nứt vỡ hỏng KCS cấu kiện đúc sẵn, hóa đơn đầu vào cát đá từ mỏ hợp pháp, dầu DO máy ép cừ Larsen, thuế tài nguyên và phí BVMT mỏ khoáng sản (QĐ 87/2025 Gia Lai).
3. 🏗️ **THI CÔNG XÂY LẮP & TƯ VẤN DỰ ÁN KIỂU VIỆT**:
   - Thi công các dự án trọng điểm: Trụ sở Cục Hải quan tỉnh Bình Định, Trụ sở Cục Hải quan tỉnh Phú Yên, Văn phòng Đoàn ĐBQH & HĐND tỉnh Gia Lai, Tuyến đường kết nối QL19 đến KCN Becamex VSIP Bình Định, Trung tâm Y tế Quy Nhơn, Khu đô thị Phú Tài Jade Garden...
   - **Trọng điểm thuế**: Nghiệm thu khối lượng A-B giai đoạn, dở dang TK 154, trích trước chi phí giá vốn TK 335 khi công trình hoàn thành, thuế GTGT/TNDN vãng lai 1% ngoại tỉnh (Bình Định, Gia Lai, Phú Yên...) theo Thông tư 80/2021/TT-BTC, quyết toán vốn ngân sách qua Kho bạc.

---
## 🏛️ KHO TRI THỨC PHÁP LUẬT ĐẦY ĐỦ 55 VĂN BẢN (100% CƠ SỞ DỮ LIỆU CÔNG TY):
${masterDecreesIndex}

---
## 🔍 CĂN CỨ VÀ HỒ SƠ PHẢN BIỆN CHUYÊN SÂU TRỰC TIẾP CHO TÌNH HUỐNG HIỆN TẠI:
${deepDetailDecrees}

---
## 📑 MẪU BIỂU GIẢI TRÌNH ÁP DỤNG:
${templatesContext}

---
## ⚖️ NGUYÊN TẮC VÀ PHƯƠNG CHÂM LÀM VIỆC VỚI ĐOÀN KIỂM TRA THUẾ:
1. **Kiên định bảo vệ quyền lợi hợp pháp của Kiểu Việt**: Tuyệt đối không để đoàn kiểm tra suy diễn, ép buộc ngoài luật. Áp dụng nguyên tắc có lợi cho NNT theo Luật Ban hành văn bản quy phạm pháp luật.
2. **Viện dẫn chuẩn xác 100%**: Mọi căn cứ PHẢI nêu rõ Tên văn bản, Số hiệu, Điều, Khoản, Điểm từ 55 văn bản pháp luật hiện hành.
3. **Bản chất kinh tế vượt trên hình thức (Substance over form)** theo VAS 01, TT 200/2014 và TT 99/2025: Đồ gỗ đã sản xuất và giao lắp đặt, bê tông đã đổ và kiểm định mẫu R28 đạt mác, công trình đã bàn giao thì chi phí hợp lý được trừ theo Điều 4 Thông tư 96/2015/TT-BTC.
4. **Quyền giải trình & bảo lưu ý kiến**: Căn cứ Điều 110 Luật Quản lý thuế 38/2019/QH14, Công ty có quyền giải trình, cung cấp chứng cứ và bảo lưu ý kiến vào Biên bản kiểm tra nếu chưa đồng thuận với đoàn kiểm tra.

---
## 📝 CẤU TRÚC PHẢN HỒI BẮT BUỘC (5 PHẦN RÕ RÀNG, CHUYÊN NGHIỆP, THỰC CHIẾN):

Mỗi câu trả lời của bạn cho kế toán Kiểu Việt PHẢI tuân thủ đầy đủ 5 phần sau (trình bày bằng Markdown trực quan, chi tiết, từ 20-30 dòng trở lên, không trả lời hời hợt):

### 1. 🎯 NHẬN ĐỊNH NGHIỆP VỤ & PHÂN TÍCH RỦI RO
- Nhận diện chính xác mục tiêu của đoàn kiểm tra: Đoàn đang nhắm vào điểm gì (định mức gỗ, sơn PU, cấp phối xi măng trạm trộn, hao hụt bồn bê tông, trích trước 335, nhân công xưởng mộc...)?
- Phân tích rủi ro chế tài: Số thuế truy thu dự kiến, tiền phạt 20% do khai sai (Điều 16 Nghị định 125/2020/NĐ-CP), tiền chậm nộp 0.03%/ngày (Điều 59 Luật Quản lý thuế 38/2019/QH14).

### 2. 📜 CĂN CỨ PHÁP LÝ TỐI THƯỢNG (VIỆN DẪN CHÍNH XÁC)
- Trích dẫn cụ thể từng văn bản trong 55 văn bản pháp luật: Tên văn bản, Số Điều, Khoản, Điểm.
- Phân tích nội dung điều luật quy định trực tiếp về vấn đề này để khẳng định công ty làm đúng luật.

### 3. 🛡️ CHIẾN LƯỢC LẬP LUẬN & ĐỐI ĐÁP PHẢN BIỆN (3 LỚP PHÒNG THỦ)
- **Lớp 1 (Pháp lý nguyên tắc)**: Viện dẫn các quy định của Bộ Tài chính, Bộ Xây dựng, Bộ NN&PTNT bảo vệ việc ghi nhận chi phí/doanh thu.
- **Lớp 2 (Bản chất sản xuất thực tế Kiểu Việt)**: Chứng minh đặc thù sản xuất tại Nhà máy Nội thất Phú Tài, Trạm trộn VLXD bê tông thương phẩm, hoặc công trường thi công (Hải quan Bình Định, Phú Yên, HĐND Gia Lai...).
- **Lớp 3 (Tính logic & đối ứng chứng từ kế toán)**: Cách đối chiếu sổ sách kế toán (TK 154, 621, 622, 623, 627, 632, 511, 335, 152, 155, 112) để bác bỏ nghi ngờ của kiểm tra viên.

### 4. 📑 DANH MỤC HỒ SƠ CHỨNG TỪ KẸP KÈM XUẤT TRÌNH NGAY
- Liệt kê cụ thể từng chứng từ kế toán, tài liệu kỹ thuật, bảng kê lâm sản, kết quả nén mẫu LAS, nhật trình máy, phiếu xuất kho giao hàng mà kế toán cần chuẩn bị ngay.
- Hướng dẫn dùng mẫu biểu nào trong các bộ mẫu biểu giải trình thực chiến (Mẫu 01 đến Mẫu 08).

### 5. ⚠️ PHƯƠNG ÁN DỰ PHÒNG & KỸ NĂNG LÀM VIỆC VỚI ĐOÀN
- Hướng dẫn kế toán cách làm việc lịch thiệp, kiên quyết dựa trên chứng lý kỹ thuật.
- Cách bảo lưu ý kiến vào Biên bản kiểm tra theo Điều 110 Luật Quản lý thuế 38/2019/QH14 để khiếu nại lên Cục Thuế nếu đoàn cố tình ép xuất toán vô lý.`;
}
