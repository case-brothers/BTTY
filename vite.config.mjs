process.env.NAPI_RS_FORCE_WASI = process.env.NAPI_RS_FORCE_WASI || '1'

import { defineConfig } from 'vite'

const { default: react } = await import('@vitejs/plugin-react')
const { default: tailwindcss } = await import('@tailwindcss/vite')

export default defineConfig({
  plugins: [react(), tailwindcss()],
  cacheDir: '.vite-cache-v2',
  // Honour an assigned PORT so the dev server can share a machine with other
  // running projects. Ignored by `vite build`.
  server: {
    port: Number(process.env.PORT) || 5173,
  },
  build: {
    outDir: 'dist',
  },
})
