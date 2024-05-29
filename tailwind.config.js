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
      boxShadow: {
        glow: [
          "0 0 2px #faba19",
          "inset 0 0 2px #faba19",
          "0 0 5px #faba19",
          "0 0 10px #faba19",
          "0 0 20px #faba19",
        ],
        glowRed: [
          "0 0 2px #fd2611",
          "inset 0 0 2px #fd2611",
          "0 0 5px #fd2611",
          "0 0 10px #fd2611",
          "0 0 20px #fd2611",
        ],
      },
      dropShadow: {
        neonWhite: ["0 0 1.5rem #ffffff"],
        neonRed: ["0 0 1.5rem #FD2611"],
        neonBlue: ["0 0 1.5rem #4066B9"],
      },
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
        "home-pattern": "url('./src/components/images/Homepage Image.png')",
        "casa-pattern": "url('./src/components/images/casa.png')",
        "features-pattern": "url('./src/components/images/features.png')",
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
        purpleBlue: "#2C2C3A",
        rgbaRed: "rgba(65, 22, 22, 0.9)",
        rgbaBlack: "rgba(0, 0, 0, 0.8)",
        Black: "#07070F",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
