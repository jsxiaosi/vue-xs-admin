var Ii = (a, e, t) =>
  new Promise((r, n) => {
    var i = (l) => {
        try {
          s(t.next(l));
        } catch (u) {
          n(u);
        }
      },
      o = (l) => {
        try {
          s(t.throw(l));
        } catch (u) {
          n(u);
        }
      },
      s = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(i, o));
    s((t = t.apply(a, e)).next());
  });
import {
  d as rh,
  j as nh,
  k as ih,
  _ as oh,
  R as sh,
  o as lh,
  c as uh,
  g as hh,
} from './index-dfb446be.js';
import {
  _ as k,
  b as Ys,
  a as vh,
  B as Xs,
  r as Gn,
  t as Be,
  c as ea,
  A as Ce,
  m as qs,
  d as Pi,
  e as ja,
  C as $t,
  S as fa,
  f as te,
  g as Qa,
  h as ee,
  i as bt,
  j as ch,
  p as z,
  k as H,
  l as I,
  n as Ei,
  o as Na,
  q as On,
  s as O,
  v as Lt,
  w as da,
  x as aa,
  R as Ks,
  L as Xt,
  y as Bt,
  z as nt,
  D as Le,
  M as qt,
  Z as gt,
  E as yt,
  F as lt,
  G as ra,
  H as K,
  I as Wn,
  J as Ft,
  K as js,
  N as ae,
  O as Y,
  P as $n,
  Q as Va,
  T as it,
  U as Gt,
  V as tt,
  W as st,
  X as fh,
  Y as Ie,
  $ as Me,
  a0 as dn,
  a1 as dh,
  a2 as Ot,
  a3 as zt,
  a4 as ph,
  a5 as gh,
  a6 as yh,
  a7 as re,
  a8 as mh,
  a9 as xh,
  aa as Sh,
  ab as le,
  ac as U,
  ad as Ja,
  ae as Qs,
  af as W,
  ag as Kt,
  ah as tr,
  ai as Fn,
  aj as Js,
  ak as ne,
  al as tl,
  am as jt,
  an as bh,
  ao as wh,
  ap as _h,
  aq as el,
  ar as Ah,
  as as al,
  at as Tt,
  au as Dh,
  av as Ri,
  aw as Th,
  ax as Ch,
  ay as Mh,
  az as B,
  aA as pt,
  aB as Lh,
  aC as na,
  aD as er,
  aE as Vt,
  aF as Ct,
  aG as Ih,
  aH as rl,
  aI as nl,
  aJ as ie,
  aK as Ph,
  aL as il,
  aM as ht,
  aN as ol,
  aO as Dt,
  aP as Eh,
  aQ as ye,
  aR as We,
  aS as ga,
  aT as Rh,
  aU as kh,
  aV as Nh,
  aW as Vh,
  aX as Bh,
  aY as ze,
  aZ as zh,
  a_ as Gh,
  a$ as Mt,
  b0 as ar,
  b1 as sl,
  b2 as kt,
  b3 as Ea,
  b4 as Oh,
  b5 as Wh,
  b6 as $h,
  b7 as Fh,
  b8 as Wt,
  b9 as rr,
  ba as nr,
  bb as Hh,
  bc as Hn,
  bd as Zh,
  be as Ba,
  bf as Uh,
  bg as Yh,
  bh as ir,
  bi as Zn,
  bj as ll,
  bk as pa,
  bl as Qt,
  bm as Nt,
  bn as pn,
  bo as Jt,
  bp as ft,
  bq as Un,
  br as Yn,
  bs as Ne,
  bt as or,
  bu as Xh,
  bv as sr,
  bw as gn,
  bx as It,
  by as ul,
  bz as za,
  bA as hl,
  bB as lr,
  bC as vl,
  bD as cl,
  bE as vt,
  bF as qh,
  bG as Kh,
  bH as jh,
  bI as Qh,
  bJ as ki,
  bK as fl,
  bL as yn,
  bM as ut,
  bN as dl,
  bO as Jh,
  bP as tv,
  bQ as ev,
  bR as pl,
  bS as av,
  bT as Oe,
  bU as mt,
  bV as ur,
  bW as dt,
  bX as rv,
  bY as nv,
  bZ as fe,
  b_ as hr,
  b$ as vr,
  c0 as cr,
  c1 as iv,
  c2 as fr,
  c3 as gl,
  c4 as Xn,
  c5 as yl,
  c6 as ml,
  c7 as xl,
  c8 as Sl,
  c9 as mn,
  ca as ov,
  cb as sv,
  cc as Ga,
  cd as Oa,
  ce as xn,
  cf as qn,
  cg as bl,
  ch as lv,
  ci as dr,
  cj as pr,
  ck as uv,
  cl as wl,
  cm as Ni,
  cn as ya,
  co as Vi,
  cp as hv,
  cq as _l,
  cr as Al,
  cs as Bi,
  ct as gr,
  cu as ve,
  cv as vv,
  cw as cv,
  cx as zi,
  cy as fv,
  cz as At,
  cA as Sn,
  cB as dv,
  cC as Dl,
  cD as pv,
  cE as Tl,
  cF as gv,
  cG as yv,
  cH as Gi,
  cI as mv,
  cJ as xv,
  cK as Oi,
  cL as Sv,
  cM as bv,
  cN as wv,
  cO as _v,
  cP as Av,
  cQ as Dv,
  cR as Tv,
  cS as bn,
  cT as wn,
  cU as Cv,
  cV as wr,
  cW as Kn,
  cX as jn,
  cY as _r,
  cZ as Mv,
  c_ as Lv,
  c$ as Xe,
  d0 as Iv,
  d1 as Wi,
  d2 as Pv,
  d3 as $i,
  d4 as Ev,
  d5 as _n,
  d6 as Fi,
  d7 as Rv,
  d8 as kv,
  d9 as Nv,
  da as Cl,
  db as Hi,
  dc as Vv,
  dd as Bv,
  de as Zi,
  df as zv,
  dg as Gv,
  dh as Ov,
  di as ue,
  dj as ia,
  dk as Wv,
  dl as Ui,
  dm as $v,
  dn as Fv,
  dp as Hv,
  dq as Zv,
  dr as Ml,
  ds as Uv,
  dt as Ll,
  du as Yv,
  dv as Xv,
  dw as qv,
  dx as Kv,
  dy as yr,
  dz as jv,
  dA as Qv,
  dB as Jv,
  dC as tc,
  dD as ec,
  dE as ac,
  dF as rc,
  dG as nc,
  dH as ic,
  dI as Il,
  dJ as Qn,
  dK as oc,
  dL as sc,
  dM as lc,
  dN as Yi,
  dO as uc,
  dP as hc,
  dQ as vc,
  dR as cc,
  dS as fc,
  dT as dc,
  dU as pc,
  dV as gc,
  dW as yc,
  dX as mc,
  dY as xc,
  dZ as Sc,
  d_ as bc,
  d$ as wc,
  e0 as _c,
  e1 as Ac,
  e2 as Dc,
  e3 as Tc,
  u as Cc,
  e4 as Mc,
} from './useECharts-18784b36.js';
import { _ as Lc } from './plugin-vueexport-helper-c27b6911.js';
var Ic = (function (a) {
  k(e, a);
  function e() {
    return (a !== null && a.apply(this, arguments)) || this;
  }
  return (
    (e.prototype.makeElOption = function (t, r, n, i, o) {
      var s = n.axis;
      s.dim === 'angle' && (this.animationThreshold = Math.PI / 18);
      var l = s.polar,
        u = l.getOtherAxis(s),
        h = u.getExtent(),
        v = s.dataToCoord(r),
        c = i.get('type');
      if (c && c !== 'none') {
        var f = Ys(i),
          d = Ec[c](s, l, v, h);
        (d.style = f), (t.graphicKey = d.type), (t.pointer = d);
      }
      var p = i.get(['label', 'margin']),
        g = Pc(r, n, i, l, p);
      vh(t, n, i, o, g);
    }),
    e
  );
})(Xs);
function Pc(a, e, t, r, n) {
  var i = e.axis,
    o = i.dataToCoord(a),
    s = r.getAngleAxis().getExtent()[0];
  s = (s / 180) * Math.PI;
  var l = r.getRadiusAxis().getExtent(),
    u,
    h,
    v;
  if (i.dim === 'radius') {
    var c = ja();
    Gn(c, c, s), Be(c, c, [r.cx, r.cy]), (u = ea([o, -n], c));
    var f = e.getModel('axisLabel').get('rotate') || 0,
      d = Ce.innerTextLayout(s, (f * Math.PI) / 180, -1);
    (h = d.textAlign), (v = d.textVerticalAlign);
  } else {
    var p = l[1];
    u = r.coordToPoint([p + n, o]);
    var g = r.cx,
      y = r.cy;
    (h = Math.abs(u[0] - g) / p < 0.3 ? 'center' : u[0] > g ? 'left' : 'right'),
      (v = Math.abs(u[1] - y) / p < 0.3 ? 'middle' : u[1] > y ? 'top' : 'bottom');
  }
  return { position: u, align: h, verticalAlign: v };
}
var Ec = {
  line: function (a, e, t, r) {
    return a.dim === 'angle'
      ? { type: 'Line', shape: qs(e.coordToPoint([r[0], t]), e.coordToPoint([r[1], t])) }
      : { type: 'Circle', shape: { cx: e.cx, cy: e.cy, r: t } };
  },
  shadow: function (a, e, t, r) {
    var n = Math.max(1, a.getBandWidth()),
      i = Math.PI / 180;
    return a.dim === 'angle'
      ? { type: 'Sector', shape: Pi(e.cx, e.cy, r[0], r[1], (-t - n / 2) * i, (-t + n / 2) * i) }
      : { type: 'Sector', shape: Pi(e.cx, e.cy, t - n / 2, t + n / 2, 0, Math.PI * 2) };
  },
};
const Rc = Ic;
var kc = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.findAxisModel = function (t) {
      var r,
        n = this.ecModel;
      return (
        n.eachComponent(
          t,
          function (i) {
            i.getCoordSysModel() === this && (r = i);
          },
          this,
        ),
        r
      );
    }),
    (e.type = 'polar'),
    (e.dependencies = ['radiusAxis', 'angleAxis']),
    (e.defaultOption = { z: 0, center: ['50%', '50%'], radius: '80%' }),
    e
  );
})($t);
const Nc = kc;
var Jn = (function (a) {
  k(e, a);
  function e() {
    return (a !== null && a.apply(this, arguments)) || this;
  }
  return (
    (e.prototype.getCoordSysModel = function () {
      return this.getReferringComponents('polar', fa).models[0];
    }),
    (e.type = 'polarAxis'),
    e
  );
})($t);
te(Jn, Qa);
var Vc = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (e.type = 'angleAxis'), e;
  })(Jn),
  Bc = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (e.type = 'radiusAxis'), e;
  })(Jn),
  ti = (function (a) {
    k(e, a);
    function e(t, r) {
      return a.call(this, 'radius', t, r) || this;
    }
    return (
      (e.prototype.pointToData = function (t, r) {
        return this.polar.pointToData(t, r)[this.dim === 'radius' ? 0 : 1];
      }),
      e
    );
  })(ee);
ti.prototype.dataToRadius = ee.prototype.dataToCoord;
ti.prototype.radiusToData = ee.prototype.coordToData;
const zc = ti;
var Gc = bt(),
  ei = (function (a) {
    k(e, a);
    function e(t, r) {
      return a.call(this, 'angle', t, r || [0, 360]) || this;
    }
    return (
      (e.prototype.pointToData = function (t, r) {
        return this.polar.pointToData(t, r)[this.dim === 'radius' ? 0 : 1];
      }),
      (e.prototype.calculateCategoryInterval = function () {
        var t = this,
          r = t.getLabelModel(),
          n = t.scale,
          i = n.getExtent(),
          o = n.count();
        if (i[1] - i[0] < 1) return 0;
        var s = i[0],
          l = t.dataToCoord(s + 1) - t.dataToCoord(s),
          u = Math.abs(l),
          h = ch(s == null ? '' : s + '', r.getFont(), 'center', 'top'),
          v = Math.max(h.height, 7),
          c = v / u;
        isNaN(c) && (c = 1 / 0);
        var f = Math.max(0, Math.floor(c)),
          d = Gc(t.model),
          p = d.lastAutoInterval,
          g = d.lastTickCount;
        return (
          p != null && g != null && Math.abs(p - f) <= 1 && Math.abs(g - o) <= 1 && p > f
            ? (f = p)
            : ((d.lastTickCount = o), (d.lastAutoInterval = f)),
          f
        );
      }),
      e
    );
  })(ee);
ei.prototype.dataToAngle = ee.prototype.dataToCoord;
ei.prototype.angleToData = ee.prototype.coordToData;
const Oc = ei;
var Pl = ['radius', 'angle'],
  Wc = (function () {
    function a(e) {
      (this.dimensions = Pl),
        (this.type = 'polar'),
        (this.cx = 0),
        (this.cy = 0),
        (this._radiusAxis = new zc()),
        (this._angleAxis = new Oc()),
        (this.axisPointerEnabled = !0),
        (this.name = e || ''),
        (this._radiusAxis.polar = this._angleAxis.polar = this);
    }
    return (
      (a.prototype.containPoint = function (e) {
        var t = this.pointToCoord(e);
        return this._radiusAxis.contain(t[0]) && this._angleAxis.contain(t[1]);
      }),
      (a.prototype.containData = function (e) {
        return this._radiusAxis.containData(e[0]) && this._angleAxis.containData(e[1]);
      }),
      (a.prototype.getAxis = function (e) {
        var t = '_' + e + 'Axis';
        return this[t];
      }),
      (a.prototype.getAxes = function () {
        return [this._radiusAxis, this._angleAxis];
      }),
      (a.prototype.getAxesByScale = function (e) {
        var t = [],
          r = this._angleAxis,
          n = this._radiusAxis;
        return r.scale.type === e && t.push(r), n.scale.type === e && t.push(n), t;
      }),
      (a.prototype.getAngleAxis = function () {
        return this._angleAxis;
      }),
      (a.prototype.getRadiusAxis = function () {
        return this._radiusAxis;
      }),
      (a.prototype.getOtherAxis = function (e) {
        var t = this._angleAxis;
        return e === t ? this._radiusAxis : t;
      }),
      (a.prototype.getBaseAxis = function () {
        return (
          this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAngleAxis()
        );
      }),
      (a.prototype.getTooltipAxes = function (e) {
        var t = e != null && e !== 'auto' ? this.getAxis(e) : this.getBaseAxis();
        return { baseAxes: [t], otherAxes: [this.getOtherAxis(t)] };
      }),
      (a.prototype.dataToPoint = function (e, t) {
        return this.coordToPoint([
          this._radiusAxis.dataToRadius(e[0], t),
          this._angleAxis.dataToAngle(e[1], t),
        ]);
      }),
      (a.prototype.pointToData = function (e, t) {
        var r = this.pointToCoord(e);
        return [this._radiusAxis.radiusToData(r[0], t), this._angleAxis.angleToData(r[1], t)];
      }),
      (a.prototype.pointToCoord = function (e) {
        var t = e[0] - this.cx,
          r = e[1] - this.cy,
          n = this.getAngleAxis(),
          i = n.getExtent(),
          o = Math.min(i[0], i[1]),
          s = Math.max(i[0], i[1]);
        n.inverse ? (o = s - 360) : (s = o + 360);
        var l = Math.sqrt(t * t + r * r);
        (t /= l), (r /= l);
        for (var u = (Math.atan2(-r, t) / Math.PI) * 180, h = u < o ? 1 : -1; u < o || u > s; )
          u += h * 360;
        return [l, u];
      }),
      (a.prototype.coordToPoint = function (e) {
        var t = e[0],
          r = (e[1] / 180) * Math.PI,
          n = Math.cos(r) * t + this.cx,
          i = -Math.sin(r) * t + this.cy;
        return [n, i];
      }),
      (a.prototype.getArea = function () {
        var e = this.getAngleAxis(),
          t = this.getRadiusAxis(),
          r = t.getExtent().slice();
        r[0] > r[1] && r.reverse();
        var n = e.getExtent(),
          i = Math.PI / 180;
        return {
          cx: this.cx,
          cy: this.cy,
          r0: r[0],
          r: r[1],
          startAngle: -n[0] * i,
          endAngle: -n[1] * i,
          clockwise: e.inverse,
          contain: function (o, s) {
            var l = o - this.cx,
              u = s - this.cy,
              h = l * l + u * u - 1e-4,
              v = this.r,
              c = this.r0;
            return h <= v * v && h >= c * c;
          },
        };
      }),
      (a.prototype.convertToPixel = function (e, t, r) {
        var n = Xi(t);
        return n === this ? this.dataToPoint(r) : null;
      }),
      (a.prototype.convertFromPixel = function (e, t, r) {
        var n = Xi(t);
        return n === this ? this.pointToData(r) : null;
      }),
      a
    );
  })();
function Xi(a) {
  var e = a.seriesModel,
    t = a.polarModel;
  return (t && t.coordinateSystem) || (e && e.coordinateSystem);
}
const $c = Wc;
function Fc(a, e, t) {
  var r = e.get('center'),
    n = t.getWidth(),
    i = t.getHeight();
  (a.cx = z(r[0], n)), (a.cy = z(r[1], i));
  var o = a.getRadiusAxis(),
    s = Math.min(n, i) / 2,
    l = e.get('radius');
  l == null ? (l = [0, '100%']) : H(l) || (l = [0, l]);
  var u = [z(l[0], s), z(l[1], s)];
  o.inverse ? o.setExtent(u[1], u[0]) : o.setExtent(u[0], u[1]);
}
function Hc(a, e) {
  var t = this,
    r = t.getAngleAxis(),
    n = t.getRadiusAxis();
  if (
    (r.scale.setExtent(1 / 0, -1 / 0),
    n.scale.setExtent(1 / 0, -1 / 0),
    a.eachSeries(function (s) {
      if (s.coordinateSystem === t) {
        var l = s.getData();
        I(Ei(l, 'radius'), function (u) {
          n.scale.unionExtentFromData(l, u);
        }),
          I(Ei(l, 'angle'), function (u) {
            r.scale.unionExtentFromData(l, u);
          });
      }
    }),
    Na(r.scale, r.model),
    Na(n.scale, n.model),
    r.type === 'category' && !r.onBand)
  ) {
    var i = r.getExtent(),
      o = 360 / r.scale.count();
    r.inverse ? (i[1] += o) : (i[1] -= o), r.setExtent(i[0], i[1]);
  }
}
function Zc(a) {
  return a.mainType === 'angleAxis';
}
function qi(a, e) {
  if (
    ((a.type = e.get('type')),
    (a.scale = On(e)),
    (a.onBand = e.get('boundaryGap') && a.type === 'category'),
    (a.inverse = e.get('inverse')),
    Zc(e))
  ) {
    a.inverse = a.inverse !== e.get('clockwise');
    var t = e.get('startAngle');
    a.setExtent(t, t + (a.inverse ? -360 : 360));
  }
  (e.axis = a), (a.model = e);
}
var Uc = {
  dimensions: Pl,
  create: function (a, e) {
    var t = [];
    return (
      a.eachComponent('polar', function (r, n) {
        var i = new $c(n + '');
        i.update = Hc;
        var o = i.getRadiusAxis(),
          s = i.getAngleAxis(),
          l = r.findAxisModel('radiusAxis'),
          u = r.findAxisModel('angleAxis');
        qi(o, l), qi(s, u), Fc(i, r, e), t.push(i), (r.coordinateSystem = i), (i.model = r);
      }),
      a.eachSeries(function (r) {
        if (r.get('coordinateSystem') === 'polar') {
          var n = r.getReferringComponents('polar', fa).models[0];
          r.coordinateSystem = n.coordinateSystem;
        }
      }),
      t
    );
  },
};
const Yc = Uc;
var Xc = [
  'axisLine',
  'axisLabel',
  'axisTick',
  'minorTick',
  'splitLine',
  'minorSplitLine',
  'splitArea',
];
function ma(a, e, t) {
  e[1] > e[0] && (e = e.slice().reverse());
  var r = a.coordToPoint([e[0], t]),
    n = a.coordToPoint([e[1], t]);
  return { x1: r[0], y1: r[1], x2: n[0], y2: n[1] };
}
function xa(a) {
  var e = a.getRadiusAxis();
  return e.inverse ? 0 : 1;
}
function Ki(a) {
  var e = a[0],
    t = a[a.length - 1];
  e && t && Math.abs(Math.abs(e.coord - t.coord) - 360) < 1e-4 && a.pop();
}
var qc = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t.axisPointerClass = 'PolarAxisPointer'), t;
    }
    return (
      (e.prototype.render = function (t, r) {
        if ((this.group.removeAll(), !!t.get('show'))) {
          var n = t.axis,
            i = n.polar,
            o = i.getRadiusAxis().getExtent(),
            s = n.getTicksCoords(),
            l = n.getMinorTicksCoords(),
            u = O(n.getViewLabels(), function (h) {
              h = Lt(h);
              var v = n.scale,
                c = v.type === 'ordinal' ? v.getRawOrdinalNumber(h.tickValue) : h.tickValue;
              return (h.coord = n.dataToCoord(c)), h;
            });
          Ki(u),
            Ki(s),
            I(
              Xc,
              function (h) {
                t.get([h, 'show']) &&
                  (!n.scale.isBlank() || h === 'axisLine') &&
                  Kc[h](this.group, t, i, s, l, o, u);
              },
              this,
            );
        }
      }),
      (e.type = 'angleAxis'),
      e
    );
  })(da),
  Kc = {
    axisLine: function (a, e, t, r, n, i) {
      var o = e.getModel(['axisLine', 'lineStyle']),
        s = xa(t),
        l = s ? 0 : 1,
        u;
      i[l] === 0
        ? (u = new aa({
            shape: { cx: t.cx, cy: t.cy, r: i[s] },
            style: o.getLineStyle(),
            z2: 1,
            silent: !0,
          }))
        : (u = new Ks({
            shape: { cx: t.cx, cy: t.cy, r: i[s], r0: i[l] },
            style: o.getLineStyle(),
            z2: 1,
            silent: !0,
          })),
        (u.style.fill = null),
        a.add(u);
    },
    axisTick: function (a, e, t, r, n, i) {
      var o = e.getModel('axisTick'),
        s = (o.get('inside') ? -1 : 1) * o.get('length'),
        l = i[xa(t)],
        u = O(r, function (h) {
          return new Xt({ shape: ma(t, [l, l + s], h.coord) });
        });
      a.add(
        Bt(u, {
          style: nt(o.getModel('lineStyle').getLineStyle(), {
            stroke: e.get(['axisLine', 'lineStyle', 'color']),
          }),
        }),
      );
    },
    minorTick: function (a, e, t, r, n, i) {
      if (n.length) {
        for (
          var o = e.getModel('axisTick'),
            s = e.getModel('minorTick'),
            l = (o.get('inside') ? -1 : 1) * s.get('length'),
            u = i[xa(t)],
            h = [],
            v = 0;
          v < n.length;
          v++
        )
          for (var c = 0; c < n[v].length; c++)
            h.push(new Xt({ shape: ma(t, [u, u + l], n[v][c].coord) }));
        a.add(
          Bt(h, {
            style: nt(
              s.getModel('lineStyle').getLineStyle(),
              nt(o.getLineStyle(), { stroke: e.get(['axisLine', 'lineStyle', 'color']) }),
            ),
          }),
        );
      }
    },
    axisLabel: function (a, e, t, r, n, i, o) {
      var s = e.getCategories(!0),
        l = e.getModel('axisLabel'),
        u = l.get('margin'),
        h = e.get('triggerEvent');
      I(
        o,
        function (v, c) {
          var f = l,
            d = v.tickValue,
            p = i[xa(t)],
            g = t.coordToPoint([p + u, v.coord]),
            y = t.cx,
            m = t.cy,
            x = Math.abs(g[0] - y) / p < 0.3 ? 'center' : g[0] > y ? 'left' : 'right',
            S = Math.abs(g[1] - m) / p < 0.3 ? 'middle' : g[1] > m ? 'top' : 'bottom';
          if (s && s[d]) {
            var b = s[d];
            Le(b) && b.textStyle && (f = new qt(b.textStyle, l, l.ecModel));
          }
          var w = new gt({
            silent: Ce.isLabelSilent(e),
            style: yt(f, {
              x: g[0],
              y: g[1],
              fill: f.getTextColor() || e.get(['axisLine', 'lineStyle', 'color']),
              text: v.formattedLabel,
              align: x,
              verticalAlign: S,
            }),
          });
          if ((a.add(w), h)) {
            var _ = Ce.makeAxisEventDataBase(e);
            (_.targetType = 'axisLabel'), (_.value = v.rawLabel), (lt(w).eventData = _);
          }
        },
        this,
      );
    },
    splitLine: function (a, e, t, r, n, i) {
      var o = e.getModel('splitLine'),
        s = o.getModel('lineStyle'),
        l = s.get('color'),
        u = 0;
      l = l instanceof Array ? l : [l];
      for (var h = [], v = 0; v < r.length; v++) {
        var c = u++ % l.length;
        (h[c] = h[c] || []), h[c].push(new Xt({ shape: ma(t, i, r[v].coord) }));
      }
      for (var v = 0; v < h.length; v++)
        a.add(
          Bt(h[v], {
            style: nt({ stroke: l[v % l.length] }, s.getLineStyle()),
            silent: !0,
            z: e.get('z'),
          }),
        );
    },
    minorSplitLine: function (a, e, t, r, n, i) {
      if (n.length) {
        for (
          var o = e.getModel('minorSplitLine'), s = o.getModel('lineStyle'), l = [], u = 0;
          u < n.length;
          u++
        )
          for (var h = 0; h < n[u].length; h++) l.push(new Xt({ shape: ma(t, i, n[u][h].coord) }));
        a.add(Bt(l, { style: s.getLineStyle(), silent: !0, z: e.get('z') }));
      }
    },
    splitArea: function (a, e, t, r, n, i) {
      if (r.length) {
        var o = e.getModel('splitArea'),
          s = o.getModel('areaStyle'),
          l = s.get('color'),
          u = 0;
        l = l instanceof Array ? l : [l];
        for (
          var h = [],
            v = Math.PI / 180,
            c = -r[0].coord * v,
            f = Math.min(i[0], i[1]),
            d = Math.max(i[0], i[1]),
            p = e.get('clockwise'),
            g = 1,
            y = r.length;
          g <= y;
          g++
        ) {
          var m = g === y ? r[0].coord : r[g].coord,
            x = u++ % l.length;
          (h[x] = h[x] || []),
            h[x].push(
              new ra({
                shape: {
                  cx: t.cx,
                  cy: t.cy,
                  r0: f,
                  r: d,
                  startAngle: c,
                  endAngle: -m * v,
                  clockwise: p,
                },
                silent: !0,
              }),
            ),
            (c = -m * v);
        }
        for (var g = 0; g < h.length; g++)
          a.add(Bt(h[g], { style: nt({ fill: l[g % l.length] }, s.getAreaStyle()), silent: !0 }));
      }
    },
  };
const jc = qc;
var Qc = ['axisLine', 'axisTickLabel', 'axisName'],
  Jc = ['splitLine', 'splitArea', 'minorSplitLine'],
  tf = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t.axisPointerClass = 'PolarAxisPointer'), t;
    }
    return (
      (e.prototype.render = function (t, r) {
        if ((this.group.removeAll(), !!t.get('show'))) {
          var n = this._axisGroup,
            i = (this._axisGroup = new K());
          this.group.add(i);
          var o = t.axis,
            s = o.polar,
            l = s.getAngleAxis(),
            u = o.getTicksCoords(),
            h = o.getMinorTicksCoords(),
            v = l.getExtent()[0],
            c = o.getExtent(),
            f = af(s, t, v),
            d = new Ce(t, f);
          I(Qc, d.add, d),
            i.add(d.getGroup()),
            Wn(n, i, t),
            I(
              Jc,
              function (p) {
                t.get([p, 'show']) && !o.scale.isBlank() && ef[p](this.group, t, s, v, c, u, h);
              },
              this,
            );
        }
      }),
      (e.type = 'radiusAxis'),
      e
    );
  })(da),
  ef = {
    splitLine: function (a, e, t, r, n, i) {
      var o = e.getModel('splitLine'),
        s = o.getModel('lineStyle'),
        l = s.get('color'),
        u = 0;
      l = l instanceof Array ? l : [l];
      for (var h = [], v = 0; v < i.length; v++) {
        var c = u++ % l.length;
        (h[c] = h[c] || []),
          h[c].push(new aa({ shape: { cx: t.cx, cy: t.cy, r: Math.max(i[v].coord, 0) } }));
      }
      for (var v = 0; v < h.length; v++)
        a.add(
          Bt(h[v], {
            style: nt({ stroke: l[v % l.length], fill: null }, s.getLineStyle()),
            silent: !0,
          }),
        );
    },
    minorSplitLine: function (a, e, t, r, n, i, o) {
      if (o.length) {
        for (
          var s = e.getModel('minorSplitLine'), l = s.getModel('lineStyle'), u = [], h = 0;
          h < o.length;
          h++
        )
          for (var v = 0; v < o[h].length; v++)
            u.push(new aa({ shape: { cx: t.cx, cy: t.cy, r: o[h][v].coord } }));
        a.add(Bt(u, { style: nt({ fill: null }, l.getLineStyle()), silent: !0 }));
      }
    },
    splitArea: function (a, e, t, r, n, i) {
      if (i.length) {
        var o = e.getModel('splitArea'),
          s = o.getModel('areaStyle'),
          l = s.get('color'),
          u = 0;
        l = l instanceof Array ? l : [l];
        for (var h = [], v = i[0].coord, c = 1; c < i.length; c++) {
          var f = u++ % l.length;
          (h[f] = h[f] || []),
            h[f].push(
              new ra({
                shape: {
                  cx: t.cx,
                  cy: t.cy,
                  r0: v,
                  r: i[c].coord,
                  startAngle: 0,
                  endAngle: Math.PI * 2,
                },
                silent: !0,
              }),
            ),
            (v = i[c].coord);
        }
        for (var c = 0; c < h.length; c++)
          a.add(Bt(h[c], { style: nt({ fill: l[c % l.length] }, s.getAreaStyle()), silent: !0 }));
      }
    },
  };
function af(a, e, t) {
  return {
    position: [a.cx, a.cy],
    rotation: (t / 180) * Math.PI,
    labelDirection: -1,
    tickDirection: -1,
    nameDirection: 1,
    labelRotate: e.getModel('axisLabel').get('rotate'),
    z2: 1,
  };
}
const rf = tf;
function El(a) {
  return a.get('stack') || '__ec_stack_' + a.seriesIndex;
}
function Rl(a, e) {
  return e.dim + a.model.componentIndex;
}
function nf(a, e, t) {
  var r = {},
    n = of(
      Ft(e.getSeriesByType(a), function (i) {
        return !e.isSeriesFiltered(i) && i.coordinateSystem && i.coordinateSystem.type === 'polar';
      }),
    );
  e.eachSeriesByType(a, function (i) {
    if (i.coordinateSystem.type === 'polar') {
      var o = i.getData(),
        s = i.coordinateSystem,
        l = s.getBaseAxis(),
        u = Rl(s, l),
        h = El(i),
        v = n[u][h],
        c = v.offset,
        f = v.width,
        d = s.getOtherAxis(l),
        p = i.coordinateSystem.cx,
        g = i.coordinateSystem.cy,
        y = i.get('barMinHeight') || 0,
        m = i.get('barMinAngle') || 0;
      r[h] = r[h] || [];
      for (
        var x = o.mapDimension(d.dim),
          S = o.mapDimension(l.dim),
          b = js(o, x),
          w = l.dim !== 'radius' || !i.get('roundCap', !0),
          _ = d.dataToCoord(0),
          A = 0,
          C = o.count();
        A < C;
        A++
      ) {
        var D = o.get(x, A),
          T = o.get(S, A),
          L = D >= 0 ? 'p' : 'n',
          P = _;
        b && (r[h][T] || (r[h][T] = { p: _, n: _ }), (P = r[h][T][L]));
        var M = void 0,
          E = void 0,
          R = void 0,
          N = void 0;
        if (d.dim === 'radius') {
          var V = d.dataToCoord(D) - _,
            G = l.dataToCoord(T);
          Math.abs(V) < y && (V = (V < 0 ? -1 : 1) * y),
            (M = P),
            (E = P + V),
            (R = G - c),
            (N = R - f),
            b && (r[h][T][L] = E);
        } else {
          var $ = d.dataToCoord(D, w) - _,
            F = l.dataToCoord(T);
          Math.abs($) < m && ($ = ($ < 0 ? -1 : 1) * m),
            (M = F + c),
            (E = M + f),
            (R = P),
            (N = P + $),
            b && (r[h][T][L] = N);
        }
        o.setItemLayout(A, {
          cx: p,
          cy: g,
          r0: M,
          r: E,
          startAngle: (-R * Math.PI) / 180,
          endAngle: (-N * Math.PI) / 180,
          clockwise: R >= N,
        });
      }
    }
  });
}
function of(a) {
  var e = {};
  I(a, function (r, n) {
    var i = r.getData(),
      o = r.coordinateSystem,
      s = o.getBaseAxis(),
      l = Rl(o, s),
      u = s.getExtent(),
      h = s.type === 'category' ? s.getBandWidth() : Math.abs(u[1] - u[0]) / i.count(),
      v = e[l] || {
        bandWidth: h,
        remainedWidth: h,
        autoWidthCount: 0,
        categoryGap: '20%',
        gap: '30%',
        stacks: {},
      },
      c = v.stacks;
    e[l] = v;
    var f = El(r);
    c[f] || v.autoWidthCount++, (c[f] = c[f] || { width: 0, maxWidth: 0 });
    var d = z(r.get('barWidth'), h),
      p = z(r.get('barMaxWidth'), h),
      g = r.get('barGap'),
      y = r.get('barCategoryGap');
    d &&
      !c[f].width &&
      ((d = Math.min(v.remainedWidth, d)), (c[f].width = d), (v.remainedWidth -= d)),
      p && (c[f].maxWidth = p),
      g != null && (v.gap = g),
      y != null && (v.categoryGap = y);
  });
  var t = {};
  return (
    I(e, function (r, n) {
      t[n] = {};
      var i = r.stacks,
        o = r.bandWidth,
        s = z(r.categoryGap, o),
        l = z(r.gap, 1),
        u = r.remainedWidth,
        h = r.autoWidthCount,
        v = (u - s) / (h + (h - 1) * l);
      (v = Math.max(v, 0)),
        I(i, function (p, g) {
          var y = p.maxWidth;
          y &&
            y < v &&
            ((y = Math.min(y, u)),
            p.width && (y = Math.min(y, p.width)),
            (u -= y),
            (p.width = y),
            h--);
        }),
        (v = (u - s) / (h + (h - 1) * l)),
        (v = Math.max(v, 0));
      var c = 0,
        f;
      I(i, function (p, g) {
        p.width || (p.width = v), (f = p), (c += p.width * (1 + l));
      }),
        f && (c -= f.width * l);
      var d = -c / 2;
      I(i, function (p, g) {
        (t[n][g] = t[n][g] || { offset: d, width: p.width }), (d += p.width * (1 + l));
      });
    }),
    t
  );
}
var sf = { startAngle: 90, clockwise: !0, splitNumber: 12, axisLabel: { rotate: 0 } },
  lf = { splitNumber: 5 },
  uf = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (e.type = 'polar'), e;
  })(ae);
function hf(a) {
  Y($n),
    da.registerAxisPointerClass('PolarAxisPointer', Rc),
    a.registerCoordinateSystem('polar', Yc),
    a.registerComponentModel(Nc),
    a.registerComponentView(uf),
    Va(a, 'angle', Vc, sf),
    Va(a, 'radius', Bc, lf),
    a.registerComponentView(jc),
    a.registerComponentView(rf),
    a.registerLayout(it(nf, 'bar'));
}
var $e = fh.value;
function Sa(a, e) {
  return nt({ show: e }, a);
}
var vf = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.optionUpdated = function () {
      var t = this.get('boundaryGap'),
        r = this.get('splitNumber'),
        n = this.get('scale'),
        i = this.get('axisLine'),
        o = this.get('axisTick'),
        s = this.get('axisLabel'),
        l = this.get('axisName'),
        u = this.get(['axisName', 'show']),
        h = this.get(['axisName', 'formatter']),
        v = this.get('axisNameGap'),
        c = this.get('triggerEvent'),
        f = O(
          this.get('indicator') || [],
          function (d) {
            d.max != null && d.max > 0 && !d.min
              ? (d.min = 0)
              : d.min != null && d.min < 0 && !d.max && (d.max = 0);
            var p = l;
            d.color != null && (p = nt({ color: d.color }, l));
            var g = Gt(
              Lt(d),
              {
                boundaryGap: t,
                splitNumber: r,
                scale: n,
                axisLine: i,
                axisTick: o,
                axisLabel: s,
                name: d.text,
                showName: u,
                nameLocation: 'end',
                nameGap: v,
                nameTextStyle: p,
                triggerEvent: c,
              },
              !1,
            );
            if (tt(h)) {
              var y = g.name;
              g.name = h.replace('{value}', y != null ? y : '');
            } else st(h) && (g.name = h(g.name, g));
            var m = new qt(g, null, this.ecModel);
            return (
              te(m, Qa.prototype),
              (m.mainType = 'radar'),
              (m.componentIndex = this.componentIndex),
              m
            );
          },
          this,
        );
      this._indicatorModels = f;
    }),
    (e.prototype.getIndicatorModels = function () {
      return this._indicatorModels;
    }),
    (e.type = 'radar'),
    (e.defaultOption = {
      z: 0,
      center: ['50%', '50%'],
      radius: '75%',
      startAngle: 90,
      axisName: { show: !0 },
      boundaryGap: [0, 0],
      splitNumber: 5,
      axisNameGap: 15,
      scale: !1,
      shape: 'polygon',
      axisLine: Gt({ lineStyle: { color: '#bbb' } }, $e.axisLine),
      axisLabel: Sa($e.axisLabel, !1),
      axisTick: Sa($e.axisTick, !1),
      splitLine: Sa($e.splitLine, !0),
      splitArea: Sa($e.splitArea, !0),
      indicator: [],
    }),
    e
  );
})($t);
const cf = vf;
var ff = ['axisLine', 'axisTickLabel', 'axisName'],
  df = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.render = function (t, r, n) {
        var i = this.group;
        i.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t);
      }),
      (e.prototype._buildAxes = function (t) {
        var r = t.coordinateSystem,
          n = r.getIndicatorAxes(),
          i = O(n, function (o) {
            var s = o.model.get('showName') ? o.name : '',
              l = new Ce(o.model, {
                axisName: s,
                position: [r.cx, r.cy],
                rotation: o.angle,
                labelDirection: -1,
                tickDirection: -1,
                nameDirection: 1,
              });
            return l;
          });
        I(
          i,
          function (o) {
            I(ff, o.add, o), this.group.add(o.getGroup());
          },
          this,
        );
      }),
      (e.prototype._buildSplitLineAndArea = function (t) {
        var r = t.coordinateSystem,
          n = r.getIndicatorAxes();
        if (!n.length) return;
        var i = t.get('shape'),
          o = t.getModel('splitLine'),
          s = t.getModel('splitArea'),
          l = o.getModel('lineStyle'),
          u = s.getModel('areaStyle'),
          h = o.get('show'),
          v = s.get('show'),
          c = l.get('color'),
          f = u.get('color'),
          d = H(c) ? c : [c],
          p = H(f) ? f : [f],
          g = [],
          y = [];
        function m(E, R, N) {
          var V = N % R.length;
          return (E[V] = E[V] || []), V;
        }
        if (i === 'circle')
          for (var x = n[0].getTicksCoords(), S = r.cx, b = r.cy, w = 0; w < x.length; w++) {
            if (h) {
              var _ = m(g, d, w);
              g[_].push(new aa({ shape: { cx: S, cy: b, r: x[w].coord } }));
            }
            if (v && w < x.length - 1) {
              var _ = m(y, p, w);
              y[_].push(new Ks({ shape: { cx: S, cy: b, r0: x[w].coord, r: x[w + 1].coord } }));
            }
          }
        else
          for (
            var A,
              C = O(n, function (E, R) {
                var N = E.getTicksCoords();
                return (
                  (A = A == null ? N.length - 1 : Math.min(N.length - 1, A)),
                  O(N, function (V) {
                    return r.coordToPoint(V.coord, R);
                  })
                );
              }),
              D = [],
              w = 0;
            w <= A;
            w++
          ) {
            for (var T = [], L = 0; L < n.length; L++) T.push(C[L][w]);
            if ((T[0] && T.push(T[0].slice()), h)) {
              var _ = m(g, d, w);
              g[_].push(new Ie({ shape: { points: T } }));
            }
            if (v && D) {
              var _ = m(y, p, w - 1);
              y[_].push(new Me({ shape: { points: T.concat(D) } }));
            }
            D = T.slice().reverse();
          }
        var P = l.getLineStyle(),
          M = u.getAreaStyle();
        I(
          y,
          function (E, R) {
            this.group.add(
              Bt(E, { style: nt({ stroke: 'none', fill: p[R % p.length] }, M), silent: !0 }),
            );
          },
          this,
        ),
          I(
            g,
            function (E, R) {
              this.group.add(
                Bt(E, { style: nt({ fill: 'none', stroke: d[R % d.length] }, P), silent: !0 }),
              );
            },
            this,
          );
      }),
      (e.type = 'radar'),
      e
    );
  })(ae);
const pf = df;
var gf = (function (a) {
  k(e, a);
  function e(t, r, n) {
    var i = a.call(this, t, r, n) || this;
    return (i.type = 'value'), (i.angle = 0), (i.name = ''), i;
  }
  return e;
})(ee);
const yf = gf;
var mf = (function () {
  function a(e, t, r) {
    (this.dimensions = []),
      (this._model = e),
      (this._indicatorAxes = O(
        e.getIndicatorModels(),
        function (n, i) {
          var o = 'indicator_' + i,
            s = new yf(o, new dn());
          return (s.name = n.get('name')), (s.model = n), (n.axis = s), this.dimensions.push(o), s;
        },
        this,
      )),
      this.resize(e, r);
  }
  return (
    (a.prototype.getIndicatorAxes = function () {
      return this._indicatorAxes;
    }),
    (a.prototype.dataToPoint = function (e, t) {
      var r = this._indicatorAxes[t];
      return this.coordToPoint(r.dataToCoord(e), t);
    }),
    (a.prototype.coordToPoint = function (e, t) {
      var r = this._indicatorAxes[t],
        n = r.angle,
        i = this.cx + e * Math.cos(n),
        o = this.cy - e * Math.sin(n);
      return [i, o];
    }),
    (a.prototype.pointToData = function (e) {
      var t = e[0] - this.cx,
        r = e[1] - this.cy,
        n = Math.sqrt(t * t + r * r);
      (t /= n), (r /= n);
      for (
        var i = Math.atan2(-r, t), o = 1 / 0, s, l = -1, u = 0;
        u < this._indicatorAxes.length;
        u++
      ) {
        var h = this._indicatorAxes[u],
          v = Math.abs(i - h.angle);
        v < o && ((s = h), (l = u), (o = v));
      }
      return [l, +(s && s.coordToData(n))];
    }),
    (a.prototype.resize = function (e, t) {
      var r = e.get('center'),
        n = t.getWidth(),
        i = t.getHeight(),
        o = Math.min(n, i) / 2;
      (this.cx = z(r[0], n)),
        (this.cy = z(r[1], i)),
        (this.startAngle = (e.get('startAngle') * Math.PI) / 180);
      var s = e.get('radius');
      (tt(s) || Ot(s)) && (s = [0, s]),
        (this.r0 = z(s[0], o)),
        (this.r = z(s[1], o)),
        I(
          this._indicatorAxes,
          function (l, u) {
            l.setExtent(this.r0, this.r);
            var h = this.startAngle + (u * Math.PI * 2) / this._indicatorAxes.length;
            (h = Math.atan2(Math.sin(h), Math.cos(h))), (l.angle = h);
          },
          this,
        );
    }),
    (a.prototype.update = function (e, t) {
      var r = this._indicatorAxes,
        n = this._model;
      I(r, function (s) {
        s.scale.setExtent(1 / 0, -1 / 0);
      }),
        e.eachSeriesByType(
          'radar',
          function (s, l) {
            if (
              !(
                s.get('coordinateSystem') !== 'radar' ||
                e.getComponent('radar', s.get('radarIndex')) !== n
              )
            ) {
              var u = s.getData();
              I(r, function (h) {
                h.scale.unionExtentFromData(u, u.mapDimension(h.dim));
              });
            }
          },
          this,
        );
      var i = n.get('splitNumber'),
        o = new dn();
      o.setExtent(0, i),
        o.setInterval(1),
        I(r, function (s, l) {
          dh(s.scale, s.model, o);
        });
    }),
    (a.prototype.convertToPixel = function (e, t, r) {
      return console.warn('Not implemented.'), null;
    }),
    (a.prototype.convertFromPixel = function (e, t, r) {
      return console.warn('Not implemented.'), null;
    }),
    (a.prototype.containPoint = function (e) {
      return console.warn('Not implemented.'), !1;
    }),
    (a.create = function (e, t) {
      var r = [];
      return (
        e.eachComponent('radar', function (n) {
          var i = new a(n, e, t);
          r.push(i), (n.coordinateSystem = i);
        }),
        e.eachSeriesByType('radar', function (n) {
          n.get('coordinateSystem') === 'radar' &&
            (n.coordinateSystem = r[n.get('radarIndex') || 0]);
        }),
        r
      );
    }),
    (a.dimensions = []),
    a
  );
})();
const xf = mf;
function Sf(a) {
  a.registerCoordinateSystem('radar', xf),
    a.registerComponentModel(cf),
    a.registerComponentView(pf),
    a.registerVisual({
      seriesType: 'radar',
      reset: function (e) {
        var t = e.getData();
        t.each(function (r) {
          t.setItemVisual(r, 'legendIcon', 'roundRect');
        }),
          t.setVisual('legendIcon', 'roundRect');
      },
    });
}
function An(a, e) {
  e = e || {};
  var t = a.coordinateSystem,
    r = a.axis,
    n = {},
    i = r.position,
    o = r.orient,
    s = t.getRect(),
    l = [s.x, s.x + s.width, s.y, s.y + s.height],
    u = { horizontal: { top: l[2], bottom: l[3] }, vertical: { left: l[0], right: l[1] } };
  n.position = [
    o === 'vertical' ? u.vertical[i] : l[0],
    o === 'horizontal' ? u.horizontal[i] : l[3],
  ];
  var h = { horizontal: 0, vertical: 1 };
  n.rotation = (Math.PI / 2) * h[o];
  var v = { top: -1, bottom: 1, right: 1, left: -1 };
  (n.labelDirection = n.tickDirection = n.nameDirection = v[i]),
    a.get(['axisTick', 'inside']) && (n.tickDirection = -n.tickDirection),
    zt(e.labelInside, a.get(['axisLabel', 'inside'])) && (n.labelDirection = -n.labelDirection);
  var c = e.rotate;
  return (
    c == null && (c = a.get(['axisLabel', 'rotate'])),
    (n.labelRotation = i === 'top' ? -c : c),
    (n.z2 = 1),
    n
  );
}
var bf = ['axisLine', 'axisTickLabel', 'axisName'],
  wf = ['splitArea', 'splitLine'],
  _f = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t.axisPointerClass = 'SingleAxisPointer'), t;
    }
    return (
      (e.prototype.render = function (t, r, n, i) {
        var o = this.group;
        o.removeAll();
        var s = this._axisGroup;
        this._axisGroup = new K();
        var l = An(t),
          u = new Ce(t, l);
        I(bf, u.add, u),
          o.add(this._axisGroup),
          o.add(u.getGroup()),
          I(
            wf,
            function (h) {
              t.get([h, 'show']) && Af[h](this, this.group, this._axisGroup, t);
            },
            this,
          ),
          Wn(s, this._axisGroup, t),
          a.prototype.render.call(this, t, r, n, i);
      }),
      (e.prototype.remove = function () {
        ph(this);
      }),
      (e.type = 'singleAxis'),
      e
    );
  })(da),
  Af = {
    splitLine: function (a, e, t, r) {
      var n = r.axis;
      if (!n.scale.isBlank()) {
        var i = r.getModel('splitLine'),
          o = i.getModel('lineStyle'),
          s = o.get('color');
        s = s instanceof Array ? s : [s];
        for (
          var l = o.get('width'),
            u = r.coordinateSystem.getRect(),
            h = n.isHorizontal(),
            v = [],
            c = 0,
            f = n.getTicksCoords({ tickModel: i }),
            d = [],
            p = [],
            g = 0;
          g < f.length;
          ++g
        ) {
          var y = n.toGlobalCoord(f[g].coord);
          h
            ? ((d[0] = y), (d[1] = u.y), (p[0] = y), (p[1] = u.y + u.height))
            : ((d[0] = u.x), (d[1] = y), (p[0] = u.x + u.width), (p[1] = y));
          var m = new Xt({ shape: { x1: d[0], y1: d[1], x2: p[0], y2: p[1] }, silent: !0 });
          gh(m.shape, l);
          var x = c++ % s.length;
          (v[x] = v[x] || []), v[x].push(m);
        }
        for (var S = o.getLineStyle(['color']), g = 0; g < v.length; ++g)
          e.add(Bt(v[g], { style: nt({ stroke: s[g % s.length] }, S), silent: !0 }));
      }
    },
    splitArea: function (a, e, t, r) {
      yh(a, t, r, r);
    },
  };
const Df = _f;
var kl = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.getCoordSysModel = function () {
      return this;
    }),
    (e.type = 'singleAxis'),
    (e.layoutMode = 'box'),
    (e.defaultOption = {
      left: '5%',
      top: '5%',
      right: '5%',
      bottom: '5%',
      type: 'value',
      position: 'bottom',
      orient: 'horizontal',
      axisLine: { show: !0, lineStyle: { width: 1, type: 'solid' } },
      tooltip: { show: !0 },
      axisTick: { show: !0, length: 6, lineStyle: { width: 1 } },
      axisLabel: { show: !0, interval: 'auto' },
      splitLine: { show: !0, lineStyle: { type: 'dashed', opacity: 0.2 } },
    }),
    e
  );
})($t);
te(kl, Qa.prototype);
const Ar = kl;
var Tf = (function (a) {
  k(e, a);
  function e(t, r, n, i, o) {
    var s = a.call(this, t, r, n) || this;
    return (s.type = i || 'value'), (s.position = o || 'bottom'), s;
  }
  return (
    (e.prototype.isHorizontal = function () {
      var t = this.position;
      return t === 'top' || t === 'bottom';
    }),
    (e.prototype.pointToData = function (t, r) {
      return this.coordinateSystem.pointToData(t)[0];
    }),
    e
  );
})(ee);
const Cf = Tf;
var Nl = ['single'],
  Mf = (function () {
    function a(e, t, r) {
      (this.type = 'single'),
        (this.dimension = 'single'),
        (this.dimensions = Nl),
        (this.axisPointerEnabled = !0),
        (this.model = e),
        this._init(e, t, r);
    }
    return (
      (a.prototype._init = function (e, t, r) {
        var n = this.dimension,
          i = new Cf(n, On(e), [0, 0], e.get('type'), e.get('position')),
          o = i.type === 'category';
        (i.onBand = o && e.get('boundaryGap')),
          (i.inverse = e.get('inverse')),
          (i.orient = e.get('orient')),
          (e.axis = i),
          (i.model = e),
          (i.coordinateSystem = this),
          (this._axis = i);
      }),
      (a.prototype.update = function (e, t) {
        e.eachSeries(function (r) {
          if (r.coordinateSystem === this) {
            var n = r.getData();
            I(
              n.mapDimensionsAll(this.dimension),
              function (i) {
                this._axis.scale.unionExtentFromData(n, i);
              },
              this,
            ),
              Na(this._axis.scale, this._axis.model);
          }
        }, this);
      }),
      (a.prototype.resize = function (e, t) {
        (this._rect = re(
          {
            left: e.get('left'),
            top: e.get('top'),
            right: e.get('right'),
            bottom: e.get('bottom'),
            width: e.get('width'),
            height: e.get('height'),
          },
          { width: t.getWidth(), height: t.getHeight() },
        )),
          this._adjustAxis();
      }),
      (a.prototype.getRect = function () {
        return this._rect;
      }),
      (a.prototype._adjustAxis = function () {
        var e = this._rect,
          t = this._axis,
          r = t.isHorizontal(),
          n = r ? [0, e.width] : [0, e.height],
          i = t.inverse ? 1 : 0;
        t.setExtent(n[i], n[1 - i]), this._updateAxisTransform(t, r ? e.x : e.y);
      }),
      (a.prototype._updateAxisTransform = function (e, t) {
        var r = e.getExtent(),
          n = r[0] + r[1],
          i = e.isHorizontal();
        (e.toGlobalCoord = i
          ? function (o) {
              return o + t;
            }
          : function (o) {
              return n - o + t;
            }),
          (e.toLocalCoord = i
            ? function (o) {
                return o - t;
              }
            : function (o) {
                return n - o + t;
              });
      }),
      (a.prototype.getAxis = function () {
        return this._axis;
      }),
      (a.prototype.getBaseAxis = function () {
        return this._axis;
      }),
      (a.prototype.getAxes = function () {
        return [this._axis];
      }),
      (a.prototype.getTooltipAxes = function () {
        return { baseAxes: [this.getAxis()], otherAxes: [] };
      }),
      (a.prototype.containPoint = function (e) {
        var t = this.getRect(),
          r = this.getAxis(),
          n = r.orient;
        return n === 'horizontal'
          ? r.contain(r.toLocalCoord(e[0])) && e[1] >= t.y && e[1] <= t.y + t.height
          : r.contain(r.toLocalCoord(e[1])) && e[0] >= t.y && e[0] <= t.y + t.height;
      }),
      (a.prototype.pointToData = function (e) {
        var t = this.getAxis();
        return [t.coordToData(t.toLocalCoord(e[t.orient === 'horizontal' ? 0 : 1]))];
      }),
      (a.prototype.dataToPoint = function (e) {
        var t = this.getAxis(),
          r = this.getRect(),
          n = [],
          i = t.orient === 'horizontal' ? 0 : 1;
        return (
          e instanceof Array && (e = e[0]),
          (n[i] = t.toGlobalCoord(t.dataToCoord(+e))),
          (n[1 - i] = i === 0 ? r.y + r.height / 2 : r.x + r.width / 2),
          n
        );
      }),
      (a.prototype.convertToPixel = function (e, t, r) {
        var n = ji(t);
        return n === this ? this.dataToPoint(r) : null;
      }),
      (a.prototype.convertFromPixel = function (e, t, r) {
        var n = ji(t);
        return n === this ? this.pointToData(r) : null;
      }),
      a
    );
  })();
function ji(a) {
  var e = a.seriesModel,
    t = a.singleAxisModel;
  return (t && t.coordinateSystem) || (e && e.coordinateSystem);
}
function Lf(a, e) {
  var t = [];
  return (
    a.eachComponent('singleAxis', function (r, n) {
      var i = new Mf(r, a, e);
      (i.name = 'single_' + n), i.resize(r, e), (r.coordinateSystem = i), t.push(i);
    }),
    a.eachSeries(function (r) {
      if (r.get('coordinateSystem') === 'singleAxis') {
        var n = r.getReferringComponents('singleAxis', fa).models[0];
        r.coordinateSystem = n && n.coordinateSystem;
      }
    }),
    t
  );
}
var If = { create: Lf, dimensions: Nl };
const Pf = If;
var Qi = ['x', 'y'],
  Ef = ['width', 'height'],
  Rf = (function (a) {
    k(e, a);
    function e() {
      return (a !== null && a.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.makeElOption = function (t, r, n, i, o) {
        var s = n.axis,
          l = s.coordinateSystem,
          u = Dr(l, 1 - Wa(s)),
          h = l.dataToPoint(r)[0],
          v = i.get('type');
        if (v && v !== 'none') {
          var c = Ys(i),
            f = kf[v](s, h, u);
          (f.style = c), (t.graphicKey = f.type), (t.pointer = f);
        }
        var d = An(n);
        mh(r, t, d, n, i, o);
      }),
      (e.prototype.getHandleTransform = function (t, r, n) {
        var i = An(r, { labelInside: !1 });
        i.labelMargin = n.get(['handle', 'margin']);
        var o = xh(r.axis, t, i);
        return { x: o[0], y: o[1], rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0) };
      }),
      (e.prototype.updateHandleTransform = function (t, r, n, i) {
        var o = n.axis,
          s = o.coordinateSystem,
          l = Wa(o),
          u = Dr(s, l),
          h = [t.x, t.y];
        (h[l] += r[l]), (h[l] = Math.min(u[1], h[l])), (h[l] = Math.max(u[0], h[l]));
        var v = Dr(s, 1 - l),
          c = (v[1] + v[0]) / 2,
          f = [c, c];
        return (
          (f[l] = h[l]),
          {
            x: h[0],
            y: h[1],
            rotation: t.rotation,
            cursorPoint: f,
            tooltipOption: { verticalAlign: 'middle' },
          }
        );
      }),
      e
    );
  })(Xs),
  kf = {
    line: function (a, e, t) {
      var r = qs([e, t[0]], [e, t[1]], Wa(a));
      return { type: 'Line', subPixelOptimize: !0, shape: r };
    },
    shadow: function (a, e, t) {
      var r = a.getBandWidth(),
        n = t[1] - t[0];
      return { type: 'Rect', shape: Sh([e - r / 2, t[0]], [r, n], Wa(a)) };
    },
  };
function Wa(a) {
  return a.isHorizontal() ? 0 : 1;
}
function Dr(a, e) {
  var t = a.getRect();
  return [t[Qi[e]], t[Qi[e]] + t[Ef[e]]];
}
const Nf = Rf;
var Vf = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (e.type = 'single'), e;
})(ae);
function Bf(a) {
  Y($n),
    da.registerAxisPointerClass('SingleAxisPointer', Nf),
    a.registerComponentView(Vf),
    a.registerComponentView(Df),
    a.registerComponentModel(Ar),
    Va(a, 'single', Ar, Ar.defaultOption),
    a.registerCoordinateSystem('single', Pf);
}
function zf(a) {
  Gf(a), Of(a);
}
function Gf(a) {
  if (!a.parallel) {
    var e = !1;
    I(a.series, function (t) {
      t && t.type === 'parallel' && (e = !0);
    }),
      e && (a.parallel = [{}]);
  }
}
function Of(a) {
  var e = le(a.parallelAxis);
  I(e, function (t) {
    if (Le(t)) {
      var r = t.parallelIndex || 0,
        n = le(a.parallel)[r];
      n && n.parallelAxisDefault && Gt(t, n.parallelAxisDefault, !1);
    }
  });
}
var Wf = 5,
  $f = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.render = function (t, r, n) {
        (this._model = t),
          (this._api = n),
          this._handlers ||
            ((this._handlers = {}),
            I(
              Ff,
              function (i, o) {
                n.getZr().on(o, (this._handlers[o] = U(i, this)));
              },
              this,
            )),
          Ja(this, '_throttledDispatchExpand', t.get('axisExpandRate'), 'fixRate');
      }),
      (e.prototype.dispose = function (t, r) {
        Qs(this, '_throttledDispatchExpand'),
          I(this._handlers, function (n, i) {
            r.getZr().off(i, n);
          }),
          (this._handlers = null);
      }),
      (e.prototype._throttledDispatchExpand = function (t) {
        this._dispatchExpand(t);
      }),
      (e.prototype._dispatchExpand = function (t) {
        t && this._api.dispatchAction(W({ type: 'parallelAxisExpand' }, t));
      }),
      (e.type = 'parallel'),
      e
    );
  })(ae),
  Ff = {
    mousedown: function (a) {
      Tr(this, 'click') && (this._mouseDownPoint = [a.offsetX, a.offsetY]);
    },
    mouseup: function (a) {
      var e = this._mouseDownPoint;
      if (Tr(this, 'click') && e) {
        var t = [a.offsetX, a.offsetY],
          r = Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
        if (r > Wf) return;
        var n = this._model.coordinateSystem.getSlidedAxisExpandWindow([a.offsetX, a.offsetY]);
        n.behavior !== 'none' && this._dispatchExpand({ axisExpandWindow: n.axisExpandWindow });
      }
      this._mouseDownPoint = null;
    },
    mousemove: function (a) {
      if (!(this._mouseDownPoint || !Tr(this, 'mousemove'))) {
        var e = this._model,
          t = e.coordinateSystem.getSlidedAxisExpandWindow([a.offsetX, a.offsetY]),
          r = t.behavior;
        r === 'jump' && this._throttledDispatchExpand.debounceNextCall(e.get('axisExpandDebounce')),
          this._throttledDispatchExpand(
            r === 'none'
              ? null
              : {
                  axisExpandWindow: t.axisExpandWindow,
                  animation: r === 'jump' ? null : { duration: 0 },
                },
          );
      }
    },
  };
function Tr(a, e) {
  var t = a._model;
  return t.get('axisExpandable') && t.get('axisExpandTriggerOn') === e;
}
const Hf = $f;
var Zf = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function () {
      a.prototype.init.apply(this, arguments), this.mergeOption({});
    }),
    (e.prototype.mergeOption = function (t) {
      var r = this.option;
      t && Gt(r, t, !0), this._initDimensions();
    }),
    (e.prototype.contains = function (t, r) {
      var n = t.get('parallelIndex');
      return n != null && r.getComponent('parallel', n) === this;
    }),
    (e.prototype.setAxisExpand = function (t) {
      I(
        [
          'axisExpandable',
          'axisExpandCenter',
          'axisExpandCount',
          'axisExpandWidth',
          'axisExpandWindow',
        ],
        function (r) {
          t.hasOwnProperty(r) && (this.option[r] = t[r]);
        },
        this,
      );
    }),
    (e.prototype._initDimensions = function () {
      var t = (this.dimensions = []),
        r = (this.parallelAxisIndex = []),
        n = Ft(
          this.ecModel.queryComponents({ mainType: 'parallelAxis' }),
          function (i) {
            return (i.get('parallelIndex') || 0) === this.componentIndex;
          },
          this,
        );
      I(n, function (i) {
        t.push('dim' + i.get('dim')), r.push(i.componentIndex);
      });
    }),
    (e.type = 'parallel'),
    (e.dependencies = ['parallelAxis']),
    (e.layoutMode = 'box'),
    (e.defaultOption = {
      z: 0,
      left: 80,
      top: 60,
      right: 80,
      bottom: 60,
      layout: 'horizontal',
      axisExpandable: !1,
      axisExpandCenter: null,
      axisExpandCount: 0,
      axisExpandWidth: 50,
      axisExpandRate: 17,
      axisExpandDebounce: 50,
      axisExpandSlideTriggerArea: [-0.15, 0.05, 0.4],
      axisExpandTriggerOn: 'click',
      parallelAxisDefault: null,
    }),
    e
  );
})($t);
const Uf = Zf;
var Yf = (function (a) {
  k(e, a);
  function e(t, r, n, i, o) {
    var s = a.call(this, t, r, n) || this;
    return (s.type = i || 'value'), (s.axisIndex = o), s;
  }
  return (
    (e.prototype.isHorizontal = function () {
      return this.coordinateSystem.getModel().get('layout') !== 'horizontal';
    }),
    e
  );
})(ee);
const Xf = Yf;
var Cr = I,
  Vl = Math.min,
  Bl = Math.max,
  Ji = Math.floor,
  qf = Math.ceil,
  to = Fn,
  Kf = Math.PI,
  jf = (function () {
    function a(e, t, r) {
      (this.type = 'parallel'),
        (this._axesMap = Kt()),
        (this._axesLayout = {}),
        (this.dimensions = e.dimensions),
        (this._model = e),
        this._init(e, t, r);
    }
    return (
      (a.prototype._init = function (e, t, r) {
        var n = e.dimensions,
          i = e.parallelAxisIndex;
        Cr(
          n,
          function (o, s) {
            var l = i[s],
              u = t.getComponent('parallelAxis', l),
              h = this._axesMap.set(o, new Xf(o, On(u), [0, 0], u.get('type'), l)),
              v = h.type === 'category';
            (h.onBand = v && u.get('boundaryGap')),
              (h.inverse = u.get('inverse')),
              (u.axis = h),
              (h.model = u),
              (h.coordinateSystem = u.coordinateSystem = this);
          },
          this,
        );
      }),
      (a.prototype.update = function (e, t) {
        this._updateAxesFromSeries(this._model, e);
      }),
      (a.prototype.containPoint = function (e) {
        var t = this._makeLayoutInfo(),
          r = t.axisBase,
          n = t.layoutBase,
          i = t.pixelDimIndex,
          o = e[1 - i],
          s = e[i];
        return o >= r && o <= r + t.axisLength && s >= n && s <= n + t.layoutLength;
      }),
      (a.prototype.getModel = function () {
        return this._model;
      }),
      (a.prototype._updateAxesFromSeries = function (e, t) {
        t.eachSeries(function (r) {
          if (e.contains(r, t)) {
            var n = r.getData();
            Cr(
              this.dimensions,
              function (i) {
                var o = this._axesMap.get(i);
                o.scale.unionExtentFromData(n, n.mapDimension(i)), Na(o.scale, o.model);
              },
              this,
            );
          }
        }, this);
      }),
      (a.prototype.resize = function (e, t) {
        (this._rect = re(e.getBoxLayoutParams(), { width: t.getWidth(), height: t.getHeight() })),
          this._layoutAxes();
      }),
      (a.prototype.getRect = function () {
        return this._rect;
      }),
      (a.prototype._makeLayoutInfo = function () {
        var e = this._model,
          t = this._rect,
          r = ['x', 'y'],
          n = ['width', 'height'],
          i = e.get('layout'),
          o = i === 'horizontal' ? 0 : 1,
          s = t[n[o]],
          l = [0, s],
          u = this.dimensions.length,
          h = ba(e.get('axisExpandWidth'), l),
          v = ba(e.get('axisExpandCount') || 0, [0, u]),
          c = e.get('axisExpandable') && u > 3 && u > v && v > 1 && h > 0 && s > 0,
          f = e.get('axisExpandWindow'),
          d;
        if (f) (d = ba(f[1] - f[0], l)), (f[1] = f[0] + d);
        else {
          d = ba(h * (v - 1), l);
          var p = e.get('axisExpandCenter') || Ji(u / 2);
          (f = [h * p - d / 2]), (f[1] = f[0] + d);
        }
        var g = (s - d) / (u - v);
        g < 3 && (g = 0);
        var y = [Ji(to(f[0] / h, 1)) + 1, qf(to(f[1] / h, 1)) - 1],
          m = (g / h) * f[0];
        return {
          layout: i,
          pixelDimIndex: o,
          layoutBase: t[r[o]],
          layoutLength: s,
          axisBase: t[r[1 - o]],
          axisLength: t[n[1 - o]],
          axisExpandable: c,
          axisExpandWidth: h,
          axisCollapseWidth: g,
          axisExpandWindow: f,
          axisCount: u,
          winInnerIndices: y,
          axisExpandWindow0Pos: m,
        };
      }),
      (a.prototype._layoutAxes = function () {
        var e = this._rect,
          t = this._axesMap,
          r = this.dimensions,
          n = this._makeLayoutInfo(),
          i = n.layout;
        t.each(function (o) {
          var s = [0, n.axisLength],
            l = o.inverse ? 1 : 0;
          o.setExtent(s[l], s[1 - l]);
        }),
          Cr(
            r,
            function (o, s) {
              var l = (n.axisExpandable ? Jf : Qf)(s, n),
                u = {
                  horizontal: { x: l.position, y: n.axisLength },
                  vertical: { x: 0, y: l.position },
                },
                h = { horizontal: Kf / 2, vertical: 0 },
                v = [u[i].x + e.x, u[i].y + e.y],
                c = h[i],
                f = ja();
              Gn(f, f, c),
                Be(f, f, v),
                (this._axesLayout[o] = {
                  position: v,
                  rotation: c,
                  transform: f,
                  axisNameAvailableWidth: l.axisNameAvailableWidth,
                  axisLabelShow: l.axisLabelShow,
                  nameTruncateMaxWidth: l.nameTruncateMaxWidth,
                  tickDirection: 1,
                  labelDirection: 1,
                });
            },
            this,
          );
      }),
      (a.prototype.getAxis = function (e) {
        return this._axesMap.get(e);
      }),
      (a.prototype.dataToPoint = function (e, t) {
        return this.axisCoordToPoint(this._axesMap.get(t).dataToCoord(e), t);
      }),
      (a.prototype.eachActiveState = function (e, t, r, n) {
        r == null && (r = 0), n == null && (n = e.count());
        var i = this._axesMap,
          o = this.dimensions,
          s = [],
          l = [];
        I(o, function (g) {
          s.push(e.mapDimension(g)), l.push(i.get(g).model);
        });
        for (var u = this.hasAxisBrushed(), h = r; h < n; h++) {
          var v = void 0;
          if (!u) v = 'normal';
          else {
            v = 'active';
            for (var c = e.getValues(s, h), f = 0, d = o.length; f < d; f++) {
              var p = l[f].getActiveState(c[f]);
              if (p === 'inactive') {
                v = 'inactive';
                break;
              }
            }
          }
          t(v, h);
        }
      }),
      (a.prototype.hasAxisBrushed = function () {
        for (var e = this.dimensions, t = this._axesMap, r = !1, n = 0, i = e.length; n < i; n++)
          t.get(e[n]).model.getActiveState() !== 'normal' && (r = !0);
        return r;
      }),
      (a.prototype.axisCoordToPoint = function (e, t) {
        var r = this._axesLayout[t];
        return ea([e, 0], r.transform);
      }),
      (a.prototype.getAxisLayout = function (e) {
        return Lt(this._axesLayout[e]);
      }),
      (a.prototype.getSlidedAxisExpandWindow = function (e) {
        var t = this._makeLayoutInfo(),
          r = t.pixelDimIndex,
          n = t.axisExpandWindow.slice(),
          i = n[1] - n[0],
          o = [0, t.axisExpandWidth * (t.axisCount - 1)];
        if (!this.containPoint(e)) return { behavior: 'none', axisExpandWindow: n };
        var s = e[r] - t.layoutBase - t.axisExpandWindow0Pos,
          l,
          u = 'slide',
          h = t.axisCollapseWidth,
          v = this._model.get('axisExpandSlideTriggerArea'),
          c = v[0] != null;
        if (h)
          c && h && s < i * v[0]
            ? ((u = 'jump'), (l = s - i * v[2]))
            : c && h && s > i * (1 - v[0])
            ? ((u = 'jump'), (l = s - i * (1 - v[2])))
            : (l = s - i * v[1]) >= 0 && (l = s - i * (1 - v[1])) <= 0 && (l = 0),
            (l *= t.axisExpandWidth / h),
            l ? tr(l, n, o, 'all') : (u = 'none');
        else {
          var f = n[1] - n[0],
            d = (o[1] * s) / f;
          (n = [Bl(0, d - f / 2)]), (n[1] = Vl(o[1], n[0] + f)), (n[0] = n[1] - f);
        }
        return { axisExpandWindow: n, behavior: u };
      }),
      a
    );
  })();
function ba(a, e) {
  return Vl(Bl(a, e[0]), e[1]);
}
function Qf(a, e) {
  var t = e.layoutLength / (e.axisCount - 1);
  return { position: t * a, axisNameAvailableWidth: t, axisLabelShow: !0 };
}
function Jf(a, e) {
  var t = e.layoutLength,
    r = e.axisExpandWidth,
    n = e.axisCount,
    i = e.axisCollapseWidth,
    o = e.winInnerIndices,
    s,
    l = i,
    u = !1,
    h;
  return (
    a < o[0]
      ? ((s = a * i), (h = i))
      : a <= o[1]
      ? ((s = e.axisExpandWindow0Pos + a * r - e.axisExpandWindow[0]), (l = r), (u = !0))
      : ((s = t - (n - 1 - a) * i), (h = i)),
    { position: s, axisNameAvailableWidth: l, axisLabelShow: u, nameTruncateMaxWidth: h }
  );
}
const td = jf;
function ed(a, e) {
  var t = [];
  return (
    a.eachComponent('parallel', function (r, n) {
      var i = new td(r, a, e);
      (i.name = 'parallel_' + n),
        i.resize(r, e),
        (r.coordinateSystem = i),
        (i.model = r),
        t.push(i);
    }),
    a.eachSeries(function (r) {
      if (r.get('coordinateSystem') === 'parallel') {
        var n = r.getReferringComponents('parallel', fa).models[0];
        r.coordinateSystem = n.coordinateSystem;
      }
    }),
    t
  );
}
var ad = { create: ed };
const rd = ad;
var zl = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.activeIntervals = []), t;
  }
  return (
    (e.prototype.getAreaSelectStyle = function () {
      return Js([
        ['fill', 'color'],
        ['lineWidth', 'borderWidth'],
        ['stroke', 'borderColor'],
        ['width', 'width'],
        ['opacity', 'opacity'],
      ])(this.getModel('areaSelectStyle'));
    }),
    (e.prototype.setActiveIntervals = function (t) {
      var r = (this.activeIntervals = Lt(t));
      if (r) for (var n = r.length - 1; n >= 0; n--) ne(r[n]);
    }),
    (e.prototype.getActiveState = function (t) {
      var r = this.activeIntervals;
      if (!r.length) return 'normal';
      if (t == null || isNaN(+t)) return 'inactive';
      if (r.length === 1) {
        var n = r[0];
        if (n[0] <= t && t <= n[1]) return 'active';
      } else
        for (var i = 0, o = r.length; i < o; i++) if (r[i][0] <= t && t <= r[i][1]) return 'active';
      return 'inactive';
    }),
    e
  );
})($t);
te(zl, Qa);
const eo = zl;
var nd = ['axisLine', 'axisTickLabel', 'axisName'],
  id = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.init = function (t, r) {
        a.prototype.init.apply(this, arguments),
          (this._brushController = new tl(r.getZr())).on('brush', U(this._onBrush, this));
      }),
      (e.prototype.render = function (t, r, n, i) {
        if (!od(t, r, i)) {
          (this.axisModel = t), (this.api = n), this.group.removeAll();
          var o = this._axisGroup;
          if (((this._axisGroup = new K()), this.group.add(this._axisGroup), !!t.get('show'))) {
            var s = ld(t, r),
              l = s.coordinateSystem,
              u = t.getAreaSelectStyle(),
              h = u.width,
              v = t.axis.dim,
              c = l.getAxisLayout(v),
              f = W({ strokeContainThreshold: h }, c),
              d = new Ce(t, f);
            I(nd, d.add, d),
              this._axisGroup.add(d.getGroup()),
              this._refreshBrushController(f, u, t, s, h, n),
              Wn(o, this._axisGroup, t);
          }
        }
      }),
      (e.prototype._refreshBrushController = function (t, r, n, i, o, s) {
        var l = n.axis.getExtent(),
          u = l[1] - l[0],
          h = Math.min(30, Math.abs(u) * 0.1),
          v = jt.create({ x: l[0], y: -o / 2, width: u, height: o });
        (v.x -= h),
          (v.width += 2 * h),
          this._brushController
            .mount({
              enableGlobalPan: !0,
              rotation: t.rotation,
              x: t.position[0],
              y: t.position[1],
            })
            .setPanels([
              {
                panelId: 'pl',
                clipPath: bh(v),
                isTargetByCursor: wh(v, s, i),
                getLinearBrushOtherExtent: _h(v, 0),
              },
            ])
            .enableBrush({ brushType: 'lineX', brushStyle: r, removeOnClick: !0 })
            .updateCovers(sd(n));
      }),
      (e.prototype._onBrush = function (t) {
        var r = t.areas,
          n = this.axisModel,
          i = n.axis,
          o = O(r, function (s) {
            return [i.coordToData(s.range[0], !0), i.coordToData(s.range[1], !0)];
          });
        (!n.option.realtime === t.isEnd || t.removeOnClick) &&
          this.api.dispatchAction({ type: 'axisAreaSelect', parallelAxisId: n.id, intervals: o });
      }),
      (e.prototype.dispose = function () {
        this._brushController.dispose();
      }),
      (e.type = 'parallelAxis'),
      e
    );
  })(ae);
function od(a, e, t) {
  return (
    t &&
    t.type === 'axisAreaSelect' &&
    e.findComponents({ mainType: 'parallelAxis', query: t })[0] === a
  );
}
function sd(a) {
  var e = a.axis;
  return O(a.activeIntervals, function (t) {
    return {
      brushType: 'lineX',
      panelId: 'pl',
      range: [e.dataToCoord(t[0], !0), e.dataToCoord(t[1], !0)],
    };
  });
}
function ld(a, e) {
  return e.getComponent('parallel', a.get('parallelIndex'));
}
const ud = id;
var hd = { type: 'axisAreaSelect', event: 'axisAreaSelected' };
function vd(a) {
  a.registerAction(hd, function (e, t) {
    t.eachComponent({ mainType: 'parallelAxis', query: e }, function (r) {
      r.axis.model.setActiveIntervals(e.intervals);
    });
  }),
    a.registerAction('parallelAxisExpand', function (e, t) {
      t.eachComponent({ mainType: 'parallel', query: e }, function (r) {
        r.setAxisExpand(e);
      });
    });
}
var cd = {
  type: 'value',
  areaSelectStyle: {
    width: 20,
    borderWidth: 1,
    borderColor: 'rgba(160,197,232)',
    color: 'rgba(160,197,232)',
    opacity: 0.3,
  },
  realtime: !0,
  z: 10,
};
function Gl(a) {
  a.registerComponentView(Hf),
    a.registerComponentModel(Uf),
    a.registerCoordinateSystem('parallel', rd),
    a.registerPreprocessor(zf),
    a.registerComponentModel(eo),
    a.registerComponentView(ud),
    Va(a, 'parallel', eo, cd),
    vd(a);
}
var fd = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function (t, r, n) {
      var i = el(t);
      a.prototype.init.apply(this, arguments), ao(t, i);
    }),
    (e.prototype.mergeOption = function (t) {
      a.prototype.mergeOption.apply(this, arguments), ao(this.option, t);
    }),
    (e.prototype.getCellSize = function () {
      return this.option.cellSize;
    }),
    (e.type = 'calendar'),
    (e.defaultOption = {
      z: 2,
      left: 80,
      top: 60,
      cellSize: 20,
      orient: 'horizontal',
      splitLine: { show: !0, lineStyle: { color: '#000', width: 1, type: 'solid' } },
      itemStyle: { color: '#fff', borderWidth: 1, borderColor: '#ccc' },
      dayLabel: { show: !0, firstDay: 0, position: 'start', margin: '50%', color: '#000' },
      monthLabel: {
        show: !0,
        position: 'start',
        margin: 5,
        align: 'center',
        formatter: null,
        color: '#000',
      },
      yearLabel: {
        show: !0,
        position: null,
        margin: 30,
        formatter: null,
        color: '#ccc',
        fontFamily: 'sans-serif',
        fontWeight: 'bolder',
        fontSize: 20,
      },
    }),
    e
  );
})($t);
function ao(a, e) {
  var t = a.cellSize,
    r;
  H(t) ? (r = t) : (r = a.cellSize = [t, t]), r.length === 1 && (r[1] = r[0]);
  var n = O([0, 1], function (i) {
    return Ah(e, i) && (r[i] = 'auto'), r[i] != null && r[i] !== 'auto';
  });
  al(a, e, { type: 'box', ignoreSize: n });
}
const dd = fd;
var pd = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, r, n) {
      var i = this.group;
      i.removeAll();
      var o = t.coordinateSystem,
        s = o.getRangeInfo(),
        l = o.getOrient(),
        u = r.getLocaleModel();
      this._renderDayRect(t, s, i),
        this._renderLines(t, s, l, i),
        this._renderYearText(t, s, l, i),
        this._renderMonthText(t, u, l, i),
        this._renderWeekText(t, u, s, l, i);
    }),
    (e.prototype._renderDayRect = function (t, r, n) {
      for (
        var i = t.coordinateSystem,
          o = t.getModel('itemStyle').getItemStyle(),
          s = i.getCellWidth(),
          l = i.getCellHeight(),
          u = r.start.time;
        u <= r.end.time;
        u = i.getNextNDay(u, 1).time
      ) {
        var h = i.dataToRect([u], !1).tl,
          v = new Tt({
            shape: { x: h[0], y: h[1], width: s, height: l },
            cursor: 'default',
            style: o,
          });
        n.add(v);
      }
    }),
    (e.prototype._renderLines = function (t, r, n, i) {
      var o = this,
        s = t.coordinateSystem,
        l = t.getModel(['splitLine', 'lineStyle']).getLineStyle(),
        u = t.get(['splitLine', 'show']),
        h = l.lineWidth;
      (this._tlpoints = []),
        (this._blpoints = []),
        (this._firstDayOfMonth = []),
        (this._firstDayPoints = []);
      for (var v = r.start, c = 0; v.time <= r.end.time; c++) {
        d(v.formatedDate), c === 0 && (v = s.getDateInfo(r.start.y + '-' + r.start.m));
        var f = v.date;
        f.setMonth(f.getMonth() + 1), (v = s.getDateInfo(f));
      }
      d(s.getNextNDay(r.end.time, 1).formatedDate);
      function d(p) {
        o._firstDayOfMonth.push(s.getDateInfo(p)), o._firstDayPoints.push(s.dataToRect([p], !1).tl);
        var g = o._getLinePointsOfOneWeek(t, p, n);
        o._tlpoints.push(g[0]), o._blpoints.push(g[g.length - 1]), u && o._drawSplitline(g, l, i);
      }
      u && this._drawSplitline(o._getEdgesPoints(o._tlpoints, h, n), l, i),
        u && this._drawSplitline(o._getEdgesPoints(o._blpoints, h, n), l, i);
    }),
    (e.prototype._getEdgesPoints = function (t, r, n) {
      var i = [t[0].slice(), t[t.length - 1].slice()],
        o = n === 'horizontal' ? 0 : 1;
      return (i[0][o] = i[0][o] - r / 2), (i[1][o] = i[1][o] + r / 2), i;
    }),
    (e.prototype._drawSplitline = function (t, r, n) {
      var i = new Ie({ z2: 20, shape: { points: t }, style: r });
      n.add(i);
    }),
    (e.prototype._getLinePointsOfOneWeek = function (t, r, n) {
      for (var i = t.coordinateSystem, o = i.getDateInfo(r), s = [], l = 0; l < 7; l++) {
        var u = i.getNextNDay(o.time, l),
          h = i.dataToRect([u.time], !1);
        (s[2 * u.day] = h.tl), (s[2 * u.day + 1] = h[n === 'horizontal' ? 'bl' : 'tr']);
      }
      return s;
    }),
    (e.prototype._formatterLabel = function (t, r) {
      return tt(t) && t ? Dh(t, r) : st(t) ? t(r) : r.nameMap;
    }),
    (e.prototype._yearTextPositionControl = function (t, r, n, i, o) {
      var s = r[0],
        l = r[1],
        u = ['center', 'bottom'];
      i === 'bottom'
        ? ((l += o), (u = ['center', 'top']))
        : i === 'left'
        ? (s -= o)
        : i === 'right'
        ? ((s += o), (u = ['center', 'top']))
        : (l -= o);
      var h = 0;
      return (
        (i === 'left' || i === 'right') && (h = Math.PI / 2),
        { rotation: h, x: s, y: l, style: { align: u[0], verticalAlign: u[1] } }
      );
    }),
    (e.prototype._renderYearText = function (t, r, n, i) {
      var o = t.getModel('yearLabel');
      if (o.get('show')) {
        var s = o.get('margin'),
          l = o.get('position');
        l || (l = n !== 'horizontal' ? 'top' : 'left');
        var u = [this._tlpoints[this._tlpoints.length - 1], this._blpoints[0]],
          h = (u[0][0] + u[1][0]) / 2,
          v = (u[0][1] + u[1][1]) / 2,
          c = n === 'horizontal' ? 0 : 1,
          f = {
            top: [h, u[c][1]],
            bottom: [h, u[1 - c][1]],
            left: [u[1 - c][0], v],
            right: [u[c][0], v],
          },
          d = r.start.y;
        +r.end.y > +r.start.y && (d = d + '-' + r.end.y);
        var p = o.get('formatter'),
          g = { start: r.start.y, end: r.end.y, nameMap: d },
          y = this._formatterLabel(p, g),
          m = new gt({ z2: 30, style: yt(o, { text: y }) });
        m.attr(this._yearTextPositionControl(m, f[l], n, l, s)), i.add(m);
      }
    }),
    (e.prototype._monthTextPositionControl = function (t, r, n, i, o) {
      var s = 'left',
        l = 'top',
        u = t[0],
        h = t[1];
      return (
        n === 'horizontal'
          ? ((h = h + o), r && (s = 'center'), i === 'start' && (l = 'bottom'))
          : ((u = u + o), r && (l = 'middle'), i === 'start' && (s = 'right')),
        { x: u, y: h, align: s, verticalAlign: l }
      );
    }),
    (e.prototype._renderMonthText = function (t, r, n, i) {
      var o = t.getModel('monthLabel');
      if (o.get('show')) {
        var s = o.get('nameMap'),
          l = o.get('margin'),
          u = o.get('position'),
          h = o.get('align'),
          v = [this._tlpoints, this._blpoints];
        (!s || tt(s)) && (s && (r = Ri(s) || r), (s = r.get(['time', 'monthAbbr']) || []));
        var c = u === 'start' ? 0 : 1,
          f = n === 'horizontal' ? 0 : 1;
        l = u === 'start' ? -l : l;
        for (var d = h === 'center', p = 0; p < v[c].length - 1; p++) {
          var g = v[c][p].slice(),
            y = this._firstDayOfMonth[p];
          if (d) {
            var m = this._firstDayPoints[p];
            g[f] = (m[f] + v[0][p + 1][f]) / 2;
          }
          var x = o.get('formatter'),
            S = s[+y.m - 1],
            b = { yyyy: y.y, yy: (y.y + '').slice(2), MM: y.m, M: +y.m, nameMap: S },
            w = this._formatterLabel(x, b),
            _ = new gt({
              z2: 30,
              style: W(yt(o, { text: w }), this._monthTextPositionControl(g, d, n, u, l)),
            });
          i.add(_);
        }
      }
    }),
    (e.prototype._weekTextPositionControl = function (t, r, n, i, o) {
      var s = 'center',
        l = 'middle',
        u = t[0],
        h = t[1],
        v = n === 'start';
      return (
        r === 'horizontal'
          ? ((u = u + i + ((v ? 1 : -1) * o[0]) / 2), (s = v ? 'right' : 'left'))
          : ((h = h + i + ((v ? 1 : -1) * o[1]) / 2), (l = v ? 'bottom' : 'top')),
        { x: u, y: h, align: s, verticalAlign: l }
      );
    }),
    (e.prototype._renderWeekText = function (t, r, n, i, o) {
      var s = t.getModel('dayLabel');
      if (s.get('show')) {
        var l = t.coordinateSystem,
          u = s.get('position'),
          h = s.get('nameMap'),
          v = s.get('margin'),
          c = l.getFirstDayOfWeek();
        if (!h || tt(h)) {
          h && (r = Ri(h) || r);
          var f = r.get(['time', 'dayOfWeekShort']);
          h =
            f ||
            O(r.get(['time', 'dayOfWeekAbbr']), function (b) {
              return b[0];
            });
        }
        var d = l.getNextNDay(n.end.time, 7 - n.lweek).time,
          p = [l.getCellWidth(), l.getCellHeight()];
        (v = z(v, Math.min(p[1], p[0]))),
          u === 'start' && ((d = l.getNextNDay(n.start.time, -(7 + n.fweek)).time), (v = -v));
        for (var g = 0; g < 7; g++) {
          var y = l.getNextNDay(d, g),
            m = l.dataToRect([y.time], !1).center,
            x = g;
          x = Math.abs((g + c) % 7);
          var S = new gt({
            z2: 30,
            style: W(yt(s, { text: h[x] }), this._weekTextPositionControl(m, i, u, v, p)),
          });
          o.add(S);
        }
      }
    }),
    (e.type = 'calendar'),
    e
  );
})(ae);
const gd = pd;
var Mr = 864e5,
  yd = (function () {
    function a(e, t, r) {
      (this.type = 'calendar'),
        (this.dimensions = a.dimensions),
        (this.getDimensionsInfo = a.getDimensionsInfo),
        (this._model = e);
    }
    return (
      (a.getDimensionsInfo = function () {
        return [{ name: 'time', type: 'time' }, 'value'];
      }),
      (a.prototype.getRangeInfo = function () {
        return this._rangeInfo;
      }),
      (a.prototype.getModel = function () {
        return this._model;
      }),
      (a.prototype.getRect = function () {
        return this._rect;
      }),
      (a.prototype.getCellWidth = function () {
        return this._sw;
      }),
      (a.prototype.getCellHeight = function () {
        return this._sh;
      }),
      (a.prototype.getOrient = function () {
        return this._orient;
      }),
      (a.prototype.getFirstDayOfWeek = function () {
        return this._firstDayOfWeek;
      }),
      (a.prototype.getDateInfo = function (e) {
        e = Th(e);
        var t = e.getFullYear(),
          r = e.getMonth() + 1,
          n = r < 10 ? '0' + r : '' + r,
          i = e.getDate(),
          o = i < 10 ? '0' + i : '' + i,
          s = e.getDay();
        return (
          (s = Math.abs((s + 7 - this.getFirstDayOfWeek()) % 7)),
          {
            y: t + '',
            m: n,
            d: o,
            day: s,
            time: e.getTime(),
            formatedDate: t + '-' + n + '-' + o,
            date: e,
          }
        );
      }),
      (a.prototype.getNextNDay = function (e, t) {
        return (
          (t = t || 0),
          t === 0
            ? this.getDateInfo(e)
            : ((e = new Date(this.getDateInfo(e).time)),
              e.setDate(e.getDate() + t),
              this.getDateInfo(e))
        );
      }),
      (a.prototype.update = function (e, t) {
        (this._firstDayOfWeek = +this._model.getModel('dayLabel').get('firstDay')),
          (this._orient = this._model.get('orient')),
          (this._lineWidth = this._model.getModel('itemStyle').getItemStyle().lineWidth || 0),
          (this._rangeInfo = this._getRangeInfo(this._initRangeOption()));
        var r = this._rangeInfo.weeks || 1,
          n = ['width', 'height'],
          i = this._model.getCellSize().slice(),
          o = this._model.getBoxLayoutParams(),
          s = this._orient === 'horizontal' ? [r, 7] : [7, r];
        I([0, 1], function (v) {
          h(i, v) && (o[n[v]] = i[v] * s[v]);
        });
        var l = { width: t.getWidth(), height: t.getHeight() },
          u = (this._rect = re(o, l));
        I([0, 1], function (v) {
          h(i, v) || (i[v] = u[n[v]] / s[v]);
        });
        function h(v, c) {
          return v[c] != null && v[c] !== 'auto';
        }
        (this._sw = i[0]), (this._sh = i[1]);
      }),
      (a.prototype.dataToPoint = function (e, t) {
        H(e) && (e = e[0]), t == null && (t = !0);
        var r = this.getDateInfo(e),
          n = this._rangeInfo,
          i = r.formatedDate;
        if (t && !(r.time >= n.start.time && r.time < n.end.time + Mr)) return [NaN, NaN];
        var o = r.day,
          s = this._getRangeInfo([n.start.time, i]).nthWeek;
        return this._orient === 'vertical'
          ? [this._rect.x + o * this._sw + this._sw / 2, this._rect.y + s * this._sh + this._sh / 2]
          : [
              this._rect.x + s * this._sw + this._sw / 2,
              this._rect.y + o * this._sh + this._sh / 2,
            ];
      }),
      (a.prototype.pointToData = function (e) {
        var t = this.pointToDate(e);
        return t && t.time;
      }),
      (a.prototype.dataToRect = function (e, t) {
        var r = this.dataToPoint(e, t);
        return {
          contentShape: {
            x: r[0] - (this._sw - this._lineWidth) / 2,
            y: r[1] - (this._sh - this._lineWidth) / 2,
            width: this._sw - this._lineWidth,
            height: this._sh - this._lineWidth,
          },
          center: r,
          tl: [r[0] - this._sw / 2, r[1] - this._sh / 2],
          tr: [r[0] + this._sw / 2, r[1] - this._sh / 2],
          br: [r[0] + this._sw / 2, r[1] + this._sh / 2],
          bl: [r[0] - this._sw / 2, r[1] + this._sh / 2],
        };
      }),
      (a.prototype.pointToDate = function (e) {
        var t = Math.floor((e[0] - this._rect.x) / this._sw) + 1,
          r = Math.floor((e[1] - this._rect.y) / this._sh) + 1,
          n = this._rangeInfo.range;
        return this._orient === 'vertical'
          ? this._getDateByWeeksAndDay(r, t - 1, n)
          : this._getDateByWeeksAndDay(t, r - 1, n);
      }),
      (a.prototype.convertToPixel = function (e, t, r) {
        var n = ro(t);
        return n === this ? n.dataToPoint(r) : null;
      }),
      (a.prototype.convertFromPixel = function (e, t, r) {
        var n = ro(t);
        return n === this ? n.pointToData(r) : null;
      }),
      (a.prototype.containPoint = function (e) {
        return console.warn('Not implemented.'), !1;
      }),
      (a.prototype._initRangeOption = function () {
        var e = this._model.get('range'),
          t;
        if ((H(e) && e.length === 1 && (e = e[0]), H(e))) t = e;
        else {
          var r = e.toString();
          if (
            (/^\d{4}$/.test(r) && (t = [r + '-01-01', r + '-12-31']),
            /^\d{4}[\/|-]\d{1,2}$/.test(r))
          ) {
            var n = this.getDateInfo(r),
              i = n.date;
            i.setMonth(i.getMonth() + 1);
            var o = this.getNextNDay(i, -1);
            t = [n.formatedDate, o.formatedDate];
          }
          /^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(r) && (t = [r, r]);
        }
        if (!t) return e;
        var s = this._getRangeInfo(t);
        return s.start.time > s.end.time && t.reverse(), t;
      }),
      (a.prototype._getRangeInfo = function (e) {
        var t = [this.getDateInfo(e[0]), this.getDateInfo(e[1])],
          r;
        t[0].time > t[1].time && ((r = !0), t.reverse());
        var n = Math.floor(t[1].time / Mr) - Math.floor(t[0].time / Mr) + 1,
          i = new Date(t[0].time),
          o = i.getDate(),
          s = t[1].date.getDate();
        i.setDate(o + n - 1);
        var l = i.getDate();
        if (l !== s)
          for (
            var u = i.getTime() - t[1].time > 0 ? 1 : -1;
            (l = i.getDate()) !== s && (i.getTime() - t[1].time) * u > 0;

          )
            (n -= u), i.setDate(l - u);
        var h = Math.floor((n + t[0].day + 6) / 7),
          v = r ? -h + 1 : h - 1;
        return (
          r && t.reverse(),
          {
            range: [t[0].formatedDate, t[1].formatedDate],
            start: t[0],
            end: t[1],
            allDay: n,
            weeks: h,
            nthWeek: v,
            fweek: t[0].day,
            lweek: t[1].day,
          }
        );
      }),
      (a.prototype._getDateByWeeksAndDay = function (e, t, r) {
        var n = this._getRangeInfo(r);
        if (e > n.weeks || (e === 0 && t < n.fweek) || (e === n.weeks && t > n.lweek)) return null;
        var i = (e - 1) * 7 - n.fweek + t,
          o = new Date(n.start.time);
        return o.setDate(+n.start.d + i), this.getDateInfo(o);
      }),
      (a.create = function (e, t) {
        var r = [];
        return (
          e.eachComponent('calendar', function (n) {
            var i = new a(n);
            r.push(i), (n.coordinateSystem = i);
          }),
          e.eachSeries(function (n) {
            n.get('coordinateSystem') === 'calendar' &&
              (n.coordinateSystem = r[n.get('calendarIndex') || 0]);
          }),
          r
        );
      }),
      (a.dimensions = ['time', 'value']),
      a
    );
  })();
function ro(a) {
  var e = a.calendarModel,
    t = a.seriesModel,
    r = e ? e.coordinateSystem : t ? t.coordinateSystem : null;
  return r;
}
const md = yd;
function xd(a) {
  a.registerComponentModel(dd),
    a.registerComponentView(gd),
    a.registerCoordinateSystem('calendar', md);
}
function Sd(a, e) {
  var t = a.existing;
  if (((e.id = a.keyInfo.id), !e.type && t && (e.type = t.type), e.parentId == null)) {
    var r = e.parentOption;
    r ? (e.parentId = r.id) : t && (e.parentId = t.parentId);
  }
  e.parentOption = null;
}
function no(a, e) {
  var t;
  return (
    I(e, function (r) {
      a[r] != null && a[r] !== 'auto' && (t = !0);
    }),
    t
  );
}
function bd(a, e, t) {
  var r = W({}, t),
    n = a[e],
    i = t.$action || 'merge';
  i === 'merge'
    ? n
      ? (Gt(n, r, !0),
        al(n, r, { ignoreSize: !0 }),
        Mh(t, n),
        wa(t, n),
        wa(t, n, 'shape'),
        wa(t, n, 'style'),
        wa(t, n, 'extra'),
        (t.clipPath = n.clipPath))
      : (a[e] = r)
    : i === 'replace'
    ? (a[e] = r)
    : i === 'remove' && n && (a[e] = null);
}
var Ol = ['transition', 'enterFrom', 'leaveTo'],
  wd = Ol.concat(['enterAnimation', 'updateAnimation', 'leaveAnimation']);
function wa(a, e, t) {
  if ((t && (!a[t] && e[t] && (a[t] = {}), (a = a[t]), (e = e[t])), !(!a || !e)))
    for (var r = t ? Ol : wd, n = 0; n < r.length; n++) {
      var i = r[n];
      a[i] == null && e[i] != null && (a[i] = e[i]);
    }
}
function _d(a, e) {
  if (
    a &&
    ((a.hv = e.hv = [no(e, ['left', 'right']), no(e, ['top', 'bottom'])]), a.type === 'group')
  ) {
    var t = a,
      r = e;
    t.width == null && (t.width = r.width = 0), t.height == null && (t.height = r.height = 0);
  }
}
var Ad = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.preventAutoZ = !0), t;
  }
  return (
    (e.prototype.mergeOption = function (t, r) {
      var n = this.option.elements;
      (this.option.elements = null),
        a.prototype.mergeOption.call(this, t, r),
        (this.option.elements = n);
    }),
    (e.prototype.optionUpdated = function (t, r) {
      var n = this.option,
        i = (r ? n : t).elements,
        o = (n.elements = r ? [] : n.elements),
        s = [];
      this._flatten(i, s, null);
      var l = Ch(o, s, 'normalMerge'),
        u = (this._elOptionsToUpdate = []);
      I(
        l,
        function (h, v) {
          var c = h.newOption;
          c && (u.push(c), Sd(h, c), bd(o, v, c), _d(o[v], c));
        },
        this,
      ),
        (n.elements = Ft(o, function (h) {
          return h && delete h.$action, h != null;
        }));
    }),
    (e.prototype._flatten = function (t, r, n) {
      I(
        t,
        function (i) {
          if (i) {
            n && (i.parentOption = n), r.push(i);
            var o = i.children;
            o && o.length && this._flatten(o, r, i), delete i.children;
          }
        },
        this,
      );
    }),
    (e.prototype.useElOptionsToUpdate = function () {
      var t = this._elOptionsToUpdate;
      return (this._elOptionsToUpdate = null), t;
    }),
    (e.type = 'graphic'),
    (e.defaultOption = { elements: [] }),
    e
  );
})($t);
function Wl(a, e, t, r) {
  return (
    a &&
    (a.legacy || (a.legacy !== !1 && !t && !r && e !== 'tspan' && (e === 'text' || B(a, 'text'))))
  );
}
function $l(a, e, t) {
  var r = a,
    n,
    i,
    o;
  if (e === 'text') o = r;
  else {
    (o = {}),
      B(r, 'text') && (o.text = r.text),
      B(r, 'rich') && (o.rich = r.rich),
      B(r, 'textFill') && (o.fill = r.textFill),
      B(r, 'textStroke') && (o.stroke = r.textStroke),
      B(r, 'fontFamily') && (o.fontFamily = r.fontFamily),
      B(r, 'fontSize') && (o.fontSize = r.fontSize),
      B(r, 'fontStyle') && (o.fontStyle = r.fontStyle),
      B(r, 'fontWeight') && (o.fontWeight = r.fontWeight),
      (i = { type: 'text', style: o, silent: !0 }),
      (n = {});
    var s = B(r, 'textPosition');
    t ? (n.position = s ? r.textPosition : 'inside') : s && (n.position = r.textPosition),
      B(r, 'textPosition') && (n.position = r.textPosition),
      B(r, 'textOffset') && (n.offset = r.textOffset),
      B(r, 'textRotation') && (n.rotation = r.textRotation),
      B(r, 'textDistance') && (n.distance = r.textDistance);
  }
  return (
    io(o, a),
    I(o.rich, function (l) {
      io(l, l);
    }),
    { textConfig: n, textContent: i }
  );
}
function io(a, e) {
  e &&
    ((e.font = e.textFont || e.font),
    B(e, 'textStrokeWidth') && (a.lineWidth = e.textStrokeWidth),
    B(e, 'textAlign') && (a.align = e.textAlign),
    B(e, 'textVerticalAlign') && (a.verticalAlign = e.textVerticalAlign),
    B(e, 'textLineHeight') && (a.lineHeight = e.textLineHeight),
    B(e, 'textWidth') && (a.width = e.textWidth),
    B(e, 'textHeight') && (a.height = e.textHeight),
    B(e, 'textBackgroundColor') && (a.backgroundColor = e.textBackgroundColor),
    B(e, 'textPadding') && (a.padding = e.textPadding),
    B(e, 'textBorderColor') && (a.borderColor = e.textBorderColor),
    B(e, 'textBorderWidth') && (a.borderWidth = e.textBorderWidth),
    B(e, 'textBorderRadius') && (a.borderRadius = e.textBorderRadius),
    B(e, 'textBoxShadowColor') && (a.shadowColor = e.textBoxShadowColor),
    B(e, 'textBoxShadowBlur') && (a.shadowBlur = e.textBoxShadowBlur),
    B(e, 'textBoxShadowOffsetX') && (a.shadowOffsetX = e.textBoxShadowOffsetX),
    B(e, 'textBoxShadowOffsetY') && (a.shadowOffsetY = e.textBoxShadowOffsetY));
}
function oo(a, e, t) {
  var r = a;
  (r.textPosition = r.textPosition || t.position || 'inside'),
    t.offset != null && (r.textOffset = t.offset),
    t.rotation != null && (r.textRotation = t.rotation),
    t.distance != null && (r.textDistance = t.distance);
  var n = r.textPosition.indexOf('inside') >= 0,
    i = a.fill || '#000';
  so(r, e);
  var o = r.textFill == null;
  return (
    n
      ? o &&
        ((r.textFill = t.insideFill || '#fff'),
        !r.textStroke && t.insideStroke && (r.textStroke = t.insideStroke),
        !r.textStroke && (r.textStroke = i),
        r.textStrokeWidth == null && (r.textStrokeWidth = 2))
      : (o && (r.textFill = a.fill || t.outsideFill || '#000'),
        !r.textStroke && t.outsideStroke && (r.textStroke = t.outsideStroke)),
    (r.text = e.text),
    (r.rich = e.rich),
    I(e.rich, function (s) {
      so(s, s);
    }),
    r
  );
}
function so(a, e) {
  e &&
    (B(e, 'fill') && (a.textFill = e.fill),
    B(e, 'stroke') && (a.textStroke = e.fill),
    B(e, 'lineWidth') && (a.textStrokeWidth = e.lineWidth),
    B(e, 'font') && (a.font = e.font),
    B(e, 'fontStyle') && (a.fontStyle = e.fontStyle),
    B(e, 'fontWeight') && (a.fontWeight = e.fontWeight),
    B(e, 'fontSize') && (a.fontSize = e.fontSize),
    B(e, 'fontFamily') && (a.fontFamily = e.fontFamily),
    B(e, 'align') && (a.textAlign = e.align),
    B(e, 'verticalAlign') && (a.textVerticalAlign = e.verticalAlign),
    B(e, 'lineHeight') && (a.textLineHeight = e.lineHeight),
    B(e, 'width') && (a.textWidth = e.width),
    B(e, 'height') && (a.textHeight = e.height),
    B(e, 'backgroundColor') && (a.textBackgroundColor = e.backgroundColor),
    B(e, 'padding') && (a.textPadding = e.padding),
    B(e, 'borderColor') && (a.textBorderColor = e.borderColor),
    B(e, 'borderWidth') && (a.textBorderWidth = e.borderWidth),
    B(e, 'borderRadius') && (a.textBorderRadius = e.borderRadius),
    B(e, 'shadowColor') && (a.textBoxShadowColor = e.shadowColor),
    B(e, 'shadowBlur') && (a.textBoxShadowBlur = e.shadowBlur),
    B(e, 'shadowOffsetX') && (a.textBoxShadowOffsetX = e.shadowOffsetX),
    B(e, 'shadowOffsetY') && (a.textBoxShadowOffsetY = e.shadowOffsetY),
    B(e, 'textShadowColor') && (a.textShadowColor = e.textShadowColor),
    B(e, 'textShadowBlur') && (a.textShadowBlur = e.textShadowBlur),
    B(e, 'textShadowOffsetX') && (a.textShadowOffsetX = e.textShadowOffsetX),
    B(e, 'textShadowOffsetY') && (a.textShadowOffsetY = e.textShadowOffsetY));
}
var Fl = { position: ['x', 'y'], scale: ['scaleX', 'scaleY'], origin: ['originX', 'originY'] },
  lo = pt(Fl);
Lh(
  na,
  function (a, e) {
    return (a[e] = 1), a;
  },
  {},
);
na.join(', ');
var $a = ['', 'style', 'shape', 'extra'],
  Ge = bt();
function ai(a, e, t, r, n) {
  var i = a + 'Animation',
    o = nl(a, r, n) || {},
    s = Ge(e).userDuring;
  return (
    o.duration > 0 &&
      ((o.during = s ? U(Ld, { el: e, userDuring: s }) : null), (o.setToFinal = !0), (o.scope = a)),
    W(o, t[i]),
    o
  );
}
function Ra(a, e, t, r) {
  r = r || {};
  var n = r.dataIndex,
    i = r.isInit,
    o = r.clearStyle,
    s = t.isAnimationEnabled(),
    l = Ge(a),
    u = e.style;
  l.userDuring = e.during;
  var h = {},
    v = {};
  if (
    (Pd(a, e, v),
    ho('shape', e, v),
    ho('extra', e, v),
    !i && s && (Id(a, e, h), uo('shape', a, e, h), uo('extra', a, e, h), Ed(a, e, u, h)),
    (v.style = u),
    Dd(a, v, o),
    Cd(a, e),
    s)
  )
    if (i) {
      var c = {};
      I($a, function (d) {
        var p = d ? e[d] : e;
        p && p.enterFrom && (d && (c[d] = c[d] || {}), W(d ? c[d] : c, p.enterFrom));
      });
      var f = ai('enter', a, e, t, n);
      f.duration > 0 && a.animateFrom(c, f);
    } else Td(a, e, n || 0, t, h);
  Hl(a, e), u ? a.dirty() : a.markRedraw();
}
function Hl(a, e) {
  for (var t = Ge(a).leaveToProps, r = 0; r < $a.length; r++) {
    var n = $a[r],
      i = n ? e[n] : e;
    i &&
      i.leaveTo &&
      (t || (t = Ge(a).leaveToProps = {}), n && (t[n] = t[n] || {}), W(n ? t[n] : t, i.leaveTo));
  }
}
function mr(a, e, t, r) {
  if (a) {
    var n = a.parent,
      i = Ge(a).leaveToProps;
    if (i) {
      var o = ai('update', a, e, t, 0);
      (o.done = function () {
        n.remove(a), r && r();
      }),
        a.animateTo(i, o);
    } else n.remove(a), r && r();
  }
}
function Te(a) {
  return a === 'all';
}
function Dd(a, e, t) {
  var r = e.style;
  if (!a.isGroup && r) {
    if (t) {
      a.useStyle({});
      for (var n = a.animators, i = 0; i < n.length; i++) {
        var o = n[i];
        o.targetName === 'style' && o.changeTarget(a.style);
      }
    }
    a.setStyle(r);
  }
  e && ((e.style = null), e && a.attr(e), (e.style = r));
}
function Td(a, e, t, r, n) {
  if (n) {
    var i = ai('update', a, e, r, t);
    i.duration > 0 && a.animateFrom(n, i);
  }
}
function Cd(a, e) {
  B(e, 'silent') && (a.silent = e.silent),
    B(e, 'ignore') && (a.ignore = e.ignore),
    a instanceof er && B(e, 'invisible') && (a.invisible = e.invisible),
    a instanceof Vt && B(e, 'autoBatch') && (a.autoBatch = e.autoBatch);
}
var Ut = {},
  Md = {
    setTransform: function (a, e) {
      return (Ut.el[a] = e), this;
    },
    getTransform: function (a) {
      return Ut.el[a];
    },
    setShape: function (a, e) {
      var t = Ut.el,
        r = t.shape || (t.shape = {});
      return (r[a] = e), t.dirtyShape && t.dirtyShape(), this;
    },
    getShape: function (a) {
      var e = Ut.el.shape;
      if (e) return e[a];
    },
    setStyle: function (a, e) {
      var t = Ut.el,
        r = t.style;
      return r && ((r[a] = e), t.dirtyStyle && t.dirtyStyle()), this;
    },
    getStyle: function (a) {
      var e = Ut.el.style;
      if (e) return e[a];
    },
    setExtra: function (a, e) {
      var t = Ut.el.extra || (Ut.el.extra = {});
      return (t[a] = e), this;
    },
    getExtra: function (a) {
      var e = Ut.el.extra;
      if (e) return e[a];
    },
  };
function Ld() {
  var a = this,
    e = a.el;
  if (e) {
    var t = Ge(e).userDuring,
      r = a.userDuring;
    if (t !== r) {
      a.el = a.userDuring = null;
      return;
    }
    (Ut.el = e), r(Md);
  }
}
function uo(a, e, t, r) {
  var n = t[a];
  if (n) {
    var i = e[a],
      o;
    if (i) {
      var s = t.transition,
        l = n.transition;
      if (l)
        if ((!o && (o = r[a] = {}), Te(l))) W(o, i);
        else
          for (var u = le(l), h = 0; h < u.length; h++) {
            var v = u[h],
              c = i[v];
            o[v] = c;
          }
      else if (Te(s) || Ct(s, a) >= 0) {
        !o && (o = r[a] = {});
        for (var f = pt(i), h = 0; h < f.length; h++) {
          var v = f[h],
            c = i[v];
          Rd(n[v], c) && (o[v] = c);
        }
      }
    }
  }
}
function ho(a, e, t) {
  var r = e[a];
  if (r)
    for (var n = (t[a] = {}), i = pt(r), o = 0; o < i.length; o++) {
      var s = i[o];
      n[s] = Ih(r[s]);
    }
}
function Id(a, e, t) {
  for (var r = e.transition, n = Te(r) ? na : le(r || []), i = 0; i < n.length; i++) {
    var o = n[i];
    if (!(o === 'style' || o === 'shape' || o === 'extra')) {
      var s = a[o];
      t[o] = s;
    }
  }
}
function Pd(a, e, t) {
  for (var r = 0; r < lo.length; r++) {
    var n = lo[r],
      i = Fl[n],
      o = e[n];
    o && ((t[i[0]] = o[0]), (t[i[1]] = o[1]));
  }
  for (var r = 0; r < na.length; r++) {
    var s = na[r];
    e[s] != null && (t[s] = e[s]);
  }
}
function Ed(a, e, t, r) {
  if (t) {
    var n = a.style,
      i;
    if (n) {
      var o = t.transition,
        s = e.transition;
      if (o && !Te(o)) {
        var l = le(o);
        !i && (i = r.style = {});
        for (var u = 0; u < l.length; u++) {
          var h = l[u],
            v = n[h];
          i[h] = v;
        }
      } else if (a.getAnimationStyleProps && (Te(s) || Te(o) || Ct(s, 'style') >= 0)) {
        var c = a.getAnimationStyleProps(),
          f = c ? c.style : null;
        if (f) {
          !i && (i = r.style = {});
          for (var d = pt(t), u = 0; u < d.length; u++) {
            var h = d[u];
            if (f[h]) {
              var v = n[h];
              i[h] = v;
            }
          }
        }
      }
    }
  }
}
function Rd(a, e) {
  return rl(a) ? a !== e : a != null && isFinite(a);
}
var Zl = bt(),
  kd = ['percent', 'easing', 'shape', 'style', 'extra'];
function Ul(a) {
  a.stopAnimation('keyframe'), a.attr(Zl(a));
}
function Fa(a, e, t) {
  if (!(!t.isAnimationEnabled() || !e)) {
    if (H(e)) {
      I(e, function (s) {
        Fa(a, s, t);
      });
      return;
    }
    var r = e.keyframes,
      n = e.duration;
    if (t && n == null) {
      var i = nl('enter', t, 0);
      n = i && i.duration;
    }
    if (!(!r || !n)) {
      var o = Zl(a);
      I($a, function (s) {
        if (!(s && !a[s])) {
          var l;
          r.sort(function (u, h) {
            return u.percent - h.percent;
          }),
            I(r, function (u) {
              var h = a.animators,
                v = s ? u[s] : u;
              if (v) {
                var c = pt(v);
                if (
                  (s ||
                    (c = Ft(c, function (p) {
                      return Ct(kd, p) < 0;
                    })),
                  !!c.length)
                ) {
                  l || ((l = a.animate(s, e.loop, !0)), (l.scope = 'keyframe'));
                  for (var f = 0; f < h.length; f++)
                    h[f] !== l && h[f].targetName === l.targetName && h[f].stopTracks(c);
                  s && (o[s] = o[s] || {});
                  var d = s ? o[s] : o;
                  I(c, function (p) {
                    d[p] = ((s ? a[s] : a) || {})[p];
                  }),
                    l.whenWithKeys(n * u.percent, v, c, u.easing);
                }
              }
            }),
            l &&
              l
                .delay(e.delay || 0)
                .duration(n)
                .start(e.easing);
        }
      });
    }
  }
}
var vo = { path: null, compoundPath: null, group: K, image: ye, text: gt },
  Et = bt(),
  Nd = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.init = function () {
        this._elMap = Kt();
      }),
      (e.prototype.render = function (t, r, n) {
        t !== this._lastGraphicModel && this._clear(),
          (this._lastGraphicModel = t),
          this._updateElements(t),
          this._relocate(t, n);
      }),
      (e.prototype._updateElements = function (t) {
        var r = t.useElOptionsToUpdate();
        if (r) {
          var n = this._elMap,
            i = this.group,
            o = t.get('z'),
            s = t.get('zlevel');
          I(r, function (l) {
            var u = ie(l.id, null),
              h = u != null ? n.get(u) : null,
              v = ie(l.parentId, null),
              c = v != null ? n.get(v) : i,
              f = l.type,
              d = l.style;
            f === 'text' &&
              d &&
              l.hv &&
              l.hv[1] &&
              (d.textVerticalAlign = d.textBaseline = d.verticalAlign = d.align = null);
            var p = l.textContent,
              g = l.textConfig;
            if (d && Wl(d, f, !!g, !!p)) {
              var y = $l(d, f, !0);
              !g && y.textConfig && (g = l.textConfig = y.textConfig),
                !p && y.textContent && (p = y.textContent);
            }
            var m = Vd(l),
              x = l.$action || 'merge',
              S = x === 'merge',
              b = x === 'replace';
            if (S) {
              var w = !h,
                _ = h;
              w ? (_ = co(u, c, l.type, n)) : (_ && (Et(_).isNew = !1), Ul(_)),
                _ && (Ra(_, m, t, { isInit: w }), fo(_, l, o, s));
            } else if (b) {
              ka(h, l, n, t);
              var A = co(u, c, l.type, n);
              A && (Ra(A, m, t, { isInit: !0 }), fo(A, l, o, s));
            } else x === 'remove' && (Hl(h, l), ka(h, l, n, t));
            var C = n.get(u);
            if (C && p)
              if (S) {
                var D = C.getTextContent();
                D ? D.attr(p) : C.setTextContent(new gt(p));
              } else b && C.setTextContent(new gt(p));
            if (C) {
              var T = l.clipPath;
              if (T) {
                var L = T.type,
                  P = void 0,
                  w = !1;
                if (S) {
                  var M = C.getClipPath();
                  (w = !M || Et(M).type !== L), (P = w ? Dn(L) : M);
                } else b && ((w = !0), (P = Dn(L)));
                C.setClipPath(P), Ra(P, T, t, { isInit: w }), Fa(P, T.keyframeAnimation, t);
              }
              var E = Et(C);
              C.setTextConfig(g),
                (E.option = l),
                Bd(C, t, l),
                Ph({ el: C, componentModel: t, itemName: C.name, itemTooltipOption: l.tooltip }),
                Fa(C, l.keyframeAnimation, t);
            }
          });
        }
      }),
      (e.prototype._relocate = function (t, r) {
        for (
          var n = t.option.elements,
            i = this.group,
            o = this._elMap,
            s = r.getWidth(),
            l = r.getHeight(),
            u = ['x', 'y'],
            h = 0;
          h < n.length;
          h++
        ) {
          var v = n[h],
            c = ie(v.id, null),
            f = c != null ? o.get(c) : null;
          if (!(!f || !f.isGroup)) {
            var d = f.parent,
              p = d === i,
              g = Et(f),
              y = Et(d);
            (g.width = z(g.option.width, p ? s : y.width) || 0),
              (g.height = z(g.option.height, p ? l : y.height) || 0);
          }
        }
        for (var h = n.length - 1; h >= 0; h--) {
          var v = n[h],
            c = ie(v.id, null),
            f = c != null ? o.get(c) : null;
          if (f) {
            var d = f.parent,
              y = Et(d),
              m = d === i ? { width: s, height: l } : { width: y.width, height: y.height },
              x = {},
              S = il(f, v, m, null, { hv: v.hv, boundingMode: v.bounding }, x);
            if (!Et(f).isNew && S) {
              for (var b = v.transition, w = {}, _ = 0; _ < u.length; _++) {
                var A = u[_],
                  C = x[A];
                b && (Te(b) || Ct(b, A) >= 0) ? (w[A] = C) : (f[A] = C);
              }
              ht(f, w, t, 0);
            } else f.attr(x);
          }
        }
      }),
      (e.prototype._clear = function () {
        var t = this,
          r = this._elMap;
        r.each(function (n) {
          ka(n, Et(n).option, r, t._lastGraphicModel);
        }),
          (this._elMap = Kt());
      }),
      (e.prototype.dispose = function () {
        this._clear();
      }),
      (e.type = 'graphic'),
      e
    );
  })(ae);
function Dn(a) {
  var e = B(vo, a) ? vo[a] : ol(a),
    t = new e({});
  return (Et(t).type = a), t;
}
function co(a, e, t, r) {
  var n = Dn(t);
  return e.add(n), r.set(a, n), (Et(n).id = a), (Et(n).isNew = !0), n;
}
function ka(a, e, t, r) {
  var n = a && a.parent;
  n &&
    (a.type === 'group' &&
      a.traverse(function (i) {
        ka(i, e, t, r);
      }),
    mr(a, e, r),
    t.removeKey(Et(a).id));
}
function fo(a, e, t, r) {
  a.isGroup ||
    I(
      [
        ['cursor', er.prototype.cursor],
        ['zlevel', r || 0],
        ['z', t || 0],
        ['z2', 0],
      ],
      function (n) {
        var i = n[0];
        B(e, i) ? (a[i] = Dt(e[i], n[1])) : a[i] == null && (a[i] = n[1]);
      },
    ),
    I(pt(e), function (n) {
      if (n.indexOf('on') === 0) {
        var i = e[n];
        a[n] = st(i) ? i : null;
      }
    }),
    B(e, 'draggable') && (a.draggable = e.draggable),
    e.name != null && (a.name = e.name),
    e.id != null && (a.id = e.id);
}
function Vd(a) {
  return (
    (a = W({}, a)),
    I(
      ['id', 'parentId', '$action', 'hv', 'bounding', 'textContent', 'clipPath'].concat(Eh),
      function (e) {
        delete a[e];
      },
    ),
    a
  );
}
function Bd(a, e, t) {
  var r = lt(a).eventData;
  !a.silent &&
    !a.ignore &&
    !r &&
    (r = lt(a).eventData =
      { componentType: 'graphic', componentIndex: e.componentIndex, name: a.name }),
    r && (r.info = t.info);
}
function zd(a) {
  a.registerComponentModel(Ad),
    a.registerComponentView(Nd),
    a.registerPreprocessor(function (e) {
      var t = e.graphic;
      H(t)
        ? !t[0] || !t[0].elements
          ? (e.graphic = [{ elements: t }])
          : (e.graphic = [e.graphic[0]])
        : t && !t.elements && (e.graphic = [{ elements: [t] }]);
    });
}
var Gd = ['rect', 'polygon', 'keep', 'clear'];
function Od(a, e) {
  var t = le(a ? a.brush : []);
  if (t.length) {
    var r = [];
    I(t, function (l) {
      var u = l.hasOwnProperty('toolbox') ? l.toolbox : [];
      u instanceof Array && (r = r.concat(u));
    });
    var n = a && a.toolbox;
    H(n) && (n = n[0]), n || ((n = { feature: {} }), (a.toolbox = [n]));
    var i = n.feature || (n.feature = {}),
      o = i.brush || (i.brush = {}),
      s = o.type || (o.type = []);
    s.push.apply(s, r), Wd(s), e && !s.length && s.push.apply(s, Gd);
  }
}
function Wd(a) {
  var e = {};
  I(a, function (t) {
    e[t] = 1;
  }),
    (a.length = 0),
    I(e, function (t, r) {
      a.push(r);
    });
}
function $d(a) {
  var e = a.brushType,
    t = {
      point: function (r) {
        return po[e].point(r, t, a);
      },
      rect: function (r) {
        return po[e].rect(r, t, a);
      },
    };
  return t;
}
var po = {
  lineX: go(0),
  lineY: go(1),
  rect: {
    point: function (a, e, t) {
      return a && t.boundingRect.contain(a[0], a[1]);
    },
    rect: function (a, e, t) {
      return a && t.boundingRect.intersect(a);
    },
  },
  polygon: {
    point: function (a, e, t) {
      return a && t.boundingRect.contain(a[0], a[1]) && We(t.range, a[0], a[1]);
    },
    rect: function (a, e, t) {
      var r = t.range;
      if (!a || r.length <= 1) return !1;
      var n = a.x,
        i = a.y,
        o = a.width,
        s = a.height,
        l = r[0];
      if (
        We(r, n, i) ||
        We(r, n + o, i) ||
        We(r, n, i + s) ||
        We(r, n + o, i + s) ||
        jt.create(a).contain(l[0], l[1]) ||
        ga(n, i, n + o, i, r) ||
        ga(n, i, n, i + s, r) ||
        ga(n + o, i, n + o, i + s, r) ||
        ga(n, i + s, n + o, i + s, r)
      )
        return !0;
    },
  },
};
function go(a) {
  var e = ['x', 'y'],
    t = ['width', 'height'];
  return {
    point: function (r, n, i) {
      if (r) {
        var o = i.range,
          s = r[a];
        return Fe(s, o);
      }
    },
    rect: function (r, n, i) {
      if (r) {
        var o = i.range,
          s = [r[e[a]], r[e[a]] + r[t[a]]];
        return s[1] < s[0] && s.reverse(), Fe(s[0], o) || Fe(s[1], o) || Fe(o[0], s) || Fe(o[1], s);
      }
    },
  };
}
function Fe(a, e) {
  return e[0] <= a && a <= e[1];
}
var yo = ['inBrush', 'outOfBrush'],
  Lr = '__ecBrushSelect',
  Tn = '__ecInBrushSelectEvent';
function Yl(a) {
  a.eachComponent({ mainType: 'brush' }, function (e) {
    var t = (e.brushTargetManager = new Nh(e.option, a));
    t.setInputRanges(e.areas, a);
  });
}
function Fd(a, e, t) {
  var r = [],
    n,
    i;
  a.eachComponent({ mainType: 'brush' }, function (o) {
    t &&
      t.type === 'takeGlobalCursor' &&
      o.setBrushOption(t.key === 'brush' ? t.brushOption : { brushType: !1 });
  }),
    Yl(a),
    a.eachComponent({ mainType: 'brush' }, function (o, s) {
      var l = { brushId: o.id, brushIndex: s, brushName: o.name, areas: Lt(o.areas), selected: [] };
      r.push(l);
      var u = o.option,
        h = u.brushLink,
        v = [],
        c = [],
        f = [],
        d = !1;
      s || ((n = u.throttleType), (i = u.throttleDelay));
      var p = O(o.areas, function (b) {
          var w = Yd[b.brushType],
            _ = nt({ boundingRect: w ? w(b) : void 0 }, b);
          return (_.selectors = $d(_)), _;
        }),
        g = Rh(o.option, yo, function (b) {
          b.mappingMethod = 'fixed';
        });
      H(h) &&
        I(h, function (b) {
          v[b] = 1;
        });
      function y(b) {
        return h === 'all' || !!v[b];
      }
      function m(b) {
        return !!b.length;
      }
      a.eachSeries(function (b, w) {
        var _ = (f[w] = []);
        b.subType === 'parallel' ? x(b, w) : S(b, w, _);
      });
      function x(b, w) {
        var _ = b.coordinateSystem;
        (d = d || _.hasAxisBrushed()),
          y(w) &&
            _.eachActiveState(b.getData(), function (A, C) {
              A === 'active' && (c[C] = 1);
            });
      }
      function S(b, w, _) {
        if (
          !(!b.brushSelector || Ud(o, w)) &&
          (I(p, function (C) {
            o.brushTargetManager.controlSeries(C, b, a) && _.push(C), (d = d || m(_));
          }),
          y(w) && m(_))
        ) {
          var A = b.getData();
          A.each(function (C) {
            mo(b, _, A, C) && (c[C] = 1);
          });
        }
      }
      a.eachSeries(function (b, w) {
        var _ = { seriesId: b.id, seriesIndex: w, seriesName: b.name, dataIndex: [] };
        l.selected.push(_);
        var A = f[w],
          C = b.getData(),
          D = y(w)
            ? function (T) {
                return c[T] ? (_.dataIndex.push(C.getRawIndex(T)), 'inBrush') : 'outOfBrush';
              }
            : function (T) {
                return mo(b, A, C, T)
                  ? (_.dataIndex.push(C.getRawIndex(T)), 'inBrush')
                  : 'outOfBrush';
              };
        (y(w) ? d : m(A)) && kh(yo, g, C, D);
      });
    }),
    Hd(e, n, i, r, t);
}
function Hd(a, e, t, r, n) {
  if (n) {
    var i = a.getZr();
    if (!i[Tn]) {
      i[Lr] || (i[Lr] = Zd);
      var o = Ja(i, Lr, t, e);
      o(a, r);
    }
  }
}
function Zd(a, e) {
  if (!a.isDisposed()) {
    var t = a.getZr();
    (t[Tn] = !0), a.dispatchAction({ type: 'brushSelect', batch: e }), (t[Tn] = !1);
  }
}
function mo(a, e, t, r) {
  for (var n = 0, i = e.length; n < i; n++) {
    var o = e[n];
    if (a.brushSelector(r, t, o.selectors, o)) return !0;
  }
}
function Ud(a, e) {
  var t = a.option.seriesIndex;
  return t != null && t !== 'all' && (H(t) ? Ct(t, e) < 0 : e !== t);
}
var Yd = {
  rect: function (a) {
    return xo(a.range);
  },
  polygon: function (a) {
    for (var e, t = a.range, r = 0, n = t.length; r < n; r++) {
      e = e || [
        [1 / 0, -1 / 0],
        [1 / 0, -1 / 0],
      ];
      var i = t[r];
      i[0] < e[0][0] && (e[0][0] = i[0]),
        i[0] > e[0][1] && (e[0][1] = i[0]),
        i[1] < e[1][0] && (e[1][0] = i[1]),
        i[1] > e[1][1] && (e[1][1] = i[1]);
    }
    return e && xo(e);
  },
};
function xo(a) {
  return new jt(a[0][0], a[1][0], a[0][1] - a[0][0], a[1][1] - a[1][0]);
}
var Xd = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function (t, r) {
      (this.ecModel = t),
        (this.api = r),
        this.model,
        (this._brushController = new tl(r.getZr())).on('brush', U(this._onBrush, this)).mount();
    }),
    (e.prototype.render = function (t, r, n, i) {
      (this.model = t), this._updateController(t, r, n, i);
    }),
    (e.prototype.updateTransform = function (t, r, n, i) {
      Yl(r), this._updateController(t, r, n, i);
    }),
    (e.prototype.updateVisual = function (t, r, n, i) {
      this.updateTransform(t, r, n, i);
    }),
    (e.prototype.updateView = function (t, r, n, i) {
      this._updateController(t, r, n, i);
    }),
    (e.prototype._updateController = function (t, r, n, i) {
      (!i || i.$from !== t.id) &&
        this._brushController
          .setPanels(t.brushTargetManager.makePanelOpts(n))
          .enableBrush(t.brushOption)
          .updateCovers(t.areas.slice());
    }),
    (e.prototype.dispose = function () {
      this._brushController.dispose();
    }),
    (e.prototype._onBrush = function (t) {
      var r = this.model.id,
        n = this.model.brushTargetManager.setOutputRanges(t.areas, this.ecModel);
      (!t.isEnd || t.removeOnClick) &&
        this.api.dispatchAction({ type: 'brush', brushId: r, areas: Lt(n), $from: r }),
        t.isEnd &&
          this.api.dispatchAction({ type: 'brushEnd', brushId: r, areas: Lt(n), $from: r });
    }),
    (e.type = 'brush'),
    e
  );
})(ae);
const qd = Xd;
var Kd = '#ddd',
  jd = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t.areas = []), (t.brushOption = {}), t;
    }
    return (
      (e.prototype.optionUpdated = function (t, r) {
        var n = this.option;
        !r && Vh(n, t, ['inBrush', 'outOfBrush']);
        var i = (n.inBrush = n.inBrush || {});
        (n.outOfBrush = n.outOfBrush || { color: Kd }), i.hasOwnProperty('liftZ') || (i.liftZ = 5);
      }),
      (e.prototype.setAreas = function (t) {
        t &&
          (this.areas = O(
            t,
            function (r) {
              return So(this.option, r);
            },
            this,
          ));
      }),
      (e.prototype.setBrushOption = function (t) {
        (this.brushOption = So(this.option, t)), (this.brushType = this.brushOption.brushType);
      }),
      (e.type = 'brush'),
      (e.dependencies = ['geo', 'grid', 'xAxis', 'yAxis', 'parallel', 'series']),
      (e.defaultOption = {
        seriesIndex: 'all',
        brushType: 'rect',
        brushMode: 'single',
        transformable: !0,
        brushStyle: { borderWidth: 1, color: 'rgba(210,219,238,0.3)', borderColor: '#D2DBEE' },
        throttleType: 'fixRate',
        throttleDelay: 0,
        removeOnClick: !0,
        z: 1e4,
      }),
      e
    );
  })($t);
function So(a, e) {
  return Gt(
    {
      brushType: a.brushType,
      brushMode: a.brushMode,
      transformable: a.transformable,
      brushStyle: new qt(a.brushStyle).getItemStyle(),
      removeOnClick: a.removeOnClick,
      z: a.z,
    },
    e,
    !0,
  );
}
const Qd = jd;
var Jd = ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
  tp = (function (a) {
    k(e, a);
    function e() {
      return (a !== null && a.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.render = function (t, r, n) {
        var i, o, s;
        r.eachComponent({ mainType: 'brush' }, function (l) {
          (i = l.brushType), (o = l.brushOption.brushMode || 'single'), (s = s || !!l.areas.length);
        }),
          (this._brushType = i),
          (this._brushMode = o),
          I(t.get('type', !0), function (l) {
            t.setIconStatus(
              l,
              (l === 'keep' ? o === 'multiple' : l === 'clear' ? s : l === i)
                ? 'emphasis'
                : 'normal',
            );
          });
      }),
      (e.prototype.updateView = function (t, r, n) {
        this.render(t, r, n);
      }),
      (e.prototype.getIcons = function () {
        var t = this.model,
          r = t.get('icon', !0),
          n = {};
        return (
          I(t.get('type', !0), function (i) {
            r[i] && (n[i] = r[i]);
          }),
          n
        );
      }),
      (e.prototype.onclick = function (t, r, n) {
        var i = this._brushType,
          o = this._brushMode;
        n === 'clear'
          ? (r.dispatchAction({ type: 'axisAreaSelect', intervals: [] }),
            r.dispatchAction({ type: 'brush', command: 'clear', areas: [] }))
          : r.dispatchAction({
              type: 'takeGlobalCursor',
              key: 'brush',
              brushOption: {
                brushType: n === 'keep' ? i : i === n ? !1 : n,
                brushMode: n === 'keep' ? (o === 'multiple' ? 'single' : 'multiple') : o,
              },
            });
      }),
      (e.getDefaultOption = function (t) {
        var r = {
          show: !0,
          type: Jd.slice(),
          icon: {
            rect: 'M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13',
            polygon:
              'M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2',
            lineX:
              'M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4',
            lineY:
              'M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4',
            keep: 'M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z',
            clear:
              'M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2',
          },
          title: t.getLocaleModel().get(['toolbox', 'brush', 'title']),
        };
        return r;
      }),
      e
    );
  })(Bh);
const ep = tp;
function ap(a) {
  a.registerComponentView(qd),
    a.registerComponentModel(Qd),
    a.registerPreprocessor(Od),
    a.registerVisual(a.PRIORITY.VISUAL.BRUSH, Fd),
    a.registerAction({ type: 'brush', event: 'brush', update: 'updateVisual' }, function (e, t) {
      t.eachComponent({ mainType: 'brush', query: e }, function (r) {
        r.setAreas(e.areas);
      });
    }),
    a.registerAction({ type: 'brushSelect', event: 'brushSelected', update: 'none' }, ze),
    a.registerAction({ type: 'brushEnd', event: 'brushEnd', update: 'none' }, ze),
    zh('brush', ep);
}
var rp = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.layoutMode = 'box'), t;
  }
  return (
    (e.prototype.init = function (t, r, n) {
      this.mergeDefaultAndTheme(t, n), this._initData();
    }),
    (e.prototype.mergeOption = function (t) {
      a.prototype.mergeOption.apply(this, arguments), this._initData();
    }),
    (e.prototype.setCurrentIndex = function (t) {
      t == null && (t = this.option.currentIndex);
      var r = this._data.count();
      this.option.loop ? (t = ((t % r) + r) % r) : (t >= r && (t = r - 1), t < 0 && (t = 0)),
        (this.option.currentIndex = t);
    }),
    (e.prototype.getCurrentIndex = function () {
      return this.option.currentIndex;
    }),
    (e.prototype.isIndexMax = function () {
      return this.getCurrentIndex() >= this._data.count() - 1;
    }),
    (e.prototype.setPlayState = function (t) {
      this.option.autoPlay = !!t;
    }),
    (e.prototype.getPlayState = function () {
      return !!this.option.autoPlay;
    }),
    (e.prototype._initData = function () {
      var t = this.option,
        r = t.data || [],
        n = t.axisType,
        i = (this._names = []),
        o;
      n === 'category'
        ? ((o = []),
          I(r, function (u, h) {
            var v = ie(Gh(u), ''),
              c;
            Le(u) ? ((c = Lt(u)), (c.value = h)) : (c = h), o.push(c), i.push(v);
          }))
        : (o = r);
      var s = { category: 'ordinal', time: 'time', value: 'number' }[n] || 'number',
        l = (this._data = new Mt([{ name: 'value', type: s }], this));
      l.initData(o, i);
    }),
    (e.prototype.getData = function () {
      return this._data;
    }),
    (e.prototype.getCategories = function () {
      if (this.get('axisType') === 'category') return this._names.slice();
    }),
    (e.type = 'timeline'),
    (e.defaultOption = {
      z: 4,
      show: !0,
      axisType: 'time',
      realtime: !0,
      left: '20%',
      top: null,
      right: '20%',
      bottom: 0,
      width: null,
      height: 40,
      padding: 5,
      controlPosition: 'left',
      autoPlay: !1,
      rewind: !1,
      loop: !0,
      playInterval: 2e3,
      currentIndex: 0,
      itemStyle: {},
      label: { color: '#000' },
      data: [],
    }),
    e
  );
})($t);
const bo = rp;
var Xl = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.type = 'timeline.slider'),
    (e.defaultOption = ar(bo.defaultOption, {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#ccc',
      borderWidth: 0,
      orient: 'horizontal',
      inverse: !1,
      tooltip: { trigger: 'item' },
      symbol: 'circle',
      symbolSize: 12,
      lineStyle: { show: !0, width: 2, color: '#DAE1F5' },
      label: { position: 'auto', show: !0, interval: 'auto', rotate: 0, color: '#A4B1D7' },
      itemStyle: { color: '#A4B1D7', borderWidth: 1 },
      checkpointStyle: {
        symbol: 'circle',
        symbolSize: 15,
        color: '#316bf3',
        borderColor: '#fff',
        borderWidth: 2,
        shadowBlur: 2,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        animation: !0,
        animationDuration: 300,
        animationEasing: 'quinticInOut',
      },
      controlStyle: {
        show: !0,
        showPlayBtn: !0,
        showPrevBtn: !0,
        showNextBtn: !0,
        itemSize: 24,
        itemGap: 12,
        position: 'left',
        playIcon:
          'path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z',
        stopIcon:
          'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
        nextIcon:
          'M2,18.5A1.52,1.52,0,0,1,.92,18a1.49,1.49,0,0,1,0-2.12L7.81,9.36,1,3.11A1.5,1.5,0,1,1,3,.89l8,7.34a1.48,1.48,0,0,1,.49,1.09,1.51,1.51,0,0,1-.46,1.1L3,18.08A1.5,1.5,0,0,1,2,18.5Z',
        prevIcon:
          'M10,.5A1.52,1.52,0,0,1,11.08,1a1.49,1.49,0,0,1,0,2.12L4.19,9.64,11,15.89a1.5,1.5,0,1,1-2,2.22L1,10.77A1.48,1.48,0,0,1,.5,9.68,1.51,1.51,0,0,1,1,8.58L9,.92A1.5,1.5,0,0,1,10,.5Z',
        prevBtnSize: 18,
        nextBtnSize: 18,
        color: '#A4B1D7',
        borderColor: '#A4B1D7',
        borderWidth: 1,
      },
      emphasis: {
        label: { show: !0, color: '#6f778d' },
        itemStyle: { color: '#316BF3' },
        controlStyle: { color: '#316BF3', borderColor: '#316BF3', borderWidth: 2 },
      },
      progress: {
        lineStyle: { color: '#316BF3' },
        itemStyle: { color: '#316BF3' },
        label: { color: '#6f778d' },
      },
      data: [],
    })),
    e
  );
})(bo);
te(Xl, sl.prototype);
const np = Xl;
var ip = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (e.type = 'timeline'), e;
})(ae);
const op = ip;
var sp = (function (a) {
  k(e, a);
  function e(t, r, n, i) {
    var o = a.call(this, t, r, n) || this;
    return (o.type = i || 'value'), o;
  }
  return (
    (e.prototype.getLabelModel = function () {
      return this.model.getModel('label');
    }),
    (e.prototype.isHorizontal = function () {
      return this.model.get('orient') === 'horizontal';
    }),
    e
  );
})(ee);
const lp = sp;
var Ir = Math.PI,
  wo = bt(),
  up = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.init = function (t, r) {
        this.api = r;
      }),
      (e.prototype.render = function (t, r, n) {
        if (
          ((this.model = t),
          (this.api = n),
          (this.ecModel = r),
          this.group.removeAll(),
          t.get('show', !0))
        ) {
          var i = this._layout(t, n),
            o = this._createGroup('_mainGroup'),
            s = this._createGroup('_labelGroup'),
            l = (this._axis = this._createAxis(i, t));
          (t.formatTooltip = function (u) {
            var h = l.scale.getLabel({ value: u });
            return kt('nameValue', { noName: !0, value: h });
          }),
            I(
              ['AxisLine', 'AxisTick', 'Control', 'CurrentPointer'],
              function (u) {
                this['_render' + u](i, o, l, t);
              },
              this,
            ),
            this._renderAxisLabel(i, s, l, t),
            this._position(i, t);
        }
        this._doPlayStop(), this._updateTicksStatus();
      }),
      (e.prototype.remove = function () {
        this._clearTimer(), this.group.removeAll();
      }),
      (e.prototype.dispose = function () {
        this._clearTimer();
      }),
      (e.prototype._layout = function (t, r) {
        var n = t.get(['label', 'position']),
          i = t.get('orient'),
          o = vp(t, r),
          s;
        n == null || n === 'auto'
          ? (s =
              i === 'horizontal'
                ? o.y + o.height / 2 < r.getHeight() / 2
                  ? '-'
                  : '+'
                : o.x + o.width / 2 < r.getWidth() / 2
                ? '+'
                : '-')
          : tt(n)
          ? (s = { horizontal: { top: '-', bottom: '+' }, vertical: { left: '-', right: '+' } }[i][
              n
            ])
          : (s = n);
        var l = { horizontal: 'center', vertical: s >= 0 || s === '+' ? 'left' : 'right' },
          u = { horizontal: s >= 0 || s === '+' ? 'top' : 'bottom', vertical: 'middle' },
          h = { horizontal: 0, vertical: Ir / 2 },
          v = i === 'vertical' ? o.height : o.width,
          c = t.getModel('controlStyle'),
          f = c.get('show', !0),
          d = f ? c.get('itemSize') : 0,
          p = f ? c.get('itemGap') : 0,
          g = d + p,
          y = t.get(['label', 'rotate']) || 0;
        y = (y * Ir) / 180;
        var m,
          x,
          S,
          b = c.get('position', !0),
          w = f && c.get('showPlayBtn', !0),
          _ = f && c.get('showPrevBtn', !0),
          A = f && c.get('showNextBtn', !0),
          C = 0,
          D = v;
        b === 'left' || b === 'bottom'
          ? (w && ((m = [0, 0]), (C += g)),
            _ && ((x = [C, 0]), (C += g)),
            A && ((S = [D - d, 0]), (D -= g)))
          : (w && ((m = [D - d, 0]), (D -= g)),
            _ && ((x = [0, 0]), (C += g)),
            A && ((S = [D - d, 0]), (D -= g)));
        var T = [C, D];
        return (
          t.get('inverse') && T.reverse(),
          {
            viewRect: o,
            mainLength: v,
            orient: i,
            rotation: h[i],
            labelRotation: y,
            labelPosOpt: s,
            labelAlign: t.get(['label', 'align']) || l[i],
            labelBaseline:
              t.get(['label', 'verticalAlign']) || t.get(['label', 'baseline']) || u[i],
            playPosition: m,
            prevBtnPosition: x,
            nextBtnPosition: S,
            axisExtent: T,
            controlSize: d,
            controlGap: p,
          }
        );
      }),
      (e.prototype._position = function (t, r) {
        var n = this._mainGroup,
          i = this._labelGroup,
          o = t.viewRect;
        if (t.orient === 'vertical') {
          var s = ja(),
            l = o.x,
            u = o.y + o.height;
          Be(s, s, [-l, -u]),
            Gn(s, s, -Ir / 2),
            Be(s, s, [l, u]),
            (o = o.clone()),
            o.applyTransform(s);
        }
        var h = m(o),
          v = m(n.getBoundingRect()),
          c = m(i.getBoundingRect()),
          f = [n.x, n.y],
          d = [i.x, i.y];
        d[0] = f[0] = h[0][0];
        var p = t.labelPosOpt;
        if (p == null || tt(p)) {
          var g = p === '+' ? 0 : 1;
          x(f, v, h, 1, g), x(d, c, h, 1, 1 - g);
        } else {
          var g = p >= 0 ? 0 : 1;
          x(f, v, h, 1, g), (d[1] = f[1] + p);
        }
        n.setPosition(f), i.setPosition(d), (n.rotation = i.rotation = t.rotation), y(n), y(i);
        function y(S) {
          (S.originX = h[0][0] - S.x), (S.originY = h[1][0] - S.y);
        }
        function m(S) {
          return [
            [S.x, S.x + S.width],
            [S.y, S.y + S.height],
          ];
        }
        function x(S, b, w, _, A) {
          S[_] += w[_][A] - b[_][A];
        }
      }),
      (e.prototype._createAxis = function (t, r) {
        var n = r.getData(),
          i = r.get('axisType'),
          o = hp(r, i);
        o.getTicks = function () {
          return n.mapArray(['value'], function (u) {
            return { value: u };
          });
        };
        var s = n.getDataExtent('value');
        o.setExtent(s[0], s[1]), o.calcNiceTicks();
        var l = new lp('value', o, t.axisExtent, i);
        return (l.model = r), l;
      }),
      (e.prototype._createGroup = function (t) {
        var r = (this[t] = new K());
        return this.group.add(r), r;
      }),
      (e.prototype._renderAxisLine = function (t, r, n, i) {
        var o = n.getExtent();
        if (i.get(['lineStyle', 'show'])) {
          var s = new Xt({
            shape: { x1: o[0], y1: 0, x2: o[1], y2: 0 },
            style: W({ lineCap: 'round' }, i.getModel('lineStyle').getLineStyle()),
            silent: !0,
            z2: 1,
          });
          r.add(s);
          var l = (this._progressLine = new Xt({
            shape: {
              x1: o[0],
              x2: this._currentPointer ? this._currentPointer.x : o[0],
              y1: 0,
              y2: 0,
            },
            style: nt(
              { lineCap: 'round', lineWidth: s.style.lineWidth },
              i.getModel(['progress', 'lineStyle']).getLineStyle(),
            ),
            silent: !0,
            z2: 1,
          }));
          r.add(l);
        }
      }),
      (e.prototype._renderAxisTick = function (t, r, n, i) {
        var o = this,
          s = i.getData(),
          l = n.scale.getTicks();
        (this._tickSymbols = []),
          I(l, function (u) {
            var h = n.dataToCoord(u.value),
              v = s.getItemModel(u.value),
              c = v.getModel('itemStyle'),
              f = v.getModel(['emphasis', 'itemStyle']),
              d = v.getModel(['progress', 'itemStyle']),
              p = { x: h, y: 0, onclick: U(o._changeTimeline, o, u.value) },
              g = _o(v, c, r, p);
            (g.ensureState('emphasis').style = f.getItemStyle()),
              (g.ensureState('progress').style = d.getItemStyle()),
              Ea(g);
            var y = lt(g);
            v.get('tooltip')
              ? ((y.dataIndex = u.value), (y.dataModel = i))
              : (y.dataIndex = y.dataModel = null),
              o._tickSymbols.push(g);
          });
      }),
      (e.prototype._renderAxisLabel = function (t, r, n, i) {
        var o = this,
          s = n.getLabelModel();
        if (s.get('show')) {
          var l = i.getData(),
            u = n.getViewLabels();
          (this._tickLabels = []),
            I(u, function (h) {
              var v = h.tickValue,
                c = l.getItemModel(v),
                f = c.getModel('label'),
                d = c.getModel(['emphasis', 'label']),
                p = c.getModel(['progress', 'label']),
                g = n.dataToCoord(h.tickValue),
                y = new gt({
                  x: g,
                  y: 0,
                  rotation: t.labelRotation - t.rotation,
                  onclick: U(o._changeTimeline, o, v),
                  silent: !1,
                  style: yt(f, {
                    text: h.formattedLabel,
                    align: t.labelAlign,
                    verticalAlign: t.labelBaseline,
                  }),
                });
              (y.ensureState('emphasis').style = yt(d)),
                (y.ensureState('progress').style = yt(p)),
                r.add(y),
                Ea(y),
                (wo(y).dataIndex = v),
                o._tickLabels.push(y);
            });
        }
      }),
      (e.prototype._renderControl = function (t, r, n, i) {
        var o = t.controlSize,
          s = t.rotation,
          l = i.getModel('controlStyle').getItemStyle(),
          u = i.getModel(['emphasis', 'controlStyle']).getItemStyle(),
          h = i.getPlayState(),
          v = i.get('inverse', !0);
        c(t.nextBtnPosition, 'next', U(this._changeTimeline, this, v ? '-' : '+')),
          c(t.prevBtnPosition, 'prev', U(this._changeTimeline, this, v ? '+' : '-')),
          c(t.playPosition, h ? 'stop' : 'play', U(this._handlePlayClick, this, !h), !0);
        function c(f, d, p, g) {
          if (f) {
            var y = Oh(Dt(i.get(['controlStyle', d + 'BtnSize']), o), o),
              m = [0, -y / 2, y, y],
              x = cp(i, d + 'Icon', m, {
                x: f[0],
                y: f[1],
                originX: o / 2,
                originY: 0,
                rotation: g ? -s : 0,
                rectHover: !0,
                style: l,
                onclick: p,
              });
            (x.ensureState('emphasis').style = u), r.add(x), Ea(x);
          }
        }
      }),
      (e.prototype._renderCurrentPointer = function (t, r, n, i) {
        var o = i.getData(),
          s = i.getCurrentIndex(),
          l = o.getItemModel(s).getModel('checkpointStyle'),
          u = this,
          h = {
            onCreate: function (v) {
              (v.draggable = !0),
                (v.drift = U(u._handlePointerDrag, u)),
                (v.ondragend = U(u._handlePointerDragend, u)),
                Ao(v, u._progressLine, s, n, i, !0);
            },
            onUpdate: function (v) {
              Ao(v, u._progressLine, s, n, i);
            },
          };
        this._currentPointer = _o(l, l, this._mainGroup, {}, this._currentPointer, h);
      }),
      (e.prototype._handlePlayClick = function (t) {
        this._clearTimer(),
          this.api.dispatchAction({ type: 'timelinePlayChange', playState: t, from: this.uid });
      }),
      (e.prototype._handlePointerDrag = function (t, r, n) {
        this._clearTimer(), this._pointerChangeTimeline([n.offsetX, n.offsetY]);
      }),
      (e.prototype._handlePointerDragend = function (t) {
        this._pointerChangeTimeline([t.offsetX, t.offsetY], !0);
      }),
      (e.prototype._pointerChangeTimeline = function (t, r) {
        var n = this._toAxisCoord(t)[0],
          i = this._axis,
          o = ne(i.getExtent().slice());
        n > o[1] && (n = o[1]),
          n < o[0] && (n = o[0]),
          (this._currentPointer.x = n),
          this._currentPointer.markRedraw();
        var s = this._progressLine;
        s && ((s.shape.x2 = n), s.dirty());
        var l = this._findNearestTick(n),
          u = this.model;
        (r || (l !== u.getCurrentIndex() && u.get('realtime'))) && this._changeTimeline(l);
      }),
      (e.prototype._doPlayStop = function () {
        var t = this;
        this._clearTimer(),
          this.model.getPlayState() &&
            (this._timer = setTimeout(function () {
              var r = t.model;
              t._changeTimeline(r.getCurrentIndex() + (r.get('rewind', !0) ? -1 : 1));
            }, this.model.get('playInterval')));
      }),
      (e.prototype._toAxisCoord = function (t) {
        var r = this._mainGroup.getLocalTransform();
        return ea(t, r, !0);
      }),
      (e.prototype._findNearestTick = function (t) {
        var r = this.model.getData(),
          n = 1 / 0,
          i,
          o = this._axis;
        return (
          r.each(['value'], function (s, l) {
            var u = o.dataToCoord(s),
              h = Math.abs(u - t);
            h < n && ((n = h), (i = l));
          }),
          i
        );
      }),
      (e.prototype._clearTimer = function () {
        this._timer && (clearTimeout(this._timer), (this._timer = null));
      }),
      (e.prototype._changeTimeline = function (t) {
        var r = this.model.getCurrentIndex();
        t === '+' ? (t = r + 1) : t === '-' && (t = r - 1),
          this.api.dispatchAction({ type: 'timelineChange', currentIndex: t, from: this.uid });
      }),
      (e.prototype._updateTicksStatus = function () {
        var t = this.model.getCurrentIndex(),
          r = this._tickSymbols,
          n = this._tickLabels;
        if (r) for (var i = 0; i < r.length; i++) r && r[i] && r[i].toggleState('progress', i < t);
        if (n)
          for (var i = 0; i < n.length; i++)
            n && n[i] && n[i].toggleState('progress', wo(n[i]).dataIndex <= t);
      }),
      (e.type = 'timeline.slider'),
      e
    );
  })(op);
function hp(a, e) {
  if (((e = e || a.get('type')), e))
    switch (e) {
      case 'category':
        return new $h({ ordinalMeta: a.getCategories(), extent: [1 / 0, -1 / 0] });
      case 'time':
        return new Wh({ locale: a.ecModel.getLocaleModel(), useUTC: a.ecModel.get('useUTC') });
      default:
        return new dn();
    }
}
function vp(a, e) {
  return re(
    a.getBoxLayoutParams(),
    { width: e.getWidth(), height: e.getHeight() },
    a.get('padding'),
  );
}
function cp(a, e, t, r) {
  var n = r.style,
    i = Fh(a.get(['controlStyle', e]), r || {}, new jt(t[0], t[1], t[2], t[3]));
  return n && i.setStyle(n), i;
}
function _o(a, e, t, r, n, i) {
  var o = e.get('color');
  if (n) n.setColor(o), t.add(n), i && i.onUpdate(n);
  else {
    var s = a.get('symbol');
    (n = Wt(s, -1, -1, 2, 2, o)), n.setStyle('strokeNoScale', !0), t.add(n), i && i.onCreate(n);
  }
  var l = e.getItemStyle(['color']);
  n.setStyle(l), (r = Gt({ rectHover: !0, z2: 100 }, r, !0));
  var u = rr(a.get('symbolSize'));
  (r.scaleX = u[0] / 2), (r.scaleY = u[1] / 2);
  var h = nr(a.get('symbolOffset'), u);
  h && ((r.x = (r.x || 0) + h[0]), (r.y = (r.y || 0) + h[1]));
  var v = a.get('symbolRotate');
  return (r.rotation = ((v || 0) * Math.PI) / 180 || 0), n.attr(r), n.updateTransform(), n;
}
function Ao(a, e, t, r, n, i) {
  if (!a.dragging) {
    var o = n.getModel('checkpointStyle'),
      s = r.dataToCoord(n.getData().get('value', t));
    if (i || !o.get('animation', !0)) a.attr({ x: s, y: 0 }), e && e.attr({ shape: { x2: s } });
    else {
      var l = { duration: o.get('animationDuration', !0), easing: o.get('animationEasing', !0) };
      a.stopAnimation(null, !0),
        a.animateTo({ x: s, y: 0 }, l),
        e && e.animateTo({ shape: { x2: s } }, l);
    }
  }
}
const fp = up;
function dp(a) {
  a.registerAction(
    { type: 'timelineChange', event: 'timelineChanged', update: 'prepareAndUpdate' },
    function (e, t, r) {
      var n = t.getComponent('timeline');
      return (
        n &&
          e.currentIndex != null &&
          (n.setCurrentIndex(e.currentIndex),
          !n.get('loop', !0) &&
            n.isIndexMax() &&
            n.getPlayState() &&
            (n.setPlayState(!1),
            r.dispatchAction({ type: 'timelinePlayChange', playState: !1, from: e.from }))),
        t.resetOption('timeline', { replaceMerge: n.get('replaceMerge', !0) }),
        nt({ currentIndex: n.option.currentIndex }, e)
      );
    },
  ),
    a.registerAction(
      { type: 'timelinePlayChange', event: 'timelinePlayChanged', update: 'update' },
      function (e, t) {
        var r = t.getComponent('timeline');
        r && e.playState != null && r.setPlayState(e.playState);
      },
    );
}
function pp(a) {
  var e = a && a.timeline;
  H(e) || (e = e ? [e] : []),
    I(e, function (t) {
      t && gp(t);
    });
}
function gp(a) {
  var e = a.type,
    t = { number: 'value', time: 'time' };
  if ((t[e] && ((a.axisType = t[e]), delete a.type), Do(a), Ae(a, 'controlPosition'))) {
    var r = a.controlStyle || (a.controlStyle = {});
    Ae(r, 'position') || (r.position = a.controlPosition),
      r.position === 'none' && !Ae(r, 'show') && ((r.show = !1), delete r.position),
      delete a.controlPosition;
  }
  I(a.data || [], function (n) {
    Le(n) && !H(n) && (!Ae(n, 'value') && Ae(n, 'name') && (n.value = n.name), Do(n));
  });
}
function Do(a) {
  var e = a.itemStyle || (a.itemStyle = {}),
    t = e.emphasis || (e.emphasis = {}),
    r = a.label || a.label || {},
    n = r.normal || (r.normal = {}),
    i = { normal: 1, emphasis: 1 };
  I(r, function (o, s) {
    !i[s] && !Ae(n, s) && (n[s] = o);
  }),
    t.label && !Ae(r, 'emphasis') && ((r.emphasis = t.label), delete t.label);
}
function Ae(a, e) {
  return a.hasOwnProperty(e);
}
function yp(a) {
  a.registerComponentModel(np),
    a.registerComponentView(fp),
    a.registerSubTypeDefaulter('timeline', function () {
      return 'slider';
    }),
    dp(a),
    a.registerPreprocessor(pp);
}
function ri(a, e) {
  if (!a) return !1;
  for (var t = H(a) ? a : [a], r = 0; r < t.length; r++) if (t[r] && t[r][e]) return !0;
  return !1;
}
function _a(a) {
  Hn(a, 'label', ['show']);
}
var Aa = bt(),
  ql = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t.createdBySelf = !1), t;
    }
    return (
      (e.prototype.init = function (t, r, n) {
        this.mergeDefaultAndTheme(t, n), this._mergeOption(t, n, !1, !0);
      }),
      (e.prototype.isAnimationEnabled = function () {
        if (Hh.node) return !1;
        var t = this.__hostSeries;
        return this.getShallow('animation') && t && t.isAnimationEnabled();
      }),
      (e.prototype.mergeOption = function (t, r) {
        this._mergeOption(t, r, !1, !1);
      }),
      (e.prototype._mergeOption = function (t, r, n, i) {
        var o = this.mainType;
        n ||
          r.eachSeries(function (s) {
            var l = s.get(this.mainType, !0),
              u = Aa(s)[o];
            if (!l || !l.data) {
              Aa(s)[o] = null;
              return;
            }
            u
              ? u._mergeOption(l, r, !0)
              : (i && _a(l),
                I(l.data, function (h) {
                  h instanceof Array ? (_a(h[0]), _a(h[1])) : _a(h);
                }),
                (u = this.createMarkerModelFromSeries(l, this, r)),
                W(u, {
                  mainType: this.mainType,
                  seriesIndex: s.seriesIndex,
                  name: s.name,
                  createdBySelf: !0,
                }),
                (u.__hostSeries = s)),
              (Aa(s)[o] = u);
          }, this);
      }),
      (e.prototype.formatTooltip = function (t, r, n) {
        var i = this.getData(),
          o = this.getRawValue(t),
          s = i.getName(t);
        return kt('section', {
          header: this.name,
          blocks: [kt('nameValue', { name: s, value: o, noName: !s, noValue: o == null })],
        });
      }),
      (e.prototype.getData = function () {
        return this._data;
      }),
      (e.prototype.setData = function (t) {
        this._data = t;
      }),
      (e.getMarkerModelFromSeries = function (t, r) {
        return Aa(t)[r];
      }),
      (e.type = 'marker'),
      (e.dependencies = ['series', 'grid', 'polar', 'geo']),
      e
    );
  })($t);
te(ql, sl.prototype);
const de = ql;
var mp = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.createMarkerModelFromSeries = function (t, r, n) {
      return new e(t, r, n);
    }),
    (e.type = 'markPoint'),
    (e.defaultOption = {
      z: 5,
      symbol: 'pin',
      symbolSize: 50,
      tooltip: { trigger: 'item' },
      label: { show: !0, position: 'inside' },
      itemStyle: { borderWidth: 2 },
      emphasis: { label: { show: !0 } },
    }),
    e
  );
})(de);
const xp = mp;
function Cn(a) {
  return !(isNaN(parseFloat(a.x)) && isNaN(parseFloat(a.y)));
}
function Sp(a) {
  return !isNaN(parseFloat(a.x)) && !isNaN(parseFloat(a.y));
}
function Da(a, e, t, r, n, i) {
  var o = [],
    s = js(e, r),
    l = s ? e.getCalculationInfo('stackResultDimension') : r,
    u = ni(e, l, a),
    h = e.indicesOfNearest(l, u)[0];
  (o[n] = e.get(t, h)), (o[i] = e.get(l, h));
  var v = e.get(r, h),
    c = Zh(e.get(r, h));
  return (c = Math.min(c, 20)), c >= 0 && (o[i] = +o[i].toFixed(c)), [o, v];
}
var Pr = {
  min: it(Da, 'min'),
  max: it(Da, 'max'),
  average: it(Da, 'average'),
  median: it(Da, 'median'),
};
function oa(a, e) {
  if (e) {
    var t = a.getData(),
      r = a.coordinateSystem,
      n = r.dimensions;
    if (!Sp(e) && !H(e.coord) && r) {
      var i = Kl(e, t, r, a);
      if (((e = Lt(e)), e.type && Pr[e.type] && i.baseAxis && i.valueAxis)) {
        var o = Ct(n, i.baseAxis.dim),
          s = Ct(n, i.valueAxis.dim),
          l = Pr[e.type](t, i.baseDataDim, i.valueDataDim, o, s);
        (e.coord = l[0]), (e.value = l[1]);
      } else
        e.coord = [
          e.xAxis != null ? e.xAxis : e.radiusAxis,
          e.yAxis != null ? e.yAxis : e.angleAxis,
        ];
    }
    if (e.coord == null) e.coord = [];
    else
      for (var u = e.coord, h = 0; h < 2; h++)
        Pr[u[h]] && (u[h] = ni(t, t.mapDimension(n[h]), u[h]));
    return e;
  }
}
function Kl(a, e, t, r) {
  var n = {};
  return (
    a.valueIndex != null || a.valueDim != null
      ? ((n.valueDataDim = a.valueIndex != null ? e.getDimension(a.valueIndex) : a.valueDim),
        (n.valueAxis = t.getAxis(bp(r, n.valueDataDim))),
        (n.baseAxis = t.getOtherAxis(n.valueAxis)),
        (n.baseDataDim = e.mapDimension(n.baseAxis.dim)))
      : ((n.baseAxis = r.getBaseAxis()),
        (n.valueAxis = t.getOtherAxis(n.baseAxis)),
        (n.baseDataDim = e.mapDimension(n.baseAxis.dim)),
        (n.valueDataDim = e.mapDimension(n.valueAxis.dim))),
    n
  );
}
function bp(a, e) {
  var t = a.getData().getDimensionInfo(e);
  return t && t.coordDim;
}
function sa(a, e) {
  return a && a.containData && e.coord && !Cn(e) ? a.containData(e.coord) : !0;
}
function wp(a, e, t) {
  return a && a.containZone && e.coord && t.coord && !Cn(e) && !Cn(t)
    ? a.containZone(e.coord, t.coord)
    : !0;
}
function jl(a, e) {
  return a
    ? function (t, r, n, i) {
        var o = i < 2 ? t.coord && t.coord[i] : t.value;
        return Ba(o, e[i]);
      }
    : function (t, r, n, i) {
        return Ba(t.value, e[i]);
      };
}
function ni(a, e, t) {
  if (t === 'average') {
    var r = 0,
      n = 0;
    return (
      a.each(e, function (i, o) {
        isNaN(i) || ((r += i), n++);
      }),
      r / n
    );
  } else return t === 'median' ? a.getMedian(e) : a.getDataExtent(e)[t === 'max' ? 1 : 0];
}
var Er = bt(),
  _p = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.init = function () {
        this.markerGroupMap = Kt();
      }),
      (e.prototype.render = function (t, r, n) {
        var i = this,
          o = this.markerGroupMap;
        o.each(function (s) {
          Er(s).keep = !1;
        }),
          r.eachSeries(function (s) {
            var l = de.getMarkerModelFromSeries(s, i.type);
            l && i.renderSeries(s, l, r, n);
          }),
          o.each(function (s) {
            !Er(s).keep && i.group.remove(s.group);
          });
      }),
      (e.prototype.markKeep = function (t) {
        Er(t).keep = !0;
      }),
      (e.prototype.toggleBlurSeries = function (t, r) {
        var n = this;
        I(t, function (i) {
          var o = de.getMarkerModelFromSeries(i, n.type);
          if (o) {
            var s = o.getData();
            s.eachItemGraphicEl(function (l) {
              l && (r ? Uh(l) : Yh(l));
            });
          }
        });
      }),
      (e.type = 'marker'),
      e
    );
  })(ae);
const ii = _p;
function To(a, e, t) {
  var r = e.coordinateSystem;
  a.each(function (n) {
    var i = a.getItemModel(n),
      o,
      s = z(i.get('x'), t.getWidth()),
      l = z(i.get('y'), t.getHeight());
    if (!isNaN(s) && !isNaN(l)) o = [s, l];
    else if (e.getMarkerPosition) o = e.getMarkerPosition(a.getValues(a.dimensions, n));
    else if (r) {
      var u = a.get(r.dimensions[0], n),
        h = a.get(r.dimensions[1], n);
      o = r.dataToPoint([u, h]);
    }
    isNaN(s) || (o[0] = s), isNaN(l) || (o[1] = l), a.setItemLayout(n, o);
  });
}
var Ap = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.updateTransform = function (t, r, n) {
      r.eachSeries(function (i) {
        var o = de.getMarkerModelFromSeries(i, 'markPoint');
        o && (To(o.getData(), i, n), this.markerGroupMap.get(i.id).updateLayout());
      }, this);
    }),
    (e.prototype.renderSeries = function (t, r, n, i) {
      var o = t.coordinateSystem,
        s = t.id,
        l = t.getData(),
        u = this.markerGroupMap,
        h = u.get(s) || u.set(s, new ir()),
        v = Dp(o, t, r);
      r.setData(v),
        To(r.getData(), t, i),
        v.each(function (c) {
          var f = v.getItemModel(c),
            d = f.getShallow('symbol'),
            p = f.getShallow('symbolSize'),
            g = f.getShallow('symbolRotate'),
            y = f.getShallow('symbolOffset'),
            m = f.getShallow('symbolKeepAspect');
          if (st(d) || st(p) || st(g) || st(y)) {
            var x = r.getRawValue(c),
              S = r.getDataParams(c);
            st(d) && (d = d(x, S)),
              st(p) && (p = p(x, S)),
              st(g) && (g = g(x, S)),
              st(y) && (y = y(x, S));
          }
          var b = f.getModel('itemStyle').getItemStyle(),
            w = Zn(l, 'color');
          b.fill || (b.fill = w),
            v.setItemVisual(c, {
              symbol: d,
              symbolSize: p,
              symbolRotate: g,
              symbolOffset: y,
              symbolKeepAspect: m,
              style: b,
            });
        }),
        h.updateData(v),
        this.group.add(h.group),
        v.eachItemGraphicEl(function (c) {
          c.traverse(function (f) {
            lt(f).dataModel = r;
          });
        }),
        this.markKeep(h),
        (h.group.silent = r.get('silent') || t.get('silent'));
    }),
    (e.type = 'markPoint'),
    e
  );
})(ii);
function Dp(a, e, t) {
  var r;
  a
    ? (r = O(a && a.dimensions, function (s) {
        var l = e.getData().getDimensionInfo(e.getData().mapDimension(s)) || {};
        return W(W({}, l), { name: s, ordinalMeta: null });
      }))
    : (r = [{ name: 'value', type: 'float' }]);
  var n = new Mt(r, t),
    i = O(t.get('data'), it(oa, e));
  a && (i = Ft(i, it(sa, a)));
  var o = jl(!!a, r);
  return n.initData(i, null, o), n;
}
const Tp = Ap;
function Cp(a) {
  a.registerComponentModel(xp),
    a.registerComponentView(Tp),
    a.registerPreprocessor(function (e) {
      ri(e.series, 'markPoint') && (e.markPoint = e.markPoint || {});
    });
}
var Mp = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.createMarkerModelFromSeries = function (t, r, n) {
      return new e(t, r, n);
    }),
    (e.type = 'markLine'),
    (e.defaultOption = {
      z: 5,
      symbol: ['circle', 'arrow'],
      symbolSize: [8, 16],
      symbolOffset: 0,
      precision: 2,
      tooltip: { trigger: 'item' },
      label: { show: !0, position: 'end', distance: 5 },
      lineStyle: { type: 'dashed' },
      emphasis: { label: { show: !0 }, lineStyle: { width: 3 } },
      animationEasing: 'linear',
    }),
    e
  );
})(de);
const Lp = Mp;
var Co = Xt.prototype,
  Rr = ll.prototype,
  Ql = (function () {
    function a() {
      (this.x1 = 0), (this.y1 = 0), (this.x2 = 0), (this.y2 = 0), (this.percent = 1);
    }
    return a;
  })();
(function (a) {
  k(e, a);
  function e() {
    return (a !== null && a.apply(this, arguments)) || this;
  }
  return e;
})(Ql);
function kr(a) {
  return isNaN(+a.cpx1) || isNaN(+a.cpy1);
}
var Ip = (function (a) {
  k(e, a);
  function e(t) {
    var r = a.call(this, t) || this;
    return (r.type = 'ec-line'), r;
  }
  return (
    (e.prototype.getDefaultStyle = function () {
      return { stroke: '#000', fill: null };
    }),
    (e.prototype.getDefaultShape = function () {
      return new Ql();
    }),
    (e.prototype.buildPath = function (t, r) {
      kr(r) ? Co.buildPath.call(this, t, r) : Rr.buildPath.call(this, t, r);
    }),
    (e.prototype.pointAt = function (t) {
      return kr(this.shape) ? Co.pointAt.call(this, t) : Rr.pointAt.call(this, t);
    }),
    (e.prototype.tangentAt = function (t) {
      var r = this.shape,
        n = kr(r) ? [r.x2 - r.x1, r.y2 - r.y1] : Rr.tangentAt.call(this, t);
      return pa(n, n);
    }),
    e
  );
})(Vt);
const Pp = Ip;
var Nr = ['fromSymbol', 'toSymbol'];
function Mo(a) {
  return '_' + a + 'Type';
}
function Lo(a, e, t) {
  var r = e.getItemVisual(t, a);
  if (!(!r || r === 'none')) {
    var n = e.getItemVisual(t, a + 'Size'),
      i = e.getItemVisual(t, a + 'Rotate'),
      o = e.getItemVisual(t, a + 'Offset'),
      s = e.getItemVisual(t, a + 'KeepAspect'),
      l = rr(n),
      u = nr(o || 0, l),
      h = Wt(r, -l[0] / 2 + u[0], -l[1] / 2 + u[1], l[0], l[1], null, s);
    return (
      (h.__specifiedRotation = i == null || isNaN(i) ? void 0 : (+i * Math.PI) / 180 || 0),
      (h.name = a),
      h
    );
  }
}
function Ep(a) {
  var e = new Pp({ name: 'line', subPixelOptimize: !0 });
  return Mn(e.shape, a), e;
}
function Mn(a, e) {
  (a.x1 = e[0][0]), (a.y1 = e[0][1]), (a.x2 = e[1][0]), (a.y2 = e[1][1]), (a.percent = 1);
  var t = e[2];
  t ? ((a.cpx1 = t[0]), (a.cpy1 = t[1])) : ((a.cpx1 = NaN), (a.cpy1 = NaN));
}
var Rp = (function (a) {
  k(e, a);
  function e(t, r, n) {
    var i = a.call(this) || this;
    return i._createLine(t, r, n), i;
  }
  return (
    (e.prototype._createLine = function (t, r, n) {
      var i = t.hostModel,
        o = t.getItemLayout(r),
        s = Ep(o);
      (s.shape.percent = 0),
        Qt(s, { shape: { percent: 1 } }, i, r),
        this.add(s),
        I(
          Nr,
          function (l) {
            var u = Lo(l, t, r);
            this.add(u), (this[Mo(l)] = t.getItemVisual(r, l));
          },
          this,
        ),
        this._updateCommonStl(t, r, n);
    }),
    (e.prototype.updateData = function (t, r, n) {
      var i = t.hostModel,
        o = this.childOfName('line'),
        s = t.getItemLayout(r),
        l = { shape: {} };
      Mn(l.shape, s),
        ht(o, l, i, r),
        I(
          Nr,
          function (u) {
            var h = t.getItemVisual(r, u),
              v = Mo(u);
            if (this[v] !== h) {
              this.remove(this.childOfName(u));
              var c = Lo(u, t, r);
              this.add(c);
            }
            this[v] = h;
          },
          this,
        ),
        this._updateCommonStl(t, r, n);
    }),
    (e.prototype.getLinePath = function () {
      return this.childAt(0);
    }),
    (e.prototype._updateCommonStl = function (t, r, n) {
      var i = t.hostModel,
        o = this.childOfName('line'),
        s = n && n.emphasisLineStyle,
        l = n && n.blurLineStyle,
        u = n && n.selectLineStyle,
        h = n && n.labelStatesModels,
        v = n && n.emphasisDisabled,
        c = n && n.focus,
        f = n && n.blurScope;
      if (!n || t.hasItemOption) {
        var d = t.getItemModel(r),
          p = d.getModel('emphasis');
        (s = p.getModel('lineStyle').getLineStyle()),
          (l = d.getModel(['blur', 'lineStyle']).getLineStyle()),
          (u = d.getModel(['select', 'lineStyle']).getLineStyle()),
          (v = p.get('disabled')),
          (c = p.get('focus')),
          (f = p.get('blurScope')),
          (h = Nt(d));
      }
      var g = t.getItemVisual(r, 'style'),
        y = g.stroke;
      o.useStyle(g),
        (o.style.fill = null),
        (o.style.strokeNoScale = !0),
        (o.ensureState('emphasis').style = s),
        (o.ensureState('blur').style = l),
        (o.ensureState('select').style = u),
        I(
          Nr,
          function (w) {
            var _ = this.childOfName(w);
            if (_) {
              _.setColor(y), (_.style.opacity = g.opacity);
              for (var A = 0; A < pn.length; A++) {
                var C = pn[A],
                  D = o.getState(C);
                if (D) {
                  var T = D.style || {},
                    L = _.ensureState(C),
                    P = L.style || (L.style = {});
                  T.stroke != null && (P[_.__isEmptyBrush ? 'stroke' : 'fill'] = T.stroke),
                    T.opacity != null && (P.opacity = T.opacity);
                }
              }
              _.markRedraw();
            }
          },
          this,
        );
      var m = i.getRawValue(r);
      Jt(this, h, {
        labelDataIndex: r,
        labelFetcher: {
          getFormattedLabel: function (w, _) {
            return i.getFormattedLabel(w, _, t.dataType);
          },
        },
        inheritColor: y || '#000',
        defaultOpacity: g.opacity,
        defaultText: (m == null ? t.getName(r) : isFinite(m) ? Fn(m) : m) + '',
      });
      var x = this.getTextContent();
      if (x) {
        var S = h.normal;
        (x.__align = x.style.align),
          (x.__verticalAlign = x.style.verticalAlign),
          (x.__position = S.get('position') || 'middle');
        var b = S.get('distance');
        H(b) || (b = [b, b]), (x.__labelDistance = b);
      }
      this.setTextConfig({ position: null, local: !0, inside: !1 }), ft(this, c, f, v);
    }),
    (e.prototype.highlight = function () {
      Un(this);
    }),
    (e.prototype.downplay = function () {
      Yn(this);
    }),
    (e.prototype.updateLayout = function (t, r) {
      this.setLinePoints(t.getItemLayout(r));
    }),
    (e.prototype.setLinePoints = function (t) {
      var r = this.childOfName('line');
      Mn(r.shape, t), r.dirty();
    }),
    (e.prototype.beforeUpdate = function () {
      var t = this,
        r = t.childOfName('fromSymbol'),
        n = t.childOfName('toSymbol'),
        i = t.getTextContent();
      if (!r && !n && (!i || i.ignore)) return;
      for (var o = 1, s = this.parent; s; ) s.scaleX && (o /= s.scaleX), (s = s.parent);
      var l = t.childOfName('line');
      if (!this.__dirty && !l.__dirty) return;
      var u = l.shape.percent,
        h = l.pointAt(0),
        v = l.pointAt(u),
        c = Ne([], v, h);
      pa(c, c);
      function f(D, T) {
        var L = D.__specifiedRotation;
        if (L == null) {
          var P = l.tangentAt(T);
          D.attr('rotation', ((T === 1 ? -1 : 1) * Math.PI) / 2 - Math.atan2(P[1], P[0]));
        } else D.attr('rotation', L);
      }
      if (
        (r && (r.setPosition(h), f(r, 0), (r.scaleX = r.scaleY = o * u), r.markRedraw()),
        n && (n.setPosition(v), f(n, 1), (n.scaleX = n.scaleY = o * u), n.markRedraw()),
        i && !i.ignore)
      ) {
        (i.x = i.y = 0), (i.originX = i.originY = 0);
        var d = void 0,
          p = void 0,
          g = i.__labelDistance,
          y = g[0] * o,
          m = g[1] * o,
          x = u / 2,
          S = l.tangentAt(x),
          b = [S[1], -S[0]],
          w = l.pointAt(x);
        b[1] > 0 && ((b[0] = -b[0]), (b[1] = -b[1]));
        var _ = S[0] < 0 ? -1 : 1;
        if (i.__position !== 'start' && i.__position !== 'end') {
          var A = -Math.atan2(S[1], S[0]);
          v[0] < h[0] && (A = Math.PI + A), (i.rotation = A);
        }
        var C = void 0;
        switch (i.__position) {
          case 'insideStartTop':
          case 'insideMiddleTop':
          case 'insideEndTop':
          case 'middle':
            (C = -m), (p = 'bottom');
            break;
          case 'insideStartBottom':
          case 'insideMiddleBottom':
          case 'insideEndBottom':
            (C = m), (p = 'top');
            break;
          default:
            (C = 0), (p = 'middle');
        }
        switch (i.__position) {
          case 'end':
            (i.x = c[0] * y + v[0]),
              (i.y = c[1] * m + v[1]),
              (d = c[0] > 0.8 ? 'left' : c[0] < -0.8 ? 'right' : 'center'),
              (p = c[1] > 0.8 ? 'top' : c[1] < -0.8 ? 'bottom' : 'middle');
            break;
          case 'start':
            (i.x = -c[0] * y + h[0]),
              (i.y = -c[1] * m + h[1]),
              (d = c[0] > 0.8 ? 'right' : c[0] < -0.8 ? 'left' : 'center'),
              (p = c[1] > 0.8 ? 'bottom' : c[1] < -0.8 ? 'top' : 'middle');
            break;
          case 'insideStartTop':
          case 'insideStart':
          case 'insideStartBottom':
            (i.x = y * _ + h[0]),
              (i.y = h[1] + C),
              (d = S[0] < 0 ? 'right' : 'left'),
              (i.originX = -y * _),
              (i.originY = -C);
            break;
          case 'insideMiddleTop':
          case 'insideMiddle':
          case 'insideMiddleBottom':
          case 'middle':
            (i.x = w[0]), (i.y = w[1] + C), (d = 'center'), (i.originY = -C);
            break;
          case 'insideEndTop':
          case 'insideEnd':
          case 'insideEndBottom':
            (i.x = -y * _ + v[0]),
              (i.y = v[1] + C),
              (d = S[0] >= 0 ? 'right' : 'left'),
              (i.originX = y * _),
              (i.originY = -C);
            break;
        }
        (i.scaleX = i.scaleY = o),
          i.setStyle({ verticalAlign: i.__verticalAlign || p, align: i.__align || d });
      }
    }),
    e
  );
})(K);
const oi = Rp;
var kp = (function () {
  function a(e) {
    (this.group = new K()), (this._LineCtor = e || oi);
  }
  return (
    (a.prototype.updateData = function (e) {
      var t = this;
      this._progressiveEls = null;
      var r = this,
        n = r.group,
        i = r._lineData;
      (r._lineData = e), i || n.removeAll();
      var o = Io(e);
      e.diff(i)
        .add(function (s) {
          t._doAdd(e, s, o);
        })
        .update(function (s, l) {
          t._doUpdate(i, e, l, s, o);
        })
        .remove(function (s) {
          n.remove(i.getItemGraphicEl(s));
        })
        .execute();
    }),
    (a.prototype.updateLayout = function () {
      var e = this._lineData;
      e &&
        e.eachItemGraphicEl(function (t, r) {
          t.updateLayout(e, r);
        }, this);
    }),
    (a.prototype.incrementalPrepareUpdate = function (e) {
      (this._seriesScope = Io(e)), (this._lineData = null), this.group.removeAll();
    }),
    (a.prototype.incrementalUpdate = function (e, t) {
      this._progressiveEls = [];
      function r(s) {
        !s.isGroup && !Np(s) && ((s.incremental = !0), (s.ensureState('emphasis').hoverLayer = !0));
      }
      for (var n = e.start; n < e.end; n++) {
        var i = t.getItemLayout(n);
        if (Vr(i)) {
          var o = new this._LineCtor(t, n, this._seriesScope);
          o.traverse(r), this.group.add(o), t.setItemGraphicEl(n, o), this._progressiveEls.push(o);
        }
      }
    }),
    (a.prototype.remove = function () {
      this.group.removeAll();
    }),
    (a.prototype.eachRendered = function (e) {
      or(this._progressiveEls || this.group, e);
    }),
    (a.prototype._doAdd = function (e, t, r) {
      var n = e.getItemLayout(t);
      if (Vr(n)) {
        var i = new this._LineCtor(e, t, r);
        e.setItemGraphicEl(t, i), this.group.add(i);
      }
    }),
    (a.prototype._doUpdate = function (e, t, r, n, i) {
      var o = e.getItemGraphicEl(r);
      if (!Vr(t.getItemLayout(n))) {
        this.group.remove(o);
        return;
      }
      o ? o.updateData(t, n, i) : (o = new this._LineCtor(t, n, i)),
        t.setItemGraphicEl(n, o),
        this.group.add(o);
    }),
    a
  );
})();
function Np(a) {
  return a.animators && a.animators.length > 0;
}
function Io(a) {
  var e = a.hostModel,
    t = e.getModel('emphasis');
  return {
    lineStyle: e.getModel('lineStyle').getLineStyle(),
    emphasisLineStyle: t.getModel(['lineStyle']).getLineStyle(),
    blurLineStyle: e.getModel(['blur', 'lineStyle']).getLineStyle(),
    selectLineStyle: e.getModel(['select', 'lineStyle']).getLineStyle(),
    emphasisDisabled: t.get('disabled'),
    blurScope: t.get('blurScope'),
    focus: t.get('focus'),
    labelStatesModels: Nt(e),
  };
}
function Po(a) {
  return isNaN(a[0]) || isNaN(a[1]);
}
function Vr(a) {
  return a && !Po(a[0]) && !Po(a[1]);
}
const si = kp;
var Ta = bt(),
  Vp = function (a, e, t, r) {
    var n = a.getData(),
      i;
    if (H(r)) i = r;
    else {
      var o = r.type;
      if (
        o === 'min' ||
        o === 'max' ||
        o === 'average' ||
        o === 'median' ||
        r.xAxis != null ||
        r.yAxis != null
      ) {
        var s = void 0,
          l = void 0;
        if (r.yAxis != null || r.xAxis != null)
          (s = e.getAxis(r.yAxis != null ? 'y' : 'x')), (l = zt(r.yAxis, r.xAxis));
        else {
          var u = Kl(r, n, e, a);
          s = u.valueAxis;
          var h = Xh(n, u.valueDataDim);
          l = ni(n, h, o);
        }
        var v = s.dim === 'x' ? 0 : 1,
          c = 1 - v,
          f = Lt(r),
          d = { coord: [] };
        (f.type = null), (f.coord = []), (f.coord[c] = -1 / 0), (d.coord[c] = 1 / 0);
        var p = t.get('precision');
        p >= 0 && Ot(l) && (l = +l.toFixed(Math.min(p, 20))),
          (f.coord[v] = d.coord[v] = l),
          (i = [f, d, { type: o, valueIndex: r.valueIndex, value: l }]);
      } else i = [];
    }
    var g = [oa(a, i[0]), oa(a, i[1]), W({}, i[2])];
    return (g[2].type = g[2].type || null), Gt(g[2], g[0]), Gt(g[2], g[1]), g;
  };
function Ha(a) {
  return !isNaN(a) && !isFinite(a);
}
function Eo(a, e, t, r) {
  var n = 1 - a,
    i = r.dimensions[a];
  return Ha(e[n]) && Ha(t[n]) && e[a] === t[a] && r.getAxis(i).containData(e[a]);
}
function Bp(a, e) {
  if (a.type === 'cartesian2d') {
    var t = e[0].coord,
      r = e[1].coord;
    if (t && r && (Eo(1, t, r, a) || Eo(0, t, r, a))) return !0;
  }
  return sa(a, e[0]) && sa(a, e[1]);
}
function Br(a, e, t, r, n) {
  var i = r.coordinateSystem,
    o = a.getItemModel(e),
    s,
    l = z(o.get('x'), n.getWidth()),
    u = z(o.get('y'), n.getHeight());
  if (!isNaN(l) && !isNaN(u)) s = [l, u];
  else {
    if (r.getMarkerPosition) s = r.getMarkerPosition(a.getValues(a.dimensions, e));
    else {
      var h = i.dimensions,
        v = a.get(h[0], e),
        c = a.get(h[1], e);
      s = i.dataToPoint([v, c]);
    }
    if (sr(i, 'cartesian2d')) {
      var f = i.getAxis('x'),
        d = i.getAxis('y'),
        h = i.dimensions;
      Ha(a.get(h[0], e))
        ? (s[0] = f.toGlobalCoord(f.getExtent()[t ? 0 : 1]))
        : Ha(a.get(h[1], e)) && (s[1] = d.toGlobalCoord(d.getExtent()[t ? 0 : 1]));
    }
    isNaN(l) || (s[0] = l), isNaN(u) || (s[1] = u);
  }
  a.setItemLayout(e, s);
}
var zp = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.updateTransform = function (t, r, n) {
      r.eachSeries(function (i) {
        var o = de.getMarkerModelFromSeries(i, 'markLine');
        if (o) {
          var s = o.getData(),
            l = Ta(o).from,
            u = Ta(o).to;
          l.each(function (h) {
            Br(l, h, !0, i, n), Br(u, h, !1, i, n);
          }),
            s.each(function (h) {
              s.setItemLayout(h, [l.getItemLayout(h), u.getItemLayout(h)]);
            }),
            this.markerGroupMap.get(i.id).updateLayout();
        }
      }, this);
    }),
    (e.prototype.renderSeries = function (t, r, n, i) {
      var o = t.coordinateSystem,
        s = t.id,
        l = t.getData(),
        u = this.markerGroupMap,
        h = u.get(s) || u.set(s, new si());
      this.group.add(h.group);
      var v = Gp(o, t, r),
        c = v.from,
        f = v.to,
        d = v.line;
      (Ta(r).from = c), (Ta(r).to = f), r.setData(d);
      var p = r.get('symbol'),
        g = r.get('symbolSize'),
        y = r.get('symbolRotate'),
        m = r.get('symbolOffset');
      H(p) || (p = [p, p]),
        H(g) || (g = [g, g]),
        H(y) || (y = [y, y]),
        H(m) || (m = [m, m]),
        v.from.each(function (S) {
          x(c, S, !0), x(f, S, !1);
        }),
        d.each(function (S) {
          var b = d.getItemModel(S).getModel('lineStyle').getLineStyle();
          d.setItemLayout(S, [c.getItemLayout(S), f.getItemLayout(S)]),
            b.stroke == null && (b.stroke = c.getItemVisual(S, 'style').fill),
            d.setItemVisual(S, {
              fromSymbolKeepAspect: c.getItemVisual(S, 'symbolKeepAspect'),
              fromSymbolOffset: c.getItemVisual(S, 'symbolOffset'),
              fromSymbolRotate: c.getItemVisual(S, 'symbolRotate'),
              fromSymbolSize: c.getItemVisual(S, 'symbolSize'),
              fromSymbol: c.getItemVisual(S, 'symbol'),
              toSymbolKeepAspect: f.getItemVisual(S, 'symbolKeepAspect'),
              toSymbolOffset: f.getItemVisual(S, 'symbolOffset'),
              toSymbolRotate: f.getItemVisual(S, 'symbolRotate'),
              toSymbolSize: f.getItemVisual(S, 'symbolSize'),
              toSymbol: f.getItemVisual(S, 'symbol'),
              style: b,
            });
        }),
        h.updateData(d),
        v.line.eachItemGraphicEl(function (S) {
          (lt(S).dataModel = r),
            S.traverse(function (b) {
              lt(b).dataModel = r;
            });
        });
      function x(S, b, w) {
        var _ = S.getItemModel(b);
        Br(S, b, w, t, i);
        var A = _.getModel('itemStyle').getItemStyle();
        A.fill == null && (A.fill = Zn(l, 'color')),
          S.setItemVisual(b, {
            symbolKeepAspect: _.get('symbolKeepAspect'),
            symbolOffset: Dt(_.get('symbolOffset', !0), m[w ? 0 : 1]),
            symbolRotate: Dt(_.get('symbolRotate', !0), y[w ? 0 : 1]),
            symbolSize: Dt(_.get('symbolSize'), g[w ? 0 : 1]),
            symbol: Dt(_.get('symbol', !0), p[w ? 0 : 1]),
            style: A,
          });
      }
      this.markKeep(h), (h.group.silent = r.get('silent') || t.get('silent'));
    }),
    (e.type = 'markLine'),
    e
  );
})(ii);
function Gp(a, e, t) {
  var r;
  a
    ? (r = O(a && a.dimensions, function (u) {
        var h = e.getData().getDimensionInfo(e.getData().mapDimension(u)) || {};
        return W(W({}, h), { name: u, ordinalMeta: null });
      }))
    : (r = [{ name: 'value', type: 'float' }]);
  var n = new Mt(r, t),
    i = new Mt(r, t),
    o = new Mt([], t),
    s = O(t.get('data'), it(Vp, e, a, t));
  a && (s = Ft(s, it(Bp, a)));
  var l = jl(!!a, r);
  return (
    n.initData(
      O(s, function (u) {
        return u[0];
      }),
      null,
      l,
    ),
    i.initData(
      O(s, function (u) {
        return u[1];
      }),
      null,
      l,
    ),
    o.initData(
      O(s, function (u) {
        return u[2];
      }),
    ),
    (o.hasItemOption = !0),
    { from: n, to: i, line: o }
  );
}
const Op = zp;
function Wp(a) {
  a.registerComponentModel(Lp),
    a.registerComponentView(Op),
    a.registerPreprocessor(function (e) {
      ri(e.series, 'markLine') && (e.markLine = e.markLine || {});
    });
}
var $p = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.createMarkerModelFromSeries = function (t, r, n) {
      return new e(t, r, n);
    }),
    (e.type = 'markArea'),
    (e.defaultOption = {
      z: 1,
      tooltip: { trigger: 'item' },
      animation: !1,
      label: { show: !0, position: 'top' },
      itemStyle: { borderWidth: 0 },
      emphasis: { label: { show: !0, position: 'top' } },
    }),
    e
  );
})(de);
const Fp = $p;
var Ca = bt(),
  Hp = function (a, e, t, r) {
    var n = r[0],
      i = r[1];
    if (!(!n || !i)) {
      var o = oa(a, n),
        s = oa(a, i),
        l = o.coord,
        u = s.coord;
      (l[0] = zt(l[0], -1 / 0)),
        (l[1] = zt(l[1], -1 / 0)),
        (u[0] = zt(u[0], 1 / 0)),
        (u[1] = zt(u[1], 1 / 0));
      var h = ul([{}, o, s]);
      return (
        (h.coord = [o.coord, s.coord]), (h.x0 = o.x), (h.y0 = o.y), (h.x1 = s.x), (h.y1 = s.y), h
      );
    }
  };
function Za(a) {
  return !isNaN(a) && !isFinite(a);
}
function Ro(a, e, t, r) {
  var n = 1 - a;
  return Za(e[n]) && Za(t[n]);
}
function Zp(a, e) {
  var t = e.coord[0],
    r = e.coord[1],
    n = { coord: t, x: e.x0, y: e.y0 },
    i = { coord: r, x: e.x1, y: e.y1 };
  return sr(a, 'cartesian2d')
    ? t && r && (Ro(1, t, r) || Ro(0, t, r))
      ? !0
      : wp(a, n, i)
    : sa(a, n) || sa(a, i);
}
function ko(a, e, t, r, n) {
  var i = r.coordinateSystem,
    o = a.getItemModel(e),
    s,
    l = z(o.get(t[0]), n.getWidth()),
    u = z(o.get(t[1]), n.getHeight());
  if (!isNaN(l) && !isNaN(u)) s = [l, u];
  else {
    if (r.getMarkerPosition) {
      var h = a.getValues(['x0', 'y0'], e),
        v = a.getValues(['x1', 'y1'], e),
        c = i.clampData(h),
        f = i.clampData(v),
        d = [];
      t[0] === 'x0' ? (d[0] = c[0] > f[0] ? v[0] : h[0]) : (d[0] = c[0] > f[0] ? h[0] : v[0]),
        t[1] === 'y0' ? (d[1] = c[1] > f[1] ? v[1] : h[1]) : (d[1] = c[1] > f[1] ? h[1] : v[1]),
        (s = r.getMarkerPosition(d, t, !0));
    } else {
      var p = a.get(t[0], e),
        g = a.get(t[1], e),
        y = [p, g];
      i.clampData && i.clampData(y, y), (s = i.dataToPoint(y, !0));
    }
    if (sr(i, 'cartesian2d')) {
      var m = i.getAxis('x'),
        x = i.getAxis('y'),
        p = a.get(t[0], e),
        g = a.get(t[1], e);
      Za(p)
        ? (s[0] = m.toGlobalCoord(m.getExtent()[t[0] === 'x0' ? 0 : 1]))
        : Za(g) && (s[1] = x.toGlobalCoord(x.getExtent()[t[1] === 'y0' ? 0 : 1]));
    }
    isNaN(l) || (s[0] = l), isNaN(u) || (s[1] = u);
  }
  return s;
}
var No = [
    ['x0', 'y0'],
    ['x1', 'y0'],
    ['x1', 'y1'],
    ['x0', 'y1'],
  ],
  Up = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.updateTransform = function (t, r, n) {
        r.eachSeries(function (i) {
          var o = de.getMarkerModelFromSeries(i, 'markArea');
          if (o) {
            var s = o.getData();
            s.each(function (l) {
              var u = O(No, function (v) {
                return ko(s, l, v, i, n);
              });
              s.setItemLayout(l, u);
              var h = s.getItemGraphicEl(l);
              h.setShape('points', u);
            });
          }
        }, this);
      }),
      (e.prototype.renderSeries = function (t, r, n, i) {
        var o = t.coordinateSystem,
          s = t.id,
          l = t.getData(),
          u = this.markerGroupMap,
          h = u.get(s) || u.set(s, { group: new K() });
        this.group.add(h.group), this.markKeep(h);
        var v = Yp(o, t, r);
        r.setData(v),
          v.each(function (c) {
            var f = O(No, function (A) {
                return ko(v, c, A, t, i);
              }),
              d = o.getAxis('x').scale,
              p = o.getAxis('y').scale,
              g = d.getExtent(),
              y = p.getExtent(),
              m = [d.parse(v.get('x0', c)), d.parse(v.get('x1', c))],
              x = [p.parse(v.get('y0', c)), p.parse(v.get('y1', c))];
            ne(m), ne(x);
            var S = !(g[0] > m[1] || g[1] < m[0] || y[0] > x[1] || y[1] < x[0]),
              b = !S;
            v.setItemLayout(c, { points: f, allClipped: b });
            var w = v.getItemModel(c).getModel('itemStyle').getItemStyle(),
              _ = Zn(l, 'color');
            w.fill || ((w.fill = _), tt(w.fill) && (w.fill = gn(w.fill, 0.4))),
              w.stroke || (w.stroke = _),
              v.setItemVisual(c, 'style', w);
          }),
          v
            .diff(Ca(h).data)
            .add(function (c) {
              var f = v.getItemLayout(c);
              if (!f.allClipped) {
                var d = new Me({ shape: { points: f.points } });
                v.setItemGraphicEl(c, d), h.group.add(d);
              }
            })
            .update(function (c, f) {
              var d = Ca(h).data.getItemGraphicEl(f),
                p = v.getItemLayout(c);
              p.allClipped
                ? d && h.group.remove(d)
                : (d
                    ? ht(d, { shape: { points: p.points } }, r, c)
                    : (d = new Me({ shape: { points: p.points } })),
                  v.setItemGraphicEl(c, d),
                  h.group.add(d));
            })
            .remove(function (c) {
              var f = Ca(h).data.getItemGraphicEl(c);
              h.group.remove(f);
            })
            .execute(),
          v.eachItemGraphicEl(function (c, f) {
            var d = v.getItemModel(f),
              p = v.getItemVisual(f, 'style');
            c.useStyle(v.getItemVisual(f, 'style')),
              Jt(c, Nt(d), {
                labelFetcher: r,
                labelDataIndex: f,
                defaultText: v.getName(f) || '',
                inheritColor: tt(p.fill) ? gn(p.fill, 1) : '#000',
              }),
              It(c, d),
              ft(c, null, null, d.get(['emphasis', 'disabled'])),
              (lt(c).dataModel = r);
          }),
          (Ca(h).data = v),
          (h.group.silent = r.get('silent') || t.get('silent'));
      }),
      (e.type = 'markArea'),
      e
    );
  })(ii);
function Yp(a, e, t) {
  var r,
    n,
    i = ['x0', 'y0', 'x1', 'y1'];
  if (a) {
    var o = O(a && a.dimensions, function (u) {
      var h = e.getData(),
        v = h.getDimensionInfo(h.mapDimension(u)) || {};
      return W(W({}, v), { name: u, ordinalMeta: null });
    });
    (n = O(i, function (u, h) {
      return { name: u, type: o[h % 2].type };
    })),
      (r = new Mt(n, t));
  } else (n = [{ name: 'value', type: 'float' }]), (r = new Mt(n, t));
  var s = O(t.get('data'), it(Hp, e, a, t));
  a && (s = Ft(s, it(Zp, a)));
  var l = a
    ? function (u, h, v, c) {
        var f = u.coord[Math.floor(c / 2)][c % 2];
        return Ba(f, n[c]);
      }
    : function (u, h, v, c) {
        return Ba(u.value, n[c]);
      };
  return r.initData(s, null, l), (r.hasItemOption = !0), r;
}
const Xp = Up;
function qp(a) {
  a.registerComponentModel(Fp),
    a.registerComponentView(Xp),
    a.registerPreprocessor(function (e) {
      ri(e.series, 'markArea') && (e.markArea = e.markArea || {});
    });
}
var Kp = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.type = 'dataZoom.inside'),
    (e.defaultOption = ar(za.defaultOption, {
      disabled: !1,
      zoomLock: !1,
      zoomOnMouseWheel: !0,
      moveOnMouseMove: !0,
      moveOnMouseWheel: !1,
      preventDefaultMouseMove: !0,
    })),
    e
  );
})(za);
const jp = Kp;
var li = bt();
function Qp(a, e, t) {
  li(a).coordSysRecordMap.each(function (r) {
    var n = r.dataZoomInfoMap.get(e.uid);
    n && (n.getRange = t);
  });
}
function Jp(a, e) {
  for (var t = li(a).coordSysRecordMap, r = t.keys(), n = 0; n < r.length; n++) {
    var i = r[n],
      o = t.get(i),
      s = o.dataZoomInfoMap;
    if (s) {
      var l = e.uid,
        u = s.get(l);
      u && (s.removeKey(l), s.keys().length || Jl(t, o));
    }
  }
}
function Jl(a, e) {
  if (e) {
    a.removeKey(e.model.uid);
    var t = e.controller;
    t && t.dispose();
  }
}
function tg(a, e) {
  var t = {
      model: e,
      containsPoint: it(ag, e),
      dispatchAction: it(eg, a),
      dataZoomInfoMap: null,
      controller: null,
    },
    r = (t.controller = new lr(a.getZr()));
  return (
    I(['pan', 'zoom', 'scrollMove'], function (n) {
      r.on(n, function (i) {
        var o = [];
        t.dataZoomInfoMap.each(function (s) {
          if (i.isAvailableBehavior(s.model.option)) {
            var l = (s.getRange || {})[n],
              u = l && l(s.dzReferCoordSysInfo, t.model.mainType, t.controller, i);
            !s.model.get('disabled', !0) &&
              u &&
              o.push({ dataZoomId: s.model.id, start: u[0], end: u[1] });
          }
        }),
          o.length && t.dispatchAction(o);
      });
    }),
    t
  );
}
function eg(a, e) {
  a.isDisposed() ||
    a.dispatchAction({
      type: 'dataZoom',
      animation: { easing: 'cubicOut', duration: 100 },
      batch: e,
    });
}
function ag(a, e, t, r) {
  return a.coordinateSystem.containPoint([t, r]);
}
function rg(a) {
  var e,
    t = 'type_',
    r = { type_true: 2, type_move: 1, type_false: 0, type_undefined: -1 },
    n = !0;
  return (
    a.each(function (i) {
      var o = i.model,
        s = o.get('disabled', !0) ? !1 : o.get('zoomLock', !0) ? 'move' : !0;
      r[t + s] > r[t + e] && (e = s), (n = n && o.get('preventDefaultMouseMove', !0));
    }),
    {
      controlType: e,
      opt: {
        zoomOnMouseWheel: !0,
        moveOnMouseMove: !0,
        moveOnMouseWheel: !0,
        preventDefaultMouseMove: !!n,
      },
    }
  );
}
function ng(a) {
  a.registerProcessor(a.PRIORITY.PROCESSOR.FILTER, function (e, t) {
    var r = li(t),
      n = r.coordSysRecordMap || (r.coordSysRecordMap = Kt());
    n.each(function (i) {
      i.dataZoomInfoMap = null;
    }),
      e.eachComponent({ mainType: 'dataZoom', subType: 'inside' }, function (i) {
        var o = hl(i);
        I(o.infoList, function (s) {
          var l = s.model.uid,
            u = n.get(l) || n.set(l, tg(t, s.model)),
            h = u.dataZoomInfoMap || (u.dataZoomInfoMap = Kt());
          h.set(i.uid, { dzReferCoordSysInfo: s, model: i, getRange: null });
        });
      }),
      n.each(function (i) {
        var o = i.controller,
          s,
          l = i.dataZoomInfoMap;
        if (l) {
          var u = l.keys()[0];
          u != null && (s = l.get(u));
        }
        if (!s) {
          Jl(n, i);
          return;
        }
        var h = rg(l);
        o.enable(h.controlType, h.opt),
          o.setPointerChecker(i.containsPoint),
          Ja(i, 'dispatchAction', s.model.get('throttle', !0), 'fixRate');
      });
  });
}
var ig = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = 'dataZoom.inside'), t;
    }
    return (
      (e.prototype.render = function (t, r, n) {
        if ((a.prototype.render.apply(this, arguments), t.noTarget())) {
          this._clear();
          return;
        }
        (this.range = t.getPercentRange()),
          Qp(n, t, {
            pan: U(zr.pan, this),
            zoom: U(zr.zoom, this),
            scrollMove: U(zr.scrollMove, this),
          });
      }),
      (e.prototype.dispose = function () {
        this._clear(), a.prototype.dispose.apply(this, arguments);
      }),
      (e.prototype._clear = function () {
        Jp(this.api, this.dataZoomModel), (this.range = null);
      }),
      (e.type = 'dataZoom.inside'),
      e
    );
  })(vl),
  zr = {
    zoom: function (a, e, t, r) {
      var n = this.range,
        i = n.slice(),
        o = a.axisModels[0];
      if (o) {
        var s = Gr[e](null, [r.originX, r.originY], o, t, a),
          l =
            ((s.signal > 0 ? s.pixelStart + s.pixelLength - s.pixel : s.pixel - s.pixelStart) /
              s.pixelLength) *
              (i[1] - i[0]) +
            i[0],
          u = Math.max(1 / r.scale, 0);
        (i[0] = (i[0] - l) * u + l), (i[1] = (i[1] - l) * u + l);
        var h = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
        if (
          (tr(0, i, [0, 100], 0, h.minSpan, h.maxSpan),
          (this.range = i),
          n[0] !== i[0] || n[1] !== i[1])
        )
          return i;
      }
    },
    pan: Vo(function (a, e, t, r, n, i) {
      var o = Gr[r]([i.oldX, i.oldY], [i.newX, i.newY], e, n, t);
      return (o.signal * (a[1] - a[0]) * o.pixel) / o.pixelLength;
    }),
    scrollMove: Vo(function (a, e, t, r, n, i) {
      var o = Gr[r]([0, 0], [i.scrollDelta, i.scrollDelta], e, n, t);
      return o.signal * (a[1] - a[0]) * i.scrollDelta;
    }),
  };
function Vo(a) {
  return function (e, t, r, n) {
    var i = this.range,
      o = i.slice(),
      s = e.axisModels[0];
    if (s) {
      var l = a(o, s, e, t, r, n);
      if ((tr(l, o, [0, 100], 'all'), (this.range = o), i[0] !== o[0] || i[1] !== o[1])) return o;
    }
  };
}
var Gr = {
  grid: function (a, e, t, r, n) {
    var i = t.axis,
      o = {},
      s = n.model.coordinateSystem.getRect();
    return (
      (a = a || [0, 0]),
      i.dim === 'x'
        ? ((o.pixel = e[0] - a[0]),
          (o.pixelLength = s.width),
          (o.pixelStart = s.x),
          (o.signal = i.inverse ? 1 : -1))
        : ((o.pixel = e[1] - a[1]),
          (o.pixelLength = s.height),
          (o.pixelStart = s.y),
          (o.signal = i.inverse ? -1 : 1)),
      o
    );
  },
  polar: function (a, e, t, r, n) {
    var i = t.axis,
      o = {},
      s = n.model.coordinateSystem,
      l = s.getRadiusAxis().getExtent(),
      u = s.getAngleAxis().getExtent();
    return (
      (a = a ? s.pointToCoord(a) : [0, 0]),
      (e = s.pointToCoord(e)),
      t.mainType === 'radiusAxis'
        ? ((o.pixel = e[0] - a[0]),
          (o.pixelLength = l[1] - l[0]),
          (o.pixelStart = l[0]),
          (o.signal = i.inverse ? 1 : -1))
        : ((o.pixel = e[1] - a[1]),
          (o.pixelLength = u[1] - u[0]),
          (o.pixelStart = u[0]),
          (o.signal = i.inverse ? -1 : 1)),
      o
    );
  },
  singleAxis: function (a, e, t, r, n) {
    var i = t.axis,
      o = n.model.coordinateSystem.getRect(),
      s = {};
    return (
      (a = a || [0, 0]),
      i.orient === 'horizontal'
        ? ((s.pixel = e[0] - a[0]),
          (s.pixelLength = o.width),
          (s.pixelStart = o.x),
          (s.signal = i.inverse ? 1 : -1))
        : ((s.pixel = e[1] - a[1]),
          (s.pixelLength = o.height),
          (s.pixelStart = o.y),
          (s.signal = i.inverse ? -1 : 1)),
      s
    );
  },
};
const og = ig;
function tu(a) {
  cl(a), a.registerComponentModel(jp), a.registerComponentView(og), ng(a);
}
var sg = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.type = 'dataZoom.slider'),
    (e.layoutMode = 'box'),
    (e.defaultOption = ar(za.defaultOption, {
      show: !0,
      right: 'ph',
      top: 'ph',
      width: 'ph',
      height: 'ph',
      left: null,
      bottom: null,
      borderColor: '#d2dbee',
      borderRadius: 3,
      backgroundColor: 'rgba(47,69,84,0)',
      dataBackground: {
        lineStyle: { color: '#d2dbee', width: 0.5 },
        areaStyle: { color: '#d2dbee', opacity: 0.2 },
      },
      selectedDataBackground: {
        lineStyle: { color: '#8fb0f7', width: 0.5 },
        areaStyle: { color: '#8fb0f7', opacity: 0.2 },
      },
      fillerColor: 'rgba(135,175,274,0.2)',
      handleIcon:
        'path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z',
      handleSize: '100%',
      handleStyle: { color: '#fff', borderColor: '#ACB8D1' },
      moveHandleSize: 7,
      moveHandleIcon:
        'path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z',
      moveHandleStyle: { color: '#D2DBEE', opacity: 0.7 },
      showDetail: !0,
      showDataShadow: 'auto',
      realtime: !0,
      zoomLock: !1,
      textStyle: { color: '#6E7079' },
      brushSelect: !0,
      brushStyle: { color: 'rgba(135,175,274,0.15)' },
      emphasis: { handleStyle: { borderColor: '#8FB0F7' }, moveHandleStyle: { color: '#8FB0F7' } },
    })),
    e
  );
})(za);
const lg = sg;
var He = Tt,
  Bo = 7,
  ug = 1,
  Or = 30,
  hg = 7,
  Ze = 'horizontal',
  zo = 'vertical',
  vg = 5,
  cg = ['line', 'bar', 'candlestick', 'scatter'],
  fg = { easing: 'cubicOut', duration: 100, delay: 0 },
  dg = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t._displayables = {}), t;
    }
    return (
      (e.prototype.init = function (t, r) {
        (this.api = r),
          (this._onBrush = U(this._onBrush, this)),
          (this._onBrushEnd = U(this._onBrushEnd, this));
      }),
      (e.prototype.render = function (t, r, n, i) {
        if (
          (a.prototype.render.apply(this, arguments),
          Ja(this, '_dispatchZoomAction', t.get('throttle'), 'fixRate'),
          (this._orient = t.getOrient()),
          t.get('show') === !1)
        ) {
          this.group.removeAll();
          return;
        }
        if (t.noTarget()) {
          this._clear(), this.group.removeAll();
          return;
        }
        (!i || i.type !== 'dataZoom' || i.from !== this.uid) && this._buildView(),
          this._updateView();
      }),
      (e.prototype.dispose = function () {
        this._clear(), a.prototype.dispose.apply(this, arguments);
      }),
      (e.prototype._clear = function () {
        Qs(this, '_dispatchZoomAction');
        var t = this.api.getZr();
        t.off('mousemove', this._onBrush), t.off('mouseup', this._onBrushEnd);
      }),
      (e.prototype._buildView = function () {
        var t = this.group;
        t.removeAll(),
          (this._brushing = !1),
          (this._displayables.brushRect = null),
          this._resetLocation(),
          this._resetInterval();
        var r = (this._displayables.sliderGroup = new K());
        this._renderBackground(),
          this._renderHandle(),
          this._renderDataShadow(),
          t.add(r),
          this._positionGroup();
      }),
      (e.prototype._resetLocation = function () {
        var t = this.dataZoomModel,
          r = this.api,
          n = t.get('brushSelect'),
          i = n ? hg : 0,
          o = this._findCoordRect(),
          s = { width: r.getWidth(), height: r.getHeight() },
          l =
            this._orient === Ze
              ? {
                  right: s.width - o.x - o.width,
                  top: s.height - Or - Bo - i,
                  width: o.width,
                  height: Or,
                }
              : { right: Bo, top: o.y, width: Or, height: o.height },
          u = el(t.option);
        I(['right', 'top', 'width', 'height'], function (v) {
          u[v] === 'ph' && (u[v] = l[v]);
        });
        var h = re(u, s);
        (this._location = { x: h.x, y: h.y }),
          (this._size = [h.width, h.height]),
          this._orient === zo && this._size.reverse();
      }),
      (e.prototype._positionGroup = function () {
        var t = this.group,
          r = this._location,
          n = this._orient,
          i = this.dataZoomModel.getFirstTargetAxisModel(),
          o = i && i.get('inverse'),
          s = this._displayables.sliderGroup,
          l = (this._dataShadowInfo || {}).otherAxisInverse;
        s.attr(
          n === Ze && !o
            ? { scaleY: l ? 1 : -1, scaleX: 1 }
            : n === Ze && o
            ? { scaleY: l ? 1 : -1, scaleX: -1 }
            : n === zo && !o
            ? { scaleY: l ? -1 : 1, scaleX: 1, rotation: Math.PI / 2 }
            : { scaleY: l ? -1 : 1, scaleX: -1, rotation: Math.PI / 2 },
        );
        var u = t.getBoundingRect([s]);
        (t.x = r.x - u.x), (t.y = r.y - u.y), t.markRedraw();
      }),
      (e.prototype._getViewExtent = function () {
        return [0, this._size[0]];
      }),
      (e.prototype._renderBackground = function () {
        var t = this.dataZoomModel,
          r = this._size,
          n = this._displayables.sliderGroup,
          i = t.get('brushSelect');
        n.add(
          new He({
            silent: !0,
            shape: { x: 0, y: 0, width: r[0], height: r[1] },
            style: { fill: t.get('backgroundColor') },
            z2: -40,
          }),
        );
        var o = new He({
            shape: { x: 0, y: 0, width: r[0], height: r[1] },
            style: { fill: 'transparent' },
            z2: 0,
            onclick: U(this._onClickPanel, this),
          }),
          s = this.api.getZr();
        i
          ? (o.on('mousedown', this._onBrushStart, this),
            (o.cursor = 'crosshair'),
            s.on('mousemove', this._onBrush),
            s.on('mouseup', this._onBrushEnd))
          : (s.off('mousemove', this._onBrush), s.off('mouseup', this._onBrushEnd)),
          n.add(o);
      }),
      (e.prototype._renderDataShadow = function () {
        var t = (this._dataShadowInfo = this._prepareDataShadowInfo());
        if (((this._displayables.dataShadowSegs = []), !t)) return;
        var r = this._size,
          n = this._shadowSize || [],
          i = t.series,
          o = i.getRawData(),
          s = i.getShadowDim && i.getShadowDim(),
          l = s && o.getDimensionInfo(s) ? i.getShadowDim() : t.otherDim;
        if (l == null) return;
        var u = this._shadowPolygonPts,
          h = this._shadowPolylinePts;
        if (o !== this._shadowData || l !== this._shadowDim || r[0] !== n[0] || r[1] !== n[1]) {
          var v = o.getDataExtent(l),
            c = (v[1] - v[0]) * 0.3;
          v = [v[0] - c, v[1] + c];
          var f = [0, r[1]],
            d = [0, r[0]],
            p = [
              [r[0], 0],
              [0, 0],
            ],
            g = [],
            y = d[1] / (o.count() - 1),
            m = 0,
            x = Math.round(o.count() / r[0]),
            S;
          o.each([l], function (C, D) {
            if (x > 0 && D % x) {
              m += y;
              return;
            }
            var T = C == null || isNaN(C) || C === '',
              L = T ? 0 : vt(C, v, f, !0);
            T && !S && D
              ? (p.push([p[p.length - 1][0], 0]), g.push([g[g.length - 1][0], 0]))
              : !T && S && (p.push([m, 0]), g.push([m, 0])),
              p.push([m, L]),
              g.push([m, L]),
              (m += y),
              (S = T);
          }),
            (u = this._shadowPolygonPts = p),
            (h = this._shadowPolylinePts = g);
        }
        (this._shadowData = o), (this._shadowDim = l), (this._shadowSize = [r[0], r[1]]);
        var b = this.dataZoomModel;
        function w(C) {
          var D = b.getModel(C ? 'selectedDataBackground' : 'dataBackground'),
            T = new K(),
            L = new Me({
              shape: { points: u },
              segmentIgnoreThreshold: 1,
              style: D.getModel('areaStyle').getAreaStyle(),
              silent: !0,
              z2: -20,
            }),
            P = new Ie({
              shape: { points: h },
              segmentIgnoreThreshold: 1,
              style: D.getModel('lineStyle').getLineStyle(),
              silent: !0,
              z2: -19,
            });
          return T.add(L), T.add(P), T;
        }
        for (var _ = 0; _ < 3; _++) {
          var A = w(_ === 1);
          this._displayables.sliderGroup.add(A), this._displayables.dataShadowSegs.push(A);
        }
      }),
      (e.prototype._prepareDataShadowInfo = function () {
        var t = this.dataZoomModel,
          r = t.get('showDataShadow');
        if (r !== !1) {
          var n,
            i = this.ecModel;
          return (
            t.eachTargetAxis(function (o, s) {
              var l = t.getAxisProxy(o, s).getTargetSeriesModels();
              I(
                l,
                function (u) {
                  if (!n && !(r !== !0 && Ct(cg, u.get('type')) < 0)) {
                    var h = i.getComponent(qh(o), s).axis,
                      v = pg(o),
                      c,
                      f = u.coordinateSystem;
                    v != null && f.getOtherAxis && (c = f.getOtherAxis(h).inverse),
                      (v = u.getData().mapDimension(v)),
                      (n = {
                        thisAxis: h,
                        series: u,
                        thisDim: o,
                        otherDim: v,
                        otherAxisInverse: c,
                      });
                  }
                },
                this,
              );
            }, this),
            n
          );
        }
      }),
      (e.prototype._renderHandle = function () {
        var t = this.group,
          r = this._displayables,
          n = (r.handles = [null, null]),
          i = (r.handleLabels = [null, null]),
          o = this._displayables.sliderGroup,
          s = this._size,
          l = this.dataZoomModel,
          u = this.api,
          h = l.get('borderRadius') || 0,
          v = l.get('brushSelect'),
          c = (r.filler = new He({
            silent: v,
            style: { fill: l.get('fillerColor') },
            textConfig: { position: 'inside' },
          }));
        o.add(c),
          o.add(
            new He({
              silent: !0,
              subPixelOptimize: !0,
              shape: { x: 0, y: 0, width: s[0], height: s[1], r: h },
              style: {
                stroke: l.get('dataBackgroundColor') || l.get('borderColor'),
                lineWidth: ug,
                fill: 'rgba(0,0,0,0)',
              },
            }),
          ),
          I(
            [0, 1],
            function (x) {
              var S = l.get('handleIcon');
              !Kh[S] &&
                S.indexOf('path://') < 0 &&
                S.indexOf('image://') < 0 &&
                (S = 'path://' + S);
              var b = Wt(S, -1, 0, 2, 2, null, !0);
              b.attr({
                cursor: Go(this._orient),
                draggable: !0,
                drift: U(this._onDragMove, this, x),
                ondragend: U(this._onDragEnd, this),
                onmouseover: U(this._showDataInfo, this, !0),
                onmouseout: U(this._showDataInfo, this, !1),
                z2: 5,
              });
              var w = b.getBoundingRect(),
                _ = l.get('handleSize');
              (this._handleHeight = z(_, this._size[1])),
                (this._handleWidth = (w.width / w.height) * this._handleHeight),
                b.setStyle(l.getModel('handleStyle').getItemStyle()),
                (b.style.strokeNoScale = !0),
                (b.rectHover = !0),
                (b.ensureState('emphasis').style = l
                  .getModel(['emphasis', 'handleStyle'])
                  .getItemStyle()),
                Ea(b);
              var A = l.get('handleColor');
              A != null && (b.style.fill = A), o.add((n[x] = b));
              var C = l.getModel('textStyle');
              t.add(
                (i[x] = new gt({
                  silent: !0,
                  invisible: !0,
                  style: yt(C, {
                    x: 0,
                    y: 0,
                    text: '',
                    verticalAlign: 'middle',
                    align: 'center',
                    fill: C.getTextColor(),
                    font: C.getFont(),
                  }),
                  z2: 10,
                })),
              );
            },
            this,
          );
        var f = c;
        if (v) {
          var d = z(l.get('moveHandleSize'), s[1]),
            p = (r.moveHandle = new Tt({
              style: l.getModel('moveHandleStyle').getItemStyle(),
              silent: !0,
              shape: { r: [0, 0, 2, 2], y: s[1] - 0.5, height: d },
            })),
            g = d * 0.8,
            y = (r.moveHandleIcon = Wt(l.get('moveHandleIcon'), -g / 2, -g / 2, g, g, '#fff', !0));
          (y.silent = !0),
            (y.y = s[1] + d / 2 - 0.5),
            (p.ensureState('emphasis').style = l
              .getModel(['emphasis', 'moveHandleStyle'])
              .getItemStyle());
          var m = Math.min(s[1] / 2, Math.max(d, 10));
          (f = r.moveZone = new Tt({ invisible: !0, shape: { y: s[1] - m, height: d + m } })),
            f
              .on('mouseover', function () {
                u.enterEmphasis(p);
              })
              .on('mouseout', function () {
                u.leaveEmphasis(p);
              }),
            o.add(p),
            o.add(y),
            o.add(f);
        }
        f.attr({
          draggable: !0,
          cursor: Go(this._orient),
          drift: U(this._onDragMove, this, 'all'),
          ondragstart: U(this._showDataInfo, this, !0),
          ondragend: U(this._onDragEnd, this),
          onmouseover: U(this._showDataInfo, this, !0),
          onmouseout: U(this._showDataInfo, this, !1),
        });
      }),
      (e.prototype._resetInterval = function () {
        var t = (this._range = this.dataZoomModel.getPercentRange()),
          r = this._getViewExtent();
        this._handleEnds = [vt(t[0], [0, 100], r, !0), vt(t[1], [0, 100], r, !0)];
      }),
      (e.prototype._updateInterval = function (t, r) {
        var n = this.dataZoomModel,
          i = this._handleEnds,
          o = this._getViewExtent(),
          s = n.findRepresentativeAxisProxy().getMinMaxSpan(),
          l = [0, 100];
        tr(
          r,
          i,
          o,
          n.get('zoomLock') ? 'all' : t,
          s.minSpan != null ? vt(s.minSpan, l, o, !0) : null,
          s.maxSpan != null ? vt(s.maxSpan, l, o, !0) : null,
        );
        var u = this._range,
          h = (this._range = ne([vt(i[0], o, l, !0), vt(i[1], o, l, !0)]));
        return !u || u[0] !== h[0] || u[1] !== h[1];
      }),
      (e.prototype._updateView = function (t) {
        var r = this._displayables,
          n = this._handleEnds,
          i = ne(n.slice()),
          o = this._size;
        I(
          [0, 1],
          function (f) {
            var d = r.handles[f],
              p = this._handleHeight;
            d.attr({ scaleX: p / 2, scaleY: p / 2, x: n[f] + (f ? -1 : 1), y: o[1] / 2 - p / 2 });
          },
          this,
        ),
          r.filler.setShape({ x: i[0], y: 0, width: i[1] - i[0], height: o[1] });
        var s = { x: i[0], width: i[1] - i[0] };
        r.moveHandle &&
          (r.moveHandle.setShape(s),
          r.moveZone.setShape(s),
          r.moveZone.getBoundingRect(),
          r.moveHandleIcon && r.moveHandleIcon.attr('x', s.x + s.width / 2));
        for (var l = r.dataShadowSegs, u = [0, i[0], i[1], o[0]], h = 0; h < l.length; h++) {
          var v = l[h],
            c = v.getClipPath();
          c || ((c = new Tt()), v.setClipPath(c)),
            c.setShape({ x: u[h], y: 0, width: u[h + 1] - u[h], height: o[1] });
        }
        this._updateDataInfo(t);
      }),
      (e.prototype._updateDataInfo = function (t) {
        var r = this.dataZoomModel,
          n = this._displayables,
          i = n.handleLabels,
          o = this._orient,
          s = ['', ''];
        if (r.get('showDetail')) {
          var l = r.findRepresentativeAxisProxy();
          if (l) {
            var u = l.getAxisModel().axis,
              h = this._range,
              v = t
                ? l.calculateDataWindow({ start: h[0], end: h[1] }).valueWindow
                : l.getDataValueWindow();
            s = [this._formatLabel(v[0], u), this._formatLabel(v[1], u)];
          }
        }
        var c = ne(this._handleEnds.slice());
        f.call(this, 0), f.call(this, 1);
        function f(d) {
          var p = jh(n.handles[d].parent, this.group),
            g = Qh(d === 0 ? 'right' : 'left', p),
            y = this._handleWidth / 2 + vg,
            m = ea([c[d] + (d === 0 ? -y : y), this._size[1] / 2], p);
          i[d].setStyle({
            x: m[0],
            y: m[1],
            verticalAlign: o === Ze ? 'middle' : g,
            align: o === Ze ? g : 'center',
            text: s[d],
          });
        }
      }),
      (e.prototype._formatLabel = function (t, r) {
        var n = this.dataZoomModel,
          i = n.get('labelFormatter'),
          o = n.get('labelPrecision');
        (o == null || o === 'auto') && (o = r.getPixelPrecision());
        var s =
          t == null || isNaN(t)
            ? ''
            : r.type === 'category' || r.type === 'time'
            ? r.scale.getLabel({ value: Math.round(t) })
            : t.toFixed(Math.min(o, 20));
        return st(i) ? i(t, s) : tt(i) ? i.replace('{value}', s) : s;
      }),
      (e.prototype._showDataInfo = function (t) {
        t = this._dragging || t;
        var r = this._displayables,
          n = r.handleLabels;
        n[0].attr('invisible', !t),
          n[1].attr('invisible', !t),
          r.moveHandle && this.api[t ? 'enterEmphasis' : 'leaveEmphasis'](r.moveHandle, 1);
      }),
      (e.prototype._onDragMove = function (t, r, n, i) {
        (this._dragging = !0), ki(i.event);
        var o = this._displayables.sliderGroup.getLocalTransform(),
          s = ea([r, n], o, !0),
          l = this._updateInterval(t, s[0]),
          u = this.dataZoomModel.get('realtime');
        this._updateView(!u), l && u && this._dispatchZoomAction(!0);
      }),
      (e.prototype._onDragEnd = function () {
        (this._dragging = !1), this._showDataInfo(!1);
        var t = this.dataZoomModel.get('realtime');
        !t && this._dispatchZoomAction(!1);
      }),
      (e.prototype._onClickPanel = function (t) {
        var r = this._size,
          n = this._displayables.sliderGroup.transformCoordToLocal(t.offsetX, t.offsetY);
        if (!(n[0] < 0 || n[0] > r[0] || n[1] < 0 || n[1] > r[1])) {
          var i = this._handleEnds,
            o = (i[0] + i[1]) / 2,
            s = this._updateInterval('all', n[0] - o);
          this._updateView(), s && this._dispatchZoomAction(!1);
        }
      }),
      (e.prototype._onBrushStart = function (t) {
        var r = t.offsetX,
          n = t.offsetY;
        (this._brushStart = new fl(r, n)),
          (this._brushing = !0),
          (this._brushStartTime = +new Date());
      }),
      (e.prototype._onBrushEnd = function (t) {
        if (this._brushing) {
          var r = this._displayables.brushRect;
          if (((this._brushing = !1), !!r)) {
            r.attr('ignore', !0);
            var n = r.shape,
              i = +new Date();
            if (!(i - this._brushStartTime < 200 && Math.abs(n.width) < 5)) {
              var o = this._getViewExtent(),
                s = [0, 100];
              (this._range = ne([vt(n.x, o, s, !0), vt(n.x + n.width, o, s, !0)])),
                (this._handleEnds = [n.x, n.x + n.width]),
                this._updateView(),
                this._dispatchZoomAction(!1);
            }
          }
        }
      }),
      (e.prototype._onBrush = function (t) {
        this._brushing && (ki(t.event), this._updateBrushRect(t.offsetX, t.offsetY));
      }),
      (e.prototype._updateBrushRect = function (t, r) {
        var n = this._displayables,
          i = this.dataZoomModel,
          o = n.brushRect;
        o ||
          ((o = n.brushRect =
            new He({ silent: !0, style: i.getModel('brushStyle').getItemStyle() })),
          n.sliderGroup.add(o)),
          o.attr('ignore', !1);
        var s = this._brushStart,
          l = this._displayables.sliderGroup,
          u = l.transformCoordToLocal(t, r),
          h = l.transformCoordToLocal(s.x, s.y),
          v = this._size;
        (u[0] = Math.max(Math.min(v[0], u[0]), 0)),
          o.setShape({ x: h[0], y: 0, width: u[0] - h[0], height: v[1] });
      }),
      (e.prototype._dispatchZoomAction = function (t) {
        var r = this._range;
        this.api.dispatchAction({
          type: 'dataZoom',
          from: this.uid,
          dataZoomId: this.dataZoomModel.id,
          animation: t ? fg : null,
          start: r[0],
          end: r[1],
        });
      }),
      (e.prototype._findCoordRect = function () {
        var t,
          r = hl(this.dataZoomModel).infoList;
        if (!t && r.length) {
          var n = r[0].model.coordinateSystem;
          t = n.getRect && n.getRect();
        }
        if (!t) {
          var i = this.api.getWidth(),
            o = this.api.getHeight();
          t = { x: i * 0.2, y: o * 0.2, width: i * 0.6, height: o * 0.6 };
        }
        return t;
      }),
      (e.type = 'dataZoom.slider'),
      e
    );
  })(vl);
function pg(a) {
  var e = { x: 'y', y: 'x', radius: 'angle', angle: 'radius' };
  return e[a];
}
function Go(a) {
  return a === 'vertical' ? 'ns-resize' : 'ew-resize';
}
const gg = dg;
function eu(a) {
  a.registerComponentModel(lg), a.registerComponentView(gg), cl(a);
}
function yg(a) {
  Y(tu), Y(eu);
}
var mg = { label: { enabled: !0 }, decal: { show: !1 } },
  Oo = bt(),
  xg = {};
function Sg(a, e) {
  var t = a.getModel('aria');
  if (!t.get('enabled')) return;
  var r = Lt(mg);
  Gt(r.label, a.getLocaleModel().get('aria'), !1), Gt(t.option, r, !1), n(), i();
  function n() {
    var u = t.getModel('decal'),
      h = u.get('show');
    if (h) {
      var v = Kt();
      a.eachSeries(function (c) {
        if (!c.isColorBySeries()) {
          var f = v.get(c.type);
          f || ((f = {}), v.set(c.type, f)), (Oo(c).scope = f);
        }
      }),
        a.eachRawSeries(function (c) {
          if (a.isSeriesFiltered(c)) return;
          if (st(c.enableAriaDecal)) {
            c.enableAriaDecal();
            return;
          }
          var f = c.getData();
          if (c.isColorBySeries()) {
            var m = yn(c.ecModel, c.name, xg, a.getSeriesCount()),
              x = f.getVisual('decal');
            f.setVisual('decal', S(x, m));
          } else {
            var d = c.getRawData(),
              p = {},
              g = Oo(c).scope;
            f.each(function (b) {
              var w = f.getRawIndex(b);
              p[w] = b;
            });
            var y = d.count();
            d.each(function (b) {
              var w = p[b],
                _ = d.getName(b) || b + '',
                A = yn(c.ecModel, _, g, y),
                C = f.getItemVisual(w, 'decal');
              f.setItemVisual(w, 'decal', S(C, A));
            });
          }
          function S(b, w) {
            var _ = b ? W(W({}, w), b) : w;
            return (_.dirty = !0), _;
          }
        });
    }
  }
  function i() {
    var u = a.getLocaleModel().get('aria'),
      h = t.getModel('label');
    if (((h.option = nt(h.option, u)), !!h.get('enabled'))) {
      var v = e.getZr().dom;
      if (h.get('description')) {
        v.setAttribute('aria-label', h.get('description'));
        return;
      }
      var c = a.getSeriesCount(),
        f = h.get(['data', 'maxCount']) || 10,
        d = h.get(['series', 'maxCount']) || 10,
        p = Math.min(c, d),
        g;
      if (!(c < 1)) {
        var y = s();
        if (y) {
          var m = h.get(['general', 'withTitle']);
          g = o(m, { title: y });
        } else g = h.get(['general', 'withoutTitle']);
        var x = [],
          S =
            c > 1 ? h.get(['series', 'multiple', 'prefix']) : h.get(['series', 'single', 'prefix']);
        (g += o(S, { seriesCount: c })),
          a.eachSeries(function (A, C) {
            if (C < p) {
              var D = void 0,
                T = A.get('name'),
                L = T ? 'withName' : 'withoutName';
              (D = c > 1 ? h.get(['series', 'multiple', L]) : h.get(['series', 'single', L])),
                (D = o(D, {
                  seriesId: A.seriesIndex,
                  seriesName: A.get('name'),
                  seriesType: l(A.subType),
                }));
              var P = A.getData();
              if (P.count() > f) {
                var M = h.get(['data', 'partialData']);
                D += o(M, { displayCnt: f });
              } else D += h.get(['data', 'allData']);
              for (
                var E = h.get(['data', 'separator', 'middle']),
                  R = h.get(['data', 'separator', 'end']),
                  N = [],
                  V = 0;
                V < P.count();
                V++
              )
                if (V < f) {
                  var G = P.getName(V),
                    $ = P.getValues(V),
                    F = h.get(['data', G ? 'withName' : 'withoutName']);
                  N.push(o(F, { name: G, value: $.join(E) }));
                }
              (D += N.join(E) + R), x.push(D);
            }
          });
        var b = h.getModel(['series', 'multiple', 'separator']),
          w = b.get('middle'),
          _ = b.get('end');
        (g += x.join(w) + _), v.setAttribute('aria-label', g);
      }
    }
  }
  function o(u, h) {
    if (!tt(u)) return u;
    var v = u;
    return (
      I(h, function (c, f) {
        v = v.replace(new RegExp('\\{\\s*' + f + '\\s*\\}', 'g'), c);
      }),
      v
    );
  }
  function s() {
    var u = a.get('title');
    return u && u.length && (u = u[0]), u && u.text;
  }
  function l(u) {
    return a.getLocaleModel().get(['series', 'typeNames'])[u] || '自定义图';
  }
}
function bg(a) {
  if (!(!a || !a.aria)) {
    var e = a.aria;
    e.show != null && (e.enabled = e.show),
      (e.label = e.label || {}),
      I(['description', 'general', 'series', 'data'], function (t) {
        e[t] != null && (e.label[t] = e[t]);
      });
  }
}
function wg(a) {
  a.registerPreprocessor(bg), a.registerVisual(a.PRIORITY.VISUAL.ARIA, Sg);
}
var Wo = {
    value: 'eq',
    '<': 'lt',
    '<=': 'lte',
    '>': 'gt',
    '>=': 'gte',
    '=': 'eq',
    '!=': 'ne',
    '<>': 'ne',
  },
  _g = (function () {
    function a(e) {
      var t = (this._condVal = tt(e) ? new RegExp(e) : tv(e) ? e : null);
      if (t == null) {
        var r = '';
        ut(r);
      }
    }
    return (
      (a.prototype.evaluate = function (e) {
        var t = typeof e;
        return tt(t) ? this._condVal.test(e) : Ot(t) ? this._condVal.test(e + '') : !1;
      }),
      a
    );
  })(),
  Ag = (function () {
    function a() {}
    return (
      (a.prototype.evaluate = function () {
        return this.value;
      }),
      a
    );
  })(),
  Dg = (function () {
    function a() {}
    return (
      (a.prototype.evaluate = function () {
        for (var e = this.children, t = 0; t < e.length; t++) if (!e[t].evaluate()) return !1;
        return !0;
      }),
      a
    );
  })(),
  Tg = (function () {
    function a() {}
    return (
      (a.prototype.evaluate = function () {
        for (var e = this.children, t = 0; t < e.length; t++) if (e[t].evaluate()) return !0;
        return !1;
      }),
      a
    );
  })(),
  Cg = (function () {
    function a() {}
    return (
      (a.prototype.evaluate = function () {
        return !this.child.evaluate();
      }),
      a
    );
  })(),
  Mg = (function () {
    function a() {}
    return (
      (a.prototype.evaluate = function () {
        for (
          var e = !!this.valueParser,
            t = this.getValue,
            r = t(this.valueGetterParam),
            n = e ? this.valueParser(r) : null,
            i = 0;
          i < this.subCondList.length;
          i++
        )
          if (!this.subCondList[i].evaluate(e ? n : r)) return !1;
        return !0;
      }),
      a
    );
  })();
function ui(a, e) {
  if (a === !0 || a === !1) {
    var t = new Ag();
    return (t.value = a), t;
  }
  var r = '';
  return (
    au(a) || ut(r), a.and ? $o('and', a, e) : a.or ? $o('or', a, e) : a.not ? Lg(a, e) : Ig(a, e)
  );
}
function $o(a, e, t) {
  var r = e[a],
    n = '';
  H(r) || ut(n), r.length || ut(n);
  var i = a === 'and' ? new Dg() : new Tg();
  return (
    (i.children = O(r, function (o) {
      return ui(o, t);
    })),
    i.children.length || ut(n),
    i
  );
}
function Lg(a, e) {
  var t = a.not,
    r = '';
  au(t) || ut(r);
  var n = new Cg();
  return (n.child = ui(t, e)), n.child || ut(r), n;
}
function Ig(a, e) {
  for (
    var t = '',
      r = e.prepareGetValue(a),
      n = [],
      i = pt(a),
      o = a.parser,
      s = o ? dl(o) : null,
      l = 0;
    l < i.length;
    l++
  ) {
    var u = i[l];
    if (!(u === 'parser' || e.valueGetterAttrMap.get(u))) {
      var h = B(Wo, u) ? Wo[u] : u,
        v = a[u],
        c = s ? s(v) : v,
        f = Jh(h, c) || (h === 'reg' && new _g(c));
      f || ut(t), n.push(f);
    }
  }
  n.length || ut(t);
  var d = new Mg();
  return (
    (d.valueGetterParam = r), (d.valueParser = s), (d.getValue = e.getValue), (d.subCondList = n), d
  );
}
function au(a) {
  return Le(a) && !rl(a);
}
var Pg = (function () {
  function a(e, t) {
    this._cond = ui(e, t);
  }
  return (
    (a.prototype.evaluate = function () {
      return this._cond.evaluate();
    }),
    a
  );
})();
function Eg(a, e) {
  return new Pg(a, e);
}
var Rg = {
    type: 'echarts:filter',
    transform: function (a) {
      for (
        var e = a.upstream,
          t,
          r = Eg(a.config, {
            valueGetterAttrMap: Kt({ dimension: !0 }),
            prepareGetValue: function (s) {
              var l = '',
                u = s.dimension;
              B(s, 'dimension') || ut(l);
              var h = e.getDimensionInfo(u);
              return h || ut(l), { dimIdx: h.index };
            },
            getValue: function (s) {
              return e.retrieveValueFromItem(t, s.dimIdx);
            },
          }),
          n = [],
          i = 0,
          o = e.count();
        i < o;
        i++
      )
        (t = e.getRawDataItem(i)), r.evaluate() && n.push(t);
      return { data: n };
    },
  },
  kg = {
    type: 'echarts:sort',
    transform: function (a) {
      var e = a.upstream,
        t = a.config,
        r = '',
        n = le(t);
      n.length || ut(r);
      var i = [];
      I(n, function (h) {
        var v = h.dimension,
          c = h.order,
          f = h.parser,
          d = h.incomparable;
        if (
          (v == null && ut(r),
          c !== 'asc' && c !== 'desc' && ut(r),
          d && d !== 'min' && d !== 'max')
        ) {
          var p = '';
          ut(p);
        }
        if (c !== 'asc' && c !== 'desc') {
          var g = '';
          ut(g);
        }
        var y = e.getDimensionInfo(v);
        y || ut(r);
        var m = f ? dl(f) : null;
        f && !m && ut(r), i.push({ dimIdx: y.index, parser: m, comparator: new ev(c, d) });
      });
      var o = e.sourceFormat;
      o !== pl && o !== av && ut(r);
      for (var s = [], l = 0, u = e.count(); l < u; l++) s.push(e.getRawDataItem(l));
      return (
        s.sort(function (h, v) {
          for (var c = 0; c < i.length; c++) {
            var f = i[c],
              d = e.retrieveValueFromItem(h, f.dimIdx),
              p = e.retrieveValueFromItem(v, f.dimIdx);
            f.parser && ((d = f.parser(d)), (p = f.parser(p)));
            var g = f.comparator.evaluate(d, p);
            if (g !== 0) return g;
          }
          return 0;
        }),
        { data: s }
      );
    },
  };
function Ng(a) {
  a.registerTransform(Rg), a.registerTransform(kg);
}
var Vg = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.hasSymbolVisual = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      return Oe(null, this, { useEncodeDefaulter: !0 });
    }),
    (e.prototype.getProgressive = function () {
      var t = this.option.progressive;
      return t == null ? (this.option.large ? 5e3 : this.get('progressive')) : t;
    }),
    (e.prototype.getProgressiveThreshold = function () {
      var t = this.option.progressiveThreshold;
      return t == null ? (this.option.large ? 1e4 : this.get('progressiveThreshold')) : t;
    }),
    (e.prototype.brushSelector = function (t, r, n) {
      return n.point(r.getItemLayout(t));
    }),
    (e.prototype.getZLevelKey = function () {
      return this.getData().count() > this.getProgressiveThreshold() ? this.id : '';
    }),
    (e.type = 'series.scatter'),
    (e.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar']),
    (e.defaultOption = {
      coordinateSystem: 'cartesian2d',
      z: 2,
      legendHoverLink: !0,
      symbolSize: 10,
      large: !1,
      largeThreshold: 2e3,
      itemStyle: { opacity: 0.8 },
      emphasis: { scale: !0 },
      clip: !0,
      select: { itemStyle: { borderColor: '#212121' } },
      universalTransition: { divideShape: 'clone' },
    }),
    e
  );
})(mt);
const Bg = Vg;
var ru = 4,
  zg = (function () {
    function a() {}
    return a;
  })(),
  Gg = (function (a) {
    k(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return (r._off = 0), (r.hoverDataIdx = -1), r;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new zg();
      }),
      (e.prototype.reset = function () {
        (this.notClear = !1), (this._off = 0);
      }),
      (e.prototype.buildPath = function (t, r) {
        var n = r.points,
          i = r.size,
          o = this.symbolProxy,
          s = o.shape,
          l = t.getContext ? t.getContext() : t,
          u = l && i[0] < ru,
          h = this.softClipShape,
          v;
        if (u) {
          this._ctx = l;
          return;
        }
        for (this._ctx = null, v = this._off; v < n.length; ) {
          var c = n[v++],
            f = n[v++];
          isNaN(c) ||
            isNaN(f) ||
            (h && !h.contain(c, f)) ||
            ((s.x = c - i[0] / 2),
            (s.y = f - i[1] / 2),
            (s.width = i[0]),
            (s.height = i[1]),
            o.buildPath(t, s, !0));
        }
        this.incremental && ((this._off = v), (this.notClear = !0));
      }),
      (e.prototype.afterBrush = function () {
        var t = this.shape,
          r = t.points,
          n = t.size,
          i = this._ctx,
          o = this.softClipShape,
          s;
        if (i) {
          for (s = this._off; s < r.length; ) {
            var l = r[s++],
              u = r[s++];
            isNaN(l) ||
              isNaN(u) ||
              (o && !o.contain(l, u)) ||
              i.fillRect(l - n[0] / 2, u - n[1] / 2, n[0], n[1]);
          }
          this.incremental && ((this._off = s), (this.notClear = !0));
        }
      }),
      (e.prototype.findDataIndex = function (t, r) {
        for (
          var n = this.shape,
            i = n.points,
            o = n.size,
            s = Math.max(o[0], 4),
            l = Math.max(o[1], 4),
            u = i.length / 2 - 1;
          u >= 0;
          u--
        ) {
          var h = u * 2,
            v = i[h] - s / 2,
            c = i[h + 1] - l / 2;
          if (t >= v && r >= c && t <= v + s && r <= c + l) return u;
        }
        return -1;
      }),
      (e.prototype.contain = function (t, r) {
        var n = this.transformCoordToLocal(t, r),
          i = this.getBoundingRect();
        if (((t = n[0]), (r = n[1]), i.contain(t, r))) {
          var o = (this.hoverDataIdx = this.findDataIndex(t, r));
          return o >= 0;
        }
        return (this.hoverDataIdx = -1), !1;
      }),
      (e.prototype.getBoundingRect = function () {
        var t = this._rect;
        if (!t) {
          for (
            var r = this.shape,
              n = r.points,
              i = r.size,
              o = i[0],
              s = i[1],
              l = 1 / 0,
              u = 1 / 0,
              h = -1 / 0,
              v = -1 / 0,
              c = 0;
            c < n.length;

          ) {
            var f = n[c++],
              d = n[c++];
            (l = Math.min(f, l)), (h = Math.max(f, h)), (u = Math.min(d, u)), (v = Math.max(d, v));
          }
          t = this._rect = new jt(l - o / 2, u - s / 2, h - l + o, v - u + s);
        }
        return t;
      }),
      e
    );
  })(Vt),
  Og = (function () {
    function a() {
      this.group = new K();
    }
    return (
      (a.prototype.updateData = function (e, t) {
        this._clear();
        var r = this._create();
        r.setShape({ points: e.getLayout('points') }), this._setCommon(r, e, t);
      }),
      (a.prototype.updateLayout = function (e) {
        var t = e.getLayout('points');
        this.group.eachChild(function (r) {
          if (r.startIndex != null) {
            var n = (r.endIndex - r.startIndex) * 2,
              i = r.startIndex * 4 * 2;
            t = new Float32Array(t.buffer, i, n);
          }
          r.setShape('points', t), r.reset();
        });
      }),
      (a.prototype.incrementalPrepareUpdate = function (e) {
        this._clear();
      }),
      (a.prototype.incrementalUpdate = function (e, t, r) {
        var n = this._newAdded[0],
          i = t.getLayout('points'),
          o = n && n.shape.points;
        if (o && o.length < 2e4) {
          var s = o.length,
            l = new Float32Array(s + i.length);
          l.set(o), l.set(i, s), (n.endIndex = e.end), n.setShape({ points: l });
        } else {
          this._newAdded = [];
          var u = this._create();
          (u.startIndex = e.start),
            (u.endIndex = e.end),
            (u.incremental = !0),
            u.setShape({ points: i }),
            this._setCommon(u, t, r);
        }
      }),
      (a.prototype.eachRendered = function (e) {
        this._newAdded[0] && e(this._newAdded[0]);
      }),
      (a.prototype._create = function () {
        var e = new Gg({ cursor: 'default' });
        return (e.ignoreCoarsePointer = !0), this.group.add(e), this._newAdded.push(e), e;
      }),
      (a.prototype._setCommon = function (e, t, r) {
        var n = t.hostModel;
        r = r || {};
        var i = t.getVisual('symbolSize');
        e.setShape('size', i instanceof Array ? i : [i, i]),
          (e.softClipShape = r.clipShape || null),
          (e.symbolProxy = Wt(t.getVisual('symbol'), 0, 0, 0, 0)),
          (e.setColor = e.symbolProxy.setColor);
        var o = e.shape.size[0] < ru;
        e.useStyle(
          n
            .getModel('itemStyle')
            .getItemStyle(o ? ['color', 'shadowBlur', 'shadowColor'] : ['color']),
        );
        var s = t.getVisual('style'),
          l = s && s.fill;
        l && e.setColor(l);
        var u = lt(e);
        (u.seriesIndex = n.seriesIndex),
          e.on('mousemove', function (h) {
            u.dataIndex = null;
            var v = e.hoverDataIdx;
            v >= 0 && (u.dataIndex = v + (e.startIndex || 0));
          });
      }),
      (a.prototype.remove = function () {
        this._clear();
      }),
      (a.prototype._clear = function () {
        (this._newAdded = []), this.group.removeAll();
      }),
      a
    );
  })();
const Wg = Og;
var $g = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, r, n) {
      var i = t.getData(),
        o = this._updateSymbolDraw(i, t);
      o.updateData(i, { clipShape: this._getClipShape(t) }), (this._finished = !0);
    }),
    (e.prototype.incrementalPrepareRender = function (t, r, n) {
      var i = t.getData(),
        o = this._updateSymbolDraw(i, t);
      o.incrementalPrepareUpdate(i), (this._finished = !1);
    }),
    (e.prototype.incrementalRender = function (t, r, n) {
      this._symbolDraw.incrementalUpdate(t, r.getData(), { clipShape: this._getClipShape(r) }),
        (this._finished = t.end === r.getData().count());
    }),
    (e.prototype.updateTransform = function (t, r, n) {
      var i = t.getData();
      if ((this.group.dirty(), !this._finished || i.count() > 1e4)) return { update: !0 };
      var o = ur('').reset(t, r, n);
      o.progress && o.progress({ start: 0, end: i.count(), count: i.count() }, i),
        this._symbolDraw.updateLayout(i);
    }),
    (e.prototype.eachRendered = function (t) {
      this._symbolDraw && this._symbolDraw.eachRendered(t);
    }),
    (e.prototype._getClipShape = function (t) {
      var r = t.coordinateSystem,
        n = r && r.getArea && r.getArea();
      return t.get('clip', !0) ? n : null;
    }),
    (e.prototype._updateSymbolDraw = function (t, r) {
      var n = this._symbolDraw,
        i = r.pipelineContext,
        o = i.large;
      return (
        (!n || o !== this._isLargeDraw) &&
          (n && n.remove(),
          (n = this._symbolDraw = o ? new Wg() : new ir()),
          (this._isLargeDraw = o),
          this.group.removeAll()),
        this.group.add(n.group),
        n
      );
    }),
    (e.prototype.remove = function (t, r) {
      this._symbolDraw && this._symbolDraw.remove(!0), (this._symbolDraw = null);
    }),
    (e.prototype.dispose = function () {}),
    (e.type = 'scatter'),
    e
  );
})(dt);
const Fg = $g;
function Hg(a) {
  Y(rv), a.registerSeriesModel(Bg), a.registerChartView(Fg), a.registerLayout(ur('scatter'));
}
function Zg(a) {
  a.eachSeriesByType('radar', function (e) {
    var t = e.getData(),
      r = [],
      n = e.coordinateSystem;
    if (n) {
      var i = n.getIndicatorAxes();
      I(i, function (o, s) {
        t.each(t.mapDimension(i[s].dim), function (l, u) {
          r[u] = r[u] || [];
          var h = n.dataToPoint(l, s);
          r[u][s] = Fo(h) ? h : Ho(n);
        });
      }),
        t.each(function (o) {
          var s =
            nv(r[o], function (l) {
              return Fo(l);
            }) || Ho(n);
          r[o].push(s.slice()), t.setItemLayout(o, r[o]);
        });
    }
  });
}
function Fo(a) {
  return !isNaN(a[0]) && !isNaN(a[1]);
}
function Ho(a) {
  return [a.cx, a.cy];
}
function Ug(a) {
  var e = a.polar;
  if (e) {
    H(e) || (e = [e]);
    var t = [];
    I(e, function (r, n) {
      r.indicator
        ? (r.type && !r.shape && (r.shape = r.type),
          (a.radar = a.radar || []),
          H(a.radar) || (a.radar = [a.radar]),
          a.radar.push(r))
        : t.push(r);
    }),
      (a.polar = t);
  }
  I(a.series, function (r) {
    r && r.type === 'radar' && r.polarIndex && (r.radarIndex = r.polarIndex);
  });
}
var Yg = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, r, n) {
      var i = t.coordinateSystem,
        o = this.group,
        s = t.getData(),
        l = this._data;
      function u(c, f) {
        var d = c.getItemVisual(f, 'symbol') || 'circle';
        if (d !== 'none') {
          var p = rr(c.getItemVisual(f, 'symbolSize')),
            g = Wt(d, -1, -1, 2, 2),
            y = c.getItemVisual(f, 'symbolRotate') || 0;
          return (
            g.attr({
              style: { strokeNoScale: !0 },
              z2: 100,
              scaleX: p[0] / 2,
              scaleY: p[1] / 2,
              rotation: (y * Math.PI) / 180 || 0,
            }),
            g
          );
        }
      }
      function h(c, f, d, p, g, y) {
        d.removeAll();
        for (var m = 0; m < f.length - 1; m++) {
          var x = u(p, g);
          x &&
            ((x.__dimIdx = m),
            c[m]
              ? (x.setPosition(c[m]),
                hr[y ? 'initProps' : 'updateProps'](x, { x: f[m][0], y: f[m][1] }, t, g))
              : x.setPosition(f[m]),
            d.add(x));
        }
      }
      function v(c) {
        return O(c, function (f) {
          return [i.cx, i.cy];
        });
      }
      s
        .diff(l)
        .add(function (c) {
          var f = s.getItemLayout(c);
          if (f) {
            var d = new Me(),
              p = new Ie(),
              g = { shape: { points: f } };
            (d.shape.points = v(f)), (p.shape.points = v(f)), Qt(d, g, t, c), Qt(p, g, t, c);
            var y = new K(),
              m = new K();
            y.add(p),
              y.add(d),
              y.add(m),
              h(p.shape.points, f, m, s, c, !0),
              s.setItemGraphicEl(c, y);
          }
        })
        .update(function (c, f) {
          var d = l.getItemGraphicEl(f),
            p = d.childAt(0),
            g = d.childAt(1),
            y = d.childAt(2),
            m = { shape: { points: s.getItemLayout(c) } };
          m.shape.points &&
            (h(p.shape.points, m.shape.points, y, s, c, !1),
            fe(g),
            fe(p),
            ht(p, m, t),
            ht(g, m, t),
            s.setItemGraphicEl(c, d));
        })
        .remove(function (c) {
          o.remove(l.getItemGraphicEl(c));
        })
        .execute(),
        s.eachItemGraphicEl(function (c, f) {
          var d = s.getItemModel(f),
            p = c.childAt(0),
            g = c.childAt(1),
            y = c.childAt(2),
            m = s.getItemVisual(f, 'style'),
            x = m.fill;
          o.add(c),
            p.useStyle(nt(d.getModel('lineStyle').getLineStyle(), { fill: 'none', stroke: x })),
            It(p, d, 'lineStyle'),
            It(g, d, 'areaStyle');
          var S = d.getModel('areaStyle'),
            b = S.isEmpty() && S.parentModel.isEmpty();
          (g.ignore = b),
            I(['emphasis', 'select', 'blur'], function (A) {
              var C = d.getModel([A, 'areaStyle']),
                D = C.isEmpty() && C.parentModel.isEmpty();
              g.ensureState(A).ignore = D && b;
            }),
            g.useStyle(nt(S.getAreaStyle(), { fill: x, opacity: 0.7, decal: m.decal }));
          var w = d.getModel('emphasis'),
            _ = w.getModel('itemStyle').getItemStyle();
          y.eachChild(function (A) {
            if (A instanceof ye) {
              var C = A.style;
              A.useStyle(
                W({ image: C.image, x: C.x, y: C.y, width: C.width, height: C.height }, m),
              );
            } else A.useStyle(m), A.setColor(x), (A.style.strokeNoScale = !0);
            var D = A.ensureState('emphasis');
            D.style = Lt(_);
            var T = s.getStore().get(s.getDimensionIndex(A.__dimIdx), f);
            (T == null || isNaN(T)) && (T = ''),
              Jt(A, Nt(d), {
                labelFetcher: s.hostModel,
                labelDataIndex: f,
                labelDimIndex: A.__dimIdx,
                defaultText: T,
                inheritColor: x,
                defaultOpacity: m.opacity,
              });
          }),
            ft(c, w.get('focus'), w.get('blurScope'), w.get('disabled'));
        }),
        (this._data = s);
    }),
    (e.prototype.remove = function () {
      this.group.removeAll(), (this._data = null);
    }),
    (e.type = 'radar'),
    e
  );
})(dt);
const Xg = Yg;
var qg = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.hasSymbolVisual = !0), t;
  }
  return (
    (e.prototype.init = function (t) {
      a.prototype.init.apply(this, arguments),
        (this.legendVisualProvider = new vr(U(this.getData, this), U(this.getRawData, this)));
    }),
    (e.prototype.getInitialData = function (t, r) {
      return cr(this, { generateCoord: 'indicator_', generateCoordCount: 1 / 0 });
    }),
    (e.prototype.formatTooltip = function (t, r, n) {
      var i = this.getData(),
        o = this.coordinateSystem,
        s = o.getIndicatorAxes(),
        l = this.getData().getName(t),
        u = l === '' ? this.name : l,
        h = iv(this, t);
      return kt('section', {
        header: u,
        sortBlocks: !0,
        blocks: O(s, function (v) {
          var c = i.get(i.mapDimension(v.dim), t);
          return kt('nameValue', {
            markerType: 'subItem',
            markerColor: h,
            name: v.name,
            value: c,
            sortParam: c,
          });
        }),
      });
    }),
    (e.prototype.getTooltipPosition = function (t) {
      if (t != null) {
        for (
          var r = this.getData(),
            n = this.coordinateSystem,
            i = r.getValues(
              O(n.dimensions, function (u) {
                return r.mapDimension(u);
              }),
              t,
            ),
            o = 0,
            s = i.length;
          o < s;
          o++
        )
          if (!isNaN(i[o])) {
            var l = n.getIndicatorAxes();
            return n.coordToPoint(l[o].dataToCoord(i[o]), o);
          }
      }
    }),
    (e.type = 'series.radar'),
    (e.dependencies = ['radar']),
    (e.defaultOption = {
      z: 2,
      colorBy: 'data',
      coordinateSystem: 'radar',
      legendHoverLink: !0,
      radarIndex: 0,
      lineStyle: { width: 2, type: 'solid', join: 'round' },
      label: { position: 'top' },
      symbolSize: 8,
    }),
    e
  );
})(mt);
const Kg = qg;
function jg(a) {
  Y(Sf),
    a.registerChartView(Xg),
    a.registerSeriesModel(Kg),
    a.registerLayout(Zg),
    a.registerProcessor(fr('radar')),
    a.registerPreprocessor(Ug);
}
function Qg(a) {
  var e = a;
  e.hierNode = {
    defaultAncestor: null,
    ancestor: e,
    prelim: 0,
    modifier: 0,
    change: 0,
    shift: 0,
    i: 0,
    thread: null,
  };
  for (var t = [e], r, n; (r = t.pop()); )
    if (((n = r.children), r.isExpand && n.length))
      for (var i = n.length, o = i - 1; o >= 0; o--) {
        var s = n[o];
        (s.hierNode = {
          defaultAncestor: null,
          ancestor: s,
          prelim: 0,
          modifier: 0,
          change: 0,
          shift: 0,
          i: o,
          thread: null,
        }),
          t.push(s);
      }
}
function Jg(a, e) {
  var t = a.isExpand ? a.children : [],
    r = a.parentNode.children,
    n = a.hierNode.i ? r[a.hierNode.i - 1] : null;
  if (t.length) {
    ay(a);
    var i = (t[0].hierNode.prelim + t[t.length - 1].hierNode.prelim) / 2;
    n
      ? ((a.hierNode.prelim = n.hierNode.prelim + e(a, n)),
        (a.hierNode.modifier = a.hierNode.prelim - i))
      : (a.hierNode.prelim = i);
  } else n && (a.hierNode.prelim = n.hierNode.prelim + e(a, n));
  a.parentNode.hierNode.defaultAncestor = ry(
    a,
    n,
    a.parentNode.hierNode.defaultAncestor || r[0],
    e,
  );
}
function ty(a) {
  var e = a.hierNode.prelim + a.parentNode.hierNode.modifier;
  a.setLayout({ x: e }, !0), (a.hierNode.modifier += a.parentNode.hierNode.modifier);
}
function Zo(a) {
  return arguments.length ? a : oy;
}
function qe(a, e) {
  return (a -= Math.PI / 2), { x: e * Math.cos(a), y: e * Math.sin(a) };
}
function ey(a, e) {
  return re(a.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
}
function ay(a) {
  for (var e = a.children, t = e.length, r = 0, n = 0; --t >= 0; ) {
    var i = e[t];
    (i.hierNode.prelim += r),
      (i.hierNode.modifier += r),
      (n += i.hierNode.change),
      (r += i.hierNode.shift + n);
  }
}
function ry(a, e, t, r) {
  if (e) {
    for (
      var n = a,
        i = a,
        o = i.parentNode.children[0],
        s = e,
        l = n.hierNode.modifier,
        u = i.hierNode.modifier,
        h = o.hierNode.modifier,
        v = s.hierNode.modifier;
      (s = Wr(s)), (i = $r(i)), s && i;

    ) {
      (n = Wr(n)), (o = $r(o)), (n.hierNode.ancestor = a);
      var c = s.hierNode.prelim + v - i.hierNode.prelim - u + r(s, i);
      c > 0 && (iy(ny(s, a, t), a, c), (u += c), (l += c)),
        (v += s.hierNode.modifier),
        (u += i.hierNode.modifier),
        (l += n.hierNode.modifier),
        (h += o.hierNode.modifier);
    }
    s && !Wr(n) && ((n.hierNode.thread = s), (n.hierNode.modifier += v - l)),
      i && !$r(o) && ((o.hierNode.thread = i), (o.hierNode.modifier += u - h), (t = a));
  }
  return t;
}
function Wr(a) {
  var e = a.children;
  return e.length && a.isExpand ? e[e.length - 1] : a.hierNode.thread;
}
function $r(a) {
  var e = a.children;
  return e.length && a.isExpand ? e[0] : a.hierNode.thread;
}
function ny(a, e, t) {
  return a.hierNode.ancestor.parentNode === e.parentNode ? a.hierNode.ancestor : t;
}
function iy(a, e, t) {
  var r = t / (e.hierNode.i - a.hierNode.i);
  (e.hierNode.change -= r),
    (e.hierNode.shift += t),
    (e.hierNode.modifier += t),
    (e.hierNode.prelim += t),
    (a.hierNode.change += r);
}
function oy(a, e) {
  return a.parentNode === e.parentNode ? 1 : 2;
}
var sy = (function () {
    function a() {
      (this.parentPoint = []), (this.childPoints = []);
    }
    return a;
  })(),
  ly = (function (a) {
    k(e, a);
    function e(t) {
      return a.call(this, t) || this;
    }
    return (
      (e.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null };
      }),
      (e.prototype.getDefaultShape = function () {
        return new sy();
      }),
      (e.prototype.buildPath = function (t, r) {
        var n = r.childPoints,
          i = n.length,
          o = r.parentPoint,
          s = n[0],
          l = n[i - 1];
        if (i === 1) {
          t.moveTo(o[0], o[1]), t.lineTo(s[0], s[1]);
          return;
        }
        var u = r.orient,
          h = u === 'TB' || u === 'BT' ? 0 : 1,
          v = 1 - h,
          c = z(r.forkPosition, 1),
          f = [];
        (f[h] = o[h]),
          (f[v] = o[v] + (l[v] - o[v]) * c),
          t.moveTo(o[0], o[1]),
          t.lineTo(f[0], f[1]),
          t.moveTo(s[0], s[1]),
          (f[h] = s[h]),
          t.lineTo(f[0], f[1]),
          (f[h] = l[h]),
          t.lineTo(f[0], f[1]),
          t.lineTo(l[0], l[1]);
        for (var d = 1; d < i - 1; d++) {
          var p = n[d];
          t.moveTo(p[0], p[1]), (f[h] = p[h]), t.lineTo(f[0], f[1]);
        }
      }),
      e
    );
  })(Vt),
  uy = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t._mainGroup = new K()), t;
    }
    return (
      (e.prototype.init = function (t, r) {
        (this._controller = new lr(r.getZr())),
          (this._controllerHost = { target: this.group }),
          this.group.add(this._mainGroup);
      }),
      (e.prototype.render = function (t, r, n) {
        var i = t.getData(),
          o = t.layoutInfo,
          s = this._mainGroup,
          l = t.get('layout');
        l === 'radial'
          ? ((s.x = o.x + o.width / 2), (s.y = o.y + o.height / 2))
          : ((s.x = o.x), (s.y = o.y)),
          this._updateViewCoordSys(t, n),
          this._updateController(t, r, n);
        var u = this._data;
        i
          .diff(u)
          .add(function (h) {
            Uo(i, h) && Yo(i, h, null, s, t);
          })
          .update(function (h, v) {
            var c = u.getItemGraphicEl(v);
            if (!Uo(i, h)) {
              c && qo(u, v, c, s, t);
              return;
            }
            Yo(i, h, c, s, t);
          })
          .remove(function (h) {
            var v = u.getItemGraphicEl(h);
            v && qo(u, h, v, s, t);
          })
          .execute(),
          (this._nodeScaleRatio = t.get('nodeScaleRatio')),
          this._updateNodeAndLinkScale(t),
          t.get('expandAndCollapse') === !0 &&
            i.eachItemGraphicEl(function (h, v) {
              h.off('click').on('click', function () {
                n.dispatchAction({ type: 'treeExpandAndCollapse', seriesId: t.id, dataIndex: v });
              });
            }),
          (this._data = i);
      }),
      (e.prototype._updateViewCoordSys = function (t, r) {
        var n = t.getData(),
          i = [];
        n.each(function (v) {
          var c = n.getItemLayout(v);
          c && !isNaN(c.x) && !isNaN(c.y) && i.push([+c.x, +c.y]);
        });
        var o = [],
          s = [];
        gl(i, o, s);
        var l = this._min,
          u = this._max;
        s[0] - o[0] === 0 && ((o[0] = l ? l[0] : o[0] - 1), (s[0] = u ? u[0] : s[0] + 1)),
          s[1] - o[1] === 0 && ((o[1] = l ? l[1] : o[1] - 1), (s[1] = u ? u[1] : s[1] + 1));
        var h = (t.coordinateSystem = new Xn());
        (h.zoomLimit = t.get('scaleLimit')),
          h.setBoundingRect(o[0], o[1], s[0] - o[0], s[1] - o[1]),
          h.setCenter(t.get('center'), r),
          h.setZoom(t.get('zoom')),
          this.group.attr({ x: h.x, y: h.y, scaleX: h.scaleX, scaleY: h.scaleY }),
          (this._min = o),
          (this._max = s);
      }),
      (e.prototype._updateController = function (t, r, n) {
        var i = this,
          o = this._controller,
          s = this._controllerHost,
          l = this.group;
        o.setPointerChecker(function (u, h, v) {
          var c = l.getBoundingRect();
          return c.applyTransform(l.transform), c.contain(h, v) && !yl(u, n, t);
        }),
          o.enable(t.get('roam')),
          (s.zoomLimit = t.get('scaleLimit')),
          (s.zoom = t.coordinateSystem.getZoom()),
          o
            .off('pan')
            .off('zoom')
            .on('pan', function (u) {
              ml(s, u.dx, u.dy),
                n.dispatchAction({ seriesId: t.id, type: 'treeRoam', dx: u.dx, dy: u.dy });
            })
            .on('zoom', function (u) {
              xl(s, u.scale, u.originX, u.originY),
                n.dispatchAction({
                  seriesId: t.id,
                  type: 'treeRoam',
                  zoom: u.scale,
                  originX: u.originX,
                  originY: u.originY,
                }),
                i._updateNodeAndLinkScale(t),
                n.updateLabelLayout();
            });
      }),
      (e.prototype._updateNodeAndLinkScale = function (t) {
        var r = t.getData(),
          n = this._getNodeGlobalScale(t);
        r.eachItemGraphicEl(function (i, o) {
          i.setSymbolScale(n);
        });
      }),
      (e.prototype._getNodeGlobalScale = function (t) {
        var r = t.coordinateSystem;
        if (r.type !== 'view') return 1;
        var n = this._nodeScaleRatio,
          i = r.scaleX || 1,
          o = r.getZoom(),
          s = (o - 1) * n + 1;
        return s / i;
      }),
      (e.prototype.dispose = function () {
        this._controller && this._controller.dispose(), (this._controllerHost = null);
      }),
      (e.prototype.remove = function () {
        this._mainGroup.removeAll(), (this._data = null);
      }),
      (e.type = 'tree'),
      e
    );
  })(dt);
function Uo(a, e) {
  var t = a.getItemLayout(e);
  return t && !isNaN(t.x) && !isNaN(t.y);
}
function Yo(a, e, t, r, n) {
  var i = !t,
    o = a.tree.getNodeByDataIndex(e),
    s = o.getModel(),
    l = o.getVisual('style').fill,
    u = o.isExpand === !1 && o.children.length !== 0 ? l : '#fff',
    h = a.tree.root,
    v = o.parentNode === h ? o : o.parentNode || o,
    c = a.getItemGraphicEl(v.dataIndex),
    f = v.getLayout(),
    d = c ? { x: c.__oldX, y: c.__oldY, rawX: c.__radialOldRawX, rawY: c.__radialOldRawY } : f,
    p = o.getLayout();
  i
    ? ((t = new Sl(a, e, null, { symbolInnerColor: u, useNameLabel: !0 })),
      (t.x = d.x),
      (t.y = d.y))
    : t.updateData(a, e, null, { symbolInnerColor: u, useNameLabel: !0 }),
    (t.__radialOldRawX = t.__radialRawX),
    (t.__radialOldRawY = t.__radialRawY),
    (t.__radialRawX = p.rawX),
    (t.__radialRawY = p.rawY),
    r.add(t),
    a.setItemGraphicEl(e, t),
    (t.__oldX = t.x),
    (t.__oldY = t.y),
    ht(t, { x: p.x, y: p.y }, n);
  var g = t.getSymbolPath();
  if (n.get('layout') === 'radial') {
    var y = h.children[0],
      m = y.getLayout(),
      x = y.children.length,
      S = void 0,
      b = void 0;
    if (p.x === m.x && o.isExpand === !0 && y.children.length) {
      var w = {
        x: (y.children[0].getLayout().x + y.children[x - 1].getLayout().x) / 2,
        y: (y.children[0].getLayout().y + y.children[x - 1].getLayout().y) / 2,
      };
      (S = Math.atan2(w.y - m.y, w.x - m.x)),
        S < 0 && (S = Math.PI * 2 + S),
        (b = w.x < m.x),
        b && (S = S - Math.PI);
    } else
      (S = Math.atan2(p.y - m.y, p.x - m.x)),
        S < 0 && (S = Math.PI * 2 + S),
        o.children.length === 0 || (o.children.length !== 0 && o.isExpand === !1)
          ? ((b = p.x < m.x), b && (S = S - Math.PI))
          : ((b = p.x > m.x), b || (S = S - Math.PI));
    var _ = b ? 'left' : 'right',
      A = s.getModel('label'),
      C = A.get('rotate'),
      D = C * (Math.PI / 180),
      T = g.getTextContent();
    T &&
      (g.setTextConfig({
        position: A.get('position') || _,
        rotation: C == null ? -S : D,
        origin: 'center',
      }),
      T.setStyle('verticalAlign', 'middle'));
  }
  var L = s.get(['emphasis', 'focus']),
    P =
      L === 'relative'
        ? mn(o.getAncestorsIndices(), o.getDescendantIndices())
        : L === 'ancestor'
        ? o.getAncestorsIndices()
        : L === 'descendant'
        ? o.getDescendantIndices()
        : null;
  P && (lt(t).focus = P),
    hy(n, o, h, t, d, f, p, r),
    t.__edge &&
      (t.onHoverStateChange = function (M) {
        if (M !== 'blur') {
          var E = o.parentNode && a.getItemGraphicEl(o.parentNode.dataIndex);
          (E && E.hoverState === ov) || sv(t.__edge, M);
        }
      });
}
function hy(a, e, t, r, n, i, o, s) {
  var l = e.getModel(),
    u = a.get('edgeShape'),
    h = a.get('layout'),
    v = a.getOrient(),
    c = a.get(['lineStyle', 'curveness']),
    f = a.get('edgeForkPosition'),
    d = l.getModel('lineStyle').getLineStyle(),
    p = r.__edge;
  if (u === 'curve')
    e.parentNode &&
      e.parentNode !== t &&
      (p || (p = r.__edge = new ll({ shape: Ln(h, v, c, n, n) })),
      ht(p, { shape: Ln(h, v, c, i, o) }, a));
  else if (
    u === 'polyline' &&
    h === 'orthogonal' &&
    e !== t &&
    e.children &&
    e.children.length !== 0 &&
    e.isExpand === !0
  ) {
    for (var g = e.children, y = [], m = 0; m < g.length; m++) {
      var x = g[m].getLayout();
      y.push([x.x, x.y]);
    }
    p ||
      (p = r.__edge =
        new ly({
          shape: { parentPoint: [o.x, o.y], childPoints: [[o.x, o.y]], orient: v, forkPosition: f },
        })),
      ht(p, { shape: { parentPoint: [o.x, o.y], childPoints: y } }, a);
  }
  p &&
    !(u === 'polyline' && !e.isExpand) &&
    (p.useStyle(nt({ strokeNoScale: !0, fill: null }, d)), It(p, l, 'lineStyle'), Ga(p), s.add(p));
}
function Xo(a, e, t, r, n) {
  var i = e.tree.root,
    o = nu(i, a),
    s = o.source,
    l = o.sourceLayout,
    u = e.getItemGraphicEl(a.dataIndex);
  if (u) {
    var h = e.getItemGraphicEl(s.dataIndex),
      v = h.__edge,
      c = u.__edge || (s.isExpand === !1 || s.children.length === 1 ? v : void 0),
      f = r.get('edgeShape'),
      d = r.get('layout'),
      p = r.get('orient'),
      g = r.get(['lineStyle', 'curveness']);
    c &&
      (f === 'curve'
        ? Oa(c, { shape: Ln(d, p, g, l, l), style: { opacity: 0 } }, r, {
            cb: function () {
              t.remove(c);
            },
            removeOpt: n,
          })
        : f === 'polyline' &&
          r.get('layout') === 'orthogonal' &&
          Oa(
            c,
            {
              shape: { parentPoint: [l.x, l.y], childPoints: [[l.x, l.y]] },
              style: { opacity: 0 },
            },
            r,
            {
              cb: function () {
                t.remove(c);
              },
              removeOpt: n,
            },
          ));
  }
}
function nu(a, e) {
  for (var t = e.parentNode === a ? e : e.parentNode || e, r; (r = t.getLayout()), r == null; )
    t = t.parentNode === a ? t : t.parentNode || t;
  return { source: t, sourceLayout: r };
}
function qo(a, e, t, r, n) {
  var i = a.tree.getNodeByDataIndex(e),
    o = a.tree.root,
    s = nu(o, i).sourceLayout,
    l = { duration: n.get('animationDurationUpdate'), easing: n.get('animationEasingUpdate') };
  Oa(t, { x: s.x + 1, y: s.y + 1 }, n, {
    cb: function () {
      r.remove(t), a.setItemGraphicEl(e, null);
    },
    removeOpt: l,
  }),
    t.fadeOut(null, a.hostModel, { fadeLabel: !0, animation: l }),
    i.children.forEach(function (u) {
      Xo(u, a, r, n, l);
    }),
    Xo(i, a, r, n, l);
}
function Ln(a, e, t, r, n) {
  var i, o, s, l, u, h, v, c;
  if (a === 'radial') {
    (u = r.rawX), (v = r.rawY), (h = n.rawX), (c = n.rawY);
    var f = qe(u, v),
      d = qe(u, v + (c - v) * t),
      p = qe(h, c + (v - c) * t),
      g = qe(h, c);
    return {
      x1: f.x || 0,
      y1: f.y || 0,
      x2: g.x || 0,
      y2: g.y || 0,
      cpx1: d.x || 0,
      cpy1: d.y || 0,
      cpx2: p.x || 0,
      cpy2: p.y || 0,
    };
  } else
    (u = r.x),
      (v = r.y),
      (h = n.x),
      (c = n.y),
      (e === 'LR' || e === 'RL') &&
        ((i = u + (h - u) * t), (o = v), (s = h + (u - h) * t), (l = c)),
      (e === 'TB' || e === 'BT') &&
        ((i = u), (o = v + (c - v) * t), (s = h), (l = c + (v - c) * t));
  return { x1: u, y1: v, x2: h, y2: c, cpx1: i, cpy1: o, cpx2: s, cpy2: l };
}
const vy = uy;
var Rt = bt();
function iu(a) {
  var e = a.mainData,
    t = a.datas;
  t || ((t = { main: e }), (a.datasAttr = { main: 'data' })),
    (a.datas = a.mainData = null),
    ou(e, t, a),
    I(t, function (r) {
      I(e.TRANSFERABLE_METHODS, function (n) {
        r.wrapMethod(n, it(cy, a));
      });
    }),
    e.wrapMethod('cloneShallow', it(dy, a)),
    I(e.CHANGABLE_METHODS, function (r) {
      e.wrapMethod(r, it(fy, a));
    }),
    xn(t[e.dataType] === e);
}
function cy(a, e) {
  if (yy(this)) {
    var t = W({}, Rt(this).datas);
    (t[this.dataType] = e), ou(e, t, a);
  } else hi(e, this.dataType, Rt(this).mainData, a);
  return e;
}
function fy(a, e) {
  return a.struct && a.struct.update(), e;
}
function dy(a, e) {
  return (
    I(Rt(e).datas, function (t, r) {
      t !== e && hi(t.cloneShallow(), r, e, a);
    }),
    e
  );
}
function py(a) {
  var e = Rt(this).mainData;
  return a == null || e == null ? e : Rt(e).datas[a];
}
function gy() {
  var a = Rt(this).mainData;
  return a == null
    ? [{ data: a }]
    : O(pt(Rt(a).datas), function (e) {
        return { type: e, data: Rt(a).datas[e] };
      });
}
function yy(a) {
  return Rt(a).mainData === a;
}
function ou(a, e, t) {
  (Rt(a).datas = {}),
    I(e, function (r, n) {
      hi(r, n, a, t);
    });
}
function hi(a, e, t, r) {
  (Rt(t).datas[e] = a),
    (Rt(a).mainData = t),
    (a.dataType = e),
    r.struct && ((a[r.structAttr] = r.struct), (r.struct[r.datasAttr[e]] = a)),
    (a.getLinkedData = py),
    (a.getLinkedDataAll = gy);
}
var my = (function () {
    function a(e, t) {
      (this.depth = 0),
        (this.height = 0),
        (this.dataIndex = -1),
        (this.children = []),
        (this.viewChildren = []),
        (this.isExpand = !1),
        (this.name = e || ''),
        (this.hostTree = t);
    }
    return (
      (a.prototype.isRemoved = function () {
        return this.dataIndex < 0;
      }),
      (a.prototype.eachNode = function (e, t, r) {
        st(e) && ((r = t), (t = e), (e = null)), (e = e || {}), tt(e) && (e = { order: e });
        var n = e.order || 'preorder',
          i = this[e.attr || 'children'],
          o;
        n === 'preorder' && (o = t.call(r, this));
        for (var s = 0; !o && s < i.length; s++) i[s].eachNode(e, t, r);
        n === 'postorder' && t.call(r, this);
      }),
      (a.prototype.updateDepthAndHeight = function (e) {
        var t = 0;
        this.depth = e;
        for (var r = 0; r < this.children.length; r++) {
          var n = this.children[r];
          n.updateDepthAndHeight(e + 1), n.height > t && (t = n.height);
        }
        this.height = t + 1;
      }),
      (a.prototype.getNodeById = function (e) {
        if (this.getId() === e) return this;
        for (var t = 0, r = this.children, n = r.length; t < n; t++) {
          var i = r[t].getNodeById(e);
          if (i) return i;
        }
      }),
      (a.prototype.contains = function (e) {
        if (e === this) return !0;
        for (var t = 0, r = this.children, n = r.length; t < n; t++) {
          var i = r[t].contains(e);
          if (i) return i;
        }
      }),
      (a.prototype.getAncestors = function (e) {
        for (var t = [], r = e ? this : this.parentNode; r; ) t.push(r), (r = r.parentNode);
        return t.reverse(), t;
      }),
      (a.prototype.getAncestorsIndices = function () {
        for (var e = [], t = this; t; ) e.push(t.dataIndex), (t = t.parentNode);
        return e.reverse(), e;
      }),
      (a.prototype.getDescendantIndices = function () {
        var e = [];
        return (
          this.eachNode(function (t) {
            e.push(t.dataIndex);
          }),
          e
        );
      }),
      (a.prototype.getValue = function (e) {
        var t = this.hostTree.data;
        return t.getStore().get(t.getDimensionIndex(e || 'value'), this.dataIndex);
      }),
      (a.prototype.setLayout = function (e, t) {
        this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, e, t);
      }),
      (a.prototype.getLayout = function () {
        return this.hostTree.data.getItemLayout(this.dataIndex);
      }),
      (a.prototype.getModel = function (e) {
        if (!(this.dataIndex < 0)) {
          var t = this.hostTree,
            r = t.data.getItemModel(this.dataIndex);
          return r.getModel(e);
        }
      }),
      (a.prototype.getLevelModel = function () {
        return (this.hostTree.levelModels || [])[this.depth];
      }),
      (a.prototype.setVisual = function (e, t) {
        this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, e, t);
      }),
      (a.prototype.getVisual = function (e) {
        return this.hostTree.data.getItemVisual(this.dataIndex, e);
      }),
      (a.prototype.getRawIndex = function () {
        return this.hostTree.data.getRawIndex(this.dataIndex);
      }),
      (a.prototype.getId = function () {
        return this.hostTree.data.getId(this.dataIndex);
      }),
      (a.prototype.getChildIndex = function () {
        if (this.parentNode) {
          for (var e = this.parentNode.children, t = 0; t < e.length; ++t)
            if (e[t] === this) return t;
          return -1;
        }
        return -1;
      }),
      (a.prototype.isAncestorOf = function (e) {
        for (var t = e.parentNode; t; ) {
          if (t === this) return !0;
          t = t.parentNode;
        }
        return !1;
      }),
      (a.prototype.isDescendantOf = function (e) {
        return e !== this && e.isAncestorOf(this);
      }),
      a
    );
  })(),
  xy = (function () {
    function a(e) {
      (this.type = 'tree'), (this._nodes = []), (this.hostModel = e);
    }
    return (
      (a.prototype.eachNode = function (e, t, r) {
        this.root.eachNode(e, t, r);
      }),
      (a.prototype.getNodeByDataIndex = function (e) {
        var t = this.data.getRawIndex(e);
        return this._nodes[t];
      }),
      (a.prototype.getNodeById = function (e) {
        return this.root.getNodeById(e);
      }),
      (a.prototype.update = function () {
        for (var e = this.data, t = this._nodes, r = 0, n = t.length; r < n; r++)
          t[r].dataIndex = -1;
        for (var r = 0, n = e.count(); r < n; r++) t[e.getRawIndex(r)].dataIndex = r;
      }),
      (a.prototype.clearLayouts = function () {
        this.data.clearItemLayouts();
      }),
      (a.createTree = function (e, t, r) {
        var n = new a(t),
          i = [],
          o = 1;
        s(e);
        function s(h, v) {
          var c = h.value;
          (o = Math.max(o, H(c) ? c.length : 1)), i.push(h);
          var f = new my(ie(h.name, ''), n);
          v ? Sy(f, v) : (n.root = f), n._nodes.push(f);
          var d = h.children;
          if (d) for (var p = 0; p < d.length; p++) s(d[p], f);
        }
        n.root.updateDepthAndHeight(0);
        var l = qn(i, { coordDimensions: ['value'], dimensionsCount: o }).dimensions,
          u = new Mt(l, t);
        return (
          u.initData(i),
          r && r(u),
          iu({ mainData: u, struct: n, structAttr: 'tree' }),
          n.update(),
          n
        );
      }),
      a
    );
  })();
function Sy(a, e) {
  var t = e.children;
  a.parentNode !== e && (t.push(a), (a.parentNode = e));
}
const vi = xy;
function la(a, e, t) {
  if (a && Ct(e, a.type) >= 0) {
    var r = t.getData().tree.root,
      n = a.targetNode;
    if ((tt(n) && (n = r.getNodeById(n)), n && r.contains(n))) return { node: n };
    var i = a.targetNodeId;
    if (i != null && (n = r.getNodeById(i))) return { node: n };
  }
}
function su(a) {
  for (var e = []; a; ) (a = a.parentNode), a && e.push(a);
  return e.reverse();
}
function ci(a, e) {
  var t = su(a);
  return Ct(t, e) >= 0;
}
function xr(a, e) {
  for (var t = []; a; ) {
    var r = a.dataIndex;
    t.push({ name: a.name, dataIndex: r, value: e.getRawValue(r) }), (a = a.parentNode);
  }
  return t.reverse(), t;
}
var by = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.hasSymbolVisual = !0), (t.ignoreStyleOnData = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t) {
      var r = { name: t.name, children: t.data },
        n = t.leaves || {},
        i = new qt(n, this, this.ecModel),
        o = vi.createTree(r, this, s);
      function s(v) {
        v.wrapMethod('getItemModel', function (c, f) {
          var d = o.getNodeByDataIndex(f);
          return (d && d.children.length && d.isExpand) || (c.parentModel = i), c;
        });
      }
      var l = 0;
      o.eachNode('preorder', function (v) {
        v.depth > l && (l = v.depth);
      });
      var u = t.expandAndCollapse,
        h = u && t.initialTreeDepth >= 0 ? t.initialTreeDepth : l;
      return (
        o.root.eachNode('preorder', function (v) {
          var c = v.hostTree.data.getRawDataItem(v.dataIndex);
          v.isExpand = c && c.collapsed != null ? !c.collapsed : v.depth <= h;
        }),
        o.data
      );
    }),
    (e.prototype.getOrient = function () {
      var t = this.get('orient');
      return t === 'horizontal' ? (t = 'LR') : t === 'vertical' && (t = 'TB'), t;
    }),
    (e.prototype.setZoom = function (t) {
      this.option.zoom = t;
    }),
    (e.prototype.setCenter = function (t) {
      this.option.center = t;
    }),
    (e.prototype.formatTooltip = function (t, r, n) {
      for (
        var i = this.getData().tree,
          o = i.root.children[0],
          s = i.getNodeByDataIndex(t),
          l = s.getValue(),
          u = s.name;
        s && s !== o;

      )
        (u = s.parentNode.name + '.' + u), (s = s.parentNode);
      return kt('nameValue', { name: u, value: l, noValue: isNaN(l) || l == null });
    }),
    (e.prototype.getDataParams = function (t) {
      var r = a.prototype.getDataParams.apply(this, arguments),
        n = this.getData().tree.getNodeByDataIndex(t);
      return (r.treeAncestors = xr(n, this)), (r.collapsed = !n.isExpand), r;
    }),
    (e.type = 'series.tree'),
    (e.layoutMode = 'box'),
    (e.defaultOption = {
      z: 2,
      coordinateSystem: 'view',
      left: '12%',
      top: '12%',
      right: '12%',
      bottom: '12%',
      layout: 'orthogonal',
      edgeShape: 'curve',
      edgeForkPosition: '50%',
      roam: !1,
      nodeScaleRatio: 0.4,
      center: null,
      zoom: 1,
      orient: 'LR',
      symbol: 'emptyCircle',
      symbolSize: 7,
      expandAndCollapse: !0,
      initialTreeDepth: 2,
      lineStyle: { color: '#ccc', width: 1.5, curveness: 0.5 },
      itemStyle: { color: 'lightsteelblue', borderWidth: 1.5 },
      label: { show: !0 },
      animationEasing: 'linear',
      animationDuration: 700,
      animationDurationUpdate: 500,
    }),
    e
  );
})(mt);
const wy = by;
function _y(a, e, t) {
  for (var r = [a], n = [], i; (i = r.pop()); )
    if ((n.push(i), i.isExpand)) {
      var o = i.children;
      if (o.length) for (var s = 0; s < o.length; s++) r.push(o[s]);
    }
  for (; (i = n.pop()); ) e(i, t);
}
function Ue(a, e) {
  for (var t = [a], r; (r = t.pop()); )
    if ((e(r), r.isExpand)) {
      var n = r.children;
      if (n.length) for (var i = n.length - 1; i >= 0; i--) t.push(n[i]);
    }
}
function Ay(a, e) {
  a.eachSeriesByType('tree', function (t) {
    Dy(t, e);
  });
}
function Dy(a, e) {
  var t = ey(a, e);
  a.layoutInfo = t;
  var r = a.get('layout'),
    n = 0,
    i = 0,
    o = null;
  r === 'radial'
    ? ((n = 2 * Math.PI),
      (i = Math.min(t.height, t.width) / 2),
      (o = Zo(function (x, S) {
        return (x.parentNode === S.parentNode ? 1 : 2) / x.depth;
      })))
    : ((n = t.width), (i = t.height), (o = Zo()));
  var s = a.getData().tree.root,
    l = s.children[0];
  if (l) {
    Qg(s), _y(l, Jg, o), (s.hierNode.modifier = -l.hierNode.prelim), Ue(l, ty);
    var u = l,
      h = l,
      v = l;
    Ue(l, function (x) {
      var S = x.getLayout().x;
      S < u.getLayout().x && (u = x), S > h.getLayout().x && (h = x), x.depth > v.depth && (v = x);
    });
    var c = u === h ? 1 : o(u, h) / 2,
      f = c - u.getLayout().x,
      d = 0,
      p = 0,
      g = 0,
      y = 0;
    if (r === 'radial')
      (d = n / (h.getLayout().x + c + f)),
        (p = i / (v.depth - 1 || 1)),
        Ue(l, function (x) {
          (g = (x.getLayout().x + f) * d), (y = (x.depth - 1) * p);
          var S = qe(g, y);
          x.setLayout({ x: S.x, y: S.y, rawX: g, rawY: y }, !0);
        });
    else {
      var m = a.getOrient();
      m === 'RL' || m === 'LR'
        ? ((p = i / (h.getLayout().x + c + f)),
          (d = n / (v.depth - 1 || 1)),
          Ue(l, function (x) {
            (y = (x.getLayout().x + f) * p),
              (g = m === 'LR' ? (x.depth - 1) * d : n - (x.depth - 1) * d),
              x.setLayout({ x: g, y }, !0);
          }))
        : (m === 'TB' || m === 'BT') &&
          ((d = n / (h.getLayout().x + c + f)),
          (p = i / (v.depth - 1 || 1)),
          Ue(l, function (x) {
            (g = (x.getLayout().x + f) * d),
              (y = m === 'TB' ? (x.depth - 1) * p : i - (x.depth - 1) * p),
              x.setLayout({ x: g, y }, !0);
          }));
    }
  }
}
function Ty(a) {
  a.eachSeriesByType('tree', function (e) {
    var t = e.getData(),
      r = t.tree;
    r.eachNode(function (n) {
      var i = n.getModel(),
        o = i.getModel('itemStyle').getItemStyle(),
        s = t.ensureUniqueItemVisual(n.dataIndex, 'style');
      W(s, o);
    });
  });
}
function Cy(a) {
  a.registerAction(
    { type: 'treeExpandAndCollapse', event: 'treeExpandAndCollapse', update: 'update' },
    function (e, t) {
      t.eachComponent({ mainType: 'series', subType: 'tree', query: e }, function (r) {
        var n = e.dataIndex,
          i = r.getData().tree,
          o = i.getNodeByDataIndex(n);
        o.isExpand = !o.isExpand;
      });
    },
  ),
    a.registerAction({ type: 'treeRoam', event: 'treeRoam', update: 'none' }, function (e, t, r) {
      t.eachComponent({ mainType: 'series', subType: 'tree', query: e }, function (n) {
        var i = n.coordinateSystem,
          o = bl(i, e, void 0, r);
        n.setCenter && n.setCenter(o.center), n.setZoom && n.setZoom(o.zoom);
      });
    });
}
function My(a) {
  a.registerChartView(vy),
    a.registerSeriesModel(wy),
    a.registerLayout(Ay),
    a.registerVisual(Ty),
    Cy(a);
}
var Ko = ['treemapZoomToNode', 'treemapRender', 'treemapMove'];
function Ly(a) {
  for (var e = 0; e < Ko.length; e++) a.registerAction({ type: Ko[e], update: 'updateView' }, ze);
  a.registerAction({ type: 'treemapRootToNode', update: 'updateView' }, function (t, r) {
    r.eachComponent({ mainType: 'series', subType: 'treemap', query: t }, n);
    function n(i, o) {
      var s = ['treemapZoomToNode', 'treemapRootToNode'],
        l = la(t, s, i);
      if (l) {
        var u = i.getViewRoot();
        u && (t.direction = ci(u, l.node) ? 'rollUp' : 'drillDown'), i.resetViewRoot(l.node);
      }
    }
  });
}
function lu(a) {
  var e = a.getData(),
    t = e.tree,
    r = {};
  t.eachNode(function (n) {
    for (var i = n; i && i.depth > 1; ) i = i.parentNode;
    var o = yn(a.ecModel, i.name || i.dataIndex + '', r);
    n.setVisual('decal', o);
  });
}
var Iy = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.preventUsingHoverLayer = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      var n = { name: t.name, children: t.data };
      uu(n);
      var i = t.levels || [],
        o = (this.designatedVisualItemStyle = {}),
        s = new qt({ itemStyle: o }, this, r);
      i = t.levels = Py(i, r);
      var l = O(
          i || [],
          function (v) {
            return new qt(v, s, r);
          },
          this,
        ),
        u = vi.createTree(n, this, h);
      function h(v) {
        v.wrapMethod('getItemModel', function (c, f) {
          var d = u.getNodeByDataIndex(f),
            p = d ? l[d.depth] : null;
          return (c.parentModel = p || s), c;
        });
      }
      return u.data;
    }),
    (e.prototype.optionUpdated = function () {
      this.resetViewRoot();
    }),
    (e.prototype.formatTooltip = function (t, r, n) {
      var i = this.getData(),
        o = this.getRawValue(t),
        s = i.getName(t);
      return kt('nameValue', { name: s, value: o });
    }),
    (e.prototype.getDataParams = function (t) {
      var r = a.prototype.getDataParams.apply(this, arguments),
        n = this.getData().tree.getNodeByDataIndex(t);
      return (r.treeAncestors = xr(n, this)), (r.treePathInfo = r.treeAncestors), r;
    }),
    (e.prototype.setLayoutInfo = function (t) {
      (this.layoutInfo = this.layoutInfo || {}), W(this.layoutInfo, t);
    }),
    (e.prototype.mapIdToIndex = function (t) {
      var r = this._idIndexMap;
      r || ((r = this._idIndexMap = Kt()), (this._idIndexMapCount = 0));
      var n = r.get(t);
      return n == null && r.set(t, (n = this._idIndexMapCount++)), n;
    }),
    (e.prototype.getViewRoot = function () {
      return this._viewRoot;
    }),
    (e.prototype.resetViewRoot = function (t) {
      t ? (this._viewRoot = t) : (t = this._viewRoot);
      var r = this.getRawData().tree.root;
      (!t || (t !== r && !r.contains(t))) && (this._viewRoot = r);
    }),
    (e.prototype.enableAriaDecal = function () {
      lu(this);
    }),
    (e.type = 'series.treemap'),
    (e.layoutMode = 'box'),
    (e.defaultOption = {
      progressive: 0,
      left: 'center',
      top: 'middle',
      width: '80%',
      height: '80%',
      sort: !0,
      clipWindow: 'origin',
      squareRatio: 0.5 * (1 + Math.sqrt(5)),
      leafDepth: null,
      drillDownIcon: '▶',
      zoomToNodeRatio: 0.32 * 0.32,
      roam: !0,
      nodeClick: 'zoomToNode',
      animation: !0,
      animationDurationUpdate: 900,
      animationEasing: 'quinticInOut',
      breadcrumb: {
        show: !0,
        height: 22,
        left: 'center',
        top: 'bottom',
        emptyItemWidth: 25,
        itemStyle: { color: 'rgba(0,0,0,0.7)', textStyle: { color: '#fff' } },
        emphasis: { itemStyle: { color: 'rgba(0,0,0,0.9)' } },
      },
      label: {
        show: !0,
        distance: 0,
        padding: 5,
        position: 'inside',
        color: '#fff',
        overflow: 'truncate',
      },
      upperLabel: {
        show: !1,
        position: [0, '50%'],
        height: 20,
        overflow: 'truncate',
        verticalAlign: 'middle',
      },
      itemStyle: {
        color: null,
        colorAlpha: null,
        colorSaturation: null,
        borderWidth: 0,
        gapWidth: 0,
        borderColor: '#fff',
        borderColorSaturation: null,
      },
      emphasis: {
        upperLabel: {
          show: !0,
          position: [0, '50%'],
          overflow: 'truncate',
          verticalAlign: 'middle',
        },
      },
      visualDimension: 0,
      visualMin: null,
      visualMax: null,
      color: [],
      colorAlpha: null,
      colorSaturation: null,
      colorMappingBy: 'index',
      visibleMin: 10,
      childrenVisibleMin: null,
      levels: [],
    }),
    e
  );
})(mt);
function uu(a) {
  var e = 0;
  I(a.children, function (r) {
    uu(r);
    var n = r.value;
    H(n) && (n = n[0]), (e += n);
  });
  var t = a.value;
  H(t) && (t = t[0]),
    (t == null || isNaN(t)) && (t = e),
    t < 0 && (t = 0),
    H(a.value) ? (a.value[0] = t) : (a.value = t);
}
function Py(a, e) {
  var t = le(e.get('color')),
    r = le(e.get(['aria', 'decal', 'decals']));
  if (t) {
    a = a || [];
    var n, i;
    I(a, function (s) {
      var l = new qt(s),
        u = l.get('color'),
        h = l.get('decal');
      (l.get(['itemStyle', 'color']) || (u && u !== 'none')) && (n = !0),
        (l.get(['itemStyle', 'decal']) || (h && h !== 'none')) && (i = !0);
    });
    var o = a[0] || (a[0] = {});
    return n || (o.color = t.slice()), !i && r && (o.decal = r.slice()), a;
  }
}
const Ey = Iy;
var Ry = 8,
  jo = 8,
  Fr = 5,
  ky = (function () {
    function a(e) {
      (this.group = new K()), e.add(this.group);
    }
    return (
      (a.prototype.render = function (e, t, r, n) {
        var i = e.getModel('breadcrumb'),
          o = this.group;
        if ((o.removeAll(), !(!i.get('show') || !r))) {
          var s = i.getModel('itemStyle'),
            l = i.getModel('emphasis'),
            u = s.getModel('textStyle'),
            h = l.getModel(['itemStyle', 'textStyle']),
            v = {
              pos: {
                left: i.get('left'),
                right: i.get('right'),
                top: i.get('top'),
                bottom: i.get('bottom'),
              },
              box: { width: t.getWidth(), height: t.getHeight() },
              emptyItemWidth: i.get('emptyItemWidth'),
              totalWidth: 0,
              renderList: [],
            };
          this._prepare(r, v, u), this._renderContent(e, v, s, l, u, h, n), il(o, v.pos, v.box);
        }
      }),
      (a.prototype._prepare = function (e, t, r) {
        for (var n = e; n; n = n.parentNode) {
          var i = ie(n.getModel().get('name'), ''),
            o = r.getTextRect(i),
            s = Math.max(o.width + Ry * 2, t.emptyItemWidth);
          (t.totalWidth += s + jo), t.renderList.push({ node: n, text: i, width: s });
        }
      }),
      (a.prototype._renderContent = function (e, t, r, n, i, o, s) {
        for (
          var l = 0,
            u = t.emptyItemWidth,
            h = e.get(['breadcrumb', 'height']),
            v = lv(t.pos, t.box),
            c = t.totalWidth,
            f = t.renderList,
            d = n.getModel('itemStyle').getItemStyle(),
            p = f.length - 1;
          p >= 0;
          p--
        ) {
          var g = f[p],
            y = g.node,
            m = g.width,
            x = g.text;
          c > v.width && ((c -= m - u), (m = u), (x = null));
          var S = new Me({
            shape: { points: Ny(l, 0, m, h, p === f.length - 1, p === 0) },
            style: nt(r.getItemStyle(), { lineJoin: 'bevel' }),
            textContent: new gt({ style: yt(i, { text: x }) }),
            textConfig: { position: 'inside' },
            z2: dr * 1e4,
            onclick: it(s, y),
          });
          (S.disableLabelAnimation = !0),
            (S.getTextContent().ensureState('emphasis').style = yt(o, { text: x })),
            (S.ensureState('emphasis').style = d),
            ft(S, n.get('focus'), n.get('blurScope'), n.get('disabled')),
            this.group.add(S),
            Vy(S, e, y),
            (l += m + jo);
        }
      }),
      (a.prototype.remove = function () {
        this.group.removeAll();
      }),
      a
    );
  })();
function Ny(a, e, t, r, n, i) {
  var o = [
    [n ? a : a - Fr, e],
    [a + t, e],
    [a + t, e + r],
    [n ? a : a - Fr, e + r],
  ];
  return !i && o.splice(2, 0, [a + t + Fr, e + r / 2]), !n && o.push([a, e + r / 2]), o;
}
function Vy(a, e, t) {
  lt(a).eventData = {
    componentType: 'series',
    componentSubType: 'treemap',
    componentIndex: e.componentIndex,
    seriesIndex: e.seriesIndex,
    seriesName: e.name,
    seriesType: 'treemap',
    selfType: 'breadcrumb',
    nodeData: { dataIndex: t && t.dataIndex, name: t && t.name },
    treePathInfo: t && xr(t, e),
  };
}
const By = ky;
var zy = (function () {
  function a() {
    (this._storage = []), (this._elExistsMap = {});
  }
  return (
    (a.prototype.add = function (e, t, r, n, i) {
      return this._elExistsMap[e.id]
        ? !1
        : ((this._elExistsMap[e.id] = !0),
          this._storage.push({ el: e, target: t, duration: r, delay: n, easing: i }),
          !0);
    }),
    (a.prototype.finished = function (e) {
      return (this._finishedCallback = e), this;
    }),
    (a.prototype.start = function () {
      for (
        var e = this,
          t = this._storage.length,
          r = function () {
            t--,
              t <= 0 &&
                ((e._storage.length = 0),
                (e._elExistsMap = {}),
                e._finishedCallback && e._finishedCallback());
          },
          n = 0,
          i = this._storage.length;
        n < i;
        n++
      ) {
        var o = this._storage[n];
        o.el.animateTo(o.target, {
          duration: o.duration,
          delay: o.delay,
          easing: o.easing,
          setToFinal: !0,
          done: r,
          aborted: r,
        });
      }
      return this;
    }),
    a
  );
})();
function Gy() {
  return new zy();
}
var In = K,
  Qo = Tt,
  Jo = 3,
  ts = 'label',
  es = 'upperLabel',
  Oy = dr * 10,
  Wy = dr * 2,
  $y = dr * 3,
  be = Js([
    ['fill', 'color'],
    ['stroke', 'strokeColor'],
    ['lineWidth', 'strokeWidth'],
    ['shadowBlur'],
    ['shadowOffsetX'],
    ['shadowOffsetY'],
    ['shadowColor'],
  ]),
  as = function (a) {
    var e = be(a);
    return (e.stroke = e.fill = e.lineWidth = null), e;
  },
  Ua = bt(),
  Fy = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t._state = 'ready'), (t._storage = Ye()), t;
    }
    return (
      (e.prototype.render = function (t, r, n, i) {
        var o = r.findComponents({ mainType: 'series', subType: 'treemap', query: i });
        if (!(Ct(o, t) < 0)) {
          (this.seriesModel = t), (this.api = n), (this.ecModel = r);
          var s = ['treemapZoomToNode', 'treemapRootToNode'],
            l = la(i, s, t),
            u = i && i.type,
            h = t.layoutInfo,
            v = !this._oldTree,
            c = this._storage,
            f =
              u === 'treemapRootToNode' && l && c
                ? { rootNodeGroup: c.nodeGroup[l.node.getRawIndex()], direction: i.direction }
                : null,
            d = this._giveContainerGroup(h),
            p = t.get('animation'),
            g = this._doRender(d, t, f);
          p && !v && (!u || u === 'treemapZoomToNode' || u === 'treemapRootToNode')
            ? this._doAnimation(d, g, t, f)
            : g.renderFinally(),
            this._resetController(n),
            this._renderBreadcrumb(t, n, l);
        }
      }),
      (e.prototype._giveContainerGroup = function (t) {
        var r = this._containerGroup;
        return (
          r || ((r = this._containerGroup = new In()), this._initEvents(r), this.group.add(r)),
          (r.x = t.x),
          (r.y = t.y),
          r
        );
      }),
      (e.prototype._doRender = function (t, r, n) {
        var i = r.getData().tree,
          o = this._oldTree,
          s = Ye(),
          l = Ye(),
          u = this._storage,
          h = [];
        function v(g, y, m, x) {
          return Hy(r, l, u, n, s, h, g, y, m, x);
        }
        f(i.root ? [i.root] : [], o && o.root ? [o.root] : [], t, i === o || !o, 0);
        var c = d(u);
        return (
          (this._oldTree = i),
          (this._storage = l),
          { lastsForAnimation: s, willDeleteEls: c, renderFinally: p }
        );
        function f(g, y, m, x, S) {
          x
            ? ((y = g),
              I(g, function (_, A) {
                !_.isRemoved() && w(A, A);
              }))
            : new pr(y, g, b, b).add(w).update(w).remove(it(w, null)).execute();
          function b(_) {
            return _.getId();
          }
          function w(_, A) {
            var C = _ != null ? g[_] : null,
              D = A != null ? y[A] : null,
              T = v(C, D, m, S);
            T && f((C && C.viewChildren) || [], (D && D.viewChildren) || [], T, x, S + 1);
          }
        }
        function d(g) {
          var y = Ye();
          return (
            g &&
              I(g, function (m, x) {
                var S = y[x];
                I(m, function (b) {
                  b && (S.push(b), (Ua(b).willDelete = !0));
                });
              }),
            y
          );
        }
        function p() {
          I(c, function (g) {
            I(g, function (y) {
              y.parent && y.parent.remove(y);
            });
          }),
            I(h, function (g) {
              (g.invisible = !0), g.dirty();
            });
        }
      }),
      (e.prototype._doAnimation = function (t, r, n, i) {
        var o = n.get('animationDurationUpdate'),
          s = n.get('animationEasing'),
          l = (st(o) ? 0 : o) || 0,
          u = (st(s) ? null : s) || 'cubicOut',
          h = Gy();
        I(r.willDeleteEls, function (v, c) {
          I(v, function (f, d) {
            if (!f.invisible) {
              var p = f.parent,
                g,
                y = Ua(p);
              if (i && i.direction === 'drillDown')
                g =
                  p === i.rootNodeGroup
                    ? {
                        shape: { x: 0, y: 0, width: y.nodeWidth, height: y.nodeHeight },
                        style: { opacity: 0 },
                      }
                    : { style: { opacity: 0 } };
              else {
                var m = 0,
                  x = 0;
                y.willDelete || ((m = y.nodeWidth / 2), (x = y.nodeHeight / 2)),
                  (g =
                    c === 'nodeGroup'
                      ? { x: m, y: x, style: { opacity: 0 } }
                      : { shape: { x: m, y: x, width: 0, height: 0 }, style: { opacity: 0 } });
              }
              g && h.add(f, g, l, 0, u);
            }
          });
        }),
          I(
            this._storage,
            function (v, c) {
              I(v, function (f, d) {
                var p = r.lastsForAnimation[c][d],
                  g = {};
                p &&
                  (f instanceof K
                    ? p.oldX != null && ((g.x = f.x), (g.y = f.y), (f.x = p.oldX), (f.y = p.oldY))
                    : (p.oldShape && ((g.shape = W({}, f.shape)), f.setShape(p.oldShape)),
                      p.fadein
                        ? (f.setStyle('opacity', 0), (g.style = { opacity: 1 }))
                        : f.style.opacity !== 1 && (g.style = { opacity: 1 })),
                  h.add(f, g, l, 0, u));
              });
            },
            this,
          ),
          (this._state = 'animating'),
          h
            .finished(
              U(function () {
                (this._state = 'ready'), r.renderFinally();
              }, this),
            )
            .start();
      }),
      (e.prototype._resetController = function (t) {
        var r = this._controller;
        r ||
          ((r = this._controller = new lr(t.getZr())),
          r.enable(this.seriesModel.get('roam')),
          r.on('pan', U(this._onPan, this)),
          r.on('zoom', U(this._onZoom, this)));
        var n = new jt(0, 0, t.getWidth(), t.getHeight());
        r.setPointerChecker(function (i, o, s) {
          return n.contain(o, s);
        });
      }),
      (e.prototype._clearController = function () {
        var t = this._controller;
        t && (t.dispose(), (t = null));
      }),
      (e.prototype._onPan = function (t) {
        if (this._state !== 'animating' && (Math.abs(t.dx) > Jo || Math.abs(t.dy) > Jo)) {
          var r = this.seriesModel.getData().tree.root;
          if (!r) return;
          var n = r.getLayout();
          if (!n) return;
          this.api.dispatchAction({
            type: 'treemapMove',
            from: this.uid,
            seriesId: this.seriesModel.id,
            rootRect: { x: n.x + t.dx, y: n.y + t.dy, width: n.width, height: n.height },
          });
        }
      }),
      (e.prototype._onZoom = function (t) {
        var r = t.originX,
          n = t.originY;
        if (this._state !== 'animating') {
          var i = this.seriesModel.getData().tree.root;
          if (!i) return;
          var o = i.getLayout();
          if (!o) return;
          var s = new jt(o.x, o.y, o.width, o.height),
            l = this.seriesModel.layoutInfo;
          (r -= l.x), (n -= l.y);
          var u = ja();
          Be(u, u, [-r, -n]),
            uv(u, u, [t.scale, t.scale]),
            Be(u, u, [r, n]),
            s.applyTransform(u),
            this.api.dispatchAction({
              type: 'treemapRender',
              from: this.uid,
              seriesId: this.seriesModel.id,
              rootRect: { x: s.x, y: s.y, width: s.width, height: s.height },
            });
        }
      }),
      (e.prototype._initEvents = function (t) {
        var r = this;
        t.on(
          'click',
          function (n) {
            if (r._state === 'ready') {
              var i = r.seriesModel.get('nodeClick', !0);
              if (i) {
                var o = r.findTarget(n.offsetX, n.offsetY);
                if (o) {
                  var s = o.node;
                  if (s.getLayout().isLeafRoot) r._rootToNode(o);
                  else if (i === 'zoomToNode') r._zoomToNode(o);
                  else if (i === 'link') {
                    var l = s.hostTree.data.getItemModel(s.dataIndex),
                      u = l.get('link', !0),
                      h = l.get('target', !0) || 'blank';
                    u && wl(u, h);
                  }
                }
              }
            }
          },
          this,
        );
      }),
      (e.prototype._renderBreadcrumb = function (t, r, n) {
        var i = this;
        n ||
          ((n =
            t.get('leafDepth', !0) != null
              ? { node: t.getViewRoot() }
              : this.findTarget(r.getWidth() / 2, r.getHeight() / 2)),
          n || (n = { node: t.getData().tree.root })),
          (this._breadcrumb || (this._breadcrumb = new By(this.group))).render(
            t,
            r,
            n.node,
            function (o) {
              i._state !== 'animating' &&
                (ci(t.getViewRoot(), o) ? i._rootToNode({ node: o }) : i._zoomToNode({ node: o }));
            },
          );
      }),
      (e.prototype.remove = function () {
        this._clearController(),
          this._containerGroup && this._containerGroup.removeAll(),
          (this._storage = Ye()),
          (this._state = 'ready'),
          this._breadcrumb && this._breadcrumb.remove();
      }),
      (e.prototype.dispose = function () {
        this._clearController();
      }),
      (e.prototype._zoomToNode = function (t) {
        this.api.dispatchAction({
          type: 'treemapZoomToNode',
          from: this.uid,
          seriesId: this.seriesModel.id,
          targetNode: t.node,
        });
      }),
      (e.prototype._rootToNode = function (t) {
        this.api.dispatchAction({
          type: 'treemapRootToNode',
          from: this.uid,
          seriesId: this.seriesModel.id,
          targetNode: t.node,
        });
      }),
      (e.prototype.findTarget = function (t, r) {
        var n,
          i = this.seriesModel.getViewRoot();
        return (
          i.eachNode(
            { attr: 'viewChildren', order: 'preorder' },
            function (o) {
              var s = this._storage.background[o.getRawIndex()];
              if (s) {
                var l = s.transformCoordToLocal(t, r),
                  u = s.shape;
                if (u.x <= l[0] && l[0] <= u.x + u.width && u.y <= l[1] && l[1] <= u.y + u.height)
                  n = { node: o, offsetX: l[0], offsetY: l[1] };
                else return !1;
              }
            },
            this,
          ),
          n
        );
      }),
      (e.type = 'treemap'),
      e
    );
  })(dt);
function Ye() {
  return { nodeGroup: [], background: [], content: [] };
}
function Hy(a, e, t, r, n, i, o, s, l, u) {
  if (!o) return;
  var h = o.getLayout(),
    v = a.getData(),
    c = o.getModel();
  if ((v.setItemGraphicEl(o.dataIndex, null), !h || !h.isInView)) return;
  var f = h.width,
    d = h.height,
    p = h.borderWidth,
    g = h.invisible,
    y = o.getRawIndex(),
    m = s && s.getRawIndex(),
    x = o.viewChildren,
    S = h.upperHeight,
    b = x && x.length,
    w = c.getModel('itemStyle'),
    _ = c.getModel(['emphasis', 'itemStyle']),
    A = c.getModel(['blur', 'itemStyle']),
    C = c.getModel(['select', 'itemStyle']),
    D = w.get('borderRadius') || 0,
    T = X('nodeGroup', In);
  if (!T) return;
  if (
    (l.add(T),
    (T.x = h.x || 0),
    (T.y = h.y || 0),
    T.markRedraw(),
    (Ua(T).nodeWidth = f),
    (Ua(T).nodeHeight = d),
    h.isAboveViewRoot)
  )
    return T;
  var L = X('background', Qo, u, Wy);
  L && G(T, L, b && h.upperLabelHeight);
  var P = c.getModel('emphasis'),
    M = P.get('focus'),
    E = P.get('blurScope'),
    R = P.get('disabled'),
    N =
      M === 'ancestor'
        ? o.getAncestorsIndices()
        : M === 'descendant'
        ? o.getDescendantIndices()
        : M;
  if (b) Ni(T) && ya(T, !1), L && (ya(L, !R), v.setItemGraphicEl(o.dataIndex, L), Vi(L, N, E));
  else {
    var V = X('content', Qo, u, $y);
    V && $(T, V),
      (L.disableMorphing = !0),
      L && Ni(L) && ya(L, !1),
      ya(T, !R),
      v.setItemGraphicEl(o.dataIndex, T),
      Vi(T, N, E);
  }
  return T;
  function G(q, Z, et) {
    var J = lt(Z);
    if (
      ((J.dataIndex = o.dataIndex),
      (J.seriesIndex = a.seriesIndex),
      Z.setShape({ x: 0, y: 0, width: f, height: d, r: D }),
      g)
    )
      F(Z);
    else {
      Z.invisible = !1;
      var rt = o.getVisual('style'),
        xt = rt.stroke,
        St = as(w);
      St.fill = xt;
      var ot = be(_);
      ot.fill = _.get('borderColor');
      var wt = be(A);
      wt.fill = A.get('borderColor');
      var _t = be(C);
      if (((_t.fill = C.get('borderColor')), et)) {
        var Zt = f - 2 * p;
        j(Z, xt, rt.opacity, { x: p, y: 0, width: Zt, height: S });
      } else Z.removeTextContent();
      Z.setStyle(St),
        (Z.ensureState('emphasis').style = ot),
        (Z.ensureState('blur').style = wt),
        (Z.ensureState('select').style = _t),
        Ga(Z);
    }
    q.add(Z);
  }
  function $(q, Z) {
    var et = lt(Z);
    (et.dataIndex = o.dataIndex), (et.seriesIndex = a.seriesIndex);
    var J = Math.max(f - 2 * p, 0),
      rt = Math.max(d - 2 * p, 0);
    if (((Z.culling = !0), Z.setShape({ x: p, y: p, width: J, height: rt, r: D }), g)) F(Z);
    else {
      Z.invisible = !1;
      var xt = o.getVisual('style'),
        St = xt.fill,
        ot = as(w);
      (ot.fill = St), (ot.decal = xt.decal);
      var wt = be(_),
        _t = be(A),
        Zt = be(C);
      j(Z, St, xt.opacity, null),
        Z.setStyle(ot),
        (Z.ensureState('emphasis').style = wt),
        (Z.ensureState('blur').style = _t),
        (Z.ensureState('select').style = Zt),
        Ga(Z);
    }
    q.add(Z);
  }
  function F(q) {
    !q.invisible && i.push(q);
  }
  function j(q, Z, et, J) {
    var rt = c.getModel(J ? es : ts),
      xt = ie(c.get('name'), null),
      St = rt.getShallow('show');
    Jt(q, Nt(c, J ? es : ts), {
      defaultText: St ? xt : null,
      inheritColor: Z,
      defaultOpacity: et,
      labelFetcher: a,
      labelDataIndex: o.dataIndex,
    });
    var ot = q.getTextContent();
    if (ot) {
      var wt = ot.style,
        _t = hv(wt.padding || 0);
      J && (q.setTextConfig({ layoutRect: J }), (ot.disableLabelLayout = !0)),
        (ot.beforeUpdate = function () {
          var me = Math.max((J ? J.width : q.shape.width) - _t[1] - _t[3], 0),
            xe = Math.max((J ? J.height : q.shape.height) - _t[0] - _t[2], 0);
          (wt.width !== me || wt.height !== xe) && ot.setStyle({ width: me, height: xe });
        }),
        (wt.truncateMinChar = 2),
        (wt.lineOverflow = 'truncate'),
        Q(wt, J, h);
      var Zt = ot.getState('emphasis');
      Q(Zt ? Zt.style : null, J, h);
    }
  }
  function Q(q, Z, et) {
    var J = q ? q.text : null;
    if (!Z && et.isLeafRoot && J != null) {
      var rt = a.get('drillDownIcon', !0);
      q.text = rt ? rt + ' ' + J : J;
    }
  }
  function X(q, Z, et, J) {
    var rt = m != null && t[q][m],
      xt = n[q];
    return (
      rt
        ? ((t[q][m] = null), at(xt, rt))
        : g || ((rt = new Z()), rt instanceof er && (rt.z2 = Zy(et, J)), Ht(xt, rt)),
      (e[q][y] = rt)
    );
  }
  function at(q, Z) {
    var et = (q[y] = {});
    Z instanceof In ? ((et.oldX = Z.x), (et.oldY = Z.y)) : (et.oldShape = W({}, Z.shape));
  }
  function Ht(q, Z) {
    var et = (q[y] = {}),
      J = o.parentNode,
      rt = Z instanceof K;
    if (J && (!r || r.direction === 'drillDown')) {
      var xt = 0,
        St = 0,
        ot = n.background[J.getRawIndex()];
      !r && ot && ot.oldShape && ((xt = ot.oldShape.width), (St = ot.oldShape.height)),
        rt
          ? ((et.oldX = 0), (et.oldY = St))
          : (et.oldShape = { x: xt, y: St, width: 0, height: 0 });
    }
    et.fadein = !rt;
  }
}
function Zy(a, e) {
  return a * Oy + e;
}
const Uy = Fy;
var Yy = 'itemStyle',
  hu = bt();
const Xy = {
  seriesType: 'treemap',
  reset: function (a) {
    var e = a.getData().tree,
      t = e.root;
    t.isRemoved() || vu(t, {}, a.getViewRoot().getAncestors(), a);
  },
};
function vu(a, e, t, r) {
  var n = a.getModel(),
    i = a.getLayout(),
    o = a.hostTree.data;
  if (!(!i || i.invisible || !i.isInView)) {
    var s = n.getModel(Yy),
      l = qy(s, e, r),
      u = o.ensureUniqueItemVisual(a.dataIndex, 'style'),
      h = s.get('borderColor'),
      v = s.get('borderColorSaturation'),
      c;
    v != null && ((c = rs(l)), (h = Ky(v, c))), (u.stroke = h);
    var f = a.viewChildren;
    if (!f || !f.length) (c = rs(l)), (u.fill = c);
    else {
      var d = jy(a, n, i, s, l, f);
      I(f, function (p, g) {
        if (p.depth >= t.length || p === t[p.depth]) {
          var y = Qy(n, l, p, g, d, r);
          vu(p, y, t, r);
        }
      });
    }
  }
}
function qy(a, e, t) {
  var r = W({}, e),
    n = t.designatedVisualItemStyle;
  return (
    I(['color', 'colorAlpha', 'colorSaturation'], function (i) {
      n[i] = e[i];
      var o = a.get(i);
      (n[i] = null), o != null && (r[i] = o);
    }),
    r
  );
}
function rs(a) {
  var e = Hr(a, 'color');
  if (e) {
    var t = Hr(a, 'colorAlpha'),
      r = Hr(a, 'colorSaturation');
    return r && (e = _l(e, null, null, r)), t && (e = gn(e, t)), e;
  }
}
function Ky(a, e) {
  return e != null ? _l(e, null, null, a) : null;
}
function Hr(a, e) {
  var t = a[e];
  if (t != null && t !== 'none') return t;
}
function jy(a, e, t, r, n, i) {
  if (!(!i || !i.length)) {
    var o =
      Zr(e, 'color') ||
      (n.color != null && n.color !== 'none' && (Zr(e, 'colorAlpha') || Zr(e, 'colorSaturation')));
    if (o) {
      var s = e.get('visualMin'),
        l = e.get('visualMax'),
        u = t.dataExtent.slice();
      s != null && s < u[0] && (u[0] = s), l != null && l > u[1] && (u[1] = l);
      var h = e.get('colorMappingBy'),
        v = { type: o.name, dataExtent: u, visual: o.range };
      v.type === 'color' && (h === 'index' || h === 'id')
        ? ((v.mappingMethod = 'category'), (v.loop = !0))
        : (v.mappingMethod = 'linear');
      var c = new Al(v);
      return (hu(c).drColorMappingBy = h), c;
    }
  }
}
function Zr(a, e) {
  var t = a.get(e);
  return H(t) && t.length ? { name: e, range: t } : null;
}
function Qy(a, e, t, r, n, i) {
  var o = W({}, e);
  if (n) {
    var s = n.type,
      l = s === 'color' && hu(n).drColorMappingBy,
      u =
        l === 'index'
          ? r
          : l === 'id'
          ? i.mapIdToIndex(t.getId())
          : t.getValue(a.get('visualDimension'));
    o[s] = n.mapValueToVisual(u);
  }
  return o;
}
var ua = Math.max,
  Ya = Math.min,
  ns = zt,
  fi = I,
  cu = ['itemStyle', 'borderWidth'],
  Jy = ['itemStyle', 'gapWidth'],
  tm = ['upperLabel', 'show'],
  em = ['upperLabel', 'height'];
const am = {
  seriesType: 'treemap',
  reset: function (a, e, t, r) {
    var n = t.getWidth(),
      i = t.getHeight(),
      o = a.option,
      s = re(a.getBoxLayoutParams(), { width: t.getWidth(), height: t.getHeight() }),
      l = o.size || [],
      u = z(ns(s.width, l[0]), n),
      h = z(ns(s.height, l[1]), i),
      v = r && r.type,
      c = ['treemapZoomToNode', 'treemapRootToNode'],
      f = la(r, c, a),
      d = v === 'treemapRender' || v === 'treemapMove' ? r.rootRect : null,
      p = a.getViewRoot(),
      g = su(p);
    if (v !== 'treemapMove') {
      var y = v === 'treemapZoomToNode' ? lm(a, f, p, u, h) : d ? [d.width, d.height] : [u, h],
        m = o.sort;
      m && m !== 'asc' && m !== 'desc' && (m = 'desc');
      var x = { squareRatio: o.squareRatio, sort: m, leafDepth: o.leafDepth };
      p.hostTree.clearLayouts();
      var S = { x: 0, y: 0, width: y[0], height: y[1], area: y[0] * y[1] };
      p.setLayout(S),
        fu(p, x, !1, 0),
        (S = p.getLayout()),
        fi(g, function (w, _) {
          var A = (g[_ + 1] || p).getValue();
          w.setLayout(W({ dataExtent: [A, A], borderWidth: 0, upperHeight: 0 }, S));
        });
    }
    var b = a.getData().tree.root;
    b.setLayout(um(s, d, f), !0), a.setLayoutInfo(s), du(b, new jt(-s.x, -s.y, n, i), g, p, 0);
  },
};
function fu(a, e, t, r) {
  var n, i;
  if (!a.isRemoved()) {
    var o = a.getLayout();
    (n = o.width), (i = o.height);
    var s = a.getModel(),
      l = s.get(cu),
      u = s.get(Jy) / 2,
      h = pu(s),
      v = Math.max(l, h),
      c = l - u,
      f = v - u;
    a.setLayout({ borderWidth: l, upperHeight: v, upperLabelHeight: h }, !0),
      (n = ua(n - 2 * c, 0)),
      (i = ua(i - c - f, 0));
    var d = n * i,
      p = rm(a, s, d, e, t, r);
    if (p.length) {
      var g = { x: c, y: f, width: n, height: i },
        y = Ya(n, i),
        m = 1 / 0,
        x = [];
      x.area = 0;
      for (var S = 0, b = p.length; S < b; ) {
        var w = p[S];
        x.push(w), (x.area += w.getLayout().area);
        var _ = sm(x, y, e.squareRatio);
        _ <= m
          ? (S++, (m = _))
          : ((x.area -= x.pop().getLayout().area),
            is(x, y, g, u, !1),
            (y = Ya(g.width, g.height)),
            (x.length = x.area = 0),
            (m = 1 / 0));
      }
      if ((x.length && is(x, y, g, u, !0), !t)) {
        var A = s.get('childrenVisibleMin');
        A != null && d < A && (t = !0);
      }
      for (var S = 0, b = p.length; S < b; S++) fu(p[S], e, t, r + 1);
    }
  }
}
function rm(a, e, t, r, n, i) {
  var o = a.children || [],
    s = r.sort;
  s !== 'asc' && s !== 'desc' && (s = null);
  var l = r.leafDepth != null && r.leafDepth <= i;
  if (n && !l) return (a.viewChildren = []);
  (o = Ft(o, function (f) {
    return !f.isRemoved();
  })),
    im(o, s);
  var u = om(e, o, s);
  if (u.sum === 0) return (a.viewChildren = []);
  if (((u.sum = nm(e, t, u.sum, s, o)), u.sum === 0)) return (a.viewChildren = []);
  for (var h = 0, v = o.length; h < v; h++) {
    var c = (o[h].getValue() / u.sum) * t;
    o[h].setLayout({ area: c });
  }
  return (
    l && (o.length && a.setLayout({ isLeafRoot: !0 }, !0), (o.length = 0)),
    (a.viewChildren = o),
    a.setLayout({ dataExtent: u.dataExtent }, !0),
    o
  );
}
function nm(a, e, t, r, n) {
  if (!r) return t;
  for (var i = a.get('visibleMin'), o = n.length, s = o, l = o - 1; l >= 0; l--) {
    var u = n[r === 'asc' ? o - l - 1 : l].getValue();
    (u / t) * e < i && ((s = l), (t -= u));
  }
  return r === 'asc' ? n.splice(0, o - s) : n.splice(s, o - s), t;
}
function im(a, e) {
  return (
    e &&
      a.sort(function (t, r) {
        var n = e === 'asc' ? t.getValue() - r.getValue() : r.getValue() - t.getValue();
        return n === 0 ? (e === 'asc' ? t.dataIndex - r.dataIndex : r.dataIndex - t.dataIndex) : n;
      }),
    a
  );
}
function om(a, e, t) {
  for (var r = 0, n = 0, i = e.length; n < i; n++) r += e[n].getValue();
  var o = a.get('visualDimension'),
    s;
  return (
    !e || !e.length
      ? (s = [NaN, NaN])
      : o === 'value' && t
      ? ((s = [e[e.length - 1].getValue(), e[0].getValue()]), t === 'asc' && s.reverse())
      : ((s = [1 / 0, -1 / 0]),
        fi(e, function (l) {
          var u = l.getValue(o);
          u < s[0] && (s[0] = u), u > s[1] && (s[1] = u);
        })),
    { sum: r, dataExtent: s }
  );
}
function sm(a, e, t) {
  for (var r = 0, n = 1 / 0, i = 0, o = void 0, s = a.length; i < s; i++)
    (o = a[i].getLayout().area), o && (o < n && (n = o), o > r && (r = o));
  var l = a.area * a.area,
    u = e * e * t;
  return l ? ua((u * r) / l, l / (u * n)) : 1 / 0;
}
function is(a, e, t, r, n) {
  var i = e === t.width ? 0 : 1,
    o = 1 - i,
    s = ['x', 'y'],
    l = ['width', 'height'],
    u = t[s[i]],
    h = e ? a.area / e : 0;
  (n || h > t[l[o]]) && (h = t[l[o]]);
  for (var v = 0, c = a.length; v < c; v++) {
    var f = a[v],
      d = {},
      p = h ? f.getLayout().area / h : 0,
      g = (d[l[o]] = ua(h - 2 * r, 0)),
      y = t[s[i]] + t[l[i]] - u,
      m = v === c - 1 || y < p ? y : p,
      x = (d[l[i]] = ua(m - 2 * r, 0));
    (d[s[o]] = t[s[o]] + Ya(r, g / 2)), (d[s[i]] = u + Ya(r, x / 2)), (u += m), f.setLayout(d, !0);
  }
  (t[s[o]] += h), (t[l[o]] -= h);
}
function lm(a, e, t, r, n) {
  var i = (e || {}).node,
    o = [r, n];
  if (!i || i === t) return o;
  for (var s, l = r * n, u = l * a.option.zoomToNodeRatio; (s = i.parentNode); ) {
    for (var h = 0, v = s.children, c = 0, f = v.length; c < f; c++) h += v[c].getValue();
    var d = i.getValue();
    if (d === 0) return o;
    u *= h / d;
    var p = s.getModel(),
      g = p.get(cu),
      y = Math.max(g, pu(p));
    (u += 4 * g * g + (3 * g + y) * Math.pow(u, 0.5)), u > Bi && (u = Bi), (i = s);
  }
  u < l && (u = l);
  var m = Math.pow(u / l, 0.5);
  return [r * m, n * m];
}
function um(a, e, t) {
  if (e) return { x: e.x, y: e.y };
  var r = { x: 0, y: 0 };
  if (!t) return r;
  var n = t.node,
    i = n.getLayout();
  if (!i) return r;
  for (var o = [i.width / 2, i.height / 2], s = n; s; ) {
    var l = s.getLayout();
    (o[0] += l.x), (o[1] += l.y), (s = s.parentNode);
  }
  return { x: a.width / 2 - o[0], y: a.height / 2 - o[1] };
}
function du(a, e, t, r, n) {
  var i = a.getLayout(),
    o = t[n],
    s = o && o === a;
  if (!((o && !s) || (n === t.length && a !== r))) {
    a.setLayout({ isInView: !0, invisible: !s && !e.intersect(i), isAboveViewRoot: s }, !0);
    var l = new jt(e.x - i.x, e.y - i.y, e.width, e.height);
    fi(a.viewChildren || [], function (u) {
      du(u, l, t, r, n + 1);
    });
  }
}
function pu(a) {
  return a.get(tm) ? a.get(em) : 0;
}
function hm(a) {
  a.registerSeriesModel(Ey),
    a.registerChartView(Uy),
    a.registerVisual(Xy),
    a.registerLayout(am),
    Ly(a);
}
function vm(a) {
  var e = a.findComponents({ mainType: 'legend' });
  !e ||
    !e.length ||
    a.eachSeriesByType('graph', function (t) {
      var r = t.getCategoriesData(),
        n = t.getGraph(),
        i = n.data,
        o = r.mapArray(r.getName);
      i.filterSelf(function (s) {
        var l = i.getItemModel(s),
          u = l.getShallow('category');
        if (u != null) {
          Ot(u) && (u = o[u]);
          for (var h = 0; h < e.length; h++) if (!e[h].isSelected(u)) return !1;
        }
        return !0;
      });
    });
}
function cm(a) {
  var e = {};
  a.eachSeriesByType('graph', function (t) {
    var r = t.getCategoriesData(),
      n = t.getData(),
      i = {};
    r.each(function (o) {
      var s = r.getName(o);
      i['ec-' + s] = o;
      var l = r.getItemModel(o),
        u = l.getModel('itemStyle').getItemStyle();
      u.fill || (u.fill = t.getColorFromPalette(s, e)), r.setItemVisual(o, 'style', u);
      for (var h = ['symbol', 'symbolSize', 'symbolKeepAspect'], v = 0; v < h.length; v++) {
        var c = l.getShallow(h[v], !0);
        c != null && r.setItemVisual(o, h[v], c);
      }
    }),
      r.count() &&
        n.each(function (o) {
          var s = n.getItemModel(o),
            l = s.getShallow('category');
          if (l != null) {
            tt(l) && (l = i['ec-' + l]);
            var u = r.getItemVisual(l, 'style'),
              h = n.ensureUniqueItemVisual(o, 'style');
            W(h, u);
            for (var v = ['symbol', 'symbolSize', 'symbolKeepAspect'], c = 0; c < v.length; c++)
              n.setItemVisual(o, v[c], r.getItemVisual(l, v[c]));
          }
        });
  });
}
function Ma(a) {
  return a instanceof Array || (a = [a, a]), a;
}
function fm(a) {
  a.eachSeriesByType('graph', function (e) {
    var t = e.getGraph(),
      r = e.getEdgeData(),
      n = Ma(e.get('edgeSymbol')),
      i = Ma(e.get('edgeSymbolSize'));
    r.setVisual('fromSymbol', n && n[0]),
      r.setVisual('toSymbol', n && n[1]),
      r.setVisual('fromSymbolSize', i && i[0]),
      r.setVisual('toSymbolSize', i && i[1]),
      r.setVisual('style', e.getModel('lineStyle').getLineStyle()),
      r.each(function (o) {
        var s = r.getItemModel(o),
          l = t.getEdgeByIndex(o),
          u = Ma(s.getShallow('symbol', !0)),
          h = Ma(s.getShallow('symbolSize', !0)),
          v = s.getModel('lineStyle').getLineStyle(),
          c = r.ensureUniqueItemVisual(o, 'style');
        switch ((W(c, v), c.stroke)) {
          case 'source': {
            var f = l.node1.getVisual('style');
            c.stroke = f && f.fill;
            break;
          }
          case 'target': {
            var f = l.node2.getVisual('style');
            c.stroke = f && f.fill;
            break;
          }
        }
        u[0] && l.setVisual('fromSymbol', u[0]),
          u[1] && l.setVisual('toSymbol', u[1]),
          h[0] && l.setVisual('fromSymbolSize', h[0]),
          h[1] && l.setVisual('toSymbolSize', h[1]);
      });
  });
}
var Pn = '-->',
  Sr = function (a) {
    return a.get('autoCurveness') || null;
  },
  gu = function (a, e) {
    var t = Sr(a),
      r = 20,
      n = [];
    if (Ot(t)) r = t;
    else if (H(t)) {
      a.__curvenessList = t;
      return;
    }
    e > r && (r = e);
    var i = r % 2 ? r + 2 : r + 3;
    n = [];
    for (var o = 0; o < i; o++) n.push(((o % 2 ? o + 1 : o) / 10) * (o % 2 ? -1 : 1));
    a.__curvenessList = n;
  },
  ha = function (a, e, t) {
    var r = [a.id, a.dataIndex].join('.'),
      n = [e.id, e.dataIndex].join('.');
    return [t.uid, r, n].join(Pn);
  },
  yu = function (a) {
    var e = a.split(Pn);
    return [e[0], e[2], e[1]].join(Pn);
  },
  dm = function (a, e) {
    var t = ha(a.node1, a.node2, e);
    return e.__edgeMap[t];
  },
  pm = function (a, e) {
    var t = En(ha(a.node1, a.node2, e), e),
      r = En(ha(a.node2, a.node1, e), e);
    return t + r;
  },
  En = function (a, e) {
    var t = e.__edgeMap;
    return t[a] ? t[a].length : 0;
  };
function gm(a) {
  Sr(a) && ((a.__curvenessList = []), (a.__edgeMap = {}), gu(a));
}
function ym(a, e, t, r) {
  if (Sr(t)) {
    var n = ha(a, e, t),
      i = t.__edgeMap,
      o = i[yu(n)];
    i[n] && !o ? (i[n].isForward = !0) : o && i[n] && ((o.isForward = !0), (i[n].isForward = !1)),
      (i[n] = i[n] || []),
      i[n].push(r);
  }
}
function di(a, e, t, r) {
  var n = Sr(e),
    i = H(n);
  if (!n) return null;
  var o = dm(a, e);
  if (!o) return null;
  for (var s = -1, l = 0; l < o.length; l++)
    if (o[l] === t) {
      s = l;
      break;
    }
  var u = pm(a, e);
  gu(e, u), (a.lineStyle = a.lineStyle || {});
  var h = ha(a.node1, a.node2, e),
    v = e.__curvenessList,
    c = i || u % 2 ? 0 : 1;
  if (o.isForward) return v[c + s];
  var f = yu(h),
    d = En(f, e),
    p = v[s + d + c];
  return r
    ? i
      ? n && n[0] === 0
        ? (d + c) % 2
          ? p
          : -p
        : ((d % 2 ? 0 : 1) + c) % 2
        ? p
        : -p
      : (d + c) % 2
      ? p
      : -p
    : v[s + d + c];
}
function mu(a) {
  var e = a.coordinateSystem;
  if (!(e && e.type !== 'view')) {
    var t = a.getGraph();
    t.eachNode(function (r) {
      var n = r.getModel();
      r.setLayout([+n.get('x'), +n.get('y')]);
    }),
      pi(t, a);
  }
}
function pi(a, e) {
  a.eachEdge(function (t, r) {
    var n = gr(t.getModel().get(['lineStyle', 'curveness']), -di(t, e, r, !0), 0),
      i = ve(t.node1.getLayout()),
      o = ve(t.node2.getLayout()),
      s = [i, o];
    +n && s.push([(i[0] + o[0]) / 2 - (i[1] - o[1]) * n, (i[1] + o[1]) / 2 - (o[0] - i[0]) * n]),
      t.setLayout(s);
  });
}
function mm(a, e) {
  a.eachSeriesByType('graph', function (t) {
    var r = t.get('layout'),
      n = t.coordinateSystem;
    if (n && n.type !== 'view') {
      var i = t.getData(),
        o = [];
      I(n.dimensions, function (c) {
        o = o.concat(i.mapDimensionsAll(c));
      });
      for (var s = 0; s < i.count(); s++) {
        for (var l = [], u = !1, h = 0; h < o.length; h++) {
          var v = i.get(o[h], s);
          isNaN(v) || (u = !0), l.push(v);
        }
        u ? i.setItemLayout(s, n.dataToPoint(l)) : i.setItemLayout(s, [NaN, NaN]);
      }
      pi(i.graph, t);
    } else (!r || r === 'none') && mu(t);
  });
}
function Ke(a) {
  var e = a.coordinateSystem;
  if (e.type !== 'view') return 1;
  var t = a.option.nodeScaleRatio,
    r = e.scaleX,
    n = e.getZoom(),
    i = (n - 1) * t + 1;
  return i / r;
}
function je(a) {
  var e = a.getVisual('symbolSize');
  return e instanceof Array && (e = (e[0] + e[1]) / 2), +e;
}
var os = Math.PI,
  Ur = [];
function gi(a, e, t, r) {
  var n = a.coordinateSystem;
  if (!(n && n.type !== 'view')) {
    var i = n.getBoundingRect(),
      o = a.getData(),
      s = o.graph,
      l = i.width / 2 + i.x,
      u = i.height / 2 + i.y,
      h = Math.min(i.width, i.height) / 2,
      v = o.count();
    if ((o.setLayout({ cx: l, cy: u }), !!v)) {
      if (t) {
        var c = n.pointToData(r),
          f = c[0],
          d = c[1],
          p = [f - l, d - u];
        pa(p, p), vv(p, p, h), t.setLayout([l + p[0], u + p[1]], !0);
        var g = a.get(['circular', 'rotateLabel']);
        xu(t, g, l, u);
      }
      xm[e](a, s, o, h, l, u, v),
        s.eachEdge(function (y, m) {
          var x = gr(y.getModel().get(['lineStyle', 'curveness']), di(y, a, m), 0),
            S = ve(y.node1.getLayout()),
            b = ve(y.node2.getLayout()),
            w,
            _ = (S[0] + b[0]) / 2,
            A = (S[1] + b[1]) / 2;
          +x && ((x *= 3), (w = [l * x + _ * (1 - x), u * x + A * (1 - x)])),
            y.setLayout([S, b, w]);
        });
    }
  }
}
var xm = {
  value: function (a, e, t, r, n, i, o) {
    var s = 0,
      l = t.getSum('value'),
      u = (Math.PI * 2) / (l || o);
    e.eachNode(function (h) {
      var v = h.getValue('value'),
        c = (u * (l ? v : 1)) / 2;
      (s += c), h.setLayout([r * Math.cos(s) + n, r * Math.sin(s) + i]), (s += c);
    });
  },
  symbolSize: function (a, e, t, r, n, i, o) {
    var s = 0;
    Ur.length = o;
    var l = Ke(a);
    e.eachNode(function (v) {
      var c = je(v);
      isNaN(c) && (c = 2), c < 0 && (c = 0), (c *= l);
      var f = Math.asin(c / 2 / r);
      isNaN(f) && (f = os / 2), (Ur[v.dataIndex] = f), (s += f * 2);
    });
    var u = (2 * os - s) / o / 2,
      h = 0;
    e.eachNode(function (v) {
      var c = u + Ur[v.dataIndex];
      (h += c),
        (!v.getLayout() || !v.getLayout().fixed) &&
          v.setLayout([r * Math.cos(h) + n, r * Math.sin(h) + i]),
        (h += c);
    });
  },
};
function xu(a, e, t, r) {
  var n = a.getGraphicEl();
  if (n) {
    var i = a.getModel(),
      o = i.get(['label', 'rotate']) || 0,
      s = n.getSymbolPath();
    if (e) {
      var l = a.getLayout(),
        u = Math.atan2(l[1] - r, l[0] - t);
      u < 0 && (u = Math.PI * 2 + u);
      var h = l[0] < t;
      h && (u = u - Math.PI);
      var v = h ? 'left' : 'right';
      s.setTextConfig({ rotation: -u, position: v, origin: 'center' });
      var c = s.ensureState('emphasis');
      W(c.textConfig || (c.textConfig = {}), { position: v });
    } else s.setTextConfig({ rotation: (o *= Math.PI / 180) });
  }
}
function Sm(a) {
  a.eachSeriesByType('graph', function (e) {
    e.get('layout') === 'circular' && gi(e, 'symbolSize');
  });
}
var Pe = Sn;
function bm(a, e, t) {
  for (
    var r = a,
      n = e,
      i = t.rect,
      o = i.width,
      s = i.height,
      l = [i.x + o / 2, i.y + s / 2],
      u = t.gravity == null ? 0.1 : t.gravity,
      h = 0;
    h < r.length;
    h++
  ) {
    var v = r[h];
    v.p || (v.p = cv(o * (Math.random() - 0.5) + l[0], s * (Math.random() - 0.5) + l[1])),
      (v.pp = ve(v.p)),
      (v.edges = null);
  }
  var c = t.friction == null ? 0.6 : t.friction,
    f = c,
    d,
    p;
  return {
    warmUp: function () {
      f = c * 0.8;
    },
    setFixed: function (g) {
      r[g].fixed = !0;
    },
    setUnfixed: function (g) {
      r[g].fixed = !1;
    },
    beforeStep: function (g) {
      d = g;
    },
    afterStep: function (g) {
      p = g;
    },
    step: function (g) {
      d && d(r, n);
      for (var y = [], m = r.length, x = 0; x < n.length; x++) {
        var S = n[x];
        if (!S.ignoreForceLayout) {
          var b = S.n1,
            w = S.n2;
          Ne(y, w.p, b.p);
          var _ = zi(y) - S.d,
            A = w.w / (b.w + w.w);
          isNaN(A) && (A = 0),
            pa(y, y),
            !b.fixed && Pe(b.p, b.p, y, A * _ * f),
            !w.fixed && Pe(w.p, w.p, y, -(1 - A) * _ * f);
        }
      }
      for (var x = 0; x < m; x++) {
        var C = r[x];
        C.fixed || (Ne(y, l, C.p), Pe(C.p, C.p, y, u * f));
      }
      for (var x = 0; x < m; x++)
        for (var b = r[x], D = x + 1; D < m; D++) {
          var w = r[D];
          Ne(y, w.p, b.p);
          var _ = zi(y);
          _ === 0 && (fv(y, Math.random() - 0.5, Math.random() - 0.5), (_ = 1));
          var T = (b.rep + w.rep) / _ / _;
          !b.fixed && Pe(b.pp, b.pp, y, T), !w.fixed && Pe(w.pp, w.pp, y, -T);
        }
      for (var L = [], x = 0; x < m; x++) {
        var C = r[x];
        C.fixed || (Ne(L, C.p, C.pp), Pe(C.p, C.p, L, f), At(C.pp, C.p));
      }
      f = f * 0.992;
      var P = f < 0.01;
      p && p(r, n, P), g && g(P);
    },
  };
}
function wm(a) {
  a.eachSeriesByType('graph', function (e) {
    var t = e.coordinateSystem;
    if (!(t && t.type !== 'view'))
      if (e.get('layout') === 'force') {
        var r = e.preservedPoints || {},
          n = e.getGraph(),
          i = n.data,
          o = n.edgeData,
          s = e.getModel('force'),
          l = s.get('initLayout');
        e.preservedPoints
          ? i.each(function (x) {
              var S = i.getId(x);
              i.setItemLayout(x, r[S] || [NaN, NaN]);
            })
          : !l || l === 'none'
          ? mu(e)
          : l === 'circular' && gi(e, 'value');
        var u = i.getDataExtent('value'),
          h = o.getDataExtent('value'),
          v = s.get('repulsion'),
          c = s.get('edgeLength'),
          f = H(v) ? v : [v, v],
          d = H(c) ? c : [c, c];
        d = [d[1], d[0]];
        var p = i.mapArray('value', function (x, S) {
            var b = i.getItemLayout(S),
              w = vt(x, u, f);
            return (
              isNaN(w) && (w = (f[0] + f[1]) / 2),
              {
                w,
                rep: w,
                fixed: i.getItemModel(S).get('fixed'),
                p: !b || isNaN(b[0]) || isNaN(b[1]) ? null : b,
              }
            );
          }),
          g = o.mapArray('value', function (x, S) {
            var b = n.getEdgeByIndex(S),
              w = vt(x, h, d);
            isNaN(w) && (w = (d[0] + d[1]) / 2);
            var _ = b.getModel(),
              A = gr(b.getModel().get(['lineStyle', 'curveness']), -di(b, e, S, !0), 0);
            return {
              n1: p[b.node1.dataIndex],
              n2: p[b.node2.dataIndex],
              d: w,
              curveness: A,
              ignoreForceLayout: _.get('ignoreForceLayout'),
            };
          }),
          y = t.getBoundingRect(),
          m = bm(p, g, { rect: y, gravity: s.get('gravity'), friction: s.get('friction') });
        m.beforeStep(function (x, S) {
          for (var b = 0, w = x.length; b < w; b++)
            x[b].fixed && At(x[b].p, n.getNodeByIndex(b).getLayout());
        }),
          m.afterStep(function (x, S, b) {
            for (var w = 0, _ = x.length; w < _; w++)
              x[w].fixed || n.getNodeByIndex(w).setLayout(x[w].p), (r[i.getId(w)] = x[w].p);
            for (var w = 0, _ = S.length; w < _; w++) {
              var A = S[w],
                C = n.getEdgeByIndex(w),
                D = A.n1.p,
                T = A.n2.p,
                L = C.getLayout();
              (L = L ? L.slice() : []),
                (L[0] = L[0] || []),
                (L[1] = L[1] || []),
                At(L[0], D),
                At(L[1], T),
                +A.curveness &&
                  (L[2] = [
                    (D[0] + T[0]) / 2 - (D[1] - T[1]) * A.curveness,
                    (D[1] + T[1]) / 2 - (T[0] - D[0]) * A.curveness,
                  ]),
                C.setLayout(L);
            }
          }),
          (e.forceLayout = m),
          (e.preservedPoints = r),
          m.step();
      } else e.forceLayout = null;
  });
}
function _m(a, e, t) {
  var r = W(a.getBoxLayoutParams(), { aspect: t });
  return re(r, { width: e.getWidth(), height: e.getHeight() });
}
function Am(a, e) {
  var t = [];
  return (
    a.eachSeriesByType('graph', function (r) {
      var n = r.get('coordinateSystem');
      if (!n || n === 'view') {
        var i = r.getData(),
          o = i.mapArray(function (g) {
            var y = i.getItemModel(g);
            return [+y.get('x'), +y.get('y')];
          }),
          s = [],
          l = [];
        gl(o, s, l),
          l[0] - s[0] === 0 && ((l[0] += 1), (s[0] -= 1)),
          l[1] - s[1] === 0 && ((l[1] += 1), (s[1] -= 1));
        var u = (l[0] - s[0]) / (l[1] - s[1]),
          h = _m(r, e, u);
        isNaN(u) && ((s = [h.x, h.y]), (l = [h.x + h.width, h.y + h.height]));
        var v = l[0] - s[0],
          c = l[1] - s[1],
          f = h.width,
          d = h.height,
          p = (r.coordinateSystem = new Xn());
        (p.zoomLimit = r.get('scaleLimit')),
          p.setBoundingRect(s[0], s[1], v, c),
          p.setViewRect(h.x, h.y, f, d),
          p.setCenter(r.get('center'), e),
          p.setZoom(r.get('zoom')),
          t.push(p);
      }
    }),
    t
  );
}
var Yr = [],
  Xr = [],
  qr = [],
  Ee = Dl,
  Kr = pv,
  ss = Math.abs;
function ls(a, e, t) {
  for (
    var r = a[0], n = a[1], i = a[2], o = 1 / 0, s, l = t * t, u = 0.1, h = 0.1;
    h <= 0.9;
    h += 0.1
  ) {
    (Yr[0] = Ee(r[0], n[0], i[0], h)), (Yr[1] = Ee(r[1], n[1], i[1], h));
    var v = ss(Kr(Yr, e) - l);
    v < o && ((o = v), (s = h));
  }
  for (var c = 0; c < 32; c++) {
    var f = s + u;
    (Xr[0] = Ee(r[0], n[0], i[0], s)),
      (Xr[1] = Ee(r[1], n[1], i[1], s)),
      (qr[0] = Ee(r[0], n[0], i[0], f)),
      (qr[1] = Ee(r[1], n[1], i[1], f));
    var v = Kr(Xr, e) - l;
    if (ss(v) < 0.01) break;
    var d = Kr(qr, e) - l;
    (u /= 2), v < 0 ? (d >= 0 ? (s = s + u) : (s = s - u)) : d >= 0 ? (s = s - u) : (s = s + u);
  }
  return s;
}
function jr(a, e) {
  var t = [],
    r = dv,
    n = [[], [], []],
    i = [[], []],
    o = [];
  (e /= 2),
    a.eachEdge(function (s, l) {
      var u = s.getLayout(),
        h = s.getVisual('fromSymbol'),
        v = s.getVisual('toSymbol');
      u.__original || ((u.__original = [ve(u[0]), ve(u[1])]), u[2] && u.__original.push(ve(u[2])));
      var c = u.__original;
      if (u[2] != null) {
        if ((At(n[0], c[0]), At(n[1], c[2]), At(n[2], c[1]), h && h !== 'none')) {
          var f = je(s.node1),
            d = ls(n, c[0], f * e);
          r(n[0][0], n[1][0], n[2][0], d, t),
            (n[0][0] = t[3]),
            (n[1][0] = t[4]),
            r(n[0][1], n[1][1], n[2][1], d, t),
            (n[0][1] = t[3]),
            (n[1][1] = t[4]);
        }
        if (v && v !== 'none') {
          var f = je(s.node2),
            d = ls(n, c[1], f * e);
          r(n[0][0], n[1][0], n[2][0], d, t),
            (n[1][0] = t[1]),
            (n[2][0] = t[2]),
            r(n[0][1], n[1][1], n[2][1], d, t),
            (n[1][1] = t[1]),
            (n[2][1] = t[2]);
        }
        At(u[0], n[0]), At(u[1], n[2]), At(u[2], n[1]);
      } else {
        if ((At(i[0], c[0]), At(i[1], c[1]), Ne(o, i[1], i[0]), pa(o, o), h && h !== 'none')) {
          var f = je(s.node1);
          Sn(i[0], i[0], o, f * e);
        }
        if (v && v !== 'none') {
          var f = je(s.node2);
          Sn(i[1], i[1], o, -f * e);
        }
        At(u[0], i[0]), At(u[1], i[1]);
      }
    });
}
function us(a) {
  return a.type === 'view';
}
var Dm = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function (t, r) {
      var n = new ir(),
        i = new si(),
        o = this.group;
      (this._controller = new lr(r.getZr())),
        (this._controllerHost = { target: o }),
        o.add(n.group),
        o.add(i.group),
        (this._symbolDraw = n),
        (this._lineDraw = i),
        (this._firstRender = !0);
    }),
    (e.prototype.render = function (t, r, n) {
      var i = this,
        o = t.coordinateSystem;
      this._model = t;
      var s = this._symbolDraw,
        l = this._lineDraw,
        u = this.group;
      if (us(o)) {
        var h = { x: o.x, y: o.y, scaleX: o.scaleX, scaleY: o.scaleY };
        this._firstRender ? u.attr(h) : ht(u, h, t);
      }
      jr(t.getGraph(), Ke(t));
      var v = t.getData();
      s.updateData(v);
      var c = t.getEdgeData();
      l.updateData(c),
        this._updateNodeAndLinkScale(),
        this._updateController(t, r, n),
        clearTimeout(this._layoutTimeout);
      var f = t.forceLayout,
        d = t.get(['force', 'layoutAnimation']);
      f && this._startForceLayoutIteration(f, d);
      var p = t.get('layout');
      v.graph.eachNode(function (x) {
        var S = x.dataIndex,
          b = x.getGraphicEl(),
          w = x.getModel();
        if (b) {
          b.off('drag').off('dragend');
          var _ = w.get('draggable');
          _ &&
            b
              .on('drag', function (C) {
                switch (p) {
                  case 'force':
                    f.warmUp(),
                      !i._layouting && i._startForceLayoutIteration(f, d),
                      f.setFixed(S),
                      v.setItemLayout(S, [b.x, b.y]);
                    break;
                  case 'circular':
                    v.setItemLayout(S, [b.x, b.y]),
                      x.setLayout({ fixed: !0 }, !0),
                      gi(t, 'symbolSize', x, [C.offsetX, C.offsetY]),
                      i.updateLayout(t);
                    break;
                  case 'none':
                  default:
                    v.setItemLayout(S, [b.x, b.y]), pi(t.getGraph(), t), i.updateLayout(t);
                    break;
                }
              })
              .on('dragend', function () {
                f && f.setUnfixed(S);
              }),
            b.setDraggable(_, !!w.get('cursor'));
          var A = w.get(['emphasis', 'focus']);
          A === 'adjacency' && (lt(b).focus = x.getAdjacentDataIndices());
        }
      }),
        v.graph.eachEdge(function (x) {
          var S = x.getGraphicEl(),
            b = x.getModel().get(['emphasis', 'focus']);
          S &&
            b === 'adjacency' &&
            (lt(S).focus = { edge: [x.dataIndex], node: [x.node1.dataIndex, x.node2.dataIndex] });
        });
      var g = t.get('layout') === 'circular' && t.get(['circular', 'rotateLabel']),
        y = v.getLayout('cx'),
        m = v.getLayout('cy');
      v.graph.eachNode(function (x) {
        xu(x, g, y, m);
      }),
        (this._firstRender = !1);
    }),
    (e.prototype.dispose = function () {
      this._controller && this._controller.dispose(), (this._controllerHost = null);
    }),
    (e.prototype._startForceLayoutIteration = function (t, r) {
      var n = this;
      (function i() {
        t.step(function (o) {
          n.updateLayout(n._model),
            (n._layouting = !o) && (r ? (n._layoutTimeout = setTimeout(i, 16)) : i());
        });
      })();
    }),
    (e.prototype._updateController = function (t, r, n) {
      var i = this,
        o = this._controller,
        s = this._controllerHost,
        l = this.group;
      if (
        (o.setPointerChecker(function (u, h, v) {
          var c = l.getBoundingRect();
          return c.applyTransform(l.transform), c.contain(h, v) && !yl(u, n, t);
        }),
        !us(t.coordinateSystem))
      ) {
        o.disable();
        return;
      }
      o.enable(t.get('roam')),
        (s.zoomLimit = t.get('scaleLimit')),
        (s.zoom = t.coordinateSystem.getZoom()),
        o
          .off('pan')
          .off('zoom')
          .on('pan', function (u) {
            ml(s, u.dx, u.dy),
              n.dispatchAction({ seriesId: t.id, type: 'graphRoam', dx: u.dx, dy: u.dy });
          })
          .on('zoom', function (u) {
            xl(s, u.scale, u.originX, u.originY),
              n.dispatchAction({
                seriesId: t.id,
                type: 'graphRoam',
                zoom: u.scale,
                originX: u.originX,
                originY: u.originY,
              }),
              i._updateNodeAndLinkScale(),
              jr(t.getGraph(), Ke(t)),
              i._lineDraw.updateLayout(),
              n.updateLabelLayout();
          });
    }),
    (e.prototype._updateNodeAndLinkScale = function () {
      var t = this._model,
        r = t.getData(),
        n = Ke(t);
      r.eachItemGraphicEl(function (i, o) {
        i && i.setSymbolScale(n);
      });
    }),
    (e.prototype.updateLayout = function (t) {
      jr(t.getGraph(), Ke(t)), this._symbolDraw.updateLayout(), this._lineDraw.updateLayout();
    }),
    (e.prototype.remove = function (t, r) {
      this._symbolDraw && this._symbolDraw.remove(), this._lineDraw && this._lineDraw.remove();
    }),
    (e.type = 'graph'),
    e
  );
})(dt);
const Tm = Dm;
function Re(a) {
  return '_EC_' + a;
}
var Cm = (function () {
    function a(e) {
      (this.type = 'graph'),
        (this.nodes = []),
        (this.edges = []),
        (this._nodesMap = {}),
        (this._edgesMap = {}),
        (this._directed = e || !1);
    }
    return (
      (a.prototype.isDirected = function () {
        return this._directed;
      }),
      (a.prototype.addNode = function (e, t) {
        e = e == null ? '' + t : '' + e;
        var r = this._nodesMap;
        if (!r[Re(e)]) {
          var n = new we(e, t);
          return (n.hostGraph = this), this.nodes.push(n), (r[Re(e)] = n), n;
        }
      }),
      (a.prototype.getNodeByIndex = function (e) {
        var t = this.data.getRawIndex(e);
        return this.nodes[t];
      }),
      (a.prototype.getNodeById = function (e) {
        return this._nodesMap[Re(e)];
      }),
      (a.prototype.addEdge = function (e, t, r) {
        var n = this._nodesMap,
          i = this._edgesMap;
        if (
          (Ot(e) && (e = this.nodes[e]),
          Ot(t) && (t = this.nodes[t]),
          e instanceof we || (e = n[Re(e)]),
          t instanceof we || (t = n[Re(t)]),
          !(!e || !t))
        ) {
          var o = e.id + '-' + t.id,
            s = new Su(e, t, r);
          return (
            (s.hostGraph = this),
            this._directed && (e.outEdges.push(s), t.inEdges.push(s)),
            e.edges.push(s),
            e !== t && t.edges.push(s),
            this.edges.push(s),
            (i[o] = s),
            s
          );
        }
      }),
      (a.prototype.getEdgeByIndex = function (e) {
        var t = this.edgeData.getRawIndex(e);
        return this.edges[t];
      }),
      (a.prototype.getEdge = function (e, t) {
        e instanceof we && (e = e.id), t instanceof we && (t = t.id);
        var r = this._edgesMap;
        return this._directed ? r[e + '-' + t] : r[e + '-' + t] || r[t + '-' + e];
      }),
      (a.prototype.eachNode = function (e, t) {
        for (var r = this.nodes, n = r.length, i = 0; i < n; i++)
          r[i].dataIndex >= 0 && e.call(t, r[i], i);
      }),
      (a.prototype.eachEdge = function (e, t) {
        for (var r = this.edges, n = r.length, i = 0; i < n; i++)
          r[i].dataIndex >= 0 &&
            r[i].node1.dataIndex >= 0 &&
            r[i].node2.dataIndex >= 0 &&
            e.call(t, r[i], i);
      }),
      (a.prototype.breadthFirstTraverse = function (e, t, r, n) {
        if ((t instanceof we || (t = this._nodesMap[Re(t)]), !!t)) {
          for (
            var i = r === 'out' ? 'outEdges' : r === 'in' ? 'inEdges' : 'edges', o = 0;
            o < this.nodes.length;
            o++
          )
            this.nodes[o].__visited = !1;
          if (!e.call(n, t, null))
            for (var s = [t]; s.length; )
              for (var l = s.shift(), u = l[i], o = 0; o < u.length; o++) {
                var h = u[o],
                  v = h.node1 === l ? h.node2 : h.node1;
                if (!v.__visited) {
                  if (e.call(n, v, l)) return;
                  s.push(v), (v.__visited = !0);
                }
              }
        }
      }),
      (a.prototype.update = function () {
        for (
          var e = this.data, t = this.edgeData, r = this.nodes, n = this.edges, i = 0, o = r.length;
          i < o;
          i++
        )
          r[i].dataIndex = -1;
        for (var i = 0, o = e.count(); i < o; i++) r[e.getRawIndex(i)].dataIndex = i;
        t.filterSelf(function (s) {
          var l = n[t.getRawIndex(s)];
          return l.node1.dataIndex >= 0 && l.node2.dataIndex >= 0;
        });
        for (var i = 0, o = n.length; i < o; i++) n[i].dataIndex = -1;
        for (var i = 0, o = t.count(); i < o; i++) n[t.getRawIndex(i)].dataIndex = i;
      }),
      (a.prototype.clone = function () {
        for (
          var e = new a(this._directed), t = this.nodes, r = this.edges, n = 0;
          n < t.length;
          n++
        )
          e.addNode(t[n].id, t[n].dataIndex);
        for (var n = 0; n < r.length; n++) {
          var i = r[n];
          e.addEdge(i.node1.id, i.node2.id, i.dataIndex);
        }
        return e;
      }),
      a
    );
  })(),
  we = (function () {
    function a(e, t) {
      (this.inEdges = []),
        (this.outEdges = []),
        (this.edges = []),
        (this.dataIndex = -1),
        (this.id = e == null ? '' : e),
        (this.dataIndex = t == null ? -1 : t);
    }
    return (
      (a.prototype.degree = function () {
        return this.edges.length;
      }),
      (a.prototype.inDegree = function () {
        return this.inEdges.length;
      }),
      (a.prototype.outDegree = function () {
        return this.outEdges.length;
      }),
      (a.prototype.getModel = function (e) {
        if (!(this.dataIndex < 0)) {
          var t = this.hostGraph,
            r = t.data.getItemModel(this.dataIndex);
          return r.getModel(e);
        }
      }),
      (a.prototype.getAdjacentDataIndices = function () {
        for (var e = { edge: [], node: [] }, t = 0; t < this.edges.length; t++) {
          var r = this.edges[t];
          r.dataIndex < 0 ||
            (e.edge.push(r.dataIndex), e.node.push(r.node1.dataIndex, r.node2.dataIndex));
        }
        return e;
      }),
      a
    );
  })(),
  Su = (function () {
    function a(e, t, r) {
      (this.dataIndex = -1),
        (this.node1 = e),
        (this.node2 = t),
        (this.dataIndex = r == null ? -1 : r);
    }
    return (
      (a.prototype.getModel = function (e) {
        if (!(this.dataIndex < 0)) {
          var t = this.hostGraph,
            r = t.edgeData.getItemModel(this.dataIndex);
          return r.getModel(e);
        }
      }),
      (a.prototype.getAdjacentDataIndices = function () {
        return { edge: [this.dataIndex], node: [this.node1.dataIndex, this.node2.dataIndex] };
      }),
      a
    );
  })();
function bu(a, e) {
  return {
    getValue: function (t) {
      var r = this[a][e];
      return r.getStore().get(r.getDimensionIndex(t || 'value'), this.dataIndex);
    },
    setVisual: function (t, r) {
      this.dataIndex >= 0 && this[a][e].setItemVisual(this.dataIndex, t, r);
    },
    getVisual: function (t) {
      return this[a][e].getItemVisual(this.dataIndex, t);
    },
    setLayout: function (t, r) {
      this.dataIndex >= 0 && this[a][e].setItemLayout(this.dataIndex, t, r);
    },
    getLayout: function () {
      return this[a][e].getItemLayout(this.dataIndex);
    },
    getGraphicEl: function () {
      return this[a][e].getItemGraphicEl(this.dataIndex);
    },
    getRawIndex: function () {
      return this[a][e].getRawIndex(this.dataIndex);
    },
  };
}
te(we, bu('hostGraph', 'data'));
te(Su, bu('hostGraph', 'edgeData'));
const Mm = Cm;
function wu(a, e, t, r, n) {
  for (var i = new Mm(r), o = 0; o < a.length; o++) i.addNode(zt(a[o].id, a[o].name, o), o);
  for (var s = [], l = [], u = 0, o = 0; o < e.length; o++) {
    var h = e[o],
      v = h.source,
      c = h.target;
    i.addEdge(v, c, u) && (l.push(h), s.push(zt(ie(h.id, null), v + ' > ' + c)), u++);
  }
  var f = t.get('coordinateSystem'),
    d;
  if (f === 'cartesian2d' || f === 'polar') d = Oe(a, t);
  else {
    var p = Tl.get(f),
      g = p ? p.dimensions || [] : [];
    Ct(g, 'value') < 0 && g.concat(['value']);
    var y = qn(a, { coordDimensions: g, encodeDefine: t.getEncode() }).dimensions;
    (d = new Mt(y, t)), d.initData(a);
  }
  var m = new Mt(['value'], t);
  return (
    m.initData(l, s),
    n && n(d, m),
    iu({
      mainData: d,
      struct: i,
      structAttr: 'graph',
      datas: { node: d, edge: m },
      datasAttr: { node: 'data', edge: 'edgeData' },
    }),
    i.update(),
    i
  );
}
var Lm = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.hasSymbolVisual = !0), t;
  }
  return (
    (e.prototype.init = function (t) {
      a.prototype.init.apply(this, arguments);
      var r = this;
      function n() {
        return r._categoriesData;
      }
      (this.legendVisualProvider = new vr(n, n)),
        this.fillDataTextStyle(t.edges || t.links),
        this._updateCategoriesData();
    }),
    (e.prototype.mergeOption = function (t) {
      a.prototype.mergeOption.apply(this, arguments),
        this.fillDataTextStyle(t.edges || t.links),
        this._updateCategoriesData();
    }),
    (e.prototype.mergeDefaultAndTheme = function (t) {
      a.prototype.mergeDefaultAndTheme.apply(this, arguments), Hn(t, 'edgeLabel', ['show']);
    }),
    (e.prototype.getInitialData = function (t, r) {
      var n = t.edges || t.links || [],
        i = t.data || t.nodes || [],
        o = this;
      if (i && n) {
        gm(this);
        var s = wu(i, n, this, !0, l);
        return (
          I(
            s.edges,
            function (u) {
              ym(u.node1, u.node2, this, u.dataIndex);
            },
            this,
          ),
          s.data
        );
      }
      function l(u, h) {
        u.wrapMethod('getItemModel', function (d) {
          var p = o._categoriesModels,
            g = d.getShallow('category'),
            y = p[g];
          return y && ((y.parentModel = d.parentModel), (d.parentModel = y)), d;
        });
        var v = qt.prototype.getModel;
        function c(d, p) {
          var g = v.call(this, d, p);
          return (g.resolveParentPath = f), g;
        }
        h.wrapMethod('getItemModel', function (d) {
          return (d.resolveParentPath = f), (d.getModel = c), d;
        });
        function f(d) {
          if (d && (d[0] === 'label' || d[1] === 'label')) {
            var p = d.slice();
            return (
              d[0] === 'label' ? (p[0] = 'edgeLabel') : d[1] === 'label' && (p[1] = 'edgeLabel'), p
            );
          }
          return d;
        }
      }
    }),
    (e.prototype.getGraph = function () {
      return this.getData().graph;
    }),
    (e.prototype.getEdgeData = function () {
      return this.getGraph().edgeData;
    }),
    (e.prototype.getCategoriesData = function () {
      return this._categoriesData;
    }),
    (e.prototype.formatTooltip = function (t, r, n) {
      if (n === 'edge') {
        var i = this.getData(),
          o = this.getDataParams(t, n),
          s = i.graph.getEdgeByIndex(t),
          l = i.getName(s.node1.dataIndex),
          u = i.getName(s.node2.dataIndex),
          h = [];
        return (
          l != null && h.push(l),
          u != null && h.push(u),
          kt('nameValue', { name: h.join(' > '), value: o.value, noValue: o.value == null })
        );
      }
      var v = gv({ series: this, dataIndex: t, multipleSeries: r });
      return v;
    }),
    (e.prototype._updateCategoriesData = function () {
      var t = O(this.option.categories || [], function (n) {
          return n.value != null ? n : W({ value: 0 }, n);
        }),
        r = new Mt(['value'], this);
      r.initData(t),
        (this._categoriesData = r),
        (this._categoriesModels = r.mapArray(function (n) {
          return r.getItemModel(n);
        }));
    }),
    (e.prototype.setZoom = function (t) {
      this.option.zoom = t;
    }),
    (e.prototype.setCenter = function (t) {
      this.option.center = t;
    }),
    (e.prototype.isAnimationEnabled = function () {
      return (
        a.prototype.isAnimationEnabled.call(this) &&
        !(this.get('layout') === 'force' && this.get(['force', 'layoutAnimation']))
      );
    }),
    (e.type = 'series.graph'),
    (e.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar']),
    (e.defaultOption = {
      z: 2,
      coordinateSystem: 'view',
      legendHoverLink: !0,
      layout: null,
      circular: { rotateLabel: !1 },
      force: {
        initLayout: null,
        repulsion: [0, 50],
        gravity: 0.1,
        friction: 0.6,
        edgeLength: 30,
        layoutAnimation: !0,
      },
      left: 'center',
      top: 'center',
      symbol: 'circle',
      symbolSize: 10,
      edgeSymbol: ['none', 'none'],
      edgeSymbolSize: 10,
      edgeLabel: { position: 'middle', distance: 5 },
      draggable: !1,
      roam: !1,
      center: null,
      zoom: 1,
      nodeScaleRatio: 0.6,
      label: { show: !1, formatter: '{b}' },
      itemStyle: {},
      lineStyle: { color: '#aaa', width: 1, opacity: 0.5 },
      emphasis: { scale: !0, label: { show: !0 } },
      select: { itemStyle: { borderColor: '#212121' } },
    }),
    e
  );
})(mt);
const Im = Lm;
var Pm = { type: 'graphRoam', event: 'graphRoam', update: 'none' };
function Em(a) {
  a.registerChartView(Tm),
    a.registerSeriesModel(Im),
    a.registerProcessor(vm),
    a.registerVisual(cm),
    a.registerVisual(fm),
    a.registerLayout(mm),
    a.registerLayout(a.PRIORITY.VISUAL.POST_CHART_LAYOUT, Sm),
    a.registerLayout(wm),
    a.registerCoordinateSystem('graphView', { dimensions: Xn.dimensions, create: Am }),
    a.registerAction(
      {
        type: 'focusNodeAdjacency',
        event: 'focusNodeAdjacency',
        update: 'series:focusNodeAdjacency',
      },
      ze,
    ),
    a.registerAction(
      {
        type: 'unfocusNodeAdjacency',
        event: 'unfocusNodeAdjacency',
        update: 'series:unfocusNodeAdjacency',
      },
      ze,
    ),
    a.registerAction(Pm, function (e, t, r) {
      t.eachComponent({ mainType: 'series', query: e }, function (n) {
        var i = n.coordinateSystem,
          o = bl(i, e, void 0, r);
        n.setCenter && n.setCenter(o.center), n.setZoom && n.setZoom(o.zoom);
      });
    });
}
var Rm = (function () {
    function a() {
      (this.angle = 0), (this.width = 10), (this.r = 10), (this.x = 0), (this.y = 0);
    }
    return a;
  })(),
  km = (function (a) {
    k(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return (r.type = 'pointer'), r;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new Rm();
      }),
      (e.prototype.buildPath = function (t, r) {
        var n = Math.cos,
          i = Math.sin,
          o = r.r,
          s = r.width,
          l = r.angle,
          u = r.x - n(l) * s * (s >= o / 3 ? 1 : 2),
          h = r.y - i(l) * s * (s >= o / 3 ? 1 : 2);
        (l = r.angle - Math.PI / 2),
          t.moveTo(u, h),
          t.lineTo(r.x + n(l) * s, r.y + i(l) * s),
          t.lineTo(r.x + n(r.angle) * o, r.y + i(r.angle) * o),
          t.lineTo(r.x - n(l) * s, r.y - i(l) * s),
          t.lineTo(u, h);
      }),
      e
    );
  })(Vt);
const Nm = km;
function Vm(a, e) {
  var t = a.get('center'),
    r = e.getWidth(),
    n = e.getHeight(),
    i = Math.min(r, n),
    o = z(t[0], e.getWidth()),
    s = z(t[1], e.getHeight()),
    l = z(a.get('radius'), i / 2);
  return { cx: o, cy: s, r: l };
}
function La(a, e) {
  var t = a == null ? '' : a + '';
  return e && (tt(e) ? (t = e.replace('{value}', t)) : st(e) && (t = e(a))), t;
}
var Bm = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, r, n) {
      this.group.removeAll();
      var i = t.get(['axisLine', 'lineStyle', 'color']),
        o = Vm(t, n);
      this._renderMain(t, r, n, i, o), (this._data = t.getData());
    }),
    (e.prototype.dispose = function () {}),
    (e.prototype._renderMain = function (t, r, n, i, o) {
      var s = this.group,
        l = t.get('clockwise'),
        u = (-t.get('startAngle') / 180) * Math.PI,
        h = (-t.get('endAngle') / 180) * Math.PI,
        v = t.getModel('axisLine'),
        c = v.get('roundCap'),
        f = c ? Oi : ra,
        d = v.get('show'),
        p = v.getModel('lineStyle'),
        g = p.get('width'),
        y = [u, h];
      yv(y, !l), (u = y[0]), (h = y[1]);
      for (var m = h - u, x = u, S = [], b = 0; d && b < i.length; b++) {
        var w = Math.min(Math.max(i[b][0], 0), 1);
        h = u + m * w;
        var _ = new f({
          shape: {
            startAngle: x,
            endAngle: h,
            cx: o.cx,
            cy: o.cy,
            clockwise: l,
            r0: o.r - g,
            r: o.r,
          },
          silent: !0,
        });
        _.setStyle({ fill: i[b][1] }),
          _.setStyle(p.getLineStyle(['color', 'width'])),
          S.push(_),
          (x = h);
      }
      S.reverse(),
        I(S, function (C) {
          return s.add(C);
        });
      var A = function (C) {
        if (C <= 0) return i[0][1];
        var D;
        for (D = 0; D < i.length; D++)
          if (i[D][0] >= C && (D === 0 ? 0 : i[D - 1][0]) < C) return i[D][1];
        return i[D - 1][1];
      };
      this._renderTicks(t, r, n, A, o, u, h, l, g),
        this._renderTitleAndDetail(t, r, n, A, o),
        this._renderAnchor(t, o),
        this._renderPointer(t, r, n, A, o, u, h, l, g);
    }),
    (e.prototype._renderTicks = function (t, r, n, i, o, s, l, u, h) {
      for (
        var v = this.group,
          c = o.cx,
          f = o.cy,
          d = o.r,
          p = +t.get('min'),
          g = +t.get('max'),
          y = t.getModel('splitLine'),
          m = t.getModel('axisTick'),
          x = t.getModel('axisLabel'),
          S = t.get('splitNumber'),
          b = m.get('splitNumber'),
          w = z(y.get('length'), d),
          _ = z(m.get('length'), d),
          A = s,
          C = (l - s) / S,
          D = C / b,
          T = y.getModel('lineStyle').getLineStyle(),
          L = m.getModel('lineStyle').getLineStyle(),
          P = y.get('distance'),
          M,
          E,
          R = 0;
        R <= S;
        R++
      ) {
        if (((M = Math.cos(A)), (E = Math.sin(A)), y.get('show'))) {
          var N = P ? P + h : h,
            V = new Xt({
              shape: {
                x1: M * (d - N) + c,
                y1: E * (d - N) + f,
                x2: M * (d - w - N) + c,
                y2: E * (d - w - N) + f,
              },
              style: T,
              silent: !0,
            });
          T.stroke === 'auto' && V.setStyle({ stroke: i(R / S) }), v.add(V);
        }
        if (x.get('show')) {
          var N = x.get('distance') + P,
            G = La(Fn((R / S) * (g - p) + p), x.get('formatter')),
            $ = i(R / S),
            F = M * (d - w - N) + c,
            j = E * (d - w - N) + f,
            Q = x.get('rotate'),
            X = 0;
          Q === 'radial'
            ? ((X = -A + 2 * Math.PI), X > Math.PI / 2 && (X += Math.PI))
            : Q === 'tangential'
            ? (X = -A - Math.PI / 2)
            : Ot(Q) && (X = (Q * Math.PI) / 180),
            X === 0
              ? v.add(
                  new gt({
                    style: yt(
                      x,
                      {
                        text: G,
                        x: F,
                        y: j,
                        verticalAlign: E < -0.8 ? 'top' : E > 0.8 ? 'bottom' : 'middle',
                        align: M < -0.4 ? 'left' : M > 0.4 ? 'right' : 'center',
                      },
                      { inheritColor: $ },
                    ),
                    silent: !0,
                  }),
                )
              : v.add(
                  new gt({
                    style: yt(
                      x,
                      { text: G, x: F, y: j, verticalAlign: 'middle', align: 'center' },
                      { inheritColor: $ },
                    ),
                    silent: !0,
                    originX: F,
                    originY: j,
                    rotation: X,
                  }),
                );
        }
        if (m.get('show') && R !== S) {
          var N = m.get('distance');
          N = N ? N + h : h;
          for (var at = 0; at <= b; at++) {
            (M = Math.cos(A)), (E = Math.sin(A));
            var Ht = new Xt({
              shape: {
                x1: M * (d - N) + c,
                y1: E * (d - N) + f,
                x2: M * (d - _ - N) + c,
                y2: E * (d - _ - N) + f,
              },
              silent: !0,
              style: L,
            });
            L.stroke === 'auto' && Ht.setStyle({ stroke: i((R + at / b) / S) }),
              v.add(Ht),
              (A += D);
          }
          A -= D;
        } else A += C;
      }
    }),
    (e.prototype._renderPointer = function (t, r, n, i, o, s, l, u, h) {
      var v = this.group,
        c = this._data,
        f = this._progressEls,
        d = [],
        p = t.get(['pointer', 'show']),
        g = t.getModel('progress'),
        y = g.get('show'),
        m = t.getData(),
        x = m.mapDimension('value'),
        S = +t.get('min'),
        b = +t.get('max'),
        w = [S, b],
        _ = [s, l];
      function A(D, T) {
        var L = m.getItemModel(D),
          P = L.getModel('pointer'),
          M = z(P.get('width'), o.r),
          E = z(P.get('length'), o.r),
          R = t.get(['pointer', 'icon']),
          N = P.get('offsetCenter'),
          V = z(N[0], o.r),
          G = z(N[1], o.r),
          $ = P.get('keepAspect'),
          F;
        return (
          R
            ? (F = Wt(R, V - M / 2, G - E, M, E, null, $))
            : (F = new Nm({ shape: { angle: -Math.PI / 2, width: M, r: E, x: V, y: G } })),
          (F.rotation = -(T + Math.PI / 2)),
          (F.x = o.cx),
          (F.y = o.cy),
          F
        );
      }
      function C(D, T) {
        var L = g.get('roundCap'),
          P = L ? Oi : ra,
          M = g.get('overlap'),
          E = M ? g.get('width') : h / m.count(),
          R = M ? o.r - E : o.r - (D + 1) * E,
          N = M ? o.r : o.r - D * E,
          V = new P({
            shape: { startAngle: s, endAngle: T, cx: o.cx, cy: o.cy, clockwise: u, r0: R, r: N },
          });
        return M && (V.z2 = b - (m.get(x, D) % b)), V;
      }
      (y || p) &&
        (m
          .diff(c)
          .add(function (D) {
            var T = m.get(x, D);
            if (p) {
              var L = A(D, s);
              Qt(L, { rotation: -((isNaN(+T) ? _[0] : vt(T, w, _, !0)) + Math.PI / 2) }, t),
                v.add(L),
                m.setItemGraphicEl(D, L);
            }
            if (y) {
              var P = C(D, s),
                M = g.get('clip');
              Qt(P, { shape: { endAngle: vt(T, w, _, M) } }, t),
                v.add(P),
                Gi(t.seriesIndex, m.dataType, D, P),
                (d[D] = P);
            }
          })
          .update(function (D, T) {
            var L = m.get(x, D);
            if (p) {
              var P = c.getItemGraphicEl(T),
                M = P ? P.rotation : s,
                E = A(D, M);
              (E.rotation = M),
                ht(E, { rotation: -((isNaN(+L) ? _[0] : vt(L, w, _, !0)) + Math.PI / 2) }, t),
                v.add(E),
                m.setItemGraphicEl(D, E);
            }
            if (y) {
              var R = f[T],
                N = R ? R.shape.endAngle : s,
                V = C(D, N),
                G = g.get('clip');
              ht(V, { shape: { endAngle: vt(L, w, _, G) } }, t),
                v.add(V),
                Gi(t.seriesIndex, m.dataType, D, V),
                (d[D] = V);
            }
          })
          .execute(),
        m.each(function (D) {
          var T = m.getItemModel(D),
            L = T.getModel('emphasis'),
            P = L.get('focus'),
            M = L.get('blurScope'),
            E = L.get('disabled');
          if (p) {
            var R = m.getItemGraphicEl(D),
              N = m.getItemVisual(D, 'style'),
              V = N.fill;
            if (R instanceof ye) {
              var G = R.style;
              R.useStyle(
                W({ image: G.image, x: G.x, y: G.y, width: G.width, height: G.height }, N),
              );
            } else R.useStyle(N), R.type !== 'pointer' && R.setColor(V);
            R.setStyle(T.getModel(['pointer', 'itemStyle']).getItemStyle()),
              R.style.fill === 'auto' && R.setStyle('fill', i(vt(m.get(x, D), w, [0, 1], !0))),
              (R.z2EmphasisLift = 0),
              It(R, T),
              ft(R, P, M, E);
          }
          if (y) {
            var $ = d[D];
            $.useStyle(m.getItemVisual(D, 'style')),
              $.setStyle(T.getModel(['progress', 'itemStyle']).getItemStyle()),
              ($.z2EmphasisLift = 0),
              It($, T),
              ft($, P, M, E);
          }
        }),
        (this._progressEls = d));
    }),
    (e.prototype._renderAnchor = function (t, r) {
      var n = t.getModel('anchor'),
        i = n.get('show');
      if (i) {
        var o = n.get('size'),
          s = n.get('icon'),
          l = n.get('offsetCenter'),
          u = n.get('keepAspect'),
          h = Wt(s, r.cx - o / 2 + z(l[0], r.r), r.cy - o / 2 + z(l[1], r.r), o, o, null, u);
        (h.z2 = n.get('showAbove') ? 1 : 0),
          h.setStyle(n.getModel('itemStyle').getItemStyle()),
          this.group.add(h);
      }
    }),
    (e.prototype._renderTitleAndDetail = function (t, r, n, i, o) {
      var s = this,
        l = t.getData(),
        u = l.mapDimension('value'),
        h = +t.get('min'),
        v = +t.get('max'),
        c = new K(),
        f = [],
        d = [],
        p = t.isAnimationEnabled(),
        g = t.get(['pointer', 'showAbove']);
      l
        .diff(this._data)
        .add(function (y) {
          (f[y] = new gt({ silent: !0 })), (d[y] = new gt({ silent: !0 }));
        })
        .update(function (y, m) {
          (f[y] = s._titleEls[m]), (d[y] = s._detailEls[m]);
        })
        .execute(),
        l.each(function (y) {
          var m = l.getItemModel(y),
            x = l.get(u, y),
            S = new K(),
            b = i(vt(x, [h, v], [0, 1], !0)),
            w = m.getModel('title');
          if (w.get('show')) {
            var _ = w.get('offsetCenter'),
              A = o.cx + z(_[0], o.r),
              C = o.cy + z(_[1], o.r),
              D = f[y];
            D.attr({
              z2: g ? 0 : 2,
              style: yt(
                w,
                { x: A, y: C, text: l.getName(y), align: 'center', verticalAlign: 'middle' },
                { inheritColor: b },
              ),
            }),
              S.add(D);
          }
          var T = m.getModel('detail');
          if (T.get('show')) {
            var L = T.get('offsetCenter'),
              P = o.cx + z(L[0], o.r),
              M = o.cy + z(L[1], o.r),
              E = z(T.get('width'), o.r),
              R = z(T.get('height'), o.r),
              N = t.get(['progress', 'show']) ? l.getItemVisual(y, 'style').fill : b,
              D = d[y],
              V = T.get('formatter');
            D.attr({
              z2: g ? 0 : 2,
              style: yt(
                T,
                {
                  x: P,
                  y: M,
                  text: La(x, V),
                  width: isNaN(E) ? null : E,
                  height: isNaN(R) ? null : R,
                  align: 'center',
                  verticalAlign: 'middle',
                },
                { inheritColor: N },
              ),
            }),
              mv(D, { normal: T }, x, function ($) {
                return La($, V);
              }),
              p &&
                xv(D, y, l, t, {
                  getFormattedLabel: function ($, F, j, Q, X, at) {
                    return La(at ? at.interpolatedValue : x, V);
                  },
                }),
              S.add(D);
          }
          c.add(S);
        }),
        this.group.add(c),
        (this._titleEls = f),
        (this._detailEls = d);
    }),
    (e.type = 'gauge'),
    e
  );
})(dt);
const zm = Bm;
var Gm = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.visualStyleAccessPath = 'itemStyle'), t;
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      return cr(this, ['value']);
    }),
    (e.type = 'series.gauge'),
    (e.defaultOption = {
      z: 2,
      colorBy: 'data',
      center: ['50%', '50%'],
      legendHoverLink: !0,
      radius: '75%',
      startAngle: 225,
      endAngle: -45,
      clockwise: !0,
      min: 0,
      max: 100,
      splitNumber: 10,
      axisLine: { show: !0, roundCap: !1, lineStyle: { color: [[1, '#E6EBF8']], width: 10 } },
      progress: { show: !1, overlap: !0, width: 10, roundCap: !1, clip: !0 },
      splitLine: {
        show: !0,
        length: 10,
        distance: 10,
        lineStyle: { color: '#63677A', width: 3, type: 'solid' },
      },
      axisTick: {
        show: !0,
        splitNumber: 5,
        length: 6,
        distance: 10,
        lineStyle: { color: '#63677A', width: 1, type: 'solid' },
      },
      axisLabel: { show: !0, distance: 15, color: '#464646', fontSize: 12, rotate: 0 },
      pointer: {
        icon: null,
        offsetCenter: [0, 0],
        show: !0,
        showAbove: !0,
        length: '60%',
        width: 6,
        keepAspect: !1,
      },
      anchor: {
        show: !1,
        showAbove: !1,
        size: 6,
        icon: 'circle',
        offsetCenter: [0, 0],
        keepAspect: !1,
        itemStyle: { color: '#fff', borderWidth: 0, borderColor: '#5470c6' },
      },
      title: {
        show: !0,
        offsetCenter: [0, '20%'],
        color: '#464646',
        fontSize: 16,
        valueAnimation: !1,
      },
      detail: {
        show: !0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        borderColor: '#ccc',
        width: 100,
        height: null,
        padding: [5, 10],
        offsetCenter: [0, '40%'],
        color: '#464646',
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 30,
        valueAnimation: !1,
      },
    }),
    e
  );
})(mt);
const Om = Gm;
function Wm(a) {
  a.registerChartView(zm), a.registerSeriesModel(Om);
}
var $m = ['itemStyle', 'opacity'],
  Fm = (function (a) {
    k(e, a);
    function e(t, r) {
      var n = a.call(this) || this,
        i = n,
        o = new Ie(),
        s = new gt();
      return i.setTextContent(s), n.setTextGuideLine(o), n.updateData(t, r, !0), n;
    }
    return (
      (e.prototype.updateData = function (t, r, n) {
        var i = this,
          o = t.hostModel,
          s = t.getItemModel(r),
          l = t.getItemLayout(r),
          u = s.getModel('emphasis'),
          h = s.get($m);
        (h = h == null ? 1 : h),
          n || fe(i),
          i.useStyle(t.getItemVisual(r, 'style')),
          (i.style.lineJoin = 'round'),
          n
            ? (i.setShape({ points: l.points }),
              (i.style.opacity = 0),
              Qt(i, { style: { opacity: h } }, o, r))
            : ht(i, { style: { opacity: h }, shape: { points: l.points } }, o, r),
          It(i, s),
          this._updateLabel(t, r),
          ft(this, u.get('focus'), u.get('blurScope'), u.get('disabled'));
      }),
      (e.prototype._updateLabel = function (t, r) {
        var n = this,
          i = this.getTextGuideLine(),
          o = n.getTextContent(),
          s = t.hostModel,
          l = t.getItemModel(r),
          u = t.getItemLayout(r),
          h = u.label,
          v = t.getItemVisual(r, 'style'),
          c = v.fill;
        Jt(
          o,
          Nt(l),
          {
            labelFetcher: t.hostModel,
            labelDataIndex: r,
            defaultOpacity: v.opacity,
            defaultText: t.getName(r),
          },
          { normal: { align: h.textAlign, verticalAlign: h.verticalAlign } },
        ),
          n.setTextConfig({ local: !0, inside: !!h.inside, insideStroke: c, outsideFill: c });
        var f = h.linePoints;
        i.setShape({ points: f }),
          (n.textGuideLineConfig = { anchor: f ? new fl(f[0][0], f[0][1]) : null }),
          ht(o, { style: { x: h.x, y: h.y } }, s, r),
          o.attr({ rotation: h.rotation, originX: h.x, originY: h.y, z2: 10 }),
          Sv(n, bv(l), { stroke: c });
      }),
      e
    );
  })(Me),
  Hm = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t.ignoreLabelLineUpdate = !0), t;
    }
    return (
      (e.prototype.render = function (t, r, n) {
        var i = t.getData(),
          o = this._data,
          s = this.group;
        i
          .diff(o)
          .add(function (l) {
            var u = new Fm(i, l);
            i.setItemGraphicEl(l, u), s.add(u);
          })
          .update(function (l, u) {
            var h = o.getItemGraphicEl(u);
            h.updateData(i, l), s.add(h), i.setItemGraphicEl(l, h);
          })
          .remove(function (l) {
            var u = o.getItemGraphicEl(l);
            wv(u, t, l);
          })
          .execute(),
          (this._data = i);
      }),
      (e.prototype.remove = function () {
        this.group.removeAll(), (this._data = null);
      }),
      (e.prototype.dispose = function () {}),
      (e.type = 'funnel'),
      e
    );
  })(dt);
const Zm = Hm;
var Um = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function (t) {
      a.prototype.init.apply(this, arguments),
        (this.legendVisualProvider = new vr(U(this.getData, this), U(this.getRawData, this))),
        this._defaultLabelLine(t);
    }),
    (e.prototype.getInitialData = function (t, r) {
      return cr(this, { coordDimensions: ['value'], encodeDefaulter: it(_v, this) });
    }),
    (e.prototype._defaultLabelLine = function (t) {
      Hn(t, 'labelLine', ['show']);
      var r = t.labelLine,
        n = t.emphasis.labelLine;
      (r.show = r.show && t.label.show), (n.show = n.show && t.emphasis.label.show);
    }),
    (e.prototype.getDataParams = function (t) {
      var r = this.getData(),
        n = a.prototype.getDataParams.call(this, t),
        i = r.mapDimension('value'),
        o = r.getSum(i);
      return (
        (n.percent = o ? +((r.get(i, t) / o) * 100).toFixed(2) : 0), n.$vars.push('percent'), n
      );
    }),
    (e.type = 'series.funnel'),
    (e.defaultOption = {
      z: 2,
      legendHoverLink: !0,
      colorBy: 'data',
      left: 80,
      top: 60,
      right: 80,
      bottom: 60,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      orient: 'vertical',
      gap: 0,
      funnelAlign: 'center',
      label: { show: !0, position: 'outer' },
      labelLine: { show: !0, length: 20, lineStyle: { width: 1 } },
      itemStyle: { borderColor: '#fff', borderWidth: 1 },
      emphasis: { label: { show: !0 } },
      select: { itemStyle: { borderColor: '#212121' } },
    }),
    e
  );
})(mt);
const Ym = Um;
function Xm(a, e) {
  return re(a.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
}
function qm(a, e) {
  for (
    var t = a.mapDimension('value'),
      r = a.mapArray(t, function (l) {
        return l;
      }),
      n = [],
      i = e === 'ascending',
      o = 0,
      s = a.count();
    o < s;
    o++
  )
    n[o] = o;
  return (
    st(e)
      ? n.sort(e)
      : e !== 'none' &&
        n.sort(function (l, u) {
          return i ? r[l] - r[u] : r[u] - r[l];
        }),
    n
  );
}
function Km(a) {
  var e = a.hostModel,
    t = e.get('orient');
  a.each(function (r) {
    var n = a.getItemModel(r),
      i = n.getModel('label'),
      o = i.get('position'),
      s = n.getModel('labelLine'),
      l = a.getItemLayout(r),
      u = l.points,
      h =
        o === 'inner' ||
        o === 'inside' ||
        o === 'center' ||
        o === 'insideLeft' ||
        o === 'insideRight',
      v,
      c,
      f,
      d;
    if (h)
      o === 'insideLeft'
        ? ((c = (u[0][0] + u[3][0]) / 2 + 5), (f = (u[0][1] + u[3][1]) / 2), (v = 'left'))
        : o === 'insideRight'
        ? ((c = (u[1][0] + u[2][0]) / 2 - 5), (f = (u[1][1] + u[2][1]) / 2), (v = 'right'))
        : ((c = (u[0][0] + u[1][0] + u[2][0] + u[3][0]) / 4),
          (f = (u[0][1] + u[1][1] + u[2][1] + u[3][1]) / 4),
          (v = 'center')),
        (d = [
          [c, f],
          [c, f],
        ]);
    else {
      var p = void 0,
        g = void 0,
        y = void 0,
        m = void 0,
        x = s.get('length');
      o === 'left'
        ? ((p = (u[3][0] + u[0][0]) / 2),
          (g = (u[3][1] + u[0][1]) / 2),
          (y = p - x),
          (c = y - 5),
          (v = 'right'))
        : o === 'right'
        ? ((p = (u[1][0] + u[2][0]) / 2),
          (g = (u[1][1] + u[2][1]) / 2),
          (y = p + x),
          (c = y + 5),
          (v = 'left'))
        : o === 'top'
        ? ((p = (u[3][0] + u[0][0]) / 2),
          (g = (u[3][1] + u[0][1]) / 2),
          (m = g - x),
          (f = m - 5),
          (v = 'center'))
        : o === 'bottom'
        ? ((p = (u[1][0] + u[2][0]) / 2),
          (g = (u[1][1] + u[2][1]) / 2),
          (m = g + x),
          (f = m + 5),
          (v = 'center'))
        : o === 'rightTop'
        ? ((p = t === 'horizontal' ? u[3][0] : u[1][0]),
          (g = t === 'horizontal' ? u[3][1] : u[1][1]),
          t === 'horizontal'
            ? ((m = g - x), (f = m - 5), (v = 'center'))
            : ((y = p + x), (c = y + 5), (v = 'top')))
        : o === 'rightBottom'
        ? ((p = u[2][0]),
          (g = u[2][1]),
          t === 'horizontal'
            ? ((m = g + x), (f = m + 5), (v = 'center'))
            : ((y = p + x), (c = y + 5), (v = 'bottom')))
        : o === 'leftTop'
        ? ((p = u[0][0]),
          (g = t === 'horizontal' ? u[0][1] : u[1][1]),
          t === 'horizontal'
            ? ((m = g - x), (f = m - 5), (v = 'center'))
            : ((y = p - x), (c = y - 5), (v = 'right')))
        : o === 'leftBottom'
        ? ((p = t === 'horizontal' ? u[1][0] : u[3][0]),
          (g = t === 'horizontal' ? u[1][1] : u[2][1]),
          t === 'horizontal'
            ? ((m = g + x), (f = m + 5), (v = 'center'))
            : ((y = p - x), (c = y - 5), (v = 'right')))
        : ((p = (u[1][0] + u[2][0]) / 2),
          (g = (u[1][1] + u[2][1]) / 2),
          t === 'horizontal'
            ? ((m = g + x), (f = m + 5), (v = 'center'))
            : ((y = p + x), (c = y + 5), (v = 'left'))),
        t === 'horizontal' ? ((y = p), (c = y)) : ((m = g), (f = m)),
        (d = [
          [p, g],
          [y, m],
        ]);
    }
    l.label = { linePoints: d, x: c, y: f, verticalAlign: 'middle', textAlign: v, inside: h };
  });
}
function jm(a, e) {
  a.eachSeriesByType('funnel', function (t) {
    var r = t.getData(),
      n = r.mapDimension('value'),
      i = t.get('sort'),
      o = Xm(t, e),
      s = t.get('orient'),
      l = o.width,
      u = o.height,
      h = qm(r, i),
      v = o.x,
      c = o.y,
      f =
        s === 'horizontal'
          ? [z(t.get('minSize'), u), z(t.get('maxSize'), u)]
          : [z(t.get('minSize'), l), z(t.get('maxSize'), l)],
      d = r.getDataExtent(n),
      p = t.get('min'),
      g = t.get('max');
    p == null && (p = Math.min(d[0], 0)), g == null && (g = d[1]);
    var y = t.get('funnelAlign'),
      m = t.get('gap'),
      x = s === 'horizontal' ? l : u,
      S = (x - m * (r.count() - 1)) / r.count(),
      b = function (M, E) {
        if (s === 'horizontal') {
          var R = r.get(n, M) || 0,
            N = vt(R, [p, g], f, !0),
            V = void 0;
          switch (y) {
            case 'top':
              V = c;
              break;
            case 'center':
              V = c + (u - N) / 2;
              break;
            case 'bottom':
              V = c + (u - N);
              break;
          }
          return [
            [E, V],
            [E, V + N],
          ];
        }
        var G = r.get(n, M) || 0,
          $ = vt(G, [p, g], f, !0),
          F;
        switch (y) {
          case 'left':
            F = v;
            break;
          case 'center':
            F = v + (l - $) / 2;
            break;
          case 'right':
            F = v + l - $;
            break;
        }
        return [
          [F, E],
          [F + $, E],
        ];
      };
    i === 'ascending' &&
      ((S = -S), (m = -m), s === 'horizontal' ? (v += l) : (c += u), (h = h.reverse()));
    for (var w = 0; w < h.length; w++) {
      var _ = h[w],
        A = h[w + 1],
        C = r.getItemModel(_);
      if (s === 'horizontal') {
        var D = C.get(['itemStyle', 'width']);
        D == null ? (D = S) : ((D = z(D, l)), i === 'ascending' && (D = -D));
        var T = b(_, v),
          L = b(A, v + D);
        (v += D + m), r.setItemLayout(_, { points: T.concat(L.slice().reverse()) });
      } else {
        var P = C.get(['itemStyle', 'height']);
        P == null ? (P = S) : ((P = z(P, u)), i === 'ascending' && (P = -P));
        var T = b(_, c),
          L = b(A, c + P);
        (c += P + m), r.setItemLayout(_, { points: T.concat(L.slice().reverse()) });
      }
    }
    Km(r);
  });
}
function Qm(a) {
  a.registerChartView(Zm),
    a.registerSeriesModel(Ym),
    a.registerLayout(jm),
    a.registerProcessor(fr('funnel'));
}
var Jm = 0.3,
  t0 = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t._dataGroup = new K()), (t._initialized = !1), t;
    }
    return (
      (e.prototype.init = function () {
        this.group.add(this._dataGroup);
      }),
      (e.prototype.render = function (t, r, n, i) {
        this._progressiveEls = null;
        var o = this._dataGroup,
          s = t.getData(),
          l = this._data,
          u = t.coordinateSystem,
          h = u.dimensions,
          v = vs(t);
        s.diff(l).add(c).update(f).remove(d).execute();
        function c(g) {
          var y = hs(s, o, g, h, u);
          Qr(y, s, g, v);
        }
        function f(g, y) {
          var m = l.getItemGraphicEl(y),
            x = _u(s, g, h, u);
          s.setItemGraphicEl(g, m), ht(m, { shape: { points: x } }, t, g), fe(m), Qr(m, s, g, v);
        }
        function d(g) {
          var y = l.getItemGraphicEl(g);
          o.remove(y);
        }
        if (!this._initialized) {
          this._initialized = !0;
          var p = e0(u, t, function () {
            setTimeout(function () {
              o.removeClipPath();
            });
          });
          o.setClipPath(p);
        }
        this._data = s;
      }),
      (e.prototype.incrementalPrepareRender = function (t, r, n) {
        (this._initialized = !0), (this._data = null), this._dataGroup.removeAll();
      }),
      (e.prototype.incrementalRender = function (t, r, n) {
        for (
          var i = r.getData(),
            o = r.coordinateSystem,
            s = o.dimensions,
            l = vs(r),
            u = (this._progressiveEls = []),
            h = t.start;
          h < t.end;
          h++
        ) {
          var v = hs(i, this._dataGroup, h, s, o);
          (v.incremental = !0), Qr(v, i, h, l), u.push(v);
        }
      }),
      (e.prototype.remove = function () {
        this._dataGroup && this._dataGroup.removeAll(), (this._data = null);
      }),
      (e.type = 'parallel'),
      e
    );
  })(dt);
function e0(a, e, t) {
  var r = a.model,
    n = a.getRect(),
    i = new Tt({ shape: { x: n.x, y: n.y, width: n.width, height: n.height } }),
    o = r.get('layout') === 'horizontal' ? 'width' : 'height';
  return i.setShape(o, 0), Qt(i, { shape: { width: n.width, height: n.height } }, e, t), i;
}
function _u(a, e, t, r) {
  for (var n = [], i = 0; i < t.length; i++) {
    var o = t[i],
      s = a.get(a.mapDimension(o), e);
    a0(s, r.getAxis(o).type) || n.push(r.dataToPoint(s, o));
  }
  return n;
}
function hs(a, e, t, r, n) {
  var i = _u(a, t, r, n),
    o = new Ie({ shape: { points: i }, z2: 10 });
  return e.add(o), a.setItemGraphicEl(t, o), o;
}
function vs(a) {
  var e = a.get('smooth', !0);
  return e === !0 && (e = Jm), (e = Av(e)), Dv(e) && (e = 0), { smooth: e };
}
function Qr(a, e, t, r) {
  a.useStyle(e.getItemVisual(t, 'style')), (a.style.fill = null), a.setShape('smooth', r.smooth);
  var n = e.getItemModel(t),
    i = n.getModel('emphasis');
  It(a, n, 'lineStyle'), ft(a, i.get('focus'), i.get('blurScope'), i.get('disabled'));
}
function a0(a, e) {
  return e === 'category' ? a == null : a == null || isNaN(a);
}
const r0 = t0;
var n0 = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (
      (t.type = e.type), (t.visualStyleAccessPath = 'lineStyle'), (t.visualDrawType = 'stroke'), t
    );
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      return Oe(null, this, { useEncodeDefaulter: U(i0, null, this) });
    }),
    (e.prototype.getRawIndicesByActiveState = function (t) {
      var r = this.coordinateSystem,
        n = this.getData(),
        i = [];
      return (
        r.eachActiveState(n, function (o, s) {
          t === o && i.push(n.getRawIndex(s));
        }),
        i
      );
    }),
    (e.type = 'series.parallel'),
    (e.dependencies = ['parallel']),
    (e.defaultOption = {
      z: 2,
      coordinateSystem: 'parallel',
      parallelIndex: 0,
      label: { show: !1 },
      inactiveOpacity: 0.05,
      activeOpacity: 1,
      lineStyle: { width: 1, opacity: 0.45, type: 'solid' },
      emphasis: { label: { show: !1 } },
      progressive: 500,
      smooth: !1,
      animationEasing: 'linear',
    }),
    e
  );
})(mt);
function i0(a) {
  var e = a.ecModel.getComponent('parallel', a.get('parallelIndex'));
  if (e) {
    var t = {};
    return (
      I(e.dimensions, function (r) {
        var n = o0(r);
        t[r] = n;
      }),
      t
    );
  }
}
function o0(a) {
  return +a.replace('dim', '');
}
const s0 = n0;
var l0 = ['lineStyle', 'opacity'],
  u0 = {
    seriesType: 'parallel',
    reset: function (a, e) {
      var t = a.coordinateSystem,
        r = {
          normal: a.get(['lineStyle', 'opacity']),
          active: a.get('activeOpacity'),
          inactive: a.get('inactiveOpacity'),
        };
      return {
        progress: function (n, i) {
          t.eachActiveState(
            i,
            function (o, s) {
              var l = r[o];
              if (o === 'normal' && i.hasItemOption) {
                var u = i.getItemModel(s).get(l0, !0);
                u != null && (l = u);
              }
              var h = i.ensureUniqueItemVisual(s, 'style');
              h.opacity = l;
            },
            n.start,
            n.end,
          );
        },
      };
    },
  };
const h0 = u0;
function v0(a) {
  Y(Gl),
    a.registerChartView(r0),
    a.registerSeriesModel(s0),
    a.registerVisual(a.PRIORITY.VISUAL.BRUSH, h0);
}
var c0 = (function () {
    function a() {
      (this.x1 = 0),
        (this.y1 = 0),
        (this.x2 = 0),
        (this.y2 = 0),
        (this.cpx1 = 0),
        (this.cpy1 = 0),
        (this.cpx2 = 0),
        (this.cpy2 = 0),
        (this.extent = 0);
    }
    return a;
  })(),
  f0 = (function (a) {
    k(e, a);
    function e(t) {
      return a.call(this, t) || this;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new c0();
      }),
      (e.prototype.buildPath = function (t, r) {
        var n = r.extent;
        t.moveTo(r.x1, r.y1),
          t.bezierCurveTo(r.cpx1, r.cpy1, r.cpx2, r.cpy2, r.x2, r.y2),
          r.orient === 'vertical'
            ? (t.lineTo(r.x2 + n, r.y2),
              t.bezierCurveTo(r.cpx2 + n, r.cpy2, r.cpx1 + n, r.cpy1, r.x1 + n, r.y1))
            : (t.lineTo(r.x2, r.y2 + n),
              t.bezierCurveTo(r.cpx2, r.cpy2 + n, r.cpx1, r.cpy1 + n, r.x1, r.y1 + n)),
          t.closePath();
      }),
      (e.prototype.highlight = function () {
        Un(this);
      }),
      (e.prototype.downplay = function () {
        Yn(this);
      }),
      e
    );
  })(Vt),
  d0 = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t._focusAdjacencyDisabled = !1), t;
    }
    return (
      (e.prototype.render = function (t, r, n) {
        var i = this,
          o = t.getGraph(),
          s = this.group,
          l = t.layoutInfo,
          u = l.width,
          h = l.height,
          v = t.getData(),
          c = t.getData('edge'),
          f = t.get('orient');
        (this._model = t),
          s.removeAll(),
          (s.x = l.x),
          (s.y = l.y),
          o.eachEdge(function (d) {
            var p = new f0(),
              g = lt(p);
            (g.dataIndex = d.dataIndex), (g.seriesIndex = t.seriesIndex), (g.dataType = 'edge');
            var y = d.getModel(),
              m = y.getModel('lineStyle'),
              x = m.get('curveness'),
              S = d.node1.getLayout(),
              b = d.node1.getModel(),
              w = b.get('localX'),
              _ = b.get('localY'),
              A = d.node2.getLayout(),
              C = d.node2.getModel(),
              D = C.get('localX'),
              T = C.get('localY'),
              L = d.getLayout(),
              P,
              M,
              E,
              R,
              N,
              V,
              G,
              $;
            switch (
              ((p.shape.extent = Math.max(1, L.dy)),
              (p.shape.orient = f),
              f === 'vertical'
                ? ((P = (w != null ? w * u : S.x) + L.sy),
                  (M = (_ != null ? _ * h : S.y) + S.dy),
                  (E = (D != null ? D * u : A.x) + L.ty),
                  (R = T != null ? T * h : A.y),
                  (N = P),
                  (V = M * (1 - x) + R * x),
                  (G = E),
                  ($ = M * x + R * (1 - x)))
                : ((P = (w != null ? w * u : S.x) + S.dx),
                  (M = (_ != null ? _ * h : S.y) + L.sy),
                  (E = D != null ? D * u : A.x),
                  (R = (T != null ? T * h : A.y) + L.ty),
                  (N = P * (1 - x) + E * x),
                  (V = M),
                  (G = P * x + E * (1 - x)),
                  ($ = R)),
              p.setShape({ x1: P, y1: M, x2: E, y2: R, cpx1: N, cpy1: V, cpx2: G, cpy2: $ }),
              p.useStyle(m.getItemStyle()),
              p.style.fill)
            ) {
              case 'source':
                (p.style.fill = d.node1.getVisual('color')),
                  (p.style.decal = d.node1.getVisual('style').decal);
                break;
              case 'target':
                (p.style.fill = d.node2.getVisual('color')),
                  (p.style.decal = d.node2.getVisual('style').decal);
                break;
              case 'gradient':
                var F = d.node1.getVisual('color'),
                  j = d.node2.getVisual('color');
                tt(F) &&
                  tt(j) &&
                  (p.style.fill = new Tv(0, 0, +(f === 'horizontal'), +(f === 'vertical'), [
                    { color: F, offset: 0 },
                    { color: j, offset: 1 },
                  ]));
            }
            Jt(p, Nt(y, 'edgeLabel'), {
              labelFetcher: t,
              labelDataIndex: d.dataIndex,
              defaultText: '' + y.get('value'),
            }),
              p.setTextConfig({ position: 'inside' });
            var Q = y.getModel('emphasis');
            It(p, y, 'lineStyle', function (at) {
              return at.getItemStyle();
            }),
              s.add(p),
              c.setItemGraphicEl(d.dataIndex, p);
            var X = Q.get('focus');
            ft(
              p,
              X === 'adjacency' ? d.getAdjacentDataIndices() : X,
              Q.get('blurScope'),
              Q.get('disabled'),
            ),
              (lt(p).dataType = 'edge');
          }),
          o.eachNode(function (d) {
            var p = d.getLayout(),
              g = d.getModel(),
              y = g.get('localX'),
              m = g.get('localY'),
              x = g.getModel('emphasis'),
              S = new Tt({
                shape: {
                  x: y != null ? y * u : p.x,
                  y: m != null ? m * h : p.y,
                  width: p.dx,
                  height: p.dy,
                },
                style: g.getModel('itemStyle').getItemStyle(),
                z2: 10,
              });
            Jt(S, Nt(g), { labelFetcher: t, labelDataIndex: d.dataIndex, defaultText: d.id }),
              (S.disableLabelAnimation = !0),
              S.setStyle('fill', d.getVisual('color')),
              S.setStyle('decal', d.getVisual('style').decal),
              It(S, g),
              s.add(S),
              v.setItemGraphicEl(d.dataIndex, S),
              (lt(S).dataType = 'node');
            var b = x.get('focus');
            ft(
              S,
              b === 'adjacency' ? d.getAdjacentDataIndices() : b,
              x.get('blurScope'),
              x.get('disabled'),
            );
          }),
          v.eachItemGraphicEl(function (d, p) {
            var g = v.getItemModel(p);
            g.get('draggable') &&
              ((d.drift = function (y, m) {
                (i._focusAdjacencyDisabled = !0),
                  (this.shape.x += y),
                  (this.shape.y += m),
                  this.dirty(),
                  n.dispatchAction({
                    type: 'dragNode',
                    seriesId: t.id,
                    dataIndex: v.getRawIndex(p),
                    localX: this.shape.x / u,
                    localY: this.shape.y / h,
                  });
              }),
              (d.ondragend = function () {
                i._focusAdjacencyDisabled = !1;
              }),
              (d.draggable = !0),
              (d.cursor = 'move'));
          }),
          !this._data &&
            t.isAnimationEnabled() &&
            s.setClipPath(
              p0(s.getBoundingRect(), t, function () {
                s.removeClipPath();
              }),
            ),
          (this._data = t.getData());
      }),
      (e.prototype.dispose = function () {}),
      (e.type = 'sankey'),
      e
    );
  })(dt);
function p0(a, e, t) {
  var r = new Tt({ shape: { x: a.x - 10, y: a.y - 10, width: 0, height: a.height + 20 } });
  return Qt(r, { shape: { width: a.width + 20 } }, e, t), r;
}
const g0 = d0;
var y0 = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      var n = t.edges || t.links,
        i = t.data || t.nodes,
        o = t.levels;
      this.levelModels = [];
      for (var s = this.levelModels, l = 0; l < o.length; l++)
        o[l].depth != null && o[l].depth >= 0 && (s[o[l].depth] = new qt(o[l], this, r));
      if (i && n) {
        var u = wu(i, n, this, !0, h);
        return u.data;
      }
      function h(v, c) {
        v.wrapMethod('getItemModel', function (f, d) {
          var p = f.parentModel,
            g = p.getData().getItemLayout(d);
          if (g) {
            var y = g.depth,
              m = p.levelModels[y];
            m && (f.parentModel = m);
          }
          return f;
        }),
          c.wrapMethod('getItemModel', function (f, d) {
            var p = f.parentModel,
              g = p.getGraph().getEdgeByIndex(d),
              y = g.node1.getLayout();
            if (y) {
              var m = y.depth,
                x = p.levelModels[m];
              x && (f.parentModel = x);
            }
            return f;
          });
      }
    }),
    (e.prototype.setNodePosition = function (t, r) {
      var n = this.option.data || this.option.nodes,
        i = n[t];
      (i.localX = r[0]), (i.localY = r[1]);
    }),
    (e.prototype.getGraph = function () {
      return this.getData().graph;
    }),
    (e.prototype.getEdgeData = function () {
      return this.getGraph().edgeData;
    }),
    (e.prototype.formatTooltip = function (t, r, n) {
      function i(f) {
        return isNaN(f) || f == null;
      }
      if (n === 'edge') {
        var o = this.getDataParams(t, n),
          s = o.data,
          l = o.value,
          u = s.source + ' -- ' + s.target;
        return kt('nameValue', { name: u, value: l, noValue: i(l) });
      } else {
        var h = this.getGraph().getNodeByIndex(t),
          v = h.getLayout().value,
          c = this.getDataParams(t, n).data.name;
        return kt('nameValue', { name: c != null ? c + '' : null, value: v, noValue: i(v) });
      }
    }),
    (e.prototype.optionUpdated = function () {}),
    (e.prototype.getDataParams = function (t, r) {
      var n = a.prototype.getDataParams.call(this, t, r);
      if (n.value == null && r === 'node') {
        var i = this.getGraph().getNodeByIndex(t),
          o = i.getLayout().value;
        n.value = o;
      }
      return n;
    }),
    (e.type = 'series.sankey'),
    (e.defaultOption = {
      z: 2,
      coordinateSystem: 'view',
      left: '5%',
      top: '5%',
      right: '20%',
      bottom: '5%',
      orient: 'horizontal',
      nodeWidth: 20,
      nodeGap: 8,
      draggable: !0,
      layoutIterations: 32,
      label: { show: !0, position: 'right', fontSize: 12 },
      edgeLabel: { show: !1, fontSize: 12 },
      levels: [],
      nodeAlign: 'justify',
      lineStyle: { color: '#314656', opacity: 0.2, curveness: 0.5 },
      emphasis: { label: { show: !0 }, lineStyle: { opacity: 0.5 } },
      select: { itemStyle: { borderColor: '#212121' } },
      animationEasing: 'linear',
      animationDuration: 1e3,
    }),
    e
  );
})(mt);
const m0 = y0;
function x0(a, e) {
  a.eachSeriesByType('sankey', function (t) {
    var r = t.get('nodeWidth'),
      n = t.get('nodeGap'),
      i = S0(t, e);
    t.layoutInfo = i;
    var o = i.width,
      s = i.height,
      l = t.getGraph(),
      u = l.nodes,
      h = l.edges;
    w0(u);
    var v = Ft(u, function (p) {
        return p.getLayout().value === 0;
      }),
      c = v.length !== 0 ? 0 : t.get('layoutIterations'),
      f = t.get('orient'),
      d = t.get('nodeAlign');
    b0(u, h, r, n, o, s, c, f, d);
  });
}
function S0(a, e) {
  return re(a.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
}
function b0(a, e, t, r, n, i, o, s, l) {
  _0(a, e, t, n, i, s, l), C0(a, e, i, n, r, o, s), V0(a, s);
}
function w0(a) {
  I(a, function (e) {
    var t = ce(e.outEdges, Xa),
      r = ce(e.inEdges, Xa),
      n = e.getValue() || 0,
      i = Math.max(t, r, n);
    e.setLayout({ value: i }, !0);
  });
}
function _0(a, e, t, r, n, i, o) {
  for (var s = [], l = [], u = [], h = [], v = 0, c = 0; c < e.length; c++) s[c] = 1;
  for (var c = 0; c < a.length; c++) (l[c] = a[c].inEdges.length), l[c] === 0 && u.push(a[c]);
  for (var f = -1; u.length; ) {
    for (var d = 0; d < u.length; d++) {
      var p = u[d],
        g = p.hostGraph.data.getRawDataItem(p.dataIndex),
        y = g.depth != null && g.depth >= 0;
      y && g.depth > f && (f = g.depth),
        p.setLayout({ depth: y ? g.depth : v }, !0),
        i === 'vertical' ? p.setLayout({ dy: t }, !0) : p.setLayout({ dx: t }, !0);
      for (var m = 0; m < p.outEdges.length; m++) {
        var x = p.outEdges[m],
          S = e.indexOf(x);
        s[S] = 0;
        var b = x.node2,
          w = a.indexOf(b);
        --l[w] === 0 && h.indexOf(b) < 0 && h.push(b);
      }
    }
    ++v, (u = h), (h = []);
  }
  for (var c = 0; c < s.length; c++)
    if (s[c] === 1) throw new Error('Sankey is a DAG, the original data has cycle!');
  var _ = f > v - 1 ? f : v - 1;
  o && o !== 'left' && A0(a, o, i, _);
  var A = i === 'vertical' ? (n - t) / _ : (r - t) / _;
  T0(a, A, i);
}
function Au(a) {
  var e = a.hostGraph.data.getRawDataItem(a.dataIndex);
  return e.depth != null && e.depth >= 0;
}
function A0(a, e, t, r) {
  if (e === 'right') {
    for (var n = [], i = a, o = 0; i.length; ) {
      for (var s = 0; s < i.length; s++) {
        var l = i[s];
        l.setLayout({ skNodeHeight: o }, !0);
        for (var u = 0; u < l.inEdges.length; u++) {
          var h = l.inEdges[u];
          n.indexOf(h.node1) < 0 && n.push(h.node1);
        }
      }
      (i = n), (n = []), ++o;
    }
    I(a, function (v) {
      Au(v) || v.setLayout({ depth: Math.max(0, r - v.getLayout().skNodeHeight) }, !0);
    });
  } else e === 'justify' && D0(a, r);
}
function D0(a, e) {
  I(a, function (t) {
    !Au(t) && !t.outEdges.length && t.setLayout({ depth: e }, !0);
  });
}
function T0(a, e, t) {
  I(a, function (r) {
    var n = r.getLayout().depth * e;
    t === 'vertical' ? r.setLayout({ y: n }, !0) : r.setLayout({ x: n }, !0);
  });
}
function C0(a, e, t, r, n, i, o) {
  var s = M0(a, o);
  L0(s, e, t, r, n, o), Jr(s, n, t, r, o);
  for (var l = 1; i > 0; i--)
    (l *= 0.99), I0(s, l, o), Jr(s, n, t, r, o), N0(s, l, o), Jr(s, n, t, r, o);
}
function M0(a, e) {
  var t = [],
    r = e === 'vertical' ? 'y' : 'x',
    n = bn(a, function (i) {
      return i.getLayout()[r];
    });
  return (
    n.keys.sort(function (i, o) {
      return i - o;
    }),
    I(n.keys, function (i) {
      t.push(n.buckets.get(i));
    }),
    t
  );
}
function L0(a, e, t, r, n, i) {
  var o = 1 / 0;
  I(a, function (s) {
    var l = s.length,
      u = 0;
    I(s, function (v) {
      u += v.getLayout().value;
    });
    var h = i === 'vertical' ? (r - (l - 1) * n) / u : (t - (l - 1) * n) / u;
    h < o && (o = h);
  }),
    I(a, function (s) {
      I(s, function (l, u) {
        var h = l.getLayout().value * o;
        i === 'vertical'
          ? (l.setLayout({ x: u }, !0), l.setLayout({ dx: h }, !0))
          : (l.setLayout({ y: u }, !0), l.setLayout({ dy: h }, !0));
      });
    }),
    I(e, function (s) {
      var l = +s.getValue() * o;
      s.setLayout({ dy: l }, !0);
    });
}
function Jr(a, e, t, r, n) {
  var i = n === 'vertical' ? 'x' : 'y';
  I(a, function (o) {
    o.sort(function (p, g) {
      return p.getLayout()[i] - g.getLayout()[i];
    });
    for (var s, l, u, h = 0, v = o.length, c = n === 'vertical' ? 'dx' : 'dy', f = 0; f < v; f++)
      (l = o[f]),
        (u = h - l.getLayout()[i]),
        u > 0 &&
          ((s = l.getLayout()[i] + u),
          n === 'vertical' ? l.setLayout({ x: s }, !0) : l.setLayout({ y: s }, !0)),
        (h = l.getLayout()[i] + l.getLayout()[c] + e);
    var d = n === 'vertical' ? r : t;
    if (((u = h - e - d), u > 0)) {
      (s = l.getLayout()[i] - u),
        n === 'vertical' ? l.setLayout({ x: s }, !0) : l.setLayout({ y: s }, !0),
        (h = s);
      for (var f = v - 2; f >= 0; --f)
        (l = o[f]),
          (u = l.getLayout()[i] + l.getLayout()[c] + e - h),
          u > 0 &&
            ((s = l.getLayout()[i] - u),
            n === 'vertical' ? l.setLayout({ x: s }, !0) : l.setLayout({ y: s }, !0)),
          (h = l.getLayout()[i]);
    }
  });
}
function I0(a, e, t) {
  I(a.slice().reverse(), function (r) {
    I(r, function (n) {
      if (n.outEdges.length) {
        var i = ce(n.outEdges, P0, t) / ce(n.outEdges, Xa);
        if (isNaN(i)) {
          var o = n.outEdges.length;
          i = o ? ce(n.outEdges, E0, t) / o : 0;
        }
        if (t === 'vertical') {
          var s = n.getLayout().x + (i - pe(n, t)) * e;
          n.setLayout({ x: s }, !0);
        } else {
          var l = n.getLayout().y + (i - pe(n, t)) * e;
          n.setLayout({ y: l }, !0);
        }
      }
    });
  });
}
function P0(a, e) {
  return pe(a.node2, e) * a.getValue();
}
function E0(a, e) {
  return pe(a.node2, e);
}
function R0(a, e) {
  return pe(a.node1, e) * a.getValue();
}
function k0(a, e) {
  return pe(a.node1, e);
}
function pe(a, e) {
  return e === 'vertical'
    ? a.getLayout().x + a.getLayout().dx / 2
    : a.getLayout().y + a.getLayout().dy / 2;
}
function Xa(a) {
  return a.getValue();
}
function ce(a, e, t) {
  for (var r = 0, n = a.length, i = -1; ++i < n; ) {
    var o = +e(a[i], t);
    isNaN(o) || (r += o);
  }
  return r;
}
function N0(a, e, t) {
  I(a, function (r) {
    I(r, function (n) {
      if (n.inEdges.length) {
        var i = ce(n.inEdges, R0, t) / ce(n.inEdges, Xa);
        if (isNaN(i)) {
          var o = n.inEdges.length;
          i = o ? ce(n.inEdges, k0, t) / o : 0;
        }
        if (t === 'vertical') {
          var s = n.getLayout().x + (i - pe(n, t)) * e;
          n.setLayout({ x: s }, !0);
        } else {
          var l = n.getLayout().y + (i - pe(n, t)) * e;
          n.setLayout({ y: l }, !0);
        }
      }
    });
  });
}
function V0(a, e) {
  var t = e === 'vertical' ? 'x' : 'y';
  I(a, function (r) {
    r.outEdges.sort(function (n, i) {
      return n.node2.getLayout()[t] - i.node2.getLayout()[t];
    }),
      r.inEdges.sort(function (n, i) {
        return n.node1.getLayout()[t] - i.node1.getLayout()[t];
      });
  }),
    I(a, function (r) {
      var n = 0,
        i = 0;
      I(r.outEdges, function (o) {
        o.setLayout({ sy: n }, !0), (n += o.getLayout().dy);
      }),
        I(r.inEdges, function (o) {
          o.setLayout({ ty: i }, !0), (i += o.getLayout().dy);
        });
    });
}
function B0(a) {
  a.eachSeriesByType('sankey', function (e) {
    var t = e.getGraph(),
      r = t.nodes,
      n = t.edges;
    if (r.length) {
      var i = 1 / 0,
        o = -1 / 0;
      I(r, function (s) {
        var l = s.getLayout().value;
        l < i && (i = l), l > o && (o = l);
      }),
        I(r, function (s) {
          var l = new Al({
              type: 'color',
              mappingMethod: 'linear',
              dataExtent: [i, o],
              visual: e.get('color'),
            }),
            u = l.mapValueToVisual(s.getLayout().value),
            h = s.getModel().get(['itemStyle', 'color']);
          h != null
            ? (s.setVisual('color', h), s.setVisual('style', { fill: h }))
            : (s.setVisual('color', u), s.setVisual('style', { fill: u }));
        });
    }
    n.length &&
      I(n, function (s) {
        var l = s.getModel().get('lineStyle');
        s.setVisual('style', l);
      });
  });
}
function z0(a) {
  a.registerChartView(g0),
    a.registerSeriesModel(m0),
    a.registerLayout(x0),
    a.registerVisual(B0),
    a.registerAction({ type: 'dragNode', event: 'dragnode', update: 'update' }, function (e, t) {
      t.eachComponent({ mainType: 'series', subType: 'sankey', query: e }, function (r) {
        r.setNodePosition(e.dataIndex, [e.localX, e.localY]);
      });
    });
}
var Du = (function () {
    function a() {}
    return (
      (a.prototype.getInitialData = function (e, t) {
        var r,
          n = t.getComponent('xAxis', this.get('xAxisIndex')),
          i = t.getComponent('yAxis', this.get('yAxisIndex')),
          o = n.get('type'),
          s = i.get('type'),
          l;
        o === 'category'
          ? ((e.layout = 'horizontal'), (r = n.getOrdinalMeta()), (l = !0))
          : s === 'category'
          ? ((e.layout = 'vertical'), (r = i.getOrdinalMeta()), (l = !0))
          : (e.layout = e.layout || 'horizontal');
        var u = ['x', 'y'],
          h = e.layout === 'horizontal' ? 0 : 1,
          v = (this._baseAxisDim = u[h]),
          c = u[1 - h],
          f = [n, i],
          d = f[h].get('type'),
          p = f[1 - h].get('type'),
          g = e.data;
        if (g && l) {
          var y = [];
          I(g, function (S, b) {
            var w;
            H(S)
              ? ((w = S.slice()), S.unshift(b))
              : H(S.value)
              ? ((w = W({}, S)), (w.value = w.value.slice()), S.value.unshift(b))
              : (w = S),
              y.push(w);
          }),
            (e.data = y);
        }
        var m = this.defaultValueDimensions,
          x = [
            {
              name: v,
              type: wn(d),
              ordinalMeta: r,
              otherDims: { tooltip: !1, itemName: 0 },
              dimsDef: ['base'],
            },
            { name: c, type: wn(p), dimsDef: m.slice() },
          ];
        return cr(this, {
          coordDimensions: x,
          dimensionsCount: m.length + 1,
          encodeDefaulter: it(Cv, x, this),
        });
      }),
      (a.prototype.getBaseAxis = function () {
        var e = this._baseAxisDim;
        return this.ecModel.getComponent(e + 'Axis', this.get(e + 'AxisIndex')).axis;
      }),
      a
    );
  })(),
  Tu = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (
        (t.type = e.type),
        (t.defaultValueDimensions = [
          { name: 'min', defaultTooltip: !0 },
          { name: 'Q1', defaultTooltip: !0 },
          { name: 'median', defaultTooltip: !0 },
          { name: 'Q3', defaultTooltip: !0 },
          { name: 'max', defaultTooltip: !0 },
        ]),
        (t.visualDrawType = 'stroke'),
        t
      );
    }
    return (
      (e.type = 'series.boxplot'),
      (e.dependencies = ['xAxis', 'yAxis', 'grid']),
      (e.defaultOption = {
        z: 2,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: !0,
        layout: null,
        boxWidth: [7, 50],
        itemStyle: { color: '#fff', borderWidth: 1 },
        emphasis: {
          scale: !0,
          itemStyle: {
            borderWidth: 2,
            shadowBlur: 5,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowColor: 'rgba(0,0,0,0.2)',
          },
        },
        animationDuration: 800,
      }),
      e
    );
  })(mt);
te(Tu, Du, !0);
const G0 = Tu;
var O0 = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.render = function (t, r, n) {
        var i = t.getData(),
          o = this.group,
          s = this._data;
        this._data || o.removeAll();
        var l = t.get('layout') === 'horizontal' ? 1 : 0;
        i
          .diff(s)
          .add(function (u) {
            if (i.hasValue(u)) {
              var h = i.getItemLayout(u),
                v = cs(h, i, u, l, !0);
              i.setItemGraphicEl(u, v), o.add(v);
            }
          })
          .update(function (u, h) {
            var v = s.getItemGraphicEl(h);
            if (!i.hasValue(u)) {
              o.remove(v);
              return;
            }
            var c = i.getItemLayout(u);
            v ? (fe(v), Cu(c, v, i, u)) : (v = cs(c, i, u, l)), o.add(v), i.setItemGraphicEl(u, v);
          })
          .remove(function (u) {
            var h = s.getItemGraphicEl(u);
            h && o.remove(h);
          })
          .execute(),
          (this._data = i);
      }),
      (e.prototype.remove = function (t) {
        var r = this.group,
          n = this._data;
        (this._data = null),
          n &&
            n.eachItemGraphicEl(function (i) {
              i && r.remove(i);
            });
      }),
      (e.type = 'boxplot'),
      e
    );
  })(dt),
  W0 = (function () {
    function a() {}
    return a;
  })(),
  $0 = (function (a) {
    k(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return (r.type = 'boxplotBoxPath'), r;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new W0();
      }),
      (e.prototype.buildPath = function (t, r) {
        var n = r.points,
          i = 0;
        for (t.moveTo(n[i][0], n[i][1]), i++; i < 4; i++) t.lineTo(n[i][0], n[i][1]);
        for (t.closePath(); i < n.length; i++)
          t.moveTo(n[i][0], n[i][1]), i++, t.lineTo(n[i][0], n[i][1]);
      }),
      e
    );
  })(Vt);
function cs(a, e, t, r, n) {
  var i = a.ends,
    o = new $0({ shape: { points: n ? F0(i, r, a) : i } });
  return Cu(a, o, e, t, n), o;
}
function Cu(a, e, t, r, n) {
  var i = t.hostModel,
    o = hr[n ? 'initProps' : 'updateProps'];
  o(e, { shape: { points: a.ends } }, i, r),
    e.useStyle(t.getItemVisual(r, 'style')),
    (e.style.strokeNoScale = !0),
    (e.z2 = 100);
  var s = t.getItemModel(r),
    l = s.getModel('emphasis');
  It(e, s), ft(e, l.get('focus'), l.get('blurScope'), l.get('disabled'));
}
function F0(a, e, t) {
  return O(a, function (r) {
    return (r = r.slice()), (r[e] = t.initBaseline), r;
  });
}
const H0 = O0;
var Je = I;
function Z0(a) {
  var e = U0(a);
  Je(e, function (t) {
    var r = t.seriesModels;
    r.length &&
      (Y0(t),
      Je(r, function (n, i) {
        X0(n, t.boxOffsetList[i], t.boxWidthList[i]);
      }));
  });
}
function U0(a) {
  var e = [],
    t = [];
  return (
    a.eachSeriesByType('boxplot', function (r) {
      var n = r.getBaseAxis(),
        i = Ct(t, n);
      i < 0 && ((i = t.length), (t[i] = n), (e[i] = { axis: n, seriesModels: [] })),
        e[i].seriesModels.push(r);
    }),
    e
  );
}
function Y0(a) {
  var e = a.axis,
    t = a.seriesModels,
    r = t.length,
    n = (a.boxWidthList = []),
    i = (a.boxOffsetList = []),
    o = [],
    s;
  if (e.type === 'category') s = e.getBandWidth();
  else {
    var l = 0;
    Je(t, function (d) {
      l = Math.max(l, d.getData().count());
    });
    var u = e.getExtent();
    s = Math.abs(u[1] - u[0]) / l;
  }
  Je(t, function (d) {
    var p = d.get('boxWidth');
    H(p) || (p = [p, p]), o.push([z(p[0], s) || 0, z(p[1], s) || 0]);
  });
  var h = s * 0.8 - 2,
    v = (h / r) * 0.3,
    c = (h - v * (r - 1)) / r,
    f = c / 2 - h / 2;
  Je(t, function (d, p) {
    i.push(f), (f += v + c), n.push(Math.min(Math.max(c, o[p][0]), o[p][1]));
  });
}
function X0(a, e, t) {
  var r = a.coordinateSystem,
    n = a.getData(),
    i = t / 2,
    o = a.get('layout') === 'horizontal' ? 0 : 1,
    s = 1 - o,
    l = ['x', 'y'],
    u = n.mapDimension(l[o]),
    h = n.mapDimensionsAll(l[s]);
  if (u == null || h.length < 5) return;
  for (var v = 0; v < n.count(); v++) {
    var c = n.get(u, v),
      f = x(c, h[2], v),
      d = x(c, h[0], v),
      p = x(c, h[1], v),
      g = x(c, h[3], v),
      y = x(c, h[4], v),
      m = [];
    S(m, p, !1),
      S(m, g, !0),
      m.push(d, p, y, g),
      b(m, d),
      b(m, y),
      b(m, f),
      n.setItemLayout(v, { initBaseline: f[s], ends: m });
  }
  function x(w, _, A) {
    var C = n.get(_, A),
      D = [];
    (D[o] = w), (D[s] = C);
    var T;
    return isNaN(w) || isNaN(C) ? (T = [NaN, NaN]) : ((T = r.dataToPoint(D)), (T[o] += e)), T;
  }
  function S(w, _, A) {
    var C = _.slice(),
      D = _.slice();
    (C[o] += i), (D[o] -= i), A ? w.push(C, D) : w.push(D, C);
  }
  function b(w, _) {
    var A = _.slice(),
      C = _.slice();
    (A[o] -= i), (C[o] += i), w.push(A, C);
  }
}
function q0(a, e) {
  e = e || {};
  for (var t = [], r = [], n = e.boundIQR, i = n === 'none' || n === 0, o = 0; o < a.length; o++) {
    var s = ne(a[o].slice()),
      l = wr(s, 0.25),
      u = wr(s, 0.5),
      h = wr(s, 0.75),
      v = s[0],
      c = s[s.length - 1],
      f = (n == null ? 1.5 : n) * (h - l),
      d = i ? v : Math.max(v, l - f),
      p = i ? c : Math.min(c, h + f),
      g = e.itemNameFormatter,
      y = st(g) ? g({ value: o }) : tt(g) ? g.replace('{value}', o + '') : o + '';
    t.push([y, d, l, u, h, p]);
    for (var m = 0; m < s.length; m++) {
      var x = s[m];
      if (x < d || x > p) {
        var S = [y, x];
        r.push(S);
      }
    }
  }
  return { boxData: t, outliers: r };
}
var K0 = {
  type: 'echarts:boxplot',
  transform: function (e) {
    var t = e.upstream;
    if (t.sourceFormat !== pl) {
      var r = '';
      ut(r);
    }
    var n = q0(t.getRawData(), e.config);
    return [
      { dimensions: ['ItemName', 'Low', 'Q1', 'Q2', 'Q3', 'High'], data: n.boxData },
      { data: n.outliers },
    ];
  },
};
function j0(a) {
  a.registerSeriesModel(G0), a.registerChartView(H0), a.registerLayout(Z0), a.registerTransform(K0);
}
var Q0 = ['color', 'borderColor'],
  J0 = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.render = function (t, r, n) {
        this.group.removeClipPath(),
          (this._progressiveEls = null),
          this._updateDrawMode(t),
          this._isLargeDraw ? this._renderLarge(t) : this._renderNormal(t);
      }),
      (e.prototype.incrementalPrepareRender = function (t, r, n) {
        this._clear(), this._updateDrawMode(t);
      }),
      (e.prototype.incrementalRender = function (t, r, n, i) {
        (this._progressiveEls = []),
          this._isLargeDraw
            ? this._incrementalRenderLarge(t, r)
            : this._incrementalRenderNormal(t, r);
      }),
      (e.prototype.eachRendered = function (t) {
        or(this._progressiveEls || this.group, t);
      }),
      (e.prototype._updateDrawMode = function (t) {
        var r = t.pipelineContext.large;
        (this._isLargeDraw == null || r !== this._isLargeDraw) &&
          ((this._isLargeDraw = r), this._clear());
      }),
      (e.prototype._renderNormal = function (t) {
        var r = t.getData(),
          n = this._data,
          i = this.group,
          o = r.getLayout('isSimpleBox'),
          s = t.get('clip', !0),
          l = t.coordinateSystem,
          u = l.getArea && l.getArea();
        this._data || i.removeAll(),
          r
            .diff(n)
            .add(function (h) {
              if (r.hasValue(h)) {
                var v = r.getItemLayout(h);
                if (s && fs(u, v)) return;
                var c = tn(v, h, !0);
                Qt(c, { shape: { points: v.ends } }, t, h),
                  en(c, r, h, o),
                  i.add(c),
                  r.setItemGraphicEl(h, c);
              }
            })
            .update(function (h, v) {
              var c = n.getItemGraphicEl(v);
              if (!r.hasValue(h)) {
                i.remove(c);
                return;
              }
              var f = r.getItemLayout(h);
              if (s && fs(u, f)) {
                i.remove(c);
                return;
              }
              c ? (ht(c, { shape: { points: f.ends } }, t, h), fe(c)) : (c = tn(f)),
                en(c, r, h, o),
                i.add(c),
                r.setItemGraphicEl(h, c);
            })
            .remove(function (h) {
              var v = n.getItemGraphicEl(h);
              v && i.remove(v);
            })
            .execute(),
          (this._data = r);
      }),
      (e.prototype._renderLarge = function (t) {
        this._clear(), ds(t, this.group);
        var r = t.get('clip', !0) ? Kn(t.coordinateSystem, !1, t) : null;
        r ? this.group.setClipPath(r) : this.group.removeClipPath();
      }),
      (e.prototype._incrementalRenderNormal = function (t, r) {
        for (var n = r.getData(), i = n.getLayout('isSimpleBox'), o; (o = t.next()) != null; ) {
          var s = n.getItemLayout(o),
            l = tn(s);
          en(l, n, o, i), (l.incremental = !0), this.group.add(l), this._progressiveEls.push(l);
        }
      }),
      (e.prototype._incrementalRenderLarge = function (t, r) {
        ds(r, this.group, this._progressiveEls, !0);
      }),
      (e.prototype.remove = function (t) {
        this._clear();
      }),
      (e.prototype._clear = function () {
        this.group.removeAll(), (this._data = null);
      }),
      (e.type = 'candlestick'),
      e
    );
  })(dt),
  t1 = (function () {
    function a() {}
    return a;
  })(),
  e1 = (function (a) {
    k(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return (r.type = 'normalCandlestickBox'), r;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new t1();
      }),
      (e.prototype.buildPath = function (t, r) {
        var n = r.points;
        this.__simpleBox
          ? (t.moveTo(n[4][0], n[4][1]), t.lineTo(n[6][0], n[6][1]))
          : (t.moveTo(n[0][0], n[0][1]),
            t.lineTo(n[1][0], n[1][1]),
            t.lineTo(n[2][0], n[2][1]),
            t.lineTo(n[3][0], n[3][1]),
            t.closePath(),
            t.moveTo(n[4][0], n[4][1]),
            t.lineTo(n[5][0], n[5][1]),
            t.moveTo(n[6][0], n[6][1]),
            t.lineTo(n[7][0], n[7][1]));
      }),
      e
    );
  })(Vt);
function tn(a, e, t) {
  var r = a.ends;
  return new e1({ shape: { points: t ? a1(r, a) : r }, z2: 100 });
}
function fs(a, e) {
  for (var t = !0, r = 0; r < e.ends.length; r++)
    if (a.contain(e.ends[r][0], e.ends[r][1])) {
      t = !1;
      break;
    }
  return t;
}
function en(a, e, t, r) {
  var n = e.getItemModel(t);
  a.useStyle(e.getItemVisual(t, 'style')),
    (a.style.strokeNoScale = !0),
    (a.__simpleBox = r),
    It(a, n);
}
function a1(a, e) {
  return O(a, function (t) {
    return (t = t.slice()), (t[1] = e.initBaseline), t;
  });
}
var r1 = (function () {
    function a() {}
    return a;
  })(),
  an = (function (a) {
    k(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return (r.type = 'largeCandlestickBox'), r;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new r1();
      }),
      (e.prototype.buildPath = function (t, r) {
        for (var n = r.points, i = 0; i < n.length; )
          if (this.__sign === n[i++]) {
            var o = n[i++];
            t.moveTo(o, n[i++]), t.lineTo(o, n[i++]);
          } else i += 3;
      }),
      e
    );
  })(Vt);
function ds(a, e, t, r) {
  var n = a.getData(),
    i = n.getLayout('largePoints'),
    o = new an({ shape: { points: i }, __sign: 1, ignoreCoarsePointer: !0 });
  e.add(o);
  var s = new an({ shape: { points: i }, __sign: -1, ignoreCoarsePointer: !0 });
  e.add(s);
  var l = new an({ shape: { points: i }, __sign: 0, ignoreCoarsePointer: !0 });
  e.add(l),
    rn(1, o, a),
    rn(-1, s, a),
    rn(0, l, a),
    r && ((o.incremental = !0), (s.incremental = !0)),
    t && t.push(o, s);
}
function rn(a, e, t, r) {
  var n =
    t.get(['itemStyle', a > 0 ? 'borderColor' : 'borderColor0']) ||
    t.get(['itemStyle', a > 0 ? 'color' : 'color0']);
  a === 0 && (n = t.get(['itemStyle', 'borderColorDoji']));
  var i = t.getModel('itemStyle').getItemStyle(Q0);
  e.useStyle(i), (e.style.fill = null), (e.style.stroke = n);
}
const n1 = J0;
var Mu = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (
      (t.type = e.type),
      (t.defaultValueDimensions = [
        { name: 'open', defaultTooltip: !0 },
        { name: 'close', defaultTooltip: !0 },
        { name: 'lowest', defaultTooltip: !0 },
        { name: 'highest', defaultTooltip: !0 },
      ]),
      t
    );
  }
  return (
    (e.prototype.getShadowDim = function () {
      return 'open';
    }),
    (e.prototype.brushSelector = function (t, r, n) {
      var i = r.getItemLayout(t);
      return i && n.rect(i.brushRect);
    }),
    (e.type = 'series.candlestick'),
    (e.dependencies = ['xAxis', 'yAxis', 'grid']),
    (e.defaultOption = {
      z: 2,
      coordinateSystem: 'cartesian2d',
      legendHoverLink: !0,
      layout: null,
      clip: !0,
      itemStyle: {
        color: '#eb5454',
        color0: '#47b262',
        borderColor: '#eb5454',
        borderColor0: '#47b262',
        borderColorDoji: null,
        borderWidth: 1,
      },
      emphasis: { scale: !0, itemStyle: { borderWidth: 2 } },
      barMaxWidth: null,
      barMinWidth: null,
      barWidth: null,
      large: !0,
      largeThreshold: 600,
      progressive: 3e3,
      progressiveThreshold: 1e4,
      progressiveChunkMode: 'mod',
      animationEasing: 'linear',
      animationDuration: 300,
    }),
    e
  );
})(mt);
te(Mu, Du, !0);
const i1 = Mu;
function o1(a) {
  !a ||
    !H(a.series) ||
    I(a.series, function (e) {
      Le(e) && e.type === 'k' && (e.type = 'candlestick');
    });
}
var s1 = ['itemStyle', 'borderColor'],
  l1 = ['itemStyle', 'borderColor0'],
  u1 = ['itemStyle', 'borderColorDoji'],
  h1 = ['itemStyle', 'color'],
  v1 = ['itemStyle', 'color0'],
  c1 = {
    seriesType: 'candlestick',
    plan: jn(),
    performRawSeries: !0,
    reset: function (a, e) {
      function t(i, o) {
        return o.get(i > 0 ? h1 : v1);
      }
      function r(i, o) {
        return o.get(i === 0 ? u1 : i > 0 ? s1 : l1);
      }
      if (!e.isSeriesFiltered(a)) {
        var n = a.pipelineContext.large;
        return (
          !n && {
            progress: function (i, o) {
              for (var s; (s = i.next()) != null; ) {
                var l = o.getItemModel(s),
                  u = o.getItemLayout(s).sign,
                  h = l.getItemStyle();
                (h.fill = t(u, l)), (h.stroke = r(u, l) || h.fill);
                var v = o.ensureUniqueItemVisual(s, 'style');
                W(v, h);
              }
            },
          }
        );
      }
    },
  };
const f1 = c1;
var d1 = {
  seriesType: 'candlestick',
  plan: jn(),
  reset: function (a) {
    var e = a.coordinateSystem,
      t = a.getData(),
      r = p1(a, t),
      n = 0,
      i = 1,
      o = ['x', 'y'],
      s = t.getDimensionIndex(t.mapDimension(o[n])),
      l = O(t.mapDimensionsAll(o[i]), t.getDimensionIndex, t),
      u = l[0],
      h = l[1],
      v = l[2],
      c = l[3];
    if ((t.setLayout({ candleWidth: r, isSimpleBox: r <= 1.3 }), s < 0 || l.length < 4)) return;
    return { progress: a.pipelineContext.large ? d : f };
    function f(p, g) {
      for (var y, m = g.getStore(); (y = p.next()) != null; ) {
        var x = m.get(s, y),
          S = m.get(u, y),
          b = m.get(h, y),
          w = m.get(v, y),
          _ = m.get(c, y),
          A = Math.min(S, b),
          C = Math.max(S, b),
          D = N(A, x),
          T = N(C, x),
          L = N(w, x),
          P = N(_, x),
          M = [];
        V(M, T, 0), V(M, D, 1), M.push($(P), $(T), $(L), $(D));
        var E = g.getItemModel(y),
          R = !!E.get(['itemStyle', 'borderColorDoji']);
        g.setItemLayout(y, {
          sign: ps(m, y, S, b, h, R),
          initBaseline: S > b ? T[i] : D[i],
          ends: M,
          brushRect: G(w, _, x),
        });
      }
      function N(F, j) {
        var Q = [];
        return (Q[n] = j), (Q[i] = F), isNaN(j) || isNaN(F) ? [NaN, NaN] : e.dataToPoint(Q);
      }
      function V(F, j, Q) {
        var X = j.slice(),
          at = j.slice();
        (X[n] = _r(X[n] + r / 2, 1, !1)),
          (at[n] = _r(at[n] - r / 2, 1, !0)),
          Q ? F.push(X, at) : F.push(at, X);
      }
      function G(F, j, Q) {
        var X = N(F, Q),
          at = N(j, Q);
        return (
          (X[n] -= r / 2), (at[n] -= r / 2), { x: X[0], y: X[1], width: r, height: at[1] - X[1] }
        );
      }
      function $(F) {
        return (F[n] = _r(F[n], 1)), F;
      }
    }
    function d(p, g) {
      for (
        var y = Mv(p.count * 4),
          m = 0,
          x,
          S = [],
          b = [],
          w,
          _ = g.getStore(),
          A = !!a.get(['itemStyle', 'borderColorDoji']);
        (w = p.next()) != null;

      ) {
        var C = _.get(s, w),
          D = _.get(u, w),
          T = _.get(h, w),
          L = _.get(v, w),
          P = _.get(c, w);
        if (isNaN(C) || isNaN(L) || isNaN(P)) {
          (y[m++] = NaN), (m += 3);
          continue;
        }
        (y[m++] = ps(_, w, D, T, h, A)),
          (S[n] = C),
          (S[i] = L),
          (x = e.dataToPoint(S, null, b)),
          (y[m++] = x ? x[0] : NaN),
          (y[m++] = x ? x[1] : NaN),
          (S[i] = P),
          (x = e.dataToPoint(S, null, b)),
          (y[m++] = x ? x[1] : NaN);
      }
      g.setLayout('largePoints', y);
    }
  },
};
function ps(a, e, t, r, n, i) {
  var o;
  return (
    t > r ? (o = -1) : t < r ? (o = 1) : (o = i ? 0 : e > 0 ? (a.get(n, e - 1) <= r ? 1 : -1) : 1),
    o
  );
}
function p1(a, e) {
  var t = a.getBaseAxis(),
    r,
    n =
      t.type === 'category'
        ? t.getBandWidth()
        : ((r = t.getExtent()), Math.abs(r[1] - r[0]) / e.count()),
    i = z(Dt(a.get('barMaxWidth'), n), n),
    o = z(Dt(a.get('barMinWidth'), 1), n),
    s = a.get('barWidth');
  return s != null ? z(s, n) : Math.max(Math.min(n / 2, i), o);
}
const g1 = d1;
function y1(a) {
  a.registerChartView(n1),
    a.registerSeriesModel(i1),
    a.registerPreprocessor(o1),
    a.registerVisual(f1),
    a.registerLayout(g1);
}
function gs(a, e) {
  var t = e.rippleEffectColor || e.color;
  a.eachChild(function (r) {
    r.attr({
      z: e.z,
      zlevel: e.zlevel,
      style: {
        stroke: e.brushType === 'stroke' ? t : null,
        fill: e.brushType === 'fill' ? t : null,
      },
    });
  });
}
var m1 = (function (a) {
  k(e, a);
  function e(t, r) {
    var n = a.call(this) || this,
      i = new Sl(t, r),
      o = new K();
    return n.add(i), n.add(o), n.updateData(t, r), n;
  }
  return (
    (e.prototype.stopEffectAnimation = function () {
      this.childAt(1).removeAll();
    }),
    (e.prototype.startEffectAnimation = function (t) {
      for (
        var r = t.symbolType, n = t.color, i = t.rippleNumber, o = this.childAt(1), s = 0;
        s < i;
        s++
      ) {
        var l = Wt(r, -1, -1, 2, 2, n);
        l.attr({ style: { strokeNoScale: !0 }, z2: 99, silent: !0, scaleX: 0.5, scaleY: 0.5 });
        var u = (-s / i) * t.period + t.effectOffset;
        l
          .animate('', !0)
          .when(t.period, { scaleX: t.rippleScale / 2, scaleY: t.rippleScale / 2 })
          .delay(u)
          .start(),
          l.animateStyle(!0).when(t.period, { opacity: 0 }).delay(u).start(),
          o.add(l);
      }
      gs(o, t);
    }),
    (e.prototype.updateEffectAnimation = function (t) {
      for (
        var r = this._effectCfg,
          n = this.childAt(1),
          i = ['symbolType', 'period', 'rippleScale', 'rippleNumber'],
          o = 0;
        o < i.length;
        o++
      ) {
        var s = i[o];
        if (r[s] !== t[s]) {
          this.stopEffectAnimation(), this.startEffectAnimation(t);
          return;
        }
      }
      gs(n, t);
    }),
    (e.prototype.highlight = function () {
      Un(this);
    }),
    (e.prototype.downplay = function () {
      Yn(this);
    }),
    (e.prototype.getSymbolType = function () {
      var t = this.childAt(0);
      return t && t.getSymbolType();
    }),
    (e.prototype.updateData = function (t, r) {
      var n = this,
        i = t.hostModel;
      this.childAt(0).updateData(t, r);
      var o = this.childAt(1),
        s = t.getItemModel(r),
        l = t.getItemVisual(r, 'symbol'),
        u = rr(t.getItemVisual(r, 'symbolSize')),
        h = t.getItemVisual(r, 'style'),
        v = h && h.fill,
        c = s.getModel('emphasis');
      o.setScale(u),
        o.traverse(function (g) {
          g.setStyle('fill', v);
        });
      var f = nr(t.getItemVisual(r, 'symbolOffset'), u);
      f && ((o.x = f[0]), (o.y = f[1]));
      var d = t.getItemVisual(r, 'symbolRotate');
      o.rotation = ((d || 0) * Math.PI) / 180 || 0;
      var p = {};
      (p.showEffectOn = i.get('showEffectOn')),
        (p.rippleScale = s.get(['rippleEffect', 'scale'])),
        (p.brushType = s.get(['rippleEffect', 'brushType'])),
        (p.period = s.get(['rippleEffect', 'period']) * 1e3),
        (p.effectOffset = r / t.count()),
        (p.z = i.getShallow('z') || 0),
        (p.zlevel = i.getShallow('zlevel') || 0),
        (p.symbolType = l),
        (p.color = v),
        (p.rippleEffectColor = s.get(['rippleEffect', 'color'])),
        (p.rippleNumber = s.get(['rippleEffect', 'number'])),
        p.showEffectOn === 'render'
          ? (this._effectCfg ? this.updateEffectAnimation(p) : this.startEffectAnimation(p),
            (this._effectCfg = p))
          : ((this._effectCfg = null),
            this.stopEffectAnimation(),
            (this.onHoverStateChange = function (g) {
              g === 'emphasis'
                ? p.showEffectOn !== 'render' && n.startEffectAnimation(p)
                : g === 'normal' && p.showEffectOn !== 'render' && n.stopEffectAnimation();
            })),
        (this._effectCfg = p),
        ft(this, c.get('focus'), c.get('blurScope'), c.get('disabled'));
    }),
    (e.prototype.fadeOut = function (t) {
      t && t();
    }),
    e
  );
})(K);
const x1 = m1;
var S1 = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function () {
      this._symbolDraw = new ir(x1);
    }),
    (e.prototype.render = function (t, r, n) {
      var i = t.getData(),
        o = this._symbolDraw;
      o.updateData(i, { clipShape: this._getClipShape(t) }), this.group.add(o.group);
    }),
    (e.prototype._getClipShape = function (t) {
      var r = t.coordinateSystem,
        n = r && r.getArea && r.getArea();
      return t.get('clip', !0) ? n : null;
    }),
    (e.prototype.updateTransform = function (t, r, n) {
      var i = t.getData();
      this.group.dirty();
      var o = ur('').reset(t, r, n);
      o.progress && o.progress({ start: 0, end: i.count(), count: i.count() }, i),
        this._symbolDraw.updateLayout();
    }),
    (e.prototype._updateGroupTransform = function (t) {
      var r = t.coordinateSystem;
      r &&
        r.getRoamTransform &&
        ((this.group.transform = Lv(r.getRoamTransform())), this.group.decomposeTransform());
    }),
    (e.prototype.remove = function (t, r) {
      this._symbolDraw && this._symbolDraw.remove(!0);
    }),
    (e.type = 'effectScatter'),
    e
  );
})(dt);
const b1 = S1;
var w1 = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.hasSymbolVisual = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      return Oe(null, this, { useEncodeDefaulter: !0 });
    }),
    (e.prototype.brushSelector = function (t, r, n) {
      return n.point(r.getItemLayout(t));
    }),
    (e.type = 'series.effectScatter'),
    (e.dependencies = ['grid', 'polar']),
    (e.defaultOption = {
      coordinateSystem: 'cartesian2d',
      z: 2,
      legendHoverLink: !0,
      effectType: 'ripple',
      progressive: 0,
      showEffectOn: 'render',
      clip: !0,
      rippleEffect: { period: 4, scale: 2.5, brushType: 'fill', number: 3 },
      universalTransition: { divideShape: 'clone' },
      symbolSize: 10,
    }),
    e
  );
})(mt);
const _1 = w1;
function A1(a) {
  a.registerChartView(b1), a.registerSeriesModel(_1), a.registerLayout(ur('effectScatter'));
}
var D1 = (function (a) {
  k(e, a);
  function e(t, r, n) {
    var i = a.call(this) || this;
    return i.add(i.createLine(t, r, n)), i._updateEffectSymbol(t, r), i;
  }
  return (
    (e.prototype.createLine = function (t, r, n) {
      return new oi(t, r, n);
    }),
    (e.prototype._updateEffectSymbol = function (t, r) {
      var n = t.getItemModel(r),
        i = n.getModel('effect'),
        o = i.get('symbolSize'),
        s = i.get('symbol');
      H(o) || (o = [o, o]);
      var l = t.getItemVisual(r, 'style'),
        u = i.get('color') || (l && l.stroke),
        h = this.childAt(1);
      this._symbolType !== s &&
        (this.remove(h),
        (h = Wt(s, -0.5, -0.5, 1, 1, u)),
        (h.z2 = 100),
        (h.culling = !0),
        this.add(h)),
        h &&
          (h.setStyle('shadowColor', u),
          h.setStyle(i.getItemStyle(['color'])),
          (h.scaleX = o[0]),
          (h.scaleY = o[1]),
          h.setColor(u),
          (this._symbolType = s),
          (this._symbolScale = o),
          this._updateEffectAnimation(t, i, r));
    }),
    (e.prototype._updateEffectAnimation = function (t, r, n) {
      var i = this.childAt(1);
      if (i) {
        var o = t.getItemLayout(n),
          s = r.get('period') * 1e3,
          l = r.get('loop'),
          u = r.get('roundTrip'),
          h = r.get('constantSpeed'),
          v = zt(r.get('delay'), function (f) {
            return ((f / t.count()) * s) / 3;
          });
        if (
          ((i.ignore = !0),
          this._updateAnimationPoints(i, o),
          h > 0 && (s = (this._getLineLength(i) / h) * 1e3),
          s !== this._period || l !== this._loop || u !== this._roundTrip)
        ) {
          i.stopAnimation();
          var c = void 0;
          st(v) ? (c = v(n)) : (c = v),
            i.__t > 0 && (c = -s * i.__t),
            this._animateSymbol(i, s, c, l, u);
        }
        (this._period = s), (this._loop = l), (this._roundTrip = u);
      }
    }),
    (e.prototype._animateSymbol = function (t, r, n, i, o) {
      if (r > 0) {
        t.__t = 0;
        var s = this,
          l = t
            .animate('', i)
            .when(o ? r * 2 : r, { __t: o ? 2 : 1 })
            .delay(n)
            .during(function () {
              s._updateSymbolPosition(t);
            });
        i ||
          l.done(function () {
            s.remove(t);
          }),
          l.start();
      }
    }),
    (e.prototype._getLineLength = function (t) {
      return Xe(t.__p1, t.__cp1) + Xe(t.__cp1, t.__p2);
    }),
    (e.prototype._updateAnimationPoints = function (t, r) {
      (t.__p1 = r[0]),
        (t.__p2 = r[1]),
        (t.__cp1 = r[2] || [(r[0][0] + r[1][0]) / 2, (r[0][1] + r[1][1]) / 2]);
    }),
    (e.prototype.updateData = function (t, r, n) {
      this.childAt(0).updateData(t, r, n), this._updateEffectSymbol(t, r);
    }),
    (e.prototype._updateSymbolPosition = function (t) {
      var r = t.__p1,
        n = t.__p2,
        i = t.__cp1,
        o = t.__t < 1 ? t.__t : 2 - t.__t,
        s = [t.x, t.y],
        l = s.slice(),
        u = Dl,
        h = Iv;
      (s[0] = u(r[0], i[0], n[0], o)), (s[1] = u(r[1], i[1], n[1], o));
      var v = t.__t < 1 ? h(r[0], i[0], n[0], o) : h(n[0], i[0], r[0], 1 - o),
        c = t.__t < 1 ? h(r[1], i[1], n[1], o) : h(n[1], i[1], r[1], 1 - o);
      (t.rotation = -Math.atan2(c, v) - Math.PI / 2),
        (this._symbolType === 'line' ||
          this._symbolType === 'rect' ||
          this._symbolType === 'roundRect') &&
          (t.__lastT !== void 0 && t.__lastT < t.__t
            ? ((t.scaleY = Xe(l, s) * 1.05),
              o === 1 && ((s[0] = l[0] + (s[0] - l[0]) / 2), (s[1] = l[1] + (s[1] - l[1]) / 2)))
            : t.__lastT === 1
            ? (t.scaleY = 2 * Xe(r, s))
            : (t.scaleY = this._symbolScale[1])),
        (t.__lastT = t.__t),
        (t.ignore = !1),
        (t.x = s[0]),
        (t.y = s[1]);
    }),
    (e.prototype.updateLayout = function (t, r) {
      this.childAt(0).updateLayout(t, r);
      var n = t.getItemModel(r).getModel('effect');
      this._updateEffectAnimation(t, n, r);
    }),
    e
  );
})(K);
const Lu = D1;
var T1 = (function (a) {
  k(e, a);
  function e(t, r, n) {
    var i = a.call(this) || this;
    return i._createPolyline(t, r, n), i;
  }
  return (
    (e.prototype._createPolyline = function (t, r, n) {
      var i = t.getItemLayout(r),
        o = new Ie({ shape: { points: i } });
      this.add(o), this._updateCommonStl(t, r, n);
    }),
    (e.prototype.updateData = function (t, r, n) {
      var i = t.hostModel,
        o = this.childAt(0),
        s = { shape: { points: t.getItemLayout(r) } };
      ht(o, s, i, r), this._updateCommonStl(t, r, n);
    }),
    (e.prototype._updateCommonStl = function (t, r, n) {
      var i = this.childAt(0),
        o = t.getItemModel(r),
        s = n && n.emphasisLineStyle,
        l = n && n.focus,
        u = n && n.blurScope,
        h = n && n.emphasisDisabled;
      if (!n || t.hasItemOption) {
        var v = o.getModel('emphasis');
        (s = v.getModel('lineStyle').getLineStyle()),
          (h = v.get('disabled')),
          (l = v.get('focus')),
          (u = v.get('blurScope'));
      }
      i.useStyle(t.getItemVisual(r, 'style')), (i.style.fill = null), (i.style.strokeNoScale = !0);
      var c = i.ensureState('emphasis');
      (c.style = s), ft(this, l, u, h);
    }),
    (e.prototype.updateLayout = function (t, r) {
      var n = this.childAt(0);
      n.setShape('points', t.getItemLayout(r));
    }),
    e
  );
})(K);
const Iu = T1;
var C1 = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t._lastFrame = 0), (t._lastFramePercent = 0), t;
  }
  return (
    (e.prototype.createLine = function (t, r, n) {
      return new Iu(t, r, n);
    }),
    (e.prototype._updateAnimationPoints = function (t, r) {
      this._points = r;
      for (var n = [0], i = 0, o = 1; o < r.length; o++) {
        var s = r[o - 1],
          l = r[o];
        (i += Xe(s, l)), n.push(i);
      }
      if (i === 0) {
        this._length = 0;
        return;
      }
      for (var o = 0; o < n.length; o++) n[o] /= i;
      (this._offsets = n), (this._length = i);
    }),
    (e.prototype._getLineLength = function () {
      return this._length;
    }),
    (e.prototype._updateSymbolPosition = function (t) {
      var r = t.__t < 1 ? t.__t : 2 - t.__t,
        n = this._points,
        i = this._offsets,
        o = n.length;
      if (i) {
        var s = this._lastFrame,
          l;
        if (r < this._lastFramePercent) {
          var u = Math.min(s + 1, o - 1);
          for (l = u; l >= 0 && !(i[l] <= r); l--);
          l = Math.min(l, o - 2);
        } else {
          for (l = s; l < o && !(i[l] > r); l++);
          l = Math.min(l - 1, o - 2);
        }
        var h = (r - i[l]) / (i[l + 1] - i[l]),
          v = n[l],
          c = n[l + 1];
        (t.x = v[0] * (1 - h) + h * c[0]), (t.y = v[1] * (1 - h) + h * c[1]);
        var f = t.__t < 1 ? c[0] - v[0] : v[0] - c[0],
          d = t.__t < 1 ? c[1] - v[1] : v[1] - c[1];
        (t.rotation = -Math.atan2(d, f) - Math.PI / 2),
          (this._lastFrame = l),
          (this._lastFramePercent = r),
          (t.ignore = !1);
      }
    }),
    e
  );
})(Lu);
const M1 = C1;
var L1 = (function () {
    function a() {
      (this.polyline = !1), (this.curveness = 0), (this.segs = []);
    }
    return a;
  })(),
  I1 = (function (a) {
    k(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return (r._off = 0), (r.hoverDataIdx = -1), r;
    }
    return (
      (e.prototype.reset = function () {
        (this.notClear = !1), (this._off = 0);
      }),
      (e.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null };
      }),
      (e.prototype.getDefaultShape = function () {
        return new L1();
      }),
      (e.prototype.buildPath = function (t, r) {
        var n = r.segs,
          i = r.curveness,
          o;
        if (r.polyline)
          for (o = this._off; o < n.length; ) {
            var s = n[o++];
            if (s > 0) {
              t.moveTo(n[o++], n[o++]);
              for (var l = 1; l < s; l++) t.lineTo(n[o++], n[o++]);
            }
          }
        else
          for (o = this._off; o < n.length; ) {
            var u = n[o++],
              h = n[o++],
              v = n[o++],
              c = n[o++];
            if ((t.moveTo(u, h), i > 0)) {
              var f = (u + v) / 2 - (h - c) * i,
                d = (h + c) / 2 - (v - u) * i;
              t.quadraticCurveTo(f, d, v, c);
            } else t.lineTo(v, c);
          }
        this.incremental && ((this._off = o), (this.notClear = !0));
      }),
      (e.prototype.findDataIndex = function (t, r) {
        var n = this.shape,
          i = n.segs,
          o = n.curveness,
          s = this.style.lineWidth;
        if (n.polyline)
          for (var l = 0, u = 0; u < i.length; ) {
            var h = i[u++];
            if (h > 0)
              for (var v = i[u++], c = i[u++], f = 1; f < h; f++) {
                var d = i[u++],
                  p = i[u++];
                if (Wi(v, c, d, p, s, t, r)) return l;
              }
            l++;
          }
        else
          for (var l = 0, u = 0; u < i.length; ) {
            var v = i[u++],
              c = i[u++],
              d = i[u++],
              p = i[u++];
            if (o > 0) {
              var g = (v + d) / 2 - (c - p) * o,
                y = (c + p) / 2 - (d - v) * o;
              if (Pv(v, c, g, y, d, p, s, t, r)) return l;
            } else if (Wi(v, c, d, p, s, t, r)) return l;
            l++;
          }
        return -1;
      }),
      (e.prototype.contain = function (t, r) {
        var n = this.transformCoordToLocal(t, r),
          i = this.getBoundingRect();
        if (((t = n[0]), (r = n[1]), i.contain(t, r))) {
          var o = (this.hoverDataIdx = this.findDataIndex(t, r));
          return o >= 0;
        }
        return (this.hoverDataIdx = -1), !1;
      }),
      (e.prototype.getBoundingRect = function () {
        var t = this._rect;
        if (!t) {
          for (
            var r = this.shape, n = r.segs, i = 1 / 0, o = 1 / 0, s = -1 / 0, l = -1 / 0, u = 0;
            u < n.length;

          ) {
            var h = n[u++],
              v = n[u++];
            (i = Math.min(h, i)), (s = Math.max(h, s)), (o = Math.min(v, o)), (l = Math.max(v, l));
          }
          t = this._rect = new jt(i, o, s, l);
        }
        return t;
      }),
      e
    );
  })(Vt),
  P1 = (function () {
    function a() {
      this.group = new K();
    }
    return (
      (a.prototype.updateData = function (e) {
        this._clear();
        var t = this._create();
        t.setShape({ segs: e.getLayout('linesPoints') }), this._setCommon(t, e);
      }),
      (a.prototype.incrementalPrepareUpdate = function (e) {
        this.group.removeAll(), this._clear();
      }),
      (a.prototype.incrementalUpdate = function (e, t) {
        var r = this._newAdded[0],
          n = t.getLayout('linesPoints'),
          i = r && r.shape.segs;
        if (i && i.length < 2e4) {
          var o = i.length,
            s = new Float32Array(o + n.length);
          s.set(i), s.set(n, o), r.setShape({ segs: s });
        } else {
          this._newAdded = [];
          var l = this._create();
          (l.incremental = !0),
            l.setShape({ segs: n }),
            this._setCommon(l, t),
            (l.__startIndex = e.start);
        }
      }),
      (a.prototype.remove = function () {
        this._clear();
      }),
      (a.prototype.eachRendered = function (e) {
        this._newAdded[0] && e(this._newAdded[0]);
      }),
      (a.prototype._create = function () {
        var e = new I1({ cursor: 'default', ignoreCoarsePointer: !0 });
        return this._newAdded.push(e), this.group.add(e), e;
      }),
      (a.prototype._setCommon = function (e, t, r) {
        var n = t.hostModel;
        e.setShape({ polyline: n.get('polyline'), curveness: n.get(['lineStyle', 'curveness']) }),
          e.useStyle(n.getModel('lineStyle').getLineStyle()),
          (e.style.strokeNoScale = !0);
        var i = t.getVisual('style');
        i && i.stroke && e.setStyle('stroke', i.stroke), e.setStyle('fill', null);
        var o = lt(e);
        (o.seriesIndex = n.seriesIndex),
          e.on('mousemove', function (s) {
            o.dataIndex = null;
            var l = e.hoverDataIdx;
            l > 0 && (o.dataIndex = l + e.__startIndex);
          });
      }),
      (a.prototype._clear = function () {
        (this._newAdded = []), this.group.removeAll();
      }),
      a
    );
  })();
const E1 = P1;
var R1 = {
  seriesType: 'lines',
  plan: jn(),
  reset: function (a) {
    var e = a.coordinateSystem;
    if (e) {
      var t = a.get('polyline'),
        r = a.pipelineContext.large;
      return {
        progress: function (n, i) {
          var o = [];
          if (r) {
            var s = void 0,
              l = n.end - n.start;
            if (t) {
              for (var u = 0, h = n.start; h < n.end; h++) u += a.getLineCoordsCount(h);
              s = new Float32Array(l + u * 2);
            } else s = new Float32Array(l * 4);
            for (var v = 0, c = [], h = n.start; h < n.end; h++) {
              var f = a.getLineCoords(h, o);
              t && (s[v++] = f);
              for (var d = 0; d < f; d++)
                (c = e.dataToPoint(o[d], !1, c)), (s[v++] = c[0]), (s[v++] = c[1]);
            }
            i.setLayout('linesPoints', s);
          } else
            for (var h = n.start; h < n.end; h++) {
              var p = i.getItemModel(h),
                f = a.getLineCoords(h, o),
                g = [];
              if (t) for (var y = 0; y < f; y++) g.push(e.dataToPoint(o[y]));
              else {
                (g[0] = e.dataToPoint(o[0])), (g[1] = e.dataToPoint(o[1]));
                var m = p.get(['lineStyle', 'curveness']);
                +m &&
                  (g[2] = [
                    (g[0][0] + g[1][0]) / 2 - (g[0][1] - g[1][1]) * m,
                    (g[0][1] + g[1][1]) / 2 - (g[1][0] - g[0][0]) * m,
                  ]);
              }
              i.setItemLayout(h, g);
            }
        },
      };
    }
  },
};
const Pu = R1;
var k1 = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, r, n) {
      var i = t.getData(),
        o = this._updateLineDraw(i, t),
        s = t.get('zlevel'),
        l = t.get(['effect', 'trailLength']),
        u = n.getZr(),
        h = u.painter.getType() === 'svg';
      h || u.painter.getLayer(s).clear(!0),
        this._lastZlevel != null && !h && u.configLayer(this._lastZlevel, { motionBlur: !1 }),
        this._showEffect(t) &&
          l > 0 &&
          (h ||
            u.configLayer(s, {
              motionBlur: !0,
              lastFrameAlpha: Math.max(Math.min(l / 10 + 0.9, 1), 0),
            })),
        o.updateData(i);
      var v = t.get('clip', !0) && Kn(t.coordinateSystem, !1, t);
      v ? this.group.setClipPath(v) : this.group.removeClipPath(),
        (this._lastZlevel = s),
        (this._finished = !0);
    }),
    (e.prototype.incrementalPrepareRender = function (t, r, n) {
      var i = t.getData(),
        o = this._updateLineDraw(i, t);
      o.incrementalPrepareUpdate(i), this._clearLayer(n), (this._finished = !1);
    }),
    (e.prototype.incrementalRender = function (t, r, n) {
      this._lineDraw.incrementalUpdate(t, r.getData()),
        (this._finished = t.end === r.getData().count());
    }),
    (e.prototype.eachRendered = function (t) {
      this._lineDraw && this._lineDraw.eachRendered(t);
    }),
    (e.prototype.updateTransform = function (t, r, n) {
      var i = t.getData(),
        o = t.pipelineContext;
      if (!this._finished || o.large || o.progressiveRender) return { update: !0 };
      var s = Pu.reset(t, r, n);
      s.progress && s.progress({ start: 0, end: i.count(), count: i.count() }, i),
        this._lineDraw.updateLayout(),
        this._clearLayer(n);
    }),
    (e.prototype._updateLineDraw = function (t, r) {
      var n = this._lineDraw,
        i = this._showEffect(r),
        o = !!r.get('polyline'),
        s = r.pipelineContext,
        l = s.large;
      return (
        (!n || i !== this._hasEffet || o !== this._isPolyline || l !== this._isLargeDraw) &&
          (n && n.remove(),
          (n = this._lineDraw = l ? new E1() : new si(o ? (i ? M1 : Iu) : i ? Lu : oi)),
          (this._hasEffet = i),
          (this._isPolyline = o),
          (this._isLargeDraw = l)),
        this.group.add(n.group),
        n
      );
    }),
    (e.prototype._showEffect = function (t) {
      return !!t.get(['effect', 'show']);
    }),
    (e.prototype._clearLayer = function (t) {
      var r = t.getZr(),
        n = r.painter.getType() === 'svg';
      !n && this._lastZlevel != null && r.painter.getLayer(this._lastZlevel).clear(!0);
    }),
    (e.prototype.remove = function (t, r) {
      this._lineDraw && this._lineDraw.remove(), (this._lineDraw = null), this._clearLayer(r);
    }),
    (e.prototype.dispose = function (t, r) {
      this.remove(t, r);
    }),
    (e.type = 'lines'),
    e
  );
})(dt);
const N1 = k1;
var V1 = typeof Uint32Array == 'undefined' ? Array : Uint32Array,
  B1 = typeof Float64Array == 'undefined' ? Array : Float64Array;
function ys(a) {
  var e = a.data;
  e &&
    e[0] &&
    e[0][0] &&
    e[0][0].coord &&
    (a.data = O(e, function (t) {
      var r = [t[0].coord, t[1].coord],
        n = { coords: r };
      return (
        t[0].name && (n.fromName = t[0].name),
        t[1].name && (n.toName = t[1].name),
        ul([n, t[0], t[1]])
      );
    }));
}
var z1 = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (
      (t.type = e.type), (t.visualStyleAccessPath = 'lineStyle'), (t.visualDrawType = 'stroke'), t
    );
  }
  return (
    (e.prototype.init = function (t) {
      (t.data = t.data || []), ys(t);
      var r = this._processFlatCoordsArray(t.data);
      (this._flatCoords = r.flatCoords),
        (this._flatCoordsOffset = r.flatCoordsOffset),
        r.flatCoords && (t.data = new Float32Array(r.count)),
        a.prototype.init.apply(this, arguments);
    }),
    (e.prototype.mergeOption = function (t) {
      if ((ys(t), t.data)) {
        var r = this._processFlatCoordsArray(t.data);
        (this._flatCoords = r.flatCoords),
          (this._flatCoordsOffset = r.flatCoordsOffset),
          r.flatCoords && (t.data = new Float32Array(r.count));
      }
      a.prototype.mergeOption.apply(this, arguments);
    }),
    (e.prototype.appendData = function (t) {
      var r = this._processFlatCoordsArray(t.data);
      r.flatCoords &&
        (this._flatCoords
          ? ((this._flatCoords = mn(this._flatCoords, r.flatCoords)),
            (this._flatCoordsOffset = mn(this._flatCoordsOffset, r.flatCoordsOffset)))
          : ((this._flatCoords = r.flatCoords), (this._flatCoordsOffset = r.flatCoordsOffset)),
        (t.data = new Float32Array(r.count))),
        this.getRawData().appendData(t.data);
    }),
    (e.prototype._getCoordsFromItemModel = function (t) {
      var r = this.getData().getItemModel(t),
        n = r.option instanceof Array ? r.option : r.getShallow('coords');
      return n;
    }),
    (e.prototype.getLineCoordsCount = function (t) {
      return this._flatCoordsOffset
        ? this._flatCoordsOffset[t * 2 + 1]
        : this._getCoordsFromItemModel(t).length;
    }),
    (e.prototype.getLineCoords = function (t, r) {
      if (this._flatCoordsOffset) {
        for (
          var n = this._flatCoordsOffset[t * 2], i = this._flatCoordsOffset[t * 2 + 1], o = 0;
          o < i;
          o++
        )
          (r[o] = r[o] || []),
            (r[o][0] = this._flatCoords[n + o * 2]),
            (r[o][1] = this._flatCoords[n + o * 2 + 1]);
        return i;
      } else {
        for (var s = this._getCoordsFromItemModel(t), o = 0; o < s.length; o++)
          (r[o] = r[o] || []), (r[o][0] = s[o][0]), (r[o][1] = s[o][1]);
        return s.length;
      }
    }),
    (e.prototype._processFlatCoordsArray = function (t) {
      var r = 0;
      if ((this._flatCoords && (r = this._flatCoords.length), Ot(t[0]))) {
        for (var n = t.length, i = new V1(n), o = new B1(n), s = 0, l = 0, u = 0, h = 0; h < n; ) {
          u++;
          var v = t[h++];
          (i[l++] = s + r), (i[l++] = v);
          for (var c = 0; c < v; c++) {
            var f = t[h++],
              d = t[h++];
            (o[s++] = f), (o[s++] = d);
          }
        }
        return { flatCoordsOffset: new Uint32Array(i.buffer, 0, l), flatCoords: o, count: u };
      }
      return { flatCoordsOffset: null, flatCoords: null, count: t.length };
    }),
    (e.prototype.getInitialData = function (t, r) {
      var n = new Mt(['value'], this);
      return (
        (n.hasItemOption = !1),
        n.initData(t.data, [], function (i, o, s, l) {
          if (i instanceof Array) return NaN;
          n.hasItemOption = !0;
          var u = i.value;
          if (u != null) return u instanceof Array ? u[l] : u;
        }),
        n
      );
    }),
    (e.prototype.formatTooltip = function (t, r, n) {
      var i = this.getData(),
        o = i.getItemModel(t),
        s = o.get('name');
      if (s) return s;
      var l = o.get('fromName'),
        u = o.get('toName'),
        h = [];
      return (
        l != null && h.push(l), u != null && h.push(u), kt('nameValue', { name: h.join(' > ') })
      );
    }),
    (e.prototype.preventIncremental = function () {
      return !!this.get(['effect', 'show']);
    }),
    (e.prototype.getProgressive = function () {
      var t = this.option.progressive;
      return t == null ? (this.option.large ? 1e4 : this.get('progressive')) : t;
    }),
    (e.prototype.getProgressiveThreshold = function () {
      var t = this.option.progressiveThreshold;
      return t == null ? (this.option.large ? 2e4 : this.get('progressiveThreshold')) : t;
    }),
    (e.prototype.getZLevelKey = function () {
      var t = this.getModel('effect'),
        r = t.get('trailLength');
      return this.getData().count() > this.getProgressiveThreshold()
        ? this.id
        : t.get('show') && r > 0
        ? r + ''
        : '';
    }),
    (e.type = 'series.lines'),
    (e.dependencies = ['grid', 'polar', 'geo', 'calendar']),
    (e.defaultOption = {
      coordinateSystem: 'geo',
      z: 2,
      legendHoverLink: !0,
      xAxisIndex: 0,
      yAxisIndex: 0,
      symbol: ['none', 'none'],
      symbolSize: [10, 10],
      geoIndex: 0,
      effect: {
        show: !1,
        period: 4,
        constantSpeed: 0,
        symbol: 'circle',
        symbolSize: 3,
        loop: !0,
        trailLength: 0.2,
      },
      large: !1,
      largeThreshold: 2e3,
      polyline: !1,
      clip: !0,
      label: { show: !1, position: 'end' },
      lineStyle: { opacity: 0.5 },
    }),
    e
  );
})(mt);
const G1 = z1;
function Ia(a) {
  return a instanceof Array || (a = [a, a]), a;
}
var O1 = {
  seriesType: 'lines',
  reset: function (a) {
    var e = Ia(a.get('symbol')),
      t = Ia(a.get('symbolSize')),
      r = a.getData();
    r.setVisual('fromSymbol', e && e[0]),
      r.setVisual('toSymbol', e && e[1]),
      r.setVisual('fromSymbolSize', t && t[0]),
      r.setVisual('toSymbolSize', t && t[1]);
    function n(i, o) {
      var s = i.getItemModel(o),
        l = Ia(s.getShallow('symbol', !0)),
        u = Ia(s.getShallow('symbolSize', !0));
      l[0] && i.setItemVisual(o, 'fromSymbol', l[0]),
        l[1] && i.setItemVisual(o, 'toSymbol', l[1]),
        u[0] && i.setItemVisual(o, 'fromSymbolSize', u[0]),
        u[1] && i.setItemVisual(o, 'toSymbolSize', u[1]);
    }
    return { dataEach: r.hasItemOption ? n : null };
  },
};
const W1 = O1;
function $1(a) {
  a.registerChartView(N1), a.registerSeriesModel(G1), a.registerLayout(Pu), a.registerVisual(W1);
}
var F1 = 256,
  H1 = (function () {
    function a() {
      (this.blurSize = 30),
        (this.pointSize = 20),
        (this.maxOpacity = 1),
        (this.minOpacity = 0),
        (this._gradientPixels = { inRange: null, outOfRange: null });
      var e = $i.createCanvas();
      this.canvas = e;
    }
    return (
      (a.prototype.update = function (e, t, r, n, i, o) {
        var s = this._getBrush(),
          l = this._getGradient(i, 'inRange'),
          u = this._getGradient(i, 'outOfRange'),
          h = this.pointSize + this.blurSize,
          v = this.canvas,
          c = v.getContext('2d'),
          f = e.length;
        (v.width = t), (v.height = r);
        for (var d = 0; d < f; ++d) {
          var p = e[d],
            g = p[0],
            y = p[1],
            m = p[2],
            x = n(m);
          (c.globalAlpha = x), c.drawImage(s, g - h, y - h);
        }
        if (!v.width || !v.height) return v;
        for (
          var S = c.getImageData(0, 0, v.width, v.height),
            b = S.data,
            w = 0,
            _ = b.length,
            A = this.minOpacity,
            C = this.maxOpacity,
            D = C - A;
          w < _;

        ) {
          var x = b[w + 3] / 256,
            T = Math.floor(x * (F1 - 1)) * 4;
          if (x > 0) {
            var L = o(x) ? l : u;
            x > 0 && (x = x * D + A),
              (b[w++] = L[T]),
              (b[w++] = L[T + 1]),
              (b[w++] = L[T + 2]),
              (b[w++] = L[T + 3] * x * 256);
          } else w += 4;
        }
        return c.putImageData(S, 0, 0), v;
      }),
      (a.prototype._getBrush = function () {
        var e = this._brushCanvas || (this._brushCanvas = $i.createCanvas()),
          t = this.pointSize + this.blurSize,
          r = t * 2;
        (e.width = r), (e.height = r);
        var n = e.getContext('2d');
        return (
          n.clearRect(0, 0, r, r),
          (n.shadowOffsetX = r),
          (n.shadowBlur = this.blurSize),
          (n.shadowColor = '#000'),
          n.beginPath(),
          n.arc(-t, t, this.pointSize, 0, Math.PI * 2, !0),
          n.closePath(),
          n.fill(),
          e
        );
      }),
      (a.prototype._getGradient = function (e, t) {
        for (
          var r = this._gradientPixels,
            n = r[t] || (r[t] = new Uint8ClampedArray(256 * 4)),
            i = [0, 0, 0, 0],
            o = 0,
            s = 0;
          s < 256;
          s++
        )
          e[t](s / 255, !0, i), (n[o++] = i[0]), (n[o++] = i[1]), (n[o++] = i[2]), (n[o++] = i[3]);
        return n;
      }),
      a
    );
  })();
const Z1 = H1;
function U1(a, e, t) {
  var r = a[1] - a[0];
  e = O(e, function (o) {
    return { interval: [(o.interval[0] - a[0]) / r, (o.interval[1] - a[0]) / r] };
  });
  var n = e.length,
    i = 0;
  return function (o) {
    var s;
    for (s = i; s < n; s++) {
      var l = e[s].interval;
      if (l[0] <= o && o <= l[1]) {
        i = s;
        break;
      }
    }
    if (s === n)
      for (s = i - 1; s >= 0; s--) {
        var l = e[s].interval;
        if (l[0] <= o && o <= l[1]) {
          i = s;
          break;
        }
      }
    return s >= 0 && s < n && t[s];
  };
}
function Y1(a, e) {
  var t = a[1] - a[0];
  return (
    (e = [(e[0] - a[0]) / t, (e[1] - a[0]) / t]),
    function (r) {
      return r >= e[0] && r <= e[1];
    }
  );
}
function ms(a) {
  var e = a.dimensions;
  return e[0] === 'lng' && e[1] === 'lat';
}
var X1 = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, r, n) {
      var i;
      r.eachComponent('visualMap', function (s) {
        s.eachTargetSeries(function (l) {
          l === t && (i = s);
        });
      }),
        (this._progressiveEls = null),
        this.group.removeAll();
      var o = t.coordinateSystem;
      o.type === 'cartesian2d' || o.type === 'calendar'
        ? this._renderOnCartesianAndCalendar(t, n, 0, t.getData().count())
        : ms(o) && this._renderOnGeo(o, t, i, n);
    }),
    (e.prototype.incrementalPrepareRender = function (t, r, n) {
      this.group.removeAll();
    }),
    (e.prototype.incrementalRender = function (t, r, n, i) {
      var o = r.coordinateSystem;
      o &&
        (ms(o)
          ? this.render(r, n, i)
          : ((this._progressiveEls = []),
            this._renderOnCartesianAndCalendar(r, i, t.start, t.end, !0)));
    }),
    (e.prototype.eachRendered = function (t) {
      or(this._progressiveEls || this.group, t);
    }),
    (e.prototype._renderOnCartesianAndCalendar = function (t, r, n, i, o) {
      var s = t.coordinateSystem,
        l = sr(s, 'cartesian2d'),
        u,
        h,
        v,
        c;
      if (l) {
        var f = s.getAxis('x'),
          d = s.getAxis('y');
        (u = f.getBandWidth() + 0.5),
          (h = d.getBandWidth() + 0.5),
          (v = f.scale.getExtent()),
          (c = d.scale.getExtent());
      }
      for (
        var p = this.group,
          g = t.getData(),
          y = t.getModel(['emphasis', 'itemStyle']).getItemStyle(),
          m = t.getModel(['blur', 'itemStyle']).getItemStyle(),
          x = t.getModel(['select', 'itemStyle']).getItemStyle(),
          S = t.get(['itemStyle', 'borderRadius']),
          b = Nt(t),
          w = t.getModel('emphasis'),
          _ = w.get('focus'),
          A = w.get('blurScope'),
          C = w.get('disabled'),
          D = l
            ? [g.mapDimension('x'), g.mapDimension('y'), g.mapDimension('value')]
            : [g.mapDimension('time'), g.mapDimension('value')],
          T = n;
        T < i;
        T++
      ) {
        var L = void 0,
          P = g.getItemVisual(T, 'style');
        if (l) {
          var M = g.get(D[0], T),
            E = g.get(D[1], T);
          if (
            isNaN(g.get(D[2], T)) ||
            isNaN(M) ||
            isNaN(E) ||
            M < v[0] ||
            M > v[1] ||
            E < c[0] ||
            E > c[1]
          )
            continue;
          var R = s.dataToPoint([M, E]);
          L = new Tt({
            shape: { x: R[0] - u / 2, y: R[1] - h / 2, width: u, height: h },
            style: P,
          });
        } else {
          if (isNaN(g.get(D[1], T))) continue;
          L = new Tt({ z2: 1, shape: s.dataToRect([g.get(D[0], T)]).contentShape, style: P });
        }
        if (g.hasItemOption) {
          var N = g.getItemModel(T),
            V = N.getModel('emphasis');
          (y = V.getModel('itemStyle').getItemStyle()),
            (m = N.getModel(['blur', 'itemStyle']).getItemStyle()),
            (x = N.getModel(['select', 'itemStyle']).getItemStyle()),
            (S = N.get(['itemStyle', 'borderRadius'])),
            (_ = V.get('focus')),
            (A = V.get('blurScope')),
            (C = V.get('disabled')),
            (b = Nt(N));
        }
        L.shape.r = S;
        var G = t.getRawValue(T),
          $ = '-';
        G && G[2] != null && ($ = G[2] + ''),
          Jt(L, b, {
            labelFetcher: t,
            labelDataIndex: T,
            defaultOpacity: P.opacity,
            defaultText: $,
          }),
          (L.ensureState('emphasis').style = y),
          (L.ensureState('blur').style = m),
          (L.ensureState('select').style = x),
          ft(L, _, A, C),
          (L.incremental = o),
          o && (L.states.emphasis.hoverLayer = !0),
          p.add(L),
          g.setItemGraphicEl(T, L),
          this._progressiveEls && this._progressiveEls.push(L);
      }
    }),
    (e.prototype._renderOnGeo = function (t, r, n, i) {
      var o = n.targetVisuals.inRange,
        s = n.targetVisuals.outOfRange,
        l = r.getData(),
        u = this._hmLayer || this._hmLayer || new Z1();
      (u.blurSize = r.get('blurSize')),
        (u.pointSize = r.get('pointSize')),
        (u.minOpacity = r.get('minOpacity')),
        (u.maxOpacity = r.get('maxOpacity'));
      var h = t.getViewRect().clone(),
        v = t.getRoamTransform();
      h.applyTransform(v);
      var c = Math.max(h.x, 0),
        f = Math.max(h.y, 0),
        d = Math.min(h.width + h.x, i.getWidth()),
        p = Math.min(h.height + h.y, i.getHeight()),
        g = d - c,
        y = p - f,
        m = [l.mapDimension('lng'), l.mapDimension('lat'), l.mapDimension('value')],
        x = l.mapArray(m, function (_, A, C) {
          var D = t.dataToPoint([_, A]);
          return (D[0] -= c), (D[1] -= f), D.push(C), D;
        }),
        S = n.getExtent(),
        b =
          n.type === 'visualMap.continuous'
            ? Y1(S, n.option.range)
            : U1(S, n.getPieceList(), n.option.selected);
      u.update(
        x,
        g,
        y,
        o.color.getNormalizer(),
        { inRange: o.color.getColorMapper(), outOfRange: s.color.getColorMapper() },
        b,
      );
      var w = new ye({ style: { width: g, height: y, x: c, y: f, image: u.canvas }, silent: !0 });
      this.group.add(w);
    }),
    (e.type = 'heatmap'),
    e
  );
})(dt);
const q1 = X1;
var K1 = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      return Oe(null, this, { generateCoord: 'value' });
    }),
    (e.prototype.preventIncremental = function () {
      var t = Tl.get(this.get('coordinateSystem'));
      if (t && t.dimensions) return t.dimensions[0] === 'lng' && t.dimensions[1] === 'lat';
    }),
    (e.type = 'series.heatmap'),
    (e.dependencies = ['grid', 'geo', 'calendar']),
    (e.defaultOption = {
      coordinateSystem: 'cartesian2d',
      z: 2,
      geoIndex: 0,
      blurSize: 30,
      pointSize: 20,
      maxOpacity: 1,
      minOpacity: 0,
      select: { itemStyle: { borderColor: '#212121' } },
    }),
    e
  );
})(mt);
const j1 = K1;
function Q1(a) {
  a.registerChartView(q1), a.registerSeriesModel(j1);
}
var J1 = ['itemStyle', 'borderWidth'],
  xs = [
    { xy: 'x', wh: 'width', index: 0, posDesc: ['left', 'right'] },
    { xy: 'y', wh: 'height', index: 1, posDesc: ['top', 'bottom'] },
  ],
  nn = new aa(),
  tx = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.render = function (t, r, n) {
        var i = this.group,
          o = t.getData(),
          s = this._data,
          l = t.coordinateSystem,
          u = l.getBaseAxis(),
          h = u.isHorizontal(),
          v = l.master.getRect(),
          c = {
            ecSize: { width: n.getWidth(), height: n.getHeight() },
            seriesModel: t,
            coordSys: l,
            coordSysExtent: [
              [v.x, v.x + v.width],
              [v.y, v.y + v.height],
            ],
            isHorizontal: h,
            valueDim: xs[+h],
            categoryDim: xs[1 - +h],
          };
        return (
          o
            .diff(s)
            .add(function (f) {
              if (o.hasValue(f)) {
                var d = bs(o, f),
                  p = Ss(o, f, d, c),
                  g = ws(o, c, p);
                o.setItemGraphicEl(f, g), i.add(g), As(g, c, p);
              }
            })
            .update(function (f, d) {
              var p = s.getItemGraphicEl(d);
              if (!o.hasValue(f)) {
                i.remove(p);
                return;
              }
              var g = bs(o, f),
                y = Ss(o, f, g, c),
                m = Bu(o, y);
              p &&
                m !== p.__pictorialShapeStr &&
                (i.remove(p), o.setItemGraphicEl(f, null), (p = null)),
                p ? sx(p, c, y) : (p = ws(o, c, y, !0)),
                o.setItemGraphicEl(f, p),
                (p.__pictorialSymbolMeta = y),
                i.add(p),
                As(p, c, y);
            })
            .remove(function (f) {
              var d = s.getItemGraphicEl(f);
              d && _s(s, f, d.__pictorialSymbolMeta.animationModel, d);
            })
            .execute(),
          (this._data = o),
          this.group
        );
      }),
      (e.prototype.remove = function (t, r) {
        var n = this.group,
          i = this._data;
        t.get('animation')
          ? i &&
            i.eachItemGraphicEl(function (o) {
              _s(i, lt(o).dataIndex, t, o);
            })
          : n.removeAll();
      }),
      (e.type = 'pictorialBar'),
      e
    );
  })(dt);
function Ss(a, e, t, r) {
  var n = a.getItemLayout(e),
    i = t.get('symbolRepeat'),
    o = t.get('symbolClip'),
    s = t.get('symbolPosition') || 'start',
    l = t.get('symbolRotate'),
    u = ((l || 0) * Math.PI) / 180 || 0,
    h = t.get('symbolPatternSize') || 2,
    v = t.isAnimationEnabled(),
    c = {
      dataIndex: e,
      layout: n,
      itemModel: t,
      symbolType: a.getItemVisual(e, 'symbol') || 'circle',
      style: a.getItemVisual(e, 'style'),
      symbolClip: o,
      symbolRepeat: i,
      symbolRepeatDirection: t.get('symbolRepeatDirection'),
      symbolPatternSize: h,
      rotation: u,
      animationModel: v ? t : null,
      hoverScale: v && t.get(['emphasis', 'scale']),
      z2: t.getShallow('z', !0) || 0,
    };
  ex(t, i, n, r, c),
    ax(a, e, n, i, o, c.boundingLength, c.pxSign, h, r, c),
    rx(t, c.symbolScale, u, r, c);
  var f = c.symbolSize,
    d = nr(t.get('symbolOffset'), f);
  return nx(t, f, n, i, o, d, s, c.valueLineWidth, c.boundingLength, c.repeatCutLength, r, c), c;
}
function ex(a, e, t, r, n) {
  var i = r.valueDim,
    o = a.get('symbolBoundingData'),
    s = r.coordSys.getOtherAxis(r.coordSys.getBaseAxis()),
    l = s.toGlobalCoord(s.dataToCoord(0)),
    u = 1 - +(t[i.wh] <= 0),
    h;
  if (H(o)) {
    var v = [on(s, o[0]) - l, on(s, o[1]) - l];
    v[1] < v[0] && v.reverse(), (h = v[u]);
  } else
    o != null ? (h = on(s, o) - l) : e ? (h = r.coordSysExtent[i.index][u] - l) : (h = t[i.wh]);
  (n.boundingLength = h), e && (n.repeatCutLength = t[i.wh]), (n.pxSign = h > 0 ? 1 : -1);
}
function on(a, e) {
  return a.toGlobalCoord(a.dataToCoord(a.scale.parse(e)));
}
function ax(a, e, t, r, n, i, o, s, l, u) {
  var h = l.valueDim,
    v = l.categoryDim,
    c = Math.abs(t[v.wh]),
    f = a.getItemVisual(e, 'symbolSize'),
    d;
  H(f) ? (d = f.slice()) : f == null ? (d = ['100%', '100%']) : (d = [f, f]),
    (d[v.index] = z(d[v.index], c)),
    (d[h.index] = z(d[h.index], r ? c : Math.abs(i))),
    (u.symbolSize = d);
  var p = (u.symbolScale = [d[0] / s, d[1] / s]);
  p[h.index] *= (l.isHorizontal ? -1 : 1) * o;
}
function rx(a, e, t, r, n) {
  var i = a.get(J1) || 0;
  i &&
    (nn.attr({ scaleX: e[0], scaleY: e[1], rotation: t }),
    nn.updateTransform(),
    (i /= nn.getLineScale()),
    (i *= e[r.valueDim.index])),
    (n.valueLineWidth = i || 0);
}
function nx(a, e, t, r, n, i, o, s, l, u, h, v) {
  var c = h.categoryDim,
    f = h.valueDim,
    d = v.pxSign,
    p = Math.max(e[f.index] + s, 0),
    g = p;
  if (r) {
    var y = Math.abs(l),
      m = zt(a.get('symbolMargin'), '15%') + '',
      x = !1;
    m.lastIndexOf('!') === m.length - 1 && ((x = !0), (m = m.slice(0, m.length - 1)));
    var S = z(m, e[f.index]),
      b = Math.max(p + S * 2, 0),
      w = x ? 0 : S * 2,
      _ = Ev(r),
      A = _ ? r : Ds((y + w) / b),
      C = y - A * p;
    (S = C / 2 / (x ? A : Math.max(A - 1, 1))),
      (b = p + S * 2),
      (w = x ? 0 : S * 2),
      !_ && r !== 'fixed' && (A = u ? Ds((Math.abs(u) + w) / b) : 0),
      (g = A * b - w),
      (v.repeatTimes = A),
      (v.symbolMargin = S);
  }
  var D = d * (g / 2),
    T = (v.pathPosition = []);
  (T[c.index] = t[c.wh] / 2),
    (T[f.index] = o === 'start' ? D : o === 'end' ? l - D : l / 2),
    i && ((T[0] += i[0]), (T[1] += i[1]));
  var L = (v.bundlePosition = []);
  (L[c.index] = t[c.xy]), (L[f.index] = t[f.xy]);
  var P = (v.barRectShape = W({}, t));
  (P[f.wh] = d * Math.max(Math.abs(t[f.wh]), Math.abs(T[f.index] + D))), (P[c.wh] = t[c.wh]);
  var M = (v.clipShape = {});
  (M[c.xy] = -t[c.xy]), (M[c.wh] = h.ecSize[c.wh]), (M[f.xy] = 0), (M[f.wh] = t[f.wh]);
}
function Eu(a) {
  var e = a.symbolPatternSize,
    t = Wt(a.symbolType, -e / 2, -e / 2, e, e);
  return t.attr({ culling: !0 }), t.type !== 'image' && t.setStyle({ strokeNoScale: !0 }), t;
}
function Ru(a, e, t, r) {
  var n = a.__pictorialBundle,
    i = t.symbolSize,
    o = t.valueLineWidth,
    s = t.pathPosition,
    l = e.valueDim,
    u = t.repeatTimes || 0,
    h = 0,
    v = i[e.valueDim.index] + o + t.symbolMargin * 2;
  for (
    yi(a, function (p) {
      (p.__pictorialAnimationIndex = h),
        (p.__pictorialRepeatTimes = u),
        h < u
          ? Ve(p, null, d(h), t, r)
          : Ve(p, null, { scaleX: 0, scaleY: 0 }, t, r, function () {
              n.remove(p);
            }),
        h++;
    });
    h < u;
    h++
  ) {
    var c = Eu(t);
    (c.__pictorialAnimationIndex = h), (c.__pictorialRepeatTimes = u), n.add(c);
    var f = d(h);
    Ve(
      c,
      { x: f.x, y: f.y, scaleX: 0, scaleY: 0 },
      { scaleX: f.scaleX, scaleY: f.scaleY, rotation: f.rotation },
      t,
      r,
    );
  }
  function d(p) {
    var g = s.slice(),
      y = t.pxSign,
      m = p;
    return (
      (t.symbolRepeatDirection === 'start' ? y > 0 : y < 0) && (m = u - 1 - p),
      (g[l.index] = v * (m - u / 2 + 0.5) + s[l.index]),
      { x: g[0], y: g[1], scaleX: t.symbolScale[0], scaleY: t.symbolScale[1], rotation: t.rotation }
    );
  }
}
function ku(a, e, t, r) {
  var n = a.__pictorialBundle,
    i = a.__pictorialMainPath;
  i
    ? Ve(
        i,
        null,
        {
          x: t.pathPosition[0],
          y: t.pathPosition[1],
          scaleX: t.symbolScale[0],
          scaleY: t.symbolScale[1],
          rotation: t.rotation,
        },
        t,
        r,
      )
    : ((i = a.__pictorialMainPath = Eu(t)),
      n.add(i),
      Ve(
        i,
        { x: t.pathPosition[0], y: t.pathPosition[1], scaleX: 0, scaleY: 0, rotation: t.rotation },
        { scaleX: t.symbolScale[0], scaleY: t.symbolScale[1] },
        t,
        r,
      ));
}
function Nu(a, e, t) {
  var r = W({}, e.barRectShape),
    n = a.__pictorialBarRect;
  n
    ? Ve(n, null, { shape: r }, e, t)
    : ((n = a.__pictorialBarRect =
        new Tt({
          z2: 2,
          shape: r,
          silent: !0,
          style: { stroke: 'transparent', fill: 'transparent', lineWidth: 0 },
        })),
      (n.disableMorphing = !0),
      a.add(n));
}
function Vu(a, e, t, r) {
  if (t.symbolClip) {
    var n = a.__pictorialClipPath,
      i = W({}, t.clipShape),
      o = e.valueDim,
      s = t.animationModel,
      l = t.dataIndex;
    if (n) ht(n, { shape: i }, s, l);
    else {
      (i[o.wh] = 0),
        (n = new Tt({ shape: i })),
        a.__pictorialBundle.setClipPath(n),
        (a.__pictorialClipPath = n);
      var u = {};
      (u[o.wh] = t.clipShape[o.wh]), hr[r ? 'updateProps' : 'initProps'](n, { shape: u }, s, l);
    }
  }
}
function bs(a, e) {
  var t = a.getItemModel(e);
  return (t.getAnimationDelayParams = ix), (t.isAnimationEnabled = ox), t;
}
function ix(a) {
  return { index: a.__pictorialAnimationIndex, count: a.__pictorialRepeatTimes };
}
function ox() {
  return this.parentModel.isAnimationEnabled() && !!this.getShallow('animation');
}
function ws(a, e, t, r) {
  var n = new K(),
    i = new K();
  return (
    n.add(i),
    (n.__pictorialBundle = i),
    (i.x = t.bundlePosition[0]),
    (i.y = t.bundlePosition[1]),
    t.symbolRepeat ? Ru(n, e, t) : ku(n, e, t),
    Nu(n, t, r),
    Vu(n, e, t, r),
    (n.__pictorialShapeStr = Bu(a, t)),
    (n.__pictorialSymbolMeta = t),
    n
  );
}
function sx(a, e, t) {
  var r = t.animationModel,
    n = t.dataIndex,
    i = a.__pictorialBundle;
  ht(i, { x: t.bundlePosition[0], y: t.bundlePosition[1] }, r, n),
    t.symbolRepeat ? Ru(a, e, t, !0) : ku(a, e, t, !0),
    Nu(a, t, !0),
    Vu(a, e, t, !0);
}
function _s(a, e, t, r) {
  var n = r.__pictorialBarRect;
  n && n.removeTextContent();
  var i = [];
  yi(r, function (o) {
    i.push(o);
  }),
    r.__pictorialMainPath && i.push(r.__pictorialMainPath),
    r.__pictorialClipPath && (t = null),
    I(i, function (o) {
      Oa(o, { scaleX: 0, scaleY: 0 }, t, e, function () {
        r.parent && r.parent.remove(r);
      });
    }),
    a.setItemGraphicEl(e, null);
}
function Bu(a, e) {
  return [a.getItemVisual(e.dataIndex, 'symbol') || 'none', !!e.symbolRepeat, !!e.symbolClip].join(
    ':',
  );
}
function yi(a, e, t) {
  I(a.__pictorialBundle.children(), function (r) {
    r !== a.__pictorialBarRect && e.call(t, r);
  });
}
function Ve(a, e, t, r, n, i) {
  e && a.attr(e),
    r.symbolClip && !n
      ? t && a.attr(t)
      : t && hr[n ? 'updateProps' : 'initProps'](a, t, r.animationModel, r.dataIndex, i);
}
function As(a, e, t) {
  var r = t.dataIndex,
    n = t.itemModel,
    i = n.getModel('emphasis'),
    o = i.getModel('itemStyle').getItemStyle(),
    s = n.getModel(['blur', 'itemStyle']).getItemStyle(),
    l = n.getModel(['select', 'itemStyle']).getItemStyle(),
    u = n.getShallow('cursor'),
    h = i.get('focus'),
    v = i.get('blurScope'),
    c = i.get('scale');
  yi(a, function (p) {
    if (p instanceof ye) {
      var g = p.style;
      p.useStyle(W({ image: g.image, x: g.x, y: g.y, width: g.width, height: g.height }, t.style));
    } else p.useStyle(t.style);
    var y = p.ensureState('emphasis');
    (y.style = o),
      c && ((y.scaleX = p.scaleX * 1.1), (y.scaleY = p.scaleY * 1.1)),
      (p.ensureState('blur').style = s),
      (p.ensureState('select').style = l),
      u && (p.cursor = u),
      (p.z2 = t.z2);
  });
  var f = e.valueDim.posDesc[+(t.boundingLength > 0)],
    d = a.__pictorialBarRect;
  Jt(d, Nt(n), {
    labelFetcher: e.seriesModel,
    labelDataIndex: r,
    defaultText: _n(e.seriesModel.getData(), r),
    inheritColor: t.style.fill,
    defaultOpacity: t.style.opacity,
    defaultOutsidePosition: f,
  }),
    ft(a, h, v, i.get('disabled'));
}
function Ds(a) {
  var e = Math.round(a);
  return Math.abs(a - e) < 1e-4 ? e : Math.ceil(a);
}
const lx = tx;
var ux = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.hasSymbolVisual = !0), (t.defaultSymbol = 'roundRect'), t;
  }
  return (
    (e.prototype.getInitialData = function (t) {
      return (t.stack = null), a.prototype.getInitialData.apply(this, arguments);
    }),
    (e.type = 'series.pictorialBar'),
    (e.dependencies = ['grid']),
    (e.defaultOption = ar(Fi.defaultOption, {
      symbol: 'circle',
      symbolSize: null,
      symbolRotate: null,
      symbolPosition: null,
      symbolOffset: null,
      symbolMargin: null,
      symbolRepeat: !1,
      symbolRepeatDirection: 'end',
      symbolClip: !1,
      symbolBoundingData: null,
      symbolPatternSize: 400,
      barGap: '-100%',
      progressive: 0,
      emphasis: { scale: !1 },
      select: { itemStyle: { borderColor: '#212121' } },
    })),
    e
  );
})(Fi);
const hx = ux;
function vx(a) {
  a.registerChartView(lx),
    a.registerSeriesModel(hx),
    a.registerLayout(a.PRIORITY.VISUAL.LAYOUT, it(Rv, 'pictorialBar')),
    a.registerLayout(a.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, kv('pictorialBar'));
}
var cx = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t._layers = []), t;
  }
  return (
    (e.prototype.render = function (t, r, n) {
      var i = t.getData(),
        o = this,
        s = this.group,
        l = t.getLayerSeries(),
        u = i.getLayout('layoutInfo'),
        h = u.rect,
        v = u.boundaryGap;
      (s.x = 0), (s.y = h.y + v[0]);
      function c(g) {
        return g.name;
      }
      var f = new pr(this._layersSeries || [], l, c, c),
        d = [];
      f.add(U(p, this, 'add')).update(U(p, this, 'update')).remove(U(p, this, 'remove')).execute();
      function p(g, y, m) {
        var x = o._layers;
        if (g === 'remove') {
          s.remove(x[y]);
          return;
        }
        for (var S = [], b = [], w, _ = l[y].indices, A = 0; A < _.length; A++) {
          var C = i.getItemLayout(_[A]),
            D = C.x,
            T = C.y0,
            L = C.y;
          S.push(D, T), b.push(D, T + L), (w = i.getItemVisual(_[A], 'style'));
        }
        var P,
          M = i.getItemLayout(_[0]),
          E = t.getModel('label'),
          R = E.get('margin'),
          N = t.getModel('emphasis');
        if (g === 'add') {
          var V = (d[y] = new K());
          (P = new Nv({
            shape: {
              points: S,
              stackedOnPoints: b,
              smooth: 0.4,
              stackedOnSmooth: 0.4,
              smoothConstraint: !1,
            },
            z2: 0,
          })),
            V.add(P),
            s.add(V),
            t.isAnimationEnabled() &&
              P.setClipPath(
                fx(P.getBoundingRect(), t, function () {
                  P.removeClipPath();
                }),
              );
        } else {
          var V = x[m];
          (P = V.childAt(0)),
            s.add(V),
            (d[y] = V),
            ht(P, { shape: { points: S, stackedOnPoints: b } }, t),
            fe(P);
        }
        Jt(
          P,
          Nt(t),
          { labelDataIndex: _[A - 1], defaultText: i.getName(_[A - 1]), inheritColor: w.fill },
          { normal: { verticalAlign: 'middle' } },
        ),
          P.setTextConfig({ position: null, local: !0 });
        var G = P.getTextContent();
        G && ((G.x = M.x - R), (G.y = M.y0 + M.y / 2)),
          P.useStyle(w),
          i.setItemGraphicEl(y, P),
          It(P, t),
          ft(P, N.get('focus'), N.get('blurScope'), N.get('disabled'));
      }
      (this._layersSeries = l), (this._layers = d);
    }),
    (e.type = 'themeRiver'),
    e
  );
})(dt);
function fx(a, e, t) {
  var r = new Tt({ shape: { x: a.x - 10, y: a.y - 10, width: 0, height: a.height + 20 } });
  return Qt(r, { shape: { x: a.x - 50, width: a.width + 100, height: a.height + 20 } }, e, t), r;
}
const dx = cx;
var sn = 2,
  px = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.init = function (t) {
        a.prototype.init.apply(this, arguments),
          (this.legendVisualProvider = new vr(U(this.getData, this), U(this.getRawData, this)));
      }),
      (e.prototype.fixData = function (t) {
        var r = t.length,
          n = {},
          i = bn(t, function (c) {
            return n.hasOwnProperty(c[0] + '') || (n[c[0] + ''] = -1), c[2];
          }),
          o = [];
        i.buckets.each(function (c, f) {
          o.push({ name: f, dataList: c });
        });
        for (var s = o.length, l = 0; l < s; ++l) {
          for (var u = o[l].name, h = 0; h < o[l].dataList.length; ++h) {
            var v = o[l].dataList[h][0] + '';
            n[v] = l;
          }
          for (var v in n)
            n.hasOwnProperty(v) && n[v] !== l && ((n[v] = l), (t[r] = [v, 0, u]), r++);
        }
        return t;
      }),
      (e.prototype.getInitialData = function (t, r) {
        for (
          var n = this.getReferringComponents('singleAxis', fa).models[0],
            i = n.get('type'),
            o = Ft(t.data, function (d) {
              return d[2] !== void 0;
            }),
            s = this.fixData(o || []),
            l = [],
            u = (this.nameMap = Kt()),
            h = 0,
            v = 0;
          v < s.length;
          ++v
        )
          l.push(s[v][sn]), u.get(s[v][sn]) || (u.set(s[v][sn], h), h++);
        var c = qn(s, {
            coordDimensions: ['single'],
            dimensionsDefine: [
              { name: 'time', type: wn(i) },
              { name: 'value', type: 'float' },
              { name: 'name', type: 'ordinal' },
            ],
            encodeDefine: { single: 0, value: 1, itemName: 2 },
          }).dimensions,
          f = new Mt(c, this);
        return f.initData(s), f;
      }),
      (e.prototype.getLayerSeries = function () {
        for (var t = this.getData(), r = t.count(), n = [], i = 0; i < r; ++i) n[i] = i;
        var o = t.mapDimension('single'),
          s = bn(n, function (u) {
            return t.get('name', u);
          }),
          l = [];
        return (
          s.buckets.each(function (u, h) {
            u.sort(function (v, c) {
              return t.get(o, v) - t.get(o, c);
            }),
              l.push({ name: h, indices: u });
          }),
          l
        );
      }),
      (e.prototype.getAxisTooltipData = function (t, r, n) {
        H(t) || (t = t ? [t] : []);
        for (
          var i = this.getData(), o = this.getLayerSeries(), s = [], l = o.length, u, h = 0;
          h < l;
          ++h
        ) {
          for (var v = Number.MAX_VALUE, c = -1, f = o[h].indices.length, d = 0; d < f; ++d) {
            var p = i.get(t[0], o[h].indices[d]),
              g = Math.abs(p - r);
            g <= v && ((u = p), (v = g), (c = o[h].indices[d]));
          }
          s.push(c);
        }
        return { dataIndices: s, nestestValue: u };
      }),
      (e.prototype.formatTooltip = function (t, r, n) {
        var i = this.getData(),
          o = i.getName(t),
          s = i.get(i.mapDimension('value'), t);
        return kt('nameValue', { name: o, value: s });
      }),
      (e.type = 'series.themeRiver'),
      (e.dependencies = ['singleAxis']),
      (e.defaultOption = {
        z: 2,
        colorBy: 'data',
        coordinateSystem: 'singleAxis',
        boundaryGap: ['10%', '10%'],
        singleAxisIndex: 0,
        animationEasing: 'linear',
        label: { margin: 4, show: !0, position: 'left', fontSize: 11 },
        emphasis: { label: { show: !0 } },
      }),
      e
    );
  })(mt);
const gx = px;
function yx(a, e) {
  a.eachSeriesByType('themeRiver', function (t) {
    var r = t.getData(),
      n = t.coordinateSystem,
      i = {},
      o = n.getRect();
    i.rect = o;
    var s = t.get('boundaryGap'),
      l = n.getAxis();
    if (((i.boundaryGap = s), l.orient === 'horizontal')) {
      (s[0] = z(s[0], o.height)), (s[1] = z(s[1], o.height));
      var u = o.height - s[0] - s[1];
      Ts(r, t, u);
    } else {
      (s[0] = z(s[0], o.width)), (s[1] = z(s[1], o.width));
      var h = o.width - s[0] - s[1];
      Ts(r, t, h);
    }
    r.setLayout('layoutInfo', i);
  });
}
function Ts(a, e, t) {
  if (a.count())
    for (
      var r = e.coordinateSystem,
        n = e.getLayerSeries(),
        i = a.mapDimension('single'),
        o = a.mapDimension('value'),
        s = O(n, function (g) {
          return O(g.indices, function (y) {
            var m = r.dataToPoint(a.get(i, y));
            return (m[1] = a.get(o, y)), m;
          });
        }),
        l = mx(s),
        u = l.y0,
        h = t / l.max,
        v = n.length,
        c = n[0].indices.length,
        f,
        d = 0;
      d < c;
      ++d
    ) {
      (f = u[d] * h),
        a.setItemLayout(n[0].indices[d], {
          layerIndex: 0,
          x: s[0][d][0],
          y0: f,
          y: s[0][d][1] * h,
        });
      for (var p = 1; p < v; ++p)
        (f += s[p - 1][d][1] * h),
          a.setItemLayout(n[p].indices[d], {
            layerIndex: p,
            x: s[p][d][0],
            y0: f,
            y: s[p][d][1] * h,
          });
    }
}
function mx(a) {
  for (var e = a.length, t = a[0].length, r = [], n = [], i = 0, o = 0; o < t; ++o) {
    for (var s = 0, l = 0; l < e; ++l) s += a[l][o][1];
    s > i && (i = s), r.push(s);
  }
  for (var u = 0; u < t; ++u) n[u] = (i - r[u]) / 2;
  i = 0;
  for (var h = 0; h < t; ++h) {
    var v = r[h] + n[h];
    v > i && (i = v);
  }
  return { y0: n, max: i };
}
function xx(a) {
  a.registerChartView(dx),
    a.registerSeriesModel(gx),
    a.registerLayout(yx),
    a.registerProcessor(fr('themeRiver'));
}
var Sx = 2,
  bx = 4,
  wx = (function (a) {
    k(e, a);
    function e(t, r, n, i) {
      var o = a.call(this) || this;
      (o.z2 = Sx), (o.textConfig = { inside: !0 }), (lt(o).seriesIndex = r.seriesIndex);
      var s = new gt({ z2: bx, silent: t.getModel().get(['label', 'silent']) });
      return o.setTextContent(s), o.updateData(!0, t, r, n, i), o;
    }
    return (
      (e.prototype.updateData = function (t, r, n, i, o) {
        (this.node = r), (r.piece = this), (n = n || this._seriesModel), (i = i || this._ecModel);
        var s = this;
        lt(s).dataIndex = r.dataIndex;
        var l = r.getModel(),
          u = l.getModel('emphasis'),
          h = r.getLayout(),
          v = W({}, h);
        v.label = null;
        var c = r.getVisual('style');
        c.lineJoin = 'bevel';
        var f = r.getVisual('decal');
        f && (c.decal = Cl(f, o));
        var d = Hi(l.getModel('itemStyle'), v, !0);
        W(v, d),
          I(pn, function (m) {
            var x = s.ensureState(m),
              S = l.getModel([m, 'itemStyle']);
            x.style = S.getItemStyle();
            var b = Hi(S, v);
            b && (x.shape = b);
          }),
          t
            ? (s.setShape(v), (s.shape.r = h.r0), ht(s, { shape: { r: h.r } }, n, r.dataIndex))
            : (ht(s, { shape: v }, n), fe(s)),
          s.useStyle(c),
          this._updateLabel(n);
        var p = l.getShallow('cursor');
        p && s.attr('cursor', p),
          (this._seriesModel = n || this._seriesModel),
          (this._ecModel = i || this._ecModel);
        var g = u.get('focus'),
          y =
            g === 'ancestor'
              ? r.getAncestorsIndices()
              : g === 'descendant'
              ? r.getDescendantIndices()
              : g;
        ft(this, y, u.get('blurScope'), u.get('disabled'));
      }),
      (e.prototype._updateLabel = function (t) {
        var r = this,
          n = this.node.getModel(),
          i = n.getModel('label'),
          o = this.node.getLayout(),
          s = o.endAngle - o.startAngle,
          l = (o.startAngle + o.endAngle) / 2,
          u = Math.cos(l),
          h = Math.sin(l),
          v = this,
          c = v.getTextContent(),
          f = this.node.dataIndex,
          d = (i.get('minAngle') / 180) * Math.PI,
          p = i.get('show') && !(d != null && Math.abs(s) < d);
        (c.ignore = !p),
          I(Vv, function (y) {
            var m = y === 'normal' ? n.getModel('label') : n.getModel([y, 'label']),
              x = y === 'normal',
              S = x ? c : c.ensureState(y),
              b = t.getFormattedLabel(f, y);
            x && (b = b || r.node.name),
              (S.style = yt(m, {}, null, y !== 'normal', !0)),
              b && (S.style.text = b);
            var w = m.get('show');
            w != null && !x && (S.ignore = !w);
            var _ = g(m, 'position'),
              A = x ? v : v.states[y],
              C = A.style.fill;
            A.textConfig = {
              outsideFill: m.get('color') === 'inherit' ? C : null,
              inside: _ !== 'outside',
            };
            var D,
              T = g(m, 'distance') || 0,
              L = g(m, 'align');
            _ === 'outside'
              ? ((D = o.r + T), (L = l > Math.PI / 2 ? 'right' : 'left'))
              : !L || L === 'center'
              ? (s === 2 * Math.PI && o.r0 === 0 ? (D = 0) : (D = (o.r + o.r0) / 2), (L = 'center'))
              : L === 'left'
              ? ((D = o.r0 + T), l > Math.PI / 2 && (L = 'right'))
              : L === 'right' && ((D = o.r - T), l > Math.PI / 2 && (L = 'left')),
              (S.style.align = L),
              (S.style.verticalAlign = g(m, 'verticalAlign') || 'middle'),
              (S.x = D * u + o.cx),
              (S.y = D * h + o.cy);
            var P = g(m, 'rotate'),
              M = 0;
            P === 'radial'
              ? ((M = -l), M < -Math.PI / 2 && (M += Math.PI))
              : P === 'tangential'
              ? ((M = Math.PI / 2 - l),
                M > Math.PI / 2 ? (M -= Math.PI) : M < -Math.PI / 2 && (M += Math.PI))
              : Ot(P) && (M = (P * Math.PI) / 180),
              (S.rotation = M);
          });
        function g(y, m) {
          var x = y.get(m);
          return x == null ? i.get(m) : x;
        }
        c.dirtyStyle();
      }),
      e
    );
  })(ra);
const Cs = wx;
var Rn = 'sunburstRootToNode',
  Ms = 'sunburstHighlight',
  _x = 'sunburstUnhighlight';
function Ax(a) {
  a.registerAction({ type: Rn, update: 'updateView' }, function (e, t) {
    t.eachComponent({ mainType: 'series', subType: 'sunburst', query: e }, r);
    function r(n, i) {
      var o = la(e, [Rn], n);
      if (o) {
        var s = n.getViewRoot();
        s && (e.direction = ci(s, o.node) ? 'rollUp' : 'drillDown'), n.resetViewRoot(o.node);
      }
    }
  }),
    a.registerAction({ type: Ms, update: 'none' }, function (e, t, r) {
      (e = W({}, e)), t.eachComponent({ mainType: 'series', subType: 'sunburst', query: e }, n);
      function n(i) {
        var o = la(e, [Ms], i);
        o && (e.dataIndex = o.node.dataIndex);
      }
      r.dispatchAction(W(e, { type: 'highlight' }));
    }),
    a.registerAction({ type: _x, update: 'updateView' }, function (e, t, r) {
      (e = W({}, e)), r.dispatchAction(W(e, { type: 'downplay' }));
    });
}
var Dx = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, r, n, i) {
      var o = this;
      (this.seriesModel = t), (this.api = n), (this.ecModel = r);
      var s = t.getData(),
        l = s.tree.root,
        u = t.getViewRoot(),
        h = this.group,
        v = t.get('renderLabelForZeroData'),
        c = [];
      u.eachNode(function (m) {
        c.push(m);
      });
      var f = this._oldChildren || [];
      d(c, f), y(l, u), this._initEvents(), (this._oldChildren = c);
      function d(m, x) {
        if (m.length === 0 && x.length === 0) return;
        new pr(x, m, S, S).add(b).update(b).remove(it(b, null)).execute();
        function S(w) {
          return w.getId();
        }
        function b(w, _) {
          var A = w == null ? null : m[w],
            C = _ == null ? null : x[_];
          p(A, C);
        }
      }
      function p(m, x) {
        if ((!v && m && !m.getValue() && (m = null), m !== l && x !== l)) {
          if (x && x.piece)
            m
              ? (x.piece.updateData(!1, m, t, r, n), s.setItemGraphicEl(m.dataIndex, x.piece))
              : g(x);
          else if (m) {
            var S = new Cs(m, t, r, n);
            h.add(S), s.setItemGraphicEl(m.dataIndex, S);
          }
        }
      }
      function g(m) {
        m && m.piece && (h.remove(m.piece), (m.piece = null));
      }
      function y(m, x) {
        x.depth > 0
          ? (o.virtualPiece
              ? o.virtualPiece.updateData(!1, m, t, r, n)
              : ((o.virtualPiece = new Cs(m, t, r, n)), h.add(o.virtualPiece)),
            x.piece.off('click'),
            o.virtualPiece.on('click', function (S) {
              o._rootToNode(x.parentNode);
            }))
          : o.virtualPiece && (h.remove(o.virtualPiece), (o.virtualPiece = null));
      }
    }),
    (e.prototype._initEvents = function () {
      var t = this;
      this.group.off('click'),
        this.group.on('click', function (r) {
          var n = !1,
            i = t.seriesModel.getViewRoot();
          i.eachNode(function (o) {
            if (!n && o.piece && o.piece === r.target) {
              var s = o.getModel().get('nodeClick');
              if (s === 'rootToNode') t._rootToNode(o);
              else if (s === 'link') {
                var l = o.getModel(),
                  u = l.get('link');
                if (u) {
                  var h = l.get('target', !0) || '_blank';
                  wl(u, h);
                }
              }
              n = !0;
            }
          });
        });
    }),
    (e.prototype._rootToNode = function (t) {
      t !== this.seriesModel.getViewRoot() &&
        this.api.dispatchAction({
          type: Rn,
          from: this.uid,
          seriesId: this.seriesModel.id,
          targetNode: t,
        });
    }),
    (e.prototype.containPoint = function (t, r) {
      var n = r.getData(),
        i = n.getItemLayout(0);
      if (i) {
        var o = t[0] - i.cx,
          s = t[1] - i.cy,
          l = Math.sqrt(o * o + s * s);
        return l <= i.r && l >= i.r0;
      }
    }),
    (e.type = 'sunburst'),
    e
  );
})(dt);
const Tx = Dx;
var Cx = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.ignoreStyleOnData = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      var n = { name: t.name, children: t.data };
      zu(n);
      var i = (this._levelModels = O(
          t.levels || [],
          function (l) {
            return new qt(l, this, r);
          },
          this,
        )),
        o = vi.createTree(n, this, s);
      function s(l) {
        l.wrapMethod('getItemModel', function (u, h) {
          var v = o.getNodeByDataIndex(h),
            c = i[v.depth];
          return c && (u.parentModel = c), u;
        });
      }
      return o.data;
    }),
    (e.prototype.optionUpdated = function () {
      this.resetViewRoot();
    }),
    (e.prototype.getDataParams = function (t) {
      var r = a.prototype.getDataParams.apply(this, arguments),
        n = this.getData().tree.getNodeByDataIndex(t);
      return (r.treePathInfo = xr(n, this)), r;
    }),
    (e.prototype.getLevelModel = function (t) {
      return this._levelModels && this._levelModels[t.depth];
    }),
    (e.prototype.getViewRoot = function () {
      return this._viewRoot;
    }),
    (e.prototype.resetViewRoot = function (t) {
      t ? (this._viewRoot = t) : (t = this._viewRoot);
      var r = this.getRawData().tree.root;
      (!t || (t !== r && !r.contains(t))) && (this._viewRoot = r);
    }),
    (e.prototype.enableAriaDecal = function () {
      lu(this);
    }),
    (e.type = 'series.sunburst'),
    (e.defaultOption = {
      z: 2,
      center: ['50%', '50%'],
      radius: [0, '75%'],
      clockwise: !0,
      startAngle: 90,
      minAngle: 0,
      stillShowZeroSum: !0,
      nodeClick: 'rootToNode',
      renderLabelForZeroData: !1,
      label: {
        rotate: 'radial',
        show: !0,
        opacity: 1,
        align: 'center',
        position: 'inside',
        distance: 5,
        silent: !0,
      },
      itemStyle: {
        borderWidth: 1,
        borderColor: 'white',
        borderType: 'solid',
        shadowBlur: 0,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1,
      },
      emphasis: { focus: 'descendant' },
      blur: { itemStyle: { opacity: 0.2 }, label: { opacity: 0.1 } },
      animationType: 'expansion',
      animationDuration: 1e3,
      animationDurationUpdate: 500,
      data: [],
      sort: 'desc',
    }),
    e
  );
})(mt);
function zu(a) {
  var e = 0;
  I(a.children, function (r) {
    zu(r);
    var n = r.value;
    H(n) && (n = n[0]), (e += n);
  });
  var t = a.value;
  H(t) && (t = t[0]),
    (t == null || isNaN(t)) && (t = e),
    t < 0 && (t = 0),
    H(a.value) ? (a.value[0] = t) : (a.value = t);
}
const Mx = Cx;
var Ls = Math.PI / 180;
function Lx(a, e, t) {
  e.eachSeriesByType(a, function (r) {
    var n = r.get('center'),
      i = r.get('radius');
    H(i) || (i = [0, i]), H(n) || (n = [n, n]);
    var o = t.getWidth(),
      s = t.getHeight(),
      l = Math.min(o, s),
      u = z(n[0], o),
      h = z(n[1], s),
      v = z(i[0], l / 2),
      c = z(i[1], l / 2),
      f = -r.get('startAngle') * Ls,
      d = r.get('minAngle') * Ls,
      p = r.getData().tree.root,
      g = r.getViewRoot(),
      y = g.depth,
      m = r.get('sort');
    m != null && Gu(g, m);
    var x = 0;
    I(g.children, function (R) {
      !isNaN(R.getValue()) && x++;
    });
    var S = g.getValue(),
      b = (Math.PI / (S || x)) * 2,
      w = g.depth > 0,
      _ = g.height - (w ? -1 : 1),
      A = (c - v) / (_ || 1),
      C = r.get('clockwise'),
      D = r.get('stillShowZeroSum'),
      T = C ? 1 : -1,
      L = function (R, N) {
        if (R) {
          var V = N;
          if (R !== p) {
            var G = R.getValue(),
              $ = S === 0 && D ? b : G * b;
            $ < d && ($ = d), (V = N + T * $);
            var F = R.depth - y - (w ? -1 : 1),
              j = v + A * F,
              Q = v + A * (F + 1),
              X = r.getLevelModel(R);
            if (X) {
              var at = X.get('r0', !0),
                Ht = X.get('r', !0),
                q = X.get('radius', !0);
              q != null && ((at = q[0]), (Ht = q[1])),
                at != null && (j = z(at, l / 2)),
                Ht != null && (Q = z(Ht, l / 2));
            }
            R.setLayout({
              angle: $,
              startAngle: N,
              endAngle: V,
              clockwise: C,
              cx: u,
              cy: h,
              r0: j,
              r: Q,
            });
          }
          if (R.children && R.children.length) {
            var Z = 0;
            I(R.children, function (et) {
              Z += L(et, N + Z);
            });
          }
          return V - N;
        }
      };
    if (w) {
      var P = v,
        M = v + A,
        E = Math.PI * 2;
      p.setLayout({
        angle: E,
        startAngle: f,
        endAngle: f + E,
        clockwise: C,
        cx: u,
        cy: h,
        r0: P,
        r: M,
      });
    }
    L(g, f);
  });
}
function Gu(a, e) {
  var t = a.children || [];
  (a.children = Ix(t, e)),
    t.length &&
      I(a.children, function (r) {
        Gu(r, e);
      });
}
function Ix(a, e) {
  if (st(e)) {
    var t = O(a, function (n, i) {
      var o = n.getValue();
      return {
        params: {
          depth: n.depth,
          height: n.height,
          dataIndex: n.dataIndex,
          getValue: function () {
            return o;
          },
        },
        index: i,
      };
    });
    return (
      t.sort(function (n, i) {
        return e(n.params, i.params);
      }),
      O(t, function (n) {
        return a[n.index];
      })
    );
  } else {
    var r = e === 'asc';
    return a.sort(function (n, i) {
      var o = (n.getValue() - i.getValue()) * (r ? 1 : -1);
      return o === 0 ? (n.dataIndex - i.dataIndex) * (r ? -1 : 1) : o;
    });
  }
}
function Px(a) {
  var e = {};
  function t(r, n, i) {
    for (var o = r; o && o.depth > 1; ) o = o.parentNode;
    var s = n.getColorFromPalette(o.name || o.dataIndex + '', e);
    return r.depth > 1 && tt(s) && (s = Bv(s, ((r.depth - 1) / (i - 1)) * 0.5)), s;
  }
  a.eachSeriesByType('sunburst', function (r) {
    var n = r.getData(),
      i = n.tree;
    i.eachNode(function (o) {
      var s = o.getModel(),
        l = s.getModel('itemStyle').getItemStyle();
      l.fill || (l.fill = t(o, r, i.root.height));
      var u = n.ensureUniqueItemVisual(o.dataIndex, 'style');
      W(u, l);
    });
  });
}
function Ex(a) {
  a.registerChartView(Tx),
    a.registerSeriesModel(Mx),
    a.registerLayout(it(Lx, 'sunburst')),
    a.registerProcessor(it(fr, 'sunburst')),
    a.registerVisual(Px),
    Ax(a);
}
var Is = { color: 'fill', borderColor: 'stroke' },
  Rx = {
    symbol: 1,
    symbolSize: 1,
    symbolKeepAspect: 1,
    legendIcon: 1,
    visualMeta: 1,
    liftZ: 1,
    decal: 1,
  },
  oe = bt(),
  kx = (function (a) {
    k(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.optionUpdated = function () {
        (this.currentZLevel = this.get('zlevel', !0)), (this.currentZ = this.get('z', !0));
      }),
      (e.prototype.getInitialData = function (t, r) {
        return Oe(null, this);
      }),
      (e.prototype.getDataParams = function (t, r, n) {
        var i = a.prototype.getDataParams.call(this, t, r);
        return n && (i.info = oe(n).info), i;
      }),
      (e.type = 'series.custom'),
      (e.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar']),
      (e.defaultOption = { coordinateSystem: 'cartesian2d', z: 2, legendHoverLink: !0, clip: !1 }),
      e
    );
  })(mt);
const Nx = kx;
function Vx(a, e) {
  return (
    (e = e || [0, 0]),
    O(
      ['x', 'y'],
      function (t, r) {
        var n = this.getAxis(t),
          i = e[r],
          o = a[r] / 2;
        return n.type === 'category'
          ? n.getBandWidth()
          : Math.abs(n.dataToCoord(i - o) - n.dataToCoord(i + o));
      },
      this,
    )
  );
}
function Bx(a) {
  var e = a.master.getRect();
  return {
    coordSys: { type: 'cartesian2d', x: e.x, y: e.y, width: e.width, height: e.height },
    api: {
      coord: function (t) {
        return a.dataToPoint(t);
      },
      size: U(Vx, a),
    },
  };
}
function zx(a, e) {
  return (
    (e = e || [0, 0]),
    O(
      [0, 1],
      function (t) {
        var r = e[t],
          n = a[t] / 2,
          i = [],
          o = [];
        return (
          (i[t] = r - n),
          (o[t] = r + n),
          (i[1 - t] = o[1 - t] = e[1 - t]),
          Math.abs(this.dataToPoint(i)[t] - this.dataToPoint(o)[t])
        );
      },
      this,
    )
  );
}
function Gx(a) {
  var e = a.getBoundingRect();
  return {
    coordSys: { type: 'geo', x: e.x, y: e.y, width: e.width, height: e.height, zoom: a.getZoom() },
    api: {
      coord: function (t) {
        return a.dataToPoint(t);
      },
      size: U(zx, a),
    },
  };
}
function Ox(a, e) {
  var t = this.getAxis(),
    r = e instanceof Array ? e[0] : e,
    n = (a instanceof Array ? a[0] : a) / 2;
  return t.type === 'category'
    ? t.getBandWidth()
    : Math.abs(t.dataToCoord(r - n) - t.dataToCoord(r + n));
}
function Wx(a) {
  var e = a.getRect();
  return {
    coordSys: { type: 'singleAxis', x: e.x, y: e.y, width: e.width, height: e.height },
    api: {
      coord: function (t) {
        return a.dataToPoint(t);
      },
      size: U(Ox, a),
    },
  };
}
function $x(a, e) {
  return (
    (e = e || [0, 0]),
    O(
      ['Radius', 'Angle'],
      function (t, r) {
        var n = 'get' + t + 'Axis',
          i = this[n](),
          o = e[r],
          s = a[r] / 2,
          l =
            i.type === 'category'
              ? i.getBandWidth()
              : Math.abs(i.dataToCoord(o - s) - i.dataToCoord(o + s));
        return t === 'Angle' && (l = (l * Math.PI) / 180), l;
      },
      this,
    )
  );
}
function Fx(a) {
  var e = a.getRadiusAxis(),
    t = a.getAngleAxis(),
    r = e.getExtent();
  return (
    r[0] > r[1] && r.reverse(),
    {
      coordSys: { type: 'polar', cx: a.cx, cy: a.cy, r: r[1], r0: r[0] },
      api: {
        coord: function (n) {
          var i = e.dataToRadius(n[0]),
            o = t.dataToAngle(n[1]),
            s = a.coordToPoint([i, o]);
          return s.push(i, (o * Math.PI) / 180), s;
        },
        size: U($x, a),
      },
    }
  );
}
function Hx(a) {
  var e = a.getRect(),
    t = a.getRangeInfo();
  return {
    coordSys: {
      type: 'calendar',
      x: e.x,
      y: e.y,
      width: e.width,
      height: e.height,
      cellWidth: a.getCellWidth(),
      cellHeight: a.getCellHeight(),
      rangeInfo: { start: t.start, end: t.end, weeks: t.weeks, dayCount: t.allDay },
    },
    api: {
      coord: function (r, n) {
        return a.dataToPoint(r, n);
      },
    },
  };
}
var se = 'emphasis',
  he = 'normal',
  mi = 'blur',
  xi = 'select',
  ge = [he, se, mi, xi],
  ln = {
    normal: ['itemStyle'],
    emphasis: [se, 'itemStyle'],
    blur: [mi, 'itemStyle'],
    select: [xi, 'itemStyle'],
  },
  un = { normal: ['label'], emphasis: [se, 'label'], blur: [mi, 'label'], select: [xi, 'label'] },
  Zx = ['x', 'y'],
  Ux = 'e\0\0',
  Pt = { normal: {}, emphasis: {}, blur: {}, select: {} },
  Yx = { cartesian2d: Bx, geo: Gx, single: Wx, polar: Fx, calendar: Hx };
function kn(a) {
  return a instanceof Vt;
}
function Nn(a) {
  return a instanceof er;
}
function Xx(a, e) {
  e.copyTransform(a),
    Nn(e) &&
      Nn(a) &&
      (e.setStyle(a.style),
      (e.z = a.z),
      (e.z2 = a.z2),
      (e.zlevel = a.zlevel),
      (e.invisible = a.invisible),
      (e.ignore = a.ignore),
      kn(e) && kn(a) && e.setShape(a.shape));
}
var qx = (function (a) {
  k(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, r, n, i) {
      this._progressiveEls = null;
      var o = this._data,
        s = t.getData(),
        l = this.group,
        u = Ps(t, s, r, n);
      o || l.removeAll(),
        s
          .diff(o)
          .add(function (v) {
            hn(n, null, v, u(v, i), t, l, s);
          })
          .remove(function (v) {
            var c = o.getItemGraphicEl(v);
            c && mr(c, oe(c).option, t);
          })
          .update(function (v, c) {
            var f = o.getItemGraphicEl(c);
            hn(n, f, v, u(v, i), t, l, s);
          })
          .execute();
      var h = t.get('clip', !0) ? Kn(t.coordinateSystem, !1, t) : null;
      h ? l.setClipPath(h) : l.removeClipPath(), (this._data = s);
    }),
    (e.prototype.incrementalPrepareRender = function (t, r, n) {
      this.group.removeAll(), (this._data = null);
    }),
    (e.prototype.incrementalRender = function (t, r, n, i, o) {
      var s = r.getData(),
        l = Ps(r, s, n, i),
        u = (this._progressiveEls = []);
      function h(f) {
        f.isGroup || ((f.incremental = !0), (f.ensureState('emphasis').hoverLayer = !0));
      }
      for (var v = t.start; v < t.end; v++) {
        var c = hn(null, null, v, l(v, o), r, this.group, s);
        c && (c.traverse(h), u.push(c));
      }
    }),
    (e.prototype.eachRendered = function (t) {
      or(this._progressiveEls || this.group, t);
    }),
    (e.prototype.filterForExposedEvent = function (t, r, n, i) {
      var o = r.element;
      if (o == null || n.name === o) return !0;
      for (; (n = n.__hostTarget || n.parent) && n !== this.group; ) if (n.name === o) return !0;
      return !1;
    }),
    (e.type = 'custom'),
    e
  );
})(dt);
const Kx = qx;
function Si(a) {
  var e = a.type,
    t;
  if (e === 'path') {
    var r = a.shape,
      n =
        r.width != null && r.height != null
          ? { x: r.x || 0, y: r.y || 0, width: r.width, height: r.height }
          : null,
      i = $u(r);
    (t = Ov(i, null, n, r.layout || 'center')), (oe(t).customPathData = i);
  } else if (e === 'image') (t = new ye({})), (oe(t).customImagePath = a.style.image);
  else if (e === 'text') t = new gt({});
  else if (e === 'group') t = new K();
  else {
    if (e === 'compoundPath') throw new Error('"compoundPath" is not supported yet.');
    var o = ol(e);
    if (!o) {
      var s = '';
      ut(s);
    }
    t = new o();
  }
  return (
    (oe(t).customGraphicType = e),
    (t.name = a.name),
    (t.z2EmphasisLift = 1),
    (t.z2SelectLift = 1),
    t
  );
}
function bi(a, e, t, r, n, i, o) {
  Ul(e);
  var s = n && n.normal.cfg;
  s && e.setTextConfig(s), r && r.transition == null && (r.transition = Zx);
  var l = r && r.style;
  if (l) {
    if (e.type === 'text') {
      var u = l;
      B(u, 'textFill') && (u.fill = u.textFill), B(u, 'textStroke') && (u.stroke = u.textStroke);
    }
    var h = void 0,
      v = kn(e) ? l.decal : null;
    a && v && ((v.dirty = !0), (h = Cl(v, a))), (l.__decalPattern = h);
  }
  if (Nn(e) && l) {
    var h = l.__decalPattern;
    h && (l.decal = h);
  }
  Ra(e, r, i, { dataIndex: t, isInit: o, clearStyle: !0 }), Fa(e, r.keyframeAnimation, i);
}
function Ou(a, e, t, r, n) {
  var i = e.isGroup ? null : e,
    o = n && n[a].cfg;
  if (i) {
    var s = i.ensureState(a);
    if (r === !1) {
      var l = i.getState(a);
      l && (l.style = null);
    } else s.style = r || null;
    o && (s.textConfig = o), Ga(i);
  }
}
function jx(a, e, t) {
  if (!a.isGroup) {
    var r = a,
      n = t.currentZ,
      i = t.currentZLevel;
    (r.z = n), (r.zlevel = i);
    var o = e.z2;
    o != null && (r.z2 = o || 0);
    for (var s = 0; s < ge.length; s++) Qx(r, e, ge[s]);
  }
}
function Qx(a, e, t) {
  var r = t === he,
    n = r ? e : qa(e, t),
    i = n ? n.z2 : null,
    o;
  i != null && ((o = r ? a : a.ensureState(t)), (o.z2 = i || 0));
}
function Ps(a, e, t, r) {
  var n = a.get('renderItem'),
    i = a.coordinateSystem,
    o = {};
  i && (o = i.prepareCustoms ? i.prepareCustoms(i) : Yx[i.type](i));
  for (
    var s = nt(
        {
          getWidth: r.getWidth,
          getHeight: r.getHeight,
          getZr: r.getZr,
          getDevicePixelRatio: r.getDevicePixelRatio,
          value: S,
          style: w,
          ordinalRawValue: b,
          styleEmphasis: _,
          visual: D,
          barLayout: T,
          currentSeriesIndices: L,
          font: P,
        },
        o.api || {},
      ),
      l = {
        context: {},
        seriesId: a.id,
        seriesName: a.name,
        seriesIndex: a.seriesIndex,
        coordSys: o.coordSys,
        dataInsideLength: e.count(),
        encode: Jx(a.getData()),
      },
      u,
      h,
      v = {},
      c = {},
      f = {},
      d = {},
      p = 0;
    p < ge.length;
    p++
  ) {
    var g = ge[p];
    (f[g] = a.getModel(ln[g])), (d[g] = a.getModel(un[g]));
  }
  function y(M) {
    return M === u ? h || (h = e.getItemModel(M)) : e.getItemModel(M);
  }
  function m(M, E) {
    return e.hasItemOption
      ? M === u
        ? v[E] || (v[E] = y(M).getModel(ln[E]))
        : y(M).getModel(ln[E])
      : f[E];
  }
  function x(M, E) {
    return e.hasItemOption
      ? M === u
        ? c[E] || (c[E] = y(M).getModel(un[E]))
        : y(M).getModel(un[E])
      : d[E];
  }
  return function (M, E) {
    return (
      (u = M),
      (h = null),
      (v = {}),
      (c = {}),
      n &&
        n(
          nt({ dataIndexInside: M, dataIndex: e.getRawIndex(M), actionType: E ? E.type : null }, l),
          s,
        )
    );
  };
  function S(M, E) {
    return E == null && (E = u), e.getStore().get(e.getDimensionIndex(M || 0), E);
  }
  function b(M, E) {
    E == null && (E = u), (M = M || 0);
    var R = e.getDimensionInfo(M);
    if (!R) {
      var N = e.getDimensionIndex(M);
      return N >= 0 ? e.getStore().get(N, E) : void 0;
    }
    var V = e.get(R.name, E),
      G = R && R.ordinalMeta;
    return G ? G.categories[V] : V;
  }
  function w(M, E) {
    E == null && (E = u);
    var R = e.getItemVisual(E, 'style'),
      N = R && R.fill,
      V = R && R.opacity,
      G = m(E, he).getItemStyle();
    N != null && (G.fill = N), V != null && (G.opacity = V);
    var $ = { inheritColor: tt(N) ? N : '#000' },
      F = x(E, he),
      j = yt(F, null, $, !1, !0);
    j.text = F.getShallow('show') ? Dt(a.getFormattedLabel(E, he), _n(e, E)) : null;
    var Q = Zi(F, $, !1);
    return C(M, G), (G = oo(G, j, Q)), M && A(G, M), (G.legacy = !0), G;
  }
  function _(M, E) {
    E == null && (E = u);
    var R = m(E, se).getItemStyle(),
      N = x(E, se),
      V = yt(N, null, null, !0, !0);
    V.text = N.getShallow('show')
      ? gr(a.getFormattedLabel(E, se), a.getFormattedLabel(E, he), _n(e, E))
      : null;
    var G = Zi(N, null, !0);
    return C(M, R), (R = oo(R, V, G)), M && A(R, M), (R.legacy = !0), R;
  }
  function A(M, E) {
    for (var R in E) B(E, R) && (M[R] = E[R]);
  }
  function C(M, E) {
    M &&
      (M.textFill && (E.textFill = M.textFill),
      M.textPosition && (E.textPosition = M.textPosition));
  }
  function D(M, E) {
    if ((E == null && (E = u), B(Is, M))) {
      var R = e.getItemVisual(E, 'style');
      return R ? R[Is[M]] : null;
    }
    if (B(Rx, M)) return e.getItemVisual(E, M);
  }
  function T(M) {
    if (i.type === 'cartesian2d') {
      var E = i.getBaseAxis();
      return zv(nt({ axis: E }, M));
    }
  }
  function L() {
    return t.getCurrentSeriesIndices();
  }
  function P(M) {
    return Gv(M, t);
  }
}
function Jx(a) {
  var e = {};
  return (
    I(a.dimensions, function (t) {
      var r = a.getDimensionInfo(t);
      if (!r.isExtraCoord) {
        var n = r.coordDim,
          i = (e[n] = e[n] || []);
        i[r.coordDimIndex] = a.getDimensionIndex(t);
      }
    }),
    e
  );
}
function hn(a, e, t, r, n, i, o) {
  if (!r) {
    i.remove(e);
    return;
  }
  var s = wi(a, e, t, r, n, i);
  return s && o.setItemGraphicEl(t, s), s && ft(s, r.focus, r.blurScope, r.emphasisDisabled), s;
}
function wi(a, e, t, r, n, i) {
  var o = -1,
    s = e;
  e && Wu(e, r, n) && ((o = Ct(i.childrenRef(), e)), (e = null));
  var l = !e,
    u = e;
  u ? u.clearStates() : ((u = Si(r)), s && Xx(s, u)),
    r.morph === !1 ? (u.disableMorphing = !0) : u.disableMorphing && (u.disableMorphing = !1),
    (Pt.normal.cfg =
      Pt.normal.conOpt =
      Pt.emphasis.cfg =
      Pt.emphasis.conOpt =
      Pt.blur.cfg =
      Pt.blur.conOpt =
      Pt.select.cfg =
      Pt.select.conOpt =
        null),
    (Pt.isLegacy = !1),
    eS(u, t, r, n, l, Pt),
    tS(u, t, r, n, l),
    bi(a, u, t, r, Pt, n, l),
    B(r, 'info') && (oe(u).info = r.info);
  for (var h = 0; h < ge.length; h++) {
    var v = ge[h];
    if (v !== he) {
      var c = qa(r, v),
        f = _i(r, c, v);
      Ou(v, u, c, f, Pt);
    }
  }
  return (
    jx(u, r, n), r.type === 'group' && aS(a, u, t, r, n), o >= 0 ? i.replaceAt(u, o) : i.add(u), u
  );
}
function Wu(a, e, t) {
  var r = oe(a),
    n = e.type,
    i = e.shape,
    o = e.style;
  return (
    t.isUniversalTransitionEnabled() ||
    (n != null && n !== r.customGraphicType) ||
    (n === 'path' && oS(i) && $u(i) !== r.customPathData) ||
    (n === 'image' && B(o, 'image') && o.image !== r.customImagePath)
  );
}
function tS(a, e, t, r, n) {
  var i = t.clipPath;
  if (i === !1) a && a.getClipPath() && a.removeClipPath();
  else if (i) {
    var o = a.getClipPath();
    o && Wu(o, i, r) && (o = null),
      o || ((o = Si(i)), a.setClipPath(o)),
      bi(null, o, e, i, null, r, n);
  }
}
function eS(a, e, t, r, n, i) {
  if (!a.isGroup) {
    Es(t, null, i), Es(t, se, i);
    var o = i.normal.conOpt,
      s = i.emphasis.conOpt,
      l = i.blur.conOpt,
      u = i.select.conOpt;
    if (o != null || s != null || u != null || l != null) {
      var h = a.getTextContent();
      if (o === !1) h && a.removeTextContent();
      else {
        (o = i.normal.conOpt = o || { type: 'text' }),
          h ? h.clearStates() : ((h = Si(o)), a.setTextContent(h)),
          bi(null, h, e, o, null, r, n);
        for (var v = o && o.style, c = 0; c < ge.length; c++) {
          var f = ge[c];
          if (f !== he) {
            var d = i[f].conOpt;
            Ou(f, h, d, _i(o, d, f), null);
          }
        }
        v ? h.dirty() : h.markRedraw();
      }
    }
  }
}
function Es(a, e, t) {
  var r = e ? qa(a, e) : a,
    n = e ? _i(a, r, se) : a.style,
    i = a.type,
    o = r ? r.textConfig : null,
    s = a.textContent,
    l = s ? (e ? qa(s, e) : s) : null;
  if (n && (t.isLegacy || Wl(n, i, !!o, !!l))) {
    t.isLegacy = !0;
    var u = $l(n, i, !e);
    !o && u.textConfig && (o = u.textConfig), !l && u.textContent && (l = u.textContent);
  }
  if (!e && l) {
    var h = l;
    !h.type && (h.type = 'text');
  }
  var v = e ? t[e] : t.normal;
  (v.cfg = o), (v.conOpt = l);
}
function qa(a, e) {
  return e ? (a ? a[e] : null) : a;
}
function _i(a, e, t) {
  var r = e && e.style;
  return r == null && t === se && a && (r = a.styleEmphasis), r;
}
function aS(a, e, t, r, n) {
  var i = r.children,
    o = i ? i.length : 0,
    s = r.$mergeChildren,
    l = s === 'byName' || r.diffChildrenByName,
    u = s === !1;
  if (!(!o && !l && !u)) {
    if (l) {
      nS({
        api: a,
        oldChildren: e.children() || [],
        newChildren: i || [],
        dataIndex: t,
        seriesModel: n,
        group: e,
      });
      return;
    }
    u && e.removeAll();
    for (var h = 0; h < o; h++) {
      var v = i[h],
        c = e.childAt(h);
      v ? (v.ignore == null && (v.ignore = !1), wi(a, c, t, v, n, e)) : (c.ignore = !0);
    }
    for (var f = e.childCount() - 1; f >= h; f--) {
      var d = e.childAt(f);
      rS(e, d, n);
    }
  }
}
function rS(a, e, t) {
  e && mr(e, oe(a).option, t);
}
function nS(a) {
  new pr(a.oldChildren, a.newChildren, Rs, Rs, a).add(ks).update(ks).remove(iS).execute();
}
function Rs(a, e) {
  var t = a && a.name;
  return t != null ? t : Ux + e;
}
function ks(a, e) {
  var t = this.context,
    r = a != null ? t.newChildren[a] : null,
    n = e != null ? t.oldChildren[e] : null;
  wi(t.api, n, t.dataIndex, r, t.seriesModel, t.group);
}
function iS(a) {
  var e = this.context,
    t = e.oldChildren[a];
  t && mr(t, oe(t).option, e.seriesModel);
}
function $u(a) {
  return a && (a.pathData || a.d);
}
function oS(a) {
  return a && (B(a, 'pathData') || B(a, 'd'));
}
function sS(a) {
  a.registerChartView(Kx), a.registerSeriesModel(Nx);
}
var vn = Math.sin,
  cn = Math.cos,
  Fu = Math.PI,
  Se = Math.PI * 2,
  lS = 180 / Fu,
  uS = (function () {
    function a() {}
    return (
      (a.prototype.reset = function (e) {
        (this._start = !0), (this._d = []), (this._str = ''), (this._p = Math.pow(10, e || 4));
      }),
      (a.prototype.moveTo = function (e, t) {
        this._add('M', e, t);
      }),
      (a.prototype.lineTo = function (e, t) {
        this._add('L', e, t);
      }),
      (a.prototype.bezierCurveTo = function (e, t, r, n, i, o) {
        this._add('C', e, t, r, n, i, o);
      }),
      (a.prototype.quadraticCurveTo = function (e, t, r, n) {
        this._add('Q', e, t, r, n);
      }),
      (a.prototype.arc = function (e, t, r, n, i, o) {
        this.ellipse(e, t, r, r, 0, n, i, o);
      }),
      (a.prototype.ellipse = function (e, t, r, n, i, o, s, l) {
        var u = s - o,
          h = !l,
          v = Math.abs(u),
          c = ue(v - Se) || (h ? u >= Se : -u >= Se),
          f = u > 0 ? u % Se : (u % Se) + Se,
          d = !1;
        c ? (d = !0) : ue(v) ? (d = !1) : (d = f >= Fu == !!h);
        var p = e + r * cn(o),
          g = t + n * vn(o);
        this._start && this._add('M', p, g);
        var y = Math.round(i * lS);
        if (c) {
          var m = 1 / this._p,
            x = (h ? 1 : -1) * (Se - m);
          this._add('A', r, n, y, 1, +h, e + r * cn(o + x), t + n * vn(o + x)),
            m > 0.01 && this._add('A', r, n, y, 0, +h, p, g);
        } else {
          var S = e + r * cn(s),
            b = t + n * vn(s);
          this._add('A', r, n, y, +d, +h, S, b);
        }
      }),
      (a.prototype.rect = function (e, t, r, n) {
        this._add('M', e, t),
          this._add('l', r, 0),
          this._add('l', 0, n),
          this._add('l', -r, 0),
          this._add('Z');
      }),
      (a.prototype.closePath = function () {
        this._d.length > 0 && this._add('Z');
      }),
      (a.prototype._add = function (e, t, r, n, i, o, s, l, u) {
        for (var h = [], v = this._p, c = 1; c < arguments.length; c++) {
          var f = arguments[c];
          if (isNaN(f)) {
            this._invalid = !0;
            return;
          }
          h.push(Math.round(f * v) / v);
        }
        this._d.push(e + h.join(' ')), (this._start = e === 'Z');
      }),
      (a.prototype.generateStr = function () {
        (this._str = this._invalid ? '' : this._d.join('')), (this._d = []);
      }),
      (a.prototype.getStr = function () {
        return this._str;
      }),
      a
    );
  })();
const Hu = uS;
var ta = 'none',
  hS = Math.round;
function vS(a) {
  var e = a.fill;
  return e != null && e !== ta;
}
function cS(a) {
  var e = a.stroke;
  return e != null && e !== ta;
}
var Vn = ['lineCap', 'miterLimit', 'lineJoin'],
  fS = O(Vn, function (a) {
    return 'stroke-' + a.toLowerCase();
  });
function dS(a, e, t, r) {
  var n = e.opacity == null ? 1 : e.opacity;
  if (t instanceof ye) {
    a('opacity', n);
    return;
  }
  if (vS(e)) {
    var i = ia(e.fill);
    a('fill', i.color);
    var o = e.fillOpacity != null ? e.fillOpacity * i.opacity * n : i.opacity * n;
    (r || o < 1) && a('fill-opacity', o);
  } else a('fill', ta);
  if (cS(e)) {
    var s = ia(e.stroke);
    a('stroke', s.color);
    var l = e.strokeNoScale ? t.getLineScale() : 1,
      u = l ? (e.lineWidth || 0) / l : 0,
      h = e.strokeOpacity != null ? e.strokeOpacity * s.opacity * n : s.opacity * n,
      v = e.strokeFirst;
    if (
      ((r || u !== 1) && a('stroke-width', u),
      (r || v) && a('paint-order', v ? 'stroke' : 'fill'),
      (r || h < 1) && a('stroke-opacity', h),
      e.lineDash)
    ) {
      var c = Wv(t),
        f = c[0],
        d = c[1];
      f &&
        ((d = hS(d || 0)),
        a('stroke-dasharray', f.join(',')),
        (d || r) && a('stroke-dashoffset', d));
    } else r && a('stroke-dasharray', ta);
    for (var p = 0; p < Vn.length; p++) {
      var g = Vn[p];
      if (r || e[g] !== Ui[g]) {
        var y = e[g] || Ui[g];
        y && a(fS[p], y);
      }
    }
  } else r && a('stroke', ta);
}
var Zu = 'http://www.w3.org/2000/svg',
  Uu = 'http://www.w3.org/1999/xlink',
  pS = 'http://www.w3.org/2000/xmlns/',
  gS = 'http://www.w3.org/XML/1998/namespace';
function Yu(a) {
  return document.createElementNS(Zu, a);
}
function ct(a, e, t, r, n) {
  return { tag: a, attrs: t || {}, children: r, text: n, key: e };
}
function yS(a, e) {
  var t = [];
  if (e)
    for (var r in e) {
      var n = e[r],
        i = r;
      n !== !1 && (n !== !0 && n != null && (i += '="' + n + '"'), t.push(i));
    }
  return '<' + a + ' ' + t.join(' ') + '>';
}
function mS(a) {
  return '</' + a + '>';
}
function Ai(a, e) {
  e = e || {};
  var t = e.newline
    ? `
`
    : '';
  function r(n) {
    var i = n.children,
      o = n.tag,
      s = n.attrs;
    return (
      yS(o, s) +
      $v(n.text) +
      (i
        ? '' +
          t +
          O(i, function (l) {
            return r(l);
          }).join(t) +
          t
        : '') +
      mS(o)
    );
  }
  return r(a);
}
function xS(a, e, t) {
  t = t || {};
  var r = t.newline
      ? `
`
      : '',
    n = ' {' + r,
    i = r + '}',
    o = O(pt(a), function (l) {
      return (
        l +
        n +
        O(pt(a[l]), function (u) {
          return u + ':' + a[l][u] + ';';
        }).join(r) +
        i
      );
    }).join(r),
    s = O(pt(e), function (l) {
      return (
        '@keyframes ' +
        l +
        n +
        O(pt(e[l]), function (u) {
          return (
            u +
            n +
            O(pt(e[l][u]), function (h) {
              var v = e[l][u][h];
              return h === 'd' && (v = 'path("' + v + '")'), h + ':' + v + ';';
            }).join(r) +
            i
          );
        }).join(r) +
        i
      );
    }).join(r);
  return !o && !s ? '' : ['<![CDATA[', o, s, ']]>'].join(r);
}
function Bn(a) {
  return {
    zrId: a,
    shadowCache: {},
    patternCache: {},
    gradientCache: {},
    clipPathCache: {},
    defs: {},
    cssNodes: {},
    cssAnims: {},
    cssClassIdx: 0,
    cssAnimIdx: 0,
    shadowIdx: 0,
    gradientIdx: 0,
    patternIdx: 0,
    clipPathIdx: 0,
  };
}
function Ns(a, e, t, r) {
  return ct(
    'svg',
    'root',
    {
      width: a,
      height: e,
      xmlns: Zu,
      'xmlns:xlink': Uu,
      version: '1.1',
      baseProfile: 'full',
      viewBox: r ? '0 0 ' + a + ' ' + e : !1,
    },
    t,
  );
}
var Vs = {
    cubicIn: '0.32,0,0.67,0',
    cubicOut: '0.33,1,0.68,1',
    cubicInOut: '0.65,0,0.35,1',
    quadraticIn: '0.11,0,0.5,0',
    quadraticOut: '0.5,1,0.89,1',
    quadraticInOut: '0.45,0,0.55,1',
    quarticIn: '0.5,0,0.75,0',
    quarticOut: '0.25,1,0.5,1',
    quarticInOut: '0.76,0,0.24,1',
    quinticIn: '0.64,0,0.78,0',
    quinticOut: '0.22,1,0.36,1',
    quinticInOut: '0.83,0,0.17,1',
    sinusoidalIn: '0.12,0,0.39,0',
    sinusoidalOut: '0.61,1,0.88,1',
    sinusoidalInOut: '0.37,0,0.63,1',
    exponentialIn: '0.7,0,0.84,0',
    exponentialOut: '0.16,1,0.3,1',
    exponentialInOut: '0.87,0,0.13,1',
    circularIn: '0.55,0,1,0.45',
    circularOut: '0,0.55,0.45,1',
    circularInOut: '0.85,0,0.15,1',
  },
  _e = 'transform-origin';
function SS(a, e, t) {
  var r = W({}, a.shape);
  W(r, e), a.buildPath(t, r);
  var n = new Hu();
  return n.reset(Ll(a)), t.rebuildPath(n, 1), n.generateStr(), n.getStr();
}
function bS(a, e) {
  var t = e.originX,
    r = e.originY;
  (t || r) && (a[_e] = t + 'px ' + r + 'px');
}
var wS = {
  fill: 'fill',
  opacity: 'opacity',
  lineWidth: 'stroke-width',
  lineDashOffset: 'stroke-dashoffset',
};
function Xu(a, e) {
  var t = e.zrId + '-ani-' + e.cssAnimIdx++;
  return (e.cssAnims[t] = a), t;
}
function _S(a, e, t) {
  var r = a.shape.paths,
    n = {},
    i,
    o;
  if (
    (I(r, function (l) {
      var u = Bn(t.zrId);
      (u.animation = !0), br(l, {}, u, !0);
      var h = u.cssAnims,
        v = u.cssNodes,
        c = pt(h),
        f = c.length;
      if (f) {
        o = c[f - 1];
        var d = h[o];
        for (var p in d) {
          var g = d[p];
          (n[p] = n[p] || { d: '' }), (n[p].d += g.d || '');
        }
        for (var y in v) {
          var m = v[y].animation;
          m.indexOf(o) >= 0 && (i = m);
        }
      }
    }),
    !!i)
  ) {
    e.d = !1;
    var s = Xu(n, t);
    return i.replace(o, s);
  }
}
function Bs(a) {
  return tt(a) ? (Vs[a] ? 'cubic-bezier(' + Vs[a] + ')' : Hv(a) ? a : '') : '';
}
function br(a, e, t, r) {
  var n = a.animators,
    i = n.length,
    o = [];
  if (a instanceof Fv) {
    var s = _S(a, e, t);
    if (s) o.push(s);
    else if (!i) return;
  } else if (!i) return;
  for (var l = {}, u = 0; u < i; u++) {
    var h = n[u],
      v = [h.getMaxTime() / 1e3 + 's'],
      c = Bs(h.getClip().easing),
      f = h.getDelay();
    c ? v.push(c) : v.push('linear'), f && v.push(f / 1e3 + 's'), h.getLoop() && v.push('infinite');
    var d = v.join(' ');
    (l[d] = l[d] || [d, []]), l[d][1].push(h);
  }
  function p(m) {
    var x = m[1],
      S = x.length,
      b = {},
      w = {},
      _ = {},
      A = 'animation-timing-function';
    function C(Z, et, J) {
      for (var rt = Z.getTracks(), xt = Z.getMaxTime(), St = 0; St < rt.length; St++) {
        var ot = rt[St];
        if (ot.needsAnimate()) {
          var wt = ot.keyframes,
            _t = ot.propName;
          if ((J && (_t = J(_t)), _t))
            for (var Zt = 0; Zt < wt.length; Zt++) {
              var me = wt[Zt],
                xe = Math.round((me.time / xt) * 100) + '%',
                Mi = Bs(me.easing),
                Li = me.rawValue;
              (tt(Li) || Ot(Li)) &&
                ((et[xe] = et[xe] || {}), (et[xe][_t] = me.rawValue), Mi && (et[xe][A] = Mi));
            }
        }
      }
    }
    for (var D = 0; D < S; D++) {
      var T = x[D],
        L = T.targetName;
      L ? L === 'shape' && C(T, w) : !r && C(T, b);
    }
    for (var P in b) {
      var M = {};
      Zv(M, a), W(M, b[P]);
      var E = Ml(M),
        R = b[P][A];
      (_[P] = E ? { transform: E } : {}), bS(_[P], M), R && (_[P][A] = R);
    }
    var N,
      V = !0;
    for (var P in w) {
      _[P] = _[P] || {};
      var G = !N,
        R = w[P][A];
      G && (N = new Uv());
      var $ = N.len();
      N.reset(), (_[P].d = SS(a, w[P], N));
      var F = N.len();
      if (!G && $ !== F) {
        V = !1;
        break;
      }
      R && (_[P][A] = R);
    }
    if (!V) for (var P in _) delete _[P].d;
    if (!r)
      for (var D = 0; D < S; D++) {
        var T = x[D],
          L = T.targetName;
        L === 'style' &&
          C(T, _, function (rt) {
            return wS[rt];
          });
      }
    for (var j = pt(_), Q = !0, X, D = 1; D < j.length; D++) {
      var at = j[D - 1],
        Ht = j[D];
      if (_[at][_e] !== _[Ht][_e]) {
        Q = !1;
        break;
      }
      X = _[at][_e];
    }
    if (Q && X) {
      for (var P in _) _[P][_e] && delete _[P][_e];
      e[_e] = X;
    }
    if (
      Ft(j, function (Z) {
        return pt(_[Z]).length > 0;
      }).length
    ) {
      var q = Xu(_, t);
      return q + ' ' + m[0] + ' both';
    }
  }
  for (var g in l) {
    var s = p(l[g]);
    s && o.push(s);
  }
  if (o.length) {
    var y = t.zrId + '-cls-' + t.cssClassIdx++;
    (t.cssNodes['.' + y] = { animation: o.join(',') }), (e.class = y);
  }
}
var va = Math.round;
function qu(a) {
  return a && tt(a.src);
}
function Ku(a) {
  return a && st(a.toDataURL);
}
function Di(a, e, t, r) {
  dS(
    function (n, i) {
      var o = n === 'fill' || n === 'stroke';
      o && Il(i) ? Qu(e, a, n, r) : o && Qn(i) ? Ju(t, a, n, r) : (a[n] = i);
    },
    e,
    t,
    !1,
  ),
    IS(t, a, r);
}
function zs(a) {
  return ue(a[0] - 1) && ue(a[1]) && ue(a[2]) && ue(a[3] - 1);
}
function AS(a) {
  return ue(a[4]) && ue(a[5]);
}
function Ti(a, e, t) {
  if (e && !(AS(e) && zs(e))) {
    var r = t ? 10 : 1e4;
    a.transform = zs(e) ? 'translate(' + va(e[4] * r) / r + ' ' + va(e[5] * r) / r + ')' : oc(e);
  }
}
function Gs(a, e, t) {
  for (var r = a.points, n = [], i = 0; i < r.length; i++)
    n.push(va(r[i][0] * t) / t), n.push(va(r[i][1] * t) / t);
  e.points = n.join(' ');
}
function Os(a) {
  return !a.smooth;
}
function DS(a) {
  var e = O(a, function (t) {
    return typeof t == 'string' ? [t, t] : t;
  });
  return function (t, r, n) {
    for (var i = 0; i < e.length; i++) {
      var o = e[i],
        s = t[o[0]];
      s != null && (r[o[1]] = va(s * n) / n);
    }
  };
}
var TS = { circle: [DS(['cx', 'cy', 'r'])], polyline: [Gs, Os], polygon: [Gs, Os] };
function CS(a) {
  for (var e = a.animators, t = 0; t < e.length; t++) if (e[t].targetName === 'shape') return !0;
  return !1;
}
function ju(a, e) {
  var t = a.style,
    r = a.shape,
    n = TS[a.type],
    i = {},
    o = e.animation,
    s = 'path',
    l = a.style.strokePercent,
    u = (e.compress && Ll(a)) || 4;
  if (n && !e.willUpdate && !(n[1] && !n[1](r)) && !(o && CS(a)) && !(l < 1)) {
    s = a.type;
    var h = Math.pow(10, u);
    n[0](r, i, h);
  } else {
    var v = !a.path || a.shapeChanged();
    a.path || a.createPathProxy();
    var c = a.path;
    v && (c.beginPath(), a.buildPath(c, a.shape), a.pathUpdated());
    var f = c.getVersion(),
      d = a,
      p = d.__svgPathBuilder;
    (d.__svgPathVersion !== f || !p || l !== d.__svgPathStrokePercent) &&
      (p || (p = d.__svgPathBuilder = new Hu()),
      p.reset(u),
      c.rebuildPath(p, l),
      p.generateStr(),
      (d.__svgPathVersion = f),
      (d.__svgPathStrokePercent = l)),
      (i.d = p.getStr());
  }
  return Ti(i, a.transform), Di(i, t, a, e), e.animation && br(a, i, e), ct(s, a.id + '', i);
}
function MS(a, e) {
  var t = a.style,
    r = t.image;
  if ((r && !tt(r) && (qu(r) ? (r = r.src) : Ku(r) && (r = r.toDataURL())), !!r)) {
    var n = t.x || 0,
      i = t.y || 0,
      o = t.width,
      s = t.height,
      l = { href: r, width: o, height: s };
    return (
      n && (l.x = n),
      i && (l.y = i),
      Ti(l, a.transform),
      Di(l, t, a, e),
      e.animation && br(a, l, e),
      ct('image', a.id + '', l)
    );
  }
}
function LS(a, e) {
  var t = a.style,
    r = t.text;
  if ((r != null && (r += ''), !(!r || isNaN(t.x) || isNaN(t.y)))) {
    var n = t.font || Jv,
      i = t.x || 0,
      o = tc(t.y || 0, ec(n), t.textBaseline),
      s = ac[t.textAlign] || t.textAlign,
      l = { 'dominant-baseline': 'central', 'text-anchor': s };
    if (rc(t)) {
      var u = '',
        h = t.fontStyle,
        v = nc(t.fontSize);
      if (!parseFloat(v)) return;
      var c = t.fontFamily || ic,
        f = t.fontWeight;
      (u += 'font-size:' + v + ';font-family:' + c + ';'),
        h && h !== 'normal' && (u += 'font-style:' + h + ';'),
        f && f !== 'normal' && (u += 'font-weight:' + f + ';'),
        (l.style = u);
    } else l.style = 'font: ' + n;
    return (
      r.match(/\s/) && (l['xml:space'] = 'preserve'),
      i && (l.x = i),
      o && (l.y = o),
      Ti(l, a.transform),
      Di(l, t, a, e),
      e.animation && br(a, l, e),
      ct('text', a.id + '', l, void 0, r)
    );
  }
}
function Ws(a, e) {
  if (a instanceof Vt) return ju(a, e);
  if (a instanceof ye) return MS(a, e);
  if (a instanceof Yv) return LS(a, e);
}
function IS(a, e, t) {
  var r = a.style;
  if (sc(r)) {
    var n = lc(a),
      i = t.shadowCache,
      o = i[n];
    if (!o) {
      var s = a.getGlobalScale(),
        l = s[0],
        u = s[1];
      if (!l || !u) return;
      var h = r.shadowOffsetX || 0,
        v = r.shadowOffsetY || 0,
        c = r.shadowBlur,
        f = ia(r.shadowColor),
        d = f.opacity,
        p = f.color,
        g = c / 2 / l,
        y = c / 2 / u,
        m = g + ' ' + y;
      (o = t.zrId + '-s' + t.shadowIdx++),
        (t.defs[o] = ct(
          'filter',
          o,
          { id: o, x: '-100%', y: '-100%', width: '300%', height: '300%' },
          [
            ct('feDropShadow', '', {
              dx: h / l,
              dy: v / u,
              stdDeviation: m,
              'flood-color': p,
              'flood-opacity': d,
            }),
          ],
        )),
        (i[n] = o);
    }
    e.filter = yr(o);
  }
}
function Qu(a, e, t, r) {
  var n = a[t],
    i,
    o = { gradientUnits: n.global ? 'userSpaceOnUse' : 'objectBoundingBox' };
  if (Xv(n)) (i = 'linearGradient'), (o.x1 = n.x), (o.y1 = n.y), (o.x2 = n.x2), (o.y2 = n.y2);
  else if (qv(n))
    (i = 'radialGradient'), (o.cx = Dt(n.x, 0.5)), (o.cy = Dt(n.y, 0.5)), (o.r = Dt(n.r, 0.5));
  else return;
  for (var s = n.colorStops, l = [], u = 0, h = s.length; u < h; ++u) {
    var v = Kv(s[u].offset) * 100 + '%',
      c = s[u].color,
      f = ia(c),
      d = f.color,
      p = f.opacity,
      g = { offset: v };
    (g['stop-color'] = d), p < 1 && (g['stop-opacity'] = p), l.push(ct('stop', u + '', g));
  }
  var y = ct(i, '', o, l),
    m = Ai(y),
    x = r.gradientCache,
    S = x[m];
  S ||
    ((S = r.zrId + '-g' + r.gradientIdx++), (x[m] = S), (o.id = S), (r.defs[S] = ct(i, S, o, l))),
    (e[t] = yr(S));
}
function Ju(a, e, t, r) {
  var n = a.style[t],
    i = a.getBoundingRect(),
    o = {},
    s = n.repeat,
    l = s === 'no-repeat',
    u = s === 'repeat-x',
    h = s === 'repeat-y',
    v;
  if (jv(n)) {
    var c = n.imageWidth,
      f = n.imageHeight,
      d = void 0,
      p = n.image;
    if (
      (tt(p) ? (d = p) : qu(p) ? (d = p.src) : Ku(p) && (d = p.toDataURL()),
      typeof Image == 'undefined')
    ) {
      var g = 'Image width/height must been given explictly in svg-ssr renderer.';
      xn(c, g), xn(f, g);
    } else if (c == null || f == null) {
      var y = function (D, T) {
          if (D) {
            var L = D.elm,
              P = c || T.width,
              M = f || T.height;
            D.tag === 'pattern' &&
              (u ? ((M = 1), (P /= i.width)) : h && ((P = 1), (M /= i.height))),
              (D.attrs.width = P),
              (D.attrs.height = M),
              L && (L.setAttribute('width', P), L.setAttribute('height', M));
          }
        },
        m = Qv(d, null, a, function (D) {
          l || y(w, D), y(v, D);
        });
      m && m.width && m.height && ((c = c || m.width), (f = f || m.height));
    }
    (v = ct('image', 'img', { href: d, width: c, height: f })), (o.width = c), (o.height = f);
  } else n.svgElement && ((v = Lt(n.svgElement)), (o.width = n.svgWidth), (o.height = n.svgHeight));
  if (v) {
    var x, S;
    l
      ? (x = S = 1)
      : u
      ? ((S = 1), (x = o.width / i.width))
      : h
      ? ((x = 1), (S = o.height / i.height))
      : (o.patternUnits = 'userSpaceOnUse'),
      x != null && !isNaN(x) && (o.width = x),
      S != null && !isNaN(S) && (o.height = S);
    var b = Ml(n);
    b && (o.patternTransform = b);
    var w = ct('pattern', '', o, [v]),
      _ = Ai(w),
      A = r.patternCache,
      C = A[_];
    C ||
      ((C = r.zrId + '-p' + r.patternIdx++),
      (A[_] = C),
      (o.id = C),
      (w = r.defs[C] = ct('pattern', C, o, [v]))),
      (e[t] = yr(C));
  }
}
function PS(a, e, t) {
  var r = t.clipPathCache,
    n = t.defs,
    i = r[a.id];
  if (!i) {
    i = t.zrId + '-c' + t.clipPathIdx++;
    var o = { id: i };
    (r[a.id] = i), (n[i] = ct('clipPath', i, o, [ju(a, t)]));
  }
  e['clip-path'] = yr(i);
}
function $s(a) {
  return document.createTextNode(a);
}
function De(a, e, t) {
  a.insertBefore(e, t);
}
function Fs(a, e) {
  a.removeChild(e);
}
function Hs(a, e) {
  a.appendChild(e);
}
function th(a) {
  return a.parentNode;
}
function eh(a) {
  return a.nextSibling;
}
function fn(a, e) {
  a.textContent = e;
}
var Zs = 58,
  ES = 120,
  RS = ct('', '');
function zn(a) {
  return a === void 0;
}
function Yt(a) {
  return a !== void 0;
}
function kS(a, e, t) {
  for (var r = {}, n = e; n <= t; ++n) {
    var i = a[n].key;
    i !== void 0 && (r[i] = n);
  }
  return r;
}
function Qe(a, e) {
  var t = a.key === e.key,
    r = a.tag === e.tag;
  return r && t;
}
function ca(a) {
  var e,
    t = a.children,
    r = a.tag;
  if (Yt(r)) {
    var n = (a.elm = Yu(r));
    if ((Ci(RS, a), H(t)))
      for (e = 0; e < t.length; ++e) {
        var i = t[e];
        i != null && Hs(n, ca(i));
      }
    else Yt(a.text) && !Le(a.text) && Hs(n, $s(a.text));
  } else a.elm = $s(a.text);
  return a.elm;
}
function ah(a, e, t, r, n) {
  for (; r <= n; ++r) {
    var i = t[r];
    i != null && De(a, ca(i), e);
  }
}
function Ka(a, e, t, r) {
  for (; t <= r; ++t) {
    var n = e[t];
    if (n != null)
      if (Yt(n.tag)) {
        var i = th(n.elm);
        Fs(i, n.elm);
      } else Fs(a, n.elm);
  }
}
function Ci(a, e) {
  var t,
    r = e.elm,
    n = (a && a.attrs) || {},
    i = e.attrs || {};
  if (n !== i) {
    for (t in i) {
      var o = i[t],
        s = n[t];
      s !== o &&
        (o === !0
          ? r.setAttribute(t, '')
          : o === !1
          ? r.removeAttribute(t)
          : t.charCodeAt(0) !== ES
          ? r.setAttribute(t, o)
          : t === 'xmlns:xlink' || t === 'xmlns'
          ? r.setAttributeNS(pS, t, o)
          : t.charCodeAt(3) === Zs
          ? r.setAttributeNS(gS, t, o)
          : t.charCodeAt(5) === Zs
          ? r.setAttributeNS(Uu, t, o)
          : r.setAttribute(t, o));
    }
    for (t in n) t in i || r.removeAttribute(t);
  }
}
function NS(a, e, t) {
  for (
    var r = 0,
      n = 0,
      i = e.length - 1,
      o = e[0],
      s = e[i],
      l = t.length - 1,
      u = t[0],
      h = t[l],
      v,
      c,
      f,
      d;
    r <= i && n <= l;

  )
    o == null
      ? (o = e[++r])
      : s == null
      ? (s = e[--i])
      : u == null
      ? (u = t[++n])
      : h == null
      ? (h = t[--l])
      : Qe(o, u)
      ? (ke(o, u), (o = e[++r]), (u = t[++n]))
      : Qe(s, h)
      ? (ke(s, h), (s = e[--i]), (h = t[--l]))
      : Qe(o, h)
      ? (ke(o, h), De(a, o.elm, eh(s.elm)), (o = e[++r]), (h = t[--l]))
      : Qe(s, u)
      ? (ke(s, u), De(a, s.elm, o.elm), (s = e[--i]), (u = t[++n]))
      : (zn(v) && (v = kS(e, r, i)),
        (c = v[u.key]),
        zn(c)
          ? De(a, ca(u), o.elm)
          : ((f = e[c]),
            f.tag !== u.tag
              ? De(a, ca(u), o.elm)
              : (ke(f, u), (e[c] = void 0), De(a, f.elm, o.elm))),
        (u = t[++n]));
  (r <= i || n <= l) &&
    (r > i ? ((d = t[l + 1] == null ? null : t[l + 1].elm), ah(a, d, t, n, l)) : Ka(a, e, r, i));
}
function ke(a, e) {
  var t = (e.elm = a.elm),
    r = a.children,
    n = e.children;
  a !== e &&
    (Ci(a, e),
    zn(e.text)
      ? Yt(r) && Yt(n)
        ? r !== n && NS(t, r, n)
        : Yt(n)
        ? (Yt(a.text) && fn(t, ''), ah(t, null, n, 0, n.length - 1))
        : Yt(r)
        ? Ka(t, r, 0, r.length - 1)
        : Yt(a.text) && fn(t, '')
      : a.text !== e.text && (Yt(r) && Ka(t, r, 0, r.length - 1), fn(t, e.text)));
}
function VS(a, e) {
  if (Qe(a, e)) ke(a, e);
  else {
    var t = a.elm,
      r = th(t);
    ca(e), r !== null && (De(r, e.elm, eh(t)), Ka(r, [a], 0, 0));
  }
  return e;
}
var BS = 0,
  zS = (function () {
    function a(e, t, r) {
      if (
        ((this.type = 'svg'),
        (this.refreshHover = Us()),
        (this.configLayer = Us()),
        (this.storage = t),
        (this._opts = r = W({}, r)),
        (this.root = e),
        (this._id = 'zr' + BS++),
        (this._oldVNode = Ns(r.width, r.height)),
        e && !r.ssr)
      ) {
        var n = (this._viewport = document.createElement('div'));
        n.style.cssText = 'position:relative;overflow:hidden';
        var i = (this._svgDom = this._oldVNode.elm = Yu('svg'));
        Ci(null, this._oldVNode), n.appendChild(i), e.appendChild(n);
      }
      this.resize(r.width, r.height);
    }
    return (
      (a.prototype.getType = function () {
        return this.type;
      }),
      (a.prototype.getViewportRoot = function () {
        return this._viewport;
      }),
      (a.prototype.getViewportRootOffset = function () {
        var e = this.getViewportRoot();
        if (e) return { offsetLeft: e.offsetLeft || 0, offsetTop: e.offsetTop || 0 };
      }),
      (a.prototype.getSvgDom = function () {
        return this._svgDom;
      }),
      (a.prototype.refresh = function () {
        if (this.root) {
          var e = this.renderToVNode({ willUpdate: !0 });
          (e.attrs.style = 'position:absolute;left:0;top:0;user-select:none'),
            VS(this._oldVNode, e),
            (this._oldVNode = e);
        }
      }),
      (a.prototype.renderOneToVNode = function (e) {
        return Ws(e, Bn(this._id));
      }),
      (a.prototype.renderToVNode = function (e) {
        e = e || {};
        var t = this.storage.getDisplayList(!0),
          r = this._width,
          n = this._height,
          i = Bn(this._id);
        (i.animation = e.animation), (i.willUpdate = e.willUpdate), (i.compress = e.compress);
        var o = [],
          s = (this._bgVNode = GS(r, n, this._backgroundColor, i));
        s && o.push(s);
        var l = e.compress ? null : (this._mainVNode = ct('g', 'main', {}, []));
        this._paintList(t, i, l ? l.children : o), l && o.push(l);
        var u = O(pt(i.defs), function (c) {
          return i.defs[c];
        });
        if ((u.length && o.push(ct('defs', 'defs', {}, u)), e.animation)) {
          var h = xS(i.cssNodes, i.cssAnims, { newline: !0 });
          if (h) {
            var v = ct('style', 'stl', {}, [], h);
            o.push(v);
          }
        }
        return Ns(r, n, o, e.useViewBox);
      }),
      (a.prototype.renderToString = function (e) {
        return (
          (e = e || {}),
          Ai(
            this.renderToVNode({
              animation: Dt(e.cssAnimation, !0),
              willUpdate: !1,
              compress: !0,
              useViewBox: Dt(e.useViewBox, !0),
            }),
            { newline: !0 },
          )
        );
      }),
      (a.prototype.setBackgroundColor = function (e) {
        this._backgroundColor = e;
      }),
      (a.prototype.getSvgRoot = function () {
        return this._mainVNode && this._mainVNode.elm;
      }),
      (a.prototype._paintList = function (e, t, r) {
        for (var n = e.length, i = [], o = 0, s, l, u = 0, h = 0; h < n; h++) {
          var v = e[h];
          if (!v.invisible) {
            var c = v.__clipPaths,
              f = (c && c.length) || 0,
              d = (l && l.length) || 0,
              p = void 0;
            for (p = Math.max(f - 1, d - 1); p >= 0 && !(c && l && c[p] === l[p]); p--);
            for (var g = d - 1; g > p; g--) o--, (s = i[o - 1]);
            for (var y = p + 1; y < f; y++) {
              var m = {};
              PS(c[y], m, t);
              var x = ct('g', 'clip-g-' + u++, m, []);
              (s ? s.children : r).push(x), (i[o++] = x), (s = x);
            }
            l = c;
            var S = Ws(v, t);
            S && (s ? s.children : r).push(S);
          }
        }
      }),
      (a.prototype.resize = function (e, t) {
        var r = this._opts,
          n = this.root,
          i = this._viewport;
        if (
          (e != null && (r.width = e),
          t != null && (r.height = t),
          n &&
            i &&
            ((i.style.display = 'none'),
            (e = Yi(n, 0, r)),
            (t = Yi(n, 1, r)),
            (i.style.display = '')),
          this._width !== e || this._height !== t)
        ) {
          if (((this._width = e), (this._height = t), i)) {
            var o = i.style;
            (o.width = e + 'px'), (o.height = t + 'px');
          }
          if (Qn(this._backgroundColor)) this.refresh();
          else {
            var s = this._svgDom;
            s && (s.setAttribute('width', e), s.setAttribute('height', t));
            var l = this._bgVNode && this._bgVNode.elm;
            l && (l.setAttribute('width', e), l.setAttribute('height', t));
          }
        }
      }),
      (a.prototype.getWidth = function () {
        return this._width;
      }),
      (a.prototype.getHeight = function () {
        return this._height;
      }),
      (a.prototype.dispose = function () {
        this.root && (this.root.innerHTML = ''),
          (this._svgDom =
            this._viewport =
            this.storage =
            this._oldVNode =
            this._bgVNode =
            this._mainVNode =
              null);
      }),
      (a.prototype.clear = function () {
        this._svgDom && (this._svgDom.innerHTML = null), (this._oldVNode = null);
      }),
      (a.prototype.toDataURL = function (e) {
        var t = this.renderToString(),
          r = 'data:image/svg+xml;';
        return e
          ? ((t = uc(t)), t && r + 'base64,' + t)
          : r + 'charset=UTF-8,' + encodeURIComponent(t);
      }),
      a
    );
  })();
function Us(a) {
  return function () {};
}
function GS(a, e, t, r) {
  var n;
  if (t && t !== 'none')
    if (((n = ct('rect', 'bg', { width: a, height: e, x: '0', y: '0', id: '0' })), Il(t)))
      Qu({ fill: t }, n.attrs, 'fill', r);
    else if (Qn(t))
      Ju(
        {
          style: { fill: t },
          dirty: ze,
          getBoundingRect: function () {
            return { width: a, height: e };
          },
        },
        n.attrs,
        'fill',
        r,
      );
    else {
      var i = ia(t),
        o = i.color,
        s = i.opacity;
      (n.attrs.fill = o), s < 1 && (n.attrs['fill-opacity'] = s);
    }
  return n;
}
const OS = zS;
function WS(a) {
  a.registerPainter('svg', OS);
}
Y([hc]);
Y([WS]);
Y([vc, cc, fc, Hg, jg, dc, My, hm, Em, Wm, Qm, v0, z0, j0, y1, A1, $1, Q1, vx, xx, Ex, sS]);
Y(pc);
Y(hf);
Y(gc);
Y(Bf);
Y(Gl);
Y(xd);
Y(zd);
Y(yc);
Y(mc);
Y($n);
Y(ap);
Y(xc);
Y(yp);
Y(Cp);
Y(Wp);
Y(qp);
Y(Sc);
Y(yg);
Y(tu);
Y(eu);
Y(bc);
Y(wc);
Y(_c);
Y(wg);
Y(Ng);
Y(Ac);
Y(Dc);
Y(Tc);
const Pa = [
  {
    name: '北京',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '天津',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '上海',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '重庆',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '河北',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '河南',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '云南',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '辽宁',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '黑龙江',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '湖南',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '安徽',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '山东',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '新疆',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '江苏',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '浙江',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '江西',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '湖北',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '广西',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '甘肃',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '山西',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '内蒙古',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '陕西',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '吉林',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '福建',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '贵州',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '广东',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '青海',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '西藏',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '四川',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '宁夏',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '海南',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '台湾',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '香港',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
  {
    name: '澳门',
    value: Math.round(Math.random() * 1e3),
    tipData: [Math.round(Math.random() * 1e3), Math.round(Math.random() * 1e3)],
  },
];
(() => {
  const a = [];
  let e = +new Date();
  const t = [],
    r = [];
  for (let n = 0; n < 20; n++) {
    const i = new Date((e += 864e5));
    a.push([i.getFullYear(), i.getMonth() + 1, i.getDate()].join('-'));
    const o = Math.random() * 200,
      s = Math.random() * 200;
    r.push(o), t.push(s + o);
  }
  return { barData: r, category: a, lineData: t };
})();
const $S = { class: 'page-container' },
  FS = rh({
    __name: 'index',
    setup(a) {
      const e = nh(null),
        { setOptions: t } = Cc(e),
        r = {
          visualMap: [
            {
              min: 0,
              max: 1e3,
              left: 'left',
              text: ['高', '低'],
              calculable: !0,
              inRange: {
                color: [
                  '#313695',
                  '#4575b4',
                  '#74add1',
                  '#abd9e9',
                  '#e0f3f8',
                  '#ffffbf',
                  '#fee090',
                  '#fdae61',
                  '#f46d43',
                  '#d73027',
                  '#a50026',
                ],
              },
            },
          ],
          grid: { left: '1%', right: '10%', top: '5%', bottom: 0, containLabel: !0 },
          tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, .6)',
            textStyle: { color: '#fff', fontSize: 12 },
          },
          series: [
            {
              id: 'population',
              type: 'map',
              roam: !0,
              map: 'china',
              animationDurationUpdate: 1e3,
              universalTransition: !0,
              data: Pa,
            },
          ],
        };
      Pa.sort(function (s, l) {
        return s.value - l.value;
      });
      const n = {
        grid: { left: '1%', right: '10%', top: '5%', bottom: 0, containLabel: !0 },
        xAxis: { type: 'value' },
        yAxis: {
          type: 'category',
          axisLabel: { rotate: 30 },
          data: Pa.map(function (s) {
            return s.name;
          }),
        },
        animationDurationUpdate: 1e3,
        series: {
          type: 'bar',
          id: 'population',
          data: Pa.map(function (s) {
            return s.value;
          }),
          universalTransition: !0,
        },
      };
      let i = r;
      ih(() =>
        Ii(this, null, function* () {
          const s = yield (yield oh(() => import('./china-77152183.js'), [])).default;
          Mc('china', s),
            t(r),
            sh(
              () => {
                o();
              },
              2e3,
              { immediate: !0 },
            );
        }),
      );
      function o() {
        (i = i === r ? n : r), t(i, !1);
      }
      return (s, l) => (
        lh(),
        uh('div', $S, [hh('div', { ref_key: 'chartRef', ref: e, class: 'chartRef' }, null, 512)])
      );
    },
  });
const XS = Lc(FS, [['__scopeId', 'data-v-f7db7d92']]);
export { XS as default };
