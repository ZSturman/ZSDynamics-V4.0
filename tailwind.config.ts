import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        "urbanist-light": "Urbanist-Light",
        "urbanist-regular": "Urbanist-Regular",
        "urbanist-medium": "Urbanist-Medium",
      },
      colors: {
        "lightest-shade": "var(--lightest-shade)",
        "darkest-shade": "var(--darkest-shade)",
        "lighter-shade": "var(--lighter-shade)",
        "darker-shade": "var(--darker-shade)",
        "light-shade": "var(--light-shade)",
        "dark-shade": "var(--dark-shade)",
        "light-accent": "var(--light-accent)",
        "dark-accent": "var(--dark-accent)",
        "main-brand": "var(--main-brand)",
      },
    },
  },
  plugins: [],
};

export default config;
