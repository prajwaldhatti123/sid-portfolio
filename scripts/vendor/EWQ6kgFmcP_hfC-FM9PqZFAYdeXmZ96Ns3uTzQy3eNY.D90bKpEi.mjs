import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  M as a,
  N as o,
  O as s,
  R as c,
  c as l,
  f as u,
  g as d,
  k as f,
  l as p,
  o as m,
  s as h,
  v as g,
  w as _,
} from "./react.D20wc1Tc.mjs";
import { C as v, a as y, r as b, t as x } from "./motion.BKNsybgV.mjs";
import {
  $ as S,
  B as C,
  D as w,
  E as ee,
  F as T,
  N as E,
  P as D,
  S as O,
  T as k,
  Z as A,
  _ as j,
  a as te,
  at as ne,
  b as M,
  ct as N,
  dt as P,
  et as re,
  g as ie,
  it as ae,
  n as oe,
  nt as F,
  p as I,
  pt as se,
  r as L,
  rt as ce,
  s as le,
  st as R,
  t as z,
  tt as ue,
  u as de,
  ut as B,
  v as V,
  x as H,
  y as fe,
} from "./framer.DGYw1Xvc.mjs";
import {
  A as pe,
  C as me,
  D as he,
  E as ge,
  O as _e,
  S as ve,
  T as ye,
  _ as be,
  b as xe,
  d as Se,
  f as Ce,
  g as we,
  h as Te,
  k as Ee,
  l as De,
  m as Oe,
  o as ke,
  p as Ae,
  s as je,
  u as Me,
  v as Ne,
  w as Pe,
  x as Fe,
  y as Ie,
} from "./shared-lib.Bgsjf9r1.mjs";
function Le(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function Re(e, t, n) {
  return (1 - n) * e + n * t;
}
function ze(e, t, n, r) {
  return Re(e, t, 1 - Math.exp(-n * r));
}
function Be(e, t) {
  return ((e % t) + t) % t;
}
function Ve(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
function He(e, t) {
  return e === 1 ? qe : e === 2 ? t : 1;
}
var Ue,
  We,
  Ge,
  Ke,
  qe,
  U,
  Je,
  Ye,
  Xe,
  Ze = e(() => {
    (i(),
      (Ue = `1.3.23`),
      (We = class {
        isRunning = !1;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        lerp;
        duration;
        easing;
        onUpdate;
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let n = Le(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = ze(this.value, this.to, this.lerp * 60, e)),
                Math.round(this.value) === Math.round(this.to) &&
                  ((this.value = this.to), (t = !0)))
              : ((this.value = this.to), (t = !0));
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (Ge = class {
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = Ve(this.resize, r)),
              this.wrapper instanceof Window
                ? c.addEventListener(`resize`, this.debouncedResize)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === c &&
              this.debouncedResize &&
              c.removeEventListener(`resize`, this.debouncedResize));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = c.innerWidth), (this.height = c.innerHeight))
            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (Ke = class {
        events = {};
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t);
        }
        on(e, t) {
          return (
            this.events[e] ? this.events[e].push(t) : (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (qe = 100 / 6),
      (U = { passive: !1 }),
      (Je = class {
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new Ke();
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          ((this.element = e),
            (this.options = t),
            c.addEventListener(`resize`, this.onWindowResize),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, U),
            this.element.addEventListener(`touchstart`, this.onTouchStart, U),
            this.element.addEventListener(`touchmove`, this.onTouchMove, U),
            this.element.addEventListener(`touchend`, this.onTouchEnd, U));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            c.removeEventListener(`resize`, this.onWindowResize),
            this.element.removeEventListener(`wheel`, this.onWheel, U),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, U),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, U),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, U));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
            r = -(t - this.touchStart.x) * this.options.touchMultiplier,
            i = -(n - this.touchStart.y) * this.options.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e,
            i = He(r, this.window.width),
            a = He(r, this.window.height);
          ((t *= i),
            (n *= a),
            (t *= this.options.wheelMultiplier),
            (n *= this.options.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          this.window = { width: c.innerWidth, height: c.innerHeight };
        };
      }),
      (Ye = (e) => Math.min(1, 1.001 - 2 ** (-10 * e))),
      (Xe = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        _rafId = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new We();
        emitter = new Ke();
        dimensions;
        virtualScroll;
        constructor({
          wrapper: e = c,
          content: t = document.documentElement,
          eventsTarget: n = e,
          smoothWheel: r = !0,
          syncTouch: i = !1,
          syncTouchLerp: a = 0.075,
          touchInertiaExponent: o = 1.7,
          duration: s,
          easing: l,
          lerp: u = 0.1,
          infinite: d = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = f === `horizontal` ? `both` : `vertical`,
          touchMultiplier: m = 1,
          wheelMultiplier: h = 1,
          autoResize: g = !0,
          prevent: _,
          virtualScroll: v,
          overscroll: y = !0,
          autoRaf: b = !1,
          anchors: x = !1,
          autoToggle: S = !1,
          allowNestedScroll: C = !1,
          __experimental__naiveDimensions: w = !1,
          naiveDimensions: ee = w,
          stopInertiaOnNavigate: T = !1,
        } = {}) {
          ((c.lenisVersion = Ue),
            (c.lenis ||= {}),
            (c.lenis.version = Ue),
            f === `horizontal` && (c.lenis.horizontal = !0),
            i === !0 && (c.lenis.touch = !0),
            (!e || e === document.documentElement) && (e = c),
            typeof s == `number` && typeof l != `function`
              ? (l = Ye)
              : typeof l == `function` && typeof s != `number` && (s = 1),
            (this.options = {
              wrapper: e,
              content: t,
              eventsTarget: n,
              smoothWheel: r,
              syncTouch: i,
              syncTouchLerp: a,
              touchInertiaExponent: o,
              duration: s,
              easing: l,
              lerp: u,
              infinite: d,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: m,
              wheelMultiplier: h,
              autoResize: g,
              prevent: _,
              virtualScroll: v,
              overscroll: y,
              autoRaf: b,
              anchors: x,
              autoToggle: S,
              allowNestedScroll: C,
              naiveDimensions: ee,
              stopInertiaOnNavigate: T,
            }),
            (this.dimensions = new Ge(e, t, { autoResize: g })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll),
            this.options.wrapper.addEventListener(`scrollend`, this.onScrollEnd, { capture: !0 }),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.addEventListener(`click`, this.onClick),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown),
            (this.virtualScroll = new Je(n, { touchMultiplier: m, wheelMultiplier: h })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll),
            this.options.autoToggle &&
              (this.checkOverflow(),
              this.rootElement.addEventListener(`transitionend`, this.onTransitionEnd)),
            this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll),
            this.options.wrapper.removeEventListener(`scrollend`, this.onScrollEnd, {
              capture: !0,
            }),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.removeEventListener(`click`, this.onClick),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this._rafId && cancelAnimationFrame(this._rafId));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        onScrollEnd = (e) => {
          e instanceof CustomEvent ||
            ((this.isScrolling === `smooth` || this.isScrolling === !1) && e.stopPropagation());
        };
        dispatchScrollendEvent = () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent(`scrollend`, {
              bubbles: this.options.wrapper === c,
              detail: { lenisScrollEnd: !0 },
            })
          );
        };
        get overflow() {
          let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
          return getComputedStyle(this.rootElement)[e];
        }
        checkOverflow() {
          [`hidden`, `clip`].includes(this.overflow) ? this.internalStop() : this.internalStart();
        }
        onTransitionEnd = (e) => {
          e.propertyName?.includes(`overflow`) &&
            e.target === this.rootElement &&
            this.checkOverflow();
        };
        setScroll(e) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
            : this.options.wrapper.scrollTo({ top: e, behavior: `instant` });
        }
        onClick = (e) => {
          let t = e
              .composedPath()
              .filter((e) => e instanceof HTMLAnchorElement && e.href)
              .map((e) => new URL(e.href)),
            n = new URL(c.location.href);
          if (this.options.anchors) {
            let e = t.find((e) => n.host === e.host && n.pathname === e.pathname && e.hash);
            if (e) {
              let t =
                  typeof this.options.anchors == `object` && this.options.anchors
                    ? this.options.anchors
                    : void 0,
                n = `#${e.hash.split(`#`)[1]}`;
              this.scrollTo(n, t);
              return;
            }
          }
          if (
            this.options.stopInertiaOnNavigate &&
            t.some((e) => n.host === e.host && n.pathname !== e.pathname)
          ) {
            this.reset();
            return;
          }
        };
        onPointerDown = (e) => {
          e.button === 1 && this.reset();
        };
        onVirtualScroll = (e) => {
          if (
            typeof this.options.virtualScroll == `function` &&
            this.options.virtualScroll(e) === !1
          )
            return;
          let { deltaX: t, deltaY: n, event: r } = e;
          if (
            (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          let i = r.type.includes(`touch`),
            a = r.type.includes(`wheel`);
          this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
          let o = t === 0 && n === 0;
          if (
            this.options.syncTouch &&
            i &&
            r.type === `touchstart` &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          let s =
            (this.options.gestureOrientation === `vertical` && n === 0) ||
            (this.options.gestureOrientation === `horizontal` && t === 0);
          if (o || s) return;
          let l = r.composedPath();
          l = l.slice(0, l.indexOf(this.rootElement));
          let u = this.options.prevent,
            d = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`;
          if (
            l.find(
              (e) =>
                e instanceof HTMLElement &&
                ((typeof u == `function` && u?.(e)) ||
                  e.hasAttribute?.(`data-lenis-prevent`) ||
                  (d === `vertical` && e.hasAttribute?.(`data-lenis-prevent-vertical`)) ||
                  (d === `horizontal` && e.hasAttribute?.(`data-lenis-prevent-horizontal`)) ||
                  (i && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
                  (a && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
                  (this.options.allowNestedScroll &&
                    this.hasNestedScroll(e, { deltaX: t, deltaY: n })))
            )
          )
            return;
          if (this.isStopped || this.isLocked) {
            r.cancelable && r.preventDefault();
            return;
          }
          if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a))) {
            ((this.isScrolling = `native`), this.animate.stop(), (r.lenisStopPropagation = !0));
            return;
          }
          let f = n;
          (this.options.gestureOrientation === `both`
            ? (f = Math.abs(n) > Math.abs(t) ? n : t)
            : this.options.gestureOrientation === `horizontal` && (f = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== c &&
                this.limit > 0 &&
                ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && n > 0) ||
                  (this.animatedScroll === this.limit && n < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.cancelable && r.preventDefault());
          let p = i && this.options.syncTouch,
            m = i && r.type === `touchend`;
          (m && (f = Math.sign(f) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
            this.scrollTo(this.targetScroll + f, {
              programmatic: !1,
              ...(p
                ? { lerp: m ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }));
        };
        resize() {
          (this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit());
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        onNativeScroll = () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === `native`) {
            let e = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.isStopped || (this.isScrolling = `native`),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        };
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          if (this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.removeProperty(`overflow`);
              return;
            }
            this.internalStart();
          }
        }
        internalStart() {
          this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
        }
        stop() {
          if (!this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.setProperty(`overflow`, `clip`);
              return;
            }
            this.internalStop();
          }
        }
        internalStop() {
          this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
        }
        raf = (e) => {
          let t = e - (this.time || e);
          ((this.time = e),
            this.animate.advance(t * 0.001),
            this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
        };
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            programmatic: i = !0,
            lerp: a = i ? this.options.lerp : void 0,
            duration: o = i ? this.options.duration : void 0,
            easing: s = i ? this.options.easing : void 0,
            onStart: l,
            onComplete: u,
            force: d = !1,
            userData: f,
          } = {}
        ) {
          if ((this.isStopped || this.isLocked) && !d) return;
          let p = e,
            m = t;
          if (typeof p == `string` && [`top`, `left`, `start`, `#`].includes(p)) p = 0;
          else if (typeof p == `string` && [`bottom`, `right`, `end`].includes(p)) p = this.limit;
          else {
            let e = null;
            if (
              (typeof p == `string`
                ? ((e = document.querySelector(p)),
                  e || (p === `#top` ? (p = 0) : console.warn(`Lenis: Target not found`, p)))
                : p instanceof HTMLElement && p?.nodeType && (e = p),
              e)
            ) {
              if (this.options.wrapper !== c) {
                let e = this.rootElement.getBoundingClientRect();
                m -= this.isHorizontal ? e.left : e.top;
              }
              let t = e.getBoundingClientRect(),
                n = getComputedStyle(e),
                r = this.isHorizontal
                  ? Number.parseFloat(n.scrollMarginLeft)
                  : Number.parseFloat(n.scrollMarginTop),
                i = getComputedStyle(this.rootElement),
                a = this.isHorizontal
                  ? Number.parseFloat(i.scrollPaddingLeft)
                  : Number.parseFloat(i.scrollPaddingTop);
              p =
                (this.isHorizontal ? t.left : t.top) +
                this.animatedScroll -
                (Number.isNaN(r) ? 0 : r) -
                (Number.isNaN(a) ? 0 : a);
            }
          }
          if (typeof p == `number`) {
            if (((p += m), this.options.infinite)) {
              if (i) {
                this.targetScroll = this.animatedScroll = this.scroll;
                let e = p - this.animatedScroll;
                e > this.limit / 2 ? (p -= this.limit) : e < -this.limit / 2 && (p += this.limit);
              }
            } else p = Le(0, p, this.limit);
            if (p === this.targetScroll) {
              (l?.(this), u?.(this));
              return;
            }
            if (((this.userData = f ?? {}), n)) {
              ((this.animatedScroll = this.targetScroll = p),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                u?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }));
              return;
            }
            (i || (this.targetScroll = p),
              typeof o == `number` && typeof s != `function`
                ? (s = Ye)
                : typeof s == `function` && typeof o != `number` && (o = 1),
              this.animate.fromTo(this.animatedScroll, p, {
                duration: o,
                easing: s,
                lerp: a,
                onStart: () => {
                  (r && (this.isLocked = !0), (this.isScrolling = `smooth`), l?.(this));
                },
                onUpdate: (e, t) => {
                  ((this.isScrolling = `smooth`),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = e - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = e),
                    this.setScroll(this.scroll),
                    i && (this.targetScroll = e),
                    t || this.emit(),
                    t &&
                      (this.reset(),
                      this.emit(),
                      u?.(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent()));
                },
              }));
          }
        }
        preventNextNativeScrollEvent() {
          ((this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            }));
        }
        hasNestedScroll(e, { deltaX: t, deltaY: n }) {
          let r = Date.now();
          e._lenis ||= {};
          let i = e._lenis,
            a,
            o,
            s,
            l,
            u,
            d,
            f,
            p,
            m,
            h;
          if (r - (i.time ?? 0) > 2e3) {
            i.time = Date.now();
            let t = c.getComputedStyle(e);
            if (
              ((i.computedStyle = t),
              (a = [`auto`, `overlay`, `scroll`].includes(t.overflowX)),
              (o = [`auto`, `overlay`, `scroll`].includes(t.overflowY)),
              (u = [`auto`].includes(t.overscrollBehaviorX)),
              (d = [`auto`].includes(t.overscrollBehaviorY)),
              (i.hasOverflowX = a),
              (i.hasOverflowY = o),
              !(a || o))
            )
              return !1;
            ((f = e.scrollWidth),
              (p = e.scrollHeight),
              (m = e.clientWidth),
              (h = e.clientHeight),
              (s = f > m),
              (l = p > h),
              (i.isScrollableX = s),
              (i.isScrollableY = l),
              (i.scrollWidth = f),
              (i.scrollHeight = p),
              (i.clientWidth = m),
              (i.clientHeight = h),
              (i.hasOverscrollBehaviorX = u),
              (i.hasOverscrollBehaviorY = d));
          } else
            ((s = i.isScrollableX),
              (l = i.isScrollableY),
              (a = i.hasOverflowX),
              (o = i.hasOverflowY),
              (f = i.scrollWidth),
              (p = i.scrollHeight),
              (m = i.clientWidth),
              (h = i.clientHeight),
              (u = i.hasOverscrollBehaviorX),
              (d = i.hasOverscrollBehaviorY));
          if (!((a && s) || (o && l))) return !1;
          let g = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`,
            _,
            v,
            y,
            b,
            x,
            S;
          if (g === `horizontal`)
            ((_ = Math.round(e.scrollLeft)), (v = f - m), (y = t), (b = a), (x = s), (S = u));
          else if (g === `vertical`)
            ((_ = Math.round(e.scrollTop)), (v = p - h), (y = n), (b = o), (x = l), (S = d));
          else return !1;
          return (!S && (_ >= v || _ <= 0)) || ((y > 0 ? _ < v : _ > 0) && b && x);
        }
        get rootElement() {
          return this.options.wrapper === c ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          let e = this.options.wrapper;
          return this.isHorizontal ? (e.scrollX ?? e.scrollLeft) : (e.scrollY ?? e.scrollTop);
        }
        get scroll() {
          return this.options.infinite ? Be(this.animatedScroll, this.limit) : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(e) {
          this._isScrolling !== e && ((this._isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(e) {
          this._isStopped !== e && ((this._isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(e) {
          this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.options.autoToggle && (e += ` lenis-autoToggle`),
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            this.className.split(` `).forEach((e) => {
              this.rootElement.classList.add(e);
            }));
        }
        cleanUpClassName() {
          for (let e of Array.from(this.rootElement.classList))
            (e === `lenis` || e.startsWith(`lenis-`)) && this.rootElement.classList.remove(e);
        }
      }));
  });
function Qe(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
function $e(e) {
  (getComputedStyle(e).position === `sticky` &&
    (e.style.setProperty(`position`, `static`), (e.dataset.sticky = `true`)),
    e.offsetParent && $e(e.offsetParent));
}
function et(e) {
  (e?.dataset?.sticky === `true` && (e.style.removeProperty(`position`), delete e.dataset.sticky),
    e.offsetParent && et(e.offsetParent));
}
function tt(e, t = 0) {
  let n = t + e.offsetTop;
  return e.offsetParent ? tt(e.offsetParent, n) : n;
}
function nt(e, t = 0) {
  let n = t + e.offsetLeft;
  return e.offsetParent ? nt(e.offsetParent, n) : n;
}
function rt(e, t = 0) {
  let n = t + e.scrollTop;
  return e.offsetParent ? rt(e.offsetParent, n) : n + c.scrollY;
}
function it(e, t = 0) {
  let n = t + e.scrollLeft;
  return e.offsetParent ? it(e.offsetParent, n) : n + c.scrollX;
}
function at() {
  return st++;
}
var ot,
  st,
  ct,
  lt = e(() => {
    (i(),
      (ot = class {
        element;
        options;
        align;
        rect = {};
        wrapperResizeObserver;
        resizeObserver;
        debouncedWrapperResize;
        constructor(
          e,
          { align: t = [`start`], ignoreSticky: n = !0, ignoreTransform: r = !1 } = {}
        ) {
          ((this.element = e),
            (this.options = { align: t, ignoreSticky: n, ignoreTransform: r }),
            (this.align = [t].flat()),
            (this.debouncedWrapperResize = Qe(this.onWrapperResize, 500)),
            (this.wrapperResizeObserver = new ResizeObserver(this.debouncedWrapperResize)),
            this.wrapperResizeObserver.observe(document.body),
            this.onWrapperResize(),
            (this.resizeObserver = new ResizeObserver(this.onResize)),
            this.resizeObserver.observe(this.element),
            this.setRect({ width: this.element.offsetWidth, height: this.element.offsetHeight }));
        }
        destroy() {
          (this.wrapperResizeObserver.disconnect(), this.resizeObserver.disconnect());
        }
        setRect({ top: e, left: t, width: n, height: r, element: i } = {}) {
          ((e ??= this.rect.top),
            (t ??= this.rect.left),
            (n ??= this.rect.width),
            (r ??= this.rect.height),
            (i ??= this.rect.element),
            !(
              e === this.rect.top &&
              t === this.rect.left &&
              n === this.rect.width &&
              r === this.rect.height &&
              i === this.rect.element
            ) &&
              ((this.rect.top = e),
              (this.rect.y = e),
              (this.rect.width = n),
              (this.rect.height = r),
              (this.rect.left = t),
              (this.rect.x = t),
              (this.rect.bottom = e + r),
              (this.rect.right = t + n)));
        }
        onWrapperResize = () => {
          let e, t;
          if ((this.options.ignoreSticky && $e(this.element), this.options.ignoreTransform))
            ((e = tt(this.element)), (t = nt(this.element)));
          else {
            let n = this.element.getBoundingClientRect();
            ((e = n.top + rt(this.element)), (t = n.left + it(this.element)));
          }
          (this.options.ignoreSticky && et(this.element), this.setRect({ top: e, left: t }));
        };
        onResize = ([e]) => {
          if (!e?.borderBoxSize[0]) return;
          let t = e.borderBoxSize[0].inlineSize,
            n = e.borderBoxSize[0].blockSize;
          this.setRect({ width: t, height: n });
        };
      }),
      (st = 0),
      (ct = class {
        options;
        elements = new Map();
        snaps = new Map();
        viewport = { width: c.innerWidth, height: c.innerHeight };
        isStopped = !1;
        onSnapDebounced;
        currentSnapIndex;
        constructor(
          e,
          {
            type: t = `proximity`,
            lerp: n,
            easing: r,
            duration: i,
            distanceThreshold: a = `50%`,
            debounce: o = 500,
            onSnapStart: s,
            onSnapComplete: l,
          } = {}
        ) {
          ((this.lenis = e),
            (c.lenis ||= {}),
            (c.lenis.snap = !0),
            (this.options = {
              type: t,
              lerp: n,
              easing: r,
              duration: i,
              distanceThreshold: a,
              debounce: o,
              onSnapStart: s,
              onSnapComplete: l,
            }),
            this.onWindowResize(),
            c.addEventListener(`resize`, this.onWindowResize),
            (this.onSnapDebounced = Qe(this.onSnap, this.options.debounce)),
            this.lenis.on(`virtual-scroll`, this.onSnapDebounced));
        }
        destroy() {
          (this.lenis.off(`virtual-scroll`, this.onSnapDebounced),
            c.removeEventListener(`resize`, this.onWindowResize),
            this.elements.forEach((e) => {
              e.destroy();
            }));
        }
        start() {
          this.isStopped = !1;
        }
        stop() {
          this.isStopped = !0;
        }
        add(e) {
          let t = at();
          return (this.snaps.set(t, { value: e }), () => this.snaps.delete(t));
        }
        addElement(e, t = {}) {
          let n = at();
          return (this.elements.set(n, new ot(e, t)), () => this.elements.delete(n));
        }
        addElements(e, t = {}) {
          let n = [...e].map((e) => this.addElement(e, t));
          return () => {
            n.forEach((e) => {
              e();
            });
          };
        }
        onWindowResize = () => {
          ((this.viewport.width = c.innerWidth), (this.viewport.height = c.innerHeight));
        };
        computeSnaps = () => {
          let { isHorizontal: e } = this.lenis,
            t = [...this.snaps.values()];
          return (
            this.elements.forEach(({ rect: n, align: r }) => {
              let i;
              r.forEach((r) => {
                (r === `start`
                  ? (i = n.top)
                  : r === `center`
                    ? (i = e
                        ? n.left + n.width / 2 - this.viewport.width / 2
                        : n.top + n.height / 2 - this.viewport.height / 2)
                    : r === `end` &&
                      (i = e
                        ? n.left + n.width - this.viewport.width
                        : n.top + n.height - this.viewport.height),
                  typeof i == `number` && t.push({ value: Math.ceil(i) }));
              });
            }),
            (t = t.sort((e, t) => Math.abs(e.value) - Math.abs(t.value))),
            t
          );
        };
        previous() {
          this.goTo((this.currentSnapIndex ?? 0) - 1);
        }
        next() {
          this.goTo((this.currentSnapIndex ?? 0) + 1);
        }
        goTo(e) {
          let t = this.computeSnaps();
          if (t.length === 0) return;
          this.currentSnapIndex = Math.max(0, Math.min(e, t.length - 1));
          let n = t[this.currentSnapIndex];
          n !== void 0 &&
            this.lenis.scrollTo(n.value, {
              duration: this.options.duration,
              easing: this.options.easing,
              lerp: this.options.lerp,
              lock: this.options.type === `lock`,
              userData: { initiator: `snap` },
              onStart: () => {
                this.options.onSnapStart?.({ index: this.currentSnapIndex, ...n });
              },
              onComplete: () => {
                this.options.onSnapComplete?.({ index: this.currentSnapIndex, ...n });
              },
            });
        }
        get distanceThreshold() {
          let e = 1 / 0;
          if (this.options.type === `mandatory`) return 1 / 0;
          let { isHorizontal: t } = this.lenis,
            n = t ? `width` : `height`;
          return (
            (e =
              typeof this.options.distanceThreshold == `string` &&
              this.options.distanceThreshold.endsWith(`%`)
                ? (Number(this.options.distanceThreshold.replace(`%`, ``)) / 100) * this.viewport[n]
                : typeof this.options.distanceThreshold == `number`
                  ? this.options.distanceThreshold
                  : this.viewport[n]),
            e
          );
        }
        onSnap = (e) => {
          if (
            this.isStopped ||
            e.event.type === `touchmove` ||
            (this.options.type === `lock` && this.lenis.userData?.initiator === `snap`)
          )
            return;
          let { scroll: t, isHorizontal: n } = this.lenis,
            r = n ? e.deltaX : e.deltaY;
          t = Math.ceil(this.lenis.scroll + r);
          let i = this.computeSnaps();
          if (i.length === 0) return;
          let a,
            o = i.findLastIndex(({ value: e }) => e < t),
            s = i.findIndex(({ value: e }) => e > t);
          if (this.options.type === `lock`) r > 0 ? (a = s) : r < 0 && (a = o);
          else {
            let e = i[o],
              n = e ? Math.abs(t - e.value) : 1 / 0,
              r = i[s];
            a = n < (r ? Math.abs(t - r.value) : 1 / 0) ? o : s;
          }
          if (a === void 0 || a === -1) return;
          a = Math.max(0, Math.min(a, i.length - 1));
          let c = i[a];
          Math.abs(t - c.value) <= this.distanceThreshold && this.goTo(a);
        };
        resize() {
          this.elements.forEach((e) => {
            e.onWrapperResize();
          });
        }
      }));
  });
function ut({ smooth: e, infinite: t, orientation: n, intensity: i, children: o, snap: d }) {
  let f = r(),
    m = r(),
    g = r();
  return (
    a(() => {
      if (o && (!f.current || !m.current)) return;
      f.current &&
        m.current &&
        (n === `horizontal`
          ? f.current.style.setProperty(`overflowX`, `auto`)
          : f.current.style.setProperty(`overflowY`, `auto`));
      let r = new Xe({
        smoothWheel: e,
        infinite: t,
        orientation: n,
        gestureOrientation: n === `horizontal` ? `both` : `vertical`,
        autoRaf: !0,
        autoToggle: !0,
        anchors: !0,
        allowNestedScroll: !0,
        wrapper: f.current,
        content: m.current,
        syncTouch: !!t || n === `horizontal`,
        stopInertiaOnNavigate: !0,
      });
      g.current = r;
      let i;
      return (
        d &&
          d.snaps.length > 0 &&
          ((i = new ct(r, { type: d.type, distanceThreshold: d.threshold + `%` })),
          d.snaps.forEach((e) => {
            if (!e.target?.current) return;
            let t = e.target.current.id;
            document.querySelectorAll(`#${t}`).forEach((t) => {
              i.addElement(t, { align: e.align });
            });
          })),
        (c.lenis = r),
        (c.lenisSnap = d),
        () => {
          (r && r.destroy(), i && i.destroy());
        }
      );
    }, [e, t, n, i, o, d]),
    p(h, {
      children: [
        l(`link`, { href: `../../assets/misc/lenis.css`, rel: `stylesheet` }),
        o &&
          l(h, {
            children: l(`div`, {
              ref: f,
              style:
                n === `horizontal`
                  ? { overflowX: `auto`, width: `100%` }
                  : { overflowY: `auto`, height: `100%` },
              children: l(`div`, {
                ref: m,
                style: { width: `100%` },
                children: _.map(o, (e) =>
                  u(e) ? s(e, { style: { ...e.props.style, width: `100%` } }) : e
                ),
              }),
            }),
          }),
      ],
    })
  );
}
var dt = e(() => {
    (i(),
      m(),
      C(),
      Ze(),
      lt(),
      n(),
      (ut.displayName = `Lenis`),
      O(ut, {
        smooth: { type: L.Boolean, title: `Smooth`, defaultValue: !0 },
        intensity: {
          type: L.Number,
          title: `Intensity`,
          defaultValue: 12,
          step: 1,
          min: 1,
          max: 100,
          hidden(e) {
            return e.smooth === !1;
          },
          description: `This will be ignored on mobile.`,
        },
        infinite: {
          type: L.Boolean,
          title: `Infinite`,
          defaultValue: !1,
          hidden(e) {
            return e.smooth === !1;
          },
        },
        orientation: {
          type: L.Enum,
          defaultValue: `Vertical`,
          displaySegmentedControl: !0,
          options: [`vertical`, `horizontal`],
          optionTitles: [`Vertical`, `Horizontal`],
          hidden(e) {
            return e.smooth === !1;
          },
        },
        children: { type: L.ComponentInstance, title: `Content` },
        snap: {
          type: L.Object,
          optional: !0,
          description: `Cooked and served by [darkroom.engineering](https://darkroom.engineering).`,
          controls: {
            type: {
              type: L.Enum,
              defaultValue: `proximity`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              options: [`proximity`, `mandatory`, `lock`],
              optionTitles: [`Proximity`, `Mandatory`, `Lock`],
            },
            threshold: {
              type: L.Number,
              defaultValue: 50,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => e.snap.type === `mandatory`,
            },
            snaps: {
              type: L.Array,
              control: {
                type: L.Object,
                controls: {
                  target: { title: `Target`, type: L.ScrollSectionRef },
                  align: {
                    type: L.Enum,
                    defaultValue: `center`,
                    displaySegmentedControl: !0,
                    segmentedControlDirection: `horizontal`,
                    options: [`start`, `center`, `end`],
                    optionIcons: [`align-top`, `align-middle`, `align-bottom`],
                  },
                },
              },
            },
          },
        },
      }));
  }),
  ft,
  pt,
  mt,
  ht = e(() => {
    (C(),
      ee.loadFonts([`FS;Manrope-light`, `FS;Manrope-regular`]),
      (ft = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/2W7RU2QRQHEAEGUDZDHBPHR6WI27JNIQ.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/UXO4O7K2G3HI3D2VKD7UXVJVJD26P4BQ.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (pt = [
        `.framer-bxB6A .framer-styles-preset-16e2ega:not(.rich-text-wrapper), .framer-bxB6A .framer-styles-preset-16e2ega.rich-text-wrapper h3 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (mt = `framer-bxB6A`));
  });
function gt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  W,
  Ot = e(() => {
    (m(),
      C(),
      x(),
      n(),
      pe(),
      (_t = { EwUIdUwEl: { hover: !0 }, YCL_MIUZN: { hover: !0 } }),
      (vt = [`EwUIdUwEl`, `YCL_MIUZN`]),
      (yt = `framer-i3vEv`),
      (bt = { EwUIdUwEl: `framer-v-t2exk4`, YCL_MIUZN: `framer-v-4cbcma` }),
      (xt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (St = (e, t) => `translateX(-50%) ${t}`),
      (Ct = ({ value: e, children: n }) => {
        let r = f(y),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(y.Provider, { value: a, children: n });
      }),
      (wt = { default: `EwUIdUwEl`, mini: `YCL_MIUZN` }),
      (Tt = v.create(o)),
      (Et = ({
        height: e,
        id: t,
        link: n,
        newTab: r,
        smoothScroll: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        EpZv_SBIe: r ?? s.EpZv_SBIe,
        ixpAZVixF: n ?? s.ixpAZVixF,
        Q3I4lSTCG: a ?? s.Q3I4lSTCG ?? `See my works`,
        r0Dv1RORR: i ?? s.r0Dv1RORR ?? !0,
        variant: wt[s.variant] ?? s.variant ?? `EwUIdUwEl`,
      })),
      (Dt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = N(
        d(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = g(),
            { activeLocale: s, setLocale: c } = F();
          A();
          let {
              style: u,
              className: d,
              layoutId: f,
              variant: m,
              Q3I4lSTCG: h,
              ixpAZVixF: _,
              EpZv_SBIe: y,
              r0Dv1RORR: x,
              ...S
            } = Et(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: ee,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: te,
              variants: ne,
            } = R({
              cycleOrder: vt,
              defaultVariant: `EwUIdUwEl`,
              enabledGestures: _t,
              ref: i,
              variant: m,
              variantClassNames: bt,
            }),
            M = Dt(e, ne),
            N = k(yt, he);
          return l(b, {
            id: f ?? a,
            children: l(Tt, {
              animate: ne,
              initial: !1,
              children: l(Ct, {
                value: xt,
                children: l(de, {
                  href: _,
                  motionChild: !0,
                  nodeId: `EwUIdUwEl`,
                  openInNewTab: y,
                  scopeId: `NUKu0gTVk`,
                  smoothScroll: x,
                  children: l(v.a, {
                    ...S,
                    ...T,
                    className: `${k(N, `framer-t2exk4`, d, w)} framer-1nclwrt`,
                    "data-border": !0,
                    "data-framer-name": `default`,
                    layoutDependency: M,
                    layoutId: `EwUIdUwEl`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-946e90e4-2067-4589-ada2-c429962b0f4a, rgb(255, 255, 255))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      borderBottomLeftRadius: 80,
                      borderBottomRightRadius: 80,
                      borderTopLeftRadius: 80,
                      borderTopRightRadius: 80,
                      ...u,
                    },
                    ...gt(
                      {
                        "EwUIdUwEl-hover": { "data-framer-name": void 0 },
                        "YCL_MIUZN-hover": { "data-framer-name": void 0 },
                        YCL_MIUZN: { "data-framer-name": `mini` },
                      },
                      C,
                      E
                    ),
                    children: p(v.div, {
                      className: `framer-8eojmm`,
                      "data-framer-name": `Container`,
                      layoutDependency: M,
                      layoutId: `pM8e4oQnz`,
                      children: [
                        l(j, {
                          __fromCanvasComponent: !0,
                          children: l(o, {
                            children: l(v.p, {
                              className: `framer-styles-preset-1bfnqv2`,
                              "data-styles-preset": `w180HGT8R`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, rgb(255, 255, 255)))`,
                              },
                              children: `See my works`,
                            }),
                          }),
                          className: `framer-ia56te`,
                          "data-framer-name": `Text`,
                          fonts: [`Inter`],
                          layoutDependency: M,
                          layoutId: `LuMD54Zy5`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: h,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...gt({ "EwUIdUwEl-hover": { transformTemplate: St } }, C, E),
                        }),
                        l(j, {
                          __fromCanvasComponent: !0,
                          children: l(o, {
                            children: l(v.p, {
                              className: `framer-styles-preset-1bfnqv2`,
                              "data-styles-preset": `w180HGT8R`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, rgb(255, 255, 255)))`,
                              },
                              children: `See my works`,
                            }),
                          }),
                          className: `framer-1c5oyru`,
                          "data-framer-name": `Text`,
                          fonts: [`Inter`],
                          layoutDependency: M,
                          layoutId: `b5RVdIzRt`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: h,
                          transformTemplate: St,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...gt(
                            {
                              "EwUIdUwEl-hover": { transformTemplate: void 0 },
                              "YCL_MIUZN-hover": { transformTemplate: void 0 },
                            },
                            C,
                            E
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-i3vEv.framer-1nclwrt, .framer-i3vEv .framer-1nclwrt { display: block; }`,
          `.framer-i3vEv.framer-t2exk4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 12px 16px 12px 16px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-i3vEv .framer-8eojmm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-i3vEv .framer-ia56te { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-i3vEv .framer-1c5oyru { flex: none; height: auto; left: 49%; position: absolute; top: 50px; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-i3vEv.framer-v-4cbcma.framer-t2exk4 { padding: 8px 12px 8px 12px; }`,
          `.framer-i3vEv.framer-v-t2exk4.hover .framer-ia56te { bottom: 50px; left: 49%; position: absolute; z-index: 1; }`,
          `.framer-i3vEv.framer-v-t2exk4.hover .framer-1c5oyru, .framer-i3vEv.framer-v-4cbcma.hover .framer-1c5oyru { left: unset; position: relative; top: unset; }`,
          `.framer-i3vEv.framer-v-4cbcma.hover .framer-ia56te { bottom: 50px; left: 0px; position: absolute; z-index: 1; }`,
          ..._e,
          `.framer-i3vEv[data-border="true"]::after, .framer-i3vEv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-i3vEv`
      )),
      (W.displayName = `Secondary Button`),
      (W.defaultProps = { height: 46, width: 119 }),
      O(W, {
        variant: {
          options: [`EwUIdUwEl`, `YCL_MIUZN`],
          optionTitles: [`default`, `mini`],
          title: `Variant`,
          type: L.Enum,
        },
        Q3I4lSTCG: {
          defaultValue: `See my works`,
          displayTextArea: !1,
          title: `Title`,
          type: L.String,
        },
        onQ3I4lSTCGChange: { changes: `Q3I4lSTCG`, type: L.ChangeHandler },
        ixpAZVixF: { title: `Link`, type: L.Link },
        EpZv_SBIe: { defaultValue: !1, title: `New Tab`, type: L.Boolean },
        onEpZv_SBIeChange: { changes: `EpZv_SBIe`, type: L.ChangeHandler },
        r0Dv1RORR: { defaultValue: !0, title: `Smooth Scroll`, type: L.Boolean },
        onr0Dv1RORRChange: { changes: `r0Dv1RORR`, type: L.ChangeHandler },
      }),
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
          ...D(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  kt,
  At,
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
  Wt,
  Gt,
  G,
  Kt = e(() => {
    (m(),
      C(),
      x(),
      n(),
      xe(),
      ht(),
      Ot(),
      (kt = B(le)),
      (At = E(W)),
      (jt = B(v.div)),
      (Mt = `framer-Upe5A`),
      (Nt = { VcORrYv0g: `framer-v-zxq086` }),
      (Pt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ft = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (It = {
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
      (Lt = { bounce: 0, delay: 0.7, duration: 1.8, type: `spring` }),
      (Rt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        transition: Lt,
        x: 0,
        y: 0,
      }),
      (zt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 50,
      }),
      (Bt = { damping: 70, delay: 0, mass: 1, stiffness: 320, type: `spring` }),
      (Vt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ht = ({ value: e, children: n }) => {
        let r = f(y),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(y.Provider, { value: a, children: n });
      }),
      (Ut = v.create(o)),
      (Wt = ({ githubLink: e, height: t, id: n, image: r, text: i, title: a, width: o, ...s }) => ({
        ...s,
        ASRKczPa_: a ?? s.ASRKczPa_ ?? `CloudDesk`,
        FpcePnGXA: e ?? s.FpcePnGXA,
        OikHOW9Re: r ??
          s.OikHOW9Re ?? {
            alt: `Project Mockup`,
            pixelHeight: 4500,
            pixelWidth: 6e3,
            src: `https://framerusercontent.com/images/csQVul7Il1jEMGC9OH67JVGv28.png?width=6000&height=4500`,
            srcSet: `https://framerusercontent.com/images/csQVul7Il1jEMGC9OH67JVGv28.png?scale-down-to=512&width=6000&height=4500 512w,https://framerusercontent.com/images/csQVul7Il1jEMGC9OH67JVGv28.png?scale-down-to=1024&width=6000&height=4500 1024w,https://framerusercontent.com/images/csQVul7Il1jEMGC9OH67JVGv28.png?scale-down-to=2048&width=6000&height=4500 2048w,https://framerusercontent.com/images/csQVul7Il1jEMGC9OH67JVGv28.png?scale-down-to=4096&width=6000&height=4500 4096w,https://framerusercontent.com/images/csQVul7Il1jEMGC9OH67JVGv28.png?width=6000&height=4500 6000w`,
          },
        RuioiX8bO:
          i ??
          s.RuioiX8bO ??
          `A modern dashboard interface designed to help teams manage tasks, track progress, and collaborate seamlessly in real time.`,
      })),
      (Gt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = N(
        d(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = g(),
            { activeLocale: s, setLocale: c } = F(),
            u = A(),
            {
              style: d,
              className: f,
              layoutId: m,
              variant: h,
              ASRKczPa_: _,
              RuioiX8bO: y,
              FpcePnGXA: x,
              OikHOW9Re: S,
              ...C
            } = Wt(e),
            {
              baseVariant: w,
              classNames: ee,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: te,
              setGestureState: ne,
              setVariant: M,
              variants: N,
            } = R({ defaultVariant: `VcORrYv0g`, ref: i, variant: h, variantClassNames: Nt }),
            P = Gt(e, N),
            re = k(Mt, mt, be);
          return l(b, {
            id: m ?? a,
            children: l(Ut, {
              animate: N,
              initial: !1,
              children: l(Ht, {
                value: Pt,
                children: p(v.div, {
                  ...C,
                  ...D,
                  className: k(re, `framer-zxq086`, f, ee),
                  "data-framer-name": `Default`,
                  layoutDependency: P,
                  layoutId: `VcORrYv0g`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-2585ae86-e120-4353-80b8-1e0378448460, rgb(24, 24, 24))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...d,
                  },
                  children: [
                    l(v.div, {
                      className: `framer-1sf4beo`,
                      "data-framer-name": `Image Container`,
                      layoutDependency: P,
                      layoutId: `dgR_xEM9r`,
                      style: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                      children: l(kt, {
                        __framer__animate: { transition: Lt },
                        __framer__animateOnce: !1,
                        __framer__enter: It,
                        __framer__exit: Rt,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        background: {
                          alt: `Project Mockup`,
                          fit: `fill`,
                          intrinsicHeight: 4500,
                          intrinsicWidth: 6e3,
                          loading: T(
                            (u?.y || 0) + 8 + (((u?.height || 604) - 16 - 649.4) / 2 + 0 + 0) + 0
                          ),
                          pixelHeight: 4500,
                          pixelWidth: 6e3,
                          sizes: `calc(${u?.width || `100vw`} - 16px)`,
                          ...Ft(S),
                        },
                        className: `framer-u4zci1`,
                        layoutDependency: P,
                        layoutId: `kuUxx4Rf_`,
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                      }),
                    }),
                    p(jt, {
                      __framer__animate: { transition: Bt },
                      __framer__animateOnce: !0,
                      __framer__enter: zt,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-emowv5`,
                      "data-framer-name": `Details Wrapper`,
                      layoutDependency: P,
                      layoutId: `lWUsEpA7m`,
                      style: {
                        backgroundColor: `var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20))`,
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                      children: [
                        l(j, {
                          __fromCanvasComponent: !0,
                          children: l(o, {
                            children: l(v.h3, {
                              className: `framer-styles-preset-16e2ega`,
                              "data-styles-preset": `ntm5q97ZV`,
                              dir: `auto`,
                              children: `CloudDesk`,
                            }),
                          }),
                          className: `framer-yeukjt`,
                          fonts: [`Inter`],
                          layoutDependency: P,
                          layoutId: `NMZ0EtC5H`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        l(j, {
                          __fromCanvasComponent: !0,
                          children: l(o, {
                            children: l(v.p, {
                              className: `framer-styles-preset-13u21mt`,
                              "data-styles-preset": `DMtlcsvaj`,
                              dir: `auto`,
                              children: `A modern dashboard interface designed to help teams manage tasks, track progress, and collaborate seamlessly in real time.`,
                            }),
                          }),
                          className: `framer-1xhzmm3`,
                          fonts: [`Inter`],
                          layoutDependency: P,
                          layoutId: `dablpMVbZ`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        l(v.div, {
                          className: `framer-el38v1`,
                          "data-framer-name": `Buttons Wrapper`,
                          layoutDependency: P,
                          layoutId: `O0zkH5cvP`,
                          children: l(z, {
                            height: 46,
                            y:
                              (u?.y || 0) +
                              8 +
                              (((u?.height || 604) - 16 - 649.4) / 2 + 300 + 12) +
                              40 +
                              211.4 +
                              0,
                            children: l(fe, {
                              className: `framer-1ys4pgh-container`,
                              layoutDependency: P,
                              layoutId: `GykhII2R7-container`,
                              nodeId: `GykhII2R7`,
                              rendersWithMotion: !0,
                              scopeId: `A3JTnTU3M`,
                              children: l(W, {
                                EpZv_SBIe: !0,
                                height: `100%`,
                                id: `GykhII2R7`,
                                ixpAZVixF: x,
                                layoutId: `GykhII2R7`,
                                Q3I4lSTCG: `View Case Study`,
                                r0Dv1RORR: !0,
                                variant: Vt(`YCL_MIUZN`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-Upe5A.framer-1rve1ml, .framer-Upe5A .framer-1rve1ml { display: block; }`,
          `.framer-Upe5A.framer-zxq086 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; padding: 8px; position: relative; width: 500px; }`,
          `.framer-Upe5A .framer-1sf4beo { flex: none; height: 300px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Upe5A .framer-u4zci1 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; }`,
          `.framer-Upe5A .framer-emowv5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px 32px 40px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Upe5A .framer-yeukjt, .framer-Upe5A .framer-1xhzmm3 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Upe5A .framer-el38v1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-Upe5A .framer-1ys4pgh-container { flex: none; height: auto; position: relative; width: auto; }`,
          ...pt,
          ...Ne,
        ],
        `framer-Upe5A`
      )),
      (G.displayName = `project card`),
      (G.defaultProps = { height: 604, width: 500 }),
      O(G, {
        ASRKczPa_: {
          defaultValue: `CloudDesk`,
          displayTextArea: !1,
          title: `Title`,
          type: L.String,
        },
        onASRKczPa_Change: { changes: `ASRKczPa_`, type: L.ChangeHandler },
        RuioiX8bO: {
          defaultValue: `A modern dashboard interface designed to help teams manage tasks, track progress, and collaborate seamlessly in real time.`,
          displayTextArea: !1,
          title: `Text`,
          type: L.String,
        },
        onRuioiX8bOChange: { changes: `RuioiX8bO`, type: L.ChangeHandler },
        FpcePnGXA: { title: `Github Link`, type: L.Link },
        OikHOW9Re: {
          __defaultAssetReference: `data:framer/asset-reference,csQVul7Il1jEMGC9OH67JVGv28.png?originalFilename=011+%281%29.png&preferredSize=auto&width=6000&height=4500`,
          __vekterDefault: {
            alt: `Project Mockup`,
            assetReference: `data:framer/asset-reference,csQVul7Il1jEMGC9OH67JVGv28.png?originalFilename=011+%281%29.png&preferredSize=auto&width=6000&height=4500`,
          },
          title: `Image`,
          type: L.ResponsiveImage,
        },
      }),
      H(
        G,
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
          ...At,
          ...D(ft),
          ...D(Ie),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (G.loader = { load: (e, t) => (t.locale, Promise.allSettled([w(W, {}, t)])) }));
  }),
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  K,
  sn = e(() => {
    (m(),
      C(),
      x(),
      n(),
      (qt = B(v.div)),
      (Jt = `framer-jyOMk`),
      (Yt = { Ck4JzRWVW: `framer-v-1lm5v0b` }),
      (Xt = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Zt = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Qt = { delay: 0, duration: 2.6, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
      ($t = { delay: 0, duration: 0.7, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (en = {
        opacity: 0,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1.5,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (tn = (e, t) => `translate(-50%, -50%) ${t}`),
      (nn = ({ value: e, children: n }) => {
        let r = f(y),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(y.Provider, { value: a, children: n });
      }),
      (rn = v.create(o)),
      (an = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (on = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = N(
        d(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = g(),
            { activeLocale: o, setLocale: s } = F();
          A();
          let { style: c, className: u, layoutId: d, variant: f, ...m } = an(e),
            {
              baseVariant: h,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: ee,
              variants: T,
            } = R({ defaultVariant: `Ck4JzRWVW`, ref: i, variant: f, variantClassNames: Yt }),
            E = on(e, T),
            D = k(Jt);
          return l(b, {
            id: d ?? a,
            children: l(rn, {
              animate: T,
              initial: !1,
              children: l(nn, {
                value: Qt,
                children: p(qt, {
                  ...m,
                  ...x,
                  __framer__loop: Zt,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopPauseOffscreen: !1,
                  __framer__loopRepeatDelay: 0,
                  __framer__loopRepeatType: `loop`,
                  __framer__loopTransition: Xt,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: k(D, `framer-1lm5v0b`, u, _),
                  "data-framer-name": `Default`,
                  layoutDependency: E,
                  layoutId: `Ck4JzRWVW`,
                  ref: i,
                  style: { ...c },
                  children: [
                    l(qt, {
                      __framer__loop: en,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopPauseOffscreen: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: `loop`,
                      __framer__loopTransition: $t,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 0.85,
                      className: `framer-12ig7xu`,
                      "data-framer-name": `Big Circle`,
                      layoutDependency: E,
                      layoutId: `S9sPdlPnL`,
                      style: {
                        backgroundColor: `var(--token-ef6c4576-46fd-4f95-9d66-991b170b3593, rgb(29, 191, 115))`,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                        opacity: 0.85,
                      },
                    }),
                    l(v.div, {
                      className: `framer-1b43d2x`,
                      "data-framer-name": `Small Circle`,
                      layoutDependency: E,
                      layoutId: `ufVNmmzaK`,
                      style: {
                        backgroundColor: `var(--token-ef6c4576-46fd-4f95-9d66-991b170b3593, rgb(29, 191, 115))`,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      transformTemplate: tn,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-jyOMk.framer-doieb6, .framer-jyOMk .framer-doieb6 { display: block; }`,
          `.framer-jyOMk.framer-1lm5v0b { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
          `.framer-jyOMk .framer-12ig7xu { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 10px); overflow: visible; position: relative; width: 10px; }`,
          `.framer-jyOMk .framer-1b43d2x { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 6px); left: 50%; overflow: visible; position: absolute; top: 50%; width: 6px; z-index: 1; }`,
        ],
        `framer-jyOMk`
      )),
      (K.displayName = `Ping`),
      (K.defaultProps = { height: 10, width: 10 }),
      H(K, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  q,
  gn = e(() => {
    (m(),
      C(),
      x(),
      n(),
      xe(),
      (cn = `framer-UXqrq`),
      (ln = { oSqQefuNJ: `framer-v-1d5e8vw` }),
      (un = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (dn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (fn = ({ value: e, children: n }) => {
        let r = f(y),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(y.Provider, { value: a, children: n });
      }),
      (pn = v.create(o)),
      (mn = ({ height: e, id: t, image: n, title: r, width: i, ...a }) => ({
        ...a,
        d0Atlg2mo: r ?? a.d0Atlg2mo ?? `JavaScript`,
        SkUNeldkM: n ??
          a.SkUNeldkM ?? {
            alt: ``,
            pixelHeight: 56,
            pixelWidth: 58,
            src: `https://framerusercontent.com/images/U4WwaSswiaWDacNalJbEKDXNj7w.png?width=58&height=56`,
          },
      })),
      (hn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = N(
        d(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = g(),
            { activeLocale: s, setLocale: c } = F(),
            u = A(),
            {
              style: d,
              className: f,
              layoutId: m,
              variant: h,
              d0Atlg2mo: _,
              SkUNeldkM: y,
              ...x
            } = mn(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: ee,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: te,
              variants: ne,
            } = R({ defaultVariant: `oSqQefuNJ`, ref: i, variant: h, variantClassNames: ln }),
            M = hn(e, ne),
            N = k(cn, be);
          return l(b, {
            id: m ?? a,
            children: l(pn, {
              animate: ne,
              initial: !1,
              children: l(fn, {
                value: un,
                children: p(v.div, {
                  ...x,
                  ...ee,
                  className: k(N, `framer-1d5e8vw`, f, C),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  layoutDependency: M,
                  layoutId: `oSqQefuNJ`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-eaa444f4-7e99-47ba-8c71-b1ca35a8422f, rgba(255, 255, 255, 0.05))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20))`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...d,
                  },
                  children: [
                    l(le, {
                      background: {
                        alt: ``,
                        fit: `fit`,
                        intrinsicHeight: 56,
                        intrinsicWidth: 58,
                        loading: T((u?.y || 0) + (16 + ((u?.height || 59) - 32 - 18) / 2)),
                        pixelHeight: 56,
                        pixelWidth: 58,
                        sizes: `28px`,
                        ...dn(y),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-isl2zl`,
                      layoutDependency: M,
                      layoutId: `Yj_IilM4A`,
                    }),
                    l(j, {
                      __fromCanvasComponent: !0,
                      children: l(o, {
                        children: l(v.p, {
                          className: `framer-styles-preset-13u21mt`,
                          "data-styles-preset": `DMtlcsvaj`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, rgb(255, 255, 255)))`,
                          },
                          children: `JavaScript`,
                        }),
                      }),
                      className: `framer-1v7v2bm`,
                      fonts: [`Inter`],
                      layoutDependency: M,
                      layoutId: `QX9JGrLu5`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: _,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-UXqrq.framer-1cu27ud, .framer-UXqrq .framer-1cu27ud { display: block; }`,
          `.framer-UXqrq.framer-1d5e8vw { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 16px 24px 16px 24px; position: relative; width: min-content; }`,
          `.framer-UXqrq .framer-isl2zl { aspect-ratio: 1.3333333333333333 / 1; flex: none; height: auto; position: relative; width: 28px; }`,
          `.framer-UXqrq .framer-1v7v2bm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Ne,
          `.framer-UXqrq[data-border="true"]::after, .framer-UXqrq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-UXqrq`
      )),
      (q.displayName = `skill tag`),
      (q.defaultProps = { height: 59, width: 171 }),
      O(q, {
        d0Atlg2mo: {
          defaultValue: `JavaScript`,
          displayTextArea: !1,
          title: `Title`,
          type: L.String,
        },
        ond0Atlg2moChange: { changes: `d0Atlg2mo`, type: L.ChangeHandler },
        SkUNeldkM: {
          __defaultAssetReference: `data:framer/asset-reference,U4WwaSswiaWDacNalJbEKDXNj7w.png?originalFilename=js.png&width=58&height=56`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,U4WwaSswiaWDacNalJbEKDXNj7w.png?originalFilename=js.png&width=58&height=56`,
          },
          title: `Image`,
          type: L.ResponsiveImage,
        },
      }),
      H(
        q,
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
          ...D(Ie),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  J,
  On = e(() => {
    (m(),
      C(),
      x(),
      n(),
      xe(),
      (_n = B(v.div)),
      (vn = `framer-UoTM6`),
      (yn = { zzgasVvPu: `framer-v-189672h` }),
      (bn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 50,
      }),
      (xn = { damping: 70, delay: 0, mass: 1, stiffness: 320, type: `spring` }),
      (Sn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Cn = (e, t) => `translate(-50%, -50%) ${t}`),
      (wn = ({ value: e, children: n }) => {
        let r = f(y),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(y.Provider, { value: a, children: n });
      }),
      (Tn = v.create(o)),
      (En = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Dn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = N(
        d(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = g(),
            { activeLocale: s, setLocale: c } = F();
          A();
          let { style: u, className: d, layoutId: f, variant: m, ...h } = En(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: ee,
              setVariant: T,
              variants: E,
            } = R({ defaultVariant: `zzgasVvPu`, ref: i, variant: m, variantClassNames: yn }),
            D = Dn(e, E),
            O = k(vn, be);
          return l(b, {
            id: f ?? a,
            children: l(Tn, {
              animate: E,
              initial: !1,
              children: l(wn, {
                value: Sn,
                children: p(_n, {
                  ...h,
                  ...S,
                  __framer__animate: { transition: xn },
                  __framer__animateOnce: !0,
                  __framer__enter: bn,
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0.5,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: k(O, `framer-189672h`, d, y),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: D,
                  layoutId: `zzgasVvPu`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-eaa444f4-7e99-47ba-8c71-b1ca35a8422f, rgba(255, 255, 255, 0.05))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20))`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...u,
                  },
                  children: [
                    p(V, {
                      className: `framer-1hvunp0`,
                      layoutDependency: D,
                      layoutId: `BSKpg0ZzE`,
                      requiresOverflowVisible: !1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 22" overflow="visible"><path d="M 4.684 0 L 12.318 0 C 14.357 -0.001 16.161 1.176 16.779 2.911 C 17.397 4.646 16.687 6.539 15.022 7.589 C 16.41 8.474 17.149 9.964 16.951 11.476 C 16.753 12.989 15.648 14.285 14.069 14.86 C 12.49 15.434 10.685 15.195 9.36 14.237 L 9.36 17.822 C 9.36 19.801 7.805 21.509 5.636 21.912 C 3.467 22.315 1.278 21.304 0.394 19.489 C -0.491 17.675 0.172 15.555 1.98 14.412 C 0.784 13.655 0.004 12.409 0.004 11.001 C 0.002 9.645 0.739 8.373 1.978 7.591 C 0.313 6.54 -0.397 4.647 0.221 2.912 C 0.839 1.177 2.643 0 4.682 0.001 Z M 7.641 8.358 L 4.682 8.358 C 3.047 8.358 1.722 9.541 1.722 11.001 C 1.722 12.461 3.047 13.644 4.682 13.644 L 7.641 13.644 Z M 4.682 6.823 L 7.641 6.823 L 7.641 1.536 L 4.682 1.536 C 3.047 1.536 1.722 2.719 1.722 4.179 C 1.722 5.64 3.047 6.823 4.682 6.823 Z M 12.32 1.536 L 9.359 1.536 L 9.359 6.823 L 12.323 6.823 C 13.957 6.821 15.279 5.638 15.279 4.179 C 15.279 2.719 13.954 1.536 12.32 1.536 Z M 9.359 11.004 C 9.361 12.463 10.686 13.645 12.32 13.644 C 13.953 13.644 15.277 12.461 15.278 11.002 C 15.278 9.543 13.955 8.36 12.322 8.358 L 12.315 8.358 C 10.683 8.36 9.361 9.541 9.359 10.998 Z M 4.682 15.179 C 3.047 15.179 1.722 16.362 1.722 17.822 C 1.722 19.281 3.047 20.465 4.681 20.465 C 6.315 20.466 7.64 19.283 7.641 17.823 L 7.641 15.179 Z" fill="rgb(204, 22, 22)"></path></svg>`,
                      withExternalLayout: !0,
                      children: [
                        l(V, {
                          className: `framer-1kr6lwf`,
                          layoutDependency: D,
                          layoutId: `ZSTzCJ28P`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 22" overflow="visible"><path d="M 4.682 0.001 C 2.643 0 0.839 1.177 0.221 2.912 C -0.397 4.647 0.313 6.54 1.978 7.591 C 0.739 8.373 0.002 9.645 0.004 11.001 C 0.004 12.409 0.784 13.655 1.98 14.412 C 0.172 15.555 -0.491 17.675 0.394 19.489 C 1.278 21.304 3.467 22.315 5.636 21.912 C 7.805 21.509 9.36 19.801 9.36 17.822 L 9.36 14.237 C 10.685 15.195 12.49 15.434 14.069 14.86 C 15.648 14.285 16.753 12.989 16.951 11.476 C 17.149 9.964 16.41 8.474 15.022 7.589 C 16.687 6.539 17.397 4.646 16.779 2.911 C 16.161 1.176 14.357 -0.001 12.318 0 L 4.684 0 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(V, {
                          className: `framer-1g9kc0x`,
                          layoutDependency: D,
                          layoutId: `bJpxBlVDD`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.918 5.286" overflow="visible"><path d="M 5.918 5.286 L 2.959 5.286 C 1.325 5.286 0 4.103 0 2.643 C 0 1.183 1.325 0 2.959 0 L 5.918 0 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(V, {
                          className: `framer-1xrkbpk`,
                          layoutDependency: D,
                          layoutId: `Zo_AG5u_j`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.919 5.287" overflow="visible"><path d="M 2.96 5.287 L 5.919 5.287 L 5.919 0 L 2.96 0 C 1.325 0 0 1.184 0 2.644 C 0 4.104 1.325 5.287 2.96 5.287 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(V, {
                          className: `framer-1mck23z`,
                          layoutDependency: D,
                          layoutId: `U5PhxaHQt`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.92 5.287" overflow="visible"><path d="M 5.92 2.643 C 5.92 4.102 4.597 5.285 2.964 5.287 L 0 5.287 L 0 0 L 2.96 0 C 4.595 0 5.92 1.183 5.92 2.643 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(V, {
                          className: `framer-11l40cp`,
                          layoutDependency: D,
                          layoutId: `xKYIDNntd`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.918 5.286" overflow="visible"><path d="M 0 2.64 C 0.002 1.183 1.324 0.002 2.956 0 L 2.963 0 C 4.596 0.002 5.919 1.185 5.918 2.644 C 5.918 4.103 4.594 5.286 2.96 5.286 C 1.327 5.287 0.002 4.105 0 2.646 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(V, {
                          className: `framer-fow01n`,
                          layoutDependency: D,
                          layoutId: `c5pLIpxzW`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.918 5.286" overflow="visible"><path d="M 2.959 0 C 1.325 0 0 1.183 0 2.643 C 0 4.102 1.324 5.286 2.958 5.286 C 4.593 5.287 5.918 4.104 5.918 2.644 L 5.918 0 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    l(v.div, {
                      className: `framer-gqabns`,
                      "data-framer-name": `figma`,
                      layoutDependency: D,
                      layoutId: `TafLpKCrH`,
                      children: l(j, {
                        __fromCanvasComponent: !0,
                        children: l(o, {
                          children: l(v.p, {
                            className: `framer-styles-preset-13u21mt`,
                            "data-styles-preset": `DMtlcsvaj`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, rgb(255, 255, 255)))`,
                            },
                            children: `Figma`,
                          }),
                        }),
                        className: `framer-1rr0hex`,
                        fonts: [`Inter`],
                        layoutDependency: D,
                        layoutId: `BTA1pNZRV`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        transformTemplate: Cn,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-UoTM6.framer-1cn8l2s, .framer-UoTM6 .framer-1cn8l2s { display: block; }`,
          `.framer-UoTM6.framer-189672h { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 16px 24px 16px 24px; position: relative; width: min-content; }`,
          `.framer-UoTM6 .framer-1hvunp0 { height: 22px; position: relative; width: 17px; }`,
          `.framer-UoTM6 .framer-1kr6lwf { height: 22px; left: 0px; position: absolute; top: 0px; width: 17px; }`,
          `.framer-UoTM6 .framer-1g9kc0x { height: 6px; left: 2px; position: absolute; top: 8px; width: 6px; }`,
          `.framer-UoTM6 .framer-1xrkbpk { height: 6px; left: 2px; position: absolute; top: 2px; width: 6px; }`,
          `.framer-UoTM6 .framer-1mck23z { height: 6px; left: 9px; position: absolute; top: 2px; width: 6px; }`,
          `.framer-UoTM6 .framer-11l40cp { height: 6px; left: 9px; position: absolute; top: 8px; width: 6px; }`,
          `.framer-UoTM6 .framer-fow01n { height: 6px; left: 2px; position: absolute; top: 15px; width: 6px; }`,
          `.framer-UoTM6 .framer-gqabns { flex: none; height: 27px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 50px; }`,
          `.framer-UoTM6 .framer-1rr0hex { flex: none; height: auto; left: 50%; position: absolute; top: 48%; white-space: pre; width: auto; }`,
          ...Ne,
          `.framer-UoTM6[data-border="true"]::after, .framer-UoTM6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-UoTM6`
      )),
      (J.displayName = `skill tag 2`),
      (J.defaultProps = { height: 59, width: 123 }),
      H(
        J,
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
          ...D(Ie),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  kn,
  An,
  jn,
  Mn = e(() => {
    (C(),
      ee.loadFonts([`GF;Geist Mono-regular`, `GF;Geist Mono-700`]),
      (kn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Geist Mono`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist Mono`,
              url: `../../assets/fonts/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Geist Mono`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist Mono`,
              url: `https://fonts.gstatic.com/s/geistmono/v4/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (An = [
        `.framer-GVdQe .framer-styles-preset-1c49kmm:not(.rich-text-wrapper), .framer-GVdQe .framer-styles-preset-1c49kmm.rich-text-wrapper p { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 10px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (jn = `framer-GVdQe`));
  }),
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Y,
  Bn = e(() => {
    (m(),
      C(),
      x(),
      n(),
      Mn(),
      (Nn = `framer-Or1tx`),
      (Pn = { zgRPrGOQB: `framer-v-1ruw5ua` }),
      (Fn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (In = ({ value: e, children: n }) => {
        let r = f(y),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(y.Provider, { value: a, children: n });
      }),
      (Ln = v.create(o)),
      (Rn = ({ fill: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        EiYs6WDXn:
          e ?? a.EiYs6WDXn ?? `var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20))`,
        FlbcLL9ub: r ?? a.FlbcLL9ub ?? `TECH STACK`,
      })),
      (zn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = N(
        d(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = g(),
            { activeLocale: s, setLocale: c } = F();
          A();
          let {
              style: u,
              className: d,
              layoutId: f,
              variant: p,
              EiYs6WDXn: m,
              FlbcLL9ub: h,
              ..._
            } = Rn(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: ee,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = R({ defaultVariant: `zgRPrGOQB`, ref: i, variant: p, variantClassNames: Pn }),
            O = zn(e, D),
            te = k(Nn, jn);
          return l(b, {
            id: f ?? a,
            children: l(Ln, {
              animate: D,
              initial: !1,
              children: l(In, {
                value: Fn,
                children: l(v.div, {
                  ..._,
                  ...C,
                  className: k(te, `framer-1ruw5ua`, d, x),
                  "data-framer-name": `Default`,
                  layoutDependency: O,
                  layoutId: `zgRPrGOQB`,
                  ref: i,
                  style: {
                    backgroundColor: m,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...u,
                  },
                  children: l(j, {
                    __fromCanvasComponent: !0,
                    children: l(o, {
                      children: l(v.p, {
                        className: `framer-styles-preset-1c49kmm`,
                        "data-styles-preset": `NoguLCmHa`,
                        dir: `auto`,
                        children: `TECH STACK`,
                      }),
                    }),
                    className: `framer-l21fbl`,
                    fonts: [`Inter`],
                    layoutDependency: O,
                    layoutId: `ZI0O3t4ia`,
                    style: {
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: h,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-Or1tx.framer-1k93k4d, .framer-Or1tx .framer-1k93k4d { display: block; }`,
          `.framer-Or1tx.framer-1ruw5ua { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; padding: 6px 12px 6px 12px; position: relative; width: min-content; }`,
          `.framer-Or1tx .framer-l21fbl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...An,
        ],
        `framer-Or1tx`
      )),
      (Y.displayName = `Caption`),
      (Y.defaultProps = { height: 28, width: 86 }),
      O(Y, {
        EiYs6WDXn: {
          defaultValue: `var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20)) /* {"name":"background-dark-100"} */`,
          title: `Fill`,
          type: L.Color,
        },
        FlbcLL9ub: {
          defaultValue: `TECH STACK`,
          displayTextArea: !1,
          title: `Title`,
          type: L.String,
        },
        onFlbcLL9ubChange: { changes: `FlbcLL9ub`, type: L.ChangeHandler },
      }),
      H(
        Y,
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
          ...D(kn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  X,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  Z,
  Q,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  $,
  Sr;
e(() => {
  (m(),
    C(),
    x(),
    n(),
    dt(),
    Kt(),
    sn(),
    Ot(),
    ge(),
    gn(),
    On(),
    Bn(),
    Ce(),
    xe(),
    we(),
    Pe(),
    ke(),
    (Vn = E(K)),
    (Hn = P(v.div)),
    (Un = E(W)),
    (Wn = P(oe)),
    (Gn = E(ye)),
    (Kn = se(v.div)),
    (qn = E(Y)),
    (X = B(oe)),
    (Jn = B(j)),
    (Yn = E(J)),
    (Xn = E(q)),
    (Zn = B(v.div)),
    (Qn = E(G)),
    ($n = E(ut)),
    (er = {
      EMoodCk6A: `(min-width: 810px) and (max-width: 1279.98px)`,
      l_Wru7hTO: `(max-width: 809.98px)`,
      WQLkyLRf1: `(min-width: 1280px)`,
    }),
    (tr = () => typeof document < `u`),
    (nr = []),
    (rr = `framer-kiXsy`),
    (ir = {
      EMoodCk6A: `framer-v-1vo249k`,
      l_Wru7hTO: `framer-v-2t7pqm`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (ar = (e, t, n) => (e && t ? `position` : n)),
    (or = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 70, delay: 0.1, mass: 1, stiffness: 320, type: `spring` },
      x: 0,
      y: 0,
    }),
    (sr = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 50,
    }),
    (cr = {
      filter: `blur(10px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (lr = { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` }),
    (ur = {
      effect: cr,
      repeat: !1,
      startDelay: 0,
      tokenization: `character`,
      transition: lr,
      trigger: `onMount`,
      type: `appear`,
    }),
    (dr = {
      effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
      startDelay: 0.2,
      tokenization: `line`,
      transition: { bounce: 0, delay: 0.075, duration: 0.4, type: `spring` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (fr = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (pr = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 70, delay: 0.3, mass: 1, stiffness: 320, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Z = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 50,
    }),
    (Q = { damping: 70, delay: 0, mass: 1, stiffness: 320, type: `spring` }),
    (mr = {
      effect: cr,
      repeat: !1,
      startDelay: 0,
      threshold: 0,
      tokenization: `character`,
      transition: lr,
      trigger: `onInView`,
      type: `appear`,
    }),
    (hr = {
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
    (gr = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (_r = { damping: 70, delay: 0.2, mass: 1, stiffness: 320, type: `spring` }),
    (vr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (yr = { "mac air": `WQLkyLRf1`, Phone: `l_Wru7hTO`, Tablet: `EMoodCk6A` }),
    (br = ({ value: e }) =>
      ue()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (xr = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: yr[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    ($ = N(
      d(function (e, n) {
        let i = r(null),
          a = n ?? i,
          s = g(),
          { activeLocale: c, setLocale: u } = F(),
          d = A(),
          { style: m, className: h, layoutId: _, variant: x, ...C } = xr(e);
        ce(t(() => je({}, c), [c]));
        let [w, ee] = re(x, er, !1),
          T = k(rr, Fe, De, be, Ae),
          E = f(te)?.isLayoutTemplate,
          D = !!f(y)?.transition?.layout,
          O = ar(E, D);
        ne();
        let N = () => !tr() || w === `l_Wru7hTO`,
          P = () => !tr() || w !== `l_Wru7hTO`,
          se = ae(`z5mBxg2cw`),
          L = r(null),
          R = ae(`PSSTNTYbx`),
          ue = r(null);
        return (
          S({}),
          l(te.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: yr,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: ir,
            },
            children: p(b, {
              id: _ ?? s,
              children: [
                l(br, {
                  value: `html body { background: var(--token-b4d223ed-03f5-4a9b-89ad-72802d44a023, rgb(255, 255, 255)); }`,
                }),
                p(v.div, {
                  ...C,
                  className: k(T, `framer-72rtr7`, h),
                  ref: a,
                  style: { ...m },
                  children: [
                    l(v.header, {
                      className: `framer-19tm636`,
                      "data-framer-name": `Hero Section`,
                      layout: O,
                      children: l(`div`, {
                        className: `framer-1prauj4`,
                        children: p(`div`, {
                          className: `framer-pamar2`,
                          children: [
                            p(`div`, {
                              className: `framer-3uanbr`,
                              children: [
                                p(`div`, {
                                  className: `framer-n9l0im`,
                                  children: [
                                    p(Hn, {
                                      animate: or,
                                      className: `framer-1y06zyi`,
                                      "data-framer-appear-id": `1y06zyi`,
                                      initial: sr,
                                      optimized: !0,
                                      children: [
                                        l(z, {
                                          height: 10,
                                          children: l(oe, {
                                            className: `framer-1kplzer-container`,
                                            "data-framer-name": `Ping`,
                                            name: `Ping`,
                                            nodeId: `Lzl80Fvwi`,
                                            scopeId: `augiA20Il`,
                                            children: l(K, {
                                              height: `100%`,
                                              id: `Lzl80Fvwi`,
                                              layoutId: `Lzl80Fvwi`,
                                              name: `Ping`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        l(j, {
                                          __fromCanvasComponent: !0,
                                          children: l(o, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-use1bb`,
                                              "data-styles-preset": `upAT04Zng`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-6065e7bc-5ed0-4365-8788-d8ae4278d28c, rgba(255, 255, 255, 0.65))`,
                                              },
                                              children: `Available for work`,
                                            }),
                                          }),
                                          className: `framer-c3ymsf`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    l(j, {
                                      __fromCanvasComponent: !0,
                                      children: l(o, {
                                        children: l(`h1`, {
                                          className: `framer-styles-preset-r8lbjj`,
                                          "data-styles-preset": `aMRWruXcA`,
                                          dir: `auto`,
                                          children: `UI/UX Designer.`,
                                        }),
                                      }),
                                      className: `framer-16qgs0s`,
                                      effect: ur,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(j, {
                                      __fromCanvasComponent: !0,
                                      children: l(o, {
                                        children: l(`p`, {
                                          className: `framer-styles-preset-13u21mt`,
                                          "data-styles-preset": `DMtlcsvaj`,
                                          dir: `auto`,
                                          children: `Hi, I’m Siddharoodha, a UI/UX Designer passionate about creating clean, intuitive, and user-centered digital experiences. I turn ideas into engaging interfaces through research, wireframing, prototyping, and visual design.`,
                                        }),
                                      }),
                                      className: `framer-2ppgqs`,
                                      effect: dr,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    p(`div`, {
                                      className: `framer-1n1wwge`,
                                      children: [
                                        l(ie, {
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
                                            l(z, {
                                              height: 46,
                                              children: l(Wn, {
                                                animate: or,
                                                className: `framer-1tqe097-container`,
                                                "data-framer-appear-id": `1tqe097`,
                                                "data-framer-name": `Secondary Button`,
                                                initial: sr,
                                                name: `Secondary Button`,
                                                nodeId: `qyZCNMtiy`,
                                                optimized: !0,
                                                rendersWithMotion: !0,
                                                scopeId: `augiA20Il`,
                                                children: l(I, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    EMoodCk6A: { ixpAZVixF: e[1] },
                                                    l_Wru7hTO: { ixpAZVixF: e[2] },
                                                  },
                                                  children: l(W, {
                                                    EpZv_SBIe: !1,
                                                    height: `100%`,
                                                    id: `qyZCNMtiy`,
                                                    ixpAZVixF: e[0],
                                                    layoutId: `qyZCNMtiy`,
                                                    name: `Secondary Button`,
                                                    Q3I4lSTCG: `See my works`,
                                                    r0Dv1RORR: !0,
                                                    variant: fr(`EwUIdUwEl`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                        l(z, {
                                          height: 48,
                                          children: l(Wn, {
                                            animate: pr,
                                            className: `framer-1icvxtd-container`,
                                            "data-framer-appear-id": `1icvxtd`,
                                            "data-framer-name": `Primary Button`,
                                            initial: sr,
                                            name: `Primary Button`,
                                            nodeId: `UeJXXnX3W`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: l(ye, {
                                              e4UmzZLrR: `Contact Me`,
                                              height: `100%`,
                                              id: `UeJXXnX3W`,
                                              layoutId: `UeJXXnX3W`,
                                              name: `Primary Button`,
                                              nJ8ZxmZCD: `https://drive.google.com/file/d/1M5KwqnCW2w3TEZfShsOYEd-CXG6c6FFq/view?usp=drivesdk`,
                                              O7pEZxxIM: !0,
                                              variant: fr(`vcIzXPKgG`),
                                              width: `100%`,
                                              ZkjMwhG5r: !1,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                p(Kn, {
                                  className: `framer-kong2l`,
                                  tickerEffectAlign: `center`,
                                  tickerEffectDirectionModifier: `default`,
                                  tickerEffectDraggable: !1,
                                  tickerEffectEnabled: !0,
                                  tickerEffectGap: 57,
                                  tickerEffectHoverModifier: 35,
                                  tickerEffectOverflow: `clip`,
                                  tickerEffectPosition: `relative`,
                                  tickerEffectStackDirection: `row`,
                                  tickerEffectVelocity: 35,
                                  children: [
                                    l(M, {
                                      children: l(`div`, {
                                        className: `framer-1qzo4km`,
                                        "data-framer-name": `skill`,
                                        children: l(I, {
                                          breakpoint: w,
                                          overrides: {
                                            EMoodCk6A: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><g><path d="M 0 0 L 48 0 L 48 48 L 0 48 Z" fill="transparent"></path><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="rgb(125,42,231)"></path><g><defs><radialGradient id="idsEMoodCk6AKKkqEvoue_5g-839218626" cy="0.8863177144846961" cx="0.19316559729137134" r="0.77341625" gradientTransform="translate(0.19316559729137134, 0.8863177144846961) scale(1 1) translate(-0.19316559729137134, -0.8863177144846961)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AKKkqEvoue_5g-839218626)"></path></g><g><defs><radialGradient id="idsEMoodCk6AKKkqEvoue_6g18422324" cy="0.11367954118518886" cx="0.26474017923179083" r="0.87216875" gradientTransform="translate(0.26474017923179083, 0.11367954118518886) scale(1 1) translate(-0.26474017923179083, -0.11367954118518886)"><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AKKkqEvoue_6g18422324)"></path></g><g><defs><radialGradient id="idsEMoodCk6AKKkqEvoue_7g-839218626" cy="0.8863125000000001" cx="0.19315" r="0.7640524821462387" gradientTransform="translate(0.19315, 0.8863125000000001) scale(1 1) translate(-0.19315, -0.8863125000000001)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AKKkqEvoue_7g-839218626)"></path></g><g><defs><radialGradient id="idsEMoodCk6AKKkqEvoue_8g-203770780" cy="0.1347456123723369" cx="0.4089430061504141" r="0.7872950000000001" gradientTransform="translate(0.4089430061504141, 0.1347456123723369) scale(1 1) translate(-0.4089430061504141, -0.1347456123723369)"><stop offset="0" stop-color="rgba(0,196,204,0.726)" stop-opacity="0.726"></stop><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AKKkqEvoue_8g-203770780)"></path></g><path d="M 34.362 28.923 C 34.163 28.923 33.989 29.09 33.808 29.456 C 31.759 33.609 28.222 36.548 24.128 36.548 C 19.394 36.548 16.462 32.275 16.462 26.372 C 16.462 16.371 22.034 10.589 26.928 10.589 C 29.215 10.589 30.611 12.026 30.611 14.314 C 30.611 17.028 29.069 18.465 29.069 19.422 C 29.069 19.852 29.336 20.112 29.866 20.112 C 31.996 20.112 34.495 17.665 34.495 14.208 C 34.495 10.857 31.578 8.393 26.684 8.393 C 18.596 8.393 11.408 15.892 11.408 26.266 C 11.408 34.297 15.994 39.604 23.07 39.604 C 30.58 39.604 34.922 32.132 34.922 29.706 C 34.922 29.169 34.648 28.923 34.361 28.923" fill="rgb(255,255,255)"></path></g></g></svg>`,
                                            },
                                            l_Wru7hTO: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><g><path d="M 0 0 L 48 0 L 48 48 L 0 48 Z" fill="transparent"></path><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="rgb(125,42,231)"></path><g><defs><radialGradient id="idsl_Wru7hTOKKkqEvoue_5g-839218626" cy="0.8863177144846961" cx="0.19316559729137134" r="0.77341625" gradientTransform="translate(0.19316559729137134, 0.8863177144846961) scale(1 1) translate(-0.19316559729137134, -0.8863177144846961)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOKKkqEvoue_5g-839218626)"></path></g><g><defs><radialGradient id="idsl_Wru7hTOKKkqEvoue_6g18422324" cy="0.11367954118518886" cx="0.26474017923179083" r="0.87216875" gradientTransform="translate(0.26474017923179083, 0.11367954118518886) scale(1 1) translate(-0.26474017923179083, -0.11367954118518886)"><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOKKkqEvoue_6g18422324)"></path></g><g><defs><radialGradient id="idsl_Wru7hTOKKkqEvoue_7g-839218626" cy="0.8863125000000001" cx="0.19315" r="0.7640524821462387" gradientTransform="translate(0.19315, 0.8863125000000001) scale(1 1) translate(-0.19315, -0.8863125000000001)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOKKkqEvoue_7g-839218626)"></path></g><g><defs><radialGradient id="idsl_Wru7hTOKKkqEvoue_8g-203770780" cy="0.1347456123723369" cx="0.4089430061504141" r="0.7872950000000001" gradientTransform="translate(0.4089430061504141, 0.1347456123723369) scale(1 1) translate(-0.4089430061504141, -0.1347456123723369)"><stop offset="0" stop-color="rgba(0,196,204,0.726)" stop-opacity="0.726"></stop><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOKKkqEvoue_8g-203770780)"></path></g><path d="M 34.362 28.923 C 34.163 28.923 33.989 29.09 33.808 29.456 C 31.759 33.609 28.222 36.548 24.128 36.548 C 19.394 36.548 16.462 32.275 16.462 26.372 C 16.462 16.371 22.034 10.589 26.928 10.589 C 29.215 10.589 30.611 12.026 30.611 14.314 C 30.611 17.028 29.069 18.465 29.069 19.422 C 29.069 19.852 29.336 20.112 29.866 20.112 C 31.996 20.112 34.495 17.665 34.495 14.208 C 34.495 10.857 31.578 8.393 26.684 8.393 C 18.596 8.393 11.408 15.892 11.408 26.266 C 11.408 34.297 15.994 39.604 23.07 39.604 C 30.58 39.604 34.922 32.132 34.922 29.706 C 34.922 29.169 34.648 28.923 34.361 28.923" fill="rgb(255,255,255)"></path></g></g></svg>`,
                                            },
                                          },
                                          children: l(V, {
                                            className: `framer-skiabk`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><g><path d="M 0 0 L 48 0 L 48 48 L 0 48 Z" fill="transparent"></path><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="rgb(125,42,231)"></path><g><defs><radialGradient id="idsKKkqEvoue_5g-839218626" cy="0.8863177144846961" cx="0.19316559729137134" r="0.77341625" gradientTransform="translate(0.19316559729137134, 0.8863177144846961) scale(1 1) translate(-0.19316559729137134, -0.8863177144846961)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsKKkqEvoue_5g-839218626)"></path></g><g><defs><radialGradient id="idsKKkqEvoue_6g18422324" cy="0.11367954118518886" cx="0.26474017923179083" r="0.87216875" gradientTransform="translate(0.26474017923179083, 0.11367954118518886) scale(1 1) translate(-0.26474017923179083, -0.11367954118518886)"><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsKKkqEvoue_6g18422324)"></path></g><g><defs><radialGradient id="idsKKkqEvoue_7g-839218626" cy="0.8863125000000001" cx="0.19315" r="0.7640524821462387" gradientTransform="translate(0.19315, 0.8863125000000001) scale(1 1) translate(-0.19315, -0.8863125000000001)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsKKkqEvoue_7g-839218626)"></path></g><g><defs><radialGradient id="idsKKkqEvoue_8g-203770780" cy="0.1347456123723369" cx="0.4089430061504141" r="0.7872950000000001" gradientTransform="translate(0.4089430061504141, 0.1347456123723369) scale(1 1) translate(-0.4089430061504141, -0.1347456123723369)"><stop offset="0" stop-color="rgba(0,196,204,0.726)" stop-opacity="0.726"></stop><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsKKkqEvoue_8g-203770780)"></path></g><path d="M 34.362 28.923 C 34.163 28.923 33.989 29.09 33.808 29.456 C 31.759 33.609 28.222 36.548 24.128 36.548 C 19.394 36.548 16.462 32.275 16.462 26.372 C 16.462 16.371 22.034 10.589 26.928 10.589 C 29.215 10.589 30.611 12.026 30.611 14.314 C 30.611 17.028 29.069 18.465 29.069 19.422 C 29.069 19.852 29.336 20.112 29.866 20.112 C 31.996 20.112 34.495 17.665 34.495 14.208 C 34.495 10.857 31.578 8.393 26.684 8.393 C 18.596 8.393 11.408 15.892 11.408 26.266 C 11.408 34.297 15.994 39.604 23.07 39.604 C 30.58 39.604 34.922 32.132 34.922 29.706 C 34.922 29.169 34.648 28.923 34.361 28.923" fill="rgb(255,255,255)"></path></g></g></svg>`,
                                            withExternalLayout: !0,
                                            children: l(I, {
                                              breakpoint: w,
                                              overrides: {
                                                EMoodCk6A: {
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><path d="M 0 0 L 48 0 L 48 48 L 0 48 Z" fill="transparent"></path><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="rgb(125,42,231)"></path><g><defs><radialGradient id="idsEMoodCk6AOBrs7ZXVK_4g-839218626" cy="0.8863177144846961" cx="0.19316559729137134" r="0.77341625" gradientTransform="translate(0.19316559729137134, 0.8863177144846961) scale(1 1) translate(-0.19316559729137134, -0.8863177144846961)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AOBrs7ZXVK_4g-839218626)"></path></g><g><defs><radialGradient id="idsEMoodCk6AOBrs7ZXVK_5g18422324" cy="0.11367954118518886" cx="0.26474017923179083" r="0.87216875" gradientTransform="translate(0.26474017923179083, 0.11367954118518886) scale(1 1) translate(-0.26474017923179083, -0.11367954118518886)"><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AOBrs7ZXVK_5g18422324)"></path></g><g><defs><radialGradient id="idsEMoodCk6AOBrs7ZXVK_6g-839218626" cy="0.8863125000000001" cx="0.19315" r="0.7640524821462387" gradientTransform="translate(0.19315, 0.8863125000000001) scale(1 1) translate(-0.19315, -0.8863125000000001)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AOBrs7ZXVK_6g-839218626)"></path></g><g><defs><radialGradient id="idsEMoodCk6AOBrs7ZXVK_7g-203770780" cy="0.1347456123723369" cx="0.4089430061504141" r="0.7872950000000001" gradientTransform="translate(0.4089430061504141, 0.1347456123723369) scale(1 1) translate(-0.4089430061504141, -0.1347456123723369)"><stop offset="0" stop-color="rgba(0,196,204,0.726)" stop-opacity="0.726"></stop><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AOBrs7ZXVK_7g-203770780)"></path></g><path d="M 34.362 28.923 C 34.163 28.923 33.989 29.09 33.808 29.456 C 31.759 33.609 28.222 36.548 24.128 36.548 C 19.394 36.548 16.462 32.275 16.462 26.372 C 16.462 16.371 22.034 10.589 26.928 10.589 C 29.215 10.589 30.611 12.026 30.611 14.314 C 30.611 17.028 29.069 18.465 29.069 19.422 C 29.069 19.852 29.336 20.112 29.866 20.112 C 31.996 20.112 34.495 17.665 34.495 14.208 C 34.495 10.857 31.578 8.393 26.684 8.393 C 18.596 8.393 11.408 15.892 11.408 26.266 C 11.408 34.297 15.994 39.604 23.07 39.604 C 30.58 39.604 34.922 32.132 34.922 29.706 C 34.922 29.169 34.648 28.923 34.361 28.923" fill="rgb(255,255,255)"></path></g></svg>`,
                                                },
                                                l_Wru7hTO: {
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><path d="M 0 0 L 48 0 L 48 48 L 0 48 Z" fill="transparent"></path><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="rgb(125,42,231)"></path><g><defs><radialGradient id="idsl_Wru7hTOOBrs7ZXVK_4g-839218626" cy="0.8863177144846961" cx="0.19316559729137134" r="0.77341625" gradientTransform="translate(0.19316559729137134, 0.8863177144846961) scale(1 1) translate(-0.19316559729137134, -0.8863177144846961)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOOBrs7ZXVK_4g-839218626)"></path></g><g><defs><radialGradient id="idsl_Wru7hTOOBrs7ZXVK_5g18422324" cy="0.11367954118518886" cx="0.26474017923179083" r="0.87216875" gradientTransform="translate(0.26474017923179083, 0.11367954118518886) scale(1 1) translate(-0.26474017923179083, -0.11367954118518886)"><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOOBrs7ZXVK_5g18422324)"></path></g><g><defs><radialGradient id="idsl_Wru7hTOOBrs7ZXVK_6g-839218626" cy="0.8863125000000001" cx="0.19315" r="0.7640524821462387" gradientTransform="translate(0.19315, 0.8863125000000001) scale(1 1) translate(-0.19315, -0.8863125000000001)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOOBrs7ZXVK_6g-839218626)"></path></g><g><defs><radialGradient id="idsl_Wru7hTOOBrs7ZXVK_7g-203770780" cy="0.1347456123723369" cx="0.4089430061504141" r="0.7872950000000001" gradientTransform="translate(0.4089430061504141, 0.1347456123723369) scale(1 1) translate(-0.4089430061504141, -0.1347456123723369)"><stop offset="0" stop-color="rgba(0,196,204,0.726)" stop-opacity="0.726"></stop><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOOBrs7ZXVK_7g-203770780)"></path></g><path d="M 34.362 28.923 C 34.163 28.923 33.989 29.09 33.808 29.456 C 31.759 33.609 28.222 36.548 24.128 36.548 C 19.394 36.548 16.462 32.275 16.462 26.372 C 16.462 16.371 22.034 10.589 26.928 10.589 C 29.215 10.589 30.611 12.026 30.611 14.314 C 30.611 17.028 29.069 18.465 29.069 19.422 C 29.069 19.852 29.336 20.112 29.866 20.112 C 31.996 20.112 34.495 17.665 34.495 14.208 C 34.495 10.857 31.578 8.393 26.684 8.393 C 18.596 8.393 11.408 15.892 11.408 26.266 C 11.408 34.297 15.994 39.604 23.07 39.604 C 30.58 39.604 34.922 32.132 34.922 29.706 C 34.922 29.169 34.648 28.923 34.361 28.923" fill="rgb(255,255,255)"></path></g></svg>`,
                                                },
                                              },
                                              children: p(V, {
                                                className: `framer-14niagp`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><path d="M 0 0 L 48 0 L 48 48 L 0 48 Z" fill="transparent"></path><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="rgb(125,42,231)"></path><g><defs><radialGradient id="idsOBrs7ZXVK_4g-839218626" cy="0.8863177144846961" cx="0.19316559729137134" r="0.77341625" gradientTransform="translate(0.19316559729137134, 0.8863177144846961) scale(1 1) translate(-0.19316559729137134, -0.8863177144846961)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsOBrs7ZXVK_4g-839218626)"></path></g><g><defs><radialGradient id="idsOBrs7ZXVK_5g18422324" cy="0.11367954118518886" cx="0.26474017923179083" r="0.87216875" gradientTransform="translate(0.26474017923179083, 0.11367954118518886) scale(1 1) translate(-0.26474017923179083, -0.11367954118518886)"><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsOBrs7ZXVK_5g18422324)"></path></g><g><defs><radialGradient id="idsOBrs7ZXVK_6g-839218626" cy="0.8863125000000001" cx="0.19315" r="0.7640524821462387" gradientTransform="translate(0.19315, 0.8863125000000001) scale(1 1) translate(-0.19315, -0.8863125000000001)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsOBrs7ZXVK_6g-839218626)"></path></g><g><defs><radialGradient id="idsOBrs7ZXVK_7g-203770780" cy="0.1347456123723369" cx="0.4089430061504141" r="0.7872950000000001" gradientTransform="translate(0.4089430061504141, 0.1347456123723369) scale(1 1) translate(-0.4089430061504141, -0.1347456123723369)"><stop offset="0" stop-color="rgba(0,196,204,0.726)" stop-opacity="0.726"></stop><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsOBrs7ZXVK_7g-203770780)"></path></g><path d="M 34.362 28.923 C 34.163 28.923 33.989 29.09 33.808 29.456 C 31.759 33.609 28.222 36.548 24.128 36.548 C 19.394 36.548 16.462 32.275 16.462 26.372 C 16.462 16.371 22.034 10.589 26.928 10.589 C 29.215 10.589 30.611 12.026 30.611 14.314 C 30.611 17.028 29.069 18.465 29.069 19.422 C 29.069 19.852 29.336 20.112 29.866 20.112 C 31.996 20.112 34.495 17.665 34.495 14.208 C 34.495 10.857 31.578 8.393 26.684 8.393 C 18.596 8.393 11.408 15.892 11.408 26.266 C 11.408 34.297 15.994 39.604 23.07 39.604 C 30.58 39.604 34.922 32.132 34.922 29.706 C 34.922 29.169 34.648 28.923 34.361 28.923" fill="rgb(255,255,255)"></path></g></svg>`,
                                                withExternalLayout: !0,
                                                children: [
                                                  l(V, {
                                                    className: `framer-11ze9jz`,
                                                    requiresOverflowVisible: !1,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><path d="M 0 0 L 48 0 L 48 48 L 0 48 Z" fill="transparent"></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  l(V, {
                                                    className: `framer-1vhkgpc`,
                                                    requiresOverflowVisible: !1,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="rgb(125,42,231)"></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  l(I, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      EMoodCk6A: {
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsEMoodCk6AOjvVpmOFL_1g-839218626" cy="0.8863177144846961" cx="0.19316559729137134" r="0.77341625" gradientTransform="translate(0.19316559729137134, 0.8863177144846961) scale(1 1) translate(-0.19316559729137134, -0.8863177144846961)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AOjvVpmOFL_1g-839218626)"></path></g></svg>`,
                                                      },
                                                      l_Wru7hTO: {
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsl_Wru7hTOOjvVpmOFL_1g-839218626" cy="0.8863177144846961" cx="0.19316559729137134" r="0.77341625" gradientTransform="translate(0.19316559729137134, 0.8863177144846961) scale(1 1) translate(-0.19316559729137134, -0.8863177144846961)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOOjvVpmOFL_1g-839218626)"></path></g></svg>`,
                                                      },
                                                    },
                                                    children: l(V, {
                                                      className: `framer-cum3jk`,
                                                      requiresOverflowVisible: !1,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsOjvVpmOFL_1g-839218626" cy="0.8863177144846961" cx="0.19316559729137134" r="0.77341625" gradientTransform="translate(0.19316559729137134, 0.8863177144846961) scale(1 1) translate(-0.19316559729137134, -0.8863177144846961)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsOjvVpmOFL_1g-839218626)"></path></g></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  l(I, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      EMoodCk6A: {
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsEMoodCk6AvFXQxwKZa_1g18422324" cy="0.11367954118518886" cx="0.26474017923179083" r="0.87216875" gradientTransform="translate(0.26474017923179083, 0.11367954118518886) scale(1 1) translate(-0.26474017923179083, -0.11367954118518886)"><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AvFXQxwKZa_1g18422324)"></path></g></svg>`,
                                                      },
                                                      l_Wru7hTO: {
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsl_Wru7hTOvFXQxwKZa_1g18422324" cy="0.11367954118518886" cx="0.26474017923179083" r="0.87216875" gradientTransform="translate(0.26474017923179083, 0.11367954118518886) scale(1 1) translate(-0.26474017923179083, -0.11367954118518886)"><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOvFXQxwKZa_1g18422324)"></path></g></svg>`,
                                                      },
                                                    },
                                                    children: l(V, {
                                                      className: `framer-197avvn`,
                                                      requiresOverflowVisible: !1,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsvFXQxwKZa_1g18422324" cy="0.11367954118518886" cx="0.26474017923179083" r="0.87216875" gradientTransform="translate(0.26474017923179083, 0.11367954118518886) scale(1 1) translate(-0.26474017923179083, -0.11367954118518886)"><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsvFXQxwKZa_1g18422324)"></path></g></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  l(I, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      EMoodCk6A: {
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsEMoodCk6AHT4sHYRn3_1g-839218626" cy="0.8863125000000001" cx="0.19315" r="0.7640524821462387" gradientTransform="translate(0.19315, 0.8863125000000001) scale(1 1) translate(-0.19315, -0.8863125000000001)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AHT4sHYRn3_1g-839218626)"></path></g></svg>`,
                                                      },
                                                      l_Wru7hTO: {
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsl_Wru7hTOHT4sHYRn3_1g-839218626" cy="0.8863125000000001" cx="0.19315" r="0.7640524821462387" gradientTransform="translate(0.19315, 0.8863125000000001) scale(1 1) translate(-0.19315, -0.8863125000000001)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOHT4sHYRn3_1g-839218626)"></path></g></svg>`,
                                                      },
                                                    },
                                                    children: l(V, {
                                                      className: `framer-1s5ejmp`,
                                                      requiresOverflowVisible: !1,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsHT4sHYRn3_1g-839218626" cy="0.8863125000000001" cx="0.19315" r="0.7640524821462387" gradientTransform="translate(0.19315, 0.8863125000000001) scale(1 1) translate(-0.19315, -0.8863125000000001)"><stop offset="0" stop-color="rgb(100,32,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(100,32,255,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsHT4sHYRn3_1g-839218626)"></path></g></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  l(I, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      EMoodCk6A: {
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsEMoodCk6AnPXyYlM99_1g-203770780" cy="0.1347456123723369" cx="0.4089430061504141" r="0.7872950000000001" gradientTransform="translate(0.4089430061504141, 0.1347456123723369) scale(1 1) translate(-0.4089430061504141, -0.1347456123723369)"><stop offset="0" stop-color="rgba(0,196,204,0.726)" stop-opacity="0.726"></stop><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsEMoodCk6AnPXyYlM99_1g-203770780)"></path></g></svg>`,
                                                      },
                                                      l_Wru7hTO: {
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsl_Wru7hTOnPXyYlM99_1g-203770780" cy="0.1347456123723369" cx="0.4089430061504141" r="0.7872950000000001" gradientTransform="translate(0.4089430061504141, 0.1347456123723369) scale(1 1) translate(-0.4089430061504141, -0.1347456123723369)"><stop offset="0" stop-color="rgba(0,196,204,0.726)" stop-opacity="0.726"></stop><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsl_Wru7hTOnPXyYlM99_1g-203770780)"></path></g></svg>`,
                                                      },
                                                    },
                                                    children: l(V, {
                                                      className: `framer-110u4q`,
                                                      requiresOverflowVisible: !1,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" overflow="visible"><g><defs><radialGradient id="idsnPXyYlM99_1g-203770780" cy="0.1347456123723369" cx="0.4089430061504141" r="0.7872950000000001" gradientTransform="translate(0.4089430061504141, 0.1347456123723369) scale(1 1) translate(-0.4089430061504141, -0.1347456123723369)"><stop offset="0" stop-color="rgba(0,196,204,0.726)" stop-opacity="0.726"></stop><stop offset="0" stop-color="rgb(0,196,204)" stop-opacity="1"></stop><stop offset="1" stop-color="rgba(0,196,204,0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 24 48 C 37.255 48 48 37.255 48 24 C 48 10.745 37.255 0 24 0 C 10.745 0 0 10.745 0 24 C 0 37.255 10.745 48 24 48" fill="url(#idsnPXyYlM99_1g-203770780)"></path></g></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  l(V, {
                                                    className: `framer-1duar9n`,
                                                    requiresOverflowVisible: !1,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.514 31.211" overflow="visible"><path d="M 22.954 20.53 C 22.755 20.53 22.58 20.697 22.399 21.062 C 20.351 25.216 16.813 28.154 12.719 28.154 C 7.985 28.154 5.054 23.881 5.054 17.978 C 5.054 7.978 10.625 2.196 15.52 2.196 C 17.806 2.196 19.203 3.633 19.203 5.92 C 19.203 8.635 17.661 10.072 17.661 11.029 C 17.661 11.458 17.928 11.719 18.458 11.719 C 20.588 11.719 23.087 9.272 23.087 5.815 C 23.087 2.464 20.17 0 15.276 0 C 7.188 0 0 7.498 0 17.873 C 0 25.903 4.586 31.211 11.662 31.211 C 19.172 31.211 23.514 23.738 23.514 21.313 C 23.514 20.776 23.24 20.53 22.953 20.53" fill="rgb(255,255,255)"></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(M, {
                                      children: l(`div`, {
                                        className: `framer-4d3qj8`,
                                        "data-framer-name": `skill`,
                                        children: p(V, {
                                          className: `framer-1ghaa0f`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.667 37.002" overflow="visible"><path d="M 10.336 13.334 L 10.336 18.396 C 10.335 18.465 10.335 18.535 10.336 18.604 L 10.336 23.666 L 5.17 23.666 C 2.317 23.666 0.004 21.353 0.004 18.5 C 0.004 15.647 2.317 13.334 5.17 13.334 Z M 10.336 10.334 L 5.17 10.334 C 2.316 10.334 0.003 8.021 0.003 5.167 C 0.003 2.313 2.316 0 5.17 0 L 10.336 0 Z M 18.502 0 C 21.316 0.055 23.568 2.352 23.568 5.167 C 23.568 7.982 21.316 10.279 18.502 10.334 L 13.336 10.334 L 13.336 0 Z M 23.667 18.47 C 23.683 21.312 21.399 23.633 18.557 23.664 C 15.715 23.694 13.382 21.424 13.336 18.582 L 13.336 18.416 C 13.381 15.595 15.681 13.332 18.502 13.332 C 21.344 13.332 23.652 15.628 23.667 18.47 Z M 10.336 26.666 L 10.336 31.834 C 10.336 33.924 9.077 35.809 7.145 36.609 C 5.214 37.409 2.991 36.966 1.513 35.488 C 0.035 34.009 -0.406 31.786 0.394 29.855 C 1.195 27.924 3.08 26.665 5.17 26.666 Z" fill="rgb(255, 217, 217)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            l(V, {
                                              className: `framer-1l5myx6`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.332 10.332" overflow="visible"><path d="M 5.166 0 C 2.313 0 0 2.313 0 5.166 C 0 8.019 2.313 10.332 5.166 10.332 L 10.332 10.332 L 10.332 5.27 C 10.331 5.201 10.331 5.131 10.332 5.062 L 10.332 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            l(V, {
                                              className: `framer-1jg806q`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.333 10.334" overflow="visible"><path d="M 10.333 10.334 L 5.167 10.334 C 2.313 10.334 0 8.021 0 5.167 C 0 2.313 2.313 0 5.167 0 L 10.333 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            l(V, {
                                              className: `framer-k2nrbi`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.232 10.334" overflow="visible"><path d="M 0 0 L 0 10.334 L 5.166 10.334 C 7.98 10.279 10.232 7.982 10.232 5.167 C 10.232 2.352 7.98 0.055 5.166 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            l(V, {
                                              className: `framer-1cq3t00`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.331 10.332" overflow="visible"><path d="M 5.166 0 C 2.345 0 0.045 2.263 0 5.084 L 0 5.25 C 0.046 8.092 2.379 10.362 5.221 10.332 C 8.063 10.301 10.346 7.98 10.331 5.138 C 10.316 2.296 8.008 0 5.166 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            l(V, {
                                              className: `framer-6snauf`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.336 10.336" overflow="visible"><path d="M 5.17 0 C 3.08 -0.001 1.195 1.258 0.394 3.189 C -0.406 5.12 0.035 7.343 1.513 8.822 C 2.991 10.3 5.214 10.743 7.145 9.943 C 9.077 9.143 10.336 7.258 10.336 5.168 L 10.336 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    l(M, {
                                      children: l(`div`, {
                                        className: `framer-18f1srs`,
                                        "data-framer-name": `skill`,
                                        children: p(V, {
                                          className: `framer-27ex4a`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35.94 36" overflow="visible"><path d="M 31.94 0 L 4 0 C 1.8 0 0 1.8 0 4 L 0 32 C 0 34.2 1.8 36 4 36 L 31.94 36 C 34.14 36 35.94 34.2 35.94 32 L 35.94 4 C 35.94 1.791 34.149 0 31.94 0 M 28.76 27.96 C 28.7 27.98 28.62 28 28.56 28 L 24.04 28 C 23.64 28.007 23.275 27.769 23.12 27.4 L 18.2 15.92 C 18.16 15.8 18.04 15.74 17.94 15.78 C 17.875 15.804 17.824 15.855 17.8 15.92 L 14.74 23.22 C 14.68 23.36 14.74 23.5 14.88 23.56 C 14.92 23.58 14.94 23.58 14.98 23.58 L 18.34 23.58 C 18.54 23.58 18.74 23.7 18.82 23.9 L 20.3 27.18 C 20.44 27.48 20.28 27.84 19.98 27.98 C 19.86 27.98 19.78 28 19.7 28 L 7.46 28 C 7.16 28 6.9 27.74 6.9 27.44 C 6.9 27.36 6.92 27.3 6.94 27.22 L 14.74 8.66 C 14.9 8.26 15.3 8 15.72 8 L 20.22 8 C 20.66 8 21.04 8.26 21.2 8.66 L 29.04 27.22 C 29.18 27.5 29.06 27.84 28.76 27.96" fill="rgb(217, 210, 210)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            l(V, {
                                              className: `framer-i61o02`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35.94 36" overflow="visible"><path d="M 31.94 0 L 4 0 C 1.8 0 0 1.8 0 4 L 0 32 C 0 34.2 1.8 36 4 36 L 31.94 36 C 34.14 36 35.94 34.2 35.94 32 L 35.94 4 C 35.94 1.791 34.149 0 31.94 0" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            l(V, {
                                              className: `framer-i87omn`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.198 20" overflow="visible"><path d="M 21.86 19.96 C 21.8 19.98 21.72 20 21.66 20 L 17.14 20 C 16.74 20.007 16.375 19.769 16.22 19.4 L 11.3 7.92 C 11.26 7.8 11.14 7.74 11.04 7.78 C 10.975 7.804 10.924 7.855 10.9 7.92 L 7.84 15.22 C 7.78 15.36 7.84 15.5 7.98 15.56 C 8.02 15.58 8.04 15.58 8.08 15.58 L 11.44 15.58 C 11.64 15.58 11.84 15.7 11.92 15.9 L 13.4 19.18 C 13.54 19.48 13.38 19.84 13.08 19.98 C 12.96 19.98 12.88 20 12.8 20 L 0.56 20 C 0.26 20 0 19.74 0 19.44 C 0 19.36 0.02 19.3 0.04 19.22 L 7.84 0.66 C 8 0.26 8.4 0 8.82 0 L 13.32 0 C 13.76 0 14.14 0.26 14.3 0.66 L 22.14 19.22 C 22.28 19.5 22.16 19.84 21.86 19.96" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l(Hn, {
                              animate: or,
                              className: `framer-1rn8c5k`,
                              "data-framer-appear-id": `1rn8c5k`,
                              initial: sr,
                              optimized: !0,
                              children: p(`div`, {
                                className: `framer-1lixqa2`,
                                children: [
                                  N() &&
                                    l(I, {
                                      breakpoint: w,
                                      overrides: {
                                        l_Wru7hTO: {
                                          background: {
                                            alt: `Photo of me smiling`,
                                            fit: `fit`,
                                            intrinsicHeight: 481,
                                            intrinsicWidth: 339,
                                            pixelHeight: 481,
                                            pixelWidth: 339,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `500px`,
                                            src: `../../assets/images/cfXtimVAc4P5rmXmOLukNHBH5O8.png`,
                                          },
                                        },
                                      },
                                      children: l(le, {
                                        background: {
                                          alt: `Photo of me smiling`,
                                          fit: `fit`,
                                          intrinsicHeight: 481,
                                          intrinsicWidth: 339,
                                          pixelHeight: 481,
                                          pixelWidth: 339,
                                          positionX: `center`,
                                          positionY: `center`,
                                          src: `../../assets/images/cfXtimVAc4P5rmXmOLukNHBH5O8.png`,
                                        },
                                        className: `framer-58wpx9 hidden-72rtr7 hidden-1vo249k`,
                                        "data-framer-name": `Image`,
                                      }),
                                    }),
                                  P() &&
                                    l(le, {
                                      background: {
                                        alt: `Photo of me smiling`,
                                        fit: `fit`,
                                        intrinsicHeight: 481,
                                        intrinsicWidth: 339,
                                        pixelHeight: 481,
                                        pixelWidth: 339,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `500px`,
                                        src: `../../assets/images/cfXtimVAc4P5rmXmOLukNHBH5O8.png`,
                                      },
                                      className: `framer-1qrxlys hidden-2t7pqm`,
                                      "data-framer-name": `Image`,
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    l(v.section, {
                      className: `framer-1oabbam`,
                      "data-framer-name": `Skills Section`,
                      id: se,
                      layout: O,
                      ref: L,
                      children: p(`div`, {
                        className: `framer-tok9bp`,
                        "data-framer-name": `Content Column`,
                        children: [
                          p(`div`, {
                            className: `framer-1dz4twi`,
                            children: [
                              l(z, {
                                height: 28,
                                children: l(X, {
                                  __framer__animate: { transition: Q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-x43io1-container`,
                                  "data-framer-name": `Caption`,
                                  name: `Caption`,
                                  nodeId: `e1gM1HKY6`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: l(Y, {
                                    EiYs6WDXn: `var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, rgb(20, 20, 20))`,
                                    FlbcLL9ub: `DESIGN TOOLS`,
                                    height: `100%`,
                                    id: `e1gM1HKY6`,
                                    layoutId: `e1gM1HKY6`,
                                    name: `Caption`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              l(j, {
                                __fromCanvasComponent: !0,
                                children: l(o, {
                                  children: l(`h2`, {
                                    className: `framer-styles-preset-wj1llc`,
                                    "data-styles-preset": `fQF7LPveS`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: l(`strong`, { children: `Tools I Use` }),
                                  }),
                                }),
                                className: `framer-uelw1l`,
                                effect: mr,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(Jn, {
                                __framer__animate: { transition: Q },
                                __framer__animateOnce: !0,
                                __framer__enter: hr,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: l(o, {
                                  children: l(`p`, {
                                    className: `framer-styles-preset-13u21mt`,
                                    "data-styles-preset": `DMtlcsvaj`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `“A selection of design tools and skills I use to create clean, intuitive, and user-centered digital experiences.”`,
                                  }),
                                }),
                                className: `framer-15lbuye`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          p(`div`, {
                            className: `framer-1swkebq`,
                            "data-framer-name": `Skills Grid`,
                            children: [
                              l(z, {
                                height: 59,
                                children: l(oe, {
                                  className: `framer-15ymhb4-container`,
                                  nodeId: `yBVYjyz8D`,
                                  scopeId: `augiA20Il`,
                                  children: l(J, {
                                    height: `100%`,
                                    id: `yBVYjyz8D`,
                                    layoutId: `yBVYjyz8D`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              l(z, {
                                height: 59,
                                children: l(X, {
                                  __framer__animate: { transition: Q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-6vnead-container`,
                                  "data-framer-name": `skill tag`,
                                  name: `skill tag`,
                                  nodeId: `MHV1awoK3`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: l(q, {
                                    d0Atlg2mo: `Canva`,
                                    height: `100%`,
                                    id: `MHV1awoK3`,
                                    layoutId: `MHV1awoK3`,
                                    name: `skill tag`,
                                    SkUNeldkM: gr(
                                      {
                                        pixelHeight: 48,
                                        pixelWidth: 48,
                                        src: `../../assets/images/gkZ5QJICeu0QunVeYd2twYctqk.svg`,
                                      },
                                      `thesvg-color`
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              p(Zn, {
                                __framer__animate: { transition: Q },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-7oi5mp`,
                                "data-border": !0,
                                "data-framer-name": `skill tag`,
                                children: [
                                  p(V, {
                                    className: `framer-dtvjhh`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.962 23" overflow="visible"><path d="M 20.406 0 L 2.556 0 C 1.15 0 0 1.15 0 2.556 L 0 20.444 C 0 21.85 1.15 23 2.556 23 L 20.406 23 C 21.812 23 22.962 21.85 22.962 20.444 L 22.962 2.556 C 22.962 1.144 21.818 0 20.406 0 M 18.374 17.863 C 18.336 17.876 18.285 17.889 18.247 17.889 L 15.359 17.889 C 15.103 17.893 14.87 17.741 14.771 17.506 L 11.628 10.171 C 11.602 10.094 11.526 10.056 11.462 10.082 C 11.42 10.097 11.388 10.13 11.372 10.171 L 9.417 14.835 C 9.379 14.924 9.417 15.014 9.507 15.052 C 9.532 15.065 9.545 15.065 9.571 15.065 L 11.717 15.065 C 11.845 15.065 11.973 15.142 12.024 15.269 L 12.969 17.365 C 13.059 17.557 12.957 17.787 12.765 17.876 C 12.688 17.876 12.637 17.889 12.586 17.889 L 4.766 17.889 C 4.574 17.889 4.408 17.723 4.408 17.531 C 4.408 17.48 4.421 17.442 4.434 17.391 L 9.417 5.533 C 9.519 5.277 9.775 5.111 10.043 5.111 L 12.918 5.111 C 13.199 5.111 13.442 5.277 13.544 5.533 L 18.553 17.391 C 18.643 17.569 18.566 17.787 18.374 17.863" fill="rgb(81, 230, 23)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(V, {
                                        className: `framer-12a8yuk`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.962 23" overflow="visible"><path d="M 20.406 0 L 2.556 0 C 1.15 0 0 1.15 0 2.556 L 0 20.444 C 0 21.85 1.15 23 2.556 23 L 20.406 23 C 21.812 23 22.962 21.85 22.962 20.444 L 22.962 2.556 C 22.962 1.144 21.818 0 20.406 0" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(V, {
                                        className: `framer-1us1nrr`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.182 12.778" overflow="visible"><path d="M 13.966 12.752 C 13.928 12.765 13.877 12.778 13.838 12.778 L 10.951 12.778 C 10.695 12.782 10.462 12.63 10.363 12.394 L 7.219 5.06 C 7.194 4.983 7.117 4.945 7.053 4.971 C 7.012 4.986 6.979 5.019 6.964 5.06 L 5.009 9.724 C 4.971 9.813 5.009 9.903 5.098 9.941 C 5.124 9.954 5.137 9.954 5.162 9.954 L 7.309 9.954 C 7.437 9.954 7.564 10.031 7.616 10.158 L 8.561 12.254 C 8.651 12.446 8.548 12.676 8.357 12.765 C 8.28 12.765 8.229 12.778 8.178 12.778 L 0.358 12.778 C 0.166 12.778 0 12.612 0 12.42 C 0 12.369 0.013 12.331 0.026 12.279 L 5.009 0.422 C 5.111 0.166 5.367 0 5.635 0 L 8.51 0 C 8.791 0 9.034 0.166 9.136 0.422 L 14.145 12.279 C 14.234 12.458 14.158 12.676 13.966 12.752" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  l(j, {
                                    __fromCanvasComponent: !0,
                                    children: l(o, {
                                      children: l(`p`, {
                                        className: `framer-styles-preset-13u21mt`,
                                        "data-styles-preset": `DMtlcsvaj`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, rgb(255, 255, 255))`,
                                        },
                                        children: `Adobe Photoshop`,
                                      }),
                                    }),
                                    className: `framer-dvob4`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              p(Zn, {
                                __framer__animate: { transition: Q },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-am03lc`,
                                "data-border": !0,
                                "data-framer-name": `skill tag`,
                                children: [
                                  l(V, {
                                    className: `framer-npeenm`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.002 39" overflow="visible"><path d="M 1.501 0 C 0.89 0 0.339 0.37 0.11 0.937 C -0.12 1.504 0.018 2.153 0.457 2.578 L 10.797 12.6 L 1.501 12.6 C 0.673 12.6 0.001 13.272 0.001 14.1 L 0.001 26.7 C 0.001 27.17 0.217 27.59 0.557 27.866 L 13.543 38.654 C 13.99 39.025 14.612 39.105 15.138 38.858 C 15.665 38.61 16.001 38.081 16.001 37.5 L 16.001 28.2 L 27.501 28.2 C 28.112 28.2 28.663 27.83 28.892 27.263 C 29.122 26.696 28.984 26.047 28.545 25.622 L 18.205 15.6 L 27.501 15.6 C 28.329 15.6 29.001 14.928 29.001 14.1 L 29.001 1.5 C 29.001 0.672 28.329 0 27.501 0 Z" fill="rgb(0,0,0)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(j, {
                                    __fromCanvasComponent: !0,
                                    children: l(o, {
                                      children: l(`p`, {
                                        className: `framer-styles-preset-13u21mt`,
                                        "data-styles-preset": `DMtlcsvaj`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-30a1dc7f-21c9-4f57-88cb-ed350becd727, rgb(255, 255, 255))`,
                                        },
                                        children: `Framer`,
                                      }),
                                    }),
                                    className: `framer-fly67r`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    l(v.section, {
                      className: `framer-1c5zbzn`,
                      id: R,
                      layout: O,
                      ref: ue,
                      children: p(`div`, {
                        className: `framer-qk4jis`,
                        children: [
                          p(`div`, {
                            className: `framer-a1d4zz`,
                            children: [
                              l(z, {
                                height: 28,
                                children: l(X, {
                                  __framer__animate: { transition: Q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-okof5g-container`,
                                  "data-framer-name": `Caption`,
                                  name: `Caption`,
                                  nodeId: `qQXIVW71Z`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: l(Y, {
                                    EiYs6WDXn: `var(--token-2585ae86-e120-4353-80b8-1e0378448460, rgb(24, 24, 24))`,
                                    FlbcLL9ub: `PROJECTS`,
                                    height: `100%`,
                                    id: `qQXIVW71Z`,
                                    layoutId: `qQXIVW71Z`,
                                    name: `Caption`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              l(j, {
                                __fromCanvasComponent: !0,
                                children: l(o, {
                                  children: l(`h2`, {
                                    className: `framer-styles-preset-wj1llc`,
                                    "data-styles-preset": `fQF7LPveS`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: l(`strong`, { children: `My Featured Projects` }),
                                  }),
                                }),
                                className: `framer-4fiip7`,
                                effect: mr,
                                fonts: [`Inter`, `Inter-Bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(Jn, {
                                __framer__animate: { transition: Q },
                                __framer__animateOnce: !0,
                                __framer__enter: hr,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: l(o, {
                                  children: l(`p`, {
                                    className: `framer-styles-preset-13u21mt`,
                                    "data-styles-preset": `DMtlcsvaj`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `A collection  of UI/UX projects showcasing my design process,creativity,and problem-solving skill.`,
                                  }),
                                }),
                                className: `framer-z65wxg`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          p(`div`, {
                            className: `framer-2iezvt`,
                            children: [
                              p(`div`, {
                                className: `framer-15rgs62`,
                                children: [
                                  l(I, {
                                    breakpoint: w,
                                    overrides: {
                                      EMoodCk6A: {
                                        width: `max((min(max(${d?.width || `100vw`} - 120px, 1px), 1200px) - 20px) / 2, 1px)`,
                                      },
                                      l_Wru7hTO: {
                                        width: `min(${d?.width || `100vw`} - 48px, 1200px)`,
                                      },
                                    },
                                    children: l(z, {
                                      height: 604,
                                      width: `max((min(max(${d?.width || `100vw`} - 400px, 1px), 1200px) - 20px) / 2, 1px)`,
                                      children: l(X, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1a6o7e3-container`,
                                        "data-framer-name": `project card`,
                                        name: `project card`,
                                        nodeId: `QvT_y1cp3`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: l(G, {
                                          ASRKczPa_: `Social Media App Design`,
                                          FpcePnGXA: `https://www.figma.com/design/B2mjQaJtZbWlRCHrQEObfo/App-Design--Community-?m=auto&t=h6oSrbURtSF4ybOQ-6`,
                                          height: `100%`,
                                          id: `QvT_y1cp3`,
                                          layoutId: `QvT_y1cp3`,
                                          name: `project card`,
                                          OikHOW9Re: gr(
                                            {
                                              pixelHeight: 816,
                                              pixelWidth: 1306,
                                              src: `../../assets/images/3XOrpZvnCW6NesKW87a20OI6i4.png?width=1306&height=816`,
                                              srcSet: `../../assets/images/3XOrpZvnCW6NesKW87a20OI6i4.png 512w,../../assets/images/3XOrpZvnCW6NesKW87a20OI6i4.png?scale-down-to=1024&width=1306&height=816 1024w,../../assets/images/3XOrpZvnCW6NesKW87a20OI6i4.png?width=1306&height=816 1306w`,
                                            },
                                            `Project Mockup`
                                          ),
                                          RuioiX8bO: `A clean and intuitive social media app designed to make connecting, sharing, and discovering content simple and engaging.`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  l(I, {
                                    breakpoint: w,
                                    overrides: {
                                      EMoodCk6A: {
                                        width: `max((min(max(${d?.width || `100vw`} - 120px, 1px), 1200px) - 20px) / 2, 1px)`,
                                      },
                                      l_Wru7hTO: {
                                        width: `min(${d?.width || `100vw`} - 48px, 1200px)`,
                                      },
                                    },
                                    children: l(z, {
                                      height: 604,
                                      width: `max((min(max(${d?.width || `100vw`} - 400px, 1px), 1200px) - 20px) / 2, 1px)`,
                                      children: l(X, {
                                        __framer__animate: { transition: _r },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1gs8z7h-container`,
                                        "data-framer-name": `project card`,
                                        name: `project card`,
                                        nodeId: `E1UqIErTK`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: l(G, {
                                          ASRKczPa_: `Digital Marketing Website`,
                                          FpcePnGXA: `https://www.figma.com/design/x8odHFn3Zck2beXZ0Vkgry/Untitled?m=auto&t=h6oSrbURtSF4ybOQ-6`,
                                          height: `100%`,
                                          id: `E1UqIErTK`,
                                          layoutId: `E1UqIErTK`,
                                          name: `project card`,
                                          OikHOW9Re: gr(
                                            {
                                              pixelHeight: 800,
                                              pixelWidth: 1200,
                                              src: `../../assets/images/DytQyHtEjoEnHYlJ4boAgRoQ9ws.webp?width=1200&height=800`,
                                              srcSet: `../../assets/images/DytQyHtEjoEnHYlJ4boAgRoQ9ws.webp 512w,../../assets/images/DytQyHtEjoEnHYlJ4boAgRoQ9ws.webp?scale-down-to=1024&width=1200&height=800 1024w,../../assets/images/DytQyHtEjoEnHYlJ4boAgRoQ9ws.webp?width=1200&height=800 1200w`,
                                            },
                                            `Project Mockup`
                                          ),
                                          RuioiX8bO: `“A modern digital agency website focused on clear navigation, engaging visuals, and a smooth user experience.”`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              p(`div`, {
                                className: `framer-fz7cg5`,
                                children: [
                                  l(I, {
                                    breakpoint: w,
                                    overrides: {
                                      EMoodCk6A: {
                                        width: `max((min(max(${d?.width || `100vw`} - 120px, 1px), 1200px) - 20px) / 2, 1px)`,
                                      },
                                      l_Wru7hTO: {
                                        width: `min(${d?.width || `100vw`} - 48px, 1200px)`,
                                      },
                                    },
                                    children: l(z, {
                                      height: 604,
                                      width: `max((min(max(${d?.width || `100vw`} - 400px, 1px), 1200px) - 20px) / 2, 1px)`,
                                      children: l(X, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-ufzftn-container`,
                                        "data-framer-name": `project card`,
                                        name: `project card`,
                                        nodeId: `ATqKIxt1K`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: l(G, {
                                          ASRKczPa_: `Gallery Card Animation`,
                                          FpcePnGXA: `https://www.figma.com/design/MnbMtzWziTuNxsfIf417mf/Untitled?t=h6oSrbURtSF4ybOQ-1`,
                                          height: `100%`,
                                          id: `ATqKIxt1K`,
                                          layoutId: `ATqKIxt1K`,
                                          name: `project card`,
                                          OikHOW9Re: gr(
                                            {
                                              pixelHeight: 399,
                                              pixelWidth: 820,
                                              src: `../../assets/images/CgujQIMTmeaBBSPot3HK6ylgvu4.png?width=820&height=399`,
                                              srcSet: `../../assets/images/CgujQIMTmeaBBSPot3HK6ylgvu4.png 512w,../../assets/images/CgujQIMTmeaBBSPot3HK6ylgvu4.png?width=820&height=399 820w`,
                                            },
                                            `Project Mockup`
                                          ),
                                          RuioiX8bO: `"An interactive gallery experience featuring smooth card animations and engaging hover interactions."`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  l(I, {
                                    breakpoint: w,
                                    overrides: {
                                      EMoodCk6A: {
                                        width: `max((min(max(${d?.width || `100vw`} - 120px, 1px), 1200px) - 20px) / 2, 1px)`,
                                      },
                                      l_Wru7hTO: {
                                        width: `min(${d?.width || `100vw`} - 48px, 1200px)`,
                                      },
                                    },
                                    children: l(z, {
                                      height: 604,
                                      width: `max((min(max(${d?.width || `100vw`} - 400px, 1px), 1200px) - 20px) / 2, 1px)`,
                                      children: l(X, {
                                        __framer__animate: { transition: _r },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1rrdu4l-container`,
                                        "data-framer-name": `project card`,
                                        name: `project card`,
                                        nodeId: `iQPsjfezt`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: l(G, {
                                          ASRKczPa_: `Animating Mesh Gradients `,
                                          FpcePnGXA: `https://www.figma.com/design/BFE8aPM2lSeXpbEuqm5m0B/Untitled?t=h6oSrbURtSF4ybOQ-1`,
                                          height: `100%`,
                                          id: `iQPsjfezt`,
                                          layoutId: `iQPsjfezt`,
                                          name: `project card`,
                                          OikHOW9Re: gr(
                                            {
                                              pixelHeight: 556,
                                              pixelWidth: 305,
                                              src: `../../assets/images/CTYH7jfitYARTmesd0SxYZiHmg.png`,
                                              srcSet: `../../assets/images/CTYH7jfitYARTmesd0SxYZiHmg.png 305w`,
                                            },
                                            `Project Mockup`
                                          ),
                                          RuioiX8bO: `“A creative exploration of animated mesh gradients designed to create smooth, vibrant, and dynamic visual effects in Figma.”`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              l(z, {
                                height: 48,
                                children: l(X, {
                                  __framer__animate: { transition: Q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: vr,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1rfaf3d-container`,
                                  "data-framer-name": `Primary Button`,
                                  name: `Primary Button`,
                                  nodeId: `ndjXW7M5R`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: l(ye, {
                                    e4UmzZLrR: `Download My CV`,
                                    height: `100%`,
                                    id: `ndjXW7M5R`,
                                    layoutId: `ndjXW7M5R`,
                                    name: `Primary Button`,
                                    nJ8ZxmZCD: `https://drive.google.com/file/d/1M5KwqnCW2w3TEZfShsOYEd-CXG6c6FFq/view?usp=drivesdk`,
                                    O7pEZxxIM: !0,
                                    variant: fr(`vcIzXPKgG`),
                                    width: `100%`,
                                    ZkjMwhG5r: !1,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    l(z, {
                      children: l(oe, {
                        className: `framer-1emzmq2-container`,
                        "data-framer-name": `Lenis`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: O,
                        name: `Lenis`,
                        nodeId: `xu2nblINo`,
                        scopeId: `augiA20Il`,
                        children: l(ut, {
                          height: `100%`,
                          id: `xu2nblINo`,
                          infinite: !1,
                          intensity: 20,
                          layoutId: `xu2nblINo`,
                          name: `Lenis`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-kiXsy.framer-lux5qc, .framer-kiXsy .framer-lux5qc { display: block; }`,
        `.framer-kiXsy.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-b4d223ed-03f5-4a9b-89ad-72802d44a023, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 2248px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-kiXsy .framer-19tm636 { align-content: center; align-items: center; background-color: var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, #141414); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 180px 200px 140px 200px; position: relative; width: 100%; }`,
        `.framer-kiXsy .framer-1prauj4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-kiXsy .framer-pamar2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kiXsy .framer-3uanbr { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 76px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-kiXsy .framer-n9l0im { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kiXsy .framer-1y06zyi { align-content: center; align-items: center; background-color: var(--token-2585ae86-e120-4353-80b8-1e0378448460, #181818); border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 16px 8px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-kiXsy .framer-1kplzer-container, .framer-kiXsy .framer-x43io1-container, .framer-kiXsy .framer-15ymhb4-container, .framer-kiXsy .framer-6vnead-container, .framer-kiXsy .framer-okof5g-container, .framer-kiXsy .framer-1rfaf3d-container, .framer-kiXsy .framer-1emzmq2-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-kiXsy .framer-c3ymsf, .framer-kiXsy .framer-dvob4, .framer-kiXsy .framer-fly67r { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-kiXsy .framer-16qgs0s, .framer-kiXsy .framer-2ppgqs, .framer-kiXsy .framer-uelw1l, .framer-kiXsy .framer-4fiip7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-kiXsy .framer-1n1wwge { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-kiXsy .framer-1tqe097-container, .framer-kiXsy .framer-1icvxtd-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-kiXsy .framer-kong2l { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 13.693694381026534%, rgb(0, 0, 0) 87.20720995653856%, rgba(0, 0, 0, 0) 100%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 57px; height: min-content; justify-content: flex-start; mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 13.693694381026534%, rgb(0, 0, 0) 87.20720995653856%, rgba(0, 0, 0, 0) 100%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 90%; }`,
        `.framer-kiXsy .framer-1qzo4km, .framer-kiXsy .framer-4d3qj8, .framer-kiXsy .framer-18f1srs { align-content: center; align-items: center; background-color: var(--token-2585ae86-e120-4353-80b8-1e0378448460, #181818); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 85px; justify-content: center; padding: 0px; position: relative; width: 85px; }`,
        `.framer-kiXsy .framer-skiabk { height: 48px; position: relative; width: 48px; }`,
        `.framer-kiXsy .framer-14niagp, .framer-kiXsy .framer-11ze9jz, .framer-kiXsy .framer-1vhkgpc, .framer-kiXsy .framer-cum3jk, .framer-kiXsy .framer-197avvn, .framer-kiXsy .framer-1s5ejmp, .framer-kiXsy .framer-110u4q { height: 48px; left: 0px; position: absolute; top: 0px; width: 48px; }`,
        `.framer-kiXsy .framer-1duar9n { height: 31px; left: 11px; position: absolute; top: 8px; width: 24px; }`,
        `.framer-kiXsy .framer-1ghaa0f { height: 37px; position: relative; width: 24px; }`,
        `.framer-kiXsy .framer-1l5myx6 { height: 11px; left: 0px; position: absolute; top: 13px; width: 11px; }`,
        `.framer-kiXsy .framer-1jg806q { height: 11px; left: 0px; position: absolute; top: 0px; width: 11px; }`,
        `.framer-kiXsy .framer-k2nrbi { height: 11px; left: 13px; position: absolute; top: 0px; width: 10px; }`,
        `.framer-kiXsy .framer-1cq3t00 { height: 11px; left: 13px; position: absolute; top: 13px; width: 11px; }`,
        `.framer-kiXsy .framer-6snauf { height: 11px; left: 0px; position: absolute; top: 27px; width: 11px; }`,
        `.framer-kiXsy .framer-27ex4a { height: 36px; position: relative; width: 36px; }`,
        `.framer-kiXsy .framer-i61o02 { height: 36px; left: 0px; position: absolute; top: 0px; width: 36px; }`,
        `.framer-kiXsy .framer-i87omn { height: 20px; left: 7px; position: absolute; top: 8px; width: 22px; }`,
        `.framer-kiXsy .framer-1rn8c5k { background-color: var(--token-2585ae86-e120-4353-80b8-1e0378448460, #181818); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: 1 0 0px; height: 500px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-kiXsy .framer-1lixqa2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 100%; }`,
        `.framer-kiXsy .framer-58wpx9 { flex: none; height: 409px; position: relative; width: 500px; }`,
        `.framer-kiXsy .framer-1qrxlys { flex: none; height: 500px; position: relative; width: 500px; }`,
        `.framer-kiXsy .framer-1oabbam { align-content: flex-start; align-items: flex-start; background-color: var(--token-2585ae86-e120-4353-80b8-1e0378448460, #181818); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 200px 120px 200px; position: relative; width: 100%; }`,
        `.framer-kiXsy .framer-tok9bp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kiXsy .framer-1dz4twi, .framer-kiXsy .framer-a1d4zz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kiXsy .framer-15lbuye, .framer-kiXsy .framer-z65wxg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 40%; }`,
        `.framer-kiXsy .framer-1swkebq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 70%; }`,
        `.framer-kiXsy .framer-7oi5mp, .framer-kiXsy .framer-am03lc { --border-bottom-width: 1px; --border-color: var(--token-eaa444f4-7e99-47ba-8c71-b1ca35a8422f, rgba(255, 255, 255, 0.05)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, #141414); border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 16px 24px 16px 24px; position: relative; width: min-content; }`,
        `.framer-kiXsy .framer-dtvjhh { height: 23px; position: relative; width: 23px; }`,
        `.framer-kiXsy .framer-12a8yuk { height: 23px; left: 0px; position: absolute; top: 0px; width: 23px; }`,
        `.framer-kiXsy .framer-1us1nrr { height: 13px; left: 4px; position: absolute; top: 5px; width: 14px; }`,
        `.framer-kiXsy .framer-npeenm { height: 39px; position: relative; width: 29px; }`,
        `.framer-kiXsy .framer-1c5zbzn { align-content: flex-start; align-items: flex-start; background-color: var(--token-26bc4f1b-0df8-4268-935d-083567ac6888, #141414); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 200px 120px 200px; position: relative; width: 100%; }`,
        `.framer-kiXsy .framer-qk4jis { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-kiXsy .framer-2iezvt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 129px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kiXsy .framer-15rgs62, .framer-kiXsy .framer-fz7cg5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kiXsy .framer-1a6o7e3-container, .framer-kiXsy .framer-1gs8z7h-container, .framer-kiXsy .framer-ufzftn-container, .framer-kiXsy .framer-1rrdu4l-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ...ve,
        ...Me,
        ...Ne,
        ...Oe,
        `.framer-kiXsy[data-border="true"]::after, .framer-kiXsy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-kiXsy.framer-72rtr7 { width: 810px; } .framer-kiXsy .framer-19tm636 { padding: 180px 60px 96px 60px; } .framer-kiXsy .framer-pamar2 { flex-direction: column; } .framer-kiXsy .framer-3uanbr { flex: none; gap: 32px; width: 100%; } .framer-kiXsy .framer-kong2l { width: 100%; } .framer-kiXsy .framer-1rn8c5k { flex: none; width: 100%; } .framer-kiXsy .framer-1oabbam, .framer-kiXsy .framer-1c5zbzn { padding: 96px 60px 96px 60px; } .framer-kiXsy .framer-z65wxg { width: 70%; }}`,
        `@media (max-width: 809.98px) { .framer-kiXsy.framer-72rtr7 { width: 390px; } .framer-kiXsy .framer-19tm636 { flex-direction: column; padding: 140px 24px 60px 24px; } .framer-kiXsy .framer-1prauj4, .framer-kiXsy .framer-tok9bp, .framer-kiXsy .framer-qk4jis, .framer-kiXsy .framer-1a6o7e3-container, .framer-kiXsy .framer-1gs8z7h-container, .framer-kiXsy .framer-ufzftn-container, .framer-kiXsy .framer-1rrdu4l-container { flex: none; width: 100%; } .framer-kiXsy .framer-pamar2, .framer-kiXsy .framer-15rgs62, .framer-kiXsy .framer-fz7cg5 { flex-direction: column; } .framer-kiXsy .framer-3uanbr { flex: none; gap: 32px; width: 100%; } .framer-kiXsy .framer-kong2l, .framer-kiXsy .framer-z65wxg { width: 100%; } .framer-kiXsy .framer-1rn8c5k { flex: none; height: 400px; width: 100%; } .framer-kiXsy .framer-1oabbam, .framer-kiXsy .framer-1c5zbzn { flex-direction: column; padding: 60px 24px 60px 24px; }}`,
      ],
      `framer-kiXsy`
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 4501, width: 1280 }),
    H(
      $,
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
        ...Vn,
        ...Un,
        ...Gn,
        ...qn,
        ...Yn,
        ...Xn,
        ...Qn,
        ...$n,
        ...D(me),
        ...D(Se),
        ...D(Ie),
        ...D(Te),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          w(K, {}, t),
          w(W, {}, t),
          w(ye, {}, t),
          w(Y, {}, t),
          w(J, {}, t),
          w(q, {}, t),
          w(G, {}, t),
        ])
      ),
    }),
    (Sr = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `4501`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1280`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"EMoodCk6A":{"layout":["fixed","fixed"]},"l_Wru7hTO":{"layout":["fixed","fixed"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerScrollSections: `{"z5mBxg2cw":{"pattern":":z5mBxg2cw","name":"skills"},"PSSTNTYbx":{"pattern":":PSSTNTYbx","name":"projects"}}`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Sr as __FramerMetadata__, $ as default, nr as queryParamNames };
//# sourceMappingURL=EWQ6kgFmcP_hfC-FM9PqZFAYdeXmZ96Ns3uTzQy3eNY.D90bKpEi.mjs.map
