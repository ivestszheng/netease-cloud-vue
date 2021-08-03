<!--
 * @Descripttion: 头部导航
 * @Date: 2021-08-01 22:39:21
 * @LastEditTime: 2021-08-03 23:37:39
-->
<template>
    <div class="topNav">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao" />
            </svg>
        </div>
        <div class="topCenter">
            <span class="navBtn">我的</span>
            <span class="navBtn active">发现</span>
            <span class="navBtn">云村</span>
            <span class="navBtn">视频</span>
        </div>
        <div class="topRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo" />
            </svg>
        </div>
    </div>
</template>

<script lang='ts'>
export default {
    setup() {
    }
}
</script>

<style lang="less" scoped>
.topNav{
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
        width: .5rem;
        height: .5rem;
    }
    .topCenter{
        width: 4.5rem;
        display: flex;
        justify-content: space-around;
        .active{
            font-weight: 900;
        }
    }
}
</style>
