<template>
	<div class="navbar">
		<div class="navbar-left">
			<SvgIcon class="logo" name="Vue" @click="drawer = true"></SvgIcon>
		</div>
		<div class="navbar-center">
			<Sidebar
				v-if="sidebarMode === 'horizontal'"
				class="sidebar-horizontal"
				mode="horizontal"
			/>
		</div>
		<div class="navbar-right">
			<el-dropdown class="popover-content" trigger="click" @command="tolochos">
				<span>
					<SvgIcon class="icon" name="locales"></SvgIcon>
				</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item command="zh-ch">中文简体</el-dropdown-item>
						<el-dropdown-item command="en">English</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
			<SvgIcon class="icon" name="iEL-setting" @click="drawer = true"></SvgIcon>
		</div>
		<el-drawer v-model="drawer" title="I am the title">
			<span @click="handerShowElmenu">Hi, there!</span>
		</el-drawer>

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
import Sidebar from '../../components/Sidebar/index.vue'

import { useI18n } from '@/hooks/useI18n'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { ref } from '@vue/reactivity'
import { getAppCollapseMenu } from '@/hooks/appWindow'
import { useStore } from '@/store'
import { useCurrentInstance } from '@/hooks/useCurrentInstance'

const i18n = useI18n()
const tolochos = (key: string) => {
	i18n.locale.value = key
}

const drawer = ref(false)

const { sidebarMode } = getAppCollapseMenu()

// 注入store
const store = useStore()
// 获取Mutation 事件常量
const { $mutation } = useCurrentInstance()
// 折叠菜单事件
const handerShowElmenu = () => {
	let vale = ''
	if (sidebarMode.value === 'vertical') vale = 'horizontal'
	else vale = 'vertical'

	store.commit($mutation.SET_SIDEBARMODE, vale)
}
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
