/// <reference types="vite/client" />
interface ImportMetaEnv extends Readonly<Record<string, string>>{
  /**
   * 页面标题
   */
  readonly VITE_APP_DEFAULT_TITLE: string
  /**
   * 后端api地址
   */
  readonly VITE_APP_BASE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
