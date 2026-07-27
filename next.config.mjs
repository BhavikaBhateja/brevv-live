/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // the DOM effects (GSAP/observers) run once; avoid double-invoke

  // The section styles live in `*.module.scss` files but must keep their
  // ORIGINAL global class names (the JSX references them as plain strings and
  // must not change). Next defaults CSS Modules to `mode: "pure"` (every
  // selector must be locally scoped/hashed), so we flip the CSS-module loader
  // to `mode: "global"` — class names are emitted verbatim, exactly like the
  // former global stylesheet, just organised per section.
  webpack(config) {
    const makeGlobal = (rules) => {
      for (const rule of rules || []) {
        if (Array.isArray(rule.oneOf)) makeGlobal(rule.oneOf);
        const uses = Array.isArray(rule.use) ? rule.use : rule.use ? [rule.use] : [];
        for (const u of uses) {
          if (u && typeof u === "object" && u.options && typeof u.options.modules === "object") {
            u.options.modules.mode = "global";
          }
        }
      }
    };
    makeGlobal(config.module.rules);
    return config;
  },
};
export default nextConfig;