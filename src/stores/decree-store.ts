import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Decree } from '@/types/decree';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface DecreeState {
  decrees: Decree[];
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  lastFetched: number | null;
  searchQuery: string;
  selectedCategory: string | null;
  selectedStatus: string | null;
  selectedYear: string | null;
  viewMode: 'grid' | 'list';
  bookmarks: string[];
  searchHistory: string[];
  setDecrees: (decrees: Decree[]) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string | null) => void;
  setSelectedStatus: (status: string | null) => void;
  setSelectedYear: (year: string | null) => void;
  setViewMode: (mode: 'grid' | 'list') => void;
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  addSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;
  getFilteredDecrees: () => Decree[];
  fetchDecrees: () => Promise<void>;
}

export const useDecreeStore = create<DecreeState>()(
  persist(
    (set, get) => ({
      decrees: [],
      categories: [],
      isLoading: false,
      error: null,
      lastFetched: null,
      searchQuery: '',
      selectedCategory: null,
      selectedStatus: null,
      selectedYear: null,
      viewMode: 'list',
      bookmarks: [],
      searchHistory: [],
      setDecrees: (decrees) => set({ decrees, lastFetched: Date.now() }),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),
      setSearchQuery: (searchQuery) => set({ searchQuery }),
      setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
      setSelectedStatus: (selectedStatus) => set({ selectedStatus }),
      setSelectedYear: (selectedYear) => set({ selectedYear }),
      setViewMode: (viewMode) => set({ viewMode }),
      toggleBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(id)
            ? state.bookmarks.filter((b) => b !== id)
            : [...state.bookmarks, id],
        })),
      isBookmarked: (id) => get().bookmarks.includes(id),
      addSearchHistory: (query) =>
        set((state) => {
          if (!query.trim()) return state;
          const filtered = state.searchHistory.filter((q) => q !== query);
          return { searchHistory: [query, ...filtered].slice(0, 10) };
        }),
      clearSearchHistory: () => set({ searchHistory: [] }),
      fetchDecrees: async () => {
        try {
          set({ isLoading: true, error: null });
          const API_URL = 'https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec';
          const res = await fetch(API_URL);
          if (!res.ok) throw new Error('Không thể kết nối đến Database');
          const data = await res.json();
          // Kiểm tra và format lại data nếu cần (loại bỏ lỗi hoặc các dòng trống)
          const validData = Array.isArray(data) ? data.filter(d => d.id && d.title) : [];
          set({ decrees: validData, isLoading: false, lastFetched: Date.now() });
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
        }
      },
      getFilteredDecrees: () => {
        const {
          decrees,
          searchQuery,
          selectedCategory,
          selectedStatus,
          selectedYear,
        } = get();
        
        return decrees.filter((decree) => {
          const matchesSearch =
            !searchQuery ||
            decree.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            decree.decree_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
            decree.summary.toLowerCase().includes(searchQuery.toLowerCase());
            
          const matchesCategory =
            !selectedCategory || decree.category === selectedCategory;
            
          const matchesStatus = !selectedStatus || decree.status === selectedStatus;
          
          const matchesYear =
            !selectedYear || decree.issued_date.startsWith(selectedYear);
            
          return matchesSearch && matchesCategory && matchesStatus && matchesYear;
        });
      },
    }),
    {
      name: 'ketoan-decrees',
      partialize: (state) => ({
        bookmarks: state.bookmarks,
        searchHistory: state.searchHistory,
      }),
    }
  )
);
