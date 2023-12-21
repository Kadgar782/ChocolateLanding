import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "15%": "15%",
      "10%": "10%",
      "50%": "50%",
      "16": "4rem",
    },
    colors: {
      text: "#bca66e",
      textAlt: "#928581",
      background: "#45190c",
      bento: "#ddcea0",
      primary: "#4d2413",
      secondary: "#240800",
      accent: "#2E3966",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
