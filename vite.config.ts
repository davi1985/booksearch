import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [path.resolve(__dirname, 'src/setup-tests.ts')],
    testMatch: ['./src/**/*.test.{js,jsx,ts,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      reportsDirectory: path.resolve(__dirname, 'coverage'),
      all: true,
    },
  },
} as UserConfig)
