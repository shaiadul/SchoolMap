module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        schoolTeme: {
          primary: "#009999",
          secondary: "#B9345A",
          accent: "#37cdbe",
          neutral: "#3d4451",
          lemons: "#c6d817",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
