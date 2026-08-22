export interface ChatAttachment {
  type: 'image' | 'file'
  name: string
  url?: string
  data?: string // base64
  mimeType?: string
  size?: number
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  attachments?: ChatAttachment[]
  timestamp: number
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  created_at: number
  updated_at: number
}
