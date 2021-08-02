<!--
 * @Descripttion: 横向滑动菜单子组件
 * @Author: 无声<ivestszheng@qq.com>
 * @Date: 2021-07-05 22:49:25
 * @LastEditTime: 2021-07-05 22:54:05
-->
<template>
  <div class="sliding-menu-item">
    <van-icon class="icon" name="location" size="2.5rem" color="#1989fa" />
    <div class="text">每日推荐</div>
  </div>
</template>

<script lang='ts'>
export default {
  setup() {
  }
}
</script>

<style lang="less" scoped>
.sliding-menu-item {
  flex-shrink: 0;
  border-radius: 50%;
  .text {
    font-size: 0.75rem;
  }
}
</style>
