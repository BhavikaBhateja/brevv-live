export function initCtaReveal() {
  const section = document.querySelector<HTMLElement>('.cta-section');
  if (!section) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add('cta-reveal-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  observer.observe(section);
}