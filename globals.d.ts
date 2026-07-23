// Ambient globals for the ported interaction modules.
// GSAP / ScrollTrigger / lucide are attached to window in lib/effects/init.ts,
// so bare references resolve at runtime.
declare const gsap: any;
declare const ScrollTrigger: any;
declare const lucide: any;

interface Window {
  gsap?: any;
  ScrollTrigger?: any;
  lucide?: any;
}
