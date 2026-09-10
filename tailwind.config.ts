import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      indigo: "#1C1B3A",
      wine: "#5E1F32",
      ecru: "#EFE7D6",
      brass: "#A8813F",
      chalk: "#FAF7F0",
    },
    fontFamily: {
      display: ["var(--font-display)", "Georgia", "serif"],
      body: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.5" }],
      sm: ["0.875rem", { lineHeight: "1.6" }],
      base: ["1.125rem", { lineHeight: "1.6" }],
      lg: ["1.25rem", { lineHeight: "1.6" }],
      xl: ["1.5rem", { lineHeight: "1.4" }],
      "2xl": ["2rem", { lineHeight: "1.2" }],
      "3xl": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05" }],
      "4xl": ["clamp(3rem, 9vw, 7rem)", { lineHeight: "0.98" }],
      hero: ["clamp(4.5rem, 15vw, 13rem)", { lineHeight: "0.9" }],
    },
    extend: {
      spacing: {
        gutter: "1.5rem",
        section: "clamp(5rem, 12vw, 10rem)",
      },
      maxWidth: {
        measure: "62ch",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
};

export default config;
