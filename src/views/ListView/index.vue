<!--
 * @Descripttion: 歌单详情
 * @Date: 2021-08-22 23:27:56
 * @LastEditTime: 2021-09-09 23:12:00
-->
<template>
  <div class="listView">
    <list-view-top :playlist="state.playlist" />
    {{state.playlist.commentCount}}
  </div>
</template>

<script lang='ts'>
import { onMounted, reactive } from 'vue'
import { getMusicListDetail } from '@/utils/api'
import { useRoute } from 'vue-router'
import ListViewTop from '@/components/list-view-top/index.vue'

export default {
  setup() {
    const route = useRoute()
    let state = reactive({ list: [], playlist: {} })
    let id = route.query.id
    onMounted(async () => {
      let res = await getMusicListDetail(id)
      state.playlist = res.data.playlist
      console.log(res)
    })
      return {state}
  },
  components: {
    ListViewTop,
  },
}
</script>

<style lang="less" scoped>
</style>
