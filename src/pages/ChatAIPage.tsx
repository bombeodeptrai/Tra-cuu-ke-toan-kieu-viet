import React, { useState, useRef, useEffect } from 'react';
import { Bot, SendHorizontal, Paperclip, Image as ImageIcon, Plus, MessageSquare, Trash2, ShieldAlert, X, GitBranch, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useSettingsStore } from '@/stores/settings-store';
import { useChatStore } from '@/stores/chat-store';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useChat } from '@/hooks/useChat';
import { useToast } from '@/components/ui/use-toast';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { ChatAttachment } from '@/types/chat';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function ChatAIPage() {
  const { geminiApiKey } = useSettingsStore();
  const { sendMessage, isAiTyping, currentSessionId, sessions, createSession, branchSession, deleteSession, setCurrentSession } = useChat();
  const { toast } = useToast();
  const [input, setInput] = useState('');
  const [attachments, setAttachments] = useState<ChatAttachment[]>([]);
  const [copiedMsgId, setCopiedMsgId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const currentSession = sessions.find(s => s.id === currentSessionId);
  const displayMessages = currentSession?.messages || [];

  const handleBranchFromMessage = (msgId: string) => {
    if (!currentSessionId) return;
    const newId = branchSession(currentSessionId, msgId);
    toast({
      title: 'Đã phân nhánh cuộc trò chuyện 🌿',
      description: 'Đã sao chép các tin nhắn đến thời điểm này sang luồng hội thoại mới độc lập.',
    });
  };

  const handleCopyMessage = (msgId: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedMsgId(msgId);
    setTimeout(() => setCopiedMsgId(null), 2000);
  };

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
  }, [displayMessages, isAiTyping]);

  useEffect(() => {
    if (sessions.length === 0) {
      createSession();
    }
  }, [sessions, createSession]);

  const hasHandledNavStateRef = useRef(false);

  useEffect(() => {
    if (hasHandledNavStateRef.current) return;

    if (location.state?.sessionId) {
      hasHandledNavStateRef.current = true;
      const targetId = location.state.sessionId;
      setCurrentSession(targetId);

      if (location.state?.autoSend) {
        const targetSession = useChatStore.getState().sessions.find(s => s.id === targetId);
        if (targetSession && targetSession.messages.length === 1 && targetSession.messages[0].role === 'user') {
          const prompt = targetSession.messages[0].content;
          setTimeout(() => {
            sendMessage(prompt);
          }, 350);
        }
      }
      window.history.replaceState({}, document.title);
    } else if (location.state?.prefill && !input) {
      hasHandledNavStateRef.current = true;
      setInput(location.state.prefill);
      window.history.replaceState({}, document.title);
    }
  }, [location.key]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, isImage: boolean) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (isImage && !file.type.startsWith('image/')) {
      alert('Vui lòng chọn file hình ảnh!');
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      alert('Dung lượng file vượt quá 5MB!');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target?.result as string;
      const base64Data = data.split(',')[1];
      setAttachments(prev => [...prev, {
        type: file.type.startsWith('image/') ? 'image' : 'file',
        name: file.name,
        data: base64Data,
        mimeType: file.type,
        size: file.size,
        url: data,
      }]);
    };
    reader.readAsDataURL(file);
    e.target.value = ''; 
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        e.preventDefault(); // Prevent pasting image as text in textarea if supported
        const file = items[i].getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const data = event.target?.result as string;
            const base64Data = data.split(',')[1];
            setAttachments(prev => [...prev, {
              type: 'image',
              name: `Screenshot_${new Date().getTime()}.png`,
              data: base64Data,
              mimeType: file.type,
              size: file.size,
              url: data,
            }]);
          };
          reader.readAsDataURL(file);
        }
        break; // Only handle the first image if multiple are pasted
      }
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSend = () => {
    if (!input.trim() && attachments.length === 0) return;
    sendMessage(input, attachments.length > 0 ? attachments : undefined);
    setInput('');
    setAttachments([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const HistorySidebar = () => (
    <>
      <div className="p-4 border-b border-border">
        <Button className="w-full gap-2 justify-start" onClick={() => { createSession(); setIsMobileMenuOpen(false); }}>
          <Plus className="h-4 w-4" /> Trò chuyện mới
        </Button>
      </div>
      <ScrollArea className="flex-1 p-3">
        <div className="space-y-1.5">
          {sessions.map(session => (
            <div 
              key={session.id} 
              className={cn(
                "group flex items-center justify-between rounded-lg px-3 py-2 text-sm cursor-pointer transition-colors", 
                currentSessionId === session.id ? "bg-muted font-medium text-foreground" : "hover:bg-muted/50 text-muted-foreground"
              )} 
              onClick={() => { setCurrentSession(session.id); setIsMobileMenuOpen(false); }}
            >
              <div className="flex items-center gap-2 truncate flex-1 min-w-0 mr-1.5">
                {session.isBranch ? (
                  <GitBranch className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                ) : (
                  <MessageSquare className="h-4 w-4 text-primary shrink-0" />
                )}
                <span className="truncate">{session.title || 'Trò chuyện mới'}</span>
                {session.isBranch && (
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold px-1.5 py-0.2 rounded shrink-0">
                    Nhánh
                  </span>
                )}
              </div>
              <div className="flex items-center gap-0.5 shrink-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground hover:text-emerald-600 cursor-pointer"
                  title="Nhân bản / Phân nhánh phiên này"
                  onClick={(e) => {
                    e.stopPropagation();
                    branchSession(session.id);
                    toast({
                      title: 'Đã phân nhánh cuộc trò chuyện 🌿',
                      description: `Tạo luồng trao đổi mới từ phiên "${session.title}".`,
                    });
                  }}
                >
                  <GitBranch className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground hover:text-red-500 cursor-pointer"
                  title="Xóa phiên"
                  onClick={(e) => { e.stopPropagation(); deleteSession(session.id); }}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-border text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
        <ShieldAlert className="h-3 w-3" /> Dữ liệu lưu trên thiết bị
      </div>
    </>
  );

  return (
    <div className="flex flex-1 min-h-0 h-[calc(100dvh-10rem)] md:h-[calc(100dvh-8rem)] -mx-4 -mt-4 md:m-0 overflow-hidden md:rounded-xl border-y md:border border-border bg-background shadow-sm">
      {/* Sidebar - Desktop Only */}
      <div className="hidden lg:flex w-72 flex-col border-r border-border bg-card">
        <HistorySidebar />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full bg-muted/20 relative">
        {/* Mobile Header with History Trigger */}
        <div className="lg:hidden flex items-center justify-between p-3 border-b border-border bg-background">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">Trợ lý AI</span>
          </div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] sm:w-80 p-0 flex flex-col">
              <SheetHeader className="p-4 border-b text-left">
                <SheetTitle>Lịch sử trò chuyện</SheetTitle>
              </SheetHeader>
              <HistorySidebar />
            </SheetContent>
          </Sheet>
        </div>
        {!geminiApiKey && (
          <div className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 p-2 text-center text-sm border-b border-yellow-500/20">
            Chưa cấu hình API Key. <Link to="/cai-dat" className="underline font-medium">Vào Cài đặt</Link> để thiết lập.
          </div>
        )}

        {/* Branch Notice Banner */}
        {currentSession?.isBranch && (
          <div className="bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs px-4 py-2 border-b border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2 font-medium">
              <GitBranch className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>🌿 Luồng trao đổi phân nhánh độc lập — Thử nghiệm kịch bản giải trình chuyên sâu</span>
            </div>
            {currentSession.parentSessionId && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentSession(currentSession.parentSessionId!)}
                className="h-6 text-[11px] text-emerald-700 dark:text-emerald-300 hover:underline px-2 cursor-pointer"
              >
                Về phiên gốc ↩
              </Button>
            )}
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 md:p-6" ref={scrollRef}>
          {displayMessages.length === 0 ? (
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
              {displayMessages.map((msg) => (
                <div key={msg.id} className={cn("group flex w-full", msg.role === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn("flex flex-col", msg.role === 'user' ? "items-end" : "items-start", "max-w-[85%]")}>
                    <div className={cn(
                      "w-full rounded-2xl px-5 py-3.5 text-sm md:text-base leading-relaxed shadow-sm",
                      msg.role === 'user' 
                        ? "bg-primary text-primary-foreground rounded-br-sm" 
                        : "bg-card border border-border rounded-bl-sm prose prose-sm dark:prose-invert max-w-none"
                    )}>
                      {msg.attachments && msg.attachments.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2">
                          {msg.attachments.map((att, idx) => (
                            att.type === 'image' ? (
                              <img key={idx} src={att.url} alt={att.name} className="max-h-48 rounded-md object-contain bg-background/50" />
                            ) : (
                              <div key={idx} className="flex items-center gap-2 bg-background/20 p-2 rounded-md text-xs">
                                <Paperclip className="h-3 w-3" />
                                <span className="truncate max-w-[150px]">{att.name}</span>
                              </div>
                            )
                          ))}
                        </div>
                      )}
                      {msg.role === 'assistant' ? (
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      ) : (
                        msg.content
                      )}
                    </div>

                    {/* Thanh tác vụ: Phân nhánh & Sao chép */}
                    <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity px-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleBranchFromMessage(msg.id)}
                        className="h-6 px-2 text-[11px] text-muted-foreground hover:text-emerald-700 dark:hover:text-emerald-300 gap-1 cursor-pointer"
                        title="Phân nhánh cuộc trò chuyện từ thời điểm tin nhắn này"
                      >
                        <GitBranch className="h-3 w-3 text-emerald-600" />
                        <span>Phân nhánh 🌿</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopyMessage(msg.id, msg.content)}
                        className="h-6 px-2 text-[11px] text-muted-foreground hover:text-foreground gap-1 cursor-pointer"
                        title="Sao chép nội dung tin nhắn"
                      >
                        {copiedMsgId === msg.id ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                        <span>{copiedMsgId === msg.id ? 'Đã chép' : 'Sao chép'}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              {isAiTyping && (
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
          <div className="max-w-3xl mx-auto flex flex-col gap-2">
            {/* Attachment Previews */}
            {attachments.length > 0 && (
              <div className="flex flex-wrap gap-2 px-2">
                {attachments.map((att, idx) => (
                  <div key={idx} className="relative group rounded-md overflow-hidden bg-muted border border-border">
                    {att.type === 'image' ? (
                      <img src={att.url} alt={att.name} className="h-16 w-16 object-cover" />
                    ) : (
                      <div className="h-16 w-16 flex flex-col items-center justify-center p-1">
                        <Paperclip className="h-6 w-6 text-muted-foreground mb-1" />
                        <span className="text-[10px] truncate w-full text-center">{att.name}</span>
                      </div>
                    )}
                    <button 
                      onClick={() => removeAttachment(idx)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            <div className="relative flex items-end gap-2 bg-card border border-border rounded-2xl p-2 shadow-sm focus-within:ring-1 focus-within:ring-primary/50 transition-all">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={(e) => handleFileUpload(e, false)} 
                className="hidden" 
                accept=".pdf,.doc,.docx,.txt"
              />
              <input 
                type="file" 
                ref={imageInputRef} 
                onChange={(e) => handleFileUpload(e, true)} 
                className="hidden" 
                accept="image/*"
              />
              <div className="flex gap-1 pb-1 px-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-muted-foreground shrink-0 rounded-full hover:bg-muted"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-muted-foreground shrink-0 rounded-full hover:bg-muted hidden sm:inline-flex"
                  onClick={() => imageInputRef.current?.click()}
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </div>
              <Textarea
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                placeholder="Nhập câu hỏi về kế toán hoặc dán ảnh (Ctrl+V)..."
                className="min-h-[44px] max-h-32 border-0 focus-visible:ring-0 resize-none bg-transparent p-3 shadow-none text-base"
                rows={1}
              />
              <Button 
                size="icon" 
                className={cn("h-10 w-10 shrink-0 rounded-full mb-1 mr-1 transition-all", (input.trim() || attachments.length > 0) ? "bg-primary" : "bg-muted text-muted-foreground")}
                onClick={handleSend}
                disabled={!input.trim() && attachments.length === 0}
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
    </div>
  );
}
