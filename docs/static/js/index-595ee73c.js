var ne = Object.defineProperty,
  se = Object.defineProperties;
var ie = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var re = Object.prototype.hasOwnProperty,
  le = Object.prototype.propertyIsEnumerable;
var M = (a, n, e) =>
    n in a ? ne(a, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (a[n] = e),
  b = (a, n) => {
    for (var e in n || (n = {})) re.call(n, e) && M(a, e, n[e]);
    if (V) for (var e of V(n)) le.call(n, e) && M(a, e, n[e]);
    return a;
  },
  I = (a, n) => se(a, ie(n));
var m = (a, n, e) => (M(a, typeof n != 'symbol' ? n + '' : n, e), e),
  oe = (a, n, e) => {
    if (!n.has(a)) throw TypeError('Cannot ' + e);
  };
var P = (a, n, e) => {
  if (n.has(a)) throw TypeError('Cannot add the same private member more than once');
  n instanceof WeakSet ? n.add(a) : n.set(a, e);
};
var L = (a, n, e) => (oe(a, n, 'access private method'), e);
import {
  d as ae,
  j as ce,
  A as he,
  a as pe,
  o as ue,
  c as fe,
  f as ge,
  g as ke,
} from './index-70a96a1c.js';
import { _ as de } from './plugin-vueexport-helper-c27b6911.js';
function O() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  };
}
let S = O();
function J(a) {
  S = a;
}
const Y = /[&<>"']/,
  me = new RegExp(Y.source, 'g'),
  ee = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  xe = new RegExp(ee.source, 'g'),
  be = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
  K = (a) => be[a];
function w(a, n) {
  if (n) {
    if (Y.test(a)) return a.replace(me, K);
  } else if (ee.test(a)) return a.replace(xe, K);
  return a;
}
const we = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function _e(a) {
  return a.replace(
    we,
    (n, e) => (
      (e = e.toLowerCase()),
      e === 'colon'
        ? ':'
        : e.charAt(0) === '#'
        ? e.charAt(1) === 'x'
          ? String.fromCharCode(parseInt(e.substring(2), 16))
          : String.fromCharCode(+e.substring(1))
        : ''
    ),
  );
}
const ye = /(^|[^\[])\^/g;
function k(a, n) {
  (a = typeof a == 'string' ? a : a.source), (n = n || '');
  const e = {
    replace: (t, s) => (
      (s = typeof s == 'object' && 'source' in s ? s.source : s),
      (s = s.replace(ye, '$1')),
      (a = a.replace(t, s)),
      e
    ),
    getRegex: () => new RegExp(a, n),
  };
  return e;
}
function X(a) {
  try {
    a = encodeURI(a).replace(/%25/g, '%');
  } catch (n) {
    return null;
  }
  return a;
}
const C = { exec: () => null };
function W(a, n) {
  const e = a.replace(/\|/g, (i, r, l) => {
      let o = !1,
        f = r;
      for (; --f >= 0 && l[f] === '\\'; ) o = !o;
      return o ? '|' : ' |';
    }),
    t = e.split(/ \|/);
  let s = 0;
  if ((t[0].trim() || t.shift(), t.length > 0 && !t[t.length - 1].trim() && t.pop(), n))
    if (t.length > n) t.splice(n);
    else for (; t.length < n; ) t.push('');
  for (; s < t.length; s++) t[s] = t[s].trim().replace(/\\\|/g, '|');
  return t;
}
function j(a, n, e) {
  const t = a.length;
  if (t === 0) return '';
  let s = 0;
  for (; s < t; ) {
    const i = a.charAt(t - s - 1);
    if (i === n && !e) s++;
    else if (i !== n && e) s++;
    else break;
  }
  return a.slice(0, t - s);
}
function $e(a, n) {
  if (a.indexOf(n[1]) === -1) return -1;
  let e = 0;
  for (let t = 0; t < a.length; t++)
    if (a[t] === '\\') t++;
    else if (a[t] === n[0]) e++;
    else if (a[t] === n[1] && (e--, e < 0)) return t;
  return -1;
}
function G(a, n, e, t) {
  const s = n.href,
    i = n.title ? w(n.title) : null,
    r = a[1].replace(/\\([\[\]])/g, '$1');
  if (a[0].charAt(0) !== '!') {
    t.state.inLink = !0;
    const l = { type: 'link', raw: e, href: s, title: i, text: r, tokens: t.inlineTokens(r) };
    return (t.state.inLink = !1), l;
  }
  return { type: 'image', raw: e, href: s, title: i, text: w(r) };
}
function Te(a, n) {
  const e = a.match(/^(\s+)(?:```)/);
  if (e === null) return n;
  const t = e[1];
  return n
    .split(
      `
`,
    )
    .map((s) => {
      const i = s.match(/^\s+/);
      if (i === null) return s;
      const [r] = i;
      return r.length >= t.length ? s.slice(t.length) : s;
    }).join(`
`);
}
class B {
  constructor(n) {
    m(this, 'options');
    m(this, 'rules');
    m(this, 'lexer');
    this.options = n || S;
  }
  space(n) {
    const e = this.rules.block.newline.exec(n);
    if (e && e[0].length > 0) return { type: 'space', raw: e[0] };
  }
  code(n) {
    const e = this.rules.block.code.exec(n);
    if (e) {
      const t = e[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: e[0],
        codeBlockStyle: 'indented',
        text: this.options.pedantic
          ? t
          : j(
              t,
              `
`,
            ),
      };
    }
  }
  fences(n) {
    const e = this.rules.block.fences.exec(n);
    if (e) {
      const t = e[0],
        s = Te(t, e[3] || '');
      return {
        type: 'code',
        raw: t,
        lang: e[2] ? e[2].trim().replace(this.rules.inline._escapes, '$1') : e[2],
        text: s,
      };
    }
  }
  heading(n) {
    const e = this.rules.block.heading.exec(n);
    if (e) {
      let t = e[2].trim();
      if (/#$/.test(t)) {
        const s = j(t, '#');
        (this.options.pedantic || !s || / $/.test(s)) && (t = s.trim());
      }
      return {
        type: 'heading',
        raw: e[0],
        depth: e[1].length,
        text: t,
        tokens: this.lexer.inline(t),
      };
    }
  }
  hr(n) {
    const e = this.rules.block.hr.exec(n);
    if (e) return { type: 'hr', raw: e[0] };
  }
  blockquote(n) {
    const e = this.rules.block.blockquote.exec(n);
    if (e) {
      const t = e[0].replace(/^ *>[ \t]?/gm, ''),
        s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const i = this.lexer.blockTokens(t);
      return (this.lexer.state.top = s), { type: 'blockquote', raw: e[0], tokens: i, text: t };
    }
  }
  list(n) {
    let e = this.rules.block.list.exec(n);
    if (e) {
      let t = e[1].trim();
      const s = t.length > 1,
        i = {
          type: 'list',
          raw: '',
          ordered: s,
          start: s ? +t.slice(0, -1) : '',
          loose: !1,
          items: [],
        };
      (t = s ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`),
        this.options.pedantic && (t = s ? t : '[*+-]');
      const r = new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let l = '',
        o = '',
        f = !1;
      for (; n; ) {
        let h = !1;
        if (!(e = r.exec(n)) || this.rules.block.hr.test(n)) break;
        (l = e[0]), (n = n.substring(l.length));
        let g = e[2]
            .split(
              `
`,
              1,
            )[0]
            .replace(/^\t+/, (v) => ' '.repeat(3 * v.length)),
          u = n.split(
            `
`,
            1,
          )[0],
          x = 0;
        this.options.pedantic
          ? ((x = 2), (o = g.trimStart()))
          : ((x = e[2].search(/[^ ]/)), (x = x > 4 ? 1 : x), (o = g.slice(x)), (x += e[1].length));
        let $ = !1;
        if (
          (!g &&
            /^ *$/.test(u) &&
            ((l +=
              u +
              `
`),
            (n = n.substring(u.length + 1)),
            (h = !0)),
          !h)
        ) {
          const v = new RegExp(
              `^ {0,${Math.min(3, x - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`,
            ),
            H = new RegExp(
              `^ {0,${Math.min(3, x - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
            ),
            N = new RegExp(`^ {0,${Math.min(3, x - 1)}}(?:\`\`\`|~~~)`),
            F = new RegExp(`^ {0,${Math.min(3, x - 1)}}#`);
          for (; n; ) {
            const D = n.split(
              `
`,
              1,
            )[0];
            if (
              ((u = D),
              this.options.pedantic && (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
              N.test(u) || F.test(u) || v.test(u) || H.test(n))
            )
              break;
            if (u.search(/[^ ]/) >= x || !u.trim())
              o +=
                `
` + u.slice(x);
            else {
              if ($ || g.search(/[^ ]/) >= 4 || N.test(g) || F.test(g) || H.test(g)) break;
              o +=
                `
` + u;
            }
            !$ && !u.trim() && ($ = !0),
              (l +=
                D +
                `
`),
              (n = n.substring(D.length + 1)),
              (g = u.slice(x));
          }
        }
        i.loose || (f ? (i.loose = !0) : /\n *\n *$/.test(l) && (f = !0));
        let T = null,
          z;
        this.options.gfm &&
          ((T = /^\[[ xX]\] /.exec(o)),
          T && ((z = T[0] !== '[ ] '), (o = o.replace(/^\[[ xX]\] +/, '')))),
          i.items.push({
            type: 'list_item',
            raw: l,
            task: !!T,
            checked: z,
            loose: !1,
            text: o,
            tokens: [],
          }),
          (i.raw += l);
      }
      (i.items[i.items.length - 1].raw = l.trimEnd()),
        (i.items[i.items.length - 1].text = o.trimEnd()),
        (i.raw = i.raw.trimEnd());
      for (let h = 0; h < i.items.length; h++)
        if (
          ((this.lexer.state.top = !1),
          (i.items[h].tokens = this.lexer.blockTokens(i.items[h].text, [])),
          !i.loose)
        ) {
          const g = i.items[h].tokens.filter((x) => x.type === 'space'),
            u = g.length > 0 && g.some((x) => /\n.*\n/.test(x.raw));
          i.loose = u;
        }
      if (i.loose) for (let h = 0; h < i.items.length; h++) i.items[h].loose = !0;
      return i;
    }
  }
  html(n) {
    const e = this.rules.block.html.exec(n);
    if (e)
      return {
        type: 'html',
        block: !0,
        raw: e[0],
        pre: e[1] === 'pre' || e[1] === 'script' || e[1] === 'style',
        text: e[0],
      };
  }
  def(n) {
    const e = this.rules.block.def.exec(n);
    if (e) {
      const t = e[1].toLowerCase().replace(/\s+/g, ' '),
        s = e[2] ? e[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline._escapes, '$1') : '',
        i = e[3]
          ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline._escapes, '$1')
          : e[3];
      return { type: 'def', tag: t, raw: e[0], href: s, title: i };
    }
  }
  table(n) {
    const e = this.rules.block.table.exec(n);
    if (e) {
      const t = {
        type: 'table',
        raw: e[0],
        header: W(e[1]).map((s) => ({ text: s, tokens: [] })),
        align: e[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows:
          e[3] && e[3].trim()
            ? e[3].replace(/\n[ \t]*$/, '').split(`
`)
            : [],
      };
      if (t.header.length === t.align.length) {
        let s = t.align.length,
          i,
          r,
          l,
          o;
        for (i = 0; i < s; i++) {
          const f = t.align[i];
          f &&
            (/^ *-+: *$/.test(f)
              ? (t.align[i] = 'right')
              : /^ *:-+: *$/.test(f)
              ? (t.align[i] = 'center')
              : /^ *:-+ *$/.test(f)
              ? (t.align[i] = 'left')
              : (t.align[i] = null));
        }
        for (s = t.rows.length, i = 0; i < s; i++)
          t.rows[i] = W(t.rows[i], t.header.length).map((f) => ({ text: f, tokens: [] }));
        for (s = t.header.length, r = 0; r < s; r++)
          t.header[r].tokens = this.lexer.inline(t.header[r].text);
        for (s = t.rows.length, r = 0; r < s; r++)
          for (o = t.rows[r], l = 0; l < o.length; l++) o[l].tokens = this.lexer.inline(o[l].text);
        return t;
      }
    }
  }
  lheading(n) {
    const e = this.rules.block.lheading.exec(n);
    if (e)
      return {
        type: 'heading',
        raw: e[0],
        depth: e[2].charAt(0) === '=' ? 1 : 2,
        text: e[1],
        tokens: this.lexer.inline(e[1]),
      };
  }
  paragraph(n) {
    const e = this.rules.block.paragraph.exec(n);
    if (e) {
      const t =
        e[1].charAt(e[1].length - 1) ===
        `
`
          ? e[1].slice(0, -1)
          : e[1];
      return { type: 'paragraph', raw: e[0], text: t, tokens: this.lexer.inline(t) };
    }
  }
  text(n) {
    const e = this.rules.block.text.exec(n);
    if (e) return { type: 'text', raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(n) {
    const e = this.rules.inline.escape.exec(n);
    if (e) return { type: 'escape', raw: e[0], text: w(e[1]) };
  }
  tag(n) {
    const e = this.rules.inline.tag.exec(n);
    if (e)
      return (
        !this.lexer.state.inLink && /^<a /i.test(e[0])
          ? (this.lexer.state.inLink = !0)
          : this.lexer.state.inLink && /^<\/a>/i.test(e[0]) && (this.lexer.state.inLink = !1),
        !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0])
          ? (this.lexer.state.inRawBlock = !0)
          : this.lexer.state.inRawBlock &&
            /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) &&
            (this.lexer.state.inRawBlock = !1),
        {
          type: 'html',
          raw: e[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: !1,
          text: e[0],
        }
      );
  }
  link(n) {
    const e = this.rules.inline.link.exec(n);
    if (e) {
      const t = e[2].trim();
      if (!this.options.pedantic && /^</.test(t)) {
        if (!/>$/.test(t)) return;
        const r = j(t.slice(0, -1), '\\');
        if ((t.length - r.length) % 2 === 0) return;
      } else {
        const r = $e(e[2], '()');
        if (r > -1) {
          const o = (e[0].indexOf('!') === 0 ? 5 : 4) + e[1].length + r;
          (e[2] = e[2].substring(0, r)), (e[0] = e[0].substring(0, o).trim()), (e[3] = '');
        }
      }
      let s = e[2],
        i = '';
      if (this.options.pedantic) {
        const r = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        r && ((s = r[1]), (i = r[3]));
      } else i = e[3] ? e[3].slice(1, -1) : '';
      return (
        (s = s.trim()),
        /^</.test(s) &&
          (this.options.pedantic && !/>$/.test(t) ? (s = s.slice(1)) : (s = s.slice(1, -1))),
        G(
          e,
          {
            href: s && s.replace(this.rules.inline._escapes, '$1'),
            title: i && i.replace(this.rules.inline._escapes, '$1'),
          },
          e[0],
          this.lexer,
        )
      );
    }
  }
  reflink(n, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(n)) || (t = this.rules.inline.nolink.exec(n))) {
      let s = (t[2] || t[1]).replace(/\s+/g, ' ');
      if (((s = e[s.toLowerCase()]), !s)) {
        const i = t[0].charAt(0);
        return { type: 'text', raw: i, text: i };
      }
      return G(t, s, t[0], this.lexer);
    }
  }
  emStrong(n, e, t = '') {
    let s = this.rules.inline.emStrong.lDelim.exec(n);
    if (!s || (s[3] && t.match(/[\p{L}\p{N}]/u))) return;
    if (!(s[1] || s[2] || '') || !t || this.rules.inline.punctuation.exec(t)) {
      const r = [...s[0]].length - 1;
      let l,
        o,
        f = r,
        h = 0;
      const g =
        s[0][0] === '*'
          ? this.rules.inline.emStrong.rDelimAst
          : this.rules.inline.emStrong.rDelimUnd;
      for (g.lastIndex = 0, e = e.slice(-1 * n.length + r); (s = g.exec(e)) != null; ) {
        if (((l = s[1] || s[2] || s[3] || s[4] || s[5] || s[6]), !l)) continue;
        if (((o = [...l].length), s[3] || s[4])) {
          f += o;
          continue;
        } else if ((s[5] || s[6]) && r % 3 && !((r + o) % 3)) {
          h += o;
          continue;
        }
        if (((f -= o), f > 0)) continue;
        o = Math.min(o, o + f + h);
        const u = [...n].slice(0, r + s.index + o + 1).join('');
        if (Math.min(r, o) % 2) {
          const $ = u.slice(1, -1);
          return { type: 'em', raw: u, text: $, tokens: this.lexer.inlineTokens($) };
        }
        const x = u.slice(2, -2);
        return { type: 'strong', raw: u, text: x, tokens: this.lexer.inlineTokens(x) };
      }
    }
  }
  codespan(n) {
    const e = this.rules.inline.code.exec(n);
    if (e) {
      let t = e[2].replace(/\n/g, ' ');
      const s = /[^ ]/.test(t),
        i = /^ /.test(t) && / $/.test(t);
      return (
        s && i && (t = t.substring(1, t.length - 1)),
        (t = w(t, !0)),
        { type: 'codespan', raw: e[0], text: t }
      );
    }
  }
  br(n) {
    const e = this.rules.inline.br.exec(n);
    if (e) return { type: 'br', raw: e[0] };
  }
  del(n) {
    const e = this.rules.inline.del.exec(n);
    if (e) return { type: 'del', raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) };
  }
  autolink(n) {
    const e = this.rules.inline.autolink.exec(n);
    if (e) {
      let t, s;
      return (
        e[2] === '@' ? ((t = w(e[1])), (s = 'mailto:' + t)) : ((t = w(e[1])), (s = t)),
        { type: 'link', raw: e[0], text: t, href: s, tokens: [{ type: 'text', raw: t, text: t }] }
      );
    }
  }
  url(n) {
    let e;
    if ((e = this.rules.inline.url.exec(n))) {
      let t, s;
      if (e[2] === '@') (t = w(e[0])), (s = 'mailto:' + t);
      else {
        let i;
        do (i = e[0]), (e[0] = this.rules.inline._backpedal.exec(e[0])[0]);
        while (i !== e[0]);
        (t = w(e[0])), e[1] === 'www.' ? (s = 'http://' + e[0]) : (s = e[0]);
      }
      return {
        type: 'link',
        raw: e[0],
        text: t,
        href: s,
        tokens: [{ type: 'text', raw: t, text: t }],
      };
    }
  }
  inlineText(n) {
    const e = this.rules.inline.text.exec(n);
    if (e) {
      let t;
      return (
        this.lexer.state.inRawBlock ? (t = e[0]) : (t = w(e[0])),
        { type: 'text', raw: e[0], text: t }
      );
    }
  }
}
const p = {
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
  table: C,
  lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
};
p._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
p._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
p.def = k(p.def).replace('label', p._label).replace('title', p._title).getRegex();
p.bullet = /(?:[*+-]|\d{1,9}[.)])/;
p.listItemStart = k(/^( *)(bull) */)
  .replace('bull', p.bullet)
  .getRegex();
