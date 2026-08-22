import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, FolderOpen, Bot, RefreshCw, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MOCK_DECREES } from '@/data/mock-decrees';
import { CATEGORIES } from '@/lib/utils/constants';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils/format';

export function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const recentDecrees = [...MOCK_DECREES].sort((a, b) => 
    new Date(b.issued_date).getTime() - new Date(a.issued_date).getTime()
  ).slice(0, 5);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tra-cuu?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div 
        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/90 to-primary p-8 md:p-12 text-white shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Tra Cứu Nghị Định <br/>Kế Toán Tài Chính
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Hỗ trợ bởi AI - Tìm kiếm nhanh chóng, chính xác
          </p>
          
          <form onSubmit={handleSearch} className="relative mt-8 flex items-center max-w-lg mx-auto">
            <Search className="absolute left-4 h-5 w-5 text-gray-400" />
            <Input 
              className="w-full bg-white text-gray-900 rounded-full pl-12 pr-32 h-14 text-lg shadow-lg"
              placeholder="Nhập từ khóa cần tìm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="absolute right-2 rounded-full px-6 bg-primary hover:bg-primary/90">
              Tìm kiếm
            </Button>
          </form>

          <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm">
            <span className="text-primary-foreground/70">Gợi ý:</span>
            {['Thông tư 200', 'Hóa đơn điện tử', 'Luật Kế toán 2015'].map(chip => (
              <button 
                key={chip}
                onClick={() => navigate(`/tra-cuu?q=${chip}`)}
                className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-white blur-3xl"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[80%] rounded-full bg-white blur-3xl"></div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: FileText, count: MOCK_DECREES.length, label: 'Văn bản pháp luật', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
          { icon: FolderOpen, count: CATEGORIES.length, label: 'Danh mục phân loại', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
          { icon: Bot, count: 'AI', label: 'Hỗ trợ thông minh', color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
          { icon: RefreshCw, count: '24/7', label: 'Cập nhật liên tục', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
        ].map((stat, i) => (
          <div key={i} className="bg-card border border-border p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
            <div className={`p-3 rounded-full mb-3 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">{stat.count}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Categories Grid */}
      <div>
        <h2 className="text-xl font-bold mb-4">Danh mục tra cứu</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CATEGORIES.map(category => (
            <div 
              key={category.id} 
              onClick={() => navigate(`/thu-vien?category=${category.slug}`)}
              className="bg-card border border-border p-4 rounded-xl hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <FolderOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Decrees */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cập nhật mới nhất</h2>
          <Button variant="link" onClick={() => navigate('/thu-vien')} className="text-primary">Xem tất cả &rarr;</Button>
        </div>
        <div className="space-y-3">
          {recentDecrees.map(decree => {
            const cat = CATEGORIES.find(c => c.id === decree.category);
            return (
              <div 
                key={decree.id}
                onClick={() => navigate(`/thu-vien/${decree.id}`)}
                className="bg-card border border-border p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex items-center gap-2 md:w-1/4">
                  <Badge variant={decree.status === 'active' ? 'default' : 'secondary'} className="rounded-sm">
                    {decree.status === 'active' ? 'Còn hiệu lực' : decree.status === 'expired' ? 'Hết hiệu lực' : 'Sắp có hiệu lực'}
                  </Badge>
                  <span className="font-bold whitespace-nowrap text-primary">{decree.decree_number}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium line-clamp-2">{decree.title}</h4>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground md:w-1/4 md:justify-end">
                  <span>{formatDate(decree.issued_date)}</span>
                  {cat && <Badge variant="outline">{cat.name}</Badge>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
