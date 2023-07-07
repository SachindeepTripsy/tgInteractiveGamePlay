import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Package from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir:`${Package.versionCode}/`
  }
})
