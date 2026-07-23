export function initCoreReveal() {
  const section = document.querySelector<HTMLElement>('.trust-badges');
  if (!section) return;

  const title = section.querySelector<HTMLElement>('.core-anim-title');

  // Split the heading into per-word mask spans (each word rises from
  // behind its own overflow-hidden clip, staggered)
  if (title && title.dataset.split !== 'true') {
    const words = title.textContent.trim().split(/\s+/);
    title.innerHTML = '';
    words.forEach((word, i) => {
      const outer = document.createElement('span');
      outer.className = 'core-word';
      const inner = document.createElement('span');
      inner.textContent = word;
      inner.style.transitionDelay = (0.15 + i * 0.08) + 's';
      outer.appendChild(inner);
      title.appendChild(outer);
      title.appendChild(document.createTextNode(' '));
    });
    title.dataset.split = 'true';
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add('core-in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
}