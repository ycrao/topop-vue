import request from '@/utils/request'

export async function fetchShortVideo(url: string): Promise<any> {
  // https://api.iculture.cc/api/video/
  return request.get('/short-api/video/', {
    params: {
      url: url
    }
  })
}
