import { createI18n } from 'vue-i18n'
// import ElementLocale from 'element-plus/es/locale'

const messages = Object.fromEntries(
	Object.entries(import.meta.globEager('./**.ts')).map(([key, value]) => {
		const keyName: any = key.match(/^\.\/([\s\S]+)\.ts$/)
		return [keyName[1], value.lang]
	})
)

const i18n = createI18n({
	legacy: false,
	locale: 'zh-tw',
	fallbackLocale: 'zh-tw',
	messages,
})

export default i18n
