<template>
  <div class="page-container">
    <el-button type="primary" @click="handleIntro">引导页</el-button>
    <div ref="el" :style="style" style="position: fixed; z-index: 99999">
      Drag me! I am at {{ x }}, {{ y }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import useIntro from '@/hooks/web/useIntro';
  const handleIntro = () => {
    useIntro({
      prevLabel: '单独设置的上一步',
    });
  };
  import { useDraggable } from '@vueuse/core';
  import { ref } from 'vue';

  const el = ref<HTMLElement | null>(null);

  // `style` will be a helper computed for `left: ?px; top: ?px;`
  const { x, y, style } = useDraggable(el, {
    initialValue: { x: 40, y: 40 },
  });
</script>

<style scoped lang="scss">
  .page-container {
    padding: 20px;
    background-color: #{$main-bg-color};
  }
</style>
