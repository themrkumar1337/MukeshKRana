import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        brand: {
          // Tactical Gold / Bronze for a premium executive feel
          DEFAULT: "#c5a059", 
          light: "#e2c28a",
          dark: "#8e6f3e",
        },
        slate: {
          950: "#0a0a0c",
        }
      },
    },
  },
  plugins: [],
};

export default config;