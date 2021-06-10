<template>
  <div>
    index.js
    <HelloWorld />
  </div>
</template>

<script setup>
// 直接导入组件
import HelloWorld from '@/components/HelloWorld.vue'
import { useContext } from 'vue'
console.log(useContext())

</script>

<style>
</style>
