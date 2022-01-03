import { App } from 'vue';
import { createI18n } from 'vue-i18n';
interface localesType {
  name: string;
  locale: string;
}

const config = import.meta.globEager('./**/index.ts');

const messages: any = {};
const localesList: localesType[] = [];
Object.keys(config).forEach((key) => {
  const name: any = key.match(/^\.\/([\s\S]+)\/index.ts$/);
  messages[name[1]] = config[key].default;
  localesList.push({ name: config[key].name, locale: name[1] });
});

const i18n = createI18n({
  legacy: false,
  locale: 'zh-ch',
  fallbackLocale: 'zh-ch',
  messages,
});

export const configMainI18n = (app: App<Element>) => {
  app.use(i18n);
};

export const availableLocales: localesType[] = localesList;

export default i18n;
