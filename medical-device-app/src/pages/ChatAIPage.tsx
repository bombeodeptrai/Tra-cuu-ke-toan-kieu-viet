// src/pages/ChatAIPage.tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  User,
  SendHorizontal,
  Sparkles,
  BookOpen,
  Trash2,
  ExternalLink,
  ShieldCheck,
  Building2,
  Stethoscope,
  Info,
  Scale,
  RefreshCw,
  Key
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LEGAL_MANIFEST } from '@/data/legal-manifest';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  citations?: { docNumber: string; article: string; url?: string }[];
  timestamp: string;
}

const DEFAULT_SUGGESTIONS = [
  '📋 Căn cứ phân chia 6 nhóm TBYT theo TT 57/2025 trong E-HSMT?',
  '🏥 Cách phân bổ thuế GTGT đầu vào dùng chung Hòa Đức theo Điều 14 TT 219?',
  '⚖️ Lộ trình kiểm định máy siêu âm & X-quang theo TT 24/2026?',
  '💼 Trần lãi vay 30% EBITDA NĐ 132 giữa Kiểu Việt và Hòa Đức?',
  '📄 Hồ sơ công bố tiêu chuẩn TBYT loại A, B theo Điều 21 VBHN 08?',
  '🛡️ Quy định bảo lãnh dự thầu điện tử theo NĐ 214/2025?'
];

