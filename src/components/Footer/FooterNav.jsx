import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function FooterNav() {
  const { language } = useLanguage();

  const links = [
    {
      en: "Pomodoro",
      tr: "Pomodoro",
      to: "/"
    },
    {
      en: "Kronometre",
      tr: "Kronometre",
      to: "/stopwatch"
    },
    {
      en: "Zamanlayıcı",
      tr: "Zamanlayıcı",
      to: "/timer"
    },
    {
      en: "World Clock",
      tr: "Dünya Saatleri",
      to: "/world-clock"
    },
     {
      en: "Blog",
      tr: "Blog",
      to: "/blog"
    }
  ];

  return (
    <nav className="footer-nav">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className="footer-link"
        >
          {language === "en" ? link.en : link.tr}
        </NavLink>
      ))}
    </nav>
  );
}
