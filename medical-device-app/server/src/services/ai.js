import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'dummy_key');

const systemInstruction = `Bạn hỗ trợ nhân viên thiết bị phòng khám và kinh doanh/đấu thầu Kiểu Việt. Phân biệt: dữ kiện đã kiểm chứng và chưa kiểm chứng.`;

export async function streamChatResponse({ sessionId, caseId, question, selectedDocumentVersionIds, tenantId }) {
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-pro',
    systemInstruction,
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
              answer: { type: SchemaType.STRING },
              assumptions: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
              findings: { type: SchemaType.ARRAY, items: { type: SchemaType.OBJECT, properties: { key: { type: SchemaType.STRING }, value: { type: SchemaType.STRING } } } },
              citations: { type: SchemaType.ARRAY, items: { type: SchemaType.OBJECT, properties: { docId: { type: SchemaType.STRING }, quote: { type: SchemaType.STRING }, explanation: { type: SchemaType.STRING } } } },
              missingEvidence: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
              nextActions: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
              coverage: { type: SchemaType.NUMBER }
          }
      }
    }
  });

  const prompt = `Question: ${question}\nCase ID: ${caseId}\nSelected Documents: ${selectedDocumentVersionIds ? selectedDocumentVersionIds.join(', ') : 'None'}`;
  const result = await model.generateContentStream(prompt);
  return result.stream;
}
