import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('./**.json'))
    .map(([key, value]) => {
      console.log(key)
      return [key.match(/^\.\/([\s\S]+)\.json$/)[1], value.default]
    }),
)

export default  createI18n({
  legacy: false,
  locale: 'zh-TW',
  messages
})