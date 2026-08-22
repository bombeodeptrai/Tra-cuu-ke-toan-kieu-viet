import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/Tra-cuu-ke-toan-kieu-viet/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
