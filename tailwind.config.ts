import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9F4",
        blush: "#FFD9E5",
        sakura: "#F76598",
        mauve: "#79519A",
        ink: "#3F343D",
      },
    },
  },
  plugins: [],
};

export default config;
