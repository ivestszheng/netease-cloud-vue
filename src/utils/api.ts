/*
 * @Descripttion: 接口统一管理
 * @Author: 无声<ivestszheng@qq.com>
 * @Date: 2021-06-29 22:53:52
 * @LastEditTime: 2021-08-08 16:35:34
 */
import { get,post } from './axios'
// 获取轮播图
export const getBanner = () => get(`banner`,{type:2})
//首页-发现-圆形图标入口列表
export const getHomeList = () => get(`/homepage/dragon/ball`)