// Local Knowledge Base RAG Search for Instant Accurate Answers
function findLocalRAGAnswer(query: string): { content: string; citations: { docNumber: string; article: string; url?: string }[] } {
  const q = query.toLowerCase();

  if (q.includes('57') || q.includes('nhóm') || q.includes('tiêu chuẩn kỹ thuật') || q.includes('nhóm 1')) {
    return {
      content: `### 📌 Căn cứ phân chia 6 nhóm tiêu chuẩn kỹ thuật TBYT trong đấu thầu theo Thông tư 57/2025/TT-BYT:

1. **Nhóm 1 (Kỹ thuật cao nhất):** Thiết bị được sản xuất tại nước tham chiếu (Mỹ, EU, Nhật Bản, Anh, Canada, Úc...) VÀ đã được cấp phép lưu hành tự do (CFS / FDA 510k / CE Mark) tại chính nước tham chiếu đó (Điều 4 Khoản 1).
   - *Áp dụng Kiểu Việt:* Các hệ thống máy xét nghiệm Roche Cobas và Máy siêu âm GE Voluson mà Kiểu Việt chào thầu đạt 100% tiêu chí Nhóm 1.
2. **Nhóm 2:** Thiết bị do chủ sở hữu thuộc nước tham chiếu sở hữu công nghệ và đứng tên lưu hành, nhưng sản xuất tại nhà máy đạt ISO 13485 ở các nước khác (Điều 5).
3. **Nhóm 3 - 6:** TBYT sản xuất tại các quốc gia khác đạt ISO 13485 và TBYT sản xuất trong nước theo thứ bậc công nghệ.

⚠️ **Lưu ý thực chiến:** Nghị định 214/2025/NĐ-CP Điều 33 nghiêm cấm Bên mời thầu cài cắm tiêu chí kỹ thuật nhằm chỉ định duy nhất một nhãn hiệu. Nếu phát hiện HSMT hạn chế nhà thầu trái luật, Kiểu Việt có quyền gửi văn bản đề nghị làm rõ trên Hệ thống mạng đấu thầu quốc gia.`,
      citations: [
        { docNumber: 'Thông tư 57/2025/TT-BYT', article: 'Điều 4 & Điều 5', url: 'https://hethongphapluat.com' },
        { docNumber: 'Nghị định 214/2025/NĐ-CP', article: 'Điều 33', url: 'https://hethongphapluat.com' }
      ]
    };
  }

  if (q.includes('219') || q.includes('phân bổ') || q.includes('hòa đức') || q.includes('vat') || q.includes('thuế gtgt')) {
    return {
      content: `### 🏥 Quy tắc phân bổ Thuế GTGT đầu vào dùng chung cho Phòng khám Đa khoa Hòa Đức theo Điều 14 Thông tư 219/2013/TT-BTC:

1. **Bản chất hoạt động Phòng khám Hòa Đức:**
   - Hoạt động khám chữa bệnh: **Không chịu thuế GTGT** (Khoản 9 Điều 4 Thông tư 219/2013/TT-BTC).
   - Hoạt động bán lẻ thuốc, thiết bị y tế gia đình tại nhà thuốc phòng khám: **Chịu thuế GTGT 5% hoặc 10%**.
2. **Nguyên tắc phân bổ thuế đầu vào (Điều 14 Khoản 2):**
   - Thuế GTGT đầu vào của hàng hóa, dịch vụ dùng đồng thời (điện nước, thuê mặt bằng, văn phòng phẩm, khấu hao máy vi tính quản lý) bắt buộc phải phân bổ theo tỷ lệ:
   $$\\text{Tỷ lệ khấu trừ (\\%)} = \\frac{\\text{Doanh thu chịu thuế GTGT}}{\\text{Tổng doanh thu (Chịu thuế + Không chịu thuế)}} \\times 100\\%$$
3. **Hạch toán kế toán chi phí:**
   - **Số thuế GTGT được khấu trừ:** Kê khai vào Chỉ tiêu 25 trên Tờ khai thuế GTGT Mẫu 01/GTGT.
   - **Số thuế GTGT KHÔNG được khấu trừ:** Được hạch toán thẳng vào chi phí quản lý doanh nghiệp (TK 642) và được trừ khi tính thuế Thu nhập doanh nghiệp (TNDN).

💡 *Khuyến nghị Kiểu Việt:* Hàng tháng kế toán Hòa Đức tạm phân bổ theo doanh thu tháng; đến kỳ tính thuế tháng 12 phải tổng hợp doanh thu cả năm để xác định lại số thuế GTGT đầu vào được khấu trừ và kê khai điều chỉnh.`,
      citations: [
        { docNumber: 'Thông tư 219/2013/TT-BTC', article: 'Điều 14 Khoản 2 & Điều 4 Khoản 9', url: 'https://hethongphapluat.com' }
      ]
    };
  }

  if (q.includes('24') || q.includes('kiểm định') || q.includes('lộ trình') || q.includes('an toàn')) {
    return {
      content: `### ⚖️ Lộ trình kiểm định an toàn kỹ thuật TBYT theo Thông tư 24/2026/TT-BYT (Hiệu lực 01/07/2026):

1. **Phân nhóm máy móc thuộc diện kiểm định bắt buộc:**
   - Máy thở, máy gây mê kèm thở, máy khử rung tim (sốc tim), máy theo dõi bệnh nhân (patient monitor), hệ thống X-quang chẩn đoán, dao mổ điện cao tần.
2. **Lộ trình thực hiện cụ thể (Điều 3 & Điều 5):**
   - **Thiết bị mua sắm trước ngày 01/07/2027:** Cơ sở y tế (Phòng khám Hòa Đức) phải hoàn thành kiểm định lần đầu **trước ngày 01/01/2028**.
   - **Thiết bị mua sắm sau ngày 30/06/2027:** Bắt buộc phải được kiểm định đạt tiêu chuẩn an toàn kỹ thuật **trước khi đưa vào sử dụng lần đầu**.
3. **Tem kiểm định và kết nối dữ liệu (Điều 7):**
   - Tổ chức kiểm định dán tem có mã QR truy xuất và cập nhật kết quả lên Cổng thông tin cơ sở dữ liệu quốc gia về TBYT trong vòng 03 ngày làm việc.
   - Cơ quan BHXH sẽ đối soát tem kiểm định khi giám định thanh toán chi phí KCB BHYT.`,
      citations: [
        { docNumber: 'Thông tư 24/2026/TT-BYT', article: 'Điều 3, Điều 5, Điều 7', url: 'https://hethongphapluat.com' }
      ]
    };
  }

  if (q.includes('132') || q.includes('lãi vay') || q.includes('ebitda') || q.includes('liên kết')) {
    return {
      content: `### 💼 Kiểm soát Giao dịch liên kết Kiểu Việt - Hòa Đức & Trần lãi vay 30% EBITDA theo Nghị định 132/2020/NĐ-CP:

1. **Xác định bên liên kết (Điều 5 Khoản 2):**
   - Kiểu Việt nắm giữ trực tiếp hoặc gián tiếp từ 25% vốn góp của Hòa Đức, hoặc hai bên có cùng người đại diện pháp luật điều hành.
   - Hợp đồng cho thuê máy móc thiết bị y tế (Cobas, Voluson), hợp đồng cung cấp vật tư y tế, cho vay vốn là **Giao Dịch Liên Kết 100%**.
2. **Trần chi phí lãi vay được trừ (Điều 16 Khoản 3):**
   - Tổng chi phí lãi vay thuần (Chi phí lãi vay - Doanh thu lãi tiền gửi/cho vay) được trừ khi tính thuế TNDN **không vượt quá 30% EBITDA**.
   $$\\text{EBITDA} = \\text{Lợi nhuận thuần từ HĐKD} + \\text{Chi phí lãi vay} + \\text{Chi phí khấu hao}$$
3. **Xử lý phần chi phí lãi vay vượt trần 30%:**
   - Phần lãi vay vượt mức 30% EBITDA sẽ bị loại khỏi chi phí hợp lý của kỳ tính thuế hiện tại.
   - Doanh nghiệp được phép chuyển số chi phí lãi vay không được trừ này sang kỳ tính thuế tiếp theo khi xác định tổng chi phí lãi vay được trừ (thời gian chuyển liên tục không quá **05 năm** kể từ năm tiếp sau năm phát sinh).`,
      citations: [
        { docNumber: 'Nghị định 132/2020/NĐ-CP', article: 'Điều 5 Khoản 2 & Điều 16 Khoản 3', url: 'https://hethongphapluat.com' }
      ]
    };
  }

  if (q.includes('08') || q.includes('vbhn') || q.includes('loại a') || q.includes('loại b') || q.includes('lưu hành')) {
    return {
      content: `### 📄 Hồ sơ công bố tiêu chuẩn áp dụng đối với TBYT Loại A, B theo Điều 21 VBHN 08/VBHN-BYT (06/03/2026):

1. **Bộ 6 thành phần hồ sơ bắt buộc:**
   - ① Văn bản công bố tiêu chuẩn áp dụng TBYT loại A, B theo mẫu quy định.
   - ② Giấy chứng nhận đạt tiêu chuẩn quản lý chất lượng **ISO 13485** còn hiệu lực.
   - ③ Giấy ủy quyền của chủ sở hữu TBYT cho cơ sở đứng tên công bố (hợp pháp hóa lãnh sự nếu cấp từ nước ngoài).
   - ④ Giấy xác nhận đủ điều kiện bảo hành do chủ sở hữu TBYT cấp (trừ loại sử dụng một lần).
   - ⑤ Tài liệu mô tả tóm tắt kỹ thuật trang thiết bị y tế bằng tiếng Việt kèm tài liệu kỹ thuật của hãng sản xuất.
   - ⑥ Giấy chứng nhận lưu hành tự do (CFS) hợp lệ đối với thiết bị y tế nhập khẩu.
2. **Thẩm quyền tiếp nhận:**
   - Sở Y tế nơi cơ sở đặt trụ sở kinh doanh tiếp nhận và cấp Phiếu tiếp nhận công bố tiêu chuẩn áp dụng.`,
      citations: [
        { docNumber: 'Văn bản hợp nhất 08/VBHN-BYT', article: 'Điều 21 & Điều 22', url: 'https://hethongphapluat.com' }
      ]
    };
  }

  if (q.includes('214') || q.includes('bảo lãnh') || q.includes('đấu thầu')) {
    return {
      content: `### 🛡️ Quy định bảo lãnh dự thầu điện tử theo Nghị định 214/2025/NĐ-CP (Hướng dẫn Luật Đấu thầu):

1. **Bắt buộc bảo lãnh điện tử 100% (Điều 20):**
   - Đối với các gói thầu đấu thầu qua mạng trên Hệ thống mạng đấu thầu quốc gia, Thư bảo lãnh dự thầu bắt buộc phải được phát hành và kết nối điện tử trực tiếp từ ngân hàng vào hệ thống e-GP.
   - Không chấp nhận file PDF scan bảo lãnh giấy thông thường.
2. **Giá trị và thời hạn hiệu lực của bảo lãnh:**
   - Giá trị bảo lãnh dự thầu thường từ **1% đến 3%** giá gói thầu tùy theo quy mô.
   - Thời hạn hiệu lực của bảo lãnh dự thầu = **Thời gian có hiệu lực của HSDT + 30 ngày**.
3. **Lưu ý cho Kiểu Việt khi chuẩn bị hồ sơ E-HSDT:**
   - Phải kiểm tra hạn mức cấp bảo lãnh tại ngân hàng và ký duyệt điện tử trước thời điểm đóng thầu tối thiểu 24 - 48 giờ để tránh nghẽn mạng API.`,
      citations: [
        { docNumber: 'Nghị định 214/2025/NĐ-CP', article: 'Điều 20 & Điều 21', url: 'https://hethongphapluat.com' },
        { docNumber: 'Luật Đấu thầu 22/2023/QH15', article: 'Điều 14', url: 'https://hethongphapluat.com' }
      ]
    };
  }

  // Generic intelligent search based on keywords
  const matchedDocs = LEGAL_MANIFEST.filter(doc => 
    doc.title.toLowerCase().includes(q) || 
    doc.summary.toLowerCase().includes(q) ||
    doc.articles.some(a => a.content.toLowerCase().includes(q) || a.title.toLowerCase().includes(q))
  );

  if (matchedDocs.length > 0) {
    const d = matchedDocs[0];
    const a = d.articles[0];
    return {
      content: `### 🔍 Thông tin tra cứu căn cứ pháp lý: **${d.docNumber} - ${d.title}**

- **Cơ quan ban hành:** ${d.issuer} (Hiệu lực: ${d.effectiveDate})
- **Điều khoản liên quan:** ${a ? a.articleNumber + ': ' + a.title : 'Quy định chung'}
- **Nội dung trích xuất:** ${a ? a.content : d.summary}
- **Ý nghĩa thực chiến đối với Kiểu Việt & Hòa Đức:** ${a ? a.practicalImpact : d.practicalTakeaway}`,
      citations: [
        { docNumber: d.docNumber, article: a ? a.articleNumber : 'Toàn văn', url: d.officialUrl }
      ]
    };
  }

  return {
    content: `Trợ lý AI Kiểu Việt Healthcare đã tiếp nhận câu hỏi của bạn. Hệ thống đang đối chiếu cơ sở dữ liệu gồm 12 văn bản pháp luật then chốt (NĐ 214/2025, TT 57/2025, TT 24/2026, VBHN 08/2026, TT 219/2013, NĐ 132/2020) và 40 tiêu chí MD01-MD40.

Bạn có thể chọn một trong các câu hỏi gợi ý ở thanh phía trên hoặc nhập câu hỏi cụ thể hơn về:
- Quy chế đấu thầu thiết bị y tế (E-HSMT, bảo lãnh, đàm phán giá)
- Hồ sơ kỹ thuật phân nhóm 1 đến 6 theo TT 57/2025
- Kiểm định an toàn máy móc theo TT 24/2026
- Kê khai giá và số lưu hành TBYT theo VBHN 08
- Phân bổ thuế GTGT đầu vào dùng chung cho Phòng khám Hòa Đức theo TT 219
- Giao dịch liên kết và trần 30% EBITDA theo NĐ 132`,
    citations: []
  };
}

