"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./SolidDirection.module.scss";

export default function SolidDirection() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    return initSphereReveal();
  }, []);

  return (
    <section className="solid-direction-section" id="solid-direction">
      <div className="solid-direction-container">
        <div className="solid-direction-sticky">

          {/* Video revealed once the sphere collapses into a full-screen circle */}
          <div className="sd-video-layer" id="sd-video-layer">
            <video muted loop playsInline poster="">
              <source src="/assets/videos/main_2.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Dark circle mask that grows to cover the screen, then fades to reveal the video */}
          <div className="sd-halo" id="sd-halo"></div>

          {/* three.js network sphere */}
          <canvas className="sd-sphere-canvas" id="sd-sphere-canvas"></canvas>

          {/* Text — unchanged, slides apart to make room for the sphere */}
          <div className="sd-gate">
            <div className="sd-half sd-half-left">
              <h2 className="gate-title text-slate-900" id="sd-left-text">Unlock Your</h2>
            </div>
            <div className="sd-half sd-half-right">
              <h2 className="gate-title text-blue-500" id="sd-right-text">Future Path</h2>
            </div>
          </div>

          <div className="sd-progress-track"><div className="sd-progress-fill" id="sd-progress-fill"></div></div>
        </div>
      </div>
    </section>
  );
}

// ─── Sphere → halo → video reveal (ported from the idk2 preview) ───

