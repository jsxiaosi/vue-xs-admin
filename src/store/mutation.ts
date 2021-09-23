const mutations = ((r) => {
	return Object.keys(r).map((key) => r[key].mutationTypes)
})(import.meta.globEager('./module/**/index.ts'))

console.log(mutations)
const newMutations = Object.assign({}, ...mutations)

export default newMutations
