<!--
 * @Descripttion: 头部导航
 * @Date: 2021-08-01 22:39:21
 * @LastEditTime: 2021-09-16 23:31:12
-->
<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao" />
      </svg>
    </div>
    <div class="topCenter">
      <span class="navBtn">我的</span>
      <span class="navBtn active">发现</span>
      <span class="navBtn">云村</span>
      <span class="navBtn">视频</span>
    </div>
    <div class="topRight" @click="$router.push('/searchview')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo" />
      </svg>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  setup() {}
}
</script>

<style lang="less" scoped>
.topNav {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .topCenter {
    width: 4.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .active {
      font-weight: 600;
      font-size: 0.4rem;
    }
  }
}
</style>
