import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/Tra-c-u-K-To-n-Ki-u-Vi-t/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
