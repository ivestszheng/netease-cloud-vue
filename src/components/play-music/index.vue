<!--
 * @Descripttion:
 * @Date: 2021-09-12 17:02:47
 * @LastEditTime: 2021-09-12 19:01:06
-->
<template>
  <div class="playMusic">
    <div class="bg" :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"></div>
    <div class="playTop"></div>
    <div class="playContent"></div>
    <div class="playLyric"></div>
    <div class="progeress"></div>
    <div class="playFooter"></div>
  </div>
</template>

<script>
export default {
  name: 'playMusic',
  props: ['playDetail'],
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
      background-color: #fff;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(60px);
  }
}
</style>
