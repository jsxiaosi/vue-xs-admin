<template>
  <div class="page-container">
    <CountTo style="font-size: 36px" :num-val="2000"></CountTo>
    <CountTo style="font-size: 36px" type="rebound" :num-val="1234212"></CountTo>
  </div>
</template>

<script lang="ts" setup>
  import CountTo from '@/components/CountTo/index.vue';
</script>

<style scoped lang="scss">
  .page-container {
    padding: 20px;
    background-color: #{$main-bg-color};
  }
</style>
