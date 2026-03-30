import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/public-slides/giao-tiep-hieu-qua-trong-team/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
