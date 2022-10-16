<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  defineOptions({
    name: 'RtDetailsInfo',
  });

  const route = useRoute();
  const { query } = route;

  const value = ref('');
</script>

<template>
  <div>
    <span>page --- {{ query.id }}</span>
    <el-input v-model="value"></el-input>
  </div>
</template>

<style lang="scss"></style>
