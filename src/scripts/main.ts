/* All page behaviour. Everything here is an enhancement: with JavaScript off,
   the page shows every section and the final design in the hero phone. */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const html = document.documentElement;
const $ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => c.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => Array.from(c.querySelectorAll<T>(s));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

/* ---------- sketch → wireframe → final ---------- */
const stage = $('#stage');
const grip = $('#grip');
const pct = $('#pct');
const rail3 = $('#rail3');
const stageNames = $$('.readout .st b').map((b) => b.textContent || '');
let P = 1;

function setP(p: number) {
  if (!stage) return;
  P = clamp(p, 0, 1);
  const a = clamp(P / 0.5, 0, 1); // wireframe wipes over the sketch
  const b = clamp((P - 0.5) / 0.5, 0, 1); // final wipes over the wireframe
  const seg = P < 0.5 ? a : b;
  const lo = clamp(Math.min(seg, 1 - seg) * 14, 0, 1); // scan line fades out at each stop
  const s = P < 0.25 ? 0 : P < 0.75 ? 1 : 2;
  stage.style.setProperty('--p', P.toFixed(4));
  stage.style.setProperty('--a', a.toFixed(4));
  stage.style.setProperty('--b', b.toFixed(4));
  stage.style.setProperty('--x', seg.toFixed(4));
  stage.style.setProperty('--lo', lo.toFixed(3));
  if (stage.dataset.s !== String(s)) stage.dataset.s = String(s);
  if (pct) pct.textContent = ('00' + Math.round(P * 100)).slice(-3);
  $$('.slider .stop').forEach((el, i) => el.classList.toggle('on', P >= i * 0.5 - 0.001));
  $$('.slider .labels span').forEach((el, i) => el.classList.toggle('on', i === s));
  if (grip) {
    grip.setAttribute('aria-valuenow', String(Math.round(P * 100)));
    grip.setAttribute('aria-valuetext', stageNames[s] || '');
  }
}

if (stage && grip && rail3) {
  const fromX = (x: number) => {
    const r = rail3.getBoundingClientRect();
    return (x - r.left) / r.width;
  };
  let dragging = false;
  rail3.addEventListener('pointerdown', (e) => {
    dragging = true;
    rail3.setPointerCapture(e.pointerId);
    grip.classList.add('drag');
    setP(fromX(e.clientX));
    e.preventDefault();
  });
  rail3.addEventListener('pointermove', (e) => {
    if (dragging) setP(fromX(e.clientX));
  });
  ['pointerup', 'pointercancel'].forEach((t) =>
    rail3.addEventListener(t, () => {
      dragging = false;
      grip.classList.remove('drag');
    }),
  );
  grip.addEventListener('keydown', (e) => {
    const d = e.key === 'ArrowRight' || e.key === 'ArrowUp' ? 0.05 : e.key === 'ArrowLeft' || e.key === 'ArrowDown' ? -0.05 : 0;
    if (e.key === 'Home') { setP(0); e.preventDefault(); }
    else if (e.key === 'End') { setP(1); e.preventDefault(); }
    else if (d) { setP(P + d); e.preventDefault(); }
  });
}

/* ---------- spotlight + cursor coordinates ---------- */
if (fine) {
  const spot = $('.spot');
  const xy = $('#xy');
  let mx = 0, my = 0, q = false;
  const pad = (n: number) => ('000' + Math.round(n)).slice(-4);
  addEventListener('pointermove', (e) => {
    mx = e.clientX; my = e.clientY;
    html.classList.add('has-spot');
    if (!q) {
      q = true;
      requestAnimationFrame(() => {
        q = false;
        spot?.style.setProperty('--mx', mx + 'px');
        spot?.style.setProperty('--my', my + 'px');
        if (xy) xy.innerHTML = 'X ' + pad(mx) + ' &nbsp;Y ' + pad(my);
      });
    }
  }, { passive: true });
}

/* ---------- small-screen menu: close after a tap, or on Escape ---------- */
const menu = $<HTMLDetailsElement>('#menu');
if (menu) {
  menu.addEventListener('click', (e) => { if ((e.target as Element).closest('a')) menu.open = false; });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') menu.open = false; });
  document.addEventListener('click', (e) => { if (menu.open && !menu.contains(e.target as Node)) menu.open = false; });
}

/* ---------- Bengaluru clock ---------- */
const clock = $('#clock');
const tick = () => {
  try {
    if (clock) clock.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }).format(new Date());
  } catch { /* leave the dash */ }
};
tick();
setInterval(tick, 30000);

