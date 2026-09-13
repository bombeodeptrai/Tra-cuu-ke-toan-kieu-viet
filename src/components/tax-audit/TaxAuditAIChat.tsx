import React, { useState, useRef, useEffect } from "react";
import {
  Bot, SendHorizontal, Sparkles, RotateCcw, MessageSquare,
  HelpCircle, ChevronDown, ChevronUp, AlertCircle, CheckCircle2,
  Copy, Check, ShieldCheck, Scale, FileText, Building2, BookOpen, Layers,
  ExternalLink, ArrowRight, FolderArchive, Flame
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useSettingsStore } from "@/stores/settings-store";
import { GeminiService } from "@/lib/ai/gemini";
import { AUDIT_SYSTEM_PROMPT, retrievePublicAuditSources } from "@/lib/ai/audit-public-context";
import { useDecreeStore } from "@/stores/decree-store";
import { DEFENSE_SCENARIOS, DefenseScenario } from "@/data/tax-audit-defense-scenarios";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export function TaxAuditAIChat() {
  const navigate = useNavigate();
  const { geminiApiKey } = useSettingsStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedScenarioId, setCopiedScenarioId] = useState<string | null>(null);
  const [expandedScenarioId, setExpandedScenarioId] = useState<string | null>(DEFENSE_SCENARIOS[0].id);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const effectiveKey = geminiApiKey?.trim();
  const decrees = useDecreeStore(s => s.decrees);

  const quickQuestions = [
    { label: "🪑 Định mức gỗ & Sơn PU", text: "Đoàn kiểm tra đòi bóc chi phí gỗ nguyên liệu và sơn PU xưởng mộc Nội thất Kiểu Việt vì nghi ngờ tỷ lệ hao hụt mùn cưa và định mức tiêu hao, lập luận giải trình ra sao?" },
    { label: "🪵 Nguồn gốc lâm sản gỗ", text: "Cơ quan thuế yêu cầu chứng minh nguồn gốc lâm sản hợp pháp cho các lô gỗ xẻ đóng bàn ghế hội trường, phòng làm việc theo TT 26/2025/TT-BNNPTNT và NĐ 102/2020, hồ sơ gồm những gì?" },
    { label: "🧱 Cấp phối trạm Bê tông", text: "Đoàn kiểm tra soi định mức cấp phối xi măng trạm trộn Bê tông thương phẩm Kiểu Việt và đòi loại chi phí hao hụt xe bồn 2.0%, cách đối chiếu kết quả thí nghiệm LAS và bảo vệ?" },
    { label: "🏗️ Trích trước TK 335", text: "Đoàn kiểm tra đòi bóc chi phí trích trước TK 335 của công trình xây lắp và dự án nội thất đã nghiệm thu bàn giao nhưng chưa có đủ hóa đơn thầu phụ, bảo vệ thế nào theo Thông tư 96/2015?" },
    { label: "👷 Nhân công thời vụ xưởng & mỏ", text: "Đoàn thanh tra muốn truy thu 10% thuế TNCN thợ mộc gia công gỗ và nhân công trạm trộn bê tông, cách dùng bản cam kết 08/CK-TNCN và hợp đồng khoán việc bảo vệ?" },
    { label: "💰 Vay vốn vượt 30% EBITDA", text: "Đoàn kiểm tra khống chế chi phí lãi vay vượt trần 30% EBITDA theo Nghị định 132/2020 do công ty mượn tiền cổ đông/giám đốc, cách xử lý chuyển tiếp sang kỳ sau?" },
    { label: "🏛️ Thuế GTGT vãng lai 1%", text: "Giải trình phân bổ thuế GTGT 1% vãng lai ngoại tỉnh (Kon Tum, Đắk Lắk) theo Điều 13 Thông tư 80/2021 và chứng minh hợp đồng lắp đặt nội thất không thuộc diện nộp vãng lai?" },
    { label: "⛰️ Mỏ đá Gia Lai & QĐ 87", text: "Đoàn kiểm tra đối chiếu sản lượng đá nổ mìn nguyên khai và đá dăm thành phẩm qua trạm nghiền, truy thu thuế tài nguyên theo Quyết định 87/2025/QĐ-UBND Gia Lai, lập luận ra sao?" }
  ];

  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "Nhập câu hỏi và kỳ cần đối chiếu. AI chỉ sử dụng nguồn luật tìm được và nội dung anh chủ động gửi; không tự đọc chứng từ nội bộ. Các tình huống bên dưới là hướng dẫn chuẩn bị, chưa phải sự kiện đã xảy ra ở Kiểu Việt.",
        timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyScenario = (scenario: DefenseScenario) => {
    const fullText = `📌 TÌNH HUỐNG TRANH CHẤP: ${scenario.title}\n⚠️ NGUY CƠ: ${scenario.threat}\n⚖️ CĂN CỨ PHÁP LÝ: ${scenario.legalReference}\n\n🛡️ CÁC LẬP LUẬN BẢO VỆ CỐT TỬ:\n${scenario.keyArguments.map((arg, idx) => `${idx + 1}. ${arg}`).join("\n")}\n\n📂 HỒ SƠ GỐC BẮT BUỘC XUẤT TRÌNH:\n${scenario.requiredDossiers.map(doc => `- ${doc}`).join("\n")}\n\n🗣️ KỊCH BẢN ĐỐI ĐÁP TRỰC TIẾP VỚI ĐOÀN KIỂM TRA:\n"${scenario.dialogueScript}"`;
    navigator.clipboard.writeText(fullText);
    setCopiedScenarioId(scenario.id);
    setTimeout(() => setCopiedScenarioId(null), 2000);
  };

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || input.trim();
    if (!textToSend || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!questionText) setInput("");
    setIsTyping(true);

    const assistantMsgId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMsgId,
      role: "assistant",
      content: "",
      timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages(prev => [...prev, assistantMessage]);

    if (!effectiveKey) {
      setMessages(prev=>prev.map(m=>m.id===assistantMsgId?{...m,content:'Chưa cấu hình API key nên chưa có câu trả lời AI. Có thể đọc hướng dẫn và tạo hồ sơ nội bộ; ứng dụng không tạo câu trả lời giả thay cho dịch vụ.'}:m));
      setIsTyping(false);return;
    }
    const systemPrompt = AUDIT_SYSTEM_PROMPT;
    const chatHistory = [...messages, userMessage].map(m => ({
      role: m.role,
      content: m.content
    }));

    try {
      const sources = await retrievePublicAuditSources(textToSend, decrees);
      chatHistory[chatHistory.length - 1].content = "NGUỒN LUẬT CÔNG KHAI:\n" + sources + "\nCÂU HỎI:\n" + textToSend;
      const gemini = new GeminiService(effectiveKey);
      let accumulatedText = "";

      for await (const chunk of gemini.streamChat(chatHistory, systemPrompt)) {
        accumulatedText += chunk;
        setMessages(prev =>
          prev.map(m => m.id === assistantMsgId ? { ...m, content: accumulatedText } : m)
        );
      }
      if (!accumulatedText.trim()) throw new Error("Dịch vụ không trả nội dung.");
    } catch (err: any) {

      setMessages(prev =>
        prev.map(m => m.id === assistantMsgId ? {
          ...m,
          content: "Không nhận được kết quả từ dịch vụ AI. Chưa có phân tích hoàn tất; kiểm tra cấu hình hoặc thử lại. Các hồ sơ đã lưu vẫn giữ nguyên."
        } : m)
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "👋 Cuộc trò chuyện đã được đặt lại. Hãy chọn kịch bản mẫu ở trên hoặc gõ tình huống thanh tra thực tế!",
        timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  };

  return (
    <div className="space-y-6">
      {/* PHẦN 1: KHO 8 KỊCH BẢN PHẢN BIỆN THỰC CHIẾN MẪU */}
      <Card className="border-border shadow-xs overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white p-5 border-b border-border">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                  <Flame className="h-4 w-4" />
                </div>
                <CardTitle className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  Hồ sơ và cách làm rõ từng tình huống ({DEFENSE_SCENARIOS.length} quy trình)
                </CardTitle>
                <Badge className="bg-emerald-500 text-slate-950 font-bold text-[10px]">Thực Chiến Kiểu Việt</Badge>
              </div>
              <CardDescription className="text-xs text-slate-300">
                Lập luận sắc bén, căn cứ điều luật chính xác và kịch bản đối đáp trực tiếp giúp kế toán trưởng bảo vệ tối đa chi phí hợp lý
              </CardDescription>
            </div>
            <Badge variant="outline" className="bg-white/10 text-emerald-300 border-white/20 text-xs">
              {DEFENSE_SCENARIOS.length} hướng dẫn tình huống
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DEFENSE_SCENARIOS.map((sc, idx) => {
              const isExpanded = expandedScenarioId === sc.id;
              return (
                <div
                  key={sc.id}
                  className={`rounded-xl border transition-all ${
                    isExpanded
                      ? "border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20 shadow-xs"
                      : "border-border bg-card hover:border-emerald-300"
                  }`}
                >
                  <div className="p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-black bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded">
                            #{idx + 1}
                          </span>
                          <Badge variant="outline" className="text-[10px]">{sc.category}</Badge>
                        </div>
                        <h4 className="font-bold text-xs sm:text-sm text-foreground leading-snug">
                          {sc.title}
                        </h4>
                      </div>
                    </div>

                    <div className="bg-red-50/50 dark:bg-red-950/20 p-2 rounded-lg border border-red-100 dark:border-red-900/40 text-[11px] text-red-900 dark:text-red-200">
                      <strong>⚠️ Nguy cơ:</strong> {sc.threat}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-border/50">
                      <button
                        onClick={() => navigate(`/thu-vien/${sc.decreeId}${sc.articleNum ? `?dieu=${sc.articleNum}` : ""}`)}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10.5px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer"
                      >
                        <BookOpen className="h-3 w-3 text-emerald-600" />
                        <span>{sc.decreeLabel}</span>
                        <ExternalLink className="h-2.5 w-2.5 opacity-70" />
                      </button>

                      <div className="flex items-center gap-1.5 ml-auto">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopyScenario(sc)}
                          className="h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground"
                          title="Sao chép kịch bản"
                        >
                          {copiedScenarioId === sc.id ? <Check className="h-3 w-3 text-emerald-600 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                          {copiedScenarioId === sc.id ? "Đã chép" : "Chép"}
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setExpandedScenarioId(isExpanded ? null : sc.id)}
                          className="h-7 px-2.5 text-[11px] font-semibold"
                        >
                          {isExpanded ? "Thu gọn" : "Xem chi tiết"}
                          {isExpanded ? <ChevronUp className="h-3 w-3 ml-1" /> : <ChevronDown className="h-3 w-3 ml-1" />}
                        </Button>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="pt-3 border-t border-border/60 space-y-3 animate-in fade-in duration-150 text-xs">
                        <div className="space-y-1.5">
                          <div className="font-bold text-foreground flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
                            <Scale className="h-3.5 w-3.5" />
                            <span>Lập luận bảo vệ cốt tử:</span>
                          </div>
                          <ul className="list-decimal pl-4 space-y-1 text-muted-foreground text-[11.5px] leading-relaxed">
                            {sc.keyArguments.map((arg, aIdx) => (
                              <li key={aIdx}>{arg}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-blue-50/40 dark:bg-blue-950/20 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40 space-y-1">
                          <div className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1 text-[11px]">
                            <FolderArchive className="h-3 w-3 text-blue-600" />
                            <span>Hồ sơ gốc bắt buộc xuất trình ngay:</span>
                          </div>
                          <ul className="list-disc pl-4 space-y-0.5 text-blue-950 dark:text-blue-100 text-[11px]">
                            {sc.requiredDossiers.map((doc, dIdx) => (
                              <li key={dIdx}>{doc}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-emerald-50/50 dark:bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-800/60 space-y-1 text-[11px]">
                          <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1">
                            <MessageSquare className="h-3 w-3 text-emerald-600" />
                            <span>Kịch bản đối đáp trực tiếp với Trưởng đoàn:</span>
                          </div>
                          <p className="italic text-emerald-950 dark:text-emerald-100 leading-relaxed font-serif">
                            \"{sc.dialogueScript}\"
                          </p>
                        </div>

                        <Button
                          onClick={() => handleSend(`Tôi cần kịch bản chi tiết và các phương án dự phòng khi đoàn kiểm tra chất vấn nội dung sau:\n${sc.title}\nNguy cơ: ${sc.threat}\nCăn cứ: ${sc.legalReference}`)}
                          className="w-full h-8 text-xs bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5 rounded-lg"
                        >
                          <Bot className="h-3.5 w-3.5" />
                          <span>Nạp kịch bản này vào Trợ lý AI để phản biện sâu hơn</span>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* PHẦN 2: KHUNG CHAT PHẢN BIỆN AI TRỰC TIẾP */}
      <div className="bg-card rounded-2xl border border-border shadow-xs overflow-hidden flex flex-col h-[700px]">
        <div className="p-4 bg-slate-900 text-white border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                Trực Chiến AI Phản Biện & Bảo Vệ Chi Phí
                <Badge className="bg-emerald-500 text-slate-950 font-bold text-[10px]">{effectiveKey ? 'Đã cấu hình API' : 'Chưa cấu hình API'}</Badge>
              </h3>
              <p className="text-[11px] text-slate-300">
                Nhập câu hỏi hoặc chọn kịch bản để nhận phương án đối đáp, căn cứ điều khoản và danh mục hồ sơ gốc
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

        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-muted/10">
          {messages.map((msg) => {
            const isUser = msg.role === "user";
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
              >
                {!isUser && (
                  <div className="h-8 w-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-1">
                    <Bot className="h-4 w-4" />
                  </div>
                )}

                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-xs relative group ${
                    isUser
                      ? "bg-emerald-600 text-white rounded-tr-none"
                      : "bg-card border border-border text-foreground rounded-tl-none"
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

                  <div className={`text-[10px] mt-2 opacity-60 text-right ${isUser ? "text-emerald-100" : "text-muted-foreground"}`}>
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

        <div className="p-2.5 bg-muted/30 border-t border-border flex flex-wrap gap-1.5 overflow-x-auto items-center">
          <span className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1 shrink-0 px-1">
            <HelpCircle className="h-3.5 w-3.5 text-emerald-600" /> Gợi ý tình huống:
          </span>
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q.text)}
              disabled={isTyping}
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-card hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-foreground border border-border/80 hover:border-emerald-400 transition-all truncate max-w-[280px] disabled:opacity-50 shadow-2xs hover:shadow-xs flex items-center gap-1.5 cursor-pointer"
              title={q.text}
            >
              <span>{q.label}</span>
            </button>
          ))}
        </div>

        <div className="p-3 bg-card border-t border-border flex items-end gap-2">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Nhập tình huống chất vấn của đoàn kiểm tra hoặc khoản chi phí bị dọa xuất toán..."
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
    </div>
  );
}
