/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  fontFamily: {
    primary: '"Exo 2"',
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "960px",
    xl: "1440px",
  },
  extend: {
    colors: {
      body: "#fafafa",
      primary: "#151618",
      accent: {
        DEFAULT: "#DC0105",
        hover: "#e55759",
      },
    },
    backgroundImage: {
      mainSlider: "url('img/mainSlider_bg.jpg')",
    },
    keyframes: {
      shake: {
        "10%, 90%": { transform: "translate3d(-1px, 0,0 )" },
        "20%, 80%": { transform: "translate3d(2px, 0,0 )" },
        "30%, 50%, 70%": { transform: "translate3d(-4px, 0,0 )" },
        "40%, 60%": { transform: "translate3d(4px, 0,0 )" },
      },
    },
    animation: {
      shake: "shake 1s ease-in-out",
    },
  },
};
export const plugins = [];
