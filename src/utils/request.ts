import axios from 'axios'
import { showFailToast } from 'vant'

const baseApiUrl = import.meta.env.VUE_APP_BASE_API_URL as string

const request = axios.create({
  baseURL: baseApiUrl,
  timeout: 60000
})

request.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'Bearer someRandomToken...'
    return config
  },
  (error) => {
    console.log('-----request error:', error)
    return Promise.reject(error)
  }
)
request.interceptors.response.use(
  (response) => {
    if (response.config.responseType === 'blob') {
      return response
    }
    const data = response.data
    if (data.code && data.code !== 200) {
      if (data.code === 401) {
        // logout
        showFailToast('expired, plz re-login?')
      } else if (data.code === 403) {
        // permission deny
        showFailToast('permission deny!')
      }
    }
    return Promise.resolve(data)
  },
  (error) => {
    console.log('-----axios error:', error)
    showFailToast(error.message || 'error')
    return Promise.reject(error)
  }
)

export default request
