/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {animation: {
      'moveUpDown': 'moveUpDown 1s ease-in-out infinite'
    }},
  },
  plugins: [],
}