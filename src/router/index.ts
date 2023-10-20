import {createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw} from 'vue-router'
/*1.yarn add vue-router
2.Vue3使用vue-router为4.*版本，如果vue2则是3.*版本，vue-router版本之间不兼容*/
/*ctrl点入RouteRecordRaw发现是联合声明，同时component是必传，同时extends继承了_RouteRecordBase
点入发现path也为必穿*/
// history模式
/*vue2 mode history vue3 createWebHistory
// hash模式
vue2 mode hash vue3 createWebHashHistory
// 服务器渲染
vue2 mode obstact vue3 createMemoryHistory*/
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        //import函数打包的时候会进行代码分割（信息化或者说是异步导入）
        component: () => import('../components/FirstPage.vue')
    },
    {
        path: '/hello',
        component: () => import('../components/HelloWorld.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
//（可在f12控制台实验） 监听history模式下点击页面左上角前进后退按钮触发。
/*window.addEventListener('popstate',(e)=>{
    console.log('e',e)
back:"/hello"  后退页面
current:"/"     当前页面
forward:null    前进页面
position:20
replaced:true
})*/
/*直接跳转，输入下面代码后url变为loca..../hello，但是页面不会跟着过去，需要刷新才可以
history.pushState(
    {name:'ssss'},'','/hello'
)*/
/*hash模式下直接location.hash = ‘..’即可立刻跳转，不用像history那样刷新，
#为锚点，
window.addEventListener('hashchange',(e)=>{
    console.log('e',e)
})
newURL:"http://127.0.0.1:5173/#/" 新地址也就是当前地址
oldURL:"http://127.0.0.1:5173/#/hello"  来源地址*/
// 导出
export default router
