import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import zhihuMock from './mock/zhihu'
export function setupProdMockServer() {
  createProdMockServer([
    ...zhihuMock
  ])
}
