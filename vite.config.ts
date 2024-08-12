import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "Personal-Website",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    },
    extensions: ['.js', '.ts', '.vue']
  }
})