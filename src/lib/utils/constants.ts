import { Category } from '@/types/decree'

export const APP_NAME = 'Kế Toán KV Tra Cứu'
export const APP_DESCRIPTION = 'Tra cứu nghị định kế toán tài chính Việt Nam - Hỗ trợ bởi AI'

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Nghị định',
    slug: 'nghi-dinh',
    description: 'Nghị định của Chính phủ về kế toán, tài chính',
    icon: 'FileText',
  },
  {
    id: '2',
    name: 'Thông tư',
    slug: 'thong-tu',
    description: 'Thông tư hướng dẫn của Bộ Tài chính',
    icon: 'ScrollText',
  },
  {
    id: '3',
    name: 'Luật',
    slug: 'luat',
    description: 'Luật do Quốc hội ban hành',
    icon: 'Scale',
  },
  {
    id: '4',
    name: 'Chuẩn mực kế toán',
    slug: 'chuan-muc',
    description: 'Chuẩn mực kế toán Việt Nam (VAS)',
    icon: 'BookOpen',
  },
  {
    id: '5',
    name: 'Hóa đơn chứng từ',
    slug: 'hoa-don',
    description: 'Quy định về hóa đơn, chứng từ kế toán',
    icon: 'Receipt',
  },
  {
    id: '6',
    name: 'Thuế',
    slug: 'thue',
    description: 'Quy định về thuế liên quan kế toán',
    icon: 'Calculator',
  },
  {
    id: '7',
    name: 'Khoáng sản',
    slug: 'khoang-san',
    description: 'Quy định tài chính, kế toán ngành khoáng sản',
    icon: 'Mountain',
  },
  {
    id: '8',
    name: 'Nhân sự - Tiền lương',
    slug: 'nhan-su',
    description: 'Lao động, BHXH, Tiền lương',
    icon: 'Users',
  },
  {
    id: '9',
    name: 'Quyết định',
    slug: 'quyet-dinh',
    description: 'Quyết định của các cơ quan quản lý nhà nước & BHXH',
    icon: 'FileCheck',
  },
]

export const DECREE_STATUS_LABELS: Record<string, { label: string; color: string }> = {
  active: { label: 'Còn hiệu lực', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
  expired: { label: 'Hết hiệu lực', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  amended: { label: 'Đã sửa đổi', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
  replaced: { label: 'Đã được thay thế', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' },
}

export const CATEGORY_COLORS: Record<string, string> = {
  'nghi-dinh': 'border-l-blue-500',
  'thong-tu': 'border-l-purple-500',
  'luat': 'border-l-red-500',
  'chuan-muc': 'border-l-green-500',
  'hoa-don': 'border-l-orange-500',
  'thue': 'border-l-cyan-500',
  'khoang-san': 'border-l-yellow-600',
  'quyet-dinh': 'border-l-indigo-500',
}

export const TAX_FIELDS = [
  { slug: 'ke-toan-dn', name: 'Kế toán doanh nghiệp', icon: '📒' },
  { slug: 'quan-ly-thue', name: 'Quản lý thuế', icon: '🏛️' },
  { slug: 'thue-gtgt', name: 'Thuế GTGT', icon: '💰' },
  { slug: 'thue-tndn', name: 'Thuế TNDN', icon: '🏢' },
  { slug: 'thue-tncn', name: 'Thuế TNCN', icon: '👤' },
  { slug: 'hoa-don-dien-tu', name: 'Hóa đơn điện tử', icon: '🧾' },
  { slug: 'bhxh-lao-dong', name: 'BHXH - Lao động', icon: '🛡️' },
  { slug: 'khoang-san-tai-nguyen', name: 'Khoáng sản - Tài nguyên', icon: '⛏️' },
]
