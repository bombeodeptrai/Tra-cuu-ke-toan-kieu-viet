import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'dummy_key');

const systemInstruction = `Bạn hỗ trợ nhân viên thiết bị phòng khám và kinh doanh/đấu thầu Kiểu Việt. Phân biệt: dữ kiện đã kiểm chứng và chưa kiểm chứng.`;

export async function streamChatResponse({ sessionId, caseId, question, history, selectedDocumentVersionIds, tenantId }) {
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-pro',
    systemInstruction,
    generationConfig: {
      responseMimeType: "text/plain",
    }
  });

  
  let chatHistoryStr = '';
  if (history && Array.isArray(history)) {
    chatHistoryStr = history.map(h => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.content}`).join('\n');
  }
  const prompt = `Lịch sử chat:\n${chatHistoryStr}\n\nQuestion: ${question}\nCase ID: ${caseId}\nSelected Documents: ${selectedDocumentVersionIds ? selectedDocumentVersionIds.join(', ') : 'None'}`;

  const result = await model.generateContentStream(prompt);
  return result.stream;
}
