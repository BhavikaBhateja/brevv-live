export function initSectorReveal() {
  const section = document.querySelector<HTMLElement>('.sector-section');
  if (!section) return;

  const targets = section.querySelectorAll<HTMLElement>(
    '.sector-tag, .sector-title, .sector-subtitle, .sector-footer, .sector-card'
  );

  // Pause the entrance animations until the section scrolls into view
  targets.forEach(el => { el.style.animationPlayState = 'paused'; });

  // Once a card's entrance animation finishes, clear it so the hover
  // lift (a transform) isn't overridden by the animation's forwards fill.
  section.addEventListener('animationend', (e) => {
    const t = e.target as HTMLElement;
    if (t.classList && t.classList.contains('sector-card')) {
      t.classList.add('sector-settled');
    }
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        targets.forEach(el => { el.style.animationPlayState = 'running'; });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);
}