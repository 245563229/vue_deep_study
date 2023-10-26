<template>
<div>
<!--  <router-view></router-view>-->
<!--  添加路由过渡动画，对应routejs为routerLogin.ts-->
<!--  接受route，Component是当前的VNode-->
<!--  VNode既虚拟节点是用js表述的dom，-->
  <router-view #default="{route,Component}">
<!--    {{route}}-->
<!--    {{Component}}-->
    <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
      <component :is="Component"></component>
    </transition>
  </router-view>
<!--  <RouterPage></RouterPage>-->
</div>
</template>
<script setup lang="ts">
import  RouterPage from '@/components/router/index.vue'
// import RouterView from "@/components/router/RouterView.vue";

console.log(import.meta.env)
</script>
<style scoped lang="scss">
</style>
