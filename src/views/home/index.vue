<!--
 * @Descripttion: 首页
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-08-08 17:45:35
-->
<template>
  <top-nav />
  <banner />
  <icon-list />
  <recommended-music-list />
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

<style>
</style>
