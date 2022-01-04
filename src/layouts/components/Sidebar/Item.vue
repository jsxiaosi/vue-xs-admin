<template>
  <SvgIcon :class-name="className" :name="icon" />
  <span v-if="title">{{ t(title) }}</span>
</template>

<script setup lang="ts">
  import SvgIcon from '@/components/SvgIcon/index.vue';
  import { useI18n } from '@/hooks/useI18n';
  defineProps({
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
  });
  const { t } = useI18n();
</script>

<style scoped>
  .sub-el-icon {
    /* color: currentColor; */
    width: 1em;
    height: 1em;
  }
</style>
