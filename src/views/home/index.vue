<!--
 * @Descripttion:
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-08-03 00:10:29
-->
<template>
  <banner />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import banner from '@/components/banner/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    banner
  }
})
</script>

  <style>
</style>
