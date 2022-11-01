/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}","./screens/**/*.{js,jsx,ts,tsx}","./services/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        alt: "#161616",
        "brand-100": "#a0f5f3",
        "brand-200": "#8df3f1",
        "brand-300": "#76f0ee",
        brand: "#2ce8e5",
        mintie: "#282052",
        "brand-500": "#25c5c3",
        "brand-600": "#20a9a7",
        "brand-700": "#0f5150",
        "brand-800": "#0b3a39",
        "brand-900": "#051a19",
        "brand-secondary": "#2C6EE8",
      },
      
    },
  },
  plugins: [],
}
