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
      // darker brass for small type on light grounds (AA against chalk/sand)
      "brass-deep": "#8A6A2F",
      chalk: "#FAF7F0",
      sand: "#EDE3D0",
    },
    fontFamily: {
      display: ["var(--font-display)", "Georgia", "serif"],
      body: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.5" }],
      sm: ["0.875rem", { lineHeight: "1.6" }],
      base: ["1.0625rem", { lineHeight: "1.65" }],
      lg: ["1.1875rem", { lineHeight: "1.65" }],
      xl: ["1.375rem", { lineHeight: "1.45" }],
      // Heading steps. Capitals occupy more optical width than lowercase, so
      // every step below sits lower than a lowercase scale would.
      "2xl": ["clamp(1.25rem, 1.8vw, 1.5rem)", { lineHeight: "1.25" }],
      "3xl": ["clamp(1.625rem, 2.8vw, 2.25rem)", { lineHeight: "1.15" }],
      "4xl": ["clamp(2.125rem, 4.6vw, 3.5rem)", { lineHeight: "1.05" }],
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
      letterSpacing: {
        // Block-letter headings: the larger the size, the tighter the track.
        caps: "0.08em",
        "caps-tight": "0.02em",
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
