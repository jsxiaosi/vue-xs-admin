import { O as n, P as a } from './index-153f8713.js';
function o() {
  const t = n();
  function i(e, s) {
    s === 'query'
      ? (a().handleMultiTabs('add', {
          path: '/details_page/details_info',
          name: 'RtDetailsInfo',
          query: { id: `${e}` },
          meta: { title: { 'zh-ch': `详情页-${e}`, en: `pageDatails-${e}` } },
        }),
        t.push({ name: 'RtDetailsInfo', query: { id: `${e}` } }))
      : (a().handleMultiTabs('add', {
          path: `/details_page/details_params/${e}`,
          name: 'RtDetailsParams',
          params: { id: `${e}` },
          meta: { title: { 'zh-ch': `详情页-params-${e}`, en: `pageDatails-${e}` } },
        }),
        t.push({ name: 'RtDetailsParams', params: { id: `${e}` } }));
  }
  return { toDatailsInfo: i };
}
export { o as u };
