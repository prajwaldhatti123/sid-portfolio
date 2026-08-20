import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  E as i,
  F as a,
  I as o,
  L as s,
  M as c,
  N as l,
  O as u,
  P as d,
  R as f,
  S as p,
  _ as m,
  a as h,
  b as g,
  c as _,
  d as v,
  f as y,
  g as b,
  h as x,
  i as S,
  j as C,
  k as w,
  l as T,
  m as E,
  o as D,
  s as O,
  u as k,
  v as A,
  w as j,
  x as M,
  y as ee,
} from "./react.D20wc1Tc.mjs";
import {
  $ as te,
  A as N,
  B as ne,
  C as P,
  D as re,
  E as ie,
  F as ae,
  G as oe,
  H as se,
  I as ce,
  J as le,
  K as ue,
  L as de,
  M as fe,
  N as pe,
  O as F,
  P as me,
  Q as he,
  R as I,
  S as ge,
  T as _e,
  U as ve,
  V as ye,
  W as be,
  X as L,
  Y as xe,
  Z as R,
  _ as Se,
  a as Ce,
  at as we,
  b as Te,
  c as Ee,
  ct as De,
  d as Oe,
  et as ke,
  f as Ae,
  g as je,
  h as Me,
  i as Ne,
  it as Pe,
  j as Fe,
  k as Ie,
  l as Le,
  lt as Re,
  m as ze,
  n as Be,
  nt as Ve,
  o as He,
  ot as Ue,
  p as We,
  q as Ge,
  r as Ke,
  rt as qe,
  s as Je,
  st as Ye,
  tt as Xe,
  u as Ze,
  v as Qe,
  w as $e,
  x as et,
  y as tt,
  z as nt,
} from "./motion.BKNsybgV.mjs";
function rt(e) {
  return typeof e == `function`;
}
function it(e) {
  return typeof e == `boolean`;
}
function z(e) {
  return typeof e == `string`;
}
function B(e) {
  return Number.isFinite(e);
}
function at(e) {
  return Array.isArray(e);
}
function V(e) {
  return typeof e == `object` && !!e && !at(e);
}
function ot(e) {
  for (let t in e) return !1;
  return !0;
}
function st(e) {
  return e === void 0;
}
function ct(e) {
  return e === null;
}
function lt(e) {
  return e == null;
}
function ut(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function dt(e) {
  return V(e) && rt(e.return);
}
function ft(e) {
  return V(e) && rt(e.then);
}
function pt(e) {
  return e instanceof Promise;
}
function mt(e) {
  return `url('${ht(e)}')`;
}
function ht(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function gt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function _t(e, t, n) {
  if (Vg.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Vg.set(e, t), t))
    .catch((t) => {
      throw (Vg.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(Ng), Vg.set(e, r));
}
function vt(e, t) {
  Pg && (Hg.set(e, t), Ug.has(e) && _t(e, t, `registered loader ${e}`));
}
function yt() {
  if (!Pg) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(Wg),
      i = r ? e.slice(Wg.length) : e;
    if (!i) continue;
    Ug.add(i);
    let a = Hg.get(i);
    a ? _t(i, a, `registered loader ${i}`) : r && _t(i, () => import(n), n);
  }
}
function bt(e) {
  return typeof e == `object` && !!e && !y(e) && Kg in e;
}
function xt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function St(e, t = `default`, n) {
  n && vt(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Vg.has(n)) return;
      let e = Vg.get(n);
      pt(e) ? s(() => e) : (i = xt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = xt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = b(function (t, r) {
      if (
        (c(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Gg !== void 0 && Gg.add(n), !i)) throw s(e);
      return _(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function Ct(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function wt(e) {
  return e === null || !(Jg in e) ? !1 : typeof e.equals == `function`;
}
function Tt(e, t) {
  return e === t || (e !== e && t !== t);
}
function Et(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Tt(e[r], t[r])) return !1;
  return !0;
}
function Dt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Nt(e[r], t[r], !0)) return !1;
  return !0;
}
function Ot(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Tt(r, t.get(n))) return !1;
  return !0;
}
function kt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Nt(r, t.get(n), !0)) return !1;
  return !0;
}
function At(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function jt(e, t) {
  let n = qg(e);
  if (n.length !== qg(t).length) return !1;
  for (let r of n)
    if (!Ct(t, r) || (!(r === `_owner` && Ct(e, `$$typeof`) && e.$$typeof) && !Tt(e[r], t[r])))
      return !1;
  return !0;
}
function Mt(e, t) {
  let n = qg(e);
  if (n.length !== qg(t).length) return !1;
  for (let r of n)
    if (!Ct(t, r) || (!(r === `_owner` && Ct(e, `$$typeof`) && e.$$typeof) && !Nt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Nt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? Dt(e, t) : Et(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? kt(e, t) : Ot(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return At(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? wt(e) && wt(t)
        ? e.equals(t)
        : n
          ? Mt(e, t)
          : jt(e, t)
      : !1;
}
function Pt(e, t, n = !0) {
  try {
    return Nt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Ft(e) {
  return g.useCallback((t) => e[t], [e]);
}
function It({ api: e, children: t }) {
  return _(Yg.Provider, { value: e, children: t });
}
function Lt() {
  return g.useContext(Yg);
}
function Rt({ routes: e, children: n }) {
  let r = Ft(e),
    i = t(() => ({ getRoute: r }), [r]);
  return _(Yg.Provider, { value: i, children: n });
}
function zt() {
  let e = Lt(),
    n = w(Xg),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = r ? e.getRoute?.(r) : void 0;
  return t(() => {
    if (!(!r || !a)) return { ...a, id: r, pathVariables: i };
  }, [r, i, a]);
}
function Bt() {
  let e = zt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Vt(e) {
  let t = zt(),
    n = g.useRef(t);
  Pt(n.current, t) || !t || ((n.current = t), e(t));
}
function Ht(e) {
  let t = Lt();
  if (e) return t.getRoute?.(e);
}
function Ut(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Wt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Gt(e, t) {
  let n = zt(),
    r = Ht(t) ?? n;
  return g.useMemo(() => (r ? Ut(r, e) : e), [e, r]);
}
function H(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function U(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function Kt(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function qt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === d_
  );
}
function Jt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Yt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Xt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Yt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Zt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Qt(e) {
  return f_.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function $t(e) {
  return !(!Number.isInteger(e) || e < 0 || e > l_);
}
function en(e) {
  return !(!Number.isInteger(e) || e < 0 || e > c_);
}
function tn(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return $t(+e);
}
function nn(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !tn(t[n]); n--);
  return ((t.length = n + 1), t);
}
function rn(e) {
  return new Uint8Array(e).toBase64();
}
function an(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function on(e) {
  return Buffer.from(e).toString(`base64`);
}
function sn(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function cn(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function ln(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function un(e, t) {
  return dn(JSON.parse(e), t);
}
function dn(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === t_) return;
    if (e === r_) return NaN;
    if (e === i_) return 1 / 0;
    if (e === a_) return -1 / 0;
    if (e === o_) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            let n = g_(t);
            r[e] = n;
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`: {
            let t = new URL(s[1]);
            r[e] = t;
            break;
          }
          case `URLSearchParams`: {
            let t = new URLSearchParams(s[1]);
            r[e] = t;
            break;
          }
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === s_) {
        let t = s[1];
        if (!en(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[l_] = void 0), delete n[l_]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!$t(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== n_ && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function fn(e, t) {
  let n = pn(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function pn(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return t_;
    if (Number.isNaN(n)) return r_;
    if (n === 1 / 0) return i_;
    if (n === -1 / 0) return a_;
    if (n === 0 && 1 / n < 0) return o_;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new u_(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new u_(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (Kt(n)) u = mn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new u_(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = Jt(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${Xt(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${Xt(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${Xt(r)},"${i}"]` : `["RegExp",${Xt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += n_;
            else {
              let t = nn(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + s_ + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += n_));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${Kt(e) ? mn(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`:
        case `DataView`: {
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${h_(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${Xt(n.toString())}]`;
          break;
        default:
          if (!qt(n)) throw new u_(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (Zt(n).length > 0) throw new u_(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new u_(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(Qt(e)), (u += `,${Xt(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new u_(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(Qt(r)), (u += `${Xt(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function mn(e) {
  let t = typeof e;
  return t === `string`
    ? Xt(e)
    : e === void 0
      ? t_.toString()
      : e === 0 && 1 / e < 0
        ? o_.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function hn(e, t, n = `lazy`) {
  switch ((__.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function gn(e) {
  return z(e) && (e === `` || y_.test(e));
}
function _n() {
  return { [b_.QueryCache]: new Map(), [b_.CollectionUtilsCache]: new Map() };
}
function vn() {
  if (!Pg) return;
  if (x_ !== void 0) return x_;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      x_ = un(e.text) ?? _n();
    } catch (e) {
      ((x_ = _n()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      Lg(() => {
        (e?.remove(), (e = null));
      }),
      x_
    );
  }
}
function yn(e, t) {
  let n = vn();
  return n ? n[e].has(t) : !1;
}
function bn(e, t) {
  let n = vn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function xn(e) {
  return e?.id ?? Qg;
}
function Sn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function Cn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (T_.has(n)) return T_.get(n);
    let r = new D_(n, t);
    return (T_.set(n, r), r);
  };
}
function wn({ children: e, collectionUtils: n }) {
  let r = t(() => ({ get: Cn(n) }), [n]);
  return _(E_.Provider, { value: r, children: e });
}
function Tn() {
  return w(E_);
}
function En(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Dn() {
  return s === void 0 ? void 0 : s;
}
function On() {
  let e = Dn();
  return e ? O_.test(e.platform) : !1;
}
function kn() {
  let e = Dn();
  return e
    ? k_.test(e.platform)
      ? !0
      : A_.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function An() {
  return On() || kn();
}
function jn() {
  let e = Dn();
  return e ? j_.test(e.userAgent) : !1;
}
function Mn() {
  let e = Dn();
  return e ? M_.test(e.userAgent) && N_.test(e.vendor) && !jn() : !1;
}
function Nn() {
  let e = Dn();
  return e ? P_.test(e.userAgent) && F_.test(e.vendor) : !1;
}
function Pn() {
  let e = Dn();
  return e ? I_.test(e.userAgent) : !1;
}
function Fn() {
  return typeof document == `object`;
}
function In() {
  let e = Dn();
  if (!e) return -1;
  let t = L_.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Ln() {
  let e = Dn();
  return e ? R_.test(e.userAgent) : !1;
}
function Rn() {
  return !1;
}
function zn() {
  let e = Dn();
  return e && z_.test(e.userAgent) ? `tablet` : e && B_.test(e.userAgent) ? `phone` : `desktop`;
}
function Bn() {
  return zn() === `desktop`;
}
function Vn(e) {
  return An() ? e.metaKey : e.ctrlKey;
}
function Hn() {}
function Un(e) {
  return typeof e == `function` ? e() : e;
}
function Wn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Gn(e, t) {
  let n = e?.priority,
    r = Wn();
  return n === `background`
    ? (t?.() ?? En(1))
    : r?.yield
      ? r.yield(e).catch(Hn)
      : r?.postTask
        ? r.postTask(Hn, e).catch(Hn)
        : t
          ? t()
          : n === `user-blocking`
            ? W_
            : En(0);
}
function Kn(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    Fn() && (document.addEventListener(`visibilitychange`, s), f.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, G_),
        e(() => {
          Gn(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return Fn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Gn(a, t);
    return i ? u(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function m(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? V_ : H_),
        s = Fn() && document.hidden ? U_ : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return p(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !Fn() && !t ? (n ? void 0 : W_) : n ? m(i, r) : d(i);
  }
  return h;
}
function qn() {
  let e = Tn(),
    { getRoute: t } = Lt();
  return C(
    (n, r, i = !0, a = !0) => {
      if (!n || !t) return;
      let o = t(n),
        { pathVariables: s, locale: c } = r;
      return Yn(o, { routeId: n, pathVariables: s, locale: c, collectionUtils: e }, i, a);
    },
    [t, e]
  );
}
function Jn(e, t = !0) {
  let n = qn();
  c(() => {
    if (!(!t || !J_)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Yn(e, t, n = !0, r = !0) {
  if (!J_ || !e) return;
  let i = e.page;
  if (!(!i || !bt(i))) {
    n && (await q_());
    try {
      let e = await i.preload();
      r && t && e && (await Xn(e, t));
    } catch {}
  }
}
async function Xn(e, t) {
  let n = e.loader;
  if (!n?.load) return;
  let r = {
    signal: t.signal ?? new AbortController().signal,
    pathVariables: t.pathVariables ?? {},
    routeId: t.routeId,
    locale: t.locale,
    collectionUtils: t.collectionUtils,
  };
  try {
    await n.load({}, r);
  } catch {}
}
function Zn(e, t) {
  return e.replace(Q_, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Qn(e, t = !1) {
  let n = ``;
  if (f !== void 0)
    if (t) n = f.location.search;
    else {
      let e = f.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? f.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? $n(n, e) : e;
}
function $n(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== $_ && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function er(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Q_)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !z(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = pt(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = pt(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = pt(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function tr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function nr({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await er(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = tr(u.path, t.slug)),
    o && u.path && (u.path = Qn(u.path, !0)),
    u
  );
}
function rr() {
  if (ev) return;
  ev = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (f.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((f.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), hn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function ir({ children: e, value: t }) {
  return _(tv.Provider, { value: t, children: e });
}
function ar() {
  return g.useContext(tv);
}
function or(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function sr(e) {
  let t = nv,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < rv; ) ((n = e.next(t)), r.push(n.value), (t += nv));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - nv }
  );
}
function cr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function lr(e) {
  let { innerWidth: t, innerHeight: n } = f,
    [r, i] = cr(e.x),
    [a, o] = cr(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function ur(e) {
  let [t, n] = cr(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function dr(e) {
  let { x: t, y: n } = lr(e);
  return Math.hypot(Math.max(t, f.innerWidth - t), Math.max(n, f.innerHeight - n));
}
function fr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function pr(e) {
  return e ? ov[e] : void 0;
}
function mr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (hr(t)) {
    let { easing: e, duration: n } = sr(
      N({ keyframes: [0, 1], ...gr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = pr(n?.mask?.type),
    o = fr(n, `start`, e, a),
    s = fr({ ...sv, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function hr(e) {
  return e.type === `spring`;
}
function gr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function _r({ exit: e = lv, enter: t }) {
  let n = document.createElement(`style`);
  n.id = cv;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += mr(`exit`, e)),
    (r += mr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function vr() {
  Lg(() => {
    je.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(cv);
      e && document.head.removeChild(e);
    });
  });
}
function yr() {
  return !!document.startViewTransition;
}
function br(e) {
  return new Promise((t) => {
    je.render(() => {
      (performance.mark(`framer-vt-style`), _r(e), t());
    });
  });
}
async function xr(e, t, n) {
  if (!yr()) {
    e();
    return;
  }
  if ((await br(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(uv),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), vr());
      })
      .catch(uv),
    r
  );
}
function Sr() {
  let e = ar(),
    t = r(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    C(
      (n, r, i, a) => {
        let o = or(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return xr(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function Cr(e, t) {
  Lg(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function wr(e, t, n, r = M) {
  r(() => {
    let t = async (e) => (await q_({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Tr(e) {
  let t = r(new Set());
  return (
    wr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    C(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function Er(e) {
  return V(e) && `routeId` in e;
}
function Dr(e = f.history.state) {
  return Er(e) ? e : void 0;
}
function Or(e) {
  return e?.entryId;
}
function kr(e) {
  pv = e;
}
function Ar() {
  return pv;
}
function jr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Mr(e, t) {
  return Nr(e, Or(e) ?? Or(t));
}
function Nr(e, t = jr()) {
  return { ...e, entryId: t };
}
function Pr(e, t, n = !1) {
  (performance.mark(`framer-history-replace`), kr(Mr(e, Dr())), t && Cr(t, f.location.href));
  let r;
  r = X_().privateRouterReplaceState
    ? !t || t === f.location.href
      ? f.History.prototype.replaceState
      : f.history.replaceState
    : n
      ? f.History.prototype.replaceState
      : f.history.replaceState;
  try {
    r.call(f.history, pv, ``, t);
  } catch {}
}
function Fr(e) {
  (performance.mark(`framer-history-replace`),
    kr(Nr(e)),
    History.prototype.replaceState.call(f.history, pv, ``, void 0));
}
function Ir(e, t) {
  (performance.mark(`framer-history-push`), kr(Nr(e)), Cr(t, f.location.href), rr());
  try {
    f.history.pushState(pv, ``, t);
  } catch {}
}
function Lr({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  M(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = f.location.hash ? f.location.hash.slice(1) : void 0;
    Pr({ ...Dr(), routeId: t, hash: i, pathVariables: n, localeId: r }, void 0, !0);
  }, []);
}
function Rr(e, t, n) {
  let i = Sr(),
    a = Tr(`framer-route-change`),
    { onHistoryTraversal: o, usesCustomScrollRestoration: s } = e,
    l = s ? `manual` : `after-transition`,
    u = r(void 0),
    d = C(() => {
      (u.current?.resolve(), (u.current = void 0));
    }, []),
    p = C(
      async ({ state: e }) => {
        if (!Er(e)) return;
        let r = a({ popstate: !0 }),
          s = Wt();
        (r.promise.finally(s), Or(Ar()) !== (Or(e) ?? Or(Dr())) && o(), kr(e));
        let { routeId: c, hash: u, pathVariables: p, localeId: m } = e,
          h = z(u) ? u : f.location.hash ? f.location.hash.slice(1) : void 0,
          g = !1,
          _ = () => {
            g ||=
              (n(
                c,
                z(m) ? m : void 0,
                h,
                f.location.pathname + f.location.search + f.location.hash,
                V(p) ? p : void 0,
                !0,
                r,
                !1
              ),
              !0);
          },
          v = l === `after-transition`;
        (await Promise.resolve(i(t.current, c, _))
          .then((e) => e?.updateCallbackDone)
          .catch(_)
          .finally(() => {
            v || d();
          }),
          await r.promise,
          v && d(),
          await f.navigation?.transition?.finished.catch(Ng),
          fv(),
          Cr(f.location.href));
      },
      [t, a, o, d, n, i, l]
    ),
    m = C(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Er(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                u.current = { resolve: e, reject: t };
              }),
                (u.current = void 0));
            },
            scroll: l,
          });
      },
      [l]
    );
  c(
    () => (
      f.addEventListener(`popstate`, p),
      mv && f.navigation.addEventListener(`navigate`, m),
      () => {
        (f.removeEventListener(`popstate`, p),
          mv && f.navigation.removeEventListener(`navigate`, m));
      }
    ),
    [p, m]
  );
}
async function zr(e, t, n) {
  if (!e.path || !t) return !1;
  let r = tr(Zn(e.path, t), n.slug);
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((f.location.href = f.location.origin + r), !0)
    : !1;
}
function Br() {
  let e = Tn();
  return C((t) => Vr({ ...t, collectionUtils: e }), [e]);
}
async function Vr(e) {
  let t = await nr(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!z(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await zr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function Hr(e) {
  let t = r(Promise.resolve()),
    n = r(),
    i = C(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return C(
    (e, r, a) => {
      if (!mv) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = r),
        f.navigation.addEventListener(`navigate`, i),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0), f.navigation.removeEventListener(`navigate`, i));
        }));
    },
    [i]
  );
}
function Ur(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function Wr(e) {
  return Ur(e.trim().toLowerCase().replace(hv, `-`));
}
function Gr({ children: e, value: t }) {
  return _(_v.Provider, { value: t, children: e });
}
function Kr() {
  return w(_v);
}
function qr(e, t) {
  let n = d(() => ({ inputs: t, result: e() }))[0],
    i = r(!0),
    a = r(n),
    o =
      i.current || (t && a.current.inputs && Pt(t, a.current.inputs, !1))
        ? a.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((i.current = !1), (a.current = o));
    }, [o]),
    o.result
  );
}
function Jr(e, t) {
  return qr(() => e, t);
}
function Yr() {
  return g.useContext(xv);
}
function Xr() {
  return g.useContext(Sv);
}
function Zr() {
  return f.location.search;
}
function Qr() {
  return ``;
}
function $r(e) {
  return (
    Cv.add(e),
    f.addEventListener(`popstate`, e),
    () => {
      (Cv.delete(e), f.removeEventListener(`popstate`, e));
    }
  );
}
function ei() {
  for (let e of Cv) e();
}
function ti({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let a = Kr() === `preview`,
    [o, s] = d(``),
    c = r(t);
  vv(() => {
    c.current = t;
  }, [t]);
  let l = ee($r, Zr, Qr),
    u = i(l),
    p = t !== i(t),
    h = a ? o : p ? l : u,
    g = C(
      async (e) => {
        if (a) {
          m(() => {
            s((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let r = n(),
          i = t;
        if ((await q_({ continueAfter: `paint` }), r || n() || c.current !== i)) return;
        let o = Dr();
        if (!o) return;
        let l = new URL(f.location.href),
          u = e(l.searchParams).toString();
        l.search = u;
        let d = o.queryParamBackAnchorSearch,
          p = f.location.search.slice(1),
          h = d === void 0 && u !== p,
          g = d !== void 0 && u === d,
          _ = { ...o, queryParamBackAnchorSearch: g ? void 0 : (d ?? (h ? p : void 0)) },
          v = l.toString();
        (h || g ? Ir(_, v) : Pr(_, v), ei());
      },
      [n, a, t]
    ),
    v = qr(() => ({ urlSearchParams: new URLSearchParams(h), replaceSearchParams: g }), [h, g]);
  return _(wv.Provider, { value: v, children: e });
}
function ni(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = ri(e),
    [r, i] = ri(t),
    a = ii(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function ri(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function ii(e, t) {
  if (e === t || ((e = `/` + ai(e)), (t = `/` + ai(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Dv(e, 1 + s);
    if (n !== Dv(t, 1 + s)) break;
    n === Ev && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Dv(t, 1 + s) === Ev) return kv(t, 1 + s + 1);
      if (s === 0) return kv(t, 1 + s);
    } else r > a && (Dv(e, 1 + s) === Ev ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Dv(e, s) === Ev) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${kv(t, 1 + o)}`;
}
function ai(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Dv(e, o);
    else if (Mv(a)) break;
    else a = Ev;
    if (Mv(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Dv(t, t.length - 1) !== Tv || Dv(t, t.length - 2) !== Tv) {
            if (t.length > 2) {
              let e = Ov(t, jv);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = kv(t, 0, e)), (n = t.length - 1 - Ov(t, jv))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          Av && ((t += t.length > 0 ? `${jv}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${jv}${kv(e, r + 1, o)}`) : (t = kv(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Tv && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function oi(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || f.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function si(e, t, n) {
  let r = Ut(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Q_, (e, t) => i[t] ?? e);
}
function ci(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: p,
  }
) {
  let m = si(i, e, o);
  if (l) return m ?? ``;
  let h = t ?? `/`;
  (n && d && (h = n[d] ?? h), r && (h = h.replace(Q_, (e, t) => String(r[t] || e))));
  let g = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(Q_, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (s)
    if (Nv.has(h) && f !== void 0) {
      let e = oi(u);
      g = ni(f.location.pathname, e + g);
    } else g = ni(h, g);
  else g = tr(g, p);
  let y = _ || v;
  return ((c || y) && (g = Qn(g, y)), m && (g = `${g}#${m}`), g);
}
function li(e) {
  return Pv in e && e[Pv] === 1;
}
function ui() {
  if (!Fv) return;
  ((Lv = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Fv.forEach((n) => t.addEventListener(n, Iv, e));
}
function di() {
  return (
    c(() => {
      if (!Lv || !Fv) return;
      let e = { capture: !0 },
        t = document.body;
      (Fv.forEach((n) => t.removeEventListener(n, Iv, e)),
        (Fv = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function fi(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function pi(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function mi() {
  ((ry = new ny()), ry.render.markStart());
}
function hi() {
  (p(() => {
    ry?.useInsertionEffects.markRouterStart();
  }, []),
    M(() => {
      ry?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      ry?.useEffects.markRouterStart();
    }, []));
}
function gi() {
  (p(() => {
    (ry?.render.markEnd(), ry?.useInsertionEffects.markStart());
  }, []),
    M(() => {
      if ((ry?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        iy = !0;
        return;
      }
      je.read(() => {
        (ry?.browserRendering.requestAnimationFrame.markStart(),
          ry?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (ry?.useEffects.markStart(),
        ry?.browserRendering.hasStarted ||
          (ry?.mutationEffects.measure(), ry?.useEffects.markAreSynchronous()));
    }, []));
}
function _i() {
  (p(() => {
    ry?.useInsertionEffects.markEnd();
  }, []),
    M(() => {
      (ry?.useLayoutEffects.markEnd(),
        !(iy || document.visibilityState !== `visible`) &&
          je.read(() => {
            (ry?.browserRendering.requestAnimationFrame.markEnd(),
              q_().then(() => {
                ry?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      ry?.useEffects.markEnd();
    }, []));
}
function vi() {
  return (gi(), null);
}
function yi() {
  return (_i(), null);
}
function bi(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return g.isValidElement(e) ? g.cloneElement(e, n) : _(e, { ...n });
}
function xi() {
  return cy;
}
function Si(e) {
  if (ly?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      H(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Ti(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          H(t, `localizedPath must be defined`);
          let i = Ti(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    ly = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: ly.pathRoutes,
    paths: ly.paths,
    pathRoutesLocalized: ly.pathRoutesLocalized,
    pathsLocalized: ly.pathsLocalized,
  };
}
function Ci(e, t, n = !0, r = xi()) {
  return wi(e, t, r, n);
}
function wi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Si(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Ei(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Ei(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Ei(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Ei(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Ti(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Ei(e, t) {
  let n = [],
    r = Di(t).replace(Q_, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Di(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Oi() {
  if (`PerformanceServerTiming` in f) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function ki(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Ai(e, t) {
  for (let [n, r] of t) ki(e, n, r);
}
function ji(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Mi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Ni(e, t) {
  if (f === void 0) return t;
  let n = t;
  if (t) {
    Mi(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Ai(e, Oi()), ji(e), n);
}
function Pi(e) {
  (c(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    p(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Fi(e, ...t) {
  uy.has(e) || (uy.add(e), console.warn(e, ...t));
}
function Ii(e, t, n) {
  Fi(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Li(e) {
  return (
    typeof e == `object` &&
    !!e &&
    py in e &&
    e[py] instanceof Function &&
    my in e &&
    e[my] instanceof Function
  );
}
function Ri(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = fy(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function zi(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Bi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Vi(e) {
  return Math.round(e * 2) / 2;
}
function Hi(e, t) {
  return { x: e, y: t };
}
function Ui(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function Wi(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Gi(e) {
  let t = Ki(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Ki(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function qi(e, t, n) {
  return (
    (_y.rgb_r = e / 255),
    (_y.rgb_g = t / 255),
    (_y.rgb_b = n / 255),
    _y.rgbToHsluv(),
    { h: _y.hsluv_h, s: _y.hsluv_s, l: _y.hsluv_l }
  );
}
function Ji(e, t, n, r = 1) {
  return (
    (_y.hsluv_h = e),
    (_y.hsluv_s = t),
    (_y.hsluv_l = n),
    _y.hsluvToRgb(),
    { r: _y.rgb_r * 255, g: _y.rgb_g * 255, b: _y.rgb_b * 255, a: r }
  );
}
function Yi(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Xi(e, t, n) {
  return {
    r: Wi(e) ? ra(e, 255) * 255 : 0,
    g: Wi(t) ? ra(t, 255) * 255 : 0,
    b: Wi(n) ? ra(n, 255) * 255 : 0,
  };
}
function Zi(e, t, n, r) {
  let i = [
    oa(Math.round(e).toString(16)),
    oa(Math.round(t).toString(16)),
    oa(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Qi(e, t, n) {
  let r,
    i,
    a = ra(e, 255),
    o = ra(t, 255),
    s = ra(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function $i(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ea(e, t, n) {
  let r, i, a;
  if (((e = ra(e, 360)), (t = ra(t * 100, 100)), (n = ra(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = $i(s, o, e + 1 / 3)), (i = $i(s, o, e)), (a = $i(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function ta(e, t, n) {
  ((e = ra(e, 255)), (t = ra(t, 255)), (n = ra(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function na(e, t, n) {
  ((e = ra(e, 360) * 6), (t = ra(t * 100, 100)), (n = ra(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function ra(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    ia(e) && (e = `100%`);
    let t = aa(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function ia(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function aa(e) {
  return typeof e == `string` && e.includes(`%`);
}
function oa(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function sa(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = gy[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = vy.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = vy.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = vy.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Gi(r[2] ?? ``), l: Gi(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = vy.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Gi(r[2] ?? ``),
              l: Gi(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = vy.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Gi(r[2] ?? ``), v: Gi(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = vy.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Gi(r[2] ?? ``),
                  v: Gi(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = vy.hex8.exec(t))
                ? {
                    r: ca(r[1] ?? ``),
                    g: ca(r[2] ?? ``),
                    b: ca(r[3] ?? ``),
                    a: la(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = vy.hex6.exec(t))
                  ? {
                      r: ca(r[1] ?? ``),
                      g: ca(r[2] ?? ``),
                      b: ca(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = vy.hex4.exec(t))
                    ? {
                        r: ca(`${r[1]}${r[1]}`),
                        g: ca(`${r[2]}${r[2]}`),
                        b: ca(`${r[3]}${r[3]}`),
                        a: la(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = vy.hex3.exec(t))
                      ? {
                          r: ca(`${r[1]}${r[1]}`),
                          g: ca(`${r[2]}${r[2]}`),
                          b: ca(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function ca(e) {
  return parseInt(e, 16);
}
function la(e) {
  return ca(e) / 255;
}
function ua(e) {
  let t = yy.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function da(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function fa({ r: e, g: t, b: n, a: r }) {
  return { r: da(e), g: da(t), b: da(n), a: r };
}
function pa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function ma({ r: e, g: t, b: n, a: r }) {
  return { r: pa(e), g: pa(t), b: pa(n), a: r };
}
function ha({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function ga(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function _a({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = ga(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function va(e) {
  return Cy(Sy(e));
}
function ya(e) {
  return xy(by(e));
}
function ba(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Ca({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = xa(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Ca(e)
              : wa(e)),
    i
  );
}
function xa(e) {
  let t = sa(e);
  if (t) return t.format === `hsl` ? wa(t) : t.format === `hsv` ? Sa(t) : Ca(t);
}
function Sa(e) {
  let t = na(e.h, e.s, e.v);
  return { ...Qi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Ta(e.a) };
}
function Ca(e) {
  let t = Xi(e.r, e.g, e.b);
  return { ...Qi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Ta(e.a) };
}
function wa(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Wi(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Wi(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Ki(e.s)),
    (r = Wi(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Ki(e.l)),
    (i = ea(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Ta(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ea() {
  return __.location.origin === `https://screenshot.framer.invalid`;
}
function Da({ children: e }) {
  if (w(Ly).top) return _(O, { children: e });
  let t = r({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = r({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = r(new Set()).current,
    a = r({
      getLayoutId: C(({ id: e, name: r, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = r ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = r || e;
        if (!a && !i.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            H(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === r;
              d && !i.has(d) && (!r || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === r;
            if (u && !i.has(u) && (!r || p))
              return ((n.current[o][e] = u), (n.current.byLastId[c] = u), i.add(u), u);
          }
        let u = t.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, r] = l;
          return ((n.current[o][e] = t), (n.current.byLastId[r] = t), i.add(t), t);
        }
        let d = t.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = r || f || e,
          { layoutId: m, value: h } = Oa(p, (t.current.count[o][p] ?? -1) + 1, i);
        if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !r)) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: C(() => {
        ((t.current = {
          byId: { ...t.current.byId, ...n.current.byId },
          byLastId: { ...t.current.byLastId, ...n.current.byLastId },
          byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
          byName: { ...t.current.byName, ...n.current.byName },
          byLastName: { ...t.current.byLastName, ...n.current.byLastName },
          byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
          count: { ...t.current.count, byName: {} },
        }),
          (n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return _(Ly.Provider, { value: a, children: e });
}
function Oa(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function ka({ enabled: e = !0, ...n }) {
  let r = w(Ly),
    i = t(() => ({ ...r, enabled: e }), [e]);
  return _(Ly.Provider, { ...n, value: i });
}
function Aa(e) {
  let t = r(null);
  return (t.current === null && (t.current = e()), t.current);
}
function ja(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ma(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return T(`div`, {
    style: zy,
    children: [
      _(`div`, { className: `text`, style: Vy, children: r }),
      i && _(`div`, { className: `text`, style: Hy, children: i }),
    ],
  });
}
function Ma(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function W(e) {
  return Number.isFinite(e);
}
function Na(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Pa(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Fa(e) {
  return e != null && typeof e != `boolean` && !Na(e);
}
function Ia(e) {
  return (Math.PI / 180) * e;
}
function La(e) {
  return st(e) ? !1 : e === 2 || e === 5;
}
function Ra(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function za(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return Ba(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function Ba(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      U(e, `unknown constraint key`);
  }
}
function Va(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(za(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(za(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Ha(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(za(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(za(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Ua(e, t, n, r, i) {
  let a = Ha(W(e) ? e : qy, n, r, i),
    o = Va(W(t) ? t : Jy, n, r, i);
  return (
    W(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (W(n.left) && W(n.right)
        ? (o = a / n.aspectRatio)
        : (W(n.top) && W(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Wa(e, t) {
  return !W(e) || !W(t) ? null : e + t;
}
function Ga(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Ka(e) {
  return !e._constraints || Ga(e) ? !1 : e._constraints.enabled;
}
function qa(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    W(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    W(n) && W(r) ? { width: n, height: r } : null
  );
}
function Ja(e) {
  let t = qa(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return W(n) && W(r) ? { x: n, y: r, ...t } : null;
}
function Ya(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Ka(e) || r) return Ja(e);
  let i = Xa(e),
    a = Za(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Ky.toRect(i, o, null, n, null);
}
function Xa(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Gy.quickfix({
      left: W(t),
      right: W(n),
      top: W(r),
      bottom: W(i),
      widthType: Ra(c),
      heightType: Ra(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Za(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Qa() {
  return g.useContext(Yy).parentSize;
}
function $a(e) {
  return typeof e == `object`;
}
function eo(e) {
  return $a(e) ? e.width : e;
}
function to(e) {
  return $a(e) ? e.height : e;
}
function no(e, t) {
  return _(Xy, { parentSize: t, children: e });
}
function ro(e) {
  return Ya(e, Qa(), !0);
}
function io({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function ao(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function oo(e, t, n = $y) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!eb) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) eb = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = eb;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function so() {
  return Ea() ? Y.preview : Y.current();
}
function co(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? ub.variable(e) : e === `` ? `""` : e;
}
function lo(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return uo(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return fo(r);
    case `lower-roman`:
    case `upper-roman`:
      return mo(r);
    default:
      return uo(r);
  }
}
function uo(e) {
  return String(e).length;
}
function fo(e) {
  let t = 1;
  for (; po(t) < e; ) t++;
  return t;
}
function po(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function mo(e) {
  let t = 0;
  for (let n of pb) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function ho(e, t) {
  return ub.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function go(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function _o() {
  return Y.current() === Y.preview ? Mb.value : jb.value;
}
function vo(e) {
  return ib(e, _o, `framer-lib-combinedCSSRules`);
}
function yo(e) {
  return V(e) || rt(e);
}
function bo(e) {
  return !!e && Nb in e && e[Nb] === !0;
}
function xo(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return it(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return st(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return at(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return at(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = V(e.defaultValue) ? e.defaultValue : {};
        return (V(e.controls) && So(t, e.controls), t);
      }
      case `array`:
        return at(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function So(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!st(i) || bo(r)) continue;
    let a = xo(r);
    st(a) || (e[n] = a);
  }
}
function Co(e) {
  if (V(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function wo(e, t) {
  yo(e) && So(Co(e), t);
}
function To(e, t) {
  (Object.assign(e, { propertyControls: t }), wo(e, t));
}
function Eo(e) {
  return e.propertyControls;
}
function Do() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function Oo() {
  let [e] = d(() => Do());
  return e;
}
function ko(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Ao(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Wb) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function jo(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Mo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Gb) continue;
    let n = jo(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${jo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function No(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Ub) {
    let n = jo(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Po(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = No(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Mo(n, t, Ao(t.pixelWidth, t.pixelHeight)) };
}
function Fo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: mt(Vb.imagePlaceholderSvg),
  };
}
function Io(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Lo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Ro(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...Hb,
    objectPosition: Lo(e.positionX, e.positionY),
    objectFit: Io(e.fit),
  };
}
function zo(e) {
  let t = g.useRef(e ? `auto` : `async`),
    n = C((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = C(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = C(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function Bo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = Vb.useImageSource(e, t, n),
    s = Ro(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = zo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Po(e.nodeFixedSize, e, o);
  return _(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function Vo({ image: e, containerSize: t, nodeId: n }) {
  let r = g.useRef(null),
    i = Vb.useImageElement(e, t, n),
    a = Ro(e);
  return (
    g.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    _(`div`, { ref: r, style: { display: `contents`, ...Hb } })
  );
}
function Ho({ nodeId: e, image: t, containerSize: n }) {
  let r = g.useRef(null),
    i = Vb.useImageSource(t, n, e);
  return (
    g.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Ro(t);
      Vb.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    _(`div`, { ref: r, style: { display: `contents`, ...Hb } })
  );
}
function Uo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (z(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = B(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Vi(e * (t.pixelWidth / 2)),
        s = Vb.useImageSource(t, n);
      ((r = {
        ...Kb,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Lo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        Y.current() === Y.canvas
          ? Vb.canRenderOptimizedCanvasImage(Vb.useImageSource(t))
            ? _(Ho, { image: t, ...n })
            : _(Vo, { image: t, ...n })
          : _(Bo, { image: t, avoidAsyncDecoding: Y.current() === Y.export, ...n });
  let o = a ? Kb : (r ?? { ...Kb, ...Fo() });
  return i
    ? _(P.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : _(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function Wo(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function Go(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...Hb,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), _(P.div, { style: n }))
    : (Wo(e, n, !1), _(P.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Ko(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function qo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Jb.isImageObject(t)) return;
  let r = null;
  if (((r = z(n) ? { alt: ``, src: n } : fy.get(t, null)), Jb.isImageObject(r))) return Ko(r, e);
}
function Jo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Yo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? P[e] : P.div;
}
function Xo(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function Zo(e) {
  let t = {};
  return (!e || !Yb || Y.current() !== Y.canvas || Xo(t, e), t);
}
function Qo(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function $o(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = g.Children.map(t, (e) =>
        g.isValidElement(e) ? g.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function es(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function ts(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = w(Ly);
  return t(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function ns() {
  let [e, t] = g.useState(0);
  return g.useCallback(() => t((e) => e + 1), []);
}
function rs(e) {
  let t = ns();
  c(() => {
    let n = e?.current;
    if (n)
      return (
        Qb?.observeElementWithCallback(e.current, t),
        () => {
          Qb?.unobserve(n);
        }
      );
  }, [e, t]);
}
function is(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute($b)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(as)
    .map(os);
}
function as(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function os(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(as);
  return t ? os(t) : e;
}
function ss(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = w(Xb),
    l = Y.current() === Y.canvas;
  vv(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && Vb.queueMeasureRequest(Qo(i), t.current, n(t.current)));
  });
}
function cs(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && Vb.queueMeasureRequest(Qo(t.id), t, is(t));
}
function ls(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  nx && t && (e.translateZ = ex);
}
function us(e) {
  ((e.willChange = `transform`), ds(e, !0));
}
function ds(e, t) {
  let n = Y.current() === Y.canvas;
  if (!nx || !n) return;
  let r = (z(e.transform) && e.transform) || ``;
  t ? r.includes(tx) || (e.transform = r + tx) : (e.transform = r.replace(tx, ``));
}
function fs(e, t, n, r = !0) {
  if (!e) return;
  let i = Pb(e.style),
    a = n || i[t],
    o = () => {
      ps(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function ps(e) {
  return z(e) || B(e) || ct(e);
}
function ms(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function hs(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  ms(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function gs(e, t) {
  let n = [e, t];
  return ox.test(e) ? e : hs(1e3, sx, n, () => ax.multiplyAlpha(e, t));
}
function _s(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: gs(e.value, t) }))
  );
}
function vs(e, t) {
  let n = 0;
  return (
    _s(e, t).forEach((e) => {
      n ^= ix(e.value) ^ e.position;
    }),
    n
  );
}
function ys(e) {
  return e && cx.every((t) => t in e);
}
function bs(e) {
  return e && lx.every((t) => t in e);
}
function xs({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Ey(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = fy.get(e, null)),
      typeof e == `string` || Ey(e)
        ? (n.background = e)
        : dx.isLinearGradient(e)
          ? (n.background = dx.toCSS(e))
          : px.isRadialGradient(e)
            ? (n.background = px.toCSS(e))
            : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function G(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Ss(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Cs(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function ws(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    et(n)
      ? (t.cornerShape = pe(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    G(e, `size`, t),
    G(e, `width`, t),
    G(e, `height`, t),
    G(e, `minWidth`, t),
    G(e, `minHeight`, t),
    G(e, `top`, t),
    G(e, `right`, t),
    G(e, `bottom`, t),
    G(e, `left`, t),
    G(e, `position`, t),
    G(e, `overflow`, t),
    G(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && G(e, `border`, t),
    G(e, `borderRadius`, t),
    G(e, `radius`, t, `borderRadius`),
    G(e, `color`, t),
    G(e, `shadow`, t, `boxShadow`),
    G(e, `x`, t),
    G(e, `y`, t),
    G(e, `z`, t),
    G(e, `rotate`, t),
    G(e, `rotateX`, t),
    G(e, `rotateY`, t),
    G(e, `rotateZ`, t),
    G(e, `scale`, t),
    G(e, `scaleX`, t),
    G(e, `scaleY`, t),
    G(e, `skew`, t),
    G(e, `skewX`, t),
    G(e, `skewY`, t),
    G(e, `originX`, t),
    G(e, `originY`, t),
    G(e, `originZ`, t),
    xs(e, t),
    t
  );
}
function Ts(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Pb(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Es(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (hx.has(t)) return `pointer`;
}
function Ds(e) {
  return Os(e) ? !0 : e.style ? !!Os(e.style) : !1;
}
function Os(e) {
  return gx in e && (e[gx] === `scroll` || e[gx] === `auto`);
}
function ks(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = F(e.minWidth),
    h = F(e.minHeight),
    g = F(e.maxWidth),
    _ = F(e.maxHeight);
  return {
    top: F(n),
    left: F(t),
    bottom: F(r),
    right: F(i),
    width: F(a),
    height: F(o),
    size: F(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function As(e) {
  let t = w(Xb),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = ks(e),
    s = ro(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !Ts(e) && !e.__fromCanvasComponent && !Ds(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let d = g.Children.count(e.children) > 0 &&
      g.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    f = ws(e);
  (a === void 0 && !i && (Ss(f) || (c.width = _x.width), Cs(f) || (c.height = _x.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let p = {};
  (Ka(o) &&
    s &&
    !io(e) &&
    (p = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, f, p, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    rx.applyWillChange(e, c, !0));
  let m = c;
  c.transform || (m = { x: 0, y: 0, ...c });
  let h = Do();
  return (
    e.positionSticky
      ? (!h || Vb.isOnPageCanvas || t) &&
        ((m.position = `sticky`),
        (m.willChange = `transform`),
        (m.top = e.positionStickyTop),
        (m.right = e.positionStickyRight),
        (m.bottom = e.positionStickyBottom),
        (m.left = e.positionStickyLeft))
      : h &&
        (e.positionFixed
          ? (m.position = Vb.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (m.position = `absolute`)),
    `rotate` in m && m.rotate === void 0 && delete m.rotate,
    [m, s]
  );
}
function js(e) {
  let t = {};
  for (let n in e)
    (ge(n) || Ib(n)) && !vx.has(n)
      ? (t[n] = Pb(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Pb(e)[n] != `boolean` && !e.transition && (t.transition = Pb(e)[n]));
  return t;
}
function Ms(e) {
  return `data-framer-name` in e;
}
function Ns(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Ps(e) {
  return _(P.div, { layoutId: xx, style: wx, children: e.children });
}
function Fs(e, t) {
  rt(e) ? e(t) : Is(e) && (e.current = t);
}
function Is(e) {
  return V(e) && `current` in e;
}
function Ls() {
  let e = Aa(() => new Set()),
    t = Aa(() => new Map());
  return Aa(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Rs(e) {
  let t = r(null),
    n = Ls();
  return Aa(() => (Is(e) ? n(e) : rt(e) ? n(t, e) : n(t)));
}
function zs(e, t, n) {
  let i = r(),
    a = r();
  (qr(
    () => {
      a.current !== void 0 && (a.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      a.current !== !1 &&
      ((a.current = !1), e.unobserve(i.current), e.observe(t), (i.current = t)));
}
function Bs(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Tx({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Vs(e, t, n) {
  let r = Aa(() => `${n.rootMargin}`),
    i = w(Ex),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  zs(
    e,
    (e) => {
      if (a && e !== null) return Bs(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Hs(e, t, n) {
  let r = g.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  Dx(
    e,
    g.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Ws(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: Ox, rootMargin: s, enabled: i ?? !0 }
  );
}
function Us(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, __.innerHeight);
}
function Ws({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Us(t, e) >= r;
}
function Gs() {
  return new Map();
}
function Ks() {
  return Aa(Gs);
}
function qs(e, t = []) {
  let { register: n, deregister: r } = w(Nx);
  c(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function Js(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Ys(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (W(t.originX) && (r.originX = t.originX),
      W(t.originY) && (r.originY = t.originY),
      W(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (W(n.originX) && (r.originX = n.originX),
      W(n.originY) && (r.originY = n.originY),
      W(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Xs(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Zs(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return zx.PushLeft;
    case `left`:
      return zx.PushRight;
    case `bottom`:
      return zx.PushUp;
    case `top`:
      return zx.PushDown;
  }
}
function Qs(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return zx.OverlayLeft;
    case `left`:
      return zx.OverlayRight;
    case `bottom`:
      return zx.OverlayUp;
    case `top`:
      return zx.OverlayDown;
  }
}
function $s(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return zx.FlipLeft;
    case `left`:
      return zx.FlipRight;
    case `bottom`:
      return zx.FlipUp;
    case `top`:
      return zx.FlipDown;
  }
}
function ec(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return nc(e, t.transition, t.component);
    case `removeOverlay`:
      return rc(e);
    case `add`:
      return ic(e, t.key, t.transition, t.component);
    case `remove`:
      return sc(e);
    case `update`:
      return tc(e, t.key, t.component);
    case `back`:
      return ac(e);
    case `forward`:
      return oc(e);
    default:
      return;
  }
}
function tc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function nc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function rc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function ic(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i && i.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? fc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = uc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = cc(e, t, c),
    p = dc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function ac(e) {
  let t = { ...e.containers },
    n = sc(e);
  if (n) return ((n.containers = t), n);
}
function oc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = ic(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function sc(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (H(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = lc(e, r, n),
    u = dc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function cc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function lc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function uc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function dc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = pc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function fc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function pc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return mc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return mc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return mc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return mc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function mc(e, t, n) {
  let r = {},
    i = {};
  return (
    Vx.forEach((e) => {
      ((r[e] = Ix[e]), (i[e] = { ...n, from: Ix[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Pb(Ix)[a]}%` : Pb(Ix)[a];
        ((Pb(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function hc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function gc({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function _c({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : Gx;
}
function vc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function yc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function bc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else if (e < n) {
    let t = r[e + 1];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  }
}
function xc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Sc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Cc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t && t.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t && t.transition) return t.transition.enter;
    }
}
function wc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t && t.transition.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t && t.transition.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return Gx;
}
function Tc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Ec(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Dc(e) {
  return g.Children.map(e.component, (t) => {
    if (!Fa(t) || !Pa(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? V(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      g.cloneElement(t, n)
    );
  });
}
function Oc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function kc(e, t) {
  let n = le(),
    r = nt();
  return _(Wx, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function Ac(e) {
  return Qx in e;
}
function jc(e, t) {
  if (!Ac(e)) return;
  let n = fy.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Mc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Nc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Pc(e, t) {
  let n = [];
  (W(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    W(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    W(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    W(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    W(e.invert) && n.push(`invert(${e.invert / 100})`),
    W(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    W(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    W(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Mc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Fc(e, t) {
  W(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Ic(e, t) {
  (Fc(e, t), Pc(e, t));
}
function Lc(e, t) {
  let n,
    r = (...r) => {
      (__.clearTimeout(n), (n = __.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      __.clearTimeout(n);
    }),
    r
  );
}
function Rc(...e) {
  return e.filter(Boolean).join(` `);
}
function zc(e) {
  if (e.startsWith(rS)) return e.substr(iS);
}
function Bc(e, t, n) {
  let r = j.map(e, (e) => (y(e) ? u(e, t) : e));
  return n ? r : _(O, { children: r });
}
function Vc(e) {
  let t = Aa(() => Hc(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Hc(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Uc(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Uc(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      j.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      j.map(i, (e) => {
        if (y(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = rt(a) ? a(e.props) : a;
          return u(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return _(O, { children: i(e, t) });
  };
  return (
    (a.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: a,
    }
  );
}
function Uc(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Fs(n, e), Fs(t, e));
  };
}
function Wc(e, t, n, r, i, a, o, s) {
  let c = g.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !g.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Jc(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = qc([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = qc([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = _(
        oS.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = Kc(e, a, r);
    (f.length
      ? (H(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = _(
          `div`,
          { className: `${sS} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : H(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    H(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, _(`div`, { className: cS }, `property-overrides-separator`)]
  );
}
function Gc(e) {
  return e.split(`-`)[2];
}
function Kc(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${Gc(a)}`);
  }
  return r;
}
function qc(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Jc(e, t) {
  for (let n of Object.keys(t)) if (!Pt(e[n], t[n], !0)) return !0;
  return !1;
}
function Yc(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Xc(e) {
  return g.forwardRef(({ optimized: t, ...n }, r) => {
    let i = g.useContext(aS),
      a = g.useContext(oS)?.variants,
      o = n[gS];
    o && !Fn() && mS.setAll(o, a, t ? n : null, i);
    let s = vS(n);
    return _(e, { ref: r, ...n, ...s });
  });
}
function Zc(e) {
  return z(e) || Array.isArray(e);
}
function Qc(e) {
  return e in xS;
}
function $c(e, t) {
  let n = Aa(() => ({ values: bS(t ? e : void 0) }));
  return (
    g.useEffect(() => {
      if (!t)
        for (let e of yS) {
          let t = xS[e];
          st(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function el(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: n,
    loopTransition: i,
    loopRepeatType: a,
    loop: o,
    loopPauseOffscreen: s,
  },
  l
) {
  let u = Ge(),
    f = Aa(bS),
    p = r(!1),
    h = TS(),
    g = r(null),
    _ = C(async () => {
      if (!o) return;
      let e = i || void 0,
        t = p.current && a === `mirror`,
        n = t ? xS : o,
        r = t ? o : xS;
      return (
        (p.current = !p.current),
        (g.current = Promise.all(
          yS.map((t) => {
            if (!(u && t !== `opacity`))
              return (
                f[t].jump(r[t] ?? xS[t]),
                new Promise((i) => {
                  let a = { ...e, onComplete: () => i() },
                    o = n[t] ?? r[t];
                  typeof o == `number` && Ae(f[t], o, a);
                })
              );
          })
        )),
        g.current
      );
    }, [o, a, i, u]),
    [v, y] = d(!1),
    b = r(!1),
    x = C(async () => {
      !e || !b.current || (await _(), await h(n ?? 0), x());
    }, [_, h, e, n]),
    S = C(() => {
      b.current || ((b.current = !0), m(() => y(!0)), x());
    }, [x]),
    w = C((e = !0) => {
      (yS.forEach((e) => {
        f[e].stop();
      }),
        yS.forEach((e) => {
          f[e].set(xS[e]);
        }),
        (p.current = !1),
        e && ((b.current = !1), m(() => y(!1))));
    }, []),
    T = e && o,
    E = C(() => {
      document.hidden ? w(!1) : b.current && ((b.current = !1), S());
    }, [S, w]);
  (c(() => {
    if (T)
      return (
        document.addEventListener(`visibilitychange`, E),
        () => {
          document.removeEventListener(`visibilitychange`, E);
        }
      );
  }, [T, E]),
    c(() => {
      (T && s) || (T ? S() : w());
    }, [S, w, s, T]),
    c(() => () => w(), [w]));
  let D = r(!1),
    O = C(async () => {
      g.current && (await g.current, !D.current && w());
    }, [w]);
  Dx(
    l,
    C(
      (e) => {
        e.isIntersecting ? ((D.current = !0), S()) : ((D.current = !1), O());
      },
      [S, O]
    ),
    { enabled: T && s }
  );
  let k = v || !s;
  return t(() => ({ values: f, style: T && k ? SS : CS }), [T, k]);
}
function tl(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function nl(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = g.useRef(null),
    c = Ge(),
    l = g.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : tl(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = xe(),
    d = R(u, l),
    f = se(a && s.current === null ? `hidden` : n),
    p = se(0),
    m = w(Ex);
  return (
    zs(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Bs(m, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            je.update(() => {
              (d.set(l(u.get())), a && f.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Vt(() => {
      o && d.set(0);
    }),
    { values: { y: c || !o ? p : d }, style: o ? { ...SS, visibility: f } : CS }
  );
}
function rl(e) {
  return typeof e == `object` && !!e;
}
function il(e) {
  if (rl(e)) return e?.transition;
}
function al(e, t, n, r, i, a) {
  let o = il(e);
  return Promise.all(
    yS.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = rl(e) ? (e?.[s] ?? xS[s]) : xS[s];
          if ((et(u) && (u = u.get()), !B(u))) return c();
          let d = he.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (z(i) && !l?.hasAnimated && __.MotionHandoffAnimation) {
            let e = __.MotionHandoffAnimation(i, s, je);
            e && (f = e);
          }
          a ? l.set(u) : Ae(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function ol(
  { initial: e, animate: n, exit: i, presenceInitial: a, presenceAnimate: o, presenceExit: s },
  c,
  l,
  u,
  d
) {
  let f = a ?? e,
    p = o ?? n,
    m = s ?? i,
    [h, g] = oe(),
    _ = r({ lastPresence: !1, lastAnimate: p, hasMounted: !1, running: !1 }),
    v = Aa(() => {
      let e = f ?? u;
      if (!V(e)) return { values: bS() };
      let t = {};
      for (let n in e) {
        let r = V(e) ? e[n] : void 0;
        B(r) && (t[n] = r);
      }
      return { values: bS(t) };
    });
  zs(
    c,
    (e) => {
      let { hasMounted: t } = _.current;
      if (t && p) return;
      let n = he.get(e);
      if (n) {
        Object.assign(_.current, { hasMounted: !0 });
        for (let e in v.values) {
          if (!Qc(e)) continue;
          let t = u?.[e];
          n.setBaseTarget(e, B(t) ? t : xS[e]);
        }
      }
    },
    [p]
  );
  let y = Ge();
  zs(c, (e) => {
    if (!l) {
      g?.();
      return;
    }
    if (e === null) return;
    if (h !== _.current.lastPresence) {
      (Object.assign(_.current, { lastPresence: h }),
        h
          ? f &&
            p &&
            (Object.assign(_.current, { running: !0 }),
            al(p, v, y, c, d).then(() => Object.assign(_.current, { running: !1 })))
          : m
            ? (Object.assign(_.current, { running: !0 }),
              al(m, v, y, c, d)
                .then(() => Object.assign(_.current, { running: !1 }))
                .then(() => g()))
            : g());
      return;
    }
    let { lastAnimate: t, running: n } = _.current;
    Pt(p, t) ||
      !p ||
      (Object.assign(_.current, { lastAnimate: p }),
      al(p, v, y, c, d, !n).then(() => Object.assign(_.current, { running: !1 })));
  });
  let b = l && p;
  return t(() => ({ values: v.values, style: b ? SS : CS }), [b]);
}
function sl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function cl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = sl(o.current, document.documentElement) - OS - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function ll(e, t = 0) {
  return e < t ? `up` : `down`;
}
function ul(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Bt();
  g.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return Ie((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = ll(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < kS) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function dl(e, t, n) {
  let r = cl(e, t),
    i = [...jS],
    a = r[0];
  if (!B(a)) return MS;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!B(e)) return MS;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function fl(e) {
  return {
    x: e?.x ?? xS.x,
    y: e?.y ?? xS.y,
    scale: e?.scale ?? xS.scale,
    opacity: e?.opacity ?? xS.opacity,
    transformPerspective: e?.transformPerspective ?? xS.transformPerspective,
    rotate: e?.rotate ?? xS.rotate,
    rotateX: e?.rotateX ?? xS.rotateX,
    rotateY: e?.rotateY ?? xS.rotateY,
    skewX: e?.skewX ?? xS.skewX,
    skewY: e?.skewY ?? xS.skewY,
    transition: e?.transition ?? void 0,
  };
}
function pl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return g.useMemo(
    () => ({
      initial: r ?? fl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? fl({ opacity: t }),
      exit: i ?? fl(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function ml(e, n) {
  let r = Ge(),
    i = pl(e),
    a = e.styleAppearEffectEnabled,
    o = $c(a ? i.initial : i.animate, a),
    s = g.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = Bt(),
    l = g.useRef(),
    u = g.useCallback(async ({ transition: t, ...a }, s) => {
      let c = t ?? i.animate.transition ?? e.transition;
      await l.current;
      let u = he.get(n.current);
      l.current = Promise.all(
        yS.map((e) => {
          s && o.values[e].set(i.initial[e] ?? xS[e]);
          let t = a[e] ?? xS[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((n) => {
              if (r && e !== `opacity`) (B(t) && o.values[e].set(t), n());
              else {
                let r = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => n() };
                typeof t == `number` && Ae(o.values[e], t, r);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && s.current.lastAppearState === !0;
  Hs(
    n,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = s.current;
      if (t) {
        s.current.scheduledAppearState = e;
        return;
      }
      ((s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = e),
        n !== e && u(e ? i.animate : i.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let f = e.targets && a && !e.scrollDirection;
  return (
    g.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return Ie((r, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = dl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = fe(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = Pb(i)[l];
        d && u(d);
      });
    }, [c, f]),
    ul(e.scrollDirection, (e) => void u(e ?? i.animate), { enabled: a, repeat: !e.animateOnce }),
    Vt(() => {
      if (a && !(!e.targets && !e.scrollDirection))
        for (let e of yS) o.values[e].set(i.initial?.[e] ?? xS[e]);
    }),
    t(() => ({ values: o.values, style: a ? SS : CS }), [a])
  );
}
function hl(e, t) {
  let n = g.useRef({});
  g.useEffect(() => {
    if (t !== void 0)
      for (let r of qg(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = We({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), je.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function gl(e, t) {
  let n = FS();
  return {
    inputRange: cl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of yS) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function _l(e) {
  let t = FS();
  for (let { target: n } of e) for (let e of yS) t[e]?.push(n[e]);
  return t;
}
function vl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = Ge(),
    s = $c(PS(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Bt();
  return (
    M(() => {
      if (!(c || !l))
        return Ie((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = gl(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of yS)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(fe(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    zs(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = _l(n);
        return Ie(
          (e, { y: t }) => {
            for (let e of yS)
              (o && e !== `opacity`) ||
                (IS.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(fe(t.progress, IS, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    hl(s.values, r),
    Vt(() => {
      if (c) return;
      let e = PS(n, o);
      for (let t of yS) s.values[t].set(e?.[t] ?? xS[t]);
    }),
    g.useMemo(() => ({ values: s.values, style: t ? SS : CS }), [t])
  );
}
function yl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function bl(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = zc(n);
    if (r) {
      for (let i of RS)
        if (LS[i]?.has(r)) {
          t[i][r] = Pb(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Pb(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = yl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = yl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function xl(e) {
  return V(e) && VS in e;
}
function Sl(e, t) {
  if (!e || !V(e)) return t;
  for (let n in e) {
    let r = e[n];
    !et(r) || !Qc(n) || (B(r.get()) && t[n].push(r));
  }
}
function Cl(e) {
  return z(e) || Array.isArray(e);
}
function wl() {
  return g.useContext(US);
}
function Tl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function El() {
  if (f === void 0 || KS)
    return _(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw JS;
}
function Dl({ children: e }) {
  return w(XS) ? _(O, { children: e }) : _(E, { fallback: YS, children: e });
}
function Ol() {
  return _(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function kl(e, t) {
  if (!Pg || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  hn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Al(...e) {
  console.error(...e);
}
function jl() {
  return Y.current() !== Y.canvas;
}
function Ml({ getErrorMessage: e, fallback: t, children: n }) {
  return jl()
    ? _(Nl, { fallback: t, children: _(QS, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Nl({ children: e, fallback: t = ZS }) {
  return f === void 0 ? _(E, { fallback: t, children: e }) : _(Dl, { children: e });
}
function Pl() {
  return g.useContext(eC);
}
function Fl() {
  let e = Pl();
  return g.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function Il({ children: e, scopeId: t, nodeId: n }) {
  let r = Pl(),
    i = g.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return _(eC.Provider, { value: i, children: e });
}
function Ll(e, t) {
  return `${tC}${e}:${t}`;
}
function Rl(e, t) {
  return Bl(`component`, e, t);
}
function zl(e, t) {
  return Bl(`override`, e, t);
}
function Bl(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Ll(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function Vl(e, t, n, r, i, a) {
  let o = Ul(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Hl(e, t, n, r) {
  return Ul(e, t, n, r);
}
function Ul(e, t, n, r) {
  return !!(st(n) || (n === 1 && r && e === t));
}
function Wl(e, t, n, r, i, a) {
  let o = Pl();
  if (st(t) || st(n)) return _($S, { children: e });
  let { disableCustomCode: s } = X_();
  return s && r
    ? _(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (Vl(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = _(Ml, { getErrorMessage: Rl.bind(null, t, n), fallback: null, children: e })),
      i && (e = _(Il, { scopeId: t, nodeId: n, children: e })),
      e);
}
function Gl(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Kl(e) {
  return !(!e || e.placement || e.alignment);
}
function ql(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      U(e);
  }
}
function Jl(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${ql(t)}, -100%`;
    case `right`:
      return `0%, ${ql(t)}`;
    case `bottom`:
      return `${ql(t)}, 0%`;
    case `left`:
      return `-100%, ${ql(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Yl(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(uC)) {
      let e = n.getAttribute(uC);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Xl(e) {
  let { registerCursors: t } = w(iC),
    n = Aa(() => e),
    r = A();
  M(() => t(n, r), [t, r]);
}
function Zl(e) {
  return !!(e && typeof e == `object` && fC in e);
}
function Ql(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function $l() {
  return Y.current() === Y.canvas;
}
function eu(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function tu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function nu(e, t, n, r) {
  if (z(e)) {
    let i = eu(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = Ci(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function ru(e) {
  return z(e) && e.startsWith(`data:${yC}`);
}
function iu(e) {
  if (ru(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(yC.length),
        r = t.searchParams,
        i = r.has(hC) ? r.get(hC) : void 0,
        a,
        o = r.get(gC),
        s = r.get(_C),
        c = r.get(vC);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function au(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = iu(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function ou(e) {
  if (!ru(e)) return e;
  let t = iu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: su(i) };
}
function su(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function cu(e, n, r, i, a, o) {
  let s = w(bC),
    c = Fl(),
    l = t(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: c }), [n, r, c]),
    u = Lt(),
    d = zt(),
    { locales: f } = Yr(),
    p = t(() => {
      let e = Zl(i) ? i : ou(i);
      if (e) return nu(e, u, d, f);
    }, [d, i, u, f]),
    m = !!(!$l() && s?.nodeId && l.nodeId),
    h = C(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Vn(e))) {
            du(a.href, ``, `_blank`);
            return;
          }
          p ? a.navigate?.() : du(a.href, a.rel, a.target);
        }
      },
      [a, p]
    ),
    g = C(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), du(a.href, ``, `_blank`));
      },
      [a]
    ),
    v = C(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          p ? a.navigate?.() : du(a.href, a.rel, a.target));
      },
      [a, p]
    );
  zs(
    o,
    (e) => {
      e !== null && m && (e.dataset.hydrated = `true`);
    },
    [m]
  );
  let y = e;
  return (
    m &&
      (j.forEach(e, (e) => {
        uu(e) &&
          (H(
            lu(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          H(
            lu(l),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          mC.collectNestedLink(s, l));
      }),
      (y = j.map(e, (e) => {
        if (!uu(e)) return e;
        let t = fu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: h,
            onAuxClick: g,
            onKeyDown: v,
            as: r.as && fu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return k(t, { ...i, ref: a }, n);
      }))),
    _(bC.Provider, { value: l, children: y })
  );
}
function lu(e) {
  return !st(e?.nodeId);
}
function uu(e) {
  return y(e) && (fu(e.type) !== e.type || fu(e.props.as) !== e.props.as);
}
function du(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function fu(e) {
  return e === `a` ? `span` : Te(e) && me(e) === `a` ? P.span : e;
}
function pu(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : pu(e.parentElement, t)
      : null;
}
function mu({ children: e }) {
  return _(Dl, { children: e });
}
function hu(e) {
  return b(function (t, n) {
    return _(mu, { children: _(e, { ...t, ref: n }) });
  });
}
function gu(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return vu(e, t, o, s, a, c, l, i, r);
}
function _u(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && eu(t))
    try {
      let [i, a] = t.split(`#`, 2);
      H(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      H(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = Ci(e.routes, o, void 0, r),
        u = e.getRoute(s);
      if (u)
        return {
          routeId: s,
          route: u,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, c),
          locale: l ? r?.find(({ id: e }) => e === l) : void 0,
        };
    } catch {}
}
function vu(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = ci(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function yu() {
  let e = w(EC),
    t = zt()?.pathVariables;
  return e || t;
}
function bu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(TC)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function xu() {
  let e = s.connection || s.mozConnection || s.webkitConnection || {},
    t = s.deviceMemory && s.deviceMemory > kC,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? AC : jC));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(u, { threshold: OC }),
    c = 0;
  async function l(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = PC.get(n);
    if (!a?.size || NC.has(n)) return;
    (++c, NC.add(n));
    let s = i()?.catch(() => {});
    (o.unobserve(t), MC.delete(t));
    for (let e of a) (o.unobserve(e), MC.delete(e));
    (a.clear(), PC.delete(n), await s, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = MC.get(e);
      if (!n || NC.has(n.id)) {
        (o.unobserve(e), MC.delete(e));
        continue;
      }
      let r = n.id,
        a = PC.get(r),
        s = PC.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (c >= i) continue;
        (a ? a.add(e) : PC.set(r, new Set([e])), setTimeout(l, DC, n, e));
      } else (a && a.delete(e), s <= 1 && PC.delete(r));
    }
  }
  return (e, t, n) => {
    if (!NC.has(n))
      return (
        MC.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (MC.delete(e), o.unobserve(e));
        }
      );
  };
}
function Su(e, t) {
  let n = eu(e),
    r = {
      href: e === `` || tu(e, n) ? e : `https://${e}`,
      target: Cu(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Qn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Cu(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function wu(e, t) {
  console.warn(
    gt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Tu(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return wu(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return pt(i) ? i.catch(wu) : i;
  } catch (e) {
    wu(e);
  }
}
function Eu(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Tu(o, r, n);
      pt(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Du() {
  let e = Tn();
  return C((t, n, r, i = []) => Eu(t, n, r, e, i), [e]);
}
function Ou({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = Tn();
  return C(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = Zl(r) ? r : ou(r);
      if (!Zl(c))
        return hn(
          `published_site_click`,
          {
            ...s,
            href: o ? ku(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (z(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (pt(n) ? await n : n) ?? null;
        }
      }
      return hn(
        `published_site_click`,
        {
          ...s,
          href: o ? ku(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function ku(e) {
  try {
    let t = new URL(e, __.document.baseURI);
    return t.origin === __.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Au(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function ju(e, t, n) {
  return async (r) => {
    let i = Vn(r),
      a = pu(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await q_({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Mu(e, t, n, r, i, a, o, s) {
  if (!n) return Su(e, r);
  let c = _u(t, e, s, o);
  if (!c) return Su(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Su(e, r);
  let m = ci(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !Fg,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Cu(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => Au(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: ju(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && bu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function Nu(e, t, n) {
  let r = Pu(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (rt(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (rt(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Pu(e, t) {
  let n = V(e) ? e : void 0,
    r = n && !ot(n),
    i = t && !ot(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Fu(e, t, n) {
  if (!(t && kn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Iu } : { ...i, onTap: r }) : e;
}
function Iu(e) {
  let t = pu(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Lu(e, t, n, r, i, a) {
  let o = Zl(e) ? e : ou(e);
  if (!Zl(o)) return z(e) ? Su(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (pt(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return ci(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function Ru({ EditorBar: e, fast: n = !1 }) {
  let r = w(LC),
    i = ee(Rg, n ? BC : VC, Bg),
    a = X_(),
    o = t(() => {
      let e = {},
        t;
      for (t in a)
        a.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = a[t]);
      return e;
    }, [a]);
  return !e || !r || !i
    ? null
    : _(zC, { children: _(E, { children: _(e, { framerSiteId: r, features: o }) }) });
}
function zu({ currentRoutePath: e, routerAPI: t, children: n }) {
  let i = r(),
    a = r(),
    o = r(t),
    s = r(null);
  ((o.current = t),
    c(() => {
      e && ((i.current ??= new Set()), i.current.add(e), a.current?.(e));
    }, [e]));
  let [l] = d(() => ({
    getInitialState: () => ({
      visitedPages: i.current ?? new Set(),
      getCurrentRoutePath: () =>
        o.current ? Vu(o.current, o.current.currentRouteId, o.current.currentPathVariables) : ``,
      resolveRoute: (e) => (o.current ? Vu(o.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        a.current = e;
      },
      sendTrackingEvent: async (e) => {
        o.current && Bu(o.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return _(HC.Provider, { value: l, children: n });
}
async function Bu(e, t) {
  if (!gn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    hn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Vu(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? Zn(r.path, n) : r.path;
}
function Hu({ children: e, loadSnippetsModule: t }) {
  return _($C.Provider, { value: t, children: e });
}
function Uu() {
  return g.useContext($C);
}
function Wu(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Gu(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (H(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (H(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      U(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Ku(a.createContextualFragment(e), r, i));
}
async function Ku(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = qu(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Ku(r, e, null)));
  }
}
function qu(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Ju(r, t, n);
}
function Ju(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Yu(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = YC), (n = XC));
      break;
    case `bodyEnd`:
      ((t = ZC), (n = QC));
      break;
    case `headStart`:
      ((t = GC), (n = KC));
      break;
    case `headEnd`:
      ((t = qC), (n = JC));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Xu(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Wu(e),
    s = t.nextSibling;
  for (; s && s !== n; ) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function Zu(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Yu(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Xu(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Qu(t, o), s)) {
      await Gu(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Wu(e.id),
      u = `${c}
${e.code}
${l}`,
      d = ed(e.id, n, r, i);
    d ? await Gu(u, d, `afterend`) : await Gu(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Qu(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    ($u(n) && n.remove(), (n = e));
  }
}
function $u(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function ed(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Xu(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function td() {
  let e = Uu();
  return C(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(UC),
        o = a && a.dataset[WC] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await Zu(t, n, r);
      }
    },
    [e]
  );
}
function nd(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function rd() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((ew = e.timeZone), (tw = e.locale));
}
function id({ routeId: e, url: t, pathVariables: n, localeId: r }) {
  Ir({ routeId: e, pathVariables: n, localeId: r, paginationInfo: Dr()?.paginationInfo }, t);
}
function ad(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let { historyPath: i, hash: a, pathVariables: o, localeId: s, currentRoutePath: c } = n,
    l = c !== void 0 && c === r,
    u = Dr();
  Ir(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      localeId: s,
      queryParamBackAnchorSearch: l ? u?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function od(e, t, n, r) {
  let i = Dr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Ir(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
      },
      ci(t, n)
    ));
}
function sd() {
  return In() >= 17 ? aw : iw;
}
function cd(e = md) {
  let t = (e) => {
    e.persisted && _d();
  };
  Nn() && (f.addEventListener(`pageshow`, t), (rw = Date.now() - sd()));
  let n = ld(),
    r = hd(e);
  return function () {
    (f.removeEventListener(`pageshow`, t), n(), r());
  };
}
function ld() {
  let e = f.history.scrollRestoration;
  return (
    (f.history.scrollRestoration = `manual`),
    function () {
      f.history.scrollRestoration = e;
    }
  );
}
function ud(e) {
  return V(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function dd() {
  return { x: f.scrollX, y: f.scrollY };
}
function fd() {
  let e = Dr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (ud(t)) return t;
}
function pd(e) {
  let t = Dr();
  t && (Pr({ ...t, scrollPosition: e }, void 0, !0), Nn() && (rw = Date.now()));
}
function md(e, t = !1) {
  let n = fd();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (Nn() && !t) {
      let e = sd();
      if (Date.now() - rw < e) return;
    }
    pd(e);
  }
}
function hd(e) {
  let t = () => {
      e(dd());
    },
    n = () => {
      e(dd(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), f.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), f.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in f)) {
    let e = gd(t);
    return function () {
      (i(), e());
    };
  }
  return (
    f.addEventListener(`scrollend`, t),
    function () {
      (i(), f.removeEventListener(`scrollend`, t));
    }
  );
}
function gd(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || Or(Dr()) !== t) && e());
    },
    a = () => {
      let e = Or(Dr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = Nn() ? sd() : 100;
      t = f.setTimeout(i, a);
    };
  return (
    f.addEventListener(`scroll`, a),
    function () {
      (f.removeEventListener(`scroll`, a), r());
    }
  );
}
function _d() {
  let e = fd();
  return e ? (f.scrollTo(e.x, e.y), !0) : !1;
}
function vd(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function yd(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (vd(n, t), !0);
}
function bd(e, t, n) {
  n !== `preserve-scroll-position` &&
    je.render(
      () => {
        (n === `restore-scroll-position` && _d()) || yd(e, t) || f.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function xd(e, t) {
  je.read(() => {
    f.scrollY !== 0 ||
      f.scrollX !== 0 ||
      je.render(
        () => {
          _d() || yd(e, t);
        },
        !1,
        !0
      );
  });
}
function Sd(e) {
  let t = X_().scrollRestoration,
    n = r(void 0),
    i = r(!1),
    a = !!(t && !e),
    o = C(
      (e) => {
        ((n.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = C((e, t = !1) => {
      i.current || md(e, t);
    }, []),
    c = C(() => {
      a && (i.current = !0);
    }, [a]),
    l = C(() => n.current !== void 0 || i.current, []),
    u = C((e, t) => {
      let r = n.current;
      !r ||
        r.routeId !== e ||
        r.remountKey !== t ||
        ((n.current = void 0), (i.current = !1), bd(r.hash, r.shouldSmoothScroll, r.behavior));
    }, []);
  return (
    M(() => {
      if (a) return cd(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: u,
    }
  );
}
function Cd({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: i } = n;
  return (
    M(() => {
      r(e, t);
    }),
    c(() => {
      i && xd(f.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function wd() {
  let [e, t] = g.useState(0);
  return [e, g.useCallback(() => t((e) => e + 1), [])];
}
function Td(e) {
  if (!e) return Ng;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Ed(e) {
  let t = Hr(e),
    n = r(void 0),
    i = C(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: C(
      async (e, r, a, o = !0) => {
        i();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = Wt(c);
        if ((r.promise.finally(l), a === void 0)) return (e(c), r.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(Ng);
        if ((t(d, s, a), e(c), await r.promise, c?.aborted)) return;
        let p = f.navigation?.transition;
        u();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || fv();
      },
      [i, t]
    ),
    cancelPendingNavigation: i,
  };
}
function Dd({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: i,
  initialRoute: a,
  notFoundPage: o,
  collectionUtils: s,
  routes: u,
  initialLocaleId: d,
  initialCollectionItemId: p,
  locales: h = Zg,
  preserveQueryParams: g = !1,
  LayoutTemplate: v,
  EditorBar: y,
  siteCanonicalURL: b,
  adaptLayoutToTextDirection: x,
}) {
  (hi(), Lr({ disabled: n, routeId: a, initialPathVariables: i, initialLocaleId: d }));
  let S = Sr(),
    [w, E] = wd(),
    D = Tr(`framer-route-change`),
    O = t(() => (!X_().synchronousNavigationOnDesktop || !Bn() ? m : (e) => e()), []),
    k = td(),
    A = r(!0),
    j = r(),
    ee = r(a),
    te = r(i),
    N = r(d),
    ne = Sd(n),
    { isNavigationCommitPending: P, usesCustomScrollRestoration: re } = ne,
    { startNavigation: ie, cancelPendingNavigation: ae } = Ed(re),
    oe = ne.scheduleScroll,
    se = N.current,
    ce = t(() => h.find(({ id: e }) => (se ? e === se : e === Qg)) ?? null, [se, h]),
    le = ce?.textDirection ?? `ltr`,
    ue = x ? le : `ltr`;
  M(() => {
    x && document.documentElement.setAttribute(`dir`, le);
  }, [le, x]);
  let de = Br(),
    fe = t(
      () => ({
        activeLocale: ce,
        locales: h,
        setLocale: async (e) => {
          let t = D({ localized: !0 });
          await q_({ priority: `user-blocking`, continueAfter: `paint` });
          let r;
          z(e) ? (r = e) : V(e) && (r = e.id);
          let i = h.find(({ id: e }) => e === Qg),
            a = h.find(({ id: e }) => e === r);
          if (!a) return;
          let o = ee.current,
            s = u[o];
          if (s)
            try {
              let e = await de({
                currentLocale: ce,
                nextLocale: a,
                route: s,
                routeId: o,
                defaultLocale: i,
                pathVariables: te.current,
                preserveQueryParams: g,
              });
              if (!e) return;
              let r = e.path;
              ((A.current = !1),
                (te.current = e.pathVariables),
                (N.current = a.id),
                (j.current = r));
              let c = s.path && e.pathVariables ? Zn(s.path, e.pathVariables) : s.path;
              (oe({
                routeId: o,
                remountKey: `${a.id}${c}`,
                hash: void 0,
                shouldSmoothScroll: !1,
                behavior: `preserve-scroll-position`,
              }),
                ie(
                  () => {
                    S(o, o, () => O(E));
                  },
                  t,
                  n
                    ? void 0
                    : r
                      ? () => {
                          id({
                            routeId: o,
                            url: r,
                            pathVariables: e.pathVariables,
                            localeId: a.id,
                          });
                        }
                      : void 0,
                  !1
                ));
            } catch {}
        },
      }),
      [ce, n, E, h, g, u, oe, ie, S, D, O, de]
    ),
    pe = C(
      (e, t, n, r, i, a, o, s, c) => {
        A.current = !1;
        let l = ee.current,
          d = u[e],
          f = Ut(d, n),
          p = d?.path && i ? Zn(d.path, i) : d?.path;
        if (
          ((ee.current = e),
          (te.current = i),
          (N.current = t),
          (j.current = r),
          oe({
            routeId: e,
            remountKey: `${t}${p}`,
            hash: f,
            shouldSmoothScroll: s ?? !1,
            behavior: a
              ? re
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          a)
        ) {
          (ae(), O(E));
          return;
        }
        ie(
          (t) => {
            S(l, e, () => O(E), t);
          },
          o,
          c,
          !0
        );
      },
      [E, u, re, oe, ie, S, O, ae]
    );
  (Rr(ne, ee, pe),
    c(() => {
      if (n) return;
      let e = () => {
        let e = Dr(),
          t = f.location.hash === `` ? void 0 : f.location.hash.slice(1);
        (e && Ut(u[e.routeId], e.hash) === t) ||
          Fr({
            ...(e ||
              (Ar() ?? { routeId: ee.current, pathVariables: te.current, localeId: N.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (f.addEventListener(`hashchange`, e), () => f.removeEventListener(`hashchange`, e));
    }, [n, u]));
  let F = C(
      async (e, t, r, i, a) => {
        let o = u[e],
          s = bt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = D({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          d = Td(a);
        if (
          (q_({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await q_({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Q_)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Ut(o, t),
          p = te.current,
          m = N.current;
        if (nd({ routeId: ee.current, pathVariables: p }, { routeId: e, pathVariables: r })) {
          let a = P();
          if (a) {
            let t = o?.path && r ? Zn(o.path, r) : o?.path;
            oe({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ae();
          (l.ignore?.(), !a && re && bd(f, i, `scroll-to-hash-or-top`));
          let s = u[e];
          (!n &&
            s &&
            od(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: t,
                localeId: m,
                preserveQueryParams: g,
                siteCanonicalURL: b,
              },
              d
            ),
            !a && !re && bd(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let _ = u[ee.current],
          v =
            oi(b) +
            ci(o, {
              currentRoutePath: _?.path,
              currentRoutePathLocalized: _?.pathLocalized,
              currentPathVariables: p,
              hash: t,
              pathVariables: r,
              localeId: m,
              localeSlug: h.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: g,
              relative: !1,
              siteCanonicalURL: b,
            });
        pe(
          e,
          m,
          t,
          v,
          r,
          !1,
          l,
          i,
          n
            ? void 0
            : () => {
                (d(),
                  ad(e, o, {
                    historyPath: v,
                    currentRoutePath: _?.path,
                    hash: t,
                    pathVariables: r,
                    localeId: m,
                  }));
              }
        );
      },
      [ae, u, h, pe, n, g, b, D, re, P, oe]
    ),
    me = Ft(u),
    he = ee.current,
    I = j.current,
    ge = te.current,
    _e = u[he],
    ve = _e?.path,
    ye = nw(_e, he, I, ge, ce, p),
    be = A.current;
  c(() => {
    k(he, ge ?? {}, fe.activeLocale, be);
  }, [k, he, ge, fe, be]);
  let L = t(
    () => ({
      navigate: F,
      getRoute: me,
      currentRouteId: he,
      currentPathVariables: ge,
      routes: u,
      collectionUtils: s,
      preserveQueryParams: g,
      pageviewEventData: ye,
      siteCanonicalURL: b,
      isInitialNavigation: be,
    }),
    [F, me, he, ge, u, s, g, b, ye, be]
  );
  if (!_e) throw Error(`Router cannot find route for ${he}`);
  let xe = !ce || !_e.includedLocales || _e.includedLocales.includes(ce.id),
    R = ve && ge ? Zn(ve, ge) : ve,
    Se = `${se}${R}`,
    Ce = Aa(() => ({ ...e, display: `contents` }));
  return _(It, {
    api: L,
    children: _(xv.Provider, {
      value: fe,
      children: _(Sv.Provider, {
        value: ue,
        children: _(cC, {
          children: _(ti, {
            routerRenderKey: w,
            isNavigationCommitPending: ne.isNavigationCommitPending,
            children: T(zu, {
              currentRoutePath: R,
              routerAPI: L,
              children: [
                y && _(Ru, { EditorBar: y, fast: !0 }),
                _(qS, {
                  children: T(Dl, {
                    children: [
                      _(ay.Start, {}),
                      _(Cd, { currentRouteId: he, remountKey: Se, scrollRestoration: ne }),
                      _(sy, {
                        notFoundPage: o,
                        defaultPageStyle: e,
                        routerRenderKey: w,
                        children: _(Od, {
                          LayoutTemplate: v,
                          webPageId: _e?.abTestingVariantId ?? he,
                          style: e,
                          children: (t) =>
                            _(l, { children: xe ? bi(_e.page, t ? Ce : e) : o && bi(o, e) }, Se),
                        }),
                      }),
                      y && _(Ru, { EditorBar: y }),
                      _(di, {}),
                      _(ay.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function Od({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? _(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function kd(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function Ad(e) {
  return typeof e == `object` && !!e;
}
function jd(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Ad(r)) return;
    r = r[e];
  }
  return r;
}
function Md(e) {
  return `${e.credentials}:${e.url}`;
}
function Nd(e) {
  return z(e) && !Number.isNaN(Number(e));
}
function Pd(e, t) {
  switch (e) {
    case `string`:
      return z(t) || B(t);
    case `color`:
      return z(t);
    case `boolean`:
      return it(t);
    case `number`:
      return B(t) || Nd(t);
    case `link`:
    case `image`:
      return z(t) && tu(t, !1);
    default:
      return !1;
  }
}
function Fd(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = jd(e.data, t.resultKeyPath);
  if (st(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Pd(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Id(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = Math.max(t * 1e3, sw);
  return Date.now() >= e + n;
}
function Ld(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    routes: s,
    collectionUtils: c,
    notFoundPage: l,
    isReducedMotion: u = !1,
    skipAnimations: d = !1,
    includeDataObserver: f = !1,
    localeId: p,
    locales: m,
    preserveQueryParams: h,
    EditorBar: v,
    defaultPageStyle: y,
    disableHistory: b,
    LayoutTemplate: x,
    siteCanonicalURL: S,
    adaptLayoutToTextDirection: C,
    loadSnippetsModule: w,
    initialCollectionItemId: T,
  } = e;
  return (
    g.useEffect(() => {
      n || Py.start();
    }, []),
    n
      ? _(Gr, {
          value: r ?? `preview`,
          children: _(Ne, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: _(wn, {
              collectionUtils: c,
              children: _(fw, {
                children: _(LC.Provider, {
                  value: a,
                  children: _(Hu, {
                    loadSnippetsModule: w,
                    children: _(Dd, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: p,
                      initialCollectionItemId: T,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: m,
                      defaultPageStyle: y ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: h,
                      EditorBar: v,
                      disableHistory: b,
                      LayoutTemplate: x,
                      siteCanonicalURL: S,
                      adaptLayoutToTextDirection: C,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : _(f ? nS : g.Fragment, {
          children: _(Rt, {
            routes: s,
            children: _(Kx, { children: g.isValidElement(t) ? t : g.createElement(t, { key: i }) }),
          }),
        })
  );
}
function Rd(e, t) {
  let n = Lt(),
    { activeLocale: r } = Yr(),
    i = Du();
  return qr(() => {
    let t = [],
      a = (e) => {
        if (e)
          return z(e) || Zl(e)
            ? Lu(e, n, void 0, void 0, r, o)
            : Lu(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function zd(e) {
  return {
    trace(...t) {
      return Vb.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return Vb.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return Vb.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return Vb.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return Vb.getLogger(e)?.error(...t);
    },
    get enabled() {
      return Vb.getLogger(e) !== void 0;
    },
  };
}
function Bd() {
  return Symbol.dispose ?? Symbol.for(`Symbol.dispose`);
}
function Vd() {
  return mw.priority;
}
function Hd(e) {
  let t = mw;
  return (
    (mw = e),
    {
      [Bd()]() {
        mw = t;
      },
    }
  );
}
function Ud(e = mw.priority, t = mw.canYield) {
  if (!(!t || e === void 0)) return q_({ batch: !0, priority: Un(e) });
}
function Wd(e) {
  var t = [];
  try {
    De(t, Hd({ priority: mw.priority, canYield: !1 }));
    let n = e.next();
    return (H(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    ke(t, n, r);
  }
}
async function Gd(e, t, n = mw.priority, r = mw.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (De(o, Hd(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      ke(o, s, c);
    }
  }
  for (; !a.done; ) {
    var l = [];
    try {
      let t = await a.value,
        o = Ud(n, r);
      (o && (await o), De(l, Hd(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      ke(l, u, d);
    }
  }
  return a.value;
}
function Kd(e, t = mw.priority, n = mw.canYield) {
  var r = [];
  try {
    De(r, Hd({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Gd(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    ke(r, i, a);
  }
}
function* K(e, t = mw.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (dt(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Gd(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* qd(e, t = mw.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Ud(t);
    r && (yield r);
    let o = e[a];
    if (dt(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Gd(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function Jd(e) {
  return Zd(e) || ef(e);
}
function Yd(e) {
  return at(e) && e.every(V);
}
function Xd(e) {
  return V(e) && rt(e.read) && rt(e.preload);
}
function Zd(e) {
  return Yd(e) || Xd(e);
}
function Qd(e) {
  return V(e) && V(e.schema);
}
function $d(e) {
  return V(e) && V(e.collectionByLocaleId);
}
function ef(e) {
  return Qd(e) || $d(e);
}
function tf(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = jf(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function nf(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Z.cast(e, t.definition)) };
  }
  return null;
}
function rf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function af(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function of(e) {
  return af(e)?.value ?? !1;
}
function sf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function cf(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function lf(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function uf(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return ut(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function df(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ff(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function pf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function mf(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function hf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function gf(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function _f(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function vf(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function yf(e) {
  return vf(e)?.value ?? null;
}
function bf(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = jf(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function xf(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = Z.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function Sf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Cf(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function wf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Tf(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function Ef(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Df(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function Of(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function kf(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Af(e) {
  return kf(e)?.value ?? null;
}
function jf(e, t, n) {
  if (ct(e) || ct(t)) return (H(e === t), 0);
  switch (e.type) {
    case `array`:
      return (H(e.type === t.type), tf(e, t, n));
    case `boolean`:
      return (H(e.type === t.type), rf(e, t));
    case `color`:
      return (H(e.type === t.type), sf(e, t));
    case `date`:
      return (H(e.type === t.type), lf(e, t));
    case `enum`:
      return (H(e.type === t.type), df(e, t));
    case `file`:
      return (H(e.type === t.type), pf(e, t));
    case `link`:
      return (H(e.type === t.type), hf(e, t));
    case `number`:
      return (H(e.type === t.type), _f(e, t));
    case `object`:
      return (H(e.type === t.type), bf(e, t, n));
    case `responsiveimage`:
      return (H(e.type === t.type), Sf(e, t));
    case `richtext`:
      return (H(e.type === t.type), wf(e, t));
    case `vectorsetitem`:
      return (H(e.type === t.type), Ef(e, t));
    case `string`:
      return (H(e.type === t.type), Of(e, t, n));
    default:
      U(e);
  }
}
async function Mf(e, t) {
  return Xd(e) ? (await e.preload(t), e.read(t)) : e;
}
function Nf(e) {
  if (!ef(e) || !e.id) return;
  let t = _w.get(e.id);
  if (!t) return (_w.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Pf(e) {
  let t = Nf(e);
  if (t) return t;
  let n = vw.get(e);
  if (n) return n;
  let r = `${yw}${Math.random().toString(16).slice(2)}`;
  return (vw.set(e, r), r);
}
function Ff(e, t) {
  if (Zd(e)) {
    let n = Pf(e) + (t?.id ?? Qg),
      r = bw.get(n);
    if (r) return r;
    let i = new gw(e, t);
    return (bw.set(n, i), i);
  }
  if (Qd(e)) return e;
  if ($d(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  U(e, `Unsupported collection type`);
}
function If(e) {
  return e;
}
function Lf(e) {
  return rt(e.getHash);
}
function q(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (V(r) && Lf(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return If(`${n})`);
}
function Rf(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function zf(e, t) {
  return { collectionId: Pf(e), pointer: t };
}
function Bf(e) {
  return V(e) && z(e.collectionId);
}
function Vf(e, t) {
  return { collectionId: Pf(e), pointer: t };
}
function Hf(e) {
  return V(e) && z(e.collectionId);
}
function Uf(e, t) {
  let n = new Map();
  function r(e) {
    if (V(e))
      if (e.type === `Collection` && Jd(e.data)) {
        let r = Ff(e.data, t),
          i = Pf(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (at(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Wf(e) {
  return e;
}
function Gf(e) {
  return e;
}
function Kf(e) {
  return e;
}
function qf() {
  return 25;
}
function Jf() {
  return 12500;
}
function Yf(e) {
  return Array(e).fill({ type: `All` });
}
function Xf(e) {
  return e;
}
function Zf(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new DT(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Qf(e) {
  let t = new Set();
  if (!e) return t;
  Zf(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (Zf(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function $f(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) $f(n, t);
      return;
    case `object`:
      for (let n in e.value) $f(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function ep(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function tp(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function np(e) {
  return `${e.functionName}(${e.arguments.map((e) => sp(e)).join(`, `)})`;
}
function rp(e) {
  let t = `CASE`;
  e.value && (t += ` ${sp(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${sp(n.when)} THEN ${sp(n.then)}`;
  return (e.else && (t += ` ELSE ${sp(e.else)}`), (t += ` END`), t);
}
function ip(e) {
  let t = sp(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function ap(e) {
  let t = sp(e.left),
    n = sp(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function op(e) {
  return `CAST(${sp(e.value)} as ${e.dataType})`;
}
function sp(e) {
  switch (e.type) {
    case `Identifier`:
      return ep(e);
    case `LiteralValue`:
      return tp(e);
    case `FunctionCall`:
      return np(e);
    case `Case`:
      return rp(e);
    case `UnaryOperation`:
      return ip(e);
    case `BinaryOperation`:
      return ap(e);
    case `TypeCast`:
      return op(e);
    case `Select`:
      return `${fp(e)}`;
    default:
      U(e);
  }
}
function cp(e) {
  return Qd(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function lp(e) {
  let t = `${up(e.left)} LEFT JOIN ${up(e.right)}`;
  return (e.constraint && (t += ` ON ${sp(e.constraint)}`), t);
}
function up(e) {
  switch (e.type) {
    case `Collection`:
      return cp(e);
    case `LeftJoin`:
      return lp(e);
    default:
      U(e);
  }
}
function dp(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function fp(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = sp(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${up(e.from)}`),
    e.where && (t += ` WHERE ${sp(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${sp(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${sp(e.limit)}`),
    e.offset && (t += ` OFFSET ${sp(e.offset)}`),
    dp(t)
  );
}
function pp(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(st(e) || V(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function mp(e) {
  let t = r(e);
  return (
    p(() => {
      t.current = e;
    }, [e]),
    Jr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function hp(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function gp() {
  return new Set();
}
function _p(e) {
  let t = Aa(gp),
    n = Aa(gp);
  return (
    qs(() => () => hp(n, t)),
    c(() => () => hp(n, t), []),
    c(() => {
      hp(n, t);
    }, [e]),
    r({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function vp(e, t, n) {
  return g.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function yp(e) {
  for (let [t, n] of Object.entries(e)) if (__.matchMedia(n).matches) return t;
}
function bp(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && __.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function xp(e, t, n = !0) {
  let i = w(Ux),
    a = Oo(),
    o = Ea(),
    s = Fn() && (!a || o),
    l = r(s ? (yp(t) ?? e) : e),
    u = r(n && i ? e : l.current),
    d = ns(),
    f = ne(),
    p = C(
      (e) => {
        if (e !== l.current || e !== u.current) {
          let t = function () {
            ((l.current = u.current = e),
              m(() => {
                d();
              }));
          };
          a
            ? t()
            : f(() => {
                t();
              });
        }
      },
      [f, d, a]
    );
  return (
    vv(() => {
      if (a) {
        if (o) {
          p(yp(t) ?? e);
          return;
        }
        p(e);
      }
    }, [e, o, a, t, p]),
    vv(() => {
      !n || i !== !0 || p(l.current);
    }, []),
    c(() => {
      if (!s || o) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = __.matchMedia(r),
          i = (e) => {
            e.matches && p(n);
          };
        (Sp(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => Cp(e, t));
    }, [o, t, p, s]),
    [l.current, u.current]
  );
}
function Sp(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Cp(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function wp(e) {
  setTimeout(e, 1);
}
function Tp(e) {
  let t = new Set(),
    n = bp(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Ep(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Ig ? __.requestIdleCallback : wp)(() => {
    document.querySelector(HT)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Ep(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Dp(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Ep(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Dp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Op(e) {
  return V(e) && UT in e && e.page !== void 0;
}
function kp(e, t) {
  return `${e}-${t}`;
}
function Ap(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (H(r !== void 0, `nextVariant should be defined`), r);
}
function jp(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Mp(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Np(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Pp(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Fp() {
  let e = r(),
    t = r(),
    n = C(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    c(
      () => () => {
        n();
      },
      [n]
    ),
    C(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Ip() {
  let e = r(),
    t = r(!1),
    n = r(),
    i = w(Ex);
  return (
    c(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    C(
      (r, a) => {
        if (!a?.current || t.current) {
          r();
          return;
        }
        if (((n.current = r), e.current)) return;
        let o = !1;
        e.current = Bs(i, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function Lp(e) {
  let t = Fp(),
    n = Ip();
  return C(
    (r, i = !1) => {
      if (Fg) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Rp() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (KT = () => {
        (e(), (t = void 0));
      }));
  });
}
function zp(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (GT = Rp()));
}
function Bp() {
  (performance.mark(`click-received-listener`), (GT = void 0), KT?.(), (KT = void 0));
}
function Vp(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, zp, !0),
      document.__proto__.addEventListener.call(document, `click`, Bp, !0));
  }, [e]);
}
function Hp({
  variant: e,
  defaultVariant: n,
  transitions: i,
  enabledGestures: a,
  cycleOrder: o = [],
  variantProps: s = {},
  variantClassNames: c = {},
  ref: l,
}) {
  let u = ns(),
    d = $l(),
    f = Aa(() => new Set(o));
  Vp(X_().yieldOnTap);
  let p = Lp(l),
    h = r({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Pp(e, n, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: n,
      enabledGestures: a,
      cycleOrder: o,
      transitions: i,
    }),
    g = C((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = Pp(e, a, f),
        s = Mp(i?.[o], t, n, !1, r);
      return [o, s ? kp(o, s) : void 0];
    }, []),
    _ = C(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = X_().yieldOnTap && h.current.isPressedHasUpdated;
        (c &&
          GT &&
          (performance.mark(`wait-for-tap-start`),
          await GT,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await q_({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: _,
        } = h.current;
        if (l || f || d || _) {
          m(u);
          return;
        }
        p(() => m(u), i);
      },
      [g, u, p]
    ),
    v = C(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_]
    ),
    y = C(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current,
          o = e === WT ? Ap(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = C(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), p(() => m(u), !0));
    }, [u, p]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = h.current,
    A = vp(h.current.baseVariant, h.current.gestureVariant, s);
  return t(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !k[x],
      r = n ? kp(x, `loading`) : S;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: jp(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: Rc(Np(x, c), Mp(i, E, D, n, O)),
      }
    );
  }, [x, S, E, D, k, A, y, w, T, v, b, c]);
}
function Up(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!jl()) return r(e);
  let a = Wp(e, r),
    o = !1;
  function s(r, s) {
    let c = Pl(),
      { disableCustomCode: l } = X_();
    if (l) return _(e, { ...r, ref: s });
    if (Hl(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? _(gv.Provider, {
            value: n,
            children: _(Ml, {
              getErrorMessage: zl.bind(null, t, n),
              fallback: _(e, { ...r, ref: s }),
              children: _(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Al(a.error), Al(zl(t, n)), kl(a.error), !0)), _(e, { ...r, ref: s }));
    if (a.status === `success`)
      return _(gv.Provider, { value: n, children: _(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return g.forwardRef(s);
}
function Wp(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Gp(e) {
  let t = [];
  return (
    j.forEach(e, (e) => {
      y(e) && e.type === l ? t.push(...Gp(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function Kp(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function qp(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = Kp(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c; ) {
    let { start: e, end: n } = t[te(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function Jp(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = Kp(e, t, a),
    c = e,
    l = !1;
  for (; !l; ) {
    let { start: r, end: u } = t[te(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function Yp() {
  let e = w(qT);
  return (lm(!!e, `useTicker must be used within a Ticker component`), e);
}
function Xp() {
  let e = w(JT);
  return (lm(!!e, `useTickerItem must be used within a TickerItem`), e);
}
function Zp(e, t) {
  return (t?.offsetWidth ?? f.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function Qp(e, t) {
  return e === `y` ? ZT : t === `ltr` ? XT : QT;
}
function $p({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i = 0,
  itemIndex: a,
  cloneIndex: o,
  bounds: s,
  alignItems: c,
  reproject: l = !0,
  size: u = `auto`,
  safeMargin: d,
}) {
  let { start: f, end: p } = s,
    { visibleLength: m, direction: h, inset: g } = Yp(),
    { sign: v } = Qp(n, h),
    y = R(() => {
      if (!l) return 0;
      let e = t.get();
      if ((!f && !p) || !r) return 0;
      if (e * v + s.end <= -g - d) return r * v;
      if (d > 0) {
        let t = m - d - g;
        if (e * v + s.start >= t) return -r * v;
      }
      return 0;
    }),
    b = R(() => {
      let e = t.get(),
        n = y.get();
      return (!f && !p) || !r ? 0 : e * v + f + n * v;
    }),
    x =
      o === void 0
        ? { "aria-hidden": !1, "aria-posinset": a + 1, "aria-setsize": i }
        : { "aria-hidden": !0 },
    S = u === `fill`,
    C = c === `stretch` ? `100%` : `fit-content`,
    w = {
      className: o === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: u === `fill` ? `100%` : void 0,
        display: S ? `grid` : void 0,
        gridTemplateColumns: S ? `1fr` : void 0,
        gridTemplateRows: S ? `1fr` : void 0,
        minWidth: S ? 0 : void 0,
        minHeight: S ? 0 : void 0,
        height: n === `x` ? C : void 0,
        width: n === `y` ? C : void 0,
        x: n === `x` ? y : 0,
        y: n === `y` ? y : 0,
      },
      ...x,
    };
  return _(JT.Provider, {
    value: { start: f, end: p, offset: b, projection: y, itemIndex: a, cloneIndex: o, props: w },
    children: u === `manual` ? e : _(em, { children: e }),
  });
}
function em({ children: e }) {
  let { props: t } = Xp();
  return _(P.li, { ...t, children: e });
}
function tm(e, t, n, i, a) {
  let o = r(!1);
  c(() => {
    let r = e.current;
    if (!r) return;
    let s = !1,
      c = new AbortController(),
      l = { signal: c.signal },
      u = { ...l, capture: !0 },
      d = t === `x` ? `scrollLeft` : `scrollTop`,
      p = t === `x` ? `offsetLeft` : `offsetTop`,
      m = t === `x` ? `ArrowLeft` : `ArrowUp`,
      h = t === `x` ? `ArrowRight` : `ArrowDown`,
      g = [],
      _ = 0,
      v = () => {
        let e = g[_];
        e &&
          (e.focus({ preventScroll: !0 }),
          n.set(-e[p]),
          (r[d] = 0),
          je.render(() => {
            r[d] = 0;
          }));
      },
      y = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), S());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(rm);
          t.sort(nm);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            i = e.shiftKey ? t.length - 1 : 0;
          if (r.contains(n)) {
            t[i].focus();
            return;
          } else {
            let n = t.indexOf(g[_]),
              i = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += i) {
              let n = t[e];
              if (!r.contains(n)) {
                n.focus();
                return;
              }
            }
          }
          return;
        } else e.key === m ? _-- : e.key === h && _++;
        ((_ = te(0, g.length, _)), v());
      },
      b = () => {
        o.current ||
          ((g = Array.from(
            r.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(rm)),
          (_ = 0),
          g.length &&
            (a(!0),
            (o.current = !0),
            v(),
            f.addEventListener(`focus`, x, u),
            f.addEventListener(`blur`, x, u),
            r.addEventListener(`keydown`, y, l)));
      },
      x = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !r.contains(e.target)) && S();
      },
      S = () => {
        o.current &&
          ((o.current = !1),
          a(!1),
          i.set(n.get()),
          f.removeEventListener(`focus`, x),
          f.removeEventListener(`blur`, x),
          r.removeEventListener(`keydown`, y));
      },
      C = (e) => {
        let { target: t } = e;
        rm(t) && (o.current || b());
      },
      w = () => {
        s || ((s = !0), r.addEventListener(`focus`, C, u), f.addEventListener(`pointermove`, T, l));
      },
      T = () => {
        s &&
          ((s = !1),
          r.removeEventListener(`focus`, C, !0),
          f.removeEventListener(`pointermove`, T, l));
      };
    return (
      f.addEventListener(`keydown`, w, l),
      r.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        l
      ),
      r.addEventListener(
        `scroll`,
        () => {
          ((r.scrollLeft = 0), (r.scrollTop = 0));
        },
        l
      ),
      () => {
        (c.abort(), S());
      }
    );
  }, []);
}
function nm(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function rm(e) {
  return e instanceof HTMLElement;
}
function im(e) {
  return e.end - e.start;
}
function am(e) {
  return e[e.length - 1].end - e[0].start;
}
function om(e, t, n) {
  let r = am(t),
    i = Math.max(...t.map(im)),
    a = 0,
    o = 0;
  for (; o < e; ) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function sm(
  {
    items: e,
    velocity: n = 50,
    hoverFactor: i = 1,
    gap: a = 10,
    axis: o = `x`,
    align: s = `center`,
    offset: c,
    isStatic: l = !1,
    itemSize: u = `auto`,
    overflow: p = !1,
    loop: m = !0,
    children: h,
    as: g = `div`,
    snap: v,
    safeMargin: y = 0,
    fade: b = 0,
    fadeTransition: x,
    pageTransition: S,
    ...w
  },
  T
) {
  let E = r(null),
    D = de(T, E),
    O = r(null),
    [k, A] = d({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    j = $T[s] || s,
    { sign: M } = Qp(o, k.direction);
  if (l) {
    let t = se(0);
    return _(qT.Provider, {
      value: { ...k, gap: a, clampOffset: _e, offset: t, renderedOffset: t },
      children: _(cm, {
        containerProps: w,
        containerRef: D,
        children: h,
        gap: a,
        axis: o,
        alignItems: j,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: u,
        state: k,
        overflow: p,
        safeMargin: y,
        isStatic: !0,
        as: g,
        fade: b,
        sign: M,
      }),
    });
  }
  let [ee, N] = d(!1),
    ne = se(1),
    P = se(0);
  c ??= P;
  let ie = R(() =>
      k.direction === `rtl` && o === `x`
        ? te(k.totalItemLength + a + k.inset, k.inset, c.get())
        : te(-k.totalItemLength - a - k.inset, -k.inset, c.get())
    ),
    ae = se(0),
    oe = ee ? ae : m ? ie : c,
    le = I(E, { margin: `100px` }),
    fe = be(),
    pe = le && fe,
    F = ue(),
    me = () => {
      if (!E.current || !O.current) return;
      let e = f.getComputedStyle(E.current).direction,
        { measureItem: t, lengthProp: n, viewportLengthProp: r, getCumulativeInset: i } = Qp(o, e),
        a = o === `x` ? `paddingLeft` : `paddingTop`,
        s = o === `x` ? `paddingRight` : `paddingBottom`,
        c = E.current,
        l = O.current.querySelectorAll(`.ticker-item`);
      if (!l.length) return;
      let u = !1,
        d = [];
      for (let e = 0; e < l.length; e++) {
        let n = t(l[e], c);
        d.push(n);
        let r = k.itemPositions[e];
        (!r || n.start !== r.start || n.end !== r.end) && (u = !0);
      }
      let h = Math.min(c[n], f[r]),
        g = p ? f[r] : h;
      y > 0 && (g += y * 2);
      let _ = am(d),
        v = f.getComputedStyle(c),
        b = parseInt(v[a] ?? 0),
        x = parseInt(v[s] ?? 0),
        S = p ? i(l[0]) : b,
        C = m === !1 ? Math.max(0, _ - h + b + x) : null;
      (g !== k.visibleLength ||
        _ !== k.totalItemLength ||
        S !== k.inset ||
        k.itemPositions.length !== d.length ||
        u) &&
        A({
          direction: e,
          visibleLength: g,
          itemPositions: d,
          totalItemLength: _,
          inset: S,
          containerLength: h,
          maxInset: C,
          isMeasured: !0,
        });
    };
  ye(() => {
    if (!pe || !E.current) return;
    me();
    let e = p ? re(me) : void 0,
      t = re(E.current, me);
    return () => {
      (e?.(), t());
    };
  }, [e, pe, p]);
  let he = k.totalItemLength > 0;
  ce(
    he && pe && c === P && !F
      ? (e, t) => {
          let r = (t / 1e3) * (n * M * ne.get());
          c.set(c.get() - r);
        }
      : _e
  );
  let ge = t(
      () => (!he || !k.visibleLength ? 0 : om(k.visibleLength, k.itemPositions, a)),
      [he, k]
    ),
    ve = k.totalItemLength === 0 ? 0 : (k.totalItemLength + a) * (ge + 1),
    L = [];
  if (m)
    for (let t = 0; t < ge; t++) {
      let n = [];
      e.forEach((r, i) => {
        let s = k.itemPositions[i],
          c = (k.totalItemLength + a) * (t + 1),
          l = s ? { start: s.start + c, end: s.end + c } : tE;
        n.push(
          _(
            $p,
            {
              offset: oe,
              axis: o,
              listSize: ve,
              itemIndex: i,
              cloneIndex: i,
              bounds: l,
              alignItems: j,
              size: u,
              safeMargin: y,
              numItems: e.length,
              children: r,
            },
            `clone-${t}-${i}`
          )
        );
      });
      let r = `ticker-group-${t}`;
      L.push(_(Ke, { id: r, children: n }, r));
    }
  tm(E, o, ae, c, N);
  let xe = C((e) => (k.maxInset === null ? e : Me(-k.maxInset, 0, e)), [k.maxInset]);
  return _(qT.Provider, {
    value: { ...k, gap: a, clampOffset: xe, offset: c, renderedOffset: oe },
    children: _(cm, {
      containerProps: w,
      children: h,
      containerRef: D,
      listRef: O,
      gap: a,
      axis: o,
      alignItems: j,
      isMeasured: he,
      isInView: pe,
      offset: c,
      renderedOffset: oe,
      items: e,
      itemSize: u,
      clonedItems: L,
      clampOffset: xe,
      snap: v,
      safeMargin: y,
      onPointerEnter: () => {
        Ae(ne, i);
      },
      onPointerLeave: () => {
        Ae(ne, 1);
      },
      totalListSize: ve,
      state: k,
      overflow: p,
      loop: m,
      as: g,
      fade: b,
      sign: M,
      fadeTransition: x,
      pageTransition: S,
    }),
  });
}
function cm({
  children: e,
  containerProps: n,
  containerRef: i,
  listRef: a,
  gap: o,
  axis: s,
  alignItems: c,
  isMeasured: l,
  isInView: u,
  isStatic: d,
  items: f,
  offset: p,
  clonedItems: m,
  clampOffset: h,
  renderedOffset: g,
  onPointerEnter: v,
  onPointerLeave: y,
  totalListSize: b,
  itemSize: x,
  overflow: S,
  state: C,
  safeMargin: w,
  snap: E,
  loop: D,
  as: k,
  fade: A,
  sign: j,
  fadeTransition: M = iE,
  pageTransition: ee,
}) {
  let te = t(() => P.create(k), [k]),
    N = {},
    { maxInset: ne } = C;
  ne !== null &&
    (N =
      s === `x`
        ? j > 0
          ? { left: ne * -1, right: 0 }
          : { right: ne, left: 0 }
        : { top: ne * -1, bottom: 0 });
  let {
      drag: re,
      _dragX: ie,
      _dragY: ae,
      dragMomentum: oe = !1,
      onDragEnd: ce,
      onPointerDown: le,
      ...ue
    } = n,
    de = s === `x` ? ie : ae,
    fe = r(null),
    pe = () => {
      fe.current &&= (fe.current.stop(), null);
    };
  !ce &&
    re &&
    de &&
    ((le = () => {
      (de.jump(p.get()), pe());
    }),
    (ce = (e, { velocity: t }) => {
      let n = p.get();
      (pe(),
        je.postRender(() => {
          let e = n + t[s] * (E ? 0.3 : 0.8);
          if (E)
            if (t[s] < 0) e = -qp(-n, C.itemPositions, o, -e);
            else if (t[s] > 0) e = -Jp(-n, C.itemPositions, o, -e, C.containerLength);
            else {
              let t = -qp(-n, C.itemPositions, o, -n),
                r = -Jp(-n, C.itemPositions, o, -n, C.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          let r = D
            ? {}
            : j > 0
              ? { max: 0, min: N[s === `x` ? `left` : `top`] }
              : { min: 0, max: N.right };
          fe.current = Ae(
            de,
            h(e * j) * j,
            E
              ? ee
              : {
                  type: `inertia`,
                  velocity: t[s],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                }
          );
        }));
    }));
  let F = se(+!D),
    me = se(0),
    he = Qp(s, C.direction),
    I = typeof A == `number` ? `px` : ``,
    ge = R(
      () =>
        `linear-gradient(to ${he.direction}, rgba(0,0,0,${F.get()}) 0px, black ${A}${I}, black calc(100% - ${A}${I}), rgba(0,0,0,${me.get()}) 100%)`
    ),
    _e = A ? { maskImage: ge, WebkitMaskImage: ge } : {},
    ye = r({ start: !0, end: !1 });
  return (
    ve(g, `change`, (e) => {
      if (ne === null) return;
      let t = ne * -1;
      ((e *= j),
        e < 0
          ? ye.current.start && (Ae(F, 0, M), (ye.current.start = !1))
          : ye.current.start || (Ae(F, 1, M), (ye.current.start = !0)),
        e > t
          ? ye.current.end && (Ae(me, 0, M), (ye.current.end = !1))
          : ye.current.end || (Ae(me, 1, M), (ye.current.end = !0)));
    }),
    T(O, {
      children: [
        _(te, {
          ...ue,
          ref: i,
          style: {
            overflowX: !S && s === `x` ? `clip` : void 0,
            overflowY: !S && s === `y` ? `clip` : void 0,
            ...nE,
            ...n.style,
            ..._e,
          },
          onPointerEnter: v,
          onPointerLeave: y,
          drag: re,
          _dragX: ie,
          _dragY: ae,
          dragConstraints: N,
          dragMomentum: oe,
          onPointerDown: le,
          onDragEnd: ce,
          children: T(P.ul, {
            ref: a,
            style: {
              ...rE,
              flexDirection: s === `x` ? `row` : `column`,
              gap: `${o}px`,
              x: s === `x` ? g : 0,
              y: s === `y` ? g : 0,
              opacity: l || d ? 1 : 0,
              alignItems: c,
              willChange: l && u ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              f.map((e, t) =>
                _(
                  $p,
                  {
                    axis: s,
                    offset: g,
                    listSize: b,
                    itemIndex: t,
                    bounds: C.itemPositions[t] ?? tE,
                    alignItems: c,
                    size: x,
                    reproject: D,
                    safeMargin: w,
                    numItems: f.length,
                    children: e,
                  },
                  `original-` + t
                )
              ),
              m || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function lm(e, t) {
  if (!e) throw Error(t);
}
function um(e, t) {
  if (W(e)) return e;
  if (!z(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return dm(parseInt(i));
  if (t === `y` && r) return dm(parseInt(r));
}
function dm(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function fm(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function pm(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${vE[e]}` : `${vE[e]} ${n}`;
}
function mm() {
  return f === void 0 ? (bE ?? {}) : bE || ((bE = hm()), bE);
}
function hm() {
  let e = f.location,
    t = f?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = f.top.location.origin), (t = f.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function gm(e) {
  return e.key + e.extension;
}
function _m(e) {
  return `${mm().userContent}/assets/${e}`;
}
function vm(e) {
  return _m(gm(e));
}
function ym(e, t) {
  return t ? `${e} ${xE}` : e;
}
function bm(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return ym(e.name, e.isVariable);
  }
}
function xm(e) {
  return !!(e && Array.isArray(e));
}
function Sm(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    wm(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function Cm(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function wm(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function Tm(e) {
  return wE[Dm(e)];
}
function Em(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? Tm(`variable`) ?? 500);
}
function Dm(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function Om(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function km(e, t) {
  return { ...Am(e, t), ...jm(e, t) };
}
function Am(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function jm(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function Mm(e) {
  return !!e.variationAxes;
}
function Nm(e) {
  return Pm(e) || Fm(e);
}
function Pm(e) {
  return e.startsWith(DE);
}
function Fm(e) {
  return e.startsWith(EE);
}
function Im(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function Lm(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? xE : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function Rm({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = Sm(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function zm(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: Mm(e), selector: e.selector };
}
function Bm(e) {
  let t = e.fonts.map((e) => zm(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = zm(n);
    if (!e) continue;
    let r = km(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function Vm(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function Hm(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function Um(e, t) {
  return Array.from(e.entries())
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([e], [t]) => e.localeCompare(t))
        .map(([, e]) => ({
          fonts: e.fonts.map((e) => ({
            ...e,
            selected:
              e.font.assetKey && e.font.owner ? t.has(`${e.font.assetKey}:${e.font.owner}`) : !1,
          })),
        })),
    }));
}
async function Wm(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-YSYBFRE6.BZ57zP5h.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-TIA7QUPT.CjCmvCKY.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function Gm(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-H6SFY4F5.5HW9yzMR.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-PZLWRK4B.CuFl42Lb.mjs`)).default;
    case `framer`:
      return (await import(`./framer-font-RD2SUPQH.BV4yRwNx.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function Km(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(qm);
}
function qm(e) {
  return kE.includes(e);
}
function Jm(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = Km(e)[0];
  return n && t[n];
}
function Ym(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function Xm(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function Zm(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function Qm(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function $m(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = Zm(r, c, s, i);
  if (!GE.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: z(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), qE.set(l, { fontFace: u, doc: t }), eh(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < UE) return $m(e, t, n + 1);
          throw new WE(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    GE.set(l, d);
  }
  await GE.get(l);
}
async function eh(e, t, n) {
  let r = Qm(e, t, n);
  if (!KE.has(r)) {
    let i = new VE.default(e, { style: t, weight: n }).load(null, HE);
    KE.set(r, i);
  }
  try {
    await KE.get(r);
  } catch {
    throw new WE(
      `Failed to check if font is ready (${HE}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function th(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = Zm(n, t, i, r),
    o = qE.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), qE.delete(a)), GE.delete(a), KE.delete(Qm(n, t, i)));
}
function nh(e) {
  try {
    if (e === `framer`) return rh(YE) ? YE : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-EGNT223R.4Zga1324.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-SXU5BGFE.DwUZJPwH.mjs`)).default;
          default:
            U(e);
        }
      })();
      return rh(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function rh(e) {
  return V(e) && Object.values(e).every(ah);
}
function ih(e) {
  return V(e) && z(e.tag);
}
function ah(e) {
  return Array.isArray(e) && e.every(ih);
}
function oh(e, t) {
  c(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (f.addEventListener(`keyup`, n), () => f.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function sh(e, t, n, r) {
  let i = f.innerHeight - r,
    a = Math.min(f.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function ch(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new f.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function lh() {
  return document.getElementById(SC) ?? document.getElementById(xC) ?? document.body;
}
function uh(e, t) {
  return B(e) ? e : (t ?? 0);
}
function dh(e) {
  return uh(e?.paddingTop, e?.padding) + uh(e?.paddingBottom, e?.padding);
}
function fh(e) {
  return uh(e?.paddingLeft, e?.padding) + uh(e?.paddingRight, e?.padding);
}
function ph(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - fh(e)}px)`,
      srcSet: Po(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function mh(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in QE)) continue;
    let n = QE[t],
      r = e[t];
    if (!(!B(n) || !B(r)) && n !== r) return !0;
  }
  return !1;
}
function hh(e) {
  let t = he.get(e.current);
  if (!t) return !1;
  if (mh(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (mh(e.latestValues)) return !0;
  return !1;
}
function gh(e) {
  return b(function ({ lightbox: n, lightboxClassName: i, onClick: a, ...o }, s) {
    let u = w(Ce),
      f = w(sE),
      p = !!f,
      h = r(null),
      g = s ?? h,
      v = r(),
      y = t(() => ph(n, o.background), [n, o.background]),
      [b, x] = d(!1),
      [E, D] = d(),
      k = C(() => {
        if (n) {
          if (b) {
            m(() => {
              x(!0);
            });
            return;
          }
          je.read(() => {
            if (!g.current) return;
            let e = getComputedStyle(g.current),
              t =
                g.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(g.current, `::after`)
                  : void 0,
              r = g.current.offsetWidth ?? 1,
              i = g.current.offsetHeight ?? 1,
              a = hh(g) || p ? { duration: 0 } : n.transition;
            m(() => {
              (D({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                x(!0),
                f?.stop());
            });
          });
        }
      }, [n, b, g, f?.stop, p]),
      j = E?.aspectRatio ?? 1,
      M = mp(() => {
        if (!n || !y || !y.src) return;
        let e = v.current?.[y.src];
        if (e) return e;
        let t = sh(j, n.maxWidth, fh(n), dh(n)),
          r = ch(y, { width: t, height: t * j });
        return ((v.current = { [y.src]: r }), r);
      }),
      ee = C(
        async (e) => {
          (a?.(e), !(b || !n || !y) && (await M(), k()));
        },
        [a, k, b, y, n, M]
      ),
      te = C((e) => {
        (e?.stopPropagation(),
          m(() => {
            x(!1);
          }));
      }, []);
    (oh(b, te),
      c(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            M();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, M),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, M));
          }
        );
      }, [M, g, n]));
    let N = A(),
      ne = E?.transition ?? o.transition ?? u.transition,
      re = E?.borderRadius,
      ie = E?.imageRendering,
      ae = E?.filter,
      oe = E?.borderTop,
      se = E?.borderRight,
      ce = E?.borderBottom,
      le = E?.borderLeft,
      ue = E?.borderStyle,
      de = E?.borderColor,
      fe = !!(oe || se || ce || le || ue || de),
      pe = fe
        ? {
            "--border-top-width": oe,
            "--border-right-width": se,
            "--border-bottom-width": ce,
            "--border-left-width": le,
            "--border-style": ue,
            "--border-color": de,
          }
        : void 0,
      F = { [uC]: o.id },
      me = uh(n?.paddingTop, n?.padding),
      he = uh(n?.paddingBottom, n?.padding),
      I = uh(n?.paddingLeft, n?.padding),
      ge = uh(n?.paddingRight, n?.padding),
      _e = E?.borderRadius ? { ...o.style, borderRadius: E.borderRadius } : o.style,
      ve = b ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      ye = p && b ? void 0 : (o.layoutId ?? (n ? N : void 0));
    return T(O, {
      children: [
        _(e, {
          ...o,
          style: _e,
          onClick: ee,
          layoutId: ye,
          ref: g,
          layoutDependency: ve,
          transition: ne,
        }),
        _(Be, {
          onExitComplete: () => {
            m(() => {
              (D(void 0), f?.start());
            });
          },
          children:
            b &&
            n &&
            y &&
            _(
              l,
              {
                children: S(
                  T(O, {
                    children: [
                      _(P.div, {
                        ...F,
                        className: i,
                        onClick: te,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: ne,
                        initial: $E,
                        animate: eD,
                        exit: $E,
                      }),
                      _(P.div, {
                        ...F,
                        className: i,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${me}px ${ge}px ${he}px ${I}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: _(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: j,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: _(P.div, {
                            layoutId: ye,
                            transition: ne,
                            onClick: k,
                            className: `framer-lightbox-container`,
                            "data-border": fe,
                            style: {
                              aspectRatio: j,
                              borderRadius: re,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ie,
                              filter: ae,
                              ...pe,
                            },
                            children: _(Uo, { image: y, alt: y.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  lh()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function _h(e, t) {
  return rD && !t
    ? Document.parseHTMLUnsafe(e)
    : ((nD ??= new DOMParser()), nD.parseFromString(e, t ?? `text/html`));
}
function vh(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function yh(e, t, n, r) {
  return e.replace(iD, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = iu(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!Op(f) || !Op(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Ut(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = ou(u);
    if (!_ || z(_)) return e;
    bu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(TC, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = ni(m, v)), i + o + `"${vh(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function bh(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function xh(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Sh(e, t, n) {
  let i = r([]);
  bh(i.current, e) ||
    ((i.current = e),
    ZE.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || Y.current() !== Y.canvas || (e > 0 && cs(n.current));
    }));
}
function Ch() {
  return { current: null };
}
async function wh(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function Th(e) {
  return e in cD;
}
function Eh(e, t) {
  let n = {};
  for (let r in e) {
    if (!Th(r)) continue;
    let i = e[r],
      a = cD[r];
    st(i) || st(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Dh(e, t = `character`, n, r, i) {
  if (r) {
    let t = Ch();
    return (n.add(t), _(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return T(
          l,
          {
            children: [
              _(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(lD)?.map((e, t) => {
                  let r = Ch();
                  return (n.add(r), _(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Ch();
        return (
          n.add(o),
          T(
            l,
            { children: [_(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function Oh(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      U(t);
  }
}
function kh(e) {
  let t = [];
  return (
    B(e.x) && t.push(`translateX(${e.x}px)`),
    B(e.y) && t.push(`translateY(${e.y}px)`),
    B(e.scale) && t.push(`scale(${e.scale})`),
    B(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    B(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    B(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    B(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    B(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Ah(e, t, n, r) {
  if (!n || !n.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : kh(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : kh(n.effect),
              };
      }
    default:
      U(i);
  }
}
function jh(e, n, i) {
  let a = Aa(() => new Set()),
    o = Do(),
    s = i || !o,
    l = Ge(),
    u = r({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  u.current.effect = e;
  let d = e?.trigger ?? `onMount`,
    f = e?.target,
    p = e?.threshold;
  c(() => {
    if (!s || i) return;
    u.current.hasMounted = !0;
    function e() {
      let { effect: e } = u.current;
      if (
        !s ||
        !e ||
        (e?.repeat !== !0 && u.current.hasAnimatedOnce) ||
        (e?.type === `appear` && u.current.isAnimating)
      )
        return;
      Object.assign(u.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: r, tokenization: i } = e,
            o = { current: void 0 };
          return (
            Nh(
              i,
              e.effect,
              a,
              t,
              n,
              r,
              l,
              () => {
                Object.assign(u.current, { isAnimating: !1 });
              },
              o
            ),
            () => o.current?.()
          );
        }
        default:
          U(t);
      }
    }
    switch (d) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let t = n?.current;
        return t ? Se(t, e, { amount: p ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = f?.ref?.current;
        return t
          ? Se(t, e, {
              amount: p ?? 0,
              root: document,
              margin: f?.offset ? `${f.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        U(d);
    }
  }, [s, a, i, n, f, p, d]);
  let m = !!e,
    h = e ? Oh(e) : void 0;
  return t(
    () => ({
      getTokenizer: () => {
        if ((a.clear(), !m)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: n } = u.current,
          r = Ah(s, i || Mh(e, t, n), u.current.effect, l);
        return {
          text: (e) => Dh(e, h, a, l, r),
          props: (e) => {
            if (n?.tokenization !== `element`) return;
            let t = Ch();
            return (a.add(t), { ref: t, style: { ...e, ...r } });
          },
        };
      },
      play: () => {
        let { effect: e } = u.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Nh(h, e.effect, a, t, n, !1, l);
            break;
          }
          default:
            U(t);
        }
      },
    }),
    [s, m, a, i, h]
  );
}
function Mh(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Nh(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Eh(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await Ph(n, u);
      if (
        e === null ||
        (Ae(e, l, { ...r, restDelta: 0.001, delay: Fe(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Ae(e, n, { ...r, restDelta: 0.001, delay: Fe(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await wh(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (je.read(() => {
          ((e = Fh(n)),
            e.length !== 0 &&
              je.update(() => {
                let t = e.map((e, t) =>
                  Ae(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Ae(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      U(e);
  }
}
async function Ph(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await wh(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function Fh(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function Ih(e) {
  let t = {};
  for (let n in e) (ge(n) || Ib(n)) && (t[n] = e[n]);
  return t;
}
function Lh(e) {
  return e.type === l;
}
function Rh(e) {
  return e.type === `br`;
}
function zh(e, t, n, r, i = {}, a, o = Lh(e) ? -1 : 0) {
  let s = j.toArray(e.props.children);
  st(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!y(e) || !Rh(e)) && (c = !1), y(e))) return zh(e, t, n, r, i, a, o + 1);
    let s = st(n) ? e : n;
    return z(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": l, ...d } = e.props;
  if (z(e.type) || Te(e.type)) {
    let n = me(e.type) || e.type,
      u = l || n,
      f = z(u) ? t?.[u] : void 0;
    ((d.className = Rc(`framer-text`, d.className, f)),
      a && o === 0 && !c && Object.assign(d, a.props(d.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      m = t?.anchor;
    if (p && m) {
      let e = Bh(s, i);
      d.id = e;
      let t = Rc(`framer-text`, m),
        n = _(`a`, { href: `#${e}`, className: t, children: s });
      ((d.style = { ...(d.style ?? {}), scrollMarginTop: r }), (s = [n]));
    }
    u === `ol` &&
      (d.style = {
        ...(d.style ?? {}),
        [fb]: Hh(d.start ?? 1, j.count(d.children), d.style?.[db] ?? ``),
      });
  }
  return u(e, d, ...s);
}
function Bh(e, t) {
  let n = Wr(e.map(Vh).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function Vh(e) {
  return z(e) || B(e)
    ? e.toString()
    : y(e)
      ? Vh(e.props.children)
      : Array.isArray(e)
        ? e.map(Vh).join(``)
        : ``;
}
function Hh(e, t, n) {
  return lo(Number(e) || 1, t, n);
}
function Uh(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Hi(n.x, n.y),
    i = Uy(Hi(0.5, 0.5), r),
    a = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Hi.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  H(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Hi.isEqual(e, s) && !Hi.isEqual(e, c));
  H(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Uy.intersection(i, Uy(s, c)),
    f = Uy.intersection(i, Uy(l, u));
  return (H(d && f, `linearGradientLine: Must have a start and end point.`), Uy(d, f));
}
function Wh(e, t) {
  let n = Uh(e.angle),
    r = _s(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Uy.pointAtPercentDistance(n, i),
    s = Uy.pointAtPercentDistance(n, a),
    c = tt([i, a], [0, 1]);
  return {
    id: `id${t}g${dx.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: ax.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function Gh(e, t) {
  return {
    id: `id${t}g${px.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: _s(e).map((t) => ({
      color: t.value,
      alpha: ax.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function Kh(e) {
  if (!z(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return B(parseFloat(t));
}
function qh(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return B(n) ? n : 50;
}
function Jh(e) {
  return Kh(e) ? qh(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Yh(e) {
  return Kh(e) ? qh(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function Xh(e, t, n, r) {
  if (((e = fy.get(e, `#09F`)), !Jb.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * Jh(e.positionX) + f),
        (d = (t.height - l) * Yh(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * Yh(e.positionY)))
        : ((n = g), (u = (1 - g) * Jh(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function Zh(e) {
  return e.startsWith(`data:${_D}`);
}
function Qh(e, t) {
  if (/^\w+:/u.test(e) && !Zh(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = Y.current() === Y.export;
  return Vb.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function $h(e, t) {
  return (c(() => CD.subscribeToTemplate(e), [e]), CD.template(e, t));
}
function eg(e) {
  try {
    let t = _h(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function tg(e, t) {
  rg(e, ng(t));
}
function ng(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function rg(e, t) {
  (ig(e, t),
    Array.from(e.children).forEach((e) => {
      rg(e, t);
    }));
}
function ig(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function ag(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (wD[t[2]] || 1));
}
function og(e) {
  let t = ag(e.getAttribute(`width`)),
    n = ag(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function sg(e) {
  return e.indexOf(`image`) >= 0;
}
function cg(e) {
  return e.indexOf(`var(--`) >= 0;
}
function lg(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function ug(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? __,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = CD.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Ka(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    W(s) &&
    W(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function dg({ height: e, width: t, children: n }) {
  let r = fg();
  if (!r || !n) return n;
  let { props: i } = r;
  return _(P.li, {
    ...i,
    style: { ...i.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: n,
  });
}
function fg() {
  try {
    return Xp();
  } catch {
    return;
  }
}
function pg(e) {
  return e > kD ? `lazy` : void 0;
}
function mg(e, t, n) {
  let r = _g(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function hg(e) {
  return e ? (e.fonts ?? xi()) : xi();
}
function gg(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : _g(e);
}
function _g(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    vg(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(yg) })
      : t.fonts.push(yg(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function vg(e) {
  return AD in e;
}
function yg(e) {
  let t = bg(e) || xg(e) ? e : Sg(e);
  return xg(t) ? t : Cg(t);
}
function bg(e) {
  return `source` in e;
}
function xg(e) {
  return `cssFamilyName` in e;
}
function Sg(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Cg(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${xE}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function wg(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Tg(e) {
  return e.loader;
}
function Eg(e, t, n) {
  let r = Tg(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Dg,
  Og,
  kg,
  Ag,
  jg,
  Mg,
  Ng,
  Pg,
  Fg,
  Ig,
  Lg,
  Rg,
  zg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  J,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Y,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  X,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  Z,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Q,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  $,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD = e(() => {
    (o(),
      Qe(),
      Re(),
      n(),
      D(),
      h(),
      (Dg = Xe({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
          (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0));
          var t = class e {
            constructor() {
              ((this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0));
            }
            static fromLinear(e) {
              return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1));
              return (r * 16 + i) / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
            }
            rgbToHex() {
              ((this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b)));
            }
            hexToRgb() {
              ((this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
            }
            xyzToRgb() {
              ((this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
                )));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
                (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
                (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV))));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              ((this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
            }
            luvToLch() {
              if (
                ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
                this.lch_c < 1e-8)
              )
                this.lch_h = 0;
              else {
                let e = Math.atan2(this.luv_v, this.luv_u);
                ((this.lch_h = (e * 180) / Math.PI),
                  this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
              }
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              ((this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c));
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              ((this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452)));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
                let e = this.calcMaxChromaHsluv(this.hsluv_h);
                this.lch_c = (e / 100) * this.hsluv_s;
              }
              this.lch_h = this.hsluv_h;
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
                let e = this.calcMaxChromaHpluv();
                this.lch_c = (e / 100) * this.hpluv_p;
              }
              this.lch_h = this.hpluv_h;
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hpluvToRgb() {
              (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hsluvToHex() {
              (this.hsluvToRgb(), this.rgbToHex());
            }
            hpluvToHex() {
              (this.hpluvToRgb(), this.rgbToHex());
            }
            rgbToHsluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv());
            }
            rgbToHpluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv());
            }
            hexToHsluv() {
              (this.hexToRgb(), this.rgbToHsluv());
            }
            hexToHpluv() {
              (this.hexToRgb(), this.rgbToHpluv());
            }
          };
          ((e.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878));
        },
      })),
      (Og = Xe({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (kg = Xe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (Ag = Xe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = kg();
        },
      })),
      (jg = Xe({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Ag(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (Mg = Xe({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= f),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function p(e) {
              return (
                l === null &&
                  (m(e) && /Apple/.test(f.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        f.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function m(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(a.context) && !p(a.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(h(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              f.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(l),
                          e(a)));
                    }
                    function p() {
                      if (new Date().getTime() - d >= u)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          n()),
                          (l = setTimeout(p, 50)));
                      }
                    }
                    var m = new r(s),
                      g = new r(s),
                      _ = new r(s),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      i(m, h(a, `sans-serif`)),
                      i(g, h(a, `serif`)),
                      i(_, h(a, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      a.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      o(m, function (e) {
                        ((v = e), n());
                      }),
                      i(m, h(a, `"` + a.family + `",sans-serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, h(a, `"` + a.family + `",serif`)),
                      o(_, function (e) {
                        ((b = e), n());
                      }),
                      i(_, h(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((f.FontFaceObserver = s),
                  (f.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (Ng = () => {}),
      (Pg = f !== void 0),
      (Fg =
        Pg &&
        (s.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent))),
      (Ig = Pg && typeof f.requestIdleCallback == `function`),
      (Lg = Ig ? f.requestIdleCallback : setTimeout),
      (Rg = () => Ng),
      (zg = () => !0),
      (Bg = () => !1),
      (Vg = new Map()),
      (Hg = new Map()),
      (Ug = new Set()),
      (Wg = `:`),
      (Gg = Pg ? void 0 : new Set()),
      (Kg = `preload`),
      (qg = Object.keys),
      (Jg = `equals`),
      (Yg = g.createContext({})),
      (Xg = g.createContext({})),
      (Zg = []),
      (Qg = `default`),
      ($g = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (e_ = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && vt(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = $g.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === $g.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === $g.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== $g.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Gg !== void 0 && Gg.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = $g.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = $g.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Vg.has(this.cacheHash) ? Vg.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!pt(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === $g.Fulfilled) return this.value;
          throw this.promiseState === $g.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (t_ = -1),
      (n_ = -2),
      (r_ = -3),
      (i_ = -4),
      (a_ = -5),
      (o_ = -6),
      (s_ = -7),
      (c_ = 2 ** 32 - 1),
      (l_ = c_ - 1),
      (u_ = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (d_ = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (f_ = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (p_ = typeof Uint8Array.fromBase64 == `function`),
      (m_ = typeof process == `object` && process.versions?.node !== void 0),
      (h_ = p_ ? rn : m_ ? on : cn),
      (g_ = p_ ? an : m_ ? sn : ln),
      (__ = Pg
        ? f
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (v_ = 2),
      (y_ = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (b_ = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (S_ = class {
        payload = _n();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return fn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (C_ = Pg ? void 0 : new S_()),
      (w_ = b_.CollectionUtilsCache),
      (T_ = new WeakMap()),
      (E_ = a(void 0)),
      (D_ = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new e_(async () => {
              try {
                let t = await e();
                return (H(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(gt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = xn(n),
            i = Sn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (C_ !== void 0) {
              if (pt(e)) return e.then((e) => (C_.set(w_, i, e), e));
              C_.set(w_, i, e);
            }
            return e;
          }
          if (yn(w_, i)) {
            let e = bn(w_, i);
            return (this.cacheMap.set(i, new e_(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = pt(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(gt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (C_ !== void 0 && C_.set(w_, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new e_(() =>
            s
              .then((e) => (C_ !== void 0 && C_.set(w_, i, e), e))
              .catch((e) => {
                console.error(gt(`Failed to call CollectionUtils method.`, e));
              })
          );
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
      }),
      (O_ = /Mac/u),
      (k_ = /iPhone|iPod|iPad/iu),
      (A_ = /MacIntel/iu),
      (j_ = /Edg\//u),
      (M_ = /Chrome/u),
      (N_ = /Google Inc/u),
      (P_ = /Safari/u),
      (F_ = /Apple Computer/u),
      (I_ = /Firefox\/\d+\.\d+$/u),
      (L_ = /Version\/([\d.]+)/u),
      (R_ = /FramerX/u),
      (z_ = /tablet|iPad|Nexus 9/iu),
      (B_ = /mobi/iu),
      (V_ = 1e3 / 60),
      (H_ = 1e3 / 25),
      (U_ = 500),
      (W_ = Promise.resolve()),
      (G_ = 100),
      (K_ = (e) => {
        je.read(e, !1, !0);
      }),
      (q_ = Kn(K_)),
      (J_ = !Fg),
      (Y_ = {}),
      (X_ = () => Y_),
      (Z_ = (e) => {
        Y_ = e;
      }),
      (Q_ = RegExp(`:([a-z]\\w*)`, `gi`)),
      ($_ = `framer_variant`),
      (ev = !1),
      (tv = g.createContext({ global: void 0, routes: {} })),
      (nv = 10),
      (rv = 1e4),
      (iv = (e) => `--view-transition-${e}`),
      (av = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${iv(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${iv(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${iv(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (ov = {
        circle: {
          makeKeyframe: (e, t) => `${iv(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${iv(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${dr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${iv(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: av,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${ur(e.x)} ${ur(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = cr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${iv(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${iv(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${iv(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${iv(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${iv(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${iv(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (sv = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (cv = `view-transition-styles`),
      (lv = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (uv = () => {}),
      (fv = () => {
        (dv ||
          ((dv = document.createElement(`div`)),
          dv.setAttribute(`aria-live`, `assertive`),
          dv.setAttribute(`aria-atomic`, `true`),
          (dv.style.position = `absolute`),
          (dv.style.transform = `scale(0)`),
          document.body.append(dv)),
          setTimeout(() => {
            dv.textContent = document.title;
          }, 60));
      }),
      (mv =
        Pg &&
        typeof f.navigation?.back == `function` &&
        !(() => {
          if (s === void 0) return !1;
          let e = s.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !Nn()),
      (hv = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (gv = g.createContext(null)),
      (_v = (() => {
        let e = a(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (vv = typeof document < `u` ? M : c),
      (yv = async () => {}),
      (bv = { activeLocale: null, locales: [], setLocale: yv }),
      (xv = (() => {
        let e = g.createContext(bv);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Sv = (() => {
        let e = g.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Cv = new Set()),
      (wv = (() => {
        let e = a({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Tv = 46),
      (Ev = 47),
      (Dv = (e, t) => e.charCodeAt(t)),
      (Ov = (e, t) => e.lastIndexOf(t)),
      (kv = (e, t, n) => e.slice(t, n)),
      (Av = !1),
      (jv = `/`),
      (Mv = (e) => e === Ev),
      (Nv = new Set([`/404.html`, `/404`, `/404/`])),
      (Pv = `__f_replay`),
      (Fv =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Iv = (e) => {
        e.target?.closest?.(`#main`) &&
          (li(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Lv = !1),
      (ey = [fi]),
      ($v = [fi]),
      (Qv = [fi]),
      (Zv = [fi]),
      (Xv = [fi]),
      (Yv = [fi]),
      (Jv = [fi]),
      (qv = [fi]),
      (Kv = [fi]),
      (Gv = [fi]),
      (Wv = [fi]),
      (Uv = [fi]),
      (Hv = [fi]),
      (Vv = [fi]),
      (Bv = [fi]),
      (zv = [fi]),
      (Rv = [fi]),
      (ny = class {
        constructor() {
          (Ue(ty, 5, this),
            we(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            we(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            we(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            we(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            we(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            we(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            we(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            pi(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            pi(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            pi(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            pi(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            pi(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            pi(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            pi(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          pi(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          pi(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (ty = Pe(null)),
      Ve(ty, 1, `markRenderStart`, ey, ny),
      Ve(ty, 1, `markRenderEnd`, $v, ny),
      Ve(ty, 1, `markUseInsertionEffectsStart`, Qv, ny),
      Ve(ty, 1, `markUseInsertionEffectRouterStart`, Zv, ny),
      Ve(ty, 1, `markUseInsertionEffectsEnd`, Xv, ny),
      Ve(ty, 1, `markUseLayoutEffectsStart`, Yv, ny),
      Ve(ty, 1, `markRouterUseLayoutEffectStart`, Jv, ny),
      Ve(ty, 1, `markUseLayoutEffectsEnd`, qv, ny),
      Ve(ty, 1, `markUseEffectsStart`, Kv, ny),
      Ve(ty, 1, `markUseEffectsRouterStart`, Gv, ny),
      Ve(ty, 1, `markUseEffectsAreSynchronous`, Wv, ny),
      Ve(ty, 1, `markUseEffectsEnd`, Uv, ny),
      Ve(ty, 1, `markRafStart`, Hv, ny),
      Ve(ty, 1, `markRafEnd`, Vv, ny),
      Ve(ty, 1, `markLayoutStylePaintEnd`, Bv, ny),
      Ve(ty, 1, `measureMutationEffects`, zv, ny),
      Ve(ty, 1, `measureUnattributedHydrationOverhead`, Rv, ny),
      qe(ty, ny),
      (iy = !1),
      (ay = { Start: vi, End: yi }),
      (oy = class extends Error {}),
      (sy = class extends v {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof oy)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return bi(e, t);
        }
      }),
      (cy = Object.freeze([])),
      (uy = new Set()),
      (dy = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (fy = (() => {
        function e(e) {
          return (
            Ii(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Li(e) ? e : new hy(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Li(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Li(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (py = `onUpdate`),
      (my = `finishTransaction`),
      (hy = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new dy();
        static interpolationFor(e, t) {
          if (Li(e)) return Ri(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Li(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Bi(e.x, t.x), y: Bi(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((Hi ||= {})),
      (gy = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (_y = new (Dg().Hsluv)()),
      (vy = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (yy =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (by = (e) => {
        let { r: t, g: n, b: r, a: i } = fa(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (xy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ma({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Sy = (e) => {
        let { r: t, g: n, b: r, a: i } = fa(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Cy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ma({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (wy = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return ha(this);
        }
        rgb() {
          return ya(this);
        }
        hsl() {
          return Qi(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(_a(t));
            case `srgb`:
              return new e(va(_a(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            va({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = J(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = ua(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!z(t) || !J.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Ty = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Ty.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Ty.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = ba(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && sa(e) !== !1),
          (e.isColorObject = (e) =>
            V(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => Zi(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && wy.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...qi(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = ta(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = ta(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = Zi(e.r, e.g, e.b, !0);
            for (let e of Object.keys(gy)) if (gy[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Ui(i, [0, 1], [t.r, r.r], a),
                g: Ui(i, [0, 1], [t.g, r.g], a),
                b: Ui(i, [0, 1], [t.b, r.b], a),
                a: Ui(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Ui(i, [0, 1], [u, u + f], a),
                s: Ui(i, [0, 1], [c.s, l.s], a),
                l: Ui(i, [0, 1], [c.l, l.l], a),
                a: Ui(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Ji(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => Qi(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (Ey = (e) => e instanceof Je),
      (Dy = Og().EventEmitter),
      (Oy = class {
        _emitter = new Dy();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (ky = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Ay = __.requestAnimationFrame || ky),
      (jy = (e) => Ay(e)),
      (My = 1 / 60),
      (Ny = class extends Oy {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          My = e;
        }
        static get TimeStep() {
          return My;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), jy(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * My;
        }
        tick = () => {
          this._started &&
            (jy(this.tick),
            this.emit(`update`, this._frame, My),
            this.emit(`render`, this._frame, My),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Py = new Ny()),
      (Fy = { target: Ea() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Fy.target,
        hasRestrictions: () => {
          let e = Fy.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Iy = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Oe({
        borderTopWidth: Iy(`y`),
        borderLeftWidth: Iy(`x`),
        borderRightWidth: Iy(`x`),
        borderBottomWidth: Iy(`y`),
      }),
      (Ly = g.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Ry = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (zy = {
        ...Ry,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (By = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Vy = { ...By, fontWeight: 500 }),
      (Hy = {
        ...By,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Uy = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Ia(Hi.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(Hi(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => Hi.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => X.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: zi(e.x, t),
          y: zi(e.y, t),
          width: zi(e.width, t),
          height: zi(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: Hi.distance(t, n), height: Hi.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(X.minX)), y: Math.min(...e.map(X.minY)) },
            n = { x: Math.max(...e.map(X.maxX)), y: Math.max(...e.map(X.maxY)) };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= X.maxX(e) || X.maxX(t) <= e.x || t.y >= X.maxY(e) || X.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => X.intersects(t, e)) === void 0,
        isEqual: (e, t) => X.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            Hi.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [Uy(t, n), Uy(n, r), Uy(r, i), Uy(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  U(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              U(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  U(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              U(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Uy(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Uy.intersection(n, t, !0)) {
              let n = Wy[e];
              return (H(n, () => `Invalid edge name: ${JSON.stringify(Wy)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          H(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            H(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Wy = [`top`, `right`, `bottom`, `left`]),
      (Gy = {
        quickfix: (e) => (
          (La(e.widthType) || La(e.heightType)) && (e.aspectRatio = null),
          W(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || La(e.widthType) || W(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || La(e.heightType) || W(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Ky = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Gy.quickfix({
              left: W(t) || Li(t),
              right: W(n) || Li(n),
              top: W(r) || Li(r),
              bottom: W(i) || Li(i),
              widthType: Ra(a),
              heightType: Ra(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = fy.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = fy.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? fy.getNumber(t) : null,
              right: d.right ? fy.getNumber(n) : null,
              top: d.top ? fy.getNumber(r) : null,
              bottom: d.bottom ? fy.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? fy.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? fy.getNumber(t?.sizing.height) : null,
            c = Wa(e.left, e.right);
          if (o && W(c)) i = o - c;
          else if (n && La(e.widthType)) i = n.width;
          else if (W(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.widthType);
            }
          let l = Wa(e.top, e.bottom);
          if (s && W(l)) a = s - l;
          else if (n && La(e.heightType)) a = n.height;
          else if (W(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.heightType);
            }
          return Ua(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Ky.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? fy.getNumber(l.width) : null,
            d = l ? fy.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (qy = 200),
      (Jy = 200),
      (Yy = g.createContext({ parentSize: 0 })),
      (Xy = (e) => {
        let t = Qa(),
          { parentSize: n, children: r } = e,
          i = g.useMemo(() => ({ parentSize: n }), [eo(n), to(n)]);
        return t === 1
          ? r
            ? _(O, { children: r })
            : null
          : _(Yy.Provider, { value: i, children: r });
      }),
      (Zy = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(Zy || {})),
      (Qy = g.createContext(void 0)),
      ($y = new Set()),
      (tb = `style[data-framer-css-ssr-minified]`),
      (nb = (() => {
        if (!Fn()) return new Set();
        let e = document.querySelector(tb)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (rb = `data-framer-css-ssr`),
      (ib = (e, t, n) =>
        g.forwardRef((r, i) => {
          let { sheet: a, cache: o } = g.useContext(Qy) ?? {},
            s = n;
          if (!Fn()) {
            rt(t) && (t = t(so(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            ob.add(e, s);
          }
          return (
            p(() => {
              (s && nb.has(s)) ||
                (rt(t)
                  ? t(so(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && oo(e, a, o));
            }, []),
            _(e, { ...r, ref: i })
          );
        })),
      (ab = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (ob = new ab()),
      (sb = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (cb = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(cb || {})),
      (lb = cb),
      (ub = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (H(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${co(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            H(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${lb.BorderTopWidth}${lb.BorderRightWidth}${lb.BorderBottomWidth}${lb.BorderLeftWidth}`,
      (db = `--list-style-type`),
      (fb = `--max-list-digits`),
      (pb = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (mb = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (hb = { display: `inline-block` }),
      (gb = { display: `block` }),
      (_b = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${mb.display};
            flex-direction: ${mb.flexDirection};
            justify-content: ${mb.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${ho([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${ho([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${ho([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${hb.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${ho([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${ho([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ho([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ho([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${ho([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${ho([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${ho([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${ho([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${ho([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${ho([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ho([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${ho([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${ho([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ho([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${ho([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ho([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ho([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${ho([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ho([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${gb.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${fb}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${go(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (vb = `--text-truncation-display-inline-for-safari-16`),
      (yb = `--text-truncation-display-none-for-safari-16`),
      (bb = `--text-truncation-line-break-for-safari-16`),
      (xb = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (Sb = `(background: -webkit-named-image(i))`),
      (Cb = `(contain-intrinsic-size: inherit)`),
      (wb = [
        `@supports ${Sb} and (not ${Cb}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${xb.join(`, `)} { display: var(${vb}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${xb.map((e) => `${e}::after`).join(`, `)} { content: var(${bb}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${yb}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${vb}, ${hb.display}) }
    }`,
      ]),
      (Tb = `--framer-will-change-override`),
      (Eb = `--framer-will-change-effect-override`),
      (Db = `--framer-will-change-filter-override`),
      (Ob = `--overflow-clip-fallback`),
      (kb = `--one-if-corner-shape-supported`),
      (Ab = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${Tb}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${Tb}: transform; } }`,
                ]
              : [`body { ${Tb}: none; ${Eb}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${Db}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${Db}: filter; } }`,
                ]
              : [`body { ${Db}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${Ob}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${kb}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ..._b,
          ...sb,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...wb,
          f,
        ];
      }),
      (jb = ao(() => Ab(!1))),
      (Mb = ao(() => Ab(!0))),
      (Nb = `optional`),
      (Pb = (e) => e),
      (Fb =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Ib = ko(
        (e) =>
          Fb.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Lb = (e) => () => {
        Fi(e);
      }),
      (Rb = () => () => {}),
      (zb = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, n, r) {
          let i = Vb.useImageSource(e, n, r);
          return t(() => {
            let t = new Image();
            return ((t.src = i), e.srcSet && (t.srcset = e.srcSet), t);
          }, [i, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (Bb = !1),
      (Vb = new Proxy(zb, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Rb()
              : Lb(
                  Bb
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (Hb = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Ub = [1, 2, 2.2]),
      (Wb = [512, 1024, 2048, 4096]),
      (Gb = 512),
      (Kb = { position: `absolute`, ...Hb, top: 0, right: 0, bottom: 0, left: 0 }),
      (qb = `src`),
      (Jb = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && qb in e;
        },
      }),
      (Yb = Mn()),
      (Xb = g.createContext(!1)),
      (Zb = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (Qb = Fn() ? new Zb() : void 0),
      ($b = `data-framer-size-compatibility-wrapper`),
      (ex = `0.000001px`),
      (tx = ` translateZ(${ex})`),
      (nx = Ln() || Nn() || Rn()),
      (rx = (() => {
        class e extends v {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? ls(t) : us(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Pt(this.props, e);
          }
          componentDidUpdate(e) {
            Pb(this.props).clip &&
              Pb(this.props).radius === 0 &&
              Pb(e).radius !== 0 &&
              fs(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (ix = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (ax = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = sa(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => J.toRgbString(J.multiplyAlpha(J(e), t)),
        toHexValue: (e) => J.toHex(J(e)).toUpperCase(),
        toHex: (e) => J.toHexString(J(e)).toUpperCase(),
        toRgb: (e) => J.toRgb(J(e)),
        toRgbString: (e) => J.toRgbString(J(e)),
        toHSV: (e) => J.toHsv(J(e)),
        toHSL: (e) => J.toHsl(J(e)),
        toHslString: (e) => J.toHslString(J(e)),
        toHsvString: (e) => J.toHsvString(J(e)),
        hsvToHSLString: (e) => J.toHslString(J(Yi(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J(Yi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J(Yi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J(Yi(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => Yi(e.h, e.s, e.v),
        rgbaToString: (e) => J.toRgbString(J(e)),
        rgbToHexValue: (e) => J.toHex(J(e)),
        rgbToHexString: (e) => J.toHexString(J(e)),
        hslToString: (e) => J.toHslString(J(e)),
        hslToRgbString: (e) => J.toRgbString(J(e)),
        toColorPickerSquare: (e) => J.toRgbString(J({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => J(e).isValid !== !1,
        equals: (e, t) =>
          J.isP3String(e) || J.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = J(e)),
              typeof t == `string` && (t = J(t)),
              J.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = J(e);
          return t.a === 1 ? J.toHexString(t) : J.toRgbString(t);
        },
        toFormatString: (e) => (J.isP3String(e) ? e : J.toRgbString(J(e))),
      }),
      (ox = /var\(.+\)/u),
      (sx = new Map()),
      (cx = [`stops`]),
      (lx = [`start`, `end`]),
      (ux = [`angle`, `alpha`]),
      (dx = {
        isLinearGradient: (e) => V(e) && ux.every((t) => t in e) && (bs(e) || ys(e)),
        hash: (e) => e.angle ^ vs(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = _s(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (fx = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (px = {
        isRadialGradient: (e) => V(e) && fx.every((t) => t in e) && (bs(e) || ys(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ vs(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = _s(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (mx = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (hx = new Set([...mx, ...mx.map((e) => `${e}Capture`)])),
      (gx = `overflow`),
      (_x = { x: 0, y: 0, width: 200, height: 200 }),
      (vx = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (yx = b(function (e, t) {
        let { name: n, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: l } = $o(e),
          u = js(c),
          d = ts(e),
          f = Es(e),
          p = r(null),
          m = t ?? p,
          h = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` || void 0,
            "data-layoutid": d,
            "data-framer-offset-parent-id": Pb(e)[`data-framer-offset-parent-id`],
          };
        !Ms(e) && n && (Pb(h)[`data-framer-name`] = n);
        let [g, v] = As(c),
          y = ks(c),
          b = io(y);
        (i && !(v && !b && Ka(y))
          ? ((u.transformTemplate ||= es(i)), Object.assign(h, Zo(i)))
          : (u.transformTemplate ||= void 0),
          ss(e, m));
        let x = qo(e),
          S = Ns(c, y, v, w(Xb)),
          C = no(
            T(O, {
              children: [
                x
                  ? _(Uo, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: v ?? void 0,
                      nodeId: e.id && Qo(e.id),
                      layoutId: d,
                    })
                  : null,
                l,
                _(Go, { ...o, border: a, layoutId: d }),
              ],
            }),
            S
          ),
          E = Yo(e.as),
          D = Jo(x);
        return (
          e.fitImageDimension &&
            D &&
            ((g[e.fitImageDimension] = `auto`), (g.aspectRatio = D.width / D.height)),
          T(E, { ...h, ...u, layoutId: d, style: g, ref: m, children: [C, s] })
        );
      })),
      (bx = vo(
        b(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? _(yx, { ...e, ref: t }) : null;
        })
      )),
      (xx = `__LAYOUT_TREE_ROOT`),
      (Sx = g.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (Cx = class extends v {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === xx && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return _(Sx.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (wx = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Tx = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (Ex = a(new Map())),
      (Dx = typeof IntersectionObserver > `u` ? Ng : Vs),
      (Ox = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (kx = g.createContext(null)),
      (Ax = class extends v {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === xx && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return _(Le.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (jx = (e) => {
        let t = g.useContext(Sx);
        return _(Ax, { ...e, sharedLayoutContext: t });
      }),
      (Mx = g.createContext(!0)),
      (Nx = a({ register: () => {}, deregister: () => {} })),
      (Px = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let i = Ks(),
          a = r({
            register: C(
              (e) => {
                if (i.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                i.set(e, void 0);
              },
              [i]
            ),
            deregister: C(
              (e) => {
                (i.get(e)?.(), i.delete(e));
              },
              [i]
            ),
          }).current;
        return (
          c(
            () => (
              i.forEach((n, r) => {
                let a = r(e, t);
                i.set(r, rt(a) ? a : void 0);
              }),
              () => {
                i.forEach((e, t) => {
                  e && (e(), i.set(t, void 0));
                });
              }
            ),
            [e, t, i]
          ),
          _(Nx.Provider, { value: a, children: n })
        );
      }),
      (Fx = g.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: l,
        onTapBackdrop: u,
        backfaceVisible: d,
        exitBackfaceVisible: f,
        animation: p,
        exitAnimation: m,
        instant: h,
        initialProps: g,
        exitProps: v,
        position: y = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: b,
        index: x,
        areMagicMotionLayersPresent: S,
        id: C,
        isInitial: E,
      }) {
        let D = ae(),
          O = w(Ee),
          { persistLayoutIdCache: k } = w(Ly),
          A = r({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Ys({}, g, o),
          }),
          j = r(null),
          M = O !== null && !O.isPresent;
        (t && A.current.wasCurrent === void 0 && k(),
          c(() => {
            if (e || !D) return;
            if (M) {
              A.current = { ...A.current, wasBeingRemoved: M };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = A.current,
              a = (t && !i) || (!M && A.current.wasBeingRemoved && t),
              s = n && !r,
              c = Ys(A.current.origins, g, o),
              l = A.current.wasReset;
            (a || s
              ? (D.stop(), D.start({ zIndex: x, ...c, ...o }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: x, ...Ix, opacity: 0 }), (l = !0)),
              (A.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, M]));
        let ee = h ? { type: !1 } : `velocity` in p ? { ...p, velocity: 0 } : p,
          te = h ? { type: !1 } : m || p,
          N = { ...y };
        ((N.left === void 0 || N.right === void 0) && (N.width = `auto`),
          (N.top === void 0 || N.bottom === void 0) && (N.height = `auto`));
        let ne = (Xs(o) || Xs(g)) && (e || t || n) ? 1200 : void 0,
          P = { ...Ix, ...A.current.origins },
          re = e
            ? {
                initial: { ...P, ...g },
                animate: { ...P, ...o, transition: ee },
                exit: { ...P, ...v, transition: p },
              }
            : { animate: D, exit: { ...P, ...v, transition: te } },
          ie = !(M || S === !1),
          oe = !!t && ie,
          se = t && E;
        return T(bx, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || M || (t && b) ? x : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: ne,
          },
          children: [
            e &&
              _(bx, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: p,
                initial: { opacity: h && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: l || `transparent`,
                onTap: M ? void 0 : u,
              }),
            _(bx, {
              ...N,
              ...re,
              transition: {
                default: ee,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: M ? f : d,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: se || e || (t && b) ? 1 : 0 },
              "data-is-present": ie ? void 0 : !1,
              ref: j,
              children: _(kx.Provider, {
                value: j,
                children: _(Mx.Provider, {
                  value: oe,
                  children: _(Px, {
                    isCurrent: oe,
                    isOverlayed: i,
                    children: _(jx, {
                      isLead: t,
                      animatesLayout: !!b,
                      transition: ee,
                      isExiting: !ie,
                      isOverlayed: i,
                      id: C,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Js)),
      (Ix = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (Lx = class {
        warning = () => {
          Fi(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (Rx = a(new Lx())),
      (zx = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (Bx = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (Vx = qg(Ix)),
      (Hx = g.createContext(void 0)),
      (Ux = g.createContext(void 0)),
      (Wx = (() => {
        class e extends v {
          #e = null;
          state = Bx();
          static defaultProps = { enabled: !0 };
          static contextType = Hx;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !Fa(t) || !Pa(t)) return;
            let n = { ...zx.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = ec(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!Fa(t) || !Pa(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, zx.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = ec(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !Fa(e) || !Pa(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, zx.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, zx.Fade, t);
          }
          push(e, t) {
            this.#i(e, Zs(t), t);
          }
          modal(e, t) {
            this.#i(e, zx.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, Qs(t), t);
          }
          flip(e, t) {
            this.#i(e, $s(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, zx.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = hc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              H(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              H(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                _(
                  Fx,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: Tc(o, e),
                    transitionProps: u,
                    animation: wc(o, e),
                    backfaceVisible: Sc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: _(Ps, { children: Dc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              _(
                Fx,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: xc(n, t),
                  transitionProps: Cc(n, t),
                  instant: Tc(n, t, !0),
                  animation: wc(n, t),
                  exitProps: e.transition.enter,
                  visible: Ec(n, t),
                  backdropColor: yc(e.transition),
                  backfaceVisible: bc(n, t),
                  onTapBackdrop: Oc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Dc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return _(bx, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: _(Rx.Provider, {
                value: this,
                children: T(Ux.Provider, {
                  value: i,
                  children: [
                    _(Fx, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: gc(n),
                      animation: _c(n),
                      backfaceVisible: vc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: _(Da, {
                        children: _(Cx, {
                          children: _(Be, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    _(Be, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (Gx = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (Kx = vo(g.forwardRef(kc))),
      Ye(jg(), 1),
      Ye(jg(), 1),
      Ye(jg(), 1),
      (qx = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (Jx = Symbol(`private`)),
      (Yx = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [Jx]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new dy(),
                reset() {
                  for (let t in i)
                    if (qx(i, t)) {
                      let n = qx(e, t) ? Pb(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, Zx);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[Jx].reset()),
          (e.addObserver = (e, t) => e[Jx].observers.add(t)),
          e
        );
      })()),
      (Xx = class {
        set = (e, t, n, r) => {
          if (t === Jx) return !1;
          let i = e[Jx],
            a,
            o;
          if (
            (Li(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = fy(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = Pb(e)[t];
          if (l !== void 0) {
            Li(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Pb(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === Jx) return Pb(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[Jx].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(Jx);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== Jx) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (Zx = new Xx()),
      (Qx = `opacity`),
      ($x = (() => {
        function e(t = {}) {
          let n = Yx(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => Yx.resetObject(e));
          }),
          (e.addObserver = (e, t) => Yx.addObserver(e, t)),
          e
        );
      })()),
      (eS = { update: 0 }),
      (tS = g.createContext({ update: NaN })),
      (nS = class extends v {
        observers = [];
        state = eS;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), Py.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), $x.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            $x._stores.forEach((e) => {
              let t = $x.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            _(tS.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Ye(jg(), 1),
      (rS = `__framer__`),
      (iS = rS.length),
      (aS = g.createContext(void 0)),
      (oS = g.createContext(void 0)),
      (sS = `ssr-variant`),
      (cS = `ssr-variant-group-separator`),
      (lS = g.forwardRef(function (e, t) {
        let n = Vc(t),
          r = g.useContext(oS),
          i = g.useSyncExternalStore(Rg, Bg, zg),
          a = Aa(() => (i ? (Fn() ? 1 : 2) : 0)),
          o = g.useContext(aS);
        return qr(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, Yc(t, c, i));
            case 1:
              return Wc(i, s, c, u, l, d, n, t);
            case 2:
              return Wc(i, s, c, u, l, d, Bc, void 0);
            default:
              U(a);
          }
        }, [o, r, n, e]);
      })),
      (uS = ib(lS, `.${sS} { display: contents }`, `PropertyOverrides`)),
      (dS = `default`),
      (fS = new Set([dS])),
      (pS = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (H(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (H(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = dS, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return dS;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = Gc(r)) : dS;
        }
        setAll(e, t = fS, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = rt(n.transformTemplate) ? n.transformTemplate?.({}, hS) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: V(a) ? a : void 0,
              animate: V(o) ? o : void 0,
              transformTemplate: z(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (mS = new pS()),
      (hS = `__Appear_Animation_Transform__`),
      (gS = `data-framer-appear-id`),
      (_S = `data-framer-appear-animation`),
      (vS = (e) => {
        if (Do())
          return {
            animate: Zc(e.animate) ? e.animate : void 0,
            initial: Zc(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (yS = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (bS = (e) => ({
        x: $e(e?.x ?? 0),
        y: $e(e?.y ?? 0),
        opacity: $e(e?.opacity ?? 1),
        scale: $e(e?.scale ?? 1),
        rotate: $e(e?.rotate ?? 0),
        rotateX: $e(e?.rotateX ?? 0),
        rotateY: $e(e?.rotateY ?? 0),
        skewX: $e(e?.skewX ?? 0),
        skewY: $e(e?.skewY ?? 0),
        transformPerspective: $e(e?.transformPerspective ?? 0),
      })),
      (xS = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (SS = { willChange: `transform` }),
      Object.freeze(SS),
      (CS = {}),
      Object.freeze(CS),
      (wS = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (TS = () => {
        let e = r();
        return (
          c(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (ES = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (DS = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (OS = 1),
      (kS = 4),
      (AS = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (jS = [`animate`, `animate`]),
      (MS = { inputRange: [], outputRange: [] }),
      (NS = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (PS = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (FS = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (IS = [0, 1]),
      (LS = { parallax: ES, styleAppear: AS, styleTransform: NS, loop: wS, presence: DS }),
      (RS = qg(LS)),
      (zS = (e) => e.reduce((e, t) => (e += t), 0)),
      (BS = (e) => e.reduce((e, t) => (e *= t), 1)),
      (VS = `current`),
      (HS = (e) =>
        g.forwardRef((t, n) => {
          if (t.__withFX)
            return _(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = vS(t);
          if (r) return _(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: f = !1,
            } = bl(t),
            p = Rs(n),
            { values: m, style: h } = ol(s, p, f, t.style, t[ie]),
            { values: v, style: y } = nl(i, p, t.style?.visibility),
            { values: b, style: x } = vl(o, p),
            { values: S, style: C } = ml(a, p),
            { values: w, style: T } = el(c, p),
            E = g.useMemo(() => {
              let e = new Je(u ?? 1);
              return {
                scale: [S.scale, w.scale, m.scale, b.scale],
                opacity: [S.opacity, w.opacity, m.opacity, e, b.opacity],
                x: [S.x, w.x, m.x, b.x],
                y: [S.y, w.y, v.y, m.y, b.y],
                rotate: [S.rotate, w.rotate, m.rotate, b.rotate],
                rotateX: [S.rotateX, w.rotateX, m.rotateX, b.rotateX],
                rotateY: [S.rotateY, w.rotateY, m.rotateY, b.rotateY],
                skewX: [S.skewX, w.skewX, m.skewX, b.skewX],
                skewY: [S.skewY, w.skewY, m.skewY, b.skewY],
                transformPerspective: [b.transformPerspective, S.transformPerspective],
              };
            }, [u, b, v, S, w, m]);
          Sl(t.style, E);
          let D = R(E.scale, BS),
            O = R(E.opacity, BS),
            k = R(E.x, zS),
            A = R(E.y, zS),
            j = R(E.rotate, zS),
            M = R(E.rotateX, zS),
            ee = R(E.rotateY, zS),
            te = R(E.skewX, zS),
            N = R(E.skewY, zS),
            ne = R(E.transformPerspective, zS),
            { drag: P, dragConstraints: re } = l;
          rs(P && xl(re) ? re : void 0);
          let ae = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: M,
            rotateY: ee,
            skewX: te,
            skewY: N,
          };
          st(d) && (ae.transformPerspective = ne);
          let oe = Cl(t.animate) ? t.animate : void 0,
            se = Cl(t.initial) ? t.initial : void 0,
            ce = Cl(t.exit) ? t.exit : void 0,
            le = f && !s.presenceInitial ? { initial: se, animate: oe, exit: ce } : {};
          return _(e, {
            ...l,
            ...le,
            __withFX: !0,
            style: { ...t.style, ...y, ...x, ...T, ...ae, ...C, ...h },
            values: m,
            ref: p,
          });
        })),
      (US = g.createContext({})),
      (WS = g.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = g.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Vc(a);
        return _(US.Provider, { value: o, children: s(r, i) });
      })),
      (GS = (e) =>
        g.forwardRef((t, n) =>
          _(e, { layoutId: ts(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (KS = !1),
      (qS = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Tl(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              gt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          hn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Tl(e)) throw e;
          return ((KS = !0), this.props.children);
        }
      }),
      (JS = f === void 0 ? null : new Promise(() => {})),
      (YS = _(El, {})),
      (XS = a(!1)),
      (XS.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (ZS = _(Ol, {})),
      (QS = class extends v {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Al(this.props.getErrorMessage(), t?.componentStack), kl(e, t));
        }
        render() {
          let { children: e, fallback: t = ZS } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      ($S = class extends v {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            kl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (eC = g.createContext(void 0)),
      (tC = `code-crash:`),
      (nC = GS(
        g.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = Aa(() => (t ? `${t}-container` : void 0)),
            d = Yo(n),
            f = Wl(
              g.Children.map(e, (e) =>
                g.isValidElement(e) ? g.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return _(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: _(Xb.Provider, {
              value: !0,
              children: _(gv.Provider, {
                value: i ?? null,
                children: _(ka, {
                  enabled: !1,
                  children: _(Ke, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (rC = g.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = Wl(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Yo(f);
          return _(gv.Provider, {
            value: a ?? null,
            children: _(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return _(gv.Provider, {
            value: a ?? null,
            children: _(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (iC = a({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (aC = `framer-cursor-none`),
      (oC = `framer-pointer-events-none`),
      (sC = x(function ({ children: e }) {
        let t = Aa(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = Gl(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = Ge();
        return T(iC.Provider, { value: t, children: [e, !n && _(dC, {})] });
      })),
      (cC = ib(
        sC,
        [
          `.${aC}, .${aC} * { cursor: none !important; }`,
          `.${oC}, .${oC} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (lC = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (uC = `data-framer-portal-id`),
      (dC = x(function () {
        let { onRegisterCursors: e } = w(iC),
          [t, n] = d(!1),
          i = se(0),
          a = se(0),
          o = se(0),
          s = r(null),
          l = r({ cursors: {}, cursorHash: void 0 }),
          u = ns();
        (M(() => {
          let e = __.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? m(() => n(!1)) : n(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || n(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          c(() => {
            if (!t) return;
            let e = 0,
              n = 0;
            function r() {
              (i.set(e), a.set(n), Ae(o, 1, { type: `tween`, duration: 0.2 }));
            }
            let c = () => {
              if (ot(l.current.cursors)) return;
              let t = Yl(e, n);
              t !== l.current.cursorHash && ((l.current.cursorHash = t), je.update(() => u()));
            };
            function d(t) {
              if (t.pointerType === `touch`) {
                ze(c);
                return;
              }
              (je.read(c, !0), (e = t.clientX), (n = t.clientY), je.update(r));
            }
            function f(e) {
              if (e.target === s.current || !s.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              je.update(() => {
                s.current?.dispatchEvent(t);
              });
            }
            return (
              __.addEventListener(`pointermove`, d),
              document.addEventListener(`pointerdown`, f),
              document.addEventListener(`pointerup`, f),
              je.read(c, !0),
              () => {
                (__.removeEventListener(`pointermove`, d),
                  document.removeEventListener(`pointerdown`, f),
                  document.removeEventListener(`pointerup`, f),
                  ze(c));
              }
            );
          }, [o, i, a, u, t]),
          c(() => {
            if (!t) return;
            function e() {
              Ae(o, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              __.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), __.removeEventListener(`blur`, e));
              }
            );
          }, [o, t]),
          M(() => {
            function t(e) {
              ((l.current.cursors = e),
                (l.current.cursorHash = ot(e) ? null : Yl(i.get(), a.get())),
                u());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(aC, !1));
            };
          }, [i, a, e, u]));
        let { cursors: f, cursorHash: p } = l.current,
          h = p ? f[p] : null,
          g = Kl(h);
        M(() => {
          t && document.body.classList.toggle(aC, g);
        }, [g, t]);
        let v = h?.component,
          y = h?.transition ?? { duration: 0 },
          b = y.duration === void 0 ? y : { ...y, duration: y.duration * 1e3 },
          x = L(i, b),
          S = L(a, b),
          T = R(() => x.get() + (h?.offset?.x ?? 0)),
          D = R(() => S.get() + (h?.offset?.y ?? 0)),
          O = h?.alignment,
          k = h?.placement,
          A = C((e, t) => `translate(${Jl(k, O)}) ${t}`, [O, k]);
        return !t || !h || !v
          ? null
          : _(E, {
              children: _(v, {
                transformTemplate: A,
                style: { ...lC, x: T, y: D, opacity: o },
                globalTapTarget: !0,
                variant: h?.variant,
                ref: s,
                className: oC,
              }),
            });
      })),
      (fC = `webPageId`),
      (pC = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            H(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (H(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Pg && !Rn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Ql(e), e), this.collectedLinks.set(Ql(t), t));
          let n = this.nestingInfo.get(Ql(e)) ?? new Set();
          (n.add(Ql(t)), this.nestingInfo.set(Ql(e), n));
        }
      }),
      (mC = new pC()),
      (hC = `element`),
      (gC = `collection`),
      (_C = `collectionItemId`),
      (vC = `pathVariables`),
      (yC = `framer/page-link,`),
      (bC = a(void 0)),
      (xC = `overlay`),
      (SC = `template-overlay`),
      (CC = g.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? _(e, { ...t, ref: n }) : null;
      })),
      (wC = class extends v {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((f.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(gt(Fg ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          hn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (Fg && document.getElementById(`main`)?.innerHTML) || ``;
          return _(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${gt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (TC = /:([a-z]\w*)/gi),
      (EC = a(void 0)),
      (DC = 500),
      (OC = 0.9),
      (kC = 1.7),
      (AC = 4),
      (jC = 1 / 0),
      (MC = new WeakMap()),
      (NC = new Set()),
      (PC = new Map()),
      (FC = !J_ || typeof IntersectionObserver > `u` ? null : xu()),
      (IC = hu(
        b(function (
          {
            children: e,
            href: n,
            openInNewTab: r,
            smoothScroll: i,
            clickTrackingId: a,
            relValues: o,
            preserveParams: s,
            nodeId: c,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = Lt(),
            m = zt(),
            h = yu(),
            { activeLocale: g, locales: _ } = Yr(),
            v = Du(),
            b = qn(),
            x = $l(),
            S = Ou({ nodeId: c, clickTrackingId: a, router: p, href: n, activeLocale: g }),
            C = t(() => {
              if (!n) return {};
              let e = Zl(n) ? n : ou(n);
              if (!e) return {};
              if (z(e))
                return Mu(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: r,
                    trackLinkClick: S,
                    rel: o?.join(` `),
                    preserveParams: s,
                    smoothScroll: i,
                  },
                  b,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: t, unresolvedHashSlugs: a } = e,
                c = v(t, a, g);
              if (pt(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: y,
                } = gu(p, m, e, g, c, h),
                x = Cu(r, !0),
                C = x === `_blank`,
                w = { pathVariables: f, locale: y },
                T = (e) => Au(p, l, () => b(l, w, !1, !C), d, f, i, e);
              return {
                href: u,
                target: x,
                onClick: ju(u, S, T),
                "data-framer-page-link-current": (m && bu(m, e, h)) || void 0,
                navigate: T,
                preload: () => b(l, w, !0, !C),
                _routeId: l,
                _pathVariables: f,
                _locale: y,
              };
            }, [n, p, g, h, r, m, i, S, o, _, s, v, b]),
            w = Rs(y(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: k, ...A } = C;
          zs(
            w,
            (e) => {
              if (!(e === null || !D || !E || x))
                return FC?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, k, x]
          );
          let j = !!T;
          return cu(
            Vc(f).cloneAsArray(e, (e) => Nu(e, { ...d, ...Fu(A, u, j) }, w)),
            l,
            c,
            n,
            C,
            w
          );
        })
      )),
      (LC = g.createContext(void 0)),
      (RC = `__framer_force_showing_editorbar_since`),
      (zC = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (BC = () => {
        try {
          return !!localStorage[RC];
        } catch {
          return !1;
        }
      }),
      (VC = () => !BC()),
      (HC = (() => {
        let e = a(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (UC = `main`),
      (WC = `framerGeneratedPage`),
      (GC = `<!-- Start of headStart -->`),
      (KC = `<!-- End of headStart -->`),
      (qC = `<!-- Start of headEnd -->`),
      (JC = `<!-- End of headEnd -->`),
      (YC = `<!-- Start of bodyStart -->`),
      (XC = `<!-- End of bodyStart -->`),
      (ZC = `<!-- Start of bodyEnd -->`),
      (QC = `<!-- End of bodyEnd -->`),
      ($C = g.createContext(void 0)),
      (ew = null),
      (tw = null),
      Lg(rd),
      (nw = (e, t, n, i, a, o) => {
        let s = w(LC),
          l = r(),
          u = Tn(),
          d = r(!0);
        return (
          c(() => {
            function r() {
              (!ew || !tw) && rd();
              let r = n ? new URL(n, __.location.href) : __.location,
                c = {
                  version: v_,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: r.href,
                  hostname: r.hostname,
                  pathname: r.pathname,
                  search: r.search || null,
                  hash: r.hash || null,
                  timezone: ew,
                  locale: tw,
                },
                l = d.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && u?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && z(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (pt(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (l.current = r()),
                t = e instanceof Promise ? await e : e;
              ((l.current = t),
                d.current ? (d.current = !1) : hn(`published_site_pageview`, t, `eager`));
            })();
            let c = async (e) => {
              if (e.persisted) {
                let e = (l.current = r()),
                  t = e instanceof Promise ? await e : e;
                ((l.current = t), hn(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              f.addEventListener(`pageshow`, c),
              () => {
                f.removeEventListener(`pageshow`, c);
              }
            );
          }, [e, t, n, i, a, s, u, o]),
          l
        );
      }),
      (rw = 0),
      (iw = 500),
      (aw = 200),
      (ow = { status: `loading`, data: void 0 }),
      (sw = 5e3),
      (cw = () => {}),
      (lw = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = Md(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Md(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = __.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Id(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Lc(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Id(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!Fn() || !tu(e.url, !1)) return;
          let t = Md(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Fd(n, e);
          return (e.resultOutputType === `image` && z(i) && (await kd(i).catch(cw)), i);
        }
        async fetchWithCache(e) {
          if (!Fn()) return;
          let t = Md(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Id(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, ow);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!tu(r, !1)) return cw;
          let a = Md(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (uw = a(void 0)),
      (dw = a(!0)),
      (fw = ({ children: e, client: t }) => {
        let [n] = d(() => t ?? new lw()),
          [r, i] = d(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              m(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          _(dw.Provider, { value: r, children: _(uw.Provider, { value: n, children: e }) })
        );
      }),
      (He.WillChange = Ze),
      (pw = hu(
        b(function ({ links: e, children: t, ...n }, r) {
          return Vc(r)(t(Rd((t) => e.map(t), [e])), n);
        })
      )),
      (mw = { priority: void 0, canYield: !0 }),
      (Z = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return nf(e, t);
            case `boolean`:
              return af(e);
            case `color`:
              return cf(e);
            case `date`:
              return uf(e);
            case `enum`:
              return ff(e);
            case `file`:
              return mf(e);
            case `link`:
              return gf(e);
            case `number`:
              return vf(e);
            case `object`:
              return xf(e, t);
            case `responsiveimage`:
              return Cf(e);
            case `richtext`:
              return Tf(e);
            case `string`:
              return kf(e);
            case `vectorsetitem`:
              return Df(e);
            case `unknown`:
              return e;
            default:
              U(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return it(e)
            ? { type: `boolean`, value: e }
            : ut(e)
              ? { type: `date`, value: e.toISOString() }
              : B(e)
                ? { type: `number`, value: e }
                : z(e)
                  ? { type: `string`, value: e }
                  : at(e)
                    ? { type: `array`, value: e.map(Z.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && jf(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && jf(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && jf(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && jf(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && jf(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => Z.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Z.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Af(e),
            i = Af(t);
          return ct(r) || ct(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Af(e),
            i = Af(t);
          return ct(r) || ct(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Af(e),
            i = Af(t);
          return ct(r) || ct(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(Z.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return z(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              U(e);
          }
        },
      }),
      (hw = { type: `unknown`, isNullable: !0 }),
      (gw = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Eo(e);
          H(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (H(n !== `array`, `Array properties are not supported`),
              H(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (lt(i)) continue;
            let a = this.schema[t];
            if (!st(a)) {
              if ((H(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await Mf(this.collection, this.locale))[t]?.[n];
          return e_.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Mf(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Ud(e);
            i && (await i);
            let a = t[r];
            H(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Mf(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Ud(t);
            e && (await e);
            let a = n[Number(i)];
            (H(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (_w = new Map()),
      (vw = new WeakMap()),
      (yw = `$r_`),
      (bw = new Map()),
      (xw = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Uf(e, t)), (this.priority = Rf(n)));
        }
        *resolveArrayValue(e) {
          return yield* qd(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* K(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          H(Bf(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          H(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return ft(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          H(Hf(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (H(n, `Can't find collection for vector set item pointer`),
            H(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return ft(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (Sw = `index`),
      (Cw = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), q(this.name, ...e));
        }
      }),
      (ww = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new Ew();
        fields = new Q();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (Tw = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
      }),
      (Ew = class extends Cw {
        name = `Indexes`;
      }),
      (Dw = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          H(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                H(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: zf(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                H(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Vf(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends Cw {
        name = `Fields`;
      }),
      (Ow = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return q(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (kw = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return q(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== Sw) return !1;
          return !0;
        }
      }),
      (Aw = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return q(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (jw = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (H(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (H(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new kw();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new Aw(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          H(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (H(e, `Field must exist`), e.field);
        }
      }),
      (Mw = 1e3),
      ($ = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = qf(),
            i = Jf(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (Nw = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (Pw = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (Fw = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (Iw = class extends Fw {
        group;
        getGroup() {
          return (H(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (H(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Wd(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Gd(this.evaluate(void 0), void 0, e);
        }
      }),
      (Lw = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return q(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (Rw = class e extends Iw {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return q(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new Aw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new Lw(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* qd(
              n.tuples.map((t) =>
                qd(
                  this.projections.map((n) => K({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new Nw();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            H(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (zw = { type: 0 }),
      (Bw = class extends Fw {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return Wd(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Gd(this.evaluate(void 0, void 0));
        }
      }),
      (Vw = { type: 0 }),
      (Hw = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return q(`CaseCondition`, this.when, this.then);
        }
      }),
      (Uw = class e extends Bw {
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return q(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new Hw(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* K({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: qd(
              this.conditions.map((n) =>
                K({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Z.equal(n, e, Vw)) return t;
          } else for (let { when: e, then: t } of r) if (of(e)) return t;
          return i;
        }
      }),
      (Ww = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new jw();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new kw();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (st(t)) continue;
                a.add(t.field);
                let r = new Ow(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new Dw(Kf(this.fieldId++), void 0, t.definition, void 0),
                  a = new Lw(t, r);
                i.push(a);
                let s = new Ow(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (st(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              H(n.alias, `Subqueries should have an alias`);
              let r = Kf(this.fieldId++),
                a = n.alias,
                s = new Dw(r, a, t.definition, void 0),
                c = new Lw(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              U(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Ff(t.data, this.locale),
            i = t.alias,
            a = new ww(Wf(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new Dw(Kf(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new Dw(Kf(this.fieldId++), Sw, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: Sw, collectionName: i });
            let t = new kw(),
              r = new Ow(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new kw(),
              o = new Tw(Gf(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new kw(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              U(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              U(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(hw, null);
        }
        buildLiteralValue(e) {
          let t = Z.parse(e.value);
          return this.normalizer.newScalarConstant(hw, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (H(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              U(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new Gw(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new Gw(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new Hw(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              U(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              U(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (Gw = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
      }),
      (Kw = class e extends Iw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return q(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new Aw(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* qd(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => of(n[t] ?? null));
        }
      }),
      (qw = class e extends Iw {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return q(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * Mw : 50 * Mw);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Vd()),
            i = Vd(),
            a = [];
          for (let n of r) {
            let r = Ud(i);
            r && (yield r);
            let o = new Nw();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new Pw(n, a);
        }
      }),
      (Jw = class e extends Iw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new Aw(new kw(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* K({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (Yw = class e extends Iw {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return q(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return $.estimate(1, 200 * Mw);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(Vd()),
            r = Vd(),
            i = [];
          for (let a of n) {
            let n = Ud(r);
            n && (yield n);
            let o = new Nw();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new Pw(t, i);
        }
      }),
      (Xw = class e extends Iw {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new Aw(new kw(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* K({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (Zw = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: of(n) && of(r) };
        }
      }),
      (Qw = class extends Bw {
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return q(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      ($w = { type: 0 }),
      (eT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* K({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.contains(n, r, $w) };
        }
      }),
      (tT = { type: 0 }),
      (nT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* K({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.endsWith(n, r, tT) };
        }
      }),
      (rT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.equal(n, r, zw) };
        }
      }),
      (iT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThan(n, r, zw) };
        }
      }),
      (aT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThanOrEqual(n, r, zw) };
        }
      }),
      (oT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThan(n, r, zw) };
        }
      }),
      (sT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThanOrEqual(n, r, zw) };
        }
      }),
      (cT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.equal(n, r, zw) };
        }
      }),
      (lT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: of(n) || of(r) };
        }
      }),
      (uT = { type: 0 }),
      (dT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* K({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.startsWith(n, r, uT) };
        }
      }),
      (fT = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof Kw) {
            if (e.predicate instanceof Zw) {
              let n = new Jw(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof lT) {
              let n = new Xw(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof Yw)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new qw(n, Yf(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof Kw) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof Yw)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof rT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Qw &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Yf(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new qw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof cT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Qw &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Yf(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new qw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof oT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Qw &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Yf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new qw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof sT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Qw &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Yf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new qw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof iT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Qw &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Yf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new qw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof aT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Qw &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Yf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new qw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof eT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Qw &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Yf(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new qw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof dT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Qw &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Yf(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new qw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof nT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Qw &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Yf(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new qw(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (pT = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new mT();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          H(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (mT = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (hT = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (gT = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new pT(Xf(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new hT(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            H(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (_T = class e extends Iw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new Aw(new kw(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new Pw(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new Nw();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* K({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof rT) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new Pw(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new Nw();
              (n.merge(i),
                n.merge(a),
                of(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (vT = class e extends Iw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return q(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new Aw(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* K({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = yf(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (yT = class e extends Iw {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return q(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new Aw(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* K({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = yf(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (bT = class e extends Bw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return q(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) st(n.collection) || e.add(n);
          return new Aw(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new Nw();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (xT = class e extends Bw {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            H(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return q(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Z.cast(n, this.definition);
        }
      }),
      (ST = class e extends Bw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return q(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (st(this.field.collection) || e.add(this.field), new Aw(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new Nw();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (CT = { type: 0 }),
      (wT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.in(n, r, CT) };
        }
      }),
      (TT = { type: 1 }),
      (ET = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return q(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* K({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Z.indexOf(n, r, TT) };
        }
      }),
      (DT = class extends Error {}),
      (OT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return q(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Qf(n),
            a = Qf(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (kT = class e extends Bw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return q(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Z.length(n) };
        }
      }),
      (AT = class e extends Bw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !of(yield* this.input.evaluate(e, t)) };
        }
      }),
      (jT = { type: 0 }),
      (MT = class e extends Bw {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* K({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.in(n, r, jT) };
        }
      }),
      (NT = class extends Bw {
        constructor(e, t) {
          H(e.name !== Sw, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return q(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (H(e, `Context must exist`), e.getValue(this.field))
            : (H(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (PT = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new Yw(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new qw(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new _T(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof Qw && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof _T && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new Kw(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new Rw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof Rw &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new vT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new yT(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof Qw) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new NT(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new Qw(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof AT)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof rT) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof cT) return this.newScalarEquals(e.left, e.right);
          if (e instanceof oT) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof sT) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof iT) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof aT) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof Zw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof lT) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new AT(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof Qw && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof Qw && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof Qw && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof Qw && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new Zw(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof Qw && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof Qw && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof Qw && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof Qw && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new lT(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof NT;
          if (t instanceof NT && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new rT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof NT;
          if (t instanceof NT && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new cT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof NT;
          if (t instanceof NT && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new oT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof NT;
          if (t instanceof NT && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new sT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof NT;
          if (t instanceof NT && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new iT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof NT;
          if (t instanceof NT && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new aT(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new wT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new MT(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new Hw(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new Uw(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new eT(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new dT(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new nT(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new kT(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new ET(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new bT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new ST(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new OT(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new xT(e, t);
          return this.finishScalar(n);
        }
      }),
      (FT = class extends Iw {}),
      (IT = class e extends FT {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return q(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new Aw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * Mw).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          H(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            H(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) $f(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                H(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new Nw();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (H(s, `Item not found`), H(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (LT = { type: 0 }),
      (RT = class e extends FT {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return q(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== Sw && (st(e.collection) || t.add(e));
          return new Aw(new kw(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === Sw) {
                let r = n.collection;
                H(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                H(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                H(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Z.equal(a, o, LT)) {
                if (ct(a) || Z.lessThan(a, o, LT)) return i ? -1 : 1;
                if (ct(o) || Z.greaterThan(a, o, LT)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (zT = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new gT();
        normalizer = new PT(this.memo);
        explorer = new fT(this.normalizer);
        optimize(e) {
          let t = new Ww(this.normalizer, this.query, this.locale).build(),
            n = Ud(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (H(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new IT(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new RT(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (BT = zd(`query-engine`)),
      (VT = class {
        async evalQuery(e, t, n, r) {
          BT.enabled &&
            BT.debug(`Query:
${fp(e)}`);
          let i = new xw(e, t, r),
            a = new zT(e, t, i),
            o = Ud(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = pt(s) ? await s : s,
            u = Ud(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Ud(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(K(a, r)));
          }
          let h = Kd(qd(m, r), r);
          return n ? [pt(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new xw(t, n, r);
          return Kd(
            qd(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return K(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (HT = `style[data-framer-breakpoint-css]`),
      (UT = `page`),
      (WT = Symbol(`cycle`)),
      (qT = (() => {
        let e = a(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (JT = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (YT = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r; ) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (XT = YT(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`)),
      (ZT = YT(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`)),
      (QT = {
        ...XT,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = Zp(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n; ) ((t += Zp(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      ($T = { start: `flex-start`, end: `flex-end` }),
      (eE = b(sm)),
      (tE = { start: 0, end: 0 }),
      (nE = { display: `flex`, position: `relative` }),
      (rE = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (iE = { duration: 0.2, ease: `linear` }),
      (aE = b(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? P.div,
          m = Oo(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return _(eE, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (oE = b(function (e, t) {
        let {
            children: n,
            as: i,
            tickerEffectVelocity: a,
            tickerEffectAlign: o,
            axis: s,
            directionModifier: l,
            hoverModifier: u,
            gap: d,
            overflow: f,
            playState: p,
            ...m
          } = e,
          h = i ?? P.div,
          g = Xr() === `rtl` && s === `x` ? -1 : 1,
          v = (p === `paused` ? 0 : (a ?? 100)) * l * g,
          y = se(0),
          b = r(0),
          x = r(!1),
          S = r(!1),
          C = r(!1),
          w = (e) => {
            C.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          ce((e, t) => {
            let n = Math.abs(y.getVelocity()),
              r = S.current ? v * u : v;
            if (performance.now() > b.current && (!x.current || n < Math.abs(r))) {
              let e = (t / 1e3) * r,
                n = y.get() - e;
              ((x.current &&= (y.stop(), !1)), y.set(n));
            }
          }),
          c(() => {
            p === `paused` && y.stop();
          }, [p, y]),
          _(eE, {
            ref: t,
            as: h,
            ...m,
            gap: d,
            axis: s,
            align: o ?? `center`,
            itemSize: `manual`,
            overflow: f,
            _dragX: s === `x` ? y : void 0,
            _dragY: s === `y` ? y : void 0,
            offset: y,
            drag: s,
            dragMomentum: !0,
            onClickCapture: w,
            onDragStart: () => {
              C.current = !0;
            },
            onDragEnd: () => {
              ((b.current = performance.now()),
                (x.current = !0),
                setTimeout(() => {
                  C.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              S.current = !0;
            },
            onMouseLeave: () => {
              S.current = !1;
            },
          })
        );
      })),
      (sE = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (cE = ({ onPlayStateChange: e, children: n }) => {
        let r = t(
          () => ({ start: () => m(() => e(`running`)), stop: () => m(() => e(`paused`)) }),
          [e]
        );
        return _(sE.Provider, { value: r, children: n });
      }),
      (lE = b(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackDirection: i,
            tickerEffectXOverflow: a,
            tickerEffectYOverflow: o,
            tickerEffectOverflow: s,
            tickerEffectGap: c,
            tickerEffectDirectionModifier: l,
            tickerEffectHoverModifier: u,
            tickerEffectPosition: f,
            tickerEffectIsDataRepeater: p,
            style: m,
            ...h
          } = e,
          g = Oo(),
          [v, y] = d(`running`),
          b = i?.startsWith(`column`) ? `y` : `x`,
          x = l === `reverse` ? -1 : 1,
          S = W(u) ? u / 100 : 1,
          C = (b === `x` ? (a ?? s ?? `visible`) : (o ?? s ?? `visible`)) === `visible`,
          w = um(c, b),
          T = Gp(n),
          E = { ...m, "--ticker-cms-total-children": p ? T.length : void 0, position: f };
        return g || !r
          ? _(cE, {
              onPlayStateChange: y,
              children: _(aE, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: v,
              }),
            })
          : _(cE, {
              onPlayStateChange: y,
              children: _(oE, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: v,
              }),
            });
      })),
      (uE = (e) => (t) => (t.tickerEffectEnabled ? _(lE, { ...t, as: e }) : _(e, { ...t }))),
      (dE = g.createContext(void 0)),
      (fE = () => g.useContext(dE)),
      (pE = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (mE = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (hE = pE),
      (gE = `System Default`),
      (_E = class {
        name = `local`;
        fontFamilies = [];
        byFamilyName = new Map();
        fontAliasBySelector = new Map();
        fontAliases = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(hE)) {
            let n = hE[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(mE)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: gE, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = pm(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (vE = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (yE = class extends Map {
        _hash = 0;
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (xE = `Variable`),
      (SE = `BI;`),
      (CE = class {
        name = `builtIn`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetByKey = new Map();
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = vm(n),
              u = Sm(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: xm(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? Em(u, e.font.faceDescriptors?.weight) : Tm(c),
                style: Om(c),
                cssFamilyName: ym(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = Tm(e.variant),
                r = Tm(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = Dm(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : wE[t],
            style: Om(e),
          };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          H(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return xm(t)
            ? t?.map((e) => {
                if (Cm(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${SE}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(SE)) return null;
          let [t, n] = e.split(SE);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (wE = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (TE = zd(`custom-font-source`)),
      (EE = `CUSTOM;`),
      (DE = `CUSTOMV2;`),
      (OE = class e {
        name = `custom`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetsByKey = new Map();
        debugByFamily = new Map();
        debugFamilies;
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = Rm(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = vm(i),
              f = Vm(i),
              p = Lm(i.properties),
              m = e.createLegacySelector(p),
              h = this.createFontFamily(t),
              g = e.createSelector(h.name, a),
              _ = {
                assetKey: i.key,
                family: h,
                selector: g,
                variant: a,
                weight: o,
                style: s,
                file: d,
                hasOpenTypeFeatures: xm(u),
                variationAxes: Sm(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = Im(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              TE.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              Hm(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && Bm(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = Um(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${DE}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${EE}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            H(Nm(e), `Selector must be a custom font selector`),
            Fm(e) ? e.slice(EE.length) : e.slice(DE.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          H(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return xm(t)
            ? t?.map((e) => {
                if (Cm(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (kE = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (AE = `FS;`),
      (jE = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (ME = Object.keys(jE)),
      (NE = RegExp(`^(?:${[...ME, `italic`, `variable`].join(`|`)})`, `u`)),
      (PE = class e {
        name = `fontshare`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = ME.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && jE[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(AE)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(AE, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${AE}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${AE}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await Wm(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!NE.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = km(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: Jm(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: ym(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await Gm(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (FE = `Inter`),
      (IE = `FR;`),
      (LE = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (RE = class e {
        name = `framer`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(IE) && !e.startsWith(FE)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && LE[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${IE}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await Gm(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (zE = `GF;`),
      (BE = class e {
        name = `google`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(zE)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(zE, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${zE}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${zE}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let i = await Wm(`google`),
            a = [],
            o = Xm(t, (e) => e.family),
            s = Xm(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(fm),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (fm(e) ? km(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: Ym(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: ym(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await Gm(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (VE = Ye(Mg(), 1)),
      (HE = 5e3),
      (UE = 3),
      (WE = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (GE = new Map()),
      (KE = new Map()),
      (qE = new Map()),
      (JE = (e, t) => $m(e, t)),
      (YE = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (XE = class {
        enabled = !1;
        bySelector = new yE();
        loadedSelectors = new Set();
        getGoogleFontsListPromise;
        getFontshareFontsListPromise;
        getBuiltInFontsListPromise;
        customFontsImportPromise = new Promise((e) => {
          this.resolveCustomFontsImportPromise = e;
        });
        constructor() {
          ((this.local = new _E()),
            (this.google = new BE()),
            (this.fontshare = new PE()),
            (this.framer = new RE()),
            (this.custom = new OE()),
            (this.builtIn = new CE()),
            this.importLocalFonts());
        }
        local;
        google;
        fontshare;
        builtIn;
        framer;
        custom;
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        bySelectorValuesCache;
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await Vb.fetchGoogleFontsList(),
                n = await nh(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = Vb.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await nh(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = Vb.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = nh(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!Nm(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            Nm(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                th({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
          }
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getCustomFontDebugFamilies() {
          return this.custom.getDebugFamilies();
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = BE.parseVariant(n.variant);
            if (fm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: bm(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = PE.parseVariant(r.variant);
            if (fm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: bm(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = CE.parseVariant(i.variant);
            if (fm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: bm(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return RE.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = Mm(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Rn() || (await eh(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await JE({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await JE({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (th({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              U(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(AE)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                Fi(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(zE)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  Fi(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(SE)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  Fi(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(Nm) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  Fi(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !ZE.loadedSelectors.has(e));
          n.length !== 0 &&
            (await ZE.loadWebFontsFromSelectors(n),
            n.every((e) => ZE.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (H(e, `Can’t find Inter font`), e);
        }
        testing = { addFont: this.addFont.bind(this) };
      }),
      (ZE = new XE()),
      (QE = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      ($E = { opacity: 0 }),
      (eD = { opacity: 1 }),
      (tD = gh(
        g.forwardRef(function (e, n) {
          let {
              background: r,
              children: i,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            u = { ...c },
            f = t(() => Jo(r), [r]),
            [p, h] = d();
          g.useEffect(() => {
            if (!r?.src || !s || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                m(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = r.src));
          }, [r?.src, s, f]);
          let v = f ?? p;
          return (
            s && v && ((u[s] = `auto`), (u.aspectRatio = v.width / v.height)),
            r && delete u.background,
            T(Yo(e.as), {
              ...l,
              style: u,
              ref: n,
              draggable: o,
              children: [r && _(Uo, { image: r, alt: a, draggable: o }), i],
            })
          );
        })
      )),
      (rD = !Pn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (iD =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (aD = `{{ text-placeholder }}`),
      (oD = `rich-text-wrapper`),
      (sD = vo(
        b(function (e, n) {
          let {
              id: i,
              name: a,
              html: o,
              htmlFromDesign: s,
              text: l,
              textFromDesign: u,
              fonts: d = [],
              width: f,
              height: p,
              left: m,
              right: h,
              top: g,
              bottom: v,
              center: y,
              className: b,
              stylesPresetsClassName: x,
              visible: S = !0,
              opacity: C,
              rotation: T = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: O = Y.current,
              withExternalLayout: k = !1,
              positionSticky: A,
              positionStickyTop: j,
              positionStickyRight: M,
              positionStickyBottom: ee,
              positionStickyLeft: te,
              __htmlStructure: N,
              __fromCanvasComponent: ne = !1,
              _forwardedOverrideId: re,
              _forwardedOverrides: ie,
              _usesDOMRect: ae,
              children: oe,
              ...se
            } = e,
            ce = Qa(),
            le = ts(e),
            ue = r(null),
            de = n ?? ue,
            { navigate: fe, getRoute: pe } = Lt(),
            F = zt();
          (Jn(e.preload ?? []), ss(e, de));
          let me = w(Xb),
            he = $l(),
            I = l,
            ge = re ?? i;
          if (ge && ie) {
            let e = ie[ge];
            typeof e == `string` && (I = e);
          }
          let _e = ``;
          if (I) {
            let e = vh(I);
            _e = N ? N.replace(aD, e) : `<p>${e}</p>`;
          } else if (o) _e = o;
          else if (u) {
            let e = vh(u);
            _e = N ? N.replace(aD, e) : `<p>${e}</p>`;
          } else s && (_e = s);
          let ve = yu(),
            ye = t(() => (he || !pe || !F ? _e : yh(_e, pe, F, ve)), [_e, pe, F, ve]);
          if (
            (c(() => {
              let e = de.current;
              if (e === null) return;
              function t(e) {
                let t = pu(e.target, de.current);
                Vn(e) ||
                  !fe ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (au(fe, t, ve) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [fe, ve]),
            Sh(d, ne, de),
            !S)
          )
            return null;
          let be = D && O() === Y.canvas,
            L = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: xh(E),
              opacity: be ? 0 : C,
              flexShrink: 0,
            },
            xe = Y.hasRestrictions(),
            R = Ya(e, ce || 0, !1),
            Se = ae && (f === `auto` || p === `auto`),
            Ce =
              e.transformTemplate || !R || !xe || ne || Se
                ? (e.transformTemplate ?? es(y))
                : void 0;
          if (!k) {
            if (R && xe && !Se) {
              let e = fy.getNumber(T).toFixed(4);
              ((L.transform = `translate(${R.x}px, ${R.y}px) rotate(${e}deg)`),
                (L.width = R.width),
                (L.minWidth = R.width),
                (L.height = R.height));
            } else
              ((L.left = m),
                (L.right = h),
                (L.top = g),
                (L.bottom = v),
                (L.width = f),
                (L.height = p),
                (L.rotate = T));
            A
              ? (!he || me) &&
                ((L.position = `sticky`),
                (L.willChange = `transform`),
                (L.top = j),
                (L.right = M),
                (L.bottom = ee),
                (L.left = te))
              : he && (e.positionFixed || e.positionAbsolute) && (L.position = `absolute`);
          }
          return (
            Ic(e, L),
            Nc(e, L),
            Object.assign(L, e.style),
            _(P.div, {
              id: i,
              ref: de,
              ...se,
              style: L,
              layoutId: le,
              "data-framer-name": a,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": y,
              className: Rc(b, x, oD),
              transformTemplate: Ce,
              dangerouslySetInnerHTML: { __html: ye },
            })
          );
        })
      )),
      (cD = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (lD = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (uD = b(function (e, t) {
        return _(`svg`, { ...e, ref: t, children: e.children });
      })),
      (dD = P.create(uD)),
      (fD = b(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return _(dD, {
          ...r,
          ref: i,
          viewBox: t,
          children: _(P.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (pD = []),
      (mD = `RichTextContainer`),
      (hD = b(function (e, n) {
        let {
            __fromCanvasComponent: i = !1,
            _forwardedOverrideId: a,
            _forwardedOverrides: o,
            _usesDOMRect: s,
            anchorLinkOffsetY: c,
            as: l,
            bottom: u,
            center: d,
            children: f,
            environment: p = Y.current,
            fonts: m = pD,
            height: h,
            isEditable: g = !1,
            left: v,
            name: y,
            opacity: b,
            positionSticky: x,
            positionStickyBottom: S,
            positionStickyLeft: C,
            positionStickyRight: T,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: ee,
            verticalAlignment: te = `top`,
            visible: N = !0,
            width: ne,
            withExternalLayout: P = !1,
            viewBox: re,
            viewBoxScale: ie = 1,
            effect: ae,
            ...oe
          } = e,
          se = Qa(),
          ce = p(),
          le = ce === Y.canvas,
          ue = le || ce === Y.export,
          de = w(Xb),
          fe = ts(e),
          pe = r(null),
          F = n ?? pe;
        (ss(e, F), Sh(m, i, F));
        let me = jh(ae, F),
          he = t(() => {
            if (f) return zh(f, j, M, c, void 0, me.getTokenizer());
          }, [f, j, M, c, me]);
        if (!N) return null;
        let I = { opacity: g && le ? 0 : b },
          ge = xh(te);
        ge !== mb.justifyContent && (I.justifyContent = ge);
        let _e = {},
          ve = Y.hasRestrictions(),
          ye = Ya(e, se || 0, !1),
          be = s && (ne === `auto` || h === `auto`),
          L =
            e.transformTemplate || !ye || !ve || i || be ? (e.transformTemplate ?? es(d)) : void 0;
        (P ||
          (ye && ve && !be
            ? ((_e.x = ye.x + (B(k?.x) ? k.x : 0)),
              (_e.y = ye.y + (B(k?.y) ? k.y : 0)),
              (_e.left = 0),
              (_e.top = 0),
              (I.rotate = fy.getNumber(O)),
              (I.width = ye.width),
              (I.minWidth = ye.width),
              (I.height = ye.height))
            : ((I.left = v),
              (I.right = D),
              (I.top = ee),
              (I.bottom = u),
              (I.width = ne),
              (I.height = h),
              (I.rotate = O)),
          x
            ? (!ue || de) &&
              ((I.position = `sticky`),
              (I.willChange = `transform`),
              (I.top = E),
              (I.right = T),
              (I.bottom = S),
              (I.left = C))
            : le && (e.positionFixed || e.positionAbsolute) && (I.position = `absolute`)),
          Ic(e, I),
          Nc(e, I),
          Object.assign(I, A, k, _e),
          fe && (oe.layout = `preserve-aspect`));
        let xe = Yo(e.as),
          R = oe[`data-framer-name`] ?? y,
          Se = le ? Ih(Pb(oe)) : oe;
        return z(e.viewBox)
          ? e.as === void 0
            ? _(fD, {
                ...Se,
                ref: F,
                style: I,
                layoutId: fe,
                viewBox: re,
                viewBoxScale: ie,
                transformTemplate: L,
                "data-framer-name": R,
                "data-framer-component-type": mD,
                children: he,
              })
            : _(xe, {
                ...Se,
                ref: F,
                style: I,
                layoutId: fe,
                transformTemplate: L,
                "data-framer-name": R,
                "data-framer-component-type": mD,
                children: _(fD, {
                  viewBox: re,
                  viewBoxScale: ie,
                  style: { width: `100%`, height: `100%` },
                  children: he,
                }),
              })
          : _(xe, {
              ...Se,
              ref: F,
              style: I,
              layoutId: fe,
              transformTemplate: L,
              "data-framer-name": R,
              "data-framer-component-type": mD,
              children: he,
            });
      })),
      (gD = vo(
        b(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (z(a)) {
            !r.stylesPresetsClassName &&
              V(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [z(t) ? `html` : `htmlFromDesign`]: a };
            return _(sD, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && z(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return _(hD, { ...r, ref: i, children: y(a) ? a : void 0 });
        })
      )),
      (_D = `framer/asset-reference,`),
      (vD = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = Qh(t);
        return _(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: _(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (yD = Fn()),
      (bD = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (xD = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (SD = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(ix(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = eg(e);
            (s &&
              (t && tg(s, n),
              (s.id = n),
              (o = og(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          yD && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = xD),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          yD && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new bD(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !yD) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        yD && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${xD}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (CD = new SD()),
      (wD = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (TD = b(function (e, t) {
        let n = Qa(),
          r = ts(e),
          i = g.useRef(null),
          a = t ?? i,
          o = fE();
        return (
          ss(e, i),
          _(DD, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (ED = 5e4),
      (DD = class e extends rx {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...rx.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return Ya(e, e.parentSize || 0);
        }
        container = g.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return Ya(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (CD.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || ug(this.container, this.props);
        }
        componentWillUnmount() {
          (CD.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (Jb.isImageObject(t) &&
            Jb.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            fs(this.svgElement, `fill`, null, !1),
            ug(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = fy.getNumber(r);
          if (
            ((e.opacity = W(this.props.opacity) ? this.props.opacity : 1), Y.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              Ka(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = Fy;
            if (l === Y.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: g,
            width: v,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            E = {};
          (this.collectLayout(w, E),
            jc(this.props, w),
            Ic(this.props, w),
            rx.applyWillChange(this.props, w, !1));
          let D = null;
          if (typeof r == `string` || J.isColorObject(r)) {
            let e = J.isColorObject(r) ? r.initialValue || J.toRgbString(r) : r;
            ((w.fill = e), (w.color = e));
          } else if (dx.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${dx.hash(t)}`;
            w.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = Wh(t, x);
            D = _(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: _(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (px.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${px.hash(t)}`;
            w.fill = `url(#${n})`;
            let i = Gh(t, x);
            D = _(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: _(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (Jb.isImageObject(r)) {
            let e = Xh(r, C, x);
            e &&
              ((w.fill = `url(#${e.id})`),
              (D = _(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: _(`defs`, { children: _(vD, { ...e }) }),
              })));
          }
          let k = { "data-framer-component-type": `SVG` },
            A = !S;
          A && Object.assign(k, Zo(this.props.center));
          let j =
              !y &&
              !D &&
              !w.fill &&
              !w.background &&
              !w.backgroundImage &&
              i.length < ED &&
              !sg(i) &&
              !cg(i),
            M = null;
          if (j)
            ((w.backgroundSize = `100% 100%`),
              (w.backgroundImage = mt(i)),
              CD.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = CD.subscribe(i, !m, e, y);
            (CD.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              lg(w) && (w.overflow = `hidden`),
              (M = T(O, {
                children: [
                  D,
                  _(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: E,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    Jb.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let ee = Yo(this.props.as),
            { href: te, target: N, rel: ne, onClick: P, onTap: re } = this.props,
            ie = s || c;
          return _(ee, {
            ...k,
            ...b,
            layoutId: l,
            transformTemplate: A ? es(this.props.center) : void 0,
            id: e,
            ref: p,
            style: w,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: ie ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": ie ? void 0 : `true`,
            onTap: re,
            onClick: P,
            href: te,
            target: N,
            rel: ne,
            children: M,
          });
        }
      }),
      (OD = vo(TD)),
      (kD = 1e3),
      (AD = `explicitInter`),
      (Je.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = $e(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  Xl as $,
  gS as A,
  jD as B,
  Mb as C,
  Eg as D,
  ZE as E,
  pg as F,
  Ni as G,
  Gg as H,
  pp as I,
  CD as J,
  Tp as K,
  C_ as L,
  rb as M,
  hg as N,
  _S as O,
  gg as P,
  zt as Q,
  Ci as R,
  To as S,
  Rc as T,
  mi as U,
  St as V,
  mC as W,
  _p as X,
  ui as Y,
  wl as Z,
  gD as _,
  aS as a,
  Lt as at,
  dg as b,
  CC as c,
  ib as ct,
  ir as d,
  Xc as dt,
  xp as et,
  Ld as f,
  wg as ft,
  pw as g,
  Y as h,
  ja as i,
  Gt as it,
  hS as j,
  mS as k,
  e_ as l,
  Up as lt,
  VT as m,
  q_ as mt,
  nC as n,
  Yr as nt,
  wC as o,
  $h as ot,
  uS as p,
  uE as pt,
  Z_ as q,
  Zy as r,
  Pi as rt,
  tD as s,
  Hp as st,
  WS as t,
  $l as tt,
  IC as u,
  HS as ut,
  OD as v,
  ob as w,
  mg as x,
  rC as y,
  yt as z,
};
//# sourceMappingURL=framer.DGYw1Xvc.mjs.map
