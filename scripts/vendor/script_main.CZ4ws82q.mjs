import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  L as a,
  M as o,
  N as s,
  P as c,
  R as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  h as m,
  i as h,
  j as g,
  k as _,
  l as v,
  m as y,
  n as b,
  o as x,
  p as ee,
  r as S,
  t as C,
  u as w,
  v as T,
  x as E,
} from "./react.D20wc1Tc.mjs";
import { C as D, a as O, r as k, t as A } from "./motion.BKNsybgV.mjs";
import {
  $ as te,
  B as j,
  D as M,
  E as ne,
  F as re,
  G as ie,
  K as ae,
  N,
  P as oe,
  Q as se,
  R as ce,
  S as P,
  T as F,
  U as le,
  V as ue,
  X as de,
  Y as fe,
  Z as I,
  _ as L,
  a as pe,
  at as me,
  c as he,
  ct as R,
  d as ge,
  et as _e,
  f as ve,
  ft as ye,
  g as be,
  h as xe,
  i as Se,
  l as Ce,
  mt as we,
  n as Te,
  nt as z,
  o as Ee,
  ot as De,
  p as Oe,
  q as ke,
  r as B,
  s as Ae,
  st as je,
  t as V,
  tt as Me,
  u as Ne,
  ut as Pe,
  x as H,
  y as U,
  z as Fe,
} from "./framer.DGYw1Xvc.mjs";
import {
  C as Ie,
  E as Le,
  S as Re,
  T as ze,
  _ as Be,
  b as Ve,
  g as He,
  h as Ue,
  m as We,
  p as Ge,
  v as Ke,
  w as qe,
  x as Je,
  y as Ye,
} from "./shared-lib.Bgsjf9r1.mjs";
var Xe,
  Ze,
  Qe,
  $e = e(() => {
    (j(),
      ne.loadFonts([`FS;Manrope-medium`, `FS;Manrope-bold`]),
      (Xe = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/NGBUP45ES3F7RD5XGKPEDJ6QEPO4TMOK/EXDVWJ2EDDVVV65UENMX33EDDYBX6OF7/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Ze = [
        `.framer-NU0Pm .framer-styles-preset-19ddgm0:not(.rich-text-wrapper), .framer-NU0Pm .framer-styles-preset-19ddgm0.rich-text-wrapper h6 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Qe = `framer-NU0Pm`));
  }),
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  W,
  st = e(() => {
    (x(),
      j(),
      A(),
      n(),
      $e(),
      (et = `framer-T4dGh`),
      (tt = { ZgWFrrOYu: `framer-v-19tv2bj` }),
      (nt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (rt = ({ value: e, children: n }) => {
        let r = _(O),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (it = D.create(s)),
      (at = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        IQ5R16Yu3: e ?? i.IQ5R16Yu3,
      })),
      (ot = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = R(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = T(),
            { activeLocale: o, setLocale: c } = z(),
            l = I(),
            { style: u, className: d, layoutId: p, variant: m, IQ5R16Yu3: h, ...g } = at(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: ee,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: E,
            } = je({ defaultVariant: `ZgWFrrOYu`, ref: i, variant: m, variantClassNames: tt }),
            O = ot(e, E),
            { activeVariantCallback: A, delay: te } = de(_),
            j = A(async (...e) => {
              if ((C({ isPressed: !1 }), h && (await h(...e)) === !1)) return !1;
            }),
            M = F(et, Qe);
          return f(k, {
            id: p ?? a,
            children: f(it, {
              animate: E,
              initial: !1,
              children: f(rt, {
                value: nt,
                children: f(Ne, {
                  href: { webPageId: `augiA20Il` },
                  motionChild: !0,
                  nodeId: `ZgWFrrOYu`,
                  openInNewTab: !1,
                  scopeId: `JEsuJ6qTh`,
                  children: v(D.a, {
                    ...g,
                    ...x,
                    className: `${F(M, `framer-19tv2bj`, d, y)} framer-110mfak`,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: O,
                    layoutId: `ZgWFrrOYu`,
                    onTap: j,
                    ref: i,
                    style: { ...u },
                    children: [
                      f(Ae, {
                        background: {
                          alt: `Photo of me smiling`,
                          fit: `fill`,
                          intrinsicHeight: 219,
                          intrinsicWidth: 272,
                          loading: re((l?.y || 0) + (0 + ((l?.height || 40) - 0 - 48) / 2)),
                          pixelHeight: 219,
                          pixelWidth: 272,
                          sizes: `40px`,
                          src: `../../assets/images/QlIlgqXDJZeIwoFQq3LcZ51Og5c.jpeg`,
                        },
                        className: `framer-11couwk`,
                        "data-framer-name": `Frame 1mn`,
                        layoutDependency: O,
                        layoutId: `AxMBqfQeX`,
                        style: {
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                      }),
                      f(L, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(D.h6, {
                            className: `framer-styles-preset-19ddgm0`,
                            "data-styles-preset": `NcyXzMhuN`,
                            dir: `auto`,
                            children: `Siddharoodha`,
                          }),
                        }),
                        className: `framer-16zix08`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `qcOjT8gin`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-T4dGh.framer-110mfak, .framer-T4dGh .framer-110mfak { display: block; }`,
          `.framer-T4dGh.framer-19tv2bj { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-T4dGh .framer-11couwk { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 40px; }`,
          `.framer-T4dGh .framer-16zix08 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Ze,
        ],
        `framer-T4dGh`
      )),
      (W.displayName = `Image Name Tag`),
      (W.defaultProps = { height: 40, width: 164 }),
      P(W, { IQ5R16Yu3: { title: `Click`, type: B.EventHandler } }),
      H(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...oe(Xe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ct(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  G,
  vt = e(() => {
    (x(),
      j(),
      A(),
      n(),
      (lt = [`zcYEPDHYh`, `IYHLFHwXl`]),
      (ut = `framer-c5GEz`),
      (dt = { IYHLFHwXl: `framer-v-1hmfz6d`, zcYEPDHYh: `framer-v-1437wmc` }),
      (ft = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (pt = ({ value: e, children: n }) => {
        let r = _(O),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (mt = { closed: `zcYEPDHYh`, opened: `IYHLFHwXl` }),
      (ht = D.create(s)),
      (gt = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        D1QuA586u: e ?? i.D1QuA586u,
        variant: mt[i.variant] ?? i.variant ?? `zcYEPDHYh`,
      })),
      (_t = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = R(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = T(),
            { activeLocale: o, setLocale: s } = z();
          I();
          let { style: c, className: l, layoutId: u, variant: d, D1QuA586u: p, ...m } = gt(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ee,
              setVariant: S,
              variants: C,
            } = je({
              cycleOrder: lt,
              defaultVariant: `zcYEPDHYh`,
              ref: i,
              variant: d,
              variantClassNames: dt,
            }),
            w = _t(e, C),
            { activeVariantCallback: E, delay: O } = de(h),
            A = E(async (...e) => {
              if ((ee({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
            }),
            te = F(ut);
          return f(k, {
            id: u ?? a,
            children: f(ht, {
              animate: C,
              initial: !1,
              children: f(pt, {
                value: ft,
                children: v(D.div, {
                  ...m,
                  ...y,
                  className: F(te, `framer-1437wmc`, l, g),
                  "data-framer-name": `closed`,
                  "data-highlight": !0,
                  layoutDependency: w,
                  layoutId: `zcYEPDHYh`,
                  onTap: A,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-b4d223ed-03f5-4a9b-89ad-72802d44a023, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    ...c,
                  },
                  ...ct({ IYHLFHwXl: { "data-framer-name": `opened` } }, h, b),
                  children: [
                    f(D.div, {
                      className: `framer-t6g633`,
                      "data-framer-name": `bar`,
                      layoutDependency: w,
                      layoutId: `ccc37bcru`,
                      style: {
                        backgroundColor: `var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20))`,
                        rotate: 0,
                      },
                      variants: { IYHLFHwXl: { rotate: 45 } },
                    }),
                    f(D.div, {
                      className: `framer-s34wld`,
                      "data-framer-name": `bar`,
                      layoutDependency: w,
                      layoutId: `Ip1bXgdnV`,
                      style: {
                        backgroundColor: `var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20))`,
                      },
                    }),
                    f(D.div, {
                      className: `framer-1parc0x`,
                      "data-framer-name": `bar`,
                      layoutDependency: w,
                      layoutId: `PDsvcfg81`,
                      style: {
                        backgroundColor: `var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20))`,
                        rotate: 0,
                      },
                      variants: { IYHLFHwXl: { rotate: -45 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-c5GEz.framer-1p0i06i, .framer-c5GEz .framer-1p0i06i { display: block; }`,
          `.framer-c5GEz.framer-1437wmc { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 36px; justify-content: center; padding: 0px; position: relative; width: 36px; }`,
          `.framer-c5GEz .framer-t6g633, .framer-c5GEz .framer-s34wld, .framer-c5GEz .framer-1parc0x { flex: none; height: 2px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 24px; }`,
          `.framer-c5GEz.framer-v-1hmfz6d.framer-1437wmc { overflow: var(--overflow-clip-fallback, clip); will-change: var(--framer-will-change-override, transform); }`,
          `.framer-c5GEz.framer-v-1hmfz6d .framer-t6g633, .framer-c5GEz.framer-v-1hmfz6d .framer-1parc0x { left: calc(50.00000000000002% - 24px / 2); position: absolute; top: calc(50.00000000000002% - 2px / 2); z-index: 1; }`,
          `.framer-c5GEz.framer-v-1hmfz6d .framer-s34wld { left: 60px; position: absolute; top: calc(50.00000000000002% - 2px / 2); z-index: 1; }`,
        ],
        `framer-c5GEz`
      )),
      (G.displayName = `nav toggle button`),
      (G.defaultProps = { height: 36, width: 36 }),
      P(G, {
        variant: {
          options: [`zcYEPDHYh`, `IYHLFHwXl`],
          optionTitles: [`closed`, `opened`],
          title: `Variant`,
          type: B.Enum,
        },
        D1QuA586u: { title: `Click`, type: B.EventHandler },
      }),
      H(G, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function yt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  K,
  kt = e(() => {
    (x(),
      j(),
      A(),
      n(),
      qe(),
      (bt = { AcYy0MbV1: { hover: !0 } }),
      (xt = `framer-EyqB0`),
      (St = { AcYy0MbV1: `framer-v-1rv4zj1` }),
      (Ct = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (wt = (e, t) => `translateX(-50%) ${t}`),
      (Tt = ({ value: e, children: n }) => {
        let r = _(O),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (Et = D.create(s)),
      (Dt = ({ click: e, height: t, id: n, link: r, newTab: i, title: a, width: o, ...s }) => ({
        ...s,
        ckQZUcYav: e ?? s.ckQZUcYav,
        LX9DED6sv: i ?? s.LX9DED6sv,
        qEqCl6A_m: r ?? s.qEqCl6A_m,
        vlcErjRzJ: a ?? s.vlcErjRzJ ?? `Home`,
      })),
      (Ot = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = R(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = T(),
            { activeLocale: o, setLocale: c } = z();
          I();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              vlcErjRzJ: m,
              qEqCl6A_m: h,
              LX9DED6sv: g,
              ckQZUcYav: _,
              ...y
            } = Dt(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: ee,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: E,
              setVariant: O,
              variants: A,
            } = je({
              defaultVariant: `AcYy0MbV1`,
              enabledGestures: bt,
              ref: i,
              variant: p,
              variantClassNames: St,
            }),
            te = Ot(e, A),
            { activeVariantCallback: j, delay: M } = de(b),
            ne = j(async (...e) => {
              if ((E({ isPressed: !1 }), _ && (await _(...e)) === !1)) return !1;
            }),
            re = F(xt, Je);
          return f(k, {
            id: d ?? a,
            children: f(Et, {
              animate: A,
              initial: !1,
              children: f(Tt, {
                value: Ct,
                children: f(Ne, {
                  href: h,
                  motionChild: !0,
                  nodeId: `AcYy0MbV1`,
                  openInNewTab: g,
                  scopeId: `Ye1GFtYV3`,
                  smoothScroll: !0,
                  children: v(D.a, {
                    ...y,
                    ...S,
                    className: `${F(re, `framer-1rv4zj1`, u, x)} framer-9eqoz2`,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: te,
                    layoutId: `AcYy0MbV1`,
                    onTap: ne,
                    ref: i,
                    style: { ...l },
                    ...yt({ "AcYy0MbV1-hover": { "data-framer-name": void 0 } }, b, C),
                    children: [
                      f(L, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(D.p, {
                            className: `framer-styles-preset-use1bb`,
                            "data-styles-preset": `upAT04Zng`,
                            dir: `auto`,
                            children: `Home`,
                          }),
                        }),
                        className: `framer-152zsdp`,
                        fonts: [`Inter`],
                        layoutDependency: te,
                        layoutId: `mUBGNuk3I`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...yt({ "AcYy0MbV1-hover": { transformTemplate: wt } }, b, C),
                      }),
                      f(L, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(D.p, {
                            className: `framer-styles-preset-use1bb`,
                            "data-styles-preset": `upAT04Zng`,
                            dir: `auto`,
                            children: `Home`,
                          }),
                        }),
                        className: `framer-1wgg7f9`,
                        fonts: [`Inter`],
                        layoutDependency: te,
                        layoutId: `fVIBH8TEN`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
                        transformTemplate: wt,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...yt({ "AcYy0MbV1-hover": { transformTemplate: void 0 } }, b, C),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-EyqB0.framer-9eqoz2, .framer-EyqB0 .framer-9eqoz2 { display: block; }`,
          `.framer-EyqB0.framer-1rv4zj1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-EyqB0 .framer-152zsdp { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-EyqB0 .framer-1wgg7f9 { flex: none; height: auto; left: 49%; position: absolute; top: 40px; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-EyqB0.framer-v-1rv4zj1.hover .framer-152zsdp { bottom: 40px; left: 49%; position: absolute; z-index: 1; }`,
          `.framer-EyqB0.framer-v-1rv4zj1.hover .framer-1wgg7f9 { left: unset; position: relative; top: unset; }`,
          ...Re,
        ],
        `framer-EyqB0`
      )),
      (K.displayName = `link`),
      (K.defaultProps = { height: 26, width: 43 }),
      P(K, {
        vlcErjRzJ: { defaultValue: `Home`, displayTextArea: !1, title: `Title`, type: B.String },
        onvlcErjRzJChange: { changes: `vlcErjRzJ`, type: B.ChangeHandler },
        qEqCl6A_m: { title: `Link`, type: B.Link },
        LX9DED6sv: { defaultValue: !1, title: `New Tab`, type: B.Boolean },
        onLX9DED6svChange: { changes: `LX9DED6sv`, type: B.ChangeHandler },
        ckQZUcYav: { title: `Click`, type: B.EventHandler },
      }),
      H(
        K,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...oe(Ie),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  J,
  Wt = e(() => {
    (x(),
      j(),
      A(),
      n(),
      st(),
      vt(),
      Le(),
      kt(),
      (At = N(W)),
      (jt = N(G)),
      (Mt = N(K)),
      (Nt = N(ze)),
      (Pt = [`SPmUnEjng`, `CeBbQqx3D`, `iUi08EfPA`, `lmH4ln2tp`, `aRW1DqHE2`]),
      (Ft = `framer-a9l7x`),
      (It = {
        aRW1DqHE2: `framer-v-1joa38z`,
        CeBbQqx3D: `framer-v-l0x65p`,
        iUi08EfPA: `framer-v-guabs0`,
        lmH4ln2tp: `framer-v-1x490rc`,
        SPmUnEjng: `framer-v-1ey35sr`,
      }),
      (Lt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (zt = ({ value: e, children: n }) => {
        let r = _(O),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (Bt = {
        "Mobile Closed": `lmH4ln2tp`,
        "Mobile Opened": `aRW1DqHE2`,
        "Tablet Closed": `CeBbQqx3D`,
        "Tablet Opened": `iUi08EfPA`,
        Desktop: `SPmUnEjng`,
      }),
      (Vt = D.create(s)),
      (Ht = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Bt[r.variant] ?? r.variant ?? `SPmUnEjng`,
      })),
      (Ut = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = R(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = T(),
            { activeLocale: o, setLocale: s } = z(),
            c = I(),
            { style: l, className: u, layoutId: d, variant: p, ...m } = Ht(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ee,
              setVariant: S,
              variants: C,
            } = je({
              cycleOrder: Pt,
              defaultVariant: `SPmUnEjng`,
              ref: i,
              variant: p,
              variantClassNames: It,
            }),
            w = Ut(e, C),
            { activeVariantCallback: E, delay: O } = de(h),
            A = E(async (...e) => {
              S(`CeBbQqx3D`);
            }),
            te = E(async (...e) => {
              S(`lmH4ln2tp`);
            }),
            j = E(async (...e) => {
              S(`iUi08EfPA`);
            }),
            M = E(async (...e) => {
              S(`CeBbQqx3D`);
            }),
            ne = E(async (...e) => {
              S(`aRW1DqHE2`);
            }),
            re = E(async (...e) => {
              S(`lmH4ln2tp`);
            }),
            ie = E(async (...e) => {
              S(`CeBbQqx3D`);
            }),
            ae = E(async (...e) => {
              S(`lmH4ln2tp`);
            }),
            N = E(async (...e) => {
              S(`CeBbQqx3D`);
            }),
            oe = E(async (...e) => {
              S(`lmH4ln2tp`);
            }),
            se = F(Ft),
            ce = () => !![`CeBbQqx3D`, `iUi08EfPA`, `lmH4ln2tp`, `aRW1DqHE2`].includes(h),
            P = () => ![`CeBbQqx3D`, `lmH4ln2tp`].includes(h);
          return (
            me(),
            f(k, {
              id: d ?? a,
              children: f(Vt, {
                animate: C,
                initial: !1,
                children: f(zt, {
                  value: Lt,
                  children: f(D.nav, {
                    ...m,
                    ...y,
                    className: F(se, `framer-1ey35sr`, u, g),
                    "data-border": !0,
                    "data-framer-name": `Desktop`,
                    layoutDependency: w,
                    layoutId: `SPmUnEjng`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-eaa444f4-7e99-47ba-8c71-b1ca35a8422f, rgba(255, 255, 255, 0.05))`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20))`,
                      ...l,
                    },
                    ...q(
                      {
                        aRW1DqHE2: { "data-framer-name": `Mobile Opened` },
                        CeBbQqx3D: { "data-framer-name": `Tablet Closed` },
                        iUi08EfPA: { "data-framer-name": `Tablet Opened` },
                        lmH4ln2tp: { "data-framer-name": `Mobile Closed` },
                      },
                      h,
                      b
                    ),
                    children: v(D.div, {
                      className: `framer-18cxfei`,
                      "data-framer-name": `Content Wrapper`,
                      layoutDependency: w,
                      layoutId: `k8fSOMOkq`,
                      children: [
                        v(D.div, {
                          className: `framer-1xrqe23`,
                          "data-framer-name": `Image Name Tag Wrapper`,
                          layoutDependency: w,
                          layoutId: `fWaF0oNGv`,
                          children: [
                            f(V, {
                              height: 40,
                              y:
                                (c?.y || 0) +
                                24 +
                                (((c?.height || 88) - 48 - 48) / 2 + 0 + 0) +
                                4 +
                                0,
                              ...q(
                                {
                                  aRW1DqHE2: {
                                    y:
                                      (c?.y || 0) +
                                      24 +
                                      (((c?.height || 200) - 48 - 228) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  CeBbQqx3D: {
                                    y:
                                      (c?.y || 0) +
                                      24 +
                                      (((c?.height || 88) - 48 - 40) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  iUi08EfPA: {
                                    y:
                                      (c?.y || 0) +
                                      24 +
                                      (((c?.height || 200) - 48 - 228) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  lmH4ln2tp: {
                                    y:
                                      (c?.y || 0) +
                                      24 +
                                      (((c?.height || 200) - 48 - 40) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0,
                                  },
                                },
                                h,
                                b
                              ),
                              children: f(U, {
                                className: `framer-18wz187-container`,
                                layoutDependency: w,
                                layoutId: `uToyfWYiY-container`,
                                nodeId: `uToyfWYiY`,
                                rendersWithMotion: !0,
                                scopeId: `NV1WqxfBi`,
                                children: f(W, {
                                  height: `100%`,
                                  id: `uToyfWYiY`,
                                  layoutId: `uToyfWYiY`,
                                  width: `100%`,
                                  ...q(
                                    { aRW1DqHE2: { IQ5R16Yu3: te }, iUi08EfPA: { IQ5R16Yu3: A } },
                                    h,
                                    b
                                  ),
                                }),
                              }),
                            }),
                            ce() &&
                              f(V, {
                                ...q(
                                  {
                                    aRW1DqHE2: {
                                      height: 36,
                                      width: `36px`,
                                      y:
                                        (c?.y || 0) +
                                        24 +
                                        (((c?.height || 200) - 48 - 228) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        2,
                                    },
                                    CeBbQqx3D: {
                                      height: 36,
                                      width: `36px`,
                                      y:
                                        (c?.y || 0) +
                                        24 +
                                        (((c?.height || 88) - 48 - 40) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        2,
                                    },
                                    iUi08EfPA: {
                                      height: 36,
                                      width: `36px`,
                                      y:
                                        (c?.y || 0) +
                                        24 +
                                        (((c?.height || 200) - 48 - 228) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        2,
                                    },
                                    lmH4ln2tp: {
                                      height: 36,
                                      width: `36px`,
                                      y:
                                        (c?.y || 0) +
                                        24 +
                                        (((c?.height || 200) - 48 - 40) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        2,
                                    },
                                  },
                                  h,
                                  b
                                ),
                                children: f(U, {
                                  className: `framer-wtwk9x-container`,
                                  layoutDependency: w,
                                  layoutId: `UWMw6SL8Y-container`,
                                  nodeId: `UWMw6SL8Y`,
                                  rendersWithMotion: !0,
                                  scopeId: `NV1WqxfBi`,
                                  children: f(G, {
                                    height: `100%`,
                                    id: `UWMw6SL8Y`,
                                    layoutId: `UWMw6SL8Y`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: Rt(`zcYEPDHYh`),
                                    width: `100%`,
                                    ...q(
                                      {
                                        aRW1DqHE2: { D1QuA586u: re, variant: Rt(`IYHLFHwXl`) },
                                        CeBbQqx3D: { D1QuA586u: j },
                                        iUi08EfPA: { D1QuA586u: M, variant: Rt(`IYHLFHwXl`) },
                                        lmH4ln2tp: { D1QuA586u: ne },
                                      },
                                      h,
                                      b
                                    ),
                                  }),
                                }),
                              }),
                          ],
                        }),
                        P() &&
                          v(D.div, {
                            className: `framer-13usbud`,
                            "data-framer-name": `Nav Links Wrapper`,
                            layoutDependency: w,
                            layoutId: `gr7ME1sGP`,
                            children: [
                              f(be, {
                                links: [
                                  {
                                    href: { hash: `:z5mBxg2cw`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:z5mBxg2cw`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:z5mBxg2cw`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  f(V, {
                                    height: 26,
                                    y:
                                      (c?.y || 0) +
                                      24 +
                                      (((c?.height || 88) - 48 - 48) / 2 + 0 + 0) +
                                      0 +
                                      11,
                                    ...q(
                                      {
                                        aRW1DqHE2: {
                                          y:
                                            (c?.y || 0) +
                                            24 +
                                            (((c?.height || 200) - 48 - 228) / 2 + 0 + 0) +
                                            0 +
                                            80 +
                                            0 +
                                            0,
                                        },
                                        iUi08EfPA: {
                                          y:
                                            (c?.y || 0) +
                                            24 +
                                            (((c?.height || 200) - 48 - 228) / 2 + 0 + 0) +
                                            0 +
                                            80 +
                                            0 +
                                            0,
                                        },
                                      },
                                      h,
                                      b
                                    ),
                                    children: f(U, {
                                      className: `framer-4xoqya-container`,
                                      layoutDependency: w,
                                      layoutId: `ZEzEyBBVj-container`,
                                      nodeId: `ZEzEyBBVj`,
                                      rendersWithMotion: !0,
                                      scopeId: `NV1WqxfBi`,
                                      children: f(K, {
                                        height: `100%`,
                                        id: `ZEzEyBBVj`,
                                        layoutId: `ZEzEyBBVj`,
                                        LX9DED6sv: !1,
                                        qEqCl6A_m: e[0],
                                        vlcErjRzJ: `Skills`,
                                        width: `100%`,
                                        ...q(
                                          {
                                            aRW1DqHE2: { ckQZUcYav: ae, qEqCl6A_m: e[2] },
                                            iUi08EfPA: { ckQZUcYav: ie, qEqCl6A_m: e[1] },
                                          },
                                          h,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              f(be, {
                                links: [
                                  {
                                    href: { hash: `:PSSTNTYbx`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:PSSTNTYbx`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:PSSTNTYbx`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  f(V, {
                                    height: 26,
                                    y:
                                      (c?.y || 0) +
                                      24 +
                                      (((c?.height || 88) - 48 - 48) / 2 + 0 + 0) +
                                      0 +
                                      11,
                                    ...q(
                                      {
                                        aRW1DqHE2: {
                                          y:
                                            (c?.y || 0) +
                                            24 +
                                            (((c?.height || 200) - 48 - 228) / 2 + 0 + 0) +
                                            0 +
                                            80 +
                                            0 +
                                            50,
                                        },
                                        iUi08EfPA: {
                                          y:
                                            (c?.y || 0) +
                                            24 +
                                            (((c?.height || 200) - 48 - 228) / 2 + 0 + 0) +
                                            0 +
                                            80 +
                                            0 +
                                            50,
                                        },
                                      },
                                      h,
                                      b
                                    ),
                                    children: f(U, {
                                      className: `framer-bhuahe-container`,
                                      layoutDependency: w,
                                      layoutId: `wcRCSopOv-container`,
                                      nodeId: `wcRCSopOv`,
                                      rendersWithMotion: !0,
                                      scopeId: `NV1WqxfBi`,
                                      children: f(K, {
                                        height: `100%`,
                                        id: `wcRCSopOv`,
                                        layoutId: `wcRCSopOv`,
                                        LX9DED6sv: !1,
                                        qEqCl6A_m: e[0],
                                        vlcErjRzJ: `Projects`,
                                        width: `100%`,
                                        ...q(
                                          {
                                            aRW1DqHE2: { ckQZUcYav: ae, qEqCl6A_m: e[2] },
                                            iUi08EfPA: { ckQZUcYav: ie, qEqCl6A_m: e[1] },
                                          },
                                          h,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              f(V, {
                                height: 48,
                                y:
                                  (c?.y || 0) +
                                  24 +
                                  (((c?.height || 88) - 48 - 48) / 2 + 0 + 0) +
                                  0 +
                                  0,
                                ...q(
                                  {
                                    aRW1DqHE2: {
                                      y:
                                        (c?.y || 0) +
                                        24 +
                                        (((c?.height || 200) - 48 - 228) / 2 + 0 + 0) +
                                        0 +
                                        80 +
                                        0 +
                                        100,
                                    },
                                    iUi08EfPA: {
                                      y:
                                        (c?.y || 0) +
                                        24 +
                                        (((c?.height || 200) - 48 - 228) / 2 + 0 + 0) +
                                        0 +
                                        80 +
                                        0 +
                                        100,
                                    },
                                  },
                                  h,
                                  b
                                ),
                                children: f(U, {
                                  className: `framer-1erhcyn-container`,
                                  layoutDependency: w,
                                  layoutId: `iKs4DPCgg-container`,
                                  nodeId: `iKs4DPCgg`,
                                  rendersWithMotion: !0,
                                  scopeId: `NV1WqxfBi`,
                                  children: f(ze, {
                                    e4UmzZLrR: `Contact Me`,
                                    height: `100%`,
                                    id: `iKs4DPCgg`,
                                    layoutId: `iKs4DPCgg`,
                                    nJ8ZxmZCD: `https://drive.google.com/file/d/1M5KwqnCW2w3TEZfShsOYEd-CXG6c6FFq/view?usp=drivesdk`,
                                    O7pEZxxIM: !0,
                                    variant: Rt(`tx63vFD3w`),
                                    width: `100%`,
                                    ZkjMwhG5r: !1,
                                    ...q(
                                      { aRW1DqHE2: { pmHi4e1TT: oe }, iUi08EfPA: { pmHi4e1TT: N } },
                                      h,
                                      b
                                    ),
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-a9l7x.framer-zc17mv, .framer-a9l7x .framer-zc17mv { display: block; }`,
          `.framer-a9l7x.framer-1ey35sr { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 24px 200px 24px 200px; position: relative; width: 1440px; }`,
          `.framer-a9l7x .framer-18cxfei { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-a9l7x .framer-1xrqe23 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-a9l7x .framer-18wz187-container, .framer-a9l7x .framer-4xoqya-container, .framer-a9l7x .framer-bhuahe-container, .framer-a9l7x .framer-1erhcyn-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-a9l7x .framer-wtwk9x-container { flex: none; height: 36px; position: relative; width: 36px; }`,
          `.framer-a9l7x .framer-13usbud { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-a9l7x.framer-v-l0x65p.framer-1ey35sr, .framer-a9l7x.framer-v-guabs0.framer-1ey35sr { padding: 24px 60px 24px 60px; width: 810px; }`,
          `.framer-a9l7x.framer-v-l0x65p .framer-18cxfei, .framer-a9l7x.framer-v-guabs0 .framer-18cxfei, .framer-a9l7x.framer-v-1x490rc .framer-18cxfei, .framer-a9l7x.framer-v-1joa38z .framer-18cxfei { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 40px; justify-content: flex-start; }`,
          `.framer-a9l7x.framer-v-l0x65p .framer-1xrqe23, .framer-a9l7x.framer-v-guabs0 .framer-1xrqe23, .framer-a9l7x.framer-v-1x490rc .framer-1xrqe23, .framer-a9l7x.framer-v-1joa38z .framer-1xrqe23 { flex: none; gap: unset; justify-content: space-between; width: 100%; }`,
          `.framer-a9l7x.framer-v-guabs0 .framer-13usbud, .framer-a9l7x.framer-v-1joa38z .framer-13usbud { align-content: flex-start; align-items: flex-start; flex-direction: column; }`,
          `.framer-a9l7x.framer-v-1x490rc.framer-1ey35sr, .framer-a9l7x.framer-v-1joa38z.framer-1ey35sr { padding: 24px; width: 390px; }`,
          `.framer-a9l7x[data-border="true"]::after, .framer-a9l7x [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-a9l7x`
      )),
      (J.displayName = `navbar`),
      (J.defaultProps = { height: 88, width: 1440 }),
      P(J, {
        variant: {
          options: [`SPmUnEjng`, `CeBbQqx3D`, `iUi08EfPA`, `lmH4ln2tp`, `aRW1DqHE2`],
          optionTitles: [
            `Desktop`,
            `Tablet Closed`,
            `Tablet Opened`,
            `Mobile Closed`,
            `Mobile Opened`,
          ],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      H(J, [{ explicitInter: !0, fonts: [] }, ...At, ...jt, ...Mt, ...Nt], {
        supportsExplicitInterCodegen: !0,
      }),
      (J.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([M(W, {}, t), M(G, {}, t), M(K, {}, t), M(ze, {}, t)])
        ),
      }));
  }),
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt = e(() => {
    (x(),
      j(),
      n(),
      (Gt = `var(--framer-icon-mask)`),
      (Kt = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (qt = D.create(Kt)),
      (Jt = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(qt, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (Yt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 6 0 C 9.314 0 12 2.686 12 6 L 12 13 L 8 13 L 8 6 C 8 4.895 7.105 4 6 4 C 4.895 4 4 4.895 4 6 L 4 13 L 0 13 L 0 6 C 0 2.686 2.686 0 6 0 Z" fill="transparent" height="13px" id="b4daiqhLm" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(10 8)" width="12px"/><path d="M 0 12 L 0 0 L 4 0 L 4 12 Z" fill="transparent" height="12px" id="pjuCqz3_Y" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 9)" width="4px"/><path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" height="4px" id="HFWFXDJPf" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="4px"/></svg>`),
      (Xt = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (Zt = R(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Xt(e),
            l = De(`3416321359`, Yt);
          return f(Jt, {
            ...c,
            className: F(`framer-wOUd9`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-wOUd9 { -webkit-mask: ${Gt}; aspect-ratio: 1; display: block; mask: ${Gt}; width: 24px; }`,
        ],
        `framer-wOUd9`
      )),
      (Zt.displayName = `Linkedin`),
      P(Zt, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: B.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: B.Number,
        },
      }));
  }),
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn = e(() => {
    (x(),
      j(),
      n(),
      ($t = `var(--framer-icon-mask)`),
      (en = p(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (tn = D.create(en)),
      (nn = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(tn, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (rn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z" fill="transparent" height="6px" id="v7bLomFpP" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 9)" width="6px"/><path d="M 9 13.5 C 9 15.985 6.985 18 4.5 18 C 2.015 18 0 15.985 0 13.5 C 0 11.015 2.015 9 4.5 9 C 2.015 9 0 6.985 0 4.5 C 0 2.015 2.015 0 4.5 0 C 6.985 0 9 2.015 9 4.5 C 9 2.015 11.015 0 13.5 0 C 15.985 0 18 2.015 18 4.5 C 18 6.985 15.985 9 13.5 9 C 15.985 9 18 11.015 18 13.5 C 18 15.985 15.985 18 13.5 18 C 11.015 18 9 15.985 9 13.5" fill="transparent" height="18px" id="FzzmPTIGz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3 3)" width="18px"/><path d="M 0 0 L 0 1.5" fill="transparent" height="1.5px" id="B1JXCv6C5" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 7.5)" width="1px"/><path d="M 0 0 L 1.5 0" fill="transparent" height="1px" id="EcpS9y_2v" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(7.5 12)" width="1.5px"/><path d="M 1.5 0 L 0 0" fill="transparent" height="1px" id="G_Ywt6QAJ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(15 12)" width="1.5px"/><path d="M 0 1.5 L 0 0" fill="transparent" height="1.5px" id="kD4joCHVf" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 15)" width="1px"/><path d="M 0 0 L 1.88 1.88" fill="transparent" height="1.879999999999999px" id="rVzzq5Toy" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 8)" width="1.879999999999999px"/><path d="M 0 1.88 L 1.88 0" fill="transparent" height="1.8800000000000008px" id="LDFXQyBRX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(14.12 8)" width="1.8800000000000008px"/><path d="M 0 1.88 L 1.88 0" fill="transparent" height="1.879999999999999px" id="YlQi31EPg" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 14.12)" width="1.879999999999999px"/><path d="M 0 0 L 1.88 1.88" fill="transparent" height="1.8800000000000008px" id="I9mHoeK0B" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(14.12 14.12)" width="1.8800000000000008px"/></svg>`),
      (an = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (on = R(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = an(e),
            l = De(`4012542427`, rn);
          return f(nn, {
            ...c,
            className: F(`framer-TWALS`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-TWALS { -webkit-mask: ${$t}; aspect-ratio: 1; display: block; mask: ${$t}; width: 24px; }`,
        ],
        `framer-TWALS`
      )),
      (on.displayName = `Flower`),
      P(on, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: B.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: B.Number,
        },
      }));
  });
function cn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  Y,
  vn = e(() => {
    (x(),
      j(),
      A(),
      n(),
      sn(),
      (ln = { apXrhkrI6: { hover: !0 } }),
      (un = `framer-JTRGS`),
      (dn = { apXrhkrI6: `framer-v-1vkim68` }),
      (fn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (pn = (e, t) => `translateX(-50%) ${t}`),
      (mn = ({ value: e, children: n }) => {
        let r = _(O),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (hn = D.create(s)),
      (gn = ({ height: e, icon: t, id: n, link: r, newTab: i, width: a, ...o }) => ({
        ...o,
        Hvxm877Y2: t ?? o.Hvxm877Y2 ?? on,
        KxLYz_sto: i ?? o.KxLYz_sto,
        WeRUOLC05: r ?? o.WeRUOLC05,
      })),
      (_n = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = R(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = T(),
            { activeLocale: o, setLocale: s } = z();
          I();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              Hvxm877Y2: p,
              WeRUOLC05: m,
              KxLYz_sto: h,
              ...g
            } = gn(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: ee,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: E,
            } = je({
              defaultVariant: `apXrhkrI6`,
              enabledGestures: ln,
              ref: i,
              variant: d,
              variantClassNames: dn,
            }),
            O = _n(e, E),
            A = F(un);
          return f(k, {
            id: u ?? a,
            children: f(hn, {
              animate: E,
              initial: !1,
              children: f(mn, {
                value: fn,
                children: f(Ne, {
                  href: m,
                  motionChild: !0,
                  nodeId: `apXrhkrI6`,
                  openInNewTab: h,
                  scopeId: `LbO70U73m`,
                  children: v(D.a, {
                    ...g,
                    ...x,
                    className: `${F(A, `framer-1vkim68`, l, y)} framer-cy4rbt`,
                    "data-framer-name": `Default`,
                    layoutDependency: O,
                    layoutId: `apXrhkrI6`,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-b4d223ed-03f5-4a9b-89ad-72802d44a023, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      ...c,
                    },
                    ...cn({ "apXrhkrI6-hover": { "data-framer-name": void 0 } }, _, ee),
                    children: [
                      f(he, {
                        animated: !0,
                        className: `framer-7vkpby`,
                        Component: p,
                        layoutDependency: O,
                        layoutId: `VZ7xPMqDg`,
                        style: {
                          "--1m973uw": `var(--token-73e2668e-ad43-49fd-bc30-9906fc740a6b, rgb(20, 20, 20))`,
                          "--js9iwy": 2,
                        },
                        ...cn({ "apXrhkrI6-hover": { transformTemplate: pn } }, _, ee),
                      }),
                      f(he, {
                        animated: !0,
                        className: `framer-xjnxta`,
                        Component: p,
                        layoutDependency: O,
                        layoutId: `Mp4w9bz8B`,
                        style: {
                          "--1m973uw": `var(--token-73e2668e-ad43-49fd-bc30-9906fc740a6b, rgb(20, 20, 20))`,
                          "--js9iwy": 2,
                        },
                        transformTemplate: pn,
                        ...cn({ "apXrhkrI6-hover": { transformTemplate: void 0 } }, _, ee),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-JTRGS.framer-cy4rbt, .framer-JTRGS .framer-cy4rbt { display: block; }`,
          `.framer-JTRGS.framer-1vkim68 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-JTRGS .framer-7vkpby { flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
          `.framer-JTRGS .framer-xjnxta { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 50%; position: absolute; top: 50px; width: 20px; z-index: 1; }`,
          `.framer-JTRGS.framer-v-1vkim68.hover .framer-7vkpby { aspect-ratio: 1 / 1; bottom: 50px; left: 50%; position: absolute; z-index: 1; }`,
          `.framer-JTRGS.framer-v-1vkim68.hover .framer-xjnxta { left: unset; position: relative; top: unset; }`,
        ],
        `framer-JTRGS`
      )),
      (Y.displayName = `Social Button`),
      (Y.defaultProps = { height: 36, width: 36 }),
      P(Y, {
        Hvxm877Y2: {
          defaultValue: {
            identifier: `module:UE8WWbLIUmyibNWAKTzx/zNv6U8II9zcgtQVzuGUU/WQgmZvDvc.js:default`,
            moduleId: `UE8WWbLIUmyibNWAKTzx`,
          },
          setModuleId: `Y7SpbVH16cWqMhj75z1M`,
          title: `Icon`,
          type: B.VectorSetItem,
        },
        WeRUOLC05: { title: `Link`, type: B.Link },
        KxLYz_sto: { optional: !0, title: `New Tab`, type: B.Boolean },
        onKxLYz_stoChange: { changes: `KxLYz_sto`, type: B.ChangeHandler },
      }),
      H(Y, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function X(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Z,
  Vn = e(() => {
    (x(),
      j(),
      A(),
      n(),
      Qt(),
      Ve(),
      He(),
      st(),
      vn(),
      Le(),
      kt(),
      (yn = Pe(L)),
      (bn = Pe(Ae)),
      (xn = N(ze)),
      (Sn = N(W)),
      (Cn = N(Y)),
      (wn = N(K)),
      (Tn = [`o1o3SFPZp`, `N9lGTOgMs`, `EhIyzGlUr`]),
      (En = `framer-vrG20`),
      (Dn = {
        EhIyzGlUr: `framer-v-mj1ewf`,
        N9lGTOgMs: `framer-v-3anj9k`,
        o1o3SFPZp: `framer-v-qi4soy`,
      }),
      (On = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (kn = {
        effect: {
          filter: `blur(10px)`,
          opacity: 0.001,
          rotate: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 10,
        },
        repeat: !1,
        startDelay: 0,
        threshold: 0,
        tokenization: `character`,
        transition: { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (An = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (jn = { damping: 70, delay: 0, mass: 1, stiffness: 320, type: `spring` }),
      (Mn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Nn = { bounce: 0, delay: 0.7, duration: 1.8, type: `spring` }),
      (Pn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        transition: Nn,
        x: 0,
        y: 0,
      }),
      (Fn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (In = ({ value: e, children: n }) => {
        let r = _(O),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(O.Provider, { value: a, children: n });
      }),
      (Ln = { Desktop: `o1o3SFPZp`, Mobile: `EhIyzGlUr`, Tablet: `N9lGTOgMs` }),
      (Rn = D.create(s)),
      (zn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ln[r.variant] ?? r.variant ?? `o1o3SFPZp`,
      })),
      (Bn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = R(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = T(),
            { activeLocale: o, setLocale: c } = z(),
            l = I(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = zn(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ee,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = je({
              cycleOrder: Tn,
              defaultVariant: `o1o3SFPZp`,
              ref: i,
              variant: m,
              variantClassNames: Dn,
            }),
            E = Bn(e, w),
            O = F(En, Ge, Be);
          return (
            me(),
            f(k, {
              id: p ?? a,
              children: f(Rn, {
                animate: w,
                initial: !1,
                children: f(In, {
                  value: On,
                  children: f(D.footer, {
                    ...h,
                    ...b,
                    className: F(O, `framer-qi4soy`, d, _),
                    "data-framer-name": `Desktop`,
                    layoutDependency: E,
                    layoutId: `o1o3SFPZp`,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20))`,
                      ...u,
                    },
                    ...X(
                      {
                        EhIyzGlUr: { "data-framer-name": `Mobile` },
                        N9lGTOgMs: { "data-framer-name": `Tablet` },
                      },
                      g,
                      x
                    ),
                    children: v(D.div, {
                      className: `framer-1abanxe`,
                      "data-framer-name": `Content Wrapper`,
                      layoutDependency: E,
                      layoutId: `PT2vaJCH4`,
                      children: [
                        v(D.div, {
                          className: `framer-1g5xtha`,
                          "data-framer-name": `CTA Wrapper`,
                          layoutDependency: E,
                          layoutId: `U93LEjcYB`,
                          style: {
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                          },
                          children: [
                            f(L, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(D.h2, {
                                  className: `framer-styles-preset-wj1llc`,
                                  "data-styles-preset": `fQF7LPveS`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: f(D.strong, {
                                    children: `Let’s Build Something Great`,
                                  }),
                                }),
                              }),
                              className: `framer-17isbhd`,
                              effect: kn,
                              fonts: [`Inter`, `Inter-Bold`],
                              layoutDependency: E,
                              layoutId: `eV0hrJuv8`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(yn, {
                              __framer__animate: { transition: jn },
                              __framer__animateOnce: !0,
                              __framer__enter: An,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              children: f(s, {
                                children: f(D.p, {
                                  className: `framer-styles-preset-13u21mt`,
                                  "data-styles-preset": `DMtlcsvaj`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6065e7bc-5ed0-4365-8788-d8ae4278d28c, rgba(255, 255, 255, 0.65)))`,
                                  },
                                  children: `Let’s turn your ideas into intuitive, engaging, and meaningful digital experiences.`,
                                }),
                              }),
                              className: `framer-1dj4188`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `pj6FdhImW`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-6065e7bc-5ed0-4365-8788-d8ae4278d28c, rgba(255, 255, 255, 0.65))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(D.div, {
                              className: `framer-fbkld5`,
                              layoutDependency: E,
                              layoutId: `V6MwHBICV`,
                              style: {
                                backgroundColor: `var(--token-267c60e3-1525-4ea3-92b5-269f7c247caf, rgba(0, 0, 0, 0.6))`,
                              },
                            }),
                            f(bn, {
                              __framer__animate: { transition: Nn },
                              __framer__animateOnce: !1,
                              __framer__enter: Mn,
                              __framer__exit: Pn,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              background: {
                                alt: `Photo of people working in a workspace`,
                                fit: `fill`,
                                intrinsicHeight: 2400,
                                intrinsicWidth: 1808,
                                loading: re(
                                  (l?.y || 0) +
                                    120 +
                                    (((l?.height || 1195) - 240 - 1171) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    0
                                ),
                                pixelHeight: 2400,
                                pixelWidth: 1808,
                                positionX: `48.9%`,
                                positionY: `64.5%`,
                                sizes: `min(${l?.width || `100vw`} - 400px, 1200px)`,
                                src: `../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png?width=1808&height=2400`,
                                srcSet: `../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png?scale-down-to=1024&width=1808&height=2400 771w,../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png 1542w,../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png?width=1808&height=2400 1808w`,
                              },
                              className: `framer-1gi92tt`,
                              layoutDependency: E,
                              layoutId: `rrFzQM5FJ`,
                              ...X(
                                {
                                  EhIyzGlUr: {
                                    background: {
                                      alt: `Photo of people working in a workspace`,
                                      fit: `fill`,
                                      intrinsicHeight: 2400,
                                      intrinsicWidth: 1808,
                                      loading: re(
                                        (l?.y || 0) +
                                          60 +
                                          (((l?.height || 200) - 120 - 1079) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 2400,
                                      pixelWidth: 1808,
                                      positionX: `48.9%`,
                                      positionY: `64.5%`,
                                      sizes: `min(${l?.width || `100vw`} - 48px, 1200px)`,
                                      src: `../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png?width=1808&height=2400`,
                                      srcSet: `../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png?scale-down-to=1024&width=1808&height=2400 771w,../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png 1542w,../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png?width=1808&height=2400 1808w`,
                                    },
                                  },
                                  N9lGTOgMs: {
                                    background: {
                                      alt: `Photo of people working in a workspace`,
                                      fit: `fill`,
                                      intrinsicHeight: 2400,
                                      intrinsicWidth: 1808,
                                      loading: re(
                                        (l?.y || 0) +
                                          96 +
                                          (((l?.height || 1200) - 192 - 1279) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 2400,
                                      pixelWidth: 1808,
                                      positionX: `48.9%`,
                                      positionY: `64.5%`,
                                      sizes: `min(${l?.width || `100vw`} - 120px, 1200px)`,
                                      src: `../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png?width=1808&height=2400`,
                                      srcSet: `../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png?scale-down-to=1024&width=1808&height=2400 771w,../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png 1542w,../../assets/images/9fw8QpQh9MDfYPE7lBglCTPZEU.png?width=1808&height=2400 1808w`,
                                    },
                                  },
                                },
                                g,
                                x
                              ),
                            }),
                            f(V, {
                              height: 48,
                              y:
                                (l?.y || 0) +
                                120 +
                                (((l?.height || 1195) - 240 - 1171) / 2 + 0 + 0) +
                                0 +
                                0 +
                                200 +
                                217,
                              ...X(
                                {
                                  EhIyzGlUr: {
                                    y:
                                      (l?.y || 0) +
                                      60 +
                                      (((l?.height || 200) - 120 - 1079) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      100 +
                                      217,
                                  },
                                  N9lGTOgMs: {
                                    y:
                                      (l?.y || 0) +
                                      96 +
                                      (((l?.height || 1200) - 192 - 1279) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      200 +
                                      217,
                                  },
                                },
                                g,
                                x
                              ),
                              children: f(U, {
                                className: `framer-dauygn-container`,
                                layoutDependency: E,
                                layoutId: `AB09wC3uM-container`,
                                nodeId: `AB09wC3uM`,
                                rendersWithMotion: !0,
                                scopeId: `Rh909OFth`,
                                children: f(ze, {
                                  e4UmzZLrR: `Contact Me`,
                                  height: `100%`,
                                  id: `AB09wC3uM`,
                                  layoutId: `AB09wC3uM`,
                                  nJ8ZxmZCD: `siddharoodhadhatti067@gmail.com`,
                                  O7pEZxxIM: !0,
                                  variant: Fn(`vcIzXPKgG`),
                                  width: `100%`,
                                  ZkjMwhG5r: !1,
                                }),
                              }),
                            }),
                          ],
                        }),
                        v(D.div, {
                          className: `framer-1blpwgd`,
                          "data-border": !0,
                          "data-framer-name": `Main Footer Wrapper `,
                          layoutDependency: E,
                          layoutId: `wmUl_AFVY`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-eaa444f4-7e99-47ba-8c71-b1ca35a8422f, rgba(255, 255, 255, 0.05))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          children: [
                            v(D.div, {
                              className: `framer-4agv57`,
                              "data-framer-name": `Name + Social Links Wrapper`,
                              layoutDependency: E,
                              layoutId: `e22W6ROH1`,
                              children: [
                                f(V, {
                                  height: 40,
                                  y:
                                    (l?.y || 0) +
                                    120 +
                                    (((l?.height || 1195) - 240 - 1171) / 2 + 0 + 0) +
                                    0 +
                                    705 +
                                    0 +
                                    0 +
                                    0,
                                  ...X(
                                    {
                                      EhIyzGlUr: {
                                        y:
                                          (l?.y || 0) +
                                          60 +
                                          (((l?.height || 200) - 120 - 1079) / 2 + 0 + 0) +
                                          0 +
                                          505 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      N9lGTOgMs: {
                                        y:
                                          (l?.y || 0) +
                                          96 +
                                          (((l?.height || 1200) - 192 - 1279) / 2 + 0 + 0) +
                                          0 +
                                          705 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    g,
                                    x
                                  ),
                                  children: f(U, {
                                    className: `framer-oxfv1o-container`,
                                    layoutDependency: E,
                                    layoutId: `mkKm4PtYr-container`,
                                    nodeId: `mkKm4PtYr`,
                                    rendersWithMotion: !0,
                                    scopeId: `Rh909OFth`,
                                    children: f(W, {
                                      height: `100%`,
                                      id: `mkKm4PtYr`,
                                      layoutId: `mkKm4PtYr`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                f(L, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(D.p, {
                                      className: `framer-styles-preset-13u21mt`,
                                      "data-styles-preset": `DMtlcsvaj`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `“I create intuitive and engaging digital experiences that make products simple, useful, and enjoyable.”`,
                                    }),
                                  }),
                                  className: `framer-15gi75m`,
                                  fonts: [`Inter`],
                                  layoutDependency: E,
                                  layoutId: `hsC7nDfHV`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(D.div, {
                                  className: `framer-1tjdjqt`,
                                  "data-framer-name": `Social Links`,
                                  layoutDependency: E,
                                  layoutId: `vgyiDqswz`,
                                  children: f(V, {
                                    height: 36,
                                    y:
                                      (l?.y || 0) +
                                      120 +
                                      (((l?.height || 1195) - 240 - 1171) / 2 + 0 + 0) +
                                      0 +
                                      705 +
                                      0 +
                                      0 +
                                      215 +
                                      0,
                                    ...X(
                                      {
                                        EhIyzGlUr: {
                                          y:
                                            (l?.y || 0) +
                                            60 +
                                            (((l?.height || 200) - 120 - 1079) / 2 + 0 + 0) +
                                            0 +
                                            505 +
                                            0 +
                                            0 +
                                            0 +
                                            215 +
                                            0,
                                        },
                                        N9lGTOgMs: {
                                          y:
                                            (l?.y || 0) +
                                            96 +
                                            (((l?.height || 1200) - 192 - 1279) / 2 + 0 + 0) +
                                            0 +
                                            705 +
                                            0 +
                                            0 +
                                            0 +
                                            215 +
                                            0,
                                        },
                                      },
                                      g,
                                      x
                                    ),
                                    children: f(U, {
                                      className: `framer-689xxu-container`,
                                      layoutDependency: E,
                                      layoutId: `v53iBJHLE-container`,
                                      nodeId: `v53iBJHLE`,
                                      rendersWithMotion: !0,
                                      scopeId: `Rh909OFth`,
                                      children: f(Y, {
                                        height: `100%`,
                                        Hvxm877Y2: Zt,
                                        id: `v53iBJHLE`,
                                        layoutId: `v53iBJHLE`,
                                        WeRUOLC05: `https://www.linkedin.com/in/siddharoodha-dhatti-584478348`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            v(D.div, {
                              className: `framer-1b6pzj6`,
                              "data-framer-name": `Footer Links`,
                              layoutDependency: E,
                              layoutId: `yK8k5wY42`,
                              children: [
                                f(be, {
                                  links: [
                                    {
                                      href: { hash: `:z5mBxg2cw`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:z5mBxg2cw`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:z5mBxg2cw`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(V, {
                                      height: 26,
                                      y:
                                        (l?.y || 0) +
                                        120 +
                                        (((l?.height || 1195) - 240 - 1171) / 2 + 0 + 0) +
                                        0 +
                                        705 +
                                        0 +
                                        0 +
                                        0,
                                      ...X(
                                        {
                                          EhIyzGlUr: {
                                            y:
                                              (l?.y || 0) +
                                              60 +
                                              (((l?.height || 200) - 120 - 1079) / 2 + 0 + 0) +
                                              0 +
                                              505 +
                                              0 +
                                              291 +
                                              0 +
                                              0,
                                          },
                                          N9lGTOgMs: {
                                            y:
                                              (l?.y || 0) +
                                              96 +
                                              (((l?.height || 1200) - 192 - 1279) / 2 + 0 + 0) +
                                              0 +
                                              705 +
                                              0 +
                                              291 +
                                              0 +
                                              0,
                                          },
                                        },
                                        g,
                                        x
                                      ),
                                      children: f(U, {
                                        className: `framer-7wvslo-container`,
                                        layoutDependency: E,
                                        layoutId: `p1rI6UKo_-container`,
                                        nodeId: `p1rI6UKo_`,
                                        rendersWithMotion: !0,
                                        scopeId: `Rh909OFth`,
                                        children: f(K, {
                                          height: `100%`,
                                          id: `p1rI6UKo_`,
                                          layoutId: `p1rI6UKo_`,
                                          LX9DED6sv: !1,
                                          qEqCl6A_m: e[0],
                                          vlcErjRzJ: `Skills`,
                                          width: `100%`,
                                          ...X(
                                            {
                                              EhIyzGlUr: { qEqCl6A_m: e[2] },
                                              N9lGTOgMs: { qEqCl6A_m: e[1] },
                                            },
                                            g,
                                            x
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                f(be, {
                                  links: [
                                    {
                                      href: { hash: `:PSSTNTYbx`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:PSSTNTYbx`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:PSSTNTYbx`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(V, {
                                      height: 26,
                                      y:
                                        (l?.y || 0) +
                                        120 +
                                        (((l?.height || 1195) - 240 - 1171) / 2 + 0 + 0) +
                                        0 +
                                        705 +
                                        0 +
                                        0 +
                                        42,
                                      ...X(
                                        {
                                          EhIyzGlUr: {
                                            y:
                                              (l?.y || 0) +
                                              60 +
                                              (((l?.height || 200) - 120 - 1079) / 2 + 0 + 0) +
                                              0 +
                                              505 +
                                              0 +
                                              291 +
                                              0 +
                                              42,
                                          },
                                          N9lGTOgMs: {
                                            y:
                                              (l?.y || 0) +
                                              96 +
                                              (((l?.height || 1200) - 192 - 1279) / 2 + 0 + 0) +
                                              0 +
                                              705 +
                                              0 +
                                              291 +
                                              0 +
                                              42,
                                          },
                                        },
                                        g,
                                        x
                                      ),
                                      children: f(U, {
                                        className: `framer-g6imx-container`,
                                        layoutDependency: E,
                                        layoutId: `pGSX2h6Gk-container`,
                                        nodeId: `pGSX2h6Gk`,
                                        rendersWithMotion: !0,
                                        scopeId: `Rh909OFth`,
                                        children: f(K, {
                                          height: `100%`,
                                          id: `pGSX2h6Gk`,
                                          layoutId: `pGSX2h6Gk`,
                                          LX9DED6sv: !1,
                                          qEqCl6A_m: e[0],
                                          vlcErjRzJ: `Projects`,
                                          width: `100%`,
                                          ...X(
                                            {
                                              EhIyzGlUr: { qEqCl6A_m: e[2] },
                                              N9lGTOgMs: { qEqCl6A_m: e[1] },
                                            },
                                            g,
                                            x
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        f(L, {
                          __fromCanvasComponent: !0,
                          children: f(s, {
                            children: f(D.p, {
                              className: `framer-styles-preset-13u21mt`,
                              "data-styles-preset": `DMtlcsvaj`,
                              dir: `auto`,
                              style: { "--framer-text-alignment": `center` },
                              children: `© 2026 — Siddharoodha. All Rights reserved`,
                            }),
                          }),
                          className: `framer-17dq6bx`,
                          fonts: [`Inter`],
                          layoutDependency: E,
                          layoutId: `NDcxWJdjb`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-vrG20.framer-q9iibm, .framer-vrG20 .framer-q9iibm { display: block; }`,
          `.framer-vrG20.framer-qi4soy { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 200px 120px 200px; position: relative; width: 1440px; }`,
          `.framer-vrG20 .framer-1abanxe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-vrG20 .framer-1g5xtha { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 200px 84px 200px 84px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-vrG20 .framer-17isbhd { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; z-index: 3; }`,
          `.framer-vrG20 .framer-1dj4188 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 40%; z-index: 3; }`,
          `.framer-vrG20 .framer-fbkld5 { flex: none; height: 100%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 2; }`,
          `.framer-vrG20 .framer-1gi92tt { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
          `.framer-vrG20 .framer-dauygn-container { flex: none; height: auto; position: relative; width: auto; z-index: 3; }`,
          `.framer-vrG20 .framer-1blpwgd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 40px 0px; position: relative; width: 100%; }`,
          `.framer-vrG20 .framer-4agv57 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-vrG20 .framer-oxfv1o-container, .framer-vrG20 .framer-689xxu-container, .framer-vrG20 .framer-7wvslo-container, .framer-vrG20 .framer-g6imx-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-vrG20 .framer-15gi75m { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 60%; }`,
          `.framer-vrG20 .framer-1tjdjqt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-vrG20 .framer-1b6pzj6 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-vrG20 .framer-17dq6bx { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-vrG20.framer-v-3anj9k.framer-qi4soy { padding: 96px 60px 96px 60px; width: 810px; }`,
          `.framer-vrG20.framer-v-3anj9k .framer-1g5xtha { padding: 200px 60px 200px 60px; }`,
          `.framer-vrG20.framer-v-3anj9k .framer-1dj4188 { width: 70%; }`,
          `.framer-vrG20.framer-v-3anj9k .framer-1blpwgd, .framer-vrG20.framer-v-mj1ewf .framer-1blpwgd { flex-direction: column; gap: 40px; justify-content: flex-start; }`,
          `.framer-vrG20.framer-v-3anj9k .framer-4agv57, .framer-vrG20.framer-v-mj1ewf .framer-4agv57 { flex: none; width: 100%; }`,
          `.framer-vrG20.framer-v-3anj9k .framer-1b6pzj6, .framer-vrG20.framer-v-mj1ewf .framer-1b6pzj6 { align-content: flex-start; align-items: flex-start; flex: none; width: 100%; }`,
          `.framer-vrG20.framer-v-mj1ewf.framer-qi4soy { padding: 60px 24px 60px 24px; width: 390px; }`,
          `.framer-vrG20.framer-v-mj1ewf .framer-1g5xtha { padding: 100px 24px 100px 24px; }`,
          `.framer-vrG20.framer-v-mj1ewf .framer-1dj4188 { width: 100%; }`,
          ...We,
          ...Ke,
          `.framer-vrG20[data-border="true"]::after, .framer-vrG20 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-vrG20`
      )),
      (Z.displayName = `Footer`),
      (Z.defaultProps = { height: 1195, width: 1440 }),
      P(Z, {
        variant: {
          options: [`o1o3SFPZp`, `N9lGTOgMs`, `EhIyzGlUr`],
          optionTitles: [`Desktop`, `Tablet`, `Mobile`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      H(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
            ],
          },
          ...xn,
          ...Sn,
          ...Cn,
          ...wn,
          ...oe(Ue),
          ...oe(Ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Z.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([M(ze, {}, t), M(W, {}, t), M(Y, {}, t), M(K, {}, t)])
        ),
      }));
  }),
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  Q,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr = e(() => {
    (x(),
      j(),
      A(),
      n(),
      Wt(),
      Vn(),
      (Hn = N(J)),
      (Un = N(Z)),
      (Wn = {
        kfkewWQ13: `(max-width: 809.98px)`,
        Ujb7grcPk: `(min-width: 810px) and (max-width: 1439.98px)`,
        WAqfGk0eZ: `(min-width: 1440px)`,
      }),
      (Gn = `framer-rCowG`),
      (Kn = {
        kfkewWQ13: `framer-v-1uvquya`,
        Ujb7grcPk: `framer-v-shyklk`,
        WAqfGk0eZ: `framer-v-r1djl0`,
      }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (qn = {}),
      (Jn = Object.keys(qn)),
      (Yn = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-rCowG.framer-1tautq9, .framer-rCowG .framer-1tautq9 { display: block; }`,
        `.framer-rCowG.framer-r1djl0 { align-content: center; align-items: center; background-color: var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, #141414); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-rCowG .framer-16tjs7g-container { flex: none; height: auto; left: 0px; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: 100%; z-index: 10; }`,
        `.framer-rCowG .framer-1c39r2j { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-rCowG .framer-mi3nri-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; z-index: 1; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (Xn = {
        kfkewWQ13: `(max-width: 809.98px)`,
        Ujb7grcPk: `(min-width: 810px) and (max-width: 1439.98px)`,
        WAqfGk0eZ: `(min-width: 1440px)`,
      }),
      (Zn = { Desktop: `WAqfGk0eZ`, Phone: `kfkewWQ13`, Tablet: `Ujb7grcPk` }),
      (Qn = ({ value: e }) =>
        Me()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      ($n = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Zn[r.variant] ?? r.variant ?? `WAqfGk0eZ`,
      })),
      (er = p(function (e, t) {
        let n = r(null),
          i = t ?? n,
          a = T(),
          { activeLocale: o, setLocale: s } = z(),
          { style: c, className: l, layoutId: u, variant: d, children: p, ...m } = $n(e),
          [h, g] = _e(d, Wn, !1),
          _ = F(Gn);
        return (
          te({}),
          f(pe.Provider, {
            value: {
              activeVariantId: h,
              humanReadableVariantMap: Zn,
              isLayoutTemplate: !0,
              primaryVariantId: `WAqfGk0eZ`,
              variantClassNames: Kn,
            },
            children: v(k, {
              id: u ?? a,
              children: [
                f(Qn, {
                  value: `:root body { background: var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20)); }`,
                }),
                v(D.div, {
                  ...m,
                  className: F(_, `framer-r1djl0`, l),
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...c },
                  children: [
                    f(V, {
                      height: 88,
                      width: `100vw`,
                      y: 0,
                      children: f(Te, {
                        className: `framer-16tjs7g-container`,
                        layoutScroll: !0,
                        nodeId: `h4ix18byU`,
                        scopeId: `E180Q8wkM`,
                        children: f(Oe, {
                          breakpoint: h,
                          overrides: {
                            kfkewWQ13: { variant: Q(`lmH4ln2tp`) },
                            Ujb7grcPk: { variant: Q(`CeBbQqx3D`) },
                          },
                          children: f(J, {
                            height: `100%`,
                            id: `h4ix18byU`,
                            layoutId: `h4ix18byU`,
                            style: { width: `100%` },
                            variant: Q(`SPmUnEjng`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    p,
                    f(`div`, { className: `framer-1c39r2j` }),
                    f(V, {
                      height: 1141,
                      width: `100vw`,
                      y: 1e3,
                      children: f(Te, {
                        className: `framer-mi3nri-container`,
                        nodeId: `pe0y0Yd0X`,
                        scopeId: `E180Q8wkM`,
                        children: f(Oe, {
                          breakpoint: h,
                          overrides: {
                            kfkewWQ13: { variant: Q(`EhIyzGlUr`) },
                            Ujb7grcPk: { variant: Q(`N9lGTOgMs`) },
                          },
                          children: f(Z, {
                            height: `100%`,
                            id: `pe0y0Yd0X`,
                            layoutId: `pe0y0Yd0X`,
                            style: { width: `100%` },
                            variant: Q(`o1o3SFPZp`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (tr = (e) =>
        e === xe.canvas || e === xe.export
          ? [
              ...Yn,
              ...Jn.flatMap((e) => {
                let t = qn[e];
                return qn[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Yn, ...Jn.map((e) => `@media ${Xn[e]} { ${qn[e].join(` `)} }`)]),
      (nr = R(er, tr, `framer-rCowG`)),
      (nr.displayName = `Main Template`),
      (nr.defaultProps = { height: 1500, width: 1440 }),
      H(nr, [{ explicitInter: !0, fonts: [] }, ...Hn, ...Un], { supportsExplicitInterCodegen: !0 }),
      (nr.loader = { load: (e, t) => (t.locale, Promise.allSettled([M(J, {}, t), M(Z, {}, t)])) }));
  });
function ir({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `jMyy_gvks`:
      return w(nr, { ...i, key: `MainTemplate`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function ar(e) {
  switch (e) {
    case `augiA20Il`:
    case `jMyy_gvks`:
      return [
        { hash: `1uvquya`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `shyklk`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` },
        { hash: `r1djl0`, mediaQuery: `(min-width: 1440px)` },
      ];
    default:
      return;
  }
}
async function or({ routeId: e, pathVariables: t, localeId: n, collectionItemId: i }) {
  let a = $[e].page.preload();
  ke({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    privateRouterReplaceState: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let u = w(ge, {
    children: w(Ee, {
      children: w(ve, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        routes: $,
        collectionUtils: ur,
        framerSiteId: dr,
        notFoundPage: ue(
          () => import(`./DW6Mqnq5LupUuhVjZPWxQdzZZy8aAfoIRZzIlNi9qIc.Btii5pdn.mjs`)
        ),
        isReducedMotion: void 0,
        localeId: n,
        locales: lr,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://heartwarming-version-323581.framer.app`,
        EditorBar:
          l === void 0
            ? void 0
            : (() => {
                if (pr) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return ue(async () => {
                  l.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: se, useLocaleInfo: z, useRouter: me },
                    react: {
                      createElement: w,
                      Fragment: s,
                      memo: m,
                      useCallback: g,
                      useEffect: o,
                      useRef: r,
                      useState: c,
                      useLayoutEffect: E,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(`init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: ir,
        loadSnippetsModule: new Ce(
          () => import(`./8TsFL-DmNUNOLlZegQfO0C_Ic7B-U1_bNiMzIpr1nt8.dObCGW41.mjs`)
        ),
        initialCollectionItemId: i,
      }),
    }),
    value: { routes: {} },
  });
  return (await a, u);
}
function sr() {
  fr && l.__framer_events.push(arguments);
}
async function cr(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || l.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    sr(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = ie($, r)));
    else {
      ie($, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = ce($, decodeURIComponent(location.pathname), !0, lr);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = or({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    l !== void 0 &&
      (async () => {
        let e = $[r],
          t = lr.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && ur) {
          let r = await ur[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          u = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          l.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: dr,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: l.location.href,
              hostname: l.location.hostname || null,
              pathname: l.location.pathname || null,
              hash: l.location.hash || null,
              search: l.location.search || null,
              timezone: c,
              locale: u,
            },
            `eager`,
          ]),
          await we({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let d = await c;
    e
      ? (ye(`framer-rewrite-breakpoints`, () => {
          (ae(o), l.__framer_onRewriteBreakpoints?.(o));
        }),
        (pr ? (e) => e() : u)(() => {
          (le(), fe(), C(t, d, { onRecoverableError: n }));
        }))
      : S(t, { onRecoverableError: n }).render(d);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var $, lr, ur, dr, fr, pr;
e(() => {
  if (
    (i(),
    j(),
    n(),
    d(),
    b(),
    rr(),
    ($ = {
      augiA20Il: {
        elements: { PSSTNTYbx: `projects`, z5mBxg2cw: `skills` },
        page: ue(() => import(`./EWQ6kgFmcP_hfC-FM9PqZFAYdeXmZ96Ns3uTzQy3eNY.D90bKpEi.mjs`)),
        path: `/`,
      },
      jMyy_gvks: {
        elements: {},
        page: ue(() => import(`./DW6Mqnq5LupUuhVjZPWxQdzZZy8aAfoIRZzIlNi9qIc.Btii5pdn.mjs`)),
        path: `/404`,
      },
    }),
    (lr = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (ur = {}),
    (dr = `3b05268460e4f22aa0d985a522fa630ead8b368347b4245b5c35f367214461ca`),
    (fr = typeof document < `u`),
    (pr = fr && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(a.userAgent)),
    fr)
  ) {
    ((l.__framer_importFromPackage = (e, t) => () =>
      w(Se, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (l.__framer_events = l.__framer_events || []),
      Fe());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? cr(!0, e) : cr(!1, e);
  }
  (function () {
    fr &&
      u(() => {
        C(
          document.getElementById(`__framer-badge-container`),
          w(y, {}, w(ee(() => import(`./PX9hIOIVM.fxqFMrdH.mjs`))))
        );
      });
  })();
})();
export { ar as getLayoutTemplateBreakpoints, or as getPageRoot };
//# sourceMappingURL=script_main.CZ4ws82q.mjs.map
