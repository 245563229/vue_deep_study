import {createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw} from 'vue-router'
/*1.yarn add vue-router
2.Vue3使用vue-router为4.*版本，如果vue2则是3.*版本，vue-router版本之间不兼容*/
// ctrl点入RouteRecordRaw发现是联合声明，同时
const router: Array<RouteRecordRaw> = createRouter()