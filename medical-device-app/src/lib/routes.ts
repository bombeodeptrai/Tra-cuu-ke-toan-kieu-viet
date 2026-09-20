export const medicalRoutes = {
  laws: '/phap-luat',
  comparison: '/so-sanh',
  tenders: '/dau-thau',
  chat: '/hoi-dap-ai',
  templates: '/bieu-mau',
} as const;

export function routeWithQuery(path: string, query: Record<string, string>) {
  return `${path}?${new URLSearchParams(query).toString()}`;
}
