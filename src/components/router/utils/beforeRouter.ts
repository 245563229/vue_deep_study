import router from "./routerLogin";
//设置白名单
const whileList = ['/']
router.beforeEach((to,from,next)=>{
    console.log('to',to.meta.title)
    // 看为何此处to.meta.title变为string类型跳转至routerLogin.ts
    const routeName = to.meta.title
    if (whileList.includes(to.path) || localStorage.getItem('token')){
        next()
    }else{
        alert('无token')
        // next('/')

    }
})

router.afterEach((to,from,next)=>{

})