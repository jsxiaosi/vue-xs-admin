<template>
	<div class="page-container">
		<SvgIcon name="daosanjiao"></SvgIcon>
		{{ t('login.title') }}

		<el-date-picker
			v-model="value1"
			type="datetimerange"
			start-placeholder="开始日期"
			end-placeholder="结束日期"
		>
		</el-date-picker>
	</div>
</template>

<script setup>
import { useStore } from 'vuex'
import { key } from '@/store'
import mutation from '@/store/mutation'
import SvgIcon from '@/components/SvgIcon/index.vue'

import { useI18n } from 'vue-i18n'
import { ref } from '@vue/reactivity'
const { t } = useI18n()

const value1 = ref()

// console.log(t())

const store = useStore(key)
// console.log(store, mutation)
store.commit(mutation.SET_USER, '进来了是吗？？？？')
// console.log(useStore())
</script>

<style scoped></style>
