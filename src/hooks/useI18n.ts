import i18n from '@/locales/index'
import zh_Cn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { computed } from '@vue/reactivity'

export const useI18n = () => i18n.global

export const t = (key: string) => key

export const deffElementLocale = () => {
	const { locale } = useI18n()

	const tolocale = computed(() => {
		if (locale.value == 'en') return en
		else return zh_Cn
	})

	return { tolocale }
}
