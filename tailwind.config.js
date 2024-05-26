/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1170px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      stalinist: ["Stalinist One", "sans-serif"],
      daysOne: ["Days One", "sans-serif"],
      lexendDeca: ["Lexend Deca", "sans-serif"],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        "contact-pattern": "url('./src/components/images/mechanic.png')",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        mainRed: "#FD2611",
        darkRed: "#411616",
        primaryBg: "#FABA19",
        mainBlue: "#4066B9",
        darkBlue: "#15151B",
        navyBlue: "#0C0C18",
        lightBlue: "#23232E",
        rgbaRed: "rgba(65, 22, 22, 0.9)",
      },
      boxShadow: {
        'bottomRedNeon': '0 4px 6px -1px #FD2611, 0 2px 4px -1px #FD2611',
        'blueShadow': '0 0px 7px 0px #74BCFF',
        'yellowShadow': '0 0px 0px 0px #FABA19',
        'yellowShadowHOver': '0 0px 26px 0px #FABA19',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),
  function ({ addUtilities }) {
    addUtilities({
      '.neon-text': {
        textShadow: '0 0 10px #1c92d2, 0 0 12px #1c92d2',
      },
    });
  },
  ],
};
