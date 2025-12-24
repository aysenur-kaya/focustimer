import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "About Focus Timer",
      p1:
        "Focus Timer is a simple and effective productivity tool designed to help users manage their time and improve focus.",
      p2:
        "The website offers tools such as a Pomodoro timer, countdown timer, stopwatch, and world clock, all in one place.",
      p3:
        "Our goal is to provide a clean and distraction-free experience that supports better concentration and time management.",
      p4:
        "Focus Timer is built for students, professionals, and anyone looking to organize their work sessions more efficiently.",
    },

    tr: {
      title: "Focus Timer Hakkında",
      p1:
        "Focus Timer, kullanıcıların zamanlarını daha verimli yönetmelerine ve odaklanmalarını artırmalarına yardımcı olmak için tasarlanmış basit ve etkili bir üretkenlik aracıdır.",
      p2:
        "Web sitesi; Pomodoro zamanlayıcı, geri sayım zamanlayıcısı, kronometre ve dünya saatleri gibi araçları tek bir platformda sunar.",
      p3:
        "Amacımız, dikkat dağıtıcı unsurlardan arındırılmış sade bir deneyim sunarak daha iyi konsantrasyon ve zaman yönetimini desteklemektir.",
      p4:
        "Focus Timer; öğrenciler, profesyoneller ve çalışma sürecini daha düzenli hale getirmek isteyen herkes için geliştirilmiştir.",
    },
  };

  const t = texts[language];

  return (
    <div className="legal-page">
      <h1>{t.title}</h1>

      <p>{t.p1}</p>
      <p>{t.p2}</p>
      <p>{t.p3}</p>
      <p>{t.p4}</p>
    </div>
  );
}
