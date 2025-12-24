import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang ${language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>

      <span className="lang-divider">|</span>

      <button
        className={`lang ${language === "tr" ? "active" : ""}`}
        onClick={() => setLanguage("tr")}
      >
        TR
      </button>
    </div>
  );
}
