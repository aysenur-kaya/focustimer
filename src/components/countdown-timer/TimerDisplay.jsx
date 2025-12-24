
export default function TimerDisplay({remainingSeconds}) {

  const formatTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };


  return(
    <div className="timer-display">
      {formatTime(remainingSeconds)}
    </div>
  );
}