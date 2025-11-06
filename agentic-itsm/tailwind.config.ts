import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#020617"
        },
        brand: {
          50: "#f5f8ff",
          100: "#e2ebff",
          200: "#c6d4ff",
          300: "#9fb3ff",
          400: "#7188ff",
          500: "#4559ff",
          600: "#2f3de6",
          700: "#2733b3",
          800: "#222c83",
          900: "#1d255c"
        }
      }
    }
  },
  plugins: []
};

export default config;
