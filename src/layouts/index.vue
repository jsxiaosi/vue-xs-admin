<template>
  <div class="app-wrapper">
    <NavBart />
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="main-container-breadcrumb">
        <Breadcrumb />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import AppMain from "./components/AppMain/index.vue";
import NavBart from "./components/Navbart/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb.vue";
import '@/styles/variables.module.scss'
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.module.scss";
</style>
