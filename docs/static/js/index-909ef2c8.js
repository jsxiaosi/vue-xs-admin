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
  d as oh,
  j as sh,
  k as lh,
  _ as uh,
  T as hh,
  o as vh,
  c as ch,
  g as fh,
} from './index-1eb240fe.js';
import {
  _ as R,
  b as Ks,
  a as dh,
  B as js,
  r as Gn,
  t as ze,
  c as ea,
  A as Me,
  m as Js,
  d as Pi,
  e as tr,
  C as Zt,
  S as fa,
  f as te,
  g as er,
  h as ee,
  i as wt,
  j as ph,
  p as B,
  k as F,
  l as I,
  n as Ei,
  o as Ba,
  q as On,
  s as O,
  v as Pt,
  w as da,
  x as aa,
  R as Qs,
  L as Kt,
  y as Gt,
  z as nt,
  D as Le,
  M as jt,
  Z as gt,
  E as yt,
  F as ut,
  G as ra,
  H as j,
  I as Wn,
  J as Ut,
  K as tl,
  N as ae,
  O as Y,
  P as Fn,
  Q as Ga,
  T as it,
  U as Wt,
  V as at,
  W as st,
  X as gh,
  Y as Ie,
  $ as Ce,
  a0 as dn,
  a1 as yh,
  a2 as Ft,
  a3 as Ot,
  a4 as mh,
  a5 as Sh,
  a6 as xh,
  a7 as re,
  a8 as bh,
  a9 as wh,
  aa as _h,
  ab as le,
  ac as U,
  ad as ar,
  ae as el,
  af as W,
  ag as Ct,
  ah as rr,
  ai as $n,
  aj as al,
  ak as ne,
  al as rl,
  am as Jt,
  an as Ah,
  ao as Dh,
  ap as Th,
  aq as nl,
  ar as Mh,
  as as il,
  at as Mt,
  au as Ch,
  av as ki,
  aw as Lh,
  ax as Ih,
  ay as Ph,
  az as z,
  aA as pt,
  aB as Eh,
  aC as na,
  aD as nr,
  aE as Bt,
  aF as Lt,
  aG as kh,
  aH as ol,
  aI as sl,
  aJ as ie,
  aK as Rh,
  aL as ll,
  aM as ht,
  aN as ul,
  aO as Tt,
  aP as Nh,
  aQ as ye,
  aR as We,
  aS as Sa,
  aT as Vh,
  aU as zh,
  aV as Bh,
  aW as Gh,
  aX as Oh,
  aY as Be,
  aZ as Wh,
  a_ as Fh,
  a$ as It,
  b0 as ir,
  b1 as hl,
  b2 as Vt,
  b3 as Na,
  b4 as $h,
  b5 as Hh,
  b6 as Zh,
  b7 as Uh,
  b8 as $t,
  b9 as pa,
  ba as ga,
  bb as Yh,
  bc as Hn,
  bd as Xh,
  be as Oa,
  bf as qh,
  bg as Kh,
  bh as or,
  bi as Zn,
  bj as vl,
  bk as ya,
  bl as Ht,
  bm as zt,
  bn as pn,
  bo as Qt,
  bp as ft,
  bq as Un,
  br as Yn,
  bs as Ne,
  bt as sr,
  bu as jh,
  bv as lr,
  bw as gn,
  bx as Et,
  by as cl,
  bz as Wa,
  bA as fl,
  bB as ur,
  bC as dl,
  bD as pl,
  bE as vt,
  bF as Jh,
  bG as Qh,
  bH as tv,
  bI as ev,
  bJ as Ri,
  bK as gl,
  bL as yn,
  bM as lt,
  bN as yl,
  bO as av,
  bP as rv,
  bQ as nv,
  bR as ml,
  bS as iv,
  bT as Oe,
  bU as mt,
  bV as hr,
  bW as dt,
  bX as ov,
  bY as sv,
  bZ as fe,
  b_ as vr,
  b$ as cr,
  c0 as fr,
  c1 as lv,
  c2 as dr,
  c3 as Sl,
  c4 as Xn,
  c5 as xl,
  c6 as bl,
  c7 as wl,
  c8 as _l,
  c9 as mn,
  ca as uv,
  cb as hv,
  cc as Fa,
  cd as $a,
  ce as Sn,
  cf as qn,
  cg as Al,
  ch as vv,
  ci as pr,
  cj as gr,
  ck as cv,
  cl as Dl,
  cm as Ni,
  cn as xa,
  co as Vi,
  cp as fv,
  cq as Tl,
  cr as Ml,
  cs as zi,
  ct as ma,
  cu as ve,
  cv as dv,
  cw as pv,
  cx as Bi,
  cy as gv,
  cz as Dt,
  cA as xn,
  cB as yv,
  cC as Cl,
  cD as mv,
  cE as Ll,
  cF as Sv,
  cG as xv,
  cH as Gi,
  cI as bv,
  cJ as wv,
  cK as Oi,
  cL as _v,
  cM as Av,
  cN as Dv,
  cO as Tv,
  cP as Mv,
  cQ as Cv,
  cR as Lv,
  cS as bn,
  cT as wn,
  cU as Iv,
  cV as wr,
  cW as Kn,
  cX as jn,
  cY as _r,
  cZ as Pv,
  c_ as Ev,
  c$ as Xe,
  d0 as kv,
  d1 as Wi,
  d2 as Rv,
  d3 as Fi,
  d4 as Nv,
  d5 as _n,
  d6 as $i,
  d7 as Vv,
  d8 as zv,
  d9 as Bv,
  da as Il,
  db as Hi,
  dc as Zi,
  dd as Gv,
  de as Ov,
  df as Ui,
  dg as Wv,
  dh as Fv,
  di as $v,
  dj as ue,
  dk as ia,
  dl as Hv,
  dm as Yi,
  dn as Zv,
  dp as Uv,
  dq as Yv,
  dr as Xv,
  ds as Pl,
  dt as qv,
  du as El,
  dv as Kv,
  dw as jv,
  dx as Jv,
  dy as Qv,
  dz as yr,
  dA as tc,
  dB as ec,
  dC as ac,
  dD as rc,
  dE as nc,
  dF as ic,
  dG as oc,
  dH as sc,
  dI as lc,
  dJ as kl,
  dK as Jn,
  dL as uc,
  dM as hc,
  dN as vc,
  dO as Xi,
  dP as cc,
  dQ as fc,
  dR as dc,
  dS as pc,
  dT as gc,
  dU as yc,
  dV as mc,
  dW as Sc,
  dX as xc,
  dY as bc,
  dZ as wc,
  d_ as _c,
  d$ as Ac,
  e0 as Dc,
  e1 as Tc,
  e2 as Mc,
  e3 as Cc,
  e4 as Lc,
  u as Ic,
  e5 as Pc,
} from './useECharts-42fea5ef.js';
import { _ as Ec } from './plugin-vueexport-helper-c27b6911.js';
var kc = (function (a) {
  R(e, a);
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
        var f = Ks(i),
          d = Nc[c](s, l, v, h);
        (d.style = f), (t.graphicKey = d.type), (t.pointer = d);
      }
      var p = i.get(['label', 'margin']),
        g = Rc(r, n, i, l, p);
      dh(t, n, i, o, g);
    }),
    e
  );
})(js);
function Rc(a, e, t, r, n) {
  var i = e.axis,
    o = i.dataToCoord(a),
    s = r.getAngleAxis().getExtent()[0];
  s = (s / 180) * Math.PI;
  var l = r.getRadiusAxis().getExtent(),
    u,
    h,
    v;
  if (i.dim === 'radius') {
    var c = tr();
    Gn(c, c, s), ze(c, c, [r.cx, r.cy]), (u = ea([o, -n], c));
    var f = e.getModel('axisLabel').get('rotate') || 0,
      d = Me.innerTextLayout(s, (f * Math.PI) / 180, -1);
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
var Nc = {
  line: function (a, e, t, r) {
    return a.dim === 'angle'
      ? { type: 'Line', shape: Js(e.coordToPoint([r[0], t]), e.coordToPoint([r[1], t])) }
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
const Vc = kc;
var zc = (function (a) {
  R(e, a);
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
})(Zt);
const Bc = zc;
var Qn = (function (a) {
  R(e, a);
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
})(Zt);
te(Qn, er);
var Gc = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (e.type = 'angleAxis'), e;
  })(Qn),
  Oc = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (e.type = 'radiusAxis'), e;
  })(Qn),
  ti = (function (a) {
    R(e, a);
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
const Wc = ti;
var Fc = wt(),
  ei = (function (a) {
    R(e, a);
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
          h = ph(s == null ? '' : s + '', r.getFont(), 'center', 'top'),
          v = Math.max(h.height, 7),
          c = v / u;
        isNaN(c) && (c = 1 / 0);
        var f = Math.max(0, Math.floor(c)),
          d = Fc(t.model),
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
const $c = ei;
var Rl = ['radius', 'angle'],
  Hc = (function () {
    function a(e) {
      (this.dimensions = Rl),
        (this.type = 'polar'),
        (this.cx = 0),
        (this.cy = 0),
        (this._radiusAxis = new Wc()),
        (this._angleAxis = new $c()),
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
        var n = qi(t);
        return n === this ? this.dataToPoint(r) : null;
      }),
      (a.prototype.convertFromPixel = function (e, t, r) {
        var n = qi(t);
        return n === this ? this.pointToData(r) : null;
      }),
      a
    );
  })();
function qi(a) {
  var e = a.seriesModel,
    t = a.polarModel;
  return (t && t.coordinateSystem) || (e && e.coordinateSystem);
}
const Zc = Hc;
function Uc(a, e, t) {
  var r = e.get('center'),
    n = t.getWidth(),
    i = t.getHeight();
  (a.cx = B(r[0], n)), (a.cy = B(r[1], i));
  var o = a.getRadiusAxis(),
    s = Math.min(n, i) / 2,
    l = e.get('radius');
  l == null ? (l = [0, '100%']) : F(l) || (l = [0, l]);
  var u = [B(l[0], s), B(l[1], s)];
  o.inverse ? o.setExtent(u[1], u[0]) : o.setExtent(u[0], u[1]);
}
function Yc(a, e) {
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
    Ba(r.scale, r.model),
    Ba(n.scale, n.model),
    r.type === 'category' && !r.onBand)
  ) {
    var i = r.getExtent(),
      o = 360 / r.scale.count();
    r.inverse ? (i[1] += o) : (i[1] -= o), r.setExtent(i[0], i[1]);
  }
}
function Xc(a) {
  return a.mainType === 'angleAxis';
}
function Ki(a, e) {
  if (
    ((a.type = e.get('type')),
    (a.scale = On(e)),
    (a.onBand = e.get('boundaryGap') && a.type === 'category'),
    (a.inverse = e.get('inverse')),
    Xc(e))
  ) {
    a.inverse = a.inverse !== e.get('clockwise');
    var t = e.get('startAngle');
    a.setExtent(t, t + (a.inverse ? -360 : 360));
  }
  (e.axis = a), (a.model = e);
}
var qc = {
  dimensions: Rl,
  create: function (a, e) {
    var t = [];
    return (
      a.eachComponent('polar', function (r, n) {
        var i = new Zc(n + '');
        i.update = Yc;
        var o = i.getRadiusAxis(),
          s = i.getAngleAxis(),
          l = r.findAxisModel('radiusAxis'),
          u = r.findAxisModel('angleAxis');
        Ki(o, l), Ki(s, u), Uc(i, r, e), t.push(i), (r.coordinateSystem = i), (i.model = r);
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
const Kc = qc;
var jc = [
  'axisLine',
  'axisLabel',
  'axisTick',
  'minorTick',
  'splitLine',
  'minorSplitLine',
  'splitArea',
];
function ba(a, e, t) {
  e[1] > e[0] && (e = e.slice().reverse());
  var r = a.coordToPoint([e[0], t]),
    n = a.coordToPoint([e[1], t]);
  return { x1: r[0], y1: r[1], x2: n[0], y2: n[1] };
}
function wa(a) {
  var e = a.getRadiusAxis();
  return e.inverse ? 0 : 1;
}
function ji(a) {
  var e = a[0],
    t = a[a.length - 1];
  e && t && Math.abs(Math.abs(e.coord - t.coord) - 360) < 1e-4 && a.pop();
}
var Jc = (function (a) {
    R(e, a);
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
              h = Pt(h);
              var v = n.scale,
                c = v.type === 'ordinal' ? v.getRawOrdinalNumber(h.tickValue) : h.tickValue;
              return (h.coord = n.dataToCoord(c)), h;
            });
          ji(u),
            ji(s),
            I(
              jc,
              function (h) {
                t.get([h, 'show']) &&
                  (!n.scale.isBlank() || h === 'axisLine') &&
                  Qc[h](this.group, t, i, s, l, o, u);
              },
              this,
            );
        }
      }),
      (e.type = 'angleAxis'),
      e
    );
  })(da),
  Qc = {
    axisLine: function (a, e, t, r, n, i) {
      var o = e.getModel(['axisLine', 'lineStyle']),
        s = wa(t),
        l = s ? 0 : 1,
        u;
      i[l] === 0
        ? (u = new aa({
            shape: { cx: t.cx, cy: t.cy, r: i[s] },
            style: o.getLineStyle(),
            z2: 1,
            silent: !0,
          }))
        : (u = new Qs({
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
        l = i[wa(t)],
        u = O(r, function (h) {
          return new Kt({ shape: ba(t, [l, l + s], h.coord) });
        });
      a.add(
        Gt(u, {
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
            u = i[wa(t)],
            h = [],
            v = 0;
          v < n.length;
          v++
        )
          for (var c = 0; c < n[v].length; c++)
            h.push(new Kt({ shape: ba(t, [u, u + l], n[v][c].coord) }));
        a.add(
          Gt(h, {
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
            p = i[wa(t)],
            g = t.coordToPoint([p + u, v.coord]),
            y = t.cx,
            m = t.cy,
            S = Math.abs(g[0] - y) / p < 0.3 ? 'center' : g[0] > y ? 'left' : 'right',
            x = Math.abs(g[1] - m) / p < 0.3 ? 'middle' : g[1] > m ? 'top' : 'bottom';
          if (s && s[d]) {
            var b = s[d];
            Le(b) && b.textStyle && (f = new jt(b.textStyle, l, l.ecModel));
          }
          var w = new gt({
            silent: Me.isLabelSilent(e),
            style: yt(f, {
              x: g[0],
              y: g[1],
              fill: f.getTextColor() || e.get(['axisLine', 'lineStyle', 'color']),
              text: v.formattedLabel,
              align: S,
              verticalAlign: x,
            }),
          });
          if ((a.add(w), h)) {
            var _ = Me.makeAxisEventDataBase(e);
            (_.targetType = 'axisLabel'), (_.value = v.rawLabel), (ut(w).eventData = _);
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
        (h[c] = h[c] || []), h[c].push(new Kt({ shape: ba(t, i, r[v].coord) }));
      }
      for (var v = 0; v < h.length; v++)
        a.add(
          Gt(h[v], {
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
          for (var h = 0; h < n[u].length; h++) l.push(new Kt({ shape: ba(t, i, n[u][h].coord) }));
        a.add(Gt(l, { style: s.getLineStyle(), silent: !0, z: e.get('z') }));
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
            S = u++ % l.length;
          (h[S] = h[S] || []),
            h[S].push(
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
          a.add(Gt(h[g], { style: nt({ fill: l[g % l.length] }, s.getAreaStyle()), silent: !0 }));
      }
    },
  };
const tf = Jc;
var ef = ['axisLine', 'axisTickLabel', 'axisName'],
  af = ['splitLine', 'splitArea', 'minorSplitLine'],
  rf = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t.axisPointerClass = 'PolarAxisPointer'), t;
    }
    return (
      (e.prototype.render = function (t, r) {
        if ((this.group.removeAll(), !!t.get('show'))) {
          var n = this._axisGroup,
            i = (this._axisGroup = new j());
          this.group.add(i);
          var o = t.axis,
            s = o.polar,
            l = s.getAngleAxis(),
            u = o.getTicksCoords(),
            h = o.getMinorTicksCoords(),
            v = l.getExtent()[0],
            c = o.getExtent(),
            f = of(s, t, v),
            d = new Me(t, f);
          I(ef, d.add, d),
            i.add(d.getGroup()),
            Wn(n, i, t),
            I(
              af,
              function (p) {
                t.get([p, 'show']) && !o.scale.isBlank() && nf[p](this.group, t, s, v, c, u, h);
              },
              this,
            );
        }
      }),
      (e.type = 'radiusAxis'),
      e
    );
  })(da),
  nf = {
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
          Gt(h[v], {
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
        a.add(Gt(u, { style: nt({ fill: null }, l.getLineStyle()), silent: !0 }));
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
          a.add(Gt(h[c], { style: nt({ fill: l[c % l.length] }, s.getAreaStyle()), silent: !0 }));
      }
    },
  };
function of(a, e, t) {
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
const sf = rf;
function Nl(a) {
  return a.get('stack') || '__ec_stack_' + a.seriesIndex;
}
function Vl(a, e) {
  return e.dim + a.model.componentIndex;
}
function lf(a, e, t) {
  var r = {},
    n = uf(
      Ut(e.getSeriesByType(a), function (i) {
        return !e.isSeriesFiltered(i) && i.coordinateSystem && i.coordinateSystem.type === 'polar';
      }),
    );
  e.eachSeriesByType(a, function (i) {
    if (i.coordinateSystem.type === 'polar') {
      var o = i.getData(),
        s = i.coordinateSystem,
        l = s.getBaseAxis(),
        u = Vl(s, l),
        h = Nl(i),
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
        var S = o.mapDimension(d.dim),
          x = o.mapDimension(l.dim),
          b = tl(o, S),
          w = l.dim !== 'radius' || !i.get('roundCap', !0),
          _ = d.dataToCoord(0),
          A = 0,
          M = o.count();
        A < M;
        A++
      ) {
        var D = o.get(S, A),
          T = o.get(x, A),
          L = D >= 0 ? 'p' : 'n',
          P = _;
        b && (r[h][T] || (r[h][T] = { p: _, n: _ }), (P = r[h][T][L]));
        var C = void 0,
          E = void 0,
          k = void 0,
          N = void 0;
        if (d.dim === 'radius') {
          var V = d.dataToCoord(D) - _,
            G = l.dataToCoord(T);
          Math.abs(V) < y && (V = (V < 0 ? -1 : 1) * y),
            (C = P),
            (E = P + V),
            (k = G - c),
            (N = k - f),
            b && (r[h][T][L] = E);
        } else {
          var $ = d.dataToCoord(D, w) - _,
            H = l.dataToCoord(T);
          Math.abs($) < m && ($ = ($ < 0 ? -1 : 1) * m),
            (C = H + c),
            (E = C + f),
            (k = P),
            (N = P + $),
            b && (r[h][T][L] = N);
        }
        o.setItemLayout(A, {
          cx: p,
          cy: g,
          r0: C,
          r: E,
          startAngle: (-k * Math.PI) / 180,
          endAngle: (-N * Math.PI) / 180,
          clockwise: k >= N,
        });
      }
    }
  });
}
function uf(a) {
  var e = {};
  I(a, function (r, n) {
    var i = r.getData(),
      o = r.coordinateSystem,
      s = o.getBaseAxis(),
      l = Vl(o, s),
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
    var f = Nl(r);
    c[f] || v.autoWidthCount++, (c[f] = c[f] || { width: 0, maxWidth: 0 });
    var d = B(r.get('barWidth'), h),
      p = B(r.get('barMaxWidth'), h),
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
        s = B(r.categoryGap, o),
        l = B(r.gap, 1),
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
var hf = { startAngle: 90, clockwise: !0, splitNumber: 12, axisLabel: { rotate: 0 } },
  vf = { splitNumber: 5 },
  cf = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (e.type = 'polar'), e;
  })(ae);
function ff(a) {
  Y(Fn),
    da.registerAxisPointerClass('PolarAxisPointer', Vc),
    a.registerCoordinateSystem('polar', Kc),
    a.registerComponentModel(Bc),
    a.registerComponentView(cf),
    Ga(a, 'angle', Gc, hf),
    Ga(a, 'radius', Oc, vf),
    a.registerComponentView(tf),
    a.registerComponentView(sf),
    a.registerLayout(it(lf, 'bar'));
}
var Fe = gh.value;
function _a(a, e) {
  return nt({ show: e }, a);
}
var df = (function (a) {
  R(e, a);
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
            var g = Wt(
              Pt(d),
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
            if (at(h)) {
              var y = g.name;
              g.name = h.replace('{value}', y != null ? y : '');
            } else st(h) && (g.name = h(g.name, g));
            var m = new jt(g, null, this.ecModel);
            return (
              te(m, er.prototype),
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
      axisLine: Wt({ lineStyle: { color: '#bbb' } }, Fe.axisLine),
      axisLabel: _a(Fe.axisLabel, !1),
      axisTick: _a(Fe.axisTick, !1),
      splitLine: _a(Fe.splitLine, !0),
      splitArea: _a(Fe.splitArea, !0),
      indicator: [],
    }),
    e
  );
})(Zt);
const pf = df;
var gf = ['axisLine', 'axisTickLabel', 'axisName'],
  yf = (function (a) {
    R(e, a);
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
              l = new Me(o.model, {
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
            I(gf, o.add, o), this.group.add(o.getGroup());
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
          d = F(c) ? c : [c],
          p = F(f) ? f : [f],
          g = [],
          y = [];
        function m(E, k, N) {
          var V = N % k.length;
          return (E[V] = E[V] || []), V;
        }
        if (i === 'circle')
          for (var S = n[0].getTicksCoords(), x = r.cx, b = r.cy, w = 0; w < S.length; w++) {
            if (h) {
              var _ = m(g, d, w);
              g[_].push(new aa({ shape: { cx: x, cy: b, r: S[w].coord } }));
            }
            if (v && w < S.length - 1) {
              var _ = m(y, p, w);
              y[_].push(new Qs({ shape: { cx: x, cy: b, r0: S[w].coord, r: S[w + 1].coord } }));
            }
          }
        else
          for (
            var A,
              M = O(n, function (E, k) {
                var N = E.getTicksCoords();
                return (
                  (A = A == null ? N.length - 1 : Math.min(N.length - 1, A)),
                  O(N, function (V) {
                    return r.coordToPoint(V.coord, k);
                  })
                );
              }),
              D = [],
              w = 0;
            w <= A;
            w++
          ) {
            for (var T = [], L = 0; L < n.length; L++) T.push(M[L][w]);
            if ((T[0] && T.push(T[0].slice()), h)) {
              var _ = m(g, d, w);
              g[_].push(new Ie({ shape: { points: T } }));
            }
            if (v && D) {
              var _ = m(y, p, w - 1);
              y[_].push(new Ce({ shape: { points: T.concat(D) } }));
            }
            D = T.slice().reverse();
          }
        var P = l.getLineStyle(),
          C = u.getAreaStyle();
        I(
          y,
          function (E, k) {
            this.group.add(
              Gt(E, { style: nt({ stroke: 'none', fill: p[k % p.length] }, C), silent: !0 }),
            );
          },
          this,
        ),
          I(
            g,
            function (E, k) {
              this.group.add(
                Gt(E, { style: nt({ fill: 'none', stroke: d[k % d.length] }, P), silent: !0 }),
              );
            },
            this,
          );
      }),
      (e.type = 'radar'),
      e
    );
  })(ae);
const mf = yf;
var Sf = (function (a) {
  R(e, a);
  function e(t, r, n) {
    var i = a.call(this, t, r, n) || this;
    return (i.type = 'value'), (i.angle = 0), (i.name = ''), i;
  }
  return e;
})(ee);
const xf = Sf;
var bf = (function () {
  function a(e, t, r) {
    (this.dimensions = []),
      (this._model = e),
      (this._indicatorAxes = O(
        e.getIndicatorModels(),
        function (n, i) {
          var o = 'indicator_' + i,
            s = new xf(o, new dn());
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
      (this.cx = B(r[0], n)),
        (this.cy = B(r[1], i)),
        (this.startAngle = (e.get('startAngle') * Math.PI) / 180);
      var s = e.get('radius');
      (at(s) || Ft(s)) && (s = [0, s]),
        (this.r0 = B(s[0], o)),
        (this.r = B(s[1], o)),
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
          yh(s.scale, s.model, o);
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
const wf = bf;
function _f(a) {
  a.registerCoordinateSystem('radar', wf),
    a.registerComponentModel(pf),
    a.registerComponentView(mf),
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
    Ot(e.labelInside, a.get(['axisLabel', 'inside'])) && (n.labelDirection = -n.labelDirection);
  var c = e.rotate;
  return (
    c == null && (c = a.get(['axisLabel', 'rotate'])),
    (n.labelRotation = i === 'top' ? -c : c),
    (n.z2 = 1),
    n
  );
}
var Af = ['axisLine', 'axisTickLabel', 'axisName'],
  Df = ['splitArea', 'splitLine'],
  Tf = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t.axisPointerClass = 'SingleAxisPointer'), t;
    }
    return (
      (e.prototype.render = function (t, r, n, i) {
        var o = this.group;
        o.removeAll();
        var s = this._axisGroup;
        this._axisGroup = new j();
        var l = An(t),
          u = new Me(t, l);
        I(Af, u.add, u),
          o.add(this._axisGroup),
          o.add(u.getGroup()),
          I(
            Df,
            function (h) {
              t.get([h, 'show']) && Mf[h](this, this.group, this._axisGroup, t);
            },
            this,
          ),
          Wn(s, this._axisGroup, t),
          a.prototype.render.call(this, t, r, n, i);
      }),
      (e.prototype.remove = function () {
        mh(this);
      }),
      (e.type = 'singleAxis'),
      e
    );
  })(da),
  Mf = {
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
          var m = new Kt({ shape: { x1: d[0], y1: d[1], x2: p[0], y2: p[1] }, silent: !0 });
          Sh(m.shape, l);
          var S = c++ % s.length;
          (v[S] = v[S] || []), v[S].push(m);
        }
        for (var x = o.getLineStyle(['color']), g = 0; g < v.length; ++g)
          e.add(Gt(v[g], { style: nt({ stroke: s[g % s.length] }, x), silent: !0 }));
      }
    },
    splitArea: function (a, e, t, r) {
      xh(a, t, r, r);
    },
  };
const Cf = Tf;
var zl = (function (a) {
  R(e, a);
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
})(Zt);
te(zl, er.prototype);
const Ar = zl;
var Lf = (function (a) {
  R(e, a);
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
const If = Lf;
var Bl = ['single'],
  Pf = (function () {
    function a(e, t, r) {
      (this.type = 'single'),
        (this.dimension = 'single'),
        (this.dimensions = Bl),
        (this.axisPointerEnabled = !0),
        (this.model = e),
        this._init(e, t, r);
    }
    return (
      (a.prototype._init = function (e, t, r) {
        var n = this.dimension,
          i = new If(n, On(e), [0, 0], e.get('type'), e.get('position')),
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
              Ba(this._axis.scale, this._axis.model);
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
        var n = Ji(t);
        return n === this ? this.dataToPoint(r) : null;
      }),
      (a.prototype.convertFromPixel = function (e, t, r) {
        var n = Ji(t);
        return n === this ? this.pointToData(r) : null;
      }),
      a
    );
  })();
function Ji(a) {
  var e = a.seriesModel,
    t = a.singleAxisModel;
  return (t && t.coordinateSystem) || (e && e.coordinateSystem);
}
function Ef(a, e) {
  var t = [];
  return (
    a.eachComponent('singleAxis', function (r, n) {
      var i = new Pf(r, a, e);
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
var kf = { create: Ef, dimensions: Bl };
const Rf = kf;
var Qi = ['x', 'y'],
  Nf = ['width', 'height'],
  Vf = (function (a) {
    R(e, a);
    function e() {
      return (a !== null && a.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.makeElOption = function (t, r, n, i, o) {
        var s = n.axis,
          l = s.coordinateSystem,
          u = Dr(l, 1 - Ha(s)),
          h = l.dataToPoint(r)[0],
          v = i.get('type');
        if (v && v !== 'none') {
          var c = Ks(i),
            f = zf[v](s, h, u);
          (f.style = c), (t.graphicKey = f.type), (t.pointer = f);
        }
        var d = An(n);
        bh(r, t, d, n, i, o);
      }),
      (e.prototype.getHandleTransform = function (t, r, n) {
        var i = An(r, { labelInside: !1 });
        i.labelMargin = n.get(['handle', 'margin']);
        var o = wh(r.axis, t, i);
        return { x: o[0], y: o[1], rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0) };
      }),
      (e.prototype.updateHandleTransform = function (t, r, n, i) {
        var o = n.axis,
          s = o.coordinateSystem,
          l = Ha(o),
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
  })(js),
  zf = {
    line: function (a, e, t) {
      var r = Js([e, t[0]], [e, t[1]], Ha(a));
      return { type: 'Line', subPixelOptimize: !0, shape: r };
    },
    shadow: function (a, e, t) {
      var r = a.getBandWidth(),
        n = t[1] - t[0];
      return { type: 'Rect', shape: _h([e - r / 2, t[0]], [r, n], Ha(a)) };
    },
  };
function Ha(a) {
  return a.isHorizontal() ? 0 : 1;
}
function Dr(a, e) {
  var t = a.getRect();
  return [t[Qi[e]], t[Qi[e]] + t[Nf[e]]];
}
const Bf = Vf;
var Gf = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (e.type = 'single'), e;
})(ae);
function Of(a) {
  Y(Fn),
    da.registerAxisPointerClass('SingleAxisPointer', Bf),
    a.registerComponentView(Gf),
    a.registerComponentView(Cf),
    a.registerComponentModel(Ar),
    Ga(a, 'single', Ar, Ar.defaultOption),
    a.registerCoordinateSystem('single', Rf);
}
function Wf(a) {
  Ff(a), $f(a);
}
function Ff(a) {
  if (!a.parallel) {
    var e = !1;
    I(a.series, function (t) {
      t && t.type === 'parallel' && (e = !0);
    }),
      e && (a.parallel = [{}]);
  }
}
function $f(a) {
  var e = le(a.parallelAxis);
  I(e, function (t) {
    if (Le(t)) {
      var r = t.parallelIndex || 0,
        n = le(a.parallel)[r];
      n && n.parallelAxisDefault && Wt(t, n.parallelAxisDefault, !1);
    }
  });
}
var Hf = 5,
  Zf = (function (a) {
    R(e, a);
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
              Uf,
              function (i, o) {
                n.getZr().on(o, (this._handlers[o] = U(i, this)));
              },
              this,
            )),
          ar(this, '_throttledDispatchExpand', t.get('axisExpandRate'), 'fixRate');
      }),
      (e.prototype.dispose = function (t, r) {
        el(this, '_throttledDispatchExpand'),
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
  Uf = {
    mousedown: function (a) {
      Tr(this, 'click') && (this._mouseDownPoint = [a.offsetX, a.offsetY]);
    },
    mouseup: function (a) {
      var e = this._mouseDownPoint;
      if (Tr(this, 'click') && e) {
        var t = [a.offsetX, a.offsetY],
          r = Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
        if (r > Hf) return;
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
const Yf = Zf;
var Xf = (function (a) {
  R(e, a);
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
      t && Wt(r, t, !0), this._initDimensions();
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
        n = Ut(
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
})(Zt);
const qf = Xf;
var Kf = (function (a) {
  R(e, a);
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
const jf = Kf;
var Mr = I,
  Gl = Math.min,
  Ol = Math.max,
  to = Math.floor,
  Jf = Math.ceil,
  eo = $n,
  Qf = Math.PI,
  td = (function () {
    function a(e, t, r) {
      (this.type = 'parallel'),
        (this._axesMap = Ct()),
        (this._axesLayout = {}),
        (this.dimensions = e.dimensions),
        (this._model = e),
        this._init(e, t, r);
    }
    return (
      (a.prototype._init = function (e, t, r) {
        var n = e.dimensions,
          i = e.parallelAxisIndex;
        Mr(
          n,
          function (o, s) {
            var l = i[s],
              u = t.getComponent('parallelAxis', l),
              h = this._axesMap.set(o, new jf(o, On(u), [0, 0], u.get('type'), l)),
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
            Mr(
              this.dimensions,
              function (i) {
                var o = this._axesMap.get(i);
                o.scale.unionExtentFromData(n, n.mapDimension(i)), Ba(o.scale, o.model);
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
          h = Aa(e.get('axisExpandWidth'), l),
          v = Aa(e.get('axisExpandCount') || 0, [0, u]),
          c = e.get('axisExpandable') && u > 3 && u > v && v > 1 && h > 0 && s > 0,
          f = e.get('axisExpandWindow'),
          d;
        if (f) (d = Aa(f[1] - f[0], l)), (f[1] = f[0] + d);
        else {
          d = Aa(h * (v - 1), l);
          var p = e.get('axisExpandCenter') || to(u / 2);
          (f = [h * p - d / 2]), (f[1] = f[0] + d);
        }
        var g = (s - d) / (u - v);
        g < 3 && (g = 0);
        var y = [to(eo(f[0] / h, 1)) + 1, Jf(eo(f[1] / h, 1)) - 1],
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
          Mr(
            r,
            function (o, s) {
              var l = (n.axisExpandable ? ad : ed)(s, n),
                u = {
                  horizontal: { x: l.position, y: n.axisLength },
                  vertical: { x: 0, y: l.position },
                },
                h = { horizontal: Qf / 2, vertical: 0 },
                v = [u[i].x + e.x, u[i].y + e.y],
                c = h[i],
                f = tr();
              Gn(f, f, c),
                ze(f, f, v),
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
        return Pt(this._axesLayout[e]);
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
            l ? rr(l, n, o, 'all') : (u = 'none');
        else {
          var f = n[1] - n[0],
            d = (o[1] * s) / f;
          (n = [Ol(0, d - f / 2)]), (n[1] = Gl(o[1], n[0] + f)), (n[0] = n[1] - f);
        }
        return { axisExpandWindow: n, behavior: u };
      }),
      a
    );
  })();
function Aa(a, e) {
  return Gl(Ol(a, e[0]), e[1]);
}
function ed(a, e) {
  var t = e.layoutLength / (e.axisCount - 1);
  return { position: t * a, axisNameAvailableWidth: t, axisLabelShow: !0 };
}
function ad(a, e) {
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
const rd = td;
function nd(a, e) {
  var t = [];
  return (
    a.eachComponent('parallel', function (r, n) {
      var i = new rd(r, a, e);
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
var id = { create: nd };
const od = id;
var Wl = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.activeIntervals = []), t;
  }
  return (
    (e.prototype.getAreaSelectStyle = function () {
      return al([
        ['fill', 'color'],
        ['lineWidth', 'borderWidth'],
        ['stroke', 'borderColor'],
        ['width', 'width'],
        ['opacity', 'opacity'],
      ])(this.getModel('areaSelectStyle'));
    }),
    (e.prototype.setActiveIntervals = function (t) {
      var r = (this.activeIntervals = Pt(t));
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
})(Zt);
te(Wl, er);
const ao = Wl;
var sd = ['axisLine', 'axisTickLabel', 'axisName'],
  ld = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.init = function (t, r) {
        a.prototype.init.apply(this, arguments),
          (this._brushController = new rl(r.getZr())).on('brush', U(this._onBrush, this));
      }),
      (e.prototype.render = function (t, r, n, i) {
        if (!ud(t, r, i)) {
          (this.axisModel = t), (this.api = n), this.group.removeAll();
          var o = this._axisGroup;
          if (((this._axisGroup = new j()), this.group.add(this._axisGroup), !!t.get('show'))) {
            var s = vd(t, r),
              l = s.coordinateSystem,
              u = t.getAreaSelectStyle(),
              h = u.width,
              v = t.axis.dim,
              c = l.getAxisLayout(v),
              f = W({ strokeContainThreshold: h }, c),
              d = new Me(t, f);
            I(sd, d.add, d),
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
          v = Jt.create({ x: l[0], y: -o / 2, width: u, height: o });
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
                clipPath: Ah(v),
                isTargetByCursor: Dh(v, s, i),
                getLinearBrushOtherExtent: Th(v, 0),
              },
            ])
            .enableBrush({ brushType: 'lineX', brushStyle: r, removeOnClick: !0 })
            .updateCovers(hd(n));
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
function ud(a, e, t) {
  return (
    t &&
    t.type === 'axisAreaSelect' &&
    e.findComponents({ mainType: 'parallelAxis', query: t })[0] === a
  );
}
function hd(a) {
  var e = a.axis;
  return O(a.activeIntervals, function (t) {
    return {
      brushType: 'lineX',
      panelId: 'pl',
      range: [e.dataToCoord(t[0], !0), e.dataToCoord(t[1], !0)],
    };
  });
}
function vd(a, e) {
  return e.getComponent('parallel', a.get('parallelIndex'));
}
const cd = ld;
var fd = { type: 'axisAreaSelect', event: 'axisAreaSelected' };
function dd(a) {
  a.registerAction(fd, function (e, t) {
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
var pd = {
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
function Fl(a) {
  a.registerComponentView(Yf),
    a.registerComponentModel(qf),
    a.registerCoordinateSystem('parallel', od),
    a.registerPreprocessor(Wf),
    a.registerComponentModel(ao),
    a.registerComponentView(cd),
    Ga(a, 'parallel', ao, pd),
    dd(a);
}
var gd = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function (t, r, n) {
      var i = nl(t);
      a.prototype.init.apply(this, arguments), ro(t, i);
    }),
    (e.prototype.mergeOption = function (t) {
      a.prototype.mergeOption.apply(this, arguments), ro(this.option, t);
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
})(Zt);
function ro(a, e) {
  var t = a.cellSize,
    r;
  F(t) ? (r = t) : (r = a.cellSize = [t, t]), r.length === 1 && (r[1] = r[0]);
  var n = O([0, 1], function (i) {
    return Mh(e, i) && (r[i] = 'auto'), r[i] != null && r[i] !== 'auto';
  });
  il(a, e, { type: 'box', ignoreSize: n });
}
const yd = gd;
var md = (function (a) {
  R(e, a);
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
          v = new Mt({
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
      return at(t) && t ? Ch(t, r) : st(t) ? t(r) : r.nameMap;
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
        (!s || at(s)) && (s && (r = ki(s) || r), (s = r.get(['time', 'monthAbbr']) || []));
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
          var S = o.get('formatter'),
            x = s[+y.m - 1],
            b = { yyyy: y.y, yy: (y.y + '').slice(2), MM: y.m, M: +y.m, nameMap: x },
            w = this._formatterLabel(S, b),
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
        if (!h || at(h)) {
          h && (r = ki(h) || r);
          var f = r.get(['time', 'dayOfWeekShort']);
          h =
            f ||
            O(r.get(['time', 'dayOfWeekAbbr']), function (b) {
              return b[0];
            });
        }
        var d = l.getNextNDay(n.end.time, 7 - n.lweek).time,
          p = [l.getCellWidth(), l.getCellHeight()];
        (v = B(v, Math.min(p[1], p[0]))),
          u === 'start' && ((d = l.getNextNDay(n.start.time, -(7 + n.fweek)).time), (v = -v));
        for (var g = 0; g < 7; g++) {
          var y = l.getNextNDay(d, g),
            m = l.dataToRect([y.time], !1).center,
            S = g;
          S = Math.abs((g + c) % 7);
          var x = new gt({
            z2: 30,
            style: W(yt(s, { text: h[S] }), this._weekTextPositionControl(m, i, u, v, p)),
          });
          o.add(x);
        }
      }
    }),
    (e.type = 'calendar'),
    e
  );
})(ae);
const Sd = md;
var Cr = 864e5,
  xd = (function () {
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
        e = Lh(e);
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
        F(e) && (e = e[0]), t == null && (t = !0);
        var r = this.getDateInfo(e),
          n = this._rangeInfo,
          i = r.formatedDate;
        if (t && !(r.time >= n.start.time && r.time < n.end.time + Cr)) return [NaN, NaN];
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
        var n = no(t);
        return n === this ? n.dataToPoint(r) : null;
      }),
      (a.prototype.convertFromPixel = function (e, t, r) {
        var n = no(t);
        return n === this ? n.pointToData(r) : null;
      }),
      (a.prototype.containPoint = function (e) {
        return console.warn('Not implemented.'), !1;
      }),
      (a.prototype._initRangeOption = function () {
        var e = this._model.get('range'),
          t;
        if ((F(e) && e.length === 1 && (e = e[0]), F(e))) t = e;
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
        var n = Math.floor(t[1].time / Cr) - Math.floor(t[0].time / Cr) + 1,
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
function no(a) {
  var e = a.calendarModel,
    t = a.seriesModel,
    r = e ? e.coordinateSystem : t ? t.coordinateSystem : null;
  return r;
}
const bd = xd;
function wd(a) {
  a.registerComponentModel(yd),
    a.registerComponentView(Sd),
    a.registerCoordinateSystem('calendar', bd);
}
function _d(a, e) {
  var t = a.existing;
  if (((e.id = a.keyInfo.id), !e.type && t && (e.type = t.type), e.parentId == null)) {
    var r = e.parentOption;
    r ? (e.parentId = r.id) : t && (e.parentId = t.parentId);
  }
  e.parentOption = null;
}
function io(a, e) {
  var t;
  return (
    I(e, function (r) {
      a[r] != null && a[r] !== 'auto' && (t = !0);
    }),
    t
  );
}
function Ad(a, e, t) {
  var r = W({}, t),
    n = a[e],
    i = t.$action || 'merge';
  i === 'merge'
    ? n
      ? (Wt(n, r, !0),
        il(n, r, { ignoreSize: !0 }),
        Ph(t, n),
        Da(t, n),
        Da(t, n, 'shape'),
        Da(t, n, 'style'),
        Da(t, n, 'extra'),
        (t.clipPath = n.clipPath))
      : (a[e] = r)
    : i === 'replace'
    ? (a[e] = r)
    : i === 'remove' && n && (a[e] = null);
}
var $l = ['transition', 'enterFrom', 'leaveTo'],
  Dd = $l.concat(['enterAnimation', 'updateAnimation', 'leaveAnimation']);
function Da(a, e, t) {
  if ((t && (!a[t] && e[t] && (a[t] = {}), (a = a[t]), (e = e[t])), !(!a || !e)))
    for (var r = t ? $l : Dd, n = 0; n < r.length; n++) {
      var i = r[n];
      a[i] == null && e[i] != null && (a[i] = e[i]);
    }
}
function Td(a, e) {
  if (
    a &&
    ((a.hv = e.hv = [io(e, ['left', 'right']), io(e, ['top', 'bottom'])]), a.type === 'group')
  ) {
    var t = a,
      r = e;
    t.width == null && (t.width = r.width = 0), t.height == null && (t.height = r.height = 0);
  }
}
var Md = (function (a) {
  R(e, a);
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
      var l = Ih(o, s, 'normalMerge'),
        u = (this._elOptionsToUpdate = []);
      I(
        l,
        function (h, v) {
          var c = h.newOption;
          c && (u.push(c), _d(h, c), Ad(o, v, c), Td(o[v], c));
        },
        this,
      ),
        (n.elements = Ut(o, function (h) {
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
})(Zt);
function Hl(a, e, t, r) {
  return (
    a &&
    (a.legacy || (a.legacy !== !1 && !t && !r && e !== 'tspan' && (e === 'text' || z(a, 'text'))))
  );
}
function Zl(a, e, t) {
  var r = a,
    n,
    i,
    o;
  if (e === 'text') o = r;
  else {
    (o = {}),
      z(r, 'text') && (o.text = r.text),
      z(r, 'rich') && (o.rich = r.rich),
      z(r, 'textFill') && (o.fill = r.textFill),
      z(r, 'textStroke') && (o.stroke = r.textStroke),
      z(r, 'fontFamily') && (o.fontFamily = r.fontFamily),
      z(r, 'fontSize') && (o.fontSize = r.fontSize),
      z(r, 'fontStyle') && (o.fontStyle = r.fontStyle),
      z(r, 'fontWeight') && (o.fontWeight = r.fontWeight),
      (i = { type: 'text', style: o, silent: !0 }),
      (n = {});
    var s = z(r, 'textPosition');
    t ? (n.position = s ? r.textPosition : 'inside') : s && (n.position = r.textPosition),
      z(r, 'textPosition') && (n.position = r.textPosition),
      z(r, 'textOffset') && (n.offset = r.textOffset),
      z(r, 'textRotation') && (n.rotation = r.textRotation),
      z(r, 'textDistance') && (n.distance = r.textDistance);
  }
  return (
    oo(o, a),
    I(o.rich, function (l) {
      oo(l, l);
    }),
    { textConfig: n, textContent: i }
  );
}
function oo(a, e) {
  e &&
    ((e.font = e.textFont || e.font),
    z(e, 'textStrokeWidth') && (a.lineWidth = e.textStrokeWidth),
    z(e, 'textAlign') && (a.align = e.textAlign),
    z(e, 'textVerticalAlign') && (a.verticalAlign = e.textVerticalAlign),
    z(e, 'textLineHeight') && (a.lineHeight = e.textLineHeight),
    z(e, 'textWidth') && (a.width = e.textWidth),
    z(e, 'textHeight') && (a.height = e.textHeight),
    z(e, 'textBackgroundColor') && (a.backgroundColor = e.textBackgroundColor),
    z(e, 'textPadding') && (a.padding = e.textPadding),
    z(e, 'textBorderColor') && (a.borderColor = e.textBorderColor),
    z(e, 'textBorderWidth') && (a.borderWidth = e.textBorderWidth),
    z(e, 'textBorderRadius') && (a.borderRadius = e.textBorderRadius),
    z(e, 'textBoxShadowColor') && (a.shadowColor = e.textBoxShadowColor),
    z(e, 'textBoxShadowBlur') && (a.shadowBlur = e.textBoxShadowBlur),
    z(e, 'textBoxShadowOffsetX') && (a.shadowOffsetX = e.textBoxShadowOffsetX),
    z(e, 'textBoxShadowOffsetY') && (a.shadowOffsetY = e.textBoxShadowOffsetY));
}
function so(a, e, t) {
  var r = a;
  (r.textPosition = r.textPosition || t.position || 'inside'),
    t.offset != null && (r.textOffset = t.offset),
    t.rotation != null && (r.textRotation = t.rotation),
    t.distance != null && (r.textDistance = t.distance);
  var n = r.textPosition.indexOf('inside') >= 0,
    i = a.fill || '#000';
  lo(r, e);
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
      lo(s, s);
    }),
    r
  );
}
function lo(a, e) {
  e &&
    (z(e, 'fill') && (a.textFill = e.fill),
    z(e, 'stroke') && (a.textStroke = e.fill),
    z(e, 'lineWidth') && (a.textStrokeWidth = e.lineWidth),
    z(e, 'font') && (a.font = e.font),
    z(e, 'fontStyle') && (a.fontStyle = e.fontStyle),
    z(e, 'fontWeight') && (a.fontWeight = e.fontWeight),
    z(e, 'fontSize') && (a.fontSize = e.fontSize),
    z(e, 'fontFamily') && (a.fontFamily = e.fontFamily),
    z(e, 'align') && (a.textAlign = e.align),
    z(e, 'verticalAlign') && (a.textVerticalAlign = e.verticalAlign),
    z(e, 'lineHeight') && (a.textLineHeight = e.lineHeight),
    z(e, 'width') && (a.textWidth = e.width),
    z(e, 'height') && (a.textHeight = e.height),
    z(e, 'backgroundColor') && (a.textBackgroundColor = e.backgroundColor),
    z(e, 'padding') && (a.textPadding = e.padding),
    z(e, 'borderColor') && (a.textBorderColor = e.borderColor),
    z(e, 'borderWidth') && (a.textBorderWidth = e.borderWidth),
    z(e, 'borderRadius') && (a.textBorderRadius = e.borderRadius),
    z(e, 'shadowColor') && (a.textBoxShadowColor = e.shadowColor),
    z(e, 'shadowBlur') && (a.textBoxShadowBlur = e.shadowBlur),
    z(e, 'shadowOffsetX') && (a.textBoxShadowOffsetX = e.shadowOffsetX),
    z(e, 'shadowOffsetY') && (a.textBoxShadowOffsetY = e.shadowOffsetY),
    z(e, 'textShadowColor') && (a.textShadowColor = e.textShadowColor),
    z(e, 'textShadowBlur') && (a.textShadowBlur = e.textShadowBlur),
    z(e, 'textShadowOffsetX') && (a.textShadowOffsetX = e.textShadowOffsetX),
    z(e, 'textShadowOffsetY') && (a.textShadowOffsetY = e.textShadowOffsetY));
}
var Ul = { position: ['x', 'y'], scale: ['scaleX', 'scaleY'], origin: ['originX', 'originY'] },
  uo = pt(Ul);
Eh(
  na,
  function (a, e) {
    return (a[e] = 1), a;
  },
  {},
);
na.join(', ');
var Za = ['', 'style', 'shape', 'extra'],
  Ge = wt();
function ai(a, e, t, r, n) {
  var i = a + 'Animation',
    o = sl(a, r, n) || {},
    s = Ge(e).userDuring;
  return (
    o.duration > 0 &&
      ((o.during = s ? U(Ed, { el: e, userDuring: s }) : null), (o.setToFinal = !0), (o.scope = a)),
    W(o, t[i]),
    o
  );
}
function Va(a, e, t, r) {
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
    (Rd(a, e, v),
    vo('shape', e, v),
    vo('extra', e, v),
    !i && s && (kd(a, e, h), ho('shape', a, e, h), ho('extra', a, e, h), Nd(a, e, u, h)),
    (v.style = u),
    Cd(a, v, o),
    Id(a, e),
    s)
  )
    if (i) {
      var c = {};
      I(Za, function (d) {
        var p = d ? e[d] : e;
        p && p.enterFrom && (d && (c[d] = c[d] || {}), W(d ? c[d] : c, p.enterFrom));
      });
      var f = ai('enter', a, e, t, n);
      f.duration > 0 && a.animateFrom(c, f);
    } else Ld(a, e, n || 0, t, h);
  Yl(a, e), u ? a.dirty() : a.markRedraw();
}
function Yl(a, e) {
  for (var t = Ge(a).leaveToProps, r = 0; r < Za.length; r++) {
    var n = Za[r],
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
function Cd(a, e, t) {
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
function Ld(a, e, t, r, n) {
  if (n) {
    var i = ai('update', a, e, r, t);
    i.duration > 0 && a.animateFrom(n, i);
  }
}
function Id(a, e) {
  z(e, 'silent') && (a.silent = e.silent),
    z(e, 'ignore') && (a.ignore = e.ignore),
    a instanceof nr && z(e, 'invisible') && (a.invisible = e.invisible),
    a instanceof Bt && z(e, 'autoBatch') && (a.autoBatch = e.autoBatch);
}
var Xt = {},
  Pd = {
    setTransform: function (a, e) {
      return (Xt.el[a] = e), this;
    },
    getTransform: function (a) {
      return Xt.el[a];
    },
    setShape: function (a, e) {
      var t = Xt.el,
        r = t.shape || (t.shape = {});
      return (r[a] = e), t.dirtyShape && t.dirtyShape(), this;
    },
    getShape: function (a) {
      var e = Xt.el.shape;
      if (e) return e[a];
    },
    setStyle: function (a, e) {
      var t = Xt.el,
        r = t.style;
      return r && ((r[a] = e), t.dirtyStyle && t.dirtyStyle()), this;
    },
    getStyle: function (a) {
      var e = Xt.el.style;
      if (e) return e[a];
    },
    setExtra: function (a, e) {
      var t = Xt.el.extra || (Xt.el.extra = {});
      return (t[a] = e), this;
    },
    getExtra: function (a) {
      var e = Xt.el.extra;
      if (e) return e[a];
    },
  };
function Ed() {
  var a = this,
    e = a.el;
  if (e) {
    var t = Ge(e).userDuring,
      r = a.userDuring;
    if (t !== r) {
      a.el = a.userDuring = null;
      return;
    }
    (Xt.el = e), r(Pd);
  }
}
function ho(a, e, t, r) {
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
      else if (Te(s) || Lt(s, a) >= 0) {
        !o && (o = r[a] = {});
        for (var f = pt(i), h = 0; h < f.length; h++) {
          var v = f[h],
            c = i[v];
          Vd(n[v], c) && (o[v] = c);
        }
      }
    }
  }
}
function vo(a, e, t) {
  var r = e[a];
  if (r)
    for (var n = (t[a] = {}), i = pt(r), o = 0; o < i.length; o++) {
      var s = i[o];
      n[s] = kh(r[s]);
    }
}
function kd(a, e, t) {
  for (var r = e.transition, n = Te(r) ? na : le(r || []), i = 0; i < n.length; i++) {
    var o = n[i];
    if (!(o === 'style' || o === 'shape' || o === 'extra')) {
      var s = a[o];
      t[o] = s;
    }
  }
}
function Rd(a, e, t) {
  for (var r = 0; r < uo.length; r++) {
    var n = uo[r],
      i = Ul[n],
      o = e[n];
    o && ((t[i[0]] = o[0]), (t[i[1]] = o[1]));
  }
  for (var r = 0; r < na.length; r++) {
    var s = na[r];
    e[s] != null && (t[s] = e[s]);
  }
}
function Nd(a, e, t, r) {
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
      } else if (a.getAnimationStyleProps && (Te(s) || Te(o) || Lt(s, 'style') >= 0)) {
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
function Vd(a, e) {
  return ol(a) ? a !== e : a != null && isFinite(a);
}
var Xl = wt(),
  zd = ['percent', 'easing', 'shape', 'style', 'extra'];
function ql(a) {
  a.stopAnimation('keyframe'), a.attr(Xl(a));
}
function Ua(a, e, t) {
  if (!(!t.isAnimationEnabled() || !e)) {
    if (F(e)) {
      I(e, function (s) {
        Ua(a, s, t);
      });
      return;
    }
    var r = e.keyframes,
      n = e.duration;
    if (t && n == null) {
      var i = sl('enter', t, 0);
      n = i && i.duration;
    }
    if (!(!r || !n)) {
      var o = Xl(a);
      I(Za, function (s) {
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
                    (c = Ut(c, function (p) {
                      return Lt(zd, p) < 0;
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
var co = { path: null, compoundPath: null, group: j, image: ye, text: gt },
  Rt = wt(),
  Bd = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.init = function () {
        this._elMap = Ct();
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
            if (d && Hl(d, f, !!g, !!p)) {
              var y = Zl(d, f, !0);
              !g && y.textConfig && (g = l.textConfig = y.textConfig),
                !p && y.textContent && (p = y.textContent);
            }
            var m = Gd(l),
              S = l.$action || 'merge',
              x = S === 'merge',
              b = S === 'replace';
            if (x) {
              var w = !h,
                _ = h;
              w ? (_ = fo(u, c, l.type, n)) : (_ && (Rt(_).isNew = !1), ql(_)),
                _ && (Va(_, m, t, { isInit: w }), po(_, l, o, s));
            } else if (b) {
              za(h, l, n, t);
              var A = fo(u, c, l.type, n);
              A && (Va(A, m, t, { isInit: !0 }), po(A, l, o, s));
            } else S === 'remove' && (Yl(h, l), za(h, l, n, t));
            var M = n.get(u);
            if (M && p)
              if (x) {
                var D = M.getTextContent();
                D ? D.attr(p) : M.setTextContent(new gt(p));
              } else b && M.setTextContent(new gt(p));
            if (M) {
              var T = l.clipPath;
              if (T) {
                var L = T.type,
                  P = void 0,
                  w = !1;
                if (x) {
                  var C = M.getClipPath();
                  (w = !C || Rt(C).type !== L), (P = w ? Dn(L) : C);
                } else b && ((w = !0), (P = Dn(L)));
                M.setClipPath(P), Va(P, T, t, { isInit: w }), Ua(P, T.keyframeAnimation, t);
              }
              var E = Rt(M);
              M.setTextConfig(g),
                (E.option = l),
                Od(M, t, l),
                Rh({ el: M, componentModel: t, itemName: M.name, itemTooltipOption: l.tooltip }),
                Ua(M, l.keyframeAnimation, t);
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
              g = Rt(f),
              y = Rt(d);
            (g.width = B(g.option.width, p ? s : y.width) || 0),
              (g.height = B(g.option.height, p ? l : y.height) || 0);
          }
        }
        for (var h = n.length - 1; h >= 0; h--) {
          var v = n[h],
            c = ie(v.id, null),
            f = c != null ? o.get(c) : null;
          if (f) {
            var d = f.parent,
              y = Rt(d),
              m = d === i ? { width: s, height: l } : { width: y.width, height: y.height },
              S = {},
              x = ll(f, v, m, null, { hv: v.hv, boundingMode: v.bounding }, S);
            if (!Rt(f).isNew && x) {
              for (var b = v.transition, w = {}, _ = 0; _ < u.length; _++) {
                var A = u[_],
                  M = S[A];
                b && (Te(b) || Lt(b, A) >= 0) ? (w[A] = M) : (f[A] = M);
              }
              ht(f, w, t, 0);
            } else f.attr(S);
          }
        }
      }),
      (e.prototype._clear = function () {
        var t = this,
          r = this._elMap;
        r.each(function (n) {
          za(n, Rt(n).option, r, t._lastGraphicModel);
        }),
          (this._elMap = Ct());
      }),
      (e.prototype.dispose = function () {
        this._clear();
      }),
      (e.type = 'graphic'),
      e
    );
  })(ae);
function Dn(a) {
  var e = z(co, a) ? co[a] : ul(a),
    t = new e({});
  return (Rt(t).type = a), t;
}
function fo(a, e, t, r) {
  var n = Dn(t);
  return e.add(n), r.set(a, n), (Rt(n).id = a), (Rt(n).isNew = !0), n;
}
function za(a, e, t, r) {
  var n = a && a.parent;
  n &&
    (a.type === 'group' &&
      a.traverse(function (i) {
        za(i, e, t, r);
      }),
    mr(a, e, r),
    t.removeKey(Rt(a).id));
}
function po(a, e, t, r) {
  a.isGroup ||
    I(
      [
        ['cursor', nr.prototype.cursor],
        ['zlevel', r || 0],
        ['z', t || 0],
        ['z2', 0],
      ],
      function (n) {
        var i = n[0];
        z(e, i) ? (a[i] = Tt(e[i], n[1])) : a[i] == null && (a[i] = n[1]);
      },
    ),
    I(pt(e), function (n) {
      if (n.indexOf('on') === 0) {
        var i = e[n];
        a[n] = st(i) ? i : null;
      }
    }),
    z(e, 'draggable') && (a.draggable = e.draggable),
    e.name != null && (a.name = e.name),
    e.id != null && (a.id = e.id);
}
function Gd(a) {
  return (
    (a = W({}, a)),
    I(
      ['id', 'parentId', '$action', 'hv', 'bounding', 'textContent', 'clipPath'].concat(Nh),
      function (e) {
        delete a[e];
      },
    ),
    a
  );
}
function Od(a, e, t) {
  var r = ut(a).eventData;
  !a.silent &&
    !a.ignore &&
    !r &&
    (r = ut(a).eventData =
      { componentType: 'graphic', componentIndex: e.componentIndex, name: a.name }),
    r && (r.info = t.info);
}
function Wd(a) {
  a.registerComponentModel(Md),
    a.registerComponentView(Bd),
    a.registerPreprocessor(function (e) {
      var t = e.graphic;
      F(t)
        ? !t[0] || !t[0].elements
          ? (e.graphic = [{ elements: t }])
          : (e.graphic = [e.graphic[0]])
        : t && !t.elements && (e.graphic = [{ elements: [t] }]);
    });
}
var Fd = ['rect', 'polygon', 'keep', 'clear'];
function $d(a, e) {
  var t = le(a ? a.brush : []);
  if (t.length) {
    var r = [];
    I(t, function (l) {
      var u = l.hasOwnProperty('toolbox') ? l.toolbox : [];
      u instanceof Array && (r = r.concat(u));
    });
    var n = a && a.toolbox;
    F(n) && (n = n[0]), n || ((n = { feature: {} }), (a.toolbox = [n]));
    var i = n.feature || (n.feature = {}),
      o = i.brush || (i.brush = {}),
      s = o.type || (o.type = []);
    s.push.apply(s, r), Hd(s), e && !s.length && s.push.apply(s, Fd);
  }
}
function Hd(a) {
  var e = {};
  I(a, function (t) {
    e[t] = 1;
  }),
    (a.length = 0),
    I(e, function (t, r) {
      a.push(r);
    });
}
function Zd(a) {
  var e = a.brushType,
    t = {
      point: function (r) {
        return go[e].point(r, t, a);
      },
      rect: function (r) {
        return go[e].rect(r, t, a);
      },
    };
  return t;
}
var go = {
  lineX: yo(0),
  lineY: yo(1),
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
        Jt.create(a).contain(l[0], l[1]) ||
        Sa(n, i, n + o, i, r) ||
        Sa(n, i, n, i + s, r) ||
        Sa(n + o, i, n + o, i + s, r) ||
        Sa(n, i + s, n + o, i + s, r)
      )
        return !0;
    },
  },
};
function yo(a) {
  var e = ['x', 'y'],
    t = ['width', 'height'];
  return {
    point: function (r, n, i) {
      if (r) {
        var o = i.range,
          s = r[a];
        return $e(s, o);
      }
    },
    rect: function (r, n, i) {
      if (r) {
        var o = i.range,
          s = [r[e[a]], r[e[a]] + r[t[a]]];
        return s[1] < s[0] && s.reverse(), $e(s[0], o) || $e(s[1], o) || $e(o[0], s) || $e(o[1], s);
      }
    },
  };
}
function $e(a, e) {
  return e[0] <= a && a <= e[1];
}
var mo = ['inBrush', 'outOfBrush'],
  Lr = '__ecBrushSelect',
  Tn = '__ecInBrushSelectEvent';
function Kl(a) {
  a.eachComponent({ mainType: 'brush' }, function (e) {
    var t = (e.brushTargetManager = new Bh(e.option, a));
    t.setInputRanges(e.areas, a);
  });
}
function Ud(a, e, t) {
  var r = [],
    n,
    i;
  a.eachComponent({ mainType: 'brush' }, function (o) {
    t &&
      t.type === 'takeGlobalCursor' &&
      o.setBrushOption(t.key === 'brush' ? t.brushOption : { brushType: !1 });
  }),
    Kl(a),
    a.eachComponent({ mainType: 'brush' }, function (o, s) {
      var l = { brushId: o.id, brushIndex: s, brushName: o.name, areas: Pt(o.areas), selected: [] };
      r.push(l);
      var u = o.option,
        h = u.brushLink,
        v = [],
        c = [],
        f = [],
        d = !1;
      s || ((n = u.throttleType), (i = u.throttleDelay));
      var p = O(o.areas, function (b) {
          var w = Kd[b.brushType],
            _ = nt({ boundingRect: w ? w(b) : void 0 }, b);
          return (_.selectors = Zd(_)), _;
        }),
        g = Vh(o.option, mo, function (b) {
          b.mappingMethod = 'fixed';
        });
      F(h) &&
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
        b.subType === 'parallel' ? S(b, w) : x(b, w, _);
      });
      function S(b, w) {
        var _ = b.coordinateSystem;
        (d = d || _.hasAxisBrushed()),
          y(w) &&
            _.eachActiveState(b.getData(), function (A, M) {
              A === 'active' && (c[M] = 1);
            });
      }
      function x(b, w, _) {
        if (
          !(!b.brushSelector || qd(o, w)) &&
          (I(p, function (M) {
            o.brushTargetManager.controlSeries(M, b, a) && _.push(M), (d = d || m(_));
          }),
          y(w) && m(_))
        ) {
          var A = b.getData();
          A.each(function (M) {
            So(b, _, A, M) && (c[M] = 1);
          });
        }
      }
      a.eachSeries(function (b, w) {
        var _ = { seriesId: b.id, seriesIndex: w, seriesName: b.name, dataIndex: [] };
        l.selected.push(_);
        var A = f[w],
          M = b.getData(),
          D = y(w)
            ? function (T) {
                return c[T] ? (_.dataIndex.push(M.getRawIndex(T)), 'inBrush') : 'outOfBrush';
              }
            : function (T) {
                return So(b, A, M, T)
                  ? (_.dataIndex.push(M.getRawIndex(T)), 'inBrush')
                  : 'outOfBrush';
              };
        (y(w) ? d : m(A)) && zh(mo, g, M, D);
      });
    }),
    Yd(e, n, i, r, t);
}
function Yd(a, e, t, r, n) {
  if (n) {
    var i = a.getZr();
    if (!i[Tn]) {
      i[Lr] || (i[Lr] = Xd);
      var o = ar(i, Lr, t, e);
      o(a, r);
    }
  }
}
function Xd(a, e) {
  if (!a.isDisposed()) {
    var t = a.getZr();
    (t[Tn] = !0), a.dispatchAction({ type: 'brushSelect', batch: e }), (t[Tn] = !1);
  }
}
function So(a, e, t, r) {
  for (var n = 0, i = e.length; n < i; n++) {
    var o = e[n];
    if (a.brushSelector(r, t, o.selectors, o)) return !0;
  }
}
function qd(a, e) {
  var t = a.option.seriesIndex;
  return t != null && t !== 'all' && (F(t) ? Lt(t, e) < 0 : e !== t);
}
var Kd = {
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
  return new Jt(a[0][0], a[1][0], a[0][1] - a[0][0], a[1][1] - a[1][0]);
}
var jd = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function (t, r) {
      (this.ecModel = t),
        (this.api = r),
        this.model,
        (this._brushController = new rl(r.getZr())).on('brush', U(this._onBrush, this)).mount();
    }),
    (e.prototype.render = function (t, r, n, i) {
      (this.model = t), this._updateController(t, r, n, i);
    }),
    (e.prototype.updateTransform = function (t, r, n, i) {
      Kl(r), this._updateController(t, r, n, i);
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
        this.api.dispatchAction({ type: 'brush', brushId: r, areas: Pt(n), $from: r }),
        t.isEnd &&
          this.api.dispatchAction({ type: 'brushEnd', brushId: r, areas: Pt(n), $from: r });
    }),
    (e.type = 'brush'),
    e
  );
})(ae);
const Jd = jd;
var Qd = '#ddd',
  tp = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t.areas = []), (t.brushOption = {}), t;
    }
    return (
      (e.prototype.optionUpdated = function (t, r) {
        var n = this.option;
        !r && Gh(n, t, ['inBrush', 'outOfBrush']);
        var i = (n.inBrush = n.inBrush || {});
        (n.outOfBrush = n.outOfBrush || { color: Qd }), i.hasOwnProperty('liftZ') || (i.liftZ = 5);
      }),
      (e.prototype.setAreas = function (t) {
        t &&
          (this.areas = O(
            t,
            function (r) {
              return bo(this.option, r);
            },
            this,
          ));
      }),
      (e.prototype.setBrushOption = function (t) {
        (this.brushOption = bo(this.option, t)), (this.brushType = this.brushOption.brushType);
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
  })(Zt);
function bo(a, e) {
  return Wt(
    {
      brushType: a.brushType,
      brushMode: a.brushMode,
      transformable: a.transformable,
      brushStyle: new jt(a.brushStyle).getItemStyle(),
      removeOnClick: a.removeOnClick,
      z: a.z,
    },
    e,
    !0,
  );
}
const ep = tp;
var ap = ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
  rp = (function (a) {
    R(e, a);
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
          type: ap.slice(),
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
  })(Oh);
const np = rp;
function ip(a) {
  a.registerComponentView(Jd),
    a.registerComponentModel(ep),
    a.registerPreprocessor($d),
    a.registerVisual(a.PRIORITY.VISUAL.BRUSH, Ud),
    a.registerAction({ type: 'brush', event: 'brush', update: 'updateVisual' }, function (e, t) {
      t.eachComponent({ mainType: 'brush', query: e }, function (r) {
        r.setAreas(e.areas);
      });
    }),
    a.registerAction({ type: 'brushSelect', event: 'brushSelected', update: 'none' }, Be),
    a.registerAction({ type: 'brushEnd', event: 'brushEnd', update: 'none' }, Be),
    Wh('brush', np);
}
var op = (function (a) {
  R(e, a);
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
            var v = ie(Fh(u), ''),
              c;
            Le(u) ? ((c = Pt(u)), (c.value = h)) : (c = h), o.push(c), i.push(v);
          }))
        : (o = r);
      var s = { category: 'ordinal', time: 'time', value: 'number' }[n] || 'number',
        l = (this._data = new It([{ name: 'value', type: s }], this));
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
})(Zt);
const wo = op;
var jl = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.type = 'timeline.slider'),
    (e.defaultOption = ir(wo.defaultOption, {
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
})(wo);
te(jl, hl.prototype);
const sp = jl;
var lp = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (e.type = 'timeline'), e;
})(ae);
const up = lp;
var hp = (function (a) {
  R(e, a);
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
const vp = hp;
var Ir = Math.PI,
  _o = wt(),
  cp = (function (a) {
    R(e, a);
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
            return Vt('nameValue', { noName: !0, value: h });
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
          o = dp(t, r),
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
          : at(n)
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
          S,
          x,
          b = c.get('position', !0),
          w = f && c.get('showPlayBtn', !0),
          _ = f && c.get('showPrevBtn', !0),
          A = f && c.get('showNextBtn', !0),
          M = 0,
          D = v;
        b === 'left' || b === 'bottom'
          ? (w && ((m = [0, 0]), (M += g)),
            _ && ((S = [M, 0]), (M += g)),
            A && ((x = [D - d, 0]), (D -= g)))
          : (w && ((m = [D - d, 0]), (D -= g)),
            _ && ((S = [0, 0]), (M += g)),
            A && ((x = [D - d, 0]), (D -= g)));
        var T = [M, D];
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
            prevBtnPosition: S,
            nextBtnPosition: x,
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
          var s = tr(),
            l = o.x,
            u = o.y + o.height;
          ze(s, s, [-l, -u]),
            Gn(s, s, -Ir / 2),
            ze(s, s, [l, u]),
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
        if (p == null || at(p)) {
          var g = p === '+' ? 0 : 1;
          S(f, v, h, 1, g), S(d, c, h, 1, 1 - g);
        } else {
          var g = p >= 0 ? 0 : 1;
          S(f, v, h, 1, g), (d[1] = f[1] + p);
        }
        n.setPosition(f), i.setPosition(d), (n.rotation = i.rotation = t.rotation), y(n), y(i);
        function y(x) {
          (x.originX = h[0][0] - x.x), (x.originY = h[1][0] - x.y);
        }
        function m(x) {
          return [
            [x.x, x.x + x.width],
            [x.y, x.y + x.height],
          ];
        }
        function S(x, b, w, _, A) {
          x[_] += w[_][A] - b[_][A];
        }
      }),
      (e.prototype._createAxis = function (t, r) {
        var n = r.getData(),
          i = r.get('axisType'),
          o = fp(r, i);
        o.getTicks = function () {
          return n.mapArray(['value'], function (u) {
            return { value: u };
          });
        };
        var s = n.getDataExtent('value');
        o.setExtent(s[0], s[1]), o.calcNiceTicks();
        var l = new vp('value', o, t.axisExtent, i);
        return (l.model = r), l;
      }),
      (e.prototype._createGroup = function (t) {
        var r = (this[t] = new j());
        return this.group.add(r), r;
      }),
      (e.prototype._renderAxisLine = function (t, r, n, i) {
        var o = n.getExtent();
        if (i.get(['lineStyle', 'show'])) {
          var s = new Kt({
            shape: { x1: o[0], y1: 0, x2: o[1], y2: 0 },
            style: W({ lineCap: 'round' }, i.getModel('lineStyle').getLineStyle()),
            silent: !0,
            z2: 1,
          });
          r.add(s);
          var l = (this._progressLine = new Kt({
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
              g = Ao(v, c, r, p);
            (g.ensureState('emphasis').style = f.getItemStyle()),
              (g.ensureState('progress').style = d.getItemStyle()),
              Na(g);
            var y = ut(g);
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
                Na(y),
                (_o(y).dataIndex = v),
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
            var y = $h(Tt(i.get(['controlStyle', d + 'BtnSize']), o), o),
              m = [0, -y / 2, y, y],
              S = pp(i, d + 'Icon', m, {
                x: f[0],
                y: f[1],
                originX: o / 2,
                originY: 0,
                rotation: g ? -s : 0,
                rectHover: !0,
                style: l,
                onclick: p,
              });
            (S.ensureState('emphasis').style = u), r.add(S), Na(S);
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
                Do(v, u._progressLine, s, n, i, !0);
            },
            onUpdate: function (v) {
              Do(v, u._progressLine, s, n, i);
            },
          };
        this._currentPointer = Ao(l, l, this._mainGroup, {}, this._currentPointer, h);
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
            n && n[i] && n[i].toggleState('progress', _o(n[i]).dataIndex <= t);
      }),
      (e.type = 'timeline.slider'),
      e
    );
  })(up);
function fp(a, e) {
  if (((e = e || a.get('type')), e))
    switch (e) {
      case 'category':
        return new Zh({ ordinalMeta: a.getCategories(), extent: [1 / 0, -1 / 0] });
      case 'time':
        return new Hh({ locale: a.ecModel.getLocaleModel(), useUTC: a.ecModel.get('useUTC') });
      default:
        return new dn();
    }
}
function dp(a, e) {
  return re(
    a.getBoxLayoutParams(),
    { width: e.getWidth(), height: e.getHeight() },
    a.get('padding'),
  );
}
function pp(a, e, t, r) {
  var n = r.style,
    i = Uh(a.get(['controlStyle', e]), r || {}, new Jt(t[0], t[1], t[2], t[3]));
  return n && i.setStyle(n), i;
}
function Ao(a, e, t, r, n, i) {
  var o = e.get('color');
  if (n) n.setColor(o), t.add(n), i && i.onUpdate(n);
  else {
    var s = a.get('symbol');
    (n = $t(s, -1, -1, 2, 2, o)), n.setStyle('strokeNoScale', !0), t.add(n), i && i.onCreate(n);
  }
  var l = e.getItemStyle(['color']);
  n.setStyle(l), (r = Wt({ rectHover: !0, z2: 100 }, r, !0));
  var u = pa(a.get('symbolSize'));
  (r.scaleX = u[0] / 2), (r.scaleY = u[1] / 2);
  var h = ga(a.get('symbolOffset'), u);
  h && ((r.x = (r.x || 0) + h[0]), (r.y = (r.y || 0) + h[1]));
  var v = a.get('symbolRotate');
  return (r.rotation = ((v || 0) * Math.PI) / 180 || 0), n.attr(r), n.updateTransform(), n;
}
function Do(a, e, t, r, n, i) {
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
const gp = cp;
function yp(a) {
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
function mp(a) {
  var e = a && a.timeline;
  F(e) || (e = e ? [e] : []),
    I(e, function (t) {
      t && Sp(t);
    });
}
function Sp(a) {
  var e = a.type,
    t = { number: 'value', time: 'time' };
  if ((t[e] && ((a.axisType = t[e]), delete a.type), To(a), Ae(a, 'controlPosition'))) {
    var r = a.controlStyle || (a.controlStyle = {});
    Ae(r, 'position') || (r.position = a.controlPosition),
      r.position === 'none' && !Ae(r, 'show') && ((r.show = !1), delete r.position),
      delete a.controlPosition;
  }
  I(a.data || [], function (n) {
    Le(n) && !F(n) && (!Ae(n, 'value') && Ae(n, 'name') && (n.value = n.name), To(n));
  });
}
function To(a) {
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
function xp(a) {
  a.registerComponentModel(sp),
    a.registerComponentView(gp),
    a.registerSubTypeDefaulter('timeline', function () {
      return 'slider';
    }),
    yp(a),
    a.registerPreprocessor(mp);
}
function ri(a, e) {
  if (!a) return !1;
  for (var t = F(a) ? a : [a], r = 0; r < t.length; r++) if (t[r] && t[r][e]) return !0;
  return !1;
}
function Ta(a) {
  Hn(a, 'label', ['show']);
}
var Ma = wt(),
  Jl = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t.createdBySelf = !1), t;
    }
    return (
      (e.prototype.init = function (t, r, n) {
        this.mergeDefaultAndTheme(t, n), this._mergeOption(t, n, !1, !0);
      }),
      (e.prototype.isAnimationEnabled = function () {
        if (Yh.node) return !1;
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
              u = Ma(s)[o];
            if (!l || !l.data) {
              Ma(s)[o] = null;
              return;
            }
            u
              ? u._mergeOption(l, r, !0)
              : (i && Ta(l),
                I(l.data, function (h) {
                  h instanceof Array ? (Ta(h[0]), Ta(h[1])) : Ta(h);
                }),
                (u = this.createMarkerModelFromSeries(l, this, r)),
                W(u, {
                  mainType: this.mainType,
                  seriesIndex: s.seriesIndex,
                  name: s.name,
                  createdBySelf: !0,
                }),
                (u.__hostSeries = s)),
              (Ma(s)[o] = u);
          }, this);
      }),
      (e.prototype.formatTooltip = function (t, r, n) {
        var i = this.getData(),
          o = this.getRawValue(t),
          s = i.getName(t);
        return Vt('section', {
          header: this.name,
          blocks: [Vt('nameValue', { name: s, value: o, noName: !s, noValue: o == null })],
        });
      }),
      (e.prototype.getData = function () {
        return this._data;
      }),
      (e.prototype.setData = function (t) {
        this._data = t;
      }),
      (e.getMarkerModelFromSeries = function (t, r) {
        return Ma(t)[r];
      }),
      (e.type = 'marker'),
      (e.dependencies = ['series', 'grid', 'polar', 'geo']),
      e
    );
  })(Zt);
te(Jl, hl.prototype);
const de = Jl;
var bp = (function (a) {
  R(e, a);
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
const wp = bp;
function Mn(a) {
  return !(isNaN(parseFloat(a.x)) && isNaN(parseFloat(a.y)));
}
function _p(a) {
  return !isNaN(parseFloat(a.x)) && !isNaN(parseFloat(a.y));
}
function Ca(a, e, t, r, n, i) {
  var o = [],
    s = tl(e, r),
    l = s ? e.getCalculationInfo('stackResultDimension') : r,
    u = ni(e, l, a),
    h = e.indicesOfNearest(l, u)[0];
  (o[n] = e.get(t, h)), (o[i] = e.get(l, h));
  var v = e.get(r, h),
    c = Xh(e.get(r, h));
  return (c = Math.min(c, 20)), c >= 0 && (o[i] = +o[i].toFixed(c)), [o, v];
}
var Pr = {
  min: it(Ca, 'min'),
  max: it(Ca, 'max'),
  average: it(Ca, 'average'),
  median: it(Ca, 'median'),
};
function oa(a, e) {
  if (e) {
    var t = a.getData(),
      r = a.coordinateSystem,
      n = r && r.dimensions;
    if (!_p(e) && !F(e.coord) && F(n)) {
      var i = Ql(e, t, r, a);
      if (((e = Pt(e)), e.type && Pr[e.type] && i.baseAxis && i.valueAxis)) {
        var o = Lt(n, i.baseAxis.dim),
          s = Lt(n, i.valueAxis.dim),
          l = Pr[e.type](t, i.baseDataDim, i.valueDataDim, o, s);
        (e.coord = l[0]), (e.value = l[1]);
      } else
        e.coord = [
          e.xAxis != null ? e.xAxis : e.radiusAxis,
          e.yAxis != null ? e.yAxis : e.angleAxis,
        ];
    }
    if (e.coord == null || !F(n)) e.coord = [];
    else
      for (var u = e.coord, h = 0; h < 2; h++)
        Pr[u[h]] && (u[h] = ni(t, t.mapDimension(n[h]), u[h]));
    return e;
  }
}
function Ql(a, e, t, r) {
  var n = {};
  return (
    a.valueIndex != null || a.valueDim != null
      ? ((n.valueDataDim = a.valueIndex != null ? e.getDimension(a.valueIndex) : a.valueDim),
        (n.valueAxis = t.getAxis(Ap(r, n.valueDataDim))),
        (n.baseAxis = t.getOtherAxis(n.valueAxis)),
        (n.baseDataDim = e.mapDimension(n.baseAxis.dim)))
      : ((n.baseAxis = r.getBaseAxis()),
        (n.valueAxis = t.getOtherAxis(n.baseAxis)),
        (n.baseDataDim = e.mapDimension(n.baseAxis.dim)),
        (n.valueDataDim = e.mapDimension(n.valueAxis.dim))),
    n
  );
}
function Ap(a, e) {
  var t = a.getData().getDimensionInfo(e);
  return t && t.coordDim;
}
function sa(a, e) {
  return a && a.containData && e.coord && !Mn(e) ? a.containData(e.coord) : !0;
}
function Dp(a, e, t) {
  return a && a.containZone && e.coord && t.coord && !Mn(e) && !Mn(t)
    ? a.containZone(e.coord, t.coord)
    : !0;
}
function tu(a, e) {
  return a
    ? function (t, r, n, i) {
        var o = i < 2 ? t.coord && t.coord[i] : t.value;
        return Oa(o, e[i]);
      }
    : function (t, r, n, i) {
        return Oa(t.value, e[i]);
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
var Er = wt(),
  Tp = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.init = function () {
        this.markerGroupMap = Ct();
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
              l && (r ? qh(l) : Kh(l));
            });
          }
        });
      }),
      (e.type = 'marker'),
      e
    );
  })(ae);
const ii = Tp;
function Mo(a, e, t) {
  var r = e.coordinateSystem;
  a.each(function (n) {
    var i = a.getItemModel(n),
      o,
      s = B(i.get('x'), t.getWidth()),
      l = B(i.get('y'), t.getHeight());
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
var Mp = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.updateTransform = function (t, r, n) {
      r.eachSeries(function (i) {
        var o = de.getMarkerModelFromSeries(i, 'markPoint');
        o && (Mo(o.getData(), i, n), this.markerGroupMap.get(i.id).updateLayout());
      }, this);
    }),
    (e.prototype.renderSeries = function (t, r, n, i) {
      var o = t.coordinateSystem,
        s = t.id,
        l = t.getData(),
        u = this.markerGroupMap,
        h = u.get(s) || u.set(s, new or()),
        v = Cp(o, t, r);
      r.setData(v),
        Mo(r.getData(), t, i),
        v.each(function (c) {
          var f = v.getItemModel(c),
            d = f.getShallow('symbol'),
            p = f.getShallow('symbolSize'),
            g = f.getShallow('symbolRotate'),
            y = f.getShallow('symbolOffset'),
            m = f.getShallow('symbolKeepAspect');
          if (st(d) || st(p) || st(g) || st(y)) {
            var S = r.getRawValue(c),
              x = r.getDataParams(c);
            st(d) && (d = d(S, x)),
              st(p) && (p = p(S, x)),
              st(g) && (g = g(S, x)),
              st(y) && (y = y(S, x));
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
            ut(f).dataModel = r;
          });
        }),
        this.markKeep(h),
        (h.group.silent = r.get('silent') || t.get('silent'));
    }),
    (e.type = 'markPoint'),
    e
  );
})(ii);
function Cp(a, e, t) {
  var r;
  a
    ? (r = O(a && a.dimensions, function (s) {
        var l = e.getData().getDimensionInfo(e.getData().mapDimension(s)) || {};
        return W(W({}, l), { name: s, ordinalMeta: null });
      }))
    : (r = [{ name: 'value', type: 'float' }]);
  var n = new It(r, t),
    i = O(t.get('data'), it(oa, e));
  a && (i = Ut(i, it(sa, a)));
  var o = tu(!!a, r);
  return n.initData(i, null, o), n;
}
const Lp = Mp;
function Ip(a) {
  a.registerComponentModel(wp),
    a.registerComponentView(Lp),
    a.registerPreprocessor(function (e) {
      ri(e.series, 'markPoint') && (e.markPoint = e.markPoint || {});
    });
}
var Pp = (function (a) {
  R(e, a);
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
const Ep = Pp;
var Co = Kt.prototype,
  kr = vl.prototype,
  eu = (function () {
    function a() {
      (this.x1 = 0), (this.y1 = 0), (this.x2 = 0), (this.y2 = 0), (this.percent = 1);
    }
    return a;
  })();
(function (a) {
  R(e, a);
  function e() {
    return (a !== null && a.apply(this, arguments)) || this;
  }
  return e;
})(eu);
function Rr(a) {
  return isNaN(+a.cpx1) || isNaN(+a.cpy1);
}
var kp = (function (a) {
  R(e, a);
  function e(t) {
    var r = a.call(this, t) || this;
    return (r.type = 'ec-line'), r;
  }
  return (
    (e.prototype.getDefaultStyle = function () {
      return { stroke: '#000', fill: null };
    }),
    (e.prototype.getDefaultShape = function () {
      return new eu();
    }),
    (e.prototype.buildPath = function (t, r) {
      Rr(r) ? Co.buildPath.call(this, t, r) : kr.buildPath.call(this, t, r);
    }),
    (e.prototype.pointAt = function (t) {
      return Rr(this.shape) ? Co.pointAt.call(this, t) : kr.pointAt.call(this, t);
    }),
    (e.prototype.tangentAt = function (t) {
      var r = this.shape,
        n = Rr(r) ? [r.x2 - r.x1, r.y2 - r.y1] : kr.tangentAt.call(this, t);
      return ya(n, n);
    }),
    e
  );
})(Bt);
const Rp = kp;
var Nr = ['fromSymbol', 'toSymbol'];
function Lo(a) {
  return '_' + a + 'Type';
}
function Io(a, e, t) {
  var r = e.getItemVisual(t, a);
  if (!r || r === 'none') return r;
  var n = e.getItemVisual(t, a + 'Size'),
    i = e.getItemVisual(t, a + 'Rotate'),
    o = e.getItemVisual(t, a + 'Offset'),
    s = e.getItemVisual(t, a + 'KeepAspect'),
    l = pa(n),
    u = ga(o || 0, l);
  return r + l + u + (i || '') + (s || '');
}
function Po(a, e, t) {
  var r = e.getItemVisual(t, a);
  if (!(!r || r === 'none')) {
    var n = e.getItemVisual(t, a + 'Size'),
      i = e.getItemVisual(t, a + 'Rotate'),
      o = e.getItemVisual(t, a + 'Offset'),
      s = e.getItemVisual(t, a + 'KeepAspect'),
      l = pa(n),
      u = ga(o || 0, l),
      h = $t(r, -l[0] / 2 + u[0], -l[1] / 2 + u[1], l[0], l[1], null, s);
    return (
      (h.__specifiedRotation = i == null || isNaN(i) ? void 0 : (+i * Math.PI) / 180 || 0),
      (h.name = a),
      h
    );
  }
}
function Np(a) {
  var e = new Rp({ name: 'line', subPixelOptimize: !0 });
  return Cn(e.shape, a), e;
}
function Cn(a, e) {
  (a.x1 = e[0][0]), (a.y1 = e[0][1]), (a.x2 = e[1][0]), (a.y2 = e[1][1]), (a.percent = 1);
  var t = e[2];
  t ? ((a.cpx1 = t[0]), (a.cpy1 = t[1])) : ((a.cpx1 = NaN), (a.cpy1 = NaN));
}
var Vp = (function (a) {
  R(e, a);
  function e(t, r, n) {
    var i = a.call(this) || this;
    return i._createLine(t, r, n), i;
  }
  return (
    (e.prototype._createLine = function (t, r, n) {
      var i = t.hostModel,
        o = t.getItemLayout(r),
        s = Np(o);
      (s.shape.percent = 0),
        Ht(s, { shape: { percent: 1 } }, i, r),
        this.add(s),
        I(
          Nr,
          function (l) {
            var u = Po(l, t, r);
            this.add(u), (this[Lo(l)] = Io(l, t, r));
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
      Cn(l.shape, s),
        ht(o, l, i, r),
        I(
          Nr,
          function (u) {
            var h = Io(u, t, r),
              v = Lo(u);
            if (this[v] !== h) {
              this.remove(this.childOfName(u));
              var c = Po(u, t, r);
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
          (h = zt(d));
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
                var M = pn[A],
                  D = o.getState(M);
                if (D) {
                  var T = D.style || {},
                    L = _.ensureState(M),
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
      Qt(this, h, {
        labelDataIndex: r,
        labelFetcher: {
          getFormattedLabel: function (w, _) {
            return i.getFormattedLabel(w, _, t.dataType);
          },
        },
        inheritColor: y || '#000',
        defaultOpacity: g.opacity,
        defaultText: (m == null ? t.getName(r) : isFinite(m) ? $n(m) : m) + '',
      });
      var S = this.getTextContent();
      if (S) {
        var x = h.normal;
        (S.__align = S.style.align),
          (S.__verticalAlign = S.style.verticalAlign),
          (S.__position = x.get('position') || 'middle');
        var b = x.get('distance');
        F(b) || (b = [b, b]), (S.__labelDistance = b);
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
      Cn(r.shape, t), r.dirty();
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
      ya(c, c);
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
          S = u / 2,
          x = l.tangentAt(S),
          b = [x[1], -x[0]],
          w = l.pointAt(S);
        b[1] > 0 && ((b[0] = -b[0]), (b[1] = -b[1]));
        var _ = x[0] < 0 ? -1 : 1;
        if (i.__position !== 'start' && i.__position !== 'end') {
          var A = -Math.atan2(x[1], x[0]);
          v[0] < h[0] && (A = Math.PI + A), (i.rotation = A);
        }
        var M = void 0;
        switch (i.__position) {
          case 'insideStartTop':
          case 'insideMiddleTop':
          case 'insideEndTop':
          case 'middle':
            (M = -m), (p = 'bottom');
            break;
          case 'insideStartBottom':
          case 'insideMiddleBottom':
          case 'insideEndBottom':
            (M = m), (p = 'top');
            break;
          default:
            (M = 0), (p = 'middle');
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
              (i.y = h[1] + M),
              (d = x[0] < 0 ? 'right' : 'left'),
              (i.originX = -y * _),
              (i.originY = -M);
            break;
          case 'insideMiddleTop':
          case 'insideMiddle':
          case 'insideMiddleBottom':
          case 'middle':
            (i.x = w[0]), (i.y = w[1] + M), (d = 'center'), (i.originY = -M);
            break;
          case 'insideEndTop':
          case 'insideEnd':
          case 'insideEndBottom':
            (i.x = -y * _ + v[0]),
              (i.y = v[1] + M),
              (d = x[0] >= 0 ? 'right' : 'left'),
              (i.originX = y * _),
              (i.originY = -M);
            break;
        }
        (i.scaleX = i.scaleY = o),
          i.setStyle({ verticalAlign: i.__verticalAlign || p, align: i.__align || d });
      }
    }),
    e
  );
})(j);
const oi = Vp;
var zp = (function () {
  function a(e) {
    (this.group = new j()), (this._LineCtor = e || oi);
  }
  return (
    (a.prototype.updateData = function (e) {
      var t = this;
      this._progressiveEls = null;
      var r = this,
        n = r.group,
        i = r._lineData;
      (r._lineData = e), i || n.removeAll();
      var o = Eo(e);
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
      (this._seriesScope = Eo(e)), (this._lineData = null), this.group.removeAll();
    }),
    (a.prototype.incrementalUpdate = function (e, t) {
      this._progressiveEls = [];
      function r(s) {
        !s.isGroup && !Bp(s) && ((s.incremental = !0), (s.ensureState('emphasis').hoverLayer = !0));
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
      sr(this._progressiveEls || this.group, e);
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
function Bp(a) {
  return a.animators && a.animators.length > 0;
}
function Eo(a) {
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
    labelStatesModels: zt(e),
  };
}
function ko(a) {
  return isNaN(a[0]) || isNaN(a[1]);
}
function Vr(a) {
  return a && !ko(a[0]) && !ko(a[1]);
}
const si = zp;
var La = wt(),
  Gp = function (a, e, t, r) {
    var n = a.getData(),
      i;
    if (F(r)) i = r;
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
          (s = e.getAxis(r.yAxis != null ? 'y' : 'x')), (l = Ot(r.yAxis, r.xAxis));
        else {
          var u = Ql(r, n, e, a);
          s = u.valueAxis;
          var h = jh(n, u.valueDataDim);
          l = ni(n, h, o);
        }
        var v = s.dim === 'x' ? 0 : 1,
          c = 1 - v,
          f = Pt(r),
          d = { coord: [] };
        (f.type = null), (f.coord = []), (f.coord[c] = -1 / 0), (d.coord[c] = 1 / 0);
        var p = t.get('precision');
        p >= 0 && Ft(l) && (l = +l.toFixed(Math.min(p, 20))),
          (f.coord[v] = d.coord[v] = l),
          (i = [f, d, { type: o, valueIndex: r.valueIndex, value: l }]);
      } else i = [];
    }
    var g = [oa(a, i[0]), oa(a, i[1]), W({}, i[2])];
    return (g[2].type = g[2].type || null), Wt(g[2], g[0]), Wt(g[2], g[1]), g;
  };
function Ya(a) {
  return !isNaN(a) && !isFinite(a);
}
function Ro(a, e, t, r) {
  var n = 1 - a,
    i = r.dimensions[a];
  return Ya(e[n]) && Ya(t[n]) && e[a] === t[a] && r.getAxis(i).containData(e[a]);
}
function Op(a, e) {
  if (a.type === 'cartesian2d') {
    var t = e[0].coord,
      r = e[1].coord;
    if (t && r && (Ro(1, t, r, a) || Ro(0, t, r, a))) return !0;
  }
  return sa(a, e[0]) && sa(a, e[1]);
}
function zr(a, e, t, r, n) {
  var i = r.coordinateSystem,
    o = a.getItemModel(e),
    s,
    l = B(o.get('x'), n.getWidth()),
    u = B(o.get('y'), n.getHeight());
  if (!isNaN(l) && !isNaN(u)) s = [l, u];
  else {
    if (r.getMarkerPosition) s = r.getMarkerPosition(a.getValues(a.dimensions, e));
    else {
      var h = i.dimensions,
        v = a.get(h[0], e),
        c = a.get(h[1], e);
      s = i.dataToPoint([v, c]);
    }
    if (lr(i, 'cartesian2d')) {
      var f = i.getAxis('x'),
        d = i.getAxis('y'),
        h = i.dimensions;
      Ya(a.get(h[0], e))
        ? (s[0] = f.toGlobalCoord(f.getExtent()[t ? 0 : 1]))
        : Ya(a.get(h[1], e)) && (s[1] = d.toGlobalCoord(d.getExtent()[t ? 0 : 1]));
    }
    isNaN(l) || (s[0] = l), isNaN(u) || (s[1] = u);
  }
  a.setItemLayout(e, s);
}
var Wp = (function (a) {
  R(e, a);
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
            l = La(o).from,
            u = La(o).to;
          l.each(function (h) {
            zr(l, h, !0, i, n), zr(u, h, !1, i, n);
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
      var v = Fp(o, t, r),
        c = v.from,
        f = v.to,
        d = v.line;
      (La(r).from = c), (La(r).to = f), r.setData(d);
      var p = r.get('symbol'),
        g = r.get('symbolSize'),
        y = r.get('symbolRotate'),
        m = r.get('symbolOffset');
      F(p) || (p = [p, p]),
        F(g) || (g = [g, g]),
        F(y) || (y = [y, y]),
        F(m) || (m = [m, m]),
        v.from.each(function (x) {
          S(c, x, !0), S(f, x, !1);
        }),
        d.each(function (x) {
          var b = d.getItemModel(x).getModel('lineStyle').getLineStyle();
          d.setItemLayout(x, [c.getItemLayout(x), f.getItemLayout(x)]),
            b.stroke == null && (b.stroke = c.getItemVisual(x, 'style').fill),
            d.setItemVisual(x, {
              fromSymbolKeepAspect: c.getItemVisual(x, 'symbolKeepAspect'),
              fromSymbolOffset: c.getItemVisual(x, 'symbolOffset'),
              fromSymbolRotate: c.getItemVisual(x, 'symbolRotate'),
              fromSymbolSize: c.getItemVisual(x, 'symbolSize'),
              fromSymbol: c.getItemVisual(x, 'symbol'),
              toSymbolKeepAspect: f.getItemVisual(x, 'symbolKeepAspect'),
              toSymbolOffset: f.getItemVisual(x, 'symbolOffset'),
              toSymbolRotate: f.getItemVisual(x, 'symbolRotate'),
              toSymbolSize: f.getItemVisual(x, 'symbolSize'),
              toSymbol: f.getItemVisual(x, 'symbol'),
              style: b,
            });
        }),
        h.updateData(d),
        v.line.eachItemGraphicEl(function (x) {
          (ut(x).dataModel = r),
            x.traverse(function (b) {
              ut(b).dataModel = r;
            });
        });
      function S(x, b, w) {
        var _ = x.getItemModel(b);
        zr(x, b, w, t, i);
        var A = _.getModel('itemStyle').getItemStyle();
        A.fill == null && (A.fill = Zn(l, 'color')),
          x.setItemVisual(b, {
            symbolKeepAspect: _.get('symbolKeepAspect'),
            symbolOffset: Tt(_.get('symbolOffset', !0), m[w ? 0 : 1]),
            symbolRotate: Tt(_.get('symbolRotate', !0), y[w ? 0 : 1]),
            symbolSize: Tt(_.get('symbolSize'), g[w ? 0 : 1]),
            symbol: Tt(_.get('symbol', !0), p[w ? 0 : 1]),
            style: A,
          });
      }
      this.markKeep(h), (h.group.silent = r.get('silent') || t.get('silent'));
    }),
    (e.type = 'markLine'),
    e
  );
})(ii);
function Fp(a, e, t) {
  var r;
  a
    ? (r = O(a && a.dimensions, function (u) {
        var h = e.getData().getDimensionInfo(e.getData().mapDimension(u)) || {};
        return W(W({}, h), { name: u, ordinalMeta: null });
      }))
    : (r = [{ name: 'value', type: 'float' }]);
  var n = new It(r, t),
    i = new It(r, t),
    o = new It([], t),
    s = O(t.get('data'), it(Gp, e, a, t));
  a && (s = Ut(s, it(Op, a)));
  var l = tu(!!a, r);
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
const $p = Wp;
function Hp(a) {
  a.registerComponentModel(Ep),
    a.registerComponentView($p),
    a.registerPreprocessor(function (e) {
      ri(e.series, 'markLine') && (e.markLine = e.markLine || {});
    });
}
var Zp = (function (a) {
  R(e, a);
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
const Up = Zp;
var Ia = wt(),
  Yp = function (a, e, t, r) {
    var n = r[0],
      i = r[1];
    if (!(!n || !i)) {
      var o = oa(a, n),
        s = oa(a, i),
        l = o.coord,
        u = s.coord;
      (l[0] = Ot(l[0], -1 / 0)),
        (l[1] = Ot(l[1], -1 / 0)),
        (u[0] = Ot(u[0], 1 / 0)),
        (u[1] = Ot(u[1], 1 / 0));
      var h = cl([{}, o, s]);
      return (
        (h.coord = [o.coord, s.coord]), (h.x0 = o.x), (h.y0 = o.y), (h.x1 = s.x), (h.y1 = s.y), h
      );
    }
  };
function Xa(a) {
  return !isNaN(a) && !isFinite(a);
}
function No(a, e, t, r) {
  var n = 1 - a;
  return Xa(e[n]) && Xa(t[n]);
}
function Xp(a, e) {
  var t = e.coord[0],
    r = e.coord[1],
    n = { coord: t, x: e.x0, y: e.y0 },
    i = { coord: r, x: e.x1, y: e.y1 };
  return lr(a, 'cartesian2d')
    ? t && r && (No(1, t, r) || No(0, t, r))
      ? !0
      : Dp(a, n, i)
    : sa(a, n) || sa(a, i);
}
function Vo(a, e, t, r, n) {
  var i = r.coordinateSystem,
    o = a.getItemModel(e),
    s,
    l = B(o.get(t[0]), n.getWidth()),
    u = B(o.get(t[1]), n.getHeight());
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
    if (lr(i, 'cartesian2d')) {
      var m = i.getAxis('x'),
        S = i.getAxis('y'),
        p = a.get(t[0], e),
        g = a.get(t[1], e);
      Xa(p)
        ? (s[0] = m.toGlobalCoord(m.getExtent()[t[0] === 'x0' ? 0 : 1]))
        : Xa(g) && (s[1] = S.toGlobalCoord(S.getExtent()[t[1] === 'y0' ? 0 : 1]));
    }
    isNaN(l) || (s[0] = l), isNaN(u) || (s[1] = u);
  }
  return s;
}
var zo = [
    ['x0', 'y0'],
    ['x1', 'y0'],
    ['x1', 'y1'],
    ['x0', 'y1'],
  ],
  qp = (function (a) {
    R(e, a);
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
              var u = O(zo, function (v) {
                return Vo(s, l, v, i, n);
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
          h = u.get(s) || u.set(s, { group: new j() });
        this.group.add(h.group), this.markKeep(h);
        var v = Kp(o, t, r);
        r.setData(v),
          v.each(function (c) {
            var f = O(zo, function (A) {
                return Vo(v, c, A, t, i);
              }),
              d = o.getAxis('x').scale,
              p = o.getAxis('y').scale,
              g = d.getExtent(),
              y = p.getExtent(),
              m = [d.parse(v.get('x0', c)), d.parse(v.get('x1', c))],
              S = [p.parse(v.get('y0', c)), p.parse(v.get('y1', c))];
            ne(m), ne(S);
            var x = !(g[0] > m[1] || g[1] < m[0] || y[0] > S[1] || y[1] < S[0]),
              b = !x;
            v.setItemLayout(c, { points: f, allClipped: b });
            var w = v.getItemModel(c).getModel('itemStyle').getItemStyle(),
              _ = Zn(l, 'color');
            w.fill || ((w.fill = _), at(w.fill) && (w.fill = gn(w.fill, 0.4))),
              w.stroke || (w.stroke = _),
              v.setItemVisual(c, 'style', w);
          }),
          v
            .diff(Ia(h).data)
            .add(function (c) {
              var f = v.getItemLayout(c);
              if (!f.allClipped) {
                var d = new Ce({ shape: { points: f.points } });
                v.setItemGraphicEl(c, d), h.group.add(d);
              }
            })
            .update(function (c, f) {
              var d = Ia(h).data.getItemGraphicEl(f),
                p = v.getItemLayout(c);
              p.allClipped
                ? d && h.group.remove(d)
                : (d
                    ? ht(d, { shape: { points: p.points } }, r, c)
                    : (d = new Ce({ shape: { points: p.points } })),
                  v.setItemGraphicEl(c, d),
                  h.group.add(d));
            })
            .remove(function (c) {
              var f = Ia(h).data.getItemGraphicEl(c);
              h.group.remove(f);
            })
            .execute(),
          v.eachItemGraphicEl(function (c, f) {
            var d = v.getItemModel(f),
              p = v.getItemVisual(f, 'style');
            c.useStyle(v.getItemVisual(f, 'style')),
              Qt(c, zt(d), {
                labelFetcher: r,
                labelDataIndex: f,
                defaultText: v.getName(f) || '',
                inheritColor: at(p.fill) ? gn(p.fill, 1) : '#000',
              }),
              Et(c, d),
              ft(c, null, null, d.get(['emphasis', 'disabled'])),
              (ut(c).dataModel = r);
          }),
          (Ia(h).data = v),
          (h.group.silent = r.get('silent') || t.get('silent'));
      }),
      (e.type = 'markArea'),
      e
    );
  })(ii);
function Kp(a, e, t) {
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
      (r = new It(n, t));
  } else (n = [{ name: 'value', type: 'float' }]), (r = new It(n, t));
  var s = O(t.get('data'), it(Yp, e, a, t));
  a && (s = Ut(s, it(Xp, a)));
  var l = a
    ? function (u, h, v, c) {
        var f = u.coord[Math.floor(c / 2)][c % 2];
        return Oa(f, n[c]);
      }
    : function (u, h, v, c) {
        return Oa(u.value, n[c]);
      };
  return r.initData(s, null, l), (r.hasItemOption = !0), r;
}
const jp = qp;
function Jp(a) {
  a.registerComponentModel(Up),
    a.registerComponentView(jp),
    a.registerPreprocessor(function (e) {
      ri(e.series, 'markArea') && (e.markArea = e.markArea || {});
    });
}
var Qp = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.type = 'dataZoom.inside'),
    (e.defaultOption = ir(Wa.defaultOption, {
      disabled: !1,
      zoomLock: !1,
      zoomOnMouseWheel: !0,
      moveOnMouseMove: !0,
      moveOnMouseWheel: !1,
      preventDefaultMouseMove: !0,
    })),
    e
  );
})(Wa);
const tg = Qp;
var li = wt();
function eg(a, e, t) {
  li(a).coordSysRecordMap.each(function (r) {
    var n = r.dataZoomInfoMap.get(e.uid);
    n && (n.getRange = t);
  });
}
function ag(a, e) {
  for (var t = li(a).coordSysRecordMap, r = t.keys(), n = 0; n < r.length; n++) {
    var i = r[n],
      o = t.get(i),
      s = o.dataZoomInfoMap;
    if (s) {
      var l = e.uid,
        u = s.get(l);
      u && (s.removeKey(l), s.keys().length || au(t, o));
    }
  }
}
function au(a, e) {
  if (e) {
    a.removeKey(e.model.uid);
    var t = e.controller;
    t && t.dispose();
  }
}
function rg(a, e) {
  var t = {
      model: e,
      containsPoint: it(ig, e),
      dispatchAction: it(ng, a),
      dataZoomInfoMap: null,
      controller: null,
    },
    r = (t.controller = new ur(a.getZr()));
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
function ng(a, e) {
  a.isDisposed() ||
    a.dispatchAction({
      type: 'dataZoom',
      animation: { easing: 'cubicOut', duration: 100 },
      batch: e,
    });
}
function ig(a, e, t, r) {
  return a.coordinateSystem.containPoint([t, r]);
}
function og(a) {
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
function sg(a) {
  a.registerProcessor(a.PRIORITY.PROCESSOR.FILTER, function (e, t) {
    var r = li(t),
      n = r.coordSysRecordMap || (r.coordSysRecordMap = Ct());
    n.each(function (i) {
      i.dataZoomInfoMap = null;
    }),
      e.eachComponent({ mainType: 'dataZoom', subType: 'inside' }, function (i) {
        var o = fl(i);
        I(o.infoList, function (s) {
          var l = s.model.uid,
            u = n.get(l) || n.set(l, rg(t, s.model)),
            h = u.dataZoomInfoMap || (u.dataZoomInfoMap = Ct());
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
          au(n, i);
          return;
        }
        var h = og(l);
        o.enable(h.controlType, h.opt),
          o.setPointerChecker(i.containsPoint),
          ar(i, 'dispatchAction', s.model.get('throttle', !0), 'fixRate');
      });
  });
}
var lg = (function (a) {
    R(e, a);
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
          eg(n, t, {
            pan: U(Br.pan, this),
            zoom: U(Br.zoom, this),
            scrollMove: U(Br.scrollMove, this),
          });
      }),
      (e.prototype.dispose = function () {
        this._clear(), a.prototype.dispose.apply(this, arguments);
      }),
      (e.prototype._clear = function () {
        ag(this.api, this.dataZoomModel), (this.range = null);
      }),
      (e.type = 'dataZoom.inside'),
      e
    );
  })(dl),
  Br = {
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
          (rr(0, i, [0, 100], 0, h.minSpan, h.maxSpan),
          (this.range = i),
          n[0] !== i[0] || n[1] !== i[1])
        )
          return i;
      }
    },
    pan: Bo(function (a, e, t, r, n, i) {
      var o = Gr[r]([i.oldX, i.oldY], [i.newX, i.newY], e, n, t);
      return (o.signal * (a[1] - a[0]) * o.pixel) / o.pixelLength;
    }),
    scrollMove: Bo(function (a, e, t, r, n, i) {
      var o = Gr[r]([0, 0], [i.scrollDelta, i.scrollDelta], e, n, t);
      return o.signal * (a[1] - a[0]) * i.scrollDelta;
    }),
  };
function Bo(a) {
  return function (e, t, r, n) {
    var i = this.range,
      o = i.slice(),
      s = e.axisModels[0];
    if (s) {
      var l = a(o, s, e, t, r, n);
      if ((rr(l, o, [0, 100], 'all'), (this.range = o), i[0] !== o[0] || i[1] !== o[1])) return o;
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
const ug = lg;
function ru(a) {
  pl(a), a.registerComponentModel(tg), a.registerComponentView(ug), sg(a);
}
var hg = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.type = 'dataZoom.slider'),
    (e.layoutMode = 'box'),
    (e.defaultOption = ir(Wa.defaultOption, {
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
})(Wa);
const vg = hg;
var He = Mt,
  Go = 7,
  cg = 1,
  Or = 30,
  fg = 7,
  Ze = 'horizontal',
  Oo = 'vertical',
  dg = 5,
  pg = ['line', 'bar', 'candlestick', 'scatter'],
  gg = { easing: 'cubicOut', duration: 100, delay: 0 },
  yg = (function (a) {
    R(e, a);
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
          ar(this, '_dispatchZoomAction', t.get('throttle'), 'fixRate'),
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
        el(this, '_dispatchZoomAction');
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
        var r = (this._displayables.sliderGroup = new j());
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
          i = n ? fg : 0,
          o = this._findCoordRect(),
          s = { width: r.getWidth(), height: r.getHeight() },
          l =
            this._orient === Ze
              ? {
                  right: s.width - o.x - o.width,
                  top: s.height - Or - Go - i,
                  width: o.width,
                  height: Or,
                }
              : { right: Go, top: o.y, width: Or, height: o.height },
          u = nl(t.option);
        I(['right', 'top', 'width', 'height'], function (v) {
          u[v] === 'ph' && (u[v] = l[v]);
        });
        var h = re(u, s);
        (this._location = { x: h.x, y: h.y }),
          (this._size = [h.width, h.height]),
          this._orient === Oo && this._size.reverse();
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
            : n === Oo && !o
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
            S = Math.round(o.count() / r[0]),
            x;
          o.each([l], function (M, D) {
            if (S > 0 && D % S) {
              m += y;
              return;
            }
            var T = M == null || isNaN(M) || M === '',
              L = T ? 0 : vt(M, v, f, !0);
            T && !x && D
              ? (p.push([p[p.length - 1][0], 0]), g.push([g[g.length - 1][0], 0]))
              : !T && x && (p.push([m, 0]), g.push([m, 0])),
              p.push([m, L]),
              g.push([m, L]),
              (m += y),
              (x = T);
          }),
            (u = this._shadowPolygonPts = p),
            (h = this._shadowPolylinePts = g);
        }
        (this._shadowData = o), (this._shadowDim = l), (this._shadowSize = [r[0], r[1]]);
        var b = this.dataZoomModel;
        function w(M) {
          var D = b.getModel(M ? 'selectedDataBackground' : 'dataBackground'),
            T = new j(),
            L = new Ce({
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
                  if (!n && !(r !== !0 && Lt(pg, u.get('type')) < 0)) {
                    var h = i.getComponent(Jh(o), s).axis,
                      v = mg(o),
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
                lineWidth: cg,
                fill: 'rgba(0,0,0,0)',
              },
            }),
          ),
          I(
            [0, 1],
            function (S) {
              var x = l.get('handleIcon');
              !Qh[x] &&
                x.indexOf('path://') < 0 &&
                x.indexOf('image://') < 0 &&
                (x = 'path://' + x);
              var b = $t(x, -1, 0, 2, 2, null, !0);
              b.attr({
                cursor: Wo(this._orient),
                draggable: !0,
                drift: U(this._onDragMove, this, S),
                ondragend: U(this._onDragEnd, this),
                onmouseover: U(this._showDataInfo, this, !0),
                onmouseout: U(this._showDataInfo, this, !1),
                z2: 5,
              });
              var w = b.getBoundingRect(),
                _ = l.get('handleSize');
              (this._handleHeight = B(_, this._size[1])),
                (this._handleWidth = (w.width / w.height) * this._handleHeight),
                b.setStyle(l.getModel('handleStyle').getItemStyle()),
                (b.style.strokeNoScale = !0),
                (b.rectHover = !0),
                (b.ensureState('emphasis').style = l
                  .getModel(['emphasis', 'handleStyle'])
                  .getItemStyle()),
                Na(b);
              var A = l.get('handleColor');
              A != null && (b.style.fill = A), o.add((n[S] = b));
              var M = l.getModel('textStyle');
              t.add(
                (i[S] = new gt({
                  silent: !0,
                  invisible: !0,
                  style: yt(M, {
                    x: 0,
                    y: 0,
                    text: '',
                    verticalAlign: 'middle',
                    align: 'center',
                    fill: M.getTextColor(),
                    font: M.getFont(),
                  }),
                  z2: 10,
                })),
              );
            },
            this,
          );
        var f = c;
        if (v) {
          var d = B(l.get('moveHandleSize'), s[1]),
            p = (r.moveHandle = new Mt({
              style: l.getModel('moveHandleStyle').getItemStyle(),
              silent: !0,
              shape: { r: [0, 0, 2, 2], y: s[1] - 0.5, height: d },
            })),
            g = d * 0.8,
            y = (r.moveHandleIcon = $t(l.get('moveHandleIcon'), -g / 2, -g / 2, g, g, '#fff', !0));
          (y.silent = !0),
            (y.y = s[1] + d / 2 - 0.5),
            (p.ensureState('emphasis').style = l
              .getModel(['emphasis', 'moveHandleStyle'])
              .getItemStyle());
          var m = Math.min(s[1] / 2, Math.max(d, 10));
          (f = r.moveZone = new Mt({ invisible: !0, shape: { y: s[1] - m, height: d + m } })),
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
          cursor: Wo(this._orient),
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
        rr(
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
          c || ((c = new Mt()), v.setClipPath(c)),
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
          var p = tv(n.handles[d].parent, this.group),
            g = ev(d === 0 ? 'right' : 'left', p),
            y = this._handleWidth / 2 + dg,
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
        return st(i) ? i(t, s) : at(i) ? i.replace('{value}', s) : s;
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
        (this._dragging = !0), Ri(i.event);
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
        (this._brushStart = new gl(r, n)),
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
        this._brushing && (Ri(t.event), this._updateBrushRect(t.offsetX, t.offsetY));
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
          animation: t ? gg : null,
          start: r[0],
          end: r[1],
        });
      }),
      (e.prototype._findCoordRect = function () {
        var t,
          r = fl(this.dataZoomModel).infoList;
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
  })(dl);
function mg(a) {
  var e = { x: 'y', y: 'x', radius: 'angle', angle: 'radius' };
  return e[a];
}
function Wo(a) {
  return a === 'vertical' ? 'ns-resize' : 'ew-resize';
}
const Sg = yg;
function nu(a) {
  a.registerComponentModel(vg), a.registerComponentView(Sg), pl(a);
}
function xg(a) {
  Y(ru), Y(nu);
}
var bg = { label: { enabled: !0 }, decal: { show: !1 } },
  Fo = wt(),
  wg = {};
function _g(a, e) {
  var t = a.getModel('aria');
  if (!t.get('enabled')) return;
  var r = Pt(bg);
  Wt(r.label, a.getLocaleModel().get('aria'), !1), Wt(t.option, r, !1), n(), i();
  function n() {
    var u = t.getModel('decal'),
      h = u.get('show');
    if (h) {
      var v = Ct();
      a.eachSeries(function (c) {
        if (!c.isColorBySeries()) {
          var f = v.get(c.type);
          f || ((f = {}), v.set(c.type, f)), (Fo(c).scope = f);
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
            var m = yn(c.ecModel, c.name, wg, a.getSeriesCount()),
              S = f.getVisual('decal');
            f.setVisual('decal', x(S, m));
          } else {
            var d = c.getRawData(),
              p = {},
              g = Fo(c).scope;
            f.each(function (b) {
              var w = f.getRawIndex(b);
              p[w] = b;
            });
            var y = d.count();
            d.each(function (b) {
              var w = p[b],
                _ = d.getName(b) || b + '',
                A = yn(c.ecModel, _, g, y),
                M = f.getItemVisual(w, 'decal');
              f.setItemVisual(w, 'decal', x(M, A));
            });
          }
          function x(b, w) {
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
        var S = [],
          x =
            c > 1 ? h.get(['series', 'multiple', 'prefix']) : h.get(['series', 'single', 'prefix']);
        (g += o(x, { seriesCount: c })),
          a.eachSeries(function (A, M) {
            if (M < p) {
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
                var C = h.get(['data', 'partialData']);
                D += o(C, { displayCnt: f });
              } else D += h.get(['data', 'allData']);
              for (
                var E = h.get(['data', 'separator', 'middle']),
                  k = h.get(['data', 'separator', 'end']),
                  N = [],
                  V = 0;
                V < P.count();
                V++
              )
                if (V < f) {
                  var G = P.getName(V),
                    $ = P.getValues(V),
                    H = h.get(['data', G ? 'withName' : 'withoutName']);
                  N.push(o(H, { name: G, value: $.join(E) }));
                }
              (D += N.join(E) + k), S.push(D);
            }
          });
        var b = h.getModel(['series', 'multiple', 'separator']),
          w = b.get('middle'),
          _ = b.get('end');
        (g += S.join(w) + _), v.setAttribute('aria-label', g);
      }
    }
  }
  function o(u, h) {
    if (!at(u)) return u;
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
function Ag(a) {
  if (!(!a || !a.aria)) {
    var e = a.aria;
    e.show != null && (e.enabled = e.show),
      (e.label = e.label || {}),
      I(['description', 'general', 'series', 'data'], function (t) {
        e[t] != null && (e.label[t] = e[t]);
      });
  }
}
function Dg(a) {
  a.registerPreprocessor(Ag), a.registerVisual(a.PRIORITY.VISUAL.ARIA, _g);
}
var $o = {
    value: 'eq',
    '<': 'lt',
    '<=': 'lte',
    '>': 'gt',
    '>=': 'gte',
    '=': 'eq',
    '!=': 'ne',
    '<>': 'ne',
  },
  Tg = (function () {
    function a(e) {
      var t = (this._condVal = at(e) ? new RegExp(e) : rv(e) ? e : null);
      if (t == null) {
        var r = '';
        lt(r);
      }
    }
    return (
      (a.prototype.evaluate = function (e) {
        var t = typeof e;
        return at(t) ? this._condVal.test(e) : Ft(t) ? this._condVal.test(e + '') : !1;
      }),
      a
    );
  })(),
  Mg = (function () {
    function a() {}
    return (
      (a.prototype.evaluate = function () {
        return this.value;
      }),
      a
    );
  })(),
  Cg = (function () {
    function a() {}
    return (
      (a.prototype.evaluate = function () {
        for (var e = this.children, t = 0; t < e.length; t++) if (!e[t].evaluate()) return !1;
        return !0;
      }),
      a
    );
  })(),
  Lg = (function () {
    function a() {}
    return (
      (a.prototype.evaluate = function () {
        for (var e = this.children, t = 0; t < e.length; t++) if (e[t].evaluate()) return !0;
        return !1;
      }),
      a
    );
  })(),
  Ig = (function () {
    function a() {}
    return (
      (a.prototype.evaluate = function () {
        return !this.child.evaluate();
      }),
      a
    );
  })(),
  Pg = (function () {
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
    var t = new Mg();
    return (t.value = a), t;
  }
  var r = '';
  return (
    iu(a) || lt(r), a.and ? Ho('and', a, e) : a.or ? Ho('or', a, e) : a.not ? Eg(a, e) : kg(a, e)
  );
}
function Ho(a, e, t) {
  var r = e[a],
    n = '';
  F(r) || lt(n), r.length || lt(n);
  var i = a === 'and' ? new Cg() : new Lg();
  return (
    (i.children = O(r, function (o) {
      return ui(o, t);
    })),
    i.children.length || lt(n),
    i
  );
}
function Eg(a, e) {
  var t = a.not,
    r = '';
  iu(t) || lt(r);
  var n = new Ig();
  return (n.child = ui(t, e)), n.child || lt(r), n;
}
function kg(a, e) {
  for (
    var t = '',
      r = e.prepareGetValue(a),
      n = [],
      i = pt(a),
      o = a.parser,
      s = o ? yl(o) : null,
      l = 0;
    l < i.length;
    l++
  ) {
    var u = i[l];
    if (!(u === 'parser' || e.valueGetterAttrMap.get(u))) {
      var h = z($o, u) ? $o[u] : u,
        v = a[u],
        c = s ? s(v) : v,
        f = av(h, c) || (h === 'reg' && new Tg(c));
      f || lt(t), n.push(f);
    }
  }
  n.length || lt(t);
  var d = new Pg();
  return (
    (d.valueGetterParam = r), (d.valueParser = s), (d.getValue = e.getValue), (d.subCondList = n), d
  );
}
function iu(a) {
  return Le(a) && !ol(a);
}
var Rg = (function () {
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
function Ng(a, e) {
  return new Rg(a, e);
}
var Vg = {
    type: 'echarts:filter',
    transform: function (a) {
      for (
        var e = a.upstream,
          t,
          r = Ng(a.config, {
            valueGetterAttrMap: Ct({ dimension: !0 }),
            prepareGetValue: function (s) {
              var l = '',
                u = s.dimension;
              z(s, 'dimension') || lt(l);
              var h = e.getDimensionInfo(u);
              return h || lt(l), { dimIdx: h.index };
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
  zg = {
    type: 'echarts:sort',
    transform: function (a) {
      var e = a.upstream,
        t = a.config,
        r = '',
        n = le(t);
      n.length || lt(r);
      var i = [];
      I(n, function (h) {
        var v = h.dimension,
          c = h.order,
          f = h.parser,
          d = h.incomparable;
        if (
          (v == null && lt(r),
          c !== 'asc' && c !== 'desc' && lt(r),
          d && d !== 'min' && d !== 'max')
        ) {
          var p = '';
          lt(p);
        }
        if (c !== 'asc' && c !== 'desc') {
          var g = '';
          lt(g);
        }
        var y = e.getDimensionInfo(v);
        y || lt(r);
        var m = f ? yl(f) : null;
        f && !m && lt(r), i.push({ dimIdx: y.index, parser: m, comparator: new nv(c, d) });
      });
      var o = e.sourceFormat;
      o !== ml && o !== iv && lt(r);
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
function Bg(a) {
  a.registerTransform(Vg), a.registerTransform(zg);
}
var Gg = (function (a) {
  R(e, a);
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
const Og = Gg;
var ou = 4,
  Wg = (function () {
    function a() {}
    return a;
  })(),
  Fg = (function (a) {
    R(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return (r._off = 0), (r.hoverDataIdx = -1), r;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new Wg();
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
          u = l && i[0] < ou,
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
          t = this._rect = new Jt(l - o / 2, u - s / 2, h - l + o, v - u + s);
        }
        return t;
      }),
      e
    );
  })(Bt),
  $g = (function () {
    function a() {
      this.group = new j();
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
        var e = new Fg({ cursor: 'default' });
        return (e.ignoreCoarsePointer = !0), this.group.add(e), this._newAdded.push(e), e;
      }),
      (a.prototype._setCommon = function (e, t, r) {
        var n = t.hostModel;
        r = r || {};
        var i = t.getVisual('symbolSize');
        e.setShape('size', i instanceof Array ? i : [i, i]),
          (e.softClipShape = r.clipShape || null),
          (e.symbolProxy = $t(t.getVisual('symbol'), 0, 0, 0, 0)),
          (e.setColor = e.symbolProxy.setColor);
        var o = e.shape.size[0] < ou;
        e.useStyle(
          n
            .getModel('itemStyle')
            .getItemStyle(o ? ['color', 'shadowBlur', 'shadowColor'] : ['color']),
        );
        var s = t.getVisual('style'),
          l = s && s.fill;
        l && e.setColor(l);
        var u = ut(e);
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
const Hg = $g;
var Zg = (function (a) {
  R(e, a);
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
      var o = hr('').reset(t, r, n);
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
          (n = this._symbolDraw = o ? new Hg() : new or()),
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
const Ug = Zg;
function Yg(a) {
  Y(ov), a.registerSeriesModel(Og), a.registerChartView(Ug), a.registerLayout(hr('scatter'));
}
function Xg(a) {
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
          r[u][s] = Zo(h) ? h : Uo(n);
        });
      }),
        t.each(function (o) {
          var s =
            sv(r[o], function (l) {
              return Zo(l);
            }) || Uo(n);
          r[o].push(s.slice()), t.setItemLayout(o, r[o]);
        });
    }
  });
}
function Zo(a) {
  return !isNaN(a[0]) && !isNaN(a[1]);
}
function Uo(a) {
  return [a.cx, a.cy];
}
function qg(a) {
  var e = a.polar;
  if (e) {
    F(e) || (e = [e]);
    var t = [];
    I(e, function (r, n) {
      r.indicator
        ? (r.type && !r.shape && (r.shape = r.type),
          (a.radar = a.radar || []),
          F(a.radar) || (a.radar = [a.radar]),
          a.radar.push(r))
        : t.push(r);
    }),
      (a.polar = t);
  }
  I(a.series, function (r) {
    r && r.type === 'radar' && r.polarIndex && (r.radarIndex = r.polarIndex);
  });
}
var Kg = (function (a) {
  R(e, a);
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
          var p = pa(c.getItemVisual(f, 'symbolSize')),
            g = $t(d, -1, -1, 2, 2),
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
          var S = u(p, g);
          S &&
            ((S.__dimIdx = m),
            c[m]
              ? (S.setPosition(c[m]),
                vr[y ? 'initProps' : 'updateProps'](S, { x: f[m][0], y: f[m][1] }, t, g))
              : S.setPosition(f[m]),
            d.add(S));
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
            var d = new Ce(),
              p = new Ie(),
              g = { shape: { points: f } };
            (d.shape.points = v(f)), (p.shape.points = v(f)), Ht(d, g, t, c), Ht(p, g, t, c);
            var y = new j(),
              m = new j();
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
            S = m.fill;
          o.add(c),
            p.useStyle(nt(d.getModel('lineStyle').getLineStyle(), { fill: 'none', stroke: S })),
            Et(p, d, 'lineStyle'),
            Et(g, d, 'areaStyle');
          var x = d.getModel('areaStyle'),
            b = x.isEmpty() && x.parentModel.isEmpty();
          (g.ignore = b),
            I(['emphasis', 'select', 'blur'], function (A) {
              var M = d.getModel([A, 'areaStyle']),
                D = M.isEmpty() && M.parentModel.isEmpty();
              g.ensureState(A).ignore = D && b;
            }),
            g.useStyle(nt(x.getAreaStyle(), { fill: S, opacity: 0.7, decal: m.decal }));
          var w = d.getModel('emphasis'),
            _ = w.getModel('itemStyle').getItemStyle();
          y.eachChild(function (A) {
            if (A instanceof ye) {
              var M = A.style;
              A.useStyle(
                W({ image: M.image, x: M.x, y: M.y, width: M.width, height: M.height }, m),
              );
            } else A.useStyle(m), A.setColor(S), (A.style.strokeNoScale = !0);
            var D = A.ensureState('emphasis');
            D.style = Pt(_);
            var T = s.getStore().get(s.getDimensionIndex(A.__dimIdx), f);
            (T == null || isNaN(T)) && (T = ''),
              Qt(A, zt(d), {
                labelFetcher: s.hostModel,
                labelDataIndex: f,
                labelDimIndex: A.__dimIdx,
                defaultText: T,
                inheritColor: S,
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
const jg = Kg;
var Jg = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.hasSymbolVisual = !0), t;
  }
  return (
    (e.prototype.init = function (t) {
      a.prototype.init.apply(this, arguments),
        (this.legendVisualProvider = new cr(U(this.getData, this), U(this.getRawData, this)));
    }),
    (e.prototype.getInitialData = function (t, r) {
      return fr(this, { generateCoord: 'indicator_', generateCoordCount: 1 / 0 });
    }),
    (e.prototype.formatTooltip = function (t, r, n) {
      var i = this.getData(),
        o = this.coordinateSystem,
        s = o.getIndicatorAxes(),
        l = this.getData().getName(t),
        u = l === '' ? this.name : l,
        h = lv(this, t);
      return Vt('section', {
        header: u,
        sortBlocks: !0,
        blocks: O(s, function (v) {
          var c = i.get(i.mapDimension(v.dim), t);
          return Vt('nameValue', {
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
const Qg = Jg;
function ty(a) {
  Y(_f),
    a.registerChartView(jg),
    a.registerSeriesModel(Qg),
    a.registerLayout(Xg),
    a.registerProcessor(dr('radar')),
    a.registerPreprocessor(qg);
}
function ey(a) {
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
function ay(a, e) {
  var t = a.isExpand ? a.children : [],
    r = a.parentNode.children,
    n = a.hierNode.i ? r[a.hierNode.i - 1] : null;
  if (t.length) {
    iy(a);
    var i = (t[0].hierNode.prelim + t[t.length - 1].hierNode.prelim) / 2;
    n
      ? ((a.hierNode.prelim = n.hierNode.prelim + e(a, n)),
        (a.hierNode.modifier = a.hierNode.prelim - i))
      : (a.hierNode.prelim = i);
  } else n && (a.hierNode.prelim = n.hierNode.prelim + e(a, n));
  a.parentNode.hierNode.defaultAncestor = oy(
    a,
    n,
    a.parentNode.hierNode.defaultAncestor || r[0],
    e,
  );
}
function ry(a) {
  var e = a.hierNode.prelim + a.parentNode.hierNode.modifier;
  a.setLayout({ x: e }, !0), (a.hierNode.modifier += a.parentNode.hierNode.modifier);
}
function Yo(a) {
  return arguments.length ? a : uy;
}
function qe(a, e) {
  return (a -= Math.PI / 2), { x: e * Math.cos(a), y: e * Math.sin(a) };
}
function ny(a, e) {
  return re(a.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
}
function iy(a) {
  for (var e = a.children, t = e.length, r = 0, n = 0; --t >= 0; ) {
    var i = e[t];
    (i.hierNode.prelim += r),
      (i.hierNode.modifier += r),
      (n += i.hierNode.change),
      (r += i.hierNode.shift + n);
  }
}
function oy(a, e, t, r) {
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
      (s = Wr(s)), (i = Fr(i)), s && i;

    ) {
      (n = Wr(n)), (o = Fr(o)), (n.hierNode.ancestor = a);
      var c = s.hierNode.prelim + v - i.hierNode.prelim - u + r(s, i);
      c > 0 && (ly(sy(s, a, t), a, c), (u += c), (l += c)),
        (v += s.hierNode.modifier),
        (u += i.hierNode.modifier),
        (l += n.hierNode.modifier),
        (h += o.hierNode.modifier);
    }
    s && !Wr(n) && ((n.hierNode.thread = s), (n.hierNode.modifier += v - l)),
      i && !Fr(o) && ((o.hierNode.thread = i), (o.hierNode.modifier += u - h), (t = a));
  }
  return t;
}
function Wr(a) {
  var e = a.children;
  return e.length && a.isExpand ? e[e.length - 1] : a.hierNode.thread;
}
function Fr(a) {
  var e = a.children;
  return e.length && a.isExpand ? e[0] : a.hierNode.thread;
}
function sy(a, e, t) {
  return a.hierNode.ancestor.parentNode === e.parentNode ? a.hierNode.ancestor : t;
}
function ly(a, e, t) {
  var r = t / (e.hierNode.i - a.hierNode.i);
  (e.hierNode.change -= r),
    (e.hierNode.shift += t),
    (e.hierNode.modifier += t),
    (e.hierNode.prelim += t),
    (a.hierNode.change += r);
}
function uy(a, e) {
  return a.parentNode === e.parentNode ? 1 : 2;
}
var hy = (function () {
    function a() {
      (this.parentPoint = []), (this.childPoints = []);
    }
    return a;
  })(),
  vy = (function (a) {
    R(e, a);
    function e(t) {
      return a.call(this, t) || this;
    }
    return (
      (e.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null };
      }),
      (e.prototype.getDefaultShape = function () {
        return new hy();
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
          c = B(r.forkPosition, 1),
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
  })(Bt),
  cy = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t._mainGroup = new j()), t;
    }
    return (
      (e.prototype.init = function (t, r) {
        (this._controller = new ur(r.getZr())),
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
            Xo(i, h) && qo(i, h, null, s, t);
          })
          .update(function (h, v) {
            var c = u.getItemGraphicEl(v);
            if (!Xo(i, h)) {
              c && jo(u, v, c, s, t);
              return;
            }
            qo(i, h, c, s, t);
          })
          .remove(function (h) {
            var v = u.getItemGraphicEl(h);
            v && jo(u, h, v, s, t);
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
        Sl(i, o, s);
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
          return c.applyTransform(l.transform), c.contain(h, v) && !xl(u, n, t);
        }),
          o.enable(t.get('roam')),
          (s.zoomLimit = t.get('scaleLimit')),
          (s.zoom = t.coordinateSystem.getZoom()),
          o
            .off('pan')
            .off('zoom')
            .on('pan', function (u) {
              bl(s, u.dx, u.dy),
                n.dispatchAction({ seriesId: t.id, type: 'treeRoam', dx: u.dx, dy: u.dy });
            })
            .on('zoom', function (u) {
              wl(s, u.scale, u.originX, u.originY),
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
function Xo(a, e) {
  var t = a.getItemLayout(e);
  return t && !isNaN(t.x) && !isNaN(t.y);
}
function qo(a, e, t, r, n) {
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
    ? ((t = new _l(a, e, null, { symbolInnerColor: u, useNameLabel: !0 })),
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
      S = y.children.length,
      x = void 0,
      b = void 0;
    if (p.x === m.x && o.isExpand === !0 && y.children.length) {
      var w = {
        x: (y.children[0].getLayout().x + y.children[S - 1].getLayout().x) / 2,
        y: (y.children[0].getLayout().y + y.children[S - 1].getLayout().y) / 2,
      };
      (x = Math.atan2(w.y - m.y, w.x - m.x)),
        x < 0 && (x = Math.PI * 2 + x),
        (b = w.x < m.x),
        b && (x = x - Math.PI);
    } else
      (x = Math.atan2(p.y - m.y, p.x - m.x)),
        x < 0 && (x = Math.PI * 2 + x),
        o.children.length === 0 || (o.children.length !== 0 && o.isExpand === !1)
          ? ((b = p.x < m.x), b && (x = x - Math.PI))
          : ((b = p.x > m.x), b || (x = x - Math.PI));
    var _ = b ? 'left' : 'right',
      A = s.getModel('label'),
      M = A.get('rotate'),
      D = M * (Math.PI / 180),
      T = g.getTextContent();
    T &&
      (g.setTextConfig({
        position: A.get('position') || _,
        rotation: M == null ? -x : D,
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
  P && (ut(t).focus = P),
    fy(n, o, h, t, d, f, p, r),
    t.__edge &&
      (t.onHoverStateChange = function (C) {
        if (C !== 'blur') {
          var E = o.parentNode && a.getItemGraphicEl(o.parentNode.dataIndex);
          (E && E.hoverState === uv) || hv(t.__edge, C);
        }
      });
}
function fy(a, e, t, r, n, i, o, s) {
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
      (p || (p = r.__edge = new vl({ shape: Ln(h, v, c, n, n) })),
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
      var S = g[m].getLayout();
      y.push([S.x, S.y]);
    }
    p ||
      (p = r.__edge =
        new vy({
          shape: { parentPoint: [o.x, o.y], childPoints: [[o.x, o.y]], orient: v, forkPosition: f },
        })),
      ht(p, { shape: { parentPoint: [o.x, o.y], childPoints: y } }, a);
  }
  p &&
    !(u === 'polyline' && !e.isExpand) &&
    (p.useStyle(nt({ strokeNoScale: !0, fill: null }, d)), Et(p, l, 'lineStyle'), Fa(p), s.add(p));
}
function Ko(a, e, t, r, n) {
  var i = e.tree.root,
    o = su(i, a),
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
        ? $a(c, { shape: Ln(d, p, g, l, l), style: { opacity: 0 } }, r, {
            cb: function () {
              t.remove(c);
            },
            removeOpt: n,
          })
        : f === 'polyline' &&
          r.get('layout') === 'orthogonal' &&
          $a(
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
function su(a, e) {
  for (var t = e.parentNode === a ? e : e.parentNode || e, r; (r = t.getLayout()), r == null; )
    t = t.parentNode === a ? t : t.parentNode || t;
  return { source: t, sourceLayout: r };
}
function jo(a, e, t, r, n) {
  var i = a.tree.getNodeByDataIndex(e),
    o = a.tree.root,
    s = su(o, i).sourceLayout,
    l = { duration: n.get('animationDurationUpdate'), easing: n.get('animationEasingUpdate') };
  $a(t, { x: s.x + 1, y: s.y + 1 }, n, {
    cb: function () {
      r.remove(t), a.setItemGraphicEl(e, null);
    },
    removeOpt: l,
  }),
    t.fadeOut(null, a.hostModel, { fadeLabel: !0, animation: l }),
    i.children.forEach(function (u) {
      Ko(u, a, r, n, l);
    }),
    Ko(i, a, r, n, l);
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
const dy = cy;
var Nt = wt();
function lu(a) {
  var e = a.mainData,
    t = a.datas;
  t || ((t = { main: e }), (a.datasAttr = { main: 'data' })),
    (a.datas = a.mainData = null),
    uu(e, t, a),
    I(t, function (r) {
      I(e.TRANSFERABLE_METHODS, function (n) {
        r.wrapMethod(n, it(py, a));
      });
    }),
    e.wrapMethod('cloneShallow', it(yy, a)),
    I(e.CHANGABLE_METHODS, function (r) {
      e.wrapMethod(r, it(gy, a));
    }),
    Sn(t[e.dataType] === e);
}
function py(a, e) {
  if (xy(this)) {
    var t = W({}, Nt(this).datas);
    (t[this.dataType] = e), uu(e, t, a);
  } else hi(e, this.dataType, Nt(this).mainData, a);
  return e;
}
function gy(a, e) {
  return a.struct && a.struct.update(), e;
}
function yy(a, e) {
  return (
    I(Nt(e).datas, function (t, r) {
      t !== e && hi(t.cloneShallow(), r, e, a);
    }),
    e
  );
}
function my(a) {
  var e = Nt(this).mainData;
  return a == null || e == null ? e : Nt(e).datas[a];
}
function Sy() {
  var a = Nt(this).mainData;
  return a == null
    ? [{ data: a }]
    : O(pt(Nt(a).datas), function (e) {
        return { type: e, data: Nt(a).datas[e] };
      });
}
function xy(a) {
  return Nt(a).mainData === a;
}
function uu(a, e, t) {
  (Nt(a).datas = {}),
    I(e, function (r, n) {
      hi(r, n, a, t);
    });
}
function hi(a, e, t, r) {
  (Nt(t).datas[e] = a),
    (Nt(a).mainData = t),
    (a.dataType = e),
    r.struct && ((a[r.structAttr] = r.struct), (r.struct[r.datasAttr[e]] = a)),
    (a.getLinkedData = my),
    (a.getLinkedDataAll = Sy);
}
var by = (function () {
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
        st(e) && ((r = t), (t = e), (e = null)), (e = e || {}), at(e) && (e = { order: e });
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
  wy = (function () {
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
          (o = Math.max(o, F(c) ? c.length : 1)), i.push(h);
          var f = new by(ie(h.name, ''), n);
          v ? _y(f, v) : (n.root = f), n._nodes.push(f);
          var d = h.children;
          if (d) for (var p = 0; p < d.length; p++) s(d[p], f);
        }
        n.root.updateDepthAndHeight(0);
        var l = qn(i, { coordDimensions: ['value'], dimensionsCount: o }).dimensions,
          u = new It(l, t);
        return (
          u.initData(i),
          r && r(u),
          lu({ mainData: u, struct: n, structAttr: 'tree' }),
          n.update(),
          n
        );
      }),
      a
    );
  })();
function _y(a, e) {
  var t = e.children;
  a.parentNode !== e && (t.push(a), (a.parentNode = e));
}
const vi = wy;
function la(a, e, t) {
  if (a && Lt(e, a.type) >= 0) {
    var r = t.getData().tree.root,
      n = a.targetNode;
    if ((at(n) && (n = r.getNodeById(n)), n && r.contains(n))) return { node: n };
    var i = a.targetNodeId;
    if (i != null && (n = r.getNodeById(i))) return { node: n };
  }
}
function hu(a) {
  for (var e = []; a; ) (a = a.parentNode), a && e.push(a);
  return e.reverse();
}
function ci(a, e) {
  var t = hu(a);
  return Lt(t, e) >= 0;
}
function Sr(a, e) {
  for (var t = []; a; ) {
    var r = a.dataIndex;
    t.push({ name: a.name, dataIndex: r, value: e.getRawValue(r) }), (a = a.parentNode);
  }
  return t.reverse(), t;
}
var Ay = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.hasSymbolVisual = !0), (t.ignoreStyleOnData = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t) {
      var r = { name: t.name, children: t.data },
        n = t.leaves || {},
        i = new jt(n, this, this.ecModel),
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
      return Vt('nameValue', { name: u, value: l, noValue: isNaN(l) || l == null });
    }),
    (e.prototype.getDataParams = function (t) {
      var r = a.prototype.getDataParams.apply(this, arguments),
        n = this.getData().tree.getNodeByDataIndex(t);
      return (r.treeAncestors = Sr(n, this)), (r.collapsed = !n.isExpand), r;
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
const Dy = Ay;
function Ty(a, e, t) {
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
function My(a, e) {
  a.eachSeriesByType('tree', function (t) {
    Cy(t, e);
  });
}
function Cy(a, e) {
  var t = ny(a, e);
  a.layoutInfo = t;
  var r = a.get('layout'),
    n = 0,
    i = 0,
    o = null;
  r === 'radial'
    ? ((n = 2 * Math.PI),
      (i = Math.min(t.height, t.width) / 2),
      (o = Yo(function (S, x) {
        return (S.parentNode === x.parentNode ? 1 : 2) / S.depth;
      })))
    : ((n = t.width), (i = t.height), (o = Yo()));
  var s = a.getData().tree.root,
    l = s.children[0];
  if (l) {
    ey(s), Ty(l, ay, o), (s.hierNode.modifier = -l.hierNode.prelim), Ue(l, ry);
    var u = l,
      h = l,
      v = l;
    Ue(l, function (S) {
      var x = S.getLayout().x;
      x < u.getLayout().x && (u = S), x > h.getLayout().x && (h = S), S.depth > v.depth && (v = S);
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
        Ue(l, function (S) {
          (g = (S.getLayout().x + f) * d), (y = (S.depth - 1) * p);
          var x = qe(g, y);
          S.setLayout({ x: x.x, y: x.y, rawX: g, rawY: y }, !0);
        });
    else {
      var m = a.getOrient();
      m === 'RL' || m === 'LR'
        ? ((p = i / (h.getLayout().x + c + f)),
          (d = n / (v.depth - 1 || 1)),
          Ue(l, function (S) {
            (y = (S.getLayout().x + f) * p),
              (g = m === 'LR' ? (S.depth - 1) * d : n - (S.depth - 1) * d),
              S.setLayout({ x: g, y }, !0);
          }))
        : (m === 'TB' || m === 'BT') &&
          ((d = n / (h.getLayout().x + c + f)),
          (p = i / (v.depth - 1 || 1)),
          Ue(l, function (S) {
            (g = (S.getLayout().x + f) * d),
              (y = m === 'TB' ? (S.depth - 1) * p : i - (S.depth - 1) * p),
              S.setLayout({ x: g, y }, !0);
          }));
    }
  }
}
function Ly(a) {
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
function Iy(a) {
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
          o = Al(i, e, void 0, r);
        n.setCenter && n.setCenter(o.center), n.setZoom && n.setZoom(o.zoom);
      });
    });
}
function Py(a) {
  a.registerChartView(dy),
    a.registerSeriesModel(Dy),
    a.registerLayout(My),
    a.registerVisual(Ly),
    Iy(a);
}
var Jo = ['treemapZoomToNode', 'treemapRender', 'treemapMove'];
function Ey(a) {
  for (var e = 0; e < Jo.length; e++) a.registerAction({ type: Jo[e], update: 'updateView' }, Be);
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
function vu(a) {
  var e = a.getData(),
    t = e.tree,
    r = {};
  t.eachNode(function (n) {
    for (var i = n; i && i.depth > 1; ) i = i.parentNode;
    var o = yn(a.ecModel, i.name || i.dataIndex + '', r);
    n.setVisual('decal', o);
  });
}
var ky = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.preventUsingHoverLayer = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      var n = { name: t.name, children: t.data };
      cu(n);
      var i = t.levels || [],
        o = (this.designatedVisualItemStyle = {}),
        s = new jt({ itemStyle: o }, this, r);
      i = t.levels = Ry(i, r);
      var l = O(
          i || [],
          function (v) {
            return new jt(v, s, r);
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
      return Vt('nameValue', { name: s, value: o });
    }),
    (e.prototype.getDataParams = function (t) {
      var r = a.prototype.getDataParams.apply(this, arguments),
        n = this.getData().tree.getNodeByDataIndex(t);
      return (r.treeAncestors = Sr(n, this)), (r.treePathInfo = r.treeAncestors), r;
    }),
    (e.prototype.setLayoutInfo = function (t) {
      (this.layoutInfo = this.layoutInfo || {}), W(this.layoutInfo, t);
    }),
    (e.prototype.mapIdToIndex = function (t) {
      var r = this._idIndexMap;
      r || ((r = this._idIndexMap = Ct()), (this._idIndexMapCount = 0));
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
      vu(this);
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
function cu(a) {
  var e = 0;
  I(a.children, function (r) {
    cu(r);
    var n = r.value;
    F(n) && (n = n[0]), (e += n);
  });
  var t = a.value;
  F(t) && (t = t[0]),
    (t == null || isNaN(t)) && (t = e),
    t < 0 && (t = 0),
    F(a.value) ? (a.value[0] = t) : (a.value = t);
}
function Ry(a, e) {
  var t = le(e.get('color')),
    r = le(e.get(['aria', 'decal', 'decals']));
  if (t) {
    a = a || [];
    var n, i;
    I(a, function (s) {
      var l = new jt(s),
        u = l.get('color'),
        h = l.get('decal');
      (l.get(['itemStyle', 'color']) || (u && u !== 'none')) && (n = !0),
        (l.get(['itemStyle', 'decal']) || (h && h !== 'none')) && (i = !0);
    });
    var o = a[0] || (a[0] = {});
    return n || (o.color = t.slice()), !i && r && (o.decal = r.slice()), a;
  }
}
const Ny = ky;
var Vy = 8,
  Qo = 8,
  $r = 5,
  zy = (function () {
    function a(e) {
      (this.group = new j()), e.add(this.group);
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
          this._prepare(r, v, u), this._renderContent(e, v, s, l, u, h, n), ll(o, v.pos, v.box);
        }
      }),
      (a.prototype._prepare = function (e, t, r) {
        for (var n = e; n; n = n.parentNode) {
          var i = ie(n.getModel().get('name'), ''),
            o = r.getTextRect(i),
            s = Math.max(o.width + Vy * 2, t.emptyItemWidth);
          (t.totalWidth += s + Qo), t.renderList.push({ node: n, text: i, width: s });
        }
      }),
      (a.prototype._renderContent = function (e, t, r, n, i, o, s) {
        for (
          var l = 0,
            u = t.emptyItemWidth,
            h = e.get(['breadcrumb', 'height']),
            v = vv(t.pos, t.box),
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
            S = g.text;
          c > v.width && ((c -= m - u), (m = u), (S = null));
          var x = new Ce({
            shape: { points: By(l, 0, m, h, p === f.length - 1, p === 0) },
            style: nt(r.getItemStyle(), { lineJoin: 'bevel' }),
            textContent: new gt({ style: yt(i, { text: S }) }),
            textConfig: { position: 'inside' },
            z2: pr * 1e4,
            onclick: it(s, y),
          });
          (x.disableLabelAnimation = !0),
            (x.getTextContent().ensureState('emphasis').style = yt(o, { text: S })),
            (x.ensureState('emphasis').style = d),
            ft(x, n.get('focus'), n.get('blurScope'), n.get('disabled')),
            this.group.add(x),
            Gy(x, e, y),
            (l += m + Qo);
        }
      }),
      (a.prototype.remove = function () {
        this.group.removeAll();
      }),
      a
    );
  })();
function By(a, e, t, r, n, i) {
  var o = [
    [n ? a : a - $r, e],
    [a + t, e],
    [a + t, e + r],
    [n ? a : a - $r, e + r],
  ];
  return !i && o.splice(2, 0, [a + t + $r, e + r / 2]), !n && o.push([a, e + r / 2]), o;
}
function Gy(a, e, t) {
  ut(a).eventData = {
    componentType: 'series',
    componentSubType: 'treemap',
    componentIndex: e.componentIndex,
    seriesIndex: e.seriesIndex,
    seriesName: e.name,
    seriesType: 'treemap',
    selfType: 'breadcrumb',
    nodeData: { dataIndex: t && t.dataIndex, name: t && t.name },
    treePathInfo: t && Sr(t, e),
  };
}
const Oy = zy;
var Wy = (function () {
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
function Fy() {
  return new Wy();
}
var In = j,
  ts = Mt,
  es = 3,
  as = 'label',
  rs = 'upperLabel',
  $y = pr * 10,
  Hy = pr * 2,
  Zy = pr * 3,
  be = al([
    ['fill', 'color'],
    ['stroke', 'strokeColor'],
    ['lineWidth', 'strokeWidth'],
    ['shadowBlur'],
    ['shadowOffsetX'],
    ['shadowOffsetY'],
    ['shadowColor'],
  ]),
  ns = function (a) {
    var e = be(a);
    return (e.stroke = e.fill = e.lineWidth = null), e;
  },
  qa = wt(),
  Uy = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t._state = 'ready'), (t._storage = Ye()), t;
    }
    return (
      (e.prototype.render = function (t, r, n, i) {
        var o = r.findComponents({ mainType: 'series', subType: 'treemap', query: i });
        if (!(Lt(o, t) < 0)) {
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
        function v(g, y, m, S) {
          return Yy(r, l, u, n, s, h, g, y, m, S);
        }
        f(i.root ? [i.root] : [], o && o.root ? [o.root] : [], t, i === o || !o, 0);
        var c = d(u);
        return (
          (this._oldTree = i),
          (this._storage = l),
          { lastsForAnimation: s, willDeleteEls: c, renderFinally: p }
        );
        function f(g, y, m, S, x) {
          S
            ? ((y = g),
              I(g, function (_, A) {
                !_.isRemoved() && w(A, A);
              }))
            : new gr(y, g, b, b).add(w).update(w).remove(it(w, null)).execute();
          function b(_) {
            return _.getId();
          }
          function w(_, A) {
            var M = _ != null ? g[_] : null,
              D = A != null ? y[A] : null,
              T = v(M, D, m, x);
            T && f((M && M.viewChildren) || [], (D && D.viewChildren) || [], T, S, x + 1);
          }
        }
        function d(g) {
          var y = Ye();
          return (
            g &&
              I(g, function (m, S) {
                var x = y[S];
                I(m, function (b) {
                  b && (x.push(b), (qa(b).willDelete = !0));
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
          h = Fy();
        I(r.willDeleteEls, function (v, c) {
          I(v, function (f, d) {
            if (!f.invisible) {
              var p = f.parent,
                g,
                y = qa(p);
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
                  S = 0;
                y.willDelete || ((m = y.nodeWidth / 2), (S = y.nodeHeight / 2)),
                  (g =
                    c === 'nodeGroup'
                      ? { x: m, y: S, style: { opacity: 0 } }
                      : { shape: { x: m, y: S, width: 0, height: 0 }, style: { opacity: 0 } });
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
                  (f instanceof j
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
          ((r = this._controller = new ur(t.getZr())),
          r.enable(this.seriesModel.get('roam')),
          r.on('pan', U(this._onPan, this)),
          r.on('zoom', U(this._onZoom, this)));
        var n = new Jt(0, 0, t.getWidth(), t.getHeight());
        r.setPointerChecker(function (i, o, s) {
          return n.contain(o, s);
        });
      }),
      (e.prototype._clearController = function () {
        var t = this._controller;
        t && (t.dispose(), (t = null));
      }),
      (e.prototype._onPan = function (t) {
        if (this._state !== 'animating' && (Math.abs(t.dx) > es || Math.abs(t.dy) > es)) {
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
          var s = new Jt(o.x, o.y, o.width, o.height),
            l = this.seriesModel.layoutInfo;
          (r -= l.x), (n -= l.y);
          var u = tr();
          ze(u, u, [-r, -n]),
            cv(u, u, [t.scale, t.scale]),
            ze(u, u, [r, n]),
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
                    u && Dl(u, h);
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
          (this._breadcrumb || (this._breadcrumb = new Oy(this.group))).render(
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
function Yy(a, e, t, r, n, i, o, s, l, u) {
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
    S = o.viewChildren,
    x = h.upperHeight,
    b = S && S.length,
    w = c.getModel('itemStyle'),
    _ = c.getModel(['emphasis', 'itemStyle']),
    A = c.getModel(['blur', 'itemStyle']),
    M = c.getModel(['select', 'itemStyle']),
    D = w.get('borderRadius') || 0,
    T = X('nodeGroup', In);
  if (!T) return;
  if (
    (l.add(T),
    (T.x = h.x || 0),
    (T.y = h.y || 0),
    T.markRedraw(),
    (qa(T).nodeWidth = f),
    (qa(T).nodeHeight = d),
    h.isAboveViewRoot)
  )
    return T;
  var L = X('background', ts, u, Hy);
  L && G(T, L, b && h.upperLabelHeight);
  var P = c.getModel('emphasis'),
    C = P.get('focus'),
    E = P.get('blurScope'),
    k = P.get('disabled'),
    N =
      C === 'ancestor'
        ? o.getAncestorsIndices()
        : C === 'descendant'
        ? o.getDescendantIndices()
        : C;
  if (b) Ni(T) && xa(T, !1), L && (xa(L, !k), v.setItemGraphicEl(o.dataIndex, L), Vi(L, N, E));
  else {
    var V = X('content', ts, u, Zy);
    V && $(T, V),
      (L.disableMorphing = !0),
      L && Ni(L) && xa(L, !1),
      xa(T, !k),
      v.setItemGraphicEl(o.dataIndex, T),
      Vi(T, N, E);
  }
  return T;
  function G(q, Z, tt) {
    var Q = ut(Z);
    if (
      ((Q.dataIndex = o.dataIndex),
      (Q.seriesIndex = a.seriesIndex),
      Z.setShape({ x: 0, y: 0, width: f, height: d, r: D }),
      g)
    )
      H(Z);
    else {
      Z.invisible = !1;
      var rt = o.getVisual('style'),
        St = rt.stroke,
        bt = ns(w);
      bt.fill = St;
      var ot = be(_);
      ot.fill = _.get('borderColor');
      var _t = be(A);
      _t.fill = A.get('borderColor');
      var At = be(M);
      if (((At.fill = M.get('borderColor')), tt)) {
        var Yt = f - 2 * p;
        K(Z, St, rt.opacity, { x: p, y: 0, width: Yt, height: x });
      } else Z.removeTextContent();
      Z.setStyle(bt),
        (Z.ensureState('emphasis').style = ot),
        (Z.ensureState('blur').style = _t),
        (Z.ensureState('select').style = At),
        Fa(Z);
    }
    q.add(Z);
  }
  function $(q, Z) {
    var tt = ut(Z);
    (tt.dataIndex = o.dataIndex), (tt.seriesIndex = a.seriesIndex);
    var Q = Math.max(f - 2 * p, 0),
      rt = Math.max(d - 2 * p, 0);
    if (((Z.culling = !0), Z.setShape({ x: p, y: p, width: Q, height: rt, r: D }), g)) H(Z);
    else {
      Z.invisible = !1;
      var St = o.getVisual('style'),
        bt = St.fill,
        ot = ns(w);
      (ot.fill = bt), (ot.decal = St.decal);
      var _t = be(_),
        At = be(A),
        Yt = be(M);
      K(Z, bt, St.opacity, null),
        Z.setStyle(ot),
        (Z.ensureState('emphasis').style = _t),
        (Z.ensureState('blur').style = At),
        (Z.ensureState('select').style = Yt),
        Fa(Z);
    }
    q.add(Z);
  }
  function H(q) {
    !q.invisible && i.push(q);
  }
  function K(q, Z, tt, Q) {
    var rt = c.getModel(Q ? rs : as),
      St = ie(c.get('name'), null),
      bt = rt.getShallow('show');
    Qt(q, zt(c, Q ? rs : as), {
      defaultText: bt ? St : null,
      inheritColor: Z,
      defaultOpacity: tt,
      labelFetcher: a,
      labelDataIndex: o.dataIndex,
    });
    var ot = q.getTextContent();
    if (ot) {
      var _t = ot.style,
        At = fv(_t.padding || 0);
      Q && (q.setTextConfig({ layoutRect: Q }), (ot.disableLabelLayout = !0)),
        (ot.beforeUpdate = function () {
          var me = Math.max((Q ? Q.width : q.shape.width) - At[1] - At[3], 0),
            Se = Math.max((Q ? Q.height : q.shape.height) - At[0] - At[2], 0);
          (_t.width !== me || _t.height !== Se) && ot.setStyle({ width: me, height: Se });
        }),
        (_t.truncateMinChar = 2),
        (_t.lineOverflow = 'truncate'),
        J(_t, Q, h);
      var Yt = ot.getState('emphasis');
      J(Yt ? Yt.style : null, Q, h);
    }
  }
  function J(q, Z, tt) {
    var Q = q ? q.text : null;
    if (!Z && tt.isLeafRoot && Q != null) {
      var rt = a.get('drillDownIcon', !0);
      q.text = rt ? rt + ' ' + Q : Q;
    }
  }
  function X(q, Z, tt, Q) {
    var rt = m != null && t[q][m],
      St = n[q];
    return (
      rt
        ? ((t[q][m] = null), et(St, rt))
        : g || ((rt = new Z()), rt instanceof nr && (rt.z2 = Xy(tt, Q)), xt(St, rt)),
      (e[q][y] = rt)
    );
  }
  function et(q, Z) {
    var tt = (q[y] = {});
    Z instanceof In ? ((tt.oldX = Z.x), (tt.oldY = Z.y)) : (tt.oldShape = W({}, Z.shape));
  }
  function xt(q, Z) {
    var tt = (q[y] = {}),
      Q = o.parentNode,
      rt = Z instanceof j;
    if (Q && (!r || r.direction === 'drillDown')) {
      var St = 0,
        bt = 0,
        ot = n.background[Q.getRawIndex()];
      !r && ot && ot.oldShape && ((St = ot.oldShape.width), (bt = ot.oldShape.height)),
        rt
          ? ((tt.oldX = 0), (tt.oldY = bt))
          : (tt.oldShape = { x: St, y: bt, width: 0, height: 0 });
    }
    tt.fadein = !rt;
  }
}
function Xy(a, e) {
  return a * $y + e;
}
const qy = Uy;
var Ky = 'itemStyle',
  fu = wt();
const jy = {
  seriesType: 'treemap',
  reset: function (a) {
    var e = a.getData().tree,
      t = e.root;
    t.isRemoved() || du(t, {}, a.getViewRoot().getAncestors(), a);
  },
};
function du(a, e, t, r) {
  var n = a.getModel(),
    i = a.getLayout(),
    o = a.hostTree.data;
  if (!(!i || i.invisible || !i.isInView)) {
    var s = n.getModel(Ky),
      l = Jy(s, e, r),
      u = o.ensureUniqueItemVisual(a.dataIndex, 'style'),
      h = s.get('borderColor'),
      v = s.get('borderColorSaturation'),
      c;
    v != null && ((c = is(l)), (h = Qy(v, c))), (u.stroke = h);
    var f = a.viewChildren;
    if (!f || !f.length) (c = is(l)), (u.fill = c);
    else {
      var d = tm(a, n, i, s, l, f);
      I(f, function (p, g) {
        if (p.depth >= t.length || p === t[p.depth]) {
          var y = em(n, l, p, g, d, r);
          du(p, y, t, r);
        }
      });
    }
  }
}
function Jy(a, e, t) {
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
function is(a) {
  var e = Hr(a, 'color');
  if (e) {
    var t = Hr(a, 'colorAlpha'),
      r = Hr(a, 'colorSaturation');
    return r && (e = Tl(e, null, null, r)), t && (e = gn(e, t)), e;
  }
}
function Qy(a, e) {
  return e != null ? Tl(e, null, null, a) : null;
}
function Hr(a, e) {
  var t = a[e];
  if (t != null && t !== 'none') return t;
}
function tm(a, e, t, r, n, i) {
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
      var c = new Ml(v);
      return (fu(c).drColorMappingBy = h), c;
    }
  }
}
function Zr(a, e) {
  var t = a.get(e);
  return F(t) && t.length ? { name: e, range: t } : null;
}
function em(a, e, t, r, n, i) {
  var o = W({}, e);
  if (n) {
    var s = n.type,
      l = s === 'color' && fu(n).drColorMappingBy,
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
  Ka = Math.min,
  os = Ot,
  fi = I,
  pu = ['itemStyle', 'borderWidth'],
  am = ['itemStyle', 'gapWidth'],
  rm = ['upperLabel', 'show'],
  nm = ['upperLabel', 'height'];
const im = {
  seriesType: 'treemap',
  reset: function (a, e, t, r) {
    var n = t.getWidth(),
      i = t.getHeight(),
      o = a.option,
      s = re(a.getBoxLayoutParams(), { width: t.getWidth(), height: t.getHeight() }),
      l = o.size || [],
      u = B(os(s.width, l[0]), n),
      h = B(os(s.height, l[1]), i),
      v = r && r.type,
      c = ['treemapZoomToNode', 'treemapRootToNode'],
      f = la(r, c, a),
      d = v === 'treemapRender' || v === 'treemapMove' ? r.rootRect : null,
      p = a.getViewRoot(),
      g = hu(p);
    if (v !== 'treemapMove') {
      var y = v === 'treemapZoomToNode' ? vm(a, f, p, u, h) : d ? [d.width, d.height] : [u, h],
        m = o.sort;
      m && m !== 'asc' && m !== 'desc' && (m = 'desc');
      var S = { squareRatio: o.squareRatio, sort: m, leafDepth: o.leafDepth };
      p.hostTree.clearLayouts();
      var x = { x: 0, y: 0, width: y[0], height: y[1], area: y[0] * y[1] };
      p.setLayout(x),
        gu(p, S, !1, 0),
        (x = p.getLayout()),
        fi(g, function (w, _) {
          var A = (g[_ + 1] || p).getValue();
          w.setLayout(W({ dataExtent: [A, A], borderWidth: 0, upperHeight: 0 }, x));
        });
    }
    var b = a.getData().tree.root;
    b.setLayout(cm(s, d, f), !0), a.setLayoutInfo(s), yu(b, new Jt(-s.x, -s.y, n, i), g, p, 0);
  },
};
function gu(a, e, t, r) {
  var n, i;
  if (!a.isRemoved()) {
    var o = a.getLayout();
    (n = o.width), (i = o.height);
    var s = a.getModel(),
      l = s.get(pu),
      u = s.get(am) / 2,
      h = mu(s),
      v = Math.max(l, h),
      c = l - u,
      f = v - u;
    a.setLayout({ borderWidth: l, upperHeight: v, upperLabelHeight: h }, !0),
      (n = ua(n - 2 * c, 0)),
      (i = ua(i - c - f, 0));
    var d = n * i,
      p = om(a, s, d, e, t, r);
    if (p.length) {
      var g = { x: c, y: f, width: n, height: i },
        y = Ka(n, i),
        m = 1 / 0,
        S = [];
      S.area = 0;
      for (var x = 0, b = p.length; x < b; ) {
        var w = p[x];
        S.push(w), (S.area += w.getLayout().area);
        var _ = hm(S, y, e.squareRatio);
        _ <= m
          ? (x++, (m = _))
          : ((S.area -= S.pop().getLayout().area),
            ss(S, y, g, u, !1),
            (y = Ka(g.width, g.height)),
            (S.length = S.area = 0),
            (m = 1 / 0));
      }
      if ((S.length && ss(S, y, g, u, !0), !t)) {
        var A = s.get('childrenVisibleMin');
        A != null && d < A && (t = !0);
      }
      for (var x = 0, b = p.length; x < b; x++) gu(p[x], e, t, r + 1);
    }
  }
}
function om(a, e, t, r, n, i) {
  var o = a.children || [],
    s = r.sort;
  s !== 'asc' && s !== 'desc' && (s = null);
  var l = r.leafDepth != null && r.leafDepth <= i;
  if (n && !l) return (a.viewChildren = []);
  (o = Ut(o, function (f) {
    return !f.isRemoved();
  })),
    lm(o, s);
  var u = um(e, o, s);
  if (u.sum === 0) return (a.viewChildren = []);
  if (((u.sum = sm(e, t, u.sum, s, o)), u.sum === 0)) return (a.viewChildren = []);
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
function sm(a, e, t, r, n) {
  if (!r) return t;
  for (var i = a.get('visibleMin'), o = n.length, s = o, l = o - 1; l >= 0; l--) {
    var u = n[r === 'asc' ? o - l - 1 : l].getValue();
    (u / t) * e < i && ((s = l), (t -= u));
  }
  return r === 'asc' ? n.splice(0, o - s) : n.splice(s, o - s), t;
}
function lm(a, e) {
  return (
    e &&
      a.sort(function (t, r) {
        var n = e === 'asc' ? t.getValue() - r.getValue() : r.getValue() - t.getValue();
        return n === 0 ? (e === 'asc' ? t.dataIndex - r.dataIndex : r.dataIndex - t.dataIndex) : n;
      }),
    a
  );
}
function um(a, e, t) {
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
function hm(a, e, t) {
  for (var r = 0, n = 1 / 0, i = 0, o = void 0, s = a.length; i < s; i++)
    (o = a[i].getLayout().area), o && (o < n && (n = o), o > r && (r = o));
  var l = a.area * a.area,
    u = e * e * t;
  return l ? ua((u * r) / l, l / (u * n)) : 1 / 0;
}
function ss(a, e, t, r, n) {
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
      S = (d[l[i]] = ua(m - 2 * r, 0));
    (d[s[o]] = t[s[o]] + Ka(r, g / 2)), (d[s[i]] = u + Ka(r, S / 2)), (u += m), f.setLayout(d, !0);
  }
  (t[s[o]] += h), (t[l[o]] -= h);
}
function vm(a, e, t, r, n) {
  var i = (e || {}).node,
    o = [r, n];
  if (!i || i === t) return o;
  for (var s, l = r * n, u = l * a.option.zoomToNodeRatio; (s = i.parentNode); ) {
    for (var h = 0, v = s.children, c = 0, f = v.length; c < f; c++) h += v[c].getValue();
    var d = i.getValue();
    if (d === 0) return o;
    u *= h / d;
    var p = s.getModel(),
      g = p.get(pu),
      y = Math.max(g, mu(p));
    (u += 4 * g * g + (3 * g + y) * Math.pow(u, 0.5)), u > zi && (u = zi), (i = s);
  }
  u < l && (u = l);
  var m = Math.pow(u / l, 0.5);
  return [r * m, n * m];
}
function cm(a, e, t) {
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
function yu(a, e, t, r, n) {
  var i = a.getLayout(),
    o = t[n],
    s = o && o === a;
  if (!((o && !s) || (n === t.length && a !== r))) {
    a.setLayout({ isInView: !0, invisible: !s && !e.intersect(i), isAboveViewRoot: s }, !0);
    var l = new Jt(e.x - i.x, e.y - i.y, e.width, e.height);
    fi(a.viewChildren || [], function (u) {
      yu(u, l, t, r, n + 1);
    });
  }
}
function mu(a) {
  return a.get(rm) ? a.get(nm) : 0;
}
function fm(a) {
  a.registerSeriesModel(Ny),
    a.registerChartView(qy),
    a.registerVisual(jy),
    a.registerLayout(im),
    Ey(a);
}
function dm(a) {
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
          Ft(u) && (u = o[u]);
          for (var h = 0; h < e.length; h++) if (!e[h].isSelected(u)) return !1;
        }
        return !0;
      });
    });
}
function pm(a) {
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
            at(l) && (l = i['ec-' + l]);
            var u = r.getItemVisual(l, 'style'),
              h = n.ensureUniqueItemVisual(o, 'style');
            W(h, u);
            for (var v = ['symbol', 'symbolSize', 'symbolKeepAspect'], c = 0; c < v.length; c++)
              n.setItemVisual(o, v[c], r.getItemVisual(l, v[c]));
          }
        });
  });
}
function Pa(a) {
  return a instanceof Array || (a = [a, a]), a;
}
function gm(a) {
  a.eachSeriesByType('graph', function (e) {
    var t = e.getGraph(),
      r = e.getEdgeData(),
      n = Pa(e.get('edgeSymbol')),
      i = Pa(e.get('edgeSymbolSize'));
    r.setVisual('fromSymbol', n && n[0]),
      r.setVisual('toSymbol', n && n[1]),
      r.setVisual('fromSymbolSize', i && i[0]),
      r.setVisual('toSymbolSize', i && i[1]),
      r.setVisual('style', e.getModel('lineStyle').getLineStyle()),
      r.each(function (o) {
        var s = r.getItemModel(o),
          l = t.getEdgeByIndex(o),
          u = Pa(s.getShallow('symbol', !0)),
          h = Pa(s.getShallow('symbolSize', !0)),
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
  xr = function (a) {
    return a.get('autoCurveness') || null;
  },
  Su = function (a, e) {
    var t = xr(a),
      r = 20,
      n = [];
    if (Ft(t)) r = t;
    else if (F(t)) {
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
  xu = function (a) {
    var e = a.split(Pn);
    return [e[0], e[2], e[1]].join(Pn);
  },
  ym = function (a, e) {
    var t = ha(a.node1, a.node2, e);
    return e.__edgeMap[t];
  },
  mm = function (a, e) {
    var t = En(ha(a.node1, a.node2, e), e),
      r = En(ha(a.node2, a.node1, e), e);
    return t + r;
  },
  En = function (a, e) {
    var t = e.__edgeMap;
    return t[a] ? t[a].length : 0;
  };
function Sm(a) {
  xr(a) && ((a.__curvenessList = []), (a.__edgeMap = {}), Su(a));
}
function xm(a, e, t, r) {
  if (xr(t)) {
    var n = ha(a, e, t),
      i = t.__edgeMap,
      o = i[xu(n)];
    i[n] && !o ? (i[n].isForward = !0) : o && i[n] && ((o.isForward = !0), (i[n].isForward = !1)),
      (i[n] = i[n] || []),
      i[n].push(r);
  }
}
function di(a, e, t, r) {
  var n = xr(e),
    i = F(n);
  if (!n) return null;
  var o = ym(a, e);
  if (!o) return null;
  for (var s = -1, l = 0; l < o.length; l++)
    if (o[l] === t) {
      s = l;
      break;
    }
  var u = mm(a, e);
  Su(e, u), (a.lineStyle = a.lineStyle || {});
  var h = ha(a.node1, a.node2, e),
    v = e.__curvenessList,
    c = i || u % 2 ? 0 : 1;
  if (o.isForward) return v[c + s];
  var f = xu(h),
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
function bu(a) {
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
    var n = ma(t.getModel().get(['lineStyle', 'curveness']), -di(t, e, r, !0), 0),
      i = ve(t.node1.getLayout()),
      o = ve(t.node2.getLayout()),
      s = [i, o];
    +n && s.push([(i[0] + o[0]) / 2 - (i[1] - o[1]) * n, (i[1] + o[1]) / 2 - (o[0] - i[0]) * n]),
      t.setLayout(s);
  });
}
function bm(a, e) {
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
    } else (!r || r === 'none') && bu(t);
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
var ls = Math.PI,
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
        ya(p, p), dv(p, p, h), t.setLayout([l + p[0], u + p[1]], !0);
        var g = a.get(['circular', 'rotateLabel']);
        wu(t, g, l, u);
      }
      wm[e](a, s, o, h, l, u, v),
        s.eachEdge(function (y, m) {
          var S = ma(y.getModel().get(['lineStyle', 'curveness']), di(y, a, m), 0),
            x = ve(y.node1.getLayout()),
            b = ve(y.node2.getLayout()),
            w,
            _ = (x[0] + b[0]) / 2,
            A = (x[1] + b[1]) / 2;
          +S && ((S *= 3), (w = [l * S + _ * (1 - S), u * S + A * (1 - S)])),
            y.setLayout([x, b, w]);
        });
    }
  }
}
var wm = {
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
      isNaN(f) && (f = ls / 2), (Ur[v.dataIndex] = f), (s += f * 2);
    });
    var u = (2 * ls - s) / o / 2,
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
function wu(a, e, t, r) {
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
function _m(a) {
  a.eachSeriesByType('graph', function (e) {
    e.get('layout') === 'circular' && gi(e, 'symbolSize');
  });
}
var Pe = xn;
function Am(a, e, t) {
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
    v.p || (v.p = pv(o * (Math.random() - 0.5) + l[0], s * (Math.random() - 0.5) + l[1])),
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
      for (var y = [], m = r.length, S = 0; S < n.length; S++) {
        var x = n[S];
        if (!x.ignoreForceLayout) {
          var b = x.n1,
            w = x.n2;
          Ne(y, w.p, b.p);
          var _ = Bi(y) - x.d,
            A = w.w / (b.w + w.w);
          isNaN(A) && (A = 0),
            ya(y, y),
            !b.fixed && Pe(b.p, b.p, y, A * _ * f),
            !w.fixed && Pe(w.p, w.p, y, -(1 - A) * _ * f);
        }
      }
      for (var S = 0; S < m; S++) {
        var M = r[S];
        M.fixed || (Ne(y, l, M.p), Pe(M.p, M.p, y, u * f));
      }
      for (var S = 0; S < m; S++)
        for (var b = r[S], D = S + 1; D < m; D++) {
          var w = r[D];
          Ne(y, w.p, b.p);
          var _ = Bi(y);
          _ === 0 && (gv(y, Math.random() - 0.5, Math.random() - 0.5), (_ = 1));
          var T = (b.rep + w.rep) / _ / _;
          !b.fixed && Pe(b.pp, b.pp, y, T), !w.fixed && Pe(w.pp, w.pp, y, -T);
        }
      for (var L = [], S = 0; S < m; S++) {
        var M = r[S];
        M.fixed || (Ne(L, M.p, M.pp), Pe(M.p, M.p, L, f), Dt(M.pp, M.p));
      }
      f = f * 0.992;
      var P = f < 0.01;
      p && p(r, n, P), g && g(P);
    },
  };
}
function Dm(a) {
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
          ? i.each(function (S) {
              var x = i.getId(S);
              i.setItemLayout(S, r[x] || [NaN, NaN]);
            })
          : !l || l === 'none'
          ? bu(e)
          : l === 'circular' && gi(e, 'value');
        var u = i.getDataExtent('value'),
          h = o.getDataExtent('value'),
          v = s.get('repulsion'),
          c = s.get('edgeLength'),
          f = F(v) ? v : [v, v],
          d = F(c) ? c : [c, c];
        d = [d[1], d[0]];
        var p = i.mapArray('value', function (S, x) {
            var b = i.getItemLayout(x),
              w = vt(S, u, f);
            return (
              isNaN(w) && (w = (f[0] + f[1]) / 2),
              {
                w,
                rep: w,
                fixed: i.getItemModel(x).get('fixed'),
                p: !b || isNaN(b[0]) || isNaN(b[1]) ? null : b,
              }
            );
          }),
          g = o.mapArray('value', function (S, x) {
            var b = n.getEdgeByIndex(x),
              w = vt(S, h, d);
            isNaN(w) && (w = (d[0] + d[1]) / 2);
            var _ = b.getModel(),
              A = ma(b.getModel().get(['lineStyle', 'curveness']), -di(b, e, x, !0), 0);
            return {
              n1: p[b.node1.dataIndex],
              n2: p[b.node2.dataIndex],
              d: w,
              curveness: A,
              ignoreForceLayout: _.get('ignoreForceLayout'),
            };
          }),
          y = t.getBoundingRect(),
          m = Am(p, g, { rect: y, gravity: s.get('gravity'), friction: s.get('friction') });
        m.beforeStep(function (S, x) {
          for (var b = 0, w = S.length; b < w; b++)
            S[b].fixed && Dt(S[b].p, n.getNodeByIndex(b).getLayout());
        }),
          m.afterStep(function (S, x, b) {
            for (var w = 0, _ = S.length; w < _; w++)
              S[w].fixed || n.getNodeByIndex(w).setLayout(S[w].p), (r[i.getId(w)] = S[w].p);
            for (var w = 0, _ = x.length; w < _; w++) {
              var A = x[w],
                M = n.getEdgeByIndex(w),
                D = A.n1.p,
                T = A.n2.p,
                L = M.getLayout();
              (L = L ? L.slice() : []),
                (L[0] = L[0] || []),
                (L[1] = L[1] || []),
                Dt(L[0], D),
                Dt(L[1], T),
                +A.curveness &&
                  (L[2] = [
                    (D[0] + T[0]) / 2 - (D[1] - T[1]) * A.curveness,
                    (D[1] + T[1]) / 2 - (T[0] - D[0]) * A.curveness,
                  ]),
                M.setLayout(L);
            }
          }),
          (e.forceLayout = m),
          (e.preservedPoints = r),
          m.step();
      } else e.forceLayout = null;
  });
}
function Tm(a, e, t) {
  var r = W(a.getBoxLayoutParams(), { aspect: t });
  return re(r, { width: e.getWidth(), height: e.getHeight() });
}
function Mm(a, e) {
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
        Sl(o, s, l),
          l[0] - s[0] === 0 && ((l[0] += 1), (s[0] -= 1)),
          l[1] - s[1] === 0 && ((l[1] += 1), (s[1] -= 1));
        var u = (l[0] - s[0]) / (l[1] - s[1]),
          h = Tm(r, e, u);
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
  Ee = Cl,
  Kr = mv,
  us = Math.abs;
function hs(a, e, t) {
  for (
    var r = a[0], n = a[1], i = a[2], o = 1 / 0, s, l = t * t, u = 0.1, h = 0.1;
    h <= 0.9;
    h += 0.1
  ) {
    (Yr[0] = Ee(r[0], n[0], i[0], h)), (Yr[1] = Ee(r[1], n[1], i[1], h));
    var v = us(Kr(Yr, e) - l);
    v < o && ((o = v), (s = h));
  }
  for (var c = 0; c < 32; c++) {
    var f = s + u;
    (Xr[0] = Ee(r[0], n[0], i[0], s)),
      (Xr[1] = Ee(r[1], n[1], i[1], s)),
      (qr[0] = Ee(r[0], n[0], i[0], f)),
      (qr[1] = Ee(r[1], n[1], i[1], f));
    var v = Kr(Xr, e) - l;
    if (us(v) < 0.01) break;
    var d = Kr(qr, e) - l;
    (u /= 2), v < 0 ? (d >= 0 ? (s = s + u) : (s = s - u)) : d >= 0 ? (s = s - u) : (s = s + u);
  }
  return s;
}
function jr(a, e) {
  var t = [],
    r = yv,
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
        if ((Dt(n[0], c[0]), Dt(n[1], c[2]), Dt(n[2], c[1]), h && h !== 'none')) {
          var f = je(s.node1),
            d = hs(n, c[0], f * e);
          r(n[0][0], n[1][0], n[2][0], d, t),
            (n[0][0] = t[3]),
            (n[1][0] = t[4]),
            r(n[0][1], n[1][1], n[2][1], d, t),
            (n[0][1] = t[3]),
            (n[1][1] = t[4]);
        }
        if (v && v !== 'none') {
          var f = je(s.node2),
            d = hs(n, c[1], f * e);
          r(n[0][0], n[1][0], n[2][0], d, t),
            (n[1][0] = t[1]),
            (n[2][0] = t[2]),
            r(n[0][1], n[1][1], n[2][1], d, t),
            (n[1][1] = t[1]),
            (n[2][1] = t[2]);
        }
        Dt(u[0], n[0]), Dt(u[1], n[2]), Dt(u[2], n[1]);
      } else {
        if ((Dt(i[0], c[0]), Dt(i[1], c[1]), Ne(o, i[1], i[0]), ya(o, o), h && h !== 'none')) {
          var f = je(s.node1);
          xn(i[0], i[0], o, f * e);
        }
        if (v && v !== 'none') {
          var f = je(s.node2);
          xn(i[1], i[1], o, -f * e);
        }
        Dt(u[0], i[0]), Dt(u[1], i[1]);
      }
    });
}
function vs(a) {
  return a.type === 'view';
}
var Cm = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function (t, r) {
      var n = new or(),
        i = new si(),
        o = this.group;
      (this._controller = new ur(r.getZr())),
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
      if (vs(o)) {
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
      v.graph.eachNode(function (S) {
        var x = S.dataIndex,
          b = S.getGraphicEl(),
          w = S.getModel();
        if (b) {
          b.off('drag').off('dragend');
          var _ = w.get('draggable');
          _ &&
            b
              .on('drag', function (M) {
                switch (p) {
                  case 'force':
                    f.warmUp(),
                      !i._layouting && i._startForceLayoutIteration(f, d),
                      f.setFixed(x),
                      v.setItemLayout(x, [b.x, b.y]);
                    break;
                  case 'circular':
                    v.setItemLayout(x, [b.x, b.y]),
                      S.setLayout({ fixed: !0 }, !0),
                      gi(t, 'symbolSize', S, [M.offsetX, M.offsetY]),
                      i.updateLayout(t);
                    break;
                  case 'none':
                  default:
                    v.setItemLayout(x, [b.x, b.y]), pi(t.getGraph(), t), i.updateLayout(t);
                    break;
                }
              })
              .on('dragend', function () {
                f && f.setUnfixed(x);
              }),
            b.setDraggable(_, !!w.get('cursor'));
          var A = w.get(['emphasis', 'focus']);
          A === 'adjacency' && (ut(b).focus = S.getAdjacentDataIndices());
        }
      }),
        v.graph.eachEdge(function (S) {
          var x = S.getGraphicEl(),
            b = S.getModel().get(['emphasis', 'focus']);
          x &&
            b === 'adjacency' &&
            (ut(x).focus = { edge: [S.dataIndex], node: [S.node1.dataIndex, S.node2.dataIndex] });
        });
      var g = t.get('layout') === 'circular' && t.get(['circular', 'rotateLabel']),
        y = v.getLayout('cx'),
        m = v.getLayout('cy');
      v.graph.eachNode(function (S) {
        wu(S, g, y, m);
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
          return c.applyTransform(l.transform), c.contain(h, v) && !xl(u, n, t);
        }),
        !vs(t.coordinateSystem))
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
            bl(s, u.dx, u.dy),
              n.dispatchAction({ seriesId: t.id, type: 'graphRoam', dx: u.dx, dy: u.dy });
          })
          .on('zoom', function (u) {
            wl(s, u.scale, u.originX, u.originY),
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
const Lm = Cm;
function ke(a) {
  return '_EC_' + a;
}
var Im = (function () {
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
        if (!r[ke(e)]) {
          var n = new we(e, t);
          return (n.hostGraph = this), this.nodes.push(n), (r[ke(e)] = n), n;
        }
      }),
      (a.prototype.getNodeByIndex = function (e) {
        var t = this.data.getRawIndex(e);
        return this.nodes[t];
      }),
      (a.prototype.getNodeById = function (e) {
        return this._nodesMap[ke(e)];
      }),
      (a.prototype.addEdge = function (e, t, r) {
        var n = this._nodesMap,
          i = this._edgesMap;
        if (
          (Ft(e) && (e = this.nodes[e]),
          Ft(t) && (t = this.nodes[t]),
          e instanceof we || (e = n[ke(e)]),
          t instanceof we || (t = n[ke(t)]),
          !(!e || !t))
        ) {
          var o = e.id + '-' + t.id,
            s = new _u(e, t, r);
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
        if ((t instanceof we || (t = this._nodesMap[ke(t)]), !!t)) {
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
      (a.prototype.getTrajectoryDataIndices = function () {
        for (var e = Ct(), t = Ct(), r = 0; r < this.edges.length; r++) {
          var n = this.edges[r];
          if (!(n.dataIndex < 0)) {
            e.set(n.dataIndex, !0);
            for (var i = [n.node1], o = [n.node2], s = 0; s < i.length; ) {
              var l = i[s];
              s++, t.set(l.dataIndex, !0);
              for (var u = 0; u < l.inEdges.length; u++)
                e.set(l.inEdges[u].dataIndex, !0), i.push(l.inEdges[u].node1);
            }
            for (s = 0; s < o.length; ) {
              var h = o[s];
              s++, t.set(h.dataIndex, !0);
              for (var u = 0; u < h.outEdges.length; u++)
                e.set(h.outEdges[u].dataIndex, !0), o.push(h.outEdges[u].node2);
            }
          }
        }
        return { edge: e.keys(), node: t.keys() };
      }),
      a
    );
  })(),
  _u = (function () {
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
      (a.prototype.getTrajectoryDataIndices = function () {
        var e = Ct(),
          t = Ct();
        e.set(this.dataIndex, !0);
        for (var r = [this.node1], n = [this.node2], i = 0; i < r.length; ) {
          var o = r[i];
          i++, t.set(o.dataIndex, !0);
          for (var s = 0; s < o.inEdges.length; s++)
            e.set(o.inEdges[s].dataIndex, !0), r.push(o.inEdges[s].node1);
        }
        for (i = 0; i < n.length; ) {
          var l = n[i];
          i++, t.set(l.dataIndex, !0);
          for (var s = 0; s < l.outEdges.length; s++)
            e.set(l.outEdges[s].dataIndex, !0), n.push(l.outEdges[s].node2);
        }
        return { edge: e.keys(), node: t.keys() };
      }),
      a
    );
  })();
function Au(a, e) {
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
te(we, Au('hostGraph', 'data'));
te(_u, Au('hostGraph', 'edgeData'));
const Pm = Im;
function Du(a, e, t, r, n) {
  for (var i = new Pm(r), o = 0; o < a.length; o++) i.addNode(Ot(a[o].id, a[o].name, o), o);
  for (var s = [], l = [], u = 0, o = 0; o < e.length; o++) {
    var h = e[o],
      v = h.source,
      c = h.target;
    i.addEdge(v, c, u) && (l.push(h), s.push(Ot(ie(h.id, null), v + ' > ' + c)), u++);
  }
  var f = t.get('coordinateSystem'),
    d;
  if (f === 'cartesian2d' || f === 'polar') d = Oe(a, t);
  else {
    var p = Ll.get(f),
      g = p ? p.dimensions || [] : [];
    Lt(g, 'value') < 0 && g.concat(['value']);
    var y = qn(a, { coordDimensions: g, encodeDefine: t.getEncode() }).dimensions;
    (d = new It(y, t)), d.initData(a);
  }
  var m = new It(['value'], t);
  return (
    m.initData(l, s),
    n && n(d, m),
    lu({
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
var Em = (function (a) {
  R(e, a);
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
      (this.legendVisualProvider = new cr(n, n)),
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
        Sm(this);
        var s = Du(i, n, this, !0, l);
        return (
          I(
            s.edges,
            function (u) {
              xm(u.node1, u.node2, this, u.dataIndex);
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
        var v = jt.prototype.getModel;
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
          Vt('nameValue', { name: h.join(' > '), value: o.value, noValue: o.value == null })
        );
      }
      var v = Sv({ series: this, dataIndex: t, multipleSeries: r });
      return v;
    }),
    (e.prototype._updateCategoriesData = function () {
      var t = O(this.option.categories || [], function (n) {
          return n.value != null ? n : W({ value: 0 }, n);
        }),
        r = new It(['value'], this);
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
const km = Em;
var Rm = { type: 'graphRoam', event: 'graphRoam', update: 'none' };
function Nm(a) {
  a.registerChartView(Lm),
    a.registerSeriesModel(km),
    a.registerProcessor(dm),
    a.registerVisual(pm),
    a.registerVisual(gm),
    a.registerLayout(bm),
    a.registerLayout(a.PRIORITY.VISUAL.POST_CHART_LAYOUT, _m),
    a.registerLayout(Dm),
    a.registerCoordinateSystem('graphView', { dimensions: Xn.dimensions, create: Mm }),
    a.registerAction(
      {
        type: 'focusNodeAdjacency',
        event: 'focusNodeAdjacency',
        update: 'series:focusNodeAdjacency',
      },
      Be,
    ),
    a.registerAction(
      {
        type: 'unfocusNodeAdjacency',
        event: 'unfocusNodeAdjacency',
        update: 'series:unfocusNodeAdjacency',
      },
      Be,
    ),
    a.registerAction(Rm, function (e, t, r) {
      t.eachComponent({ mainType: 'series', query: e }, function (n) {
        var i = n.coordinateSystem,
          o = Al(i, e, void 0, r);
        n.setCenter && n.setCenter(o.center), n.setZoom && n.setZoom(o.zoom);
      });
    });
}
var Vm = (function () {
    function a() {
      (this.angle = 0), (this.width = 10), (this.r = 10), (this.x = 0), (this.y = 0);
    }
    return a;
  })(),
  zm = (function (a) {
    R(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return (r.type = 'pointer'), r;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new Vm();
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
  })(Bt);
const Bm = zm;
function Gm(a, e) {
  var t = a.get('center'),
    r = e.getWidth(),
    n = e.getHeight(),
    i = Math.min(r, n),
    o = B(t[0], e.getWidth()),
    s = B(t[1], e.getHeight()),
    l = B(a.get('radius'), i / 2);
  return { cx: o, cy: s, r: l };
}
function Ea(a, e) {
  var t = a == null ? '' : a + '';
  return e && (at(e) ? (t = e.replace('{value}', t)) : st(e) && (t = e(a))), t;
}
var Om = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, r, n) {
      this.group.removeAll();
      var i = t.get(['axisLine', 'lineStyle', 'color']),
        o = Gm(t, n);
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
      xv(y, !l), (u = y[0]), (h = y[1]);
      for (var m = h - u, S = u, x = [], b = 0; d && b < i.length; b++) {
        var w = Math.min(Math.max(i[b][0], 0), 1);
        h = u + m * w;
        var _ = new f({
          shape: {
            startAngle: S,
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
          x.push(_),
          (S = h);
      }
      x.reverse(),
        I(x, function (M) {
          return s.add(M);
        });
      var A = function (M) {
        if (M <= 0) return i[0][1];
        var D;
        for (D = 0; D < i.length; D++)
          if (i[D][0] >= M && (D === 0 ? 0 : i[D - 1][0]) < M) return i[D][1];
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
          S = t.getModel('axisLabel'),
          x = t.get('splitNumber'),
          b = m.get('splitNumber'),
          w = B(y.get('length'), d),
          _ = B(m.get('length'), d),
          A = s,
          M = (l - s) / x,
          D = M / b,
          T = y.getModel('lineStyle').getLineStyle(),
          L = m.getModel('lineStyle').getLineStyle(),
          P = y.get('distance'),
          C,
          E,
          k = 0;
        k <= x;
        k++
      ) {
        if (((C = Math.cos(A)), (E = Math.sin(A)), y.get('show'))) {
          var N = P ? P + h : h,
            V = new Kt({
              shape: {
                x1: C * (d - N) + c,
                y1: E * (d - N) + f,
                x2: C * (d - w - N) + c,
                y2: E * (d - w - N) + f,
              },
              style: T,
              silent: !0,
            });
          T.stroke === 'auto' && V.setStyle({ stroke: i(k / x) }), v.add(V);
        }
        if (S.get('show')) {
          var N = S.get('distance') + P,
            G = Ea($n((k / x) * (g - p) + p), S.get('formatter')),
            $ = i(k / x),
            H = C * (d - w - N) + c,
            K = E * (d - w - N) + f,
            J = S.get('rotate'),
            X = 0;
          J === 'radial'
            ? ((X = -A + 2 * Math.PI), X > Math.PI / 2 && (X += Math.PI))
            : J === 'tangential'
            ? (X = -A - Math.PI / 2)
            : Ft(J) && (X = (J * Math.PI) / 180),
            X === 0
              ? v.add(
                  new gt({
                    style: yt(
                      S,
                      {
                        text: G,
                        x: H,
                        y: K,
                        verticalAlign: E < -0.8 ? 'top' : E > 0.8 ? 'bottom' : 'middle',
                        align: C < -0.4 ? 'left' : C > 0.4 ? 'right' : 'center',
                      },
                      { inheritColor: $ },
                    ),
                    silent: !0,
                  }),
                )
              : v.add(
                  new gt({
                    style: yt(
                      S,
                      { text: G, x: H, y: K, verticalAlign: 'middle', align: 'center' },
                      { inheritColor: $ },
                    ),
                    silent: !0,
                    originX: H,
                    originY: K,
                    rotation: X,
                  }),
                );
        }
        if (m.get('show') && k !== x) {
          var N = m.get('distance');
          N = N ? N + h : h;
          for (var et = 0; et <= b; et++) {
            (C = Math.cos(A)), (E = Math.sin(A));
            var xt = new Kt({
              shape: {
                x1: C * (d - N) + c,
                y1: E * (d - N) + f,
                x2: C * (d - _ - N) + c,
                y2: E * (d - _ - N) + f,
              },
              silent: !0,
              style: L,
            });
            L.stroke === 'auto' && xt.setStyle({ stroke: i((k + et / b) / x) }),
              v.add(xt),
              (A += D);
          }
          A -= D;
        } else A += M;
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
        S = m.mapDimension('value'),
        x = +t.get('min'),
        b = +t.get('max'),
        w = [x, b],
        _ = [s, l];
      function A(D, T) {
        var L = m.getItemModel(D),
          P = L.getModel('pointer'),
          C = B(P.get('width'), o.r),
          E = B(P.get('length'), o.r),
          k = t.get(['pointer', 'icon']),
          N = P.get('offsetCenter'),
          V = B(N[0], o.r),
          G = B(N[1], o.r),
          $ = P.get('keepAspect'),
          H;
        return (
          k
            ? (H = $t(k, V - C / 2, G - E, C, E, null, $))
            : (H = new Bm({ shape: { angle: -Math.PI / 2, width: C, r: E, x: V, y: G } })),
          (H.rotation = -(T + Math.PI / 2)),
          (H.x = o.cx),
          (H.y = o.cy),
          H
        );
      }
      function M(D, T) {
        var L = g.get('roundCap'),
          P = L ? Oi : ra,
          C = g.get('overlap'),
          E = C ? g.get('width') : h / m.count(),
          k = C ? o.r - E : o.r - (D + 1) * E,
          N = C ? o.r : o.r - D * E,
          V = new P({
            shape: { startAngle: s, endAngle: T, cx: o.cx, cy: o.cy, clockwise: u, r0: k, r: N },
          });
        return C && (V.z2 = b - (m.get(S, D) % b)), V;
      }
      (y || p) &&
        (m
          .diff(c)
          .add(function (D) {
            var T = m.get(S, D);
            if (p) {
              var L = A(D, s);
              Ht(L, { rotation: -((isNaN(+T) ? _[0] : vt(T, w, _, !0)) + Math.PI / 2) }, t),
                v.add(L),
                m.setItemGraphicEl(D, L);
            }
            if (y) {
              var P = M(D, s),
                C = g.get('clip');
              Ht(P, { shape: { endAngle: vt(T, w, _, C) } }, t),
                v.add(P),
                Gi(t.seriesIndex, m.dataType, D, P),
                (d[D] = P);
            }
          })
          .update(function (D, T) {
            var L = m.get(S, D);
            if (p) {
              var P = c.getItemGraphicEl(T),
                C = P ? P.rotation : s,
                E = A(D, C);
              (E.rotation = C),
                ht(E, { rotation: -((isNaN(+L) ? _[0] : vt(L, w, _, !0)) + Math.PI / 2) }, t),
                v.add(E),
                m.setItemGraphicEl(D, E);
            }
            if (y) {
              var k = f[T],
                N = k ? k.shape.endAngle : s,
                V = M(D, N),
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
            C = L.get('blurScope'),
            E = L.get('disabled');
          if (p) {
            var k = m.getItemGraphicEl(D),
              N = m.getItemVisual(D, 'style'),
              V = N.fill;
            if (k instanceof ye) {
              var G = k.style;
              k.useStyle(
                W({ image: G.image, x: G.x, y: G.y, width: G.width, height: G.height }, N),
              );
            } else k.useStyle(N), k.type !== 'pointer' && k.setColor(V);
            k.setStyle(T.getModel(['pointer', 'itemStyle']).getItemStyle()),
              k.style.fill === 'auto' && k.setStyle('fill', i(vt(m.get(S, D), w, [0, 1], !0))),
              (k.z2EmphasisLift = 0),
              Et(k, T),
              ft(k, P, C, E);
          }
          if (y) {
            var $ = d[D];
            $.useStyle(m.getItemVisual(D, 'style')),
              $.setStyle(T.getModel(['progress', 'itemStyle']).getItemStyle()),
              ($.z2EmphasisLift = 0),
              Et($, T),
              ft($, P, C, E);
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
          h = $t(s, r.cx - o / 2 + B(l[0], r.r), r.cy - o / 2 + B(l[1], r.r), o, o, null, u);
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
        c = new j(),
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
            S = l.get(u, y),
            x = new j(),
            b = i(vt(S, [h, v], [0, 1], !0)),
            w = m.getModel('title');
          if (w.get('show')) {
            var _ = w.get('offsetCenter'),
              A = o.cx + B(_[0], o.r),
              M = o.cy + B(_[1], o.r),
              D = f[y];
            D.attr({
              z2: g ? 0 : 2,
              style: yt(
                w,
                { x: A, y: M, text: l.getName(y), align: 'center', verticalAlign: 'middle' },
                { inheritColor: b },
              ),
            }),
              x.add(D);
          }
          var T = m.getModel('detail');
          if (T.get('show')) {
            var L = T.get('offsetCenter'),
              P = o.cx + B(L[0], o.r),
              C = o.cy + B(L[1], o.r),
              E = B(T.get('width'), o.r),
              k = B(T.get('height'), o.r),
              N = t.get(['progress', 'show']) ? l.getItemVisual(y, 'style').fill : b,
              D = d[y],
              V = T.get('formatter');
            D.attr({
              z2: g ? 0 : 2,
              style: yt(
                T,
                {
                  x: P,
                  y: C,
                  text: Ea(S, V),
                  width: isNaN(E) ? null : E,
                  height: isNaN(k) ? null : k,
                  align: 'center',
                  verticalAlign: 'middle',
                },
                { inheritColor: N },
              ),
            }),
              bv(D, { normal: T }, S, function ($) {
                return Ea($, V);
              }),
              p &&
                wv(D, y, l, t, {
                  getFormattedLabel: function ($, H, K, J, X, et) {
                    return Ea(et ? et.interpolatedValue : S, V);
                  },
                }),
              x.add(D);
          }
          c.add(x);
        }),
        this.group.add(c),
        (this._titleEls = f),
        (this._detailEls = d);
    }),
    (e.type = 'gauge'),
    e
  );
})(dt);
const Wm = Om;
var Fm = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.visualStyleAccessPath = 'itemStyle'), t;
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      return fr(this, ['value']);
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
const $m = Fm;
function Hm(a) {
  a.registerChartView(Wm), a.registerSeriesModel($m);
}
var Zm = ['itemStyle', 'opacity'],
  Um = (function (a) {
    R(e, a);
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
          h = s.get(Zm);
        (h = h == null ? 1 : h),
          n || fe(i),
          i.useStyle(t.getItemVisual(r, 'style')),
          (i.style.lineJoin = 'round'),
          n
            ? (i.setShape({ points: l.points }),
              (i.style.opacity = 0),
              Ht(i, { style: { opacity: h } }, o, r))
            : ht(i, { style: { opacity: h }, shape: { points: l.points } }, o, r),
          Et(i, s),
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
        Qt(
          o,
          zt(l),
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
          (n.textGuideLineConfig = { anchor: f ? new gl(f[0][0], f[0][1]) : null }),
          ht(o, { style: { x: h.x, y: h.y } }, s, r),
          o.attr({ rotation: h.rotation, originX: h.x, originY: h.y, z2: 10 }),
          _v(n, Av(l), { stroke: c });
      }),
      e
    );
  })(Ce),
  Ym = (function (a) {
    R(e, a);
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
            var u = new Um(i, l);
            i.setItemGraphicEl(l, u), s.add(u);
          })
          .update(function (l, u) {
            var h = o.getItemGraphicEl(u);
            h.updateData(i, l), s.add(h), i.setItemGraphicEl(l, h);
          })
          .remove(function (l) {
            var u = o.getItemGraphicEl(l);
            Dv(u, t, l);
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
const Xm = Ym;
var qm = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function (t) {
      a.prototype.init.apply(this, arguments),
        (this.legendVisualProvider = new cr(U(this.getData, this), U(this.getRawData, this))),
        this._defaultLabelLine(t);
    }),
    (e.prototype.getInitialData = function (t, r) {
      return fr(this, { coordDimensions: ['value'], encodeDefaulter: it(Tv, this) });
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
const Km = qm;
function jm(a, e) {
  return re(a.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
}
function Jm(a, e) {
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
function Qm(a) {
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
        S = s.get('length');
      o === 'left'
        ? ((p = (u[3][0] + u[0][0]) / 2),
          (g = (u[3][1] + u[0][1]) / 2),
          (y = p - S),
          (c = y - 5),
          (v = 'right'))
        : o === 'right'
        ? ((p = (u[1][0] + u[2][0]) / 2),
          (g = (u[1][1] + u[2][1]) / 2),
          (y = p + S),
          (c = y + 5),
          (v = 'left'))
        : o === 'top'
        ? ((p = (u[3][0] + u[0][0]) / 2),
          (g = (u[3][1] + u[0][1]) / 2),
          (m = g - S),
          (f = m - 5),
          (v = 'center'))
        : o === 'bottom'
        ? ((p = (u[1][0] + u[2][0]) / 2),
          (g = (u[1][1] + u[2][1]) / 2),
          (m = g + S),
          (f = m + 5),
          (v = 'center'))
        : o === 'rightTop'
        ? ((p = t === 'horizontal' ? u[3][0] : u[1][0]),
          (g = t === 'horizontal' ? u[3][1] : u[1][1]),
          t === 'horizontal'
            ? ((m = g - S), (f = m - 5), (v = 'center'))
            : ((y = p + S), (c = y + 5), (v = 'top')))
        : o === 'rightBottom'
        ? ((p = u[2][0]),
          (g = u[2][1]),
          t === 'horizontal'
            ? ((m = g + S), (f = m + 5), (v = 'center'))
            : ((y = p + S), (c = y + 5), (v = 'bottom')))
        : o === 'leftTop'
        ? ((p = u[0][0]),
          (g = t === 'horizontal' ? u[0][1] : u[1][1]),
          t === 'horizontal'
            ? ((m = g - S), (f = m - 5), (v = 'center'))
            : ((y = p - S), (c = y - 5), (v = 'right')))
        : o === 'leftBottom'
        ? ((p = t === 'horizontal' ? u[1][0] : u[3][0]),
          (g = t === 'horizontal' ? u[1][1] : u[2][1]),
          t === 'horizontal'
            ? ((m = g + S), (f = m + 5), (v = 'center'))
            : ((y = p - S), (c = y - 5), (v = 'right')))
        : ((p = (u[1][0] + u[2][0]) / 2),
          (g = (u[1][1] + u[2][1]) / 2),
          t === 'horizontal'
            ? ((m = g + S), (f = m + 5), (v = 'center'))
            : ((y = p + S), (c = y + 5), (v = 'left'))),
        t === 'horizontal' ? ((y = p), (c = y)) : ((m = g), (f = m)),
        (d = [
          [p, g],
          [y, m],
        ]);
    }
    l.label = { linePoints: d, x: c, y: f, verticalAlign: 'middle', textAlign: v, inside: h };
  });
}
function t0(a, e) {
  a.eachSeriesByType('funnel', function (t) {
    var r = t.getData(),
      n = r.mapDimension('value'),
      i = t.get('sort'),
      o = jm(t, e),
      s = t.get('orient'),
      l = o.width,
      u = o.height,
      h = Jm(r, i),
      v = o.x,
      c = o.y,
      f =
        s === 'horizontal'
          ? [B(t.get('minSize'), u), B(t.get('maxSize'), u)]
          : [B(t.get('minSize'), l), B(t.get('maxSize'), l)],
      d = r.getDataExtent(n),
      p = t.get('min'),
      g = t.get('max');
    p == null && (p = Math.min(d[0], 0)), g == null && (g = d[1]);
    var y = t.get('funnelAlign'),
      m = t.get('gap'),
      S = s === 'horizontal' ? l : u,
      x = (S - m * (r.count() - 1)) / r.count(),
      b = function (C, E) {
        if (s === 'horizontal') {
          var k = r.get(n, C) || 0,
            N = vt(k, [p, g], f, !0),
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
        var G = r.get(n, C) || 0,
          $ = vt(G, [p, g], f, !0),
          H;
        switch (y) {
          case 'left':
            H = v;
            break;
          case 'center':
            H = v + (l - $) / 2;
            break;
          case 'right':
            H = v + l - $;
            break;
        }
        return [
          [H, E],
          [H + $, E],
        ];
      };
    i === 'ascending' &&
      ((x = -x), (m = -m), s === 'horizontal' ? (v += l) : (c += u), (h = h.reverse()));
    for (var w = 0; w < h.length; w++) {
      var _ = h[w],
        A = h[w + 1],
        M = r.getItemModel(_);
      if (s === 'horizontal') {
        var D = M.get(['itemStyle', 'width']);
        D == null ? (D = x) : ((D = B(D, l)), i === 'ascending' && (D = -D));
        var T = b(_, v),
          L = b(A, v + D);
        (v += D + m), r.setItemLayout(_, { points: T.concat(L.slice().reverse()) });
      } else {
        var P = M.get(['itemStyle', 'height']);
        P == null ? (P = x) : ((P = B(P, u)), i === 'ascending' && (P = -P));
        var T = b(_, c),
          L = b(A, c + P);
        (c += P + m), r.setItemLayout(_, { points: T.concat(L.slice().reverse()) });
      }
    }
    Qm(r);
  });
}
function e0(a) {
  a.registerChartView(Xm),
    a.registerSeriesModel(Km),
    a.registerLayout(t0),
    a.registerProcessor(dr('funnel'));
}
var a0 = 0.3,
  r0 = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), (t._dataGroup = new j()), (t._initialized = !1), t;
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
          v = fs(t);
        s.diff(l).add(c).update(f).remove(d).execute();
        function c(g) {
          var y = cs(s, o, g, h, u);
          Jr(y, s, g, v);
        }
        function f(g, y) {
          var m = l.getItemGraphicEl(y),
            S = Tu(s, g, h, u);
          s.setItemGraphicEl(g, m), ht(m, { shape: { points: S } }, t, g), fe(m), Jr(m, s, g, v);
        }
        function d(g) {
          var y = l.getItemGraphicEl(g);
          o.remove(y);
        }
        if (!this._initialized) {
          this._initialized = !0;
          var p = n0(u, t, function () {
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
            l = fs(r),
            u = (this._progressiveEls = []),
            h = t.start;
          h < t.end;
          h++
        ) {
          var v = cs(i, this._dataGroup, h, s, o);
          (v.incremental = !0), Jr(v, i, h, l), u.push(v);
        }
      }),
      (e.prototype.remove = function () {
        this._dataGroup && this._dataGroup.removeAll(), (this._data = null);
      }),
      (e.type = 'parallel'),
      e
    );
  })(dt);
function n0(a, e, t) {
  var r = a.model,
    n = a.getRect(),
    i = new Mt({ shape: { x: n.x, y: n.y, width: n.width, height: n.height } }),
    o = r.get('layout') === 'horizontal' ? 'width' : 'height';
  return i.setShape(o, 0), Ht(i, { shape: { width: n.width, height: n.height } }, e, t), i;
}
function Tu(a, e, t, r) {
  for (var n = [], i = 0; i < t.length; i++) {
    var o = t[i],
      s = a.get(a.mapDimension(o), e);
    i0(s, r.getAxis(o).type) || n.push(r.dataToPoint(s, o));
  }
  return n;
}
function cs(a, e, t, r, n) {
  var i = Tu(a, t, r, n),
    o = new Ie({ shape: { points: i }, z2: 10 });
  return e.add(o), a.setItemGraphicEl(t, o), o;
}
function fs(a) {
  var e = a.get('smooth', !0);
  return e === !0 && (e = a0), (e = Mv(e)), Cv(e) && (e = 0), { smooth: e };
}
function Jr(a, e, t, r) {
  a.useStyle(e.getItemVisual(t, 'style')), (a.style.fill = null), a.setShape('smooth', r.smooth);
  var n = e.getItemModel(t),
    i = n.getModel('emphasis');
  Et(a, n, 'lineStyle'), ft(a, i.get('focus'), i.get('blurScope'), i.get('disabled'));
}
function i0(a, e) {
  return e === 'category' ? a == null : a == null || isNaN(a);
}
const o0 = r0;
var s0 = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (
      (t.type = e.type), (t.visualStyleAccessPath = 'lineStyle'), (t.visualDrawType = 'stroke'), t
    );
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      return Oe(null, this, { useEncodeDefaulter: U(l0, null, this) });
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
function l0(a) {
  var e = a.ecModel.getComponent('parallel', a.get('parallelIndex'));
  if (e) {
    var t = {};
    return (
      I(e.dimensions, function (r) {
        var n = u0(r);
        t[r] = n;
      }),
      t
    );
  }
}
function u0(a) {
  return +a.replace('dim', '');
}
const h0 = s0;
var v0 = ['lineStyle', 'opacity'],
  c0 = {
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
                var u = i.getItemModel(s).get(v0, !0);
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
const f0 = c0;
function d0(a) {
  Y(Fl),
    a.registerChartView(o0),
    a.registerSeriesModel(h0),
    a.registerVisual(a.PRIORITY.VISUAL.BRUSH, f0);
}
var p0 = (function () {
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
  g0 = (function (a) {
    R(e, a);
    function e(t) {
      return a.call(this, t) || this;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new p0();
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
  })(Bt),
  y0 = (function (a) {
    R(e, a);
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
            var p = new g0(),
              g = ut(p);
            (g.dataIndex = d.dataIndex), (g.seriesIndex = t.seriesIndex), (g.dataType = 'edge');
            var y = d.getModel(),
              m = y.getModel('lineStyle'),
              S = m.get('curveness'),
              x = d.node1.getLayout(),
              b = d.node1.getModel(),
              w = b.get('localX'),
              _ = b.get('localY'),
              A = d.node2.getLayout(),
              M = d.node2.getModel(),
              D = M.get('localX'),
              T = M.get('localY'),
              L = d.getLayout(),
              P,
              C,
              E,
              k,
              N,
              V,
              G,
              $;
            (p.shape.extent = Math.max(1, L.dy)),
              (p.shape.orient = f),
              f === 'vertical'
                ? ((P = (w != null ? w * u : x.x) + L.sy),
                  (C = (_ != null ? _ * h : x.y) + x.dy),
                  (E = (D != null ? D * u : A.x) + L.ty),
                  (k = T != null ? T * h : A.y),
                  (N = P),
                  (V = C * (1 - S) + k * S),
                  (G = E),
                  ($ = C * S + k * (1 - S)))
                : ((P = (w != null ? w * u : x.x) + x.dx),
                  (C = (_ != null ? _ * h : x.y) + L.sy),
                  (E = D != null ? D * u : A.x),
                  (k = (T != null ? T * h : A.y) + L.ty),
                  (N = P * (1 - S) + E * S),
                  (V = C),
                  (G = P * S + E * (1 - S)),
                  ($ = k)),
              p.setShape({ x1: P, y1: C, x2: E, y2: k, cpx1: N, cpy1: V, cpx2: G, cpy2: $ }),
              p.useStyle(m.getItemStyle()),
              ds(p.style, f, d);
            var H = '' + y.get('value'),
              K = zt(y, 'edgeLabel');
            Qt(p, K, {
              labelFetcher: {
                getFormattedLabel: function (et, xt, q, Z, tt, Q) {
                  return t.getFormattedLabel(
                    et,
                    xt,
                    'edge',
                    Z,
                    ma(tt, K.normal && K.normal.get('formatter'), H),
                    Q,
                  );
                },
              },
              labelDataIndex: d.dataIndex,
              defaultText: H,
            }),
              p.setTextConfig({ position: 'inside' });
            var J = y.getModel('emphasis');
            Et(p, y, 'lineStyle', function (et) {
              var xt = et.getItemStyle();
              return ds(xt, f, d), xt;
            }),
              s.add(p),
              c.setItemGraphicEl(d.dataIndex, p);
            var X = J.get('focus');
            ft(
              p,
              X === 'adjacency'
                ? d.getAdjacentDataIndices()
                : X === 'trajectory'
                ? d.getTrajectoryDataIndices()
                : X,
              J.get('blurScope'),
              J.get('disabled'),
            );
          }),
          o.eachNode(function (d) {
            var p = d.getLayout(),
              g = d.getModel(),
              y = g.get('localX'),
              m = g.get('localY'),
              S = g.getModel('emphasis'),
              x = new Mt({
                shape: {
                  x: y != null ? y * u : p.x,
                  y: m != null ? m * h : p.y,
                  width: p.dx,
                  height: p.dy,
                },
                style: g.getModel('itemStyle').getItemStyle(),
                z2: 10,
              });
            Qt(x, zt(g), {
              labelFetcher: {
                getFormattedLabel: function (w, _) {
                  return t.getFormattedLabel(w, _, 'node');
                },
              },
              labelDataIndex: d.dataIndex,
              defaultText: d.id,
            }),
              (x.disableLabelAnimation = !0),
              x.setStyle('fill', d.getVisual('color')),
              x.setStyle('decal', d.getVisual('style').decal),
              Et(x, g),
              s.add(x),
              v.setItemGraphicEl(d.dataIndex, x),
              (ut(x).dataType = 'node');
            var b = S.get('focus');
            ft(
              x,
              b === 'adjacency'
                ? d.getAdjacentDataIndices()
                : b === 'trajectory'
                ? d.getTrajectoryDataIndices()
                : b,
              S.get('blurScope'),
              S.get('disabled'),
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
              m0(s.getBoundingRect(), t, function () {
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
function ds(a, e, t) {
  switch (a.fill) {
    case 'source':
      (a.fill = t.node1.getVisual('color')), (a.decal = t.node1.getVisual('style').decal);
      break;
    case 'target':
      (a.fill = t.node2.getVisual('color')), (a.decal = t.node2.getVisual('style').decal);
      break;
    case 'gradient':
      var r = t.node1.getVisual('color'),
        n = t.node2.getVisual('color');
      at(r) &&
        at(n) &&
        (a.fill = new Lv(0, 0, +(e === 'horizontal'), +(e === 'vertical'), [
          { color: r, offset: 0 },
          { color: n, offset: 1 },
        ]));
  }
}
function m0(a, e, t) {
  var r = new Mt({ shape: { x: a.x - 10, y: a.y - 10, width: 0, height: a.height + 20 } });
  return Ht(r, { shape: { width: a.width + 20 } }, e, t), r;
}
const S0 = y0;
var x0 = (function (a) {
  R(e, a);
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
        o[l].depth != null && o[l].depth >= 0 && (s[o[l].depth] = new jt(o[l], this, r));
      if (i && n) {
        var u = Du(i, n, this, !0, h);
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
                S = p.levelModels[m];
              S && (f.parentModel = S);
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
        return Vt('nameValue', { name: u, value: l, noValue: i(l) });
      } else {
        var h = this.getGraph().getNodeByIndex(t),
          v = h.getLayout().value,
          c = this.getDataParams(t, n).data.name;
        return Vt('nameValue', { name: c != null ? c + '' : null, value: v, noValue: i(v) });
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
const b0 = x0;
function w0(a, e) {
  a.eachSeriesByType('sankey', function (t) {
    var r = t.get('nodeWidth'),
      n = t.get('nodeGap'),
      i = _0(t, e);
    t.layoutInfo = i;
    var o = i.width,
      s = i.height,
      l = t.getGraph(),
      u = l.nodes,
      h = l.edges;
    D0(u);
    var v = Ut(u, function (p) {
        return p.getLayout().value === 0;
      }),
      c = v.length !== 0 ? 0 : t.get('layoutIterations'),
      f = t.get('orient'),
      d = t.get('nodeAlign');
    A0(u, h, r, n, o, s, c, f, d);
  });
}
function _0(a, e) {
  return re(a.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
}
function A0(a, e, t, r, n, i, o, s, l) {
  T0(a, e, t, n, i, s, l), I0(a, e, i, n, r, o, s), G0(a, s);
}
function D0(a) {
  I(a, function (e) {
    var t = ce(e.outEdges, ja),
      r = ce(e.inEdges, ja),
      n = e.getValue() || 0,
      i = Math.max(t, r, n);
    e.setLayout({ value: i }, !0);
  });
}
function T0(a, e, t, r, n, i, o) {
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
        var S = p.outEdges[m],
          x = e.indexOf(S);
        s[x] = 0;
        var b = S.node2,
          w = a.indexOf(b);
        --l[w] === 0 && h.indexOf(b) < 0 && h.push(b);
      }
    }
    ++v, (u = h), (h = []);
  }
  for (var c = 0; c < s.length; c++)
    if (s[c] === 1) throw new Error('Sankey is a DAG, the original data has cycle!');
  var _ = f > v - 1 ? f : v - 1;
  o && o !== 'left' && M0(a, o, i, _);
  var A = i === 'vertical' ? (n - t) / _ : (r - t) / _;
  L0(a, A, i);
}
function Mu(a) {
  var e = a.hostGraph.data.getRawDataItem(a.dataIndex);
  return e.depth != null && e.depth >= 0;
}
function M0(a, e, t, r) {
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
      Mu(v) || v.setLayout({ depth: Math.max(0, r - v.getLayout().skNodeHeight) }, !0);
    });
  } else e === 'justify' && C0(a, r);
}
function C0(a, e) {
  I(a, function (t) {
    !Mu(t) && !t.outEdges.length && t.setLayout({ depth: e }, !0);
  });
}
function L0(a, e, t) {
  I(a, function (r) {
    var n = r.getLayout().depth * e;
    t === 'vertical' ? r.setLayout({ y: n }, !0) : r.setLayout({ x: n }, !0);
  });
}
function I0(a, e, t, r, n, i, o) {
  var s = P0(a, o);
  E0(s, e, t, r, n, o), Qr(s, n, t, r, o);
  for (var l = 1; i > 0; i--)
    (l *= 0.99), k0(s, l, o), Qr(s, n, t, r, o), B0(s, l, o), Qr(s, n, t, r, o);
}
function P0(a, e) {
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
function E0(a, e, t, r, n, i) {
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
function Qr(a, e, t, r, n) {
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
function k0(a, e, t) {
  I(a.slice().reverse(), function (r) {
    I(r, function (n) {
      if (n.outEdges.length) {
        var i = ce(n.outEdges, R0, t) / ce(n.outEdges, ja);
        if (isNaN(i)) {
          var o = n.outEdges.length;
          i = o ? ce(n.outEdges, N0, t) / o : 0;
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
function R0(a, e) {
  return pe(a.node2, e) * a.getValue();
}
function N0(a, e) {
  return pe(a.node2, e);
}
function V0(a, e) {
  return pe(a.node1, e) * a.getValue();
}
function z0(a, e) {
  return pe(a.node1, e);
}
function pe(a, e) {
  return e === 'vertical'
    ? a.getLayout().x + a.getLayout().dx / 2
    : a.getLayout().y + a.getLayout().dy / 2;
}
function ja(a) {
  return a.getValue();
}
function ce(a, e, t) {
  for (var r = 0, n = a.length, i = -1; ++i < n; ) {
    var o = +e(a[i], t);
    isNaN(o) || (r += o);
  }
  return r;
}
function B0(a, e, t) {
  I(a, function (r) {
    I(r, function (n) {
      if (n.inEdges.length) {
        var i = ce(n.inEdges, V0, t) / ce(n.inEdges, ja);
        if (isNaN(i)) {
          var o = n.inEdges.length;
          i = o ? ce(n.inEdges, z0, t) / o : 0;
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
function G0(a, e) {
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
function O0(a) {
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
          var l = new Ml({
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
function W0(a) {
  a.registerChartView(S0),
    a.registerSeriesModel(b0),
    a.registerLayout(w0),
    a.registerVisual(O0),
    a.registerAction({ type: 'dragNode', event: 'dragnode', update: 'update' }, function (e, t) {
      t.eachComponent({ mainType: 'series', subType: 'sankey', query: e }, function (r) {
        r.setNodePosition(e.dataIndex, [e.localX, e.localY]);
      });
    });
}
var Cu = (function () {
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
          I(g, function (x, b) {
            var w;
            F(x)
              ? ((w = x.slice()), x.unshift(b))
              : F(x.value)
              ? ((w = W({}, x)), (w.value = w.value.slice()), x.value.unshift(b))
              : (w = x),
              y.push(w);
          }),
            (e.data = y);
        }
        var m = this.defaultValueDimensions,
          S = [
            {
              name: v,
              type: wn(d),
              ordinalMeta: r,
              otherDims: { tooltip: !1, itemName: 0 },
              dimsDef: ['base'],
            },
            { name: c, type: wn(p), dimsDef: m.slice() },
          ];
        return fr(this, {
          coordDimensions: S,
          dimensionsCount: m.length + 1,
          encodeDefaulter: it(Iv, S, this),
        });
      }),
      (a.prototype.getBaseAxis = function () {
        var e = this._baseAxisDim;
        return this.ecModel.getComponent(e + 'Axis', this.get(e + 'AxisIndex')).axis;
      }),
      a
    );
  })(),
  Lu = (function (a) {
    R(e, a);
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
te(Lu, Cu, !0);
const F0 = Lu;
var $0 = (function (a) {
    R(e, a);
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
                v = ps(h, i, u, l, !0);
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
            v ? (fe(v), Iu(c, v, i, u)) : (v = ps(c, i, u, l)), o.add(v), i.setItemGraphicEl(u, v);
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
  H0 = (function () {
    function a() {}
    return a;
  })(),
  Z0 = (function (a) {
    R(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return (r.type = 'boxplotBoxPath'), r;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new H0();
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
  })(Bt);
function ps(a, e, t, r, n) {
  var i = a.ends,
    o = new Z0({ shape: { points: n ? U0(i, r, a) : i } });
  return Iu(a, o, e, t, n), o;
}
function Iu(a, e, t, r, n) {
  var i = t.hostModel,
    o = vr[n ? 'initProps' : 'updateProps'];
  o(e, { shape: { points: a.ends } }, i, r),
    e.useStyle(t.getItemVisual(r, 'style')),
    (e.style.strokeNoScale = !0),
    (e.z2 = 100);
  var s = t.getItemModel(r),
    l = s.getModel('emphasis');
  Et(e, s), ft(e, l.get('focus'), l.get('blurScope'), l.get('disabled'));
}
function U0(a, e, t) {
  return O(a, function (r) {
    return (r = r.slice()), (r[e] = t.initBaseline), r;
  });
}
const Y0 = $0;
var Qe = I;
function X0(a) {
  var e = q0(a);
  Qe(e, function (t) {
    var r = t.seriesModels;
    r.length &&
      (K0(t),
      Qe(r, function (n, i) {
        j0(n, t.boxOffsetList[i], t.boxWidthList[i]);
      }));
  });
}
function q0(a) {
  var e = [],
    t = [];
  return (
    a.eachSeriesByType('boxplot', function (r) {
      var n = r.getBaseAxis(),
        i = Lt(t, n);
      i < 0 && ((i = t.length), (t[i] = n), (e[i] = { axis: n, seriesModels: [] })),
        e[i].seriesModels.push(r);
    }),
    e
  );
}
function K0(a) {
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
    Qe(t, function (d) {
      l = Math.max(l, d.getData().count());
    });
    var u = e.getExtent();
    s = Math.abs(u[1] - u[0]) / l;
  }
  Qe(t, function (d) {
    var p = d.get('boxWidth');
    F(p) || (p = [p, p]), o.push([B(p[0], s) || 0, B(p[1], s) || 0]);
  });
  var h = s * 0.8 - 2,
    v = (h / r) * 0.3,
    c = (h - v * (r - 1)) / r,
    f = c / 2 - h / 2;
  Qe(t, function (d, p) {
    i.push(f), (f += v + c), n.push(Math.min(Math.max(c, o[p][0]), o[p][1]));
  });
}
function j0(a, e, t) {
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
      f = S(c, h[2], v),
      d = S(c, h[0], v),
      p = S(c, h[1], v),
      g = S(c, h[3], v),
      y = S(c, h[4], v),
      m = [];
    x(m, p, !1),
      x(m, g, !0),
      m.push(d, p, y, g),
      b(m, d),
      b(m, y),
      b(m, f),
      n.setItemLayout(v, { initBaseline: f[s], ends: m });
  }
  function S(w, _, A) {
    var M = n.get(_, A),
      D = [];
    (D[o] = w), (D[s] = M);
    var T;
    return isNaN(w) || isNaN(M) ? (T = [NaN, NaN]) : ((T = r.dataToPoint(D)), (T[o] += e)), T;
  }
  function x(w, _, A) {
    var M = _.slice(),
      D = _.slice();
    (M[o] += i), (D[o] -= i), A ? w.push(M, D) : w.push(D, M);
  }
  function b(w, _) {
    var A = _.slice(),
      M = _.slice();
    (A[o] -= i), (M[o] += i), w.push(A, M);
  }
}
function J0(a, e) {
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
      y = st(g) ? g({ value: o }) : at(g) ? g.replace('{value}', o + '') : o + '';
    t.push([y, d, l, u, h, p]);
    for (var m = 0; m < s.length; m++) {
      var S = s[m];
      if (S < d || S > p) {
        var x = [y, S];
        r.push(x);
      }
    }
  }
  return { boxData: t, outliers: r };
}
var Q0 = {
  type: 'echarts:boxplot',
  transform: function (e) {
    var t = e.upstream;
    if (t.sourceFormat !== ml) {
      var r = '';
      lt(r);
    }
    var n = J0(t.getRawData(), e.config);
    return [
      { dimensions: ['ItemName', 'Low', 'Q1', 'Q2', 'Q3', 'High'], data: n.boxData },
      { data: n.outliers },
    ];
  },
};
function t1(a) {
  a.registerSeriesModel(F0), a.registerChartView(Y0), a.registerLayout(X0), a.registerTransform(Q0);
}
var e1 = ['color', 'borderColor'],
  a1 = (function (a) {
    R(e, a);
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
        sr(this._progressiveEls || this.group, t);
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
                if (s && gs(u, v)) return;
                var c = tn(v, h, !0);
                Ht(c, { shape: { points: v.ends } }, t, h),
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
              if (s && gs(u, f)) {
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
        this._clear(), ys(t, this.group);
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
        ys(r, this.group, this._progressiveEls, !0);
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
  r1 = (function () {
    function a() {}
    return a;
  })(),
  n1 = (function (a) {
    R(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return (r.type = 'normalCandlestickBox'), r;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new r1();
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
  })(Bt);
function tn(a, e, t) {
  var r = a.ends;
  return new n1({ shape: { points: t ? i1(r, a) : r }, z2: 100 });
}
function gs(a, e) {
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
    Et(a, n);
}
function i1(a, e) {
  return O(a, function (t) {
    return (t = t.slice()), (t[1] = e.initBaseline), t;
  });
}
var o1 = (function () {
    function a() {}
    return a;
  })(),
  an = (function (a) {
    R(e, a);
    function e(t) {
      var r = a.call(this, t) || this;
      return (r.type = 'largeCandlestickBox'), r;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new o1();
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
  })(Bt);
function ys(a, e, t, r) {
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
  var i = t.getModel('itemStyle').getItemStyle(e1);
  e.useStyle(i), (e.style.fill = null), (e.style.stroke = n);
}
const s1 = a1;
var Pu = (function (a) {
  R(e, a);
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
te(Pu, Cu, !0);
const l1 = Pu;
function u1(a) {
  !a ||
    !F(a.series) ||
    I(a.series, function (e) {
      Le(e) && e.type === 'k' && (e.type = 'candlestick');
    });
}
var h1 = ['itemStyle', 'borderColor'],
  v1 = ['itemStyle', 'borderColor0'],
  c1 = ['itemStyle', 'borderColorDoji'],
  f1 = ['itemStyle', 'color'],
  d1 = ['itemStyle', 'color0'],
  p1 = {
    seriesType: 'candlestick',
    plan: jn(),
    performRawSeries: !0,
    reset: function (a, e) {
      function t(i, o) {
        return o.get(i > 0 ? f1 : d1);
      }
      function r(i, o) {
        return o.get(i === 0 ? c1 : i > 0 ? h1 : v1);
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
const g1 = p1;
var y1 = {
  seriesType: 'candlestick',
  plan: jn(),
  reset: function (a) {
    var e = a.coordinateSystem,
      t = a.getData(),
      r = m1(a, t),
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
        var S = m.get(s, y),
          x = m.get(u, y),
          b = m.get(h, y),
          w = m.get(v, y),
          _ = m.get(c, y),
          A = Math.min(x, b),
          M = Math.max(x, b),
          D = N(A, S),
          T = N(M, S),
          L = N(w, S),
          P = N(_, S),
          C = [];
        V(C, T, 0), V(C, D, 1), C.push($(P), $(T), $(L), $(D));
        var E = g.getItemModel(y),
          k = !!E.get(['itemStyle', 'borderColorDoji']);
        g.setItemLayout(y, {
          sign: ms(m, y, x, b, h, k),
          initBaseline: x > b ? T[i] : D[i],
          ends: C,
          brushRect: G(w, _, S),
        });
      }
      function N(H, K) {
        var J = [];
        return (J[n] = K), (J[i] = H), isNaN(K) || isNaN(H) ? [NaN, NaN] : e.dataToPoint(J);
      }
      function V(H, K, J) {
        var X = K.slice(),
          et = K.slice();
        (X[n] = _r(X[n] + r / 2, 1, !1)),
          (et[n] = _r(et[n] - r / 2, 1, !0)),
          J ? H.push(X, et) : H.push(et, X);
      }
      function G(H, K, J) {
        var X = N(H, J),
          et = N(K, J);
        return (
          (X[n] -= r / 2), (et[n] -= r / 2), { x: X[0], y: X[1], width: r, height: et[1] - X[1] }
        );
      }
      function $(H) {
        return (H[n] = _r(H[n], 1)), H;
      }
    }
    function d(p, g) {
      for (
        var y = Pv(p.count * 4),
          m = 0,
          S,
          x = [],
          b = [],
          w,
          _ = g.getStore(),
          A = !!a.get(['itemStyle', 'borderColorDoji']);
        (w = p.next()) != null;

      ) {
        var M = _.get(s, w),
          D = _.get(u, w),
          T = _.get(h, w),
          L = _.get(v, w),
          P = _.get(c, w);
        if (isNaN(M) || isNaN(L) || isNaN(P)) {
          (y[m++] = NaN), (m += 3);
          continue;
        }
        (y[m++] = ms(_, w, D, T, h, A)),
          (x[n] = M),
          (x[i] = L),
          (S = e.dataToPoint(x, null, b)),
          (y[m++] = S ? S[0] : NaN),
          (y[m++] = S ? S[1] : NaN),
          (x[i] = P),
          (S = e.dataToPoint(x, null, b)),
          (y[m++] = S ? S[1] : NaN);
      }
      g.setLayout('largePoints', y);
    }
  },
};
function ms(a, e, t, r, n, i) {
  var o;
  return (
    t > r ? (o = -1) : t < r ? (o = 1) : (o = i ? 0 : e > 0 ? (a.get(n, e - 1) <= r ? 1 : -1) : 1),
    o
  );
}
function m1(a, e) {
  var t = a.getBaseAxis(),
    r,
    n =
      t.type === 'category'
        ? t.getBandWidth()
        : ((r = t.getExtent()), Math.abs(r[1] - r[0]) / e.count()),
    i = B(Tt(a.get('barMaxWidth'), n), n),
    o = B(Tt(a.get('barMinWidth'), 1), n),
    s = a.get('barWidth');
  return s != null ? B(s, n) : Math.max(Math.min(n / 2, i), o);
}
const S1 = y1;
function x1(a) {
  a.registerChartView(s1),
    a.registerSeriesModel(l1),
    a.registerPreprocessor(u1),
    a.registerVisual(g1),
    a.registerLayout(S1);
}
function Ss(a, e) {
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
var b1 = (function (a) {
  R(e, a);
  function e(t, r) {
    var n = a.call(this) || this,
      i = new _l(t, r),
      o = new j();
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
        var l = $t(r, -1, -1, 2, 2, n);
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
      Ss(o, t);
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
      Ss(n, t);
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
        u = pa(t.getItemVisual(r, 'symbolSize')),
        h = t.getItemVisual(r, 'style'),
        v = h && h.fill,
        c = s.getModel('emphasis');
      o.setScale(u),
        o.traverse(function (g) {
          g.setStyle('fill', v);
        });
      var f = ga(t.getItemVisual(r, 'symbolOffset'), u);
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
})(j);
const w1 = b1;
var _1 = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function () {
      this._symbolDraw = new or(w1);
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
      var o = hr('').reset(t, r, n);
      o.progress && o.progress({ start: 0, end: i.count(), count: i.count() }, i),
        this._symbolDraw.updateLayout();
    }),
    (e.prototype._updateGroupTransform = function (t) {
      var r = t.coordinateSystem;
      r &&
        r.getRoamTransform &&
        ((this.group.transform = Ev(r.getRoamTransform())), this.group.decomposeTransform());
    }),
    (e.prototype.remove = function (t, r) {
      this._symbolDraw && this._symbolDraw.remove(!0);
    }),
    (e.type = 'effectScatter'),
    e
  );
})(dt);
const A1 = _1;
var D1 = (function (a) {
  R(e, a);
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
const T1 = D1;
function M1(a) {
  a.registerChartView(A1), a.registerSeriesModel(T1), a.registerLayout(hr('effectScatter'));
}
var C1 = (function (a) {
  R(e, a);
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
      F(o) || (o = [o, o]);
      var l = t.getItemVisual(r, 'style'),
        u = i.get('color') || (l && l.stroke),
        h = this.childAt(1);
      this._symbolType !== s &&
        (this.remove(h),
        (h = $t(s, -0.5, -0.5, 1, 1, u)),
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
          v = Ot(r.get('delay'), function (f) {
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
        u = Cl,
        h = kv;
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
})(j);
const Eu = C1;
var L1 = (function (a) {
  R(e, a);
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
})(j);
const ku = L1;
var I1 = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t._lastFrame = 0), (t._lastFramePercent = 0), t;
  }
  return (
    (e.prototype.createLine = function (t, r, n) {
      return new ku(t, r, n);
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
})(Eu);
const P1 = I1;
var E1 = (function () {
    function a() {
      (this.polyline = !1), (this.curveness = 0), (this.segs = []);
    }
    return a;
  })(),
  k1 = (function (a) {
    R(e, a);
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
        return new E1();
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
              if (Rv(v, c, g, y, d, p, s, t, r)) return l;
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
          t = this._rect = new Jt(i, o, s, l);
        }
        return t;
      }),
      e
    );
  })(Bt),
  R1 = (function () {
    function a() {
      this.group = new j();
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
        var e = new k1({ cursor: 'default', ignoreCoarsePointer: !0 });
        return this._newAdded.push(e), this.group.add(e), e;
      }),
      (a.prototype._setCommon = function (e, t, r) {
        var n = t.hostModel;
        e.setShape({ polyline: n.get('polyline'), curveness: n.get(['lineStyle', 'curveness']) }),
          e.useStyle(n.getModel('lineStyle').getLineStyle()),
          (e.style.strokeNoScale = !0);
        var i = t.getVisual('style');
        i && i.stroke && e.setStyle('stroke', i.stroke), e.setStyle('fill', null);
        var o = ut(e);
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
const N1 = R1;
var V1 = {
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
const Ru = V1;
var z1 = (function (a) {
  R(e, a);
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
      var s = Ru.reset(t, r, n);
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
          (n = this._lineDraw = l ? new N1() : new si(o ? (i ? P1 : ku) : i ? Eu : oi)),
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
const B1 = z1;
var G1 = typeof Uint32Array == 'undefined' ? Array : Uint32Array,
  O1 = typeof Float64Array == 'undefined' ? Array : Float64Array;
function xs(a) {
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
        cl([n, t[0], t[1]])
      );
    }));
}
var W1 = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (
      (t.type = e.type), (t.visualStyleAccessPath = 'lineStyle'), (t.visualDrawType = 'stroke'), t
    );
  }
  return (
    (e.prototype.init = function (t) {
      (t.data = t.data || []), xs(t);
      var r = this._processFlatCoordsArray(t.data);
      (this._flatCoords = r.flatCoords),
        (this._flatCoordsOffset = r.flatCoordsOffset),
        r.flatCoords && (t.data = new Float32Array(r.count)),
        a.prototype.init.apply(this, arguments);
    }),
    (e.prototype.mergeOption = function (t) {
      if ((xs(t), t.data)) {
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
      if ((this._flatCoords && (r = this._flatCoords.length), Ft(t[0]))) {
        for (var n = t.length, i = new G1(n), o = new O1(n), s = 0, l = 0, u = 0, h = 0; h < n; ) {
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
      var n = new It(['value'], this);
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
        l != null && h.push(l), u != null && h.push(u), Vt('nameValue', { name: h.join(' > ') })
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
const F1 = W1;
function ka(a) {
  return a instanceof Array || (a = [a, a]), a;
}
var $1 = {
  seriesType: 'lines',
  reset: function (a) {
    var e = ka(a.get('symbol')),
      t = ka(a.get('symbolSize')),
      r = a.getData();
    r.setVisual('fromSymbol', e && e[0]),
      r.setVisual('toSymbol', e && e[1]),
      r.setVisual('fromSymbolSize', t && t[0]),
      r.setVisual('toSymbolSize', t && t[1]);
    function n(i, o) {
      var s = i.getItemModel(o),
        l = ka(s.getShallow('symbol', !0)),
        u = ka(s.getShallow('symbolSize', !0));
      l[0] && i.setItemVisual(o, 'fromSymbol', l[0]),
        l[1] && i.setItemVisual(o, 'toSymbol', l[1]),
        u[0] && i.setItemVisual(o, 'fromSymbolSize', u[0]),
        u[1] && i.setItemVisual(o, 'toSymbolSize', u[1]);
    }
    return { dataEach: r.hasItemOption ? n : null };
  },
};
const H1 = $1;
function Z1(a) {
  a.registerChartView(B1), a.registerSeriesModel(F1), a.registerLayout(Ru), a.registerVisual(H1);
}
var U1 = 256,
  Y1 = (function () {
    function a() {
      (this.blurSize = 30),
        (this.pointSize = 20),
        (this.maxOpacity = 1),
        (this.minOpacity = 0),
        (this._gradientPixels = { inRange: null, outOfRange: null });
      var e = Fi.createCanvas();
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
            S = n(m);
          (c.globalAlpha = S), c.drawImage(s, g - h, y - h);
        }
        if (!v.width || !v.height) return v;
        for (
          var x = c.getImageData(0, 0, v.width, v.height),
            b = x.data,
            w = 0,
            _ = b.length,
            A = this.minOpacity,
            M = this.maxOpacity,
            D = M - A;
          w < _;

        ) {
          var S = b[w + 3] / 256,
            T = Math.floor(S * (U1 - 1)) * 4;
          if (S > 0) {
            var L = o(S) ? l : u;
            S > 0 && (S = S * D + A),
              (b[w++] = L[T]),
              (b[w++] = L[T + 1]),
              (b[w++] = L[T + 2]),
              (b[w++] = L[T + 3] * S * 256);
          } else w += 4;
        }
        return c.putImageData(x, 0, 0), v;
      }),
      (a.prototype._getBrush = function () {
        var e = this._brushCanvas || (this._brushCanvas = Fi.createCanvas()),
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
const X1 = Y1;
function q1(a, e, t) {
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
function K1(a, e) {
  var t = a[1] - a[0];
  return (
    (e = [(e[0] - a[0]) / t, (e[1] - a[0]) / t]),
    function (r) {
      return r >= e[0] && r <= e[1];
    }
  );
}
function bs(a) {
  var e = a.dimensions;
  return e[0] === 'lng' && e[1] === 'lat';
}
var j1 = (function (a) {
  R(e, a);
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
        : bs(o) && this._renderOnGeo(o, t, i, n);
    }),
    (e.prototype.incrementalPrepareRender = function (t, r, n) {
      this.group.removeAll();
    }),
    (e.prototype.incrementalRender = function (t, r, n, i) {
      var o = r.coordinateSystem;
      o &&
        (bs(o)
          ? this.render(r, n, i)
          : ((this._progressiveEls = []),
            this._renderOnCartesianAndCalendar(r, i, t.start, t.end, !0)));
    }),
    (e.prototype.eachRendered = function (t) {
      sr(this._progressiveEls || this.group, t);
    }),
    (e.prototype._renderOnCartesianAndCalendar = function (t, r, n, i, o) {
      var s = t.coordinateSystem,
        l = lr(s, 'cartesian2d'),
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
          S = t.getModel(['select', 'itemStyle']).getItemStyle(),
          x = t.get(['itemStyle', 'borderRadius']),
          b = zt(t),
          w = t.getModel('emphasis'),
          _ = w.get('focus'),
          A = w.get('blurScope'),
          M = w.get('disabled'),
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
          var C = g.get(D[0], T),
            E = g.get(D[1], T);
          if (
            isNaN(g.get(D[2], T)) ||
            isNaN(C) ||
            isNaN(E) ||
            C < v[0] ||
            C > v[1] ||
            E < c[0] ||
            E > c[1]
          )
            continue;
          var k = s.dataToPoint([C, E]);
          L = new Mt({
            shape: { x: k[0] - u / 2, y: k[1] - h / 2, width: u, height: h },
            style: P,
          });
        } else {
          if (isNaN(g.get(D[1], T))) continue;
          L = new Mt({ z2: 1, shape: s.dataToRect([g.get(D[0], T)]).contentShape, style: P });
        }
        if (g.hasItemOption) {
          var N = g.getItemModel(T),
            V = N.getModel('emphasis');
          (y = V.getModel('itemStyle').getItemStyle()),
            (m = N.getModel(['blur', 'itemStyle']).getItemStyle()),
            (S = N.getModel(['select', 'itemStyle']).getItemStyle()),
            (x = N.get(['itemStyle', 'borderRadius'])),
            (_ = V.get('focus')),
            (A = V.get('blurScope')),
            (M = V.get('disabled')),
            (b = zt(N));
        }
        L.shape.r = x;
        var G = t.getRawValue(T),
          $ = '-';
        G && G[2] != null && ($ = G[2] + ''),
          Qt(L, b, {
            labelFetcher: t,
            labelDataIndex: T,
            defaultOpacity: P.opacity,
            defaultText: $,
          }),
          (L.ensureState('emphasis').style = y),
          (L.ensureState('blur').style = m),
          (L.ensureState('select').style = S),
          ft(L, _, A, M),
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
        u = this._hmLayer || this._hmLayer || new X1();
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
        S = l.mapArray(m, function (_, A, M) {
          var D = t.dataToPoint([_, A]);
          return (D[0] -= c), (D[1] -= f), D.push(M), D;
        }),
        x = n.getExtent(),
        b =
          n.type === 'visualMap.continuous'
            ? K1(x, n.option.range)
            : q1(x, n.getPieceList(), n.option.selected);
      u.update(
        S,
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
const J1 = j1;
var Q1 = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      return Oe(null, this, { generateCoord: 'value' });
    }),
    (e.prototype.preventIncremental = function () {
      var t = Ll.get(this.get('coordinateSystem'));
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
const tS = Q1;
function eS(a) {
  a.registerChartView(J1), a.registerSeriesModel(tS);
}
var aS = ['itemStyle', 'borderWidth'],
  ws = [
    { xy: 'x', wh: 'width', index: 0, posDesc: ['left', 'right'] },
    { xy: 'y', wh: 'height', index: 1, posDesc: ['top', 'bottom'] },
  ],
  nn = new aa(),
  rS = (function (a) {
    R(e, a);
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
            valueDim: ws[+h],
            categoryDim: ws[1 - +h],
          };
        return (
          o
            .diff(s)
            .add(function (f) {
              if (o.hasValue(f)) {
                var d = As(o, f),
                  p = _s(o, f, d, c),
                  g = Ds(o, c, p);
                o.setItemGraphicEl(f, g), i.add(g), Ms(g, c, p);
              }
            })
            .update(function (f, d) {
              var p = s.getItemGraphicEl(d);
              if (!o.hasValue(f)) {
                i.remove(p);
                return;
              }
              var g = As(o, f),
                y = _s(o, f, g, c),
                m = Ou(o, y);
              p &&
                m !== p.__pictorialShapeStr &&
                (i.remove(p), o.setItemGraphicEl(f, null), (p = null)),
                p ? hS(p, c, y) : (p = Ds(o, c, y, !0)),
                o.setItemGraphicEl(f, p),
                (p.__pictorialSymbolMeta = y),
                i.add(p),
                Ms(p, c, y);
            })
            .remove(function (f) {
              var d = s.getItemGraphicEl(f);
              d && Ts(s, f, d.__pictorialSymbolMeta.animationModel, d);
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
              Ts(i, ut(o).dataIndex, t, o);
            })
          : n.removeAll();
      }),
      (e.type = 'pictorialBar'),
      e
    );
  })(dt);
function _s(a, e, t, r) {
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
  nS(t, i, n, r, c),
    iS(a, e, n, i, o, c.boundingLength, c.pxSign, h, r, c),
    oS(t, c.symbolScale, u, r, c);
  var f = c.symbolSize,
    d = ga(t.get('symbolOffset'), f);
  return sS(t, f, n, i, o, d, s, c.valueLineWidth, c.boundingLength, c.repeatCutLength, r, c), c;
}
function nS(a, e, t, r, n) {
  var i = r.valueDim,
    o = a.get('symbolBoundingData'),
    s = r.coordSys.getOtherAxis(r.coordSys.getBaseAxis()),
    l = s.toGlobalCoord(s.dataToCoord(0)),
    u = 1 - +(t[i.wh] <= 0),
    h;
  if (F(o)) {
    var v = [on(s, o[0]) - l, on(s, o[1]) - l];
    v[1] < v[0] && v.reverse(), (h = v[u]);
  } else
    o != null ? (h = on(s, o) - l) : e ? (h = r.coordSysExtent[i.index][u] - l) : (h = t[i.wh]);
  (n.boundingLength = h), e && (n.repeatCutLength = t[i.wh]), (n.pxSign = h > 0 ? 1 : -1);
}
function on(a, e) {
  return a.toGlobalCoord(a.dataToCoord(a.scale.parse(e)));
}
function iS(a, e, t, r, n, i, o, s, l, u) {
  var h = l.valueDim,
    v = l.categoryDim,
    c = Math.abs(t[v.wh]),
    f = a.getItemVisual(e, 'symbolSize'),
    d;
  F(f) ? (d = f.slice()) : f == null ? (d = ['100%', '100%']) : (d = [f, f]),
    (d[v.index] = B(d[v.index], c)),
    (d[h.index] = B(d[h.index], r ? c : Math.abs(i))),
    (u.symbolSize = d);
  var p = (u.symbolScale = [d[0] / s, d[1] / s]);
  p[h.index] *= (l.isHorizontal ? -1 : 1) * o;
}
function oS(a, e, t, r, n) {
  var i = a.get(aS) || 0;
  i &&
    (nn.attr({ scaleX: e[0], scaleY: e[1], rotation: t }),
    nn.updateTransform(),
    (i /= nn.getLineScale()),
    (i *= e[r.valueDim.index])),
    (n.valueLineWidth = i || 0);
}
function sS(a, e, t, r, n, i, o, s, l, u, h, v) {
  var c = h.categoryDim,
    f = h.valueDim,
    d = v.pxSign,
    p = Math.max(e[f.index] + s, 0),
    g = p;
  if (r) {
    var y = Math.abs(l),
      m = Ot(a.get('symbolMargin'), '15%') + '',
      S = !1;
    m.lastIndexOf('!') === m.length - 1 && ((S = !0), (m = m.slice(0, m.length - 1)));
    var x = B(m, e[f.index]),
      b = Math.max(p + x * 2, 0),
      w = S ? 0 : x * 2,
      _ = Nv(r),
      A = _ ? r : Cs((y + w) / b),
      M = y - A * p;
    (x = M / 2 / (S ? A : Math.max(A - 1, 1))),
      (b = p + x * 2),
      (w = S ? 0 : x * 2),
      !_ && r !== 'fixed' && (A = u ? Cs((Math.abs(u) + w) / b) : 0),
      (g = A * b - w),
      (v.repeatTimes = A),
      (v.symbolMargin = x);
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
  var C = (v.clipShape = {});
  (C[c.xy] = -t[c.xy]), (C[c.wh] = h.ecSize[c.wh]), (C[f.xy] = 0), (C[f.wh] = t[f.wh]);
}
function Nu(a) {
  var e = a.symbolPatternSize,
    t = $t(a.symbolType, -e / 2, -e / 2, e, e);
  return t.attr({ culling: !0 }), t.type !== 'image' && t.setStyle({ strokeNoScale: !0 }), t;
}
function Vu(a, e, t, r) {
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
    var c = Nu(t);
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
function zu(a, e, t, r) {
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
    : ((i = a.__pictorialMainPath = Nu(t)),
      n.add(i),
      Ve(
        i,
        { x: t.pathPosition[0], y: t.pathPosition[1], scaleX: 0, scaleY: 0, rotation: t.rotation },
        { scaleX: t.symbolScale[0], scaleY: t.symbolScale[1] },
        t,
        r,
      ));
}
function Bu(a, e, t) {
  var r = W({}, e.barRectShape),
    n = a.__pictorialBarRect;
  n
    ? Ve(n, null, { shape: r }, e, t)
    : ((n = a.__pictorialBarRect =
        new Mt({
          z2: 2,
          shape: r,
          silent: !0,
          style: { stroke: 'transparent', fill: 'transparent', lineWidth: 0 },
        })),
      (n.disableMorphing = !0),
      a.add(n));
}
function Gu(a, e, t, r) {
  if (t.symbolClip) {
    var n = a.__pictorialClipPath,
      i = W({}, t.clipShape),
      o = e.valueDim,
      s = t.animationModel,
      l = t.dataIndex;
    if (n) ht(n, { shape: i }, s, l);
    else {
      (i[o.wh] = 0),
        (n = new Mt({ shape: i })),
        a.__pictorialBundle.setClipPath(n),
        (a.__pictorialClipPath = n);
      var u = {};
      (u[o.wh] = t.clipShape[o.wh]), vr[r ? 'updateProps' : 'initProps'](n, { shape: u }, s, l);
    }
  }
}
function As(a, e) {
  var t = a.getItemModel(e);
  return (t.getAnimationDelayParams = lS), (t.isAnimationEnabled = uS), t;
}
function lS(a) {
  return { index: a.__pictorialAnimationIndex, count: a.__pictorialRepeatTimes };
}
function uS() {
  return this.parentModel.isAnimationEnabled() && !!this.getShallow('animation');
}
function Ds(a, e, t, r) {
  var n = new j(),
    i = new j();
  return (
    n.add(i),
    (n.__pictorialBundle = i),
    (i.x = t.bundlePosition[0]),
    (i.y = t.bundlePosition[1]),
    t.symbolRepeat ? Vu(n, e, t) : zu(n, e, t),
    Bu(n, t, r),
    Gu(n, e, t, r),
    (n.__pictorialShapeStr = Ou(a, t)),
    (n.__pictorialSymbolMeta = t),
    n
  );
}
function hS(a, e, t) {
  var r = t.animationModel,
    n = t.dataIndex,
    i = a.__pictorialBundle;
  ht(i, { x: t.bundlePosition[0], y: t.bundlePosition[1] }, r, n),
    t.symbolRepeat ? Vu(a, e, t, !0) : zu(a, e, t, !0),
    Bu(a, t, !0),
    Gu(a, e, t, !0);
}
function Ts(a, e, t, r) {
  var n = r.__pictorialBarRect;
  n && n.removeTextContent();
  var i = [];
  yi(r, function (o) {
    i.push(o);
  }),
    r.__pictorialMainPath && i.push(r.__pictorialMainPath),
    r.__pictorialClipPath && (t = null),
    I(i, function (o) {
      $a(o, { scaleX: 0, scaleY: 0 }, t, e, function () {
        r.parent && r.parent.remove(r);
      });
    }),
    a.setItemGraphicEl(e, null);
}
function Ou(a, e) {
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
      : t && vr[n ? 'updateProps' : 'initProps'](a, t, r.animationModel, r.dataIndex, i);
}
function Ms(a, e, t) {
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
  Qt(d, zt(n), {
    labelFetcher: e.seriesModel,
    labelDataIndex: r,
    defaultText: _n(e.seriesModel.getData(), r),
    inheritColor: t.style.fill,
    defaultOpacity: t.style.opacity,
    defaultOutsidePosition: f,
  }),
    ft(a, h, v, i.get('disabled'));
}
function Cs(a) {
  var e = Math.round(a);
  return Math.abs(a - e) < 1e-4 ? e : Math.ceil(a);
}
const vS = rS;
var cS = (function (a) {
  R(e, a);
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
    (e.defaultOption = ir($i.defaultOption, {
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
})($i);
const fS = cS;
function dS(a) {
  a.registerChartView(vS),
    a.registerSeriesModel(fS),
    a.registerLayout(a.PRIORITY.VISUAL.LAYOUT, it(Vv, 'pictorialBar')),
    a.registerLayout(a.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, zv('pictorialBar'));
}
var pS = (function (a) {
  R(e, a);
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
      var f = new gr(this._layersSeries || [], l, c, c),
        d = [];
      f.add(U(p, this, 'add')).update(U(p, this, 'update')).remove(U(p, this, 'remove')).execute();
      function p(g, y, m) {
        var S = o._layers;
        if (g === 'remove') {
          s.remove(S[y]);
          return;
        }
        for (var x = [], b = [], w, _ = l[y].indices, A = 0; A < _.length; A++) {
          var M = i.getItemLayout(_[A]),
            D = M.x,
            T = M.y0,
            L = M.y;
          x.push(D, T), b.push(D, T + L), (w = i.getItemVisual(_[A], 'style'));
        }
        var P,
          C = i.getItemLayout(_[0]),
          E = t.getModel('label'),
          k = E.get('margin'),
          N = t.getModel('emphasis');
        if (g === 'add') {
          var V = (d[y] = new j());
          (P = new Bv({
            shape: {
              points: x,
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
                gS(P.getBoundingRect(), t, function () {
                  P.removeClipPath();
                }),
              );
        } else {
          var V = S[m];
          (P = V.childAt(0)),
            s.add(V),
            (d[y] = V),
            ht(P, { shape: { points: x, stackedOnPoints: b } }, t),
            fe(P);
        }
        Qt(
          P,
          zt(t),
          { labelDataIndex: _[A - 1], defaultText: i.getName(_[A - 1]), inheritColor: w.fill },
          { normal: { verticalAlign: 'middle' } },
        ),
          P.setTextConfig({ position: null, local: !0 });
        var G = P.getTextContent();
        G && ((G.x = C.x - k), (G.y = C.y0 + C.y / 2)),
          P.useStyle(w),
          i.setItemGraphicEl(y, P),
          Et(P, t),
          ft(P, N.get('focus'), N.get('blurScope'), N.get('disabled'));
      }
      (this._layersSeries = l), (this._layers = d);
    }),
    (e.type = 'themeRiver'),
    e
  );
})(dt);
function gS(a, e, t) {
  var r = new Mt({ shape: { x: a.x - 10, y: a.y - 10, width: 0, height: a.height + 20 } });
  return Ht(r, { shape: { x: a.x - 50, width: a.width + 100, height: a.height + 20 } }, e, t), r;
}
const yS = pS;
var sn = 2,
  mS = (function (a) {
    R(e, a);
    function e() {
      var t = (a !== null && a.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.init = function (t) {
        a.prototype.init.apply(this, arguments),
          (this.legendVisualProvider = new cr(U(this.getData, this), U(this.getRawData, this)));
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
            o = Ut(t.data, function (d) {
              return d[2] !== void 0;
            }),
            s = this.fixData(o || []),
            l = [],
            u = (this.nameMap = Ct()),
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
          f = new It(c, this);
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
        F(t) || (t = t ? [t] : []);
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
        return Vt('nameValue', { name: o, value: s });
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
const SS = mS;
function xS(a, e) {
  a.eachSeriesByType('themeRiver', function (t) {
    var r = t.getData(),
      n = t.coordinateSystem,
      i = {},
      o = n.getRect();
    i.rect = o;
    var s = t.get('boundaryGap'),
      l = n.getAxis();
    if (((i.boundaryGap = s), l.orient === 'horizontal')) {
      (s[0] = B(s[0], o.height)), (s[1] = B(s[1], o.height));
      var u = o.height - s[0] - s[1];
      Ls(r, t, u);
    } else {
      (s[0] = B(s[0], o.width)), (s[1] = B(s[1], o.width));
      var h = o.width - s[0] - s[1];
      Ls(r, t, h);
    }
    r.setLayout('layoutInfo', i);
  });
}
function Ls(a, e, t) {
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
        l = bS(s),
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
function bS(a) {
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
function wS(a) {
  a.registerChartView(yS),
    a.registerSeriesModel(SS),
    a.registerLayout(xS),
    a.registerProcessor(dr('themeRiver'));
}
var _S = 2,
  AS = 4,
  DS = (function (a) {
    R(e, a);
    function e(t, r, n, i) {
      var o = a.call(this) || this;
      (o.z2 = _S), (o.textConfig = { inside: !0 }), (ut(o).seriesIndex = r.seriesIndex);
      var s = new gt({ z2: AS, silent: t.getModel().get(['label', 'silent']) });
      return o.setTextContent(s), o.updateData(!0, t, r, n, i), o;
    }
    return (
      (e.prototype.updateData = function (t, r, n, i, o) {
        (this.node = r), (r.piece = this), (n = n || this._seriesModel), (i = i || this._ecModel);
        var s = this;
        ut(s).dataIndex = r.dataIndex;
        var l = r.getModel(),
          u = l.getModel('emphasis'),
          h = r.getLayout(),
          v = W({}, h);
        v.label = null;
        var c = r.getVisual('style');
        c.lineJoin = 'bevel';
        var f = r.getVisual('decal');
        f && (c.decal = Il(f, o));
        var d = Hi(l.getModel('itemStyle'), v, !0);
        W(v, d),
          I(pn, function (m) {
            var S = s.ensureState(m),
              x = l.getModel([m, 'itemStyle']);
            S.style = x.getItemStyle();
            var b = Hi(x, v);
            b && (S.shape = b);
          }),
          t
            ? (s.setShape(v), (s.shape.r = h.r0), Ht(s, { shape: { r: h.r } }, n, r.dataIndex))
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
          I(Gv, function (y) {
            var m = y === 'normal' ? n.getModel('label') : n.getModel([y, 'label']),
              S = y === 'normal',
              x = S ? c : c.ensureState(y),
              b = t.getFormattedLabel(f, y);
            S && (b = b || r.node.name),
              (x.style = yt(m, {}, null, y !== 'normal', !0)),
              b && (x.style.text = b);
            var w = m.get('show');
            w != null && !S && (x.ignore = !w);
            var _ = g(m, 'position'),
              A = S ? v : v.states[y],
              M = A.style.fill;
            A.textConfig = {
              outsideFill: m.get('color') === 'inherit' ? M : null,
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
              (x.style.align = L),
              (x.style.verticalAlign = g(m, 'verticalAlign') || 'middle'),
              (x.x = D * u + o.cx),
              (x.y = D * h + o.cy);
            var P = g(m, 'rotate'),
              C = 0;
            P === 'radial'
              ? ((C = Zi(-l)), C > Math.PI / 2 && C < Math.PI * 1.5 && (C += Math.PI))
              : P === 'tangential'
              ? ((C = Math.PI / 2 - l),
                C > Math.PI / 2 ? (C -= Math.PI) : C < -Math.PI / 2 && (C += Math.PI))
              : Ft(P) && (C = (P * Math.PI) / 180),
              (x.rotation = Zi(C));
          });
        function g(y, m) {
          var S = y.get(m);
          return S == null ? i.get(m) : S;
        }
        c.dirtyStyle();
      }),
      e
    );
  })(ra);
const Is = DS;
var kn = 'sunburstRootToNode',
  Ps = 'sunburstHighlight',
  TS = 'sunburstUnhighlight';
function MS(a) {
  a.registerAction({ type: kn, update: 'updateView' }, function (e, t) {
    t.eachComponent({ mainType: 'series', subType: 'sunburst', query: e }, r);
    function r(n, i) {
      var o = la(e, [kn], n);
      if (o) {
        var s = n.getViewRoot();
        s && (e.direction = ci(s, o.node) ? 'rollUp' : 'drillDown'), n.resetViewRoot(o.node);
      }
    }
  }),
    a.registerAction({ type: Ps, update: 'none' }, function (e, t, r) {
      (e = W({}, e)), t.eachComponent({ mainType: 'series', subType: 'sunburst', query: e }, n);
      function n(i) {
        var o = la(e, [Ps], i);
        o && (e.dataIndex = o.node.dataIndex);
      }
      r.dispatchAction(W(e, { type: 'highlight' }));
    }),
    a.registerAction({ type: TS, update: 'updateView' }, function (e, t, r) {
      (e = W({}, e)), r.dispatchAction(W(e, { type: 'downplay' }));
    });
}
var CS = (function (a) {
  R(e, a);
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
      function d(m, S) {
        if (m.length === 0 && S.length === 0) return;
        new gr(S, m, x, x).add(b).update(b).remove(it(b, null)).execute();
        function x(w) {
          return w.getId();
        }
        function b(w, _) {
          var A = w == null ? null : m[w],
            M = _ == null ? null : S[_];
          p(A, M);
        }
      }
      function p(m, S) {
        if ((!v && m && !m.getValue() && (m = null), m !== l && S !== l)) {
          if (S && S.piece)
            m
              ? (S.piece.updateData(!1, m, t, r, n), s.setItemGraphicEl(m.dataIndex, S.piece))
              : g(S);
          else if (m) {
            var x = new Is(m, t, r, n);
            h.add(x), s.setItemGraphicEl(m.dataIndex, x);
          }
        }
      }
      function g(m) {
        m && m.piece && (h.remove(m.piece), (m.piece = null));
      }
      function y(m, S) {
        S.depth > 0
          ? (o.virtualPiece
              ? o.virtualPiece.updateData(!1, m, t, r, n)
              : ((o.virtualPiece = new Is(m, t, r, n)), h.add(o.virtualPiece)),
            S.piece.off('click'),
            o.virtualPiece.on('click', function (x) {
              o._rootToNode(S.parentNode);
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
                  Dl(u, h);
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
          type: kn,
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
const LS = CS;
var IS = (function (a) {
  R(e, a);
  function e() {
    var t = (a !== null && a.apply(this, arguments)) || this;
    return (t.type = e.type), (t.ignoreStyleOnData = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t, r) {
      var n = { name: t.name, children: t.data };
      Wu(n);
      var i = (this._levelModels = O(
          t.levels || [],
          function (l) {
            return new jt(l, this, r);
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
      return (r.treePathInfo = Sr(n, this)), r;
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
      vu(this);
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
function Wu(a) {
  var e = 0;
  I(a.children, function (r) {
    Wu(r);
    var n = r.value;
    F(n) && (n = n[0]), (e += n);
  });
  var t = a.value;
  F(t) && (t = t[0]),
    (t == null || isNaN(t)) && (t = e),
    t < 0 && (t = 0),
    F(a.value) ? (a.value[0] = t) : (a.value = t);
}
const PS = IS;
var Es = Math.PI / 180;
function ES(a, e, t) {
  e.eachSeriesByType(a, function (r) {
    var n = r.get('center'),
      i = r.get('radius');
    F(i) || (i = [0, i]), F(n) || (n = [n, n]);
    var o = t.getWidth(),
      s = t.getHeight(),
      l = Math.min(o, s),
      u = B(n[0], o),
      h = B(n[1], s),
      v = B(i[0], l / 2),
      c = B(i[1], l / 2),
      f = -r.get('startAngle') * Es,
      d = r.get('minAngle') * Es,
      p = r.getData().tree.root,
      g = r.getViewRoot(),
      y = g.depth,
      m = r.get('sort');
    m != null && Fu(g, m);
    var S = 0;
    I(g.children, function (k) {
      !isNaN(k.getValue()) && S++;
    });
    var x = g.getValue(),
      b = (Math.PI / (x || S)) * 2,
      w = g.depth > 0,
      _ = g.height - (w ? -1 : 1),
      A = (c - v) / (_ || 1),
      M = r.get('clockwise'),
      D = r.get('stillShowZeroSum'),
      T = M ? 1 : -1,
      L = function (k, N) {
        if (k) {
          var V = N;
          if (k !== p) {
            var G = k.getValue(),
              $ = x === 0 && D ? b : G * b;
            $ < d && ($ = d), (V = N + T * $);
            var H = k.depth - y - (w ? -1 : 1),
              K = v + A * H,
              J = v + A * (H + 1),
              X = r.getLevelModel(k);
            if (X) {
              var et = X.get('r0', !0),
                xt = X.get('r', !0),
                q = X.get('radius', !0);
              q != null && ((et = q[0]), (xt = q[1])),
                et != null && (K = B(et, l / 2)),
                xt != null && (J = B(xt, l / 2));
            }
            k.setLayout({
              angle: $,
              startAngle: N,
              endAngle: V,
              clockwise: M,
              cx: u,
              cy: h,
              r0: K,
              r: J,
            });
          }
          if (k.children && k.children.length) {
            var Z = 0;
            I(k.children, function (tt) {
              Z += L(tt, N + Z);
            });
          }
          return V - N;
        }
      };
    if (w) {
      var P = v,
        C = v + A,
        E = Math.PI * 2;
      p.setLayout({
        angle: E,
        startAngle: f,
        endAngle: f + E,
        clockwise: M,
        cx: u,
        cy: h,
        r0: P,
        r: C,
      });
    }
    L(g, f);
  });
}
function Fu(a, e) {
  var t = a.children || [];
  (a.children = kS(t, e)),
    t.length &&
      I(a.children, function (r) {
        Fu(r, e);
      });
}
function kS(a, e) {
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
function RS(a) {
  var e = {};
  function t(r, n, i) {
    for (var o = r; o && o.depth > 1; ) o = o.parentNode;
    var s = n.getColorFromPalette(o.name || o.dataIndex + '', e);
    return r.depth > 1 && at(s) && (s = Ov(s, ((r.depth - 1) / (i - 1)) * 0.5)), s;
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
function NS(a) {
  a.registerChartView(LS),
    a.registerSeriesModel(PS),
    a.registerLayout(it(ES, 'sunburst')),
    a.registerProcessor(it(dr, 'sunburst')),
    a.registerVisual(RS),
    MS(a);
}
var ks = { color: 'fill', borderColor: 'stroke' },
  VS = {
    symbol: 1,
    symbolSize: 1,
    symbolKeepAspect: 1,
    legendIcon: 1,
    visualMeta: 1,
    liftZ: 1,
    decal: 1,
  },
  oe = wt(),
  zS = (function (a) {
    R(e, a);
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
const BS = zS;
function GS(a, e) {
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
function OS(a) {
  var e = a.master.getRect();
  return {
    coordSys: { type: 'cartesian2d', x: e.x, y: e.y, width: e.width, height: e.height },
    api: {
      coord: function (t) {
        return a.dataToPoint(t);
      },
      size: U(GS, a),
    },
  };
}
function WS(a, e) {
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
function FS(a) {
  var e = a.getBoundingRect();
  return {
    coordSys: { type: 'geo', x: e.x, y: e.y, width: e.width, height: e.height, zoom: a.getZoom() },
    api: {
      coord: function (t) {
        return a.dataToPoint(t);
      },
      size: U(WS, a),
    },
  };
}
function $S(a, e) {
  var t = this.getAxis(),
    r = e instanceof Array ? e[0] : e,
    n = (a instanceof Array ? a[0] : a) / 2;
  return t.type === 'category'
    ? t.getBandWidth()
    : Math.abs(t.dataToCoord(r - n) - t.dataToCoord(r + n));
}
function HS(a) {
  var e = a.getRect();
  return {
    coordSys: { type: 'singleAxis', x: e.x, y: e.y, width: e.width, height: e.height },
    api: {
      coord: function (t) {
        return a.dataToPoint(t);
      },
      size: U($S, a),
    },
  };
}
function ZS(a, e) {
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
function US(a) {
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
        size: U(ZS, a),
      },
    }
  );
}
function YS(a) {
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
  Si = 'select',
  ge = [he, se, mi, Si],
  ln = {
    normal: ['itemStyle'],
    emphasis: [se, 'itemStyle'],
    blur: [mi, 'itemStyle'],
    select: [Si, 'itemStyle'],
  },
  un = { normal: ['label'], emphasis: [se, 'label'], blur: [mi, 'label'], select: [Si, 'label'] },
  XS = ['x', 'y'],
  qS = 'e\0\0',
  kt = { normal: {}, emphasis: {}, blur: {}, select: {} },
  KS = { cartesian2d: OS, geo: FS, single: HS, polar: US, calendar: YS };
function Rn(a) {
  return a instanceof Bt;
}
function Nn(a) {
  return a instanceof nr;
}
function jS(a, e) {
  e.copyTransform(a),
    Nn(e) &&
      Nn(a) &&
      (e.setStyle(a.style),
      (e.z = a.z),
      (e.z2 = a.z2),
      (e.zlevel = a.zlevel),
      (e.invisible = a.invisible),
      (e.ignore = a.ignore),
      Rn(e) && Rn(a) && e.setShape(a.shape));
}
var JS = (function (a) {
  R(e, a);
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
        u = Rs(t, s, r, n);
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
        l = Rs(r, s, n, i),
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
      sr(this._progressiveEls || this.group, t);
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
const QS = JS;
function xi(a) {
  var e = a.type,
    t;
  if (e === 'path') {
    var r = a.shape,
      n =
        r.width != null && r.height != null
          ? { x: r.x || 0, y: r.y || 0, width: r.width, height: r.height }
          : null,
      i = Zu(r);
    (t = $v(i, null, n, r.layout || 'center')), (oe(t).customPathData = i);
  } else if (e === 'image') (t = new ye({})), (oe(t).customImagePath = a.style.image);
  else if (e === 'text') t = new gt({});
  else if (e === 'group') t = new j();
  else {
    if (e === 'compoundPath') throw new Error('"compoundPath" is not supported yet.');
    var o = ul(e);
    if (!o) {
      var s = '';
      lt(s);
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
  ql(e);
  var s = n && n.normal.cfg;
  s && e.setTextConfig(s), r && r.transition == null && (r.transition = XS);
  var l = r && r.style;
  if (l) {
    if (e.type === 'text') {
      var u = l;
      z(u, 'textFill') && (u.fill = u.textFill), z(u, 'textStroke') && (u.stroke = u.textStroke);
    }
    var h = void 0,
      v = Rn(e) ? l.decal : null;
    a && v && ((v.dirty = !0), (h = Il(v, a))), (l.__decalPattern = h);
  }
  if (Nn(e) && l) {
    var h = l.__decalPattern;
    h && (l.decal = h);
  }
  Va(e, r, i, { dataIndex: t, isInit: o, clearStyle: !0 }), Ua(e, r.keyframeAnimation, i);
}
function $u(a, e, t, r, n) {
  var i = e.isGroup ? null : e,
    o = n && n[a].cfg;
  if (i) {
    var s = i.ensureState(a);
    if (r === !1) {
      var l = i.getState(a);
      l && (l.style = null);
    } else s.style = r || null;
    o && (s.textConfig = o), Fa(i);
  }
}
function tx(a, e, t) {
  if (!a.isGroup) {
    var r = a,
      n = t.currentZ,
      i = t.currentZLevel;
    (r.z = n), (r.zlevel = i);
    var o = e.z2;
    o != null && (r.z2 = o || 0);
    for (var s = 0; s < ge.length; s++) ex(r, e, ge[s]);
  }
}
function ex(a, e, t) {
  var r = t === he,
    n = r ? e : Ja(e, t),
    i = n ? n.z2 : null,
    o;
  i != null && ((o = r ? a : a.ensureState(t)), (o.z2 = i || 0));
}
function Rs(a, e, t, r) {
  var n = a.get('renderItem'),
    i = a.coordinateSystem,
    o = {};
  i && (o = i.prepareCustoms ? i.prepareCustoms(i) : KS[i.type](i));
  for (
    var s = nt(
        {
          getWidth: r.getWidth,
          getHeight: r.getHeight,
          getZr: r.getZr,
          getDevicePixelRatio: r.getDevicePixelRatio,
          value: x,
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
        encode: ax(a.getData()),
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
  function y(C) {
    return C === u ? h || (h = e.getItemModel(C)) : e.getItemModel(C);
  }
  function m(C, E) {
    return e.hasItemOption
      ? C === u
        ? v[E] || (v[E] = y(C).getModel(ln[E]))
        : y(C).getModel(ln[E])
      : f[E];
  }
  function S(C, E) {
    return e.hasItemOption
      ? C === u
        ? c[E] || (c[E] = y(C).getModel(un[E]))
        : y(C).getModel(un[E])
      : d[E];
  }
  return function (C, E) {
    return (
      (u = C),
      (h = null),
      (v = {}),
      (c = {}),
      n &&
        n(
          nt({ dataIndexInside: C, dataIndex: e.getRawIndex(C), actionType: E ? E.type : null }, l),
          s,
        )
    );
  };
  function x(C, E) {
    return E == null && (E = u), e.getStore().get(e.getDimensionIndex(C || 0), E);
  }
  function b(C, E) {
    E == null && (E = u), (C = C || 0);
    var k = e.getDimensionInfo(C);
    if (!k) {
      var N = e.getDimensionIndex(C);
      return N >= 0 ? e.getStore().get(N, E) : void 0;
    }
    var V = e.get(k.name, E),
      G = k && k.ordinalMeta;
    return G ? G.categories[V] : V;
  }
  function w(C, E) {
    E == null && (E = u);
    var k = e.getItemVisual(E, 'style'),
      N = k && k.fill,
      V = k && k.opacity,
      G = m(E, he).getItemStyle();
    N != null && (G.fill = N), V != null && (G.opacity = V);
    var $ = { inheritColor: at(N) ? N : '#000' },
      H = S(E, he),
      K = yt(H, null, $, !1, !0);
    K.text = H.getShallow('show') ? Tt(a.getFormattedLabel(E, he), _n(e, E)) : null;
    var J = Ui(H, $, !1);
    return M(C, G), (G = so(G, K, J)), C && A(G, C), (G.legacy = !0), G;
  }
  function _(C, E) {
    E == null && (E = u);
    var k = m(E, se).getItemStyle(),
      N = S(E, se),
      V = yt(N, null, null, !0, !0);
    V.text = N.getShallow('show')
      ? ma(a.getFormattedLabel(E, se), a.getFormattedLabel(E, he), _n(e, E))
      : null;
    var G = Ui(N, null, !0);
    return M(C, k), (k = so(k, V, G)), C && A(k, C), (k.legacy = !0), k;
  }
  function A(C, E) {
    for (var k in E) z(E, k) && (C[k] = E[k]);
  }
  function M(C, E) {
    C &&
      (C.textFill && (E.textFill = C.textFill),
      C.textPosition && (E.textPosition = C.textPosition));
  }
  function D(C, E) {
    if ((E == null && (E = u), z(ks, C))) {
      var k = e.getItemVisual(E, 'style');
      return k ? k[ks[C]] : null;
    }
    if (z(VS, C)) return e.getItemVisual(E, C);
  }
  function T(C) {
    if (i.type === 'cartesian2d') {
      var E = i.getBaseAxis();
      return Wv(nt({ axis: E }, C));
    }
  }
  function L() {
    return t.getCurrentSeriesIndices();
  }
  function P(C) {
    return Fv(C, t);
  }
}
function ax(a) {
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
  e && Hu(e, r, n) && ((o = Lt(i.childrenRef(), e)), (e = null));
  var l = !e,
    u = e;
  u ? u.clearStates() : ((u = xi(r)), s && jS(s, u)),
    r.morph === !1 ? (u.disableMorphing = !0) : u.disableMorphing && (u.disableMorphing = !1),
    (kt.normal.cfg =
      kt.normal.conOpt =
      kt.emphasis.cfg =
      kt.emphasis.conOpt =
      kt.blur.cfg =
      kt.blur.conOpt =
      kt.select.cfg =
      kt.select.conOpt =
        null),
    (kt.isLegacy = !1),
    nx(u, t, r, n, l, kt),
    rx(u, t, r, n, l),
    bi(a, u, t, r, kt, n, l),
    z(r, 'info') && (oe(u).info = r.info);
  for (var h = 0; h < ge.length; h++) {
    var v = ge[h];
    if (v !== he) {
      var c = Ja(r, v),
        f = _i(r, c, v);
      $u(v, u, c, f, kt);
    }
  }
  return (
    tx(u, r, n), r.type === 'group' && ix(a, u, t, r, n), o >= 0 ? i.replaceAt(u, o) : i.add(u), u
  );
}
function Hu(a, e, t) {
  var r = oe(a),
    n = e.type,
    i = e.shape,
    o = e.style;
  return (
    t.isUniversalTransitionEnabled() ||
    (n != null && n !== r.customGraphicType) ||
    (n === 'path' && ux(i) && Zu(i) !== r.customPathData) ||
    (n === 'image' && z(o, 'image') && o.image !== r.customImagePath)
  );
}
function rx(a, e, t, r, n) {
  var i = t.clipPath;
  if (i === !1) a && a.getClipPath() && a.removeClipPath();
  else if (i) {
    var o = a.getClipPath();
    o && Hu(o, i, r) && (o = null),
      o || ((o = xi(i)), a.setClipPath(o)),
      bi(null, o, e, i, null, r, n);
  }
}
function nx(a, e, t, r, n, i) {
  if (!a.isGroup) {
    Ns(t, null, i), Ns(t, se, i);
    var o = i.normal.conOpt,
      s = i.emphasis.conOpt,
      l = i.blur.conOpt,
      u = i.select.conOpt;
    if (o != null || s != null || u != null || l != null) {
      var h = a.getTextContent();
      if (o === !1) h && a.removeTextContent();
      else {
        (o = i.normal.conOpt = o || { type: 'text' }),
          h ? h.clearStates() : ((h = xi(o)), a.setTextContent(h)),
          bi(null, h, e, o, null, r, n);
        for (var v = o && o.style, c = 0; c < ge.length; c++) {
          var f = ge[c];
          if (f !== he) {
            var d = i[f].conOpt;
            $u(f, h, d, _i(o, d, f), null);
          }
        }
        v ? h.dirty() : h.markRedraw();
      }
    }
  }
}
function Ns(a, e, t) {
  var r = e ? Ja(a, e) : a,
    n = e ? _i(a, r, se) : a.style,
    i = a.type,
    o = r ? r.textConfig : null,
    s = a.textContent,
    l = s ? (e ? Ja(s, e) : s) : null;
  if (n && (t.isLegacy || Hl(n, i, !!o, !!l))) {
    t.isLegacy = !0;
    var u = Zl(n, i, !e);
    !o && u.textConfig && (o = u.textConfig), !l && u.textContent && (l = u.textContent);
  }
  if (!e && l) {
    var h = l;
    !h.type && (h.type = 'text');
  }
  var v = e ? t[e] : t.normal;
  (v.cfg = o), (v.conOpt = l);
}
function Ja(a, e) {
  return e ? (a ? a[e] : null) : a;
}
function _i(a, e, t) {
  var r = e && e.style;
  return r == null && t === se && a && (r = a.styleEmphasis), r;
}
function ix(a, e, t, r, n) {
  var i = r.children,
    o = i ? i.length : 0,
    s = r.$mergeChildren,
    l = s === 'byName' || r.diffChildrenByName,
    u = s === !1;
  if (!(!o && !l && !u)) {
    if (l) {
      sx({
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
      ox(e, d, n);
    }
  }
}
function ox(a, e, t) {
  e && mr(e, oe(a).option, t);
}
function sx(a) {
  new gr(a.oldChildren, a.newChildren, Vs, Vs, a).add(zs).update(zs).remove(lx).execute();
}
function Vs(a, e) {
  var t = a && a.name;
  return t != null ? t : qS + e;
}
function zs(a, e) {
  var t = this.context,
    r = a != null ? t.newChildren[a] : null,
    n = e != null ? t.oldChildren[e] : null;
  wi(t.api, n, t.dataIndex, r, t.seriesModel, t.group);
}
function lx(a) {
  var e = this.context,
    t = e.oldChildren[a];
  t && mr(t, oe(t).option, e.seriesModel);
}
function Zu(a) {
  return a && (a.pathData || a.d);
}
function ux(a) {
  return a && (z(a, 'pathData') || z(a, 'd'));
}
function hx(a) {
  a.registerChartView(QS), a.registerSeriesModel(BS);
}
var vn = Math.sin,
  cn = Math.cos,
  Uu = Math.PI,
  xe = Math.PI * 2,
  vx = 180 / Uu,
  cx = (function () {
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
          c = ue(v - xe) || (h ? u >= xe : -u >= xe),
          f = u > 0 ? u % xe : (u % xe) + xe,
          d = !1;
        c ? (d = !0) : ue(v) ? (d = !1) : (d = f >= Uu == !!h);
        var p = e + r * cn(o),
          g = t + n * vn(o);
        this._start && this._add('M', p, g);
        var y = Math.round(i * vx);
        if (c) {
          var m = 1 / this._p,
            S = (h ? 1 : -1) * (xe - m);
          this._add('A', r, n, y, 1, +h, e + r * cn(o + S), t + n * vn(o + S)),
            m > 0.01 && this._add('A', r, n, y, 0, +h, p, g);
        } else {
          var x = e + r * cn(s),
            b = t + n * vn(s);
          this._add('A', r, n, y, +d, +h, x, b);
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
const Yu = cx;
var ta = 'none',
  fx = Math.round;
function dx(a) {
  var e = a.fill;
  return e != null && e !== ta;
}
function px(a) {
  var e = a.stroke;
  return e != null && e !== ta;
}
var Vn = ['lineCap', 'miterLimit', 'lineJoin'],
  gx = O(Vn, function (a) {
    return 'stroke-' + a.toLowerCase();
  });
function yx(a, e, t, r) {
  var n = e.opacity == null ? 1 : e.opacity;
  if (t instanceof ye) {
    a('opacity', n);
    return;
  }
  if (dx(e)) {
    var i = ia(e.fill);
    a('fill', i.color);
    var o = e.fillOpacity != null ? e.fillOpacity * i.opacity * n : i.opacity * n;
    (r || o < 1) && a('fill-opacity', o);
  } else a('fill', ta);
  if (px(e)) {
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
      var c = Hv(t),
        f = c[0],
        d = c[1];
      f &&
        ((d = fx(d || 0)),
        a('stroke-dasharray', f.join(',')),
        (d || r) && a('stroke-dashoffset', d));
    } else r && a('stroke-dasharray', ta);
    for (var p = 0; p < Vn.length; p++) {
      var g = Vn[p];
      if (r || e[g] !== Yi[g]) {
        var y = e[g] || Yi[g];
        y && a(gx[p], y);
      }
    }
  } else r && a('stroke', ta);
}
var Xu = 'http://www.w3.org/2000/svg',
  qu = 'http://www.w3.org/1999/xlink',
  mx = 'http://www.w3.org/2000/xmlns/',
  Sx = 'http://www.w3.org/XML/1998/namespace';
function Ku(a) {
  return document.createElementNS(Xu, a);
}
function ct(a, e, t, r, n) {
  return { tag: a, attrs: t || {}, children: r, text: n, key: e };
}
function xx(a, e) {
  var t = [];
  if (e)
    for (var r in e) {
      var n = e[r],
        i = r;
      n !== !1 && (n !== !0 && n != null && (i += '="' + n + '"'), t.push(i));
    }
  return '<' + a + ' ' + t.join(' ') + '>';
}
function bx(a) {
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
      s = n.attrs,
      l = n.text;
    return (
      xx(o, s) +
      (o !== 'style' ? Zv(l) : l || '') +
      (i
        ? '' +
          t +
          O(i, function (u) {
            return r(u);
          }).join(t) +
          t
        : '') +
      bx(o)
    );
  }
  return r(a);
}
function wx(a, e, t) {
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
function zn(a) {
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
function Bs(a, e, t, r) {
  return ct(
    'svg',
    'root',
    {
      width: a,
      height: e,
      xmlns: Xu,
      'xmlns:xlink': qu,
      version: '1.1',
      baseProfile: 'full',
      viewBox: r ? '0 0 ' + a + ' ' + e : !1,
    },
    t,
  );
}
var Gs = {
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
function _x(a, e, t) {
  var r = W({}, a.shape);
  W(r, e), a.buildPath(t, r);
  var n = new Yu();
  return n.reset(El(a)), t.rebuildPath(n, 1), n.generateStr(), n.getStr();
}
function Ax(a, e) {
  var t = e.originX,
    r = e.originY;
  (t || r) && (a[_e] = t + 'px ' + r + 'px');
}
var Dx = {
  fill: 'fill',
  opacity: 'opacity',
  lineWidth: 'stroke-width',
  lineDashOffset: 'stroke-dashoffset',
};
function ju(a, e) {
  var t = e.zrId + '-ani-' + e.cssAnimIdx++;
  return (e.cssAnims[t] = a), t;
}
function Tx(a, e, t) {
  var r = a.shape.paths,
    n = {},
    i,
    o;
  if (
    (I(r, function (l) {
      var u = zn(t.zrId);
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
    var s = ju(n, t);
    return i.replace(o, s);
  }
}
function Os(a) {
  return at(a) ? (Gs[a] ? 'cubic-bezier(' + Gs[a] + ')' : Yv(a) ? a : '') : '';
}
function br(a, e, t, r) {
  var n = a.animators,
    i = n.length,
    o = [];
  if (a instanceof Uv) {
    var s = Tx(a, e, t);
    if (s) o.push(s);
    else if (!i) return;
  } else if (!i) return;
  for (var l = {}, u = 0; u < i; u++) {
    var h = n[u],
      v = [h.getMaxTime() / 1e3 + 's'],
      c = Os(h.getClip().easing),
      f = h.getDelay();
    c ? v.push(c) : v.push('linear'), f && v.push(f / 1e3 + 's'), h.getLoop() && v.push('infinite');
    var d = v.join(' ');
    (l[d] = l[d] || [d, []]), l[d][1].push(h);
  }
  function p(m) {
    var S = m[1],
      x = S.length,
      b = {},
      w = {},
      _ = {},
      A = 'animation-timing-function';
    function M(Z, tt, Q) {
      for (var rt = Z.getTracks(), St = Z.getMaxTime(), bt = 0; bt < rt.length; bt++) {
        var ot = rt[bt];
        if (ot.needsAnimate()) {
          var _t = ot.keyframes,
            At = ot.propName;
          if ((Q && (At = Q(At)), At))
            for (var Yt = 0; Yt < _t.length; Yt++) {
              var me = _t[Yt],
                Se = Math.round((me.time / St) * 100) + '%',
                Ci = Os(me.easing),
                Li = me.rawValue;
              (at(Li) || Ft(Li)) &&
                ((tt[Se] = tt[Se] || {}), (tt[Se][At] = me.rawValue), Ci && (tt[Se][A] = Ci));
            }
        }
      }
    }
    for (var D = 0; D < x; D++) {
      var T = S[D],
        L = T.targetName;
      L ? L === 'shape' && M(T, w) : !r && M(T, b);
    }
    for (var P in b) {
      var C = {};
      Xv(C, a), W(C, b[P]);
      var E = Pl(C),
        k = b[P][A];
      (_[P] = E ? { transform: E } : {}), Ax(_[P], C), k && (_[P][A] = k);
    }
    var N,
      V = !0;
    for (var P in w) {
      _[P] = _[P] || {};
      var G = !N,
        k = w[P][A];
      G && (N = new qv());
      var $ = N.len();
      N.reset(), (_[P].d = _x(a, w[P], N));
      var H = N.len();
      if (!G && $ !== H) {
        V = !1;
        break;
      }
      k && (_[P][A] = k);
    }
    if (!V) for (var P in _) delete _[P].d;
    if (!r)
      for (var D = 0; D < x; D++) {
        var T = S[D],
          L = T.targetName;
        L === 'style' &&
          M(T, _, function (rt) {
            return Dx[rt];
          });
      }
    for (var K = pt(_), J = !0, X, D = 1; D < K.length; D++) {
      var et = K[D - 1],
        xt = K[D];
      if (_[et][_e] !== _[xt][_e]) {
        J = !1;
        break;
      }
      X = _[et][_e];
    }
    if (J && X) {
      for (var P in _) _[P][_e] && delete _[P][_e];
      e[_e] = X;
    }
    if (
      Ut(K, function (Z) {
        return pt(_[Z]).length > 0;
      }).length
    ) {
      var q = ju(_, t);
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
function Ju(a) {
  return a && at(a.src);
}
function Qu(a) {
  return a && st(a.toDataURL);
}
function Di(a, e, t, r) {
  yx(
    function (n, i) {
      var o = n === 'fill' || n === 'stroke';
      o && kl(i) ? eh(e, a, n, r) : o && Jn(i) ? ah(t, a, n, r) : (a[n] = i);
    },
    e,
    t,
    !1,
  ),
    kx(t, a, r);
}
function Ws(a) {
  return ue(a[0] - 1) && ue(a[1]) && ue(a[2]) && ue(a[3] - 1);
}
function Mx(a) {
  return ue(a[4]) && ue(a[5]);
}
function Ti(a, e, t) {
  if (e && !(Mx(e) && Ws(e))) {
    var r = t ? 10 : 1e4;
    a.transform = Ws(e) ? 'translate(' + va(e[4] * r) / r + ' ' + va(e[5] * r) / r + ')' : uc(e);
  }
}
function Fs(a, e, t) {
  for (var r = a.points, n = [], i = 0; i < r.length; i++)
    n.push(va(r[i][0] * t) / t), n.push(va(r[i][1] * t) / t);
  e.points = n.join(' ');
}
function $s(a) {
  return !a.smooth;
}
function Cx(a) {
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
var Lx = { circle: [Cx(['cx', 'cy', 'r'])], polyline: [Fs, $s], polygon: [Fs, $s] };
function Ix(a) {
  for (var e = a.animators, t = 0; t < e.length; t++) if (e[t].targetName === 'shape') return !0;
  return !1;
}
function th(a, e) {
  var t = a.style,
    r = a.shape,
    n = Lx[a.type],
    i = {},
    o = e.animation,
    s = 'path',
    l = a.style.strokePercent,
    u = (e.compress && El(a)) || 4;
  if (n && !e.willUpdate && !(n[1] && !n[1](r)) && !(o && Ix(a)) && !(l < 1)) {
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
      (p || (p = d.__svgPathBuilder = new Yu()),
      p.reset(u),
      c.rebuildPath(p, l),
      p.generateStr(),
      (d.__svgPathVersion = f),
      (d.__svgPathStrokePercent = l)),
      (i.d = p.getStr());
  }
  return Ti(i, a.transform), Di(i, t, a, e), e.animation && br(a, i, e), ct(s, a.id + '', i);
}
function Px(a, e) {
  var t = a.style,
    r = t.image;
  if ((r && !at(r) && (Ju(r) ? (r = r.src) : Qu(r) && (r = r.toDataURL())), !!r)) {
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
function Ex(a, e) {
  var t = a.style,
    r = t.text;
  if ((r != null && (r += ''), !(!r || isNaN(t.x) || isNaN(t.y)))) {
    var n = t.font || ac,
      i = t.x || 0,
      o = rc(t.y || 0, nc(n), t.textBaseline),
      s = ic[t.textAlign] || t.textAlign,
      l = { 'dominant-baseline': 'central', 'text-anchor': s };
    if (oc(t)) {
      var u = '',
        h = t.fontStyle,
        v = sc(t.fontSize);
      if (!parseFloat(v)) return;
      var c = t.fontFamily || lc,
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
function Hs(a, e) {
  if (a instanceof Bt) return th(a, e);
  if (a instanceof ye) return Px(a, e);
  if (a instanceof Kv) return Ex(a, e);
}
function kx(a, e, t) {
  var r = a.style;
  if (hc(r)) {
    var n = vc(a),
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
function eh(a, e, t, r) {
  var n = a[t],
    i,
    o = { gradientUnits: n.global ? 'userSpaceOnUse' : 'objectBoundingBox' };
  if (jv(n)) (i = 'linearGradient'), (o.x1 = n.x), (o.y1 = n.y), (o.x2 = n.x2), (o.y2 = n.y2);
  else if (Jv(n))
    (i = 'radialGradient'), (o.cx = Tt(n.x, 0.5)), (o.cy = Tt(n.y, 0.5)), (o.r = Tt(n.r, 0.5));
  else return;
  for (var s = n.colorStops, l = [], u = 0, h = s.length; u < h; ++u) {
    var v = Qv(s[u].offset) * 100 + '%',
      c = s[u].color,
      f = ia(c),
      d = f.color,
      p = f.opacity,
      g = { offset: v };
    (g['stop-color'] = d), p < 1 && (g['stop-opacity'] = p), l.push(ct('stop', u + '', g));
  }
  var y = ct(i, '', o, l),
    m = Ai(y),
    S = r.gradientCache,
    x = S[m];
  x ||
    ((x = r.zrId + '-g' + r.gradientIdx++), (S[m] = x), (o.id = x), (r.defs[x] = ct(i, x, o, l))),
    (e[t] = yr(x));
}
function ah(a, e, t, r) {
  var n = a.style[t],
    i = a.getBoundingRect(),
    o = {},
    s = n.repeat,
    l = s === 'no-repeat',
    u = s === 'repeat-x',
    h = s === 'repeat-y',
    v;
  if (tc(n)) {
    var c = n.imageWidth,
      f = n.imageHeight,
      d = void 0,
      p = n.image;
    if (
      (at(p) ? (d = p) : Ju(p) ? (d = p.src) : Qu(p) && (d = p.toDataURL()),
      typeof Image == 'undefined')
    ) {
      var g = 'Image width/height must been given explictly in svg-ssr renderer.';
      Sn(c, g), Sn(f, g);
    } else if (c == null || f == null) {
      var y = function (D, T) {
          if (D) {
            var L = D.elm,
              P = c || T.width,
              C = f || T.height;
            D.tag === 'pattern' &&
              (u ? ((C = 1), (P /= i.width)) : h && ((P = 1), (C /= i.height))),
              (D.attrs.width = P),
              (D.attrs.height = C),
              L && (L.setAttribute('width', P), L.setAttribute('height', C));
          }
        },
        m = ec(d, null, a, function (D) {
          l || y(w, D), y(v, D);
        });
      m && m.width && m.height && ((c = c || m.width), (f = f || m.height));
    }
    (v = ct('image', 'img', { href: d, width: c, height: f })), (o.width = c), (o.height = f);
  } else n.svgElement && ((v = Pt(n.svgElement)), (o.width = n.svgWidth), (o.height = n.svgHeight));
  if (v) {
    var S, x;
    l
      ? (S = x = 1)
      : u
      ? ((x = 1), (S = o.width / i.width))
      : h
      ? ((S = 1), (x = o.height / i.height))
      : (o.patternUnits = 'userSpaceOnUse'),
      S != null && !isNaN(S) && (o.width = S),
      x != null && !isNaN(x) && (o.height = x);
    var b = Pl(n);
    b && (o.patternTransform = b);
    var w = ct('pattern', '', o, [v]),
      _ = Ai(w),
      A = r.patternCache,
      M = A[_];
    M ||
      ((M = r.zrId + '-p' + r.patternIdx++),
      (A[_] = M),
      (o.id = M),
      (w = r.defs[M] = ct('pattern', M, o, [v]))),
      (e[t] = yr(M));
  }
}
function Rx(a, e, t) {
  var r = t.clipPathCache,
    n = t.defs,
    i = r[a.id];
  if (!i) {
    i = t.zrId + '-c' + t.clipPathIdx++;
    var o = { id: i };
    (r[a.id] = i), (n[i] = ct('clipPath', i, o, [th(a, t)]));
  }
  e['clip-path'] = yr(i);
}
function Zs(a) {
  return document.createTextNode(a);
}
function De(a, e, t) {
  a.insertBefore(e, t);
}
function Us(a, e) {
  a.removeChild(e);
}
function Ys(a, e) {
  a.appendChild(e);
}
function rh(a) {
  return a.parentNode;
}
function nh(a) {
  return a.nextSibling;
}
function fn(a, e) {
  a.textContent = e;
}
var Xs = 58,
  Nx = 120,
  Vx = ct('', '');
function Bn(a) {
  return a === void 0;
}
function qt(a) {
  return a !== void 0;
}
function zx(a, e, t) {
  for (var r = {}, n = e; n <= t; ++n) {
    var i = a[n].key;
    i !== void 0 && (r[i] = n);
  }
  return r;
}
function Je(a, e) {
  var t = a.key === e.key,
    r = a.tag === e.tag;
  return r && t;
}
function ca(a) {
  var e,
    t = a.children,
    r = a.tag;
  if (qt(r)) {
    var n = (a.elm = Ku(r));
    if ((Mi(Vx, a), F(t)))
      for (e = 0; e < t.length; ++e) {
        var i = t[e];
        i != null && Ys(n, ca(i));
      }
    else qt(a.text) && !Le(a.text) && Ys(n, Zs(a.text));
  } else a.elm = Zs(a.text);
  return a.elm;
}
function ih(a, e, t, r, n) {
  for (; r <= n; ++r) {
    var i = t[r];
    i != null && De(a, ca(i), e);
  }
}
function Qa(a, e, t, r) {
  for (; t <= r; ++t) {
    var n = e[t];
    if (n != null)
      if (qt(n.tag)) {
        var i = rh(n.elm);
        Us(i, n.elm);
      } else Us(a, n.elm);
  }
}
function Mi(a, e) {
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
          : t.charCodeAt(0) !== Nx
          ? r.setAttribute(t, o)
          : t === 'xmlns:xlink' || t === 'xmlns'
          ? r.setAttributeNS(mx, t, o)
          : t.charCodeAt(3) === Xs
          ? r.setAttributeNS(Sx, t, o)
          : t.charCodeAt(5) === Xs
          ? r.setAttributeNS(qu, t, o)
          : r.setAttribute(t, o));
    }
    for (t in n) t in i || r.removeAttribute(t);
  }
}
function Bx(a, e, t) {
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
      : Je(o, u)
      ? (Re(o, u), (o = e[++r]), (u = t[++n]))
      : Je(s, h)
      ? (Re(s, h), (s = e[--i]), (h = t[--l]))
      : Je(o, h)
      ? (Re(o, h), De(a, o.elm, nh(s.elm)), (o = e[++r]), (h = t[--l]))
      : Je(s, u)
      ? (Re(s, u), De(a, s.elm, o.elm), (s = e[--i]), (u = t[++n]))
      : (Bn(v) && (v = zx(e, r, i)),
        (c = v[u.key]),
        Bn(c)
          ? De(a, ca(u), o.elm)
          : ((f = e[c]),
            f.tag !== u.tag
              ? De(a, ca(u), o.elm)
              : (Re(f, u), (e[c] = void 0), De(a, f.elm, o.elm))),
        (u = t[++n]));
  (r <= i || n <= l) &&
    (r > i ? ((d = t[l + 1] == null ? null : t[l + 1].elm), ih(a, d, t, n, l)) : Qa(a, e, r, i));
}
function Re(a, e) {
  var t = (e.elm = a.elm),
    r = a.children,
    n = e.children;
  a !== e &&
    (Mi(a, e),
    Bn(e.text)
      ? qt(r) && qt(n)
        ? r !== n && Bx(t, r, n)
        : qt(n)
        ? (qt(a.text) && fn(t, ''), ih(t, null, n, 0, n.length - 1))
        : qt(r)
        ? Qa(t, r, 0, r.length - 1)
        : qt(a.text) && fn(t, '')
      : a.text !== e.text && (qt(r) && Qa(t, r, 0, r.length - 1), fn(t, e.text)));
}
function Gx(a, e) {
  if (Je(a, e)) Re(a, e);
  else {
    var t = a.elm,
      r = rh(t);
    ca(e), r !== null && (De(r, e.elm, nh(t)), Qa(r, [a], 0, 0));
  }
  return e;
}
var Ox = 0,
  Wx = (function () {
    function a(e, t, r) {
      if (
        ((this.type = 'svg'),
        (this.refreshHover = qs()),
        (this.configLayer = qs()),
        (this.storage = t),
        (this._opts = r = W({}, r)),
        (this.root = e),
        (this._id = 'zr' + Ox++),
        (this._oldVNode = Bs(r.width, r.height)),
        e && !r.ssr)
      ) {
        var n = (this._viewport = document.createElement('div'));
        n.style.cssText = 'position:relative;overflow:hidden';
        var i = (this._svgDom = this._oldVNode.elm = Ku('svg'));
        Mi(null, this._oldVNode), n.appendChild(i), e.appendChild(n);
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
            Gx(this._oldVNode, e),
            (this._oldVNode = e);
        }
      }),
      (a.prototype.renderOneToVNode = function (e) {
        return Hs(e, zn(this._id));
      }),
      (a.prototype.renderToVNode = function (e) {
        e = e || {};
        var t = this.storage.getDisplayList(!0),
          r = this._width,
          n = this._height,
          i = zn(this._id);
        (i.animation = e.animation), (i.willUpdate = e.willUpdate), (i.compress = e.compress);
        var o = [],
          s = (this._bgVNode = Fx(r, n, this._backgroundColor, i));
        s && o.push(s);
        var l = e.compress ? null : (this._mainVNode = ct('g', 'main', {}, []));
        this._paintList(t, i, l ? l.children : o), l && o.push(l);
        var u = O(pt(i.defs), function (c) {
          return i.defs[c];
        });
        if ((u.length && o.push(ct('defs', 'defs', {}, u)), e.animation)) {
          var h = wx(i.cssNodes, i.cssAnims, { newline: !0 });
          if (h) {
            var v = ct('style', 'stl', {}, [], h);
            o.push(v);
          }
        }
        return Bs(r, n, o, e.useViewBox);
      }),
      (a.prototype.renderToString = function (e) {
        return (
          (e = e || {}),
          Ai(
            this.renderToVNode({
              animation: Tt(e.cssAnimation, !0),
              willUpdate: !1,
              compress: !0,
              useViewBox: Tt(e.useViewBox, !0),
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
              Rx(c[y], m, t);
              var S = ct('g', 'clip-g-' + u++, m, []);
              (s ? s.children : r).push(S), (i[o++] = S), (s = S);
            }
            l = c;
            var x = Hs(v, t);
            x && (s ? s.children : r).push(x);
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
            (e = Xi(n, 0, r)),
            (t = Xi(n, 1, r)),
            (i.style.display = '')),
          this._width !== e || this._height !== t)
        ) {
          if (((this._width = e), (this._height = t), i)) {
            var o = i.style;
            (o.width = e + 'px'), (o.height = t + 'px');
          }
          if (Jn(this._backgroundColor)) this.refresh();
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
          ? ((t = cc(t)), t && r + 'base64,' + t)
          : r + 'charset=UTF-8,' + encodeURIComponent(t);
      }),
      a
    );
  })();
function qs(a) {
  return function () {};
}
function Fx(a, e, t, r) {
  var n;
  if (t && t !== 'none')
    if (((n = ct('rect', 'bg', { width: a, height: e, x: '0', y: '0', id: '0' })), kl(t)))
      eh({ fill: t }, n.attrs, 'fill', r);
    else if (Jn(t))
      ah(
        {
          style: { fill: t },
          dirty: Be,
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
const $x = Wx;
function Hx(a) {
  a.registerPainter('svg', $x);
}
Y([fc]);
Y([Hx]);
Y([dc, pc, gc, Yg, ty, yc, Py, fm, Nm, Hm, e0, d0, W0, t1, x1, M1, Z1, eS, dS, wS, NS, hx]);
Y(mc);
Y(ff);
Y(Sc);
Y(Of);
Y(Fl);
Y(wd);
Y(Wd);
Y(xc);
Y(bc);
Y(Fn);
Y(ip);
Y(wc);
Y(xp);
Y(Ip);
Y(Hp);
Y(Jp);
Y(_c);
Y(xg);
Y(ru);
Y(nu);
Y(Ac);
Y(Dc);
Y(Tc);
Y(Dg);
Y(Bg);
Y(Mc);
Y(Cc);
Y(Lc);
const Ra = [
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
const Zx = { class: 'page-container' },
  Ux = oh({
    __name: 'index',
    setup(a) {
      const e = sh(null),
        { setOptions: t } = Ic(e),
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
              data: Ra,
            },
          ],
        };
      Ra.sort(function (s, l) {
        return s.value - l.value;
      });
      const n = {
        grid: { left: '1%', right: '10%', top: '5%', bottom: 0, containLabel: !0 },
        xAxis: { type: 'value' },
        yAxis: {
          type: 'category',
          axisLabel: { rotate: 30 },
          data: Ra.map(function (s) {
            return s.name;
          }),
        },
        animationDurationUpdate: 1e3,
        series: {
          type: 'bar',
          id: 'population',
          data: Ra.map(function (s) {
            return s.value;
          }),
          universalTransition: !0,
        },
      };
      let i = r;
      lh(() =>
        Ii(this, null, function* () {
          const s = yield (yield uh(() => import('./china-77152183.js'), [])).default;
          Pc('china', s),
            t(r),
            hh(
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
        vh(),
        ch('div', Zx, [fh('div', { ref_key: 'chartRef', ref: e, class: 'chartRef' }, null, 512)])
      );
    },
  });
const jx = Ec(Ux, [['__scopeId', 'data-v-f7db7d92']]);
export { jx as default };