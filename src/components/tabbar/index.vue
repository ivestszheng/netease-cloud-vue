<!--
 * @Descripttion: 底部导航栏组件
 * @Author: 无声<ivestszheng@qq.com>
 * @Date: 2021-06-30 09:27:30
 * @LastEditTime: 2021-07-04 17:51:45
-->
<template>
    <van-tabbar active="{{ active }}" bind:change="onChange">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
</template>

<script lang='ts'>
export default {
  setup() {
    // console.log('tab');
  },
};
</script>

<style lang='less' scoped>
</style>
