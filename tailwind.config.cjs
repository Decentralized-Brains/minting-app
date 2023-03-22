/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee Inline", "cursive"],
        fredoka: ["Fredoka One", "cursive"],
      },
      animation: {
        shine: "shine 5s infinite",
      },
      keyframes: {
        shine: {
          "0%": {
            transform: "rotate(20deg) translateX(-90px)",
          },
          "50%,100%": {
            transform: "rotate(20deg) translate(300px, -100px)",
          },
        },
      },
    },
  },
  plugins: [],
};