p.list = k(p.list)
  .replace(/bull/g, p.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + p.def.source + ')')
  .getRegex();
p._tag =
  'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul';
p._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
p.html = k(p.html, 'i')
  .replace('comment', p._comment)
  .replace('tag', p._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();
p.lheading = k(p.lheading).replace(/bull/g, p.bullet).getRegex();
p.paragraph = k(p._paragraph)
  .replace('hr', p.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '')
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', p._tag)
  .getRegex();
p.blockquote = k(p.blockquote).replace('paragraph', p.paragraph).getRegex();
p.normal = b({}, p);
p.gfm = I(b({}, p.normal), {
  table:
    '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
});
p.gfm.table = k(p.gfm.table)
  .replace('hr', p.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', p._tag)
  .getRegex();
p.gfm.paragraph = k(p._paragraph)
  .replace('hr', p.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '')
  .replace('table', p.gfm.table)
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', p._tag)
  .getRegex();
p.pedantic = I(b({}, p.normal), {
  html: k(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
  )
    .replace('comment', p._comment)
    .replace(
      /tag/g,
      '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
    )
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: C,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: k(p.normal._paragraph)
    .replace('hr', p.hr)
    .replace(
      'heading',
      ` *#{1,6} *[^
]`,
    )
    .replace('lheading', p.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex(),
});
const c = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: C,
  tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    rDelimAst:
      /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
    rDelimUnd:
      /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/,
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: C,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^((?![*_])[\spunctuation])/,
};
c._punctuation = '\\p{P}$+<=>`^|~';
c.punctuation = k(c.punctuation, 'u')
  .replace(/punctuation/g, c._punctuation)
  .getRegex();
c.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
c.anyPunctuation = /\\[punct]/g;
c._escapes = /\\([punct])/g;
c._comment = k(p._comment).replace('(?:-->|$)', '-->').getRegex();
c.emStrong.lDelim = k(c.emStrong.lDelim, 'u').replace(/punct/g, c._punctuation).getRegex();
c.emStrong.rDelimAst = k(c.emStrong.rDelimAst, 'gu').replace(/punct/g, c._punctuation).getRegex();
c.emStrong.rDelimUnd = k(c.emStrong.rDelimUnd, 'gu').replace(/punct/g, c._punctuation).getRegex();
c.anyPunctuation = k(c.anyPunctuation, 'gu').replace(/punct/g, c._punctuation).getRegex();
c._escapes = k(c._escapes, 'gu').replace(/punct/g, c._punctuation).getRegex();
c._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
c._email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
c.autolink = k(c.autolink).replace('scheme', c._scheme).replace('email', c._email).getRegex();
c._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
c.tag = k(c.tag).replace('comment', c._comment).replace('attribute', c._attribute).getRegex();
c._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
c._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
c._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
c.link = k(c.link)
  .replace('label', c._label)
  .replace('href', c._href)
  .replace('title', c._title)
  .getRegex();
c.reflink = k(c.reflink).replace('label', c._label).replace('ref', p._label).getRegex();
c.nolink = k(c.nolink).replace('ref', p._label).getRegex();
c.reflinkSearch = k(c.reflinkSearch, 'g')
  .replace('reflink', c.reflink)
  .replace('nolink', c.nolink)
  .getRegex();
c.normal = b({}, c);
c.pedantic = I(b({}, c.normal), {
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
  link: k(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', c._label)
    .getRegex(),
  reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', c._label)
    .getRegex(),
});
c.gfm = I(b({}, c.normal), {
  escape: k(c.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
});
c.gfm.url = k(c.gfm.url, 'i').replace('email', c.gfm._extended_email).getRegex();
c.breaks = I(b({}, c.gfm), {
  br: k(c.br).replace('{2,}', '*').getRegex(),
  text: k(c.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex(),
});
class _ {
  constructor(n) {
    m(this, 'tokens');
    m(this, 'options');
    m(this, 'state');
    m(this, 'tokenizer');
    m(this, 'inlineQueue');
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = n || S),
      (this.options.tokenizer = this.options.tokenizer || new B()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const e = { block: p.normal, inline: c.normal };
    this.options.pedantic
      ? ((e.block = p.pedantic), (e.inline = c.pedantic))
      : this.options.gfm &&
        ((e.block = p.gfm), this.options.breaks ? (e.inline = c.breaks) : (e.inline = c.gfm)),
      (this.tokenizer.rules = e);
  }
  static get rules() {
    return { block: p, inline: c };
  }
  static lex(n, e) {
    return new _(e).lex(n);
  }
  static lexInline(n, e) {
    return new _(e).inlineTokens(n);
  }
  lex(n) {
    (n = n.replace(
      /\r\n|\r/g,
      `
`,
    )),
      this.blockTokens(n, this.tokens);
    let e;
    for (; (e = this.inlineQueue.shift()); ) this.inlineTokens(e.src, e.tokens);
    return this.tokens;
  }
  blockTokens(n, e = []) {
    this.options.pedantic
      ? (n = n.replace(/\t/g, '    ').replace(/^ +$/gm, ''))
      : (n = n.replace(/^( *)(\t+)/gm, (l, o, f) => o + '    '.repeat(f.length)));
    let t, s, i, r;
    for (; n; )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some((l) =>
            (t = l.call({ lexer: this }, n, e))
              ? ((n = n.substring(t.raw.length)), e.push(t), !0)
              : !1,
          )
        )
      ) {
        if ((t = this.tokenizer.space(n))) {
          (n = n.substring(t.raw.length)),
            t.raw.length === 1 && e.length > 0
              ? (e[e.length - 1].raw += `
`)
              : e.push(t);
          continue;
        }
        if ((t = this.tokenizer.code(n))) {
          (n = n.substring(t.raw.length)),
            (s = e[e.length - 1]),
            s && (s.type === 'paragraph' || s.type === 'text')
              ? ((s.raw +=
                  `
` + t.raw),
                (s.text +=
                  `
` + t.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : e.push(t);
          continue;
        }
        if ((t = this.tokenizer.fences(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.heading(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.hr(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.blockquote(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.list(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.html(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.def(n))) {
          (n = n.substring(t.raw.length)),
            (s = e[e.length - 1]),
            s && (s.type === 'paragraph' || s.type === 'text')
              ? ((s.raw +=
                  `
` + t.raw),
                (s.text +=
                  `
` + t.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : this.tokens.links[t.tag] ||
                (this.tokens.links[t.tag] = { href: t.href, title: t.title });
          continue;
        }
        if ((t = this.tokenizer.table(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.lheading(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if (((i = n), this.options.extensions && this.options.extensions.startBlock)) {
          let l = 1 / 0;
          const o = n.slice(1);
          let f;
          this.options.extensions.startBlock.forEach((h) => {
            (f = h.call({ lexer: this }, o)),
              typeof f == 'number' && f >= 0 && (l = Math.min(l, f));
          }),
            l < 1 / 0 && l >= 0 && (i = n.substring(0, l + 1));
        }
        if (this.state.top && (t = this.tokenizer.paragraph(i))) {
          (s = e[e.length - 1]),
            r && s.type === 'paragraph'
              ? ((s.raw +=
                  `
` + t.raw),
                (s.text +=
                  `
` + t.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : e.push(t),
            (r = i.length !== n.length),
            (n = n.substring(t.raw.length));
          continue;
        }
        if ((t = this.tokenizer.text(n))) {
          (n = n.substring(t.raw.length)),
            (s = e[e.length - 1]),
            s && s.type === 'text'
              ? ((s.raw +=
                  `
` + t.raw),
                (s.text +=
                  `
` + t.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : e.push(t);
          continue;
        }
        if (n) {
          const l = 'Infinite loop on byte: ' + n.charCodeAt(0);
          if (this.options.silent) {
            console.error(l);
            break;
          } else throw new Error(l);
        }
      }
    return (this.state.top = !0), e;
  }
  inline(n, e = []) {
    return this.inlineQueue.push({ src: n, tokens: e }), e;
  }
  inlineTokens(n, e = []) {
    let t,
      s,
      i,
      r = n,
      l,
      o,
      f;
    if (this.tokens.links) {
      const h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (l = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          h.includes(l[0].slice(l[0].lastIndexOf('[') + 1, -1)) &&
            (r =
              r.slice(0, l.index) +
              '[' +
              'a'.repeat(l[0].length - 2) +
              ']' +
              r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (l = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r =
        r.slice(0, l.index) +
        '[' +
        'a'.repeat(l[0].length - 2) +
        ']' +
        r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (l = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
      r =
        r.slice(0, l.index) + '++' + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; n; )
      if (
        (o || (f = ''),
        (o = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some((h) =>
            (t = h.call({ lexer: this }, n, e))
              ? ((n = n.substring(t.raw.length)), e.push(t), !0)
              : !1,
          )
        ))
      ) {
        if ((t = this.tokenizer.escape(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.tag(n))) {
          (n = n.substring(t.raw.length)),
            (s = e[e.length - 1]),
            s && t.type === 'text' && s.type === 'text'
              ? ((s.raw += t.raw), (s.text += t.text))
              : e.push(t);
          continue;
        }
        if ((t = this.tokenizer.link(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.reflink(n, this.tokens.links))) {
          (n = n.substring(t.raw.length)),
            (s = e[e.length - 1]),
            s && t.type === 'text' && s.type === 'text'
              ? ((s.raw += t.raw), (s.text += t.text))
              : e.push(t);
          continue;
        }
        if ((t = this.tokenizer.emStrong(n, r, f))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.codespan(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.br(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.del(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if ((t = this.tokenizer.autolink(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if (!this.state.inLink && (t = this.tokenizer.url(n))) {
          (n = n.substring(t.raw.length)), e.push(t);
          continue;
        }
        if (((i = n), this.options.extensions && this.options.extensions.startInline)) {
          let h = 1 / 0;
          const g = n.slice(1);
          let u;
          this.options.extensions.startInline.forEach((x) => {
            (u = x.call({ lexer: this }, g)),
              typeof u == 'number' && u >= 0 && (h = Math.min(h, u));
          }),
            h < 1 / 0 && h >= 0 && (i = n.substring(0, h + 1));
        }
        if ((t = this.tokenizer.inlineText(i))) {
          (n = n.substring(t.raw.length)),
            t.raw.slice(-1) !== '_' && (f = t.raw.slice(-1)),
            (o = !0),
            (s = e[e.length - 1]),
            s && s.type === 'text' ? ((s.raw += t.raw), (s.text += t.text)) : e.push(t);
          continue;
        }
        if (n) {
          const h = 'Infinite loop on byte: ' + n.charCodeAt(0);
          if (this.options.silent) {
            console.error(h);
            break;
          } else throw new Error(h);
        }
      }
    return e;
  }
}
class Z {
  constructor(n) {
    m(this, 'options');
    this.options = n || S;
  }
  code(n, e, t) {
    var i;
    const s = (i = (e || '').match(/^\S*/)) == null ? void 0 : i[0];
    return (
      (n =
        n.replace(/\n$/, '') +
        `
`),
      s
        ? '<pre><code class="language-' +
          w(s) +
          '">' +
          (t ? n : w(n, !0)) +
          `</code></pre>
`
        : '<pre><code>' +
          (t ? n : w(n, !0)) +
          `</code></pre>
`
    );
  }
  blockquote(n) {
    return `<blockquote>
${n}</blockquote>
`;
  }
  html(n, e) {
    return n;
  }
  heading(n, e, t) {
    return `<h${e}>${n}</h${e}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(n, e, t) {
    const s = e ? 'ol' : 'ul',
      i = e && t !== 1 ? ' start="' + t + '"' : '';
    return (
      '<' +
      s +
      i +
      `>
` +
      n +
      '</' +
      s +
      `>
`
    );
  }
  listitem(n, e, t) {
    return `<li>${n}</li>
`;
  }
  checkbox(n) {
    return '<input ' + (n ? 'checked="" ' : '') + 'disabled="" type="checkbox">';
  }
  paragraph(n) {
    return `<p>${n}</p>
`;
  }
  table(n, e) {
    return (
      e && (e = `<tbody>${e}</tbody>`),
      `<table>
<thead>
` +
        n +
        `</thead>
` +
        e +
        `</table>
`
    );
  }
  tablerow(n) {
    return `<tr>
${n}</tr>
`;
  }
  tablecell(n, e) {
    const t = e.header ? 'th' : 'td';
    return (
      (e.align ? `<${t} align="${e.align}">` : `<${t}>`) +
      n +
      `</${t}>
`
    );
  }
  strong(n) {
    return `<strong>${n}</strong>`;
  }
  em(n) {
    return `<em>${n}</em>`;
  }
  codespan(n) {
    return `<code>${n}</code>`;
  }
  br() {
    return '<br>';
  }
  del(n) {
    return `<del>${n}</del>`;
  }
  link(n, e, t) {
    const s = X(n);
    if (s === null) return t;
    n = s;
    let i = '<a href="' + n + '"';
    return e && (i += ' title="' + e + '"'), (i += '>' + t + '</a>'), i;
  }
  image(n, e, t) {
    const s = X(n);
    if (s === null) return t;
    n = s;
    let i = `<img src="${n}" alt="${t}"`;
    return e && (i += ` title="${e}"`), (i += '>'), i;
  }
  text(n) {
    return n;
  }
}
class U {
  strong(n) {
    return n;
  }
  em(n) {
    return n;
  }
  codespan(n) {
    return n;
  }
  del(n) {
    return n;
  }
  html(n) {
    return n;
  }
  text(n) {
    return n;
  }
  link(n, e, t) {
    return '' + t;
  }
  image(n, e, t) {
    return '' + t;
  }
  br() {
    return '';
  }
}
class y {
  constructor(n) {
    m(this, 'options');
    m(this, 'renderer');
    m(this, 'textRenderer');
    (this.options = n || S),
      (this.options.renderer = this.options.renderer || new Z()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new U());
  }
  static parse(n, e) {
    return new y(e).parse(n);
  }
  static parseInline(n, e) {
    return new y(e).parseInline(n);
  }
  parse(n, e = !0) {
    let t = '';
    for (let s = 0; s < n.length; s++) {
      const i = n[s];
      if (
        this.options.extensions &&
        this.options.extensions.renderers &&
        this.options.extensions.renderers[i.type]
      ) {
        const r = i,
          l = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (
          l !== !1 ||
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
          ].includes(r.type)
        ) {
          t += l || '';
          continue;
        }
      }
      switch (i.type) {
        case 'space':
          continue;
        case 'hr': {
          t += this.renderer.hr();
          continue;
        }
        case 'heading': {
          const r = i;
          t += this.renderer.heading(
            this.parseInline(r.tokens),
            r.depth,
            _e(this.parseInline(r.tokens, this.textRenderer)),
          );
          continue;
        }
        case 'code': {
          const r = i;
          t += this.renderer.code(r.text, r.lang, !!r.escaped);
          continue;
        }
        case 'table': {
          const r = i;
          let l = '',
            o = '';
          for (let h = 0; h < r.header.length; h++)
            o += this.renderer.tablecell(this.parseInline(r.header[h].tokens), {
              header: !0,
              align: r.align[h],
            });
          l += this.renderer.tablerow(o);
          let f = '';
          for (let h = 0; h < r.rows.length; h++) {
            const g = r.rows[h];
            o = '';
            for (let u = 0; u < g.length; u++)
              o += this.renderer.tablecell(this.parseInline(g[u].tokens), {
                header: !1,
                align: r.align[u],
              });
            f += this.renderer.tablerow(o);
          }
          t += this.renderer.table(l, f);
          continue;
        }
        case 'blockquote': {
          const r = i,
            l = this.parse(r.tokens);
          t += this.renderer.blockquote(l);
          continue;
        }
        case 'list': {
          const r = i,
            l = r.ordered,
            o = r.start,
            f = r.loose;
          let h = '';
          for (let g = 0; g < r.items.length; g++) {
            const u = r.items[g],
              x = u.checked,
              $ = u.task;
            let T = '';
            if (u.task) {
              const z = this.renderer.checkbox(!!x);
              f
                ? u.tokens.length > 0 && u.tokens[0].type === 'paragraph'
                  ? ((u.tokens[0].text = z + ' ' + u.tokens[0].text),
                    u.tokens[0].tokens &&
                      u.tokens[0].tokens.length > 0 &&
                      u.tokens[0].tokens[0].type === 'text' &&
                      (u.tokens[0].tokens[0].text = z + ' ' + u.tokens[0].tokens[0].text))
                  : u.tokens.unshift({ type: 'text', text: z + ' ' })
                : (T += z + ' ');
            }
            (T += this.parse(u.tokens, f)), (h += this.renderer.listitem(T, $, !!x));
          }
          t += this.renderer.list(h, l, o);
          continue;
        }
        case 'html': {
          const r = i;
          t += this.renderer.html(r.text, r.block);
          continue;
        }
        case 'paragraph': {
          const r = i;
          t += this.renderer.paragraph(this.parseInline(r.tokens));
          continue;
        }
        case 'text': {
          let r = i,
            l = r.tokens ? this.parseInline(r.tokens) : r.text;
          for (; s + 1 < n.length && n[s + 1].type === 'text'; )
            (r = n[++s]),
              (l +=
                `
` + (r.tokens ? this.parseInline(r.tokens) : r.text));
          t += e ? this.renderer.paragraph(l) : l;
          continue;
        }
        default: {
          const r = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(r), '';
          throw new Error(r);
        }
      }
    }
    return t;
  }
  parseInline(n, e) {
    e = e || this.renderer;
    let t = '';
    for (let s = 0; s < n.length; s++) {
      const i = n[s];
      if (
        this.options.extensions &&
        this.options.extensions.renderers &&
        this.options.extensions.renderers[i.type]
      ) {
        const r = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (
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
          ].includes(i.type)
        ) {
          t += r || '';
          continue;
        }
      }
      switch (i.type) {
        case 'escape': {
          const r = i;
          t += e.text(r.text);
          break;
        }
        case 'html': {
          const r = i;
          t += e.html(r.text);
          break;
        }
        case 'link': {
          const r = i;
          t += e.link(r.href, r.title, this.parseInline(r.tokens, e));
          break;
        }
        case 'image': {
          const r = i;
          t += e.image(r.href, r.title, r.text);
          break;
        }
        case 'strong': {
          const r = i;
          t += e.strong(this.parseInline(r.tokens, e));
          break;
        }
        case 'em': {
          const r = i;
          t += e.em(this.parseInline(r.tokens, e));
          break;
        }
        case 'codespan': {
          const r = i;
          t += e.codespan(r.text);
          break;
        }
        case 'br': {
          t += e.br();
          break;
        }
        case 'del': {
          const r = i;
          t += e.del(this.parseInline(r.tokens, e));
          break;
        }
        case 'text': {
          const r = i;
          t += e.text(r.text);
          break;
        }
        default: {
          const r = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(r), '';
          throw new Error(r);
        }
      }
    }
    return t;
  }
}
class A {
  constructor(n) {
    m(this, 'options');
    this.options = n || S;
  }
  preprocess(n) {
    return n;
  }
  postprocess(n) {
    return n;
  }
}
m(A, 'passThroughHooks', new Set(['preprocess', 'postprocess']));
var E, Q, q, te;
class ze {
  constructor(...n) {
    P(this, E);
    P(this, q);
    m(this, 'defaults', O());
    m(this, 'options', this.setOptions);
    m(this, 'parse', L(this, E, Q).call(this, _.lex, y.parse));
    m(this, 'parseInline', L(this, E, Q).call(this, _.lexInline, y.parseInline));
    m(this, 'Parser', y);
    m(this, 'parser', y.parse);
    m(this, 'Renderer', Z);
    m(this, 'TextRenderer', U);
    m(this, 'Lexer', _);
    m(this, 'lexer', _.lex);
    m(this, 'Tokenizer', B);
    m(this, 'Hooks', A);
    this.use(...n);
  }
  walkTokens(n, e) {
    var s, i;
    let t = [];
    for (const r of n)
      switch (((t = t.concat(e.call(this, r))), r.type)) {
        case 'table': {
          const l = r;
          for (const o of l.header) t = t.concat(this.walkTokens(o.tokens, e));
          for (const o of l.rows) for (const f of o) t = t.concat(this.walkTokens(f.tokens, e));
          break;
        }
        case 'list': {
          const l = r;
          t = t.concat(this.walkTokens(l.items, e));
          break;
        }
        default: {
          const l = r;
          (i = (s = this.defaults.extensions) == null ? void 0 : s.childTokens) != null && i[l.type]
            ? this.defaults.extensions.childTokens[l.type].forEach((o) => {
                t = t.concat(this.walkTokens(l[o], e));
              })
            : l.tokens && (t = t.concat(this.walkTokens(l.tokens, e)));
        }
      }
    return t;
  }
  use(...n) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return (
      n.forEach((t) => {
        const s = b({}, t);
        if (
          ((s.async = this.defaults.async || s.async || !1),
          t.extensions &&
            (t.extensions.forEach((i) => {
              if (!i.name) throw new Error('extension name required');
              if ('renderer' in i) {
                const r = e.renderers[i.name];
                r
                  ? (e.renderers[i.name] = function (...l) {
                      let o = i.renderer.apply(this, l);
                      return o === !1 && (o = r.apply(this, l)), o;
                    })
                  : (e.renderers[i.name] = i.renderer);
              }
              if ('tokenizer' in i) {
                if (!i.level || (i.level !== 'block' && i.level !== 'inline'))
                  throw new Error("extension level must be 'block' or 'inline'");
                const r = e[i.level];
                r ? r.unshift(i.tokenizer) : (e[i.level] = [i.tokenizer]),
                  i.start &&
                    (i.level === 'block'
                      ? e.startBlock
                        ? e.startBlock.push(i.start)
                        : (e.startBlock = [i.start])
                      : i.level === 'inline' &&
                        (e.startInline
                          ? e.startInline.push(i.start)
                          : (e.startInline = [i.start])));
              }
              'childTokens' in i && i.childTokens && (e.childTokens[i.name] = i.childTokens);
            }),
            (s.extensions = e)),
          t.renderer)
        ) {
          const i = this.defaults.renderer || new Z(this.defaults);
          for (const r in t.renderer) {
            const l = t.renderer[r],
              o = r,
              f = i[o];
            i[o] = (...h) => {
              let g = l.apply(i, h);
              return g === !1 && (g = f.apply(i, h)), g || '';
            };
          }
          s.renderer = i;
        }
        if (t.tokenizer) {
          const i = this.defaults.tokenizer || new B(this.defaults);
          for (const r in t.tokenizer) {
            const l = t.tokenizer[r],
              o = r,
              f = i[o];
            i[o] = (...h) => {
              let g = l.apply(i, h);
              return g === !1 && (g = f.apply(i, h)), g;
            };
          }
          s.tokenizer = i;
        }
        if (t.hooks) {
          const i = this.defaults.hooks || new A();
          for (const r in t.hooks) {
            const l = t.hooks[r],
              o = r,
              f = i[o];
            A.passThroughHooks.has(r)
              ? (i[o] = (h) => {
                  if (this.defaults.async)
                    return Promise.resolve(l.call(i, h)).then((u) => f.call(i, u));
                  const g = l.call(i, h);
                  return f.call(i, g);
                })
              : (i[o] = (...h) => {
                  let g = l.apply(i, h);
                  return g === !1 && (g = f.apply(i, h)), g;
                });
          }
          s.hooks = i;
        }
        if (t.walkTokens) {
          const i = this.defaults.walkTokens,
            r = t.walkTokens;
          s.walkTokens = function (l) {
            let o = [];
            return o.push(r.call(this, l)), i && (o = o.concat(i.call(this, l))), o;
          };
        }
        this.defaults = b(b({}, this.defaults), s);
      }),
      this
    );
  }
  setOptions(n) {
    return (this.defaults = b(b({}, this.defaults), n)), this;
  }
}
(E = new WeakSet()),
  (Q = function (n, e) {
    return (t, s) => {
      const i = b({}, s),
        r = b(b({}, this.defaults), i);
      this.defaults.async === !0 &&
        i.async === !1 &&
        (r.silent ||
          console.warn(
            'marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.',
          ),
        (r.async = !0));
      const l = L(this, q, te).call(this, !!r.silent, !!r.async);
      if (typeof t == 'undefined' || t === null)
        return l(new Error('marked(): input parameter is undefined or null'));
      if (typeof t != 'string')
        return l(
          new Error(
            'marked(): input parameter is of type ' +
              Object.prototype.toString.call(t) +
              ', string expected',
          ),
        );
      if ((r.hooks && (r.hooks.options = r), r.async))
        return Promise.resolve(r.hooks ? r.hooks.preprocess(t) : t)
          .then((o) => n(o, r))
          .then((o) =>
            r.walkTokens ? Promise.all(this.walkTokens(o, r.walkTokens)).then(() => o) : o,
          )
          .then((o) => e(o, r))
          .then((o) => (r.hooks ? r.hooks.postprocess(o) : o))
          .catch(l);
      try {
        r.hooks && (t = r.hooks.preprocess(t));
        const o = n(t, r);
        r.walkTokens && this.walkTokens(o, r.walkTokens);
        let f = e(o, r);
        return r.hooks && (f = r.hooks.postprocess(f)), f;
      } catch (o) {
        return l(o);
      }
    };
  }),
  (q = new WeakSet()),
  (te = function (n, e) {
    return (t) => {
      if (
        ((t.message += `
Please report this to https://github.com/markedjs/marked.`),
        n)
      ) {
        const s = '<p>An error occurred:</p><pre>' + w(t.message + '', !0) + '</pre>';
        return e ? Promise.resolve(s) : s;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  });
const R = new ze();
function d(a, n) {
  return R.parse(a, n);
}
d.options = d.setOptions = function (a) {
  return R.setOptions(a), (d.defaults = R.defaults), J(d.defaults), d;
};
d.getDefaults = O;
d.defaults = S;
d.use = function (...a) {
  return R.use(...a), (d.defaults = R.defaults), J(d.defaults), d;
};
d.walkTokens = function (a, n) {
  return R.walkTokens(a, n);
};
d.parseInline = R.parseInline;
d.Parser = y;
d.parser = y.parse;
d.Renderer = Z;
d.TextRenderer = U;
d.Lexer = _;
d.lexer = _.lex;
d.Tokenizer = B;
d.Hooks = A;
d.parse = d;
d.options;
d.setOptions;
d.use;
d.walkTokens;
d.parseInline;
y.parse;
_.lex;
const Re = { class: 'page-container' },
  Se = ['innerHTML'],
  Ie = ae({
    __name: 'index',
    setup(a) {
      const n = ce(`# Marked in Node.js

Rendered by **marked**.`),
        e = he(() => d.parse(n.value));
      return (t, s) => {
        const i = pe('el-input');
        return (
          ue(),
          fe('div', Re, [
            ge(
              i,
              {
                modelValue: n.value,
                'onUpdate:modelValue': s[0] || (s[0] = (r) => (n.value = r)),
                class: 'input',
                type: 'textarea',
              },
              null,
              8,
              ['modelValue'],
            ),
            ke('div', { class: 'marked', innerHTML: e.value }, null, 8, Se),
          ])
        );
      };
    },
  });
const Ce = de(Ie, [['__scopeId', 'data-v-d4a82a36']]);
export { Ce as default };
