import { format, parseISO } from 'date-fns'
import { vi } from 'date-fns/locale'

export function formatDate(dateStr: string): string {
  try {
    return format(parseISO(dateStr), 'dd/MM/yyyy', { locale: vi })
  } catch {
    return dateStr
  }
}

export function formatDateFull(dateStr: string): string {
  try {
    return format(parseISO(dateStr), "dd 'tháng' MM, yyyy", { locale: vi })
  } catch {
    return dateStr
  }
}

export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '...'
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}
