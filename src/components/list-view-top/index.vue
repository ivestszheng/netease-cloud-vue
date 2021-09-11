<!--
 * @Descripttion:
 * @Date: 2021-08-23 22:54:07
 * @LastEditTime: 2021-09-11 17:06:47
-->
<template>
<div class="container">
  <div class="listViewTop">
    <img class="bg" :src="playlist.coverImgUrl" />
    <div class="left">
      <svg class="icon" aria-hidden="true" @click="$router.push('/')">
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
    <div class="content-right">
      <h3>{{ playlist.name }}</h3>
      <div class="author">
        <img :src="playlist.creator.avatarUrl" class="header" />
        <span>{{ playlist.creator.nickname }}</span>
      </div>
      <div class="description">
        {{ playlist.description }}
      </div>
    </div>
  </div>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-pinglun"></use>
      </svg>
      <span>{{ playlist.commentCount }}</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <span>{{ playlist.shareCount }}</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
      </svg>
      <span>下载</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-show_duoxuan"></use>
      </svg>
      <span>多选</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['playlist'],
  methods: {
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
  },
}
</script>

<style lang="less" scoped>
.icon {
  width: 0.5rem;
  height: 0.5rem;
  fill: #fff;
}
.container{
      padding: 0 0.25rem;
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
}
.content {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  span {
    color: #fff;
    font-size: 0.26rem;
  }
  .content-left {
    position: relative;
    img {
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 0.1rem;
    }
    .count {
      position: absolute;
      font-size: 0.24rem;
      top: 0.1rem;
      right: 0.1rem;
      color: #fff;
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
  .content-right {
    width: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3 {
      color: #fff;
      margin: 0;
    }
    .author {
      display: flex;
      align-items: center;
      margin: 0.2rem 0;
      img.header {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        margin-right: 0.2rem;
      }
    }
    .description {
      font-size: 0.24rem;
      color: #ccc;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
.iconList {
  display: flex;
  justify-content: space-around;
  margin-bottom: .5rem;
  .iconItem {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ccc;
    font-size: 1px;
  }
  .icon{
    margin-bottom: .2rem;
  }
}
</style>
