/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "node_modules/preline/dist/*.js",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("preline/plugin"),
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
