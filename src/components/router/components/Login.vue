<template>
  <el-button @click="getToken()">
    点我进行登陆拿取token
  </el-button>
  <el-button @click="routerPush">
    跳转
  </el-button>
  <div class="contentClass"></div>

</template>
<script setup>
import {ref, reactive, onMounted} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter()
//模拟动态路由
const activeRoute = [
  {
    path: 'second',
    name: 'second',
    component: 'SecondChild.vue'
  },
  {
    path: 'third',
    name: 'third',
    component: 'ThirdChild.vue'
  },
]
//注入token到本地
const getToken = () => {
  localStorage.setItem('token', 123456)
}
const newRoute = (id) => {
  return import(`@/components/router/components/${id}`)
}

const routerPush = () => {
  router.push('/first')
  window.requestAnimationFrame(() => {
    activeRoute.forEach((item) => {
      router.addRoute({
        path: item.path,
        name: item.name,
        // component: () => import(`./${item.component}`)
        component: newRoute(item.component)
      })
    })

  })
}
onMounted(() => {
})
</script>
<style lang='scss' scoped>
.contentClass {
  height: 1000px;
}
</style>
