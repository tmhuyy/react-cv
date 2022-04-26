module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sora: ["Sora"],
    },
    extend: {
      colors: {
        "blue-200": "#84DFFF",
        "blue-300": "#3DB5FF",
        "blue-500": "#3282B8",
        "blue-700": "#0C3C78",
        "blue-900": "#0A043C",
        "pink-500": "#46C7FF",
      },
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        26: "26px",
        24: "24px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      boxShadow: {
        md: "10px 10px 16px rgba(0,0,0,0.3), -4px -4px 12px 0 rgba(255,255,255,0.3)",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
