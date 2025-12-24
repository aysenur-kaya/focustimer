import { useLanguage } from "../../context/LanguageContext";

export default function StopwatchLaps({ laps }) {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "Lap History",
      lap: "Lap",
      second: "s",
      empty: "No laps yet",
    },
    tr: {
      title: "Tur Geçmişi",
      lap: "Tur",
      second: "sn",
      empty: "Henüz tur yok",
    },
  };

  const t = texts[language];

  if (laps.length === 0) {
    return (
      <div className="stopwatch-laps">
        <h4>{t.title}</h4>
        <p className="history-item">{t.empty}</p>
      </div>
    );
  }

  return (
    <div className="stopwatch-laps">
      <h4>{t.title}</h4>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            {t.lap} {index + 1} – {lap.time}
            {t.second} ({lap.date})
          </li>
        ))}
      </ul>
    </div>
  );
}
