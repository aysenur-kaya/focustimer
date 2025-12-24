import { useEffect, useState } from "react";


const getAutoThemeByTime = () => {
  const hour = new Date().getHours();

  if (hour >= 21 || hour < 6) {
    return "dark";
  }
  return "light";
};


export default function ThemeToggle() {
  const[theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if(savedTheme) {
      setTheme(savedTheme);
    }else {
      const autoTheme = getAutoThemeByTime();
      setTheme(autoTheme);
      }
  }, []);

  return(
    <button
    className="theme-toggle"
    onClick={() =>
      setTheme(theme==="light" ? "dark" : "light")
    }>

      {theme === "light" ? "🌙" : "☀️"}


    </button>
  )
}