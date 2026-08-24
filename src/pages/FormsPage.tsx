import React, { useState } from 'react';
import { Download, FileSpreadsheet, FileText, File, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FORMS_DATA } from '@/lib/utils/forms';

export function FormsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredForms = FORMS_DATA.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getIcon = (format: string) => {
    switch(format) {
      case 'Excel': return <FileSpreadsheet className="h-8 w-8 text-green-600" />;
      case 'Word': return <FileText className="h-8 w-8 text-blue-600" />;
      default: return <File className="h-8 w-8 text-red-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Download className="h-8 w-8 text-primary" />
            Thư viện Biểu mẫu
          </h1>
          <p className="text-muted-foreground mt-1">
            Tải xuống các biểu mẫu, chứng từ kế toán chuẩn theo quy định hiện hành
          </p>
        </div>
        <div className="w-full md:w-72 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Tìm kiếm biểu mẫu..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredForms.map((form) => (
          <div key={form.id} className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-muted rounded-lg">
                {getIcon(form.format)}
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                {form.type}
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {form.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
              {form.description}
            </p>
            <Button className="w-full gap-2" variant="outline" onClick={() => alert('Tính năng tải xuống đang được cập nhật!')}>
              <Download className="h-4 w-4" />
              Tải mẫu {form.format}
            </Button>
          </div>
        ))}
      </div>
      
      {filteredForms.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          Không tìm thấy biểu mẫu nào phù hợp.
        </div>
      )}
    </div>
  );
}