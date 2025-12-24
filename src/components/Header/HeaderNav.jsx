import { NavLink } from "react-router-dom";


export default function HeaderNav({isOpen}) {
  return(

    <nav className={`header-nav ${isOpen ? "open": ""}`}>

      <NavLink
      to="/"
      end
      className={({isActive}) =>
         isActive ? "nav-link-active" : "nav-link"}
      >Pomodoro</NavLink>


      <NavLink
      to="/stopwatch"
      className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}
      >Kronometre</NavLink>


      <NavLink
      to="/timer"
      className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}
      >Zamanlayıcı</NavLink>


      <NavLink
      to="/world-clock"
      className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}
      >Dünya Saatleri</NavLink>



      <NavLink
      to="/blog"
      className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}
      >Blog</NavLink>


      
      </nav>
  );
  
}

