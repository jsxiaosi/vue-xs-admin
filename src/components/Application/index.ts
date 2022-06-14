import { withInstall } from '@/utils';
import appLocale from './AppLocale.vue';
import appTheme from './AppTheme.vue';
import appAccount from './AppAccount.vue';

export const AppLocale = withInstall(appLocale);
export const AppTheme = withInstall(appTheme);
export const AppAccount = withInstall(appAccount);
