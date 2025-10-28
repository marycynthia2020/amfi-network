import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#000c54",
        orange: "#f38049",
        "nav-grey": "#babab9",
      },
      backgroundImage: {
        "hero-image": "url('/hero.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
