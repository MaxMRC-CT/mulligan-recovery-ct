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
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          soft: "var(--primary-soft)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
          soft: "var(--secondary-soft)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)"
        },
        neutral: {
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          700: "var(--neutral-700)",
          900: "var(--neutral-900)"
        },
        brand: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          soft: "var(--primary-soft)"
        },
        ink: "var(--ink)",
        surface: "var(--surface)",
        line: "var(--line)"
      },
      fontFamily: {
        sans: ["Atkinson Hyperlegible", "Inter", "Segoe UI", "system-ui", "sans-serif"]
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem"
      },
      boxShadow: {
        card: "0 10px 30px rgba(17, 45, 55, 0.08)",
        focus: "0 0 0 4px rgba(76, 150, 168, 0.25)"
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
