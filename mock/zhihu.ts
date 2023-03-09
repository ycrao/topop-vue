import type { MockMethod } from "vite-plugin-mock";

import zhihuHotItems from './json/zhihuHot.json'

export default [
  {
    url: '/mock/api/news/zhihu',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: zhihuHotItems
      }
    }
  }
] as MockMethod[]
