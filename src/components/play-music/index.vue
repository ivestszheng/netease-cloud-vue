<!--
 * @Descripttion:
 * @Date: 2021-09-12 17:02:47
 * @LastEditTime: 2021-09-12 23:14:02
-->
<template>
  <div class="playMusic">
    <div class="bg" :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrowLeft" />
        </svg>
      </div>
      <marquee scrollamount="2">{{ playDetail.name }}</marquee>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang" />
        </svg>
      </div>
    </div>
    <div class="playContent" v-show="!isLyric" @click="isLyric=!isLyric">
      <img class="needle" :class="{active: !paused}" src="@/assets/imgs/needle.png" />
      <img class="disc" src="@/assets/imgs/disc.png" />
      <img class="playImg" :src="playDetail.al.picUrl" />
    </div>
    <div class="playLyric" v-show="isLyric" @click="isLyric=!isLyric">
      {{lyric}}
    </div>
    <div class="progeress"></div>
    <div class="playFooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige" />
      </svg>
      <svg v-show="paused" class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang" />
      </svg>
      <svg v-show="!paused" class="icon paused" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayigexiayishou" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao1" />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'playMusic',
  props: ['playDetail','paused','play'],
  data() {
    return {
      isLyric: true
    }
  },
    computed: {
    ...mapState(['lyric']),
  },
}
</script>

<style lang="less" scoped>
.icon {
  fill: #fff;
}
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(60px);
  }
  .playTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    .back {
      padding-left: 0.4rem;
    }
    .share {
      padding-right: 0.4rem;
    }
    marquee {
      width: 5rem;
      flex: 1;
    }
  }
  .playContent {
    position: absolute;
    width: 100vw;
    height: 7.5rem;
    left: 0;
    top: 1.2rem;
    .needle {
      width: 2.5rem;
      height: auto;
      position: absolute;
      left: 50%;
      transform-origin: 0.3rem 0;
      transform: rotate(-10deg);
      transition: all 1s;
      z-index: 10;
    }
    .active {
      transform: rotate(8deg);
    }
    .disc {
      width: 5.5rem;
      height: auto;
      position: absolute;
      left: calc(50% - 2.75rem);
      top: 2.5rem;
    }
    .playImg {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      position: absolute;
      left: calc(50% - 1.75rem);
      top: 3.5rem;
    }
  }
  .playFooter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 1.2rem;
    bottom: 0;
    .play{
            width: 1rem;
      height: 1rem;
    }
    .paused {
      width: .5rem;
      height: .5rem;
      padding: .25rem;
    }
  }
  .playLyric{
     position: absolute;
    width: 100vw;
    height: 7.5rem;
    left: 0;
    top: 1.2rem;
  }
}
</style>
