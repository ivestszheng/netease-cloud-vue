/*
 * @Descripttion:
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-08-22 23:19:58
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
  } from 'vue-router'
  
  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/views/Home/index.vue')
    },
    {
      path: '/listView',
      name: 'ListView',
      component: ()=>import('@/views/ListView/index.vue')
    },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  export default router
