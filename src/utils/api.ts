/*
 * @Descripttion: 接口统一管理
 * @Author: 无声<ivestszheng@qq.com>
 * @Date: 2021-06-29 22:53:52
 * @LastEditTime: 2021-09-12 23:15:50
 */
import { get,post } from './axios'
// 获取轮播图
export const getBanner = () => get(`banner`,{type:2})
//首页-发现-圆形图标入口列表
export const getHomeList = () => get(`/homepage/dragon/ball`)
// 获取推荐歌单 可选参数: limit, 即取出数量 , 默认为 6
export const getRecommendedMusicList = (limit=6) => get(`personalized?limit=${limit}`)
// 获取歌单详情
export const getMusicListDetail = (id: String) => get(`/playlist/detail?id=${id}`)
// 获取歌词
export const getLyric = (id: String) => get(`/lyric?id=${id}`)
