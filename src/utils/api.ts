/*
 * @Descripttion: 接口统一管理
 * @Author: 无声<ivestszheng@qq.com>
 * @Date: 2021-06-29 22:53:52
 * @LastEditTime: 2021-06-29 23:34:14
 */
import { get,post } from './axios'
// 获取轮播图
export const getBanner = () => get(`banner`,{type:2})