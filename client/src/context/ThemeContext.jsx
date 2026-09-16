import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    localStorage.setItem('techofay_theme', 'dark');
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove('light');
    root.classList.add('dark');
    body.classList.remove('bg-white', 'text-[#111827]', 'bg-[#0C0F0A]', 'text-[#F0FDF4]', 'bg-[#050B1F]', 'text-[#FFFFFF]');
    body.classList.add('bg-[#050B1F]', 'text-[#FFFFFF]');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
