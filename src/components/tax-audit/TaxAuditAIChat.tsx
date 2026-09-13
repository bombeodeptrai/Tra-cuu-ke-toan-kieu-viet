import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, SendHorizontal, Sparkles, RotateCcw, MessageSquare, 
  HelpCircle, ChevronDown, ChevronUp, AlertCircle, CheckCircle2,
  Copy, Check, ShieldCheck, Scale, FileText, Building2, BookOpen, Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useSettingsStore } from '@/stores/settings-store';
import { GeminiService } from '@/lib/ai/gemini';
import { AUDIT_SYSTEM_PROMPT, retrievePublicAuditSources } from '@/lib/ai/audit-public-context';
import { useDecreeStore } from '@/stores/decree-store';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export function TaxAuditAIChat() {
  const { geminiApiKey } = useSettingsStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const effectiveKey = geminiApiKey?.trim();
  const decrees = useDecreeStore(s => s.decrees);
  const quickQuestions = [
    { label: '🪑 Định mức gỗ & Sơn PU', text: 'Đoàn kiểm tra đòi bóc chi phí gỗ nguyên liệu và sơn PU xưởng Nội thất Phú Tài vì nghi ngờ tỷ lệ hao hụt mùn cưa và định mức tiêu hao, lập luận giải trình ra sao?' },
    { label: '🪵 Nguồn gốc lâm sản gỗ', text: 'Cơ quan thuế yêu cầu chứng minh nguồn gốc lâm sản hợp pháp cho các lô gỗ xẻ đóng bàn ghế hội trường, phòng làm việc theo thời điểm mua và nguồn gỗ; cần phân biệt TT26/2022 với TT26/2025 và TT84/2025, hồ sơ gồm những gì?' },
    { label: '🧱 Cấp phối trạm Bê tông', text: 'Đoàn kiểm tra soi định mức cấp phối xi măng trạm trộn Bê tông thương phẩm Kiểu Việt và đòi loại chi phí hao hụt xe bồn, cách đối chiếu kết quả thí nghiệm LAS và bảo vệ?' },
    { label: '🏗️ Cấu kiện đúc sẵn & Cừ Larsen', text: 'Giải trình tỷ lệ hao hụt nứt vỡ KCS cống hộp, bó vỉa, gạch không nung và chi phí dầu DO máy ép cọc cừ Larsen phục vụ thi công công trình?' },
    { label: '🏗️ Trích trước TK 335', text: 'Đoàn kiểm tra đòi bóc chi phí trích trước TK 335 của công trình xây lắp và dự án cung cấp lắp đặt nội thất trọn gói đã bàn giao nhưng chưa có đủ hóa đơn thầu phụ, bảo vệ thế nào?' },
    { label: '👷 Nhân công thời vụ xưởng mộc & bê tông', text: 'Đoàn thanh tra muốn truy thu 10% thuế TNCN thợ mộc gia công gỗ và nhân công trạm trộn bê tông, cách dùng bản cam kết 08/CK-TNCN và hợp đồng khoán việc bảo vệ?' },
    { label: '📐 Chi phí Tư vấn, Thiết kế & Giám sát', text: 'Đoàn kiểm tra soi chi phí chuyên gia tư vấn thiết kế, công tác phí khảo sát hiện trường và phân bổ chi phí phần mềm bản quyền dự án, cách bảo vệ?' },
    { label: '🏛️ Nghĩa vụ thuế ngoài tỉnh', text: 'Phân biệt nghĩa vụ GTGT và TNDN ngoài tỉnh của bán nội thất và xây lắp; cần thông tin hợp đồng, kỳ và căn cứ nào để xác định có phải phân bổ thuế?' },
    { label: '📊 Lệch DT GTGT vs Quyết toán TNDN', text: 'Giải trình chênh lệch doanh thu giữa tờ khai GTGT và quyết toán TNDN đối với hợp đồng cung cấp lắp đặt nội thất và khối lượng bê tông xuất trạm cuối tháng?' }
  ];

  useEffect(() => {
    setMessages([{ id: 'welcome', role: 'assistant', content: 'Nhập câu hỏi và kỳ cần đối chiếu. Chat tra cứu nguồn luật công khai; không tự đọc chứng từ hay nhật ký nội bộ. Nội dung anh chủ động gửi trong chat sẽ chuyển tới Gemini theo API key đã cấu hình.', timestamp: '' }]);
  }, []);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || input.trim();
    if (!textToSend || isTyping) return;
    if (!effectiveKey) { setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: 'Chưa cấu hình dịch vụ AI. Nhập API key trong Cài đặt để hỏi AI; hồ sơ và công cụ đối chiếu vẫn dùng được.', timestamp: '' }]); return; }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!questionText) setInput('');
    setIsTyping(true);

    const assistantMsgId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMsgId,
      role: 'assistant',
      content: '',
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, assistantMessage]);

    // Build dynamic high-accuracy system prompt injected with relevant legal decrees & templates
    const systemPrompt = AUDIT_SYSTEM_PROMPT;

    const chatHistory = [...messages, userMessage].map(m => ({
      role: m.role,
      content: m.content
    }));

    try {
      const sources = await retrievePublicAuditSources(textToSend, decrees);
      chatHistory[chatHistory.length - 1].content = 'NGUỒN LUẬT CÔNG KHAI:\n' + sources + '\nCÂU HỎI:\n' + textToSend;
      const gemini = new GeminiService(effectiveKey);
      let accumulatedText = '';

      for await (const chunk of gemini.streamChat(chatHistory, systemPrompt)) {
        accumulatedText += chunk;
        setMessages(prev => 
          prev.map(m => m.id === assistantMsgId ? { ...m, content: accumulatedText } : m)
        );
      }
      if (!accumulatedText.trim()) throw new Error('Dịch vụ không trả nội dung. Chưa có kết quả phân tích.');
    } catch (err: any) {
      // The failure is displayed below, without a fabricated successful response.
      setMessages(prev => 
        prev.map(m => m.id === assistantMsgId ? { 
          ...m, 
          content: `⚠️ Đã xảy ra lỗi kết nối AI: ${err.message || 'Không thể kết nối dịch vụ'}. Vui lòng thử lại hoặc kiểm tra API Key trong Cài đặt.` 
        } : m)
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: `👋 Cuộc trò chuyện đã được đặt lại. Hãy nhập tình huống thanh tra thực tế cần bảo vệ!`,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="bg-card rounded-2xl border border-border shadow-xs overflow-hidden flex flex-col h-[750px]">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-400">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              Trợ Lý AI Phản Biện & Bảo Vệ Chi Phí Thanh Tra Thuế
              <Badge className="bg-emerald-500/30 text-emerald-300 border-emerald-400/40 text-[10px]">Thực Chiến</Badge>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 text-[10px]">Tra cứu nguồn luật công khai</Badge>
            </h3>
            <p className="text-[11px] text-slate-300">
              Trực chiến hỗ trợ kế toán Kiểu Việt phản biện các yêu cầu xuất toán chi phí của đoàn kiểm tra
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleResetChat}
          className="h-8 text-xs bg-white/10 hover:bg-white/20 text-white border-white/20 gap-1.5"
        >
          <RotateCcw className="h-3 w-3" /> Đặt lại hội thoại
        </Button>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-muted/10">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="h-8 w-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-1">
                  <Bot className="h-4 w-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-xs relative group ${
                  isUser
                    ? 'bg-emerald-600 text-white rounded-tr-none'
                    : 'bg-card border border-border text-foreground rounded-tl-none'
                }`}
              >
                {!isUser && (
                  <button
                    onClick={() => handleCopy(msg.id, msg.content)}
                    className="absolute top-2 right-2 p-1 rounded-md text-muted-foreground hover:text-foreground bg-muted/60 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Sao chép nội dung"
                  >
                    {copiedId === msg.id ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                )}

                <div className="prose dark:prose-invert max-w-none text-xs space-y-2 break-words">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.content}
                  </ReactMarkdown>
                </div>

                <div className={`text-[10px] mt-2 opacity-60 text-right ${isUser ? 'text-emerald-100' : 'text-muted-foreground'}`}>
                  {msg.timestamp}
                </div>
              </div>

              {isUser && (
                <div className="h-8 w-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-xs mt-1">
                  <span className="text-xs font-bold">KV</span>
                </div>
              )}
            </div>
          );
        })}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="h-8 w-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 animate-pulse">
              <Bot className="h-4 w-4" />
            </div>
            <div className="bg-card border border-border rounded-2xl rounded-tl-none px-4 py-3 text-xs flex items-center gap-2 text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600 animate-spin" />
              <span>Đang tra cứu cơ sở dữ liệu 55 văn bản & lập luận phản biện...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions Bar */}
      <div className="p-2.5 bg-muted/30 border-t border-border flex flex-wrap gap-1.5 overflow-x-auto items-center">
        <span className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1 shrink-0 px-1">
          <HelpCircle className="h-3.5 w-3.5 text-emerald-600" /> Tình huống phản biện:
        </span>
        {quickQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q.text)}
            disabled={isTyping}
            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-card hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-foreground border border-border/80 hover:border-emerald-400 transition-all truncate max-w-[280px] disabled:opacity-50 shadow-2xs hover:shadow-xs flex items-center gap-1.5"
            title={q.text}
          >
            <span>{q.label}</span>
          </button>
        ))}
      </div>

      {/* Input Form */}
      <div className="p-3 bg-card border-t border-border flex items-end gap-2">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập tình huống bị đoàn kiểm tra yêu cầu giải trình hoặc đòi xuất toán chi phí..."
          className="min-h-[44px] max-h-[120px] text-xs resize-none bg-muted/30 focus-visible:ring-emerald-500/30"
          rows={1}
        />
        <Button
          onClick={() => handleSend()}
          disabled={!input.trim() || isTyping}
          className="h-11 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shrink-0 rounded-xl"
        >
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
