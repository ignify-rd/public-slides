import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/public-slides/rd-1000-gstack-summary/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
