/*
 * @Descripttion:
 * @Date: 2021-09-11 22:07:26
 * @LastEditTime: 2021-09-13 14:35:53
 */
import { createStore } from 'vuex'
import { getLyric } from '@/utils/api'

const defaultState = {
  playlist: [{
    name: '彩券',
    id: 1486513704,
    al: {
      id: 96680121,
      name: '彩券',
      pic: 109951165386012140,
      picUrl: "http://p3.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg",
      pic_str: "109951165386012146"
    }
  }],
  playCurrentIndex: 0,
  lyric: ''
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  getters: {
    lyricList(state: typeof defaultState){
      let arr:Array<any> = state.lyric.split(/\n/igs).map((item:any, i:number) => {
        let min = item.slice(1, 3)
        let sec = item.slice(4, 6)
        let mill = item.slice(7, 10)
        return {
          min, sec, mill,
          lyric:item.slice(12),
          content:item,
          time: parseInt(mill)+parseInt(sec)*1000+parseInt(min)*60*1000
        }
      })
      console.log(arr);
      return arr
    }
  },
  mutations: {
    setPlaylist: function (state: typeof defaultState, value) {
      state.playlist = value
    },
    setPlayIndex(state: typeof defaultState, value) {
      state.playCurrentIndex = value
    },
    setLyric(state: typeof defaultState, value) {
      state.lyric = value
    }
  },
  actions: {
    async reqLyric(content, payload) {
      let result = await getLyric(payload.id)
      content.commit('setLyric', result.data.lrc.lyric)
    }
  },
  modules: {}
})
