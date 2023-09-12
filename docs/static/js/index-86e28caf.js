import { u as _ } from './useECharts-6d3e4299.js';
import {
  d as s,
  j as p,
  k as l,
  T as m,
  o as i,
  c,
  g as d,
  x as h,
  y as f,
  f as x,
} from './index-70a96a1c.js';
import { _ as g } from './plugin-vueexport-helper-c27b6911.js';
const v = (a) => (h('data-v-23942903'), (a = a()), f(), a),
  y = v(() => d('h3', null, '动态柱状图', -1)),
  M = s({
    __name: 'BarRace',
    setup(a) {
      const o = p(null),
        { setOptions: n } = _(o),
        t = [];
      for (let e = 0; e < 5; ++e) t.push(Math.round(Math.random() * 200));
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
            data: t,
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
      l(() => {
        n(r),
          m(
            () => {
              u();
            },
            3e3,
            { immediate: !0 },
          );
      });
      function u() {
        for (var e = 0; e < t.length; ++e)
          Math.random() > 0.9
            ? (t[e] += Math.round(Math.random() * 2e3))
            : (t[e] += Math.round(Math.random() * 200));
        n(r, !1);
      }
      return (e, D) => (
        i(),
        c('div', null, [y, d('div', { ref_key: 'chartRef', ref: o, class: 'chartRef' }, null, 512)])
      );
    },
  });
const B = g(M, [['__scopeId', 'data-v-23942903']]),
  R = { class: 'page-container' },
  b = s({
    __name: 'index',
    setup(a) {
      return (o, n) => (i(), c('div', R, [x(B)]));
    },
  });
export { b as default };
