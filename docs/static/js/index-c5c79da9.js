var M = Object.defineProperty,
  V = Object.defineProperties;
var W = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty,
  $ = Object.prototype.propertyIsEnumerable;
var R = (s, e, t) =>
    e in s ? M(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (s[e] = t),
  S = (s, e) => {
    for (var t in e || (e = {})) O.call(e, t) && R(s, t, e[t]);
    if (C) for (var t of C(e)) $.call(e, t) && R(s, t, e[t]);
    return s;
  },
  k = (s, e) => V(s, W(e));
import { u as y } from './useECharts-f1c25a97.js';
import {
  d as m,
  j as x,
  k as b,
  o as c,
  c as d,
  g as n,
  F as w,
  a as A,
  b as p,
  e as E,
  L as F,
  ae as N,
  f as a,
  w as o,
  u as P,
  v as B,
  t as g,
} from './index-ad4df6b0.js';
import { _ as f } from './plugin-vueexport-helper-c27b6911.js';
import { _ as T } from './logo-46af6dfb.js';
import { S as z } from './index-000e99e6.js';
const j = m({
  __name: 'AnalysisChart',
  setup(s) {
    const e = x(null),
      { setOptions: t } = y(e);
    return (
      b(() => {
        t({
          tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } },
          },
          grid: { left: '0%', right: '2%', bottom: '0%', top: '2%', containLabel: !0 },
          xAxis: [
            {
              type: 'category',
              boundaryGap: !1,
              data: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
              splitLine: { show: !0 },
            },
          ],
          yAxis: [{ type: 'value', splitLine: { show: !0 }, splitArea: { show: !0 } }],
          series: [
            {
              name: '任务',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              smooth: !0,
              emphasis: { focus: 'series' },
              data: [50, 134, 191, 280, 90, 30, 10],
            },
            {
              name: '事项',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              smooth: !0,
              emphasis: { focus: 'series' },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: '目标任务',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              smooth: !0,
              emphasis: { focus: 'series' },
              itemStyle: { color: '#409eff' },
              data: [150, 154, 201, 299, 190, 330, 410],
            },
          ],
        });
      }),
      (r, l) => (c(), d('div', { ref_key: 'chartRef', ref: e, class: 'chartRef' }, null, 512))
    );
  },
});
const D = f(j, [['__scopeId', 'data-v-d98487d8']]),
  U = m({
    __name: 'PieChart',
    setup(s) {
      const e = x(null),
        { setOptions: t } = y(e);
      return (
        b(() => {
          t({
            tooltip: { trigger: 'item' },
            legend: { bottom: '1%', left: 'center' },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: !1,
                itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
                label: { show: !1, position: 'center' },
                emphasis: { label: { show: !0, fontSize: '20', fontWeight: 'bold' } },
                labelLine: { show: !1 },
                data: [
                  { value: 20, name: 'React' },
                  { value: 70, name: 'Vue' },
                  { value: 10, name: 'Angular' },
                ],
              },
            ],
          });
        }),
        (r, l) => (c(), d('div', { ref_key: 'chartRef', ref: e, class: 'chartRef' }, null, 512))
      );
    },
  });
const G = f(U, [['__scopeId', 'data-v-cb571d22']]),
  q = m({
    __name: 'WordCloud',
    setup(s) {
      const e = x(null),
        { setOptions: t } = y(e);
      return (
        b(() => {
          let r = [
            { name: 'Vue', value: 0 },
            { name: 'React', value: 0 },
            { name: 'Angular', value: 0 },
            { name: 'ECharts', value: 0 },
            { name: 'Wechat', value: 0 },
            { name: 'Element', value: 0 },
            { name: 'Vite', value: 0 },
            { name: 'Node', value: 0 },
            { name: 'Router', value: 0 },
            { name: 'I18n', value: 0 },
            { name: 'VitePress', value: 0 },
            { name: 'Umi', value: 0 },
            { name: 'And Design', value: 0 },
          ];
          (r = r.map((l) => ((l.value = Math.random() * 30 + 8), l))),
            t({
              tooltip: { trigger: 'item' },
              series: [
                {
                  type: 'wordCloud',
                  shape: 'alias',
                  sizeRange: [15, 60],
                  rotationRange: [-90, 90],
                  rotationStep: 90,
                  gridSize: 8,
                  width: '100%',
                  height: '100%',
                  layoutAnimation: !0,
                  textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    color: function () {
                      return (
                        'rgb(' +
                        [
                          Math.round(Math.random() * 255),
                          Math.round(Math.random() * 255),
                          Math.round(Math.random() * 255),
                        ].join(',') +
                        ')'
                      );
                    },
                  },
                  emphasis: { focus: 'self' },
                  data: r,
                },
              ],
            });
        }),
        (r, l) => (c(), d('div', { ref_key: 'chartRef', ref: e, class: 'chartRef' }, null, 512))
      );
    },
  });
