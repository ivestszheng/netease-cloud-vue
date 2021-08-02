<!--
 * @Descripttion:
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-08-03 00:00:56
-->
<template>
  <search />
  <banner />
  <tabbar />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import banner from '@/components/banner/index.vue'
import tabbar from '@/components/tabbar/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    banner,
    tabbar,
  }
})
</script>

  <style>
</style>
