import HeaderNav from "./HeaderNav";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import "./Header.css"
import { useState } from "react";



export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return(

    <header className="app-header">

      <div className="header-left">
        <HeaderNav isOpen={menuOpen} />

      </div>


      <div className="header-center">
        <h1 className="header-title">Focus Timer</h1>
      </div>



      <div className="header-right">
        <LanguageSwitcher />
        <ThemeToggle />

        <button
        className="hamburger"
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
        > 
        <span></span>
        <span></span>
        <span></span>
        </button>


      </div>

      
    </header>
   
  );
}

