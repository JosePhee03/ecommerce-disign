/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/__test__/setup.ts'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
})
