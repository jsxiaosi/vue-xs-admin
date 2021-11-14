import { Module } from 'vuex'

const actionTypes = {}

const mutationTypes = {
	SET_COLLAPSEMENU: 'SET_COLLAPSEMENU',
}

interface StoreUser {
	collapseMenu: boolean
}

const store: Module<StoreUser, unknown> = {
	namespaced: false, // 是否加上所属的模块名
	state() {
		return {
			collapseMenu: false,
		}
	},
	mutations: {
		[mutationTypes.SET_COLLAPSEMENU](state: StoreUser, payload: boolean) {
			state.collapseMenu = payload
			localStorage.setItem('appCollapseMenu', JSON.stringify(payload))
		},
	},
	actions: {},
	getters: {
		collapseMenu: (state) => state.collapseMenu,
	},
}

export { actionTypes, mutationTypes }

export default store
