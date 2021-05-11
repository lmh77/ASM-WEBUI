import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const setAlias = (aliasArray: string[][]) => {
  return aliasArray.map((v) => {
    return { find: v[0], replacement: path.resolve(__dirname, v[1]) }
  })
}

export default defineConfig({
  resolve: {
    alias: setAlias([['/@', 'src']])
  },
  build: {
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          'element-plus': ['element-plus']
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  plugins: [vue()],
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3001/',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // },
    // port: 3002
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('postcss-simple-vars'),
        require('postcss-import')
      ]
    }
  }
})
