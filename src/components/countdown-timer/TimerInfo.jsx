import { useLanguage } from "../../context/LanguageContext";

export default function countdownİnfo() {
  const { language } = useLanguage();

  const texts = {
    tr: {
      title: "Zamanlayıcı Nedir?",
      intro1: `Zamanlayıcı, belirli bir süreyi önceden ayarlayarak
      çalışmayı, dinlenmeyi veya herhangi bir aktiviteyi kontrollü
      şekilde yönetmeyi sağlayan basit ama etkili bir araçtır.
      Saat, dakika ve saniye cinsinden bir süre belirlenir ve
      geri sayım bu sürenin sonunda kullanıcıyı bilgilendirir.`,
      intro2: `Bu yöntem, özellikle zaman farkındalığını artırmak
      ve dikkat dağınıklığını azaltmak için oldukça faydalıdır.
      Sürenin başı ve sonu net olduğu için, zamanı sürekli
      kontrol etme ihtiyacını ortadan kaldırır.`,

      whenTitle: "Ne Zaman Kullanılır?",
      when1: `Zamanlayıcı; Pomodoro gibi döngüsel çalışma
      yöntemlerinden farklı olarak, tek seferlik ve net
      bir süre gerektiren durumlar için idealdir.`,
      whenList: [
        "Belirli bir süre ders çalışmak",
        "Kısa molalar ayarlamak",
        "Egzersiz veya esneme sürelerini takip etmek",
        "Sunum ve toplantı sürelerini kontrol etmek",
        "Günlük küçük hedefler için zaman sınırı koymak",
      ],

      whyTitle: "Neden Etkilidir?",
      why1: `Zamanlayıcı, zihne net bir sınır koyar.
      Süre başladığında odak tek bir noktada toplanır
      ve zamanın akışı yerine yapılan işe yoğunlaşılır.`,
      benefits: [
        "Odaklanmayı artırır",
        "Erteleme alışkanlığını azaltır",
        "Zaman yönetimini güçlendirir",
        "Günlük işleri daha planlı hale getirir",
      ],

      goalTitle: "Bu Zamanlayıcının Amacı",
      goal1: `Bu zamanlayıcı, karmaşık ayarlar veya
      dikkat dağıtan detaylar olmadan sade ve
      anlaşılır bir deneyim sunmak için tasarlanmıştır.`,
      goal2: `Amaç, kullanıcıya baskı oluşturmak değil;
      zamanı fark ederek kontrollü ve verimli bir
      şekilde ilerlemeyi kolaylaştırmaktır.`,
      usage: `Kullanım basittir: Süreni belirle,
      başlat ve geri sayımı takip et.`,
    },

    en: {
      title: "What Is a Timer?",
      intro1: `A timer is a simple yet effective tool that allows
      you to manage work, rest, or any activity in a controlled
      way by setting a duration in advance. A specific time is
      defined in hours, minutes, or seconds, and the countdown
      notifies the user when it ends.`,
      intro2: `This method is especially useful for increasing
      time awareness and reducing distractions. Since the
      duration has a clear beginning and end, there is no need
      to constantly check the time.`,

      whenTitle: "When Is It Used?",
      when1: `Unlike cyclical methods such as Pomodoro,
      a timer is ideal for situations that require
      a single, clearly defined duration.`,
      whenList: [
        "Studying for a fixed period of time",
        "Setting short breaks",
        "Tracking exercise or stretching sessions",
        "Managing presentation or meeting durations",
        "Setting time limits for small daily goals",
      ],

      whyTitle: "Why Is It Effective?",
      why1: `A timer sets a clear mental boundary.
      Once the countdown starts, focus remains on
      the task rather than on the passage of time.`,
      benefits: [
        "Improves focus",
        "Reduces procrastination",
        "Strengthens time management",
        "Encourages structured daily routines",
      ],

      goalTitle: "Purpose of This Timer",
      goal1: `This timer is designed to provide a simple
      and distraction-free experience without complex
      settings or unnecessary details.`,
      goal2: `The goal is not to create pressure, but to
      support mindful and efficient progress by
      increasing time awareness.`,
      usage: `Usage is simple: set your time,
      start the countdown, and follow along.`,
    },
  };

  const t = texts[language];



  return(

    <div className="timer-info">
      <h2>{t.title}</h2>

      <p>{t.intro1}</p>
      <p>{t.intro2}</p>

      <h3>{t.whenTitle}</h3>
      <p>{t.when1}</p>
      <ul>
        {t.whenList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{t.whyTitle}</h3>
      <p>{t.why1}</p>
      <ul>
        {t.benefits.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{t.goalTitle}</h3>
      <p>{t.goal1}</p>
      <p>{t.goal2}</p>
      <p>{t.usage}</p>
    </div>
     
     
  )
}