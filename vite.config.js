import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { publicPath } from './vue.config'
const ASSET_URL = process.env.ASSET_URL || ''
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: `${ASSET_URL}`,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          return 'assets/' + asset.name
        },
        chunkFileNames: (chInfo) => {
          return 'chunks/chunk/' + chInfo.name.replace('_', '') + '.js'
        }
      }
    }
  }
})
