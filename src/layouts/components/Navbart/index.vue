<template>
	<div class="navbar">
		<div @click="tolochos('zh-ch')">zh</div>
		<div @click="tolochos('en')">en</div>
		<SvgIcon name="locales" color="#000000"></SvgIcon>
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
import { useI18n } from '@/hooks/useI18n'
import SvgIcon from '@/components/SvgIcon/index.vue'

// const options = ref([
// 	{ name: '123', value: 'variables-theme-day' },
// 	{ name: '456', value: 'variables-theme-dark' },
// ])

// const value = ref()

// const toggleTheme = (scopeName = 'theme-default') => {
// 	document.documentElement.className = scopeName
// }
const i18n = useI18n()
const tolochos = (key: string) => {
	i18n.locale.value = key
}
</script>

<style lang="scss" scoped>
.navbar {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1002;
	display: flex;
	width: 100%;
	height: #{$navBarHeight};
	background-color: $navBarColor;
	border-bottom: 1px solid $navBarBorderBottomColor;
	box-shadow: 1px 0 20px rgb(0 0 0 / 8%);
}
</style>
