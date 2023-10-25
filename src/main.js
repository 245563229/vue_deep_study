import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './components/router/utils/beforeRouter.ts'
//引入过渡动画库
import 'animate.css'
//引入router
// import router from './components/router/utils'
// import router from '@/components/router/utils/routerView.ts'
 import router from '@/components/router/utils/routerLogin.ts'
// 引入element组件库以及样式
import  ElementUi from 'element-plus'
import  'element-plus/dist/index.css'
createApp(App).use(router).use(ElementUi).mount('#app')
