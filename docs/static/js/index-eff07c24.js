import {
  d as K,
  j as Y,
  z as ee,
  o as te,
  c as ne,
  f as ie,
  g as se,
  y as re,
  b as le,
} from './index-dfb446be.js';
import { _ as ae } from './plugin-vueexport-helper-c27b6911.js';
function V() {
  return {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: '',
    highlight: null,
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
let C = V();
function oe(l) {
  C = l;
}
const F = /[&<>"']/,
  ce = new RegExp(F.source, 'g'),
  X = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  he = new RegExp(X.source, 'g'),
  pe = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
  U = (l) => pe[l];
function b(l, e) {
  if (e) {
    if (F.test(l)) return l.replace(ce, U);
  } else if (X.test(l)) return l.replace(he, U);
  return l;
}
const ue = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function H(l) {
  return l.replace(
    ue,
    (e, n) => (
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
const fe = /(^|[^\[])\^/g;
function k(l, e) {
  (l = typeof l == 'string' ? l : l.source), (e = e || '');
  const n = {
    replace: (t, i) => ((i = i.source || i), (i = i.replace(fe, '$1')), (l = l.replace(t, i)), n),
    getRegex: () => new RegExp(l, e),
  };
  return n;
}
const ge = /[^\w:]/g,
  de = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function M(l, e, n) {
  if (l) {
    let t;
    try {
      t = decodeURIComponent(H(n)).replace(ge, '').toLowerCase();
    } catch (i) {
      return null;
    }
    if (t.indexOf('javascript:') === 0 || t.indexOf('vbscript:') === 0 || t.indexOf('data:') === 0)
      return null;
  }
  e && !de.test(n) && (n = we(e, n));
  try {
    n = encodeURI(n).replace(/%25/g, '%');
  } catch (t) {
    return null;
  }
  return n;
}
const B = {},
  ke = /^[^:]+:\/*[^/]*$/,
  me = /^([^:]+:)[\s\S]*$/,
  xe = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function we(l, e) {
  B[' ' + l] || (ke.test(l) ? (B[' ' + l] = l + '/') : (B[' ' + l] = v(l, '/', !0))),
    (l = B[' ' + l]);
  const n = l.indexOf(':') === -1;
  return e.substring(0, 2) === '//'
    ? n
      ? e
      : l.replace(me, '$1') + e
    : e.charAt(0) === '/'
    ? n
      ? e
      : l.replace(xe, '$1') + e
    : l + e;
}
const Z = { exec: function () {} };
function y(l) {
  let e = 1,
    n,
    t;
  for (; e < arguments.length; e++) {
    n = arguments[e];
    for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (l[t] = n[t]);
  }
  return l;
}
function j(l, e) {
  const n = l.replace(/\|/g, (s, r, a) => {
      let c = !1,
        g = r;
      for (; --g >= 0 && a[g] === '\\'; ) c = !c;
      return c ? '|' : ' |';
    }),
    t = n.split(/ \|/);
  let i = 0;
  if ((t[0].trim() || t.shift(), t.length > 0 && !t[t.length - 1].trim() && t.pop(), t.length > e))
    t.splice(e);
  else for (; t.length < e; ) t.push('');
  for (; i < t.length; i++) t[i] = t[i].trim().replace(/\\\|/g, '|');
  return t;
}
function v(l, e, n) {
  const t = l.length;
  if (t === 0) return '';
  let i = 0;
  for (; i < t; ) {
    const s = l.charAt(t - i - 1);
    if (s === e && !n) i++;
    else if (s !== e && n) i++;
    else break;
  }
  return l.slice(0, t - i);
}
function be(l, e) {
  if (l.indexOf(e[1]) === -1) return -1;
  const n = l.length;
  let t = 0,
    i = 0;
  for (; i < n; i++)
    if (l[i] === '\\') i++;
    else if (l[i] === e[0]) t++;
    else if (l[i] === e[1] && (t--, t < 0)) return i;
  return -1;
}
function W(l) {
  l &&
    l.sanitize &&
    !l.silent &&
    console.warn(
      'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options',
    );
}
function N(l, e) {
  if (e < 1) return '';
  let n = '';
  for (; e > 1; ) e & 1 && (n += l), (e >>= 1), (l += l);
  return n + l;
}
function P(l, e, n, t) {
  const i = e.href,
    s = e.title ? b(e.title) : null,
    r = l[1].replace(/\\([\[\]])/g, '$1');
  if (l[0].charAt(0) !== '!') {
    t.state.inLink = !0;
    const a = { type: 'link', raw: n, href: i, title: s, text: r, tokens: t.inlineTokens(r) };
    return (t.state.inLink = !1), a;
  }
  return { type: 'image', raw: n, href: i, title: s, text: b(r) };
}
function _e(l, e) {
  const n = l.match(/^(\s+)(?:```)/);
  if (n === null) return e;
  const t = n[1];
  return e
    .split(
      `
`,
    )
    .map((i) => {
      const s = i.match(/^\s+/);
      if (s === null) return i;
      const [r] = s;
      return r.length >= t.length ? i.slice(t.length) : i;
    }).join(`
`);
}
class q {
  constructor(e) {
    this.options = e || C;
  }
  space(e) {
    const n = this.rules.block.newline.exec(e);
    if (n && n[0].length > 0) return { type: 'space', raw: n[0] };
  }
  code(e) {
    const n = this.rules.block.code.exec(e);
    if (n) {
      const t = n[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: n[0],
        codeBlockStyle: 'indented',
        text: this.options.pedantic
          ? t
          : v(
              t,
              `
`,
            ),
      };
    }
  }
  fences(e) {
    const n = this.rules.block.fences.exec(e);
    if (n) {
      const t = n[0],
        i = _e(t, n[3] || '');
      return {
        type: 'code',
        raw: t,
        lang: n[2] ? n[2].trim().replace(this.rules.inline._escapes, '$1') : n[2],
        text: i,
      };
    }
  }
  heading(e) {
    const n = this.rules.block.heading.exec(e);
    if (n) {
      let t = n[2].trim();
      if (/#$/.test(t)) {
        const i = v(t, '#');
        (this.options.pedantic || !i || / $/.test(i)) && (t = i.trim());
      }
      return {
        type: 'heading',
        raw: n[0],
        depth: n[1].length,
        text: t,
        tokens: this.lexer.inline(t),
      };
    }
  }
  hr(e) {
    const n = this.rules.block.hr.exec(e);
    if (n) return { type: 'hr', raw: n[0] };
  }
  blockquote(e) {
    const n = this.rules.block.blockquote.exec(e);
    if (n) {
      const t = n[0].replace(/^ *>[ \t]?/gm, ''),
        i = this.lexer.state.top;
      this.lexer.state.top = !0;
      const s = this.lexer.blockTokens(t);
      return (this.lexer.state.top = i), { type: 'blockquote', raw: n[0], tokens: s, text: t };
    }
  }
  list(e) {
    let n = this.rules.block.list.exec(e);
    if (n) {
      let t,
        i,
        s,
        r,
        a,
        c,
        g,
        f,
        m,
        d,
        p,
        T,
        _ = n[1].trim();
      const A = _.length > 1,
        x = {
          type: 'list',
          raw: '',
          ordered: A,
          start: A ? +_.slice(0, -1) : '',
          loose: !1,
          items: [],
        };
      (_ = A ? `\\d{1,9}\\${_.slice(-1)}` : `\\${_}`),
        this.options.pedantic && (_ = A ? _ : '[*+-]');
      const w = new RegExp(`^( {0,3}${_})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; e && ((T = !1), !(!(n = w.exec(e)) || this.rules.block.hr.test(e))); ) {
        if (
          ((t = n[0]),
          (e = e.substring(t.length)),
          (f = n[2]
            .split(
              `
`,
              1,
            )[0]
            .replace(/^\t+/, (R) => ' '.repeat(3 * R.length))),
          (m = e.split(
            `
`,
            1,
          )[0]),
          this.options.pedantic
            ? ((r = 2), (p = f.trimLeft()))
            : ((r = n[2].search(/[^ ]/)),
              (r = r > 4 ? 1 : r),
              (p = f.slice(r)),
              (r += n[1].length)),
          (c = !1),
          !f &&
            /^ *$/.test(m) &&
            ((t +=
              m +
              `
`),
            (e = e.substring(m.length + 1)),
            (T = !0)),
          !T)
        ) {
          const R = new RegExp(
              `^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`,
            ),
            $ = new RegExp(
              `^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
            ),
            z = new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`),
            L = new RegExp(`^ {0,${Math.min(3, r - 1)}}#`);
          for (
            ;
            e &&
            ((d = e.split(
              `
`,
              1,
            )[0]),
            (m = d),
            this.options.pedantic && (m = m.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
            !(z.test(m) || L.test(m) || R.test(m) || $.test(e)));

          ) {
            if (m.search(/[^ ]/) >= r || !m.trim())
              p +=
                `
` + m.slice(r);
            else {
              if (c || f.search(/[^ ]/) >= 4 || z.test(f) || L.test(f) || $.test(f)) break;
              p +=
                `
` + m;
            }
            !c && !m.trim() && (c = !0),
              (t +=
                d +
                `
`),
              (e = e.substring(d.length + 1)),
              (f = m.slice(r));
          }
        }
        x.loose || (g ? (x.loose = !0) : /\n *\n *$/.test(t) && (g = !0)),
          this.options.gfm &&
            ((i = /^\[[ xX]\] /.exec(p)),
            i && ((s = i[0] !== '[ ] '), (p = p.replace(/^\[[ xX]\] +/, '')))),
          x.items.push({ type: 'list_item', raw: t, task: !!i, checked: s, loose: !1, text: p }),
          (x.raw += t);
      }
      (x.items[x.items.length - 1].raw = t.trimRight()),
        (x.items[x.items.length - 1].text = p.trimRight()),
        (x.raw = x.raw.trimRight());
      const E = x.items.length;
      for (a = 0; a < E; a++)
        if (
          ((this.lexer.state.top = !1),
          (x.items[a].tokens = this.lexer.blockTokens(x.items[a].text, [])),
          !x.loose)
        ) {
          const R = x.items[a].tokens.filter((z) => z.type === 'space'),
            $ = R.length > 0 && R.some((z) => /\n.*\n/.test(z.raw));
          x.loose = $;
        }
      if (x.loose) for (a = 0; a < E; a++) x.items[a].loose = !0;
      return x;
    }
  }
  html(e) {
    const n = this.rules.block.html.exec(e);
    if (n) {
      const t = {
        type: 'html',
        raw: n[0],
        pre: !this.options.sanitizer && (n[1] === 'pre' || n[1] === 'script' || n[1] === 'style'),
        text: n[0],
      };
      if (this.options.sanitize) {
        const i = this.options.sanitizer ? this.options.sanitizer(n[0]) : b(n[0]);
        (t.type = 'paragraph'), (t.text = i), (t.tokens = this.lexer.inline(i));
      }
      return t;
    }
  }
  def(e) {
    const n = this.rules.block.def.exec(e);
    if (n) {
      const t = n[1].toLowerCase().replace(/\s+/g, ' '),
        i = n[2] ? n[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline._escapes, '$1') : '',
        s = n[3]
          ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline._escapes, '$1')
          : n[3];
      return { type: 'def', tag: t, raw: n[0], href: i, title: s };
    }
  }
  table(e) {
    const n = this.rules.block.table.exec(e);
    if (n) {
      const t = {
        type: 'table',
        header: j(n[1]).map((i) => ({ text: i })),
        align: n[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows:
          n[3] && n[3].trim()
            ? n[3].replace(/\n[ \t]*$/, '').split(`
`)
            : [],
      };
      if (t.header.length === t.align.length) {
        t.raw = n[0];
        let i = t.align.length,
          s,
          r,
          a,
          c;
        for (s = 0; s < i; s++)
          /^ *-+: *$/.test(t.align[s])
            ? (t.align[s] = 'right')
            : /^ *:-+: *$/.test(t.align[s])
            ? (t.align[s] = 'center')
            : /^ *:-+ *$/.test(t.align[s])
            ? (t.align[s] = 'left')
            : (t.align[s] = null);
        for (i = t.rows.length, s = 0; s < i; s++)
          t.rows[s] = j(t.rows[s], t.header.length).map((g) => ({ text: g }));
        for (i = t.header.length, r = 0; r < i; r++)
          t.header[r].tokens = this.lexer.inline(t.header[r].text);
        for (i = t.rows.length, r = 0; r < i; r++)
          for (c = t.rows[r], a = 0; a < c.length; a++) c[a].tokens = this.lexer.inline(c[a].text);
        return t;
      }
    }
  }
  lheading(e) {
    const n = this.rules.block.lheading.exec(e);
    if (n)
      return {
        type: 'heading',
        raw: n[0],
        depth: n[2].charAt(0) === '=' ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1]),
      };
  }
  paragraph(e) {
    const n = this.rules.block.paragraph.exec(e);
    if (n) {
      const t =
        n[1].charAt(n[1].length - 1) ===
        `
`
          ? n[1].slice(0, -1)
          : n[1];
      return { type: 'paragraph', raw: n[0], text: t, tokens: this.lexer.inline(t) };
    }
  }
  text(e) {
    const n = this.rules.block.text.exec(e);
    if (n) return { type: 'text', raw: n[0], text: n[0], tokens: this.lexer.inline(n[0]) };
  }
  escape(e) {
    const n = this.rules.inline.escape.exec(e);
    if (n) return { type: 'escape', raw: n[0], text: b(n[1]) };
  }
  tag(e) {
    const n = this.rules.inline.tag.exec(e);
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
  link(e) {
    const n = this.rules.inline.link.exec(e);
    if (n) {
      const t = n[2].trim();
      if (!this.options.pedantic && /^</.test(t)) {
        if (!/>$/.test(t)) return;
        const r = v(t.slice(0, -1), '\\');
        if ((t.length - r.length) % 2 === 0) return;
      } else {
        const r = be(n[2], '()');
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
          (this.options.pedantic && !/>$/.test(t) ? (i = i.slice(1)) : (i = i.slice(1, -1))),
        P(
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
  reflink(e, n) {
    let t;
    if ((t = this.rules.inline.reflink.exec(e)) || (t = this.rules.inline.nolink.exec(e))) {
      let i = (t[2] || t[1]).replace(/\s+/g, ' ');
      if (((i = n[i.toLowerCase()]), !i)) {
        const s = t[0].charAt(0);
        return { type: 'text', raw: s, text: s };
      }
      return P(t, i, t[0], this.lexer);
    }
  }
  emStrong(e, n, t = '') {
    let i = this.rules.inline.emStrong.lDelim.exec(e);
    if (!i || (i[3] && t.match(/[\p{L}\p{N}]/u))) return;
    const s = i[1] || i[2] || '';
    if (!s || (s && (t === '' || this.rules.inline.punctuation.exec(t)))) {
      const r = i[0].length - 1;
      let a,
        c,
        g = r,
        f = 0;
      const m =
        i[0][0] === '*'
          ? this.rules.inline.emStrong.rDelimAst
          : this.rules.inline.emStrong.rDelimUnd;
      for (m.lastIndex = 0, n = n.slice(-1 * e.length + r); (i = m.exec(n)) != null; ) {
        if (((a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]), !a)) continue;
        if (((c = a.length), i[3] || i[4])) {
          g += c;
          continue;
        } else if ((i[5] || i[6]) && r % 3 && !((r + c) % 3)) {
          f += c;
          continue;
        }
        if (((g -= c), g > 0)) continue;
        c = Math.min(c, c + g + f);
        const d = e.slice(0, r + i.index + (i[0].length - a.length) + c);
        if (Math.min(r, c) % 2) {
          const T = d.slice(1, -1);
          return { type: 'em', raw: d, text: T, tokens: this.lexer.inlineTokens(T) };
        }
        const p = d.slice(2, -2);
        return { type: 'strong', raw: d, text: p, tokens: this.lexer.inlineTokens(p) };
      }
    }
  }
  codespan(e) {
    const n = this.rules.inline.code.exec(e);
    if (n) {
      let t = n[2].replace(/\n/g, ' ');
      const i = /[^ ]/.test(t),
        s = /^ /.test(t) && / $/.test(t);
      return (
        i && s && (t = t.substring(1, t.length - 1)),
        (t = b(t, !0)),
        { type: 'codespan', raw: n[0], text: t }
      );
    }
  }
  br(e) {
    const n = this.rules.inline.br.exec(e);
    if (n) return { type: 'br', raw: n[0] };
  }
  del(e) {
    const n = this.rules.inline.del.exec(e);
    if (n) return { type: 'del', raw: n[0], text: n[2], tokens: this.lexer.inlineTokens(n[2]) };
  }
  autolink(e, n) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let i, s;
      return (
        t[2] === '@'
          ? ((i = b(this.options.mangle ? n(t[1]) : t[1])), (s = 'mailto:' + i))
          : ((i = b(t[1])), (s = i)),
        { type: 'link', raw: t[0], text: i, href: s, tokens: [{ type: 'text', raw: i, text: i }] }
      );
    }
  }
  url(e, n) {
    let t;
    if ((t = this.rules.inline.url.exec(e))) {
      let i, s;
      if (t[2] === '@') (i = b(this.options.mangle ? n(t[0]) : t[0])), (s = 'mailto:' + i);
      else {
        let r;
        do (r = t[0]), (t[0] = this.rules.inline._backpedal.exec(t[0])[0]);
        while (r !== t[0]);
        (i = b(t[0])), t[1] === 'www.' ? (s = 'http://' + t[0]) : (s = t[0]);
      }
      return {
        type: 'link',
        raw: t[0],
        text: i,
        href: s,
        tokens: [{ type: 'text', raw: i, text: i }],
      };
    }
  }
  inlineText(e, n) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let i;
      return (
        this.lexer.state.inRawBlock
          ? (i = this.options.sanitize
              ? this.options.sanitizer
                ? this.options.sanitizer(t[0])
                : b(t[0])
              : t[0])
          : (i = b(this.options.smartypants ? n(t[0]) : t[0])),
        { type: 'text', raw: t[0], text: i }
      );
    }
  }
}
const h = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences:
    /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: Z,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
};
h._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
h._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
h.def = k(h.def).replace('label', h._label).replace('title', h._title).getRegex();
h.bullet = /(?:[*+-]|\d{1,9}[.)])/;
h.listItemStart = k(/^( *)(bull) */)
  .replace('bull', h.bullet)
  .getRegex();
h.list = k(h.list)
  .replace(/bull/g, h.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + h.def.source + ')')
  .getRegex();
h._tag =
  'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul';
h._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
h.html = k(h.html, 'i')
  .replace('comment', h._comment)
  .replace('tag', h._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();
h.paragraph = k(h._paragraph)
  .replace('hr', h.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '')
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', h._tag)
  .getRegex();
h.blockquote = k(h.blockquote).replace('paragraph', h.paragraph).getRegex();
h.normal = y({}, h);
h.gfm = y({}, h.normal, {
  table:
    '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
});
h.gfm.table = k(h.gfm.table)
  .replace('hr', h.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', h._tag)
  .getRegex();
h.gfm.paragraph = k(h._paragraph)
  .replace('hr', h.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '')
  .replace('table', h.gfm.table)
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', h._tag)
  .getRegex();
h.pedantic = y({}, h.normal, {
  html: k(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
  )
    .replace('comment', h._comment)
    .replace(
      /tag/g,
      '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
    )
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Z,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: k(h.normal._paragraph)
    .replace('hr', h.hr)
    .replace(
      'heading',
      ` *#{1,6} *[^
]`,
    )
    .replace('lheading', h.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex(),
});
const o = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: Z,
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
  del: Z,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
};
o._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
o.punctuation = k(o.punctuation)
  .replace(/punctuation/g, o._punctuation)
  .getRegex();
o.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
o.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
o._comment = k(h._comment).replace('(?:-->|$)', '-->').getRegex();
o.emStrong.lDelim = k(o.emStrong.lDelim).replace(/punct/g, o._punctuation).getRegex();
o.emStrong.rDelimAst = k(o.emStrong.rDelimAst, 'g').replace(/punct/g, o._punctuation).getRegex();
o.emStrong.rDelimUnd = k(o.emStrong.rDelimUnd, 'g').replace(/punct/g, o._punctuation).getRegex();
o._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
o._email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
o.autolink = k(o.autolink).replace('scheme', o._scheme).replace('email', o._email).getRegex();
o._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
o.tag = k(o.tag).replace('comment', o._comment).replace('attribute', o._attribute).getRegex();
o._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
o._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
o._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
o.link = k(o.link)
  .replace('label', o._label)
  .replace('href', o._href)
  .replace('title', o._title)
  .getRegex();
o.reflink = k(o.reflink).replace('label', o._label).replace('ref', h._label).getRegex();
o.nolink = k(o.nolink).replace('ref', h._label).getRegex();
o.reflinkSearch = k(o.reflinkSearch, 'g')
  .replace('reflink', o.reflink)
  .replace('nolink', o.nolink)
  .getRegex();
o.normal = y({}, o);
o.pedantic = y({}, o.normal, {
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
    .replace('label', o._label)
    .getRegex(),
  reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', o._label)
    .getRegex(),
});
o.gfm = y({}, o.normal, {
  escape: k(o.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
});
o.gfm.url = k(o.gfm.url, 'i').replace('email', o.gfm._extended_email).getRegex();
o.breaks = y({}, o.gfm, {
  br: k(o.br).replace('{2,}', '*').getRegex(),
  text: k(o.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex(),
});
function ye(l) {
  return l
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
    .replace(/'/g, '’')
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
    .replace(/"/g, '”')
    .replace(/\.{3}/g, '…');
}
function Q(l) {
  let e = '',
    n,
    t;
  const i = l.length;
  for (n = 0; n < i; n++)
    (t = l.charCodeAt(n)), Math.random() > 0.5 && (t = 'x' + t.toString(16)), (e += '&#' + t + ';');
  return e;
}
class I {
  constructor(e) {
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = e || C),
      (this.options.tokenizer = this.options.tokenizer || new q()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const n = { block: h.normal, inline: o.normal };
    this.options.pedantic
      ? ((n.block = h.pedantic), (n.inline = o.pedantic))
      : this.options.gfm &&
        ((n.block = h.gfm), this.options.breaks ? (n.inline = o.breaks) : (n.inline = o.gfm)),
      (this.tokenizer.rules = n);
  }
  static get rules() {
    return { block: h, inline: o };
  }
  static lex(e, n) {
    return new I(n).lex(e);
  }
  static lexInline(e, n) {
    return new I(n).inlineTokens(e);
  }
  lex(e) {
    (e = e.replace(
      /\r\n|\r/g,
      `
`,
    )),
      this.blockTokens(e, this.tokens);
    let n;
    for (; (n = this.inlineQueue.shift()); ) this.inlineTokens(n.src, n.tokens);
    return this.tokens;
  }
  blockTokens(e, n = []) {
    this.options.pedantic
      ? (e = e.replace(/\t/g, '    ').replace(/^ +$/gm, ''))
      : (e = e.replace(/^( *)(\t+)/gm, (a, c, g) => c + '    '.repeat(g.length)));
    let t, i, s, r;
    for (; e; )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some((a) =>
            (t = a.call({ lexer: this }, e, n))
              ? ((e = e.substring(t.raw.length)), n.push(t), !0)
              : !1,
          )
        )
      ) {
        if ((t = this.tokenizer.space(e))) {
          (e = e.substring(t.raw.length)),
            t.raw.length === 1 && n.length > 0
              ? (n[n.length - 1].raw += `
`)
              : n.push(t);
          continue;
        }
        if ((t = this.tokenizer.code(e))) {
          (e = e.substring(t.raw.length)),
            (i = n[n.length - 1]),
            i && (i.type === 'paragraph' || i.type === 'text')
              ? ((i.raw +=
                  `
` + t.raw),
                (i.text +=
                  `
` + t.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : n.push(t);
          continue;
        }
        if ((t = this.tokenizer.fences(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.heading(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.hr(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.blockquote(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.list(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.html(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.def(e))) {
          (e = e.substring(t.raw.length)),
            (i = n[n.length - 1]),
            i && (i.type === 'paragraph' || i.type === 'text')
              ? ((i.raw +=
                  `
` + t.raw),
                (i.text +=
                  `
` + t.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : this.tokens.links[t.tag] ||
                (this.tokens.links[t.tag] = { href: t.href, title: t.title });
          continue;
        }
        if ((t = this.tokenizer.table(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.lheading(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if (((s = e), this.options.extensions && this.options.extensions.startBlock)) {
          let a = 1 / 0;
          const c = e.slice(1);
          let g;
          this.options.extensions.startBlock.forEach(function (f) {
            (g = f.call({ lexer: this }, c)),
              typeof g == 'number' && g >= 0 && (a = Math.min(a, g));
          }),
            a < 1 / 0 && a >= 0 && (s = e.substring(0, a + 1));
        }
        if (this.state.top && (t = this.tokenizer.paragraph(s))) {
          (i = n[n.length - 1]),
            r && i.type === 'paragraph'
              ? ((i.raw +=
                  `
` + t.raw),
                (i.text +=
                  `
` + t.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : n.push(t),
            (r = s.length !== e.length),
            (e = e.substring(t.raw.length));
          continue;
        }
        if ((t = this.tokenizer.text(e))) {
          (e = e.substring(t.raw.length)),
            (i = n[n.length - 1]),
            i && i.type === 'text'
              ? ((i.raw +=
                  `
` + t.raw),
                (i.text +=
                  `
` + t.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : n.push(t);
          continue;
        }
        if (e) {
          const a = 'Infinite loop on byte: ' + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(a);
            break;
          } else throw new Error(a);
        }
      }
    return (this.state.top = !0), n;
  }
  inline(e, n = []) {
    return this.inlineQueue.push({ src: e, tokens: n }), n;
  }
  inlineTokens(e, n = []) {
    let t,
      i,
      s,
      r = e,
      a,
      c,
      g;
    if (this.tokens.links) {
      const f = Object.keys(this.tokens.links);
      if (f.length > 0)
        for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          f.includes(a[0].slice(a[0].lastIndexOf('[') + 1, -1)) &&
            (r =
              r.slice(0, a.index) +
              '[' +
              N('a', a[0].length - 2) +
              ']' +
              r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r =
        r.slice(0, a.index) +
        '[' +
        N('a', a[0].length - 2) +
        ']' +
        r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.escapedEmSt.exec(r)) != null; )
      (r =
        r.slice(0, a.index + a[0].length - 2) +
        '++' +
        r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
        this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    for (; e; )
      if (
        (c || (g = ''),
        (c = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some((f) =>
            (t = f.call({ lexer: this }, e, n))
              ? ((e = e.substring(t.raw.length)), n.push(t), !0)
              : !1,
          )
        ))
      ) {
        if ((t = this.tokenizer.escape(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.tag(e))) {
          (e = e.substring(t.raw.length)),
            (i = n[n.length - 1]),
            i && t.type === 'text' && i.type === 'text'
              ? ((i.raw += t.raw), (i.text += t.text))
              : n.push(t);
          continue;
        }
        if ((t = this.tokenizer.link(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.reflink(e, this.tokens.links))) {
          (e = e.substring(t.raw.length)),
            (i = n[n.length - 1]),
            i && t.type === 'text' && i.type === 'text'
              ? ((i.raw += t.raw), (i.text += t.text))
              : n.push(t);
          continue;
        }
        if ((t = this.tokenizer.emStrong(e, r, g))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.codespan(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.br(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.del(e))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if ((t = this.tokenizer.autolink(e, Q))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if (!this.state.inLink && (t = this.tokenizer.url(e, Q))) {
          (e = e.substring(t.raw.length)), n.push(t);
          continue;
        }
        if (((s = e), this.options.extensions && this.options.extensions.startInline)) {
          let f = 1 / 0;
          const m = e.slice(1);
          let d;
          this.options.extensions.startInline.forEach(function (p) {
            (d = p.call({ lexer: this }, m)),
              typeof d == 'number' && d >= 0 && (f = Math.min(f, d));
          }),
            f < 1 / 0 && f >= 0 && (s = e.substring(0, f + 1));
        }
        if ((t = this.tokenizer.inlineText(s, ye))) {
          (e = e.substring(t.raw.length)),
            t.raw.slice(-1) !== '_' && (g = t.raw.slice(-1)),
            (c = !0),
            (i = n[n.length - 1]),
            i && i.type === 'text' ? ((i.raw += t.raw), (i.text += t.text)) : n.push(t);
          continue;
        }
        if (e) {
          const f = 'Infinite loop on byte: ' + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(f);
            break;
          } else throw new Error(f);
        }
      }
    return n;
  }
}
class D {
  constructor(e) {
    this.options = e || C;
  }
  code(e, n, t) {
    const i = (n || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const s = this.options.highlight(e, i);
      s != null && s !== e && ((t = !0), (e = s));
    }
    return (
      (e =
        e.replace(/\n$/, '') +
        `
`),
      i
        ? '<pre><code class="' +
          this.options.langPrefix +
          b(i) +
          '">' +
          (t ? e : b(e, !0)) +
          `</code></pre>
`
        : '<pre><code>' +
          (t ? e : b(e, !0)) +
          `</code></pre>
`
    );
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e) {
    return e;
  }
  heading(e, n, t, i) {
    if (this.options.headerIds) {
      const s = this.options.headerPrefix + i.slug(t);
      return `<h${n} id="${s}">${e}</h${n}>
`;
    }
    return `<h${n}>${e}</h${n}>
`;
  }
  hr() {
    return this.options.xhtml
      ? `<hr/>
`
      : `<hr>
`;
  }
  list(e, n, t) {
    const i = n ? 'ol' : 'ul',
      s = n && t !== 1 ? ' start="' + t + '"' : '';
    return (
      '<' +
      i +
      s +
      `>
` +
      e +
      '</' +
      i +
      `>
`
    );
  }
  listitem(e) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return (
      '<input ' +
      (e ? 'checked="" ' : '') +
      'disabled="" type="checkbox"' +
      (this.options.xhtml ? ' /' : '') +
      '> '
    );
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, n) {
    return (
      n && (n = `<tbody>${n}</tbody>`),
      `<table>
<thead>
` +
        e +
        `</thead>
` +
        n +
        `</table>
`
    );
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, n) {
    const t = n.header ? 'th' : 'td';
    return (
      (n.align ? `<${t} align="${n.align}">` : `<${t}>`) +
      e +
      `</${t}>
`
    );
  }
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, n, t) {
    if (((e = M(this.options.sanitize, this.options.baseUrl, e)), e === null)) return t;
    let i = '<a href="' + e + '"';
    return n && (i += ' title="' + n + '"'), (i += '>' + t + '</a>'), i;
  }
  image(e, n, t) {
    if (((e = M(this.options.sanitize, this.options.baseUrl, e)), e === null)) return t;
    let i = `<img src="${e}" alt="${t}"`;
    return n && (i += ` title="${n}"`), (i += this.options.xhtml ? '/>' : '>'), i;
  }
  text(e) {
    return e;
  }
}
class G {
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, n, t) {
    return '' + t;
  }
  image(e, n, t) {
    return '' + t;
  }
  br() {
    return '';
  }
}
class J {
  constructor() {
    this.seen = {};
  }
  serialize(e) {
    return e
      .toLowerCase()
      .trim()
      .replace(/<[!\/a-z].*?>/gi, '')
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }
  getNextSafeSlug(e, n) {
    let t = e,
      i = 0;
    if (this.seen.hasOwnProperty(t)) {
      i = this.seen[e];
      do i++, (t = e + '-' + i);
      while (this.seen.hasOwnProperty(t));
    }
    return n || ((this.seen[e] = i), (this.seen[t] = 0)), t;
  }
  slug(e, n = {}) {
    const t = this.serialize(e);
    return this.getNextSafeSlug(t, n.dryrun);
  }
}
class S {
  constructor(e) {
    (this.options = e || C),
      (this.options.renderer = this.options.renderer || new D()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new G()),
      (this.slugger = new J());
  }
  static parse(e, n) {
    return new S(n).parse(e);
  }
  static parseInline(e, n) {
    return new S(n).parseInline(e);
  }
  parse(e, n = !0) {
    let t = '',
      i,
      s,
      r,
      a,
      c,
      g,
      f,
      m,
      d,
      p,
      T,
      _,
      A,
      x,
      w,
      E,
      R,
      $,
      z;
    const L = e.length;
    for (i = 0; i < L; i++) {
      if (
        ((p = e[i]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[p.type] &&
          ((z = this.options.extensions.renderers[p.type].call({ parser: this }, p)),
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
            ].includes(p.type)))
      ) {
        t += z || '';
        continue;
      }
      switch (p.type) {
        case 'space':
          continue;
        case 'hr': {
          t += this.renderer.hr();
          continue;
        }
        case 'heading': {
          t += this.renderer.heading(
            this.parseInline(p.tokens),
            p.depth,
            H(this.parseInline(p.tokens, this.textRenderer)),
            this.slugger,
          );
          continue;
        }
        case 'code': {
          t += this.renderer.code(p.text, p.lang, p.escaped);
          continue;
        }
        case 'table': {
          for (m = '', f = '', a = p.header.length, s = 0; s < a; s++)
            f += this.renderer.tablecell(this.parseInline(p.header[s].tokens), {
              header: !0,
              align: p.align[s],
            });
          for (m += this.renderer.tablerow(f), d = '', a = p.rows.length, s = 0; s < a; s++) {
            for (g = p.rows[s], f = '', c = g.length, r = 0; r < c; r++)
              f += this.renderer.tablecell(this.parseInline(g[r].tokens), {
                header: !1,
                align: p.align[r],
              });
            d += this.renderer.tablerow(f);
          }
          t += this.renderer.table(m, d);
          continue;
        }
        case 'blockquote': {
          (d = this.parse(p.tokens)), (t += this.renderer.blockquote(d));
          continue;
        }
        case 'list': {
          for (
            T = p.ordered, _ = p.start, A = p.loose, a = p.items.length, d = '', s = 0;
            s < a;
            s++
          )
            (w = p.items[s]),
              (E = w.checked),
              (R = w.task),
              (x = ''),
              w.task &&
                (($ = this.renderer.checkbox(E)),
                A
                  ? w.tokens.length > 0 && w.tokens[0].type === 'paragraph'
                    ? ((w.tokens[0].text = $ + ' ' + w.tokens[0].text),
                      w.tokens[0].tokens &&
                        w.tokens[0].tokens.length > 0 &&
                        w.tokens[0].tokens[0].type === 'text' &&
                        (w.tokens[0].tokens[0].text = $ + ' ' + w.tokens[0].tokens[0].text))
                    : w.tokens.unshift({ type: 'text', text: $ })
                  : (x += $)),
              (x += this.parse(w.tokens, A)),
              (d += this.renderer.listitem(x, R, E));
          t += this.renderer.list(d, T, _);
          continue;
        }
        case 'html': {
          t += this.renderer.html(p.text);
          continue;
        }
        case 'paragraph': {
          t += this.renderer.paragraph(this.parseInline(p.tokens));
          continue;
        }
        case 'text': {
          for (
            d = p.tokens ? this.parseInline(p.tokens) : p.text;
            i + 1 < L && e[i + 1].type === 'text';

          )
            (p = e[++i]),
              (d +=
                `
` + (p.tokens ? this.parseInline(p.tokens) : p.text));
          t += n ? this.renderer.paragraph(d) : d;
          continue;
        }
        default: {
          const O = 'Token with "' + p.type + '" type was not found.';
          if (this.options.silent) {
            console.error(O);
            return;
          } else throw new Error(O);
        }
      }
    }
    return t;
  }
  parseInline(e, n) {
    n = n || this.renderer;
    let t = '',
      i,
      s,
      r;
    const a = e.length;
    for (i = 0; i < a; i++) {
      if (
        ((s = e[i]),
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
        t += r || '';
        continue;
      }
      switch (s.type) {
        case 'escape': {
          t += n.text(s.text);
          break;
        }
        case 'html': {
          t += n.html(s.text);
          break;
        }
        case 'link': {
          t += n.link(s.href, s.title, this.parseInline(s.tokens, n));
          break;
        }
        case 'image': {
          t += n.image(s.href, s.title, s.text);
          break;
        }
        case 'strong': {
          t += n.strong(this.parseInline(s.tokens, n));
          break;
        }
        case 'em': {
          t += n.em(this.parseInline(s.tokens, n));
          break;
        }
        case 'codespan': {
          t += n.codespan(s.text);
          break;
        }
        case 'br': {
          t += n.br();
          break;
        }
        case 'del': {
          t += n.del(this.parseInline(s.tokens, n));
          break;
        }
        case 'text': {
          t += n.text(s.text);
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
    return t;
  }
}
function u(l, e, n) {
  if (typeof l == 'undefined' || l === null)
    throw new Error('marked(): input parameter is undefined or null');
  if (typeof l != 'string')
    throw new Error(
      'marked(): input parameter is of type ' +
        Object.prototype.toString.call(l) +
        ', string expected',
    );
  if (
    (typeof e == 'function' && ((n = e), (e = null)), (e = y({}, u.defaults, e || {})), W(e), n)
  ) {
    const i = e.highlight;
    let s;
    try {
      s = I.lex(l, e);
    } catch (c) {
      return n(c);
    }
    const r = function (c) {
      let g;
      if (!c)
        try {
          e.walkTokens && u.walkTokens(s, e.walkTokens), (g = S.parse(s, e));
        } catch (f) {
          c = f;
        }
      return (e.highlight = i), c ? n(c) : n(null, g);
    };
    if (!i || i.length < 3 || (delete e.highlight, !s.length)) return r();
    let a = 0;
    u.walkTokens(s, function (c) {
      c.type === 'code' &&
        (a++,
        setTimeout(() => {
          i(c.text, c.lang, function (g, f) {
            if (g) return r(g);
            f != null && f !== c.text && ((c.text = f), (c.escaped = !0)), a--, a === 0 && r();
          });
        }, 0));
    }),
      a === 0 && r();
    return;
  }
  function t(i) {
    if (
      ((i.message += `
Please report this to https://github.com/markedjs/marked.`),
      e.silent)
    )
      return '<p>An error occurred:</p><pre>' + b(i.message + '', !0) + '</pre>';
    throw i;
  }
  try {
    const i = I.lex(l, e);
    if (e.walkTokens) {
      if (e.async)
        return Promise.all(u.walkTokens(i, e.walkTokens))
          .then(() => S.parse(i, e))
          .catch(t);
      u.walkTokens(i, e.walkTokens);
    }
    return S.parse(i, e);
  } catch (i) {
    t(i);
  }
}
u.options = u.setOptions = function (l) {
  return y(u.defaults, l), oe(u.defaults), u;
};
u.getDefaults = V;
u.defaults = C;
u.use = function (...l) {
  const e = u.defaults.extensions || { renderers: {}, childTokens: {} };
  l.forEach((n) => {
    const t = y({}, n);
    if (
      ((t.async = u.defaults.async || t.async),
      n.extensions &&
        (n.extensions.forEach((i) => {
          if (!i.name) throw new Error('extension name required');
          if (i.renderer) {
            const s = e.renderers[i.name];
            s
              ? (e.renderers[i.name] = function (...r) {
                  let a = i.renderer.apply(this, r);
                  return a === !1 && (a = s.apply(this, r)), a;
                })
              : (e.renderers[i.name] = i.renderer);
          }
          if (i.tokenizer) {
            if (!i.level || (i.level !== 'block' && i.level !== 'inline'))
              throw new Error("extension level must be 'block' or 'inline'");
            e[i.level] ? e[i.level].unshift(i.tokenizer) : (e[i.level] = [i.tokenizer]),
              i.start &&
                (i.level === 'block'
                  ? e.startBlock
                    ? e.startBlock.push(i.start)
                    : (e.startBlock = [i.start])
                  : i.level === 'inline' &&
                    (e.startInline ? e.startInline.push(i.start) : (e.startInline = [i.start])));
          }
          i.childTokens && (e.childTokens[i.name] = i.childTokens);
        }),
        (t.extensions = e)),
      n.renderer)
    ) {
      const i = u.defaults.renderer || new D();
      for (const s in n.renderer) {
        const r = i[s];
        i[s] = (...a) => {
          let c = n.renderer[s].apply(i, a);
          return c === !1 && (c = r.apply(i, a)), c;
        };
      }
      t.renderer = i;
    }
    if (n.tokenizer) {
      const i = u.defaults.tokenizer || new q();
      for (const s in n.tokenizer) {
        const r = i[s];
        i[s] = (...a) => {
          let c = n.tokenizer[s].apply(i, a);
          return c === !1 && (c = r.apply(i, a)), c;
        };
      }
      t.tokenizer = i;
    }
    if (n.walkTokens) {
      const i = u.defaults.walkTokens;
      t.walkTokens = function (s) {
        let r = [];
        return r.push(n.walkTokens.call(this, s)), i && (r = r.concat(i.call(this, s))), r;
      };
    }
    u.setOptions(t);
  });
};
u.walkTokens = function (l, e) {
  let n = [];
  for (const t of l)
    switch (((n = n.concat(e.call(u, t))), t.type)) {
      case 'table': {
        for (const i of t.header) n = n.concat(u.walkTokens(i.tokens, e));
        for (const i of t.rows) for (const s of i) n = n.concat(u.walkTokens(s.tokens, e));
        break;
      }
      case 'list': {
        n = n.concat(u.walkTokens(t.items, e));
        break;
      }
      default:
        u.defaults.extensions &&
        u.defaults.extensions.childTokens &&
        u.defaults.extensions.childTokens[t.type]
          ? u.defaults.extensions.childTokens[t.type].forEach(function (i) {
              n = n.concat(u.walkTokens(t[i], e));
            })
          : t.tokens && (n = n.concat(u.walkTokens(t.tokens, e)));
    }
  return n;
};
u.parseInline = function (l, e) {
  if (typeof l == 'undefined' || l === null)
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  if (typeof l != 'string')
    throw new Error(
      'marked.parseInline(): input parameter is of type ' +
        Object.prototype.toString.call(l) +
        ', string expected',
    );
  (e = y({}, u.defaults, e || {})), W(e);
  try {
    const n = I.lexInline(l, e);
    return e.walkTokens && u.walkTokens(n, e.walkTokens), S.parseInline(n, e);
  } catch (n) {
    if (
      ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
      e.silent)
    )
      return '<p>An error occurred:</p><pre>' + b(n.message + '', !0) + '</pre>';
    throw n;
  }
};
u.Parser = S;
u.parser = S.parse;
u.Renderer = D;
u.TextRenderer = G;
u.Lexer = I;
u.lexer = I.lex;
u.Tokenizer = q;
u.Slugger = J;
u.parse = u;
u.options;
u.setOptions;
u.use;
u.walkTokens;
u.parseInline;
S.parse;
I.lex;
const $e = { class: 'page-container' },
  ze = ['innerHTML'],
  Se = K({
    __name: 'index',
    setup(l) {
      const e = Y(`# Marked in Node.js

Rendered by **marked**.`),
        n = ee(() => u.parse(e.value));
      return (t, i) => {
        const s = le('el-input');
        return (
          te(),
          ne('div', $e, [
            ie(
              s,
              {
                modelValue: e.value,
                'onUpdate:modelValue': i[0] || (i[0] = (r) => (e.value = r)),
                class: 'input',
                type: 'textarea',
              },
              null,
              8,
              ['modelValue'],
            ),
            se('div', { class: 'marked', innerHTML: re(n) }, null, 8, ze),
          ])
        );
      };
    },
  });
const Ie = ae(Se, [['__scopeId', 'data-v-d4a82a36']]);
export { Ie as default };
