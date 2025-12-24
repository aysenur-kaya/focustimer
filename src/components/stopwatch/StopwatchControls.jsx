import { useLanguage } from "../../context/LanguageContext";

export default function StopwatchControls({
  isRunning,
  onStart,
  onPause,
  onReset,
  onLap,
}) {

   const { language } = useLanguage();

  const texts = {
    en: {
      start: "Start",
      pause: "Pause",
      lap: "Lap",
      reset: "Reset",
    },
    tr: {
      start: "Başlat",
      pause: "Duraklat",
      lap: "Tur",
      reset: "Sıfırla",
    },
  };

  const t = texts[language];

  return(
    <div className="stopwatch-controls">
      {!isRunning ? (
        <button onClick={onStart}>{t.start}</button>
      ) : (
        <>
        <button onClick={onPause}>{t.pause}</button>
        <button onClick={onLap}>{t.lap}</button>
        <button onClick={onReset}>{t.reset}</button>
        </>
      )}
    </div>
  );

}