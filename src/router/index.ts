/*
 * @Descripttion:
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-08-03 00:10:46
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
  } from 'vue-router'
  import Home from '@/views/home/index.vue'
  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  export default router
