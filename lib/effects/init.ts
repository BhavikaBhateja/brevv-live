import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createIcons, icons } from "lucide";

import { initMobileMenu } from "./components/mobileMenu";
import { initTypewriter } from "./components/typewriter";
import { initStickyNav } from "./components/stickyNav";
import { initLetterReveal } from "./components/letterReveal";
import { initSlidingGates } from "./components/slidingGates";
import { initCoreReveal } from "./components/coreReveal";
import { initEcosystemReveal } from "./components/ecosystemReveal";
import { initFoundaryReveal } from "./components/foundaryReveal";
import { initComparisonReveal } from "./components/comparisonReveal";
import { initScaleReveal } from "./components/scaleReveal";
import { initCtaParticles } from "./components/ctaParticles";
import { initCtaReveal } from "./components/ctaReveal";
import { initProductSuite } from "./components/productSuiteTabs";
import { initFaq } from "./components/faqAccordion";
import { initPricing } from "./components/billingToggle";
import { initModal } from "./components/demoModal";
import { initHeroSlider } from "./components/heroSlider";
import { initLazyVideo } from "./components/lazyVideo";
import { initFooterEffects } from "./components/footerEffects";
import { initSectorReveal } from "./components/sectorReveal";
import { initSmoothAnchors } from "./components/smoothAnchors";

let started = false;

export function initAll() {
  if (started) return; // guard against double-invocation
  started = true;

  // The ported vanilla modules reference global gsap / ScrollTrigger / lucide.
  (window as any).gsap = gsap;
  (window as any).ScrollTrigger = ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  (window as any).lucide = { createIcons: () => createIcons({ icons }) };

  initMobileMenu();
  initTypewriter();
  initStickyNav();
  initLetterReveal();
  initSlidingGates();
  initCoreReveal();
  initEcosystemReveal();
  initFoundaryReveal();
  initComparisonReveal();
  initScaleReveal();
  initCtaParticles();
  initCtaReveal();
  initProductSuite();
  initFaq();
  initPricing();
  initModal();
  initHeroSlider();
  initLazyVideo();
  initFooterEffects();
  initSectorReveal();
  initSmoothAnchors();

  createIcons({ icons }); // render the <i data-lucide="..."> icons
  initLoaderGate();
}

function initLoaderGate() {
  const loaderContainer = document.getElementById("hero-loader-container");
  const loaderBar = document.getElementById("hero-loader-bar");
  if (loaderContainer && loaderBar) {
    let progress = 0;
    const duration = 3500;
    const interval = 20;
    const step = 100 / (duration / interval);
    const counter = setInterval(() => {
      progress += step;
      if (progress >= 100) {
        progress = 100;
        clearInterval(counter);
      }
      loaderBar.style.width = progress + "%";
    }, interval);
  }
}
