import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: "#171717", // Ajouté pour éviter l'erreur
        },
      },
    },
  },
  plugins: [],
};

export default config;

