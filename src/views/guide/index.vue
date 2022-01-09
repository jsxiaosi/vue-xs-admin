<template>
  <div class="page-content">
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
  .page-content {
    background-color: #{$main-bg-color};
    width: 100%;
    height: 100%;
    padding: 20px;
  }
</style>
