import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const emptyModuleId = '\0empty-module'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  resolve: {
    alias: {
      '@vercel/speed-insights/next': emptyModuleId,
    },
  },
})