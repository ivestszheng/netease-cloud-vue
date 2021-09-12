<!--
 * @Descripttion:
 * @Date: 2021-09-11 21:35:11
 * @LastEditTime: 2021-09-12 11:42:23
-->
<template>
  <div class="playController">
    <div class="left">
      <img :src="playlist[playCurrentIndex].al.picUrl" />
      <div class="content">
        <div class="title">{{ playlist[playCurrentIndex].al.name }}</div>
        <div class="tips">横滑可以切换上下首哦</div>
      </div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true" @click="$router.push('/')">
        <use xlink:href="#icon-bofang" />
      </svg>
      <svg class="icon" aria-hidden="true" @click="$router.push('/')">
        <use xlink:href="#icon-liebiao1" />
      </svg>
    </div>
  </div>
</template>

<script>
import $store from '@/store/index'
import { mapState } from 'vuex'

export default {
  computed: {
    // 一用 mapState 就报 Cannot read property 'state' of undefined
    // ...mapState(['playlist','playCurrentIndex']),
    playlist() {
      return $store.state.playlist
    },
    playCurrentIndex() {
      return $store.state.playCurrentIndex
    }
  },
}
</script>

<style lang="less" scoped>
.playController {
  width: 100vw;
  height: 1.2rem;
  position: fixed;
  z-index: 999;
  background: #fff;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  .left {
    display: flex;
    padding-left: .1rem;
    img{
      width: .8rem;
      height: .8rem;
      border-radius: 50%;
      margin-right: .25rem;
    }
  }
  .right{
        padding-right: .1rem;
    .icon{
      width: .75rem;
      height: .75rem;
      fill: #ccc;
    }
    .icon:last-child{
      margin-left: .25rem;
    }
  }
}
</style>
