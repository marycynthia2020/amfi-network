import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Use the same hex values here as the colors below for consistency
      keyframes: {
        "bg-rotate": {
          "0%": { backgroundColor: "#f38049" },
          "50%": { backgroundColor: "#000c54" },
          "100%": { backgroundColor: "#f38049" },
        },
      },
      animation: {
        // animate: name duration easing iterations direction
        "bg-rotate": "bg-rotate 6s ease-in-out infinite alternate",
      },
      colors: {
        "deep-blue": "#000c54",
        orange: "#f38049",
        "nav-grey": "#babab9",
        "footer-bg": "#2f2f2f",
      },
      backgroundImage: {
        "hero-image": "url('/hero.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
