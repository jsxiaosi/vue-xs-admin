<template>
  <div class="app-wrapper">
    <!-- 侧边导航栏 -->
    <VerticalSidebar />
    <!-- 内容区 -->
    <div class="main-container">
      <!-- 顶部导航栏 -->
      <NavBart />
      <!-- 选项卡 -->
      <AppTabs />
      <!-- 内容区 -->
      <AppMain />
    </div>
  </div>
</template>

<script setup lang="ts">
  import AppMain from './components/AppMain/index.vue';
  import AppTabs from './components/AppTabs/index.vue';
  import NavBart from './components/Navbart/index.vue';
  import VerticalSidebar from './components/VerticalSidebar/index.vue';
</script>

<style lang="scss" scoped></style>
