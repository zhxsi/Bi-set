import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      user: 123
    }
  },
  getters: {
    // cookie: (state) => {
    //   return state.user !== null ? state.user.cookie : null
    // },
    // uid: (state) => {
    //   return state.user !== null ? state.user.account.userId : null
    // }
  },
  // 定义修改state的函数，函数第一个参数是state
  actions: {
    // 设置与清除用户信息
    // setUser (user) {
    //   this.user = user
    // },
    // // 刷新cookie
    // getCookie (cookie) {
    //   this.user.cookie = cookie
    // }
  },
  persist: true
})
