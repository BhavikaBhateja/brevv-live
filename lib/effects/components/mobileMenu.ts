export function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileNavLinks = document.querySelectorAll<HTMLElement>('.mobile-nav-link');
  const navMenu = document.querySelector<HTMLElement>('.nav-menu');
  const menuToggle = document.querySelector<HTMLElement>('.menu-toggle');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('translate-x-0');
      if (isOpen) {
        mobileDrawer.classList.remove('translate-x-0');
        mobileDrawer.classList.add('translate-x-full');
        mobileToggle.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
        mobileToggle.classList.remove('text-white');
        mobileToggle.classList.add('text-[#0F172A]');
      } else {
        mobileDrawer.classList.remove('translate-x-full');
        mobileDrawer.classList.add('translate-x-0');
        mobileToggle.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
        mobileToggle.classList.remove('text-[#0F172A]');
        mobileToggle.classList.add('text-white');
      }
      if (window.lucide) {
        lucide.createIcons(); // Refresh Lucide icons in the toggle button
      }
    });

    // Close mobile menu when nav link is clicked
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('translate-x-0');
        mobileDrawer.classList.add('translate-x-full');
        mobileToggle.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
        mobileToggle.classList.remove('text-white');
        mobileToggle.classList.add('text-[#0F172A]');
        if (window.lucide) {
          lucide.createIcons();
        }
      });
    });
  }

  // Fallback for legacy class toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      const spans = menuToggle.querySelectorAll<HTMLElement>('span');
      if (spans.length >= 3) {
        spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : 'none';
      }
    });

    const navLinks = navMenu.querySelectorAll<HTMLElement>('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const spans = menuToggle.querySelectorAll<HTMLElement>('span');
        if (spans.length >= 3) {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      });
    });
  }
}
