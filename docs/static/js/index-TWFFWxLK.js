import { u as p } from './useECharts-eiv5iSAH.js';
import {
  d as s,
  j as l,
  k as m,
  T as _,
  o as i,
  c,
  f as d,
  x as f,
  y as h,
  h as x,
} from './index-nnTfcizh.js';
import { _ as g } from './plugin-vueexport-helper-x3n3nnut.js';
const v = (t) => (f('data-v-f07b03ac'), (t = t()), h(), t),
  M = v(() => d('h3', null, '动态柱状图', -1)),
  y = s({
    __name: 'BarRace',
    setup(t) {
      const o = l(null),
        { setOptions: n } = p(o),
        e = [];
      for (let a = 0; a < 5; ++a) e.push(Math.round(Math.random() * 200));
      const r = {
        xAxis: { max: 'dataMax' },
        yAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E'],
          inverse: !0,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 3,
        },
        grid: { left: '1%', right: '10%', top: '5%', bottom: 0, containLabel: !0 },
        series: [
          {
            realtimeSort: !0,
            type: 'bar',
            data: e,
            label: { show: !0, position: 'right', valueAnimation: !0 },
            itemStyle: { color: '#409eff' },
          },
        ],
        legend: { show: !0 },
        animationDuration: 3e3,
        animationDurationUpdate: 3e3,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
      };
      m(() => {
        n(r),
          _(
            () => {
              u();
            },
            3e3,
            { immediate: !0 },
          );
      });
      function u() {
        for (var a = 0; a < e.length; ++a)
          Math.random() > 0.9
            ? (e[a] += Math.round(Math.random() * 2e3))
            : (e[a] += Math.round(Math.random() * 200));
        n(r, !1);
      }
      return (a, D) => (
        i(),
        c('div', null, [
          M,
          d('div', { ref_key: 'chartRef', ref: o, class: 'chart-ref' }, null, 512),
        ])
      );
    },
  }),
  b = g(y, [['__scopeId', 'data-v-f07b03ac']]),
  B = { class: 'page-container' },
  k = s({
    __name: 'index',
    setup(t) {
      return (o, n) => (i(), c('div', B, [x(b)]));
    },
  });
export { k as default };
