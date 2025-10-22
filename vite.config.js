import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Update this to match your repository name when deploying to GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/vulneracare-repo/' : '/',
})
