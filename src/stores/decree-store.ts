import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Decree } from '@/types/decree';
import { INITIAL_DECREES } from '@/data/initial-decrees';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  pdf_url?: string;
  pdf_drive_id?: string;
  free_download_url?: string;
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
      decrees: INITIAL_DECREES,
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
          const basePath = import.meta.env.BASE_URL || '/';
          const localUrl = basePath.replace(/\/$/, '') + '/data/decrees.json?t=' + Date.now();
          
          let validData: Decree[] = [];
          
          // 1. Fetch from local JSON first (guaranteed 33+ high quality full docs)
          try {
            const localRes = await fetch(localUrl);
            if (localRes.ok) {
              const localData = await localRes.json();
              if (Array.isArray(localData) && localData.length > 0) {
                validData = localData;
                // IMMEDIATELY set local data to fix slow loading!
                set({ decrees: validData, isLoading: false, lastFetched: Date.now() });
              }
            }
          } catch (e) {
            console.warn('Could not load local decrees.json, falling back...', e);
          }

          // 2. Try to fetch/merge from Google Apps Script if available in background
          try {
            const API_URL = 'https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec';
            const res = await fetch(API_URL);
            if (res.ok) {
              const sheetData = await res.json();
              if (Array.isArray(sheetData) && sheetData.length > 0) {
                const sheetValid = sheetData.filter((d: any) => d.id && d.title);
                // Deduplicate sheet data in case the Google Sheet has multiple rows with the same ID
                const uniqueSheetMap = new Map();
                sheetValid.forEach((s: any) => {
                  uniqueSheetMap.set(s.id, s);
                });
                const uniqueSheetValid = Array.from(uniqueSheetMap.values());
                
                const localMap = new Map(validData.map(d => [d.id, d]));
                
                // Helper to loosely match Google Sheet IDs to Local IDs (e.g. tt99-2025 vs tt-99-2025)
                const findLocalMatch = (sheetItem: any) => {
                  if (localMap.has(sheetItem.id)) return localMap.get(sheetItem.id);
                  
                  // Try to match without hyphens
                  const normalizeId = (id: string) => id.replace(/-/g, '').toLowerCase();
                  const normalizedSheetId = normalizeId(sheetItem.id);
                  
                  const match = validData.find(d => 
                    normalizeId(d.id) === normalizedSheetId || 
                    (d.decree_number && sheetItem.decree_number && d.decree_number === sheetItem.decree_number)
                  );
                  return match;
                };

                const mergedSheet = uniqueSheetValid.map((s: any) => {
                  const local = findLocalMatch(s);
                  
                  const mergedItem = {
                    ...s,
                    ...(local || {}), // Local JSON takes precedence over Google Sheet for core curated fields
                    id: local ? local.id : s.id, // Prefer the standard local ID if matched
                    content_url: local?.content_url || s.content_url || `/data/content/${local ? local.id : s.id}.md`,
                    pdf_url: local?.pdf_url || s.pdf_url || '',
                  };
                  
                  // Auto-assign tax_field if missing based on title keywords
                  if (!mergedItem.tax_field || mergedItem.tax_field === 'khac') {
                    const t = (mergedItem.title || '').toLowerCase();
                    if (t.includes('quản lý thuế')) mergedItem.tax_field = 'quan-ly-thue';
                    else if (t.includes('gtgt') || t.includes('giá trị gia tăng')) mergedItem.tax_field = 'thue-gtgt';
                    else if (t.includes('tndn') || t.includes('thu nhập doanh nghiệp')) mergedItem.tax_field = 'thue-tndn';
                    else if (t.includes('tncn') || t.includes('thu nhập cá nhân')) mergedItem.tax_field = 'thue-tncn';
                    else if (t.includes('hóa đơn') || t.includes('chứng từ')) mergedItem.tax_field = 'hoa-don-dien-tu';
                    else if (t.includes('kế toán')) mergedItem.tax_field = 'ke-toan-dn';
                    else if (t.includes('khoáng sản') || t.includes('tài nguyên')) mergedItem.tax_field = 'khoang-san-tai-nguyen';
                    else if (t.includes('bhxh') || t.includes('lao động') || t.includes('bảo hiểm')) mergedItem.tax_field = 'bhxh-lao-dong';
                    else mergedItem.tax_field = 'khac'; // fallback
                  }
                  
                  return mergedItem;
                });
                
                const sheetIds = new Set(mergedSheet.map((d: any) => d.id));
                let merged = [...mergedSheet, ...validData.filter(d => !sheetIds.has(d.id))];
                // Lọc bỏ các bản giả định/fake bị đồng bộ nhầm từ Google Sheet
                const fakeIds = [
                  'nd-132-2026', 'nd-254-2026', 'tt-89-2026-tt-btc', 'nd-310-2025',
                  'tt58-2026', 'nd254-2026', 'luat-thue-108', 'luat-tncn-109', 
                  'tt-58-2026', 'nd-252-2026', 'luat-108-2025', 'luat-109-2025'
                ];
                merged = merged.filter(d => !fakeIds.includes(d.id));
                validData = merged;
                set({ decrees: validData, lastFetched: Date.now() });
              }
            }
          } catch (e) {
            console.log('Apps Script fetch skipped or offline, using local data');
          }

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
