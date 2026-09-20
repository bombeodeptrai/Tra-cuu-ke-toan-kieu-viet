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
import { apiClient } from '@/lib/api/client';

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
  const abortControllerRef = useRef<AbortController | null>(null);

  // TODO: Get these from context or props
  const caseId = 'current-case-id';
  const caseRevisionId = 'current-revision-id';
  const selectedDocumentVersionIds: string[] = [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const q = textToSend || inputValue.trim();
    if (!q) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: q,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    try {
      const response = await apiClient.postStream('/api/chat/messages', {
        message: q,
        history: messages.map(m => ({ role: m.role, content: m.content })),
        caseId,
        caseRevisionId,
        selectedDocumentVersionIds
      }, {
        signal: controller.signal,
        headers: { 'Idempotency-Key': crypto.randomUUID() }
      });

      const botMsgId = `a-${Date.now()}`;
      setMessages((prev) => [...prev, {
        id: botMsgId,
        role: 'assistant',
        content: '',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      }]);

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      if (reader) {
        let content = '';
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          content += chunk;
          setMessages(prev => prev.map(m => m.id === botMsgId ? { ...m, content } : m));
        }
      }
    } catch (error: any) {
      if (error.name === 'AbortError') return;
      setMessages((prev) => [...prev, {
        id: `e-${Date.now()}`,
        role: 'assistant',
        content: 'Xin lỗi, đã xảy ra lỗi khi kết nối với máy chủ. Vui lòng thử lại sau.',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      if (abortControllerRef.current === controller) {
        setIsTyping(false);
      }
    }
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
                API Sẵn Sàng
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
            <span>AI đang phân tích và tổng hợp thông tin...</span>
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
