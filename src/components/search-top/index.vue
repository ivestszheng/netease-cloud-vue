<!--
 * @Descripttion:
 * @Date: 2021-08-23 22:54:07
 * @LastEditTime: 2021-09-15 22:56:09
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
    </div>
  </div>
  <div class="historyContent">
    <div class="keywordItem" v-for="(item, i) in keywordList" :key="i">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: '陈奕迅',
      keywordList: [],
      searchKeyword: ''
    }
  },
  beforeMount() {
    this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.keywordList) : []
  },
  methods: {
    saveKeyword() {
      this.keywordList.push(this.searchKeyword)
      localStorage.keywordList = JSON.stringify(this.keywordList)
    }
  },
}
</script>

<style lang="less" scoped>
.searchTop {
  width: 100vw;
  padding: 0 0.4rem;
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
  .keywordItem {
    margin-right: 0.25rem;
    background: rgba(128, 128, 128, 0.1);
    height: 0.5rem;
    line-height: 0.5rem;
    border-radius: 16px;
    padding: 0 0.25rem;
  }

}
  .keywordItem:last-child{
    margin-right: .5rem;
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
</style>
