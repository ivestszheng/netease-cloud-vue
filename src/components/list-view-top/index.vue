<!--
 * @Descripttion:
 * @Date: 2021-08-23 22:54:07
 * @LastEditTime: 2021-09-09 23:31:46
-->
<template>
  <div class="listViewTop">
    <img class="bg" :src="playlist.coverImgUrl" :alt="playlist.name" />
    <div class="left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrowLeft" />
      </svg>
      <div class="title">歌单</div>
    </div>
    <div class="right">
      <svg class="icon search" aria-hidden="true">
        <use xlink:href="#icon-sousuo" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['playlist'],
  mounted() {
    console.log('12312321', this.playlist);
  },
}
</script>

<style lang="less" scoped>
.icon {
  width: 0.5rem;
  height: 0.5rem;
  fill: #fff;
}
.listViewTop {
  display: flex;
  justify-content: space-between;
  height: 1.2rem;
  align-items: center;
  font-size: .35rem;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(40px);
  }
  .left,
  .right {
    color: #fff;
    display: flex;
  }
  .left {
    .title{
      margin-left: 0.4rem;
    }
  }
  .right{
    .search{
      margin-right: .5rem;
    }
  }
}
</style>
