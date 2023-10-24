import router from "./routerLogin";
const whileList = ['/']
router.beforeEach((to,from,next)=>{
    if (whileList.includes(to.path) || localStorage.getItem('token')){
        next()
    }else{
        alert('无token')
        // next('/')

    }
})