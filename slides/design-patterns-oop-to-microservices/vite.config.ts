import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/public-slides/design-patterns-oop-to-microservices/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
