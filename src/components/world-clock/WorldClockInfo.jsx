import { useLanguage } from "../../context/LanguageContext";

export default function WorldClockInfo() {

   const { language } = useLanguage();

  const texts = {
    en: {
      title: "What is World Clock?",
      p1: `The World Clock tool allows you to track the local time of
           different countries and cities in real time.
           It is an ideal solution for people who work internationally,
           plan travels, or communicate with others living in different
           time zones.`,
      p2: `By searching for a country or city, you can view the local time
     with second-level accuracy. This allows you to easily compare
     time differences between regions, plan meetings more efficiently,
     and avoid scheduling mistakes. It is especially useful for
     global teams and frequent travelers.`,

    },
    tr: {
      title: "Dünya Saatleri Nedir?",
      p1: `Dünya Saatleri aracı, farklı ülkelerin ve şehirlerin yerel
           saatlerini anlık olarak takip etmenizi sağlar.
           Uluslararası çalışma yapanlar, seyahat planlayanlar veya
           farklı zaman dilimlerinde yaşayan kişilerle iletişim kuranlar
           için ideal bir çözümdür.`,
      p2: `Ülke veya şehir araması yaparak istediğiniz konumun saatini
     saniye hassasiyetinde görüntüleyebilirsiniz. Bu sayede farklı
     bölgeler arasındaki saat farklarını kolayca karşılaştırabilir,
     toplantı saatlerini planlayabilir ve zamanlama hatalarının
     önüne geçebilirsiniz. Dünya genelinde çalışan ekipler ve
     sık seyahat eden kullanıcılar için büyük bir kolaylık sağlar.`,

    },
  };

  const t = texts[language];


  return (
    <div className="worldclock-info">
      <h3>{t.title}</h3>
      <p>{t.p1}</p>
      <p>{t.p2}</p>
    </div>
  );
}
