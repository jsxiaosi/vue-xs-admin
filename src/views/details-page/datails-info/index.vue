<template>
  <div>
    <span>page --- {{ query.id }}</span>
    <el-input v-model="value"></el-input>
  </div>
</template>

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
<style lang="scss"></style>
