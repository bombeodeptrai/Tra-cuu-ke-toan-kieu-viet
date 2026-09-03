import React, { useState } from 'react';
import { useUserStore } from '@/stores/user-store';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserCircle } from 'lucide-react';

export function LoginModal() {
  const { username, login } = useUserStore();
  const [nameInput, setNameInput] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      login(nameInput);
    }
  };

  return (
    <Dialog open={!username} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md [&>button]:hidden">
        <DialogHeader className="flex flex-col items-center text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <UserCircle className="w-10 h-10 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold">Chào mừng bạn</DialogTitle>
          <DialogDescription className="text-base mt-2">
            Để cá nhân hóa Sổ tay và Lịch sử tra cứu, vui lòng cho biết bạn là ai?
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <Input 
            autoFocus
            placeholder="Ví dụ: Liên, Nhựt, Kế toán 1..." 
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className="text-center text-base h-12"
          />
          <Button type="submit" className="w-full h-11 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-semibold" disabled={!nameInput.trim()}>
            Bắt đầu làm việc
          </Button>
          <Button 
            type="button" 
            variant="ghost" 
            onClick={() => login('Nhân viên Kiểu Việt')}
            className="w-full h-9 text-xs text-muted-foreground hover:text-foreground"
          >
            Bỏ qua (Truy cập nhanh với tư cách Khách)
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
