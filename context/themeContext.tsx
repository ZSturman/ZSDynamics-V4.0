"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context for theme management
const ThemeContext = createContext({ theme: '', toggleTheme: () => {},  windowSize: { width: 0, height: 0 } });

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

type Func = (...args: any[]) => void;

function debounce(fn: Func, ms: number): Func {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    clearTimeout(timer as NodeJS.Timeout); 
    timer = setTimeout(() => {
      fn(...args); 
    }, ms);
  };
}


// ThemeProvider component to wrap the application or component tree
export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light'; 
  });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 }); 

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 250);

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // Function to toggle the theme between dark and light
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme); // Persist theme preference
    }
    setTheme(newTheme); // Update theme state
  };

  // Effect hook to apply the theme to the document and handle changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }
  }, [theme]);

  // Provide the theme and toggleTheme through context to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, windowSize}}>
      {children}
    </ThemeContext.Provider>
  );
};
