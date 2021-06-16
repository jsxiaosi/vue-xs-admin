// https://github.com/intlify/vite-plugin-vue-i18n
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export function configI18nPlugin() { 
  let options = {
    include: 'src/locales/**'
  }
  const plugin = [
    vueI18n(options)
  ]
  return plugin
}
