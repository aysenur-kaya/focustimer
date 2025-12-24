import { useEffect, useState } from "react";
import WorldClockSearch from "./WorldClockSearch";
import WorldClockInfo from "./WorldClockInfo";
import "./WorldClock.css";
import { useLanguage } from "../../context/LanguageContext";




export default function WorldClockTimer() {

   const { language } = useLanguage();

  const texts = {
    en: {
      title: "World Clock",
      defaultCountry: "Turkey",
      locale: "en-US",
    },
    tr: {
      title: "Dünya Saatleri",
      defaultCountry: "Türkiye",
      locale: "tr-TR",
    },
  };

  const t = texts[language];



  const [timeZone, setTimeZone] = useState("Europe/Istanbul");
  const [currentTime, setCurrentTime] = useState("--:--:--");
  const [country, setCountry] = useState({
    name:"Turkey",
    flag: "https://flagcdn.com/tr.svg",
  });



 useEffect(() => {
  let interval;

  const updateTime = () => {
    try{
      const time = new Date().toLocaleTimeString("tr-TR", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(time);
    }catch{
      setCurrentTime("--:--:--");
    }
  };

  updateTime();
  interval=setInterval(updateTime, 1000);

  return () => clearInterval(interval);
 },[timeZone]);



  return(
    <>
    <section className="worldclock-card">

      <h2>{t.title}</h2>

      {country && (
        <div className="worldclock-country">
          <img src={country.flag} alt={country.name} />
          <span>{country.name}</span>
        </div>
      )}


      <div className="worldclock-time">{currentTime}</div>

      <WorldClockSearch
      onSelect = {(data) => {
        setTimeZone(data.timeZone);
        setCountry({
          name: data.name,
          flag: data.flag,
        });
      }}
      />

    </section>

    <div className="info-card">
    <WorldClockInfo/>
    </div>

    </>
  );
}