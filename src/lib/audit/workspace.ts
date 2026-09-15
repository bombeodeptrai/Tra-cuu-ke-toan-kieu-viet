import Dexie, { type Table } from 'dexie';
import type { Pillar } from '@/types/tax-audit';

export interface CaseRecord {
  id: string; name: string; entity: string; taxCode: string; periods: string;
  auditMonth: string; prepDate: string; decision: string; authority: string;
  checked: Record<string, boolean>; risk: Record<string, boolean>;
}
export interface EvidenceRecord {
  id: string; caseId: string; title: string; pillar: Pillar; reference: string;
  date: string; location: string; kind: 'file' | 'paper' | 'drive';
  blob?: Blob; fileName?: string; hash?: string; verifiedBy: string; verifiedAt: string;
}
export interface WorkRecord {
  id: string; caseId: string; kind: 'task' | 'request'; title: string; pillar: Pillar | 'unassigned';
  owner: string; deadline: string; requestedBy: string; receivedAt: string;
  status: 'open' | 'preparing' | 'submitted' | 'closed' | 'not_applicable'; evidenceIds: string[];
  response: string; receipt: string; submittedAt: string;
  procedureId?: string;
  deliveries: { at: string; response: string; files: { id: string; title: string; hash?: string; location: string }[] }[];
}
export interface CalculationRecord {
  id: string; caseId: string; kind: string; title: string; period: string;
  inputs: Record<string, string>; output: string; createdAt: string;
}
export interface AuditEvent { id: string; caseId: string; at: string; action: string; target: string }

import type { AuditIssue, ImportBatch, MatchAllocation, Finding, CorrectionPlan } from '@/types/audit-issues';

class WorkspaceDatabase extends Dexie {
  cases!: Table<CaseRecord>;
  evidence!: Table<EvidenceRecord>;
  work!: Table<WorkRecord>;
  calculations!: Table<CalculationRecord>;
  events!: Table<AuditEvent>;
  issues!: Table<AuditIssue>;
  importBatches!: Table<ImportBatch>;
  sourceRows!: Table<any>;
  allocations!: Table<MatchAllocation>;
  findings!: Table<Finding>;
  correctionPlans!: Table<CorrectionPlan>;

