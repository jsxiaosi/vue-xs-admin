<template>
  <div class="page-container">
    <BarRace></BarRace>
  </div>
</template>
<script lang="ts"></script>
<script lang="ts" setup>
  import BarRace from './components/BarRace.vue';
</script>

<style scoped lang="scss">
  .page-container {
    padding: 20px;
    background-color: #{$main-bg-color};
  }
</style>
