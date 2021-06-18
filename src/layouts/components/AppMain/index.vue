<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = computed(() => {
  const route = useRoute()
  const { path } = route
  console.log(path)

  return path
})
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - #{$navBarHeight+$BreadcrumbHeight});
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #{$appMainBgColor};
  .page-container{
    margin: 20px;
    margin: 20px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
  }
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
