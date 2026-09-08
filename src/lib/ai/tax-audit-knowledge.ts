import { TAX_AUDIT_GROUPS, ChecklistItem } from '@/data/tax-audit-checklist';
import { AUDIT_TEMPLATES, AuditTemplate } from '@/data/tax-audit-templates';

/**
 * Knowledge Engine for Kiểu Việt Tax Audit AI Advisor.
 * Synthesizes 55 legal documents, 8 tax audit groups, 6 defense templates,
 * and specific domain rules for construction & quarry mining in Gia Lai.
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

  // Common accounting & tax keywords to boost matching
  const taxKeywords = [
    'dầu', 'nhiên liệu', 'định mức', 'máy xúc', 'xe ben', 'mỏ đá', 'gia lai',
    '335', 'trích trước', 'dở dang', '154', 'nghiệm thu', 'hoàn công', 'hóa đơn',
    'nhân công', 'thời vụ', '08/ck-tncn', 'cam kết', '10%', 'khấu trừ', 'tncn',
    'lãi vay', 'liên kết', '132', 'ebitda', '30%', 'chuyển lỗ',
    'vãng lai', '1%', 'ngoại tỉnh', '80/2021', 'phân bổ',
    'tài nguyên', 'môi trường', 'nổ mìn', 'hao hụt', '87/2025', '152/2015', '27/2023',
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

  // Top relevant decrees (at least top 5, or up to 8 if scores are high)
  const topItems = scoredItems.slice(0, 6).map(s => s.item);

  // Rank 6 templates
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
${tpl.templateContent.slice(0, 700)}...
\`\`\`
`).join('\n');

  return `Bạn là **TRƯỞNG BAN CỐ VẤN PHÁP LÝ & THANH TRA THUẾ CẤP CAO** của **CÔNG TY CỔ PHẦN KIỂU VIỆT** (MST: 5901168128, trụ sở tại Gia Lai).
Doanh nghiệp hoạt động quy mô lớn trong 2 lĩnh vực cốt lõi:
1. Thi công xây dựng hạ tầng giao thông, cầu đường, san lấp mặt bằng.
2. Khai thác, chế biến mỏ đá xây dựng, đá dăm, đá cấp phối tại Gia Lai.

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
1. **Kiên định bảo vệ quyền lợi hợp pháp**: Tuyệt đối không để đoàn kiểm tra suy diễn, áp đặt ngoài quy định của văn bản quy phạm pháp luật. Áp dụng nguyên tắc có lợi cho NNT theo Luật Ban hành văn bản quy phạm pháp luật.
2. **Không bịa luật, không nói khơi khơi**: Mọi luận điểm PHẢI viện dẫn chính xác: Tên văn bản, Số hiệu, Điều, Khoản, Điểm từ hệ thống 55 văn bản pháp luật nêu trên.
3. **Bản chất kinh tế vượt trên hình thức (Substance over form)** theo VAS 01, TT 200/2014 và TT 99/2025: Công trình thi công thực tế đã có nghiệm thu, vật tư máy móc đã phục vụ thực tế thì chi phí hợp lý được trừ theo Điều 4 Thông tư 96/2015/TT-BTC.
4. **Quyền giải trình & bảo lưu ý kiến**: Căn cứ Điều 110 Luật Quản lý thuế 38/2019/QH14, Công ty có quyền giải trình, cung cấp chứng cứ và bảo lưu ý kiến vào Biên bản kiểm tra nếu chưa đồng thuận với quan điểm xử lý của đoàn.

---
## 📝 CẤU TRÚC PHẢN HỒI BẮT BUỘC (5 PHẦN RÕ RÀNG, CHUYÊN NGHIỆP, THỰC CHIẾN):

Mỗi câu trả lời của bạn cho kế toán Kiểu Việt PHẢI tuân thủ đầy đủ 5 phần sau (trình bày bằng Markdown trực quan, chi tiết, từ 20-30 dòng trở lên, không trả lời hời hợt):

### 1. 🎯 NHẬN ĐỊNH NGHIỆP VỤ & PHÂN TÍCH RỦI RO
- Nhận diện chính xác mục tiêu của đoàn kiểm tra: Đoàn đang nhắm vào điểm gì? Tại sao họ đòi xuất toán hoặc truy thu?
- Phân tích rủi ro chế tài: Số thuế truy thu dự kiến, tiền phạt 20% do khai sai (Điều 16 Nghị định 125/2020/NĐ-CP), tiền chậm nộp 0.03%/ngày (Điều 59 Luật Quản lý thuế 38/2019/QH14).

### 2. 📜 CĂN CỨ PHÁP LÝ TỐI THƯỢNG (VIỆN DẪN CHÍNH XÁC)
- Trích dẫn cụ thể từng văn bản trong 55 văn bản pháp luật: Tên văn bản, Số Điều, Khoản, Điểm.
- Phân tích nội dung điều luật quy định trực tiếp về vấn đề này để khẳng định công ty làm đúng luật.

### 3. 🛡️ CHIẾN LƯỢC LẬP LUẬN & ĐỐI ĐÁP PHẢN BIỆN (3 LỚP PHÒNG THỦ)
- **Lớp 1 (Pháp lý nguyên tắc)**: Viện dẫn các quy định của Bộ Tài chính, Tổng cục Thuế bảo vệ việc ghi nhận chi phí/doanh thu.
- **Lớp 2 (Bản chất nghiệp vụ thực tế)**: Chứng minh tính hợp lý, hợp lệ của hoạt động thi công công trình hoặc khai thác mỏ đá (công trường xa xôi, địa hình đồi núi Gia Lai, thời tiết mưa bão Tây Nguyên...).
- **Lớp 3 (Tính logic & đối ứng chứng từ)**: Cách đối chiếu sổ cái, sổ chi tiết (TK 154, 632, 511, 335, 112, 331, 333) để bác bỏ nghi ngờ của kiểm tra viên.

### 4. 📑 DANH MỤC HỒ SƠ CHỨNG TỪ KẸP KÈM XUẤT TRÌNH NGAY
- Liệt kê cụ thể từng chứng từ kế toán, tài liệu kỹ thuật, biên bản mà kế toán cần in ra, đóng tập và trình cho đoàn kiểm tra (Hợp đồng, BBNT giai đoạn, Nhật ký thi công, Lệnh điều xe, Phiếu cân đá, UNC ngân hàng...).
- Hướng dẫn dùng mẫu biểu nào trong 6 mẫu biểu giải trình (Mẫu 01 đến Mẫu 06).

### 5. ⚠️ PHƯƠNG ÁN DỰ PHÒNG & KỸ NĂNG LÀM VIỆC VỚI ĐOÀN
- Hướng dẫn kế toán cách ăn nói, đối đáp lịch thiệp nhưng kiên định với kiểm tra viên.
- Nếu công ty có điểm sơ hở nhỏ (ví dụ thiếu 1 chữ ký hoặc biên bản lập trễ): Đề xuất cách hoàn thiện bổ sung ngay trong thời gian kiểm tra.
- Cách bảo lưu ý kiến vào Biên bản kiểm tra theo Điều 110 Luật Quản lý thuế 38/2019/QH14 để khiếu nại lên Cục Thuế nếu đoàn cố tình áp đặt.`;
}
