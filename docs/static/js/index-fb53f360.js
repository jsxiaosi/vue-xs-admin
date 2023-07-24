import { u as y } from './useECharts-ec88091f.js';
import {
  d as h,
  j as x,
  k as b,
  o as d,
  c,
  a as p,
  g as a,
  F as C,
  b as R,
  e as w,
  K as A,
  ab as I,
  f as e,
  w as t,
  u as M,
  v as V,
  t as g,
} from './index-ae766c94.js';
import { _ as m } from './plugin-vueexport-helper-c27b6911.js';
import { _ as L } from './logo-46af6dfb.js';
import { S as W } from './index-0598ba50.js';
const O = h({
  __name: 'AnalysisChart',
  setup(r) {
    const s = x(null),
      { setOptions: l } = y(s);
    return (
      b(() => {
        l({
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
      (n, o) => (d(), c('div', { ref_key: 'chartRef', ref: s, class: 'chartRef' }, null, 512))
    );
  },
});
const $ = m(O, [['__scopeId', 'data-v-d98487d8']]),
  E = h({
    __name: 'PieChart',
    setup(r) {
      const s = x(null),
        { setOptions: l } = y(s);
      return (
        b(() => {
          l({
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
        (n, o) => (d(), c('div', { ref_key: 'chartRef', ref: s, class: 'chartRef' }, null, 512))
      );
    },
  });
const F = m(E, [['__scopeId', 'data-v-cb571d22']]),
  N = h({
    __name: 'WordCloud',
    setup(r) {
      const s = x(null),
        { setOptions: l } = y(s);
      return (
        b(() => {
          let n = [
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
          (n = n.map((o) => ((o.value = Math.random() * 30 + 8), o))),
            l({
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
                  data: n,
                },
              ],
            });
        }),
        (n, o) => (d(), c('div', { ref_key: 'chartRef', ref: s, class: 'chartRef' }, null, 512))
      );
    },
  });
const P = m(N, [['__scopeId', 'data-v-47ebfe9f']]);
const B = {},
  T = { class: 'comment' },
  z = I(
    '<div class="item" data-v-fd19a0e4><img src="' +
      L +
      '" data-v-fd19a0e4><div class="item-content" data-v-fd19a0e4><span class="title" data-v-fd19a0e4>某某某</span><span class="time" data-v-fd19a0e4>2021-12-31</span><span class="text" data-v-fd19a0e4> 据我观察，你今天吃意大利面遇到不良商家，没有拌42号混凝土，以及使用劣质螺丝钉，严重影响你的扭矩，从而影响UFO的产量，吸收不足引发内蜂蜜失调，导致排放系统紊乱，对整个太平洋以及充电器造成严重的核污染。我个人认为，这个意大利面就应该拌42号混凝土，因为这个螺丝钉的长度，它很容易会直接影响到挖掘机的扭矩你知道吧，你往里砸的时候，一瞬间它就会产生大量的高能蛋白。 </span></div></div>',
    1,
  );
function j(r, s) {
  const l = p('el-divider');
  return (
    d(),
    c('div', T, [
      a('ul', null, [
        (d(),
        c(
          C,
          null,
          R(4, (n, o) =>
            a('li', { key: o }, [
              z,
              o != 3 ? (d(), w(l, { key: 0, 'border-style': 'double' })) : A('', !0),
            ]),
          ),
          64,
        )),
      ]),
    ])
  );
}
const D = m(B, [
    ['render', j],
    ['__scopeId', 'data-v-fd19a0e4'],
  ]),
  f = (r) => (M('data-v-39d3dea6'), (r = r()), V(), r),
  U = { class: 'card-header cursor' },
  G = { class: 'card-content' },
  K = { class: 'numerical-value' },
  q = { class: 'number' },
  H = f(() => a('span', null, 'Online/Total', -1)),
  J = f(() => a('div', { class: 'card-header cursor' }, [a('span', null, '任务数据')], -1)),
  Q = f(() => a('div', { class: 'card-header cursor' }, [a('span', null, '任务数据')], -1)),
  X = f(() => a('div', { class: 'card-header cursor' }, [a('span', null, '评论列表')], -1)),
  Y = f(() => a('div', { class: 'card-header cursor' }, [a('span', null, '词云')], -1)),
  Z = h({
    name: 'RtWelcome',
    __name: 'index',
    setup(r) {
      const s = [
          { title: '待办事项', online: 24, total: 70 },
          { title: '待办任务', online: 39, total: 100 },
          { title: '目标计划', online: 5, total: 10 },
          { title: '评论回复', online: 10, total: 40 },
        ],
        l = (n, o) => Math.round((n / o) * 100);
      return (n, o) => {
        const S = p('el-progress'),
          i = p('el-card'),
          _ = p('el-col'),
          v = p('el-row');
        return (
          d(),
          c('div', null, [
            e(
              v,
              { gutter: 20, class: 'enter-y' },
              {
                default: t(() => [
                  (d(),
                  c(
                    C,
                    null,
                    R(s, (u, k) =>
                      e(
                        _,
                        { key: k, xs: 24, sm: 24, md: 6, lg: 6, xl: 6 },
                        {
                          default: t(() => [
                            e(
                              i,
                              { class: 'box-card' },
                              {
                                header: t(() => [
                                  a('div', U, [
                                    a('span', null, g(u.title), 1),
                                    e(W, { name: 'iEL-arrow-right' }),
                                  ]),
                                ]),
                                default: t(() => [
                                  a('div', G, [
                                    a('div', K, [
                                      a('span', q, g(u.online) + '/' + g(u.total), 1),
                                      H,
                                    ]),
                                    e(
                                      S,
                                      {
                                        'text-inside': !0,
                                        'stroke-width': 26,
                                        percentage: l(u.online, u.total),
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
            e(
              v,
              { gutter: 20, class: 'enter-y' },
              {
                default: t(() => [
                  e(
                    _,
                    { xs: 24, sm: 24, md: 18, lg: 18, xl: 18 },
                    {
                      default: t(() => [
                        e(
                          i,
                          { class: 'box-card' },
                          { header: t(() => [J]), default: t(() => [e($)]), _: 1 },
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  e(
                    _,
                    { xs: 24, sm: 24, md: 6, lg: 6, xl: 6 },
                    {
                      default: t(() => [
                        e(
                          i,
                          { class: 'box-card' },
                          { header: t(() => [Q]), default: t(() => [e(F)]), _: 1 },
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              v,
              { gutter: 20, class: 'enter-y' },
              {
                default: t(() => [
                  e(
                    _,
                    { xs: 24, sm: 24, md: 18, lg: 18, xl: 18 },
                    {
                      default: t(() => [
                        e(
                          i,
                          { class: 'box-card' },
                          { header: t(() => [X]), default: t(() => [e(D)]), _: 1 },
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  e(
                    _,
                    { xs: 24, sm: 24, md: 6, lg: 6, xl: 6 },
                    {
                      default: t(() => [
                        e(
                          i,
                          { class: 'box-card' },
                          { header: t(() => [Y]), default: t(() => [e(P)]), _: 1 },
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
  });
const ne = m(Z, [['__scopeId', 'data-v-39d3dea6']]);
export { ne as default };
