export function initModal() {
  const demoModal = document.getElementById('demo-modal');
  const triggerNav = document.getElementById('book-demo-trigger-nav');
  const triggerCta = document.getElementById('book-demo-trigger-cta');
  const triggerMobile = document.getElementById('book-demo-trigger-mobile');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalForm = document.getElementById('modal-demo-form') as HTMLFormElement | null;
  const formContent = document.getElementById('modal-form-content');
  const successContent = document.getElementById('modal-success-content');
  const navMenu = document.querySelector<HTMLElement>('.nav-menu');
  const menuToggle = document.querySelector<HTMLElement>('.menu-toggle');

  const openModal = () => {
    if (demoModal) {
      // Auto-close mobile nav panel on opening modal
      if (navMenu) navMenu.classList.remove('active');
      if (menuToggle) {
        menuToggle.classList.remove('active');
        const spans = menuToggle.querySelectorAll<HTMLElement>('span');
        if (spans.length >= 3) {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      }

      demoModal.style.display = 'flex';
      // Reset form view when opening
      if (formContent) formContent.style.display = 'block';
      if (successContent) successContent.style.display = 'none';
      if (modalForm) modalForm.reset();
      document.body.style.overflow = 'hidden'; // Lock page scroll
    }
  };

  const closeModal = () => {
    if (demoModal) {
      demoModal.style.display = 'none';
      document.body.style.overflow = ''; // Unlock page scroll
    }
  };

  if (triggerNav) triggerNav.addEventListener('click', openModal);
  if (triggerCta) triggerCta.addEventListener('click', openModal);
  if (triggerMobile) triggerMobile.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Close when clicking outside card (on overlay backdrop)
  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        closeModal();
      }
    });
  }

  // Handle Form Submission
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Submit fade animation
      if (formContent) {
        formContent.style.transition = 'opacity 0.3s ease';
        formContent.style.opacity = '0';
        
        setTimeout(() => {
          formContent.style.display = 'none';
          formContent.style.opacity = '1'; // Reset for next time
          
          if (successContent) {
            successContent.style.display = 'block';
            successContent.style.opacity = '0';
            successContent.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
              successContent.style.opacity = '1';
            }, 50);
          }
        }, 300);
      }
    });
  }
}
