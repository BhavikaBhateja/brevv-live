export function initLetterReveal() {
  const letterRevealTargets = document.querySelectorAll<HTMLElement>('.letter-reveal-trigger');
  if (letterRevealTargets.length > 0) {
    letterRevealTargets.forEach(target => {
      const text = target.textContent.trim();
      target.innerHTML = '';
      [...text].forEach(char => {
        const span = document.createElement('span');
        if (char === ' ') {
          span.innerHTML = '&nbsp;';
        } else {
          span.textContent = char;
        }
        span.className = 'reveal-letter';
        target.appendChild(span);
      });
    });

    const letterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll<HTMLElement>('.reveal-letter');
          const baseDelay = parseFloat(entry.target.getAttribute('data-delay') || '0');
          const speed = parseFloat(entry.target.getAttribute('data-speed') || '0.04');
          spans.forEach((span, index) => {
            span.style.animationDelay = `${baseDelay + (index * speed)}s`;
            span.style.animationPlayState = 'running';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    letterRevealTargets.forEach(target => {
      const spans = target.querySelectorAll<HTMLElement>('.reveal-letter');
      spans.forEach(span => {
        span.style.animationPlayState = 'paused';
      });
      letterObserver.observe(target);
    });
  }

  // Intersection Observer for scroll animation in Process section
  const animateElements = document.querySelectorAll<HTMLElement>('.process-left-col, .process-card');
  if (animateElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 100);
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animateElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Triple-Core Advantage: bounce-in animation on scroll
  const coreCards = document.querySelectorAll<HTMLElement>('.core-card');
  if (coreCards.length > 0) {
    const coreObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          coreObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    coreCards.forEach(card => coreObserver.observe(card));
  }
}
