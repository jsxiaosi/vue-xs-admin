import { y as t } from './index-d51bcef7.js';
function f(n, r = 'default', u) {
  if (!n || !Reflect.has(n, r)) return null;
  if (!t(n[r])) return console.error(`${r} is not a function!`), null;
  const e = n[r];
  return e ? e(u) : null;
}
export { f as g };
