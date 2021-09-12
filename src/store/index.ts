/*
 * @Descripttion:
 * @Date: 2021-09-11 22:07:26
 * @LastEditTime: 2021-09-12 10:42:50
 */
import { createStore } from 'vuex'

// export default createStore({
//   state:{
//     playList:[{al:{}}],
//     playCurrentIndex: 0,
//   },
//   mutations:{
//     setPlayList:function(state,value){
//       state.playList = value
//     }
//   },
//   actions:{},
//   modules:{}
// })
const defaultState = {
    playlist:[{al:{}}],
    playCurrentIndex: 0,
}

// Create a new store instance.
export default createStore({
  // state() {
  //   return defaultState
  // },
  state:{
    playlist:[{al:{}}],
    playCurrentIndex: 0,
  },
  mutations:{
    setPlaylist:function(state: typeof defaultState,value){
      state.playlist = value
    }
  },
  actions:{},
  modules:{}
})
