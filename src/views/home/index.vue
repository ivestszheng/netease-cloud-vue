<!--
 * @Descripttion: 首页
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-09-11 16:11:39
-->
<template>
<div class="home">
  <top-nav />
  <banner />
  <icon-list />
  <recommended-music-list />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import banner from '@/components/banner/index.vue'
import topNav from '@/components/top-nav/index.vue'
import iconList from '@/components/icon-list/index.vue'
import recommendedMusicList from '@/components/recommended-music-list/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    banner,
    topNav,
    iconList,
    recommendedMusicList
  }
})
</script>

<style lang="less" scoped>
.home{
    padding: 0 0.25rem;
}
</style>
