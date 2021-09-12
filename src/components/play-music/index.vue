<!--
 * @Descripttion:
 * @Date: 2021-09-12 17:02:47
 * @LastEditTime: 2021-09-12 21:40:16
-->
<template>
  <div class="playMusic">
    <div class="bg" :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrowLeft" />
        </svg>
      </div>
          <marquee >{{ playDetail.name }}</marquee>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang" />
        </svg>
      </div>
    </div>
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
  .playTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    .icon {
      fill: #fff;
    }
    .back{
      padding-left: .4rem;
    }
    .share{
      padding-right: .4rem;
    }
    marquee{
      width: 5rem;
      flex: 1;
    }
  }
}
</style>