/* ---------- cutout sticker: drag, tilt, wobble ---------- */
const me = $('#me');
if (me) {
  const say = $('#meSay');
  const sayDefault = say?.textContent || '';
  let dx = 0, dy = 0, sx = 0, sy = 0, dragging = false;
  const wob = () => { me.classList.remove('wob'); void me.offsetWidth; me.classList.add('wob'); };
  me.addEventListener('animationend', () => me.classList.remove('wob'));
  if (fine) {
    me.addEventListener('pointerdown', (e) => {
      dragging = true; sx = e.clientX - dx; sy = e.clientY - dy;
      me.setPointerCapture(e.pointerId); me.classList.add('grab'); e.preventDefault();
    });
    me.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      dx = e.clientX - sx; dy = e.clientY - sy;
      me.style.setProperty('--dx', dx + 'px'); me.style.setProperty('--dy', dy + 'px');
      if (say && Math.abs(dx) + Math.abs(dy) > 60) say.textContent = 'ok, put me back';
    });
    ['pointerup', 'pointercancel'].forEach((t) =>
      me.addEventListener(t, () => {
        if (!dragging) return;
        dragging = false; me.classList.remove('grab');
        if (Math.abs(dx) + Math.abs(dy) < 4) wob();
      }),
    );
    me.addEventListener('pointerenter', () => { if (!dragging && !reduce) wob(); });
    me.addEventListener('dblclick', () => {
      dx = dy = 0; me.style.setProperty('--dx', '0px'); me.style.setProperty('--dy', '0px');
      if (say) say.textContent = sayDefault; wob();
    });
    if (!reduce) {
      let tq = false, tx = 0, ty = 0;
      addEventListener('pointermove', (e) => {
        tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5;
        if (!tq) {
          tq = true;
          requestAnimationFrame(() => {
            tq = false;
            me.style.setProperty('--tr', (tx * 9).toFixed(2) + 'deg');
            me.style.setProperty('--tx', (tx * -12).toFixed(1) + 'px');
            me.style.setProperty('--ty', (ty * -8).toFixed(1) + 'px');
          });
        }
      }, { passive: true });
    }
  } else {
    me.addEventListener('click', wob);
  }
}

/* ---------- scroll-driven motion ---------- */
gsap.registerPlugin(ScrollTrigger);

