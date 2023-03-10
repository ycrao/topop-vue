import { fileURLToPath, URL } from 'node:url'

import { loadEnv } from "vite";
import type { ConfigEnv, UserConfigExport } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from "vite-plugin-mock"


function packageEnv(mode: string, root: string) {
  const result: any = {}
  const envConf = loadEnv(mode, root)
  Object.keys(envConf).forEach((envName) => {
    result[envName] = envConf[envName]
  })
  return result
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const root = process.cwd()
  const env = packageEnv(mode, root)
  const { VITE_APP_PROXY_API_TARGET, VITE_APP_BASE_API_URL } = env
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve' || mode === 'mock',
        // localEnabled: true,
        prodEnabled: false,
        logger: true,
        //
        injectCode: `
          import { setupProdMockServer } from './mockProdServer'
          setupProdMockServer()
        `
      }),
    ],
    // see: https://cn.vitejs.dev/config/server-options.html#server-proxy
    /*
    server: {
      host: true,
      open: true,
      proxy: {
        '/api': {
          // target: 'https://jsonplaceholder.typicode.com',
          target: VITE_APP_PROXY_API_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
    },
     */
    // see: https://cn.vitejs.dev/config/preview-options.html
    /*
    preview: {
      host: true,
      open: true,
      proxy: {
        '/api': {
          target: VITE_APP_BASE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
    },
     */
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
}
