/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spikYellow: "#FFD84D",
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;