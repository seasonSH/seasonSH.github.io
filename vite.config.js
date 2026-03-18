import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages deploys to https://seasonsh.github.io/
  // so base should be '/' for a user/org page (username.github.io)
  base: '/',
})
