import request from '@/utils/request'
export function getMv (data) {
  return request({
    url: '/artist/mv',
    method: 'post',
    params: data
  })
}
export function mvx (data) {
  return request({
    url: '/mv/url',
    method: 'post',
    params: data
  })
}
