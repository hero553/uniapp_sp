import http from '@/utils/request/request'
export function login(data) {
  return http.request({
    url: '/login',
    method: 'post',
    data
  })
}
