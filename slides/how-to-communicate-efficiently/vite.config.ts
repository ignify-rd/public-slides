import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/public-slides/how-to-communicate-efficiently/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
