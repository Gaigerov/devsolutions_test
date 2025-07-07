import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/devsolutions_test/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://numbersapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
