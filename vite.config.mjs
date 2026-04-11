process.env.NAPI_RS_FORCE_WASI = process.env.NAPI_RS_FORCE_WASI || '1'

import { defineConfig } from 'vite'

const { default: react } = await import('@vitejs/plugin-react')
const { default: tailwindcss } = await import('@tailwindcss/vite')

export default defineConfig({
  plugins: [react(), tailwindcss()],
  cacheDir: '.vite-cache-v2',
  build: {
    outDir: process.env.NETLIFY ? 'dist' : 'site-dist-v12',
  },
})
