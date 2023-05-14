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
    setupFiles: './setup.ts',
    include: [ '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}' ],
    exclude: [ '**/__test__/**', '**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*' ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
})
