import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: './' ensures assets are linked relatively, which is essential 
  // for GitHub Pages if you are not using a custom domain.
  base: '/page_test', 
})