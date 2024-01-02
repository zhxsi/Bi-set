import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      user: null,
      img: 'https://store.zhxsi.link/动漫/IMG_20230322_220929.jpg'
    }
  },
  getters: {
    account: (state) => {
      if (state.user !== null) {
        return state.user.account !== undefined
      }
    }
  },
  // 定义修改state的函数，函数第一个参数是state
  actions: {
    // 设置与清除用户信息
    setUser (user) {
      this.user = user
    },
    // 刷新cookie
    getCookie (cookie) {
      this.user.cookie = cookie
    }
  },
  persist: true
})
