<!--
 * @Descripttion:
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-09-12 11:34:42
-->
<template>
  <router-view />
  <play-controller />
</template>

<script lang="ts">
import playController from '@/components/play-controller/index.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    playController
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #000;
  margin-bottom: 1.2rem;
}
a{
  color: #000;
  text-decoration: none;
}
.icon {
  width: 0.5rem;
  height: 0.5rem;
}
</style>
