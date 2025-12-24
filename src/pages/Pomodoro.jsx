import PomodoroTimer from "../components/pomodoro/PomodoroTimer";
import { useLanguage } from "../context/LanguageContext";

export default function Pomodoro() {

  const { language } = useLanguage();

  const texts = {
    en: {
      hero: "A minimal focus toolkit for students, developers, and remote workers.",
    },
    tr: {
      hero: "Öğrenciler, geliştiriciler ve uzaktan çalışanlar için sade bir odaklanma aracı.",
    },
  };
  return(
    <div>

       {/* HERO MICRO-COPY */}
      <section className="hero-micro">
        <p>{texts[language].hero}</p>
      </section>


      <PomodoroTimer />
    </div>
  )
}