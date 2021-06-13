import { createStore } from 'vuex'


const modules = (r => {
  return r.keys().map(key => {
    return {
      name: key.match(/^\.\/([\s\S]+)\/index\.js$/)[1],
      module: r(key).default
    }
  })
})(require.context('./module/', true, /^\.\/([\s\S])+\/index\.js$/))

let modulesObj = {}

modules.forEach(item => {
  modulesObj[item.name] = item.module
})

export default createStore({
  modules: modulesObj,
  strict: process.env.NODE_ENV !== 'production'
})
