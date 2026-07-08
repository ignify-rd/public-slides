import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/public-slides/ai-coding-agent-harness/',
  plugins: [react(), tailwindcss()],
})