  constructor() {
    super('kv-accounting-audit-v1');
    this.version(1).stores({
      cases: 'id', evidence: 'id,caseId', work: 'id,caseId',
      calculations: 'id,caseId', events: 'id,caseId'
    });
    this.version(2).stores({
      cases: 'id', evidence: 'id,caseId', work: 'id,caseId',
      calculations: 'id,caseId', events: 'id,caseId',
      issues: 'id,caseId,scenarioId,status,[caseId+scenarioId]',
      importBatches: 'id,caseId,[caseId+fileHash]',
      sourceRows: 'id,caseId,batchId,kind',
      allocations: 'id,caseId,issueId,leftId,rightId',
      findings: 'id,caseId,issueId,ruleId',
      correctionPlans: 'id,caseId,issueId'
    });
  }
}
export const auditDb = new WorkspaceDatabase();
export const newId = () => crypto.randomUUID();
export const now = () => new Date().toISOString();
export async function logEvent(caseId: string, action: string, target: string) {
  await auditDb.events.add({ id: newId(), caseId, at: now(), action, target });
}
export async function createCase(): Promise<string> {
  const id = newId();
  await auditDb.cases.add({ id, name: 'Kiểm tra thuế tháng 10/2026', entity: 'Công ty Cổ phần Kiểu Việt',
    taxCode: '5901168128', periods: '', auditMonth: '2026-10', prepDate: '', decision: '', authority: '', checked: {}, risk: {} });
  return id;
}
export async function sha256(blob: Blob) {
  const bytes = await crypto.subtle.digest('SHA-256', await blob.arrayBuffer());
  return Array.from(new Uint8Array(bytes), b => b.toString(16).padStart(2, '0')).join('');
}
export function safeDriveLink(value: string) {
  try { const u = new URL(value); return u.protocol === 'https:' && u.hostname === 'drive.google.com' && /^\/file\/d\/[^/]+/.test(u.pathname); }
  catch { return false; }
}
export async function saveEvidence(item: EvidenceRecord) {
  if (!item.title.trim()) throw new Error('Nhập tên chứng từ.');
  if (item.kind === 'file' && !item.blob) throw new Error('Chọn file chứng từ.');
  if (item.kind === 'drive' && !safeDriveLink(item.location)) throw new Error('Dùng liên kết đến một file Drive, không dùng thư mục.');
  if (item.kind === 'paper' && !item.location.trim()) throw new Error('Ghi vị trí lưu bản giấy.');
  if (item.blob) {
    if (item.blob.size > 30 * 1024 * 1024) throw new Error('Mỗi file tối đa 30 MB.');
    item.hash = await sha256(item.blob);
  }
  await auditDb.transaction('rw', auditDb.evidence, auditDb.events, async () => {
    await auditDb.evidence.put(item); await logEvent(item.caseId, 'Lưu chứng từ', item.id);
  });
}
export async function saveWork(item: WorkRecord) {
  if (!item.title.trim() || !item.owner.trim()) throw new Error('Nhập nội dung và người phụ trách.');
  if (item.status === 'not_applicable' && !item.response.trim()) throw new Error('Ghi lý do không áp dụng và căn cứ thực tế.');
  await auditDb.transaction('rw', auditDb.work, auditDb.evidence, auditDb.events, async () => {
    const previous = await auditDb.work.get(item.id);
    if (item.status === 'submitted' && previous?.status !== 'submitted') {
      if (!item.response.trim() || item.evidenceIds.length === 0) throw new Error('Bàn giao cần bản giải trình và ít nhất một chứng từ.');
      if (item.pillar === 'unassigned') throw new Error('Chọn mảng hoạt động trước khi bàn giao.');
      const files = await auditDb.evidence.bulkGet(item.evidenceIds);
      if (files.some(f => !f || f.caseId !== item.caseId || !f.verifiedBy)) throw new Error('Chỉ bàn giao chứng từ cùng đợt đã được người rà xác nhận.');
      item.submittedAt = now();
      item.deliveries = [...(previous?.deliveries || []), { at: item.submittedAt, response: item.response,
        files: files.map(f => ({ id: f!.id, title: f!.title, hash: f!.hash, location: f!.location })) }];
    } else item.deliveries = previous?.deliveries || [];
    if (item.status === 'closed' && (!item.receipt.trim() || !item.deliveries.length)) throw new Error('Đóng yêu cầu cần lịch sử bàn giao và số/vị trí biên nhận.');
    await auditDb.work.put(item); await logEvent(item.caseId, `Lưu ${item.kind}: ${item.status}`, item.id);
  });
}
export function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}
export function csvCell(value: unknown) {
  const text = String(value ?? '');
  return '"' + (/^[=+@\-\t\r]/.test(text) ? "'" + text : text).replace(/"/g, '""') + '"';
}
export function downloadCsv(rows: unknown[][], name: string) {
  downloadBlob(new Blob(['\ufeff' + rows.map(r => r.map(csvCell).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8' }), name);
}
export async function exportCase(caseId: string) {
  const data = await auditDb.transaction('r', auditDb.tables, async () => ({
    case: await auditDb.cases.get(caseId), evidence: await auditDb.evidence.where('caseId').equals(caseId).toArray(),
    work: await auditDb.work.where('caseId').equals(caseId).toArray(), calculations: await auditDb.calculations.where('caseId').equals(caseId).toArray(),
    events: await auditDb.events.where('caseId').equals(caseId).toArray(),
  }));
  const evidence = await Promise.all(data.evidence.map(async ({ blob, ...e }) => ({ ...e, fileType: blob?.type,
    base64: blob ? await new Promise<string>((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(String(r.result).split(',')[1]); r.onerror = reject; r.readAsDataURL(blob); }) : undefined })));
  downloadBlob(new Blob([JSON.stringify({ schema: 1, exportedAt: now(), ...data, evidence }, null, 2)], { type: 'application/json' }), `ho-so-thue-${caseId}.json`);
}
export async function restoreCase(file: File): Promise<string> {
  if (file.size > 150 * 1024 * 1024) throw new Error('Bản sao lưu vượt 150 MB.');
  const data = JSON.parse(await file.text());
  if (data.schema !== 1 || !data.case || !['name','entity','taxCode','periods','auditMonth','prepDate','decision','authority'].every(k => typeof data.case[k] === 'string') ||
      !['evidence','work','calculations','events'].every(k => Array.isArray(data[k]))) throw new Error('Sai cấu trúc bản sao lưu.');
  const id = newId(); const evidenceMap = new Map<string, string>();
  const evidence: EvidenceRecord[] = [];
  for (const row of data.evidence) {
    if (typeof row.id !== 'string' || typeof row.title !== 'string' || !['file','paper','drive'].includes(row.kind) ||
        !['interior','concrete_materials','construction','consulting'].includes(row.pillar) || typeof row.location !== 'string') throw new Error('Chứng từ trong bản sao lưu không hợp lệ.');
    let blob: Blob | undefined;
    if (row.kind === 'file') {
      if (typeof row.base64 !== 'string') throw new Error('Bản sao lưu thiếu nội dung file.');
      blob = new Blob([Uint8Array.from(atob(row.base64), c => c.charCodeAt(0))], { type: row.fileType || 'application/octet-stream' });
      if (await sha256(blob) !== row.hash) throw new Error('Hash file sao lưu không khớp.');
    }
    if (row.kind === 'drive' && !safeDriveLink(row.location)) throw new Error('Liên kết Drive không hợp lệ.');
    const eid = newId(); evidenceMap.set(row.id, eid);
    evidence.push({ id: eid, caseId: id, title: row.title, pillar: row.pillar, reference: String(row.reference || ''), date: String(row.date || ''),
      location: row.location, kind: row.kind, blob, fileName: row.fileName, hash: row.hash, verifiedBy: '', verifiedAt: '' });
  }
  const work: WorkRecord[] = data.work.map((r: WorkRecord) => {
    if (typeof r.title !== 'string' || !['task','request'].includes(r.kind) || !Array.isArray(r.evidenceIds) || !Array.isArray(r.deliveries)) throw new Error('Yêu cầu không hợp lệ.');
    return { ...r, id: newId(), caseId: id, status: 'preparing', evidenceIds: r.evidenceIds.map(e => evidenceMap.get(e)).filter(Boolean),
      deliveries: r.deliveries.map(d => ({ ...d, files: d.files.map(f => ({ ...f, id: evidenceMap.get(f.id) || f.id })) })) };
  });
  const booleans = (obj: unknown): Record<string, boolean> => Object.fromEntries(Object.entries(obj && typeof obj === 'object' ? obj : {}).filter(([k,v]) => k !== '__proto__' && typeof v === 'boolean'));
  await auditDb.transaction('rw', auditDb.tables, async () => {
    await auditDb.cases.add({ ...data.case, id, name: `${data.case.name} (khôi phục)`, checked: booleans(data.case.checked), risk: booleans(data.case.risk) });
    await auditDb.evidence.bulkAdd(evidence); await auditDb.work.bulkAdd(work);
    for (const r of data.calculations) {
      if (typeof r.output !== 'string' || typeof r.title !== 'string' || !r.inputs || typeof r.inputs !== 'object') throw new Error('Bảng tính không hợp lệ.');
      await auditDb.calculations.add({ ...r, id: newId(), caseId: id });
    }
    await logEvent(id, 'Khôi phục thành đợt mới; chứng từ cần rà lại', file.name);
  });
  return id;
}
