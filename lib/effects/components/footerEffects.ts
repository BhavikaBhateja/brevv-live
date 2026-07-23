export function initFooterEffects() {
  if (typeof gsap === "undefined") return;

  const footer = document.querySelector<HTMLElement>(".footer");
  if (!footer) return;

  const container = footer.querySelector<HTMLElement>(".footer-bokeh-container");
  if (!container) return;

  const anims: any[] = [];

  // 1. Three vertical light rays gently pulsing
  const ray1 = footer.querySelector<HTMLElement>(".footer-ray-1");
  const ray2 = footer.querySelector<HTMLElement>(".footer-ray-2");
  const ray3 = footer.querySelector<HTMLElement>(".footer-ray-3");
  if (ray1) anims.push(gsap.fromTo(ray1, { opacity: 0.25 }, { opacity: 0.6, duration: 5.0, ease: "sine.inOut", repeat: -1, yoyo: true }));
  if (ray2) anims.push(gsap.fromTo(ray2, { opacity: 0.25 }, { opacity: 0.55, duration: 6.5, ease: "sine.inOut", repeat: -1, yoyo: true }));
  if (ray3) anims.push(gsap.fromTo(ray3, { opacity: 0.25 }, { opacity: 0.5, duration: 7.5, ease: "sine.inOut", repeat: -1, yoyo: true }));

  // 2. Flowing bubbles — animate transform (y/x), NOT layout props like `bottom`,
  //    so no reflow per frame.
  const riseDistance = (container.getBoundingClientRect().height || 420) + 40;
  const numberOfBokeh = 22;
  for (let i = 0; i < numberOfBokeh; i++) {
    const dot = document.createElement("div");
    dot.classList.add("footer-bokeh-dot");

    const size = gsap.utils.random(4, 12);
    const left = gsap.utils.random(0, 100);
    const maxOpacity = gsap.utils.random(0.15, 0.45);
    const duration = gsap.utils.random(8, 20);
    const delay = gsap.utils.random(0, duration);
    const swayDistance = gsap.utils.random(20, 60);
    const swayDuration = gsap.utils.random(3, 6);

    gsap.set(dot, { width: size, height: size, left: `${left}%`, bottom: 0, opacity: 0, x: 0, y: 0, force3D: true });
    container.appendChild(dot);

    const tl = gsap.timeline({ repeat: -1, delay });
    tl.fromTo(dot, { y: 0 }, { y: -riseDistance, duration, ease: "none" }, 0);
    tl.to(dot, { opacity: maxOpacity, duration: duration * 0.2, ease: "sine.out" }, 0);
    tl.to(dot, { opacity: 0, duration: duration * 0.2, ease: "sine.in" }, duration * 0.8);
    anims.push(tl);

    anims.push(
      gsap.fromTo(dot, { x: -swayDistance / 2 }, { x: swayDistance / 2, duration: swayDuration, ease: "sine.inOut", repeat: -1, yoyo: true })
    );
  }

  // 3. Only run these while the footer is actually on screen (it is off-screen
  //    most of the time) — this is the big perf win.
  let running = true;
  const setRunning = (on: boolean) => {
    if (on === running) return;
    running = on;
    anims.forEach((a) => (on ? a.play() : a.pause()));
  };
  setRunning(false); // start paused

  const io = new IntersectionObserver(
    (entries) => setRunning(entries[0].isIntersecting),
    { threshold: 0 }
  );
  io.observe(footer);
}
