import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Breakpoints ──────────────────────────────────────
      screens: {
        xs: "375px", // extra-small — iPhone SE and above
        // sm / md / lg / xl / 2xl stay as Tailwind defaults
      },

      // ── Font families ─────────────────────────────────────
      fontFamily: {
        syne:   ["var(--font-syne)",   "sans-serif"],
        dm:     ["var(--font-dm)",     "sans-serif"],
        outfit: ["Outfit",             "sans-serif"], // ← added
      },

      // ── Colors ────────────────────────────────────────────
      colors: {
        accent:       "#f97316",
        "accent-dark":"#ea580c",
        dark:         "#07080b",
        card:         "#10121a",
        card2:        "#13151f",
      },

      // ── Aspect ratios ─────────────────────────────────────
      aspectRatio: {
        "21/9":    "21 / 9",
        "216/100": "2.16 / 1", // hero section ratio
      },

      // ── Animations ────────────────────────────────────────
      animation: {
        "fade-up":    "fadeUp 0.7s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        marquee:      "marquee 30s linear infinite",
        float:        "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "spin-slow":  "spin 14s linear infinite",
      },

      // ── Keyframes ─────────────────────────────────────────
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 20px rgba(249,115,22,0.3)" },
          "50%":     { boxShadow: "0 0 45px rgba(249,115,22,0.65)" },
        },
      },

      // ── Background images ─────────────────────────────────
      backgroundImage: {
        "grad-accent": "linear-gradient(120deg,#f97316,#fbbf24)",
        "grad-card":   "linear-gradient(135deg,#10121a,#13151f)",
      },
    },
  },
  plugins: [],
};

export default config;
