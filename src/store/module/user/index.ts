import { Module } from 'vuex'
import { AnyObject } from '#/vuex'

const actionTypes = {}

const mutationTypes = {
	SET_USER: 'SET_USER',
}

interface StoreUser {
	user: Object
}

interface Unknown {
	payload: Object
}

const store: Module<StoreUser, Unknown> = {
	namespaced: false, // 是否加上所属的模块名
	state() {
		return {
			user: {},
		}
	},
	mutations: {
		[mutationTypes.SET_USER](state: StoreUser, payload: AnyObject) {
			state.user = payload
		},
	},
	actions: {},
	getters: {},
}

export { actionTypes, mutationTypes }

export default store
