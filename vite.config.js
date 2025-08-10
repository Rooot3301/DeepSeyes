import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        faq: 'faq.html',
        demo: 'demo.html',
        tools: 'tools.html',
        nettrace: 'nettrace.html'
      }
    }
  }
})