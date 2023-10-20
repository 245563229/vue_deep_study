

<template>
  <div>
    <router-link to="/">FirstPage</router-link>
    <router-link to="/hello">hello</router-link>
  </div>
  <div>
<!--    // 路由出口-->
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">

import FirstPage from "./components/FirstPage.vue";
</script>
<style scoped lang="scss">
</style>
