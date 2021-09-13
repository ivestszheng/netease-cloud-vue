/*
 * @Descripttion:
 * @Date: 2021-09-11 22:07:26
 * @LastEditTime: 2021-09-13 22:08:58
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
  lyric: '',
  currentTime: 0,
  intervalId: 0
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  getters: {
    lyricList(state: typeof defaultState){
      let arr:Array<any> = state.lyric.split(/\n/igs).map((item:any, i:number,arr) => {
        let min = parseInt(item.slice(1, 3))
        let sec = parseInt(item.slice(4, 6))
        let mill = parseInt(item.slice(7, 10))
        return {
          min, sec, mill,
          lyric:item.slice(12),
          content:item,
          time: mill+sec*1000+min*60*1000
        }
      })
      arr.forEach((item,i) =>{
        if (i == 0) {
          item.pre = 0
        }else{
          item.pre = arr[i-1].time
        }
      })
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
    },
    setCurrentTime(state: typeof defaultState, value){
      state.currentTime = value
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
