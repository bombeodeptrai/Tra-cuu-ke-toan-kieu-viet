import React from 'react';
import { useNotesStore } from '@/stores/notes-store';
import { useDecreeStore } from '@/stores/decree-store';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Trash2, Calendar, FileText, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils/format';
import { useUserStore } from '@/stores/user-store';

export function NotesPage() {
  const { notes, searchHistory, deleteNote, clearSearchHistory } = useNotesStore();
  const { decrees } = useDecreeStore();
  const { username } = useUserStore();

  const userNotes = notes.filter(n => n.user_id === username || (!n.user_id && username));
  const userSearchHistory = searchHistory.filter(s => s.user_id === username || (!s.user_id && username));

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" />
          Sổ Tay Kế Toán của {username}
        </h1>
        <p className="text-muted-foreground">
          Quản lý các đoạn văn bản bạn đã Highlight, ghi chú cá nhân và lịch sử tìm kiếm.
          Dữ liệu được lưu an toàn trên đám mây (Google Sheets).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Notes Column */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-bold border-b pb-2 flex items-center gap-2">
            <Bot className="h-5 w-5" /> Ghi chú & Highlight ({userNotes.length})
          </h2>
          
          {userNotes.length === 0 ? (
            <div className="text-center py-10 bg-muted/30 rounded-lg border border-dashed">
              <p className="text-muted-foreground">Chưa có ghi chú nào.</p>
              <p className="text-sm text-muted-foreground mt-1">Hãy bôi đen văn bản khi đọc Nghị định để lưu lại!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {userNotes.map(note => {
                const decree = decrees.find(d => d.id === note.decree_id);
                return (
                  <div key={note.id} className="bg-card border rounded-lg p-5 shadow-sm hover:shadow transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {formatDate(note.timestamp)}
                      </div>
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => deleteNote(note.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {decree && (
                      <Link to={`/thu-vien/${decree.id}`} className="font-semibold text-primary hover:underline flex items-center gap-2 mb-3 text-sm">
                        <FileText className="h-4 w-4" />
                        {decree.decree_number} - {decree.title}
                      </Link>
                    )}
                    
                    <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-400 p-3 text-sm italic mb-3 text-amber-900 dark:text-amber-100 rounded-r-md">
                      "{note.selected_text}"
                    </div>
                    
                    {note.user_note && (
                      <div className="text-sm bg-muted p-3 rounded-md">
                        <span className="font-semibold mr-2">Ghi chú:</span>
                        {note.user_note}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Search History Column */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b pb-2">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Search className="h-5 w-5" /> Lịch sử tìm kiếm
            </h2>
            {userSearchHistory.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearSearchHistory} className="h-8 text-xs text-muted-foreground">
                Xóa tất cả
              </Button>
            )}
          </div>
          
          {userSearchHistory.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground py-4">Chưa có lịch sử.</p>
          ) : (
            <ul className="space-y-2">
              {userSearchHistory.map(item => (
                <li key={item.id}>
                  <Link 
                    to={`/tra-cuu?q=${encodeURIComponent(item.keyword)}`}
                    className="flex items-center justify-between p-3 bg-card border rounded-md hover:border-primary hover:shadow-sm transition-all group"
                  >
                    <span className="text-sm font-medium group-hover:text-primary">{item.keyword}</span>
                    <span className="text-xs text-muted-foreground">{new Date(item.timestamp).toLocaleDateString('vi-VN')}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
