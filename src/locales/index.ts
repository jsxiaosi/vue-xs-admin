import { appConfig } from '@/store/types';
import { App } from 'vue';
import { createI18n } from 'vue-i18n';
interface localesType {
  name: string;
  locale: string;
}

const config: Recordable = import.meta.globEager('./**/index.ts');

const messages: any = {};
const localesList: localesType[] = [];
Object.keys(config).forEach((key) => {
  const name: any = key.match(/^\.\/([\s\S]+)\/index.ts$/);
  messages[name[1]] = config[key].default;
  localesList.push({ name: config[key].name, locale: name[1] });
});

const locStoAPP = localStorage.getItem('appConfigMode');
let appConfigMode: appConfig = {} as appConfig;
if (locStoAPP) {
  appConfigMode = JSON.parse(locStoAPP);
}

const i18n = createI18n({
  legacy: false,
  locale: appConfigMode.locale || 'zh-ch',
  fallbackLocale: appConfigMode.locale || 'zh-ch',
  messages,
});

export const configMainI18n = (app: App<Element>, locale: string) => {
  i18n.global.locale.value = locale;
  app.use(i18n);
};

export const availableLocales: localesType[] = localesList;

export default i18n;
