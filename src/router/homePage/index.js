import { Plus, Minus, CirclePlus, Search, Female, Male, Aim, House } from '@element-plus/icons-vue'
const route = {
  path: '/',
  component: () => import('@/views/Layout/index.vue'),
  meta: { title: '首页' },
  children: [
    {
      path: '/',
      meta: { title: 'text1', index: 0, icon: Plus },
      component: () => import('@/views/text/text1.vue')
    },
    {
      path: '/text2',
      meta: { title: 'text3', index: 2, icon: Minus },
      component: () => import('@/views/text/text2.vue')
    },
    {
      path: '/text3',
      meta: { title: 'text3', index: 3, icon: CirclePlus },
      component: () => import('@/views/text/text3.vue')
    },
    {
      path: '/text4',
      meta: { title: 'text4', index: 4, icon: Search },
      component: () => import('@/views/text/text4.vue')
    },
    {
      path: '/text5',
      meta: { title: 'text5', index: 5, icon: Female },
      component: () => import('@/views/text/text5.vue')
    },
    {
      path: '/text6',
      meta: { title: 'text6', index: 6, icon: Male },
      component: () => import('@/views/text/text6.vue')
    },
    {
      path: '/text7',
      meta: { title: 'text7', index: 7, icon: Aim },
      component: () => import('@/views/text/text6.vue')
    },
    {
      path: '/text8',
      meta: { title: 'text8', index: 8, icon: House },
      component: () => import('@/views/text/text6.vue')
    }
  ]
}
export default route
