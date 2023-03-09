import request from '@/utils/request'

export async function fetchZhihuHot(): Promise<any> {
  return request('/mock/api/news/zhihu')
}
