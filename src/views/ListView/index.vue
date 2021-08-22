<!--
 * @Descripttion: 歌单详情
 * @Date: 2021-08-22 23:27:56
 * @LastEditTime: 2021-08-22 23:52:03
-->
<template>
   <div>123123</div>
</template>

<script lang='ts'>
import {onMounted, reactive} from 'vue'
import {getMusicListDetail} from '@/utils/api'
import { useRoute } from 'vue-router'

export default {
   setup(){
     const route = useRoute()
     console.log('route',route);

     let state = reactive({list:[]})
     let id = route.query.id
     onMounted(async ()=>{
       let res = await getMusicListDetail(id)
       console.log(res)
     })
   }
}
</script>

<style scoped>
</style>
