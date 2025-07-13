"use client";
import React, { createContext,useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
  const savedTheme = localStorage.getItem("theme") as Theme | null;

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
 const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
 setTheme(prefersDark ? "dark" : "light");
  }

  setMounted(true);
  }, []);

useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
}, [theme]);
     console.log(theme)
    
    const toggleTheme = () => {
        setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"))
    }
  if (!mounted) {
    return null; // don't render anything until theme is resolved
  }

     return (
       <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
       </ThemeContext.Provider>
     );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}