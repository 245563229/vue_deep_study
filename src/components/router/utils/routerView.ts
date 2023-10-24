import {createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw} from "vue-router";
// 命名视图
// 默认名称default
// 用法在RouterView.vue中
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../RouterView.vue'),
        //现在默认访问是只能到/，访问不到子路由first
        //使用重定向redirect，访问/时会自动重定向到/first
        // redirect:'/first',
        //也可以写成对象形式
        // redirect:{
        //   path:'/firsst'
        // },
        //也可以写成函数形式
        // redirect: to => {
        //     // return '/first'
        //     return{
        //         path:'/first',
        //         query:{
        //             name:'first'
        //         }
        //     }
        // },
        //alias为一个路由起很多的名字，不管访问那个名字都可以转到这个路由
        // alias:['/first_1','/first_2'],
        children: [
            {
                path: '/first',
                components: {
                    default: () => import('../components/FirstChild.vue')
                }
            },
            {
                path: '/other',
                components: {
                    bbb: () => import('../components/SecondChild.vue'),
                    ccc: () => import('../components/ThirdChild.vue')
                }
            }
        ]
    }
]
const router = createRouter({

    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes
})
export default router