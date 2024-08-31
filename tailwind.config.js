/** @type {import('tailwindcss').Config} */
// import plugin from "tailwindcss/plugin";
// import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors:{
        c1:'#0369a1',//'#ff8901',
        c2:'#fb923c',
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        }
      },
      fontFamily:{
        playfair:["playfair display", "serif"],
      }
    },
  },
  plugins: [],
};
