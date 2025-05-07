// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-mystery-game/', // ← 這裡非常重要，要和你 GitHub Pages 網址對應
  plugins: [react()],
})
