import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/teasers/*',
          dest: 'assets/teasers',
        },
      ],
    }),
  ],
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
})