import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: 'proj-html-vuejs', // Sostituisci con il nome esatto del tuo repo GitHub
  plugins: [vue()],
})
