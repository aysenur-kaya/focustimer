import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "Contact",
      intro:
        "If you have any questions, suggestions, or feedback about Focus Timer, feel free to reach out to us.",
      emailLabel: "Email",
      emailText:
        "You can contact us directly via email. We aim to respond as soon as possible.",
    },

    tr: {
      title: "İletişim",
      intro:
        "Focus Timer ile ilgili soru, öneri veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz.",
      emailLabel: "E-posta",
      emailText:
        "Bizimle doğrudan e-posta yoluyla iletişime geçebilirsiniz. En kısa sürede dönüş yapmayı hedefliyoruz.",
    },
  };

  const t = texts[language];

  return (
    <div className="legal-page">
      <h1>{t.title}</h1>

      <p>{t.intro}</p>

      <h2>{t.emailLabel}</h2>
      <p>
        {t.emailText}
        <br />
        <strong>contact@focustimer.online</strong>
      </p>
    </div>
  );
}
