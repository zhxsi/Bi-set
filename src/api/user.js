import request from '@/utils/request'
// 登录
export function subcount (data) {
  return request({
    url: '/user/follows',
    method: 'post',
    params: data
  })
}

export function Refresh () {
  return request({
    url: '/login/refresh',
    method: 'post'
  })
}
