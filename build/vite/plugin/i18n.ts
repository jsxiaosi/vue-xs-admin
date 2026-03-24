import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import path from 'path';

export function configVueI18nPlugin() {
  return VueI18nPlugin({
    include: [path.resolve(__dirname, '../../../', './src/locales/modules/**')],
  });
}
