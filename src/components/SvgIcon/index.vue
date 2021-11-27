<template>
	<div :class="className">
		<el-icon v-if="isELIcon">
			<component :is="name" />
		</el-icon>
		<svg v-else class="svg" aria-hidden="true">
			<use :xlink:href="symbolId" :fill="color" />
		</svg>
	</div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
	// route object
	prefix: {
		type: String,
		default: 'icon',
	},
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: '#333',
	},
	className: {
		type: String,
		default: '',
	},
})

const isELIcon = computed(() => props.name.indexOf('iEL') != -1)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style lang="scss" scoped>
.el-icon {
	width: 1em;
	height: 1em;
}

.svg {
	width: 1em;
	height: 1em;
}
</style>
