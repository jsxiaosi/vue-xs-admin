import { O as l, P as i } from './index-4053894a.js';
function u() {
  const a = l();
  function s(e, o) {
    if (o === 'query') {
      i().handleMultiTabs('add', {
        path: '/details_page/details_info',
        name: 'RtDetailsInfo',
        query: { id: `${e}` },
        meta: { title: { 'zh-ch': `详情页-${e}`, en: `pageDatails-${e}` } },
      });
      try {
        a.push({ name: 'RtDetailsInfo', query: { id: `${e}` } });
      } catch (t) {
        console.log(t);
      }
    } else {
      i().handleMultiTabs('add', {
        path: `/details_page/details_params/${e}`,
        name: 'RtDetailsParams',
        params: { id: `${e}` },
        meta: { title: { 'zh-ch': `详情页-params-${e}`, en: `pageDatails-${e}` } },
      });
      try {
        a.push({ name: 'RtDetailsParams', params: { id: `${e}` } });
      } catch (t) {
        console.log(t);
      }
    }
  }
  return { toDatailsInfo: s };
}
export { u };
