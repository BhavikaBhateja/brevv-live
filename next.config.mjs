/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // the DOM effects (GSAP/observers) run once; avoid double-invoke
};
export default nextConfig;
