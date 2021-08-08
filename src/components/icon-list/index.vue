<!--
 * @Descripttion: 图标列表组件
 * @Date: 2021-08-08 14:26:16
 * @LastEditTime: 2021-08-08 17:04:24
-->
<template>
  <div class="iconList">
    <div class="iconItem" v-for="item in iconList" :key="item.id">
      <div class="icon">
        <img :src="item.iconUrl" />
      </div>
      <div class="font">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import { getHomeList } from '../../utils/api';

export default {
  name: 'icon-list',
  data() {
    return {
      iconList: []
    }
  },
  mounted() {
    getHomeList().then((res) => {
      if (res.status == 200) {
        this.iconList = res.data.data
        console.log(this.iconList);
      }
    });
  },
  components: {}
}
</script>

<style lang="less" scoped>
.iconList {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  padding: 0.2rem 0;
  .iconItem {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.5rem;
    .icon {
      width: 1rem;
      height: 1rem;
      background: red;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .font {
      font-size: 0.25rem;
    }
  }
}
  /*-------隐藏滚动条----*/
  .iconList::-webkit-scrollbar {
    display: none;
  }
</style>
