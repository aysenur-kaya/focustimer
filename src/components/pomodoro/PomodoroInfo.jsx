import { useLanguage } from "../../context/LanguageContext";

export default function PomodoroInfo () {

    const { language } = useLanguage();

  const texts = {
    tr: {
      title: "Odaklanma Kültürü ve Pomodoro Tekniği",
      intro1: `Doğu felsefelerinde, özellikle Japon çalışma kültüründe
      odaklanma; kısa süreli, bilinçli ve kesintisiz dikkat üzerine kuruludur.
      Japonlar için verimlilik, uzun saatler çalışmak değil, belirli bir
      zaman diliminde zihni tek bir işe tamamen vermektir.`,
      intro2: `Kaizen (sürekli küçük iyileştirmeler), Shokunin (işine saygı
      ve ustalık) ve Ikigai (anlamlı çalışma) gibi kavramlar, zihinsel
      odağın korunmasını temel alır. Pomodoro Tekniği de bu anlayışla
      birebir örtüşen modern bir zaman yönetimi yöntemidir.`,
      whatTitle: "Pomodoro Tekniği Nedir?",
      what1: `Pomodoro Tekniği, çalışma süresini kısa ve yönetilebilir
      parçalara bölerek zihinsel yorgunluğu azaltmayı ve dikkati tek
      bir göreve yoğunlaştırmayı amaçlayan bir tekniktir. 1980’li
      yıllarda Francesco Cirillo tarafından geliştirilmiştir.`,
      what2: `Bu teknik, beynin doğal odaklanma süresine saygı gösterir.
      Uzun süre kesintisiz çalışmak yerine, bilinçli aralıklarla
      çalışmayı ve dinlenmeyi önerir.`,
      howTitle: "Pomodoro Tekniği Nasıl Uygulanır?",
      steps: [
        "25 dakika boyunca tek bir işe odaklanılır",
        "5 dakika kısa mola verilir",
        "3–4 döngü sonrası daha uzun bir mola yapılır",
      ],
      howEnd: `Bu döngü, zihni yormadan verimli çalışmayı mümkün kılar ve
      dikkat dağınıklığını bilinçli şekilde kontrol altına alır.`,
      whyTitle: "Neden Etkilidir?",
      why1: `Pomodoro Tekniği, modern dünyada sıkça karşılaşılan dikkat
      dağınıklığı, erteleme ve zihinsel tükenmişlik problemlerine karşı
      etkili bir çözümdür.`,
      benefits: [
        "Derin odaklanma alışkanlığı kazandırır",
        "Zihinsel yorgunluğu azaltır",
        "İşi küçük parçalara bölerek başlama direncini kırar",
        "Çalışma ve dinlenme dengesini korur",
      ],
      goalTitle: "Bu Uygulamanın Amacı",
      goal1: `Bu uygulama, Pomodoro Tekniği’nin temel prensiplerini sade
      ve kullanıcı dostu bir arayüzle sunmak için geliştirilmiştir.
      Amaç, kullanıcıya zaman baskısı oluşturmak değil; bilinçli
      çalışma ve sürdürülebilir odaklanma alışkanlığı kazandırmaktır.`,
      goal2: `Düzenli kullanım, zaman yönetimi becerilerini geliştirir
      ve çalışma sürecini daha kontrollü ve anlamlı hale getirir.`,
    },

    en: {
      title: "Focus Culture and the Pomodoro Technique",
      intro1: `In Eastern philosophies, especially in Japanese work culture,
      focus is built on short, conscious, and uninterrupted attention.
      For the Japanese, productivity is not about working long hours,
      but fully dedicating the mind to a single task within a defined
      time period.`,
      intro2: `Concepts such as Kaizen (continuous improvement),
      Shokunin (craftsmanship and respect for work), and Ikigai
      (meaningful work) emphasize preserving mental focus. The
      Pomodoro Technique closely aligns with this philosophy as a
      modern time management method.`,
      whatTitle: "What is the Pomodoro Technique?",
      what1: `The Pomodoro Technique is a method designed to reduce
      mental fatigue and improve focus by breaking work into short,
      manageable intervals. It was developed by Francesco Cirillo
      in the 1980s.`,
      what2: `This technique respects the brain’s natural attention span.
      Instead of working continuously for long periods, it promotes
      conscious cycles of work and rest.`,
      howTitle: "How Does the Pomodoro Technique Work?",
      steps: [
        "Focus on a single task for 25 minutes",
        "Take a short 5-minute break",
        "After 3–4 cycles, take a longer break",
      ],
      howEnd: `This cycle enables efficient work without mental exhaustion
      and helps consciously manage distractions.`,
      whyTitle: "Why Is It Effective?",
      why1: `The Pomodoro Technique provides an effective solution to
      common modern problems such as distraction, procrastination,
      and mental burnout.`,
      benefits: [
        "Builds deep focus habits",
        "Reduces mental fatigue",
        "Breaks tasks into manageable parts",
        "Maintains a healthy work–rest balance",
      ],
      goalTitle: "Purpose of This Application",
      goal1: `This application was developed to present the core principles
      of the Pomodoro Technique through a simple and user-friendly
      interface. The goal is not to create time pressure, but to
      encourage mindful work and sustainable focus habits.`,
      goal2: `Regular use improves time management skills and makes
      the working process more controlled and meaningful.`,
    },
  };

  const t = texts[language];


  return(
    <div className="pomodoro-info">
      <h2>{t.title}</h2>

      <p>{t.intro1}</p>
      <p>{t.intro2}</p>

      <h3>{t.whatTitle}</h3>
      <p>{t.what1}</p>
      <p>{t.what2}</p>

      <h3>{t.howTitle}</h3>
      <ul>
        {t.steps.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>{t.howEnd}</p>

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
    </div>
  )
}