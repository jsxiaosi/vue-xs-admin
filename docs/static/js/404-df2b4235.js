import {
  d as i,
  O as _,
  a as l,
  o as n,
  c as d,
  g as t,
  f as r,
  w as h,
  h as p,
  ab as e,
} from './index-ae766c94.js';
import { _ as v } from './plugin-vueexport-helper-c27b6911.js';
const u = '/vue-xs-admin/static/png/404-538aa4d7.png',
  a = '/vue-xs-admin/static/png/404_cloud-98e7ac66.png',
  m = { class: 'wscn-http404-container' },
  g = { class: 'wscn-http404' },
  b = e(
    '<div class="pic-404" data-v-2286aea1><img class="pic-404__parent" src="' +
      u +
      '" alt="404" data-v-2286aea1><img class="pic-404__child left" src="' +
      a +
      '" alt="404" data-v-2286aea1><img class="pic-404__child mid" src="' +
      a +
      '" alt="404" data-v-2286aea1><img class="pic-404__child right" src="' +
      a +
      '" alt="404" data-v-2286aea1></div>',
    1,
  ),
  f = { class: 'bullshit' },
  w = e(
    '<div class="bullshit__oops" data-v-2286aea1>OOPS!</div><div class="bullshit__info" data-v-2286aea1>All rights reserved <a style="color:var(--main-color);" href="https://wallstreetcn.com" target="_blank" data-v-2286aea1>wallstreetcn</a></div><div class="bullshit__headline" data-v-2286aea1>The webmaster said that you can not enter this page...</div><div class="bullshit__info" data-v-2286aea1>Please check that the URL you entered is correct, or click the button below to return to the homepage.</div>',
    4,
  ),
  x = i({
    __name: '404',
    setup(k) {
      const s = _(),
        c = () => {
          s.push('/');
        };
      return (y, B) => {
        const o = l('el-button');
        return (
          n(),
          d('div', m, [
            t('div', g, [
              b,
              t('div', f, [
                w,
                r(
                  o,
                  { class: 'bullshit__return-home', onClick: c },
                  { default: h(() => [p('Back to home')]), _: 1 },
                ),
              ]),
            ]),
          ])
        );
      };
    },
  });
const V = v(x, [['__scopeId', 'data-v-2286aea1']]);
export { V as default };
