import { createRouter, createWebHistory } from 'vue-router'
// import { useStore } from '@/store'
// 路由跳转时的进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
  {
    path: '/',
    name: 'index',
    meta: { title: `${import.meta.env.VITE_APP_TITLE}` },
    component: () => import('@/views/index/index.vue'),
    children: [
      { path: '/log1', name: 'log1', meta: { title: 'log1', keepAlive: true }, component: () => import('@/views/log1.vue') },
      { path: '/log2', name: 'log2', meta: { title: 'log2', keepAlive: true }, component: () => import('@/views/log2.vue') }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start() // 进度条开始
  next()
})

router.afterEach(() => {
  NProgress.done() // 进度条结束
})
// 进度条配置项
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载 icon
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})
export default router