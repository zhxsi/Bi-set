import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import EslintPlugin from 'vite-plugin-eslint'
import viteCompression from 'vite-plugin-compression'
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, fileURLToPath(new URL('./src/env', import.meta.url)))
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        eslintrc: {
          enabled: true
        },
        imports: ['vue', 'vue-router', { '@/stores': ['useStore'], 'element-plus': ['ElMessage'] }, '@vueuse/core']
      }),
      Components({
        resolvers: [ElementPlusResolver({
          importStyle: 'sass'
        })]
      }),
      ElementPlus({ useSource: true }),
      EslintPlugin(),
      viteCompression(
        {
          verbose: true,
          disable: false,
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 1024 * 10,
          deleteOriginFile: true
        }
      )
    ],
    server: {
      host: env.VITE_APP_HOST,
      port: env.VITE_APP_PORT,
      open: true,
      cors: true
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: function (chunkInfo) {
            if (chunkInfo.name === 'favicon.ico' || chunkInfo.name === 'favicon.png' || chunkInfo.name === 'favicon.svg') {
              return '[name].[ext]'
            }
            if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/.test(chunkInfo.name)) {
              return 'static/fonts/[name]-[hash].[ext]'
            }
            if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(chunkInfo.name)) {
              return 'static/images/[name]-[hash].[ext]'
            }
            if (/\.css$/.test(chunkInfo.name)) {
              return 'static/css/[name]-[hash].[ext]'
            }
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/.test(chunkInfo.name)) {
              return 'static/videos/[name]-[hash].[ext]'
            }
            if (/\.js$/.test(chunkInfo.name)) {
              return 'static/js/[name]-[hash].[ext]'
            }
          },
          manualChunks (id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      sourcemap: false,
      chunkSizeWarningLimit: 1500,
      assetsInlineLimit: 1024 * 10
    },
    envDir: fileURLToPath(new URL('./src/env', import.meta.url)),
    publicDir: false,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '/assets': fileURLToPath(new URL('./src/assets', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/styles/element/light.scss";
          @use "@/assets/styles/element/dark.scss";
        `
        }
      }
    }
  }
})