function initSphereReveal(): (() => void) | void {
  const canvas = document.getElementById("sd-sphere-canvas") as HTMLCanvasElement | null;
  const section = document.getElementById("solid-direction");
  const leftText = document.getElementById("sd-left-text");
  const rightText = document.getElementById("sd-right-text");
  const halo = document.getElementById("sd-halo");
  const videoLayer = document.getElementById("sd-video-layer");
  const progressFill = document.getElementById("sd-progress-fill");
  if (!canvas || !section || !leftText || !rightText || !halo || !videoLayer) return;

  const revealVideo = videoLayer.querySelector("video") as HTMLVideoElement | null;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 6;

  const group = new THREE.Group();
  scene.add(group);

  // Fibonacci-sphere point distribution
  const NUM_POINTS = 140;
  const radius = 1.8;
  const positions: number[] = [];
  const pts: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < NUM_POINTS; i++) {
    const y = 1 - (i / (NUM_POINTS - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    const v = new THREE.Vector3(x * radius, y * radius, z * radius);
    pts.push(v);
    positions.push(v.x, v.y, v.z);
  }

  const ptGeo = new THREE.BufferGeometry();
  ptGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  const ptMat = new THREE.PointsMaterial({ color: 0x6fa1ff, size: 0.045, transparent: true, opacity: 0.95 });
  const pointCloud = new THREE.Points(ptGeo, ptMat);
  group.add(pointCloud);

  // Connect nearby points with thin lines (the "network" web)
  const linePositions: number[] = [];
  const THRESH = 0.62;
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      if (pts[i].distanceTo(pts[j]) < THRESH) {
        linePositions.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
      }
    }
  }
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
  const lineMat = new THREE.LineBasicMaterial({ color: 0x3d7bf5, transparent: true, opacity: 0.35 });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  group.add(lines);

  // Subtle core glow
  const coreGeo = new THREE.SphereGeometry(0.5, 32, 32);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0x3d7bf5, transparent: true, opacity: 0.15 });
  const core = new THREE.Mesh(coreGeo, coreMat);
  group.add(core);

  // Drive canvas size + camera from the STICKY container's actual pixel size, not
  // window.innerWidth. Using the container (via ResizeObserver) keeps the drawing
  // buffer exactly matched to what's on screen through DevTools resizes, mobile
  // address-bar show/hide, and orientation changes — the earlier window-based
  // sizing left a stale, oversized canvas (e.g. 435px on a 375px phone) that
  // overflowed to the right and made the sphere glitch.
  const stickyEl = canvas.parentElement as HTMLElement | null;
  const applyViewport = () => {
    const w = stickyEl?.clientWidth || window.innerWidth;
    const h = stickyEl?.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    // Size the sphere against the SMALLER dimension so it stays a consistent
    // fraction of the screen on every device/orientation (≈ desktop z = 6 in
    // landscape; camera dollies back in portrait as the screen narrows).
    camera.position.z = Math.min(40, Math.max(3.5, 6 * (h / Math.min(w, h))));
    camera.updateProjectionMatrix();
    // updateStyle = false → do NOT write inline width/height px onto the canvas;
    // the CSS (width/height: 100%) sizes the element, so it can never exceed its
    // container and cause horizontal overflow.
    renderer.setSize(w, h, false);
  };

  let resizeObserver: ResizeObserver | null = null;
  if (typeof ResizeObserver !== "undefined" && stickyEl) {
    resizeObserver = new ResizeObserver(applyViewport);
    resizeObserver.observe(stickyEl);
  }
  const onResize = () => applyViewport();
  window.addEventListener("resize", onResize);
  applyViewport();

  let progress = 0;
  const baseRotSpeed = 0.0015;
  let revealed = false;
  let videoIsPlaying = false;

  const setVideoPlaying = (shouldPlay: boolean) => {
    if (!revealVideo || shouldPlay === videoIsPlaying) return;
    videoIsPlaying = shouldPlay;
    if (shouldPlay) revealVideo.play().catch(() => {});
    else revealVideo.pause();
  };

  const computeProgress = () => {
    const rect = section.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const scrolled = -rect.top;
    return Math.max(0, Math.min(1, scrolled / total));
  };

  const REVEAL_AT = 0.55;

  // Once the sphere is fully grown (a little before the reveal), take over and
  // auto-scroll quickly through the halo → video reveal so the user doesn't have
  // to keep scrolling. Cancels the moment the user scrolls themselves.
  const AUTOSCROLL_TRIGGER = 0.4; // sphere fully expanded
  const AUTOSCROLL_TARGET_P = 1.0; // all the way to the section end — reveal + video, then exit
  let autoScrolling = false;
  let autoScrollDone = false;

  const triggerAutoScroll = () => {
    if (autoScrolling || autoScrollDone) return;
    autoScrolling = true;
    const rect = section.getBoundingClientRect();
    const sectionTopY = window.scrollY + rect.top;
    const total = rect.height - window.innerHeight;
    const targetY = sectionTopY + AUTOSCROLL_TARGET_P * total;
    const startY = window.scrollY;
    const dist = targetY - startY;
    // Scale duration with distance so the auto-scroll feels the SAME speed on
    // every viewport height (a fixed duration is too fast on short screens and
    // too slow on tall ones). ~0.34 px/ms, tuned on desktop, clamped for sanity.
    const duration = Math.min(3000, Math.max(1200, Math.abs(dist) / 0.34)); // ms
    const startT = performance.now();
    const step = (now: number) => {
      if (!autoScrolling) return; // user cancelled
      const t = Math.min(1, (now - startT) / duration);
      const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
      window.scrollTo(0, startY + dist * ease);
      if (t < 1) requestAnimationFrame(step);
      else {
        autoScrolling = false;
        autoScrollDone = true;
      }
    };
    requestAnimationFrame(step);
  };

  // Only an UPWARD wheel gesture cancels the auto-scroll (the user wants to go
  // back). Downward wheel/trackpad inertia must NOT cancel it — that inertia is
  // what carried the user to the trigger point in the first place. Programmatic
  // scrollTo fires no wheel events, so this only catches real user input.
  const cancelOnWheel = (e: WheelEvent) => {
    if (autoScrolling && e.deltaY < -0.5) autoScrolling = false;
  };
  window.addEventListener("wheel", cancelOnWheel, { passive: true });

  // Touch devices fire no wheel events. A finger placed back on the screen while
  // the page is auto-scrolling means the user wants to take over, so cancel.
  // (Momentum/inertia does NOT fire touchmove — the finger is already up — so
  // this won't cancel the auto-scroll that the user's flick just triggered.)
  const cancelOnTouch = () => {
    if (autoScrolling) autoScrolling = false;
  };
  window.addEventListener("touchmove", cancelOnTouch, { passive: true });

  const onScroll = () => {
    progress = computeProgress();

    // Text fully exits by 40% of the scroll. Below 1024px the phrase is stacked
    // (see the CSS), so the two lines slide UP/DOWN instead of LEFT/RIGHT.
    const stacked = window.innerWidth <= 1024;
    const textT = Math.min(progress, 0.4) / 0.4;
    const shift = textT * (stacked ? window.innerHeight : window.innerWidth) * 0.65;
    if (stacked) {
      leftText.style.transform = `translateY(${-shift}px)`;
      rightText.style.transform = `translateY(${shift}px)`;
    } else {
      leftText.style.transform = `translateX(${-shift}px)`;
      rightText.style.transform = `translateX(${shift}px)`;
    }

    // 0    → 0.40  sphere expands, text slides away
    // 0.40 → 0.55  sphere fades out while the dark halo grows to cover the screen
    // ≥ 0.55       reveal fires once: halo fades out, video crossfades in (CSS, 0.7s)
    let sphereOpacity: number;
    let haloScale: number;
    if (progress < 0.4) {
      sphereOpacity = 1;
      haloScale = 0.02;
    } else if (progress < REVEAL_AT) {
      const t = (progress - 0.4) / (REVEAL_AT - 0.4);
      sphereOpacity = 1 - t;
      haloScale = 0.02 + t * 1.0;
    } else {
      sphereOpacity = 0;
      haloScale = 1.0;
    }

    canvas.style.opacity = String(sphereOpacity);
    halo.style.transform = `translate(-50%,-50%) scale(${haloScale})`;

    const shouldReveal = progress >= REVEAL_AT;
    if (shouldReveal !== revealed) {
      revealed = shouldReveal;
      halo.classList.toggle("revealed", revealed);
      videoLayer.classList.toggle("revealed", revealed);
      setVideoPlaying(revealed);
    }

    if (!revealed) halo.style.opacity = String(Math.min(1, haloScale));

    if (progressFill) progressFill.style.width = progress * 100 + "%";

    const s = 0.4 + Math.min(progress, 0.4) * 3.5;
    group.scale.set(s, s, s);

    // Kick off the auto-scroll once the sphere is fully grown; allow it to run
    // again only after the user has scrolled back well before the sphere phase.
    if (progress >= AUTOSCROLL_TRIGGER) triggerAutoScroll();
    else if (progress < 0.25) autoScrollDone = false;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  let rafId = 0;
  const animate = () => {
    rafId = requestAnimationFrame(animate);
    const speed = baseRotSpeed + progress * 0.006;
    group.rotation.y += speed;
    group.rotation.x = Math.sin(Date.now() * 0.0002) * 0.15;
    renderer.render(scene, camera);
  };
  animate();

  // Cleanup on unmount
  return () => {
    cancelAnimationFrame(rafId);
    autoScrolling = false;
    resizeObserver?.disconnect();
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("wheel", cancelOnWheel);
    window.removeEventListener("touchmove", cancelOnTouch);
    ptGeo.dispose();
    lineGeo.dispose();
    coreGeo.dispose();
    ptMat.dispose();
    lineMat.dispose();
    coreMat.dispose();
    renderer.dispose();
  };
}
