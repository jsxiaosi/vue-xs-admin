<template>
	<div class="app-wrapper">
		<!-- 顶部导航栏 -->
		<NavBart />
		<!-- 侧边导航栏 -->
		<Sidebar
			v-show="sidebarMode === 'vertical'"
			class="sidebar-container"
			:class="{ hideSidebar: isCollapseMenu }"
			mode="vertical"
		/>
		<div class="main-container">
			<div class="main-container-breadcrumb">
				<!-- 面包屑 -->
				<Breadcrumb />
			</div>
			<!-- 内容区 -->
			<AppMain />
		</div>
	</div>
</template>

<script setup lang="ts">
import AppMain from './components/AppMain/index.vue'
import NavBart from './components/Navbart/index.vue'
import Sidebar from './components/Sidebar/index.vue'
import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue'
import { getAppCollapseMenu } from '@/hooks/appWindow'

const { isCollapseMenu, sidebarMode } = getAppCollapseMenu()
</script>

<style lang="scss" scoped></style>
