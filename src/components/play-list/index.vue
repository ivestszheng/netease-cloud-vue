<!--
 * @Descripttion:
 * @Date: 2021-09-11 14:31:10
 * @LastEditTime: 2021-09-16 22:39:37
-->
<template>
  <div class="playlist">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon play" aria-hidden="true" @click="$router.push('/')">
          <use xlink:href="#icon-bofang" />
        </svg>
        <div class="title">播放全部</div>
        <div class="num">(共{{ playlist.tracks.length }}首)</div>
      </div>
      <div class="btn">+ 收藏({{ changeVal(playlist.subscribedCount) }})</div>
    </div>
    <div class="list">
      <div class="playItem" v-for="(item, i) in playlist.tracks" :key="i">
        <div class="left">
          <div class="index">{{ i + 1 }}</div>
          <div class="content">
            <div class="title" @click="setPlayIndex(i)">{{ item.name }}</div>
            <div class="author">
              <span>{{ item.al.name }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shipinbofangyingpian" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caozuo" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: ['playlist'],
  methods: {
    ...mapMutations(['setPlayIndex']),
    changeVal(num) {
      let res = 0
      if (num >= 100000000) {
        res = (num / 100000000).toFixed(2) + '亿'
      } else if (num > 10000) {
        res = (num / 10000).toFixed(0) + '万'
      }else{
        res = num
      }
      return res
    }
  }
}
</script>

<style lang="less" scoped>
.playlist-top {
  display: flex;
  justify-content: space-between;
  height: 0.8rem;
  align-items: center;
  background: #fff;
  border-radius: 18pt 18pt 0 0;
  padding: 0.15rem 0.15rem 0.25rem 0.15rem;
  .left {
    display: flex;
    align-items: center;
    .play {
      margin-right: 0.25rem;
    }
    .title {
      font-size: 0.325rem;
      font-weight: normal;
    }
    .num {
      font-size: 0.3rem;
      color: rgb(128, 128, 128);
    }
  }
  .btn {
    background: #fe393c;
    color: #fff;
    border-radius: 16pt;
    width: 2.5rem;
    height: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.list {
  background-color: #fff;
  padding: 0 0.3rem;
  .playItem {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.1rem;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
          max-width: 5.5rem;
    text-overflow: ellipsis;
      .index {
        width: 0.1rem;
        color: #ccc;
      }
      .content {
        margin-left: 0.4rem;
        .title {
          font-size: 0.325rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 5rem;
        }
        .author {
          font-size: 0.2rem;
          color: #ccc;
          display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
        }
      }
    }
    .right {
      width: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        width: 0.325rem;
        height: 0.325rem;
        fill: #ccc;
      }
    }
  }
}
</style>
