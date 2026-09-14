import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Default to 'light' as requested by the user
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('techofay_theme');
    return saved || 'light';
  });

  useEffect(() => {
    localStorage.setItem('techofay_theme', theme);
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      body.classList.remove('bg-[#050B1F]', 'text-white');
      body.classList.add('bg-[#F8FAFC]', 'text-[#0F172A]');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      body.classList.remove('bg-[#F8FAFC]', 'text-[#0F172A]');
      body.classList.add('bg-[#050B1F]', 'text-white');
    }
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
