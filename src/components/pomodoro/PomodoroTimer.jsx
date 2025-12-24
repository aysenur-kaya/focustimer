import { useEffect, useRef, useState } from "react"
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import PomodoroHistory from "./PomodoroHistory";
import PomodoroInfo from "./PomodoroInfo";
import alarmSound from "../../sound/alarm.mp3";
import { useLanguage } from "../../context/LanguageContext";

import "./pomodoro.css";



export default function PomodoroTimer() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "Pomodoro",
      work: "Work (min)",
      break: "Break (min)",
    },
    tr: {
      title: "Pomodoro",
      work: "Çalışma (dk)",
      break: "Mola (dk)",
    },
  };

  const t = texts[language];

    const [workDuration, setWorkDuration] = useState(25);
    const [breakDuration, setBreakDuration] = useState(5);
    const [longBreakDuration, setLongBreakDuration]= useState(5);
    const [remainingSeconds, setRemainingSeconds] = useState(workDuration *60)


    const [mode, setMode] = useState("work");
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const [pomodoroCount, setPomodoroCount] = useState(0);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [history, setHistory] = useState([]);

    const intervalRef = useRef(null);
    const startTimeRef = useRef(null);
    const targetTimeRef = useRef(null);
    const remainingTimeRef = useRef(null);
    const audioRef = useRef(null);



    const startTimer = () => {
      if(isRunning) return;

      const now = Date.now();

      let durationInMinutes;

      if(mode === "work") {
        durationInMinutes = workDuration;
      } else if (mode === "break") {
        durationInMinutes = breakDuration;
      } else{
        durationInMinutes = longBreakDuration;
      }


      const durationMs = durationInMinutes * 60 * 1000;
      const targetTime = now + durationMs;


      targetTimeRef.current = targetTime;
      


      setRemainingSeconds(durationInMinutes * 60);
      setIsRunning(true);
      setIsPaused(false);
    };


    const pauseTimer = () => {
      if(!isRunning || isPaused) return;

      if(intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }


      remainingTimeRef.current = remainingSeconds;

      setIsPaused(true);
      setIsRunning(false);
    };



    const continueTimer = () => {
      if (!isPaused || remainingTimeRef.current == null) return;

      const now = Date.now();
      const remainingMs = remainingTimeRef.current * 1000;

      targetTimeRef.current = now + remainingMs;

      setIsPaused(false);
      setIsRunning(true);
    };




    const resetTimer = () => {

      if(intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      setIsRunning(false);
      setIsPaused(false);

      if(mode=== "work") {
        setRemainingSeconds(workDuration * 60);
      }else if(mode === "break") {
        setRemainingSeconds(breakDuration * 60);
      }else {
        setRemainingSeconds(longBreakDuration * 60);
      }


    };


    // 2. 🔊 playSound (BURAYA)
const playSound = () => {
  if (!soundEnabled || !audioRef.current) return;

  audioRef.current.currentTime = 0;
  audioRef.current.play();
};

    

    const handleTimerFinish = () => {
  if (mode === "work") {
    setPomodoroCount(prevCount => {
      const newCount = prevCount + 1;

      const newHistoryItem = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        duration: workDuration,
      };

      setHistory(prevHistory => {
        const updated = [newHistoryItem, ...prevHistory];
        localStorage.setItem(
          "pomodoroHistory",
          JSON.stringify(updated)
        );
        return updated;
      });

      if (newCount % 3 === 0) {
        setMode("longBreak");
        setRemainingSeconds(longBreakDuration * 60);
      } else {
        setMode("break");
        setRemainingSeconds(breakDuration * 60);
      }

      return newCount;
    });

  } else {
    // mola bittiyse tekrar work
    setMode("work");
    setRemainingSeconds(workDuration * 60);
  }
};



useEffect(() => {
  audioRef.current = new Audio(alarmSound);
  audioRef.current.volume = 0.8;
}, []);


  


    useEffect(() => {
  if (!isRunning) return;

  intervalRef.current = setInterval(() => {
    const remainingMs = targetTimeRef.current - Date.now();
    const safeMs = Math.max(0, remainingMs);

    setRemainingSeconds(Math.ceil(safeMs / 1000));

    if (safeMs === 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;

      setIsRunning(false);
      playSound();
      handleTimerFinish();
    }
  }, 250);


      return() => {
        if(intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }, [isRunning]);




    useEffect(() => {
  const savedHistory = localStorage.getItem("pomodoroHistory");

  if (savedHistory) {
    setHistory(JSON.parse(savedHistory));
  }
}, []);



  return(

    <>

    <div className="timer-container">

      <h2>{t.title}</h2>

      <div className="timer-settings">

        <div className="setting-item">
          <label htmlFor="work">{t.work}</label>
          <input 
          type="number"
          min="1"
          value={workDuration}
          onChange={(e) => setWorkDuration(Number(e.target.value ))}
          disabled={isRunning}
          />
        </div>

        <div className="setting-item">
          <label htmlFor="break">{t.break}</label>
          <input 
          type="number"
          min="1"
          value={breakDuration}
          onChange={(e) => setBreakDuration(Number(e.target.value))}
          disabled={isRunning}
           />
        </div>

      </div>


      <TimerDisplay
      remainingSeconds = {remainingSeconds}
      mode={mode}
       />

       <TimerControls
       isRunning={isRunning}
       isPaused={isPaused}
       onStart={startTimer}
       onPause={pauseTimer}
       onContinue={continueTimer}
       onReset={resetTimer}
        />


        <PomodoroHistory  history={history}/>



    </div>


 {/* === INFO SECTION (BAĞIMSIZ) === */}
    <section className="pomodoro-info-section">
      <PomodoroInfo />
    </section>

    </>
  )
}