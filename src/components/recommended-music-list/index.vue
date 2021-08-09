<!--
 * @Descripttion: 推荐歌单
 * @Date: 2021-08-08 17:44:07
 * @LastEditTime: 2021-08-09 22:54:05
-->
<template>
  <div>
    <div class="head">
      <span class="head-title">推荐歌单</span>
      <span class="more">更多 ></span>
    </div>
    <div class="items">
      <div class="item" v-for="(item, i) in recommendedMusicList" :key="i">
        <img :src="item.picUrl" :alt="item.name" />
        <div class="title">{{ item.name }}</div>
        <div class="count">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofangsanjiaoxing"></use>
          </svg>
          {{ changeVal(item.playCount) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { getRecommendedMusicList } from '@/utils/api'

export default {
  data() {
    return {
      recommendedMusicList: []
    }
  },
  methods: {
    changeVal(num: any) {
      let res: Number | String = 0
      if (num >= 100000000) {
        res = (num / 100000000).toFixed(2) + '亿'
      } else if (num > 10000) {
        res = (num / 10000).toFixed(0) + '万'
      }
      return res
    }
  },
  mounted: async function () {
    let res = await getRecommendedMusicList()
    this.recommendedMusicList = res.data.result
  }
}
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .head-title {
    font-size: 0.325rem;
    font-weight: bold;
  }
  .more {
    border: 1px solid rgba(128, 128, 128, 0.2);
    border-radius: 0.2rem;
    font-size: 0.2rem;
    width: 1rem;
    height: 0.325rem;
    line-height: 0.325rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.items {
  display: flex;
  overflow-x: auto;
    padding-top: 0.25rem;
  .item {
    margin-right: 0.2rem;
    position: relative;
    .title {
      font-size: 0.1rem;
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      position: absolute;
      font-size: 0.24rem;
      top: 0.1rem;
      right: 0.1rem;
      color: #fff;
      background: rgba(0, 0, 0, .4);
      border-radius: 0.2rem;
      padding: 0 0.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 0.25rem;
      .icon {
        fill: #fff; // SVG 要用属性 fill
        height: 100%;
        width: 0.24rem;
      }
    }
    img {
      width: 2rem;
      height: auto;
      border-radius: 5%;
      box-shadow: 2px 2px 2px 1px rgba(128,128,128,.2);
    }
  }
}
/*-------隐藏滚动条----*/
.items::-webkit-scrollbar {
  display: none;
}
</style>