const H = f(q, [['__scopeId', 'data-v-47ebfe9f']]);
const J = {},
  K = { class: 'comment' },
  Q = N(
    '<div class="item" data-v-fd19a0e4><img src="' +
      T +
      '" data-v-fd19a0e4><div class="item-content" data-v-fd19a0e4><span class="title" data-v-fd19a0e4>某某某</span><span class="time" data-v-fd19a0e4>2021-12-31</span><span class="text" data-v-fd19a0e4> 据我观察，你今天吃意大利面遇到不良商家，没有拌42号混凝土，以及使用劣质螺丝钉，严重影响你的扭矩，从而影响UFO的产量，吸收不足引发内蜂蜜失调，导致排放系统紊乱，对整个太平洋以及充电器造成严重的核污染。我个人认为，这个意大利面就应该拌42号混凝土，因为这个螺丝钉的长度，它很容易会直接影响到挖掘机的扭矩你知道吧，你往里砸的时候，一瞬间它就会产生大量的高能蛋白。 </span></div></div>',
    1,
  );
function X(s, e) {
  const t = p('el-divider');
  return (
    c(),
    d('div', K, [
      n('ul', null, [
        (c(),
        d(
          w,
          null,
          A(4, (r, l) =>
            n('li', { key: l }, [
              Q,
              l != 3 ? (c(), E(t, { key: 0, 'border-style': 'double' })) : F('', !0),
            ]),
          ),
          64,
        )),
      ]),
    ])
  );
}
const Y = f(J, [
    ['render', X],
    ['__scopeId', 'data-v-fd19a0e4'],
  ]),
  h = (s) => (P('data-v-52521dcf'), (s = s()), B(), s),
  Z = { class: 'card-header cursor' },
  ee = { class: 'card-content' },
  te = { class: 'numerical-value' },
  ae = { class: 'number' },
  se = h(() => n('span', null, 'Online/Total', -1)),
  oe = h(() => n('div', { class: 'card-header cursor' }, [n('span', null, '任务数据')], -1)),
  ne = h(() => n('div', { class: 'card-header cursor' }, [n('span', null, '任务数据')], -1)),
  le = h(() => n('div', { class: 'card-header cursor' }, [n('span', null, '评论列表')], -1)),
  re = h(() => n('div', { class: 'card-header cursor' }, [n('span', null, '词云')], -1)),
  ce = m({ name: 'RtWelcome' }),
  de = m(
    k(S({}, ce), {
      setup(s) {
        const e = [
            { title: '待办事项', online: 24, total: 70 },
            { title: '待办任务', online: 39, total: 100 },
            { title: '目标计划', online: 5, total: 10 },
            { title: '评论回复', online: 10, total: 40 },
          ],
          t = (r, l) => Math.round((r / l) * 100);
        return (r, l) => {
          const I = p('el-progress'),
            _ = p('el-card'),
            i = p('el-col'),
            v = p('el-row');
          return (
            c(),
            d('div', null, [
              a(
                v,
                { gutter: 20, class: 'enter-y' },
                {
                  default: o(() => [
                    (c(),
                    d(
                      w,
                      null,
                      A(e, (u, L) =>
                        a(
                          i,
                          { key: L, xs: 24, sm: 24, md: 6, lg: 6, xl: 6 },
                          {
                            default: o(() => [
                              a(
                                _,
                                { class: 'box-card' },
                                {
                                  header: o(() => [
                                    n('div', Z, [
                                      n('span', null, g(u.title), 1),
                                      a(z, { name: 'iEL-arrow-right' }),
                                    ]),
                                  ]),
                                  default: o(() => [
                                    n('div', ee, [
                                      n('div', te, [
                                        n('span', ae, g(u.online) + '/' + g(u.total), 1),
                                        se,
                                      ]),
                                      a(
                                        I,
                                        {
                                          'text-inside': !0,
                                          'stroke-width': 26,
                                          percentage: t(u.online, u.total),
                                        },
                                        null,
                                        8,
                                        ['percentage'],
                                      ),
                                    ]),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              ),
                            ]),
                            _: 2,
                          },
                          1024,
                        ),
                      ),
                      64,
                    )),
                  ]),
                  _: 1,
                },
              ),
              a(
                v,
                { gutter: 20, class: 'enter-y' },
                {
                  default: o(() => [
                    a(
                      i,
                      { xs: 24, sm: 24, md: 18, lg: 18, xl: 18 },
                      {
                        default: o(() => [
                          a(
                            _,
                            { class: 'box-card' },
                            { header: o(() => [oe]), default: o(() => [a(D)]), _: 1 },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      i,
                      { xs: 24, sm: 24, md: 6, lg: 6, xl: 6 },
                      {
                        default: o(() => [
                          a(
                            _,
                            { class: 'box-card' },
                            { header: o(() => [ne]), default: o(() => [a(G)]), _: 1 },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
              a(
                v,
                { gutter: 20, class: 'enter-y' },
                {
                  default: o(() => [
                    a(
                      i,
                      { xs: 24, sm: 24, md: 18, lg: 18, xl: 18 },
                      {
                        default: o(() => [
                          a(
                            _,
                            { class: 'box-card' },
                            { header: o(() => [le]), default: o(() => [a(Y)]), _: 1 },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      i,
                      { xs: 24, sm: 24, md: 6, lg: 6, xl: 6 },
                      {
                        default: o(() => [
                          a(
                            _,
                            { class: 'box-card' },
                            { header: o(() => [re]), default: o(() => [a(H)]), _: 1 },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
            ])
          );
        };
      },
    }),
  );
const he = f(de, [['__scopeId', 'data-v-52521dcf']]);
export { he as default };
