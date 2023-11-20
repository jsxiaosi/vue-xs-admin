var ne = Object.defineProperty,
  se = Object.defineProperties;
var ie = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var re = Object.prototype.hasOwnProperty,
  le = Object.prototype.propertyIsEnumerable;
var P = (a, t, e) =>
    t in a ? ne(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (a[t] = e),
  b = (a, t) => {
    for (var e in t || (t = {})) re.call(t, e) && P(a, e, t[e]);
    if (V) for (var e of V(t)) le.call(t, e) && P(a, e, t[e]);
    return a;
  },
  I = (a, t) => se(a, ie(t));
var x = (a, t, e) => (P(a, typeof t != 'symbol' ? t + '' : t, e), e),
  oe = (a, t, e) => {
    if (!t.has(a)) throw TypeError('Cannot ' + e);
  };
var j = (a, t, e) => {
  if (t.has(a)) throw TypeError('Cannot add the same private member more than once');
  t instanceof WeakSet ? t.add(a) : t.set(a, e);
};
var L = (a, t, e) => (oe(a, t, 'access private method'), e);
import {
  d as ae,
  j as ce,
  A as he,
  a as pe,
  o as ue,
  c as fe,
  h as ge,
  f as ke,
} from './index-nnTfcizh.js';
import { _ as de } from './plugin-vueexport-helper-x3n3nnut.js';
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
function w(a, t) {
  if (t) {
    if (Y.test(a)) return a.replace(me, K);
  } else if (ee.test(a)) return a.replace(xe, K);
  return a;
}
const we = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function _e(a) {
  return a.replace(
    we,
    (t, e) => (
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
function k(a, t) {
  (a = typeof a == 'string' ? a : a.source), (t = t || '');
  const e = {
    replace: (n, s) => (
      (s = typeof s == 'object' && 'source' in s ? s.source : s),
      (s = s.replace(ye, '$1')),
      (a = a.replace(n, s)),
      e
    ),
    getRegex: () => new RegExp(a, t),
  };
  return e;
}
function X(a) {
  try {
    a = encodeURI(a).replace(/%25/g, '%');
  } catch (t) {
    return null;
  }
  return a;
}
const B = { exec: () => null };
function W(a, t) {
  const e = a.replace(/\|/g, (i, r, l) => {
      let o = !1,
        u = r;
      for (; --u >= 0 && l[u] === '\\'; ) o = !o;
      return o ? '|' : ' |';
    }),
    n = e.split(/ \|/);
  let s = 0;
  if ((n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), t))
    if (n.length > t) n.splice(t);
    else for (; n.length < t; ) n.push('');
  for (; s < n.length; s++) n[s] = n[s].trim().replace(/\\\|/g, '|');
  return n;
}
function C(a, t, e) {
  const n = a.length;
  if (n === 0) return '';
  let s = 0;
  for (; s < n; ) {
    const i = a.charAt(n - s - 1);
    if (i === t && !e) s++;
    else if (i !== t && e) s++;
    else break;
  }
  return a.slice(0, n - s);
}
function $e(a, t) {
  if (a.indexOf(t[1]) === -1) return -1;
  let e = 0;
  for (let n = 0; n < a.length; n++)
    if (a[n] === '\\') n++;
    else if (a[n] === t[0]) e++;
    else if (a[n] === t[1] && (e--, e < 0)) return n;
  return -1;
}
function G(a, t, e, n) {
  const s = t.href,
    i = t.title ? w(t.title) : null,
    r = a[1].replace(/\\([\[\]])/g, '$1');
  if (a[0].charAt(0) !== '!') {
    n.state.inLink = !0;
    const l = { type: 'link', raw: e, href: s, title: i, text: r, tokens: n.inlineTokens(r) };
    return (n.state.inLink = !1), l;
  }
  return { type: 'image', raw: e, href: s, title: i, text: w(r) };
}
function Te(a, t) {
  const e = a.match(/^(\s+)(?:```)/);
  if (e === null) return t;
  const n = e[1];
  return t
    .split(
      `
`,
    )
    .map((s) => {
      const i = s.match(/^\s+/);
      if (i === null) return s;
      const [r] = i;
      return r.length >= n.length ? s.slice(n.length) : s;
    }).join(`
`);
}
class Z {
  constructor(t) {
    x(this, 'options');
    x(this, 'rules');
    x(this, 'lexer');
    this.options = t || S;
  }
  space(t) {
    const e = this.rules.block.newline.exec(t);
    if (e && e[0].length > 0) return { type: 'space', raw: e[0] };
  }
  code(t) {
    const e = this.rules.block.code.exec(t);
    if (e) {
      const n = e[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: e[0],
        codeBlockStyle: 'indented',
        text: this.options.pedantic
          ? n
          : C(
              n,
              `
`,
            ),
      };
    }
  }
  fences(t) {
    const e = this.rules.block.fences.exec(t);
    if (e) {
      const n = e[0],
        s = Te(n, e[3] || '');
      return {
        type: 'code',
        raw: n,
        lang: e[2] ? e[2].trim().replace(this.rules.inline._escapes, '$1') : e[2],
        text: s,
      };
    }
  }
  heading(t) {
    const e = this.rules.block.heading.exec(t);
    if (e) {
      let n = e[2].trim();
      if (/#$/.test(n)) {
        const s = C(n, '#');
        (this.options.pedantic || !s || / $/.test(s)) && (n = s.trim());
      }
      return {
        type: 'heading',
        raw: e[0],
        depth: e[1].length,
        text: n,
        tokens: this.lexer.inline(n),
      };
    }
  }
  hr(t) {
    const e = this.rules.block.hr.exec(t);
    if (e) return { type: 'hr', raw: e[0] };
  }
  blockquote(t) {
    const e = this.rules.block.blockquote.exec(t);
    if (e) {
      const n = C(
          e[0].replace(/^ *>[ \t]?/gm, ''),
          `
`,
        ),
        s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const i = this.lexer.blockTokens(n);
      return (this.lexer.state.top = s), { type: 'blockquote', raw: e[0], tokens: i, text: n };
    }
  }
  list(t) {
    let e = this.rules.block.list.exec(t);
    if (e) {
      let n = e[1].trim();
      const s = n.length > 1,
        i = {
          type: 'list',
          raw: '',
          ordered: s,
          start: s ? +n.slice(0, -1) : '',
          loose: !1,
          items: [],
        };
      (n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`),
        this.options.pedantic && (n = s ? n : '[*+-]');
      const r = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let l = '',
        o = '',
        u = !1;
      for (; t; ) {
        let h = !1;
        if (!(e = r.exec(t)) || this.rules.block.hr.test(t)) break;
        (l = e[0]), (t = t.substring(l.length));
        let g = e[2]
            .split(
              `
`,
              1,
            )[0]
            .replace(/^\t+/, (D) => ' '.repeat(3 * D.length)),
          f = t.split(
            `
`,
            1,
          )[0],
          m = 0;
        this.options.pedantic
          ? ((m = 2), (o = g.trimStart()))
          : ((m = e[2].search(/[^ ]/)), (m = m > 4 ? 1 : m), (o = g.slice(m)), (m += e[1].length));
        let T = !1;
        if (
          (!g &&
            /^ *$/.test(f) &&
            ((l +=
              f +
              `
`),
            (t = t.substring(f.length + 1)),
            (h = !0)),
          !h)
        ) {
          const D = new RegExp(
              `^ {0,${Math.min(3, m - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`,
            ),
            H = new RegExp(
              `^ {0,${Math.min(3, m - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
            ),
            N = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:\`\`\`|~~~)`),
            F = new RegExp(`^ {0,${Math.min(3, m - 1)}}#`);
          for (; t; ) {
            const M = t.split(
              `
`,
              1,
            )[0];
            if (
              ((f = M),
              this.options.pedantic && (f = f.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
              N.test(f) || F.test(f) || D.test(f) || H.test(t))
            )
              break;
            if (f.search(/[^ ]/) >= m || !f.trim())
              o +=
                `
` + f.slice(m);
            else {
              if (T || g.search(/[^ ]/) >= 4 || N.test(g) || F.test(g) || H.test(g)) break;
              o +=
                `
` + f;
            }
            !T && !f.trim() && (T = !0),
              (l +=
                M +
                `
`),
              (t = t.substring(M.length + 1)),
              (g = f.slice(m));
          }
        }
        i.loose || (u ? (i.loose = !0) : /\n *\n *$/.test(l) && (u = !0));
        let _ = null,
          z;
        this.options.gfm &&
          ((_ = /^\[[ xX]\] /.exec(o)),
          _ && ((z = _[0] !== '[ ] '), (o = o.replace(/^\[[ xX]\] +/, '')))),
          i.items.push({
            type: 'list_item',
            raw: l,
            task: !!_,
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
          const g = i.items[h].tokens.filter((m) => m.type === 'space'),
            f = g.length > 0 && g.some((m) => /\n.*\n/.test(m.raw));
          i.loose = f;
        }
      if (i.loose) for (let h = 0; h < i.items.length; h++) i.items[h].loose = !0;
      return i;
    }
  }
  html(t) {
    const e = this.rules.block.html.exec(t);
    if (e)
      return {
        type: 'html',
        block: !0,
        raw: e[0],
        pre: e[1] === 'pre' || e[1] === 'script' || e[1] === 'style',
        text: e[0],
      };
  }
  def(t) {
    const e = this.rules.block.def.exec(t);
    if (e) {
      const n = e[1].toLowerCase().replace(/\s+/g, ' '),
        s = e[2] ? e[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline._escapes, '$1') : '',
        i = e[3]
          ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline._escapes, '$1')
          : e[3];
      return { type: 'def', tag: n, raw: e[0], href: s, title: i };
    }
  }
  table(t) {
    const e = this.rules.block.table.exec(t);
    if (e) {
      if (!/[:|]/.test(e[2])) return;
      const n = {
        type: 'table',
        raw: e[0],
        header: W(e[1]).map((s) => ({ text: s, tokens: [] })),
        align: e[2].replace(/^\||\| *$/g, '').split('|'),
        rows:
          e[3] && e[3].trim()
            ? e[3].replace(/\n[ \t]*$/, '').split(`
`)
            : [],
      };
      if (n.header.length === n.align.length) {
        let s = n.align.length,
          i,
          r,
          l,
          o;
        for (i = 0; i < s; i++) {
          const u = n.align[i];
          u &&
            (/^ *-+: *$/.test(u)
              ? (n.align[i] = 'right')
              : /^ *:-+: *$/.test(u)
              ? (n.align[i] = 'center')
              : /^ *:-+ *$/.test(u)
              ? (n.align[i] = 'left')
              : (n.align[i] = null));
        }
        for (s = n.rows.length, i = 0; i < s; i++)
          n.rows[i] = W(n.rows[i], n.header.length).map((u) => ({ text: u, tokens: [] }));
        for (s = n.header.length, r = 0; r < s; r++)
          n.header[r].tokens = this.lexer.inline(n.header[r].text);
        for (s = n.rows.length, r = 0; r < s; r++)
          for (o = n.rows[r], l = 0; l < o.length; l++) o[l].tokens = this.lexer.inline(o[l].text);
        return n;
      }
    }
  }
  lheading(t) {
    const e = this.rules.block.lheading.exec(t);
    if (e)
      return {
        type: 'heading',
        raw: e[0],
        depth: e[2].charAt(0) === '=' ? 1 : 2,
        text: e[1],
        tokens: this.lexer.inline(e[1]),
      };
  }
  paragraph(t) {
    const e = this.rules.block.paragraph.exec(t);
    if (e) {
      const n =
        e[1].charAt(e[1].length - 1) ===
        `
`
          ? e[1].slice(0, -1)
          : e[1];
      return { type: 'paragraph', raw: e[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(t) {
    const e = this.rules.block.text.exec(t);
    if (e) return { type: 'text', raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(t) {
    const e = this.rules.inline.escape.exec(t);
    if (e) return { type: 'escape', raw: e[0], text: w(e[1]) };
  }
  tag(t) {
    const e = this.rules.inline.tag.exec(t);
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
  link(t) {
    const e = this.rules.inline.link.exec(t);
    if (e) {
      const n = e[2].trim();
      if (!this.options.pedantic && /^</.test(n)) {
        if (!/>$/.test(n)) return;
        const r = C(n.slice(0, -1), '\\');
        if ((n.length - r.length) % 2 === 0) return;
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
          (this.options.pedantic && !/>$/.test(n) ? (s = s.slice(1)) : (s = s.slice(1, -1))),
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
  reflink(t, e) {
    let n;
    if ((n = this.rules.inline.reflink.exec(t)) || (n = this.rules.inline.nolink.exec(t))) {
      let s = (n[2] || n[1]).replace(/\s+/g, ' ');
      if (((s = e[s.toLowerCase()]), !s)) {
        const i = n[0].charAt(0);
        return { type: 'text', raw: i, text: i };
      }
      return G(n, s, n[0], this.lexer);
    }
  }
  emStrong(t, e, n = '') {
    let s = this.rules.inline.emStrong.lDelim.exec(t);
    if (!s || (s[3] && n.match(/[\p{L}\p{N}]/u))) return;
    if (!(s[1] || s[2] || '') || !n || this.rules.inline.punctuation.exec(n)) {
      const r = [...s[0]].length - 1;
      let l,
        o,
        u = r,
        h = 0;
      const g =
        s[0][0] === '*'
          ? this.rules.inline.emStrong.rDelimAst
          : this.rules.inline.emStrong.rDelimUnd;
      for (g.lastIndex = 0, e = e.slice(-1 * t.length + r); (s = g.exec(e)) != null; ) {
        if (((l = s[1] || s[2] || s[3] || s[4] || s[5] || s[6]), !l)) continue;
        if (((o = [...l].length), s[3] || s[4])) {
          u += o;
          continue;
        } else if ((s[5] || s[6]) && r % 3 && !((r + o) % 3)) {
          h += o;
          continue;
        }
        if (((u -= o), u > 0)) continue;
        o = Math.min(o, o + u + h);
        const f = [...s[0]][0].length,
          m = t.slice(0, r + s.index + f + o);
        if (Math.min(r, o) % 2) {
          const _ = m.slice(1, -1);
          return { type: 'em', raw: m, text: _, tokens: this.lexer.inlineTokens(_) };
        }
        const T = m.slice(2, -2);
        return { type: 'strong', raw: m, text: T, tokens: this.lexer.inlineTokens(T) };
      }
    }
  }
  codespan(t) {
    const e = this.rules.inline.code.exec(t);
    if (e) {
      let n = e[2].replace(/\n/g, ' ');
      const s = /[^ ]/.test(n),
        i = /^ /.test(n) && / $/.test(n);
      return (
        s && i && (n = n.substring(1, n.length - 1)),
        (n = w(n, !0)),
        { type: 'codespan', raw: e[0], text: n }
      );
    }
  }
  br(t) {
    const e = this.rules.inline.br.exec(t);
    if (e) return { type: 'br', raw: e[0] };
  }
  del(t) {
    const e = this.rules.inline.del.exec(t);
    if (e) return { type: 'del', raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) };
  }
  autolink(t) {
    const e = this.rules.inline.autolink.exec(t);
    if (e) {
      let n, s;
      return (
        e[2] === '@' ? ((n = w(e[1])), (s = 'mailto:' + n)) : ((n = w(e[1])), (s = n)),
        { type: 'link', raw: e[0], text: n, href: s, tokens: [{ type: 'text', raw: n, text: n }] }
      );
    }
  }
  url(t) {
    let e;
    if ((e = this.rules.inline.url.exec(t))) {
      let n, s;
      if (e[2] === '@') (n = w(e[0])), (s = 'mailto:' + n);
      else {
        let i;
        do (i = e[0]), (e[0] = this.rules.inline._backpedal.exec(e[0])[0]);
        while (i !== e[0]);
        (n = w(e[0])), e[1] === 'www.' ? (s = 'http://' + e[0]) : (s = e[0]);
      }
      return {
        type: 'link',
        raw: e[0],
        text: n,
        href: s,
        tokens: [{ type: 'text', raw: n, text: n }],
      };
    }
  }
  inlineText(t) {
    const e = this.rules.inline.text.exec(t);
    if (e) {
      let n;
      return (
        this.lexer.state.inRawBlock ? (n = e[0]) : (n = w(e[0])),
        { type: 'text', raw: e[0], text: n }
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
  table: B,
  lheading: /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
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
  .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
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
    '^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
});
p.gfm.table = k(p.gfm.table)
  .replace('hr', p.hr)
  .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', p._tag)
  .getRegex();
p.gfm.paragraph = k(p._paragraph)
  .replace('hr', p.hr)
  .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
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
  fences: B,
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
  url: B,
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
  del: B,
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
class y {
  constructor(t) {
    x(this, 'tokens');
    x(this, 'options');
    x(this, 'state');
    x(this, 'tokenizer');
    x(this, 'inlineQueue');
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = t || S),
      (this.options.tokenizer = this.options.tokenizer || new Z()),
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
  static lex(t, e) {
    return new y(e).lex(t);
  }
  static lexInline(t, e) {
    return new y(e).inlineTokens(t);
  }
  lex(t) {
    (t = t.replace(
      /\r\n|\r/g,
      `
`,
    )),
      this.blockTokens(t, this.tokens);
    let e;
    for (; (e = this.inlineQueue.shift()); ) this.inlineTokens(e.src, e.tokens);
    return this.tokens;
  }
  blockTokens(t, e = []) {
    this.options.pedantic
      ? (t = t.replace(/\t/g, '    ').replace(/^ +$/gm, ''))
      : (t = t.replace(/^( *)(\t+)/gm, (l, o, u) => o + '    '.repeat(u.length)));
    let n, s, i, r;
    for (; t; )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some((l) =>
            (n = l.call({ lexer: this }, t, e))
              ? ((t = t.substring(n.raw.length)), e.push(n), !0)
              : !1,
          )
        )
      ) {
        if ((n = this.tokenizer.space(t))) {
          (t = t.substring(n.raw.length)),
            n.raw.length === 1 && e.length > 0
              ? (e[e.length - 1].raw += `
`)
              : e.push(n);
          continue;
        }
        if ((n = this.tokenizer.code(t))) {
          (t = t.substring(n.raw.length)),
            (s = e[e.length - 1]),
            s && (s.type === 'paragraph' || s.type === 'text')
              ? ((s.raw +=
                  `
` + n.raw),
                (s.text +=
                  `
` + n.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : e.push(n);
          continue;
        }
        if ((n = this.tokenizer.fences(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.heading(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.hr(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.blockquote(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.list(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.html(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.def(t))) {
          (t = t.substring(n.raw.length)),
            (s = e[e.length - 1]),
            s && (s.type === 'paragraph' || s.type === 'text')
              ? ((s.raw +=
                  `
` + n.raw),
                (s.text +=
                  `
` + n.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : this.tokens.links[n.tag] ||
                (this.tokens.links[n.tag] = { href: n.href, title: n.title });
          continue;
        }
        if ((n = this.tokenizer.table(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.lheading(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if (((i = t), this.options.extensions && this.options.extensions.startBlock)) {
          let l = 1 / 0;
          const o = t.slice(1);
          let u;
          this.options.extensions.startBlock.forEach((h) => {
            (u = h.call({ lexer: this }, o)),
              typeof u == 'number' && u >= 0 && (l = Math.min(l, u));
          }),
            l < 1 / 0 && l >= 0 && (i = t.substring(0, l + 1));
        }
        if (this.state.top && (n = this.tokenizer.paragraph(i))) {
          (s = e[e.length - 1]),
            r && s.type === 'paragraph'
              ? ((s.raw +=
                  `
` + n.raw),
                (s.text +=
                  `
` + n.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : e.push(n),
            (r = i.length !== t.length),
            (t = t.substring(n.raw.length));
          continue;
        }
        if ((n = this.tokenizer.text(t))) {
          (t = t.substring(n.raw.length)),
            (s = e[e.length - 1]),
            s && s.type === 'text'
              ? ((s.raw +=
                  `
` + n.raw),
                (s.text +=
                  `
` + n.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = s.text))
              : e.push(n);
          continue;
        }
        if (t) {
          const l = 'Infinite loop on byte: ' + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(l);
            break;
          } else throw new Error(l);
        }
      }
    return (this.state.top = !0), e;
  }
  inline(t, e = []) {
    return this.inlineQueue.push({ src: t, tokens: e }), e;
  }
  inlineTokens(t, e = []) {
    let n,
      s,
      i,
      r = t,
      l,
      o,
      u;
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
    for (; t; )
      if (
        (o || (u = ''),
        (o = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some((h) =>
            (n = h.call({ lexer: this }, t, e))
              ? ((t = t.substring(n.raw.length)), e.push(n), !0)
              : !1,
          )
        ))
      ) {
        if ((n = this.tokenizer.escape(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.tag(t))) {
          (t = t.substring(n.raw.length)),
            (s = e[e.length - 1]),
            s && n.type === 'text' && s.type === 'text'
              ? ((s.raw += n.raw), (s.text += n.text))
              : e.push(n);
          continue;
        }
        if ((n = this.tokenizer.link(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.reflink(t, this.tokens.links))) {
          (t = t.substring(n.raw.length)),
            (s = e[e.length - 1]),
            s && n.type === 'text' && s.type === 'text'
              ? ((s.raw += n.raw), (s.text += n.text))
              : e.push(n);
          continue;
        }
        if ((n = this.tokenizer.emStrong(t, r, u))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.codespan(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.br(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.del(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if ((n = this.tokenizer.autolink(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(t))) {
          (t = t.substring(n.raw.length)), e.push(n);
          continue;
        }
        if (((i = t), this.options.extensions && this.options.extensions.startInline)) {
          let h = 1 / 0;
          const g = t.slice(1);
          let f;
          this.options.extensions.startInline.forEach((m) => {
            (f = m.call({ lexer: this }, g)),
              typeof f == 'number' && f >= 0 && (h = Math.min(h, f));
          }),
            h < 1 / 0 && h >= 0 && (i = t.substring(0, h + 1));
        }
        if ((n = this.tokenizer.inlineText(i))) {
          (t = t.substring(n.raw.length)),
            n.raw.slice(-1) !== '_' && (u = n.raw.slice(-1)),
            (o = !0),
            (s = e[e.length - 1]),
            s && s.type === 'text' ? ((s.raw += n.raw), (s.text += n.text)) : e.push(n);
          continue;
        }
        if (t) {
          const h = 'Infinite loop on byte: ' + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(h);
            break;
          } else throw new Error(h);
        }
      }
    return e;
  }
}
class q {
  constructor(t) {
    x(this, 'options');
    this.options = t || S;
  }
  code(t, e, n) {
    var i;
    const s = (i = (e || '').match(/^\S*/)) == null ? void 0 : i[0];
    return (
      (t =
        t.replace(/\n$/, '') +
        `
`),
      s
        ? '<pre><code class="language-' +
          w(s) +
          '">' +
          (n ? t : w(t, !0)) +
          `</code></pre>
`
        : '<pre><code>' +
          (n ? t : w(t, !0)) +
          `</code></pre>
`
    );
  }
  blockquote(t) {
    return `<blockquote>
${t}</blockquote>
`;
  }
  html(t, e) {
    return t;
  }
  heading(t, e, n) {
    return `<h${e}>${t}</h${e}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(t, e, n) {
    const s = e ? 'ol' : 'ul',
      i = e && n !== 1 ? ' start="' + n + '"' : '';
    return (
      '<' +
      s +
      i +
      `>
` +
      t +
      '</' +
      s +
      `>
`
    );
  }
  listitem(t, e, n) {
    return `<li>${t}</li>
`;
  }
  checkbox(t) {
    return '<input ' + (t ? 'checked="" ' : '') + 'disabled="" type="checkbox">';
  }
  paragraph(t) {
    return `<p>${t}</p>
`;
  }
  table(t, e) {
    return (
      e && (e = `<tbody>${e}</tbody>`),
      `<table>
<thead>
` +
        t +
        `</thead>
` +
        e +
        `</table>
`
    );
  }
  tablerow(t) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t, e) {
    const n = e.header ? 'th' : 'td';
    return (
      (e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
      t +
      `</${n}>
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
    return '<br>';
  }
  del(t) {
    return `<del>${t}</del>`;
  }
  link(t, e, n) {
    const s = X(t);
    if (s === null) return n;
    t = s;
    let i = '<a href="' + t + '"';
    return e && (i += ' title="' + e + '"'), (i += '>' + n + '</a>'), i;
  }
  image(t, e, n) {
    const s = X(t);
    if (s === null) return n;
    t = s;
    let i = `<img src="${t}" alt="${n}"`;
    return e && (i += ` title="${e}"`), (i += '>'), i;
  }
  text(t) {
    return t;
  }
}
class U {
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
  link(t, e, n) {
    return '' + n;
  }
  image(t, e, n) {
    return '' + n;
  }
  br() {
    return '';
  }
}
class $ {
  constructor(t) {
    x(this, 'options');
    x(this, 'renderer');
    x(this, 'textRenderer');
    (this.options = t || S),
      (this.options.renderer = this.options.renderer || new q()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new U());
  }
  static parse(t, e) {
    return new $(e).parse(t);
  }
  static parseInline(t, e) {
    return new $(e).parseInline(t);
  }
  parse(t, e = !0) {
    let n = '';
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
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
          n += l || '';
          continue;
        }
      }
      switch (i.type) {
        case 'space':
          continue;
        case 'hr': {
          n += this.renderer.hr();
          continue;
        }
        case 'heading': {
          const r = i;
          n += this.renderer.heading(
            this.parseInline(r.tokens),
            r.depth,
            _e(this.parseInline(r.tokens, this.textRenderer)),
          );
          continue;
        }
        case 'code': {
          const r = i;
          n += this.renderer.code(r.text, r.lang, !!r.escaped);
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
          let u = '';
          for (let h = 0; h < r.rows.length; h++) {
            const g = r.rows[h];
            o = '';
            for (let f = 0; f < g.length; f++)
              o += this.renderer.tablecell(this.parseInline(g[f].tokens), {
                header: !1,
                align: r.align[f],
              });
            u += this.renderer.tablerow(o);
          }
          n += this.renderer.table(l, u);
          continue;
        }
        case 'blockquote': {
          const r = i,
            l = this.parse(r.tokens);
          n += this.renderer.blockquote(l);
          continue;
        }
        case 'list': {
          const r = i,
            l = r.ordered,
            o = r.start,
            u = r.loose;
          let h = '';
          for (let g = 0; g < r.items.length; g++) {
            const f = r.items[g],
              m = f.checked,
              T = f.task;
            let _ = '';
            if (f.task) {
              const z = this.renderer.checkbox(!!m);
              u
                ? f.tokens.length > 0 && f.tokens[0].type === 'paragraph'
                  ? ((f.tokens[0].text = z + ' ' + f.tokens[0].text),
                    f.tokens[0].tokens &&
                      f.tokens[0].tokens.length > 0 &&
                      f.tokens[0].tokens[0].type === 'text' &&
                      (f.tokens[0].tokens[0].text = z + ' ' + f.tokens[0].tokens[0].text))
                  : f.tokens.unshift({ type: 'text', text: z + ' ' })
                : (_ += z + ' ');
            }
            (_ += this.parse(f.tokens, u)), (h += this.renderer.listitem(_, T, !!m));
          }
          n += this.renderer.list(h, l, o);
          continue;
        }
        case 'html': {
          const r = i;
          n += this.renderer.html(r.text, r.block);
          continue;
        }
        case 'paragraph': {
          const r = i;
          n += this.renderer.paragraph(this.parseInline(r.tokens));
          continue;
        }
        case 'text': {
          let r = i,
            l = r.tokens ? this.parseInline(r.tokens) : r.text;
          for (; s + 1 < t.length && t[s + 1].type === 'text'; )
            (r = t[++s]),
              (l +=
                `
` + (r.tokens ? this.parseInline(r.tokens) : r.text));
          n += e ? this.renderer.paragraph(l) : l;
          continue;
        }
        default: {
          const r = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(r), '';
          throw new Error(r);
        }
      }
    }
    return n;
  }
  parseInline(t, e) {
    e = e || this.renderer;
    let n = '';
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
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
          n += r || '';
          continue;
        }
      }
      switch (i.type) {
        case 'escape': {
          const r = i;
          n += e.text(r.text);
          break;
        }
        case 'html': {
          const r = i;
          n += e.html(r.text);
          break;
        }
        case 'link': {
          const r = i;
          n += e.link(r.href, r.title, this.parseInline(r.tokens, e));
          break;
        }
        case 'image': {
          const r = i;
          n += e.image(r.href, r.title, r.text);
          break;
        }
        case 'strong': {
          const r = i;
          n += e.strong(this.parseInline(r.tokens, e));
          break;
        }
        case 'em': {
          const r = i;
          n += e.em(this.parseInline(r.tokens, e));
          break;
        }
        case 'codespan': {
          const r = i;
          n += e.codespan(r.text);
          break;
        }
        case 'br': {
          n += e.br();
          break;
        }
        case 'del': {
          const r = i;
          n += e.del(this.parseInline(r.tokens, e));
          break;
        }
        case 'text': {
          const r = i;
          n += e.text(r.text);
          break;
        }
        default: {
          const r = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(r), '';
          throw new Error(r);
        }
      }
    }
    return n;
  }
}
class A {
  constructor(t) {
    x(this, 'options');
    this.options = t || S;
  }
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
}
x(A, 'passThroughHooks', new Set(['preprocess', 'postprocess']));
var E, Q, v, te;
class ze {
  constructor(...t) {
    j(this, E);
    j(this, v);
    x(this, 'defaults', O());
    x(this, 'options', this.setOptions);
    x(this, 'parse', L(this, E, Q).call(this, y.lex, $.parse));
    x(this, 'parseInline', L(this, E, Q).call(this, y.lexInline, $.parseInline));
    x(this, 'Parser', $);
    x(this, 'Renderer', q);
    x(this, 'TextRenderer', U);
    x(this, 'Lexer', y);
    x(this, 'Tokenizer', Z);
    x(this, 'Hooks', A);
    this.use(...t);
  }
  walkTokens(t, e) {
    var s, i;
    let n = [];
    for (const r of t)
      switch (((n = n.concat(e.call(this, r))), r.type)) {
        case 'table': {
          const l = r;
          for (const o of l.header) n = n.concat(this.walkTokens(o.tokens, e));
          for (const o of l.rows) for (const u of o) n = n.concat(this.walkTokens(u.tokens, e));
          break;
        }
        case 'list': {
          const l = r;
          n = n.concat(this.walkTokens(l.items, e));
          break;
        }
        default: {
          const l = r;
          (i = (s = this.defaults.extensions) == null ? void 0 : s.childTokens) != null && i[l.type]
            ? this.defaults.extensions.childTokens[l.type].forEach((o) => {
                n = n.concat(this.walkTokens(l[o], e));
              })
            : l.tokens && (n = n.concat(this.walkTokens(l.tokens, e)));
        }
      }
    return n;
  }
  use(...t) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return (
      t.forEach((n) => {
        const s = b({}, n);
        if (
          ((s.async = this.defaults.async || s.async || !1),
          n.extensions &&
            (n.extensions.forEach((i) => {
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
          n.renderer)
        ) {
          const i = this.defaults.renderer || new q(this.defaults);
          for (const r in n.renderer) {
            const l = n.renderer[r],
              o = r,
              u = i[o];
            i[o] = (...h) => {
              let g = l.apply(i, h);
              return g === !1 && (g = u.apply(i, h)), g || '';
            };
          }
          s.renderer = i;
        }
        if (n.tokenizer) {
          const i = this.defaults.tokenizer || new Z(this.defaults);
          for (const r in n.tokenizer) {
            const l = n.tokenizer[r],
              o = r,
              u = i[o];
            i[o] = (...h) => {
              let g = l.apply(i, h);
              return g === !1 && (g = u.apply(i, h)), g;
            };
          }
          s.tokenizer = i;
        }
        if (n.hooks) {
          const i = this.defaults.hooks || new A();
          for (const r in n.hooks) {
            const l = n.hooks[r],
              o = r,
              u = i[o];
            A.passThroughHooks.has(r)
              ? (i[o] = (h) => {
                  if (this.defaults.async)
                    return Promise.resolve(l.call(i, h)).then((f) => u.call(i, f));
                  const g = l.call(i, h);
                  return u.call(i, g);
                })
              : (i[o] = (...h) => {
                  let g = l.apply(i, h);
                  return g === !1 && (g = u.apply(i, h)), g;
                });
          }
          s.hooks = i;
        }
        if (n.walkTokens) {
          const i = this.defaults.walkTokens,
            r = n.walkTokens;
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
  setOptions(t) {
    return (this.defaults = b(b({}, this.defaults), t)), this;
  }
  lexer(t, e) {
    return y.lex(t, e != null ? e : this.defaults);
  }
  parser(t, e) {
    return $.parse(t, e != null ? e : this.defaults);
  }
}
(E = new WeakSet()),
  (Q = function (t, e) {
    return (n, s) => {
      const i = b({}, s),
        r = b(b({}, this.defaults), i);
      this.defaults.async === !0 &&
        i.async === !1 &&
        (r.silent ||
          console.warn(
            'marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.',
          ),
        (r.async = !0));
      const l = L(this, v, te).call(this, !!r.silent, !!r.async);
      if (typeof n == 'undefined' || n === null)
        return l(new Error('marked(): input parameter is undefined or null'));
      if (typeof n != 'string')
        return l(
          new Error(
            'marked(): input parameter is of type ' +
              Object.prototype.toString.call(n) +
              ', string expected',
          ),
        );
      if ((r.hooks && (r.hooks.options = r), r.async))
        return Promise.resolve(r.hooks ? r.hooks.preprocess(n) : n)
          .then((o) => t(o, r))
          .then((o) =>
            r.walkTokens ? Promise.all(this.walkTokens(o, r.walkTokens)).then(() => o) : o,
          )
          .then((o) => e(o, r))
          .then((o) => (r.hooks ? r.hooks.postprocess(o) : o))
          .catch(l);
      try {
        r.hooks && (n = r.hooks.preprocess(n));
        const o = t(n, r);
        r.walkTokens && this.walkTokens(o, r.walkTokens);
        let u = e(o, r);
        return r.hooks && (u = r.hooks.postprocess(u)), u;
      } catch (o) {
        return l(o);
      }
    };
  }),
  (v = new WeakSet()),
  (te = function (t, e) {
    return (n) => {
      if (
        ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
        t)
      ) {
        const s = '<p>An error occurred:</p><pre>' + w(n.message + '', !0) + '</pre>';
        return e ? Promise.resolve(s) : s;
      }
      if (e) return Promise.reject(n);
      throw n;
    };
  });
const R = new ze();
function d(a, t) {
  return R.parse(a, t);
}
d.options = d.setOptions = function (a) {
  return R.setOptions(a), (d.defaults = R.defaults), J(d.defaults), d;
};
d.getDefaults = O;
d.defaults = S;
d.use = function (...a) {
  return R.use(...a), (d.defaults = R.defaults), J(d.defaults), d;
};
d.walkTokens = function (a, t) {
  return R.walkTokens(a, t);
};
d.parseInline = R.parseInline;
d.Parser = $;
d.parser = $.parse;
d.Renderer = q;
d.TextRenderer = U;
d.Lexer = y;
d.lexer = y.lex;
d.Tokenizer = Z;
d.Hooks = A;
d.parse = d;
d.options;
d.setOptions;
d.use;
d.walkTokens;
d.parseInline;
$.parse;
y.lex;
const Re = { class: 'page-container' },
  Se = ['innerHTML'],
  Ie = ae({
    __name: 'index',
    setup(a) {
      const t = ce(`# Marked in Node.js

Rendered by **marked**.`),
        e = he(() => d.parse(t.value));
      return (n, s) => {
        const i = pe('el-input');
        return (
          ue(),
          fe('div', Re, [
            ge(
              i,
              {
                modelValue: t.value,
                'onUpdate:modelValue': s[0] || (s[0] = (r) => (t.value = r)),
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
  }),
  Ce = de(Ie, [['__scopeId', 'data-v-b0861227']]);
export { Ce as default };
