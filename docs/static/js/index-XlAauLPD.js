const w = {
  lunarInfo: [
    19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192,
    53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396,
    11104, 38256, 21234, 18800, 25958, 54432, 59984, 92821, 23248, 11104, 100067, 37600, 116951,
    51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416,
    86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352,
    21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400,
    46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189,
    18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888,
    30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390,
    21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200,
    30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864,
    42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984,
    27424, 108228, 43744, 37600, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972,
    21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495,
    27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168,
    43476, 41680, 53584, 62034, 54560,
  ],
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Gan: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
  Zhi: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
  Animals: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
  festival: {
    '1-1': { title: '元旦节' },
    '2-14': { title: '情人节' },
    '5-1': { title: '劳动节' },
    '5-4': { title: '青年节' },
    '6-1': { title: '儿童节' },
    '9-10': { title: '教师节' },
    '10-1': { title: '国庆节' },
    '12-25': { title: '圣诞节' },
    '3-8': { title: '妇女节' },
    '3-12': { title: '植树节' },
    '4-1': { title: '愚人节' },
    '5-12': { title: '护士节' },
    '7-1': { title: '建党节' },
    '8-1': { title: '建军节' },
    '12-24': { title: '平安夜' },
  },
  lFestival: {
    '12-30': { title: '除夕' },
    '1-1': { title: '春节' },
    '1-15': { title: '元宵节' },
    '2-2': { title: '龙抬头' },
    '5-5': { title: '端午节' },
    '7-7': { title: '七夕节' },
    '7-15': { title: '中元节' },
    '8-15': { title: '中秋节' },
    '9-9': { title: '重阳节' },
    '10-1': { title: '寒衣节' },
    '10-15': { title: '下元节' },
    '12-8': { title: '腊八节' },
    '12-23': { title: '北方小年' },
    '12-24': { title: '南方小年' },
  },
  getFestival() {
    return this.festival;
  },
  getLunarFestival() {
    return this.lFestival;
  },
  setFestival(b = {}) {
    this.festival = b;
  },
  setLunarFestival(b = {}) {
    this.lFestival = b;
  },
  solarTerm: [
    '小寒',
    '大寒',
    '立春',
    '雨水',
    '惊蛰',
    '春分',
    '清明',
    '谷雨',
    '立夏',
    '小满',
    '芒种',
    '夏至',
    '小暑',
    '大暑',
    '立秋',
    '处暑',
    '白露',
    '秋分',
    '寒露',
    '霜降',
    '立冬',
    '小雪',
    '大雪',
    '冬至',
  ],
  sTermInfo: [
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c3598082c95f8c965cc920f',
    '97bd0b06bdb0722c965ce1cfcc920f',
    'b027097bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f',
    '97bd0b06bdb0722c965ce1cfcc920f',
    'b027097bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f',
    '97bd0b06bdb0722c965ce1cfcc920f',
    'b027097bd097c36b0b6fc9274c91aa',
    '9778397bd19801ec9210c965cc920e',
    '97b6b97bd19801ec95f8c965cc920f',
    '97bd09801d98082c95f8e1cfcc920f',
    '97bd097bd097c36b0b6fc9210c8dc2',
    '9778397bd197c36c9210c9274c91aa',
    '97b6b97bd19801ec95f8c965cc920e',
    '97bd09801d98082c95f8e1cfcc920f',
    '97bd097bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa',
    '97b6b97bd19801ec95f8c965cc920e',
    '97bcf97c3598082c95f8e1cfcc920f',
    '97bd097bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c3598082c95f8c965cc920f',
    '97bd097bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c3598082c95f8c965cc920f',
    '97bd097bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f',
    '97bd097bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f',
    '97bd097bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f',
    '97bd097bd07f595b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9210c8dc2',
    '9778397bd19801ec9210c9274c920e',
    '97b6b97bd19801ec95f8c965cc920f',
    '97bd07f5307f595b0b0bc920fb0722',
    '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c920e',
    '97b6b97bd19801ec95f8c965cc920f',
    '97bd07f5307f595b0b0bc920fb0722',
    '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bd07f1487f595b0b0bc920fb0722',
    '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c9274c920e',
    '97bcf7f0e47f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c91aa',
    '97b6b97bd197c36c9210c9274c920e',
    '97bcf7f0e47f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c920e',
    '97b6b7f0e47f531b0723b0b6fb0722',
    '7f0e37f5307f595b0b0bc920fb0722',
    '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36b0b70c9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0787b0721',
    '7f0e27f0e47f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c91aa',
    '97b6b7f0e47f149b0723b0787b0721',
    '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c8dc2',
    '977837f0e37f149b0723b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722',
    '7f0e37f5307f595b0b0bc920fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2',
    '977837f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2',
    '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f149b0723b0787b0721',
    '7f0e27f0e47f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '977837f0e37f14998082b0723b06bd',
    '7f07e7f0e37f149b0723b0787b0721',
    '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '977837f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722',
    '7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e37f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722',
    '7f0e37f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e37f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e37f14898082b072297c35',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e37f14898082b072297c35',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f149b0723b0787b0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35',
    '7ec967f0e37f14998082b0723b06bd',
    '7f07e7f0e47f149b0723b0787b0721',
    '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35',
    '7ec967f0e37f14998082b0723b06bd',
    '7f07e7f0e37f14998083b0787b0721',
    '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35',
    '7ec967f0e37f14898082b0723b02d5',
    '7f07e7f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722',
    '7f0e36665b66aa89801e9808297c35',
    '665f67f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722',
    '7f0e36665b66a449801e9808297c35',
    '665f67f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e36665b66a449801e9808297c35',
    '665f67f0e37f14898082b072297c35',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e26665b66a449801e9808297c35',
    '665f67f0e37f1489801eb072297c35',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
  ],
  nStr1: ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
  nStr2: ['初', '十', '廿', '卅'],
  nStr3: ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'],
  lYearDays: function (b) {
    let f,
      a = 348;
    for (f = 32768; f > 8; f >>= 1) a += this.lunarInfo[b - 1900] & f ? 1 : 0;
    return a + this.leapDays(b);
  },
  leapMonth: function (b) {
    return this.lunarInfo[b - 1900] & 15;
  },
  leapDays: function (b) {
    return this.leapMonth(b) ? (this.lunarInfo[b - 1900] & 65536 ? 30 : 29) : 0;
  },
  monthDays: function (b, f) {
    return f > 12 || f < 1 ? -1 : this.lunarInfo[b - 1900] & (65536 >> f) ? 30 : 29;
  },
  solarDays: function (b, f) {
    if (f > 12 || f < 1) return -1;
    const a = f - 1;
    return a === 1
      ? (b % 4 === 0 && b % 100 !== 0) || b % 400 === 0
        ? 29
        : 28
      : this.solarMonth[a];
  },
  toGanZhiYear: function (b) {
    var f = (b - 3) % 10,
      a = (b - 3) % 12;
    return f === 0 && (f = 10), a === 0 && (a = 12), this.Gan[f - 1] + this.Zhi[a - 1];
  },
  toAstro: function (b, f) {
    const a = '魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯',
      e = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return a.substr(b * 2 - (f < e[b - 1] ? 2 : 0), 2) + '座';
  },
  toGanZhi: function (b) {
    return this.Gan[b % 10] + this.Zhi[b % 12];
  },
  getTerm: function (b, f) {
    if (b < 1900 || b > 2100 || f < 1 || f > 24) return -1;
    const a = this.sTermInfo[b - 1900],
      e = [];
    for (let t = 0; t < a.length; t += 5) {
      const d = parseInt('0x' + a.substr(t, 5)).toString();
      e.push(d[0], d.substr(1, 2), d[3], d.substr(4, 2));
    }
    return parseInt(e[f - 1]);
  },
  toChinaMonth: function (b) {
    if (b > 12 || b < 1) return -1;
    let f = this.nStr3[b - 1];
    return (f += '月'), f;
  },
  toChinaDay: function (b) {
    let f;
    switch (b) {
      case 10:
        f = '初十';
        break;
      case 20:
        f = '二十';
        break;
      case 30:
        f = '三十';
        break;
      default:
        (f = this.nStr2[Math.floor(b / 10)]), (f += this.nStr1[b % 10]);
    }
    return f;
  },
  getAnimal: function (b) {
    return this.Animals[(b - 4) % 12];
  },
  solar2lunar: function (b, f, a) {
    let e = parseInt(b),
      t = parseInt(f),
      d = parseInt(a);
    if (e < 1900 || e > 2100 || (e === 1900 && t === 1 && d < 31)) return -1;
    let s;
    e ? (s = new Date(e, parseInt(t) - 1, d)) : (s = new Date());
    let c,
      u = 0,
      n = 0;
    (e = s.getFullYear()), (t = s.getMonth() + 1), (d = s.getDate());
    let x = (Date.UTC(s.getFullYear(), s.getMonth(), s.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
    for (c = 1900; c < 2101 && x > 0; c++) (n = this.lYearDays(c)), (x -= n);
    x < 0 && ((x += n), c--);
    let D = new Date(),
      r = !1;
    D.getFullYear() === e && D.getMonth() + 1 === t && D.getDate() === d && (r = !0);
    let o = s.getDay(),
      p = this.nStr1[o];
    o === 0 && (o = 7);
    const i = c;
    u = this.leapMonth(c);
    let l = !1;
    for (c = 1; c < 13 && x > 0; c++)
      u > 0 && c === u + 1 && l === !1
        ? (--c, (l = !0), (n = this.leapDays(i)))
        : (n = this.monthDays(i, c)),
        l === !0 && c === u + 1 && (l = !1),
        (x -= n);
    x === 0 && u > 0 && c === u + 1 && (l ? (l = !1) : ((l = !0), --c)), x < 0 && ((x += n), --c);
    const h = c,
      g = x + 1,
      Y = t - 1,
      G = this.toGanZhiYear(i),
      y = this.getTerm(e, t * 2 - 1),
      Z = this.getTerm(e, t * 2);
    let M = this.toGanZhi((e - 1900) * 12 + t + 11);
    d >= y && (M = this.toGanZhi((e - 1900) * 12 + t + 12));
    let T = !1,
      v = null;
    y === d && ((T = !0), (v = this.solarTerm[t * 2 - 2])),
      Z === d && ((T = !0), (v = this.solarTerm[t * 2 - 1]));
    const k = Date.UTC(e, Y, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10,
      A = this.toGanZhi(k + d - 1),
      S = this.toAstro(t, d),
      z = e + '-' + t + '-' + d,
      U = i + '-' + h + '-' + g,
      m = this.festival,
      F = this.lFestival,
      C = t + '-' + d;
    let I = h + '-' + g;
    return (
      h === 12 && g === 29 && this.monthDays(i, h) === 29 && (I = '12-30'),
      {
        date: z,
        lunarDate: U,
        festival: m[C] ? m[C].title : null,
        lunarFestival: F[I] ? F[I].title : null,
        lYear: i,
        lMonth: h,
        lDay: g,
        Animal: this.getAnimal(i),
        IMonthCn: (l ? '闰' : '') + this.toChinaMonth(h),
        IDayCn: this.toChinaDay(g),
        cYear: e,
        cMonth: t,
        cDay: d,
        gzYear: G,
        gzMonth: M,
        gzDay: A,
        isToday: r,
        isLeap: l,
        nWeek: o,
        ncWeek: '星期' + p,
        isTerm: T,
        Term: v,
        astro: S,
      }
    );
  },
  lunar2solar: function (b, f, a, e) {
    (b = parseInt(b)), (f = parseInt(f)), (a = parseInt(a)), (e = !!e);
    const t = this.leapMonth(b);
    if (
      (this.leapDays(b),
      (e && t !== f) || (b === 2100 && f === 12 && a > 1) || (b === 1900 && f === 1 && a < 31))
    )
      return -1;
    const d = this.monthDays(b, f);
    let s = d;
    if ((e && (s = this.leapDays(b, f)), b < 1900 || b > 2100 || a > s)) return -1;
    let c = 0,
      u;
    for (u = 1900; u < b; u++) c += this.lYearDays(u);
    let n = 0,
      x = !1;
    for (u = 1; u < f; u++)
      (n = this.leapMonth(b)),
        x || (n <= u && n > 0 && ((c += this.leapDays(b)), (x = !0))),
        (c += this.monthDays(b, u));
    e && (c += d);
    const D = Date.UTC(1900, 1, 30, 0, 0, 0),
      r = new Date((c + a - 31) * 864e5 + D),
      o = r.getUTCFullYear(),
      p = r.getUTCMonth() + 1,
      i = r.getUTCDate();
    return this.solar2lunar(o, p, i);
  },
};
export { w as c };
