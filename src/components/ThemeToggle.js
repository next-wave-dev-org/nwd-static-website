import React, { useState } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
        <button onClick={() => {if (theme !== "light") setTheme("light")}}>Sun</button>
        <button onClick={() => {if (theme !== "dark") setTheme("dark")}}>Moon</button>
    </div>
    
  );
}