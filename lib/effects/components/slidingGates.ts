export function initSlidingGates() {
  const solidDirSection = document.getElementById('solid-direction');
  if (solidDirSection) {
    const gateLeft = solidDirSection.querySelector<HTMLElement>('.gate-left');
    const gateRight = solidDirSection.querySelector<HTMLElement>('.gate-right');

    const handleGateScroll = () => {
      const rect = solidDirSection.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Start scrolling progress calculations
      const scrollRange = sectionHeight - viewHeight;
      const scrolled = -rect.top;

      let progress = scrolled / scrollRange;
      progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1

      // Hold the doors closed (text sticky) for the first ~28% of scroll,
      // ease them apart over the next ~44%, then hold the open video scene
      // for the remaining ~28% before the section exits.
      let gateProgress = (progress - 0.28) / 0.44;
      gateProgress = Math.max(0, Math.min(1, gateProgress));

      // Translate by up to 100% of their own width (which is 55% of the section width)
      const translateVal = gateProgress * 100;

      if (gateLeft) {
        gateLeft.style.transform = `translateX(-${translateVal}%)`;
      }
      if (gateRight) {
        gateRight.style.transform = `translateX(${translateVal}%)`;
      }
    };

    // rAF-batch: reading getBoundingClientRect() on every raw scroll event
    // forces a synchronous reflow each tick and janks the scroll. Coalesce to
    // one measurement + write per frame instead.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        handleGateScroll();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial run in case page is loaded scrolled
    handleGateScroll();
  }
}
