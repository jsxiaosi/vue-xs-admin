const actions = ((r) => {
	return Object.keys(r).map((key) => r[key].actionTypes)
})(import.meta.globEager('./module/**/index.ts'))

const newActions = Object.assign({}, ...actions)

export default newActions
