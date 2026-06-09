import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="theme-toggle">
        <FaSun 
          className={theme === "light" ? "active" : "inactive"} 
          onClick={() => setTheme("light")}
        />
        <FaMoon 
          className={theme === "dark" ? "active" : "inactive"} 
          onClick={() => setTheme("dark")}
        />


        {/* <MdLightMode onClick={() => setTheme("light")}/>
        <MdDarkMode onClick={() => setTheme("dark")}/> */}
    </div>
    
  );
}