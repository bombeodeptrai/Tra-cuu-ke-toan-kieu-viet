import React, { useState } from 'react';
import { UploadCloud, FileSpreadsheet, FileCode, CheckCircle2, AlertTriangle, X, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { parseCsv, type CsvParseResult } from '@/lib/audit/imports/csv';
import { parseInvoiceXml, type ParsedXmlInvoice } from '@/lib/audit/imports/invoice-xml';
import { auditDb, newId, now } from '@/lib/audit/workspace';
import type { SourceKind } from '@/types/audit-issues';

interface AuditImportWizardProps {
  caseId: string;
  issueId?: string;
  onImportComplete: (batchId: string, count: number) => void;
  onClose: () => void;
}

export function AuditImportWizard({ caseId, issueId, onImportComplete, onClose }: AuditImportWizardProps) {
  const [fileKind, setFileKind] = useState<SourceKind>('invoice');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [csvPreview, setCsvPreview] = useState<CsvParseResult | null>(null);
  const [xmlPreview, setXmlPreview] = useState<ParsedXmlInvoice | null>(null);
  const [decimalFormat, setDecimalFormat] = useState<'vi' | 'en'>('vi');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setError(null);

    try {
      const text = await file.text();
      if (file.name.endsWith('.xml')) {
        const parsed = parseInvoiceXml(text);
        setXmlPreview(parsed);
        setCsvPreview(null);
      } else {
        const parsed = parseCsv(text, { decimalFormat });
        setCsvPreview(parsed);
        setXmlPreview(null);
      }
    } catch (err: any) {
      setError(err.message || 'Lỗi khi đọc file.');
      setCsvPreview(null);
      setXmlPreview(null);
    }
  };

  const handleCommitImport = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError(null);

    try {
      const batchId = newId();
      const count = csvPreview ? csvPreview.rows.length : (xmlPreview ? xmlPreview.items.length : 0);

      await auditDb.transaction('rw', auditDb.importBatches, auditDb.sourceRows, async () => {
        await auditDb.importBatches.add({
          id: batchId,
          caseId,
          kind: fileKind,
          evidenceId: selectedFile.name,
          fileHash: 'mock_hash_' + selectedFile.size,
          mapping: {},
          decimalFormat,
          rowCount: count,
          accepted: count,
          rejected: 0,
          status: 'committed',
          createdAt: now()
        });

        if (csvPreview) {
          for (let idx = 0; idx < csvPreview.rows.length; idx++) {
            await auditDb.sourceRows.add({
              id: newId(),
              caseId,
              batchId,
              kind: fileKind,
              rowNumber: idx + 1,
              data: csvPreview.rows[idx]
            });
          }
        }
      });

      onImportComplete(batchId, count);
    } catch (err: any) {
      setError(err.message || 'Lỗi khi lưu dữ liệu nhập khẩu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card border border-border w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
          <div className="flex items-center gap-2 font-bold text-sm">
            <UploadCloud className="h-5 w-5 text-emerald-600" />
            <span>Nhập Dữ Liệu Thực Tế Để Đối Chiếu Dòng</span>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-5 space-y-4 overflow-y-auto flex-1 text-xs">
          <div className="space-y-1.5">
            <label className="font-semibold text-foreground">1. Chọn loại tài liệu:</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'invoice', label: 'Hóa đơn (CSV/XML)', icon: FileCode },
                { id: 'delivery', label: 'Phiếu giao hàng / KCS', icon: FileSpreadsheet },
                { id: 'stock', label: 'Thẻ kho / Nhập xuất', icon: FileSpreadsheet },
                { id: 'payment', label: 'Sao kê ngân hàng', icon: FileSpreadsheet }
              ].map(item => {
                const Icon = item.icon;
                const active = fileKind === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFileKind(item.id as SourceKind)}
                    className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                      active 
                        ? 'border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 font-bold' 
                        : 'border-border bg-card hover:bg-muted/50'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${active ? 'text-emerald-600' : 'text-muted-foreground'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-foreground">2. Chọn file từ máy tính (CSV hoặc XML):</label>
            <Input
              type="file"
              accept=".csv,.xml"
              onChange={handleFileChange}
              className="text-xs file:text-xs file:font-semibold"
            />
          </div>

          {selectedFile?.name.endsWith('.csv') && (
            <div className="flex items-center gap-4 bg-muted/40 p-2.5 rounded-xl">
              <span className="font-medium text-muted-foreground">Định dạng số thập phân:</span>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="decimal"
                  checked={decimalFormat === 'vi'}
                  onChange={() => setDecimalFormat('vi')}
                />
                <span>Việt Nam (1.234.567,89)</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="decimal"
                  checked={decimalFormat === 'en'}
                  onChange={() => setDecimalFormat('en')}
                />
                <span>Quốc tế (1,234,567.89)</span>
              </label>
            </div>
          )}

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 rounded-xl text-red-800 dark:text-red-300 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {csvPreview && (
            <div className="space-y-2 border border-border rounded-xl p-3 bg-muted/20">
              <div className="flex items-center justify-between font-bold">
                <span>Xem trước 5 dòng đầu (Tổng {csvPreview.totalRows} dòng):</span>
                <Badge variant="outline">Dấu phân cách: '{csvPreview.detectedDelimiter}'</Badge>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[11px] border-collapse">
                  <thead>
                    <tr className="bg-muted text-foreground">
                      {csvPreview.headers.slice(0, 6).map((h, i) => (
                        <th key={i} className="p-1.5 border border-border text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {csvPreview.rows.slice(0, 5).map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-muted/40">
                        {csvPreview.headers.slice(0, 6).map((h, cIdx) => (
                          <td key={cIdx} className="p-1.5 border border-border truncate max-w-[120px]">
                            {row[h]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {xmlPreview && (
            <div className="space-y-2 border border-border rounded-xl p-3 bg-muted/20">
              <div className="flex items-center justify-between font-bold">
                <span>Hóa đơn XML: {xmlPreview.series} - Số: {xmlPreview.invoiceNumber}</span>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700">{xmlPreview.items.length} dòng hàng</Badge>
              </div>
              <p className="text-muted-foreground">Bên bán: {xmlPreview.sellerName} (MST: {xmlPreview.sellerTaxId}) ➔ Bên mua: {xmlPreview.buyerName}</p>
              <div className="font-semibold text-emerald-600">Tổng tiền thanh toán: {xmlPreview.totalAmount} VNĐ</div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-border flex items-center justify-between bg-muted/20">
          <Button variant="outline" size="sm" onClick={onClose}>Hủy</Button>
          <Button
            size="sm"
            onClick={handleCommitImport}
            disabled={(!csvPreview && !xmlPreview) || loading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5"
          >
            {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
            <span>Xác nhận nhập dữ liệu</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
