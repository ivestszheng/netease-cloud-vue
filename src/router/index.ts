/*
 * @Descripttion:
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-09-14 21:59:44
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
      path: '/listview',
      name: 'listview',
      component: ()=>import('@/views/ListView/index.vue')
    },
    {
      path: '/searchview',
      name: 'searchView',
      component: ()=>import('@/views/searchView/index.vue')
    },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  export default router
