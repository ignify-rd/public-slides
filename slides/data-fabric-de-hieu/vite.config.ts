import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/public-slides/data-fabric-de-hieu/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
