import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(255, 255, 255)",
        foreground: "rgb(38, 43, 51)",
        primary: { DEFAULT: "rgb(38, 43, 51)", foreground: "rgb(255, 255, 255)" },
        secondary: { DEFAULT: "rgb(245, 245, 245)", foreground: "rgb(23, 23, 23)" },
        muted: { DEFAULT: "rgb(245, 245, 245)", foreground: "rgb(125, 148, 153)" },
        accent: { DEFAULT: "rgb(0, 140, 255)", foreground: "rgb(255, 255, 255)" },
        border: "rgb(229, 229, 229)",
        ring: "rgb(0, 140, 255)",
        "brand-blue": "#008CFF",
        "dark-slate": "#0f172a",
      },
      fontFamily: {
        display: ['"Outfit"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        dashboard: "0 25px 80px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
