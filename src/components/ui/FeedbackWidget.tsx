import React, { useState } from 'react';
import { MessageSquarePlus, X, Send, AlertCircle, CheckCircle2, ShieldCheck, MailCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFeedbackStore } from '@/stores/feedback-store';
import { useDecreeStore } from '@/stores/decree-store';
import { useUserStore } from '@/stores/user-store';
import { auditUserFeedback, AuditResult } from '@/lib/services/audit-service';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec';
const ADMIN_EMAIL = 'nguyenthanhtrongnhan14@gmail.com';

export function FeedbackWidget() {
  const { isOpen, open, close } = useFeedbackStore();
  const { decrees } = useDecreeStore();
  const { username } = useUserStore();

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [formData, setFormData] = useState({
    type: 'missing', // missing, error, feature, other
    title: '',
    description: '',
    contact: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    setStatus('submitting');

    // 1. Hệ thống tự động thẩm định yêu cầu
    const audit = auditUserFeedback(formData.title, formData.description, decrees);
    setAuditResult(audit);

    const reqId = `REQ-${Date.now()}`;
    const payload = {
      action: 'submit_feedback',
      admin_email: ADMIN_EMAIL,
      feedback: {
        id: reqId,
        type: formData.type,
        title: formData.title.trim(),
        description: formData.description.trim(),
        contact: formData.contact.trim() || 'Không có',
        username: username || 'Ẩn danh',
        created_at: new Date().toISOString()
      },
      verification: audit
    };

    // 2. Gửi dữ liệu về Google Apps Script để ghi nhận & bắn Email cho Admin
    try {
      await fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Lỗi gửi GAS, lưu bản sao cục bộ:', err);
    }

    // 3. Gửi Email thông báo trực tiếp qua FormSubmit (hoạt động 100% không cần Google Apps Script quyền)
    try {
      const approveUrl = `${GAS_URL}?action=approve_request&id=${reqId}&number=${encodeURIComponent(audit.detectedNumber || '')}&title=${encodeURIComponent(formData.title)}`;
      const rejectUrl = `${GAS_URL}?action=reject_request&id=${reqId}`;
      
      await fetch(`https://formsubmit.co/ajax/${ADMIN_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Kiểu Việt Tra Cứu] ⚖️ Yêu cầu văn bản: ${formData.title} (${audit.recommendation === 'APPROVE' ? 'ĐỀ XUẤT DUYỆT' : 'ĐỀ XUẤT TỪ CHỐI'})`,
          _template: 'table',
          'Người gửi': username || 'Ẩn danh',
          'Thông tin liên hệ': formData.contact.trim() || 'Không có',
          'Phân loại': formData.type === 'missing' ? 'Bổ sung văn bản mới' : (formData.type === 'error' ? 'Báo lỗi văn bản' : 'Góp ý khác'),
          'Tiêu đề / Số hiệu': formData.title.trim(),
          'Chi tiết yêu cầu': formData.description.trim(),
          '--- THẨM ĐỊNH TỰ ĐỘNG ---': '----------------------------------------',
          'Số hiệu nhận diện': audit.detectedNumber || 'Không rõ',
          'Loại văn bản': audit.docType,
          'Lĩnh vực': audit.relevantField,
          'Tồn tại trong CSDL': audit.isExisting ? '⚠️ ĐÃ CÓ trong hệ thống' : '✅ CHƯA CÓ (Hợp lệ bổ sung)',
          'Đánh giá hệ thống': audit.summary,
          'KHUYẾN NGHỊ': audit.recommendation === 'APPROVE' ? '✅ ĐỀ XUẤT DUYỆT' : (audit.recommendation === 'REJECT' ? '❌ ĐỀ XUẤT TỪ CHỐI' : '⚠️ CẦN XEM XÉT'),
          '--- HÀNH ĐỘNG CỦA ADMIN ---': '----------------------------------------',
          '👉 LINK DUYỆT BỔ SUNG': approveUrl,
          '👉 LINK TỪ CHỐI': rejectUrl
        })
      });
    } catch (e) {
      console.warn('Lỗi gửi FormSubmit:', e);
    }

    // 3. Lưu bản sao vào LocalStorage
    try {
      const past = JSON.parse(localStorage.getItem('user_feedback') || '[]');
      localStorage.setItem('user_feedback', JSON.stringify([...past, { ...payload, date: new Date().toISOString() }]));
    } catch (_) {}

    setStatus('success');
  };

  const handleReset = () => {
    close();
    setTimeout(() => {
      setStatus('idle');
      setAuditResult(null);
      setFormData({ type: 'missing', title: '', description: '', contact: '' });
    }, 300);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => open()}
        className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 bg-blue-600 text-white p-3.5 rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center group"
        title="Góp ý hoặc yêu cầu bổ sung văn bản"
      >
        <MessageSquarePlus className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium group-hover:ml-2 group-hover:mr-1">
          Góp ý / Yêu cầu văn bản
        </span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => status !== 'submitting' && handleReset()}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-card rounded-xl shadow-2xl border border-border overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500/10 p-2 rounded-lg">
                    <MessageSquarePlus className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg leading-tight">Phản ánh & Yêu cầu văn bản</h2>
                    <p className="text-xs text-muted-foreground">Tự động thẩm định & thông báo email tới Admin</p>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  disabled={status === 'submitting'}
                  className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors disabled:opacity-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
                {status === 'success' && auditResult ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col py-4"
                  >
                    <div className="flex items-center gap-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 p-4 rounded-xl mb-4">
                      <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-500 shrink-0" />
                      <div>
                        <h3 className="font-bold text-green-900 dark:text-green-300">Đã tiếp nhận yêu cầu thành công!</h3>
                        <p className="text-xs text-green-700 dark:text-green-400 mt-0.5">
                          Hệ thống đã ghi vào Google Sheet và chuyển kết quả thẩm định đến email Admin.
                        </p>
                      </div>
                    </div>

                    {/* Hộp kết quả thẩm định tự động */}
                    <div className="bg-muted/40 border border-border rounded-xl p-4 space-y-3 mb-4 text-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 font-semibold text-foreground">
                          <ShieldCheck className="h-4 w-4 text-blue-500" />
                          Kết quả thẩm định hệ thống:
                        </div>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                          auditResult.recommendation === 'APPROVE'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                            : auditResult.recommendation === 'REJECT'
                            ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                            : 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'
                        }`}>
                          {auditResult.recommendation === 'APPROVE' ? 'ĐỀ XUẤT DUYỆT' : (auditResult.recommendation === 'REJECT' ? 'ĐỀ XUẤT TỪ CHỐI' : 'CẦN XEM XÉT')}
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {auditResult.summary}
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-border/50">
                        <div>
                          <span className="text-muted-foreground">Số hiệu:</span>{' '}
                          <strong className="text-foreground">{auditResult.detectedNumber || 'Không rõ'}</strong>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Loại:</span>{' '}
                          <strong className="text-foreground">{auditResult.docType}</strong>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Lĩnh vực:</span>{' '}
                          <strong className="text-foreground">{auditResult.relevantField}</strong>
                        </div>
                        <div>
                          <span className="text-muted-foreground">CSDL hiện tại:</span>{' '}
                          <strong className={auditResult.isExisting ? 'text-amber-600' : 'text-green-600'}>
                            {auditResult.isExisting ? 'Đã có sẵn' : 'Chưa có'}
                          </strong>
                        </div>
                      </div>
                    </div>

                    {/* Thông báo gửi email */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-blue-50/50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30 mb-6">
                      <MailCheck className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>
                        Email chứa <strong>nút [Duyệt] / [Từ chối]</strong> trực tiếp đã được chuyển tới Admin ({ADMIN_EMAIL}).
                      </span>
                    </div>

                    <button
                      onClick={handleReset}
                      className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      Hoàn tất & Đóng
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Loại phản hồi <span className="text-red-500">*</span></label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="missing">Yêu cầu bổ sung văn bản mới</option>
                        <option value="error">Báo lỗi văn bản (sai nội dung, hết hiệu lực)</option>
                        <option value="feature">Góp ý tính năng, giao diện</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Tiêu đề / Số hiệu văn bản <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder={formData.type === 'missing' ? "VD: Nghị định 123/2020/NĐ-CP hoặc TT 78/2021" : "Nhập tiêu đề ngắn gọn"}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Chi tiết yêu cầu <span className="text-red-500">*</span></label>
                      <textarea
                        required
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Mô tả chi tiết nội dung bạn muốn phản ánh hoặc yêu cầu..."
                        className="w-full p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Thông tin liên hệ của bạn (Không bắt buộc)</label>
                      <input
                        type="text"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="Email hoặc Số điện thoại/Zalo để nhận phản hồi kết quả"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg flex items-start gap-2.5 text-blue-800 dark:text-blue-300">
                      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                      <p className="text-xs leading-relaxed">
                        Hệ thống sẽ tự động kiểm tra số hiệu, đối soát với CSDL hiện có và gửi email thẩm định kèm <strong>nút phê duyệt</strong> trực tiếp tới Admin để xử lý ngay.
                      </p>
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-4 py-2 rounded-md hover:bg-muted text-sm font-medium transition-colors"
                      >
                        Hủy
                      </button>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
                      >
                        {status === 'submitting' ? (
                          <>
                            <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            Đang thẩm định & gửi...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Gửi yêu cầu
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
