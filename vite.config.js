import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendors": ["react", "react-dom", "react-router-dom"],
          "ui-libs": ["react-icons", "react-scroll", "typewriter-effect"],
          "analytics": ["react-ga4"],
        },
      },
    },
  },
})
