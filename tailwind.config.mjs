/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Правильный путь для страниц
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Путь для компонентов
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Путь для app (если используется)
  ],
  darkMode: 'class', // Отключаем автоопределение темы устройства
  theme: {
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
    themes: ["dark"], // Принудительное использование только тёмной темы
    base: true, // Включение базовых стилей DaisyUI
    styled: true, // Включение стандартной стилизации компонентов
    utils: true, // Включение утилитарных классов DaisyUI
    logs: true, // Логи для отладки
    rtl: false, // RTL не используется
  },
};
