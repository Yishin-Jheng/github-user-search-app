/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#ea5555",
      blue: "#0079ff",
      lightblue: "#60abff",
      darkblue: "#4b6a9b",
      greyblue: "#90a4d4",
      white: "#fff",
      darkgrey1: "#141d2f",
      darkgrey2: "#2b3442",
      darkgrey3: "#1e2a47",
      lightgrey1: "#fefefe",
      lightgrey2: "#f6f8ff",
      lightgrey3: "#697c9a",
    },
    fontFamily: {
      mono: ["Space Mono", "monospace"],
    },
    fontSize: {
      xl: ["2.6rem", "3.8rem"],
      l: ["2.2rem", "3.3rem"],
      m: ["1.6rem", "2.4rem"],
      s: ["1.3rem", "2rem"],
      xs: ["1.1rem", "1.7rem"],
      body: ["1.5rem", "2.5rem"],
    },
    screens: {
      mobile: { max: "600px" },
      semimobile: { max: "675px" },
      tablet: { max: "800px" },
    },
    extend: {
      boxShadow: {
        darkgrey:
          "0 20px 25px -5px rgb(75 106 155 / 0.1), 0 8px 10px -6px rgb(75 106 155 / 0.1);",
        lightgrey:
          "0 20px 25px -5px rgb(75 106 155 / 0.1), 0 8px 10px -6px rgb(246 288 255 / 0.1);",
      },
    },
  },
  plugins: [],
};
