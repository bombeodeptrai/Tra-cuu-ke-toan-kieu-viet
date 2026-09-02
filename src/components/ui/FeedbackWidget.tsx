import React, { useState } from 'react';
import { MessageSquarePlus, X, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFeedbackStore } from '@/stores/feedback-store';

export function FeedbackWidget() {
  const { isOpen, open, close } = useFeedbackStore();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    type: 'missing', // missing, error, feature
    title: '',
    description: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Save to localStorage just for record
      const past = JSON.parse(localStorage.getItem('user_feedback') || '[]');
      localStorage.setItem('user_feedback', JSON.stringify([...past, { ...formData, date: new Date().toISOString() }]));
      
      setTimeout(() => {
        close();
        setTimeout(() => {
          setStatus('idle');
          setFormData({ type: 'missing', title: '', description: '', contact: '' });
        }, 300);
      }, 2000);
    }, 1000);
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
        className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 bg-primary text-primary-foreground p-3.5 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center group"
      >
        <MessageSquarePlus className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium group-hover:ml-2 group-hover:mr-1">
          Góp ý / Yêu cầu
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
              onClick={() => status !== 'submitting' && close()}
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
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MessageSquarePlus className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-semibold text-lg">Gửi phản hồi / Yêu cầu</h2>
                </div>
                <button
                  onClick={() => close()}
                  disabled={status === 'submitting'}
                  className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors disabled:opacity-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                      <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Đã gửi thành công!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Cảm ơn bạn đã đóng góp. Yêu cầu của bạn đã được ghi nhận và sẽ được ban quản trị xử lý sớm nhất.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Loại phản hồi <span className="text-red-500">*</span></label>
                      <select 
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
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
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder={formData.type === 'missing' ? "VD: Nghị định 123/2020/NĐ-CP" : "Nhập tiêu đề ngắn gọn"}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Chi tiết yêu cầu <span className="text-red-500">*</span></label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Mô tả chi tiết nội dung bạn muốn phản ánh hoặc yêu cầu..."
                        className="w-full p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Thông tin liên hệ (Không bắt buộc)</label>
                      <input 
                        type="text" 
                        value={formData.contact}
                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                        placeholder="Email hoặc Số điện thoại/Zalo để nhận phản hồi"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg flex items-start gap-2.5 mt-2 text-blue-800 dark:text-blue-300">
                      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                      <p className="text-xs leading-relaxed">
                        Các văn bản được yêu cầu sẽ được AI tự động ưu tiên quét và cập nhật vào hệ thống Tra Cứu Kế Toán trong bản cập nhật kế tiếp.
                      </p>
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => close()}
                        className="px-4 py-2 rounded-md hover:bg-muted text-sm font-medium transition-colors"
                      >
                        Hủy
                      </button>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
                      >
                        {status === 'submitting' ? (
                          <>
                            <div className="h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                            Đang gửi...
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
