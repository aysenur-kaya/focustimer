export default function StopwatchDisplay({elapsedSeconds}) {

  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;


  const pad = (n) => String(n).padStart(2, "0");


  return(
    <div className="stopwatch-display">
      {pad(hours)}:{pad(minutes)}:{pad(seconds)}
    </div>
  );
}