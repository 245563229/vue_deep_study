<template>
  <router-link to="/first">first</router-link>
  <router-link to="/other" style="margin-left: 10px">other</router-link>
  <hr>
  <div>
    <router-view></router-view>
<!--    首先需要router-view路由入口，再放入带有name的路由入口-->
    <router-view name="bbb"></router-view>
    <router-view name="ccc"></router-view>
  </div>
<!--      <router-view></router-view>-->

</template>
<script setup lang="ts">
import {ref, reactive, onMounted} from 'vue'

onMounted(() => {
})
</script>
<style lang='scss' scoped>
</style>
