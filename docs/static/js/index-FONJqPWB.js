var ue = (me, oe, C) =>
  new Promise((F, E) => {
    var w = (c) => {
        try {
          e(C.next(c));
        } catch (r) {
          E(r);
        }
      },
      v = (c) => {
        try {
          e(C.throw(c));
        } catch (r) {
          E(r);
        }
      },
      e = (c) => (c.done ? F(c.value) : Promise.resolve(c.value).then(w, v));
    e((C = C.apply(me, oe)).next());
  });
import {
  bN as ke,
  dO as we,
  d as Ne,
  j as Be,
  B as Le,
  k as je,
  bU as Ue,
  o as Oe,
  c as Re,
  a as We,
  h as Se,
  w as Te,
  g as He,
  u as $e,
} from './index-nnTfcizh.js';
import { E as Ze, a as Ve } from './upload-4xEuj583.js';
import { _ as Xe } from './plugin-vueexport-helper-x3n3nnut.js';
var ze = { exports: {} },
  Ae = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ var Ee;
function Ge() {
  return (
    Ee ||
      ((Ee = 1),
      (function (me, oe) {
        (function (C) {
          me.exports = C();
        })(function () {
          return (function C(F, E, w) {
            function v(r, m) {
              if (!E[r]) {
                if (!F[r]) {
                  var f = typeof we == 'function' && we;
                  if (!m && f) return f(r, !0);
                  if (e) return e(r, !0);
                  var n = new Error("Cannot find module '" + r + "'");
                  throw ((n.code = 'MODULE_NOT_FOUND'), n);
                }
                var i = (E[r] = { exports: {} });
                F[r][0].call(
                  i.exports,
                  function (y) {
                    var h = F[r][1][y];
                    return v(h || y);
                  },
                  i,
                  i.exports,
                  C,
                  F,
                  E,
                  w,
                );
              }
              return E[r].exports;
            }
            for (var e = typeof we == 'function' && we, c = 0; c < w.length; c++) v(w[c]);
            return v;
          })(
            {
              1: [
                function (C, F, E) {
                  var w = C('./utils'),
                    v = C('./support'),
                    e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                  (E.encode = function (c) {
                    for (
                      var r,
                        m,
                        f,
                        n,
                        i,
                        y,
                        h,
                        d = [],
                        p = 0,
                        g = c.length,
                        x = g,
                        P = w.getTypeOf(c) !== 'string';
                      p < c.length;

                    )
                      (x = g - p),
                        (f = P
                          ? ((r = c[p++]), (m = p < g ? c[p++] : 0), p < g ? c[p++] : 0)
                          : ((r = c.charCodeAt(p++)),
                            (m = p < g ? c.charCodeAt(p++) : 0),
                            p < g ? c.charCodeAt(p++) : 0)),
                        (n = r >> 2),
                        (i = ((3 & r) << 4) | (m >> 4)),
                        (y = 1 < x ? ((15 & m) << 2) | (f >> 6) : 64),
                        (h = 2 < x ? 63 & f : 64),
                        d.push(e.charAt(n) + e.charAt(i) + e.charAt(y) + e.charAt(h));
                    return d.join('');
                  }),
                    (E.decode = function (c) {
                      var r,
                        m,
                        f,
                        n,
                        i,
                        y,
                        h = 0,
                        d = 0,
                        p = 'data:';
                      if (c.substr(0, p.length) === p)
                        throw new Error('Invalid base64 input, it looks like a data url.');
                      var g,
                        x = (3 * (c = c.replace(/[^A-Za-z0-9+/=]/g, '')).length) / 4;
                      if (
                        (c.charAt(c.length - 1) === e.charAt(64) && x--,
                        c.charAt(c.length - 2) === e.charAt(64) && x--,
                        x % 1 != 0)
                      )
                        throw new Error('Invalid base64 input, bad content length.');
                      for (
                        g = v.uint8array ? new Uint8Array(0 | x) : new Array(0 | x);
                        h < c.length;

                      )
                        (r =
                          (e.indexOf(c.charAt(h++)) << 2) | ((n = e.indexOf(c.charAt(h++))) >> 4)),
                          (m = ((15 & n) << 4) | ((i = e.indexOf(c.charAt(h++))) >> 2)),
                          (f = ((3 & i) << 6) | (y = e.indexOf(c.charAt(h++)))),
                          (g[d++] = r),
                          i !== 64 && (g[d++] = m),
                          y !== 64 && (g[d++] = f);
                      return g;
                    });
                },
                { './support': 30, './utils': 32 },
              ],
              2: [
                function (C, F, E) {
                  var w = C('./external'),
                    v = C('./stream/DataWorker'),
                    e = C('./stream/Crc32Probe'),
                    c = C('./stream/DataLengthProbe');
                  function r(m, f, n, i, y) {
                    (this.compressedSize = m),
                      (this.uncompressedSize = f),
                      (this.crc32 = n),
                      (this.compression = i),
                      (this.compressedContent = y);
                  }
                  (r.prototype = {
                    getContentWorker: function () {
                      var m = new v(w.Promise.resolve(this.compressedContent))
                          .pipe(this.compression.uncompressWorker())
                          .pipe(new c('data_length')),
                        f = this;
                      return (
                        m.on('end', function () {
                          if (this.streamInfo.data_length !== f.uncompressedSize)
                            throw new Error('Bug : uncompressed data size mismatch');
                        }),
                        m
                      );
                    },
                    getCompressedWorker: function () {
                      return new v(w.Promise.resolve(this.compressedContent))
                        .withStreamInfo('compressedSize', this.compressedSize)
                        .withStreamInfo('uncompressedSize', this.uncompressedSize)
                        .withStreamInfo('crc32', this.crc32)
                        .withStreamInfo('compression', this.compression);
                    },
                  }),
                    (r.createWorkerFrom = function (m, f, n) {
                      return m
                        .pipe(new e())
                        .pipe(new c('uncompressedSize'))
                        .pipe(f.compressWorker(n))
                        .pipe(new c('compressedSize'))
                        .withStreamInfo('compression', f);
                    }),
                    (F.exports = r);
                },
                {
                  './external': 6,
                  './stream/Crc32Probe': 25,
                  './stream/DataLengthProbe': 26,
                  './stream/DataWorker': 27,
                },
              ],
              3: [
                function (C, F, E) {
                  var w = C('./stream/GenericWorker');
                  (E.STORE = {
                    magic: '\0\0',
                    compressWorker: function () {
                      return new w('STORE compression');
                    },
                    uncompressWorker: function () {
                      return new w('STORE decompression');
                    },
                  }),
                    (E.DEFLATE = C('./flate'));
                },
                { './flate': 7, './stream/GenericWorker': 28 },
              ],
              4: [
                function (C, F, E) {
                  var w = C('./utils'),
                    v = (function () {
                      for (var e, c = [], r = 0; r < 256; r++) {
                        e = r;
                        for (var m = 0; m < 8; m++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                        c[r] = e;
                      }
                      return c;
                    })();
                  F.exports = function (e, c) {
                    return e !== void 0 && e.length
                      ? w.getTypeOf(e) !== 'string'
                        ? (function (r, m, f, n) {
                            var i = v,
                              y = n + f;
                            r ^= -1;
                            for (var h = n; h < y; h++) r = (r >>> 8) ^ i[255 & (r ^ m[h])];
                            return -1 ^ r;
                          })(0 | c, e, e.length, 0)
                        : (function (r, m, f, n) {
                            var i = v,
                              y = n + f;
                            r ^= -1;
                            for (var h = n; h < y; h++)
                              r = (r >>> 8) ^ i[255 & (r ^ m.charCodeAt(h))];
                            return -1 ^ r;
                          })(0 | c, e, e.length, 0)
                      : 0;
                  };
                },
                { './utils': 32 },
              ],
              5: [
                function (C, F, E) {
                  (E.base64 = !1),
                    (E.binary = !1),
                    (E.dir = !1),
                    (E.createFolders = !0),
                    (E.date = null),
                    (E.compression = null),
                    (E.compressionOptions = null),
                    (E.comment = null),
                    (E.unixPermissions = null),
                    (E.dosPermissions = null);
                },
                {},
              ],
              6: [
                function (C, F, E) {
                  var w = null;
                  (w = typeof Promise != 'undefined' ? Promise : C('lie')),
                    (F.exports = { Promise: w });
                },
                { lie: 37 },
              ],
              7: [
                function (C, F, E) {
                  var w =
                      typeof Uint8Array != 'undefined' &&
                      typeof Uint16Array != 'undefined' &&
                      typeof Uint32Array != 'undefined',
                    v = C('pako'),
                    e = C('./utils'),
                    c = C('./stream/GenericWorker'),
                    r = w ? 'uint8array' : 'array';
                  function m(f, n) {
                    c.call(this, 'FlateWorker/' + f),
                      (this._pako = null),
                      (this._pakoAction = f),
                      (this._pakoOptions = n),
                      (this.meta = {});
                  }
                  (E.magic = '\b\0'),
                    e.inherits(m, c),
                    (m.prototype.processChunk = function (f) {
                      (this.meta = f.meta),
                        this._pako === null && this._createPako(),
                        this._pako.push(e.transformTo(r, f.data), !1);
                    }),
                    (m.prototype.flush = function () {
                      c.prototype.flush.call(this),
                        this._pako === null && this._createPako(),
                        this._pako.push([], !0);
                    }),
                    (m.prototype.cleanUp = function () {
                      c.prototype.cleanUp.call(this), (this._pako = null);
                    }),
                    (m.prototype._createPako = function () {
                      this._pako = new v[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1,
                      });
                      var f = this;
                      this._pako.onData = function (n) {
                        f.push({ data: n, meta: f.meta });
                      };
                    }),
                    (E.compressWorker = function (f) {
                      return new m('Deflate', f);
                    }),
                    (E.uncompressWorker = function () {
                      return new m('Inflate', {});
                    });
                },
                { './stream/GenericWorker': 28, './utils': 32, pako: 38 },
              ],
              8: [
                function (C, F, E) {
                  function w(i, y) {
                    var h,
                      d = '';
                    for (h = 0; h < y; h++) (d += String.fromCharCode(255 & i)), (i >>>= 8);
                    return d;
                  }
                  function v(i, y, h, d, p, g) {
                    var x,
                      P,
                      a = i.file,
                      s = i.compression,
                      t = g !== r.utf8encode,
                      l = e.transformTo('string', g(a.name)),
                      b = e.transformTo('string', r.utf8encode(a.name)),
                      k = a.comment,
                      D = e.transformTo('string', g(k)),
                      _ = e.transformTo('string', r.utf8encode(k)),
                      T = b.length !== a.name.length,
                      o = _.length !== k.length,
                      R = '',
                      V = '',
                      L = '',
                      q = a.dir,
                      W = a.date,
                      Y = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                    (y && !h) ||
                      ((Y.crc32 = i.crc32),
                      (Y.compressedSize = i.compressedSize),
                      (Y.uncompressedSize = i.uncompressedSize));
                    var z = 0;
                    y && (z |= 8), t || (!T && !o) || (z |= 2048);
                    var O = 0,
                      J = 0;
                    q && (O |= 16),
                      p === 'UNIX'
                        ? ((J = 798),
                          (O |= (function (Z, ae) {
                            var le = Z;
                            return Z || (le = ae ? 16893 : 33204), (65535 & le) << 16;
                          })(a.unixPermissions, q)))
                        : ((J = 20),
                          (O |= (function (Z) {
                            return 63 & (Z || 0);
                          })(a.dosPermissions))),
                      (x = W.getUTCHours()),
                      (x <<= 6),
                      (x |= W.getUTCMinutes()),
                      (x <<= 5),
                      (x |= W.getUTCSeconds() / 2),
                      (P = W.getUTCFullYear() - 1980),
                      (P <<= 4),
                      (P |= W.getUTCMonth() + 1),
                      (P <<= 5),
                      (P |= W.getUTCDate()),
                      T && ((V = w(1, 1) + w(m(l), 4) + b), (R += 'up' + w(V.length, 2) + V)),
                      o && ((L = w(1, 1) + w(m(D), 4) + _), (R += 'uc' + w(L.length, 2) + L));
                    var X = '';
                    return (
                      (X += `
\0`),
                      (X += w(z, 2)),
                      (X += s.magic),
                      (X += w(x, 2)),
                      (X += w(P, 2)),
                      (X += w(Y.crc32, 4)),
                      (X += w(Y.compressedSize, 4)),
                      (X += w(Y.uncompressedSize, 4)),
                      (X += w(l.length, 2)),
                      (X += w(R.length, 2)),
                      {
                        fileRecord: f.LOCAL_FILE_HEADER + X + l + R,
                        dirRecord:
                          f.CENTRAL_FILE_HEADER +
                          w(J, 2) +
                          X +
                          w(D.length, 2) +
                          '\0\0\0\0' +
                          w(O, 4) +
                          w(d, 4) +
                          l +
                          R +
                          D,
                      }
                    );
                  }
                  var e = C('../utils'),
                    c = C('../stream/GenericWorker'),
                    r = C('../utf8'),
                    m = C('../crc32'),
                    f = C('../signature');
                  function n(i, y, h, d) {
                    c.call(this, 'ZipFileWorker'),
                      (this.bytesWritten = 0),
                      (this.zipComment = y),
                      (this.zipPlatform = h),
                      (this.encodeFileName = d),
                      (this.streamFiles = i),
                      (this.accumulate = !1),
                      (this.contentBuffer = []),
                      (this.dirRecords = []),
                      (this.currentSourceOffset = 0),
                      (this.entriesCount = 0),
                      (this.currentFile = null),
                      (this._sources = []);
                  }
                  e.inherits(n, c),
                    (n.prototype.push = function (i) {
                      var y = i.meta.percent || 0,
                        h = this.entriesCount,
                        d = this._sources.length;
                      this.accumulate
                        ? this.contentBuffer.push(i)
                        : ((this.bytesWritten += i.data.length),
                          c.prototype.push.call(this, {
                            data: i.data,
                            meta: {
                              currentFile: this.currentFile,
                              percent: h ? (y + 100 * (h - d - 1)) / h : 100,
                            },
                          }));
                    }),
                    (n.prototype.openedSource = function (i) {
                      (this.currentSourceOffset = this.bytesWritten),
                        (this.currentFile = i.file.name);
                      var y = this.streamFiles && !i.file.dir;
                      if (y) {
                        var h = v(
                          i,
                          y,
                          !1,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName,
                        );
                        this.push({ data: h.fileRecord, meta: { percent: 0 } });
                      } else this.accumulate = !0;
                    }),
                    (n.prototype.closedSource = function (i) {
                      this.accumulate = !1;
                      var y = this.streamFiles && !i.file.dir,
                        h = v(
                          i,
                          y,
                          !0,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName,
                        );
                      if ((this.dirRecords.push(h.dirRecord), y))
                        this.push({
                          data: (function (d) {
                            return (
                              f.DATA_DESCRIPTOR +
                              w(d.crc32, 4) +
                              w(d.compressedSize, 4) +
                              w(d.uncompressedSize, 4)
                            );
                          })(i),
                          meta: { percent: 100 },
                        });
                      else
                        for (
                          this.push({ data: h.fileRecord, meta: { percent: 0 } });
                          this.contentBuffer.length;

                        )
                          this.push(this.contentBuffer.shift());
                      this.currentFile = null;
                    }),
                    (n.prototype.flush = function () {
                      for (var i = this.bytesWritten, y = 0; y < this.dirRecords.length; y++)
                        this.push({ data: this.dirRecords[y], meta: { percent: 100 } });
                      var h = this.bytesWritten - i,
                        d = (function (p, g, x, P, a) {
                          var s = e.transformTo('string', a(P));
                          return (
                            f.CENTRAL_DIRECTORY_END +
                            '\0\0\0\0' +
                            w(p, 2) +
                            w(p, 2) +
                            w(g, 4) +
                            w(x, 4) +
                            w(s.length, 2) +
                            s
                          );
                        })(this.dirRecords.length, h, i, this.zipComment, this.encodeFileName);
                      this.push({ data: d, meta: { percent: 100 } });
                    }),
                    (n.prototype.prepareNextSource = function () {
                      (this.previous = this._sources.shift()),
                        this.openedSource(this.previous.streamInfo),
                        this.isPaused ? this.previous.pause() : this.previous.resume();
                    }),
                    (n.prototype.registerPrevious = function (i) {
                      this._sources.push(i);
                      var y = this;
                      return (
                        i.on('data', function (h) {
                          y.processChunk(h);
                        }),
                        i.on('end', function () {
                          y.closedSource(y.previous.streamInfo),
                            y._sources.length ? y.prepareNextSource() : y.end();
                        }),
                        i.on('error', function (h) {
                          y.error(h);
                        }),
                        this
                      );
                    }),
                    (n.prototype.resume = function () {
                      return (
                        !!c.prototype.resume.call(this) &&
                        (!this.previous && this._sources.length
                          ? (this.prepareNextSource(), !0)
                          : this.previous || this._sources.length || this.generatedError
                          ? void 0
                          : (this.end(), !0))
                      );
                    }),
                    (n.prototype.error = function (i) {
                      var y = this._sources;
                      if (!c.prototype.error.call(this, i)) return !1;
                      for (var h = 0; h < y.length; h++)
                        try {
                          y[h].error(i);
                        } catch (d) {}
                      return !0;
                    }),
                    (n.prototype.lock = function () {
                      c.prototype.lock.call(this);
                      for (var i = this._sources, y = 0; y < i.length; y++) i[y].lock();
                    }),
                    (F.exports = n);
                },
                {
                  '../crc32': 4,
                  '../signature': 23,
                  '../stream/GenericWorker': 28,
                  '../utf8': 31,
                  '../utils': 32,
                },
              ],
              9: [
                function (C, F, E) {
                  var w = C('../compressions'),
                    v = C('./ZipFileWorker');
                  E.generateWorker = function (e, c, r) {
                    var m = new v(c.streamFiles, r, c.platform, c.encodeFileName),
                      f = 0;
                    try {
                      e.forEach(function (n, i) {
                        f++;
                        var y = (function (g, x) {
                            var P = g || x,
                              a = w[P];
                            if (!a) throw new Error(P + ' is not a valid compression method !');
                            return a;
                          })(i.options.compression, c.compression),
                          h = i.options.compressionOptions || c.compressionOptions || {},
                          d = i.dir,
                          p = i.date;
                        i._compressWorker(y, h)
                          .withStreamInfo('file', {
                            name: n,
                            dir: d,
                            date: p,
                            comment: i.comment || '',
                            unixPermissions: i.unixPermissions,
                            dosPermissions: i.dosPermissions,
                          })
                          .pipe(m);
                      }),
                        (m.entriesCount = f);
                    } catch (n) {
                      m.error(n);
                    }
                    return m;
                  };
                },
                { '../compressions': 3, './ZipFileWorker': 8 },
              ],
              10: [
                function (C, F, E) {
                  function w() {
                    if (!(this instanceof w)) return new w();
                    if (arguments.length)
                      throw new Error(
                        'The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.',
                      );
                    (this.files = Object.create(null)),
                      (this.comment = null),
                      (this.root = ''),
                      (this.clone = function () {
                        var v = new w();
                        for (var e in this) typeof this[e] != 'function' && (v[e] = this[e]);
                        return v;
                      });
                  }
                  ((w.prototype = C('./object')).loadAsync = C('./load')),
                    (w.support = C('./support')),
                    (w.defaults = C('./defaults')),
                    (w.version = '3.10.1'),
                    (w.loadAsync = function (v, e) {
                      return new w().loadAsync(v, e);
                    }),
                    (w.external = C('./external')),
                    (F.exports = w);
                },
                { './defaults': 5, './external': 6, './load': 11, './object': 15, './support': 30 },
              ],
              11: [
                function (C, F, E) {
                  var w = C('./utils'),
                    v = C('./external'),
                    e = C('./utf8'),
                    c = C('./zipEntries'),
                    r = C('./stream/Crc32Probe'),
                    m = C('./nodejsUtils');
                  function f(n) {
                    return new v.Promise(function (i, y) {
                      var h = n.decompressed.getContentWorker().pipe(new r());
                      h.on('error', function (d) {
                        y(d);
                      })
                        .on('end', function () {
                          h.streamInfo.crc32 !== n.decompressed.crc32
                            ? y(new Error('Corrupted zip : CRC32 mismatch'))
                            : i();
                        })
                        .resume();
                    });
                  }
                  F.exports = function (n, i) {
                    var y = this;
                    return (
                      (i = w.extend(i || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: e.utf8decode,
                      })),
                      m.isNode && m.isStream(n)
                        ? v.Promise.reject(
                            new Error("JSZip can't accept a stream when loading a zip file."),
                          )
                        : w
                            .prepareContent(
                              'the loaded zip file',
                              n,
                              !0,
                              i.optimizedBinaryString,
                              i.base64,
                            )
                            .then(function (h) {
                              var d = new c(i);
                              return d.load(h), d;
                            })
                            .then(function (h) {
                              var d = [v.Promise.resolve(h)],
                                p = h.files;
                              if (i.checkCRC32) for (var g = 0; g < p.length; g++) d.push(f(p[g]));
                              return v.Promise.all(d);
                            })
                            .then(function (h) {
                              for (var d = h.shift(), p = d.files, g = 0; g < p.length; g++) {
                                var x = p[g],
                                  P = x.fileNameStr,
                                  a = w.resolve(x.fileNameStr);
                                y.file(a, x.decompressed, {
                                  binary: !0,
                                  optimizedBinaryString: !0,
                                  date: x.date,
                                  dir: x.dir,
                                  comment: x.fileCommentStr.length ? x.fileCommentStr : null,
                                  unixPermissions: x.unixPermissions,
                                  dosPermissions: x.dosPermissions,
                                  createFolders: i.createFolders,
                                }),
                                  x.dir || (y.file(a).unsafeOriginalName = P);
                              }
                              return d.zipComment.length && (y.comment = d.zipComment), y;
                            })
                    );
                  };
                },
                {
                  './external': 6,
                  './nodejsUtils': 14,
                  './stream/Crc32Probe': 25,
                  './utf8': 31,
                  './utils': 32,
                  './zipEntries': 33,
                },
              ],
              12: [
                function (C, F, E) {
                  var w = C('../utils'),
                    v = C('../stream/GenericWorker');
                  function e(c, r) {
                    v.call(this, 'Nodejs stream input adapter for ' + c),
                      (this._upstreamEnded = !1),
                      this._bindStream(r);
                  }
                  w.inherits(e, v),
                    (e.prototype._bindStream = function (c) {
                      var r = this;
                      (this._stream = c).pause(),
                        c
                          .on('data', function (m) {
                            r.push({ data: m, meta: { percent: 0 } });
                          })
                          .on('error', function (m) {
                            r.isPaused ? (this.generatedError = m) : r.error(m);
                          })
                          .on('end', function () {
                            r.isPaused ? (r._upstreamEnded = !0) : r.end();
                          });
                    }),
                    (e.prototype.pause = function () {
                      return !!v.prototype.pause.call(this) && (this._stream.pause(), !0);
                    }),
                    (e.prototype.resume = function () {
                      return (
                        !!v.prototype.resume.call(this) &&
                        (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
                      );
                    }),
                    (F.exports = e);
                },
                { '../stream/GenericWorker': 28, '../utils': 32 },
              ],
              13: [
                function (C, F, E) {
                  var w = C('readable-stream').Readable;
                  function v(e, c, r) {
                    w.call(this, c), (this._helper = e);
                    var m = this;
                    e.on('data', function (f, n) {
                      m.push(f) || m._helper.pause(), r && r(n);
                    })
                      .on('error', function (f) {
                        m.emit('error', f);
                      })
                      .on('end', function () {
                        m.push(null);
                      });
                  }
                  C('../utils').inherits(v, w),
                    (v.prototype._read = function () {
                      this._helper.resume();
                    }),
                    (F.exports = v);
                },
                { '../utils': 32, 'readable-stream': 16 },
              ],
              14: [
                function (C, F, E) {
                  F.exports = {
                    isNode: typeof Buffer != 'undefined',
                    newBufferFrom: function (w, v) {
                      if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(w, v);
                      if (typeof w == 'number')
                        throw new Error('The "data" argument must not be a number');
                      return new Buffer(w, v);
                    },
                    allocBuffer: function (w) {
                      if (Buffer.alloc) return Buffer.alloc(w);
                      var v = new Buffer(w);
                      return v.fill(0), v;
                    },
                    isBuffer: function (w) {
                      return Buffer.isBuffer(w);
                    },
                    isStream: function (w) {
                      return (
                        w &&
                        typeof w.on == 'function' &&
                        typeof w.pause == 'function' &&
                        typeof w.resume == 'function'
                      );
                    },
                  };
                },
                {},
              ],
              15: [
                function (C, F, E) {
                  function w(a, s, t) {
                    var l,
                      b = e.getTypeOf(s),
                      k = e.extend(t || {}, m);
                    (k.date = k.date || new Date()),
                      k.compression !== null && (k.compression = k.compression.toUpperCase()),
                      typeof k.unixPermissions == 'string' &&
                        (k.unixPermissions = parseInt(k.unixPermissions, 8)),
                      k.unixPermissions && 16384 & k.unixPermissions && (k.dir = !0),
                      k.dosPermissions && 16 & k.dosPermissions && (k.dir = !0),
                      k.dir && (a = p(a)),
                      k.createFolders && (l = d(a)) && g.call(this, l, !0);
                    var D = b === 'string' && k.binary === !1 && k.base64 === !1;
                    (t && t.binary !== void 0) || (k.binary = !D),
                      ((s instanceof f && s.uncompressedSize === 0) ||
                        k.dir ||
                        !s ||
                        s.length === 0) &&
                        ((k.base64 = !1),
                        (k.binary = !0),
                        (s = ''),
                        (k.compression = 'STORE'),
                        (b = 'string'));
                    var _ = null;
                    _ =
                      s instanceof f || s instanceof c
                        ? s
                        : y.isNode && y.isStream(s)
                        ? new h(a, s)
                        : e.prepareContent(a, s, k.binary, k.optimizedBinaryString, k.base64);
                    var T = new n(a, _, k);
                    this.files[a] = T;
                  }
                  var v = C('./utf8'),
                    e = C('./utils'),
                    c = C('./stream/GenericWorker'),
                    r = C('./stream/StreamHelper'),
                    m = C('./defaults'),
                    f = C('./compressedObject'),
                    n = C('./zipObject'),
                    i = C('./generate'),
                    y = C('./nodejsUtils'),
                    h = C('./nodejs/NodejsStreamInputAdapter'),
                    d = function (a) {
                      a.slice(-1) === '/' && (a = a.substring(0, a.length - 1));
                      var s = a.lastIndexOf('/');
                      return 0 < s ? a.substring(0, s) : '';
                    },
                    p = function (a) {
                      return a.slice(-1) !== '/' && (a += '/'), a;
                    },
                    g = function (a, s) {
                      return (
                        (s = s !== void 0 ? s : m.createFolders),
                        (a = p(a)),
                        this.files[a] || w.call(this, a, null, { dir: !0, createFolders: s }),
                        this.files[a]
                      );
                    };
                  function x(a) {
                    return Object.prototype.toString.call(a) === '[object RegExp]';
                  }
                  var P = {
                    load: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.',
                      );
                    },
                    forEach: function (a) {
                      var s, t, l;
                      for (s in this.files)
                        (l = this.files[s]),
                          (t = s.slice(this.root.length, s.length)) &&
                            s.slice(0, this.root.length) === this.root &&
                            a(t, l);
                    },
                    filter: function (a) {
                      var s = [];
                      return (
                        this.forEach(function (t, l) {
                          a(t, l) && s.push(l);
                        }),
                        s
                      );
                    },
                    file: function (a, s, t) {
                      if (arguments.length !== 1)
                        return (a = this.root + a), w.call(this, a, s, t), this;
                      if (x(a)) {
                        var l = a;
                        return this.filter(function (k, D) {
                          return !D.dir && l.test(k);
                        });
                      }
                      var b = this.files[this.root + a];
                      return b && !b.dir ? b : null;
                    },
                    folder: function (a) {
                      if (!a) return this;
                      if (x(a))
                        return this.filter(function (b, k) {
                          return k.dir && a.test(b);
                        });
                      var s = this.root + a,
                        t = g.call(this, s),
                        l = this.clone();
                      return (l.root = t.name), l;
                    },
                    remove: function (a) {
                      a = this.root + a;
                      var s = this.files[a];
                      if (
                        (s || (a.slice(-1) !== '/' && (a += '/'), (s = this.files[a])), s && !s.dir)
                      )
                        delete this.files[a];
                      else
                        for (
                          var t = this.filter(function (b, k) {
                              return k.name.slice(0, a.length) === a;
                            }),
                            l = 0;
                          l < t.length;
                          l++
                        )
                          delete this.files[t[l].name];
                      return this;
                    },
                    generate: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.',
                      );
                    },
                    generateInternalStream: function (a) {
                      var s,
                        t = {};
                      try {
                        if (
                          (((t = e.extend(a || {}, {
                            streamFiles: !1,
                            compression: 'STORE',
                            compressionOptions: null,
                            type: '',
                            platform: 'DOS',
                            comment: null,
                            mimeType: 'application/zip',
                            encodeFileName: v.utf8encode,
                          })).type = t.type.toLowerCase()),
                          (t.compression = t.compression.toUpperCase()),
                          t.type === 'binarystring' && (t.type = 'string'),
                          !t.type)
                        )
                          throw new Error('No output type specified.');
                        e.checkSupport(t.type),
                          (t.platform !== 'darwin' &&
                            t.platform !== 'freebsd' &&
                            t.platform !== 'linux' &&
                            t.platform !== 'sunos') ||
                            (t.platform = 'UNIX'),
                          t.platform === 'win32' && (t.platform = 'DOS');
                        var l = t.comment || this.comment || '';
                        s = i.generateWorker(this, t, l);
                      } catch (b) {
                        (s = new c('error')).error(b);
                      }
                      return new r(s, t.type || 'string', t.mimeType);
                    },
                    generateAsync: function (a, s) {
                      return this.generateInternalStream(a).accumulate(s);
                    },
                    generateNodeStream: function (a, s) {
                      return (
                        (a = a || {}).type || (a.type = 'nodebuffer'),
                        this.generateInternalStream(a).toNodejsStream(s)
                      );
                    },
                  };
                  F.exports = P;
                },
                {
                  './compressedObject': 2,
                  './defaults': 5,
                  './generate': 9,
                  './nodejs/NodejsStreamInputAdapter': 12,
                  './nodejsUtils': 14,
                  './stream/GenericWorker': 28,
                  './stream/StreamHelper': 29,
                  './utf8': 31,
                  './utils': 32,
                  './zipObject': 35,
                },
              ],
              16: [
                function (C, F, E) {
                  F.exports = C('stream');
                },
                { stream: void 0 },
              ],
              17: [
                function (C, F, E) {
                  var w = C('./DataReader');
                  function v(e) {
                    w.call(this, e);
                    for (var c = 0; c < this.data.length; c++) e[c] = 255 & e[c];
                  }
                  C('../utils').inherits(v, w),
                    (v.prototype.byteAt = function (e) {
                      return this.data[this.zero + e];
                    }),
                    (v.prototype.lastIndexOfSignature = function (e) {
                      for (
                        var c = e.charCodeAt(0),
                          r = e.charCodeAt(1),
                          m = e.charCodeAt(2),
                          f = e.charCodeAt(3),
                          n = this.length - 4;
                        0 <= n;
                        --n
                      )
                        if (
                          this.data[n] === c &&
                          this.data[n + 1] === r &&
                          this.data[n + 2] === m &&
                          this.data[n + 3] === f
                        )
                          return n - this.zero;
                      return -1;
                    }),
                    (v.prototype.readAndCheckSignature = function (e) {
                      var c = e.charCodeAt(0),
                        r = e.charCodeAt(1),
                        m = e.charCodeAt(2),
                        f = e.charCodeAt(3),
                        n = this.readData(4);
                      return c === n[0] && r === n[1] && m === n[2] && f === n[3];
                    }),
                    (v.prototype.readData = function (e) {
                      if ((this.checkOffset(e), e === 0)) return [];
                      var c = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), c;
                    }),
                    (F.exports = v);
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              18: [
                function (C, F, E) {
                  var w = C('../utils');
                  function v(e) {
                    (this.data = e), (this.length = e.length), (this.index = 0), (this.zero = 0);
                  }
                  (v.prototype = {
                    checkOffset: function (e) {
                      this.checkIndex(this.index + e);
                    },
                    checkIndex: function (e) {
                      if (this.length < this.zero + e || e < 0)
                        throw new Error(
                          'End of data reached (data length = ' +
                            this.length +
                            ', asked index = ' +
                            e +
                            '). Corrupted zip ?',
                        );
                    },
                    setIndex: function (e) {
                      this.checkIndex(e), (this.index = e);
                    },
                    skip: function (e) {
                      this.setIndex(this.index + e);
                    },
                    byteAt: function () {},
                    readInt: function (e) {
                      var c,
                        r = 0;
                      for (this.checkOffset(e), c = this.index + e - 1; c >= this.index; c--)
                        r = (r << 8) + this.byteAt(c);
                      return (this.index += e), r;
                    },
                    readString: function (e) {
                      return w.transformTo('string', this.readData(e));
                    },
                    readData: function () {},
                    lastIndexOfSignature: function () {},
                    readAndCheckSignature: function () {},
                    readDate: function () {
                      var e = this.readInt(4);
                      return new Date(
                        Date.UTC(
                          1980 + ((e >> 25) & 127),
                          ((e >> 21) & 15) - 1,
                          (e >> 16) & 31,
                          (e >> 11) & 31,
                          (e >> 5) & 63,
                          (31 & e) << 1,
                        ),
                      );
                    },
                  }),
                    (F.exports = v);
                },
                { '../utils': 32 },
              ],
              19: [
                function (C, F, E) {
                  var w = C('./Uint8ArrayReader');
                  function v(e) {
                    w.call(this, e);
                  }
                  C('../utils').inherits(v, w),
                    (v.prototype.readData = function (e) {
                      this.checkOffset(e);
                      var c = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), c;
                    }),
                    (F.exports = v);
                },
                { '../utils': 32, './Uint8ArrayReader': 21 },
              ],
              20: [
                function (C, F, E) {
                  var w = C('./DataReader');
                  function v(e) {
                    w.call(this, e);
                  }
                  C('../utils').inherits(v, w),
                    (v.prototype.byteAt = function (e) {
                      return this.data.charCodeAt(this.zero + e);
                    }),
                    (v.prototype.lastIndexOfSignature = function (e) {
                      return this.data.lastIndexOf(e) - this.zero;
                    }),
                    (v.prototype.readAndCheckSignature = function (e) {
                      return e === this.readData(4);
                    }),
                    (v.prototype.readData = function (e) {
                      this.checkOffset(e);
                      var c = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                      return (this.index += e), c;
                    }),
                    (F.exports = v);
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              21: [
                function (C, F, E) {
                  var w = C('./ArrayReader');
                  function v(e) {
                    w.call(this, e);
                  }
                  C('../utils').inherits(v, w),
                    (v.prototype.readData = function (e) {
                      if ((this.checkOffset(e), e === 0)) return new Uint8Array(0);
                      var c = this.data.subarray(
                        this.zero + this.index,
                        this.zero + this.index + e,
                      );
                      return (this.index += e), c;
                    }),
                    (F.exports = v);
                },
                { '../utils': 32, './ArrayReader': 17 },
              ],
              22: [
                function (C, F, E) {
                  var w = C('../utils'),
                    v = C('../support'),
                    e = C('./ArrayReader'),
                    c = C('./StringReader'),
                    r = C('./NodeBufferReader'),
                    m = C('./Uint8ArrayReader');
                  F.exports = function (f) {
                    var n = w.getTypeOf(f);
                    return (
                      w.checkSupport(n),
                      n !== 'string' || v.uint8array
                        ? n === 'nodebuffer'
                          ? new r(f)
                          : v.uint8array
                          ? new m(w.transformTo('uint8array', f))
                          : new e(w.transformTo('array', f))
                        : new c(f)
                    );
                  };
                },
                {
                  '../support': 30,
                  '../utils': 32,
                  './ArrayReader': 17,
                  './NodeBufferReader': 19,
                  './StringReader': 20,
                  './Uint8ArrayReader': 21,
                },
              ],
              23: [
                function (C, F, E) {
                  (E.LOCAL_FILE_HEADER = 'PK'),
                    (E.CENTRAL_FILE_HEADER = 'PK'),
                    (E.CENTRAL_DIRECTORY_END = 'PK'),
                    (E.ZIP64_CENTRAL_DIRECTORY_LOCATOR = 'PK\x07'),
                    (E.ZIP64_CENTRAL_DIRECTORY_END = 'PK'),
                    (E.DATA_DESCRIPTOR = 'PK\x07\b');
                },
                {},
              ],
              24: [
                function (C, F, E) {
                  var w = C('./GenericWorker'),
                    v = C('../utils');
                  function e(c) {
                    w.call(this, 'ConvertWorker to ' + c), (this.destType = c);
                  }
                  v.inherits(e, w),
                    (e.prototype.processChunk = function (c) {
                      this.push({ data: v.transformTo(this.destType, c.data), meta: c.meta });
                    }),
                    (F.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              25: [
                function (C, F, E) {
                  var w = C('./GenericWorker'),
                    v = C('../crc32');
                  function e() {
                    w.call(this, 'Crc32Probe'), this.withStreamInfo('crc32', 0);
                  }
                  C('../utils').inherits(e, w),
                    (e.prototype.processChunk = function (c) {
                      (this.streamInfo.crc32 = v(c.data, this.streamInfo.crc32 || 0)), this.push(c);
                    }),
                    (F.exports = e);
                },
                { '../crc32': 4, '../utils': 32, './GenericWorker': 28 },
              ],
              26: [
                function (C, F, E) {
                  var w = C('../utils'),
                    v = C('./GenericWorker');
                  function e(c) {
                    v.call(this, 'DataLengthProbe for ' + c),
                      (this.propName = c),
                      this.withStreamInfo(c, 0);
                  }
                  w.inherits(e, v),
                    (e.prototype.processChunk = function (c) {
                      if (c) {
                        var r = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = r + c.data.length;
                      }
                      v.prototype.processChunk.call(this, c);
                    }),
                    (F.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              27: [
                function (C, F, E) {
                  var w = C('../utils'),
                    v = C('./GenericWorker');
                  function e(c) {
                    v.call(this, 'DataWorker');
                    var r = this;
                    (this.dataIsReady = !1),
                      (this.index = 0),
                      (this.max = 0),
                      (this.data = null),
                      (this.type = ''),
                      (this._tickScheduled = !1),
                      c.then(
                        function (m) {
                          (r.dataIsReady = !0),
                            (r.data = m),
                            (r.max = (m && m.length) || 0),
                            (r.type = w.getTypeOf(m)),
                            r.isPaused || r._tickAndRepeat();
                        },
                        function (m) {
                          r.error(m);
                        },
                      );
                  }
                  w.inherits(e, v),
                    (e.prototype.cleanUp = function () {
                      v.prototype.cleanUp.call(this), (this.data = null);
                    }),
                    (e.prototype.resume = function () {
                      return (
                        !!v.prototype.resume.call(this) &&
                        (!this._tickScheduled &&
                          this.dataIsReady &&
                          ((this._tickScheduled = !0), w.delay(this._tickAndRepeat, [], this)),
                        !0)
                      );
                    }),
                    (e.prototype._tickAndRepeat = function () {
                      (this._tickScheduled = !1),
                        this.isPaused ||
                          this.isFinished ||
                          (this._tick(),
                          this.isFinished ||
                            (w.delay(this._tickAndRepeat, [], this), (this._tickScheduled = !0)));
                    }),
                    (e.prototype._tick = function () {
                      if (this.isPaused || this.isFinished) return !1;
                      var c = null,
                        r = Math.min(this.max, this.index + 16384);
                      if (this.index >= this.max) return this.end();
                      switch (this.type) {
                        case 'string':
                          c = this.data.substring(this.index, r);
                          break;
                        case 'uint8array':
                          c = this.data.subarray(this.index, r);
                          break;
                        case 'array':
                        case 'nodebuffer':
                          c = this.data.slice(this.index, r);
                      }
                      return (
                        (this.index = r),
                        this.push({
                          data: c,
                          meta: { percent: this.max ? (this.index / this.max) * 100 : 0 },
                        })
                      );
                    }),
                    (F.exports = e);
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              28: [
                function (C, F, E) {
                  function w(v) {
                    (this.name = v || 'default'),
                      (this.streamInfo = {}),
                      (this.generatedError = null),
                      (this.extraStreamInfo = {}),
                      (this.isPaused = !0),
                      (this.isFinished = !1),
                      (this.isLocked = !1),
                      (this._listeners = { data: [], end: [], error: [] }),
                      (this.previous = null);
                  }
                  (w.prototype = {
                    push: function (v) {
                      this.emit('data', v);
                    },
                    end: function () {
                      if (this.isFinished) return !1;
                      this.flush();
                      try {
                        this.emit('end'), this.cleanUp(), (this.isFinished = !0);
                      } catch (v) {
                        this.emit('error', v);
                      }
                      return !0;
                    },
                    error: function (v) {
                      return (
                        !this.isFinished &&
                        (this.isPaused
                          ? (this.generatedError = v)
                          : ((this.isFinished = !0),
                            this.emit('error', v),
                            this.previous && this.previous.error(v),
                            this.cleanUp()),
                        !0)
                      );
                    },
                    on: function (v, e) {
                      return this._listeners[v].push(e), this;
                    },
                    cleanUp: function () {
                      (this.streamInfo = this.generatedError = this.extraStreamInfo = null),
                        (this._listeners = []);
                    },
                    emit: function (v, e) {
                      if (this._listeners[v])
                        for (var c = 0; c < this._listeners[v].length; c++)
                          this._listeners[v][c].call(this, e);
                    },
                    pipe: function (v) {
                      return v.registerPrevious(this);
                    },
                    registerPrevious: function (v) {
                      if (this.isLocked)
                        throw new Error("The stream '" + this + "' has already been used.");
                      (this.streamInfo = v.streamInfo), this.mergeStreamInfo(), (this.previous = v);
                      var e = this;
                      return (
                        v.on('data', function (c) {
                          e.processChunk(c);
                        }),
                        v.on('end', function () {
                          e.end();
                        }),
                        v.on('error', function (c) {
                          e.error(c);
                        }),
                        this
                      );
                    },
                    pause: function () {
                      return (
                        !this.isPaused &&
                        !this.isFinished &&
                        ((this.isPaused = !0), this.previous && this.previous.pause(), !0)
                      );
                    },
                    resume: function () {
                      if (!this.isPaused || this.isFinished) return !1;
                      var v = (this.isPaused = !1);
                      return (
                        this.generatedError && (this.error(this.generatedError), (v = !0)),
                        this.previous && this.previous.resume(),
                        !v
                      );
                    },
                    flush: function () {},
                    processChunk: function (v) {
                      this.push(v);
                    },
                    withStreamInfo: function (v, e) {
                      return (this.extraStreamInfo[v] = e), this.mergeStreamInfo(), this;
                    },
                    mergeStreamInfo: function () {
                      for (var v in this.extraStreamInfo)
                        Object.prototype.hasOwnProperty.call(this.extraStreamInfo, v) &&
                          (this.streamInfo[v] = this.extraStreamInfo[v]);
                    },
                    lock: function () {
                      if (this.isLocked)
                        throw new Error("The stream '" + this + "' has already been used.");
                      (this.isLocked = !0), this.previous && this.previous.lock();
                    },
                    toString: function () {
                      var v = 'Worker ' + this.name;
                      return this.previous ? this.previous + ' -> ' + v : v;
                    },
                  }),
                    (F.exports = w);
                },
                {},
              ],
              29: [
                function (C, F, E) {
                  var w = C('../utils'),
                    v = C('./ConvertWorker'),
                    e = C('./GenericWorker'),
                    c = C('../base64'),
                    r = C('../support'),
                    m = C('../external'),
                    f = null;
                  if (r.nodestream)
                    try {
                      f = C('../nodejs/NodejsStreamOutputAdapter');
                    } catch (y) {}
                  function n(y, h) {
                    return new m.Promise(function (d, p) {
                      var g = [],
                        x = y._internalType,
                        P = y._outputType,
                        a = y._mimeType;
                      y.on('data', function (s, t) {
                        g.push(s), h && h(t);
                      })
                        .on('error', function (s) {
                          (g = []), p(s);
                        })
                        .on('end', function () {
                          try {
                            var s = (function (t, l, b) {
                              switch (t) {
                                case 'blob':
                                  return w.newBlob(w.transformTo('arraybuffer', l), b);
                                case 'base64':
                                  return c.encode(l);
                                default:
                                  return w.transformTo(t, l);
                              }
                            })(
                              P,
                              (function (t, l) {
                                var b,
                                  k = 0,
                                  D = null,
                                  _ = 0;
                                for (b = 0; b < l.length; b++) _ += l[b].length;
                                switch (t) {
                                  case 'string':
                                    return l.join('');
                                  case 'array':
                                    return Array.prototype.concat.apply([], l);
                                  case 'uint8array':
                                    for (D = new Uint8Array(_), b = 0; b < l.length; b++)
                                      D.set(l[b], k), (k += l[b].length);
                                    return D;
                                  case 'nodebuffer':
                                    return Buffer.concat(l);
                                  default:
                                    throw new Error("concat : unsupported type '" + t + "'");
                                }
                              })(x, g),
                              a,
                            );
                            d(s);
                          } catch (t) {
                            p(t);
                          }
                          g = [];
                        })
                        .resume();
                    });
                  }
                  function i(y, h, d) {
                    var p = h;
                    switch (h) {
                      case 'blob':
                      case 'arraybuffer':
                        p = 'uint8array';
                        break;
                      case 'base64':
                        p = 'string';
                    }
                    try {
                      (this._internalType = p),
                        (this._outputType = h),
                        (this._mimeType = d),
                        w.checkSupport(p),
                        (this._worker = y.pipe(new v(p))),
                        y.lock();
                    } catch (g) {
                      (this._worker = new e('error')), this._worker.error(g);
                    }
                  }
                  (i.prototype = {
                    accumulate: function (y) {
                      return n(this, y);
                    },
                    on: function (y, h) {
                      var d = this;
                      return (
                        y === 'data'
                          ? this._worker.on(y, function (p) {
                              h.call(d, p.data, p.meta);
                            })
                          : this._worker.on(y, function () {
                              w.delay(h, arguments, d);
                            }),
                        this
                      );
                    },
                    resume: function () {
                      return w.delay(this._worker.resume, [], this._worker), this;
                    },
                    pause: function () {
                      return this._worker.pause(), this;
                    },
                    toNodejsStream: function (y) {
                      if ((w.checkSupport('nodestream'), this._outputType !== 'nodebuffer'))
                        throw new Error(this._outputType + ' is not supported by this method');
                      return new f(this, { objectMode: this._outputType !== 'nodebuffer' }, y);
                    },
                  }),
                    (F.exports = i);
                },
                {
                  '../base64': 1,
                  '../external': 6,
                  '../nodejs/NodejsStreamOutputAdapter': 13,
                  '../support': 30,
                  '../utils': 32,
                  './ConvertWorker': 24,
                  './GenericWorker': 28,
                },
              ],
              30: [
                function (C, F, E) {
                  if (
                    ((E.base64 = !0),
                    (E.array = !0),
                    (E.string = !0),
                    (E.arraybuffer =
                      typeof ArrayBuffer != 'undefined' && typeof Uint8Array != 'undefined'),
                    (E.nodebuffer = typeof Buffer != 'undefined'),
                    (E.uint8array = typeof Uint8Array != 'undefined'),
                    typeof ArrayBuffer == 'undefined')
                  )
                    E.blob = !1;
                  else {
                    var w = new ArrayBuffer(0);
                    try {
                      E.blob = new Blob([w], { type: 'application/zip' }).size === 0;
                    } catch (e) {
                      try {
                        var v = new (self.BlobBuilder ||
                          self.WebKitBlobBuilder ||
                          self.MozBlobBuilder ||
                          self.MSBlobBuilder)();
                        v.append(w), (E.blob = v.getBlob('application/zip').size === 0);
                      } catch (c) {
                        E.blob = !1;
                      }
                    }
                  }
                  try {
                    E.nodestream = !!C('readable-stream').Readable;
                  } catch (e) {
                    E.nodestream = !1;
                  }
                },
                { 'readable-stream': 16 },
              ],
              31: [
                function (C, F, E) {
                  for (
                    var w = C('./utils'),
                      v = C('./support'),
                      e = C('./nodejsUtils'),
                      c = C('./stream/GenericWorker'),
                      r = new Array(256),
                      m = 0;
                    m < 256;
                    m++
                  )
                    r[m] =
                      252 <= m ? 6 : 248 <= m ? 5 : 240 <= m ? 4 : 224 <= m ? 3 : 192 <= m ? 2 : 1;
                  r[254] = r[254] = 1;
                  function f() {
                    c.call(this, 'utf-8 decode'), (this.leftOver = null);
                  }
                  function n() {
                    c.call(this, 'utf-8 encode');
                  }
                  (E.utf8encode = function (i) {
                    return v.nodebuffer
                      ? e.newBufferFrom(i, 'utf-8')
                      : (function (y) {
                          var h,
                            d,
                            p,
                            g,
                            x,
                            P = y.length,
                            a = 0;
                          for (g = 0; g < P; g++)
                            (64512 & (d = y.charCodeAt(g))) == 55296 &&
                              g + 1 < P &&
                              (64512 & (p = y.charCodeAt(g + 1))) == 56320 &&
                              ((d = 65536 + ((d - 55296) << 10) + (p - 56320)), g++),
                              (a += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4);
                          for (
                            h = v.uint8array ? new Uint8Array(a) : new Array(a), g = x = 0;
                            x < a;
                            g++
                          )
                            (64512 & (d = y.charCodeAt(g))) == 55296 &&
                              g + 1 < P &&
                              (64512 & (p = y.charCodeAt(g + 1))) == 56320 &&
                              ((d = 65536 + ((d - 55296) << 10) + (p - 56320)), g++),
                              d < 128
                                ? (h[x++] = d)
                                : (d < 2048
                                    ? (h[x++] = 192 | (d >>> 6))
                                    : (d < 65536
                                        ? (h[x++] = 224 | (d >>> 12))
                                        : ((h[x++] = 240 | (d >>> 18)),
                                          (h[x++] = 128 | ((d >>> 12) & 63))),
                                      (h[x++] = 128 | ((d >>> 6) & 63))),
                                  (h[x++] = 128 | (63 & d)));
                          return h;
                        })(i);
                  }),
                    (E.utf8decode = function (i) {
                      return v.nodebuffer
                        ? w.transformTo('nodebuffer', i).toString('utf-8')
                        : (function (y) {
                            var h,
                              d,
                              p,
                              g,
                              x = y.length,
                              P = new Array(2 * x);
                            for (h = d = 0; h < x; )
                              if ((p = y[h++]) < 128) P[d++] = p;
                              else if (4 < (g = r[p])) (P[d++] = 65533), (h += g - 1);
                              else {
                                for (p &= g === 2 ? 31 : g === 3 ? 15 : 7; 1 < g && h < x; )
                                  (p = (p << 6) | (63 & y[h++])), g--;
                                1 < g
                                  ? (P[d++] = 65533)
                                  : p < 65536
                                  ? (P[d++] = p)
                                  : ((p -= 65536),
                                    (P[d++] = 55296 | ((p >> 10) & 1023)),
                                    (P[d++] = 56320 | (1023 & p)));
                              }
                            return (
                              P.length !== d &&
                                (P.subarray ? (P = P.subarray(0, d)) : (P.length = d)),
                              w.applyFromCharCode(P)
                            );
                          })((i = w.transformTo(v.uint8array ? 'uint8array' : 'array', i)));
                    }),
                    w.inherits(f, c),
                    (f.prototype.processChunk = function (i) {
                      var y = w.transformTo(v.uint8array ? 'uint8array' : 'array', i.data);
                      if (this.leftOver && this.leftOver.length) {
                        if (v.uint8array) {
                          var h = y;
                          (y = new Uint8Array(h.length + this.leftOver.length)).set(
                            this.leftOver,
                            0,
                          ),
                            y.set(h, this.leftOver.length);
                        } else y = this.leftOver.concat(y);
                        this.leftOver = null;
                      }
                      var d = (function (g, x) {
                          var P;
                          for (
                            (x = x || g.length) > g.length && (x = g.length), P = x - 1;
                            0 <= P && (192 & g[P]) == 128;

                          )
                            P--;
                          return P < 0 || P === 0 ? x : P + r[g[P]] > x ? P : x;
                        })(y),
                        p = y;
                      d !== y.length &&
                        (v.uint8array
                          ? ((p = y.subarray(0, d)), (this.leftOver = y.subarray(d, y.length)))
                          : ((p = y.slice(0, d)), (this.leftOver = y.slice(d, y.length)))),
                        this.push({ data: E.utf8decode(p), meta: i.meta });
                    }),
                    (f.prototype.flush = function () {
                      this.leftOver &&
                        this.leftOver.length &&
                        (this.push({ data: E.utf8decode(this.leftOver), meta: {} }),
                        (this.leftOver = null));
                    }),
                    (E.Utf8DecodeWorker = f),
                    w.inherits(n, c),
                    (n.prototype.processChunk = function (i) {
                      this.push({ data: E.utf8encode(i.data), meta: i.meta });
                    }),
                    (E.Utf8EncodeWorker = n);
                },
                {
                  './nodejsUtils': 14,
                  './stream/GenericWorker': 28,
                  './support': 30,
                  './utils': 32,
                },
              ],
              32: [
                function (C, F, E) {
                  var w = C('./support'),
                    v = C('./base64'),
                    e = C('./nodejsUtils'),
                    c = C('./external');
                  function r(h) {
                    return h;
                  }
                  function m(h, d) {
                    for (var p = 0; p < h.length; ++p) d[p] = 255 & h.charCodeAt(p);
                    return d;
                  }
                  C('setimmediate'),
                    (E.newBlob = function (h, d) {
                      E.checkSupport('blob');
                      try {
                        return new Blob([h], { type: d });
                      } catch (g) {
                        try {
                          var p = new (self.BlobBuilder ||
                            self.WebKitBlobBuilder ||
                            self.MozBlobBuilder ||
                            self.MSBlobBuilder)();
                          return p.append(h), p.getBlob(d);
                        } catch (x) {
                          throw new Error("Bug : can't construct the Blob.");
                        }
                      }
                    });
                  var f = {
                    stringifyByChunk: function (h, d, p) {
                      var g = [],
                        x = 0,
                        P = h.length;
                      if (P <= p) return String.fromCharCode.apply(null, h);
                      for (; x < P; )
                        d === 'array' || d === 'nodebuffer'
                          ? g.push(String.fromCharCode.apply(null, h.slice(x, Math.min(x + p, P))))
                          : g.push(
                              String.fromCharCode.apply(null, h.subarray(x, Math.min(x + p, P))),
                            ),
                          (x += p);
                      return g.join('');
                    },
                    stringifyByChar: function (h) {
                      for (var d = '', p = 0; p < h.length; p++) d += String.fromCharCode(h[p]);
                      return d;
                    },
                    applyCanBeUsed: {
                      uint8array: (function () {
                        try {
                          return (
                            w.uint8array &&
                            String.fromCharCode.apply(null, new Uint8Array(1)).length === 1
                          );
                        } catch (h) {
                          return !1;
                        }
                      })(),
                      nodebuffer: (function () {
                        try {
                          return (
                            w.nodebuffer &&
                            String.fromCharCode.apply(null, e.allocBuffer(1)).length === 1
                          );
                        } catch (h) {
                          return !1;
                        }
                      })(),
                    },
                  };
                  function n(h) {
                    var d = 65536,
                      p = E.getTypeOf(h),
                      g = !0;
                    if (
                      (p === 'uint8array'
                        ? (g = f.applyCanBeUsed.uint8array)
                        : p === 'nodebuffer' && (g = f.applyCanBeUsed.nodebuffer),
                      g)
                    )
                      for (; 1 < d; )
                        try {
                          return f.stringifyByChunk(h, p, d);
                        } catch (x) {
                          d = Math.floor(d / 2);
                        }
                    return f.stringifyByChar(h);
                  }
                  function i(h, d) {
                    for (var p = 0; p < h.length; p++) d[p] = h[p];
                    return d;
                  }
                  E.applyFromCharCode = n;
                  var y = {};
                  (y.string = {
                    string: r,
                    array: function (h) {
                      return m(h, new Array(h.length));
                    },
                    arraybuffer: function (h) {
                      return y.string.uint8array(h).buffer;
                    },
                    uint8array: function (h) {
                      return m(h, new Uint8Array(h.length));
                    },
                    nodebuffer: function (h) {
                      return m(h, e.allocBuffer(h.length));
                    },
                  }),
                    (y.array = {
                      string: n,
                      array: r,
                      arraybuffer: function (h) {
                        return new Uint8Array(h).buffer;
                      },
                      uint8array: function (h) {
                        return new Uint8Array(h);
                      },
                      nodebuffer: function (h) {
                        return e.newBufferFrom(h);
                      },
                    }),
                    (y.arraybuffer = {
                      string: function (h) {
                        return n(new Uint8Array(h));
                      },
                      array: function (h) {
                        return i(new Uint8Array(h), new Array(h.byteLength));
                      },
                      arraybuffer: r,
                      uint8array: function (h) {
                        return new Uint8Array(h);
                      },
                      nodebuffer: function (h) {
                        return e.newBufferFrom(new Uint8Array(h));
                      },
                    }),
                    (y.uint8array = {
                      string: n,
                      array: function (h) {
                        return i(h, new Array(h.length));
                      },
                      arraybuffer: function (h) {
                        return h.buffer;
                      },
                      uint8array: r,
                      nodebuffer: function (h) {
                        return e.newBufferFrom(h);
                      },
                    }),
                    (y.nodebuffer = {
                      string: n,
                      array: function (h) {
                        return i(h, new Array(h.length));
                      },
                      arraybuffer: function (h) {
                        return y.nodebuffer.uint8array(h).buffer;
                      },
                      uint8array: function (h) {
                        return i(h, new Uint8Array(h.length));
                      },
                      nodebuffer: r,
                    }),
                    (E.transformTo = function (h, d) {
                      if (((d = d || ''), !h)) return d;
                      E.checkSupport(h);
                      var p = E.getTypeOf(d);
                      return y[p][h](d);
                    }),
                    (E.resolve = function (h) {
                      for (var d = h.split('/'), p = [], g = 0; g < d.length; g++) {
                        var x = d[g];
                        x === '.' ||
                          (x === '' && g !== 0 && g !== d.length - 1) ||
                          (x === '..' ? p.pop() : p.push(x));
                      }
                      return p.join('/');
                    }),
                    (E.getTypeOf = function (h) {
                      return typeof h == 'string'
                        ? 'string'
                        : Object.prototype.toString.call(h) === '[object Array]'
                        ? 'array'
                        : w.nodebuffer && e.isBuffer(h)
                        ? 'nodebuffer'
                        : w.uint8array && h instanceof Uint8Array
                        ? 'uint8array'
                        : w.arraybuffer && h instanceof ArrayBuffer
                        ? 'arraybuffer'
                        : void 0;
                    }),
                    (E.checkSupport = function (h) {
                      if (!w[h.toLowerCase()])
                        throw new Error(h + ' is not supported by this platform');
                    }),
                    (E.MAX_VALUE_16BITS = 65535),
                    (E.MAX_VALUE_32BITS = -1),
                    (E.pretty = function (h) {
                      var d,
                        p,
                        g = '';
                      for (p = 0; p < (h || '').length; p++)
                        g +=
                          '\\x' +
                          ((d = h.charCodeAt(p)) < 16 ? '0' : '') +
                          d.toString(16).toUpperCase();
                      return g;
                    }),
                    (E.delay = function (h, d, p) {
                      setImmediate(function () {
                        h.apply(p || null, d || []);
                      });
                    }),
                    (E.inherits = function (h, d) {
                      function p() {}
                      (p.prototype = d.prototype), (h.prototype = new p());
                    }),
                    (E.extend = function () {
                      var h,
                        d,
                        p = {};
                      for (h = 0; h < arguments.length; h++)
                        for (d in arguments[h])
                          Object.prototype.hasOwnProperty.call(arguments[h], d) &&
                            p[d] === void 0 &&
                            (p[d] = arguments[h][d]);
                      return p;
                    }),
                    (E.prepareContent = function (h, d, p, g, x) {
                      return c.Promise.resolve(d)
                        .then(function (P) {
                          return w.blob &&
                            (P instanceof Blob ||
                              ['[object File]', '[object Blob]'].indexOf(
                                Object.prototype.toString.call(P),
                              ) !== -1) &&
                            typeof FileReader != 'undefined'
                            ? new c.Promise(function (a, s) {
                                var t = new FileReader();
                                (t.onload = function (l) {
                                  a(l.target.result);
                                }),
                                  (t.onerror = function (l) {
                                    s(l.target.error);
                                  }),
                                  t.readAsArrayBuffer(P);
                              })
                            : P;
                        })
                        .then(function (P) {
                          var a = E.getTypeOf(P);
                          return a
                            ? (a === 'arraybuffer'
                                ? (P = E.transformTo('uint8array', P))
                                : a === 'string' &&
                                  (x
                                    ? (P = v.decode(P))
                                    : p &&
                                      g !== !0 &&
                                      (P = (function (s) {
                                        return m(
                                          s,
                                          w.uint8array
                                            ? new Uint8Array(s.length)
                                            : new Array(s.length),
                                        );
                                      })(P))),
                              P)
                            : c.Promise.reject(
                                new Error(
                                  "Can't read the data of '" +
                                    h +
                                    "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?",
                                ),
                              );
                        });
                    });
                },
                {
                  './base64': 1,
                  './external': 6,
                  './nodejsUtils': 14,
                  './support': 30,
                  setimmediate: 54,
                },
              ],
              33: [
                function (C, F, E) {
                  var w = C('./reader/readerFor'),
                    v = C('./utils'),
                    e = C('./signature'),
                    c = C('./zipEntry'),
                    r = C('./support');
                  function m(f) {
                    (this.files = []), (this.loadOptions = f);
                  }
                  (m.prototype = {
                    checkSignature: function (f) {
                      if (!this.reader.readAndCheckSignature(f)) {
                        this.reader.index -= 4;
                        var n = this.reader.readString(4);
                        throw new Error(
                          'Corrupted zip or bug: unexpected signature (' +
                            v.pretty(n) +
                            ', expected ' +
                            v.pretty(f) +
                            ')',
                        );
                      }
                    },
                    isSignature: function (f, n) {
                      var i = this.reader.index;
                      this.reader.setIndex(f);
                      var y = this.reader.readString(4) === n;
                      return this.reader.setIndex(i), y;
                    },
                    readBlockEndOfCentral: function () {
                      (this.diskNumber = this.reader.readInt(2)),
                        (this.diskWithCentralDirStart = this.reader.readInt(2)),
                        (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                        (this.centralDirRecords = this.reader.readInt(2)),
                        (this.centralDirSize = this.reader.readInt(4)),
                        (this.centralDirOffset = this.reader.readInt(4)),
                        (this.zipCommentLength = this.reader.readInt(2));
                      var f = this.reader.readData(this.zipCommentLength),
                        n = r.uint8array ? 'uint8array' : 'array',
                        i = v.transformTo(n, f);
                      this.zipComment = this.loadOptions.decodeFileName(i);
                    },
                    readBlockZip64EndOfCentral: function () {
                      (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                        this.reader.skip(4),
                        (this.diskNumber = this.reader.readInt(4)),
                        (this.diskWithCentralDirStart = this.reader.readInt(4)),
                        (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                        (this.centralDirRecords = this.reader.readInt(8)),
                        (this.centralDirSize = this.reader.readInt(8)),
                        (this.centralDirOffset = this.reader.readInt(8)),
                        (this.zip64ExtensibleData = {});
                      for (var f, n, i, y = this.zip64EndOfCentralSize - 44; 0 < y; )
                        (f = this.reader.readInt(2)),
                          (n = this.reader.readInt(4)),
                          (i = this.reader.readData(n)),
                          (this.zip64ExtensibleData[f] = { id: f, length: n, value: i });
                    },
                    readBlockZip64EndOfCentralLocator: function () {
                      if (
                        ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
                        (this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8)),
                        (this.disksCount = this.reader.readInt(4)),
                        1 < this.disksCount)
                      )
                        throw new Error('Multi-volumes zip are not supported');
                    },
                    readLocalFiles: function () {
                      var f, n;
                      for (f = 0; f < this.files.length; f++)
                        (n = this.files[f]),
                          this.reader.setIndex(n.localHeaderOffset),
                          this.checkSignature(e.LOCAL_FILE_HEADER),
                          n.readLocalPart(this.reader),
                          n.handleUTF8(),
                          n.processAttributes();
                    },
                    readCentralDir: function () {
                      var f;
                      for (
                        this.reader.setIndex(this.centralDirOffset);
                        this.reader.readAndCheckSignature(e.CENTRAL_FILE_HEADER);

                      )
                        (f = new c({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(
                          this.reader,
                        ),
                          this.files.push(f);
                      if (
                        this.centralDirRecords !== this.files.length &&
                        this.centralDirRecords !== 0 &&
                        this.files.length === 0
                      )
                        throw new Error(
                          'Corrupted zip or bug: expected ' +
                            this.centralDirRecords +
                            ' records in central dir, got ' +
                            this.files.length,
                        );
                    },
                    readEndOfCentral: function () {
                      var f = this.reader.lastIndexOfSignature(e.CENTRAL_DIRECTORY_END);
                      if (f < 0)
                        throw this.isSignature(0, e.LOCAL_FILE_HEADER)
                          ? new Error("Corrupted zip: can't find end of central directory")
                          : new Error(
                              "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html",
                            );
                      this.reader.setIndex(f);
                      var n = f;
                      if (
                        (this.checkSignature(e.CENTRAL_DIRECTORY_END),
                        this.readBlockEndOfCentral(),
                        this.diskNumber === v.MAX_VALUE_16BITS ||
                          this.diskWithCentralDirStart === v.MAX_VALUE_16BITS ||
                          this.centralDirRecordsOnThisDisk === v.MAX_VALUE_16BITS ||
                          this.centralDirRecords === v.MAX_VALUE_16BITS ||
                          this.centralDirSize === v.MAX_VALUE_32BITS ||
                          this.centralDirOffset === v.MAX_VALUE_32BITS)
                      ) {
                        if (
                          ((this.zip64 = !0),
                          (f = this.reader.lastIndexOfSignature(
                            e.ZIP64_CENTRAL_DIRECTORY_LOCATOR,
                          )) < 0)
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory locator",
                          );
                        if (
                          (this.reader.setIndex(f),
                          this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                          this.readBlockZip64EndOfCentralLocator(),
                          !this.isSignature(
                            this.relativeOffsetEndOfZip64CentralDir,
                            e.ZIP64_CENTRAL_DIRECTORY_END,
                          ) &&
                            ((this.relativeOffsetEndOfZip64CentralDir =
                              this.reader.lastIndexOfSignature(e.ZIP64_CENTRAL_DIRECTORY_END)),
                            this.relativeOffsetEndOfZip64CentralDir < 0))
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory",
                          );
                        this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                          this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_END),
                          this.readBlockZip64EndOfCentral();
                      }
                      var i = this.centralDirOffset + this.centralDirSize;
                      this.zip64 && ((i += 20), (i += 12 + this.zip64EndOfCentralSize));
                      var y = n - i;
                      if (0 < y)
                        this.isSignature(n, e.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
                      else if (y < 0)
                        throw new Error('Corrupted zip: missing ' + Math.abs(y) + ' bytes.');
                    },
                    prepareReader: function (f) {
                      this.reader = w(f);
                    },
                    load: function (f) {
                      this.prepareReader(f),
                        this.readEndOfCentral(),
                        this.readCentralDir(),
                        this.readLocalFiles();
                    },
                  }),
                    (F.exports = m);
                },
                {
                  './reader/readerFor': 22,
                  './signature': 23,
                  './support': 30,
                  './utils': 32,
                  './zipEntry': 34,
                },
              ],
              34: [
                function (C, F, E) {
                  var w = C('./reader/readerFor'),
                    v = C('./utils'),
                    e = C('./compressedObject'),
                    c = C('./crc32'),
                    r = C('./utf8'),
                    m = C('./compressions'),
                    f = C('./support');
                  function n(i, y) {
                    (this.options = i), (this.loadOptions = y);
                  }
                  (n.prototype = {
                    isEncrypted: function () {
                      return (1 & this.bitFlag) == 1;
                    },
                    useUTF8: function () {
                      return (2048 & this.bitFlag) == 2048;
                    },
                    readLocalPart: function (i) {
                      var y, h;
                      if (
                        (i.skip(22),
                        (this.fileNameLength = i.readInt(2)),
                        (h = i.readInt(2)),
                        (this.fileName = i.readData(this.fileNameLength)),
                        i.skip(h),
                        this.compressedSize === -1 || this.uncompressedSize === -1)
                      )
                        throw new Error(
                          "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)",
                        );
                      if (
                        (y = (function (d) {
                          for (var p in m)
                            if (Object.prototype.hasOwnProperty.call(m, p) && m[p].magic === d)
                              return m[p];
                          return null;
                        })(this.compressionMethod)) === null
                      )
                        throw new Error(
                          'Corrupted zip : compression ' +
                            v.pretty(this.compressionMethod) +
                            ' unknown (inner file : ' +
                            v.transformTo('string', this.fileName) +
                            ')',
                        );
                      this.decompressed = new e(
                        this.compressedSize,
                        this.uncompressedSize,
                        this.crc32,
                        y,
                        i.readData(this.compressedSize),
                      );
                    },
                    readCentralPart: function (i) {
                      (this.versionMadeBy = i.readInt(2)),
                        i.skip(2),
                        (this.bitFlag = i.readInt(2)),
                        (this.compressionMethod = i.readString(2)),
                        (this.date = i.readDate()),
                        (this.crc32 = i.readInt(4)),
                        (this.compressedSize = i.readInt(4)),
                        (this.uncompressedSize = i.readInt(4));
                      var y = i.readInt(2);
                      if (
                        ((this.extraFieldsLength = i.readInt(2)),
                        (this.fileCommentLength = i.readInt(2)),
                        (this.diskNumberStart = i.readInt(2)),
                        (this.internalFileAttributes = i.readInt(2)),
                        (this.externalFileAttributes = i.readInt(4)),
                        (this.localHeaderOffset = i.readInt(4)),
                        this.isEncrypted())
                      )
                        throw new Error('Encrypted zip are not supported');
                      i.skip(y),
                        this.readExtraFields(i),
                        this.parseZIP64ExtraField(i),
                        (this.fileComment = i.readData(this.fileCommentLength));
                    },
                    processAttributes: function () {
                      (this.unixPermissions = null), (this.dosPermissions = null);
                      var i = this.versionMadeBy >> 8;
                      (this.dir = !!(16 & this.externalFileAttributes)),
                        i == 0 && (this.dosPermissions = 63 & this.externalFileAttributes),
                        i == 3 &&
                          (this.unixPermissions = (this.externalFileAttributes >> 16) & 65535),
                        this.dir || this.fileNameStr.slice(-1) !== '/' || (this.dir = !0);
                    },
                    parseZIP64ExtraField: function () {
                      if (this.extraFields[1]) {
                        var i = w(this.extraFields[1].value);
                        this.uncompressedSize === v.MAX_VALUE_32BITS &&
                          (this.uncompressedSize = i.readInt(8)),
                          this.compressedSize === v.MAX_VALUE_32BITS &&
                            (this.compressedSize = i.readInt(8)),
                          this.localHeaderOffset === v.MAX_VALUE_32BITS &&
                            (this.localHeaderOffset = i.readInt(8)),
                          this.diskNumberStart === v.MAX_VALUE_32BITS &&
                            (this.diskNumberStart = i.readInt(4));
                      }
                    },
                    readExtraFields: function (i) {
                      var y,
                        h,
                        d,
                        p = i.index + this.extraFieldsLength;
                      for (this.extraFields || (this.extraFields = {}); i.index + 4 < p; )
                        (y = i.readInt(2)),
                          (h = i.readInt(2)),
                          (d = i.readData(h)),
                          (this.extraFields[y] = { id: y, length: h, value: d });
                      i.setIndex(p);
                    },
                    handleUTF8: function () {
                      var i = f.uint8array ? 'uint8array' : 'array';
                      if (this.useUTF8())
                        (this.fileNameStr = r.utf8decode(this.fileName)),
                          (this.fileCommentStr = r.utf8decode(this.fileComment));
                      else {
                        var y = this.findExtraFieldUnicodePath();
                        if (y !== null) this.fileNameStr = y;
                        else {
                          var h = v.transformTo(i, this.fileName);
                          this.fileNameStr = this.loadOptions.decodeFileName(h);
                        }
                        var d = this.findExtraFieldUnicodeComment();
                        if (d !== null) this.fileCommentStr = d;
                        else {
                          var p = v.transformTo(i, this.fileComment);
                          this.fileCommentStr = this.loadOptions.decodeFileName(p);
                        }
                      }
                    },
                    findExtraFieldUnicodePath: function () {
                      var i = this.extraFields[28789];
                      if (i) {
                        var y = w(i.value);
                        return y.readInt(1) !== 1 || c(this.fileName) !== y.readInt(4)
                          ? null
                          : r.utf8decode(y.readData(i.length - 5));
                      }
                      return null;
                    },
                    findExtraFieldUnicodeComment: function () {
                      var i = this.extraFields[25461];
                      if (i) {
                        var y = w(i.value);
                        return y.readInt(1) !== 1 || c(this.fileComment) !== y.readInt(4)
                          ? null
                          : r.utf8decode(y.readData(i.length - 5));
                      }
                      return null;
                    },
                  }),
                    (F.exports = n);
                },
                {
                  './compressedObject': 2,
                  './compressions': 3,
                  './crc32': 4,
                  './reader/readerFor': 22,
                  './support': 30,
                  './utf8': 31,
                  './utils': 32,
                },
              ],
              35: [
                function (C, F, E) {
                  function w(y, h, d) {
                    (this.name = y),
                      (this.dir = d.dir),
                      (this.date = d.date),
                      (this.comment = d.comment),
                      (this.unixPermissions = d.unixPermissions),
                      (this.dosPermissions = d.dosPermissions),
                      (this._data = h),
                      (this._dataBinary = d.binary),
                      (this.options = {
                        compression: d.compression,
                        compressionOptions: d.compressionOptions,
                      });
                  }
                  var v = C('./stream/StreamHelper'),
                    e = C('./stream/DataWorker'),
                    c = C('./utf8'),
                    r = C('./compressedObject'),
                    m = C('./stream/GenericWorker');
                  w.prototype = {
                    internalStream: function (y) {
                      var h = null,
                        d = 'string';
                      try {
                        if (!y) throw new Error('No output type specified.');
                        var p = (d = y.toLowerCase()) === 'string' || d === 'text';
                        (d !== 'binarystring' && d !== 'text') || (d = 'string'),
                          (h = this._decompressWorker());
                        var g = !this._dataBinary;
                        g && !p && (h = h.pipe(new c.Utf8EncodeWorker())),
                          !g && p && (h = h.pipe(new c.Utf8DecodeWorker()));
                      } catch (x) {
                        (h = new m('error')).error(x);
                      }
                      return new v(h, d, '');
                    },
                    async: function (y, h) {
                      return this.internalStream(y).accumulate(h);
                    },
                    nodeStream: function (y, h) {
                      return this.internalStream(y || 'nodebuffer').toNodejsStream(h);
                    },
                    _compressWorker: function (y, h) {
                      if (this._data instanceof r && this._data.compression.magic === y.magic)
                        return this._data.getCompressedWorker();
                      var d = this._decompressWorker();
                      return (
                        this._dataBinary || (d = d.pipe(new c.Utf8EncodeWorker())),
                        r.createWorkerFrom(d, y, h)
                      );
                    },
                    _decompressWorker: function () {
                      return this._data instanceof r
                        ? this._data.getContentWorker()
                        : this._data instanceof m
                        ? this._data
                        : new e(this._data);
                    },
                  };
                  for (
                    var f = ['asText', 'asBinary', 'asNodeBuffer', 'asUint8Array', 'asArrayBuffer'],
                      n = function () {
                        throw new Error(
                          'This method has been removed in JSZip 3.0, please check the upgrade guide.',
                        );
                      },
                      i = 0;
                    i < f.length;
                    i++
                  )
                    w.prototype[f[i]] = n;
                  F.exports = w;
                },
                {
                  './compressedObject': 2,
                  './stream/DataWorker': 27,
                  './stream/GenericWorker': 28,
                  './stream/StreamHelper': 29,
                  './utf8': 31,
                },
              ],
              36: [
                function (C, F, E) {
                  (function (w) {
                    var v,
                      e,
                      c = w.MutationObserver || w.WebKitMutationObserver;
                    if (c) {
                      var r = 0,
                        m = new c(y),
                        f = w.document.createTextNode('');
                      m.observe(f, { characterData: !0 }),
                        (v = function () {
                          f.data = r = ++r % 2;
                        });
                    } else if (w.setImmediate || w.MessageChannel === void 0)
                      v =
                        'document' in w &&
                        'onreadystatechange' in w.document.createElement('script')
                          ? function () {
                              var h = w.document.createElement('script');
                              (h.onreadystatechange = function () {
                                y(),
                                  (h.onreadystatechange = null),
                                  h.parentNode.removeChild(h),
                                  (h = null);
                              }),
                                w.document.documentElement.appendChild(h);
                            }
                          : function () {
                              setTimeout(y, 0);
                            };
                    else {
                      var n = new w.MessageChannel();
                      (n.port1.onmessage = y),
                        (v = function () {
                          n.port2.postMessage(0);
                        });
                    }
                    var i = [];
                    function y() {
                      var h, d;
                      e = !0;
                      for (var p = i.length; p; ) {
                        for (d = i, i = [], h = -1; ++h < p; ) d[h]();
                        p = i.length;
                      }
                      e = !1;
                    }
                    F.exports = function (h) {
                      i.push(h) !== 1 || e || v();
                    };
                  }).call(
                    this,
                    typeof ke != 'undefined'
                      ? ke
                      : typeof self != 'undefined'
                      ? self
                      : typeof window != 'undefined'
                      ? window
                      : {},
                  );
                },
                {},
              ],
              37: [
                function (C, F, E) {
                  var w = C('immediate');
                  function v() {}
                  var e = {},
                    c = ['REJECTED'],
                    r = ['FULFILLED'],
                    m = ['PENDING'];
                  function f(p) {
                    if (typeof p != 'function') throw new TypeError('resolver must be a function');
                    (this.state = m),
                      (this.queue = []),
                      (this.outcome = void 0),
                      p !== v && h(this, p);
                  }
                  function n(p, g, x) {
                    (this.promise = p),
                      typeof g == 'function' &&
                        ((this.onFulfilled = g), (this.callFulfilled = this.otherCallFulfilled)),
                      typeof x == 'function' &&
                        ((this.onRejected = x), (this.callRejected = this.otherCallRejected));
                  }
                  function i(p, g, x) {
                    w(function () {
                      var P;
                      try {
                        P = g(x);
                      } catch (a) {
                        return e.reject(p, a);
                      }
                      P === p
                        ? e.reject(p, new TypeError('Cannot resolve promise with itself'))
                        : e.resolve(p, P);
                    });
                  }
                  function y(p) {
                    var g = p && p.then;
                    if (
                      p &&
                      (typeof p == 'object' || typeof p == 'function') &&
                      typeof g == 'function'
                    )
                      return function () {
                        g.apply(p, arguments);
                      };
                  }
                  function h(p, g) {
                    var x = !1;
                    function P(t) {
                      x || ((x = !0), e.reject(p, t));
                    }
                    function a(t) {
                      x || ((x = !0), e.resolve(p, t));
                    }
                    var s = d(function () {
                      g(a, P);
                    });
                    s.status === 'error' && P(s.value);
                  }
                  function d(p, g) {
                    var x = {};
                    try {
                      (x.value = p(g)), (x.status = 'success');
                    } catch (P) {
                      (x.status = 'error'), (x.value = P);
                    }
                    return x;
                  }
                  ((F.exports = f).prototype.finally = function (p) {
                    if (typeof p != 'function') return this;
                    var g = this.constructor;
                    return this.then(
                      function (x) {
                        return g.resolve(p()).then(function () {
                          return x;
                        });
                      },
                      function (x) {
                        return g.resolve(p()).then(function () {
                          throw x;
                        });
                      },
                    );
                  }),
                    (f.prototype.catch = function (p) {
                      return this.then(null, p);
                    }),
                    (f.prototype.then = function (p, g) {
                      if (
                        (typeof p != 'function' && this.state === r) ||
                        (typeof g != 'function' && this.state === c)
                      )
                        return this;
                      var x = new this.constructor(v);
                      return (
                        this.state !== m
                          ? i(x, this.state === r ? p : g, this.outcome)
                          : this.queue.push(new n(x, p, g)),
                        x
                      );
                    }),
                    (n.prototype.callFulfilled = function (p) {
                      e.resolve(this.promise, p);
                    }),
                    (n.prototype.otherCallFulfilled = function (p) {
                      i(this.promise, this.onFulfilled, p);
                    }),
                    (n.prototype.callRejected = function (p) {
                      e.reject(this.promise, p);
                    }),
                    (n.prototype.otherCallRejected = function (p) {
                      i(this.promise, this.onRejected, p);
                    }),
                    (e.resolve = function (p, g) {
                      var x = d(y, g);
                      if (x.status === 'error') return e.reject(p, x.value);
                      var P = x.value;
                      if (P) h(p, P);
                      else {
                        (p.state = r), (p.outcome = g);
                        for (var a = -1, s = p.queue.length; ++a < s; ) p.queue[a].callFulfilled(g);
                      }
                      return p;
                    }),
                    (e.reject = function (p, g) {
                      (p.state = c), (p.outcome = g);
                      for (var x = -1, P = p.queue.length; ++x < P; ) p.queue[x].callRejected(g);
                      return p;
                    }),
                    (f.resolve = function (p) {
                      return p instanceof this ? p : e.resolve(new this(v), p);
                    }),
                    (f.reject = function (p) {
                      var g = new this(v);
                      return e.reject(g, p);
                    }),
                    (f.all = function (p) {
                      var g = this;
                      if (Object.prototype.toString.call(p) !== '[object Array]')
                        return this.reject(new TypeError('must be an array'));
                      var x = p.length,
                        P = !1;
                      if (!x) return this.resolve([]);
                      for (var a = new Array(x), s = 0, t = -1, l = new this(v); ++t < x; )
                        b(p[t], t);
                      return l;
                      function b(k, D) {
                        g.resolve(k).then(
                          function (_) {
                            (a[D] = _), ++s !== x || P || ((P = !0), e.resolve(l, a));
                          },
                          function (_) {
                            P || ((P = !0), e.reject(l, _));
                          },
                        );
                      }
                    }),
                    (f.race = function (p) {
                      var g = this;
                      if (Object.prototype.toString.call(p) !== '[object Array]')
                        return this.reject(new TypeError('must be an array'));
                      var x = p.length,
                        P = !1;
                      if (!x) return this.resolve([]);
                      for (var a = -1, s = new this(v); ++a < x; )
                        (t = p[a]),
                          g.resolve(t).then(
                            function (l) {
                              P || ((P = !0), e.resolve(s, l));
                            },
                            function (l) {
                              P || ((P = !0), e.reject(s, l));
                            },
                          );
                      var t;
                      return s;
                    });
                },
                { immediate: 36 },
              ],
              38: [
                function (C, F, E) {
                  var w = {};
                  (0, C('./lib/utils/common').assign)(
                    w,
                    C('./lib/deflate'),
                    C('./lib/inflate'),
                    C('./lib/zlib/constants'),
                  ),
                    (F.exports = w);
                },
                {
                  './lib/deflate': 39,
                  './lib/inflate': 40,
                  './lib/utils/common': 41,
                  './lib/zlib/constants': 44,
                },
              ],
              39: [
                function (C, F, E) {
                  var w = C('./zlib/deflate'),
                    v = C('./utils/common'),
                    e = C('./utils/strings'),
                    c = C('./zlib/messages'),
                    r = C('./zlib/zstream'),
                    m = Object.prototype.toString,
                    f = 0,
                    n = -1,
                    i = 0,
                    y = 8;
                  function h(p) {
                    if (!(this instanceof h)) return new h(p);
                    this.options = v.assign(
                      {
                        level: n,
                        method: y,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: i,
                        to: '',
                      },
                      p || {},
                    );
                    var g = this.options;
                    g.raw && 0 < g.windowBits
                      ? (g.windowBits = -g.windowBits)
                      : g.gzip && 0 < g.windowBits && g.windowBits < 16 && (g.windowBits += 16),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new r()),
                      (this.strm.avail_out = 0);
                    var x = w.deflateInit2(
                      this.strm,
                      g.level,
                      g.method,
                      g.windowBits,
                      g.memLevel,
                      g.strategy,
                    );
                    if (x !== f) throw new Error(c[x]);
                    if ((g.header && w.deflateSetHeader(this.strm, g.header), g.dictionary)) {
                      var P;
                      if (
                        ((P =
                          typeof g.dictionary == 'string'
                            ? e.string2buf(g.dictionary)
                            : m.call(g.dictionary) === '[object ArrayBuffer]'
                            ? new Uint8Array(g.dictionary)
                            : g.dictionary),
                        (x = w.deflateSetDictionary(this.strm, P)) !== f)
                      )
                        throw new Error(c[x]);
                      this._dict_set = !0;
                    }
                  }
                  function d(p, g) {
                    var x = new h(g);
                    if ((x.push(p, !0), x.err)) throw x.msg || c[x.err];
                    return x.result;
                  }
                  (h.prototype.push = function (p, g) {
                    var x,
                      P,
                      a = this.strm,
                      s = this.options.chunkSize;
                    if (this.ended) return !1;
                    (P = g === ~~g ? g : g === !0 ? 4 : 0),
                      typeof p == 'string'
                        ? (a.input = e.string2buf(p))
                        : m.call(p) === '[object ArrayBuffer]'
                        ? (a.input = new Uint8Array(p))
                        : (a.input = p),
                      (a.next_in = 0),
                      (a.avail_in = a.input.length);
                    do {
                      if (
                        (a.avail_out === 0 &&
                          ((a.output = new v.Buf8(s)), (a.next_out = 0), (a.avail_out = s)),
                        (x = w.deflate(a, P)) !== 1 && x !== f)
                      )
                        return this.onEnd(x), !(this.ended = !0);
                      (a.avail_out !== 0 && (a.avail_in !== 0 || (P !== 4 && P !== 2))) ||
                        (this.options.to === 'string'
                          ? this.onData(e.buf2binstring(v.shrinkBuf(a.output, a.next_out)))
                          : this.onData(v.shrinkBuf(a.output, a.next_out)));
                    } while ((0 < a.avail_in || a.avail_out === 0) && x !== 1);
                    return P === 4
                      ? ((x = w.deflateEnd(this.strm)), this.onEnd(x), (this.ended = !0), x === f)
                      : P !== 2 || (this.onEnd(f), !(a.avail_out = 0));
                  }),
                    (h.prototype.onData = function (p) {
                      this.chunks.push(p);
                    }),
                    (h.prototype.onEnd = function (p) {
                      p === f &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = v.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = p),
                        (this.msg = this.strm.msg);
                    }),
                    (E.Deflate = h),
                    (E.deflate = d),
                    (E.deflateRaw = function (p, g) {
                      return ((g = g || {}).raw = !0), d(p, g);
                    }),
                    (E.gzip = function (p, g) {
                      return ((g = g || {}).gzip = !0), d(p, g);
                    });
                },
                {
                  './utils/common': 41,
                  './utils/strings': 42,
                  './zlib/deflate': 46,
                  './zlib/messages': 51,
                  './zlib/zstream': 53,
                },
              ],
              40: [
                function (C, F, E) {
                  var w = C('./zlib/inflate'),
                    v = C('./utils/common'),
                    e = C('./utils/strings'),
                    c = C('./zlib/constants'),
                    r = C('./zlib/messages'),
                    m = C('./zlib/zstream'),
                    f = C('./zlib/gzheader'),
                    n = Object.prototype.toString;
                  function i(h) {
                    if (!(this instanceof i)) return new i(h);
                    this.options = v.assign({ chunkSize: 16384, windowBits: 0, to: '' }, h || {});
                    var d = this.options;
                    d.raw &&
                      0 <= d.windowBits &&
                      d.windowBits < 16 &&
                      ((d.windowBits = -d.windowBits), d.windowBits === 0 && (d.windowBits = -15)),
                      !(0 <= d.windowBits && d.windowBits < 16) ||
                        (h && h.windowBits) ||
                        (d.windowBits += 32),
                      15 < d.windowBits &&
                        d.windowBits < 48 &&
                        !(15 & d.windowBits) &&
                        (d.windowBits |= 15),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new m()),
                      (this.strm.avail_out = 0);
                    var p = w.inflateInit2(this.strm, d.windowBits);
                    if (p !== c.Z_OK) throw new Error(r[p]);
                    (this.header = new f()), w.inflateGetHeader(this.strm, this.header);
                  }
                  function y(h, d) {
                    var p = new i(d);
                    if ((p.push(h, !0), p.err)) throw p.msg || r[p.err];
                    return p.result;
                  }
                  (i.prototype.push = function (h, d) {
                    var p,
                      g,
                      x,
                      P,
                      a,
                      s,
                      t = this.strm,
                      l = this.options.chunkSize,
                      b = this.options.dictionary,
                      k = !1;
                    if (this.ended) return !1;
                    (g = d === ~~d ? d : d === !0 ? c.Z_FINISH : c.Z_NO_FLUSH),
                      typeof h == 'string'
                        ? (t.input = e.binstring2buf(h))
                        : n.call(h) === '[object ArrayBuffer]'
                        ? (t.input = new Uint8Array(h))
                        : (t.input = h),
                      (t.next_in = 0),
                      (t.avail_in = t.input.length);
                    do {
                      if (
                        (t.avail_out === 0 &&
                          ((t.output = new v.Buf8(l)), (t.next_out = 0), (t.avail_out = l)),
                        (p = w.inflate(t, c.Z_NO_FLUSH)) === c.Z_NEED_DICT &&
                          b &&
                          ((s =
                            typeof b == 'string'
                              ? e.string2buf(b)
                              : n.call(b) === '[object ArrayBuffer]'
                              ? new Uint8Array(b)
                              : b),
                          (p = w.inflateSetDictionary(this.strm, s))),
                        p === c.Z_BUF_ERROR && k === !0 && ((p = c.Z_OK), (k = !1)),
                        p !== c.Z_STREAM_END && p !== c.Z_OK)
                      )
                        return this.onEnd(p), !(this.ended = !0);
                      t.next_out &&
                        ((t.avail_out !== 0 &&
                          p !== c.Z_STREAM_END &&
                          (t.avail_in !== 0 || (g !== c.Z_FINISH && g !== c.Z_SYNC_FLUSH))) ||
                          (this.options.to === 'string'
                            ? ((x = e.utf8border(t.output, t.next_out)),
                              (P = t.next_out - x),
                              (a = e.buf2string(t.output, x)),
                              (t.next_out = P),
                              (t.avail_out = l - P),
                              P && v.arraySet(t.output, t.output, x, P, 0),
                              this.onData(a))
                            : this.onData(v.shrinkBuf(t.output, t.next_out)))),
                        t.avail_in === 0 && t.avail_out === 0 && (k = !0);
                    } while ((0 < t.avail_in || t.avail_out === 0) && p !== c.Z_STREAM_END);
                    return (
                      p === c.Z_STREAM_END && (g = c.Z_FINISH),
                      g === c.Z_FINISH
                        ? ((p = w.inflateEnd(this.strm)),
                          this.onEnd(p),
                          (this.ended = !0),
                          p === c.Z_OK)
                        : g !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), !(t.avail_out = 0))
                    );
                  }),
                    (i.prototype.onData = function (h) {
                      this.chunks.push(h);
                    }),
                    (i.prototype.onEnd = function (h) {
                      h === c.Z_OK &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = v.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = h),
                        (this.msg = this.strm.msg);
                    }),
                    (E.Inflate = i),
                    (E.inflate = y),
                    (E.inflateRaw = function (h, d) {
                      return ((d = d || {}).raw = !0), y(h, d);
                    }),
                    (E.ungzip = y);
                },
                {
                  './utils/common': 41,
                  './utils/strings': 42,
                  './zlib/constants': 44,
                  './zlib/gzheader': 47,
                  './zlib/inflate': 49,
                  './zlib/messages': 51,
                  './zlib/zstream': 53,
                },
              ],
              41: [
                function (C, F, E) {
                  var w =
                    typeof Uint8Array != 'undefined' &&
                    typeof Uint16Array != 'undefined' &&
                    typeof Int32Array != 'undefined';
                  (E.assign = function (c) {
                    for (var r = Array.prototype.slice.call(arguments, 1); r.length; ) {
                      var m = r.shift();
                      if (m) {
                        if (typeof m != 'object') throw new TypeError(m + 'must be non-object');
                        for (var f in m) m.hasOwnProperty(f) && (c[f] = m[f]);
                      }
                    }
                    return c;
                  }),
                    (E.shrinkBuf = function (c, r) {
                      return c.length === r
                        ? c
                        : c.subarray
                        ? c.subarray(0, r)
                        : ((c.length = r), c);
                    });
                  var v = {
                      arraySet: function (c, r, m, f, n) {
                        if (r.subarray && c.subarray) c.set(r.subarray(m, m + f), n);
                        else for (var i = 0; i < f; i++) c[n + i] = r[m + i];
                      },
                      flattenChunks: function (c) {
                        var r, m, f, n, i, y;
                        for (r = f = 0, m = c.length; r < m; r++) f += c[r].length;
                        for (y = new Uint8Array(f), r = n = 0, m = c.length; r < m; r++)
                          (i = c[r]), y.set(i, n), (n += i.length);
                        return y;
                      },
                    },
                    e = {
                      arraySet: function (c, r, m, f, n) {
                        for (var i = 0; i < f; i++) c[n + i] = r[m + i];
                      },
                      flattenChunks: function (c) {
                        return [].concat.apply([], c);
                      },
                    };
                  (E.setTyped = function (c) {
                    c
                      ? ((E.Buf8 = Uint8Array),
                        (E.Buf16 = Uint16Array),
                        (E.Buf32 = Int32Array),
                        E.assign(E, v))
                      : ((E.Buf8 = Array), (E.Buf16 = Array), (E.Buf32 = Array), E.assign(E, e));
                  }),
                    E.setTyped(w);
                },
                {},
              ],
              42: [
                function (C, F, E) {
                  var w = C('./common'),
                    v = !0,
                    e = !0;
                  try {
                    String.fromCharCode.apply(null, [0]);
                  } catch (f) {
                    v = !1;
                  }
                  try {
                    String.fromCharCode.apply(null, new Uint8Array(1));
                  } catch (f) {
                    e = !1;
                  }
                  for (var c = new w.Buf8(256), r = 0; r < 256; r++)
                    c[r] =
                      252 <= r ? 6 : 248 <= r ? 5 : 240 <= r ? 4 : 224 <= r ? 3 : 192 <= r ? 2 : 1;
                  function m(f, n) {
                    if (n < 65537 && ((f.subarray && e) || (!f.subarray && v)))
                      return String.fromCharCode.apply(null, w.shrinkBuf(f, n));
                    for (var i = '', y = 0; y < n; y++) i += String.fromCharCode(f[y]);
                    return i;
                  }
                  (c[254] = c[254] = 1),
                    (E.string2buf = function (f) {
                      var n,
                        i,
                        y,
                        h,
                        d,
                        p = f.length,
                        g = 0;
                      for (h = 0; h < p; h++)
                        (64512 & (i = f.charCodeAt(h))) == 55296 &&
                          h + 1 < p &&
                          (64512 & (y = f.charCodeAt(h + 1))) == 56320 &&
                          ((i = 65536 + ((i - 55296) << 10) + (y - 56320)), h++),
                          (g += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4);
                      for (n = new w.Buf8(g), h = d = 0; d < g; h++)
                        (64512 & (i = f.charCodeAt(h))) == 55296 &&
                          h + 1 < p &&
                          (64512 & (y = f.charCodeAt(h + 1))) == 56320 &&
                          ((i = 65536 + ((i - 55296) << 10) + (y - 56320)), h++),
                          i < 128
                            ? (n[d++] = i)
                            : (i < 2048
                                ? (n[d++] = 192 | (i >>> 6))
                                : (i < 65536
                                    ? (n[d++] = 224 | (i >>> 12))
                                    : ((n[d++] = 240 | (i >>> 18)),
                                      (n[d++] = 128 | ((i >>> 12) & 63))),
                                  (n[d++] = 128 | ((i >>> 6) & 63))),
                              (n[d++] = 128 | (63 & i)));
                      return n;
                    }),
                    (E.buf2binstring = function (f) {
                      return m(f, f.length);
                    }),
                    (E.binstring2buf = function (f) {
                      for (var n = new w.Buf8(f.length), i = 0, y = n.length; i < y; i++)
                        n[i] = f.charCodeAt(i);
                      return n;
                    }),
                    (E.buf2string = function (f, n) {
                      var i,
                        y,
                        h,
                        d,
                        p = n || f.length,
                        g = new Array(2 * p);
                      for (i = y = 0; i < p; )
                        if ((h = f[i++]) < 128) g[y++] = h;
                        else if (4 < (d = c[h])) (g[y++] = 65533), (i += d - 1);
                        else {
                          for (h &= d === 2 ? 31 : d === 3 ? 15 : 7; 1 < d && i < p; )
                            (h = (h << 6) | (63 & f[i++])), d--;
                          1 < d
                            ? (g[y++] = 65533)
                            : h < 65536
                            ? (g[y++] = h)
                            : ((h -= 65536),
                              (g[y++] = 55296 | ((h >> 10) & 1023)),
                              (g[y++] = 56320 | (1023 & h)));
                        }
                      return m(g, y);
                    }),
                    (E.utf8border = function (f, n) {
                      var i;
                      for (
                        (n = n || f.length) > f.length && (n = f.length), i = n - 1;
                        0 <= i && (192 & f[i]) == 128;

                      )
                        i--;
                      return i < 0 || i === 0 ? n : i + c[f[i]] > n ? i : n;
                    });
                },
                { './common': 41 },
              ],
              43: [
                function (C, F, E) {
                  F.exports = function (w, v, e, c) {
                    for (var r = (65535 & w) | 0, m = ((w >>> 16) & 65535) | 0, f = 0; e !== 0; ) {
                      for (
                        e -= f = 2e3 < e ? 2e3 : e;
                        (m = (m + (r = (r + v[c++]) | 0)) | 0), --f;

                      );
                      (r %= 65521), (m %= 65521);
                    }
                    return r | (m << 16) | 0;
                  };
                },
                {},
              ],
              44: [
                function (C, F, E) {
                  F.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8,
                  };
                },
                {},
              ],
              45: [
                function (C, F, E) {
                  var w = (function () {
                    for (var v, e = [], c = 0; c < 256; c++) {
                      v = c;
                      for (var r = 0; r < 8; r++) v = 1 & v ? 3988292384 ^ (v >>> 1) : v >>> 1;
                      e[c] = v;
                    }
                    return e;
                  })();
                  F.exports = function (v, e, c, r) {
                    var m = w,
                      f = r + c;
                    v ^= -1;
                    for (var n = r; n < f; n++) v = (v >>> 8) ^ m[255 & (v ^ e[n])];
                    return -1 ^ v;
                  };
                },
                {},
              ],
              46: [
                function (C, F, E) {
                  var w,
                    v = C('../utils/common'),
                    e = C('./trees'),
                    c = C('./adler32'),
                    r = C('./crc32'),
                    m = C('./messages'),
                    f = 0,
                    n = 4,
                    i = 0,
                    y = -2,
                    h = -1,
                    d = 4,
                    p = 2,
                    g = 8,
                    x = 9,
                    P = 286,
                    a = 30,
                    s = 19,
                    t = 2 * P + 1,
                    l = 15,
                    b = 3,
                    k = 258,
                    D = k + b + 1,
                    _ = 42,
                    T = 113,
                    o = 1,
                    R = 2,
                    V = 3,
                    L = 4;
                  function q(u, I) {
                    return (u.msg = m[I]), I;
                  }
                  function W(u) {
                    return (u << 1) - (4 < u ? 9 : 0);
                  }
                  function Y(u) {
                    for (var I = u.length; 0 <= --I; ) u[I] = 0;
                  }
                  function z(u) {
                    var I = u.state,
                      M = I.pending;
                    M > u.avail_out && (M = u.avail_out),
                      M !== 0 &&
                        (v.arraySet(u.output, I.pending_buf, I.pending_out, M, u.next_out),
                        (u.next_out += M),
                        (I.pending_out += M),
                        (u.total_out += M),
                        (u.avail_out -= M),
                        (I.pending -= M),
                        I.pending === 0 && (I.pending_out = 0));
                  }
                  function O(u, I) {
                    e._tr_flush_block(
                      u,
                      0 <= u.block_start ? u.block_start : -1,
                      u.strstart - u.block_start,
                      I,
                    ),
                      (u.block_start = u.strstart),
                      z(u.strm);
                  }
                  function J(u, I) {
                    u.pending_buf[u.pending++] = I;
                  }
                  function X(u, I) {
                    (u.pending_buf[u.pending++] = (I >>> 8) & 255),
                      (u.pending_buf[u.pending++] = 255 & I);
                  }
                  function Z(u, I) {
                    var M,
                      A,
                      S = u.max_chain_length,
                      N = u.strstart,
                      j = u.prev_length,
                      U = u.nice_match,
                      B = u.strstart > u.w_size - D ? u.strstart - (u.w_size - D) : 0,
                      H = u.window,
                      G = u.w_mask,
                      $ = u.prev,
                      K = u.strstart + k,
                      re = H[N + j - 1],
                      ee = H[N + j];
                    u.prev_length >= u.good_match && (S >>= 2),
                      U > u.lookahead && (U = u.lookahead);
                    do
                      if (
                        H[(M = I) + j] === ee &&
                        H[M + j - 1] === re &&
                        H[M] === H[N] &&
                        H[++M] === H[N + 1]
                      ) {
                        (N += 2), M++;
                        do;
                        while (
                          H[++N] === H[++M] &&
                          H[++N] === H[++M] &&
                          H[++N] === H[++M] &&
                          H[++N] === H[++M] &&
                          H[++N] === H[++M] &&
                          H[++N] === H[++M] &&
                          H[++N] === H[++M] &&
                          H[++N] === H[++M] &&
                          N < K
                        );
                        if (((A = k - (K - N)), (N = K - k), j < A)) {
                          if (((u.match_start = I), U <= (j = A))) break;
                          (re = H[N + j - 1]), (ee = H[N + j]);
                        }
                      }
                    while ((I = $[I & G]) > B && --S != 0);
                    return j <= u.lookahead ? j : u.lookahead;
                  }
                  function ae(u) {
                    var I,
                      M,
                      A,
                      S,
                      N,
                      j,
                      U,
                      B,
                      H,
                      G,
                      $ = u.w_size;
                    do {
                      if (
                        ((S = u.window_size - u.lookahead - u.strstart), u.strstart >= $ + ($ - D))
                      ) {
                        for (
                          v.arraySet(u.window, u.window, $, $, 0),
                            u.match_start -= $,
                            u.strstart -= $,
                            u.block_start -= $,
                            I = M = u.hash_size;
                          (A = u.head[--I]), (u.head[I] = $ <= A ? A - $ : 0), --M;

                        );
                        for (I = M = $; (A = u.prev[--I]), (u.prev[I] = $ <= A ? A - $ : 0), --M; );
                        S += $;
                      }
                      if (u.strm.avail_in === 0) break;
                      if (
                        ((j = u.strm),
                        (U = u.window),
                        (B = u.strstart + u.lookahead),
                        (H = S),
                        (G = void 0),
                        (G = j.avail_in),
                        H < G && (G = H),
                        (M =
                          G === 0
                            ? 0
                            : ((j.avail_in -= G),
                              v.arraySet(U, j.input, j.next_in, G, B),
                              j.state.wrap === 1
                                ? (j.adler = c(j.adler, U, G, B))
                                : j.state.wrap === 2 && (j.adler = r(j.adler, U, G, B)),
                              (j.next_in += G),
                              (j.total_in += G),
                              G)),
                        (u.lookahead += M),
                        u.lookahead + u.insert >= b)
                      )
                        for (
                          N = u.strstart - u.insert,
                            u.ins_h = u.window[N],
                            u.ins_h = ((u.ins_h << u.hash_shift) ^ u.window[N + 1]) & u.hash_mask;
                          u.insert &&
                          ((u.ins_h =
                            ((u.ins_h << u.hash_shift) ^ u.window[N + b - 1]) & u.hash_mask),
                          (u.prev[N & u.w_mask] = u.head[u.ins_h]),
                          (u.head[u.ins_h] = N),
                          N++,
                          u.insert--,
                          !(u.lookahead + u.insert < b));

                        );
                    } while (u.lookahead < D && u.strm.avail_in !== 0);
                  }
                  function le(u, I) {
                    for (var M, A; ; ) {
                      if (u.lookahead < D) {
                        if ((ae(u), u.lookahead < D && I === f)) return o;
                        if (u.lookahead === 0) break;
                      }
                      if (
                        ((M = 0),
                        u.lookahead >= b &&
                          ((u.ins_h =
                            ((u.ins_h << u.hash_shift) ^ u.window[u.strstart + b - 1]) &
                            u.hash_mask),
                          (M = u.prev[u.strstart & u.w_mask] = u.head[u.ins_h]),
                          (u.head[u.ins_h] = u.strstart)),
                        M !== 0 && u.strstart - M <= u.w_size - D && (u.match_length = Z(u, M)),
                        u.match_length >= b)
                      )
                        if (
                          ((A = e._tr_tally(u, u.strstart - u.match_start, u.match_length - b)),
                          (u.lookahead -= u.match_length),
                          u.match_length <= u.max_lazy_match && u.lookahead >= b)
                        ) {
                          for (
                            u.match_length--;
                            u.strstart++,
                              (u.ins_h =
                                ((u.ins_h << u.hash_shift) ^ u.window[u.strstart + b - 1]) &
                                u.hash_mask),
                              (M = u.prev[u.strstart & u.w_mask] = u.head[u.ins_h]),
                              (u.head[u.ins_h] = u.strstart),
                              --u.match_length != 0;

                          );
                          u.strstart++;
                        } else
                          (u.strstart += u.match_length),
                            (u.match_length = 0),
                            (u.ins_h = u.window[u.strstart]),
                            (u.ins_h =
                              ((u.ins_h << u.hash_shift) ^ u.window[u.strstart + 1]) & u.hash_mask);
                      else
                        (A = e._tr_tally(u, 0, u.window[u.strstart])), u.lookahead--, u.strstart++;
                      if (A && (O(u, !1), u.strm.avail_out === 0)) return o;
                    }
                    return (
                      (u.insert = u.strstart < b - 1 ? u.strstart : b - 1),
                      I === n
                        ? (O(u, !0), u.strm.avail_out === 0 ? V : L)
                        : u.last_lit && (O(u, !1), u.strm.avail_out === 0)
                        ? o
                        : R
                    );
                  }
                  function Q(u, I) {
                    for (var M, A, S; ; ) {
                      if (u.lookahead < D) {
                        if ((ae(u), u.lookahead < D && I === f)) return o;
                        if (u.lookahead === 0) break;
                      }
                      if (
                        ((M = 0),
                        u.lookahead >= b &&
                          ((u.ins_h =
                            ((u.ins_h << u.hash_shift) ^ u.window[u.strstart + b - 1]) &
                            u.hash_mask),
                          (M = u.prev[u.strstart & u.w_mask] = u.head[u.ins_h]),
                          (u.head[u.ins_h] = u.strstart)),
                        (u.prev_length = u.match_length),
                        (u.prev_match = u.match_start),
                        (u.match_length = b - 1),
                        M !== 0 &&
                          u.prev_length < u.max_lazy_match &&
                          u.strstart - M <= u.w_size - D &&
                          ((u.match_length = Z(u, M)),
                          u.match_length <= 5 &&
                            (u.strategy === 1 ||
                              (u.match_length === b && 4096 < u.strstart - u.match_start)) &&
                            (u.match_length = b - 1)),
                        u.prev_length >= b && u.match_length <= u.prev_length)
                      ) {
                        for (
                          S = u.strstart + u.lookahead - b,
                            A = e._tr_tally(u, u.strstart - 1 - u.prev_match, u.prev_length - b),
                            u.lookahead -= u.prev_length - 1,
                            u.prev_length -= 2;
                          ++u.strstart <= S &&
                            ((u.ins_h =
                              ((u.ins_h << u.hash_shift) ^ u.window[u.strstart + b - 1]) &
                              u.hash_mask),
                            (M = u.prev[u.strstart & u.w_mask] = u.head[u.ins_h]),
                            (u.head[u.ins_h] = u.strstart)),
                            --u.prev_length != 0;

                        );
                        if (
                          ((u.match_available = 0),
                          (u.match_length = b - 1),
                          u.strstart++,
                          A && (O(u, !1), u.strm.avail_out === 0))
                        )
                          return o;
                      } else if (u.match_available) {
                        if (
                          ((A = e._tr_tally(u, 0, u.window[u.strstart - 1])) && O(u, !1),
                          u.strstart++,
                          u.lookahead--,
                          u.strm.avail_out === 0)
                        )
                          return o;
                      } else (u.match_available = 1), u.strstart++, u.lookahead--;
                    }
                    return (
                      u.match_available &&
                        ((A = e._tr_tally(u, 0, u.window[u.strstart - 1])),
                        (u.match_available = 0)),
                      (u.insert = u.strstart < b - 1 ? u.strstart : b - 1),
                      I === n
                        ? (O(u, !0), u.strm.avail_out === 0 ? V : L)
                        : u.last_lit && (O(u, !1), u.strm.avail_out === 0)
                        ? o
                        : R
                    );
                  }
                  function te(u, I, M, A, S) {
                    (this.good_length = u),
                      (this.max_lazy = I),
                      (this.nice_length = M),
                      (this.max_chain = A),
                      (this.func = S);
                  }
                  function ie() {
                    (this.strm = null),
                      (this.status = 0),
                      (this.pending_buf = null),
                      (this.pending_buf_size = 0),
                      (this.pending_out = 0),
                      (this.pending = 0),
                      (this.wrap = 0),
                      (this.gzhead = null),
                      (this.gzindex = 0),
                      (this.method = g),
                      (this.last_flush = -1),
                      (this.w_size = 0),
                      (this.w_bits = 0),
                      (this.w_mask = 0),
                      (this.window = null),
                      (this.window_size = 0),
                      (this.prev = null),
                      (this.head = null),
                      (this.ins_h = 0),
                      (this.hash_size = 0),
                      (this.hash_bits = 0),
                      (this.hash_mask = 0),
                      (this.hash_shift = 0),
                      (this.block_start = 0),
                      (this.match_length = 0),
                      (this.prev_match = 0),
                      (this.match_available = 0),
                      (this.strstart = 0),
                      (this.match_start = 0),
                      (this.lookahead = 0),
                      (this.prev_length = 0),
                      (this.max_chain_length = 0),
                      (this.max_lazy_match = 0),
                      (this.level = 0),
                      (this.strategy = 0),
                      (this.good_match = 0),
                      (this.nice_match = 0),
                      (this.dyn_ltree = new v.Buf16(2 * t)),
                      (this.dyn_dtree = new v.Buf16(2 * (2 * a + 1))),
                      (this.bl_tree = new v.Buf16(2 * (2 * s + 1))),
                      Y(this.dyn_ltree),
                      Y(this.dyn_dtree),
                      Y(this.bl_tree),
                      (this.l_desc = null),
                      (this.d_desc = null),
                      (this.bl_desc = null),
                      (this.bl_count = new v.Buf16(l + 1)),
                      (this.heap = new v.Buf16(2 * P + 1)),
                      Y(this.heap),
                      (this.heap_len = 0),
                      (this.heap_max = 0),
                      (this.depth = new v.Buf16(2 * P + 1)),
                      Y(this.depth),
                      (this.l_buf = 0),
                      (this.lit_bufsize = 0),
                      (this.last_lit = 0),
                      (this.d_buf = 0),
                      (this.opt_len = 0),
                      (this.static_len = 0),
                      (this.matches = 0),
                      (this.insert = 0),
                      (this.bi_buf = 0),
                      (this.bi_valid = 0);
                  }
                  function ne(u) {
                    var I;
                    return u && u.state
                      ? ((u.total_in = u.total_out = 0),
                        (u.data_type = p),
                        ((I = u.state).pending = 0),
                        (I.pending_out = 0),
                        I.wrap < 0 && (I.wrap = -I.wrap),
                        (I.status = I.wrap ? _ : T),
                        (u.adler = I.wrap === 2 ? 0 : 1),
                        (I.last_flush = f),
                        e._tr_init(I),
                        i)
                      : q(u, y);
                  }
                  function de(u) {
                    var I = ne(u);
                    return (
                      I === i &&
                        (function (M) {
                          (M.window_size = 2 * M.w_size),
                            Y(M.head),
                            (M.max_lazy_match = w[M.level].max_lazy),
                            (M.good_match = w[M.level].good_length),
                            (M.nice_match = w[M.level].nice_length),
                            (M.max_chain_length = w[M.level].max_chain),
                            (M.strstart = 0),
                            (M.block_start = 0),
                            (M.lookahead = 0),
                            (M.insert = 0),
                            (M.match_length = M.prev_length = b - 1),
                            (M.match_available = 0),
                            (M.ins_h = 0);
                        })(u.state),
                      I
                    );
                  }
                  function he(u, I, M, A, S, N) {
                    if (!u) return y;
                    var j = 1;
                    if (
                      (I === h && (I = 6),
                      A < 0 ? ((j = 0), (A = -A)) : 15 < A && ((j = 2), (A -= 16)),
                      S < 1 ||
                        x < S ||
                        M !== g ||
                        A < 8 ||
                        15 < A ||
                        I < 0 ||
                        9 < I ||
                        N < 0 ||
                        d < N)
                    )
                      return q(u, y);
                    A === 8 && (A = 9);
                    var U = new ie();
                    return (
                      ((u.state = U).strm = u),
                      (U.wrap = j),
                      (U.gzhead = null),
                      (U.w_bits = A),
                      (U.w_size = 1 << U.w_bits),
                      (U.w_mask = U.w_size - 1),
                      (U.hash_bits = S + 7),
                      (U.hash_size = 1 << U.hash_bits),
                      (U.hash_mask = U.hash_size - 1),
                      (U.hash_shift = ~~((U.hash_bits + b - 1) / b)),
                      (U.window = new v.Buf8(2 * U.w_size)),
                      (U.head = new v.Buf16(U.hash_size)),
                      (U.prev = new v.Buf16(U.w_size)),
                      (U.lit_bufsize = 1 << (S + 6)),
                      (U.pending_buf_size = 4 * U.lit_bufsize),
                      (U.pending_buf = new v.Buf8(U.pending_buf_size)),
                      (U.d_buf = 1 * U.lit_bufsize),
                      (U.l_buf = 3 * U.lit_bufsize),
                      (U.level = I),
                      (U.strategy = N),
                      (U.method = M),
                      de(u)
                    );
                  }
                  (w = [
                    new te(0, 0, 0, 0, function (u, I) {
                      var M = 65535;
                      for (M > u.pending_buf_size - 5 && (M = u.pending_buf_size - 5); ; ) {
                        if (u.lookahead <= 1) {
                          if ((ae(u), u.lookahead === 0 && I === f)) return o;
                          if (u.lookahead === 0) break;
                        }
                        (u.strstart += u.lookahead), (u.lookahead = 0);
                        var A = u.block_start + M;
                        if (
                          ((u.strstart === 0 || u.strstart >= A) &&
                            ((u.lookahead = u.strstart - A),
                            (u.strstart = A),
                            O(u, !1),
                            u.strm.avail_out === 0)) ||
                          (u.strstart - u.block_start >= u.w_size - D &&
                            (O(u, !1), u.strm.avail_out === 0))
                        )
                          return o;
                      }
                      return (
                        (u.insert = 0),
                        I === n
                          ? (O(u, !0), u.strm.avail_out === 0 ? V : L)
                          : (u.strstart > u.block_start && (O(u, !1), u.strm.avail_out), o)
                      );
                    }),
                    new te(4, 4, 8, 4, le),
                    new te(4, 5, 16, 8, le),
                    new te(4, 6, 32, 32, le),
                    new te(4, 4, 16, 16, Q),
                    new te(8, 16, 32, 32, Q),
                    new te(8, 16, 128, 128, Q),
                    new te(8, 32, 128, 256, Q),
                    new te(32, 128, 258, 1024, Q),
                    new te(32, 258, 258, 4096, Q),
                  ]),
                    (E.deflateInit = function (u, I) {
                      return he(u, I, g, 15, 8, 0);
                    }),
                    (E.deflateInit2 = he),
                    (E.deflateReset = de),
                    (E.deflateResetKeep = ne),
                    (E.deflateSetHeader = function (u, I) {
                      return u && u.state
                        ? u.state.wrap !== 2
                          ? y
                          : ((u.state.gzhead = I), i)
                        : y;
                    }),
                    (E.deflate = function (u, I) {
                      var M, A, S, N;
                      if (!u || !u.state || 5 < I || I < 0) return u ? q(u, y) : y;
                      if (
                        ((A = u.state),
                        !u.output ||
                          (!u.input && u.avail_in !== 0) ||
                          (A.status === 666 && I !== n))
                      )
                        return q(u, u.avail_out === 0 ? -5 : y);
                      if (((A.strm = u), (M = A.last_flush), (A.last_flush = I), A.status === _))
                        if (A.wrap === 2)
                          (u.adler = 0),
                            J(A, 31),
                            J(A, 139),
                            J(A, 8),
                            A.gzhead
                              ? (J(
                                  A,
                                  (A.gzhead.text ? 1 : 0) +
                                    (A.gzhead.hcrc ? 2 : 0) +
                                    (A.gzhead.extra ? 4 : 0) +
                                    (A.gzhead.name ? 8 : 0) +
                                    (A.gzhead.comment ? 16 : 0),
                                ),
                                J(A, 255 & A.gzhead.time),
                                J(A, (A.gzhead.time >> 8) & 255),
                                J(A, (A.gzhead.time >> 16) & 255),
                                J(A, (A.gzhead.time >> 24) & 255),
                                J(A, A.level === 9 ? 2 : 2 <= A.strategy || A.level < 2 ? 4 : 0),
                                J(A, 255 & A.gzhead.os),
                                A.gzhead.extra &&
                                  A.gzhead.extra.length &&
                                  (J(A, 255 & A.gzhead.extra.length),
                                  J(A, (A.gzhead.extra.length >> 8) & 255)),
                                A.gzhead.hcrc &&
                                  (u.adler = r(u.adler, A.pending_buf, A.pending, 0)),
                                (A.gzindex = 0),
                                (A.status = 69))
                              : (J(A, 0),
                                J(A, 0),
                                J(A, 0),
                                J(A, 0),
                                J(A, 0),
                                J(A, A.level === 9 ? 2 : 2 <= A.strategy || A.level < 2 ? 4 : 0),
                                J(A, 3),
                                (A.status = T));
                        else {
                          var j = (g + ((A.w_bits - 8) << 4)) << 8;
                          (j |=
                            (2 <= A.strategy || A.level < 2
                              ? 0
                              : A.level < 6
                              ? 1
                              : A.level === 6
                              ? 2
                              : 3) << 6),
                            A.strstart !== 0 && (j |= 32),
                            (j += 31 - (j % 31)),
                            (A.status = T),
                            X(A, j),
                            A.strstart !== 0 && (X(A, u.adler >>> 16), X(A, 65535 & u.adler)),
                            (u.adler = 1);
                        }
                      if (A.status === 69)
                        if (A.gzhead.extra) {
                          for (
                            S = A.pending;
                            A.gzindex < (65535 & A.gzhead.extra.length) &&
                            (A.pending !== A.pending_buf_size ||
                              (A.gzhead.hcrc &&
                                A.pending > S &&
                                (u.adler = r(u.adler, A.pending_buf, A.pending - S, S)),
                              z(u),
                              (S = A.pending),
                              A.pending !== A.pending_buf_size));

                          )
                            J(A, 255 & A.gzhead.extra[A.gzindex]), A.gzindex++;
                          A.gzhead.hcrc &&
                            A.pending > S &&
                            (u.adler = r(u.adler, A.pending_buf, A.pending - S, S)),
                            A.gzindex === A.gzhead.extra.length &&
                              ((A.gzindex = 0), (A.status = 73));
                        } else A.status = 73;
                      if (A.status === 73)
                        if (A.gzhead.name) {
                          S = A.pending;
                          do {
                            if (
                              A.pending === A.pending_buf_size &&
                              (A.gzhead.hcrc &&
                                A.pending > S &&
                                (u.adler = r(u.adler, A.pending_buf, A.pending - S, S)),
                              z(u),
                              (S = A.pending),
                              A.pending === A.pending_buf_size)
                            ) {
                              N = 1;
                              break;
                            }
                            (N =
                              A.gzindex < A.gzhead.name.length
                                ? 255 & A.gzhead.name.charCodeAt(A.gzindex++)
                                : 0),
                              J(A, N);
                          } while (N !== 0);
                          A.gzhead.hcrc &&
                            A.pending > S &&
                            (u.adler = r(u.adler, A.pending_buf, A.pending - S, S)),
                            N === 0 && ((A.gzindex = 0), (A.status = 91));
                        } else A.status = 91;
                      if (A.status === 91)
                        if (A.gzhead.comment) {
                          S = A.pending;
                          do {
                            if (
                              A.pending === A.pending_buf_size &&
                              (A.gzhead.hcrc &&
                                A.pending > S &&
                                (u.adler = r(u.adler, A.pending_buf, A.pending - S, S)),
                              z(u),
                              (S = A.pending),
                              A.pending === A.pending_buf_size)
                            ) {
                              N = 1;
                              break;
                            }
                            (N =
                              A.gzindex < A.gzhead.comment.length
                                ? 255 & A.gzhead.comment.charCodeAt(A.gzindex++)
                                : 0),
                              J(A, N);
                          } while (N !== 0);
                          A.gzhead.hcrc &&
                            A.pending > S &&
                            (u.adler = r(u.adler, A.pending_buf, A.pending - S, S)),
                            N === 0 && (A.status = 103);
                        } else A.status = 103;
                      if (
                        (A.status === 103 &&
                          (A.gzhead.hcrc
                            ? (A.pending + 2 > A.pending_buf_size && z(u),
                              A.pending + 2 <= A.pending_buf_size &&
                                (J(A, 255 & u.adler),
                                J(A, (u.adler >> 8) & 255),
                                (u.adler = 0),
                                (A.status = T)))
                            : (A.status = T)),
                        A.pending !== 0)
                      ) {
                        if ((z(u), u.avail_out === 0)) return (A.last_flush = -1), i;
                      } else if (u.avail_in === 0 && W(I) <= W(M) && I !== n) return q(u, -5);
                      if (A.status === 666 && u.avail_in !== 0) return q(u, -5);
                      if (u.avail_in !== 0 || A.lookahead !== 0 || (I !== f && A.status !== 666)) {
                        var U =
                          A.strategy === 2
                            ? (function (B, H) {
                                for (var G; ; ) {
                                  if (B.lookahead === 0 && (ae(B), B.lookahead === 0)) {
                                    if (H === f) return o;
                                    break;
                                  }
                                  if (
                                    ((B.match_length = 0),
                                    (G = e._tr_tally(B, 0, B.window[B.strstart])),
                                    B.lookahead--,
                                    B.strstart++,
                                    G && (O(B, !1), B.strm.avail_out === 0))
                                  )
                                    return o;
                                }
                                return (
                                  (B.insert = 0),
                                  H === n
                                    ? (O(B, !0), B.strm.avail_out === 0 ? V : L)
                                    : B.last_lit && (O(B, !1), B.strm.avail_out === 0)
                                    ? o
                                    : R
                                );
                              })(A, I)
                            : A.strategy === 3
                            ? (function (B, H) {
                                for (var G, $, K, re, ee = B.window; ; ) {
                                  if (B.lookahead <= k) {
                                    if ((ae(B), B.lookahead <= k && H === f)) return o;
                                    if (B.lookahead === 0) break;
                                  }
                                  if (
                                    ((B.match_length = 0),
                                    B.lookahead >= b &&
                                      0 < B.strstart &&
                                      ($ = ee[(K = B.strstart - 1)]) === ee[++K] &&
                                      $ === ee[++K] &&
                                      $ === ee[++K])
                                  ) {
                                    re = B.strstart + k;
                                    do;
                                    while (
                                      $ === ee[++K] &&
                                      $ === ee[++K] &&
                                      $ === ee[++K] &&
                                      $ === ee[++K] &&
                                      $ === ee[++K] &&
                                      $ === ee[++K] &&
                                      $ === ee[++K] &&
                                      $ === ee[++K] &&
                                      K < re
                                    );
                                    (B.match_length = k - (re - K)),
                                      B.match_length > B.lookahead &&
                                        (B.match_length = B.lookahead);
                                  }
                                  if (
                                    (B.match_length >= b
                                      ? ((G = e._tr_tally(B, 1, B.match_length - b)),
                                        (B.lookahead -= B.match_length),
                                        (B.strstart += B.match_length),
                                        (B.match_length = 0))
                                      : ((G = e._tr_tally(B, 0, B.window[B.strstart])),
                                        B.lookahead--,
                                        B.strstart++),
                                    G && (O(B, !1), B.strm.avail_out === 0))
                                  )
                                    return o;
                                }
                                return (
                                  (B.insert = 0),
                                  H === n
                                    ? (O(B, !0), B.strm.avail_out === 0 ? V : L)
                                    : B.last_lit && (O(B, !1), B.strm.avail_out === 0)
                                    ? o
                                    : R
                                );
                              })(A, I)
                            : w[A.level].func(A, I);
                        if (((U !== V && U !== L) || (A.status = 666), U === o || U === V))
                          return u.avail_out === 0 && (A.last_flush = -1), i;
                        if (
                          U === R &&
                          (I === 1
                            ? e._tr_align(A)
                            : I !== 5 &&
                              (e._tr_stored_block(A, 0, 0, !1),
                              I === 3 &&
                                (Y(A.head),
                                A.lookahead === 0 &&
                                  ((A.strstart = 0), (A.block_start = 0), (A.insert = 0)))),
                          z(u),
                          u.avail_out === 0)
                        )
                          return (A.last_flush = -1), i;
                      }
                      return I !== n
                        ? i
                        : A.wrap <= 0
                        ? 1
                        : (A.wrap === 2
                            ? (J(A, 255 & u.adler),
                              J(A, (u.adler >> 8) & 255),
                              J(A, (u.adler >> 16) & 255),
                              J(A, (u.adler >> 24) & 255),
                              J(A, 255 & u.total_in),
                              J(A, (u.total_in >> 8) & 255),
                              J(A, (u.total_in >> 16) & 255),
                              J(A, (u.total_in >> 24) & 255))
                            : (X(A, u.adler >>> 16), X(A, 65535 & u.adler)),
                          z(u),
                          0 < A.wrap && (A.wrap = -A.wrap),
                          A.pending !== 0 ? i : 1);
                    }),
                    (E.deflateEnd = function (u) {
                      var I;
                      return u && u.state
                        ? (I = u.state.status) !== _ &&
                          I !== 69 &&
                          I !== 73 &&
                          I !== 91 &&
                          I !== 103 &&
                          I !== T &&
                          I !== 666
                          ? q(u, y)
                          : ((u.state = null), I === T ? q(u, -3) : i)
                        : y;
                    }),
                    (E.deflateSetDictionary = function (u, I) {
                      var M,
                        A,
                        S,
                        N,
                        j,
                        U,
                        B,
                        H,
                        G = I.length;
                      if (
                        !u ||
                        !u.state ||
                        (N = (M = u.state).wrap) === 2 ||
                        (N === 1 && M.status !== _) ||
                        M.lookahead
                      )
                        return y;
                      for (
                        N === 1 && (u.adler = c(u.adler, I, G, 0)),
                          M.wrap = 0,
                          G >= M.w_size &&
                            (N === 0 &&
                              (Y(M.head), (M.strstart = 0), (M.block_start = 0), (M.insert = 0)),
                            (H = new v.Buf8(M.w_size)),
                            v.arraySet(H, I, G - M.w_size, M.w_size, 0),
                            (I = H),
                            (G = M.w_size)),
                          j = u.avail_in,
                          U = u.next_in,
                          B = u.input,
                          u.avail_in = G,
                          u.next_in = 0,
                          u.input = I,
                          ae(M);
                        M.lookahead >= b;

                      ) {
                        for (
                          A = M.strstart, S = M.lookahead - (b - 1);
                          (M.ins_h =
                            ((M.ins_h << M.hash_shift) ^ M.window[A + b - 1]) & M.hash_mask),
                            (M.prev[A & M.w_mask] = M.head[M.ins_h]),
                            (M.head[M.ins_h] = A),
                            A++,
                            --S;

                        );
                        (M.strstart = A), (M.lookahead = b - 1), ae(M);
                      }
                      return (
                        (M.strstart += M.lookahead),
                        (M.block_start = M.strstart),
                        (M.insert = M.lookahead),
                        (M.lookahead = 0),
                        (M.match_length = M.prev_length = b - 1),
                        (M.match_available = 0),
                        (u.next_in = U),
                        (u.input = B),
                        (u.avail_in = j),
                        (M.wrap = N),
                        i
                      );
                    }),
                    (E.deflateInfo = 'pako deflate (from Nodeca project)');
                },
                {
                  '../utils/common': 41,
                  './adler32': 43,
                  './crc32': 45,
                  './messages': 51,
                  './trees': 52,
                },
              ],
              47: [
                function (C, F, E) {
                  F.exports = function () {
                    (this.text = 0),
                      (this.time = 0),
                      (this.xflags = 0),
                      (this.os = 0),
                      (this.extra = null),
                      (this.extra_len = 0),
                      (this.name = ''),
                      (this.comment = ''),
                      (this.hcrc = 0),
                      (this.done = !1);
                  };
                },
                {},
              ],
              48: [
                function (C, F, E) {
                  F.exports = function (w, v) {
                    var e, c, r, m, f, n, i, y, h, d, p, g, x, P, a, s, t, l, b, k, D, _, T, o, R;
                    (e = w.state),
                      (c = w.next_in),
                      (o = w.input),
                      (r = c + (w.avail_in - 5)),
                      (m = w.next_out),
                      (R = w.output),
                      (f = m - (v - w.avail_out)),
                      (n = m + (w.avail_out - 257)),
                      (i = e.dmax),
                      (y = e.wsize),
                      (h = e.whave),
                      (d = e.wnext),
                      (p = e.window),
                      (g = e.hold),
                      (x = e.bits),
                      (P = e.lencode),
                      (a = e.distcode),
                      (s = (1 << e.lenbits) - 1),
                      (t = (1 << e.distbits) - 1);
                    e: do {
                      x < 15 && ((g += o[c++] << x), (x += 8), (g += o[c++] << x), (x += 8)),
                        (l = P[g & s]);
                      t: for (;;) {
                        if (((g >>>= b = l >>> 24), (x -= b), (b = (l >>> 16) & 255) === 0))
                          R[m++] = 65535 & l;
                        else {
                          if (!(16 & b)) {
                            if (!(64 & b)) {
                              l = P[(65535 & l) + (g & ((1 << b) - 1))];
                              continue t;
                            }
                            if (32 & b) {
                              e.mode = 12;
                              break e;
                            }
                            (w.msg = 'invalid literal/length code'), (e.mode = 30);
                            break e;
                          }
                          (k = 65535 & l),
                            (b &= 15) &&
                              (x < b && ((g += o[c++] << x), (x += 8)),
                              (k += g & ((1 << b) - 1)),
                              (g >>>= b),
                              (x -= b)),
                            x < 15 && ((g += o[c++] << x), (x += 8), (g += o[c++] << x), (x += 8)),
                            (l = a[g & t]);
                          r: for (;;) {
                            if (((g >>>= b = l >>> 24), (x -= b), !(16 & (b = (l >>> 16) & 255)))) {
                              if (!(64 & b)) {
                                l = a[(65535 & l) + (g & ((1 << b) - 1))];
                                continue r;
                              }
                              (w.msg = 'invalid distance code'), (e.mode = 30);
                              break e;
                            }
                            if (
                              ((D = 65535 & l),
                              x < (b &= 15) &&
                                ((g += o[c++] << x),
                                (x += 8) < b && ((g += o[c++] << x), (x += 8))),
                              i < (D += g & ((1 << b) - 1)))
                            ) {
                              (w.msg = 'invalid distance too far back'), (e.mode = 30);
                              break e;
                            }
                            if (((g >>>= b), (x -= b), (b = m - f) < D)) {
                              if (h < (b = D - b) && e.sane) {
                                (w.msg = 'invalid distance too far back'), (e.mode = 30);
                                break e;
                              }
                              if (((T = p), (_ = 0) === d)) {
                                if (((_ += y - b), b < k)) {
                                  for (k -= b; (R[m++] = p[_++]), --b; );
                                  (_ = m - D), (T = R);
                                }
                              } else if (d < b) {
                                if (((_ += y + d - b), (b -= d) < k)) {
                                  for (k -= b; (R[m++] = p[_++]), --b; );
                                  if (((_ = 0), d < k)) {
                                    for (k -= b = d; (R[m++] = p[_++]), --b; );
                                    (_ = m - D), (T = R);
                                  }
                                }
                              } else if (((_ += d - b), b < k)) {
                                for (k -= b; (R[m++] = p[_++]), --b; );
                                (_ = m - D), (T = R);
                              }
                              for (; 2 < k; )
                                (R[m++] = T[_++]), (R[m++] = T[_++]), (R[m++] = T[_++]), (k -= 3);
                              k && ((R[m++] = T[_++]), 1 < k && (R[m++] = T[_++]));
                            } else {
                              for (
                                _ = m - D;
                                (R[m++] = R[_++]),
                                  (R[m++] = R[_++]),
                                  (R[m++] = R[_++]),
                                  2 < (k -= 3);

                              );
                              k && ((R[m++] = R[_++]), 1 < k && (R[m++] = R[_++]));
                            }
                            break;
                          }
                        }
                        break;
                      }
                    } while (c < r && m < n);
                    (c -= k = x >> 3),
                      (g &= (1 << (x -= k << 3)) - 1),
                      (w.next_in = c),
                      (w.next_out = m),
                      (w.avail_in = c < r ? r - c + 5 : 5 - (c - r)),
                      (w.avail_out = m < n ? n - m + 257 : 257 - (m - n)),
                      (e.hold = g),
                      (e.bits = x);
                  };
                },
                {},
              ],
              49: [
                function (C, F, E) {
                  var w = C('../utils/common'),
                    v = C('./adler32'),
                    e = C('./crc32'),
                    c = C('./inffast'),
                    r = C('./inftrees'),
                    m = 1,
                    f = 2,
                    n = 0,
                    i = -2,
                    y = 1,
                    h = 852,
                    d = 592;
                  function p(_) {
                    return (
                      ((_ >>> 24) & 255) +
                      ((_ >>> 8) & 65280) +
                      ((65280 & _) << 8) +
                      ((255 & _) << 24)
                    );
                  }
                  function g() {
                    (this.mode = 0),
                      (this.last = !1),
                      (this.wrap = 0),
                      (this.havedict = !1),
                      (this.flags = 0),
                      (this.dmax = 0),
                      (this.check = 0),
                      (this.total = 0),
                      (this.head = null),
                      (this.wbits = 0),
                      (this.wsize = 0),
                      (this.whave = 0),
                      (this.wnext = 0),
                      (this.window = null),
                      (this.hold = 0),
                      (this.bits = 0),
                      (this.length = 0),
                      (this.offset = 0),
                      (this.extra = 0),
                      (this.lencode = null),
                      (this.distcode = null),
                      (this.lenbits = 0),
                      (this.distbits = 0),
                      (this.ncode = 0),
                      (this.nlen = 0),
                      (this.ndist = 0),
                      (this.have = 0),
                      (this.next = null),
                      (this.lens = new w.Buf16(320)),
                      (this.work = new w.Buf16(288)),
                      (this.lendyn = null),
                      (this.distdyn = null),
                      (this.sane = 0),
                      (this.back = 0),
                      (this.was = 0);
                  }
                  function x(_) {
                    var T;
                    return _ && _.state
                      ? ((T = _.state),
                        (_.total_in = _.total_out = T.total = 0),
                        (_.msg = ''),
                        T.wrap && (_.adler = 1 & T.wrap),
                        (T.mode = y),
                        (T.last = 0),
                        (T.havedict = 0),
                        (T.dmax = 32768),
                        (T.head = null),
                        (T.hold = 0),
                        (T.bits = 0),
                        (T.lencode = T.lendyn = new w.Buf32(h)),
                        (T.distcode = T.distdyn = new w.Buf32(d)),
                        (T.sane = 1),
                        (T.back = -1),
                        n)
                      : i;
                  }
                  function P(_) {
                    var T;
                    return _ && _.state
                      ? (((T = _.state).wsize = 0), (T.whave = 0), (T.wnext = 0), x(_))
                      : i;
                  }
                  function a(_, T) {
                    var o, R;
                    return _ && _.state
                      ? ((R = _.state),
                        T < 0 ? ((o = 0), (T = -T)) : ((o = 1 + (T >> 4)), T < 48 && (T &= 15)),
                        T && (T < 8 || 15 < T)
                          ? i
                          : (R.window !== null && R.wbits !== T && (R.window = null),
                            (R.wrap = o),
                            (R.wbits = T),
                            P(_)))
                      : i;
                  }
                  function s(_, T) {
                    var o, R;
                    return _
                      ? ((R = new g()),
                        ((_.state = R).window = null),
                        (o = a(_, T)) !== n && (_.state = null),
                        o)
                      : i;
                  }
                  var t,
                    l,
                    b = !0;
                  function k(_) {
                    if (b) {
                      var T;
                      for (t = new w.Buf32(512), l = new w.Buf32(32), T = 0; T < 144; )
                        _.lens[T++] = 8;
                      for (; T < 256; ) _.lens[T++] = 9;
                      for (; T < 280; ) _.lens[T++] = 7;
                      for (; T < 288; ) _.lens[T++] = 8;
                      for (r(m, _.lens, 0, 288, t, 0, _.work, { bits: 9 }), T = 0; T < 32; )
                        _.lens[T++] = 5;
                      r(f, _.lens, 0, 32, l, 0, _.work, { bits: 5 }), (b = !1);
                    }
                    (_.lencode = t), (_.lenbits = 9), (_.distcode = l), (_.distbits = 5);
                  }
                  function D(_, T, o, R) {
                    var V,
                      L = _.state;
                    return (
                      L.window === null &&
                        ((L.wsize = 1 << L.wbits),
                        (L.wnext = 0),
                        (L.whave = 0),
                        (L.window = new w.Buf8(L.wsize))),
                      R >= L.wsize
                        ? (w.arraySet(L.window, T, o - L.wsize, L.wsize, 0),
                          (L.wnext = 0),
                          (L.whave = L.wsize))
                        : (R < (V = L.wsize - L.wnext) && (V = R),
                          w.arraySet(L.window, T, o - R, V, L.wnext),
                          (R -= V)
                            ? (w.arraySet(L.window, T, o - R, R, 0),
                              (L.wnext = R),
                              (L.whave = L.wsize))
                            : ((L.wnext += V),
                              L.wnext === L.wsize && (L.wnext = 0),
                              L.whave < L.wsize && (L.whave += V))),
                      0
                    );
                  }
                  (E.inflateReset = P),
                    (E.inflateReset2 = a),
                    (E.inflateResetKeep = x),
                    (E.inflateInit = function (_) {
                      return s(_, 15);
                    }),
                    (E.inflateInit2 = s),
                    (E.inflate = function (_, T) {
                      var o,
                        R,
                        V,
                        L,
                        q,
                        W,
                        Y,
                        z,
                        O,
                        J,
                        X,
                        Z,
                        ae,
                        le,
                        Q,
                        te,
                        ie,
                        ne,
                        de,
                        he,
                        u,
                        I,
                        M,
                        A,
                        S = 0,
                        N = new w.Buf8(4),
                        j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                      if (!_ || !_.state || !_.output || (!_.input && _.avail_in !== 0)) return i;
                      (o = _.state).mode === 12 && (o.mode = 13),
                        (q = _.next_out),
                        (V = _.output),
                        (Y = _.avail_out),
                        (L = _.next_in),
                        (R = _.input),
                        (W = _.avail_in),
                        (z = o.hold),
                        (O = o.bits),
                        (J = W),
                        (X = Y),
                        (I = n);
                      e: for (;;)
                        switch (o.mode) {
                          case y:
                            if (o.wrap === 0) {
                              o.mode = 13;
                              break;
                            }
                            for (; O < 16; ) {
                              if (W === 0) break e;
                              W--, (z += R[L++] << O), (O += 8);
                            }
                            if (2 & o.wrap && z === 35615) {
                              (N[(o.check = 0)] = 255 & z),
                                (N[1] = (z >>> 8) & 255),
                                (o.check = e(o.check, N, 2, 0)),
                                (O = z = 0),
                                (o.mode = 2);
                              break;
                            }
                            if (
                              ((o.flags = 0),
                              o.head && (o.head.done = !1),
                              !(1 & o.wrap) || (((255 & z) << 8) + (z >> 8)) % 31)
                            ) {
                              (_.msg = 'incorrect header check'), (o.mode = 30);
                              break;
                            }
                            if ((15 & z) != 8) {
                              (_.msg = 'unknown compression method'), (o.mode = 30);
                              break;
                            }
                            if (((O -= 4), (u = 8 + (15 & (z >>>= 4))), o.wbits === 0)) o.wbits = u;
                            else if (u > o.wbits) {
                              (_.msg = 'invalid window size'), (o.mode = 30);
                              break;
                            }
                            (o.dmax = 1 << u),
                              (_.adler = o.check = 1),
                              (o.mode = 512 & z ? 10 : 12),
                              (O = z = 0);
                            break;
                          case 2:
                            for (; O < 16; ) {
                              if (W === 0) break e;
                              W--, (z += R[L++] << O), (O += 8);
                            }
                            if (((o.flags = z), (255 & o.flags) != 8)) {
                              (_.msg = 'unknown compression method'), (o.mode = 30);
                              break;
                            }
                            if (57344 & o.flags) {
                              (_.msg = 'unknown header flags set'), (o.mode = 30);
                              break;
                            }
                            o.head && (o.head.text = (z >> 8) & 1),
                              512 & o.flags &&
                                ((N[0] = 255 & z),
                                (N[1] = (z >>> 8) & 255),
                                (o.check = e(o.check, N, 2, 0))),
                              (O = z = 0),
                              (o.mode = 3);
                          case 3:
                            for (; O < 32; ) {
                              if (W === 0) break e;
                              W--, (z += R[L++] << O), (O += 8);
                            }
                            o.head && (o.head.time = z),
                              512 & o.flags &&
                                ((N[0] = 255 & z),
                                (N[1] = (z >>> 8) & 255),
                                (N[2] = (z >>> 16) & 255),
                                (N[3] = (z >>> 24) & 255),
                                (o.check = e(o.check, N, 4, 0))),
                              (O = z = 0),
                              (o.mode = 4);
                          case 4:
                            for (; O < 16; ) {
                              if (W === 0) break e;
                              W--, (z += R[L++] << O), (O += 8);
                            }
                            o.head && ((o.head.xflags = 255 & z), (o.head.os = z >> 8)),
                              512 & o.flags &&
                                ((N[0] = 255 & z),
                                (N[1] = (z >>> 8) & 255),
                                (o.check = e(o.check, N, 2, 0))),
                              (O = z = 0),
                              (o.mode = 5);
                          case 5:
                            if (1024 & o.flags) {
                              for (; O < 16; ) {
                                if (W === 0) break e;
                                W--, (z += R[L++] << O), (O += 8);
                              }
                              (o.length = z),
                                o.head && (o.head.extra_len = z),
                                512 & o.flags &&
                                  ((N[0] = 255 & z),
                                  (N[1] = (z >>> 8) & 255),
                                  (o.check = e(o.check, N, 2, 0))),
                                (O = z = 0);
                            } else o.head && (o.head.extra = null);
                            o.mode = 6;
                          case 6:
                            if (
                              1024 & o.flags &&
                              (W < (Z = o.length) && (Z = W),
                              Z &&
                                (o.head &&
                                  ((u = o.head.extra_len - o.length),
                                  o.head.extra || (o.head.extra = new Array(o.head.extra_len)),
                                  w.arraySet(o.head.extra, R, L, Z, u)),
                                512 & o.flags && (o.check = e(o.check, R, Z, L)),
                                (W -= Z),
                                (L += Z),
                                (o.length -= Z)),
                              o.length)
                            )
                              break e;
                            (o.length = 0), (o.mode = 7);
                          case 7:
                            if (2048 & o.flags) {
                              if (W === 0) break e;
                              for (
                                Z = 0;
                                (u = R[L + Z++]),
                                  o.head &&
                                    u &&
                                    o.length < 65536 &&
                                    (o.head.name += String.fromCharCode(u)),
                                  u && Z < W;

                              );
                              if (
                                (512 & o.flags && (o.check = e(o.check, R, Z, L)),
                                (W -= Z),
                                (L += Z),
                                u)
                              )
                                break e;
                            } else o.head && (o.head.name = null);
                            (o.length = 0), (o.mode = 8);
                          case 8:
                            if (4096 & o.flags) {
                              if (W === 0) break e;
                              for (
                                Z = 0;
                                (u = R[L + Z++]),
                                  o.head &&
                                    u &&
                                    o.length < 65536 &&
                                    (o.head.comment += String.fromCharCode(u)),
                                  u && Z < W;

                              );
                              if (
                                (512 & o.flags && (o.check = e(o.check, R, Z, L)),
                                (W -= Z),
                                (L += Z),
                                u)
                              )
                                break e;
                            } else o.head && (o.head.comment = null);
                            o.mode = 9;
                          case 9:
                            if (512 & o.flags) {
                              for (; O < 16; ) {
                                if (W === 0) break e;
                                W--, (z += R[L++] << O), (O += 8);
                              }
                              if (z !== (65535 & o.check)) {
                                (_.msg = 'header crc mismatch'), (o.mode = 30);
                                break;
                              }
                              O = z = 0;
                            }
                            o.head && ((o.head.hcrc = (o.flags >> 9) & 1), (o.head.done = !0)),
                              (_.adler = o.check = 0),
                              (o.mode = 12);
                            break;
                          case 10:
                            for (; O < 32; ) {
                              if (W === 0) break e;
                              W--, (z += R[L++] << O), (O += 8);
                            }
                            (_.adler = o.check = p(z)), (O = z = 0), (o.mode = 11);
                          case 11:
                            if (o.havedict === 0)
                              return (
                                (_.next_out = q),
                                (_.avail_out = Y),
                                (_.next_in = L),
                                (_.avail_in = W),
                                (o.hold = z),
                                (o.bits = O),
                                2
                              );
                            (_.adler = o.check = 1), (o.mode = 12);
                          case 12:
                            if (T === 5 || T === 6) break e;
                          case 13:
                            if (o.last) {
                              (z >>>= 7 & O), (O -= 7 & O), (o.mode = 27);
                              break;
                            }
                            for (; O < 3; ) {
                              if (W === 0) break e;
                              W--, (z += R[L++] << O), (O += 8);
                            }
                            switch (((o.last = 1 & z), (O -= 1), 3 & (z >>>= 1))) {
                              case 0:
                                o.mode = 14;
                                break;
                              case 1:
                                if ((k(o), (o.mode = 20), T !== 6)) break;
                                (z >>>= 2), (O -= 2);
                                break e;
                              case 2:
                                o.mode = 17;
                                break;
                              case 3:
                                (_.msg = 'invalid block type'), (o.mode = 30);
                            }
                            (z >>>= 2), (O -= 2);
                            break;
                          case 14:
                            for (z >>>= 7 & O, O -= 7 & O; O < 32; ) {
                              if (W === 0) break e;
                              W--, (z += R[L++] << O), (O += 8);
                            }
                            if ((65535 & z) != ((z >>> 16) ^ 65535)) {
                              (_.msg = 'invalid stored block lengths'), (o.mode = 30);
                              break;
                            }
                            if (((o.length = 65535 & z), (O = z = 0), (o.mode = 15), T === 6))
                              break e;
                          case 15:
                            o.mode = 16;
                          case 16:
                            if ((Z = o.length)) {
                              if ((W < Z && (Z = W), Y < Z && (Z = Y), Z === 0)) break e;
                              w.arraySet(V, R, L, Z, q),
                                (W -= Z),
                                (L += Z),
                                (Y -= Z),
                                (q += Z),
                                (o.length -= Z);
                              break;
                            }
                            o.mode = 12;
                            break;
                          case 17:
                            for (; O < 14; ) {
                              if (W === 0) break e;
                              W--, (z += R[L++] << O), (O += 8);
                            }
                            if (
                              ((o.nlen = 257 + (31 & z)),
                              (z >>>= 5),
                              (O -= 5),
                              (o.ndist = 1 + (31 & z)),
                              (z >>>= 5),
                              (O -= 5),
                              (o.ncode = 4 + (15 & z)),
                              (z >>>= 4),
                              (O -= 4),
                              286 < o.nlen || 30 < o.ndist)
                            ) {
                              (_.msg = 'too many length or distance symbols'), (o.mode = 30);
                              break;
                            }
                            (o.have = 0), (o.mode = 18);
                          case 18:
                            for (; o.have < o.ncode; ) {
                              for (; O < 3; ) {
                                if (W === 0) break e;
                                W--, (z += R[L++] << O), (O += 8);
                              }
                              (o.lens[j[o.have++]] = 7 & z), (z >>>= 3), (O -= 3);
                            }
                            for (; o.have < 19; ) o.lens[j[o.have++]] = 0;
                            if (
                              ((o.lencode = o.lendyn),
                              (o.lenbits = 7),
                              (M = { bits: o.lenbits }),
                              (I = r(0, o.lens, 0, 19, o.lencode, 0, o.work, M)),
                              (o.lenbits = M.bits),
                              I)
                            ) {
                              (_.msg = 'invalid code lengths set'), (o.mode = 30);
                              break;
                            }
                            (o.have = 0), (o.mode = 19);
                          case 19:
                            for (; o.have < o.nlen + o.ndist; ) {
                              for (
                                ;
                                (te = ((S = o.lencode[z & ((1 << o.lenbits) - 1)]) >>> 16) & 255),
                                  (ie = 65535 & S),
                                  !((Q = S >>> 24) <= O);

                              ) {
                                if (W === 0) break e;
                                W--, (z += R[L++] << O), (O += 8);
                              }
                              if (ie < 16) (z >>>= Q), (O -= Q), (o.lens[o.have++] = ie);
                              else {
                                if (ie === 16) {
                                  for (A = Q + 2; O < A; ) {
                                    if (W === 0) break e;
                                    W--, (z += R[L++] << O), (O += 8);
                                  }
                                  if (((z >>>= Q), (O -= Q), o.have === 0)) {
                                    (_.msg = 'invalid bit length repeat'), (o.mode = 30);
                                    break;
                                  }
                                  (u = o.lens[o.have - 1]), (Z = 3 + (3 & z)), (z >>>= 2), (O -= 2);
                                } else if (ie === 17) {
                                  for (A = Q + 3; O < A; ) {
                                    if (W === 0) break e;
                                    W--, (z += R[L++] << O), (O += 8);
                                  }
                                  (O -= Q),
                                    (u = 0),
                                    (Z = 3 + (7 & (z >>>= Q))),
                                    (z >>>= 3),
                                    (O -= 3);
                                } else {
                                  for (A = Q + 7; O < A; ) {
                                    if (W === 0) break e;
                                    W--, (z += R[L++] << O), (O += 8);
                                  }
                                  (O -= Q),
                                    (u = 0),
                                    (Z = 11 + (127 & (z >>>= Q))),
                                    (z >>>= 7),
                                    (O -= 7);
                                }
                                if (o.have + Z > o.nlen + o.ndist) {
                                  (_.msg = 'invalid bit length repeat'), (o.mode = 30);
                                  break;
                                }
                                for (; Z--; ) o.lens[o.have++] = u;
                              }
                            }
                            if (o.mode === 30) break;
                            if (o.lens[256] === 0) {
                              (_.msg = 'invalid code -- missing end-of-block'), (o.mode = 30);
                              break;
                            }
                            if (
                              ((o.lenbits = 9),
                              (M = { bits: o.lenbits }),
                              (I = r(m, o.lens, 0, o.nlen, o.lencode, 0, o.work, M)),
                              (o.lenbits = M.bits),
                              I)
                            ) {
                              (_.msg = 'invalid literal/lengths set'), (o.mode = 30);
                              break;
                            }
                            if (
                              ((o.distbits = 6),
                              (o.distcode = o.distdyn),
                              (M = { bits: o.distbits }),
                              (I = r(f, o.lens, o.nlen, o.ndist, o.distcode, 0, o.work, M)),
                              (o.distbits = M.bits),
                              I)
                            ) {
                              (_.msg = 'invalid distances set'), (o.mode = 30);
                              break;
                            }
                            if (((o.mode = 20), T === 6)) break e;
                          case 20:
                            o.mode = 21;
                          case 21:
                            if (6 <= W && 258 <= Y) {
                              (_.next_out = q),
                                (_.avail_out = Y),
                                (_.next_in = L),
                                (_.avail_in = W),
                                (o.hold = z),
                                (o.bits = O),
                                c(_, X),
                                (q = _.next_out),
                                (V = _.output),
                                (Y = _.avail_out),
                                (L = _.next_in),
                                (R = _.input),
                                (W = _.avail_in),
                                (z = o.hold),
                                (O = o.bits),
                                o.mode === 12 && (o.back = -1);
                              break;
                            }
                            for (
                              o.back = 0;
                              (te = ((S = o.lencode[z & ((1 << o.lenbits) - 1)]) >>> 16) & 255),
                                (ie = 65535 & S),
                                !((Q = S >>> 24) <= O);

                            ) {
                              if (W === 0) break e;
                              W--, (z += R[L++] << O), (O += 8);
                            }
                            if (te && !(240 & te)) {
                              for (
                                ne = Q, de = te, he = ie;
                                (te =
                                  ((S = o.lencode[he + ((z & ((1 << (ne + de)) - 1)) >> ne)]) >>>
                                    16) &
                                  255),
                                  (ie = 65535 & S),
                                  !(ne + (Q = S >>> 24) <= O);

                              ) {
                                if (W === 0) break e;
                                W--, (z += R[L++] << O), (O += 8);
                              }
                              (z >>>= ne), (O -= ne), (o.back += ne);
                            }
                            if (((z >>>= Q), (O -= Q), (o.back += Q), (o.length = ie), te === 0)) {
                              o.mode = 26;
                              break;
                            }
                            if (32 & te) {
                              (o.back = -1), (o.mode = 12);
                              break;
                            }
                            if (64 & te) {
                              (_.msg = 'invalid literal/length code'), (o.mode = 30);
                              break;
                            }
                            (o.extra = 15 & te), (o.mode = 22);
                          case 22:
                            if (o.extra) {
                              for (A = o.extra; O < A; ) {
                                if (W === 0) break e;
                                W--, (z += R[L++] << O), (O += 8);
                              }
                              (o.length += z & ((1 << o.extra) - 1)),
                                (z >>>= o.extra),
                                (O -= o.extra),
                                (o.back += o.extra);
                            }
                            (o.was = o.length), (o.mode = 23);
                          case 23:
                            for (
                              ;
                              (te = ((S = o.distcode[z & ((1 << o.distbits) - 1)]) >>> 16) & 255),
                                (ie = 65535 & S),
                                !((Q = S >>> 24) <= O);

                            ) {
                              if (W === 0) break e;
                              W--, (z += R[L++] << O), (O += 8);
                            }
                            if (!(240 & te)) {
                              for (
                                ne = Q, de = te, he = ie;
                                (te =
                                  ((S = o.distcode[he + ((z & ((1 << (ne + de)) - 1)) >> ne)]) >>>
                                    16) &
                                  255),
                                  (ie = 65535 & S),
                                  !(ne + (Q = S >>> 24) <= O);

                              ) {
                                if (W === 0) break e;
                                W--, (z += R[L++] << O), (O += 8);
                              }
                              (z >>>= ne), (O -= ne), (o.back += ne);
                            }
                            if (((z >>>= Q), (O -= Q), (o.back += Q), 64 & te)) {
                              (_.msg = 'invalid distance code'), (o.mode = 30);
                              break;
                            }
                            (o.offset = ie), (o.extra = 15 & te), (o.mode = 24);
                          case 24:
                            if (o.extra) {
                              for (A = o.extra; O < A; ) {
                                if (W === 0) break e;
                                W--, (z += R[L++] << O), (O += 8);
                              }
                              (o.offset += z & ((1 << o.extra) - 1)),
                                (z >>>= o.extra),
                                (O -= o.extra),
                                (o.back += o.extra);
                            }
                            if (o.offset > o.dmax) {
                              (_.msg = 'invalid distance too far back'), (o.mode = 30);
                              break;
                            }
                            o.mode = 25;
                          case 25:
                            if (Y === 0) break e;
                            if (((Z = X - Y), o.offset > Z)) {
                              if ((Z = o.offset - Z) > o.whave && o.sane) {
                                (_.msg = 'invalid distance too far back'), (o.mode = 30);
                                break;
                              }
                              (ae = Z > o.wnext ? ((Z -= o.wnext), o.wsize - Z) : o.wnext - Z),
                                Z > o.length && (Z = o.length),
                                (le = o.window);
                            } else (le = V), (ae = q - o.offset), (Z = o.length);
                            for (
                              Y < Z && (Z = Y), Y -= Z, o.length -= Z;
                              (V[q++] = le[ae++]), --Z;

                            );
                            o.length === 0 && (o.mode = 21);
                            break;
                          case 26:
                            if (Y === 0) break e;
                            (V[q++] = o.length), Y--, (o.mode = 21);
                            break;
                          case 27:
                            if (o.wrap) {
                              for (; O < 32; ) {
                                if (W === 0) break e;
                                W--, (z |= R[L++] << O), (O += 8);
                              }
                              if (
                                ((X -= Y),
                                (_.total_out += X),
                                (o.total += X),
                                X &&
                                  (_.adler = o.check =
                                    o.flags ? e(o.check, V, X, q - X) : v(o.check, V, X, q - X)),
                                (X = Y),
                                (o.flags ? z : p(z)) !== o.check)
                              ) {
                                (_.msg = 'incorrect data check'), (o.mode = 30);
                                break;
                              }
                              O = z = 0;
                            }
                            o.mode = 28;
                          case 28:
                            if (o.wrap && o.flags) {
                              for (; O < 32; ) {
                                if (W === 0) break e;
                                W--, (z += R[L++] << O), (O += 8);
                              }
                              if (z !== (4294967295 & o.total)) {
                                (_.msg = 'incorrect length check'), (o.mode = 30);
                                break;
                              }
                              O = z = 0;
                            }
                            o.mode = 29;
                          case 29:
                            I = 1;
                            break e;
                          case 30:
                            I = -3;
                            break e;
                          case 31:
                            return -4;
                          case 32:
                          default:
                            return i;
                        }
                      return (
                        (_.next_out = q),
                        (_.avail_out = Y),
                        (_.next_in = L),
                        (_.avail_in = W),
                        (o.hold = z),
                        (o.bits = O),
                        (o.wsize ||
                          (X !== _.avail_out && o.mode < 30 && (o.mode < 27 || T !== 4))) &&
                        D(_, _.output, _.next_out, X - _.avail_out)
                          ? ((o.mode = 31), -4)
                          : ((J -= _.avail_in),
                            (X -= _.avail_out),
                            (_.total_in += J),
                            (_.total_out += X),
                            (o.total += X),
                            o.wrap &&
                              X &&
                              (_.adler = o.check =
                                o.flags
                                  ? e(o.check, V, X, _.next_out - X)
                                  : v(o.check, V, X, _.next_out - X)),
                            (_.data_type =
                              o.bits +
                              (o.last ? 64 : 0) +
                              (o.mode === 12 ? 128 : 0) +
                              (o.mode === 20 || o.mode === 15 ? 256 : 0)),
                            ((J == 0 && X === 0) || T === 4) && I === n && (I = -5),
                            I)
                      );
                    }),
                    (E.inflateEnd = function (_) {
                      if (!_ || !_.state) return i;
                      var T = _.state;
                      return T.window && (T.window = null), (_.state = null), n;
                    }),
                    (E.inflateGetHeader = function (_, T) {
                      var o;
                      return _ && _.state && 2 & (o = _.state).wrap
                        ? (((o.head = T).done = !1), n)
                        : i;
                    }),
                    (E.inflateSetDictionary = function (_, T) {
                      var o,
                        R = T.length;
                      return _ && _.state
                        ? (o = _.state).wrap !== 0 && o.mode !== 11
                          ? i
                          : o.mode === 11 && v(1, T, R, 0) !== o.check
                          ? -3
                          : D(_, T, R, R)
                          ? ((o.mode = 31), -4)
                          : ((o.havedict = 1), n)
                        : i;
                    }),
                    (E.inflateInfo = 'pako inflate (from Nodeca project)');
                },
                {
                  '../utils/common': 41,
                  './adler32': 43,
                  './crc32': 45,
                  './inffast': 48,
                  './inftrees': 50,
                },
              ],
              50: [
                function (C, F, E) {
                  var w = C('../utils/common'),
                    v = [
                      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67,
                      83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
                    ],
                    e = [
                      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19,
                      19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
                    ],
                    c = [
                      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769,
                      1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
                    ],
                    r = [
                      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24,
                      24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
                    ];
                  F.exports = function (m, f, n, i, y, h, d, p) {
                    var g,
                      x,
                      P,
                      a,
                      s,
                      t,
                      l,
                      b,
                      k,
                      D = p.bits,
                      _ = 0,
                      T = 0,
                      o = 0,
                      R = 0,
                      V = 0,
                      L = 0,
                      q = 0,
                      W = 0,
                      Y = 0,
                      z = 0,
                      O = null,
                      J = 0,
                      X = new w.Buf16(16),
                      Z = new w.Buf16(16),
                      ae = null,
                      le = 0;
                    for (_ = 0; _ <= 15; _++) X[_] = 0;
                    for (T = 0; T < i; T++) X[f[n + T]]++;
                    for (V = D, R = 15; 1 <= R && X[R] === 0; R--);
                    if ((R < V && (V = R), R === 0))
                      return (y[h++] = 20971520), (y[h++] = 20971520), (p.bits = 1), 0;
                    for (o = 1; o < R && X[o] === 0; o++);
                    for (V < o && (V = o), _ = W = 1; _ <= 15; _++)
                      if (((W <<= 1), (W -= X[_]) < 0)) return -1;
                    if (0 < W && (m === 0 || R !== 1)) return -1;
                    for (Z[1] = 0, _ = 1; _ < 15; _++) Z[_ + 1] = Z[_] + X[_];
                    for (T = 0; T < i; T++) f[n + T] !== 0 && (d[Z[f[n + T]]++] = T);
                    if (
                      ((t =
                        m === 0
                          ? ((O = ae = d), 19)
                          : m === 1
                          ? ((O = v), (J -= 257), (ae = e), (le -= 257), 256)
                          : ((O = c), (ae = r), -1)),
                      (_ = o),
                      (s = h),
                      (q = T = z = 0),
                      (P = -1),
                      (a = (Y = 1 << (L = V)) - 1),
                      (m === 1 && 852 < Y) || (m === 2 && 592 < Y))
                    )
                      return 1;
                    for (;;) {
                      for (
                        l = _ - q,
                          k =
                            d[T] < t
                              ? ((b = 0), d[T])
                              : d[T] > t
                              ? ((b = ae[le + d[T]]), O[J + d[T]])
                              : ((b = 96), 0),
                          g = 1 << (_ - q),
                          o = x = 1 << L;
                        (y[s + (z >> q) + (x -= g)] = (l << 24) | (b << 16) | k | 0), x !== 0;

                      );
                      for (g = 1 << (_ - 1); z & g; ) g >>= 1;
                      if ((g !== 0 ? ((z &= g - 1), (z += g)) : (z = 0), T++, --X[_] == 0)) {
                        if (_ === R) break;
                        _ = f[n + d[T]];
                      }
                      if (V < _ && (z & a) !== P) {
                        for (
                          q === 0 && (q = V), s += o, W = 1 << (L = _ - q);
                          L + q < R && !((W -= X[L + q]) <= 0);

                        )
                          L++, (W <<= 1);
                        if (((Y += 1 << L), (m === 1 && 852 < Y) || (m === 2 && 592 < Y))) return 1;
                        y[(P = z & a)] = (V << 24) | (L << 16) | (s - h) | 0;
                      }
                    }
                    return (
                      z !== 0 && (y[s + z] = ((_ - q) << 24) | (64 << 16) | 0), (p.bits = V), 0
                    );
                  };
                },
                { '../utils/common': 41 },
              ],
              51: [
                function (C, F, E) {
                  F.exports = {
                    2: 'need dictionary',
                    1: 'stream end',
                    0: '',
                    '-1': 'file error',
                    '-2': 'stream error',
                    '-3': 'data error',
                    '-4': 'insufficient memory',
                    '-5': 'buffer error',
                    '-6': 'incompatible version',
                  };
                },
                {},
              ],
              52: [
                function (C, F, E) {
                  var w = C('../utils/common'),
                    v = 0,
                    e = 1;
                  function c(S) {
                    for (var N = S.length; 0 <= --N; ) S[N] = 0;
                  }
                  var r = 0,
                    m = 29,
                    f = 256,
                    n = f + 1 + m,
                    i = 30,
                    y = 19,
                    h = 2 * n + 1,
                    d = 15,
                    p = 16,
                    g = 7,
                    x = 256,
                    P = 16,
                    a = 17,
                    s = 18,
                    t = [
                      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5,
                      5, 5, 0,
                    ],
                    l = [
                      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11,
                      11, 12, 12, 13, 13,
                    ],
                    b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                    k = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    D = new Array(2 * (n + 2));
                  c(D);
                  var _ = new Array(2 * i);
                  c(_);
                  var T = new Array(512);
                  c(T);
                  var o = new Array(256);
                  c(o);
                  var R = new Array(m);
                  c(R);
                  var V,
                    L,
                    q,
                    W = new Array(i);
                  function Y(S, N, j, U, B) {
                    (this.static_tree = S),
                      (this.extra_bits = N),
                      (this.extra_base = j),
                      (this.elems = U),
                      (this.max_length = B),
                      (this.has_stree = S && S.length);
                  }
                  function z(S, N) {
                    (this.dyn_tree = S), (this.max_code = 0), (this.stat_desc = N);
                  }
                  function O(S) {
                    return S < 256 ? T[S] : T[256 + (S >>> 7)];
                  }
                  function J(S, N) {
                    (S.pending_buf[S.pending++] = 255 & N),
                      (S.pending_buf[S.pending++] = (N >>> 8) & 255);
                  }
                  function X(S, N, j) {
                    S.bi_valid > p - j
                      ? ((S.bi_buf |= (N << S.bi_valid) & 65535),
                        J(S, S.bi_buf),
                        (S.bi_buf = N >> (p - S.bi_valid)),
                        (S.bi_valid += j - p))
                      : ((S.bi_buf |= (N << S.bi_valid) & 65535), (S.bi_valid += j));
                  }
                  function Z(S, N, j) {
                    X(S, j[2 * N], j[2 * N + 1]);
                  }
                  function ae(S, N) {
                    for (var j = 0; (j |= 1 & S), (S >>>= 1), (j <<= 1), 0 < --N; );
                    return j >>> 1;
                  }
                  function le(S, N, j) {
                    var U,
                      B,
                      H = new Array(d + 1),
                      G = 0;
                    for (U = 1; U <= d; U++) H[U] = G = (G + j[U - 1]) << 1;
                    for (B = 0; B <= N; B++) {
                      var $ = S[2 * B + 1];
                      $ !== 0 && (S[2 * B] = ae(H[$]++, $));
                    }
                  }
                  function Q(S) {
                    var N;
                    for (N = 0; N < n; N++) S.dyn_ltree[2 * N] = 0;
                    for (N = 0; N < i; N++) S.dyn_dtree[2 * N] = 0;
                    for (N = 0; N < y; N++) S.bl_tree[2 * N] = 0;
                    (S.dyn_ltree[2 * x] = 1),
                      (S.opt_len = S.static_len = 0),
                      (S.last_lit = S.matches = 0);
                  }
                  function te(S) {
                    8 < S.bi_valid
                      ? J(S, S.bi_buf)
                      : 0 < S.bi_valid && (S.pending_buf[S.pending++] = S.bi_buf),
                      (S.bi_buf = 0),
                      (S.bi_valid = 0);
                  }
                  function ie(S, N, j, U) {
                    var B = 2 * N,
                      H = 2 * j;
                    return S[B] < S[H] || (S[B] === S[H] && U[N] <= U[j]);
                  }
                  function ne(S, N, j) {
                    for (
                      var U = S.heap[j], B = j << 1;
                      B <= S.heap_len &&
                      (B < S.heap_len && ie(N, S.heap[B + 1], S.heap[B], S.depth) && B++,
                      !ie(N, U, S.heap[B], S.depth));

                    )
                      (S.heap[j] = S.heap[B]), (j = B), (B <<= 1);
                    S.heap[j] = U;
                  }
                  function de(S, N, j) {
                    var U,
                      B,
                      H,
                      G,
                      $ = 0;
                    if (S.last_lit !== 0)
                      for (
                        ;
                        (U =
                          (S.pending_buf[S.d_buf + 2 * $] << 8) |
                          S.pending_buf[S.d_buf + 2 * $ + 1]),
                          (B = S.pending_buf[S.l_buf + $]),
                          $++,
                          U === 0
                            ? Z(S, B, N)
                            : (Z(S, (H = o[B]) + f + 1, N),
                              (G = t[H]) !== 0 && X(S, (B -= R[H]), G),
                              Z(S, (H = O(--U)), j),
                              (G = l[H]) !== 0 && X(S, (U -= W[H]), G)),
                          $ < S.last_lit;

                      );
                    Z(S, x, N);
                  }
                  function he(S, N) {
                    var j,
                      U,
                      B,
                      H = N.dyn_tree,
                      G = N.stat_desc.static_tree,
                      $ = N.stat_desc.has_stree,
                      K = N.stat_desc.elems,
                      re = -1;
                    for (S.heap_len = 0, S.heap_max = h, j = 0; j < K; j++)
                      H[2 * j] !== 0
                        ? ((S.heap[++S.heap_len] = re = j), (S.depth[j] = 0))
                        : (H[2 * j + 1] = 0);
                    for (; S.heap_len < 2; )
                      (H[2 * (B = S.heap[++S.heap_len] = re < 2 ? ++re : 0)] = 1),
                        (S.depth[B] = 0),
                        S.opt_len--,
                        $ && (S.static_len -= G[2 * B + 1]);
                    for (N.max_code = re, j = S.heap_len >> 1; 1 <= j; j--) ne(S, H, j);
                    for (
                      B = K;
                      (j = S.heap[1]),
                        (S.heap[1] = S.heap[S.heap_len--]),
                        ne(S, H, 1),
                        (U = S.heap[1]),
                        (S.heap[--S.heap_max] = j),
                        (S.heap[--S.heap_max] = U),
                        (H[2 * B] = H[2 * j] + H[2 * U]),
                        (S.depth[B] = (S.depth[j] >= S.depth[U] ? S.depth[j] : S.depth[U]) + 1),
                        (H[2 * j + 1] = H[2 * U + 1] = B),
                        (S.heap[1] = B++),
                        ne(S, H, 1),
                        2 <= S.heap_len;

                    );
                    (S.heap[--S.heap_max] = S.heap[1]),
                      (function (ee, ce) {
                        var ge,
                          pe,
                          be,
                          se,
                          ve,
                          xe,
                          fe = ce.dyn_tree,
                          Pe = ce.max_code,
                          Me = ce.stat_desc.static_tree,
                          Ie = ce.stat_desc.has_stree,
                          Fe = ce.stat_desc.extra_bits,
                          Ce = ce.stat_desc.extra_base,
                          ye = ce.stat_desc.max_length,
                          _e = 0;
                        for (se = 0; se <= d; se++) ee.bl_count[se] = 0;
                        for (
                          fe[2 * ee.heap[ee.heap_max] + 1] = 0, ge = ee.heap_max + 1;
                          ge < h;
                          ge++
                        )
                          ye < (se = fe[2 * fe[2 * (pe = ee.heap[ge]) + 1] + 1] + 1) &&
                            ((se = ye), _e++),
                            (fe[2 * pe + 1] = se),
                            Pe < pe ||
                              (ee.bl_count[se]++,
                              (ve = 0),
                              Ce <= pe && (ve = Fe[pe - Ce]),
                              (xe = fe[2 * pe]),
                              (ee.opt_len += xe * (se + ve)),
                              Ie && (ee.static_len += xe * (Me[2 * pe + 1] + ve)));
                        if (_e !== 0) {
                          do {
                            for (se = ye - 1; ee.bl_count[se] === 0; ) se--;
                            ee.bl_count[se]--,
                              (ee.bl_count[se + 1] += 2),
                              ee.bl_count[ye]--,
                              (_e -= 2);
                          } while (0 < _e);
                          for (se = ye; se !== 0; se--)
                            for (pe = ee.bl_count[se]; pe !== 0; )
                              Pe < (be = ee.heap[--ge]) ||
                                (fe[2 * be + 1] !== se &&
                                  ((ee.opt_len += (se - fe[2 * be + 1]) * fe[2 * be]),
                                  (fe[2 * be + 1] = se)),
                                pe--);
                        }
                      })(S, N),
                      le(H, re, S.bl_count);
                  }
                  function u(S, N, j) {
                    var U,
                      B,
                      H = -1,
                      G = N[1],
                      $ = 0,
                      K = 7,
                      re = 4;
                    for (
                      G === 0 && ((K = 138), (re = 3)), N[2 * (j + 1) + 1] = 65535, U = 0;
                      U <= j;
                      U++
                    )
                      (B = G),
                        (G = N[2 * (U + 1) + 1]),
                        (++$ < K && B === G) ||
                          ($ < re
                            ? (S.bl_tree[2 * B] += $)
                            : B !== 0
                            ? (B !== H && S.bl_tree[2 * B]++, S.bl_tree[2 * P]++)
                            : $ <= 10
                            ? S.bl_tree[2 * a]++
                            : S.bl_tree[2 * s]++,
                          (H = B),
                          (re =
                            ($ = 0) === G
                              ? ((K = 138), 3)
                              : B === G
                              ? ((K = 6), 3)
                              : ((K = 7), 4)));
                  }
                  function I(S, N, j) {
                    var U,
                      B,
                      H = -1,
                      G = N[1],
                      $ = 0,
                      K = 7,
                      re = 4;
                    for (G === 0 && ((K = 138), (re = 3)), U = 0; U <= j; U++)
                      if (((B = G), (G = N[2 * (U + 1) + 1]), !(++$ < K && B === G))) {
                        if ($ < re) for (; Z(S, B, S.bl_tree), --$ != 0; );
                        else
                          B !== 0
                            ? (B !== H && (Z(S, B, S.bl_tree), $--),
                              Z(S, P, S.bl_tree),
                              X(S, $ - 3, 2))
                            : $ <= 10
                            ? (Z(S, a, S.bl_tree), X(S, $ - 3, 3))
                            : (Z(S, s, S.bl_tree), X(S, $ - 11, 7));
                        (H = B),
                          (re =
                            ($ = 0) === G ? ((K = 138), 3) : B === G ? ((K = 6), 3) : ((K = 7), 4));
                      }
                  }
                  c(W);
                  var M = !1;
                  function A(S, N, j, U) {
                    X(S, (r << 1) + (U ? 1 : 0), 3),
                      (function (B, H, G, $) {
                        te(B),
                          $ && (J(B, G), J(B, ~G)),
                          w.arraySet(B.pending_buf, B.window, H, G, B.pending),
                          (B.pending += G);
                      })(S, N, j, !0);
                  }
                  (E._tr_init = function (S) {
                    M ||
                      ((function () {
                        var N,
                          j,
                          U,
                          B,
                          H,
                          G = new Array(d + 1);
                        for (B = U = 0; B < m - 1; B++)
                          for (R[B] = U, N = 0; N < 1 << t[B]; N++) o[U++] = B;
                        for (o[U - 1] = B, B = H = 0; B < 16; B++)
                          for (W[B] = H, N = 0; N < 1 << l[B]; N++) T[H++] = B;
                        for (H >>= 7; B < i; B++)
                          for (W[B] = H << 7, N = 0; N < 1 << (l[B] - 7); N++) T[256 + H++] = B;
                        for (j = 0; j <= d; j++) G[j] = 0;
                        for (N = 0; N <= 143; ) (D[2 * N + 1] = 8), N++, G[8]++;
                        for (; N <= 255; ) (D[2 * N + 1] = 9), N++, G[9]++;
                        for (; N <= 279; ) (D[2 * N + 1] = 7), N++, G[7]++;
                        for (; N <= 287; ) (D[2 * N + 1] = 8), N++, G[8]++;
                        for (le(D, n + 1, G), N = 0; N < i; N++)
                          (_[2 * N + 1] = 5), (_[2 * N] = ae(N, 5));
                        (V = new Y(D, t, f + 1, n, d)),
                          (L = new Y(_, l, 0, i, d)),
                          (q = new Y(new Array(0), b, 0, y, g));
                      })(),
                      (M = !0)),
                      (S.l_desc = new z(S.dyn_ltree, V)),
                      (S.d_desc = new z(S.dyn_dtree, L)),
                      (S.bl_desc = new z(S.bl_tree, q)),
                      (S.bi_buf = 0),
                      (S.bi_valid = 0),
                      Q(S);
                  }),
                    (E._tr_stored_block = A),
                    (E._tr_flush_block = function (S, N, j, U) {
                      var B,
                        H,
                        G = 0;
                      0 < S.level
                        ? (S.strm.data_type === 2 &&
                            (S.strm.data_type = (function ($) {
                              var K,
                                re = 4093624447;
                              for (K = 0; K <= 31; K++, re >>>= 1)
                                if (1 & re && $.dyn_ltree[2 * K] !== 0) return v;
                              if (
                                $.dyn_ltree[18] !== 0 ||
                                $.dyn_ltree[20] !== 0 ||
                                $.dyn_ltree[26] !== 0
                              )
                                return e;
                              for (K = 32; K < f; K++) if ($.dyn_ltree[2 * K] !== 0) return e;
                              return v;
                            })(S)),
                          he(S, S.l_desc),
                          he(S, S.d_desc),
                          (G = (function ($) {
                            var K;
                            for (
                              u($, $.dyn_ltree, $.l_desc.max_code),
                                u($, $.dyn_dtree, $.d_desc.max_code),
                                he($, $.bl_desc),
                                K = y - 1;
                              3 <= K && $.bl_tree[2 * k[K] + 1] === 0;
                              K--
                            );
                            return ($.opt_len += 3 * (K + 1) + 5 + 5 + 4), K;
                          })(S)),
                          (B = (S.opt_len + 3 + 7) >>> 3),
                          (H = (S.static_len + 3 + 7) >>> 3) <= B && (B = H))
                        : (B = H = j + 5),
                        j + 4 <= B && N !== -1
                          ? A(S, N, j, U)
                          : S.strategy === 4 || H === B
                          ? (X(S, 2 + (U ? 1 : 0), 3), de(S, D, _))
                          : (X(S, 4 + (U ? 1 : 0), 3),
                            (function ($, K, re, ee) {
                              var ce;
                              for (
                                X($, K - 257, 5), X($, re - 1, 5), X($, ee - 4, 4), ce = 0;
                                ce < ee;
                                ce++
                              )
                                X($, $.bl_tree[2 * k[ce] + 1], 3);
                              I($, $.dyn_ltree, K - 1), I($, $.dyn_dtree, re - 1);
                            })(S, S.l_desc.max_code + 1, S.d_desc.max_code + 1, G + 1),
                            de(S, S.dyn_ltree, S.dyn_dtree)),
                        Q(S),
                        U && te(S);
                    }),
                    (E._tr_tally = function (S, N, j) {
                      return (
                        (S.pending_buf[S.d_buf + 2 * S.last_lit] = (N >>> 8) & 255),
                        (S.pending_buf[S.d_buf + 2 * S.last_lit + 1] = 255 & N),
                        (S.pending_buf[S.l_buf + S.last_lit] = 255 & j),
                        S.last_lit++,
                        N === 0
                          ? S.dyn_ltree[2 * j]++
                          : (S.matches++,
                            N--,
                            S.dyn_ltree[2 * (o[j] + f + 1)]++,
                            S.dyn_dtree[2 * O(N)]++),
                        S.last_lit === S.lit_bufsize - 1
                      );
                    }),
                    (E._tr_align = function (S) {
                      X(S, 2, 3),
                        Z(S, x, D),
                        (function (N) {
                          N.bi_valid === 16
                            ? (J(N, N.bi_buf), (N.bi_buf = 0), (N.bi_valid = 0))
                            : 8 <= N.bi_valid &&
                              ((N.pending_buf[N.pending++] = 255 & N.bi_buf),
                              (N.bi_buf >>= 8),
                              (N.bi_valid -= 8));
                        })(S);
                    });
                },
                { '../utils/common': 41 },
              ],
              53: [
                function (C, F, E) {
                  F.exports = function () {
                    (this.input = null),
                      (this.next_in = 0),
                      (this.avail_in = 0),
                      (this.total_in = 0),
                      (this.output = null),
                      (this.next_out = 0),
                      (this.avail_out = 0),
                      (this.total_out = 0),
                      (this.msg = ''),
                      (this.state = null),
                      (this.data_type = 2),
                      (this.adler = 0);
                  };
                },
                {},
              ],
              54: [
                function (C, F, E) {
                  (function (w) {
                    (function (v, e) {
                      if (!v.setImmediate) {
                        var c,
                          r,
                          m,
                          f,
                          n = 1,
                          i = {},
                          y = !1,
                          h = v.document,
                          d = Object.getPrototypeOf && Object.getPrototypeOf(v);
                        (d = d && d.setTimeout ? d : v),
                          (c =
                            {}.toString.call(v.process) === '[object process]'
                              ? function (P) {
                                  process.nextTick(function () {
                                    g(P);
                                  });
                                }
                              : (function () {
                                  if (v.postMessage && !v.importScripts) {
                                    var P = !0,
                                      a = v.onmessage;
                                    return (
                                      (v.onmessage = function () {
                                        P = !1;
                                      }),
                                      v.postMessage('', '*'),
                                      (v.onmessage = a),
                                      P
                                    );
                                  }
                                })()
                              ? ((f = 'setImmediate$' + Math.random() + '$'),
                                v.addEventListener
                                  ? v.addEventListener('message', x, !1)
                                  : v.attachEvent('onmessage', x),
                                function (P) {
                                  v.postMessage(f + P, '*');
                                })
                              : v.MessageChannel
                              ? (((m = new MessageChannel()).port1.onmessage = function (P) {
                                  g(P.data);
                                }),
                                function (P) {
                                  m.port2.postMessage(P);
                                })
                              : h && 'onreadystatechange' in h.createElement('script')
                              ? ((r = h.documentElement),
                                function (P) {
                                  var a = h.createElement('script');
                                  (a.onreadystatechange = function () {
                                    g(P),
                                      (a.onreadystatechange = null),
                                      r.removeChild(a),
                                      (a = null);
                                  }),
                                    r.appendChild(a);
                                })
                              : function (P) {
                                  setTimeout(g, 0, P);
                                }),
                          (d.setImmediate = function (P) {
                            typeof P != 'function' && (P = new Function('' + P));
                            for (var a = new Array(arguments.length - 1), s = 0; s < a.length; s++)
                              a[s] = arguments[s + 1];
                            var t = { callback: P, args: a };
                            return (i[n] = t), c(n), n++;
                          }),
                          (d.clearImmediate = p);
                      }
                      function p(P) {
                        delete i[P];
                      }
                      function g(P) {
                        if (y) setTimeout(g, 0, P);
                        else {
                          var a = i[P];
                          if (a) {
                            y = !0;
                            try {
                              (function (s) {
                                var t = s.callback,
                                  l = s.args;
                                switch (l.length) {
                                  case 0:
                                    t();
                                    break;
                                  case 1:
                                    t(l[0]);
                                    break;
                                  case 2:
                                    t(l[0], l[1]);
                                    break;
                                  case 3:
                                    t(l[0], l[1], l[2]);
                                    break;
                                  default:
                                    t.apply(e, l);
                                }
                              })(a);
                            } finally {
                              p(P), (y = !1);
                            }
                          }
                        }
                      }
                      function x(P) {
                        P.source === v &&
                          typeof P.data == 'string' &&
                          P.data.indexOf(f) === 0 &&
                          g(+P.data.slice(f.length));
                      }
                    })(typeof self == 'undefined' ? (w === void 0 ? this : w) : self);
                  }).call(
                    this,
                    typeof ke != 'undefined'
                      ? ke
                      : typeof self != 'undefined'
                      ? self
                      : typeof window != 'undefined'
                      ? window
                      : {},
                  );
                },
                {},
              ],
            },
            {},
            [10],
          )(10);
        });
      })(Ae)),
    Ae.exports
  );
}
(function (me, oe) {
  (function (C, F) {
    me.exports = F(Ge());
  })(globalThis, (C) =>
    (() => {
      var F = {
          438: (v, e, c) => {
            c.r(e), c.d(e, { default: () => g });
            var r = c(537),
              m = c.n(r),
              f = c(645),
              n = c.n(f),
              i = c(806),
              y = c.n(i),
              h = new URL(c(583), c.b),
              d = n()(m()),
              p = y()(h);
            d.push([
              v.id,
              `@namespace "http://www.w3.org/1998/Math/MathML";math{display:inline-block;line-height:initial}mfrac{display:inline-block;vertical-align:-50%;text-align:center}mfrac>:first-child{border-bottom:solid thin currentColor}mfrac>*{display:block}msub>:nth-child(2){font-size:smaller;vertical-align:sub}msup>:nth-child(2){font-size:smaller;vertical-align:super}munder,mover,munderover{display:inline-flex;flex-flow:column nowrap;vertical-align:middle;text-align:center}munder>:not(:first-child),mover>:not(:first-child),munderover>:not(:first-child){font-size:smaller}munderover>:last-child{order:-1}mroot,msqrt{position:relative;display:inline-block;border-top:solid thin currentColor;margin-top:.5px;vertical-align:middle;margin-left:1ch}mroot:before,msqrt:before{content:"";display:inline-block;position:absolute;width:1ch;left:-1ch;top:-1px;bottom:0;background-image:url(${p})}`,
              '',
              {
                version: 3,
                sources: ['webpack://./src/mathml.scss'],
                names: [],
                mappings:
                  'AAAA,+CAAA,CAEA,KACI,oBAAA,CACA,mBAAA,CAGJ,MACI,oBAAA,CACA,mBAAA,CACA,iBAAA,CAEA,mBACI,qCAAA,CAGJ,QACI,aAAA,CAKJ,mBACI,iBAAA,CACA,kBAAA,CAKJ,mBACI,iBAAA,CACA,oBAAA,CAIR,wBACI,mBAAA,CACA,uBAAA,CACA,qBAAA,CACA,iBAAA,CAEA,iFACI,iBAAA,CAKJ,uBAAA,QAAA,CAGJ,YACI,iBAAA,CACA,oBAAA,CACA,kCAAA,CACA,eAAA,CACA,qBAAA,CACA,eAAA,CAEA,0BACI,UAAA,CACA,oBAAA,CACA,iBAAA,CACA,SAAA,CACA,SAAA,CACA,QAAA,CACA,QAAA,CACA,wDAAA',
                sourcesContent: [
                  `@namespace "http://www.w3.org/1998/Math/MathML";\r
\r
math {\r
    display: inline-block;\r
    line-height: initial;\r
}\r
\r
mfrac {\r
    display: inline-block;\r
    vertical-align: -50%;\r
    text-align: center;\r
\r
    &>:first-child {\r
        border-bottom: solid thin currentColor;\r
    }\r
\r
    &>* {\r
        display: block;\r
    }\r
}\r
\r
msub {\r
    &>:nth-child(2) {\r
        font-size: smaller;\r
        vertical-align: sub;\r
    }\r
}\r
\r
msup {\r
    &>:nth-child(2) {\r
        font-size: smaller;\r
        vertical-align: super;\r
    }\r
}\r
\r
munder, mover, munderover {\r
    display: inline-flex;\r
    flex-flow: column nowrap;\r
    vertical-align: middle;\r
    text-align: center;\r
\r
    &>:not(:first-child) {\r
        font-size: smaller;\r
    }\r
}\r
\r
munderover {\r
    &>:last-child { order: -1; }\r
}\r
\r
mroot, msqrt {\r
    position: relative;\r
    display: inline-block;\r
    border-top: solid thin currentColor;  \r
    margin-top: 0.5px;\r
    vertical-align: middle;  \r
    margin-left: 1ch; \r
\r
    &:before {\r
        content: "";\r
        display: inline-block;\r
        position: absolute;\r
        width: 1ch;\r
        left: -1ch;\r
        top: -1px;\r
        bottom: 0;\r
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 100' preserveAspectRatio='none'%3E%3Cpath d='m0,75 l5,0 l5,25 l10,-100' stroke='black' fill='none' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E");\r
    }\r
}`,
                ],
                sourceRoot: '',
              },
            ]);
            const g = d.toString();
          },
          645: (v) => {
            v.exports = function (e) {
              var c = [];
              return (
                (c.toString = function () {
                  return this.map(function (r) {
                    var m = '',
                      f = r[5] !== void 0;
                    return (
                      r[4] && (m += '@supports ('.concat(r[4], ') {')),
                      r[2] && (m += '@media '.concat(r[2], ' {')),
                      f && (m += '@layer'.concat(r[5].length > 0 ? ' '.concat(r[5]) : '', ' {')),
                      (m += e(r)),
                      f && (m += '}'),
                      r[2] && (m += '}'),
                      r[4] && (m += '}'),
                      m
                    );
                  }).join('');
                }),
                (c.i = function (r, m, f, n, i) {
                  typeof r == 'string' && (r = [[null, r, void 0]]);
                  var y = {};
                  if (f)
                    for (var h = 0; h < this.length; h++) {
                      var d = this[h][0];
                      d != null && (y[d] = !0);
                    }
                  for (var p = 0; p < r.length; p++) {
                    var g = [].concat(r[p]);
                    (f && y[g[0]]) ||
                      (i !== void 0 &&
                        (g[5] === void 0 ||
                          (g[1] = '@layer'
                            .concat(g[5].length > 0 ? ' '.concat(g[5]) : '', ' {')
                            .concat(g[1], '}')),
                        (g[5] = i)),
                      m &&
                        (g[2] && (g[1] = '@media '.concat(g[2], ' {').concat(g[1], '}')),
                        (g[2] = m)),
                      n &&
                        (g[4]
                          ? ((g[1] = '@supports ('.concat(g[4], ') {').concat(g[1], '}')),
                            (g[4] = n))
                          : (g[4] = ''.concat(n))),
                      c.push(g));
                  }
                }),
                c
              );
            };
          },
          806: (v) => {
            v.exports = function (e, c) {
              return (
                c || (c = {}),
                e &&
                  ((e = String(e.__esModule ? e.default : e)),
                  /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                  c.hash && (e += c.hash),
                  /["'() \t\n]|(%20)/.test(e) || c.needQuotes
                    ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                    : e)
              );
            };
          },
          537: (v) => {
            v.exports = function (e) {
              var c = e[1],
                r = e[3];
              if (!r) return c;
              if (typeof btoa == 'function') {
                var m = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                  f = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(m),
                  n = '/*# '.concat(f, ' */');
                return [c].concat([n]).join(`
`);
              }
              return [c].join(`
`);
            };
          },
          522: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.OpenXmlPackage = void 0);
            const r = c(626),
              m = c(472),
              f = c(593),
              n = c(461);
            class i {
              constructor(h, d) {
                (this._zip = h), (this.options = d), (this.xmlParser = new m.XmlParser());
              }
              get(h) {
                return this._zip.files[
                  (function (d) {
                    return d.startsWith('/') ? d.substr(1) : d;
                  })(h)
                ];
              }
              update(h, d) {
                this._zip.file(h, d);
              }
              static load(h, d) {
                return ue(this, null, function* () {
                  const p = yield r.loadAsync(h);
                  return new i(p, d);
                });
              }
              save(h = 'blob') {
                return this._zip.generateAsync({ type: h });
              }
              load(h, d = 'string') {
                var p, g;
                return (g = (p = this.get(h)) === null || p === void 0 ? void 0 : p.async(d)) !==
                  null && g !== void 0
                  ? g
                  : Promise.resolve(null);
              }
              loadRelationships(h = null) {
                return ue(this, null, function* () {
                  let d = '_rels/.rels';
                  if (h != null) {
                    const [g, x] = (0, f.splitPath)(h);
                    d = `${g}_rels/${x}.rels`;
                  }
                  const p = yield this.load(d);
                  return p
                    ? (0, n.parseRelationships)(
                        this.parseXmlDocument(p).firstElementChild,
                        this.xmlParser,
                      )
                    : null;
                });
              }
              parseXmlDocument(h) {
                return (0, m.parseXmlString)(h, this.options.trimXmlDeclaration);
              }
            }
            e.OpenXmlPackage = i;
          },
          530: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.Part = void 0);
            const r = c(472);
            e.Part = class {
              constructor(m, f) {
                (this._package = m), (this.path = f);
              }
              load() {
                return ue(this, null, function* () {
                  this.rels = yield this._package.loadRelationships(this.path);
                  const m = yield this._package.load(this.path),
                    f = this._package.parseXmlDocument(m);
                  this._package.options.keepOrigin && (this._xmlDocument = f),
                    this.parseXml(f.firstElementChild);
                });
              }
              save() {
                this._package.update(this.path, (0, r.serializeXmlString)(this._xmlDocument));
              }
              parseXml(m) {}
            };
          },
          461: (v, e) => {
            var c;
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseRelationships = e.RelationshipTypes = void 0),
              (function (r) {
                (r.OfficeDocument =
                  'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument'),
                  (r.FontTable =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable'),
                  (r.Image =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image'),
                  (r.Numbering =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering'),
                  (r.Styles =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles'),
                  (r.StylesWithEffects =
                    'http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects'),
                  (r.Theme =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme'),
                  (r.Settings =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings'),
                  (r.WebSettings =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings'),
                  (r.Hyperlink =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink'),
                  (r.Footnotes =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes'),
                  (r.Endnotes =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes'),
                  (r.Footer =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer'),
                  (r.Header =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/header'),
                  (r.ExtendedProperties =
                    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties'),
                  (r.CoreProperties =
                    'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties'),
                  (r.CustomProperties =
                    'http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties');
              })(c || (e.RelationshipTypes = c = {})),
              (e.parseRelationships = function (r, m) {
                return m
                  .elements(r)
                  .map((f) => ({
                    id: m.attr(f, 'Id'),
                    type: m.attr(f, 'Type'),
                    target: m.attr(f, 'Target'),
                    targetMode: m.attr(f, 'TargetMode'),
                  }));
              });
          },
          168: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.DocumentParser = e.autos = void 0);
            const r = c(120),
              m = c(109),
              f = c(59),
              n = c(472),
              i = c(488),
              y = c(172),
              h = c(149),
              d = c(320);
            e.autos = {
              shd: 'inherit',
              color: 'black',
              borderColor: 'black',
              highlight: 'transparent',
            };
            const p = [],
              g = {
                oMath: r.DomType.MmlMath,
                oMathPara: r.DomType.MmlMathParagraph,
                f: r.DomType.MmlFraction,
                func: r.DomType.MmlFunction,
                fName: r.DomType.MmlFunctionName,
                num: r.DomType.MmlNumerator,
                den: r.DomType.MmlDenominator,
                rad: r.DomType.MmlRadical,
                deg: r.DomType.MmlDegree,
                e: r.DomType.MmlBase,
                sSup: r.DomType.MmlSuperscript,
                sSub: r.DomType.MmlSubscript,
                sPre: r.DomType.MmlPreSubSuper,
                sup: r.DomType.MmlSuperArgument,
                sub: r.DomType.MmlSubArgument,
                d: r.DomType.MmlDelimiter,
                nary: r.DomType.MmlNary,
                eqArr: r.DomType.MmlEquationArray,
                lim: r.DomType.MmlLimit,
                limLow: r.DomType.MmlLimitLower,
                m: r.DomType.MmlMatrix,
                mr: r.DomType.MmlMatrixRow,
                box: r.DomType.MmlBox,
                bar: r.DomType.MmlBar,
                groupChr: r.DomType.MmlGroupChar,
              };
            e.DocumentParser = class {
              constructor(s) {
                this.options = Object.assign({ ignoreWidth: !1, debug: !1 }, s);
              }
              parseNotes(s, t, l) {
                var b = [];
                for (let k of n.default.elements(s, t)) {
                  const D = new l();
                  (D.id = n.default.attr(k, 'id')),
                    (D.noteType = n.default.attr(k, 'type')),
                    (D.children = this.parseBodyElements(k)),
                    b.push(D);
                }
                return b;
              }
              parseDocumentFile(s) {
                var t = n.default.element(s, 'body'),
                  l = n.default.element(s, 'background'),
                  b = n.default.element(t, 'sectPr');
                return {
                  type: r.DomType.Document,
                  children: this.parseBodyElements(t),
                  props: b ? (0, f.parseSectionProperties)(b, n.default) : {},
                  cssStyle: l ? this.parseBackground(l) : {},
                };
              }
              parseBackground(s) {
                var t = {},
                  l = P.colorAttr(s, 'color');
                return l && (t['background-color'] = l), t;
              }
              parseBodyElements(s) {
                var t = [];
                for (let l of n.default.elements(s))
                  switch (l.localName) {
                    case 'p':
                      t.push(this.parseParagraph(l));
                      break;
                    case 'tbl':
                      t.push(this.parseTable(l));
                      break;
                    case 'sdt':
                      t.push(...this.parseSdt(l, (b) => this.parseBodyElements(b)));
                  }
                return t;
              }
              parseStylesFile(s) {
                var t = [];
                return (
                  P.foreach(s, (l) => {
                    switch (l.localName) {
                      case 'style':
                        t.push(this.parseStyle(l));
                        break;
                      case 'docDefaults':
                        t.push(this.parseDefaultStyles(l));
                    }
                  }),
                  t
                );
              }
              parseDefaultStyles(s) {
                var t = { id: null, name: null, target: null, basedOn: null, styles: [] };
                return (
                  P.foreach(s, (l) => {
                    switch (l.localName) {
                      case 'rPrDefault':
                        var b = n.default.element(l, 'rPr');
                        b &&
                          t.styles.push({
                            target: 'span',
                            values: this.parseDefaultProperties(b, {}),
                          });
                        break;
                      case 'pPrDefault':
                        var k = n.default.element(l, 'pPr');
                        k &&
                          t.styles.push({
                            target: 'p',
                            values: this.parseDefaultProperties(k, {}),
                          });
                    }
                  }),
                  t
                );
              }
              parseStyle(s) {
                var t = {
                  id: n.default.attr(s, 'styleId'),
                  isDefault: n.default.boolAttr(s, 'default'),
                  name: null,
                  target: null,
                  basedOn: null,
                  styles: [],
                  linked: null,
                };
                switch (n.default.attr(s, 'type')) {
                  case 'paragraph':
                    t.target = 'p';
                    break;
                  case 'table':
                    t.target = 'table';
                    break;
                  case 'character':
                    t.target = 'span';
                }
                return (
                  P.foreach(s, (l) => {
                    switch (l.localName) {
                      case 'basedOn':
                        t.basedOn = n.default.attr(l, 'val');
                        break;
                      case 'name':
                        t.name = n.default.attr(l, 'val');
                        break;
                      case 'link':
                        t.linked = n.default.attr(l, 'val');
                        break;
                      case 'next':
                        t.next = n.default.attr(l, 'val');
                        break;
                      case 'aliases':
                        t.aliases = n.default.attr(l, 'val').split(',');
                        break;
                      case 'pPr':
                        t.styles.push({ target: 'p', values: this.parseDefaultProperties(l, {}) }),
                          (t.paragraphProps = (0, m.parseParagraphProperties)(l, n.default));
                        break;
                      case 'rPr':
                        t.styles.push({
                          target: 'span',
                          values: this.parseDefaultProperties(l, {}),
                        }),
                          (t.runProps = (0, i.parseRunProperties)(l, n.default));
                        break;
                      case 'tblPr':
                      case 'tcPr':
                        t.styles.push({ target: 'td', values: this.parseDefaultProperties(l, {}) });
                        break;
                      case 'tblStylePr':
                        for (let b of this.parseTableStyle(l)) t.styles.push(b);
                        break;
                      case 'rsid':
                      case 'qFormat':
                      case 'hidden':
                      case 'semiHidden':
                      case 'unhideWhenUsed':
                      case 'autoRedefine':
                      case 'uiPriority':
                        break;
                      default:
                        this.options.debug &&
                          console.warn(`DOCX: Unknown style element: ${l.localName}`);
                    }
                  }),
                  t
                );
              }
              parseTableStyle(s) {
                var t = [],
                  l = n.default.attr(s, 'type'),
                  b = '',
                  k = '';
                switch (l) {
                  case 'firstRow':
                    (k = '.first-row'), (b = 'tr.first-row td');
                    break;
                  case 'lastRow':
                    (k = '.last-row'), (b = 'tr.last-row td');
                    break;
                  case 'firstCol':
                    (k = '.first-col'), (b = 'td.first-col');
                    break;
                  case 'lastCol':
                    (k = '.last-col'), (b = 'td.last-col');
                    break;
                  case 'band1Vert':
                    (k = ':not(.no-vband)'), (b = 'td.odd-col');
                    break;
                  case 'band2Vert':
                    (k = ':not(.no-vband)'), (b = 'td.even-col');
                    break;
                  case 'band1Horz':
                    (k = ':not(.no-hband)'), (b = 'tr.odd-row');
                    break;
                  case 'band2Horz':
                    (k = ':not(.no-hband)'), (b = 'tr.even-row');
                    break;
                  default:
                    return [];
                }
                return (
                  P.foreach(s, (D) => {
                    switch (D.localName) {
                      case 'pPr':
                        t.push({
                          target: `${b} p`,
                          mod: k,
                          values: this.parseDefaultProperties(D, {}),
                        });
                        break;
                      case 'rPr':
                        t.push({
                          target: `${b} span`,
                          mod: k,
                          values: this.parseDefaultProperties(D, {}),
                        });
                        break;
                      case 'tblPr':
                      case 'tcPr':
                        t.push({ target: b, mod: k, values: this.parseDefaultProperties(D, {}) });
                    }
                  }),
                  t
                );
              }
              parseNumberingFile(s) {
                var t = [],
                  l = {},
                  b = [];
                return (
                  P.foreach(s, (k) => {
                    switch (k.localName) {
                      case 'abstractNum':
                        this.parseAbstractNumbering(k, b).forEach((T) => t.push(T));
                        break;
                      case 'numPicBullet':
                        b.push(this.parseNumberingPicBullet(k));
                        break;
                      case 'num':
                        var D = n.default.attr(k, 'numId'),
                          _ = n.default.elementAttr(k, 'abstractNumId', 'val');
                        l[_] = D;
                    }
                  }),
                  t.forEach((k) => (k.id = l[k.id])),
                  t
                );
              }
              parseNumberingPicBullet(s) {
                var t = n.default.element(s, 'pict'),
                  l = t && n.default.element(t, 'shape'),
                  b = l && n.default.element(l, 'imagedata');
                return b
                  ? {
                      id: n.default.intAttr(s, 'numPicBulletId'),
                      src: n.default.attr(b, 'id'),
                      style: n.default.attr(l, 'style'),
                    }
                  : null;
              }
              parseAbstractNumbering(s, t) {
                var l = [],
                  b = n.default.attr(s, 'abstractNumId');
                return (
                  P.foreach(s, (k) => {
                    k.localName === 'lvl' && l.push(this.parseNumberingLevel(b, k, t));
                  }),
                  l
                );
              }
              parseNumberingLevel(s, t, l) {
                var b = {
                  id: s,
                  level: n.default.intAttr(t, 'ilvl'),
                  start: 1,
                  pStyleName: void 0,
                  pStyle: {},
                  rStyle: {},
                  suff: 'tab',
                };
                return (
                  P.foreach(t, (k) => {
                    switch (k.localName) {
                      case 'start':
                        b.start = n.default.intAttr(k, 'val');
                        break;
                      case 'pPr':
                        this.parseDefaultProperties(k, b.pStyle);
                        break;
                      case 'rPr':
                        this.parseDefaultProperties(k, b.rStyle);
                        break;
                      case 'lvlPicBulletId':
                        var D = n.default.intAttr(k, 'val');
                        b.bullet = l.find((_) => _.id == D);
                        break;
                      case 'lvlText':
                        b.levelText = n.default.attr(k, 'val');
                        break;
                      case 'pStyle':
                        b.pStyleName = n.default.attr(k, 'val');
                        break;
                      case 'numFmt':
                        b.format = n.default.attr(k, 'val');
                        break;
                      case 'suff':
                        b.suff = n.default.attr(k, 'val');
                    }
                  }),
                  b
                );
              }
              parseSdt(s, t) {
                const l = n.default.element(s, 'sdtContent');
                return l ? t(l) : [];
              }
              parseInserted(s, t) {
                var l, b;
                return {
                  type: r.DomType.Inserted,
                  children:
                    (b = (l = t(s)) === null || l === void 0 ? void 0 : l.children) !== null &&
                    b !== void 0
                      ? b
                      : [],
                };
              }
              parseDeleted(s, t) {
                var l, b;
                return {
                  type: r.DomType.Deleted,
                  children:
                    (b = (l = t(s)) === null || l === void 0 ? void 0 : l.children) !== null &&
                    b !== void 0
                      ? b
                      : [],
                };
              }
              parseParagraph(s) {
                var t = { type: r.DomType.Paragraph, children: [] };
                for (let l of n.default.elements(s))
                  switch (l.localName) {
                    case 'pPr':
                      this.parseParagraphProperties(l, t);
                      break;
                    case 'r':
                      t.children.push(this.parseRun(l, t));
                      break;
                    case 'hyperlink':
                      t.children.push(this.parseHyperlink(l, t));
                      break;
                    case 'bookmarkStart':
                      t.children.push((0, y.parseBookmarkStart)(l, n.default));
                      break;
                    case 'bookmarkEnd':
                      t.children.push((0, y.parseBookmarkEnd)(l, n.default));
                      break;
                    case 'oMath':
                    case 'oMathPara':
                      t.children.push(this.parseMathElement(l));
                      break;
                    case 'sdt':
                      t.children.push(...this.parseSdt(l, (b) => this.parseParagraph(b).children));
                      break;
                    case 'ins':
                      t.children.push(this.parseInserted(l, (b) => this.parseParagraph(b)));
                      break;
                    case 'del':
                      t.children.push(this.parseDeleted(l, (b) => this.parseParagraph(b)));
                  }
                return t;
              }
              parseParagraphProperties(s, t) {
                this.parseDefaultProperties(s, (t.cssStyle = {}), null, (l) => {
                  if ((0, m.parseParagraphProperty)(l, t, n.default)) return !0;
                  switch (l.localName) {
                    case 'pStyle':
                      t.styleName = n.default.attr(l, 'val');
                      break;
                    case 'cnfStyle':
                      t.className = a.classNameOfCnfStyle(l);
                      break;
                    case 'framePr':
                      this.parseFrame(l, t);
                      break;
                    case 'rPr':
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseFrame(s, t) {
                n.default.attr(s, 'dropCap') == 'drop' && (t.cssStyle.float = 'left');
              }
              parseHyperlink(s, t) {
                var l = { type: r.DomType.Hyperlink, parent: t, children: [] },
                  b = n.default.attr(s, 'anchor'),
                  k = n.default.attr(s, 'id');
                return (
                  b && (l.href = '#' + b),
                  k && (l.id = k),
                  P.foreach(s, (D) => {
                    D.localName === 'r' && l.children.push(this.parseRun(D, l));
                  }),
                  l
                );
              }
              parseRun(s, t) {
                var l = { type: r.DomType.Run, parent: t, children: [] };
                return (
                  P.foreach(s, (b) => {
                    switch ((b = this.checkAlternateContent(b)).localName) {
                      case 't':
                        l.children.push({ type: r.DomType.Text, text: b.textContent });
                        break;
                      case 'delText':
                        l.children.push({ type: r.DomType.DeletedText, text: b.textContent });
                        break;
                      case 'fldSimple':
                        l.children.push({
                          type: r.DomType.SimpleField,
                          instruction: n.default.attr(b, 'instr'),
                          lock: n.default.boolAttr(b, 'lock', !1),
                          dirty: n.default.boolAttr(b, 'dirty', !1),
                        });
                        break;
                      case 'instrText':
                        (l.fieldRun = !0),
                          l.children.push({ type: r.DomType.Instruction, text: b.textContent });
                        break;
                      case 'fldChar':
                        (l.fieldRun = !0),
                          l.children.push({
                            type: r.DomType.ComplexField,
                            charType: n.default.attr(b, 'fldCharType'),
                            lock: n.default.boolAttr(b, 'lock', !1),
                            dirty: n.default.boolAttr(b, 'dirty', !1),
                          });
                        break;
                      case 'noBreakHyphen':
                        l.children.push({ type: r.DomType.NoBreakHyphen });
                        break;
                      case 'br':
                        l.children.push({
                          type: r.DomType.Break,
                          break: n.default.attr(b, 'type') || 'textWrapping',
                        });
                        break;
                      case 'lastRenderedPageBreak':
                        l.children.push({ type: r.DomType.Break, break: 'lastRenderedPageBreak' });
                        break;
                      case 'sym':
                        l.children.push({
                          type: r.DomType.Symbol,
                          font: n.default.attr(b, 'font'),
                          char: n.default.attr(b, 'char'),
                        });
                        break;
                      case 'tab':
                        l.children.push({ type: r.DomType.Tab });
                        break;
                      case 'footnoteReference':
                        l.children.push({
                          type: r.DomType.FootnoteReference,
                          id: n.default.attr(b, 'id'),
                        });
                        break;
                      case 'endnoteReference':
                        l.children.push({
                          type: r.DomType.EndnoteReference,
                          id: n.default.attr(b, 'id'),
                        });
                        break;
                      case 'drawing':
                        let k = this.parseDrawing(b);
                        k && (l.children = [k]);
                        break;
                      case 'pict':
                        l.children.push(this.parseVmlPicture(b));
                        break;
                      case 'rPr':
                        this.parseRunProperties(b, l);
                    }
                  }),
                  l
                );
              }
              parseMathElement(s) {
                const t = `${s.localName}Pr`,
                  l = { type: g[s.localName], children: [] };
                for (const k of n.default.elements(s))
                  if (g[k.localName]) l.children.push(this.parseMathElement(k));
                  else if (k.localName == 'r') {
                    var b = this.parseRun(k);
                    (b.type = r.DomType.MmlRun), l.children.push(b);
                  } else k.localName == t && (l.props = this.parseMathProperies(k));
                return l;
              }
              parseMathProperies(s) {
                const t = {};
                for (const l of n.default.elements(s))
                  switch (l.localName) {
                    case 'chr':
                      t.char = n.default.attr(l, 'val');
                      break;
                    case 'vertJc':
                      t.verticalJustification = n.default.attr(l, 'val');
                      break;
                    case 'pos':
                      t.position = n.default.attr(l, 'val');
                      break;
                    case 'degHide':
                      t.hideDegree = n.default.boolAttr(l, 'val');
                      break;
                    case 'begChr':
                      t.beginChar = n.default.attr(l, 'val');
                      break;
                    case 'endChr':
                      t.endChar = n.default.attr(l, 'val');
                  }
                return t;
              }
              parseRunProperties(s, t) {
                this.parseDefaultProperties(s, (t.cssStyle = {}), null, (l) => {
                  switch (l.localName) {
                    case 'rStyle':
                      t.styleName = n.default.attr(l, 'val');
                      break;
                    case 'vertAlign':
                      t.verticalAlign = a.valueOfVertAlign(l, !0);
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseVmlPicture(s) {
                const t = { type: r.DomType.VmlPicture, children: [] };
                for (const l of n.default.elements(s)) {
                  const b = (0, d.parseVmlElement)(l, this);
                  b && t.children.push(b);
                }
                return t;
              }
              checkAlternateContent(s) {
                var t;
                if (s.localName != 'AlternateContent') return s;
                var l = n.default.element(s, 'Choice');
                if (l) {
                  var b = n.default.attr(l, 'Requires'),
                    k = s.lookupNamespaceURI(b);
                  if (p.includes(k)) return l.firstElementChild;
                }
                return (t = n.default.element(s, 'Fallback')) === null || t === void 0
                  ? void 0
                  : t.firstElementChild;
              }
              parseDrawing(s) {
                for (var t of n.default.elements(s))
                  switch (t.localName) {
                    case 'inline':
                    case 'anchor':
                      return this.parseDrawingWrapper(t);
                  }
              }
              parseDrawingWrapper(s) {
                var t,
                  l = { type: r.DomType.Drawing, children: [], cssStyle: {} },
                  b = s.localName == 'anchor';
                let k = null,
                  D = n.default.boolAttr(s, 'simplePos'),
                  _ = { relative: 'page', align: 'left', offset: '0' },
                  T = { relative: 'page', align: 'top', offset: '0' };
                for (var o of n.default.elements(s))
                  switch (o.localName) {
                    case 'simplePos':
                      D &&
                        ((_.offset = n.default.lengthAttr(o, 'x', h.LengthUsage.Emu)),
                        (T.offset = n.default.lengthAttr(o, 'y', h.LengthUsage.Emu)));
                      break;
                    case 'extent':
                      (l.cssStyle.width = n.default.lengthAttr(o, 'cx', h.LengthUsage.Emu)),
                        (l.cssStyle.height = n.default.lengthAttr(o, 'cy', h.LengthUsage.Emu));
                      break;
                    case 'positionH':
                    case 'positionV':
                      if (!D) {
                        let q = o.localName == 'positionH' ? _ : T;
                        var R = n.default.element(o, 'align'),
                          V = n.default.element(o, 'posOffset');
                        (q.relative =
                          (t = n.default.attr(o, 'relativeFrom')) !== null && t !== void 0
                            ? t
                            : q.relative),
                          R && (q.align = R.textContent),
                          V && (q.offset = P.sizeValue(V, h.LengthUsage.Emu));
                      }
                      break;
                    case 'wrapTopAndBottom':
                      k = 'wrapTopAndBottom';
                      break;
                    case 'wrapNone':
                      k = 'wrapNone';
                      break;
                    case 'graphic':
                      var L = this.parseGraphic(o);
                      L && l.children.push(L);
                  }
                return (
                  k == 'wrapTopAndBottom'
                    ? ((l.cssStyle.display = 'block'),
                      _.align &&
                        ((l.cssStyle['text-align'] = _.align), (l.cssStyle.width = '100%')))
                    : k == 'wrapNone'
                    ? ((l.cssStyle.display = 'block'),
                      (l.cssStyle.position = 'relative'),
                      (l.cssStyle.width = '0px'),
                      (l.cssStyle.height = '0px'),
                      _.offset && (l.cssStyle.left = _.offset),
                      T.offset && (l.cssStyle.top = T.offset))
                    : !b ||
                      (_.align != 'left' && _.align != 'right') ||
                      (l.cssStyle.float = _.align),
                  l
                );
              }
              parseGraphic(s) {
                var t = n.default.element(s, 'graphicData');
                for (let l of n.default.elements(t))
                  if (l.localName === 'pic') return this.parsePicture(l);
                return null;
              }
              parsePicture(s) {
                var t = { type: r.DomType.Image, src: '', cssStyle: {} },
                  l = n.default.element(s, 'blipFill'),
                  b = n.default.element(l, 'blip');
                t.src = n.default.attr(b, 'embed');
                var k = n.default.element(s, 'spPr'),
                  D = n.default.element(k, 'xfrm');
                for (var _ of ((t.cssStyle.position = 'relative'), n.default.elements(D)))
                  switch (_.localName) {
                    case 'ext':
                      (t.cssStyle.width = n.default.lengthAttr(_, 'cx', h.LengthUsage.Emu)),
                        (t.cssStyle.height = n.default.lengthAttr(_, 'cy', h.LengthUsage.Emu));
                      break;
                    case 'off':
                      (t.cssStyle.left = n.default.lengthAttr(_, 'x', h.LengthUsage.Emu)),
                        (t.cssStyle.top = n.default.lengthAttr(_, 'y', h.LengthUsage.Emu));
                  }
                return t;
              }
              parseTable(s) {
                var t = { type: r.DomType.Table, children: [] };
                return (
                  P.foreach(s, (l) => {
                    switch (l.localName) {
                      case 'tr':
                        t.children.push(this.parseTableRow(l));
                        break;
                      case 'tblGrid':
                        t.columns = this.parseTableColumns(l);
                        break;
                      case 'tblPr':
                        this.parseTableProperties(l, t);
                    }
                  }),
                  t
                );
              }
              parseTableColumns(s) {
                var t = [];
                return (
                  P.foreach(s, (l) => {
                    l.localName === 'gridCol' && t.push({ width: n.default.lengthAttr(l, 'w') });
                  }),
                  t
                );
              }
              parseTableProperties(s, t) {
                switch (
                  ((t.cssStyle = {}),
                  (t.cellStyle = {}),
                  this.parseDefaultProperties(s, t.cssStyle, t.cellStyle, (l) => {
                    switch (l.localName) {
                      case 'tblStyle':
                        t.styleName = n.default.attr(l, 'val');
                        break;
                      case 'tblLook':
                        t.className = a.classNameOftblLook(l);
                        break;
                      case 'tblpPr':
                        this.parseTablePosition(l, t);
                        break;
                      case 'tblStyleColBandSize':
                        t.colBandSize = n.default.intAttr(l, 'val');
                        break;
                      case 'tblStyleRowBandSize':
                        t.rowBandSize = n.default.intAttr(l, 'val');
                        break;
                      default:
                        return !1;
                    }
                    return !0;
                  }),
                  t.cssStyle['text-align'])
                ) {
                  case 'center':
                    delete t.cssStyle['text-align'],
                      (t.cssStyle['margin-left'] = 'auto'),
                      (t.cssStyle['margin-right'] = 'auto');
                    break;
                  case 'right':
                    delete t.cssStyle['text-align'], (t.cssStyle['margin-left'] = 'auto');
                }
              }
              parseTablePosition(s, t) {
                var l = n.default.lengthAttr(s, 'topFromText'),
                  b = n.default.lengthAttr(s, 'bottomFromText'),
                  k = n.default.lengthAttr(s, 'rightFromText'),
                  D = n.default.lengthAttr(s, 'leftFromText');
                (t.cssStyle.float = 'left'),
                  (t.cssStyle['margin-bottom'] = a.addSize(t.cssStyle['margin-bottom'], b)),
                  (t.cssStyle['margin-left'] = a.addSize(t.cssStyle['margin-left'], D)),
                  (t.cssStyle['margin-right'] = a.addSize(t.cssStyle['margin-right'], k)),
                  (t.cssStyle['margin-top'] = a.addSize(t.cssStyle['margin-top'], l));
              }
              parseTableRow(s) {
                var t = { type: r.DomType.Row, children: [] };
                return (
                  P.foreach(s, (l) => {
                    switch (l.localName) {
                      case 'tc':
                        t.children.push(this.parseTableCell(l));
                        break;
                      case 'trPr':
                        this.parseTableRowProperties(l, t);
                    }
                  }),
                  t
                );
              }
              parseTableRowProperties(s, t) {
                t.cssStyle = this.parseDefaultProperties(s, {}, null, (l) => {
                  switch (l.localName) {
                    case 'cnfStyle':
                      t.className = a.classNameOfCnfStyle(l);
                      break;
                    case 'tblHeader':
                      t.isHeader = n.default.boolAttr(l, 'val');
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseTableCell(s) {
                var t = { type: r.DomType.Cell, children: [] };
                return (
                  P.foreach(s, (l) => {
                    switch (l.localName) {
                      case 'tbl':
                        t.children.push(this.parseTable(l));
                        break;
                      case 'p':
                        t.children.push(this.parseParagraph(l));
                        break;
                      case 'tcPr':
                        this.parseTableCellProperties(l, t);
                    }
                  }),
                  t
                );
              }
              parseTableCellProperties(s, t) {
                t.cssStyle = this.parseDefaultProperties(s, {}, null, (l) => {
                  var b;
                  switch (l.localName) {
                    case 'gridSpan':
                      t.span = n.default.intAttr(l, 'val', null);
                      break;
                    case 'vMerge':
                      t.verticalMerge =
                        (b = n.default.attr(l, 'val')) !== null && b !== void 0 ? b : 'continue';
                      break;
                    case 'cnfStyle':
                      t.className = a.classNameOfCnfStyle(l);
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
              parseDefaultProperties(s, t = null, l = null, b = null) {
                return (
                  (t = t || {}),
                  P.foreach(s, (k) => {
                    if (!(b != null && b(k)))
                      switch (k.localName) {
                        case 'jc':
                          t['text-align'] = a.valueOfJc(k);
                          break;
                        case 'textAlignment':
                          t['vertical-align'] = a.valueOfTextAlignment(k);
                          break;
                        case 'color':
                          t.color = P.colorAttr(k, 'val', null, e.autos.color);
                          break;
                        case 'sz':
                          t['font-size'] = t['min-height'] = n.default.lengthAttr(
                            k,
                            'val',
                            h.LengthUsage.FontSize,
                          );
                          break;
                        case 'shd':
                          t['background-color'] = P.colorAttr(k, 'fill', null, e.autos.shd);
                          break;
                        case 'highlight':
                          t['background-color'] = P.colorAttr(k, 'val', null, e.autos.highlight);
                          break;
                        case 'vertAlign':
                          break;
                        case 'position':
                          t.verticalAlign = n.default.lengthAttr(k, 'val', h.LengthUsage.FontSize);
                          break;
                        case 'tcW':
                          if (this.options.ignoreWidth) break;
                        case 'tblW':
                          t.width = a.valueOfSize(k, 'w');
                          break;
                        case 'trHeight':
                          this.parseTrHeight(k, t);
                          break;
                        case 'strike':
                          t['text-decoration'] = n.default.boolAttr(k, 'val', !0)
                            ? 'line-through'
                            : 'none';
                          break;
                        case 'b':
                          t['font-weight'] = n.default.boolAttr(k, 'val', !0) ? 'bold' : 'normal';
                          break;
                        case 'i':
                          t['font-style'] = n.default.boolAttr(k, 'val', !0) ? 'italic' : 'normal';
                          break;
                        case 'caps':
                          t['text-transform'] = n.default.boolAttr(k, 'val', !0)
                            ? 'uppercase'
                            : 'none';
                          break;
                        case 'smallCaps':
                          t['text-transform'] = n.default.boolAttr(k, 'val', !0)
                            ? 'lowercase'
                            : 'none';
                          break;
                        case 'u':
                          this.parseUnderline(k, t);
                          break;
                        case 'ind':
                        case 'tblInd':
                          this.parseIndentation(k, t);
                          break;
                        case 'rFonts':
                          this.parseFont(k, t);
                          break;
                        case 'tblBorders':
                          this.parseBorderProperties(k, l || t);
                          break;
                        case 'tblCellSpacing':
                          (t['border-spacing'] = a.valueOfMargin(k)),
                            (t['border-collapse'] = 'separate');
                          break;
                        case 'pBdr':
                          this.parseBorderProperties(k, t);
                          break;
                        case 'bdr':
                          t.border = a.valueOfBorder(k);
                          break;
                        case 'tcBorders':
                          this.parseBorderProperties(k, t);
                          break;
                        case 'vanish':
                          n.default.boolAttr(k, 'val', !0) && (t.display = 'none');
                          break;
                        case 'kern':
                        case 'noWrap':
                          break;
                        case 'tblCellMar':
                        case 'tcMar':
                          this.parseMarginProperties(k, l || t);
                          break;
                        case 'tblLayout':
                          t['table-layout'] = a.valueOfTblLayout(k);
                          break;
                        case 'vAlign':
                          t['vertical-align'] = a.valueOfTextAlignment(k);
                          break;
                        case 'spacing':
                          s.localName == 'pPr' && this.parseSpacing(k, t);
                          break;
                        case 'wordWrap':
                          n.default.boolAttr(k, 'val') && (t['overflow-wrap'] = 'break-word');
                          break;
                        case 'suppressAutoHyphens':
                          t.hyphens = n.default.boolAttr(k, 'val', !0) ? 'none' : 'auto';
                          break;
                        case 'lang':
                          t.$lang = n.default.attr(k, 'val');
                          break;
                        case 'bCs':
                        case 'iCs':
                        case 'szCs':
                        case 'tabs':
                        case 'outlineLvl':
                        case 'contextualSpacing':
                        case 'tblStyleColBandSize':
                        case 'tblStyleRowBandSize':
                        case 'webHidden':
                        case 'pageBreakBefore':
                        case 'suppressLineNumbers':
                        case 'keepLines':
                        case 'keepNext':
                        case 'widowControl':
                        case 'bidi':
                        case 'rtl':
                        case 'noProof':
                          break;
                        default:
                          this.options.debug &&
                            console.warn(
                              `DOCX: Unknown document element: ${s.localName}.${k.localName}`,
                            );
                      }
                  }),
                  t
                );
              }
              parseUnderline(s, t) {
                var l = n.default.attr(s, 'val');
                if (l != null) {
                  switch (l) {
                    case 'dash':
                    case 'dashDotDotHeavy':
                    case 'dashDotHeavy':
                    case 'dashedHeavy':
                    case 'dashLong':
                    case 'dashLongHeavy':
                    case 'dotDash':
                    case 'dotDotDash':
                      t['text-decoration-style'] = 'dashed';
                      break;
                    case 'dotted':
                    case 'dottedHeavy':
                      t['text-decoration-style'] = 'dotted';
                      break;
                    case 'double':
                      t['text-decoration-style'] = 'double';
                      break;
                    case 'single':
                    case 'thick':
                    case 'words':
                      t['text-decoration'] = 'underline';
                      break;
                    case 'wave':
                    case 'wavyDouble':
                    case 'wavyHeavy':
                      t['text-decoration-style'] = 'wavy';
                      break;
                    case 'none':
                      t['text-decoration'] = 'none';
                  }
                  var b = P.colorAttr(s, 'color');
                  b && (t['text-decoration-color'] = b);
                }
              }
              parseFont(s, t) {
                var l = [n.default.attr(s, 'ascii'), a.themeValue(s, 'asciiTheme')]
                  .filter((b) => b)
                  .join(', ');
                l.length > 0 && (t['font-family'] = l);
              }
              parseIndentation(s, t) {
                var l = n.default.lengthAttr(s, 'firstLine'),
                  b = n.default.lengthAttr(s, 'hanging'),
                  k = n.default.lengthAttr(s, 'left'),
                  D = n.default.lengthAttr(s, 'start'),
                  _ = n.default.lengthAttr(s, 'right'),
                  T = n.default.lengthAttr(s, 'end');
                l && (t['text-indent'] = l),
                  b && (t['text-indent'] = `-${b}`),
                  (k || D) && (t['margin-left'] = k || D),
                  (_ || T) && (t['margin-right'] = _ || T);
              }
              parseSpacing(s, t) {
                var l = n.default.lengthAttr(s, 'before'),
                  b = n.default.lengthAttr(s, 'after'),
                  k = n.default.intAttr(s, 'line', null),
                  D = n.default.attr(s, 'lineRule');
                if ((l && (t['margin-top'] = l), b && (t['margin-bottom'] = b), k !== null))
                  switch (D) {
                    case 'auto':
                      t['line-height'] = `${(k / 240).toFixed(2)}`;
                      break;
                    case 'atLeast':
                      t['line-height'] = `calc(100% + ${k / 20}pt)`;
                      break;
                    default:
                      t['line-height'] = t['min-height'] = k / 20 + 'pt';
                  }
              }
              parseMarginProperties(s, t) {
                P.foreach(s, (l) => {
                  switch (l.localName) {
                    case 'left':
                      t['padding-left'] = a.valueOfMargin(l);
                      break;
                    case 'right':
                      t['padding-right'] = a.valueOfMargin(l);
                      break;
                    case 'top':
                      t['padding-top'] = a.valueOfMargin(l);
                      break;
                    case 'bottom':
                      t['padding-bottom'] = a.valueOfMargin(l);
                  }
                });
              }
              parseTrHeight(s, t) {
                n.default.attr(s, 'hRule'), (t.height = n.default.lengthAttr(s, 'val'));
              }
              parseBorderProperties(s, t) {
                P.foreach(s, (l) => {
                  switch (l.localName) {
                    case 'start':
                    case 'left':
                      t['border-left'] = a.valueOfBorder(l);
                      break;
                    case 'end':
                    case 'right':
                      t['border-right'] = a.valueOfBorder(l);
                      break;
                    case 'top':
                      t['border-top'] = a.valueOfBorder(l);
                      break;
                    case 'bottom':
                      t['border-bottom'] = a.valueOfBorder(l);
                  }
                });
              }
            };
            const x = [
              'black',
              'blue',
              'cyan',
              'darkBlue',
              'darkCyan',
              'darkGray',
              'darkGreen',
              'darkMagenta',
              'darkRed',
              'darkYellow',
              'green',
              'lightGray',
              'magenta',
              'none',
              'red',
              'white',
              'yellow',
            ];
            class P {
              static foreach(t, l) {
                for (var b = 0; b < t.childNodes.length; b++) {
                  let k = t.childNodes[b];
                  k.nodeType == Node.ELEMENT_NODE && l(k);
                }
              }
              static colorAttr(t, l, b = null, k = 'black') {
                var D = n.default.attr(t, l);
                if (D) return D == 'auto' ? k : x.includes(D) ? D : `#${D}`;
                var _ = n.default.attr(t, 'themeColor');
                return _ ? `var(--docx-${_}-color)` : b;
              }
              static sizeValue(t, l = h.LengthUsage.Dxa) {
                return (0, h.convertLength)(t.textContent, l);
              }
            }
            class a {
              static themeValue(t, l) {
                var b = n.default.attr(t, l);
                return b ? `var(--docx-${b}-font)` : null;
              }
              static valueOfSize(t, l) {
                var b = h.LengthUsage.Dxa;
                switch (n.default.attr(t, 'type')) {
                  case 'dxa':
                    break;
                  case 'pct':
                    b = h.LengthUsage.Percent;
                    break;
                  case 'auto':
                    return 'auto';
                }
                return n.default.lengthAttr(t, l, b);
              }
              static valueOfMargin(t) {
                return n.default.lengthAttr(t, 'w');
              }
              static valueOfBorder(t) {
                if (n.default.attr(t, 'val') == 'nil') return 'none';
                var l = P.colorAttr(t, 'color');
                return `${n.default.lengthAttr(t, 'sz', h.LengthUsage.Border)} solid ${
                  l == 'auto' ? e.autos.borderColor : l
                }`;
              }
              static valueOfTblLayout(t) {
                return n.default.attr(t, 'val') == 'fixed' ? 'fixed' : 'auto';
              }
              static classNameOfCnfStyle(t) {
                const l = n.default.attr(t, 'val');
                return [
                  'first-row',
                  'last-row',
                  'first-col',
                  'last-col',
                  'odd-col',
                  'even-col',
                  'odd-row',
                  'even-row',
                  'ne-cell',
                  'nw-cell',
                  'se-cell',
                  'sw-cell',
                ]
                  .filter((b, k) => l[k] == '1')
                  .join(' ');
              }
              static valueOfJc(t) {
                var l = n.default.attr(t, 'val');
                switch (l) {
                  case 'start':
                  case 'left':
                    return 'left';
                  case 'center':
                    return 'center';
                  case 'end':
                  case 'right':
                    return 'right';
                  case 'both':
                    return 'justify';
                }
                return l;
              }
              static valueOfVertAlign(t, l = !1) {
                var b = n.default.attr(t, 'val');
                switch (b) {
                  case 'subscript':
                    return 'sub';
                  case 'superscript':
                    return l ? 'sup' : 'super';
                }
                return l ? null : b;
              }
              static valueOfTextAlignment(t) {
                var l = n.default.attr(t, 'val');
                switch (l) {
                  case 'auto':
                  case 'baseline':
                    return 'baseline';
                  case 'top':
                    return 'top';
                  case 'center':
                    return 'middle';
                  case 'bottom':
                    return 'bottom';
                }
                return l;
              }
              static addSize(t, l) {
                return t == null ? l : l == null ? t : `calc(${t} + ${l})`;
              }
              static classNameOftblLook(t) {
                const l = n.default.hexAttr(t, 'val', 0);
                let b = '';
                return (
                  (n.default.boolAttr(t, 'firstRow') || 32 & l) && (b += ' first-row'),
                  (n.default.boolAttr(t, 'lastRow') || 64 & l) && (b += ' last-row'),
                  (n.default.boolAttr(t, 'firstColumn') || 128 & l) && (b += ' first-col'),
                  (n.default.boolAttr(t, 'lastColumn') || 256 & l) && (b += ' last-col'),
                  (n.default.boolAttr(t, 'noHBand') || 512 & l) && (b += ' no-hband'),
                  (n.default.boolAttr(t, 'noVBand') || 1024 & l) && (b += ' no-vband'),
                  b.trim()
                );
              }
            }
          },
          162: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.CorePropsPart = void 0);
            const r = c(530),
              m = c(614);
            class f extends r.Part {
              parseXml(i) {
                this.props = (0, m.parseCoreProps)(i, this._package.xmlParser);
              }
            }
            e.CorePropsPart = f;
          },
          614: (v, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseCoreProps = void 0),
              (e.parseCoreProps = function (c, r) {
                const m = {};
                for (let f of r.elements(c))
                  switch (f.localName) {
                    case 'title':
                      m.title = f.textContent;
                      break;
                    case 'description':
                      m.description = f.textContent;
                      break;
                    case 'subject':
                      m.subject = f.textContent;
                      break;
                    case 'creator':
                      m.creator = f.textContent;
                      break;
                    case 'keywords':
                      m.keywords = f.textContent;
                      break;
                    case 'language':
                      m.language = f.textContent;
                      break;
                    case 'lastModifiedBy':
                      m.lastModifiedBy = f.textContent;
                      break;
                    case 'revision':
                      f.textContent && (m.revision = parseInt(f.textContent));
                  }
                return m;
              });
          },
          177: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.CustomPropsPart = void 0);
            const r = c(530),
              m = c(821);
            class f extends r.Part {
              parseXml(i) {
                this.props = (0, m.parseCustomProps)(i, this._package.xmlParser);
              }
            }
            e.CustomPropsPart = f;
          },
          821: (v, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseCustomProps = void 0),
              (e.parseCustomProps = function (c, r) {
                return r.elements(c, 'property').map((m) => {
                  const f = m.firstChild;
                  return {
                    formatId: r.attr(m, 'fmtid'),
                    name: r.attr(m, 'name'),
                    type: f.nodeName,
                    value: f.textContent,
                  };
                });
              });
          },
          665: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.ExtendedPropsPart = void 0);
            const r = c(530),
              m = c(668);
            class f extends r.Part {
              parseXml(i) {
                this.props = (0, m.parseExtendedProps)(i, this._package.xmlParser);
              }
            }
            e.ExtendedPropsPart = f;
          },
          668: (v, e) => {
            function c(r) {
              if (r !== void 0) return parseInt(r);
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseExtendedProps = void 0),
              (e.parseExtendedProps = function (r, m) {
                const f = {};
                for (let n of m.elements(r))
                  switch (n.localName) {
                    case 'Template':
                      f.template = n.textContent;
                      break;
                    case 'Pages':
                      f.pages = c(n.textContent);
                      break;
                    case 'Words':
                      f.words = c(n.textContent);
                      break;
                    case 'Characters':
                      f.characters = c(n.textContent);
                      break;
                    case 'Application':
                      f.application = n.textContent;
                      break;
                    case 'Lines':
                      f.lines = c(n.textContent);
                      break;
                    case 'Paragraphs':
                      f.paragraphs = c(n.textContent);
                      break;
                    case 'Company':
                      f.company = n.textContent;
                      break;
                    case 'AppVersion':
                      f.appVersion = n.textContent;
                  }
                return f;
              });
          },
          172: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseBookmarkEnd = e.parseBookmarkStart = void 0);
            const r = c(120);
            (e.parseBookmarkStart = function (m, f) {
              return {
                type: r.DomType.BookmarkStart,
                id: f.attr(m, 'id'),
                name: f.attr(m, 'name'),
                colFirst: f.intAttr(m, 'colFirst'),
                colLast: f.intAttr(m, 'colLast'),
              };
            }),
              (e.parseBookmarkEnd = function (m, f) {
                return { type: r.DomType.BookmarkEnd, id: f.attr(m, 'id') };
              });
          },
          191: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseBorders = e.parseBorder = void 0);
            const r = c(149);
            function m(f, n) {
              return {
                type: n.attr(f, 'val'),
                color: n.attr(f, 'color'),
                size: n.lengthAttr(f, 'sz', r.LengthUsage.Border),
                offset: n.lengthAttr(f, 'space', r.LengthUsage.Point),
                frame: n.boolAttr(f, 'frame'),
                shadow: n.boolAttr(f, 'shadow'),
              };
            }
            (e.parseBorder = m),
              (e.parseBorders = function (f, n) {
                var i = {};
                for (let y of n.elements(f))
                  switch (y.localName) {
                    case 'left':
                      i.left = m(y, n);
                      break;
                    case 'top':
                      i.top = m(y, n);
                      break;
                    case 'right':
                      i.right = m(y, n);
                      break;
                    case 'bottom':
                      i.bottom = m(y, n);
                  }
                return i;
              });
          },
          149: (v, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseCommonProperty =
                e.convertPercentage =
                e.convertBoolean =
                e.convertLength =
                e.LengthUsage =
                e.ns =
                  void 0),
              (e.ns = {
                wordml: 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
                drawingml: 'http://schemas.openxmlformats.org/drawingml/2006/main',
                picture: 'http://schemas.openxmlformats.org/drawingml/2006/picture',
                compatibility: 'http://schemas.openxmlformats.org/markup-compatibility/2006',
                math: 'http://schemas.openxmlformats.org/officeDocument/2006/math',
              }),
              (e.LengthUsage = {
                Dxa: { mul: 0.05, unit: 'pt' },
                Emu: { mul: 7874015748031496e-20, unit: 'pt' },
                FontSize: { mul: 0.5, unit: 'pt' },
                Border: { mul: 0.125, unit: 'pt' },
                Point: { mul: 1, unit: 'pt' },
                Percent: { mul: 0.02, unit: '%' },
                LineHeight: { mul: 0.004166666666666667, unit: '' },
                VmlEmu: { mul: 7874015748031496e-20, unit: '' },
              }),
              (e.convertLength = function (c, r = e.LengthUsage.Dxa) {
                return c == null || /.+(p[xt]|[%])$/.test(c)
                  ? c
                  : `${(parseInt(c) * r.mul).toFixed(2)}${r.unit}`;
              }),
              (e.convertBoolean = function (c, r = !1) {
                switch (c) {
                  case '1':
                  case 'on':
                  case 'true':
                    return !0;
                  case '0':
                  case 'off':
                  case 'false':
                    return !1;
                  default:
                    return r;
                }
              }),
              (e.convertPercentage = function (c) {
                return c ? parseInt(c) / 100 : null;
              }),
              (e.parseCommonProperty = function (c, r, m) {
                if (c.namespaceURI != e.ns.wordml) return !1;
                switch (c.localName) {
                  case 'color':
                    r.color = m.attr(c, 'val');
                    break;
                  case 'sz':
                    r.fontSize = m.lengthAttr(c, 'val', e.LengthUsage.FontSize);
                    break;
                  default:
                    return !1;
                }
                return !0;
              });
          },
          448: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.DocumentPart = void 0);
            const r = c(530);
            class m extends r.Part {
              constructor(n, i, y) {
                super(n, i), (this._documentParser = y);
              }
              parseXml(n) {
                this.body = this._documentParser.parseDocumentFile(n);
              }
            }
            e.DocumentPart = m;
          },
          120: (v, e) => {
            var c;
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.OpenXmlElementBase = e.DomType = void 0),
              (function (r) {
                (r.Document = 'document'),
                  (r.Paragraph = 'paragraph'),
                  (r.Run = 'run'),
                  (r.Break = 'break'),
                  (r.NoBreakHyphen = 'noBreakHyphen'),
                  (r.Table = 'table'),
                  (r.Row = 'row'),
                  (r.Cell = 'cell'),
                  (r.Hyperlink = 'hyperlink'),
                  (r.Drawing = 'drawing'),
                  (r.Image = 'image'),
                  (r.Text = 'text'),
                  (r.Tab = 'tab'),
                  (r.Symbol = 'symbol'),
                  (r.BookmarkStart = 'bookmarkStart'),
                  (r.BookmarkEnd = 'bookmarkEnd'),
                  (r.Footer = 'footer'),
                  (r.Header = 'header'),
                  (r.FootnoteReference = 'footnoteReference'),
                  (r.EndnoteReference = 'endnoteReference'),
                  (r.Footnote = 'footnote'),
                  (r.Endnote = 'endnote'),
                  (r.SimpleField = 'simpleField'),
                  (r.ComplexField = 'complexField'),
                  (r.Instruction = 'instruction'),
                  (r.VmlPicture = 'vmlPicture'),
                  (r.MmlMath = 'mmlMath'),
                  (r.MmlMathParagraph = 'mmlMathParagraph'),
                  (r.MmlFraction = 'mmlFraction'),
                  (r.MmlFunction = 'mmlFunction'),
                  (r.MmlFunctionName = 'mmlFunctionName'),
                  (r.MmlNumerator = 'mmlNumerator'),
                  (r.MmlDenominator = 'mmlDenominator'),
                  (r.MmlRadical = 'mmlRadical'),
                  (r.MmlBase = 'mmlBase'),
                  (r.MmlDegree = 'mmlDegree'),
                  (r.MmlSuperscript = 'mmlSuperscript'),
                  (r.MmlSubscript = 'mmlSubscript'),
                  (r.MmlPreSubSuper = 'mmlPreSubSuper'),
                  (r.MmlSubArgument = 'mmlSubArgument'),
                  (r.MmlSuperArgument = 'mmlSuperArgument'),
                  (r.MmlNary = 'mmlNary'),
                  (r.MmlDelimiter = 'mmlDelimiter'),
                  (r.MmlRun = 'mmlRun'),
                  (r.MmlEquationArray = 'mmlEquationArray'),
                  (r.MmlLimit = 'mmlLimit'),
                  (r.MmlLimitLower = 'mmlLimitLower'),
                  (r.MmlMatrix = 'mmlMatrix'),
                  (r.MmlMatrixRow = 'mmlMatrixRow'),
                  (r.MmlBox = 'mmlBox'),
                  (r.MmlBar = 'mmlBar'),
                  (r.MmlGroupChar = 'mmlGroupChar'),
                  (r.VmlElement = 'vmlElement'),
                  (r.Inserted = 'inserted'),
                  (r.Deleted = 'deleted'),
                  (r.DeletedText = 'deletedText');
              })(c || (e.DomType = c = {})),
              (e.OpenXmlElementBase = class {
                constructor() {
                  (this.children = []), (this.cssStyle = {});
                }
              });
          },
          931: (v, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseLineSpacing = void 0),
              (e.parseLineSpacing = function (c, r) {
                return {
                  before: r.lengthAttr(c, 'before'),
                  after: r.lengthAttr(c, 'after'),
                  line: r.intAttr(c, 'line'),
                  lineRule: r.attr(c, 'lineRule'),
                };
              });
          },
          109: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseNumbering =
                e.parseTabs =
                e.parseParagraphProperty =
                e.parseParagraphProperties =
                  void 0);
            const r = c(149),
              m = c(59),
              f = c(931),
              n = c(488);
            function i(d, p, g) {
              if (d.namespaceURI != r.ns.wordml) return !1;
              if ((0, r.parseCommonProperty)(d, p, g)) return !0;
              switch (d.localName) {
                case 'tabs':
                  p.tabs = y(d, g);
                  break;
                case 'sectPr':
                  p.sectionProps = (0, m.parseSectionProperties)(d, g);
                  break;
                case 'numPr':
                  p.numbering = h(d, g);
                  break;
                case 'spacing':
                  return (p.lineSpacing = (0, f.parseLineSpacing)(d, g)), !1;
                case 'textAlignment':
                  return (p.textAlignment = g.attr(d, 'val')), !1;
                case 'keepNext':
                  p.keepLines = g.boolAttr(d, 'val', !0);
                  break;
                case 'keepNext':
                  p.keepNext = g.boolAttr(d, 'val', !0);
                  break;
                case 'pageBreakBefore':
                  p.pageBreakBefore = g.boolAttr(d, 'val', !0);
                  break;
                case 'outlineLvl':
                  p.outlineLevel = g.intAttr(d, 'val');
                  break;
                case 'pStyle':
                  p.styleName = g.attr(d, 'val');
                  break;
                case 'rPr':
                  p.runProps = (0, n.parseRunProperties)(d, g);
                  break;
                default:
                  return !1;
              }
              return !0;
            }
            function y(d, p) {
              return p
                .elements(d, 'tab')
                .map((g) => ({
                  position: p.lengthAttr(g, 'pos'),
                  leader: p.attr(g, 'leader'),
                  style: p.attr(g, 'val'),
                }));
            }
            function h(d, p) {
              var g = {};
              for (let x of p.elements(d))
                switch (x.localName) {
                  case 'numId':
                    g.id = p.attr(x, 'val');
                    break;
                  case 'ilvl':
                    g.level = p.intAttr(x, 'val');
                }
              return g;
            }
            (e.parseParagraphProperties = function (d, p) {
              let g = {};
              for (let x of p.elements(d)) i(x, g, p);
              return g;
            }),
              (e.parseParagraphProperty = i),
              (e.parseTabs = y),
              (e.parseNumbering = h);
          },
          488: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseRunProperty = e.parseRunProperties = void 0);
            const r = c(149);
            function m(f, n, i) {
              return !!(0, r.parseCommonProperty)(f, n, i);
            }
            (e.parseRunProperties = function (f, n) {
              let i = {};
              for (let y of n.elements(f)) m(y, i, n);
              return i;
            }),
              (e.parseRunProperty = m);
          },
          59: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseSectionProperties = e.SectionType = void 0);
            const r = c(472),
              m = c(191);
            var f;
            function n(h, d) {
              return {
                numberOfColumns: d.intAttr(h, 'num'),
                space: d.lengthAttr(h, 'space'),
                separator: d.boolAttr(h, 'sep'),
                equalWidth: d.boolAttr(h, 'equalWidth', !0),
                columns: d
                  .elements(h, 'col')
                  .map((p) => ({ width: d.lengthAttr(p, 'w'), space: d.lengthAttr(p, 'space') })),
              };
            }
            function i(h, d) {
              return {
                chapSep: d.attr(h, 'chapSep'),
                chapStyle: d.attr(h, 'chapStyle'),
                format: d.attr(h, 'fmt'),
                start: d.intAttr(h, 'start'),
              };
            }
            function y(h, d) {
              return { id: d.attr(h, 'id'), type: d.attr(h, 'type') };
            }
            (function (h) {
              (h.Continuous = 'continuous'),
                (h.NextPage = 'nextPage'),
                (h.NextColumn = 'nextColumn'),
                (h.EvenPage = 'evenPage'),
                (h.OddPage = 'oddPage');
            })(f || (e.SectionType = f = {})),
              (e.parseSectionProperties = function (h, d = r.default) {
                var p,
                  g,
                  x = {};
                for (let P of d.elements(h))
                  switch (P.localName) {
                    case 'pgSz':
                      x.pageSize = {
                        width: d.lengthAttr(P, 'w'),
                        height: d.lengthAttr(P, 'h'),
                        orientation: d.attr(P, 'orient'),
                      };
                      break;
                    case 'type':
                      x.type = d.attr(P, 'val');
                      break;
                    case 'pgMar':
                      x.pageMargins = {
                        left: d.lengthAttr(P, 'left'),
                        right: d.lengthAttr(P, 'right'),
                        top: d.lengthAttr(P, 'top'),
                        bottom: d.lengthAttr(P, 'bottom'),
                        header: d.lengthAttr(P, 'header'),
                        footer: d.lengthAttr(P, 'footer'),
                        gutter: d.lengthAttr(P, 'gutter'),
                      };
                      break;
                    case 'cols':
                      x.columns = n(P, d);
                      break;
                    case 'headerReference':
                      ((p = x.headerRefs) !== null && p !== void 0 ? p : (x.headerRefs = [])).push(
                        y(P, d),
                      );
                      break;
                    case 'footerReference':
                      ((g = x.footerRefs) !== null && g !== void 0 ? g : (x.footerRefs = [])).push(
                        y(P, d),
                      );
                      break;
                    case 'titlePg':
                      x.titlePage = d.boolAttr(P, 'val', !0);
                      break;
                    case 'pgBorders':
                      x.pageBorders = (0, m.parseBorders)(P, d);
                      break;
                    case 'pgNumType':
                      x.pageNumber = i(P, d);
                  }
                return x;
              });
          },
          667: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.renderAsync = e.praseAsync = e.defaultOptions = void 0);
            const r = c(213),
              m = c(168),
              f = c(932);
            (e.defaultOptions = {
              ignoreHeight: !1,
              ignoreWidth: !1,
              ignoreFonts: !1,
              breakPages: !0,
              debug: !1,
              experimental: !1,
              className: 'docx',
              inWrapper: !0,
              trimXmlDeclaration: !0,
              ignoreLastRenderedPageBreak: !0,
              renderHeaders: !0,
              renderFooters: !0,
              renderFootnotes: !0,
              renderEndnotes: !0,
              useBase64URL: !1,
              useMathMLPolyfill: !1,
              renderChanges: !1,
            }),
              (e.praseAsync = function (n, i = null) {
                const y = Object.assign(Object.assign({}, e.defaultOptions), i);
                return r.WordDocument.load(n, new m.DocumentParser(y), y);
              }),
              (e.renderAsync = function (n, i, y = null, h = null) {
                return ue(this, null, function* () {
                  const d = Object.assign(Object.assign({}, e.defaultOptions), h),
                    p = new f.HtmlRenderer(window.document),
                    g = yield r.WordDocument.load(n, new m.DocumentParser(d), d);
                  return p.render(g, i, y, d), g;
                });
              });
          },
          380: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.FontTablePart = void 0);
            const r = c(530),
              m = c(512);
            class f extends r.Part {
              parseXml(i) {
                this.fonts = (0, m.parseFonts)(i, this._package.xmlParser);
              }
            }
            e.FontTablePart = f;
          },
          512: (v, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseEmbedFontRef = e.parseFont = e.parseFonts = void 0);
            const c = {
              embedRegular: 'regular',
              embedBold: 'bold',
              embedItalic: 'italic',
              embedBoldItalic: 'boldItalic',
            };
            function r(f, n) {
              let i = { name: n.attr(f, 'name'), embedFontRefs: [] };
              for (let y of n.elements(f))
                switch (y.localName) {
                  case 'family':
                    i.family = n.attr(y, 'val');
                    break;
                  case 'altName':
                    i.altName = n.attr(y, 'val');
                    break;
                  case 'embedRegular':
                  case 'embedBold':
                  case 'embedItalic':
                  case 'embedBoldItalic':
                    i.embedFontRefs.push(m(y, n));
                }
              return i;
            }
            function m(f, n) {
              return { id: n.attr(f, 'id'), key: n.attr(f, 'fontKey'), type: c[f.localName] };
            }
            (e.parseFonts = function (f, n) {
              return n.elements(f).map((i) => r(i, n));
            }),
              (e.parseFont = r),
              (e.parseEmbedFontRef = m);
          },
          984: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.WmlFooter = e.WmlHeader = void 0);
            const r = c(120);
            class m extends r.OpenXmlElementBase {
              constructor() {
                super(...arguments), (this.type = r.DomType.Header);
              }
            }
            e.WmlHeader = m;
            class f extends r.OpenXmlElementBase {
              constructor() {
                super(...arguments), (this.type = r.DomType.Footer);
              }
            }
            e.WmlFooter = f;
          },
          985: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.FooterPart = e.HeaderPart = e.BaseHeaderFooterPart = void 0);
            const r = c(530),
              m = c(984);
            class f extends r.Part {
              constructor(i, y, h) {
                super(i, y), (this._documentParser = h);
              }
              parseXml(i) {
                (this.rootElement = this.createRootElement()),
                  (this.rootElement.children = this._documentParser.parseBodyElements(i));
              }
            }
            (e.BaseHeaderFooterPart = f),
              (e.HeaderPart = class extends f {
                createRootElement() {
                  return new m.WmlHeader();
                }
              }),
              (e.FooterPart = class extends f {
                createRootElement() {
                  return new m.WmlFooter();
                }
              });
          },
          932: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.HtmlRenderer = void 0);
            const r = c(120),
              m = c(593),
              f = c(630),
              n = c(438),
              i = 'http://www.w3.org/1998/Math/MathML';
            function y(a, s, t) {
              return d(void 0, a, s, t);
            }
            function h(a, s, t) {
              return d('http://www.w3.org/2000/svg', a, s, t);
            }
            function d(a, s, t, l) {
              var b = a ? document.createElementNS(a, s) : document.createElement(s);
              return Object.assign(b, t), l && g(b, l), b;
            }
            function p(a) {
              a.innerHTML = '';
            }
            function g(a, s) {
              s.forEach((t) => a.appendChild((0, m.isString)(t) ? document.createTextNode(t) : t));
            }
            function x(a) {
              return y('style', { innerHTML: a });
            }
            function P(a, s) {
              a.appendChild(document.createComment(s));
            }
            e.HtmlRenderer = class {
              constructor(a) {
                (this.htmlDocument = a),
                  (this.className = 'docx'),
                  (this.styleMap = {}),
                  (this.currentPart = null),
                  (this.tableVerticalMerges = []),
                  (this.currentVerticalMerge = null),
                  (this.tableCellPositions = []),
                  (this.currentCellPosition = null),
                  (this.footnoteMap = {}),
                  (this.endnoteMap = {}),
                  (this.currentEndnoteIds = []),
                  (this.usedHederFooterParts = []),
                  (this.currentTabs = []),
                  (this.tabsTimeout = 0),
                  (this.createElement = y);
              }
              render(a, s, t = null, l) {
                var b;
                (this.document = a),
                  (this.options = l),
                  (this.className = l.className),
                  (this.rootSelector = l.inWrapper ? `.${this.className}-wrapper` : ':root'),
                  (this.styleMap = null),
                  p((t = t || s)),
                  p(s),
                  P(t, 'docxjs library predefined styles'),
                  t.appendChild(this.renderDefaultStyle()),
                  !window.MathMLElement &&
                    l.useMathMLPolyfill &&
                    (P(t, 'docxjs mathml polyfill styles'), t.appendChild(x(n.default))),
                  a.themePart &&
                    (P(t, 'docxjs document theme values'), this.renderTheme(a.themePart, t)),
                  a.stylesPart != null &&
                    ((this.styleMap = this.processStyles(a.stylesPart.styles)),
                    P(t, 'docxjs document styles'),
                    t.appendChild(this.renderStyles(a.stylesPart.styles))),
                  a.numberingPart &&
                    (this.prodessNumberings(a.numberingPart.domNumberings),
                    P(t, 'docxjs document numbering styles'),
                    t.appendChild(this.renderNumbering(a.numberingPart.domNumberings, t))),
                  a.footnotesPart &&
                    (this.footnoteMap = (0, m.keyBy)(a.footnotesPart.notes, (D) => D.id)),
                  a.endnotesPart &&
                    (this.endnoteMap = (0, m.keyBy)(a.endnotesPart.notes, (D) => D.id)),
                  a.settingsPart &&
                    (this.defaultTabSize =
                      (b = a.settingsPart.settings) === null || b === void 0
                        ? void 0
                        : b.defaultTabStop),
                  !l.ignoreFonts && a.fontTablePart && this.renderFontTable(a.fontTablePart, t);
                var k = this.renderSections(a.documentPart.body);
                this.options.inWrapper ? s.appendChild(this.renderWrapper(k)) : g(s, k),
                  this.refreshTabStops();
              }
              renderTheme(a, s) {
                var t, l;
                const b = {},
                  k = (t = a.theme) === null || t === void 0 ? void 0 : t.fontScheme;
                k &&
                  (k.majorFont && (b['--docx-majorHAnsi-font'] = k.majorFont.latinTypeface),
                  k.minorFont && (b['--docx-minorHAnsi-font'] = k.minorFont.latinTypeface));
                const D = (l = a.theme) === null || l === void 0 ? void 0 : l.colorScheme;
                if (D)
                  for (let [T, o] of Object.entries(D.colors)) b[`--docx-${T}-color`] = `#${o}`;
                const _ = this.styleToString(`.${this.className}`, b);
                s.appendChild(x(_));
              }
              renderFontTable(a, s) {
                for (let t of a.fonts)
                  for (let l of t.embedFontRefs)
                    this.document.loadFont(l.id, l.key).then((b) => {
                      const k = { 'font-family': t.name, src: `url(${b})` };
                      (l.type != 'bold' && l.type != 'boldItalic') || (k['font-weight'] = 'bold'),
                        (l.type != 'italic' && l.type != 'boldItalic') ||
                          (k['font-style'] = 'italic'),
                        P(s, `docxjs ${t.name} font`);
                      const D = this.styleToString('@font-face', k);
                      s.appendChild(x(D)), this.refreshTabStops();
                    });
              }
              processStyleName(a) {
                return a ? `${this.className}_${(0, m.escapeClassName)(a)}` : this.className;
              }
              processStyles(a) {
                const s = (0, m.keyBy)(
                  a.filter((l) => l.id != null),
                  (l) => l.id,
                );
                for (const l of a.filter((b) => b.basedOn)) {
                  var t = s[l.basedOn];
                  if (t) {
                    (l.paragraphProps = (0, m.mergeDeep)(l.paragraphProps, t.paragraphProps)),
                      (l.runProps = (0, m.mergeDeep)(l.runProps, t.runProps));
                    for (const b of t.styles) {
                      const k = l.styles.find((D) => D.target == b.target);
                      k
                        ? this.copyStyleProperties(b.values, k.values)
                        : l.styles.push(
                            Object.assign(Object.assign({}, b), {
                              values: Object.assign({}, b.values),
                            }),
                          );
                    }
                  } else this.options.debug && console.warn(`Can't find base style ${l.basedOn}`);
                }
                for (let l of a) l.cssName = this.processStyleName(l.id);
                return s;
              }
              prodessNumberings(a) {
                var s;
                for (let t of a.filter((l) => l.pStyleName)) {
                  const l = this.findStyle(t.pStyleName);
                  !((s = l == null ? void 0 : l.paragraphProps) === null || s === void 0) &&
                    s.numbering &&
                    (l.paragraphProps.numbering.level = t.level);
                }
              }
              processElement(a) {
                if (a.children)
                  for (var s of a.children)
                    (s.parent = a),
                      s.type == r.DomType.Table ? this.processTable(s) : this.processElement(s);
              }
              processTable(a) {
                for (var s of a.children)
                  for (var t of s.children)
                    (t.cssStyle = this.copyStyleProperties(a.cellStyle, t.cssStyle, [
                      'border-left',
                      'border-right',
                      'border-top',
                      'border-bottom',
                      'padding-left',
                      'padding-right',
                      'padding-top',
                      'padding-bottom',
                    ])),
                      this.processElement(t);
              }
              copyStyleProperties(a, s, t = null) {
                if (!a) return s;
                for (var l of (s == null && (s = {}),
                t == null && (t = Object.getOwnPropertyNames(a)),
                t))
                  a.hasOwnProperty(l) && !s.hasOwnProperty(l) && (s[l] = a[l]);
                return s;
              }
              createSection(a, s) {
                var t = this.createElement('section', { className: a });
                return (
                  s &&
                    (s.pageMargins &&
                      ((t.style.paddingLeft = s.pageMargins.left),
                      (t.style.paddingRight = s.pageMargins.right),
                      (t.style.paddingTop = s.pageMargins.top),
                      (t.style.paddingBottom = s.pageMargins.bottom)),
                    s.pageSize &&
                      (this.options.ignoreWidth || (t.style.width = s.pageSize.width),
                      this.options.ignoreHeight || (t.style.minHeight = s.pageSize.height)),
                    s.columns &&
                      s.columns.numberOfColumns &&
                      ((t.style.columnCount = `${s.columns.numberOfColumns}`),
                      (t.style.columnGap = s.columns.space),
                      s.columns.separator && (t.style.columnRule = '1px solid black'))),
                  t
                );
              }
              renderSections(a) {
                const s = [];
                this.processElement(a);
                const t = this.splitBySection(a.children);
                let l = null;
                for (let k = 0, D = t.length; k < D; k++) {
                  this.currentFootnoteIds = [];
                  const _ = t[k],
                    T = _.sectProps || a.props,
                    o = this.createSection(this.className, T);
                  this.renderStyleValues(a.cssStyle, o),
                    this.options.renderHeaders &&
                      this.renderHeaderFooter(T.headerRefs, T, s.length, l != T, o);
                  var b = this.createElement('article');
                  this.renderElements(_.elements, b),
                    o.appendChild(b),
                    this.options.renderFootnotes &&
                      this.renderNotes(this.currentFootnoteIds, this.footnoteMap, o),
                    this.options.renderEndnotes &&
                      k == D - 1 &&
                      this.renderNotes(this.currentEndnoteIds, this.endnoteMap, o),
                    this.options.renderFooters &&
                      this.renderHeaderFooter(T.footerRefs, T, s.length, l != T, o),
                    s.push(o),
                    (l = T);
                }
                return s;
              }
              renderHeaderFooter(a, s, t, l, b) {
                var k, D;
                if (a) {
                  var _ =
                      (D =
                        (k = s.titlePage && l ? a.find((o) => o.type == 'first') : null) !== null &&
                        k !== void 0
                          ? k
                          : t % 2 == 1
                          ? a.find((o) => o.type == 'even')
                          : null) !== null && D !== void 0
                        ? D
                        : a.find((o) => o.type == 'default'),
                    T = _ && this.document.findPartByRelId(_.id, this.document.documentPart);
                  T &&
                    ((this.currentPart = T),
                    this.usedHederFooterParts.includes(T.path) ||
                      (this.processElement(T.rootElement), this.usedHederFooterParts.push(T.path)),
                    this.renderElements([T.rootElement], b),
                    (this.currentPart = null));
                }
              }
              isPageBreakElement(a) {
                return (
                  a.type == r.DomType.Break &&
                  (a.break == 'lastRenderedPageBreak'
                    ? !this.options.ignoreLastRenderedPageBreak
                    : a.break == 'page')
                );
              }
              splitBySection(a) {
                var s,
                  t = { sectProps: null, elements: [] },
                  l = [t];
                for (let R of a) {
                  if (R.type == r.DomType.Paragraph) {
                    const V = this.findStyle(R.styleName);
                    !((s = V == null ? void 0 : V.paragraphProps) === null || s === void 0) &&
                      s.pageBreakBefore &&
                      ((t.sectProps = b), (t = { sectProps: null, elements: [] }), l.push(t));
                  }
                  if ((t.elements.push(R), R.type == r.DomType.Paragraph)) {
                    const V = R;
                    var b = V.sectionProps,
                      k = -1,
                      D = -1;
                    if (
                      (this.options.breakPages &&
                        V.children &&
                        (k = V.children.findIndex((L) => {
                          var q, W;
                          return (
                            (D =
                              (W =
                                (q = L.children) === null || q === void 0
                                  ? void 0
                                  : q.findIndex(this.isPageBreakElement.bind(this))) !== null &&
                              W !== void 0
                                ? W
                                : -1) != -1
                          );
                        })),
                      (b || k != -1) &&
                        ((t.sectProps = b), (t = { sectProps: null, elements: [] }), l.push(t)),
                      k != -1)
                    ) {
                      let L = V.children[k],
                        q = D < L.children.length - 1;
                      if (k < V.children.length - 1 || q) {
                        var _ = R.children,
                          T = Object.assign(Object.assign({}, R), { children: _.slice(k) });
                        if (((R.children = _.slice(0, k)), t.elements.push(T), q)) {
                          let W = L.children,
                            Y = Object.assign(Object.assign({}, L), { children: W.slice(0, D) });
                          R.children.push(Y), (L.children = W.slice(D));
                        }
                      }
                    }
                  }
                }
                let o = null;
                for (let R = l.length - 1; R >= 0; R--)
                  l[R].sectProps == null ? (l[R].sectProps = o) : (o = l[R].sectProps);
                return l;
              }
              renderWrapper(a) {
                return this.createElement('div', { className: `${this.className}-wrapper` }, a);
              }
              renderDefaultStyle() {
                var a = this.className;
                return x(`
.${a}-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } 
.${a}-wrapper>section.${a} { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }
.${a} { color: black; hyphens: auto; }
section.${a} { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }
section.${a}>article { margin-bottom: auto; z-index: 1; }
section.${a}>footer { z-index: 1; }
.${a} table { border-collapse: collapse; }
.${a} table td, .${a} table th { vertical-align: top; }
.${a} p { margin: 0pt; min-height: 1em; }
.${a} span { white-space: pre-wrap; overflow-wrap: break-word; }
.${a} a { color: inherit; text-decoration: inherit; }
`);
              }
              renderNumbering(a, s) {
                var t = '',
                  l = [];
                for (var b of a) {
                  var k = `p.${this.numberingClass(b.id, b.level)}`,
                    D = 'none';
                  if (b.bullet) {
                    let _ = `--${this.className}-${b.bullet.src}`.toLowerCase();
                    (t += this.styleToString(
                      `${k}:before`,
                      { content: "' '", display: 'inline-block', background: `var(${_})` },
                      b.bullet.style,
                    )),
                      this.document.loadNumberingImage(b.bullet.src).then((T) => {
                        var o = `${this.rootSelector} { ${_}: url(${T}) }`;
                        s.appendChild(x(o));
                      });
                  } else if (b.levelText) {
                    let _ = this.numberingCounter(b.id, b.level);
                    const T = _ + ' ' + (b.start - 1);
                    b.level > 0 &&
                      (t += this.styleToString(`p.${this.numberingClass(b.id, b.level - 1)}`, {
                        'counter-reset': T,
                      })),
                      l.push(T),
                      (t += this.styleToString(
                        `${k}:before`,
                        Object.assign(
                          {
                            content: this.levelTextToContent(
                              b.levelText,
                              b.suff,
                              b.id,
                              this.numFormatToCssValue(b.format),
                            ),
                            'counter-increment': _,
                          },
                          b.rStyle,
                        ),
                      ));
                  } else D = this.numFormatToCssValue(b.format);
                  t += this.styleToString(
                    k,
                    Object.assign(
                      {
                        display: 'list-item',
                        'list-style-position': 'inside',
                        'list-style-type': D,
                      },
                      b.pStyle,
                    ),
                  );
                }
                return (
                  l.length > 0 &&
                    (t += this.styleToString(this.rootSelector, { 'counter-reset': l.join(' ') })),
                  x(t)
                );
              }
              renderStyles(a) {
                var s,
                  t = '';
                const l = this.styleMap,
                  b = (0, m.keyBy)(
                    a.filter((T) => T.isDefault),
                    (T) => T.target,
                  );
                for (const T of a) {
                  var k = T.styles;
                  if (T.linked) {
                    var D = T.linked && l[T.linked];
                    D
                      ? (k = k.concat(D.styles))
                      : this.options.debug && console.warn(`Can't find linked style ${T.linked}`);
                  }
                  for (const o of k) {
                    var _ = `${(s = T.target) !== null && s !== void 0 ? s : ''}.${T.cssName}`;
                    T.target != o.target && (_ += ` ${o.target}`),
                      b[T.target] == T && (_ = `.${this.className} ${T.target}, ` + _),
                      (t += this.styleToString(_, o.values));
                  }
                }
                return x(t);
              }
              renderNotes(a, s, t) {
                var l = a.map((k) => s[k]).filter((k) => k);
                if (l.length > 0) {
                  var b = this.createElement('ol', null, this.renderElements(l));
                  t.appendChild(b);
                }
              }
              renderElement(a) {
                switch (a.type) {
                  case r.DomType.Paragraph:
                    return this.renderParagraph(a);
                  case r.DomType.BookmarkStart:
                    return this.renderBookmarkStart(a);
                  case r.DomType.BookmarkEnd:
                    return null;
                  case r.DomType.Run:
                    return this.renderRun(a);
                  case r.DomType.Table:
                    return this.renderTable(a);
                  case r.DomType.Row:
                    return this.renderTableRow(a);
                  case r.DomType.Cell:
                    return this.renderTableCell(a);
                  case r.DomType.Hyperlink:
                    return this.renderHyperlink(a);
                  case r.DomType.Drawing:
                    return this.renderDrawing(a);
                  case r.DomType.Image:
                    return this.renderImage(a);
                  case r.DomType.Text:
                  case r.DomType.Text:
                    return this.renderText(a);
                  case r.DomType.DeletedText:
                    return this.renderDeletedText(a);
                  case r.DomType.Tab:
                    return this.renderTab(a);
                  case r.DomType.Symbol:
                    return this.renderSymbol(a);
                  case r.DomType.Break:
                    return this.renderBreak(a);
                  case r.DomType.Footer:
                    return this.renderContainer(a, 'footer');
                  case r.DomType.Header:
                    return this.renderContainer(a, 'header');
                  case r.DomType.Footnote:
                  case r.DomType.Endnote:
                    return this.renderContainer(a, 'li');
                  case r.DomType.FootnoteReference:
                    return this.renderFootnoteReference(a);
                  case r.DomType.EndnoteReference:
                    return this.renderEndnoteReference(a);
                  case r.DomType.NoBreakHyphen:
                    return this.createElement('wbr');
                  case r.DomType.VmlPicture:
                    return this.renderVmlPicture(a);
                  case r.DomType.VmlElement:
                    return this.renderVmlElement(a);
                  case r.DomType.MmlMath:
                    return this.renderContainerNS(a, i, 'math', { xmlns: i });
                  case r.DomType.MmlMathParagraph:
                    return this.renderContainer(a, 'span');
                  case r.DomType.MmlFraction:
                    return this.renderContainerNS(a, i, 'mfrac');
                  case r.DomType.MmlBase:
                    return this.renderContainerNS(
                      a,
                      i,
                      a.parent.type == r.DomType.MmlMatrixRow ? 'mtd' : 'mrow',
                    );
                  case r.DomType.MmlNumerator:
                  case r.DomType.MmlDenominator:
                  case r.DomType.MmlFunction:
                  case r.DomType.MmlLimit:
                  case r.DomType.MmlBox:
                    return this.renderContainerNS(a, i, 'mrow');
                  case r.DomType.MmlGroupChar:
                    return this.renderMmlGroupChar(a);
                  case r.DomType.MmlLimitLower:
                    return this.renderContainerNS(a, i, 'munder');
                  case r.DomType.MmlMatrix:
                    return this.renderContainerNS(a, i, 'mtable');
                  case r.DomType.MmlMatrixRow:
                    return this.renderContainerNS(a, i, 'mtr');
                  case r.DomType.MmlRadical:
                    return this.renderMmlRadical(a);
                  case r.DomType.MmlSuperscript:
                    return this.renderContainerNS(a, i, 'msup');
                  case r.DomType.MmlSubscript:
                    return this.renderContainerNS(a, i, 'msub');
                  case r.DomType.MmlDegree:
                  case r.DomType.MmlSuperArgument:
                  case r.DomType.MmlSubArgument:
                    return this.renderContainerNS(a, i, 'mn');
                  case r.DomType.MmlFunctionName:
                    return this.renderContainerNS(a, i, 'ms');
                  case r.DomType.MmlDelimiter:
                    return this.renderMmlDelimiter(a);
                  case r.DomType.MmlRun:
                    return this.renderMmlRun(a);
                  case r.DomType.MmlNary:
                    return this.renderMmlNary(a);
                  case r.DomType.MmlPreSubSuper:
                    return this.renderMmlPreSubSuper(a);
                  case r.DomType.MmlBar:
                    return this.renderMmlBar(a);
                  case r.DomType.MmlEquationArray:
                    return this.renderMllList(a);
                  case r.DomType.Inserted:
                    return this.renderInserted(a);
                  case r.DomType.Deleted:
                    return this.renderDeleted(a);
                }
                return null;
              }
              renderChildren(a, s) {
                return this.renderElements(a.children, s);
              }
              renderElements(a, s) {
                if (a == null) return null;
                var t = a.flatMap((l) => this.renderElement(l)).filter((l) => l != null);
                return s && g(s, t), t;
              }
              renderContainer(a, s, t) {
                return this.createElement(s, t, this.renderChildren(a));
              }
              renderContainerNS(a, s, t, l) {
                return d(s, t, l, this.renderChildren(a));
              }
              renderParagraph(a) {
                var s,
                  t,
                  l,
                  b,
                  k = this.createElement('p');
                const D = this.findStyle(a.styleName);
                ((s = a.tabs) !== null && s !== void 0) ||
                  (a.tabs =
                    (t = D == null ? void 0 : D.paragraphProps) === null || t === void 0
                      ? void 0
                      : t.tabs),
                  this.renderClass(a, k),
                  this.renderChildren(a, k),
                  this.renderStyleValues(a.cssStyle, k),
                  this.renderCommonProperties(k.style, a);
                const _ =
                  (l = a.numbering) !== null && l !== void 0
                    ? l
                    : (b = D == null ? void 0 : D.paragraphProps) === null || b === void 0
                    ? void 0
                    : b.numbering;
                return _ && k.classList.add(this.numberingClass(_.id, _.level)), k;
              }
              renderRunProperties(a, s) {
                this.renderCommonProperties(a, s);
              }
              renderCommonProperties(a, s) {
                s != null &&
                  (s.color && (a.color = s.color), s.fontSize && (a['font-size'] = s.fontSize));
              }
              renderHyperlink(a) {
                var s = this.createElement('a');
                if ((this.renderChildren(a, s), this.renderStyleValues(a.cssStyle, s), a.href))
                  s.href = a.href;
                else if (a.id) {
                  const t = this.document.documentPart.rels.find(
                    (l) => l.id == a.id && l.targetMode === 'External',
                  );
                  s.href = t == null ? void 0 : t.target;
                }
                return s;
              }
              renderDrawing(a) {
                var s = this.createElement('div');
                return (
                  (s.style.display = 'inline-block'),
                  (s.style.position = 'relative'),
                  (s.style.textIndent = '0px'),
                  this.renderChildren(a, s),
                  this.renderStyleValues(a.cssStyle, s),
                  s
                );
              }
              renderImage(a) {
                let s = this.createElement('img');
                return (
                  this.renderStyleValues(a.cssStyle, s),
                  this.document &&
                    this.document.loadDocumentImage(a.src, this.currentPart).then((t) => {
                      s.src = t;
                    }),
                  s
                );
              }
              renderText(a) {
                return this.htmlDocument.createTextNode(a.text);
              }
              renderDeletedText(a) {
                return this.options.renderEndnotes
                  ? this.htmlDocument.createTextNode(a.text)
                  : null;
              }
              renderBreak(a) {
                return a.break == 'textWrapping' ? this.createElement('br') : null;
              }
              renderInserted(a) {
                return this.options.renderChanges
                  ? this.renderContainer(a, 'ins')
                  : this.renderChildren(a);
              }
              renderDeleted(a) {
                return this.options.renderChanges ? this.renderContainer(a, 'del') : null;
              }
              renderSymbol(a) {
                var s = this.createElement('span');
                return (s.style.fontFamily = a.font), (s.innerHTML = `&#x${a.char};`), s;
              }
              renderFootnoteReference(a) {
                var s = this.createElement('sup');
                return (
                  this.currentFootnoteIds.push(a.id),
                  (s.textContent = `${this.currentFootnoteIds.length}`),
                  s
                );
              }
              renderEndnoteReference(a) {
                var s = this.createElement('sup');
                return (
                  this.currentEndnoteIds.push(a.id),
                  (s.textContent = `${this.currentEndnoteIds.length}`),
                  s
                );
              }
              renderTab(a) {
                var s,
                  t = this.createElement('span');
                if (((t.innerHTML = '&emsp;'), this.options.experimental)) {
                  t.className = this.tabStopClass();
                  var l =
                    (s = (function (b, k) {
                      for (var D = b.parent; D != null && D.type != k; ) D = D.parent;
                      return D;
                    })(a, r.DomType.Paragraph)) === null || s === void 0
                      ? void 0
                      : s.tabs;
                  this.currentTabs.push({ stops: l, span: t });
                }
                return t;
              }
              renderBookmarkStart(a) {
                var s = this.createElement('span');
                return (s.id = a.name), s;
              }
              renderRun(a) {
                if (a.fieldRun) return null;
                const s = this.createElement('span');
                if (
                  (a.id && (s.id = a.id),
                  this.renderClass(a, s),
                  this.renderStyleValues(a.cssStyle, s),
                  a.verticalAlign)
                ) {
                  const t = this.createElement(a.verticalAlign);
                  this.renderChildren(a, t), s.appendChild(t);
                } else this.renderChildren(a, s);
                return s;
              }
              renderTable(a) {
                let s = this.createElement('table');
                return (
                  this.tableCellPositions.push(this.currentCellPosition),
                  this.tableVerticalMerges.push(this.currentVerticalMerge),
                  (this.currentVerticalMerge = {}),
                  (this.currentCellPosition = { col: 0, row: 0 }),
                  a.columns && s.appendChild(this.renderTableColumns(a.columns)),
                  this.renderClass(a, s),
                  this.renderChildren(a, s),
                  this.renderStyleValues(a.cssStyle, s),
                  (this.currentVerticalMerge = this.tableVerticalMerges.pop()),
                  (this.currentCellPosition = this.tableCellPositions.pop()),
                  s
                );
              }
              renderTableColumns(a) {
                let s = this.createElement('colgroup');
                for (let t of a) {
                  let l = this.createElement('col');
                  t.width && (l.style.width = t.width), s.appendChild(l);
                }
                return s;
              }
              renderTableRow(a) {
                let s = this.createElement('tr');
                return (
                  (this.currentCellPosition.col = 0),
                  this.renderClass(a, s),
                  this.renderChildren(a, s),
                  this.renderStyleValues(a.cssStyle, s),
                  this.currentCellPosition.row++,
                  s
                );
              }
              renderTableCell(a) {
                let s = this.createElement('td');
                const t = this.currentCellPosition.col;
                return (
                  a.verticalMerge
                    ? a.verticalMerge == 'restart'
                      ? ((this.currentVerticalMerge[t] = s), (s.rowSpan = 1))
                      : this.currentVerticalMerge[t] &&
                        ((this.currentVerticalMerge[t].rowSpan += 1), (s.style.display = 'none'))
                    : (this.currentVerticalMerge[t] = null),
                  this.renderClass(a, s),
                  this.renderChildren(a, s),
                  this.renderStyleValues(a.cssStyle, s),
                  a.span && (s.colSpan = a.span),
                  (this.currentCellPosition.col += s.colSpan),
                  s
                );
              }
              renderVmlPicture(a) {
                var s = y('div');
                return this.renderChildren(a, s), s;
              }
              renderVmlElement(a) {
                var s,
                  t,
                  l = h('svg');
                l.setAttribute('style', a.cssStyleText);
                const b = this.renderVmlChildElement(a);
                return (
                  !((s = a.imageHref) === null || s === void 0) &&
                    s.id &&
                    ((t = this.document) === null ||
                      t === void 0 ||
                      t
                        .loadDocumentImage(a.imageHref.id, this.currentPart)
                        .then((k) => b.setAttribute('href', k))),
                  l.appendChild(b),
                  requestAnimationFrame(() => {
                    const k = l.firstElementChild.getBBox();
                    l.setAttribute('width', `${Math.ceil(k.x + k.width)}`),
                      l.setAttribute('height', `${Math.ceil(k.y + k.height)}`);
                  }),
                  l
                );
              }
              renderVmlChildElement(a) {
                const s = h(a.tagName);
                Object.entries(a.attrs).forEach(([t, l]) => s.setAttribute(t, l));
                for (let t of a.children)
                  t.type == r.DomType.VmlElement
                    ? s.appendChild(this.renderVmlChildElement(t))
                    : s.appendChild(...(0, m.asArray)(this.renderElement(t)));
                return s;
              }
              renderMmlRadical(a) {
                var s;
                const t = a.children.find((b) => b.type == r.DomType.MmlBase);
                if (!((s = a.props) === null || s === void 0) && s.hideDegree)
                  return d(i, 'msqrt', null, this.renderElements([t]));
                const l = a.children.find((b) => b.type == r.DomType.MmlDegree);
                return d(i, 'mroot', null, this.renderElements([t, l]));
              }
              renderMmlDelimiter(a) {
                var s, t;
                const l = [];
                return (
                  l.push(
                    d(i, 'mo', null, [(s = a.props.beginChar) !== null && s !== void 0 ? s : '(']),
                  ),
                  l.push(...this.renderElements(a.children)),
                  l.push(
                    d(i, 'mo', null, [(t = a.props.endChar) !== null && t !== void 0 ? t : ')']),
                  ),
                  d(i, 'mrow', null, l)
                );
              }
              renderMmlNary(a) {
                var s, t;
                const l = [],
                  b = (0, m.keyBy)(a.children, (R) => R.type),
                  k = b[r.DomType.MmlSuperArgument],
                  D = b[r.DomType.MmlSubArgument],
                  _ = k ? d(i, 'mo', null, (0, m.asArray)(this.renderElement(k))) : null,
                  T = D ? d(i, 'mo', null, (0, m.asArray)(this.renderElement(D))) : null,
                  o = d(i, 'mo', null, [
                    (t = (s = a.props) === null || s === void 0 ? void 0 : s.char) !== null &&
                    t !== void 0
                      ? t
                      : '∫',
                  ]);
                return (
                  _ || T
                    ? l.push(d(i, 'munderover', null, [o, T, _]))
                    : _
                    ? l.push(d(i, 'mover', null, [o, _]))
                    : T
                    ? l.push(d(i, 'munder', null, [o, T]))
                    : l.push(o),
                  l.push(...this.renderElements(b[r.DomType.MmlBase].children)),
                  d(i, 'mrow', null, l)
                );
              }
              renderMmlPreSubSuper(a) {
                const s = [],
                  t = (0, m.keyBy)(a.children, (T) => T.type),
                  l = t[r.DomType.MmlSuperArgument],
                  b = t[r.DomType.MmlSubArgument],
                  k = l ? d(i, 'mo', null, (0, m.asArray)(this.renderElement(l))) : null,
                  D = b ? d(i, 'mo', null, (0, m.asArray)(this.renderElement(b))) : null,
                  _ = d(i, 'mo', null);
                return (
                  s.push(d(i, 'msubsup', null, [_, D, k])),
                  s.push(...this.renderElements(t[r.DomType.MmlBase].children)),
                  d(i, 'mrow', null, s)
                );
              }
              renderMmlGroupChar(a) {
                const s = a.props.verticalJustification === 'bot' ? 'mover' : 'munder',
                  t = this.renderContainerNS(a, i, s);
                return a.props.char && t.appendChild(d(i, 'mo', null, [a.props.char])), t;
              }
              renderMmlBar(a) {
                const s = this.renderContainerNS(a, i, 'mrow');
                switch (a.props.position) {
                  case 'top':
                    s.style.textDecoration = 'overline';
                    break;
                  case 'bottom':
                    s.style.textDecoration = 'underline';
                }
                return s;
              }
              renderMmlRun(a) {
                const s = d(i, 'ms');
                return (
                  this.renderClass(a, s),
                  this.renderStyleValues(a.cssStyle, s),
                  this.renderChildren(a, s),
                  s
                );
              }
              renderMllList(a) {
                const s = d(i, 'mtable');
                this.renderClass(a, s),
                  this.renderStyleValues(a.cssStyle, s),
                  this.renderChildren(a);
                for (let t of this.renderChildren(a))
                  s.appendChild(d(i, 'mtr', null, [d(i, 'mtd', null, [t])]));
                return s;
              }
              renderStyleValues(a, s) {
                for (let t in a)
                  t.startsWith('$') ? s.setAttribute(t.slice(1), a[t]) : (s.style[t] = a[t]);
              }
              renderClass(a, s) {
                a.className && (s.className = a.className),
                  a.styleName && s.classList.add(this.processStyleName(a.styleName));
              }
              findStyle(a) {
                var s;
                return a && ((s = this.styleMap) === null || s === void 0 ? void 0 : s[a]);
              }
              numberingClass(a, s) {
                return `${this.className}-num-${a}-${s}`;
              }
              tabStopClass() {
                return `${this.className}-tab-stop`;
              }
              styleToString(a, s, t = null) {
                let l = `${a} {\r
`;
                for (const b in s)
                  b.startsWith('$') ||
                    (l += `  ${b}: ${s[b]};\r
`);
                return (
                  t && (l += t),
                  l +
                    `}\r
`
                );
              }
              numberingCounter(a, s) {
                return `${this.className}-num-${a}-${s}`;
              }
              levelTextToContent(a, s, t, l) {
                var b;
                return `"${a.replace(/%\d*/g, (k) => {
                  let D = parseInt(k.substring(1), 10) - 1;
                  return `"counter(${this.numberingCounter(t, D)}, ${l})"`;
                })}${(b = { tab: '\\9', space: '\\a0' }[s]) !== null && b !== void 0 ? b : ''}"`;
              }
              numFormatToCssValue(a) {
                var s;
                return (s = {
                  none: 'none',
                  bullet: 'disc',
                  decimal: 'decimal',
                  lowerLetter: 'lower-alpha',
                  upperLetter: 'upper-alpha',
                  lowerRoman: 'lower-roman',
                  upperRoman: 'upper-roman',
                  decimalZero: 'decimal-leading-zero',
                  aiueo: 'katakana',
                  aiueoFullWidth: 'katakana',
                  chineseCounting: 'simp-chinese-informal',
                  chineseCountingThousand: 'simp-chinese-informal',
                  chineseLegalSimplified: 'simp-chinese-formal',
                  chosung: 'hangul-consonant',
                  ideographDigital: 'cjk-ideographic',
                  ideographTraditional: 'cjk-heavenly-stem',
                  ideographLegalTraditional: 'trad-chinese-formal',
                  ideographZodiac: 'cjk-earthly-branch',
                  iroha: 'katakana-iroha',
                  irohaFullWidth: 'katakana-iroha',
                  japaneseCounting: 'japanese-informal',
                  japaneseDigitalTenThousand: 'cjk-decimal',
                  japaneseLegal: 'japanese-formal',
                  thaiNumbers: 'thai',
                  koreanCounting: 'korean-hangul-formal',
                  koreanDigital: 'korean-hangul-formal',
                  koreanDigital2: 'korean-hanja-informal',
                  hebrew1: 'hebrew',
                  hebrew2: 'hebrew',
                  hindiNumbers: 'devanagari',
                  ganada: 'hangul',
                  taiwaneseCounting: 'cjk-ideographic',
                  taiwaneseCountingThousand: 'cjk-ideographic',
                  taiwaneseDigital: 'cjk-decimal',
                }[a]) !== null && s !== void 0
                  ? s
                  : a;
              }
              refreshTabStops() {
                this.options.experimental &&
                  (clearTimeout(this.tabsTimeout),
                  (this.tabsTimeout = setTimeout(() => {
                    const a = (0, f.computePixelToPoint)();
                    for (let s of this.currentTabs)
                      (0, f.updateTabStop)(s.span, s.stops, this.defaultTabSize, a);
                  }, 500)));
              }
            };
          },
          630: (v, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.updateTabStop = e.computePixelToPoint = void 0);
            const c = { pos: 0, leader: 'none', style: 'left' };
            function r(m) {
              return parseFloat(m);
            }
            (e.computePixelToPoint = function (m = document.body) {
              const f = document.createElement('div');
              (f.style.width = '100pt'), m.appendChild(f);
              const n = 100 / f.offsetWidth;
              return m.removeChild(f), n;
            }),
              (e.updateTabStop = function (m, f, n, i = 0.75) {
                const y = m.closest('p'),
                  h = m.getBoundingClientRect(),
                  d = y.getBoundingClientRect(),
                  p = getComputedStyle(y),
                  g =
                    (f == null ? void 0 : f.length) > 0
                      ? f
                          .map((_) => ({ pos: r(_.position), leader: _.leader, style: _.style }))
                          .sort((_, T) => _.pos - T.pos)
                      : [c],
                  x = g[g.length - 1],
                  P = d.width * i,
                  a = r(n);
                let s = x.pos + a;
                if (s < P)
                  for (; s < P && g.length < 50; s += a)
                    g.push(Object.assign(Object.assign({}, c), { pos: s }));
                const t = parseFloat(p.marginLeft),
                  l = d.left + t,
                  b = (h.left - l) * i,
                  k = g.find((_) => _.style != 'clear' && _.pos > b);
                if (k == null) return;
                let D = 1;
                if (k.style == 'right' || k.style == 'center') {
                  const _ = Array.from(y.querySelectorAll(`.${m.className}`)),
                    T = _.indexOf(m) + 1,
                    o = document.createRange();
                  o.setStart(m, 1), T < _.length ? o.setEndBefore(_[T]) : o.setEndAfter(y);
                  const R = k.style == 'center' ? 0.5 : 1,
                    V = o.getBoundingClientRect(),
                    L = V.left + R * V.width - (d.left - t);
                  D = k.pos - L * i;
                } else D = k.pos - b;
                switch (
                  ((m.innerHTML = '&nbsp;'),
                  (m.style.textDecoration = 'inherit'),
                  (m.style.wordSpacing = `${D.toFixed(0)}pt`),
                  k.leader)
                ) {
                  case 'dot':
                  case 'middleDot':
                    (m.style.textDecoration = 'underline'),
                      (m.style.textDecorationStyle = 'dotted');
                    break;
                  case 'hyphen':
                  case 'heavy':
                  case 'underscore':
                    m.style.textDecoration = 'underline';
                }
              });
          },
          881: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.WmlEndnote = e.WmlFootnote = e.WmlBaseNote = void 0);
            const r = c(120);
            class m {}
            (e.WmlBaseNote = m),
              (e.WmlFootnote = class extends m {
                constructor() {
                  super(...arguments), (this.type = r.DomType.Footnote);
                }
              }),
              (e.WmlEndnote = class extends m {
                constructor() {
                  super(...arguments), (this.type = r.DomType.Endnote);
                }
              });
          },
          735: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.EndnotesPart = e.FootnotesPart = e.BaseNotePart = void 0);
            const r = c(530),
              m = c(881);
            class f extends r.Part {
              constructor(i, y, h) {
                super(i, y), (this._documentParser = h);
              }
            }
            (e.BaseNotePart = f),
              (e.FootnotesPart = class extends f {
                constructor(n, i, y) {
                  super(n, i, y);
                }
                parseXml(n) {
                  this.notes = this._documentParser.parseNotes(n, 'footnote', m.WmlFootnote);
                }
              }),
              (e.EndnotesPart = class extends f {
                constructor(n, i, y) {
                  super(n, i, y);
                }
                parseXml(n) {
                  this.notes = this._documentParser.parseNotes(n, 'endnote', m.WmlEndnote);
                }
              });
          },
          527: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.NumberingPart = void 0);
            const r = c(530),
              m = c(682);
            class f extends r.Part {
              constructor(i, y, h) {
                super(i, y), (this._documentParser = h);
              }
              parseXml(i) {
                Object.assign(this, (0, m.parseNumberingPart)(i, this._package.xmlParser)),
                  (this.domNumberings = this._documentParser.parseNumberingFile(i));
              }
            }
            e.NumberingPart = f;
          },
          682: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseNumberingBulletPicture =
                e.parseNumberingLevelOverrride =
                e.parseNumberingLevel =
                e.parseAbstractNumbering =
                e.parseNumbering =
                e.parseNumberingPart =
                  void 0);
            const r = c(109),
              m = c(488);
            function f(d, p) {
              let g = { id: p.attr(d, 'numId'), overrides: [] };
              for (let x of p.elements(d))
                switch (x.localName) {
                  case 'abstractNumId':
                    g.abstractId = p.attr(x, 'val');
                    break;
                  case 'lvlOverride':
                    g.overrides.push(y(x, p));
                }
              return g;
            }
            function n(d, p) {
              let g = { id: p.attr(d, 'abstractNumId'), levels: [] };
              for (let x of p.elements(d))
                switch (x.localName) {
                  case 'name':
                    g.name = p.attr(x, 'val');
                    break;
                  case 'multiLevelType':
                    g.multiLevelType = p.attr(x, 'val');
                    break;
                  case 'numStyleLink':
                    g.numberingStyleLink = p.attr(x, 'val');
                    break;
                  case 'styleLink':
                    g.styleLink = p.attr(x, 'val');
                    break;
                  case 'lvl':
                    g.levels.push(i(x, p));
                }
              return g;
            }
            function i(d, p) {
              let g = { level: p.intAttr(d, 'ilvl') };
              for (let x of p.elements(d))
                switch (x.localName) {
                  case 'start':
                    g.start = p.attr(x, 'val');
                    break;
                  case 'lvlRestart':
                    g.restart = p.intAttr(x, 'val');
                    break;
                  case 'numFmt':
                    g.format = p.attr(x, 'val');
                    break;
                  case 'lvlText':
                    g.text = p.attr(x, 'val');
                    break;
                  case 'lvlJc':
                    g.justification = p.attr(x, 'val');
                    break;
                  case 'lvlPicBulletId':
                    g.bulletPictureId = p.attr(x, 'val');
                    break;
                  case 'pStyle':
                    g.paragraphStyle = p.attr(x, 'val');
                    break;
                  case 'pPr':
                    g.paragraphProps = (0, r.parseParagraphProperties)(x, p);
                    break;
                  case 'rPr':
                    g.runProps = (0, m.parseRunProperties)(x, p);
                }
              return g;
            }
            function y(d, p) {
              let g = { level: p.intAttr(d, 'ilvl') };
              for (let x of p.elements(d))
                switch (x.localName) {
                  case 'startOverride':
                    g.start = p.intAttr(x, 'val');
                    break;
                  case 'lvl':
                    g.numberingLevel = i(x, p);
                }
              return g;
            }
            function h(d, p) {
              var g = p.element(d, 'pict'),
                x = g && p.element(g, 'shape'),
                P = x && p.element(x, 'imagedata');
              return P
                ? {
                    id: p.attr(d, 'numPicBulletId'),
                    referenceId: p.attr(P, 'id'),
                    style: p.attr(x, 'style'),
                  }
                : null;
            }
            (e.parseNumberingPart = function (d, p) {
              let g = { numberings: [], abstractNumberings: [], bulletPictures: [] };
              for (let x of p.elements(d))
                switch (x.localName) {
                  case 'num':
                    g.numberings.push(f(x, p));
                    break;
                  case 'abstractNum':
                    g.abstractNumberings.push(n(x, p));
                    break;
                  case 'numPicBullet':
                    g.bulletPictures.push(h(x, p));
                }
              return g;
            }),
              (e.parseNumbering = f),
              (e.parseAbstractNumbering = n),
              (e.parseNumberingLevel = i),
              (e.parseNumberingLevelOverrride = y),
              (e.parseNumberingBulletPicture = h);
          },
          472: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.XmlParser = e.serializeXmlString = e.parseXmlString = void 0);
            const r = c(149);
            (e.parseXmlString = function (n, i = !1) {
              var y;
              i && (n = n.replace(/<[?].*[?]>/, '')),
                (n = (y = n).charCodeAt(0) === 65279 ? y.substring(1) : y);
              const h = new DOMParser().parseFromString(n, 'application/xml'),
                d =
                  (p = h.getElementsByTagName('parsererror')[0]) === null || p === void 0
                    ? void 0
                    : p.textContent;
              var p;
              if (d) throw new Error(d);
              return h;
            }),
              (e.serializeXmlString = function (n) {
                return new XMLSerializer().serializeToString(n);
              });
            class m {
              elements(i, y = null) {
                const h = [];
                for (let d = 0, p = i.childNodes.length; d < p; d++) {
                  let g = i.childNodes.item(d);
                  g.nodeType != 1 || (y != null && g.localName != y) || h.push(g);
                }
                return h;
              }
              element(i, y) {
                for (let h = 0, d = i.childNodes.length; h < d; h++) {
                  let p = i.childNodes.item(h);
                  if (p.nodeType == 1 && p.localName == y) return p;
                }
                return null;
              }
              elementAttr(i, y, h) {
                var d = this.element(i, y);
                return d ? this.attr(d, h) : void 0;
              }
              attrs(i) {
                return Array.from(i.attributes);
              }
              attr(i, y) {
                for (let h = 0, d = i.attributes.length; h < d; h++) {
                  let p = i.attributes.item(h);
                  if (p.localName == y) return p.value;
                }
                return null;
              }
              intAttr(i, y, h = null) {
                var d = this.attr(i, y);
                return d ? parseInt(d) : h;
              }
              hexAttr(i, y, h = null) {
                var d = this.attr(i, y);
                return d ? parseInt(d, 16) : h;
              }
              floatAttr(i, y, h = null) {
                var d = this.attr(i, y);
                return d ? parseFloat(d) : h;
              }
              boolAttr(i, y, h = null) {
                return (0, r.convertBoolean)(this.attr(i, y), h);
              }
              lengthAttr(i, y, h = r.LengthUsage.Dxa) {
                return (0, r.convertLength)(this.attr(i, y), h);
              }
            }
            e.XmlParser = m;
            const f = new m();
            e.default = f;
          },
          287: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.SettingsPart = void 0);
            const r = c(530),
              m = c(846);
            class f extends r.Part {
              constructor(i, y) {
                super(i, y);
              }
              parseXml(i) {
                this.settings = (0, m.parseSettings)(i, this._package.xmlParser);
              }
            }
            e.SettingsPart = f;
          },
          846: (v, e) => {
            function c(r, m) {
              var f = { defaultNoteIds: [] };
              for (let n of m.elements(r))
                switch (n.localName) {
                  case 'numFmt':
                    f.nummeringFormat = m.attr(n, 'val');
                    break;
                  case 'footnote':
                  case 'endnote':
                    f.defaultNoteIds.push(m.attr(n, 'id'));
                }
              return f;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseNoteProperties = e.parseSettings = void 0),
              (e.parseSettings = function (r, m) {
                var f = {};
                for (let n of m.elements(r))
                  switch (n.localName) {
                    case 'defaultTabStop':
                      f.defaultTabStop = m.lengthAttr(n, 'val');
                      break;
                    case 'footnotePr':
                      f.footnoteProps = c(n, m);
                      break;
                    case 'endnotePr':
                      f.endnoteProps = c(n, m);
                      break;
                    case 'autoHyphenation':
                      f.autoHyphenation = m.boolAttr(n, 'val');
                  }
                return f;
              }),
              (e.parseNoteProperties = c);
          },
          240: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.StylesPart = void 0);
            const r = c(530);
            class m extends r.Part {
              constructor(n, i, y) {
                super(n, i), (this._documentParser = y);
              }
              parseXml(n) {
                this.styles = this._documentParser.parseStylesFile(n);
              }
            }
            e.StylesPart = m;
          },
          893: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.ThemePart = void 0);
            const r = c(530),
              m = c(55);
            class f extends r.Part {
              constructor(i, y) {
                super(i, y);
              }
              parseXml(i) {
                this.theme = (0, m.parseTheme)(i, this._package.xmlParser);
              }
            }
            e.ThemePart = f;
          },
          55: (v, e) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseFontInfo =
                e.parseFontScheme =
                e.parseColorScheme =
                e.parseTheme =
                e.DmlTheme =
                  void 0);
            class c {}
            function r(n, i) {
              var y = { name: i.attr(n, 'name'), colors: {} };
              for (let p of i.elements(n)) {
                var h = i.element(p, 'srgbClr'),
                  d = i.element(p, 'sysClr');
                h
                  ? (y.colors[p.localName] = i.attr(h, 'val'))
                  : d && (y.colors[p.localName] = i.attr(d, 'lastClr'));
              }
              return y;
            }
            function m(n, i) {
              var y = { name: i.attr(n, 'name') };
              for (let h of i.elements(n))
                switch (h.localName) {
                  case 'majorFont':
                    y.majorFont = f(h, i);
                    break;
                  case 'minorFont':
                    y.minorFont = f(h, i);
                }
              return y;
            }
            function f(n, i) {
              return {
                latinTypeface: i.elementAttr(n, 'latin', 'typeface'),
                eaTypeface: i.elementAttr(n, 'ea', 'typeface'),
                csTypeface: i.elementAttr(n, 'cs', 'typeface'),
              };
            }
            (e.DmlTheme = c),
              (e.parseTheme = function (n, i) {
                var y = new c(),
                  h = i.element(n, 'themeElements');
                for (let d of i.elements(h))
                  switch (d.localName) {
                    case 'clrScheme':
                      y.colorScheme = r(d, i);
                      break;
                    case 'fontScheme':
                      y.fontScheme = m(d, i);
                  }
                return y;
              }),
              (e.parseColorScheme = r),
              (e.parseFontScheme = m),
              (e.parseFontInfo = f);
          },
          593: (v, e) => {
            function c(r) {
              return r && typeof r == 'object' && !Array.isArray(r);
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.asArray =
                e.formatCssRules =
                e.parseCssRules =
                e.mergeDeep =
                e.isString =
                e.isObject =
                e.blobToBase64 =
                e.keyBy =
                e.resolvePath =
                e.splitPath =
                e.escapeClassName =
                  void 0),
              (e.escapeClassName = function (r) {
                return r == null
                  ? void 0
                  : r.replace(/[ .]+/g, '-').replace(/[&]+/g, 'and').toLowerCase();
              }),
              (e.splitPath = function (r) {
                let m = r.lastIndexOf('/') + 1;
                return [m == 0 ? '' : r.substring(0, m), m == 0 ? r : r.substring(m)];
              }),
              (e.resolvePath = function (r, m) {
                try {
                  const f = 'http://docx/';
                  return new URL(r, f + m).toString().substring(f.length);
                } catch (f) {
                  return `${m}${r}`;
                }
              }),
              (e.keyBy = function (r, m) {
                return r.reduce((f, n) => ((f[m(n)] = n), f), {});
              }),
              (e.blobToBase64 = function (r) {
                return new Promise((m, f) => {
                  const n = new FileReader();
                  (n.onloadend = () => m(n.result)), (n.onerror = () => f()), n.readAsDataURL(r);
                });
              }),
              (e.isObject = c),
              (e.isString = function (r) {
                return typeof r == 'string' || r instanceof String;
              }),
              (e.mergeDeep = function r(m, ...f) {
                var n;
                if (!f.length) return m;
                const i = f.shift();
                if (c(m) && c(i))
                  for (const y in i)
                    c(i[y])
                      ? r((n = m[y]) !== null && n !== void 0 ? n : (m[y] = {}), i[y])
                      : (m[y] = i[y]);
                return r(m, ...f);
              }),
              (e.parseCssRules = function (r) {
                const m = {};
                for (const f of r.split(';')) {
                  const [n, i] = f.split(':');
                  m[n] = i;
                }
                return m;
              }),
              (e.formatCssRules = function (r) {
                return Object.entries(r)
                  .map((m, f) => `${m}: ${f}`)
                  .join(';');
              }),
              (e.asArray = function (r) {
                return Array.isArray(r) ? r : [r];
              });
          },
          320: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.parseVmlElement = e.VmlElement = void 0);
            const r = c(149),
              m = c(120),
              f = c(472);
            class n extends m.OpenXmlElementBase {
              constructor() {
                super(...arguments), (this.type = m.DomType.VmlElement), (this.attrs = {});
              }
            }
            function i(h) {
              var d;
              return {
                stroke: f.default.attr(h, 'color'),
                'stroke-width':
                  (d = f.default.lengthAttr(h, 'weight', r.LengthUsage.Emu)) !== null &&
                  d !== void 0
                    ? d
                    : '1px',
              };
            }
            function y(h) {
              return h.split(',');
            }
            (e.VmlElement = n),
              (e.parseVmlElement = function h(d, p) {
                var g = new n();
                switch (d.localName) {
                  case 'rect':
                    (g.tagName = 'rect'), Object.assign(g.attrs, { width: '100%', height: '100%' });
                    break;
                  case 'oval':
                    (g.tagName = 'ellipse'),
                      Object.assign(g.attrs, { cx: '50%', cy: '50%', rx: '50%', ry: '50%' });
                    break;
                  case 'line':
                    g.tagName = 'line';
                    break;
                  case 'shape':
                    g.tagName = 'g';
                    break;
                  case 'textbox':
                    (g.tagName = 'foreignObject'),
                      Object.assign(g.attrs, { width: '100%', height: '100%' });
                    break;
                  default:
                    return null;
                }
                for (const x of f.default.attrs(d))
                  switch (x.localName) {
                    case 'style':
                      g.cssStyleText = x.value;
                      break;
                    case 'fillcolor':
                      g.attrs.fill = x.value;
                      break;
                    case 'from':
                      const [P, a] = y(x.value);
                      Object.assign(g.attrs, { x1: P, y1: a });
                      break;
                    case 'to':
                      const [s, t] = y(x.value);
                      Object.assign(g.attrs, { x2: s, y2: t });
                  }
                for (const x of f.default.elements(d))
                  switch (x.localName) {
                    case 'stroke':
                      Object.assign(g.attrs, i(x));
                      break;
                    case 'fill':
                      Object.assign(g.attrs, {});
                      break;
                    case 'imagedata':
                      (g.tagName = 'image'),
                        Object.assign(g.attrs, { width: '100%', height: '100%' }),
                        (g.imageHref = {
                          id: f.default.attr(x, 'id'),
                          title: f.default.attr(x, 'title'),
                        });
                      break;
                    case 'txbxContent':
                      g.children.push(...p.parseBodyElements(x));
                      break;
                    default:
                      const P = h(x, p);
                      P && g.children.push(P);
                  }
                return g;
              });
          },
          213: (v, e, c) => {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.deobfuscate = e.WordDocument = void 0);
            const r = c(461),
              m = c(380),
              f = c(522),
              n = c(448),
              i = c(593),
              y = c(527),
              h = c(240),
              d = c(985),
              p = c(665),
              g = c(162),
              x = c(893),
              P = c(735),
              a = c(287),
              s = c(177),
              t = [
                { type: r.RelationshipTypes.OfficeDocument, target: 'word/document.xml' },
                { type: r.RelationshipTypes.ExtendedProperties, target: 'docProps/app.xml' },
                { type: r.RelationshipTypes.CoreProperties, target: 'docProps/core.xml' },
                { type: r.RelationshipTypes.CustomProperties, target: 'docProps/custom.xml' },
              ];
            class l {
              constructor() {
                (this.parts = []), (this.partsMap = {});
              }
              static load(D, _, T) {
                return ue(this, null, function* () {
                  var o = new l();
                  return (
                    (o._options = T),
                    (o._parser = _),
                    (o._package = yield f.OpenXmlPackage.load(D, T)),
                    (o.rels = yield o._package.loadRelationships()),
                    yield Promise.all(
                      t.map((R) => {
                        var V;
                        const L =
                          (V = o.rels.find((q) => q.type === R.type)) !== null && V !== void 0
                            ? V
                            : R;
                        return o.loadRelationshipPart(L.target, L.type);
                      }),
                    ),
                    o
                  );
                });
              }
              save(D = 'blob') {
                return this._package.save(D);
              }
              loadRelationshipPart(D, _) {
                return ue(this, null, function* () {
                  var T;
                  if (this.partsMap[D]) return this.partsMap[D];
                  if (!this._package.get(D)) return null;
                  let o = null;
                  switch (_) {
                    case r.RelationshipTypes.OfficeDocument:
                      this.documentPart = o = new n.DocumentPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.FontTable:
                      this.fontTablePart = o = new m.FontTablePart(this._package, D);
                      break;
                    case r.RelationshipTypes.Numbering:
                      this.numberingPart = o = new y.NumberingPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.Styles:
                      this.stylesPart = o = new h.StylesPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.Theme:
                      this.themePart = o = new x.ThemePart(this._package, D);
                      break;
                    case r.RelationshipTypes.Footnotes:
                      this.footnotesPart = o = new P.FootnotesPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.Endnotes:
                      this.endnotesPart = o = new P.EndnotesPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.Footer:
                      o = new d.FooterPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.Header:
                      o = new d.HeaderPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.CoreProperties:
                      this.corePropsPart = o = new g.CorePropsPart(this._package, D);
                      break;
                    case r.RelationshipTypes.ExtendedProperties:
                      this.extendedPropsPart = o = new p.ExtendedPropsPart(this._package, D);
                      break;
                    case r.RelationshipTypes.CustomProperties:
                      o = new s.CustomPropsPart(this._package, D);
                      break;
                    case r.RelationshipTypes.Settings:
                      this.settingsPart = o = new a.SettingsPart(this._package, D);
                  }
                  if (o == null) return Promise.resolve(null);
                  if (
                    ((this.partsMap[D] = o),
                    this.parts.push(o),
                    yield o.load(),
                    ((T = o.rels) === null || T === void 0 ? void 0 : T.length) > 0)
                  ) {
                    const [R] = (0, i.splitPath)(o.path);
                    yield Promise.all(
                      o.rels.map((V) =>
                        this.loadRelationshipPart((0, i.resolvePath)(V.target, R), V.type),
                      ),
                    );
                  }
                  return o;
                });
              }
              loadDocumentImage(D, _) {
                return ue(this, null, function* () {
                  const T = yield this.loadResource(_ != null ? _ : this.documentPart, D, 'blob');
                  return this.blobToURL(T);
                });
              }
              loadNumberingImage(D) {
                return ue(this, null, function* () {
                  const _ = yield this.loadResource(this.numberingPart, D, 'blob');
                  return this.blobToURL(_);
                });
              }
              loadFont(D, _) {
                return ue(this, null, function* () {
                  const T = yield this.loadResource(this.fontTablePart, D, 'uint8array');
                  return T && this.blobToURL(new Blob([b(T, _)]));
                });
              }
              blobToURL(D) {
                return D
                  ? this._options.useBase64URL
                    ? (0, i.blobToBase64)(D)
                    : URL.createObjectURL(D)
                  : null;
              }
              findPartByRelId(D, _ = null) {
                var T,
                  o = ((T = _.rels) !== null && T !== void 0 ? T : this.rels).find(
                    (V) => V.id == D,
                  );
                const R = _ ? (0, i.splitPath)(_.path)[0] : '';
                return o ? this.partsMap[(0, i.resolvePath)(o.target, R)] : null;
              }
              getPathById(D, _) {
                const T = D.rels.find((R) => R.id == _),
                  [o] = (0, i.splitPath)(D.path);
                return T ? (0, i.resolvePath)(T.target, o) : null;
              }
              loadResource(D, _, T) {
                const o = this.getPathById(D, _);
                return o ? this._package.load(o, T) : Promise.resolve(null);
              }
            }
            function b(k, D) {
              const _ = D.replace(/{|}|-/g, ''),
                T = new Array(16);
              for (let o = 0; o < 16; o++) T[16 - o - 1] = parseInt(_.substr(2 * o, 2), 16);
              for (let o = 0; o < 32; o++) k[o] = k[o] ^ T[o % 16];
              return k;
            }
            (e.WordDocument = l), (e.deobfuscate = b);
          },
          583: (v) => {
            v.exports =
              'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 stroke=%27black%27 fill=%27none%27 vector-effect=%27non-scaling-stroke%27/%3E%3C/svg%3E';
          },
          626: (v) => {
            v.exports = C;
          },
        },
        E = {};
      function w(v) {
        var e = E[v];
        if (e !== void 0) return e.exports;
        var c = (E[v] = { id: v, exports: {} });
        return F[v](c, c.exports, w), c.exports;
      }
      return (
        (w.m = F),
        (w.n = (v) => {
          var e = v && v.__esModule ? () => v.default : () => v;
          return w.d(e, { a: e }), e;
        }),
        (w.d = (v, e) => {
          for (var c in e)
            w.o(e, c) && !w.o(v, c) && Object.defineProperty(v, c, { enumerable: !0, get: e[c] });
        }),
        (w.o = (v, e) => Object.prototype.hasOwnProperty.call(v, e)),
        (w.r = (v) => {
          typeof Symbol != 'undefined' &&
            Symbol.toStringTag &&
            Object.defineProperty(v, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(v, '__esModule', { value: !0 });
        }),
        (w.b = document.baseURI || self.location.href),
        w(667)
      );
    })(),
  );
})(ze);
var De = ze.exports;
const qe = Ne({
    __name: 'index',
    props: { src: {}, requestOption: {} },
    setup(me) {
      const oe = me,
        C = Be();
      Le(
        () => oe.src,
        () => {
          F();
        },
      ),
        je(() => {
          oe.src && F();
        });
      const F = () => {
          let w;
          if (Ue(oe.src) && typeof oe.src == 'string') {
            E(oe.src);
            return;
          } else
            oe.src instanceof ArrayBuffer
              ? (w = new Blob([oe.src]))
              : oe.src instanceof Blob && (w = oe.src);
          C.value && ((C.value.innerHTML = ''), De.renderAsync(w, C.value));
        },
        E = (w) =>
          ue(this, null, function* () {
            const v = yield fetch(w, oe.requestOption);
            v.status === 200 && C.value && De.renderAsync(v.blob(), C.value);
          });
      return (w, v) => (
        Oe(), Re('div', { ref_key: 'officeDocx', ref: C, class: 'office-docx' }, null, 512)
      );
    },
  }),
  Ke = Xe(qe, [['__scopeId', 'data-v-30ab067e']]),
  tt = Ne({
    __name: 'index',
    setup(me) {
      const oe = Be(''),
        C = (F) =>
          ue(this, null, function* () {
            return (oe.value = yield Ve(F)), !1;
          });
      return (F, E) => {
        const w = We('ElButton');
        return (
          Oe(),
          Re('div', null, [
            Se(
              $e(Ze),
              { limit: 1, accept: '.docx,.doc', 'before-upload': C, action: '' },
              {
                default: Te(() => [
                  Se(
                    w,
                    { style: { 'margin-bottom': '12px' } },
                    { default: Te(() => [He('点击上传')]), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            Se(Ke, { src: oe.value }, null, 8, ['src']),
          ])
        );
      };
    },
  });
export { tt as default };
