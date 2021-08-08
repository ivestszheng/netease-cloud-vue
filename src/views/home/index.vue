<!--
 * @Descripttion: 首页
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-08-08 16:32:00
-->
<template>
  <top-nav />
  <banner />
  <icon-list />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import banner from '@/components/banner/index.vue'
import topNav from '@/components/top-nav/index.vue'
import iconList from '@/components/icon-list/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    banner,
    topNav,
    iconList
  }
})
</script>

<style>
</style>
