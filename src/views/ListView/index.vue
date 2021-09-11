<!--
 * @Descripttion: 歌单详情
 * @Date: 2021-08-22 23:27:56
 * @LastEditTime: 2021-09-11 14:39:12
-->
<template>
  <div class="listView">
    <list-view-top :playlist="playlist" />
    <play-list :playlist="playlist" />
  </div>
</template>

<script lang='ts'>
import { onMounted, reactive, toRefs } from 'vue'
import { getMusicListDetail } from '@/utils/api'
import { useRoute } from 'vue-router'
import listViewTop from '@/components/list-view-top/index.vue'
import playList from '@/components/play-list/index.vue'

export default {
  setup() {
    const route = useRoute()
    let state = reactive({ list: [], playlist: {creator:[],tracks:[]} })
    let id = route.query.id
    onMounted(async () => {
      let res = await getMusicListDetail(id)
      state.playlist = res.data.playlist
      console.log(res)
    })
      return {...toRefs(state)}
  },
  components: {
    listViewTop,
    playList
  },
}
</script>

<style lang="less" scoped>
</style>
