<template>
	<div class="page-container">
		<SvgIcon name="daosanjiao"></SvgIcon>
		{{t('login.title')}}
	</div>
</template>

<script setup>
import { useStore } from 'vuex'
import mutation from '@/store/mutation.js'
import SvgIcon from '@/components/SvgIcon/index.vue';

import {useI18n} from 'vue-i18n'
const { t } = useI18n()

// console.log(t())


// const store = useStore()
// store.commit(mutation.SET_USER,'进来了是吗？？？？')
// console.log(useStore())
</script>

<style scoped>
</style>
