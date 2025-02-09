/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%', // На маленьких экранах контейнер на всю ширину
        md: '768px', // Средний экран
        lg: '1024px', // Большой экран
        xl: '1280px', // Очень большой экран
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
    base: true,
    styled: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
