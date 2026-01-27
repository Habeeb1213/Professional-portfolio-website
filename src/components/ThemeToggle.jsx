import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, isSidebarOpen } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-8 z-50 p-3.5 rounded-full bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isSidebarOpen ? 'right-8' : 'right-8'
      }`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-gray-900 dark:text-white transition-transform duration-300 hover:rotate-180" />
      ) : (
        <Moon className="w-6 h-6 text-gray-900 dark:text-white transition-transform duration-300 hover:rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;