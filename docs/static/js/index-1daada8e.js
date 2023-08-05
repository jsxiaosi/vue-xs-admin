var ie = Object.defineProperty,
  se = Object.defineProperties;
var re = Object.getOwnPropertyDescriptors;
var j = Object.getOwnPropertySymbols;
var le = Object.prototype.hasOwnProperty,
  ae = Object.prototype.propertyIsEnumerable;
var M = (l, t, n) =>
    t in l ? ie(l, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (l[t] = n),
  _ = (l, t) => {
    for (var n in t || (t = {})) le.call(t, n) && M(l, n, t[n]);
    if (j) for (var n of j(t)) ae.call(t, n) && M(l, n, t[n]);
    return l;
  },
  v = (l, t) => se(l, re(t));
var N = (l, t, n) => (M(l, typeof t != 'symbol' ? t + '' : t, n), n);
import {
  d as oe,
  j as ce,
  z as he,
  a as ue,
  o as pe,
  c as fe,
  f as ge,
  g as de,
} from './index-4053894a.js';
import { _ as ke } from './plugin-vueexport-helper-c27b6911.js';
function G() {
  return {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: '',
    highlight: null,
    hooks: null,
    langPrefix: 'language-',
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1,
  };
}
let E = G();
function me(l) {
  E = l;
}
const J = /[&<>"']/,
  xe = new RegExp(J.source, 'g'),
  K = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  we = new RegExp(K.source, 'g'),
  be = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
  Q = (l) => be[l];
function b(l, t) {
  if (t) {
    if (J.test(l)) return l.replace(xe, Q);
  } else if (K.test(l)) return l.replace(we, Q);
  return l;
}
const _e = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Y(l) {
  return l.replace(
    _e,
    (t, n) => (
      (n = n.toLowerCase()),
      n === 'colon'
        ? ':'
        : n.charAt(0) === '#'
        ? n.charAt(1) === 'x'
          ? String.fromCharCode(parseInt(n.substring(2), 16))
          : String.fromCharCode(+n.substring(1))
        : ''
    ),
  );
}
const ye = /(^|[^\[])\^/g;
function m(l, t) {
  (l = typeof l == 'string' ? l : l.source), (t = t || '');
  const n = {
    replace: (e, i) => ((i = i.source || i), (i = i.replace(ye, '$1')), (l = l.replace(e, i)), n),
    getRegex: () => new RegExp(l, t),
  };
  return n;
}
const $e = /[^\w:]/g,
  ze = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function H(l, t, n) {
  if (l) {
    let e;
    try {
      e = decodeURIComponent(Y(n)).replace($e, '').toLowerCase();
    } catch (i) {
      return null;
    }
    if (e.indexOf('javascript:') === 0 || e.indexOf('vbscript:') === 0 || e.indexOf('data:') === 0)
      return null;
  }
  t && !ze.test(n) && (n = Ae(t, n));
  try {
    n = encodeURI(n).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return n;
}
const B = {},
  Se = /^[^:]+:\/*[^/]*$/,
  Te = /^([^:]+:)[\s\S]*$/,
  Re = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function Ae(l, t) {
  B[' ' + l] || (Se.test(l) ? (B[' ' + l] = l + '/') : (B[' ' + l] = Z(l, '/', !0))),
    (l = B[' ' + l]);
  const n = l.indexOf(':') === -1;
  return t.substring(0, 2) === '//'
    ? n
      ? t
      : l.replace(Te, '$1') + t
    : t.charAt(0) === '/'
    ? n
      ? t
      : l.replace(Re, '$1') + t
    : l + t;
}
const q = { exec: function () {} };
function V(l, t) {
  const n = l.replace(/\|/g, (s, r, a) => {
      let c = !1,
        d = r;
      for (; --d >= 0 && a[d] === '\\'; ) c = !c;
      return c ? '|' : ' |';
    }),
    e = n.split(/ \|/);
  let i = 0;
  if ((e[0].trim() || e.shift(), e.length > 0 && !e[e.length - 1].trim() && e.pop(), e.length > t))
    e.splice(t);
  else for (; e.length < t; ) e.push('');
  for (; i < e.length; i++) e[i] = e[i].trim().replace(/\\\|/g, '|');
  return e;
}
function Z(l, t, n) {
  const e = l.length;
  if (e === 0) return '';
  let i = 0;
  for (; i < e; ) {
    const s = l.charAt(e - i - 1);
    if (s === t && !n) i++;
    else if (s !== t && n) i++;
    else break;
  }
  return l.slice(0, e - i);
}
function Ie(l, t) {
  if (l.indexOf(t[1]) === -1) return -1;
  const n = l.length;
  let e = 0,
    i = 0;
  for (; i < n; i++)
    if (l[i] === '\\') i++;
    else if (l[i] === t[0]) e++;
    else if (l[i] === t[1] && (e--, e < 0)) return i;
  return -1;
}
function Ee(l) {
  l &&
    l.sanitize &&
    !l.silent &&
    console.warn(
      'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options',
    );
}
function F(l, t) {
  if (t < 1) return '';
  let n = '';
  for (; t > 1; ) t & 1 && (n += l), (t >>= 1), (l += l);
  return n + l;
}
function X(l, t, n, e) {
  const i = t.href,
    s = t.title ? b(t.title) : null,
    r = l[1].replace(/\\([\[\]])/g, '$1');
  if (l[0].charAt(0) !== '!') {
    e.state.inLink = !0;
    const a = { type: 'link', raw: n, href: i, title: s, text: r, tokens: e.inlineTokens(r) };
    return (e.state.inLink = !1), a;
  }
  return { type: 'image', raw: n, href: i, title: s, text: b(r) };
}
function Ce(l, t) {
  const n = l.match(/^(\s+)(?:```)/);
  if (n === null) return t;
  const e = n[1];
  return t
    .split(
      `
`,
    )
    .map((i) => {
      const s = i.match(/^\s+/);
      if (s === null) return i;
      const [r] = s;
      return r.length >= e.length ? i.slice(e.length) : i;
    }).join(`
`);
}
class U {
  constructor(t) {
    this.options = t || E;
  }
  space(t) {
    const n = this.rules.block.newline.exec(t);
    if (n && n[0].length > 0) return { type: 'space', raw: n[0] };
  }
  code(t) {
    const n = this.rules.block.code.exec(t);
    if (n) {
      const e = n[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: n[0],
        codeBlockStyle: 'indented',
        text: this.options.pedantic
          ? e
          : Z(
              e,
              `
`,
            ),
      };
    }
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t);
    if (n) {
      const e = n[0],
        i = Ce(e, n[3] || '');
      return {
        type: 'code',
        raw: e,
        lang: n[2] ? n[2].trim().replace(this.rules.inline._escapes, '$1') : n[2],
        text: i,
      };
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t);
    if (n) {
      let e = n[2].trim();
      if (/#$/.test(e)) {
        const i = Z(e, '#');
        (this.options.pedantic || !i || / $/.test(i)) && (e = i.trim());
      }
      return {
        type: 'heading',
        raw: n[0],
        depth: n[1].length,
        text: e,
        tokens: this.lexer.inline(e),
      };
    }
  }
  hr(t) {
    const n = this.rules.block.hr.exec(t);
    if (n) return { type: 'hr', raw: n[0] };
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t);
    if (n) {
      const e = n[0].replace(/^ *>[ \t]?/gm, ''),
        i = this.lexer.state.top;
      this.lexer.state.top = !0;
      const s = this.lexer.blockTokens(e);
      return (this.lexer.state.top = i), { type: 'blockquote', raw: n[0], tokens: s, text: e };
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let e,
        i,
        s,
        r,
        a,
        c,
        d,
        f,
        g,
        k,
        h,
        S,
        y = n[1].trim();
      const R = y.length > 1,
        x = {
          type: 'list',
          raw: '',
          ordered: R,
          start: R ? +y.slice(0, -1) : '',
          loose: !1,
          items: [],
        };
      (y = R ? `\\d{1,9}\\${y.slice(-1)}` : `\\${y}`),
        this.options.pedantic && (y = R ? y : '[*+-]');
      const w = new RegExp(`^( {0,3}${y})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; t && ((S = !1), !(!(n = w.exec(t)) || this.rules.block.hr.test(t))); ) {
        if (
          ((e = n[0]),
          (t = t.substring(e.length)),
          (f = n[2]
            .split(
              `
`,
              1,
            )[0]
            .replace(/^\t+/, (T) => ' '.repeat(3 * T.length))),
          (g = t.split(
            `
`,
            1,
          )[0]),
          this.options.pedantic
            ? ((r = 2), (h = f.trimLeft()))
            : ((r = n[2].search(/[^ ]/)),
              (r = r > 4 ? 1 : r),
              (h = f.slice(r)),
              (r += n[1].length)),
          (c = !1),
          !f &&
            /^ *$/.test(g) &&
            ((e +=
              g +
              `
`),
            (t = t.substring(g.length + 1)),
            (S = !0)),
          !S)
        ) {
          const T = new RegExp(
              `^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`,
            ),
            $ = new RegExp(
              `^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
            ),
            z = new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`),
            L = new RegExp(`^ {0,${Math.min(3, r - 1)}}#`);
          for (
            ;
            t &&
            ((k = t.split(
              `
`,
              1,
            )[0]),
            (g = k),
            this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
            !(z.test(g) || L.test(g) || T.test(g) || $.test(t)));

          ) {
            if (g.search(/[^ ]/) >= r || !g.trim())
              h +=
                `
` + g.slice(r);
            else {
              if (c || f.search(/[^ ]/) >= 4 || z.test(f) || L.test(f) || $.test(f)) break;
              h +=
                `
` + g;
            }
            !c && !g.trim() && (c = !0),
              (e +=
                k +
                `
`),
              (t = t.substring(k.length + 1)),
              (f = g.slice(r));
          }
        }
        x.loose || (d ? (x.loose = !0) : /\n *\n *$/.test(e) && (d = !0)),
          this.options.gfm &&
            ((i = /^\[[ xX]\] /.exec(h)),
            i && ((s = i[0] !== '[ ] '), (h = h.replace(/^\[[ xX]\] +/, '')))),
          x.items.push({ type: 'list_item', raw: e, task: !!i, checked: s, loose: !1, text: h }),
          (x.raw += e);
      }
      (x.items[x.items.length - 1].raw = e.trimRight()),
        (x.items[x.items.length - 1].text = h.trimRight()),
        (x.raw = x.raw.trimRight());
      const C = x.items.length;
      for (a = 0; a < C; a++)
        if (
          ((this.lexer.state.top = !1),
          (x.items[a].tokens = this.lexer.blockTokens(x.items[a].text, [])),
          !x.loose)
        ) {
          const T = x.items[a].tokens.filter((z) => z.type === 'space'),
            $ = T.length > 0 && T.some((z) => /\n.*\n/.test(z.raw));
          x.loose = $;
        }
      if (x.loose) for (a = 0; a < C; a++) x.items[a].loose = !0;
      return x;
    }
  }
  html(t) {
    const n = this.rules.block.html.exec(t);
    if (n) {
      const e = {
        type: 'html',
        raw: n[0],
        pre: !this.options.sanitizer && (n[1] === 'pre' || n[1] === 'script' || n[1] === 'style'),
        text: n[0],
      };
      if (this.options.sanitize) {
        const i = this.options.sanitizer ? this.options.sanitizer(n[0]) : b(n[0]);
        (e.type = 'paragraph'), (e.text = i), (e.tokens = this.lexer.inline(i));
      }
      return e;
    }
  }
  def(t) {
    const n = this.rules.block.def.exec(t);
    if (n) {
      const e = n[1].toLowerCase().replace(/\s+/g, ' '),
        i = n[2] ? n[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline._escapes, '$1') : '',
        s = n[3]
          ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline._escapes, '$1')
          : n[3];
      return { type: 'def', tag: e, raw: n[0], href: i, title: s };
    }
  }
  table(t) {
    const n = this.rules.block.table.exec(t);
    if (n) {
      const e = {
        type: 'table',
        header: V(n[1]).map((i) => ({ text: i })),
        align: n[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows:
          n[3] && n[3].trim()
            ? n[3].replace(/\n[ \t]*$/, '').split(`
`)
            : [],
      };
      if (e.header.length === e.align.length) {
        e.raw = n[0];
        let i = e.align.length,
          s,
          r,
          a,
          c;
        for (s = 0; s < i; s++)
          /^ *-+: *$/.test(e.align[s])
            ? (e.align[s] = 'right')
            : /^ *:-+: *$/.test(e.align[s])
            ? (e.align[s] = 'center')
            : /^ *:-+ *$/.test(e.align[s])
            ? (e.align[s] = 'left')
            : (e.align[s] = null);
        for (i = e.rows.length, s = 0; s < i; s++)
          e.rows[s] = V(e.rows[s], e.header.length).map((d) => ({ text: d }));
        for (i = e.header.length, r = 0; r < i; r++)
          e.header[r].tokens = this.lexer.inline(e.header[r].text);
        for (i = e.rows.length, r = 0; r < i; r++)
          for (c = e.rows[r], a = 0; a < c.length; a++) c[a].tokens = this.lexer.inline(c[a].text);
        return e;
      }
    }
  }
  lheading(t) {
    const n = this.rules.block.lheading.exec(t);
    if (n)
      return {
        type: 'heading',
        raw: n[0],
        depth: n[2].charAt(0) === '=' ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1]),
      };
  }
  paragraph(t) {
    const n = this.rules.block.paragraph.exec(t);
    if (n) {
      const e =
        n[1].charAt(n[1].length - 1) ===
        `
`
          ? n[1].slice(0, -1)
          : n[1];
      return { type: 'paragraph', raw: n[0], text: e, tokens: this.lexer.inline(e) };
    }
  }
  text(t) {
    const n = this.rules.block.text.exec(t);
    if (n) return { type: 'text', raw: n[0], text: n[0], tokens: this.lexer.inline(n[0]) };
  }
  escape(t) {
    const n = this.rules.inline.escape.exec(t);
    if (n) return { type: 'escape', raw: n[0], text: b(n[1]) };
  }
  tag(t) {
    const n = this.rules.inline.tag.exec(t);
    if (n)
      return (
        !this.lexer.state.inLink && /^<a /i.test(n[0])
          ? (this.lexer.state.inLink = !0)
          : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1),
        !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0])
          ? (this.lexer.state.inRawBlock = !0)
          : this.lexer.state.inRawBlock &&
            /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) &&
            (this.lexer.state.inRawBlock = !1),
        {
          type: this.options.sanitize ? 'text' : 'html',
          raw: n[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize
            ? this.options.sanitizer
              ? this.options.sanitizer(n[0])
              : b(n[0])
            : n[0],
        }
      );
  }
  link(t) {
    const n = this.rules.inline.link.exec(t);
    if (n) {
      const e = n[2].trim();
      if (!this.options.pedantic && /^</.test(e)) {
        if (!/>$/.test(e)) return;
        const r = Z(e.slice(0, -1), '\\');
        if ((e.length - r.length) % 2 === 0) return;
      } else {
        const r = Ie(n[2], '()');
        if (r > -1) {
          const c = (n[0].indexOf('!') === 0 ? 5 : 4) + n[1].length + r;
          (n[2] = n[2].substring(0, r)), (n[0] = n[0].substring(0, c).trim()), (n[3] = '');
        }
      }
      let i = n[2],
        s = '';
      if (this.options.pedantic) {
        const r = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
        r && ((i = r[1]), (s = r[3]));
      } else s = n[3] ? n[3].slice(1, -1) : '';
      return (
        (i = i.trim()),
        /^</.test(i) &&
          (this.options.pedantic && !/>$/.test(e) ? (i = i.slice(1)) : (i = i.slice(1, -1))),
        X(
          n,
          {
            href: i && i.replace(this.rules.inline._escapes, '$1'),
            title: s && s.replace(this.rules.inline._escapes, '$1'),
          },
          n[0],
          this.lexer,
        )
      );
    }
  }
  reflink(t, n) {
    let e;
    if ((e = this.rules.inline.reflink.exec(t)) || (e = this.rules.inline.nolink.exec(t))) {
      let i = (e[2] || e[1]).replace(/\s+/g, ' ');
      if (((i = n[i.toLowerCase()]), !i)) {
        const s = e[0].charAt(0);
        return { type: 'text', raw: s, text: s };
      }
      return X(e, i, e[0], this.lexer);
    }
  }
  emStrong(t, n, e = '') {
    let i = this.rules.inline.emStrong.lDelim.exec(t);
    if (!i || (i[3] && e.match(/[\p{L}\p{N}]/u))) return;
    const s = i[1] || i[2] || '';
    if (!s || (s && (e === '' || this.rules.inline.punctuation.exec(e)))) {
      const r = i[0].length - 1;
      let a,
        c,
        d = r,
        f = 0;
      const g =
        i[0][0] === '*'
          ? this.rules.inline.emStrong.rDelimAst
          : this.rules.inline.emStrong.rDelimUnd;
      for (g.lastIndex = 0, n = n.slice(-1 * t.length + r); (i = g.exec(n)) != null; ) {
        if (((a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]), !a)) continue;
        if (((c = a.length), i[3] || i[4])) {
          d += c;
          continue;
        } else if ((i[5] || i[6]) && r % 3 && !((r + c) % 3)) {
          f += c;
          continue;
        }
        if (((d -= c), d > 0)) continue;
        c = Math.min(c, c + d + f);
        const k = t.slice(0, r + i.index + (i[0].length - a.length) + c);
        if (Math.min(r, c) % 2) {
          const S = k.slice(1, -1);
          return { type: 'em', raw: k, text: S, tokens: this.lexer.inlineTokens(S) };
        }
        const h = k.slice(2, -2);
        return { type: 'strong', raw: k, text: h, tokens: this.lexer.inlineTokens(h) };
      }
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let e = n[2].replace(/\n/g, ' ');
      const i = /[^ ]/.test(e),
        s = /^ /.test(e) && / $/.test(e);
      return (
        i && s && (e = e.substring(1, e.length - 1)),
        (e = b(e, !0)),
        { type: 'codespan', raw: n[0], text: e }
      );
    }
  }
  br(t) {
    const n = this.rules.inline.br.exec(t);
    if (n) return { type: 'br', raw: n[0] };
  }
  del(t) {
    const n = this.rules.inline.del.exec(t);
    if (n) return { type: 'del', raw: n[0], text: n[2], tokens: this.lexer.inlineTokens(n[2]) };
  }
  autolink(t, n) {
    const e = this.rules.inline.autolink.exec(t);
    if (e) {
      let i, s;
      return (
        e[2] === '@'
          ? ((i = b(this.options.mangle ? n(e[1]) : e[1])), (s = 'mailto:' + i))
          : ((i = b(e[1])), (s = i)),
        { type: 'link', raw: e[0], text: i, href: s, tokens: [{ type: 'text', raw: i, text: i }] }
      );
    }
  }
  url(t, n) {
    let e;
    if ((e = this.rules.inline.url.exec(t))) {
      let i, s;
      if (e[2] === '@') (i = b(this.options.mangle ? n(e[0]) : e[0])), (s = 'mailto:' + i);
      else {
        let r;
        do (r = e[0]), (e[0] = this.rules.inline._backpedal.exec(e[0])[0]);
        while (r !== e[0]);
        (i = b(e[0])), e[1] === 'www.' ? (s = 'http://' + e[0]) : (s = e[0]);
      }
      return {
        type: 'link',
        raw: e[0],
        text: i,
        href: s,
        tokens: [{ type: 'text', raw: i, text: i }],
      };
    }
  }
  inlineText(t, n) {
    const e = this.rules.inline.text.exec(t);
    if (e) {
      let i;
      return (
        this.lexer.state.inRawBlock
          ? (i = this.options.sanitize
              ? this.options.sanitizer
                ? this.options.sanitizer(e[0])
                : b(e[0])
              : e[0])
          : (i = b(this.options.smartypants ? n(e[0]) : e[0])),
        { type: 'text', raw: e[0], text: i }
      );
    }
  }
}
const u = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences:
    /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: q,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
};
u._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
u._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
u.def = m(u.def).replace('label', u._label).replace('title', u._title).getRegex();
u.bullet = /(?:[*+-]|\d{1,9}[.)])/;
u.listItemStart = m(/^( *)(bull) */)
  .replace('bull', u.bullet)
  .getRegex();
u.list = m(u.list)
  .replace(/bull/g, u.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + u.def.source + ')')
  .getRegex();
u._tag =
  'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul';
u._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
u.html = m(u.html, 'i')
  .replace('comment', u._comment)
  .replace('tag', u._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();
u.paragraph = m(u._paragraph)
  .replace('hr', u.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '')
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', u._tag)
  .getRegex();
u.blockquote = m(u.blockquote).replace('paragraph', u.paragraph).getRegex();
u.normal = _({}, u);
u.gfm = v(_({}, u.normal), {
  table:
    '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
});
u.gfm.table = m(u.gfm.table)
  .replace('hr', u.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', u._tag)
  .getRegex();
u.gfm.paragraph = m(u._paragraph)
  .replace('hr', u.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '')
  .replace('table', u.gfm.table)
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', u._tag)
  .getRegex();
u.pedantic = v(_({}, u.normal), {
  html: m(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
  )
    .replace('comment', u._comment)
    .replace(
      /tag/g,
      '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
    )
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: q,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: m(u.normal._paragraph)
    .replace('hr', u.hr)
    .replace(
      'heading',
      ` *#{1,6} *[^
]`,
    )
    .replace('lheading', u.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex(),
});
const o = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: q,
  tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst:
      /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
    rDelimUnd:
      /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: q,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
};
o._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
o.punctuation = m(o.punctuation)
  .replace(/punctuation/g, o._punctuation)
  .getRegex();
o.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
o.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
o._comment = m(u._comment).replace('(?:-->|$)', '-->').getRegex();
o.emStrong.lDelim = m(o.emStrong.lDelim).replace(/punct/g, o._punctuation).getRegex();
o.emStrong.rDelimAst = m(o.emStrong.rDelimAst, 'g').replace(/punct/g, o._punctuation).getRegex();
o.emStrong.rDelimUnd = m(o.emStrong.rDelimUnd, 'g').replace(/punct/g, o._punctuation).getRegex();
o._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
o._email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
o.autolink = m(o.autolink).replace('scheme', o._scheme).replace('email', o._email).getRegex();
o._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
o.tag = m(o.tag).replace('comment', o._comment).replace('attribute', o._attribute).getRegex();
o._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
o._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
o._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
o.link = m(o.link)
  .replace('label', o._label)
  .replace('href', o._href)
  .replace('title', o._title)
  .getRegex();
o.reflink = m(o.reflink).replace('label', o._label).replace('ref', u._label).getRegex();
o.nolink = m(o.nolink).replace('ref', u._label).getRegex();
o.reflinkSearch = m(o.reflinkSearch, 'g')
  .replace('reflink', o.reflink)
  .replace('nolink', o.nolink)
  .getRegex();
o.normal = _({}, o);
o.pedantic = v(_({}, o.normal), {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g,
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g,
  },
  link: m(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', o._label)
    .getRegex(),
  reflink: m(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', o._label)
    .getRegex(),
});
o.gfm = v(_({}, o.normal), {
  escape: m(o.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
});
o.gfm.url = m(o.gfm.url, 'i').replace('email', o.gfm._extended_email).getRegex();
o.breaks = v(_({}, o.gfm), {
  br: m(o.br).replace('{2,}', '*').getRegex(),
  text: m(o.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex(),
});
function ve(l) {
  return l
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
    .replace(/'/g, '’')
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
    .replace(/"/g, '”')
    .replace(/\.{3}/g, '…');
}
function W(l) {
  let t = '',
    n,
    e;
  const i = l.length;
  for (n = 0; n < i; n++)
    (e = l.charCodeAt(n)), Math.random() > 0.5 && (e = 'x' + e.toString(16)), (t += '&#' + e + ';');
  return t;
}
class A {
  constructor(t) {
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = t || E),
      (this.options.tokenizer = this.options.tokenizer || new U()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const n = { block: u.normal, inline: o.normal };
    this.options.pedantic
      ? ((n.block = u.pedantic), (n.inline = o.pedantic))
      : this.options.gfm &&
        ((n.block = u.gfm), this.options.breaks ? (n.inline = o.breaks) : (n.inline = o.gfm)),
      (this.tokenizer.rules = n);
  }
  static get rules() {
    return { block: u, inline: o };
  }
  static lex(t, n) {
    return new A(n).lex(t);
  }
  static lexInline(t, n) {
    return new A(n).inlineTokens(t);
  }
  lex(t) {
    (t = t.replace(
      /\r\n|\r/g,
      `
`,
    )),
      this.blockTokens(t, this.tokens);
    let n;
    for (; (n = this.inlineQueue.shift()); ) this.inlineTokens(n.src, n.tokens);
    return this.tokens;
  }
  blockTokens(t, n = []) {
    this.options.pedantic
      ? (t = t.replace(/\t/g, '    ').replace(/^ +$/gm, ''))
      : (t = t.replace(/^( *)(\t+)/gm, (a, c, d) => c + '    '.repeat(d.length)));
    let e, i, s, r;
    for (; t; )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some((a) =>
            (e = a.call({ lexer: this }, t, n))
              ? ((t = t.substring(e.raw.length)), n.push(e), !0)
              : !1,
          )
        )
      ) {
        if ((e = this.tokenizer.space(t))) {
          (t = t.substring(e.raw.length)),
            e.raw.length === 1 && n.length > 0
              ? (n[n.length - 1].raw += `
`)
              : n.push(e);
          continue;
        }
        if ((e = this.tokenizer.code(t))) {
          (t = t.substring(e.raw.length)),
            (i = n[n.length - 1]),
            i && (i.type === 'paragraph' || i.type === 'text')
              ? ((i.raw +=
                  `
` + e.raw),
                (i.text +=
                  `
` + e.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : n.push(e);
          continue;
        }
        if ((e = this.tokenizer.fences(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.heading(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.hr(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.blockquote(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.list(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.html(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.def(t))) {
          (t = t.substring(e.raw.length)),
            (i = n[n.length - 1]),
            i && (i.type === 'paragraph' || i.type === 'text')
              ? ((i.raw +=
                  `
` + e.raw),
                (i.text +=
                  `
` + e.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : this.tokens.links[e.tag] ||
                (this.tokens.links[e.tag] = { href: e.href, title: e.title });
          continue;
        }
        if ((e = this.tokenizer.table(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.lheading(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if (((s = t), this.options.extensions && this.options.extensions.startBlock)) {
          let a = 1 / 0;
          const c = t.slice(1);
          let d;
          this.options.extensions.startBlock.forEach(function (f) {
            (d = f.call({ lexer: this }, c)),
              typeof d == 'number' && d >= 0 && (a = Math.min(a, d));
          }),
            a < 1 / 0 && a >= 0 && (s = t.substring(0, a + 1));
        }
        if (this.state.top && (e = this.tokenizer.paragraph(s))) {
          (i = n[n.length - 1]),
            r && i.type === 'paragraph'
              ? ((i.raw +=
                  `
` + e.raw),
                (i.text +=
                  `
` + e.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : n.push(e),
            (r = s.length !== t.length),
            (t = t.substring(e.raw.length));
          continue;
        }
        if ((e = this.tokenizer.text(t))) {
          (t = t.substring(e.raw.length)),
            (i = n[n.length - 1]),
            i && i.type === 'text'
              ? ((i.raw +=
                  `
` + e.raw),
                (i.text +=
                  `
` + e.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : n.push(e);
          continue;
        }
        if (t) {
          const a = 'Infinite loop on byte: ' + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(a);
            break;
          } else throw new Error(a);
        }
      }
    return (this.state.top = !0), n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  inlineTokens(t, n = []) {
    let e,
      i,
      s,
      r = t,
      a,
      c,
      d;
    if (this.tokens.links) {
      const f = Object.keys(this.tokens.links);
      if (f.length > 0)
        for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          f.includes(a[0].slice(a[0].lastIndexOf('[') + 1, -1)) &&
            (r =
              r.slice(0, a.index) +
              '[' +
              F('a', a[0].length - 2) +
              ']' +
              r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r =
        r.slice(0, a.index) +
        '[' +
        F('a', a[0].length - 2) +
        ']' +
        r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.escapedEmSt.exec(r)) != null; )
      (r =
        r.slice(0, a.index + a[0].length - 2) +
        '++' +
        r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
        this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    for (; t; )
      if (
        (c || (d = ''),
        (c = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some((f) =>
            (e = f.call({ lexer: this }, t, n))
              ? ((t = t.substring(e.raw.length)), n.push(e), !0)
              : !1,
          )
        ))
      ) {
        if ((e = this.tokenizer.escape(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.tag(t))) {
          (t = t.substring(e.raw.length)),
            (i = n[n.length - 1]),
            i && e.type === 'text' && i.type === 'text'
              ? ((i.raw += e.raw), (i.text += e.text))
              : n.push(e);
          continue;
        }
        if ((e = this.tokenizer.link(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.reflink(t, this.tokens.links))) {
          (t = t.substring(e.raw.length)),
            (i = n[n.length - 1]),
            i && e.type === 'text' && i.type === 'text'
              ? ((i.raw += e.raw), (i.text += e.text))
              : n.push(e);
          continue;
        }
        if ((e = this.tokenizer.emStrong(t, r, d))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.codespan(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.br(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.del(t))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if ((e = this.tokenizer.autolink(t, W))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if (!this.state.inLink && (e = this.tokenizer.url(t, W))) {
          (t = t.substring(e.raw.length)), n.push(e);
          continue;
        }
        if (((s = t), this.options.extensions && this.options.extensions.startInline)) {
          let f = 1 / 0;
          const g = t.slice(1);
          let k;
          this.options.extensions.startInline.forEach(function (h) {
            (k = h.call({ lexer: this }, g)),
              typeof k == 'number' && k >= 0 && (f = Math.min(f, k));
          }),
            f < 1 / 0 && f >= 0 && (s = t.substring(0, f + 1));
        }
        if ((e = this.tokenizer.inlineText(s, ve))) {
          (t = t.substring(e.raw.length)),
            e.raw.slice(-1) !== '_' && (d = e.raw.slice(-1)),
            (c = !0),
            (i = n[n.length - 1]),
            i && i.type === 'text' ? ((i.raw += e.raw), (i.text += e.text)) : n.push(e);
          continue;
        }
        if (t) {
          const f = 'Infinite loop on byte: ' + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(f);
            break;
          } else throw new Error(f);
        }
      }
    return n;
  }
}
class O {
  constructor(t) {
    this.options = t || E;
  }
  code(t, n, e) {
    const i = (n || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const s = this.options.highlight(t, i);
      s != null && s !== t && ((e = !0), (t = s));
    }
    return (
      (t =
        t.replace(/\n$/, '') +
        `
`),
      i
        ? '<pre><code class="' +
          this.options.langPrefix +
          b(i) +
          '">' +
          (e ? t : b(t, !0)) +
          `</code></pre>
`
        : '<pre><code>' +
          (e ? t : b(t, !0)) +
          `</code></pre>
`
    );
  }
  blockquote(t) {
    return `<blockquote>
${t}</blockquote>
`;
  }
  html(t) {
    return t;
  }
  heading(t, n, e, i) {
    if (this.options.headerIds) {
      const s = this.options.headerPrefix + i.slug(e);
      return `<h${n} id="${s}">${t}</h${n}>
`;
    }
    return `<h${n}>${t}</h${n}>
`;
  }
  hr() {
    return this.options.xhtml
      ? `<hr/>
`
      : `<hr>
`;
  }
  list(t, n, e) {
    const i = n ? 'ol' : 'ul',
      s = n && e !== 1 ? ' start="' + e + '"' : '';
    return (
      '<' +
      i +
      s +
      `>
` +
      t +
      '</' +
      i +
      `>
`
    );
  }
  listitem(t) {
    return `<li>${t}</li>
`;
  }
  checkbox(t) {
    return (
      '<input ' +
      (t ? 'checked="" ' : '') +
      'disabled="" type="checkbox"' +
      (this.options.xhtml ? ' /' : '') +
      '> '
    );
  }
  paragraph(t) {
    return `<p>${t}</p>
`;
  }
  table(t, n) {
    return (
      n && (n = `<tbody>${n}</tbody>`),
      `<table>
<thead>
` +
        t +
        `</thead>
` +
        n +
        `</table>
`
    );
  }
  tablerow(t) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t, n) {
    const e = n.header ? 'th' : 'td';
    return (
      (n.align ? `<${e} align="${n.align}">` : `<${e}>`) +
      t +
      `</${e}>
`
    );
  }
  strong(t) {
    return `<strong>${t}</strong>`;
  }
  em(t) {
    return `<em>${t}</em>`;
  }
  codespan(t) {
    return `<code>${t}</code>`;
  }
  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }
  del(t) {
    return `<del>${t}</del>`;
  }
  link(t, n, e) {
    if (((t = H(this.options.sanitize, this.options.baseUrl, t)), t === null)) return e;
    let i = '<a href="' + t + '"';
    return n && (i += ' title="' + n + '"'), (i += '>' + e + '</a>'), i;
  }
  image(t, n, e) {
    if (((t = H(this.options.sanitize, this.options.baseUrl, t)), t === null)) return e;
    let i = `<img src="${t}" alt="${e}"`;
    return n && (i += ` title="${n}"`), (i += this.options.xhtml ? '/>' : '>'), i;
  }
  text(t) {
    return t;
  }
}
class ee {
  strong(t) {
    return t;
  }
  em(t) {
    return t;
  }
  codespan(t) {
    return t;
  }
  del(t) {
    return t;
  }
  html(t) {
    return t;
  }
  text(t) {
    return t;
  }
  link(t, n, e) {
    return '' + e;
  }
  image(t, n, e) {
    return '' + e;
  }
  br() {
    return '';
  }
}
class te {
  constructor() {
    this.seen = {};
  }
  serialize(t) {
    return t
      .toLowerCase()
      .trim()
      .replace(/<[!\/a-z].*?>/gi, '')
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }
  getNextSafeSlug(t, n) {
    let e = t,
      i = 0;
    if (this.seen.hasOwnProperty(e)) {
      i = this.seen[t];
      do i++, (e = t + '-' + i);
      while (this.seen.hasOwnProperty(e));
    }
    return n || ((this.seen[t] = i), (this.seen[e] = 0)), e;
  }
  slug(t, n = {}) {
    const e = this.serialize(t);
    return this.getNextSafeSlug(e, n.dryrun);
  }
}
class I {
  constructor(t) {
    (this.options = t || E),
      (this.options.renderer = this.options.renderer || new O()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new ee()),
      (this.slugger = new te());
  }
  static parse(t, n) {
    return new I(n).parse(t);
  }
  static parseInline(t, n) {
    return new I(n).parseInline(t);
  }
  parse(t, n = !0) {
    let e = '',
      i,
      s,
      r,
      a,
      c,
      d,
      f,
      g,
      k,
      h,
      S,
      y,
      R,
      x,
      w,
      C,
      T,
      $,
      z;
    const L = t.length;
    for (i = 0; i < L; i++) {
      if (
        ((h = t[i]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[h.type] &&
          ((z = this.options.extensions.renderers[h.type].call({ parser: this }, h)),
          z !== !1 ||
            ![
              'space',
              'hr',
              'heading',
              'code',
              'table',
              'blockquote',
              'list',
              'html',
              'paragraph',
              'text',
            ].includes(h.type)))
      ) {
        e += z || '';
        continue;
      }
      switch (h.type) {
        case 'space':
          continue;
        case 'hr': {
          e += this.renderer.hr();
          continue;
        }
        case 'heading': {
          e += this.renderer.heading(
            this.parseInline(h.tokens),
            h.depth,
            Y(this.parseInline(h.tokens, this.textRenderer)),
            this.slugger,
          );
          continue;
        }
        case 'code': {
          e += this.renderer.code(h.text, h.lang, h.escaped);
          continue;
        }
        case 'table': {
          for (g = '', f = '', a = h.header.length, s = 0; s < a; s++)
            f += this.renderer.tablecell(this.parseInline(h.header[s].tokens), {
              header: !0,
              align: h.align[s],
            });
          for (g += this.renderer.tablerow(f), k = '', a = h.rows.length, s = 0; s < a; s++) {
            for (d = h.rows[s], f = '', c = d.length, r = 0; r < c; r++)
              f += this.renderer.tablecell(this.parseInline(d[r].tokens), {
                header: !1,
                align: h.align[r],
              });
            k += this.renderer.tablerow(f);
          }
          e += this.renderer.table(g, k);
          continue;
        }
        case 'blockquote': {
          (k = this.parse(h.tokens)), (e += this.renderer.blockquote(k));
          continue;
        }
        case 'list': {
          for (
            S = h.ordered, y = h.start, R = h.loose, a = h.items.length, k = '', s = 0;
            s < a;
            s++
          )
            (w = h.items[s]),
              (C = w.checked),
              (T = w.task),
              (x = ''),
              w.task &&
                (($ = this.renderer.checkbox(C)),
                R
                  ? w.tokens.length > 0 && w.tokens[0].type === 'paragraph'
                    ? ((w.tokens[0].text = $ + ' ' + w.tokens[0].text),
                      w.tokens[0].tokens &&
                        w.tokens[0].tokens.length > 0 &&
                        w.tokens[0].tokens[0].type === 'text' &&
                        (w.tokens[0].tokens[0].text = $ + ' ' + w.tokens[0].tokens[0].text))
                    : w.tokens.unshift({ type: 'text', text: $ })
                  : (x += $)),
              (x += this.parse(w.tokens, R)),
              (k += this.renderer.listitem(x, T, C));
          e += this.renderer.list(k, S, y);
          continue;
        }
        case 'html': {
          e += this.renderer.html(h.text);
          continue;
        }
        case 'paragraph': {
          e += this.renderer.paragraph(this.parseInline(h.tokens));
          continue;
        }
        case 'text': {
          for (
            k = h.tokens ? this.parseInline(h.tokens) : h.text;
            i + 1 < L && t[i + 1].type === 'text';

          )
            (h = t[++i]),
              (k +=
                `
` + (h.tokens ? this.parseInline(h.tokens) : h.text));
          e += n ? this.renderer.paragraph(k) : k;
          continue;
        }
        default: {
          const P = 'Token with "' + h.type + '" type was not found.';
          if (this.options.silent) {
            console.error(P);
            return;
          } else throw new Error(P);
        }
      }
    }
    return e;
  }
  parseInline(t, n) {
    n = n || this.renderer;
    let e = '',
      i,
      s,
      r;
    const a = t.length;
    for (i = 0; i < a; i++) {
      if (
        ((s = t[i]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[s.type] &&
          ((r = this.options.extensions.renderers[s.type].call({ parser: this }, s)),
          r !== !1 ||
            ![
              'escape',
              'html',
              'link',
              'image',
              'strong',
              'em',
              'codespan',
              'br',
              'del',
              'text',
            ].includes(s.type)))
      ) {
        e += r || '';
        continue;
      }
      switch (s.type) {
        case 'escape': {
          e += n.text(s.text);
          break;
        }
        case 'html': {
          e += n.html(s.text);
          break;
        }
        case 'link': {
          e += n.link(s.href, s.title, this.parseInline(s.tokens, n));
          break;
        }
        case 'image': {
          e += n.image(s.href, s.title, s.text);
          break;
        }
        case 'strong': {
          e += n.strong(this.parseInline(s.tokens, n));
          break;
        }
        case 'em': {
          e += n.em(this.parseInline(s.tokens, n));
          break;
        }
        case 'codespan': {
          e += n.codespan(s.text);
          break;
        }
        case 'br': {
          e += n.br();
          break;
        }
        case 'del': {
          e += n.del(this.parseInline(s.tokens, n));
          break;
        }
        case 'text': {
          e += n.text(s.text);
          break;
        }
        default: {
          const c = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) {
            console.error(c);
            return;
          } else throw new Error(c);
        }
      }
    }
    return e;
  }
}
class D {
  constructor(t) {
    this.options = t || E;
  }
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
}
N(D, 'passThroughHooks', new Set(['preprocess', 'postprocess']));
function Le(l, t, n) {
  return (e) => {
    if (
      ((e.message += `
Please report this to https://github.com/markedjs/marked.`),
      l)
    ) {
      const i = '<p>An error occurred:</p><pre>' + b(e.message + '', !0) + '</pre>';
      if (t) return Promise.resolve(i);
      if (n) {
        n(null, i);
        return;
      }
      return i;
    }
    if (t) return Promise.reject(e);
    if (n) {
      n(e);
      return;
    }
    throw e;
  };
}
function ne(l, t) {
  return (n, e, i) => {
    typeof e == 'function' && ((i = e), (e = null));
    const s = _({}, e);
    e = _(_({}, p.defaults), s);
    const r = Le(e.silent, e.async, i);
    if (typeof n == 'undefined' || n === null)
      return r(new Error('marked(): input parameter is undefined or null'));
    if (typeof n != 'string')
      return r(
        new Error(
          'marked(): input parameter is of type ' +
            Object.prototype.toString.call(n) +
            ', string expected',
        ),
      );
    if ((Ee(e), e.hooks && (e.hooks.options = e), i)) {
      const a = e.highlight;
      let c;
      try {
        e.hooks && (n = e.hooks.preprocess(n)), (c = l(n, e));
      } catch (g) {
        return r(g);
      }
      const d = function (g) {
        let k;
        if (!g)
          try {
            e.walkTokens && p.walkTokens(c, e.walkTokens),
              (k = t(c, e)),
              e.hooks && (k = e.hooks.postprocess(k));
          } catch (h) {
            g = h;
          }
        return (e.highlight = a), g ? r(g) : i(null, k);
      };
      if (!a || a.length < 3 || (delete e.highlight, !c.length)) return d();
      let f = 0;
      p.walkTokens(c, function (g) {
        g.type === 'code' &&
          (f++,
          setTimeout(() => {
            a(g.text, g.lang, function (k, h) {
              if (k) return d(k);
              h != null && h !== g.text && ((g.text = h), (g.escaped = !0)), f--, f === 0 && d();
            });
          }, 0));
      }),
        f === 0 && d();
      return;
    }
    if (e.async)
      return Promise.resolve(e.hooks ? e.hooks.preprocess(n) : n)
        .then((a) => l(a, e))
        .then((a) => (e.walkTokens ? Promise.all(p.walkTokens(a, e.walkTokens)).then(() => a) : a))
        .then((a) => t(a, e))
        .then((a) => (e.hooks ? e.hooks.postprocess(a) : a))
        .catch(r);
    try {
      e.hooks && (n = e.hooks.preprocess(n));
      const a = l(n, e);
      e.walkTokens && p.walkTokens(a, e.walkTokens);
      let c = t(a, e);
      return e.hooks && (c = e.hooks.postprocess(c)), c;
    } catch (a) {
      return r(a);
    }
  };
}
function p(l, t, n) {
  return ne(A.lex, I.parse)(l, t, n);
}
p.options = p.setOptions = function (l) {
  return (p.defaults = _(_({}, p.defaults), l)), me(p.defaults), p;
};
p.getDefaults = G;
p.defaults = E;
p.use = function (...l) {
  const t = p.defaults.extensions || { renderers: {}, childTokens: {} };
  l.forEach((n) => {
    const e = _({}, n);
    if (
      ((e.async = p.defaults.async || e.async || !1),
      n.extensions &&
        (n.extensions.forEach((i) => {
          if (!i.name) throw new Error('extension name required');
          if (i.renderer) {
            const s = t.renderers[i.name];
            s
              ? (t.renderers[i.name] = function (...r) {
                  let a = i.renderer.apply(this, r);
                  return a === !1 && (a = s.apply(this, r)), a;
                })
              : (t.renderers[i.name] = i.renderer);
          }
          if (i.tokenizer) {
            if (!i.level || (i.level !== 'block' && i.level !== 'inline'))
              throw new Error("extension level must be 'block' or 'inline'");
            t[i.level] ? t[i.level].unshift(i.tokenizer) : (t[i.level] = [i.tokenizer]),
              i.start &&
                (i.level === 'block'
                  ? t.startBlock
                    ? t.startBlock.push(i.start)
                    : (t.startBlock = [i.start])
                  : i.level === 'inline' &&
                    (t.startInline ? t.startInline.push(i.start) : (t.startInline = [i.start])));
          }
          i.childTokens && (t.childTokens[i.name] = i.childTokens);
        }),
        (e.extensions = t)),
      n.renderer)
    ) {
      const i = p.defaults.renderer || new O();
      for (const s in n.renderer) {
        const r = i[s];
        i[s] = (...a) => {
          let c = n.renderer[s].apply(i, a);
          return c === !1 && (c = r.apply(i, a)), c;
        };
      }
      e.renderer = i;
    }
    if (n.tokenizer) {
      const i = p.defaults.tokenizer || new U();
      for (const s in n.tokenizer) {
        const r = i[s];
        i[s] = (...a) => {
          let c = n.tokenizer[s].apply(i, a);
          return c === !1 && (c = r.apply(i, a)), c;
        };
      }
      e.tokenizer = i;
    }
    if (n.hooks) {
      const i = p.defaults.hooks || new D();
      for (const s in n.hooks) {
        const r = i[s];
        D.passThroughHooks.has(s)
          ? (i[s] = (a) => {
              if (p.defaults.async)
                return Promise.resolve(n.hooks[s].call(i, a)).then((d) => r.call(i, d));
              const c = n.hooks[s].call(i, a);
              return r.call(i, c);
            })
          : (i[s] = (...a) => {
              let c = n.hooks[s].apply(i, a);
              return c === !1 && (c = r.apply(i, a)), c;
            });
      }
      e.hooks = i;
    }
    if (n.walkTokens) {
      const i = p.defaults.walkTokens;
      e.walkTokens = function (s) {
        let r = [];
        return r.push(n.walkTokens.call(this, s)), i && (r = r.concat(i.call(this, s))), r;
      };
    }
    p.setOptions(e);
  });
};
p.walkTokens = function (l, t) {
  let n = [];
  for (const e of l)
    switch (((n = n.concat(t.call(p, e))), e.type)) {
      case 'table': {
        for (const i of e.header) n = n.concat(p.walkTokens(i.tokens, t));
        for (const i of e.rows) for (const s of i) n = n.concat(p.walkTokens(s.tokens, t));
        break;
      }
      case 'list': {
        n = n.concat(p.walkTokens(e.items, t));
        break;
      }
      default:
        p.defaults.extensions &&
        p.defaults.extensions.childTokens &&
        p.defaults.extensions.childTokens[e.type]
          ? p.defaults.extensions.childTokens[e.type].forEach(function (i) {
              n = n.concat(p.walkTokens(e[i], t));
            })
          : e.tokens && (n = n.concat(p.walkTokens(e.tokens, t)));
    }
  return n;
};
p.parseInline = ne(A.lexInline, I.parseInline);
p.Parser = I;
p.parser = I.parse;
p.Renderer = O;
p.TextRenderer = ee;
p.Lexer = A;
p.lexer = A.lex;
p.Tokenizer = U;
p.Slugger = te;
p.Hooks = D;
p.parse = p;
p.options;
p.setOptions;
p.use;
p.walkTokens;
p.parseInline;
I.parse;
A.lex;
const Be = { class: 'page-container' },
  Ze = ['innerHTML'],
  qe = oe({
    __name: 'index',
    setup(l) {
      const t = ce(`# Marked in Node.js

Rendered by **marked**.`),
        n = he(() => p.parse(t.value));
      return (e, i) => {
        const s = ue('el-input');
        return (
          pe(),
          fe('div', Be, [
            ge(
              s,
              {
                modelValue: t.value,
                'onUpdate:modelValue': i[0] || (i[0] = (r) => (t.value = r)),
                class: 'input',
                type: 'textarea',
              },
              null,
              8,
              ['modelValue'],
            ),
            de('div', { class: 'marked', innerHTML: n.value }, null, 8, Ze),
          ])
        );
      };
    },
  });
const Oe = ke(qe, [['__scopeId', 'data-v-d4a82a36']]);
export { Oe as default };
