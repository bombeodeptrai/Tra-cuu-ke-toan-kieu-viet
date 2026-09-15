import { create } from 'zustand';
import type { Pillar } from '@/types/tax-audit';
import type { IssueStatus } from '@/types/audit-issues';

export interface AuditIssueFilterState {
  selectedCategory: string; // 'all' | 'unbilled' | 'below_cost' | 'stock_mismatch' | 'payment_ar' | 'wip_cost' | 'other'
  selectedPillar: Pillar | 'all';
  statusFilter: IssueStatus | 'all';
  selectedIssueId: string | null;
  activeTab: 'dossier' | 'questions' | 'reconcile' | 'causes' | 'solution' | 'report';
  
  setSelectedCategory: (cat: string) => void;
  setSelectedPillar: (p: Pillar | 'all') => void;
  setStatusFilter: (s: IssueStatus | 'all') => void;
  setSelectedIssueId: (id: string | null) => void;
  setActiveTab: (tab: 'dossier' | 'questions' | 'reconcile' | 'causes' | 'solution' | 'report') => void;
}

export const useAuditIssueStore = create<AuditIssueFilterState>((set) => ({
  selectedCategory: 'all',
  selectedPillar: 'all',
  statusFilter: 'all',
  selectedIssueId: null,
  activeTab: 'dossier',

  setSelectedCategory: (cat) => set({ selectedCategory: cat }),
  setSelectedPillar: (p) => set({ selectedPillar: p }),
  setStatusFilter: (s) => set({ statusFilter: s }),
  setSelectedIssueId: (id) => set({ selectedIssueId: id, activeTab: 'dossier' }),
  setActiveTab: (tab) => set({ activeTab: tab })
}));
