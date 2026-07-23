export function initFaq() {
  // Draw the separator lines left→right when the list scrolls into view
  const faqList = document.querySelector<HTMLElement>('.faq-list-clean');
  if (faqList) {
    const lineObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('faq-in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    lineObserver.observe(faqList);
  }

  const faqQuestions = document.querySelectorAll<HTMLElement>('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close other FAQ items for clean focus
      document.querySelectorAll<HTMLElement>('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
}
