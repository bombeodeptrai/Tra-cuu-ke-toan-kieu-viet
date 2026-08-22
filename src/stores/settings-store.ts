import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SettingsState {
  geminiApiKey: string;
  sheetsApiKey: string;
  sheetsId: string;
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  itemsPerPage: number;
  isOnline: boolean;
  setGeminiKey: (key: string) => void;
  setSheetsKey: (key: string) => void;
  setSheetsId: (id: string) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  setItemsPerPage: (items: number) => void;
  setOnline: (status: boolean) => void;
  clearAllData: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      geminiApiKey: '',
      sheetsApiKey: '',
      sheetsId: '',
      theme: 'system',
      fontSize: 'medium',
      itemsPerPage: 12,
      isOnline: false,
      setGeminiKey: (geminiApiKey) => set({ geminiApiKey }),
      setSheetsKey: (sheetsApiKey) => set({ sheetsApiKey }),
      setSheetsId: (sheetsId) => set({ sheetsId }),
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),
      setOnline: (isOnline) => set({ isOnline }),
      clearAllData: () => set({
        geminiApiKey: '',
        sheetsApiKey: '',
        sheetsId: '',
        theme: 'system',
        fontSize: 'medium',
        itemsPerPage: 12,
        isOnline: false,
      }),
    }),
    {
      name: 'ketoan-settings',
    }
  )
);
