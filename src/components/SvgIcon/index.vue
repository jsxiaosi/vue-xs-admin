<template>
	<svg :class="className" aria-hidden="true">
		<use :xlink:href="symbolId" :fill="color" />
	</svg>
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
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
