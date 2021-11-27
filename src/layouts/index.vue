<template>
	<div class="app-wrapper" :class="{ hideSidebar: isCollapseMenu }">
		<!-- 顶部导航栏 -->
		<NavBart />
		<!-- 侧边导航栏 -->
		<Sidebar class="sidebar-container" />
		<div class="main-container">
			<div class="main-container-breadcrumb">
				<!-- 面包屑 -->
				<Breadcrumb />
			</div>
			<!-- 内容区 -->
			<el-config-provider :locale="tolocale">
				<AppMain />
			</el-config-provider>
		</div>
	</div>
</template>

<script setup lang="ts">
import AppMain from './components/AppMain/index.vue'
import NavBart from './components/Navbart/index.vue'
import Sidebar from './components/Sidebar/index.vue'
import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue'
import { getAppCollapseMenu } from '@/hooks/appWindow'
import { ElConfigProvider } from 'element-plus'
import { deffElementLocale } from '@/hooks/useI18n'

const { tolocale } = deffElementLocale()

const isCollapseMenu = getAppCollapseMenu()
</script>

<style lang="scss" scoped></style>
