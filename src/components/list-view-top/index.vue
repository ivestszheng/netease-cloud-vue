<!--
 * @Descripttion:
 * @Date: 2021-08-23 22:54:07
 * @LastEditTime: 2021-09-09 23:57:06
-->
<template>
  <div class="listViewTop">
    <img class="bg" :src="playlist.coverImgUrl" />
    <div class="left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrowLeft" />
      </svg>
      <div class="title">歌单</div>
    </div>
    <div class="right">
      <svg class="icon search" aria-hidden="true">
        <use xlink:href="#icon-sousuo" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao" />
      </svg>
    </div>
  </div>
  <div class="content">
    <div class="content-left">
      <img :src="playlist.coverImgUrl" :alt="playlist.name" />
      <div class="count">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofangsanjiaoxing"></use>
        </svg>
        {{ changeVal(playlist.playCount) }}
      </div>
    </div>
    <div class="content-right"></div>
  </div>
</template>

<script>
export default {
  props: ['playlist'],
  mounted() {
    console.log('12312321', this.playlist);
  },
  methods: {
    changeVal(num) {
      let res = 0
      if (num >= 100000000) {
        res = (num / 100000000).toFixed(2) + '亿'
      } else if (num > 10000) {
        res = (num / 10000).toFixed(0) + '万'
      }
      return res
    }
  },
}
</script>

<style lang="less" scoped>
.icon {
  width: 0.5rem;
  height: 0.5rem;
  fill: #fff;
}
.listViewTop {
  display: flex;
  justify-content: space-between;
  height: 1.2rem;
  align-items: center;
  font-size: 0.35rem;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(40px);
  }
  .left,
  .right {
    color: #fff;
    display: flex;
  }
  .left {
    .title {
      margin-left: 0.4rem;
    }
  }
  .right {
    .search {
      margin-right: 0.5rem;
    }
  }
}
.content {
  display: flex;
  justify-content: space-between;
  .content-left {
    position: relative;
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.1rem;
    }
    .count {
      position: absolute;
      font-size: 0.24rem;
      top: 0.1rem;
      right: 0.1rem;
      color: #fff;
      background: rgba(0, 0, 0, 0.4);
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
  }
}
</style>
