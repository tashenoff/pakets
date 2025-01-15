import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Устанавливаем тему при загрузке
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <span className="text-xl" role="img" aria-label="Switch to dark theme">
          🌙
        </span>
      ) : (
        <span className="text-xl" role="img" aria-label="Switch to light theme">
          ☀️
        </span>
      )}
    </button>
  );
};

export default ThemeSwitcher;
