<!--
 * @Descripttion: 图标列表组件
 * @Date: 2021-08-08 14:26:16
 * @LastEditTime: 2021-09-11 13:41:42
-->
<template>
  <div class="iconList">
    <div class="iconItem" v-for="item in iconList" :key="item['id']">
      <div class="icon">
        <img :src="item['iconUrl']" />
      </div>
      <div class="text">{{ item['name'] }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { getHomeList } from '../../utils/api';

export default {
  name: 'icon-list',
  data() {
    return {
      iconList: []
    }
  },
  mounted() {
    getHomeList().then((res:any) => {
      if (res.status == 200) {
        this.iconList = res.data.data
      }
    });
  },
  components: {}
}
</script>

<style lang="less" scoped>
.iconList {
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  padding: 0.2rem 0;
  height: 1.1rem;
  border-bottom: 1px solid rgba(185, 185, 185, 0.4);
  margin-bottom: 0.15rem;
  text-align: center;
  .iconItem {
    margin-right: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 0.8rem;
      height: 0.8rem;
      background: red;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      font-size: 0.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0.9rem;
    }
  }
}
/*-------隐藏滚动条----*/
.iconList::-webkit-scrollbar {
  display: none;
}
</style>
