import { createStore } from 'vuex'

const modules = (r => {
  return Object.keys(r).map(key => {
    return {
      name: key.match(/^\.\/module\/([\s\S]+)\/index\.js$/)[1],
      module: r[key].default
    }
  })
})(import.meta.globEager('./module/**/index.js'))

const modulesObj = {}

modules.forEach(item => {
  modulesObj[item.name] = item.module
})

export default createStore({
  modules: modulesObj,
  strict: process.env.NODE_ENV !== 'production'
})
