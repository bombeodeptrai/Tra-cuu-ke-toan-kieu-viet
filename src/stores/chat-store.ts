import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChatSession, ChatMessage } from '@/types/chat';
import { generateId } from '@/lib/utils/format';

export interface ChatState {
  sessions: ChatSession[];
  currentSessionId: string | null;
  isAiTyping: boolean;
  createSession: (initialMessage?: string) => string;
  branchSession: (sessionId: string, messageId?: string, customTitle?: string) => string;
  createBranchFromPrompt: (title: string, initialUserPrompt: string) => string;
  deleteSession: (id: string) => void;
  setCurrentSession: (id: string | null) => void;
  addMessage: (sessionId: string, message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  updateLastMessage: (sessionId: string, content: string) => void;
  setAiTyping: (isTyping: boolean) => void;
  getCurrentSession: () => ChatSession | undefined;
  clearAllSessions: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      sessions: [],
      currentSessionId: null,
      isAiTyping: false,
      
      createSession: (initialMessage = 'Cuộc trò chuyện mới') => {
        const newSession: ChatSession = {
          id: generateId(),
          title: initialMessage,
          messages: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        
        set((state) => ({
          sessions: [newSession, ...state.sessions],
          currentSessionId: newSession.id,
        }));
        
        return newSession.id;
      },
      
      branchSession: (sessionId, messageId, customTitle) => {
        const sourceSession = get().sessions.find((s) => s.id === sessionId);
        if (!sourceSession) {
          return get().createSession(customTitle);
        }

        let messagesToClone = sourceSession.messages;
        if (messageId) {
          const idx = sourceSession.messages.findIndex((m) => m.id === messageId);
          if (idx !== -1) {
            messagesToClone = sourceSession.messages.slice(0, idx + 1);
          }
        }

        const baseTitle = sourceSession.title.replace(/^🌿\s*\[Nhánh\]\s*/, '').trim();
        const branchTitle = customTitle || `🌿 [Nhánh] ${baseTitle}`;

        const newSession: ChatSession = {
          id: generateId(),
          title: branchTitle,
          messages: messagesToClone.map((m) => ({
            ...m,
            id: generateId(),
          })),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          parentSessionId: sessionId,
          forkedFromMessageId: messageId,
          isBranch: true,
        };

        set((state) => ({
          sessions: [newSession, ...state.sessions],
          currentSessionId: newSession.id,
        }));

        return newSession.id;
      },

      createBranchFromPrompt: (title, initialUserPrompt) => {
        const newSession: ChatSession = {
          id: generateId(),
          title: `🌿 ${title}`,
          messages: [
            {
              id: generateId(),
              role: 'user',
              content: initialUserPrompt,
              timestamp: new Date().toISOString(),
            },
          ],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isBranch: true,
        };

        set((state) => ({
          sessions: [newSession, ...state.sessions],
          currentSessionId: newSession.id,
        }));

        return newSession.id;
      },
      
      deleteSession: (id) =>
        set((state) => {
          const newSessions = state.sessions.filter((s) => s.id !== id);
          return {
            sessions: newSessions,
            currentSessionId:
              state.currentSessionId === id
                ? newSessions.length > 0
                  ? newSessions[0].id
                  : null
                : state.currentSessionId,
          };
        }),
        
      setCurrentSession: (id) => set({ currentSessionId: id }),
      
      addMessage: (sessionId, message) =>
        set((state) => ({
          sessions: state.sessions.map((session) => {
            if (session.id === sessionId) {
              const newMessage: ChatMessage = {
                ...message,
                id: generateId(),
                timestamp: new Date().toISOString(),
              };
              
              const isFirstMessage = session.messages.length === 0;
              const title = isFirstMessage && message.role === 'user' 
                ? message.content.slice(0, 50) + (message.content.length > 50 ? '...' : '')
                : session.title;
              
              return {
                ...session,
                title,
                messages: [...session.messages, newMessage],
                updatedAt: new Date().toISOString(),
              };
            }
            return session;
          }),
        })),
        
      updateLastMessage: (sessionId, content) =>
        set((state) => ({
          sessions: state.sessions.map((session) => {
            if (session.id === sessionId && session.messages.length > 0) {
              const messages = [...session.messages];
              const lastIndex = messages.length - 1;
              messages[lastIndex] = {
                ...messages[lastIndex],
                content,
                timestamp: new Date().toISOString(),
              };
              
              return {
                ...session,
                messages,
                updatedAt: new Date().toISOString(),
              };
            }
            return session;
          }),
        })),
        
      setAiTyping: (isAiTyping) => set({ isAiTyping }),
      
      getCurrentSession: () => {
        const { sessions, currentSessionId } = get();
        return sessions.find((s) => s.id === currentSessionId);
      },
      
      clearAllSessions: () => set({ sessions: [], currentSessionId: null }),
    }),
    {
      name: 'ketoan-chat',
      partialize: (state) => ({
        sessions: state.sessions,
        currentSessionId: state.currentSessionId,
      }),
    }
  )
);
