const actions = (r => {
  return r.keys().map(key => r(key).actionTypes)
})(require.context('./module/', true, /^\.\/([\s\S])+\/index\.js$/))

const newActions = Object.assign({}, ...actions)

export default newActions
