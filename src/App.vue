<template>
  <div>
    <!--    用path跳转-->
    <!--    router-link添加replace后讲不再产生历史记录，也就是左上角不能再前进后退-->
    <!--    <router-link replace to="/">FirstPage</router-link>-->
    <!--    <router-link replace to="/hello">hello</router-link>-->
    <!--    用name跳转-->
    <!--        <router-link :to="{name:'login'}">FirstPage</router-link>-->
    <!--        <router-link :to="{name:'hello'}">hello</router-link>-->
    <!--    用a标签跳转(会造成页面刷新，会走啊彻骨网络请求)-->
    <!--    <a href="/"> login</a>-->
    <!--    <a href="/hello"> hello</a>-->
    <!--    编程式导航-->
    <button @click="toPage('/')">login</button>
    <button @click="toPage('hello')">hello</button>
    <button @click="next()">next</button>
    <button @click="prev()">prev</button>
  </div>
  <div>
    <!--    // 路由出口-->
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import FirstPage from "./components/FirstPage.vue";

const router = useRouter()
const toPage = (url: string) => {
  // 编程式导航将router.push改为router.replace添加replace后讲不再产生历史记录，也就是左上角不能再前进后退
  // router.replace({
  //   path: url
  // })
   router.push({
     path: url
     // name:url
   })

}
//路由前进
const next = () => {
  //前进几个numb就设置几
  const numb = 1
router.go(numb)
}
// 路由后退
const prev = () => {
  //后退几个numb就设置-几
  // const numb = -1
  // router.go(numb)
  //或者back直接后退
  router.back()
}
</script>
<style scoped lang="scss">
</style>
