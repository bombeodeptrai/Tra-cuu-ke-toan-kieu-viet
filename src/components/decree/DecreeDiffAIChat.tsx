import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, SendHorizontal, Sparkles, RotateCcw, MessageSquare, 
  HelpCircle, ChevronDown, ChevronUp, AlertCircle, CheckCircle2,
  Copy, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useSettingsStore } from '@/stores/settings-store';
import { GeminiService } from '@/lib/ai/gemini';
import { DecreeDiffData } from '@/data/diff-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface DecreeDiffAIChatProps {
  currentDiff: DecreeDiffData;
}

export function DecreeDiffAIChat({ currentDiff }: DecreeDiffAIChatProps) {
  const { geminiApiKey } = useSettingsStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const effectiveKey = geminiApiKey?.trim() || '';

  // Quick preset questions tailored to current document
  const quickQuestions = [
    `So sánh toàn diện tất cả các điểm thay đổi cốt lõi giữa hai văn bản này`,
    `Những điểm khác biệt về hạch toán kế toán và chi phí thuế cần lưu ý?`,
    `Rủi ro xử phạt hoặc thời hạn thủ tục nào Kiểu Việt cần đặc biệt chú ý?`,
    `Tác động trực tiếp đến hồ sơ nghiệm thu, thanh toán công trình của Kiểu Việt?`
  ];

  // Reset or initialize welcome message when switching documents
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: `👋 Xin chào! Tôi là **Trợ lý AI Đối chiếu Pháp lý Kiểu Việt** (được hỗ trợ bởi Gemini 3.6 Flash).\n\nTôi đã nạp đầy đủ cơ sở dữ liệu đối chiếu chuyên sâu gồm **${currentDiff.items.length} điểm thay đổi cốt lõi** giữa **${currentDiff.title}** và **${currentDiff.compareWith}**.\n\nBạn có thể nhấn vào các câu hỏi gợi ý bên dưới hoặc gõ câu hỏi bất kỳ để phân tích chi tiết điều khoản, số liệu %, thời hạn, bút toán định khoản và tác động thực tế tới **Công ty Cổ phần Kiểu Việt**.`,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [currentDiff.decreeId, currentDiff.items.length]);

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

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMsgId = 'usr_' + Date.now();
    const userMsg: Message = {
      id: userMsgId,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const botMsgId = 'bot_' + Date.now();
    const botMsg: Message = {
      id: botMsgId,
      role: 'assistant',
      content: '',
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, botMsg]);

    const systemPrompt = `Bạn là Trợ lý AI Pháp lý và Kế toán cấp cao tại Công ty Cổ phần Kiểu Việt (doanh nghiệp hàng đầu về xây dựng công trình giao thông, hạ tầng kỹ thuật và khai thác mỏ khoáng sản đất đá cát tại Việt Nam).

NHIỆM VỤ CỦA BẠN:
Bạn đang trực tiếp hỗ trợ người dùng kế toán so sánh, đối chiếu chi tiết, chuyên sâu và chuẩn xác giữa hai văn bản pháp luật:
- Văn bản mới/hiện hành: "${currentDiff.title}" (Thuộc lĩnh vực: ${currentDiff.category})
- Văn bản cũ/đối chiếu: "${currentDiff.compareWith}"
- Tóm tắt tổng quan: "${currentDiff.summary}"

CƠ SỞ DỮ LIỆU ĐỐI CHIẾU NỘI BỘ CHI TIẾT:
${currentDiff.items.map((it, idx) => `[Điểm ${idx + 1}] ${it.topic} (${it.type}):
- Căn cứ & quy định cũ: ${it.oldRule}
- Căn cứ & quy định mới: ${it.newRule}
- Tác động thực tế Kiểu Việt: ${it.impactNote}`).join('\n\n')}

QUY TẮC PHẢN HỒI BẮT BUỘC:
1. TRẢ LỜI CỰC KỲ CHI TIẾT VÀ CHÍNH XÁC:
   - Luôn trích dẫn rõ tên Điều, Khoản cụ thể của cả văn bản cũ và văn bản mới.
   - Nêu rõ số liệu định lượng: tỷ lệ %, số tiền phạt, số ngày thời hạn, ngưỡng giá trị hợp đồng.
   - Nếu liên quan đến kế toán: Nêu rõ bút toán định khoản Nợ TK / Có TK đối ứng.
2. PHÂN TÍCH TÁC ĐỘNG NGHIỆP VỤ CHO CÔNG TY CỔ PHẦN KIỂU VIỆT:
   - Gắn liền với thi công công trình, hồ sơ thanh quyết toán khối lượng Mẫu 03a, quản lý vật tư cát đá đất đắp tại Gia Lai/Tây Nguyên, hóa đơn điện tử và tiền lương công nhân.
3. PHONG CÁCH: Chuyên nghiệp, mạch lạc, dùng Markdown in đậm tiêu đề và bảng đối chiếu rõ ràng.
4. KHÔNG bịa số Điều/Khoản, tỷ lệ, thời hạn, mức phạt hoặc bút toán. Chỉ tài liệu đối chiếu hiển thị ở trên là dữ liệu bạn có; nếu chưa đủ căn cứ, nói rõ thiếu văn bản/toàn văn và đề nghị cung cấp, không giả làm đã tra cứu luật khác.
5. Tách rõ nội dung văn bản, suy luận nghiệp vụ và việc cần kế toán xác minh; nêu điều kiện áp dụng và kỳ hiệu lực khi dữ liệu có.
6. Nếu người dùng hỏi ngoài các điểm đối chiếu đã nạp, trả lời giới hạn theo dữ liệu có và không kết luận pháp lý chắc chắn.`;

    try {
      if (!effectiveKey) {
        throw new Error('Chưa có API key');
      }

      const gemini = new GeminiService(effectiveKey);
      const chatHistory = messages
        .filter(m => m.id !== 'welcome')
        .map(m => ({
          role: m.role,
          content: m.content
        }));

      chatHistory.push({ role: 'user', content: query });

      let accumulated = '';
      const stream = gemini.streamChat(chatHistory, systemPrompt);

      for await (const chunk of stream) {
        accumulated += chunk;
        setMessages(prev => 
          prev.map(m => m.id === botMsgId ? { ...m, content: accumulated } : m)
        );
      }
    } catch (err) {
      const errorText = err instanceof Error ? err.message : 'Kết nối Gemini thất bại.';
      const localResponse = errorText.includes('Chưa cấu hình API key')
        ? '**Chưa cấu hình API key Gemini.** Nhập API key của anh trong Cài đặt để gửi câu hỏi thật tới AI. Hệ thống không tạo câu trả lời giả khi AI chưa chạy.'
        : '**Gemini chưa trả lời được câu hỏi này.** Kiểm tra API key, hạn mức hoặc kết nối rồi thử lại. Nội dung bên dưới chưa được AI xác minh; hệ thống không thay bằng câu trả lời tự tạo.';
      setMessages(prev => 
        prev.map(m => m.id === botMsgId ? { ...m, content: localResponse } : m)
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="border-emerald-200 dark:border-emerald-800 shadow-sm overflow-hidden bg-gradient-to-b from-card to-emerald-50/20 dark:to-emerald-950/10">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-xs">
            <Bot className="h-5 w-5 text-emerald-100" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">Trợ Lý AI Đối Chiếu Cũ vs Mới</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/40 text-emerald-100 border border-emerald-400/30">
                Chuyên sâu Kiểu Việt
              </span>
            </div>
            <p className="text-[11px] text-emerald-100/90 truncate max-w-md sm:max-w-xl">
              Hỏi đáp tức thời mọi điều khoản: <strong>{currentDiff.title}</strong> đối chiếu <strong>{currentDiff.compareWith}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setMessages([
                {
                  id: 'welcome',
                  role: 'assistant',
                  content: `Đã làm mới phiên hỏi đáp về **${currentDiff.title}**. Bạn hãy nhập câu hỏi hoặc chọn gợi ý bên dưới.`,
                  timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
                }
              ]);
            }}
            title="Làm mới cuộc trò chuyện"
            className="h-7 px-2 text-white/80 hover:text-white hover:bg-white/10 text-xs"
          >
            <RotateCcw className="h-3.5 w-3.5 mr-1" />
            Làm mới
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-7 w-7 p-0 text-white/80 hover:text-white hover:bg-white/10"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {isExpanded && (
        <CardContent className="p-4 space-y-4">
          {/* Quick Preset Prompt Pills */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
              <Sparkles className="h-3 w-3 text-emerald-600" />
              Gợi ý câu hỏi phân tích nhanh:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  disabled={isTyping}
                  className="text-left text-xs bg-muted/70 hover:bg-emerald-100 hover:text-emerald-900 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-200 border border-border/80 rounded-lg px-2.5 py-1.5 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  💬 {q}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages Log */}
          <div className="border border-border/70 rounded-xl bg-background/60 p-3 max-h-[380px] overflow-y-auto space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-center gap-1.5 mb-1 px-1">
                  <span className="text-[10px] font-bold text-muted-foreground">
                    {m.role === 'user' ? 'Bạn' : 'Trợ lý AI Kiểu Việt'}
                  </span>
                  <span className="text-[10px] text-muted-foreground/60">{m.timestamp}</span>
                </div>

                <div
                  className={`relative group rounded-2xl px-4 py-2.5 max-w-[92%] sm:max-w-[85%] text-xs leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-tr-xs'
                      : 'bg-muted/40 border border-border/80 text-foreground rounded-tl-xs shadow-xs'
                  }`}
                >
                  {m.role === 'assistant' ? (
                    <div className="prose prose-xs dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-foreground">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {m.content || (isTyping ? '⏳ Đang tra cứu điều khoản và phân tích đối chiếu...' : '')}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  )}

                  {m.role === 'assistant' && m.content && (
                    <button
                      onClick={() => handleCopy(m.id, m.content)}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 bg-background/80 hover:bg-background border border-border rounded text-muted-foreground transition-opacity"
                      title="Sao chép câu trả lời"
                    >
                      {copiedId === m.id ? (
                        <Check className="h-3 w-3 text-emerald-600" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="flex items-end gap-2">
            <div className="flex-1 relative">
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Hỏi bất kỳ điểm khác nhau nào giữa ${currentDiff.title} và ${currentDiff.compareWith} (Nhấn Enter để gửi)...`}
                rows={2}
                disabled={isTyping}
                className="resize-none text-xs pr-10 min-h-[52px] focus-visible:ring-emerald-500"
              />
            </div>
            <Button
              onClick={() => handleSendMessage()}
              disabled={!input.trim() || isTyping}
              className="h-[52px] px-4 bg-emerald-600 hover:bg-emerald-700 text-white shrink-0 rounded-xl"
            >
              {isTyping ? (
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0.4s]" />
                </div>
              ) : (
                <SendHorizontal className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
