/// <reference types="vite/client" />
interface ImportMetaEnv extends Readonly<Record<string, string>>{

  readonly VITE_APP_PROXY_API_TARGET: string

  readonly VITE_APP_BASE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
