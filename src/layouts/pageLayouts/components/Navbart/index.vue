<template>
  <div class="navbar">
    <div class="navbar-left">
      <SvgIcon class="logo" name="Vue" @click="drawer = true"></SvgIcon>
    </div>
    <div class="navbar-center">
      <Sidebar
        v-if="appConfigMode.sidebarMode === 'horizontal'"
        class="sidebar-horizontal"
        mode="horizontal"
      />
    </div>
    <div class="navbar-right">
      <AppTheme></AppTheme>
      <AppLocale class="icon"></AppLocale>
      <SvgIcon class="icon" name="iEL-setting" @click="drawer = true"></SvgIcon>
    </div>

    <Setting v-model:modelValue="drawer"></Setting>

    <!-- <el-select v-model="value" placeholder="请选择" @change="toggleTheme">
			<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.label"
				:value="item.value"
			>
			</el-option>
		</el-select>-->
    <!-- <div class="pattern">

		</div>-->
  </div>
</template>

<script setup lang="ts">
  // import { ref } from 'vue'
  import Sidebar from '../../components/Sidebar/index.vue';
  import Setting from '../../components/Seting/index.vue';
  import { AppLocale, AppTheme } from '@/components/Application';

  import SvgIcon from '@/components/SvgIcon/index.vue';
  import { ref } from 'vue';
  import { getAppCollapseMenu } from '@/hooks/userAppWindow';

  const drawer = ref(false);

  const { appConfigMode } = getAppCollapseMenu();

  // const options = ref([
  // 	{ name: '123', value: 'variables-theme-day' },
  // 	{ name: '456', value: 'variables-theme-dark' },
  // ])

  // const value = ref()

  // const toggleTheme = (scopeName = 'theme-default') => {
  // 	document.documentElement.className = scopeName
  // }
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1002;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: #{$navBarHeight};
    padding: 0 20px;
    background-color: $navBarColor;
    border-bottom: 1px solid $navBarBorderBottomColor;
    box-shadow: 1px 0 20px rgb(0 0 0 / 8%);

    .navbar-left {
      .logo {
        font-size: 38px;
      }
      // flex: 1;
      // width: 200px;
      // height: 100%;
    }

    .navbar-center {
      width: 100%;
      height: 100%;
      padding: 0 20px;
      // .sidebar-horizontal {
      //   height: 54px;
      // }
    }

    .navbar-right {
      display: flex;
      flex: 1;
      align-items: center;

      .icon {
        margin-left: 12px;
        font-size: 18px;
      }
    }
  }
</style>
