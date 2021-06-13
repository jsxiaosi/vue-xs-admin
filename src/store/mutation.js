const mutations = (r => {
  return r.keys().map(key => r(key).mutationTypes)
})(require.context('./module/', true, /^\.\/([\s\S])+\/index\.js$/))

const newMutations = Object.assign({}, ...mutations)

export default newMutations
