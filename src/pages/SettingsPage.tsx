import React, { useState } from 'react';
import { KeyRound, Paintbrush, Database, Info, Save, Github } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSettingsStore } from '@/stores/settings-store';
import { useToast } from '@/components/ui/use-toast';

export function SettingsPage() {
  const { theme, setTheme, geminiApiKey, setGeminiApiKey, sheetsApiKey, setSheetsApiKey } = useSettingsStore();
  const { toast } = useToast();
  
  const [localGeminiKey, setLocalGeminiKey] = useState(geminiApiKey || '');
  const [localSheetsKey, setLocalSheetsKey] = useState(sheetsApiKey || '');
  const [showGemini, setShowGemini] = useState(false);

  const handleSaveApi = () => {
    setGeminiApiKey(localGeminiKey);
    setSheetsApiKey(localSheetsKey);
    toast({ title: '✅ Thành công', description: 'Đã lưu cấu hình API thành công!' });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight mb-1">Cài đặt</h1>
        <p className="text-muted-foreground">Quản lý cấu hình ứng dụng và giao diện.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <KeyRound className="h-5 w-5 text-primary" /> Cấu hình API
          </CardTitle>
          <CardDescription>Cung cấp API Key để sử dụng các tính năng nâng cao (AI, đồng bộ dữ liệu).</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Gemini API Key (Cho tính năng hỏi đáp AI)</label>
            <div className="flex gap-2">
              <Input 
                type={showGemini ? "text" : "password"} 
                value={localGeminiKey} 
                onChange={(e) => setLocalGeminiKey(e.target.value)} 
                placeholder="AIzaSy..." 
                className="font-mono"
              />
              <Button variant="outline" onClick={() => setShowGemini(!showGemini)}>
                {showGemini ? "Ẩn" : "Hiện"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Lấy key miễn phí tại <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-primary hover:underline">Google AI Studio</a>. Key được lưu trữ cục bộ trên trình duyệt của bạn.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Google Sheets API Key (Tùy chọn đồng bộ)</label>
            <Input 
              type="password" 
              value={localSheetsKey} 
              onChange={(e) => setLocalSheetsKey(e.target.value)} 
              placeholder="Nhập API Key nếu muốn đồng bộ dữ liệu với Sheet..." 
            />
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4 bg-muted/20 flex justify-between">
          <Button variant="outline" onClick={() => toast({ title: 'ℹ️ Thông báo', description: 'Tính năng kiểm tra kết nối đang phát triển' })}>Kiểm tra kết nối</Button>
          <Button onClick={handleSaveApi} className="gap-2"><Save className="h-4 w-4" /> Lưu cài đặt</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Paintbrush className="h-5 w-5 text-primary" /> Giao diện
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Chủ đề (Theme)</label>
              <Select value={theme} onValueChange={(val: any) => setTheme(val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Sáng (Light)</SelectItem>
                  <SelectItem value="dark">Tối (Dark)</SelectItem>
                  <SelectItem value="system">Theo hệ thống</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Kích thước chữ (Đang phát triển)</label>
              <Select defaultValue="medium">
                <SelectTrigger>
                  <SelectValue placeholder="Kích thước" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Nhỏ</SelectItem>
                  <SelectItem value="medium">Vừa (Mặc định)</SelectItem>
                  <SelectItem value="large">Lớn</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" /> Dữ liệu & Lưu trữ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border rounded-lg">
            <div>
              <h4 className="font-medium text-sm">Dữ liệu đánh dấu (Bookmarks)</h4>
              <p className="text-xs text-muted-foreground">Xuất dữ liệu đánh dấu của bạn để sao lưu.</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => toast({ title: 'ℹ️ Thông báo', description: 'Tính năng xuất dữ liệu đang phát triển' })}>Xuất dữ liệu</Button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border border-destructive/30 bg-destructive/5 rounded-lg">
            <div>
              <h4 className="font-medium text-sm text-destructive">Xóa dữ liệu</h4>
              <p className="text-xs text-muted-foreground">Xóa tất cả lịch sử chat và đánh dấu. Không thể hoàn tác.</p>
            </div>
            <Button variant="destructive" size="sm" onClick={() => toast({ title: '⚠️ Cảnh báo', description: 'Chưa triển khai xóa dữ liệu' })}>Xóa tất cả</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" /> Thông tin ứng dụng
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-xl text-primary font-bold text-xl">KV</div>
            <div>
              <h3 className="font-bold text-lg">Kế Toán KV Tra Cứu</h3>
              <p className="text-sm text-muted-foreground">Phiên bản 1.0.0</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Được phát triển để hỗ trợ người làm kế toán tra cứu nhanh chóng, chính xác các văn bản pháp luật, nghị định, thông tư về kế toán tài chính tại Việt Nam. Tích hợp AI giúp giải đáp thắc mắc chuyên môn.
          </p>
          <Button variant="outline" className="gap-2" onClick={() => window.open('https://github.com', '_blank')}>
            <Github className="h-4 w-4" /> Xem mã nguồn trên GitHub
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
