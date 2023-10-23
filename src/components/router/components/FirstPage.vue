<template>
  <div class="contentClass">
    测试1
  </div>
</template>
<script setup lang="ts">
import {ref, reactive, onMounted} from 'vue'
import {useRoute} from "vue-router";
const route = useRoute()
console.log('route',route.query)
onMounted(() => {
})
</script>
<style lang='scss' scoped>
.contentClass{
  background-color: red;
  width: 50px;
  height: 50px;
}
</style>
