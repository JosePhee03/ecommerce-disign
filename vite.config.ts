import { defineConfig } from 'vitest/config'
import * as path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: { 
      find: '@', replacement: path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      assets: `${path.resolve(__dirname, './src/assets')}`,
      pages: path.resolve(__dirname, './src/pages'),
      models: `${path.resolve(__dirname, './src/models')}`,
    },
  },
})
