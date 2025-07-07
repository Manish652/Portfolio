import React, { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";
import { cn } from '@/lib/utils.js';

function ThemeToggle() {
  const [isDarkMode, setDarkMode] = useState(true); // default to dark mode

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Default to dark if not set
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
  onClick={toggleTheme}
  className={cn(
    "fixed top-15 right-1 z-50 p-3 rounded-full shadow-xl",  // pushed down
    "bg-white text-black dark:bg-black dark:text-white",
    "hover:scale-110 active:scale-95 transition-all duration-300",
    "border border-gray-300 dark:border-gray-700"
  )}
>
  {isDarkMode ? (
    <Sun className="h-6 w-6 text-yellow-300 transition-colors duration-300" />
  ) : (
    <Moon className="h-6 w-6 text-blue-900 transition-colors duration-300" />
  )}
</button>

  );
}

export default ThemeToggle;
