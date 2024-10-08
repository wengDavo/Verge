/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        abs: {
          white: "#FFFFFF",
          black: "#000000",
          // sleep: "#191622",
          // night: "#211E2F",
          dark: "#141414",
          ghost: "#F1F3F2",
        },
        purple: {
          60: "#703BF7",
          65: "#8254F8",
          70: "#946CF9",
          75: "#A685FA",
          90: "#DBCEFD",
          95: "#EDE7FE",
          97: "#F4F0FE",
          99: "#FBFAFF",
        },
        white: {
          85: "#E4E4E7", //8
          90: "#F1F1F3", //10
          95: "#F7F7F8", //15
          97: "#F8F9FA", //20
          99: "#FCFCFD",
        },
        grey: {
          8: "#141414",
          10: "#1A1A1A",
          15: "#262626",
          20: "#333333",
          30: "#4D4D4D",
          40: "#666666",
          50: "#808080",
          60: "#999999",
        },
      },
    },
  },
  plugins: [],
};
