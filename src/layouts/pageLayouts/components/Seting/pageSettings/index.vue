<script setup lang="ts">
  import { ref } from 'vue';
  import { usePermissionStoreHook } from '@/store/modules/permission';
  import { removeStorage } from '@/utils/storage';
  import { useRootSetting } from '@/hooks/setting/useRootSetting';

  const { appConfig, setAppConfigMode } = useRootSetting();

  const { persistent } = usePermissionStoreHook();

  const labelPersistentRef = ref<boolean>(appConfig.value.labelPersistent);
  const labelPersistentChange = (e: boolean) => {
    if (!e) removeStorage('multiTabsList');
    else persistent();
    setAppConfigMode({ labelPersistent: e });
  };

  const hidePublicChange = () => {
    setAppConfigMode({});
  };
</script>

<template>
  <div>
    <div class="options">
      <span>{{ $t('layout.hideSidebar') }}</span>
      <el-switch v-model="appConfig['hideSidebar']" @change="hidePublicChange" />
    </div>
    <div class="options">
      <span>{{ $t('layout.hideNavBart') }}</span>
      <el-switch v-model="appConfig.hideNavbart" @change="hidePublicChange" />
    </div>
    <div class="options">
      <span>{{ $t('layout.hideTabs') }}</span>
      <el-switch v-model="appConfig.hideTabs" @change="hidePublicChange" />
    </div>
    <div class="options">
      <span>{{ $t('layout.labelPersistent') }}</span>
      <el-switch v-model="labelPersistentRef" @change="labelPersistentChange" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    .color-picker {
      position: relative;
      width: 50px;
      height: 24px;
      span {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
