import { useEffect, useCallback, useMemo } from 'react';
import { useDecreeStore } from '@/stores/decree-store';
import { useSettingsStore } from '@/stores/settings-store';
import { GoogleSheetsService } from '@/lib/google/sheets';
import Fuse from 'fuse.js';

export function useDecrees(
  searchQuery: string = '',
  categoryFilter: string = 'all',
  statusFilter: string = 'all',
  page: number = 1,
  pageSize: number = 10
) {
  const store = useDecreeStore();
  const { sheetsApiKey, sheetsId, setOnline } = useSettingsStore();
  
  const loadDecrees = useCallback(async () => {
    store.setLoading(true);
    try {
      if (sheetsApiKey && sheetsId) {
        const service = new GoogleSheetsService(sheetsApiKey, sheetsId);
        const fetchedDecrees = await service.fetchDecrees();
        store.setDecrees(fetchedDecrees);
        setOnline(true);
      } else {
        await store.fetchDecrees();
        setOnline(false);
      }
    } catch (error) {
      console.error('Failed to fetch from Sheets, using static data:', error);
      await store.fetchDecrees();
      setOnline(false);
    } finally {
      store.setLoading(false);
    }
  }, [sheetsApiKey, sheetsId, store.fetchDecrees, setOnline]);

  useEffect(() => {
    loadDecrees();
  }, [loadDecrees]);

  const filteredData = useMemo(() => {
    let result = store.decrees;

    if (categoryFilter !== 'all') {
      result = result.filter(d => d.category === categoryFilter);
    }

    if (statusFilter !== 'all') {
      result = result.filter(d => d.status === statusFilter);
    }

    if (searchQuery) {
      const fuse = new Fuse(result, {
        keys: ['title', 'decree_number', 'summary'],
        threshold: 0.3
      });
      result = fuse.search(searchQuery).map(r => r.item);
    }

    return result;
  }, [store.decrees, searchQuery, categoryFilter, statusFilter]);

  const paginatedDecrees = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, page, pageSize]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  return {
    ...store,
    refresh: loadDecrees,
    filteredDecrees: paginatedDecrees,
    totalPages,
    totalItems: filteredData.length
  };
}
