<!--
 * @Descripttion: 轮播图组件
 * @Author: 无声<ivestszheng@qq.com>
 * @Date: 2021-06-29 21:59:32
 * @LastEditTime: 2021-07-08 15:02:10
-->
<template>
    <van-swipe class="my-swipe" :autoplay="3000" lazy-render>
        <van-swipe-item v-for="banner in banners" :key="banner">
            <!-- 这里不别用 :src="banner.pic" 虽然也能加载出图片，但是TS会报错 -->
            <img :src="banner['pic']" />
        </van-swipe-item>
    </van-swipe>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
import { getBanner } from '../../utils/api';

export default {
  setup() {
    const data = reactive(
      { banners: [] },
    );
    getBanner().then((res: any) => {
      if (res) {
        // console.log('轮播图数据：', res);
        data.banners = res.data.banners;
      } else {
        // console.log('无法获取到轮播图信息');
      }
    });
    return { ...toRefs(data) };
  },
};
</script>
<style lang="less" scoped>
.my-swipe {
    height: 10rem;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
