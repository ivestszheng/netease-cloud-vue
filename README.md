# 网易云音乐移动端

## 环境要求

需要 NodeJS 8.12+ 环境

## 安装

> 后端项目：**[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)**
>
> 该后端具体内容请阅读 README.md 或查阅文档

### 前端(本项目)

```shell
$ git clone git@github.com:ivestszheng/wusheng-music.git 

$ npm install
```

### 后端

```shell
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git 

$ npm install
```

## 运行

### 前端（本项目）

```shell
npm run dev
```

项目启动默认端口为 4000

### 后端

服务器启动默认端口为 3000,若不想使用 3000 端口,可使用以下命令: Mac/Linux

```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令:

```shell
$ set PORT=4000 && node app.js
```

## 介绍

### 概述

通过 Vue 实现网易云音乐移动端，个人希望通过本项目熟悉 Vue3 及移动端开发技巧。我在`Documentation`中记录了一些个人认为的要点，后面因为偷懒就没写了，但总比没有好。本项目有些地方逻辑并不完善，有些地方代码写法不够严谨，但作为一个练手项目，我觉得完成度已经足够了，希望能对你有一些帮助。

Vue2 请看 [基于springboot2+vue2.X的移动端音乐网站](https://github.com/ivestszheng/wusheng-music)

### 面向对象

对 Vue 有一定了解，并且想要熟悉 Vue3 的人。

## 技术栈

- Vue3
- Vant
- Axios
- Vue-Router
- Less

## 截图预览



|                             首页                             |                           搜索列表                           |                           歌单详情                           |                             歌词                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![首页](https://raw.githubusercontent.com/ivestszheng/images-store/master/img/20210917212550.png) | ![搜索](https://raw.githubusercontent.com/ivestszheng/images-store/master/img/20210917212644.png) | ![歌单详情](https://raw.githubusercontent.com/ivestszheng/images-store/master/img/20210917212710.png) | ![歌词](https://raw.githubusercontent.com/ivestszheng/images-store/master/img/20210917212730.png) |

