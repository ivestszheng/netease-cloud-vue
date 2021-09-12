<!--
 * @Descripttion:
 * @Date: 2021-09-11 21:35:11
 * @LastEditTime: 2021-09-12 22:41:03
-->
<template>
  <div class="playController">
    <div class="left" @click="isShow = !isShow">
      <img :src="playlist[playCurrentIndex].al.picUrl" />
      <div class="content">
        <div class="title">{{ playlist[playCurrentIndex].name }}</div>
        <div class="tips">横滑可以切换上下首哦</div>
      </div>
    </div>
    <div class="right">
      <svg v-show="paused" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang" />
      </svg>
      <svg v-show="!paused" class="icon paused" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao1" />
      </svg>
    </div>
    <play-music
      @back="isShow = !isShow"
      :play="play"
      :paused="paused"
      v-show="isShow"
      :playDetail="playlist[playCurrentIndex]"
    />
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"
    ></audio>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import playMusic from '@/components/play-music/index.vue'

export default {
  name: 'play-controller',
  components: {
    playMusic
  },
  data() {
    return {
      paused: true,
      isShow: true
    }
  },
  computed: {
    ...mapState(['playlist', 'playCurrentIndex']),
  },
  methods: {
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.paused = false
      } else {
        this.$refs.audio.pause()
        this.paused = true
      }
    }
  },
  mounted() {
    // this.$refs.audio.play()
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
    padding-left: 0.1rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      margin-right: 0.25rem;
    }
  }
  .right {
    display: flex;
    align-items: center;
    padding-right: 0.1rem;
    .icon {
      width: 0.75rem;
      height: 0.75rem;
      fill: #ccc;
    }
    .paused {
      width: 0.5rem;
      height: 0.5rem;
      margin-right: .15rem;
    }
    .icon:last-child {
      margin-left: 0.25rem;
    }
  }
}
</style>
