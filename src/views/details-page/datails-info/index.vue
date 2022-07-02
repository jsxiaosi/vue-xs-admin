<template>
  <div>
    <span>page --- {{ query.id }}</span>
    <el-input v-model="value"></el-input>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'RtDetailsInfo',
  };
</script>
<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const { query } = route;

  const value = ref('');
</script>
<style lang="scss"></style>
