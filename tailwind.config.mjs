/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563eb", // AZNL blue
          dark: "#0f172a",    // Slate dark for text/nav
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // your brand font
      },
    },
  },
  plugins: [],
};