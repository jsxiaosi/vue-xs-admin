<script setup lang="ts">
  import { ref } from 'vue';
  import { _storage } from '@jsxiaosi/utils';
  import { initRoute } from '@/router/utils';
  import type { UseInfoType } from '@/server/useInfo';
  import { RoleEnum } from '@/enum/role';

  const userInfo = _storage.getStorage<UseInfoType>('userInfo');

  defineOptions({
    name: 'RtPower',
  });

  const power = ref<RoleEnum>(userInfo?.power || RoleEnum.ADMIN);
  const powerChange = async () => {
    power.value = power.value === RoleEnum.ADMIN ? RoleEnum.TEST : RoleEnum.ADMIN;
    initRoute(power.value);
  };
</script>

<template>
  <div class="page-container">
    <span>切换权限：</span>
    <el-button @click="powerChange"> {{ power }} </el-button>
  </div>
</template>

<style scoped lang="scss"></style>
