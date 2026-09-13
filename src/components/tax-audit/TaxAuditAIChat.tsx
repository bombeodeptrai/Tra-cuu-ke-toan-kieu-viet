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
        content: "### 🛡️ TRỢ LÝ PHẢN BIỆN & BẢO VỆ CHI PHÍ THANH TRA THUẾ — CÔNG TY KIỂU VIỆT\n\nChào Ban Giám đốc và Phòng Kế toán Kiểu Việt! Tôi được nạp sẵn toàn bộ căn cứ pháp lý từ **kho 55 văn bản quy phạm pháp luật** (Luật Quản lý thuế 38/2019, Thông tư 96/2015, Nghị định 123/2020, Thông tư 80/2021, Quyết định 87/2025/QĐ-UBND Gia Lai...) và hệ thống kịch bản bảo vệ đặc thù:\n- **Xưởng chế biến gỗ & Nội thất công sở:** Định mức tiêu hao gỗ xẻ, sơn PU, hồ sơ lâm sản hợp pháp.\n- **Trạm trộn bê tông thương phẩm:** Cấp phối LAS-XD, hao hụt xe bồn, chứng chỉ chất lượng R28.\n- **Khai thác mỏ đá xây dựng:** Hệ số nở rời nổ mìn, Bảng giá tính thuế tài nguyên Gia Lai.\n- **Thi công xây lắp hạ tầng:** Trích trước TK 335, nhân công khoán 08/CK-TNCN, thuế vãng lai 1%.\n\n👉 **Hướng dẫn:** Bạn có thể xem ngay **8 Kịch Bản Mẫu** phía trên hoặc chọn câu hỏi gợi ý / nhập tình huống đoàn thanh tra đang chất vấn bên dưới để nhận lập luận phản biện tức thì!",
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

  const getOfflineDefenseResponse = (query: string): string => {
    const qLower = query.toLowerCase();
    if (qLower.includes("gỗ") || qLower.includes("sơn pu") || qLower.includes("mùn cưa") || qLower.includes("định mức")) {
      return "### 🛡️ PHƯƠNG ÁN BẢO VỆ: ĐỊNH MỨC NGUYÊN LIỆU GỖ & SƠN PU (XƯỞNG NỘI THẤT)\n\n**1. Căn cứ pháp lý cốt tử:**\n- **Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC:** Doanh nghiệp tự xây dựng, quản lý định mức tiêu hao nguyên liệu, vật liệu sử dụng vào sản xuất từ đầu năm/đầu kỳ và lưu tại doanh nghiệp. Không phải nộp cho cơ quan thuế!\n- **Chuẩn mực Kế toán số 02 (VAS 02) & Thông tư 200/2014:** Nguyên tắc tính giá thành sản xuất thực tế.\n\n**2. Lập luận đối đáp đanh thép trước Đoàn kiểm tra:**\n- Sản phẩm Kiểu Việt là đồ gỗ mỹ nghệ cao cấp, thiết kế phòng họp, hội trường theo đơn đặt hàng riêng, phôi thô phải qua tạo phôi, chà nhám, soi chỉ nên tỷ lệ hao hụt dăm bào mùn cưa 18% - 22% là hoàn toàn tất yếu.\n- Định mức được Tổng Giám đốc duyệt tại Quyết định số 02/QĐ-KV/2024 ngày 05/01/2024 trước khi tổ chức sản xuất.\n- Toàn bộ phế liệu mùn cưa thu hồi đều được bán có hóa đơn GTGT và hạch toán vào TK 711 nộp thuế TNDN 20% đầy đủ, không hề trốn thuế hay làm thất thoát ngân sách.\n\n**3. Hồ sơ cần xuất trình ngay:**\n- Quyết định ban hành định mức kỹ thuật nội bộ xưởng mộc năm 2024.\n- Lệnh sản xuất, Phiếu xuất kho gỗ xẻ TK 152 và Thẻ tính giá thành TK 154.\n- 12 Hóa đơn GTGT xuất bán phế liệu mùn cưa TK 711.\n\n**4. Kịch bản đối thoại:**\n*\"Thưa Trưởng đoàn, Khoản 2.3 Điều 4 Thông tư 96/2015 cho phép DN tự xây dựng định mức và lưu nội bộ. Sản phẩm của chúng tôi đóng theo thiết kế cong lượn, hao hụt mùn cưa thực tế 20.6% hoàn toàn khớp với định mức kỹ thuật đã phê duyệt. Đặc biệt phế liệu bán ra đã kê khai nộp thuế TK 711 đầy đủ, kính đề nghị Đoàn không loại chi phí này.\"*";
    }
    if (qLower.includes("bê tông") || qLower.includes("cấp phối") || qLower.includes("xe bồn")) {
      return "### 🛡️ PHƯƠNG ÁN BẢO VỆ: CẤP PHỐI BÊ TÔNG THƯƠNG PHẨM & HAO HỤT XE BỒN\n\n**1. Căn cứ pháp lý cốt tử:**\n- **Thông tư 12/2021/TT-BXD của Bộ Xây dựng (Bảng 2 Phụ lục II):** Định mức hao hụt bê tông thương phẩm vận chuyển xe bồn và bơm bê tông vào kết cấu cho phép từ **1.5% đến 2.5%**.\n- **Tiêu chuẩn Quốc gia TCVN 9382:2012:** Hướng dẫn chọn thành phần bê tông nặng.\n\n**2. Lập luận đối đáp đanh thép:**\n- Mức hao hụt 2.0% của Kiểu Việt nằm trọn vẹn trong khung 1.5% - 2.5% của Bộ Xây dựng. Địa hình Gia Lai nhiều đèo dốc hiểm trở, thời gian quay thùng kéo dài làm tăng độ dính bám thành bồn.\n- Cấp phối trạm trộn kiểm soát tự động bằng cân điện tử, định kỳ được Chi cục Tiêu chuẩn Đo lường Chất lượng kiểm định sai số dưới 1%.\n- Kết quả nén mẫu độc lập R28 tại các công trình đều đạt 102% - 115% mác thiết kế, chứng minh vật tư đưa vào mẻ trộn là 100% thực tế và đầy đủ.\n\n**3. Hồ sơ cần xuất trình:**\n- Thiết kế cấp phối của Phòng thí nghiệm LAS-XD được duyệt.\n- Nhật ký mẻ trộn tự động xuất từ phần mềm trạm trộn.\n- Kết quả thí nghiệm nén mẫu R28 của Trung tâm Kiểm định Chất lượng Xây dựng Gia Lai.";
    }
    if (qLower.includes("335") || qLower.includes("trích trước") || qLower.includes("giá vốn")) {
      return "### 🛡️ PHƯƠNG ÁN BẢO VỆ: CHI PHÍ TRÍCH TRƯỚC GIÁ VỐN TK 335\n\n**1. Căn cứ pháp lý cốt tử:**\n- **Điểm 2.20 Khoản 2 Điều 4 Thông tư 96/2015/TT-BTC:** Hoạt động xây dựng đã ghi nhận doanh thu thì ĐƯỢC PHÉP TRÍCH TRƯỚC GIÁ VỐN tương ứng với doanh thu đã ghi nhận.\n- **Chuẩn mực Kế toán số 01 (VAS 01):** Nguyên tắc phù hợp giữa doanh thu và chi phí.\n\n**2. Lập luận phản biện then chốt:**\n- Công trình đã được bàn giao đưa vào sử dụng trong năm và đã kê khai 100% Doanh thu tính thuế TNDN (TK 511). Do đó, bắt buộc phải trích trước giá vốn khối lượng hoàn thành tương ứng.\n- Toàn bộ hóa đơn của nhà thầu phụ đã được phát hành và nhận đầy đủ trước ngày 31/03 năm sau (thời hạn nộp hồ sơ quyết toán thuế TNDN) kèm UNC chuyển khoản ngân hàng.\n\n**3. Hồ sơ cần chuẩn bị:**\n- Biên bản nghiệm thu bàn giao A-B đưa vào sử dụng trong năm tài chính.\n- Hợp đồng thầu phụ kèm Biên bản nghiệm thu khối lượng giai đoạn.\n- Hóa đơn điện tử của thầu phụ có ngày lập trước 31/03 năm tiếp theo và UNC thanh toán.";
    }
    if (qLower.includes("tncn") || qLower.includes("nhân công") || qLower.includes("08/ck") || qLower.includes("thời vụ")) {
      return "### 🛡️ PHƯƠNG ÁN BẢO VỆ: THUẾ TNCN NHÂN CÔNG THỜI VỤ & CAM KẾT 08/CK-TNCN\n\n**1. Căn cứ pháp lý cốt tử:**\n- **Điểm i Khoản 1 Điều 25 Thông tư 111/2013/TT-BTC & Thông tư 80/2021/TT-BTC:** Cá nhân chỉ có duy nhất thu nhập tại một nơi và ước tính chưa đến mức phải nộp thuế (sau giảm trừ gia cảnh 132 triệu/năm) thì được làm Cam kết 08/CK-TNCN để tạm thời chưa khấu trừ 10%.\n\n**2. Lập luận bảo vệ:**\n- 100% lao động thời vụ ký cam kết đều ĐÃ ĐƯỢC CẤP MÃ SỐ THUẾ CÁ NHÂN trước thời điểm lập cam kết.\n- Doanh nghiệp căn cứ cam kết hợp pháp của người lao động để chi trả tiền công. Người lao động chịu trách nhiệm trước pháp luật về tính trung thực.\n- Kiểu Việt đã tổng hợp danh sách trên Phụ lục 05-2/BK-QTT-TNCN nộp Cục Thuế tỉnh Gia Lai đầy đủ, minh bạch.";
    }
    if (qLower.includes("đá") || qLower.includes("mỏ") || qLower.includes("tài nguyên") || qLower.includes("87")) {
      return "### 🛡️ PHƯƠNG ÁN BẢO VỆ: THUẾ TÀI NGUYÊN & SẢN LƯỢNG MỎ ĐÁ GIA LAI\n\n**1. Căn cứ pháp lý cốt tử:**\n- **Quyết định 87/2025/QĐ-UBND của UBND tỉnh Gia Lai:** Bảng giá tính thuế tài nguyên trên địa bàn tỉnh Gia Lai.\n- **Hồ sơ Thiết kế cơ sở mỏ đá:** Được Sở Xây dựng Gia Lai thẩm định, hệ số nở rời đá đập vỡ dao động từ 1.20 đến 1.35.\n\n**2. Lập luận khoa học:**\n- Thể tích đá dăm thành phẩm (140.000 m³) lớn hơn thể tích đá nổ mìn nguyên khai (112.500 m³) là do ĐẶC ĐIỂM CƠ LÝ NỞ RỜI CỦA ĐẤT ĐÁ (hệ số k = 1.244).\n- Kiểu Việt kê khai thuế tài nguyên đúng 100% sản lượng đá nguyên khai theo Quyết định 87/2025/QĐ-UBND và truyền dữ liệu camera trạm cân 24/24 về Sở TN&MT.";
    }
    if (qLower.includes("lãi vay") || qLower.includes("liên kết") || qLower.includes("132") || qLower.includes("ebitda")) {
      return "### 🛡️ PHƯƠNG ÁN BẢO VỆ: CHI PHÍ LÃI VAY VƯỢT TRẦN 30% EBITDA (NĐ 132/2020)\n\n**1. Căn cứ pháp lý cốt tử:**\n- **Khoản 3 Điều 16 Nghị định 132/2020/NĐ-CP:** Chi phí lãi vay không được trừ vượt trần 30% EBITDA ĐƯỢC CHUYỂN TIẾP SANG KỲ TÍNH THUẾ TIẾP THEO trong thời hạn không quá 05 năm liên tục.\n\n**2. Lập luận đàm phán:**\n- Nếu cơ quan thuế xác định khoản mượn tiền cổ đông cấu thành giao dịch liên kết, phần chi phí lãi vay vượt 30% EBITDA không bị loại bỏ vĩnh viễn mà được ghi nhận chuyển tiếp sang 5 năm sau để bù trừ vào chi phí khi EBITDA tăng trưởng.";
    }
    return "### 🛡️ PHƯƠNG ÁN BẢO VỆ PHÁP LÝ CHO DOANH NGHIỆP KIỂU VIỆT\n\n**1. Căn cứ quy định pháp luật áp dụng:**\n- **Luật Quản lý thuế số 38/2019/QH14 (Điều 16, 110, 111, 112):** Quyền giải trình bằng văn bản, quyền bảo lưu ý kiến trong biên bản kiểm tra và quyền khiếu nại trong 90 ngày.\n- **Thông tư 96/2015/TT-BTC (Điều 4):** 3 điều kiện tiên quyết để chi phí được trừ: Thực tế phát sinh liên quan đến HĐSXKD, có đủ hóa đơn chứng từ hợp pháp, có chứng từ thanh toán không dùng tiền mặt đối với hóa đơn từ 20 triệu trở lên.\n\n**2. Chiến thuật đàm phán 3 nhóm chi phí:**\n- **Nhóm 1 (Kiên quyết giữ vững):** Chi phí có đầy đủ hợp đồng, nghiệm thu A-B, hóa đơn điện tử và chứng từ ngân hàng. Trích dẫn nguyên văn điều luật bác bỏ ý kiến kiểm tra viên.\n- **Nhóm 2 (Thương lượng 50/50):** Chi phí có thiếu sót về hình thức (biên bản giao hàng chậm, thiếu chữ ký người nhận). Chủ động bổ sung hồ sơ chứng minh tính có thật của giao dịch.\n- **Nhóm 3 (Chủ động chấp nhận loại):** Chi phí quà biếu tặng, tiếp khách thiếu danh sách khách mời. Chấp nhận loại nhóm này để tạo thiện chí giữ vững các khoản tiền tỷ ở nhóm 1.\n\n**3. Nguyên tắc khi ký biên bản:**\nNếu đoàn kiểm tra vẫn bảo lưu ý kiến xuất toán trái quy định, Kế toán trưởng yêu cầu ghi rõ vào Biên bản: *\"Công ty Cổ phần Kiểu Việt bảo lưu ý kiến đối với nội dung... căn cứ theo Điều... và sẽ gửi văn bản giải trình chi tiết trong thời hạn luật định.\"* Tuyệt đối không ký đồng ý vào các kết luận không có căn cứ pháp lý!";
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
      setTimeout(() => {
        const offlineReply = getOfflineDefenseResponse(textToSend);
        setMessages(prev => 
          prev.map(m => m.id === assistantMsgId ? { ...m, content: offlineReply } : m)
        );
        setIsTyping(false);
      }, 500);
      return;
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
      const fallbackReply = getOfflineDefenseResponse(textToSend);
      setMessages(prev => 
        prev.map(m => m.id === assistantMsgId ? { 
          ...m, 
          content: fallbackReply + "\n\n*(Đã kích hoạt Kho tri thức phòng thủ nội bộ Kiểu Việt do API tạm gián đoạn)*" 
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
                  Kho Kịch Bản Phản Biện Thực Chiến (8 Điểm Nóng Trọng Yếu)
                </CardTitle>
                <Badge className="bg-emerald-500 text-slate-950 font-bold text-[10px]">Thực Chiến Kiểu Việt</Badge>
              </div>
              <CardDescription className="text-xs text-slate-300">
                Lập luận sắc bén, căn cứ điều luật chính xác và kịch bản đối đáp trực tiếp giúp kế toán trưởng bảo vệ tối đa chi phí hợp lý
              </CardDescription>
            </div>
            <Badge variant="outline" className="bg-white/10 text-emerald-300 border-white/20 text-xs">
              8 Kịch Bản Sẵn Sàng
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
                        onClick={() => navigate(`/thu-vien/${sc.decreeId}?dieu=${sc.articleNum}`)}
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
                <Badge className="bg-emerald-500 text-slate-950 font-bold text-[10px]">Online & Sẵn Sàng</Badge>
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
