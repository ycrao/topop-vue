declare global {
  declare interface ViteEnv {
    VITE_APP_BASE_API_URL: string
    VITE_APP_PROXY_API_TARGET: string
  }
}

export {}
