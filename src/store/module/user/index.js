const actionTypes = {}

const mutationTypes = {
	SET_USER: 'SET_USER',
}

const state = () => {
	return {
		user: null,
	}
}

const getters = {}

const actions = {}

const mutations = {
	[mutationTypes.SET_USER]: (state, res) => {
		console.log('asdasdasd', state, res)
		state.user = res
	},
}

export { actionTypes, mutationTypes }

export default {
	state,
	getters,
	actions,
	mutations,
}
