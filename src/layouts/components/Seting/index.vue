<template>
	<el-drawer
		v-model="drawer"
		title="设置"
		@close="emit('update:modelValue', false)"
	>
		<div class="drawer-content">
			<div class="layout_seting">
				<div class="sidebar_seting">
					<el-tooltip content="左侧菜单模式" placement="bottom">
						<div
							class="sidebar_mode"
							:class="{ 'sidebar_mode-select': sidebarMode === 'vertical' }"
							@click="handerShowElmenu('vertical')"
						>
							<div></div>
							<div></div>
						</div>
					</el-tooltip>

					<el-tooltip content="顶部菜单模式" placement="bottom">
						<div
							class="sidebar_mode"
							:class="{ 'sidebar_mode-select': sidebarMode === 'horizontal' }"
							@click="handerShowElmenu('horizontal')"
						>
							<div></div>
							<div></div>
						</div>
					</el-tooltip>
				</div>
			</div>
		</div>
	</el-drawer>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { useCurrentInstance } from '@/hooks/useCurrentInstance'
import { getAppCollapseMenu } from '@/hooks/appWindow'
import { watch, ref } from 'vue'

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits(['update:modelValue'])

const drawer = ref<boolean>(props.modelValue)
watch(
	() => props.modelValue,
	(count: boolean) => {
		drawer.value = count
		/* ... */
	}
)

const { sidebarMode } = getAppCollapseMenu()

console.log(sidebarMode.value)

// 注入store
const store = useStore()
// 获取Mutation 事件常量
const { $mutation } = useCurrentInstance()
// 折叠菜单事件
const handerShowElmenu = (vale: string) => {
	console.log('??????')
	store.commit($mutation.SET_SIDEBARMODE, vale)
}
</script>

<style lang="scss">
.drawer-content {
	width: 100%;
	height: 100%;

	.layout_seting {
		.sidebar_seting {
			display: flex;
			align-items: center;
			justify-content: space-around;

			.sidebar_mode-select {
				border: 2px solid #{$mianColor};
			}

			.sidebar_mode {
				position: relative;
				width: 115px;
				height: 80px;
				background: #f0f2f5;
				border-radius: 5px;
				box-shadow: 0 1px 2.5px 0 rgb(0 0 0 / 18%);

				&:nth-child(1) {
					div {
						&:nth-child(1) {
							width: 30%;
							height: 100%;
							background: #{$mianColor};
						}

						&:nth-child(2) {
							position: absolute;
							top: 0;
							right: 0;
							width: 70%;
							height: 30%;
							background: #fff;
							box-shadow: 0 0 1px #888;
						}
					}
				}

				&:nth-child(2) {
					div {
						&:nth-child(1) {
							width: 100%;
							height: 30%;
							background: #{$mianColor};
							box-shadow: 0 0 1px #888;
						}
					}
				}
			}
		}
	}
}
</style>
