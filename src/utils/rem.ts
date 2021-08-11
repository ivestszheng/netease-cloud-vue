/*
 * @Descripttion: 实现自适应 REM 布局
 * @Date: 2021-08-01 19:00:10
 * @LastEditTime: 2021-08-11 23:05:12
 */
function remSize() {
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    document.getElementsByTagName("body")[0].style.fontSize = 0.3 + 'rem'
}

remSize()

window.onresize =()=>{
    remSize()
}
