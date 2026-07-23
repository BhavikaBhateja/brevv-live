export function initStickyNav() {
  const navElement = document.querySelector<HTMLElement>("nav");
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  let ticking = false;

  const update = () => {
    ticking = false;
    const scrollY = window.pageYOffset || window.scrollY;

    // Sticky navbar toggle (cheap — no layout reads)
    if (navElement) {
      navElement.classList.toggle("sticky-nav-active", scrollY > 50);
    }

    // Active-link highlighting. The navLink lookup runs BEFORE any offset reads,
    // so if there's no matching link we skip the (layout-thrashing) reads.
    sections.forEach((current) => {
      const sectionId = current.getAttribute("id");
      const navLink =
        document.querySelector(`.nav-menu a[href*="${sectionId}"]`) ||
        document.querySelector(`.mobile-nav-link[href*="${sectionId}"]`);
      if (!navLink) return;
      const sectionTop = current.offsetTop - 100;
      const sectionHeight = current.offsetHeight;
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  };

  const onScroll = () => {
    // ensure full nav is visible while the user is scrolling
    if (navElement && navElement.classList.contains('nav-brand-only')) {
      navElement.classList.remove('nav-brand-only');
    }
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  update();

  // Show only the brand/logo while the hero/video section is visible.
  const videoEl = document.querySelector<HTMLVideoElement>('.solid-direction-sticky video, .solid-direction-section video, #hero-bg-video');
  if (videoEl && navElement) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navElement.classList.add('nav-brand-only');
        } else {
          navElement.classList.remove('nav-brand-only');
        }
      });
    }, { threshold: 0.25 });
    io.observe(videoEl);
  }
}
