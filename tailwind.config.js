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
        os: {
          paleBlue: "hsl(225, 100%, 94%)",
          brightBlue: "hsl(245, 75%, 52%)",
          veryPaleBlue: "hsl(225, 100%, 98%)",
          desaturatedBlue: "hsl(224, 23%, 55%)",
          darkBlue: "hsl(223, 47%, 23%)",
        },
        spc: {
          veryDarkBlue: "hsl(233, 47%, 7%)",
          darkDesaturatedBlue: "hsl(244, 38%, 16%)",
          softViolet: "hsl(277, 64%, 61%)",
          whiteParagraph: "hsla(0, 0%, 100%, 0.75)",
          whiteHeading: "hsla(0, 0%, 100%, 0.6)",
        },
        ccs: {
          brightOrange: "hsl(31, 77%, 52%)",
          darkCyan: "hsl(184, 100%, 22%)",
          veryDarkCyan: "hsl(179, 100%, 13%)",
          transparentWhite: "hsla(0, 0%, 100%, 0.75)",
          veryLightGrey: "hsl(0, 0%, 95%)",
        },
        pc: {
          darkCyan: "hsl(185, 75%, 39%)",
          veryDarkDesaturatedBlue: "hsl(229, 23%, 23%)",
          darkGrayishBlue: "hsl(227, 10%, 46%)",
          darkGrey: "hsl(0, 0%, 59%)",
        },
        mlp: {
          brightRed: "hsl(12, 88%, 59%)",
          darkBlue: "hsl(228, 39%, 23%)",
          darkGrayishBlue: "hsl(227, 12%, 61%)",
          veryDarkBlue: "hsl(233, 12%, 13%)",
          veryPaleRed: "hsl(13, 100%, 96%)",
          veryLightGrey: "hsl(0, 0%, 98%)",
        },
      },
      letterSpacing: {
        extraWide: "0.4em",
      },
      // Since Tailwind classes will be turned into regular CSS rules in the styles folder, we have to use ../ to reference the SVGs correctly
      backgroundImage: {
        "os-mobile-pattern":
          "url(../public/assets/order-summary/mobile-background.svg)",
        "os-desktop-pattern":
          "url(../public/assets/order-summary/desktop-background.svg)",
      },
    },
  },
  plugins: [],
};
