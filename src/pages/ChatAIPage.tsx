import React, { useState, useRef, useEffect } from 'react';
import { Bot, SendHorizontal, Paperclip, Image as ImageIcon, Plus, MessageSquare, Trash2, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useSettingsStore } from '@/stores/settings-store';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export function ChatAIPage() {
  const { geminiApiKey } = useSettingsStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    '📋 Hướng dẫn hạch toán theo TT200',
    '🧾 Quy định hóa đơn điện tử mới nhất',
    '💰 Cách xử lý chênh lệch tỷ giá',
    '📊 Lập báo cáo tài chính cuối năm'
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiResponse = geminiApiKey 
        ? "Đây là câu trả lời mô phỏng từ AI. Trong môi trường thực tế, ứng dụng sẽ gọi Gemini API với key của bạn để trả về nội dung chính xác."
        : "Xin lỗi, vui lòng cấu hình Gemini API Key trong phần Cài đặt để sử dụng tính năng AI.";
      
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: aiResponse,
        timestamp: new Date()
      }]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] -mt-4 -mx-4 md:-mx-6 lg:-mx-8 overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      {/* Sidebar - Desktop Only */}
      <div className="hidden lg:flex w-72 flex-col border-r border-border bg-card">
        <div className="p-4 border-b border-border">
          <Button className="w-full gap-2 justify-start" onClick={() => setMessages([])}>
            <Plus className="h-4 w-4" /> Trò chuyện mới
          </Button>
        </div>
        <ScrollArea className="flex-1 p-3">
          <div className="space-y-2">
            {messages.length > 0 && (
              <div className="group flex items-center justify-between rounded-lg bg-muted px-3 py-2 text-sm cursor-pointer">
                <div className="flex items-center gap-2 truncate">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span className="truncate font-medium">Trò chuyện hiện tại</span>
                </div>
                <Trash2 className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity" onClick={(e) => { e.stopPropagation(); setMessages([]); }} />
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="p-4 border-t border-border text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
          <ShieldAlert className="h-3 w-3" /> Dữ liệu lưu trên thiết bị
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full bg-muted/20 relative">
        {!geminiApiKey && (
          <div className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 p-2 text-center text-sm border-b border-yellow-500/20">
            Chưa cấu hình API Key. <Link to="/cai-dat" className="underline font-medium">Vào Cài đặt</Link> để thiết lập.
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 md:p-6" ref={scrollRef}>
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center max-w-2xl mx-auto text-center space-y-8 animate-in fade-in duration-700">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Bot className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Xin chào! Tôi là trợ lý kế toán AI</h2>
                <p className="text-muted-foreground">Hãy hỏi tôi về nghị định, thông tư, chuẩn mực kế toán Việt Nam</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {suggestions.map((s, i) => (
                  <div 
                    key={i} 
                    className="p-4 border border-border rounded-xl bg-card hover:bg-muted cursor-pointer transition-colors text-sm text-left shadow-sm"
                    onClick={() => { setInput(s); setTimeout(() => document.getElementById('chat-input')?.focus(), 100); }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6 max-w-3xl mx-auto pb-4">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex w-full", msg.role === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[85%] rounded-2xl px-5 py-3.5 text-sm md:text-base leading-relaxed shadow-sm",
                    msg.role === 'user' 
                      ? "bg-primary text-primary-foreground rounded-br-sm" 
                      : "bg-card border border-border rounded-bl-sm"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex w-full justify-start">
                  <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-5 py-4 flex gap-1 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-background border-t border-border">
          <div className="max-w-3xl mx-auto relative flex items-end gap-2 bg-card border border-border rounded-2xl p-2 shadow-sm focus-within:ring-1 focus-within:ring-primary/50 transition-all">
            <div className="flex gap-1 pb-1 px-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground shrink-0 rounded-full hover:bg-muted">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground shrink-0 rounded-full hover:bg-muted hidden sm:inline-flex">
                <ImageIcon className="h-4 w-4" />
              </Button>
            </div>
            <Textarea
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập câu hỏi về kế toán..."
              className="min-h-[44px] max-h-32 border-0 focus-visible:ring-0 resize-none bg-transparent p-3 shadow-none text-base"
              rows={1}
            />
            <Button 
              size="icon" 
              className={cn("h-10 w-10 shrink-0 rounded-full mb-1 mr-1 transition-all", input.trim() ? "bg-primary" : "bg-muted text-muted-foreground")}
              onClick={handleSend}
              disabled={!input.trim()}
            >
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-center mt-2 text-[10px] text-muted-foreground">
            AI có thể mắc lỗi. Vui lòng kiểm chứng thông tin quan trọng.
          </div>
        </div>
      </div>
    </div>
  );
}
