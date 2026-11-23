/* scandiweb.com header + footer scripts, snapshot of the live site (2026-11-23): the chrome's own embedded
   scripts (each run on its own), the footer newsletter form, and the site's Webflow runtime. */
(function(){if(window.__swcChrome)return;window.__swcChrome=true;
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
document.addEventListener('DOMContentLoaded', () => {
  const scope   = document.querySelector('.header-main_wrapper');
  const overlay = document.querySelector('.menu-blur_overlay');
  if (!scope || !overlay) return;
  const toggles = [...scope.querySelectorAll('.w-dropdown-toggle')];
  if (!toggles.length) return;

  let hideTimer;

  const show = () => {
    clearTimeout(hideTimer);                                   // cancel a pending hide
    overlay.style.display = 'block';
    requestAnimationFrame(() => overlay.classList.add('header-open'));
  };
  const hide = () => {
    overlay.classList.remove('header-open');
    const ms = parseFloat(getComputedStyle(overlay).transitionDuration) * 1000 || 0;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (!overlay.classList.contains('header-open')) overlay.style.display = '';
    }, ms);
  };
  const update = () => {
    const anyOpen = toggles.some(t => t.classList.contains('w--open'));
    const isShown = overlay.classList.contains('header-open');
    if (anyOpen && !isShown) show();
    if (!anyOpen && isShown) hide();
  };
  toggles.forEach(t =>
    new MutationObserver(update).observe(t, { attributes: true, attributeFilter: ['class'] })
  );
});
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
window.__gsapReady =
    window.__gsapReady ||
    new Promise((resolve) => {
      if (window.gsap) return resolve();
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
      s.onload = resolve;
      document.head.appendChild(s);
    });
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
document.addEventListener('DOMContentLoaded', function () {
    var closeIcon = document.querySelector('.nav-trigger_close');
    var header = document.querySelector('.header-mobile_container');
    if (!closeIcon || !header) return;
    function sync() {
      // X icon visible = menu open (icons are display-toggled by Webflow's animation)
      var open = getComputedStyle(closeIcon).display !== 'none';
      header.classList.toggle('mobile-menu-open', open);
      document.body.classList.toggle('mobile-menu-open', open);
    }
    new MutationObserver(sync).observe(closeIcon, {
      attributes: true,
      attributeFilter: ['style'],
    });
    sync();
  });
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
document.addEventListener('DOMContentLoaded', function () {
  const hoverTabElements = document.querySelectorAll('.nav-inmenu-tabs-toggle');
  const DEBOUNCE_DELAY = 100; // ms

  hoverTabElements.forEach((hoverTabElement) => {
    let hoverTimer = null;

    hoverTabElement.addEventListener('mouseenter', function () {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        hoverTabElement.dispatchEvent(
          new MouseEvent('click', { bubbles: false, cancelable: true, view: window })
        );
      }, DEBOUNCE_DELAY);
    });

    hoverTabElement.addEventListener('mouseleave', function () {
      clearTimeout(hoverTimer);
    });
  });
});
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
(() => {
  const OPEN_INTENT = 120;   // delay before first open
  const SWITCH_INTENT = 120; // delay when moving from one dropdown to another
  const CLOSE_GRACE = 200;   // delay before closing after mouse leaves
  const dropdowns = [...document.querySelectorAll('.w-dropdown')];
  let current = null;
  let openTimer, closeTimer;
  const setState = (dd, on) => {
    const toggle = dd.querySelector('.w-dropdown-toggle');
    const list = dd.querySelector('.w-dropdown-list');
    toggle?.classList.toggle('w--open', on);
    list?.classList.toggle('w--open', on);
    toggle?.setAttribute('aria-expanded', String(on));
  };
  const openDropdown = (dd) => {
    if (current && current !== dd) setState(current, false);
    setState(dd, true);
    current = dd;
  };
  const closeCurrent = () => {
    if (!current) return;
    setState(current, false);
    current = null;
  };
  dropdowns.forEach((dd) => {
    dd.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      clearTimeout(openTimer);
      if (current === dd) return;
      openTimer = setTimeout(() => openDropdown(dd), current ? SWITCH_INTENT : OPEN_INTENT);
    });
    dd.addEventListener('mouseleave', () => {
      clearTimeout(openTimer);
      closeTimer = setTimeout(closeCurrent, CLOSE_GRACE);
    });
  });
  document.addEventListener('click', (e) => {
    if (current && !current.contains(e.target)) closeCurrent();
  });
})();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
window.__gsapReady.then(() => {
  const header = document.querySelector('.header-main_wrapper');
  if (!header) return;

  // Timing, read from the CSS variables
  const css        = getComputedStyle(header);
  const raw        = css.getPropertyValue('--menu-dur').trim();
  const DUR        = raw.endsWith('ms') ? parseFloat(raw) / 1000 : parseFloat(raw) || 0.45;
  const CLOSE_DUR  = DUR / 1.5;     // close is 1.5x faster than open
  const SWITCH_DUR = DUR * 1.2;     // panel-to-panel crossfade, slower than open
  const EASE       = css.getPropertyValue('--menu-ease-gsap').trim() || 'power2.out';
  const CLOSE_EASE = 'power2.inOut'; // eases at both ends, no hard stop
  const BG_DUR     = DUR * .5;      // bar darkens first, in half the open duration
  const BG_GAP     = -BG_DUR * .15; // panel starts just before the bar is fully dark
                                    // 0 = wait for bar to finish, more negative = more overlap

  // Colours: var(--name) → var(--scandiweb---name) → hex, same convention as the CSS
  const cssVar = (name, hex) =>
    css.getPropertyValue(`--${name}`).trim() ||
    css.getPropertyValue(`--scandiweb---${name}`).trim() ||
    hex;

  const BG_ON     = cssVar('black', '#10132c');
  const [r, g, b] = gsap.utils.splitColor(BG_ON);
  const BG_CLEAR  = `rgba(${r}, ${g}, ${b}, 0)`;   // same hue, alpha 0: no white flash

  // What CSS wants the header to be right now: transparent, dark, white (is-scrolled), etc.
  const bgOff = () => {
    const inline = header.style.backgroundColor;
    header.style.backgroundColor = '';                   // hide GSAP's inline value
    const bg = getComputedStyle(header).backgroundColor; // read the CSS value
    header.style.backgroundColor = inline;               // restore tween start
    return bg === 'rgba(0, 0, 0, 0)' ? BG_CLEAR : bg;    // transparent → fade in the dark hue
  };

  const OPEN_CLASS = 'header-open';   // drives text, logo and CTA colours in CSS (06)
  const CLOSED = 'inset(0 0 100% 0)';
  const OPEN   = 'inset(0 0 0% 0)';

  const toggles = [...header.querySelectorAll('.w-dropdown-toggle')];
  const anyOpen = (except) => toggles.some(t => t !== except && t.classList.contains('w--open'));

  let headerOpen  = false; // dark header currently showing
  let shownHeight = 0;     // height of the panel currently on screen
  let headerTl;            // shared header bg tween, so any dropdown can cancel a pending close

  header.querySelectorAll('.w-dropdown').forEach((dd) => {
    const toggle = dd.querySelector('.w-dropdown-toggle');
    const list   = dd.querySelector('.w-dropdown-list');
    if (!toggle || !list) return;
    const items = [...list.children];
    let open = toggle.classList.contains('w--open');
    let tl;

    // Fix the tab content's min-height to the tallest pane so Webflow tab switches don't jump.
    const lockTabHeight = () => {
      const content = list.querySelector('.w-tab-content');
      if (!content || content.dataset.locked) return;
      const panes = [...content.querySelectorAll('.w-tab-pane')];
      const max = Math.max(...panes.map((p) => {
        const d = p.style.display, o = p.style.opacity;
        p.style.display = 'block'; p.style.opacity = '0';
        const h = p.offsetHeight;
        p.style.display = d; p.style.opacity = o;
        return h;
      }));
      content.style.minHeight = max + 'px';
      content.dataset.locked = '1';
    };

    const finish = () => {
      list.classList.remove('w--open');
      gsap.set(list,  { clearProps: 'clipPath,height' });
      gsap.set(items, { clearProps: 'opacity,transform' });
    };

    new MutationObserver(() => {
      const next = toggle.classList.contains('w--open');
      if (next === open) return;
      open = next;
      tl?.kill();

      if (open) {
        const switching = headerOpen;   // another panel was visible a moment ago
        const fromH     = shownHeight;
        headerOpen = true;
        headerTl?.kill();               // cancel a header close that hasn't finished (or started) yet

        gsap.set(list,  { clipPath: switching ? OPEN : CLOSED, height: 'auto' });
        gsap.set(items, { opacity: 0, y: switching ? 0 : 6 });
        lockTabHeight();
        const toH = list.offsetHeight;
        shownHeight = toH;

        tl = gsap.timeline();
        if (switching) {
          header.classList.add(OPEN_CLASS);   // bar is already dark, keep text light
          // Crossfade: slide height from the old panel to the new one, fade items in slowly.
          tl.fromTo(list, { height: fromH || toH }, { height: toH, duration: SWITCH_DUR, ease: EASE }, 0)
            .to(items, { opacity: 1, y: 0, duration: SWITCH_DUR, stagger: { amount: .1 }, ease: EASE }, .08);
        } else {
          // First open: bar darkens → text goes light and panel expands → items fade in.
          tl.to(header, { backgroundColor: BG_ON, duration: BG_DUR, ease: EASE, overwrite: 'auto' })
            .add(() => header.classList.add(OPEN_CLASS), '>' + BG_GAP)
            .to(list,   { clipPath: OPEN, duration: DUR, ease: EASE }, '<')
            .to(items,  { opacity: 1, y: 0, duration: DUR * .6, stagger: { amount: .06 }, ease: EASE }, '-=' + DUR * .5);
        }
        tl.set(list, { clearProps: 'clipPath,height' });

      } else {
        list.classList.add('w--open');   // keep visible during the out animation
        if (anyOpen(toggle)) { finish(); return; }   // sibling took over: hide instantly

        headerOpen = false;
        tl = gsap.timeline();
        // Close (1.5x faster): items fade → panel collapses → bg returns → only then text goes dark.
        tl.to(items,  { opacity: 0, y: 6, duration: CLOSE_DUR * .5, stagger: { amount: .02 }, ease: CLOSE_EASE })
          .to(list,   { clipPath: CLOSED, duration: CLOSE_DUR, ease: CLOSE_EASE }, '-=.05')
          .add(finish)
          .add(() => {
            if (headerOpen) return;               // another panel opened meanwhile: stay dark
            headerTl = gsap.timeline()
              .to(header, { backgroundColor: bgOff(), duration: CLOSE_DUR, ease: EASE,
                            overwrite: 'auto', clearProps: 'backgroundColor' })
              .add(() => { if (!headerOpen) header.classList.remove(OPEN_CLASS); });
          });
      }
    }).observe(toggle, { attributes: true, attributeFilter: ['class'] });
  });
});
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
(function () {
  var THRESHOLD = 70;
  var CLASS_NAME = 'is-scrolled';
  var SELECTORS = '.color-provider_wrapper, .mobile-nav_trigger, .header-mobile_container, .header-main_wrapper, .header-cta_dark, .header-cta_light, .header-nav_menu';

  var elements = document.querySelectorAll(SELECTORS);
  if (!elements.length) return;

  var scrolled = false;
  var ticking = false;

  function update() {
    ticking = false;
    var shouldBeScrolled = window.scrollY > THRESHOLD;

    if (shouldBeScrolled === scrolled) return;
    scrolled = shouldBeScrolled;

    elements.forEach(function (el) {
      el.classList.toggle(CLASS_NAME, scrolled);
    });
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();
})();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
/**
   * ------------------------------------------------------------
   * HubSpot top-banner → navbar offset (Webflow helper)
   * ------------------------------------------------------------
   *
   * Problem on scandiweb.com:
   *   HubSpot injects a top "web interactive" banner as
   *     <div id="hs-overlay-cta-XXXXXXXXXX" ...>   (position: fixed; top: 0; z-index: 9999)
   *   inside #hs-web-interactives-top-anchor, and pushes the page down with a spacer:
   *     <div id="hs-web-interactives-top-push-anchor">  (height = banner height)
   *
   *   The navbar (#navigation.navbar) is position: sticky; top: 0; z-index: 999 — so
   *   sticky pulls it back up to the top of the viewport, underneath the banner.
   *
   * Fix:
   *   Watch for the banner, measure its real height, and shift the navbar down by that
   *   amount. Because the navbar is *sticky*, the property that matters is the sticky
   *   `top` offset — a plain margin-top gets cancelled the moment the navbar sticks on
   *   scroll. So:
   *     - sticky / fixed navbar → top: calc(original top + banner height)
   *     - static / relative nav → margin-top: banner height   (fallback, in case a
   *                               breakpoint makes the navbar non-sticky)
   *
   *   The height is read live: the banner is injected async, animates in on scroll
   *   (1s transition), changes height per breakpoint, and goes back to 0 when the
   *   visitor closes it or HubSpot removes it.
   *
   * Where to put it:
   *   Webflow → Project/Page Settings → Custom Code → Before </body> tag
   *   (also works in the <head>; it waits for <body>).
   *
   * Config: NAV_SELECTOR / BANNER_SELECTOR / PUSH_SELECTOR below.
   * Also exposes --hs-banner-offset on <html> if you want to use it elsewhere in CSS.
   * ------------------------------------------------------------
   */

  (() => {
    // [0] Prevent double-initialization
    if (window.hsBannerNavbarOffsetV1) return;
    window.hsBannerNavbarOffsetV1 = true;

    const NAV_SELECTOR = '#navigation.w-nav';
    const BANNER_SELECTOR = '[id^="hs-overlay-cta-"]';
    const PUSH_SELECTOR = '#hs-web-interactives-top-push-anchor';
    const ANCHOR_SELECTOR = '#hs-web-interactives-top-anchor';
    const SETTLE_MS = 1400; // covers HubSpot's slide-in / collapse transitions

    const root = document.documentElement;
    const resizeObserved = new WeakSet();
    const mutationObserved = new WeakSet();

    let baseTop = null; // navbar's own sticky offset, read once before we override it
    let lastOffset = -1;
    let lastMode = '';
    let rafId = null;
    let settleUntil = 0;
    let mutationObserver = null;
    let resizeObserver = null;

    // Runs from <head> as well as from before </body>
    if (document.body) init();
    else document.addEventListener('DOMContentLoaded', init, { once: true });

    function init() {
      injectStyle();

      // [5] Watch everything that can change the banner height
      resizeObserver = 'ResizeObserver' in window
        ? new ResizeObserver(() => scheduleSync(false))
        : null;

      // The banner is injected async, re-rendered, and closed by the visitor → watch
      // the DOM. Scoped on purpose: a subtree observer on <body> would fire on every
      // Webflow interaction (IX2 writes inline styles constantly while scrolling).
      mutationObserver = new MutationObserver(() => {
        observeSizeTargets();
        observeAnchors();
        scheduleSync(true);
      });

      // HubSpot's anchors are direct children of <body>, so childList there is enough
      // to catch them appearing / disappearing
      mutationObserver.observe(document.body, { childList: true });

      // Scroll doesn't need the settle window: the banner's reveal is picked up by the
      // ResizeObserver (height) or the anchor MutationObserver (class/style)
      window.addEventListener('scroll', () => scheduleSync(false), { passive: true });
      window.addEventListener('resize', () => scheduleSync(true), { passive: true });
      window.addEventListener('orientationchange', () => scheduleSync(true));
      window.addEventListener('load', () => scheduleSync(true), { once: true });

      observeSizeTargets();
      observeAnchors();
      scheduleSync(true);
    }

    // [1] Inject the rule once — the value itself is driven by a CSS variable
    function injectStyle() {
      const style = document.createElement('style');
      style.setAttribute('data-hs-banner-navbar-offset', '');
      style.textContent = `
        html[data-hs-banner-shift="sticky"] ${NAV_SELECTOR} {
          top: calc(var(--nav-base-top, 0px) + var(--hs-banner-offset, 0px)) !important;
        }
        html[data-hs-banner-shift="flow"] ${NAV_SELECTOR} {
          margin-top: var(--hs-banner-offset, 0px) !important;
        }
      `;
      (document.head || root).appendChild(style);
    }

    // [2] Measure the space the banner takes at the top of the viewport
    function getBannerOffset() {
      let offset = 0;

      // 2a. HubSpot's own spacer already equals the banner height when it pushes content
      const push = document.querySelector(PUSH_SELECTOR);
      if (push) offset = Math.max(offset, push.getBoundingClientRect().height);

      // 2b. Overlay mode (no spacer): measure the banner itself, but only while it is
      //     really pinned to the top of the viewport and visible
      document.querySelectorAll(BANNER_SELECTOR).forEach((banner) => {
        const cs = getComputedStyle(banner);
        if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return;

        const rect = banner.getBoundingClientRect();
        if (!rect.height || rect.top > 1) return; // bottom banner / slid out → ignore

        offset = Math.max(offset, rect.bottom);
      });

      return Math.max(0, Math.round(offset));
    }

    // [3] Apply it to the navbar
    function sync() {
      const nav = document.querySelector(NAV_SELECTOR);
      if (!nav) return;

      const position = getComputedStyle(nav).position;

      if (baseTop === null) {
        const top = parseFloat(getComputedStyle(nav).top);
        baseTop = Number.isFinite(top) ? top : 0;
        root.style.setProperty('--nav-base-top', `${baseTop}px`);
      }

      const offset = getBannerOffset();
      const mode = position === 'sticky' || position === 'fixed' ? 'sticky' : 'flow';

      if (offset !== lastOffset) {
        lastOffset = offset;
        root.style.setProperty('--hs-banner-offset', `${offset}px`);
      }
      if (mode !== lastMode) {
        lastMode = mode;
        root.setAttribute('data-hs-banner-shift', mode);
      }
    }

    // [4] Re-measure on the next frame, then keep measuring for a short window so CSS
    //     transitions (banner sliding in / collapsing) land on their final height
    function scheduleSync(settle) {
      if (settle) settleUntil = Math.max(settleUntil, performance.now() + SETTLE_MS);
      if (rafId !== null) return;

      rafId = requestAnimationFrame(function tick() {
        sync();
        rafId = performance.now() < settleUntil ? requestAnimationFrame(tick) : null;
      });
    }

    function observeSizeTargets() {
      if (!resizeObserver) return;
      [PUSH_SELECTOR, BANNER_SELECTOR].forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          if (resizeObserved.has(el)) return;
          resizeObserved.add(el);
          resizeObserver.observe(el);
        });
      });
    }

    function observeAnchors() {
      [ANCHOR_SELECTOR, PUSH_SELECTOR].forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          if (mutationObserved.has(el)) return;
          mutationObserved.add(el);
          mutationObserver.observe(el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class', 'hidden'],
          });
        });
      });
    }
  })();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var n=0;function mk(){var t=document.getElementById('swc-newsletter');if(!t||t.getAttribute('data-hs'))return;if(!(window.hbspt&&window.hbspt.forms)){if(n++<200)setTimeout(mk,150);return;}t.setAttribute('data-hs','1');window.hbspt.forms.create({portalId:'25724996',formId:'57e90105-d48e-4075-9b2b-309747c7a06a',region:'eu1',target:'#swc-newsletter'});}if(!(window.hbspt&&window.hbspt.forms)&&!document.querySelector('script[src*="hsforms.net/forms/embed/v2.js"]')){var s=document.createElement('script');s.src='https://js-eu1.hsforms.net/forms/embed/v2.js';document.head.appendChild(s);}mk();})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
