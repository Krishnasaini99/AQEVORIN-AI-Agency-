import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: true,
    fs: {
      // E:\All Agents is a junction to G:\All Agents - allow both paths
      allow: ['E:/All Agents', 'G:/All Agents']
    }
  }
})
