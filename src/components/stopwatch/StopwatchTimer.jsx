import { useEffect, useRef, useState } from "react";
import StopwatchLaps from "./StopwatchLaps";
import StopwatchControls from "./StopwatchControls";
import StopwatchDisplay from "./StopwatchDisplay";
import StopwatchInfo from "./StopwatchInfo";
import "./Stopwatch.css";





export default function StopwatchTimer() {
  const[elapsedSeconds, setElapsedSeconds] = useState(0);
  const[isRunning, setIsRunning] = useState(false);
  const[laps, setLaps] = useState([]);

  const intervalRef = useRef(null);


  const start = () => {
    if(isRunning) return;

    setIsRunning(true);

    intervalRef.current= setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    },1000)
  };



  const pause = () => {
    setIsRunning(false);

    if(intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };



  const reset = () => {
    pause();
    setElapsedSeconds(0);
    setLaps([]);
  };

  const lap = () => {
    setLaps((prev) => [
      ...prev,
      {
        time: elapsedSeconds,
        date: new Date().toLocaleTimeString(),
      },
    ]);
  };






  useEffect(() => {
    return () => {
      if(intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  },[]);

return(

  <>
  <section className="stopwatch-card">

    <h2>Kronometre</h2>

    <StopwatchDisplay elapsedSeconds={elapsedSeconds} />

    <StopwatchControls
    isRunning={isRunning}
    onStart={start}
    onPause={pause}
    onReset={reset}
    onLap={lap}
    />

    <StopwatchLaps laps={laps} />
  </section>

  <div className="sw-info">
  <StopwatchInfo />
  </div>
  </>
)


}