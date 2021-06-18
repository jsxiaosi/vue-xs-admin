<template>
  <div class="app-wrapper">
    <!-- 顶部导航栏 -->
    <NavBart />
    <!-- 侧边导航栏 -->
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="main-container-breadcrumb">
        <!-- 面包屑 -->
        <Breadcrumb />
      </div>
      <!-- 内容区 -->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import AppMain from './components/AppMain/index.vue'
import NavBart from './components/Navbart/index.vue'
import Sidebar from './components/Sidebar/index.vue'
import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue'
</script>

<style lang="scss" scoped>
</style>
