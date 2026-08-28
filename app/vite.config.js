import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/tabuTechLabs/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      tailwindcss: fileURLToPath(new URL('./src/styles/tailwind-compat.css', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
  },
}))
