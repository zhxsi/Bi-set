const route = {
  path: '/',
  component: () => import('@/views/Layout/index.vue'),
  meta: { title: '首页' },
  children: [
    {
      path: '/',
      meta: { title: 'text1', index: 1 },
      component: () => import('@/views/text/text1.vue')
    },
    {
      path: '/text2',
      meta: { title: 'text2', index: 2 },
      component: () => import('@/views/text/text2.vue')
    },
    {
      path: '/text3',
      meta: { title: 'text3', index: 3 },
      component: () => import('@/views/text/text3.vue')
    },
    {
      path: '/text4',
      meta: { title: 'text4', index: 4 },
      component: () => import('@/views/text/text4.vue')
    },
    {
      path: '/text5',
      meta: { title: 'text5', index: 5 },
      component: () => import('@/views/text/text5.vue')
    },
    {
      path: '/text6',
      meta: { title: 'text6', index: 6 },
      component: () => import('@/views/text/text6.vue')
    },
    {
      path: '/text7',
      meta: { title: 'text7', index: 7 },
      component: () => import('@/views/text/text6.vue')
    },
    {
      path: '/text8',
      meta: { title: 'text8', index: 8 },
      component: () => import('@/views/text/text6.vue')
    }
  ]
}
export default route
