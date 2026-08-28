import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Note {
  id: string;
  decree_id: string;
  selected_text: string;
  user_note: string;
  timestamp: string;
}

export interface SearchHistory {
  id: string;
  keyword: string;
  timestamp: string;
}

interface NotesState {
  notes: Note[];
  searchHistory: SearchHistory[];
  addNote: (note: Omit<Note, 'id' | 'timestamp'>) => Promise<void>;
  deleteNote: (id: string) => void;
  addSearchHistory: (keyword: string) => Promise<void>;
  clearSearchHistory: () => void;
}

const GAS_URL = 'https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec';

export const useNotesStore = create<NotesState>()(
  persist(
    (set, get) => ({
      notes: [],
      searchHistory: [],

      addNote: async (notePayload) => {
        const newNote: Note = {
          ...notePayload,
          id: crypto.randomUUID(),
          timestamp: new Date().toISOString(),
        };

        set((state) => ({
          notes: [newNote, ...state.notes],
        }));

        // Background sync to Google Sheets
        try {
          await fetch(GAS_URL, {
            method: 'POST',
            body: JSON.stringify({
              action: 'save_note',
              decree_id: newNote.decree_id,
              selected_text: newNote.selected_text,
              user_note: newNote.user_note,
            }),
          });
        } catch (e) {
          console.warn('Failed to sync note to Google Sheets', e);
        }
      },

      deleteNote: (id) => {
        set((state) => ({
          notes: state.notes.filter((n) => n.id !== id),
        }));
      },

      addSearchHistory: async (keyword) => {
        if (!keyword.trim()) return;
        
        const newEntry: SearchHistory = {
          id: crypto.randomUUID(),
          keyword,
          timestamp: new Date().toISOString(),
        };

        // Avoid exact duplicates back to back
        const current = get().searchHistory;
        if (current.length > 0 && current[0].keyword === keyword) {
          return;
        }

        set((state) => ({
          searchHistory: [newEntry, ...state.searchHistory].slice(0, 50), // Keep last 50
        }));

        // Background sync to Google Sheets
        try {
          await fetch(GAS_URL, {
            method: 'POST',
            body: JSON.stringify({
              action: 'save_search',
              keyword: keyword,
            }),
          });
        } catch (e) {
          console.warn('Failed to sync search to Google Sheets', e);
        }
      },

      clearSearchHistory: () => {
        set({ searchHistory: [] });
      }
    }),
    {
      name: 'kv-notes-storage',
    }
  )
);
