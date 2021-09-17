/*
 * @Descripttion:
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-09-17 21:54:50
 */
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import { Icon,Button, Toast, Swipe, SwipeItem, Tabbar,TabbarItem, Search,Grid, GridItem  } from 'vant'
import $store from '@/store/index'

createApp(App)
.use(Router)
.use(Icon)
.use(Button)
.use(Toast)
.use(Swipe)
.use(SwipeItem)
.use(Tabbar)
.use(TabbarItem)
.use(Search)
.use(Grid)
.use(GridItem)
.use(Search)
.use($store)
.mount('#app')
