
import {ref} from "vue";
// 1.window.requestAnimationFrame类似于setTimeout定时器，但是对比setTimeout,requestAnimationFrame
//是按照电脑帧数去进行的，不会像定时器一样造成过度绘制，u而不会增加开销，改善了视觉效果，提升了性能
const timer = ref<number>(0)
timer.value = window.requestAnimationFrame(function fn(){
    console.log('ssss')
})
//注销requestAnimationFrame
window.cancelAnimationFrame(timer.value)
