import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CHART_OF_ACCOUNTS_TT99 } from '@/lib/utils/accounts-tt99';

export function ChartOfAccountsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAccounts = CHART_OF_ACCOUNTS_TT99.filter(acc => 
    acc.code.includes(searchTerm) || 
    acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    acc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            Hệ thống Tài khoản (TT99/2025)
          </h1>
          <p className="text-muted-foreground mt-1">
            Tra cứu nhanh danh mục tài khoản kế toán doanh nghiệp theo Thông tư 99/2025/TT-BTC (thay thế TT200)
          </p>
        </div>
        <div className="w-full md:w-72 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Tìm theo mã, tên hoặc loại..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border shadow-xs overflow-hidden">
        <div className="p-3 bg-muted/30 border-b border-border text-xs text-muted-foreground flex items-center justify-between md:hidden">
          <span>Vuốt ngang để xem đầy đủ nội dung & mô tả</span>
          <span>➔</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 font-semibold w-24">Mã TK</th>
                <th className="px-4 py-3 font-semibold w-48">Tên tài khoản</th>
                <th className="px-4 py-3 font-semibold w-28">Loại</th>
                <th className="px-4 py-3 font-semibold">Mô tả nội dung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredAccounts.length > 0 ? (
                filteredAccounts.map((acc) => (
                  <tr key={acc.code} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-emerald-600 dark:text-emerald-400">{acc.code}</td>
                    <td className="px-4 py-3.5 font-medium text-foreground">{acc.name}</td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                        {acc.type}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-muted-foreground leading-relaxed">{acc.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                    Không tìm thấy tài khoản nào phù hợp.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}