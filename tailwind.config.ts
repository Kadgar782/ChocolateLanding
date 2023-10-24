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
      "16": "4rem",
    },
    colors: {
      text: "#ebe066",
      background: "#623527",
      bacgroundCard: "#673b2e",
      primary: "#327486",
      secondary: "#240800",
      accent: "#439eb6",
      citrine: "#EBE066",
      bluencs: "#0976E3",
      cornellred: "#BF211E",
      brown: "#653527",
      black: "#000000",
      white: "#f5f5f5",
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
