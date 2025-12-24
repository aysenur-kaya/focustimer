import { useLanguage } from "../../context/LanguageContext";
import FooterNav from "./FooterNav";
import "./Footer.css";
import { Link } from "react-router-dom";


export default function Footer() {
  const { language } = useLanguage();

  const texts = {
    en: {
      slogan: "Focus better. Manage your time effectively.",
      rights: "© 2025 Pomodro. All rights reserved."
    },
    tr: {
      slogan: "Daha iyi odaklan. Zamanını verimli yönet.",
      rights: "© 2025 Pomodro. Tüm hakları saklıdır."
    }
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h4 className="footer-logo">POMODRO</h4>
          <p className="footer-slogan">{texts[language].slogan}</p>
          <span className="footer-copy">{texts[language].rights}</span>
        </div>

        <FooterNav />

         <div className="footer-legal">
      <Link to="/about">About</Link>
      <span> · </span>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <span> · </span>
      <Link to="/contact">Contact</Link>
    </div>


      </div>
    </footer>
  );
}
