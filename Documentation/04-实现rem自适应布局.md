

## 移动端适配思路

之前没怎么做过移动端的适配，在网上学习过后确定了两种方案：

1. 创建 rem 自适应的 ts 文件，在 index.html 中引入。
2. 通过 vant-ui 官方提供的插件。

这里我采用的是第一种方案，因为我对 vant-ui 并不是特别熟悉，而且第一种方案更利于我进行调试。但是我简单地尝试了下第二种方案，确认是可行的，具体参考下面的[参考中的链接](https://www.jianshu.com/p/08cff0965d7d)。

## 实现rem适应式布局

新建`utils/rem.ts`,具体内容如下：

```typescript
function remSize() {
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
}

remSize()

window.onresize =()=>{
    remSize()
}
```

修改`index.html `，修改后内容如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
      <!-- 引入的文件，要放在 body 标签后面 -->
    <script src="/src/utils/rem.ts"></script>
  </body>
</html>
```

## 修改轮播图样式

完成上面的工作之后，轮播图组件已经变成响应式的了，如下图所示。

![轮播图](https://raw.githubusercontent.com/ivestszheng/images-store/master/img/20210803230557.gif)

但是，样式还不太对，所以还要再对`components/banner/index.vue`中的 css 进行修改,修改后的样式如下，只保留img 的宽度百分百就行了。

```less
.my-swipe {
    // height: 10rem;
    img {
        width: 100%;
        // height: 100%;
    }
}
```

至此，rem 自适应布局就大致完成了。

## 参考

1. [vue-cli3+vant+vantRem适配方案项目搭建](https://www.jianshu.com/p/08cff0965d7d)

