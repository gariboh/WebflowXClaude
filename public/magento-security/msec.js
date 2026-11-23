/* Ported from the approved Magento security artifact (v76): the page's own scripts, each run on its own,
   plus the HubSpot contact form (portal 25724996, form 69e2d076-2561-4f0f-ba80-2cf6a17e9d92). Hand edits are fine. */
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
(function(){var w=document.getElementById('what-you-get');if(!w)return;
var its=[].slice.call(w.querySelectorAll('.it')),chats=[].slice.call(w.querySelectorAll('.msgs')),ty=w.querySelector('.typing'),tn=ty.querySelector('b'),btn=w.querySelector('[data-chat-toggle]');
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,cur=0,t=null,on=false,paused=false,TYPE=350,END=1700;
function sel(i){cur=i;its.forEach(function(x,k){var o=k===i;x.classList.toggle('on',o);x.classList.remove('run');x.querySelector('button').setAttribute('aria-expanded',o?'true':'false');});chats.forEach(function(c,k){c.hidden=k!==i;});}
function play(i){clearTimeout(t);sel(i);var m=[].slice.call(chats[i].querySelectorAll('.m'));
if(rm||!on||paused){m.forEach(function(x){x.hidden=false;x.classList.remove('is-in');});ty.hidden=true;return;}
var dur=END;m.forEach(function(x){x.hidden=true;x.classList.remove('is-in');dur+=(+x.getAttribute('data-hold')||1500)+(x.getAttribute('data-who')?TYPE:0);});
var it=its[i];it.style.setProperty('--dur',dur+'ms');void it.offsetWidth;it.classList.add('run');
var k=0;(function step(){if(k>=m.length){ty.hidden=true;t=setTimeout(function(){play((i+1)%its.length);},END);return;}
var x=m[k],who=x.getAttribute('data-who');function show(){ty.hidden=true;x.hidden=false;x.classList.add('is-in');k++;t=setTimeout(step,+x.getAttribute('data-hold')||1500);}
if(who){tn.textContent=who;ty.hidden=false;t=setTimeout(show,TYPE);}else show();})();}
its.forEach(function(x,i){x.querySelector('button').addEventListener('click',function(){play(i);});});
if(rm){if(btn)btn.hidden=true;return;}
new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting===on)return;on=e.isIntersecting;play(cur);});},{threshold:.05}).observe(w.querySelector('.phone'));
if(btn)btn.addEventListener('click',function(){paused=!paused;btn.textContent=paused?'Play':'Pause';btn.setAttribute('aria-pressed',paused?'true':'false');play(cur);});
})();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
(function(){var w=document.querySelector('#testimonials [data-quotes]');if(!w)return;
var bs=[].slice.call(w.querySelectorAll('.lgs button')),qs=[].slice.call(w.querySelectorAll('blockquote[data-qi]')),g=w.querySelector('.grid');
var cur=0,t=null,inView=false,held=false,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
function show(i){cur=i;bs.forEach(function(x,k){x.setAttribute('aria-pressed',k===i?'true':'false');});var id=bs[i].getAttribute('data-qi');qs.forEach(function(q){q.hidden=q.getAttribute('data-qi')!==id;});}
/* reading time per quote: about 280ms a word plus 2.5s to take in the name and logo, kept between 6 and 12 seconds */
function wait(){var q=qs.filter(function(x){return !x.hidden;})[0],n=q?q.textContent.trim().split(/\s+/).length:20;return Math.max(6000,Math.min(12000,2500+n*280));}
function arm(){clearTimeout(t);if(rm||!inView||held)return;t=setTimeout(function(){show((cur+1)%bs.length);arm();},wait());}
bs.forEach(function(b,i){b.addEventListener('click',function(){show(i);arm();});});
if(rm||!g)return;
['mouseenter','focusin'].forEach(function(ev){g.addEventListener(ev,function(){held=true;arm();});});
['mouseleave','focusout'].forEach(function(ev){g.addEventListener(ev,function(){held=false;arm();});});
new IntersectionObserver(function(es){es.forEach(function(e){inView=e.isIntersecting;arm();});},{threshold:.4}).observe(g);
})();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
(function(){document.querySelectorAll('#process [data-tabs]').forEach(function(w){function warm(){[].forEach.call(w.querySelectorAll('img[loading=lazy]'),function(im){im.loading='eager';});}w.addEventListener('pointerenter',warm,{once:true});w.addEventListener('focusin',warm,{once:true});var eq=w.querySelector('.panes'),lw=-1;function fit(){if(eq.offsetWidth===lw)return;lw=eq.offsetWidth;eq.style.minHeight='';var m=0;[].forEach.call(eq.querySelectorAll('.pane'),function(p){var h=p.hidden;p.hidden=false;m=Math.max(m,p.offsetHeight);p.hidden=h;});if(m)eq.style.minHeight=(m+2)+'px';}if(window.ResizeObserver){new ResizeObserver(fit).observe(eq);}if(document.fonts){document.fonts.ready.then(function(){lw=-1;fit();});}else{fit();addEventListener('resize',function(){lw=-1;fit();});}var bs=[].slice.call(w.querySelectorAll('[role=tab]'));function go(b,f){bs.forEach(function(x){var on=x===b;x.setAttribute('aria-selected',on?'true':'false');x.tabIndex=on?0:-1;});w.querySelectorAll('[data-p]').forEach(function(p){p.hidden=p.getAttribute('data-p')!==b.getAttribute('data-t');});if(f)b.focus();}bs.forEach(function(b,i){b.addEventListener('click',function(){go(b);});b.addEventListener('keydown',function(e){var k={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];if(k){e.preventDefault();go(bs[(i+k+bs.length)%bs.length],true);}});});});})();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
(function() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return; // Protection in case the element hasn't loaded yet
    
    const gl = canvas.getContext('webgl', { antialias: true }) || canvas.getContext('experimental-webgl');
    if (!gl) return; // If the browser doesn't support WebGL

    const vs = `
        attribute vec2 position;
        void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;

    const fs = `
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;

        const vec3 colorDark = vec3(16.0/255.0, 19.0/255.0, 44.0/255.0);   // #10132C
        const vec3 colorLight = vec3(63.0/255.0, 74.0/255.0, 175.0/255.0); // #3F4AAF

        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289(i);
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m; m = m*m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        void main() {
            vec2 uv = gl_FragCoord.xy / max(u_resolution.x, u_resolution.y);
            float speed = u_time * 0.74 * 0.04; 
            float scale = 1.1 * 1.2;            
            float freq = 0.4 * 1.4;             
            float amp = 0.12 * 3.5;             
            vec2 p = uv * scale;
            float q = snoise(p * freq + speed);
            float r = snoise(p * freq + q * amp - speed * 0.8);
            float f = snoise(p + r * amp * 2.0);
            float intensity = smoothstep(-0.1, 0.9, f);
            vec3 color = mix(colorDark, colorLight, intensity);
            gl_FragColor = vec4(color, 1.0);
        }
    `;

    function createShader(type, source) {
        const s = gl.createShader(type);
        gl.shaderSource(s, source);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(s));
        return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, createShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const pos = gl.getAttribLocation(prog, 'position');
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uTime = gl.getUniformLocation(prog, 'u_time');

    function resize() {
        // Get the dimensions of the parent container (your section)
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(uRes, canvas.width, canvas.height);
    }
    
    // Update size on window resize
    window.addEventListener('resize', resize);
    resize(); // Call immediately

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var still = function(){ gl.uniform1f(uTime, 12.0); gl.drawArrays(gl.TRIANGLES, 0, 6); };
        window.addEventListener('resize', still); still(); return;
    }
    let start = performance.now();
    function render(now) {
        gl.uniform1f(uTime, (now - start) / 1000);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
})();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
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

        /**
         * ------------------------------------------------------------
         * animation duration
         * ------------------------------------------------------------
         * Usage:
         * data-marquee-duration="40s"
         * data-marquee-duration="120s"
         *
         * Falls back to 85s if missing
         * ------------------------------------------------------------
         */
        const duration =
          el.dataset.marqueeDuration?.trim() || '85s';

        el.style.animationDuration = duration;
      });
    });
  })();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
(function () {
  // Process steps: one open at a time (same behavior as the live page)
  document.querySelectorAll('[data-process-tabs-accordion]').forEach(function (root) {
    if (root.dataset.processTabsReady === 'true') return;
    root.dataset.processTabsReady = 'true';
    var items = Array.prototype.slice.call(root.querySelectorAll('[data-process-tab-item]'));
    if (!items.length) return;
    function parts(item) {
      return { trigger: item.querySelector('[data-process-tab-trigger]'), panel: item.querySelector('[data-process-tab-panel]') };
    }
    function setOpen(active) {
      items.forEach(function (item, i) {
        var p = parts(item), open = i === active;
        if (p.panel) { p.panel.style.display = open ? '' : 'none'; p.panel.hidden = !open; }
        if (p.trigger) {
          p.trigger.setAttribute('role', 'button');
          p.trigger.setAttribute('tabindex', '0');
          p.trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
        item.classList.toggle('is-active', open);
      });
    }
    items.forEach(function (item, i) {
      var t = parts(item).trigger;
      if (!t) return;
      t.addEventListener('click', function () { setOpen(i); });
      t.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(i); }
      });
    });
    setOpen(0);
  });

  // FAQ toggles
  document.querySelectorAll('.faq-accordion-2').forEach(function (item) {
    var q = item.querySelector('.faq-question-3');
    if (!q) return;
    q.setAttribute('role', 'button');
    q.setAttribute('tabindex', '0');
    q.setAttribute('aria-expanded', 'false');
    function toggle() {
      var open = item.classList.toggle('is-open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    q.addEventListener('click', toggle);
    q.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  // Testimonials slider: native horizontal scroll with the site's arrows and scrollbar
  var sw = document.getElementById('swiper-1');
  if (sw) {
    var outer = sw.querySelector('.slides-outer-wrapper-v7');
    var slides = sw.querySelectorAll('.swiper-slide-v7');
    var bar = sw.querySelector('.scrollbar-v7');
    var drag = document.createElement('div');
    if (bar) bar.appendChild(drag);
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function step() {
      return slides[0] ? slides[0].getBoundingClientRect().width + 16 : outer.clientWidth;
    }
    function go(dir) {
      var max = outer.scrollWidth - outer.clientWidth;
      var next = outer.scrollLeft + dir * step();
      if (dir > 0 && outer.scrollLeft >= max - 2) next = 0;
      if (dir < 0 && outer.scrollLeft <= 2) next = max;
      outer.scrollTo({ left: next, behavior: reduce ? 'auto' : 'smooth' });
    }
    sw.querySelectorAll('.left-arrow-v7').forEach(function (b) { b.addEventListener('click', function () { go(-1); }); });
    sw.querySelectorAll('.right-arrow-v7').forEach(function (b) { b.addEventListener('click', function () { go(1); }); });
    function update() {
      if (!bar) return;
      var max = outer.scrollWidth - outer.clientWidth;
      var w = bar.clientWidth * Math.min(1, outer.clientWidth / Math.max(1, outer.scrollWidth));
      drag.style.width = w + 'px';
      drag.style.transform = 'translateX(' + ((max > 0 ? outer.scrollLeft / max : 0) * (bar.clientWidth - w)) + 'px)';
    }
    outer.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // Security check form: validates in the page, nothing is sent from the prototype
  var form = document.getElementById('security-check-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = document.getElementById('sc-error');
      if (!form.checkValidity()) {
        err.hidden = false;
        var bad = form.querySelector(':invalid');
        if (bad) bad.focus();
        return;
      }
      err.hidden = true;
      form.hidden = true;
      document.getElementById('sc-done').hidden = false;
    });
  }
})();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var n=0;function mk(){var t=document.getElementById('msec-hs-form');if(!t||t.getAttribute('data-hs'))return;if(!(window.hbspt&&window.hbspt.forms)){if(n++<200)setTimeout(mk,150);return;}t.setAttribute('data-hs','1');window.hbspt.forms.create({portalId:'25724996',formId:'69e2d076-2561-4f0f-ba80-2cf6a17e9d92',region:'eu1',css:'',submitText:'Talk to an engineer',target:'#msec-hs-form'});}mk();})();
