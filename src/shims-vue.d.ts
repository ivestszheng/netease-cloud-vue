/*
 * @Descripttion:
 * @Date: 2021-06-29 21:54:24
 * @LastEditTime: 2021-09-17 21:55:04
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'main.ts'
declare module '@/store/index'
