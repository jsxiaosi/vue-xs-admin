<template>
	<div class="page-container">
		<el-icon><iEL-baseball /></el-icon>
		<SvgIcon name="daosanjiao"></SvgIcon>
		{{ t('login.title') }}
		<el-date-picker
			v-model="value1"
			type="datetimerange"
			start-placeholder="开始日期"
			end-placeholder="结束日期"
		></el-date-picker>
	</div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
// import { getCurrentInstance } from 'vue'

import { useI18n } from 'vue-i18n'
import { ref } from '@vue/reactivity'
const { t } = useI18n()

const value1 = ref()

// const instance = getCurrentInstance()

// console.log(instance.appContext.config.globalProperties.foo)

// console.log(t())
// store.commit(mutation.SET_USER, '进来了是吗？？？？')
// console.log(useStore())
</script>

<style scoped></style>
