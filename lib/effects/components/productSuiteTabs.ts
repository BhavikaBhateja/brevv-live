export function initProductSuite() {
  const section = document.querySelector<HTMLElement>('.product-suite-section');
  if (!section) return;

  const pinWrap   = section.querySelector<HTMLElement>('.suite-pin-wrap');
  const stage     = section.querySelector<HTMLElement>('.suite-content-stage');
  const panels    = Array.from(section.querySelectorAll<HTMLElement>('.suite-content-new'));
  const pillBtns  = Array.from(section.querySelectorAll<HTMLElement>('.suite-tab-btn-pill'));
  const suiteSelect = document.getElementById('suite-tab-select') as HTMLSelectElement | null;
  const headingEl = section.querySelector<HTMLElement>('.about-title');
  const descEl    = section.querySelector<HTMLElement>('.suite-header-desc');
  if (!panels.length) return;

  let current = 0;
  let scrollActive = false;
  let scrollTrigger = null;
  let activeTabTypewriterTimeouts = [];

  // Extra "hold" (in viewport-heights) kept pinned on the last tab
  // before the whole section releases and scrolls away.
  const HOLD_UNITS = 0.6;
  let snapTotalUnits = panels.length - 1;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- existing typewriter (unchanged logic) ----------
  function restoreAllTabContents() {
    panels.forEach(content => {
      const h3 = content.querySelector<HTMLElement>('.suite-text-panel h3');
      const p = content.querySelector<HTMLElement>('.suite-text-panel p');
      const bullets = content.querySelector<HTMLElement>('.suite-bullets');
      const roiBox = content.querySelector<HTMLElement>('.suite-roi-box');
      if (h3 && h3.hasAttribute('data-original-text')) h3.textContent = h3.getAttribute('data-original-text');
      if (p && p.hasAttribute('data-original-text')) p.textContent = p.getAttribute('data-original-text');
      if (bullets) { bullets.style.opacity = ''; bullets.style.transform = ''; bullets.style.transition = ''; }
      if (roiBox) { roiBox.style.opacity = ''; roiBox.style.transform = ''; roiBox.style.transition = ''; }
      content.querySelectorAll<HTMLElement>('.typewriter-cursor').forEach(c => c.remove());
    });
  }

  function triggerTabTypewriter(targetContent: HTMLElement) {
    activeTabTypewriterTimeouts.forEach(t => clearTimeout(t));
    activeTabTypewriterTimeouts = [];
    restoreAllTabContents();

    const h3 = targetContent.querySelector<HTMLElement>('.suite-text-panel h3');
    const p = targetContent.querySelector<HTMLElement>('.suite-text-panel p');
    if (!h3 || !p) return;
    if (!h3.hasAttribute('data-original-text')) h3.setAttribute('data-original-text', h3.textContent.trim());
    if (!p.hasAttribute('data-original-text')) p.setAttribute('data-original-text', p.textContent.trim());

    const textH3 = h3.getAttribute('data-original-text');
    const textP = p.getAttribute('data-original-text');
    h3.innerHTML = ''; p.innerHTML = '';

    const bullets = targetContent.querySelector<HTMLElement>('.suite-bullets');
    const roiBox = targetContent.querySelector<HTMLElement>('.suite-roi-box');
    if (bullets) { bullets.style.opacity = '0'; bullets.style.transform = 'translateY(10px)'; bullets.style.transition = 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s'; }
    if (roiBox) { roiBox.style.opacity = '0'; roiBox.style.transform = 'translateY(10px)'; roiBox.style.transition = 'opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s'; }

    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    cursor.textContent = '|';
    h3.appendChild(cursor);

    let h3Idx = 0, pIdx = 0;
    function typeH3() {
      if (h3Idx < textH3.length) {
        cursor.before(textH3.charAt(h3Idx)); h3Idx++;
        activeTabTypewriterTimeouts.push(setTimeout(typeH3, 12));
      } else { cursor.remove(); p.appendChild(cursor); typeP(); }
    }
    function typeP() {
      if (pIdx < textP.length) {
        cursor.before(textP.charAt(pIdx)); pIdx++;
        activeTabTypewriterTimeouts.push(setTimeout(typeP, 6));
      } else {
        cursor.remove();
        if (bullets) { bullets.style.opacity = '1'; bullets.style.transform = 'translateY(0)'; }
        if (roiBox) { roiBox.style.opacity = '1'; roiBox.style.transform = 'translateY(0)'; }
      }
    }
    typeH3();
  }

  // ---------- shared helpers ----------
  function setActiveIndex(index) {
    pillBtns.forEach((b, i) => b.classList.toggle('active', i === index));
    if (suiteSelect) suiteSelect.selectedIndex = index;
  }

  // Non-pinned (mobile / reduced-motion) switch: original class-toggle behavior
  function simpleShow(index) {
    panels.forEach((p, i) => p.classList.toggle('active', i === index));
    setActiveIndex(index);
    current = index;
    triggerTabTypewriter(panels[index]);
  }

  // Pinned slide transition: incoming slides in from the right, on top
  function slideTo(index) {
    if (index === current) return;
    const incoming = panels[index];
    const outgoing = panels[current];
    gsap.killTweensOf([incoming, outgoing]);
    gsap.set(outgoing, { zIndex: 1 });
    gsap.set(incoming, { visibility: 'visible', zIndex: 2, xPercent: 100 });
    gsap.to(incoming, {
      xPercent: 0, duration: 0.75, ease: 'power3.out',
      onComplete() { gsap.set(outgoing, { visibility: 'hidden', zIndex: 0 }); }
    });
    setActiveIndex(index);
    current = index;
    triggerTabTypewriter(incoming);
  }

  function scrollToIndex(index) {
    if (!scrollTrigger) return;
    const y = scrollTrigger.start + (index / snapTotalUnits) * (scrollTrigger.end - scrollTrigger.start);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // ---------- word split (preserves <br>) ----------
  function splitWords(el: HTMLElement | null) {
    if (!el) return [];
    if (el.dataset.split === 'true') return el.querySelectorAll<HTMLElement>('.suite-word > span');
    const nodes = Array.from(el.childNodes);
    el.innerHTML = '';
    nodes.forEach((node: any) => {
      if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') { el.appendChild(document.createElement('br')); return; }
      node.textContent.split(/(\s+)/).forEach(chunk => {
        if (chunk === '') return;
        if (chunk.trim() === '') { el.appendChild(document.createTextNode(chunk)); return; }
        const outer = document.createElement('span');
        outer.className = 'suite-word';
        const inner = document.createElement('span');
        inner.textContent = chunk;
        outer.appendChild(inner);
        el.appendChild(outer);
      });
    });
    el.dataset.split = 'true';
    return el.querySelectorAll<HTMLElement>('.suite-word > span');
  }

  // ---------- one-time entrance ----------
  function playEntrance() {
    const words = [...splitWords(headingEl), ...splitWords(descEl)];
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(pinWrap, { xPercent: 8, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.9 });
    tl.fromTo(words, { yPercent: 115, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.025 }, '-=0.5');
  }

  // ---------- measure tallest panel → stage height ----------
  function setStageHeight() {
    let max = 0;
    panels.forEach(p => {
      const prev = p.getAttribute('style') || '';
      p.style.cssText += ';position:relative;visibility:hidden;display:block;transform:none;';
      max = Math.max(max, p.offsetHeight);
      p.setAttribute('style', prev);
    });
    if (stage) stage.style.height = max + 'px';
  }

  // ---------- bindings (bound once) ----------
  pillBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => { scrollActive ? scrollToIndex(index) : simpleShow(index); });
  });
  if (suiteSelect) {
    suiteSelect.addEventListener('change', e => {
      const index = (e.target as HTMLSelectElement).selectedIndex;
      scrollActive ? scrollToIndex(index) : simpleShow(index);
    });
  }

  // initial typewriter for the default active tab
  triggerTabTypewriter(panels[0]);

  // ---------- GSAP orchestration ----------
  if (reduced || !window.gsap || !window.ScrollTrigger) return; // graceful fallback: plain tabs

  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();

  // Desktop: pin + snap + slide + entrance
  mm.add('(min-width: 1025px)', () => {
    section.classList.add('js-suite-scroll');
    gsap.set(pinWrap, { opacity: 0 }); // hide until the entrance reveals it (no plain-text flash)
    setStageHeight();
    panels.forEach((p, i) => gsap.set(p, {
      xPercent: i === 0 ? 0 : 100,
      visibility: i === 0 ? 'visible' : 'hidden',
      zIndex: i === 0 ? 2 : 0
    }));
    current = 0; setActiveIndex(0); scrollActive = true;

    // Total scroll length = one screen per tab gap + a hold tail. Tabs
    // snap at i/total; the extra point at 1 releases the section.
    const total = (panels.length - 1) + HOLD_UNITS;
    snapTotalUnits = total;
    const snapPoints = [];
    for (let i = 0; i < panels.length; i++) snapPoints.push(i / total);
    snapPoints.push(1);

    scrollTrigger = ScrollTrigger.create({
      trigger: pinWrap,
      start: 'top top',
      end: () => '+=' + total * window.innerHeight,
      pin: true,
      snap: {
        snapTo: snapPoints,
        duration: { min: 0.2, max: 0.5 },
        ease: 'power2.inOut',
        directional: false   // snap to the NEAREST tab, not in the scroll direction —
                             // stops momentum from carrying past a tab on its own
      },
      onUpdate: self => {
        const idx = Math.min(Math.round(self.progress * total), panels.length - 1);
        if (idx !== current) slideTo(idx);
      }
    });

    ScrollTrigger.create({ trigger: pinWrap, start: 'top 88%', once: true, onEnter: playEntrance });

    return () => { // leaving desktop → tear down cleanly
      scrollActive = false;
      if (scrollTrigger) { scrollTrigger.kill(); scrollTrigger = null; }
      section.classList.remove('js-suite-scroll');
      panels.forEach(p => gsap.set(p, { clearProps: 'all' }));
      gsap.set(pinWrap, { clearProps: 'opacity' });
      if (stage) stage.style.height = '';
      panels.forEach((p, i) => p.classList.toggle('active', i === current));
    };
  });

  // Mobile: no pin, but still play the header entrance once
  mm.add('(max-width: 1024px)', () => {
    gsap.set(pinWrap, { opacity: 0 }); // hide until entrance reveals it
    ScrollTrigger.create({ trigger: section, start: 'top 88%', once: true, onEnter: playEntrance });
    return () => { gsap.set(pinWrap, { clearProps: 'opacity' }); };
  });
}