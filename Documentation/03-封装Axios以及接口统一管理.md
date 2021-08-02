## 二次封装 Axios

项目构建时在`src/utils/axios.ts`中加入了前后端拦截器，现在要在里面封装`get()`以及`post()`，具体代码如下：

```typescript
// 封装 get 方法
export function get(url: string,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:params})
                .then((res) => {
                    resolve(res.data)
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
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                })
    })
}
```



## 接口统一管理

在`src/utils`中新建`api.ts`，引入上面封装好的`get`方法和`post`方法，再对之前轮播图接口进行封装，具体代码如下：

```typescript
import { get,post } from './axios'
// 获取轮播图
export const getBanner = () => get(`banner`,{type:2})
```



## 方法的调用

在`src/components/banner/Index.vue`中引入`getBanner`方法。只用对`script`进行少量的更改，更改后的代码具体如下：

```typescript
<script lang="ts">
import { getBanner } from '../../utils/api'
import { reactive, toRefs } from 'vue'
export default {
    setup() {
        const data = reactive(
            { banners: [] }
        )
        getBanner().then((res: any) => {
            if (res) {
                console.log('轮播图数据：',res);
                data.banners = res.banners
            } else {
                console.log('无法获取到轮播图信息');
            }
        })
        return { ...toRefs(data) }
    }
}
</script>
```

至此，我们完成了`axios`中`get`方法与`post`方法以及轮播图接口的封装，之后其它的接口也会进行类似的封装，放在`src/utils/api.ts`中进行统一管理。