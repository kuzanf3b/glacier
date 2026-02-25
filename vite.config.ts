import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "${path.resolve(__dirname, "src/assets/scss/variables").replace(/\\/g, "/")}" as *;
          @use "${path.resolve(__dirname, "src/assets/scss/mixins").replace(/\\/g, "/")}" as *;
        `,
      },
    },
  },
})
