<template>
  <div class="contentClass">我是父项</div>
  <div>我是子项
    <!--    子项的路由入口-->
    <router-view></router-view>
  </div>
  <div>
    <router-link to="/hello">hello</router-link>
    <router-link to="/Child2">Child2</router-link>
  </div>
</template>
<script setup>
import {ref} from 'vue'

const count = ref(0)
</script>


<style scoped lang="scss">
.contentClass {
  background-color: blue;
}
</style>
