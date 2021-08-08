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

通过 Vue 实现网易云音乐移动端，希望通过本项目熟练掌握 Vue3 及移动端开发技巧。

## 技术栈

- Vue3
- Vant
- Axios
- Vue-Router
- Less



