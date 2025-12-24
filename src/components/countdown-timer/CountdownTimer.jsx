import { useEffect, useRef, useState } from "react";
import TimerControls from "../pomodoro/TimerControls";
import TimerDisplay from "../pomodoro/TimerDisplay";
import TimerInfo from "./TimerInfo";
import "./timer.css";
import alarmSound from "../../sound/alarm.mp3";
import { useLanguage } from "../../context/LanguageContext";







export default function CountdownTimer() {

  const { language } = useLanguage();

  const texts = {
    en: {
      title: "Timer",
      hour: "hours",
      minute: "minutes",
      second: "seconds",
      start: "Start",
      pause: "Pause",
      resume: "Resume",
      reset: "Reset",
    },
    tr: {
      title: "Zamanlayıcı",
      hour: "saat",
      minute: "dakika",
      second: "saniye",
      start: "Başlat",
      pause: "Duraklat",
      resume: "Devam",
      reset: "Sıfırla",
    },
  };

  const t = texts[language];


  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [soundEnabled, setSoundEnabled] = useState(true);


  const intervalRef = useRef(null);
  const targetTimeRef = useRef(null);
  const alarmRef = useRef(null);



  const startTimer = () => {

    if (alarmRef.current) {
    alarmRef.current.play().catch(() => {});
    alarmRef.current.pause();
    alarmRef.current.currentTime = 0;
  }


    if(isRunning) return;

    const totalSeconds = 
    Number(hours || 0) * 3600 +
    Number(minutes || 0) * 60 +
    Number(seconds || 0);


    if(totalSeconds <= 0) return;


    targetTimeRef.current = Date.now() + totalSeconds * 1000;
    setRemainingSeconds(totalSeconds);
    setIsRunning(true);
    setIsPaused(false);
  };




  const pauseTimer = () => {
    if(!isRunning) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;

    const remaining =
    Math.max(
      0,
      Math.floor((targetTimeRef.current - Date.now()) / 1000)
    );

    setRemainingSeconds(remaining);
    setIsPaused(true);
    setIsRunning(false);
    };


  const resumeTimer = () => {
    if(!isPaused) return;

    targetTimeRef.current = Date.now() + remainingSeconds * 1000;
    setIsRunning(true);
    setIsPaused(false);
  };



  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    setIsRunning(false);
    setIsPaused(false);
    setRemainingSeconds(0);
    targetTimeRef.current = null;

    if (alarmRef.current) {
  alarmRef.current.pause();
  alarmRef.current.currentTime = 0;
}

  };

  useEffect(() => {
  alarmRef.current = new Audio(alarmSound);
}, []);



  useEffect(() => {
    if(!isRunning) return;

    intervalRef.current = setInterval(() => {
      const remaining =
      Math.max(
        0,
        Math.floor((targetTimeRef.current - Date.now()) / 1000)
      );

      setRemainingSeconds(remaining);

      if(remaining === 0) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
        setIsPaused(false);
        
        if(soundEnabled && alarmRef.current) {
          alarmRef.current.currentTime = 0;
          alarmRef.current.play();
        }
      }
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, soundEnabled]);



  const formatTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };



  return(
    <>
    <section className="timer-card">

      <h2>{t.title}</h2>

      {!isRunning && !isPaused && (
        <div className="timer-inputs">

          <input
          type="number"
          placeholder={t.hour}
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          />

          <input
          type="number"
          placeholder={t.minute}
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          />

          <input
          type="number"
          placeholder={t.second}
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          />
        </div>
      )}



      <div className="timer-display">
        {formatTime(remainingSeconds)}
      </div>



      <div className="timer-controls">

        {!isRunning && !isPaused && (
          <button onClick={startTimer}>{t.start}</button>
        )}

        {isRunning && (
          <button onClick={pauseTimer}>{t.pause}</button>
        )}


        {isPaused && (
          <button onClick={resumeTimer}>{t.resume}</button>
        )}

        <button onClick={resetTimer}>{t.reset}</button>
      </div>

    </section>

    <div className="timer-info">
      <TimerInfo />
    </div>
    </>
  )
}





