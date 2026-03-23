import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "app/**/*.{js,ts,jsx,tsx,mdx}",
  "components/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        spikYellow: "#FFD84D",
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
      },
      // AS ANIMAÇÕES DEVEM ESTAR DENTRO DO EXTEND
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'scroll-right': 'scroll-right 30s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;