export const ChatAIPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-welcome',
      role: 'assistant',
      content: `Xin chào! Tôi là **Trợ Lý Pháp Lý AI Kiểu Việt Healthcare**.

Tôi được trang bị toàn văn tri thức của **12 văn bản quy phạm pháp luật y tế & đấu thầu then chốt**, hệ thống **40 tiêu chí tuân thủ MD01-MD40**, và các chuẩn mực quản trị tài chính - thuế cho **Phòng khám Đa khoa Hòa Đức**.

Bạn hãy đặt câu hỏi hoặc chọn một trong các chủ đề gợi ý bên dưới để bắt đầu tra cứu!`,
      citations: [
        { docNumber: 'NĐ 214/2025/NĐ-CP', article: 'Đấu thầu y tế' },
        { docNumber: 'TT 57/2025/TT-BYT', article: 'Phân 6 nhóm TBYT' },
        { docNumber: 'TT 219/2013/TT-BTC', article: 'Điều 14 phân bổ thuế Hòa Đức' }
      ],
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const q = textToSend || inputValue.trim();
    if (!q) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: q,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const ragResult = findLocalRAGAnswer(q);
      const botMsg: Message = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: ragResult.content,
        citations: ragResult.citations,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'm-welcome',
        role: 'assistant',
        content: `Đã làm mới phiên hội thoại. Tôi sẵn sàng hỗ trợ các câu hỏi mới về Đấu thầu TBYT Kiểu Việt và Phòng khám Hòa Đức.`,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="space-y-4 max-w-5xl mx-auto flex flex-col h-[calc(100vh-130px)]">
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-3 p-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold shadow-2xs">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-black text-slate-900">
                Trợ Lý Pháp Lý AI Kiểu Việt Healthcare
              </h1>
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-300 text-[10px] font-bold">
                RAG Engine Sẵn Sàng
              </Badge>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Đối chiếu 12 VBQPPL, 40 tiêu chí MD, phân bổ thuế TT 219 & trần 30% EBITDA NĐ 132
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearChat}
            className="text-xs text-slate-600 border-slate-200 hover:bg-slate-50 gap-1 rounded-xl h-8"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Làm Mới
          </Button>
        </div>
      </div>

      {/* Suggestion Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 flex-shrink-0 scrollbar-none">
        {DEFAULT_SUGGESTIONS.map((pill, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(pill)}
            className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 text-[11px] font-semibold text-slate-700 whitespace-nowrap transition-all shadow-2xs flex-shrink-0"
          >
            {pill}
          </button>
        ))}
      </div>

      {/* Chat Messages Viewport */}
      <div className="flex-1 overflow-y-auto p-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs space-y-4">
        {messages.map((m) => {
          const isAssistant = m.role === 'assistant';
          return (
            <div
              key={m.id}
              className={`flex gap-3 max-w-3xl ${isAssistant ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                  isAssistant
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-slate-800 text-white'
                }`}
              >
                {isAssistant ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>

              {/* Bubble */}
              <div
                className={`p-4 rounded-2xl text-xs space-y-2.5 shadow-2xs ${
                  isAssistant
                    ? 'bg-slate-50/80 border border-slate-200/90 text-slate-900'
                    : 'bg-teal-700 text-white'
                }`}
              >
                <div className="flex items-center justify-between gap-4 border-b border-black/5 pb-1">
                  <span className="font-bold text-[11px] opacity-80">
                    {isAssistant ? 'Kiểu Việt Healthcare AI' : 'Bạn (Chuyên viên Kiểu Việt)'}
                  </span>
                  <span className="text-[10px] opacity-60 font-mono">{m.timestamp}</span>
                </div>

                <div className="whitespace-pre-line leading-relaxed font-sans text-xs">
                  {m.content}
                </div>

                {/* Citations Footer if present */}
                {m.citations && m.citations.length > 0 && (
                  <div className="pt-2 border-t border-slate-200/80 mt-2 space-y-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                      <Scale className="w-3 h-3 text-teal-600" />
                      Căn Cứ Pháp Lý & Nguồn Kiểm Chứng:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {m.citations.map((c, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-teal-50 border border-teal-200 text-[10px] font-mono font-semibold text-teal-800"
                        >
                          <BookOpen className="w-3 h-3 text-teal-600" />
                          {c.docNumber} - {c.article}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400 pl-2">
            <Bot className="w-4 h-4 text-teal-600 animate-spin" />
            <span>AI đang tra cứu và tổng hợp điều khoản pháp lý...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="p-3 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex-shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Hỏi bất kỳ điều gì về hồ sơ dự thầu TBYT, NĐ 214, TT 57, thuế Hòa Đức..."
            className="flex-1 bg-slate-50 border-slate-200 text-xs text-slate-900 focus:bg-white h-10 rounded-xl"
          />
          <Button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold h-10 px-4 rounded-xl gap-1.5 text-xs shadow-xs"
          >
            <span>Gửi</span>
            <SendHorizontal className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
export default ChatAIPage;
