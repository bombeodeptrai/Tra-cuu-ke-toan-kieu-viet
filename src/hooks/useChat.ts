import { useCallback } from 'react';
import { useChatStore } from '@/stores/chat-store';
import { useSettingsStore } from '@/stores/settings-store';
import { useDecreeStore } from '@/stores/decree-store';
import { GeminiService } from '@/lib/ai/gemini';
import { SYSTEM_PROMPT, IMAGE_ANALYSIS_PROMPT, FILE_ANALYSIS_PROMPT } from '@/lib/ai/prompts';
import { retrievePublicAuditSources } from '@/lib/ai/audit-public-context';
import { ChatAttachment } from '@/types/chat';

export function useChat() {
  const chatStore = useChatStore();
  const { geminiApiKey } = useSettingsStore();
  const { decrees } = useDecreeStore();
  
  const sendMessage = useCallback(async (text: string, attachments?: ChatAttachment[]) => {
    if (!chatStore.currentSessionId) {
      chatStore.createSession();
    }

    // Give it a tiny bit of time to update state if it just created it,
    // though Zustand is sync, we can just grab from store.
    let sessionId = useChatStore.getState().currentSessionId;
    if (!sessionId) {
      sessionId = chatStore.sessions[0]?.id;
    }
    
    if (!sessionId) return; // Should not happen

    chatStore.addMessage(sessionId, {
      role: 'user',
      content: text,
      attachments
    });

    if (!geminiApiKey) {
      chatStore.addMessage(sessionId, {
        role: 'assistant',
        content: 'Vui lòng cấu hình API Key của Google Gemini trong phần Cài đặt để sử dụng tính năng AI.',
      });
      return;
    }

    chatStore.setAiTyping(true);

    try {
      chatStore.addMessage(sessionId, {
        role: 'assistant',
        content: '',
      });

      const gemini = new GeminiService(geminiApiKey);
      
      let finalPrompt = text;
      let imageData: string | undefined;
      let imageMimeType: string | undefined;

      if (attachments && attachments.length > 0) {
        const img = attachments.find(a => a.type === 'image');
        const file = attachments.find(a => a.type === 'file');
        
        // Use the first attachment (image or file) for Gemini inlineData
        const attachment = img || file;

        if (attachment && attachment.data) {
          imageData = attachment.data;
          imageMimeType = attachment.mimeType || (img ? 'image/jpeg' : 'application/pdf');
          finalPrompt = `${img ? IMAGE_ANALYSIS_PROMPT : FILE_ANALYSIS_PROMPT}\n\n${text}`;
        }
      } else {
        const sources = await retrievePublicAuditSources(text, decrees);
        finalPrompt = `${sources}\n\nCÂU HỎI CỦA KẾ TOÁN:\n${text}`;
      }

      const session = useChatStore.getState().sessions.find(s => s.id === sessionId);
      const history = session?.messages.slice(0, -2) || []; 
      
      const mappedHistory: { role: string; content: string; imageData?: string; imageMimeType?: string }[] = history.map(m => {
        let historyImageData: string | undefined;
        let historyImageMimeType: string | undefined;
        if (m.attachments && m.attachments.length > 0) {
          const att = m.attachments[0];
          if (att.data) {
            historyImageData = att.data;
            historyImageMimeType = att.mimeType || (att.type === 'image' ? 'image/jpeg' : 'application/pdf');
          }
        }
        return {
          role: m.role,
          content: m.content,
          imageData: historyImageData,
          imageMimeType: historyImageMimeType
        };
      });

      mappedHistory.push({
        role: 'user',
        content: finalPrompt,
        imageData,
        imageMimeType
      });

      let responseText = '';
      const generator = gemini.streamChat(mappedHistory, SYSTEM_PROMPT);
      
      for await (const chunk of generator) {
        responseText += chunk;
        chatStore.updateLastMessage(sessionId, responseText);
      }
      if (!responseText.trim()) {
        chatStore.updateLastMessage(sessionId, 'Gemini không trả về nội dung. Chưa có câu trả lời để sử dụng; hãy thử lại hoặc kiểm tra API key/kết nối.');
      }
    } catch (error: any) {
      chatStore.updateLastMessage(sessionId, `Không nhận được câu trả lời từ Gemini: ${error?.message || 'Lỗi kết nối không xác định'}. Nội dung này chưa được AI xác minh.`);
    } finally {
      chatStore.setAiTyping(false);
    }
  }, [geminiApiKey, decrees, chatStore]);

  const sendSuggestion = useCallback((suggestion: string) => {
    sendMessage(suggestion);
  }, [sendMessage]);

  return {
    ...chatStore,
    sendMessage,
    sendSuggestion,
    hasApiKey: !!geminiApiKey,
  };
}