(() => {
    document.addEventListener('DOMContentLoaded', () => {
      // global guard (prevents full re-run issues)
      if (window.marqueeInitialized) return;
      window.marqueeInitialized = true;

      document.querySelectorAll('[data-animation="marquee"]').forEach((el) => {
        // element-level guard (VERY important for Webflow)
        if (el.dataset.marqueeInit === 'true') return;
        el.dataset.marqueeInit = 'true';

        const children = Array.from(el.children);

        if (!children.length) return;

        // clone once
        children.forEach((child) => {
          const clone = child.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          el.appendChild(clone);
        });
      });
    });
  })();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
document.addEventListener('DOMContentLoaded', function () {
    const footerMenus = document.querySelectorAll('[class~="footer-root"] [class~="footer-menu"]');

    footerMenus.forEach((menu) => {
      const menuToggle = menu.querySelector('[class~="footer-menu__toggle"]');
      const menuContents = menu.querySelector('[class~="footer-menu__contents"]');
      const expandBtn = menu.querySelector('[class~="footer-menu__contents-expand"]');
      const expandLabel = expandBtn?.querySelector('[class~="footer-menu__expand-label"]');
      const expandIcon = expandBtn?.querySelector('[class~="footer-menu__expand-icon"]');

      const clampM = menu.getAttribute('data-initial-heightm') || '0';
      const clampD = parseInt(menu.getAttribute('data-initial-heightd') || '5', 10);

      menu.style.setProperty('--clamp-m', clampM);
      menu.style.setProperty('--clamp-d', clampD);

      // Measure full height + the exact height of N whole links.
      function updateHeights() {
        if (!menuContents) return;
        menuContents.style.maxHeight = 'none';

        const scrollH = menuContents.scrollHeight;
        menu.style.setProperty('--scroll-height', scrollH + 'px');

        const links = menuContents.querySelectorAll('a');
        let collapsedH = scrollH;

        if (links.length > clampD) {
          const containerTop = menuContents.getBoundingClientRect().top;
          const nthBottom = links[clampD - 1].getBoundingClientRect().bottom;
          collapsedH = Math.ceil(nthBottom - containerTop);
        }
        menu.style.setProperty('--collapsed-height', collapsedH + 'px');

        if (window.innerWidth >= 768) {
          menuContents.style.maxHeight = menuContents.classList.contains('is-expanded') ? scrollH + 'px' : collapsedH + 'px';
        } else {
          menuContents.style.maxHeight = menuContents.classList.contains('is-open') ? scrollH + 'px' : '0px';
        }
      }

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateHeights);
      }
      updateHeights();
      window.addEventListener('resize', updateHeights);

      if (menuToggle && menuContents) {
        menuToggle.addEventListener('click', function () {
          if (window.innerWidth >= 768) return;

          const isOpen = menuContents.classList.toggle('is-open');
          const icon = menuToggle.querySelector('[class~="footer-menu__toggle-icon"]');
          if (icon) icon.classList.toggle('is-rotated', isOpen);

          const scrollH = parseInt(menu.style.getPropertyValue('--scroll-height')) || menuContents.scrollHeight;
          menuContents.style.maxHeight = isOpen ? scrollH + 'px' : '0px';
        });
      }

      if (expandBtn && menuContents) {
        expandBtn.addEventListener('click', function () {
          if (window.innerWidth < 768) return;

          const isExpanded = menuContents.classList.toggle('is-expanded');
          const scrollH = parseInt(menu.style.getPropertyValue('--scroll-height')) || menuContents.scrollHeight;
          const collapsedH = menu.style.getPropertyValue('--collapsed-height');

          if (isExpanded) {
            menuContents.style.maxHeight = scrollH + 'px';
            if (expandLabel) expandLabel.textContent = 'View less';
            if (expandIcon) expandIcon.classList.add('is-rotated');
          } else {
            menuContents.style.maxHeight = collapsedH;
            if (expandLabel) expandLabel.textContent = 'View more';
            if (expandIcon) expandIcon.classList.remove('is-rotated');
          }
        });
      }
    });
  });
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 768) {
      const firstToggle = document.querySelector('[class~="footer-root"] [class~="footer-menu"] [class~="footer-menu__toggle"]');
      if (firstToggle) firstToggle.click();
    }
  });
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
})();

/* Webflow runtime of scandiweb.com (mobile menu drill-down, tabs inside the mega menus). Loaded in order
   after the page has finished loading, so it never delays the page itself. */
(function(){
  var base = (window.__SWC_BASE || '/solutions/site-chrome/') + 'wf/';
  var files = ["jquery-3.5.1.min.dc5e7f18c8.js", "scandiweb.schunk.36b8fb49256177c8.js", "scandiweb.schunk.c4b6adb7aa66d067.js", "scandiweb.735a3b97.0bf4b6acdade758a.js"];
  function go(){
    if (window.Webflow && window.__swcWf) return; window.__swcWf = true;
    document.documentElement.setAttribute('data-wf-site', '61387043ab1e4143deac1e21');
    (function next(i){ if (i >= files.length) return; var s = document.createElement('script'); s.src = base + files[i]; s.async = false;
      s.onload = function(){ next(i + 1); }; document.body.appendChild(s); })(0);
  }
  function later(){ (window.requestIdleCallback || function(f){ setTimeout(f, 200); })(go, { timeout: 2500 }); }
  if (document.readyState === 'complete') later(); else window.addEventListener('load', later);
})();
