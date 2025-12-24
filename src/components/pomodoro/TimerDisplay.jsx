

export default function TimerDisplay({remainingSeconds, mode}) {

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString()
    .padStart(2,"0")}`;



  return(
    <div className={`timer-display ${mode}`}>
      <p className="timer-mode"> {mode === "work"
       ? "Focus Time" 
       : mode === "break" 
       ? "Short Break" 
       : "Long Break"}

      </p>

      <h1 className="timer-time">{formattedTime}</h1>
    </div>
  )
}