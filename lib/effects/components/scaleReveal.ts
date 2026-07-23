export function initScaleReveal() {
  const section = document.querySelector<HTMLElement>('.new-scale-section');
  if (!section) return;

  const targets = section.querySelectorAll<HTMLElement>(
    '.scale-tag-glow, .new-scale-title, .new-scale-subtitle, .scale-premium-card, .meta-num'
  );

  // Pause the CSS entrance animations until the section scrolls into view
  // (same progressive-enhancement pattern as letterReveal)
  targets.forEach(el => {
    el.style.animationPlayState = 'paused';
  });

  // Once an entrance animation finishes, mark the element settled:
  // the .scale-settled class clears the animation (so the card/image
  // hover transitions regain control — a forwards-fill would override
  // them) while explicitly locking the visible end-state.
  section.addEventListener('animationend', (e) => {
    if (e.pseudoElement) return; // curtain (::after) manages itself via fill
    if (e.animationName && e.animationName.startsWith('scale-')) {
      (e.target as HTMLElement).classList.add('scale-settled');
    }
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add('scale-in-view');
        targets.forEach(el => {
          el.style.animationPlayState = 'running';
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(section);
}