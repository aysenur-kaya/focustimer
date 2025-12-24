import { useLanguage } from "../../context/LanguageContext";

export default function PomodoroHistory({history}) {

 const { language } = useLanguage();

  const texts = {
    en: {
      title: "Pomodoro History",
      empty: "No records yet",
      minute: "min",
    },
    tr: {
      title: "Pomodoro Geçmişi",
      empty: "Henüz kayıt yok",
      minute: "dk",
    },
  };

  const t = texts[language];

  return(
    <div className="pomodoro-history">

      <p className="history-title">{t.title}</p>

      {history.length === 0 && (
        <p className="history-item">{t.empty}</p>
      )}

      {history.map((item) => (
        <div key={item.id} className="history-item">
          {item.date} - {item.time} ({item.duration} {t.minute})
        </div>

      ))}




    </div>
  )
}

