import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/view_contacts": {
        target: 'http://127.0.0.1:5000/',
        changeOrigin: true,
        secure: false,
      },
      "/add_contact" : {
        target: 'http://127.0.0.1:5000/',
        changeOrigin: true,
        secure: false,
      },
      "/delete_contact": {
        target: 'http://127.0.0.1:5000/',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
