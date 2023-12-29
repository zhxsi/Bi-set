import { createRouter, createWebHistory } from 'vue-router'
import 'nprogress/nprogress.css'
import homePage from './homePage/index.js'
const routes = [
  homePage
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
