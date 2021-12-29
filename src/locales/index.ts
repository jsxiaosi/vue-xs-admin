import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './modules'

const i18n = createI18n({
	legacy: false,
	locale: 'zh-ch',
	fallbackLocale: 'zh-ch',
	messages,
})

export const configMainI18n = (app: App<Element>) => {
	app.use(i18n)
}

export default i18n
