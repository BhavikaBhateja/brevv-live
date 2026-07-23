export function initFoundaryReveal() {
  const section = document.querySelector<HTMLElement>('.foundary-section');
  if (!section) return;

  const targets = section.querySelectorAll<HTMLElement>('.foundary-tag, .foundary-title, .foundary-p');

  // Pause entrance animations until the section scrolls into view
  // (the "Human Potential." letter-reveal is handled by letterReveal.js)
  targets.forEach(el => { el.style.animationPlayState = 'paused'; });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        targets.forEach(el => { el.style.animationPlayState = 'running'; });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  observer.observe(section);
}