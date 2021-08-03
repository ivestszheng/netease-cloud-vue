<!--
 * @Descripttion: 首页
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-08-03 23:21:00
-->
<template>
  <top-nav />
  <banner />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import banner from '@/components/banner/index.vue'
import topNav from '@/components/top-nav/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    banner,
    topNav
  }
})
</script>

<style>
</style>
