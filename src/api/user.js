import request from '@/utils/request'
// 获取用户关注列表
export function subcount (data) {
  return request({
    url: '/user/follows',
    method: 'post',
    params: data
  })
}
// 登录状态
export function loginStatus (data) {
  return request({
    url: '/login/status',
    method: 'post'
  })
}
