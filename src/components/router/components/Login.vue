<template>
  <el-button @click="getToken()">
    点我进行登陆拿取token
  </el-button>
  <el-button @click="routerPush">
    跳转
  </el-button>
</template>
<script setup>
import {ref, reactive, onMounted} from 'vue'
import {useRouter} from "vue-router";
const router = useRouter()
//注入token到本地
const getToken = ()=>{
  localStorage.setItem('token',123456)
}
const routerPush = ()=>{
  router.push('/first')
}
onMounted(() => {
})
</script>
<style lang='scss' scoped>
</style>
