<template>
  <van-grid class="sliding-menu">
    <div v-for="item in items" :key="item['text']" class="sliding-menu-item">
      <van-icon class="icon" :name="item['name']" :size="item['size']" :color="item['color']" />
      <div class="text">{{item['text']}}</div>
    </div>
  </van-grid>
</template>

<script lang='ts'>
export default {
  setup() {
    let items = [
      {
        name: 'todo-list',
        size: '2.5rem',
        color: '#1989fa',
        text: '每日推荐'
      },
      {
        name: 'location',
        size: '2.5rem',
        color: '#1989fa',
        text: '私人FM'
      },
      {
        name: 'location',
        size: '2.5rem',
        color: '#1989fa',
        text: '歌单'
      },
      {
        name: 'location',
        size: '2.5rem',
        color: '#1989fa',
        text: '排行榜'
      },
      {
        name: 'location',
        size: '2.5rem',
        color: '#1989fa',
        text: '数字专辑'
      },
      {
        name: 'location',
        size: '2.5rem',
        color: '#1989fa',
        text: '助眠声音'
      },
      {
        name: 'location',
        size: '2.5rem',
        color: '#1989fa',
        text: '每日推荐'
      },
      {
        name: 'location',
        size: '2.5rem',
        color: '#1989fa',
        text: '歌房'
      },
      {
        name: 'location',
        size: '2.5rem',
        color: '#1989fa',
        text: '游戏专区'
      }
    ]
    return { items }
  }
}
</script>

<style lang="less" scoped>
.sliding-menu {
  width: 100%;
  display: flex;
  flex-wrap: inherit;
  overflow-x: auto;
  .sliding-menu-item {
    flex-shrink: 0;
    border-radius: 50%;
    .text {
      font-size: 0.75rem;
    }
  }
}
</style>
