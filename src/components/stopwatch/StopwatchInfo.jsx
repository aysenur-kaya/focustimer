import { useLanguage } from "../../context/LanguageContext";

export default function StopwatchInfo() {

  const { language } = useLanguage();

  const texts = {
    tr: {
      title: "Kronometre Nedir?",
      p1: `Kronometre, geçen süreyi saniye hassasiyetinde ölçmek için
      kullanılan bir zaman takip aracıdır. Bu bölümde, süreyi
      başlatabilir, duraklatabilir ve ihtiyaç duyduğunuz anlarda
      tur ekleyerek ara süreleri kaydedebilirsiniz.`,
      p2: `Başlat butonuna bastığınızda kronometre çalışmaya başlar
      ve geçen süre anlık olarak ekranda gösterilir. Duraklat
      butonu ile süreyi geçici olarak durdurabilir, Sıfırla
      butonu ile tüm süreyi ve kaydedilen turları temizleyebilirsiniz.`,
      p3: `Tur butonu ise spor, ders çalışma veya zaman ölçümü
      gerektiren diğer aktivitelerde ara süreleri takip etmenizi
      sağlar. Eklenen her tur, aşağıdaki geçmiş bölümünde listelenir.`,
    },
    en: {
      title: "What is a Stopwatch?",
      p1: `A stopwatch is a time-tracking tool used to measure elapsed
      time with second-level precision. In this section, you can
      start, pause, and record lap times to track intermediate
      durations whenever needed.`,
      p2: `When you press the Start button, the stopwatch begins
      running and the elapsed time is displayed in real time.
      You can temporarily pause the timer or reset it to clear
      all recorded time and laps.`,
      p3: `The Lap button is useful for tracking intermediate times
      during sports, studying, or other activities that require
      precise time measurement. Each lap is listed in the history
      section below.`,
    },
  };

  const t = texts[language];

  return (
   <div className="stopwatch-info">
      <h3>{t.title}</h3>
      <p>{t.p1}</p>
      <p>{t.p2}</p>
      <p>{t.p3}</p>
    </div>
  );
}
