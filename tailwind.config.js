/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "695px",
      // => @media (min-width: 640px) { ... }

      md: "980px",
      // => @media (min-width: 768px) { ... }

      lg: "1050px",
      // => @media (min-width: 1024px) { ... }

      xl: "1226px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundColor: {},
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     ".scrollbar-thin": {
    //       scrollbarWidth: "thin",
    //       scrollbarColor: "black",
    //     },
    //     ".scrollbar-webkit": {
    //       "&::-webkit-scrollbar": {
    //         width: "8px",
    //       },
    //       "&::-webkit-scrollbar-track": {
    //         background: "white",
    //       },
    //       "&::-webkit-scrollbar-thumb": {
    //         backgroundColor: "black",
    //         borderRadius: "24px",
    //         border: "1px solid black",
    //       },
    //     },
    //   };
    //   addUtilities(newUtilities, ["responsive", "hoiver"]);
    // },
    require("tailwind-scrollbar"),
  ],
};
