/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // Pages Router (if used)
    "./components/**/*.{js,ts,jsx,tsx}" // shared components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
