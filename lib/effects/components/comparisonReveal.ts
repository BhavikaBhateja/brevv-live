export function initComparisonReveal() {
  const section = document.querySelector<HTMLElement>('.comparison-section');
  if (!section) return;

  // Header + table card reveal together once the section scrolls in
  const headerTargets = section.querySelectorAll<HTMLElement>(
    '.comp-anim-tag, .comp-anim-heading, .comp-anim-sub, .comparison-table-wrapper'
  );
  headerTargets.forEach(el => { el.style.animationPlayState = 'paused'; });

  const headerObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        headerTargets.forEach(el => { el.style.animationPlayState = 'running'; });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  headerObserver.observe(section);

  // Each comparison row drops in as it individually scrolls into view
  const rows = section.querySelectorAll<HTMLElement>('.edge-table .edge-row:not(.edge-head-row)');
  rows.forEach(row => { row.style.animationPlayState = 'paused'; });

  const rowObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.animationPlayState = 'running';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  rows.forEach(row => rowObserver.observe(row));
}