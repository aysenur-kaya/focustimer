import { useLanguage } from "../context/LanguageContext";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "Privacy Policy",
      intro:
        "At Focus Timer, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.",

      informationTitle: "Information We Collect",
      informationText:
        "We do not collect personally identifiable information such as name, address, or email unless you voluntarily provide it. However, we may collect non-personal information including browser type, device information, IP address, and usage data for analytical purposes.",

      cookiesTitle: "Cookies",
      cookiesText:
        "Focus Timer uses cookies to improve user experience. Cookies are small data files stored on your device that help us understand how visitors interact with the website.",

      adsTitle: "Google AdSense",
      adsText:
        "We use Google AdSense to display advertisements. Google may use cookies, including the DoubleClick cookie, to show ads based on your visits to this and other websites. You can opt out of personalized advertising by visiting Google Ads Settings.",

      thirdPartyTitle: "Third-Party Services",
      thirdPartyText:
        "We may use third-party services such as analytics or advertising providers that collect, monitor, and analyze usage information to help improve our service.",

      rightsTitle: "Your Rights",
      rightsText:
        "You have the right to access, update, or delete your personal information. If you have any questions regarding this Privacy Policy, please contact us.",

      contactTitle: "Contact",
      contactText:
        "If you have any questions about this Privacy Policy, you can contact us at: contact@focustimer.online",
    },

    tr: {
      title: "Gizlilik Politikası",
      intro:
        "Focus Timer olarak gizliliğinize önem veriyoruz. Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını, nasıl kullanıldığını ve nasıl korunduğunu açıklar.",

      informationTitle: "Toplanan Bilgiler",
      informationText:
        "Ad, adres veya e-posta gibi kişisel olarak tanımlanabilir bilgileri, siz gönüllü olarak paylaşmadığınız sürece toplamıyoruz. Ancak tarayıcı türü, cihaz bilgileri, IP adresi ve kullanım verileri gibi kişisel olmayan bilgiler analiz amacıyla toplanabilir.",

      cookiesTitle: "Çerezler (Cookies)",
      cookiesText:
        "Focus Timer, kullanıcı deneyimini iyileştirmek için çerezler kullanır. Çerezler, ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olan küçük veri dosyalarıdır.",

      adsTitle: "Google AdSense",
      adsText:
        "Web sitemizde reklam göstermek için Google AdSense kullanıyoruz. Google, DoubleClick çerezi dahil olmak üzere çerezler kullanarak ilgi alanlarınıza göre reklam gösterebilir.",

      thirdPartyTitle: "Üçüncü Taraf Hizmetler",
      thirdPartyText:
        "Hizmetimizi geliştirmek amacıyla analiz veya reklam sağlayıcıları gibi üçüncü taraf hizmetlerden yararlanabiliriz.",

      rightsTitle: "Kullanıcı Hakları",
      rightsText:
        "Kişisel verilerinize erişme, güncelleme veya silme hakkına sahipsiniz. Gizlilik politikamız hakkında sorularınız varsa bizimle iletişime geçebilirsiniz.",

      contactTitle: "İletişim",
      contactText:
        "Bu gizlilik politikasıyla ilgili sorularınız için bize şu adresten ulaşabilirsiniz: contact@focustimer.online",
    },
  };

  const t = texts[language];

  return (
    <div className="legal-page">
      <h1>{t.title}</h1>

      <p>{t.intro}</p>

      <h2>{t.informationTitle}</h2>
      <p>{t.informationText}</p>

      <h2>{t.cookiesTitle}</h2>
      <p>{t.cookiesText}</p>

      <h2>{t.adsTitle}</h2>
      <p>{t.adsText}</p>

      <h2>{t.thirdPartyTitle}</h2>
      <p>{t.thirdPartyText}</p>

      <h2>{t.rightsTitle}</h2>
      <p>{t.rightsText}</p>

      <h2>{t.contactTitle}</h2>
      <p>{t.contactText}</p>
    </div>
  );
}
