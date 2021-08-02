/*
 * @Descripttion: Axios 二次封装
 * @Author: 无声<ivestszheng@qq.com>
 * @Date: 2021-06-29 22:01:10
 * @LastEditTime: 2021-06-30 08:58:04
 */
import Axios from 'axios'
import { Toast } from 'vant'

const baseURL = 'http://localhost:3000'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      Toast.fail(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      Toast.fail(`${error}`)
    }
    return Promise.reject(error)
  }
)
// 封装 get 方法
export function get(url: string,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:params})
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
    })
}
// 封装 post 方法
export function post(url: string,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:params})
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
    })
}
export default axios
