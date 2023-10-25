import {createRouter, createWebHashHistory, RouteRecordRaw,} from 'vue-router'

//ts断言，将meta中的title属性定义为string类型
declare module 'vue-router' {
    interface RouteMeta {
        title: string,
        transition: string
    }
}
const route: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/Login.vue'),
        // 路由元信息meta
        meta: {
            title: '登陆页面',
            //路由过渡动画
            transition: 'animate__fadeInTopLeft'
        }
    },
    {
        path: '/first',
        component: () => import('../components/FirstChild.vue'),
        meta: {
            title: '第一个子页',
            transition: 'animate__fadeInTopLeft'
        },
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes:route,
    //scrollBehavior滚动行为，通常用作切换路由时，想要页面滚到底部或者保持原先位置
    scrollBehavior:(to,from,savePosition)=>{
    //savePosition就是跳转时保存的left以及top（vue2中是xy轴）。
    console.log('savePosition,',savePosition)
        if (savePosition){
            return savePosition
        }else {
            return {top: 0}
        }
        // return new Promise((r)=>{
        //     setTimeout(()=>{
        //         r({
        //             top:10000
        //         })
        //     },2000)
        // })
}
})
export default router