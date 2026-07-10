import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Template-specific families
        essencia: ["'Cormorant Garamond'", "Georgia", "serif"],
        essenciaBody: ["'Inter'", "system-ui", "sans-serif"],
        aura: ["'Inter'", "system-ui", "sans-serif"],
        movimento: ["'Space Grotesk'", "'Inter'", "sans-serif"],
        traco: ["'Playfair Display'", "Georgia", "serif"],
        tracoBody: ["'Inter'", "system-ui", "sans-serif"],
        forma: ["'Cormorant'", "Georgia", "serif"],
        formaBody: ["'Inter'", "system-ui", "sans-serif"],
        urbano: ["'Barlow Condensed'", "'Inter'", "sans-serif"],
        urbanoBody: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          ink: "#141414",
          soft: "#f7f4f0",
          rose: "#c98a7a",
          gold: "#b6975c",
        },
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
