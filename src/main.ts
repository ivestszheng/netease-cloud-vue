import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import { Icon,Button, Toast, Swipe, SwipeItem, Tabbar,TabbarItem, Search,Grid, GridItem } from 'vant'

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
.mount('#app')
