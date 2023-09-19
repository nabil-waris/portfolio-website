"use client"
import React, { useEffect, useState, createContext, Children, useContext } from "react";

type Theme = "light" | "dark";
type ThemeContextProviderProps = {
  children: React.ReactNode;
};
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, settheme] = useState<Theme>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      settheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      settheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    const localtheme = window.localStorage.getItem("theme") as Theme | null;
    if (localtheme) {
      settheme(localtheme);

      if (localtheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      settheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if(context === null){
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return context;
}