/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ppc: {
          darkCyan: "hsl(158, 36%, 37%)",
          cream: "hsl(30, 38%, 92%)",
          veryDarkBlue: "hsl(212, 21%, 14%)",
          darkGrayishBlue: "hsl(228, 12%, 48%)",
        },
        ir: {
          orange: "hsl(25, 97%, 53%)",
          lightGrey: "hsl(217, 12%, 63%)",
          mediumGrey: "hsl(216, 12%, 54%)",
          darkBlue: "hsl(213, 19%, 18%)",
          veryDarkBlue: "hsl(216, 12%, 8%)",
        },
        qrc: {
          lightGrey: "hsl(212, 45%, 89%)",
          grayishBlue: "hsl(220, 15%, 55%)",
          darkBlue: "hsl(218, 44%, 22%)",
        },
        nftc: {
          softBlue: "hsl(215, 51%, 70%)",
          cyan: "hsl(178, 100%, 50%)",
          veryDarkBlueMain: "hsl(217, 54%, 11%)",
          veryDarkBlueCard: "hsl(216, 50%, 16%)",
          veryDarkBlueLine: "hsl(215, 32%, 27%)",
        },
      },
      letterSpacing: {
        extraWide: "0.4em",
      },
    },
  },
  plugins: [],
};
