import request from '@/utils/request'
// 搜索
export function searchforsongs (data) {
  return request({
    url: '/cloudsearch',
    method: 'post',
    params: data
  })
}
// 搜索建议
export function searchSuggestions (data) {
  return request({
    url: '/search/suggest',
    method: 'post',
    params: data
  })
}
