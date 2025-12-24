
import { useLanguage } from "../../context/LanguageContext";

export default function TimerControls({
  isRunning, 
  isPaused,
  onStart,
  onPause,
  onContinue,
  onReset,
  }) {

    const { language } = useLanguage();

  const texts = {
    en: {
      start: "Start",
      pause: "Pause",
      continue: "Continue",
      reset: "Reset",
    },
    tr: {
      start: "Başlat",
      pause: "Durdur",
      continue: "Devam Et",
      reset: "Sıfırla",
    },
  };

  const t = texts[language];


  return(
    <div className="timer-controls">

      {!isRunning && !isPaused && (
        <button className="btn-primary" onClick={onStart}>
          {t.start}
        </button>
      )}


      {isRunning && !isPaused && (
        <button className="btn-secondary" onClick={onPause}>
          {t.pause}
        </button>
      )} 


      {isPaused &&  (
        <button className="btn-warming" onClick={onContinue}>
           {t.continue}
        </button>
      )}



        <button className="btn-danger" onClick={onReset}>
          {t.reset}
        </button>

    </div>
  );
}