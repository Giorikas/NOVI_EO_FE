import { defineConfig } from 'vite'
import cors from 'cors';
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    middleware: [
        cors({
          allowedOrigins: 'http://localhost:8080',
          credentials: true // Optional: enable sending cookies with the request: Leststof voor als we ....
            }

        )
    ]
  },
  plugins: [react()],
})
