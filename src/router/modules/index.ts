import { AppRouteRecordRaw } from '#/route';

const modules = import.meta.globEager('./**/*.ts');

const routeModuleList: AppRouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});
console.log(routeModuleList);

export default routeModuleList;
