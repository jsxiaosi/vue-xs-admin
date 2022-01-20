<template>
  <div class="page-container">
    <LineRace></LineRace>
  </div>
</template>
<script lang="ts"></script>
<script lang="ts" setup>
  import LineRace from './components/LineRace.vue';
</script>

<style scoped lang="scss">
  .page-container {
    padding: 20px;
    background-color: #{$main-bg-color};
  }
</style>
