import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="theme-toggle">
        <FaSun onClick={() => setTheme("light")}/>
        <FaMoon onClick={() => setTheme("dark")}/>

            
        {/* <MdLightMode onClick={() => setTheme("light")}/>
        <MdDarkMode onClick={() => setTheme("dark")}/> */}
    </div>
    
  );
}