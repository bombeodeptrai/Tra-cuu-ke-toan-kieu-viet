import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { GoogleGenAI } from '@google/genai';
import { Upload, ScanText, Loader2, FileImage, ClipboardCopy, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSettingsStore } from '@/stores/settings-store';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

export function HandwritingReaderPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { geminiApiKey } = useSettingsStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult('');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1
  });

  const handleProcessImage = async () => {
    if (!image) return;
    
    if (!geminiApiKey) {
      toast({
        title: 'Thiếu API Key',
        description: 'Vui lòng cấu hình Gemini API Key trong phần Cài đặt trước khi sử dụng tính năng này.',
        variant: 'destructive',
      });
      navigate('/cai-dat');
      return;
    }

    setIsProcessing(true);
    try {
      // Convert image to base64
      const buffer = await image.arrayBuffer();
      const base64Data = btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));

      const ai = new GoogleGenAI({ apiKey: geminiApiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          'Bạn là một chuyên gia đọc chữ viết tay và trích xuất dữ liệu kế toán, tài chính. Hãy đọc tất cả các chữ viết tay (hoặc chữ đánh máy) trong hình ảnh này và chuyển nó thành văn bản rõ ràng. Trình bày lại cẩn thận, sắp xếp thành các dòng hoặc bảng nếu cần thiết để người dùng dễ đọc nhất.',
          {
            inlineData: {
              data: base64Data,
              mimeType: image.type
            }
          }
        ]
      });

      setResult(response.text || 'Không tìm thấy chữ trong hình ảnh.');
    } catch (error: any) {
      console.error(error);
      toast({
        title: 'Lỗi',
        description: 'Không thể xử lý hình ảnh. Có thể API Key không hợp lệ hoặc lỗi mạng. ' + error.message,
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast({
      title: 'Đã copy',
      description: 'Đã sao chép nội dung vào khay nhớ tạm.',
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <ScanText className="h-8 w-8 text-primary" />
            Đọc Chữ Viết Tay
          </h1>
          <p className="text-muted-foreground mt-1">
            Ứng dụng AI để quét và nhận dạng chữ viết tay từ hóa đơn, biên lai, sổ sách kế toán.
          </p>
        </div>
        {!geminiApiKey && (
          <Button variant="outline" onClick={() => navigate('/cai-dat')} className="gap-2 border-amber-500/50 text-amber-600 bg-amber-50 dark:bg-amber-950/20">
            <Settings className="h-4 w-4" /> Cấu hình API Key
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Column */}
        <div className="space-y-4">
          <div 
            {...getRootProps()} 
            className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-300 ${
              isDragActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-muted/50'
            }`}
          >
            <input {...getInputProps()} />
            {!preview ? (
              <div className="flex flex-col items-center justify-center space-y-4 min-h-[200px]">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Upload className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground">Kéo thả hình ảnh vào đây</p>
                  <p className="text-sm text-muted-foreground mt-1">hoặc click để chọn file từ máy tính</p>
                </div>
              </div>
            ) : (
              <div className="relative group rounded-xl overflow-hidden min-h-[200px] flex items-center justify-center bg-black/5">
                <img src={preview} alt="Preview" className="max-h-[400px] object-contain rounded-xl" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2">
                  <FileImage className="h-8 w-8" />
                  <p className="font-medium">Click để đổi ảnh khác</p>
                </div>
              </div>
            )}
          </div>

          <Button 
            className="w-full h-12 text-lg font-medium rounded-xl shadow-sm" 
            disabled={!image || isProcessing}
            onClick={handleProcessImage}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Đang nhận dạng AI...
              </>
            ) : (
              <>
                <ScanText className="mr-2 h-5 w-5" /> Bắt đầu quét chữ
              </>
            )}
          </Button>
        </div>

        {/* Result Column */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col h-[500px]">
          <div className="bg-muted/50 px-4 py-3 border-b border-border flex justify-between items-center">
            <h3 className="font-medium flex items-center gap-2">
              <ScanText className="h-4 w-4 text-primary" /> Kết quả trích xuất
            </h3>
            <Button variant="ghost" size="sm" onClick={handleCopy} disabled={!result} className="h-8 gap-1.5 text-muted-foreground hover:text-foreground">
              <ClipboardCopy className="h-4 w-4" /> Copy
            </Button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
            {result ? (
              <div className="whitespace-pre-wrap text-sm text-foreground/90 leading-relaxed font-mono">
                {result}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <ScanText className="h-6 w-6 opacity-50" />
                </div>
                <p>Nội dung nhận dạng sẽ hiển thị tại đây</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
