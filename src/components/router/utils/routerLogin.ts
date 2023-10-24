import {createRouter, createWebHashHistory, RouteRecordRaw,} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/first',
        component: () => import('../components/FirstChild.vue')
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes,
})
export default router