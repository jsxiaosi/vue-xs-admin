import { createI18n } from 'vue-i18n'
import ElementLocale from 'element-plus/lib/locale'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('./**.js'))
    .map(([key, value]) => {
      console.log(value)
      return [key.match(/^\.\/([\s\S]+)\.js$/)[1], value.lang]
    })
)

const i18n = createI18n({
  legacy: false,
  locale: 'zh-tw',
  fallbackLocale: 'zh-tw',
  messages
})

export default i18n
