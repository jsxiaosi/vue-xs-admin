<template>
  <div class="account">
    <el-dropdown trigger="click" @command="command">
      <img src="@/assets/login/logo.png" class="wave" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="signOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
  import { usePermissionStoreHook } from '@/store/modules/permission';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const command = (value: string) => {
    if (value === 'signOut') {
      usePermissionStoreHook().handleRemoveMultiTabs();
      localStorage.removeItem('userInfo');
      router.push('/login');
    }
  };
</script>

<style lang="scss" scoped>
  .account {
    margin-left: 12px;
    .wave {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
</style>
