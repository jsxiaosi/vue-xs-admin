<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { ColorPicker } from 'vue3-colorpicker';
  import 'vue3-colorpicker/style.css';
  import { useAppStoreHook } from '@/store/modules/app';
  import { updateColor } from '@/utils/transformTheme';
  import SvgIcon from '@/components/SvgIcon/index.vue';

  const appStore = useAppStoreHook();

  const pureColor = ref(appStore.appConfigMode.primaryColor);

  const showPicker = ref<boolean>(false);

  const colorList = ['#722ed1', '#eb2f96', '#52c41a', '#13c2c2', '#fadb14', '#fa541c', '#f5222d'];

  watch([pureColor], () => {
    console.log(pureColor.value);
    appStore.appConfigMode.primaryColor = pureColor.value;
    appStore.setAppConfigMode(appStore.appConfigMode);
    updateColor();
  });
</script>

<template>
  <div>
    <div class="color-list">
      <div
        v-for="i in colorList"
        :key="i"
        class="cursor color-list-item"
        :style="{ backgroundColor: i }"
        @click="() => (pureColor = i)"
      >
        <SvgIcon v-if="i === pureColor" class="icon" name="iEL-select"></SvgIcon>
      </div>
    </div>
    <div class="options">
      <span>自定义主题：</span>
      <div class="color-picker">
        <span
          class="cursor"
          :style="{ backgroundColor: pureColor }"
          @click="() => (showPicker = !showPicker)"
        ></span>
        <div v-show="showPicker" class="picker">
          <div class="mask" @click="() => (showPicker = !showPicker)"></div>
          <ColorPicker
            v-model:pureColor="pureColor"
            format="hex"
            :disable-alpha="true"
            :is-widget="true"
          />
        </div>
      </div>
    </div>
    <!-- <div class="options">
      <span>自定义主题：</span>
      <ColorPicker v-model:pureColor="pureColor" format="hex" />
    </div>
    <div class="options">
      <span>自定义主题：</span>
      <ColorPicker v-model:pureColor="pureColor" format="hex" />
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
  .color-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .color-list-item {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        color: #fff;
      }
    }
  }
  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    .color-picker {
      position: relative;
      width: 50px;
      height: 24px;
      span {
        display: block;
        width: 100%;
        height: 100%;
      }
      .mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 98;
      }
      :deep(.vc-colorpicker) {
        position: absolute;
        top: 30px;
        right: 0;
        z-index: 99;
      }
    }
  }
</style>
