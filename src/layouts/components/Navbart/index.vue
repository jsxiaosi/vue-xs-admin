<template>
  <div class="navbar">
    admin
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/styles/variables.module.scss";

.navbar{
  width: 100%;
  height: #{$navBarHeight};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1002;
  display: flex;
  box-shadow: 1px 0 20px rgb(0 0 0 / 8%);

}
</style>
