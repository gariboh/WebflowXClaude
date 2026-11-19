/* Ported from the approved FDE artifact (v24): the page's own scripts, each run on its own, plus the
   HubSpot contact form (the Let's talk form scandiweb.com/services/ai uses). Hand edits are fine. */
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
(function(){var w=document.querySelector('[data-stabs]');if(!w)return;var bs=[].slice.call(w.querySelectorAll('[role=tab]')),ps=[].slice.call(w.querySelectorAll('[role=tabpanel]')),d=w.querySelector('.panes'),lw=-1;
function go(b,f){bs.forEach(function(x){var on=x===b;x.setAttribute('aria-selected',on?'true':'false');x.tabIndex=on?0:-1;});ps.forEach(function(p){p.hidden=p.id!==b.getAttribute('aria-controls');});if(f)b.focus();}
function fit(){if(d.offsetWidth===lw)return;lw=d.offsetWidth;d.style.minHeight='';var m=0;ps.forEach(function(p){var h=p.hidden;p.hidden=false;m=Math.max(m,p.offsetHeight);p.hidden=h;});if(m)d.style.minHeight=m+'px';}
if(window.ResizeObserver)new ResizeObserver(fit).observe(d);if(document.fonts)document.fonts.ready.then(function(){lw=-1;fit();});
bs.forEach(function(b,i){b.addEventListener('click',function(){go(b);});b.addEventListener('keydown',function(e){var k={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];if(k){e.preventDefault();go(bs[(i+k+bs.length)%bs.length],true);}});});
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
(function(){var w=document.querySelector('#process .pK');if(!w)return;var t=w.querySelector('.trk'),pv=w.querySelector('.pv'),nx=w.querySelector('.nx'),rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
function step(){var c=t.querySelector('.cd');if(!c)return t.clientWidth;var g=parseFloat(getComputedStyle(t).columnGap)||0;return c.getBoundingClientRect().width+g;}
function go(d){t.scrollBy({left:d*step(),behavior:rm?'auto':'smooth'});}
function upd(){pv.disabled=t.scrollLeft<=2;nx.disabled=t.scrollLeft>=t.scrollWidth-t.clientWidth-2;}
pv.addEventListener('click',function(){go(-1);});nx.addEventListener('click',function(){go(1);});
t.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();go(1);}if(e.key==='ArrowLeft'){e.preventDefault();go(-1);}});
t.addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);addEventListener('load',upd);if(window.ResizeObserver)new ResizeObserver(upd).observe(t);upd();
})();
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

  // Contact form: validates in the page, nothing is sent from the prototype
  var form = document.getElementById('fde-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = document.getElementById('fd-error');
      if (!form.checkValidity()) {
        err.hidden = false;
        var bad = form.querySelector(':invalid');
        if (bad) bad.focus();
        return;
      }
      err.hidden = true;
      form.hidden = true;
      document.getElementById('fd-done').hidden = false;
    });
  }
})();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var __d=document.addEventListener.bind(document),__w=window.addEventListener.bind(window);document.addEventListener=function(t,l,o){if(t==='DOMContentLoaded'&&document.readyState!=='loading'){Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});return;}return __d(t,l,o);};window.addEventListener=function(t,l,o){if(t==='load'&&document.readyState==='complete'){Promise.resolve().then(function(){try{l.call(window);}catch(e){console.error(e);}});return;}return __w(t,l,o);};try{
(function(){[].forEach.call(document.querySelectorAll('.sgrid'),function(h){var c=h.querySelector('.sg-c'),x=c&&c.getContext('2d');if(!x)return;
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,P=[],Q=[],raf=0,last=0,vis=false;
function size(){var r=h.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,1.5),w=Math.max(2,Math.round(r.width*d)),g=Math.max(2,Math.round(r.height*d));if(c.width!==w||c.height!==g){c.width=w;c.height=g;}return[w,g];}
function bg(w,g){var r=x.createRadialGradient(w*.82,g*1.05,0,w*.82,g*1.05,w*.75);r.addColorStop(0,'#1F266E');r.addColorStop(1,'#10132C');x.fillStyle=r;x.fillRect(0,0,w,g);}
function draw(dt,still){var s=size(),w=s[0],g=s[1],narrow=h.getBoundingClientRect().width<780,L=w*.58;bg(w,g);var S=Math.round(Math.max(22,w/52)),cols=Math.ceil(w/S),rows=Math.ceil(g/S),i,j;
x.fillStyle='rgba(144,154,242,.38)';for(j=1;j<rows;j++)for(i=1;i<cols;i++){var q=i/cols;if(q<.42)continue;x.globalAlpha=Math.min(1,(q-.42)/.33);x.fillRect(i*S-1,j*S-1,2,2);}x.globalAlpha=1;
if(narrow){P=[];Q=[];}else if(still){P=[{hor:true,lane:Math.min(4,rows-2),pos:w*.62,v:34*(w/1200),len:S*4},{hor:false,lane:Math.min(Math.round(cols*.72),cols-2),pos:g*.35,v:28*(w/1200),len:S*3},{hor:true,lane:Math.min(12,rows-2),pos:w*.9,v:40*(w/1200),len:S*5}];Q=[];}
else if(!narrow&&P.length<7&&Math.random()<dt*(P.length<3?.9:.3)){var hor=Math.random()<.7,c0=Math.ceil(cols*.58);P.push({hor:hor,lane:hor?1+Math.floor(Math.random()*(rows-1)):c0+Math.floor(Math.random()*Math.max(1,cols-c0-1)),pos:hor?L:0,v:(26+Math.random()*30)*(w/1200),len:S*(3+Math.random()*5)});}
x.save();x.beginPath();x.rect(L,0,w-L,g);x.clip();x.lineWidth=Math.max(1.5,S/14);x.lineCap='round';
P=P.filter(function(p){p.pos+=p.v*dt;var m=p.hor?w:g;if(p.pos-p.len>m){if(Math.random()<.3)Q.push({x:p.hor?Math.round(m*.6/S)*S:p.lane*S,y:p.hor?p.lane*S:Math.round(m*.5/S)*S,r:0});return false;}
var x1=p.hor?p.pos:p.lane*S,y1=p.hor?p.lane*S:p.pos,x0=p.hor?p.pos-p.len:x1,y0=p.hor?y1:p.pos-p.len,gr=x.createLinearGradient(x0,y0,x1,y1);gr.addColorStop(0,'rgba(110,247,110,0)');gr.addColorStop(1,'rgba(110,247,110,.85)');
x.strokeStyle=gr;x.beginPath();x.moveTo(x0,y0);x.lineTo(x1,y1);x.stroke();x.fillStyle='rgba(110,247,110,.9)';x.beginPath();x.arc(x1,y1,S/10,0,6.283);x.fill();return true;});
Q=Q.filter(function(p){p.r+=14*dt*(w/1200);var a=1-p.r/(S*3);if(a<=0)return false;x.strokeStyle='rgba(110,247,110,'+(a*.6).toFixed(3)+')';x.lineWidth=1.2;x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.stroke();return true;});x.restore();}
function frame(now){raf=0;if(!vis)return;var dt=Math.min(.05,(now-last)/1000);last=now;draw(dt,false);raf=requestAnimationFrame(frame);}
function sync(){var want=vis&&!rm&&!document.hidden;if(want&&!raf){last=performance.now();raf=requestAnimationFrame(frame);}if(!want){if(raf){cancelAnimationFrame(raf);raf=0;}draw(0,true);}}
draw(0,true);
if('IntersectionObserver' in window){new IntersectionObserver(function(es){vis=es[0].isIntersecting;sync();},{threshold:.02}).observe(h);}else{vis=true;sync();}
document.addEventListener('visibilitychange',sync);addEventListener('resize',function(){if(!raf)draw(0,true);});
});})();
}catch(e){console.error(e);}finally{document.addEventListener=__d;window.addEventListener=__w;}})();
(function(){var n=0;function mk(){var t=document.getElementById('fde-hs-form');if(!t||t.getAttribute('data-hs'))return;if(!(window.hbspt&&window.hbspt.forms)){if(n++<200)setTimeout(mk,150);return;}t.setAttribute('data-hs','1');window.hbspt.forms.create({portalId:'25724996',formId:'444d0bad-2566-4126-beec-a5ffc0f19973',region:'eu1',css:'',submitText:'Talk to an engineer',target:'#fde-hs-form'});}mk();})();
