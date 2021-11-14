<template>
	<router-view />
</template>

<script setup lang="ts">
import { useCurrentInstance } from '@/hooks/useCurrentInstance'
import { useStore } from '@/store'
// import HelloWorld from './components/HelloWorld.vue'

// const admin = 'asdasdasdas'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

const store = useStore()
const mutation = useCurrentInstance().globalProperties.$mutation
const locstorCollapse = localStorage.getItem('appCollapseMenu')
let locMenu: boolean
if (locstorCollapse) locMenu = JSON.parse(locstorCollapse)
else locMenu = false
store.commit(mutation.SET_COLLAPSEMENU, locMenu)
</script>

<style lang="scss"></style>
