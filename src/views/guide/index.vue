<template>
  <div class="page-container">
    <el-button type="primary" @click="handleIntro">引导页</el-button>
  </div>
</template>

<script lang="ts" setup>
  import useIntro from '@/hooks/web/useIntro';
  const handleIntro = () => {
    useIntro({
      prevLabel: '单独设置的上一步',
    });
  };
</script>

<style scoped lang="scss">
  .page-container {
    padding: 20px;
    background-color: #{$main-bg-color};
  }
</style>
