import request from '@/utils/request'

export async function fetchZhihuHot(): Promise<any> {
  return request.get('/mock/api/news/zhihu')
}
