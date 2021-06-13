import { createStore } from 'vuex'

const routesModules = import.meta.globEager('./module/**/index.ts');

console.log(routesModules)

// const modules = (r => {
//   console.log(r)
//   return r.keys().map(key => {
//     return {
//       name: key.match(/^\.\/([\s\S]+)\/index\.js$/)[1],
//       module: r(key).default
//     }
//   })
// })(import.meta.globEager("./module/**/index.js"))

// require.context('./module/', true, /^\.\/([\s\S])+\/index\.js$/)

let modulesObj = {}

// modules.forEach(item => {
//   modulesObj[item.name] = item.module
// })

export default createStore({
  modules: modulesObj,
  strict: process.env.NODE_ENV !== 'production'
})
