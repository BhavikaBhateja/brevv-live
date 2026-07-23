export function initHeroSlider() {
  const heroGrid = document.querySelector<HTMLElement>('.hero-visual-grid');
  const heroDots = document.querySelectorAll<HTMLElement>('.hero-slider-dots .dot');

  if (heroGrid && heroDots.length > 0) {
    let activeIdx = 0;
    let autoScrollInterval;

    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        activeIdx = (activeIdx + 1) % 3;
        const cards = heroGrid.querySelectorAll<HTMLElement>('.hero-visual-card');
        if (cards[activeIdx]) {
          const gridWidth = heroGrid.clientWidth || 300;
          heroGrid.scrollTo({
            left: activeIdx * gridWidth,
            behavior: 'smooth'
          });
        }
      }, 4000); // Cycle every 4 seconds
    };

    const stopAutoScroll = () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };

    // Initialize Auto Scroll on mobile screens
    if (window.innerWidth < 768) {
      startAutoScroll();
    }

    heroGrid.addEventListener('scroll', () => {
      const scrollLeft = heroGrid.scrollLeft;
      const width = heroGrid.clientWidth || 300;
      activeIdx = Math.round(scrollLeft / width);

      heroDots.forEach((dot, idx) => {
        if (idx === activeIdx) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    });

    // Make Dots clickable
    heroDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        stopAutoScroll();
        const cards = heroGrid.querySelectorAll<HTMLElement>('.hero-visual-card');
        if (cards[idx]) {
          const gridWidth = heroGrid.clientWidth || 300;
          heroGrid.scrollTo({
            left: idx * gridWidth,
            behavior: 'smooth'
          });
        }
        startAutoScroll();
      });
    });

    // Pause on user touch interaction and resume afterwards
    heroGrid.addEventListener('touchstart', () => {
      stopAutoScroll();
    }, { passive: true });

    heroGrid.addEventListener('touchend', () => {
      stopAutoScroll();
      startAutoScroll();
    }, { passive: true });
  }
}
