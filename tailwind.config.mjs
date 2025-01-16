/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Правильный путь для страниц
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Путь для компонентов
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Путь для app (если используется)
  ],
  darkMode: false, // Отключение тёмного режима
  theme: {
    container: {
      center: true, // Центрирование контейнера
      padding: '1rem', // Внутренние отступы
      screens: {
        sm: '600px', // Максимальная ширина для small screens
        md: '1400px', // Максимальная ширина для medium screens
        lg: '800px', // Максимальная ширина для large screens
        xl: '900px', // Максимальная ширина для extra large screens
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
    require('daisyui'), // Подключение DaisyUI
  ],
  daisyui: {
    themes: ["light"], // Только светлая тема
    base: true,
    styled: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
