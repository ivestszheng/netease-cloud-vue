<!--
 * @Descripttion: 推荐歌单
 * @Date: 2021-08-08 17:44:07
 * @LastEditTime: 2021-08-08 20:00:50
-->
<template>
  <div>
    <div class="head">
      <span>推荐歌单</span>
      <span>更多></span>
    </div>
    <div class="items">
      <div class="item" v-for="(item, i) in recommendedMusicList" :key="i">
        <img :src="item.picUrl" :alt="item.name" />
        <div class="title">{{ item.name }}</div>
        <div class="count">{{ item.playCount }}</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { getRecommendedMusicList } from '@/utils/api'

export default {
  data() {
    return {
      recommendedMusicList: []
    }
  },
  mounted: async function () {
    let res = await getRecommendedMusicList()
    this.recommendedMusicList = res.data.result
  }
}
</script>

<style lang="less" scoped>
.head{
  display: flex;
  justify-content: space-between;
}
.items {
  display: flex;
  overflow-x: auto;
  .item {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
