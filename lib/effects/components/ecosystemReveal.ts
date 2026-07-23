export function initEcosystemReveal() {
  const section = document.querySelector<HTMLElement>('.ecosystem-section');
  if (!section) return;

  const targets = section.querySelectorAll<HTMLElement>('.ecosystem-tag, .ecosystem-title, .ecosystem-lead');

  // Pause the entrance animations until the section scrolls into view
  // (same progressive-enhancement pattern as the other reveals)
  targets.forEach(el => { el.style.animationPlayState = 'paused'; });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        targets.forEach(el => { el.style.animationPlayState = 'running'; });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
}