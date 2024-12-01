import React, { useState, useEffect, useContext, createContext } from "react";

// ایجاد Context
export const ThemeContext = createContext();

// کامپوننت Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // بازیابی تم از localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList = savedTheme;
    }
  }, []);

  // تابع تغییر تم
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// هوک برای دسترسی به Context
export const useTheme = () => useContext(ThemeContext);
