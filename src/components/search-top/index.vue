<!--
 * @Descripttion:
 * @Date: 2021-08-23 22:54:07
 * @LastEditTime: 2021-09-16 23:02:13
-->
<template>
  <div class="searchTop">
    <div class="searchTopNav">
      <div class="left">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-arrowLeft" />
        </svg>
      </div>
      <div class="right">
        <van-search
          v-model="searchKeyword"
          :placeholder="placeholder"
          @search="saveKeyword"
        />
      </div>
    </div>
    <div class="history">
      <div class="historyLeft">历史记录</div>
      <div @click="clearStorage">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lajitong" />
        </svg>
      </div>
    </div>
  </div>
  <div class="historyContent">
    <div
      class="keywordItem"
      v-for="(item, i) in keywordList"
      :key="i"
      @click="searchHistoryContent(item)"
    >
      {{ item }}
    </div>
  </div>
  <div class="list">
    <div class="playItem" v-for="(item, i) in songs" :key="i">
      <div class="left">
        <div class="index">{{ i + 1 }}</div>
        <div class="content">
          <div class="title" @click="setPlay(item,i)">{{ item.name }}</div>
          <div class="author">
            <span>{{ item.album.name }}</span>
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
</template>

<script>
import { searchMusic } from '@/utils/api'

export default {
  name: 'search-top',
  data() {
    return {
      placeholder: '陈奕迅',
      keywordList: [],
      searchKeyword: '',
      searchSongs: [],
      songs: []
    }
  },
  beforeMount() {
    this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.keywordList) : []
  },
  methods: {
    saveKeyword: async function () {
      // 判断搜索内容是否重复
      if (localStorage.keywordList) {
        let tempArr = JSON.parse(localStorage.keywordList)
        let flag = true
        for (let i = 0; i < tempArr.length; i++) {
          const ele = tempArr[i];
          if (ele == this.searchKeyword) {
            flag = false
            break
          }
        }
        if (flag) {
          this.keywordList.unshift(this.searchKeyword)
        }
      }
      localStorage.keywordList = JSON.stringify(this.keywordList)
      let result = await searchMusic(this.searchKeyword)
      this.songs = result.data.result.songs
    },
    clearStorage() {
      localStorage.removeItem('keywordList')
      this.keywordList = []
    },
    searchHistoryContent(item) {
      this.searchKeyword = item
      this.saveKeyword()
    },
    setPlay(item,i){
      item.al = item.album
      item.al.picUrl = item.album.artist.img1v1Url
      this.$store.commit('pushPlaylist',item)
      this.$store.commit('setPlayIndex',this.$store.state.playlist.length - 1)
    }
  },
}
</script>

<style lang="less" scoped>
.searchTop {
  width: 100vw;
  padding: 0 0.4rem;
  margin-bottom: 0.1rem;
  .searchTopNav {
    display: flex;
    width: 100%;
    height: 1.2rem;
    align-items: center;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }
    .right {
      width: 100%;
      padding: 0 0.4rem 0 0;
    }
  }
  .history {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.6rem;
    .historyLeft {
      font-weight: 900;
      margin-bottom: 0.25rem;
      font-size: 14px;
    }
  }
}
.historyContent {
  display: flex;
  margin-left: 0.4rem;
  width: 100vw;
  overflow: scroll;
  margin-bottom: 0.2rem;
  min-height: 0.5rem;
  .keywordItem {
    margin-right: 0.25rem;
    background: rgba(128, 128, 128, 0.1);
    height: 0.5rem;
    line-height: 0.5rem;
    border-radius: 16px;
    padding: 0 0.25rem;
    white-space: nowrap;
  }
}
.keywordItem:last-child {
  margin-right: 0.5rem;
}
.historyContent::-webkit-scrollbar {
  display: none;
}
:deep(.van-search__content) {
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
:deep(.van-field__left-icon) {
  display: none;
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
