import request from '@/utils/request'
// 登录
export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    params: data
  })
}
// 刷新登录
export function refreshCookie (data) {
  return request({
    url: '/login/refresh',
    method: 'post',
    params: data
  })
}

// 退出登录
export function logout (data) {
  return request({
    url: '/logout',
    method: 'post'
  })
}
// 退出登录
export function loginStatus (data) {
  return request({
    url: '/login/status',
    method: 'post'
  })
}
// 二维码 key 生成接口
export function qrCodekey (data) {
  return request({
    url: '/login/qr/key',
    method: 'post'
  })
}
// 二维码生成接口
export function qrcodeGeneration (data) {
  return request({
    url: '/login/qr/create',
    method: 'post',
    data
  })
}
