<template>
	<SvgIcon :class-name="className" :name="icon" color="#e3e3e3"></SvgIcon>
	<span v-if="title">{{ title }}</span>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
defineProps({
	icon: {
		type: String,
		default: '',
	},
	title: {
		type: String,
		default: '',
	},
	className: {
		type: String,
		default: '',
	},
})
</script>

<style scoped>
.sub-el-icon {
	/* color: currentColor; */
	width: 1em;
	height: 1em;
}
</style>
