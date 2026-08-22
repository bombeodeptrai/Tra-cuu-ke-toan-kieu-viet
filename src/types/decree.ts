export interface Decree {
  id: string
  decree_number: string
  title: string
  content?: string
  summary: string
  category: string
  issued_date: string
  effective_date: string
  status: 'active' | 'expired' | 'amended'
  source_url: string
  pdf_drive_id?: string
  content_url?: string
  pdf_url?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon: string
}

export interface DecreeSearchResult {
  item: Decree
  score: number
  matches?: Array<{
    key: string
    value: string
    indices: Array<[number, number]>
  }>
}
