import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatVnd(amount: bigint | number | undefined | null): string {
  if (amount === undefined || amount === null) return '0 ₫';
  const num = typeof amount === 'bigint' ? Number(amount) : amount;
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
}

export function formatNumber(amount: bigint | number | undefined | null): string {
  if (amount === undefined || amount === null) return '0';
  const num = typeof amount === 'bigint' ? Number(amount) : amount;
  return new Intl.NumberFormat('vi-VN').format(num);
}

export function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return '—';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('vi-VN');
  } catch {
    return dateStr;
  }
}
