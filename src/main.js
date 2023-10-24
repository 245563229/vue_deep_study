import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引入router
import router from './components/router/utils'
// import router from '@/components/router/utils/routerView.ts'
createApp(App).use(router).mount('#app')
