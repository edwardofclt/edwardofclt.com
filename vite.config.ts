import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // Set to '/' for custom domains or '/<repo-name>/' for github.io subpath
  base: '/',
})
