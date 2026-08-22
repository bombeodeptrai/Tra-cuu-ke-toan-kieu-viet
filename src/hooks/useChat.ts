import { useCallback } from 'react';
import { useChatStore } from '@/stores/chat-store';
import { useSettingsStore } from '@/stores/settings-store';
import { useDecreeStore } from '@/stores/decree-store';
import { GeminiService } from '@/lib/ai/gemini';
import { SYSTEM_PROMPT, IMAGE_ANALYSIS_PROMPT, FILE_ANALYSIS_PROMPT } from '@/lib/ai/prompts';
import { buildRAGContext } from '@/lib/ai/rag';
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
    let sessionId = chatStore.currentSessionId;
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

        if (img && img.data) {
          imageData = img.data;
          imageMimeType = img.mimeType || 'image/jpeg';
          finalPrompt = `${IMAGE_ANALYSIS_PROMPT}\n\n${text}`;
        } else if (file && file.data) {
          // Assuming we parse text out of file in real app. If raw text:
          finalPrompt = `${FILE_ANALYSIS_PROMPT}\n\n${file.data}\n\nCâu hỏi: ${text}`;
        }
      } else {
        finalPrompt = buildRAGContext(text, decrees);
      }

      const session = chatStore.sessions.find(s => s.id === sessionId);
      const history = session?.messages.slice(0, -2) || []; 
      
      const mappedHistory: { role: string; content: string; imageData?: string; imageMimeType?: string }[] = history.map(m => ({
        role: m.role,
        content: m.content
      }));

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
    } catch (error: any) {
      chatStore.addMessage(sessionId, {
        role: 'assistant',
        content: `Đã xảy ra lỗi: ${error.message}`,
      });
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
