import { create } from 'zustand';
export const useAuditWorkspace = create<{ caseId: string; select: (id: string) => void }>(set => ({
  caseId: localStorage.getItem('kv_active_audit_case') || '',
  select: caseId => { localStorage.setItem('kv_active_audit_case', caseId); set({ caseId }); },
}));
