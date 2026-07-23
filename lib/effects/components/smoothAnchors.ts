/**
 * Smooth in-page anchor scrolling.
 *
 * Replaces the global CSS `html { scroll-behavior: smooth }` (removed because it
 * fights GSAP ScrollTrigger's pin/snap positioning). A click-driven, one-shot
 * smooth scroll doesn't interfere with ScrollTrigger's continuous scroll writes,
 * so we get smooth nav-link jumps without the stutter.
 */
export function initSmoothAnchors() {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;

    const hash = link.getAttribute('href');
    if (!hash || hash === '#') return; // "#" is used as a placeholder href

    const dest = document.querySelector<HTMLElement>(hash);
    if (!dest) return;

    e.preventDefault();
    const top = dest.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}
