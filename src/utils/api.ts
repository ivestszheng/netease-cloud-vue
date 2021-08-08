/*
 * @Descripttion: 接口统一管理
 * @Author: 无声<ivestszheng@qq.com>
 * @Date: 2021-06-29 22:53:52
 * @LastEditTime: 2021-08-08 18:36:37
 */
import { get,post } from './axios'
// 获取轮播图
export const getBanner = () => get(`banner`,{type:2})
//首页-发现-圆形图标入口列表
export const getHomeList = () => get(`/homepage/dragon/ball`)
// 获取推荐歌单 可选参数: limit, 即取出数量 , 默认为 5
export const getRecommendedMusicList = (limit=5) => get(`personalized?limit=${limit}`)
