<template>
	<router-view />
</template>

<script setup lang="ts">
import { useCurrentInstance } from '@/hooks/useCurrentInstance'
import { useStore } from '@/store'
// import { request } from './utils/axios'
// import HelloWorld from './components/HelloWorld.vue'

// const admin = 'asdasdasdas'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

const store = useStore()
const { $mutation } = useCurrentInstance()
const locstorCollapse = localStorage.getItem('appCollapseMenu')
let locMenu: boolean
if (locstorCollapse) locMenu = JSON.parse(locstorCollapse)
else locMenu = false
store.commit($mutation.SET_COLLAPSEMENU, locMenu)

// const req = async () => {
// 	const res = await request.post<void>({ url: '/mock_api/getUserInfo' })
// 	console.log(res)
// }
// const req2 = async () => {
// 	const res = await request.get<void>(
// 		{ url: '/mock_api/getUserInfo' },
// 		{ isShowData: true ,urlPrefix:'https://xiaosisi.com'}
// 	)
// 	console.log(res)
// }
// req()
// req2()
</script>

<style lang="scss">
#app {
	color: $menuText;
}
</style>
