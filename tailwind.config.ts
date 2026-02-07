import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "var(--surface)",
        ink: "var(--ink)",
        brand: {
          DEFAULT: "var(--brand)",
          dark: "var(--brand-dark)",
          soft: "var(--brand-soft)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)"
        },
        line: "var(--line)"
      },
      boxShadow: {
        card: "0 10px 30px rgba(10, 36, 48, 0.08)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
