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
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/search/index.vue') // 懒加载组件
    }
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  export default router