if (!reduce) {
  const lenis = new Lenis({ anchors: true, lerp: 0.12 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

function countUp(el: HTMLElement) {
  const o = { v: Number(el.dataset.from) };
  const to = Number(el.dataset.to);
  if (o.v === to) return;
  el.textContent = String(o.v);
  gsap.to(o, { v: to, duration: 1.4, ease: 'power3.out', onUpdate: () => { el.textContent = String(Math.round(o.v)); } });
}

const mm = gsap.matchMedia();
mm.add(
  { desk: '(min-width: 960px)', small: '(max-width: 959.98px)', reduce: '(prefers-reduced-motion: reduce)' },
  (ctx) => {
    const c = ctx.conditions as { desk: boolean; small: boolean; reduce: boolean };
    if (c.reduce) { setP(1); return; }

    html.classList.add('anim');
    requestAnimationFrame(() => requestAnimationFrame(() => html.classList.add('in')));
    const isHome = !!stage;
    if (isHome) gsap.from('.id-art', { scale: 0.5, rotation: -14, opacity: 0, duration: 0.9, ease: 'back.out(1.9)', delay: 0.5, clearProps: 'transform,opacity' });

    /* hero intro: words rise */
    const h1 = $('#h1');
    if (h1 && !h1.dataset.split) {
      h1.dataset.split = '1';
      const wrap = (node: Node) => {
        Array.from(node.childNodes).forEach((n) => {
          if (n.nodeType === 3) {
            const f = document.createDocumentFragment();
            (n.textContent || '').split(/(\s+)/).forEach((t) => {
              if (!t) return;
              if (/^\s+$/.test(t)) { f.appendChild(document.createTextNode(' ')); return; }
              const w = document.createElement('span'); w.className = 'w';
              const i = document.createElement('span'); i.textContent = t;
              w.appendChild(i); f.appendChild(w);
            });
            node.replaceChild(f, n);
          } else if (n.nodeType === 1) wrap(n);
        });
      };
      wrap(h1);
    }
    gsap.from('#h1 .w>span', { yPercent: 112, duration: 1, ease: 'power4.out', stagger: 0.045, delay: 0.1 });
    if (isHome) {
      gsap.from('.id-name, .id-role, .lede, .facts, .hero-cta', { opacity: 0, y: 14, duration: 0.8, ease: 'power3.out', stagger: 0.08, delay: 0.45, clearProps: 'all' });
      gsap.from('#stage', { opacity: 0, y: 24, duration: 1.1, ease: 'power3.out', delay: 0.3, clearProps: 'opacity,transform' });
    } else {
      gsap.from('.cs-cover .crumb, .cs-sum, .cs-meta', { opacity: 0, y: 14, duration: 0.8, ease: 'power3.out', stagger: 0.08, delay: 0.45, clearProps: 'all' });
      gsap.from('.cs-hero', { opacity: 0, y: 28, duration: 1.1, ease: 'power3.out', delay: 0.55, clearProps: 'opacity,transform' });
    }

    /* reveals */
    ScrollTrigger.batch('[data-rv]', {
      start: 'top 88%', once: true,
      onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08 }),
    });

    const counts = $$('.count');
    if (!isHome) {
      counts.forEach((el) => ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => countUp(el) }));
      /* reading progress */
      const prog = $('#csProg');
      if (prog) gsap.to(prog, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.cs-body', start: 'top 60%', end: 'bottom bottom', scrub: 0.3 } });
      /* which chapter is on screen */
      const links = $$('.cs-index a');
      $$('.cs-sec').forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec, start: 'top 45%', end: 'bottom 45%',
          onToggle: (t) => { if (t.isActive) links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + sec.id)); },
        });
      });
      /* bars and marks draw when they scroll in */
      $$('[data-draw]').forEach((el) => ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true, onEnter: () => el.classList.add('on') }));
      /* the long page pans as the six questions scroll by */
      const convo = $('.convo');
      const shot = $('.convo-win .pan');
      const win = $('.convo-win .view');
      if (convo && shot && win && c.desk) {
        html.classList.add('pan-on');
        const qs = $$('.convo-q');
        const stops = qs.map((q) => Number(q.dataset.y || 0));
        const maxY = () => Math.max(0, shot.offsetHeight - win.offsetHeight);
        const setPan = (f: number) => {
          const pos = f * (qs.length - 1);
          const i = Math.min(qs.length - 2, Math.floor(pos));
          const k = pos - i;
          const frac = stops[i] + (stops[i + 1] - stops[i]) * k;
          shot.style.transform = 'translate3d(0,' + -Math.min(maxY(), frac * shot.offsetHeight) + 'px,0)';
          const act = Math.round(pos);
          qs.forEach((q, n) => q.classList.toggle('on', n === act));
        };
        setPan(0);
        ScrollTrigger.create({ trigger: '.convo-list', start: 'top 40%', end: 'bottom 60%', scrub: 0.4, onUpdate: (t) => setPan(t.progress), onRefresh: (t) => setPan(t.progress) });
      }
      ScrollTrigger.refresh();
      return () => { html.classList.remove('pan-on'); };
    }
    if (c.desk) {
      /* hero pin: scroll scrubs sketch → wireframe → final */
      const st = { p: 0.04 };
      setP(st.p);
      gsap.to(st, {
        p: 1, ease: 'none', onUpdate: () => setP(st.p),
        scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=150%', pin: true, scrub: 0.4, anticipatePin: 1 },
      });

      /* horizontal rail */
      html.classList.add('rail-on');
      const track = $('#track')!;
      const bar = $('#rbar');
      const idx = $('#ridx');
      const panels = $$('.panel:not(.quiet)');
      const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
      const tw = gsap.to(track, {
        x: () => -dist(), ease: 'none',
        scrollTrigger: {
          trigger: '.work', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.5, invalidateOnRefresh: true, anticipatePin: 1,
          onUpdate: (s) => {
            if (bar) bar.style.transform = 'scaleX(' + s.progress + ')';
            if (idx) idx.textContent = '0' + Math.min(panels.length, Math.floor(s.progress * panels.length * 0.999 + 0.35) + 1);
          },
        },
      });
      counts.forEach((el) => {
        const first = el.closest('.panel') === panels[0];
        ScrollTrigger.create(
          first
            ? { trigger: '.work', start: 'top 55%', once: true, onEnter: () => countUp(el) }
            : { trigger: el, containerAnimation: tw, start: 'left 82%', once: true, onEnter: () => countUp(el) },
        );
      });
      /* process marker travels the ruler */
      gsap.fromTo('#rmark', { xPercent: 0 }, { xPercent: 400, ease: 'none', scrollTrigger: { trigger: '.proc', start: 'top 80%', end: 'bottom 55%', scrub: 0.5 } });
      ScrollTrigger.refresh();
      return () => { html.classList.remove('rail-on'); gsap.set(track, { clearProps: 'transform' }); };
    } else {
      const st2 = { p: 0.04 };
      setP(st2.p);
      gsap.to(st2, {
        p: 1, ease: 'none', onUpdate: () => setP(st2.p),
        scrollTrigger: { trigger: '#cmp', start: 'top 70%', end: 'bottom 62%', scrub: 0.4 },
      });
      counts.forEach((el) => ScrollTrigger.create({ trigger: el, start: 'top 86%', once: true, onEnter: () => countUp(el) }));
    }
  },
);
addEventListener('load', () => ScrollTrigger.refresh());
