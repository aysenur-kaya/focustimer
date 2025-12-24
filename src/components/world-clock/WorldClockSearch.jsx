import { useState } from "react";
import { TIMEZONES } from "./timezones";
import { useLanguage } from "../../context/LanguageContext";

export default function WorldClockSearch({ onSelect }) {

  const { language } = useLanguage();
  const [query, setQuery] = useState("");

   const texts = {
    en: {
      placeholder: "Search country or city (Tokyo, London, Istanbul)",
    },
    tr: {
      placeholder: "Ülke veya şehir ara (Tokyo, London, İstanbul)",
    },
  };

  const t = texts[language];

  const results = TIMEZONES.filter(
    (item) =>
      item.city.toLowerCase().includes(query.toLowerCase()) ||
      item.country.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 20);

  return (
    <div className="worldclock-search">
      <input
        placeholder={t.placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <ul>
          {results.map((item) => (
            <li
              key={item.timeZone}
              onClick={() =>
                onSelect({
                  name: `${item.city}, ${item.country}`,
                  timeZone: item.timeZone,
                  flag: `https://flagcdn.com/w40/${item.code.toLowerCase()}.png`,
                })
              }
            >
              <img
                src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                alt={item.country}
              />
              <span>{item.city}, {item.country}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
